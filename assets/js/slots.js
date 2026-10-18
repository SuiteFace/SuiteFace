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
    pineapple: '<path d="M12 9.5c-1.2-2-3.4-3-5-2.6 1.4.6 2.6 1.7 3.2 3M12 9.5c1.2-2 3.4-3 5-2.6-1.4.6-2.6 1.7-3.2 3M12 9.2c-.5-2.4-.1-4.6 1.2-6.2.4 2 .2 4.1-.8 6.2M12 9.2c.2-2.2-.5-4.3-1.9-5.6" fill="none" stroke="' + G + '" stroke-width="1.5" stroke-linecap="round"/>' +
      '<ellipse cx="12" cy="15.6" rx="5" ry="6.2" fill="' + B + '" stroke="' + B2 + '" stroke-width=".8"/><path d="M8 12.5l8 6.5M8.2 17.6l7.6-5.6M9 10.8l6.6 9M15 10.8l-6.6 9" stroke="' + B2 + '" stroke-width=".7" opacity=".75"/>',
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

  /* Suit emblems for the quiz result and lock-in: each suit gets its own Vegas treatment on a small dark sign tile.
     Wild Card: a gold star ringed with chasing marquee bulbs. Heart: a red neon tube. Diamond: a faceted gem that glints.
     Club: a felt-green club lit with bulbs. Spade: polished onyx with a gold neon edge and rhinestones. */
  var EMB = {
    wild: function () { var pts = []; for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 21 : 46; pts.push((60 + r * Math.cos(a)).toFixed(1) + "," + (62 + r * Math.sin(a)).toFixed(1)); }
      var rays = ""; for (var k = 0; k < 8; k++) { var b = k * Math.PI / 4 + Math.PI / 8; rays += '<line class="ray" style="animation-delay:' + (k * .18).toFixed(2) + 's" x1="' + (60 + 50 * Math.cos(b)).toFixed(1) + '" y1="' + (62 + 50 * Math.sin(b)).toFixed(1) + '" x2="' + (60 + 57 * Math.cos(b)).toFixed(1) + '" y2="' + (62 + 57 * Math.sin(b)).toFixed(1) + '"/>'; }
      return '<defs><linearGradient id="embGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF3C4"/><stop offset=".45" stop-color="#E8C46A"/><stop offset="1" stop-color="#8F6410"/></linearGradient></defs>' + rays +
        '<polygon class="body" points="' + pts.join(" ") + '" fill="url(#embGold)" stroke="#FFE7A3" stroke-width="1.2" stroke-linejoin="round" data-bulbs="26"/>'; },
    heart: function () { var d = "M60 98C26 76 16 54 27 38c10-14 27-12 33 3 6-15 23-17 33-3 11 16 1 38-33 60z";
      return '<defs><filter id="embGlowR" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2"/></filter></defs>' +
        '<g class="neon"><path d="' + d + '" fill="none" stroke="#FF2E55" stroke-width="7" filter="url(#embGlowR)" opacity=".9"/><path d="' + d + '" fill="none" stroke="#FF5A78" stroke-width="3.6" stroke-linejoin="round"/><path d="' + d + '" fill="none" stroke="#FFE3EA" stroke-width="1.2" stroke-linejoin="round"/></g>' +
        '<path d="M44 106h32" stroke="#4A4552" stroke-width="2" stroke-linecap="round"/><circle cx="44" cy="106" r="2" fill="#6B6372"/><circle cx="76" cy="106" r="2" fill="#6B6372"/>'; },
    diamond: function () { var t = function (x, y, d) { return '<path class="glint" style="animation-delay:' + d + 's" d="M' + x + " " + (y - 7) + "L" + (x + 1.6) + " " + (y - 1.6) + "L" + (x + 7) + " " + y + "L" + (x + 1.6) + " " + (y + 1.6) + "L" + x + " " + (y + 7) + "L" + (x - 1.6) + " " + (y + 1.6) + "L" + (x - 7) + " " + y + "L" + (x - 1.6) + " " + (y - 1.6) + 'z" fill="#fff"/>'; };
      return '<g stroke="#FFE7A3" stroke-width="1" stroke-linejoin="round"><path d="M60 12L60 62L22 62z" fill="#E33A57"/><path d="M60 12L98 62L60 62z" fill="#B5122E"/><path d="M22 62L60 62L60 110z" fill="#8E2230"/><path d="M98 62L60 110L60 62z" fill="#C8102E"/></g>' +
        '<path d="M60 26L84 62L60 96L36 62z" fill="#fff" opacity=".16"/><path d="M60 12L40 37" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>' + t(36, 34, 0) + t(88, 48, .7) + t(70, 92, 1.3); },
    club: function () { return '<g fill="#1E6347" stroke="#7CC4A0" stroke-width="1"><circle cx="60" cy="38" r="20"/><circle cx="38" cy="66" r="20"/><circle cx="82" cy="66" r="20"/><path d="M60 58L70 104H50z"/></g><g fill="#1E6347"><circle cx="60" cy="38" r="19.4"/><circle cx="38" cy="66" r="19.4"/><circle cx="82" cy="66" r="19.4"/><circle cx="60" cy="62" r="12"/></g>' +
        '<path d="M47 104h26" stroke="#7CC4A0" stroke-width="1.6" stroke-linecap="round"/><g class="clubbulbs"></g>'; },
    spade: function () { var d = "M60 12C60 12 103 42 100 70c-2 15-19 21-33 10l6 26H47l6-26C39 91 22 85 20 70 17 42 60 12 60 12z";
      return '<defs><linearGradient id="embOnyx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5A5066"/><stop offset=".5" stop-color="#26232B"/><stop offset="1" stop-color="#121016"/></linearGradient><filter id="embGlowG" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4"/></filter></defs>' +
        '<path d="' + d + '" fill="url(#embOnyx)"/><path d="' + d + '" fill="none" stroke="#E8C46A" stroke-width="4" filter="url(#embGlowG)" opacity=".85"/><path class="body gems" d="' + d + '" fill="none" stroke="#FFE7A3" stroke-width="1.6" data-bulbs="18"/>' +
        '<path d="M44 30c6-6 12-9 16-11" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".35" fill="none"/>'; }
  };
  function emblem(kind, size) {
    var f = EMB[kind]; if (!f) return ""; size = size || 132;
    return '<span class="emb emb-' + kind + '" style="width:' + size + 'px;height:' + size + 'px" aria-hidden="true"><svg viewBox="0 0 120 120"><rect x="2" y="2" width="116" height="116" rx="26" class="tile"/><rect x="7" y="7" width="106" height="106" rx="21" class="tile-edge"/>' + f() + "</svg></span>";
  }
  /* Bulbs and rhinestones are placed along the shape's own outline once it's on the page. */
  function light(root) {
    (root || document).querySelectorAll(".emb:not([data-lit])").forEach(function (em) {
      em.setAttribute("data-lit", "1"); var svgEl = em.querySelector("svg"), NS = "http://www.w3.org/2000/svg";
      em.querySelectorAll("[data-bulbs]").forEach(function (p) {
        var n = +p.getAttribute("data-bulbs"), gems = p.classList.contains("gems"), L = p.getTotalLength ? p.getTotalLength() : 0, g = document.createElementNS(NS, "g");
        g.setAttribute("class", gems ? "stones" : "bulbs");
        for (var i = 0; i < n; i++) { var pt = p.getPointAtLength(L * i / n), c = document.createElementNS(NS, "circle");
          c.setAttribute("cx", pt.x.toFixed(1)); c.setAttribute("cy", pt.y.toFixed(1)); c.setAttribute("r", gems ? 1.9 : 2.3); c.setAttribute("style", "animation-delay:" + ((i % 3) * .35).toFixed(2) + "s"); g.appendChild(c); }
        svgEl.appendChild(g);
      });
      var cb = em.querySelector(".clubbulbs");
      if (cb) { var C = [[60, 38], [38, 66], [82, 66]], j = 0;
        C.forEach(function (o) { for (var a = 0; a < 360; a += 30) { var x = o[0] + 20 * Math.cos(a * Math.PI / 180), y = o[1] + 20 * Math.sin(a * Math.PI / 180);
          if (C.some(function (q) { return q !== o && Math.hypot(x - q[0], y - q[1]) < 19; }) || (y > 72 && Math.abs(x - 60) < 14) || Math.hypot(x - 60, y - 58) < 15) continue;
          var c2 = document.createElementNS(NS, "circle"); c2.setAttribute("cx", x.toFixed(1)); c2.setAttribute("cy", y.toFixed(1)); c2.setAttribute("r", "2.3"); c2.setAttribute("style", "animation-delay:" + ((j++ % 3) * .35).toFixed(2) + "s"); cb.appendChild(c2); } });
        cb.setAttribute("class", "clubbulbs bulbs"); }
    });
  }

  /* The First 1,000 badge: a gold founder's medallion in a ring of marquee bulbs, numbered, with a Founding Player ribbon. */
  function founder(no, size) {
    size = size || 120; var num = no ? String(no).padStart(4, "0") : "0001", bulbs = "", stars = "";
    for (var i = 0; i < 28; i++) { var a = i * Math.PI * 2 / 28; bulbs += '<circle cx="' + (80 + 67 * Math.cos(a)).toFixed(1) + '" cy="' + (78 + 67 * Math.sin(a)).toFixed(1) + '" r="2.6" style="animation-delay:' + ((i % 3) * .35).toFixed(2) + 's"/>'; }
    [[22, 26], [138, 26], [16, 112], [144, 112]].forEach(function (p, k) { stars += '<path class="glint" style="animation-delay:' + (k * .55) + 's" d="M' + p[0] + " " + (p[1] - 7) + "L" + (p[0] + 1.8) + " " + (p[1] - 1.8) + "L" + (p[0] + 7) + " " + p[1] + "L" + (p[0] + 1.8) + " " + (p[1] + 1.8) + "L" + p[0] + " " + (p[1] + 7) + "L" + (p[0] - 1.8) + " " + (p[1] + 1.8) + "L" + (p[0] - 7) + " " + p[1] + "L" + (p[0] - 1.8) + " " + (p[1] - 1.8) + 'z" fill="#FFF3C4"/>'; });
    return '<span class="emb founder" style="width:' + size + 'px;height:' + size + 'px" role="img" aria-label="First 1,000 Founding Player badge number ' + num + '"><svg viewBox="0 0 160 160">' +
      '<defs><radialGradient id="fdRim" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#A42A3B"/><stop offset="1" stop-color="#5E1420"/></radialGradient>' +
      '<linearGradient id="fdGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF3C4"/><stop offset=".4" stop-color="#E8C46A"/><stop offset=".7" stop-color="#C9963A"/><stop offset="1" stop-color="#8F6410"/></linearGradient></defs>' +
      '<circle cx="80" cy="78" r="76" fill="url(#fdRim)" stroke="#E8C46A" stroke-width="2"/><g class="bulbs">' + bulbs + "</g>" +
      '<circle cx="80" cy="78" r="56" fill="url(#fdGold)" stroke="#FFE7A3" stroke-width="1.5"/><circle cx="80" cy="78" r="46" fill="#221E28" stroke="#8F6410" stroke-width="1.5"/>' +
      '<circle cx="80" cy="78" r="41" fill="none" stroke="#C9A55A" stroke-width=".8" stroke-dasharray="2 3"/>' +
      '<path d="M80 40l2.4 4.9 5.4.8-3.9 3.8.9 5.4L80 52.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="#E8C46A"/>' +
      '<text x="80" y="68" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" font-size="9.5" letter-spacing="2.4" fill="#E3C77E">FIRST</text>' +
      '<text x="80" y="92" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="900" font-size="25" letter-spacing="-.5" fill="url(#fdGold)">1,000</text>' +
      '<text x="80" y="107" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="700" font-size="9.5" letter-spacing="1" fill="#FAF7F0">№ ' + num + "</text>" +
      '<path d="M18 124h124l-8 9 8 9H18l8-9z" fill="#8E2230" stroke="#E8C46A" stroke-width="1.3" stroke-linejoin="round"/><path d="M30 120h100v24H30z" fill="#9B1B30" stroke="#E8C46A" stroke-width="1.3"/>' +
      '<text x="80" y="136" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" font-size="8.6" letter-spacing="1.1" fill="#FFE7A3">FOUNDING PLAYER</text>' + stars + "</svg></span>";
  }
  var ORN = ["cherries", "seven", "clover", "bell", "goldbars", "horseshoe", "gem"];
  function paint(root) {
    root = root || document;
    root.querySelectorAll("[data-slot]:not([data-done])").forEach(function (el) { el.setAttribute("data-done", "1"); el.innerHTML = svg(el.getAttribute("data-slot"), +(el.getAttribute("data-size") || 18)); });
    root.querySelectorAll("[data-founder]:not([data-done])").forEach(function (el) { el.setAttribute("data-done", "1"); el.innerHTML = founder(el.getAttribute("data-founder"), +(el.getAttribute("data-size") || 96)); });
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
    ".emb{display:inline-block;filter:drop-shadow(0 14px 22px rgba(23,21,27,.35))}.emb svg{width:100%;height:100%;display:block;overflow:visible}" +
    ".emb .tile{fill:#221E28}.emb .tile-edge{fill:none;stroke:rgba(201,165,90,.55);stroke-width:1.2}" +
    ".emb .bulbs circle{fill:#FFE7A3;filter:drop-shadow(0 0 2.5px #FFD36B);animation:embchase 1.05s steps(1) infinite}" +
    ".emb .stones circle{fill:#fff;stroke:#E8C46A;stroke-width:.6;animation:embsparkle 2.4s ease-in-out infinite}" +
    "@keyframes embchase{0%{opacity:1}33%{opacity:.25}66%{opacity:.6}}" +
    "@keyframes embsparkle{0%,100%{opacity:.75}50%{opacity:1;filter:drop-shadow(0 0 3px #fff)}}" +
    ".emb .ray{stroke:#FFE7A3;stroke-width:2.2;stroke-linecap:round;animation:embray 1.6s ease-in-out infinite}" +
    "@keyframes embray{0%,100%{opacity:.15}50%{opacity:1}}" +
    ".emb .glint{transform-box:fill-box;transform-origin:center;animation:embglint 2.2s ease-in-out infinite}" +
    "@keyframes embglint{0%,70%,100%{opacity:0;transform:scale(.3)}80%{opacity:1;transform:scale(1)}}" +
    ".emb-heart .neon{animation:embflicker 2.6s linear 1 both,embhum 3.2s ease-in-out 2.6s infinite}" +
    "@keyframes embflicker{0%{opacity:.1}8%{opacity:1}10%{opacity:.25}14%{opacity:1}22%{opacity:.4}26%,100%{opacity:1}}" +
    "@keyframes embhum{0%,100%{opacity:1}50%{opacity:.86}}" +
    "@media (prefers-reduced-motion:reduce){.emb *{animation:none!important}}" +
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
  window.SFSlots = { svg: svg, strip: strip, paint: paint, meaning: MEAN, kinds: KINDS, neg: NEG, emblem: emblem, light: light, founder: founder };
  function boot() { paint(); landing(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
