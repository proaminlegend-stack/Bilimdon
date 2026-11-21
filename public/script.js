const TIME_LIMIT = 15;   // har savolga soniya
const QUIZ_LENGTH = 10;  // bir o'yindagi savollar soni

// Elementlar
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const boardScreen = document.getElementById("board-screen");

const nameInput = document.getElementById("player-name");
const categoriesEl = document.getElementById("categories");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const timerBar = document.getElementById("timer-bar");
const nextBtn = document.getElementById("next-btn");
const finalScoreEl = document.getElementById("final-score");
const messageEl = document.getElementById("message");
const resultBoardEl = document.getElementById("result-board");
const mainBoardEl = document.getElementById("main-board");
const resultTabsEl = document.getElementById("result-tabs");
const mainTabsEl = document.getElementById("main-tabs");
const mainPeriodEl = document.getElementById("main-period");
const resultPeriodEl = document.getElementById("result-period");

let quiz = [];
let current = 0;
let score = 0;
let answered = false;
let timeLeft = TIME_LIMIT;
let timerId = null;
let playerName = "Mehmon";
let playerCategory = "Aralash";
let boardPeriod = "day";
const AVATARS = ["🦁","🐯","🐼","🦊","🐺","🦅","🐬","🐲","🚀","⚡","👑","🧠","🎯","🔥","🌟","🤖","🐱","🐶"];
let playerAvatar = AVATARS[0];
try {
  const sv = localStorage.getItem("bilimdon-avatar");
  if (AVATARS.includes(sv)) playerAvatar = sv;
} catch (e) {}

function buildAvatars() {
  const box = document.getElementById("avatars");
  const prev = document.getElementById("avatar-preview");
  prev.textContent = playerAvatar;
  box.innerHTML = "";
  AVATARS.forEach(a => {
    const b = document.createElement("button");
    b.className = "av-btn" + (a === playerAvatar ? " active" : "");
    b.textContent = a;
    b.addEventListener("click", () => {
      playerAvatar = a;
      try { localStorage.setItem("bilimdon-avatar", a); } catch (e) {}
      buildAvatars();
    });
    box.appendChild(b);
  });
}

// Oxirgi kiritilgan ismni eslab qolish
try {
  nameInput.value = localStorage.getItem("bilimdon-name") || "";
} catch (e) {}

