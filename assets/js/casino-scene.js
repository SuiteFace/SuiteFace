/* SuiteFace Casino scene generator.
   Every Casino is drawn from its Host's choices (venue, sign, palette, climate, themes, amenities, words),
   so no two look alike. SFCasino.render(el, casino, {floor:true}) draws the exterior and, optionally, the floor.
   All shapes are generic and original: no real casino's buildings, logos or names. */
(function () {
  var VENUES = [
    ["vegas_old", "Old Strip", "Classic neon, low-rise, lights everywhere"], ["vegas_new", "New Strip", "Glass towers and fountains"],
    ["off_strip", "Off Strip", "A roadside neon locals' spot"], ["indoor", "Indoor salon", "Chandeliers and velvet"],
    ["outdoor", "Outdoor garden", "String lights under the sky"], ["highrise", "High-rise", "A sky-high tower"],
    ["cruise", "Cruise ship", "A floating casino at sea"], ["riverboat", "Riverboat", "Paddle-wheel, Southern style"],
    ["dubai", "Desert skyline", "A sail-shaped tower over the dunes"], ["desert_oasis", "Desert oasis", "Palms, tents and lanterns"],
    ["biloxi", "Gulf Coast", "Beachfront pier and lighthouse"], ["atlantic_city", "Boardwalk", "Ocean boardwalk hotel"],
    ["reno", "Little-city arch", "A glowing arch over Main Street"], ["monte_carlo", "Riviera palace", "A domed palace by the harbor"],
    ["macau", "Lotus tower", "A tower shaped like a blooming flower"], ["mountain_lodge", "Mountain lodge", "Timber, snowcaps and a fire pit"],
    ["beach_resort", "Beach resort", "Palms, cabanas and sunset"]
  ];
  var SIGNS = [["marquee", "Marquee with bulbs"], ["arrow", "Vintage arrow"], ["tower", "Tall pylon"], ["arch", "Arch over the door"], ["neon_script", "Neon script"]];
  var PALETTES = {
    gold_wine: ["Gold & wine", "#E8C46A", "#9B1B30"], emerald: ["Emerald & gold", "#1E7A4C", "#E8C46A"], rose_gold: ["Rose gold & plum", "#E8A08A", "#6E3A9E"],
    neon: ["Hot neon", "#C23B7A", "#E8C46A"], silver: ["Silver & smoke", "#CFC6B6", "#4A4552"], desert: ["Desert sun", "#D2622A", "#C8961E"],
    tropical: ["Tropical", "#2F8A62", "#D2622A"], custom: ["My own colors", "", ""]
  };
  var CLIMATES = [["city_night", "City night"], ["desert", "Desert"], ["tropical", "Tropical"], ["coastal", "Coastal"], ["mountain", "Mountain"], ["snow", "Snowy"]];
  var THEMES = [
    ["christian", "Christian", "✝️"], ["catholic", "Catholic", "⛪"], ["faith", "Faith (any)", "🙏"], ["muslim", "Muslim", "☪️"], ["jewish", "Jewish", "✡️"], ["hindu", "Hindu", "🕉️"], ["buddhist", "Buddhist", "☸️"],
    ["lgbtq", "LGBTQ+", "🏳️‍🌈"], ["sports", "Sports", "🏈"], ["greek", "Greek life", "ΣΦΔ"], ["school", "School", "🎓"], ["alumni", "Alumni", "📜"], ["city", "City pride", "🏙️"],
    ["animal", "Animal / mascot", "🐾"], ["music", "Music", "🎵"], ["art", "Art", "🎨"], ["service", "Service", "🤝"], ["games", "Games", "🎲"], ["parents", "Parents", "🧸"],
    ["military", "Military & veterans", "🎖️"], ["outdoors", "Outdoors", "🌲"], ["food", "Food", "🍽️"]
  ];
  var AMENITIES = [["live_music", "Live music", "🎤"], ["coffee", "Coffee bar", "☕"], ["food", "Food", "🍔"], ["family", "Family friendly", "👨‍👩‍👧"], ["alcohol_free", "Alcohol-free", "🚫🍸"],
    ["accessible", "Wheelchair accessible", "♿"], ["outdoor_seating", "Outdoor seating", "🌤️"], ["pets", "Pets welcome", "🐕"], ["prayer_space", "Prayer space", "🕯️"], ["parking", "Free parking", "🅿️"], ["late_night", "Late night", "🌙"], ["free", "Free to attend", "🎟️"]];
  var IDX = function (list) { var o = {}; list.forEach(function (x) { o[x[0]] = x; }); return o; };
  var V = IDX(VENUES), T = IDX(THEMES), A = IDX(AMENITIES);
  var KIND_DEFAULT = { friendship: "vegas_old", faith: "indoor", prayer: "outdoor", service: "outdoor", games: "off_strip", greek: "vegas_new", alumni: "highrise", club: "vegas_old", sports: "atlantic_city", hobby: "riverboat", parents: "beach_resort", other: "vegas_old" };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hash(s) { var h = 7; s = String(s || ""); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function rng(seed) { var x = seed >>> 0 || 1; return function () { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
  function colors(st) {
    var p = PALETTES[st.palette] || PALETTES.gold_wine;
    return [st.palette === "custom" && st.c1 ? st.c1 : (p[1] || "#E8C46A"), st.palette === "custom" && st.c2 ? st.c2 : (p[2] || "#9B1B30")];
  }
  var SKY = {
    city_night: ["#1d1428", "#3a1d3a", "#6b2a4a"], desert: ["#2a1630", "#8a3a2a", "#e0894a"], tropical: ["#231a33", "#7a2c5a", "#e8784a"],
    coastal: ["#16232a", "#2a4a4a", "#c87a5a"], mountain: ["#1a1a26", "#3a3a52", "#8a6a7a"], snow: ["#22222e", "#4a4a5e", "#b8a8b8"]
  };
  var VENUE_CLIMATE = { dubai: "desert", desert_oasis: "desert", beach_resort: "tropical", biloxi: "coastal", atlantic_city: "coastal", cruise: "coastal", monte_carlo: "coastal", mountain_lodge: "mountain", riverboat: "tropical" };

  /* Each venue: background buildings + the main building. Coordinates in an 800×360 view. */
  function bulbs(x1, y1, x2, y2, n, c) { var s = ""; for (var i = 0; i <= n; i++) { var x = x1 + (x2 - x1) * i / n, y = y1 + (y2 - y1) * i / n; s += '<circle class="cs-bulb" style="animation-delay:' + (i % 2 ? .6 : 0) + 's" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="2.6" fill="' + c + '"/>'; } return s; }
  function windows(x, y, w, h, cols, rows, c, r) { var s = ""; for (var i = 0; i < cols; i++) for (var j = 0; j < rows; j++) if (r() > .28) s += '<rect x="' + (x + 4 + i * (w - 8) / cols).toFixed(1) + '" y="' + (y + 6 + j * (h - 12) / rows).toFixed(1) + '" width="' + ((w - 8) / cols - 3).toFixed(1) + '" height="' + ((h - 12) / rows - 4).toFixed(1) + '" fill="' + c + '" opacity="' + (.35 + r() * .5).toFixed(2) + '"/>'; return s; }
  function skyline(r, c) { var s = "", x = 0; while (x < 800) { var w = 30 + r() * 60, h = 40 + r() * 110; s += '<rect x="' + x.toFixed(0) + '" y="' + (300 - h).toFixed(0) + '" width="' + w.toFixed(0) + '" height="' + h.toFixed(0) + '" fill="#2a2030"/>' + windows(x, 300 - h, w, h, 3, Math.max(2, h / 22 | 0), c, r); x += w + 4; } return s; }
  function water(y, c) { return '<rect x="0" y="' + y + '" width="800" height="' + (360 - y) + '" fill="#18302c"/><path class="cs-wave" d="M0 ' + (y + 8) + ' Q 50 ' + (y + 2) + ' 100 ' + (y + 8) + ' T 200 ' + (y + 8) + ' T 300 ' + (y + 8) + ' T 400 ' + (y + 8) + ' T 500 ' + (y + 8) + ' T 600 ' + (y + 8) + ' T 700 ' + (y + 8) + ' T 800 ' + (y + 8) + ' T 900 ' + (y + 8) + '" stroke="' + c + '" stroke-opacity=".5" fill="none" stroke-width="2"/>'; }
  function palm(x, y, k) { k = k || 1; return '<g transform="translate(' + x + ' ' + y + ') scale(' + k + ')"><path d="M0 0 Q 6 -40 2 -80" stroke="#3a2a1a" stroke-width="6" fill="none"/><g fill="#1E5A3C"><path d="M2 -80 Q -30 -86 -46 -66 Q -22 -78 2 -76Z"/><path d="M2 -80 Q 34 -88 50 -66 Q 26 -78 2 -76Z"/><path d="M2 -80 Q -16 -104 -36 -104 Q -12 -94 2 -78Z"/><path d="M2 -80 Q 22 -106 42 -100 Q 16 -92 2 -78Z"/></g></g>'; }
  function venueSVG(v, c1, c2, r) {
    var g = "";
    switch (v) {
      case "vegas_new": g = skyline(r, c1) + '<path d="M260 300 L260 90 Q 330 60 400 90 L400 300Z" fill="#33283c"/>' + windows(262, 92, 136, 206, 8, 12, c1, r) + '<path d="M420 300 L420 70 Q 490 40 560 70 L560 300Z" fill="#3a2d44"/>' + windows(422, 72, 136, 226, 8, 13, c2, r) + '<ellipse cx="410" cy="318" rx="210" ry="14" fill="#2a3a40"/>' + [0, 1, 2, 3, 4].map(function (i) { return '<path class="cs-fount" style="animation-delay:' + i * .3 + 's" d="M' + (300 + i * 50) + ' 318 Q ' + (300 + i * 50) + ' 250 ' + (310 + i * 50) + ' 318" stroke="#E8E0D0" stroke-opacity=".6" fill="none" stroke-width="2"/>'; }).join(""); break;
      case "off_strip": g = '<rect x="0" y="300" width="800" height="60" fill="#241a1e"/><rect x="240" y="200" width="320" height="100" fill="#3a2a2e"/>' + windows(240, 200, 320, 100, 8, 2, c1, r) + '<rect x="600" y="80" width="10" height="220" fill="#555"/>'; break;
      case "indoor": g = '<rect x="0" y="0" width="800" height="360" fill="#2a1a24"/>' + [120, 400, 680].map(function (x) { return '<g class="cs-chand"><line x1="' + x + '" y1="0" x2="' + x + '" y2="60" stroke="' + c1 + '"/><ellipse cx="' + x + '" cy="70" rx="46" ry="14" fill="' + c1 + '" opacity=".75"/>' + bulbs(x - 44, 80, x + 44, 80, 8, "#FFE7A3") + '</g>'; }).join("") + '<path d="M0 360 L0 120 Q 400 40 800 120 L800 360Z" fill="' + c2 + '" opacity=".25"/>'; break;
      case "outdoor": g = '<rect x="0" y="290" width="800" height="70" fill="#1a3326"/>' + [0, 1, 2].map(function (i) { return '<path d="M0 ' + (90 + i * 30) + ' Q 400 ' + (160 + i * 30) + ' 800 ' + (90 + i * 30) + '" stroke="#555" fill="none"/>' + bulbs(20, 95 + i * 30 + 6, 780, 95 + i * 30 + 6, 22, i % 2 ? c1 : "#FFE7A3"); }).join("") + '<circle cx="90" cy="230" r="60" fill="#1E4A34"/><circle cx="720" cy="220" r="70" fill="#1E4A34"/>'; break;
      case "highrise": g = skyline(r, c2) + '<path d="M340 300 L340 40 L400 10 L460 40 L460 300Z" fill="#33283c"/>' + windows(342, 44, 116, 254, 5, 16, c1, r) + '<line x1="400" y1="10" x2="400" y2="-20" stroke="' + c1 + '" stroke-width="3"/><circle class="cs-bulb" cx="400" cy="-20" r="5" fill="#E5505E"/>'; break;
      case "cruise": g = water(250, c1) + '<path d="M120 250 L170 300 L640 300 L700 250Z" fill="#E8E0D0"/><rect x="200" y="200" width="420" height="50" fill="#F2ECE0"/><rect x="250" y="160" width="300" height="40" fill="#F2ECE0"/><rect x="420" y="120" width="40" height="40" fill="' + c2 + '"/>' + windows(200, 200, 420, 50, 18, 1, c1, r) + bulbs(120, 250, 700, 250, 30, c1); break;
      case "riverboat": g = water(270, c1) + '<path d="M150 270 L180 300 L620 300 L650 270Z" fill="#F2ECE0"/><rect x="200" y="220" width="400" height="50" fill="#F2ECE0"/><rect x="250" y="180" width="300" height="40" fill="#EDE4D4"/><rect x="300" y="120" width="12" height="60" fill="#2a2a2a"/><rect x="490" y="120" width="12" height="60" fill="#2a2a2a"/><circle class="cs-wheel" cx="640" cy="262" r="34" fill="none" stroke="' + c2 + '" stroke-width="5" stroke-dasharray="8 6"/>' + bulbs(200, 220, 600, 220, 20, c1); break;
      case "dubai": g = '<path d="M0 300 Q 200 270 400 300 T 800 290 L800 360 L0 360Z" fill="#7a4a2a"/><path d="M380 300 L380 30 Q 470 120 440 300Z" fill="#E8E0D0"/><path d="M384 40 L384 300" stroke="' + c1 + '" stroke-width="2"/>' + palm(160, 300, .9) + palm(640, 300, 1.1); break;
      case "desert_oasis": g = '<path d="M0 300 Q 200 260 400 300 T 800 280 L800 360 L0 360Z" fill="#7a4a2a"/><ellipse cx="400" cy="318" rx="140" ry="16" fill="#24504a"/><path d="M300 300 L360 220 L420 300Z" fill="' + c2 + '"/><path d="M420 300 L480 210 L540 300Z" fill="' + c1 + '" opacity=".85"/>' + palm(230, 312, 1) + palm(580, 312, .9) + bulbs(300, 300, 540, 300, 14, "#FFE7A3"); break;
      case "biloxi": g = water(250, c1) + '<rect x="0" y="240" width="800" height="12" fill="#c8b48a"/><rect x="450" y="250" width="300" height="8" fill="#6a4a2a"/>' + [470, 520, 570, 620, 670, 720].map(function (x) { return '<rect x="' + x + '" y="258" width="5" height="40" fill="#5a3a1a"/>'; }).join("") + '<path d="M120 240 L135 110 L155 110 L170 240Z" fill="#F2ECE0"/><rect x="133" y="96" width="24" height="16" fill="' + c1 + '" class="cs-bulb"/><rect x="260" y="140" width="160" height="100" fill="#33283c"/>' + windows(260, 140, 160, 100, 6, 4, c1, r); break;
      case "atlantic_city": g = water(270, c1) + '<rect x="0" y="258" width="800" height="14" fill="#8a6a4a"/><rect x="250" y="60" width="300" height="198" fill="#33283c"/>' + windows(252, 62, 296, 194, 12, 11, c1, r) + bulbs(250, 258, 550, 258, 20, c2); break;
      case "reno": g = skyline(r, c2) + '<path d="M200 300 L200 130 Q 400 40 600 130 L600 300 L570 300 L570 145 Q 400 70 230 145 L230 300Z" fill="' + c2 + '"/>' + bulbs(215, 138, 400, 70, 16, c1) + bulbs(400, 70, 585, 138, 16, c1); break;
      case "monte_carlo": g = water(290, c1) + '<path d="M0 220 Q 200 150 420 200 T 800 180 L800 290 L0 290Z" fill="#2a3a2a"/><rect x="260" y="170" width="280" height="110" fill="#EDE4D4"/><path d="M340 170 Q 400 100 460 170Z" fill="' + c2 + '"/><circle cx="400" cy="112" r="6" fill="' + c1 + '"/>' + [280, 320, 360, 440, 480, 520].map(function (x) { return '<rect x="' + x + '" y="200" width="12" height="80" fill="#d6cbb6"/>'; }).join("") + bulbs(260, 170, 540, 170, 18, c1) + '<path d="M600 300 L680 300 L670 290 L610 290Z" fill="#F2ECE0"/><path d="M640 290 L640 250 L665 288Z" fill="#F2ECE0"/>'; break;
      case "macau": g = skyline(r, c1) + '<rect x="388" y="150" width="24" height="150" fill="#3a2d44"/>' + [-60, -30, 0, 30, 60].map(function (a) { return '<ellipse cx="400" cy="120" rx="22" ry="70" fill="' + c1 + '" opacity=".75" transform="rotate(' + a + ' 400 170)"/>'; }).join("") + bulbs(330, 300, 470, 300, 10, c2); break;
      case "mountain_lodge": g = '<path d="M0 240 L160 90 L300 230 L460 70 L640 230 L800 120 L800 300 L0 300Z" fill="#3a3a52"/><path d="M160 90 L130 120 L190 120Z M460 70 L425 105 L495 105Z" fill="#F2ECE0"/><rect x="0" y="300" width="800" height="60" fill="#E8E4EC"/><path d="M280 300 L280 220 L400 160 L520 220 L520 300Z" fill="#5a3a22"/>' + windows(290, 225, 220, 70, 6, 2, c1, r) + '<circle class="cs-fire" cx="600" cy="306" r="10" fill="#E8784A"/>'; break;
      case "beach_resort": g = '<circle cx="640" cy="200" r="60" fill="' + c2 + '" opacity=".7"/>' + water(250, c1) + '<rect x="0" y="270" width="800" height="90" fill="#d8c08a"/><path d="M300 270 L360 210 L420 270Z" fill="' + c2 + '"/><path d="M440 270 L500 220 L560 270Z" fill="' + c1 + '"/>' + palm(160, 280, 1.1) + palm(700, 285, .9) + bulbs(300, 270, 560, 270, 14, "#FFE7A3"); break;
      default: /* vegas_old */ g = skyline(r, c2) + '<rect x="120" y="190" width="560" height="110" fill="#33283c"/><path d="M100 190 L700 190 L680 170 L120 170Z" fill="' + c2 + '"/>' + bulbs(110, 180, 690, 180, 40, c1) + windows(120, 200, 560, 100, 14, 2, c1, r);
    }
    return g;
  }
  function signSVG(kind, name, tag, c1, c2) {
    var nm = esc(name || "YOUR CASINO").toUpperCase(), fs = Math.max(20, Math.min(46, 620 / Math.max(6, nm.length)));
    var t = '<text x="400" y="%Y" text-anchor="middle" class="cs-name" font-size="' + fs.toFixed(0) + '" fill="#FAF7F0" style="filter:url(#csGlow)">' + nm + "</text>" + (tag ? '<text x="400" y="%T" text-anchor="middle" class="cs-tag" fill="' + c1 + '">' + esc(tag) + "</text>" : "");
    switch (kind) {
      case "arrow": return '<g class="cs-sign"><path d="M150 40 L620 40 L660 85 L620 130 L150 130Z" fill="#2a1418" stroke="' + c1 + '" stroke-width="4"/>' + bulbs(160, 46, 616, 46, 26, c1) + bulbs(160, 124, 616, 124, 26, c1) + t.replace("%Y", "96").replace("%T", "118") + "</g>";
      case "tower": return '<g class="cs-sign"><rect x="70" y="20" width="70" height="280" fill="#2a1418" stroke="' + c1 + '" stroke-width="3"/>' + bulbs(76, 26, 76, 294, 24, c1) + bulbs(134, 26, 134, 294, 24, c1) + '<rect x="190" y="40" width="420" height="90" rx="12" fill="#2a1418" stroke="' + c2 + '" stroke-width="4"/>' + t.replace("%Y", "92").replace("%T", "118") + '<text x="105" y="160" text-anchor="middle" font-size="40" fill="' + c1 + '" style="writing-mode:vertical-rl;filter:url(#csGlow)">♠♥♦♣</text></g>';
      case "arch": return '<g class="cs-sign"><path d="M160 150 Q 400 10 640 150" stroke="' + c2 + '" stroke-width="40" fill="none"/>' + bulbs(170, 140, 400, 52, 18, c1) + bulbs(400, 52, 630, 140, 18, c1) + t.replace("%Y", "100").replace("%T", "126") + "</g>";
      case "neon_script": return '<g class="cs-sign cs-neon">' + '<text x="400" y="100" text-anchor="middle" class="cs-script" font-size="' + (fs * 1.25).toFixed(0) + '" fill="' + c1 + '" stroke="#FFE7A3" stroke-width="1" style="filter:url(#csGlow)">' + esc(name || "Your Casino") + "</text>" + (tag ? '<text x="400" y="132" text-anchor="middle" class="cs-tag" fill="' + c2 + '" style="filter:url(#csGlow)">' + esc(tag) + "</text>" : "") + "</g>";
      default: return '<g class="cs-sign"><rect x="160" y="30" width="480" height="110" rx="14" fill="#2a1418" stroke="' + c1 + '" stroke-width="5"/>' + bulbs(170, 38, 630, 38, 30, c1) + bulbs(170, 132, 630, 132, 30, c1) + bulbs(168, 40, 168, 130, 6, c1) + bulbs(632, 40, 632, 130, 6, c1) + t.replace("%Y", "94").replace("%T", "120") + "</g>";
    }
  }
  function overlay(climate, r) {
    var s = "";
    if (climate === "snow") for (var i = 0; i < 40; i++) s += '<circle class="cs-snow" style="animation-delay:-' + (r() * 8).toFixed(1) + 's;animation-duration:' + (6 + r() * 6).toFixed(1) + 's" cx="' + (r() * 800).toFixed(0) + '" cy="-10" r="' + (1 + r() * 2).toFixed(1) + '" fill="#FAF7F0"/>';
    else for (var j = 0; j < 30; j++) s += '<circle class="cs-star" style="animation-delay:-' + (r() * 4).toFixed(1) + 's" cx="' + (r() * 800).toFixed(0) + '" cy="' + (r() * 120).toFixed(0) + '" r="' + (r() * 1.4 + .4).toFixed(1) + '" fill="#FAF7F0"/>';
    return s;
  }
  function render(el, c, opts) {
    opts = opts || {};
    var st = c.style || {}, venue = V[st.venue] ? st.venue : (KIND_DEFAULT[c.kind] || "vegas_old"), sign = st.sign || (venue === "reno" ? "arch" : venue === "off_strip" ? "tower" : "marquee");
    var col = colors(st), c1 = col[0], c2 = col[1], climate = st.climate || VENUE_CLIMATE[venue] || "city_night", sky = SKY[climate] || SKY.city_night, r = rng(hash(c.id || c.name));
    var themes = (st.themes || []).filter(function (k) { return T[k]; });
    var motifs = themes.map(function (k) { return T[k][2]; }); if (st.mascot) motifs.push("🐾");
    var floaters = ""; for (var i = 0; i < Math.min(14, motifs.length * 4); i++) floaters += '<span class="cs-motif" style="left:' + (5 + r() * 88).toFixed(0) + "%;top:" + (r() < .5 ? 4 + r() * 10 : 58 + r() * 18).toFixed(0) + "%;animation-delay:-" + (r() * 10).toFixed(1) + "s;font-size:" + (14 + r() * 14).toFixed(0) + 'px">' + esc(motifs[i % motifs.length]) + "</span>";
    var svg = '<svg class="cs-svg" viewBox="0 -30 800 390" preserveAspectRatio="xMidYMax slice" role="img" aria-label="' + esc((c.name || "Casino") + ", " + V[venue][1] + " style casino") + '">' +
      '<defs><linearGradient id="csSky' + (c.id || "x") + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + sky[0] + '"/><stop offset=".6" stop-color="' + sky[1] + '"/><stop offset="1" stop-color="' + sky[2] + '"/></linearGradient>' +
      '<filter id="csGlow" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>' +
      '<rect x="0" y="-30" width="800" height="390" fill="url(#csSky' + (c.id || "x") + ')"/>' + overlay(climate, r) + venueSVG(venue, c1, c2, r) +
      (venue === "off_strip" ? '<g transform="translate(460 -10) scale(.42)">' + signSVG("arrow", c.name, "", c1, c2) + "</g>" : "") +
      '<g transform="translate(0 ' + (venue === "indoor" ? 100 : 0) + ')">' + (venue === "off_strip" ? "" : signSVG(sign, c.name, st.tagline, c1, c2)) + "</g>" +
      (venue === "off_strip" ? '<text x="400" y="250" text-anchor="middle" class="cs-name" font-size="34" fill="#FAF7F0" style="filter:url(#csGlow)">' + esc((c.name || "").toUpperCase()) + "</text>" : "") +
      "</svg>";
    var amen = (st.amenities || []).filter(function (k) { return A[k]; }).map(function (k) { return '<span class="cs-am" title="' + esc(A[k][1]) + '">' + A[k][2] + " " + esc(A[k][1]) + "</span>"; }).join("");
    var floor = "";
    if (opts.floor) {
      floor = '<div class="cs-floor" style="--c1:' + c1 + ";--c2:" + c2 + '">' + (st.welcome ? '<p class="cs-welcome">“' + esc(st.welcome) + "”</p>" : "") +
        '<div class="cs-tables">' + (c.tables || []).map(function (t, i) { return '<div class="cs-table" style="animation-delay:' + i * .12 + 's"><div class="cs-felt"><b>' + esc(t.name) + "</b>" + (t.meets ? "<span>" + esc(t.meets) + "</span>" : "") + '</div><i class="cs-chair a"></i><i class="cs-chair b"></i><i class="cs-chair c"></i><i class="cs-chair d"></i></div>'; }).join("") + "</div>" +
        (amen ? '<div class="cs-amen">' + amen + "</div>" : "") + "</div>";
    }
    el.innerHTML = '<div class="cs" style="--c1:' + c1 + ";--c2:" + c2 + '"><div class="cs-ext">' + svg + '<div class="cs-motifs">' + floaters + "</div>" + (st.city ? '<span class="cs-city">' + esc(st.city) + "</span>" : "") + (!opts.floor && amen ? '<div class="cs-amen mini">' + amen + "</div>" : "") + "</div>" + floor + "</div>";
  }
  var css = '.cs{position:relative;border-radius:18px;overflow:hidden;background:#17151B;border:2px solid var(--c1);box-shadow:0 0 0 3px rgba(0,0,0,.4),0 0 28px -6px var(--c1)}' +
    '.cs-ext{position:relative;aspect-ratio:800/390;max-height:420px;width:100%}.cs-svg{position:absolute;inset:0;width:100%;height:100%;display:block}' +
    '.cs-name{font-family:"Big Shoulders Display","Arial Narrow",Impact,sans-serif;font-weight:900;letter-spacing:.04em}.cs-tag{font:700 15px Figtree,system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase}' +
    '.cs-script{font-family:"Brush Script MT","Segoe Script",cursive;font-weight:700}' +
    '.cs-bulb{animation:csb 1.3s steps(2) infinite}@keyframes csb{50%{opacity:.35}}.cs-neon{animation:csn 4s infinite}@keyframes csn{0%,92%,100%{opacity:1}93%{opacity:.4}95%{opacity:1}97%{opacity:.6}}' +
    '.cs-star{animation:cst 3s ease-in-out infinite alternate}@keyframes cst{to{opacity:.2}}.cs-snow{animation:css 9s linear infinite}@keyframes css{to{transform:translateY(380px)}}' +
    '.cs-wave{animation:csw 4s linear infinite}@keyframes csw{to{transform:translateX(-100px)}}.cs-fount{transform-origin:bottom;animation:csf 1.8s ease-in-out infinite alternate}@keyframes csf{to{transform:scaleY(.6)}}' +
    '.cs-wheel{transform-origin:640px 262px;animation:csr 6s linear infinite}@keyframes csr{to{transform:rotate(360deg)}}.cs-fire{animation:csfi .5s ease-in-out infinite alternate}@keyframes csfi{to{r:13;opacity:.7}}' +
    '.cs-motifs{position:absolute;inset:0;pointer-events:none}.cs-motif{position:absolute;opacity:.75;animation:csm 10s ease-in-out infinite;filter:drop-shadow(0 0 6px rgba(255,231,163,.5));color:#FFE7A3;font-weight:800}@keyframes csm{50%{transform:translateY(-14px) rotate(6deg)}}' +
    '.cs-city{position:absolute;left:12px;top:10px;font:800 .72rem Figtree,system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#FAF7F0;background:rgba(23,21,27,.6);padding:4px 10px;border-radius:999px}' +
    '.cs-amen{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px}.cs-amen.mini{position:absolute;left:0;right:0;bottom:0;top:auto;height:auto;max-height:40%;overflow:hidden;align-items:flex-end;background:linear-gradient(transparent,rgba(23,21,27,.8));padding-top:20px}' +
    '.cs-am{font-size:.76rem;padding:3px 9px;border-radius:999px;background:rgba(23,21,27,.75);border:1px solid var(--c1);color:#FAF7F0}' +
    '.cs-floor{padding:18px;background:radial-gradient(120% 80% at 50% 0%,color-mix(in srgb,var(--c2) 35%,transparent),transparent 70%),repeating-linear-gradient(45deg,#2a1a22 0 14px,#2f1d26 14px 28px)}' +
    '.cs-welcome{margin:0 0 14px;text-align:center;font:600 1.05rem/1.4 Figtree,system-ui,sans-serif;color:#FAF7F0;font-style:italic}' +
    '.cs-tables{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:26px 18px;padding:10px 6px}' +
    '.cs-table{position:relative;padding:16px;animation:csin .6s cubic-bezier(.3,.7,.3,1.2) backwards}@keyframes csin{from{opacity:0;transform:translateY(16px) scale(.9)}}' +
    '.cs-felt{display:grid;gap:4px;place-items:center;text-align:center;min-height:96px;padding:14px;border-radius:999px;background:radial-gradient(circle at 50% 35%,#2F8A62,#1E5A3C 70%);border:7px solid #5a3a22;box-shadow:inset 0 0 0 2px var(--c1),0 10px 20px -8px #000}' +
    '.cs-felt b{font:900 1.05rem "Big Shoulders Display",Impact,sans-serif;text-transform:uppercase;letter-spacing:.04em;color:#FAF7F0}.cs-felt span{font-size:.76rem;color:#E8E0D0}' +
    '.cs-chair{position:absolute;width:20px;height:20px;border-radius:50%;background:var(--c2);border:2px solid var(--c1)}.cs-chair.a{left:50%;top:0;transform:translateX(-50%)}.cs-chair.b{left:50%;bottom:0;transform:translateX(-50%)}.cs-chair.c{left:2px;top:50%;transform:translateY(-50%)}.cs-chair.d{right:2px;top:50%;transform:translateY(-50%)}' +
    '@media (prefers-reduced-motion:reduce){.cs *{animation:none!important}}';

  /* ---------- First-person entrance, generated from the Casino's style ----------
     Arrive (VIP road, ship's dock or lantern path) → walk the red carpet to the building → doors open → main lobby. */
  var ARRIVE = { cruise: "dock", riverboat: "dock", outdoor: "path", beach_resort: "path", desert_oasis: "path", mountain_lodge: "path" };
  var DOORS = { vegas_new: "glass", highrise: "glass", macau: "glass", dubai: "glass", atlantic_city: "glass", monte_carlo: "palace", indoor: "palace", desert_oasis: "tent", beach_resort: "garden", outdoor: "garden", biloxi: "garden", cruise: "port" };
  var ECSS = '.fe{position:fixed;inset:0;z-index:10040;overflow:hidden;background:#17151B;font-family:Figtree,system-ui,sans-serif;color:#FAF7F0;perspective:700px}' +
    '.fe>div{position:absolute;inset:0;opacity:0;transition:opacity .35s}.fe>div.on{opacity:1}' +
    '.fe-arrive{perspective:420px;perspective-origin:50% 48%}.fe-sky{position:absolute;left:0;right:0;top:0;height:53%}' +
    '.fe-ground{position:absolute;left:-100%;right:-100%;top:52%;height:170%;transform-origin:50% 0;transform:rotateX(79deg)}' +
    '.fe-road{background-color:#1d2a22;background-image:repeating-linear-gradient(180deg,var(--c1) 0 60px,transparent 60px 150px),linear-gradient(90deg,transparent 40%,#2f2c36 40% 60%,transparent 60%);background-size:12px 150px,100% 100%;background-position:50% 0,0 0;background-repeat:repeat-y,no-repeat;animation:feRoad .4s linear infinite}@keyframes feRoad{to{background-position:50% 150px,0 0}}' +
    '.fe-dock{background-color:#163029;background-image:repeating-linear-gradient(180deg,#6a4a2a 0 26px,#3a2614 26px 32px),repeating-linear-gradient(90deg,#163029 0 40px,#1b3a32 40px 80px);background-size:24% 32px,100% 100%;background-position:50% 0,0 0;background-repeat:repeat-y,no-repeat;animation:feDock .35s linear infinite}@keyframes feDock{to{background-position:50% 32px,0 0}}' +
    '.fe-path{background-color:#23301f;background-image:radial-gradient(circle,var(--c1) 0 9px,transparent 11px),radial-gradient(circle,var(--c1) 0 9px,transparent 11px),linear-gradient(90deg,transparent 43%,#8a7a5a 43% 57%,transparent 57%);background-size:40px 160px,40px 160px,100% 100%;background-position:41% 0,59% 0,0 0;background-repeat:repeat-y,repeat-y,no-repeat;animation:fePath .5s linear infinite}@keyframes fePath{to{background-position:41% 160px,59% 160px,0 0}}' +
    '.fe-far{position:absolute;left:50%;bottom:47%;width:46vmin;transform-origin:50% 100%;transform:translateX(-50%) scale(.45);animation:feFar 1.5s ease-in forwards}@keyframes feFar{to{transform:translateX(-50%) scale(.95)}}' +
    '.fe-sign{position:absolute;top:42%;padding:8px 14px;border-radius:10px;background:#2a1418;border:3px solid var(--c1);font:900 clamp(14px,3vmin,22px) "Big Shoulders Display",Impact,sans-serif;letter-spacing:.08em;white-space:nowrap;box-shadow:0 0 20px var(--c1)}' +
    '.fe-sign.l{left:50%;animation:feL 1.4s ease-in forwards}.fe-sign.r{left:50%;animation:feR 1.4s .45s ease-in forwards;opacity:0}' +
    '@keyframes feL{from{transform:translate(-80%,0) scale(.3)}to{transform:translate(-260%,30%) scale(1.6);opacity:.2}}@keyframes feR{0%{opacity:1;transform:translate(-20%,0) scale(.3)}100%{opacity:.2;transform:translate(160%,30%) scale(1.6)}}' +
    '.fe-cap{position:absolute;left:0;right:0;bottom:7%;text-align:center;font:800 clamp(13px,2.4vmin,18px) Figtree,system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;text-shadow:0 2px 8px #000}' +
    '.fe-ext{position:absolute;inset:0;display:grid;place-items:center}.fe-ext .fe-zoom{width:min(980px,120vw);transform-origin:50% 62%;animation:feZoom 1.3s cubic-bezier(.5,0,.8,.6) forwards}@keyframes feZoom{to{transform:scale(2.8);filter:brightness(1.15)}}' +
    '.fe-carpet{position:absolute;left:50%;bottom:0;width:120vmin;height:42%;transform:translateX(-50%);clip-path:polygon(44% 0,56% 0,100% 100%,0 100%);background:repeating-linear-gradient(0deg,#9B1B30 0 16px,#86172a 16px 32px);animation:feRun .5s linear infinite}' +
    '.fe-rope{position:absolute;bottom:0;width:10px;height:30%;background:linear-gradient(var(--c1),#7a5410);border-radius:6px}.fe-rope.l{left:14%}.fe-rope.r{right:14%}' +
    '.fe-doors{display:flex;background:radial-gradient(circle at 50% 50%,#FFE7A3,#E8C46A 30%,#9B1B30 80%)}' +
    '.fe-door{flex:1;position:relative;transition:transform 1s cubic-bezier(.6,.05,.3,1);border:4px solid var(--c1)}.fe-door.a{transform-origin:left}.fe-door.b{transform-origin:right}' +
    '.fe-doors.open .fe-door.a{transform:rotateY(-105deg)}.fe-doors.open .fe-door.b{transform:rotateY(105deg)}' +
    '.d-wood{background:repeating-linear-gradient(90deg,#4a2e1e 0 22px,#3a2418 22px 44px)}.d-glass{background:linear-gradient(120deg,rgba(255,255,255,.18),rgba(255,255,255,.04) 40%,rgba(255,255,255,.14)),#20303a;backdrop-filter:blur(2px)}' +
    '.d-palace{background:radial-gradient(ellipse at 50% 10%,var(--c1) 0 8%,transparent 9%),repeating-linear-gradient(0deg,#e8dcc4 0 40px,#d6c8ae 40px 44px)}.d-tent{background:repeating-linear-gradient(90deg,var(--c2) 0 30px,var(--c1) 30px 60px)}' +
    '.d-garden{background:repeating-linear-gradient(90deg,transparent 0 26px,#5a3a22 26px 34px),radial-gradient(circle,#2F8A62,#1E5A3C)}.d-port{background:radial-gradient(circle at 50% 45%,#20303a 0 22%,#E8C46A 22% 25%,#F2ECE0 25%)}' +
    '.fe-door i{position:absolute;top:50%;width:14px;height:60px;border-radius:7px;background:linear-gradient(#FFE7A3,#B8862F)}.fe-door.a i{right:16px}.fe-door.b i{left:16px}' +
    '.fe-lobby{background:radial-gradient(ellipse at 50% 0,rgba(255,231,163,.55),transparent 55%),repeating-conic-gradient(from 45deg at 50% 100%,#3a1a26 0 10deg,#2a1420 10deg 20deg);display:grid;place-items:center;text-align:center}' +
    '.fe-chand{position:absolute;left:50%;top:0;width:min(420px,70vw);height:110px;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 100%,#FFE7A3 0 18%,transparent 60%);border-bottom:3px dotted #FFE7A3;border-radius:0 0 50% 50%;animation:feSway 2s ease-in-out infinite alternate}@keyframes feSway{to{transform:translateX(-50%) rotate(2deg)}}' +
    '.fe-welcome{display:grid;gap:6px;padding:0 16px;animation:feUp .7s cubic-bezier(.3,.7,.3,1.2) both}.fe-welcome small{letter-spacing:.3em;text-transform:uppercase;color:var(--c1);font-weight:800}' +
    '.fe-welcome b{font:900 clamp(30px,8vmin,72px)/1 "Big Shoulders Display",Impact,sans-serif;text-transform:uppercase;text-shadow:0 0 18px var(--c1)}.fe-welcome span{font-size:clamp(20px,4vmin,34px)}@keyframes feUp{from{opacity:0;transform:translateY(20px) scale(.9)}}' +
    '.fe-skip{all:unset;position:absolute;right:16px;top:14px;z-index:5;cursor:pointer;padding:8px 14px;border-radius:999px;border:1px solid rgba(250,247,240,.35);background:rgba(23,21,27,.6);font-weight:700;font-size:.9rem}.fe-skip:focus-visible{outline:3px solid #FFE7A3}' +
    '.fe.out{opacity:0;transition:opacity .45s}';
  function entry(c, done) {
    var st = c.style || {}, venue = V[st.venue] ? st.venue : (KIND_DEFAULT[c.kind] || "vegas_old"), col = colors(st), c1 = col[0], c2 = col[1];
    var climate = st.climate || VENUE_CLIMATE[venue] || "city_night", sky = SKY[climate] || SKY.city_night;
    var arrive = ARRIVE[venue] || "road", door = DOORS[venue] || "wood";
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { done && done(); return; }
    if (!document.getElementById("feCss")) { var x = document.createElement("style"); x.id = "feCss"; x.textContent = ECSS; document.head.appendChild(x); }
    var signs = arrive === "dock" ? ["⚓ VIP BOARDING", "GANGWAY ▸"] : arrive === "path" ? ["✦ VIP ENTRANCE", "THIS WAY ▸"] : ["VIP PARKING", "VALET ▸"];
    var cap = arrive === "dock" ? "Boarding · Welcome aboard, VIP" : arrive === "path" ? "Follow the lanterns · VIP entrance" : "Valet parking · Welcome, VIP";
    var motifs = (st.themes || []).map(function (k) { return T[k] ? T[k][2] : ""; }).filter(Boolean).slice(0, 4).join(" ");
    var fe = document.createElement("div"); fe.className = "fe"; fe.setAttribute("role", "img"); fe.setAttribute("aria-label", "Entering " + (c.name || "the Casino"));
    fe.style.setProperty("--c1", c1); fe.style.setProperty("--c2", c2);
    fe.innerHTML = '<button class="fe-skip" type="button">Skip ›</button>' +
      '<div class="fe-arrive on"><div class="fe-sky" style="background:linear-gradient(' + sky[0] + "," + sky[1] + " 70%," + sky[2] + ')"></div><div class="fe-ground fe-' + arrive + '"></div><div class="fe-far" id="feFar"></div><span class="fe-sign l">' + esc(signs[0]) + '</span><span class="fe-sign r">' + esc(signs[1]) + '</span><p class="fe-cap">' + esc(cap) + "</p></div>" +
      '<div class="fe-ext"><div class="fe-zoom" id="feZoom"></div><div class="fe-carpet"></div><i class="fe-rope l"></i><i class="fe-rope r"></i></div>' +
      '<div class="fe-doors"><div class="fe-door a d-' + door + '"><i></i></div><div class="fe-door b d-' + door + '"><i></i></div></div>' +
      '<div class="fe-lobby"><div class="fe-chand"></div><div class="fe-welcome"><small>Welcome to</small><b>' + esc(c.name || "the Casino") + "</b>" + (st.tagline ? "<em>" + esc(st.tagline) + "</em>" : "") + (motifs ? "<span>" + esc(motifs) + "</span>" : "") + "</div></div>";
    document.body.appendChild(fe);
    style(); render(fe.querySelector("#feFar"), c); render(fe.querySelector("#feZoom"), c);
    var stages = fe.querySelectorAll(".fe>div"), timers = [], finished = false;
    function show(i) { stages.forEach(function (d, j) { d.classList.toggle("on", j === i); }); }
    function finish() { if (finished) return; finished = true; timers.forEach(clearTimeout); fe.classList.add("out"); setTimeout(function () { fe.remove(); }, 460); done && done(); }
    timers.push(setTimeout(function () { show(1); }, 1450));
    timers.push(setTimeout(function () { show(2); }, 2700));
    timers.push(setTimeout(function () { fe.querySelector(".fe-doors").classList.add("open"); }, 2950));
    timers.push(setTimeout(function () { show(3); }, 3800));
    timers.push(setTimeout(finish, 5200));
    fe.querySelector(".fe-skip").onclick = finish;
    document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { document.removeEventListener("keydown", k); finish(); } });
    fe.querySelector(".fe-skip").focus();
  }
  var styled = false;
  function style() { if (styled) return; var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); styled = true; }
  window.SFCasino = { VENUES: VENUES, SIGNS: SIGNS, PALETTES: PALETTES, CLIMATES: CLIMATES, THEMES: THEMES, AMENITIES: AMENITIES, KIND_DEFAULT: KIND_DEFAULT,
    render: function (el, c, o) { style(); render(el, c, o); }, entry: entry };
})();
