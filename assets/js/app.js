/* SuiteFace.com — dating preview. Plain JavaScript, no libraries. */
(function () {
  "use strict";
  var BRAND = {"suit": {"heart": "M50 92 C22 72 4 54 4 33 C4 16 16 6 29.5 6 C39 6 46 11.5 50 20 C54 11.5 61 6 70.5 6 C84 6 96 16 96 33 C96 54 78 72 50 92 Z", "diamond": "M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z", "spade": "M50 4 C24 28 5 43 5 59 C5 73 15 81 27 81 C36 81 43 77 47 71 L45.5 79 C44 87 38 93 31 96 L69 96 C62 93 56 87 54.5 79 L53 71 C57 77 64 81 73 81 C85 81 95 73 95 59 C95 43 76 28 50 4 Z", "club": "M50 7 A20.5 20.5 0 1 1 49.99 7 Z M28 39 A20.5 20.5 0 1 1 27.99 39 Z M72 39 A20.5 20.5 0 1 1 71.99 39 Z M50 46 A12 12 0 1 1 49.99 46 Z M47 58 L45.5 79 C44 87 38 93 31 96 L69 96 C62 93 56 87 54.5 79 L53 58 Z"}, "hat": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"60 200 904 640\" aria-hidden=\"true\"><g transform=\"translate(512 560) scale(1.05) translate(-512 -540)\">\n<path d=\"M392 690 C380 560 350 400 300 300 C380 300 460 360 490 450 C510 520 515 610 512 680 Z\" fill=\"#C8102E\" stroke=\"#2B2730\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n<path d=\"M632.0 690 C644.0 560 674.0 400 724.0 300 C644.0 300 564.0 360 534.0 450 C514.0 520 509.0 610 512.0 680 Z\" fill=\"#FAF7F0\" stroke=\"#2B2730\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n<path d=\"M300 700 C270 600 220 500 130 470 C170 430 250 430 300 470 C360 520 400 610 410 690 Z\" fill=\"#FAF7F0\" stroke=\"#2B2730\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n<path d=\"M724.0 700 C754.0 600 804.0 500 894.0 470 C854.0 430 774.0 430 724.0 470 C664.0 520 624.0 610 614.0 690 Z\" fill=\"#C8102E\" stroke=\"#2B2730\" stroke-width=\"10\" stroke-linejoin=\"round\"/>\n<path d=\"M250 690 Q512 640 774 690 L774 790 Q512 742 250 790 Z\" fill=\"#B8862F\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(287.00 718.26) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(357.70 705.89) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(428.40 698.47) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(499.10 696.00) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(569.80 698.48) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(640.50 705.92) scale(0.2600)\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#FAF7F0\" transform=\"translate(711.20 718.30) scale(0.2600)\"/>\n<circle cx=\"130\" cy=\"470\" r=\"58\" fill=\"#FAF7F0\" stroke=\"#B8862F\" stroke-width=\"14\"/>\n<path d=\"M50 4 C24 28 5 43 5 59 C5 73 15 81 27 81 C36 81 43 77 47 71 L45.5 79 C44 87 38 93 31 96 L69 96 C62 93 56 87 54.5 79 L53 71 C57 77 64 81 73 81 C85 81 95 73 95 59 C95 43 76 28 50 4 Z\" fill=\"#2B2730\" transform=\"translate(99.00 439.00) scale(0.6200)\"/>\n<circle cx=\"300\" cy=\"300\" r=\"58\" fill=\"#FAF7F0\" stroke=\"#B8862F\" stroke-width=\"14\"/>\n<path d=\"M50 92 C22 72 4 54 4 33 C4 16 16 6 29.5 6 C39 6 46 11.5 50 20 C54 11.5 61 6 70.5 6 C84 6 96 16 96 33 C96 54 78 72 50 92 Z\" fill=\"#C8102E\" transform=\"translate(269.00 269.00) scale(0.6200)\"/>\n<circle cx=\"724\" cy=\"300\" r=\"58\" fill=\"#FAF7F0\" stroke=\"#B8862F\" stroke-width=\"14\"/>\n<path d=\"M50 7 A20.5 20.5 0 1 1 49.99 7 Z M28 39 A20.5 20.5 0 1 1 27.99 39 Z M72 39 A20.5 20.5 0 1 1 71.99 39 Z M50 46 A12 12 0 1 1 49.99 46 Z M47 58 L45.5 79 C44 87 38 93 31 96 L69 96 C62 93 56 87 54.5 79 L53 58 Z\" fill=\"#2B2730\" transform=\"translate(693.00 269.00) scale(0.6200)\"/>\n<circle cx=\"894\" cy=\"470\" r=\"58\" fill=\"#FAF7F0\" stroke=\"#B8862F\" stroke-width=\"14\"/>\n<path d=\"M50 3 Q63 27 88 50 Q63 73 50 97 Q37 73 12 50 Q37 27 50 3 Z\" fill=\"#C8102E\" transform=\"translate(863.00 439.00) scale(0.6200)\"/>\n</g></svg>"};
  var CFG = Object.assign({ formAccessKey: "", siteUrl: "https://suiteface.com/", formEndpoint: "https://api.web3forms.com/submit", stripePaymentLink: "", stripePortalLink: "", stripeJokerBuyoutLink: "", zipDataUrl: "assets/data/zips.psv" },
    window.SUITEFACE_CONFIG || {});
  var REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };

  /* ---------- storage (best effort) ---------- */
  var S = {
    get: function (k, d) { try { var v = localStorage.getItem("sf." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("sf." + k, JSON.stringify(v)); } catch (e) { } }
  };

  /* ---------- suits ---------- */
  var ORDER = ["diamond", "club", "heart", "spade"];
  var SUIT = {
    diamond: { name: "Diamond", red: true, sym: "♦", line: "Direct and decisive. Plans the date, books the table.", love: "Shows love by making things happen." },
    club: { name: "Club", red: false, sym: "♣", line: "Outgoing and playful. The life of the table.", love: "Shows love with fun and big energy." },
    heart: { name: "Heart", red: true, sym: "♥", line: "Steady and warm. A loyal, patient listener.", love: "Shows love by being there, every time." },
    spade: { name: "Spade", red: false, sym: "♠", line: "Thoughtful and careful. Quietly all-in.", love: "Shows love through follow-through and detail." }
  };
  function pip(s, cls) {
    return '<svg class="pip ' + (cls || "") + '" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="' + BRAND.suit[s] + '"/></svg>';
  }
  function suitColor(s) { return SUIT[s].red ? "var(--red-soft)" : "var(--cream)"; }
  var RANKS = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

  /* ---------- toasts, modal, confetti ---------- */
  function toast(msg, s) {
    var t = document.createElement("div"); t.className = "toast";
    t.innerHTML = (s ? '<span style="color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + pip(s) + "</span>" : "") + "<span>" + esc(msg) + "</span>";
    $("#toasts").appendChild(t);
    setTimeout(function () { t.style.transition = "opacity .4s"; t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 450); }, 3200);
  }
  var lastFocus = null;
  function modal(html, opts) {
    closeModal();
    lastFocus = document.activeElement;
    var m = document.createElement("div"); m.className = "modal"; m.id = "modal";
    m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="box"><button class="btn ghost sm x" type="button" data-close>Close</button>' + html + "</div>";
    m.addEventListener("click", function (e) { if (e.target === m || e.target.hasAttribute("data-close")) closeModal(); });
    document.body.appendChild(m);
    var f = m.querySelector(opts && opts.focus || "button, input, textarea"); if (f) f.focus();
    return m;
  }
  function closeModal() { var m = $("#modal"); if (m) { m.remove(); if (lastFocus && lastFocus.focus) lastFocus.focus(); } }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  var fx = document.createElement("canvas"); fx.className = "fx"; fx.setAttribute("aria-hidden", "true"); document.body.appendChild(fx);
  var parts = [], fxOn = false, paths = {};
  ORDER.forEach(function (s) { try { paths[s] = new Path2D(BRAND.suit[s]); } catch (e) { } });
  function burst(x, y, n) {
    if (REDUCED) return;
    var dpr = window.devicePixelRatio || 1; fx.width = innerWidth * dpr; fx.height = innerHeight * dpr;
    var cols = ["#C8102E", "#FAF7F0", "#E8C46A", "#2F8A62", "#E5505E"];
    for (var i = 0; i < (n || 70); i++) {
      var a = Math.random() * Math.PI * 2, v = 4 + Math.random() * 9;
      parts.push({ x: x * dpr, y: y * dpr, vx: Math.cos(a) * v * dpr, vy: (Math.sin(a) * v - 6) * dpr, r: Math.random() * 6, vr: (Math.random() - .5) * .3, s: ORDER[i % 4], c: cols[i % cols.length], z: (10 + Math.random() * 16) * dpr, life: 0 });
    }
    if (!fxOn) { fxOn = true; requestAnimationFrame(tick); }
  }
  function tick() {
    var ctx = fx.getContext("2d"); ctx.clearRect(0, 0, fx.width, fx.height);
    parts = parts.filter(function (p) { return p.life < 160 && p.y < fx.height + 60; });
    parts.forEach(function (p) {
      p.life++; p.vy += .32 * (window.devicePixelRatio || 1); p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(p.z / 100, p.z / 100); ctx.translate(-50, -50);
      ctx.globalAlpha = Math.max(0, 1 - p.life / 160); ctx.fillStyle = p.c; if (paths[p.s]) ctx.fill(paths[p.s]); ctx.restore();
    });
    if (parts.length) requestAnimationFrame(tick); else { fxOn = false; ctx.clearRect(0, 0, fx.width, fx.height); }
  }
  function burstAt(el, n) { var r = el.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, n); }

  /* ---------- marquee sign ---------- */
  var sign = $("#sign"), bulbBox = $("#bulbs"), bulbs = [], mode = REDUCED ? "calm" : "chase", prevMode = mode, t = 0, jackpotUntil = 0;
  var BULB_COLORS = ["#FFE7A3", "#FFFFFF", "#FF5A6E", "#E8C46A"];
  function layoutBulbs() {
    var W = sign.offsetWidth, H = sign.offsetHeight, bw = parseFloat(getComputedStyle(sign).borderTopWidth) || 16;
    var R = (parseFloat(getComputedStyle(sign).borderTopLeftRadius) || 44) - bw / 2, ins = bw / 2;
    var w = W - 2 * ins, h = H - 2 * ins, straightW = w - 2 * R, straightH = h - 2 * R;
    var per = 2 * straightW + 2 * straightH + 2 * Math.PI * R, gap = W < 640 ? 22 : 28, n = Math.max(24, Math.round(per / gap));
    bulbBox.innerHTML = ""; bulbs = [];
    var segs = [["l", ins + R, ins, straightW, 0], ["a", ins + w - R, ins + R, -Math.PI / 2], ["l", ins + w, ins + R, 0, straightH], ["a", ins + w - R, ins + h - R, 0],
      ["l", ins + w - R, ins + h, -straightW, 0], ["a", ins + R, ins + h - R, Math.PI / 2], ["l", ins, ins + h - R, 0, -straightH], ["a", ins + R, ins + R, Math.PI]];
    var lens = segs.map(function (s) { return s[0] === "l" ? Math.abs(s[3] || s[4]) : Math.PI * R / 2; });
    for (var i = 0; i < n; i++) {
      var d = i * per / n, k = 0; while (d > lens[k]) { d -= lens[k]; k++; }
      var s = segs[k], x, y;
      if (s[0] === "l") { var f = d / lens[k]; x = s[1] + s[3] * f; y = s[2] + s[4] * f; }
      else { var ang = s[3] + d / R; x = s[1] + R * Math.cos(ang); y = s[2] + R * Math.sin(ang); }
      var b = document.createElement("i"); b.className = "bulb"; b.style.left = (x) + "px"; b.style.top = (y) + "px";
      bulbBox.appendChild(b); bulbs.push(b);
    }
    paint(true);
  }
  function setBulb(b, on, c) { if (on) { b.classList.add("on"); b.style.setProperty("--c", c); } else b.classList.remove("on"); }
  function paint(force) {
    var n = bulbs.length; if (!n) return;
    var m = Date.now() < jackpotUntil ? "jackpot" : mode;
    if (m !== "jackpot" && jackpotUntil && Date.now() >= jackpotUntil) { jackpotUntil = 0; }
    for (var i = 0; i < n; i++) {
      var b = bulbs[i];
      switch (m) {
        case "calm": setBulb(b, true, BULB_COLORS[0]); break;
        case "chase": setBulb(b, (i + t) % 4 < 2, BULB_COLORS[Math.floor((i + t) / 4) % 2 ? 0 : 3]); break;
        case "wave": setBulb(b, Math.sin(i * .32 - t * .45) > -.1, BULB_COLORS[Math.sin(i * .32 - t * .45) > .7 ? 1 : 0]); break;
        case "twinkle": if (force || Math.random() < .18) setBulb(b, Math.random() < .55, BULB_COLORS[(Math.random() * 4) | 0]); break;
        case "flash": setBulb(b, Math.floor(t / 4) % 2 === 0 ? i % 2 === 0 : i % 2 === 1, Math.floor(t / 8) % 2 ? BULB_COLORS[2] : BULB_COLORS[0]); break;
        case "jackpot": setBulb(b, (i + t * 2) % 3 !== 0, BULB_COLORS[(i + t) % 4]); break;
      }
    }
  }
  setInterval(function () { t++; if (mode !== "calm" || Date.now() < jackpotUntil) paint(); }, 95);
  function jackpot(ms) { jackpotUntil = Date.now() + (ms || 3500); }
  $$(".lights .chip").forEach(function (c) {
    c.addEventListener("click", function () {
      var m = c.getAttribute("data-mode");
      if (m === "jackpot") { jackpot(4500); burstAt(sign, 60); return; }
      mode = m; S.set("lights", m);
      $$(".lights .chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === c)); });
      paint(true);
    });
  });
  var savedLights = S.get("lights", null);
  if (savedLights) { mode = savedLights; $$(".lights .chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-mode") === mode)); }); }
  else if (REDUCED) { $$(".lights .chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-mode") === "calm")); }); }
  window.addEventListener("resize", debounce(layoutBulbs, 150));
  if (window.ResizeObserver) new ResizeObserver(debounce(layoutBulbs, 100)).observe(sign);
  layoutBulbs();

  // wordmark flips through the four official suit versions
  var wms = $$("#wmStage .wm"), wmi = 0;
  if (!REDUCED) setInterval(function () {
    wms[wmi].classList.add("out"); wmi = (wmi + 1) % wms.length; wms[wmi].classList.remove("out");
  }, 3800);

  function debounce(fn, ms) { var h; return function () { clearTimeout(h); h = setTimeout(fn, ms); }; }

  /* ---------- nav ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  menuBtn.addEventListener("click", function () { var o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(o)); });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });

  /* ---------- profile state ---------- */
  var P = Object.assign({ id: {}, prefs: {}, vis: {},
    name: "", handle: "", age: "", zip: "", bio: "", photo: "", looking: "serious", show: "everyone",
    ageMin: 25, ageMax: 40, dist: 25, trumps: ORDER.slice(), felt: "#1E6347", mySuit: "", interests: []
  }, S.get("profile", {}));
  function saveP() { S.set("profile", P); }

  /* ---------- style cards ---------- */
  function renderStyles() {
    $("#styleCards").innerHTML = ORDER.map(function (s) {
      return '<div class="style-card' + (P.mySuit === s ? " mine" : "") + '"><span style="color:' + suitColor(s) + '">' + pip(s) + "</span><b>" + SUIT[s].sym + " " + SUIT[s].name + "</b><span>" + SUIT[s].line + "</span><span>" + SUIT[s].love + "</span></div>";
    }).join("");
  }

  /* ---------- quiz ---------- */
  var Q = [
    ["First date, you'd rather…", { diamond: "Pick the place and book it", club: "Something lively, like trivia night", heart: "A long walk and real conversation", spade: "A spot I've researched with great reviews" }],
    ["Your friends would call you…", { diamond: "The decider", club: "The fun one", heart: "The dependable one", spade: "The thoughtful one" }],
    ["When plans change last minute…", { diamond: "I make a new plan fast", club: "Great, an adventure", heart: "I go with what my person needs", spade: "I'd like a heads-up next time" }],
    ["In a disagreement, you…", { diamond: "Say it straight and solve it", club: "Lighten the mood first", heart: "Listen until they feel heard", spade: "Get the facts right before reacting" }],
    ["Your ideal weekend…", { diamond: "Checking big goals off the list", club: "Packed with people and plans", heart: "Cozy, close friends, home cooking", spade: "A project, a book, a quiet plan" }],
    ["Your texting style…", { diamond: "Short and to the point", club: "Voice notes, memes, all caps", heart: "Checking in on how their day went", spade: "Thoughtful replies, a little later" }],
    ["You fall for someone who…", { diamond: "Matches your ambition", club: "Makes you laugh until it hurts", heart: "Makes you feel safe", spade: "Keeps their word" }],
    ["Facing a big decision, you…", { diamond: "Trust your gut and go", club: "Talk it out with everyone", heart: "Think about how it affects people", spade: "Make a pros-and-cons list" }],
    ["At a party you're…", { diamond: "Introducing people to each other", club: "In the middle of the dance floor", heart: "Deep in one great conversation", spade: "Near the snacks, taking it all in" }],
    ["You show you care by…", { diamond: "Solving the problem", club: "Planning a surprise", heart: "Showing up, no matter what", spade: "Remembering the little details" }],
    ["What wears you out…", { diamond: "Indecision", club: "Too much routine", heart: "Conflict", spade: "Sloppiness" }],
    ["Your relationship motto…", { diamond: "Let's build something", club: "Let's have fun", heart: "Let's take care of each other", spade: "Let's get it right" }]
  ];
  /* Words: how you see yourself, how friends and family see you, and (last) your biggest fault. Each word leans toward a suit. */
  var WORDS = {
    diamond: ["Driven", "Decisive", "Confident", "Ambitious", "Direct", "Bold"],
    club: ["Outgoing", "Playful", "Spontaneous", "Funny", "Energetic", "Charming"],
    heart: ["Caring", "Loyal", "Patient", "Warm", "Easygoing", "Supportive"],
    spade: ["Thoughtful", "Organized", "Reliable", "Detail-oriented", "Calm", "Honest"]
  };
  var FAULTS = {
    diamond: ["Impatient", "Controlling", "Stubborn"],
    club: ["Scattered", "Impulsive", "Easily bored"],
    heart: ["People-pleaser", "Avoids conflict", "Too sensitive"],
    spade: ["Overthinker", "Perfectionist", "Guarded"]
  };
  function suitOf(word, table) { var f = ""; ORDER.forEach(function (k) { if (table[k].indexOf(word) > -1) f = k; }); return f; }
  function wordList(table) { var all = []; ORDER.forEach(function (k) { all = all.concat(table[k]); }); return all.sort(function (a, b) { return (hash(a) % 97) - (hash(b) % 97); }); }
  var STEPS_Q = 2 + Q.length + 1; // self words, others' words, 12 questions, biggest fault
  var qa = S.get("quiz", []), qw = S.get("quizWords", { self: [], others: [], fault: "" });
  var qi = qw.fault ? STEPS_Q : Math.min(qw.others.length ? 2 + qa.length : (qw.self.length ? 1 : 0), STEPS_Q - 1);
  function saveQW() { S.set("quizWords", qw); }
  function resetQuiz() { qa = []; qw = { self: [], others: [], fault: "" }; qi = 0; S.set("quiz", qa); saveQW(); renderQ(); }
  function shuffled(i) { var o = ORDER.slice(); var r = i * 7 + 3; for (var k = 3; k > 0; k--) { r = (r * 31 + 11) % 97; var j = r % (k + 1); var tmp = o[k]; o[k] = o[j]; o[j] = tmp; } return o; }
  function wordStep(key, title, hint) {
    var picked = qw[key];
    $("#qText").textContent = title;
    $("#qAnswers").innerHTML = '<p class="qhint">' + hint + ' <b id="wCount">' + picked.length + ' of 5</b></p><div class="words">' + wordList(WORDS).map(function (w) {
      return '<button class="ans word' + (picked.indexOf(w) > -1 ? " picked" : "") + '" type="button" aria-pressed="' + (picked.indexOf(w) > -1) + '" data-w="' + esc(w) + '">' + esc(w) + "</button>";
    }).join("") + '</div><button class="btn gold sm qnext" type="button" data-next' + (picked.length >= 3 ? "" : " disabled") + ">Next</button>";
  }
  function renderQ() {
    if (qi >= STEPS_Q) { showResult(); return; }
    $("#quizBox").hidden = false; $("#quizResult").hidden = true;
    $("#qCount").textContent = "Step " + (qi + 1) + " of " + STEPS_Q;
    $("#qMeter").style.width = (qi / STEPS_Q * 100) + "%";
    $("#qBack").disabled = qi === 0;
    if (qi === 0) return wordStep("self", "Pick the words that describe you", "How do you see yourself? Choose 3 to 5.");
    if (qi === 1) return wordStep("others", "How do your friends and family describe you?", "Pick the words they'd use, even if they're different from yours. Choose 3 to 5.");
    if (qi === STEPS_Q - 1) {
      $("#qText").textContent = "The hardest question at the table";
      $("#qAnswers").innerHTML = '<p class="qhint">Honesty and a little humility go a long way. Which word is most likely your <b>biggest fault</b>? Pick one. It stays <b>Face Down</b> (private) unless you choose to show it.</p><div class="words">' +
        wordList(FAULTS).map(function (w) { return '<button class="ans word fault' + (qw.fault === w ? " picked" : "") + '" type="button" data-f="' + esc(w) + '">' + esc(w) + "</button>"; }).join("") + "</div>";
      return;
    }
    var n = qi - 2;
    $("#qText").textContent = Q[n][0];
    $("#qAnswers").innerHTML = shuffled(n).map(function (s) {
      return '<button class="ans' + (qa[n] === s ? " picked" : "") + '" type="button" data-s="' + s + '">' + esc(Q[n][1][s]) + "</button>";
    }).join("");
  }
  $("#qAnswers").addEventListener("click", function (e) {
    var w = e.target.closest("[data-w]"), f = e.target.closest("[data-f]"), nx = e.target.closest("[data-next]"), b = e.target.closest("[data-s]");
    if (w) {
      var key = qi === 0 ? "self" : "others", list = qw[key], v = w.getAttribute("data-w"), at = list.indexOf(v);
      if (at > -1) list.splice(at, 1); else { if (list.length >= 5) { toast("Pick up to 5. Tap one to swap it out."); return; } list.push(v); }
      w.classList.toggle("picked", at < 0); w.setAttribute("aria-pressed", at < 0); saveQW();
      $("#wCount").textContent = list.length + " of 5"; $("[data-next]", $("#qAnswers")).disabled = list.length < 3; return;
    }
    if (nx) { qi++; renderQ(); return; }
    if (f) { qw.fault = f.getAttribute("data-f"); saveQW(); f.classList.add("picked"); setTimeout(function () { qi++; renderQ(); }, REDUCED ? 0 : 260); return; }
    if (!b) return;
    b.classList.add("picked"); qa[qi - 2] = b.getAttribute("data-s"); qa.length = qi - 1; S.set("quiz", qa);
    setTimeout(function () { qi++; renderQ(); }, REDUCED ? 0 : 220);
  });
  $("#qBack").addEventListener("click", function () { if (qi > 0) { qi--; renderQ(); } });
  $("#qRestart").addEventListener("click", resetQuiz);
  function showResult() {
    var c = { diamond: 0, club: 0, heart: 0, spade: 0 };
    qa.forEach(function (s) { c[s] += 1; });
    qw.self.concat(qw.others).forEach(function (w) { var k = suitOf(w, WORDS); if (k) c[k] += 0.5; });
    var fk = suitOf(qw.fault, FAULTS); if (fk) c[fk] += 0.5;
    var tot = ORDER.reduce(function (a, k) { return a + c[k]; }, 0) || 1;
    var top = ORDER.slice().sort(function (a, b) { return c[b] - c[a]; })[0];
    var both = qw.self.filter(function (w) { return qw.others.indexOf(w) > -1; });
    $("#quizBox").hidden = true; var R = $("#quizResult"); R.hidden = false;
    R.innerHTML = '<span class="big" style="color:' + suitColor(top) + '">' + pip(top, "big") + '</span><div class="form-grid" style="gap:10px"><p class="eyebrow">Your suit</p><h3 style="font-size:2.4rem">' +
      SUIT[top].sym + " You're a " + SUIT[top].name + "</h3><p class='lede'>" + SUIT[top].line + " " + SUIT[top].love + '</p><div class="bars">' +
      ORDER.map(function (s) { var pct = Math.round(c[s] / tot * 100); return '<div class="bar"><span>' + SUIT[s].sym + " " + SUIT[s].name + '</span><i><b data-w="' + pct + '" style="background:' + (SUIT[s].red ? "var(--red)" : "var(--cream)") + '"></b></i><span>' + pct + "%</span></div>"; }).join("") +
      '</div><div class="selfwords"><p><b>You see yourself as:</b> ' + esc(qw.self.join(", ")) + '</p><p><b>Friends and family say:</b> ' + esc(qw.others.join(", ")) + "</p>" +
      (both.length ? '<p class="hint">You and the people who know you best agree on <b>' + esc(both.join(", ")) + "</b>. That's the real you.</p>" : '<p class="hint">You and the people who know you see different sides of you. Both belong on your card.</p>') +
      '<p><b>Your honest fault:</b> ' + esc(qw.fault) + ' <span class="hint">· Face Down (private). Owning it is a strong play.</span></p></div>' +
      '<div class="chips" style="margin-top:6px"><button class="btn gold sm" type="button" data-use="' + top + '">That\'s me. Use ' + SUIT[top].name + "</button>" +
      ORDER.filter(function (s) { return s !== top; }).map(function (s) { return '<button class="btn ghost sm" type="button" data-use="' + s + '">I\'m more ' + SUIT[s].name + "</button>"; }).join("") +
      '<button class="btn ghost sm" type="button" id="retake">Retake</button></div></div>';
    requestAnimationFrame(function () { $$("#quizResult .bar b").forEach(function (b) { b.style.width = b.getAttribute("data-w") + "%"; }); });
    $("#retake").addEventListener("click", resetQuiz);
    $$("#quizResult [data-use]").forEach(function (b) {
      b.addEventListener("click", function () {
        P.mySuit = b.getAttribute("data-use"); P.selfWords = qw.self.slice(); P.othersWords = qw.others.slice(); P.fault = qw.fault; saveP(); renderStyles(); renderCard(); updateMeter();
        toast("Your suit is " + SUIT[P.mySuit].name + ". It's on your card now.", P.mySuit); jackpot(2500); burstAt(b, 50);
      });
    });
  }

  /* ---------- profile form ---------- */
  var LOOK = [["serious", "Something serious"], ["seeing", "Dating to see"], ["friends", "Friends first"]];
  var SHOW = [["women", "Women"], ["men", "Men"], ["everyone", "Everyone"]];
  var INTERESTS = ["Live music", "Hiking", "Cooking", "Board games", "Football", "Church", "Travel", "Dogs", "Cats", "Fitness", "Art", "Movies", "Brunch", "Fishing", "Reading", "Dancing"];
  var FELTS = [["#1E6347", "Felt green"], ["#7A1022", "Card red"], ["#2B2730", "Card black"], ["#5B2E4F", "Velvet"], ["#8A5A1C", "Brass"], ["#14544F", "Teal felt"]];
  function chipGroup(el, opts, key) {
    el.innerHTML = opts.map(function (o) { return '<button type="button" class="chip" aria-pressed="' + (P[key] === o[0]) + '" data-v="' + o[0] + '">' + o[1] + "</button>"; }).join("");
    el.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (!b) return; P[key] = b.getAttribute("data-v"); $$(".chip", el).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); onChange(); });
  }
  chipGroup($("#lookChips"), LOOK, "looking");
  // interests
  var intWrap = document.createElement("div"); intWrap.className = "field";
  intWrap.innerHTML = '<span style="font-weight:600;font-size:.92rem">Things you love <span class="hint">(up to 5)</span></span><div class="chips" id="intChips"></div>';
  $("#lookChips").closest(".field").before(intWrap);
  function renderInterests() {
    $("#intChips").innerHTML = INTERESTS.map(function (x) { return '<button type="button" class="chip" aria-pressed="' + (P.interests.indexOf(x) > -1) + '">' + x + "</button>"; }).join("");
  }
  $("#intChips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return; var v = b.textContent, i = P.interests.indexOf(v);
    if (i > -1) P.interests.splice(i, 1); else { if (P.interests.length >= 5) { toast("Pick up to 5. Tap one to swap it out."); return; } P.interests.push(v); }
    renderInterests(); onChange();
  });
  $("#swatches").innerHTML = FELTS.map(function (f) { return '<button type="button" class="sw" style="background:' + f[0] + '" aria-label="' + f[1] + '" aria-pressed="' + (P.felt === f[0]) + '" data-v="' + f[0] + '"></button>'; }).join("");
  $("#swatches").addEventListener("click", function (e) { var b = e.target.closest(".sw"); if (!b) return; P.felt = b.getAttribute("data-v"); $$("#swatches .sw").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); onChange(); });

  var F = { name: $("#fName"), handle: $("#fHandle"), age: $("#fAge"), zip: $("#fZip"), bio: $("#fBio") };
  Object.keys(F).forEach(function (k) { F[k].value = P[k] || ""; F[k].addEventListener("input", function () { P[k] = F[k].value; if (k === "bio") $("#bioCount").textContent = F[k].value.length; onChange(); }); });
  $("#bioCount").textContent = (P.bio || "").length;
  var ageMin = $("#fAgeMin"), ageMax = $("#fAgeMax"), dist = $("#fDist");
  ageMin.value = P.ageMin; ageMax.value = P.ageMax; dist.value = P.dist;
  function syncRanges(e) {
    var a = +ageMin.value, b = +ageMax.value;
    if (a > b) { if (e && e.target === ageMin) ageMax.value = a; else ageMin.value = b; }
    P.ageMin = +ageMin.value; P.ageMax = +ageMax.value; P.dist = +dist.value;
    $("#ageRangeTxt").textContent = P.ageMin + "–" + P.ageMax; $("#distTxt").textContent = P.dist; onChange();
  }
  [ageMin, ageMax, dist].forEach(function (r) { r.addEventListener("input", syncRanges); });

  // trumps ranking: drag + arrows
  function renderRank() {
    $("#rankList").innerHTML = P.trumps.map(function (s, i) {
      return '<li class="rank-item" draggable="true" data-s="' + s + '"><span class="n">' + (i + 1) + '</span><span style="color:' + suitColor(s) + '">' + pip(s) + "</span><span><b>" + SUIT[s].name + "</b><small>" + SUIT[s].line + '</small></span><span class="mv"><button type="button" data-up aria-label="Move ' + SUIT[s].name + ' up">↑</button><button type="button" data-down aria-label="Move ' + SUIT[s].name + ' down">↓</button></span></li>';
    }).join("");
  }
  var dragS = null;
  $("#rankList").addEventListener("dragstart", function (e) { var li = e.target.closest(".rank-item"); if (!li) return; dragS = li.getAttribute("data-s"); li.classList.add("dragging"); try { e.dataTransfer.setData("text/plain", dragS); } catch (x) { } });
  $("#rankList").addEventListener("dragend", function () { dragS = null; renderRank(); });
  $("#rankList").addEventListener("dragover", function (e) {
    e.preventDefault(); var li = e.target.closest(".rank-item"); if (!li || !dragS) return;
    var over = li.getAttribute("data-s"); if (over === dragS) return;
    var a = P.trumps.indexOf(dragS), b = P.trumps.indexOf(over); P.trumps.splice(a, 1); P.trumps.splice(b, 0, dragS);
    renderRank(); $('#rankList [data-s="' + dragS + '"]').classList.add("dragging"); onChange();
  });
  $("#rankList").addEventListener("click", function (e) {
    var li = e.target.closest(".rank-item"); if (!li) return; var s = li.getAttribute("data-s"), i = P.trumps.indexOf(s);
    var j = e.target.hasAttribute("data-up") ? i - 1 : e.target.hasAttribute("data-down") ? i + 1 : -1;
    if (j < 0 || j > 3) return; P.trumps.splice(i, 1); P.trumps.splice(j, 0, s); renderRank(); onChange();
    var btn = $('#rankList [data-s="' + s + '"] [data-' + (e.target.hasAttribute("data-up") ? "up" : "down") + "]"); if (btn) btn.focus();
  });

  // photo upload
  var drop = $("#drop"), photo = $("#photo");
  drop.addEventListener("click", function () { photo.click(); });
  drop.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); photo.click(); } });
  ["dragenter", "dragover"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("over"); }); });
  ["dragleave", "drop"].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.remove("over"); }); });
  drop.addEventListener("drop", function (e) { e.preventDefault(); if (e.dataTransfer.files[0]) readPhoto(e.dataTransfer.files[0]); });
  photo.addEventListener("change", function () { if (photo.files[0]) readPhoto(photo.files[0]); });
  function readPhoto(file) {
    if (!/^image\//.test(file.type)) { toast("That file isn't an image. Try a JPG, PNG or WebP."); return; }
    if (file.size > 15 * 1024 * 1024) { toast("That photo is over 15 MB. Try a smaller one."); return; }
    var r = new FileReader();
    r.onload = function () {
      var img = new Image();
      img.onload = function () {
        var c = document.createElement("canvas"), sz = 360; c.width = c.height = sz;
        var m = Math.min(img.width, img.height); c.getContext("2d").drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, sz, sz);
        P.photo = c.toDataURL("image/jpeg", .84); onChange(); toast("Portrait added.");
      };
      img.onerror = function () { toast("Couldn't read that image. Try another file."); };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  }

  var RESERVED = ["admin", "suiteface", "house", "dealer", "judge", "hello", "support", "help", "api", "me", "joker", "jokers"];
  function validate(show) {
    var ok = true, set = function (id, msg) { if (show) $("#" + id).textContent = msg; if (msg) ok = false; };
    set("fNameErr", P.name.trim() ? "" : "Add the name you go by.");
    var h = P.handle.trim().replace(/^@/, "").toLowerCase();
    var hm = !h ? "Pick a Calling Card, like @jordan.plays." :
      !/^[a-z0-9_.]{3,30}$/.test(h) ? "Use 3–30 letters, numbers, dots or underscores." :
        /^\.|\.$|\.\./.test(h) ? "Dots can't start, end or repeat." :
          RESERVED.indexOf(h) > -1 ? "That Calling Card is reserved. Try another." : "";
    set("fHandleErr", hm);
    var a = parseInt(P.age, 10);
    set("fZipErr", !P.zip ? "Add your ZIP code so we can find people near you." : !/^\d{5}$/.test(P.zip) ? "Use a 5-digit ZIP code." : (zipReady && !ZIPS[P.zip]) ? "We couldn't find that ZIP code. Check it and try again." : "");
    set("fAgeErr", !P.age ? "Add your age." : isNaN(a) ? "Use numbers only." : a < 18 ? "SuiteFace is for adults 18 and over." : a > 99 ? "Check your age." : "");
    return ok;
  }
  function strength() {
    var pts = [!!P.photo, !!P.name.trim(), !!P.handle.trim(), parseInt(P.age, 10) >= 18, !!ZIPS[P.zip], P.bio.trim().length >= 30, !!P.mySuit, P.interests.length >= 3];
    return Math.round(pts.filter(Boolean).length / pts.length * 100);
  }
  function updateMeter() { var s = strength(); $("#faceMeter").style.width = s + "%"; $("#pct").textContent = s + "%"; }
  function initials(n) { return (n || "?").trim().split(/\s+/).map(function (x) { return x[0]; }).join("").slice(0, 2).toUpperCase() || "?"; }
  function renderCard() {
    var s = P.mySuit || P.trumps[0], col = SUIT[s].red ? "var(--red)" : "#2B2730";
    var h = P.handle.trim() ? "@" + P.handle.trim().replace(/^@/, "") : "@yourname";
    $("#myCard").style.setProperty("--felt-c", P.felt);
    $("#myCard").innerHTML = '<div class="in"><span class="corner c1" style="color:' + col + '">A' + pip(s) + '</span><span class="corner c2" style="color:' + col + '">A' + pip(s) + "</span>" +
      '<div class="por" style="' + (P.photo ? "background-image:url(" + P.photo + ")" : "") + '">' + (P.photo ? "" : esc(initials(P.name))) + "</div>" +
      '<div class="nm">' + esc(P.name || "Your Name") + (parseInt(P.age, 10) ? ", " + esc(parseInt(P.age, 10)) : "") + '</div><div class="hd">' + esc(h) + "</div>" +
      '<div class="bio">' + esc(P.bio || "Your Face Value goes here: a few lines about what makes you, you.") + "</div>" + '<div class="facts">' + esc(myFacts()) + "</div>" +
      '<div class="tr" style="color:' + col + '">' + (P.mySuit ? SUIT[s].sym + " " + SUIT[s].name : "Take the quiz to get your suit") + "</div></div>";
    $("#ph").style.backgroundImage = P.photo ? "url(" + P.photo + ")" : ""; $("#ph").textContent = P.photo ? "" : initials(P.name);
  }
  var deckDirty = false;
  function onChange() { renderCard(); updateMeter(); deckDirty = true; saveDraft(); zipHint(); }
  function zipHint() {
    var z = ZIPS[P.zip], el = $("#zipHint"); if (!el) return;
    el.textContent = z ? z.city + ", " + z.st + ". Your 52 are measured from here." : 'Your 52 are measured from your ZIP. Only "about X miles" is ever shown.';
  }
  var saveDraft = debounce(function () { saveP(); }, 400);
  $("#faceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate(true)) { toast("A few things need a look before saving."); var f = $("#faceForm .err:not(:empty)"); if (f) f.previousElementSibling.focus(); return; }
    saveP(); placePool(); buildDeck(); renderTable(true); mapT0 = performance.now(); renderMap();
    toast("Face saved. Your 52 have been re-dealt.", P.mySuit || "heart"); jackpot(3000); burstAt($("#myCard"), 80);
  });
  $("#faceForm").addEventListener("input", function () { if ($("#faceForm .err:not(:empty)")) validate(true); });
  $("#faceReset").addEventListener("click", function () {
    var keep = { trumps: ORDER.slice() }; P = Object.assign({ name: "", handle: "", age: "", zip: "", bio: "", photo: "", looking: "serious", show: "everyone", ageMin: 25, ageMax: 40, dist: 25, felt: "#1E6347", mySuit: "", interests: [] }, keep);
    saveP(); location.hash = "face"; location.reload();
  });

  /* ---------- sample pool (fictional) ---------- */
  var W = ["Ava", "Maya", "Jasmine", "Leah", "Sofia", "Grace", "Zoe", "Nia", "Hannah", "Priya", "Elena", "Kayla", "Brooke", "Imani", "Rosa", "Claire", "Tessa", "Aaliyah", "Mei", "Lauren", "Gabriela", "Hailey", "Dana", "Ruth", "Simone", "Kendra", "Nora", "Lucia", "Paige", "Tasha", "Ivy", "June", "Monica", "Farah"];
  var M = ["Marcus", "Ethan", "Diego", "Caleb", "Andre", "Noah", "Raj", "Tyler", "Malik", "Owen", "Luis", "Jared", "Darius", "Ben", "Kenji", "Isaac", "Trey", "Mateo", "Grant", "Omar", "Wes", "Jamal", "Colin", "Victor", "Eli", "Nate", "Andrew", "Hector", "Reid", "Samir", "Jalen", "Cole", "Felix", "Desmond"];
  var NB = ["Alex", "Sam", "River", "Jordan", "Rowan", "Quinn", "Sage", "Avery"];
  var BIOS = {
    diamond: ["I'll pick the restaurant. You pick dessert.", "Building a business by day, learning salsa by night.", "Early riser, big plans, bigger laugh.", "Looking for a teammate, not a spectator."],
    club: ["Will challenge you to karaoke within ten minutes.", "Best known for terrible puns and great playlists.", "Always down for a spontaneous road trip.", "Life of the party, still home by midnight."],
    heart: ["Sunday dinners, long talks, loyal to a fault.", "I remember your coffee order after one date.", "Happiest on a porch with good people.", "Patient listener, excellent hugger."],
    spade: ["I read the reviews so you don't have to.", "Quiet at first, then I'll talk your ear off about history.", "Planner, puzzle lover, keeps every promise.", "Small circle, deep roots, good books."]
  };
  function rng(seed) { var x = seed >>> 0; return function () { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
  var POOL = (function () {
    var r = rng(52), out = [], id = 0, looks = ["serious", "seeing", "friends"];
    function add(name, gender) {
      var s = ORDER[id % 4];
      var ints = []; while (ints.length < 4) { var x = INTERESTS[(r() * INTERESTS.length) | 0]; if (ints.indexOf(x) < 0) ints.push(x); }
      out.push({ id: "p" + id, name: name, gender: gender, suit: s, age: 22 + Math.round(Math.pow(r(), 1.25) * 30), dist: Math.round((0.5 + Math.pow(r(), 1.4) * 60) * 10) / 10,
        looking: looks[(r() * 3) | 0], interests: ints, bio: BIOS[s][(r() * 4) | 0], noise: r(), hue: (r() * 360) | 0 });
      id++;
    }
    var LAST = "ABCDEFGHJKLMNPRSTVW", used = {};
    for (var i = 0; i < 260; i++) {
      var g = i % 20 === 19 ? "nb" : i % 2 ? "men" : "women", list = g === "nb" ? NB : g === "men" ? M : W;
      var base = list[(r() * list.length) | 0], nm = base;
      if (used[base]) nm = base + " " + LAST[(used[base] * 7 + i) % LAST.length] + ".";
      used[base] = (used[base] || 0) + 1; add(nm, g);
    }
    // a few sample cards carry public Joker status (10 disaster reports in 180 days, confirmed by Judges)
    out.forEach(function (p, i) { var r2 = rng(hash(p.id + "jk"))(); p.jk = r2 < .62 ? 0 : r2 < .8 ? 1 : r2 < .9 ? 2 : r2 < .95 ? 3 : r2 < .98 ? 5 : 8; });
    [17, 90, 151].forEach(function (k, j) { if (out[k]) { out[k].jk = 10; out[k].joker = { count: 10 + j, until: ["Feb 3, 2027", "Mar 19, 2027", "Apr 11, 2027"][j] }; } });
    return out;
  })();

  function fitOf(p) {
    var shared = p.interests.filter(function (x) { return P.interests.indexOf(x) > -1; });
    var lookMatch = p.looking === P.looking ? 1 : (p.looking === "seeing" || P.looking === "seeing") ? .6 : .2;
    var mid = (P.ageMin + P.ageMax) / 2, span = Math.max(4, (P.ageMax - P.ageMin) / 2);
    var pm = prefScore(p);
    var f = 28 * Math.min(1, shared.length / Math.max(1, Math.min(4, P.interests.length || 3))) + 16 * lookMatch +
      16 * (1 - Math.min(1, p.dist / Math.max(2, P.dist))) + 10 * (1 - Math.min(1, Math.abs(p.age - mid) / span)) + 20 * pm.score + 10 * p.noise;
    return { score: Math.round(f), shared: shared, prefHits: pm.hits };
  }
  function eligible(p) {
    return passesDealbreakers(p) && p.age >= P.ageMin && p.age <= P.ageMax && p.dist <= P.dist && (G.jokered || []).indexOf(p.id) < 0;
  }

  /* ---------- ZIP database (42k US ZIP codes) ---------- */
  var ZIPS = {}, ZLIST = [], zipReady = false, DEMO_ZIP = "64105";
  function originZip() { return ZIPS[P.zip] ? P.zip : DEMO_ZIP; }
  function miles(a, b, c, d) {
    var r = Math.PI / 180, dp = (c - a) * r, dl = (d - b) * r;
    var h = Math.sin(dp / 2) * Math.sin(dp / 2) + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dl / 2) * Math.sin(dl / 2);
    return 3958.8 * 2 * Math.asin(Math.sqrt(h));
  }
  function loadZips() {
    if (!window.fetch) return;
    fetch(CFG.zipDataUrl).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (txt) {
      var lines = txt.split("\n");
      for (var i = 1; i < lines.length; i++) {
        var f = lines[i].split("|"); if (f.length < 7) continue;
        var z = { zip: f[0], lat: +f[1], lon: +f[2], city: f[3], st: f[4], pop: +f[5], t: f[6] };
        ZIPS[f[0]] = z; if (z.t === "S") ZLIST.push(z);
      }
      zipReady = true; placePool(); deckDirty = true; buildDeck(); renderTable(false); zipHint(); renderMap();
    }).catch(function () { $("#mapStats").textContent = "The ZIP code map couldn't load here. Distances use sample values."; });
  }
  var placedFor = "";
  function placePool() {
    var oz = originZip(), o = ZIPS[oz]; if (!o || placedFor === oz) return; placedFor = oz;
    var near = ZLIST.filter(function (z) { return z.pop > 0 && Math.abs(z.lat - o.lat) < 1.6 && Math.abs(z.lon - o.lon) < 2.2; })
      .map(function (z) { return { z: z, d: miles(o.lat, o.lon, z.lat, z.lon) }; }).filter(function (x) { return x.d <= 100; });
    if (!near.length) return;
    var total = 0, cum = near.map(function (x) { total += Math.sqrt(x.z.pop) * (x.d < 30 ? 2 : 1); return total; });
    POOL.forEach(function (p) {
      var r = rng(hash(p.id + oz))(), t = r * total, k = 0; while (cum[k] < t) k++;
      var pick = near[Math.min(k, near.length - 1)], jit = rng(hash(p.id))();
      p.zip = pick.z.zip; p.lat = pick.z.lat + (jit - .5) * .02; p.lon = pick.z.lon + (rng(hash(p.id + "x"))() - .5) * .02;
      p.dist = Math.max(0.5, Math.round(pick.d * 10) / 10); p.city = pick.z.city + ", " + pick.z.st;
    });
  }

  /* ---------- deck + deal state ---------- */
  var DECK = [], BY = {}, G = Object.assign({ dealt: [], burned: [], played: [], pairs: [], hands: {}, jokered: [], clock: 0 }, S.get("game", {}));
  function saveG() { S.set("game", G); }
  function buildDeck() {
    var el = POOL.filter(eligible).map(function (p) { var f = fitOf(p); return Object.assign({}, p, { fit: f.score, shared: f.shared }); });
    el.sort(function (a, b) { return b.fit - a.fit || a.dist - b.dist; });
    DECK = []; BY = {};
    ORDER.forEach(function (s) {
      el.filter(function (p) { return p.suit === s; }).slice(0, 13).forEach(function (p, i) { p.rank = RANKS[i]; p.ri = i; DECK.push(p); BY[p.id] = p; });
    });
    ["dealt", "burned", "played"].forEach(function (k) { G[k] = G[k].filter(function (id) { return BY[id]; }); });
    deckDirty = false; saveG();
  }
  function trumpPos(s) { return P.trumps.indexOf(s); }
  function handOrder(a, b) { return trumpPos(a.suit) - trumpPos(b.suit) || a.ri - b.ri; }
  function remaining() { return DECK.filter(function (p) { return G.dealt.indexOf(p.id) < 0 && G.burned.indexOf(p.id) < 0 && G.played.indexOf(p.id) < 0; }).sort(handOrder); }
  function why(p, pos) {
    var bits = [];
    bits.push(SUIT[p.suit].name + " is your #" + (trumpPos(p.suit) + 1) + " trump");
    bits.push("they rank " + p.rank + " for you");
    if (p.shared.length) bits.push("you both love " + p.shared.slice(0, 2).join(" and "));
    if (p.city) bits.push("about " + Math.max(1, Math.round(p.dist)) + " mi away in " + p.city);
    return "Dealt " + ordinal(pos + 1) + ": " + bits.join(", ") + ".";
  }
  function ordinal(n) { return n + (["th", "st", "nd", "rd"][(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10] || "th"); }
  function avatar(p, extra) {
    var bg = "hsl(" + p.hue + " 35% 34%)";
    return '<div class="avatar" style="' + (extra || "") + 'background:radial-gradient(circle at 30% 25%,hsl(' + p.hue + ' 45% 52%),' + bg + ')">' + esc(initials(p.name)) + "</div>";
  }
  function jmeter(p, big) {
    if (p.joker) return '<span class="jm jm-on">JOKER</span>';
    var n = p.jk || 0, pips = ""; for (var i = 0; i < 10; i++) pips += '<i class="' + (i < n ? "on" : "") + '"></i>';
    return '<span class="jm' + (n >= 7 ? " hot" : n >= 4 ? " warm" : "") + '" title="Jokers from confirmed dates in the last 180 days">' + (big ? "Joker meter " : "Jokers ") + n + "/10" + (big ? '<span class="pips">' + pips + "</span>" : "") + "</span>";
  }
  function cardHTML(p, pos) {
    var col = SUIT[p.suit].red ? "red" : "";
    var lookTxt = { serious: "Something serious", seeing: "Dating to see", friends: "Friends first" }[p.looking];
    if (p.joker) col += " jokercard";
    return '<div class="slot" data-id="' + p.id + '"><div class="pcard ' + col + '" tabindex="0" role="button" aria-label="' + esc(p.name) + ", " + p.age + ", " + p.rank + " of " + SUIT[p.suit].name + '. Press to flip."><div class="flip">' +
      (p.joker ? '<div class="face"><span class="idx">J<b class="jk">★</b></span><div class="center"><span class="jhat">' + BRAND.hat + '</span><div class="title">Public Joker</div><div class="dist">' + esc(p.name.split(" ")[0]) + ", " + p.age + " · about " + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">Until ' + p.joker.until + '</div></div><span class="idx br">J<b class="jk">★</b></span></div>' :
      '<div class="face"><span class="idx">' + p.rank + pip(p.suit) + "</span>" +
      '<div class="center">' + avatar(p) + '<div class="title">' + esc(p.name.split(" ")[0]) + ", " + p.age + '</div><div class="dist">about ' + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">' + SUIT[p.suit].sym + " " + SUIT[p.suit].name + "</div>" + jmeter(p) + "</div>" +
      '<span class="idx br">' + p.rank + pip(p.suit) + "</span>" + (G.played.indexOf(p.id) > -1 ? '<span class="stamp">Played</span>' : "") + "</div>") +
      '<div class="back"><b style="font:800 1.05rem var(--display);text-transform:uppercase">' + esc(p.name) + ", " + p.age + "</b>" + (p.joker ? '<span class="jnote">Public Joker: ' + p.joker.count + " confirmed dates in the last 180 days were marked disasters. Judges reviewed it.</span>" : "") + jmeter(p, true) + "<span>" + esc(p.bio) + "</span>" + factsLine(p) + "<span><b>Loves:</b> " + esc(p.interests.join(", ")) + "</span><span><b>Looking for:</b> " + lookTxt + '</span><div class="why">' + esc(why(p, pos)) + '</div><span class="prov">Fictional sample profile · <button type="button" class="linkish" data-report>Report</button> · <button type="button" class="linkish" data-block>Block</button></span></div>' +
      '</div></div><div class="card-actions"><button class="btn ghost" type="button" data-burn>Burn</button><button class="btn red" type="button" data-play>Play</button></div></div>';
  }
  function renderTable(redeal) {
    if (deckDirty || !DECK.length) buildDeck();
    var hand = G.dealt.map(function (id) { return BY[id]; }).filter(Boolean).sort(handOrder);
    $("#dealt").innerHTML = hand.length ? hand.map(cardHTML).join("") :
      '<p class="lede" style="align-self:center">' + (DECK.length ? "Your deck is shuffled and waiting. Deal your Hand." : "No one in the sample deck passes your gates. Widen your age range or distance in My Face.") + "</p>";
    $("#leftCount").textContent = remaining().length; $("#burnCount").textContent = G.burned.length; $("#playCount").textContent = G.played.length;
    $("#trumpHint").innerHTML = "Trumps: " + P.trumps.map(function (s) { return '<span style="color:' + suitColor(s) + '">' + SUIT[s].sym + "</span>"; }).join(" › ");
    $("#suitKey").innerHTML = ORDER.map(function (s) { return '<span><span style="color:' + suitColor(s) + '">' + pip(s) + "</span>" + SUIT[s].name + ": " + SUIT[s].line + "</span>"; }).join("");
    renderPairs();
    if (redeal && !REDUCED) animateIn($$("#dealt .slot"));
  }
  function animateIn(slots) {
    var pile = $("#pile").getBoundingClientRect();
    slots.forEach(function (sl, i) {
      var r = sl.getBoundingClientRect(); if (!sl.animate) return;
      sl.animate([{ transform: "translate(" + (pile.left - r.left) + "px," + (pile.top - r.top) + "px) rotate(-12deg) scale(.8)", opacity: 0 },
        { transform: "translate(0,0) rotate(0) scale(1)", opacity: 1 }], { duration: 520, delay: i * 110, easing: "cubic-bezier(.3,.7,.3,1.15)", fill: "backwards" });
    });
  }
  var HAND = 5;
  function deal() {
    if (deckDirty) buildDeck();
    var before = G.dealt.length, rest = remaining();
    while (G.dealt.length < HAND && rest.length) G.dealt.push(rest.shift().id);
    saveG(); renderTable(false);
    var news = $$("#dealt .slot").filter(function (sl) { return G.dealt.indexOf(sl.getAttribute("data-id")) >= before; });
    if (!REDUCED) animateIn(news.length ? news : $$("#dealt .slot"));
    if (G.dealt.length === before) toast(rest.length ? "Your Hand is full. Burn or Play a card to draw more." : "Deck's out. Every card has been played or burned. Try a Fresh Shuffle.");
  }
  $("#dealBtn").addEventListener("click", function () { if (!G.dealt.length) { deal(); } else deal(); });
  $("#shuffleBtn").addEventListener("click", function () {
    G = { dealt: [], burned: [], played: [], pairs: G.pairs, hands: G.hands || {}, jokered: G.jokered || [], clock: G.clock || 0 }; buildDeck(); saveG(); renderTable(false);
    toast("Fresh Shuffle. Burned and played cards are back in your deck."); setTimeout(deal, 150);
  });
  $("#dealt").addEventListener("click", function (e) {
    var slot = e.target.closest(".slot"); if (!slot) return; var id = slot.getAttribute("data-id"), p = BY[id];
    if (e.target.closest("[data-report]")) { e.stopPropagation(); toast("Report sent to the Judges (demo only)."); return; }
    if (e.target.closest("[data-block]")) { e.stopPropagation(); remove(id, "burned", slot); toast(p.name.split(" ")[0] + " is blocked and won't be dealt again."); return; }
    if (e.target.closest("[data-burn]")) { remove(id, "burned", slot); toast("Burned. " + p.name.split(" ")[0] + " won't be dealt to you again."); return; }
    if (e.target.closest("[data-play]")) { playCard(p, slot); return; }
    var c = e.target.closest(".pcard"); if (c) c.classList.toggle("flipped");
  });
  $("#dealt").addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("pcard")) { e.preventDefault(); e.target.classList.toggle("flipped"); } });
  function remove(id, to, slot) {
    G.dealt = G.dealt.filter(function (x) { return x !== id; }); if (G[to].indexOf(id) < 0) G[to].push(id); saveG();
    var c = slot.querySelector(".pcard");
    var after = function () { slot.remove(); deal(); };
    if (REDUCED || to !== "burned") { after(); return; }
    c.classList.add("burning"); setTimeout(after, 650);
  }
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function playCard(p, slot) {
    slot.querySelector(".pcard").classList.add("played");
    toast("You played " + p.name.split(" ")[0] + "'s card. Waiting to see if they play yours…", p.suit);
    var willPair = (hash(p.id + P.handle) % 100) < Math.max(25, p.fit - 10);
    setTimeout(function () {
      remove(p.id, "played", slot);
      if (willPair) { if (G.pairs.indexOf(p.id) < 0) G.pairs.push(p.id); handOf(p.id); saveG(); renderPairs(); pairModal(p); }
    }, REDUCED ? 300 : 1400);
  }
  function renderPairs() {
    var el = $("#pairs"); var ps = G.pairs.map(function (id) { return POOL.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
    settleHands();
    el.innerHTML = ps.length ? ps.map(function (p) { var h = handOf(p.id); return '<button type="button" class="keeper" data-pair="' + p.id + '" style="border:0;cursor:pointer"><span style="color:' + (SUIT[p.suit].red ? "var(--red)" : "var(--night)") + '">' + pip(p.suit) + "</span>" + esc(p.name.split(" ")[0]) + '<span class="stage s-' + h.stage + '">' + STAGE_LABEL[h.stage] + "</span></button>"; }).join("") : '<span class="hint">No Pairs yet. Play a few cards.</span>';
  }
  $("#pairs").addEventListener("click", function (e) { var b = e.target.closest("[data-pair]"); if (!b) return; var p = POOL.filter(function (x) { return x.id === b.getAttribute("data-pair"); })[0]; if (p) pairModal(Object.assign({}, p, fitOf(p), BY[p.id] ? { rank: BY[p.id].rank } : {}), true); });
  // all 52 overview
  $("#deckBtn").addEventListener("click", function () {
    if (deckDirty) buildDeck();
    var rows = P.trumps.map(function (s) {
      var cards = DECK.filter(function (p) { return p.suit === s; });
      return '<div class="s" style="color:' + suitColor(s) + '" title="' + SUIT[s].name + '">' + pip(s) + "</div>" + RANKS.map(function (rk, i) {
        var p = cards[i]; if (!p) return '<div class="mini empty" aria-label="empty"></div>';
        var st = G.burned.indexOf(p.id) > -1 ? "burned" : G.played.indexOf(p.id) > -1 ? "played" : G.dealt.indexOf(p.id) > -1 ? "dealt" : "";
        return '<div class="mini ' + st + '" title="' + esc(p.name) + ", " + rk + " of " + SUIT[s].name + (st ? " (" + st + ")" : "") + " · " + (p.joker ? "JOKER" : "Jokers " + (p.jk || 0) + "/10") + '">' + esc(initials(p.name)) + "</div>";
      }).join("");
    }).join("");
    modal('<h3 style="font-size:2rem">Your 52</h3><p class="lede" style="margin:6px 0 14px">Rows follow your trump order. Columns run Ace to 2. Gold outline: in your Hand. Red: played. Grey: burned.</p><div class="scrollx"><div class="deckgrid"><div></div>' +
      RANKS.map(function (r) { return '<div class="h">' + r + "</div>"; }).join("") + rows + "</div></div>" +
      (DECK.length < 52 ? '<p class="hint" style="margin-top:12px">Only ' + DECK.length + " cards pass your gates in the sample deck. Widen your age range or distance to fill all 52.</p>" : ""));
  });

  /* ---------- your Joker status ---------- */
  function renderJokerStatus() {
    var el = $("#jokerStatus"); if (!el) return;
    el.innerHTML = '<div class="jstat"><span class="jhat sm">' + BRAND.hat + '</span><div><b>Your Joker status is private</b><p class="hint">Members you meet can see a Joker meter on your card (0/10 up to 9/10) built from confirmed dates. You won\'t see your own count. At 10, your card shows JOKER for 45 days; the first 15 days are probation, then you can clear it for $2,100 or wait it out. Any Joker can be challenged for free. Safety reports are separate and can never be bought out.</p><button class="btn ghost sm" type="button" id="buyout">Joker buy-out · $2,100</button></div></div>';
    $("#buyout").addEventListener("click", function () {
      if (CFG.stripeJokerBuyoutLink) { window.location.href = CFG.stripeJokerBuyoutLink; return; }
      modal('<h3 style="font-size:1.8rem">Joker buy-out</h3><p class="lede" style="margin:8px 0">This only applies once your card is a public Joker. Then this button opens a $2,100.00 Stripe checkout that resets it.</p><div class="notice pv"><b>Preview mode.</b> Checkout isn\'t connected yet. Site owner: add the Stripe link in <code>assets/js/config.js</code>.</div>');
    });
  }

  /* ---------- membership (Stripe) ---------- */
  function needAgree() { if ($("#agree").checked) { $("#agreeErr").textContent = ""; return true; } $("#agreeErr").textContent = "Please tick the box to confirm the $21.00 Buy-In and $2.10 monthly charge."; $("#agree").focus(); return false; }
  $("#payBtn").addEventListener("click", function (e) {
    e.preventDefault(); if (!needAgree()) return;
    if (CFG.stripePaymentLink) { var comp = (S.get("comp", "") || "").trim(); var go = function () { window.location.href = CFG.stripePaymentLink + (comp ? (CFG.stripePaymentLink.indexOf("?") < 0 ? "?" : "&") + "prefilled_promo_code=" + encodeURIComponent(comp) : ""); }; if (window.SFSign) window.SFSign.require("buyin", go); else go(); return; }
    modal('<h3 style="font-size:1.8rem">Checkout preview</h3><div class="pricing" style="margin:12px 0"><div><span class="big">$21.00</span><span class="hint">today</span></div><div class="plus">+</div><div><span class="big">$2.10</span><span class="hint">monthly after</span></div></div><div class="notice pv"><b>Preview mode.</b> Stripe checkout isn\'t connected yet, so no payment was taken. Site owner: paste your Stripe Payment Link into <code>assets/js/config.js</code>.</div><button class="btn gold sm" type="button" id="simBuy" style="margin-top:12px">Simulate a paid Buy-In (demo)</button>');
    $("#simBuy").addEventListener("click", function () { closeModal(); setRole("player"); toast("Buy-In complete (demo). Welcome to the table!"); jackpot(4000); burst(innerWidth / 2, innerHeight / 3, 120); location.hash = "face"; });
  });
  (function () {
    var KNOWN = { PLAYMESSY: "Comp: your $21.00 Buy-In is on the house. Your $2.10 monthly starts in 30 days." };
    var inp = $("#compCode"), msg = $("#compMsg"); if (!inp) return;
    inp.value = S.get("comp", "");
    function apply() {
      var v = inp.value.trim(); if (!v) { S.set("comp", ""); msg.textContent = "Comps are applied at checkout. One per member."; return; }
      S.set("comp", v); var k = KNOWN[v.toUpperCase()];
      msg.innerHTML = k ? "<b style='color:var(--gold-hi)'>" + esc(k) + "</b>" : "Code saved. Stripe checks it at checkout.";
      if (k) { jackpot(1800); burstAt($("#compApply"), 40); }
    }
    $("#compApply").addEventListener("click", apply);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); apply(); } });
    var q = new URLSearchParams(location.search).get("comp"); if (q) { inp.value = q; apply(); }
  })();
  $("#portalBtn").addEventListener("click", function (e) {
    e.preventDefault();
    if (CFG.stripePortalLink) { window.location.href = CFG.stripePortalLink; return; }
    modal('<h3 style="font-size:1.8rem">Manage your membership</h3><p class="lede" style="margin:8px 0">Members update their card, see receipts or cancel in Stripe\'s secure portal. To pause, use the Pause membership form; pauses last up to 21 days.</p><div class="notice pv"><b>Preview mode.</b> The Stripe customer portal link isn\'t connected yet.</div><a class="btn gold sm" href="#join" data-close style="margin-top:12px">Open the pause form</a>');
    var pf = $("#modal [href='#join']"); if (pf) pf.addEventListener("click", function () { setTimeout(function () { var t = $('[data-form="PAUSE"]'); if (t) t.click(); }, 50); });
  });
  $("#agree").addEventListener("change", function () { if ($("#agree").checked) $("#agreeErr").textContent = ""; });

  /* ---------- table map ---------- */
  var mapView = "area", mapPts = [], cv = $("#mapCanvas"), tip = $("#mapTip"), mapT0 = 0;
  $$("[data-view]").forEach(function (b) { b.addEventListener("click", function () { mapView = b.getAttribute("data-view"); $$("[data-view]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); mapT0 = performance.now(); renderMap(); }); });
  window.addEventListener("resize", debounce(function () { renderMap(); }, 150));
  function renderMap() {
    if (!cv) return;
    var dpr = window.devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight; if (!W) return;
    cv.width = W * dpr; cv.height = H * dpr; var ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    $("#mapKey").innerHTML = ORDER.map(function (s) { return '<span><span style="color:' + suitColor(s) + '">' + pip(s) + "</span>" + SUIT[s].name + "</span>"; }).join("") + '<span><span class="dotme"></span>You</span>';
    if (!zipReady) return;
    var o = ZIPS[originZip()], cos = Math.cos(o.lat * Math.PI / 180), proj, R = P.dist;
    if (mapView === "us") {
      var minLon = -125, maxLon = -66.5, minLat = 24.3, maxLat = 49.5, kx = Math.cos(37 * Math.PI / 180);
      var sx = (W - 30) / ((maxLon - minLon) * kx), sy = (H - 30) / (maxLat - minLat), sc = Math.min(sx, sy);
      var ox = (W - (maxLon - minLon) * kx * sc) / 2, oy = (H - (maxLat - minLat) * sc) / 2;
      proj = function (lat, lon) { return [ox + (lon - minLon) * kx * sc, oy + (maxLat - lat) * sc]; };
    } else {
      var span = R * 1.35 / 69, scl = Math.min(W, H) / (2 * span);
      proj = function (lat, lon) { return [W / 2 + (lon - o.lon) * cos * scl, H / 2 - (lat - o.lat) * scl]; };
    }
    ctx.fillStyle = "rgba(250,247,240,.22)";
    var inR = 0, zr = mapView === "us" ? 1.2 : 3.4;
    ZLIST.forEach(function (z) {
      if (mapView === "us" && (z.lat < 24 || z.lon < -125 || z.st === "AK" || z.st === "HI" || z.st === "PR")) return;
      var q = proj(z.lat, z.lon); if (q[0] < -4 || q[1] < -4 || q[0] > W + 4 || q[1] > H + 4) return;
      if (miles(o.lat, o.lon, z.lat, z.lon) <= R) { inR++; ctx.fillStyle = "rgba(232,196,106,.6)"; } else ctx.fillStyle = "rgba(250,247,240,.3)";
      ctx.fillRect(q[0] - zr / 2, q[1] - zr / 2, zr, zr);
    });
    var c = proj(o.lat, o.lon), rpx = mapView === "us" ? R / 69 * (proj(o.lat + 1, o.lon)[1] - proj(o.lat, o.lon)[1]) * -1 : R / 69 * Math.min(W, H) / (2 * R * 1.35 / 69);
    ctx.setLineDash([6, 6]); ctx.strokeStyle = "#E8C46A"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(c[0], c[1], Math.max(4, rpx), 0, 7); ctx.stroke(); ctx.setLineDash([]);
    mapPts = [];
    var t = Math.min(1, (performance.now() - mapT0) / 900);
    DECK.forEach(function (p, i) {
      if (p.lat == null) return; var q = proj(p.lat, p.lon), sz = mapView === "us" ? 7 : 18;
      var a = REDUCED ? 1 : Math.max(0, Math.min(1, t * 1.6 - i / DECK.length * .6));
      ctx.save(); ctx.globalAlpha = a; ctx.translate(q[0] - sz / 2, q[1] - sz / 2 - (1 - a) * 14); ctx.scale(sz / 100, sz / 100);
      ctx.fillStyle = p.joker ? "#E8C46A" : (SUIT[p.suit].red ? "#E5505E" : "#FAF7F0");
      if (paths[p.suit]) ctx.fill(paths[p.suit]); ctx.restore();
      mapPts.push({ x: q[0], y: q[1], p: p });
    });
    ctx.fillStyle = "#C8102E"; ctx.beginPath(); ctx.arc(c[0], c[1], 7, 0, 7); ctx.fill(); ctx.strokeStyle = "#FFE7A3"; ctx.lineWidth = 3; ctx.stroke();
    $("#mapStats").textContent = inR.toLocaleString() + " ZIP codes within " + R + " mi of " + o.city + ", " + o.st + (ZIPS[P.zip] ? "" : " (demo location: set yours above)") + " · " + DECK.length + " cards in your deck";
    if (!REDUCED && t < 1) requestAnimationFrame(renderMap);
  }
  function mapHover(e) {
    var r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, best = null, bd = 18;
    mapPts.forEach(function (m) { var d = Math.hypot(m.x - x, m.y - y); if (d < bd) { bd = d; best = m; } });
    if (!best) { tip.hidden = true; return; }
    var p = best.p; tip.hidden = false; tip.style.left = best.x + "px"; tip.style.top = best.y + "px";
    tip.textContent = (p.joker ? "Public Joker · " : p.rank + " of " + SUIT[p.suit].name + " · ") + p.name.split(" ")[0] + ", " + p.age + " · about " + Math.max(1, Math.round(p.dist)) + " mi";
  }
  if (cv) { cv.addEventListener("mousemove", mapHover); cv.addEventListener("click", mapHover); cv.addEventListener("mouseleave", function () { tip.hidden = true; }); }

  /* ---------- invite ---------- */
  var seats = S.get("seats", []);
  function renderSeats() {
    var r = $("#round"); $$(".seat", r).forEach(function (x) { x.remove(); });
    for (var i = 0; i < 6; i++) {
      var a = -Math.PI / 2 + i * Math.PI / 3, el = document.createElement("div");
      el.className = "seat" + (i === 0 ? " me" : seats[i - 1] ? " taken" : "");
      el.style.left = (50 + 46 * Math.cos(a)) + "%"; el.style.top = (50 + 46 * Math.sin(a)) + "%";
      el.textContent = i === 0 ? initials(P.name || "You") : seats[i - 1] ? initials(seats[i - 1]) : "+";
      el.setAttribute("aria-label", i === 0 ? "Your seat" : seats[i - 1] ? "Saved for " + seats[i - 1] : "Open seat");
      r.appendChild(el);
    }
    $("#seatCount").textContent = Math.min(5, seats.length);
  }
  $("#inviteForm").addEventListener("submit", function (e) {
    e.preventDefault(); var n = $("#iName").value.trim();
    if (!n) { $("#iNameErr").textContent = "Add your friend's first name."; $("#iName").focus(); return; }
    $("#iNameErr").textContent = "";
    var from = (P.handle || "").trim().replace(/^@/, "");
    var link = CFG.siteUrl + "?invite=" + encodeURIComponent(from || "a-friend") + "&seat=" + encodeURIComponent(n) + "#join";
    var note = $("#iNote").value.trim() || "You'd be an Ace in somebody's Hand.";
    var msg = "Hey " + n + "! " + note + " I saved you a seat at SuiteFace, dating dealt like a deck of cards. No Jokers Needed: " + link;
    $("#inviteLink").value = link; $("#inviteOut").hidden = false;
    $("#shareEmail").href = "mailto:?subject=" + encodeURIComponent("I saved you a seat at SuiteFace") + "&body=" + encodeURIComponent(msg);
    $("#shareSms").href = "sms:?&body=" + encodeURIComponent(msg);
    var sn = $("#shareNative"); sn.hidden = !navigator.share; sn.onclick = function () { navigator.share({ title: "SuiteFace", text: msg, url: link }).catch(function () { }); };
    if (seats.indexOf(n) < 0) { seats.push(n); if (seats.length > 5) seats.shift(); S.set("seats", seats); }
    renderSeats(); burstAt($("#round"), 40); toast("Seat saved for " + n + ". Send them the link.");
  });
  function copy(text, btn) {
    var done = function () { var o = btn.textContent; btn.textContent = "Copied"; setTimeout(function () { btn.textContent = o; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    else fallback();
    function fallback() { toast("Select the text and copy it with your keyboard."); }
  }
  $("#copyLink").addEventListener("click", function () { $("#inviteLink").select(); copy($("#inviteLink").value, $("#copyLink")); });
  $("#copyMail").addEventListener("click", function () { copy("hello@suiteface.com", $("#copyMail")); });

  /* ---------- forms → hello@suiteface.com ---------- */
  var FORMS = {
    WAITLIST: { title: "Join the waitlist", btn: "Save my seat", subject: "Waitlist sign-up", fields: [
      ["name", "Your name", "text", true], ["email", "Email", "email", true], ["city", "City", "text", true],
      ["looking", "Looking for", "select", false, ["Something serious", "Dating to see", "Friends first"]], ["adult", "I'm 18 or older", "checkbox", true]] },
    CONTACT: { title: "Send us a note", btn: "Send message", subject: "New inquiry", fields: [
      ["name", "Your name", "text", true], ["email", "Email", "email", true], ["message", "Message", "textarea", true]] },
    PAUSE: { title: "Pause my membership", btn: "Request a pause", subject: "Pause request", fields: [
      ["name", "Your name", "text", true], ["email", "Email on your membership", "email", true], ["start", "Pause starting (YYYY-MM-DD)", "text", true],
      ["note", "Anything we should know?", "textarea", false]] },
    PARTNER: { title: "Partner with SuiteFace", btn: "Send to partnerships", subject: "Partnership inquiry", fields: [
      ["name", "Your name", "text", true], ["company", "Business or organization", "text", true], ["email", "Email", "email", true],
      ["kind", "I'm a…", "select", true, ["Date-night venue", "Advertiser", "Investor", "Press", "Other"]], ["message", "Tell us more", "textarea", true]] },
    FEEDBACK: { title: "Feedback", btn: "Send feedback", subject: "Site feedback", fields: [] }
  };
  function fieldHTML(f, pre) {
    var id = pre + "_" + f[0], req = f[3] ? " required" : "";
    if (f[2] === "checkbox") return '<div class="field"><label style="display:flex;gap:10px;align-items:center;font-weight:600"><input type="checkbox" id="' + id + '" name="' + f[0] + '"' + req + ' style="width:20px;height:20px;accent-color:var(--gold-hi)"> ' + f[1] + '</label><span class="err" id="' + id + 'Err"></span></div>';
    var ctl = f[2] === "textarea" ? '<textarea id="' + id + '" name="' + f[0] + '" maxlength="2000"' + req + "></textarea>" :
      f[2] === "select" ? '<select id="' + id + '" name="' + f[0] + '"' + req + '><option value="">Choose…</option>' + f[4].map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select>" :
        '<input type="' + f[2] + '" id="' + id + '" name="' + f[0] + '" maxlength="120"' + req + (f[2] === "email" ? ' autocomplete="email"' : f[0] === "name" ? ' autocomplete="name"' : "") + ">";
    return '<div class="field"><label for="' + id + '">' + f[1] + (f[3] ? "" : ' <span class="hint">(optional)</span>') + "</label>" + ctl + '<span class="err" id="' + id + 'Err"></span></div>';
  }
  var HONEY = '<input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="display:none" aria-hidden="true">';
  function previewNote() { return '<div class="notice pv"><b>Preview mode.</b> This form isn\'t connected yet, so nothing was sent. Site owner: add your free Web3Forms access key in <code>assets/js/config.js</code>.</div>'; }
  function renderForm(type) {
    var f = FORMS[type], el = $("#mainForm");
    el.setAttribute("data-type", type);
    el.innerHTML = "<h3>" + f.title + "</h3>" + (type === "PAUSE" ? '<p class="hint">Pauses last up to 21 days and stop your $2.10 billing. If you don\'t resume within 21 days, your membership ends and returning needs a new $21.00 Buy-In.</p>' : "") + f.fields.map(function (x) { return fieldHTML(x, "m"); }).join("") + HONEY +
      '<button class="btn gold" type="submit">' + f.btn + '</button><div class="out" aria-live="polite"></div>';
  }
  $$('[data-form]').forEach(function (b) {
    b.addEventListener("click", function () {
      $$('[data-form]').forEach(function (x) { var on = x === b; x.setAttribute("aria-pressed", String(on)); x.setAttribute("aria-selected", String(on)); });
      renderForm(b.getAttribute("data-form"));
    });
  });
  renderForm("WAITLIST");
  function ticketId() { return "SF-" + new Date().getFullYear() + "-" + (Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 4)).toUpperCase(); }
  function submitForm(formEl, type, extra) {
    var f = FORMS[type], data = {}, ok = true;
    f.fields.forEach(function (x) {
      var el = formEl.querySelector('[name="' + x[0] + '"]'), err = formEl.querySelector("#" + el.id + "Err");
      var v = x[2] === "checkbox" ? el.checked : el.value.trim(), msg = "";
      if (x[3] && (x[2] === "checkbox" ? !v : !v)) msg = x[2] === "checkbox" ? "Please confirm to continue." : "This one's needed.";
      else if (x[2] === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = "Check the email address, like name@example.com.";
      if (err) err.textContent = msg; if (msg) ok = false;
      data[x[0]] = x[2] === "checkbox" ? (v ? "Yes" : "No") : v;
    });
    Object.assign(data, extra || {});
    var out = formEl.querySelector(".out"), btn = formEl.querySelector('button[type="submit"]');
    if (!ok) { var first = formEl.querySelector(".err:not(:empty)"); if (first) { var c = first.parentElement.querySelector("input,textarea,select"); if (c) c.focus(); } return; }
    if (formEl.querySelector('[name="botcheck"]').checked) return;
    if (!CFG.formAccessKey) { out.innerHTML = previewNote(); return; }
    var tk = ticketId(); btn.disabled = true; var old = btn.textContent; btn.textContent = "Sending…"; out.innerHTML = "";
    var payload = Object.assign({ access_key: CFG.formAccessKey, subject: "[SuiteFace][" + type + "] " + tk + " — " + f.subject, from_name: "SuiteFace.com", ticket: tk, form_type: type, page: location.href.split("?")[0] }, data);
    if (data.email) payload.replyto = data.email;
    fetch(CFG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().catch(function () { return { success: false, message: "Unexpected response." }; }); })
      .then(function (j) {
        if (j && j.success) {
          out.innerHTML = '<div class="notice good">Got it. Your reference number is <span class="ticket">' + tk + "</span>. We'll reply by email.</div>";
          formEl.querySelectorAll("input:not([type=checkbox]),textarea,select").forEach(function (x) { x.value = ""; });
          formEl.querySelectorAll("input[type=checkbox]").forEach(function (x) { x.checked = false; });
          jackpot(2500); burstAt(btn, 40);
        } else out.innerHTML = '<div class="notice bad">That didn\'t go through: ' + esc((j && j.message) || "the form service said no.") + " Try again, or email hello@suiteface.com.</div>";
      })
      .catch(function () { out.innerHTML = '<div class="notice bad">We couldn\'t reach the form service. Check your connection and try again, or email hello@suiteface.com.</div>'; })
      .then(function () { btn.disabled = false; btn.textContent = old; });
  }
  $("#mainForm").addEventListener("submit", function (e) { e.preventDefault(); submitForm(e.target, e.target.getAttribute("data-type")); });

  // feedback popup
  $("#fbBtn").addEventListener("click", function () {
    var m = modal('<h3 style="font-size:2rem">How\'s the table?</h3><p class="lede" style="margin:6px 0 14px">Tap a suit, add a note if you like. It goes straight to the SuiteFace team.</p>' +
      '<form class="form-grid" id="fbForm" novalidate><div class="chips" role="group" aria-label="Your reaction">' +
      [["heart", "Love it"], ["diamond", "Worth it"], ["club", "Fun"], ["spade", "Solid"]].map(function (x) { return '<button type="button" class="chip" aria-pressed="false" data-r="' + x[0] + '"><span style="color:' + suitColor(x[0]) + '">' + pip(x[0]) + "</span>" + x[1] + "</button>"; }).join("") +
      '</div><span class="err" id="fbErr"></span><div class="field"><label for="fbMsg">What should we change?</label><textarea id="fbMsg" maxlength="1500"></textarea></div>' +
      '<div class="field"><label for="fbEmail">Email <span class="hint">(optional, if you\'d like a reply)</span></label><input type="email" id="fbEmail" autocomplete="email"></div>' + HONEY +
      '<button class="btn gold" type="submit">Send feedback</button><div class="out" aria-live="polite"></div></form>', { focus: ".chip" });
    var react = "";
    $$("[data-r]", m).forEach(function (b) { b.addEventListener("click", function () { react = b.getAttribute("data-r"); $$("[data-r]", m).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); $("#fbErr", m).textContent = ""; }); });
    $("#fbForm", m).addEventListener("submit", function (e) {
      e.preventDefault();
      if (!react) { $("#fbErr", m).textContent = "Tap a suit to tell us how it feels."; return; }
      var em = $("#fbEmail", m).value.trim();
      if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) { $("#fbErr", m).textContent = "Check the email address, or leave it blank."; return; }
      FORMS.FEEDBACK.fields = [];
      submitForm(e.target, "FEEDBACK", { reaction: SUIT[react].sym + " " + ({ heart: "Love it", diamond: "Worth it", club: "Fun", spade: "Solid" })[react], message: $("#fbMsg", m).value.trim(), email: em });
    });
  });

  /* ---------- welcome slide-in ---------- */
  var params = new URLSearchParams(location.search), inv = params.get("invite"), seat = params.get("seat");
  if (inv || !S.get("welcomed", false)) {
    setTimeout(function () {
      var w = document.createElement("div"); w.className = "welcome"; w.setAttribute("role", "dialog"); w.setAttribute("aria-label", "Welcome");
      w.innerHTML = "<h3>" + (inv ? (seat ? esc(seat) + ", " : "") + "@" + esc(inv.replace(/^@/, "")) + " saved you a seat" : "Welcome to the Table") + "</h3><p class=\"hint\">" +
        (inv ? "Watch the demo, find your suit, then buy in to get your 52." : "Watch a demo hand, find your suit in two minutes, then buy in to play. No Jokers Needed.") +
        '</p><div class="row"><a class="btn gold sm" href="#demo">Watch the demo</a><a class="btn ghost sm" href="#quiz">Find my suit</a><button class="btn ghost sm" type="button">Close</button></div>';
      document.body.appendChild(w);
      var close = function () { w.remove(); S.set("welcomed", true); };
      $$("a,button", w).forEach(function (b) { b.addEventListener("click", close); });
    }, 1600);
  }


  /* =====================================================================
     IDENTITY & DATING PREFERENCES
     Every question offers "Prefer not to say". Dropdowns and check-all-that-apply
     wherever possible; typing only for answers that are truly unique.
     ===================================================================== */
  var PNTS = "Prefer not to say", OPEN = "Open to anyone";
  var HEIGHTS = (function () { var a = []; for (var i = 54; i <= 84; i++) a.push(Math.floor(i / 12) + "'" + (i % 12) + '"'); return a; })();
  var HBANDS = ["Under 5'0\"", "5'0\"–5'3\"", "5'4\"–5'7\"", "5'8\"–5'11\"", "6'0\"–6'3\"", "6'4\" and up"];
  function inches(h) { var m = /^(\d)'(\d+)"$/.exec(h || ""); return m ? +m[1] * 12 + +m[2] : 0; }
  function hband(h) { var n = inches(h); if (!n) return ""; return n < 60 ? HBANDS[0] : n < 64 ? HBANDS[1] : n < 68 ? HBANDS[2] : n < 72 ? HBANDS[3] : n < 76 ? HBANDS[4] : HBANDS[5]; }
  var WEIGHTS = ["Under 100 lb", "100–119 lb", "120–139 lb", "140–159 lb", "160–179 lb", "180–199 lb", "200–219 lb", "220–239 lb", "240–259 lb", "260–299 lb", "300 lb and up"];
  // k, label, type (one | many | text | city), options, pref (show in Looking for), hidden by default (sensitive), group

  var DENOMS = {
    "Christian": ["Catholic (Roman Catholic)", "Eastern Orthodox", "Coptic / Oriental Orthodox", "Baptist (Southern Baptist)", "Baptist (Missionary)", "Baptist (Independent / Free Will)", "Baptist (American / National)", "Methodist (United Methodist)", "AME / AME Zion / CME", "Pentecostal", "Assemblies of God", "Church of God in Christ (COGIC)", "Church of God", "Apostolic", "Holiness", "Non-denominational", "Evangelical", "Lutheran", "Presbyterian", "Episcopal / Anglican", "Church of Christ", "Disciples of Christ", "Congregational / UCC", "Reformed", "Seventh-day Adventist", "Nazarene", "Wesleyan", "Mennonite / Anabaptist", "Amish", "Quaker (Friends)", "Latter-day Saint (LDS)", "Jehovah's Witness", "Christian Science", "Messianic", "Another Christian church"],
    "Jewish": ["Orthodox", "Modern Orthodox", "Hasidic / Haredi", "Conservative", "Reform", "Reconstructionist", "Humanistic", "Cultural / secular", "Just Jewish"],
    "Muslim": ["Sunni", "Shia", "Sufi", "Ahmadiyya", "Ibadi", "Nation of Islam", "Just Muslim"],
    "Hindu": ["Vaishnava", "Shaiva", "Shakta", "Smarta", "ISKCON (Hare Krishna)", "Arya Samaj", "Just Hindu"],
    "Buddhist": ["Theravada", "Mahayana", "Zen", "Tibetan / Vajrayana", "Pure Land", "Nichiren / SGI", "Secular Buddhist"],
    "Sikh": ["Amritdhari", "Sahajdhari", "Just Sikh"],
    "Jain": ["Digambara", "Shvetambara"],
    "Traditional African & diaspora": ["Yoruba / Ifá", "Santería / Lucumí", "Vodou / Vodun", "Candomblé", "Hoodoo / Rootwork", "Another tradition"],
    "Native American & Indigenous": ["Native American Church", "Traditional tribal ways", "Another tradition"],
    "Pagan & earth-based": ["Wicca", "Druidry", "Heathenry / Norse", "Hellenic", "Eclectic Pagan"],
    "Spiritual, not religious": ["Meditation / mindfulness", "Nature-centered", "Metaphysical / New Thought", "Eclectic"]
  };
  var FAITHS = ["Christian", "Jewish", "Muslim", "Hindu", "Buddhist", "Sikh", "Jain", "Bahá'í", "Shinto", "Taoist", "Confucian", "Zoroastrian", "Rastafari", "Druze", "Unitarian Universalist", "Traditional African & diaspora", "Native American & Indigenous", "Pagan & earth-based", "Spiritual, not religious", "Agnostic", "Atheist", "Humanist", "Another religion"];
  var NONRELIGIOUS = ["Agnostic", "Atheist", "Humanist", "Spiritual, not religious"];
  var FAITH_PARTNER = ["Same faith as me", "Same denomination as me", "Equal time: we'd share both faiths", "Open to a non-religious partner", "Open-minded about faith", "No preference"];
  var IDF = [
    ["gender", "Gender", "one", ["Woman", "Man", "Trans woman", "Trans man", "Nonbinary", "Genderfluid", "Agender", "Two-Spirit", "Another identity"], 1, 0, "Who I am"],
    ["pronouns", "Pronouns", "many", ["she/her", "he/him", "they/them", "Any pronouns", "Ask me"], 0, 0, "Who I am"],
    ["orientation", "Sexual orientation", "many", ["Straight", "Gay", "Lesbian", "Bisexual", "Pansexual", "Queer", "Asexual", "Demisexual", "Questioning", "Another"], 0, 1, "Who I am"],
    ["race", "Race & ethnicity (check all that apply)", "many", ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Middle Eastern or North African", "Native Hawaiian or Pacific Islander", "White", "Another"], 1, 1, "Who I am"],
    ["height", "Height", "one", HEIGHTS, 1, 0, "Who I am"],
    ["weight", "Weight", "one", WEIGHTS, 1, 1, "Who I am"],
    ["body", "Body type", "one", ["Slim", "Athletic", "Average", "Curvy", "A few extra pounds", "Big & beautiful", "Muscular"], 1, 0, "Who I am"],
    ["birthCity", "Birth city", "city", [], 0, 0, "Where I'm from"],
    ["community", "The area I live in", "one", ["Big city", "Suburbs", "Small town", "Rural / country"], 1, 0, "Where I'm from"],
    ["housing", "Home (check all that apply)", "many", ["Own my home", "Rent", "Rent a room / boarding", "Live with parents", "Live with siblings", "Live with roommates", "Live with my kids", "Military housing", "Between homes / experiencing homelessness"], 1, 1, "Where I'm from"],
    ["status", "Relationship status", "one", ["Single, never married", "Separated", "Divorced", "Widow", "Widower", "Married", "In a relationship"], 1, 0, "Love life"],
    ["style", "Relationship style", "many", ["Monogamous", "Open relationship", "Polyamorous", "Swinger", "Ethically non-monogamous", "Still figuring it out"], 1, 1, "Love life"],
    ["kids", "Kids", "one", ["No kids", "Kids at home", "Kids, not at home", "Kids part-time"], 1, 0, "Love life"],
    ["wantKids", "Want kids?", "one", ["Want kids", "Open to kids", "Don't want kids", "Not sure"], 1, 0, "Love life"],
    ["education", "Education", "one", ["Some high school", "High school / GED", "Boarding school", "Trade or technical school", "Some college", "In college now", "Associate degree", "Bachelor's degree", "Master's degree", "Doctorate", "Law or medical degree"], 1, 0, "Work & money"],
    ["employment", "Work (check all that apply)", "many", ["Full-time", "Part-time", "Self-employed / business owner", "Gig work", "Student", "Military", "Retired", "Between jobs", "Homemaker / caregiver", "On disability"], 1, 0, "Work & money"],
    ["industry", "Industry", "one", ["Healthcare", "Education", "Technology", "Skilled trades", "Construction", "Retail", "Hospitality & food", "Finance & insurance", "Real estate", "Sales & marketing", "Government", "Military", "Legal", "Arts & media", "Transportation", "Agriculture", "Nonprofit & faith", "Beauty & wellness", "Manufacturing", "Other"], 1, 0, "Work & money"],
    ["jobTitle", "Job title", "text", [], 0, 0, "Work & money"],
    ["income", "Yearly income", "one", ["Under $25,000", "$25,000–$49,999", "$50,000–$74,999", "$75,000–$99,999", "$100,000–$149,999", "$150,000–$249,999", "$250,000 and up"], 1, 1, "Work & money"],
    ["religion", "Faith", "one", FAITHS, 1, 1, "Faith"],
    ["denomination", "Denomination or tradition", "denom", [], 0, 1, "Faith"],
    ["faithImportance", "How much faith matters to me", "one", ["Very important", "Somewhat important", "Not very important", "Not at all"], 1, 1, "Faith"],
    ["faithPartner", "Faith in a partner (check all that apply)", "many", FAITH_PARTNER, 0, 0, "Faith"],
    ["politics", "Politics", "one", ["Liberal", "Moderate", "Conservative", "Not political", "Another"], 1, 1, "Lifestyle"],
    ["drink", "Drinking", "one", ["Never", "Socially", "Often", "Sober"], 1, 0, "Lifestyle"],
    ["smoke", "Smoking", "one", ["Never", "Socially", "Regularly", "Trying to quit"], 1, 0, "Lifestyle"],
    ["cannabis", "Cannabis", "one", ["Never", "Sometimes", "Often"], 1, 0, "Lifestyle"],
    ["pets", "Pets (check all that apply)", "many", ["Dog", "Cat", "Other pets", "No pets", "Allergic to pets"], 1, 0, "Lifestyle"],
    ["languages", "Languages (check all that apply)", "many", ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean", "German", "ASL", "Another"], 1, 0, "Lifestyle"],
    ["zodiac", "Zodiac sign", "one", ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"], 0, 0, "Lifestyle"]
  ];
  var IDX = {}; IDF.forEach(function (f) { IDX[f[0]] = f; });
  POOL.forEach(function (p) { p.id_ = sampleIdentity(p); });
  function prefOpts(f) { return f[0] === "height" ? HBANDS : f[3]; }
  function asList(v) { return v == null || v === "" ? [] : Array.isArray(v) ? v : [v]; }
  function prefValue(f, v) { return f[0] === "height" ? asList(hband(v)) : asList(v); }

  function sampleIdentity(p) {
    var r = rng(hash(p.id + "id")), pick = function (a) { return a[(r() * a.length) | 0]; }, o = {};
    o.gender = p.gender === "women" ? (r() < .06 ? "Trans woman" : "Woman") : p.gender === "men" ? (r() < .06 ? "Trans man" : "Man") : pick(["Nonbinary", "Genderfluid", "Agender"]);
    o.pronouns = [o.gender.indexOf("Woman") > -1 || o.gender === "Woman" ? "she/her" : o.gender.indexOf("man") > -1 ? "he/him" : "they/them"];
    var sens = function (v) { return r() < .14 ? PNTS : v; };
    o.orientation = sens([pick(["Straight", "Straight", "Straight", "Bisexual", "Gay", "Lesbian", "Pansexual", "Queer"])]);
    o.race = sens(r() < .12 ? [pick(IDX.race[3]), pick(IDX.race[3])].filter(function (x, i, a) { return a.indexOf(x) === i; }) : [pick(["White", "White", "Black or African American", "Black or African American", "Hispanic or Latino", "Hispanic or Latino", "Asian", "American Indian or Alaska Native", "Middle Eastern or North African", "Native Hawaiian or Pacific Islander"])]);
    var base = o.gender.indexOf("Man") > -1 || o.gender === "Trans man" ? 69 : o.gender.indexOf("Woman") > -1 ? 64 : 66;
    o.height = HEIGHTS[Math.max(0, Math.min(HEIGHTS.length - 1, base - 54 + Math.round((r() + r() + r() - 1.5) * 4)))];
    o.weight = sens(WEIGHTS[Math.min(WEIGHTS.length - 1, 2 + ((r() * 6) | 0))]);
    o.body = pick(IDX.body[3]); o.birthCity = "";
    o.community = pick(IDX.community[3]);
    o.housing = sens([pick(["Own my home", "Rent", "Rent", "Rent a room / boarding", "Live with parents", "Live with roommates", "Live with my kids"])]);
    o.status = pick(["Single, never married", "Single, never married", "Single, never married", "Divorced", "Divorced", "Separated", o.gender.indexOf("Woman") > -1 ? "Widow" : "Widower"]);
    o.style = sens([r() < .82 ? "Monogamous" : pick(["Open relationship", "Polyamorous", "Swinger", "Ethically non-monogamous", "Still figuring it out"])]);
    o.kids = pick(["No kids", "No kids", "Kids at home", "Kids, not at home", "Kids part-time"]);
    o.wantKids = pick(IDX.wantKids[3]);
    o.education = pick(["High school / GED", "Trade or technical school", "Some college", "Associate degree", "Bachelor's degree", "Bachelor's degree", "Master's degree", "Doctorate"]);
    o.employment = [pick(["Full-time", "Full-time", "Full-time", "Part-time", "Self-employed / business owner", "Student", "Military", "Gig work"])];
    o.industry = pick(IDX.industry[3]);
    o.jobTitle = ({ Healthcare: "Nurse", Education: "Teacher", Technology: "Developer", "Skilled trades": "Electrician", Construction: "Project manager", Retail: "Store manager", "Hospitality & food": "Chef", "Finance & insurance": "Analyst", "Real estate": "Realtor", "Sales & marketing": "Account rep", Government: "Planner", Military: "Sergeant", Legal: "Paralegal", "Arts & media": "Designer", Transportation: "Driver", Agriculture: "Farmer", "Nonprofit & faith": "Program lead", "Beauty & wellness": "Stylist", Manufacturing: "Technician", Other: "Freelancer" })[o.industry];
    o.income = sens(IDX.income[3][Math.min(6, (r() * 5.4) | 0)]);
    o.religion = sens(pick(["Christian", "Christian", "Christian", "Christian", "Christian", "Christian", "Spiritual, not religious", "Spiritual, not religious", "Agnostic", "Atheist", "Jewish", "Muslim", "Hindu", "Buddhist", "Another religion", "Unitarian Universalist", "Sikh", "Bahá'í"]));
    o.denomination = DENOMS[o.religion] ? pick(DENOMS[o.religion].slice(0, 16)) : "";
    o.faithImportance = NONRELIGIOUS.indexOf(o.religion) > -1 ? pick(["Not very important", "Not at all"]) : pick(["Very important", "Somewhat important", "Somewhat important", "Not very important"]);
    o.faithPartner = [o.faithImportance === "Very important" ? pick(["Same faith as me", "Same denomination as me", "Equal time: we'd share both faiths"]) : pick(["Open-minded about faith", "No preference", "Open to a non-religious partner", "Equal time: we'd share both faiths"])];
    o.politics = sens(pick(IDX.politics[3]));
    o.drink = pick(IDX.drink[3]); o.smoke = pick(["Never", "Never", "Never", "Socially", "Trying to quit"]); o.cannabis = pick(["Never", "Never", "Sometimes", "Often"]);
    o.pets = [pick(IDX.pets[3])]; o.languages = r() < .25 ? ["English", pick(["Spanish", "Spanish", "Vietnamese", "Tagalog", "ASL", "Arabic"])] : ["English"];
    o.zodiac = pick(IDX.zodiac[3]);
    return o;
  }
  // a candidate meets my preference for field k? returns true, false or null (unknown / no preference)
  function prefHit(k, p) {
    var pr = P.prefs[k]; if (!pr || !pr.sel || !pr.sel.length || pr.sel.indexOf(OPEN) > -1) return null;
    var v = p.id_ ? p.id_[k] : null, vals = prefValue(IDX[k], v);
    if (!vals.length || vals.indexOf(PNTS) > -1) return false;
    return vals.some(function (x) { return pr.sel.indexOf(x) > -1; });
  }
  function passesDealbreakers(p) {
    return IDF.every(function (f) { var pr = P.prefs[f[0]]; if (!pr || !pr.deal) return true; var h = prefHit(f[0], p); return h !== false; });
  }
  function prefScore(p) {
    var n = 0, m = 0, hits = [];
    IDF.forEach(function (f) { var pr = P.prefs[f[0]]; if (!pr || pr.deal) return; var h = prefHit(f[0], p); if (h === null) return; n++; if (h) { m++; hits.push(f[1].replace(/ \(.*\)/, "")); } });
    var fc = faithCompat(P.id, p.id_ || {});
    if (fc !== null) { n++; m += fc; if (fc >= .99) hits.push("Faith"); }
    return { score: n ? m / n : .5, hits: hits };
  }
  // How well two people's faith fits what each said about faith in a partner (0–1), or null if neither said
  function faithCompat(a, b) {
    var wa = asList(a.faithPartner), wb = asList(b.faithPartner);
    if (!wa.length && !wb.length) return null;
    function ok(w, mine, theirs) {
      if (!w.length || w.indexOf("No preference") > -1 || w.indexOf("Open-minded about faith") > -1) return 1;
      var rm = mine.religion, rt = theirs.religion;
      if (!rt || rt === PNTS) return .5;
      if (w.indexOf("Same denomination as me") > -1 && rm === rt && mine.denomination && mine.denomination === theirs.denomination) return 1;
      if (w.indexOf("Same faith as me") > -1 && rm === rt) return 1;
      if (w.indexOf("Open to a non-religious partner") > -1 && NONRELIGIOUS.indexOf(rt) > -1) return 1;
      if (w.indexOf("Equal time: we'd share both faiths") > -1 && NONRELIGIOUS.indexOf(rt) < 0) return .85;
      if (w.indexOf("Same denomination as me") > -1 && rm === rt) return .6;
      return 0;
    }
    return (ok(wa, a, b) + ok(wb, b, a)) / 2;
  }
  function showVal(v) { return asList(v).filter(function (x) { return x && x !== PNTS; }).join(", "); }
  function factsLine(p) {
    var o = p.id_ || {}, bits = [o.height, o.status, showVal(o.style) !== "Monogamous" ? "" : "", o.kids, o.education, o.jobTitle && o.industry ? o.jobTitle : "", o.drink === "Never" ? "Doesn't drink" : ""].filter(Boolean);
    return '<span class="facts-sm">' + esc(bits.slice(0, 5).join(" · ")) + "</span>";
  }
  function myFacts() {
    var o = P.id || {}, vis = function (k) { var f = IDX[k]; return P.vis[k] === undefined ? !f[5] : P.vis[k]; };
    return ["height", "status", "kids", "education", "jobTitle", "community"].filter(function (k) { return vis(k) && showVal(o[k]); }).map(function (k) { return showVal(o[k]); }).slice(0, 5).join(" · ");
  }

  function renderIdentity() {
    // tab bar: Basics · About me · Looking for
    var form = $("#faceForm"), kids = Array.prototype.slice.call(form.children);
    var anchor = $("#jokerStatus");
    kids.forEach(function (el) { if (!el.querySelector("#faceMeter") && !el.querySelector('button[type="submit"]')) el.setAttribute("data-tab", "basics"); });
    $("#showChips") && $("#showChips").closest(".field").remove();
    var bar = document.createElement("div"); bar.className = "ftabs"; bar.setAttribute("role", "tablist");
    bar.innerHTML = [["basics", "Basics"], ["about", "About me"], ["look", "Looking for"]].map(function (t, i) { return '<button type="button" role="tab" class="chip" data-ft="' + t[0] + '" aria-selected="' + (i === 0) + '" aria-pressed="' + (i === 0) + '">' + t[1] + "</button>"; }).join("");
    form.insertBefore(bar, form.firstChild);
    var about = document.createElement("div"); about.setAttribute("data-tab", "about"); about.className = "form-grid"; about.hidden = true;
    var look = document.createElement("div"); look.setAttribute("data-tab", "look"); look.className = "form-grid"; look.hidden = true;
    form.insertBefore(look, anchor); form.insertBefore(about, look);
    about.innerHTML = '<p class="hint">Every question is optional and has <b>Prefer not to say</b>. Use the eye to choose what shows on your card: <b>Face Up</b> is shown, <b>Face Down</b> is private but still helps match you.</p>' + groupHTML(false);
    look.innerHTML = '<p class="hint">Pick what you want, or leave <b>Open to anyone</b>. Turn on <b>Dealbreaker</b> and only people who match will make your 52. Without it, a match simply ranks them higher. Someone who chose "Prefer not to say" won\'t pass a dealbreaker.</p>' + groupHTML(true);
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-ft]"); if (!b) return; var t = b.getAttribute("data-ft");
      $$("[data-ft]", bar).forEach(function (x) { var on = x === b; x.setAttribute("aria-selected", String(on)); x.setAttribute("aria-pressed", String(on)); });
      $$("[data-tab]", form).forEach(function (el) { el.hidden = el.getAttribute("data-tab") !== t; });
    });
    about.addEventListener("change", onIdChange); about.addEventListener("input", onIdChange); about.addEventListener("click", onIdClick);
    look.addEventListener("click", onPrefClick); look.addEventListener("change", onPrefChange);
    syncIdentityUI();
  }
  function groupHTML(pref) {
    var groups = [], html = "";
    IDF.forEach(function (f) { if (pref && !f[4]) return; if (groups.indexOf(f[6]) < 0) groups.push(f[6]); });
    groups.forEach(function (g) {
      html += '<fieldset class="idgroup"><legend>' + (pref && g === "Who I am" ? "Who" : g) + "</legend>";
      IDF.forEach(function (f) { if (f[6] !== g || (pref && !f[4])) return; html += pref ? prefField(f) : idField(f); });
      html += "</fieldset>";
    });
    return html;
  }
  function eye(k) { return '<button type="button" class="eye" data-eye="' + k + '" aria-pressed="false">Face Down</button>'; }
  function idField(f) {
    var k = f[0], id = "id_" + k, head = '<div class="idhead"><label for="' + id + '">' + f[1] + "</label>" + eye(k) + "</div>";
    if (f[2] === "one") return '<div class="field idf" data-k="' + k + '">' + head + '<select id="' + id + '" data-k="' + k + '"><option value="">Choose…</option><option>' + PNTS + "</option>" + f[3].map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("") + "</select></div>";
    if (f[2] === "many") return '<div class="field idf" data-k="' + k + '"><div class="idhead"><span class="lbl" id="' + id + '">' + f[1] + "</span>" + eye(k) + '</div><div class="chips" role="group" aria-labelledby="' + id + '">' + f[3].concat([PNTS]).map(function (o) { return '<button type="button" class="chip sm" data-k="' + k + '" data-v="' + esc(o) + '" aria-pressed="false">' + esc(o) + "</button>"; }).join("") + "</div></div>";
    if (f[2] === "denom") return '<div class="field idf" data-k="' + k + '">' + head + '<select id="' + id + '" data-k="' + k + '"></select></div>';
    if (f[2] === "text") return '<div class="field idf" data-k="' + k + '">' + head + '<input type="text" id="' + id + '" data-k="' + k + '" maxlength="60" placeholder="Nurse, electrician, small-business owner…"><button type="button" class="chip sm pnts" data-k="' + k + '" data-v="' + PNTS + '" aria-pressed="false">' + PNTS + "</button></div>";
    if (f[2] === "city") return '<div class="field idf" data-k="' + k + '">' + head + '<div class="ac"><input type="text" id="' + id + '" data-k="' + k + '" maxlength="60" placeholder="Start typing: Mobile, AL" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="acList"><ul class="aclist" id="acList" role="listbox" hidden></ul></div><div class="chips"><button type="button" class="chip sm" data-k="' + k + '" data-v="Born outside the US" aria-pressed="false">Born outside the US</button><button type="button" class="chip sm pnts" data-k="' + k + '" data-v="' + PNTS + '" aria-pressed="false">' + PNTS + "</button></div></div>";
    return "";
  }
  function prefField(f) {
    var k = f[0], opts = prefOpts(f);
    return '<div class="field pf" data-k="' + k + '"><div class="idhead"><span class="lbl">' + f[1].replace(" (check all that apply)", "") + '</span><label class="deal"><input type="checkbox" data-deal="' + k + '"> Dealbreaker</label></div><div class="chips" role="group" aria-label="' + esc(f[1]) + ' preference">' +
      [OPEN].concat(opts).map(function (o) { return '<button type="button" class="chip sm" data-pk="' + k + '" data-v="' + esc(o) + '" aria-pressed="false">' + esc(o) + "</button>"; }).join("") + "</div></div>";
  }
  function syncIdentityUI() {
    IDF.forEach(function (f) {
      var k = f[0], v = P.id[k], box = $('.idf[data-k="' + k + '"]');
      if (box) {
        if (f[2] === "one") $("select", box).value = v || "";
        if (f[2] === "denom") {
          var list = DENOMS[P.id.religion] || [], sel = $("select", box);
          sel.innerHTML = list.length ? '<option value="">Choose…</option><option>' + PNTS + "</option>" + list.map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("") : '<option value="">' + (P.id.religion ? "No denominations for this faith" : "Pick a faith first") + "</option>";
          sel.disabled = !list.length; if (list.length && (v === PNTS || list.indexOf(v) > -1)) sel.value = v; else if (!list.length) sel.value = "";
        }
        if (f[2] === "text" || f[2] === "city") { var inp = $("input[type=text]", box); inp.value = v && v !== PNTS && v !== "Born outside the US" ? v : ""; }
        $$("[data-v]", box).forEach(function (c) { c.setAttribute("aria-pressed", String(asList(v).indexOf(c.getAttribute("data-v")) > -1)); });
        var e = $("[data-eye]", box), up = P.vis[k] === undefined ? !f[5] : P.vis[k]; e.setAttribute("aria-pressed", String(up)); e.textContent = up ? "Face Up" : "Face Down";
      }
      var pb = $('.pf[data-k="' + k + '"]');
      if (pb) {
        var pr = P.prefs[k] || { sel: [OPEN], deal: false }, sel = pr.sel && pr.sel.length ? pr.sel : [OPEN];
        $$("[data-pk]", pb).forEach(function (c) { c.setAttribute("aria-pressed", String(sel.indexOf(c.getAttribute("data-v")) > -1)); });
        $("[data-deal]", pb).checked = !!pr.deal; $("[data-deal]", pb).disabled = sel.indexOf(OPEN) > -1;
      }
    });
  }
  function onIdChange(e) {
    var t = e.target, k = t.getAttribute("data-k"); if (!k) return;
    if (t.tagName === "SELECT" || (t.tagName === "INPUT" && (IDX[k][2] === "text" || IDX[k][2] === "city"))) {
      P.id[k] = t.value.trim(); if (IDX[k][2] === "city") cityAC(t);
      if (k === "religion") P.id.denomination = "";
      syncIdentityUI(); onChange();
    }
  }
  function onIdClick(e) {
    var ey = e.target.closest("[data-eye]");
    if (ey) { var k0 = ey.getAttribute("data-eye"), f0 = IDX[k0], cur = P.vis[k0] === undefined ? !f0[5] : P.vis[k0]; P.vis[k0] = !cur; syncIdentityUI(); onChange(); return; }
    var li = e.target.closest(".aclist li");
    if (li) { var inp = li.closest(".ac").querySelector("input"); inp.value = li.textContent; P.id[inp.getAttribute("data-k")] = li.textContent; li.parentElement.hidden = true; inp.setAttribute("aria-expanded", "false"); syncIdentityUI(); onChange(); return; }
    var c = e.target.closest("[data-v][data-k]"); if (!c) return;
    var k = c.getAttribute("data-k"), v = c.getAttribute("data-v"), f = IDX[k];
    if (f[2] === "many") {
      var list = asList(P.id[k]).filter(function (x) { return x !== PNTS; });
      if (v === PNTS) list = asList(P.id[k]).indexOf(PNTS) > -1 ? [] : [PNTS];
      else if (k === "faithPartner" && v === "No preference") list = asList(P.id[k]).indexOf(v) > -1 ? [] : [v];
      else { var i = list.indexOf(v); if (i > -1) list.splice(i, 1); else { if (k === "faithPartner") list = list.filter(function (x) { return x !== "No preference"; }); list.push(v); } }
      P.id[k] = list;
    } else P.id[k] = P.id[k] === v ? "" : v;
    syncIdentityUI(); onChange();
  }
  var CITIES = null;
  function cityAC(inp) {
    var ul = inp.parentElement.querySelector(".aclist"), q = inp.value.trim().toLowerCase();
    if (!zipReady || q.length < 2) { ul.hidden = true; inp.setAttribute("aria-expanded", "false"); return; }
    if (!CITIES) { var seen = {}; CITIES = []; ZLIST.forEach(function (z) { var n = z.city + ", " + z.st; if (!seen[n]) { seen[n] = 1; CITIES.push(n); } }); CITIES.sort(); }
    var hits = []; for (var i = 0; i < CITIES.length && hits.length < 8; i++) if (CITIES[i].toLowerCase().indexOf(q) === 0) hits.push(CITIES[i]);
    ul.innerHTML = hits.map(function (h) { return '<li role="option" tabindex="-1">' + esc(h) + "</li>"; }).join("");
    ul.hidden = !hits.length; inp.setAttribute("aria-expanded", String(!!hits.length));
  }
  function onPrefClick(e) {
    var c = e.target.closest("[data-pk]"); if (!c) return;
    var k = c.getAttribute("data-pk"), v = c.getAttribute("data-v"), pr = P.prefs[k] || { sel: [OPEN], deal: false };
    var sel = (pr.sel || []).filter(function (x) { return x !== OPEN; });
    if (v === OPEN) { sel = []; pr.deal = false; } else { var i = sel.indexOf(v); if (i > -1) sel.splice(i, 1); else sel.push(v); }
    pr.sel = sel.length ? sel : [OPEN]; if (!sel.length) pr.deal = false; P.prefs[k] = pr;
    syncIdentityUI(); onChange();
  }
  function onPrefChange(e) {
    var k = e.target.getAttribute("data-deal"); if (!k) return;
    var pr = P.prefs[k] || { sel: [OPEN] }; pr.deal = e.target.checked; P.prefs[k] = pr; syncIdentityUI(); onChange();
  }

  /* =====================================================================
     PAIRS → PLAY HAND → WIN / PUSH / LOSS
     ===================================================================== */
  var HOUR = 3600e3, DAY = 24 * HOUR, JOKER_WINDOW = 12 * HOUR, PUSH_LIMIT = 24 * HOUR, JOKER_DATES = 3;
  var STAGE_LABEL = { paired: "Pair", inplay: "In play", push: "Push", win: "Win", loss: "Loss" };
  function now() { return Date.now() + (G.clock || 0); }
  function handOf(id) { G.hands = G.hands || {}; if (!G.hands[id]) G.hands[id] = { stage: "paired", dates: 0 }; return G.hands[id]; }
  function settleHands() {
    Object.keys(G.hands || {}).forEach(function (id) {
      var h = G.hands[id];
      if (h.stage === "push" && now() - h.pushAt >= PUSH_LIMIT) { h.stage = "loss"; h.result = "auto"; h.endAt = h.pushAt + PUSH_LIMIT; }
    });
  }
  function myRankFor(p) { var f = p.fit || 60, i = Math.max(0, Math.min(12, Math.round((92 - f) / 6) + (hash(P.handle + p.id) % 3) - 1)); return RANKS[i]; }
  function fmtLeft(ms) { if (ms <= 0) return "closed"; var h = Math.floor(ms / HOUR), m = Math.floor(ms % HOUR / 60000); return h + "h " + m + "m left"; }
  function fmtDate(t) { return new Date(t).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }); }
  function pairModal(p, quiet) {
    var mySuit = P.mySuit || P.trumps[0], theirRank = p.rank || (BY[p.id] && BY[p.id].rank) || "A", myRank = myRankFor(p);
    var aces = theirRank === "A" && myRank === "A";
    if (!quiet) { jackpot(aces ? 7000 : 5000); burst(innerWidth / 2, innerHeight / 3, aces ? 160 : 110); }
    var me = P.photo ? '<div class="avatar" style="width:96px;margin:0;background:url(' + P.photo + ') center/cover"></div>' : '<div class="avatar" style="width:96px;margin:0;background:var(--red)">' + esc(initials(P.name || "You")) + "</div>";
    var nm = esc(p.name.split(" ")[0]);
    var openers = { diamond: "Okay, I already have a place in mind. You free Thursday?", club: "A Pair! I knew it. Quick: tacos or trivia?", heart: "Hi! I really liked your card. How's your week going?", spade: "Hi. I read your whole card twice. What are you reading lately?" };
    var m = modal('<p class="pairtitle">' + (aces ? "Pair of Aces!" : "It's a Pair!") + '</p><div class="pairhead">' + me + '<span style="font:800 2rem var(--display);color:var(--gold-hi)">+</span>' + avatar(p, "width:96px;margin:0;") + "</div>" +
      '<div class="ranks"><span>You hold ' + nm + " as <b class=\"" + (SUIT[p.suit].red ? "r" : "k") + '">' + theirRank + SUIT[p.suit].sym + "</b></span><span>" + nm + ' holds you as <b class="' + (SUIT[mySuit].red ? "r" : "k") + '">' + myRank + SUIT[mySuit].sym + "</b></span></div>" +
      '<p class="jm-line">' + nm + "'s " + jmeter(p, true) + "</p>" +
      '<div class="hand-box" id="handBox"></div>' +
      '<details class="sidetable"><summary>Side Table chat</summary><div class="chat" id="chat"><div class="msg them">' + esc(openers[p.suit]) + '</div></div><p class="hint">Sample reply from a fictional demo profile.</p>' +
      '<form id="chatForm" style="display:flex;gap:8px;margin-top:10px"><label class="sr" for="chatIn">Message</label><input type="text" id="chatIn" maxlength="300" placeholder="Say hi…" autocomplete="off"><button class="btn felt sm" type="submit">Send</button></form></details>' +
      '<div class="democlock"><span class="hint">Demo clock (to try the time rules):</span><button type="button" class="chip sm" data-clock="1">+1 hour</button><button type="button" class="chip sm" data-clock="12">+12 hours</button><button type="button" class="chip sm" data-clock="24">+24 hours</button><button type="button" class="chip sm" data-clock="0">Reset</button></div>', { focus: "#handBox button, .x" });
    var replied = false;
    $("#chatForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var v = $("#chatIn", m).value.trim(); if (!v) return;
      $("#chat", m).insertAdjacentHTML("beforeend", '<div class="msg me">' + esc(v) + "</div>"); $("#chatIn", m).value = "";
      if (!replied) { replied = true; setTimeout(function () { var c = $("#chat", m); if (c) c.insertAdjacentHTML("beforeend", '<div class="msg them">Ha, love that. See you at the table.</div>'); }, 900); }
    });
    $(".democlock", m).addEventListener("click", function (e) {
      var b = e.target.closest("[data-clock]"); if (!b) return; var hrs = +b.getAttribute("data-clock");
      G.clock = hrs ? (G.clock || 0) + hrs * HOUR : 0; saveG(); settleHands(); renderHand(m, p); renderPairs();
      toast(hrs ? "Demo clock moved ahead " + (hrs >= 24 ? hrs / 24 + " days" : hrs + " hours") + "." : "Demo clock reset to now.");
    });
    renderHand(m, p);
    clearInterval(window.__handTick); window.__handTick = setInterval(function () { if (!$("#modal")) { clearInterval(window.__handTick); return; } settleHands(); var c = $("#jokerLeft", m); if (c) renderHand(m, p); }, 30000);
  }
  function renderHand(m, p) {
    var box = $("#handBox", m); if (!box) return; var h = handOf(p.id), nm = esc(p.name.split(" ")[0]);
    var jokerDate = (h.dates || 1) <= JOKER_DATES;
    var jokerOpen = jokerDate && h.playAt && now() - h.playAt < JOKER_WINDOW && h.result !== "auto";
    var safety = '<p class="hint">Felt unsafe, harassed or threatened? That\'s never just a Loss. <button type="button" class="linkish" data-safety>Report a safety concern</button>. In an emergency, call 911.</p>';
    var html = "";
    if (h.stage === "paired") {
      html = '<h3>' + (h.dates ? "Date #" + (h.dates + 1) + ": check in when you meet" : "Meeting " + nm + "?") + '</h3><p class="hint">When you\'re together in person, you both tap <b>Check in</b>. SuiteFace confirms you\'re at the same table, and you both get the <b>Play Hand</b> alert.</p>' +
        '<div class="row"><button class="btn gold" type="button" data-checkin>Check in: we\'re together</button><button class="btn ghost sm" type="button" data-friend>Tell a friend where I\'ll be</button></div>' +
        '<p class="hint">In the live app, check-in uses both phones\' location for that moment only (within about 200 feet) or a 4-digit Table Code you swap in person. Location is never stored or shown.</p>';
    } else if (h.stage === "inplay") {
      html = '<h3 class="inplay">Hand in play with ' + nm + '</h3><p class="hint">Played at ' + fmtDate(h.playAt) + '. When the date ends, call it:</p>' +
        '<div class="outcomes"><button class="oc win" type="button" data-oc="win"><b>Win</b><span>Second date</span></button><button class="oc push" type="button" data-oc="push"><b>Push</b><span>Unsure, waiting on a response</span></button><button class="oc loss" type="button" data-oc="loss"><b>Loss</b><span>Not a match</span></button></div>' +
        '<p class="hint" id="jokerLeft">' + (jokerDate ? "Date #" + h.dates + " of 3 where a Joker is possible. Joker window: " + fmtLeft(h.playAt + JOKER_WINDOW - now()) + ". After 12 hours from Play Hand, a Loss can only burn the card." : "Date #" + h.dates + ": Jokers are only possible on your first three dates together. A Loss now burns the card; the Joker Maker Lobby is the only other way.") + "</p>";
    } else if (h.stage === "loss-choose") {
      html = '<h3>Loss. What happens to ' + nm + '\'s card?</h3><div class="outcomes two"><button class="oc" type="button" data-loss="burn"><b>Burn the card</b><span>Gone from your deck. Private.</span></button>' +
        '<button class="oc joker" type="button" data-loss="joker"' + (jokerOpen ? "" : " disabled") + '><b>Make a Joker</b><span>' + (jokerOpen ? "A disaster date. " + fmtLeft(h.playAt + JOKER_WINDOW - now()) : (jokerDate ? "Closed: Jokers can only be made within 12 hours of Play Hand" : "Closed: Jokers are only possible on your first three dates")) + "</span></button></div>" +
        '<button class="btn ghost sm" type="button" data-back>Back</button>';
    } else if (h.stage === "push") {
      var dl = h.pushAt + PUSH_LIMIT;
      html = '<h3>Push: waiting on ' + nm + '</h3><p class="hint">Marked Push at ' + fmtDate(h.pushAt) + ". A Win needs both of you to say Win. If that doesn't happen by <b>" + fmtDate(dl) + "</b> (24 hours), this hand becomes an automatic <b>Loss</b>, the card burns, and no Joker can be made.</p>" +
        '<div class="outcomes two"><button class="oc win" type="button" data-oc="win"><b>Win</b><span>They said yes to a second date</span></button><button class="oc loss" type="button" data-oc="loss"><b>Loss</b><span>Not a match</span></button></div>' +
        '<p class="hint" id="jokerLeft">Joker window: ' + (jokerOpen ? fmtLeft(h.playAt + JOKER_WINDOW - now()) : "closed") + ".</p>";
    } else if (h.stage === "win") {
      html = '<h3 class="win-t">Win! Second date with ' + nm + '</h3><p class="hint">Keep the Pair going. Check in again when you meet so the next hand counts.</p><button class="btn gold" type="button" data-again>Check in for date #' + (h.dates + 1) + "</button>";
    } else if (h.stage === "loss") {
      html = '<h3>Loss</h3><p class="hint">' + (h.result === "joker" ? nm + " is now a <b>Joker</b> in your deck and won't be dealt to you again. If ten different people make the same call within 180 days, their card shows JOKER for 45 days." :
        h.result === "auto" ? "No Win from both of you within 24 hours of the Push, so this became an automatic Loss on " + fmtDate(h.endAt) + ". The card is burned. No Joker can be made." : nm + "'s card is burned. It won't be dealt to you again.") + "</p>";
    }
    box.innerHTML = html + safety;
    box.onclick = function (e) {
      var t = e.target;
      if (t.closest("[data-safety]")) { closeModal(); location.hash = "join"; toast("In an emergency, call 911. In the live app, safety reports go straight to our Judges."); return; }
      if (t.closest("[data-friend]")) { var txt = "I'm meeting " + p.name.split(" ")[0] + " from SuiteFace today. I'll check in with you after."; copy(txt, t.closest("[data-friend]")); return; }
      if (t.closest("[data-checkin]") || t.closest("[data-again]")) {
        if (t.closest("[data-again]")) { h.stage = "paired"; saveG(); renderHand(m, p); return; }
        var b = t.closest("[data-checkin]"); b.disabled = true; b.textContent = "Waiting for " + p.name.split(" ")[0] + " to check in…";
        setTimeout(function () { h.stage = "inplay"; h.playAt = now(); h.dates = (h.dates || 0) + 1; h.result = ""; saveG(); renderPairs(); playHandAlert(p, function () { renderHand(m, p); }); }, REDUCED ? 200 : 1400);
        return;
      }
      var oc = t.closest("[data-oc]");
      if (oc) {
        var v = oc.getAttribute("data-oc");
        if (v === "win") { h.stage = "win"; toast("Win! Second date on the table.", p.suit); jackpot(2500); burstAt(oc, 50); }
        if (v === "push") { h.stage = "push"; h.pushAt = now(); toast("Push. If there's no answer in 7 days, it becomes a Loss."); }
        if (v === "loss") { h.stage = "loss-choose"; }
        saveG(); renderPairs(); renderHand(m, p); return;
      }
      if (t.closest("[data-back]")) { h.stage = h.pushAt ? "push" : "inplay"; saveG(); renderHand(m, p); return; }
      var ls = t.closest("[data-loss]");
      if (ls && !ls.disabled) {
        var kind = ls.getAttribute("data-loss");
        if (kind === "joker" && !(h.playAt && now() - h.playAt < JOKER_WINDOW)) { toast("The 12-hour Joker window has closed. You can still burn the card."); renderHand(m, p); return; }
        h.stage = "loss"; h.result = kind; h.endAt = now();
        if (G.jokered.indexOf(p.id) < 0) G.jokered.push(p.id); deckDirty = true;
        toast(kind === "joker" ? p.name.split(" ")[0] + " is a Joker in your deck." : p.name.split(" ")[0] + "'s card is burned.");
        saveG(); renderPairs(); renderHand(m, p);
      }
    };
  }
  function playHandAlert(p, done) {
    jackpot(6000); burst(innerWidth / 2, innerHeight / 2, 140);
    var o = document.createElement("div"); o.className = "playhand"; o.setAttribute("role", "alertdialog"); o.setAttribute("aria-label", "Play Hand");
    o.innerHTML = '<div class="ph-inner"><p class="ph-title">Play Hand</p><p class="ph-sub">You and ' + esc(p.name.split(" ")[0]) + " are at the table. You both got this alert.</p><p class=\"hint\">Have fun, stay safe, and call the hand when the date's over.</p><button class=\"btn gold\" type=\"button\">Let's play</button></div>";
    document.body.appendChild(o); var b = o.querySelector("button"); b.focus();
    b.addEventListener("click", function () { o.remove(); if (done) done(); });
  }


  /* =====================================================================
     LOCATION: current location, ZIP or city → one ZIP code (nothing more precise is kept)
     ===================================================================== */
  var cityBest = null;
  function buildCityIndex() {
    if (cityBest) return; cityBest = {};
    ZLIST.forEach(function (z) { var n = (z.city + ", " + z.st).toLowerCase(); if (!cityBest[n] || z.pop > cityBest[n].pop) cityBest[n] = z; });
  }
  function resolvePlace(text) {
    var t = (text || "").trim(); if (!t) return null;
    if (/^\d{5}$/.test(t)) return ZIPS[t] || null;
    buildCityIndex(); var k = t.toLowerCase().replace(/\s+/g, " ");
    if (cityBest[k]) return cityBest[k];
    var keys = Object.keys(cityBest).filter(function (c) { return c.indexOf(k) === 0; });
    if (keys.length === 1) return cityBest[keys[0]];
    var exact = keys.filter(function (c) { return c.split(",")[0] === k; }); // "mobile" → best-known Mobile
    if (exact.length) return exact.map(function (c) { return cityBest[c]; }).sort(function (a, b) { return b.pop - a.pop; })[0];
    return keys.length ? cityBest[keys.sort(function (a, b) { return cityBest[b].pop - cityBest[a].pop; })[0]] : null;
  }
  function nearestZip(lat, lon) {
    var best = null, bd = 1e9, c = Math.cos(lat * Math.PI / 180);
    ZLIST.forEach(function (z) { var dx = (z.lon - lon) * c, dy = z.lat - lat, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = z; } });
    return best;
  }
  function setLocation(z, how) {
    if (!z) return;
    P.zip = z.zip; F.zip.value = z.zip; $("#fCityLoc").value = ""; saveP();
    placedFor = ""; placePool(); deckDirty = true; buildDeck(); renderTable(false); mapT0 = performance.now(); renderMap(); zipHint(); updateMeter(); validate(false);
    $("#fZipErr").textContent = "";
    toast((how || "Location") + " set to " + z.city + ", " + z.st + " " + z.zip + ". Your 52 were re-dealt.");
  }
  function geolocate(btn) {
    if (!zipReady) { toast("ZIP codes are still loading. Try again in a moment."); return; }
    if (!navigator.geolocation) { toast("This browser can't share location. Enter your ZIP or city instead."); return; }
    var old = btn.textContent; btn.disabled = true; btn.textContent = "Finding you…";
    navigator.geolocation.getCurrentPosition(function (pos) {
      btn.disabled = false; btn.textContent = old;
      var z = nearestZip(pos.coords.latitude, pos.coords.longitude);
      if (z) setLocation(z, "Current location"); else toast("You look to be outside the US. Enter a US ZIP or city instead.");
    }, function (err) {
      btn.disabled = false; btn.textContent = old;
      toast(err && err.code === 1 ? "Location is blocked for this site. Allow it in your browser, or enter your ZIP or city." : "Couldn't get your location. Enter your ZIP or city instead.");
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 });
  }
  function wireCityInput(inp, onPick) {
    var ul = inp.parentElement.querySelector(".aclist");
    inp.addEventListener("input", function () { if (/^\d/.test(inp.value)) { ul.hidden = true; return; } cityAC(inp); });
    inp.addEventListener("keydown", function (e) { if (e.key === "Escape") { ul.hidden = true; inp.setAttribute("aria-expanded", "false"); } });
    ul.addEventListener("mousedown", function (e) { var li = e.target.closest("li"); if (!li) return; e.preventDefault(); inp.value = li.textContent; ul.hidden = true; inp.setAttribute("aria-expanded", "false"); onPick(li.textContent); });
    inp.addEventListener("blur", function () { setTimeout(function () { ul.hidden = true; }, 150); });
  }
  wireCityInput($("#fCityLoc"), function (txt) { setLocation(resolvePlace(txt), "Location"); });
  $("#fCityLoc").addEventListener("change", function () { var z = resolvePlace(this.value); if (z) setLocation(z, "Location"); else if (this.value.trim()) $("#fZipErr").textContent = "We couldn't find that city. Try \"City, ST\", like Mobile, AL."; });
  $("#fZip").addEventListener("change", function () { if (/^\d{5}$/.test(this.value) && ZIPS[this.value]) setLocation(ZIPS[this.value], "ZIP"); });
  wireCityInput($("#locIn"), function (txt) { setLocation(resolvePlace(txt), "Map"); });
  $("#locForm").addEventListener("submit", function (e) {
    e.preventDefault(); var v = $("#locIn").value, z = resolvePlace(v);
    if (z) { setLocation(z, "Map"); $("#locIn").value = ""; } else toast(v.trim() ? "We couldn't find \"" + v.trim() + "\". Try a 5-digit ZIP or \"City, ST\"." : "Type a ZIP code or a city.");
  });
  $("#geoBtn").addEventListener("click", function () { geolocate(this); });
  $("#geoBtn2").addEventListener("click", function () { geolocate(this); });


  /* =====================================================================
     ACCESS: Guest · Player · Dealer (staff) · Pit Boss (IT) · Owner
     In this static preview the role is a demo switch. In the live app the
     login decides the role and the server enforces it.
     ===================================================================== */
  var ROLE_INFO = {
    guest: ["Guest visitor", "Sees the demo table, how it plays, the quiz and membership. Everything else needs a Buy-In."],
    player: ["Player", "A paid member: My Face, your 52, the Table Map, Pairs, Play Hand and invites."],
    dealer: ["Dealer", "SuiteFace staff: safety reports, Joker reviews, appeals and pauses. Also sees the player view."],
    pitboss: ["Pit Boss", "IT troubleshooting: live checks for forms, payments, data, location and errors."],
    owner: ["Owner", "Everything: player view, every console and the house numbers."]
  };
  var ROLE = S.get("role", "guest"); if (!ROLE_INFO[ROLE]) ROLE = "guest";
  function allowed(need) {
    if (!need) return true;
    if (need === "member") return ROLE !== "guest";
    if (ROLE === "owner") return true;
    return ROLE === need;
  }
  function setRole(r) { ROLE = r; S.set("role", r); applyRole(); }
  function applyRole() {
    $("#roleName").textContent = ROLE_INFO[ROLE][0];
    document.documentElement.setAttribute("data-role", ROLE);
    $("#loginBtn").textContent = ROLE === "guest" ? "Log in" : "Log out";
    $$("[data-only]").forEach(function (el) { el.hidden = ROLE !== el.getAttribute("data-only"); });
    $$("a[data-need]").forEach(function (a) { var n = a.getAttribute("data-need"); a.hidden = n !== "member" ? !allowed(n) : false; });
    $$("section[data-need]").forEach(function (sec) {
      var need = sec.getAttribute("data-need"), ok = allowed(need), wrap = sec.querySelector(":scope > .wrap");
      if (need !== "member") { sec.hidden = !ok; if (ok) renderConsole(sec.id); return; }
      sec.hidden = false; if (wrap) wrap.hidden = !ok;
      var lock = sec.querySelector(":scope > .lockpanel");
      if (!ok && !lock) {
        lock = document.createElement("div"); lock.className = "lockpanel wrap";
        var t = { face: "Build your Face", table: "Your 52", map: "The Table Map", invite: "Invite friends to the table" }[sec.id] || "Members only";
        lock.innerHTML = '<div class="lockcard"><span class="lockicon" aria-hidden="true">' + pip("spade") + '</span><div><p class="eyebrow">Members only</p><h3>' + t + '</h3><p class="hint">Buy in to play: $21.00 once, then $2.10 a month. Already a member? Log in.</p><div class="row"><a class="btn gold sm" href="#membership">Buy in · $21</a><button class="btn ghost sm" type="button" data-login>Log in</button><a class="btn ghost sm" href="#demo">Watch the demo</a></div></div></div>';
        sec.appendChild(lock);
      }
      if (lock) lock.hidden = ok;
      if (ok && sec.id === "map") setTimeout(renderMap, 50);
    });
  }
  $("#roleBtn").addEventListener("click", function () {
    var m = modal('<h3 style="font-size:1.8rem">View the site as…</h3><p class="lede" style="margin:6px 0 14px">Demo switch for this preview. In the live app, your login decides your view, and staff views are protected on the server.</p><div class="roles">' +
      Object.keys(ROLE_INFO).map(function (r) { return '<button type="button" class="rolecard' + (r === ROLE ? " on" : "") + '" data-r="' + r + '"><b>' + ROLE_INFO[r][0] + "</b><span>" + ROLE_INFO[r][1] + "</span></button>"; }).join("") + "</div>");
    $(".roles", m).addEventListener("click", function (e) { var b = e.target.closest("[data-r]"); if (!b) return; setRole(b.getAttribute("data-r")); closeModal(); toast("Now viewing as " + ROLE_INFO[ROLE][0] + "."); });
  });
  function loginModal() {
    if (ROLE !== "guest") { setRole("guest"); toast("Logged out. You're browsing as a guest."); return; }
    var m = modal('<h3 style="font-size:1.8rem">Log in</h3><form class="form-grid" id="loginForm" novalidate style="margin-top:10px">' +
      '<div class="field"><label for="lgEmail">Email</label><input type="email" id="lgEmail" autocomplete="username" placeholder="you@example.com"></div>' +
      '<div class="field"><label for="lgPass">Password</label><div class="pw"><input type="password" id="lgPass" autocomplete="current-password"><button type="button" class="btn ghost sm" id="lgShow">Show</button></div></div>' +
      '<span class="err" id="lgErr"></span><div class="row"><button class="btn gold" type="submit">Log in</button><button class="btn ghost" type="button" id="lgPasskey">Use a passkey</button></div>' +
      '<p class="hint">New here? <a href="#membership" data-close>Buy in first</a>. Your account is created right after your $21 Buy-In.</p></form>' +
      '<div class="notice pv" id="lgNote" hidden><b>Preview mode.</b> Member accounts open at launch, so no real login happens here. Try a demo view instead:<div class="chips" style="margin-top:10px">' +
      ["player", "dealer", "pitboss", "owner"].map(function (r) { return '<button class="chip sm" type="button" data-demo="' + r + '">Demo: ' + ROLE_INFO[r][0] + "</button>"; }).join("") + "</div></div>", { focus: "#lgEmail" });
    $("#lgShow", m).addEventListener("click", function () { var i = $("#lgPass", m); i.type = i.type === "password" ? "text" : "password"; this.textContent = i.type === "password" ? "Show" : "Hide"; });
    $("#lgPasskey", m).addEventListener("click", function () { $("#lgNote", m).hidden = false; });
    $("#loginForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var em = $("#lgEmail", m).value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) { $("#lgErr", m).textContent = "Enter the email you used for your Buy-In."; return; }
      if (!$("#lgPass", m).value) { $("#lgErr", m).textContent = "Enter your password, or use a passkey."; return; }
      $("#lgErr", m).textContent = ""; $("#lgNote", m).hidden = false;
    });
    $("#lgNote", m).addEventListener("click", function (e) { var b = e.target.closest("[data-demo]"); if (!b) return; setRole(b.getAttribute("data-demo")); closeModal(); toast("Signed in as a demo " + ROLE_INFO[ROLE][0] + "."); });
  }
  $("#loginBtn").addEventListener("click", loginModal);
  document.addEventListener("click", function (e) { if (e.target.closest("[data-login]")) { e.preventDefault(); loginModal(); } });

  /* ---------- demo table (made-up scenarios for guests) ---------- */
  var STORIES = [
    { name: "Pair of Aces", cast: [["Jane", "heart", "A"], ["Joe", "diamond", "A"]], steps: [
      ["The deal", "Jane's Hand is dealt", "Jane trumps Diamonds. Joe lands in her 52 as the Ace of Diamonds, her best fit nearby.", { a: 0, b: 1 }],
      ["The play", "Both play", "Jane plays Joe's card. Joe, across town, holds Jane as his Ace of Hearts and plays hers too.", { a: 1, b: 1 }],
      ["Pair of Aces", "Pair of Aces!", "Two Aces. The lights go wild and the Side Table opens so they can plan a date.", { pair: 1, aces: 1 }],
      ["Check in", "Play Hand", "Saturday, 7:02 pm. They both tap Check in at the restaurant. Both phones flash PLAY HAND.", { play: 1 }],
      ["Call it", "Win", "They both call it a Win: second date. The Pair stays, and they'll check in again next time.", { win: 1 }]] },
    { name: "The Push", cast: [["Maya", "club", "Q"], ["Marcus", "spade", "9"]], steps: [
      ["The pair", "A Pair", "Maya holds Marcus as the 9 of Spades. Marcus holds Maya as the Queen of Clubs. They both play.", { pair: 1 }],
      ["Play Hand", "Coffee date", "They check in at a coffee shop. Play Hand.", { play: 1 }],
      ["Push", "Maya calls Push", "Fun date. Maya asks about a second one and waits for Marcus to answer.", { push: 1 }],
      ["Seven days", "No answer in 7 days", "A week passes with no reply. The hand becomes an automatic Loss. The card burns, and no Joker can be made.", { loss: 1 }]] },
    { name: "Joker window", cast: [["Tasha", "heart", "K"], ["Wes", "diamond", "J"]], steps: [
      ["Play Hand", "Dinner at 7", "Tasha and Wes check in. Play Hand at 7:10 pm.", { play: 1 }],
      ["Loss", "A disaster", "Wes was rude to the server and on his phone all night. At 9:40 pm Tasha calls it a Loss.", { loss: 1 }],
      ["Joker", "Make a Joker", "It's 2.5 hours after Play Hand, inside the 12-hour window, so Tasha makes Wes a Joker in her deck.", { joker: 1 }],
      ["The meter", "Others see 4/10", "Other members holding Wes's card now see Jokers 4/10. Wes never sees his own count.", { meter: 4 }]] },
    { name: "Too late to Joker", cast: [["Luis", "spade", "7"], ["Grace", "club", "5"]], steps: [
      ["Play Hand", "Brunch", "Luis and Grace check in at brunch. Play Hand at 11:00 am.", { play: 1 }],
      ["Next day", "Two days later", "Luis finally calls the hand: Loss.", { loss: 1 }],
      ["Burn only", "Burn the card", "The 12-hour Joker window closed long ago, so he can only burn Grace's card. Burns are private.", { burn: 1 }]] }
  ];
  var dS = 0, dI = 0, dTimer = null;
  function demoCard(c, flags, side) {
    var red = SUIT[c[1]].red, cls = "dcard" + (red ? " red" : "") + (flags.joker && side === 1 ? " jk" : "") + (flags.burn && side === 1 ? " burnt" : "") + ((flags.loss || flags.burn) && side === 1 && !flags.joker ? " dim" : "");
    var face = flags.joker && side === 1 ? '<span class="jhat">' + BRAND.hat + '</span><b>JOKER</b>' : '<span class="ix">' + c[2] + pip(c[1]) + '</span><span class="nm">' + c[0] + '</span><span class="st">' + SUIT[c[1]].sym + " " + SUIT[c[1]].name + "</span>";
    var meter = flags.meter && side === 1 ? '<span class="dmeter">Jokers ' + flags.meter + "/10</span>" : "";
    return '<div class="' + cls + '">' + face + meter + (flags.a && side === 0 ? '<span class="tag">Played</span>' : "") + (flags.b && side === 1 ? '<span class="tag">Played</span>' : "") + "</div>";
  }
  function renderDemo() {
    var st = STORIES[dS], step = st.steps[dI], f = step[3];
    $("#demoTabs").innerHTML = STORIES.map(function (x, i) { return '<button class="chip" role="tab" type="button" data-s="' + i + '" aria-selected="' + (i === dS) + '" aria-pressed="' + (i === dS) + '">' + x.name + "</button>"; }).join("");
    var mid = f.aces ? "PAIR OF ACES" : f.pair ? "PAIR" : f.play ? "PLAY HAND" : f.win ? "WIN" : f.push ? "PUSH" : f.loss || f.burn ? "LOSS" : f.joker ? "LOSS" : "";
    $("#demoCards").innerHTML = demoCard(st.cast[0], f, 0) + '<span class="dmid' + (mid ? " on" : "") + '">' + (mid || "vs") + "</span>" + demoCard(st.cast[1], f, 1);
    $("#demoStep").textContent = "Step " + (dI + 1) + " of " + st.steps.length + " · " + step[0];
    $("#demoHead").textContent = step[1]; $("#demoText").textContent = step[2];
    $("#demoDots").innerHTML = st.steps.map(function (_, i) { return '<i class="' + (i <= dI ? "on" : "") + '"></i>'; }).join("");
    $("#demoBack").disabled = dI === 0; $("#demoNext").textContent = dI === st.steps.length - 1 ? "Next story" : "Next";
    if (f.aces || f.win) jackpot(2200); if (f.play) jackpot(1500);
  }
  function demoNext() { var st = STORIES[dS]; if (dI < st.steps.length - 1) dI++; else { dS = (dS + 1) % STORIES.length; dI = 0; } renderDemo(); }
  $("#demoNext").addEventListener("click", demoNext);
  $("#demoBack").addEventListener("click", function () { if (dI > 0) { dI--; renderDemo(); } });
  $("#demoTabs").addEventListener("click", function (e) { var b = e.target.closest("[data-s]"); if (!b) return; dS = +b.getAttribute("data-s"); dI = 0; renderDemo(); });
  $("#demoPlay").addEventListener("click", function () {
    if (dTimer) { clearInterval(dTimer); dTimer = null; this.textContent = "Autoplay"; return; }
    this.textContent = "Pause"; dTimer = setInterval(demoNext, 3200);
  });

  /* ---------- consoles ---------- */
  var DQ = {
    safety: [["SF-2026-4K2F9A", "Report from a Player after a Play Hand", "Felt unsafe; asked to be removed from his deck", "Urgent"], ["SF-2026-4K3B1C", "Report from a chat", "Repeated messages after being blocked", "High"]],
    jokers: [["Wes T. (demo)", "10 Jokers from 10 different Play Hands in 180 days", "Check for coordinated ratings"], ["Brandon K. (demo)", "10 Jokers; 6 from the same night", "Possible coordinated ratings"]],
    appeals: [["Carla M. (demo)", "Appeals public Joker issued Sep 30", "Says the dates were cancelled, not met"]],
    pauses: [["Dana R. (demo)", 4], ["Kenji S. (demo)", 19], ["Paige L. (demo)", 22]],
    members: [["jordan.plays", "Player", "Active", "Buy-In Oct 2, 2026"], ["maya.spark", "Player", "Paused, day 4", "Buy-In Aug 12, 2026"], ["wes.t", "Player", "Joker review", "Buy-In Jul 3, 2026"]]
  };
  var dealerTab = "safety", rendered = {};
  function renderConsole(id) {
    if (id === "dealer") renderDealer();
    if (id === "pitboss") runDiag();
    if (id === "owner") renderOwner();
  }
  function renderDealer() {
    var tabs = [["safety", "Safety reports", DQ.safety.length], ["jokers", "Joker reviews", DQ.jokers.length], ["appeals", "Appeals", DQ.appeals.length], ["pauses", "Pauses", DQ.pauses.length], ["members", "Members", ""]];
    $("#dealerTabs").innerHTML = tabs.map(function (t) { return '<button class="chip" role="tab" type="button" data-dt="' + t[0] + '" aria-pressed="' + (t[0] === dealerTab) + '" aria-selected="' + (t[0] === dealerTab) + '">' + t[1] + (t[2] !== "" ? ' <span class="count">' + t[2] + "</span>" : "") + "</button>"; }).join("");
    var h = "";
    if (dealerTab === "safety") h = '<p class="hint">Safety reports come first. They never count as Jokers and can never be bought out.</p>' + DQ.safety.map(function (r, i) { return row(r[0] + " · " + r[1], r[2], '<span class="pill ' + (r[3] === "Urgent" ? "bad" : "warn") + '">' + r[3] + '</span><button class="btn red sm" data-act="suspend" data-i="' + i + '">Suspend account</button><button class="btn ghost sm" data-act="contact" data-i="' + i + '">Contact reporter</button>'); }).join("");
    if (dealerTab === "jokers") h = '<p class="hint">A card goes public only after a Dealer confirms it. Look for ratings from the same group, the same night, or meetings that didn\'t really happen.</p>' + DQ.jokers.map(function (r, i) { return row(r[0], r[1] + " · " + r[2], '<button class="btn red sm" data-act="confirm" data-i="' + i + '">Confirm public Joker</button><button class="btn ghost sm" data-act="reject" data-i="' + i + '">Reject</button>'); }).join("");
    if (dealerTab === "appeals") h = DQ.appeals.map(function (r, i) { return row(r[0], r[1] + " · " + r[2], '<button class="btn felt sm" data-act="uphold" data-i="' + i + '">Uphold appeal</button><button class="btn ghost sm" data-act="deny" data-i="' + i + '">Deny</button>'); }).join("");
    if (dealerTab === "pauses") h = '<p class="hint">Pauses last up to 21 days. Past day 21, end the membership; coming back needs a new $21 Buy-In.</p>' + DQ.pauses.map(function (r, i) { var over = r[1] > 21; return row(r[0], "Paused " + r[1] + " days", '<span class="pill ' + (over ? "bad" : r[1] >= 18 ? "warn" : "ok") + '">' + (over ? "Over 21 days" : (21 - r[1]) + " days left") + "</span>" + (over ? '<button class="btn red sm" data-act="end" data-i="' + i + '">End membership</button>' : '<button class="btn ghost sm" data-act="resume" data-i="' + i + '">Resume</button>')); }).join("");
    if (dealerTab === "members") h = '<div class="field"><label for="memQ">Find a member</label><input type="search" id="memQ" placeholder="Calling Card or email"></div><div id="memRows">' + DQ.members.map(function (r) { return row("@" + r[0], r[1] + " · " + r[2] + " · " + r[3], ""); }).join("") + "</div>";
    $("#dealerBody").innerHTML = h || '<p class="hint">Queue is clear.</p>';
    function row(t, sub, acts) { return '<div class="qrow"><div><b>' + esc(t) + '</b><span class="hint">' + esc(sub) + '</span></div><div class="qacts">' + acts + "</div></div>"; }
    var q = $("#memQ"); if (q) q.addEventListener("input", function () { var v = q.value.toLowerCase(); $$("#memRows .qrow").forEach(function (r) { r.hidden = r.textContent.toLowerCase().indexOf(v) < 0; }); });
  }
  $("#dealerTabs").addEventListener("click", function (e) { var b = e.target.closest("[data-dt]"); if (!b) return; dealerTab = b.getAttribute("data-dt"); renderDealer(); });
  $("#dealerBody").addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]"); if (!b) return; var a = b.getAttribute("data-act"), i = +b.getAttribute("data-i");
    var msg = { suspend: "Account suspended pending review (demo).", contact: "Message sent to the reporter (demo).", confirm: "Public Joker confirmed for 180 days. Member notified with appeal rights (demo).", reject: "Joker review rejected. Card stays as is (demo).", uphold: "Appeal upheld. Public Joker removed (demo).", deny: "Appeal denied. Member notified (demo).", end: "Membership ended. Rejoining needs a new $21 Buy-In (demo).", resume: "Membership resumed. $2.10 billing restarts (demo)." }[a];
    var key = { suspend: "safety", contact: "", confirm: "jokers", reject: "jokers", uphold: "appeals", deny: "appeals", end: "pauses", resume: "pauses" }[a];
    if (key) DQ[key].splice(i, 1); toast(msg); renderDealer();
  });
  var ERRS = [];
  window.addEventListener("error", function (e) { ERRS.push(new Date().toLocaleTimeString() + "  " + (e.message || "error") + (e.filename ? "  (" + e.filename.split("/").pop() + ":" + e.lineno + ")" : "")); });
  function runDiag() {
    var storageOk = (function () { try { localStorage.setItem("sf.__t", "1"); localStorage.removeItem("sf.__t"); return true; } catch (e) { return false; } })();
    var checks = [
      ["Website", "Running", "ok", "Build " + (window.SUITEFACE_BUILD || "preview")],
      ["Secure connection (HTTPS)", location.protocol === "https:" ? "Yes" : "No", location.protocol === "https:" ? "ok" : "warn", location.protocol === "https:" ? "Needed for location and payments" : "Location and payments need HTTPS"],
      ["ZIP code data", zipReady ? ZLIST.length.toLocaleString() + " ZIPs loaded" : "Not loaded", zipReady ? "ok" : "bad", CFG.zipDataUrl],
      ["Forms → hello@suiteface.com", CFG.formAccessKey ? "Connected" : "Preview mode", CFG.formAccessKey ? "ok" : "warn", CFG.formAccessKey ? "Web3Forms key present" : "Add formAccessKey in config.js"],
      ["Stripe checkout ($21 + $2.10)", CFG.stripePaymentLink ? "Connected" : "Not connected", CFG.stripePaymentLink ? "ok" : "warn", CFG.stripePaymentLink ? "Payment Link set" : "Add stripePaymentLink in config.js"],
      ["Stripe customer portal", CFG.stripePortalLink ? "Connected" : "Not connected", CFG.stripePortalLink ? "ok" : "warn", "Cancel and card updates"],
      ["Joker buy-out ($2,100)", CFG.stripeJokerBuyoutLink ? "On" : "Off", CFG.stripeJokerBuyoutLink ? "warn" : "ok", "Stays off until counsel approves"],
      ["Browser storage", storageOk ? "Working" : "Blocked", storageOk ? "ok" : "warn", "Profile and deck are saved here in the preview"],
      ["Location", navigator.geolocation ? (window.isSecureContext ? "Available" : "Needs HTTPS") : "Not supported", navigator.geolocation && window.isSecureContext ? "ok" : "warn", "Use my current location"],
      ["Fonts", document.fonts && document.fonts.check('16px "Figtree"') ? "Loaded" : "Fallback", document.fonts && document.fonts.check('16px "Figtree"') ? "ok" : "warn", "Google Fonts"],
      ["JavaScript errors", ERRS.length ? ERRS.length + " captured" : "None", ERRS.length ? "bad" : "ok", "Since this page loaded"],
      ["Device", innerWidth + "×" + innerHeight, "ok", navigator.userAgent.split(") ")[0].replace("Mozilla/5.0 (", "")]
    ];
    $("#diag").innerHTML = checks.map(function (c) { return '<div class="dtile ' + c[2] + '"><span class="dl">' + esc(c[0]) + '</span><b>' + esc(c[1]) + '</b><span class="hint">' + esc(c[3]) + "</span></div>"; }).join("");
    $("#errLog").textContent = ERRS.length ? ERRS.join("\n") : "No errors captured.";
    runDiag.text = checks.map(function (c) { return c[0] + ": " + c[1] + " (" + c[3] + ")"; }).join("\n") + (ERRS.length ? "\nErrors:\n" + ERRS.join("\n") : "");
  }
  $("#diagRun").addEventListener("click", function () { runDiag(); toast("Checks run."); });
  $("#diagCopy").addEventListener("click", function () { runDiag(); copy("SuiteFace diagnostics " + new Date().toISOString() + "\n" + runDiag.text, this); });
  $("#diagReset").addEventListener("click", function () {
    var m = modal('<h3 style="font-size:1.6rem">Reset demo data?</h3><p class="lede" style="margin:8px 0 14px">This clears the profile, quiz, deck, Pairs and settings saved in this browser. It can\'t be undone.</p><div class="row"><button class="btn red" type="button" id="doReset">Reset this device</button><button class="btn ghost" type="button" data-close>Cancel</button></div>');
    $("#doReset", m).addEventListener("click", function () { try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("sf.") === 0) localStorage.removeItem(k); }); } catch (e) { } S.set("role", ROLE); location.reload(); });
  });
  function renderOwner() {
    var members = 1248, buyins = 312, paused = 38, mrr = members * 2.10, fees = buyins * (21 * .036 + .30) + members * (2.10 * .036 + .30);
    var k = [["Active members", members.toLocaleString(), "+9.4% vs last month"], ["New Buy-Ins (30 days)", buyins, "$" + (buyins * 21).toLocaleString() + " collected"],
      ["Monthly membership", "$" + mrr.toLocaleString(undefined, { minimumFractionDigits: 2 }), members.toLocaleString() + " × $2.10"], ["Est. Stripe fees (30 days)", "$" + fees.toFixed(2), "2.9% + 30¢ + 0.7% Billing"],
      ["Paused", paused, "6 reach day 21 this week"], ["Pairs (30 days)", "2,904", "Pair of Aces: 141"], ["Play Hands (30 days)", "1,377", "Check-in rate 47%"],
      ["Results", "Win 58% · Push 21% · Loss 21%", "Auto-loss after Push: 9%"], ["Public Jokers", "3", "1 appeal open"], ["Joker buy-outs", "Off", "Pending counsel"]];
    $("#kpis").innerHTML = k.map(function (x) { return '<div class="kpi"><span class="dl">' + x[0] + "</span><b>" + x[1] + '</b><span class="hint">' + x[2] + "</span></div>"; }).join("");
    var weeks = [41, 55, 48, 63, 72, 66, 81, 93], mx = Math.max.apply(null, weeks);
    $("#ownerBars").innerHTML = weeks.map(function (v, i) { return '<div class="bar"><b style="height:' + (v / mx * 100) + '%"></b><span>' + v + '</span><small>W' + (i + 1) + "</small></div>"; }).join("");
    $("#ownerRules").innerHTML = '<ul class="incl"><li>Buy-In $21.00 · then $2.10 a month</li><li>Pause up to 21 days; longer ends membership (new $21 Buy-In to return)</li><li>Joker only on your first 3 dates together, within 12 hours of Play Hand</li><li>Win needs both to say Win; a Push not settled as a Win within 24 hours = automatic Loss, no Joker</li><li>10 Jokers in 180 days → Dealer review → public Joker for 180 days</li><li>Members never see their own Joker count</li><li>Joker buy-out $2,100.00 · off until counsel approves</li></ul><p class="hint">All figures on this console are sample data in the preview.</p>';
  }

  /* ---------- boot ---------- */
  renderStyles(); renderQ(); renderInterests(); renderRank(); renderCard(); updateMeter(); syncRanges();
  renderIdentity(); renderDemo(); applyRole(); buildDeck(); renderTable(false); renderSeats(); renderJokerStatus(); zipHint(); loadZips(); renderMap();
  $("#pile").style.setProperty("--hat", "url(\"data:image/svg+xml," + encodeURIComponent(BRAND.hat) + "\")");
})();
