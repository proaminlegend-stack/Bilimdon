const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Kun Toshkent vaqti (UTC+5) bo'yicha hisoblanadi
const TZ_OFFSET = 5 * 60 * 60 * 1000;
const KEEP_MS = 7 * 24 * 60 * 60 * 1000; // eski natijalar 7 kun saqlanadi

// ======================================================================
// 1-usul: Postgres (DATABASE_URL berilgan bo'lsa). Render'da ham o'chmaydi.
// 2-usul: scores.json fayli (DATABASE_URL yo'q bo'lsa, telefonda sinash uchun).
// ======================================================================
let pool = null;
const rawUrl = process.env.DATABASE_URL;

if (rawUrl) {
  const { Pool } = require("pg");
  // Neon ba'zan "channel_binding=require" qo'shadi, uni olib tashlaymiz
  const url = rawUrl
    .replace(/([?&])channel_binding=[^&]*&?/, "$1")
    .replace(/[?&]$/, "");
  pool = new Pool({ connectionString: url, ssl: { rejectUnauthorized: false } });
  pool.on("error", err => console.error("Baza xatosi:", err.message));
}

// ---------- Postgres ----------
async function dbInit() {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS scores (" +
    "id SERIAL PRIMARY KEY, " +
    "name TEXT NOT NULL, " +
    "category TEXT NOT NULL, " +
    "avatar TEXT NOT NULL DEFAULT '', " +
    "score INT NOT NULL, " +
    "total INT NOT NULL, " +
    "created_at TIMESTAMPTZ NOT NULL DEFAULT now())"
  );
  await pool.query("ALTER TABLE scores ADD COLUMN IF NOT EXISTS avatar TEXT NOT NULL DEFAULT ''");
}

async function dbTop10(category) {
  const today = "(created_at AT TIME ZONE 'Asia/Tashkent')::date = " +
                "(now() AT TIME ZONE 'Asia/Tashkent')::date";
  const order = "ORDER BY score::float / total DESC, total DESC, created_at ASC LIMIT 10";
  const cols = "SELECT name, avatar, category, score, total FROM scores";

  const result = category
    ? await pool.query(cols + " WHERE category = $1 AND " + today + " " + order, [category])
    : await pool.query(cols + " WHERE " + today + " " + order);
  return result.rows;
}

async function dbAdd(name, avatar, category, score, total) {
  await pool.query(
    "INSERT INTO scores (name, avatar, category, score, total) VALUES ($1, $2, $3, $4, $5)",
    [name, avatar, category, score, total]
  );
  // 7 kundan eski natijalarni tozalash
  await pool.query("DELETE FROM scores WHERE created_at < now() - interval '7 days'");
}

// ---------- Fayl ----------
const DB_FILE = path.join(__dirname, "scores.json");
let scores = [];
try {
  scores = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
} catch (e) {
  scores = [];
}

function save() {
  fs.writeFile(DB_FILE, JSON.stringify(scores), err => {
    if (err) console.error("Saqlashda xato:", err.message);
  });
}

function sorted() {
  return scores.slice().sort((a, b) =>
    (b.score / b.total - a.score / a.total) ||
    (b.total - a.total) ||
    (a.time - b.time)
  );
}

function dayKey(t) {
  return new Date(t + TZ_OFFSET).toISOString().slice(0, 10);
}

function prune() {
  const now = Date.now();
  scores = scores.filter(s => now - s.time < KEEP_MS);
  if (scores.length > 1000) scores = scores.slice(-1000);
}
prune();

function fileTop10(category) {
  const today = dayKey(Date.now());
  let list = sorted().filter(s => dayKey(s.time) === today);
  if (category) {
    list = list.filter(s => s.category === category);
  }
  return list.slice(0, 10).map(s => ({
    name: s.name, avatar: s.avatar || "", category: s.category, score: s.score, total: s.total
  }));
}

// ---------- Umumiy funksiyalar ----------
async function getTop10(category) {
  return pool ? dbTop10(category) : fileTop10(category);
}

async function addScore(name, avatar, category, score, total) {
  if (pool) {
    await dbAdd(name, avatar, category, score, total);
  } else {
    scores.push({ name, avatar, category, score, total, time: Date.now() });
    prune();
    save();
  }
}

// ---------- API ----------
app.get("/api/scores", async (req, res) => {
  try {
    const category = String(req.query.category || "").trim().slice(0, 20);
    res.json(await getTop10(category));
  } catch (e) {
    console.error("O'qishda xato:", e.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

app.post("/api/scores", async (req, res) => {
  const body = req.body || {};
  const name = String(body.name || "Mehmon").trim().slice(0, 20) || "Mehmon";
  const category = String(body.category || "Aralash").trim().slice(0, 20);
  const avatar = Array.from(String(body.avatar || "")).slice(0, 2).join("");
  const score = Number(body.score);
  const total = Number(body.total);

  if (!Number.isInteger(score) || !Number.isInteger(total) ||
      total < 1 || total > 50 || score < 0 || score > total) {
    return res.status(400).json({ error: "Noto'g'ri ma'lumot" });
  }

  try {
    await addScore(name, avatar, category, score, total);
    res.json(await getTop10(category));
  } catch (e) {
    console.error("Yozishda xato:", e.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

// ---------- Ishga tushirish ----------
async function start() {
  if (pool) {
    try {
      await dbInit();
      console.log("Postgres bazasiga ulandi.");
    } catch (e) {
      console.error("Bazaga ulanib bo'lmadi:", e.message);
      process.exit(1);
    }
  } else {
    console.log("DATABASE_URL yo'q: natijalar scores.json faylida saqlanadi.");
  }
  app.listen(PORT, () => {
    console.log("Server ishga tushdi: http://localhost:" + PORT);
  });
}
start();
