// ===== Pixel art =====
// Mỗi ký tự là 1 pixel, "." là ô trống
const PALETTE = {
  P: "#c23f9a", // hồng đậm (viền)
  p: "#f59ac8", // hồng nhạt
  Y: "#fff0a0", // vàng
  W: "#fffbe6", // trắng ánh vàng
  M: "#7a3fc0", // tím đậm
  m: "#b98af0", // tím nhạt
  B: "#8fb4f5", // xanh
  b: "#d6e4ff", // xanh nhạt
  K: "#2b2233", // đen
  S: "#ffd23f", // vàng cảnh báo
  O: "#f7b04f", // cam
  o: "#ffd58a", // cam nhạt
  G: "#a9a7b8", // xám
  g: "#e9e8f0", // xám nhạt
  C: "#7a4a2b", // nâu cà phê đậm
  c: "#b9774a", // nâu cà phê
  f: "#f3d9b1", // bọt sữa
  L: "#5fa83a", // lá xanh
  l: "#a8dc6a", // lá xanh nhạt
  R: "#b3123a", // đỏ củ dền
  r: "#e0476b", // đỏ củ dền sáng
  D: "#6e0b26", // đỏ sẫm
  H: "#ff9ccf", // hồng tim
  h: "#ffc8e4", // hồng tim nhạt
  E: "#f27bb8", // viền tim hồng
};

const ART = {
  moon: [
    "....PPPPP.....",
    "..PPYYYYYP....",
    ".PYYWWYYP.....",
    ".PYWWYYP......",
    "PYYWYYP.......",
    "PYYYYP........",
    "PYYYYP........",
    "PYYYpP........",
    "PYYpppP.......",
    ".PpppppP....P.",
    ".PppppppPPPPp.",
    "..PPpppppppPP.",
    "....PPPPPPP...",
  ],
  sparkle: [
    "...P...",
    "...P...",
    "..PpP..",
    "PPpWpPP",
    "..PpP..",
    "...P...",
    "...P...",
  ],
  star: [
    "...MM...",
    "..MmmM..",
    "MMmmmmMM",
    "MmmWmmmM",
    ".MmmmmM.",
    ".MmMMmM.",
    "MmM..MmM",
    "MM....MM",
  ],
  tiny: [
    ".B.",
    "BbB",
    ".B.",
  ],
  warning: [
    "......K......",
    ".....KSK.....",
    ".....KSK.....",
    "....KSSSK....",
    "....KSKSK....",
    "...KSSKSSK...",
    "...KSSKSSK...",
    "..KSSSKSSSK..",
    "..KSSSSSSSK..",
    ".KSSSSKSSSSK.",
    ".KSSSSSSSSSK.",
    "KKKKKKKKKKKKK",
  ],
  heart: [
    ".MMM...MMM.",
    "MmmmM.MmmmM",
    "MmWWmMmmmmM",
    "MmWmmmmmmmM",
    "MmmmmmmmmmM",
    ".MmmmmmmmM.",
    "..MmmmmmM..",
    "...MmmmM...",
    "....MmM....",
    ".....M.....",
  ],
  lock: [
    "....KKKKKKK....",
    "...KgggggggK...",
    "..KgKKKKKKKgK..",
    "..KgK.....KgK..",
    "..KgK.....KgK..",
    "..KGK.....KGK..",
    "KKKKKKKKKKKKKKK",
    "KoooooooooooooK",
    "KOOOOOOOOOOOOOK",
    "KoooooKKKoooooK",
    "KOOOOOKKKOOOOOK",
    "KOOOOOOKOOOOOOK",
    "KooooooKooooooK",
    "KOOOOOOOOOOOOOK",
    "KoooooooooooooK",
    "KKKKKKKKKKKKKKK",
  ],
  cup: [
    "..KKKKKKKKKK....",
    ".KcffcccffccK...",
    ".KccfffffcCcK...",
    ".KWWWWWWWWWWKKK.",
    ".KWWWWWWWWWWK.K.",
    ".KWWWWWWWWWgK.K.",
    "..KWWWWWWWgKKK..",
    "...KWWWWWgK.....",
    ".KKKKKKKKKKKK...",
    "KgggggggggggggK.",
    ".KKKKKKKKKKKKK..",
  ],
  beet: [
    "....LL...LL....",
    "...LlLL.LlLL...",
    "..LlLLLLLlLLL..",
    "..LLlLLLLLlLL..",
    "...LLLDLDLLL...",
    ".....D.D.D.....",
    "......DDD......",
    ".....RRRRR.....",
    "....RrRRRRR....",
    "...RrrRRRRRR...",
    "...RrRRRRRRR...",
    "...RRRRRRRRD...",
    "....RRRRRRD....",
    ".....RRRDD.....",
    "......RDD......",
    "......D........",
    ".....D.........",
  ],
  nacho: [
    "........K.........",
    ".......KSK........",
    "...K..KSSSK..K....",
    "..KSK.KSoSKKSSK...",
    ".KSSSKSoSSSKSoSK..",
    ".KSoSSSSrSSSSSSK..",
    "KSSrSSoSSSSrSSoSSK",
    "KKKKKKKKKKKKKKKKKK",
    "KccccccccccccccccK",
    ".KcCcccccccccCccK.",
    "..KccccccccccccK..",
    "...KKKKKKKKKKKK...",
  ],
  donut: [
    ".....KKKKKK.....",
    "...KKppppppKK...",
    "..KpppBpppWppK..",
    ".KpWppppppppMpK.",
    ".KppppKKKKppppK.",
    "KpYpppKooKpppBpK",
    "KppppBKooKppYppK",
    "KpMppppKKppppWpK",
    "KPpppWpppppMpppK",
    "KOPPppppppppPPOK",
    ".KOOPPPPPPPPOOK.",
    ".KoOOOOOOOOOOoK.",
    "..KKooooooooKK..",
    "....KKKKKKKK....",
  ],
  loaf: [
    "..KK........KK..",
    ".KcCK......KCcK.",
    ".KccCKKKKKKCccK.",
    "KcccccccccccccCK",
    "KcffffffffffffcK",
    "KcffffffffffffcK",
    "KcffKffffffKffcK",
    "KcfpffffffffpfcK",
    "KcffffffKKffffcK",
    "KcffffffffffffcK",
    "KcffffffffffffcK",
    "KcCffffffffffCcK",
    "KccCCCCCCCCCCccK",
    ".KKKKKKKKKKKKKK.",
  ],
  pinkHeart: [
    ".EEE...EEE.",
    "EhhhE.EHHHE",
    "EhWhHEHHHHE",
    "EhhHHHHHHHE",
    "EHHHHHHHHHE",
    ".EHHHHHHHE.",
    "..EHHHHHE..",
    "...EHHHE...",
    "....EHE....",
    ".....E.....",
  ],
};

