(() => {
    "use strict";
    var e, a, t, r, d = {},
        l = {};

    function i(e) {
        if (l[e]) return l[e].exports;
        var a = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return d[e].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
    }
    i.m = d, i.n = e => { var a = e && e.__esModule ? () => e.default : () => e; return i.d(a, { a }), a }, i.d = (e, a) => { for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: a[t] }) }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => (({
        216: "statistics-tab",
        1053: "player-statistics-updater",
        1216: "vendors",
        1316: "current-tennis-game",
        1452: "kabaddi-detail",
        1510: "lineups-updater",
        1535: "ballByBallTab",
        1578: "tournamentTable",
        1585: "videoHighlightTab",
        1611: "news-tab",
        1640: "ballByBall-updater",
        1692: "rugby-league-detail",
        1800: "baseball-pitchers",
        1902: "liveTable",
        2060: "netball-detail",
        2167: "detail",
        2377: "newsTab",
        2539: "photoreportTab",
        2597: "tvUsersOverviewModal",
        2626: "floorball-detail",
        2720: "statisticsTab",
        2746: "UpcomingDrawStartTimeFormatter",
        2902: "basketball-detail",
        3262: "darts-match-history-tab",
        3304: "myFs",
        3310: "current-darts-leg",
        3587: "boxing-detail",
        3692: "liveCommentary-updater",
        3694: "bandy-detail",
        3774: "detailForever",
        3804: "beach-soccer-detail",
        3996: "photo-report-tab",
        4065: "field-hockey-detail",
        4688: "match-history-tab",
        4691: "oddsTab",
        4770: "aussie-rules-detail",
        4963: "h2hTab",
        5262: "tennis-detail",
        5281: "pesapallo-detail",
        5381: "water-polo-detail",
        5420: "lsrecombee",
        5520: "tv-users-overview-react",
        6006: "scratches-updater",
        6054: "modules",
        6145: "soccer-detail",
        6147: "snooker-detail",
        6240: "darts-detail",
        6275: "american-football-detail",
        6395: "beach-volleyball-detail",
        6670: "hockey-detail",
        6758: "standings",
        6827: "detailParticipant",
        6875: "esport-detail",
        6915: "table-tennis-detail",
        6950: "dartsStatistics-updater",
        7398: "rugby-union-detail",
        7578: "audio-comments-react",
        7717: "mma-detail",
        7723: "preview-tab",
        8112: "LangBoxModule",
        8489: "volleyball-detail",
        8668: "matchHistoryTab",
        8672: "fallOfWicketsTab",
        8716: "loader",
        8765: "futsal-detail",
        8859: "badminton-detail",
        9022: "fallofwickets-updater",
        9170: "baseball-detail",
        9310: "handball-detail",
        9403: "video-highlight-tab",
        9417: "cricket-detail",
        9520: "lineupsTab"
    }[e] || e) + "." + { 216: "ad6b260", 953: "69a0a96", 1053: "09c4a2c", 1102: "c630f52", 1216: "944d793", 1316: "a1037aa", 1452: "45c98cb", 1510: "71fa664", 1535: "c78b0f5", 1578: "2f769ac", 1585: "efe80c2", 1611: "4b19736", 1640: "8f92c65", 1692: "d25d5a0", 1800: "6425713", 1902: "6c1b3e6", 2060: "2882fac", 2167: "e5cd626", 2377: "f93c6d2", 2539: "24c7bc2", 2597: "cc72cfa", 2626: "32cf9f6", 2720: "eb51dc6", 2746: "42c98e2", 2869: "7fd91b4", 2902: "64d19ce", 2926: "5ac1172", 3111: "6733f1e", 3262: "05fd10b", 3304: "a472ec0", 3310: "79296a7", 3587: "012fcc1", 3692: "6971a11", 3694: "85b15ac", 3774: "410ecd5", 3804: "4e0e408", 3922: "108e861", 3996: "2605938", 4065: "5073ff8", 4300: "ef4d481", 4688: "279fe40", 4691: "c98a5b0", 4770: "f714278", 4963: "5a29a05", 5262: "9f95984", 5281: "6aecb6a", 5381: "db381af", 5420: "3bdffaf", 5520: "cfc88f7", 5655: "7bf26b3", 6006: "e785392", 6054: "7e292a7", 6145: "d0a3561", 6147: "17db219", 6240: "cbb5a65", 6275: "8b0b905", 6395: "31bce2b", 6670: "dfd9f1b", 6756: "794b263", 6758: "2e579cf", 6827: "d32d3bd", 6875: "35898c7", 6915: "827f0de", 6950: "b5452e2", 7398: "24884d0", 7578: "74dd89c", 7717: "fe9ffea", 7723: "81ec12a", 7805: "7c33839", 8112: "62f0012", 8489: "ff88e14", 8668: "af3cd4f", 8672: "fd89a05", 8716: "d534d2f", 8765: "92a30a5", 8859: "c815b83", 9022: "280cd46", 9170: "5fb8001", 9310: "2668ba3", 9403: "dac14f7", 9417: "7822dfe", 9520: "7bc2de1" }[e] + ".js"), i.miniCssF = e => (({ 216: "statistics-tab", 361: "fontFlash", 378: "user", 416: "lstvPayment", 520: "lstv", 587: "playerProfile", 882: "searchWindow", 995: "commercial", 1014: "tv", 1045: "closedApp", 1053: "player-statistics-updater", 1216: "vendors", 1316: "current-tennis-game", 1354: "mainPageScripts", 1452: "kabaddi-detail", 1510: "lineups-updater", 1535: "ballByBallTab", 1565: "variables", 1578: "tournamentTable", 1585: "videoHighlightTab", 1611: "news-tab", 1640: "ballByBall-updater", 1692: "rugby-league-detail", 1716: "personalData", 1720: "faq", 1800: "baseball-pitchers", 1902: "liveTable", 1909: "notifications", 2060: "netball-detail", 2167: "detail", 2377: "newsTab", 2392: "banner", 2433: "livetablenonresponsive", 2515: "stream", 2539: "photoreportTab", 2589: "additional", 2597: "tvUsersOverviewModal", 2626: "floorball-detail", 2720: "statisticsTab", 2746: "UpcomingDrawStartTimeFormatter", 2866: "match_odds_preview", 2902: "basketball-detail", 3262: "darts-match-history-tab", 3304: "myFs", 3310: "current-darts-leg", 3413: "container", 3587: "boxing-detail", 3666: "runtime", 3692: "liveCommentary-updater", 3694: "bandy-detail", 3764: "constants", 3771: "lang_box_module", 3774: "detailForever", 3804: "beach-soccer-detail", 3996: "photo-report-tab", 4065: "field-hockey-detail", 4500: "myTeamsMenu", 4688: "match-history-tab", 4691: "oddsTab", 4770: "aussie-rules-detail", 4799: "footerPages", 4839: "_layout", 4963: "h2hTab", 5262: "tennis-detail", 5281: "pesapallo-detail", 5381: "water-polo-detail", 5420: "lsrecombee", 5520: "tv-users-overview-react", 5697: "leftMenuCategory", 5905: "tvLandingPageChoice", 6006: "scratches-updater", 6054: "modules", 6145: "soccer-detail", 6147: "snooker-detail", 6240: "darts-detail", 6275: "american-football-detail", 6395: "beach-volleyball-detail", 6670: "hockey-detail", 6750: "commercial_dk", 6758: "standings", 6827: "detailParticipant", 6875: "esport-detail", 6915: "table-tennis-detail", 6950: "dartsStatistics-updater", 7097: "livetableresponsive", 7398: "rugby-union-detail", 7411: "box_over_content", 7520: "tabs", 7578: "audio-comments-react", 7717: "mma-detail", 7723: "preview-tab", 8112: "LangBoxModule", 8173: "tvLandingPage", 8489: "volleyball-detail", 8648: "tvPlayer", 8668: "matchHistoryTab", 8672: "fallOfWicketsTab", 8716: "loader", 8721: "cookie", 8765: "futsal-detail", 8859: "badminton-detail", 8867: "android", 9019: "header", 9022: "fallofwickets-updater", 9170: "baseball-detail", 9310: "handball-detail", 9348: "footer", 9375: "unsupported", 9403: "video-highlight-tab", 9417: "cricket-detail", 9520: "lineupsTab", 9539: "detailcss" }[e] || e) + "." + { 216: "ad6b260", 361: "07bb30b", 378: "ae04a58", 416: "65db6d4", 520: "8d96097", 587: "950f989", 882: "de37d00", 953: "69a0a96", 995: "c4be961", 1014: "6e50a01", 1045: "fed4438", 1053: "09c4a2c", 1102: "c630f52", 1216: "944d793", 1316: "a1037aa", 1354: "40dcf4b", 1452: "45c98cb", 1510: "71fa664", 1535: "c78b0f5", 1565: "301ca3d", 1578: "2f769ac", 1585: "efe80c2", 1611: "4b19736", 1640: "8f92c65", 1692: "d25d5a0", 1716: "fd5f7cb", 1720: "8b7e287", 1800: "6425713", 1902: "6c1b3e6", 1909: "e91484e", 2060: "2882fac", 2167: "e5cd626", 2377: "f93c6d2", 2392: "82ee19e", 2433: "5f1eff8", 2515: "63c3f1a", 2539: "24c7bc2", 2589: "427330c", 2597: "cc72cfa", 2626: "32cf9f6", 2720: "eb51dc6", 2746: "42c98e2", 2866: "7078ff1", 2869: "7fd91b4", 2902: "64d19ce", 2926: "5ac1172", 3111: "6733f1e", 3262: "05fd10b", 3304: "a472ec0", 3310: "79296a7", 3413: "ea6c011", 3587: "012fcc1", 3666: "undefin", 3692: "6971a11", 3694: "85b15ac", 3764: "d5b253f", 3771: "9080b67", 3774: "410ecd5", 3804: "4e0e408", 3922: "108e861", 3996: "2605938", 4065: "5073ff8", 4300: "ef4d481", 4500: "523ffcf", 4688: "279fe40", 4691: "c98a5b0", 4770: "f714278", 4799: "f710499", 4839: "2720067", 4963: "5a29a05", 5262: "9f95984", 5281: "6aecb6a", 5381: "db381af", 5420: "3bdffaf", 5520: "cfc88f7", 5655: "7bf26b3", 5697: "debb416", 5905: "e762489", 6006: "e785392", 6054: "7e292a7", 6145: "d0a3561", 6147: "17db219", 6240: "cbb5a65", 6275: "8b0b905", 6395: "31bce2b", 6670: "dfd9f1b", 6750: "69a39fc", 6756: "794b263", 6758: "2e579cf", 6827: "d32d3bd", 6875: "35898c7", 6915: "827f0de", 6950: "b5452e2", 7097: "8af7032", 7398: "24884d0", 7411: "1e36646", 7520: "137a4ac", 7578: "74dd89c", 7717: "fe9ffea", 7723: "81ec12a", 7805: "7c33839", 8112: "62f0012", 8173: "c6f16dc", 8489: "ff88e14", 8648: "0a4c0aa", 8668: "af3cd4f", 8672: "fd89a05", 8716: "d534d2f", 8721: "8a6009e", 8765: "92a30a5", 8859: "c815b83", 8867: "3b4470b", 9019: "1d20130", 9022: "280cd46", 9170: "5fb8001", 9310: "2668ba3", 9348: "e75d9e9", 9375: "5bb0c8a", 9403: "dac14f7", 9417: "7822dfe", 9520: "7bc2de1", 9539: "6a16a30" }[e] + ".css"), i.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", { enumerable: !0, set: () => { throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id) } }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), e = {}, a = "flashscore:", i.l = (t, r, d) => { if (e[t]) e[t].push(r);
        else { var l, o; if (void 0 !== d)
                for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) { var n = c[s]; if (n.getAttribute("src") == t || n.getAttribute("data-webpack") == a + d) { l = n; break } }
            l || (o = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.setAttribute("data-webpack", a + d), l.src = t), e[t] = [r]; var b = (a, r) => { l.onerror = l.onload = null, clearTimeout(f); var d = e[t]; if (delete e[t], l.parentNode && l.parentNode.removeChild(l), d && d.forEach((e => e(r))), a) return a(r) },
                f = setTimeout(b.bind(null, void 0, { type: "timeout", target: l }), 12e4);
            l.onerror = b.bind(null, l.onerror), l.onload = b.bind(null, l.onload), o && document.head.appendChild(l) } }, i.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.p = "/res/_fs/build/", t = e => new Promise(((a, t) => {
        var r = i.miniCssF(e),
            d = i.p + r;
        if (((e, a) => { for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) { var d = (i = t[r]).getAttribute("data-href") || i.getAttribute("href"); if ("stylesheet" === i.rel && (d === e || d === a)) return i } var l = document.getElementsByTagName("style"); for (r = 0; r < l.length; r++) { var i; if ((d = (i = l[r]).getAttribute("data-href")) === e || d === a) return i } })(r, d)) return a();
        ((e, a, t, r) => {
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = l => {
                if (d.onerror = d.onload = null, "load" === l.type) t();
                else {
                    var i = l && ("load" === l.type ? "missing" : l.type),
                        o = l && l.target && l.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = o, d.parentNode.removeChild(d), r(c)
                }
            }, d.href = a, document.head.appendChild(d)
        })(e, d, a, t)
    })), r = { 3666: 0 }, i.f.miniCss = (e, a) => { r[e] ? a.push(r[e]) : 0 !== r[e] && { 1452: 1, 1535: 1, 1578: 1, 1585: 1, 1692: 1, 1902: 1, 2060: 1, 2167: 1, 2377: 1, 2539: 1, 2597: 1, 2626: 1, 2720: 1, 2902: 1, 2926: 1, 3304: 1, 3587: 1, 3692: 1, 3694: 1, 3774: 1, 3804: 1, 3922: 1, 4065: 1, 4300: 1, 4691: 1, 4770: 1, 4963: 1, 5262: 1, 5281: 1, 5381: 1, 5520: 1, 6054: 1, 6145: 1, 6147: 1, 6240: 1, 6275: 1, 6395: 1, 6670: 1, 6758: 1, 6875: 1, 6915: 1, 7398: 1, 7578: 1, 7717: 1, 8489: 1, 8672: 1, 8765: 1, 8859: 1, 9170: 1, 9310: 1, 9417: 1, 9520: 1 }[e] && a.push(r[e] = t(e).then((() => { r[e] = 0 }), (a => { throw delete r[e], a }))) }, (() => { var e = { 3666: 0 },
            a = [];
        i.f.j = (a, t) => { var r = i.o(e, a) ? e[a] : void 0; if (0 !== r)
                if (r) t.push(r[2]);
                else { var d = new Promise(((t, d) => { r = e[a] = [t, d] }));
                    t.push(r[2] = d); var l = i.p + i.u(a),
                        o = new Error;
                    i.l(l, (t => { if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) { var d = t && ("load" === t.type ? "missing" : t.type),
                                l = t && t.target && t.target.src;
                            o.message = "Loading chunk " + a + " failed.\n(" + d + ": " + l + ")", o.name = "ChunkLoadError", o.type = d, o.request = l, r[1](o) } }), "chunk-" + a) } }; var t = () => {};

        function r() { for (var t, r = 0; r < a.length; r++) { for (var d = a[r], l = !0, o = 1; o < d.length; o++) { var c = d[o];
                    0 !== e[c] && (l = !1) }
                l && (a.splice(r--, 1), t = i(i.s = d[0])) } return 0 === a.length && (i.x(), i.x = () => {}), t }
        i.x = () => { i.x = () => {}, l = l.slice(); for (var e = 0; e < l.length; e++) d(l[e]); return (t = r)() }; var d = r => { for (var d, l, [c, s, n, b] = r, f = 0, u = []; f < c.length; f++) l = c[f], i.o(e, l) && e[l] && u.push(e[l][0]), e[l] = 0; for (d in s) i.o(s, d) && (i.m[d] = s[d]); for (n && n(i), o(r); u.length;) u.shift()(); return b && a.push.apply(a, b), t() },
            l = self.webpackChunkflashscore = self.webpackChunkflashscore || [],
            o = l.push.bind(l);
        l.push = d })(), i.x()
})();