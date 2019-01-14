var _b_w_c_s = {
    'ewdform': 'BW3PUB',
    'ewdformin': 'BWTPFO',
    'snapshotHosts': {
        'realestate.msn.com': '069dd763a92a4b04be0122d1ad0404d8',
        'local.msn.com': '0fa0bbdcd9654700ba7b75d7c47cad1a',
        'investing.money.msn.com': '1113717a28b74ea39ae50b112450f628',
        'money.msn.com': '1489b21dec3446a39b3e67cd6b49b1e4',
        'healthyliving.msn.com': '21b8656845314d9c87cefb8256a96e0e',
        'bing.com': '2a9fe2c85e5449fe8003f438d48901a5',
        'tv.msn.com': '32f5d5e107454dd795a632ebb7d9cfc9',
        'living.msn.com': '49602c02466b49d2b320c9a4be89c874',
        'music.msn.com': '533ea8cc8dca4e91a210293fc99fbceb',
        'www.microsoft.com': '6581f67640b34c1688e2fe382ffb1e23',
        'social.entertainment.msn.com': '67360dfa278d43bba30998c7edf95529',
        'msn.com': 'a3a5a00caf9e44958e8cd838597c9b5a',
        'entertainment.msn.com': 'ae179c28ef3546828c93dd6162465b17',
        'movies.msn.com': 'b9ecaa928d254e12b2c8535ab8a71ff1',
        'news.msn.com': 'dd20ded6fedc407787be5918bd2a222c'
    },
    'snapshotHttpBingHost': 'http://www.bing.com',
    'snapshotSslBingHost': 'https://www.bing.com'
};
var __extends, bootstrap;
(function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {}
            return n.SelectionBasedSearch = "ss",
            n.UnderlineDecoration = "dc",
            n.CarouselEnabled = "cr",
            n.InteractiveOnly = "io",
            n.CarouselShadowEnabled = "cse",
            n.InitialCarouselState = "crs",
            n.SourceOrderRanking = "sor",
            n.TileBorderWidth = "crb",
            n.InlightInsightsEes = "iiee",
            n.NoLinkSpanOnly = "nolink",
            n.NoDuplicationFilling = "ndf",
            n.FlexibleTileHeight = "fbh",
            n.AllowVariedLabelHeights = "vlh",
            n.FeedCount = "sz",
            n.RelatedEntitySource = "crres",
            n.RelatedEntityEnabled = "crre",
            n.EntityHighlightingEnabled = "ceh",
            n.MobileKnowledgeWidgetEnabled = "mkwe",
            n.InternationallyEnable = "intl",
            n.ForceMobileKnowledgeWidget = "fmkw",
            n.HoverCardEnabled = "hce",
            n.IeInsights = "iei",
            n
        }();
        n.Flights = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}
)(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {}
            return n.VisualizationBoth = "linksandimages",
            n.VisualizationLinks = "links",
            n.VisualizationImages = "images",
            n.VisualizationInteractive = "interactiveonly",
            n.CarouselStateAuto = "auto",
            n.CarouselStateCollapsed = "collapsed",
            n.CarouselStateExpanded = "expanded",
            n.CarouselStateHidden = "hidden",
            n.InfoPaneWidthAuto = 0,
            n.InfopaneWidthNarrow = 380,
            n.InfopaneWidthStandard = 460,
            n.InfopaneWidthWide = 560,
            n.ExplicitWidgetUrl = "/widget/entity/search",
            n.InsightsWidgetUrl = "/widget/snapshot/insights",
            n.WidgetLinkClass = "bingknowledgewidget",
            n.InsightFirstRunId = "bw_i_firstrun",
            n
        }();
        n.Constants = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n, t, i) {
                this.content = i;
                this.title = t;
                this.url = n;
                this.id = null
            }
            return n
        }();
        n.Content = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n, t, i) {
                this.index = n;
                this.content = t;
                this.isTextFromLink = i
            }
            return n
        }(), i;
        n.ContentItem = t;
        i = function() {
            function i(n, t, i, r) {
                this.maxTitleLength = n;
                this.maxUrlLength = t;
                this.maxBlockLength = i;
                this.maxContentLength = r;
                this.content = [];
                this.title = "";
                this.url = "";
                this.originalContentIndex = 0
            }
            return i.prototype.SetTitle = function(n) {
                this.title = n
            }
            ,
            i.prototype.SetUrl = function(n) {
                this.url = n
            }
            ,
            i.prototype.AddText = function(n, i) {
                this.IsTextValuableToAdd(n) ? this.content.push(new t(this.originalContentIndex++,n,i)) : this.content.push(new t(this.originalContentIndex++,"",!0))
            }
            ,
            i.prototype.IsTextValuableToAdd = function(n) {
                var i, r, t;
                if (n && n.length > 0) {
                    for (i = 0,
                    r = 0; r < n.length && i < 2; r++)
                        t = n.charCodeAt(r),
                        (t > 47 && t < 58 || t > 64 && t < 91 || t > 96 && t < 123) && i++;
                    return i >= 2
                }
                return !1
            }
            ,
            i.prototype.AddTextToLastEntry = function(n, i) {
                if (this.IsTextValuableToAdd(n))
                    if (this.content.length > 0) {
                        var r = this.content[this.content.length - 1];
                        r.content += " " + n;
                        r.isTextFromLink = r.isTextFromLink && i
                    } else
                        this.content.push(new t(this.originalContentIndex++,n,i))
            }
            ,
            i.prototype.Build = function() {
                var h = (this.url || "").substring(0, this.maxUrlLength), c = (this.title || "").substring(0, this.maxTitleLength), i, e, r, t, s, f;
                for (this.content.sort(function(n, t) {
                    return -(n.content.length - t.content.length)
                }),
                i = [],
                e = 0,
                r = 0; r < this.content.length && e < this.maxContentLength; ++r)
                    if (t = this.content[r],
                    !t.isTextFromLink) {
                        var u = t.content.length > this.maxBlockLength ? this.maxBlockLength : t.content.length
                          , o = e + (r == 0 ? 0 : 1)
                          , l = o + u;
                        if (l > this.maxContentLength && (u = this.maxContentLength - o),
                        u <= 0)
                            break;
                        t.content = t.content.length > u ? t.content.substring(0, u) : t.content;
                        (i.length == 0 || i[i.length - 1].content !== t.content) && i.push(t);
                        e = o + t.content.length
                    }
                for (i.sort(function(n, t) {
                    return n.index > t.index ? 1 : -1
                }),
                s = [],
                f = 0; f < i.length; f++)
                    s[f] = i[f].content;
                return new n.Content(h,c,s.join("\n"))
            }
            ,
            i
        }();
        n.ContentBuilder = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        function t(n, t) {
            if (!n || n.nodeType != 3 || !n.nodeValue)
                return null;
            var r = n.nodeValue;
            return i(r, t)
        }
        function l(n, t) {
            return n ? i(n, t) : null
        }
        function i(n, t) {
            var o = t.lp === "0" ? r : u
              , i = n.replace(o, " ").replace(f, " ").replace(e, "");
            return i.length == 0 ? null : i
        }
        function a(n) {
            return s[n.tagName] && n.childNodes.length == 1 && n.childNodes[0].nodeType == 3
        }
        function v(i, r, u, f, e) {
            var v, p, k, nt, s, w, d, b;
            if (f.SetTitle(l(r, e.slicedFlight)),
            f.SetUrl(i),
            u)
                for (var g = new n.ClassBlacklist(e.extractionIgnoreClass), y = [{
                    e: u,
                    i: 0
                }], tt = 0, it = (new Date).getTime(); y.length > 0; ) {
                    if (v = y[y.length - 1],
                    v.i >= v.e.childNodes.length) {
                        y.pop();
                        continue
                    }
                    for (p = !1,
                    k = !1; v.i < v.e.childNodes.length; ) {
                        if (++tt % c == 0 && (nt = (new Date).getTime() - it,
                        nt > h)) {
                            y = [];
                            break
                        }
                        if (s = v.e.childNodes[v.i++],
                        s.nodeType == 3)
                            w = t(s, e.slicedFlight),
                            w !== null && (k ? (k = !1,
                            p ? f.AddTextToLastEntry(w, !1) : f.AddText(w, !1)) : f.AddText(w, !1),
                            p = !0);
                        else if (s.nodeType == 1 && a(s))
                            g.HasClass(s) || (d = t(s.childNodes[0], e.slicedFlight),
                            d !== null && (k = !0,
                            b = s,
                            p ? f.AddTextToLastEntry(d, b.tagName === "A") : f.AddText(d, b.tagName === "A"),
                            p = !0));
                        else if (s.nodeType == 1 && (b = s,
                        !o[b.tagName] && !g.HasClass(s))) {
                            y.push({
                                e: s,
                                i: 0
                            });
                            break
                        }
                    }
                }
            return f.Build()
        }
        var r = /[\r\n\t\f\v!"#$%^&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]/g
          , u = /[\r\n\t\f\v<>]/g
          , f = /  +/g
          , e = /^\s+|\s+$/g
          , o = {
            SCRIPT: 1,
            STYLE: 1,
            IFRAME: 1,
            OBJECT: 1,
            EMBED: 1,
            AUDIO: 1,
            VIDEO: 1,
            CANVAS: 1,
            FRAME: 1,
            FRAMESET: 1,
            NOSCRIPT: 1,
            TEXTAREA: 1,
            A: 1,
            SELECT: 1
        }
          , s = {
            A: 1,
            SPAN: 1,
            B: 1,
            I: 1,
            STRONG: 1,
            EM: 1
        }
          , h = 200
          , c = 200;
        n.extractDocumentContent = v
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {
                this.id = "";
                this.augmentationEnabled = !0;
                this.width = null;
                this.height = null;
                this.ignoreClass = null;
                this.extractionIgnoreClass = null;
                this.maxEntities = 0;
                this.maxEntityLinks = 2;
                this.maxEntityAliasLinks = 0;
                this.maxLinks = 0;
                this.maxBlockLinks = 3;
                this.minScreenWidth = 0;
                this.formCode = null;
                this.formCodeInside = null;
                this.flight = null;
                this.slicedFlight = {};
                this.linkStyle = null;
                this.debug = !1;
                this.decorations = null;
                this.detectionStrength = null;
                this.visualization = null;
                this.carouselState = null;
                this.previewMode = !1;
                this.renderHint = null;
                this.insightSearch = 0;
                this.easyDismiss = 1;
                this.slicedDecorations = {}
            }
            return n
        }();
        n.Options = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function() {}
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        function d(n) {
            return n.replace(".", "\\.")
        }
        function i(n) {
            for (var i = [], t = 1; t < arguments.length; t++)
                i[t - 1] = arguments[t];
            n && console.log(i)
        }
        function h(n) {
            var t, i, r, u;
            if (!n || !n.Params)
                return null;
            try {
                if (t = "",
                n.Params) {
                    i = [];
                    for (r in n.Params)
                        u = n.Params[r],
                        Object.prototype.toString.call(u) === "[object Array]" && i.push([r, '%3a"', u.join(","), '"'].join(""));
                    t = i.join("+")
                }
                return t
            } catch (f) {}
            return null
        }
        function g(n, t) {
            if (!n || !n.Requery)
                return null;
            try {
                var i = h(n) || "";
                return [_b_w_c.sslBingHost, "/search?q=", encodeURIComponent(n.Requery), "&filters=", i, "&FORM=", t].join("")
            } catch (r) {}
            return null
        }
        function nt(i, r, u, f, e, o, s, c, l, a, v) {
            var w = !1, p, y, b;
            f.nolink == "1" && (w = !0);
            p = "";
            w && (p = "cursor: pointer;");
            y = document.createElement(w ? "span" : "a");
            y.href = g(s, c) || "javascript:void(0)";
            y.className = t.Constants.WidgetLinkClass + (a ? " " + a : "");
            y.rel = "nofollow";
            a && y.setAttribute("data-linkstyle", a);
            n.core.setText(y, r);
            l ? y.setAttribute("data-type", "snapshot~" + l) : y.setAttribute("data-type", "snapshot");
            y.setAttribute("data-explicit", "true");
            y.setAttribute("data-entityid", u);
            c && y.setAttribute("data-form", c);
            v && y.setAttribute("data-formcodeinside", v);
            e && y.setAttribute("data-width", e);
            o && y.setAttribute("data-height", o);
            s && s.Requery && y.setAttribute("data-query", s.Requery);
            s && s.Params && (b = h(s),
            y.setAttribute("data-filters", b));
            p && (y.style.cssText = p);
            i.parentNode.insertBefore(y, i.nextSibling)
        }
        function c(n, t) {
            for (var i, w, b, k, d, f, o, r, h, g, c = 0, v = 0, e = {}, s = {}, l = {}, y = t.maxBlockLinks > 0, p = {}, a = 0; a < n.length; ++a)
                if ((i = n[a],
                !y || (w = l[i.blockIndex] || 0,
                !(w >= t.maxBlockLinks))) && (b = t.maxEntityLinks == 0 || e[i.entityId] == null || e[i.entityId] < t.maxEntityLinks,
                b) && (k = t.maxEntities == 0 || e[i.entityId] != null || v < t.maxEntities,
                k) && (d = t.maxEntityAliasLinks == 0 || s[i.entityAlias] == null || s[i.entityAlias] < t.maxEntityAliasLinks,
                d)) {
                    if (t.maxLinks > 0 && c >= t.maxLinks)
                        break;
                    for (f = p[i.blockIndex],
                    f == null && (f = [new u(i.node,0,i.node.data.length)],
                    p[i.blockIndex] = f),
                    o = 0; o < f.length; ++o)
                        if (r = f[o],
                        i.offset >= r.start && i.offset + i.match.length <= r.end) {
                            h = r.node.splitText(i.offset - r.start);
                            h.data = h.data.substr(i.match.length);
                            g = new u(h,i.offset + i.match.length,r.end);
                            r.end = i.offset;
                            f.splice(o + 1, 0, g);
                            nt(r.node, i.match, i.entityId, t.slicedFlight, t.width, t.height, i.requery, t.formCode, t.flight, t.linkStyle, t.formCodeInside);
                            ++c;
                            e[i.entityId] == null && ++v;
                            e[i.entityId] = (e[i.entityId] || 0) + 1;
                            s[i.entityAlias] = (s[i.entityAlias] || 0) + 1;
                            y && (l[i.blockIndex] = (l[i.blockIndex] || 0) + 1);
                            break
                        }
                }
            return c
        }
        function l(n, t) {
            for (var u, r, s, f, h, e, o = {}, i = 0; i < t.length; ++i)
                o[t[i].SatoriId] = i;
            for (u = {},
            r = [],
            i = 0; i < n.length; ++i)
                s = n[i],
                f = s.entityId,
                u[f] = u[f] || 0,
                h = u[f],
                r.length == h ? (e = [],
                r.push(e)) : e = r[h],
                e.push(s),
                ++u[f];
            for (n = [],
            i = 0; i < r.length; ++i)
                r[i].sort(function(n, t) {
                    var i = o[n.entityId] || 0
                      , r = o[t.entityId] || 0;
                    return i < r ? -1 : i > r ? 1 : 0
                }),
                n = n.concat(r[i]);
            return n
        }
        function a(n, t) {
            for (var r = {}, i = 0; i < t.length; ++i)
                r[t[i].SatoriId] = i;
            return n.sort(function(n, t) {
                var i = r[n.entityId] || 0
                  , u = r[t.entityId] || 0;
                return i < u ? -1 : i > u ? 1 : n.blockIndex < t.blockIndex ? -1 : n.blockIndex > t.blockIndex ? 1 : n.matchIndex < t.matchIndex ? -1 : n.matchIndex > t.matchIndex ? 1 : 0
            }),
            n
        }
        function tt(n, u, f) {
            var g, e, nt, h, rt, ut, o, ht, ft, ct;
            if (!n || !u || u.length == 0 || f == null)
                return 0;
            var tt = {}
              , it = []
              , et = {};
            for (g = 0; g < u.length; ++g) {
                for (e = u[g],
                nt = 0; nt < e.Names.length; ++nt)
                    h = e.Names[nt],
                    f.slicedFlight.cs === "0" && (h = h.toLowerCase()),
                    h.match(k) || tt[h] || (tt[h] = e.SatoriId,
                    it.push(d(h)));
                e.Query && e.Query.Requery && (et[e.SatoriId] = e.Query);
                e.Actions && e.Actions.length && (t.IdsToActions[e.SatoriId] = e.Actions);
                t.IdsToDescription[e.SatoriId] = e.Description;
                t.IdsToProviders[e.SatoriId] = e.Providers;
                t.IdsToName[e.SatoriId] = e.Name;
                e.Image && e.Image.ImageUrl && (t.IdsToImage[e.SatoriId] = e.Image)
            }
            it.sort(function(n, t) {
                return -(n.length - t.length)
            });
            rt = ["\\b(", it.join("|"), ")\\b"].join("");
            ut = f.slicedFlight.cs === "0" ? "gi" : "g";
            i(f.slicedFlight.log, "options", f);
            i(f.slicedFlight.log, "regexSource", rt);
            i(f.slicedFlight.log, "regexOptions", ut);
            var lt = new RegExp(rt,ut)
              , at = new t.ClassBlacklist(f.ignoreClass)
              , s = [n.firstChild]
              , v = [0]
              , vt = 0
              , yt = (new Date).getTime();
            f.maxEntities = f.maxEntities || 0;
            f.maxEntityLinks = f.maxEntityLinks || 0;
            f.maxBlockLinks = f.maxBlockLinks || 0;
            for (var ot = 0, st = 0, y = []; s.length > 0; ) {
                if (o = s[s.length - 1],
                o == null) {
                    s.pop();
                    v.pop();
                    continue
                }
                do {
                    if (++vt % b == 0 && (ht = (new Date).getTime() - yt,
                    ht > w)) {
                        s = [];
                        v = [];
                        break
                    }
                    if (o.nodeType == 3)
                        ft = o,
                        ++ot,
                        ft.data.replace(lt, function(n, t, u, e) {
                            var s = n, o;
                            return f.slicedFlight.cs === "0" && (s = s.toLowerCase()),
                            o = tt[s],
                            i(f.slicedFlight.log, "regex match on", n, o, u, e),
                            o && (++st,
                            y.push(new r(ot,st,ft,n,u,o,s,et[o]))),
                            null
                        });
                    else if (o.nodeType == 1 && (ct = o,
                    !p[ct.tagName] && !at.HasClass(o))) {
                        s[s.length - 1] = o.nextSibling;
                        s.push(o.firstChild);
                        v[v.length - 1] = 0;
                        v.push(0);
                        break
                    }
                } while ((o = o.nextSibling) != null);o == null && (s.pop(),
                v.pop())
            }
            return f.slicedFlight.rer !== "0" && (y = f.slicedFlight.rer === "1" ? a(y, u) : l(y, u)),
            c(y, f)
        }
        function v(n) {
            var t, i;
            n && n.getAttribute && (t = "textContent"in n ? n.textContent : n.innerText,
            i = _bw._d.createTextNode(t),
            n.parentElement.replaceChild(i, n))
        }
        function it(n) {
            var e, u, o, r, i, f, s, t;
            if (n && n.querySelectorAll) {
                for (e = n.querySelectorAll('a.bingwidget[data-type="snapshot"]'),
                u = [],
                r = 0; r < e.length; ++r)
                    o = e[r],
                    u.push(o.parentNode),
                    v(o);
                for (r = 0; r < u.length; ++r)
                    if (i = u[r],
                    i.childNodes) {
                        for (f = !0,
                        t = 0; t < i.childNodes.length && f; ++t)
                            f = i.childNodes[t].nodeType == 3;
                        if (f && i.childNodes.length > 1) {
                            for (s = [],
                            t = 0; t < i.childNodes.length; ++t)
                                s.push(i.childNodes[t].nodeValue);
                            for (i.childNodes[0].nodeValue = s.join(""),
                            t = i.childNodes.length - 1; t >= 1; --t)
                                i.removeChild(i.childNodes[t])
                        }
                    }
            }
        }
        var y = function() {
            function n(n, t) {
                this.Requery = n;
                this.Params = t
            }
            return n
        }(), f, e, o, s, r, u;
        t.EntityQuery = y;
        f = function() {
            function n(n, t) {
                this.Name = n;
                this.Actions = t
            }
            return n
        }();
        t.EntityActions = f;
        e = function() {
            function n(n, t) {
                this.Name = n;
                this.Url = t
            }
            return n
        }();
        t.EntityAction = e;
        o = function() {
            function n(n, t, i, r, u, f, e) {
                this.ImageUrl = n;
                this.ImageAttribution = t;
                this.SuggestedCropping = i;
                this.SuggestedPadding = r;
                this.ThumbnailHeight = u;
                this.ThumbnailWidth = f;
                this.ImageTypes = e
            }
            return n
        }();
        t.EntityImage = o;
        s = function() {
            function n(n, t, i, r, u, f, e) {
                this.SatoriId = n;
                this.Names = t;
                this.Query = null;
                this.Actions = i;
                this.Image = r;
                this.Description = u;
                this.Providers = f;
                this.Name = e
            }
            return n
        }();
        t.EntityInfo = s;
        var p = {
            SCRIPT: 1,
            STYLE: 1,
            IFRAME: 1,
            OBJECT: 1,
            EMBED: 1,
            AUDIO: 1,
            VIDEO: 1,
            CANVAS: 1,
            FRAME: 1,
            FRAMESET: 1,
            NOSCRIPT: 1,
            TEXTAREA: 1,
            A: 1,
            H1: 1,
            H2: 1,
            H3: 1,
            H4: 1
        }
          , w = 300
          , b = 300
          , k = /([\r\n\t\f\v"#$%^&'()*+\/<=>?@\[\\\]^`{|}~]|(^[,:;\.])|([,:;\.]$))/g;
        t.IdsToActions = {};
        t.IdsToImage = {};
        t.IdsToDescription = {};
        t.IdsToProviders = {};
        t.IdsToName = {};
        r = function() {
            function n(n, t, i, r, u, f, e, o) {
                this.blockIndex = n;
                this.matchIndex = t;
                this.node = i;
                this.match = r;
                this.offset = u;
                this.entityId = f;
                this.entityAlias = e;
                this.requery = o
            }
            return n
        }();
        t.EntityMatch = r;
        u = function() {
            function n(n, t, i) {
                this.node = n;
                this.start = t;
                this.end = i
            }
            return n
        }();
        t.augmentorApplyMatches = c;
        t.augmentorOrderEntityMatchesByRankWithDiversity = l;
        t.augmentorOrderEntityMatchesByRank = a;
        t.augmentDocumentWithEntities = tt;
        t.removeLink = v;
        t.removeAugmentation = it
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n) {
                this.classRegex = null;
                n != null && n.length > 0 && (this.classRegex = new RegExp("([\t\r\n\f ]|^)(" + n.replace(/[ ]+/gi, "|") + ")([\t\r\n\f ]|$)","gi"))
            }
            return n.prototype.HasClass = function(n) {
                return this.classRegex != null && n.nodeType === 1 && n.className.match(this.classRegex) != null ? !0 : !1
            }
            ,
            n
        }();
        n.ClassBlacklist = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        function i(n, t) {
            return n.x >= t.left && n.x <= t.right && n.y >= t.top && n.y <= t.bottom
        }
        function r(n, t, i) {
            return n.x >= t.left - i && n.x <= t.right + i && n.y >= t.top - i && n.y <= t.bottom + i
        }
        function u(n, t) {
            return !(t.left > n.right || t.right < n.left || t.top > n.bottom || t.bottom < n.top)
        }
        function t(n, t, i, r) {
            return {
                left: n,
                right: i,
                top: t,
                bottom: r,
                width: i - n,
                height: r - t
            }
        }
        function f(n, i) {
            return t(n.left - i, n.top - i, n.right + i, n.bottom + i)
        }
        function e(n, i, r) {
            return t(n.left + i, n.top + r, n.right + i, n.bottom + r)
        }
        n.withinRect = i;
        n.withinRectWithPadding = r;
        n.intersectRect = u;
        n.makeRect = t;
        n.enlargeRect = f;
        n.moveRect = e
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function i() {}
            return i.isInteractiveSearchOnly = function(n) {
                return n.visualization == t.Constants.VisualizationInteractive ? !0 : typeof n.slicedFlight != "undefined" && n.slicedFlight[t.Flights.InteractiveOnly] == "1"
            }
            ,
            i.isInsightSearchEnabled = function(n) {
                return n.insightSearch == 1 || i.isInteractiveSearchOnly(n)
            }
            ,
            i.getMarketOrDefault = function(n) {
                return n || _bw._G.Mkt
            }
            ,
            i.getMarketCode = function(r, u, f) {
                var e = _bw._G.Mkt, o;
                return r.slicedFlight[t.Flights.InternationallyEnable] === "1" && (o = n.core.getAttr(u, "data-market"),
                o ? e = o : f != null && (e = i.getMarketOrDefault(f.MarketCode))),
                e
            }
            ,
            i
        }();
        t.Utils = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var r = function() {
            function t(n, t, i) {
                this.element = n;
                this.boundingRect = t;
                this.clientRect = i
            }
            return t.prototype.Test = function(t) {
                return n.withinRect(t, this.boundingRect)
            }
            ,
            t
        }(), t, i;
        n.ElementQuadTreeNodeElement = r;
        t = function() {
            function t(n, t) {
                this.boundingRect = n;
                this.elements = [];
                this.nodes = null;
                this.level = t
            }
            return t.prototype.Contains = function(t) {
                return n.withinRect(t, this.boundingRect)
            }
            ,
            t.prototype.ContainsRect = function(t) {
                return n.intersectRect(this.boundingRect, t)
            }
            ,
            t.prototype.Find = function(n) {
                var i, u, r, f, t, e;
                if (this.IsLeaf()) {
                    if (this.elements == null)
                        return null;
                    for (i = [],
                    t = 0; t < this.elements.length; ++t)
                        u = this.elements[t],
                        u.Test(n) && i.push(u);
                    if (i.length == 0)
                        return null;
                    if (i.length == 1)
                        return i[0];
                    for (r = null,
                    f = 0,
                    t = 0; t < i.length; ++t) {
                        var c = (i[t].boundingRect.left + i[t].boundingRect.right) / 2
                          , l = (i[t].boundingRect.top + i[t].boundingRect.bottom) / 2
                          , o = c - n.x
                          , s = l - n.y
                          , h = Math.sqrt(o * o + s * s);
                        (r == null || f > h) && (r = i[t],
                        f = h)
                    }
                    return r
                }
                if (this.nodes == null)
                    return null;
                for (t = 0; t < this.nodes.length; ++t)
                    if (e = this.nodes[t],
                    e.Contains(n))
                        return e.Find(n);
                return null
            }
            ,
            t.prototype.IsLeaf = function() {
                return this.nodes == null
            }
            ,
            t.prototype.Add = function(n) {
                var i, r;
                if (this.IsLeaf())
                    this.elements.length < 1 || this.level >= t.maxDepth || this.boundingRect.width < t.maxSize && this.boundingRect.height < t.maxSize ? this.elements.push(n) : (this.elements.push(n),
                    this.Split());
                else
                    for (i = 0; i < this.nodes.length; ++i)
                        r = this.nodes[i],
                        r.ContainsRect(n.boundingRect) && r.Add(n)
            }
            ,
            t.prototype.Split = function() {
                var i, r, e, u, o, f, s;
                for (this.nodes = [],
                i = Math.floor((this.boundingRect.left + this.boundingRect.right) * .5),
                r = Math.floor((this.boundingRect.top + this.boundingRect.bottom) * .5),
                this.nodes.push(new t(n.makeRect(this.boundingRect.left, this.boundingRect.top, i, r),this.level + 1)),
                this.nodes.push(new t(n.makeRect(i + 1, this.boundingRect.top, this.boundingRect.right, r),this.level + 1)),
                this.nodes.push(new t(n.makeRect(this.boundingRect.left, r + 1, i, this.boundingRect.bottom),this.level + 1)),
                this.nodes.push(new t(n.makeRect(i + 1, r + 1, this.boundingRect.right, this.boundingRect.bottom),this.level + 1)),
                e = this.elements,
                this.elements = [],
                u = 0; u < e.length; ++u)
                    for (o = e[u],
                    f = 0; f < this.nodes.length; ++f)
                        s = this.nodes[f],
                        s.ContainsRect(o.boundingRect) && s.Add(o)
            }
            ,
            t.maxDepth = 10,
            t.maxSize = 200,
            t
        }();
        n.ElementQuadTreeNode = t;
        i = function() {
            function i() {
                this.width = 0;
                this.height = 0
            }
            return i.prototype.Invalidate = function() {
                this.root = null
            }
            ,
            i.prototype.Find = function(n) {
                var t = this.root;
                return t == null ? null : t.Find(n)
            }
            ,
            i.prototype.Add = function(n) {
                this.root == null && this.Initialize();
                this.root.Add(n)
            }
            ,
            i.prototype.Width = function() {
                return this.width
            }
            ,
            i.prototype.Height = function() {
                return this.height
            }
            ,
            i.prototype.DocumentWidth = function() {
                return Math.max(_bw._d.body && _bw._d.body.clientWidth, _bw._d.documentElement.clientWidth, _bw._d.documentElement.scrollWidth)
            }
            ,
            i.prototype.DocumentHeight = function() {
                return Math.max(_bw._d.body && _bw._d.body.clientHeight, _bw._d.documentElement.clientHeight, _bw._d.documentElement.scrollHeight)
            }
            ,
            i.prototype.IsInitialized = function() {
                return this.root != null
            }
            ,
            i.prototype.Initialize = function() {
                this.width = this.DocumentWidth();
                this.height = this.DocumentHeight();
                var i = n.makeRect(0, 0, this.width, this.height);
                this.root = new t(i,0)
            }
            ,
            i
        }();
        n.ElementQuadTree = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        function ui(n) {
            return n !== undefined && n !== null && n.indexOf("px") > 0 ? n : ii
        }
        function fi(n) {
            return n !== undefined && n !== null && n.indexOf("px") > 0 ? n : ri
        }
        function ei(n) {
            return Math.floor((n - 116444736000000000) / 1e7)
        }
        function it(n, t) {
            i.isEnabled() && _bw.Log_bw.Log("Latency", "BW", "EE", !1, "Meta", n || "", "Time", t)
        }
        function oi(n, t) {
            i.isEnabled() && _bw.Log_bw.Log("Latency", "BW", "AE", !1, "Meta", n || "", "Time", t)
        }
        function f(n, t, r, u, f) {
            i.isEnabled() && _bw.Log_bw.Log("Init", "BW", "AS", !1, "Meta", n || "", "W", t, "H", r, "K", u, "Text", f || "")
        }
        function e(n, t) {
            var i, r;
            return t && t.ownerDocument && t.ownerDocument.documentElement && (i = t.ownerDocument.documentElement,
            i && i.getAttribute && (r = i.getAttribute("data-url"),
            r)) ? r : n
        }
        function si(i, r, u, f, o) {
            var l = n.core.getSecureBingHost(), a = [l, d], c = _bw.sj_ce("iframe"), s, h;
            c.id = "b_w_i_f";
            c.style.cssText = "display: none;";
            _bw._d.body.appendChild(c);
            c.contentWindow.name = "b_w_i_f";
            s = _bw.sj_ce("form");
            s.action = a.join("");
            s.method = "post";
            s.target = "b_w_i_f";
            s.style.cssText = "display: none;";
            h = function(n, t) {
                var i = _bw.sj_ce("input");
                i.type = "hidden";
                i.name = n;
                i.value = t || "";
                s.appendChild(i)
            }
            ;
            h("url", e(i.url, o));
            h("title", i.title);
            h("content", i.content);
            h("id", i.id);
            h("strength", f.detectionStrength);
            h("fallback", "1");
            h("market", t.Utils.getMarketOrDefault(r));
            h = null;
            c.onload = function() {
                _bw._d.body.removeChild(c);
                _bw._d.body.removeChild(s)
            }
            ;
            _bw._d.body.appendChild(s);
            s.submit()
        }
        function hi(r, u, f, o, s, h, c) {
            var y = n.core.getSecureBingHost(), p = [y, d], v, a, l;
            u = t.Utils.getMarketOrDefault(u);
            v = [];
            a = function(n, t) {
                v.push([encodeURIComponent(n), "=", encodeURIComponent(t)].join(""))
            }
            ;
            a("url", e(r.url, o));
            a("title", r.title);
            a("content", r.content);
            a("id", r.id);
            a("strength", s.detectionStrength);
            a("market", t.Utils.getMarketOrDefault(u));
            a = null;
            l = _bw.sj_gx();
            l.open("POST", p.join(""), !0);
            l.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            l.onreadystatechange = function() {
                var n, r;
                if (l.readyState == 4 && l.status == 200)
                    try {
                        n = null;
                        l.responseText && (r = JSON.parse(l.responseText),
                        n = r != null ? r.Entities : null);
                        !h && n && n.length > 0 && et(f, o, s, c, n, u)
                    } catch (t) {
                        typeof t != "string" && (t = t.toString());
                        i.error("BW", t, "entity.sendContentAndAugmentDocument")
                    }
                else
                    l.readyState == 4 && i.error("BW", "unknown error: " + l.status.toString(), "entity.sendContentAndAugmentDocument")
            }
            ;
            l.send(v.join("&"))
        }
        function o(t, i) {
            if (n.core.isCrossOriginresourceSharingEnabled() || t.isWinJs)
                return !0;
            if (i.previewMode)
                try {
                    return _bw._w == _bw._w.top || _bw._w.top.location != null
                } catch (r) {}
            return !1
        }
        function ci(n, r, u, f, o, s) {
            var k, b, c, h;
            try {
                var d = _bw.sb_gt()
                  , g = new t.ContentBuilder(v,a,y,p)
                  , l = t.extractDocumentContent(n.url || "", n.title, r, g, u);
                it(n.url, _bw.sb_gt() - d);
                l && (k = [_b_w_c_s.snapshotSslBingHost, "/widget/insights/extract?addfeaturesnoexpansion=sptnists"],
                f = t.Utils.getMarketOrDefault(f),
                b = [],
                c = function(n, t) {
                    b.push([encodeURIComponent(n), "=", encodeURIComponent(t)].join(""))
                }
                ,
                c("url", e(l.url, r)),
                c("title", l.title),
                c("content", l.content),
                c("language", f),
                c("market", f),
                c = null,
                h = _bw.sj_gx(),
                h.open("POST", k.join(""), !0),
                h.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                h.onreadystatechange = function() {
                    if (h.readyState == 4 && h.status == 200)
                        try {
                            h.responseText && s(h.responseText)
                        } catch (n) {
                            typeof n != "string" && (n = n.toString());
                            i.error("BW", n, "entity.extractIeInsights")
                        }
                    else
                        h.readyState == 4 && i.error("BW", "unknown error: " + h.status.toString(), "entity.extractIeInsights")
                }
                ,
                h.send(b.join("&")))
            } catch (w) {
                typeof w != "string" && (w = w.toString());
                i.error("BW", w, "entity.extractEntities")
            }
        }
        function rt(n, r, u, f, e, s) {
            try {
                var l = _bw.sb_gt()
                  , w = new t.ContentBuilder(v,a,y,p)
                  , h = t.extractDocumentContent(n.url || "", n.title, r, w, u);
                it(n.url, _bw.sb_gt() - l);
                h && (h.id = u.id || "",
                o(n, u) ? hi(h, f, n, r, u, e, s) : si(h, f, n, u, r))
            } catch (c) {
                typeof c != "string" && (c = c.toString());
                i.error("BW", c, "entity.extractEntities")
            }
        }
        function li(n) {
            if (n == 0)
                return !0;
            var t = 0;
            return _bw._w.screen && "width"in _bw._w.screen && (t = Math.max(t, Math.max(_bw._w.screen.width, _bw._w.screen.height))),
            _bw._d.body && "clientWidth"in _bw._d.body && (t = Math.max(t, Math.max(_bw._d.body.clientWidth, _bw._d.body.clientHeight))),
            t >= n
        }
        function u(n, t, i) {
            return n != null ? n : t != null ? parseInt(t) : i
        }
        function ut(i, r, f) {
            var e = new t.Options, s, o;
            i.id = r && r.Id;
            i.width = ui(i.width || r && r.Width && r.Width.toString() + "px" || e.width);
            i.height = fi(i.height || r && r.Height && r.Height.toString() + "px" || e.height);
            i.ignoreClass = i.ignoreClass || r && r.IgnoreClasses != null && r.IgnoreClasses.join(" ") || e.ignoreClass;
            i.extractionIgnoreClass = i.extractionIgnoreClass || r && r.ExtractionIgnoreClasses != null && r.ExtractionIgnoreClasses.join(" ") || e.extractionIgnoreClass;
            i.maxEntities = u(i.maxEntities, r && r.MaxEntities, e.maxEntities);
            i.maxEntityLinks = u(i.maxEntityLinks, r && r.MaxLinksPerEntity, e.maxEntityLinks);
            i.maxEntityAliasLinks = u(i.maxEntityAliasLinks, r && r.MaxLinksPerEntityAlias, e.maxEntityAliasLinks);
            i.maxLinks = u(i.maxLinks, r && r.MaxLinks, e.maxLinks);
            i.maxBlockLinks = u(i.maxBlockLinks, r && r.MaxLinksPerBlock, e.maxBlockLinks);
            i.minScreenWidth = u(i.minScreenWidth, r && r.MinScreenWidth, e.minScreenWidth);
            i.linkStyle = i.linkStyle || r && r.LinkStyle || e.linkStyle;
            i.formCode = r && r.FormCode || i.formCode;
            i.formCodeInside = r && r.FormCodeInside || i.formCodeInside;
            s = pi(r, f);
            i.flight = yi(s, r);
            i.flight = i.decorations ? i.flight + "," + i.decorations : i.flight;
            i.slicedFlight = i.flight ? n.core.sliceInstance("snapshot~" + i.flight) : {};
            i.insightSearch === 0 && i.slicedFlight[t.Flights.SelectionBasedSearch] != null && (o = parseInt(i.slicedFlight[t.Flights.SelectionBasedSearch]),
            o != NaN && (i.insightSearch = o));
            i.slicedFlight[t.Flights.InteractiveOnly] == "1" && (i.visualization = t.Constants.VisualizationInteractive);
            r && r.AugmentationDisabled && (i.augmentationEnabled = !1)
        }
        function ai(t) {
            n.core.setCookie(g, t, null, null)
        }
        function vi(t) {
            var u = n.core.getCookie(g), i, r;
            if (u)
                for (i = 0; i < t.Flights.length; i++)
                    if (r = t.Flights[i].Name,
                    r === u)
                        return r;
            return null
        }
        function ft(t) {
            return n.core.getTypeOverrideImpl(null, ti, t)
        }
        function yi(i, r) {
            var e = [], f = [], o, s, u;
            if (r != null && (r.UnderlineDecoration != null && (e[t.Flights.UnderlineDecoration] = r.UnderlineDecoration),
            r.CarouselShadowEnabled != null && (e[t.Flights.CarouselShadowEnabled] = r.CarouselShadowEnabled ? 1 : 0),
            r.InitialCarouselState != null && (e[t.Flights.InitialCarouselState] = r.InitialCarouselState),
            r.Visualization != null))
                switch (r.Visualization) {
                case 0:
                case 1:
                    e[t.Flights.CarouselEnabled] = 1;
                    break;
                case 2:
                    e[t.Flights.CarouselEnabled] = 0;
                    break;
                case 3:
                    e[t.Flights.InteractiveOnly] = 1
                }
            f[t.Flights.SelectionBasedSearch] = 1;
            f[t.Flights.SourceOrderRanking] = 1;
            f[t.Flights.NoLinkSpanOnly] = 1;
            f[t.Flights.NoDuplicationFilling] = 1;
            f[t.Flights.AllowVariedLabelHeights] = 1;
            f[t.Flights.FeedCount] = 99;
            f[t.Flights.RelatedEntitySource] = 1;
            f[t.Flights.RelatedEntityEnabled] = 1;
            f[t.Flights.UnderlineDecoration] = "dashblack";
            f[t.Flights.FlexibleTileHeight] = 1;
            o = n.core.sliceInstance("~" + i);
            for (u in e)
                e.hasOwnProperty(u) && (o[u] = e[u]);
            for (u in f)
                f.hasOwnProperty(u) && o[u] == null && (o[u] = f[u]);
            s = [];
            for (u in o)
                o.hasOwnProperty(u) && u != "type" && s.push(u + "=" + o[u]);
            return s.join(",")
        }
        function pi(t, i) {
            var r = ft(i);
            return r ? r : !t || !t.Flights || t.Flights.length < 1 ? tt : (r = vi(t),
            r || (r = n.core.getFlightAssignment(t.Flights)),
            r && ai(r),
            r == "default") ? tt : r
        }
        function wi(t, i) {
            var e = n.core.getSecureBingHost(), o = [e, gt], f = _bw.sj_ce("iframe"), r, u;
            f.id = l;
            f.style.cssText = "width: 600px;height: 400px;border: none;";
            i.appendChild(f);
            f.contentWindow.name = l;
            r = _bw.sj_ce("form");
            r.action = o.join("");
            r.method = "post";
            r.target = l;
            r.style.cssText = "display: none;";
            u = function(n, t) {
                var i = _bw.sj_ce("input");
                i.type = "hidden";
                i.name = n;
                i.value = t || "";
                r.appendChild(i)
            }
            ;
            u("url", t.url);
            u("title", t.title);
            u("content", t.content);
            u("id", t.id);
            u("market", t.market);
            u = null;
            i.onload = function() {
                _bw._d.body.removeChild(r)
            }
            ;
            _bw._d.body.appendChild(r);
            r.submit()
        }
        function w(i, r, u, f) {
            var s = n.core.getSecureBingHost(), e = _bw.sj_ce("div"), h = ["position: fixed;", "right: 0px;", "bottom: 0px;", "width: 28px;", "height: 28px;", "border: none;", "background: url(", s, "/widget/images/ewh.png) no-repeat 0 -38px;"], c = ["position: fixed;", "right: 0px;", "bottom: 0px;", "width: 600px;", "height: 400px;", "border: 1px solid black;", "background: white;", "z-index: 1000000;"], o;
            e.style.cssText = h.join("");
            (_bw._d.body || _bw._d).appendChild(e);
            o = function() {
                var s = new t.ContentBuilder(v,a,y,p), o = t.extractDocumentContent(i.url || "", i.title, r, s, u), n;
                return o ? (o.market = f,
                n = _bw.sj_ce("div"),
                n.id = nt,
                o.id = u.id || "",
                n.innerHTML = '<a href="javascript:void(0);" onclick="bootstrap.knowledge.closeDebug();" style=position:absolute;right:20px;top:5px;font-size:12px;font-family:arial;">X<\/a>',
                n.setAttribute("style", c.join("")),
                (_bw._d.body || _bw._d).appendChild(n),
                wi(o, n, i)) : e.parentNode.removeChild(e),
                !1
            }
            ;
            _bw.sj_be(e, "click", o, !1)
        }
        function bi() {
            var n = document.getElementById(nt);
            n.parentNode.removeChild(n)
        }
        function et(n, i, r, u, e, o) {
            var h = 0
              , c = _bw.sb_gt()
              , s = r.augmentationEnabled && !(r.slicedFlight.nou === "1" || r.visualization === t.Constants.VisualizationImages);
            s && (h = t.augmentDocumentWithEntities(i, e, r));
            n.url && s && (f(n.url, e.length, h, 1, r.id),
            oi(n.url, _bw.sb_gt() - c));
            u(r, s, o)
        }
        function ki(n, r, u, e, o, s, h, c) {
            if (!li(e.minScreenWidth)) {
                f(r.url, 0, 0, 3, n);
                return
            }
            if (h === null) {
                f(r.url, 0, 0, 0, n);
                rt(r, u, e, o, !1, s);
                e.debug && w(r, u, e, o);
                return
            }
            if (h && h.length > 0 || t.Utils.isInsightSearchEnabled(e))
                try {
                    et(r, u, e, s, h, o)
                } catch (l) {
                    typeof l != "string" && (l = l.toString());
                    i.error("BW", l, "entity.processEntities")
                }
            else
                f(r.url, 0, 0, 2, n);
            if (h && c > 0) {
                var a = ei(c)
                  , v = Math.floor((new Date).getTime() / 1e3)
                  , y = v - a;
                y > _b_w_c.snapshotRefresh && setTimeout(function() {
                    rt(r, u, e, o, !0, s)
                }, 1e3)
            }
            e.debug && w(r, u, e, o)
        }
        function ot(n) {
            s && s(n != null ? n.Entities : null, n != null ? n.DateTime || 0 : 0);
            s = null
        }
        function st(r, u, f, e, h, c) {
            s = c;
            var a = n.core.getSecureBingHost()
              , l = [a, bt, "?url=", encodeURIComponent(u), "&id=", r || "", "&market=", t.Utils.getMarketOrDefault(f)];
            o(e, h) ? n.core.callJson(l.join(""), function(n) {
                return ot(n)
            }, function(n) {
                return i.error("BW", n, "entity.fetchEntities")
            }) : (l.push("&callback=bootstrap.knowledge.entitiesFetched"),
            n.core.callJsonP(l.join("")))
        }
        function ht(n) {
            h && h(n);
            h = null
        }
        function di(t, r, u, f, e) {
            h = e;
            var c = n.core.getSecureBingHost()
              , s = [c, kt, "?id=", encodeURIComponent(t)];
            pt(u.slicedFlight, f) && s.push("&mobile=true");
            o(r, u) ? n.core.callJson(s.join(""), function(n) {
                return ht(n)
            }, function(n) {
                return i.error("BW", n, "entity.fetchSettings")
            }) : (s.push("&callback=bootstrap.knowledge.settingsFetched"),
            n.core.callJsonP(s.join("")))
        }
        function r(n) {
            if (n == null)
                return null;
            var t = parseInt(n);
            return isNaN(t) ? null : t
        }
        function gi(i) {
            function f(n) {
                return i ? i.getAttribute(n) : null
            }
            var u = new t.Options;
            return u.width = f("data-width") || null,
            u.height = f("data-height") || null,
            u.ignoreClass = f("data-ignoreclass") || null,
            u.extractionIgnoreClass = f("data-extractionignoreclass") || null,
            u.maxEntities = r(f("data-maxentities")),
            u.maxEntityLinks = r(f("data-maxentitylinks")),
            u.detectionStrength = f("data-strength") || null,
            u.maxEntityAliasLinks = r(f("data-maxentityaliaslinks")),
            u.maxLinks = r(f("data-maxlinks")),
            u.maxBlockLinks = r(f("data-maxparagraphlinks")),
            u.maxBlockLinks == null && (u.maxBlockLinks = r(f("data-maxblocklinks"))),
            u.minScreenWidth = r(f("data-minscreenwidth")),
            u.formCode = f("data-form") || _b_w_c_s.ewdform,
            u.formCodeInside = f("data-forminside") || _b_w_c_s.ewdformin,
            u.linkStyle = f("data-linkstyle") || null,
            u.debug = f("data-snapshotdebug") == "1",
            u.decorations = f("data-options") || null,
            u.carouselState = f("data-carouselstate") || null,
            u.visualization = f("data-visualization") || null,
            u.previewMode = f("data-previewmode") == "true",
            u.renderHint = f("data-renderhint") || null,
            u.easyDismiss = r(f("data-easydismiss") || "1"),
            u.insightSearch = r(f("data-insightsearch") || "0"),
            u.slicedDecorations = n.core.sliceInstance("snapshot~" + u.decorations),
            u
        }
        function ct(n) {
            c && c(n);
            c = null
        }
        function nr(t, r, u) {
            c = u;
            var e = _b_w_c_s.snapshotSslBingHost
              , f = [e, dt];
            o(t, r) ? n.core.callJson(f.join(""), function(n) {
                return ct(n)
            }, function(n) {
                return i.error("BW", n, "entity.fetchKnowledgeConfig")
            }, !0) : (f.push("?callback=bootstrap.knowledge.knowledgeConfigFetched"),
            n.core.callJsonP(f.join("")))
        }
        function lt(t, i) {
            var r = i.getAttribute("data-id"), u;
            return r != null && r.length > 0 ? r : (u = n.core.getPivotUrl("host", t).replace("host:", ""),
            _b_w_c_s.snapshotHosts[u] || null)
        }
        function vt(t) {
            return n.core.isBrowserSupported(t, at)
        }
        function tr(n, i, r, u, f, o, s, h) {
            var c, l;
            u != null && (c = o.id,
            o.augmentationEnabled = !f,
            (i && i.url || "").indexOf(ni) > -1 && (o.debug = !0),
            l = function() {
                var l = function(n, t, r) {
                    h ? w(i, u, o, r) : ki(c, i, u, o, r, s, n, t)
                }, a = n.getConfig(), f;
                wt(o.slicedDecorations, a) || (f = t.Utils.getMarketCode(o, r, a),
                i.url ? st(o.id, e(i.url, u), f, i, o, function(n, t) {
                    l(n, t, f)
                }) : l(null, null, f))
            }
            ,
            n.setCallback(l))
        }
        function ir(n, t, i, r, u) {
            vt(n && n.userAgent) || u(null);
            var f = lt(n.url, t);
            i.id = f;
            f ? di(f, n, i, r, function(t) {
                ut(i, t, n);
                u(i)
            }) : (ut(i, null, n),
            u(i))
        }
        function yt(n) {
            return n[t.Flights.ForceMobileKnowledgeWidget] === "1"
        }
        function b(n) {
            return yt(n) || n[t.Flights.MobileKnowledgeWidgetEnabled] === "1"
        }
        function k(n) {
            return n && n.ModalDialogView ? !0 : !1
        }
        function pt(n, t) {
            return b(n) && k(t)
        }
        function wt(n, t) {
            return !b(n) && k(t)
        }
        var i = null, bt = "/widget/snapshot/getentities", d = "/widget/snapshot/extract", kt = "/widget/snapshot/getsettings", dt = "/widget/knowledge/config", gt = "/widget/snapshot/feedback", g = "_b_w_lf", ni = "bing_widget_snapshotdebug=1", l = "b_w_i_f_d", nt = "b_w_i_dd", tt = "", ti = "bing_widget_snapshot_override=", a = 512, v = 128, y = 256, p = 4096, ii = "340px", ri = "290px", s, h, c, at;
        t.extractIeInsights = ci;
        t.getSnapshotTypeOverride = ft;
        t.closeDebug = bi;
        t.entitiesFetched = ot;
        t.fetchEntities = st;
        t.settingsFetched = ht;
        t.getOptions = gi;
        t.knowledgeConfigFetched = ct;
        t.fetchKnowledgeConfig = nr;
        t.getWidgetId = lt;
        at = ["Windows Phone", "iPhone", "iPod", "MSIE 6.0", "MSIE 7.0", "Mobile Safari", "IEMobile"];
        t.isBrowserSupported = vt;
        t.processAutoSnapshot = tr;
        t.getMergedOptions = ir;
        t.inForceMobileFlight = yt;
        t.inMobileFlight = b;
        t.onMobileBrowser = k;
        t.shouldRenderMobile = pt;
        t.renderBlockedDueToMobile = wt
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        function v(t) {
            return n.core.sliceInstance(d(t, "data-type") || "")
        }
        function ft(n) {
            return n && parseInt(n.ecasz) || 40
        }
        function y(n, t) {
            var i = {
                imageStyle: [],
                width: 0,
                height: 0,
                offset: 0
            };
            return t.gls === "nl" ? (i.imageStyle = ["display: inline-block;", "border: none;", "margin-left: 2px;", "background: url(", n, "/widget/images/ewh.png) no-repeat 0 -38px;"],
            i.height = 28,
            i.width = 87,
            i.offset = i.height + 2) : t.gls === "nl1" ? (i.imageStyle = ["background: url(", n, "/widget/images/esg.png?v=1) no-repeat 0 0;"],
            i.height = 25,
            i.width = 69,
            i.offset = i.height) : (i.imageStyle = ["background: url(", n, "/widget/images/esg.png?v=1) no-repeat 0 -51px;"],
            i.height = 25,
            i.width = 69,
            i.offset = i.height),
            i.imageStyle.push("width: " + i.width + "px;"),
            i.imageStyle.push("height: " + i.height + "px;"),
            i.imageStyle.push("z-index: 999;"),
            i
        }
        function tt(n) {
            var t = {
                x: 0,
                y: 0
            };
            return (n.clientX || n.clientY) && document.body && document.body.scrollLeft != null && (t.x = n.clientX + document.body.scrollLeft,
            t.y = n.clientY + document.body.scrollTop),
            (n.clientX || n.clientY) && document.compatMode == "CSS1Compat" && document.documentElement && document.documentElement.scrollLeft != null && (t.x = n.clientX + document.documentElement.scrollLeft,
            t.y = n.clientY + document.documentElement.scrollTop),
            (n.pageX || n.pageY) && (t.x = n.pageX,
            t.y = n.pageY),
            t
        }
        function st(n, t) {
            var r = t.defblack
              , i = n.dc;
            return i != null && t[i] != null && (r = t[i]),
            r
        }
        function wt(n) {
            return st(n, et)
        }
        function bt(n) {
            return st(n, ot)
        }
        function kt(i, r, u) {
            var f, p, s, h, e, l;
            if (!i.getClientRects) {
                t.removeLink(i);
                return
            }
            if (f = v(i),
            p = !!i.getAttribute("data-linkstyle"),
            !p) {
                var c = wt(f)
                  , w = bt(f)
                  , o = i.style.cssText;
                if (o && (o[o.length - 1] != ";" && (o = o + ";"),
                c = o + c),
                i.style.cssText = c,
                w) {
                    for (s = _bw.sj_ce("span"),
                    s.style.cssText = w,
                    h = [],
                    e = 0; e < i.childNodes.length; ++e)
                        h.push(i.childNodes[e]);
                    for (e = 0; e < h.length; ++e)
                        l = h[e],
                        i.removeChild(l),
                        s.appendChild(l);
                    i.appendChild(s)
                }
            }
            if (_bw.sj_be(i, "click", function(t) {
                if (t = t || window.event,
                !n.core.withinElement(t.target, _bw._ge(g)) || d(t.target, "id") == "actionSeeMore")
                    return ui(i, t, r, u),
                    vt(i, a, t, f),
                    t.preventDefault ? t.preventDefault() : t.cancelBubble = !0,
                    !1
            }, !1),
            f && f.eca === "0")
                _bw.sj_be(i, "mouseover", function(n) {
                    return fi(i, n, r, f)
                }, !1),
                _bw.sj_be(i, "mouseout", function(n) {
                    return ei(i, n)
                }, !1);
            else {
                ht(i, f);
                wi(r);
                var b = ft(f)
                  , k = y(n.core.getSecureBingHost(), f)
                  , nt = k.offset;
                nt > b && (_bw.sj_be(i, "mouseover", function(n) {
                    return hi(i, n)
                }, !1),
                _bw.sj_be(i, "mouseout", function(n) {
                    return ci(i, n)
                }, !1))
            }
        }
        function ht(n, i) {
            for (var o = ft(i), s = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0, h = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0, f = n.getClientRects(), u = 0; u < f.length; ++u) {
                var c = f[u]
                  , e = t.moveRect(c, s, h)
                  , l = t.enlargeRect(e, o)
                  , a = new t.ElementQuadTreeNodeElement(n,l,e);
                r.Add(a)
            }
            rt.push(n)
        }
        function ct() {
            var t, n, i;
            if (p)
                for (r.Invalidate(),
                t = rt,
                rt = [],
                n = 0; n < t.length; ++n)
                    i = t[n],
                    ht(i, v(i))
        }
        function ui(n, t, i, r) {
            s = !1;
            h = tt(t);
            r(n, i, "click");
            _bw.sb_st(function() {
                s || u();
                s = !1
            }, 3e3)
        }
        function b(n) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var t = null, i, r;
                return (i = n.ownerDocument.defaultView) ? ((r = i.getComputedStyle(n, null)) && (t = r.getPropertyValue("position")),
                t) : null
            }
            return document.documentElement.currentStyle ? n.currentStyle && n.currentStyle.position || null : null
        }
        function lt(n) {
            if (b(n) !== "static")
                return n;
            for (var t = n.offsetParent || _bw._d.body; t && t.nodeName.toLowerCase() != "body" && t !== _bw._d.documentElement && b(t) === "static"; )
                t = t.offsetParent;
            return t
        }
        function at(n) {
            var u = n.offsetParent, t = n.offsetTop, i = n.offsetLeft, r = b(n), f, e;
            for (u && (t += _bw.sb_de.offsetTop,
            i += _bw.sb_de.offsetLeft); (n = n.parentNode) && n.nodeName.toLowerCase() != "body" && n !== _bw._d.documentElement; ) {
                if (r === "fixed")
                    break;
                t -= n.scrollTop;
                i -= n.scrollLeft;
                n === u && (t += n.offsetTop,
                i += n.offsetLeft,
                u = n.offsetParent);
                r = b(n)
            }
            return (r === "relative" || r === "static") && (t += _bw.sj_b.offsetTop,
            i += _bw.sj_b.offsetLeft),
            r === "fixed" && (f = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0,
            e = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0,
            t += e,
            i += f),
            {
                left: i,
                top: t
            }
        }
        function u() {
            f = !1;
            ut(_bw._d.getElementById(a));
            ut(_bw._d.getElementById(g))
        }
        function fi(r, f, e, o) {
            var b, g, v, p, ft;
            if (f = f || window.event,
            b = f.relatedTarget || (f.type == "mouseout" ? f.toElement : f.fromElement),
            !n.core.withinElement(b, i) && !_bw._ge(nt)) {
                i && u();
                s = !0;
                i = r;
                h = tt(f);
                var k = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0
                  , d = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0
                  , c = r.getClientRects()
                  , w = c[c.length - 1];
                if (c.length > 1)
                    for (g = {
                        x: h.x - k,
                        y: h.y - d
                    },
                    v = 0; v < c.length; ++v)
                        if (t.withinRect(g, c[v])) {
                            w = c[v];
                            break
                        }
                var l = y(n.core.getSecureBingHost(), o)
                  , it = w.right - (l.width - 22) + k
                  , rt = w.top - l.height + 1 + d
                  , et = lt(r)
                  , ut = at(et);
                it -= ut.left;
                rt -= ut.top;
                p = _bw.sj_ce("div");
                l.imageStyle.push("position: absolute;");
                l.imageStyle.push("left: " + parseInt(it.toString()) + "px;");
                l.imageStyle.push("top: " + parseInt(rt.toString()) + "px;");
                ft = l.imageStyle.join("");
                p.style.cssText = ft;
                p.setAttribute("id", a);
                r.appendChild(p)
            }
        }
        function vt(n, t, i, r) {
            function u(n, i) {
                var r = _bw._d.getElementById(t);
                r && (r.style.backgroundPositionY = i,
                setTimeout(function() {
                    var i = _bw._d.getElementById(t);
                    i && (i.style.backgroundPositionY = n)
                }, 100))
            }
            r.gls === "nl" && u("-38px", "-76px");
            r.gls === "nl1" && u("0px", "-25.98px");
            r.gls === "nl2" && u("-51.946px", "-77.971px")
        }
        function ei(t, r) {
            r = r || window.event;
            var f = r.type == "mouseout" ? r.toElement : r.fromElement;
            n.core.withinElement(f, i) || u()
        }
        function oi(t, r) {
            var w;
            if (!_bw._ge(nt)) {
                i && u();
                s = !0;
                i = t;
                var b = v(t)
                  , c = r
                  , f = y(n.core.getSecureBingHost(), b)
                  , e = c.right
                  , o = c.top
                  , k = lt(t)
                  , p = at(k);
                if (e -= p.left,
                o -= p.top,
                !li(t, e, o)) {
                    var d = e - (f.width - 22)
                      , g = o - f.height + 1
                      , h = _bw.sj_ce("div");
                    f.imageStyle.push("position: absolute;");
                    f.imageStyle.push("left: " + parseInt(d.toString()) + "px;");
                    f.imageStyle.push("top: " + parseInt(g.toString()) + "px;");
                    w = f.imageStyle.join("");
                    h.style.cssText = w;
                    h.setAttribute("id", a);
                    t.appendChild(h)
                }
                l = !0
            }
        }
        function si() {
            l = !1;
            f || c || u()
        }
        function hi(t, r) {
            r = r || window.event;
            var u = r.relatedTarget || (r.type == "mouseout" ? r.toElement : r.fromElement);
            n.core.withinElement(u, i) || _bw._ge(nt) || (c = !0)
        }
        function ci(t, r) {
            r = r || window.event;
            var e = r.type == "mouseout" ? r.toElement : r.fromElement;
            n.core.withinElement(e, i) || (c = !1,
            l || f || u())
        }
        function li(i, r, u) {
            var e, c, w;
            if (f)
                return !0;
            if (e = d(i, "data-entityid") || "",
            !e)
                return !1;
            var b = v(i)
              , k = b[t.Flights.HoverCardEnabled] === "1"
              , a = t.IdsToActions[e]
              , s = t.IdsToDescription[e]
              , nt = a != null
              , tt = !!s
              , it = nt || k && tt;
            if (it) {
                var rt = t.IdsToProviders[e]
                  , y = i.href
                  , ut = t.IdsToImage[e]
                  , h = t.IdsToName[e];
                h || (h = n.core.getText(i));
                c = 350;
                s.length > c && (s = s.substr(0, c - 3) + "&hellip;");
                var ft = tr(rt)
                  , et = ir(i, r, u)
                  , o = rr(g, et)
                  , ot = ki(a)
                  , st = di(y, h)
                  , ht = gi(pt, ut)
                  , ct = nr(s, y, ft, ot)
                  , p = []
                  , l = function(n) {
                    p.push(n)
                };
                return l(st.join("")),
                l(ht.join("")),
                l(ct.join("")),
                o.innerHTML = p.join(""),
                i.appendChild(o),
                w = _bw.sj_fader(),
                w.init(o, 0, 100, 12, function() {}),
                _bw.sj_be(o, "mouseover", function(n) {
                    return ai(o, n)
                }, !1),
                _bw.sj_be(o, "mouseout", function(n) {
                    return vi(o, n)
                }, !1),
                !0
            }
            return !1
        }
        function ai() {
            f = !0
        }
        function vi(t, r) {
            r = r || window.event;
            var e = r.type == "mouseout" ? r.toElement : r.fromElement;
            n.core.withinElement(e, i) || (f = !1,
            l || c || u())
        }
        function wi(n) {
            yt || (yt = !0,
            _bw.sj_be(_bw._w, "resize", pi, !1));
            p || (p = !0,
            _bw.sj_be(_bw.sb_de, "mousemove", ni, !1),
            setInterval(function() {
                ti(n)
            }, dt),
            setInterval(ri, ii))
        }
        function bi(n, i) {
            var r = i && i.vwf != null ? i.vwf || 0 : 3;
            return n >= 1600 && (r & 2) != 0 ? t.Constants.InfopaneWidthWide : n >= 1280 && (r & 1) != 0 ? t.Constants.InfopaneWidthStandard : t.Constants.InfopaneWidthNarrow
        }
        function ki(n) {
            var e = [], t, u, i, r, f;
            if (n != null) {
                for (t = function(n) {
                    e.push(n)
                }
                ,
                u = 0; u < n.length; u++) {
                    for (i = n[u],
                    t('<div class="bw_ap_dac">'),
                    t("<span>"),
                    t(i.Name),
                    t(": <\/span>"),
                    r = 0; r < i.Actions.length; r++)
                        f = i.Actions[r],
                        t('<a target="_blank" href="'),
                        t(f.Url),
                        t('">'),
                        t(f.Name),
                        t("<\/a>"),
                        r < i.Actions.length - 1 && t(" &#183; ");
                    t("<\/div>")
                }
                return e
            }
        }
        function di(n, t) {
            var r = []
              , i = function(n) {
                r.push(n)
            };
            return i('<div class="bw_ap_hr">'),
            i('<div class="bw_ap_blogo"><\/div>'),
            i('<div class="bw_ap_hr_t">'),
            i("<a href='"),
            i(n),
            i("' id='actionSeeMore'>"),
            i(t),
            i("<\/a>"),
            i("<\/div>"),
            i('<div class="bw_ap_clr"><\/div>'),
            i("<\/div>"),
            r
        }
        function gi(n, t) {
            var r = []
              , i = function(n) {
                r.push(n)
            };
            return i('<div class="bw_ap_ic">'),
            t != null && (i("<div>"),
            i('<img class="bw_ap_img" src="'),
            i(t.ImageUrl),
            i('id="'),
            i(n),
            i('"/>'),
            i("<\/div>"),
            i('<div class="bw_ap_atr">'),
            i(t.ImageAttribution),
            i("<\/div>")),
            i("<\/div>"),
            r
        }
        function nr(n, t, i, r) {
            var f = []
              , u = function(n) {
                f.push(n)
            };
            return u('<div class="bw_ap_main">'),
            u('<div class="bw_ap_dc">'),
            u('<div class="bw_ap_d">'),
            u(n),
            u("<span>"),
            u("<a href='"),
            u(t),
            u("' id='actionSeeMore'>"),
            u("&raquo;"),
            u("<\/a>"),
            u("<\/span>"),
            u("<\/div>"),
            u('<div class="bw_ap_atr">'),
            u(i),
            u("<\/div>"),
            r && r.length > 0 && (u('<div class="bw_ap_actions">'),
            u(r.join("")),
            u("<\/div>")),
            u("<\/div>"),
            u('<div class="bw_ap_clr"><\/div>'),
            u("<\/div>"),
            f
        }
        function tr(n) {
            var i = "", t;
            if (n && n.length >= 1) {
                for (t = 0; t < n.length - 1; t++)
                    n[t] && (i += n[t] + "&#183;");
                n[t] && (i += n[t])
            }
            return i
        }
        function ir(t, i, r) {
            var f = 500
              , e = 215;
            i = i - t.offsetWidth + 3;
            r = r + 20;
            var o = parseInt(n.core.getViewportWidth())
              , s = parseInt(n.core.getViewportHeight())
              , u = t.getBoundingClientRect();
            return u && u.left && u.left + f > o && (i -= f),
            u && u.bottom && u.bottom + e > s && (r -= e),
            {
                left: i,
                top: r
            }
        }
        function rr(n, t) {
            var i = ["position: absolute;"], r;
            return i.push("left: "),
            i.push(t.left.toString()),
            i.push("px;top: "),
            i.push(t.top.toString()),
            i.push("px;"),
            r = _bw.sj_ce("div"),
            r.style.cssText = i.join(""),
            r.setAttribute("id", n),
            r.setAttribute("class", "bw_ap_c"),
            r
        }
        var d = n.core.getAttr, ut = n.core.removeElement, i, h, c = !1, f = !1, l = !1, a = "bw_s_glass", g = "bw_s_action", pt = "bw_s_action_n", nt = "bw_i_glass", s = !1, et, ot;
        t.getGlassStyle = y;
        et = {
            "default": "text-decoration: none; border-bottom: 3px double #cccccc;",
            def: "",
            defblue: "color: blue;",
            defblack: "color: #000;",
            solblack: "text-decoration: underline; color: #000;",
            solbbblack: "text-decoration: none; border-bottom: 1px solid #000;",
            sol3px: "text-decoration: none; border-bottom: 3px solid #cccccc;",
            sol2px: "text-decoration: none; border-bottom: 2px solid #cccccc;",
            red: "text-decoration: none; border-bottom: 3px double #cc0000;",
            newred: "text-decoration: none; border-bottom: 3px double #E81123;",
            yellow: "text-decoration: none; border-bottom: 3px double #FFB900;",
            grey: "text-decoration: none; border-bottom: 3px double #cccccc;",
            black: "color: #000; text-decoration: none; border-bottom: 3px double #000;",
            dotgrey: "text-decoration: none; border-bottom: 2px dotted #cccccc;",
            dotyellow: "text-decoration: none; border-bottom: 2px dotted #FFB900;",
            dotred: "text-decoration: none; border-bottom: 2px dotted #E81123;",
            dotblack: "text-decoration: none; border-bottom: 2px dotted #000;",
            dashgrey: "text-decoration: none; border-bottom: 2px dashed #cccccc;",
            dashyellow: "text-decoration: none; border-bottom: 2px dashed #FFB900;",
            dashred: "text-decoration: none; border-bottom: 2px dashed #E81123;",
            dashblack: "text-decoration: none; border-bottom: 2px dashed #000;",
            properdotgrey: "text-decoration: none; border-bottom: 2px dotted #cccccc;position:relative;top: -2px;",
            properdotyellow: "text-decoration: none; border-bottom: 2px dotted #FFB900;position:relative;top: -2px;",
            properdotred: "text-decoration: none; border-bottom: 2px dotted #E81123;position:relative;top: -2px;",
            properdashgrey: "text-decoration: none; border-bottom: 2px dashed #cccccc;position:relative;top: -2px;",
            properdotblack: "text-decoration: none; border-bottom: 2px dotted #000;position:relative;top: -2px;",
            properdashblack: "text-decoration: none; border-bottom: 2px dashed #000;position:relative;top: -2px;",
            properdashyellow: "text-decoration: none; border-bottom: 2px dashed #FFB900;position:relative;top: -2px;",
            properdashred: "text-decoration: none; border-bottom: 2px dashed #E81123;position:relative;top: -2px;",
            propergrey: "text-decoration: none; border-bottom: 3px double #cccccc;position:relative;top: -2px;",
            properyellow: "text-decoration: none; border-bottom: 3px double #FFB900;position:relative;top: -2px;",
            properred: "text-decoration: none; border-bottom: 3px double #E81123;position:relative;top: -2px;",
            properblack: "color: #000; text-decoration: none; border-bottom: 3px double #000;position:relative;top: -2px;"
        };
        ot = {
            properdotgrey: "position:relative;top: 2px;",
            properdotyellow: "position:relative;top: 2px;",
            properdotred: "position:relative;top: 2px;",
            properdashgrey: "position:relative;top: 2px;",
            properdotblack: "position:relative;top: 2px;",
            properdashblack: "position:relative;top: 2px;",
            properdashyellow: "position:relative;top: 2px;",
            properdashred: "position:relative;top: 2px;",
            propergrey: "position:relative;top: 2px;",
            properyellow: "position:relative;top: 2px;",
            properred: "position:relative;top: 2px;",
            properblack: "position:relative;top: 2px;"
        };
        t.addExplicitEvents = kt;
        var r = new t.ElementQuadTree
          , p = !1
          , dt = 100
          , it = !1
          , w = {
            x: 0,
            y: 0
        }
          , rt = []
          , e = null
          , o = null
          , gt = -1
          , ni = function(n) {
            var t = tt(n);
            (t.x != w.x || t.y != w.y) && (w = t,
            it = !0)
        }
          , ti = function(n) {
            if (it) {
                it = !1;
                var i = r.Find(w)
                  , t = null
                  , u = null;
                i != null && (u = i.element,
                t = i.clientRect);
                (u != e || t != null && o != null && (t.left != o.left || t.top != o.top)) && (e != null && si(e, o),
                e = u,
                gt = -1,
                o = t,
                e != null && oi(e, o, n))
            }
        }
          , ii = 1e3
          , ri = function() {
            p && r.IsInitialized() && (r.Width() != r.DocumentWidth() || r.Height() != r.DocumentHeight()) && ct()
        };
        t.explicitWidgetGlassClick = vt;
        var yt = !1
          , k = null
          , yi = 500
          , pi = function() {
            k && _bw.sb_ct(k);
            k = _bw.sb_st(function() {
                k = null;
                ct()
            }, yi)
        };
        t.getSnapshotWidth = bi
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n) {
                this.urls = n ? n : [];
                this.lastReturnedItem = ""
            }
            return n.prototype.add = function(n) {
                (this.urls.length == 0 || this.urls.length > 0 && this.urls[this.urls.length - 1] != n) && (this.lastReturnedItem && (this.urls.push(this.lastReturnedItem),
                this.lastReturnedItem = null),
                this.urls.push(n),
                this.lastOperationAdd = !0)
            }
            ,
            n.prototype.back = function() {
                return this.urls.length == 0 ? null : (this.lastOperationAdd && this.urls.length > 1 && this.urls.pop(),
                this.lastOperationAdd = !1,
                this.urls.length == 1 ? (this.lastReturnedItem = null,
                this.urls[0]) : (this.lastReturnedItem = this.urls.pop(),
                this.lastReturnedItem))
            }
            ,
            n.prototype.clear = function() {
                this.urls = []
            }
            ,
            n.prototype.shouldDisplayBackButton = function() {
                return this.urls.length > 1 || !(this.lastReturnedItem == "" || this.lastReturnedItem == null)
            }
            ,
            n.prototype.showItems = function() {
                return this.urls.join(", ")
            }
            ,
            n.prototype.debugHistoryQueries = function() {
                for (var i = [], n = 0, t, r, n = 0; n < this.urls.length; n++)
                    t = this.urls[n].match(/\?q=(.+?)(?:&|$)/i),
                    r = t && t.length == 2 ? t[1].replace(/(%20|\+)/g, " ") : "",
                    i.push(r);
                return "[" + i.join(", ") + "]    " + (this.shouldDisplayBackButton() ? "X" : "")
            }
            ,
            n
        }();
        n.HistoryManager = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        function u(u) {
            typeof t.$bw == "undefined" && n.core.getScript(i, function() {
                typeof jQuery != "undefined" ? (t.$bw = jQuery.noConflict(!0),
                u()) : r.error("BW", "Failed to load JQuery", "bootstrap.knowledge.loadJQuery")
            })
        }
        var r = null, i;
        t.$bw;
        i = "//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js";
        t.loadJQuery = u
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function n() {}
            return n
        }(), r, u;
        t.SelectionInfo = i;
        r = function() {
            function n() {}
            return n
        }();
        t.SelectionContext = r;
        u = function() {
            function r(n, t, i) {
                this.snapshotGlassId = "bw_s_glass";
                this.insightGlassId = "bw_i_glass";
                this.glassLeftOffset = 8;
                this.glassTopOffset = 3;
                this.glassAutoDismissDelay = 400;
                this.maxSelectedWords = 6;
                this.glassPreviousPosition = {};
                this.bingHost = n;
                this.flight = t;
                this.renderer = i;
                this.textSelectionHandler();
                this.textUnselectHandler()
            }
            return r.prototype.textSelectionHandler = function() {
                var n = this;
                _bw.sj_be(_bw._d.documentElement, "mouseup", function(t) {
                    var i = n.getSelectedText().replace(/^\s+|\s+$/g, "")
                      , r = i.match(/\w+/g);
                    i && r && r.length > 0 && r.length <= n.maxSelectedWords && t.which == 1 && (n.showGlass(i),
                    n.selectioninfo = n.getSelectionInfo())
                })
            }
            ,
            r.prototype.textUnselectHandler = function() {
                var t = this;
                _bw.sj_be(_bw._d.documentElement, "mousedown", function(i) {
                    i = i || window.event;
                    var r = n.core.getTarget(i);
                    r && r.id != t.insightGlassId && r.id != t.snapshotGlassId && (t.hideGlass(),
                    i.which == 1 && t.clearTextSelection(),
                    t.selectioninfo = null)
                })
            }
            ,
            r.prototype.getSelectionInfo = function() {
                var n = null, u, t, r;
                try {
                    u = this.getSelection();
                    n = new i;
                    t = u.toString();
                    r = this.getSelectionParentElement();
                    n.selectedText = t;
                    n.selectionParent = r;
                    n.selectionStartingOffset = this.getCaretCharacterOffsetWithin(r) - t.length
                } catch (f) {}
                return n
            }
            ,
            r.prototype.getCaretCharacterOffsetWithin = function(n) {
                var f = 0, t = n.ownerDocument || n.document, o = t.defaultView || t.parentWindow, e, i, r, s, u;
                return typeof o.getSelection != "undefined" ? (i = o.getSelection().getRangeAt(0),
                r = i.cloneRange(),
                r.selectNodeContents(n),
                r.setEnd(i.endContainer, i.endOffset),
                f = r.toString().length) : (e = t.selection) && e.type != "Control" && (s = e.createRange(),
                u = t.body.createTextRange(),
                u.moveToElementText(n),
                u.setEndPoint("EndToEnd", s),
                f = u.text.length),
                f
            }
            ,
            r.prototype.getSelectedText = function() {
                var n = "";
                return window.getSelection ? n = window.getSelection().toString() : document.getSelection ? n = document.getSelection().toString() : document.selection && (n = document.selection.createRange().text),
                n
            }
            ,
            r.prototype.clearTextSelection = function() {
                window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection ? document.getSelection().removeAllRanges() : document.selection && document.selection.empty()
            }
            ,
            r.prototype.getSelection = function() {
                var n = null;
                return window.getSelection ? n = window.getSelection() : document.getSelection ? n = document.getSelection() : document.selection && (n = document.selection.createRange()),
                n
            }
            ,
            r.prototype.getSelectionParentElement = function() {
                var n = null, t;
                return window.getSelection ? (t = window.getSelection(),
                t.rangeCount && (n = t.getRangeAt(0).commonAncestorContainer,
                n.nodeType != 1 && (n = n.parentNode))) : (t = document.selection) && t.type != "Control" && (n = t.createRange().parentElement()),
                n
            }
            ,
            r.prototype.showGlass = function(n) {
                var e = this, f;
                this.hideGlass();
                var o = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0
                  , s = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0
                  , u = this.getSelectionCoords();
                if (u) {
                    var i = t.getGlassStyle(this.bingHost, this.flight)
                      , h = u.left + this.glassLeftOffset + o
                      , c = u.top - i.height - this.glassTopOffset + s
                      , r = _bw.sj_ce("div");
                    r.id = this.insightGlassId;
                    i.imageStyle.push("cursor: pointer;");
                    i.imageStyle.push("position: absolute;");
                    i.imageStyle.push("left: " + parseInt(h.toString()) + "px;");
                    i.imageStyle.push("top: " + parseInt(c.toString()) + "px;");
                    i.imageStyle.push("width: " + i.width + "px;");
                    i.imageStyle.push("height: " + i.height + "px;");
                    f = i.imageStyle.join("");
                    r.style.cssText = f;
                    _bw._d.body.appendChild(r);
                    _bw.sj_be(r, "click", function(t) {
                        e.glassClicked(t, n, r)
                    }, !1)
                }
            }
            ,
            r.prototype.hideGlass = function() {
                var t = _bw._ge(this.insightGlassId)
                  , i = _bw._ge(this.snapshotGlassId);
                t && n.core.removeElement(t);
                i && n.core.removeElement(i)
            }
            ,
            r.prototype.glassClicked = function(n, i, r) {
                var s = this, o;
                t.explicitWidgetGlassClick(r, this.insightGlassId, n, this.flight);
                var u = null
                  , f = null
                  , h = new t.ContextExtraction
                  , e = h.extractSelectionContext(this.selectioninfo);
                e && (u = e.fullContext,
                f = e.startingIndex);
                this.flight && this.flight[t.Flights.IeInsights] === "1" ? this.renderer.renderIeInsights(i, u, f) : (o = this.renderer.getSnapshotIframeUrl(i, null, null, u, f),
                this.renderer.renderSnapshot(o, null, r.offsetTop, !1, !0));
                setTimeout(function() {
                    s.hideGlass()
                }, this.glassAutoDismissDelay)
            }
            ,
            r.prototype.getSelectionCoords = function() {
                var u = _bw._d.selection, n = 0, t = 0, i, f, r, e;
                return u ? u.type != "Control" && (i = u.createRange(),
                i.collapse(!0),
                n = i.boundingLeft,
                t = i.boundingTop) : window.getSelection && (f = window.getSelection(),
                f.rangeCount && (r = f.getRangeAt(0).cloneRange(),
                r.getClientRects && (r.collapse(!0),
                e = r.getClientRects()[0],
                n = e.left,
                t = e.top))),
                n == 0 && t == 0 ? null : {
                    left: n,
                    top: t
                }
            }
            ,
            r
        }();
        t.KnowledgeInsight = u
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function t() {
                this.leftTextNodes = [];
                this.rightTextNodes = [];
                this.leftCharCount = 0;
                this.rightCharCount = 0;
                this.maxContextTextSize = 1024;
                this.blacklistedNodes = {
                    SCRIPT: 1,
                    STYLE: 1,
                    IFRAME: 1,
                    OBJECT: 1,
                    EMBED: 1,
                    AUDIO: 1,
                    VIDEO: 1,
                    CANVAS: 1,
                    FRAME: 1,
                    FRAMESET: 1,
                    NOSCRIPT: 1,
                    TEXTAREA: 1
                };
                this.documentTopNodes = {
                    BODY: 1,
                    HTML: 1
                }
            }
            return t.prototype.extractSelectionContext = function(t) {
                if (!n.$bw)
                    return null;
                var u = new n.SelectionContext
                  , i = n.$bw(t.selectionParent).text()
                  , r = this.compactParentTextAndGetNewIndex(i, t.selectedText, t.selectionStartingOffset);
                if (r && r.compactedText.length <= this.maxContextTextSize) {
                    i = r.compactedText;
                    var o = this.maxContextTextSize - i.length
                      , f = o / 2
                      , e = this.getLeftContextText(t.selectionParent, f)
                      , s = this.getRightContextText(t.selectionParent, f);
                    u.fullContext = e + " " + i + " " + s;
                    u.startingIndex = e.length + 1 + r.selectionStartingOffset
                }
                return u
            }
            ,
            t.prototype.getLeftContextText = function(t, i) {
                this.leftTextNodes = [];
                this.leftCharCount = 0;
                this.leftSubtreeWalk(n.$bw(t), i);
                var r = this.leftTextNodes.reverse().join(" ");
                return r.length <= i ? r : r.substr(r.length - i)
            }
            ,
            t.prototype.getRightContextText = function(t, i) {
                this.rightTextNodes = [];
                this.rightCharCount = 0;
                this.rightSubtreeWalk(n.$bw(t), i);
                var r = this.rightTextNodes.join(" ");
                return r.length <= i ? r : r.substr(0, i)
            }
            ,
            t.prototype.leftSubtreeWalk = function(t, i) {
                var e, u, r, f;
                if (t && t.length && !(this.leftCharCount > i)) {
                    for (e = this.getLeftSiblings(t.get(0)),
                    u = 0; u < e.length; u++) {
                        if (r = e[u],
                        this.leftCharCount > i)
                            break;
                        this.isBlacklistedTag(r.tagName) || (r.childNodes.length == 0 ? (f = this.cleanText(n.$bw(r).text()),
                        f && (this.leftTextNodes.push(f),
                        this.leftCharCount += f.length)) : this.reversePostOrder(r, i))
                    }
                    this.isDocumentTopNode(t.prop("tagName")) || this.isDocumentTopNode(t.parent().prop("tagName")) || this.leftSubtreeWalk(t.parent(), i)
                }
            }
            ,
            t.prototype.reversePostOrder = function(n, t) {
                if (n && !(this.leftCharCount > t)) {
                    n = n.lastChild;
                    for (var i = null; n; )
                        n.nodeType == 3 ? this.leftCharCount += this.pushCleanedTextNode(n, this.leftTextNodes) : (this.isBlacklistedTag(n.tagName) || this.reversePostOrder(n, t),
                        i = n),
                        n = n.previousSibling;
                    this.leftCharCount += this.pushCleanedTextNode(i, this.leftTextNodes)
                }
            }
            ,
            t.prototype.rightSubtreeWalk = function(t, i) {
                var e, u, r, f;
                if (t && t.length && !(this.rightCharCount > i)) {
                    for (e = this.getRightSiblings(t.get(0)),
                    u = 0; u < e.length; u++) {
                        if (r = n.$bw(e[u]),
                        this.rightCharCount > i)
                            break;
                        this.isBlacklistedTag(r.prop("tagName")) || (r.children().length == 0 ? (f = this.cleanText(r.text()),
                        f && (this.rightTextNodes.push(f),
                        this.rightCharCount += f.length)) : this.forwardPreOrder(r.get(0), i))
                    }
                    this.isDocumentTopNode(t.prop("tagName")) || this.isDocumentTopNode(t.parent().prop("tagName")) || this.rightSubtreeWalk(t.parent(), i)
                }
            }
            ,
            t.prototype.forwardPreOrder = function(n, t) {
                if (this.rightCharCount += this.pushCleanedTextNode(n, this.rightTextNodes),
                !(this.rightCharCount > t))
                    for (n = n.firstChild; n; )
                        this.isBlacklistedTag(n.tagName) || this.forwardPreOrder(n, t),
                        n = n.nextSibling
            }
            ,
            t.prototype.isBlacklistedTag = function(n) {
                return n && this.blacklistedNodes[n] == 1
            }
            ,
            t.prototype.isDocumentTopNode = function(n) {
                return n && this.documentTopNodes[n] == 1
            }
            ,
            t.prototype.cleanText = function(n) {
                var t = n.replace(/[\r\n\t\f\v<>]/g, " ").replace(/  +/g, " ").replace(/^\s+|\s+$/g, "");
                return t.length == 0 ? null : t
            }
            ,
            t.prototype.pushCleanedTextNode = function(n, t) {
                if (n && n.nodeType == 3 && n.nodeValue) {
                    var i = this.cleanText(n.nodeValue);
                    if (i)
                        return t.push(i),
                        i.length
                }
                return 0
            }
            ,
            t.prototype.getLeftSiblings = function(t) {
                var r = this
                  , i = [];
                return n.$bw(t).parent().contents().each(function(n, u) {
                    return r.isSameNode(u, t) ? !1 : (i.push(u),
                    !0)
                }),
                i.reverse()
            }
            ,
            t.prototype.getRightSiblings = function(t) {
                var u = this
                  , i = !0
                  , r = [];
                return n.$bw(t).parent().contents().each(function(n, f) {
                    i ? u.isSameNode(f, t) && i && (i = !1) : r.push(f)
                }),
                r
            }
            ,
            t.prototype.isSameNode = function(n, t) {
                return n === t
            }
            ,
            t.prototype.compactParentTextAndGetNewIndex = function(n, t, i) {
                var e;
                if (!n || !t)
                    return null;
                var o = n.substring(0, i)
                  , s = n.substring(i + t.length)
                  , r = this.cleanText(o) || ""
                  , u = this.cleanText(s) || ""
                  , f = (this.maxContextTextSize - t.length - 2) / 2;
                return r && (r.length > f && (r = r.slice(-f)),
                r += " "),
                u && (u.length > f && (u = u.slice(0, f)),
                u = " " + u),
                e = r + t + u,
                {
                    compactedText: e,
                    selectionStartingOffset: r.length
                }
            }
            ,
            t
        }();
        n.ContextExtraction = t
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function i(t) {
                this.closeButton = "×";
                this.title = "Did you know?";
                this.bodyline1 = "You can click for a quick way to learn more about <u>{0}<\/u>.";
                this.bodyline2 = "Learn more about any word or phrase – just highlight and click the Bing logo.";
                this.firstRunKey = "insights-first-run";
                this.firstRunImpressionsKey = "insights-fr-impressions";
                this.maxImpressions = 3;
                this.flyoutWidth = 250;
                this.extraEdgePadding = 130;
                this.minimumLinkWidth = 50;
                this.flyoutTopOffset = 12;
                this.repositionIntervalMs = 500;
                this.container = t;
                this.cdStorage = n.CrossDomainStorage.getInstance();
                this.init()
            }
            return i.prototype.init = function() {
                var n = this;
                this.container && this.cdStorage && _bw._d.querySelectorAll && this.cdStorage.getItem(this.firstRunKey, function(t) {
                    t != "1" && n.cdStorage.getItem(n.firstRunImpressionsKey, function(t) {
                        n.impressionCount = t ? parseInt(t) : 0;
                        n.impressionCount < n.maxImpressions ? n.initializeFlyout() : n.cdStorage.setItem(n.firstRunKey, "1")
                    })
                })
            }
            ,
            i.prototype.initializeFlyout = function() {
                var i = this
                  , r = _bw._ge(t.Constants.InsightFirstRunId);
                r && n.core.removeElement(r);
                this.buildAndAppendFirstRunFlyout();
                this.positionAndShowFlyout();
                _bw.sj_be(_bw._w, "resize", function() {
                    return i.removeFlyout()
                }, !1);
                _bw.sj_be(this.insightsElem.querySelector("u"), "click", function() {
                    return i.linkClicked()
                }, !1)
            }
            ,
            i.prototype.buildAndAppendFirstRunFlyout = function() {
                var s = this, r = _bw.sj_ce("span"), i, o, u, f, e;
                r.className = "close";
                n.core.setText(r, this.closeButton);
                _bw.sj_be(r, "click", function() {
                    return s.closeFlyout()
                }, !1);
                i = _bw.sj_ce("span");
                i.className = "triangle";
                _bw.sj_be(i, "click", function() {
                    return s.linkClicked()
                }, !1);
                o = _bw.sj_ce("span");
                o.className = "inside";
                i.appendChild(o);
                u = _bw.sj_ce("div");
                u.className = "title";
                n.core.setText(u, this.title);
                f = _bw.sj_ce("div");
                f.className = "line1";
                f.innerHTML = this.bodyline1;
                e = _bw.sj_ce("div");
                e.className = "line2";
                n.core.setText(e, this.bodyline2);
                this.insightsElem = _bw.sj_ce("div");
                this.insightsElem.className = "bkw-firstrun";
                this.insightsElem.id = t.Constants.InsightFirstRunId;
                this.insightsElem.appendChild(r);
                this.insightsElem.appendChild(i);
                this.insightsElem.appendChild(u);
                this.insightsElem.appendChild(f);
                this.insightsElem.appendChild(e);
                this.container.appendChild(this.insightsElem)
            }
            ,
            i.prototype.positionAndShowFlyout = function() {
                var i, o, u, s, f;
                if (this.insightsElem) {
                    this.attachedLink = null;
                    var e = _bw._d.querySelectorAll("." + t.Constants.WidgetLinkClass)
                      , h = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0
                      , c = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0
                      , r = 0;
                    for (r; r < e.length; r++)
                        if (this.attachedLink = e[r],
                        i = this.attachedLink.getBoundingClientRect(),
                        o = i.right - i.left,
                        o > this.minimumLinkWidth && i.left + this.flyoutWidth + this.extraEdgePadding < parseInt(n.core.getViewportWidth())) {
                            if (i.top + this.flyoutWidth > parseInt(n.core.getViewportHeight()))
                                break;
                            if (u = this.insightsElem.querySelector(".line1"),
                            u) {
                                s = this.getInnerText(e[r]);
                                f = u.innerHTML;
                                f = f.replace(/\{0\}/, s);
                                u.innerHTML = f;
                                this.insightsElem.style.top = i.bottom + c + this.flyoutTopOffset + "px";
                                this.insightsElem.style.left = i.left + h + "px";
                                this.insightsElem.style.display = "inline-block";
                                this.cdStorage.setItem(this.firstRunImpressionsKey, (++this.impressionCount).toString());
                                this.installRepositionInterval();
                                break
                            }
                        }
                }
            }
            ,
            i.prototype.installRepositionInterval = function() {
                var n = this;
                this.repositionInterval = setInterval(function() {
                    var t;
                    if (n.attachedLink) {
                        if (t = n.attachedLink.getBoundingClientRect(),
                        t.top <= 0 || t.left <= 0) {
                            n.removeFlyout();
                            return
                        }
                        var u = _bw.sb_de.scrollLeft || _bw._w.pageXOffset || 0
                          , f = _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0
                          , i = t.bottom + f + n.flyoutTopOffset
                          , r = t.left + u;
                        parseInt(n.insightsElem.style.top) != i && (n.insightsElem.style.top = i + "px");
                        parseInt(n.insightsElem.style.left) != r && (n.insightsElem.style.left = r + "px")
                    }
                }, this.repositionIntervalMs)
            }
            ,
            i.prototype.linkClicked = function() {
                this.attachedLink && this.attachedLink.click();
                this.closeFlyout()
            }
            ,
            i.prototype.removeFlyout = function() {
                this.insightsElem && (n.core.removeElement(this.insightsElem),
                this.insightsElem = null,
                this.repositionInterval && clearInterval(this.repositionInterval))
            }
            ,
            i.prototype.closeFlyout = function() {
                this.cdStorage.setItem(this.firstRunKey, "1");
                this.removeFlyout()
            }
            ,
            i.prototype.getInnerText = function(n) {
                return "innerText"in n ? n.innerText : n.textContent
            }
            ,
            i
        }();
        t.InsightsFirstRun = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function i(t, i, r) {
                this.options = t;
                this.bingHost = n.core.getSecureBingHost();
                this.props = i;
                this.isMobile = r;
                this.initializeKnowledgeInsights()
            }
            return i.prototype.getDocument = function() {
                return this.options.renderHint == "top" && _bw._d.parentWindow && _bw._d.parentWindow.top ? _bw._d.parentWindow.top.document : this.options.renderHint == "parent" && _bw._d.parentWindow ? _bw._d.parentWindow.document : _bw._d
            }
            ,
            i.prototype.renderSnapshot = function(n, t, i) {
                i === void 0 && (i = -1);
                throw new Error("This method is abstract");
            }
            ,
            i.prototype.renderIeInsights = function() {
                throw new Error("This method is abstract");
            }
            ,
            i.prototype.renderIeMarkup = function() {
                throw new Error("This method is abstract");
            }
            ,
            i.prototype.getSnapshotIframeUrl = function() {
                throw new Error("This method is abstract");
            }
            ,
            i.prototype.logSnapshotClick = function(t, i) {
                // n.core.Logging.dims("BN", 0, 0, this.getSnapshotTypeString(this.parseEntityIdFromUrl(i)), this.props ? this.props.url : "", this.widgetMarket, this.options.formCode, t)
            }
            ,
            i.prototype.initializeKnowledgeInsights = function() {
                this.isMobile || (this.options.insightSearch == 1 || this.isInteractiveSearchOnly()) && (this.knowledgeInsights = new t.KnowledgeInsight(this.bingHost,this.options.slicedFlight,this),
                this.isInsightsFirstRunEnabled() && new t.InsightsFirstRun(_bw._d.body))
            }
            ,
            i.prototype.isInteractiveSearchOnly = function() {
                return this.options.visualization == t.Constants.VisualizationInteractive ? !0 : typeof this.options.slicedFlight != "undefined" && this.options.slicedFlight[t.Flights.InteractiveOnly] == "1"
            }
            ,
            i.prototype.getSnapshotTypeString = function(t) {
                var i = n.core.cloneInstance(this.options.slicedFlight);
                return t && (i.id = t),
                n.core.serializeInstance(i)
            }
            ,
            i.prototype.parseEntityIdFromUrl = function(n) {
                var t, i;
                return n && ((t = n.match(/&stid=(.+?)(?:&|$)/i),
                t && t.length == 2) || (i = decodeURIComponent(n),
                t = i.match(/(?:eid|sid):"(.+?)"/i),
                t && t.length == 2)) ? t[1] : ""
            }
            ,
            i.prototype.isInsightsFirstRunEnabled = function() {
                return n.CrossDomainStorage.getInstance() != null && typeof this.options.slicedFlight != "undefined" && typeof this.options.slicedFlight.ifr != "undefined" && this.options.slicedFlight.ifr == "1"
            }
            ,
            i
        }();
        t.RendererBase = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {}));
