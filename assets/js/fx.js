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
  function symHTML(s) { return '<div class="sfx-sym' + (s[2] ? " r" : "") + '">' + s[0] + (s[1] ? "<small>" + s[1] + "</small>" : "") + "</div>"; }
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
    var land = [SYM[(Math.random() * 4) | 0], SYM[(Math.random() * 4) | 0], SYM[(Math.random() * 4) | 0]];
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
    e.preventDefault(); pageSpin(a.href);
  });
  // arriving: reels stop and the veil lifts
  (function () {
    var arrive = false; try { arrive = sessionStorage.getItem("sfx-arrive") === "1"; sessionStorage.removeItem("sfx-arrive"); } catch (e) { }
    if (!arrive || REDUCED) return;
    function go() { var v = machine("NEXT TABLE"); v.classList.add("page"); v.querySelectorAll(".sfx-strip").forEach(function (s) { s.innerHTML = symHTML(LAND[0]); });
      spin(v, LAND, 380, function () { setTimeout(function () { v.classList.remove("on"); setTimeout(function () { v.remove(); }, 260); }, 220); }); }
    if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
  })();
  window.addEventListener("pageshow", function (e) { if (e.persisted) document.querySelectorAll(".sfx-veil").forEach(function (v) { v.remove(); }); });

  window.SFX = { cashOut: cashOut, machine: machine, spin: spin };
})();
