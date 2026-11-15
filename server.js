const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, "scores.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ---------- Ma'lumotni fayldan o'qish / yozish ----------
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

// Foiz bo'yicha tartiblash, teng bo'lsa savollari ko'proq yutadi
function sorted() {
  return scores.slice().sort((a, b) =>
    (b.score / b.total - a.score / a.total) ||
    (b.total - a.total) ||
    (a.time - b.time)
  );
}

// Kun Toshkent vaqti (UTC+5) bo'yicha hisoblanadi
const TZ_OFFSET = 5 * 60 * 60 * 1000;
const KEEP_MS = 7 * 24 * 60 * 60 * 1000; // eski natijalar 7 kun saqlanadi

function dayKey(t) {
  return new Date(t + TZ_OFFSET).toISOString().slice(0, 10);
}

// Faqat bugungi natijalar qoladi, eskilari 7 kundan keyin o'chadi
function prune() {
  const now = Date.now();
  scores = scores.filter(s => now - s.time < KEEP_MS);
  if (scores.length > 1000) scores = scores.slice(-1000);
}
prune();

// Berilgan fan bo'yicha bugungi eng yaxshi 10 ta natija
function top10(category) {
  const today = dayKey(Date.now());
  let list = sorted().filter(s => dayKey(s.time) === today);
  if (category) {
    list = list.filter(s => s.category === category);
  }
  return list.slice(0, 10);
}

// ---------- API ----------
app.get("/api/scores", (req, res) => {
  const category = String(req.query.category || "").trim().slice(0, 20);
  res.json(top10(category));
});

app.post("/api/scores", (req, res) => {
  const body = req.body || {};
  const name = String(body.name || "Mehmon").trim().slice(0, 20) || "Mehmon";
  const category = String(body.category || "Aralash").trim().slice(0, 20);
  const score = Number(body.score);
  const total = Number(body.total);

  if (!Number.isInteger(score) || !Number.isInteger(total) ||
      total < 1 || total > 50 || score < 0 || score > total) {
    return res.status(400).json({ error: "Noto'g'ri ma'lumot" });
  }

  scores.push({ name, category, score, total, time: Date.now() });

  prune();
  save();

  res.json(top10(category));
});

app.listen(PORT, () => {
  console.log("Server ishga tushdi: http://localhost:" + PORT);
});
