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
  var KIND_FELT = { friendship: "emerald", faith: "wine", prayer: "plum", service: "olive", games: "plum", greek: "wine", alumni: "charcoal", club: "emerald", sports: "emerald", hobby: "desert", parents: "rose", other: "emerald", flirty18: "wine", lifestyle: "plum" };
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
  /* Center icons for the felt (original line art, 24-unit glyphs). "auto" picks one from the table's kind and themes. */
  var ICONS = {
    spade: ['f', 'M12 3C9 7 4 9.5 4 13.5a4 4 0 0 0 7 2.6L10 21h4l-1-4.9a4 4 0 0 0 7-2.6C20 9.5 15 7 12 3z'],
    heart: ['f', 'M12 20.5C6 16.4 3 13.2 3 9.6 3 7 5 5 7.5 5c1.8 0 3.4 1 4.5 2.6C13.1 6 14.7 5 16.5 5 19 5 21 7 21 9.6c0 3.6-3 6.8-9 10.9z'],
    star: ['f', 'M12 2.8l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z'],
    cross: ['f', 'M10.6 2.5h2.8v5.6H19v2.8h-5.6V21.5h-2.8V10.9H5V8.1h5.6z'],
    dove: ['f', 'M2.5 12.5c3.2.2 5.6-1 7.4-3.6C11.3 7 13 5.6 15.3 5.6c1.6 0 2.7.9 3.2 2l3 .6-2.6 1.4c-.1 4.3-3.3 7.6-8.3 7.6H7.3l-3.2 3 .9-3.8c-1.3-.8-2.3-2-2.5-3.9z'],
    rings: ['s', 'M9 15.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM15 18.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10z'],
    dice: ['d', 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
    cap: ['f', 'M12 3.5 1 8.8l11 5.3 8.6-4.2v5.6h1.9V8.8zM5.6 12.4v3.8c0 1.6 2.9 3.3 6.4 3.3s6.4-1.7 6.4-3.3v-3.8L12 15.5z'],
    laurel: ['f', 'M4 20h16v1.6H4zM5.5 17.6h13v1.6h-13zM6.5 7.5h2.2v9.3H6.5zM10.9 7.5h2.2v9.3h-2.2zM15.3 7.5h2.2v9.3h-2.2zM3.5 6 12 2.5 20.5 6z'],
    ball: ['s', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 9.5c5 1.5 12 1.5 17 0M3.5 14.5c5-1.5 12-1.5 17 0M12 3c-3 4-3 14 0 18'],
    palette: ['f', 'M12 3a9 9 0 0 0 0 18c1.6 0 2-1.2 1.2-2.2-.9-1 .1-2.3 1.4-2.3H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5zM8 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.3.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'],
    home: ['f', 'M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3z'],
    glasses: ['s', 'M6 3h5l-.7 6.5A2.3 2.3 0 0 1 8.5 11.6 2.3 2.3 0 0 1 6.7 9.5zM13 3h5l-.7 6.5a2.3 2.3 0 0 1-1.8 2.1 2.3 2.3 0 0 1-1.8-2.1zM8.5 11.6V20M15.5 11.6V20M6 20.5h5M13 20.5h5'],
    pineapple: ['f', 'M12 9.5c3.3 0 5.5 2.6 5.5 6S15.3 22 12 22s-5.5-3-5.5-6.5 2.2-6 5.5-6zM12 9c-1-2-3-3-5-3 1.5 1 2.5 2 3 3.2C9.3 7 8.4 5 9 2.5c1 1.4 2 3 2.6 5 .4-2.1 1.4-3.8 2.9-5 .4 2.5-.4 4.5-1.2 6.4.8-1.1 2.3-2.2 3.7-2.9-.7 1.7-2.1 2.6-3.5 3zM9 13l6 6M15 13l-6 6M7.5 16l3.5 3.5M16.5 16 13 19.5'],
    music: ['f', 'M9 17.2V6.2l11-2.3v11.3a2.9 2.9 0 1 1-1.8-2.7V7.6L10.8 9.1v8.1a2.9 2.9 0 1 1-1.8-2.7z'],
    paw: ['f', 'M12 12.5c2.7 0 5.5 3.3 5.5 5.6 0 1.6-1.3 2.4-2.8 2.4-1.2 0-1.8-.6-2.7-.6s-1.5.6-2.7.6c-1.5 0-2.8-.8-2.8-2.4 0-2.3 2.8-5.6 5.5-5.6zM6 12.2a2 2.5 0 1 0 0-5 2 2.5 0 0 0 0 5zM18 12.2a2 2.5 0 1 0 0-5 2 2.5 0 0 0 0 5zM9.5 8.5a2 2.5 0 1 0 0-5 2 2.5 0 0 0 0 5zM14.5 8.5a2 2.5 0 1 0 0-5 2 2.5 0 0 0 0 5z'],
    hands: ['f', 'M12 13.8C9 11.6 7.5 10 7.5 8.2 7.5 6.9 8.5 6 9.7 6c.9 0 1.7.5 2.3 1.3.6-.8 1.4-1.3 2.3-1.3 1.2 0 2.2.9 2.2 2.2 0 1.8-1.5 3.4-4.5 5.6zM2.5 14.5l4.2-.5 4.3 2.2h3.6a1.4 1.4 0 0 1 0 2.8H11l3.6.4 5-2.9a1.5 1.5 0 0 1 1.8 2.3L16 22H8.5l-6-2.2z']
  };
  var ICON_NAMES = [["auto", "Match my table"], ["none", "No icon"], ["spade", "Spade"], ["heart", "Heart"], ["star", "Star"], ["cross", "Cross"], ["dove", "Dove"], ["rings", "Linked rings"], ["dice", "Dice"], ["cap", "Graduation cap"], ["laurel", "Columns"], ["ball", "Ball"], ["palette", "Paint palette"], ["home", "Home"], ["glasses", "Champagne"], ["pineapple", "Pineapple"], ["music", "Music"], ["paw", "Paw"], ["hands", "Helping hands"]];
  var KIND_ICON = { friendship: "rings", faith: "dove", prayer: "dove", service: "hands", games: "dice", greek: "laurel", alumni: "cap", club: "star", sports: "ball", hobby: "palette", parents: "home", flirty18: "glasses", lifestyle: "pineapple", other: "spade" };
  function iconFor(c, st) {
    var k = st.icon || "auto"; if (k === "none") return null; if (ICONS[k]) return k;
    var th = st.themes || [];
    if (th.indexOf("christian") > -1 || th.indexOf("catholic") > -1) return "cross";
    if (th.indexOf("music") > -1 && !KIND_ICON[c.kind]) return "music";
    if (th.indexOf("animal") > -1 && !KIND_ICON[c.kind]) return "paw";
    return KIND_ICON[c.kind] || "spade";
  }
  function iconGlyph(k, x, y, s, col) {
    var ic = ICONS[k]; if (!ic) return "";
    var t = 'transform="translate(' + (x - 12 * s).toFixed(1) + " " + (y - 12 * s).toFixed(1) + ") scale(" + s + ')"';
    if (ic[0] === "s") return '<path ' + t + ' d="' + ic[1] + '" fill="none" stroke="' + col + '" stroke-width="' + (1.8).toFixed(1) + '" stroke-linecap="round" stroke-linejoin="round"/>';
    if (ic[0] === "d") return '<g ' + t + '><path d="' + ic[1] + '" fill="none" stroke="' + col + '" stroke-width="1.8"/>' + [[8, 8], [16, 8], [12, 12], [8, 16], [16, 16]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="1.4" fill="' + col + '"/>'; }).join("") + "</g>";
    return '<path ' + t + ' d="' + ic[1] + '" fill="' + col + '"/>';
  }
  function artUrl(p) {
    if (!p) return "";
    if (/^(blob:|data:|https?:|assets\/|\.\/|\/)/.test(p)) return p;
    var cfg = window.SUITEFACE_CONFIG || {}; if (!cfg.supabaseUrl) return "";
    return cfg.supabaseUrl + "/storage/v1/object/public/table-art/" + String(p).split("/").map(encodeURIComponent).join("/");
  }
  /* The felt's own shape, scaled around its center (k = 1 is the whole felt). */
  function shapePath(shape, g, kx, ky, dy) {
    var rx = g.rx * kx, ry = g.ry * ky, cy = g.cy + (dy || 0);
    return shape === "long" ? '<rect x="' + (g.cx - rx).toFixed(1) + '" y="' + (cy - ry).toFixed(1) + '" width="' + (rx * 2).toFixed(1) + '" height="' + (ry * 2).toFixed(1) + '" rx="' + ry.toFixed(1) + '"'
      : '<ellipse cx="' + g.cx + '" cy="' + cy.toFixed(1) + '" rx="' + rx.toFixed(1) + '" ry="' + ry.toFixed(1) + '"';
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
    /* Host image: the whole felt or just the center, cropped to the table's shape. Fill, Fit, or Focus and zoom. */
    var st = L.st, imgUrl = artUrl(st.img_preview || st.img), img = "", area = st.img_area === "center" ? "center" : "full", fit = st.img_fit || "fill";
    var icon = imgUrl && area === "center" ? null : iconFor(c, st), hasTag = !!tag;
    var iconY = g.cy - (hasTag ? 42 : 26), tagY = icon ? g.cy - 2 : g.cy - 6, ir = hasTag ? 27 : 33;
    if (imgUrl) {
      var kx = area === "center" ? (L.shape === "round" ? .58 : L.shape === "long" ? .4 : .44) : 1, ky = area === "center" ? (L.shape === "long" ? .56 : .5) : 1, dy = area === "center" ? -10 : 0;
      var bx = g.cx - g.rx * kx, by = g.cy + dy - g.ry * ky, bw = g.rx * kx * 2, bh = g.ry * ky * 2, z = fit === "focus" ? Math.max(1, Math.min(3, +st.img_zoom || 1)) : 1;
      var fx = (st.img_x == null ? 50 : +st.img_x) / 100, fy = (st.img_y == null ? 50 : +st.img_y) / 100;
      var iw = bw * z, ih = bh * z, ix = bx - (iw - bw) * fx, iy = by - (ih - bh) * fy;
      var par = fit === "fit" ? "xMidYMid meet" : fit === "focus" ? (fx < .34 ? "xMin" : fx > .66 ? "xMax" : "xMid") + (fy < .34 ? "YMin" : fy > .66 ? "YMax" : "YMid") + " slice" : "xMidYMid slice";
      img = '<clipPath id="' + id + 'ic">' + shapePath(L.shape, g, kx, ky, dy) + "/></clipPath>" +
        '<g clip-path="url(#' + id + (area === "full" ? "clip" : "ic") + ')"><image href="' + esc(imgUrl) + '" x="' + ix.toFixed(1) + '" y="' + iy.toFixed(1) + '" width="' + iw.toFixed(1) + '" height="' + ih.toFixed(1) + '" preserveAspectRatio="' + par + '"/>' +
        (area === "full" ? '<rect width="800" height="470" fill="url(#' + id + 'vig)"/>' : "") + "</g>" +
        (area === "center" ? shapePath(L.shape, g, kx, ky, dy) + ' fill="none" stroke="#E8C46A" stroke-width="2" stroke-opacity=".8"/>' : "");
    }
    var medal = icon ? '<g class="sft-icon"><circle cx="' + g.cx + '" cy="' + iconY + '" r="' + ir + '" fill="' + shade(L.felt, -.38) + '" stroke="url(#' + id + 'rail)" stroke-width="3.5"/><circle cx="' + g.cx + '" cy="' + iconY + '" r="' + (ir - 5) + '" fill="none" stroke="#E8C46A" stroke-opacity=".55" stroke-width="1.2"/>' + iconGlyph(icon, g.cx, iconY, ir / 17, "#E8C46A") + "</g>" : "";
    /* Card spots keep a solid felt pad, so cards always read clearly over any image. */
    var fanY = g.cy + (L.shape === "long" ? 66 : 78) - 30;
    var pad = imgUrl ? '<ellipse cx="' + g.cx + '" cy="' + (fanY + 2) + '" rx="' + (L.shape === "long" ? 74 : 80) + '" ry="' + (L.shape === "long" ? 40 : 46) + '" fill="url(#' + id + 'felt)" stroke="#E8C46A" stroke-opacity=".6" stroke-width="1.4"/>' : "";
    var halo = imgUrl ? ' stroke="#141217" stroke-opacity=".7" stroke-width="5" paint-order="stroke" stroke-linejoin="round"' : "";
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
      '<radialGradient id="' + id + 'vig" cx="50%" cy="50%" r="60%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient>' +
      '<path id="' + id + 'arc" d="' + arc + '"/>' +
      "</defs>" +
      '<rect width="800" height="470" fill="url(#' + id + 'room)"/>' +
      '<ellipse cx="' + g.cx + '" cy="' + (g.cy + 30) + '" rx="' + (g.crx + 10) + '" ry="' + (g.cry * .9) + '" fill="#0E0C11" opacity=".55" filter="url(#' + id + 'sh)"/>' +
      '<g class="sft-chairs">' + chairs + "</g>" +
      railPath + ' fill="url(#' + id + 'rail)"/>' +
      railPath + ' fill="none" stroke="rgba(255,240,200,.3)" stroke-width="1" stroke-dasharray="2 5"/>' +
      feltPath + ' fill="url(#' + id + 'felt)"/>' +
      '<g clip-path="url(#' + id + 'clip)"><rect width="800" height="470" filter="url(#' + id + 'nz)" opacity=".9"/>' + "</g>" + img +
      '<g clip-path="url(#' + id + 'clip)">' + lights + "</g>" +
      inlay + ' fill="none" stroke="#E8C46A" stroke-opacity=".55" stroke-width="1.4"/>' +
      '<text class="sft-name" font-family="\'Big Shoulders Display\',Impact,\'Arial Narrow\',sans-serif" font-weight="900" font-size="' + fs + '" letter-spacing="3" fill="#E8C46A" fill-opacity=".95" text-anchor="middle"' + halo + '><textPath href="#' + id + 'arc" startOffset="50%">' + esc(name) + "</textPath></text>" +
      medal +
      (tag ? '<text x="' + g.cx + '" y="' + tagY + '" text-anchor="middle" font-family="Georgia,\'Times New Roman\',serif" font-style="italic" font-size="17" fill="#FAF7F0" fill-opacity=".9"' + halo + '>' + esc(tag) + "</text>" : "") +
      pad + fan +
      (themes ? '<text x="' + g.cx + '" y="' + (g.cy + g.ry - 26) + '" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" font-size="12" letter-spacing="3" fill="#FFE7A3" fill-opacity=".85"' + halo + '>' + esc(themes.toUpperCase()) + "</text>" : "") +
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
  /* The Host's card: public to everyone who visits a Private Table, so players know who runs it.
     First name, age, suit, city, bio, interests, badges and stickers only. Never a last name, address or contact. */
  var HSUIT = { heart: ["♥", "Heart", 1], diamond: ["♦", "Diamond", 1], club: ["♣", "Club", 0], spade: ["♠", "Spade", 0] };
  var HSTK = { dice: "🎲", chip: "🪙", spade: "♠️" };
  function hesc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hostStyle() {
    if (document.getElementById("sf-hostcard-css")) return;
    var s = document.createElement("style"); s.id = "sf-hostcard-css";
    s.textContent = ".hcard{display:grid;grid-template-columns:118px 1fr;gap:16px;align-items:start;padding:16px;border-radius:18px;background:linear-gradient(160deg,#FFFDF8,#F4EEE2);color:#2B2730;box-shadow:0 14px 32px -16px rgba(10,14,12,.6),inset 0 0 0 1px rgba(184,134,47,.35);position:relative;text-align:left;margin:14px 0}" +
      ".hcard .hc-ph{width:118px;aspect-ratio:5/7;border-radius:12px;background:#33473a center/cover;position:relative;overflow:hidden;box-shadow:inset 0 0 0 3px #fff,0 0 0 1px rgba(184,134,47,.5)}" +
      ".hcard .hc-ill{position:absolute;inset:0;display:grid;place-items:center;align-content:center;gap:2px;color:#FFF7E2;background:radial-gradient(circle at 50% 30%,var(--hc1,#2F8A62),var(--hc2,#163F2E))}" +
      ".hcard .hc-ill b{font:900 2.4rem/1 'Big Shoulders Display',Impact,sans-serif;letter-spacing:.02em}.hcard .hc-ill i{font-style:normal;font-size:1.7rem}" +
      ".hcard .hc-pip{position:absolute;top:6px;left:8px;font:800 1rem/1 'Big Shoulders Display',Impact,sans-serif;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.6)}" +
      ".hcard .hc-ey{font:800 .72rem/1 'Figtree',system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#9C6B1F;margin:0 0 4px}" +
      ".hcard h3{margin:0;font:900 1.45rem/1.05 'Big Shoulders Display',Impact,sans-serif;text-transform:uppercase;color:#2B2730}" +
      ".hcard .hc-sub{margin:4px 0 0;font-size:.88rem;color:#5A5360}.hcard .hc-sub .r{color:#B3263A}" +
      ".hcard .hc-bio{margin:8px 0 0;font-size:.95rem;line-height:1.4}" +
      ".hcard .hc-chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.hcard .hc-chips span{font-size:.76rem;padding:3px 8px;border-radius:999px;background:rgba(30,99,71,.1);color:#1E6347}" +
      ".hcard .hc-badges{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:8px;font-size:.8rem}.hcard .hc-badges .v{padding:2px 8px;border-radius:999px;background:#2B2730;color:#E8C46A;font-weight:700}" +
      ".hcard .hc-badges .st{font-size:1.15rem}.hcard .hc-badges .stamp{font-weight:800;color:#9B1B30;border:1.5px solid currentColor;border-radius:4px;padding:1px 5px;font-size:.7rem;transform:rotate(-3deg)}" +
      ".hcard .hc-foot{margin:8px 0 0;font-size:.78rem;color:#6B6470}.hcard .hc-ex{position:absolute;top:10px;right:10px;font:700 .68rem 'Figtree',sans-serif;padding:3px 8px;border-radius:999px;background:#2B2730;color:#E8C46A}" +
      "@media (max-width:480px){.hcard{grid-template-columns:92px 1fr;gap:12px;padding:12px}.hcard .hc-ph{width:92px}.hcard h3{font-size:1.25rem}}";
    document.head.appendChild(s);
  }
  function hostCard(h, o) {
    o = o || {}; if (!h) return ""; hostStyle();
    var su = HSUIT[h.suit] || null, ex = !!o.example;
    var ill = '<span class="hc-ill" style="--hc1:' + hesc(h.c1 || "#2F8A62") + ";--hc2:" + hesc(h.c2 || "#163F2E") + '"><i>' + hesc(h.emoji || (su ? su[0] : "♠")) + "</i><b>" + hesc((h.name || "?").charAt(0)) + "</b></span>";
    var ph = '<div class="hc-ph"' + (h.photo ? ' style="background-image:url(' + hesc(h.photo) + ')"' : "") + ">" + (h.photo ? "" : ill) + (su ? '<span class="hc-pip">A' + su[0] + "</span>" : "") + "</div>";
    var badges = [];
    if (h.photo_verified) badges.push('<span class="v">📷 Photo ✓</span>'); if (h.id_verified) badges.push('<span class="v">🪪 ID ✓</span>');
    if (h.founder_no) badges.push('<span class="stamp">★ First 1,000</span>');
    (h.bumpers || []).forEach(function (k) { if (k === "pineapple") return; if (window.SFBumpers) badges.push(window.SFBumpers.html(k, {})); });
    (h.stickers || []).forEach(function (k) { if (HSTK[k]) badges.push('<span class="st">' + HSTK[k] + "</span>"); else if (k === "first1000") badges.push('<span class="stamp">Founding Player</span>'); else if (/^ref\d+$/.test(k)) badges.push('<span class="stamp">Invite №' + k.slice(3) + "</span>"); });
    (h.extras || []).forEach(function (x) { badges.push('<span class="st">' + hesc(x) + "</span>"); });
    return '<div class="hcard" role="group" aria-label="Host card">' + ph + "<div>" + (ex ? '<span class="hc-ex">Example · fictional</span>' : "") +
      '<p class="hc-ey">' + (o.label || "Your Host") + "</p><h3>" + hesc(h.name || "Host") + (h.age ? ", " + hesc(h.age) : "") + "</h3>" +
      '<p class="hc-sub">' + (h.handle ? "@" + hesc(h.handle) : "") + (su ? (h.handle ? " · " : "") + '<span class="' + (su[2] ? "r" : "") + '">' + su[0] + " " + su[1] + "</span>" : "") + (h.city ? " · " + hesc(h.city) : "") + "</p>" +
      (h.bio ? '<p class="hc-bio">' + hesc(h.bio) + "</p>" : "") +
      ((h.interests || []).length ? '<div class="hc-chips">' + h.interests.slice(0, 5).map(function (x) { return "<span>" + hesc(x) + "</span>"; }).join("") + "</div>" : "") +
      (badges.length ? '<div class="hc-badges">' + badges.join("") + "</div>" : "") +
      '<p class="hc-foot">' + (h.since ? "Playing since " + hesc(h.since) : "") + (h.hosting > 1 ? " · Hosts " + hesc(h.hosting) + " Private Tables" : "") + (ex ? (h.since ? " · " : "") + "A sample host so you can see how it works" : "") + "</p></div></div>";
  }
  window.SFCasino = { ICON_NAMES: ICON_NAMES, artUrl: artUrl, FELTS: FELTS, RAILS: RAILS, SHAPES: SHAPES, THEMES: THEMES, AMENITIES: AMENITIES, KIND_FELT: KIND_FELT,
    render: function (el, c, o) { style(); render(el, c, o); }, svg: function (c, o) { style(); return tableSVG(c, o); }, entry: entry, hostCard: hostCard };
})();
