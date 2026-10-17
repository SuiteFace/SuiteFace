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
  function svg(v, o) {
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
    ".sfchip.waived small{text-decoration:line-through}";
  function paint(root) {
    (root || document).querySelectorAll(".sfchip[data-chip]:not([data-done])").forEach(function (el) {
      el.setAttribute("data-done", "1");
      var lab = el.getAttribute("data-label");
      el.innerHTML = svg(el.getAttribute("data-chip"), { size: +(el.getAttribute("data-size") || 96), spin: el.hasAttribute("data-spin"), rim: el.getAttribute("data-rim") || undefined }) + (lab ? "<small>" + lab.replace(/</g, "&lt;") + "</small>" : "");
    });
  }
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  window.SFChips = { svg: svg, paint: paint, denominations: D };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { paint(); }); else paint();
})();