function renderPixelArt(grid) {
  const h = grid.length;
  const w = grid[0].length;
  let rects = "";
  grid.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (PALETTE[ch]) {
        rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${PALETTE[ch]}"/>`;
      }
    });
  });
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${rects}</svg>`;
}

document.querySelectorAll("[data-art]").forEach((el) => {
  el.innerHTML = renderPixelArt(ART[el.dataset.art]);
});

// ===== Sao lấp lánh trên nền =====
const sparklesEl = document.getElementById("sparkles");

for (let i = 0; i < 40; i++) {
  const s = document.createElement("span");
  const isDot = Math.random() < 0.4;
  s.className = "sparkle" + (isDot ? " sparkle--dot" : "");
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.setProperty("--size", (isDot ? 6 + Math.random() * 6 : 18 + Math.random() * 26) + "px");
  s.style.setProperty("--dur", 2 + Math.random() * 3 + "s");
  s.style.setProperty("--delay", -Math.random() * 3 + "s");
  sparklesEl.appendChild(s);
}

// ===== Hiệu ứng gõ chữ =====
// Trả về Promise, xong khi đã gõ hết chữ
function typeText(el, speed = 50) {
  return new Promise((resolve) => {
    const text = el.dataset.type;
    clearInterval(el._typer);
    el.textContent = "";
    el.classList.add("is-typing");
    let i = 0;
    el._typer = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(el._typer);
        el.classList.remove("is-typing");
        resolve();
      }
    }, speed);
  });
}

// ===== Danh sách lý do =====
// roast: hiện khi bấm vào lý do (xuống dòng bằng \n)
// rude: nút phản ứng quay về menu
// wait: nút mở twist
// twist: hiện khi bấm nút wait
const REASONS = [
  {
    emoji: "🔍",
    title: "Em hay tò mò",
    roast: "Anh chỉ cần nói: \"Em ơi...\"\nRồi: \"À mà thôi.\"\nLà em hỏi dồn một đống.",
    rude: { emoji: "😤", text: "Ai thèm tò mò" },
    wait: { emoji: "👀", text: "Muốn biết lý do không?" },
    twist: "Vì em tò mò, em luôn muốn biết anh đang nghĩ gì, đang làm gì.\nỞ cạnh em, anh chưa bao giờ thấy mình bị bỏ quên.\nAnh trêu \"em ơi... à mà thôi\" chỉ để được thấy em quan tâm đến anh như thế 💜",
  },
  {
    emoji: "🥺",
    title: "Em dễ tin người",
    roast: "Anh nói đùa một câu,\nem tin sái cổ.\nLừa xong anh còn phải tự khai.",
    rude: { emoji: "😒", text: "Anh dám lừa em à" },
    wait: { emoji: "💗", text: "Lần này thật nè" },
    twist: "Vì em dễ tin người, em nhìn ai cũng bằng sự chân thành.\nNên anh chẳng nỡ lừa em thật bao giờ, cùng lắm là trêu thôi.\nVà anh sẽ luôn ở đây để không ai làm em buồn 💜",
  },
  {
    emoji: "📸",
    title: "Em hay bắt anh Locket",
    roast: "Ăn món ngon phải chụp.\nMặc đồ mới phải chụp.\nĐi chơi không Locket là em hỏi tội.",
    rude: { emoji: "😠", text: "Thì sao nào" },
    wait: { emoji: "📷", text: "Nhưng mà nè..." },
    twist: "Vì em muốn lúc nào cũng được nhìn thấy anh,\ndù hai đứa không ở cạnh nhau.\nVà mỗi lần ảnh em hiện lên màn hình, anh cũng vui như thế 💜",
  },
];

const reasonList = document.getElementById("reason-list");

REASONS.forEach((r, i) => {
  const btn = document.createElement("button");
  btn.className = "reason-btn";
  btn.dataset.reason = i;
  btn.innerHTML = `<span>${r.emoji}</span> ${r.title}`;
  reasonList.appendChild(btn);
});

// Nút tin nhắn bí mật: ẩn cho đến khi xem hết các lý do
const secretBtn = document.createElement("button");
secretBtn.className = "reason-btn secret-btn";
secretBtn.dataset.go = "screen-secret";
secretBtn.textContent = "Em đã mở khoá một tin nhắn bí mật!";
secretBtn.hidden = true;
reasonList.appendChild(secretBtn);

let currentReason = null;

// Chỉ khi bấm nút wait -> nút chuyển xám và khoá lại
function markVisited(i) {
  const btn = reasonList.children[i];
  btn.classList.add("is-visited");
  btn.disabled = true;

  const visitedCount = reasonList.querySelectorAll(".is-visited").length;
  if (visitedCount === REASONS.length) secretBtn.hidden = false;
}

function openReason(i) {
  const r = REASONS[i];
  currentReason = i;
  document.getElementById("reason-emoji").textContent = r.emoji;
  document.getElementById("reason-title").textContent = r.title;
  document.getElementById("reason-roast").textContent = r.roast;
  document.getElementById("reason-rude").innerHTML = `<span>${r.rude.emoji}</span> ${r.rude.text}`;
  document.getElementById("reason-wait").innerHTML = `<span>${r.wait.emoji}</span> ${r.wait.text}`;
  document.getElementById("reason-twist").textContent = r.twist;
  showScreen("screen-reason");
}

// ===== Chuyển màn hình =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.toggle("is-active", s.id === id);
  });
  document.body.classList.toggle("is-final", id === "screen-thanks");

  // Màn có chữ gõ từ từ: khoá nút cho tới khi gõ xong
  const screen = document.getElementById(id);
  const typers = [...screen.querySelectorAll("[data-type]")];
  if (!typers.length) return;

  const buttons = screen.querySelectorAll("button");
  screen.classList.add("is-locked");
  buttons.forEach((b) => (b.disabled = true));

  Promise.all(typers.map((el) => typeText(el))).then(() => {
    screen.classList.remove("is-locked");
    buttons.forEach((b) => (b.disabled = false));
  });
}

// ===== Mở khoá =====
const lockBtn = document.getElementById("lock-btn");
const lockHint = document.getElementById("lock-hint");
const unlockQuiz = document.getElementById("unlock-quiz");
const quizError = document.getElementById("quiz-error");

// Rung phần tử, xong thì gọi then()
function shake(el, then) {
  el.classList.remove("is-shaking");
  void el.offsetWidth; // chạy lại animation nếu bấm liên tục
  el.classList.add("is-shaking");
  setTimeout(() => {
    el.classList.remove("is-shaking");
    if (then) then();
  }, 600);
}

// Bấm ổ khoá: rung rồi hiện điều kiện mở khoá
lockBtn.addEventListener("click", () => {
  shake(lockBtn, () => {
    lockHint.hidden = true;
    unlockQuiz.hidden = false;
  });
});

document.getElementById("choice-wrong").addEventListener("click", () => {
  quizError.hidden = false;
  shake(quizError);
});

document.getElementById("choice-right").addEventListener("click", () => {
  quizError.hidden = true;
  shake(lockBtn, () => showScreen("screen-message"));
});

// ===== Nhạc nền =====
// Trình duyệt không cho tự phát nhạc, nên phát ở lần bấm đầu tiên
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const MUSIC_START = 2; // bỏ qua 2 giây đầu

// Tự lặp lại, mỗi lần lặp cũng bắt đầu từ MUSIC_START
music.addEventListener("ended", () => {
  music.currentTime = MUSIC_START;
  music.play();
});

function updateMusicBtn() {
  musicBtn.textContent = music.paused ? "🔇" : "🔊";
}

function startMusic() {
  music.currentTime = MUSIC_START;
  return music.play();
}

// Thử phát ngay khi mở trang. Nếu trình duyệt chặn,
// phát ở lần chạm/bấm/gõ phím đầu tiên ở bất kỳ đâu.
const UNLOCK_EVENTS = ["pointerdown", "touchend", "click", "keydown"];

function unlockMusic(e) {
  if (e.target === musicBtn || !music.paused) return;
  startMusic()
    .then(() => UNLOCK_EVENTS.forEach((t) => document.removeEventListener(t, unlockMusic)))
    .catch(() => {}); // vẫn bị chặn thì chờ lần chạm sau
}

// ===== Mở trong app (Messenger, Facebook, Instagram, Zalo) =====
// Trình duyệt trong app không dừng nhạc khi thoát -> bắt mở bằng trình duyệt thật
const IN_APP = /FBAN|FBAV|FB_IAB|Messenger|Instagram|Zalo/i.test(navigator.userAgent);

if (IN_APP) {
  document.getElementById("inapp").hidden = false;
  musicBtn.hidden = true;
  music.preload = "none";

  const url = location.href;
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    document.getElementById("inapp-guide").innerHTML =
      'Bấm ⋯ ở góc dưới/trên màn hình<br>rồi chọn "Mở trong Safari"';
  }

  document.getElementById("inapp-open").addEventListener("click", () => {
    if (isAndroid) {
      // Mở bằng Chrome, không có Chrome thì mở trình duyệt mặc định
      const noScheme = url.replace(/^https?:\/\//, "");
      location.href =
        `intent://${noScheme}#Intent;scheme=https;package=com.android.chrome;` +
        `S.browser_fallback_url=${encodeURIComponent(url)};end`;
    } else if (isIOS) {
      location.href = "x-safari-" + url;
    }
  });

  document.getElementById("inapp-copy").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const done = () => (btn.textContent = "Đã sao chép! Dán vào trình duyệt nhé");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(done).catch(() => prompt("Sao chép link này:", url));
    } else {
      prompt("Sao chép link này:", url);
    }
  });
} else {
  startMusic().catch(() => {
    UNLOCK_EVENTS.forEach((t) => document.addEventListener(t, unlockMusic));
  });
}

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    if (music.currentTime < MUSIC_START) music.currentTime = MUSIC_START;
    music.play().catch(() => {});
  } else {
    music.pause();
  }
});