// Aralashtirish
function shuffle(arr) {
  return arr.map(v => ({ v, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(o => o.v);
}

// ---------- Menyu ----------
function buildMenu() {
  categoriesEl.innerHTML = "";

  const all = document.createElement("button");
  all.className = "cat-btn";
  all.textContent = "Aralash (hammasidan)";
  all.addEventListener("click", () => startGame(null));
  categoriesEl.appendChild(all);

  CATEGORIES.forEach(name => {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.textContent = name;
    btn.addEventListener("click", () => startGame(name));
    categoriesEl.appendChild(btn);
  });
}

function startGame(category) {
  playerName = nameInput.value.trim() || "Mehmon";
  playerCategory = category || "Aralash";
  try {
    localStorage.setItem("bilimdon-name", nameInput.value.trim());
  } catch (e) {}

  const pool = category ? questions.filter(q => q.cat === category) : questions;
  quiz = shuffle(pool).slice(0, QUIZ_LENGTH);
  current = 0;
  score = 0;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

// ---------- Taymer ----------
function startTimer() {
  stopTimer();
  timeLeft = TIME_LIMIT;
  renderTimer();
  timerId = setInterval(() => {
    timeLeft--;
    renderTimer();
    if (timeLeft <= 0) {
      stopTimer();
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function renderTimer() {
  timerEl.textContent = timeLeft;
  timerBar.style.width = (timeLeft / TIME_LIMIT * 100) + "%";
  const danger = timeLeft <= 5;
  timerEl.classList.toggle("danger", danger);
  timerBar.classList.toggle("danger", danger);
}

function timeUp() {
  if (answered) return;
  answered = true;
  const buttons = optionsEl.querySelectorAll(".option");
  buttons[quiz[current].answer].classList.add("correct");
  showNextButton();
}

// ---------- Savollar ----------
function showQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  const item = quiz[current];

  questionEl.textContent = item.q;
  progressEl.textContent = (current + 1) + " / " + quiz.length;
  scoreEl.textContent = "Ball: " + score;
  optionsEl.innerHTML = "";

  item.options.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = text;
    btn.addEventListener("click", () => selectAnswer(btn, index));
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(btn, index) {
  if (answered) return;
  answered = true;
  stopTimer();

  const correctIndex = quiz[current].answer;
  const buttons = optionsEl.querySelectorAll(".option");

  if (index === correctIndex) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  scoreEl.textContent = "Ball: " + score;
  showNextButton();
}

function showNextButton() {
  nextBtn.textContent = current === quiz.length - 1 ? "Natijani ko'rish" : "Keyingi";
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ---------- Natija va reyting ----------
function showResult() {
  stopTimer();
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = quiz.length + " tadan " + score + " ta to'g'ri javob";

  if (score === quiz.length) messageEl.textContent = "Ajoyib! Siz haqiqiy bilimdonsiz!";
  else if (score >= quiz.length * 0.6) messageEl.textContent = "Yaxshi natija!";
  else messageEl.textContent = "Yana urinib ko'ring, albatta yaxshilanadi.";

  sendScore();
}

function renderBoard(el, list) {
  el.innerHTML = "";
  if (!list || list.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Bu bo'limda hozircha natija yo'q";
    el.appendChild(li);
    return;
  }
  list.forEach((item, i) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    const right = document.createElement("span");
    left.textContent = (i + 1) + ". " + (item.avatar ? item.avatar + " " : "") + item.name;
    right.textContent = item.score + "/" + item.total + " (" + item.category + ")";
    li.appendChild(left);
    li.appendChild(right);
    el.appendChild(li);
  });
}

function boardError(el) {
  el.innerHTML = "";
  const li = document.createElement("li");
  li.className = "empty";
  li.textContent = "Reyting ishlamadi: server yoqilmagan.";
  el.appendChild(li);
}

// Fan tugmalari qatorini chizish
function buildTabs(tabsEl, active, onSelect) {
  tabsEl.innerHTML = "";
  ["Aralash"].concat(CATEGORIES).forEach(name => {
    const btn = document.createElement("button");
    btn.className = "tab" + (name === active ? " active" : "");
    btn.textContent = name;
    btn.addEventListener("click", () => onSelect(name));
    tabsEl.appendChild(btn);
  });
}

function buildPeriod(el, onChange) {
  el.innerHTML = "";
  [["day", "Bugun"], ["week", "Hafta"]].forEach(([key, label]) => {
    const b = document.createElement("button");
    b.className = "tab" + (key === boardPeriod ? " active" : "");
    b.textContent = label;
    b.addEventListener("click", () => { boardPeriod = key; onChange(); });
    el.appendChild(b);
  });
}

// Tanlangan fan bo'yicha reytingni yuklash
async function loadBoard(boardEl, tabsEl, category) {
  const periodEl = tabsEl === mainTabsEl ? mainPeriodEl : resultPeriodEl;
  buildPeriod(periodEl, () => loadBoard(boardEl, tabsEl, category));
  buildTabs(tabsEl, category, name => loadBoard(boardEl, tabsEl, name));
  boardEl.innerHTML = "";
  try {
    const res = await fetch("/api/scores?category=" + encodeURIComponent(category) + "&period=" + boardPeriod);
    if (!res.ok) throw new Error("server xatosi");
    renderBoard(boardEl, await res.json());
  } catch (e) {
    boardError(boardEl);
  }
}

async function sendScore() {
  boardPeriod = "day";
  buildPeriod(resultPeriodEl, () => loadBoard(resultBoardEl, resultTabsEl, playerCategory));
  resultBoardEl.innerHTML = "";
  buildTabs(resultTabsEl, playerCategory, name => loadBoard(resultBoardEl, resultTabsEl, name));
  try {
    const res = await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: playerName,
        avatar: playerAvatar,
        category: playerCategory,
        score: score,
        total: quiz.length
      })
    });
    if (!res.ok) throw new Error("server xatosi");
    renderBoard(resultBoardEl, await res.json());
  } catch (e) {
    boardError(resultBoardEl);
  }
}

async function openBoard() {
  boardPeriod = "day";
  startScreen.classList.add("hidden");
  boardScreen.classList.remove("hidden");
  await loadBoard(mainBoardEl, mainTabsEl, playerCategory);
}

function backToMenu() {
  resultScreen.classList.add("hidden");
  boardScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

document.getElementById("restart-btn").addEventListener("click", backToMenu);
document.getElementById("board-back").addEventListener("click", backToMenu);
document.getElementById("show-board").addEventListener("click", openBoard);
nextBtn.addEventListener("click", nextQuestion);

buildMenu();
buildAvatars();

// Ilova sifatida o'rnatish uchun
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
