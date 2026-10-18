/* SuiteFace Private Table renderer (window.SFCasino; the database still calls these "casinos").
   Every Private Table is drawn as a real card table seen from above: the Host's felt, rail and shape,
   the table's name printed on the felt, and one chair for every seat (filled seats glow gold).
   SFCasino.render(el, table, {floor:true}) draws the games list instead of the table.
   SFCasino.entry(table, done) plays the arrival: the lights come up and a card is dealt to every seat.
   All artwork is original: no real casino's names, logos or buildings. */
(function () {
  var FELTS = {
    emerald: ["Emerald felt", "#1E6347"], wine: ["Wine felt", "#6B1A2A"], plum: ["Plum felt", "#4A2A55"],
    charcoal: ["Charcoal felt", "#34303A"], rose: ["Rose felt", "#8A3A4A"], desert: ["Desert felt", "#8A5A2A"],
    olive: ["Olive felt", "#4A5A2A"], custom: ["My own color", ""]
  };
  var RAILS = { gold: ["Gold leather", "#C8961E", "#7A5A12"], walnut: ["Walnut wood", "#6A4428", "#3A2416"], silver: ["Silver leather", "#A8A094", "#5A554E"], rose_gold: ["Rose gold", "#C98A78", "#7A4A3E"], ebony: ["Ebony leather", "#3A3036", "#1E191C"] };
  var SHAPES = [["oval", "Oval"], ["round", "Round"], ["long", "Long banquet"]];
  var THEMES = [
    ["christian", "Christian"], ["catholic", "Catholic"], ["faith", "Faith (any)"], ["muslim", "Muslim"], ["jewish", "Jewish"], ["hindu", "Hindu"], ["buddhist", "Buddhist"],
    ["lgbtq", "LGBTQ+"], ["sports", "Sports"], ["greek", "Greek life"], ["school", "School"], ["alumni", "Alumni"], ["city", "City pride"],
    ["animal", "Animals"], ["music", "Music"], ["art", "Art"], ["service", "Service"], ["games", "Games"], ["parents", "Parents"],
    ["military", "Military & veterans"], ["outdoors", "Outdoors"], ["food", "Food"]
  ];
  var AMENITIES = [["live_music", "Live music"], ["coffee", "Coffee"], ["food", "Food"], ["family", "Family friendly"], ["alcohol_free", "Alcohol-free"],
    ["accessible", "Wheelchair accessible"], ["outdoor_seating", "Outdoors"], ["pets", "Pets welcome"], ["prayer_space", "Prayer time"], ["parking", "Free parking"], ["late_night", "Late night"], ["free", "Free to attend"]];
  var KIND_FELT = { friendship: "emerald", faith: "wine", prayer: "plum", service: "olive", games: "plum", greek: "wine", alumni: "charcoal", club: "emerald", sports: "emerald", hobby: "desert", parents: "rose", other: "emerald", flirty18: "wine" };
  var OLD_PAL = { gold_wine: "wine", emerald: "emerald", rose_gold: "rose", neon: "plum", silver: "charcoal", desert: "desert", tropical: "olive", custom: "custom" };
  var IDX = function (l) { var o = {}; l.forEach(function (x) { o[x[0]] = x; }); return o; };
  var T = IDX(THEMES), A = IDX(AMENITIES);

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shade(hex, k) { var n = parseInt(hex.slice(1), 16), r = n >> 16, g = n >> 8 & 255, b = n & 255; function f(v) { return Math.max(0, Math.min(255, Math.round(k > 0 ? v + (255 - v) * k : v * (1 + k)))); } return "#" + ((1 << 24) + (f(r) << 16) + (f(g) << 8) + f(b)).toString(16).slice(1); }
  function look(c) {
    var st = c.style || {};
    var felt = st.felt || OLD_PAL[st.palette] || KIND_FELT[c.kind] || "emerald";
    var fc = felt === "custom" && /^#[0-9a-f]{6}$/i.test(st.c1 || "") ? st.c1 : (FELTS[felt] || FELTS.emerald)[1] || "#1E6347";
    var rail = RAILS[st.rail] || RAILS.gold;
    return { felt: fc, rail: rail, shape: st.shape || "oval", st: st };
  }
  function geom(shape) {
    if (shape === "round") return { cx: 400, cy: 236, rx: 160, ry: 160, crx: 208, cry: 206 };
    if (shape === "long") return { cx: 400, cy: 236, rx: 318, ry: 112, crx: 362, cry: 158 };
    return { cx: 400, cy: 236, rx: 290, ry: 140, crx: 338, cry: 190 };
  }
  /* Chairs sit at equal distances around the table's edge, starting with the Host at the head. */
  function ring(g, shape) {
    var pts = [], N = 720, i, a;
    if (shape === "long") {
      var r = g.cry, half = g.crx - r;
      // stadium path, clockwise from top center
      for (i = 0; i <= 60; i++) pts.push([g.cx + half * i / 60, g.cy - r]);
      for (i = 1; i <= 120; i++) { a = -Math.PI / 2 + Math.PI * i / 120; pts.push([g.cx + half + r * Math.cos(a), g.cy + r * Math.sin(a)]); }
      for (i = 1; i <= 120; i++) pts.push([g.cx + half - 2 * half * i / 120, g.cy + r]);
      for (i = 1; i <= 120; i++) { a = Math.PI / 2 + Math.PI * i / 120; pts.push([g.cx - half + r * Math.cos(a), g.cy + r * Math.sin(a)]); }
      for (i = 1; i < 60; i++) pts.push([g.cx - half + half * i / 60, g.cy - r]);
    } else {
      for (i = 0; i < N; i++) { a = -Math.PI / 2 + 2 * Math.PI * i / N; pts.push([g.cx + g.crx * Math.cos(a), g.cy + g.cry * Math.sin(a)]); }
    }
    var cum = [0], L = 0;
    for (i = 1; i <= pts.length; i++) { var p0 = pts[i - 1], p1 = pts[i % pts.length]; L += Math.hypot(p1[0] - p0[0], p1[1] - p0[1]); cum.push(L); }
    return function (n, k) {
      var target = L * k / n, j = 0; while (j < pts.length - 1 && cum[j + 1] < target) j++;
      var p = pts[j], q = pts[(j + 1) % pts.length];
      var deg = Math.atan2(q[1] - p[1], q[0] - p[0]) * 180 / Math.PI; // tangent; chair faces the table
      return { x: p[0], y: p[1], deg: deg };
    };
  }
  var uid = 0;
  function tableSVG(c, opts) {
    opts = opts || {};
    var L = look(c), g = geom(L.shape), id = "sft" + (++uid);
    var seats = Math.max(2, Math.min(52, parseInt(c.seats, 10) || 12)), total = seats + 1; // + the Host's chair
    var seated = Math.min(seats, Math.max(0, parseInt(c.seated != null ? c.seated : (c.members || 1) - 1, 10) || 0));
    var cw = total > 36 ? 16 : total > 24 ? 22 : total > 16 ? 28 : 34, ch = cw * .78;
    var name = String(c.name || "Your Private Table").toUpperCase();
    var tag = L.st.tagline || "";
    var themes = (L.st.themes || []).filter(function (k) { return T[k]; }).map(function (k) { return T[k][1]; }).slice(0, 3).join("  ·  ");
    var arcR = (g.ry - 34);
    var chairs = "", at = ring(g, L.shape);
    for (var i = 0; i < total; i++) {
      var p = at(total, i), host = i === 0, full = !host && i <= seated;
      chairs += '<g class="sft-chair' + (host ? " host" : full ? " full" : "") + '" data-seat="' + i + '" transform="translate(' + p.x.toFixed(1) + " " + p.y.toFixed(1) + ") rotate(" + p.deg.toFixed(1) + ')">' +
        '<rect x="' + (-cw / 2) + '" y="' + (-ch / 2) + '" width="' + cw + '" height="' + ch + '" rx="' + (ch * .42).toFixed(1) + '" fill="url(#' + id + (host ? "hc" : full ? "fc" : "oc") + ')" stroke="' + (host || full ? "#E8C46A" : "rgba(232,196,106,.35)") + '" stroke-width="' + (host ? 2 : 1.2) + '"' + (!host && !full ? ' stroke-dasharray="3 3"' : "") + "/>" +
        (host ? (cw >= 28 ? '<text y="' + (ch * .17).toFixed(1) + '" text-anchor="middle" font-size="' + (cw * .3).toFixed(1) + '" fill="#231C10" font-weight="900" letter-spacing=".5" font-family="Figtree,Arial,sans-serif">HOST</text>' : '<text y="' + (ch * .3).toFixed(1) + '" text-anchor="middle" font-size="' + (cw * .7).toFixed(1) + '" fill="#231C10" font-family="Georgia,serif">♛</text>') : full ? '<circle r="' + (cw * .17).toFixed(1) + '" fill="#FFE7A3" opacity=".9"/>' : "") + "</g>";
    }
    var feltPath = L.shape === "long"
      ? '<rect x="' + (g.cx - g.rx) + '" y="' + (g.cy - g.ry) + '" width="' + g.rx * 2 + '" height="' + g.ry * 2 + '" rx="' + g.ry + '"'
      : '<ellipse cx="' + g.cx + '" cy="' + g.cy + '" rx="' + g.rx + '" ry="' + g.ry + '"';
    var railPath = L.shape === "long"
      ? '<rect x="' + (g.cx - g.rx - 22) + '" y="' + (g.cy - g.ry - 22) + '" width="' + (g.rx * 2 + 44) + '" height="' + (g.ry * 2 + 44) + '" rx="' + (g.ry + 22) + '"'
      : '<ellipse cx="' + g.cx + '" cy="' + g.cy + '" rx="' + (g.rx + 22) + '" ry="' + (g.ry + 22) + '"';
    var inlay = L.shape === "long"
      ? '<rect x="' + (g.cx - g.rx + 16) + '" y="' + (g.cy - g.ry + 16) + '" width="' + (g.rx * 2 - 32) + '" height="' + (g.ry * 2 - 32) + '" rx="' + (g.ry - 16) + '"'
      : '<ellipse cx="' + g.cx + '" cy="' + g.cy + '" rx="' + (g.rx - 16) + '" ry="' + (g.ry - 16) + '"';
    var arcRx = L.shape === "long" ? g.rx - 70 : g.rx - 42, arcRy = arcR;
    var arcLen = Math.PI * Math.sqrt((arcRx * arcRx + arcRy * arcRy) / 2);
    var fs = Math.max(14, Math.min(46, Math.floor(arcLen * .78 / (Math.max(6, name.length) * .66))));
    var arc = "M " + (g.cx - arcRx) + " " + (g.cy + 6) + " A " + arcRx + " " + arcRy + " 0 0 1 " + (g.cx + arcRx) + " " + (g.cy + 6);
    var pip = function (x, y, s, suit, col) { return '<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="middle" fill="' + col + '" font-family="Georgia,serif">' + suit + "</text>"; };
    var fan = [["♠", "#2B2730", -27], ["♥", "#C0283A", -9], ["♦", "#C0283A", 9], ["♣", "#2B2730", 27]].map(function (k, j) {
      return '<g transform="translate(' + g.cx + " " + (g.cy + (L.shape === "long" ? 66 : 78)) + ") rotate(" + k[2] + ') translate(0 -30)"><rect x="-15" y="-21" width="30" height="42" rx="4" fill="#FAF7F0" stroke="#E8C46A" stroke-width="1"/>' + pip(-8, -7, 12, k[0], k[1]) + pip(0, 10, 17, k[0], k[1]) + "</g>";
    }).join("");
    var lights = opts.dark ? "" : '<ellipse class="sft-sweep" cx="' + (g.cx - g.rx) + '" cy="' + g.cy + '" rx="70" ry="' + (g.ry + 30) + '" fill="url(#' + id + 'sw)"/>';
    return '<svg class="sft" viewBox="0 0 800 470" role="img" aria-label="' + esc(c.name || "Private Table") + ": " + seats + " seats, " + seated + ' taken" preserveAspectRatio="xMidYMid meet">' +
      "<defs>" +
      '<radialGradient id="' + id + 'room" cx="50%" cy="46%" r="65%"><stop offset="0" stop-color="#3A3040"/><stop offset=".55" stop-color="#211C26"/><stop offset="1" stop-color="#141217"/></radialGradient>' +
      '<radialGradient id="' + id + 'felt" cx="50%" cy="42%" r="62%"><stop offset="0" stop-color="' + shade(L.felt, .22) + '"/><stop offset=".7" stop-color="' + L.felt + '"/><stop offset="1" stop-color="' + shade(L.felt, -.45) + '"/></radialGradient>' +
      '<linearGradient id="' + id + 'rail" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + shade(L.rail[1], .18) + '"/><stop offset=".45" stop-color="' + L.rail[1] + '"/><stop offset="1" stop-color="' + L.rail[2] + '"/></linearGradient>' +
      '<linearGradient id="' + id + 'hc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE7A3"/><stop offset="1" stop-color="#B8862F"/></linearGradient>' +
      '<linearGradient id="' + id + 'fc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7A2A3A"/><stop offset="1" stop-color="#4A1622"/></linearGradient>' +
      '<linearGradient id="' + id + 'oc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3440"/><stop offset="1" stop-color="#26222B"/></linearGradient>' +
      '<linearGradient id="' + id + 'sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF6DA" stop-opacity="0"/><stop offset=".5" stop-color="#FFF6DA" stop-opacity=".16"/><stop offset="1" stop-color="#FFF6DA" stop-opacity="0"/></linearGradient>' +
      '<filter id="' + id + 'nz" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .22 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>' +
      '<filter id="' + id + 'sh" x="-20%" y="-20%" width="140%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>' +
      '<clipPath id="' + id + 'clip">' + feltPath + "/></clipPath>" +
      '<path id="' + id + 'arc" d="' + arc + '"/>' +
      "</defs>" +
      '<rect width="800" height="470" fill="url(#' + id + 'room)"/>' +
      '<ellipse cx="' + g.cx + '" cy="' + (g.cy + 30) + '" rx="' + (g.crx + 10) + '" ry="' + (g.cry * .9) + '" fill="#0E0C11" opacity=".55" filter="url(#' + id + 'sh)"/>' +
      '<g class="sft-chairs">' + chairs + "</g>" +
      railPath + ' fill="url(#' + id + 'rail)"/>' +
      railPath + ' fill="none" stroke="rgba(255,240,200,.3)" stroke-width="1" stroke-dasharray="2 5"/>' +
      feltPath + ' fill="url(#' + id + 'felt)"/>' +
      '<g clip-path="url(#' + id + 'clip)"><rect width="800" height="470" filter="url(#' + id + 'nz)" opacity=".9"/>' + lights + "</g>" +
      inlay + ' fill="none" stroke="#E8C46A" stroke-opacity=".55" stroke-width="1.4"/>' +
      '<text class="sft-name" font-family="\'Big Shoulders Display\',Impact,\'Arial Narrow\',sans-serif" font-weight="900" font-size="' + fs + '" letter-spacing="3" fill="#E8C46A" fill-opacity=".92" text-anchor="middle"><textPath href="#' + id + 'arc" startOffset="50%">' + esc(name) + "</textPath></text>" +
      (tag ? '<text x="' + g.cx + '" y="' + (g.cy - 6) + '" text-anchor="middle" font-family="Georgia,\'Times New Roman\',serif" font-style="italic" font-size="17" fill="#FAF7F0" fill-opacity=".8">' + esc(tag) + "</text>" : "") +
      fan +
      (themes ? '<text x="' + g.cx + '" y="' + (g.cy + g.ry - 26) + '" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" font-size="12" letter-spacing="3" fill="#FFE7A3" fill-opacity=".75">' + esc(themes.toUpperCase()) + "</text>" : "") +
      "</svg>";
  }
  var KIND = { friendship: "Friendship", faith: "Faith small group", prayer: "Prayer group", service: "Service & volunteering", games: "Board games", greek: "Greek life", alumni: "Alumni", club: "Club", sports: "Sports & fitness", hobby: "Hobbies", parents: "Parents", other: "Private Table" };
  function render(el, c, opts) {
    if (!el) return; opts = opts || {};
    var L = look(c), st = L.st;
    if (opts.floor) {
      el.innerHTML = '<div class="sft-games">' + (c.tables || []).map(function (t, i) {
        return '<div class="cs-table sft-game" style="--d:' + i * .08 + 's"><span class="sft-gsuit" aria-hidden="true">' + ["♠", "♥", "♦", "♣"][i % 4] + '</span><b>' + esc(t.name) + "</b>" + (t.meets ? "<span>" + esc(t.meets) + "</span>" : "") + (t.about ? "<p>" + esc(t.about) + "</p>" : "") + "</div>";
      }).join("") + "</div>" +
        (st.welcome ? '<blockquote class="sft-welcome">“' + esc(st.welcome) + '”<cite>The Host</cite></blockquote>' : "");
      return;
    }
    var seats = Math.max(2, Math.min(52, parseInt(c.seats, 10) || 12));
    var seated = Math.min(seats, Math.max(0, parseInt(c.seated != null ? c.seated : (c.members || 1) - 1, 10) || 0));
    var amen = (st.amenities || []).filter(function (k) { return A[k]; }).map(function (k) { return "<span>" + esc(A[k][1]) + "</span>"; }).join("");
    el.innerHTML = '<figure class="sft-wrap">' + tableSVG(c, opts) +
      '<figcaption class="sft-cap"><span class="sft-seats"><b>' + (seats - seated) + "</b> of " + seats + " seats open</span>" + (st.city ? "<span>" + esc(st.city) + "</span>" : "") + "<span>" + esc(KIND[c.kind] || "Private Table") + "</span>" + amen + "</figcaption></figure>";
  }
  var css = [
    ".sft-wrap{margin:0;border-radius:22px;overflow:hidden;background:#17151B;border:1px solid rgba(232,196,106,.28);box-shadow:0 30px 70px -40px #0E0C11}",
    ".sft{display:block;width:100%;height:auto}",
    ".sft-sweep{animation:sftSweep 7s ease-in-out infinite}",
    "@keyframes sftSweep{0%{transform:translateX(-120px)}60%,100%{transform:translateX(820px)}}",
    ".sft-chair.full rect{filter:drop-shadow(0 0 4px rgba(232,196,106,.55))}",
    ".sft-cap{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px 14px;background:linear-gradient(180deg,#1C1921,#17151B)}",
    ".sft-cap span{font:700 .78rem/1 Figtree,system-ui,sans-serif;color:#CFC6B6;border:1px solid rgba(250,247,240,.14);border-radius:999px;padding:.4rem .7rem}",
    ".sft-cap .sft-seats{color:#231C10;background:linear-gradient(180deg,#FFE7A3,#E8C46A);border-color:#B8862F}",
    ".sft-games{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}",
    ".sft-game{position:relative;display:grid;gap:4px;padding:16px 16px 14px;border-radius:16px;background:radial-gradient(120% 140% at 0 0,#24543F,#173B2C);border:1px solid rgba(232,196,106,.4);animation:sftIn .5s var(--d,0s) both}",
    ".sft-game b{color:#FAF7F0;font:900 1.25rem/1.1 'Big Shoulders Display',Impact,sans-serif;text-transform:uppercase;letter-spacing:.03em;padding-right:26px}",
    ".sft-game span{color:#FFE7A3;font-size:.86rem;font-weight:700}.sft-game p{margin:2px 0 0;color:#CFE8D8;font-size:.9rem}",
    ".sft-gsuit{position:absolute;right:14px;top:10px;font:1.3rem Georgia,serif;color:#FAF7F0;opacity:.8}",
    ".sft-welcome{margin:14px 0 0;padding:16px 18px;border-left:3px solid #E8C46A;background:rgba(232,196,106,.07);border-radius:0 14px 14px 0;color:#FAF7F0;font:italic 1.1rem/1.5 Georgia,serif}",
    ".sft-welcome cite{display:block;margin-top:6px;font:700 .78rem Figtree,sans-serif;font-style:normal;color:#A69DB0;letter-spacing:.12em;text-transform:uppercase}",
    "@keyframes sftIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}",
    ".sfe{position:fixed;inset:0;z-index:100;display:grid;place-items:center;background:#141217;transition:opacity .45s}",
    ".sfe.out{opacity:0;pointer-events:none}",
    ".sfe-stage{position:relative;width:min(980px,96vw)}",
    ".sfe-stage .sft{opacity:.15;filter:brightness(.35);transition:opacity 1s,filter 1.2s}",
    ".sfe.lit .sfe-stage .sft{opacity:1;filter:none}",
    ".sfe-card{position:absolute;left:50%;top:50%;width:2.4%;aspect-ratio:5/7;margin:-1.7% 0 0 -1.2%;border-radius:3px;background:linear-gradient(135deg,#9B1B30,#6B1A2A);border:1px solid #E8C46A;box-shadow:0 4px 10px rgba(14,12,17,.6);transition:transform .55s cubic-bezier(.2,.8,.2,1),opacity .3s;opacity:0}",
    ".sfe-title{position:absolute;left:0;right:0;bottom:-58px;text-align:center;color:#FAF7F0;font:900 clamp(1.4rem,4vw,2.4rem)/1 'Big Shoulders Display',Impact,sans-serif;text-transform:uppercase;letter-spacing:.06em;opacity:0;transform:translateY(8px);transition:opacity .6s,transform .6s}",
    ".sfe-title small{display:block;margin-top:6px;font:700 .8rem Figtree,sans-serif;letter-spacing:.3em;color:#E8C46A}",
    ".sfe.named .sfe-title{opacity:1;transform:none}",
    ".sfe-skip{position:fixed;right:16px;bottom:16px;all:unset;cursor:pointer;position:fixed;right:16px;bottom:16px;padding:.6rem 1rem;border-radius:999px;border:1px solid rgba(250,247,240,.3);color:#FAF7F0;font:700 .85rem Figtree,sans-serif}",
    ".sfe-skip:focus-visible{outline:3px solid #FFE7A3;outline-offset:3px}",
    "@media (prefers-reduced-motion:reduce){.sft-sweep,.sft-game{animation:none}}"
  ].join("\n");
  var styled = false;
  function style() { if (styled) return; var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); styled = true; }

  function entry(c, done) {
    style();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { done && done(); return; }
    var fe = document.createElement("div"); fe.className = "sfe"; fe.setAttribute("role", "dialog"); fe.setAttribute("aria-label", "Arriving at " + (c.name || "the Private Table"));
    fe.innerHTML = '<div class="sfe-stage">' + tableSVG(c, { dark: true }) + '<div class="sfe-title">' + esc(c.name || "") + "<small>TAKE YOUR SEAT</small></div></div>" + '<button type="button" class="sfe-skip">Skip ›</button>';
    document.body.appendChild(fe);
    var stage = fe.querySelector(".sfe-stage"), svg = fe.querySelector("svg"), timers = [], finished = false;
    var chairs = Array.prototype.slice.call(fe.querySelectorAll(".sft-chair"));
    function finish() { if (finished) return; finished = true; timers.forEach(clearTimeout); fe.classList.add("out"); setTimeout(function () { fe.remove(); }, 460); done && done(); }
    timers.push(setTimeout(function () { fe.classList.add("lit"); }, 120));
    var st = stage.getBoundingClientRect();
    var n = Math.min(chairs.length, 53), step = Math.max(28, Math.min(90, 1400 / n));
    chairs.forEach(function (ch, i) {
      var b = ch.getBoundingClientRect();
      var dx = b.left + b.width / 2 - (st.left + st.width / 2), dy = b.top + b.height / 2 - (st.top + st.height / 2);
      var card = document.createElement("i"); card.className = "sfe-card"; stage.appendChild(card);
      timers.push(setTimeout(function () { card.style.opacity = "1"; card.style.transform = "translate(" + dx * .82 + "px," + dy * .82 + "px) rotate(" + (i * 37 % 50 - 25) + "deg)"; }, 700 + i * step));
    });
    var t = 700 + n * step + 300;
    timers.push(setTimeout(function () { fe.classList.add("named"); }, t));
    timers.push(setTimeout(finish, t + 1300));
    fe.querySelector(".sfe-skip").onclick = finish;
    document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { document.removeEventListener("keydown", k); finish(); } });
  }
  window.SFCasino = { FELTS: FELTS, RAILS: RAILS, SHAPES: SHAPES, THEMES: THEMES, AMENITIES: AMENITIES, KIND_FELT: KIND_FELT,
    render: function (el, c, o) { style(); render(el, c, o); }, svg: function (c, o) { style(); return tableSVG(c, o); }, entry: entry };
})();