music.addEventListener("play", updateMusicBtn);
music.addEventListener("playing", updateMusicBtn);
music.addEventListener("pause", updateMusicBtn);
// Đang tải nhạc thì hiện đồng hồ cát
music.addEventListener("waiting", () => (musicBtn.textContent = "⏳"));

// Thoát web / chuyển app / tắt màn hình -> dừng nhạc.
// Quay lại thì phát tiếp, trừ khi trước đó em đã tự tắt.
let pausedByHide = false;

function pauseOnHide() {
  if (!music.paused) {
    pausedByHide = true;
    music.pause();
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseOnHide();
  } else if (pausedByHide) {
    pausedByHide = false;
    music.play().catch(() => {});
  }
});

window.addEventListener("pagehide", pauseOnHide);

// ===== Màn cuối: tim bung ra từ nút =====
const BURST_HEARTS = ["💜", "💗", "💖", "🩷"];

document.getElementById("love-btn").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  for (let i = 0; i < 24; i++) {
    const h = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 160;
    h.className = "burst-heart";
    h.textContent = BURST_HEARTS[i % BURST_HEARTS.length];
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    h.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    h.style.setProperty("--size", 18 + Math.random() * 18 + "px");
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1300);
  }

  // Tim bung xong thì sang màn cảm ơn
  setTimeout(() => showScreen("screen-thanks"), 1100);
});

// ===== Về màn đầu: chơi lại từ đầu =====
document.getElementById("home-btn").addEventListener("click", () => {
  [...reasonList.children].forEach((btn) => {
    btn.classList.remove("is-visited");
    btn.disabled = false;
  });
  secretBtn.hidden = true;
  lockHint.hidden = false;
  unlockQuiz.hidden = true;
  quizError.hidden = true;
});

document.addEventListener("click", (e) => {
  const reasonBtn = e.target.closest("[data-reason]");
  if (reasonBtn) return openReason(Number(reasonBtn.dataset.reason));

  const btn = e.target.closest("[data-go]");
  if (!btn) return;
  if (btn.dataset.go === "screen-twist") markVisited(currentReason);
  showScreen(btn.dataset.go);
});
