/* SuiteFace page transition: quiet and quick.
   Tap a link to another page: five card backs fan out over a soft veil. The next page opens with the cards
   gathering back into a deck and fading away. About half a second. Skipped for reduced motion. */
(function () {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var KEY = "sf.fan", el;
  function css() {
    if (document.getElementById("sfFanCss")) return;
    var s = document.createElement("style"); s.id = "sfFanCss";
    s.textContent = "#sfFan{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:rgba(250,248,242,.72);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;transition:opacity .18s ease;pointer-events:none}" +
      "#sfFan.on{opacity:1;pointer-events:auto}" +
      "#sfFan .fan{position:relative;width:64px;height:92px}" +
      "#sfFan .fan i{position:absolute;inset:0;border-radius:7px;background:repeating-linear-gradient(45deg,#1E6347 0 6px,#1A5A40 6px 12px);box-shadow:inset 0 0 0 2px #fff,inset 0 0 0 3px #C9A24E,0 6px 16px -6px rgba(18,56,43,.45);transform-origin:50% 120%;transition:transform .32s cubic-bezier(.3,.7,.3,1)}" +
      "#sfFan .fan i:nth-child(1){background:repeating-linear-gradient(45deg,#8E2230 0 6px,#7E1C29 6px 12px)}" +
      "#sfFan.open .fan i:nth-child(1){transform:rotate(-24deg)}#sfFan.open .fan i:nth-child(2){transform:rotate(-12deg)}#sfFan.open .fan i:nth-child(4){transform:rotate(12deg)}#sfFan.open .fan i:nth-child(5){transform:rotate(24deg)}" +
      "#sfFan .tag{position:absolute;top:calc(50% + 70px);left:0;right:0;text-align:center;font:600 .8rem Figtree,system-ui,sans-serif;letter-spacing:.04em;color:#12382B;opacity:.7}" +
      "html.sffanin body>*:not(#sfFan){opacity:0}html.sffanout body>*:not(#sfFan){transition:opacity .25s ease}";
    document.head.appendChild(s);
  }
  function build() { css(); if (el) return el; el = document.createElement("div"); el.id = "sfFan"; el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="fan"><i></i><i></i><i></i><i></i><i></i></div><div class="tag">No Jokers Needed</div>'; (document.body || document.documentElement).appendChild(el); return el; }
  function show(open) { build(); void el.offsetWidth; el.classList.add("on"); if (open) requestAnimationFrame(function () { el.classList.add("open"); }); }
  function hide() { if (!el) return; el.classList.remove("open"); setTimeout(function () { el.classList.remove("on"); }, 160); }
  try {
    var t = +sessionStorage.getItem(KEY) || 0; sessionStorage.removeItem(KEY);
    if (t && Date.now() - t < 5000) {
      document.documentElement.classList.add("sffanin"); css();
      var go = function () { build(); el.classList.add("on", "open"); setTimeout(function () { var h = document.documentElement; h.classList.add("sffanout"); h.classList.remove("sffanin"); hide(); }, 220); };
      if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
    }
  } catch (e) { }
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest("a[href]"); if (!a) return;
    if (a.target && a.target !== "_self") return; if (a.hasAttribute("download") || a.hasAttribute("data-noslot")) return;
    var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
    if (u.origin !== location.origin || !/(\.html|\/)$/.test(u.pathname)) return;
    if (u.pathname === location.pathname && u.search === location.search) return;
    try { sessionStorage.setItem(KEY, String(Date.now())); } catch (x) { }
    show(true);
    setTimeout(function () { if (document.visibilityState === "visible" && el && el.classList.contains("on")) { try { sessionStorage.removeItem(KEY); } catch (x) { } hide(); } }, 1600);
  }, true);
  window.addEventListener("pageshow", function (e) { if (e.persisted) hide(); });
})();
