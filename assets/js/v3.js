/* SuiteFace v3 Beta shell. Turned on per device with ?v3=1 (off with ?v3=0). Regroups the menu into three doors
   (Date, Play, Club), points the main button at Your Hand for signed-in players, puts Your Hand first on My table,
   and shows a sticky "Get dealt in" on phones. Everything else is the same site and the same accounts. */
(function () {
  var R = document.documentElement; if (!R.classList.contains("v3")) return;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  var nav = $("#nav"); if (!nav) return;

  // Reuse the existing links (so role rules keep working) and add a few new ones.
  function take(sel) { var a = nav.querySelector(sel); if (a) a.classList.add("v3keep"); return a; }
  function make(href, text, need) { var a = document.createElement("a"); a.href = href; a.textContent = text; if (need) { a.setAttribute("data-need", need); a.className = "clubnav"; a.setAttribute("data-v3member", ""); a.hidden = !(window.SF_LIVE && window.SF_LIVE.seated); } a.classList.add("v3keep"); return a; }
  function sub(a, small) { if (a && small) { var s = document.createElement("small"); s.textContent = small; a.appendChild(s); } return a; }
  var DOORS = [
    ["Date", [
      sub(take('a.navhand') || make("my-table.html#table", "Your Hand", "member"), "Your cards, ranked Ace to 2"),
      sub(make("how-it-works.html", "How you match"), "Suit, hand, play, Pair"),
      sub(take('a[href="find-your-suit.html"]') || make("find-your-suit.html", "Find your suit"), "Two-minute quiz"),
      sub(make("my-table.html#pairs", "Your Pairs", "member"), "Chat, video, Play Hand"),
      sub(make("winners.html", "Winners' Row"), "Real couples who met here")]],
    ["Play", [
      sub(take('a[href="tables.html"]') || make("tables.html", "Private Tables"), "Friends, groups and 18+"),
      sub(make("my-table.html#crews", "Double dates", "member"), "Team up with a friend"),
      sub(take('a[href="bluff-table.html"]') || make("bluff-table.html", "Bluff Table"), "Real player or House Card?")]],
    ["Club", [
      sub(take('a[href="my-table.html#lobby"]') || make("my-table.html#lobby", "Your Lobby", "member"), "Your card and stickers"),
      sub(take('a[href="membership.html"]') || make("membership.html", "Membership"), "$2.10 a month"),
      sub(take('a[href="membership.html#highroller"]'), "Verified high-limit room"),
      sub(make("my-table.html#friends", "Friends", "member"), "Who's online"),
      sub(take('a[href="joker-lobby.html"]'), "Make or challenge a Joker"),
      sub(take('a[href="card-backs.html"]'), "Wear what you love"),
      take('a[data-need="dealer"]'), take('a[data-need="pitboss"]'), take('a[data-need="owner"]')]]
  ];
  var frag = document.createDocumentFragment();
  DOORS.forEach(function (d, i) {
    var g = document.createElement("div"); g.className = "v3g";
    var b = document.createElement("button"); b.type = "button"; b.textContent = d[0]; b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", "v3p" + i);
    var p = document.createElement("div"); p.className = "v3p"; p.id = "v3p" + i;
    d[1].forEach(function (a) { if (a) p.appendChild(a); });
    g.appendChild(b); g.appendChild(p); frag.appendChild(g);
    b.addEventListener("click", function (e) { e.stopPropagation(); var open = !g.classList.contains("open"); $$(".v3g.open").forEach(function (x) { x.classList.remove("open"); x.firstChild.setAttribute("aria-expanded", "false"); }); if (open) { g.classList.add("open"); b.setAttribute("aria-expanded", "true"); } });
  });
  nav.insertBefore(frag, nav.firstChild);
  document.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest(".v3g")) $$(".v3g.open").forEach(function (x) { x.classList.remove("open"); x.firstChild.setAttribute("aria-expanded", "false"); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") $$(".v3g.open").forEach(function (x) { x.classList.remove("open"); x.firstChild.setAttribute("aria-expanded", "false"); x.firstChild.focus(); }); });

  // Main button: new visitors take the quiz; signed-in players go straight to their hand.
  function goTargets() { var live = !!(window.SF_LIVE && window.SF_LIVE.seated); $$("[data-v3go]").forEach(function (a) { a.href = live ? "my-table.html#table" : "find-your-suit.html"; a.textContent = live ? "See your hand" : "Get dealt in"; }); var s = $(".v3-sticky a"); if (s) { s.href = live ? "my-table.html#table" : "find-your-suit.html"; s.textContent = live ? "See your hand" : "Get dealt in"; } }
  document.addEventListener("sf:live", function () { setTimeout(function () { goTargets(); $$("[data-v3member]").forEach(function (a) { a.hidden = !(window.SF_LIVE && window.SF_LIVE.seated); }); }, 50); });

  // My table: Your Hand first, then your Lobby, then the profile form.
  if (document.body.getAttribute("data-page") === "club") {
    var t = $("#table"), first = $("main section[data-pg='club']") || $("section[data-pg='club']");
    if (t && first && t !== first) first.parentNode.insertBefore(t, first);
  }

  // Sticky button on phones, once the hero's own button is off screen.
  if (document.body.getAttribute("data-page") === "home") {
    var st = document.createElement("div"); st.className = "v3-sticky"; st.innerHTML = '<a href="find-your-suit.html">Get dealt in</a>'; document.body.appendChild(st);
    var hero = $(".v3-hero .v3-go");
    if (hero && "IntersectionObserver" in window) new IntersectionObserver(function (es) { var on = !es[0].isIntersecting; st.classList.toggle("on", on); document.body.classList.toggle("v3-hasSticky", on); }).observe(hero);
  }
  goTargets();

  // Beta switch, so anyone testing can go back to v2 in one tap.
  var pill = document.createElement("div"); pill.className = "v3-beta"; pill.setAttribute("role", "note"); pill.innerHTML = 'You\'re viewing the v3 Beta. <button type="button">Back to v2</button>';
  pill.querySelector("button").addEventListener("click", function () { try { localStorage.setItem("sf.v3", "0"); } catch (e) { } location.href = location.pathname + location.hash; });
  document.body.insertBefore(pill, document.body.firstChild);
  // Picking a page from the phone menu closes it.
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) { nav.classList.remove("open"); var mb = $("#menuBtn"); if (mb) mb.setAttribute("aria-expanded", "false"); } });
})();
