/* SuiteFace slot symbols: original art in house colors (no real casino's marks).
   They do two jobs:
   1. Compliment stickers a player earns from a real date (earned only, never bought):
      cherries  Turned heads          kiss      Great first kiss       hug        Great hugger
      goldbars  Generous: covered it  talk      Great conversation     clover     Charismatic
      seven     Lucky 7: best date    horseshoe Showed up, as promised
   2. Small ornaments around the site: section eyebrows, a reel divider, and a little reel that spins
      and lands when a page opens.
   Use: SFSlots.svg("cherries", 22)  ·  <i data-slot="clover"></i>  ·  <div class="reel-div"></div> */
(function () {
  var R = "#C8102E", R2 = "#8E2230", G = "#2E7D4F", G2 = "#1E6347", B = "#C9A55A", B2 = "#8F6410", B3 = "#FFE7A3", INK = "#2B2730";
  var ART = {
    cherries: '<path d="M8.6 13.4C9.5 9 11.6 5.6 15.2 3.6M15.4 13C15 9.4 15.4 6.2 15.2 3.6" fill="none" stroke="' + G2 + '" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M15.2 3.6c2.2-.9 4.6-.4 6 1.4-2.3 1.1-4.4 1-6-1.4z" fill="' + G + '"/>' +
      '<circle cx="8" cy="16.6" r="4.4" fill="' + R + '"/><circle cx="16" cy="16.2" r="4.4" fill="' + R2 + '"/><circle cx="16" cy="16.2" r="4.4" fill="' + R + '" opacity=".85"/>' +
      '<circle cx="6.5" cy="15" r="1.2" fill="#fff" opacity=".7"/><circle cx="14.5" cy="14.6" r="1.2" fill="#fff" opacity=".7"/>',
    clover: '<g fill="' + G + '" stroke="#fff" stroke-width=".6"><path d="M12 11.4C10.2 9.9 7.9 8.4 7.9 6.3 7.9 5 8.9 4 10.1 4c.8 0 1.5.4 1.9 1.1.4-.7 1.1-1.1 1.9-1.1 1.2 0 2.2 1 2.2 2.3 0 2.1-2.3 3.6-4.1 5.1z" transform="rotate(45 12 12)"/><path d="M12 11.4C10.2 9.9 7.9 8.4 7.9 6.3 7.9 5 8.9 4 10.1 4c.8 0 1.5.4 1.9 1.1.4-.7 1.1-1.1 1.9-1.1 1.2 0 2.2 1 2.2 2.3 0 2.1-2.3 3.6-4.1 5.1z" transform="rotate(135 12 12)"/><path d="M12 11.4C10.2 9.9 7.9 8.4 7.9 6.3 7.9 5 8.9 4 10.1 4c.8 0 1.5.4 1.9 1.1.4-.7 1.1-1.1 1.9-1.1 1.2 0 2.2 1 2.2 2.3 0 2.1-2.3 3.6-4.1 5.1z" transform="rotate(225 12 12)"/><path d="M12 11.4C10.2 9.9 7.9 8.4 7.9 6.3 7.9 5 8.9 4 10.1 4c.8 0 1.5.4 1.9 1.1.4-.7 1.1-1.1 1.9-1.1 1.2 0 2.2 1 2.2 2.3 0 2.1-2.3 3.6-4.1 5.1z" transform="rotate(315 12 12)"/></g>' +
      '<path d="M12.3 12.8c.9 2.9 2.4 5.4 4.6 7.6" fill="none" stroke="' + G2 + '" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="1.1" fill="' + G2 + '"/>',
    seven: '<path d="M5 3.5h14v3.2L11.6 21H7.4l7-13.8H5z" fill="' + R + '" stroke="' + B + '" stroke-width="1.4" stroke-linejoin="round"/>',
    goldbars: '<g stroke="' + B2 + '" stroke-width=".8" stroke-linejoin="round"><path d="M2.5 20.5l2-5h7l2 5z" fill="' + B + '"/><path d="M10.5 20.5l2-5h7l2 5z" fill="' + B + '"/><path d="M6.5 15l2-5h7l2 5z" fill="#E3C77E"/></g>' +
      '<path d="M5.4 16.2h5.2M13.4 16.2h5.2M9.4 10.8h5.2" stroke="' + B3 + '" stroke-width=".9" stroke-linecap="round"/>',
    kiss: '<path d="M2.5 12.2c2.4-3.6 4.8-5.4 6.6-5.2 1.2.1 2.1.8 2.9 1.6.8-.8 1.7-1.5 2.9-1.6 1.8-.2 4.2 1.6 6.6 5.2-2.6 4.2-5.8 6.3-9.5 6.3s-6.9-2.1-9.5-6.3z" fill="' + R + '"/>' +
      '<path d="M3.6 12.3c2.8.7 5.6.9 8.4.9s5.6-.2 8.4-.9" fill="none" stroke="' + R2 + '" stroke-width="1.2" stroke-linecap="round"/><path d="M8 9.4c1-.5 2-.4 2.6.2" fill="none" stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".6"/>',
    hug: '<path d="M12 19.5s-6.5-3.9-6.5-8.6A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 6.5 1.9c0 4.7-6.5 8.6-6.5 8.6z" fill="' + R + '"/>' +
      '<path d="M3.2 9.6c-.6 3.6 1.2 7.2 4.8 9M20.8 9.6c.6 3.6-1.2 7.2-4.8 9" fill="none" stroke="' + B2 + '" stroke-width="2" stroke-linecap="round"/><circle cx="8.2" cy="18.6" r="1.4" fill="' + B2 + '"/><circle cx="15.8" cy="18.6" r="1.4" fill="' + B2 + '"/>',
    talk: '<path d="M3 5.5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-3.4 2.8V14.5H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z" fill="' + G + '"/>' +
      '<path d="M10 11.5h9a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.6V22l-3-2.5H10a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" fill="' + B + '" stroke="#fff" stroke-width=".8"/>' +
      '<g fill="#fff"><circle cx="5.2" cy="10" r=".9"/><circle cx="8" cy="10" r=".9"/><circle cx="10.8" cy="10" r=".9"/></g>',
    horseshoe: '<path d="M6 3.5C3.5 6 3 9.8 4.2 13.4 5.5 17.4 8.4 20 12 20s6.5-2.6 7.8-6.6C21 9.8 20.5 6 18 3.5l-3 1.2c1.7 1.8 2.1 4.4 1.3 7.2-.8 2.8-2.4 4.5-4.3 4.5s-3.5-1.7-4.3-4.5c-.8-2.8-.4-5.4 1.3-7.2z" fill="' + B + '" stroke="' + B2 + '" stroke-width=".8" stroke-linejoin="round"/>' +
      '<g fill="' + INK + '" opacity=".75"><circle cx="5.4" cy="8.4" r=".7"/><circle cx="5.6" cy="12.4" r=".7"/><circle cx="18.6" cy="8.4" r=".7"/><circle cx="18.4" cy="12.4" r=".7"/></g>',
    bell: '<path d="M12 3.5c-3.3 0-5.5 2.6-5.5 6v4L4.5 17h15l-2-3.5v-4c0-3.4-2.2-6-5.5-6z" fill="' + B + '" stroke="' + B2 + '" stroke-width=".8" stroke-linejoin="round"/><circle cx="12" cy="19" r="1.8" fill="' + B2 + '"/><path d="M9 7.5c.6-1 1.6-1.6 2.6-1.7" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".7"/>',
    garlic: '<path d="M12 3.2c.4 1.6.2 2.6-.4 3.6 3.6.8 7 3.6 7 7.6 0 3.8-3.1 6.4-6.6 6.4S5.4 18.2 5.4 14.4c0-4 3.4-6.8 7-7.6" fill="#F7F2E6" stroke="#8A8174" stroke-width=".9" stroke-linejoin="round"/>' +
      '<path d="M12 7.2c-1.6 2.6-2 8.6 0 12.8M12 7.2c1.6 2.6 2 8.6 0 12.8M8.4 9.6c-1.2 3-.8 7 1.6 9.8M15.6 9.6c1.2 3 .8 7-1.6 9.8" fill="none" stroke="#B9AE9C" stroke-width=".8"/>' +
      '<path d="M10 20.6h4" stroke="#8A8174" stroke-width="1" stroke-linecap="round"/>',
    onion: '<path d="M12 4.5c.3 1.4.1 2.3-.4 3.1 3.9 1.1 6.6 4.2 6.6 7.6 0 3.3-2.7 5.6-6.2 5.6s-6.2-2.3-6.2-5.6c0-3.4 2.7-6.5 6.6-7.6" fill="#9C4A7A" stroke="#6B2E52" stroke-width=".9" stroke-linejoin="round"/>' +
      '<path d="M12 8c-1.8 2.2-2.4 7.6 0 12.6M12 8c1.8 2.2 2.4 7.6 0 12.6" fill="none" stroke="#C786AC" stroke-width=".8"/><path d="M11.6 4.5c-.6-1.2-.4-2.2.4-3 .8.8 1 1.8.4 3" fill="' + G + '"/>' +
      '<path d="M3 6.5c1 .8 1 1.8 0 2.6s-1 1.8 0 2.6M21 6.5c-1 .8-1 1.8 0 2.6s1 1.8 0 2.6" fill="none" stroke="#7D9A5A" stroke-width="1.1" stroke-linecap="round"/>',
    gem: '<path d="M7 4h10l4 5-9 11L3 9z" fill="#E9EEF2" stroke="' + B2 + '" stroke-width=".8" stroke-linejoin="round"/><path d="M3 9h18M7 4l2.5 5L12 20 14.5 9 17 4M9.5 9 12 4l2.5 5" fill="none" stroke="#A9B4BE" stroke-width=".7"/>'
  };
  var MEAN = {
    cherries: ["Turned heads", "Smoking hot. Heads turned all night."],
    kiss: ["Great first kiss", "That first kiss? Jackpot."],
    hug: ["Great hugger", "The kind of hug you remember."],
    goldbars: ["Generous", "Covered the date. Big spender, bigger heart."],
    talk: ["Great conversation", "Talked for hours and it flew by."],
    clover: ["Charismatic", "Lucky to be around. Pure charm."],
    seven: ["Lucky 7", "Best date in a long time."],
    horseshoe: ["Showed up", "On time, as promised, every time."],
    garlic: ["Bad breath", "Pack some mints next time."],
    onion: ["Body odor", "A shower and deodorant go a long way."]
  };
  var NEG = ["garlic", "onion"];
  var KINDS = ["cherries", "kiss", "hug", "goldbars", "talk", "clover", "seven", "horseshoe"];
  function svg(name, size, cls) { var a = ART[name]; if (!a) return ""; size = size || 20; return '<svg class="slotsym' + (cls ? " " + cls : "") + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + a + "</svg>"; }
  /* Compliment strip for a card: {kind: count} */
  function strip(counts, opts) {
    opts = opts || {}; var keys = KINDS.concat(NEG).filter(function (k) { return counts && counts[k]; }); if (!keys.length) return "";
    if (opts.max) keys = keys.sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, opts.max);
    return '<div class="comps">' + keys.map(function (k) { return '<span class="comp' + (NEG.indexOf(k) > -1 ? " neg" : "") + '" title="' + MEAN[k][0] + " × " + counts[k] + '" role="img" aria-label="' + MEAN[k][0] + ", " + counts[k] + '">' + svg(k, opts.size || 18) + (NEG.indexOf(k) > -1 ? "" : counts[k] > 1 ? "<b>" + counts[k] + "</b>" : "") + (opts.labels ? "<em>" + MEAN[k][0] + "</em>" : "") + "</span>"; }).join("") + "</div>";
  }
  var ORN = ["cherries", "seven", "clover", "bell", "goldbars", "horseshoe", "gem"];
  function paint(root) {
    root = root || document;
    root.querySelectorAll("[data-slot]:not([data-done])").forEach(function (el) { el.setAttribute("data-done", "1"); el.innerHTML = svg(el.getAttribute("data-slot"), +(el.getAttribute("data-size") || 18)); });
    root.querySelectorAll(".reel-div:not([data-done])").forEach(function (el) { el.setAttribute("data-done", "1"); el.setAttribute("aria-hidden", "true"); el.innerHTML = "<i></i>" + svg("cherries", 18) + svg("seven", 18) + svg("clover", 18) + "<i></i>"; });
    /* Section eyebrows wear a small symbol, cycling through the reel. */
    var i = 0;
    root.querySelectorAll(".sec-head .eyebrow:not([data-orn]), section .eyebrow:not([data-orn])").forEach(function (el) { el.setAttribute("data-orn", "1"); el.insertAdjacentHTML("afterbegin", svg(ORN[i++ % ORN.length], 15, "orn")); });
  }
  /* A little three-reel spin that lands when a page opens (once per page view; off for reduced motion). */
  function landing() {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var brand = document.querySelector(".top .brand, .bar .home, header .brand"); if (!brand || document.querySelector(".reelpill")) return;
    var land = [["cherries", "cherries", "cherries"], ["seven", "seven", "seven"], ["clover", "clover", "clover"], ["goldbars", "goldbars", "goldbars"]][Math.floor(Date.now() / 1000) % 4];
    var pill = document.createElement("span"); pill.className = "reelpill"; pill.setAttribute("aria-hidden", "true");
    pill.innerHTML = land.map(function (k, n) { var strip = KINDS.concat(KINDS).slice(n * 2, n * 2 + 6).map(function (x) { return svg(x, 16); }).join("") + svg(k, 16); return '<span class="reel" style="--d:' + (0.55 + n * 0.22) + 's">' + '<span class="track">' + strip + "</span></span>"; }).join("");
    brand.appendChild(pill);
    setTimeout(function () { pill.classList.add("won"); }, 1400);
    setTimeout(function () { pill.classList.add("gone"); }, 3200);
    setTimeout(function () { pill.remove(); }, 3800);
  }
  var css = ".slotsym{display:inline-block;vertical-align:-3px;flex:none}" +
    ".eyebrow .orn{margin-right:6px;vertical-align:-2px}" +
    ".comps{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin:4px 0 0}" +
    ".comp{display:inline-flex;align-items:center;gap:2px;padding:2px 5px 2px 3px;border-radius:999px;background:rgba(255,253,248,.92);box-shadow:0 0 0 1px rgba(201,165,90,.55),0 2px 4px -2px rgba(43,39,48,.4)}" +
    ".comp.neg{background:#F4EAF0;box-shadow:0 0 0 1px rgba(156,74,122,.55),0 2px 4px -2px rgba(43,39,48,.4)}" +
    ".comp b{font:800 10px/1 Figtree,system-ui,sans-serif;color:#6E4E14}.comp em{font:600 12px/1.2 Figtree,system-ui,sans-serif;font-style:normal;color:#2B2730;margin-left:3px}" +
    ".reel-div{display:flex;align-items:center;gap:10px;justify-content:center;margin:8px auto 0;max-width:560px;opacity:.9}" +
    ".reel-div i{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(201,165,90,.7),transparent)}" +
    ".reelpill{position:relative;display:inline-flex;gap:2px;margin-left:10px;padding:3px;border-radius:9px;background:#2B2730;box-shadow:inset 0 0 0 1px #C9A55A,0 4px 10px -4px rgba(43,39,48,.5);vertical-align:middle;transition:opacity .5s,transform .5s}" +
    ".reelpill .reel{width:20px;height:20px;overflow:hidden;border-radius:5px;background:#FFFDF8}" +
    ".reelpill .track{display:flex;flex-direction:column;align-items:center;gap:4px;padding-top:2px;animation:reelspin var(--d) cubic-bezier(.2,.7,.3,1) both}" +
    ".reelpill .track svg{width:16px;height:16px}" +
    "@keyframes reelspin{from{transform:translateY(0)}to{transform:translateY(-120px)}}" +
    ".reelpill.won{box-shadow:inset 0 0 0 1px #FFE7A3,0 0 14px rgba(232,196,106,.8)}.reelpill.gone{opacity:0;transform:scale(.8)}" +
    "@media (max-width:420px){.reelpill{display:none}}" +
    "@media (prefers-reduced-motion:reduce){.reelpill{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  window.SFSlots = { svg: svg, strip: strip, paint: paint, meaning: MEAN, kinds: KINDS, neg: NEG };
  function boot() { paint(); landing(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
