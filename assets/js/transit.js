/* SuiteFace page transition: the slot machine.
   Tap a link to another page: the handle comes down and the reels spin. The next page opens with the reels landing
   on random symbols, then the machine fades away. Skipped for reduced motion. About one second in all. */
(function () {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var A = "/assets/art/slot/", SYMS = ["cherry", "seven", "bell", "jester", "diamond", "melon", "spade", "clover", "bar"];
  var KEY = "sf.slotLand", el, strips = [], lever;
  function pic(n) { return '<picture><source type="image/webp" srcset="' + A + "sym_" + n + '.webp"><img src="' + A + "sym_" + n + '.jpg" alt=""></picture>'; }
  function css() {
    if (document.getElementById("sfSlotCss")) return;
    var s = document.createElement("style"); s.id = "sfSlotCss";
    s.textContent = "#sfSlot{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:radial-gradient(80% 70% at 50% 45%,rgba(18,54,40,.82),rgba(8,24,17,.92));-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;transition:opacity .22s ease;pointer-events:none}" +
      "#sfSlot.on{opacity:1;pointer-events:auto}" +
      "#sfSlot .sm{position:relative;width:min(400px,78vw);aspect-ratio:1375/1144;filter:drop-shadow(0 30px 50px rgba(0,0,0,.55))}" +
      "#sfSlot .sm>img,#sfSlot .sm>picture>img{position:absolute;inset:0;width:100%;height:100%;display:block}" +
      "#sfSlot .rv{position:absolute;top:32.17%;height:40.82%;overflow:hidden;border-radius:3px}" +
      "#sfSlot .rv:nth-child(1){left:19.64%;width:16.36%}#sfSlot .rv:nth-child(2){left:38.55%;width:16.36%}#sfSlot .rv:nth-child(3){left:57.31%;width:16.15%}" +
      "#sfSlot .rv::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(40,20,0,.45),rgba(0,0,0,0) 22%,rgba(0,0,0,0) 78%,rgba(40,20,0,.45));pointer-events:none}" +
      "#sfSlot .st{position:absolute;left:0;right:0;top:0;will-change:transform}" +
      "#sfSlot .st picture,#sfSlot .st img{display:block;width:100%;height:auto;aspect-ratio:225/155}" +
      "#sfSlot .lv{position:absolute;inset:0;transform-origin:90.2% 55.9%}" +
      "#sfSlot .lv img{width:100%;height:100%;display:block}" +
      "#sfSlot .rd{position:absolute;inset:0;z-index:2}#sfSlot .sm>picture{position:absolute;inset:0;z-index:1}#sfSlot .lv{z-index:3}" +
      "html.sfslotin body>*:not(#sfSlot){opacity:0}html.sfslotout body>*:not(#sfSlot){transition:opacity .3s ease}";
    document.head.appendChild(s);
  }
  function build() {
    css(); if (el) return el;
    el = document.createElement("div"); el.id = "sfSlot"; el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="sm"><div class="rd"><div class="rv"></div><div class="rv"></div><div class="rv"></div></div>' +
      '<picture><source type="image/webp" srcset="' + A + 'slot_base.webp"><img src="' + A + 'slot_base.png" alt=""></picture>' +
      '<div class="lv"><picture><source type="image/webp" srcset="' + A + 'slot_lever.webp"><img src="' + A + 'slot_lever.png" alt=""></picture></div></div>';
    (document.body || document.documentElement).appendChild(el);
    lever = el.querySelector(".lv");
        strips = [].map.call(el.querySelectorAll(".rv"), function (v) { var s = document.createElement("div"); s.className = "st"; v.appendChild(s); return s; });
    return el;
  }
  function fill(s, n) { var h = ""; for (var i = 0; i < n; i++) h += pic(SYMS[Math.floor(Math.random() * SYMS.length)]); s.innerHTML = h; }
  function spin(durs, done) {
    var N = 30;
    strips.forEach(function (s, i) {
      fill(s, N);
      var cell = s.parentNode.clientHeight / 3, to = -(N - 3) * cell;
      if (!s.animate) { s.style.transform = "translateY(" + to + "px)"; return; }
      s.animate([{ transform: "translateY(0)" }, { transform: "translateY(" + (to - cell * .18) + "px)", offset: .9 }, { transform: "translateY(" + to + "px)" }],
        { duration: durs[i], easing: "cubic-bezier(.25,.1,.25,1)", fill: "forwards" });
    });
    if (done) setTimeout(done, Math.max.apply(null, durs));
  }
  function pull() {
    if (lever && lever.animate) lever.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(-.42)", offset: .45 }, { transform: "scaleY(1)" }], { duration: 520, easing: "cubic-bezier(.4,0,.2,1)" });
  }
  function show() { build(); void el.offsetWidth; el.classList.add("on"); }
  function hide() { if (el) el.classList.remove("on"); }

  // Arriving on a page after a tap: land the reels, then reveal the page.
  try {
    var t = +sessionStorage.getItem(KEY) || 0; sessionStorage.removeItem(KEY);
    if (t && Date.now() - t < 6000) {
      document.documentElement.classList.add("sfslotin"); css();
      var go = function () { show(); spin([520, 680, 840], function () { setTimeout(function () { var h = document.documentElement; h.classList.add("sfslotout"); h.classList.remove("sfslotin"); hide(); }, 240); }); };
      if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
    }
  } catch (e) { }

  // Leaving: pull the handle and start the spin; the browser keeps going to the next page.
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest("a[href]"); if (!a) return;
    if (a.target && a.target !== "_self") return; if (a.hasAttribute("download") || a.hasAttribute("data-noslot")) return;
    var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
    if (u.origin !== location.origin || !/(\.html|\/)$/.test(u.pathname)) return;
    if (u.pathname === location.pathname && u.search === location.search) return; // same page (hash links)
    try { sessionStorage.setItem(KEY, String(Date.now())); } catch (x) { }
    show(); pull(); spin([1400, 1400, 1400]);
    // If the site switches pages without a full load, finish here instead.
    setTimeout(function () { if (document.visibilityState === "visible" && el && el.classList.contains("on")) { try { sessionStorage.removeItem(KEY); } catch (x) { } spin([420, 560, 700], function () { setTimeout(hide, 200); }); } }, 1500);
  }, true);
  window.addEventListener("pageshow", function (e) { if (e.persisted) hide(); });
})();