__extends = this.__extends || function(n, t) {
    function r() {
        this.constructor = n
    }
    for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
    r.prototype = t.prototype;
    n.prototype = new r
}
,
function(n) {
    var t;
    (function(t) {
        var i;
        (function(i) {
            var r = null
              , u = function(i) {
                function u(n, r, u, f, e, o) {
                    i.call(this, u, r, !1);
                    this.resizeHandlerInstalled = !1;
                    this.snapshotFrameLoaded = !1;
                    this.lastViewportHeight = 0;
                    this.kwScript = n;
                    this.props = r;
                    this.userSettings = f;
                    this.widgetId = e;
                    this.snapshotWidth = this.getOptimalSnapshotWidth();
                    this.widgetMarket = t.Utils.getMarketOrDefault(o);
                    this.carouselViewed = !1;
                    this.historyManager = new t.HistoryManager;
                    this.overrideConstantsWithFlightParameters();
                    this.installEventHandlers();
                    this.renderContainer();
                    this.initializeSettingsMenu()
                }
                return __extends(u, i),
                u.prototype.initializeSettingsMenu = function() {
                    this.isSettingsMenuEnabled() && (this.settingsMenu = new t.SettingsMenu(this.bingHost,this.options,this.props,this.kwParent),
                    this.settingsMenu.init())
                }
                ,
                u.prototype.renderContainer = function() {
                    var t, i, r, f;
                    this.appendSnapshotStylesToHeader();
                    t = ["background-color: #f4f4f4; z-index:10000000000; border: 0px solid red;position:fixed;top:0px;display:none;width:auto;"];
                    i = _bw._ge(u.constants.kwParentId);
                    i && n.core.removeElement(i);
                    r = this.getDocument();
                    this.kwParent = r.createElement("div");
                    this.kwParent.id = u.constants.kwParentId;
                    t.push("right: 0px;");
                    this.isCarouselEnabled() ? (f = this.getCarouselInitialState(),
                    this.kwHandle = this.renderTabHandle(f),
                    this.kwCarousel = this.renderCarousel(),
                    this.installCarouselEventHandlers(),
                    this.kwParent.appendChild(this.kwHandle),
                    this.kwParent.appendChild(this.kwCarousel),
                    f == 0 ? this.hideCarousel(!1) : (n.core.addClass(this.kwParent, "bw-shadow"),
                    n.core.addClass(this.kwHandle, "tab-collapsed"),
                    n.core.appendVisibleFlag(this.kwCarousel),
                    this.carouselViewed = !0)) : (t.push("display: none;"),
                    t.push("right: -" + this.snapshotWidth + "px;"));
                    this.kwLoading = this.renderloadingImage();
                    this.kwParent.appendChild(this.kwLoading);
                    n.core.setAttr(this.kwParent, "style", t.join(""));
                    r.body.appendChild(this.kwParent)
                }
                ,
                u.prototype.installEventHandlers = function() {
                    var n = this;
                    this.resizeHandlerInstalled || (this.resizeHandlerInstalled = !0,
                    _bw.sj_be(_bw._w, "resize", function() {
                        return n.resizeSnapshotsIframes()
                    }, !1),
                    setInterval(function() {
                        return n.checkSizeChange()
                    }, u.constants.resizeCheckInterval),
                    this.options.easyDismiss != 0 && _bw.sj_be(_bw._d.body, "mousedown", function(t) {
                        return n.lightDismissHandler(t)
                    }, !1),
                    this.windowMessageDispatcher(),
                    _bw.sj_evt.bind("carouselState", function() {
                        return n.carouselStateChanged()
                    }),
                    _bw.sj_evt.bind("infopaneWidth", function() {
                        return n.snapshotWidthChanged()
                    }),
                    _bw.sj_evt.bind("hideWidget", function() {
                        return n.userHideKnowledgeWidget()
                    }))
                }
                ,
                u.prototype.installCarouselEventHandlers = function() {
                    var n = this;
                    _bw.sj_be(this.kwHandle, "click", function() {
                        return n.toggleCarousel()
                    }, !1);
                    _bw.sj_be(this.kwCarousel, "load", function() {
                        return n.kwParent.style.display = "inline-block"
                    }, !1);
                    this.kwHandleClose && _bw.sj_be(this.kwHandleClose, "click", function(t) {
                        return n.tabCloseClickHandler(t)
                    }, !0);
                    this.isSettingsMenuEnabled() && this.kwHandleSettings && _bw.sj_be(this.kwHandleSettings, "click", function(t) {
                        return n.settingsMenu.showMenu(t, n.kwHandleSettings.getBoundingClientRect())
                    }, !0)
                }
                ,
                u.prototype.resizeSnapshotsIframes = function() {
                    var t, r, i, f, e;
                    this.lastViewportHeight = parseInt(n.core.getViewportHeight());
                    t = this.lastViewportHeight + "px";
                    this.kwCarousel && (this.kwCarousel.height = t);
                    this.kwHandle && (this.kwHandle.style.marginTop = this.getTabHandleTopMargin());
                    r = this.getDocument();
                    i = r.getElementById(u.constants.kwSnapId);
                    i && (i.height = t);
                    this.kwParent && (f = parseInt(n.core.getViewportWidth()),
                    e = this.kwParent.getBoundingClientRect().width,
                    e - f > -100 && this.closeKnowledgeWidget(!1))
                }
                ,
                u.prototype.checkSizeChange = function() {
                    var t = parseInt(n.core.getViewportHeight());
                    t != this.lastViewportHeight && this.resizeSnapshotsIframes()
                }
                ,
                u.prototype.appendSnapshotStylesToHeader = function() {
                    var t, i;
                    n.core.addStyleLink(this.bingHost + u.constants.kwCss);
                    t = [];
                    t.push(".kw-loading{");
                    t.push("top: " + u.constants.kwLoadingTopoffset + "px;");
                    t.push("width: " + u.constants.kwLoadingWidth + "px;");
                    t.push("}");
                    this.isShadowEnabled() && (t.push(".bw-shadow{"),
                    t.push("-webkit-box-shadow: -3px 4px 5px 0px rgba(50, 50, 50, 0.68);"),
                    t.push("-moz-box-shadow: -3px 4px 5px 0px rgba(50, 50, 50, 0.68);"),
                    t.push("box-shadow: -3px 4px 5px 0px rgba(50, 50, 50, 0.68);"),
                    t.push("}"));
                    i = t.join("");
                    n.core.addStyle(i)
                }
                ,
                u.prototype.windowMessageDispatcher = function() {
                    var n = this;
                    _bw.sj_be(_bw._w, "message", function(t) {
                        var r, u, i;
                        if (t && t.data && typeof t.data == "string" && (r = t.data.indexOf(":"),
                        r != -1)) {
                            u = t.data.substring(0, r);
                            i = t.data.substring(r + 1);
                            switch (u) {
                            case "CarouselPost":
                                n.CarouselClickHandler(i);
                                break;
                            case "SnapshotNavigate":
                                n.snapshotNavigateHandler(i);
                                break;
                            case "CarouselLoadFC":
                                n.CarouselFeedCountHandler(i);
                                break;
                            case "CarouselLoadError":
                                n.CarouselErrorHandler(i);
                                break;
                            case "snapshotClose":
                                n.SnapshotCloseHandler(i);
                                break;
                            case "snapshotSettings":
                                n.SnapshotSettingsButtonHandler(i);
                                break;
                            case "snapshotLoad":
                                n.snapshotLoadHandler(i);
                                break;
                            case "SnapshotBackButton":
                                n.snapshotBackButtonHandler(i)
                            }
                        }
                    })
                }
                ,
                u.prototype.CarouselClickHandler = function(n) {
                    if (n && n.length != 0)
                        try {
                            var i = JSON.parse(n);
                            this.carouselItemClicked(i.query || "", i.entityid || "", i.filters || "")
                        } catch (t) {
                            typeof t != "string" && (t = t.toString());
                            r.error("BW", t, "KnowledgeWidget.CarouselClickListener")
                        }
                }
                ,
                u.prototype.snapshotNavigateHandler = function(n) {
                    n && n.length != 0 && this.renderSnapshot(n, null, -1, !1)
                }
                ,
                u.prototype.CarouselFeedCountHandler = function(n) {
                    if (n && n.length != 0) {
                        var t = parseInt(n);
                        t < 3 && this.isCarouselOpen() && this.hideCarousel(!1)
                    }
                }
                ,
                u.prototype.CarouselErrorHandler = function() {
                    this.kwCarousel.style.display = "none";
                    this.kwHandle.style.display = "none";
                    this.carouselViewed = !1
                }
                ,
                u.prototype.SnapshotCloseHandler = function() {
                    this.closeKnowledgeWidget(!0)
                }
                ,
                u.prototype.SnapshotSettingsButtonHandler = function() {
                    var i = parseInt(n.core.getViewportWidth())
                      , t = 40
                      , r = {
                        top: 7,
                        width: t,
                        left: i - t * 2,
                        right: i - t
                    };
                    this.settingsMenu.showMenu(event, r)
                }
                ,
                u.prototype.snapshotLoadHandler = function() {
                    this.showSnapshot()
                }
                ,
                u.prototype.snapshotBackButtonHandler = function() {
                    this.backButtonClicked()
                }
                ,
                u.prototype.lightDismissHandler = function(i) {
                    var r, u, f;
                    (i = i || window.event,
                    r = i.target,
                    r) && ((u = r.id == "bw_s_glass" || r.id == "cl_se",
                    f = n.core.hasClass(r, t.Constants.WidgetLinkClass),
                    u || f || this.isKnowledgeWidgetCollapsed() || n.core.withinElement(r, this.kwParent)) || (this.isCarouselOpen() && !this.isSnapshotPaneVisible() ? this.hideCarousel(!0) : this.closeKnowledgeWidget(!0)))
                }
                ,
                u.prototype.carouselItemClicked = function(n, t, i) {
                    var r = this.getSnapshotIframeUrl(n, t, i);
                    this.renderSnapshot(r, null);
                    this.markAndScrollToEntity(t)
                }
                ,
                u.prototype.backButtonClicked = function() {
                    var n = this.historyManager.back();
                    n && n.length > 0 && this.renderSnapshot(n, null, -1, !0)
                }
                ,
                u.prototype.markAndScrollToEntity = function(n) {
                    var f = this, i, r;
                    if (this.isEntityHighlightingEnabled() && n && t.$bw && t.$bw(_bw._d.body) && (this.unMarkEntities(),
                    i = t.$bw("span[data-entityid='" + n + "']"),
                    i.length > 0)) {
                        i.addClass("kw-highlight");
                        r = i.first().offset().top - 10;
                        t.$bw(_bw._d.body).animate({
                            scrollTop: r
                        }, 500, u.constants.animationEasing, function() {}).on("click.kw-highlight", function(n) {
                            t.$bw(n.target).closest("#" + u.constants.kwParentId).length == 0 && f.unMarkEntities()
                        })
                    }
                }
                ,
                u.prototype.unMarkEntities = function() {
                    this.isEntityHighlightingEnabled() && t.$bw && t.$bw(_bw._d.body) && (t.$bw("span.kw-highlight").removeClass("kw-highlight"),
                    t.$bw(_bw._d.body).off("click.kw-highlight"))
                }
                ,
                u.prototype.getSnapshotIframeUrl = function(n, i, r, u, f) {
                    var o = _b_w_c_s.snapshotSslBingHost, s = t.Constants.ExplicitWidgetUrl, h = !1, e;
                    return this.isInlineInsightsEesEnabled() && u && (o = _b_w_c.sslBingHost,
                    s = t.Constants.InsightsWidgetUrl,
                    h = !0),
                    e = [o, s, "?q=", encodeURIComponent(n), r ? "&filters=" : "", r, i ? "&stid=" : "", i, "&width=", (this.getOptimalSnapshotWidth() || 0).toString(), "&FORM=", this.options.formCode, "&fci=", this.options.formCodeInside, "&mkt=", this.widgetMarket, "&setlang=match"],
                    h && (this.options.detectionStrength && (e.push("&strength="),
                    e.push(encodeURIComponent(this.options.detectionStrength))),
                    this.options.id && (e.push("&id="),
                    e.push(this.options.id))),
                    e.join("")
                }
                ,
                u.prototype.isInlineInsightsEesEnabled = function() {
                    return !this.options.slicedFlight || this.options.slicedFlight.iiee !== "0"
                }
                ,
                u.prototype.getOptimalSnapshotWidth = function() {
                    return this.userSettings && this.userSettings.infoPaneWidth ? this.userSettings.infoPaneWidth : t.getSnapshotWidth(parseInt(n.core.getViewportWidth()), this.options.slicedFlight)
                }
                ,
                u.prototype.getCarouselIFrameUrl = function(t) {
                    var i = [this.bingHost, u.constants.carrouselUrl, "/?t=", t, "&f=", this.options.formCode, "&u=", encodeURIComponent(this.props.url), "&m=", this.widgetMarket, "&w=", u.constants.carrouselWidth.toString(), "&h=", u.constants.carrouselHeight.toString()];
                    return this.widgetId && (i.push("&id="),
                    i.push(this.widgetId)),
                    this.props && this.props.isSsl && i.push("&s=1"),
                    this.props && (this.props.instance = t,
                    this.props.type = t),
                    n.core.appendInstrumentationQueryParameters(i, this.props, this.kwScript, this.options.formCode)
                }
                ,
                u.prototype.getTypeString = function() {
                    var t = n.core.cloneInstance(this.options.slicedFlight);
                    return t.type = u.constants.carrouselDataSource,
                    n.core.serializeInstance(t)
                }
                ,
                u.prototype.renderCarousel = function() {
                    var t = this.getTypeString()
                      , f = this.getCarouselIFrameUrl(t)
                      , i = n.core.createIFrame(f, u.constants.carrouselWidth.toString(), parseInt(n.core.getViewportHeight()).toString());
                    return i.id = u.constants.kwCarouselId,
                    r.dims("BW", u.constants.carrouselWidth, u.constants.carrouselHeight, t, this.props ? this.props.url : "", this.widgetMarket, this.options.formCode, "click"),
                    r.pageProperties("BW", this.props),
                    i
                }
                ,
                u.prototype.renderIeMarkup = function(n) {
                    if (this.kwParent) {
                        this.renderIePaneHelper();
                        var t = this.hiddenSnapshotFrame.contentWindow.document;
                        t.write(n);
                        t.close()
                    }
                }
                ,
                u.prototype.renderIeInsights = function(t, i, r) {
                    if (this.kwParent) {
                        this.renderIePaneHelper();
                        var f = this.hiddenSnapshotFrame.contentWindow.document
                          , u = f.createElement("form");
                        n.core.setAttr(u, "action", _b_w_c_s.snapshotSslBingHost + "/widget/insights/lookup");
                        n.core.setAttr(u, "method", "POST");
                        u.appendChild(this.createInput("query", t, f));
                        u.appendChild(this.createInput("context", i, f));
                        u.appendChild(this.createInput("offset", r, f));
                        u.appendChild(this.createInput("market", "en-US", f));
                        u.appendChild(this.createInput("language", "en-US", f));
                        u.appendChild(this.createInput("url", window.location.href, f));
                        f.body.appendChild(u);
                        u.submit()
                    }
                }
                ,
                u.prototype.renderSnapshot = function(t, i, r, f, e) {
                    var l = this, o, s, h, c;
                    if (r === void 0 && (r = -1),
                    this.kwParent) {
                        if (this.isSnapshotPaneVisible() && this.showLoadingGif(),
                        this.unMarkEntities(),
                        o = t.match(/width=(\d\d\d)/i),
                        s = o && o.length == 2 ? parseInt(o[1]) : 0,
                        s != this.snapshotWidth && (this.snapshotWidth = s),
                        h = this.getDocument(),
                        c = "new_" + u.constants.kwSnapId,
                        h.getElementById(c)) {
                            this.lastClickedUrl = t;
                            return
                        }
                        this.isBackButtonNavigationEnabled() && (t = this.updateBackButtonParameterAndHistory(t, f || !1));
                        this.isSettingsMenuEnabled() && (t = t + "&sb=1");
                        this.currentLoadingUrl = this.lastClickedUrl = t;
                        e ? this.logSnapshotClick("insights", t) : this.logSnapshotClick("click", t);
                        this.hiddenSnapshotFrame = n.core.createIFrame(t, this.snapshotWidth.toString(), parseInt(n.core.getViewportHeight()).toString(), h);
                        this.hiddenSnapshotFrame.id = c;
                        this.hiddenSnapshotFrame.style.display = "none";
                        this.snapshotFrameLoaded = !1;
                        _bw.sj_be(this.hiddenSnapshotFrame, "load", function() {
                            l.hiddenSnapshotFrame.id != u.constants.kwSnapId && l.showSnapshot()
                        }, !1);
                        this.kwParent.appendChild(this.hiddenSnapshotFrame)
                    }
                }
                ,
                u.prototype.renderIePaneHelper = function() {
                    var t = this, i, r;
                    this.isSnapshotPaneVisible() && this.showLoadingGif();
                    this.unMarkEntities();
                    this.snapshotWidth = 360;
                    i = this.getDocument();
                    r = "new_" + u.constants.kwSnapId;
                    this.hiddenSnapshotFrame = n.core.createIFrame("", this.snapshotWidth.toString(), parseInt(n.core.getViewportHeight()).toString(), i);
                    delete this.hiddenSnapshotFrame.src;
                    this.hiddenSnapshotFrame.id = r;
                    this.hiddenSnapshotFrame.style.display = "none";
                    this.hiddenSnapshotFrame.style.paddingTop = "10px";
                    this.hiddenSnapshotFrame.style.backgroundColor = "#FFF";
                    this.hiddenSnapshotFrame.scrolling = "no";
                    this.snapshotFrameLoaded = !1;
                    this.kwParent.appendChild(this.hiddenSnapshotFrame);
                    _bw.sj_be(this.hiddenSnapshotFrame, "load", function() {
                        t.hiddenSnapshotFrame.id != u.constants.kwSnapId && t.showSnapshot()
                    }, !1)
                }
                ,
                u.prototype.createInput = function(t, i, r) {
                    var u = r.createElement("input");
                    return n.core.setAttr(u, "name", t),
                    n.core.setAttr(u, "type", "hidden"),
                    n.core.setAttr(u, "value", i),
                    u
                }
                ,
                u.prototype.showSnapshot = function() {
                    this.snapshotFrameLoaded || (this.snapshotFrameLoaded = !0,
                    this.showKwContainer.call(this, !0, this.hiddenSnapshotFrame))
                }
                ,
                u.prototype.updateBackButtonParameterAndHistory = function(n, t) {
                    return n = n.replace(/&bb=\d*/gi, ""),
                    t == !1 && this.historyManager.add(n),
                    n + (this.historyManager.shouldDisplayBackButton() ? "&bb=1" : "&bb=0")
                }
                ,
                u.prototype.isCarouselOpen = function() {
                    return !this.kwCarousel || !this.kwHandle ? !1 : !n.core.hasClass(this.kwHandle, "tab-in")
                }
                ,
                u.prototype.toggleCarousel = function() {
                    this.kwCarousel && this.kwHandle && (this.isCarouselOpen() ? this.hideCarousel(!0) : (this.showCarousel(!0),
                    this.carouselViewed || (n.core.appendVisibleFlag(this.kwCarousel),
                    this.carouselViewed = !0)))
                }
                ,
                u.prototype.showCarousel = function(i) {
                    var f = this, r;
                    if (this.kwCarousel && this.kwHandle) {
                        if (this.kwCarousel.style.display = "inline-block",
                        n.core.addClass(this.kwParent, "bw-shadow"),
                        r = function() {
                            n.core.replaceClass(f.kwHandle, "tab-in", "tab-out")
                        }
                        ,
                        !i || !t.$bw) {
                            this.kwCarousel.style.marginRight = "0px";
                            r();
                            return
                        }
                        t.$bw(this.kwCarousel).animate({
                            "margin-right": "0px"
                        }, 400, u.constants.animationEasing, r)
                    }
                }
                ,
                u.prototype.hideCarousel = function(i) {
                    var e = this, r, f;
                    if (this.kwCarousel && this.kwHandle) {
                        if (this.kwCarousel.style.display = "inline-block",
                        r = -u.constants.carrouselWidth + "px",
                        f = function() {
                            n.core.replaceClass(e.kwHandle, "tab-out", "tab-in");
                            e.kwCarousel.style.display = "none"
                        }
                        ,
                        !i || !t.$bw) {
                            this.kwCarousel.style.marginRight = r;
                            f();
                            return
                        }
                        t.$bw(this.kwCarousel).animate({
                            "margin-right": r
                        }, 400, u.constants.animationEasing, f)
                    }
                }
                ,
                u.prototype.showKwContainer = function(i, r) {
                    var o = this, e, f;
                    if (r.id != u.constants.kwSnapId) {
                        if (this.kwParent.style.right = "0px",
                        this.kwParent.style.display = "inline-block",
                        n.core.addClass(this.kwParent, "bw-shadow"),
                        i && t.$bw && !this.isSnapshotPaneVisible()) {
                            this.kwParent.style.right = -this.snapshotWidth + "px";
                            r.style.display = "inline-block";
                            t.$bw(this.kwParent).animate({
                                right: 0
                            }, 400, u.constants.animationEasing, function() {
                                return n.core.removeClass(o.kwHandle, "tab-collapsed")
                            });
                            r.id = u.constants.kwSnapId;
                            return
                        }
                        e = this.getDocument();
                        f = e.getElementById(u.constants.kwSnapId);
                        f && this.kwParent.removeChild(f);
                        r.id = u.constants.kwSnapId;
                        r.style.display = "inline-block";
                        this.kwLoading && (this.kwLoading.style.display = "none");
                        n.core.removeClass(this.kwHandle, "tab-collapsed");
                        this.reloadLastClickedItem()
                    }
                }
                ,
                u.prototype.reloadLastClickedItem = function() {
                    this.lastClickedUrl && this.lastClickedUrl != "" && this.lastClickedUrl != this.currentLoadingUrl && this.renderSnapshot(this.lastClickedUrl, null)
                }
                ,
                u.prototype.closeKnowledgeWidget = function(i) {
                    var r = this, f, e;
                    if (this.kwParent) {
                        if (f = function() {
                            var i = _bw._ge(u.constants.kwSnapId), t;
                            i && r.kwParent.removeChild(i);
                            r.historyManager.clear();
                            r.hideCarousel(!1);
                            r.kwParent.style.right = "0px";
                            r.kwLoading.style.display = "none";
                            n.core.removeClass(r.kwParent, "bw-shadow");
                            n.core.addClass(r.kwHandle, "tab-collapsed");
                            t = _bw._ge("cl_se");
                            t && (t.style.display = "none");
                            r.unMarkEntities()
                        }
                        ,
                        e = -this.kwParent.getBoundingClientRect().width + "px",
                        !i || !t.$bw) {
                            this.kwParent.style.right = e;
                            f();
                            return
                        }
                        t.$bw(this.kwParent).animate({
                            right: e
                        }, 400, u.constants.animationEasing, f)
                    }
                }
                ,
                u.prototype.renderTabHandle = function(n) {
                    var t = _bw.sj_ce("div");
                    t.id = u.constants.kwTabId;
                    t.className = "bw-shadow tab-container " + (n == 0 ? "tab-in tab-collapsed" : "tab-out");
                    t.style.marginTop = this.getTabHandleTopMargin();
                    var r = _bw.sj_ce("div")
                      , f = _bw.sj_ce("div")
                      , e = _bw.sj_ce("div")
                      , o = _bw.sj_ce("div")
                      , i = _bw.sj_ce("div");
                    return r.className = "kw-top",
                    f.className = "kw-logo",
                    e.className = "kw-bing",
                    o.className = "kw-arrow",
                    i.className = this.isSettingsMenuEnabled() ? "kw-cog" : "kw-cross",
                    t.appendChild(r),
                    t.appendChild(f),
                    t.appendChild(e),
                    t.appendChild(o),
                    this.isSettingsMenuEnabled() ? this.kwHandleSettings = i : this.kwHandleClose = i,
                    t.appendChild(i),
                    t
                }
                ,
                u.prototype.tabCloseClickHandler = function(t) {
                    if (this.isSnapshotPaneVisible()) {
                        n.core.stopPropagation(t);
                        n.core.preventDefault(t);
                        this.closeKnowledgeWidget(!0);
                        return
                    }
                }
                ,
                u.prototype.getTabHandleTopMargin = function() {
                    return (parseInt(n.core.getViewportHeight()) - u.constants.kwHandleHeight) / 2 + "px"
                }
                ,
                u.prototype.showLoadingGif = function() {
                    this.kwLoading && (this.kwLoading.style.display = "inline-block",
                    this.kwLoading.style.right = (this.snapshotWidth - u.constants.kwLoadingWidth) / 2 + "px")
                }
                ,
                u.prototype.renderloadingImage = function() {
                    var n = _bw.sj_ce("img");
                    return n.className = u.constants.kwloadingClass,
                    n.src = this.bingHost + u.constants.kwLoadingSrc,
                    n
                }
                ,
                u.prototype.renderCloseButton = function(t) {
                    var f = this, u = this.getDocument(), r = u.getElementById("cl_se"), i;
                    r || (r = u.createElement("div"),
                    r.id = "cl_se",
                    i = [],
                    i.push("position:fixed;"),
                    i.push("cursor:pointer;"),
                    i.push("display:none;"),
                    i.push("width:40px;"),
                    i.push("height:40px;"),
                    i.push("right:0px;"),
                    i.push("top:0px;"),
                    i.push("z-index:10002000001;"),
                    n.core.setAttr(r, "style", i.join("")),
                    _bw.sj_be(r, "click", function() {
                        return f.closeKnowledgeWidget(!0)
                    }, !1),
                    u.body.appendChild(r));
                    _bw.sj_be(t, "load", function() {
                        r.style.display = "inline"
                    }, !1)
                }
                ,
                u.prototype.overrideConstantsWithFlightParameters = function() {
                    var n = this.options.slicedFlight
                      , t = n && n.crh != null ? parseInt(n.crh) : 0
                      , i = n && n.crw != null ? parseInt(n.crw) : 0;
                    t > 0 && i > 0 && t < 300 && i < 300 && (u.constants.carrouselHeight = t,
                    u.constants.carrouselWidth = i);
                    n && n.crd != null && n.crd != "" && (u.constants.carrouselDataSource = n.crd)
                }
                ,
                u.prototype.isBackButtonNavigationEnabled = function() {
                    return this.isCarouselEnabled() || !this.options.slicedFlight || this.options.slicedFlight.bbn !== "0"
                }
                ,
                u.prototype.isCarouselEnabled = function() {
                    return this.props.isWinJs ? !1 : this.isInteractiveSearchOnly() || this.options.visualization == t.Constants.VisualizationLinks ? !1 : this.userSettings.widgetHidden || this.userSettings.carouselState == t.Constants.CarouselStateHidden ? !1 : this.options.visualization === t.Constants.VisualizationImages || this.options.visualization === t.Constants.VisualizationBoth ? !0 : typeof this.options.slicedFlight != "undefined" && typeof this.options.slicedFlight.cr != "undefined" && this.options.slicedFlight.cr == "1"
                }
                ,
                u.prototype.isSnapshotPaneVisible = function() {
                    var n = this.getDocument();
                    return n.getElementById(u.constants.kwSnapId) ? !0 : !1
                }
                ,
                u.prototype.isKnowledgeWidgetCollapsed = function() {
                    return !(this.isCarouselOpen() || this.isSnapshotPaneVisible())
                }
                ,
                u.prototype.isShadowEnabled = function() {
                    return !(typeof this.options.slicedFlight != "undefined" && typeof this.options.slicedFlight.cse != "undefined" && this.options.slicedFlight.cse == "0")
                }
                ,
                u.prototype.isEntityHighlightingEnabled = function() {
                    return typeof this.options.slicedFlight != "undefined" && typeof this.options.slicedFlight.ceh != "undefined" && this.options.slicedFlight.ceh == "1"
                }
                ,
                u.prototype.isSettingsMenuEnabled = function() {
                    return this.isCarouselEnabled() ? n.CrossDomainStorage.getInstance() != null && typeof this.options.slicedFlight != "undefined" && typeof this.options.slicedFlight.csm != "undefined" && this.options.slicedFlight.csm == "1" : !1
                }
                ,
                u.prototype.getCarouselInitialState = function() {
                    var r = this.options.slicedFlight, i = {}, n;
                    return (i[t.Constants.CarouselStateAuto] = 2,
                    i[t.Constants.CarouselStateExpanded] = 1,
                    i[t.Constants.CarouselStateCollapsed] = 0,
                    n = -1,
                    this.userSettings.carouselState in i && (n = i[this.userSettings.carouselState]),
                    n == -1 && this.options.carouselState in i && (n = i[this.options.carouselState]),
                    n == -1 && (n = r && r.crs != null ? parseInt(r.crs) : 0),
                    n <= 0) ? 0 : n == 1 ? 1 : this.snapshotWidth >= 460 ? 1 : 0
                }
                ,
                u.prototype.carouselStateChanged = function() {
                    var n = this;
                    this.userSettingsUpdated(function() {
                        switch (n.userSettings.carouselState) {
                        case t.Constants.CarouselStateCollapsed:
                            n.hideCarousel(!0);
                            break;
                        case t.Constants.CarouselStateExpanded:
                            n.toggleTabHandle(!0);
                            n.showCarousel(!0);
                            break;
                        case t.Constants.CarouselStateHidden:
                            n.hideCarousel(!0);
                            n.toggleTabHandle(!1)
                        }
                    })
                }
                ,
                u.prototype.snapshotWidthChanged = function() {
                    var n = this;
                    this.userSettingsUpdated(function() {
                        n.snapshotWidth = n.getOptimalSnapshotWidth();
                        n.closeKnowledgeWidget(!0)
                    })
                }
                ,
                u.prototype.userHideKnowledgeWidget = function() {
                    var n = this;
                    this.userSettingsUpdated(function() {
                        n.userSettings.widgetHidden && (n.toggleTabHandle(!1),
                        n.closeKnowledgeWidget(!0))
                    })
                }
                ,
                u.prototype.toggleTabHandle = function(n) {
                    this.kwHandle && (this.kwHandle.style.visibility = n ? "inherit" : "hidden")
                }
                ,
                u.prototype.userSettingsUpdated = function(n) {
                    var i = this;
                    t.UserPreferenceHandler.getInstance().getUserSettings(function(t) {
                        i.userSettings = t;
                        n()
                    })
                }
                ,
                u.constants = {
                    carrouselDataSource: "pageentities",
                    carrouselHeight: 130,
                    carrouselWidth: 101,
                    carrouselUrl: "/widget/render/snapshotcarousel",
                    kwHandleHeight: 153,
                    kwParentId: "bknowWidget",
                    kwSnapId: "bkwFrame",
                    kwCarouselId: "bkwCarr",
                    kwTabId: "bkwHandle",
                    kwTabCloseId: "kw-tabclose",
                    kwloadingClass: "kw-loading",
                    kwLoadingSrc: "/widget/images/kwloading.gif",
                    kwCss: "/widget/" + _b_w_c.AppVer + "/bkw.css",
                    kwLoadingWidth: 60,
                    kwLoadingTopoffset: 45,
                    animationEasing: "swing",
                    resizeCheckInterval: 100
                },
                u
            }(t.RendererBase);
            i.KnowledgeWidget = u
        }
        )(i = t.desktop || (t.desktop = {}))
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {}));
__extends = this.__extends || function(n, t) {
    function r() {
        this.constructor = n
    }
    for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
    r.prototype = t.prototype;
    n.prototype = new r
}
,
function(n) {
    var t;
    (function(t) {
        var i;
        (function(i) {
            var r = function(t) {
                function i(n, i) {
                    t.call(this, n, i, !0);
                    this.kwParentId = "bknowWidget";
                    this.kwSnapId = "bkwFrame";
                    this.overlayId = "bkw_overlay";
                    this.overlayStyle = "background: transparent; height: 100%; width: 100%; top: 0; left: 0, z-index: 100; position: fixed; overflow: hidden;";
                    this.style = ["margin-left: -8px;", "position: absolute;", "z-index: 10000;"];
                    this.document = this.getDocument();
                    this.kwParent = this.document.createElement("div");
                    this.kwParent.id = this.kwParentId;
                    this.document.body.appendChild(this.kwParent);
                    this.setupExpandClick()
                }
                return __extends(i, t),
                i.prototype.renderSnapshot = function(t, i, r) {
                    var u = this;
                    if ((r === void 0 && (r = -1),
                    this.kwParent) && r != -1) {
                        var f = this.getDocument()
                          , e = parseInt(n.core.getViewportHeight())
                          , o = "new_" + this.kwSnapId
                          , s = this.getScrollTop();
                        this.logSnapshotClick("insights", t);
                        this.snapshotIframe = n.core.createIFrame(t, "100%", n.core.getViewportHeight(), f);
                        this.snapshotIframe.id = o;
                        r = Math.min(e - 300, r) + s;
                        this.knowledgeInsights && this.knowledgeInsights.clearTextSelection();
                        _bw.sj_be(this.snapshotIframe, "load", function() {
                            var n = u.document.createElement("div");
                            n.id = u.overlayId;
                            n.style.cssText = u.overlayStyle;
                            _bw.sj_be(n, "touchmove", u.preventDefault);
                            u.document.documentElement.appendChild(n);
                            u.setupDismiss(n);
                            u.knowledgeInsights && u.knowledgeInsights.hideGlass();
                            u.frameTop = r
                        }, !1);
                        this.kwParent.appendChild(this.snapshotIframe)
                    }
                }
                ,
                i.prototype.getSnapshotIframeUrl = function(t, i, r, u, f) {
                    var o = _b_w_c_s.snapshotSslBingHost
                      , s = n.knowledge.Constants.ExplicitWidgetUrl
                      , e = [o, s, "?q=", encodeURIComponent(t), r ? "&filters=" : "", r, i ? "&stid=" : "", i, "&FORM=", this.options.formCode, "&fci=", this.options.formCodeInside, "&mkt=", this.widgetMarket, "&setlang=match", "&height=" + n.core.getViewportHeight()];
                    return !1 && (this.options.detectionStrength && (e.push("&strength="),
                    e.push(encodeURIComponent(this.options.detectionStrength))),
                    this.options.id && (e.push("&id="),
                    e.push(this.options.id))),
                    e.join("")
                }
                ,
                i.prototype.addIframeStyle = function(n, t) {
                    var i = this.style.join("");
                    n.style.cssText += i;
                    n.style.top = t + ""
                }
                ,
                i.prototype.setupExpandClick = function() {
                    var n = this;
                    _bw.sj_be(_bw._w, "message", function(t) {
                        var i;
                        if (t && t.data && typeof t.data == "string" && (i = t.data.indexOf(":"),
                        i != -1)) {
                            var r = t.data.substring(0, i)
                              , u = t.data.substring(i + 1)
                              , f = n;
                            if (r === "expandItem")
                                n.frameTop > -1 ? f.setHeight(u) : _bw.sb_st(function() {
                                    f.setHeight(u)
                                }, 100);
                            else if (r === "closeFrame")
                                n.closeIframe(n.document.getElementById(n.overlayId)),
                                n.knowledgeInsights && n.knowledgeInsights.clearTextSelection();
                            else
                                return
                        }
                    }, !1)
                }
                ,
                i.prototype.setHeight = function(t) {
                    var e = JSON.parse(t), o;
                    if (e) {
                        var r = e.height
                          , u = parseInt(n.core.getViewportHeight())
                          , i = this.frameTop
                          , f = this.frameTop - this.getScrollTop() + r;
                        f > u && (o = this.getScrollTop(),
                        i = Math.max(o, this.frameTop - (f - u)));
                        this.snapshotIframe.offsetHeight > 0 && r > this.snapshotIframe.offsetHeight ? this.snapshotIframe.style.top = i + "px" : (f > u && (this.frameTop = i),
                        this.snapshotIframe.style.top = this.frameTop + "px");
                        this.snapshotIframe.style.height = r + "px";
                        this.snapshotIframe.removeAttribute("hidden");
                        this.addIframeStyle(this.snapshotIframe, i)
                    }
                }
                ,
                i.prototype.setupDismiss = function(t) {
                    var i = this;
                    _bw.sj_be(t, "click", function(t) {
                        i.closeIframe(n.core.getTarget(t))
                    }, !0)
                }
                ,
                i.prototype.closeIframe = function(n) {
                    this.snapshotIframe && this.snapshotIframe.parentNode && (this.kwParent.removeChild(this.snapshotIframe),
                    this.snapshotIframe = null,
                    this.frameTop = -1,
                    n && _bw._d.documentElement.removeChild(n));
                    _bw.sj_ue(this.document.body, "touchmove", this.preventDefault)
                }
                ,
                i.prototype.getScrollTop = function() {
                    return _bw.sb_de.scrollTop || _bw._w.pageYOffset || 0
                }
                ,
                i.prototype.preventDefault = function(n) {
                    this.snapshotIframe && n.preventDefault()
                }
                ,
                i
            }(t.RendererBase);
            i.Renderer = r
        }
        )(i = t.mobile || (t.mobile = {}))
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var u = null, i = n.core.getAttr, r = n.core.setAttr, f = ["outlook.com", "gmail.com", "live.com", "mail.yahoo.com", "hotmail.com", "mail.google.com"], e = function() {
            function n() {
                this.isKnowledgeConfigFetched = !1;
                this.config = null;
                this.callbackee = null
            }
            return n.prototype.getConfig = function() {
                return this.config
            }
            ,
            n.prototype.setConfig = function(n) {
                this.config = n;
                this.isKnowledgeConfigFetched = !0;
                this.callbackee && this.callbackee()
            }
            ,
            n.prototype.setCallback = function(n) {
                if (this.isKnowledgeConfigFetched) {
                    n();
                    return
                }
                this.callbackee = n
            }
            ,
            n
        }(), o;
        t.KnowledgeConfigLoader = e;
        o = function() {
            function o(i) {
                this.previousUrl = "";
                this.renderer = null;
                this.insertTimer = 0;
                this.userSettings = null;
                this.userPreferenceHandler = null;
                this.widgetHiddenLinkClass = "kw-hiddenlink";
                this.scriptElement = i;
                n.CrossDomainStorage.getInstance();
                this.userPreferenceHandler = t.UserPreferenceHandler.getInstance();
                this.installEventHandlers();
                this.knowledgeConfigLoader = new e
            }
            return o.prototype.go = function(i, r, u) {
                var f = this
                  , e = t.getOptions(r);
                t.fetchKnowledgeConfig(i, e, function(o) {
                    f.knowledgeConfigLoader.setConfig(o);
                    n.knowledge.getMergedOptions(i, r, e, o, function(n) {
                        f.userPreferenceHandler.getUserSettings(function(e) {
                            if (n)
                                if (f.userSettings = e,
                                f.userSettings && f.userSettings.widgetHidden || n.visualization == t.Constants.VisualizationInteractive) {
                                    var o = function() {
                                        var u = f.knowledgeConfigLoader.getConfig();
                                        f.marketCode = t.Utils.getMarketCode(n, r, u);
                                        f.renderKnowledgeWidget(i, n, r)
                                    };
                                    f.knowledgeConfigLoader.setCallback(o)
                                } else
                                    f.checkUrlAndInsertLinks(i, r, u, n)
                        })
                    })
                })
            }
            ,
            o.prototype.checkUrlAndInsertLinks = function(n, t, i, r) {
                var f = this, u;
                this.insertTimer && (_bw.sb_ct(this.insertTimer),
                this.insertTimer = 0);
                u = _bw._w.location.href;
                u !== this.previousUrl && u && !this.isExtractionBlockedOnUrl(u) && (this.previousUrl = u,
                n.url = u,
                this.renderer = null,
                this.insertSnapshot(n, t, i, r));
                this.insertTimer = _bw.sb_st(function() {
                    return f.checkUrlAndInsertLinks(n, t, i, r)
                }, 50)
            }
            ,
            o.prototype.fallback = function() {
                for (var u = n.core.getTargetsByClassName(t.Constants.WidgetLinkClass), r = 0; r < u.length; r++)
                    (i(u[r], "data-processing") || "").toLowerCase() !== "true" && (i(u[r], "data-processing") || "").toLowerCase() !== "true" && t.removeLink(u[r])
            }
            ,
            o.prototype.checkForWidgetsStillProcessing = function(u, f) {
                for (var h = 0, o = n.core.getTargetsByClassName(t.Constants.WidgetLinkClass), s = [], e = 0; e < o.length; e++)
                    (i(o[e], "data-processing") || "").toLowerCase() === "true" && (r(o[e], "data-processing", "false"),
                    s.push(o[e]),
                    f.push(i(o[e], "data-type")),
                    ++h);
                if (s.length > 0)
                    for (e = 0; e < s.length; ++e)
                        this.processLink(s[e], u);
                return h > 0
            }
            ,
            o.prototype.invokeSnapshotDebugger = function() {
                var i = this
                  , r = n.core.inspectPage()
                  , u = t.getOptions(this.scriptElement);
                t.getMergedOptions(r, this.scriptElement, u, null, function(n) {
                    t.processAutoSnapshot(i.knowledgeConfigLoader, r, i.scriptElement, _bw._d.body, !0, n, function() {}, !0)
                })
            }
            ,
            o.prototype.installEventHandlers = function() {
                var n = this;
                _bw.sj_evt.bind("hideWidget", function() {
                    return n.linksVisiblityChanged()
                });
                _bw.sj_evt.bind("hideLinksForSites", function() {
                    return n.linksVisiblityChanged()
                });
                _bw.sj_evt.bind("infopaneWidth", function() {
                    return n.userSettingsUpdated(function() {})
                })
            }
            ,
            o.prototype.userSettingsUpdated = function(n) {
                var t = this;
                this.userPreferenceHandler.getUserSettings(function(i) {
                    t.userSettings = i;
                    n()
                })
            }
            ,
            o.prototype.linksVisiblityChanged = function() {
                var n = this;
                this.userSettingsUpdated(function() {
                    n.toggleLinks(!0)
                })
            }
            ,
            o.prototype.toggleLinks = function(r) {
                var s, h, e, c;
                if ("linksHidden"in this.userSettings && "widgetHidden"in this.userSettings && (s = !(this.userSettings.linksHidden || this.userSettings.widgetHidden),
                !s || r))
                    for (h = n.core.getTargetsByClassName(t.Constants.WidgetLinkClass),
                    e = 0; e < h.length; e++) {
                        var u = h[e]
                          , o = i(u, "data-textId")
                          , f = _bw._ge(o);
                        s ? f && (u.style.display = "inline",
                        f.style.display = "none",
                        f.parentElement.insertBefore(u, f),
                        _bw._d.body.appendChild(f)) : f ? (u.style.display = "none",
                        f.style.display = "inline",
                        u.parentElement.insertBefore(f, u),
                        _bw._d.body.appendChild(u)) : (o = "kwlink_" + e,
                        c = _bw.sj_ce("span", o, this.widgetHiddenLinkClass),
                        n.core.setText(c, n.core.getText(u)),
                        u.parentElement.insertBefore(c, u),
                        n.core.setAttr(u, "data-textId", o),
                        u.style.display = "none",
                        _bw._d.body.appendChild(u))
                    }
            }
            ,
            o.prototype.renderWidget = function(r, u) {
                var e, v, c, o, l, s, a;
                if (this.renderer != null) {
                    var f = i(r, "data-type")
                      , h = i(r, "data-entityid") || ""
                      , y = i(r, "data-formcodeinside") || "";
                    f = f == null ? "" : f.toLowerCase();
                    e = n.core.sliceInstance(f);
                    v = this.getFormCode(r);
                    n.core.setProperty(e, "id", h);
                    c = n.core.serializeInstance(e);
                    u == null && (u = new n.core.PageProperties);
                    o = parseInt(n.core.getViewportHeight());
                    o < 400 && (o = 400);
                    l = parseInt(n.core.getViewportWidth());
                    s = t.getSnapshotWidth(l, e);
                    s = this.userSettings && this.userSettings.infoPaneWidth ? this.userSettings.infoPaneWidth : s;
                    u.width = s;
                    u.height = o;
                    u.type = f;
                    u.instance = c;
                    a = this.renderer.getSnapshotIframeUrl(r.getAttribute("data-query") || n.core.getText(r), h, r.getAttribute("data-filters") || "");
                    this.renderer.renderSnapshot(a, h, r.getBoundingClientRect().top)
                }
            }
            ,
            o.prototype.processLink = function(n, u) {
                var f = this;
                return !n || !n.getAttribute ? !1 : (i(n, "data-processed") || "").toLowerCase() === "true" || (i(n, "data-processing") || "").toLowerCase() === "true" ? !1 : (r(n, "data-processing", "true"),
                t.addExplicitEvents(n, u, function(n, t, i) {
                    return f.renderWidget(n, t, i)
                }),
                r(n, "data-processing", "false"),
                r(n, "data-processed", "true"),
                !0)
            }
            ,
            o.prototype.getFormCode = function(t) {
                var i = n.core.getAttr(t, "data-form") || n.core.getAttr(t, "bing_widget_form");
                return i != null && (i = i.toUpperCase()),
                i
            }
            ,
            o.prototype.addLinkEvents = function(i) {
                for (var h, r = 0, o = "", s = "", e = n.core.getTargetsByClassName(t.Constants.WidgetLinkClass), f = 0; f < e.length; ++f)
                    h = this.processLink(e[f], i),
                    h && (r == 0 && (o = n.core.getAttr(e[f], "data-type"),
                    s = this.getFormCode(e[f])),
                    ++r);
                return r > 0 && (u.explicit(i ? i.url : "", r, o, s),
                u.pageProperties("BN", i)),
                r
            }
            ,
            o.prototype.insertSnapshot = function(n, i, r, u) {
                var f = this
                  , e = function(r, e, o) {
                    f.marketCode = t.Utils.getMarketOrDefault(o);
                    var s = f.addLinkEvents(n);
                    (s > 0 || t.Utils.isInsightSearchEnabled(u)) && (f.toggleLinks(!1),
                    f.renderKnowledgeWidget(n, r, i))
                };
                u.slicedFlight[t.Flights.IeInsights] === "1" ? (this.renderKnowledgeWidget(n, u, i),
                this.insertTopRight(this.knowledgeConfigLoader, n, i, u)) : t.processAutoSnapshot(this.knowledgeConfigLoader, n, i, _bw._d.body, r, u, e)
            }
            ,
            o.prototype.insertTopRight = function(t, i, r, f) {
                var o = this
                  , e = _bw._d.createElement("div");
                e.style.position = "fixed";
                e.style.top = "-10px";
                e.style.right = "-10px";
                e.style.height = "20px";
                e.style.width = "20px";
                e.style.backgroundColor = "blue";
                e.style.webkitTransform = "rotate(45deg)";
                _bw.sj_be(e, "click", function(e) {
                    e = e || window.event;
                    var s = _b_w_c_s.snapshotSslBingHost + "/widget/insights/get?addfeaturesnoexpansion=sptnists&market=en-US&language=en-US&url=" + encodeURIComponent(window.location.href);
                    return n.core.callAjax(s, function(n) {
                        o.decideWhetherToExtract(n, t, i, r, f)
                    }, function(n) {
                        return u.error("BW", n, "entity.fetchEntitiesIeInsights")
                    }),
                    e.preventDefault ? e.preventDefault() : e.cancelBubble = !0,
                    !1
                }, !1);
                _bw._d.body.appendChild(e)
            }
            ,
            o.prototype.decideWhetherToExtract = function(n, i, r, u, f) {
                var o = this, e;
                n && n != "null" ? this.renderer.renderIeMarkup(n) : (e = function(n) {
                    o.renderer.renderIeMarkup(n)
                }
                ,
                t.extractIeInsights(r, _bw._d.body, f, "en-US", !1, e))
            }
            ,
            o.prototype.renderKnowledgeWidget = function(i, r, u) {
                var f = t.getWidgetId(i.url, u);
                n.knowledge.shouldRenderMobile(r.slicedFlight, this.knowledgeConfigLoader.getConfig()) ? this.renderer == null && (this.renderer = new t.mobile.Renderer(r,i)) : this.renderer == null && (this.renderer = new t.desktop.KnowledgeWidget(this.scriptElement,i,r,this.userSettings,f,this.marketCode),
                i.isWinJs || t.loadJQuery(function() {}))
            }
            ,
            o.prototype.isExtractionBlockedOnUrl = function(t) {
                var i, e, u, r, o;
                if (t)
                    for (i = n.core.getPivotUrl("host", t),
                    e = 0; e < f.length; e++)
                        if (u = f[e],
                        r = i.indexOf(u),
                        r > 0 && (r + u.length == i.length || r + u.length < i.length && i[r + u.length] == ".") && (o = i[r - 1],
                        o == ":" || o == "."))
                            return !0;
                return !1
            }
            ,
            o
        }();
        t.Knowledge = o
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function i(n, i, r, u) {
                this.menuUrl = "/widget/render/menu";
                this.extraEdgePadding = 10;
                this.shortHideDelay = 400;
                this.mediumHideDelay = 600;
                this.longHideDelay = 3e3;
                this.bingHost = n;
                this.options = i;
                this.props = r;
                this.container = u;
                this.userPreference = t.UserPreferenceHandler.getInstance()
            }
            return i.prototype.init = function() {
                _bw._d.querySelectorAll && _bw._d.querySelector && this.fetchMenuItems()
            }
            ,
            i.prototype.fetchMenuItems = function() {
                var u = this, i = function(n) {
                    return u.menuItemsFetched(n)
                }, r = function() {}, t;
                _bw._w.XDomainRequest && !_bw._w.matchMedia ? (t = n.core.getBingHost(this.props) + this.menuUrl,
                n.core.callXDomainJson(t, i, r)) : (t = this.bingHost + this.menuUrl,
                n.core.callJson(t, i, r))
            }
            ,
            i.prototype.menuItemsFetched = function(n) {
                var t = this.buildMenu(n);
                t && (this.menuElem = _bw.sj_ce("span", "kw-menu", "kw-menu"),
                this.menuElem.appendChild(t),
                this.container.appendChild(this.menuElem),
                this.installEventHandlers(),
                this.userPreference.initMenuItemCheckState())
            }
            ,
            i.prototype.buildMenu = function(t) {
                var u, f, i, r, e, o, s;
                if (!t || t.length == 0)
                    return null;
                for (u = _bw.sj_ce("ul"),
                f = 0; f < t.length; f++)
                    (i = t[f],
                    i.Enabled) && (r = _bw.sj_ce("li"),
                    e = _bw.sj_ce("span", i.Id, "link"),
                    n.core.setText(e, i.Text),
                    r.appendChild(e),
                    i.SubItems && (o = this.buildMenu(i.SubItems),
                    o && (s = _bw.sj_ce("span", null, "menu-icons submenu"),
                    r.appendChild(s),
                    r.appendChild(o))),
                    u.appendChild(r));
                return u.childNodes.length > 0 ? u : null
            }
            ,
            i.prototype.installEventHandlers = function() {
                this.menuItemClickHandler();
                this.submenuRepositionHandler();
                this.menuDismissHandler()
            }
            ,
            i.prototype.menuItemClickHandler = function() {
                for (var t = this, i = this.menuElem.querySelectorAll("li span.link"), n = 0; n < i.length; n++)
                    (function() {
                        var r = i[n];
                        _bw.sj_be(r.parentElement, "click", function() {
                            t.userPreference.menuItemClicked(r.id);
                            t.delayedHide(t.shortHideDelay)
                        })
                    }
                    )()
            }
            ,
            i.prototype.submenuRepositionHandler = function() {
                for (var i = this, t = this.menuElem.querySelectorAll("li > span.submenu"), n = 0; n < t.length; n++)
                    _bw.sj_be(t[n].parentElement, "mouseenter", function(n) {
                        return i.positionSubMenu(n)
                    })
            }
            ,
            i.prototype.menuDismissHandler = function() {
                var n = this;
                _bw.sj_be(this.menuElem, "mouseleave", function() {
                    n.delayedHide(n.mediumHideDelay)
                }, !1);
                _bw.sj_be(this.menuElem, "mouseenter", function() {
                    _bw.sb_ct(n.dismissTimer)
                }, !1)
            }
            ,
            i.prototype.showMenu = function(t, i) {
                (t = t || window.event,
                n.core.stopPropagation(t),
                n.core.preventDefault(t),
                this.menuElem) && (this.menuElem.style.display = "block",
                this.positionMenu(i),
                this.delayedHide(this.longHideDelay))
            }
            ,
            i.prototype.delayedHide = function(n) {
                var t = this;
                this.dismissTimer = _bw.sb_st(function() {
                    return t.hideMenu()
                }, n)
            }
            ,
            i.prototype.hideMenu = function() {
                this.menuElem && (t.$bw ? t.$bw(this.menuElem).fadeOut() : this.menuElem.style.display = "none")
            }
            ,
            i.menuItemCheck = function(t, i) {
                var r = _bw._ge(t), u, f, e;
                r && (u = r.parentElement,
                f = u.querySelector(".check"),
                i ? f || (e = _bw.sj_ce("span", null, "menu-icons check"),
                u.insertBefore(e, r)) : n.core.removeElement(f))
            }
            ,
            i.toggleMenuItemCheck = function(t) {
                var i = _bw._ge(t), r, u, f;
                return i ? (r = i.parentElement,
                u = r.querySelector(".check"),
                u ? (n.core.removeElement(u),
                !1) : (f = _bw.sj_ce("span", null, "check"),
                r.insertBefore(f, i),
                !0)) : !1
            }
            ,
            i.prototype.positionMenu = function(n) {
                var t = this.menuElem.getBoundingClientRect(), i, r = t.right - t.left, f = n.right - n.left, u;
                i = this.canOpenMenuOnRight(n.right, r) ? n.right : n.right - (r + f);
                this.menuElem.style.left = i + "px";
                u = this.menuBottomCropAmount(n.top, t.height);
                this.menuElem.style.top = n.top - u + "px"
            }
            ,
            i.prototype.positionSubMenu = function(t) {
                var u;
                t = t || window.event;
                var f = n.core.getTarget(t)
                  , i = f.querySelector("ul")
                  , e = f.getBoundingClientRect()
                  , r = i.getBoundingClientRect()
                  , o = r.right - r.left;
                this.canOpenMenuOnRight(e.right, o) ? (i.style.left = "100%",
                i.style.right = "inherit") : (i.style.left = "inherit",
                i.style.right = "100%");
                u = this.menuBottomCropAmount(e.top, r.height);
                u && (i.style.top = -u + "px")
            }
            ,
            i.prototype.canOpenMenuOnRight = function(t, i) {
                return t + i + this.extraEdgePadding < parseInt(n.core.getViewportWidth())
            }
            ,
            i.prototype.menuBottomCropAmount = function(t, i) {
                var r = t + i + this.extraEdgePadding - parseInt(n.core.getViewportHeight());
                return r > 0 ? r : 0
            }
            ,
            i
        }();
        t.SettingsMenu = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {})),
function(n) {
    var t;
    (function(t) {
        var i = function() {
            function i() {
                var r = this;
                if (this.userPreferenceKey = "KwUserPreferences",
                this.fifteenMinutes = 9e5,
                this.oneHour = 36e5,
                this.oneDay = 864e5,
                this.oneYear = this.oneDay * 365,
                this.menuHandlers = {
                    hideFor15Minutes: {
                        click: function(n, t) {
                            r.hideWidgetForClicked(n, t, r.fifteenMinutes)
                        },
                        checkState: function(n) {
                            return n.hideFor == r.fifteenMinutes
                        },
                        groupEventId: "hideWidget"
                    },
                    hideForAnHour: {
                        click: function(n, t) {
                            r.hideWidgetForClicked(n, t, r.oneHour)
                        },
                        checkState: function(n) {
                            return n.hideFor == r.oneHour
                        },
                        groupEventId: "hideWidget"
                    },
                    hideFor1Day: {
                        click: function(n, t) {
                            r.hideWidgetForClicked(n, t, r.oneDay)
                        },
                        checkState: function(n) {
                            return n.hideFor == r.oneDay
                        },
                        groupEventId: "hideWidget"
                    },
                    hideForSites: {
                        click: function(n, t) {
                            r.isCurrentSiteBlocked(t.hideForSites) == -1 && r.widgetHiddenStateReset(t);
                            t.hideForSites = r.toggleCurrentSiteblockPreference(n, t.hideForSites)
                        },
                        checkState: function(n) {
                            return r.isCurrentSiteBlocked(n.hideForSites) > -1
                        },
                        groupEventId: "hideWidget"
                    },
                    hideForAllSites: {
                        click: function(n, t) {
                            r.hideWidgetForClicked(n, t, r.oneYear)
                        },
                        checkState: function(n) {
                            return n.hideFor == r.oneYear
                        },
                        groupEventId: "hideWidget"
                    },
                    carouselStateAuto: {
                        click: function(n, i) {
                            r.carouselStateItemClicked(n, i, t.Constants.CarouselStateAuto)
                        },
                        checkState: function(n) {
                            return n.carouselState == t.Constants.CarouselStateAuto
                        },
                        groupEventId: "carouselState"
                    },
                    carouselStateCollapsed: {
                        click: function(n, i) {
                            r.carouselStateItemClicked(n, i, t.Constants.CarouselStateCollapsed)
                        },
                        checkState: function(n) {
                            return n.carouselState == t.Constants.CarouselStateCollapsed
                        },
                        groupEventId: "carouselState"
                    },
                    carouselStateExpanded: {
                        click: function(n, i) {
                            r.carouselStateItemClicked(n, i, t.Constants.CarouselStateExpanded)
                        },
                        checkState: function(n) {
                            return n.carouselState == t.Constants.CarouselStateExpanded
                        },
                        groupEventId: "carouselState"
                    },
                    carouselStateHiddenForSite: {
                        click: function(n, t) {
                            r.isCurrentSiteBlocked(t.carouselStateHiddenForSite) == -1 && r.carouselStateReset(t);
                            t.carouselStateHiddenForSite = r.toggleCurrentSiteblockPreference(n, t.carouselStateHiddenForSite)
                        },
                        checkState: function(n) {
                            return r.isCurrentSiteBlocked(n.carouselStateHiddenForSite) > -1
                        },
                        groupEventId: "carouselState"
                    },
                    infopaneWidthAuto: {
                        click: function(n, t) {
                            r.infoWidthItemClicked(n, t, 0)
                        },
                        checkState: function(n) {
                            return n.infopaneWidth === 0 || typeof n.infopaneWidth == "undefined"
                        },
                        groupEventId: "infopaneWidth"
                    },
                    infopaneWidthNarrow: {
                        click: function(n, i) {
                            r.infoWidthItemClicked(n, i, t.Constants.InfopaneWidthNarrow)
                        },
                        checkState: function(n) {
                            return n.infopaneWidth == t.Constants.InfopaneWidthNarrow
                        },
                        groupEventId: "infopaneWidth"
                    },
                    infopaneWidthStandard: {
                        click: function(n, i) {
                            r.infoWidthItemClicked(n, i, t.Constants.InfopaneWidthStandard)
                        },
                        checkState: function(n) {
                            return n.infopaneWidth == t.Constants.InfopaneWidthStandard
                        },
                        groupEventId: "infopaneWidth"
                    },
                    infopaneWidthWide: {
                        click: function(n, i) {
                            r.infoWidthItemClicked(n, i, t.Constants.InfopaneWidthWide)
                        },
                        checkState: function(n) {
                            return n.infopaneWidth == t.Constants.InfopaneWidthWide
                        },
                        groupEventId: "infopaneWidth"
                    },
                    hideLinksForSites: {
                        click: function(n, t) {
                            t.hideLinksForSites = r.toggleCurrentSiteblockPreference(n, t.hideLinksForSites)
                        },
                        checkState: function(n) {
                            return r.isCurrentSiteBlocked(n.hideLinksForSites) > -1
                        },
                        groupEventId: "pageLinks"
                    }
                },
                this.cdStorage = null,
                i._instance)
                    throw new Error("Instantiation failed!. Use UserPreferenceHandler.getInstance() instead of new.");
                this.cdStorage = n.CrossDomainStorage.getInstance();
                i._instance = this
            }
            return i.getInstance = function() {
                return i._instance === null && (i._instance = new i),
                i._instance
            }
            ,
            i.prototype.menuItemClicked = function(n) {
                var t = this;
                this.cdStorage && n in this.menuHandlers && this.setUserPreferenceAndNotify(function(i) {
                    t.menuHandlers[n].click.call(t, n, i)
                }, n, this.menuHandlers[n].groupEventId)
            }
            ,
            i.prototype.initMenuItemCheckState = function() {
                var n = this;
                this.getUserPreference(function(i) {
                    for (var r in n.menuHandlers)
                        n.menuHandlers[r].checkState.call(n, i) && t.SettingsMenu.menuItemCheck(r, !0)
                })
            }
            ,
            i.prototype.getUserSettings = function(n) {
                var i = this, t;
                if (!this.cdStorage) {
                    n({});
                    return
                }
                t = {};
                this.getUserPreference(function(r) {
                    t.widgetHidden = i.getWidgetHiddenState(r);
                    t.carouselState = i.getCarouselState(r);
                    t.infoPaneWidth = i.getInfoPaneWidth(r);
                    t.linksHidden = i.getHiddenLinkState(r);
                    n(t)
                })
            }
            ,
            i.prototype.hideWidgetForClicked = function(n, i, r) {
                i.hideFor == r ? (t.SettingsMenu.menuItemCheck(n, !1),
                delete i.hideFor,
                delete i.startingHideTime) : (this.widgetHiddenStateReset(i),
                i.hideFor = r,
                t.SettingsMenu.menuItemCheck(n, !0))
            }
            ,
            i.prototype.widgetHiddenStateReset = function(n) {
                delete n.hideFor;
                n.startingHideTime = _bw.sb_gt();
                t.SettingsMenu.menuItemCheck("hideFor15Minutes", !1);
                t.SettingsMenu.menuItemCheck("hideForAnHour", !1);
                t.SettingsMenu.menuItemCheck("hideFor1Day", !1);
                t.SettingsMenu.menuItemCheck("hideForAllSites", !1);
                this.toggleCurrentSiteblockPreference("hideForSites", n.hideForSites, !0)
            }
            ,
            i.prototype.getWidgetHiddenState = function(n) {
                if (!n)
                    return !1;
                if (this.isCurrentSiteBlocked(n.hideForSites) > -1)
                    return !0;
                if (n.startingHideTime && n.hideFor > 0) {
                    var t = _bw.sb_gt() - n.startingHideTime;
                    if (t < n.hideFor)
                        return !0;
                    this.widgetHiddenStateReset(n);
                    delete n.startingHideTime
                }
                return !1
            }
            ,
            i.prototype.carouselStateItemClicked = function(n, i, r) {
                i.carouselState == r ? (t.SettingsMenu.menuItemCheck(n, !1),
                delete i.carouselState) : (this.carouselStateReset(i),
                i.carouselState = r,
                t.SettingsMenu.menuItemCheck(n, !0))
            }
            ,
            i.prototype.carouselStateReset = function(n) {
                delete n.carouselState;
                t.SettingsMenu.menuItemCheck("carouselStateAuto", !1);
                t.SettingsMenu.menuItemCheck("carouselStateCollapsed", !1);
                t.SettingsMenu.menuItemCheck("carouselStateExpanded", !1);
                this.toggleCurrentSiteblockPreference("carouselStateHiddenForSite", n.hideForSites, !0)
            }
            ,
            i.prototype.getCarouselState = function(n) {
                return n ? this.isCurrentSiteBlocked(n.carouselStateHiddenForSite) > -1 ? t.Constants.CarouselStateHidden : typeof n.carouselState == "undefined" ? null : n.carouselState : null
            }
            ,
            i.prototype.infoWidthItemClicked = function(n, i, r) {
                this.infopaneWidthReset(i);
                i.infopaneWidth = r;
                t.SettingsMenu.menuItemCheck(n, !0)
            }
            ,
            i.prototype.infopaneWidthReset = function(n) {
                delete n.infopaneWidth;
                t.SettingsMenu.menuItemCheck("infopaneWidthAuto", !1);
                t.SettingsMenu.menuItemCheck("infopaneWidthNarrow", !1);
                t.SettingsMenu.menuItemCheck("infopaneWidthStandard", !1);
                t.SettingsMenu.menuItemCheck("infopaneWidthWide", !1)
            }
            ,
            i.prototype.getInfoPaneWidth = function(n) {
                return n ? typeof n.infopaneWidth == "undefined" ? t.Constants.InfoPaneWidthAuto : n.infopaneWidth : t.Constants.InfoPaneWidthAuto
            }
            ,
            i.prototype.getHiddenLinkState = function(n) {
                return n ? this.isCurrentSiteBlocked(n.hideLinksForSites) > -1 ? !0 : !1 : !1
            }
            ,
            i.prototype.toggleCurrentSiteblockPreference = function(n, i, r) {
                var u = this.isCurrentSiteBlocked(i);
                return u > -1 ? (i.splice(u, 1),
                t.SettingsMenu.menuItemCheck(n, !1),
                i) : r ? i : (i = i || [],
                i.push(_bw._w.location.host),
                t.SettingsMenu.menuItemCheck(n, !0),
                i)
            }
            ,
            i.prototype.isCurrentSiteBlocked = function(n) {
                if (!n)
                    return -1;
                for (var t = 0; t < n.length; t++)
                    if (n[t] === _bw._w.location.host)
                        return t;
                return -1
            }
            ,
            i.prototype.setUserPreferenceAndNotify = function(t, i, r) {
                var u = this;
                if (!this.cdStorage) {
                    t({});
                    return
                }
                this.cdStorage.getItem(this.userPreferenceKey, function(f) {
                    if (f = f || {},
                    t(f),
                    u.cdStorage.setItem(u.userPreferenceKey, f),
                    _bw.sj_evt.fire(i),
                    _bw.sj_evt.fire(r),
                    i in u.menuHandlers) {
                        var e = u.menuHandlers[i].checkState.call(u, f).toString();
                        // n.core.Logging.click("UP", i, e)
                    }
                })
            }
            ,
            i.prototype.setUserPreference = function(n) {
                var t = this;
                if (!this.cdStorage) {
                    n({});
                    return
                }
                this.cdStorage.getItem(this.userPreferenceKey, function(i) {
                    i = i || {};
                    n(i);
                    t.cdStorage.setItem(t.userPreferenceKey, i)
                })
            }
            ,
            i.prototype.getUserPreference = function(n) {
                if (!this.cdStorage) {
                    n({});
                    return
                }
                this.cdStorage.getItem(this.userPreferenceKey, function(t) {
                    n(t)
                })
            }
            ,
            i._instance = null,
            i
        }();
        t.UserPreferenceHandler = i
    }
    )(t = n.knowledge || (n.knowledge = {}))
}(bootstrap || (bootstrap = {}))
