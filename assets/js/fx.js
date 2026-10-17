/* SuiteFace FX: the Vegas moments.
   SFX.cashOut(sourceEl, ticket, opts)  form folds into a ticket, flies into the slot, reels spin, a cash-out ticket prints and gets stamped.
   Page changes: a quick slot spin with chasing bulbs when you move between SuiteFace pages.
   Respects "reduce motion": everything still happens, just without the movement. */
(function () {
  if (window.SFX) return;
  var REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SYM = [["A", "♥", 1], ["K", "♠", 0], ["Q", "♦", 1], ["J", "♣", 0], ["A", "♠", 0], ["K", "♥", 1], ["Q", "♣", 0], ["J", "♦", 1], ["10", "♥", 1], ["A", "♦", 1], ["K", "♣", 0], ["🃏", "", 0]];
  var CSS = '\
.sfx-veil{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,rgba(47,138,98,.35),rgba(23,21,27,.94) 60%);backdrop-filter:blur(3px);opacity:0;transition:opacity .25s}\
.sfx-veil.on{opacity:1}\
.sfx-machine{position:relative;width:min(380px,88vw);padding:26px 22px 20px;border-radius:28px 28px 18px 18px;background:linear-gradient(180deg,#9B1B30,#6A1020);box-shadow:0 0 0 4px #B8862F,0 0 0 8px #6A1020,0 30px 80px rgba(0,0,0,.7),inset 0 2px 0 rgba(255,255,255,.25);font-family:"Big Shoulders Display","Arial Narrow",Impact,sans-serif}\
.sfx-top{position:absolute;left:50%;top:-34px;transform:translateX(-50%);background:linear-gradient(180deg,#E8C46A,#B8862F);color:#231C10;font-weight:900;letter-spacing:.14em;font-size:1.15rem;padding:6px 18px;border-radius:14px 14px 4px 4px;box-shadow:0 0 18px rgba(232,196,106,.7);white-space:nowrap}\
.sfx-bulbs{position:absolute;inset:6px;border-radius:24px 24px 14px 14px;pointer-events:none}\
.sfx-bulbs i{position:absolute;width:9px;height:9px;margin:-4.5px;border-radius:50%;background:#FFE7A3;box-shadow:0 0 8px 2px #FFE7A3;opacity:.25;animation:sfxBulb .9s infinite}\
@keyframes sfxBulb{0%,100%{opacity:.25}50%{opacity:1}}\
.sfx-window{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#17151B;border-radius:14px;padding:8px;box-shadow:inset 0 6px 14px rgba(0,0,0,.8)}\
.sfx-reel{height:112px;overflow:hidden;border-radius:9px;background:linear-gradient(180deg,#CFC6B6,#FFFDF8 30%,#FFFDF8 70%,#CFC6B6);position:relative}\
.sfx-strip{position:absolute;left:0;right:0;top:0;will-change:transform}\
.sfx-sym{height:112px;display:grid;place-items:center;align-content:center;font-weight:900;font-size:2.6rem;line-height:.9;color:#2B2730}\
.sfx-sym.r{color:#C8303F}.sfx-sym small{font-size:1.9rem}\
.sfx-sym.jk{gap:2px}.sfx-sym.jk small{font:900 .95rem "Big Shoulders Display",Impact,sans-serif;letter-spacing:.14em;color:var(--jc)}\
.sfx-reel.spin .sfx-strip{filter:blur(2px)}\
.sfx-line{position:absolute;left:14px;right:14px;top:50%;height:2px;background:rgba(200,48,63,.5);pointer-events:none}\
.sfx-slot{margin:14px auto 0;width:70%;height:12px;border-radius:6px;background:#17151B;box-shadow:inset 0 3px 6px #000,0 1px 0 rgba(255,255,255,.2)}\
.sfx-msg{color:#FAF7F0;text-align:center;margin-top:10px;font-family:Figtree,system-ui,sans-serif;font-weight:700;font-size:.95rem;min-height:1.3em}\
.sfx-note{position:fixed;z-index:10000;background:#FFFDF8;border-radius:6px;box-shadow:0 10px 30px rgba(0,0,0,.5);transform-origin:50% 0;transition:transform .75s cubic-bezier(.5,0,.3,1),opacity .75s,left .75s cubic-bezier(.5,0,.3,1),top .75s cubic-bezier(.5,0,.3,1),width .75s,height .75s;overflow:hidden}\
.sfx-note::before{content:"";position:absolute;inset:8px 10px;background:repeating-linear-gradient(180deg,transparent 0 10px,rgba(43,39,48,.12) 10px 11px)}\
.sfx-ticket{position:relative;margin:-6px auto 0;width:78%;background:#FFFDF8;color:#2B2730;border-radius:4px;padding:12px 14px 14px;font-family:Figtree,system-ui,sans-serif;text-align:center;box-shadow:0 12px 24px rgba(0,0,0,.45);transform-origin:50% 0;clip-path:inset(0 0 100% 0);transition:clip-path 1.1s steps(14,end)}\
.sfx-ticket.out{clip-path:inset(0 0 0 0)}\
.sfx-ticket::before,.sfx-ticket::after{content:"";position:absolute;left:0;right:0;height:6px;background:radial-gradient(circle at 5px 0,transparent 4px,#FFFDF8 4.5px) 0 0/10px 6px}\
.sfx-ticket::before{top:-5px;transform:rotate(180deg)}.sfx-ticket::after{bottom:-5px}\
.sfx-ticket h5{margin:0;font:900 1rem "Big Shoulders Display",Impact,sans-serif;letter-spacing:.08em;white-space:nowrap}\
.sfx-ticket .k{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#6b6470;margin-top:6px}\
.sfx-ticket .ref{font:700 1.25rem ui-monospace,Menlo,Consolas,monospace;letter-spacing:.08em}\
.sfx-ticket .bar{height:28px;margin:8px auto 0;width:84%;background:repeating-linear-gradient(90deg,#2B2730 0 2px,transparent 2px 4px,#2B2730 4px 5px,transparent 5px 8px,#2B2730 8px 11px,transparent 11px 12px)}\
.sfx-stamp{position:absolute;left:58%;top:78%;transform:translate(-50%,-50%) rotate(-14deg) scale(2.6);opacity:0;border:3px solid #C8303F;color:#C8303F;border-radius:8px;padding:4px 10px;font:900 1.35rem "Big Shoulders Display",Impact,sans-serif;letter-spacing:.12em;white-space:nowrap;mix-blend-mode:multiply;box-shadow:inset 0 0 0 2px rgba(255,253,248,.9),inset 0 0 0 4px #C8303F;transition:transform .22s cubic-bezier(.2,1.6,.4,1),opacity .12s}\
.sfx-stamp.hit{opacity:.88;transform:translate(-50%,-50%) rotate(-14deg) scale(1)}\
.sfx-shake{animation:sfxShake .25s}\
@keyframes sfxShake{0%,100%{transform:none}25%{transform:translate(2px,1px)}50%{transform:translate(-2px,-1px)}75%{transform:translate(1px,-2px)}}\
.sfx-row{display:flex;gap:8px;justify-content:center;margin-top:14px}\
.sfx-btn{all:unset;cursor:pointer;background:linear-gradient(180deg,#E8C46A,#B8862F);color:#231C10;font:700 .95rem Figtree,system-ui,sans-serif;padding:.6rem 1.2rem;border-radius:999px}\
.sfx-btn:focus-visible{outline:3px solid #FFE7A3;outline-offset:3px}\
.sfx-coins i{position:fixed;z-index:10001;font-size:1.4rem;pointer-events:none;animation:sfxCoin 1.2s ease-in forwards}\
@keyframes sfxCoin{to{transform:translate(var(--dx),var(--dy)) rotate(540deg);opacity:0}}\
.sfx-veil.page .sfx-machine{transform:scale(.9)}\
@media (prefers-reduced-motion:reduce){.sfx-bulbs i{animation:none;opacity:.8}.sfx-ticket{transition:none}.sfx-stamp{transition:none}}';
  function css() { if (document.getElementById("sfx-css")) return; var s = document.createElement("style"); s.id = "sfx-css"; s.textContent = CSS; document.head.appendChild(s); }
  function symHTML(s) {
    if (s[0] === "JOKER") return '<div class="sfx-sym jk" style="--jc:' + s[3] + '"><span class="jkhat">' + JOKER_HAT + '</span><small>JOKER</small></div>';
    return '<div class="sfx-sym' + (s[2] ? " r" : "") + '">' + s[0] + (s[1] ? "<small>" + s[1] + "</small>" : "") + "</div>"; }
  var JOKER_HAT = '<svg viewBox="0 0 64 48" width="54" height="40" aria-hidden="true"><path d="M6 40 L10 10 L22 28 L32 4 L42 28 L54 10 L58 40 Z" fill="var(--jc)" stroke="#2B2730" stroke-width="2.5" stroke-linejoin="round"/><circle cx="10" cy="9" r="4.5" fill="#E8C46A" stroke="#2B2730" stroke-width="2"/><circle cx="32" cy="4" r="4.5" fill="#E8C46A" stroke="#2B2730" stroke-width="2"/><circle cx="54" cy="9" r="4.5" fill="#E8C46A" stroke="#2B2730" stroke-width="2"/><rect x="5" y="38" width="54" height="8" rx="3" fill="#E8C46A" stroke="#2B2730" stroke-width="2"/></svg>';
  var JOKER_COLORS = ["#C8303F", "#2F8A62", "#7A3FA0", "#D2622A", "#C8961E", "#C23B7A"];
  function threeJokers() { var c = JOKER_COLORS.slice().sort(function () { return Math.random() - .5; }); return [["JOKER", "", 0, c[0]], ["JOKER", "", 0, c[1]], ["JOKER", "", 0, c[2]]]; }
  function machine(title) {
    css();
    var v = document.createElement("div"); v.className = "sfx-veil"; v.setAttribute("role", "status"); v.setAttribute("aria-live", "polite");
    var bulbs = ""; for (var i = 0; i < 26; i++) { var t = i / 26, x, y; if (t < .3) { x = t / .3 * 100; y = 0; } else if (t < .5) { x = 100; y = (t - .3) / .2 * 100; } else if (t < .8) { x = 100 - (t - .5) / .3 * 100; y = 100; } else { x = 0; y = 100 - (t - .8) / .2 * 100; }
      bulbs += '<i style="left:' + x + "%;top:" + y + "%;animation-delay:" + (i % 3) * .3 + 's"></i>'; }
    v.innerHTML = '<div class="sfx-machine"><div class="sfx-top">' + (title || "SUITEFACE") + '</div><div class="sfx-bulbs">' + bulbs + '</div><div class="sfx-window">' +
      [0, 1, 2].map(function () { return '<div class="sfx-reel"><div class="sfx-strip"></div></div>'; }).join("") + '<div class="sfx-line"></div></div><div class="sfx-slot"></div><div class="sfx-msg"></div><div class="sfx-out"></div></div>';
    document.body.appendChild(v); requestAnimationFrame(function () { v.classList.add("on"); });
    return v;
  }
  function spin(v, land, ms, cb) {
    var reels = v.querySelectorAll(".sfx-reel"), done = 0;
    reels.forEach(function (r, i) {
      var strip = r.querySelector(".sfx-strip"), n = 18 + i * 6, list = [];
      for (var k = 0; k < n; k++) list.push(SYM[(Math.random() * SYM.length) | 0]);
      list.push(land[i]); strip.innerHTML = list.map(symHTML).join("");
      var h = r.offsetHeight, end = -(list.length - 1) * h;
      if (REDUCED) { strip.style.transform = "translateY(" + end + "px)"; if (++done === 3) cb && cb(); return; }
      r.classList.add("spin"); strip.style.transition = "none"; strip.style.transform = "translateY(0)";
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        strip.style.transition = "transform " + (ms + i * 380) + "ms cubic-bezier(.15,.65,.25,1.04)"; strip.style.transform = "translateY(" + end + "px)"; }); });
      setTimeout(function () { r.classList.remove("spin"); if (++done === 3) cb && cb(); }, ms + i * 380 + 40);
    });
  }
  function coins(from) {
    if (REDUCED) return; var b = from.getBoundingClientRect(), box = document.createElement("div"); box.className = "sfx-coins"; document.body.appendChild(box);
    for (var i = 0; i < 18; i++) { var c = document.createElement("i"); c.textContent = ["🪙", "♥", "♦", "♣", "♠"][i % 5];
      c.style.left = b.left + b.width / 2 + "px"; c.style.top = b.top + b.height / 2 + "px"; c.style.setProperty("--dx", (Math.random() - .5) * 420 + "px"); c.style.setProperty("--dy", (Math.random() * -.6 + .9) * 360 + "px"); c.style.color = i % 5 === 1 || i % 5 === 2 ? "#E5505E" : "#FAF7F0"; box.appendChild(c); }
    setTimeout(function () { box.remove(); }, 1400);
  }
  var LAND = [["A", "♠", 0], ["A", "♥", 1], ["A", "♦", 1]];

  function cashOut(src, ticket, opts) {
    opts = opts || {};
    var v = machine(opts.title || "SAVE MY SEAT"), m = v.querySelector(".sfx-machine"), msg = v.querySelector(".sfx-msg"), out = v.querySelector(".sfx-out");
    var prevFocus = document.activeElement;
    function close() { v.classList.remove("on"); setTimeout(function () { v.remove(); }, 260); document.removeEventListener("keydown", esc); if (prevFocus && prevFocus.focus) prevFocus.focus(); opts.onDone && opts.onDone(); }
    function esc(e) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", esc);
    function reels() {
      msg.textContent = "Rolling the reels…";
      spin(v, LAND, 1300, function () {
        msg.textContent = "Three Aces. Printing your ticket…"; coins(m.querySelector(".sfx-window"));
        out.innerHTML = '<div class="sfx-ticket"><h5>SUITEFACE CASH-OUT</h5><div class="k">Reference</div><div class="ref">' + String(ticket).replace(/[<>&]/g, "") + '</div><div class="k">' + (opts.sub || new Date().toLocaleString()) + '</div><div class="bar"></div><div class="sfx-stamp">' + (opts.stamp || "SEAT SAVED") + '</div></div>' +
          '<div class="sfx-row"><button class="sfx-btn" type="button">Collect ticket</button></div>';
        var tk = out.querySelector(".sfx-ticket"); requestAnimationFrame(function () { tk.classList.add("out"); });
        setTimeout(function () { var st = tk.querySelector(".sfx-stamp"); st.classList.add("hit"); m.classList.add("sfx-shake"); msg.textContent = opts.done || "You're in. Keep your reference number.";
          var b = out.querySelector(".sfx-btn"); b.addEventListener("click", close); b.focus(); }, REDUCED ? 50 : 1200);
      });
    }
    // the form folds into a note and drops into the coin slot
    if (src && !REDUCED) {
      var r = src.getBoundingClientRect(), note = document.createElement("div"); note.className = "sfx-note";
      note.style.left = r.left + "px"; note.style.top = r.top + "px"; note.style.width = r.width + "px"; note.style.height = Math.min(r.height, 420) + "px";
      document.body.appendChild(note);
      setTimeout(function () { var s = v.querySelector(".sfx-slot").getBoundingClientRect();
        note.style.left = s.left + s.width * .15 + "px"; note.style.top = s.top - 70 + "px"; note.style.width = s.width * .7 + "px"; note.style.height = "70px";
        note.style.transform = "perspective(600px) rotateX(55deg)"; }, 60);
      setTimeout(function () { note.style.transform = "perspective(600px) rotateX(80deg) translateY(60px) scaleY(.1)"; note.style.opacity = "0"; }, 820);
      setTimeout(function () { note.remove(); reels(); }, 1350);
    } else reels();
    return { close: close };
  }

  // ---------- between pages: a quick spin ----------
  function pageSpin(href) {
    var v = machine("NEXT TABLE"); v.classList.add("page");
    var toLobby = /joker-lobby\.html/.test(href);
    var land = toLobby ? threeJokers() : [SYM[(Math.random() * 4) | 0], SYM[(Math.random() * 4) | 0], SYM[(Math.random() * 4) | 0]];
    if (toLobby) { var top = v.querySelector(".sfx-top"); if (top) top.textContent = "JOKER LOBBY"; }
    spin(v, land, REDUCED ? 0 : 520, function () { try { sessionStorage.setItem("sfx-arrive", "1"); } catch (e) { } location.href = href; });
    setTimeout(function () { location.href = href; }, 2600); // never block navigation
  }
  function sameSite(a) {
    if (!a || a.target === "_blank" || a.hasAttribute("download") || a.getAttribute("data-nofx") !== null) return false;
    var h = a.getAttribute("href") || ""; if (!h || h.charAt(0) === "#" || /^(mailto|tel|javascript):/i.test(h)) return false;
    try { var u = new URL(a.href, location.href); } catch (e) { return false; }
    if (u.origin !== location.origin) return false;
    if (u.pathname === location.pathname) return false; // same page, just a jump
    return /(\.html|\/)$/.test(u.pathname);
  }
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest("a"); if (!sameSite(a)) return;
    if (location.protocol === "file:" || window.top !== window.self && !/suiteface\.com$/.test(location.hostname)) return;
    if (/(casino|private-table)\.html/.test(a.getAttribute("href") || "")) return; // each Casino plays its own entrance
    e.preventDefault(); pageSpin(a.href);
  });
  // arriving: reels stop and the veil lifts
  (function () {
    var arrive = false; try { arrive = sessionStorage.getItem("sfx-arrive") === "1"; sessionStorage.removeItem("sfx-arrive"); } catch (e) { }
    if (!arrive || REDUCED || /(casino|private-table)\.html/.test(location.pathname)) return;
    function go() { var lobby = /joker-lobby\.html/.test(location.pathname), land = lobby ? threeJokers() : LAND;
      var v = machine(lobby ? "JOKER LOBBY" : "NEXT TABLE"); v.classList.add("page"); v.querySelectorAll(".sfx-strip").forEach(function (s) { s.innerHTML = symHTML(land[0]); });
      spin(v, land, 380, function () { setTimeout(function () { v.classList.remove("on"); setTimeout(function () { v.remove(); }, 260); }, 220); }); }
    if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
  })();
  window.addEventListener("pageshow", function (e) { if (e.persisted) document.querySelectorAll(".sfx-veil").forEach(function (v) { v.remove(); }); });


  // ---------- Celebrations: coin drop, roulette or dice, then WINNER WINNER ----------
  var CCSS = '\
.sfx-stage{position:relative;width:min(380px,88vw);display:grid;justify-items:center;gap:14px;font-family:Figtree,system-ui,sans-serif;color:#FAF7F0;text-align:center}\
.sfx-chip{position:fixed;z-index:10002;width:64px;height:64px;border-radius:50%;background:radial-gradient(circle,#FFE7A3 0 38%,#B8862F 39% 44%,#FFE7A3 45% 52%,#9B1B30 53%);box-shadow:0 0 0 3px #FAF7F0,0 8px 18px rgba(0,0,0,.5);display:grid;place-items:center;font:900 1rem "Big Shoulders Display",Impact,sans-serif;color:#6A1020;transition:left .8s cubic-bezier(.5,0,.3,1),top .8s cubic-bezier(.5,0,.3,1),transform .8s,opacity .3s}\
.sfx-wheel{width:240px;height:240px;border-radius:50%;position:relative;background:conic-gradient(' + (function () { var s = []; for (var i = 0; i < 18; i++) s.push((i % 2 ? "#2B2730" : "#9B1B30") + " " + (i * 20) + "deg " + (i * 20 + 20) + "deg"); return s.join(","); })() + ');box-shadow:0 0 0 8px #6A3B12,0 0 0 11px #B8862F,0 20px 50px rgba(0,0,0,.6)}\
.sfx-wheel::after{content:"";position:absolute;inset:34%;border-radius:50%;background:radial-gradient(circle,#E8C46A,#7a5410);box-shadow:0 0 0 3px #FAF7F0}\
.sfx-wheel.spin{animation:sfxWheel 3.2s cubic-bezier(.15,.7,.2,1) forwards}\
@keyframes sfxWheel{to{transform:rotate(1440deg)}}\
.sfx-ballring{position:absolute;inset:0;animation:sfxBall 3.2s cubic-bezier(.2,.6,.25,1) forwards}\
.sfx-ballring i{position:absolute;left:50%;top:10px;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,#CFC6B6);box-shadow:0 2px 4px rgba(0,0,0,.5)}\
@keyframes sfxBall{to{transform:rotate(-1800deg)}}\
.sfx-num{font:900 3rem "Big Shoulders Display",Impact,sans-serif;color:#FFE7A3;text-shadow:0 0 18px rgba(232,196,106,.8);min-height:1em}\
.sfx-felt{width:100%;height:150px;border-radius:18px;background:radial-gradient(ellipse at 50% 30%,#2a7a58,#1E6347 65%,#154a35);border:8px solid #3a2a1a;position:relative;overflow:hidden}\
.sfx-die{position:absolute;width:56px;height:56px;border-radius:12px;background:#FFFDF8;box-shadow:inset 0 -4px 0 #CFC6B6,0 8px 14px rgba(0,0,0,.45);display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);padding:7px;top:45px}\
.sfx-die b{width:10px;height:10px;border-radius:50%;background:#9B1B30;place-self:center}\
.sfx-die.roll1{left:-70px;animation:sfxRoll1 1.6s cubic-bezier(.2,.7,.3,1) forwards}.sfx-die.roll2{left:-140px;animation:sfxRoll2 1.8s cubic-bezier(.2,.7,.3,1) forwards}\
@keyframes sfxRoll1{60%{transform:translate(200px,-30px) rotate(620deg)}to{transform:translate(170px,0) rotate(720deg)}}\
@keyframes sfxRoll2{60%{transform:translate(330px,20px) rotate(-700deg)}to{transform:translate(320px,0) rotate(-720deg)}}\
.sfx-win{font:900 2.6rem/1 "Big Shoulders Display",Impact,sans-serif;color:#FFE7A3;text-shadow:0 0 14px rgba(232,196,106,.9),0 0 30px rgba(229,80,94,.6);letter-spacing:.04em;transform:scale(.3);opacity:0;transition:transform .45s cubic-bezier(.2,1.6,.4,1),opacity .2s}\
.sfx-win.on{transform:scale(1);opacity:1}\
.sfx-thanks{font-weight:600;font-size:1.05rem;color:#FAF7F0;min-height:1.4em}\
@media (prefers-reduced-motion:reduce){.sfx-wheel.spin,.sfx-ballring,.sfx-die.roll1,.sfx-die.roll2{animation-duration:.01s}}';
  function ccss() { if (document.getElementById("sfx-ccss")) return; css(); var s = document.createElement("style"); s.id = "sfx-ccss"; s.textContent = CCSS; document.head.appendChild(s); }
  function veil() { ccss(); var v = document.createElement("div"); v.className = "sfx-veil"; v.setAttribute("role", "status"); v.setAttribute("aria-live", "polite"); document.body.appendChild(v); requestAnimationFrame(function () { v.classList.add("on"); }); return v; }
  function finale(v, host, opts) {
    var w = document.createElement("div"); w.className = "sfx-win"; w.textContent = "WINNER WINNER!"; host.appendChild(w);
    var t = document.createElement("div"); t.className = "sfx-thanks"; t.textContent = opts.thanks || "Thank you for your submission."; host.appendChild(t);
    var row = document.createElement("div"); row.className = "sfx-row"; row.innerHTML = '<button class="sfx-btn" type="button">' + (opts.button || "Collect your winnings") + "</button>"; host.appendChild(row);
    requestAnimationFrame(function () { w.classList.add("on"); }); coins(w);
    var prev = document.activeElement, b = row.querySelector("button");
    function close() { v.classList.remove("on"); setTimeout(function () { v.remove(); }, 260); document.removeEventListener("keydown", esc); if (prev && prev.focus) prev.focus(); opts.onDone && opts.onDone(); }
    function esc(e) { if (e.key === "Escape") close(); }
    b.addEventListener("click", close); document.addEventListener("keydown", esc); setTimeout(function () { b.focus(); }, 300);
  }
  function chipFrom(src, to, cb) {
    if (!src || REDUCED) return cb();
    var r = src.getBoundingClientRect(), c = document.createElement("div"); c.className = "sfx-chip"; c.textContent = "$21";
    c.style.left = (r.left + r.width / 2 - 32) + "px"; c.style.top = (r.top + Math.min(r.height, 300) / 2 - 32) + "px"; document.body.appendChild(c);
    setTimeout(function () { var t = to.getBoundingClientRect(); c.style.left = (t.left + t.width / 2 - 32) + "px"; c.style.top = (t.top - 20) + "px"; c.style.transform = "rotateY(720deg) scale(.7)"; }, 50);
    setTimeout(function () { c.style.opacity = "0"; c.style.transform += " translateY(30px) scaleY(.1)"; }, 900);
    setTimeout(function () { c.remove(); cb(); }, 1150);
  }
  function coinDrop(src, opts) {
    var v = machine(opts.title || "WINNER WINNER"), m = v.querySelector(".sfx-machine"), msg = v.querySelector(".sfx-msg"), out = v.querySelector(".sfx-out");
    msg.textContent = "Dropping your chip…";
    chipFrom(src, m.querySelector(".sfx-slot"), function () {
      msg.textContent = "Rolling…";
      spin(v, LAND, 1200, function () { msg.textContent = ""; out.style.display = "grid"; out.style.justifyItems = "center"; out.style.gap = "8px"; out.style.marginTop = "8px"; finale(v, out, opts); });
    });
  }
  function roulette(src, opts) {
    var v = veil(), st = document.createElement("div"); st.className = "sfx-stage"; v.appendChild(st);
    st.innerHTML = '<div class="sfx-top" style="position:static;transform:none">' + (opts.title || "ROULETTE") + '</div><div class="sfx-wheel"><div class="sfx-ballring"><i></i></div></div><div class="sfx-num" aria-hidden="true"></div>';
    var wheel = st.querySelector(".sfx-wheel");
    chipFrom(src, wheel, function () { wheel.classList.add("spin"); var n = st.querySelector(".sfx-num"), k = 0;
      var tick = setInterval(function () { n.textContent = (Math.random() * 36 | 0) + 1; if (++k > 22) { clearInterval(tick); n.textContent = "21 RED"; finale(v, st, opts); } }, REDUCED ? 5 : 140); });
  }
  function dice(src, opts) {
    var v = veil(), st = document.createElement("div"); st.className = "sfx-stage"; v.appendChild(st);
    var pips = { 3: [1, 5, 9], 4: [1, 3, 7, 9] };
    function die(n, cls) { var cells = ""; for (var i = 1; i <= 9; i++) cells += pips[n].indexOf(i) > -1 ? "<b></b>" : "<span></span>"; return '<div class="sfx-die ' + cls + '">' + cells + "</div>"; }
    st.innerHTML = '<div class="sfx-top" style="position:static;transform:none">' + (opts.title || "LUCKY SEVEN") + '</div><div class="sfx-felt">' + die(3, "") + die(4, "") + '</div><div class="sfx-num" aria-hidden="true"></div>';
    var felt = st.querySelector(".sfx-felt"), ds = felt.querySelectorAll(".sfx-die");
    chipFrom(src, felt, function () { ds[0].classList.add("roll1"); ds[1].classList.add("roll2");
      setTimeout(function () { st.querySelector(".sfx-num").textContent = "3 + 4 = 7"; finale(v, st, opts); }, REDUCED ? 50 : 1850); });
  }

  // ---------- Bingo / Keno: daubed letters spell the message ----------
  var BCSS = '\
.sfx-bingo{display:grid;gap:5px;padding:12px;border-radius:16px;background:#FFFDF8;box-shadow:0 0 0 4px #B8862F,0 20px 50px rgba(0,0,0,.6)}\
.sfx-bingo .bh{font:900 1.5rem "Big Shoulders Display",Impact,sans-serif;color:#FFFDF8;background:#9B1B30;border-radius:8px;display:grid;place-items:center;height:38px}\
.sfx-bingo .bc{position:relative;display:grid;place-items:center;height:42px;border-radius:8px;background:#F1E9D8;font:800 1.15rem "Big Shoulders Display",Impact,sans-serif;color:#2B2730}\
.sfx-bingo .bc.free{font-size:.7rem;color:#9B1B30}\
.sfx-bingo .bc.dab::after{content:"";position:absolute;inset:4px;border-radius:50%;background:radial-gradient(circle at 40% 35%,rgba(229,80,94,.85),rgba(155,27,48,.78));transform:scale(0);animation:sfxDab .28s cubic-bezier(.2,1.6,.4,1) forwards;mix-blend-mode:multiply}\
.sfx-bingo .bc.win{color:#FFFDF8;z-index:1}\
.sfx-bingo .bc.win span{position:relative;z-index:2}\
@keyframes sfxDab{to{transform:scale(1)}}\
.sfx-ball{width:74px;height:74px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#fff,#E8C46A 55%,#B8862F);box-shadow:0 10px 20px rgba(0,0,0,.45);font:900 2rem "Big Shoulders Display",Impact,sans-serif;color:#9B1B30;transition:transform .25s}\
.sfx-ball.pop{transform:scale(1.18)}';
  function bingo(src, opts, keno) {
    ccss(); if (!document.getElementById("sfx-bcss")) { var s = document.createElement("style"); s.id = "sfx-bcss"; s.textContent = BCSS; document.head.appendChild(s); }
    var word = (opts.word || (keno ? ["SUCCESS", "THANKYOU"][(Math.random() * 2) | 0] : "SENT")).toUpperCase().replace(/[^A-Z!]/g, "");
    var cols = Math.max(5, word.length), rows = 5, mid = 2, head = keno ? "KENO" : "BINGO";
    var start = Math.floor((cols - word.length) / 2), FILL = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    var v = veil(), st = document.createElement("div"); st.className = "sfx-stage"; st.style.width = "min(" + (cols * 58 + 40) + "px,94vw)"; v.appendChild(st);
    var g = '<div class="sfx-bingo" style="grid-template-columns:repeat(' + cols + ',1fr);width:100%">';
    for (var c = 0; c < cols; c++) g += '<div class="bh">' + (head[c] || (keno ? "★" : "")) + "</div>";
    for (var r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
      var inWord = r === mid && c >= start && c < start + word.length, ch = inWord ? word[c - start] : (keno ? String(1 + ((r * cols + c) * 7) % 80) : FILL[(Math.random() * FILL.length) | 0]);
      if (!keno && r === mid && !inWord && cols === 5 && c === 2) ch = "FREE";
      g += '<div class="bc' + (ch === "FREE" ? " free" : "") + '" data-w="' + (inWord ? c - start : "") + '"><span>' + ch + "</span></div>";
    }
    g += "</div>";
    st.innerHTML = '<div class="sfx-top" style="position:static;transform:none">' + (opts.title || head) + '</div><div class="sfx-ball" aria-hidden="true">★</div>' + g;
    var ball = st.querySelector(".sfx-ball"), cells = st.querySelectorAll('.bc[data-w]:not([data-w=""])'), i = 0;
    chipFrom(src, ball, function () {
      var t = setInterval(function () {
        if (i >= word.length) { clearInterval(t); cells.forEach(function (cell) { cell.classList.add("win"); }); ball.textContent = keno ? "★" : "B!";
          var w = document.createElement("div"); w.className = "sfx-num"; w.textContent = keno ? (word === "THANKYOU" ? "THANK YOU" : word) : "BINGO!"; st.insertBefore(w, st.querySelector(".sfx-bingo")); finale(v, st, opts); return; }
        var ch = word[i]; ball.textContent = ch; ball.classList.add("pop"); setTimeout(function () { ball.classList.remove("pop"); }, 220);
        var cell = st.querySelector('.bc[data-w="' + i + '"]'); if (cell) cell.classList.add("dab", "win"); i++;
      }, REDUCED ? 30 : 420);
    });
  }
  function celebrate(src, opts) { opts = opts || {}; var pick = opts.game || ["coin", "roulette", "dice", "bingo", "keno"][(Math.random() * 5) | 0];
    if (pick === "bingo" || pick === "keno") return bingo(src, opts, pick === "keno");
    return (pick === "roulette" ? roulette : pick === "dice" ? dice : coinDrop)(src, opts); }

  window.SFX = { cashOut: cashOut, machine: machine, spin: spin, celebrate: celebrate };
})();
