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
  var PAGE_FILE = { home: "./", how: "how-it-works.html", suit: "find-your-suit.html", tables: "tables.html", membership: "membership.html", club: "my-table.html", contact: "contact.html", bluff: "bluff-table.html", backs: "card-backs.html", winners: "winners.html", redeem: "redeem.html" };
  var SEC_PAGE = { how: "how", demo: "how", safety: "how", quiz: "suit", "private-tables": "tables", casinos: "tables", membership: "membership",
    face: "club", table: "club", map: "club", invite: "club", dealer: "club", pitboss: "club", owner: "club", join: "contact", top: "home", bluff: "bluff", backs: "backs", winners: "winners" };
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
  /* Header sections: Date, Play, Club (and Staff). Each opens its own list of pages. */
  var nav = $("#nav");
  function closeGroups(except) { $$("#nav .ng.open").forEach(function (g) { if (g !== except) { g.classList.remove("open"); g.querySelector(".ngb").setAttribute("aria-expanded", "false"); } }); }
  $$("#nav .ngb").forEach(function (b) { b.addEventListener("click", function (e) { e.stopPropagation(); var g = b.parentNode, o = !g.classList.contains("open"); closeGroups(g); g.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o)); }); });
  document.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest("#nav .ng")) closeGroups(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && $("#nav .ng.open")) { var g = $("#nav .ng.open"); closeGroups(); g.querySelector(".ngb").focus(); } });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { closeGroups(); }); });
  function navGroups() { $$("#nav .ng").forEach(function (g) { var any = $$("a", g).some(function (a) { return !a.hidden; }); g.hidden = !any; g.classList.toggle("here", !!g.querySelector('a[aria-current="page"]')); }); }
  navGroups();

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
      4: ["Get your hand", [
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
        var m = modal('<div class="ex"><p class="eyebrow">Example · Step 4</p><div class="exh">Get your hand</div><p class="lede">Everyone near you who passes your gates (distance, ages, who you want to see, dealbreakers, and who wants to see you) is ranked by fit. The best 13 in each suit become Ace to 2.</p><div class="felt"><div class="deckgrid" id="exD"></div></div><a class="btn gold sm" href="how-cards-work.html">Follow one card from Face to rank</a></div>');
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
      ["How much does SuiteFace cost?", "Joining and building your Face are free. The Buy-In is $21.00 one time (it includes your first 30 days), then $2.10 a month. Launch offer: through December 31, 2026 the $21 Buy-In is waived and you join for $2.10 a month. 12-Card Deck Guarantee: if we can't deal you at least 12 cards within 10 days, ask for your $21 back or stay while your table fills. Cancel anytime in Settings."],
      ["What does a comp code do?", "Enter it in the Comp box before you buy in. PlayMessy makes the $21 Buy-In free; your $2.10 monthly still starts after 30 days."],
      ["How do I cancel or pause?", "Settings → Membership → Manage billing. You can pause once every 210 days, for up to 21 days; after 21 days your seat ends and a new $21 Buy-In is needed. You can cancel a Buy-In within 3 business days for a full refund."],
      ["Why isn't my deck full yet?", "Your deck only holds people who pass your gates (distance, ages, who you want to see, dealbreakers) and who want to see you too. Invite friends to fill your table, or widen your distance or ages."],
      ["How is my deck ranked?", "Each card gets a 100-point fit score for you: values, your table, shared interests, trumps, truth, closeness and age. Ace, King, Queen and Jack go only to ID-verified members. See House Fit Rules."],
      ["How do I get the verified Seal?", "Verify with a driver's license, state ID or passport plus a quick live selfie. That confirms you're 18+ and that your face matches your card."],
      ["How do Jokers work?", "After a Loss on one of your first three dates together, you can make a Joker within 12 hours of Play Hand. Ten Jokers within 180 days shows JOKER on a card for 45 days. Every Joker can be challenged for free. See Joker Rules."],
      ["Someone made me feel unsafe.", "If you're in danger, call 911 now. Then use Report a safety concern on their card. Safety reports go straight to SuiteFace staff and are never handled as a Joker."],
      ["I can't use 'Use my location'.", "Your browser has to allow location for suiteface.com, and it only works on the secure site. You can always type your ZIP code or city instead."],
      ["How do I change or delete my account?", "Open My table, then My Face. At the bottom, Your data lets you download everything SuiteFace keeps about you or delete your account. Cancel your membership under Manage billing first so you're never charged again."],
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
    var hl = $("#holdList"); if (hl && window.SF_LIVE) {
      var loadHolds = function () {
        window.SF_LIVE.rpc("review_holds").then(function (r) {
          var rows = r.data || [];
          hl.innerHTML = rows.length ? rows.map(function (x) { return '<div class="cmrow"><span><b>' + esc(x.handle ? "@" + x.handle : x.email) + "</b> · " + esc(x.note || "") + '</span><button class="chip sm" type="button" data-clear="' + x.member_id + '">Clear</button></div>'; }).join("") : '<p class="hint">Nothing waiting.</p>';
        });
      };
      hl.onclick = function (e) { var b = e.target.closest("[data-clear]"); if (!b || !confirm("Clear this account to be dealt a deck?")) return; window.SF_LIVE.rpc("clear_review_hold", { p_member: b.getAttribute("data-clear") }).then(function (r) { if (r.error) toast(r.error.message); else { toast("Cleared."); loadHolds(); } }); };
      loadHolds();
      var trq = $("#tableReportList"), loadTr = function () { window.SF_LIVE.rpc("table_reports_queue").then(function (r) { if (!trq) return; var rows = r.data || [];
        trq.innerHTML = rows.length ? rows.map(function (x) { return '<div class="cmrow"><span><b>@' + esc(x.sender_tag || "?") + "</b> in " + esc(x.table_name || "a table") + (x.table_kind === "flirty18" ? " (18+ Flirty)" : "") + "<br><small><b>Message:</b> " + esc(x.body) + "</small><br><small><b>Report:</b> " + esc(x.reason || "") + "</small>" + (x.evidence_path ? '<br><button type="button" class="linkish" data-evid="' + esc(x.evidence_path) + '">View screenshot</button>' : "") + '</span><span class="row"><button class="chip sm" type="button" data-trule="' + x.message_id + '" data-trep="' + x.reporter_id + '" data-v="1">Violation · ban</button><button class="chip sm" type="button" data-trule="' + x.message_id + '" data-trep="' + x.reporter_id + '" data-v="0">Dismiss</button></span></div>'; }).join("") : '<p class="hint">No open reports.</p>'; }); };
      if (trq) { trq.onclick = function (e) {
        var ev = e.target.closest("[data-evid]"); if (ev) { window.SF_LIVE.client.storage.from("report-evidence").createSignedUrl(ev.getAttribute("data-evid"), 300).then(function (r) { if (r.error) toast(r.error.message); else window.open(r.data.signedUrl, "_blank", "noopener"); }); return; }
        var b = e.target.closest("[data-trule]"); if (!b) return; var v = b.getAttribute("data-v") === "1";
        if (!confirm(v ? "Rule this a VIOLATION? The sender's account is closed with no refund and their card gets a public Joker for 45 days. They can appeal once; a different staff member decides." : "Dismiss this report?")) return;
        window.SF_LIVE.rpc("rule_table_report", { p_message: +b.getAttribute("data-trule"), p_reporter: null, p_violation: v, p_note: null }).then(function (r) { if (r.error) toast(r.error.message); else { toast(v ? "Ruled a violation. Account closed and a 45-day Joker added." : "Dismissed."); loadTr(); } }); }; loadTr(); }
      var tap = $("#tableAppeals"), loadAp = function () { if (!tap) return; window.SF_LIVE.rpc("table_rulings_recent").then(function (r) { var rows = r.data || [];
        tap.innerHTML = rows.length ? rows.map(function (x) { return '<div class="cmrow"><span><b>@' + esc(x.sender_tag || "?") + "</b> · " + new Date(x.ruled_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + "<br><small>" + esc(x.body || "") + "</small></span>" +
          (x.status !== "violation" ? '<span class="hint">' + (x.status === "reversed" ? "Appeal: reversed" : "Appeal: upheld") + "</span>" : x.ruled_by_me ? '<span class="hint">You ruled; another staff member decides</span>' : '<span><button class="chip sm" type="button" data-appeal="' + x.message_id + '" data-rev="0">Uphold</button> <button class="chip sm" type="button" data-appeal="' + x.message_id + '" data-rev="1">Reverse</button></span>') + "</div>"; }).join("") : '<p class="hint">No rulings in the last 60 days.</p>'; }); };
      if (tap) { loadAp(); tap.onclick = function (e) { var b = e.target.closest("[data-appeal]"); if (!b) return; var rev = b.getAttribute("data-rev") === "1"; var note = prompt(rev ? "Why reverse this ruling? (The ban and Joker are lifted.)" : "Why uphold this ruling?"); if (!note) return;
        window.SF_LIVE.rpc("decide_table_appeal", { p_message: +b.getAttribute("data-appeal"), p_reverse: rev, p_note: note }).then(function (r) { if (r.error) toast(r.error.message); else { toast(rev ? "Appeal granted. Ban and Joker lifted." : "Ruling upheld."); loadAp(); } }); }; }
      var loadProof = function () { var el = $("#proofReport"); if (!el) return; var d = +(($("#proofDays") || {}).value || 90);
        window.SF_LIVE.rpc("owner_proof_report", { p_days: d }).then(function (r) { if (r.error) { el.innerHTML = '<p class="hint">' + esc(r.error.message) + "</p>"; return; } var x = r.data || {};
          var pct = function (a, b) { return b ? Math.round(a / b * 1000) / 10 + "%" : "–"; }, bl = x.baseline || {}, f = x.funnel || {}, dk = x.decks || {};
          var row = function (k, o) { return "<tr><th scope=\"row\">" + esc(k) + "</th><td>" + o.dealt + "</td><td>" + pct(o.played, o.dealt) + "</td><td>" + pct(o.pairs, o.dealt) + "</td><td>" + pct(o.talked || 0, o.dealt) + "</td><td>" + pct(o.met, o.dealt) + "</td><td>" + pct(o.won, o.dealt) + "</td></tr>"; };
          el.innerHTML = '<div class="proofgrid"><p><b>' + (f.quiz_leads || 0) + "</b>quiz leads</p><p><b>" + (f.accounts || 0) + "</b>new accounts</p><p><b>" + (f.seated || 0) + "</b>seated players</p><p><b>" + pct(f.seated_new || 0, f.accounts || 0) + "</b>account to seat</p><p><b>" + (dk.median_cards == null ? "–" : dk.median_cards) + "</b>median cards per hand</p><p><b>" + pct(dk.at_least_12 || 0, dk.players || 0) + "</b>hands with 12+ cards</p></div>" +
            (bl.dealt ? '<div class="tblwrap"><table class="proof"><thead><tr><th scope="col">Rank</th><th scope="col">Dealt</th><th scope="col">Played</th><th scope="col">Pair</th><th scope="col">Talked</th><th scope="col">Met</th><th scope="col">Win</th></tr></thead><tbody>' + (x.ranking || []).map(function (o) { return row(o.rank, o); }).join("") + row("All cards (baseline)", bl) + "</tbody></table></div>" : '<p class="hint">No real hands dealt in this period yet. The table fills in as seated players play their cards.</p>') +
            ((x.thin_players || []).length ? '<p class="hint" style="margin-top:10px"><b>Thin hands (under 12 cards):</b> ' + x.thin_players.map(function (t) { return esc(t.zip || "?") + " (" + t.cards + ")"; }).join(", ") + "</p>" : "") +
            ((x.zips || []).length ? '<p class="hint"><b>Seated players by ZIP:</b> ' + x.zips.map(function (z) { return esc(z.zip) + " · " + z.seated; }).join(", ") + "</p>" : "");
        }); };
      loadProof(); var pd = $("#proofDays"); if (pd) pd.onchange = loadProof;
      window.SF_LIVE.rpc("card_back_applications_recent").then(function (r) { var el = $("#cbAppList"); if (!el) return; var rows = r.data || [];
        el.innerHTML = rows.length ? rows.map(function (x) { return '<div class="cmrow"><span><b>' + esc(x.org_name) + "</b> (" + esc(x.kind) + ") · " + esc(x.contact_name) + " · " + esc(x.email) + (x.phone ? " · " + esc(x.phone) : "") + "<br><small>" + esc(new Date(x.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })) + " · price: " + esc(x.proposed_price || "?") + (x.beneficiary ? " · proceeds to " + esc(x.beneficiary) : "") + (x.website ? " · " + esc(x.website) : "") + "</small><br><small>" + esc(x.idea || "") + "</small></span></div>"; }).join("") : '<p class="hint">No applications yet.</p>'; });
      window.SF_LIVE.rpc("recent_signups", { p_limit: 100 }).then(function (r) { var su = $("#signupList"); if (!su) return; var rows = r.data || [];
        var paid = rows.filter(function (x) { return x.paid; }).length, today = rows.filter(function (x) { return Date.now() - new Date(x.joined_at).getTime() < 864e5; }).length;
        su.innerHTML = '<p class="hint"><b>' + rows.length + "</b> total · <b>" + today + "</b> in the last 24 hours · <b>" + paid + "</b> paid</p>" + (rows.length ? rows.map(function (x) {
          return '<div class="cmrow"><span><b>' + esc(x.face_name || x.email) + "</b>" + (x.handle ? " @" + esc(x.handle) : "") + " · " + esc(x.email) + "<br><small>" + esc(new Date(x.joined_at).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })) + " · " + (x.paid ? "✓ Paid" : "Not paid yet") + (x.email_confirmed ? " · email confirmed" : " · email not confirmed") + (x.home_zip ? " · " + esc(x.home_zip) : "") + (x.suit && SUIT[x.suit] ? " · " + SUIT[x.suit].sym + " " + SUIT[x.suit].name : "") + "</small></span></div>"; }).join("") : '<p class="hint">No sign-ups yet.</p>');
      });
      var cl = $("#chalList"), loadChal = function () {
        window.SF_LIVE.rpc("joker_challenge_queue").then(function (r) {
          var rows = r.data || []; if (!cl) return;
          cl.innerHTML = rows.length ? rows.map(function (x) { return '<div class="cmrow chalrow"><span><b>@' + esc(x.subject_tag || "?") + "</b> challenges a Joker from <b>@" + esc(x.maker_tag || "?") + "</b><br><small><b>Joker said:</b> " + esc((x.reasons || []).join(", ")) + " · " + esc(x.joker_statement || "") + "</small><br><small><b>Challenge:</b> " + esc(x.statement || "") + '</small></span><span class="row"><button class="chip sm" type="button" data-rule="' + x.challenge_id + '" data-false="1">False · backfire</button><button class="chip sm" type="button" data-rule="' + x.challenge_id + '" data-false="0">Stands</button></span></div>'; }).join("") : '<p class="hint">No challenges waiting.</p>';
        });
      };
      if (cl) { cl.onclick = function (e) { var b = e.target.closest("[data-rule]"); if (!b) return; var f = b.getAttribute("data-false") === "1";
        if (!confirm(f ? "Rule this Joker FALSE? It comes off, and the maker becomes a Joker for 45 days with no way out. This is final." : "Rule that this Joker STANDS? This is final.")) return;
        window.SF_LIVE.rpc("rule_joker_challenge", { p_challenge: b.getAttribute("data-rule"), p_false: f, p_note: null }).then(function (r) { if (r.error) toast(r.error.message); else { toast(f ? "Removed. It backfired on the maker." : "The Joker stands."); loadChal(); } }); }; loadChal(); }
      var hq = $("#hrShipList"), loadHrq = function () { window.SF_LIVE.rpc("hr_deck_queue").then(function (r) { var rows = r.data || []; if (!hq) return;
        hq.innerHTML = rows.length ? rows.map(function (x) { var due = new Date(x.ship_by).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
          return '<div class="cmrow"><span><b>@' + esc(x.tag || "?") + "</b> · ship by " + esc(due) + " · " + esc(x.status === "needs_address" ? "waiting for address" : x.status) + (x.line1 ? "<br><small>" + esc([x.ship_name, x.line1, x.line2, x.city + ", " + x.state + " " + x.zip].filter(Boolean).join(", ")) + "</small>" : "") + (x.tracking ? "<br><small>Tracking " + esc(x.tracking) + "</small>" : "") + "</span>" + (x.status === "ready" ? '<button class="chip sm" type="button" data-shipped="' + x.member_id + '">Mark shipped</button>' : "") + "</div>"; }).join("") : '<p class="hint">No High Roller decks to send.</p>'; }); };
      if (hq) { hq.onclick = function (e) { var b = e.target.closest("[data-shipped]"); if (!b) return; var t = prompt("Tracking number?"); if (t === null) return;
        window.SF_LIVE.rpc("mark_hr_deck_shipped", { p_member: b.getAttribute("data-shipped"), p_tracking: t }).then(function (r) { if (r.error) toast(r.error.message); else { toast("Marked shipped."); loadHrq(); } }); }; loadHrq(); }
      window.SF_LIVE.rpc("suit_leads_recent", { p_limit: 25 }).then(function (r) {
        var rows = r.data || [], ll = $("#leadList"); if (!ll) return;
        ll.innerHTML = rows.length ? '<div class="leadtbl">' + rows.map(function (x) { return '<div class="cmrow"><span><b>' + esc(x.name) + "</b> · " + esc(x.email) + " · " + esc(x.phone) + " · " + esc(x.suit === "wild" ? "Wild Card" : x.suit === "joker" ? "Joker (review)" : SUIT[x.suit] ? SUIT[x.suit].name : x.suit) + (x.sms_ok ? " · texts OK" : "") + "</span><span class=\"hint\">" + new Date(x.created_at).toLocaleDateString() + "</span></div>"; }).join("") + "</div>" : '<p class="hint">No quiz leads yet.</p>';
      });
    }
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
  // Direct link: any page + #highroller opens the High Roller Room.
  function hrHash() { if (location.hash === "#highroller") setTimeout(openHighRoller, 600); }
  hrHash(); window.addEventListener("hashchange", hrHash);
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
  /* The deck of slides: 4 "which word fits you" batches, 2 "what would friends pick" batches, 12 questions, 1 honest-fault batch.
     Every word batch shows one word per suit plus "None of these". */
  /* Hidden tells: one sits among the words on each "fits you best" card and on the fault card. Picking all five sends the
     account to a private staff review before a deck is dealt. They never change the suit result and are never shown. */
  var TELLS = ["Jealous", "Possessive", "Vengeful", "Manipulative", "Hot-tempered"];
  var QTELL = ["Somewhere I can check who else they're texting", "The one you don't want to cross", "I make them pay for it later", "I win, whatever it takes",
    "Keeping tabs on where my person is", "I go silent to make a point", "Does what I say", "I decide for both of us",
    "Watching who my date talks to", "Keeping them all to myself", "Being told no", "What's yours is mine"];
  var SLIDES = [];
  [0, 1, 2, 3].forEach(function (i) { SLIDES.push({ t: "self", i: i }); });
  [0, 3].forEach(function (i, n) { SLIDES.push({ t: "oth", i: i, n: n }); });
  Q.forEach(function (x, i) { SLIDES.push({ t: "q", i: i }); });
  SLIDES.push({ t: "fault", i: 0 });
  var STEPS_Q = SLIDES.length;
  var QV = 2, qs = S.get("quizDeck", null);
  if (!qs || qs.v !== QV) qs = { v: QV, ans: {}, i: 0 };
  var qa = [], qw = { self: [], others: [], fault: "", none: 0, tells: 0 }, qi = qs.i;
  function slideKey(sl) { return sl.t + sl.i; }
  function derive() {
    qa = []; qw = { self: [], others: [], fault: "", none: 0, tells: 0, tellQ: 0, tellW: 0 };
    SLIDES.forEach(function (sl) {
      var v = qs.ans[slideKey(sl)]; if (v == null) return;
      if (v === "none") { qw.none++; return; }
      if (v === "tell") { qw.tells++; if (sl.t === "q") qw.tellQ++; else qw.tellW++; return; }
      if (sl.t === "q") qa[sl.i] = v;
      else if (sl.t === "self") qw.self.push(WORDS[v][sl.i]);
      else if (sl.t === "oth") qw.others.push(WORDS[v][sl.i]);
      else if (sl.t === "fault") qw.fault = FAULTS[v][0];
    });
    qa = qa.filter(Boolean);
  }
  function saveQ() { qs.i = qi; S.set("quizDeck", qs); derive(); }
  derive();
  /* Answers from an earlier visit never skip the deck: anyone who hasn't unlocked a result starts at slide 1. */
  if (qi >= STEPS_Q && !S.get("suitLead", null) && !window.SF_LIVE) { qs = { v: QV, ans: {}, i: 0 }; qi = 0; saveQ(); }
  function resetQuiz() { qs = { v: QV, ans: {}, i: 0 }; qi = 0; saveQ(); renderQ(); }
  function shuffled(i) { var o = ORDER.slice(); var r = i * 7 + 3; for (var k = 3; k > 0; k--) { r = (r * 31 + 11) % 97; var j = r % (k + 1); var tmp = o[k]; o[k] = o[j]; o[j] = tmp; } return o; }
  function batch(sl, label) {
    var cur = qs.ans[slideKey(sl)], seed = sl.t === "self" ? sl.i + 20 : sl.t === "oth" ? sl.i + 40 : 60;
    var keys = shuffled(seed), tell = sl.t === "self" ? TELLS[sl.i] : sl.t === "fault" ? TELLS[4] : "";
    if (tell) keys.splice((sl.i * 3 + 1) % 5, 0, "tell");
    return '<div class="batch' + (tell ? " five" : "") + '">' + keys.map(function (k) {
      var w = k === "tell" ? tell : sl.t === "fault" ? FAULTS[k][0] : WORDS[k][sl.i];
      return '<button class="ans bword' + (cur === k ? " picked" : "") + '" type="button" data-s="' + k + '">' + esc(w) + "</button>";
    }).join("") + '</div><button class="ans none' + (cur === "none" ? " picked" : "") + '" type="button" data-s="none">' + esc(label) + "</button>";
  }
  function renderQ() {
    if (qi >= STEPS_Q) { showResult(); return; }
    $("#quizBox").hidden = false; $("#quizResult").hidden = true;
    var left = STEPS_Q - qi - 1, sl = SLIDES[qi];
    $("#qCount").textContent = "Card " + (qi + 1) + " of " + STEPS_Q + (left ? " · " + left + " to go" : " · last one");
    var pct = qi / STEPS_Q, cheer =
      qi === 0 ? "Let's deal you in. Tap the word that fits you best." :
      sl.t === "oth" && sl.n === 0 ? "Nice. Now think like the people who love you." :
      sl.t === "q" && sl.i === 0 ? "Here come the quick ones. Go with your gut." :
      sl.t === "fault" ? "Last card. The honest one." :
      left === 1 ? "Almost there! One more after this." :
      pct >= .8 ? "Almost there. Your suit is nearly dealt." :
      pct >= .62 ? "Getting closer. Just a few more hands." :
      pct >= .45 ? "Halfway there. Your suit is taking shape." :
      pct >= .25 ? "Great rhythm. Keep going." : "Good start. Keep it honest.";
    var ch = $("#qCheer"); if (ch) ch.textContent = cheer;
    var qb = $("#quizBox"); if (qb && !REDUCED) { qb.classList.remove("slide"); void qb.offsetWidth; qb.classList.add("slide"); }
    $("#qMeter").style.width = (qi / STEPS_Q * 100) + "%";
    $("#qBack").disabled = qi === 0;
    if (sl.t === "self") { $("#qText").textContent = "Which word fits you best?"; $("#qAnswers").innerHTML = batch(sl, "None of these"); return; }
    if (sl.t === "oth") { $("#qText").textContent = "Which word would your friends pick for you?"; $("#qAnswers").innerHTML = batch(sl, "None of these"); return; }
    if (sl.t === "fault") { $("#qText").textContent = "Which one is most like your biggest fault?"; $("#qAnswers").innerHTML = '<p class="qhint">Owning it is a strong play. It stays private (Face Down) unless you choose to show it.</p>' + batch(sl, "None of these fit me"); return; }
    $("#qText").textContent = Q[sl.i][0];
    var qk = shuffled(sl.i); qk.splice((sl.i * 2 + 3) % 5, 0, "tell");
    $("#qAnswers").innerHTML = '<div class="qopts">' + qk.map(function (k) {
      return '<button class="ans' + (qs.ans[slideKey(sl)] === k ? " picked" : "") + '" type="button" data-s="' + k + '">' + esc(k === "tell" ? QTELL[sl.i] : Q[sl.i][1][k]) + "</button>";
    }).join("") + "</div>";
  }
  $("#qAnswers").addEventListener("click", function (e) {
    var b = e.target.closest("[data-s]"); if (!b || qi >= STEPS_Q) return;
    $$("#qAnswers .ans").forEach(function (x) { x.classList.toggle("picked", x === b); });
    qs.ans[slideKey(SLIDES[qi])] = b.getAttribute("data-s"); saveQ();
    setTimeout(function () { qi++; saveQ(); renderQ(); }, REDUCED ? 0 : 240);
  });
  $("#qBack").addEventListener("click", function () { if (qi > 0) { qi--; saveQ(); renderQ(); } });
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
    $("#sgBack", f).onclick = function () { qi = STEPS_Q - 1; saveQ(); renderQ(); };
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var nm = $("#sgName", f).value.trim(), em = $("#sgEmail", f).value.trim(), ph = $("#sgPhone", f).value.replace(/\D/g, ""), ok = true;
      if (ph.length === 11 && ph[0] === "1") ph = ph.slice(1);
      [["sgName", nm.length >= 2 ? "" : "Add your name."], ["sgEmail", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em) ? "" : "Check your email, like name@example.com."], ["sgPhone", ph.length === 10 ? "" : "Add a 10-digit mobile number."]]
        .forEach(function (x) { $("#" + x[0] + "Err", f).textContent = x[1]; $("#" + x[0], f).setAttribute("aria-invalid", String(!!x[1])); if (x[1]) ok = false; });
      if (!ok) { var bad = f.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
      var btn = $("#sgGo", f); btn.disabled = true; btn.textContent = "Dealing your suit…";
      var scores = {}; ORDER.forEach(function (k) { scores[k] = Math.round(c[k] / tot * 100); });
      var args = { p_name: nm, p_email: em, p_phone: ph, p_suit: top, p_scores: scores, p_self: qw.self.slice(0, 5), p_others: qw.others.slice(0, 5), p_sms_ok: $("#sgSms", f).checked, p_ref: (new URLSearchParams(location.search).get("ref") || S.get("ref", "") || null), p_page: location.pathname, p_tells: qw.tells };
      var done = function () { S.set("suitLead", { email: em, at: Date.now() }); S.set("leadDraft", null); showResult(); var r = $("#quizResult"); if (r) r.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" }); };
      if (!CFG.supabaseUrl) { done(); return; }
      fetch(CFG.supabaseUrl + "/rest/v1/rpc/submit_suit_lead_v2", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey }, body: JSON.stringify(args) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.message) || "That didn't go through."); return j; }); })
        .then(done, function (x) { btn.disabled = false; btn.textContent = "Show my suit"; $("#sgErr", f).textContent = x.message + " Try again, or email help@suiteface.com."; });
    });
    var first = $("#sgName", f); if (first && !first.value) setTimeout(function () { first.focus(); }, 50);
  }
  function jokerResult(R) {
    R.innerHTML = '<span class="big jokerpip" aria-hidden="true">' + (BRAND.hat || "") + '</span><div class="form-grid" style="gap:10px"><p class="eyebrow">Your card</p><h3 style="font-size:2.4rem">You drew the Joker</h3>' +
      '<p class="lede">Your answers lean toward jealousy, control and payback more than toward any suit. That\'s not who we deal into other people\'s decks.</p>' +
      '<p class="hint">This result is private: no other member ever sees it. Before you can be dealt a deck, someone from the SuiteFace team reviews your account and may ask for an ID check. If we got it wrong, write to <a href="mailto:help@suiteface.com">help@suiteface.com</a>.</p>' +
      '<div class="chips" style="margin-top:6px"><button class="btn ghost sm" type="button" id="retake">Retake the quiz</button><a class="btn ghost sm" href="safety.html">Read the House Rules</a></div></div>';
    $("#retake").addEventListener("click", resetQuiz);
  }
  function wildResult(R, lean, c, tot) {
    R.innerHTML = (window.SFSlots ? '<span class="embwrap">' + SFSlots.emblem("wild") + "</span>" : '<span class="big wildpip" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.8 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.8l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg></span>') + '<div class="form-grid" style="gap:10px"><p class="eyebrow">Your card</p><h3 style="font-size:2.4rem">You\'re a Wild Card</h3>' +
      '<p class="lede">You don\'t lean hard into any one suit, and that\'s not a flaw. A Wild Card is the rare one at the table: a little of every suit, unattached to any single one. Your answers lean slightly ' + SUIT[lean].name + ', so that\'s where we\'ll seat you first.</p>' +
      '<div class="bars">' + ORDER.map(function (s) { var pct = Math.round(c[s] / tot * 100); return '<div class="bar"><span>' + SUIT[s].sym + " " + SUIT[s].name + '</span><i><b data-w="' + pct + '" style="background:' + (SUIT[s].red ? "var(--red)" : "var(--cream)") + '"></b></i><span>' + pct + "%</span></div>"; }).join("") + "</div>" +
      '<div class="chips" style="margin-top:6px"><button class="btn gold sm" type="button" data-wild="' + lean + '">That\'s me. Play as a Wild Card</button>' +
      ORDER.map(function (s) { return '<button class="btn ghost sm" type="button" data-use="' + s + '">I\'m more ' + SUIT[s].name + "</button>"; }).join("") +
      '<button class="btn ghost sm" type="button" data-sharecard="' + top + '">📤 Share my suit</button><button class="btn ghost sm" type="button" id="retake">Retake</button></div>' +
      (window.SF_LIVE && window.SF_LIVE.seated ? "" : '<div class="suitcta"><h4>Your Wild Card is ready for the table.</h4><p class="hint">Take your seat to build your Face and get dealt your deck.' + (LAUNCH.open ? " The $21 buy-in is waived right now." : "") + '</p><div class="row"><a class="btn gold" href="membership.html">' + (LAUNCH.open ? "Get dealt in for $2.10" : "Get dealt in") + '</a>' + (window.SF_LIVE ? "" : '<button class="btn ghost" type="button" data-login>Create my account</button>') + "</div></div>") + "</div>";
    requestAnimationFrame(function () { $$("#quizResult .bar b").forEach(function (b) { b.style.width = b.getAttribute("data-w") + "%"; }); });
    $("#retake").addEventListener("click", resetQuiz);
    lockNote(R);
    $$("#quizResult [data-use],#quizResult [data-wild]").forEach(function (b) {
      b.addEventListener("click", function () { var w = b.hasAttribute("data-wild"); pickSuit(b.getAttribute(w ? "data-wild" : "data-use"), w, b); });
    });
  }
  /* Locking in a suit: members who are signed in and seated (Buy-In confirmed) lock their suit for 7 days, after a confirmation. */
  function suitLocked() { var L = P.suitLock; return !!(L && L.locked && new Date(L.unlocks_at) > new Date()); }
  function unlockDay() { return new Date(P.suitLock.unlocks_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); }
  function canLock() { return !!(window.SF_LIVE && window.SF_LIVE.seated && ROLE !== "guest"); }
  function applySuit(suit, wild) { P.wild = !!wild; P.mySuit = suit; P.selfWords = qw.self.slice(); P.othersWords = qw.others.slice(); P.fault = qw.fault; saveP(); renderStyles(); renderCard(); updateMeter(); }
  function suitName(suit, wild) { return wild ? "a Wild Card (seated as " + SUIT[suit].name + ")" : SUIT[suit].sym + " " + SUIT[suit].name; }
  function lockNote(R) {
    if (window.SFSlots) SFSlots.light(R);
    if (!canLock()) return;
    var box = document.createElement("div");
    if (suitLocked()) {
      box.className = "notice lockednote"; box.innerHTML = "🔒 <b>Your suit is locked as " + esc(suitName(P.suitLock.suit, P.suitLock.wild)) + "</b> until <b>" + esc(unlockDay()) + "</b>. This result is just for fun until then.";
      $$("[data-use],[data-wild]", R).forEach(function (b) { b.disabled = true; b.title = "Locked until " + unlockDay(); });
    } else {
      box.className = "hint locknote"; box.innerHTML = "🔒 Choosing your suit <b>locks it in for 7 days</b>. You'll confirm first.";
      $$("[data-use],[data-wild]", R).forEach(function (b) { if (b.classList.contains("gold")) b.textContent = b.hasAttribute("data-wild") ? "Lock in Wild Card" : "Lock in " + SUIT[b.getAttribute("data-use")].name; });
    }
    var chips = $(".chips", R); if (chips) chips.parentNode.insertBefore(box, chips);
  }
  function pickSuit(suit, wild, btn) {
    if (!canLock()) { applySuit(suit, wild); toast(wild ? "You're a Wild Card. It's on your card now." : "Your suit is " + SUIT[suit].name + ". It's on your card now.", suit); if (!wild) { jackpot(2500); burstAt(btn, 50); } return; }
    if (suitLocked()) { toast("Your suit is locked until " + unlockDay() + "."); return; }
    var until = new Date(Date.now() + 7 * 864e5).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    var m = modal((window.SFSlots ? '<span class="embwrap sm">' + SFSlots.emblem(wild ? "wild" : suit, 96) + "</span>" : '<span class="big" style="color:' + suitColor(suit) + '">' + pip(suit, "big") + "</span>") + '<h3 style="font-size:1.8rem">Lock in ' + esc(suitName(suit, wild)) + '?</h3>' +
      '<p class="lede" style="margin:6px 0 10px">Once you lock it in, <b>you can\'t change your suit for 7 days</b>, until <b>' + esc(until) + '</b>. Your deck is dealt from it, and retaking the quiz won\'t change it until then.</p>' +
      '<label class="check"><input type="checkbox" id="lockOk"> <span>I understand I\'m locking in my suit and can\'t change it for 7 days.</span></label>' +
      '<div class="row" style="margin-top:12px"><button class="btn gold" type="button" id="lockGo" disabled>🔒 Lock in my suit</button><button class="btn ghost" type="button" data-close>Not yet</button></div>');
    if (window.SFSlots) SFSlots.light(m);
    $("#lockOk", m).addEventListener("change", function () { $("#lockGo", m).disabled = !this.checked; });
    $("#lockGo", m).addEventListener("click", function () {
      var go = this; go.disabled = true;
      lrpc("lock_my_suit", { p_suit: suit, p_wild: !!wild }).then(function (r) {
        P.suitLock = Object.assign({ locked: true }, r || {}); applySuit(suit, wild); closeModal();
        toast("🔒 Locked in: " + suitName(suit, wild) + " until " + unlockDay() + ".", suit); jackpot(2500);
        var R = $("#quizResult"); if (R) { $$(".locknote", R).forEach(function (x) { x.remove(); }); lockNote(R); }
      }, function (er) { go.disabled = false; toast((er && er.message) || "Couldn't lock your suit. Try again."); });
    });
  }
  function showResult() {
    var c = { diamond: 0, club: 0, heart: 0, spade: 0 };
    /* Points: each scenario 2, each word card 1, the fault card 1. */
    qa.forEach(function (s) { c[s] += 2; });
    qw.self.concat(qw.others).forEach(function (w) { var k = suitOf(w, WORDS); if (k) c[k] += 1; });
    var fk = suitOf(qw.fault, FAULTS); if (fk) c[fk] += 1;
    var jokerPts = qw.tellQ * 2 + qw.tellW;
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
    /* Wild Card: answers that don't lean strongly toward any one suit. Not a flaw: a Wild Card can play in any suit. */
    var sorted = ORDER.map(function (k) { return Math.floor(c[k]); }).sort(function (x, y) { return y - x; });
    /* Joker: the toxic answers. All five toxic words, six or more toxic picks, or toxic points matching the top suit. */
    var joker = qw.tellW >= 5 || qw.tells >= 6 || (jokerPts > 0 && jokerPts >= sorted[0]);
    /* Wild Card: no suit leads the next one by at least 7 points. */
    var wild = !joker && sorted[0] - sorted[1] < 7;
    $("#quizBox").hidden = true; var R = $("#quizResult"); R.hidden = false;
    /* The result is revealed after the player tells us where to send it: name, email and phone. */
    if (!window.SF_LIVE && !S.get("suitLead", null)) { suitGate(R, joker ? "joker" : wild ? "wild" : top, c, tot); return; }
    if (window.SF_LIVE && (joker || qw.tells >= 5) && !S.get("tellsSent", false)) { S.set("tellsSent", true); window.SF_LIVE.rpc("set_quiz_tells", { p_tells: Math.max(qw.tells, 5) }); }
    if (joker) { jokerResult(R); return; }
    if (wild) { wildResult(R, top, c, tot); return; }
    R.innerHTML = (window.SFSlots ? '<span class="embwrap">' + SFSlots.emblem(top) + "</span>" : '<span class="big" style="color:' + suitColor(top) + '">' + pip(top, "big") + "</span>") + '<div class="form-grid" style="gap:10px"><p class="eyebrow">Your suit</p><h3 style="font-size:2.4rem">' +
      SUIT[top].sym + " You're a " + SUIT[top].name + "</h3><p class='lede'>" + SUIT[top].line + " " + SUIT[top].love + '</p><div class="bars">' +
      ORDER.map(function (s) { var pct = Math.round(c[s] / tot * 100); if (s === top) pct = Math.max(pct, 1 + Math.max.apply(null, ORDER.filter(function (k) { return k !== top; }).map(function (k) { return Math.round(c[k] / tot * 100); }))); return '<div class="bar' + (s === top ? " win" : "") + '"><span>' + SUIT[s].sym + " " + SUIT[s].name + '</span><i><b data-w="' + pct + '" style="background:' + (SUIT[s].red ? "var(--red)" : "var(--cream)") + '"></b></i><span>' + pct + "%</span></div>"; }).join("") +
      '</div>' + (tieNote ? '<p class="hint tie">⚖ ' + esc(tieNote) + "</p>" : "") + '<div class="selfwords"' + (qw.self.length || qw.others.length || qw.fault ? "" : " hidden") + '>' + (qw.self.length ? '<p><b>You see yourself as:</b> ' + esc(qw.self.join(", ")) + "</p>" : "") + (qw.others.length ? '<p><b>Friends and family say:</b> ' + esc(qw.others.join(", ")) + "</p>" : "") +
      (!qw.self.length || !qw.others.length ? "" : both.length ? '<p class="hint">You and the people who know you best agree on <b>' + esc(both.join(", ")) + "</b>. That's the real you.</p>" : '<p class="hint">You and the people who know you see different sides of you. Both belong on your card.</p>') +
      (qw.fault ? '<p><b>Your honest fault:</b> ' + esc(qw.fault) + ' <span class="hint">· Face Down (private). Owning it is a strong play.</span></p>' : "") + '</div>' +
      '<div class="chips" style="margin-top:6px"><button class="btn gold sm" type="button" data-use="' + top + '">That\'s me. Use ' + SUIT[top].name + "</button>" +
      ORDER.filter(function (s) { return s !== top; }).map(function (s) { return '<button class="btn ghost sm" type="button" data-use="' + s + '">I\'m more ' + SUIT[s].name + "</button>"; }).join("") +
      '<button class="btn ghost sm" type="button" id="retake">Retake</button></div>' +
      (window.SF_LIVE && window.SF_LIVE.seated ? "" : '<div class="suitcta"><h4>Your ' + SUIT[top].name + ' card is ready for the table.</h4><p class="hint">Take your seat to build your Face and get dealt your hand.' + (LAUNCH.open ? " The $21 buy-in is waived right now." : "") + '</p><div class="row"><a class="btn gold" href="membership.html">' + (LAUNCH.open ? "Get dealt in for $2.10" : "Get dealt in") + '</a>' + (window.SF_LIVE ? "" : '<button class="btn ghost" type="button" data-login>Create my account</button>') + "</div></div>") +
      "</div>";
    requestAnimationFrame(function () { $$("#quizResult .bar b").forEach(function (b) { b.style.width = b.getAttribute("data-w") + "%"; }); });
    $("#retake").addEventListener("click", resetQuiz);
    lockNote(R);
    $$("#quizResult [data-use]").forEach(function (b) {
      b.addEventListener("click", function () { pickSuit(b.getAttribute("data-use"), false, b); });
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
  P.theme = P.theme === "straight" ? "classic" : (P.theme || "private"); P.stickers = P.stickers || []; P.owned = P.owned || []; P.bumpers = P.bumpers || []; P.bumpersOk = P.bumpersOk || [];
  function owns(id) { return P.owned.indexOf(id) > -1; }
  function earnedHas(id) { if (id === "first1000") return !!P.founderNo; var n = +String(id).replace("ref", ""); return (P.refCount || 0) >= n; }
  function priceTag(n) { return n ? "$" + n.toFixed(2) : "Free"; }
  var styleField = document.createElement("div"); styleField.className = "field cardstyle";
  styleField.innerHTML = '<span style="font-weight:700">Card style</span>' +
    '<p class="hint" style="margin:0">Optional. An identity theme shows on your card for everyone in your deck to see, so pick one only if you want it known. <b>Private</b> shows no theme.</p>' +
    '<div class="thgroup"><b>Identity &amp; community themes <span class="free">Free</span></b><div class="themes" id="thFree"></div></div>' +
    '<div class="thgroup"><b>House themes <span class="prem">Premium</span></b><div class="themes" id="thPrem"></div></div>' +
    '<div class="thgroup"><b>Bumper stickers <span class="free">Free</span> <span class="hint">(up to 3: what you\'d proudly put on your car)</span></b><p class="hint" style="margin:2px 0 0">They ride along the bottom of your card. Each one is self-declared until the house checks it; checked stickers wear a brass ✓. Claiming something that isn\'t true earns a Joker.</p><div class="bumpick" id="bumpPick"></div><div id="bumpAsk"></div></div>' +
    '<div class="thgroup"><b>Stickers <span class="hint">(up to 3 on your card)</span></b><div id="stk"></div></div>' +
    '<button class="btn ghost sm" type="button" id="openCage">Visit the Cashier\'s Cage</button>';
  $("#lookChips").closest(".field").after(styleField);
  function renderStyle() {
    function tile(t) { var locked = t[3] && !owns(t[0]); return '<button type="button" class="thpick" data-th="' + t[0] + '" aria-pressed="' + (P.theme === t[0]) + '" title="' + esc(t[5]) + '"><i style="background:' + (t[4] || "var(--felt-c," + P.felt + ")") + '"></i><span>' + esc(t[1]) + "</span>" + (locked ? '<em>' + priceTag(t[3]) + "</em>" : "") + "</button>"; }
    $("#thFree").innerHTML = THEMES.filter(function (t) { return t[2] !== "premium"; }).map(tile).join("");
    $("#thPrem").innerHTML = THEMES.filter(function (t) { return t[2] === "premium"; }).map(tile).join("");
    if (window.SFBumpers && $("#bumpPick")) {
      var grp = "";
      $("#bumpPick").innerHTML = SFBumpers.list.map(function (b) { var h = b[6] !== grp ? '<span class="bumpgrp">' + b[6] + "</span>" : ""; grp = b[6];
        return h + '<button type="button" data-bump="' + b[0] + '" aria-pressed="' + (P.bumpers.indexOf(b[0]) > -1) + '">' + SFBumpers.html(b[0], { verified: P.bumpersOk.indexOf(b[0]) > -1 }) + "</button>"; }).join("");
      var ask = P.bumpers.filter(function (k) { return P.bumpersOk.indexOf(k) < 0 && k !== "flag"; });
      $("#bumpAsk").innerHTML = liveOn() && ask.length ? '<p class="hint" style="margin:8px 0 0">Want the brass ✓? <button type="button" class="linkish" data-bumpask>Ask the house to check ' + (ask.length > 1 ? "these" : "this one") + "</button>. A dealer will reach out with a secure way to confirm. Never email documents.</p>" : "";
    }
    $("#stk").innerHTML = Object.keys(PACKS).map(function (pk) { var pv = PACKS[pk], open = !pv[1] || owns("pack_" + pk) || (pk === "roller" && owns("stickers"));
      if (pk === "earned") return '<div class="stkpack"><span class="stkhead">Earned <span class="hint">(First 1,000 and one for each friend who joins, up to 12)</span></span><div class="stickers">' + STICKERS.filter(function (k) { return k[2] === "earned"; }).map(function (k) { var got = earnedHas(k[0]); return '<button type="button" class="stkpick wide' + (got ? "" : " earnlock") + '" data-stk="' + k[0] + '" aria-pressed="' + (P.stickers.indexOf(k[0]) > -1) + '"' + (got ? "" : ' data-earn="' + k[0] + '"') + ">" + k[1] + (got ? "" : "<em>🔒</em>") + "</button>"; }).join("") + "</div></div>";
      return '<div class="stkpack"><span class="stkhead">' + pv[0] + (open ? "" : ' <button type="button" class="unlockbtn" data-pack="' + pk + '">Unlock · $' + pv[1].toFixed(2) + "</button>") + '</span><div class="stickers">' +
        STICKERS.filter(function (k) { return k[2] === pk; }).map(function (k) { return '<button type="button" class="stkpick' + (pk === "passport" ? " wide" : "") + '" data-stk="' + k[0] + '" aria-pressed="' + (P.stickers.indexOf(k[0]) > -1) + '"' + (open ? "" : ' data-locked="' + pk + '"') + ">" + k[1] + (open ? "" : "<em>🔒</em>") + "</button>"; }).join("") + "</div></div>"; }).join("");
  }
  /* Placing and peeling stickers. Shared by My Face and the Lobby. Live players' stickers save to their card right away,
     so other players see them in their decks. */
  function toggleSticker(id) {
    var before = P.stickers.slice(), at = P.stickers.indexOf(id);
    if (at > -1) P.stickers.splice(at, 1); else { if (P.stickers.length >= 3) { toast("Up to 3 stickers. Tap one to peel it off."); return; } P.stickers.push(id); }
    renderStyle(); onChange(); if (typeof renderLobby === "function") renderLobby();
    if (liveOn()) lrpc("set_my_card_stickers", { p_stickers: P.stickers }).then(function (v) { P.stickers = v || []; saveP(); }, function (er) { P.stickers = before; saveP(); renderStyle(); onChange(); if (typeof renderLobby === "function") renderLobby(); toast(er.message); });
  }
  function toggleBumper(bk, live) {
    var bi = P.bumpers.indexOf(bk);
    if (bi > -1) P.bumpers.splice(bi, 1); else { if (P.bumpers.length >= 3) { toast("Up to 3 bumper stickers. Tap one to peel it off."); return; } P.bumpers.push(bk); }
    renderStyle(); onChange(); if (typeof renderLobby === "function") renderLobby();
    if (live && liveOn()) lrpc("set_my_bumpers", { p_bumpers: P.bumpers }).catch(function (er) { toast(er.message); });
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
      toggleSticker(id); }
    var bp = e.target.closest("[data-bump]");
    if (bp) { var bk = bp.getAttribute("data-bump");
      toggleBumper(bk, false); return; }
    if (e.target.closest("[data-bumpask]")) {
      var want = P.bumpers.filter(function (k) { return P.bumpersOk.indexOf(k) < 0 && k !== "flag"; });
      Promise.all(want.map(function (k) { return lrpc("request_bumper_check", { p_bumper: k }); })).then(function () { toast("Requested. Save my Face first if you just added them. A dealer will be in touch."); }, function (er) { toast((er && er.message) || "Save my Face first, then ask again."); });
      return; }
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
      ["Fresh Shuffle", "Re-deal your hand now instead of waiting for new players", "$2.10"],
      ["Comp a friend", "Gift a friend's $21 Buy-In; they get a comp code", "$21.00"],
      ["Table merch", "Joker hats, chips and decks from the SuiteFace store", "Coming soon"]
    ];
    modal('<p class="eyebrow">The Cashier\'s Cage</p><h3 style="font-size:2rem">Extras for your table</h3><p class="lede" style="margin:6px 0 12px">Everything here is optional. Rank is never for sale: your hand is always dealt by fit.</p><div class="cage">' +
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
  P.verifiedOnly = P.verifiedOnly || "any";
  var verSel = $("#fVerOnly"); if (verSel) { verSel.value = P.verifiedOnly; verSel.addEventListener("change", function () { P.verifiedOnly = verSel.value; onChange(); renderVerPanel(); }); }
  setTimeout(renderVerPanel, 0);
  function verPass(p) { var v = P.verifiedOnly || "any"; return !((v === "photo" || v === "both") && !p.photoV) && !((v === "id" || v === "both") && !p.idV); }
  function verBadges(p, long) {
    if (!p.photoV && !p.idV) return "";
    if (!long) return '<div class="vbad">' + (p.photoV ? '<i title="Photo verified">📷✓</i>' : "") + (p.idV ? '<i title="ID verified">🪪✓</i>' : "") + "</div>";
    var conf = (p.confirmed && p.confirmed.length ? p.confirmed : ["age", "height"]).join(" and ");
    return '<span class="vline">' + (p.photoV ? "📷 Photo verified" : "") + (p.photoV && p.idV ? " · " : "") + (p.idV ? "🪪 ID verified (" + conf + " from their ID)" : "") + "</span>";
  }
  function renderVerPanel() {
    var el = $("#verPanel"); if (!el) return; var V = P.ver || {};
    var photo = V.photo || !!(P.photoLive && P.photo), id = !!V.id;
    var via = V.photo_via === "id_match" ? "matched to your ID photo" : "taken live with your camera";
    var ch = (V.changes || []).slice(0, 4).map(function (c) { return "<li><b>" + esc({ height: "Height", weight: "Weight", birthday: "Birthday" }[c.field] || c.field) + "</b>: you said " + esc(c.stated || "nothing") + ", your ID says " + esc(c.from_id) + ". We used your ID.</li>"; }).join("");
    el.innerHTML = '<span class="flabel">Your verification</span>' +
      '<div class="verrow"><div class="vstep ' + (photo ? "ok" : "") + '"><b>📷 Photo verified</b><span>' + (photo ? "Yes, " + via + "." : "Take your Face photo live with your phone or computer camera, or verify your ID and we'll match your photo to it.") + "</span>" + (photo ? "" : '<button type="button" class="btn ghost sm" data-ver-photo>Take a live photo</button>') + "</div>" +
      '<div class="vstep ' + (id ? "ok" : "") + '"><b>🪪 ID verified</b><span>' + (id ? "Yes. Your age" + ((V.confirmed || []).indexOf("height") > -1 ? ", height" : "") + ((V.confirmed || []).indexOf("weight") > -1 ? " and weight" : "") + " now come from your ID." : "Scan a driver's license, state ID, passport or military ID and take a quick selfie. Your age and height then come from the ID, and you can be dealt as an Ace, King, Queen or Jack.") + "</span>" + (id ? "" : '<button type="button" class="btn gold sm" data-ver-id>Verify my ID</button>') + "</div></div>" +
      (ch ? '<div class="notice"><b>We matched your card to your ID:</b><ul>' + ch + "</ul></div>" : "") +
      ((P.verifiedOnly || "any") !== "any" && !(photo && id) ? '<p class="hint" style="margin:6px 0 0">Tip: people who ask for verified players usually want to be dealt to verified players too. Verify yourself to fill more decks.</p>' : "");
  }
  function renderHeadsUp() {
    var el = $("#headsUp"); if (!el || !window.SFSlots) return; var H = P.headsUp; if (!H || !(H.items || []).length) { el.hidden = true; return; } el.hidden = false;
    var stuck = H.stuck || {}, M = SFSlots.meaning;
    el.innerHTML = '<span class="flabel">Heads-ups <span class="hint">(private)</span></span><p class="hint" style="margin:2px 0 6px">Only you see these. Dispute one with a credit and it\'s gone. If three different dates send the same one, it sticks on your card for 7 days and can\'t be disputed. Dispute credits: <b>' + (H.credits || 0) + '</b> · <button type="button" class="linkish" data-buycredit>Buy a credit · $2.10</button></p>' +
      Object.keys(stuck).map(function (k) { return '<p class="notice bad" style="margin:4px 0">' + SFSlots.svg(k, 18) + " <b>" + M[k][0] + "</b> is on your card until " + new Date(stuck[k]).toLocaleDateString("en-US", { month: "long", day: "numeric" }) + ". " + M[k][1] + "</p>"; }).join("") +
      '<div class="hulist">' + H.items.map(function (x) { return '<div class="cmrow"><span>' + SFSlots.svg(x.kind, 18) + " <b>" + M[x.kind][0] + "</b> · " + new Date(x.at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + "</span>" + (x.disputed ? '<span class="hint">Disputed · removed</span>' : x.stuck ? '<span class="hint">Stuck (3 dates)</span>' : '<button class="chip sm" type="button" data-dispute="' + x.id + '">Dispute</button>') + "</div>"; }).join("") + "</div>";
  }
  document.addEventListener("click", function (e) {
    var d = e.target.closest("[data-dispute]");
    if (d) { if (!confirm("Use 1 dispute credit to remove this heads-up?")) return;
      lrpc("dispute_heads_up", { p_id: +d.getAttribute("data-dispute") }).then(function () { toast("Removed."); return lrpc("my_heads_ups"); }).then(function (h) { if (h) { P.headsUp = h; renderHeadsUp(); } }, function (er) { toast((er && er.message) || "Couldn't dispute."); }); return; }
    if (e.target.closest("[data-buycredit]")) buy("dispute_credit", "Dispute credit", 2.10, function () { toast("In the live app, your credit is added to your account right after checkout."); });
  });
  function renderCompPanel() {
    var el = $("#compPanel"); if (!el || !window.SFSlots) return; var rows = P.compRows || [];
    if (!rows.length) { el.hidden = true; return; } el.hidden = false;
    el.innerHTML = '<span class="flabel">' + SFSlots.svg("seven", 16) + ' Your compliment stickers</span><p class="hint" style="margin:2px 0 6px">Earned from people you played a hand with. Tap one to hide it from your card, or show it again.</p><div class="cpmine">' +
      rows.map(function (x) { return '<button type="button" class="cp mine" data-cphide="' + x.kind + '" aria-pressed="' + !x.hidden + '">' + SFSlots.svg(x.kind, 22) + "<b>" + SFSlots.meaning[x.kind][0] + " × " + x.n + "</b><span>" + (x.hidden ? "Hidden" : "On your card") + "</span></button>"; }).join("") + "</div>";
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cphide]"); if (!b) return; var k = b.getAttribute("data-cphide"), hide = b.getAttribute("aria-pressed") === "true";
    lrpc("set_compliment_hidden", { p_kind: k, p_hidden: hide }).then(function () { (P.compRows || []).forEach(function (x) { if (x.kind === k) x.hidden = hide; }); P.myComps = null; (P.compRows || []).forEach(function (x) { if (!x.hidden) { P.myComps = P.myComps || {}; P.myComps[x.kind] = x.n; } }); saveP(); renderCard(); renderCompPanel(); }, function (er) { toast(er.message); });
  });
  (function () {
    var w = $("#fWish"), b = $("#wishSave"); if (!w || !b) return; w.value = P.wishlist || "";
    b.addEventListener("click", function () { var v = w.value.trim();
      if (v && !/^https:\/\/(www\.)?(amazon\.com\/(hz\/wishlist|registry|gp\/registry)\/|a\.co\/|amzn\.to\/|target\.com\/gift-registry\/|walmart\.com\/(lists|registry)\/|etsy\.com\/people\/[^/]+\/favorites)/i.test(v)) { toast("Use a wish list link from Amazon, Target, Walmart or Etsy. Their lists keep your address private."); return; }
      var done = function () { P.wishlist = v; saveP(); toast(v ? "Wish list saved. Only people you pair with can see it." : "Wish list removed."); };
      if (liveOn()) lrpc("set_my_wishlist", { p_url: v }).then(done, function (er) { toast(er.message); }); else done(); });
  })();
  /* Couples (🍍): two individual members, each with their own verified account, link up. Both must agree. */
  function renderCouple() {
    var el = $("#couplePanel"); if (!el) return; var on = (P.bumpers || []).indexOf("pineapple") > -1;
    el.hidden = !on; if (!on) return; var C = P.couple || [], act = C.filter(function (c) { return c.status === "active"; })[0], inc = C.filter(function (c) { return c.status === "pending" && c.incoming; }), out = C.filter(function (c) { return c.status === "pending" && !c.incoming; })[0];
    el.innerHTML = '<span class="flabel">🍍 Play as a couple <span class="hint">(optional)</span></span><p class="hint" style="margin:2px 0 8px">Each of you keeps your own verified account. Link them and your cards show together, only to members who are open to the lifestyle.</p>' +
      (act ? '<p><b>Linked with ' + esc(act.name || "your partner") + "</b>" + (act.tag ? " @" + esc(act.tag) : "") + ' · <button type="button" class="linkish" data-cpend>Unlink</button></p>' :
        inc.map(function (c) { return '<p>' + esc(c.name || "Someone") + (c.tag ? " @" + esc(c.tag) : "") + ' wants to link as a couple. <button type="button" class="btn gold sm" data-cpyes="' + c.id + '">Accept</button> <button type="button" class="btn ghost sm" data-cpno="' + c.id + '">Decline</button></p>'; }).join("") +
        (out ? '<p class="hint">Waiting for @' + esc(out.tag || "") + ' to accept. <button type="button" class="linkish" data-cpend>Cancel</button></p>' : '<div class="row"><input id="cpTag" placeholder="@their tag" maxlength="25" style="flex:1"><button type="button" class="btn ghost sm" data-cpinv>Invite</button></div>'));
  }
  document.addEventListener("click", function (e) {
    var t = e.target, act = t.closest("[data-cpinv]") ? ["couple_invite", { p_tag: ($("#cpTag") || {}).value || "" }, "Invite sent."] : t.closest("[data-cpyes]") ? ["couple_respond", { p_link: t.closest("[data-cpyes]").getAttribute("data-cpyes"), p_accept: true }, "You're linked as a couple."] : t.closest("[data-cpno]") ? ["couple_respond", { p_link: t.closest("[data-cpno]").getAttribute("data-cpno"), p_accept: false }, "Declined."] : t.closest("[data-cpend]") ? ["couple_end", {}, "Unlinked."] : null;
    if (!act) return; if (!liveOn()) { toast("Couples link in the live app once you're both members."); return; }
    lrpc(act[0], act[1]).then(function () { toast(act[2]); return lrpc("my_couple"); }).then(function (c) { P.couple = c || []; renderCouple(); }, function (er) { toast((er && er.message) || "Try again."); });
  });
  function renderHrDeck() {
    var el = $("#hrDeck"); if (!el) return; el.hidden = !P.highRoller; if (!P.highRoller) { el.innerHTML = ""; return; }
    var D = P.hrDeck || {}, st = D.status || "needs_address", by = D.ship_by ? new Date(D.ship_by).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "within 180 days of your confirmation";
    var head = '<span class="flabel">💎 Your High Roller deck</span><p class="hint" style="margin:2px 0 0">Every High Roller gets a real SuiteFace deck of playing cards, shipped by <b>' + esc(by) + "</b>.</p>";
    if (st === "shipped" || st === "delivered") { el.innerHTML = head + '<p style="margin:8px 0 0"><b>' + (st === "shipped" ? "On its way" : "Delivered") + "</b>" + (D.tracking ? " · tracking " + esc(D.tracking) : "") + "</p>"; return; }
    function v(k) { return esc(D[k] || ""); }
    el.innerHTML = head + (st === "ready" ? '<p class="notice good" style="margin:8px 0 0">We have your address. Update it any time before it ships.</p>' : "") +
      '<div class="addr"><input class="full" id="hdName" placeholder="Name on the package" value="' + v("name") + '" autocomplete="name"><input class="full" id="hdL1" placeholder="Street address" value="' + v("line1") + '" autocomplete="address-line1"><input class="full" id="hdL2" placeholder="Apt, suite (optional)" value="' + v("line2") + '" autocomplete="address-line2"><input id="hdCity" placeholder="City" value="' + v("city") + '" autocomplete="address-level2"><input id="hdState" placeholder="State (AL)" maxlength="2" value="' + v("state") + '" autocomplete="address-level1"><input id="hdZip" placeholder="ZIP" maxlength="10" inputmode="numeric" value="' + v("zip") + '" autocomplete="postal-code"></div>' +
      '<div class="row" style="margin-top:10px"><button type="button" class="btn gold sm" data-hrdeck-save>' + (st === "ready" ? "Update address" : "Ship my deck here") + "</button></div>";
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-hrdeck-save]")) return;
    var a = { p_name: $("#hdName").value, p_line1: $("#hdL1").value, p_line2: $("#hdL2").value, p_city: $("#hdCity").value, p_state: ($("#hdState").value || "").toUpperCase().trim(), p_zip: ($("#hdZip").value || "").trim() };
    if (!liveOn()) { toast("Preview: on suiteface.com this saves your shipping address for your High Roller deck."); return; }
    lrpc("set_hr_deck_address", a).then(function () { toast("Got it. Your High Roller deck ships to that address."); return lrpc("my_hr_deck"); }).then(function (d) { if (d) { P.hrDeck = d; renderHrDeck(); } }, function (er) { toast((er && er.message) || "Check the address and try again."); });
  });
  setTimeout(renderHrDeck, 0);
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-ver-photo]")) { var cb = $("#camBtn"); if (cb) cb.click(); return; }
    if (!e.target.closest("[data-ver-id]")) return;
    modal('<h3 style="font-size:1.7rem">Verify my ID</h3><ol class="vsteps"><li><b>Scan your ID.</b> A U.S. driver\'s license, state ID card, passport, passport card or military ID. Front and back for a license.</li><li><b>Take a quick selfie.</b> We match it to the photo on your ID, which also verifies your Face photo.</li><li><b>Your card updates.</b> Your age and height (and weight, where your license lists it) come from your ID. If what you entered is different, your card uses what the ID says and we tell you what changed.</li></ol>' +
      '<p class="hint">SuiteFace never stores a picture of your ID. Our verification partner checks it and sends back only the result: verified or not, your birth date, and height and weight where the ID lists them. Only your age shows on your card; your birth date never does.</p>' +
      '<div class="notice pv"><b>Opening soon.</b> ID checks open when our verification partner goes live. Your live Face photo already counts as photo verified.</div><div class="row" style="margin-top:10px"><button class="btn gold" type="button" data-close>Got it</button></div>');
  });
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
      toast(P.room === "main" ? "Back on the Main Floor: your hand from everyone at your table." : "Now playing the " + ROOM[P.room][1] + ": " + DECK.length + " cards dealt."); }
  });
  function initials(n) { return (n || "?").trim().split(/\s+/).map(function (x) { return x[0]; }).join("").slice(0, 2).toUpperCase() || "?"; }
  function renderCard() {
    var s = P.mySuit || P.trumps[0], col = SUIT[s].red ? "var(--red)" : "#2B2730";
    var h = P.handle.trim() ? "@" + P.handle.trim().replace(/^@/, "") : "@yourname";
    $("#myCard").style.setProperty("--felt-c", P.felt); $("#myCard").classList.toggle("hr", !!P.highRoller); $("#myCard").classList.toggle("hrgold", P.highRoller === "buyin");
    var thm = THEME[P.theme] || THEME.private; $("#myCard").style.setProperty("--ring", thm[4] || "none"); $("#myCard").classList.toggle("themed", !!thm[4]); $("#myCard").setAttribute("data-theme", thm[0]);
    $("#myCard").innerHTML = '<div class="in"><span class="corner c1" style="color:' + col + '">A' + pip(s) + '</span><span class="corner c2" style="color:' + col + '">A' + pip(s) + "</span>" +
      '<div class="por" style="' + (P.photo ? "background-image:url(" + P.photo + ")" : "") + '">' + (P.photo ? "" : esc(initials(P.name))) + (P.photoLive && P.photo ? '<span class="livetag" title="Taken live in SuiteFace">📷 Live</span>' : "") + "</div>" +
      (P.wins && topWin(P.wins) ? '<div class="mywin">' + winBadge(P.wins, true) + "</div>" : "") + '<div class="nm">' + esc(P.name || "Your Name") + (parseInt(P.age, 10) ? ", " + esc(parseInt(P.age, 10)) : "") + '</div><div class="hd">' + esc(h) + "</div>" + (seekLine() ? '<div class="seek">' + esc(seekLine()) + "</div>" : "") + (P.founderNo ? '<div class="f1kline">' + (window.SFSlots ? SFSlots.founder(P.founderNo, 44) : "") + '<span>★ First 1,000 · №' + String(P.founderNo).padStart(4, "0") + "</span></div>" : "") + ((P.hostCasinos || []).length ? '<div class="hostline">♠ Host · ' + esc(P.hostCasinos.join(" · ")) + "</div>" : "") + (P.highRoller ? '<div class="hrb mine">💎 High Roller · ' + (P.highRoller === "verified" ? "Platinum ✓" : "Gold") + "</div>" + (P.masked ? '<div class="maskline">🎭 Others see: ' + esc(P.maskName || "Masked High Roller") + (parseInt(P.age, 10) ? ", " + (parseInt(P.age, 10) - 1) + "–" + (parseInt(P.age, 10) + 1) : "") + "</div>" : "") : "") +
      '<div class="bio">' + esc(P.bio || "Your Face Value goes here: a few lines about what makes you, you.") + "</div>" + ((P.selfWords && P.selfWords.length) ? '<div class="words2"><span><b>Me:</b> ' + esc(P.selfWords.slice(0, 3).join(" · ")) + '</span>' + ((P.othersWords && P.othersWords.length) ? '<span><b>My people:</b> ' + esc(P.othersWords.slice(0, 3).join(" · ")) + "</span>" : "") + "</div>" : "") + '<div class="facts">' + esc(myFacts()) + "</div>" + (window.SFBumpers ? SFBumpers.strip(P.bumpers, P.bumpersOk) : "") + (window.SFSlots && P.myComps ? SFSlots.strip(P.myComps, { size: 16 }) : "") +
      '<div class="tr" style="color:' + col + '">' + (P.wild ? "★ Wild Card" : P.mySuit ? SUIT[s].sym + " " + SUIT[s].name : "Take the quiz to get your suit") + "</div></div>" + '<div class="tablebadge">' + esc(TABLE[P.looking][1]) + " table</div>" + '<div class="stks">' + P.stickers.map(function (id) { var k = STICKERS.filter(function (x) { return x[0] === id; })[0]; return k ? '<span class="stk-' + k[2] + '">' + k[1] + "</span>" : ""; }).join("") + "</div>";
    $("#ph").style.backgroundImage = P.photo ? "url(" + P.photo + ")" : ""; $("#ph").textContent = P.photo ? "" : initials(P.name);
  }
  var deckDirty = false;
  function onChange() { if (typeof renderCouple === "function") renderCouple(); if (typeof renderVerPanel === "function") renderVerPanel(); if (typeof renderHrDeck === "function") renderHrDeck(); renderCard(); updateMeter(); deckDirty = true; saveDraft(); zipHint(); if (typeof tabCounts === "function") tabCounts(); }
  function zipHint() {
    var z = ZIPS[P.zip], el = $("#zipHint"); if (!el) return;
    el.textContent = z ? z.city + ", " + z.st + ". Your cards are measured from here." : 'Your cards are measured from your ZIP. Only "about X miles" is ever shown.';
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
    if (liveOn()) { toast("Saving your Face…"); pushFace().then(function () { toast("Face saved. Dealing your hand from real members…", P.mySuit || "heart"); jackpot(3000); burstAt($("#myCard"), 80); return liveDeck(true); }, function (x) { serverProblem(x); }); return; }
    placePool(); buildDeck(); renderTable(true); mapT0 = performance.now(); renderMap();
    toast("Face saved. Your hand has been re-dealt.", P.mySuit || "heart"); jackpot(3000); burstAt($("#myCard"), 80);
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
  function demoBumpers(i) { var q = rng(i * 7919 + 13), keys = ["veteran", "flag", "college", "masters", "nurse", "educator", "coach", "owner", "pilot", "retired", "captain", "cpa", "lawyer", "md", "phd", "active_duty", "do"], out = [];
    if (q() < .5) { out.push(keys[(q() * keys.length) | 0]); if (q() < .35) { var k2 = keys[(q() * keys.length) | 0]; if (out.indexOf(k2) < 0) out.push(k2); } } return out; }
  var CAST = [["Kelly", "women", 32, "heart"], ["Maya", "women", 29, "club"], ["Priya", "women", 31, "diamond"], ["Grace", "women", 46, "club"], ["Jane", "women", 39, "spade"], ["Ana", "women", 28, "heart"], ["Nia", "women", 27, "diamond"], ["Taylor", "women", 31, "heart"],
    ["Jordan", "men", 34, "heart"], ["Ellis", "men", 38, "spade"], ["Ryan", "men", 33, "club"], ["Matteo", "men", 36, "diamond"], ["Ben", "men", 31, "heart"], ["Chris", "men", 41, "spade"], ["Daniel", "men", 45, "club"], ["Luke", "men", 36, "diamond"],
    ["Nikolai", "men", 40, "heart"], ["Joe", "men", 50, "club"], ["Malik", "men", 33, "diamond"], ["Sam", "men", 29, "spade"], ["Theo", "men", 44, "spade"]];
  var POOL = (function () {
    var r = rng(52), out = [], id = 0, looks = ["longterm", "longterm", "seeing", "marriage", "friends", "seeing", "casual", "open"];
    function add(name, gender) {
      var s = ORDER[id % 4];
      var ints = []; while (ints.length < 4) { var x = INTERESTS[(r() * INTERESTS.length) | 0]; if (ints.indexOf(x) < 0) ints.push(x); }
      out.push({ id: "p" + id, name: name, gender: gender, suit: s, age: 22 + Math.round(Math.pow(r(), 1.25) * 30), dist: Math.round((0.5 + Math.pow(r(), 1.4) * 60) * 10) / 10,
        looking: looks[(r() * looks.length) | 0], interests: ints, bio: BIOS[s][(r() * 4) | 0], noise: r(), hue: (r() * 360) | 0, bumpers: demoBumpers(id) });
      id++;
    }
    // The sample deck is the photographed example cast: one face, one name, one suit each. No initials, no reused faces.
    CAST.forEach(function (c) { add(c[0], c[1]); var q = out[out.length - 1]; q.age = c[2]; q.suit = c[3]; q.photo = "assets/people/" + c[0].toLowerCase() + ".webp"; q.bio = BIOS[c[3]][(r() * 4) | 0]; });
    // a few sample cards carry public Joker status (10 disaster reports in 180 days, confirmed by Judges)
    out.forEach(function (p, i) { var r2 = rng(hash(p.id + "jk"))(); p.jk = r2 < .62 ? 0 : r2 < .8 ? 1 : r2 < .9 ? 2 : r2 < .95 ? 3 : r2 < .98 ? 5 : 8; });
    [6, 15].forEach(function (k, j) { if (out[k]) { out[k].jk = 10; out[k].joker = { count: 10 + j, until: ["Feb 3, 2027", "Mar 19, 2027"][j] }; } });
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
    return passesDealbreakers(p) && verPass(p) && (p.realAge || p.age) >= P.ageMin && (p.realAge || p.age) <= P.ageMax && p.dist <= P.dist && (G.jokered || []).indexOf(p.id) < 0;
  }

  /* ---------- ZIP database (42k US ZIP codes) ---------- */
  var ZIPS = {}, ZLIST = [], zipReady = false, DEMO_ZIP = "64105";
  function originZip() { return ZIPS[P.zip] ? P.zip : DEMO_ZIP; }
  function miles(a, b, c, d) {
    var r = Math.PI / 180, dp = (c - a) * r, dl = (d - b) * r;
    var h = Math.sin(dp / 2) * Math.sin(dp / 2) + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dl / 2) * Math.sin(dl / 2);
    return 3958.8 * 2 * Math.asin(Math.sqrt(h));
  }
  var zipAsked = false;
  function loadZips() {
    if (!window.fetch || zipAsked) return; zipAsked = true;
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
    if (liveOn()) { DECK = []; BY = {}; deckDirty = false; return; } // signed-in players only ever see real players; never the sample cast
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
    if (p.photo && !isMasked(p)) return '<div class="avatar hasph" style="' + (extra || "") + "background:#33473a url('" + esc(p.photo) + "') center/cover\"></div>";
    return '<div class="avatar" style="' + (extra || "") + 'background:radial-gradient(circle at 30% 25%,hsl(' + p.hue + ' 45% 52%),' + bg + ')">' + esc(initials(p.name)) + "</div>";
  }
  function jmeter(p, big) {
    if (p.self) return ""; // Joker Policy: a member never sees their own count.
    if (p.joker) return '<span class="jm jm-on">JOKER</span>';
    var n = p.jk || 0, pips = ""; for (var i = 0; i < 10; i++) pips += '<i class="' + (i < n ? "on" : "") + '"></i>';
    return '<span class="jm' + (n >= 7 ? " hot" : n >= 4 ? " warm" : "") + '" title="Jokers from confirmed dates in the last 180 days">' + (big ? "Joker meter " : "Jokers ") + n + "/10" + (big ? '<span class="pips">' + pips + "</span>" : "") + "</span>";
  }
  /* Card Backs: what everyone sees before they flip your card. Special releases are free; partner backs come with
     the owner's permission and a share of each purchase to them or a cause they choose. */
  var CB = {
    "founders-night": ["Founders' Night", "Oxblood velvet and gold stars, for the first season at the table."],
    "lucky-sevens": ["Lucky Sevens", "Cherries, sevens and clovers on a midnight reel."],
    "magic-city": ["Magic City", "Gold ironwork on deep green, for Birmingham, where SuiteFace began."],
    "midnight-neon": ["Midnight Neon", "Pink and gold neon on a dark sign board."],
    "sunday-best": ["Sunday Best", "Ivory linen, a gold border and a dove. For the ones who never miss Sunday."]
  };
  function cbPreview(id, size) { return '<div class="pcard cbmini" style="--w:' + (size || 120) + 'px"><div class="flip"><div class="cover" style="--felt:#1E6347;--rim:#23202A"><div class="cv-in cb-' + id + '">' + medalFor(null) + "</div></div></div></div>"; }
  function renderCardBacks() {
    var g = $("#cbGallery"); if (!g) return;
    g.innerHTML = Object.keys(CB).map(function (id) { var on = P.cardBack === id; return '<div class="cbitem' + (on ? " on" : "") + '">' + cbPreview(id, 132) + "<b>" + esc(CB[id][0]) + "</b><span>" + esc(CB[id][1]) + '</span><button type="button" class="btn ' + (on ? "ghost" : "gold") + ' sm" data-cbuse="' + id + '">' + (on ? "On your card ✓" : "Use this back") + "</button></div>"; }).join("");
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cbuse]"); if (!b) return; var id = b.getAttribute("data-cbuse");
    if (P.cardBack === id) { id = null; }
    var done = function () { P.cardBack = id; saveP(); renderCardBacks(); renderCard(); toast(id ? CB[id][0] + " is on the back of your card." : "Back to the house design."); if (id) jackpot(1500); };
    if (liveOn()) lrpc("set_my_card_back", { p_back: id }).then(done, function (er) { toast(er.message); }); else done();
  });
  (function () {
    var f = $("#cbApply"); if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault(); var out = $("#cbOut");
      var a = { p_org: $("#cbOrg").value, p_contact: $("#cbName").value, p_email: $("#cbEmail").value, p_phone: $("#cbPhone").value, p_kind: $("#cbKind").value, p_website: $("#cbWeb").value, p_beneficiary: $("#cbBen").value, p_idea: $("#cbIdea").value, p_price: $("#cbPrice").value, p_rights: $("#cbRights").checked };
      if (!a.p_rights) { out.textContent = "Only the owner, or someone they've authorized, can apply."; return; }
      out.textContent = "Sending…";
      fetch(CFG.supabaseUrl + "/rest/v1/rpc/submit_card_back_application", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + CFG.supabaseKey }, body: JSON.stringify(a) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.message || "Couldn't send."); return j; }); })
        .then(function () { out.textContent = ""; f.innerHTML = '<h3>Thank you.</h3><p class="lede">We\'ll review your application and email you within a few business days about rights, design and launch.</p>' + (liveOn() ? '<div class="row"><a class="btn gold" href="my-table.html#lobby">‹ Back to Your Lobby</a></div>' : ""); }, function (er) { out.textContent = er.message; });
    });
  })();
  setTimeout(renderCardBacks, 0);

  /* "Read us": your card and theirs, read together. Live members get the AI dealer's reading; the sample deck gets a
     house reading built from the cards. Zodiac shows only when both of you follow it. */
  var PAIRNOTE = {
    "heart|heart": ["Two steady hearts: loyalty comes easy, and nobody has to wonder where they stand.", "Someone has to make the plan. Take turns being the one who books it."],
    "diamond|heart": ["One of you makes it happen, the other makes it feel like home.", "Diamond moves fast; Heart likes time to settle in. Match the pace early."],
    "club|heart": ["Club brings the fun, Heart brings the follow-through.", "A packed Saturday versus a quiet night in. Trade off."],
    "heart|spade": ["Both of you are quietly all-in. Trust builds deep and fast.", "Neither likes to say the hard thing first. Say it anyway, kindly."],
    "diamond|diamond": ["Two planners: no wasted time and no wondering what's next.", "Two captains, one ship. Decide who steers which part."],
    "club|diamond": ["Big plans meet big energy. This could be a lot of fun.", "Club improvises, Diamond schedules. Leave room for both."],
    "diamond|spade": ["Decisive meets thoughtful: good choices, made well.", "Diamond wants an answer; Spade wants to be sure. Give it a day."],
    "club|club": ["Never a dull night. You'll make friends everywhere you go together.", "Somebody has to handle the logistics. Pick a night to be the grown-up."],
    "club|spade": ["Club draws Spade out; Spade gives Club something solid to land on.", "Different batteries: one recharges with people, one alone. Respect both."],
    "spade|spade": ["Deep trust and quiet devotion. You'll notice the little things.", "Both slow to open up. Ask the second question."]
  };
  var ZEL = { Aries: "fire", Leo: "fire", Sagittarius: "fire", Taurus: "earth", Virgo: "earth", Capricorn: "earth", Gemini: "air", Libra: "air", Aquarius: "air", Cancer: "water", Scorpio: "water", Pisces: "water" };
  function zodiacNote(a, b) {
    var x = ZEL[a], y = ZEL[b]; if (!x || !y) return null;
    var good = { "fire|air": 1, "air|fire": 1, "earth|water": 1, "water|earth": 1 };
    if (x === y) return a + " and " + b + ": two " + x + " signs. You get each other without translating.";
    if (good[x + "|" + y]) return a + " and " + b + ": " + x + " and " + y + " feed each other. The stars say lean in.";
    return a + " and " + b + ": " + x + " and " + y + " take a little learning. The stars say be curious, not certain.";
  }
  function houseReading(p) {
    var me = P.mySuit || P.trumps[0], them = p.suit, key = [me, them].sort().join("|"), note = PAIRNOTE[key] || PAIRNOTE["heart|heart"];
    var shared = (p.interests || []).filter(function (x) { return (P.interests || []).indexOf(x) > -1; });
    var nm = p.name.split(" ")[0], mz = asList(P.id && P.id.zodiac)[0], tz = asList(p.id_ && p.id_.zodiac)[0];
    var zod = mz && tz && !/don't follow/i.test(mz + tz) ? zodiacNote(mz, tz) : null;
    var sameTable = p.looking === P.looking;
    return {
      title: SUIT[me].name + " meets " + SUIT[them].name,
      story: "You " + (shared.length ? "both light up over " + shared.slice(0, 2).join(" and ").toLowerCase() : "come at life from different corners") + ", and " + nm + " " + SUIT[them].love.charAt(0).toLowerCase() + SUIT[them].love.slice(1) + " " + note[0],
      strengths: [note[0], shared.length ? "Shared ground: " + shared.slice(0, 3).join(", ") + "." : "New ground to explore together: you'd each bring the other somewhere new.", sameTable ? "You're at the same table: you want the same kind of thing right now." : "Different tables: talk early about what you're each looking for."],
      challenges: [note[1], (p.dist > 20 ? "About " + Math.round(p.dist) + " miles apart. Plan the drive into the date." : "Close by, so it's easy to move fast. Let it build.")],
      zodiac: zod,
      first_date: shared.length ? "Start with " + shared[0].toLowerCase() + ", then find somewhere quiet to talk." : "Pick something neither of you has done before."
    };
  }
  function readUs(p) {
    var me = P.mySuit || P.trumps[0];
    var m = modal('<div class="readus"><div class="ru-cards"><div class="ru-card mine" style="--c:' + suitColor(me) + '">' + pip(me) + "<b>" + esc(P.name || "You") + '</b></div><div class="ru-plus">+</div><div class="ru-card" style="--c:' + suitColor(p.suit) + '">' + pip(p.suit) + "<b>" + esc(p.name.split(" ")[0]) + '</b></div></div><div id="ruBody"><p class="hint ru-wait">The dealer is reading your cards…</p></div></div>');
    function show(R) {
      var b = $("#ruBody", m); if (!b) return;
      b.innerHTML = '<h3 class="ru-t">' + esc(R.title || "Your reading") + '</h3><p class="lede">' + esc(R.story || "") + "</p>" +
        '<div class="ru-cols"><div><h4>✦ Why it could work</h4><ul>' + (R.strengths || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div><div><h4>◆ Worth watching</h4><ul>' + (R.challenges || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>" +
        (R.zodiac ? '<p class="ru-z">✧ <b>In the stars:</b> ' + esc(R.zodiac) + "</p>" : "") + (R.first_date ? '<p class="ru-d">🍸 <b>First move:</b> ' + esc(R.first_date) + "</p>" : "") +
        '<p class="hint">A reading is for fun and reflection, not a promise. Zodiac appears only when you both follow it.</p><div class="row"><button class="btn gold" type="button" data-close>Back to my hand</button></div>';
      jackpot(1500);
    }
    if (liveOn() && /^[0-9a-f-]{36}$/.test(String(p.id))) {
      fetch(CFG.supabaseUrl + "/functions/v1/pair-reading", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + window.SF_LIVE.token() }, body: JSON.stringify({ other: p.id }) })
        .then(function (r) { return r.json(); }).then(function (j) { if (j && j.reading) show(j.reading); else { var b = $("#ruBody", m); if (b) b.innerHTML = '<p class="hint">' + esc((j && j.error) || "The dealer couldn't read these cards right now.") + "</p>"; } }, function () { var b = $("#ruBody", m); if (b) b.innerHTML = '<p class="hint">The dealer couldn\'t read these cards right now.</p>'; });
    } else setTimeout(function () { show(houseReading(p)); }, REDUCED ? 50 : 900);
  }
  /* Every card is dealt face down. The back (what everyone sees first) carries only the player's badges, stickers,
     felt and pattern. Tap to flip and meet the person; Burn and Play appear once it's turned over. */
  /* ---------- Winners' Row badges: earned only when both people shared a win and staff approved it ---------- */
  var WINS = {
    married: { ic: "ring", short: "Married here", venue: "chapel", long: "Met on SuiteFace and married" },
    engaged: { ic: "ring", short: "Engaged here", venue: "chapel", long: "Met on SuiteFace and got engaged" },
    together: { ic: "flush", short: "Royal Flush", venue: "royal-flush", long: "Found their person on SuiteFace" },
    friends: { ic: "cheers", short: "Friends made", venue: "lounge", long: "Made a real friend on SuiteFace" },
    great_date: { ic: "jackpot", short: "Jackpot date", venue: "jackpot", long: "Had a jackpot date on SuiteFace" }
  };
  var WIN_ORDER = ["married", "engaged", "together", "friends", "great_date"];
  function topWin(list) { list = list || []; for (var i = 0; i < WIN_ORDER.length; i++) if (list.indexOf(WIN_ORDER[i]) > -1) return WIN_ORDER[i]; return null; }
  function winIcon(kind, size) {
    size = size || 18; var w = WINS[kind]; if (!w) return "";
    var g = '<defs><linearGradient id="wg' + size + kind + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE7A3"/><stop offset=".55" stop-color="#E8C46A"/><stop offset="1" stop-color="#9C6B1F"/></linearGradient></defs>', f = "url(#wg" + size + kind + ")";
    var art = {
      ring: '<circle cx="12" cy="15" r="6.5" fill="none" stroke="' + f + '" stroke-width="2.4"/><path d="M8.6 6.2 10.4 3.4h3.2l1.8 2.8L12 9.6z" fill="#F4F1FA" stroke="#B8862F" stroke-width=".8"/>',
      flush: '<rect x="4" y="3" width="11" height="15" rx="2" fill="#FAF7F0" stroke="#B8862F"/><rect x="9" y="6" width="11" height="15" rx="2" fill="#FAF7F0" stroke="' + f + '" stroke-width="1.4"/><path d="M14.5 16.8c-2.6-1.7-3.6-3-3.6-4.3 0-1 .8-1.7 1.7-1.7.8 0 1.4.4 1.9 1 .5-.6 1.1-1 1.9-1 .9 0 1.7.7 1.7 1.7 0 1.3-1 2.6-3.6 4.3z" fill="#B3263A"/>',
      cheers: '<path d="M6 4h6l-1 7a2 2 0 0 1-4 0zM12 4h6l-1 7a2 2 0 0 1-4 0z" fill="' + f + '"/><path d="M9 13v6M15 13v6M7 20h4M13 20h4" stroke="#B8862F" stroke-width="1.6" stroke-linecap="round"/>',
      jackpot: '<rect x="3" y="5" width="18" height="14" rx="3" fill="#2B2730" stroke="' + f + '" stroke-width="1.6"/><text x="12" y="15.5" text-anchor="middle" font-family="Big Shoulders Display,Impact,sans-serif" font-weight="900" font-size="8" fill="#E8C46A">777</text>'
    }[w.ic];
    return '<svg class="winic" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true">' + g + art + "</svg>";
  }
  function winBadge(list, long) { var k = topWin(list); if (!k) return ""; return '<span class="cvb winb win-' + k + '" title="' + esc(WINS[k].long) + '">' + winIcon(k, long ? 20 : 16) + "<b>" + esc(WINS[k].short) + "</b></span>"; }

  function topItems(p) {
    var out = [], ok = p.bumpersOk || [];
    (p.bumpers || []).forEach(function (k) { if (window.SFBumpers && SFBumpers.by[k]) out.push({ t: "bump:" + k, kind: "bump", k: k, html: '<span class="bumpers solo">' + SFBumpers.html(k, { verified: ok.indexOf(k) > -1 }) + "</span>" }); });
    (p.cardStickers || []).forEach(function (k) { var h = stickerChip(k); if (h) out.push({ t: "stk:" + k, kind: "stk", k: k, html: h }); });
    (p.venueStickers || []).forEach(function (v) { out.push({ t: "venue:" + v.partner_id, kind: "venue", k: v.partner_id, html: venueSticker(v, 14) }); });
    var ord = p.cardTop || [];
    if (ord.length) out.sort(function (a, b) { var x = ord.indexOf(a.t), y = ord.indexOf(b.t); return (x < 0 ? 99 : x) - (y < 0 ? 99 : y); });
    return out;
  }
  function stickerChip(id) { var k = STICKERS.filter(function (x) { return x[0] === id; })[0]; return k ? '<span class="cvstk stk-' + k[2] + '" title="Sticker">' + k[1] + "</span>" : ""; }
  /* Card-back emblem: only a real Joker carries the Joker hat. Everyone else shows their own suit;
     house previews (no player) show all four suits. */
  function rosette() { var q = [["heart", 0, 0, "#C8102E"], ["spade", 50, 0, "#F2ECDD"], ["club", 0, 50, "#F2ECDD"], ["diamond", 50, 50, "#C8102E"]];
    return '<svg class="rosette" viewBox="0 0 100 100" aria-hidden="true">' + q.map(function (x) { return '<path fill="' + x[3] + '" transform="translate(' + (x[1] + 6) + ' ' + (x[2] + 6) + ') scale(.38)" d="' + BRAND.suit[x[0]] + '"/>'; }).join("") + "</svg>"; }
  function medalFor(p) {
    if (p && p.joker) return '<div class="cv-medal jk" title="Public Joker">' + (BRAND.hat || "") + "</div>";
    if (p && SUIT[p.suit]) return '<div class="cv-medal suit' + (SUIT[p.suit].red ? " red" : "") + '" title="' + SUIT[p.suit].name + '">' + pip(p.suit) + "</div>";
    return '<div class="cv-medal">' + rosette() + "</div>";
  }
  function coverHTML(p) {
    var felt = (TABLE[p.looking] || TABLE.longterm)[2] || "#1E6347", red = SUIT[p.suit] && SUIT[p.suit].red;
    var badges = [];
    if (p.wins && topWin(p.wins)) badges.push(winBadge(p.wins));
    if (p.founder && window.SFSlots) badges.push('<span class="cvb f1k" title="First 1,000 · Founding Player №' + String(p.founder).padStart(4, "0") + '">' + SFSlots.founder(p.founder, 34) + "</span>");
    if (asList(p.id_ && p.id_.style).indexOf("Swinger") > -1 && window.SFSlots) badges.push('<span class="cvb pine" title="Swinger-friendly">' + SFSlots.svg("pineapple", 18) + "</span>");
    if (p.hr) badges.push('<span class="cvb hrb">' + (isMasked(p) ? "🎭 " : "💎 ") + (p.hr === "verified" ? "Platinum ✓" : "Gold") + "</span>");
    if (!p.hr && (p.photoV || p.idV)) badges.push(verBadges(p));
    // Card clean-up: the top of a card shows at most three badges or stickers, in this order:
    // a win, verification or High Roller, First 1,000, pineapple, then bumper stickers. The rest live under "More".
    var extra = 0;
    if (badges.length > 3) { extra += badges.length - 3; badges = badges.slice(0, 3); }
    // The player's own stickers fill the remaining spots in the order they arranged them in Your Lobby.
    var room = Math.max(0, 3 - badges.length), items = topItems(p), stick = items.slice(0, room).map(function (x) { return x.html; }).join("");
    extra += Math.max(0, items.length - room);
    var comps = window.SFSlots && p.comps ? SFSlots.strip(p.comps, { max: 3, size: 14 }) : "";
    if (extra) stick += '<span class="cv-more" title="' + extra + ' more under More">+' + extra + "</span>";
    return '<div class="cover" style="--felt:' + felt + ";--rim:" + (red ? "#8E2230" : "#23202A") + '"><div class="cv-in' + (p.cardBack && CB[p.cardBack] ? " cb-" + p.cardBack : "") + '">' +
      medalFor(p) +
      (p.couple ? '<div class="cv-couple">🍍 Couple' + (p.couple.name ? " · with " + esc(p.couple.name) : "") + "</div>" : "") + (badges.length ? '<div class="cv-badges">' + badges.join("") + "</div>" : "") + (stick ? '<div class="cv-stick">' + stick + "</div>" : "") + (comps ? '<div class="cv-comps">' + comps + "</div>" : "") +
      '<div class="cv-tap">Tap to flip</div></div>' + (G.played.indexOf(p.id) > -1 ? '<span class="stamp">Played</span>' : "") + "</div>";
  }
  function cardHTML(p, pos) {
    var col = SUIT[p.suit].red ? "red" : "";
    var lookTxt = (TABLE[p.looking] || TABLE.longterm)[1];
    if (p.joker) col += " jokercard";
    if (p.hr && !p.joker) col += " hrcard" + (p.hr === "buyin" ? " hrgold" : "");
    var details = '<div class="details"><button type="button" class="linkish dclose" data-more>‹ Back to card</button><b style="font:800 1.05rem var(--display);text-transform:uppercase">' + esc(p.name) + ", " + p.age + "</b>" + (p.joker ? '<span class="jnote">Public Joker: ' + p.joker.count + " Jokers from confirmed dates in the last 180 days. Every Joker can be challenged for free.</span>" : "") + jmeter(p, true) + (p.couple ? '<span class="vline">🍍 Plays as a couple with ' + esc(p.couple.name || "their partner") + (p.couple.age ? ", " + p.couple.age : "") + "</span>" : "") + (p.cardStickers && p.cardStickers.length ? '<span class="vline cstkline"><b>Stickers:</b> ' + p.cardStickers.map(stickerChip).join("") + "</span>" : "") + (p.venueStickers && p.venueStickers.length ? '<span class="vline vstickline"><b>Date spots:</b> ' + p.venueStickers.map(function (v) { return venueSticker(v, 16); }).join("") + "</span>" : "") + (p.wins && topWin(p.wins) ? '<span class="vline winline">' + winIcon(topWin(p.wins), 20) + " " + esc(WINS[topWin(p.wins)].long) + ' · <a href="winners.html">Winners\' Row</a></span>' : "") + (p.founder ? '<span class="vline f1kback">' + (window.SFSlots ? SFSlots.founder(p.founder, 30) : "") + " First 1,000 · Founding Player №" + String(p.founder).padStart(4, "0") + "</span>" : "") + (window.SFSlots && p.comps ? SFSlots.strip(p.comps, { labels: true, size: 16 }) : "") + (p.hr ? '<span class="vline">💎 High Roller · ' + (p.hr === "verified" ? "Platinum: verified $1,000,000" : "Gold: High Roller Buy-In") + "</span>" : "") + verBadges(p, true) + (window.SFBumpers ? SFBumpers.strip(p.bumpers, p.bumpersOk) : "") + "<span>" + esc(p.bio) + "</span>" + factsLine(p) + "<span><b>Loves:</b> " + esc(p.interests.join(", ")) + "</span><span><b>Looking for:</b> " + lookTxt + '</span><div class="why">' + esc(why(p, pos)) + '</div><span class="prov">' + (liveOn() ? "" : "Fictional sample profile · ") + '<button type="button" class="linkish" data-report>Report</button> · <button type="button" class="linkish" data-block>Block</button></span></div>';
    var face = p.joker ? '<div class="face"><span class="idx">J<b class="jk">★</b></span><div class="center"><span class="jhat">' + BRAND.hat + '</span><div class="title">Public Joker</div><div class="dist">' + esc(p.name.split(" ")[0]) + ", " + p.age + " · about " + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">Until ' + p.joker.until + "</div></div>" + details + '<span class="idx br">J<b class="jk">★</b></span></div>' :
      '<div class="face"><span class="idx">' + p.rank + pip(p.suit) + "</span>" +
      '<div class="center">' + avatar(p) + '<div class="title">' + esc(p.name.split(" ")[0]) + ", " + p.age + '</div><div class="dist">about ' + Math.max(1, Math.round(p.dist)) + ' mi</div><div class="style">' + SUIT[p.suit].sym + " " + SUIT[p.suit].name + "</div>" + jmeter(p) +
      '<div class="fbtns"><button type="button" class="fb" data-more>ⓘ More</button><button type="button" class="fb gold" data-read>✨ Read us</button></div></div>' +
      '<span class="idx br">' + p.rank + pip(p.suit) + "</span>" + details + "</div>";
    return '<div class="slot" data-id="' + p.id + '"><div class="pcard ' + col + '" tabindex="0" role="button" aria-label="Face-down card. Press to flip it over."><div class="flip">' + coverHTML(p) + face +
      '</div></div><div class="card-actions"><button class="btn ghost" type="button" data-burn>Burn</button><button class="btn red" type="button" data-playcard>Play</button></div></div>';
  }
  function renderTable(redeal) {
    if (deckDirty || !DECK.length) buildDeck();
    var hand = G.dealt.map(function (id) { return BY[id]; }).filter(Boolean).sort(handOrder);
    $("#dealt").innerHTML = hand.length ? hand.map(cardHTML).join("") :
      liveOn() && LIVE_ERR ? '<p class="lede deckmsg" style="align-self:center">' + esc(LIVE_ERR) + (/Friendship/i.test(LIVE_ERR) ? ' <a href="my-table.html#face">Change your Table in My Face</a>.' : "") + "</p>" :
      '<p class="lede" style="align-self:center">' + (DECK.length ? "Your deck is shuffled and waiting. Deal your Hand." : liveOn() ? "No real members fit your gates yet. SuiteFace is brand new in many areas: widen your distance or age range, invite friends, and remember your 12-Card Deck Guarantee." : "No one in the sample deck passes your gates. Widen your age range or distance in My Face.") + "</p>";
    if (!hand.length && liveOn() && !DECK.length && (LIVE_ROWS || /Friendship/i.test(LIVE_ERR || ""))) emptyHand();
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
    if (liveOn() && LIVE_ROWS) { toast("Fresh Shuffle: re-dealing your hand…"); G.dealt = []; liveDeck(true).then(function () { setTimeout(deal, 150); }); return; }
    G = { dealt: [], burned: [], played: [], pairs: G.pairs, hands: G.hands || {}, jokered: G.jokered || [], clock: G.clock || 0 }; buildDeck(); saveG(); renderTable(false);
    toast("Fresh Shuffle. Burned and played cards are back in your deck."); setTimeout(deal, 150);
  });
  $("#dealt").addEventListener("click", function (e) {
    var slot = e.target.closest(".slot"); if (!slot) return; var id = slot.getAttribute("data-id"), p = BY[id]; if (!p) return;
    if (liveOn() && LIVE_ROWS && p) {
      var nm0 = p.name.split(" ")[0];
      if (e.target.closest("[data-report]")) { e.stopPropagation(); if (!confirm("Report and block " + nm0 + "? Our safety team reviews every report.")) return; lrpc("block_member", { target: id, is_report: true }).then(function () { remove(id, "burned", slot); toast("Reported and blocked. Thank you for telling us."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-block]")) { e.stopPropagation(); lrpc("block_member", { target: id, is_report: false }).then(function () { remove(id, "burned", slot); toast(nm0 + " is blocked and won't be dealt again."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-burn]")) { lrpc("burn_card", { target: id }).then(function () { remove(id, "burned", slot); toast("Burned. " + nm0 + " won't be dealt to you again."); }, function (x) { toast(x.message); }); return; }
      if (e.target.closest("[data-playcard]")) {
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
    if (e.target.closest("[data-playcard]")) { playCard(p, slot); return; }
    // Quiet signals that teach the dealer (live only): flipping a card, opening More, asking for a Read us.
    var sig = function (k) { if (liveOn() && LIVE_ROWS && /^[0-9a-f-]{36}$/.test(id)) lrpc("card_signal", { target: id, kind: k }).catch(function () { }); };
    if (e.target.closest("[data-more]")) { e.stopPropagation(); slot.querySelector(".pcard").classList.toggle("more"); sig("more"); return; }
    if (e.target.closest("[data-read]")) { e.stopPropagation(); readUs(p); sig("read"); return; }
    var c = e.target.closest(".pcard"); if (c && !c.classList.contains("more")) { c.classList.toggle("flipped"); if (c.classList.contains("flipped")) sig("flipped"); c.setAttribute("aria-label", c.classList.contains("flipped") ? p.name + ", " + p.age + ", " + p.rank + " of " + SUIT[p.suit].name + ". Press to turn face down." : "Face-down card. Press to flip it over."); if (c.classList.contains("flipped")) jackpot(600); }
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
    modal('<h3 style="font-size:2rem">Your Hand</h3><p class="lede" style="margin:6px 0 14px">Rows follow your trump order. Columns run Ace to 2. Gold outline: in your Hand. Red: played. Grey: burned.</p><div class="scrollx"><div class="deckgrid"><div></div>' +
      RANKS.map(function (r) { return '<div class="h">' + r + "</div>"; }).join("") + rows + "</div></div>" +
      (DECK.length < 52 ? '<p class="hint" style="margin-top:12px">Only ' + DECK.length + " cards pass your gates in the sample deck. Widen your age range or distance to fill your deck.</p>" : ""));
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


  /* ---------- Launch offer (Oct 17 to Dec 31, 2026): Buy-In waived, or choose First 1,000 ---------- */
  var LAUNCH = { open: false, ends: "2027-01-01T06:00:00Z", left: 1000 }, PLAN = "launch", BILL = "month";
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
    var pr = $("#priceBuy"); if (pr) pr.innerHTML = launch ? '<span class="big"><s>$21.00</s> $0</span><span class="hint">Buy-In waived during the launch offer</span>' : '<span class="big">$21.00</span><span class="hint">one-time Buy-In, today' + (LAUNCH.open ? " · First 1,000 badge" : "") + "</span>";
    var pm = $("#priceMonth"); if (pm) pm.innerHTML = BILL === "year" ? (launch ? '<span class="big">$21</span><span class="hint">today, then every year</span>' : '<span class="big">$21</span><span class="hint">a year, starting 30 days after you join</span>') : launch ? '<span class="big">$2.10</span><span class="hint">today, then every month</span>' : '<span class="big">$2.10</span><span class="hint">a month, starting 30 days after you join</span>';
    $("#payBtn").textContent = BILL === "year" ? (launch ? "Join for $21 a year with Stripe" : (LAUNCH.open ? "Pay $21.00 · First 1,000 · yearly" : "Pay $21.00 with Stripe · yearly")) : launch ? "Join for $2.10 with Stripe" : (LAUNCH.open ? "Pay $21.00 · First 1,000" : "Pay $21.00 with Stripe");
    $$(".billpick [data-bill]").forEach(function (x) { x.setAttribute("aria-checked", String(x.getAttribute("data-bill") === BILL)); });
    var ag = $("#agree").parentElement.querySelector("span");
    var yr = BILL === "year";
    ag.innerHTML = yr ? (launch ? 'I understand that under the launch offer the $21.00 Buy-In is waived, and I choose the <b>prepaid year</b>: SuiteFace charges <b>$21.00 USD today</b>, then <b>$21.00 USD every year</b> until I cancel. Unused months aren\'t refunded. I agree to the <a href="terms.html">Terms of Service</a>.'
        : 'I understand that SuiteFace charges <b>$21.00 USD today</b> for the Buy-In' + (LAUNCH.open ? ' (non-refundable First 1,000 seat)' : '') + ', then <b>$21.00 USD every year</b> starting in 30 days, until I cancel. Unused months of a prepaid year aren\'t refunded. I agree to the <a href="terms.html">Terms of Service</a>.')
      : launch ? 'I understand that under the launch offer the $21.00 Buy-In is waived, and SuiteFace charges <b>$2.10 USD today</b>, then <b>$2.10 USD every month</b> until I cancel, and that a pause longer than 21 days ends my membership (rejoining then requires the Buy-In). I agree to the <a href="terms.html">Terms of Service</a>.'
      : LAUNCH.open ? 'I choose the <b>First 1,000</b> Buy-In instead of the free launch seat. SuiteFace charges <b>$21.00 USD today, non-refundable</b> (the 12-Card Deck Guarantee doesn\'t apply to it), then <b>$2.10 USD every month</b> starting in 30 days until I cancel. I agree to the <a href="terms.html">Terms of Service</a>.'
      : 'I understand that SuiteFace charges <b>$21.00 USD today</b>, then <b>$2.10 USD every month</b> until I cancel, and that a pause longer than 21 days ends my membership. I agree to the <a href="terms.html">Terms of Service</a>.';

  }
  document.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest(".billpick [data-bill]"); if (!b) return; BILL = b.getAttribute("data-bill"); $("#agree").checked = false; launchUI(); });
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
    if (q) setTimeout(function () { toast("Payment received. Welcome to the table! Your seat opens in a moment."); jackpot(4000); if (window.SF_AUTH) window.SF_AUTH.refresh(); seatThenDeal(0); }, 1200);
    /* Straight from checkout to the deck: wait for the payment to seat the player, then deal their first hand on My table. */
    function seatThenDeal(n) {
      if (document.body.getAttribute("data-page") !== "club" || !window.SF_AUTH) return;
      if (window.SF_LIVE && window.SF_LIVE.seated && liveOn()) {
        try { history.replaceState(null, "", location.pathname + "#table"); } catch (e) { }
        liveDeck(true).then(function () { var t = $("#table"); if (t) t.scrollIntoView({ behavior: "smooth" }); setTimeout(function () { try { deal(); } catch (e) { } }, 400); }, function () { });
        return;
      }
      if (n > 24) { toast("Your payment is still processing. Your seat opens as soon as it clears, so refresh in a minute."); return; }
      setTimeout(function () { window.SF_AUTH.refresh().then(function () { seatThenDeal(n + 1); }, function () { seatThenDeal(n + 1); }); }, 2500);
    }
  })();
  /* ---------- membership (Stripe) ---------- */
  function needAgree() { if ($("#agree").checked) { $("#agreeErr").textContent = ""; return true; } $("#agreeErr").textContent = (BILL === "year" ? "Please tick the box to confirm the yearly charge." : LAUNCH.open && PLAN === "launch" ? "Please tick the box to confirm the $2.10 monthly charge." : "Please tick the box to confirm the $21.00 Buy-In and $2.10 monthly charge."); $("#agree").focus(); return false; }
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
      [["💎", "High Roller Sponsor", "Reach members of the High Roller Room only, with exclusive offers. $2,100 a year + $210 a week + $21 each time a High Roller accepts your offer. <a href=\"#\" data-hr-sponsor>Become a High Roller Sponsor ›</a>"], ["🌟", "ZIP Sponsor", "Your own Vegas-style sign in up to 7 ZIP codes, with a pop-up that sends interested people to you. $210 every 30 days. <a href=\"#\" data-sponsor-signup>Sponsor ZIP codes ›</a>"], ["🎟️", "Date Deals", "Offer a deal to SuiteFace Pairs near you. Both people agree on your deal in the app, get one shared code, and you confirm it at suiteface.com/redeem.html. You pay $2.10 only when a code is redeemed."], ["✋", "Featured in the Raise", "When it fits the pair, the Dealer can suggest your venue, always labeled Sponsored."], ["🎉", "Party Table nights", "Host double dates and group meetups for local members."], ["🎁", "Giveaways & card backs", "Sponsor merch drops, sticker packs or a branded card back."]]
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

  /* ---------- The Deal learns: show members what the dealer has picked up ---------- */
  function renderLearn() {
    var el = $("#learnNote"); if (!el || !liveOn()) return;
    lrpc("my_deal_learning").then(function (d) {
      if (!d || !(d.played + d.burned + d.looked)) { el.hidden = false; el.innerHTML = "🎰 <b>The dealer learns as you play.</b> Flip, Play and Burn cards and each new deal fits you better."; return; }
      var top = Object.keys(d.suits || {}).filter(function (k) { return d.suits[k] > 0 && SUIT[k]; }).sort(function (a, b) { return d.suits[b] - d.suits[a]; }).slice(0, 2).map(function (k) { return SUIT[k].sym + " " + SUIT[k].name + "s"; });
      el.hidden = false;
      el.innerHTML = "🎰 <b>The dealer is learning.</b> " + d.played + " played · " + d.burned + " burned · " + d.looked + " looked" + (top.length ? ". Leaning " + esc(top.join(" and ")) + "." : ".") + " New members in their first week get a fair first deal too.";
    }).catch(function () { });
  }
  document.addEventListener("sf:live", function () { if ((document.body.getAttribute("data-page") || "") === "club") setTimeout(renderLearn, 600); });

  /* =====================================================================
     SHARE YOUR CARD: a tasteful image for Instagram, TikTok, Facebook, Snapchat or LinkedIn.
     First name and suit only. No age, no last name, no town. Your photo only if you switch it on.
     ===================================================================== */
  var SHARE = { fmt: "story", photo: false, win: true };
  function myRef() { var h = (P.handle || "").trim().replace(/^@/, ""); return CFG.siteUrl + (h ? "?ref=" + encodeURIComponent(h) : ""); }
  function loadImg(src) { return new Promise(function (ok) { if (!src) return ok(null); var im = new Image(); im.crossOrigin = "anonymous"; im.onload = function () { ok(im); }; im.onerror = function () { ok(null); }; im.src = src; }); }
  function rr(x, c, X, Y, W, H, R) { x.beginPath(); x.moveTo(X + R, Y); x.arcTo(X + W, Y, X + W, Y + H, R); x.arcTo(X + W, Y + H, X, Y + H, R); x.arcTo(X, Y + H, X, Y, R); x.arcTo(X, Y, X + W, Y, R); x.closePath(); }
  function wrapText(x, t, cx, y, maxW, lh) { var words = String(t).split(" "), line = "", lines = []; words.forEach(function (w) { var test = line ? line + " " + w : w; if (x.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test; }); if (line) lines.push(line); lines.forEach(function (l, i) { x.fillText(l, cx, y + i * lh); }); return lines.length; }
  function drawShareCard(o) {
    var W = 1080, H = o.fmt === "post" ? 1080 : 1920, cv = document.createElement("canvas"); cv.width = W; cv.height = H; var x = cv.getContext("2d");
    var D = '"Big Shoulders Display", Impact, "Arial Narrow", sans-serif', B = 'Figtree, "Segoe UI", system-ui, sans-serif';
    var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#3A2F3E"); g.addColorStop(.55, "#231E29"); g.addColorStop(1, "#17151B"); x.fillStyle = g; x.fillRect(0, 0, W, H);
    var glow = x.createRadialGradient(W / 2, H * .42, 40, W / 2, H * .42, W * .8); glow.addColorStop(0, "rgba(232,196,106,.22)"); glow.addColorStop(1, "rgba(232,196,106,0)"); x.fillStyle = glow; x.fillRect(0, 0, W, H);
    // marquee frame with bulbs
    x.strokeStyle = "#B8862F"; x.lineWidth = 6; rr(x, 0, 44, 44, W - 88, H - 88, 46); x.stroke();
    var per = 2 * (W - 88) + 2 * (H - 88), n = Math.round(per / 54);
    for (var i = 0; i < n; i++) { var d = i / n * per, px, py; if (d < W - 88) { px = 44 + d; py = 44; } else if (d < W - 88 + H - 88) { px = W - 44; py = 44 + d - (W - 88); } else if (d < 2 * (W - 88) + H - 88) { px = W - 44 - (d - (W - 88) - (H - 88)); py = H - 44; } else { px = 44; py = H - 44 - (d - 2 * (W - 88) - (H - 88)); }
      if ((px < 90 || px > W - 90) && (py < 90 || py > H - 90)) continue; x.fillStyle = i % 2 ? "#FFE7A3" : "#E8C46A"; x.beginPath(); x.arc(px, py, 7, 0, 7); x.fill(); }
    var post = o.fmt === "post", top = post ? 120 : 190;
    x.textAlign = "center"; x.fillStyle = "#E8C46A"; x.font = "900 " + (post ? 62 : 84) + "px " + D; x.fillText("SUITEFACE", W / 2, top);
    x.fillStyle = "#CFC6B6"; x.font = "600 " + (post ? 26 : 34) + "px " + B; x.fillText("No Jokers Needed.", W / 2, top + (post ? 40 : 56));
    // the card
    var cw = post ? 420 : 600, ch = cw * 1.4, cx0 = (W - cw) / 2, cy0 = post ? 220 : 340, red = !o.wild && SUIT[o.suit] && SUIT[o.suit].red, ink = red ? "#B3263A" : "#23202A";
    x.save(); x.shadowColor = "rgba(0,0,0,.45)"; x.shadowBlur = 50; x.shadowOffsetY = 20; x.fillStyle = "#FAF7F0"; rr(x, 0, cx0, cy0, cw, ch, 36); x.fill(); x.restore();
    x.strokeStyle = "#E8C46A"; x.lineWidth = 4; rr(x, 0, cx0 + 14, cy0 + 14, cw - 28, ch - 28, 26); x.stroke();
    var sym = o.wild ? "★" : SUIT[o.suit].sym, rank = o.wild ? "W" : "A";
    x.fillStyle = ink; x.textAlign = "left"; x.font = "900 " + cw * .13 + "px " + D; x.fillText(rank, cx0 + 34, cy0 + cw * .16); x.font = "700 " + cw * .1 + "px " + B; x.fillText(sym, cx0 + 36, cy0 + cw * .27);
    x.save(); x.translate(cx0 + cw - 34, cy0 + ch - cw * .16); x.rotate(Math.PI); x.font = "900 " + cw * .13 + "px " + D; x.fillText(rank, 0, 0); x.font = "700 " + cw * .1 + "px " + B; x.fillText(sym, 2, cw * .11); x.restore();
    x.textAlign = "center";
    if (o.img) { var r = cw * .27, pcx = W / 2, pcy = cy0 + ch * .38; x.save(); x.beginPath(); x.arc(pcx, pcy, r, 0, 7); x.clip(); var s = Math.max(2 * r / o.img.width, 2 * r / o.img.height); x.drawImage(o.img, pcx - o.img.width * s / 2, pcy - o.img.height * s / 2 * .9, o.img.width * s, o.img.height * s); x.restore(); x.strokeStyle = "#E8C46A"; x.lineWidth = 6; x.beginPath(); x.arc(pcx, pcy, r, 0, 7); x.stroke();
      x.fillStyle = ink; x.font = "700 " + cw * .2 + "px " + B; x.fillText(sym, W / 2, cy0 + ch * .76); }
    else { x.fillStyle = ink; x.font = "700 " + cw * .5 + "px " + B; x.fillText(sym, W / 2, cy0 + ch * .62); }
    // line under the card
    var y = cy0 + ch + (post ? 70 : 110), nm = (o.name || "").split(" ")[0];
    x.fillStyle = "#FAF7F0"; x.font = "900 " + (post ? 56 : 80) + "px " + D;
    x.fillText(((nm ? nm + " is " : "I'm ") + (o.wild ? "a Wild Card" : (/^[AEIOU]/.test(SUIT[o.suit].name) ? "an " : "a ") + SUIT[o.suit].name)).toUpperCase(), W / 2, y);
    if (!post) { x.fillStyle = "#CFC6B6"; x.font = "500 38px " + B; y += 30 + 26 * wrapText(x, o.wild ? "Plays well in any suit. Steady, playful, direct and thoughtful, depending on the table." : SUIT[o.suit].line + " " + SUIT[o.suit].love, W / 2, y + 66, 820, 52); y += 40; }
    if (o.winKind) { var wl = WINS[o.winKind].long; x.font = "700 " + (post ? 28 : 36) + "px " + B; var tw = x.measureText(wl).width + 90, bh = post ? 56 : 70, by = y + (post ? 22 : 30); x.fillStyle = "rgba(232,196,106,.14)"; rr(x, 0, (W - tw) / 2, by, tw, bh, bh / 2); x.fill(); x.strokeStyle = "#E8C46A"; x.lineWidth = 3; x.stroke(); x.fillStyle = "#FFE7A3"; x.fillText((o.winKind === "married" || o.winKind === "engaged" ? "💍 " : "🏆 ") + wl, W / 2, by + bh * .66); y = by + bh; }
    // call to action
    var fy = H - (post ? 110 : 190);
    x.fillStyle = "#E8C46A"; x.font = "900 " + (post ? 44 : 60) + "px " + D; x.fillText("WHAT SUIT ARE YOU?", W / 2, fy);
    x.fillStyle = "#FAF7F0"; x.font = "700 " + (post ? 30 : 40) + "px " + B; x.fillText("suiteface.com", W / 2, fy + (post ? 46 : 64));
    return cv;
  }
  function openShare(o) {
    o = o || {}; var suit = o.suit || P.mySuit || "heart", wild = o.wild != null ? o.wild : !!P.wild;
    var myWin = topWin(P.wins), name = o.name != null ? o.name : (P.name || "");
    var m = modal('<div class="sharebox"><p class="eyebrow">Share your card</p><h3>Put your suit on your socials</h3>' +
      '<p class="lede">First name and suit only. No age, last name or town. Your photo stays off unless you turn it on.</p>' +
      '<div class="sharegrid"><div class="shareprev"><img id="shImg" alt="Preview of your share card"></div><div class="form-grid">' +
      '<div class="seg" role="group" aria-label="Size"><button type="button" class="chip" data-fmt="story" aria-pressed="true">Story (9:16)</button><button type="button" class="chip" data-fmt="post" aria-pressed="false">Post (square)</button></div>' +
      (P.photo && /^https?:|^data:/.test(P.photo) && o.member !== false ? '<label class="chk"><input type="checkbox" id="shPhoto"> Include my photo</label>' : "") +
      (myWin ? '<label class="chk"><input type="checkbox" id="shWin" checked> Show my Winners\' Row badge</label>' : "") +
      '<div class="row"><button class="btn gold" type="button" id="shGo">Share…</button><a class="btn ghost" id="shDl" download="suiteface-card.png" href="#">Download</a><button class="btn ghost" type="button" id="shLink">Copy my link</button></div>' +
      '<ul class="sharetips"><li><b>Instagram or TikTok:</b> post the Story size and add a link sticker with your link.</li><li><b>Facebook or LinkedIn:</b> post the square and paste your link in the text.</li><li><b>Snapchat:</b> send the Story size to My Story.</li><li><b>Your bio:</b> copy your link and add it to your profile.</li></ul>' +
      '<p class="hint">Your link takes friends to the suit quiz' + ((P.handle || "").trim() ? " and credits you for the invite" : "") + '.</p></div></div></div>');
    var url = "";
    function paint() {
      var useImg = SHARE.photo && $("#shPhoto", m) && $("#shPhoto", m).checked;
      return (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { return loadImg(useImg ? P.photo : null); }).then(function (img) {
        var cv = drawShareCard({ fmt: SHARE.fmt, suit: suit, wild: wild, name: name, img: img, winKind: myWin && (!$("#shWin", m) || $("#shWin", m).checked) ? myWin : null });
        try { url = cv.toDataURL("image/png"); } catch (e) { url = drawShareCard({ fmt: SHARE.fmt, suit: suit, wild: wild, name: name }).toDataURL("image/png"); toast("Your photo couldn't be added here, so the card shows your suit."); }
        $("#shImg", m).src = url; $("#shDl", m).href = url;
      });
    }
    $$("[data-fmt]", m).forEach(function (b) { b.addEventListener("click", function () { SHARE.fmt = b.getAttribute("data-fmt"); $$("[data-fmt]", m).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); paint(); }); });
    if ($("#shPhoto", m)) $("#shPhoto", m).addEventListener("change", function () { SHARE.photo = this.checked; paint(); });
    if ($("#shWin", m)) $("#shWin", m).addEventListener("change", paint);
    $("#shLink", m).addEventListener("click", function () { copy(myRef(), $("#shLink", m)); });
    $("#shGo", m).addEventListener("click", function () {
      fetch(url).then(function (r) { return r.blob(); }).then(function (b) {
        var f = new File([b], "suiteface-card.png", { type: "image/png" }), data = { files: [f], title: "My SuiteFace card", text: "What suit are you? " + myRef() };
        if (navigator.canShare && navigator.canShare({ files: [f] })) return navigator.share(data).catch(function () { });
        $("#shDl", m).click(); toast("Saved. Post it from your photos and paste your link.");
      });
    });
    paint();
  }
  window.SF_share = openShare;
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-sharecard]"); if (!b) return; e.preventDefault();
    var v = b.getAttribute("data-sharecard"); var lead = S.get("suitLead", null);
    if (v && v !== "me") openShare({ suit: v === "wild" ? (P.mySuit || "heart") : v, wild: v === "wild", name: (lead && lead.name) || P.name || "", member: !!(window.SF_LIVE && window.SF_LIVE.seated) });
    else openShare();
  });

  /* =====================================================================
     WINNERS' ROW: real winning hands, shown only when both people say yes and staff approve.
     The Chapel of Aces (married and engaged), the Royal Flush Room (together), the Friendship
     Lounge (friends made) and the Jackpot Wall (great dates).
     ===================================================================== */
  var VENUES = {
    chapel: { name: "The Chapel of Aces", eyebrow: "Married or engaged", line: "They met at a SuiteFace table and said I do. Every couple here gets a ring on the top of their cards.", empty: "The first couple to marry after meeting on SuiteFace gets the first pew in the Chapel. Save it a seat." },
    "royal-flush": { name: "The Royal Flush Room", eyebrow: "Found their person", line: "Long-term players who made their pair and kept it. Their cards wear the Royal Flush.", empty: "The Royal Flush Room is waiting for its first pair. Will it be yours?" },
    lounge: { name: "The Friendship Lounge", eyebrow: "Friends made", line: "Not every winning hand is a romance. These players found a real friend at the table.", empty: "The Lounge's first round is on the house. Made a friend here? Share it." },
    jackpot: { name: "The Jackpot Wall", eyebrow: "Great dates", line: "One great night, honestly told. First names or initials only.", empty: "No jackpots on the wall yet. The first great date goes up top." }
  };
  var winVenue = "chapel";
  function photoUrl(p) { return p && CFG.supabaseUrl ? CFG.supabaseUrl + "/storage/v1/object/public/win-photos/" + p.split("/").map(encodeURIComponent).join("/") : ""; }
  /* Rendered room art: add a room here when its banner arrives (files in src/art as <name>_1536 and _900, .webp and .jpg). */
  var VENUE_ART = { chapel: "/assets/art/chapel_of_aces" };
  function renderWinners() {
    var root = $("#winRow"); if (!root) return;
    var tabs = $("#winTabs");
    tabs.innerHTML = Object.keys(VENUES).map(function (k) { return '<button type="button" class="chip venuechip v-' + k + '" data-venue="' + k + '" aria-pressed="' + (k === winVenue) + '">' + esc(VENUES[k].name) + ' <span class="count" data-vc="' + k + '"></span></button>'; }).join("");
    var v = VENUES[winVenue];
    var art = VENUE_ART[winVenue];
    $("#winHead").innerHTML = art ? '<div class="venue venue-photo v-' + winVenue + '" style="--art:image-set(url(' + art + '_1536.webp) type(\'image/webp\'), url(' + art + '_1536.jpg) type(\'image/jpeg\'));--art-s:image-set(url(' + art + '_900.webp) type(\'image/webp\'), url(' + art + '_900.jpg) type(\'image/jpeg\'))" role="img" aria-label="' + esc(v.name) + '"><div class="vtext"><p class="eyebrow">' + esc(v.eyebrow) + '</p><h3>' + esc(v.name) + '</h3><p class="lede">' + esc(v.line) + "</p></div></div>"
      : '<div class="venue v-' + winVenue + '">' + venueArt(winVenue) + '<div><p class="eyebrow">' + esc(v.eyebrow) + '</p><h3>' + esc(v.name) + '</h3><p class="lede">' + esc(v.line) + "</p></div></div>";
    root.innerHTML = '<p class="hint">Loading…</p>';
    rpc("winners_counts", {}).then(function (c) { Object.keys(VENUES).forEach(function (k) { var el = tabs.querySelector('[data-vc="' + k + '"]'); if (el) el.textContent = c && c[k] ? c[k] : ""; }); }, function () { });
    rpc("winners_row", { p_venue: winVenue }).then(function (rows) {
      rows = rows || [];
      root.innerHTML = rows.length ? rows.map(function (w) {
        return '<article class="wincard v-' + winVenue + '">' + (w.photo_path ? '<img src="' + esc(photoUrl(w.photo_path)) + '" alt="' + esc(w.names) + '" loading="lazy">' : '<div class="wsuits">' + (w.suits || []).map(function (s) { return SUIT[s] ? '<span class="' + (SUIT[s].red ? "r" : "") + '">' + SUIT[s].sym + "</span>" : ""; }).join("") + "</div>") +
          '<div class="wbody"><span class="wbadge">' + winIcon(w.kind, 18) + " " + esc(WINS[w.kind] ? WINS[w.kind].short : "") + '</span><h4>' + esc(w.names) + '</h4><p>“' + esc(w.story) + '”</p><small>' + esc([w.city, w.event_date ? new Date(w.event_date + "T12:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" }) : ""].filter(Boolean).join(" · ")) + "</small></div></article>";
      }).join("") : '<div class="winempty">' + venueArt(winVenue) + '<p class="lede">' + esc(v.empty) + '</p><p class="hint">Every story here is real, shared by both people and checked by our team. We never write them for anyone.</p></div>';
    }, function () { root.innerHTML = '<div class="winempty"><p class="lede">' + esc(v.empty) + '</p><p class="hint">Every story here is real, shared by both people and checked by our team.</p></div>'; });
  }
  function venueArt(k) {
    if (k === "chapel") return '<svg class="vart" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 8 98 40v70H22V40z" fill="#FAF7F0" stroke="#B8862F" stroke-width="3"/><path d="M60 18c-6-4-9-7-9-10.5 0-2.4 1.9-4.2 4.2-4.2 2 0 3.6 1.1 4.8 2.6 1.2-1.5 2.8-2.6 4.8-2.6 2.3 0 4.2 1.8 4.2 4.2 0 3.5-3 6.5-9 10.5z" fill="#B3263A"/><path d="M46 110V78a14 14 0 0 1 28 0v32z" fill="#3A2F3E"/><circle cx="60" cy="52" r="10" fill="none" stroke="#E8C46A" stroke-width="3"/><path d="M56 41 58 37h4l2 4-4 4z" fill="#F4F1FA" stroke="#B8862F"/>' + [0, 1, 2, 3, 4, 5, 6].map(function (i) { return '<circle cx="' + (26 + i * 11.3) + '" cy="40" r="2.6" fill="#FFE7A3"/>'; }).join("") + "</svg>";
    if (k === "royal-flush") return '<svg class="vart" viewBox="0 0 120 120" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function (i) { return '<g transform="rotate(' + (i * 12 - 24) + ' 60 104)"><rect x="44" y="22" width="32" height="46" rx="4" fill="#FAF7F0" stroke="#B8862F" stroke-width="2"/><text x="49" y="36" font-size="11" font-weight="900" fill="#B3263A" font-family="Impact,sans-serif">' + ["10", "J", "Q", "K", "A"][i] + '</text></g>'; }).join("") + '<text x="60" y="112" text-anchor="middle" font-size="18" fill="#B3263A">♥</text></svg>';
    if (k === "lounge") return '<svg class="vart" viewBox="0 0 120 120" aria-hidden="true"><path d="M30 30h26l-4 30a9 9 0 0 1-18 0zM64 30h26l-4 30a9 9 0 0 1-18 0z" fill="#E8C46A" stroke="#B8862F" stroke-width="2"/><path d="M43 70v26M77 70v26M33 98h20M67 98h20" stroke="#B8862F" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="22" r="3" fill="#FFE7A3"/><circle cx="52" cy="14" r="2" fill="#FFE7A3"/><circle cx="68" cy="14" r="2" fill="#FFE7A3"/></svg>';
    return '<svg class="vart" viewBox="0 0 120 120" aria-hidden="true"><rect x="14" y="22" width="92" height="76" rx="12" fill="#2B2730" stroke="#E8C46A" stroke-width="4"/>' + [0, 1, 2].map(function (i) { return '<rect x="' + (24 + i * 25) + '" y="40" width="22" height="34" rx="4" fill="#FAF7F0"/><text x="' + (35 + i * 25) + '" y="65" text-anchor="middle" font-size="20" font-weight="900" fill="#B3263A" font-family="Impact,sans-serif">7</text>'; }).join("") + [0, 1, 2, 3, 4, 5].map(function (i) { return '<circle cx="' + (24 + i * 14.4) + '" cy="30" r="2.6" fill="#FFE7A3"/>'; }).join("") + "</svg>";
  }
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-venue]"); if (!b) return; winVenue = b.getAttribute("data-venue"); try { history.replaceState(null, "", "#" + winVenue); } catch (er) { } renderWinners(); });

  /* ---------- My table: winning hands, approvals and date check-ins ---------- */
  var KIND_OPTS = [["married", "💍 We got married"], ["engaged", "💍 We got engaged"], ["together", "♥ We're together (Royal Flush)"], ["friends", "🥂 We became friends"], ["great_date", "🎰 We had a great date"]];
  function renderWins() {
    var el = $("#winsPanel"); if (!el) return;
    if (!liveOn()) { el.innerHTML = '<h3 style="font-size:1.2rem">Winning hands</h3><p class="hint">When a Pair turns into something real, share it together on <a href="winners.html">Winners\' Row</a>: the Chapel of Aces for weddings, the Royal Flush Room for couples, the Friendship Lounge and the Jackpot Wall. Both of you approve before anyone sees it.</p>'; return; }
    Promise.all([lrpc("my_hands").catch(function () { return []; }), lrpc("my_wins").catch(function () { return []; }), lrpc("my_checkins").catch(function () { return []; })]).then(function (r) {
      var hands = (r[0] || []).filter(function (h) { return h.status === "paired" || h.status === "won"; }), wins = r[1] || [], done = (r[2] || []).map(function (x) { return x.hand_id; });
      var check = hands.filter(function (h) { return h.play_at && new Date(h.play_at).getTime() < Date.now() && Date.now() - new Date(h.play_at).getTime() < 14 * 864e5 && done.indexOf(h.hand_id) < 0; });
      var asks = wins.filter(function (w) { return w.status === "pending_partner" && !w.mine_ok; });
      var h = '<h3 style="font-size:1.2rem">Winning hands</h3>';
      if (check.length) h += '<div class="checkins">' + check.map(function (x) { return '<div class="cmrow ckrow"><span><b>How did it go with ' + esc(x.other_name) + '?</b><br><small>Two taps. Only our safety team sees this.</small></span><span class="row"><button class="btn gold sm" data-ck="' + x.hand_id + '" data-met="1" data-safe="1">We met · all good</button><button class="btn ghost sm" data-ck="' + x.hand_id + '" data-met="1" data-safe="0">I didn\'t feel safe</button><button class="btn ghost sm" data-ck="' + x.hand_id + '" data-met="0">We didn\'t meet</button></span></div>'; }).join("") + "</div>";
      if (asks.length) h += asks.map(function (w) { return '<div class="cmrow winask"><span>' + winIcon(w.kind, 18) + " <b>" + esc(w.other_name) + " wants to share your win</b> (" + esc(WINS[w.kind].short) + ')<br><small>“' + esc(w.story) + '”</small></span><span class="row"><button class="btn gold sm" data-winok="' + w.id + '">Approve</button><button class="btn ghost sm" data-winno="' + w.id + '">Not now</button></span></div>'; }).join("");
      if (wins.length) h += wins.filter(function (w) { return asks.indexOf(w) < 0; }).map(function (w) { var st = { pending_partner: "Waiting for " + w.other_name + " to approve", pending_review: "With our team for a quick check", approved: "On Winners' Row", declined: "Not approved" }[w.status] || w.status; return '<div class="cmrow"><span>' + winIcon(w.kind, 18) + " <b>" + esc(WINS[w.kind].short) + "</b> with " + esc(w.other_name) + "<br><small>" + esc(st) + '</small></span><span class="row">' + (w.status === "approved" ? '<a class="btn ghost sm" href="winners.html#' + WINS[w.kind].venue + '">See it</a>' : "") + '<button class="btn ghost sm" data-winwd="' + w.id + '">Take it down</button></span></div>'; }).join("");
      h += hands.length ? '<p class="hint">Did a Pair turn into something real? Share it together. Both of you approve, our team checks it, then it goes up on <a href="winners.html">Winners\' Row</a> and a badge goes on both your cards.</p><div class="row">' + hands.slice(0, 8).map(function (x) { return '<button class="btn ghost sm" data-winshare="' + x.hand_id + '" data-name="' + esc(x.other_name) + '">🏆 Share our win with ' + esc((x.other_name || "").split(" ")[0]) + "</button>"; }).join("") + "</div>" : '<p class="hint">Make a Pair and, when it turns into something real, share it on <a href="winners.html">Winners\' Row</a>.</p>';
      el.innerHTML = h;
    });
  }
  function shareWinModal(hand, other) {
    var m = modal('<form class="form-grid" id="winForm" novalidate><p class="eyebrow">Winners\' Row</p><h3>Share your win with ' + esc(other) + '</h3>' +
      '<div class="field"><label for="wKind">What happened?</label><select id="wKind">' + KIND_OPTS.map(function (k) { return '<option value="' + k[0] + '">' + k[1] + "</option>"; }).join("") + '</select></div>' +
      '<div class="field" id="wDateF"><label for="wDate">Date</label><input type="date" id="wDate"></div>' +
      '<div class="field"><label for="wStory">Your story, in a few lines</label><textarea id="wStory" rows="4" maxlength="700" placeholder="He played my card on a Tuesday. By Friday we were sharing pie at Saw\'s."></textarea><span class="hint"><span id="wCount">0</span>/700 · no last names, addresses or explicit details</span></div>' +
      '<div class="field"><label for="wNames">Show us as</label><select id="wNames"><option value="first">First names (Jordan & Kelly)</option><option value="initials">Initials only (J. & K.)</option></select></div>' +
      '<div class="field"><label for="wPhoto">A photo of you two (optional)</label><input type="file" id="wPhoto" accept="image/jpeg,image/png,image/webp"><span class="hint">Both of you should be happy with it. No children, please.</span></div>' +
      '<label class="chk"><input type="checkbox" id="wOk"> We both agree to show this publicly on SuiteFace. Either of us can take it down at any time.</label>' +
      '<p class="err" id="wErr" role="alert"></p><div class="row"><button class="btn gold" type="submit">Send to ' + esc((other || "").split(" ")[0]) + ' to approve</button></div></form>');
    var kind = $("#wKind", m), df = $("#wDateF", m);
    function sync() { df.hidden = ["married", "engaged"].indexOf(kind.value) < 0; $("label[for=wDate]", m).textContent = kind.value === "married" ? "Wedding date" : "Engagement date"; }
    kind.addEventListener("change", sync); sync();
    $("#wStory", m).addEventListener("input", function () { $("#wCount", m).textContent = this.value.length; });
    $("#winForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var err = $("#wErr", m), st = $("#wStory", m).value.trim(), dt = $("#wDate", m).value || null;
      if (st.length < 20) { err.textContent = "Tell it in at least a sentence or two."; return; }
      if (kind.value === "married" && !dt) { err.textContent = "Add your wedding date."; return; }
      if (!$("#wOk", m).checked) { err.textContent = "Please confirm you both agree to share it."; return; }
      var file = $("#wPhoto", m).files[0], mid = window.SF_LIVE.memberId(), up = Promise.resolve(null);
      if (file) { if (file.size > 8e6) { err.textContent = "That photo is over 8 MB. Pick a smaller one."; return; } var path = mid + "/" + (crypto.randomUUID ? crypto.randomUUID() : Date.now()) + "." + (file.type.split("/")[1] || "jpg"); up = window.SF_LIVE.client.storage.from("win-photos").upload(path, file, { contentType: file.type }).then(function (r) { if (r.error) throw r.error; return path; }); }
      err.textContent = "Sending…";
      up.then(function (path) { return lrpc("share_win", { p_hand: hand, p_kind: kind.value, p_story: st, p_names: $("#wNames", m).value, p_photo: path, p_date: ["married", "engaged"].indexOf(kind.value) > -1 ? dt : null }); })
        .then(function () { closeModal(); jackpot(2500); toast("Sent to " + (other || "").split(" ")[0] + ". Once they approve, our team takes a quick look."); renderWins(); }, function (x) { err.textContent = (x && x.message) || "Try again."; });
    });
  }
  document.addEventListener("click", function (e) {
    var b;
    if ((b = e.target.closest("[data-winshare]"))) { shareWinModal(b.getAttribute("data-winshare"), b.getAttribute("data-name")); return; }
    if ((b = e.target.closest("[data-winok]")) || (b = e.target.closest("[data-winno]"))) { var yes = b.hasAttribute("data-winok"); lrpc("answer_win", { p_win: b.getAttribute(yes ? "data-winok" : "data-winno"), p_yes: yes }).then(function (s) { toast(yes ? (s === "pending_review" ? "Approved. Our team will take a quick look, then it's on Winners' Row." : "Approved.") : "Okay, it won't be shared."); if (yes) jackpot(1500); renderWins(); }, function (x) { toast(x.message); }); return; }
    if ((b = e.target.closest("[data-winwd]"))) { if (!confirm("Take this win down? It comes off Winners' Row and your cards right away.")) return; lrpc("withdraw_win", { p_win: b.getAttribute("data-winwd") }).then(function () { toast("Taken down."); renderWins(); }, function (x) { toast(x.message); }); return; }
    if ((b = e.target.closest("[data-ck]"))) {
      var hand = b.getAttribute("data-ck"), met = b.getAttribute("data-met") === "1", safe = b.getAttribute("data-safe");
      var send = function (note) { lrpc("date_checkin", { p_hand: hand, p_met: met, p_safe: met ? safe === "1" : null, p_note: note || null }).then(function () { closeModal(); toast(!met ? "Thanks for telling us." : safe === "1" ? "Glad it went well. If it turns into something real, share your win." : "Thank you. Our safety team will reach out by email."); renderWins(); }, function (x) { toast(x.message); }); };
      if (met && safe === "0") { var m = modal('<div class="form-grid"><h3>We\'re sorry. Tell us what happened.</h3><p class="lede">Our safety team reads every one of these and will reach out at the email on your account. <b>If you are in danger right now, call 911.</b></p><textarea id="ckNote" rows="4" maxlength="600" placeholder="What happened? (optional)"></textarea><div class="row"><button class="btn gold" type="button" id="ckSend">Send to the safety team</button></div></div>'); $("#ckSend", m).addEventListener("click", function () { send($("#ckNote", m).value); }); return; }
      send(); return;
    }
  });

  /* ---------- City tables: one city at a time, like a campus ---------- */
  function cityMsg(d, zip) {
    if (!d || d.error) return '<p class="err">' + esc((d && d.error) || "Use a 5-digit ZIP code.") + "</p>";
    var pct = Math.min(100, Math.round((d.players || 0) / (d.open_at || 500) * 100));
    if (d.status === "open") return '<p class="cityok">♥ <b>' + esc(d.city) + "'s table is open.</b> Real players near you are ready to be dealt.</p>" + '<div class="row"><a class="btn gold" data-gate href="membership.html">Get dealt in</a></div>';
    return '<p><b>' + esc(d.city) + ", " + esc(d.state) + (d.status === "new" ? "</b> doesn't have a table yet." : "'s table is filling.") + " It opens at " + (d.open_at || 500) + ' players.</p><div class="cityprog" role="progressbar" aria-valuemin="0" aria-valuemax="' + (d.open_at || 500) + '" aria-valuenow="' + (d.players || 0) + '"><i style="width:' + Math.max(2, pct) + '%"></i></div><p class="hint">' + (d.players || 0) + " of " + (d.open_at || 500) + ' players so far</p>' +
      '<form class="row citywait" data-zip="' + esc(zip) + '"><label class="sr" for="cwEmail">Email</label><input type="email" id="cwEmail" placeholder="you@email.com" autocomplete="email" required><button class="btn gold sm" type="submit">Save my seat</button></form><p class="hint">We\'ll email you once, when your table opens. Invite friends to open it sooner.</p>';
  }
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (f.id === "cityForm") { e.preventDefault(); var z = $("#cityZip").value.trim(), out = $("#cityOut"); if (!/^\d{5}$/.test(z)) { out.innerHTML = '<p class="err">Use a 5-digit ZIP code.</p>'; return; } out.innerHTML = '<p class="hint">Checking…</p>'; rpc("city_status", { p_zip: z }).then(function (d) { out.innerHTML = cityMsg(d, z); }, function () { out.innerHTML = '<p class="hint">Birmingham\'s table is open now. More cities open one at a time as players sign up.</p>'; }); return; }
    if (f.classList.contains("citywait")) { e.preventDefault(); var em = f.querySelector("input").value.trim(), zz = f.getAttribute("data-zip"); rpc("join_city_waitlist", { p_zip: zz, p_email: em }).then(function (d) { $("#cityOut").innerHTML = cityMsg(d, zz).replace(/<form[\s\S]*?<\/form>/, "") + '<p class="cityok">✓ Seat saved. We\'ll email you when it opens.</p>'; jackpot(1200); }, function (x) { toast(x.message); }); }
  });
  function renderCityBoard() {
    var el = $("#cityBoard"); if (!el) return;
    rpc("city_board", {}).then(function (rows) { rows = (rows || []).slice(0, 7); el.innerHTML = rows.map(function (c) { var pct = Math.min(100, Math.round(c.players / c.open_at * 100)); return '<li class="' + (c.status === "open" ? "open" : "") + '"><b>' + esc(c.name) + "</b> <small>" + esc(c.state) + "</small><span>" + (c.status === "open" ? "Open" : '<i class="mini"><i style="width:' + Math.max(3, pct) + '%"></i></i>') + "</span></li>"; }).join(""); }, function () { el.innerHTML = '<li class="open"><b>Birmingham</b> <small>AL</small><span>Open</span></li>'; });
  }

  /* ---------- Owner: winning hands, safety check-ins, fees audit, city tables ---------- */
  function loadOwnerExtras() {
    var wl = $("#winReviewList"), sl = $("#safetyCkList"), fl = $("#feeAuditList"), cl = $("#cityAdminList");
    var loadW = function () { if (wl) lrpc("review_wins").then(function (rows) { rows = rows || []; wl.innerHTML = rows.length ? rows.map(function (w) { return '<div class="cmrow"><span>' + winIcon(w.kind, 18) + " <b>" + esc(w.a_name) + " & " + esc(w.b_name) + "</b> · " + esc(WINS[w.kind].short) + (w.event_date ? " · " + esc(w.event_date) : "") + " · shown as " + esc(w.names) + "<br><small>“" + esc(w.story) + '”</small>' + (w.photo_path ? '<br><a href="' + esc(photoUrl(w.photo_path)) + '" target="_blank" rel="noopener">View photo</a>' : "") + '</span><span class="row"><button class="btn gold sm" data-wrule="' + w.id + '" data-v="1">Approve</button><button class="btn ghost sm" data-wrule="' + w.id + '" data-v="0">Decline</button></span></div>'; }).join("") : '<p class="hint">Nothing to review.</p>'; }, function (x) { wl.innerHTML = '<p class="hint">' + esc(x.message) + "</p>"; }); };
    if (wl) { wl.onclick = function (e) { var b = e.target.closest("[data-wrule]"); if (!b) return; var ok = b.getAttribute("data-v") === "1", note = ok ? null : prompt("Why not? (sent to neither member; for your records)", "") || null; lrpc("rule_win", { p_win: b.getAttribute("data-wrule"), p_ok: ok, p_note: note }).then(function () { toast(ok ? "Approved. It's on Winners' Row." : "Declined."); loadW(); }, function (x) { toast(x.message); }); }; loadW(); }
    var loadS = function () { if (sl) lrpc("safety_checkins").then(function (rows) { rows = rows || []; sl.innerHTML = rows.length ? rows.map(function (c) { return '<div class="cmrow"><span><b>' + esc(c.member_name) + "</b> didn't feel safe on a date with <b>" + esc(c.other_name) + "</b><br><small>" + esc(c.note || "No note.") + " · " + esc(new Date(c.created_at).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })) + '</small></span><span class="row"><button class="btn ghost sm" data-ckdone="' + c.id + '">Handled</button></span></div>'; }).join("") : '<p class="hint">No safety check-ins waiting.</p>'; }); };
    if (sl) { sl.onclick = function (e) { var b = e.target.closest("[data-ckdone]"); if (!b) return; lrpc("handle_checkin", { p_id: b.getAttribute("data-ckdone") }).then(function () { toast("Marked handled."); loadS(); }); }; loadS(); }
    if (fl) lrpc("owner_fee_audit").then(function (rows) { fl.innerHTML = '<table class="feetab"><thead><tr><th>Paid item</th><th>Price</th><th>Used, 30 days</th><th>Note</th></tr></thead><tbody>' + (rows || []).map(function (r) { return "<tr><td>" + esc(r.item) + "</td><td>" + esc(r.price) + "</td><td>" + (r.used_30d == null ? "—" : r.used_30d) + "</td><td>" + esc(r.note || "") + "</td></tr>"; }).join("") + '</tbody></table><p class="hint">Rule of thumb: if members rarely use a paid add-on, drop it. Every fee should feel worth it.</p>'; }, function (x) { fl.innerHTML = '<p class="hint">' + esc(x.message) + "</p>"; });
    var br = $("#bluffRepList"), loadBR = function () { if (br) lrpc("bluff_reports_queue").then(function (rows) { rows = rows || []; br.innerHTML = rows.length ? rows.map(function (r) { return '<div class="cmrow"><span><b>' + esc(r.reporter_name) + "</b> reported <b>" + esc(r.reported_house ? (r.reported_name || "") + " (House Card)" : r.reported_name || "?") + "</b>: " + esc(r.reason) + (r.note ? "<br><small>" + esc(r.note) + "</small>" : "") + "<br><small>Last messages: " + esc((r.last_msgs || []).join(" | ").slice(0, 400)) + '</small></span><span class="row"><button class="btn ghost sm" data-brdone="' + r.id + '">Handled</button></span></div>'; }).join("") : '<p class="hint">No Bluff Table reports.</p>'; }); };
    if (br) { br.onclick = function (e) { var b = e.target.closest("[data-brdone]"); if (b) lrpc("handle_bluff_report", { p_id: b.getAttribute("data-brdone") }).then(loadBR); }; loadBR(); }
    var bl = $("#callBillList"), loadB = function () { if (bl) lrpc("unbilled_calls").then(function (rows) { rows = rows || []; bl.innerHTML = rows.length ? rows.map(function (c) { return '<div class="cmrow"><span><b>' + esc(c.caller_name) + "</b> · " + c.minutes + " min · $" + (c.cents / 100).toFixed(2) + " · " + esc(c.charge_status === "failed" ? "Declined: " + (c.charge_note || "") : "Waiting") + "</span></div>"; }).join("") + '<div class="row"><button class="btn gold sm" type="button" id="collectCalls">Collect now</button></div>' : '<p class="hint">All call charges are collected.</p>'; }); };
    if (bl) { bl.onclick = function (e) { if (!e.target.closest("#collectCalls")) return; window.SF_LIVE.client.functions.invoke("call-charge", { body: { all: true } }).then(function (r) { var calls = (r.data && r.data.calls) || []; toast(calls.length ? calls.filter(function (c) { return c.status === "paid" || c.status === "on_next_bill"; }).length + " of " + calls.length + " collected." : (r.error ? r.error.message : "Nothing to collect.")); loadB(); }); }; loadB(); }
    var loadC = function () { if (cl) rpc("city_board", {}).then(function (rows) { cl.innerHTML = (rows || []).map(function (c) { return '<div class="cmrow"><span><b>' + esc(c.name) + ", " + esc(c.state) + "</b> · " + (c.status === "open" ? "Open" : "Filling") + " · " + c.players + " of " + c.open_at + '</span><span class="row">' + (c.status === "open" ? '<button class="btn ghost sm" data-city="' + c.slug + '" data-st="filling">Close to new cities list</button>' : '<button class="btn gold sm" data-city="' + c.slug + '" data-st="open">Open this table</button>') + "</span></div>"; }).join(""); }); };
    if (cl) { cl.onclick = function (e) { var b = e.target.closest("[data-city]"); if (!b) return; lrpc("owner_set_city", { p_slug: b.getAttribute("data-city"), p_status: b.getAttribute("data-st"), p_open_at: null }).then(function () { toast("Updated."); loadC(); }, function (x) { toast(x.message); }); }; loadC(); }
  }
  document.addEventListener("sf:live", function () {
    var pg = document.body.getAttribute("data-page") || "";
    if (pg === "club") { setTimeout(renderWins, 700); lrpc("my_win_badges").then(function (w) { P.wins = w || []; renderCard(); }, function () { }); }
    if (ROLE === "owner" && pg === "club") setTimeout(loadOwnerExtras, 900);
  });
  setTimeout(function () { var pg = document.body.getAttribute("data-page") || ""; if (pg === "winners") { var h = location.hash.replace("#", ""); if (VENUES[h]) winVenue = h; renderWinners(); } if (pg === "home") renderCityBoard(); if (pg === "club" && !liveOn()) renderWins(); }, 0);

  /* =====================================================================
     LIVE CAMERA CHAT for Pairs. The caller pays: $2.10 for the first minute, then 21¢ a minute,
     charged to their card on file when the call ends. A call that drops in the first 15 seconds is free.
     The person being called never pays. Nothing is recorded. Calls end at 120 minutes.
     Video goes straight between the two phones (WebRTC); SuiteFace only passes the connection notes.
     ===================================================================== */
  var ICE = (CFG.iceServers && CFG.iceServers.length) ? CFG.iceServers : [{ urls: ["stun:stun.cloudflare.com:3478", "stun:stun.l.google.com:19302"] }];
  var CALL = null;
  function callCost(sec) { if (sec < 15) return 0; var m = Math.max(1, Math.ceil(Math.min(sec, 7200) / 60)); return 210 + 21 * (m - 1); }
  function money(c) { return "$" + (c / 100).toFixed(2); }
  function hourglass() {
    return '<svg class="hg" viewBox="0 0 40 56" aria-hidden="true"><defs><clipPath id="hgTop"><path d="M8 6h24c0 10-8 14-12 22C16 20 8 16 8 6z"/></clipPath><clipPath id="hgBot"><path d="M20 28c4 8 12 12 12 22H8c0-10 8-14 12-22z"/></clipPath></defs>' +
      '<rect x="4" y="2" width="32" height="4" rx="2" fill="#B8862F"/><rect x="4" y="50" width="32" height="4" rx="2" fill="#B8862F"/>' +
      '<path d="M8 6h24c0 10-8 14-12 22 4 8 12 12 12 22H8c0-10 8-14 12-22C16 20 8 16 8 6z" fill="rgba(250,247,240,.12)" stroke="#E8C46A" stroke-width="1.6"/>' +
      '<rect class="sand-top" x="6" y="6" width="28" height="22" fill="#E8C46A" clip-path="url(#hgTop)"/><rect class="sand-bot" x="6" y="50" width="28" height="0" fill="#E8C46A" clip-path="url(#hgBot)"/><rect class="stream" x="19.4" y="27" width="1.2" height="22" fill="#FFE7A3"/></svg>';
  }
  function callUI(name, iPay) {
    var o = document.createElement("div"); o.className = "callov"; o.setAttribute("role", "dialog"); o.setAttribute("aria-label", "Video call with " + name);
    o.innerHTML = '<video class="cv-remote" autoplay playsinline></video><video class="cv-local" autoplay playsinline muted></video>' +
      '<div class="cv-top"><b>' + esc(name) + '</b><span class="cv-status">Calling…</span></div>' +
      '<div class="cv-meter">' + hourglass() + '<div><span class="cv-time">0:00</span><span class="cv-cost">' + (iPay ? "$0.00" : "Free for you") + '</span><small>' + (iPay ? "$2.10 first minute · 21¢ a minute after" : esc(name) + " is paying for this call") + '</small></div></div>' +
      '<div class="cv-ctrls"><button type="button" class="cvb-btn" data-cv="mic" aria-pressed="false" title="Mute">🎙</button><button type="button" class="cvb-btn" data-cv="cam" aria-pressed="false" title="Camera off">📷</button><button type="button" class="cvb-btn end" data-cv="end" title="End call">End</button><button type="button" class="cvb-btn" data-cv="report" title="Report">⚑</button></div>';
    document.body.appendChild(o); document.documentElement.style.overflow = "hidden";
    return o;
  }
  function tickMeter() {
    if (!CALL || !CALL.ui) return;
    var sec = CALL.answeredAt ? Math.max(0, (Date.now() - CALL.skew - CALL.answeredAt) / 1000) : 0;
    var t = Math.floor(sec), mm = Math.floor(t / 60), ss = t % 60;
    $(".cv-time", CALL.ui).textContent = mm + ":" + String(ss).padStart(2, "0");
    if (CALL.iPay) $(".cv-cost", CALL.ui).textContent = money(callCost(sec)) + (sec >= 15 ? "" : " · free if under 15 s");
    var frac = (sec % 60) / 60, hg = $(".hg", CALL.ui);
    if (hg) {
      var top = hg.querySelector(".sand-top"), bot = hg.querySelector(".sand-bot");
      top.setAttribute("y", String(6 + 22 * frac)); top.setAttribute("height", String(22 * (1 - frac)));
      bot.setAttribute("y", String(50 - 22 * frac)); bot.setAttribute("height", String(22 * frac));
      var minute = Math.floor(sec / 60); if (CALL.answeredAt && minute !== CALL.lastMin) { CALL.lastMin = minute; if (minute > 0) { hg.classList.remove("flip"); void hg.offsetWidth; hg.classList.add("flip"); } }
    }
  }
  function sig(kind, payload) { return lrpc("call_signal_send", { p_call: CALL.id, p_kind: kind, p_payload: payload || null }).catch(function () { }); }
  function pollSignals() {
    if (!CALL) return;
    lrpc("call_signals_since", { p_call: CALL.id, p_after: CALL.after }).then(function (rows) {
      (rows || []).forEach(function (r) {
        CALL.after = Math.max(CALL.after, r.id);
        if (r.kind === "bye") { hangUp(true); return; }
        if (!CALL || !CALL.pc) return;
        if (r.kind === "offer") CALL.pc.setRemoteDescription(r.payload).then(function () { return CALL.pc.createAnswer(); }).then(function (a) { return CALL.pc.setLocalDescription(a); }).then(function () { sig("answer", CALL.pc.localDescription.toJSON()); flushIce(); });
        else if (r.kind === "answer") CALL.pc.setRemoteDescription(r.payload).then(flushIce);
        else if (r.kind === "ice") { if (CALL.pc.remoteDescription) CALL.pc.addIceCandidate(r.payload).catch(function () { }); else CALL.pendingIce.push(r.payload); }
      });
    }, function () { });
  }
  function flushIce() { if (!CALL) return; CALL.pendingIce.splice(0).forEach(function (c) { CALL.pc.addIceCandidate(c).catch(function () { }); }); }
  function beat() {
    if (!CALL) return;
    lrpc("call_beat", { p_call: CALL.id }).then(function (b) {
      if (!CALL) return;
      if (b.answered_at && !CALL.answeredAt) { CALL.answeredAt = new Date(b.answered_at).getTime(); CALL.skew = Date.now() - new Date(b.now).getTime(); $(".cv-status", CALL.ui).textContent = "Connected"; if (CALL.caller) makeOffer(); }
      if (b.answered_at) CALL.skew = Date.now() - new Date(b.now).getTime();
      if (["ended", "declined", "missed", "cancelled"].indexOf(b.status) > -1) hangUp(true, b);
    }, function () { });
  }
  function startMedia() {
    return navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: { echoCancellation: true, noiseSuppression: true } }).then(function (s) {
      CALL.local = s; $(".cv-local", CALL.ui).srcObject = s;
      var pc = CALL.pc = new RTCPeerConnection({ iceServers: ICE });
      s.getTracks().forEach(function (t) { pc.addTrack(t, s); });
      pc.ontrack = function (e) { $(".cv-remote", CALL.ui).srcObject = e.streams[0]; };
      pc.onicecandidate = function (e) { if (e.candidate) sig("ice", e.candidate.toJSON()); };
      pc.onconnectionstatechange = function () { if (!CALL) return; var st = pc.connectionState; if (st === "failed") $(".cv-status", CALL.ui).textContent = "Connection trouble… trying again"; if (st === "connected") $(".cv-status", CALL.ui).textContent = "Connected"; };
    });
  }
  function makeOffer() { if (!CALL || !CALL.pc || CALL.offered) return; CALL.offered = true; CALL.pc.createOffer().then(function (o) { return CALL.pc.setLocalDescription(o); }).then(function () { sig("offer", CALL.pc.localDescription.toJSON()); }); }
  function runLoops() {
    CALL.t1 = setInterval(pollSignals, 1200); CALL.t2 = setInterval(beat, 5000); CALL.t3 = setInterval(tickMeter, 250);
    beat(); pollSignals();
    CALL.ui.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cv]"); if (!b || !CALL) return; var k = b.getAttribute("data-cv");
      if (k === "end") { hangUp(false); return; }
      if (k === "mic" || k === "cam") { var on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", String(on)); (CALL.local ? CALL.local.getTracks() : []).forEach(function (t) { if ((k === "mic" && t.kind === "audio") || (k === "cam" && t.kind === "video")) t.enabled = !on; }); return; }
      if (k === "report") { if (!confirm("End the call and report " + CALL.name + "? Our safety team reviews every report.")) return; var other = CALL.other; hangUp(false); if (other) lrpc("block_member", { target: other, is_report: true }).then(function () { toast("Reported and blocked. Thank you for telling us."); }, function () { toast("Call ended. Email help@suiteface.com to report."); }); }
    });
  }
  function hangUp(remote, info) {
    if (!CALL) return; var c = CALL; CALL = null;
    [c.t1, c.t2, c.t3].forEach(clearInterval);
    try { c.pc && c.pc.close(); } catch (e) { }
    (c.local ? c.local.getTracks() : []).forEach(function (t) { t.stop(); });
    if (c.ui) c.ui.remove(); document.documentElement.style.overflow = "";
    var after = function (r) {
      r = r || {};
      if (r.status === "declined") { toast(c.name + " can't take a call right now."); return; }
      if (r.status === "missed" || r.status === "cancelled") { toast(c.caller ? "No answer. Try again later or send a message." : "Call ended."); return; }
      if (c.caller && r.cents > 0) {
        toast("Call ended: " + r.minutes + " min · " + money(r.cents) + " charged to your card on file.");
        if (window.SF_LIVE && window.SF_LIVE.client && window.SF_LIVE.client.functions) window.SF_LIVE.client.functions.invoke("call-charge", { body: {} }).catch(function () { });
      } else toast(c.caller ? "Call ended. Under 15 seconds, so it's free." : "Call ended.");
    };
    if (remote && info) after(info); else lrpc("call_end", { p_call: c.id }).then(after, function () { toast("Call ended."); });
  }
  /* One-time camera and microphone agreement, shown before the browser's own permission prompt. */
  function camConsent(then) {
    var ok = false; try { ok = localStorage.getItem("sf.camok") === "1"; } catch (e) { }
    if (ok) { then(); return; }
    var m = modal('<div class="form-grid camok"><span class="camok-ic" aria-hidden="true">📹</span><h3>Allow camera and microphone?</h3>' +
      '<p class="lede">SuiteFace uses your camera and microphone <b>only during a video chat you start or answer</b>.</p>' +
      '<ul class="hint cc-list"><li>Video and sound go straight between your two devices. SuiteFace never records or stores them.</li><li>You can turn your camera or mic off, or hang up, at any time.</li><li>Recording or screenshotting the other person without their OK breaks the House Rules.</li><li>Next, your browser will ask for permission. Tap <b>Allow</b>.</li></ul>' +
      '<label class="chk"><input type="checkbox" id="camOk"> I agree to use my camera and microphone for video chats on SuiteFace.</label><p class="err" id="camErr" role="alert"></p>' +
      '<div class="row"><button class="btn gold" type="button" id="camGo">Continue</button><button class="btn ghost" type="button" data-close>Not now</button></div></div>');
    $("#camGo", m).addEventListener("click", function () { if (!$("#camOk", m).checked) { $("#camErr", m).textContent = "Please check the box to continue."; return; } try { localStorage.setItem("sf.camok", "1"); } catch (e) { } if (liveOn()) lrpc("record_consent", { p_kind: "camera" }).catch(function () { }); closeModal(); then(); });
  }
  function placeCall(hand, name, other, bluff) {
    if (!liveOn()) { toast("Video calls open for members with a Pair."); return; }
    camConsent(function () { placeCall2(hand, name, other, bluff); });
  }
  function placeCall2(hand, name, other, bluff) {
    if (!window.RTCPeerConnection || !navigator.mediaDevices) { toast("This browser can't make video calls. Try Safari or Chrome."); return; }
    var first = esc((name || "your Pair").split(" ")[0]);
    var m = modal('<div class="form-grid callconsent"><div class="cc-hg">' + hourglass() + '</div><h3>Video call ' + first + '?</h3>' +
      '<p class="lede"><b>$2.10</b> for the first minute, then <b>21¢</b> a minute. You pay; ' + first + ' never does. The total is charged to your card on file when the call ends.</p>' +
      '<ul class="hint cc-list"><li>A call that drops in the first 15 seconds is free.</li><li>Calls end automatically at 2 hours.</li><li>Nothing is recorded. Report any call with ⚑ and it ends right away.</li></ul>' +
      '<label class="chk"><input type="checkbox" id="ccOk"> Charge my card on file for this call.</label><p class="err" id="ccErr" role="alert"></p>' +
      '<div class="row"><button class="btn gold" type="button" id="ccGo">📹 Call ' + first + '</button><button class="btn ghost" type="button" data-close>Not now</button></div></div>');
    $("#ccGo", m).addEventListener("click", function () {
      if (!$("#ccOk", m).checked) { $("#ccErr", m).textContent = "Please agree to the price to call."; return; }
      $("#ccErr", m).textContent = "Starting…";
      lrpc(bluff ? "call_start_bluff" : "call_start", bluff ? { p_bhand: hand, p_ok: true } : { p_hand: hand, p_ok: true }).then(function (id) {
        closeModal();
        CALL = { id: id, name: name || "your Pair", other: other || null, caller: true, iPay: true, after: 0, pendingIce: [], skew: 0, lastMin: 0 };
        CALL.ui = callUI(CALL.name, true);
        startMedia().then(runLoops, function () { toast("Allow camera and microphone to call."); hangUp(false); });
      }, function (x) { $("#ccErr", m).textContent = (x && x.message) || "Couldn't start the call."; });
    });
  }
  function answerCall(row) {
    if (CALL) return;
    var m = modal('<div class="form-grid incoming"><div class="cc-hg ring">' + hourglass() + '</div><h3>' + esc((row.caller_name || "Your Pair").split(" ")[0]) + ' is video calling</h3><p class="lede">Free for you. ' + esc((row.caller_name || "They").split(" ")[0]) + ' pays for this call.</p>' +
      '<div class="row"><button class="btn gold" type="button" id="icYes">Answer</button><button class="btn ghost" type="button" id="icNo">Decline</button></div></div>');
    $("#icNo", m).addEventListener("click", function () { closeModal(); lrpc("call_answer", { p_call: row.id, p_yes: false }).catch(function () { }); });
    $("#icYes", m).addEventListener("click", function () {
      closeModal(); var ok0 = false; try { ok0 = localStorage.getItem("sf.camok") === "1"; } catch (e) { }
      if (!ok0) { camConsent(function () { answerCall2(row); }); return; }
      answerCall2(row);
    });
  }
  function answerCall2(row) {
    (function () {
      CALL = { id: row.id, name: row.caller_name || "Your Pair", caller: false, iPay: false, after: 0, pendingIce: [], skew: 0, lastMin: 0 };
      CALL.ui = callUI(CALL.name, false);
      startMedia().then(function () { return lrpc("call_answer", { p_call: row.id, p_yes: true }); }).then(function (st) { if (st !== "active") { hangUp(true, { status: st }); return; } runLoops(); }, function () { toast("Allow camera and microphone to answer."); if (CALL) lrpc("call_answer", { p_call: row.id, p_yes: false }).catch(function () { }); hangUp(true, { status: "cancelled" }); });
    })();
  }
  var lastRing = "";
  function watchIncoming() {
    if (!liveOn() || CALL || document.hidden) return;
    lrpc("call_incoming").then(function (rows) { var r = (rows || [])[0]; if (r && r.id !== lastRing && !$("#modal")) { lastRing = r.id; answerCall(r); } }, function () { });
  }
  document.addEventListener("sf:live", function () {
    clearInterval(window.__ringTick); window.__ringTick = setInterval(watchIncoming, 6000); setTimeout(watchIncoming, 1500);
    // Collect any call charges left over from a call that dropped (closed tab, lost signal).
    setTimeout(function () { if (window.SF_LIVE && window.SF_LIVE.client && window.SF_LIVE.client.functions) lrpc("my_calls").then(function (rows) { if ((rows || []).some(function (c) { return c.i_paid && c.charge_status === "pending"; })) window.SF_LIVE.client.functions.invoke("call-charge", { body: {} }).catch(function () { }); }, function () { }); }, 4000);
  });
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-call]"); if (!b) return; e.preventDefault(); placeCall(b.getAttribute("data-call"), b.getAttribute("data-name"), b.getAttribute("data-other")); });
  // Bluff Table video: the same answer for every uncalled card, so the button never gives a House Card away.
  function bluffVideo(handId, name) {
    var cards = (BT.state && BT.state.cards) || [], c = cards.filter(function (x) { return x.hand_id === handId; })[0];
    if (!c || !c.guess) { toast("Video unlocks after you call this card. If it's a Player Card, you can video chat."); return; }
    if (c.revealed !== "real") { toast("That was a House Card. House Cards don't video chat."); return; }
    placeCall(handId, name || c.name, null, true);
  }
  document.addEventListener("click", function (e) { var b = e.target.closest("[data-bvideo]"); if (!b) return; e.preventDefault(); bluffVideo(b.getAttribute("data-bvideo"), b.getAttribute("data-bname")); });

  /* ---------- Venue logos rendered as an enamel pin, an embroidered patch or a gold coin ---------- */
  var LB = 0;
  function logoUrl(path) { return /^(blob:|data:|https?:)/.test(path || "") ? path : CFG.supabaseUrl + "/storage/v1/object/public/venue-logos/" + String(path || "").split("/").map(encodeURIComponent).join("/"); }
  function logoBadge(path, style, size) {
    var u = esc(logoUrl(path)), i = "lb" + (++LB), z = size || 40;
    if (style === "patch") return '<svg class="lbadge patch" viewBox="0 0 100 100" width="' + z + '" height="' + z + '" aria-hidden="true"><defs><pattern id="' + i + 't" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v3" stroke="#000" stroke-opacity=".09" stroke-width="1.2"/></pattern><clipPath id="' + i + 'c"><rect x="16" y="16" width="68" height="68" rx="14"/></clipPath></defs>' +
      '<rect x="3" y="3" width="94" height="94" rx="24" fill="#3A2F3E"/><rect x="8" y="8" width="84" height="84" rx="20" fill="#FAF7F0"/><rect x="8" y="8" width="84" height="84" rx="20" fill="url(#' + i + 't)"/>' +
      '<image href="' + u + '" x="16" y="16" width="68" height="68" preserveAspectRatio="xMidYMid meet" clip-path="url(#' + i + 'c)" opacity=".94"/><rect x="16" y="16" width="68" height="68" rx="14" fill="url(#' + i + 't)"/>' +
      '<rect x="6.5" y="6.5" width="87" height="87" rx="21.5" fill="none" stroke="#E8C46A" stroke-width="2.2" stroke-dasharray="3.2 2.4"/></svg>';
    if (style === "coin") { var ticks = ""; for (var k = 0; k < 72; k++) { var a = k * Math.PI / 36; ticks += '<line x1="' + (50 + 45 * Math.cos(a)).toFixed(1) + '" y1="' + (50 + 45 * Math.sin(a)).toFixed(1) + '" x2="' + (50 + 49 * Math.cos(a)).toFixed(1) + '" y2="' + (50 + 49 * Math.sin(a)).toFixed(1) + '"/>'; }
      return '<svg class="lbadge coin" viewBox="0 0 100 100" width="' + z + '" height="' + z + '" aria-hidden="true"><defs><radialGradient id="' + i + 'g" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFF1BF"/><stop offset=".5" stop-color="#E8C46A"/><stop offset="1" stop-color="#9C6B1F"/></radialGradient>' +
        '<filter id="' + i + 'f"><feColorMatrix type="matrix" values="0.16 0.31 0.06 0 0.36  0.12 0.23 0.05 0 0.24  0.04 0.08 0.02 0 0.05  0 0 0 1 0"/></filter><clipPath id="' + i + 'c"><circle cx="50" cy="50" r="31"/></clipPath></defs>' +
        '<circle cx="50" cy="50" r="49" fill="url(#' + i + 'g)"/><g stroke="#8A5E1A" stroke-width="1.1">' + ticks + '</g><circle cx="50" cy="50" r="41" fill="url(#' + i + 'g)" stroke="#8A5E1A" stroke-width="1.2"/><circle cx="50" cy="50" r="35" fill="none" stroke="#FFF1BF" stroke-opacity=".7" stroke-width="1"/>' +
        '<image href="' + u + '" x="19" y="19" width="62" height="62" preserveAspectRatio="xMidYMid meet" clip-path="url(#' + i + 'c)" filter="url(#' + i + 'f)"/><ellipse cx="38" cy="30" rx="16" ry="7" fill="#fff" opacity=".22" transform="rotate(-25 38 30)"/></svg>'; }
    return '<svg class="lbadge pin" viewBox="0 0 100 100" width="' + z + '" height="' + z + '" aria-hidden="true"><defs><linearGradient id="' + i + 'g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF1BF"/><stop offset=".45" stop-color="#E8C46A"/><stop offset="1" stop-color="#8A5E1A"/></linearGradient><clipPath id="' + i + 'c"><circle cx="50" cy="50" r="36"/></clipPath></defs>' +
      '<circle cx="50" cy="50" r="47" fill="url(#' + i + 'g)"/><circle cx="50" cy="50" r="39" fill="#FAF7F0" stroke="#8A5E1A" stroke-width="1.5"/>' +
      '<image href="' + u + '" x="16" y="16" width="68" height="68" preserveAspectRatio="xMidYMid meet" clip-path="url(#' + i + 'c)"/><path d="M22 38a30 30 0 0 1 40-22" stroke="#fff" stroke-opacity=".55" stroke-width="5" fill="none" stroke-linecap="round"/></svg>';
  }

  /* ---------- Thank-you stickers from Date Deal venues (our own icon art + the venue's name) ---------- */
  var VART = {
    coffee: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" fill="#FAF7F0" stroke="#6E4E14" stroke-width="1.4"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" fill="none" stroke="#6E4E14" stroke-width="1.4"/><path d="M8 3c-1 1.5 1 2 0 4M11 3c-1 1.5 1 2 0 4" stroke="#B8862F" stroke-width="1.3" fill="none" stroke-linecap="round"/>',
    donut: '<circle cx="12" cy="12" r="8" fill="#E8B07A"/><path d="M4.6 10.5a8 8 0 0 1 14.8 0c-1 1.4-2.2.4-3 1.4s-2 0-3 1-2.1-.6-3.2.3-2.3-.4-3.3.2-1.8-1.6-2.3-2.9z" fill="#E86A8E"/><circle cx="12" cy="12" r="2.6" fill="#FAF7F0"/><path d="M8 8.5l1 .5M14.5 7.5l.6 1M16.6 10.2l-1 .3M10.5 6.8l.9-.4" stroke="#FFE7A3" stroke-width="1.2" stroke-linecap="round"/>',
    pizza: '<path d="M12 21 3.5 6a14 14 0 0 1 17 0z" fill="#F2C14E" stroke="#B8862F" stroke-width="1.2"/><path d="M3.5 6a14 14 0 0 1 17 0l-1 1.8a12 12 0 0 0-15 0z" fill="#C8873A"/><circle cx="10" cy="11" r="1.5" fill="#B3263A"/><circle cx="14" cy="13" r="1.4" fill="#B3263A"/><circle cx="12" cy="16.5" r="1.1" fill="#B3263A"/>',
    burger: '<path d="M4 11a8 6 0 0 1 16 0z" fill="#D99A4E"/><rect x="3.5" y="12" width="17" height="2.4" rx="1.2" fill="#6B3E1F"/><path d="M3.5 15.5h17l-1 1.2h-15z" fill="#5BA35B"/><path d="M4.5 17.5h15a2.5 2.5 0 0 1-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5z" fill="#D99A4E"/>',
    taco: '<path d="M3 17a9 9 0 0 1 18 0z" fill="#F2C14E" stroke="#B8862F" stroke-width="1.2"/><path d="M6 12.5c1.5-1 2.5.5 4-.5s2.5.5 4-.5 2.5.5 4 0" stroke="#5BA35B" stroke-width="1.8" fill="none"/><circle cx="9" cy="14" r="1" fill="#B3263A"/><circle cx="14" cy="13.6" r="1" fill="#B3263A"/>',
    icecream: '<path d="M8 12h8l-4 10z" fill="#E8B07A" stroke="#B8862F" stroke-width="1.1"/><circle cx="12" cy="9" r="4.5" fill="#F7C6D4"/><circle cx="9" cy="11" r="2.6" fill="#FAF7F0"/><circle cx="15" cy="11" r="2.6" fill="#8B5A3C"/>',
    cocktail: '<path d="M4 5h16l-8 8z" fill="#F7C6D4" stroke="#B8862F" stroke-width="1.2"/><path d="M12 13v6M8.5 20h7" stroke="#B8862F" stroke-width="1.6" stroke-linecap="round"/><circle cx="16.5" cy="5" r="2" fill="#5BA35B"/>',
    wine: '<path d="M7 3h10c0 5-2 8-5 8S7 8 7 3z" fill="#8E2230" stroke="#B8862F" stroke-width="1.1"/><path d="M12 11v8M8.5 20h7" stroke="#B8862F" stroke-width="1.6" stroke-linecap="round"/>',
    beer: '<rect x="5" y="7" width="10" height="13" rx="1.5" fill="#F2C14E" stroke="#B8862F" stroke-width="1.2"/><path d="M15 9.5h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" fill="none" stroke="#B8862F" stroke-width="1.4"/><path d="M4.5 7.5a2 2 0 0 1 2-3 2.5 2.5 0 0 1 4-.5 2.4 2.4 0 0 1 4.2 1.2 1.8 1.8 0 0 1 .3 2.3z" fill="#FAF7F0"/>',
    bowling: '<path d="M10 3c2 0 2 3 1.5 5S14 13 13 17s-1 4-3 4-3-1-3-4-2.5-7-1.5-9S8 3 10 3z" fill="#FAF7F0" stroke="#6E4E14" stroke-width="1.1"/><path d="M8.6 8.3h2.8M8.2 9.7h3.6" stroke="#B3263A" stroke-width="1.1"/><circle cx="17" cy="16" r="4" fill="#23202A"/><circle cx="16" cy="14.8" r=".6" fill="#FAF7F0"/><circle cx="17.6" cy="14.6" r=".6" fill="#FAF7F0"/>',
    golf: '<path d="M8 3v17" stroke="#6E4E14" stroke-width="1.6" stroke-linecap="round"/><path d="M8 3.5l9 3-9 3z" fill="#B3263A"/><ellipse cx="12" cy="20" rx="8" ry="2" fill="#5BA35B"/><circle cx="15" cy="17.5" r="1.6" fill="#FAF7F0" stroke="#6E4E14" stroke-width=".6"/>',
    film: '<rect x="3" y="6" width="18" height="12" rx="2" fill="#23202A"/><path d="M5 8h2M5 11h2M5 14h2M17 8h2M17 11h2M17 14h2" stroke="#FAF7F0" stroke-width="1.4"/><path d="M10 9.5l5 2.5-5 2.5z" fill="#E8C46A"/>',
    music: '<path d="M9 17V6l10-2v11" fill="none" stroke="#6E4E14" stroke-width="1.6"/><circle cx="7" cy="17" r="2.6" fill="#B8862F"/><circle cx="17" cy="15" r="2.6" fill="#B8862F"/>',
    art: '<path d="M12 3a9 9 0 0 0 0 18c1.6 0 2-1.2 1.2-2.2-.9-1 .1-2.3 1.4-2.3H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5z" fill="#FAF7F0" stroke="#B8862F" stroke-width="1.1"/><circle cx="8" cy="10" r="1.4" fill="#B3263A"/><circle cx="11" cy="6.8" r="1.4" fill="#F2C14E"/><circle cx="15.2" cy="7.6" r="1.4" fill="#5BA35B"/><circle cx="7.6" cy="14.2" r="1.4" fill="#6E4E14"/>',
    flower: '<g fill="#F7C6D4"><circle cx="12" cy="7" r="3"/><circle cx="16.8" cy="10.5" r="3"/><circle cx="15" cy="16" r="3"/><circle cx="9" cy="16" r="3"/><circle cx="7.2" cy="10.5" r="3"/></g><circle cx="12" cy="12" r="2.6" fill="#F2C14E"/>',
    star: '<path d="M12 2.8l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="#F2C14E" stroke="#B8862F" stroke-width="1"/>'
  };
  function venueSticker(v, size) { size = size || 16; if (v.logo) return '<span class="vstick haslogo" title="' + esc(v.label) + (v.times > 1 ? " ×" + v.times : "") + ' · a thank-you from a SuiteFace Date Deal">' + logoBadge(v.logo, v.style, Math.round(size * 1.7)) + "<b>" + esc(v.label) + "</b>" + (v.times > 1 ? "<i>×" + v.times + "</i>" : "") + "</span>"; return '<span class="vstick" title="' + esc(v.label) + (v.times > 1 ? " ×" + v.times : "") + ' · a thank-you sticker from a SuiteFace Date Deal"><svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true">' + (VART[v.art] || VART.star) + "</svg><b>" + esc(v.label) + "</b>" + (v.times > 1 ? "<i>×" + v.times + "</i>" : "") + "</span>"; }
  function renderVenueStickPanel() {
    var el = $("#venueStickPanel"); if (!el || !liveOn()) return;
    lrpc("my_venue_stickers_v2").then(function (rows) { rows = rows || []; el.hidden = !rows.length; if (!rows.length) return;
      el.innerHTML = '<label>Date spot stickers</label><p class="hint">Earned when a venue honors your Date Deal, as a thank-you to the place that hosted your date. Choose which show on your card.</p><div class="vstickrow">' + rows.map(function (v) { return '<label class="chk">' + '<input type="checkbox" data-vshow="' + v.partner_id + '"' + (v.shown ? " checked" : "") + "> " + venueSticker(v, 18) + "</label>"; }).join("") + "</div>"; });
  }
  document.addEventListener("change", function (e) { var b = e.target.closest("[data-vshow]"); if (!b) return; lrpc("set_venue_sticker_shown", { p_partner: b.getAttribute("data-vshow"), p_shown: b.checked }).then(function () { toast(b.checked ? "It's on your card." : "Hidden from your card."); }, function (x) { toast(x.message); }); });
  document.addEventListener("sf:live", function () { if ((document.body.getAttribute("data-page") || "") === "club") setTimeout(renderVenueStickPanel, 900); });

  /* =====================================================================
     DATE DEALS: House Partner Comps for Pairs. Either player suggests a deal near both of them;
     when the other accepts, both get the same one-time code. The venue confirms it at redeem.html.
     ===================================================================== */
  function renderDeals(m, h) {
    var box = $("#ddBox", m); if (!box || !liveOn()) { if (box) box.innerHTML = '<p class="hint">Members with a Pair see deals from local venues here.</p>'; return; }
    var nm = esc((h.other_name || "your Pair").split(" ")[0]);
    Promise.all([lrpc("hand_comp_state", { p_hand: h.hand_id }).catch(function () { return []; }), lrpc("hand_comps_nearby", { p_hand: h.hand_id }).catch(function () { return []; })]).then(function (r) {
      if (!$("#ddBox", m)) return;
      var st = (r[0] || [])[0], list = r[1] || [], top = "";
      if (st && st.status === "agreed") top = '<div class="ddticket"><span class="ddt-ey">🎟️ Locked in · you both agreed</span><b>' + esc(st.title) + '</b><span>' + esc(st.venue_name) + (st.address ? " · " + esc(st.address) : "") + '</span><code class="ddcode">' + esc(st.code) + '</code><small>Show this code when you order. Good until ' + esc(new Date(st.expires_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })) + ". One use for the two of you." + (st.fine_print ? " " + esc(st.fine_print) : "") + '</small><button type="button" class="linkish" data-ddcancel="' + st.comp_id + '">Cancel this deal</button></div>';
      else if (st && st.status === "redeemed") top = '<div class="ddticket used"><span class="ddt-ey">✓ Used at ' + esc(st.venue_name) + '</span><b>' + esc(st.title) + '</b><small>Hope it was a great date. You both earned the ' + esc(st.venue_name) + ' thank-you sticker for your cards (My Face › Date spot stickers).</small></div>';
      else if (st && st.status === "proposed" && st.mine) top = '<div class="ddnote">You suggested <b>' + esc(st.title) + "</b> at " + esc(st.venue_name) + ". Waiting for " + nm + '. <button type="button" class="linkish" data-ddcancel="' + st.comp_id + '">Take it back</button></div>';
      else if (st && st.status === "proposed") top = '<div class="ddnote ask">' + nm + ' suggested <b>' + esc(st.title) + "</b> at " + esc(st.venue_name) + (st.details ? '<br><small>' + esc(st.details) + "</small>" : "") + '<div class="row"><button class="btn gold sm" type="button" data-ddyes="' + st.comp_id + '">Sounds good</button><button class="btn ghost sm" type="button" data-ddno="' + st.comp_id + '">Pick another</button></div></div>';
      var locked = st && st.status === "agreed";
      var cards = list.length ? '<div class="ddlist">' + list.map(function (o) { var on = st && st.title === o.title && st.venue_name === o.venue_name; return '<div class="ddcard' + (on ? " on" : "") + '"><span class="ddk">' + esc(({ restaurant: "Restaurant", bar: "Bar or lounge", coffee: "Coffee", dessert: "Dessert", activity: "Activity", arts: "Arts and music", outdoors: "Outdoors" })[o.kind] || "Venue") + " · " + esc(o.miles) + ' mi · <i>Sponsored</i></span><b>' + esc(o.title) + '</b><span class="ddv">' + esc(o.venue_name) + (o.city ? ", " + esc(o.city) : "") + "</span>" + (o.details ? "<small>" + esc(o.details) + "</small>" : "") + (o.fine_print ? '<small class="fine">' + esc(o.fine_print) + "</small>" : "") + (locked ? "" : '<button class="btn ' + (on ? "ghost" : "gold") + ' sm" type="button" data-ddpick="' + o.offer_id + '">' + (on ? "Suggested" : "Suggest this") + "</button>") + "</div>"; }).join("") + "</div>" : '<p class="hint">No Date Deals near you two yet. Know a great spot? Point them to <a href="contact.html">SuiteFace House Partners</a>.</p>';
      box.innerHTML = top + (locked ? "" : '<p class="hint">Pick a deal you\'d both enjoy. When ' + nm + " says yes, you both get the same code.</p>") + cards;
    });
    if (!box.__wired) {
      box.__wired = true;
      box.addEventListener("click", function (e) {
        var b, go = function (p) { p.then(function (x) { if (x === "agreed") { jackpot(2000); toast("It's a deal! Your code is ready."); } renderDeals(m, h); }, function (er) { toast((er && er.message) || "Try again."); }); };
        if ((b = e.target.closest("[data-ddpick]"))) go(lrpc("propose_comp", { p_hand: h.hand_id, p_offer: b.getAttribute("data-ddpick") }).then(function (x) { if (x === "proposed") toast("Suggested. We'll show " + (h.other_name || "your Pair").split(" ")[0] + "."); return x; }));
        else if ((b = e.target.closest("[data-ddyes]"))) go(lrpc("answer_comp", { p_comp: b.getAttribute("data-ddyes"), p_yes: true }));
        else if ((b = e.target.closest("[data-ddno]"))) go(lrpc("answer_comp", { p_comp: b.getAttribute("data-ddno"), p_yes: false }));
        else if ((b = e.target.closest("[data-ddcancel]"))) { if (confirm("Cancel this Date Deal?")) go(lrpc("cancel_comp", { p_comp: b.getAttribute("data-ddcancel") })); }
      });
      var t = setInterval(function () { if (!document.body.contains(box)) { clearInterval(t); return; } renderDeals(m, h); }, 8000);
    }
  }

  /* ---------- Venue page (redeem.html): venue code + PIN, check and redeem codes, manage deals ---------- */
  function venueCreds() { try { return JSON.parse(sessionStorage.getItem("sf.venue") || "null"); } catch (e) { return null; } }
  function renderVenue() {
    var root = $("#venueApp"); if (!root) return; var cr = venueCreds();
    if (!cr) {
      root.innerHTML = '<form class="panel form-grid" id="vLogin" novalidate><h3>Venue sign-in</h3><div class="field"><label for="vSlug">Venue code</label><input id="vSlug" autocomplete="username" placeholder="e.g. sawsbbq"></div><div class="field"><label for="vPin">PIN</label><input id="vPin" type="password" inputmode="numeric" autocomplete="current-password" placeholder="6 to 8 digits"></div><p class="err" id="vErr" role="alert"></p><button class="btn gold" type="submit">Sign in</button><p class="hint">Your venue code and PIN come from SuiteFace when you become a House Partner. Lost them? Email help@suiteface.com.</p></form>';
      return;
    }
    rpc("venue_dashboard", { p_slug: cr.s, p_pin: cr.p }).then(function (d) {
      root.innerHTML = '<div class="vhead"><div><p class="eyebrow">House Partner</p><h3>' + esc(d.venue.name) + '</h3></div><button class="btn ghost sm" type="button" id="vOut">Sign out</button></div>' +
        '<div class="vstats"><span><b>' + d.redeemed_month + '</b> redeemed this month</span><span><b>' + d.agreed_open + '</b> Pairs holding your code now</span><span><b>' + d.suggested_month + '</b> times suggested this month</span></div>' +
        '<div class="panel vlogo"><h3>Your thank-you sticker</h3><p class="hint">Pairs who use your Date Deal both earn your sticker on their SuiteFace cards. ' + d.stickers_out + ' cards carry it now. Upload your logo and pick a finish; we check every logo before it shows.</p>' +
        '<div class="vstyles" id="vStyles">' + ["pin", "patch", "coin"].map(function (st) { return '<button type="button" class="vstyle' + (d.venue.style === st ? " on" : "") + '" data-vstyle="' + st + '">' + (d.venue.logo_path ? logoBadge(d.venue.logo_path, st, 76) : '<span class="vnologo">' + venueSticker({ art: d.venue.art, label: d.venue.label }, 22) + "</span>") + "<span>" + { pin: "Enamel pin", patch: "Embroidered patch", coin: "Gold coin" }[st] + "</span></button>"; }).join("") + "</div>" +
        (d.venue.logo_path ? '<p class="hint">Logo status: <b>' + ({ pending: "Waiting for SuiteFace review", approved: "Approved and showing", declined: "Not approved. Please upload a different logo." }[d.venue.logo_review] || "") + "</b></p>" : "") +
        '<form class="form-grid" id="vLogoForm" novalidate><div class="field"><label for="vLogoFile">Logo (PNG, JPEG or WebP, up to 2 MB; a square logo on a plain background works best)</label><input type="file" id="vLogoFile" accept="image/png,image/jpeg,image/webp"></div><label class="chk"><input type="checkbox" id="vLogoOk"> We own this logo or are authorized to use it, and we let SuiteFace show it on member stickers and cards as described in the Business Partner Agreement.</label><p class="err" id="vLogoErr" role="alert"></p><div class="row"><button class="btn gold" type="submit">Upload logo</button></div></form></div>' +
        '<form class="panel form-grid vcheck" id="vCheck" novalidate><h3>Check a Date Deal code</h3><div class="row"><label class="sr" for="vCode">Code</label><input id="vCode" placeholder="SF-XXXXXX" autocapitalize="characters" autocomplete="off"><button class="btn gold" type="submit">Check</button></div><div id="vRes" aria-live="polite"></div></form>' +
        '<div class="panel"><h3>Your deals</h3><p class="hint">Up to 3 live at a time. New or changed deals go live after a quick SuiteFace review (usually within a day). $2.10 is billed for each code you redeem.</p><div id="vOffers">' +
        (d.offers.length ? d.offers.map(function (o) { return '<div class="cmrow"><span><b>' + esc(o.title) + "</b> · " + (o.review === "approved" ? (o.active ? "Live" : "Paused") : o.review === "pending" ? "In review" : "Not approved" + (o.review_note ? ": " + esc(o.review_note) : "")) + (o.ends_on ? " · ends " + esc(o.ends_on) : "") + "<br><small>" + esc(o.details || "") + '</small></span><span class="row"><button class="btn ghost sm" type="button" data-vedit=\'' + esc(JSON.stringify(o)) + '\'>Edit</button><button class="btn ghost sm" type="button" data-vtoggle="' + o.id + '" data-on="' + (o.active ? 1 : 0) + '">' + (o.active ? "Pause" : "Turn on") + "</button></span></div>"; }).join("") : '<p class="hint">No deals yet. Add your first one below.</p>') +
        '</div><form class="form-grid" id="vOffer" novalidate><input type="hidden" id="voId"><h4 style="margin:14px 0 0" id="voT">Add a deal</h4><div class="field"><label for="voTitle">Deal (what they get)</label><input id="voTitle" maxlength="80" placeholder="Free dessert to share for SuiteFace Pairs"></div><div class="field"><label for="voDet">Details</label><textarea id="voDet" rows="2" maxlength="400" placeholder="Show your code when you order. Dine-in only."></textarea></div><div class="field"><label for="voFine">Fine print</label><textarea id="voFine" rows="2" maxlength="400" placeholder="One per table. Not valid with other offers. 21+ for alcohol."></textarea></div><div class="field"><label for="voEnds">Ends on (optional)</label><input id="voEnds" type="date"></div><p class="err" id="voErr" role="alert"></p><div class="row"><button class="btn gold" type="submit">Send for review</button></div></form></div>';
    }, function (x) { sessionStorage.removeItem("sf.venue"); renderVenue(); setTimeout(function () { var e = $("#vErr"); if (e) e.textContent = x.message; }, 0); });
  }
  document.addEventListener("submit", function (e) {
    var f = e.target, cr = venueCreds();
    if (f.id === "vLogin") { e.preventDefault(); var s = $("#vSlug").value.trim(), p = $("#vPin").value.trim(); if (!s || !p) { $("#vErr").textContent = "Enter your venue code and PIN."; return; } rpc("venue_dashboard", { p_slug: s, p_pin: p }).then(function () { sessionStorage.setItem("sf.venue", JSON.stringify({ s: s, p: p })); renderVenue(); }, function (x) { $("#vErr").textContent = x.message; }); return; }
    if (f.id === "vCheck" && cr) { e.preventDefault(); var code = $("#vCode").value.trim(), out = $("#vRes"); if (!code) return; rpc("venue_check", { p_slug: cr.s, p_pin: cr.p, p_code: code, p_redeem: false }).then(function (r) { out.innerHTML = r.ok ? '<div class="vok"><b>✓ ' + esc(r.title) + '</b><span>' + esc(r.message) + "</span>" + (r.fine_print ? "<small>" + esc(r.fine_print) + "</small>" : "") + '<button class="btn gold" type="button" id="vRedeem" data-code="' + esc(code) + '">Redeem now</button></div>' : '<div class="vbad">✕ ' + esc(r.message) + "</div>"; }, function (x) { out.innerHTML = '<div class="vbad">' + esc(x.message) + "</div>"; }); return; }
    if (f.id === "vLogoForm" && cr) { e.preventDefault(); var file = $("#vLogoFile").files[0], er = $("#vLogoErr"); if (!file) { er.textContent = "Choose your logo file."; return; } if (!$("#vLogoOk").checked) { er.textContent = "Please confirm you can use this logo."; return; } if (file.size > 2097152) { er.textContent = "Logo must be 2 MB or smaller."; return; }
      var on = $("#vStyles .vstyle.on"), fd = new FormData(); fd.append("slug", cr.s); fd.append("pin", cr.p); fd.append("style", on ? on.getAttribute("data-vstyle") : "pin"); fd.append("rights", "yes"); fd.append("logo", file); er.textContent = "Uploading…";
      fetch(CFG.supabaseUrl + "/functions/v1/venue-logo", { method: "POST", headers: { Authorization: "Bearer " + CFG.supabaseKey, apikey: CFG.supabaseKey }, body: fd }).then(function (x) { return x.json(); }).then(function (j) { if (j.error) { er.textContent = j.error; return; } toast("Uploaded. We'll review it shortly."); renderVenue(); }, function () { er.textContent = "Upload failed. Try again."; }); return; }
    if (f.id === "vOffer" && cr) { e.preventDefault(); var t = $("#voTitle").value.trim(); if (t.length < 3) { $("#voErr").textContent = "Describe the deal in a few words."; return; } rpc("venue_save_offer", { p_slug: cr.s, p_pin: cr.p, p_id: $("#voId").value || null, p_title: t, p_details: $("#voDet").value, p_fine: $("#voFine").value, p_ends: $("#voEnds").value || null, p_active: null }).then(function () { toast("Sent. It goes live after a quick review."); renderVenue(); }, function (x) { $("#voErr").textContent = x.message; }); }
  });
  document.addEventListener("click", function (e) {
    var b, cr = venueCreds();
    if ((b = e.target.closest("[data-vstyle]")) && cr) { $$("#vStyles .vstyle").forEach(function (x) { x.classList.toggle("on", x === b); }); var fd = new FormData(); fd.append("slug", cr.s); fd.append("pin", cr.p); fd.append("style", b.getAttribute("data-vstyle")); fetch(CFG.supabaseUrl + "/functions/v1/venue-logo", { method: "POST", headers: { Authorization: "Bearer " + CFG.supabaseKey, apikey: CFG.supabaseKey }, body: fd }).catch(function () { }); return; }
    if (e.target.closest("#vOut")) { sessionStorage.removeItem("sf.venue"); renderVenue(); return; }
    if ((b = e.target.closest("#vRedeem")) && cr) { rpc("venue_check", { p_slug: cr.s, p_pin: cr.p, p_code: b.getAttribute("data-code"), p_redeem: true }).then(function (r) { $("#vRes").innerHTML = r.ok ? '<div class="vok"><b>✓ Redeemed: ' + esc(r.title) + "</b><span>" + esc(r.message) + "</span></div>" : '<div class="vbad">✕ ' + esc(r.message) + "</div>"; $("#vCode").value = ""; }, function (x) { toast(x.message); }); return; }
    if ((b = e.target.closest("[data-vedit]"))) { var o = JSON.parse(b.getAttribute("data-vedit")); $("#voId").value = o.id; $("#voTitle").value = o.title; $("#voDet").value = o.details || ""; $("#voFine").value = o.fine_print || ""; $("#voEnds").value = o.ends_on || ""; $("#voT").textContent = "Edit deal"; $("#voTitle").focus(); return; }
    if ((b = e.target.closest("[data-vtoggle]")) && cr) { var row = JSON.parse(b.closest(".cmrow").querySelector("[data-vedit]").getAttribute("data-vedit")); rpc("venue_save_offer", { p_slug: cr.s, p_pin: cr.p, p_id: row.id, p_title: row.title, p_details: row.details || "", p_fine: row.fine_print || "", p_ends: row.ends_on || null, p_active: b.getAttribute("data-on") !== "1" }).then(renderVenue, function (x) { toast(x.message); }); }
  });

  /* ---------- Owner: House Partners and deal review ---------- */
  function loadPartnerAdmin() {
    var pl = $("#partnerList"), rl = $("#offerReviewList"); if (!pl) return;
    var load = function () {
      lrpc("owner_partners_v3").then(function (rows) { rows = rows || []; pl.innerHTML = (rows.length ? rows.map(function (p) { return '<div class="cmrow"><span><b>' + esc(p.venue_name) + "</b> · code <code>" + esc(p.slug || "—") + "</code> · " + esc(p.zip) + " · " + esc(p.status) + (p.tier === "high_roller" ? " · High Roller" : "") + "<br><small>" + p.offers + " live deals · " + p.redeemed_month + " redeemed this month ($" + (p.redeemed_month * 2.1).toFixed(2) + ")" + (p.has_pin ? "" : " · no PIN yet") + "</small><br>" + venueSticker({ art: p.sticker_art, label: p.sticker_label || p.venue_name, logo: p.logo_path, style: p.sticker_style }, 16) + (p.logo_path && p.logo_review === "pending" ? ' <b class="pill warn">Logo waiting</b> <button class="btn gold sm" type="button" data-plogo="' + p.id + '" data-v="1">Approve logo</button><button class="btn ghost sm" type="button" data-plogo="' + p.id + '" data-v="0">Decline</button>' : "") + ' <label class="btn ghost sm upl">Upload logo<input type="file" accept="image/png,image/jpeg,image/webp" hidden data-pupload="' + p.id + '" data-style="' + esc(p.sticker_style || "pin") + '"></label></span><span class="row"><button class="btn ghost sm" type="button" data-pedit=\'' + esc(JSON.stringify(p)) + "'>Edit</button></span></div>"; }).join("") : '<p class="hint">No House Partners yet.</p>'); });
      if (rl) lrpc("review_offers").then(function (rows) { rows = rows || []; rl.innerHTML = rows.length ? rows.map(function (o) { return '<div class="cmrow"><span><b>' + esc(o.venue_name) + ":</b> " + esc(o.title) + "<br><small>" + esc(o.details || "") + (o.fine_print ? " · " + esc(o.fine_print) : "") + '</small></span><span class="row"><button class="btn gold sm" data-orule="' + o.id + '" data-v="1">Approve</button><button class="btn ghost sm" data-orule="' + o.id + '" data-v="0">Decline</button></span></div>'; }).join("") : '<p class="hint">No deals waiting.</p>'; });
    };
    load();
    var f = $("#partnerForm");
    if (f && !f.__w) { f.__w = true;
      f.addEventListener("submit", function (e) { e.preventDefault(); var g = function (id) { return $("#" + id).value.trim(); };
        lrpc("owner_save_partner", { p_id: g("ptId") || null, p_name: g("ptName"), p_slug: g("ptSlug"), p_zip: g("ptZip"), p_address: g("ptAddr"), p_kind: g("ptKind"), p_email: g("ptEmail"), p_status: g("ptStatus"), p_tier: g("ptTier"), p_pin: g("ptPin") || null })
          .then(function (id) { return lrpc("owner_set_partner_sticker", { p_id: id, p_art: g("ptArt"), p_label: g("ptLabel") }); })
          .then(function () { toast("Saved. Send the venue its code and PIN privately."); f.reset(); $("#ptId").value = ""; load(); }, function (x) { $("#ptErr").textContent = x.message; }); });
      pl.addEventListener("click", function (e) { var b = e.target.closest("[data-pedit]"); if (!b) return; var p = JSON.parse(b.getAttribute("data-pedit")); $("#ptId").value = p.id; $("#ptName").value = p.venue_name; $("#ptSlug").value = p.slug || ""; $("#ptZip").value = p.zip; $("#ptAddr").value = p.address || ""; $("#ptKind").value = p.kind || "restaurant"; $("#ptEmail").value = p.contact_email || ""; $("#ptStatus").value = p.status; $("#ptTier").value = p.tier; $("#ptArt").value = p.sticker_art || "star"; $("#ptLabel").value = p.sticker_label || ""; $("#ptName").focus(); });
      pl.addEventListener("click", function (e) { var b = e.target.closest("[data-plogo]"); if (!b) return; lrpc("rule_partner_logo", { p_id: b.getAttribute("data-plogo"), p_ok: b.getAttribute("data-v") === "1" }).then(function () { toast("Done."); load(); }); });
      pl.addEventListener("change", function (e) { var inp = e.target.closest("[data-pupload]"); if (!inp || !inp.files[0]) return; if (!confirm("Upload this logo for the venue? Only do this if the venue sent it to you and agreed to SuiteFace using it.")) return;
        window.SF_LIVE.client.auth.getSession().then(function (r) { var fd = new FormData(); fd.append("partner", inp.getAttribute("data-pupload")); fd.append("style", inp.getAttribute("data-style")); fd.append("rights", "yes"); fd.append("logo", inp.files[0]);
          return fetch(CFG.supabaseUrl + "/functions/v1/venue-logo", { method: "POST", headers: { Authorization: "Bearer " + r.data.session.access_token, apikey: CFG.supabaseKey }, body: fd }).then(function (x) { return x.json(); }); })
          .then(function (j) { toast(j.error || "Logo uploaded and approved."); load(); }, function () { toast("Upload failed."); }); });
      if (rl) rl.addEventListener("click", function (e) { var b = e.target.closest("[data-orule]"); if (!b) return; var ok = b.getAttribute("data-v") === "1"; lrpc("rule_offer", { p_id: b.getAttribute("data-orule"), p_ok: ok, p_note: ok ? null : (prompt("Note for the venue (they'll see it):", "") || null) }).then(function () { toast(ok ? "Approved. It's live for Pairs nearby." : "Declined."); load(); }); });
    }
  }
  document.addEventListener("sf:live", function () { if (ROLE === "owner" && (document.body.getAttribute("data-page") || "") === "club") setTimeout(loadPartnerAdmin, 1000); });
  document.addEventListener("change", function (e) { if (e.target.id !== "vLogoFile" || !e.target.files[0]) return; var u = URL.createObjectURL(e.target.files[0]); $$("#vStyles .vstyle").forEach(function (b) { var st = b.getAttribute("data-vstyle"), lab = b.querySelector("span:last-child").outerHTML; b.innerHTML = logoBadge(u, st, 76) + lab; }); });
  setTimeout(function () { if ((document.body.getAttribute("data-page") || "") === "redeem") renderVenue(); }, 0);

  /* ---------- launch popup: the first thing a new visitor sees ---------- */
  var params = new URLSearchParams(location.search), inv = params.get("ref") || params.get("invite");
  var seenOffer = S.get("offerSeen", 0);
  if (PAGE === "home" && !SIGNED && (inv || !seenOffer || Date.now() - seenOffer > 3 * 864e5)) {
    // Let visitors see the game first: an invite shows right away; everyone else sees the offer
    // only after scrolling halfway down the page, or after 40 seconds of looking around.
    var offerAt = function (fn) {
      if (inv) { setTimeout(fn, 1800); return; }
      var fired = false, go = function () { if (fired) return; var a = document.activeElement; if (a && /INPUT|TEXTAREA|SELECT/.test(a.tagName) || $("#modal")) { setTimeout(go, 20000); return; } fired = true; window.removeEventListener("scroll", sc); fn(); };
      var sc = function () { var d = document.documentElement; if ((window.scrollY + innerHeight) / d.scrollHeight > .5) go(); };
      window.addEventListener("scroll", sc, { passive: true }); setTimeout(go, 40000);
    };
    offerAt(function () {
      if (window.SF_LIVE || SIGNED || !LAUNCH.open || $("#modal")) return;
      S.set("offerSeen", Date.now());
      var m = modal('<div class="offerpop"><div class="offerchips" aria-hidden="true"><span class="sfchip waived" data-chip="21" data-size="104" data-label="$21 buy-in"></span><span class="sfchip" data-chip="2.10" data-size="132" data-spin data-label="a month"></span></div>' +
        '<h3>' + (inv ? "A friend saved you a seat." : "Your seat is on the house.") + '</h3>' +
        '<p class="lede">Launch offer: the $21 buy-in is waived through ' + esc(launchEndText()) + '. Join for $2.10 a month and cancel any time.</p>' +
        '<div class="row"><a class="btn gold" href="membership.html" data-gate data-close>Claim my seat</a><a class="textlink" href="find-your-suit.html" data-close>Find my suit first</a></div></div>');
      if (window.SFChips) window.SFChips.paint(m);
    });
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
    ["health", "Health a partner should know about (anything that could pass to someone through close contact)", "one", ["Nothing to share", "Yes, and I'll tell a match privately before we get close", "Prefer not to say"], 0, 1, "Love life"],
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
    ["health", "Health a partner should know", "many", ["Nothing to share", "Living with HSV (herpes)", "HIV, undetectable (U=U)", "HPV", "On treatment for an STI", "Another condition that can pass between partners"], 0, 1, "Love life"],
    ["zodiac", "Zodiac sign", "one", ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "I don't follow zodiac"], 0, 0, "Lifestyle"]
  ];
  var IDX = {}; IDF.forEach(function (f) { IDX[f[0]] = f; });
  POOL.forEach(function (p) { var q = rng(hash(p.id + "cmp")), K = ["cherries", "kiss", "hug", "goldbars", "talk", "clover", "seven", "horseshoe"], c = null; if (q() < .45) { c = {}; var n = 1 + ((q() * 3) | 0); while (n--) { var k = K[(q() * K.length) | 0]; c[k] = (c[k] || 0) + 1 + ((q() * 4) | 0); } } p.comps = c; });
  POOL.forEach(function (p) { var h = hash(p.id + "cb"), K = ["founders-night", "lucky-sevens", "magic-city", "midnight-neon", "sunday-best"]; p.cardBack = h % 100 < 30 ? K[h % 5] : null; });
  POOL.forEach(function (p) { var h = hash(p.id + "f1k"); p.founder = h % 100 < 14 ? 1 + (h % 997) : null; });
  POOL.forEach(function (p) { p.idV = hash(p.id + "idv") % 100 < 55; p.photoV = p.idV || hash(p.id + "pv") % 100 < 45; });
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
    look.innerHTML = '<div class="pmatch"><button type="button" class="btn gold sm" id="perfectMatch">✨ Perfect match</button><span class="hint">Copies your About me answers here in one tap (top 3 each). Then change anything you want different.</span></div><p class="hint">Pick <b>your top 3</b>, or leave <b>Open to anyone</b>. Tick <b>Dealbreaker if not…</b> and only people who match what you picked will make your hand. Without it, a match simply ranks them higher. Someone who chose "Prefer not to say" won\'t pass a dealbreaker.</p>' + groupHTML(true);
    var vfield = $(".verfield"); if (vfield) { vfield.removeAttribute("data-tab"); look.insertBefore(vfield, look.children[1] || null); }
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
    return '<div class="field pf" data-k="' + k + '"><div class="idhead"><span class="lbl">' + f[1].replace(" (check all that apply)", "") + '</span><label class="deal" title="Only people who match what you picked here can be dealt into your hand"><input type="checkbox" data-deal="' + k + '"> Dealbreaker if not…</label></div><div class="chips" role="group" aria-label="' + esc(f[1]) + ' preference">' +
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
      html = '<h3 class="win-t">Win! Second date with ' + nm + '</h3><p class="hint">Keep the Pair going. Check in again when you meet so the next hand counts.</p><button class="btn gold" type="button" data-again>Check in for date #' + (h.dates + 1) + "</button>" + compPicker(h.comps || [], false);
    } else if (h.stage === "loss") {
      html = '<h3>Loss</h3><p class="hint">' + (h.result === "joker" ? nm + " is now a <b>Joker</b> in your deck and won't be dealt to you again. If ten different people make the same call within 180 days, their card shows JOKER for 45 days." :
        h.result === "auto" ? "No Win from both of you within 24 hours of the Push, so this became an automatic Loss on " + fmtDate(h.endAt) + ". The card is burned. No Joker can be made." : nm + "'s card is burned. It won't be dealt to you again.") + "</p>";
    }
    box.innerHTML = html + safety;
    if (h.stage === "win") compWire(box, function (ks) { h.comps = (h.comps || []).concat(ks); saveG(); toast("Sent " + ks.length + " sticker" + (ks.length > 1 ? "s" : "") + " to " + p.name.split(" ")[0] + ". Nice play."); jackpot(1800); renderHand(m, p); });
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
    toast((how || "Location") + " set to " + z.city + ", " + z.st + " " + z.zip + ". Your hand was re-dealt.");
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
    player: ["Player", "A paid member: My Face, your hand, the Table Map, Pairs, Play Hand and invites."],
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
    var launchSeat = PLAN === "launch" && LAUNCH.open;
    var link = BILL === "year" ? (launchSeat ? CFG.stripeAnnualLaunchLink : CFG.stripeAnnualLink) : (launchSeat && CFG.stripeLaunchLink ? CFG.stripeLaunchLink : CFG.stripePaymentLink);
    if (!link) link = CFG.stripePaymentLink;
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
    $$("a[data-need]").forEach(function (a) { var n = a.getAttribute("data-need"); a.hidden = a.classList.contains("clubnav") ? !(SIGNED || ROLE !== "guest") : n !== "member" ? !allowed(n) : false; });
    if (typeof navGroups === "function") navGroups();
    $$("section[data-need]").forEach(function (sec) {
      var need = sec.getAttribute("data-need"), ok = allowed(need), wrap = sec.querySelector(":scope > .wrap");
      if (need !== "member") { sec.hidden = !ok; if (ok) renderConsole(sec.id); return; }
      sec.hidden = false; if (wrap) wrap.hidden = !ok;
      var lock = sec.querySelector(":scope > .lockpanel");
      if (lock && lock.getAttribute("data-s") !== String(SIGNED)) { lock.remove(); lock = null; }
      if (!ok && !lock) {
        lock = document.createElement("div"); lock.className = "lockpanel wrap"; lock.setAttribute("data-s", String(SIGNED));
        var t = { face: "Build your Face", table: "Your Hand", map: "The Table Map", invite: "Invite friends to the table" }[sec.id] || "Members only";
        lock.innerHTML = '<div class="lockcard"><span class="lockicon" aria-hidden="true">' + pip("spade") + '</span><div><p class="eyebrow">Players only</p><h3>' + t + '</h3><p class="hint">' + (SIGNED ? (LAUNCH.open ? "You're signed in. Take your seat for $2.10 a month: the $21 Buy-In is waived through " + launchEndText() + "." : "You're signed in. Finish your Buy-In to take your seat: $21.00 once, then $2.10 a month.") + ' <a href="membership.html#pvHand">See your real hand first ›</a>' : (LAUNCH.open ? "Take a seat to play: $2.10 a month, with the $21 Buy-In waived through " + launchEndText() + ". Already a player? Log in." : "Buy in to play: $21.00 once, then $2.10 a month. Already a player? Log in.")) + '</p><div class="row"><a class="btn gold sm" href="#membership">' + (LAUNCH.open ? "Take a seat · $2.10" : "Buy in · $21") + '</a>' + (SIGNED ? "" : '<button class="btn ghost sm" type="button" data-login>Log in</button>') + '<a class="btn ghost sm" href="#demo">Watch the demo</a></div></div></div>';
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
      '<p class="lede" style="margin:4px 0 12px" id="lvL">' + (create ? "One account for your Face, your hand and every hand you play. Your $21 Buy-In comes next." : "Welcome back to the table.") + '</p>' +
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
      ["The deal", "Jane's Hand is dealt", "Jane trumps Diamonds. Joe lands in her hand as the Ace of Diamonds, her best fit nearby.", { a: 0, b: 1 }],
      ["The play", "Both play", "Jane plays Joe's card. Joe, across town, holds Jane as his Ace of Hearts and plays hers too.", { a: 1, b: 1 }],
      ["Pair of Aces", "Pair of Aces!", "Two Aces. The lights go wild and the Side Table opens so they can plan a date.", { pair: 1, aces: 1 }],
      ["Check in", "Play Hand", "Saturday, 7:02 pm. They both tap Check in at the restaurant. Both phones flash PLAY HAND.", { play: 1 }],
      ["Call it", "Win", "They both call it a Win: second date. The Pair stays, and they'll check in again next time.", { win: 1 }]] },
    { name: "The Push", cast: [["Maya", "club", "Q"], ["Malik", "spade", "9"]], steps: [
      ["The pair", "A Pair", "Maya holds Malik as the 9 of Spades. Malik holds Maya as the Queen of Clubs. They both play.", { pair: 1 }],
      ["Play Hand", "Coffee date", "They check in at a coffee shop. Play Hand.", { play: 1 }],
      ["Push", "Maya calls Push", "Fun date. Maya asks about a second one and waits for Malik to answer.", { push: 1 }],
      ["Seven days", "No answer in 7 days", "A week passes with no reply. The hand becomes an automatic Loss. The card burns, and no Joker can be made.", { loss: 1 }]] },
    { name: "Joker window", cast: [["Priya", "heart", "K"], ["Jordan", "diamond", "J"]], steps: [
      ["Play Hand", "Dinner at 7", "Priya and Jordan check in. Play Hand at 7:10 pm.", { play: 1 }],
      ["Loss", "A disaster", "Jordan was rude to the server and on his phone all night. At 9:40 pm Priya calls it a Loss.", { loss: 1 }],
      ["Joker", "Make a Joker", "It's 2.5 hours after Play Hand, inside the 12-hour window, so Priya makes Jordan a Joker in her deck.", { joker: 1 }],
      ["The meter", "Others see 4/10", "Other members holding Jordan's card now see Jokers 4/10. Jordan never sees his own count.", { meter: 4 }]] },
    { name: "Too late to Joker", cast: [["Chris", "spade", "7"], ["Grace", "club", "5"]], steps: [
      ["Play Hand", "Brunch", "Chris and Grace check in at brunch. Play Hand at 11:00 am.", { play: 1 }],
      ["Next day", "Two days later", "Chris finally calls the hand: Loss.", { loss: 1 }],
      ["Burn only", "Burn the card", "The 12-hour Joker window closed long ago, so he can only burn Grace's card. Burns are private.", { burn: 1 }]] }
  ];
  var dS = 0, dI = 0, dTimer = null;
  function demoCard(c, flags, side) {
    var red = SUIT[c[1]].red, cls = "dcard" + (red ? " red" : "") + (flags.joker && side === 1 ? " jk" : "") + (flags.burn && side === 1 ? " burnt" : "") + ((flags.loss || flags.burn) && side === 1 && !flags.joker ? " dim" : "");
    var face = flags.joker && side === 1 ? '<span class="jhat">' + BRAND.hat + '</span><b>JOKER</b>' : '<span class="ix">' + c[2] + pip(c[1]) + '</span><img class="dph" src="assets/people/' + c[0].toLowerCase() + '.webp" alt="" loading="lazy"><span class="nm">' + c[0] + '</span><span class="st">' + SUIT[c[1]].sym + " " + SUIT[c[1]].name + "</span>";
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
    var KINDS = [["friendship", "", "Friendship"], ["faith", "", "Faith small group"], ["prayer", "", "Prayer group"], ["service", "", "Service & volunteering"], ["games", "", "Board games"], ["greek", "", "Greek life"], ["alumni", "", "Alumni"], ["club", "", "Club"], ["sports", "", "Sports & fitness"], ["hobby", "", "Hobbies"], ["parents", "", "Parents"], ["flirty18", "", "18+ Flirty"], ["lifestyle", "", "🍍 Lifestyle (couples & singles)"], ["other", "", "Other"]];
    var KIND = {}; KINDS.forEach(function (k) { KIND[k[0]] = k; });
    var WHO = { everyone: "Everyone", men: "Men only", women: "Women only" };
    var US_STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","PR"];
    function reach(c) { return c.scope === "national" ? "Nationwide" : c.scope === "states" && (c.states || []).length ? (c.states || []).join(", ") : "ZIP " + (c.zips || []).slice(0, 7).join(", ") + ((c.zips || []).length > 7 ? " +" + ((c.zips || []).length - 7) : ""); }
    /* EXAMPLE TABLES (fictional): one of every kind around ZIP 35242, so the room never looks empty.
       Always labeled "Example", no real people, can't be joined. They switch off by themselves once 12 paying
       members live within 25 miles of 35242 (example_tables_on in the database). */
    var EXZ = ["35242", "35243", "35244", "35216", "35226", "35213", "35043"];
    var EX_ART = "assets/brand/table-art-skyline.jpg", EX_SIGN = "assets/brand/suiteface-vegas-sign-heart-1600w.png";
    var EXAMPLES = [
      { id: "ex1", kind: "friendship", name: "Greystone Friday Friends", about: "New to the area? Friday dinners, pickleball and a standing invite to whatever's going on.", who: "everyone", join_mode: "open", seats: 24, seated: 17, style: { felt: "emerald", rail: "gold", shape: "oval", tagline: "Everybody needs a crew", city: "Birmingham, AL (35242)", amenities: ["food", "free"], welcome: "Pull up a chair. First dinner's on the house." }, tables: [{ name: "Friday Dinner", meets: "Fri 7pm · Lee Branch" }, { name: "Sunday Pickleball", meets: "Sun 9am · Veterans Park" }] },
      { id: "ex2", kind: "faith", name: "Inverness Iron Sharpens Iron", about: "A small group of Christian men. Coffee, Scripture and honest talk.", who: "men", join_mode: "request", seats: 12, seated: 9, style: { felt: "wine", rail: "walnut", shape: "round", themes: ["christian"], amenities: ["coffee", "prayer_space", "free"], tagline: "Iron sharpens iron", city: "Birmingham, AL (35242)" }, tables: [{ name: "Tuesday Table", meets: "Tue 6:30am · coffee shop" }, { name: "Serve Saturday", meets: "First Sat · food pantry" }] },
      { id: "ex3", kind: "prayer", name: "Cahaba Morning Prayer", about: "Fifteen quiet minutes of prayer before work, with anyone who wants to join.", who: "everyone", join_mode: "open", seats: 30, seated: 21, style: { felt: "plum", rail: "silver", shape: "oval", themes: ["faith"], amenities: ["prayer_space", "free", "accessible"], tagline: "Start the day still", city: "Birmingham, AL (35243)" }, tables: [{ name: "Weekday Prayer", meets: "Mon–Fri 6:45am · online" }] },
      { id: "ex4", kind: "service", name: "280 Helping Hands", about: "Monthly service projects around Highway 280. Bring a friend and some gloves.", who: "everyone", join_mode: "open", seats: 52, seated: 38, style: { felt: "olive", rail: "gold", shape: "long", themes: ["service", "outdoors"], amenities: ["family", "free"], tagline: "Many hands, light work", city: "Birmingham, AL (35242)" }, tables: [{ name: "Park Cleanup", meets: "2nd Sat 8am" }, { name: "Meal Packing", meets: "Last Thu 6pm" }] },
      { id: "ex5", kind: "games", name: "Magic City Game Night", about: "Board games, card games, snacks. Beginners always welcome.", who: "everyone", join_mode: "open", seats: 24, seated: 22, style: { felt: "plum", rail: "ebony", shape: "long", themes: ["games"], amenities: ["food", "late_night"], tagline: "Roll for initiative", city: "Birmingham, AL (35216)", img: EX_SIGN, img_area: "center", img_fit: "fit" }, tables: [{ name: "Thursday Strategy", meets: "Thu 7pm" }, { name: "Party Games", meets: "Sat 8pm" }] },
      { id: "ex6", kind: "greek", name: "Over the Mountain Greek Alumni", about: "Fraternity and sorority alumni of every chapter. Networking, tailgates and service.", who: "everyone", join_mode: "request", seats: 52, seated: 31, style: { felt: "wine", rail: "gold", shape: "oval", themes: ["greek", "alumni"], amenities: ["food"], tagline: "Bonds for life", city: "Birmingham, AL (35213)" }, tables: [{ name: "Monthly Mixer", meets: "3rd Thu 6pm" }] },
      { id: "ex7", kind: "alumni", name: "Alumni Brunch Club", about: "Grads who moved here and want a monthly brunch crew. Any school, any year.", who: "everyone", join_mode: "request", seats: 14, seated: 13, style: { felt: "charcoal", rail: "rose_gold", shape: "round", themes: ["alumni", "food"], amenities: ["food", "coffee"], tagline: "Once a grad, always a grad", city: "Birmingham, AL (35242)" }, tables: [{ name: "First Sunday Brunch", meets: "1st Sun 11am" }] },
      { id: "ex8", kind: "club", name: "Liberty Park Book & Bourbon", about: "One book a month and a good conversation. Bourbon optional, opinions required.", who: "everyone", join_mode: "request", seats: 16, seated: 12, style: { felt: "emerald", rail: "walnut", shape: "round", amenities: ["late_night"], tagline: "Chapter and verse", city: "Birmingham, AL (35242)", icon: "star" }, tables: [{ name: "Book Night", meets: "Last Wed 7pm" }] },
      { id: "ex9", kind: "sports", name: "Oak Mountain Trail Runners", about: "Easy, social trail runs. No one gets left behind, ever.", who: "everyone", join_mode: "open", seats: 40, seated: 27, style: { felt: "emerald", rail: "silver", shape: "long", themes: ["sports", "outdoors"], amenities: ["free", "pets"], tagline: "Run happy", city: "Pelham, AL (35124)", img: EX_ART, img_area: "full", img_fit: "fill" }, tables: [{ name: "Saturday Long Run", meets: "Sat 7am" }, { name: "Tuesday Hills", meets: "Tue 6pm" }] },
      { id: "ex10", kind: "hobby", name: "Hoover Paint & Sip", about: "Paint along with a local artist. No talent required, laughs guaranteed.", who: "everyone", join_mode: "open", seats: 20, seated: 14, style: { felt: "desert", rail: "rose_gold", shape: "oval", themes: ["art"], amenities: ["coffee"], tagline: "Happy little accidents", city: "Hoover, AL (35226)" }, tables: [{ name: "Canvas Night", meets: "2nd Fri 7pm" }] },
      { id: "ex11", kind: "parents", name: "Chelsea Parents Play Club", about: "Parents of little ones. Park meetups, swaps and a group chat that actually helps.", who: "everyone", join_mode: "request", seats: 30, seated: 26, style: { felt: "rose", rail: "gold", shape: "round", themes: ["parents"], amenities: ["family", "free", "accessible"], tagline: "It takes a village", city: "Chelsea, AL (35043)" }, tables: [{ name: "Park Morning", meets: "Wed 9:30am" }] },
      { id: "ex12", kind: "flirty18", name: "Friday Flirt Night", about: "Adults only, ID-verified. A light speed-flirting game, then everyone mingles. Respect first, always.", who: "everyone", join_mode: "request", seats: 24, seated: 18, style: { felt: "wine", rail: "rose_gold", shape: "oval", amenities: ["late_night"], tagline: "Shuffle up and flirt", city: "Birmingham, AL (35242)" }, tables: [{ name: "Speed-Flirt Rounds", meets: "Fri 8pm" }] },
      { id: "ex13", kind: "lifestyle", name: "Pineapple Social", about: "A welcoming social for open-minded couples and singles, 21+. Meet and talk in a public lounge. No explicit content.", who: "everyone", join_mode: "request", seats: 20, seated: 11, style: { felt: "plum", rail: "gold", shape: "oval", amenities: ["late_night"], tagline: "Good company only", city: "Birmingham, AL (35244)" }, tables: [{ name: "Lounge Night", meets: "2nd Sat 8pm" }] },
      { id: "ex14", kind: "other", name: "Highway 280 Dog Pack", about: "Dog owners who like walks, patios and other dog owners.", who: "everyone", join_mode: "open", seats: 30, seated: 19, style: { felt: "olive", rail: "walnut", shape: "round", themes: ["animal", "outdoors"], amenities: ["pets", "outdoor_seating", "free"], tagline: "Who's a good table", city: "Birmingham, AL (35242)", icon: "paw" }, tables: [{ name: "Patio Pups", meets: "Sun 2pm" }] }
    ];
    /* Each example table's Host card, written to fit the table. Fictional and illustrated (no photos), so an example host
       can never be mistaken for a real player or recognized as a House Card at the Bluff Table. */
    var EX_HOST = (window.SFCasino && window.SFCasino.EX_HOST) || {};
    EXAMPLES.forEach(function (c, i) { c.example = true; c.zips = [EXZ[i % EXZ.length]]; c.members = (c.seated || 0) + 1; c.host_handle = null; var h = EX_HOST[c.id]; if (h) { c.host = Object.assign({ since: 2026 }, h); c.seating = h.seating; } });
    var exOn = true; rpc("example_tables_on", {}).then(function (r) { exOn = !r || r.on !== false; }, function () { });
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
        '<div class="field"><label for="cdWelcome">Welcome note from you</label><textarea id="cdWelcome" maxlength="280" rows="2" placeholder="Pull up a chair. All are welcome here.">' + esc(st.welcome || "") + "</textarea></div>" +
        '<div class="cdes-grid"><div class="field"><label for="cdIcon">Center icon</label><select id="cdIcon">' + opt(SC.ICON_NAMES, st.icon || "auto") + "</select></div></div>" +
        '<div class="field cdimg"><span class="lbl">Your image on the felt <span class="hint">(optional)</span></span>' +
        '<input type="file" id="cdImg" accept="image/jpeg,image/png,image/webp" aria-label="Choose an image for your table">' +
        (st.img ? '<label class="ck"><input type="checkbox" id="cdImgRm"> <span>Remove the current image</span></label>' : "") +
        '<div class="cdes-grid"><div class="field"><label for="cdArea">Where</label><select id="cdArea">' + opt([["full", "The whole table"], ["center", "Just the center"]], st.img_area || "full") + '</select></div>' +
        '<div class="field"><label for="cdFit">How it fits</label><select id="cdFit">' + opt([["fill", "Fill (crop to the table)"], ["fit", "Fit (show it all)"], ["focus", "Focus and zoom (pick a portion)"]], st.img_fit || "fill") + "</select></div></div>" +
        '<div class="cdes-grid cdfocus"' + ((st.img_fit || "fill") === "focus" ? "" : " hidden") + '><div class="field"><label for="cdX">Left ↔ right</label><input type="range" id="cdX" min="0" max="100" value="' + (st.img_x == null ? 50 : st.img_x) + '"></div><div class="field"><label for="cdY">Top ↕ bottom</label><input type="range" id="cdY" min="0" max="100" value="' + (st.img_y == null ? 50 : st.img_y) + '"></div><div class="field"><label for="cdZ">Zoom</label><input type="range" id="cdZ" min="1" max="3" step="0.05" value="' + (st.img_zoom || 1) + '"></div></div>' +
        '<p class="hint">JPEG, PNG or WebP up to 3 MB. It\'s cropped to your table\'s shape, and the card spots always stay on solid felt. Images show to others after a quick SuiteFace check. Use only photos you own or have permission to use; no people without their OK, no children, nothing explicit.</p></div></fieldset>';
    }
    function readDesign(m) {
      if (!$("#cdFelt", m)) return {};
      return { felt: $("#cdFelt", m).value, rail: $("#cdRail", m).value, shape: $("#cdShape", m).value, c1: $("#cdC1", m).value,
        themes: $$('input[name="cdTheme"]:checked', m).map(function (x) { return x.value; }), amenities: $$('input[name="cdAm"]:checked', m).map(function (x) { return x.value; }),
        tagline: $("#cdTag", m).value.trim(), city: $("#cdCity", m).value.trim(), welcome: $("#cdWelcome", m).value.trim(),
        icon: $("#cdIcon", m) ? $("#cdIcon", m).value : "auto", img_area: $("#cdArea", m) ? $("#cdArea", m).value : "full", img_fit: $("#cdFit", m) ? $("#cdFit", m).value : "fill",
        img_x: $("#cdX", m) ? +$("#cdX", m).value : 50, img_y: $("#cdY", m) ? +$("#cdY", m).value : 50, img_zoom: $("#cdZ", m) ? +$("#cdZ", m).value : 1,
        img_remove: !!($("#cdImgRm", m) && $("#cdImgRm", m).checked),
        img_preview: ($("#cdImgRm", m) && $("#cdImgRm", m).checked) ? null : (m.__imgUrl || m.__curImg || null) };
    }
    /* After a table's design is saved: upload a new felt image (if one was chosen) and send it for review. */
    function saveTableArt(m, casinoId) {
      var f = m.__imgFile; if (!f || !window.SF_LIVE || !window.SF_LIVE.client) return Promise.resolve(false);
      if (f.size > 3145728) { toast("That image is over 3 MB. Pick a smaller one."); return Promise.resolve(false); }
      var ext = ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" })[f.type]; if (!ext) { toast("Use a JPEG, PNG or WebP image."); return Promise.resolve(false); }
      var path = window.SF_LIVE.memberId() + "/" + (crypto.randomUUID ? crypto.randomUUID() : Date.now()) + "." + ext;
      return window.SF_LIVE.client.storage.from("table-art").upload(path, f, { contentType: f.type }).then(function (r) { if (r.error) throw r.error; return call("submit_casino_art", { p_casino: casinoId, p_path: path }); })
        .then(function () { toast("Image sent for a quick check. It shows to others once approved."); return true; }, function (x) { toast((x && x.message) || "The image didn't upload. Try again."); return false; });
    }
    function fillDesign(m, dz) {
      if (!$("#cdFelt", m) || !dz) return;
      if (dz.felt) { $("#cdFelt", m).value = dz.felt; m.__feltTouched = true; } if (dz.rail) $("#cdRail", m).value = dz.rail; if (dz.shape) $("#cdShape", m).value = dz.shape; if (dz.c1) $("#cdC1", m).value = dz.c1;
      $$('input[name="cdTheme"]', m).forEach(function (x) { x.checked = (dz.themes || []).indexOf(x.value) > -1; });
      $$('input[name="cdAm"]', m).forEach(function (x) { x.checked = (dz.amenities || []).indexOf(x.value) > -1; });
      $("#cdTag", m).value = dz.tagline || ""; $("#cdCity", m).value = dz.city || ""; $("#cdWelcome", m).value = dz.welcome || "";
      if ($("#cdIcon", m) && dz.icon) $("#cdIcon", m).value = dz.icon; if ($("#cdArea", m) && dz.img_area) $("#cdArea", m).value = dz.img_area; if ($("#cdFit", m) && dz.img_fit) $("#cdFit", m).value = dz.img_fit;
    }
    function wireDesigner(m, getTable, previewEl) {
      if (!SC || !previewEl) return;
      function draw() { var c = getTable(); if (m.__curImg === undefined) m.__curImg = (c.style && c.style.img) || null; c.style = readDesign(m); $("#cdCustom", m).hidden = c.style.felt !== "custom"; var fo = $(".cdfocus", m); if (fo) fo.hidden = c.style.img_fit !== "focus"; SC.render(previewEl, c); }
      m.__draw = draw;
      var fi = $("#cdImg", m); if (fi) fi.addEventListener("change", function () { var f = fi.files[0]; if (m.__imgUrl) URL.revokeObjectURL(m.__imgUrl); m.__imgFile = f || null; m.__imgUrl = f ? URL.createObjectURL(f) : null; draw(); });
      m.addEventListener("input", function (e) { if (e.target.closest(".cdes") || /^cb(Name|Kind|Seats)$/.test(e.target.id)) draw(); });
      m.addEventListener("change", function (e) { if (e.target.closest(".cdes") || /^cb(Kind|Seats)$/.test(e.target.id)) draw(); });
      draw();
    }
    function seatsLine(c) { if (c.seats == null) return ""; var open = Math.max(0, c.seats - (c.seated || 0)); return open ? open + " of " + c.seats + " seats open" : "Full · " + c.seats + " seats"; }

    if (SC && $("#casArt")) $("#casArt").innerHTML = SC.svg({ name: "Your name here", kind: "friendship", seats: 12, seated: 7, style: { felt: "wine", rail: "gold", tagline: "Pull up a chair" } });
    $("#casKind").innerHTML = '<option value="">All tables</option>' + KINDS.map(function (k) { return '<option value="' + k[0] + '">' + (k[1] ? k[1] + " " : "") + esc(k[2]) + "</option>"; }).join("");
    $("#casKind").addEventListener("change", function () { kindPick = this.value; find(); });
    $("#casFind").addEventListener("submit", function (e) { e.preventDefault(); find(); });
    $("#casZip").addEventListener("input", function () { this.value = this.value.replace(/\D/g, "").slice(0, 5); });

    function card(c, example) {
      var t = (c.tables || []);
      return '<button type="button" class="cascard' + (example ? " ex" : "") + '" data-cas="' + esc(c.id) + '">' +
        (SC && c.style ? '<span class="casthumb" aria-hidden="true">' + SC.svg(c, { dark: true }) + "</span>" : "") +
        (example ? '<span class="exbadge">Example · fictional</span>' : "") +
        '<span class="casmarq"><i>' + esc(KIND[c.kind] ? KIND[c.kind][1] : "🃏") + "</i>" + esc(c.name) + "</span>" +
        '<span class="casmeta">' + esc(kindLabel(c.kind)) + " · " + esc(WHO[c.who] || "Everyone") + " · " + (c.join_mode === "open" ? "Open to join" : "Host approves") + "</span>" +
        (c.about ? '<span class="casabout">' + esc(c.about) + "</span>" : "") +
        '<span class="castables">' + t.slice(0, 3).map(function (x) { return "<em>" + esc(x.name) + (x.meets ? " · " + esc(x.meets) : "") + "</em>"; }).join("") + (t.length > 3 ? "<em>+" + (t.length - 3) + " more</em>" : "") + "</span>" +
        '<span class="casfoot">' + (c.host_handle ? "Host @" + esc(c.host_handle) : example ? '<b class="exb">Example host · fictional</b>' : "Hosted by a player") + " · " + (seatsLine(c) || (c.members || 1) + " player" + ((c.members || 1) === 1 ? "" : "s")) + (c.my_status ? ' · <b>' + esc({ host: "You host this", member: "You're in", requested: "Request sent" }[c.my_status] || "") + "</b>" : "") + "</span>" + casCta(c, example) + "</button>";
    }
    // Every table card says plainly whether you can sit down now, with the one button that does it.
    function casGroup(c) { return { about: c.about, guide: c.guide || (c.host && c.host.guide) || null, seating: c.seating || "first_come", bits: [WHO[c.who] || "Everyone welcome", seatsLine(c), (c.tables || []).length ? (c.tables.length + " game" + (c.tables.length === 1 ? "" : "s")) : ""] }; }
    function casCta(c, example) {
      var full = c.seats != null && (c.seated || 0) >= c.seats;
      var st = example ? ["ex", "👀 Example table", "Walk in and look around ›", "walk"]
        : c.my_status === "host" ? ["in", "♠ You host this", "Run your table ›", "open"]
        : c.my_status === "member" ? ["in", "✓ You're seated", "Walk in ›", "walk"]
        : c.my_hold ? ["open", "🎟 A seat is saved for you", "Take your seat ›", "join"]
        : c.my_status === "requested" ? ["wait", "⏳ Request sent", "The Host will let you in", ""]
        : full ? ["full", "Full right now", "Join the waitlist ›", "join"]
        : c.seating === "reserved" ? ["ask", "🔒 Reservations only", "Ask for a seat ›", "join"]
        : c.join_mode === "open" ? ["open", "🟢 Free play · seats open now", "Join free ›", "join"]
        : ["ask", "🟡 Host approves", "Ask to join ›", "join"];
      return '<span class="cascta cs-' + st[0] + '"><span class="csstat">' + st[1] + "</span>" + (st[3] ? '<span class="csgo" data-casgo="' + st[3] + '">' + st[2] + "</span>" : '<span class="csnote">' + st[2] + "</span>") + "</span>";
    }
    function show(list, note) {
      lastList = list;
      var box = $("#casList"), z = ($("#casZip") && $("#casZip").value) || "", q = (($("#casQ") && $("#casQ").value) || "").trim().toLowerCase();
      var ex = EXAMPLES.filter(function (c) { return (!kindPick || c.kind === kindPick) && (!q || c.name.toLowerCase().indexOf(q) > -1); });
      var near = !z || /^35(0|1|2)\d\d$/.test(z);
      var exHTML = exOn && ex.length ? '<p class="hint casempty exnote"><b>Example tables near 35242.</b> These are fictional samples so you can see how Private Tables work. Walk in, look around, then build your own. They disappear once real tables fill the area.</p>' + ex.map(function (c) { return card(c, true); }).join("") : "";
      if (list.length) { box.innerHTML = list.map(function (c) { return card(c, false); }).join("") + (near ? exHTML : ""); return; }
      box.innerHTML = '<p class="hint casempty">' + esc(note || "No Private Tables open here yet. Be the first to build one.") + "</p>" + (exHTML || '<p class="hint">Here\'s what one looks like:</p>' + EXAMPLES.slice(0, 2).map(function (c) { return card(c, true); }).join(""));
    }
    function find() {
      var zip = $("#casZip").value, q = $("#casQ").value.trim();
      if (!CFG.supabaseUrl) { show([], "Preview mode."); return; }
      $("#casList").innerHTML = '<p class="hint">Shuffling the floor…</p>';
      call("casino_search", { p_zip: zip || null, p_kind: kindPick || null, p_q: q || null }).then(function (r) {
        r = r || []; show(r);
        if (r.length) call("casino_styles", { p_ids: r.map(function (x) { return x.id; }) }).then(function (st) { (st || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) c.style = x.style; }); }); }, function () { });
        if (r.length) call("casino_seats_v2", { p_ids: r.map(function (x) { return x.id; }) }).then(function (sv) { (sv || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) { c.seats = x.seats; c.seated = x.seated; c.seating = x.seating; c.my_hold = x.my_hold; } }); }); if (lastList === r) show(r); }, function () { });
        if (r.length) call("casino_coverage", { p_ids: r.map(function (x) { return x.id; }) }).then(function (cv) { (cv || []).forEach(function (x) { r.forEach(function (c) { if (c.id === x.id) { c.scope = x.scope; c.states = x.states; } }); }); }, function () { });
      }, function () { show([], "Private Tables couldn't load right now."); });
    }
    $("#casList").addEventListener("click", function (e) {
      var b = e.target.closest("[data-cas]"); if (!b) return; var id = b.getAttribute("data-cas"), ex = /^ex/.test(id);
      var c = lastList.filter(function (x) { return x.id === id; })[0] || EXAMPLES.filter(function (x) { return x.id === id; })[0]; if (!c) return;
      var go = e.target.closest("[data-casgo]"), act = go && go.getAttribute("data-casgo");
      if (act === "walk") { if (ex) { try { sessionStorage.setItem("sf.demoCasino", JSON.stringify(Object.assign({}, c, { my_status: null, status: "open" }))); } catch (er) { } location.href = "private-table.html?demo=1"; } else location.href = "private-table.html?c=" + encodeURIComponent(c.id); return; }
      openCasino(c, ex);
      if (act === "join") { var j = $("#cjJoin"); if (j) j.click(); }
    });

    function needLogin(after) {
      try { sessionStorage.setItem("sf.after", after); } catch (e) { }
      toast("Sign in or create a free account first.");
      loginModal("create");
    }

    function openCasino(c, example) {
      var host = c.my_status === "host";
      var m = modal((SC ? '<div id="cjScene"></div>' : '<div class="casign big" aria-hidden="true"><span>' + esc(kindLabel(c.kind)) + "</span><b>" + esc(c.name) + "</b><span>Host @" + esc(c.host_handle || "host") + "</span></div>") +
        '<p class="hint" style="margin:8px 0 0">' + esc(kindLabel(c.kind)) + " · " + (c.host_handle ? "Host @" + esc(c.host_handle) : example ? "Example host" : "Hosted by a player") + (example ? ' · <a href="private-table.html?demo=1" data-democas>Walk in to this example ›</a>' : ' · <a href="private-table.html?c=' + encodeURIComponent(c.id) + '">Walk in to the table ›</a>') + "</p>" +
        '<div id="cjHost">' + (example ? "" : (c.about ? '<p class="lede" style="margin:12px 0 6px">' + esc(c.about) + "</p>" : "")) + (example && c.host && SC && SC.hostCard ? SC.hostCard(c.host, { example: true, group: casGroup(c) }) : "") + "</div>" +
        '<p class="hint">' + esc(WHO[c.who] || "Everyone") + " · " + (c.seating === "reserved" ? "Reservations only: the Host saves seats for players" : c.join_mode === "open" ? "Free play: first come, first seated" : "Free play, with the Host approving each player") + " · " + (seatsLine(c) || (c.members || 1) + " members") + " · " + esc(reach(c)) + "</p>" +
        '<h4 style="margin:14px 0 6px">Games</h4><ul class="castbl">' + (c.tables || []).map(function (t) { return "<li><b>" + esc(t.name) + "</b>" + (t.meets ? "<span>" + esc(t.meets) + "</span>" : "") + "</li>"; }).join("") + "</ul>" +
        '<p class="hint">Meet in public places, and never send money to anyone. <a href="safety.html" target="_blank" rel="noopener">Safety Guide</a></p>' +
        '<span class="err" id="cjErr"></span><div class="row" style="margin-top:10px">' +
        (example ? '<p class="hint" style="flex-basis:100%;margin:0 0 6px">This is a fictional example, so it can\'t be joined. Real tables near 35242 replace the examples as members build them.</p><button class="btn gold" type="button" data-build-casino>Build one like it · $21</button>' :
          host ? '<button class="btn gold" type="button" id="cjManage">Run this Private Table</button>' :
          c.my_status === "member" || c.my_status === "requested" ? '<button class="btn ghost" type="button" id="cjLeave">' + (c.my_status === "member" ? "Leave this table" : "Cancel request") + "</button>" :
          '<button class="btn gold" type="button" id="cjJoin">' + (c.my_hold ? "Take your saved seat" : c.seats != null && (c.seated || 0) >= c.seats ? "Join the waitlist" : c.seating === "reserved" ? "Ask for a seat" : c.join_mode === "open" ? "Join free" : "Ask to join") + "</button>") +
        '<button class="btn ghost" type="button" data-close>Close</button></div>');
      if (SC) SC.render($("#cjScene", m), c);
      var dl = $("[data-democas]", m); if (dl) dl.addEventListener("click", function () { try { sessionStorage.setItem("sf.demoCasino", JSON.stringify(Object.assign({}, c, { my_status: null, status: "open" }))); } catch (e) { } });
      if (example) return;
      if (SC && SC.hostCard) call("casino_host_card", { p_casino: c.id }).then(function (h) { var hb = $("#cjHost", m); if (hb && h) hb.innerHTML = SC.hostCard(h, { group: casGroup(c) }); }, function () { });
      if ($("#cjJoin", m)) $("#cjJoin", m).onclick = function () {
        if (!live()) { needLogin("tables"); return; }
        if (c.kind === "flirty18" && !$("#cjJoin", m).__ok) {
          var jb = $("#cjJoin", m);
          if (!confirm("18+ Flirty table rules:\n\n• Adults only. ID-verified members only.\n• Flirty and suggestive is fine when everyone is into it. Stop the moment anyone isn't.\n• No nudity, no sexual images and no explicit sexual content, ever.\n• No asking for or offering money, gifts or meetups for anything sexual.\n\nBreak a rule and your account is closed with no refund, and your card gets a public Joker for 45 days. You can appeal once. Join?")) return;
          jb.__ok = true;
        }
        call("join_casino", { p_casino: c.id }).then(function (st) { closeModal(); toast(st === "member" ? "You're in! Welcome to " + c.name + "." : st === "waitlist" ? "It's full right now, so you're on the waitlist. The Host can add seats or let you in." : c.seating === "reserved" ? "Asked for a seat. The Host saves seats for players." : "Request sent. The Host will let you in."); find(); }, function (e) {
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
              window.SF_LIVE.rpc("set_casino_style", { p_casino: newId, p_style: d.style || {} }).then(function () { return saveTableArt(m, newId); }).then(function () {
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
        '<h4>Seating</h4><div class="casbar"><label class="sr" for="cmSeating">How seats fill</label><select id="cmSeating"><option value="first_come">Free play (first come, first seated)</option><option value="reserved">Reservations only</option></select><button class="btn ghost sm" type="button" id="cmSeatingGo">Save seating</button></div>' +
        '<p class="hint" id="cmSeatingHint">Free play: open seats go to whoever joins first. Reservations only: you save seats for players by @handle; everyone else asks for a seat. Saved seats count as taken, so you can\'t be overbooked.</p>' +
        '<div class="cmholds"><h5 style="margin:10px 0 6px">Saved seats</h5><div id="cmHolds"><p class="hint">Loading…</p></div>' +
        '<div class="casbar cmholdform"><label class="sr" for="cmHoldH">Player @handle</label><input type="text" id="cmHoldH" maxlength="40" placeholder="@handle" autocapitalize="none"><label class="sr" for="cmHoldD">Hold for</label><select id="cmHoldD"><option value="1">Hold 1 day</option><option value="3">Hold 3 days</option><option value="7" selected>Hold 7 days</option><option value="30">Hold 30 days</option><option value="0">Until they arrive</option></select>' +
        '<input type="text" id="cmHoldN" maxlength="120" placeholder="Note (optional): For Friday dinner"><button class="btn gold sm" type="button" id="cmHoldGo">Save a seat</button></div></div>' +
        '<h4>Add a game or meetup</h4><div class="cmgame"><input type="text" id="cmTName" maxlength="40" placeholder="Game name: Friday Dinner"><select id="cmTFmt" aria-label="How players meet"><option value="in_person">📍 In person</option><option value="virtual">💻 Virtual</option><option value="hybrid">🔀 Hybrid: in person or online</option></select>' +
          '<input type="text" id="cmTMeets" maxlength="120" placeholder="Repeats: Every Friday, 7pm"><input type="datetime-local" id="cmTNext" aria-label="Next meetup date and time"><input type="text" id="cmTPlace" maxlength="140" placeholder="Public place: Lee Branch patio, Hoover"><input type="url" id="cmTLink" maxlength="300" placeholder="Video link: https://…" hidden>' +
          '<button class="btn gold sm" type="button" id="cmTAdd">Add game</button><p class="hint">Always meet in public places. Video links only show to players at your table.</p></div>' +
        '<h4>Table guide</h4><p class="hint">Goes on your table page and in every invitation.</p><div class="cmguide">' +
          '<label for="cmGDet">The details</label><textarea id="cmGDet" maxlength="800" rows="2" placeholder="When and where you meet, what to expect."></textarea>' +
          '<label for="cmGGoal">Goals</label><textarea id="cmGGoal" maxlength="600" rows="2" placeholder="What this group is working toward."></textarea>' +
          '<label for="cmGRec">Recommendations</label><textarea id="cmGRec" maxlength="600" rows="2" placeholder="What to try, read, bring or wear."></textarea>' +
          '<label for="cmGTip">Tips</label><textarea id="cmGTip" maxlength="600" rows="2" placeholder="House rules and helpful hints."></textarea>' +
          '<button class="btn ghost sm" type="button" id="cmGSave">Save guide</button></div>' +
        '<h4>Invitations &amp; reservations</h4><p class="hint">Send by text or email from your phone. An <b>invitation</b> lets them walk right in. A <b>reservation</b> holds a seat that only the key can claim.</p>' +
          '<div class="cmkey"><select id="cmKKind" aria-label="Invitation or reservation"><option value="invite">✉️ Invitation</option><option value="reservation">🎟 Reservation (holds a seat)</option></select>' +
          '<select id="cmKDays" aria-label="Good for"><option value="3">Good 3 days</option><option value="7" selected>Good 7 days</option><option value="30">Good 30 days</option><option value="0">No end date</option></select>' +
          '<select id="cmKUses" aria-label="How many people"><option value="1" selected>For 1 person</option><option value="2">For 2 people</option><option value="5">For 5 people</option><option value="10">For 10 people</option></select>' +
          '<input type="text" id="cmKNote" maxlength="120" placeholder="Personal note: Can\'t wait to see you Friday!"><button class="btn gold sm" type="button" id="cmKGo">Create &amp; send</button></div>' +
          '<div id="cmKeys"></div>' +
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
      function holds() {
        call("casino_seat_holds_list", { p_casino: c.id }).then(function (rows) {
          $("#cmHolds", m).innerHTML = (rows || []).length ? (rows || []).map(function (h) { return '<div class="cmrow"><span>🎟 @' + esc(h.handle) + (h.name ? " · " + esc(h.name) : "") + (h.note ? ' · <i>' + esc(h.note) + "</i>" : "") + ' · <small>' + (h.expires_at ? "held until " + new Date(h.expires_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "held until they arrive") + '</small></span><button class="chip sm" type="button" data-unhold="' + h.member_id + '">Release</button></div>'; }).join("") : '<p class="hint">No saved seats yet.</p>';
        }, function (e) { $("#cmHolds", m).innerHTML = '<p class="hint">' + esc(e.message) + "</p>"; });
      }
      holds();
      call("casino_floor", { p_id: c.id }).then(function (f) { if (f && f.seating) { c.seating = f.seating; $("#cmSeating", m).value = f.seating; } }, function () { });
      $("#cmSeatingGo", m).onclick = function () { var v = $("#cmSeating", m).value; call("set_casino_seating", { p_casino: c.id, p_mode: v }).then(function () { c.seating = v; toast(v === "reserved" ? "Reservations only. Save seats for your players below." : "Free play: first come, first seated."); find(); }, function (x) { err.textContent = x.message; }); };
      $("#cmHoldGo", m).onclick = function () { var hd = $("#cmHoldH", m).value.trim(); if (!hd) { err.textContent = "Enter the player's @handle."; return; }
        call("hold_casino_seat", { p_casino: c.id, p_handle: hd, p_days: parseInt($("#cmHoldD", m).value, 10), p_note: $("#cmHoldN", m).value }).then(function (r) { err.textContent = ""; $("#cmHoldH", m).value = $("#cmHoldN", m).value = ""; toast(r === "seated" ? "They'd already asked, so they're seated now." : "Seat saved. It's waiting for them when they open your table."); holds(); people(); find(); }, function (x) { err.textContent = x.message; }); };
      $("#cmHolds", m).addEventListener("click", function (e) { var b = e.target.closest("[data-unhold]"); if (!b) return; call("release_casino_seat", { p_casino: c.id, p_member: b.getAttribute("data-unhold") }).then(function () { toast("Seat released."); holds(); find(); }, function (x) { err.textContent = x.message; }); });
      $("#cmPeople", m).addEventListener("click", function (e) { var b = e.target.closest("[data-act]"); if (!b) return; call("decide_casino_member", { p_casino: c.id, p_member: b.getAttribute("data-mid"), p_action: b.getAttribute("data-act") }).then(people, function (x) { err.textContent = x.message; }); });
      $("#cmTFmt", m).onchange = function () { var v = this.value; $("#cmTLink", m).hidden = v === "in_person"; $("#cmTPlace", m).hidden = v === "virtual"; };
      $("#cmTAdd", m).onclick = function () { var n = $("#cmTName", m).value.trim(); if (n.length < 2) { err.textContent = "Name the game."; return; } var nx = $("#cmTNext", m).value;
        call("save_casino_game", { p_casino: c.id, p_table: null, p_name: n, p_meets: $("#cmTMeets", m).value.trim(), p_format: $("#cmTFmt", m).value, p_place: $("#cmTPlace", m).value.trim(), p_link: $("#cmTLink", m).value.trim(), p_next_at: nx ? new Date(nx).toISOString() : null })
          .then(function () { err.textContent = ""; toast("Game added."); ["#cmTName", "#cmTMeets", "#cmTNext", "#cmTPlace", "#cmTLink"].forEach(function (k) { $(k, m).value = ""; }); find(); }, function (x) { err.textContent = x.message; }); };
      call("casino_floor", { p_id: c.id }).then(function (f) { var g = (f && f.guide) || {}; c.guide = g; c.tables = (f && f.tables) || c.tables; $("#cmGDet", m).value = g.details || ""; $("#cmGGoal", m).value = g.goals || ""; $("#cmGRec", m).value = g.recommend || ""; $("#cmGTip", m).value = g.tips || ""; }, function () { });
      $("#cmGSave", m).onclick = function () { call("set_casino_guide", { p_casino: c.id, p_guide: { details: $("#cmGDet", m).value, goals: $("#cmGGoal", m).value, recommend: $("#cmGRec", m).value, tips: $("#cmGTip", m).value } }).then(function (g) { c.guide = g; err.textContent = ""; toast("Table guide saved."); }, function (x) { err.textContent = x.message; }); };
      function keyMsg(k, kind, note) {
        var url = CFG.siteUrl + "private-table.html?c=" + encodeURIComponent(c.id) + "&k=" + k, g = c.guide || {}, next = (c.tables || []).filter(function (t) { return t.next_at; })[0];
        return (kind === "reservation" ? "🎟 I saved you a seat at " : "✉️ You're invited to ") + c.name + " on SuiteFace." + (note ? "\n\n" + note : "") +
          (next ? "\n\nNext up: " + next.name + ", " + new Date(next.next_at).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + (next.format === "virtual" ? " (online)" : next.format === "hybrid" ? " (in person or online)" : next.place ? " at " + next.place : "") : "") +
          (g.details ? "\n\nThe details: " + g.details : "") + (g.goals ? "\nGoals: " + g.goals : "") + (g.recommend ? "\nRecommended: " + g.recommend : "") + (g.tips ? "\nTips: " + g.tips : "") +
          "\n\n" + (kind === "reservation" ? "Claim your seat" : "Join the table") + ": " + url + "\nYour key: " + k;
      }
      function shareKey(k, kind, note) {
        var msg = keyMsg(k, kind, note), subj = (kind === "reservation" ? "A seat is saved for you at " : "You're invited to ") + c.name;
        var km = modal('<h3>' + (kind === "reservation" ? "🎟 Reservation ready" : "✉️ Invitation ready") + '</h3><p class="hint">Key <b class="keychip">' + esc(k) + '</b>. Send it from your phone:</p><textarea class="keymsg" rows="9" readonly>' + esc(msg) + '</textarea>' +
          '<div class="row"><a class="btn gold" href="sms:?&body=' + encodeURIComponent(msg) + '">💬 Text it</a><a class="btn gold" href="mailto:?subject=' + encodeURIComponent(subj) + "&body=" + encodeURIComponent(msg) + '">📧 Email it</a><button class="btn ghost" type="button" id="kmCopy">Copy</button>' + (navigator.share ? '<button class="btn ghost" type="button" id="kmShare">Share…</button>' : "") + '</div><button class="btn ghost sm" type="button" data-close style="margin-top:10px">Done</button>');
        $("#kmCopy", km).onclick = function () { copy(msg, this); };
        if ($("#kmShare", km)) $("#kmShare", km).onclick = function () { navigator.share({ title: subj, text: msg }).catch(function () { }); };
      }
      function keys() { call("casino_keys_list", { p_casino: c.id }).then(function (rows) { $("#cmKeys", m).innerHTML = (rows || []).map(function (k) { return '<div class="cmrow"><span>' + (k.kind === "reservation" ? "🎟" : "✉️") + " <b>" + esc(k.code) + "</b> · " + (k.max_uses - k.uses) + " left" + (k.note ? " · <i>" + esc(k.note) + "</i>" : "") + (k.expires_at ? " · until " + new Date(k.expires_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "") + '</span><span><button class="chip sm" type="button" data-kresend="' + esc(k.code) + '" data-kk="' + k.kind + '" data-kn="' + esc(k.note || "") + '">Send again</button><button class="chip sm" type="button" data-krev="' + esc(k.code) + '">Cancel</button></span></div>'; }).join(""); }, function () { }); }
      keys();
      $("#cmKGo", m).onclick = function () { var kind = $("#cmKKind", m).value, note = $("#cmKNote", m).value.trim();
        call("create_casino_key", { p_casino: c.id, p_kind: kind, p_days: parseInt($("#cmKDays", m).value, 10), p_note: note, p_uses: parseInt($("#cmKUses", m).value, 10) }).then(function (k) { err.textContent = ""; $("#cmKNote", m).value = ""; keys(); find(); shareKey(k, kind, note); }, function (x) { err.textContent = x.message; }); };
      $("#cmKeys", m).addEventListener("click", function (e) { var b = e.target.closest("[data-krev]"); if (b) { call("revoke_casino_key", { p_code: b.getAttribute("data-krev") }).then(function () { toast("Key cancelled."); keys(); find(); }); return; }
        b = e.target.closest("[data-kresend]"); if (b) shareKey(b.getAttribute("data-kresend"), b.getAttribute("data-kk"), b.getAttribute("data-kn")); });
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
      $("#rdSave", m).onclick = function () { call("set_casino_style", { p_casino: c.id, p_style: readDesign(m) }).then(function (st) { c.style = st; return saveTableArt(m, c.id).then(function () { closeModal(); toast("New look saved. Walk in to see it."); loadMine(); find(); }); }, function (x) { $("#rdErr", m).textContent = x.message; }); };
    }
    // Players see any seat a Host has saved for them, with a one-tap way in.
    function loadHolds() {
      var list = $("#casList"); if (!list || !live()) return;
      var box = $("#casHolds"); if (!box) { box = document.createElement("div"); box.id = "casHolds"; list.parentNode.insertBefore(box, list); }
      call("my_seat_holds", {}).then(function (rows) {
        box.innerHTML = (rows || []).map(function (h) { return '<div class="casheld"><span>🎟 <b>' + esc(h.host_handle ? "@" + h.host_handle : "A Host") + "</b> saved you a seat at <b>" + esc(h.name) + "</b>" + (h.note ? " · " + esc(h.note) : "") + (h.expires_at ? ' <small>· until ' + new Date(h.expires_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + "</small>" : "") + '</span><button class="btn gold sm" type="button" data-takeseat="' + esc(h.casino_id) + '">Take your seat</button></div>'; }).join("");
      }, function () { });
      if (!box.__wired) { box.__wired = true; box.addEventListener("click", function (e) { var b = e.target.closest("[data-takeseat]"); if (!b) return; b.disabled = true;
        call("join_casino", { p_casino: b.getAttribute("data-takeseat") }).then(function (st) { toast(st === "member" ? "You're seated. Welcome to the table!" : "Request sent."); loadHolds(); find(); location.href = "private-table.html?c=" + encodeURIComponent(b.getAttribute("data-takeseat")); }, function (x) { b.disabled = false; toast(x.message); }); }); }
    }
    document.addEventListener("sf:live", function () { setTimeout(loadHolds, 600); });
    // Back to the table after signing in from an invitation link.
    document.addEventListener("sf:live", function () { var r = null; try { r = sessionStorage.getItem("sf.return"); sessionStorage.removeItem("sf.return"); } catch (e) { } if (r && /^\/?private-table\.html\?/.test(r.replace(/^\//, ""))) location.href = r; });
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
     My Face saves to their account, Your Hand is dealt by the server from real members only,
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
      jk: /JOKER/i.test(jm) ? 10 : (parseInt(jm, 10) || 0), move: r.my_move || null, bumpers: r.bumpers || [], bumpersOk: r.bumpers_ok || [], photoV: !!r.photo_ok, idV: !!r.id_ok, confirmed: r.confirmed || [], hr: r.high_roller || null, comps: r.comps || null, founder: r.founder_no || null, cardBack: r.card_back || null, wins: r.wins || null, venueStickers: r.venue_stickers || null, cardStickers: r.card_stickers || null, photo: r.photo_url || null, cardTop: r.card_top || null, couple: r.couple ? { name: r.couple.partner_name, age: r.couple.partner_age, photo: r.couple.partner_photo } : null };
    if (/JOKER/i.test(jm)) c.joker = { count: 10, until: "" };
    if (z) { c.lat = z.lat + ((h % 100) / 100 - .5) * .02; c.lon = z.lon + (((h >> 7) % 100) / 100 - .5) * .02; }
    return c;
  }
  var deckLoading = null, LIVE_ERR = "";
  function liveDeck(redeal) {
    if (deckLoading && !redeal) return deckLoading;
    return (deckLoading = liveDeckRun(redeal).then(function (x) { deckLoading = null; return x; }, function (e) { deckLoading = null; throw e; }));
  }
  function liveDeckRun(redeal) {
    var go = redeal ? lrpc("deal_deck").then(function () { return lrpc("my_deck"); }) : lrpc("my_deck").then(function (rows) { return rows && rows.length ? rows : lrpc("deal_deck").then(function () { return lrpc("my_deck"); }); });
    return go.then(function (rows) { LIVE_ERR = "";
      return lrpc("deck_couples").then(function (cs) { var m = {}; (cs || []).forEach(function (x) { m[x.member_id] = x; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.couple = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_backs").then(function (bs) { var m = {}; (bs || []).forEach(function (x) { m[x.member_id] = x.card_back; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.card_back = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_founders").then(function (fs) { var m = {}; (fs || []).forEach(function (x) { m[x.member_id] = x.founder_no; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.founder_no = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_compliments").then(function (cs) { var m = {}; (cs || []).forEach(function (x) { m[x.member_id] = x.kinds; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.comps = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_status").then(function (ss) { var m = {}; (ss || []).forEach(function (x) { m[x.member_id] = x.high_roller; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.high_roller = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_badges").then(function (vs) { var m = {}; (vs || []).forEach(function (v) { m[v.member_id] = v; }); (rows || []).forEach(function (r) { var v = m[r.member_id]; if (v) { r.photo_ok = v.photo_verified; r.id_ok = v.id_verified; r.confirmed = v.confirmed; } }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_bumpers").then(function (bs) { var m = {}; (bs || []).forEach(function (b) { m[b.member_id] = b; }); (rows || []).forEach(function (r) { var b = m[r.member_id]; if (b) { r.bumpers = b.bumpers; r.bumpers_ok = b.verified; } }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_venue_stickers").then(function (vs) { var m = {}; (vs || []).forEach(function (v) { m[v.member_id] = v.stickers; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.venue_stickers = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_card_extras").then(function (xs) { var m = {}; (xs || []).forEach(function (x) { m[x.member_id] = x; }); (rows || []).forEach(function (r) { var x = m[r.member_id]; if (x) { r.photo_url = x.photo; r.card_top = x.card_top; } }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_card_stickers").then(function (vs) { var m = {}; (vs || []).forEach(function (v) { m[v.member_id] = v.stickers; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.card_stickers = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      return lrpc("deck_wins").then(function (ws) { var m = {}; (ws || []).forEach(function (w) { m[w.member_id] = w.kinds; }); (rows || []).forEach(function (r) { if (m[r.member_id]) r.wins = m[r.member_id]; }); return rows; }, function () { return rows; });
    }).then(function (rows) {
      LIVE_ROWS = rows || [];
      var mid = window.SF_LIVE.memberId(), saved = S.get("live:" + mid, { dealt: [] });
      G = { dealt: saved.dealt || [], burned: [], played: [], pairs: [], hands: {}, jokered: [], clock: 0 };
      LIVE_ROWS.forEach(function (r) { if (r.my_move) G.played.push(r.member_id); });
      deckDirty = true; buildDeck(); renderTable(!!redeal); mapT0 = performance.now(); renderMap(); liveTable();
      if (!LIVE_ROWS.length) emptyHand();
    }, function (e) { var msg = (e && e.message) || "Your deck couldn't load. Try again."; LIVE_ERR = msg; if (redeal) toast(msg); var d = $("#dealt"); if (d) d.innerHTML = '<p class="lede deckmsg" style="align-self:center">' + esc(msg) + (/Friendship/i.test(msg) ? ' <a href="my-table.html#face">Change your Table in My Face</a>.' : "") + "</p>"; });
  }
  /* An empty live hand says exactly why, and shows a clearly labeled sample hand so the picture cards make sense. */
  var SAMPLE_HAND = [["Jordan", 34, "heart", "A", "jordan.webp", "Teacher and Army veteran. Sunday pancakes, long walks.", ["Hiking", "Cooking"]], ["Ellis", 38, "spade", "K", "ellis.webp", "Architect who still sketches by hand.", ["Design", "Jazz"]],
    ["Ryan", 33, "club", "Q", "ryan.webp", "Weekend fly fisherman, weekday nurse.", ["Fishing", "Live music"]], ["Matteo", 36, "diamond", "J", "matteo.webp", "Runs a small bakery. Up at 4, happy about it.", ["Food", "Travel"]], ["Ben", 31, "heart", "10", "ben.webp", "Coaches Little League. Terrible singer, sings anyway.", ["Baseball", "Music"]]];
  function emptyHand() {
    var d = $("#dealt"); if (!d) return; var friend = P.looking === "friendship" || /Friendship/i.test(LIVE_ERR || "");
    var cards = SAMPLE_HAND.map(function (s, i) { var p = { id: "sample" + i, name: s[0], age: s[1], suit: s[2], rank: s[3], photo: "assets/people/" + s[4], bio: s[5], interests: s[6], looking: "longterm", dist: 3 + i * 2, hue: 30 + i * 40, shared: [], city: "Birmingham", jk: 0, self: true, id_: {} };
      try { return cardHTML(p, i).replace(/<div class="card-actions">[\s\S]*?<\/div><\/div>$/, "</div>").replace('class="pcard ', 'class="pcard flipped '); } catch (e) { return ""; } }).join("");
    d.innerHTML = '<div class="emptyhand"><h3>' + (friend ? "Your hand is empty because you're at the Friendship Table." : "No real players fit your hand yet.") + "</h3>" +
      '<p class="lede">' + (friend ? "Friendship players aren't dealt into dating decks. Switch your Table in My Face to <b>Dating</b>, <b>Long-term</b> or <b>Marriage</b> and you'll be dealt real players nearby." : "SuiteFace only deals real, paying players near you. As people in your area take a seat, their cards land here.") + "</p>" +
      '<div class="row">' + (friend ? '<a class="btn gold" href="my-table.html#face">Switch to dating</a>' : '<button class="btn gold" type="button" data-redeal>Deal again</button>') + '<a class="btn ghost" href="my-table.html#invite">Invite friends</a><a class="btn ghost" href="bluff-table.html">Play the Bluff Table</a></div>' +
      '<p class="samplelabel">Kelly\'s hand, an example · fictional people, not real players</p><p class="hint">This is what a hand looks like with picture cards: one face per person, ranked Ace down, each in their own suit. Tap a card to see its back.</p><div class="samplehand">' + cards + "</div></div>";
  }
  document.addEventListener("click", function (e) {
    var c = e.target.closest && e.target.closest(".samplehand .pcard"); if (c) { c.classList.toggle("flipped"); return; }
    if (e.target.closest && e.target.closest("[data-redeal]")) { liveDeck(true).catch(function () { }); }
  });
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
      .then(function () { return db.from("strategies").upsert({ member_id: mid, trump_order: P.trumps, show_me: P.show || "everyone", age_min: P.ageMin, age_max: P.ageMax, radius_miles: P.dist, verified_only: P.verifiedOnly || "any" }).then(chk); })
      .then(function () { return ids.length ? db.from("member_identity").upsert(ids).then(chk) : null; })
      .then(function () { return db.from("member_preferences").delete().eq("member_id", mid).then(chk); })
      .then(function () { return prefs.length ? db.from("member_preferences").insert(prefs).then(chk) : null; })
      .then(function () { return lrpc("set_my_bumpers", { p_bumpers: P.bumpers || [] }).catch(function () { }); })
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
      db.from("members").select("face_name,handle,bio,home_zip,style_suit,looking_for,interests,gender,birth_date,photo_url,photo_source,rooms,bumpers").eq("id", mid).single(),
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
      if (m.bumpers) { P.bumpers = m.bumpers; lrpc("my_bumpers").then(function (rs) { P.bumpersOk = (rs || []).filter(function (x) { return x.status === "verified"; }).map(function (x) { return x.bumper; }); saveP(); if (typeof renderStyle === "function") renderStyle(); renderCard(); }, function () { }); }
      var st = res[1].data; if (st && st.verified_only) { P.verifiedOnly = st.verified_only; if ($("#fVerOnly")) $("#fVerOnly").value = P.verifiedOnly; }
      lrpc("my_couple").then(function (c) { P.couple = c || []; renderCouple(); }, function () { });
      lrpc("my_wishlist").then(function (u) { P.wishlist = u || ""; if ($("#fWish")) $("#fWish").value = P.wishlist; }, function () { });
      lrpc("my_card_back").then(function (b) { P.cardBack = b || null; saveP(); renderCardBacks(); }, function () { });
      lrpc("my_card_top").then(function (v) { P.cardTop = v || []; saveP(); if (typeof renderLobby === "function") renderLobby(); }, function () { });
      lrpc("my_card_stickers").then(function (v) { P.stickers = v || []; saveP(); try { renderStyle(); } catch (e) { } renderCard(); if (typeof renderLobby === "function") renderLobby(); }, function () { });
      lrpc("my_heads_ups").then(function (h) { P.headsUp = h || null; renderHeadsUp(); }, function () { });
      lrpc("my_compliments").then(function (rs) { P.compRows = rs || []; P.myComps = null; (rs || []).forEach(function (x) { if (!x.hidden) { P.myComps = P.myComps || {}; P.myComps[x.kind] = x.n; } }); saveP(); renderCard(); renderCompPanel(); }, function () { });
      lrpc("my_suit_lock").then(function (L) { if (L) { P.suitLock = L; if (L.locked) { P.mySuit = L.suit; P.wild = !!L.wild; } saveP(); renderCard(); } }, function () { });
      lrpc("my_verification").then(function (v) { if (v) { P.ver = v; saveP(); renderVerPanel(); } }, function () { });
      lrpc("my_high_roller").then(function (h) { P.highRoller = h && h.in_room ? h.status : null; saveP(); renderCard(); if (P.highRoller) lrpc("my_hr_deck").then(function (d) { P.hrDeck = d || null; renderHrDeck(); }, function () { }); else renderHrDeck(); }, function () { });
      if (st) { P.trumps = st.trump_order && st.trump_order.length === 4 ? st.trump_order : P.trumps; P.show = st.show_me || P.show; P.ageMin = st.age_min || P.ageMin; P.ageMax = st.age_max || P.ageMax; P.dist = st.radius_miles || P.dist; }
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
      '<div class="row duo"><button class="btn ghost sm" type="button" data-gochat>💬 Chat</button>' + (h.other_id ? friendBtn(h.other_id) : "") + '<button class="btn gold sm" type="button" data-call="' + esc(h.hand_id) + '" data-name="' + esc(h.other_name || "") + '" data-other="' + esc(h.other_id || "") + '">📹 Video chat</button></div>' +
      '<div class="row callrow"><button class="btn gold sm" type="button" data-call="' + esc(h.hand_id) + '" data-name="' + esc(h.other_name || "") + '" data-other="' + esc(h.other_id || "") + '">📹 Video call ' + nm + '</button><span class="hint">$2.10 first minute, then 21¢/min · you pay, ' + nm + ' doesn\'t</span></div>' +
      '<div class="row callrow">' + loungeBtn("pair", h.hand_id, h.other_id, h.other_name) + '<span class="hint">Private 21 minutes · $2.10 a seat · ID-verified players</span></div>' +
      '<details class="datedeals" open><summary>🎟️ Date Deals near you two</summary><div id="ddBox"><p class="hint">Loading…</p></div></details>' +
      '<div class="hand-box" id="handBox"></div>' +
      '<details class="sidetable" open><summary>Side Table chat</summary><div class="chat" id="chat"><p class="hint">Loading…</p></div>' +
      '<form id="chatForm" style="display:flex;gap:8px;margin-top:10px"><label class="sr" for="chatIn">Message</label><input type="text" id="chatIn" maxlength="1000" placeholder="Say hi, pick a public place…" autocomplete="off"><button class="btn felt sm" type="submit">Send</button></form>' +
      '<div class="row" style="margin-top:8px"><button class="btn gold sm" type="button" data-call="' + esc(h.hand_id) + '" data-name="' + esc(h.other_name || "") + '" data-other="' + esc(h.other_id || "") + '">📹 Video chat</button></div>' +
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
    renderLiveHand(m, h); renderDeals(m, h);
    var gc = $("[data-gochat]", m); if (gc) gc.addEventListener("click", function () { var st = $("details.sidetable", m); if (st) { st.open = true; st.scrollIntoView({ behavior: "smooth", block: "start" }); } setTimeout(function () { var i = $("#chatIn", m); if (i) i.focus(); }, 350); });
  }
  /* Compliment stickers: after a date, tap what was true. Earned only, never bought. */
  function compPicker(given, done) {
    var K = window.SFSlots ? SFSlots.kinds : [], M = window.SFSlots ? SFSlots.meaning : {};
    if (!K.length) return "";
    return '<div class="comppick"><h4>' + SFSlots.svg("cherries", 18) + ' Leave compliment stickers <span class="hint">(optional)</span></h4><p class="hint">Tap what was true. They show on their card, and nobody sees who sent them.</p><div class="cpgrid">' +
      K.map(function (k) { var had = (given || []).indexOf(k) > -1; return '<button type="button" class="cp' + (had ? " sent" : "") + '" data-cp="' + k + '" aria-pressed="' + had + '"' + (had ? " disabled" : "") + ">" + SFSlots.svg(k, 26) + "<b>" + M[k][0] + "</b><span>" + M[k][1] + "</span></button>"; }).join("") +
      '</div><details class="cpneg"><summary>Honest heads-up <span class="hint">(private)</span></summary><p class="hint">Only they see a heads-up, and they can dispute it. If three different dates send the same one, it sticks on their card for 7 days. Be kind, and be sure.</p><div class="cpgrid">' +
      SFSlots.neg.map(function (k) { var had = (given || []).indexOf(k) > -1; return '<button type="button" class="cp neg' + (had ? " sent" : "") + '" data-cp="' + k + '" aria-pressed="' + had + '"' + (had ? " disabled" : "") + ">" + SFSlots.svg(k, 26) + "<b>" + M[k][0] + "</b><span>" + M[k][1] + "</span></button>"; }).join("") +
      '</div></details><div class="row"><button type="button" class="btn gold sm" data-cpsend' + (done ? " disabled" : "") + '>Send stickers</button></div></div>';
  }
  function compWire(box, send) {
    box.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cp]"); if (b && !b.disabled) { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true"); return; }
      if (e.target.closest("[data-cpsend]")) { var ks = $$("[data-cp][aria-pressed=true]:not([disabled])", box).map(function (x) { return x.getAttribute("data-cp"); }); if (!ks.length) { toast("Tap at least one sticker."); return; }
        if (ks.some(function (k) { return SFSlots.neg.indexOf(k) > -1; }) && !confirm("Send an honest heads-up? It's private to them and they can dispute it. Three from different dates puts it on their card for 7 days.")) return;
        send(ks); }
    });
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
    var wl = document.createElement("p"); wl.className = "hint wishrow"; box.appendChild(wl);
    lrpc("pair_wishlist", { p_hand: h.hand_id }).then(function (u) { if (u && /^https:\/\//.test(u)) wl.innerHTML = '🎁 <a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer nofollow">See ' + nm + '\'s wish list</a> · The store ships it without showing you their address.'; }, function () { });
    if (h.play_hand_id && (h.outcome === "win" || (h.my_call && h.my_call !== "loss_joker")) && window.SFSlots) {
      var cpb = document.createElement("div"); box.appendChild(cpb);
      lrpc("my_given_compliments", { p_play_hand: h.play_hand_id }).then(function (given) {
        cpb.innerHTML = compPicker(given || [], false);
        compWire(cpb, function (ks) { lrpc("give_compliments", { p_play_hand: h.play_hand_id, p_kinds: ks }).then(function (n) { toast(n ? "Sent " + n + " sticker" + (n > 1 ? "s" : "") + ". Nice play." : "Already sent."); jackpot(1800); renderLiveHand(m, h); }, function (x) { toast(x.message); }); });
      }, function () { });
    }
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
    /* Your hand is only dealt on My table, never in the background on other pages. */
    var onTable = document.body.getAttribute("data-page") === "club";
    pullFace().then(function () { if (onTable) return liveDeck(false); }, function () { if (onTable) return liveDeck(false); });
  });

  /* =====================================================================
     THE BLUFF TABLE. An opt-in game: five cards, some real members who also sat down, some House Cards played by
     SuiteFace's AI dealer. Chat, then call Bluff or Real. The house always tells the truth.
     ===================================================================== */
  var bluffPoll = null;
  function bluffEl() { return $("#bluffApp"); }
  function renderBluff() {
    var el = bluffEl(); if (!el) return;
    if (!liveOn() || !window.SF_LIVE || !window.SF_LIVE.seated) {
      el.innerHTML = '<div class="bluffcta"><h3>Take your seat to play</h3><p class="hint">The Bluff Table is for SuiteFace members.' + (LAUNCH.open ? " The $21 buy-in is waived right now." : "") + '</p><div class="row"><a class="btn gold" href="membership.html">' + (LAUNCH.open ? "Join for $2.10 a month" : "Take your seat") + '</a>' + (window.SF_LIVE && !liveOn() ? '<span class="hint" style="align-self:center">Already a member? Tap <b>Log in</b> at the top.</span>' : "") + "</div></div>";
      return;
    }
    lrpc("my_bluff_stats").then(function (st) {
      st = st || {};
      if (!st.seated) {
        el.innerHTML = '<div class="bluffcta"><h3>Pull up a chair</h3><label class="check"><input type="checkbox" id="bluffOk"> <span>I understand that some cards at this table are <b>House Cards</b> played by SuiteFace\'s AI dealer, that every call gets the true answer, and that House Cards never ask to meet, call or for money.</span></label><div class="row" style="margin-top:10px"><button class="btn gold" type="button" id="bluffSit" disabled>🎭 Sit at the Bluff Table</button></div></div>';
        $("#bluffOk").addEventListener("change", function () { $("#bluffSit").disabled = !this.checked; });
        $("#bluffSit").addEventListener("click", function () { lrpc("bluff_join", { p_on: true }).then(function () { toast("You're seated. Say hi to the table.", "spade"); jackpot(1800); renderBluff(); }, function (er) { toast(er.message); }); });
        return;
      }
      Promise.all([lrpc("my_bluff_team"), lrpc("my_bluff_inbox").catch(function () { return []; })]).then(function (res) {
        if (!res[0] || !res[0].team) teamLobby(el, res[1]); else teamView(el, res[0], res[1]);
      }, function (er) { el.innerHTML = '<p class="hint">' + esc(er.message || "The table couldn't load.") + "</p>"; });
      return;
      Promise.all([lrpc("my_bluff_hand"), lrpc("my_bluff_inbox").catch(function () { return []; })]).then(function (res) {
        var hand = res[0] || [], inbox = res[1] || [], open = hand.filter(function (h) { return !h.guess; });
        var sharp = (st.score || 0) >= 5;
        el.innerHTML = '<div class="bluffbar"><span><b>' + (st.score || 0) + "</b> right of <b>" + (st.calls || 0) + "</b> calls" + (sharp ? ' · <span class="sharp">👁 Sharp Eye</span>' : (st.score ? " · " + (5 - st.score) + " more for Sharp Eye" : "")) + '</span><span class="row"><button class="btn gold sm" type="button" data-bdeal>' + (open.length < 5 ? "Deal me in" : "Hand is full") + '</button><button class="btn ghost sm" type="button" data-bleave>Leave the table</button></span></div>' +
          '<div class="bluffgrid">' + (hand.length ? hand.map(bluffCard).join("") : '<p class="hint">No cards yet. Tap Deal me in.</p>') + "</div>" +
          (inbox.length ? '<h3 style="margin-top:22px">People chatting with your card</h3><p class="hint">They\'re trying to work out whether you\'re real. Be yourself.</p><div class="bluffinbox">' + inbox.map(function (x) { return '<button type="button" class="binrow" data-bin="' + x.hand_id + '" data-bname="' + esc(x.name || "Player") + '"><span class="bph"' + (x.photo_url ? ' style="background-image:url(' + esc(x.photo_url) + ')"' : "") + "></span><span><b>" + esc(x.name || "Player") + (x.age ? ", " + x.age : "") + "</b><small>" + (x.last_mine ? "You: " : "") + esc((x.last_body || "").slice(0, 80)) + "</small></span></button>"; }).join("") + "</div>" : "");
      }, function (er) { el.innerHTML = '<p class="hint">' + esc(er.message || "The table couldn't load.") + "</p>"; });
    }, function (er) { el.innerHTML = '<p class="hint">' + esc(er.message || "The table couldn't load.") + "</p>"; });
  }
  /* ---------- Bluff Table teams: solo or with up to 3 friends; deck 4x to 7x the team; every call needs everyone's OK ---------- */
  var BT = { poll: null, chatLast: 0, state: null };
  function multOpts(cur, n) { return [4, 5, 6, 7].map(function (k) { return '<option value="' + k + '"' + (k === cur ? " selected" : "") + ">" + k + "× · " + Math.min(52, k * Math.max(1, n)) + " cards" + (k * n > 52 ? " (max 52)" : "") + "</option>"; }).join(""); }
  function teamLobby(el, inbox) {
    el.innerHTML = '<div class="btlobby"><div class="panel"><h3>Play solo</h3><p class="hint">Your own private table. Pick your deck size.</p><div class="row"><label class="sr" for="btSoloM">Deck size</label><select id="btSoloM">' + multOpts(5, 1) + '</select><button class="btn gold" type="button" id="btSolo">Deal me in</button></div></div>' +
      '<div class="panel"><h3>Play with friends</h3><p class="hint">Bring up to 3 friends. You share the cards, the chat and one score, and every call needs everyone\'s OK.</p><div class="row"><label class="sr" for="btTeamM">Deck size</label><select id="btTeamM">' + multOpts(5, 2) + '</select><button class="btn gold" type="button" id="btTeam">Start a friends table</button></div></div>' +
      '<div class="panel"><h3>Join your friends</h3><form class="row" id="btJoin"><label class="sr" for="btCode">Table code</label><input id="btCode" maxlength="5" placeholder="Table code" autocapitalize="characters" style="text-transform:uppercase"><button class="btn gold" type="submit">Join</button></form></div></div>' + inboxHTML(inbox);
    var go = function (m) { lrpc("bluff_team_create", { p_mult: +m }).then(function () { return lrpc("bluff_team_deal"); }).then(function () { jackpot(1500); renderBluff(); }, function (er) { toast(er.message); }); };
    $("#btSolo").addEventListener("click", function () { go($("#btSoloM").value); });
    $("#btTeam").addEventListener("click", function () { go($("#btTeamM").value); });
    $("#btJoin").addEventListener("submit", function (e) { e.preventDefault(); lrpc("bluff_team_join", { p_code: $("#btCode").value }).then(function () { return lrpc("bluff_team_deal"); }).then(function () { toast("You're at your friends' table."); renderBluff(); }, function (er) { toast(er.message); }); });
  }
  function inboxHTML(inbox) {
    return (inbox || []).length ? '<h3 style="margin-top:22px">People chatting with your card</h3><p class="hint">They\'re trying to work out whether you\'re real. Be yourself.</p><div class="bluffinbox">' + inbox.map(function (x) { return '<button type="button" class="binrow" data-bin="' + x.hand_id + '" data-bname="' + esc(x.name || "") + '"><b>' + esc((x.name || "").split(" ")[0]) + "</b><span>" + esc((x.last_body || "").slice(0, 60)) + "</span></button>"; }).join("") + "</div>" : "";
  }
  function teamView(el, t, inbox) {
    BT.state = t; var n = (t.players || []).length, open = t.cards.filter(function (c) { return !c.guess; }).length;
    el.innerHTML = '<div class="bluffbar"><span><b>' + t.score + "</b> right of <b>" + t.calls + "</b> calls" + (n > 1 ? " · team score" : "") + '</span><span class="row">' +
      (t.host ? '<label class="sr" for="btMult">Deck size</label><select id="btMult" class="btmult">' + multOpts(t.mult, n) + "</select>" : '<span class="hint">Deck: ' + t.deck + " cards</span>") +
      '<button class="btn gold sm" type="button" id="btDeal">Deal to ' + t.deck + '</button><button class="btn ghost sm" type="button" id="btLeave">Leave table</button></span></div>' +
      '<div class="btteam"><div class="btplayers">' + t.players.map(function (p) { return '<span class="btp' + (p.me ? " me" : "") + '"><span class="btav"' + (p.photo ? ' style="background-image:url(' + esc(p.photo) + ')"' : "") + "></span>" + esc(p.me ? "You" : p.name) + (p.host ? " · host" : "") + "</span>"; }).join("") +
      (n < 4 ? '<span class="btinvite">Table code <b>' + esc(t.code) + '</b> <button class="btn ghost sm" type="button" id="btShare">Invite friends</button> <span class="hint">' + (4 - n) + " seat" + (4 - n === 1 ? "" : "s") + " left</span></span>" : "") + "</div>" +
      (t.votes || []).map(function (v) { return '<div class="btvote"><span><b>' + esc(v.by_me ? "You" : v.by) + "</b> want" + (v.by_me ? "" : "s") + " to call <b>" + esc(v.card) + "</b> " + (v.guess === "bluff" ? "a House Card 🎭" : "a Player Card 🂠") + ' <small>(' + (v.yes || []).length + " of " + v.need + " said yes: " + esc((v.yes || []).join(", ")) + ")</small></span>" + (v.i_said_yes ? '<span class="hint">Waiting on the others</span>' : '<span class="row"><button class="btn gold sm" type="button" data-btyes="' + v.id + '">Yes, call it</button><button class="btn ghost sm" type="button" data-btno="' + v.id + '">No</button></span>'); }).join("") + "</div>" +
      '<div class="bluffgrid">' + (t.cards.length ? t.cards.map(teamCard).join("") : '<p class="hint">No cards yet. Tap Deal.</p>') + "</div>" +
      (n > 1 ? '<div class="panel btchat"><h3 style="font-size:1.1rem">Team chat</h3><div class="rmfeed" id="btFeed"></div><form class="rmsend" id="btSay" autocomplete="off"><label class="sr" for="btIn">Message your team</label><input id="btIn" maxlength="400" placeholder="Talk it over with your team…"><button class="btn gold" type="submit">Send</button></form><p class="hint">Only your team sees this.</p></div>' : "") +
      inboxHTML(inbox);
    if ($("#btMult")) $("#btMult").addEventListener("change", function () { lrpc("bluff_team_set_mult", { p_mult: +this.value }).then(renderBluff, function (er) { toast(er.message); }); });
    $("#btDeal").addEventListener("click", function () { lrpc("bluff_team_deal").then(function (r) { toast(r && r.dealt ? "Dealt. " + r.deck + " cards on the table." : "Your deck is full. Call a few cards to make room."); renderBluff(); }, function (er) { toast(er.message); }); });
    $("#btLeave").addEventListener("click", function () { if (!confirm("Leave this table?" + (n > 1 ? " Your friends keep playing." : ""))) return; lrpc("bluff_team_leave").then(renderBluff); });
    if ($("#btShare")) $("#btShare").addEventListener("click", function () { var msg = "Join my table at the SuiteFace Bluff Table. Code: " + t.code + " " + CFG.siteUrl + "bluff-table.html"; if (navigator.share) navigator.share({ text: msg }).catch(function () { }); else copy(msg, $("#btShare")); });
    if ($("#btSay")) { BT.chatLast = 0; pullTeamChat(); $("#btSay").addEventListener("submit", function (e) { e.preventDefault(); var v = $("#btIn").value.trim(); if (!v) return; $("#btIn").value = ""; lrpc("bluff_team_say", { p_body: v }).then(pullTeamChat, function (er) { toast(er.message); }); }); }
    clearInterval(BT.poll); BT.poll = setInterval(function () { if (!document.body.contains(el)) { clearInterval(BT.poll); return; } if ($("#btSay")) pullTeamChat(); lrpc("my_bluff_team").then(function (x) { if (!x || !x.team) return; var sig = JSON.stringify([x.votes, x.score, x.calls, (x.players || []).length, x.cards.map(function (c) { return c.guess + (c.last_body || ""); })]); if (sig !== BT.sig) { BT.sig = sig; if (!$("#modal") && document.activeElement && document.activeElement.id !== "btIn") teamView(el, x, inbox); } }); }, 4000);
    BT.sig = JSON.stringify([t.votes, t.score, t.calls, (t.players || []).length, t.cards.map(function (c) { return c.guess + (c.last_body || ""); })]);
  }
  function pullTeamChat() { lrpc("bluff_team_chat", { p_after: BT.chatLast }).then(function (rows) { var f = $("#btFeed"); if (!f) return; (rows || []).forEach(function (r) { BT.chatLast = Math.max(BT.chatLast, r.id); f.insertAdjacentHTML("beforeend", '<div class="rmmsg' + (r.mine ? " mine" : "") + '"><b class="rmn">' + esc(r.mine ? "You" : r.name) + '</b><span class="rmt">' + esc(r.body) + "</span></div>"); }); if ((rows || []).length) f.scrollTop = f.scrollHeight; if (!f.children.length) f.innerHTML = '<p class="hint rmempty">Talk it over here before you call a card.</p>'; else { var em = f.querySelector(".rmempty"); if (em && f.children.length > 1) em.remove(); } }); }
  function teamCard(h) {
    var called = !!h.guess, tag = h.revealed === "house" ? '<span class="btag house">House Card</span>' : h.revealed === "real" ? '<span class="btag real">Player Card</span>' : "";
    var pending = (BT.state && BT.state.votes || []).filter(function (v) { return v.hand_id === h.hand_id; })[0];
    return '<div class="bcard' + (called ? " called" : "") + '"><div class="bph" ' + (h.photo_url ? 'style="background-image:url(' + esc(h.photo_url) + ')"' : "") + ">" + tag + "</div>" +
      '<div class="bbody"><b>' + esc(h.name || "Player") + (h.age ? ", " + h.age : "") + "</b><small>" + esc(h.city || "") + (h.suit && SUIT[h.suit] ? " · " + SUIT[h.suit].sym + " " + SUIT[h.suit].name : "") + "</small>" +
      (h.bio ? '<p class="bbio">' + esc(h.bio) + "</p>" : "") + (h.last_body ? '<p class="blast">' + esc(h.last_body.slice(0, 70)) + "</p>" : "") +
      (called ? '<p class="bres ' + (h.correct ? "ok" : "no") + '">' + (h.correct ? "✓ Called it: " : "✗ Not this time: ") + (h.revealed === "house" ? "a House Card." : "a Player Card (a real player).") + "</p>" +
          (h.revealed === "house" ? '<div class="bact"><button class="btn ghost sm" type="button" data-bchat="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">💬 Keep playing this hand</button></div><p class="hint">Played by SuiteFace\'s AI dealer. Just for fun: House Cards can\'t Pair, date or video chat.</p>' : "") +
          (h.revealed === "real" ? '<div class="bact"><button class="btn ghost sm" type="button" data-bchat="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">💬 Chat</button><button class="btn gold sm" type="button" data-bvideo="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">📹 Video chat</button>' + loungeBtn("bluff", h.hand_id, "", h.name) + friendBtn(h.hand_id, "bluff") + "</div>" : "") :
        pending ? '<p class="hint">Call waiting for your team…</p><div class="bact"><button class="btn ghost sm" type="button" data-bchat="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">💬 Chat</button></div>' :
        '<div class="bact"><button class="btn ghost sm" type="button" data-bchat="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">💬 Chat</button><button class="btn ghost sm" type="button" data-bvideo="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">📹 Video</button><button class="btn sm bbluff" type="button" data-btcall="bluff" data-bh="' + h.hand_id + '">🎭 House Card</button><button class="btn sm breal" type="button" data-btcall="real" data-bh="' + h.hand_id + '">🂠 Player Card</button></div>') + "</div></div>";
  }
  function showVerdict(r) { if (!r || !r.truth) return; var house = r.truth === "house"; modal('<div class="bverdict ' + (r.correct ? "ok" : "no") + '"><span class="big">' + (house ? "🎭" : "💞") + "</span><h3>" + (house ? "Bluff! That was a House Card." : "Player Card! That's a real player.") + '</h3><p class="lede">' + (r.correct ? "You called it. +1 to your table." : "Not this time.") + " Score: <b>" + r.score + "</b></p></div>"); if (r.correct) jackpot(2200); }
  document.addEventListener("click", function (e) {
    if (!bluffEl()) return; var b;
    if ((b = e.target.closest("[data-btcall]"))) {
      var n = (BT.state && BT.state.players || []).length, g = b.getAttribute("data-btcall");
      if (!confirm(n > 1 ? "Ask your team to call this card " + (g === "bluff" ? "a House Card" : "a Player Card") + "? Everyone has to say yes." : "Call this card " + (g === "bluff" ? "a House Card" : "a Player Card") + "? One call per card.")) return;
      lrpc("bluff_team_propose", { p_hand: b.getAttribute("data-bh"), p_guess: g }).then(function (r) { if (r && r.truth) showVerdict(r); else toast("Sent to your team. The call goes in when everyone says yes."); renderBluff(); }, function (er) { toast(er.message); }); return;
    }
    if ((b = e.target.closest("[data-btyes]")) || (b = e.target.closest("[data-btno]"))) {
      var yes = b.hasAttribute("data-btyes");
      lrpc("bluff_team_vote", { p_vote: b.getAttribute(yes ? "data-btyes" : "data-btno"), p_yes: yes }).then(function (r) { if (r && r.truth) showVerdict(r); else if (r && r.cancelled) toast("Call cancelled. Talk it over."); else if (yes) toast("You said yes. Waiting on the others."); renderBluff(); }, function (er) { toast(er.message); });
    }
  });

  function bluffCard(h) {
    var called = !!h.guess, tag = h.revealed === "house" ? '<span class="btag house">House Card</span>' : h.revealed === "real" ? '<span class="btag real">Player Card</span>' : "";
    return '<div class="bcard' + (called ? " called" : "") + '"><div class="bph" ' + (h.photo_url ? 'style="background-image:url(' + esc(h.photo_url) + ')"' : "") + '>' + tag + "</div>" +
      '<div class="bbody"><b>' + esc(h.name || "Player") + (h.age ? ", " + h.age : "") + "</b><small>" + esc(h.city || "") + (h.suit && SUIT[h.suit] ? " · " + SUIT[h.suit].sym + " " + SUIT[h.suit].name : "") + "</small>" +
      (h.bio ? '<p class="bbio">' + esc(h.bio) + "</p>" : "") + (h.last_body ? '<p class="blast">' + (h.last_mine ? "You: " : "") + esc(h.last_body.slice(0, 70)) + "</p>" : "") +
      (called ? '<p class="bres ' + (h.correct ? "ok" : "no") + '">' + (h.correct ? "✓ You called it: " : "✗ Not this time: ") + (h.revealed === "house" ? "a House Card." : "a Player Card (a real player).") + "</p>" :
        '<div class="bact"><button class="btn ghost sm" type="button" data-bchat="' + h.hand_id + '" data-bname="' + esc(h.name || "") + '">💬 Chat</button><button class="btn sm bbluff" type="button" data-bcall="bluff" data-bh="' + h.hand_id + '">🎭 House Card</button><button class="btn sm breal" type="button" data-bcall="real" data-bh="' + h.hand_id + '">🂠 Player Card</button></div>') + "</div></div>";
  }
  function bluffChat(handId, name, asCard) {
    var m = modal('<div class="bchead"><h3 style="font-size:1.5rem">' + esc(name || "Chat") + '</h3>' + (asCard || (((BT.state && BT.state.cards) || []).filter(function (x) { return x.hand_id === handId; })[0] || {}).revealed === "house" ? "" : '<button class="btn ghost sm" type="button" data-bvideo="' + handId + '" data-bname="' + esc(name || "") + '">📹 Video chat</button>') + '</div><p class="hint">' + (asCard ? "They're chatting with your card. Reply as yourself." : (function () { var cc = ((BT.state && BT.state.cards) || []).filter(function (x) { return x.hand_id === handId; })[0]; return cc && cc.revealed === "house" ? "🎭 You called it: a House Card, played by SuiteFace's AI dealer. Keep playing just for fun." : cc && cc.revealed === "real" ? "🂠 A real player. Say hi, video chat, or invite them to the Lounge." : "Player Card or House Card? Chat, then call it. Video unlocks once you call a Player Card."; })()) + '</p><div class="bthread" id="bThread"><p class="hint">Loading…</p></div><form id="bForm" class="bform"><input id="bIn" maxlength="600" placeholder="Say something…" autocomplete="off"><button class="btn gold sm" type="submit">Send</button></form>' + (asCard ? "" : '<div class="row" style="margin-top:8px"><button class="btn sm bbluff" type="button" data-btcall="bluff" data-bh="' + handId + '">🎭 House Card</button><button class="btn sm breal" type="button" data-btcall="real" data-bh="' + handId + '">🂠 Player Card</button></div>') +
      '<div class="breport"><button class="linkish" type="button" id="bRepBtn">⚑ Report this chat</button><div id="bRep" hidden><label for="bRepWhy">What happened?</label><select id="bRepWhy"><option value="">Choose a reason</option><option>Sexual or explicit</option><option>Harassment or threats</option><option>Asked for money or gifts</option><option>May be under 18</option><option>Scam or moving off SuiteFace</option><option>Felt unsafe</option><option>Something else</option></select><textarea id="bRepNote" rows="2" maxlength="600" placeholder="Anything we should know? (optional)"></textarea><div class="row"><button class="btn red sm" type="button" id="bRepGo">End chat and report</button><button class="btn ghost sm" type="button" id="bRepNo">Cancel</button></div><p class="hint">Our safety team gets the reason and the last messages. The chat ends right away and the other person is flagged. In danger? Call 911.</p></div></div>');
    $("#bRepBtn", m).addEventListener("click", function () { $("#bRep", m).hidden = false; $("#bRepBtn", m).hidden = true; });
    $("#bRepNo", m).addEventListener("click", function () { $("#bRep", m).hidden = true; $("#bRepBtn", m).hidden = false; });
    $("#bRepGo", m).addEventListener("click", function () { var why = $("#bRepWhy", m).value; if (!why) { toast("Pick a reason."); return; } lrpc("bluff_report", { p_hand: handId, p_reason: why, p_note: $("#bRepNote", m).value }).then(function () { closeModal(); toast("Chat ended and reported. Thank you for telling us."); renderBluff(); }, function (er) { toast(er.message); }); });
    function load() { lrpc("bluff_thread_v2", { p_hand: handId }).then(function (rows) { rows = (rows || []).map(function (r) { return { mine: asCard ? !r.from_table : r.mine, body: (!asCard && r.from_table && !r.mine && r.name ? r.name + ": " : "") + r.body, at: r.at }; }); var t = $("#bThread", m); if (!t) return; t.innerHTML = (rows || []).length ? rows.map(function (r) { return '<div class="msg ' + (r.mine ? "me" : "them") + '">' + esc(r.body) + "</div>"; }).join("") : '<p class="hint">Say hello. First impressions count.</p>'; t.scrollTop = t.scrollHeight; }); }
    /* Typing dots come only from the server, for real members and House Cards alike, so they never give a card away. */
    var lastSig = "", dots = false;
    function setDots(on) { var t = $("#bThread", m); if (!t) return; var d = $("#bTyping", m); if (on && !d) { t.insertAdjacentHTML("beforeend", '<div class="msg them typing" id="bTyping" aria-label="typing"><i></i><i></i><i></i></div>'); t.scrollTop = t.scrollHeight; } if (!on && d) d.remove(); dots = on; }
    var load0 = load; load = function () { lrpc("bluff_thread_v2", { p_hand: handId }).then(function (rows) { var sig = (rows || []).length + ":" + ((rows || []).slice(-1)[0] || {}).at; if (sig !== lastSig) { lastSig = sig; load0(); setTimeout(function () { if (dots) { dots = false; setDots(true); } }, 350); } }, function () { }); };
    function typingTick() { lrpc("bluff_other_typing", { p_hand: handId }).then(function (on) { setDots(!!on); }, function () { }); }
    load0(); clearInterval(bluffPoll); var ticks = 0; bluffPoll = setInterval(function () { if (!document.body.contains(m) || ++ticks > 900) { clearInterval(bluffPoll); return; } typingTick(); if (ticks % 2 === 0) load(); }, 1500);
    var lastPing = 0; $("#bIn", m).addEventListener("input", function () { if (Date.now() - lastPing > 3000) { lastPing = Date.now(); lrpc("bluff_typing", { p_hand: handId }).catch(function () { }); } });
    $("#bForm", m).addEventListener("submit", function (e) {
      e.preventDefault(); var inp = $("#bIn", m), v = inp.value.trim(); if (!v) return; inp.value = "";
      var t = $("#bThread", m); if (t) { var d = $("#bTyping", m); if (d) d.remove(); t.insertAdjacentHTML("beforeend", '<div class="msg me">' + esc(v) + "</div>"); t.scrollTop = t.scrollHeight; }
      var send = asCard ? lrpc("bluff_send", { p_hand: handId, p_body: v }) : fetch(CFG.supabaseUrl + "/functions/v1/bluff-chat", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + window.SF_LIVE.token() }, body: JSON.stringify({ hand: handId, text: v }) }).then(function (r) { return r.json().then(function (j) { if (j && j.error) throw new Error(j.error); }); });
      // Don't wait for the reply here: it arrives through the thread, after the dots, like any message.
      send.then(function () { load(); }, function (er) { toast((er && er.message) || "Couldn't send."); });
      setTimeout(load, 800);
    });
  }
  document.addEventListener("click", function (e) {
    if (!bluffEl()) return;
    var t = e.target;
    if (t.closest("[data-bdeal]")) { lrpc("bluff_deal").then(function (n) { toast(n ? "Fresh cards on the table." : "Your hand is full. Call a card to make room."); renderBluff(); }, function (er) { toast(er.message); }); return; }
    if (t.closest("[data-bleave]")) { if (!confirm("Leave the Bluff Table? Your score stays.")) return; lrpc("bluff_join", { p_on: false }).then(renderBluff); return; }
    var c = t.closest("[data-bchat]"); if (c) { bluffChat(c.getAttribute("data-bchat"), c.getAttribute("data-bname"), false); return; }
    var ib = t.closest("[data-bin]"); if (ib) { bluffChat(ib.getAttribute("data-bin"), ib.getAttribute("data-bname"), true); return; }
    var k = t.closest("[data-bcall]");
    if (k) { var g = k.getAttribute("data-bcall");
      lrpc("call_bluff", { p_hand: k.getAttribute("data-bh"), p_guess: g }).then(function (r) {
        closeModal(); var house = r.truth === "house";
        modal('<div class="bverdict ' + (r.correct ? "ok" : "no") + '"><span class="big">' + (house ? "🎭" : "💞") + '</span><h3>' + (house ? "Bluff! That was a House Card." : "Player Card! That's a real player.") + "</h3><p class=\"lede\">" + (r.correct ? "You called it. Score: " + r.score + "." : "Not this time. Score: " + r.score + ".") + (house ? " House Cards are played by SuiteFace's AI dealer." : " If you're curious about them, they might be in your deck one day.") + '</p><div class="row"><button class="btn gold" type="button" data-close>Back to the table</button></div></div>');
        if (r.correct) jackpot(2200); renderBluff();
      }, function (er) { toast(er.message); }); }
  });
  if (bluffEl()) renderBluff();
  document.addEventListener("sf:live", function () { setTimeout(renderBluff, 0); });

  /* ---------- Your Lobby: your own card exactly as other players get it dealt, with a tray to place and peel stickers.
     Uses the same card template as the deck, so what you see here is what they see. ---------- */
  var LOBBY = { tab: "stickers", venues: null, flipped: false };
  function selfCard() {
    var V = P.ver || {}, s = P.mySuit || (P.trumps || ["heart"])[0];
    return { id: "me-lobby", name: P.name || "Your Name", age: parseInt(P.age, 10) || "", dist: 1, suit: s, rank: "A", looking: P.looking || "longterm",
      interests: P.interests || [], bio: P.bio || "Your Face Value goes here.", hue: 28, shared: [], city: "", wins: P.wins || null, founder: P.founderNo || null,
      hr: P.highRoller || null, photoV: !!(V.photo || (P.photoLive && P.photo)), idV: !!V.id, confirmed: [], bumpers: P.bumpers || [], bumpersOk: P.bumpersOk || [],
      cardStickers: P.stickers || [], venueStickers: (LOBBY.venues || []).filter(function (v) { return v.shown; }), comps: P.myComps || null, cardBack: P.cardBack || null, jk: 0, id_: {}, photo: P.photo || null, cardTop: P.cardTop || null, self: true };
  }
  function lobbySpots(p) {
    var spots = [];
    if (p.wins && topWin(p.wins)) spots.push(["Earned", winBadge(p.wins)]);
    if (p.founder && window.SFSlots) spots.push(["Earned", SFSlots.founder(p.founder, 30)]);
    if (p.hr) spots.push(["High Roller", "💎"]);
    if (!p.hr && (p.photoV || p.idV)) spots.push(["Verified", (p.photoV ? "📷✓" : "") + (p.idV ? " 🪪✓" : "")]);
    LOBBY.earned = spots.length;
    topItems(p).forEach(function (x) { spots.push([{ bump: "Bumper", stk: "Sticker", venue: "Date spot" }[x.kind], x.html, x.kind, x.k, x.t]); });
    return spots;
  }
  function renderLobby() {
    var el = $("#lbCard"); if (!el) return;
    var p = selfCard(), html = "";
    try { html = cardHTML(p, 0); } catch (e) { html = '<div class="slot"><div class="pcard"><div class="flip">' + coverHTML(p) + "</div></div></div>"; }
    el.innerHTML = html; var ca = el.querySelector(".card-actions"); if (ca) ca.remove();
    var pc = el.querySelector(".pcard"); if (pc) { pc.classList.toggle("flipped", LOBBY.flipped); pc.setAttribute("aria-label", "Your card. Press to flip it."); }
    var spots = lobbySpots(p), top = spots.slice(0, 3), more = spots.slice(3);
    $("#lbSpots").innerHTML = [0, 1, 2].map(function (i) { var s = top[i];
      return s ? '<div class="lb-spot on' + (s[4] ? " mov" : " fixed") + '" data-spot="' + i + '"' + (s[4] ? ' data-drag="' + esc(s[4]) + '"' : "") + '><span class="lb-n">' + (i + 1) + '</span><div class="lb-art">' + s[1] + "</div><small>" + esc(s[0]) + (s[4] ? ' <span class="lb-grip" aria-hidden="true">⠿</span>' : "") + "</small>" + (s[2] ? '<button type="button" class="linkish" data-lbpeel="' + s[2] + '" data-k="' + esc(s[3]) + '">Peel off</button>' : "") + "</div>"
        : '<div class="lb-spot" data-spot="' + i + '"><span class="lb-n">' + (i + 1) + '</span><div class="lb-art lb-empty">+</div><small>Drag a sticker here</small></div>'; }).join("") +
      (more.length ? '<p class="hint lb-more">Under <b>More</b>: ' + more.map(function (s) { return '<span class="lb-mini">' + s[1] + "</span>"; }).join(" ") + "</p>" : "");
    lobbyPane();
    var cb = P.cardBack && CB[P.cardBack];
    $("#lbBack").innerHTML = '<div class="lb-backrow">' + (typeof cbPreview === "function" ? cbPreview(P.cardBack || null, 74) : "") + '<div><h3>Card back</h3><p class="hint">' + (cb ? "<b>" + esc(cb[0]) + "</b> is on the back of your card." : "You're using the house design.") + '</p><a class="btn ghost sm" href="card-backs.html">Choose a card back</a></div></div>';
  }
  function lobbyPane() {
    var pane = $("#lbPane"); if (!pane) return; var t = LOBBY.tab, h = "";
    $$("#lbTabs [data-lbtab]").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-lbtab") === t ? "true" : "false"); });
    if (t === "stickers") {
      h = '<p class="hint">Up to 3. Tap to place, tap again to peel. Free and earned stickers are ready now; the paid packs open soon.</p>' + Object.keys(PACKS).map(function (pk) {
        var list = STICKERS.filter(function (k) { return k[2] === pk; }), paid = !!PACKS[pk][1];
        return '<div class="lb-pack"><span class="stkhead">' + esc(PACKS[pk][0]) + (paid ? ' <span class="hint">· opens soon</span>' : pk === "earned" ? ' <span class="hint">· First 1,000 and friends who join</span>' : pk === "free" ? "" : ' <span class="free">Free</span>') + '</span><div class="lb-grid">' +
          list.map(function (k) { var on = P.stickers.indexOf(k[0]) > -1, lock = paid || (pk === "earned" && !earnedHas(k[0]));
            return '<button type="button" class="lb-item' + (on ? " on" : "") + (lock ? " lock" : "") + (pk === "passport" || pk === "earned" ? " wide" : "") + '"' + (lock ? "" : ' data-drag="stk:' + k[0] + '"') + ' data-lbstk="' + k[0] + '"' + (lock ? ' data-lblock="' + pk + '"' : "") + ' aria-pressed="' + on + '">' + k[1] + (lock ? "<em>🔒</em>" : "") + "</button>"; }).join("") + "</div></div>";
      }).join("");
    } else if (t === "bumpers") {
      h = '<p class="hint">Up to 3: what you\'d proudly put on your car. Self-declared until the house checks it; checked ones wear a brass ✓.</p><div class="lb-grid">' + (window.SFBumpers ? SFBumpers.list.map(function (b) { var on = P.bumpers.indexOf(b[0]) > -1;
        return '<button type="button" class="lb-item wide' + (on ? " on" : "") + '" data-drag="bump:' + b[0] + '" data-lbbump="' + b[0] + '" aria-pressed="' + on + '">' + SFBumpers.html(b[0], { verified: P.bumpersOk.indexOf(b[0]) > -1 }) + "</button>"; }).join("") : "") + "</div>";
    } else if (t === "spots") {
      if (!liveOn()) h = '<p class="hint">Date spot stickers are thank-yous from venues that honored your Date Deal. Log in to see yours.</p>';
      else if (LOBBY.venues === null) { h = '<p class="hint">Loading…</p>'; lrpc("my_venue_stickers_v2").then(function (r) { LOBBY.venues = r || []; renderLobby(); }, function () { LOBBY.venues = []; lobbyPane(); }); }
      else if (!LOBBY.venues.length) h = '<p class="hint">None yet. Use a Date Deal with a Pair and the venue\'s thank-you sticker lands here.</p>';
      else h = '<p class="hint">Choose which date spots show on your card.</p><div class="lb-grid">' + LOBBY.venues.map(function (v) { return '<button type="button" class="lb-item wide' + (v.shown ? " on" : "") + '" data-drag="venue:' + esc(v.partner_id) + '" data-lbvenue="' + esc(v.partner_id) + '" aria-pressed="' + !!v.shown + '">' + venueSticker(v, 18) + "</button>"; }).join("") + "</div>";
    } else if (t === "comps") {
      var rows = P.compRows || [];
      h = rows.length ? '<p class="hint">Compliments from your dates. Earned, never bought. Hide any you\'d rather not show.</p><div class="lb-grid">' + rows.map(function (x) { var M = window.SFSlots ? SFSlots.meaning[x.kind] : null;
        return '<button type="button" class="lb-item wide' + (x.hidden ? "" : " on") + '" data-lbcomp="' + esc(x.kind) + '" aria-pressed="' + !x.hidden + '">' + (window.SFSlots ? SFSlots.svg(x.kind, 22) : "") + "<b>" + esc(M ? M[0] : x.kind) + "</b><i>×" + x.n + "</i></button>"; }).join("") + "</div>"
        : '<p class="hint">After a date, your match can leave compliment stickers like Great Listener or Made Me Laugh. They show up here.</p>';
    } else {
      var items = [];
      if (P.wins && P.wins.length) P.wins.forEach(function (w) { if (WINS[w]) items.push(winIcon(w, 22) + "<b>" + esc(WINS[w].long) + "</b>"); });
      if (P.founderNo && window.SFSlots) items.push(SFSlots.founder(P.founderNo, 26) + "<b>First 1,000 · №" + String(P.founderNo).padStart(4, "0") + "</b>");
      var V = P.ver || {}; if (V.photo || (P.photoLive && P.photo)) items.push("📷 <b>Photo verified</b>"); if (V.id) items.push("🪪 <b>ID verified</b>");
      h = '<p class="hint">Earned badges always lead the top of your card. You can\'t buy them, only win them.</p>' + (items.length ? '<div class="lb-earned">' + items.map(function (x) { return '<span class="lb-e">' + x + "</span>"; }).join("") + "</div>" : '<p class="hint">Nothing yet. Verify your photo or ID, win a hand for <a href="winners.html">Winners\' Row</a>, or invite friends to earn stamps.</p>');
    }
    pane.innerHTML = h;
  }
  document.addEventListener("click", function (e) {
    var t = e.target, b;
    if (!t.closest || !t.closest("#lobby")) return;
    if ((b = t.closest("#lbCard .pcard")) || t.closest("#lbFlip")) { e.preventDefault(); LOBBY.flipped = !LOBBY.flipped; var pc = $("#lbCard .pcard"); if (pc) pc.classList.toggle("flipped", LOBBY.flipped); return; }
    if ((b = t.closest("[data-lbtab]"))) { LOBBY.tab = b.getAttribute("data-lbtab"); lobbyPane(); return; }
    if ((b = t.closest("[data-lblock]"))) { var pk = b.getAttribute("data-lblock"); toast(pk === "earned" ? (b.getAttribute("data-lbstk") === "first1000" ? "The First 1,000 stamp is for founding players." : "Unlocks when friends you invited join. Share your invite link from My table.") : PACKS[pk][0] + " stickers open soon."); return; }
    if ((b = t.closest("[data-lbstk]"))) { toggleSticker(b.getAttribute("data-lbstk")); return; }
    if ((b = t.closest("[data-lbbump]"))) { toggleBumper(b.getAttribute("data-lbbump"), true); return; }
    if ((b = t.closest("[data-lbpeel]"))) { var kind = b.getAttribute("data-lbpeel"), k = b.getAttribute("data-k");
      if (kind === "stk") toggleSticker(k); else if (kind === "bump") toggleBumper(k, true);
      else if (kind === "venue") lrpc("set_venue_sticker_shown", { p_partner: k, p_shown: false }).then(function () { (LOBBY.venues || []).forEach(function (v) { if (v.partner_id === k) v.shown = false; }); renderLobby(); renderVenueStickPanel(); }, function (er) { toast(er.message); });
      return; }
    if ((b = t.closest("[data-lbvenue]"))) { var id = b.getAttribute("data-lbvenue"), v = (LOBBY.venues || []).filter(function (x) { return x.partner_id === id; })[0]; if (!v) return;
      lrpc("set_venue_sticker_shown", { p_partner: id, p_shown: !v.shown }).then(function () { v.shown = !v.shown; renderLobby(); renderVenueStickPanel(); toast(v.shown ? "It's on your card." : "Peeled off your card."); }, function (er) { toast(er.message); }); return; }
    if ((b = t.closest("[data-lbcomp]"))) { var ck = b.getAttribute("data-lbcomp"), row = (P.compRows || []).filter(function (x) { return x.kind === ck; })[0]; if (!row) return; var hide = !row.hidden;
      lrpc("set_compliment_hidden", { p_kind: ck, p_hidden: hide }).then(function () { row.hidden = hide; P.myComps = null; (P.compRows || []).forEach(function (x) { if (!x.hidden) { P.myComps = P.myComps || {}; P.myComps[x.kind] = x.n; } }); saveP(); renderCard(); renderCompPanel(); renderLobby(); }, function (er) { toast(er.message); }); return; }
  });
  /* Drag to place: hold a tray sticker (or a placed one) and slide it onto a spot on the top of your card.
     Works with a finger or a mouse. A quick tap still places or peels as before. */
  function lobbyOrder() { return topItems(selfCard()).map(function (x) { return x.t; }); }
  function saveTop(order) { P.cardTop = order; saveP(); renderLobby(); if (liveOn()) lrpc("set_my_card_top", { p_order: order }).then(function (v) { P.cardTop = v || order; saveP(); }, function (er) { toast(er.message); }); }
  function placeTok(tok, at) {
    var kind = tok.split(":")[0], key = tok.slice(kind.length + 1), placed = lobbyOrder().indexOf(tok) > -1;
    var then = function () { var o = lobbyOrder().filter(function (t) { return t !== tok; }); o.splice(Math.max(0, Math.min(at, o.length)), 0, tok); saveTop(o); };
    if (placed) { then(); return; }
    if (kind === "stk") { if (P.stickers.length >= 3) { toast("Up to 3 stickers. Peel one off first."); return; } toggleSticker(key); then(); }
    else if (kind === "bump") { if (P.bumpers.length >= 3) { toast("Up to 3 bumper stickers. Peel one off first."); return; } toggleBumper(key, true); then(); }
    else if (kind === "venue") { lrpc("set_venue_sticker_shown", { p_partner: key, p_shown: true }).then(function () { (LOBBY.venues || []).forEach(function (v) { if (v.partner_id === key) v.shown = true; }); then(); renderVenueStickPanel(); }, function (er) { toast(er.message); }); }
  }
  var LD = null;
  document.addEventListener("pointerdown", function (e) {
    var el = e.target.closest && e.target.closest("#lobby [data-drag]"); if (!el || e.button > 0 || e.target.closest("[data-lbpeel]")) return;
    LD = { el: el, tok: el.getAttribute("data-drag"), x: e.clientX, y: e.clientY, armed: false, id: e.pointerId, touch: e.pointerType !== "mouse" };
    LD.timer = setTimeout(function () { if (LD) arm(e.clientX, e.clientY); }, LD.touch ? 220 : 120);
  });
  function arm(x, y) {
    if (!LD || LD.armed) return; LD.armed = true; LOBBY.dragging = true;
    var r = LD.el.getBoundingClientRect(), g = LD.el.cloneNode(true); g.className += " lb-ghost"; g.removeAttribute("id");
    g.style.width = r.width + "px"; g.style.left = (x - r.width / 2) + "px"; g.style.top = (y - r.height / 2) + "px"; document.body.appendChild(g); LD.g = g; LD.w = r.width; LD.h = r.height;
    LD.el.classList.add("lb-dragging"); document.body.classList.add("lb-dragmode"); if (navigator.vibrate) try { navigator.vibrate(12); } catch (er) { }
  }
  document.addEventListener("pointermove", function (e) {
    if (!LD || e.pointerId !== LD.id) return;
    if (!LD.armed) { if (Math.abs(e.clientX - LD.x) + Math.abs(e.clientY - LD.y) > 10) { if (LD.touch) { clearTimeout(LD.timer); LD = null; return; } arm(e.clientX, e.clientY); } else return; }
    LD.g.style.left = (e.clientX - LD.w / 2) + "px"; LD.g.style.top = (e.clientY - LD.h / 2) + "px";
    // Scroll the page while dragging near the top or bottom edge, so a spot above or below is always reachable.
    var edge = 90, vh = innerHeight; clearInterval(LOBBY.auto);
    if (e.clientY < edge || e.clientY > vh - edge) { var dir = e.clientY < edge ? -1 : 1; LOBBY.auto = setInterval(function () { if (!LOBBY.dragging) { clearInterval(LOBBY.auto); return; } scrollBy(0, dir * 14); }, 16); }
    $$("#lbSpots .lb-spot").forEach(function (s) { s.classList.remove("lb-over"); });
    LD.g.style.display = "none"; var under = document.elementFromPoint(e.clientX, e.clientY); LD.g.style.display = "";
    var sp = under && under.closest && (under.closest("#lbSpots .lb-spot") || (under.closest("#lbCard") ? $("#lbSpots .lb-spot:not(.on)") || $$("#lbSpots .lb-spot").slice(-1)[0] : null));
    LD.over = sp || null; if (sp) sp.classList.add("lb-over");
  });
  document.addEventListener("touchmove", function (e) { if (LOBBY.dragging) e.preventDefault(); }, { passive: false });
  function endDrag(e) {
    if (!LD) return; clearTimeout(LD.timer); clearInterval(LOBBY.auto); var d = LD; LD = null; LOBBY.dragging = false;
    document.body.classList.remove("lb-dragmode"); if (d.g) d.g.remove(); d.el.classList.remove("lb-dragging");
    $$("#lbSpots .lb-spot").forEach(function (s) { s.classList.remove("lb-over"); });
    if (!d.armed) return;
    d.el.__noclick = Date.now();
    if (!d.over || (d.over.classList.contains("fixed"))) { if (d.over) toast("Earned badges always lead. Drop it in a sticker spot."); return; }
    var at = Math.max(0, (+d.over.getAttribute("data-spot")) - (LOBBY.earned || 0));
    placeTok(d.tok, at); toast("Placed on your card.");
  }
  document.addEventListener("pointerup", endDrag); document.addEventListener("pointercancel", endDrag);
  // A drag shouldn't also count as a tap.
  document.addEventListener("click", function (e) { var el = e.target.closest && e.target.closest("#lobby [data-drag]"); if (el && el.__noclick && Date.now() - el.__noclick < 400) { e.stopImmediatePropagation(); e.preventDefault(); } }, true);
  // Play card: your card is set; deal it into play and head to your hand.
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest("#lbPlay")) return;
    var pc = $("#lbCard .pcard"); if (pc) pc.classList.add("lb-dealt");
    jackpot(1600); toast("Your card is in play. Here's your hand.");
    setTimeout(function () { if (pc) pc.classList.remove("lb-dealt"); var t = $("#table"); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); else location.href = "my-table.html#table"; }, 900);
  });
  document.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("#lbCard .pcard")) { e.preventDefault(); LOBBY.flipped = !LOBBY.flipped; e.target.closest(".pcard").classList.toggle("flipped", LOBBY.flipped); } });
  document.addEventListener("sf:live", function () { LOBBY.venues = null; setTimeout(renderLobby, 1200); $$(".backlobby").forEach(function (x) { x.hidden = !liveOn(); }); });
  if ($("#lbCard")) setTimeout(renderLobby, 0);

  /* ---------- Double & group dates: your crew is one hand. Each pairing between your crew and theirs is a card,
     ranked A down to 2 for fit. "Best all around" is the strongest total; "the Ace" is the single best card. ---------- */
  var CR = { st: null };
  var SUITSYM = { heart: "♥", diamond: "♦", club: "♣", spade: "♠" };
  function crewCard(p, rank, small) {
    p = p || {}; var red = p.suit === "heart" || p.suit === "diamond";
    return '<span class="cr-card' + (small ? " sm" : "") + '"><span class="cr-ph"' + (p.photo ? ' style="background-image:url(' + esc(p.photo) + ')"' : "") + ">" + (p.photo ? "" : esc((p.name || "?").charAt(0))) + "</span>" +
      (rank ? '<span class="cr-rank' + (red ? " r" : "") + '">' + esc(rank) + "<small>" + (SUITSYM[p.suit] || "") + "</small></span>" : "") + "<b>" + esc(p.name || "") + (p.age ? ", " + p.age : "") + "</b></span>";
  }
  function renderCrews() {
    var el = $("#crews"); if (!el || !liveOn()) return;
    lrpc("my_crew").then(function (d) {
      CR.st = d = d || {}; el.hidden = false; var c = d.crew, inv = d.invites || [], ms = d.matches || [];
      var h = '<h3 style="font-size:1.2rem;margin:0 0 4px">👯 Double &amp; group dates</h3><p class="hint" style="margin:0 0 10px">Team up with friends and play as one hand. Each of you is matched one-on-one with someone in the other group, and every card is ranked for fit.</p>';
      h += inv.map(function (i) { return '<div class="fr-row ask"><span class="fr-who"><b>' + esc(i.from) + " invited you to a " + (i.size === 2 ? "double date" : "group date of " + i.size) + "</b><small>" + esc(i.name || "Crew") + '</small></span><span class="fr-act"><button class="btn gold sm" type="button" data-crewyes="' + i.id + '">Join the crew</button><button class="btn ghost sm" type="button" data-crewno="' + i.id + '">Not now</button></span></div>'; }).join("");
      if (ms.length) h += '<div class="cr-ms">' + ms.map(function (x) { return '<div class="fr-row"><span class="fr-who"><b>🎉 Group date match</b><small>with ' + esc(x.other || "") + '</small></span><span class="fr-act"><button class="btn gold sm" type="button" data-crewchat="' + x.id + '">💬 Group chat</button></span></div>'; }).join("") + "</div>";
      if (!c) {
        var fs = ((FR.data && FR.data.friends) || []);
        h += '<div class="cr-new"><div class="cr-row"><label for="crSize">Play as</label><select id="crSize"><option value="2">Double date (you + 1 friend)</option><option value="3">Group date (you + 2 friends)</option><option value="4">Group date (you + 3 friends)</option></select></div>' +
          '<div class="cr-row"><label for="crName">Crew name</label><input id="crName" maxlength="40" placeholder="Brunch Bunch"></div>' +
          (fs.length ? '<p class="hint" style="margin:6px 0">Bring friends:</p><div class="cr-pick">' + fs.map(function (f) { return '<label class="chk"><input type="checkbox" data-crpick="' + f.id + '"> ' + esc(f.name) + "</label>"; }).join("") + '</div><button class="btn gold sm" type="button" id="crGo">Start the crew</button>' : '<p class="hint">Add a friend first (from a Pair, the Lounge or a Private Table), then team up here.</p>') + "</div>";
      } else {
        h += '<div class="cr-crew"><div class="cr-head"><b>' + esc(c.name || "Your crew") + '</b> <span class="hint">' + (c.size === 2 ? "Double date" : "Group date of " + c.size) + " · " + (c.status === "active" ? "ready to play" : "waiting on friends") + '</span><button class="linkish" type="button" id="crLeave">Leave crew</button></div><div class="cr-team">' + (c.members || []).map(function (p) { return '<span class="' + (p.status === "in" ? "" : "cr-wait") + '" title="' + (p.status === "in" ? "In" : "Invited") + '">' + crewCard(p, null, true) + "</span>"; }).join("") + "</div>" +
          (c.status === "active" ? '<button class="btn gold sm" type="button" id="crDeal">🃏 Deal our hand</button><div id="crHands"></div>' : '<p class="hint">Everyone has to join before you can play.</p>') + "</div>";
      }
      el.innerHTML = h;
    }, function () { });
  }
  function crewHands() {
    var box = $("#crHands"); if (!box) return; box.innerHTML = '<p class="hint">Shuffling…</p>';
    lrpc("crew_deck").then(function (d) {
      var hs = (d && d.hands) || []; if (!hs.length) { box.innerHTML = '<p class="hint">No other ' + ((d && d.size) === 2 ? "double-date pairs" : "groups") + ' fit everyone\'s dealbreakers yet. Check back soon.</p>'; return; }
      var bestAce = Math.max.apply(null, hs.map(function (x) { return x.pairing.best; })), top = hs[0].pairing.total;
      box.innerHTML = hs.map(function (x) { var P = x.people || {}, pr = x.pairing, me = (CR.st && CR.st.crew) ? CR.st.crew.size : 2;
        return '<div class="cr-hand"><div class="cr-hhead"><b>' + esc(x.name || "Another crew") + "</b>" + (pr.total === top ? '<span class="cr-tag all">★ Best all around</span>' : "") + (pr.best === bestAce ? '<span class="cr-tag ace">♠ Holds the best card</span>' : "") + "</div>" +
          '<div class="cr-pairs">' + pr.cards.map(function (k) { return '<div class="cr-pair">' + crewCard(P[k.mine], null, true) + '<span class="cr-vs">♥</span>' + crewCard(P[k.theirs], k.rank) + "</div>"; }).join("") + "</div>" +
          '<p class="cr-score">Hand: <b>' + pr.cards.map(function (k) { return k.rank; }).join(" + ") + "</b> · all-around " + pr.avg + "% fit</p>" +
          (x.i_voted ? '<p class="hint">You played this hand · ' + x.my_votes + " of " + me + " of you so far</p>" : '<button class="btn gold sm" type="button" data-crewplay="' + x.crew + '">Play this hand' + (x.my_votes ? " (" + x.my_votes + " of " + me + " in)" : "") + "</button>") + "</div>"; }).join("");
    }, function (x) { box.innerHTML = '<p class="hint">' + esc(x.message) + "</p>"; });
  }
  function crewChat(id) {
    var last = 0, m = modal('<h3 style="font-size:1.4rem">🎉 Group date</h3><div class="rmfeed" id="crFeed" style="max-height:46vh"></div><form class="rmsend" id="crSay"><label class="sr" for="crIn">Message</label><input id="crIn" maxlength="600" placeholder="Pick a public place and a time…" autocomplete="off"><button class="btn gold" type="submit">Send</button></form><p class="hint">Everyone from both crews is here. Meet in public. Never send money.</p>');
    function pull() { lrpc("crew_chat", { p_match: id, p_after: last }).then(function (rows) { var f = $("#crFeed", m); if (!f) return; (rows || []).forEach(function (r) { last = Math.max(last, r.id); f.insertAdjacentHTML("beforeend", '<div class="rmmsg' + (r.mine ? " mine" : "") + '"><b class="rmn">' + esc(r.mine ? "You" : r.name) + '</b><span class="rmt">' + esc(r.body) + "</span></div>"); }); if (!f.children.length) f.innerHTML = '<p class="hint rmempty">Say hi to the group.</p>'; else { var em = f.querySelector(".rmempty"); if (em && f.children.length > 1) em.remove(); } f.scrollTop = f.scrollHeight; }); }
    pull(); var t = setInterval(function () { if (!document.body.contains(m)) { clearInterval(t); return; } pull(); }, 4000);
    $("#crSay", m).addEventListener("submit", function (e) { e.preventDefault(); var i = $("#crIn", m), v = i.value.trim(); if (!v) return; i.value = ""; lrpc("crew_say", { p_match: id, p_body: v }).then(pull, function (x) { toast(x.message); }); });
  }
  document.addEventListener("click", function (e) {
    var b;
    if (e.target.closest("#crGo")) { var n = +$("#crSize").value, pick = $$("[data-crpick]").filter(function (x) { return x.checked; }).map(function (x) { return x.getAttribute("data-crpick"); });
      if (pick.length !== n - 1) { toast("Pick " + (n - 1) + " friend" + (n === 2 ? "" : "s") + " for this crew."); return; }
      lrpc("crew_create", { p_size: n, p_name: $("#crName").value, p_invite: pick }).then(function () { toast("Crew started. Your friends just got an invite."); renderCrews(); }, function (x) { toast(x.message); }); return; }
    if ((b = e.target.closest("[data-crewyes]")) || (b = e.target.closest("[data-crewno]"))) { var y = b.hasAttribute("data-crewyes"); lrpc("crew_answer", { p_crew: b.getAttribute(y ? "data-crewyes" : "data-crewno"), p_yes: y }).then(function (r) { toast(r === "active" ? "Your crew is ready. Deal your hand!" : y ? "You're in. Waiting on the rest of the crew." : "Okay."); renderCrews(); }, function (x) { toast(x.message); }); return; }
    if (e.target.closest("#crLeave")) { if (!confirm("Leave this crew? It ends for everyone.")) return; lrpc("crew_leave").then(renderCrews); return; }
    if (e.target.closest("#crDeal")) { crewHands(); return; }
    if ((b = e.target.closest("[data-crewplay]"))) { b.disabled = true; lrpc("crew_play", { p_target: b.getAttribute("data-crewplay") }).then(function (r) { if (r === "match") { jackpot(4000); toast("It's a group date! Open the group chat."); renderCrews(); } else toast(r === "waiting_on_crew" ? "You're in. Everyone in your crew has to play it too." : "Played. If they play yours back, it's a match."); crewHands(); }, function (x) { b.disabled = false; toast(x.message); }); return; }
    if ((b = e.target.closest("[data-crewchat]"))) { crewChat(b.getAttribute("data-crewchat")); return; }
  });
  document.addEventListener("sf:live", function () { setTimeout(function () { renderCrews(); }, 1500); });

  /* ---------- Friends: people you've played with (a Pair, the Lounge, a Private Table, a Player Card).
     See who's online, message each other. Dating stays front and center; friends live on My table. ---------- */
  var FR = { data: null, dm: null };
  var HOW = { pair: "Your Pair", lounge: "Met in the Lounge", table: "From a Private Table", bluff: "Met at the Bluff Table", team: "Bluff Table teammate" };
  function friendBtn(id, kind) { return '<button class="btn ghost sm" type="button" data-addfriend="' + esc(id) + '"' + (kind ? ' data-fkind="' + kind + '"' : "") + '>👥 Add friend</button>'; }
  function ago(t) { if (!t) return ""; var s = (Date.now() - Date.parse(t)) / 1000; return s < 3600 ? Math.max(1, Math.round(s / 60)) + " min ago" : s < 86400 ? Math.round(s / 3600) + " hr ago" : Math.round(s / 86400) + " days ago"; }
  function renderFriends() {
    var el = $("#friends"); if (!el || !liveOn()) return;
    lrpc("my_friends").then(function (d) {
      FR.data = d = d || {}; var fs = d.friends || [], inc = d.incoming || [];
      el.hidden = false;
      var on = fs.filter(function (f) { return f.online; }).length;
      el.innerHTML = '<div class="fr-head"><h3 style="font-size:1.2rem;margin:0">👥 Friends <span class="hint">' + (fs.length ? on + " online · " + fs.length + " friend" + (fs.length === 1 ? "" : "s") : "") + '</span></h3><label class="chk fr-vis"><input type="checkbox" id="frShow"' + (d.show_online !== false ? " checked" : "") + "> Show friends when I'm online</label></div>" +
        (inc.length ? '<div class="fr-inc">' + inc.map(function (r) { return '<div class="fr-row ask"><span class="fr-av"' + (r.photo ? ' style="background-image:url(' + esc(r.photo) + ')"' : "") + ">" + (r.photo ? "" : esc((r.name || "?").charAt(0))) + '</span><span class="fr-who"><b>' + esc(r.name) + '</b> wants to be friends<small>@' + esc(r.handle || "") + " · " + esc(HOW[r.how] || "") + '</small></span><span class="fr-act"><button class="btn gold sm" type="button" data-fyes="' + r.id + '">Accept</button><button class="btn ghost sm" type="button" data-fno="' + r.id + '">Not now</button></span></div>'; }).join("") + "</div>" : "") +
        (fs.length ? '<div class="fr-list">' + fs.map(function (f) { return '<div class="fr-row"><span class="fr-av"' + (f.photo ? ' style="background-image:url(' + esc(f.photo) + ')"' : "") + ">" + (f.photo ? "" : esc((f.name || "?").charAt(0))) + '<i class="fr-dot' + (f.online ? " on" : "") + '" title="' + (f.online ? "Online" : "Offline") + '"></i></span><span class="fr-who"><b>' + esc(f.name) + "</b><small>" + (f.online ? '<span class="fr-on">Online now</span>' : f.last_seen ? "Seen " + ago(f.last_seen) : "Offline") + " · " + esc(HOW[f.how] || "Friend") + '</small></span><span class="fr-act"><button class="btn ' + (f.unread ? "gold" : "ghost") + ' sm" type="button" data-fdm="' + f.id + '" data-fname="' + esc(f.name) + '">💬 Message' + (f.unread ? ' <b class="fr-badge">' + f.unread + "</b>" : "") + '</button><button class="linkish fr-x" type="button" data-funf="' + f.id + '" data-fname="' + esc(f.name) + '" aria-label="Remove ' + esc(f.name) + '">⋯</button></span></div>'; }).join("") + "</div>"
          : '<p class="hint">No friends yet. After you play with someone, at a Private Table, in the Lounge, or as a Pair, tap <b>👥 Add friend</b>.</p>');
    }, function () { });
  }
  function friendDm(id, name) {
    var last = 0, m = modal('<div class="bchead"><h3 style="font-size:1.4rem">' + esc(name) + '</h3><span class="hint" id="fdmSt"></span></div><div class="bthread" id="fdmLog"><p class="hint">Loading…</p></div><form id="fdmForm" class="bform"><label class="sr" for="fdmIn">Message</label><input id="fdmIn" maxlength="1000" placeholder="Say something…" autocomplete="off"><button class="btn gold sm" type="submit">Send</button></form><p class="hint">Friends only. Never send money. Report anything that feels off: help@suiteface.com.</p>');
    function pull() { lrpc("friend_thread", { p_member: id, p_after: last }).then(function (rows) { var log = $("#fdmLog", m); if (!log) return; rows = (rows || []).slice().reverse(); if (!last) log.innerHTML = ""; rows.forEach(function (r) { last = Math.max(last, r.id); log.insertAdjacentHTML("beforeend", '<div class="msg ' + (r.mine ? "me" : "them") + '">' + esc(r.body) + "</div>"); }); if (!log.children.length) log.innerHTML = '<p class="hint">Say hi to your friend.</p>'; if (rows.length) log.scrollTop = log.scrollHeight; }, function (x) { var log = $("#fdmLog", m); if (log) log.innerHTML = '<p class="hint">' + esc(x.message) + "</p>"; }); }
    var f = ((FR.data && FR.data.friends) || []).filter(function (x) { return x.id === id; })[0]; if (f) $("#fdmSt", m).textContent = f.online ? "● Online" : f.last_seen ? "Seen " + ago(f.last_seen) : "Offline";
    pull(); clearInterval(FR.dm); FR.dm = setInterval(function () { if (!document.body.contains(m)) { clearInterval(FR.dm); renderFriends(); return; } pull(); }, 4000);
    $("#fdmForm", m).addEventListener("submit", function (e) { e.preventDefault(); var i = $("#fdmIn", m), v = i.value.trim(); if (!v) return; i.value = ""; lrpc("friend_send", { p_member: id, p_body: v }).then(function () { var log = $("#fdmLog", m); if (log && log.querySelector(".hint")) log.innerHTML = ""; pull(); }, function (x) { toast(x.message); }); });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-addfriend]");
    if (b) { e.preventDefault(); b.disabled = true; var bl = b.getAttribute("data-fkind") === "bluff";
      lrpc(bl ? "friend_request_bluff" : "friend_request", bl ? { p_bhand: b.getAttribute("data-addfriend") } : { p_member: b.getAttribute("data-addfriend") }).then(function (r) { b.textContent = r === "friends" ? "👥 Friends ✓" : "👥 Request sent"; toast(r === "friends" ? "You're friends now!" : "Friend request sent."); renderFriends(); }, function (x) { b.disabled = false; toast(x.message); }); return; }
    if ((b = e.target.closest("[data-fyes]")) || (b = e.target.closest("[data-fno]"))) { var y = b.hasAttribute("data-fyes"); lrpc("friend_answer", { p_member: b.getAttribute(y ? "data-fyes" : "data-fno"), p_yes: y }).then(function () { toast(y ? "You're friends now!" : "Okay."); renderFriends(); }, function (x) { toast(x.message); }); return; }
    if ((b = e.target.closest("[data-fdm]"))) { friendDm(b.getAttribute("data-fdm"), b.getAttribute("data-fname")); return; }
    if ((b = e.target.closest("[data-funf]"))) { if (!confirm("Remove " + b.getAttribute("data-fname") + " from your friends?")) return; lrpc("unfriend", { p_member: b.getAttribute("data-funf") }).then(renderFriends); return; }
  });
  document.addEventListener("change", function (e) { if (e.target && e.target.id === "frShow") lrpc("set_show_online", { p_on: e.target.checked }).then(function (v) { toast(v ? "Friends can see when you're online." : "You'll appear offline to friends."); }, function (x) { toast(x.message); }); });
  // Presence: a quiet heartbeat while the tab is open.
  function beatPresence() { if (liveOn() && !document.hidden) lrpc("touch_presence").catch(function () { }); }
  document.addEventListener("sf:live", function () { beatPresence(); clearInterval(FR.beat); FR.beat = setInterval(beatPresence, 60000); setTimeout(renderFriends, 900); clearInterval(FR.poll); FR.poll = setInterval(function () { if ($("#friends") && !document.hidden && !$("#modal")) renderFriends(); }, 45000); });
  document.addEventListener("visibilitychange", beatPresence);

  /* ---------- The Lounge: a private 21-minute room for two ID-verified players. $2.10 a seat, all to SuiteFace.
     The inviter can comp the other seat. Comps inside are free gifts. Invites go only to Pairs or to Bluff cards already
     revealed as Player Cards, so a Lounge invite never gives a House Card away. ---------- */
  var LG = { open: null, seen: {}, poll: null, verified: false };
  var COMPS = { rose: ["🌹", "Rose"], coffee: ["☕", "Coffee"], cheers: ["🥂", "Cheers"], cherries: ["🍒", "Cherries"], bouquet: ["💐", "Bouquet"], star: ["⭐", "Star"] };
  function loungeBtn(origin, ref, other, name) {
    return '<button class="btn ghost sm lgbtn" type="button" data-lounge="' + origin + '" data-lref="' + esc(ref) + '" data-lother="' + esc(other || "") + '" data-lname="' + esc(name || "") + '">🛋 Invite to the Lounge</button>';
  }
  function loungeInvite(origin, ref, other, name) {
    var nm = esc((name || "them").split(" ")[0]);
    if (!LG.verified) {
      modal('<h3>🛋 The Lounge</h3><p class="lede">A private 21-minute room for two. To keep it adults-only and safe, both players must be <b>ID-verified</b>.</p><p class="hint">Verify your ID in My Face, then come back to invite ' + nm + '.</p><div class="row"><a class="btn gold" href="my-table.html#face">Verify my ID</a><button class="btn ghost" type="button" data-close>Not now</button></div>');
      return;
    }
    var m = modal('<h3>🛋 Invite ' + nm + ' to the Lounge</h3><p class="lede">A private room for 21 minutes. Just the two of you, away from the table.</p>' +
      '<ul class="lgfacts"><li>$2.10 per seat, charged when the Lounge opens</li><li>ID-verified players only</li><li>Send free comps: 🌹 ☕ 🥂 🍒 💐 ⭐</li><li>Leave or report any time</li></ul>' +
      '<label class="check"><input type="checkbox" id="lgComp"> <span>Comp ' + nm + '\'s seat. You pay for both: <b>$4.20</b>.</span></label>' +
      '<div class="row" style="margin-top:12px"><button class="btn gold" type="button" id="lgSend">Send invite · <span id="lgCost">$2.10</span></button><button class="btn ghost" type="button" data-close>Cancel</button></div><p class="hint">Never send money or gifts outside SuiteFace. Comps are free.</p>');
    $("#lgComp", m).addEventListener("change", function () { $("#lgCost", m).textContent = this.checked ? "$4.20" : "$2.10"; });
    $("#lgSend", m).addEventListener("click", function () {
      var btn = this; btn.disabled = true;
      lrpc("lounge_invite", { p_other: other || null, p_origin: origin, p_ref: ref, p_comp: $("#lgComp", m).checked }).then(function () {
        closeModal(); toast("Invite sent. The Lounge opens when " + (name || "they").split(" ")[0] + " says yes."); loungeTick();
      }, function (er) { btn.disabled = false; toast(er.message); });
    });
  }
  function loungeBanner(inv) {
    if (LG.seen[inv.id] || $("#lgInv")) return; LG.seen[inv.id] = 1;
    document.body.insertAdjacentHTML("beforeend", '<div class="lginv" id="lgInv" role="dialog" aria-label="Lounge invite"><span class="lgav"' + (inv.photo ? ' style="background-image:url(' + esc(inv.photo) + ')"' : "") + '></span><div><b>' + esc(inv.from) + ' invited you to the Lounge</b><small>21 private minutes · ' + (inv.comped ? "they comped your seat 🎁" : "$2.10 for your seat") + '</small></div><span class="row"><button class="btn gold sm" type="button" id="lgYes">Join</button><button class="btn ghost sm" type="button" id="lgNo">No thanks</button></span></div>');
    var b = $("#lgInv");
    $("#lgYes", b).addEventListener("click", function () { lrpc("lounge_answer", { p_session: inv.id, p_yes: true }).then(function (r) { b.remove(); if (r === "active") loungeRoom(inv.id); else toast("That invite has expired."); }, function (er) { toast(er.message); }); });
    $("#lgNo", b).addEventListener("click", function () { lrpc("lounge_answer", { p_session: inv.id, p_yes: false }).catch(function () { }); b.remove(); });
  }
  function loungeCharge() {
    if (!window.SF_LIVE || !window.SF_LIVE.token) return;
    fetch(CFG.supabaseUrl + "/functions/v1/lounge-charge", { method: "POST", headers: { "Content-Type": "application/json", apikey: CFG.supabaseKey, Authorization: "Bearer " + window.SF_LIVE.token() }, body: "{}" }).catch(function () { });
  }
  function loungeRoom(id) {
    if (LG.open === id && $("#modal")) return; LG.open = id; closeModal();
    var m = modal('<div class="lounge"><div class="lghead"><h3>🛋 The Lounge</h3><span class="lgclock" id="lgClock" aria-live="off">21:00</span></div><p class="hint" id="lgWith">Private room</p>' +
      '<div class="bthread lgthread" id="lgThread"><p class="hint">You\'re in. Just the two of you.</p></div>' +
      '<div class="lgcomps" role="group" aria-label="Send a comp">' + Object.keys(COMPS).map(function (k) { return '<button type="button" data-lgcomp="' + k + '" title="' + COMPS[k][1] + '">' + COMPS[k][0] + "</button>"; }).join("") + '<span class="hint">Comps are free</span></div>' +
      '<form id="lgForm" class="bform"><label class="sr" for="lgIn">Message</label><input id="lgIn" maxlength="600" placeholder="Say something…" autocomplete="off"><button class="btn gold sm" type="submit">Send</button></form>' +
      '<div class="row lgfoot"><button class="btn ghost sm" type="button" id="lgLeave">Leave the Lounge</button><button class="linkish" type="button" id="lgRepBtn">⚑ Report</button></div>' +
      '<div id="lgRep" hidden><label for="lgRepWhy">What happened?</label><select id="lgRepWhy"><option value="">Choose a reason</option><option>Sexual or explicit</option><option>Harassment or threats</option><option>Asked for money or gifts</option><option>May be under 18</option><option>Scam or moving off SuiteFace</option><option>Felt unsafe</option><option>Something else</option></select><textarea id="lgRepNote" rows="2" maxlength="600" placeholder="Anything we should know? (optional)"></textarea><div class="row"><button class="btn red sm" type="button" id="lgRepGo">End and report</button><button class="btn ghost sm" type="button" id="lgRepNo">Cancel</button></div><p class="hint">Our safety team gets the reason and the last messages. The Lounge closes right away and the other player is flagged. In danger? Call 911.</p></div></div>');
    loungeCharge();
    var last = 0, endsAt = 0, skew = 0, closed = false, lastPing = 0;
    function line(x) { return x.comp ? '<div class="msg ' + (x.mine ? "me" : "them") + ' lgcomp"><span>' + (COMPS[x.comp] || ["🎁"])[0] + "</span>" + (x.mine ? "You sent a " : "Sent you a ") + esc((COMPS[x.comp] || ["", "comp"])[1].toLowerCase()) + "</div>" : '<div class="msg ' + (x.mine ? "me" : "them") + '">' + esc(x.body) + "</div>"; }
    function finish(why) {
      if (closed) return; closed = true; clearInterval(LG.poll); LG.open = null;
      var f = $("#lgForm", m); if (f) f.remove(); var c = $(".lgcomps", m); if (c) c.remove();
      var t = $("#lgThread", m); if (t) { t.insertAdjacentHTML("beforeend", '<p class="hint lgend">' + esc(why) + "</p>"); t.scrollTop = t.scrollHeight; }
      var lv = $("#lgLeave", m); if (lv) { lv.textContent = "Close"; lv.setAttribute("data-close", ""); }
    }
    function pull() {
      lrpc("lounge_state", { p_session: id, p_after: last }).then(function (s) {
        if (!document.body.contains(m)) { clearInterval(LG.poll); LG.open = null; return; }
        $("#lgWith", m).textContent = "Private room with " + (s.other || "your match");
        if (s.other_id && !$("#lgFriend", m)) { var lf = document.createElement("span"); lf.id = "lgFriend"; lf.innerHTML = friendBtn(s.other_id); $(".lgfoot", m).insertBefore(lf, $("#lgRepBtn", m)); }
        if (s.ends_at) { endsAt = Date.parse(s.ends_at); skew = Date.parse(s.now) - Date.now(); }
        var t = $("#lgThread", m), d = $("#lgTyping", m);
        if ((s.msgs || []).length) { if (d) d.remove(); var h = t.querySelector(".hint:not(.lgend)"); if (h && !last) h.remove(); s.msgs.forEach(function (x) { last = Math.max(last, x.id); t.insertAdjacentHTML("beforeend", line(x)); if (!x.mine && x.comp) jackpot(900); }); t.scrollTop = t.scrollHeight; }
        d = $("#lgTyping", m); if (s.typing && !d && !closed) { t.insertAdjacentHTML("beforeend", '<div class="msg them typing" id="lgTyping" aria-label="typing"><i></i><i></i><i></i></div>'); t.scrollTop = t.scrollHeight; } else if (!s.typing && d) d.remove();
        if (s.status !== "active") finish(s.closed_reason === "reported" ? "This Lounge was closed after a report." : "The Lounge has closed. Thanks for stopping by.");
      }, function (er) { finish(er.message || "The Lounge has closed."); });
    }
    function clock() { if (!endsAt || closed) return; var left = Math.max(0, Math.round((endsAt - (Date.now() + skew)) / 1000)); var el = $("#lgClock", m); if (!el) return; el.textContent = Math.floor(left / 60) + ":" + ("0" + (left % 60)).slice(-2); el.classList.toggle("low", left <= 120); if (left === 0) pull(); }
    pull(); clearInterval(LG.poll); var n = 0; LG.poll = setInterval(function () { clock(); if (++n % 2 === 0) pull(); }, 1000);
    $("#lgForm", m).addEventListener("submit", function (e) { e.preventDefault(); var v = $("#lgIn", m).value.trim(); if (!v) return; $("#lgIn", m).value = ""; lrpc("lounge_send", { p_session: id, p_body: v, p_comp: null }).then(pull, function (er) { toast(er.message); }); });
    $("#lgIn", m).addEventListener("input", function () { if (Date.now() - lastPing > 3000) { lastPing = Date.now(); lrpc("lounge_typing", { p_session: id }).catch(function () { }); } });
    m.addEventListener("click", function (e) { var b = e.target.closest("[data-lgcomp]"); if (!b || closed) return; lrpc("lounge_send", { p_session: id, p_body: null, p_comp: b.getAttribute("data-lgcomp") }).then(function () { b.classList.add("sent"); pull(); }, function (er) { toast(er.message); }); });
    $("#lgLeave", m).addEventListener("click", function () { if (closed) return; if (!confirm("Leave the Lounge? It closes for both of you.")) return; lrpc("lounge_leave", { p_session: id }).then(function () { finish("You left the Lounge."); }); });
    $("#lgRepBtn", m).addEventListener("click", function () { $("#lgRep", m).hidden = false; });
    $("#lgRepNo", m).addEventListener("click", function () { $("#lgRep", m).hidden = true; });
    $("#lgRepGo", m).addEventListener("click", function () { var why = $("#lgRepWhy", m).value; if (!why) { toast("Pick a reason."); return; } lrpc("lounge_report", { p_session: id, p_reason: why, p_note: $("#lgRepNote", m).value }).then(function () { $("#lgRep", m).hidden = true; finish("You reported this Lounge and it's closed. Thank you for telling us."); }, function (er) { toast(er.message); }); });
  }
  function loungeTick() {
    if (!liveOn() || !window.SF_LIVE || !window.SF_LIVE.seated) return;
    lrpc("my_lounge").then(function (s) {
      if (!s) return; LG.verified = !!s.verified;
      (s.invites || []).forEach(loungeBanner);
      if (s.active && LG.open !== s.active.id) loungeRoom(s.active.id);
    }, function () { });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lounge]"); if (!b) return; e.preventDefault();
    loungeInvite(b.getAttribute("data-lounge"), b.getAttribute("data-lref"), b.getAttribute("data-lother"), b.getAttribute("data-lname"));
  });
  document.addEventListener("sf:live", function () { setTimeout(loungeTick, 400); });
  setInterval(function () { if (!document.hidden) loungeTick(); }, 8000);


  /* ---------- See your real hand before paying ----------
     Signed-in players who haven't taken a seat save a starter card (start_card) and see an honest preview of the real players
     who fit them (hand_preview): counts per suit and the top five cards face down. No names, photos or ids until they pay. */
  function renderPreview() {
    var box = $("#pvHand"); if (!box) return; var L = window.SF_LIVE;
    if (L && L.seated) { box.hidden = true; return; }
    box.hidden = false;
    if (!L) { $("#pvT").textContent = "See your real hand first"; $("#pvBody").innerHTML = '<button class="btn gold" type="button" data-login>Create my free account</button>'; return; }
    $("#pvT").textContent = "Dealing your hand…"; $("#pvL").textContent = "";
    lrpc("hand_preview").then(function (h) { if (!h || !h.ready) pvForm(); else pvShow(h); }, function () { pvForm(); });
  }
  function pvForm(err) {
    var g = genderCode() || "", by = (/^(\d{4})/.exec(P.dob || "") || [])[1] || "";
    $("#pvT").textContent = "Tell us who you're looking for"; $("#pvL").textContent = "Four quick answers and we'll show you how many real players fit you nearby. Free, and nothing is shared until you take your seat.";
    var opt = function (v, t, cur) { return '<option value="' + v + '"' + (v === cur ? " selected" : "") + ">" + t + "</option>"; };
    $("#pvBody").innerHTML = '<form class="pv-form" id="pvForm" novalidate>' +
      '<label>First name<input id="pvName" maxlength="40" autocomplete="given-name" value="' + esc(P.name || "") + '"></label>' +
      '<label>Birth year<input id="pvYear" inputmode="numeric" maxlength="4" placeholder="1990" value="' + esc(by) + '"></label>' +
      '<label>ZIP code<input id="pvZip" inputmode="numeric" maxlength="5" autocomplete="postal-code" value="' + esc(P.zip || "") + '"></label>' +
      '<label>I am<select id="pvG">' + opt("", "Choose", g) + opt("woman", "A woman", g) + opt("man", "A man", g) + opt("nonbinary", "Nonbinary", g) + "</select></label>" +
      '<label>Show me<select id="pvS">' + opt("", "Choose", P.show === "everyone" ? "everyone" : P.show || "") + opt("men", "Men", P.show) + opt("women", "Women", P.show) + opt("everyone", "Everyone", P.show) + "</select></label>" +
      '<button class="btn gold" type="submit">See my hand</button></form><p class="err" id="pvErr" role="alert">' + esc(err || "") + "</p>";
    $("#pvForm").addEventListener("submit", function (e) {
      e.preventDefault(); var nm = $("#pvName").value.trim(), yr = +$("#pvYear").value, zip = $("#pvZip").value.trim(), gg = $("#pvG").value, sh = $("#pvS").value, err2 = $("#pvErr");
      var age = new Date().getFullYear() - yr;
      if (!nm) { err2.textContent = "Add your first name."; return; }
      if (!yr || age < 18 || age > 100) { err2.textContent = yr && age < 18 ? "SuiteFace is for adults 18 and over." : "Add your birth year."; return; }
      if (!/^\d{5}$/.test(zip)) { err2.textContent = "Enter your 5-digit ZIP code."; return; }
      if (!gg || !sh) { err2.textContent = "Choose how you identify and who you want to meet."; return; }
      err2.textContent = "";
      var look = /^(marriage|longterm|seeing|casual|open)$/.test(P.looking || "") ? P.looking : "longterm";
      lrpc("start_card", { p_name: nm, p_birth_year: yr, p_zip: zip, p_gender: gg, p_show: sh, p_suit: SUIT[P.mySuit] ? P.mySuit : null, p_looking: look, p_interests: (P.interests || []).slice(0, 12), p_age_min: null, p_age_max: null, p_radius: P.dist || 25 })
        .then(function (r) {
          P.name = nm; P.zip = zip; P.show = sh; P.id = P.id || {}; P.id.gender = gg === "woman" ? "Woman" : gg === "man" ? "Man" : "Nonbinary";
          if (!/^\d{4}-/.test(P.dob || "") || P.dob.slice(0, 4) !== String(yr)) P.dob = yr + "-01-01";
          if (r && r.age_min) { P.ageMin = r.age_min; P.ageMax = r.age_max; } saveP(); renderPreview();
        }, function (x) { err2.textContent = (x && x.message) || "That didn't save. Try again."; });
    });
  }
  function pvShow(h) {
    var n = h.count || 0, top = h.top || [];
    if (n) {
      var a = top[0];
      $("#pvT").textContent = n === 1 ? "1 real player fits you right now." : n + " real players fit you right now.";
      $("#pvL").textContent = "Your " + (a.rank === "A" ? "Ace" : a.rank) + " is about " + a.miles + (a.miles === 1 ? " mile" : " miles") + " away" + (a.shared && a.shared.length ? " and loves " + a.shared.join(" and ").toLowerCase() : "") + ". Take your seat to see names, photos and full cards.";
    } else {
      $("#pvT").textContent = "You're early to your table.";
      $("#pvL").textContent = "No real players within " + (h.radius || 25) + " miles of " + h.zip + " fit you yet. We never fill a hand with fake profiles. As players near you sit down, they're dealt to you first, and the 12-Card Deck Guarantee covers you.";
    }
    var cards = top.slice(0, 5); while (cards.length < 5) cards.push(null);
    var bs = h.by_suit || {};
    $("#pvBody").innerHTML = '<div class="pv-cards">' + cards.map(function (c) {
        if (!c) return '<div class="pv-c open" aria-hidden="true"><span class="ix">&nbsp;</span><span class="fd">Open seat</span><small>&nbsp;</small></div>';
        return '<div class="pv-c' + (SUIT[c.suit].red ? " red" : "") + '"><span class="ix">' + c.rank + SUIT[c.suit].sym + '</span><span class="fd">Face down</span><small>' + c.miles + " mi" + (c.shared && c.shared[0] ? " · " + esc(c.shared[0]) : "") + "</small></div>";
      }).join("") + "</div>" +
      '<div class="pv-suits">' + ORDER.map(function (k) { return "<span><b>" + (bs[k] || 0) + "</b>" + SUIT[k].sym + " " + SUIT[k].name + "s</span>"; }).join("") + "</div>" +
      '<div class="row"><a class="btn gold" href="#payBtn" data-pvpay>Take my seat</a><button class="btn ghost" type="button" data-pvedit>Change my answers</button></div>';
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-pvedit]")) { pvForm(); return; }
    var pv = e.target.closest && e.target.closest("[data-pvpay]"); if (pv) { e.preventDefault(); var pb = $("#payBtn"); if (pb) { pb.scrollIntoView({ behavior: "smooth", block: "center" }); var ag = $("#agree"); if (ag) setTimeout(function () { ag.focus(); }, 500); } }
  });
  document.addEventListener("sf:live", function () { setTimeout(renderPreview, 60); });
  renderPreview();

  /* ---------- Your data: download, or delete your account ---------- */
  document.addEventListener("sf:live", function () { var yd = $("#yourData"); if (yd) yd.hidden = !window.SF_LIVE; });
  document.addEventListener("click", function (e) {
    var t = e.target; if (!t.closest) return;
    if (t.closest("#dataExport")) {
      lrpc("export_my_data").then(function (d) {
        var blob = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), a = document.createElement("a");
        a.href = URL.createObjectURL(blob); a.download = "suiteface-my-data-" + new Date().toISOString().slice(0, 10) + ".json"; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
        toast("Your data is downloading.");
      }, function (x) { toast(x.message); });
    }
    if (t.closest("#dataClose")) {
      var typed = prompt("This can't be undone. Your card leaves every deck and your profile, answers and photo are cleared.\n\nType DELETE to delete your account."); if (typed == null) return;
      if (typed.trim().toUpperCase() !== "DELETE") { toast("Type DELETE to confirm."); return; }
      var L = window.SF_LIVE, mid = L.memberId(), st = L.client.storage.from("faces");
      st.list(mid).then(function (r) { var files = (r.data || []).map(function (f) { return mid + "/" + f.name; }); return files.length ? st.remove(files) : null; }).catch(function () { })
        .then(function () { return lrpc("close_my_account", { p_confirm: "DELETE" }); })
        .then(function () { try { ["profile", "game", "quizDeck", "suitLead", "role"].forEach(function (k) { localStorage.removeItem("sf." + k); }); } catch (e2) { } toast("Your account is deleted. Goodbye, and thank you for playing."); setTimeout(function () { window.SF_AUTH.signOut().then(function () { location.href = "./"; }); }, 1600); },
          function (x) { toast(x.message); });
    }
  });
  /* ---------- boot ---------- */
  renderStyles(); renderQ(); renderInterests(); renderRank(); renderCard(); updateMeter(); syncRanges();
  wireIam(); renderIam(); renderRooms(); renderIdentity(); renderDemo(); applyRole(); buildDeck(); renderTable(false); renderSeats(); renderJokerStatus(); zipHint(); renderMap();
  // The 1.5 MB ZIP table loads only where it's used: My table, or once someone types a ZIP code.
  (function () { var pg = document.body.getAttribute("data-page") || ""; if (pg === "club" || /#(map|face|table)/.test(location.hash)) loadZips(); var fz = $("#fZip"); if (fz) ["focus", "input"].forEach(function (ev) { fz.addEventListener(ev, loadZips); }); document.addEventListener("sf:live", function () { if ((document.body.getAttribute("data-page") || "") === "club") loadZips(); }); })();
  $("#pile").style.setProperty("--hat", "url(\"data:image/svg+xml," + encodeURIComponent(rosette().replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ')) + "\")");
})();
