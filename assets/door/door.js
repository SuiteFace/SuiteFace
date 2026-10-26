/* SuiteFace door. Every page of the site ships encrypted (AES-GCM, key from the password via PBKDF2).
   This script shows Canal Street until the right password opens the page. A device that opened the door
   keeps the key for 30 days. The password itself is never stored here or anywhere on the site. */
(function () {
  "use strict";
  var S = window.SF_SEALED, STORE = "sf_door_v1", DAYS = 30;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var subtle = window.crypto && window.crypto.subtle;

  function b2u(b) { var s = atob(b), u = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; }
  function u2b(u) { var s = ""; for (var i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); }

  var pakoP = null;
  function loadPako() {
    if (pakoP) return pakoP;
    pakoP = new Promise(function (ok, no) {
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako_inflate.min.js";
      s.onload = ok; s.onerror = no; document.head.appendChild(s);
    });
    return pakoP;
  }
  function gunzip(u) {
    if (window.DecompressionStream) return new Response(new Blob([u]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
    return loadPako().then(function () { return window.pako.ungzip(u, { to: "string" }); });
  }
  function derive(pw) {
    return subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]).then(function (base) {
      return subtle.deriveBits({ name: "PBKDF2", salt: b2u(S.salt), iterations: S.iter, hash: "SHA-256" }, base, 256);
    }).then(function (b) { return new Uint8Array(b); });
  }
  function aes(raw) { return subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]); }
  function decRaw(key, blob) { return subtle.decrypt({ name: "AES-GCM", iv: blob.subarray(0, 12) }, key, blob.subarray(12)); }
  function dec(key, blob) { return decRaw(key, blob).then(function (b) { return gunzip(new Uint8Array(b)); }); }

  /* Right key: returns the AES key. Wrong key: rejects with "wrong". */
  function check(raw) {
    return aes(raw).then(function (key) {
      return decRaw(key, b2u(S.d)).then(function () { return key; }, function () { throw new Error("wrong"); });
    });
  }

  var ASSET = /<link[^>]+href="[^"]*assets\/css\/([\w.-]+)\.css(?:\?v=\w+)?"[^>]*>|<script[^>]+src="[^"]*assets\/js\/([\w.-]+)\.js(?:\?v=\w+)?"[^>]*><\/script>/g;
  function openPage(key) {
    return dec(key, b2u(S.d)).then(function (html) {
      var names = {};
      html.replace(ASSET, function (m, c, j) { names[c ? c + ".css" : j + ".js"] = 1; return m; });
      var list = Object.keys(names);
      return Promise.all(list.map(function (n) {
        return fetch("/assets/sealed/" + n + ".enc?v=" + S.v).then(function (r) {
          if (!r.ok) throw new Error("missing " + n);
          return r.arrayBuffer();
        }).then(function (b) { return dec(key, new Uint8Array(b)); });
      })).then(function (texts) {
        var got = {};
        list.forEach(function (n, i) { got[n] = texts[i]; });
        return html.replace(ASSET, function (m, c, j) {
          if (c) return "<style>" + got[c + ".css"].replace(/<\/style/gi, "<\\/style") + "</style>";
          return '<script src="' + URL.createObjectURL(new Blob([got[j + ".js"]], { type: "text/javascript" })) + '"></script>';
        });
      });
    }).then(function (html) { document.open(); document.write(html); document.close(); });
  }

  function saved() {
    try {
      var o = JSON.parse(localStorage.getItem(STORE) || "null");
      if (o && o.s === S.salt && Date.now() - o.t < DAYS * 864e5) return b2u(o.k);
    } catch (e) {}
    return null;
  }
  function save(raw) { try { localStorage.setItem(STORE, JSON.stringify({ k: u2b(raw), s: S.salt, t: Date.now() })); } catch (e) {} }
  function forget() { try { localStorage.removeItem(STORE); } catch (e) {} }

  /* ---------- The street ---------- */
  var SCENE = '<svg viewBox="0 0 1200 620" role="img" aria-labelledby="dSceneT">' +
  '<title id="dSceneT">Canal Street at night. A dumpling house, the SuiteFace storefront with a neon sign that reads: It was great seeing you at SOMBR, and a pizza shop open 24/7.</title>' +
  '<defs>' +
    '<linearGradient id="dSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#110D0B"/><stop offset="1" stop-color="#211A16"/></linearGradient>' +
    '<pattern id="dBrick" width="48" height="24" patternUnits="userSpaceOnUse"><rect width="48" height="24" fill="#3A2622"/><path d="M0 .5H48M0 12.5H48M24 0V12M.5 12V24M47.5 12V24" stroke="#2A1B18" stroke-width="1.4"/></pattern>' +
    '<pattern id="dBrick2" width="48" height="24" patternUnits="userSpaceOnUse"><rect width="48" height="24" fill="#33251F"/><path d="M0 .5H48M0 12.5H48M24 0V12M.5 12V24M47.5 12V24" stroke="#251A16" stroke-width="1.4"/></pattern>' +
    '<linearGradient id="dBronze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F1814"/><stop offset=".55" stop-color="#2C221C"/><stop offset="1" stop-color="#231B17"/></linearGradient>' +
    '<linearGradient id="dSteamy" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6DDAE"/><stop offset=".7" stop-color="#E0A866"/><stop offset="1" stop-color="#B9773E"/></linearGradient>' +
    '<linearGradient id="dPizzaIn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A2C1C"/><stop offset=".6" stop-color="#7A4A2A"/><stop offset="1" stop-color="#5A3620"/></linearGradient>' +
    '<linearGradient id="dWarmWin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2C27A"/><stop offset="1" stop-color="#C98A45"/></linearGradient>' +
    '<radialGradient id="dDoorGlow" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#FFE3A8"/><stop offset=".6" stop-color="#E9B465"/><stop offset="1" stop-color="#8A5A2C"/></radialGradient>' +
    '<radialGradient id="dPool" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#E2C47E" stop-opacity=".28"/><stop offset="1" stop-color="#E2C47E" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="dPoolR" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FF5A45" stop-opacity=".26"/><stop offset="1" stop-color="#FF5A45" stop-opacity="0"/></radialGradient>' +
    '<filter id="dGlow" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="6"/></filter>' +
    '<filter id="dSoft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>' +
    '<clipPath id="dDoorClip"><rect x="668" y="300" width="124" height="220"/></clipPath>' +
  '</defs>' +
  '<rect width="1200" height="620" fill="url(#dSky)"/>' +

  /* Left: dumpling house building */
  '<rect x="0" y="22" width="400" height="500" fill="url(#dBrick)"/>' +
  '<rect x="0" y="22" width="400" height="12" fill="#241713"/>' +
  '<g fill="#1A1210">' +
    '<rect x="38" y="64" width="58" height="72"/><rect x="128" y="64" width="58" height="72"/><rect x="218" y="64" width="58" height="72"/><rect x="308" y="64" width="58" height="72"/>' +
    '<rect x="38" y="160" width="58" height="66"/><rect x="128" y="160" width="58" height="66"/><rect x="218" y="160" width="58" height="66"/><rect x="308" y="160" width="58" height="66"/>' +
  '</g>' +
  '<g fill="url(#dWarmWin)" opacity=".85"><rect x="131" y="67" width="52" height="66"/><rect x="311" y="163" width="52" height="60"/><rect x="41" y="163" width="52" height="60" opacity=".55"/></g>' +
  /* fire escape */
  '<g stroke="#120D0B" stroke-width="3" fill="none">' +
    '<path d="M24 140H380M24 232H380"/><path d="M24 122H380M24 214H380" stroke-width="2"/>' +
    '<path d="M24 122V140M60 122V140M96 122V140M132 122V140M168 122V140M204 122V140M240 122V140M276 122V140M312 122V140M348 122V140M380 122V140"/>' +
    '<path d="M24 214V232M60 214V232M96 214V232M132 214V232M168 214V232M204 214V232M240 214V232M276 214V232M312 214V232M348 214V232M380 214V232"/>' +
    '<path d="M300 232L352 140M312 232L364 140" stroke-width="2"/>' +
    '<path d="M305 222H317M310 212H322M316 202H328M322 192H334M327 182H339M333 172H345M338 162H350M344 152H356" stroke-width="2"/>' +
  '</g>' +

  /* Center: SuiteFace building, dark bronze */
  '<rect x="400" y="0" width="400" height="522" fill="url(#dBronze)"/>' +
  '<g stroke="#382C24" stroke-width="2">' +
    '<path d="M420 20V236M446 20V236M754 20V236M780 20V236"/>' +
  '</g>' +
  '<rect x="400" y="0" width="400" height="10" fill="#C9A55A" opacity=".55"/>' +
  '<rect x="400" y="236" width="400" height="6" fill="#C9A55A" opacity=".55"/>' +
  /* neon */
  '<g class="d-flick" font-family="\'Tilt Neon\',Figtree,Arial,sans-serif" text-anchor="middle">' +
    '<g filter="url(#dGlow)" fill="#FFB24A" opacity=".95"><text x="600" y="108" font-size="38" textLength="340" lengthAdjust="spacingAndGlyphs">It was great seeing you</text><text x="600" y="176" font-size="54">at SOMBR.</text></g>' +
    '<g fill="#FFF4DE"><text x="600" y="108" font-size="38" textLength="340" lengthAdjust="spacingAndGlyphs">It was great seeing you</text><text x="600" y="176" font-size="54">at SOMBR.</text></g>' +
  '</g>' +
  '<path d="M486 200H714" stroke="#FFB24A" stroke-width="2" opacity=".5" filter="url(#dSoft)"/>' +

  /* Right: pizza building */
  '<rect x="800" y="34" width="400" height="488" fill="url(#dBrick2)"/>' +
  '<rect x="800" y="34" width="400" height="12" fill="#211814"/>' +
  '<g fill="#18110E">' +
    '<rect x="836" y="74" width="58" height="70"/><rect x="926" y="74" width="58" height="70"/><rect x="1016" y="74" width="58" height="70"/><rect x="1106" y="74" width="58" height="70"/>' +
    '<rect x="836" y="166" width="58" height="62"/><rect x="926" y="166" width="58" height="62"/><rect x="1016" y="166" width="58" height="62"/><rect x="1106" y="166" width="58" height="62"/>' +
  '</g>' +
  '<g fill="url(#dWarmWin)" opacity=".8"><rect x="1019" y="77" width="52" height="64"/><rect x="839" y="169" width="52" height="56" opacity=".6"/><rect x="1109" y="169" width="52" height="56"/></g>' +

  /* Sign bands */
  '<rect x="10" y="246" width="380" height="44" fill="#9E1F18"/><rect x="14" y="250" width="372" height="36" fill="none" stroke="#E2C47E" stroke-width="1.5"/>' +
  '<text x="72" y="278" font-size="25" fill="#F3D27E" text-anchor="middle" font-family="\'Noto Serif TC\',\'PingFang TC\',\'Songti TC\',serif" font-weight="700" textLength="74" lengthAdjust="spacingAndGlyphs">餃子館</text>' +
  '<text x="252" y="277" font-size="23" fill="#F6EBD7" text-anchor="middle" font-family="\'Big Shoulders Display\',Impact,sans-serif" font-weight="800" letter-spacing="1.5" textLength="236" lengthAdjust="spacingAndGlyphs">CANAL DUMPLING HOUSE</text>' +

  '<rect x="410" y="246" width="380" height="44" fill="#17110E"/><rect x="414" y="250" width="372" height="36" fill="none" stroke="#C9A55A" stroke-width="1.5"/>' +
  '<text x="600" y="279" font-size="30" fill="#E2C47E" text-anchor="middle" font-family="\'Big Shoulders Display\',Impact,sans-serif" font-weight="800" letter-spacing="7" textLength="220" lengthAdjust="spacingAndGlyphs">SUITEFACE</text>' +
  '<text x="452" y="276" font-size="16" fill="#C9A55A" text-anchor="middle">♠</text><text x="748" y="276" font-size="16" fill="#C9A55A" text-anchor="middle">♣</text>' +

  '<rect x="810" y="246" width="380" height="44" fill="#F1E6D0"/><rect x="814" y="250" width="372" height="36" fill="none" stroke="#C8342A" stroke-width="1.5"/>' +
  '<text x="924" y="279" font-size="28" fill="#C8342A" text-anchor="middle" font-family="\'Big Shoulders Display\',Impact,sans-serif" font-weight="800" letter-spacing="2" textLength="190" lengthAdjust="spacingAndGlyphs">CANAL ST PIZZA</text>' +
  '<text x="1110" y="275" font-size="13" fill="#3A2A20" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="700" letter-spacing="1" textLength="132" lengthAdjust="spacingAndGlyphs">SLICES · ALL NIGHT</text>' +

  /* Dumpling storefront */
  '<rect x="0" y="290" width="400" height="232" fill="#2B1C18"/>' +
  '<rect x="20" y="296" width="246" height="208" fill="#6B4A2E"/>' +
  '<rect x="26" y="302" width="234" height="196" fill="url(#dSteamy)"/>' +
  '<g class="d-lantern"><path d="M80 302V318" stroke="#5A2A1E" stroke-width="1.5"/><rect x="72" y="316" width="16" height="4" fill="#E2C47E"/><ellipse cx="80" cy="334" rx="18" ry="15" fill="#D8352A"/><path d="M80 320V348M68 324Q80 334 68 344M92 324Q80 334 92 344" stroke="#A82418" stroke-width="1.2" fill="none"/><rect x="72" y="347" width="16" height="4" fill="#E2C47E"/><path d="M80 351V366" stroke="#E2C47E" stroke-width="2"/></g>' +
  '<g class="d-lantern b"><path d="M206 302V318" stroke="#5A2A1E" stroke-width="1.5"/><rect x="198" y="316" width="16" height="4" fill="#E2C47E"/><ellipse cx="206" cy="334" rx="18" ry="15" fill="#D8352A"/><path d="M206 320V348M194 324Q206 334 194 344M218 324Q206 334 218 344" stroke="#A82418" stroke-width="1.2" fill="none"/><rect x="198" y="347" width="16" height="4" fill="#E2C47E"/><path d="M206 351V366" stroke="#E2C47E" stroke-width="2"/></g>' +
  '<rect x="26" y="452" width="234" height="46" fill="#5A3A22"/><rect x="26" y="452" width="234" height="4" fill="#7A5232"/>' +
  /* steamer stacks */
  '<g fill="#C9964F" stroke="#9A6E35" stroke-width="1">' +
    '<rect x="92" y="430" width="52" height="11"/><ellipse cx="118" cy="430" rx="26" ry="5"/><rect x="92" y="419" width="52" height="11"/><ellipse cx="118" cy="419" rx="26" ry="5"/><rect x="92" y="408" width="52" height="11"/><ellipse cx="118" cy="408" rx="26" ry="5"/>' +
    '<rect x="158" y="430" width="52" height="11"/><ellipse cx="184" cy="430" rx="26" ry="5"/><rect x="158" y="419" width="52" height="11"/><ellipse cx="184" cy="419" rx="26" ry="5"/>' +
    '<rect x="92" y="441" width="52" height="11"/><rect x="158" y="441" width="52" height="11"/>' +
  '</g>' +
  '<g class="d-steam" fill="none" stroke="#FFF6E6" stroke-width="5" stroke-linecap="round" opacity=".6"><path d="M112 398q-8-12 0-24t0-24"/><path d="M126 398q8-12 0-24t0-24"/><path d="M186 408q-8-12 0-24t0-24"/></g>' +
  '<text x="143" y="388" font-size="13" fill="#9E1F18" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="700" letter-spacing=".5">PORK &amp; CHIVE · 8 FOR $5</text>' +
  '<rect x="282" y="306" width="104" height="216" fill="#6B4A2E"/><rect x="290" y="314" width="88" height="200" fill="#1A1311"/><rect x="290" y="314" width="88" height="200" fill="url(#dSteamy)" opacity=".18"/>' +
  '<rect x="364" y="404" width="5" height="34" rx="2" fill="#C9A55A"/>' +
  '<rect x="300" y="452" width="58" height="20" fill="#F1E6D0"/><text x="329" y="466" font-size="10" fill="#9E1F18" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800">CASH ONLY</text>' +

  /* SuiteFace storefront */
  '<rect x="400" y="290" width="400" height="232" fill="#1F1814"/>' +
  '<rect x="404" y="294" width="252" height="217" fill="#C9A55A"/><rect x="410" y="300" width="240" height="205" fill="#17382B"/>' +
  '<rect x="662" y="294" width="136" height="228" fill="#C9A55A"/>' +
  '<rect class="d-doorlight" x="668" y="300" width="124" height="222" fill="url(#dDoorGlow)"/>' +
  '<rect x="668" y="300" width="124" height="222" fill="#2A221D"/>' +
  '<g clip-path="url(#dDoorClip)"><g class="d-shutter">' +
    '<rect x="668" y="300" width="124" height="222" fill="#4E4741"/>' +
    '<path stroke="#3B3530" stroke-width="2" d="M668 309H792M668 318H792M668 327H792M668 336H792M668 345H792M668 354H792M668 363H792M668 372H792M668 381H792M668 390H792M668 399H792M668 408H792M668 417H792M668 426H792M668 435H792M668 444H792M668 453H792M668 462H792M668 471H792M668 480H792M668 489H792M668 498H792M668 507H792"/>' +
    '<rect x="668" y="510" width="124" height="12" fill="#3A332E"/><rect x="718" y="512" width="24" height="6" rx="2" fill="#8C8378"/>' +
    '<rect x="688" y="390" width="84" height="36" rx="3" fill="#EADFC8"/>' +
    '<text x="730" y="405" font-size="11" fill="#2A1D12" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" letter-spacing="1.5">PRIVATE</text>' +
    '<text x="730" y="419" font-size="11" fill="#2A1D12" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="800" letter-spacing="1.5">PREVIEW</text>' +
  '</g></g>' +

  /* Pizza storefront */
  '<rect x="800" y="290" width="400" height="232" fill="#2A211D"/>' +
  '<rect x="814" y="296" width="252" height="208" fill="#8C8378"/>' +
  '<rect x="820" y="302" width="240" height="196" fill="url(#dPizzaIn)"/>' +
  '<g stroke="#2A1A12" stroke-width="2"><path d="M880 302V404M960 302V404M1030 302V404"/></g>' +
  '<g fill="#FFC778" opacity=".35" filter="url(#dSoft)"><path d="M864 404H896L914 440H846Z"/><path d="M944 404H976L994 440H926Z"/><path d="M1014 404H1046L1064 440H996Z"/></g>' +
  '<g fill="#3A2A20"><rect x="866" y="400" width="28" height="6"/><rect x="946" y="400" width="28" height="6"/><rect x="1016" y="400" width="28" height="6"/></g>' +
  '<rect x="820" y="448" width="240" height="50" fill="#9C948A"/><rect x="820" y="448" width="240" height="3" fill="#C4BCB2"/>' +
  '<g>' +
    '<ellipse cx="880" cy="446" rx="36" ry="10" fill="#D9A25B"/><ellipse cx="880" cy="445" rx="31" ry="8" fill="#F2C94C"/>' +
    '<ellipse cx="960" cy="446" rx="36" ry="10" fill="#D9A25B"/><ellipse cx="960" cy="445" rx="31" ry="8" fill="#F2C94C"/><path d="M960 445L991 445A31 8 0 0 1 975 452Z" fill="#9C948A"/>' +
    '<ellipse cx="1030" cy="446" rx="36" ry="10" fill="#D9A25B"/><ellipse cx="1030" cy="445" rx="31" ry="8" fill="#F2C94C"/>' +
    '<g fill="#B3261E"><circle cx="868" cy="443" r="3"/><circle cx="886" cy="447" r="3"/><circle cx="895" cy="442" r="3"/><circle cx="947" cy="444" r="3"/><circle cx="962" cy="441" r="3"/><circle cx="1018" cy="446" r="3"/><circle cx="1036" cy="441" r="3"/><circle cx="1045" cy="447" r="3"/></g>' +
  '</g>' +
  '<g class="d-flick" font-family="\'Tilt Neon\',Figtree,Arial,sans-serif" text-anchor="middle">' +
    '<text x="940" y="352" font-size="42" fill="#FF5A45" filter="url(#dGlow)">PIZZA</text><text x="940" y="352" font-size="42" fill="#FFD9CF">PIZZA</text>' +
  '</g>' +
  '<g class="d-flick2" font-family="\'Tilt Neon\',Figtree,Arial,sans-serif" text-anchor="middle">' +
    '<text x="940" y="388" font-size="22" fill="#FFB24A" filter="url(#dGlow)">OPEN 24/7</text><text x="940" y="388" font-size="22" fill="#FFF0D6">OPEN 24/7</text>' +
  '</g>' +
  '<rect x="1078" y="306" width="104" height="216" fill="#8C8378"/><rect x="1086" y="314" width="88" height="200" fill="#1E1714"/><rect x="1086" y="314" width="88" height="200" fill="url(#dPizzaIn)" opacity=".35"/>' +
  '<rect x="1094" y="404" width="5" height="34" rx="2" fill="#C4BCB2"/>' +

  /* Sidewalk, curb, street */
  '<rect x="0" y="522" width="1200" height="68" fill="#3A322D"/>' +
  '<g stroke="#2E2723" stroke-width="2"><path d="M100 522V590M240 522V590M380 522V590M520 522V590M660 522V590M800 522V590M940 522V590M1080 522V590M0 556H1200"/></g>' +
  '<ellipse cx="600" cy="548" rx="190" ry="20" fill="url(#dPool)"/>' +
  '<ellipse cx="940" cy="548" rx="150" ry="16" fill="url(#dPoolR)"/>' +
  '<ellipse cx="143" cy="548" rx="130" ry="14" fill="url(#dPool)" opacity=".7"/>' +
  '<rect x="0" y="588" width="1200" height="10" fill="#5A514A"/>' +
  '<rect x="0" y="598" width="1200" height="22" fill="#1E1916"/>' +
  '<ellipse cx="1000" cy="612" rx="44" ry="6" fill="#2C2521" stroke="#3A322D"/>' +
  '<g class="d-steam" fill="none" stroke="#EDE3D3" stroke-width="10" stroke-linecap="round" opacity=".35" filter="url(#dSoft)"><path d="M988 606q-10-16 0-32t0-32"/><path d="M1006 606q10-16 0-32t0-32"/><path d="M996 606q-6-16 4-32t-4-32"/></g>' +

  /* Street sign */
  '<rect x="397" y="352" width="6" height="238" fill="#2B302A"/>' +
  '<rect x="300" y="330" width="100" height="26" rx="3" fill="#14603F"/><rect x="303" y="333" width="94" height="20" rx="2" fill="none" stroke="#F6EBD7" stroke-width="1"/>' +
  '<text x="350" y="348" font-size="14" fill="#F6EBD7" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-weight="700" letter-spacing=".5">Canal St</text>' +
  '</svg>';

  var PANEL =
  '<main class="d-panel"><div class="d-card">' +
    '<p class="d-eyebrow">Private preview</p>' +
    '<h1 class="d-title">The door is locked</h1>' +
    '<p class="d-sub">SuiteFace opens to the public soon. If you have the password, come on in.</p>' +
    '<form class="d-form" id="dForm" autocomplete="off" novalidate>' +
      '<label for="dPass">Password</label>' +
      '<div class="d-row"><input class="d-input" id="dPass" name="password" type="password" autocomplete="current-password" autocapitalize="off" spellcheck="false" required>' +
      '<button class="d-btn" id="dGo" type="submit">Open the door</button></div>' +
      '<p class="d-msg" id="dMsg" role="status" aria-live="polite"></p>' +
    '</form>' +
    '<p class="d-foot">Questions? <b>help@suiteface.com</b></p>' +
  '</div></main>';

  /* ---------- Plinko: the chip always lands on Come back soon ---------- */
  function Plinko(cv) {
    var W = 480, H = 410, dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = W * dpr; cv.height = H * dpr;
    var g = cv.getContext("2d"); g.scale(dpr, dpr);
    var CX = 240, DX = 60, Y0 = 52, DY = 38, ROWS = 6, PR = 5, CR = 14, BY = 286;
    var lit = false, busy = false, chipAt = null, rot = 0;
    function peg(r, k) { return { x: CX + (k - r / 2) * DX, y: Y0 + r * DY }; }
    var DISPLAY = "'Big Shoulders Display',Impact,sans-serif";
    function board() {
      var gr = g.createRadialGradient(CX, 150, 30, CX, 200, 340);
      gr.addColorStop(0, "#215040"); gr.addColorStop(1, "#11291F");
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
      g.strokeStyle = "rgba(226,196,126,.25)"; g.lineWidth = 1; g.strokeRect(8.5, 8.5, W - 17, H - 17);
      for (var r = 0; r < ROWS; r++) for (var k = 0; k <= r; k++) {
        var p = peg(r, k);
        g.beginPath(); g.arc(p.x, p.y, PR, 0, 7); g.fillStyle = "#C9A55A"; g.fill();
        g.beginPath(); g.arc(p.x - 1.5, p.y - 1.5, 1.8, 0, 7); g.fillStyle = "#F6E2A8"; g.fill();
      }
      var row6 = [-3, -2, -1, 1, 2, 3];
      row6.forEach(function (j) { var x = CX + j * DX; if (x > 20 && x < W - 20) { g.beginPath(); g.arc(x, Y0 + ROWS * DY - 8, PR - 1, 0, 7); g.fillStyle = "rgba(201,165,90,.55)"; g.fill(); } });
      if (lit) {
        var lg = g.createRadialGradient(CX, BY + 60, 10, CX, BY + 60, 110);
        lg.addColorStop(0, "rgba(255,214,140,.45)"); lg.addColorStop(1, "rgba(255,214,140,0)");
        g.fillStyle = lg; g.fillRect(CX - 70, BY, 140, H - BY - 10);
      }
      g.fillStyle = "#C9A55A";
      g.fillRect(CX - 72, BY, 3, H - BY - 10); g.fillRect(CX + 69, BY, 3, H - BY - 10);
      g.fillRect(14, H - 13, W - 28, 3);
      g.textAlign = "center"; g.textBaseline = "middle";
      g.font = "800 26px " + DISPLAY; g.fillStyle = "rgba(246,235,215,.5)";
      g.fillText("♠  ♣", 90, BY + 56); g.fillText("♥  ♦", W - 90, BY + 56);
      g.fillStyle = lit ? "#FFE7B0" : "rgba(246,235,215,.78)";
      g.font = "800 22px " + DISPLAY;
      g.fillText("COME BACK", CX, BY + 62); g.fillText("SOON", CX, BY + 88);
    }
    function chip(x, y) {
      g.save(); g.translate(x, y); g.rotate(rot);
      g.beginPath(); g.arc(0, 2, CR, 0, 7); g.fillStyle = "rgba(0,0,0,.28)"; g.fill();
      g.beginPath(); g.arc(0, 0, CR, 0, 7); g.fillStyle = "#B8291F"; g.fill();
      g.strokeStyle = "#F6EBD7"; g.lineWidth = 4;
      for (var i = 0; i < 6; i++) { g.beginPath(); g.arc(0, 0, CR - 2, i * Math.PI / 3 - .18, i * Math.PI / 3 + .18); g.stroke(); }
      g.beginPath(); g.arc(0, 0, CR - 5.5, 0, 7); g.strokeStyle = "#E2C47E"; g.lineWidth = 1.4; g.stroke();
      g.beginPath(); g.arc(0, 0, CR - 7, 0, 7); g.fillStyle = "#9E1F18"; g.fill();
      g.restore();
    }
    function frame() { board(); if (chipAt) chip(chipAt.x, chipAt.y); }
    function drop(done) {
      if (busy) return; busy = true; lit = false;
      var dirs = [0, 0, 0, 1, 1, 1];
      for (var i = dirs.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = dirs[i]; dirs[i] = dirs[j]; dirs[j] = t; }
      var pts = [{ x: CX + (Math.random() - .5) * 8, y: -CR - 4 }], k = 0;
      for (var r = 0; r < ROWS; r++) { var p = peg(r, k); pts.push({ x: p.x + (dirs[r] ? 3 : -3), y: p.y - PR - CR + 1 }); k += dirs[r]; }
      pts.push({ x: CX, y: BY + 24 });
      var segs = [];
      for (var s = 0; s < pts.length - 1; s++) segs.push({ a: pts[s], b: pts[s + 1], d: s === 0 ? 430 : s === pts.length - 2 ? 380 : 250, kind: s === 0 || s === pts.length - 2 ? "fall" : "hop" });
      if (reduce) { chipAt = pts[pts.length - 1]; lit = true; frame(); busy = false; if (done) done(); return; }
      var si = 0, t0 = null;
      function step(now) {
        if (t0 === null) t0 = now;
        var sg = segs[si], u = Math.min(1, (now - t0) / sg.d), x, y;
        if (sg.kind === "fall") { x = sg.a.x + (sg.b.x - sg.a.x) * u; y = sg.a.y + (sg.b.y - sg.a.y) * u * u; }
        else { x = sg.a.x + (sg.b.x - sg.a.x) * u; y = sg.a.y + (sg.b.y - sg.a.y) * u - 15 * Math.sin(Math.PI * u); }
        rot += (x - (chipAt ? chipAt.x : x)) / CR;
        chipAt = { x: x, y: y }; frame();
        if (u >= 1) { si++; t0 = now; }
        if (si < segs.length) requestAnimationFrame(step);
        else settle();
      }
      function settle() {
        var base = chipAt.y, t1 = null;
        lit = true;
        requestAnimationFrame(function b(now) {
          if (t1 === null) t1 = now;
          var u = Math.min(1, (now - t1) / 260);
          chipAt = { x: CX, y: base - 9 * Math.sin(Math.PI * u) };
          frame();
          if (u < 1) requestAnimationFrame(b); else { busy = false; if (done) done(); }
        });
      }
      requestAnimationFrame(step);
    }
    frame();
    return { drop: drop };
  }

  function showDoor(note) {
    document.title = "SuiteFace";
    document.body.className = "door";
    document.body.innerHTML = '<div class="d-wrap" id="dWrap"><div class="d-street" id="dStreet"><div class="d-scene">' + SCENE +
      '<canvas class="d-plinko" id="dPlinko" aria-label="SuiteFace window. A chip drops and lands on Come back soon. Tap to drop it again." role="img"></canvas>' +
      '</div><span class="d-hint" id="dHint">Swipe to look down the block</span></div>' + PANEL + '<div class="d-fade"></div></div>';
    var street = document.getElementById("dStreet"), wrap = document.getElementById("dWrap");
    var centre = function () { street.scrollLeft = (street.scrollWidth - street.clientWidth) / 2; };
    centre(); requestAnimationFrame(centre);
    street.addEventListener("scroll", function () { var h = document.getElementById("dHint"); if (h) h.style.opacity = "0"; }, { passive: true });
    var board = Plinko(document.getElementById("dPlinko"));
    document.getElementById("dPlinko").addEventListener("click", function () { board.drop(); });
    setTimeout(function () { board.drop(); }, reduce ? 0 : 700);
    var form = document.getElementById("dForm"), input = document.getElementById("dPass"), go = document.getElementById("dGo"), msg = document.getElementById("dMsg");
    function say(t, no) { msg.textContent = t; msg.className = "d-msg" + (no ? " no" : ""); }
    if (note) say(note, true);
    if (!subtle) { say("Open this page at https://suiteface.com to enter.", true); go.disabled = true; return; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pw = input.value;
      if (!pw) { say("Enter the password.", true); input.focus(); return; }
      go.disabled = true; say("Checking…");
      var raw;
      derive(pw).then(function (r) { raw = r; return check(raw); }).then(function (key) {
        save(raw); say("Welcome in.");
        wrap.classList.add("d-open");
        return new Promise(function (ok) { setTimeout(ok, reduce ? 0 : 1400); }).then(function () { return openPage(key); });
      }).catch(function (err) {
        go.disabled = false;
        if (err && err.message === "wrong") {
          say("Not tonight. Come back soon.", true);
          form.classList.remove("d-shake"); void form.offsetWidth; form.classList.add("d-shake");
          input.select(); board.drop();
        } else {
          wrap.classList.remove("d-open");
          say("The door stuck. Check your connection and try again.", true);
        }
      });
    });
  }

  if (!S) return;
  var k = subtle && saved();
  if (k) {
    check(k).then(openPage).catch(function (err) { if (err && err.message === "wrong") forget(); showDoor(err && err.message !== "wrong" ? "The door stuck. Check your connection and try again." : ""); });
  } else showDoor();
})();
