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

  /* ---------- pages: one site, several pages. Each section lives on one page; links to a section on another page go there. ---------- */
  var PAGE = (document.body && document.body.getAttribute("data-page")) || "home";
  var PAGE_FILE = { home: "./", how: "how-it-works.html", suit: "find-your-suit.html", tables: "tables.html", membership: "membership.html", club: "my-table.html", contact: "contact.html" };
  var SEC_PAGE = { how: "how", demo: "how", safety: "how", quiz: "suit", "private-tables": "tables", casinos: "tables", membership: "membership",
    face: "club", table: "club", map: "club", invite: "club", dealer: "club", pitboss: "club", owner: "club", join: "contact", top: "home" };
  function pageFor(id) { return SEC_PAGE[id] || null; }
  function goSection(id, keepSearch) {
    var pg = pageFor(id); if (!pg || pg === PAGE) return false;
    location.href = PAGE_FILE[pg] + (keepSearch ? location.search : "") + (id === "top" ? "" : "#" + id); return true;
  }
  (function () {
    var h = location.hash.replace(/^#/, "");
    if (h && !/=/.test(h) && pageFor(h) && pageFor(h) !== PAGE) { goSection(h, true); return; }
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return;
      var id = a.getAttribute("href").slice(1); if (!id) return;
      if (goSection(id, false)) e.preventDefault();
    }, true);
    $$("[data-pgnav]").forEach(function (a) { if (a.getAttribute("data-pgnav") === PAGE) a.setAttribute("aria-current", "page"); });
  })();

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
    if (!sign || !bulbBox) return;
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
  if (window.ResizeObserver && sign) new ResizeObserver(debounce(layoutBulbs, 100)).observe(sign);
  layoutBulbs();

  // wordmark flips through the four official suit versions
  var wms = $$("#wmStage .wm"), wmi = 0;
  if (!REDUCED && wms.length > 1) setInterval(function () {
    wms[wmi].classList.add("out"); wmi = (wmi + 1) % wms.length; wms[wmi].classList.remove("out");
  }, 3800);

  function debounce(fn, ms) { var h; return function () { clearTimeout(h); h = setTimeout(fn, ms); }; }

  /* ---------- nav ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  menuBtn.addEventListener("click", function () { var o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(o)); });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });

  /* ---------- profile state ---------- */
  var P = Object.assign({ id: {}, prefs: {}, vis: {},
    name: "", handle: "", age: "", dob: "", zip: "", bio: "", photo: "", looking: "serious", show: "everyone",
    ageMin: 25, ageMax: 40, dist: 25, trumps: ORDER.slice(), felt: "#1E7A4C", mySuit: "", interests: []
  }, S.get("profile", {}));
  function saveP() { S.set("profile", P); }

  /* ---------- style cards ---------- */
  function renderStyles() {
    $("#styleCards").innerHTML = ORDER.map(function (s) {
      return '<div class="style-card' + (P.mySuit === s ? " mine" : "") + '"><span style="color:' + suitColor(s) + '">' + pip(s) + "</span><b>" + SUIT[s].sym + " " + SUIT[s].name + "</b><span>" + SUIT[s].line + "</span><span>" + SUIT[s].love + "</span></div>";
    }).join("");
  }

  /* ---------- How it plays: each tile opens a real example ---------- */
  (function () {
    var box = $("#howSteps"); if (!box) return;
    function card(rank, s, name, sub) { return '<div class="bigcard"><div><div style="font:900 2.4rem var(--display);color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + rank + SUIT[s].sym + '</div><div style="font:900 1.4rem var(--display);text-transform:uppercase">' + name + '</div><div class="hint" style="color:#4a4552">' + sub + "</div></div></div>"; }
    function fr(cap, html) { return { cap: cap, html: html }; }
    function ca(r, s, cls) { return '<span class="cc' + (cls ? " " + cls : "") + '" style="color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + r + SUIT[s].sym + "</span>"; }
    var MINI = {
      1: ["Find your suit", [
        fr("Answer 12 quick questions", '<div class="qq">First date, you\'d rather…</div><div class="ops"><i>Book the place</i><i>Trivia night</i><i>Long walk, real talk</i><i>Spot with great reviews</i></div>'),
        fr("Tap the answer that's most you", '<div class="qq">First date, you\'d rather…</div><div class="ops"><i>Book the place</i><i>Trivia night</i><i class="pick">Long walk, real talk <b>♥ +1</b></i><i>Spot with great reviews</i></div><span class="tap"></span>'),
        fr("Your suit is how you show up in love", '<div class="big" style="color:var(--red)">♥</div><div class="qq">You\'re a Heart</div><div class="sm">Caring, steady, all in.</div>')]],
      2: ["Set your Face", [
        fr("Link a social account (or type it in)", '<div class="ops"><i class="pick">Continue with Facebook</i><i>Continue with TikTok</i><i>Continue with Snapchat</i></div><span class="tap"></span>'),
        fr("Your photo and name fill in", '<div class="face"><span class="ph">J</span><div><b>Jordan, 33</b><div class="sm">@jordan.k · Homewood</div></div></div><div class="sm grow">Photo ✓ Name ✓ Interests ✓</div>'),
        fr("Add a few lines. Only your deck sees it", '<div class="face"><span class="ph">J</span><div><b>Jordan, 33</b><div class="sm">"Sunday hikes, loud trivia."</div></div></div><div class="chips"><i>Loyal</i><i>Funny</i><i>Driven</i></div>')]],
      3: ["Call trumps", [
        fr("Four suits, four ways of loving", '<div class="suits"><b style="color:var(--night)">♠</b><b style="color:var(--red)">♦</b><b style="color:var(--red)">♥</b><b style="color:var(--night)">♣</b></div>'),
        fr("Drag the one you click with to first", '<div class="suits"><b class="lift" style="color:var(--red)">♥</b><b style="color:var(--night)">♠</b><b style="color:var(--red)">♦</b><b style="color:var(--night)">♣</b></div><span class="tap"></span>'),
        fr("Your trump leads your Hand", '<div class="suits ranked"><b style="color:var(--red)">♥<em>1</em></b><b style="color:var(--red)">♦<em>2</em></b><b style="color:var(--night)">♣<em>3</em></b><b style="color:var(--night)">♠<em>4</em></b></div><div class="sm">Hearts are dealt first.</div>')]],
      4: ["Get your 52", [
        fr("Set your gates", '<div class="gates"><i>📍 Within 25 mi</i><i>🎂 Ages 30–40</i><i>🚫 Dealbreaker: smoking</i></div>'),
        fr("Only people who pass, both ways", '<div class="fan">' + ca("A", "heart", "deal") + ca("K", "heart", "deal d2") + ca("Q", "heart", "deal d3") + '</div><div class="sm">Best fit = Ace.</div>'),
        fr("52 cards: 13 per suit, Ace to 2", '<div class="grid52">' + ["heart", "diamond", "club", "spade"].map(function (s) { return '<div style="color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + SUIT[s].sym + " A K Q J 10 … 2</div>"; }).join("") + "</div>")]],
      5: ["Burn or Play", [
        fr("Look at a card", '<div class="face solo"><span class="ph">M</span><div><b>Morgan, 31</b><div class="sm">K♦ · Live music · Dogs</div></div></div>'),
        fr("Not for you? Burn it. Gone for good", '<div class="face solo out"><span class="ph">M</span><div><b>Morgan, 31</b><div class="sm">K♦</div></div></div><div class="stamp burn">🔥 Burned</div>'),
        fr("Interested? Play it", '<div class="face solo"><span class="ph" style="background:var(--night)">J</span><div><b>Jordan, 33</b><div class="sm">A♥ · Hiking · Trivia</div></div></div><div class="stamp play">✋ Played</div>')]],
      6: ["Make a Pair", [
        fr("You play Jordan's card", '<div class="fan">' + ca("A", "heart") + '<span class="arrow">→</span><span class="cc who">Jordan</span></div>'),
        fr("Jordan plays yours", '<div class="fan"><span class="cc who">You</span><span class="arrow">←</span>' + ca("A", "diamond") + "</div>"),
        fr("It's a Pair. The Side Table opens", '<div class="fan pair">' + ca("A", "heart") + ca("A", "diamond") + '</div><div class="bubble">Coffee Saturday? ☕</div>')]]
    };
    Object.keys(MINI).forEach(function (k) { var t = MINI[k][0], f = MINI[k][1];
      MINI[k] = '<div class="ct">' + t + '<span>example</span></div><div class="stage">' + f.map(function (x, i) { return '<div class="fr f' + (i + 1) + '">' + x.html + '<div class="cap"><b>' + (i + 1) + "/3</b> " + x.cap + "</div></div>"; }).join("") + '</div><div class="prog"><i></i></div>'; });
    $$("[data-mini]", box).forEach(function (m) { m.innerHTML = MINI[m.getAttribute("data-mini")]; });
    var EX = {
      1: function () {
        var Qs = [["First date, you'd rather…", [["diamond", "Pick the place and book it"], ["club", "Something lively, like trivia"], ["heart", "A long walk and real conversation"], ["spade", "A spot with great reviews"]]],
                  ["You show you care by…", [["diamond", "Solving the problem"], ["club", "Planning a surprise"], ["heart", "Showing up, no matter what"], ["spade", "Remembering the little details"]]]];
        var picks = [];
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 1</p><div class="exh">Find your suit</div><p class="lede">Try two real quiz questions. Each answer leans toward a suit.</p><div class="felt" id="exQ"></div><div class="res" id="exR"></div><a class="btn gold sm" href="#quiz" data-close>Take the full quiz</a></div>');
        function q(i) {
          if (i >= Qs.length) { var t = {}; picks.forEach(function (s) { t[s] = (t[s] || 0) + 1; }); var top = picks[picks.length - 1]; if (picks[0] === picks[1]) top = picks[0];
            $("#exQ", m).innerHTML = '<div style="text-align:center;color:' + suitColor(top) + '">' + pip(top, "big") + '<div class="exh" style="color:var(--cream)">' + SUIT[top].sym + " You lean " + SUIT[top].name + '</div><p style="color:#dbeee4">' + SUIT[top].line + "</p></div>"; jackpot(1500); return; }
          $("#exQ", m).innerHTML = '<div style="font:800 1.4rem var(--display);text-transform:uppercase;margin-bottom:10px">' + Qs[i][0] + '</div><div class="opts">' + Qs[i][1].map(function (o) { return '<button class="opt" type="button" data-s="' + o[0] + '">' + o[1] + "</button>"; }).join("") + "</div>";
          $$(".opt", m).forEach(function (b) { b.onclick = function () { b.classList.add("on"); picks.push(b.getAttribute("data-s")); setTimeout(function () { q(i + 1); }, 250); }; });
        }
        q(0);
      },
      2: function () {
        modal('<div class="ex"><p class="eyebrow">Example · Step 2</p><div class="exh">Set your Face</div><p class="lede">Your Face is your profile. You choose what\'s Face Up (on your card) and what stays Face Down (private, only for matching).</p>' +
          '<div class="mface"><div class="avatar" style="width:84px;margin:0;background:var(--red)">J</div><div><b style="font:900 1.5rem var(--display);text-transform:uppercase">Jordan, 33</b><div class="hint" style="color:#4a4552">@jordan.k · Calling Card · Homewood, AL · ✓ Verified</div><p style="margin-top:6px">"Weekend hiker, weeknight cook. Looking for my person to share both."</p></div></div>' +
          '<div class="mface" style="grid-template-columns:1fr"><div><b>Height</b> 5\'11"<span class="tag up">Face Up</span></div><div><b>Faith</b> Christian · Baptist<span class="tag up">Face Up</span></div><div><b>Kids</b> Want kids<span class="tag up">Face Up</span></div><div><b>Income</b> Prefer not to say<span class="tag down">Face Down</span></div><div><b>Biggest fault</b> Impatient<span class="tag down">Face Down</span></div></div>' +
          '<a class="btn gold sm" href="how-cards-work.html">See how a Face becomes a card</a></div>');
      },
      3: function () {
        var order = ["heart", "diamond", "club", "spade"];
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 3</p><div class="exh">Call trumps</div><p class="lede">Rank the four suits by who you click with. Your #1 trump leads your Hand. Tap the arrows to reorder.</p><ol class="trumps" id="exT"></ol><p class="hint" id="exTn"></p></div>');
        function draw() {
          $("#exT", m).innerHTML = order.map(function (s, i) { return '<li><span class="tp" style="color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + SUIT[s].sym + '</span><b>#' + (i + 1) + "</b><span>" + SUIT[s].name + 's<br><small style="font-weight:500">' + SUIT[s].line + '</small></span><span>' + (i ? '<button type="button" data-up="' + i + '" aria-label="Move ' + SUIT[s].name + ' up">▲</button>' : "") + "</span></li>"; }).join("");
          $("#exTn", m).textContent = "Your Hand opens with " + SUIT[order[0]].name + "s, then " + SUIT[order[1]].name + "s, " + SUIT[order[2]].name + "s and " + SUIT[order[3]].name + "s.";
          $$("[data-up]", m).forEach(function (b) { b.onclick = function () { var i = +b.getAttribute("data-up"); var t = order[i]; order[i] = order[i - 1]; order[i - 1] = t; draw(); }; });
        }
        draw();
      },
      4: function () {
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 4</p><div class="exh">Get your 52</div><p class="lede">Everyone near you who passes your gates (distance, ages, who you want to see, dealbreakers, and who wants to see you) is ranked by fit. The best 13 in each suit become Ace to 2.</p><div class="felt"><div class="deckgrid" id="exD"></div></div><a class="btn gold sm" href="how-cards-work.html">Follow one card from Face to rank</a></div>');
        var html = ""; ["heart", "diamond", "club", "spade"].forEach(function (s) { RANKS.forEach(function (r) { html += '<i style="color:' + (SUIT[s].red ? "var(--red)" : "var(--night)") + '">' + r + SUIT[s].sym + "</i>"; }); });
        $("#exD", m).innerHTML = html; $$("#exD i", m).forEach(function (el, n) { setTimeout(function () { el.classList.add("in"); }, REDUCED ? 0 : n * 18); });
      },
      5: function () {
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 5</p><div class="exh">Burn or Play</div><p class="lede">Every card gets a choice. Burn is private and permanent. Play tells them you\'re interested; they only find out if they play you too.</p><div class="felt" id="exB">' + card("Q", "club", "Maya, 29", "Pelham · about 16 mi") + '</div><div class="row"><button class="btn red" type="button" data-burn>🔥 Burn</button><button class="btn gold" type="button" data-play>✋ Play</button><button class="btn ghost sm" type="button" data-reset>Reset</button></div><p class="res" id="exBr"></p></div>');
        var c = $(".bigcard", m);
        $("[data-burn]", m).onclick = function () { c.className = "bigcard burn"; $("#exBr", m).textContent = "Burned. Maya is gone from your deck for good, and she's never told."; };
        $("[data-play]", m).onclick = function () { c.className = "bigcard play"; $("#exBr", m).textContent = "Played. If Maya plays you too, it's a Pair."; burstAt(c, 40); };
        $("[data-reset]", m).onclick = function () { c.className = "bigcard"; $("#exBr", m).textContent = ""; };
      },
      6: function () {
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 6</p><div class="exh">Make a Pair</div><p class="lede">When you both play each other\'s card, it\'s a Pair. Each of you sees how you hold the other, and the Side Table opens for chat. Phone numbers stay hidden until you both call a Win.</p><div class="felt"><div class="pairrow" id="exP">' +
          '<div class="bigcard l"><div><div style="font:900 2rem var(--display);color:var(--red)">A♥</div><b>Jordan</b><div class="hint" style="color:#4a4552">You hold Jordan</div></div></div>' +
          '<div class="bigcard r"><div><div style="font:900 2rem var(--display);color:var(--red)">A♦</div><b>You</b><div class="hint" style="color:#4a4552">Jordan holds you</div></div></div></div></div>' +
          '<div class="exh" id="exPt" style="text-align:center;color:var(--gold-hi);opacity:0;transition:opacity .4s">Pair of Aces!</div>' +
          '<div style="display:grid;gap:8px" id="exC"></div></div>');
        setTimeout(function () { $("#exP", m).classList.add("met"); $("#exPt", m).style.opacity = 1; jackpot(3000); burstAt($("#exP", m), 80); }, REDUCED ? 0 : 500);
        setTimeout(function () { $("#exC", m).innerHTML = '<div class="bub">A Pair! I knew it. Coffee Saturday?</div><div class="bub me">Yes. Somewhere public, I\'ll meet you there ☕</div>'; }, REDUCED ? 0 : 1300);
      }
    };
    box.addEventListener("click", function (e) { var b = e.target.closest("[data-ex]"); if (b) EX[b.getAttribute("data-ex")](); });
  })();

  /* ---------- Help desk: answers + email. SuiteFace has no support phone line. ---------- */
  (function () {
    var hb = $("#helpBtn"); if (!hb) return;
    var FAQ = [
      ["How much does SuiteFace cost?", "Joining and building your Face are free. The Buy-In is $21.00 one time (it includes your first 30 days), then $2.10 a month. 12-Card Deck Guarantee: if we can't deal you at least 12 cards within 10 days, ask for your $21 back or stay while your table fills. Cancel anytime in Settings."],
      ["What does a comp code do?", "Enter it in the Comp box before you buy in. PlayMessy makes the $21 Buy-In free; your $2.10 monthly still starts after 30 days."],
      ["How do I cancel or pause?", "Settings → Membership → Manage billing. You can pause once every 210 days, for up to 21 days; after 21 days your seat ends and a new $21 Buy-In is needed. You can cancel a Buy-In within 3 business days for a full refund."],
      ["Why don't I have 52 cards yet?", "Your deck only holds people who pass your gates (distance, ages, who you want to see, dealbreakers) and who want to see you too. Invite friends to fill your table, or widen your distance or ages."],
      ["How is my deck ranked?", "Each card gets a 100-point fit score for you: values, your table, shared interests, trumps, truth, closeness and age. Ace, King, Queen and Jack go only to ID-verified members. See House Fit Rules."],
      ["How do I get the verified Seal?", "Verify with a driver's license, state ID or passport plus a quick live selfie. That confirms you're 18+ and that your face matches your card."],
      ["How do Jokers work?", "After a Loss on one of your first three dates together, you can make a Joker within 12 hours of Play Hand. Ten Jokers within 180 days shows JOKER on a card for 45 days. Every Joker can be challenged for free. See Joker Rules."],
      ["Someone made me feel unsafe.", "If you're in danger, call 911 now. Then use Report a safety concern on their card. Safety reports go straight to SuiteFace staff and are never handled as a Joker."],
      ["I can't use 'Use my location'.", "Your browser has to allow location for suiteface.com, and it only works on the secure site. You can always type your ZIP code or city instead."],
      ["How do I change or delete my account?", "Settings lets you edit your Face, change your @username if it's free, download your data, or delete your account."],
      ["How do I contact SuiteFace?", "Email help@suiteface.com. SuiteFace doesn't take phone calls; every request is answered by email so there's a written record."]
    ];
    var DEALER = CFG.dealerUrl || "";
    var chat = [];
    function md(t) { return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/^#+\s*(.+)$/gm, "<b>$1</b>").replace(/\n/g, "<br>"); }
    function openRaise() {
      var m2 = modal('<p class="eyebrow">Upsell · one time</p><h3 style="font-size:2rem">✋ The Raise</h3>' +
        '<p>Before you play the hand, raise. The Dealer reads both cards and deals you a plan for your date.</p>' +
        '<ul class="raise-list"><li><b>The Read:</b> what you two share and where you differ.</li><li><b>Where to play:</b> three real places near you: coffee, a meal, a concert or movie, a park, mall or busy trail, a community center, or a church, mosque, synagogue or temple when you share a faith. Planning a double date? It plans a <b>Party Table</b>.</li><li><b>Opening lines</b> from your shared interests.</li><li><b>Your tell:</b> one kind tip from your own words.</li><li><b>Play it safe</b> reminders.</li></ul>' +
        '<div class="notice">Don\'t like the hand you\'re dealt? <b>Fold</b> once, free, within 7 days and the Dealer re-deals all new picks.</div>' +
        '<div class="row" style="margin-top:12px"><a class="btn gold" id="raiseBuy" href="' + esc(CFG.stripeRaiseLink || "#") + '" target="_blank" rel="noopener">Raise for $2.10</a><button class="btn ghost" type="button" id="raiseDemo">See a sample Raise</button></div>' +
        '<div id="raiseOut" class="raise-out" hidden></div><p class="hint" style="margin-top:8px">Each Raise is used when you ask. If the Dealer can\'t finish, your Raise comes back. Sales are final once used.</p>');
      $("#raiseBuy", m2).addEventListener("click", function (e) { if (window.SF_LIVE && (houseCode() || staffEmail())) { e.preventDefault(); var href = this.href; compOr("raise", null, function () { window.open(href, "_blank", "noopener"); }); } });
      $("#raiseDemo", m2).addEventListener("click", function () { var o = $("#raiseOut", m2); o.hidden = false;
        o.innerHTML = md("**The Read**\nYou're both Hearts-first and both picked \"long walk, real talk.\" Jordan plans; you go with the flow. Let Jordan pick the time, you pick the place.\n\n**Where to play** (Birmingham, check hours before you go)\n1. Coffee at a busy spot in Avondale, outside seating, easy to leave.\n2. Railroad Park: a daylight walk where lots of people are around.\n3. Trivia night at a brewery in Lakeview: you both listed trivia.\n\n**Opening lines**\nWhat's the best hike you've ever done? · Which trivia category do you carry the team in? · What does a perfect Sunday look like?\n\n**Your tell**\nYou called your biggest fault \"overthinking.\" Ask one question, then really listen.\n\n**Play it safe**\nMeet there, take your own ride, tell a friend, keep your drink in sight, leave anytime. Call 911 in an emergency.") +
          '<div class="row" style="margin-top:10px"><button class="btn ghost sm" type="button" id="foldBtn">🂠 Fold: re-deal new picks</button></div>';
        $("#foldBtn", m2).addEventListener("click", function () { this.disabled = true; this.textContent = "Folded. In the live version the Dealer re-deals three new places here."; });
      });
    }
    window.SF_openRaise = openRaise;
    hb.addEventListener("click", function () {
      var m = modal('<p class="eyebrow">Help desk</p><h3 style="font-size:2rem">Ask the Dealer</h3>' +
        '<div class="dealer" id="dlr"><div class="dlog" id="dlog" aria-live="polite"><div class="dmsg them">Hi, I\'m the Dealer. Ask me anything about SuiteFace: costs, your deck, Jokers, safety, the Terms.</div></div>' +
        '<form class="dask" id="dask"><label class="sr" for="dq">Your question</label><input id="dq" maxlength="500" placeholder="Ask the Dealer…" autocomplete="off"><button class="btn gold sm" type="submit">Ask</button></form>' +
        '<div class="dquick">' + ["How much does it cost?", "How do Jokers work?", "How do I stay safe on a date?", "Can I cancel?"].map(function (q) { return '<button type="button" class="chip">' + q + "</button>"; }).join("") + "</div></div>" +
        '<div class="raise-cta"><div><b>✋ Raise before you play the hand</b><span>Date prep from the Dealer: where to go, what to say, how to play it safe. $2.10.</span></div><button class="btn ghost sm" type="button" id="toRaise">See the Raise</button></div>' +
        '<h4 class="hd-sub">Quick answers</h4><label class="sr" for="hdQ">Search help</label><input class="hd-search" id="hdQ" type="search" placeholder="Search: cancel, comp, Joker, location…" autocomplete="off">' +
        '<div class="faq" id="hdList">' + FAQ.map(function (f) { return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</div>" +
        '<div class="row" style="margin-top:12px"><a class="btn gold sm" href="mailto:help@suiteface.com?subject=SuiteFace%20help">Email help@suiteface.com</a><a class="btn ghost sm" href="legal.html">Legal center</a><a class="btn ghost sm" href="safety.html">Safety Guide</a></div>' +
        '<p class="hint" style="margin-top:8px">The Dealer is an AI. It can explain the rules but can\'t change your account or give legal advice. No phone line: a person answers help@suiteface.com in writing. In an emergency, call 911.</p>', { focus: "#dq" });
      $("#toRaise", m).addEventListener("click", openRaise);
      $("#hdQ", m).addEventListener("input", function () { var q = this.value.trim().toLowerCase();
        $$("#hdList details", m).forEach(function (d) { var hit = !q || d.textContent.toLowerCase().indexOf(q) > -1; d.hidden = !hit; if (q && hit) d.open = true; }); });
      var log = $("#dlog", m), busy = false;
      function say(who, html) { var d = document.createElement("div"); d.className = "dmsg " + who; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
      function localAnswer(q) { var w = q.toLowerCase().split(/\W+/).filter(function (x) { return x.length > 3; }), best = null, sc = 0;
        FAQ.forEach(function (f) { var t = (f[0] + " " + f[1]).toLowerCase(), s = 0; w.forEach(function (x) { if (t.indexOf(x) > -1) s++; }); if (s > sc) { sc = s; best = f; } });
        return best ? best[1] : "I don't have that one yet. Email help@suiteface.com and a person will answer in writing."; }
      function ask(q) {
        if (busy || !q.trim()) return; busy = true; say("me", esc(q)); chat.push({ role: "user", content: q });
        var t = say("them typing", "<span></span><span></span><span></span>");
        var done = function (ans, note) { t.className = "dmsg them"; t.innerHTML = md(ans) + (note ? '<small>' + note + "</small>" : ""); chat.push({ role: "assistant", content: ans }); busy = false; log.scrollTop = log.scrollHeight; };
        if (!DEALER) return setTimeout(function () { done(localAnswer(q), "Quick answer · the live Dealer opens soon"); }, 500);
        fetch(DEALER, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: chat.slice(-8) }) })
          .then(function (r) { return r.json(); })
          .then(function (j) { if (j && j.answer) done(j.answer); else done(localAnswer(q), "Quick answer · the live Dealer opens soon"); })
          .catch(function () { done(localAnswer(q), "Quick answer · couldn't reach the Dealer"); });
      }
      $("#dask", m).addEventListener("submit", function (e) { e.preventDefault(); var i = $("#dq", m); ask(i.value); i.value = ""; });
      $$(".dquick .chip", m).forEach(function (b) { b.addEventListener("click", function () { ask(b.textContent); }); });
    });
  })();

  /* ---------- Owner: staff approvals (server checks the passcode; nothing secret lives in this page) ---------- */
  (function () {
    var f = $("#stApprove"); if (!f) return; var out = $("#stOut");
    function live() { return window.SF_LIVE && window.SF_LIVE.rpc; }
    f.addEventListener("submit", function (e) { e.preventDefault();
      var args = { p_email: $("#stEmail").value.trim(), p_role: $("#stRole").value, p_passcode: $("#stPass").value, p_note: $("#stNote").value.trim() || null };
      $("#stPass").value = "";
      if (!live()) { out.textContent = "Preview: on the live site this sends the approval to the server, which checks the passcode, the ID Seal and that you're the Owner."; return; }
      out.textContent = "Checking…";
      window.SF_LIVE.rpc("approve_staff", args).then(function (r) { out.textContent = r.error ? r.error.message : "✓ " + r.data; });
    });
    var hcb = $("#hcSet"); if (hcb) hcb.addEventListener("click", function () {
      var v = $("#hcNew").value, o = $("#hcOut");
      if (!live()) { o.textContent = "Sign in as the Owner on suiteface.com to set the code."; return; }
      if (v.length < 8) { o.textContent = "Use at least 8 characters."; return; }
      window.SF_LIVE.rpc("set_house_comp_code", { p_new: v }).then(function (r) { o.textContent = r.error ? r.error.message : "✓ " + r.data + " Only staff email accounts can use it."; if (!r.error) $("#hcNew").value = ""; });
    });
    $("#stSetPass").addEventListener("click", function () {
      var m = modal('<h3 style="font-size:1.8rem">Approval passcode</h3><p class="lede" style="margin:6px 0 10px">At least 12 characters with upper and lower case letters, a number and a symbol. Keep it in your password manager, not in email or chat.</p>' +
        '<div class="form-grid"><div class="field"><label for="pcCur">Current passcode <span class="hint">(leave blank the first time)</span></label><input id="pcCur" type="password" autocomplete="off"></div>' +
        '<div class="field"><label for="pcNew">New passcode</label><input id="pcNew" type="password" autocomplete="new-password"></div>' +
        '<div class="field"><label for="pcNew2">New passcode again</label><input id="pcNew2" type="password" autocomplete="new-password"></div>' +
        '<div class="row"><button class="btn gold" type="button" id="pcGo">Save passcode</button></div><p class="hint" id="pcOut" role="status"></p></div>', { focus: "#pcNew" });
      $("#pcGo", m).addEventListener("click", function () {
        var a1 = $("#pcNew", m).value, a2 = $("#pcNew2", m).value, o = $("#pcOut", m);
        if (a1 !== a2) { o.textContent = "The two new passcodes don't match."; return; }
        if (!live()) { o.textContent = "Preview: on the live site the server saves only a one-way scramble of this passcode."; return; }
        window.SF_LIVE.rpc("set_approval_passcode", { p_new: a1, p_current: $("#pcCur", m).value || null }).then(function (r) { o.textContent = r.error ? r.error.message : "✓ " + r.data; if (!r.error) setTimeout(closeModal, 1200); });
      });
    });
  })();

  /* ---------- ZIP Sponsors: the Vegas sign, the lead pop-up, and the sponsor signup ---------- */
  function rpc(name, args) {
    if (!CFG.supabaseUrl || !CFG.supabaseKey) return Promise.reject(new Error("Preview mode"));
    return fetch(CFG.supabaseUrl + "/rest/v1/rpc/" + name, { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey }, body: JSON.stringify(args || {}) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.message) || "Something went wrong."); return j; }); });
  }
  window.SF_rpc = rpc;
  /* House comp: staff accounts (@suiteface.com, @gofirehorsego.com, thesuiteface@gmail.com) with the Owner's comp code get any member feature free.
     The server checks both the code and the account's verified email; the code is kept only for this browser tab. */
  function houseCode() { try { return window.SF_HOUSE || sessionStorage.getItem("sf.house") || ""; } catch (e) { return window.SF_HOUSE || ""; } }
  function houseComp(item, ref) {
    var code = houseCode(); if (!code || !window.SF_LIVE) return Promise.resolve(false);
    return window.SF_LIVE.rpc("house_comp", { p_code: code, p_item: item, p_ref: ref || null }).then(function (r) {
      if (r.error) { toast(r.error.message); return false; }
      toast("🎩 Comped by the house. Enjoy!"); jackpot(2500); if (window.SF_AUTH) window.SF_AUTH.refresh(); return true;
    });
  }
  window.SF_houseComp = houseComp;
  /* Staff accounts are asked for the house comp code right at checkout (blank = pay normally). */
  function staffEmail() { return !!(window.SF_LIVE && /(@suiteface\.com|@gofirehorsego\.com|^thesuiteface@gmail\.com)$/i.test(window.SF_LIVE.email() || "")); }
  function askHouse() {
    if (houseCode() || !staffEmail()) return Promise.resolve(!!houseCode());
    var v = window.prompt("House comp code (staff only). Enter it to make this free, or leave blank to pay:", "");
    if (!v || !v.trim()) return Promise.resolve(false);
    return window.SF_LIVE.rpc("house_comp_check", { p_code: v.trim() }).then(function (r) {
      if (r.error || !r.data) { toast((r.error && r.error.message) || "That comp code isn't valid for this account."); return false; }
      window.SF_HOUSE = v.trim(); try { sessionStorage.setItem("sf.house", v.trim()); } catch (e) { } return true;
    });
  }
  /* Run a purchase: comped for staff with the code, otherwise the normal checkout. */
  function compOr(item, ref, payFn, onComped) { askHouse().then(function (ok) { if (ok) houseComp(item, ref).then(function (done) { if (done) { if (onComped) onComped(); } else payFn(); }); else payFn(); }); }
  function marquee(s, cls) {
    var bulbs = ""; for (var i = 0; i < 22; i++) bulbs += "<i style=\"animation-delay:" + (i % 3) * .3 + "s\"></i>";
    return '<div class="vsign ' + (cls || "") + '"><div class="vbulbs">' + bulbs + '</div><span class="vtag">' + (s.house ? "House sponsor" : "Sponsored") + '</span><b class="vhead">' + esc(s.headline || s.business) + '</b>' +
      (s.tagline ? '<span class="vtl">' + esc(s.tagline) + "</span>" : "") + (s.offer ? '<span class="voffer">' + esc(s.offer) + "</span>" : "") + "</div>";
  }
  function quiet(id, days) { try { localStorage.setItem("sf.sp." + id, String(Date.now() + days * 864e5)); } catch (e) { } }
  function isQuiet(id) { try { return +localStorage.getItem("sf.sp." + id) > Date.now(); } catch (e) { return false; } }
  function showSponsor(s, house) {
    if (!s || isQuiet(s.id) || $(".vdock")) return;
    var d = document.createElement("div"); d.className = "vdock"; d.setAttribute("role", "complementary"); d.setAttribute("aria-label", house ? "Sponsor this ZIP" : "Sponsored by " + s.business);
    d.innerHTML = '<button type="button" class="vopen" aria-haspopup="dialog">' + marquee(s, "sm") + '</button><button type="button" class="vx" aria-label="Close sponsor sign">×</button>';
    document.body.appendChild(d);
    $(".vx", d).addEventListener("click", function () { d.remove(); quiet(s.id, 1); if (!house) rpc("sponsor_event", { p_sponsor: s.id, p_kind: "closed" }).catch(function () { }); });
    $(".vopen", d).addEventListener("click", function () {
      if (house) { d.remove(); openSponsorSignup(); return; }
      rpc("sponsor_event", { p_sponsor: s.id, p_kind: "opened" }).catch(function () { });
      var m = modal(marquee(s, "big") + '<p class="lede" style="margin:12px 0 4px">' + esc(s.business) + (s.website ? ' · <a href="' + esc(s.website) + '" target="_blank" rel="noopener sponsored">Visit website</a>' : "") + "</p>" +
        '<form class="form-grid" id="spLead" novalidate><div class="two"><div class="field"><label for="spN">Name</label><input id="spN" autocomplete="name" required></div><div class="field"><label for="spE">Email</label><input id="spE" type="email" autocomplete="email" required></div></div>' +
        '<div class="field"><label for="spP">Phone <span class="hint">(optional)</span></label><input id="spP" type="tel" autocomplete="tel"></div>' +
        '<div class="field"><label for="spM">Message <span class="hint">(optional)</span></label><textarea id="spM" maxlength="600" placeholder="Table for two on Saturday?"></textarea></div>' +
        '<label class="check"><input type="checkbox" id="spOk"> <span>Send my details to <b>' + esc(s.business) + '</b> so they can reply to me. SuiteFace doesn\'t run this offer.</span></label>' +
        '<div class="row"><button class="btn gold" type="submit">Send to ' + esc(s.business) + '</button><button class="btn ghost" type="button" id="spNo">Not interested</button></div><p class="hint" id="spOut" role="status"></p></form>' +
        (s.house ? '<p class="hint" style="margin-top:10px">' + esc(s.business) + ' is a SuiteFace house sponsor, a business connected to SuiteFace. <a href="#" data-sponsor-signup>Want this spot for your business? Sponsor this ZIP ›</a></p>' : ""), { focus: "#spN" });
      $("#spNo", m).addEventListener("click", function () { quiet(s.id, 30); d.remove(); rpc("sponsor_event", { p_sponsor: s.id, p_kind: "not_interested" }).catch(function () { }); closeModal(); toast("Got it. You won't see this sign for 30 days."); });
      $("#spLead", m).addEventListener("submit", function (e) { e.preventDefault(); var o = $("#spOut", m);
        if (!$("#spOk", m).checked) { o.textContent = "Check the box to send your details."; return; }
        rpc("sponsor_lead", { p_sponsor: s.id, p_name: $("#spN", m).value, p_email: $("#spE", m).value, p_phone: $("#spP", m).value, p_message: $("#spM", m).value, p_consent: true, p_zip: P.zip || null })
          .then(function () { var formEl = $("#spLead", m); quiet(s.id, 7);
            if (window.SFX) { window.SFX.celebrate(formEl, { title: s.business.toUpperCase(), thanks: "Thank you for your submission. " + s.business + " will reply to you directly.", onDone: function () { d.remove(); } }); closeModal(); }
            else { closeModal(); d.remove(); toast("Sent to " + s.business + ". They'll reply to you directly."); } })
          .catch(function (er) { o.textContent = er.message; }); });
    });
  }
  (function waitForRoom(tries) { setTimeout(function () {
    var w = $(".welcome"); if (w && document.body.contains(w) && w.getClientRects().length && tries < 20) return waitForRoom(tries + 1);
    var z = P.zip; if (!/^\d{5}$/.test(z || "")) return;
    rpc("sponsor_for_zip", { p_zip: z }).then(function (s) {
      if (s && s.id) showSponsor(s, false);
      else if (!isQuiet("house")) showSponsor({ id: "house", business: "SuiteFace", headline: "YOUR NAME IN LIGHTS", tagline: "Sponsor ZIP " + z, offer: "$210 / 30 days · 7 ZIPs" }, true);
    }).catch(function () { });
  }, tries ? 4000 : 7000); })(0);

  function openSponsorSignup() {
    var m = modal('<p class="eyebrow">ZIP Sponsor · $210 every 30 days · up to 7 ZIP codes</p><h3 style="font-size:2rem">Put your name in lights</h3>' +
      '<p class="hint">One sponsor per ZIP. If a ZIP is taken, join its On Deck line (3 deep) and your card is charged only when it opens.</p>' +
      '<div class="field"><label for="szZ">Your ZIP codes (up to 7)</label><div class="row"><input id="szZ" inputmode="numeric" placeholder="35203, 35205, 35209…" style="flex:1"><button class="btn ghost sm" type="button" id="szCheck">Check ZIPs</button></div><div id="szAvail" class="szavail"></div></div>' +
      '<div class="two"><div class="field"><label for="szB">Business name</label><input id="szB" maxlength="80"></div><div class="field"><label for="szE">Billing email</label><input id="szE" type="email"></div></div>' +
      '<div class="two"><div class="field"><label for="szH">Sign headline <span class="hint">(40)</span></label><input id="szH" maxlength="40" placeholder="MAGIC CITY BBQ"></div><div class="field"><label for="szT">Tagline <span class="hint">(120)</span></label><input id="szT" maxlength="120" placeholder="Date-night ribs since 1987"></div></div>' +
      '<div class="two"><div class="field"><label for="szO">Offer <span class="hint">(optional)</span></label><input id="szO" maxlength="200" placeholder="Free dessert for SuiteFace pairs"></div><div class="field"><label for="szW">Website <span class="hint">(https://)</span></label><input id="szW" placeholder="https://"></div></div>' +
      '<div id="szPrev"></div><div class="row"><button class="btn gold" type="button" id="szGo">Sign the agreement and continue</button></div><p class="hint" id="szOut" role="status"></p>' +
      '<p class="hint">Every sign is approved by SuiteFace before it goes live and is labeled Sponsored. Renews every 30 days from payment until you cancel.</p>', { focus: "#szZ" });
    function prev() { $("#szPrev", m).innerHTML = marquee({ headline: $("#szH", m).value || "YOUR NAME IN LIGHTS", tagline: $("#szT", m).value, offer: $("#szO", m).value, business: $("#szB", m).value }, "big"); }
    ["#szH", "#szT", "#szO", "#szB"].forEach(function (q) { $(q, m).addEventListener("input", prev); }); prev();
    $("#szCheck", m).addEventListener("click", function () { var box = $("#szAvail", m); box.textContent = "Checking…";
      rpc("zip_availability", { p_zips: $("#szZ", m).value }).then(function (rows) {
        box.innerHTML = rows && rows.length ? rows.map(function (r) { return '<span class="' + (r.open ? "ok" : r.deck_full ? "full" : "deck") + '">' + r.zip + " " + esc(r.city) + ": " + (r.open ? "Open" : r.deck_full ? "Taken · On Deck full" : "Taken · On Deck " + r.on_deck + " of 3") + "</span>"; }).join("") : "No US ZIP codes found.";
      }).catch(function (e) { box.textContent = e.message; }); });
    $("#szGo", m).addEventListener("click", function () {
      var o = $("#szOut", m), v = function (q) { return $(q, m).value.trim(); };
      if (!v("#szZ") || !v("#szB") || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("#szE")) || !v("#szH")) { o.textContent = "Add your ZIP codes, business name, email and a headline."; return; }
      var data = { p_business: v("#szB"), p_email: v("#szE"), p_headline: v("#szH"), p_tagline: v("#szT"), p_offer: v("#szO"), p_website: v("#szW"), p_zips: v("#szZ") };
      closeModal();
      window.SFSign.require("sponsor", function (rec) {
        data.p_signer = (rec.signature || "").replace(/\//g, "").trim(); data.p_agreed = true; data.p_version = rec.version || "1.0";
        rpc("start_sponsorship", data).then(function (r) {
          if (r.next === "pay" && r.pay_url) { location.href = r.pay_url + "?client_reference_id=" + encodeURIComponent(r.id) + "&prefilled_email=" + encodeURIComponent(data.p_email); return; }
          return fetch(CFG.supabaseUrl + "/functions/v1/sponsor-billing", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey }, body: JSON.stringify({ action: "card", id: r.id }) })
            .then(function (x) { return x.json(); }).then(function (j) { if (j.url) location.href = j.url; else toast(j.error || "Couldn't open On Deck checkout."); });
        }).catch(function (e) { toast(e.message === "Preview mode" ? "Preview: on suiteface.com this goes to secure Stripe checkout." : e.message); });
      }, { about: data.p_business });
    });
  }
  window.SF_openSponsorSignup = openSponsorSignup;
  document.addEventListener("click", function (e) { if (!e.target.closest("[data-partner-join]")) return; e.preventDefault();
    window.SFSign.require("sponsor", function () { location.href = CFG.stripePartnerLink; }, { about: "House Partner" }); });
  document.addEventListener("click", function (e) { if (e.target.closest("[data-sponsor-signup]")) { e.preventDefault(); openSponsorSignup(); } });
  (function () { var q = new URLSearchParams(location.search).get("sponsor");
    if (q === "welcome") toast("You're in. SuiteFace will approve your sign within 1 business day.");
    if (q === "ondeck") toast("You're On Deck. We'll charge your card only when your ZIP opens."); })();

  /* ---------- The High Roller Room: ID Seal + verified $1M+ (accounts can add up) or the $5,000 High Roller Buy-In ---------- */
  function openHighRoller() {
    var m = modal('<p class="eyebrow">High-limit floor · ID Seal required</p><h3 style="font-size:2.2rem">💎 The High Roller Room</h3>' +
      '<p class="lede" style="margin:6px 0 10px">A private deck of High Rollers only, the gold high-limit table, and exclusive offers from High Roller Sponsors.</p>' +
      '<div class="hrpaths"><div class="hrpath"><b>Verify $1M+</b><span>Show at least <b>$1,000,000</b> across your bank or brokerage accounts. Several accounts can add up.</span>' +
        '<button class="btn gold sm" type="button" data-hr="bank">Link accounts with Stripe</button><label class="btn ghost sm hrup">Upload statements<input type="file" id="hrFile" accept="application/pdf,image/png,image/jpeg" multiple hidden></label>' +
        '<small>Bank links share a balance only, read once. Statements (dated within 60 days) are reviewed by SuiteFace staff and deleted after review. Your balance is never shown to anyone and is erased once you\'re verified. Badge: <b>💎 High Roller ✓ Verified</b>, renewed yearly.</small></div>' +
      '<div class="hrpath"><b>High Roller Buy-In · $5,000</b><span>Skip the financial check with a one-time $5,000 Buy-In.</span><button class="btn ghost sm" type="button" data-hr="buyin">Buy in for $5,000</button>' +
        '<small>One time, non-refundable except where the law requires. Badge: <b>💎 High Roller</b>.</small></div></div>' +
      '<div class="notice bad" style="margin-top:12px"><b>High Rollers are targets for romance scams.</b> Never send money, gift cards, crypto or account details to anyone you meet here, no matter the story.</div>' +
      '<p class="hint" id="hrOut" role="status" style="margin-top:8px"></p>');
    var out = $("#hrOut", m), live = window.SF_LIVE && window.SF_LIVE.session && window.SF_LIVE.session();
    function signed(next) { closeModal(); window.SFSign.require("highroller", next, { about: "High Roller Room" }); }
    function demo(kind) { P.highRoller = kind; if (P.rooms.indexOf("highroller") < 0) P.rooms.push("highroller"); P.room = "highroller"; saveP(); renderRooms(); deckDirty = true; buildDeck(); renderTable(false); onChange(); jackpot(3000);
      toast("💎 Welcome to the High Roller Room (preview). " + DECK.length + " High Roller cards dealt."); location.hash = "table"; }
    $$("[data-hr]", m).forEach(function (b) { b.addEventListener("click", function () { var kind = b.getAttribute("data-hr");
      signed(function () {
        if (!live) { demo(kind === "buyin" ? "buyin" : "verified"); return; }
        if (kind === "buyin" && (houseCode() || staffEmail()) && !openHighRoller.__asked) { openHighRoller.__asked = true; var self = this; compOr("high_roller", null, function () { self.click(); }); setTimeout(function () { openHighRoller.__asked = false; }, 4000); return; }
        if (kind === "buyin") { location.href = CFG.stripeHighRollerLink + "?client_reference_id=" + encodeURIComponent(window.SF_LIVE.memberId()) + "&prefilled_email=" + encodeURIComponent(window.SF_LIVE.email() || ""); return; }
        fetch(CFG.supabaseUrl + "/functions/v1/high-roller", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + window.SF_LIVE.token() }, body: JSON.stringify({ action: "bank" }) })
          .then(function (r) { return r.json(); }).then(function (j) { if (j.url) location.href = j.url; else toast(j.error || "Couldn't open bank linking."); });
      }); }); });
    $("#hrFile", m).addEventListener("change", function () { var files = Array.prototype.slice.call(this.files || []);
      if (!files.length) return; if (files.some(function (f) { return f.size > 10485760; })) { out.textContent = "Each file must be under 10 MB."; return; }
      signed(function () {
        if (!live) { toast("Preview: on suiteface.com your " + files.length + " statement(s) go to private review. Approval usually takes 1 business day."); return; }
        Promise.all(files.map(function (f) { return window.SF_LIVE.uploadStatement(f).then(function (path) { return window.SF_rpc("start_hr_check", { p_method: "statement", p_statement_path: path }); }); }))
          .then(function () { toast("Statements sent for private review. We'll email you when you're verified."); }).catch(function (e) { toast(e.message); });
      }); });
  }
  window.SF_openHighRoller = openHighRoller;
  document.addEventListener("click", function (e) { if (e.target.closest("[data-highroller]")) { e.preventDefault(); openHighRoller(); } });
  document.addEventListener("click", function (e) { if (!e.target.closest("[data-hr-sponsor]")) return; e.preventDefault();
    window.SFSign.require("sponsor", function () { location.href = CFG.stripeHrSponsorLink; }, { about: "High Roller Sponsor" }); });
  (function () { var q = new URLSearchParams(location.search).get("highroller");
    if (q === "welcome") toast("💎 Welcome, High Roller. Your Room opens on your next deal.");
    if (q === "linked") toast("Account linked. We're checking the balance now; this takes a few minutes."); })();

  /* ---------- @tag: the @ is always shown and never typed. Taken? Offer two available alternatives. ---------- */
  (function () {
    var inp = $("#fHandle"), box = $("#handleSug"); if (!inp || !box) return;
    function clean(v) { return String(v || "").toLowerCase().replace(/^@+/, "").replace(/\s+/g, ".").replace(/[^a-z0-9._]/g, "").replace(/\.{2,}/g, ".").slice(0, 24); }
    var taken = {}; (typeof POOL !== "undefined" ? POOL : []).forEach(function (p) { taken[clean((p.name || "").split(" ")[0]) ] = 1; });
    function localSuggest(base) { var out = [], c = [base + "." + (10 + (hash(base) % 89)), base + "_" + String(new Date().getFullYear()).slice(2), base + ".ace", base + "_hearts", "the." + base];
      c.forEach(function (x) { if (out.length < 2 && x.length <= 24 && !taken[x] && RESERVED.indexOf(x) < 0) out.push(x); }); return out; }
    var t = null, seq = 0;
    function show(res) {
      if (!res || !res.wanted || res.wanted.length < 3) { box.innerHTML = ""; return; }
      box.innerHTML = res.available ? '<span class="ok">✓ @' + esc(res.wanted) + " is yours if you want it.</span>"
        : '<span class="no">@' + esc(res.wanted) + " is taken. Try one of these:</span>" + (res.suggestions || []).map(function (s) { return '<button type="button" class="chip sm" data-handle="' + esc(s) + '">@' + esc(s) + "</button>"; }).join("");
    }
    function check() {
      var v = clean(inp.value); if (inp.value !== v) inp.value = v; P.handle = v; saveP(); onChange();
      clearTimeout(t); if (v.length < 3) { box.innerHTML = ""; return; }
      var my = ++seq;
      t = setTimeout(function () {
        var local = RESERVED.indexOf(v) > -1 || taken[v] ? { wanted: v, available: false, suggestions: localSuggest(v) } : { wanted: v, available: true };
        if (!(window.SF_rpc && CFG.supabaseUrl)) return show(local);
        window.SF_rpc("handle_suggestions", { p_wanted: v, p_name: P.name || null }).then(function (r) { if (my === seq) show(r && r.available === false && RESERVED.indexOf(v) < 0 ? r : (RESERVED.indexOf(v) > -1 ? local : r)); })
          .catch(function () { if (my === seq) show(local); });
      }, 450);
    }
    window.SF_checkHandle = check;
    inp.addEventListener("input", check);
    inp.addEventListener("paste", function () { setTimeout(check, 0); });
    box.addEventListener("click", function (e) { var b = e.target.closest("[data-handle]"); if (!b) return; inp.value = b.getAttribute("data-handle"); check(); inp.focus(); });
    if (P.handle && /^@/.test(P.handle)) { P.handle = clean(P.handle); inp.value = P.handle; saveP(); }
  })();

  /* ---------- Ambient motion: drifting suits and chips behind the whole room; livelier on the table ---------- */
  (function () {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var amb = document.createElement("div"); amb.className = "ambient"; amb.setAttribute("aria-hidden", "true");
    var SUITS = [["♥", "#C8303F"], ["♦", "#C8303F"], ["♣", "#E8C46A"], ["♠", "#E8C46A"]], n = innerWidth < 700 ? 9 : 16;
    for (var i = 0; i < n; i++) {
      var el = document.createElement("i"), kind = i % 5 === 0 ? "card" : i % 3 === 0 ? "chip" : "suit", sz = 18 + Math.random() * 26;
      el.className = kind;
      if (kind === "suit") { var su = SUITS[i % 4]; el.textContent = su[0]; el.style.setProperty("--c", su[1]); el.style.setProperty("--s", sz + "px"); }
      if (kind === "chip") { el.style.setProperty("--c", ["#9B1B30", "#1E7A4C", "#2B2730", "#B8862F"][i % 4]); el.style.setProperty("--s", (12 + Math.random() * 10) + "px"); }
      el.style.left = (Math.random() * 98) + "%"; el.style.setProperty("--o", (0.06 + Math.random() * 0.1).toFixed(2));
      el.style.setProperty("--dx", ((Math.random() - .5) * 160) + "px"); el.style.setProperty("--r", ((Math.random() - .5) * 720) + "deg");
      el.style.animationDuration = (38 + Math.random() * 36) + "s"; el.style.animationDelay = (-Math.random() * 70) + "s";
      amb.appendChild(el);
    }
    document.body.insertBefore(amb, document.body.firstChild);
    // the felt gets its own chips and a slow spotlight
    $$(".feltbox").forEach(function (f) {
      var fl = document.createElement("div"); fl.className = "feltfloat"; fl.setAttribute("aria-hidden", "true");
      for (var k = 0; k < 9; k++) { var e = document.createElement("i"), chip = k % 2 === 0; e.className = chip ? "chip" : "suit";
        if (chip) e.style.setProperty("--c", ["#9B1B30", "#2B2730", "#B8862F", "#1E7A4C"][k % 4]); else e.textContent = "♠♥♦♣"[k % 4];
        e.style.left = (5 + Math.random() * 90) + "%"; e.style.setProperty("--h", (f.offsetHeight + 120) + "px");
        e.style.animationDuration = (16 + Math.random() * 14) + "s"; e.style.animationDelay = (-Math.random() * 30) + "s"; fl.appendChild(e); }
      f.insertBefore(fl, f.firstChild);
    });
    // Play Hand: chips rise behind the call buttons
    new MutationObserver(function () {
      var hb = document.getElementById("handBox"); if (!hb || hb.querySelector(".handchips")) return;
      var hc = document.createElement("div"); hc.className = "handchips feltfloat"; hc.style.opacity = ".8";
      for (var k = 0; k < 7; k++) { var e = document.createElement("i"); e.className = "chip"; e.style.setProperty("--c", ["#9B1B30", "#B8862F", "#1E7A4C"][k % 3]);
        e.style.left = (6 + Math.random() * 88) + "%"; e.style.setProperty("--h", "520px"); e.style.animationDuration = (9 + Math.random() * 8) + "s"; e.style.animationDelay = (-Math.random() * 12) + "s"; hc.appendChild(e); }
      hb.insertBefore(hc, hb.firstChild);
    }).observe(document.body, { childList: true, subtree: true });
  })();

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
  /* Answers from an earlier visit never skip the deck: anyone who hasn't unlocked a result starts at question 1. */
  if (qi >= STEPS_Q && !S.get("suitLead", null) && !window.SF_LIVE) { qa = []; qw = { self: [], others: [], fault: "" }; qi = 0; S.set("quiz", qa); S.set("quizWords", qw); }
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
    var left = STEPS_Q - qi - 1;
    $("#qCount").textContent = "Question " + (qi + 1) + " of " + STEPS_Q + (left ? " · " + left + " to go" : " · last one");
    var pct = qi / STEPS_Q, cheer =
      qi === 0 ? "Let's deal you in. No wrong answers here, just honest ones." :
      qi === 1 ? "Nice. Now think about how the people who love you would describe you." :
      qi === 2 ? "Here come the quick ones. Go with your gut." :
      qi === STEPS_Q - 1 ? "Last card. The honest one." :
      left === 1 ? "Almost there! One more after this." :
      pct >= .8 ? "Almost there. Your suit is nearly dealt." :
      pct >= .62 ? "Getting closer. Just a few more hands." :
      pct >= .45 ? "Halfway there. Your suit is taking shape." :
      pct >= .3 ? "Great rhythm. Keep going." : "Good start. Keep it honest.";
    var ch = $("#qCheer"); if (ch) ch.textContent = cheer;
    var qb = $("#quizBox"); if (qb && !REDUCED) { qb.classList.remove("slide"); void qb.offsetWidth; qb.classList.add("slide"); }
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
  function suitGate(R, top, c, tot) {
    var saved = S.get("leadDraft", {});
    R.innerHTML = '<span class="big gatepip" aria-hidden="true"><svg><use href="#s-spade"/></svg></span><form class="form-grid suitgate" id="suitGate" novalidate>' +
      '<h3 style="font-size:2rem">Your suit is ready.</h3><p class="lede">Tell us where to send it, and we\'ll show you your suit right now.</p>' +
      '<div class="field"><label for="sgName">Your name</label><input type="text" id="sgName" autocomplete="name" maxlength="80" value="' + esc(saved.name || "") + '"><span class="err" id="sgNameErr"></span></div>' +
      '<div class="field"><label for="sgEmail">Email</label><input type="email" id="sgEmail" autocomplete="email" inputmode="email" maxlength="120" value="' + esc(saved.email || "") + '"><span class="err" id="sgEmailErr"></span></div>' +
      '<div class="field"><label for="sgPhone">Mobile phone</label><input type="tel" id="sgPhone" autocomplete="tel" inputmode="tel" maxlength="20" placeholder="(205) 555-0123" value="' + esc(saved.phone || "") + '"><span class="err" id="sgPhoneErr"></span></div>' +
      '<label class="agree"><input type="checkbox" id="sgSms"> <span>Text me about my suit and my seat. Message and data rates may apply; reply STOP to opt out. Optional.</span></label>' +
      '<p class="hint">We\'ll email your result and news about SuiteFace. We never sell your details. <a href="privacy.html" target="_blank" rel="noopener">Privacy</a></p>' +
      '<span class="err" id="sgErr" role="alert"></span><div class="row"><button class="btn gold" type="submit" id="sgGo">Show my suit</button><button class="btn ghost" type="button" id="sgBack">Back</button></div></form>';
    var f = $("#suitGate", R);
    f.addEventListener("input", function () { S.set("leadDraft", { name: $("#sgName", f).value, email: $("#sgEmail", f).value, phone: $("#sgPhone", f).value }); });
    $("#sgBack", f).onclick = function () { qi = STEPS_Q - 1; renderQ(); };
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var nm = $("#sgName", f).value.trim(), em = $("#sgEmail", f).value.trim(), ph = $("#sgPhone", f).value.replace(/\D/g, ""), ok = true;
      if (ph.length === 11 && ph[0] === "1") ph = ph.slice(1);
      [["sgName", nm.length >= 2 ? "" : "Add your name."], ["sgEmail", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em) ? "" : "Check your email, like name@example.com."], ["sgPhone", ph.length === 10 ? "" : "Add a 10-digit mobile number."]]
        .forEach(function (x) { $("#" + x[0] + "Err", f).textContent = x[1]; $("#" + x[0], f).setAttribute("aria-invalid", String(!!x[1])); if (x[1]) ok = false; });
      if (!ok) { var bad = f.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
      var btn = $("#sgGo", f); btn.disabled = true; btn.textContent = "Dealing your suit…";
      var scores = {}; ORDER.forEach(function (k) { scores[k] = Math.round(c[k] / tot * 100); });
      var args = { p_name: nm, p_email: em, p_phone: ph, p_suit: top, p_scores: scores, p_self: qw.self.slice(0, 5), p_others: qw.others.slice(0, 5), p_sms_ok: $("#sgSms", f).checked, p_ref: (new URLSearchParams(location.search).get("ref") || S.get("ref", "") || null), p_page: location.pathname };
      var done = function () { S.set("suitLead", { email: em, at: Date.now() }); S.set("leadDraft", null); showResult(); var r = $("#quizResult"); if (r) r.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" }); };
      if (!CFG.supabaseUrl) { done(); return; }
      fetch(CFG.supabaseUrl + "/rest/v1/rpc/submit_suit_lead", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey }, body: JSON.stringify(args) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.message) || "That didn't go through."); return j; }); })
        .then(done, function (x) { btn.disabled = false; btn.textContent = "Show my suit"; $("#sgErr", f).textContent = x.message + " Try again, or email help@suiteface.com."; });
    });
    var first = $("#sgName", f); if (first && !first.value) setTimeout(function () { first.focus(); }, 50);
  }
  function showResult() {
    var c = { diamond: 0, club: 0, heart: 0, spade: 0 };
    qa.forEach(function (s) { c[s] += 1; });
    qw.self.concat(qw.others).forEach(function (w) { var k = suitOf(w, WORDS); if (k) c[k] += 0.5; });
    var fk = suitOf(qw.fault, FAULTS); if (fk) c[fk] += 0.5;
    var tot = ORDER.reduce(function (a, k) { return a + c[k]; }, 0) || 1;
    var both = qw.self.filter(function (w) { return qw.others.indexOf(w) > -1; });
    /* House rule: there is always one clear suit. Ties break in this order, and the result says which one decided it. */
    var TIE = [
      ["the words you and the people who know you both picked", function (s) { return both.filter(function (w) { return suitOf(w, WORDS) === s; }).length; }],
      ["how your friends and family see you", function (s) { return qw.others.filter(function (w) { return suitOf(w, WORDS) === s; }).length; }],
      ["your most recent answers", function (s) { for (var i = qa.length - 1; i >= 0; i--) if (qa[i] === s) return i + 1; return 0; }],
      ["your honest fault", function (s) { return fk === s ? 1 : 0; }]
    ];
    var lead = ORDER.filter(function (s) { return c[s] === Math.max.apply(null, ORDER.map(function (k) { return c[k]; })); }), tieNote = "";
    if (lead.length > 1) {
      var was = lead.slice();
      for (var t = 0; t < TIE.length && lead.length > 1; t++) {
        var sc = {}; lead.forEach(function (s) { sc[s] = TIE[t][1](s); });
        var hi = Math.max.apply(null, lead.map(function (s) { return sc[s]; }));
        var next = lead.filter(function (s) { return sc[s] === hi; });
        if (next.length < lead.length) { lead = next; if (lead.length === 1) tieNote = was.map(function (s) { return SUIT[s].name; }).join(" and ") + " were even. The tie went to " + SUIT[lead[0]].name + " on " + TIE[t][0] + "."; }
      }
      if (lead.length > 1) { lead = [lead[0]]; tieNote = was.map(function (s) { return SUIT[s].name; }).join(" and ") + " were dead even, so the house order decided it. Tap \"I'm more…\" if that's not you."; }
      c[lead[0]] += 0.01; /* the winner always shows the highest bar */
    }
    var top = lead[0];
    $("#quizBox").hidden = true; var R = $("#quizResult"); R.hidden = false;
    /* The result is revealed after the player tells us where to send it: name, email and phone. */
    if (!window.SF_LIVE && !S.get("suitLead", null)) { suitGate(R, top, c, tot); return; }
    R.innerHTML = '<span class="big" style="color:' + suitColor(top) + '">' + pip(top, "big") + '</span><div class="form-grid" style="gap:10px"><p class="eyebrow">Your suit</p><h3 style="font-size:2.4rem">' +
      SUIT[top].sym + " You're a " + SUIT[top].name + "</h3><p class='lede'>" + SUIT[top].line + " " + SUIT[top].love + '</p><div class="bars">' +
      ORDER.map(function (s) { var pct = Math.round(c[s] / tot * 100); if (s === top) pct = Math.max(pct, 1 + Math.max.apply(null, ORDER.filter(function (k) { return k !== top; }).map(function (k) { return Math.round(c[k] / tot * 100); }))); return '<div class="bar' + (s === top ? " win" : "") + '"><span>' + SUIT[s].sym + " " + SUIT[s].name + '</span><i><b data-w="' + pct + '" style="background:' + (SUIT[s].red ? "var(--red)" : "var(--cream)") + '"></b></i><span>' + pct + "%</span></div>"; }).join("") +
      '</div>' + (tieNote ? '<p class="hint tie">⚖ ' + esc(tieNote) + "</p>" : "") + '<div class="selfwords"><p><b>You see yourself as:</b> ' + esc(qw.self.join(", ")) + '</p><p><b>Friends and family say:</b> ' + esc(qw.others.join(", ")) + "</p>" +
      (both.length ? '<p class="hint">You and the people who know you best agree on <b>' + esc(both.join(", ")) + "</b>. That's the real you.</p>" : '<p class="hint">You and the people who know you see different sides of you. Both belong on your card.</p>') +
      '<p><b>Your honest fault:</b> ' + esc(qw.fault) + ' <span class="hint">· Face Down (private). Owning it is a strong play.</span></p></div>' +
      '<div class="chips" style="margin-top:6px"><button class="btn gold sm" type="button" data-use="' + top + '">That\'s me. Use ' + SUIT[top].name + "</button>" +
      ORDER.filter(function (s) { return s !== top; }).map(function (s) { return '<button class="btn ghost sm" type="button" data-use="' + s + '">I\'m more ' + SUIT[s].name + "</button>"; }).join("") +
      '<button class="btn ghost sm" type="button" id="retake">Retake</button></div>' +
      (window.SF_LIVE && window.SF_LIVE.seated ? "" : '<div class="suitcta"><h4>Your ' + SUIT[top].name + ' card is ready for the table.</h4><p class="hint">Take your seat to build your Face and get dealt your 52.' + (LAUNCH.open ? " The $21 buy-in is waived right now." : "") + '</p><div class="row"><a class="btn gold" href="membership.html">' + (LAUNCH.open ? "Get dealt in for $2.10" : "Get dealt in") + '</a>' + (window.SF_LIVE ? "" : '<button class="btn ghost" type="button" data-login>Create my account</button>') + "</div></div>") +
      "</div>";
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
  var TABLES = [
    ["marriage", "Marriage-minded", "#9B1B30", "Looking for my forever person"],
    ["longterm", "Long-term", "#1E7A4C", "A real relationship that lasts"],
    ["seeing", "Dating to see", "#C8961E", "Open to where it goes"],
    ["friends", "Friends first", "#D2622A", "Start as friends, see what grows"],
    ["casual", "Casual", "#6E3A9E", "Fun, easygoing, no pressure"],
    ["open", "Open / ENM", "#C23B7A", "Ethically non-monogamous"],
    ["friendship", "Friendship only", "#6B7A2A", "No dating. Meet people at Private Tables"]
  ];
  var TABLE = {}; TABLES.forEach(function (t) { TABLE[t[0]] = t; });
  if (TABLE[P.looking]) P.felt = TABLE[P.looking][2]; /* felt always follows the table */
  var LOOK = TABLES.map(function (t) { return [t[0], t[1]]; });
  if (P.looking === "serious") P.looking = "longterm";
  if (!TABLE[P.looking]) P.looking = "longterm";
  P.felt = TABLE[P.looking][2];
  var SHOW = [["women", "Women"], ["men", "Men"], ["everyone", "Everyone"]];
  var INTERESTS = ["Live music", "Hiking", "Cooking", "Board games", "Football", "Church", "Travel", "Dogs", "Cats", "Fitness", "Art", "Movies", "Brunch", "Fishing", "Reading", "Dancing"];
  var FELTS = [["#1E6347", "Felt green"], ["#7A1022", "Card red"], ["#2B2730", "Card black"], ["#5B2E4F", "Velvet"], ["#8A5A1C", "Brass"], ["#14544F", "Teal felt"]];
  function chipGroup(el, opts, key) {
    el.innerHTML = opts.map(function (o) { return '<button type="button" class="chip" aria-pressed="' + (P[key] === o[0]) + '" data-v="' + o[0] + '">' + o[1] + "</button>"; }).join("");
    el.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (!b) return; P[key] = b.getAttribute("data-v"); $$(".chip", el).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); onChange(); });
  }
  function renderTables() {
    $("#lookChips").innerHTML = TABLES.map(function (t) { return '<button type="button" class="tablepick" aria-pressed="' + (P.looking === t[0]) + '" data-v="' + t[0] + '" style="--tc:' + t[2] + '"><i></i><b>' + t[1] + '</b><span>' + t[3] + "</span></button>"; }).join("");
  }
  renderTables();
  $("#lookChips").addEventListener("click", function (e) { var b = e.target.closest(".tablepick"); if (!b) return; P.looking = b.getAttribute("data-v"); P.felt = TABLE[P.looking][2]; renderTables(); onChange(); });
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
  /* ---------- Card style: identity themes (free, opt-in), premium themes, stickers ---------- */
  var THEMES = [
    // [id, label, group, price (USD, 0 = free), css background for the frame ring, note]
    ["private", "Private", "free", 0, "", "No identity theme. Your table's felt and the classic card face."],
    ["classic", "Heterosexual", "identity", 0, "linear-gradient(90deg,#9B1B30 0 50%,#2B2730 50%)", "Heterosexual, in classic card red and black"],
    ["rainbow", "Rainbow / Gay", "identity", 0, "linear-gradient(90deg,#E40303,#FF8C00,#FFED00,#008026,#24408E,#732982)", "Gay and the wider LGBTQ+ community"],
    ["lesbian", "Lesbian", "identity", 0, "linear-gradient(90deg,#D52D00,#FF9A56,#FFFFFF,#D362A4,#A30262)", "Lesbian pride"],
    ["bi", "Bisexual", "identity", 0, "linear-gradient(90deg,#D60270 0 40%,#9B4F96 40% 60%,#0038A8 60%)", "Bisexual pride"],
    ["pan", "Pansexual", "identity", 0, "linear-gradient(90deg,#FF218C 0 33%,#FFD800 33% 66%,#21B1FF 66%)", "Pansexual pride"],
    ["trans", "Transgender", "identity", 0, "linear-gradient(90deg,#5BCEFA,#F5A9B8,#FFFFFF,#F5A9B8,#5BCEFA)", "Trans pride"],
    ["nonbinary", "Nonbinary", "identity", 0, "linear-gradient(90deg,#FCF434,#FFFFFF,#9C59D1,#2C2C2C)", "Nonbinary pride"],
    ["genderqueer", "Genderqueer", "identity", 0, "linear-gradient(90deg,#B57EDC,#FFFFFF,#4A8123)", "Genderqueer pride"],
    ["ace", "Asexual", "identity", 0, "linear-gradient(90deg,#000000,#A3A3A3,#FFFFFF,#800080)", "Asexual pride"],
    ["furry", "Furry 🐾", "community", 0, "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cg fill='%23FAF7F0' fill-opacity='.85' transform='rotate(-14 22 22)'%3E%3Cellipse cx='22' cy='28' rx='8' ry='6.5'/%3E%3Cellipse cx='12.5' cy='19' rx='3' ry='4'/%3E%3Cellipse cx='19' cy='14' rx='3' ry='4.2'/%3E%3Cellipse cx='25.5' cy='14' rx='3' ry='4.2'/%3E%3Cellipse cx='31.5' cy='19' rx='3' ry='4'/%3E%3C/g%3E%3C/svg%3E\") 0 0/30px 30px,linear-gradient(135deg,#6B3E14,#B8742A 55%,#E0A458)", "Furry community: paw prints on warm fur tones"],
    ["neon", "Vegas Neon", "premium", 4.20, "linear-gradient(90deg,#FF2E88,#FFE66D,#2EF2C2,#FF2E88)", "Glowing marquee frame"],
    ["gold", "Gold Leaf", "premium", 2.10, "linear-gradient(135deg,#7a5410,#E8C46A,#fff3c4,#B8862F,#7a5410)", "High roller gold"],
    ["velvet", "Velvet Rope", "premium", 2.10, "repeating-linear-gradient(45deg,#8e1222 0 10px,#b4182f 10px 20px)", "Velvet rope red"],
    ["midnight", "Midnight Felt", "premium", 2.10, "radial-gradient(circle at 30% 20%,#FFE7A3 0 1px,transparent 2px) 0 0/18px 18px,linear-gradient(135deg,#2B2730,#4A1F5C)", "Starry back room"]
  ];
  /* Sticker packs: [id, look, pack]. Stamps and showtime stickers are original art: no real names, faces or logos. */
  var PACKS = { earned: ["Earned", 0], free: ["Free", 0], roller: ["High Roller", 2.10], passport: ["Passport Stamps", 2.10], showtime: ["Showtime", 2.10] };
  function stamp(city, sub, c, shape) { return '<b class="pstamp ' + (shape || "") + '" style="--c:' + c + '">' + city + "<small>" + sub + "</small></b>"; }
  var STICKERS = [
    ["dice", "🎲", "free"], ["chip", "🪙", "free"], ["spade", "♠️", "free"],
    ["rose", "🌹", "roller"], ["crown", "👑", "roller"], ["cocktail", "🍸", "roller"], ["fire", "🔥", "roller"], ["star", "⭐", "roller"], ["paw", "🐾", "roller"], ["kiss", "💋", "roller"], ["sparkle", "✨", "roller"], ["slot", "🎰", "roller"],
    ["vegas", stamp("LAS VEGAS", "NV ✈ ARRIVED", "#9B1B30"), "passport"], ["paris", stamp("PARIS", "FR · ADMIS", "#6E3A9E", "rnd"), "passport"], ["tokyo", stamp("TOKYO", "JP 入国", "#C23B7A", "rnd"), "passport"],
    ["nola", stamp("NEW ORLEANS", "LA · LAISSEZ", "#1E7A4C"), "passport"], ["nyc", stamp("NEW YORK", "NY · JFK", "#2B2730"), "passport"], ["cancun", stamp("CANCÚN", "MX · ENTRADA", "#D2622A", "rnd"), "passport"],
    ["rome", stamp("ROMA", "IT · ARRIVO", "#8A5A1C"), "passport"], ["nashville", stamp("NASHVILLE", "TN · BNA", "#C8961E", "rnd"), "passport"], ["bahamas", stamp("NASSAU", "BS · ARRIVED", "#1E7A4C", "rnd"), "passport"],
    ["first1000", stamp("FIRST 1,000", "FOUNDING PLAYER", "#C8961E"), "earned"],
    ["ref1", stamp("SEAT SAVER", "INVITE № 1", "#9B1B30", "rnd"), "earned"], ["ref2", stamp("DOUBLE DOWN", "INVITE № 2", "#1E7A4C"), "earned"], ["ref3", stamp("THREE OF A KIND", "INVITE № 3", "#6E3A9E", "rnd"), "earned"],
    ["ref4", stamp("FOUR ACES", "INVITE № 4", "#C23B7A"), "earned"], ["ref5", stamp("HIGH FIVE", "INVITE № 5", "#D2622A", "rnd"), "earned"], ["ref6", stamp("HOT HAND", "INVITE № 6", "#9B1B30"), "earned"],
    ["ref7", stamp("LUCKY SEVEN", "INVITE № 7", "#1E7A4C", "rnd"), "earned"], ["ref8", stamp("CRAZY EIGHTS", "INVITE № 8", "#C8961E"), "earned"], ["ref9", stamp("DEALER'S CHOICE", "INVITE № 9", "#6E3A9E", "rnd"), "earned"],
    ["ref10", stamp("TABLE BOSS", "INVITE № 10", "#C23B7A"), "earned"], ["ref11", stamp("FULL HOUSE", "INVITE № 11", "#D2622A", "rnd"), "earned"], ["ref12", stamp("ROYAL FLUSH", "INVITE № 12", "#8A5A1C"), "earned"],
    ["carpet", "🎞️", "showtime"], ["popcorn", "🍿", "showtime"], ["clap", "🎬", "showtime"], ["trophy", "🏆", "showtime"], ["mic", "🎤", "showtime"], ["shades", "🕶️", "showtime"], ["limo", "🚘", "showtime"], ["camera", "📸", "showtime"], ["walk", "🌟", "showtime"]
  ];
  var THEME = {}; THEMES.forEach(function (t) { THEME[t[0]] = t; });
  P.theme = P.theme === "straight" ? "classic" : (P.theme || "private"); P.stickers = P.stickers || []; P.owned = P.owned || [];
  function owns(id) { return P.owned.indexOf(id) > -1; }
  function earnedHas(id) { if (id === "first1000") return !!P.founderNo; var n = +String(id).replace("ref", ""); return (P.refCount || 0) >= n; }
  function priceTag(n) { return n ? "$" + n.toFixed(2) : "Free"; }
  var styleField = document.createElement("div"); styleField.className = "field cardstyle";
  styleField.innerHTML = '<span style="font-weight:700">Card style</span>' +
    '<p class="hint" style="margin:0">Optional. An identity theme shows on your card for everyone in your deck to see, so pick one only if you want it known. <b>Private</b> shows no theme.</p>' +
    '<div class="thgroup"><b>Identity &amp; community themes <span class="free">Free</span></b><div class="themes" id="thFree"></div></div>' +
    '<div class="thgroup"><b>House themes <span class="prem">Premium</span></b><div class="themes" id="thPrem"></div></div>' +
    '<div class="thgroup"><b>Stickers <span class="hint">(up to 3 on your card)</span></b><div id="stk"></div></div>' +
    '<button class="btn ghost sm" type="button" id="openCage">Visit the Cashier\'s Cage</button>';
  $("#lookChips").closest(".field").after(styleField);
  function renderStyle() {
    function tile(t) { var locked = t[3] && !owns(t[0]); return '<button type="button" class="thpick" data-th="' + t[0] + '" aria-pressed="' + (P.theme === t[0]) + '" title="' + esc(t[5]) + '"><i style="background:' + (t[4] || "var(--felt-c," + P.felt + ")") + '"></i><span>' + esc(t[1]) + "</span>" + (locked ? '<em>' + priceTag(t[3]) + "</em>" : "") + "</button>"; }
    $("#thFree").innerHTML = THEMES.filter(function (t) { return t[2] !== "premium"; }).map(tile).join("");
    $("#thPrem").innerHTML = THEMES.filter(function (t) { return t[2] === "premium"; }).map(tile).join("");
    $("#stk").innerHTML = Object.keys(PACKS).map(function (pk) { var pv = PACKS[pk], open = !pv[1] || owns("pack_" + pk) || (pk === "roller" && owns("stickers"));
      if (pk === "earned") return '<div class="stkpack"><span class="stkhead">Earned <span class="hint">(First 1,000 and one for each friend who joins, up to 12)</span></span><div class="stickers">' + STICKERS.filter(function (k) { return k[2] === "earned"; }).map(function (k) { var got = earnedHas(k[0]); return '<button type="button" class="stkpick wide' + (got ? "" : " earnlock") + '" data-stk="' + k[0] + '" aria-pressed="' + (P.stickers.indexOf(k[0]) > -1) + '"' + (got ? "" : ' data-earn="' + k[0] + '"') + ">" + k[1] + (got ? "" : "<em>🔒</em>") + "</button>"; }).join("") + "</div></div>";
      return '<div class="stkpack"><span class="stkhead">' + pv[0] + (open ? "" : ' <button type="button" class="unlockbtn" data-pack="' + pk + '">Unlock · $' + pv[1].toFixed(2) + "</button>") + '</span><div class="stickers">' +
        STICKERS.filter(function (k) { return k[2] === pk; }).map(function (k) { return '<button type="button" class="stkpick' + (pk === "passport" ? " wide" : "") + '" data-stk="' + k[0] + '" aria-pressed="' + (P.stickers.indexOf(k[0]) > -1) + '"' + (open ? "" : ' data-locked="' + pk + '"') + ">" + k[1] + (open ? "" : "<em>🔒</em>") + "</button>"; }).join("") + "</div></div>"; }).join("");
  }
  function buy(id, label, price, then) {
    if (houseCode() && window.SF_LIVE) { window.SF_LIVE.rpc("house_comp_check", { p_code: houseCode() }).then(function (r) { if (r.error || !r.data) { toast(r.error ? r.error.message : "Comp not valid."); return; } if (!owns(id)) P.owned.push(id); saveP(); toast("🎩 " + label + " comped by the house."); then && then(); }); return; }
    if (PUBLIC_SITE) { toast("Paid themes and sticker packs open soon. Free and earned ones are ready now."); return; }
    var m = modal('<h3 style="font-size:1.8rem">' + esc(label) + '</h3><p class="lede" style="margin:6px 0 12px">' + priceTag(price) + ', one time. It\'s yours for as long as you\'re a member.</p>' +
      '<div class="notice pv"><b>Preview mode.</b> On the live site this opens a secure Stripe checkout (card, Apple Pay, Google Pay, Cash App Pay). Here you can try it free.</div>' +
      '<div class="row" style="margin-top:10px"><button class="btn gold" type="button" id="buyGo">Try it (preview)</button><button class="btn ghost" type="button" data-close>Not now</button></div>');
    $("#buyGo", m).onclick = function () { if (!owns(id)) P.owned.push(id); saveP(); closeModal(); toast(label + " unlocked."); jackpot(2000); then && then(); };
  }
  styleField.addEventListener("click", function (e) {
    var t = e.target.closest("[data-th]"), k = e.target.closest("[data-stk]"), pb = e.target.closest("[data-pack]");
    if (pb) { var pk2 = pb.getAttribute("data-pack"); return buy("pack_" + pk2, PACKS[pk2][0] + " sticker pack", PACKS[pk2][1], function () { renderStyle(); }); }
    if (t) { var th = THEME[t.getAttribute("data-th")]; var apply = function () { P.theme = th[0]; renderStyle(); onChange(); };
      if (th[3] && !owns(th[0])) return buy(th[0], th[1] + " theme", th[3], apply); return apply(); }
    if (k && k.hasAttribute("data-earn")) { var ek = k.getAttribute("data-earn"); toast(ek === "first1000" ? "The First 1,000 badge goes to members who chose the $21 Buy-In during the launch offer." : "Unlocks when " + ek.replace("ref", "") + " friend" + (ek === "ref1" ? "" : "s") + " you invited join SuiteFace. Share your invite link from Invite."); return; }
    if (k) { var id = k.getAttribute("data-stk");
      if (k.hasAttribute("data-locked")) { var pk = k.getAttribute("data-locked"); return buy("pack_" + pk, PACKS[pk][0] + " sticker pack", PACKS[pk][1], function () { renderStyle(); }); }
      var at = P.stickers.indexOf(id); if (at > -1) P.stickers.splice(at, 1); else { if (P.stickers.length >= 3) { toast("Up to 3 stickers. Tap one to remove it."); return; } P.stickers.push(id); }
      renderStyle(); onChange(); }
    if (e.target.closest("#openCage")) openCage();
  });
  function openCage() {
    var ITEMS = [
      ["Premium card themes", "Vegas Neon, Gold Leaf, Velvet Rope, Midnight Felt", "$2.10–$4.20"],
      ["High Roller sticker pack", "Nine extra stickers for your card", "$2.10"],
      ["Passport Stamps sticker pack", "Vegas, Paris, Tokyo, New Orleans, NYC, Cancún, Rome, Nashville, Nassau", "$2.10"],
      ["Showtime sticker pack", "Red carpet, popcorn, clapboard, trophy, mic, shades, limo and more", "$2.10"],
      ["Peek", "See one card that has already played you", "$2.10"],
      ["High Card", "Your Play arrives with a gold spotlight, so they notice it first", "$1.05"],
      ["Fresh Shuffle", "Re-deal your 52 now instead of waiting for new players", "$2.10"],
      ["Comp a friend", "Gift a friend's $21 Buy-In; they get a comp code", "$21.00"],
      ["Table merch", "Joker hats, chips and decks from the SuiteFace store", "Coming soon"]
    ];
    modal('<p class="eyebrow">The Cashier\'s Cage</p><h3 style="font-size:2rem">Extras for your table</h3><p class="lede" style="margin:6px 0 12px">Everything here is optional. Rank is never for sale: your 52 is always dealt by fit.</p><div class="cage">' +
      ITEMS.map(function (it) { return '<div class="cageitem"><div><b>' + it[0] + "</b><span>" + it[1] + '</span></div><em>' + it[2] + "</em></div>"; }).join("") +
      '</div><p class="hint" style="margin-top:10px">Identity and community themes are always free.</p>');
  }
  window.SF_openCage = openCage;
  renderStyle();
  /* Felt now follows the table you pick (what you're looking for). */

  var F = { name: $("#fName"), handle: $("#fHandle"), zip: $("#fZip"), bio: $("#fBio") };
  /* Birthday: month, day, year. Age is worked out fresh every time, so it goes up on the birthday itself. */
  function ageFrom(dob) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob || ""); if (!m) return NaN; var t = new Date(), a = t.getFullYear() - +m[1];
    if (t.getMonth() + 1 < +m[2] || (t.getMonth() + 1 === +m[2] && t.getDate() < +m[3])) a--; return a; }
  window.SF_ageFrom = ageFrom; window.SF_getDob = function () { return P.dob || ""; };
  (function () {
    var MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var sm = $("#dobM"), sd = $("#dobD"), sy = $("#dobY"), yNow = new Date().getFullYear();
    sm.innerHTML = '<option value="">Month</option>' + MN.map(function (n, i) { return '<option value="' + (i + 1) + '">' + n + "</option>"; }).join("");
    sy.innerHTML = '<option value="">Year</option>' + Array.apply(null, Array(83)).map(function (_, i) { var y = yNow - 18 - i; return '<option value="' + y + '">' + y + "</option>"; }).join("");
    function days() { var mm = +sm.value || 1, yy = +sy.value || 2000, n = new Date(yy, mm, 0).getDate(), keep = sd.value;
      sd.innerHTML = '<option value="">Day</option>' + Array.apply(null, Array(n)).map(function (_, i) { return '<option value="' + (i + 1) + '">' + (i + 1) + "</option>"; }).join("");
      if (keep && +keep <= n) sd.value = keep; }
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function sync() { days();
      P.dob = sm.value && sd.value && sy.value ? sy.value + "-" + pad(+sm.value) + "-" + pad(+sd.value) : "";
      var a = ageFrom(P.dob); P.age = isNaN(a) ? "" : String(a);
      $("#dobAge").textContent = isNaN(a) ? "" : "Your card shows " + a + ". It updates on your birthday.";
      onChange(); }
    window.SF_setDob = function (d) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ""); if (!m) return; sy.value = String(+m[1]); sm.value = String(+m[2]); days(); sd.value = String(+m[3]); var a = ageFrom(d); $("#dobAge").textContent = isNaN(a) ? "" : "Your card shows " + a + ". It updates on your birthday."; };
    var m0 = /^(\d{4})-(\d{2})-(\d{2})$/.exec(P.dob || ""); days();
    if (m0) { sy.value = String(+m0[1]); sm.value = String(+m0[2]); days(); sd.value = String(+m0[3]); var a0 = ageFrom(P.dob); P.age = String(a0); $("#dobAge").textContent = "Your card shows " + a0 + ". It updates on your birthday."; }
    else P.age = "";
    [sm, sd, sy].forEach(function (s) { s.addEventListener("change", sync); });
  })();
  Object.keys(F).forEach(function (k) { F[k].value = P[k] || ""; F[k].addEventListener("input", function () { P[k] = F[k].value; if (k === "bio") $("#bioCount").textContent = F[k].value.length; onChange(); }); });
  $("#bioCount").textContent = (P.bio || "").length;
  /* ---------- Build my Face from a social account ---------- */
  (function () {
    var wrap = $("#socBtns"); if (!wrap) return;
    var PROV = {
      facebook: { name: "Facebook", gets: ["Name", "Profile photo", "Email", "Birthday and hometown (after Meta approves SuiteFace)"], sample: { name: "Jordan", handle: "jordan.k", bio: "Weekend hiker, weeknight cook. Looking for my person to share both.", color: "#8E2C3A" } },
      tiktok: { name: "TikTok", gets: ["Display name", "Profile photo", "@username", "Bio"], sample: { name: "Jordan", handle: "jordanmoves", bio: "Dance breaks in the kitchen. Coffee snob. Dog dad.", color: "#2B2730" } },
      snapchat: { name: "Snapchat", gets: ["Display name", "Bitmoji avatar"], sample: { name: "Jordan", handle: "jordsnaps", bio: "", color: "#E8C46A" } },
      x: { name: "X", gets: ["Name", "@username", "Profile photo", "Bio", "Location"], sample: { name: "Jordan", handle: "jordan_k", bio: "Birmingham. Live music, long walks, strong opinions about barbecue.", color: "#4A4552" } },
      google: { name: "Google", gets: ["Name", "Profile photo", "Email"], sample: { name: "Jordan", handle: "", bio: "", color: "#2F8A62" } },
      apple: { name: "Apple", gets: ["Name", "Email (can be hidden)"], sample: { name: "Jordan", handle: "", bio: "", color: "#36313D" } }
    };
    var linked = S.get("socialLinked", []);
    function mark() { $$(".socb", wrap).forEach(function (b) { b.classList.toggle("linked", linked.indexOf(b.getAttribute("data-prov")) > -1); });
      $("#socLinked").textContent = linked.length ? "Linked: " + linked.map(function (k) { return PROV[k].name; }).join(", ") + ". Interests, quiz and preferences always come from you." : ""; }
    /* Live: what's linked comes from the account itself, and only switched-on providers can be linked. */
    document.addEventListener("sf:live", function () {
      if (!window.SF_LIVE) return;
      var u = (window.SF_LIVE.session() || {}).user || {}, ids = u.identities || [];
      linked = ids.map(function (i) { return i.provider === "twitter" ? "x" : i.provider; }).filter(function (k) { return PROV[k]; });
      mark();
      window.SF_AUTH.providers().then(function (on) {
        var ok = on.map(function (p) { return p[0] === "twitter" ? "x" : p[0]; });
        $$(".socb", wrap).forEach(function (b) { var k = b.getAttribute("data-prov"), avail = ok.indexOf(k) > -1 || linked.indexOf(k) > -1; b.classList.toggle("soon", !avail); b.title = avail ? "" : "Opens soon"; });
        if (!ok.length && !linked.length) $("#socLinked").textContent = "Linking social accounts opens soon. Fill in your Face by hand for now.";
      });
      // Just came back from linking: offer the photo and name that account shared.
      var m = location.search.match(/[?&]linked=(\w+)/);
      if (m) { var idt = ids.filter(function (i) { return i.provider === m[1]; })[0], d = (idt && idt.identity_data) || {};
        if (!P.name && (d.full_name || d.name)) { P.name = String(d.full_name || d.name).split(" ")[0].slice(0, 40); F.name.value = P.name; }
        if (!P.photo && /^https:\/\//.test(d.avatar_url || d.picture || "")) P.photo = d.avatar_url || d.picture;
        saveP(); renderCard(); onChange(); }
    });
    function samplePhoto(letter, color) {
      var c = document.createElement("canvas"); c.width = c.height = 320; var x = c.getContext("2d");
      var g = x.createLinearGradient(0, 0, 320, 320); g.addColorStop(0, color); g.addColorStop(1, "#17151B"); x.fillStyle = g; x.fillRect(0, 0, 320, 320);
      x.fillStyle = "#FAF7F0"; x.font = "900 170px 'Big Shoulders Display', Impact, sans-serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(letter, 160, 172);
      return c.toDataURL("image/jpeg", .85);
    }
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest("[data-prov]"); if (!b) return; var k = b.getAttribute("data-prov"), pv = PROV[k];
      if (window.SF_LIVE && b.classList.contains("soon")) { toast(pv.name + " linking opens soon. Fill in your Face by hand for now."); return; }
      if (window.SF_LIVE && window.SF_LIVE.linkIdentity) { window.SF_LIVE.linkIdentity(k).catch(function (x) { toast((x && x.message) || "Couldn't link that account."); }); return; }
      var sm = pv.sample;
      var fields = [["photo", "Profile photo", !!sm.color], ["name", "Face Name: " + sm.name, true], ["handle", sm.handle ? "Calling Card: @" + sm.handle : "", !!sm.handle], ["bio", sm.bio ? "Face Value: “" + sm.bio + "”" : "", !!sm.bio]].filter(function (f) { return f[2] && f[1]; });
      var m = modal('<h3 style="font-size:1.8rem">Build from ' + esc(pv.name) + '</h3><p class="lede" style="margin:6px 0">' + esc(pv.name) + ' can share: <b>' + esc(pv.gets.join(", ")) + '</b>. Choose what to use:</p>' +
        '<div class="imp">' + fields.map(function (f) { return '<label><input type="checkbox" checked data-f="' + f[0] + '"> <span>' + esc(f[1]) + "</span></label>"; }).join("") + "</div>" +
        '<p class="hint">SuiteFace never posts to your account, never reads your messages or friends list, and you can unlink anytime in Settings. Your @username is checked so no one else has it.</p>' +
        '<div class="notice pv"><b>Preview mode.</b> This fills in sample details so you can see how it works. On the live site, ' + esc(pv.name) + ' opens to approve the link and your real details come through.</div>' +
        '<div class="row" style="margin-top:10px"><button class="btn gold" type="button" id="impGo">Use these on my Face</button><button class="btn ghost" type="button" data-close>Cancel</button></div>');
      $("#impGo", m).onclick = function () {
        $$("[data-f]", m).forEach(function (cb) { if (!cb.checked) return; var f = cb.getAttribute("data-f");
          if (f === "photo") { P.photo = samplePhoto(sm.name.charAt(0), sm.color); P.photoLive = null; }
          if (f === "name") { P.name = sm.name; F.name.value = sm.name; }
          if (f === "handle") { P.handle = sm.handle; F.handle.value = P.handle; if (window.SF_checkHandle) window.SF_checkHandle(); }
          if (f === "bio") { P.bio = sm.bio; F.bio.value = sm.bio; $("#bioCount").textContent = sm.bio.length; } });
        if (P.photo) { var ph = $("#ph"); if (ph) { ph.style.background = "url(" + P.photo + ") center/cover"; ph.textContent = ""; } }
        if (linked.indexOf(k) < 0) linked.push(k); S.set("socialLinked", linked); mark(); saveP(); onChange(); closeModal();
        toast(pv.name + " linked. Check your card on the right.");
      };
    });
    mark();
  })();
  /* ---------- Live Photo: taken in the SuiteFace camera, never uploaded ---------- */
  (function () {
    var btn = $("#camBtn"); if (!btn) return;
    var POSES = ["Give a thumbs up 👍", "Hold up two fingers ✌️", "Touch your ear 👂", "Wave at the camera 👋", "Point up ☝️", "Hand on your chin 🤔", "Big smile, eyes open 😁", "Make an OK sign 👌"];
    btn.addEventListener("click", function () {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { toast("This browser can't open the camera. Try Safari or Chrome on your phone."); return; }
      var pose = POSES[Math.floor(Math.random() * POSES.length)], stream = null, shot = null;
      var m = modal('<p class="eyebrow">Live Photo</p><h3 style="font-size:2rem">Strike the pose</h3>' +
        '<div class="cam"><video id="camV" playsinline autoplay muted></video><canvas id="camC" hidden></canvas><div class="camring"></div><div class="campose" id="camPose">' + esc(pose) + '</div><div class="camcount" id="camN" hidden></div></div>' +
        '<p class="hint" id="camMsg">Good light, face the camera, and do the pose. A new pose is picked every time so the photo is taken right now, by you.</p>' +
        '<div class="row" style="margin-top:10px"><button class="btn gold" type="button" id="camShot" disabled>Take it (3 · 2 · 1)</button><button class="btn ghost" type="button" id="camUse" hidden>Use this photo</button><button class="btn ghost" type="button" id="camRe" hidden>Retake</button></div>' +
        '<p class="hint" style="margin-top:8px">📷 Live Photo means it was taken in SuiteFace just now, not uploaded or edited. It is not ID verification: only the ✓ ID Seal (license, state ID or passport plus selfie, through Stripe Identity) verifies who you are and unlocks A, K, Q and J.</p>');
      var v = $("#camV", m), c = $("#camC", m);
      function stop() { if (stream) stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; }
      var obs = new MutationObserver(function () { if (!document.body.contains(m)) { stop(); obs.disconnect(); } }); obs.observe(document.body, { childList: true, subtree: true });
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 960 }, height: { ideal: 960 } }, audio: false })
        .then(function (s) { stream = s; v.srcObject = s; $("#camShot", m).disabled = false; })
        .catch(function () { $("#camMsg", m).innerHTML = "<b>Camera blocked.</b> Allow camera access for suiteface.com in your browser settings, then try again. You can still upload a photo, but it won't get the Live Photo badge."; });
      $("#camShot", m).addEventListener("click", function () {
        var n = 3, el = $("#camN", m), b = this; b.disabled = true; el.hidden = false; el.textContent = n;
        var t = setInterval(function () { n--; if (n > 0) { el.textContent = n; return; } clearInterval(t); el.hidden = true;
          var sz = 480, w = v.videoWidth, h = v.videoHeight, mm = Math.min(w, h); c.width = c.height = sz; var x = c.getContext("2d");
          x.translate(sz, 0); x.scale(-1, 1); x.drawImage(v, (w - mm) / 2, (h - mm) / 2, mm, mm, 0, 0, sz, sz);
          shot = c.toDataURL("image/jpeg", .86); v.hidden = true; c.hidden = false;
          $("#camUse", m).hidden = false; $("#camRe", m).hidden = false; b.hidden = true; }, REDUCED ? 300 : 800);
      });
      $("#camRe", m).addEventListener("click", function () { pose = POSES[Math.floor(Math.random() * POSES.length)]; $("#camPose", m).textContent = pose;
        v.hidden = false; c.hidden = true; shot = null; this.hidden = true; $("#camUse", m).hidden = true; var s = $("#camShot", m); s.hidden = false; s.disabled = false; });
      $("#camUse", m).addEventListener("click", function () {
        if (!shot) return; P.photo = shot; P.photoLive = { at: new Date().toISOString(), pose: pose };
        if (window.SF_LIVE && window.SF_LIVE.setPhoto) window.SF_LIVE.setPhoto(shot, "live", pose);
        stop(); saveP(); onChange(); closeModal(); toast("📷 Live Photo added to your card.");
      });
    });
  })();
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
        P.photo = c.toDataURL("image/jpeg", .84); P.photoLive = null; onChange(); toast("Portrait added. Want the 📷 Live Photo badge? Use Take a photo now.");
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
    var hm = !h ? "Pick a Calling Card, like jordan.plays." :
      !/^[a-z0-9_.]{3,24}$/.test(h) ? "Use 3–24 letters, numbers, dots or underscores." :
        /^\.|\.$|\.\./.test(h) ? "Dots can't start, end or repeat." :
          RESERVED.indexOf(h) > -1 ? "That Calling Card is reserved. Try another." : "";
    set("fHandleErr", hm);
    var a = ageFrom(P.dob); P.age = isNaN(a) ? "" : String(a);
    set("fZipErr", !P.zip ? "Add your ZIP code so we can find people near you." : !/^\d{5}$/.test(P.zip) ? "Use a 5-digit ZIP code." : (zipReady && !ZIPS[P.zip]) ? "We couldn't find that ZIP code. Check it and try again." : "");
    set("fAgeErr", !P.dob ? "Pick your month, day and year." : a < 18 ? "SuiteFace is for adults 18 and over." : a > 100 ? "Check your birthday." : "");
    return ok;
  }
  function strength() {
    var pts = [!!P.photo, !!P.name.trim(), !!P.handle.trim(), parseInt(P.age, 10) >= 18, !!ZIPS[P.zip], P.bio.trim().length >= 30, !!P.mySuit, P.interests.length >= 3];
    return Math.round(pts.filter(Boolean).length / pts.length * 100);
  }
  function updateMeter() { var s = strength(); $("#faceMeter").style.width = s + "%"; $("#pct").textContent = s + "%"; }
  /* I identify as + Looking for (check all that apply): always a gate, so the deck only holds people you want to see. */
  var IAM = ["Woman", "Man", "Trans woman", "Trans man", "Nonbinary", "Genderfluid", "Agender", "Two-Spirit", "Another identity"];
  var SEEKS = [["Women", ["Woman"]], ["Men", ["Man"]], ["Trans women", ["Trans woman"]], ["Trans men", ["Trans man"]], ["Nonbinary & gender-diverse", ["Nonbinary", "Genderfluid", "Agender", "Two-Spirit", "Another identity"]], ["Everyone", null]];
  function seekPicked() { var pr = (P.prefs || {}).gender; if (!pr || !pr.sel || !pr.sel.length || pr.sel.indexOf(OPEN) > -1) return [];
    return SEEKS.filter(function (s) { return s[1] && s[1].every(function (v) { return pr.sel.indexOf(v) > -1; }); }).map(function (s) { return s[0]; }); }
  function seekLine() { var me = (P.id || {}).gender, sk = seekPicked(); if (!me && !sk.length) return "";
    return (me && me !== PNTS ? me : "") + (sk.length ? (me && me !== PNTS ? " · seeking " : "Seeking ") + sk.join(", ") : ""); }
  function renderIam() {
    var box = $("#iamBox"); if (!box) return; var me = (P.id || {}).gender, sk = seekPicked();
    $("#iamChips").innerHTML = IAM.map(function (g) { return '<button type="button" class="chip" data-iam="' + esc(g) + '" aria-pressed="' + (me === g) + '">' + esc(g) + "</button>"; }).join("");
    $("#seekChips").innerHTML = SEEKS.map(function (s) { return '<button type="button" class="chip" data-seek="' + esc(s[0]) + '" aria-pressed="' + (sk.indexOf(s[0]) > -1) + '">' + (sk.indexOf(s[0]) > -1 ? "✓ " : "") + esc(s[0]) + "</button>"; }).join("");
    $("#iamSum").textContent = seekLine() ? "Your card says: " + seekLine() : "";
  }
  function wireIam() {
    var box = $("#iamBox"); if (!box || box.wired) return; box.wired = true;
    box.addEventListener("click", function (e) {
      var g = e.target.closest("[data-iam]"), s = e.target.closest("[data-seek]");
      P.id = P.id || {}; P.prefs = P.prefs || {};
      if (g) { P.id.gender = g.getAttribute("data-iam"); }
      if (s) { var name = s.getAttribute("data-seek"), cur = seekPicked().filter(function (x) { return x !== "Everyone"; });
        if (name === "Everyone") cur = cur.length === SEEKS.length - 1 ? [] : ["Everyone"];
        else { var i = cur.indexOf(name); if (i > -1) cur.splice(i, 1); else cur.push(name); }
        var sel = []; if (cur.indexOf("Everyone") > -1) sel = [OPEN]; else cur.forEach(function (n) { SEEKS.filter(function (x) { return x[0] === n; })[0][1].forEach(function (v) { if (sel.indexOf(v) < 0) sel.push(v); }); });
        P.prefs.gender = { sel: sel.length ? sel : [OPEN], deal: sel.length > 0 && sel[0] !== OPEN }; }
      if (!g && !s) return;
      saveP(); renderIam(); if (typeof syncIdentityUI === "function") syncIdentityUI(); deckDirty = true; onChange();
    });
  }
  /* ---------- Rooms: the house's themed rooms. Same deck rules, smaller crowd.
     Main Floor = everyone. A Room deals only players who joined it, and you can only join a Room your own answers fit. ---------- */
  var ROOMS = [
    ["main", "Main Floor", "🎰", null, null, "Everyone at your table"],
    ["highroller", "High Roller Room", "💎", "__hr", null],
    ["christian", "Christian Room", "✝️", "religion", ["Christian"]], ["jewish", "Jewish Room", "✡️", "religion", ["Jewish"]],
    ["muslim", "Muslim Room", "☪️", "religion", ["Muslim"]], ["hindu", "Hindu Room", "🕉️", "religion", ["Hindu"]],
    ["buddhist", "Buddhist Room", "☸️", "religion", ["Buddhist"]], ["spiritual", "Spiritual Room", "✨", "religion", ["Spiritual, not religious"]],
    ["secular", "Secular Room", "🔭", "religion", ["Agnostic", "Atheist", "Humanist"]],
    ["democrat", "Democrat Room", "🏛️", "party", ["Democrat"]], ["republican", "Republican Room", "🏛️", "party", ["Republican"]], ["independent", "Independent Room", "🏛️", "party", ["Independent"]],
    ["sober", "Sober Room", "🥤", "drink", ["Never", "Sober"]], ["parents", "Parents Room", "🧸", "kids", ["Kids at home", "Kids, not at home", "Kids part-time"]],
    ["lgbtq", "Pride Room", "🏳️‍🌈", "orientation", ["Gay", "Lesbian", "Bisexual", "Pansexual", "Queer", "Asexual", "Demisexual", "Questioning"]]
  ];
  var ROOM = {}; ROOMS.forEach(function (r) { ROOM[r[0]] = r; });
  P.rooms = (P.rooms || []).filter(function (id) { return ROOM[id] && id !== "main"; }); P.room = ROOM[P.room] ? P.room : "main";
  function roomFits(r, o) { if (!r || !r[3]) return true; if (r[0] === "highroller") return false; var v = asList((o || {})[r[3]]); return v.some(function (x) { return r[4].indexOf(x) > -1; }); }
  function canJoin(r) { return r[0] === "highroller" ? !!P.highRoller : roomFits(r, P.id || {}); }
  function inRoom(p) { var r = ROOM[P.room]; if (r && r[0] === "highroller") return !!p.hr; return !r || !r[3] || roomFits(r, p.id_); }
  function renderRooms() {
    var box = $("#roomChips"); if (box) box.innerHTML = ROOMS.slice(1).map(function (r) { var ok = canJoin(r), on = P.rooms.indexOf(r[0]) > -1 && ok;
      return '<button type="button" class="chip room" data-room="' + r[0] + '" aria-pressed="' + on + '"' + (ok ? "" : r[0] === "highroller" ? ' aria-disabled="true" title="Verify $1M+ or take the High Roller Buy-In"' : ' aria-disabled="true" title="Answer ' + esc((IDX[r[3]] || [0, r[3]])[1]) + ' in About me to join"') + ">" + r[2] + " " + esc(r[1]) + (ok ? "" : " 🔒") + "</button>"; }).join("");
    var mb = $("#maskBox"); if (mb) { mb.hidden = !P.highRoller;
      if (P.highRoller) mb.innerHTML = '<label class="check"><input type="checkbox" id="maskOn"' + (P.masked ? " checked" : "") + '> <span><b>🎭 Play masked.</b> Other members see an alias, a 3-year age range and a blurred photo. Everything else on your card stays true. Your real name, age and photo are shown only after you check in together in person.</span></label>' +
        '<div class="field" style="margin-top:6px"><label for="maskAlias">Your alias</label><input id="maskAlias" maxlength="40" placeholder="The Velvet Ace" value="' + esc(P.maskName || "") + '"></div>'; }
    var bar = $("#roomBar"); if (bar) { var mine = ["main"].concat(P.rooms.filter(function (id) { return canJoin(ROOM[id]); }));
      if (mine.indexOf(P.room) < 0) P.room = "main";
      document.body.classList.toggle("hr-mode", P.room === "highroller");
      bar.innerHTML = '<span class="rb-l">Playing in</span>' + mine.map(function (id) { var r = ROOM[id]; return '<button type="button" class="chip room" data-play-room="' + id + '" aria-pressed="' + (P.room === id) + '">' + r[2] + " " + esc(r[1]) + "</button>"; }).join("") +
        (mine.length < 2 ? '<a class="rb-add" href="#face">Join a Room ›</a>' : ""); }
  }
  document.addEventListener("change", function (e) {
    if (e.target.id === "maskOn") { P.masked = e.target.checked; if (P.masked && !P.maskName) P.maskName = "The Velvet Ace"; saveP(); renderRooms(); onChange(); toast(P.masked ? "🎭 You're masked as " + P.maskName + "." : "Unmasked: members see your real name and age."); }
  });
  document.addEventListener("input", function (e) { if (e.target.id === "maskAlias") { P.maskName = e.target.value.replace(/https?:\/\/|@/g, "").slice(0, 40); saveP(); onChange(); } });
  document.addEventListener("click", function (e) {
    var j = e.target.closest("[data-room]"), pl = e.target.closest("[data-play-room]");
    if (j && j.getAttribute("data-room") === "highroller" && !P.highRoller) { openHighRoller(); return; }
    if (j) { var r = ROOM[j.getAttribute("data-room")]; if (!canJoin(r)) { toast("Rooms are for members whose own answers fit. Answer " + ((IDX[r[3]] || [0, r[3]])[1]) + " under About me to join."); return; }
      var i = P.rooms.indexOf(r[0]); if (i > -1) P.rooms.splice(i, 1); else P.rooms.push(r[0]); saveP(); renderRooms(); toast((i > -1 ? "Left the " : "Joined the ") + r[1] + "."); }
    if (pl) { P.room = pl.getAttribute("data-play-room"); saveP(); renderRooms(); deckDirty = true; buildDeck(); renderTable(false);
      toast(P.room === "main" ? "Back on the Main Floor: your 52 from everyone at your table." : "Now playing the " + ROOM[P.room][1] + ": " + DECK.length + " cards dealt."); }
  });
  function initials(n) { return (n || "?").trim().split(/\s+/).map(function (x) { return x[0]; }).join("").slice(0, 2).toUpperCase() || "?"; }
  function renderCard() {
    var s = P.mySuit || P.trumps[0], col = SUIT[s].red ? "var(--red)" : "#2B2730";
    var h = P.handle.trim() ? "@" + P.handle.trim().replace(/^@/, "") : "@yourname";
    $("#myCard").style.setProperty("--felt-c", P.felt); $("#myCard").classList.toggle("hr", !!P.highRoller);
    var thm = THEME[P.theme] || THEME.private; $("#myCard").style.setProperty("--ring", thm[4] || "none"); $("#myCard").classList.toggle("themed", !!thm[4]); $("#myCard").setAttribute("data-theme", thm[0]);
    $("#myCard").innerHTML = '<div class="in"><span class="corner c1" style="color:' + col + '">A' + pip(s) + '</span><span class="corner c2" style="color:' + col + '">A' + pip(s) + "</span>" +
      '<div class="por" style="' + (P.photo ? "background-image:url(" + P.photo + ")" : "") + '">' + (P.photo ? "" : esc(initials(P.name))) + (P.photoLive && P.photo ? '<span class="livetag" title="Taken live in SuiteFace">📷 Live</span>' : "") + "</div>" +
      '<div class="nm">' + esc(P.name || "Your Name") + (parseInt(P.age, 10) ? ", " + esc(parseInt(P.age, 10)) : "") + '</div><div class="hd">' + esc(h) + "</div>" + (seekLine() ? '<div class="seek">' + esc(seekLine()) + "</div>" : "") + (P.founderNo ? '<div class="f1kline">★ First 1,000 · №' + String(P.founderNo).padStart(4, "0") + "</div>" : "") + ((P.hostCasinos || []).length ? '<div class="hostline">♠ Host · ' + esc(P.hostCasinos.join(" · ")) + "</div>" : "") + (P.highRoller ? '<div class="hrb mine">💎 High Roller' + (P.highRoller === "verified" ? " ✓ Verified" : "") + "</div>" + (P.masked ? '<div class="maskline">🎭 Others see: ' + esc(P.maskName || "Masked High Roller") + (parseInt(P.age, 10) ? ", " + (parseInt(P.age, 10) - 1) + "–" + (parseInt(P.age, 10) + 1) : "") + "</div>" : "") : "") +
      '<div class="bio">' + esc(P.bio || "Your Face Value goes here: a few lines about what makes you, you.") + "</div>" + ((P.selfWords && P.selfWords.length) ? '<div class="words2"><span><b>Me:</b> ' + esc(P.selfWords.slice(0, 3).join(" · ")) + '</span>' + ((P.othersWords && P.othersWords.length) ? '<span><b>My people:</b> ' + esc(P.othersWords.slice(0, 3).join(" · ")) + "</span>" : "") + "</div>" : "") + '<div class="facts">' + esc(myFacts()) + "</div>" +
      '<div class="tr" style="color:' + col + '">' + (P.mySuit ? SUIT[s].sym + " " + SUIT[s].name : "Take the quiz to get your suit") + "</div></div>" + '<div class="tablebadge">' + esc(TABLE[P.looking][1]) + " table</div>" + '<div class="stks">' + P.stickers.map(function (id) { var k = STICKERS.filter(function (x) { return x[0] === id; })[0]; return k ? '<span class="stk-' + k[2] + '">' + k[1] + "</span>" : ""; }).join("") + "</div>";
    $("#ph").style.backgroundImage = P.photo ? "url(" + P.photo + ")" : ""; $("#ph").textContent = P.photo ? "" : initials(P.name);
  }
  var deckDirty = false;
  function onChange() { renderCard(); updateMeter(); deckDirty = true; saveDraft(); zipHint(); if (typeof tabCounts === "function") tabCounts(); }
  function zipHint() {
    var z = ZIPS[P.zip], el = $("#zipHint"); if (!el) return;
    el.textContent = z ? z.city + ", " + z.st + ". Your 52 are measured from here." : 'Your 52 are measured from your ZIP. Only "about X miles" is ever shown.';
  }
  var saveDraft = debounce(function () { saveP(); }, 400);
  /* Save problems: list them at the top, open the right tab, scroll to and outline each field. */
  function faceProblems(list) {
    var form = $("#faceForm"), box = $("#faceProblems");
    $$(".needs", form).forEach(function (x) { x.classList.remove("needs"); });
    if (!box) { box = document.createElement("div"); box.id = "faceProblems"; box.className = "faceprob"; box.setAttribute("role", "alert"); form.insertBefore(box, form.firstChild); }
    if (!list.length) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = "<b>Finish " + (list.length === 1 ? "this" : "these " + list.length) + " to save:</b><ul>" + list.map(function (p, i) { return '<li><button type="button" class="linkish" data-prob="' + i + '">' + esc(p.label) + "</button>: " + esc(p.msg) + "</li>"; }).join("") + "</ul>";
    list.forEach(function (p) { var f = p.el && (p.el.closest(".field") || p.el); if (f) f.classList.add("needs"); });
    function go(p) {
      var tab = p.el && p.el.closest("[data-tab]"), t = tab && tab.getAttribute("data-tab"), b = t && $('.ftabs [data-ft="' + t + '"]', form);
      if (b && b.getAttribute("aria-selected") !== "true") b.click();
      var f = p.el.closest(".field") || p.el; f.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "center" });
      var inp = f.querySelector("input,select,textarea,button"); if (inp) setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) { } }, 350);
    }
    box.onclick = function (e) { var b = e.target.closest("[data-prob]"); if (b) go(list[+b.getAttribute("data-prob")]); };
    go(list[0]);
  }
  function fieldLabel(el) { var f = el && el.closest(".field"), l = f && f.querySelector("label,.lbl"); return l ? l.textContent.replace(/Face (Up|Down)/, "").trim() : "This field"; }
  $("#faceForm").addEventListener("input", function (e) { var f = e.target.closest(".needs"); if (f) f.classList.remove("needs"); });
  $("#faceForm").addEventListener("click", function (e) { var f = e.target.closest(".needs"); if (f && e.target.closest(".chip,select")) f.classList.remove("needs"); });
  function serverProblem(x) {
    var m = String((x && x.message) || x || ""), el = null, msg = m;
    if (/handle|duplicate key.*handle|members_handle/i.test(m)) { el = F.handle; msg = "That Calling Card is taken or not allowed. Try another."; }
    else if (/birth|dob|18/i.test(m)) { el = $("#dobM") || $("#fAgeErr"); msg = "Check your birthday. SuiteFace is for adults 18 and over."; }
    else if (/zip/i.test(m)) { el = F.zip; msg = "Check your ZIP code."; }
    else if (/face_name|name/i.test(m)) { el = F.name; msg = "Check your name (1–40 characters)."; }
    else if (/bio/i.test(m)) { el = F.bio; msg = "Your Face Value is too long (500 characters max)."; }
    else if (/Pick up to 3 answers for (\w+)/.test(m)) { var k = m.match(/for (\w+)/)[1]; el = $('.idf[data-k="' + k + '"]'); msg = "Pick up to 3."; }
    else if (/top3|cardinality/i.test(m)) { el = $('[data-tab="look"]'); msg = "Pick your top 3 at most for each Looking for question."; }
    if (el) faceProblems([{ el: el, label: fieldLabel(el), msg: msg }]); else toast("Couldn't save: " + m);
  }
  $("#faceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate(true)) {
      var probs = $$("#faceForm .err").filter(function (x) { return x.textContent.trim(); }).map(function (x) { var el = x.closest(".field") || x; return { el: el, label: fieldLabel(el), msg: x.textContent.trim() }; });
      faceProblems(probs); toast("A few things need a look before saving."); return;
    }
    faceProblems([]);
    saveP();
    if (liveOn()) { toast("Saving your Face…"); pushFace().then(function () { toast("Face saved. Dealing your 52 from real members…", P.mySuit || "heart"); jackpot(3000); burstAt($("#myCard"), 80); return liveDeck(true); }, function (x) { serverProblem(x); }); return; }
    placePool(); buildDeck(); renderTable(true); mapT0 = performance.now(); renderMap();
    toast("Face saved. Your 52 have been re-dealt.", P.mySuit || "heart"); jackpot(3000); burstAt($("#myCard"), 80);
  });
  $("#faceForm").addEventListener("input", function () { if ($("#faceForm .err:not(:empty)")) validate(true); });
  $("#faceReset").addEventListener("click", function () {
    var keep = { trumps: ORDER.slice() }; P = Object.assign({ name: "", handle: "", age: "", zip: "", bio: "", photo: "", looking: "longterm", show: "everyone", ageMin: 25, ageMax: 40, dist: 25, felt: "#1E7A4C", mySuit: "", interests: [] }, keep);
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
    var r = rng(52), out = [], id = 0, looks = ["longterm", "longterm", "seeing", "marriage", "friends", "seeing", "casual", "open"];
    function add(name, gender) {
      var s = ORDER[id % 4];
      var ints = []; while (ints.length < 4) { var x = INTERESTS[(r() * INTERESTS.length) | 0]; if (ints.indexOf(x) < 0) ints.push(x); }
      out.push({ id: "p" + id, name: name, gender: gender, suit: s, age: 22 + Math.round(Math.pow(r(), 1.25) * 30), dist: Math.round((0.5 + Math.pow(r(), 1.4) * 60) * 10) / 10,
        looking: looks[(r() * looks.length) | 0], interests: ints, bio: BIOS[s][(r() * 4) | 0], noise: r(), hue: (r() * 360) | 0 });
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
    var LK = ["marriage", "longterm", "seeing", "friends", "casual", "open"], la = LK.indexOf(p.looking), lb = LK.indexOf(P.looking);
    var lookMatch = p.looking === P.looking ? 1 : (p.looking === "open" || P.looking === "open") ? 0 : Math.abs(la - lb) === 1 ? .6 : Math.abs(la - lb) === 2 ? .3 : .1;
    var mid = (P.ageMin + P.ageMax) / 2, span = Math.max(4, (P.ageMax - P.ageMin) / 2);
    var pm = prefScore(p);
    var f = 28 * Math.min(1, shared.length / Math.max(1, Math.min(4, P.interests.length || 3))) + 16 * lookMatch +
      16 * (1 - Math.min(1, p.dist / Math.max(2, P.dist))) + 10 * (1 - Math.min(1, Math.abs((p.realAge || p.age) - mid) / span)) + 20 * pm.score + 10 * p.noise;
    return { score: Math.round(f), shared: shared, prefHits: pm.hits };
  }
  function eligible(p) {
    return passesDealbreakers(p) && (p.realAge || p.age) >= P.ageMin && (p.realAge || p.age) <= P.ageMax && p.dist <= P.dist && (G.jokered || []).indexOf(p.id) < 0;
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
  function saveG() { if (liveOn() && LIVE_ROWS) { liveSaveG(); return; } S.set("game", G); }
  function buildDeck() {
    if (liveOn() && LIVE_ROWS) { liveBuild(); return; }
    var el = POOL.filter(eligible).filter(inRoom).map(function (p) { var f = fitOf(p), c = Object.assign({}, p, { fit: f.score, shared: f.shared }); if (p.masked) { c.realName = p.realName; c.realAge = p.realAge; defineMask(c); } return c; });
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
    if (isMasked(p)) extra = (extra || "") + "filter:blur(5px) saturate(.7);";
    return '<div class="avatar" style="' + (extra || "") + 'background:radial-gradient(circle at 30% 25%,hsl(' + p.hue + ' 45% 52%),' + bg + ')">' + esc(initials(p.name)) + "</div>";
  }
  function jmeter(p, big) {
    if (p.joker) return '<span class="jm jm-on">JOKER</span>';
    var n = p.jk || 0, pips = ""; for (var i = 0; i < 10; i++) pips += '<i class="' + (i < n ? "on" : "") + '"></i>';
    return '<span class="jm' + (n >= 7 ? " hot" : n >= 4 ? " warm" : "") + '" title="Jokers from confirmed dates in the last 180 days">' + (big ? "Joker meter " : "Jokers ") + n + "/10" + (big ? '<span class="pips">' + pips + "</span>" : "") + "</span>";
  }
  function cardHTML(p, pos) {
    var col = SUIT[p.suit].red ? "red" : "";
    var lookTxt = (TABLE[p.looking] || TABLE.longterm)[1];
    if (p.joker) col += " jokercard";
    return '<div class="slot" data-id="' + p.id + '"><div class="pcard ' + col + '" tabindex="0" role="button" aria-label="' + esc(p.name) + ", " + p.age + ", " + p.rank + " of " + SUIT[p.suit].name + '. Press to flip."><div class="flip">' +
      (p.joker ? '<div class="face"><span class="idx">J<b class="jk">★</b></span><div class="center"><span class="jhat">' + BRAND.hat + '</span><div class="title">Public Joker</div><div class="dist">' + esc(p.name.split(" ")[0]) + ", " + p.age + " · about " + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">Until ' + p.joker.until + '</div></div><span class="idx br">J<b class="jk">★</b></span></div>' :
      '<div class="face"><span class="idx">' + p.rank + pip(p.suit) + "</span>" +
      '<div class="center">' + avatar(p) + '<div class="title">' + esc(p.name.split(" ")[0]) + ", " + p.age + '</div><div class="dist">about ' + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">' + SUIT[p.suit].sym + " " + SUIT[p.suit].name + "</div>" + (p.hr && P.room === "highroller" ? '<div class="hrb">' + (isMasked(p) ? "🎭 Masked " : "💎 ") + "High Roller" + (p.hr === "verified" ? " ✓" : "") + "</div>" : "") + jmeter(p) + "</div>" +
      '<span class="idx br">' + p.rank + pip(p.suit) + "</span>" + (G.played.indexOf(p.id) > -1 ? '<span class="stamp">Played</span>' : "") + "</div>") +
      '<div class="back"><b style="font:800 1.05rem var(--display);text-transform:uppercase">' + esc(p.name) + ", " + p.age + "</b>" + (p.joker ? '<span class="jnote">Public Joker: ' + p.joker.count + " Jokers from confirmed dates in the last 180 days. Every Joker can be challenged for free.</span>" : "") + jmeter(p, true) + "<span>" + esc(p.bio) + "</span>" + factsLine(p) + "<span><b>Loves:</b> " + esc(p.interests.join(", ")) + "</span><span><b>Looking for:</b> " + lookTxt + '</span><div class="why">' + esc(why(p, pos)) + '</div><span class="prov">Fictional sample profile · <button type="button" class="linkish" data-report>Report</button> · <button type="button" class="linkish" data-block>Block</button></span></div>' +
      '</div></div><div class="card-actions"><button class="btn ghost" type="button" data-burn>Burn</button><button class="btn red" type="button" data-play>Play</button></div></div>';
  }
  function renderTable(redeal) {
    if (deckDirty || !DECK.length) buildDeck();
    var hand = G.dealt.map(function (id) { return BY[id]; }).filter(Boolean).sort(handOrder);
    $("#dealt").innerHTML = hand.length ? hand.map(cardHTML).join("") :
      '<p class="lede" style="align-self:center">' + (DECK.length ? "Your deck is shuffled and waiting. Deal your Hand." : liveOn() ? "No real members fit your gates yet. SuiteFace is brand new in many areas: widen your distance or age range, invite friends, and remember your 12-Card Deck Guarantee." : "No one in the sample deck passes your gates. Widen your age range or distance in My Face.") + "</p>";
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
    if (liveOn() && LIVE_ROWS) { toast("Fresh Shuffle: re-dealing your 52…"); G.dealt = []; liveDeck(true).then(function () { setTimeout(deal, 150); }); return; }
    G = { dealt: [], burned: [], played: [], pairs: G.pairs, hands: G.hands || {}, jokered: G.jokered || [], clock: G.clock || 0 }; buildDeck(); saveG(); renderTable(false);
    toast("Fresh Shuffle. Burned and played cards are back in your deck."); setTimeout(deal, 150);
  });
  $("#dealt").addEventListener("click", function (e) {
    var slot = e.target.closest(".slot"); if (!slot) return; var id = slot.getAttribute("data-id"), p = BY[id];
    if (liveOn() && LIVE_ROWS && p) {
      var nm0 = p.name.split(" ")[0];
      if (e.target.closest("[data-report]")) { e.stopPropagation(); if (!confirm("Report and block " + nm0 + "? Our safety team reviews every report.")) return; lrpc("block_member", { target: id, is_report: true }).then(function () { remove(id, "burned", slot); toast("Reported and blocked. Thank you for telling us."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-block]")) { e.stopPropagation(); lrpc("block_member", { target: id, is_report: false }).then(function () { remove(id, "burned", slot); toast(nm0 + " is blocked and won't be dealt again."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-burn]")) { lrpc("burn_card", { target: id }).then(function () { remove(id, "burned", slot); toast("Burned. " + nm0 + " won't be dealt to you again."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-play]")) {
        slot.querySelector(".pcard").classList.add("played");
        lrpc("play_card", { target: id }).then(function (r) {
          remove(id, "played", slot);
          if (r === "pair") { jackpot(5000); burst(innerWidth / 2, innerHeight / 3, 110); liveTable().then(function () { var h = LIVE_HANDS.filter(function (x) { return x.other_id === id; })[0]; if (h) livePair(h); }); }
          else toast("You played " + nm0 + "'s card. If they play yours too, it's a Pair.", p.suit);
        }, function (x) { slot.querySelector(".pcard").classList.remove("played"); toast(x.message); });
        return;
      }
    }
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
    if (liveOn() && LIVE_ROWS) { liveRenderPairs(); return; }
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


  /* ---------- Launch offer (15 days): Buy-In waived, or choose First 1,000 ---------- */
  var LAUNCH = { open: false, ends: "2026-11-01T05:00:00Z", left: 1000 }, PLAN = "launch";
  function launchEndText() { return new Date(new Date(LAUNCH.ends).getTime() - 1).toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "America/Chicago" }); }
  function SIGNED_PAID() { return !!(window.SF_LIVE && window.SF_LIVE.seated); }
  function launchUI() {
    var box = $("#launchBox"); if (!box) return;
    LAUNCH.open = LAUNCH.open && new Date(LAUNCH.ends).getTime() > Date.now();
    box.hidden = !LAUNCH.open;
    var ho = $("#heroOffer"); if (ho) ho.hidden = !LAUNCH.open;
    var pb = $("#promoBar"); if (pb) pb.hidden = !LAUNCH.open || SIGNED_PAID();
    var pe = $("#promoEnds"); if (pe) pe.textContent = launchEndText();
    var hp = $("#hPriceLine"); if (hp) hp.textContent = LAUNCH.open ? "The $21 buy-in is waived through " + launchEndText() + ". Join for $2.10 a month and cancel any time." : "$21 once to take your seat, then $2.10 a month. Cancel any time.";
    var c21 = $("#memChip21"); if (c21) c21.classList.toggle("waived", LAUNCH.open && PLAN === "launch");
    var hc = $(".h-c21"); if (hc) hc.classList.toggle("waived", LAUNCH.open);
    if (!LAUNCH.open) PLAN = "first";
    var first = $('[data-plan="first"]', box); if (first) first.hidden = LAUNCH.left <= 0;
    if (LAUNCH.left <= 0 && PLAN === "first" && LAUNCH.open) PLAN = "launch";
    $$("[data-plan]", box).forEach(function (b) { b.setAttribute("aria-checked", String(b.getAttribute("data-plan") === PLAN)); });
    var end = new Date(LAUNCH.ends), ms = end.getTime() - Date.now(), d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5);
    $("#launchEnds").textContent = new Date(end.getTime() - 1).toLocaleDateString([], { month: "short", day: "numeric", timeZone: "America/Chicago" }) + " at 11:59 pm CT";
    $("#launchLeft").textContent = ms > 0 ? (d ? d + " day" + (d === 1 ? "" : "s") + " " : "") + h + " hr left." : "";
    $("#f1kLeft").textContent = LAUNCH.left.toLocaleString() + " of 1,000 left";
    var launch = LAUNCH.open && PLAN === "launch";
    $("#payBtn").textContent = launch ? "Join for $2.10 with Stripe" : (LAUNCH.open ? "Pay $21.00 · First 1,000" : "Pay $21.00 with Stripe");
    var ag = $("#agree").parentElement.querySelector("span");
    ag.innerHTML = launch ? 'I understand that under the launch offer the $21.00 Buy-In is waived, and SuiteFace charges <b>$2.10 USD today</b>, then <b>$2.10 USD every month</b> until I cancel, and that a pause longer than 21 days ends my membership (rejoining then requires the Buy-In). I agree to the <a href="terms.html">Terms of Service</a>.'
      : LAUNCH.open ? 'I choose the <b>First 1,000</b> Buy-In instead of the free launch seat. SuiteFace charges <b>$21.00 USD today, non-refundable</b> (the 12-Card Deck Guarantee doesn\'t apply to it), then <b>$2.10 USD every month</b> starting in 30 days until I cancel. I agree to the <a href="terms.html">Terms of Service</a>.'
      : 'I understand that SuiteFace charges <b>$21.00 USD today</b>, then <b>$2.10 USD every month</b> until I cancel, and that a pause longer than 21 days ends my membership. I agree to the <a href="terms.html">Terms of Service</a>.';

  }
  $("#launchBox").addEventListener("click", function (e) { var b = e.target.closest("[data-plan]"); if (!b) return; PLAN = b.getAttribute("data-plan"); $("#agree").checked = false; launchUI(); });
  (function () {
    var fallback = function () { LAUNCH.open = new Date(LAUNCH.ends).getTime() > Date.now(); launchUI(); };
    if (!CFG.supabaseUrl) { fallback(); return; }
    rpc("launch_status", {}).then(function (r) { LAUNCH.open = !!r.open; if (r.ends) LAUNCH.ends = r.ends; LAUNCH.left = r.first1000_left == null ? 1000 : r.first1000_left; launchUI(); }, fallback);
    setInterval(launchUI, 60000);
  })();
  /* Referrals: ?ref=handle (or the older ?invite=) is remembered and credited to the inviter once the new member signs in. */
  (function () {
    var m = location.search.match(/[?&](?:ref|invite)=([a-z0-9._]{3,24})/i);
    if (m) { try { localStorage.setItem("sf.ref", m[1].toLowerCase()); } catch (e) { } }
    document.addEventListener("sf:live", function () {
      if (!window.SF_LIVE) return;
      var ref = null; try { ref = localStorage.getItem("sf.ref"); } catch (e) { }
      if (ref) window.SF_LIVE.rpc("set_referrer", { p_handle: ref }).then(function (r) { if (!r.error && r.data !== "not_found") { try { localStorage.removeItem("sf.ref"); } catch (e) { } } });
      window.SF_LIVE.rpc("my_perks").then(function (r) {
        if (r.error || !r.data) return; P.founderNo = r.data.founder_no || null; P.refCount = r.data.referrals || 0; saveP();
        try { renderStyle(); } catch (e) { } renderCard();
      });
    });
    var q = location.search.match(/[?&](joined|buyin)=(1|success)/);
    if (q) setTimeout(function () { toast("Payment received. Welcome to the table! Your seat opens in a moment."); jackpot(4000); if (window.SF_AUTH) window.SF_AUTH.refresh(); }, 1200);
  })();
  /* ---------- membership (Stripe) ---------- */
  function needAgree() { if ($("#agree").checked) { $("#agreeErr").textContent = ""; return true; } $("#agreeErr").textContent = "Please tick the box to confirm the $21.00 Buy-In and $2.10 monthly charge."; $("#agree").focus(); return false; }
  $("#payBtn").addEventListener("click", function (e) {
    e.preventDefault(); if (!needAgree()) return;
    if (CFG.stripePaymentLink && window.SF_AUTH && (PUBLIC_SITE || window.SF_LIVE)) { liveBuyIn(); return; }
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
      var staffEmail = window.SF_LIVE && /(@suiteface\.com|@gofirehorsego\.com|^thesuiteface@gmail\.com)$/i.test(window.SF_LIVE.email() || "");
      if (!window.SF_LIVE && !KNOWN[v.toUpperCase()] && PUBLIC_SITE) { msg.textContent = "Log in first, then apply your code."; return; }
      if (window.SF_LIVE && !KNOWN[v.toUpperCase()]) {
        window.SF_LIVE.rpc("house_comp_check", { p_code: v }).then(function (r) {
          if (r.error && staffEmail) { msg.innerHTML = "<b style='color:#E5505E'>" + esc(/isn't valid/.test(r.error.message) ? "That house comp code isn't set or doesn't match. Owner: set it in Owner console → 🎩 House comp code." : r.error.message) + "</b>"; return; }
          if (!r.error && r.data) { window.SF_HOUSE = v; try { sessionStorage.setItem("sf.house", v); } catch (e) { } inp.value = ""; S.set("comp", ""); msg.innerHTML = "<b style='color:var(--gold-hi)'>🎩 House comp active on this tab: every checkout is free for your account.</b>"; jackpot(1800); burstAt($("#compApply"), 40); return; }
          S.set("comp", v); msg.textContent = "Code saved. Stripe checks it at checkout.";
        });
        return;
      }
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
    var link = CFG.siteUrl + "?ref=" + encodeURIComponent(from || "a-friend") + "&seat=" + encodeURIComponent(n) + "#membership";
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
  $("#copyMail").addEventListener("click", function () { copy("help@suiteface.com", $("#copyMail")); });

  /* ---------- forms → help@suiteface.com ---------- */
  var FORMS = {
    WAITLIST: { title: "Join the waitlist", btn: "Save my seat", subject: "Waitlist sign-up", fields: [
      ["name", "Your name", "text", true], ["email", "Email", "email", true], ["city", "City", "text", true],
      ["looking", "Looking for", "select", false, ["Marriage-minded", "Long-term", "Dating to see", "Friends first", "Casual", "Open / ENM"]], ["adult", "I'm 18 or older", "checkbox", true]] },
    CONTACT: { title: "Send us a note", btn: "Send message", subject: "New inquiry", fields: [
      ["name", "Your name", "text", true], ["email", "Email", "email", true], ["message", "Message", "textarea", true]] },
    PAUSE: { title: "Pause my membership", btn: "Request a pause", subject: "Pause request", fields: [
      ["name", "Your name", "text", true], ["email", "Email on your membership", "email", true], ["start", "Pause starting (YYYY-MM-DD)", "text", true],
      ["note", "Anything we should know?", "textarea", false]] },
    PARTNER: { title: "Partner with SuiteFace", btn: "Send to partnerships", subject: "Partnership inquiry", fields: [
      ["name", "Your name", "text", true], ["company", "Business or organization", "text", true], ["email", "Email", "email", true],
      ["kind", "I'm interested in…", "select", true, ["Comp Table: a deal for pairs who play their hand at my venue", "Featured in the Raise: a labeled Sponsored pick", "Hosting Party Table nights", "Sponsoring giveaways, stickers or card backs", "Advertising", "Investing", "Press", "Other"]],
      ["venue", "Venue address or city (if you have one)", "text", false], ["offer", "Your member offer, if any (e.g. 15% off for SuiteFace pairs)", "text", false], ["message", "Tell us more", "textarea", true]] },
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
    el.innerHTML = "<h3>" + f.title + "</h3>" + (type === "PAUSE" ? '<p class="hint">One pause every 210 days. Each pause lasts up to 21 days and stops your $2.10 billing. If you don\'t resume within 21 days, your membership ends and returning needs a new $21.00 Buy-In.</p>' : "") + (type === "PARTNER" ? '<div class="partners"><p class="hint" style="margin:0 0 8px">Every SuiteFace date ends with two people checking in, together, somewhere real. Be that place.</p>' +
      [["💎", "High Roller Sponsor", "Reach members of the High Roller Room only, with exclusive offers. $2,100 a year + $210 a week + $21 each time a High Roller accepts your offer. <a href=\"#\" data-hr-sponsor>Become a High Roller Sponsor ›</a>"], ["🌟", "ZIP Sponsor", "Your own Vegas-style sign in up to 7 ZIP codes, with a pop-up that sends interested people to you. $210 every 30 days. <a href=\"#\" data-sponsor-signup>Sponsor ZIP codes ›</a>"], ["🎟️", "Comp Table", "Offer a deal to pairs who check in at your venue for Play Hand. Members see your Comp on the map and in their hand."], ["✋", "Featured in the Raise", "When it fits the pair, the Dealer can suggest your venue, always labeled Sponsored."], ["🎉", "Party Table nights", "Host double dates and group meetups for local members."], ["🎁", "Giveaways & card backs", "Sponsor merch drops, sticker packs or a branded card back."]]
        .map(function (p) { return '<div class="pt"><b>' + p[0] + " " + p[1] + "</b><span>" + (p[0] === "🌟" || p[0] === "💎" ? p[2] : esc(p[2])) + "</span></div>"; }).join("") +
      '<div class="pt price"><b>House Partner pricing</b><span><b>$210.00</b> one-time Partner Buy-In · <b>$21.00</b> a month · <b>$2.10</b> each time a pair redeems your Comp, billed monthly. Cancel the monthly anytime.</span>' +
      (CFG.stripePartnerLink ? '<button class="btn gold sm" type="button" style="justify-self:start;margin-top:6px" data-partner-join>Become a House Partner</button>' : "") + "</div></div>" : "") + f.fields.map(function (x) { return fieldHTML(x, "m"); }).join("") + HONEY +
      '<button class="btn gold" type="submit">' + f.btn + '</button><div class="out" aria-live="polite"></div>';
    if (type === "PAUSE" && window.SF_LIVE) window.SF_LIVE.rpc("my_pause_status").then(function (r) {
      var d = r && r.data; if (!d || el.getAttribute("data-type") !== "PAUSE") return;
      var fmt = function (t) { return new Date(t).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Chicago" }); };
      var msg = d.membership === "paused" ? "You're paused now. Resume by " + fmt(d.resume_by) + " to keep your seat." :
        d.can_pause ? "✓ Your pause is available." + (d.next_pause_on ? "" : " After you use it, the next one opens 210 days later.") :
        d.next_pause_on ? "You've used your pause. Your next pause opens on " + fmt(d.next_pause_on) + "." : "Pausing is for active memberships.";
      var n = document.createElement("div"); n.className = "notice " + (d.can_pause ? "good" : "pv"); n.textContent = msg;
      var h = el.querySelector(".hint"); if (h) h.after(n);
      var sb = el.querySelector('button[type="submit"]'); if (sb && !d.can_pause && d.membership !== "paused") sb.disabled = true;
    });
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
    var DB = CFG.supabaseUrl && CFG.supabaseKey;
    if (!DB && !CFG.formAccessKey) { out.innerHTML = previewNote(); return; }
    var tk = ticketId(); btn.disabled = true; var old = btn.textContent; btn.textContent = "Sending…"; out.innerHTML = "";
    var record = Object.assign({ page: location.href.split("?")[0], subject: f.subject }, data);
    function emailCopy() { /* optional: also email help@ when a Web3Forms key is set */
      if (!CFG.formAccessKey) return Promise.resolve({ success: true });
      var payload = Object.assign({ access_key: CFG.formAccessKey, subject: "[SuiteFace][" + type + "] " + tk + " — " + f.subject, from_name: "SuiteFace.com", ticket: tk, form_type: type }, record);
      if (data.email) payload.replyto = data.email;
      return fetch(CFG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) })
        .then(function (r) { return r.json().catch(function () { return { success: false, message: "Unexpected response." }; }); }); }
    var send = DB ? fetch(CFG.supabaseUrl + "/rest/v1/rpc/submit_site_form", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey },
          body: JSON.stringify({ p_type: type, p_ticket: tk, p_data: record }) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok) return { success: false, message: (j && j.message) || "the server said no." }; emailCopy().catch(function () { }); return { success: true }; }); })
      : emailCopy();
    send
      .then(function (j) {
        if (j && j.success) {
          out.innerHTML = '<div class="notice good">' + (type === "WAITLIST" ? "Your seat is saved. " : "Got it. ") + 'Your reference number is <span class="ticket">' + tk + "</span>. We'll email you" + (type === "WAITLIST" ? " the moment your table is ready." : ".") + "</div>";
          formEl.querySelectorAll("input:not([type=checkbox]),textarea,select").forEach(function (x) { x.value = ""; });
          formEl.querySelectorAll("input[type=checkbox]").forEach(function (x) { x.checked = false; });
          if (window.SFX && type !== "WAITLIST") window.SFX.celebrate(formEl, { title: type === "PARTNER" ? "HOUSE PARTNER" : type === "FEEDBACK" ? "THANK YOU" : "SUITEFACE", thanks: "Thank you for your submission. Your reference number is " + tk + "." });
          else if (window.SFX) window.SFX.cashOut(formEl, tk, ({ WAITLIST: { title: "SAVE MY SEAT", stamp: "SEAT SAVED", done: "Your seat is saved. We'll email you when your table is ready." }, FEEDBACK: { title: "THANK YOU", stamp: "RECEIVED", done: "Thanks. Every note gets read." }, PARTNER: { title: "HOUSE PARTNER", stamp: "COMP\u2019D", done: "Partnerships will email you within 2 business days." } })[type] || { title: "SUITEFACE", stamp: "RECEIVED", done: "Got it. We'll reply by email." });
          else { jackpot(2500); burstAt(btn, 40); }
        } else out.innerHTML = '<div class="notice bad">That didn\'t go through: ' + esc((j && j.message) || "the server said no.") + " Try again, or email help@suiteface.com.</div>";
      })
      .catch(function () { out.innerHTML = '<div class="notice bad">We couldn\'t reach SuiteFace. Check your connection and try again, or email help@suiteface.com.</div>'; })
      .then(function () { btn.disabled = false; btn.textContent = old; });
  }
  $("#mainForm").addEventListener("submit", function (e) { e.preventDefault(); submitForm(e.target, e.target.getAttribute("data-type")); });

  // Help + Feedback dock: minimize to a small "?" tab; remembered on this device.
  (function () {
    var dock = $("#fabDock"), b = $("#fabMin"); if (!dock || !b) return;
    function setMin(on, save) {
      dock.classList.toggle("min", on);
      b.setAttribute("aria-expanded", String(!on));
      b.setAttribute("aria-label", on ? "Show Help and Feedback" : "Hide Help and Feedback");
      b.title = on ? "Help & Feedback" : "Hide";
      b.innerHTML = on ? '<span aria-hidden="true">?</span> Help' : '<span aria-hidden="true">–</span>';
      if (save) S.set("fabMin", on);
    }
    setMin(!!S.get("fabMin", false), false);
    b.addEventListener("click", function () { setMin(!dock.classList.contains("min"), true); });
  })();
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

  /* ---------- launch popup: the first thing a new visitor sees ---------- */
  var params = new URLSearchParams(location.search), inv = params.get("ref") || params.get("invite");
  var seenOffer = S.get("offerSeen", 0);
  if (PAGE === "home" && !SIGNED && (inv || !seenOffer || Date.now() - seenOffer > 3 * 864e5)) {
    setTimeout(function () {
      if (window.SF_LIVE || SIGNED || !LAUNCH.open || $("#modal")) return;
      S.set("offerSeen", Date.now());
      var m = modal('<div class="offerpop"><div class="offerchips" aria-hidden="true"><span class="sfchip waived" data-chip="21" data-size="104" data-label="$21 buy-in"></span><span class="sfchip" data-chip="2.10" data-size="132" data-spin data-label="a month"></span></div>' +
        '<h3>' + (inv ? "A friend saved you a seat." : "Your seat is on the house.") + '</h3>' +
        '<p class="lede">Launch offer: the $21 buy-in is waived through ' + esc(launchEndText()) + '. Join for $2.10 a month and cancel any time.</p>' +
        '<div class="row"><a class="btn gold" href="membership.html" data-close>Claim my seat</a><a class="textlink" href="find-your-suit.html" data-close>Find my suit first</a></div></div>');
      if (window.SFChips) window.SFChips.paint(m);
    }, 1800);
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
    ["race", "Race & ethnicity (pick up to 3)", "many", ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Middle Eastern or North African", "Native Hawaiian or Pacific Islander", "White", "Another"], 1, 1, "Who I am"],
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
    ["faithPartner", "Faith in a partner (pick up to 3)", "many", FAITH_PARTNER, 0, 0, "Faith"],
    ["politics", "Politics", "one", ["Liberal", "Moderate", "Conservative", "Not political", "Another"], 1, 1, "Lifestyle"],
    ["party", "Political party", "one", ["Democrat", "Republican", "Independent", "Libertarian", "Green", "Not affiliated", "Another"], 1, 1, "Lifestyle"],
    ["drink", "Drinking", "one", ["Never", "Socially", "Often", "Sober"], 1, 0, "Lifestyle"],
    ["smoke", "Smoking", "one", ["Never", "Socially", "Regularly", "Trying to quit"], 1, 0, "Lifestyle"],
    ["cannabis", "Cannabis", "one", ["Never", "Sometimes", "Often"], 1, 0, "Lifestyle"],
    ["pets", "Pets (check all that apply)", "many", ["Dog", "Cat", "Other pets", "No pets", "Allergic to pets"], 1, 0, "Lifestyle"],
    ["languages", "Languages (check all that apply)", "many", ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean", "German", "ASL", "Another"], 1, 0, "Lifestyle"],
    ["zodiac", "Zodiac sign", "one", ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"], 0, 0, "Lifestyle"]
  ];
  var IDX = {}; IDF.forEach(function (f) { IDX[f[0]] = f; });
  POOL.forEach(function (p) { p.id_ = sampleIdentity(p); p.hr = hash(p.id + "hr") % 100 < 9 ? (hash(p.id + "hrk") % 3 ? "verified" : "buyin") : null; });
  /* Masked High Rollers: alias + 3-year age range + blurred photo until you check in together in person. */
  var ALIASES = ["The Velvet Ace", "Midnight King", "The Silent Queen", "Lucky Seven", "The Gold Jack", "High Card", "The Late Dealer", "Red Velvet", "The Quiet Raise", "Diamond Lane"];
  function revealedTo(p) { var h = (G.hands || {})[p.id]; return !!(h && h.dates > 0); }
  function isMasked(p) { return !!(p.masked && !revealedTo(p)); }
  POOL.forEach(function (p) {
    p.realName = p.name; p.realAge = p.age; p.masked = !!(p.hr && hash(p.id + "mask") % 2 === 0);
    if (!p.masked) return;
    p.alias = ALIASES[hash(p.id + "al") % ALIASES.length]; p.ageOff = hash(p.id + "off") % 3; defineMask(p);
  });
  function defineMask(p) {
    Object.defineProperty(p, "name", { get: function () { return isMasked(p) ? p.alias : p.realName; }, set: function (v) { p.realName = v; }, configurable: true, enumerable: true });
    Object.defineProperty(p, "age", { get: function () { return isMasked(p) ? (p.realAge - p.ageOff) + "–" + (p.realAge - p.ageOff + 2) : p.realAge; }, set: function (v) { p.realAge = v; }, configurable: true, enumerable: true });
  }
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
    o.party = sens(pick(o.politics === "Liberal" ? ["Democrat", "Democrat", "Independent", "Green"] : o.politics === "Conservative" ? ["Republican", "Republican", "Independent", "Libertarian"] : ["Independent", "Not affiliated", "Democrat", "Republican"]));
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
    if ($("#faceForm .ftabs")) { if (typeof syncIdentityUI === "function") syncIdentityUI(); return; } // build once; later calls just refresh answers
    var form = $("#faceForm"), kids = Array.prototype.slice.call(form.children);
    var anchor = $("#jokerStatus");
    kids.forEach(function (el) { if (!el.querySelector("#faceMeter") && !el.querySelector('button[type="submit"]')) el.setAttribute("data-tab", "basics"); });
    $("#showChips") && $("#showChips").closest(".field").remove();
    var bar = document.createElement("div"); bar.className = "ftabs"; bar.setAttribute("role", "tablist");
    bar.innerHTML = [["basics", "Basics", "🃏"], ["about", "About me", "♥"], ["look", "Looking for", "♠"]].map(function (t, i) { return '<button type="button" role="tab" class="ftab" data-ft="' + t[0] + '" aria-selected="' + (i === 0) + '" aria-pressed="' + (i === 0) + '"><i aria-hidden="true">' + t[2] + "</i><b>" + t[1] + '</b><small data-ftc="' + t[0] + '"></small></button>'; }).join("");
    form.insertBefore(bar, form.firstChild);
    var about = document.createElement("div"); about.setAttribute("data-tab", "about"); about.className = "form-grid"; about.hidden = true;
    var look = document.createElement("div"); look.setAttribute("data-tab", "look"); look.className = "form-grid"; look.hidden = true;
    form.insertBefore(look, anchor); form.insertBefore(about, look);
    about.innerHTML = '<p class="hint">Every question is optional and has <b>Prefer not to say</b>. Use the eye to choose what shows on your card: <b>Face Up</b> is shown, <b>Face Down</b> is private but still helps match you.</p>' + groupHTML(false);
    look.innerHTML = '<div class="pmatch"><button type="button" class="btn gold sm" id="perfectMatch">✨ Perfect match</button><span class="hint">Copies your About me answers here in one tap (top 3 each). Then change anything you want different.</span></div><p class="hint">Pick <b>your top 3</b>, or leave <b>Open to anyone</b>. Tick <b>Dealbreaker if not…</b> and only people who match what you picked will make your 52. Without it, a match simply ranks them higher. Someone who chose "Prefer not to say" won\'t pass a dealbreaker.</p>' + groupHTML(true);
    /* Slide-deck mode: one question at a time with a running count, like the suit quiz. */
    function makeDeck(box, sel, name) {
      var fields = $$(sel, box), idx = 0, on = S.get("deck_" + name, true);
      var ctl = document.createElement("div"); ctl.className = "qdeck";
      ctl.innerHTML = '<div class="qtop"><span class="qcount"></span><button type="button" class="linkish qmode"></button></div><div class="qbar"><i></i></div>' +
        '<div class="qnav"><button type="button" class="btn ghost sm qback">‹ Back</button><button type="button" class="btn ghost sm qskip">Skip</button><button type="button" class="btn gold sm qnext">Next ›</button></div>';
      var first = box.querySelector(".idgroup"); box.insertBefore(ctl, first);
      var nav = ctl.querySelector(".qnav"); box.appendChild(nav);
      function answered(f) { var k = f.getAttribute("data-k"); if (name === "look") { var pr = P.prefs[k]; return !!(pr && pr.sel && pr.sel.length && pr.sel.indexOf(OPEN) < 0); } return asList(P.id[k]).filter(Boolean).length > 0; }
      function show() {
        box.classList.toggle("deckmode", on);
        ctl.querySelector(".qmode").textContent = on ? "See all as a list" : "One question at a time";
        nav.hidden = !on; ctl.querySelector(".qbar").hidden = !on;
        var left = fields.filter(function (f) { return !answered(f); }).length;
        ctl.querySelector(".qcount").textContent = on ? "Question " + (idx + 1) + " of " + fields.length + " · " + left + " left" : fields.length - left + " of " + fields.length + " answered";
        ctl.querySelector(".qbar i").style.width = ((idx + 1) / fields.length * 100) + "%";
        fields.forEach(function (f, i) { f.classList.toggle("cur", on && i === idx); });
        $$(".idgroup", box).forEach(function (g) { g.classList.toggle("curg", on && !!g.querySelector(".cur")); });
        nav.querySelector(".qback").disabled = idx === 0;
        nav.querySelector(".qnext").textContent = idx === fields.length - 1 ? (name === "about" ? "Done · Looking for ›" : "Done ✓") : "Next ›";
      }
      function go(d) {
        if (idx + d >= fields.length) { if (name === "about") $('.ftabs [data-ft="look"]').click(); else { toast("All set. Tap Save my Face to keep it."); var sv = $('#faceForm button[type="submit"]'); if (sv) sv.scrollIntoView({ behavior: "smooth", block: "center" }); } return; }
        idx = Math.max(0, Math.min(fields.length - 1, idx + d)); show();
        var c = fields[idx]; if (c && on) { c.classList.remove("qin"); void c.offsetWidth; c.classList.add("qin"); }
      }
      ctl.querySelector(".qmode").onclick = function () { on = !on; S.set("deck_" + name, on); show(); };
      nav.querySelector(".qback").onclick = function () { go(-1); };
      nav.querySelector(".qskip").onclick = function () { go(1); };
      nav.querySelector(".qnext").onclick = function () { go(1); };
      box.addEventListener("click", function (e) {
        if (!on) return; var c = e.target.closest(".chip"); if (!c) return; var f = c.closest(sel); if (!f || f !== fields[idx]) return;
        var single = c.getAttribute("role") === "radio" || (name === "look" && c.getAttribute("data-v") === OPEN);
        setTimeout(show, 0); if (single) setTimeout(function () { if (fields[idx] === f) go(1); }, 420);
      });
      box.addEventListener("change", function (e) { if (on && e.target.tagName === "SELECT" && e.target.closest(sel) === fields[idx]) { setTimeout(show, 0); setTimeout(function () { go(1); }, 420); } });
      document.addEventListener("keydown", function (e) { if (!on || box.hidden || /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "")) return; if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
      show();
      return { refresh: show };
    }
    var deckAbout = makeDeck(about, ".idf", "about"), deckLook = makeDeck(look, ".pf", "look");
    window.SF_deckRefresh = function () { deckAbout.refresh(); deckLook.refresh(); };
    look.addEventListener("click", function (e) {
      if (!e.target.closest("#perfectMatch")) return;
      var n = 0;
      IDF.forEach(function (f) {
        if (!f[4]) return; var k = f[0], mine = asList(P.id[k]).filter(function (x) { return x && x !== PNTS; }); if (!mine.length) return;
        var opts = prefOpts(f), vals = (k === "height" ? [hband(P.id[k])] : mine).filter(function (x) { return x && opts.indexOf(x) > -1; }).slice(0, 3);
        if (!vals.length) return; var pr = P.prefs[k] || { deal: false }; pr.sel = vals; P.prefs[k] = pr; n++;
      });
      syncIdentityUI(); onChange();
      toast(n ? "Perfect match: copied " + n + " answers from About me. Change anything you want different." : "Fill in About me first, then tap Perfect match.");
    });
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
    if (f[2] === "one" && f[3].length <= 12) return '<div class="field idf" data-k="' + k + '"><div class="idhead"><span class="lbl" id="' + id + '">' + f[1] + "</span>" + eye(k) + '</div><div class="chips" role="radiogroup" aria-labelledby="' + id + '">' +
      f[3].concat([PNTS]).map(function (o) { return '<button type="button" class="chip sm" role="radio" data-k="' + k + '" data-v="' + esc(o) + '" aria-pressed="false">' + esc(o) + "</button>"; }).join("") + "</div></div>";
    if (f[2] === "one") return '<div class="field idf" data-k="' + k + '">' + head + '<select id="' + id + '" data-k="' + k + '"><option value="">Choose…</option><option>' + PNTS + "</option>" + f[3].map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("") + "</select></div>";
    if (f[2] === "many") return '<div class="field idf" data-k="' + k + '"><div class="idhead"><span class="lbl" id="' + id + '">' + f[1] + "</span>" + eye(k) + '</div><div class="chips" role="group" aria-labelledby="' + id + '">' + f[3].concat([PNTS]).map(function (o) { return '<button type="button" class="chip sm" data-k="' + k + '" data-v="' + esc(o) + '" aria-pressed="false">' + esc(o) + "</button>"; }).join("") + "</div></div>";
    if (f[2] === "denom") return '<div class="field idf" data-k="' + k + '">' + head + '<select id="' + id + '" data-k="' + k + '"></select></div>';
    if (f[2] === "text") return '<div class="field idf" data-k="' + k + '">' + head + '<input type="text" id="' + id + '" data-k="' + k + '" maxlength="60" placeholder="Nurse, electrician, small-business owner…"><button type="button" class="chip sm pnts" data-k="' + k + '" data-v="' + PNTS + '" aria-pressed="false">' + PNTS + "</button></div>";
    if (f[2] === "city") return '<div class="field idf" data-k="' + k + '">' + head + '<div class="ac"><input type="text" id="' + id + '" data-k="' + k + '" maxlength="60" placeholder="Start typing: Mobile, AL" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="acList"><ul class="aclist" id="acList" role="listbox" hidden></ul></div><div class="chips"><button type="button" class="chip sm" data-k="' + k + '" data-v="Born outside the US" aria-pressed="false">Born outside the US</button><button type="button" class="chip sm pnts" data-k="' + k + '" data-v="' + PNTS + '" aria-pressed="false">' + PNTS + "</button></div></div>";
    return "";
  }
  function prefField(f) {
    var k = f[0], opts = prefOpts(f);
    return '<div class="field pf" data-k="' + k + '"><div class="idhead"><span class="lbl">' + f[1].replace(" (check all that apply)", "") + '</span><label class="deal" title="Only people who match what you picked here can be dealt into your 52"><input type="checkbox" data-deal="' + k + '"> Dealbreaker if not…</label></div><div class="chips" role="group" aria-label="' + esc(f[1]) + ' preference">' +
      [OPEN].concat(opts).map(function (o) { return '<button type="button" class="chip sm" data-pk="' + k + '" data-v="' + esc(o) + '" aria-pressed="false">' + esc(o) + "</button>"; }).join("") + "</div></div>";
  }
  function tabCounts() {
    var b = $('[data-ftc="basics"]'); if (!b) return;
    b.textContent = validate(false) ? "✓ Done" : "To finish";
    var answered = IDF.filter(function (f) { return asList(P.id[f[0]]).filter(Boolean).length; }).length;
    $('[data-ftc="about"]').textContent = answered + " of " + IDF.length;
    var set = Object.keys(P.prefs || {}).filter(function (k) { var pr = P.prefs[k]; return pr && pr.sel && pr.sel.length && pr.sel.indexOf(OPEN) < 0; }).length;
    $('[data-ftc="look"]').textContent = set ? set + " set" : "Open";
  }
  function syncIdentityUI() { setTimeout(tabCounts, 0); if (window.SF_deckRefresh) setTimeout(window.SF_deckRefresh, 0); if (typeof renderRooms === "function") setTimeout(renderRooms, 0);
    IDF.forEach(function (f) {
      var k = f[0], v = P.id[k], box = $('.idf[data-k="' + k + '"]');
      if (box) {
        if (f[2] === "one" && $("select", box)) $("select", box).value = v || "";
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
    if (f[2] === "one") { P.id[k] = P.id[k] === v ? "" : v; if (k === "religion") P.id.denomination = ""; syncIdentityUI(); onChange(); return; }
    if (f[2] === "many") {
      var list = asList(P.id[k]).filter(function (x) { return x !== PNTS; });
      if (v === PNTS) list = asList(P.id[k]).indexOf(PNTS) > -1 ? [] : [PNTS];
      else if (k === "faithPartner" && v === "No preference") list = asList(P.id[k]).indexOf(v) > -1 ? [] : [v];
      else { var i = list.indexOf(v); if (i > -1) list.splice(i, 1); else { if (k === "faithPartner") list = list.filter(function (x) { return x !== "No preference"; }); if (TOP3.indexOf(k) > -1 && list.length >= 3) { toast("Pick up to 3 that fit you best. Tap one to swap it out."); return; } list.push(v); } }
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
  var TOP3 = ["pronouns", "orientation", "race", "style", "faithPartner"]; // answers that decide who can see you: top 3 only
  function onPrefClick(e) {
    var c = e.target.closest("[data-pk]"); if (!c) return;
    var k = c.getAttribute("data-pk"), v = c.getAttribute("data-v"), pr = P.prefs[k] || { sel: [OPEN], deal: false };
    var sel = (pr.sel || []).filter(function (x) { return x !== OPEN; });
    if (v === OPEN) { sel = []; pr.deal = false; } else { var i = sel.indexOf(v); if (i > -1) sel.splice(i, 1); else { if (sel.length >= 3) { toast("Pick your top 3. Tap one to swap it out, or choose Open to anyone."); return; } sel.push(v); } }
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
        if (v === "push") { h.stage = "push"; h.pushAt = now(); toast("Push. If you don't both say Win within 24 hours, it becomes a Loss."); }
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
    var inFrame = window.top !== window.self;
    if (!navigator.geolocation || !window.isSecureContext) { locHelp(btn, "This page can't use location. Open suiteface.com in Safari or Chrome, or enter your ZIP or city."); return; }
    var old = btn.textContent, done = false; btn.disabled = true; btn.textContent = "Finding you…";
    function finish() { done = true; clearTimeout(dog); btn.disabled = false; btn.textContent = old; }
    var dog = setTimeout(function () { if (done) return; finish();
      locHelp(btn, inFrame ? "Location doesn't work inside this preview window. Open suiteface.com directly, or enter your ZIP or city."
        : "Your browser didn't answer. Check that location is turned on for your device and allowed for suiteface.com, then try again. Or just enter your ZIP or city."); }, 12000);
    navigator.geolocation.getCurrentPosition(function (pos) {
      if (done) return; finish();
      var z = nearestZip(pos.coords.latitude, pos.coords.longitude);
      if (z) setLocation(z, "Current location"); else locHelp(btn, "You look to be outside the US. Enter a US ZIP or city instead.");
    }, function (err) {
      if (done) return; finish();
      locHelp(btn, err && err.code === 1 ? (inFrame ? "Location is blocked inside this preview window. Open suiteface.com directly, or enter your ZIP or city."
        : "Location is blocked for suiteface.com. Tap the lock or ⓘ next to the web address, set Location to Allow, then try again. Or enter your ZIP or city.")
        : "Couldn't pin down your location. Turn on Location Services for your device, or enter your ZIP or city.");
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 });
  }
  function locHelp(btn, msg) {
    var h = btn.parentElement.querySelector(".lochelp"); if (!h) { h = document.createElement("p"); h.className = "lochelp"; h.setAttribute("role", "status"); btn.insertAdjacentElement("afterend", h); }
    h.textContent = msg; toast(msg); var z = $("#fZip"); if (z && btn.closest("form, .field, .two")) z.focus();
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
    dealer: ["Dealer", "Staff, approved by the Owner with the passcode: safety reports, member help and account holds. Can't change roles, prices or payments."],
    pitboss: ["Pit Boss", "IT, approved by the Owner with the passcode: system health, errors and the payment webhook. Never sees private member details."],
    owner: ["Owner", "Everything: player view, every console and the house numbers."]
  };
  /* On the public site the view switcher is hidden and everyone is a Guest until they sign in.
     A signed-in member gets their real role from the server (window.SF_LIVE.role). The switcher only
     appears in Claude's private preview or on a developer's own machine. */
  var PUBLIC_SITE = /(^|\.)suiteface\.com$/i.test(location.hostname);
  var ROLE = S.get("role", "guest"); if (!ROLE_INFO[ROLE]) ROLE = "guest";
  if (PUBLIC_SITE) ROLE = "guest"; // the real role arrives from the server once the visitor's session loads
  var CAN_SWITCH = !PUBLIC_SITE;
  var SIGNED = false;
  /* Live session: the server says who you are. An account that hasn't finished the Buy-In stays at the door. */
  function liveRole() {
    var L = window.SF_LIVE; SIGNED = !!L;
    if (L) ROLE = ROLE_INFO[L.role] ? (L.role === "player" && !L.seated ? "guest" : L.role) : "guest";
    else if (PUBLIC_SITE) ROLE = "guest";
    CAN_SWITCH = !PUBLIC_SITE || ROLE === "owner";
    if ($("#roleBtn")) $("#roleBtn").hidden = !CAN_SWITCH;
    applyRole();
  }
  document.addEventListener("sf:live", function () {
    liveRole();
    var after = null; try { after = sessionStorage.getItem("sf.after"); if (!/^(casino|table|tables)$/.test(after || "")) sessionStorage.removeItem("sf.after"); } catch (e) { }
    if (!window.SF_LIVE) return;
    if (/[?&]signedin=1/.test(location.search) || after) toast("Signed in as " + (window.SF_LIVE.email() || "a member") + ".");
    if (/[?&]linked=/.test(location.search)) toast("Account linked. Your details are ready to use on your Face.");
    if (after === "buyin" && ROLE === "guest") setTimeout(liveBuyIn, 400);
  });
  document.addEventListener("sf:recovery", function () {
    var m = modal('<h3 style="font-size:1.8rem">Choose a new password</h3><div class="field"><label for="npw">New password</label><input type="password" id="npw" autocomplete="new-password" minlength="10"></div><span class="err" id="npwErr"></span><div class="row"><button class="btn gold" type="button" id="npwGo">Save password</button></div>', { focus: "#npw" });
    $("#npwGo", m).onclick = function () { var v = $("#npw", m).value; if (v.length < 10) { $("#npwErr", m).textContent = "Use at least 10 characters."; return; } window.SF_AUTH.newPassword(v).then(function () { closeModal(); toast("Password saved. You're signed in."); }, function (e) { $("#npwErr", m).textContent = e.message; }); };
  });
  function liveBuyIn() {
    if (window.SF_AUTH && !window.SF_AUTH.__ready) { toast("One moment…"); window.SF_AUTH.ready(function () { window.SF_AUTH.__ready = true; liveBuyIn(); }); return; }
    if (!window.SF_LIVE) { try { sessionStorage.setItem("sf.after", "buyin"); } catch (e) { } loginModal("create"); return; }
    if (ROLE !== "guest") { toast("You're already seated. Welcome back!"); location.hash = "face"; return; }
    if (staffEmail()) { compOr("membership", null, function () { proceed(); }); return; }
    proceed(); return;
    function proceed() {
    var comp = (S.get("comp", "") || "").trim();
    var link = PLAN === "launch" && LAUNCH.open && CFG.stripeLaunchLink ? CFG.stripeLaunchLink : CFG.stripePaymentLink;
    window.SF_AUTH.checkout(link, comp ? "&prefilled_promo_code=" + encodeURIComponent(comp) : "").catch(function (e) { toast((e && e.message) || "Checkout couldn't start. Try again."); });
    }
  }
  if (!CAN_SWITCH && $("#roleBtn")) $("#roleBtn").hidden = true;
  function allowed(need) {
    if (!need) return true;
    if (need === "member") return ROLE !== "guest";
    if (ROLE === "owner") return true;
    return ROLE === need;
  }
  function setRole(r) { if (!CAN_SWITCH && r !== "guest" && r !== "player") return; ROLE = r; S.set("role", r); applyRole(); }
  function applyRole() {
    $("#roleName").textContent = ROLE_INFO[ROLE][0];
    document.documentElement.setAttribute("data-role", ROLE);
    $("#loginBtn").textContent = (ROLE === "guest" && !SIGNED) ? "Log in" : "Log out";
    $$("[data-only]").forEach(function (el) { el.hidden = ROLE !== el.getAttribute("data-only"); });
    $$("a[data-need]").forEach(function (a) { var n = a.getAttribute("data-need"); a.hidden = n !== "member" ? !allowed(n) : false; });
    $$("section[data-need]").forEach(function (sec) {
      var need = sec.getAttribute("data-need"), ok = allowed(need), wrap = sec.querySelector(":scope > .wrap");
      if (need !== "member") { sec.hidden = !ok; if (ok) renderConsole(sec.id); return; }
      sec.hidden = false; if (wrap) wrap.hidden = !ok;
      var lock = sec.querySelector(":scope > .lockpanel");
      if (lock && lock.getAttribute("data-s") !== String(SIGNED)) { lock.remove(); lock = null; }
      if (!ok && !lock) {
        lock = document.createElement("div"); lock.className = "lockpanel wrap"; lock.setAttribute("data-s", String(SIGNED));
        var t = { face: "Build your Face", table: "Your 52", map: "The Table Map", invite: "Invite friends to the table" }[sec.id] || "Members only";
        lock.innerHTML = '<div class="lockcard"><span class="lockicon" aria-hidden="true">' + pip("spade") + '</span><div><p class="eyebrow">Members only</p><h3>' + t + '</h3><p class="hint">' + (SIGNED ? "You're signed in. Finish your Buy-In to take your seat: $21.00 once, then $2.10 a month." : "Buy in to play: $21.00 once, then $2.10 a month. Already a member? Log in.") + '</p><div class="row"><a class="btn gold sm" href="#membership">Buy in · $21</a>' + (SIGNED ? "" : '<button class="btn ghost sm" type="button" data-login>Log in</button>') + '<a class="btn ghost sm" href="#demo">Watch the demo</a></div></div></div>';
        sec.appendChild(lock);
      }
      if (lock) lock.hidden = ok; sec.classList.toggle("is-locked", !ok);
      if (ok && sec.id === "map") setTimeout(renderMap, 50);
    });
  }
  $("#roleBtn").addEventListener("click", function () {
    var m = modal('<h3 style="font-size:1.8rem">View the site as…</h3><p class="lede" style="margin:6px 0 14px">Demo switch for this preview. In the live app, your login decides your view, and staff views are protected on the server.</p><div class="roles">' +
      Object.keys(ROLE_INFO).map(function (r) { return '<button type="button" class="rolecard' + (r === ROLE ? " on" : "") + '" data-r="' + r + '"><b>' + ROLE_INFO[r][0] + "</b><span>" + ROLE_INFO[r][1] + "</span></button>"; }).join("") + "</div>");
    $(".roles", m).addEventListener("click", function (e) { var b = e.target.closest("[data-r]"); if (!b) return; setRole(b.getAttribute("data-r")); closeModal(); toast("Now viewing as " + ROLE_INFO[ROLE][0] + "."); });
  });
  var PROV_ICON = {
    google: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9c-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.6-3.9zM13.9 4.9c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>'
  };
  function liveLogin(mode) {
    var create = mode === "create";
    var m = modal('<h3 style="font-size:1.8rem" id="lvT">' + (create ? "Create your account" : "Log in") + '</h3>' +
      '<p class="lede" style="margin:4px 0 12px" id="lvL">' + (create ? "One account for your Face, your 52 and every hand you play. Your $21 Buy-In comes next." : "Welcome back to the table.") + '</p>' +
      '<div class="authprov" id="lvProv"><span class="hint">Loading sign-in options…</span></div>' +
      '<div class="author"><span>or use email</span></div>' +
      '<form class="form-grid" id="lvForm" novalidate>' +
      '<div class="field"><label for="lvEmail">Email</label><input type="email" id="lvEmail" autocomplete="username" placeholder="you@example.com"></div>' +
      '<div class="field"><label for="lvPass">Password</label><div class="pw"><input type="password" id="lvPass" autocomplete="' + (create ? "new-password" : "current-password") + '" placeholder="' + (create ? "At least 10 characters" : "") + '"><button type="button" class="btn ghost sm" id="lvShow">Show</button></div></div>' +
      '<span class="err" id="lvErr" role="alert"></span><div class="ok" id="lvOk" role="status"></div>' +
      '<div class="row"><button class="btn gold" type="submit" id="lvGo">' + (create ? "Create account" : "Log in") + '</button><button class="btn ghost" type="button" id="lvMagic">Email me a sign-in link</button></div>' +
      '<p class="hint"><span id="lvSwap">' + (create ? 'Already have an account? <a href="#" data-mode="login">Log in</a>' : 'New here? <a href="#" data-mode="create">Create an account</a>') + '</span> · <a href="#" id="lvForgot">Forgot password?</a></p>' +
      '<p class="hint fine">By continuing you confirm you\'re 18 or older and agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>. SuiteFace never posts to your accounts.</p></form>' +
      (CAN_SWITCH ? '<div class="chips" style="margin-top:6px">' + ["player", "dealer", "pitboss", "owner"].map(function (r) { return '<button class="chip sm" type="button" data-demo="' + r + '">Preview: ' + ROLE_INFO[r][0] + "</button>"; }).join("") + "</div>" : ""), { focus: "#lvEmail" });
    var err = $("#lvErr", m), ok = $("#lvOk", m);
    function say(e, good) { err.textContent = good ? "" : e; ok.textContent = good ? e : ""; }
    function friendly(e) {
      var s = (e && e.message) || String(e);
      if (/Invalid login/i.test(s)) return "That email and password don't match. Try again, or use “Email me a sign-in link”.";
      if (/not confirmed/i.test(s)) return "Check your inbox and tap the confirmation link first.";
      if (/already registered/i.test(s)) return "That email already has an account. Log in instead.";
      if (/rate limit|too many/i.test(s)) return "Too many tries. Wait a minute and try again.";
      if (/Failed to fetch|offline|NetworkError/i.test(s)) return "Can't reach SuiteFace right now. Check your connection.";
      if (/error sending|sending .*email|smtp/i.test(s)) return "We couldn't send that email just now. Try again in a few minutes, or log in with your password.";
      return s;
    }
    window.SF_AUTH.ready(function (bad) {
      if (bad) { $("#lvProv", m).innerHTML = '<span class="hint">Sign-in is offline right now. Try again in a moment.</span>'; return; }
      window.SF_AUTH.providers().then(function (list) {
        $("#lvProv", m).innerHTML = list.length ? list.map(function (p) { return '<button type="button" class="btn provbtn prov-' + p[0] + '" data-oauth="' + p[0] + '">' + (PROV_ICON[p[0]] || "") + '<span>Continue with ' + esc(p[1]) + "</span></button>"; }).join("") : '<span class="hint">Google, Apple and Facebook sign-in open soon. Use email for now.</span>';
      });
    });
    $("#lvProv", m).addEventListener("click", function (e) {
      var b = e.target.closest("[data-oauth]"); if (!b) return; b.disabled = true; say("Opening " + b.textContent.replace("Continue with ", "") + "…", true);
      window.SF_AUTH.oauth(b.getAttribute("data-oauth")).catch(function (x) { b.disabled = false; say(friendly(x)); });
    });
    $("#lvShow", m).addEventListener("click", function () { var i = $("#lvPass", m); i.type = i.type === "password" ? "text" : "password"; this.textContent = i.type === "password" ? "Show" : "Hide"; });
    function email() { var v = $("#lvEmail", m).value.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { say("Enter a valid email address."); $("#lvEmail", m).focus(); return null; } return v; }
    $("#lvForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var em = email(); if (!em) return; var pw = $("#lvPass", m).value;
      if (create && pw.length < 10) { say("Use a password of at least 10 characters."); return; }
      if (!pw) { say("Enter your password, or tap “Email me a sign-in link”."); return; }
      $("#lvGo", m).disabled = true; say("");
      (create ? window.SF_AUTH.signUp(em, pw) : window.SF_AUTH.password(em, pw)).then(function (r) {
        $("#lvGo", m).disabled = false;
        if (create && r && r.data && r.data.user && Array.isArray(r.data.user.identities) && r.data.user.identities.length === 0) {
          say("That email already has an account. Log in with your password, or tap “Email me a sign-in link”."); return; }
        if (create && r && r.data && !r.data.session) { say("Almost there: we emailed " + em + ". Tap the link to confirm, and you'll come right back here, signed in.", true); return; }
        closeModal();
      }, function (x) { $("#lvGo", m).disabled = false; say(friendly(x)); });
    });
    $("#lvMagic", m).addEventListener("click", function () { var em = email(); if (!em) return; window.SF_AUTH.magic(em).then(function () { say("Sign-in link sent to " + em + ". Open it on this device.", true); }, function (x) { say(friendly(x)); }); });
    $("#lvForgot", m).addEventListener("click", function (e) { e.preventDefault(); var em = email(); if (!em) return; window.SF_AUTH.reset(em).then(function () { say("Password reset link sent to " + em + ".", true); }, function (x) { say(friendly(x)); }); });
    m.addEventListener("click", function (e) {
      var a = e.target.closest("[data-mode]"); if (a) { e.preventDefault(); closeModal(); liveLogin(a.getAttribute("data-mode")); return; }
      var d = e.target.closest("[data-demo]"); if (d) { setRole(d.getAttribute("data-demo")); closeModal(); toast("Previewing as " + ROLE_INFO[ROLE][0] + "."); }
    });
  }
  function loginModal(mode) {
    if (SIGNED && window.SF_AUTH) { window.SF_AUTH.signOut().then(function () { toast("Logged out. See you at the table."); }); return; }
    if (window.SF_AUTH && (PUBLIC_SITE || mode === "create" || mode === "login")) { liveLogin(typeof mode === "string" ? mode : "login"); return; }
    if (window.SF_AUTH && !PUBLIC_SITE) { liveLogin("login"); return; }
    if (ROLE !== "guest") { setRole("guest"); toast("Logged out. You're browsing as a guest."); return; }
    var m = modal('<h3 style="font-size:1.8rem">Log in</h3><form class="form-grid" id="loginForm" novalidate style="margin-top:10px">' +
      '<div class="field"><label for="lgEmail">Email</label><input type="email" id="lgEmail" autocomplete="username" placeholder="you@example.com"></div>' +
      '<div class="field"><label for="lgPass">Password</label><div class="pw"><input type="password" id="lgPass" autocomplete="current-password"><button type="button" class="btn ghost sm" id="lgShow">Show</button></div></div>' +
      '<span class="err" id="lgErr"></span><div class="row"><button class="btn gold" type="submit">Log in</button><button class="btn ghost" type="button" id="lgPasskey">Use a passkey</button></div>' +
      '<p class="hint">New here? <a href="#membership" data-close>Buy in first</a>. Your account is created right after your $21 Buy-In.</p></form>' +
      '<div class="notice pv" id="lgNote" hidden><b>Preview mode.</b> Member accounts open at launch, so no real login happens here. Try a demo view instead:<div class="chips" style="margin-top:10px">' +
      (CAN_SWITCH ? ["player", "dealer", "pitboss", "owner"] : ["player"]).map(function (r) { return '<button class="chip sm" type="button" data-demo="' + r + '">Demo: ' + ROLE_INFO[r][0] + "</button>"; }).join("") + "</div></div>", { focus: "#lgEmail" });
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
    if (dealerTab === "pauses") h = '<p class="hint">One pause per member every 210 days, up to 21 days each. Past day 21, end the membership; coming back needs a new $21 Buy-In.</p>' + DQ.pauses.map(function (r, i) { var over = r[1] > 21; return row(r[0], "Paused " + r[1] + " days", '<span class="pill ' + (over ? "bad" : r[1] >= 18 ? "warn" : "ok") + '">' + (over ? "Over 21 days" : (21 - r[1]) + " days left") + "</span>" + (over ? '<button class="btn red sm" data-act="end" data-i="' + i + '">End membership</button>' : '<button class="btn ghost sm" data-act="resume" data-i="' + i + '">Resume</button>')); }).join("");
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
      ["Forms → database", CFG.supabaseUrl && CFG.supabaseKey ? "Connected" : "Preview mode", CFG.supabaseUrl && CFG.supabaseKey ? "ok" : "warn", CFG.supabaseUrl ? "Saved to site_forms" + (CFG.formAccessKey ? " + emailed to help@" : "; email copy optional") : "Add supabaseUrl in config.js"],
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
    $("#ownerRules").innerHTML = '<ul class="incl"><li>Buy-In $21.00 · then $2.10 a month</li><li>One pause per 210 days, up to 21 days; longer ends membership (new $21 Buy-In to return)</li><li>Joker only on your first 3 dates together, within 12 hours of Play Hand</li><li>Win needs both to say Win; a Push not settled as a Win within 24 hours = automatic Loss, no Joker</li><li>10 Jokers in 180 days → Dealer review → public Joker for 180 days</li><li>Members never see their own Joker count</li><li>Joker buy-out $2,100.00 · off until counsel approves</li></ul><p class="hint">All figures on this console are sample data in the preview.</p>';
  }

  /* =====================================================================
     PRIVATE TABLES (database: casinos): player-built groups. $21 builds one (12 seats + 7 ZIPs included); $2.10 per extra seat or ZIP.
     The builder is the Host: naming rights, games, who joins. Joining is free.
     ===================================================================== */
  (function () {
    var KINDS = [["friendship", "", "Friendship"], ["faith", "", "Faith small group"], ["prayer", "", "Prayer group"], ["service", "", "Service & volunteering"], ["games", "", "Board games"], ["greek", "", "Greek life"], ["alumni", "", "Alumni"], ["club", "", "Club"], ["sports", "", "Sports & fitness"], ["hobby", "", "Hobbies"], ["parents", "", "Parents"], ["other", "", "Other"]];
    var KIND = {}; KINDS.forEach(function (k) { KIND[k[0]] = k; });
    var WHO = { everyone: "Everyone", men: "Men only", women: "Women only" };
    var US_STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","PR"];
    function reach(c) { return c.scope === "national" ? "Nationwide" : c.scope === "states" && (c.states || []).length ? (c.states || []).join(", ") : "ZIP " + (c.zips || []).slice(0, 7).join(", ") + ((c.zips || []).length > 7 ? " +" + ((c.zips || []).length - 7) : ""); }
    var EXAMPLES = [
      { id: "ex1", seats: 12, seated: 8, style: { felt: "wine", rail: "walnut", shape: "oval", themes: ["christian"], amenities: ["coffee", "prayer_space", "free"], tagline: "Iron sharpens iron", welcome: "Pull up a chair, brother.", city: "Birmingham, AL" }, name: "Tuesday Prayer Brothers", kind: "faith", about: "A small group of Christian men. Coffee, Scripture and honest talk.", zips: ["35203", "35205", "35209"], who: "men", join_mode: "request", host_handle: "marcus.t", members: 9, tables: [{ name: "Tuesday Night Table", meets: "Tue 7pm · coffee shop" }, { name: "Saturday Service", meets: "Sat 9am · food bank" }] },
      { id: "ex2", seats: 24, seated: 22, style: { felt: "plum", rail: "ebony", shape: "long", themes: ["games"], amenities: ["food", "late_night"], tagline: "Roll for initiative" }, name: "Magic City Game Night", kind: "games", about: "Board games, card games, snacks. Beginners welcome.", zips: ["35233", "35222"], who: "everyone", join_mode: "open", host_handle: "dana.rolls", members: 23, tables: [{ name: "Friday Strategy Table", meets: "Fri 7pm · game café" }] },
      { id: "ex3", seats: 52, seated: 40, style: { felt: "olive", rail: "gold", shape: "oval", themes: ["service", "outdoors"], amenities: ["family", "free", "accessible"], tagline: "Many hands" }, name: "Southside Volunteers", kind: "service", about: "Monthly service projects around town. Bring a friend.", zips: ["35205", "35211"], who: "everyone", join_mode: "open", host_handle: "kels.helps", members: 41, tables: [{ name: "Park Cleanup Crew", meets: "1st Sat · 8am" }, { name: "Meal Packers", meets: "3rd Thu · 6pm" }] },
      { id: "ex4", seats: 14, seated: 13, style: { felt: "charcoal", rail: "rose_gold", shape: "round", themes: ["alumni", "food"], amenities: ["food", "coffee"], tagline: "Once a grad, always a grad" }, name: "Alumni Brunch Club", kind: "alumni", about: "Grads who moved here and want a monthly brunch crew.", zips: ["35209", "35216"], who: "everyone", join_mode: "request", host_handle: "j.ortiz", members: 14, tables: [{ name: "Sunday Brunch", meets: "Last Sun · 11am" }] }
    ];
    var kindPick = "", lastList = [];
    function live() { return !!window.SF_LIVE; }
    function call(name, args) {
      if (live()) return window.SF_LIVE.rpc(name, args).then(function (r) { if (r.error) throw r.error; return r.data; });
      return rpc(name, args);
    }
    function kindLabel(k) { var x = KIND[k] || KIND.other; return (x[1] ? x[1] + " " : "") + x[2]; }
    function money(c) { return "$" + (c / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
    /* ----- Private Table designer: dropdowns, checkboxes and words; the scene is generated live ----- */
    var SC = window.SFCasino;
    function opt(list, cur) { return list.map(function (x) { return '<option value="' + x[0] + '"' + (x[0] === cur ? " selected" : "") + ">" + esc(x[1]) + "</option>"; }).join(""); }
    function designerHTML(st, kind) {
      st = st || {}; if (!SC) return "";
      var felts = Object.keys(SC.FELTS).map(function (k) { return [k, SC.FELTS[k][0]]; }), rails = Object.keys(SC.RAILS).map(function (k) { return [k, SC.RAILS[k][0]]; });
      var felt = st.felt || SC.KIND_FELT[kind] || "emerald";
      return '<fieldset class="cdes"><legend>Design your table</legend>' +
        '<div class="cdes-grid"><div class="field"><label for="cdFelt">Felt</label><select id="cdFelt">' + opt(felts, felt) + '</select><div class="cdes-colors" id="cdCustom"' + (felt === "custom" ? "" : " hidden") + '><label>Felt color <input type="color" id="cdC1" value="' + (st.c1 || "#1E6347") + '"></label></div></div>' +
        '<div class="field"><label for="cdRail">Rail</label><select id="cdRail">' + opt(rails, st.rail || "gold") + "</select></div>" +
        '<div class="field"><label for="cdShape">Shape</label><select id="cdShape">' + opt(SC.SHAPES, st.shape || "oval") + "</select></div></div>" +
        '<div class="field"><span class="lbl">What it\'s about <span class="hint">(check all that apply)</span></span><div class="cdes-checks">' + SC.THEMES.map(function (t) { return '<label class="ck"><input type="checkbox" name="cdTheme" value="' + t[0] + '"' + ((st.themes || []).indexOf(t[0]) > -1 ? " checked" : "") + "> <span>" + esc(t[1]) + "</span></label>"; }).join("") + "</div></div>" +
        '<div class="field"><span class="lbl">Good to know <span class="hint">(check all that apply)</span></span><div class="cdes-checks">' + SC.AMENITIES.map(function (t) { return '<label class="ck"><input type="checkbox" name="cdAm" value="' + t[0] + '"' + ((st.amenities || []).indexOf(t[0]) > -1 ? " checked" : "") + "> <span>" + esc(t[1]) + "</span></label>"; }).join("") + "</div></div>" +
        '<div class="cdes-grid"><div class="field"><label for="cdTag">Words on the felt</label><input type="text" id="cdTag" maxlength="80" value="' + esc(st.tagline || "") + '" placeholder="Iron sharpens iron"></div>' +
        '<div class="field"><label for="cdCity">City or area</label><input type="text" id="cdCity" maxlength="40" value="' + esc(st.city || "") + '" placeholder="Birmingham, AL"></div></div>' +
        '<div class="field"><label for="cdWelcome">Welcome note from you</label><textarea id="cdWelcome" maxlength="280" rows="2" placeholder="Pull up a chair. All are welcome here.">' + esc(st.welcome || "") + "</textarea></div></fieldset>";
    }
    function readDesign(m) {
      if (!$("#cdFelt", m)) return {};
      return { felt: $("#cdFelt", m).value, rail: $("#cdRail", m).value, shape: $("#cdShape", m).value, c1: $("#cdC1", m).value,
        themes: $$('input[name="cdTheme"]:checked', m).map(function (x) { return x.value; }), amenities: $$('input[name="cdAm"]:checked', m).map(function (x) { return x.value; }),
        tagline: $("#cdTag", m).value.trim(), city: $("#cdCity", m).value.trim(), welcome: $("#cdWelcome", m).value.trim() };
    }
    function fillDesign(m, dz) {
      if (!$("#cdFelt", m) || !dz) return;
      if (dz.felt) { $("#cdFelt", m).value = dz.felt; m.__feltTouched = true; } if (dz.rail) $("#cdRail", m).value = dz.rail; if (dz.shape) $("#cdShape", m).value = dz.shape; if (dz.c1) $("#cdC1", m).value = dz.c1;
      $$('input[name="cdTheme"]', m).forEach(function (x) { x.checked = (dz.themes || []).indexOf(x.value) > -1; });
      $$('input[name="cdAm"]', m).forEach(function (x) { x.checked = (dz.amenities || []).indexOf(x.value) > -1; });
      $("#cdTag", m).value = dz.tagline || ""; $("#cdCity", m).value = dz.city || ""; $("#cdWelcome", m).value = dz.welcome || "";
    }
    function wireDesigner(m, getTable, previewEl) {
      if (!SC || !previewEl) return;
      function draw() { var c = getTable(); c.style = readDesign(m); $("#cdCustom", m).hidden = c.style.felt !== "custom"; SC.render(previewEl, c); }
      m.__draw = draw;
      m.addEventListener("input", function (e) { if (e.target.closest(".cdes") || /^cb(Name|Kind|Seats)$/.test(e.target.id)) draw(); });
      m.addEventListener("change", function (e) { if (e.target.closest(".cdes") || /^cb(Kind|Seats)$/.test(e.target.id)) draw(); });
      draw();
    }
    function seatsLine(c) { if (c.seats == null) return ""; var open = Math.max(0, c.seats - (c.seated || 0)); return open ? open + " of " + c.seats + " seats open" : "Full · " + c.seats + " seats"; }

    if (SC && $("#casArt")) $("#casArt").innerHTML = SC.svg({ name: "Your name here", kind: "friendship", seats: 12, seated: 7, style: { felt: "wine", rail: "gold", tagline: "Pull up a chair" } });
    $("#casKinds").innerHTML = '<button class="chip sm" type="button" data-kind="" aria-pressed="true">All</button>' + KINDS.map(function (k) { return '<button class="chip sm" type="button" data-kind="' + k[0] + '" aria-pressed="false">' + k[1] + " " + esc(k[2]) + "</button>"; }).join("");
    $("#casKinds").addEventListener("click", function (e) { var b = e.target.closest("[data-kind]"); if (!b) return; kindPick = b.getAttribute("data-kind"); $$("[data-kind]", this).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); find(); });
    $("#casFind").addEventListener("submit", function (e) { e.preventDefault(); find(); });
    $("#casZip").addEventListener("input", function () { this.value = this.value.replace(/\D/g, "").slice(0, 5); });

    function card(c, example) {
      var t = (c.tables || []);
      return '<button type="button" class="cascard' + (example ? " ex" : "") + '" data-cas="' + esc(c.id) + '">' +
        '<span class="casmarq"><i>' + esc(KIND[c.kind] ? KIND[c.kind][1] : "🃏") + "</i>" + esc(c.name) + "</span>" +
        '<span class="casmeta">' + esc(kindLabel(c.kind)) + " · " + esc(WHO[c.who] || "Everyone") + " · " + (c.join_mode === "open" ? "Open to join" : "Host approves") + "</span>" +
        (c.about ? '<span class="casabout">' + esc(c.about) + "</span>" : "") +
        '<span class="castables">' + t.slice(0, 3).map(function (x) { return "<em>" + esc(x.name) + (x.meets ? " · " + esc(x.meets) : "") + "</em>"; }).join("") + (t.length > 3 ? "<em>+" + (t.length - 3) + " more</em>" : "") + "</span>" +
        '<span class="casfoot">' + (c.host_handle ? "Host @" + esc(c.host_handle) : "Hosted by a member") + " · " + (seatsLine(c) || (c.members || 1) + " member" + ((c.members || 1) === 1 ? "" : "s")) + (c.my_status ? ' · <b>' + esc({ host: "You host this", member: "You're in", requested: "Request sent" }[c.my_status] || "") + "</b>" : "") + (example ? ' · <b class="exb">Example</b>' : "") + "</span></button>";
    }
    function show(list, note) {
      lastList = list;
      var box = $("#casList");
      if (list.length) { box.innerHTML = list.map(function (c) { return card(c, false); }).join(""); return; }
      var ex = EXAMPLES.filter(function (c) { return !kindPick || c.kind === kindPick; });
      box.innerHTML = '<p class="hint casempty">' + esc(note || "No Private Tables open here yet. Be the first to build one.") + " Here's what they look like:</p>" + ex.map(function (c) { return card(c, true); }).join("");
    }
    function find() {
      var zip = $("#casZip").value, q = $("#casQ").value.trim();
      if (!CFG.supabaseUrl) { show([], "Preview mode."); return; }
      $("#casList").innerHTML = '<p class="hint">Shuffling the floor…</p>';
      call("casino_search", { p_zip: zip || null, p_kind: kindPick || null, p_q: q || null }).then(function (r) {
        r = r || []; show(r);
        if (r.length) call("casino_styles", { p_ids: r.map(function (x) { return x.id; }) }).then(function (st) { (st || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) c.style = x.style; }); }); }, function () { });
        if (r.length) call("casino_seats", { p_ids: r.map(function (x) { return x.id; }) }).then(function (sv) { (sv || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) { c.seats = x.seats; c.seated = x.seated; } }); }); if (lastList === r) show(r); }, function () { });
        if (r.length) call("casino_coverage", { p_ids: r.map(function (x) { return x.id; }) }).then(function (cv) { (cv || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) { c.scope = x.scope; c.states = x.states; } }); }); }, function () { });
      }, function () { show([], "Private Tables couldn't load right now."); });
    }
    $("#casList").addEventListener("click", function (e) {
      var b = e.target.closest("[data-cas]"); if (!b) return; var id = b.getAttribute("data-cas");
      var c = lastList.filter(function (x) { return x.id === id; })[0] || EXAMPLES.filter(function (x) { return x.id === id; })[0]; if (c) openCasino(c, /^ex/.test(id));
    });

    function needLogin(after) {
      try { sessionStorage.setItem("sf.after", after); } catch (e) { }
      toast("Sign in or create a free account first.");
      loginModal("create");
    }

    function openCasino(c, example) {
      var host = c.my_status === "host";
      var m = modal((SC ? '<div id="cjScene"></div>' : '<div class="casign big" aria-hidden="true"><span>' + esc(kindLabel(c.kind)) + "</span><b>" + esc(c.name) + "</b><span>Host @" + esc(c.host_handle || "host") + "</span></div>") +
        '<p class="hint" style="margin:8px 0 0">' + esc(kindLabel(c.kind)) + " · " + (c.host_handle ? "Host @" + esc(c.host_handle) : "Hosted by a member") + (example ? ' · <a href="private-table.html?demo=1" data-democas>Walk in to this example ›</a>' : ' · <a href="private-table.html?c=' + encodeURIComponent(c.id) + '">Walk in to the table ›</a>') + "</p>" +
        (c.about ? '<p class="lede" style="margin:12px 0 6px">' + esc(c.about) + "</p>" : "") +
        '<p class="hint">' + esc(WHO[c.who] || "Everyone") + " · " + (c.join_mode === "open" ? "Open to join" : "The Host approves each request") + " · " + (seatsLine(c) || (c.members || 1) + " members") + " · " + esc(reach(c)) + "</p>" +
        '<h4 style="margin:14px 0 6px">Games</h4><ul class="castbl">' + (c.tables || []).map(function (t) { return "<li><b>" + esc(t.name) + "</b>" + (t.meets ? "<span>" + esc(t.meets) + "</span>" : "") + "</li>"; }).join("") + "</ul>" +
        '<p class="hint">Meet in public places, and never send money to anyone. <a href="safety.html" target="_blank" rel="noopener">Safety Guide</a></p>' +
        '<span class="err" id="cjErr"></span><div class="row" style="margin-top:10px">' +
        (example ? '<button class="btn gold" type="button" data-build-casino>Build one like it · $21</button>' :
          host ? '<button class="btn gold" type="button" id="cjManage">Run this Private Table</button>' :
          c.my_status === "member" || c.my_status === "requested" ? '<button class="btn ghost" type="button" id="cjLeave">' + (c.my_status === "member" ? "Leave this table" : "Cancel request") + "</button>" :
          '<button class="btn gold" type="button" id="cjJoin">' + (c.join_mode === "open" ? "Join free" : "Ask to join") + "</button>") +
        '<button class="btn ghost" type="button" data-close>Close</button></div>');
      if (SC) SC.render($("#cjScene", m), c);
      var dl = $("[data-democas]", m); if (dl) dl.addEventListener("click", function () { try { sessionStorage.setItem("sf.demoCasino", JSON.stringify(Object.assign({}, c, { my_status: null, status: "open" }))); } catch (e) { } });
      if (example) return;
      if ($("#cjJoin", m)) $("#cjJoin", m).onclick = function () {
        if (!live()) { needLogin("tables"); return; }
        call("join_casino", { p_casino: c.id }).then(function (st) { closeModal(); toast(st === "member" ? "You're in! Welcome to " + c.name + "." : "Request sent. The Host will let you in."); find(); }, function (e) {
          if (/Sign-up Agreement/i.test(e.message)) { window.SFSign.require("signup", function () { $("#cjJoin", m).click(); }); return; }
          $("#cjErr", m).textContent = e.message; });
      };
      if ($("#cjLeave", m)) $("#cjLeave", m).onclick = function () { call("leave_casino", { p_casino: c.id }).then(function () { closeModal(); toast("Done."); find(); }, function (e) { $("#cjErr", m).textContent = e.message; }); };
      if ($("#cjManage", m)) $("#cjManage", m).onclick = function () { closeModal(); manage(c); };
    }

    /* ----- Build ----- */
    function buildModal() {
      if (!live() && PUBLIC_SITE) { needLogin("table"); return; }
      var zips = []; if (/^\d{5}$/.test(P.zip || "")) zips.push(P.zip);
      var m = modal('<h3 style="font-size:1.8rem">Build your Private Table</h3><p class="lede" style="margin:4px 0 12px">You name it, you run it. $21 once includes 12 seats and 7 ZIP codes.</p>' +
        (SC ? '<div id="cbScene" class="cbscene"></div>' : '<div class="casign big" id="cbSign" aria-hidden="true"><span id="cbKindL">🤝 Friendship</span><b id="cbNameL">YOUR TABLE</b><span>Host @' + esc(P.handle || "you") + "</span></div>") +
        '<form class="form-grid" id="cbForm" novalidate style="margin-top:14px">' +
        '<div class="field"><label for="cbName">Table name</label><input type="text" id="cbName" maxlength="40" placeholder="Tuesday Prayer Brothers"><span class="hint" id="cbNameHint">3–40 characters. Names are checked before opening.</span></div>' +
        '<div class="field"><label for="cbKind">What kind of table?</label><select id="cbKind">' + KINDS.map(function (k) { return '<option value="' + k[0] + '">' + k[1] + " " + esc(k[2]) + "</option>"; }).join("") + "</select></div>" +
        '<div class="field"><label for="cbAbout">About it</label><textarea id="cbAbout" maxlength="600" rows="3" placeholder="Who it\'s for and what you do together."></textarea></div>' +
        '<div class="field"><label for="cbWho">Who can join?</label><select id="cbWho"><option value="everyone">Everyone</option><option value="men">Men only</option><option value="women">Women only</option></select></div>' +
        '<div class="field"><label for="cbJoin">How do people join?</label><select id="cbJoin"><option value="request">I approve each request</option><option value="open">Anyone can join</option></select></div>' +
        '<div class="field"><label for="cbSeats">Seats at your table <span class="hint">(not counting you)</span></label><div class="cbseats"><input type="range" id="cbSeats" min="2" max="52" step="1" value="12" aria-describedby="cbSeatsOut"><output id="cbSeatsOut" for="cbSeats">12 seats · included</output></div><span class="hint">12 seats are included. Each extra seat is $2.10 once, up to 52. Fewer seats keep it close-knit.</span></div>' +
        '<div class="field"><span class="lbl">How far does it reach?</span><div class="chips" id="cbScope" role="radiogroup" aria-label="Coverage">' +
          [["zips", "📍 ZIP codes", "7 included"], ["states", "🗺️ Statewide", "$210 per state"], ["national", "🇺🇸 Nationwide", "$2,100"]].map(function (o, i) { return '<button type="button" class="chip" role="radio" data-scope="' + o[0] + '" aria-pressed="' + (i === 0) + '">' + o[1] + ' <small>' + o[2] + "</small></button>"; }).join("") + "</div></div>" +
        '<div class="field" id="cbStateField" hidden><span class="lbl">Which states? <span class="hint">(tap all that apply)</span></span><div class="chips cbstates" id="cbStates">' +
          US_STATES.map(function (st) { return '<button type="button" class="chip sm" data-st="' + st + '" aria-pressed="false">' + st + "</button>"; }).join("") + "</div></div>" +
        '<div class="field" id="cbZipField"><label for="cbZipIn">ZIP codes it covers</label><div class="casbar"><input type="text" id="cbZipIn" inputmode="numeric" maxlength="5" placeholder="35203"><button class="btn ghost sm" type="button" id="cbZipAdd">Add ZIP</button></div><div class="chips" id="cbZips"></div><span class="hint" id="cbCost"></span></div>' + '<p class="hint" id="cbScopeCost"></p>' +
        designerHTML({}, "friendship") +
        '<div class="field"><label for="cbTable">Your first game <span class="hint">(what you do together)</span></label><input type="text" id="cbTable" maxlength="40" placeholder="Tuesday Night Study"></div>' +
        '<div class="field"><label for="cbMeets">When and where it meets (a public place)</label><input type="text" id="cbMeets" maxlength="120" placeholder="Tuesdays 7pm · coffee shop downtown"></div>' +
        '<span class="err" id="cbErr" role="alert"></span>' +
        '<div class="row"><button class="btn gold" type="submit" id="cbGo">Sign &amp; build</button><button class="btn ghost" type="button" id="cbDraft">Save draft · pay later</button><button class="btn ghost" type="button" data-close>Cancel</button></div></form>', { focus: "#cbName" });
      var nameT = null;
      var scope = "zips", states = [];
      function seatsN() { return Math.max(2, Math.min(52, parseInt($("#cbSeats", m).value, 10) || 12)); }
      function total() { return 2100 + Math.max(0, seatsN() - 12) * 210 + (scope === "zips" ? Math.max(0, zips.length - 7) * 210 : 0) + (scope === "states" ? states.length * 21000 : 0) + (scope === "national" ? 210000 : 0); }
      function cost() {
        var extra = scope === "zips" ? Math.max(0, zips.length - 7) : 0;
        $("#cbZipField", m).hidden = scope !== "zips"; $("#cbStateField", m).hidden = scope !== "states";
        $$("[data-scope]", m).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-scope") === scope)); });
        $$("[data-st]", m).forEach(function (b) { b.setAttribute("aria-pressed", String(states.indexOf(b.getAttribute("data-st")) > -1)); });
        $("#cbZips", m).innerHTML = zips.map(function (z) { return '<button type="button" class="chip sm" data-z="' + z + '" aria-label="Remove ZIP ' + z + '">' + z + " ✕</button>"; }).join("");
        $("#cbCost", m).textContent = zips.length + " ZIP" + (zips.length === 1 ? "" : "s") + " · $21.00" + (extra ? " + " + extra + " extra × $2.10 = " + money(total()) : " (up to 7 included)");
        $("#cbScopeCost", m).textContent = scope === "zips" ? "" : scope === "states" ? (states.length ? "$21.00 build + " + states.length + " state" + (states.length === 1 ? "" : "s") + " × $210 = " + money(total()) : "Tap the states your table covers.") : "$21.00 build + $2,100 nationwide = " + money(total());
        var sx = Math.max(0, seatsN() - 12);
        $("#cbSeatsOut", m).textContent = seatsN() + " seats · " + (sx ? "+" + sx + " × $2.10 = " + money(sx * 210) : "included");
        $("#cbGo", m).textContent = "Sign & build · " + money(total());
      }
      function addZip() { var v = $("#cbZipIn", m).value.replace(/\D/g, ""); if (!/^\d{5}$/.test(v)) { $("#cbErr", m).textContent = "Enter a 5-digit ZIP code."; return; } if (zips.indexOf(v) < 0) zips.push(v); $("#cbZipIn", m).value = ""; $("#cbErr", m).textContent = ""; cost(); }
      $("#cbZipAdd", m).onclick = addZip;
      $("#cbScope", m).addEventListener("click", function (e) { var b = e.target.closest("[data-scope]"); if (!b) return; scope = b.getAttribute("data-scope"); cost(); });
      $("#cbStates", m).addEventListener("click", function (e) { var b = e.target.closest("[data-st]"); if (!b) return; var st = b.getAttribute("data-st"), i = states.indexOf(st); if (i > -1) states.splice(i, 1); else states.push(st); cost(); });
      $("#cbZipIn", m).addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); addZip(); } });
      $("#cbZips", m).addEventListener("click", function (e) { var b = e.target.closest("[data-z]"); if (!b) return; zips.splice(zips.indexOf(b.getAttribute("data-z")), 1); cost(); });
      $("#cbSeats", m).addEventListener("input", cost);
      $("#cbKind", m).onchange = function () { if ($("#cbKindL", m)) $("#cbKindL", m).textContent = kindLabel(this.value); if ($("#cdFelt", m) && !m.__feltTouched) { $("#cdFelt", m).value = SC.KIND_FELT[this.value] || "emerald"; if (m.__draw) m.__draw(); } };
      if ($("#cdFelt", m)) $("#cdFelt", m).addEventListener("change", function () { m.__feltTouched = true; });
      wireDesigner(m, function () { return { id: "preview", name: $("#cbName", m).value.trim() || "Your Private Table", kind: $("#cbKind", m).value, seats: seatsN(), seated: 0, tables: [{ name: $("#cbTable", m).value.trim() || "Main game", meets: $("#cbMeets", m).value.trim() }] }; }, $("#cbScene", m));
      $("#cbName", m).addEventListener("input", function () {
        var v = this.value.trim(); if ($("#cbNameL", m)) $("#cbNameL", m).textContent = v ? v.toUpperCase() : "YOUR TABLE";
        clearTimeout(nameT); if (v.length < 3 || !CFG.supabaseUrl) return;
        nameT = setTimeout(function () { rpc("casino_name_available", { p_name: v }).then(function (ok) { $("#cbNameHint", m).textContent = ok ? "✓ " + v + " is available." : v + " is taken. Try another name."; $("#cbNameHint", m).className = ok ? "hint good" : "hint bad"; }, function () { }); }, 350);
      });
      cost();
      /* Draft: everything typed here is kept on this device until the Private Table is built, so nothing is lost. */
      var DKEY = "casinoDraft";
      function readDraft() {
        return { name: $("#cbName", m).value, kind: $("#cbKind", m).value, about: $("#cbAbout", m).value, who: $("#cbWho", m).value, join: $("#cbJoin", m).value,
          table: $("#cbTable", m).value, meets: $("#cbMeets", m).value, zips: zips.slice(), scope: scope, states: states.slice(), seats: seatsN(), design: readDesign(m), at: Date.now() };
      }
      var saveDraftT = null;
      function saveCasinoDraft() { clearTimeout(saveDraftT); saveDraftT = setTimeout(function () { S.set(DKEY, readDraft()); var n = $("#cbSaved", m); if (n) n.textContent = "Draft saved ✓"; }, 300); }
      var dr = S.get(DKEY, null);
      if (dr && dr.name !== undefined) {
        $("#cbName", m).value = dr.name || ""; $("#cbKind", m).value = dr.kind || "friendship"; $("#cbAbout", m).value = dr.about || "";
        $("#cbWho", m).value = dr.who || "everyone"; $("#cbJoin", m).value = dr.join || "request"; $("#cbTable", m).value = dr.table || ""; $("#cbMeets", m).value = dr.meets || "";
        zips = dr.zips || zips; scope = dr.scope || "zips"; states = dr.states || [];
        if (dr.seats) $("#cbSeats", m).value = dr.seats;
        fillDesign(m, dr.design || {}); if (m.__draw) m.__draw();
        cost(); $("#cbName", m).dispatchEvent(new Event("input", { bubbles: true }));
      }
      var bar = document.createElement("div"); bar.className = "cbdraft";
      bar.innerHTML = '<span id="cbSaved">' + (dr && dr.name !== undefined ? "Draft restored ✓ Pick up where you left off." : "Your progress saves as you go.") + '</span><button type="button" class="linkish" id="cbReset">Start over</button>';
      $("#cbForm", m).insertBefore(bar, $("#cbForm", m).firstChild);
      $("#cbReset", m).onclick = function () { if (!confirm("Clear this Private Table draft and start over?")) return; S.set(DKEY, null); closeModal(); buildModal(); };
      m.addEventListener("input", saveCasinoDraft); m.addEventListener("change", saveCasinoDraft); m.addEventListener("click", function (e) { if (e.target.closest("[data-scope],[data-st],[data-z],#cbZipAdd")) saveCasinoDraft(); });
      var draftOnly = false;
      $("#cbDraft", m).onclick = function () { draftOnly = true; $("#cbForm", m).requestSubmit ? $("#cbForm", m).requestSubmit() : $("#cbForm", m).dispatchEvent(new Event("submit", { cancelable: true })); };
      $("#cbGo", m).addEventListener("click", function () { draftOnly = false; });
      $("#cbForm", m).addEventListener("submit", function (e) {
        e.preventDefault(); var err = $("#cbErr", m);
        var d = { style: readDesign(m), p_name: $("#cbName", m).value.trim(), p_kind: $("#cbKind", m).value, p_about: $("#cbAbout", m).value.trim(), p_zips: zips.slice(), p_who: $("#cbWho", m).value, p_join: $("#cbJoin", m).value, p_first_table: $("#cbTable", m).value.trim(), p_meets: $("#cbMeets", m).value.trim() };
        if (d.p_name.length < 3) { err.textContent = "Give your Private Table a name (3–40 characters)."; return; }
        if (scope === "zips" && !zips.length) { err.textContent = "Add at least one ZIP code, or choose Statewide or Nationwide."; return; }
        if (scope === "states" && !states.length) { err.textContent = "Tap at least one state."; return; }
        if (scope !== "zips") d.p_zips = [];
        err.textContent = "";
        if (!live()) { // private preview only
          closeModal(); if (window.SFX) window.SFX.celebrate(document.body, { game: "cards", title: d.p_name.toUpperCase(), thanks: "Preview: on the live site this opens Stripe for " + money(total()) + ", then your Private Table opens after a quick name check." });
          P.hostCasinos = [d.p_name]; saveP(); renderCard(); return;
        }
        function build() {
          var args = Object.assign({}, d); delete args.style;
          window.SF_LIVE.rpc("build_casino", args).then(function (r) {
            if (r.error) {
              if (/Sign-up Agreement/i.test(r.error.message)) { window.SFSign.require("signup", build); return; }
              if (/Host Agreement/i.test(r.error.message)) { window.SFSign.require("casino", build, { about: d.p_name }); return; }
              err.textContent = r.error.message; return;
            }
            var newId = r.data.id; S.set("casinoDraft", null);
            window.SF_LIVE.rpc("set_casino_scope", { p_casino: newId, p_scope: scope, p_states: states }).then(function (sr) {
              if (sr.error) { err.textContent = sr.error.message; return; }
              return window.SF_LIVE.rpc("set_casino_seats", { p_casino: newId, p_seats: seatsN() }).then(function (xr) { if (xr.error) { err.textContent = xr.error.message; throw xr.error; } });
            }).then(function () {
              window.SF_LIVE.rpc("set_casino_style", { p_casino: newId, p_style: d.style || {} }).then(function () {
                if (draftOnly) { closeModal(); toast("🚧 Saved as Under construction. Finish it anytime under Private Tables you host."); loadMine(); var cm = $("#casMine"); if (cm) setTimeout(function () { cm.scrollIntoView({ behavior: "smooth", block: "center" }); }, 400); return; }
                pay("build", newId, null, err);
              });
            }, function () { });
          });
        }
        window.SFSign.require("casino", build, { about: d.p_name });
      });
    }
    function pay(action, id, order, errEl, skipComp) {
      if (!skipComp && (houseCode() || staffEmail())) {
        compOr(action === "build" ? "casino_build" : "casino_zips", action === "build" ? id : order, function () { pay(action, id, order, errEl, true); },
          function () { closeModal(); toast("🎩 Comped by the house. Your Private Table is in for its name check."); loadMine(); find(); });
        return;
      }
      fetch(CFG.supabaseUrl + "/functions/v1/casino-billing", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + window.SF_LIVE.token() }, body: JSON.stringify({ action: action, id: id, order: order }) })
        .then(function (r) { return r.json(); }).then(function (j) { if (j.url) location.href = j.url; else if (errEl) errEl.textContent = j.error || "Checkout couldn't start."; else toast(j.error || "Checkout couldn't start."); }, function () { if (errEl) errEl.textContent = "Checkout couldn't start. Try again."; });
    }
    document.addEventListener("click", function (e) { if (e.target.closest("[data-build-casino]")) { e.preventDefault(); if ($("#modal")) closeModal(); buildModal(); } });

    /* ----- Host tools ----- */
    function manage(c) {
      var m = modal('<h3 style="font-size:1.8rem">Run ' + esc(c.name) + '</h3><p class="hint">' + ({ unpaid: "🚧 Under construction. Edit anything below, then tap Finish & pay when it's ready.", review: "Paid. Waiting for the name check; you can set up games now.", open: "Open on the floor.", rejected: "Not approved: " + (c.review_note || "rename and resubmit for free.") }[c.status] || "") + "</p>" +
        '<h4>Members &amp; requests</h4><div id="cmPeople" class="cmpeople"><p class="hint">Loading…</p></div>' +
        '<h4>Seats</h4><div class="casbar"><input type="number" id="cmSeats" min="2" max="52" value="' + (c.seats || 12) + '" aria-label="Seats at your table, not counting you"><button class="btn ghost sm" type="button" id="cmSeatsGo">Save seats</button></div><p class="hint">' + (c.status === "unpaid" ? "12 included; extra seats are $2.10 each at checkout." : "You've paid for " + (c.seats_paid || 12) + " seats. More are $2.10 each, up to 52.") + "</p>" +
        '<h4>Add a game</h4><div class="casbar"><input type="text" id="cmTName" maxlength="40" placeholder="Saturday Service"><input type="text" id="cmTMeets" maxlength="120" placeholder="Sat 9am · food bank"><button class="btn ghost sm" type="button" id="cmTAdd">Add game</button></div>' +
        '<h4>Add ZIP codes · $2.10 each</h4><div class="casbar"><input type="text" id="cmZips" maxlength="60" placeholder="35212, 35213"><button class="btn ghost sm" type="button" id="cmZipGo">Pay &amp; add</button></div>' +
        (c.status === "rejected" ? '<h4>Rename &amp; resubmit (free)</h4><div class="casbar"><input type="text" id="cmRename" maxlength="40" value="' + esc(c.name) + '"><button class="btn ghost sm" type="button" id="cmRenameGo">Resubmit</button></div>' : "") +
        (c.status === "unpaid" ? '<h4>Name &amp; details</h4><div class="field"><label for="cmName">Table name</label><input type="text" id="cmName" maxlength="40" value="' + esc(c.name) + '"></div>' +
          '<div class="field"><label for="cmAbout">About it</label><textarea id="cmAbout" maxlength="600" rows="3">' + esc(c.about || "") + '</textarea></div>' +
          '<div class="row"><button class="btn ghost sm" type="button" id="cmSaveInfo">Save details</button></div>' +
          '<div class="row" style="margin-top:12px"><button class="btn gold" type="button" id="cmPay">Finish &amp; pay</button></div>' : "") +
        (SC ? '<h4>Redesign</h4><div class="row"><button class="btn ghost sm" type="button" id="cmDesign">Change your table’s look</button><a class="btn ghost sm" href="private-table.html?c=' + encodeURIComponent(c.id) + '">Walk in ›</a></div>' : "") +
        '<span class="err" id="cmErr" role="alert"></span><div class="row" style="margin-top:12px"><button class="btn ghost sm" type="button" id="cmClose">Close this table</button><button class="btn ghost" type="button" data-close>Done</button></div>');
      var err = $("#cmErr", m);
      function people() {
        call("casino_requests", { p_casino: c.id }).then(function (rows) {
          $("#cmPeople", m).innerHTML = (rows || []).map(function (p) { return '<div class="cmrow"><span>@' + esc(p.handle) + " · " + esc(p.face_name || "") + (p.status === "host" ? " (you)" : p.status === "requested" ? " · <b>wants in</b>" : "") + "</span>" + (p.status === "requested" ? '<button class="chip sm" data-act="approve" data-mid="' + p.member_id + '">Let in</button><button class="chip sm" data-act="decline" data-mid="' + p.member_id + '">Decline</button>' : p.status === "member" ? '<button class="chip sm" data-act="remove" data-mid="' + p.member_id + '">Remove</button>' : "") + "</div>"; }).join("") || '<p class="hint">No members yet. Share your table’s name.</p>';
        }, function (e) { err.textContent = e.message; });
      }
      people();
      $("#cmPeople", m).addEventListener("click", function (e) { var b = e.target.closest("[data-act]"); if (!b) return; call("decide_casino_member", { p_casino: c.id, p_member: b.getAttribute("data-mid"), p_action: b.getAttribute("data-act") }).then(people, function (x) { err.textContent = x.message; }); });
      $("#cmTAdd", m).onclick = function () { var n = $("#cmTName", m).value.trim(); if (n.length < 2) { err.textContent = "Name the game."; return; } call("save_casino_table", { p_casino: c.id, p_name: n, p_meets: $("#cmTMeets", m).value.trim() }).then(function () { toast("Game added."); $("#cmTName", m).value = $("#cmTMeets", m).value = ""; loadMine(); }, function (x) { err.textContent = x.message; }); };
      $("#cmZipGo", m).onclick = function () { var z = ($("#cmZips", m).value.match(/\d{5}/g) || []); if (!z.length) { err.textContent = "Enter ZIP codes, separated by commas."; return; } call("add_casino_zips", { p_casino: c.id, p_zips: z }).then(function (r) { pay("zips", c.id, r.order, err); }, function (x) { err.textContent = x.message; }); };
      if ($("#cmRenameGo", m)) $("#cmRenameGo", m).onclick = function () { call("rename_casino", { p_casino: c.id, p_name: $("#cmRename", m).value.trim() }).then(function () { closeModal(); toast("Resubmitted for the name check."); loadMine(); }, function (x) { err.textContent = x.message; }); };
      $("#cmSeatsGo", m).onclick = function () { var n = parseInt($("#cmSeats", m).value, 10); call("set_casino_seats", { p_casino: c.id, p_seats: n }).then(function (r) { if (r && r.order) { pay("zips", c.id, r.order, err); return; } c.seats = n; toast("Seats saved: " + n + "."); loadMine(); }, function (x) { err.textContent = x.message; }); };
      if ($("#cmDesign", m)) $("#cmDesign", m).onclick = function () { closeModal(); redesign(c); };
      if ($("#cmSaveInfo", m)) $("#cmSaveInfo", m).onclick = function () {
        var nm = $("#cmName", m).value.trim(), ab = $("#cmAbout", m).value.trim();
        var jobs = [call("update_casino", { p_casino: c.id, p_about: ab, p_who: c.who || "everyone", p_join: c.join_mode || "request" })];
        if (nm && nm !== c.name) jobs.push(call("rename_casino", { p_casino: c.id, p_name: nm }));
        Promise.all(jobs).then(function () { c.name = nm || c.name; c.about = ab; toast("Saved."); loadMine(); }, function (x) { err.textContent = x.message; });
      };
      if ($("#cmPay", m)) $("#cmPay", m).onclick = function () { pay("build", c.id, null, err); };
      $("#cmClose", m).onclick = function () { if (!confirm("Close " + c.name + "? Members lose access and the name is released.")) return; call("close_casino", { p_casino: c.id }).then(function () { closeModal(); toast("Table closed."); loadMine(); find(); }, function (x) { err.textContent = x.message; }); };
    }
    function redesign(c) {
      var m = modal('<h3 style="font-size:1.8rem">Redesign ' + esc(c.name) + '</h3><div id="rdScene" class="cbscene"></div>' + designerHTML(c.style || {}, c.kind) + '<span class="err" id="rdErr"></span><div class="row"><button class="btn gold" type="button" id="rdSave">Save the look</button><button class="btn ghost" type="button" data-close>Cancel</button></div>');
      wireDesigner(m, function () { return { id: c.id, name: c.name, kind: c.kind, seats: c.seats || 12, seated: c.seated || 0, tables: c.tables || [] }; }, $("#rdScene", m));
      $("#rdSave", m).onclick = function () { call("set_casino_style", { p_casino: c.id, p_style: readDesign(m) }).then(function (st) { c.style = st; closeModal(); toast("New look saved. Walk in to see it."); loadMine(); find(); }, function (x) { $("#rdErr", m).textContent = x.message; }); };
    }
    function loadMine() {
      var box = $("#casMine"); if (!live()) { box.hidden = true; return; }
      window.SF_LIVE.client.from("casinos").select("id,name,kind,about,zips,who,join_mode,status,review_note,style,scope,states,seats,seats_paid").eq("host_id", window.SF_LIVE.memberId()).neq("status", "closed").then(function (r) {
        var rows = r.data || [];
        P.hostCasinos = rows.filter(function (x) { return x.status === "open"; }).map(function (x) { return x.name; }); saveP(); renderCard();
        if (!rows.length) { box.hidden = true; return; }
        box.hidden = false;
        box.innerHTML = '<h3>Private Tables you host</h3><div class="caslist">' + rows.map(function (x) { return '<button type="button" class="cascard" data-mine="' + x.id + '"><span class="casmarq"><i>' + (KIND[x.kind] ? KIND[x.kind][1] : "🃏") + "</i>" + esc(x.name) + '</span><span class="casfoot"><b>' + esc({ unpaid: "🚧 Under construction · not paid yet", review: "In review", open: "Open", rejected: "Needs a new name" }[x.status] || x.status) + "</b></span></button>"; }).join("") + "</div>";
        box.onclick = function (e) { var b = e.target.closest("[data-mine]"); if (!b) return; var x = rows.filter(function (y) { return y.id === b.getAttribute("data-mine"); })[0]; x.my_status = "host"; manage(x); };
      });
    }
    function loadReview() {
      var box = $("#casReview");
      if (!live() || ["owner", "dealer", "pitboss"].indexOf(ROLE) < 0) { box.hidden = true; return; }
      call("casino_review_queue", {}).then(function (rows) {
        rows = rows || []; box.hidden = !rows.length; if (!rows.length) return;
        box.innerHTML = '<h3>Staff: Private Tables waiting for the name check</h3>' + rows.map(function (x) { return '<div class="cmrow"><span><b>' + esc(x.name) + "</b> · " + esc(kindLabel(x.kind)) + " · " + esc(x.about || "") + '</span><button class="chip sm" data-rev="1" data-id="' + x.id + '">Approve</button><button class="chip sm" data-rev="0" data-id="' + x.id + '">Reject</button></div>'; }).join("");
        box.onclick = function (e) { var b = e.target.closest("[data-rev]"); if (!b) return; var ok = b.getAttribute("data-rev") === "1"; var note = ok ? null : prompt("Reason (the Host sees this):", "Please choose a name that isn't another organization's official name."); call("review_casino", { p_casino: b.getAttribute("data-id"), p_approve: ok, p_note: note }).then(function () { toast(ok ? "Table opened." : "Sent back to the Host."); loadReview(); find(); }, function (x) { toast(x.message); }); };
      }, function () { box.hidden = true; });
    }
    document.addEventListener("sf:live", function () {
      loadMine(); loadReview(); find();
      var after = null; try { after = sessionStorage.getItem("sf.after"); } catch (e) { }
      if (live() && (after === "casino" || after === "table")) { try { sessionStorage.removeItem("sf.after"); } catch (e) { } setTimeout(buildModal, 500); }
      if (live() && after === "tables") { try { sessionStorage.removeItem("sf.after"); } catch (e) { } var sec = $("#private-tables"); if (sec) setTimeout(function () { sec.scrollIntoView({ behavior: "smooth" }); }, 400); }
    });
    var q = location.search.match(/[?&]casino=(\w+)/);
    if (q) { setTimeout(function () { toast({ built: "Paid! Your Private Table is in for its name check. It opens on the floor as soon as it's approved.", zips: "Paid! Your add-on is being applied now.", cancelled: "Checkout cancelled. Your Private Table is saved; finish payment anytime." }[q[1]] || ""); }, 900); history.replaceState(null, "", location.pathname + location.hash); }
    find();
  })();

  /* =====================================================================
     LIVE MEMBER AREA. When a seated member is signed in:
     My Face saves to their account, Your 52 is dealt by the server from real members only,
     Burn / Play / Block / Report and Play Hand run on real hands, and the Side Table chat is real.
     ===================================================================== */
  var LIVE_ROWS = null, LIVE_HANDS = [], CITYZ = null;
  function liveOn() { return !!(window.SF_LIVE && ROLE !== "guest"); }
  function lrpc(n, a) { return window.SF_LIVE.rpc(n, a || {}).then(function (r) { if (r.error) throw r.error; return r.data; }); }
  function genderCode() { var g = (P.id || {}).gender; if (!g) return null; if (/^(Woman|Trans woman)$/.test(g)) return "woman"; if (/^(Man|Trans man)$/.test(g)) return "man"; return "nonbinary"; }
  function cityZip(city, st) {
    if (!zipReady) return null;
    if (!CITYZ) { CITYZ = {}; ZLIST.forEach(function (z) { var k = (z.city + "|" + z.st).toLowerCase(); if (!CITYZ[k] || z.pop > CITYZ[k].pop) CITYZ[k] = z; }); }
    return CITYZ[((city || "") + "|" + (st || "")).toLowerCase()] || null;
  }
  function liveCard(r) {
    var id_ = {}; Object.keys(r.face_up || {}).forEach(function (k) { var a = r.face_up[k] || []; id_[k] = IDX[k] && IDX[k][2] === "one" ? a[0] : a; });
    var shared = (r.interests || []).filter(function (x) { return (P.interests || []).indexOf(x) > -1; });
    var jm = String(r.joker || ""), z = cityZip(r.city, r.state), h = hash(r.member_id);
    var c = { id: r.member_id, name: r.face_name || "Player", age: r.age == null ? "" : r.age, suit: r.suit, rank: r.rank, ri: RANKS.indexOf(r.rank), fit: r.fit || 0, shared: shared,
      dist: Number(r.distance_mi) || 0, city: r.city ? r.city + ", " + (r.state || "") : "", looking: r.looking_for, interests: r.interests || [], bio: r.bio || "", id_: id_, hue: h % 360, noise: 0,
      jk: /JOKER/i.test(jm) ? 10 : (parseInt(jm, 10) || 0), move: r.my_move || null };
    if (/JOKER/i.test(jm)) c.joker = { count: 10, until: "" };
    if (z) { c.lat = z.lat + ((h % 100) / 100 - .5) * .02; c.lon = z.lon + (((h >> 7) % 100) / 100 - .5) * .02; }
    return c;
  }
  function liveDeck(redeal) {
    var go = redeal ? lrpc("deal_deck").then(function () { return lrpc("my_deck"); }) : lrpc("my_deck").then(function (rows) { return rows && rows.length ? rows : lrpc("deal_deck").then(function () { return lrpc("my_deck"); }); });
    return go.then(function (rows) {
      LIVE_ROWS = rows || [];
      var mid = window.SF_LIVE.memberId(), saved = S.get("live:" + mid, { dealt: [] });
      G = { dealt: saved.dealt || [], burned: [], played: [], pairs: [], hands: {}, jokered: [], clock: 0 };
      LIVE_ROWS.forEach(function (r) { if (r.my_move) G.played.push(r.member_id); });
      deckDirty = true; buildDeck(); renderTable(!!redeal); mapT0 = performance.now(); renderMap(); liveTable();
    }, function (e) { toast(e.message || "Your deck couldn't load."); $("#dealt").innerHTML = '<p class="lede" style="align-self:center">' + esc(e.message || "Your deck couldn't load. Try again.") + "</p>"; });
  }
  function liveSaveG() { if (window.SF_LIVE) S.set("live:" + window.SF_LIVE.memberId(), { dealt: G.dealt }); }
  function liveBuild() {
    DECK = []; BY = {};
    (LIVE_ROWS || []).map(liveCard).forEach(function (c) { DECK.push(c); BY[c.id] = c; });
    G.dealt = G.dealt.filter(function (id) { return BY[id] && G.played.indexOf(id) < 0; });
    deckDirty = false; liveSaveG();
  }
  function pushFace() {
    var L = window.SF_LIVE, db = L.client, mid = L.memberId(), by = (/^\d{4}/.exec(P.dob || "") || [])[0];
    var row = { face_name: (P.name || "").trim().slice(0, 40) || null, bio: (P.bio || "").slice(0, 500) || null, home_zip: /^\d{5}$/.test(P.zip || "") ? P.zip : null,
      style_suit: SUIT[P.mySuit] ? P.mySuit : null, looking_for: TABLE[P.looking] ? P.looking : "longterm", interests: P.interests || [], gender: genderCode(), birth_year: by ? +by : null };
    if (/^[a-z0-9._]{3,24}$/.test(P.handle || "")) row.handle = P.handle;
    var ids = IDF.map(function (f) { return { member_id: mid, question: f[0], answers: asList(P.id[f[0]]).filter(Boolean), face_up: P.vis[f[0]] === undefined ? !f[5] : !!P.vis[f[0]] }; }).filter(function (r) { return r.answers.length; });
    var prefs = Object.keys(P.prefs || {}).map(function (k) { var pr = P.prefs[k] || {}; return { member_id: mid, question: k, wanted: (pr.sel || []).filter(function (x) { return x !== OPEN; }), dealbreaker: !!pr.deal }; }).filter(function (r) { return r.wanted.length; });
    function chk(r) { if (r && r.error) throw r.error; return r; }
    return db.from("members").update(row).eq("id", mid).then(chk)
      .then(function () { return db.from("strategies").upsert({ member_id: mid, trump_order: P.trumps, show_me: P.show || "everyone", age_min: P.ageMin, age_max: P.ageMax, radius_miles: P.dist }).then(chk); })
      .then(function () { return ids.length ? db.from("member_identity").upsert(ids).then(chk) : null; })
      .then(function () { return db.from("member_preferences").delete().eq("member_id", mid).then(chk); })
      .then(function () { return prefs.length ? db.from("member_preferences").insert(prefs).then(chk) : null; })
      .then(function () { return lrpc("set_my_rooms", { p_rooms: (P.rooms || []).filter(function (r) { return r !== "highroller"; }) }).catch(function () { }); })
      .then(function () {
        if (!/^data:image\//.test(P.photo || "")) return;
        return fetch(P.photo).then(function (r) { return r.blob(); }).then(function (b) {
          var path = mid + "/face-" + Date.now() + ".jpg";
          return db.storage.from("faces").upload(path, b, { contentType: b.type || "image/jpeg", upsert: true }).then(chk).then(function () {
            var url = db.storage.from("faces").getPublicUrl(path).data.publicUrl;
            return lrpc("set_my_photo", { p_url: url, p_source: P.photoLive ? "live" : "upload", p_pose: P.photoLive || null }).then(function () { P.photo = url; saveP(); });
          });
        }).catch(function (e) { toast("Your Face saved, but the photo didn't upload (" + ((e && e.message) || "try again") + "). Tap Save my Face again in a moment."); });
      });
  }
  function pullFace() {
    var L = window.SF_LIVE, db = L.client, mid = L.memberId();
    return Promise.all([
      db.from("members").select("face_name,handle,bio,home_zip,style_suit,looking_for,interests,gender,birth_date,photo_url,photo_source,rooms").eq("id", mid).single(),
      db.from("strategies").select("*").eq("member_id", mid).maybeSingle(),
      db.from("member_identity").select("question,answers,face_up").eq("member_id", mid),
      db.from("member_preferences").select("question,wanted,dealbreaker").eq("member_id", mid)
    ]).then(function (res) {
      var m = res[0].data; if (!m) return;
      if (S.get("liveFor", "") !== mid) { // first time on this device for this account: the account is the source of truth
        // keep this device's look (theme, stickers, owned items) but take every answer from the account
        P = Object.assign({}, P, { id: {}, prefs: {}, vis: {}, trumps: ORDER.slice(), ageMin: 25, ageMax: 40, dist: 25, interests: [], rooms: [], name: "", handle: "", bio: "", zip: "", photo: "", dob: "", age: "" });
        P.stickers = P.stickers || []; P.owned = P.owned || []; P.theme = P.theme || "private";
        S.set("liveFor", mid);
      }
      if (m.face_name) P.name = m.face_name; if (m.handle) P.handle = m.handle; if (m.bio) P.bio = m.bio; if (m.home_zip) P.zip = m.home_zip;
      if (m.style_suit) P.mySuit = m.style_suit; if (m.looking_for) P.looking = m.looking_for; if (m.interests && m.interests.length) P.interests = m.interests;
      if (m.birth_date) { P.dob = m.birth_date; var a = ageFrom(m.birth_date); if (!isNaN(a)) P.age = String(a); if (window.SF_setDob) window.SF_setDob(m.birth_date); }
      if (m.photo_url) { P.photo = m.photo_url; P.photoLive = m.photo_source === "live" ? (P.photoLive || "live") : null; }
      if (m.rooms) P.rooms = m.rooms;
      var st = res[1].data; if (st) { P.trumps = st.trump_order && st.trump_order.length === 4 ? st.trump_order : P.trumps; P.show = st.show_me || P.show; P.ageMin = st.age_min || P.ageMin; P.ageMax = st.age_max || P.ageMax; P.dist = st.radius_miles || P.dist; }
      (res[2].data || []).forEach(function (r) { if (!IDX[r.question]) return; P.id[r.question] = IDX[r.question][2] === "one" ? r.answers[0] : r.answers; P.vis[r.question] = r.face_up; });
      (res[3].data || []).forEach(function (r) { P.prefs[r.question] = { sel: r.wanted, deal: r.dealbreaker }; });
      saveP();
      F.name.value = P.name || ""; F.handle.value = P.handle || ""; F.zip.value = P.zip || ""; F.bio.value = P.bio || "";
      try { renderStyles(); renderInterests(); renderRank(); renderIam(); renderRooms(); if (typeof syncIdentityUI === "function") syncIdentityUI(); syncRanges(); } catch (e) { }
      renderCard(); updateMeter(); zipHint();
    });
  }
  /* Pairs and Play Hand on real hands */
  function liveTable() {
    return lrpc("my_table").then(function (rows) {
      LIVE_HANDS = rows || []; G.pairs = LIVE_HANDS.map(function (h) { return h.other_id; }); renderPairs();
    }, function () { });
  }
  function liveRenderPairs() {
    var el = $("#pairs");
    el.innerHTML = LIVE_HANDS.length ? LIVE_HANDS.map(function (h) {
      var p = BY[h.other_id], suit = p ? p.suit : "heart", stage = h.outcome && h.outcome !== "open" ? h.outcome : h.play_hand_id ? "inplay" : "paired";
      return '<button type="button" class="keeper" data-lhand="' + h.hand_id + '" style="border:0;cursor:pointer"><span style="color:' + (SUIT[suit].red ? "var(--red)" : "var(--night)") + '">' + pip(suit) + "</span>" + esc((h.other_name || "Player").split(" ")[0]) + '<span class="stage s-' + esc(stage) + '">' + esc(STAGE_LABEL[stage] || stage) + "</span></button>";
    }).join("") : '<span class="hint">No Pairs yet. Play a few cards. When someone plays yours too, it\'s a Pair.</span>';
  }
  $("#pairs").addEventListener("click", function (e) {
    var b = e.target.closest("[data-lhand]"); if (!b) return; e.stopImmediatePropagation();
    var h = LIVE_HANDS.filter(function (x) { return x.hand_id === b.getAttribute("data-lhand"); })[0]; if (h) livePair(h);
  }, true);
  function livePair(h) {
    var nm = esc((h.other_name || "Player").split(" ")[0]), p = BY[h.other_id];
    var m = modal('<p class="pairtitle">' + (h.status === "won" ? "Still winning" : "It's a Pair!") + '</p>' +
      '<div class="ranks"><span>You hold ' + nm + " as <b>" + esc(h.i_hold || "?") + "</b></span><span>" + nm + " holds you as <b>" + esc(h.they_hold || "?") + "</b></span></div>" +
      (p ? '<p class="jm-line">' + nm + "'s " + jmeter(p, true) + "</p>" : "") +
      '<div class="hand-box" id="handBox"></div>' +
      '<details class="sidetable" open><summary>Side Table chat</summary><div class="chat" id="chat"><p class="hint">Loading…</p></div>' +
      '<form id="chatForm" style="display:flex;gap:8px;margin-top:10px"><label class="sr" for="chatIn">Message</label><input type="text" id="chatIn" maxlength="1000" placeholder="Say hi, pick a public place…" autocomplete="off"><button class="btn felt sm" type="submit">Send</button></form>' +
      '<p class="hint">Keep it on SuiteFace until you\'ve met. Never send money. Always meet in public.</p></details>');
    var last = 0;
    function pull() {
      lrpc("side_table", { p_hand: h.hand_id, p_after: last }).then(function (rows) {
        var c = $("#chat", m); if (!c) return; if (!last) c.innerHTML = "";
        (rows || []).forEach(function (r) { last = Math.max(last, r.id); c.insertAdjacentHTML("beforeend", '<div class="msg ' + (r.mine ? "me" : "them") + '">' + esc(r.body) + "</div>"); });
        if (!last && !c.children.length) c.innerHTML = '<p class="hint">No messages yet. Say hi and suggest a public place to meet.</p>';
        c.scrollTop = c.scrollHeight;
      }, function () { });
    }
    pull(); clearInterval(window.__sideTick); window.__sideTick = setInterval(function () { if (!$("#modal")) { clearInterval(window.__sideTick); return; } pull(); }, 6000);
    $("#chatForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var v = $("#chatIn", m).value.trim(); if (!v) return; $("#chatIn", m).value = "";
      lrpc("send_side_table", { p_hand: h.hand_id, p_body: v }).then(pull, function (x) { toast(x.message); });
    });
    renderLiveHand(m, h);
  }
  function renderLiveHand(m, h) {
    var box = $("#handBox", m); if (!box) return; var nm = esc((h.other_name || "Player").split(" ")[0]), html = "";
    var safety = '<p class="hint">Felt unsafe, harassed or threatened? That\'s never just a Loss. <button type="button" class="linkish" data-lreport>Report and block ' + nm + "</button>. In an emergency, call 911.</p>";
    var open = h.play_hand_id && (!h.outcome || h.outcome === "open" || h.outcome === "push");
    if (!h.play_hand_id || h.outcome === "win") {
      html = "<h3>" + (h.outcome === "win" ? "Win! Check in for date #" + ((h.date_number || 1) + 1) : "Meeting " + nm + "?") + '</h3><p class="hint">When you\'re together in person, you both tap <b>Check in</b>. Your phones confirm you\'re at the same table (within about 200 feet, location used for that moment only), or swap a 4-digit Table Code.</p>' +
        '<div class="row"><button class="btn gold" type="button" data-lcheck>Check in: we\'re together</button><button class="btn ghost sm" type="button" data-lcode>Use a Table Code</button></div><p class="hint" id="lcOut"></p>';
    } else if (open) {
      html = '<h3 class="inplay">Hand in play with ' + nm + '</h3><p class="hint">Played ' + fmtDate(new Date(h.play_at).getTime()) + (h.my_call ? ". You called <b>" + esc(h.my_call.replace("_", " ")) + "</b>." : ". When the date ends, call it:") + "</p>" +
        '<div class="outcomes"><button class="oc win" type="button" data-lcall="win"><b>Win</b><span>Second date</span></button><button class="oc push" type="button" data-lcall="push"><b>Push</b><span>Unsure, waiting on a response</span></button><button class="oc loss" type="button" data-lcall="loss_burn"><b>Loss</b><span>Burn the card</span></button>' +
        (h.joker_window_open ? '<button class="oc joker" type="button" data-lcall="loss_joker"><b>Make a Joker</b><span>A disaster date. Window closes ' + fmtDate(new Date(h.joker_closes_at).getTime()) + "</span></button>" : "") + "</div>" +
        (h.push_deadline ? '<p class="hint">A Win needs both of you. If not by ' + fmtDate(new Date(h.push_deadline).getTime()) + ", it becomes an automatic Loss.</p>" : "");
    } else {
      html = "<h3>" + esc(STAGE_LABEL[h.outcome] || "Settled") + '</h3><p class="hint">This hand is settled.</p>';
    }
    box.innerHTML = html + safety;
    box.onclick = function (e) {
      var t = e.target, out = $("#lcOut", m);
      function refresh() { liveTable().then(function () { var n = LIVE_HANDS.filter(function (x) { return x.hand_id === h.hand_id; })[0]; if (n) { h = n; renderLiveHand(m, h); } }); }
      function checked(r) {
        if (r.status === "play_hand") { toast("Hand in play! Have a great time.", "heart"); jackpot(3000); refresh(); return; }
        if (out) out.innerHTML = "Checked in. Your Table Code is <b>" + esc(r.table_code) + "</b>. Ask " + nm + " to check in now (within 15 minutes), or to enter your code.";
      }
      if (t.closest("[data-lcheck]")) {
        if (!navigator.geolocation) { toast("Location isn't available. Use a Table Code."); return; }
        navigator.geolocation.getCurrentPosition(function (pos) { lrpc("check_in", { hand: h.hand_id, lat: pos.coords.latitude, lon: pos.coords.longitude }).then(checked, function (x) { toast(x.message); }); },
          function () { toast("Location was blocked. Use a Table Code instead."); }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 });
      }
      if (t.closest("[data-lcode]")) {
        var code = prompt("Enter " + nm + "'s 4-digit Table Code (or leave empty to get yours):", "");
        if (code === null) return;
        lrpc("check_in", { hand: h.hand_id, code: /^\d{4}$/.test(code.trim()) ? code.trim() : null }).then(checked, function (x) { toast(x.message); });
      }
      var c = t.closest("[data-lcall]");
      if (c) {
        var res = c.getAttribute("data-lcall");
        if (res === "loss_joker" && !confirm("Make " + nm + " a Joker? Only for a genuinely disastrous date. You'll be asked to attest it's first-hand.")) return;
        var send = function () { lrpc("call_hand", { play_hand: h.play_hand_id, result: res }).then(function (r) { toast("Called: " + String(r || res).replace("_", " ") + "."); refresh(); }, function (x) { toast(x.message); }); };
        if (res === "loss_joker" && window.SFSign) window.SFSign.require("attest", send, { about: h.other_name }); else send();
      }
      if (t.closest("[data-lreport]")) {
        if (!confirm("Report and block " + nm + "? Our safety team reviews every report. You won't be dealt each other again.")) return;
        lrpc("block_member", { target: h.other_id, is_report: true }).then(function () { closeModal(); toast("Reported and blocked. Thank you for telling us."); liveDeck(false); }, function (x) { toast(x.message); });
      }
    };
  }
  document.addEventListener("sf:live", function () {
    if (!liveOn()) { LIVE_ROWS = null; return; }
    pullFace().then(function () { return liveDeck(false); }, function () { return liveDeck(false); });
  });

  /* ---------- boot ---------- */
  renderStyles(); renderQ(); renderInterests(); renderRank(); renderCard(); updateMeter(); syncRanges();
  wireIam(); renderIam(); renderRooms(); renderIdentity(); renderDemo(); applyRole(); buildDeck(); renderTable(false); renderSeats(); renderJokerStatus(); zipHint(); loadZips(); renderMap();
  $("#pile").style.setProperty("--hat", "url(\"data:image/svg+xml," + encodeURIComponent(BRAND.hat) + "\")");
})();
