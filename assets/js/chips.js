/* SuiteFace house chips. Every price at SuiteFace is one of five denominations, and each has a locked color:
     21¢     Ivory   (ivory body, sage inserts, ink value)        — small fees
     $2.10   Oxblood (oxblood body, ivory inserts)                — the monthly membership, The Raise, extra seats and ZIPs
     $21     Felt    (felt green body, ivory inserts)             — the Buy-In, a Private Table build
     $210    Ebony   (ebony body, brass inserts)                  — Joker Lobby, statewide coverage, sponsors
     $2,100  Brass   (brass body, ebony inserts)                  — Joker buy-out, nationwide, High Roller sponsor
   Use: <span class="sfchip" data-chip="2.10"></span> (optional data-size="96", data-spin, data-label="a month").
   Or in script: SFChips.svg("21", { size: 120, spin: true }). */
(function () {
  var D = {
    "0.21": { label: "21¢", body: "#F2ECDD", insert: "#5E7A6C", ring: "#5E7A6C", inlay: "#FFFDF8", ink: "#23202A", name: "Ivory" },
    "2.10": { label: "$2.10", body: "#8E2230", insert: "#F2ECDD", ring: "#F2ECDD", inlay: "#FFFDF8", ink: "#8E2230", name: "Oxblood" },
    "21": { label: "$21", body: "#1E6347", insert: "#F2ECDD", ring: "#F2ECDD", inlay: "#FFFDF8", ink: "#1E6347", name: "Felt" },
    "210": { label: "$210", body: "#26232B", insert: "#C9A55A", ring: "#C9A55A", inlay: "#FFFDF8", ink: "#26232B", name: "Ebony" },
    "2100": { label: "$2,100", body: "#C9A55A", insert: "#26232B", ring: "#26232B", inlay: "#FFFDF8", ink: "#6E4E14", name: "Brass" }
  };
  var ALIAS = { "21c": "0.21", ".21": "0.21", "0.21": "0.21", "2.1": "2.10", "2.10": "2.10", "21": "21", "21.00": "21", "210": "210", "2100": "2100", "2,100": "2100" };
  var uid = 0;
  function key(v) { v = String(v).replace(/[$\s]/g, ""); return ALIAS[v] || ALIAS[v.replace(/,/g, "")] || "21"; }
  /* Rendered chip art (Oct 19). Falls back to the drawn chip if a value has no art. */
  var ART = { "0.21": "chip_0-21", "2.10": "chip_2-10", "21": "chip_21", "210": "chip_210", "2100": "chip_2100", house: "chip_house" };
  function art(v, o) {
    o = o || {}; var k = v === "house" ? "house" : key(v), f = ART[k], size = o.size || 96, lab = k === "house" ? "SuiteFace house" : D[k].label;
    return '<picture class="sfchip-art' + (o.spin ? " spin" : "") + '" style="width:' + size + "px;height:" + size + 'px"><source type="image/webp" srcset="/assets/art/chips/' + f + '.webp"><img src="/assets/art/chips/' + f + '.png" width="' + size + '" height="' + size + '" alt="' + lab + ' chip" loading="lazy" decoding="async"></picture>';
  }
  function svg(v, o) {
    if (!(o && o.drawn)) return art(v, o);
    o = o || {}; var k = key(v), d = D[k], id = "sfc" + (++uid), size = o.size || 96;
    var inserts = "", n = 8;
    for (var i = 0; i < n; i++) {
      var a = i * 360 / n;
      inserts += '<rect x="96" y="3" width="16" height="22" rx="2" fill="' + d.insert + '" transform="rotate(' + a + ' 104 104)"/>';
    }
    var txt = d.label, fs = txt.length > 5 ? 26 : txt.length > 4 ? 30 : 36;
    var rim = "SUITEFACE  ·  " + (o.rim || "NO JOKERS NEEDED") + "  ·  ";
    return '<svg class="sfchip-svg' + (o.spin ? " spin" : "") + '" width="' + size + '" height="' + size + '" viewBox="0 0 208 208" role="img" aria-label="' + d.label + ' chip">' +
      '<defs><radialGradient id="' + id + 'g" cx="40%" cy="32%" r="80%"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></radialGradient>' +
      '<path id="' + id + 'p" d="M104,104 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"/></defs>' +
      '<circle cx="104" cy="106" r="100" fill="#000" opacity=".18"/>' +
      '<g class="rimg"><circle cx="104" cy="104" r="100" fill="' + d.body + '"/>' + inserts +
      '<circle cx="104" cy="104" r="80" fill="none" stroke="' + d.ring + '" stroke-width="2" stroke-dasharray="5 6" opacity=".9"/>' +
      '<text font-family="Figtree,Arial,sans-serif" font-weight="800" font-size="12" fill="' + d.insert + '"><textPath href="#' + id + 'p" startOffset="0" textLength="432" lengthAdjust="spacing">' + rim + '</textPath></text></g>' +
      '<circle cx="104" cy="104" r="58" fill="' + d.inlay + '"/>' +
      '<circle cx="104" cy="104" r="52" fill="none" stroke="' + d.body + '" stroke-width="2"/>' +
      '<text x="104" y="' + (104 + fs * .36) + '" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="900" font-size="' + fs + '" letter-spacing="-1" fill="' + d.ink + '">' + txt + '</text>' +
      '<circle cx="104" cy="104" r="100" fill="url(#' + id + 'g)"/></svg>';
  }
  var css = ".sfchip{display:inline-grid;justify-items:center;gap:6px;vertical-align:middle}" +
    ".sfchip-svg{display:block;filter:drop-shadow(0 10px 14px rgba(3,14,10,.35))}" +
    ".sfchip-svg .rimg{transform-origin:104px 104px}" +
    ".sfchip-svg.spin .rimg{animation:sfchipspin 16s linear infinite}" +
    "@keyframes sfchipspin{to{transform:rotate(360deg)}}" +
    "@media (prefers-reduced-motion:reduce){.sfchip-svg.spin .rimg{animation:none}}" +
    ".sfchip small{font:700 .8rem/1.2 Figtree,system-ui,sans-serif;color:var(--muted,#93A59B);text-align:center}" +
    ".sfchip.waived .sfchip-svg{opacity:.55;filter:grayscale(.4) drop-shadow(0 6px 10px rgba(3,14,10,.25))}" +
    ".sfchip.waived small{text-decoration:line-through}" +
    ".sfchip-art{display:block;border-radius:50%;filter:drop-shadow(0 10px 14px rgba(3,14,10,.35))}" +
    ".sfchip-art img{display:block;width:100%;height:100%}" +
    ".sfchip-art.spin img{animation:sfchipspin 24s linear infinite}" +
    "@media (prefers-reduced-motion:reduce){.sfchip-art.spin img{animation:none}}" +
    ".sfchip.waived .sfchip-art{opacity:.55;filter:grayscale(.4) drop-shadow(0 6px 10px rgba(3,14,10,.25))}";

  /* "Put into play": a stack of chips lying on the felt; the top chip lifts off, slides out and settles with a spin.
     Use: <div class="chipplay" data-chipplay="21" data-stack="6"></div>. Plays when it scrolls into view and again on tap.
     Respects reduced motion (shows the finished state). */
  function stackHTML(f, n) {
    var h = "";
    for (var i = 0; i < n; i++) h += chipLayers(f, i * 9, "cp-st");
    return h;
  }
  function chipLayers(f, z, cls) {
    var h = '<div class="cp-chip ' + cls + '" style="--z:' + z + 'px">';
    for (var e = 0; e < 7; e++) h += '<img class="cp-edge" src="/assets/art/chips/' + f + '.webp" alt="" style="--e:' + e + 'px">';
    return h + '<img class="cp-top" src="/assets/art/chips/' + f + '.webp" alt=""></div>';
  }
  function play(el) {
    if (el.__cp) return el.__cp(); var v = el.getAttribute("data-chipplay") || "21", k = v === "house" ? "house" : key(v), f = ART[k] || ART["21"];
    var n = Math.max(2, Math.min(9, +(el.getAttribute("data-stack") || 6)));
    el.innerHTML = '<div class="cp-stage" aria-hidden="true"><div class="cp-table">' + stackHTML(f, n - 1) + chipLayers(f, (n - 1) * 9, "cp-mover") + "</div></div>";
    el.setAttribute("role", "img"); el.setAttribute("aria-label", (k === "house" ? "A house chip" : "A " + D[k].label + " chip") + " put into play");
    var mv = el.querySelector(".cp-mover"), top = (n - 1) * 9, reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var end = "translate3d(132px,22px,0px) rotateZ(380deg)";
    function run() {
      if (reduce || !mv.animate) { mv.style.transform = end; return; }
      mv.getAnimations().forEach(function (a) { a.cancel(); });
      mv.animate([
        { transform: "translate3d(0,0," + top + "px) rotateZ(0deg)", offset: 0 },
        { transform: "translate3d(0,0," + (top + 46) + "px) rotateZ(10deg)", offset: .22, easing: "cubic-bezier(.3,.6,.4,1)" },
        { transform: "translate3d(118px,18px,30px) rotateZ(220deg)", offset: .58, easing: "cubic-bezier(.5,0,.8,.6)" },
        { transform: "translate3d(132px,22px,0px) rotateZ(340deg)", offset: .74, easing: "cubic-bezier(.2,.7,.3,1)" },
        { transform: "translate3d(132px,22px,4px) rotateZ(366deg)", offset: .84 },
        { transform: end, offset: 1 }
      ], { duration: 1900, fill: "forwards" });
    }
    el.__cp = run;
    el.addEventListener("click", run);
    if ("IntersectionObserver" in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { run(); io.disconnect(); } }); }, { threshold: .5 }); io.observe(el); } else run();
  }
  css += ".chipplay{position:relative;width:min(100%,360px);aspect-ratio:16/10;cursor:pointer;-webkit-tap-highlight-color:transparent}" +
    ".cp-stage{position:absolute;inset:0;perspective:900px;perspective-origin:50% 0%}" +
    ".cp-table{position:absolute;left:18%;top:30%;width:34%;aspect-ratio:1;transform-style:preserve-3d;transform:rotateX(58deg) rotateZ(-8deg)}" +
    ".cp-chip{position:absolute;inset:0;transform-style:preserve-3d;transform:translate3d(0,0,var(--z))}" +
    ".cp-chip img{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;backface-visibility:hidden}" +
    ".cp-edge{transform:translateZ(calc(var(--e) * -1.2));filter:brightness(.74) sepia(.3) saturate(1.25)}" +
    ".cp-top{transform:translateZ(.5px)}" +
    ".cp-st:first-child::after,.cp-mover::after{content:'';position:absolute;inset:-6%;border-radius:50%;transform:translateZ(-9px);background:radial-gradient(closest-side,rgba(3,14,10,.45),rgba(3,14,10,0))}" +
    ".cp-st:not(:first-child)::after{display:none}";
  function wire(root) { (root || document).querySelectorAll(".chipplay[data-chipplay]:not([data-cp])").forEach(function (el) { el.setAttribute("data-cp", "1"); play(el); }); }
  function paint(root) {
    (root || document).querySelectorAll(".sfchip[data-chip]:not([data-done])").forEach(function (el) {
      el.setAttribute("data-done", "1");
      var lab = el.getAttribute("data-label");
      el.innerHTML = svg(el.getAttribute("data-chip"), { size: +(el.getAttribute("data-size") || 96), spin: el.hasAttribute("data-spin"), rim: el.getAttribute("data-rim") || undefined }) + (lab ? "<small>" + lab.replace(/</g, "&lt;") + "</small>" : "");
    });
  }
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  window.SFChips = { svg: svg, art: art, paint: paint, play: play, wire: wire, denominations: D };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { paint(); wire(); }); else { paint(); wire(); }
})();
