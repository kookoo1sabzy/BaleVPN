try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "64180862-5325-422e-95d1-92f694bafda9", e._sentryDebugIdIdentifier = "sentry-dbid-64180862-5325-422e-95d1-92f694bafda9")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2779"], {
        34438: function(e, t, n) {
            "use strict";
            e.exports = n.p + "static/image/64.1f113888.png"
        },
        32829: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => e4
            });
            var i = n(58191),
                o = n.n(i);

            function r(e) {
                return e && e.__esModule ? e.default : e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a, l, c, d, u, h, p = {},
                f = [],
                g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function _(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function m(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function v(e, t, n) {
                var i, o, r, s = {};
                for (r in t) "key" == r ? i = t[r] : "ref" == r ? o = t[r] : s[r] = t[r];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? a.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (r in e.defaultProps) void 0 === s[r] && (s[r] = e.defaultProps[r]);
                return b(e, s, i, o, null)
            }

            function b(e, t, n, i, o) {
                var r = {
                    type: e,
                    props: t,
                    key: n,
                    ref: i,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == o ? ++c : o
                };
                return null == o && null != l.vnode && l.vnode(r), r
            }

            function k() {
                return {
                    current: null
                }
            }

            function w(e) {
                return e.children
            }

            function y(e, t) {
                this.props = e, this.context = t
            }

            function C(e, t) {
                if (null == t) return e.__ ? C(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? C(e) : null
            }

            function x(e) {
                (!e.__d && (e.__d = !0) && d.push(e) && !S.__r++ || h !== l.debounceRendering) && ((h = l.debounceRendering) || u)(S)
            }

            function S() {
                for (var e; S.__r = d.length;) e = d.sort(function(e, t) {
                    return e.__v.__b - t.__v.__b
                }), d = [], e.some(function(e) {
                    var t, n, i, o, r;
                    e.__d && (o = (i = e.__v).__e, (r = e.__P) && (t = [], (n = _({}, i)).__v = i.__v + 1, B(r, i, n, e.__n, void 0 !== r.ownerSVGElement, null != i.__h ? [o] : null, t, null == o ? C(i) : o, i.__h), T(t, i), i.__e != o && function e(t) {
                        var n, i;
                        if (null != (t = t.__) && null != t.__c) {
                            for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                                if (null != (i = t.__k[n]) && null != i.__e) {
                                    t.__e = t.__c.base = i.__e;
                                    break
                                } return e(t)
                        }
                    }(i)))
                })
            }

            function j(e, t, n, i, o, r, s, a, c, d) {
                var u, h, g, _, v, k, y, x = i && i.__k || f,
                    S = x.length;
                for (n.__k = [], u = 0; u < t.length; u++)
                    if (null != (_ = n.__k[u] = null == (_ = t[u]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? b(null, _, null, null, _) : Array.isArray(_) ? b(w, {
                            children: _
                        }, null, null, null) : _.__b > 0 ? b(_.type, _.props, _.key, null, _.__v) : _)) {
                        if (_.__ = n, _.__b = n.__b + 1, null === (g = x[u]) || g && _.key == g.key && _.type === g.type) x[u] = void 0;
                        else
                            for (h = 0; h < S; h++) {
                                if ((g = x[h]) && _.key == g.key && _.type === g.type) {
                                    x[h] = void 0;
                                    break
                                }
                                g = null
                            }
                        B(e, _, g = g || p, o, r, s, a, c, d), v = _.__e, (h = _.ref) && g.ref != h && (y || (y = []), g.ref && y.push(g.ref, null, _), y.push(h, _.__c || v, _)), null != v ? (null == k && (k = v), "function" == typeof _.type && _.__k === g.__k ? _.__d = c = function e(t, n, i) {
                            for (var o, r = t.__k, s = 0; r && s < r.length; s++)(o = r[s]) && (o.__ = t, n = "function" == typeof o.type ? e(o, n, i) : z(i, o, o, r, o.__e, n));
                            return n
                        }(_, c, e) : c = z(e, _, g, x, v, c), "function" == typeof n.type && (n.__d = c)) : c && g.__e == c && c.parentNode != e && (c = C(g))
                    } for (n.__e = k, u = S; u--;) null != x[u] && ("function" == typeof n.type && null != x[u].__e && x[u].__e == n.__d && (n.__d = C(i, u + 1)), function e(t, n, i) {
                    var o, r;
                    if (l.unmount && l.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || H(o, null, n)), null != (o = t.__c)) {
                        if (o.componentWillUnmount) try {
                            o.componentWillUnmount()
                        } catch (e) {
                            l.__e(e, n)
                        }
                        o.base = o.__P = null
                    }
                    if (o = t.__k)
                        for (r = 0; r < o.length; r++) o[r] && e(o[r], n, "function" != typeof t.type);
                    i || null == t.__e || m(t.__e), t.__e = t.__d = void 0
                }(x[u], x[u]));
                if (y)
                    for (u = 0; u < y.length; u++) H(y[u], y[++u], y[++u])
            }

            function M(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function(e) {
                    M(e, t)
                }) : t.push(e)), t
            }

            function z(e, t, n, i, o, r) {
                var s, a, l;
                if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
                else if (null == n || o != r || null == o.parentNode) e: if (null == r || r.parentNode !== e) e.appendChild(o), s = null;
                    else {
                        for (a = r, l = 0;
                            (a = a.nextSibling) && l < i.length; l += 2)
                            if (a == o) break e;
                        e.insertBefore(o, r), s = r
                    } return void 0 !== s ? s : o.nextSibling
            }

            function L(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || g.test(t) ? n : n + "px"
            }

            function E(e, t, n, i, o) {
                var r;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof i && (e.style.cssText = i = ""), i)
                            for (t in i) n && t in n || L(e.style, t, "");
                        if (n)
                            for (t in n) i && n[t] === i[t] || L(e.style, t, n[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? i || e.addEventListener(t, r ? P : R, r) : e.removeEventListener(t, r ? P : R, r);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                    else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
                }
            }

            function R(e) {
                this.l[e.type + !1](l.event ? l.event(e) : e)
            }

            function P(e) {
                this.l[e.type + !0](l.event ? l.event(e) : e)
            }

            function B(e, t, n, i, o, r, s, c, d) {
                var u, h, f, g, v, b, k, x, S, M, z, L = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (d = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (u = l.__b) && u(t);
                try {
                    e: if ("function" == typeof L) {
                        if (x = t.props, S = (u = L.contextType) && i[u.__c], M = u ? S ? S.props.value : u.__ : i, n.__c ? k = (h = t.__c = n.__c).__ = h.__E : ("prototype" in L && L.prototype.render ? t.__c = h = new L(x, M) : (t.__c = h = new y(x, M), h.constructor = L, h.render = A), S && S.sub(h), h.props = x, h.state || (h.state = {}), h.context = M, h.__n = i, f = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != L.getDerivedStateFromProps && (h.__s == h.state && (h.__s = _({}, h.__s)), _(h.__s, L.getDerivedStateFromProps(x, h.__s))), g = h.props, v = h.state, f) null == L.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
                        else {
                            if (null == L.getDerivedStateFromProps && x !== g && null != h.componentWillReceiveProps && h.componentWillReceiveProps(x, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(x, h.__s, M) || t.__v === n.__v) {
                                h.props = x, h.state = h.__s, t.__v !== n.__v && (h.__d = !1), h.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), h.__h.length && s.push(h);
                                break e
                            }
                            null != h.componentWillUpdate && h.componentWillUpdate(x, h.__s, M), null != h.componentDidUpdate && h.__h.push(function() {
                                h.componentDidUpdate(g, v, b)
                            })
                        }
                        h.context = M, h.props = x, h.state = h.__s, (u = l.__r) && u(t), h.__d = !1, h.__v = t, h.__P = e, u = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (i = _(_({}, i), h.getChildContext())), f || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(g, v)), z = null != u && u.type === w && null == u.key ? u.props.children : u, j(e, Array.isArray(z) ? z : [z], t, n, i, o, r, s, c, d), h.base = t.__e, t.__h = null, h.__h.length && s.push(h), k && (h.__E = h.__ = null), h.__e = !1
                    } else null == r && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, i, o, r, s, l) {
                        var c, d, u, h = n.props,
                            f = t.props,
                            g = t.type,
                            _ = 0;
                        if ("svg" === g && (o = !0), null != r) {
                            for (; _ < r.length; _++)
                                if ((c = r[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : 3 === c.nodeType)) {
                                    e = c, r[_] = null;
                                    break
                                }
                        }
                        if (null == e) {
                            if (null === g) return document.createTextNode(f);
                            e = o ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, f.is && f), r = null, l = !1
                        }
                        if (null === g) h === f || l && e.data === f || (e.data = f);
                        else {
                            if (r = r && a.call(e.childNodes), d = (h = n.props || p).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !l) {
                                if (null != r)
                                    for (h = {}, _ = 0; _ < e.attributes.length; _++) h[e.attributes[_].name] = e.attributes[_].value;
                                (u || d) && (u && (d && u.__html == d.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
                            }
                            if (function(e, t, n, i, o) {
                                    var r;
                                    for (r in n) "children" === r || "key" === r || r in t || E(e, r, null, n[r], i);
                                    for (r in t) o && "function" != typeof t[r] || "children" === r || "key" === r || "value" === r || "checked" === r || n[r] === t[r] || E(e, r, t[r], n[r], i)
                                }(e, f, h, o, l), u) t.__k = [];
                            else if (j(e, Array.isArray(_ = t.props.children) ? _ : [_], t, n, i, o && "foreignObject" !== g, r, s, r ? r[0] : n.__k && C(n, 0), l), null != r)
                                for (_ = r.length; _--;) null != r[_] && m(r[_]);
                            l || ("value" in f && void 0 !== (_ = f.value) && (_ !== h.value || _ !== e.value || "progress" === g && !_) && E(e, "value", _, h.value, !1), "checked" in f && void 0 !== (_ = f.checked) && _ !== e.checked && E(e, "checked", _, h.checked, !1))
                        }
                        return e
                    }(n.__e, t, n, i, o, r, s, d);
                    (u = l.diffed) && u(t)
                }
                catch (e) {
                    t.__v = null, (d || null != r) && (t.__e = c, t.__h = !!d, r[r.indexOf(c)] = null), l.__e(e, t, n)
                }
            }

            function T(e, t) {
                l.__c && l.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        l.__e(e, t.__v)
                    }
                })
            }

            function H(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    l.__e(e, n)
                }
            }

            function A(e, t, n) {
                return this.constructor(e, n)
            }

            function I(e, t, n) {
                var i, o, r;
                l.__ && l.__(e, t), o = (i = "function" == typeof n) ? null : n && n.__k || t.__k, r = [], B(t, e = (!i && n || t).__k = v(w, null, [e]), o || p, p, void 0 !== t.ownerSVGElement, !i && n ? [n] : o ? null : t.firstChild ? a.call(t.childNodes) : null, r, !i && n ? n : o ? o.__e : t.firstChild, i), T(r, e)
            }
            a = f.slice, l = {
                __e: function(e, t) {
                    for (var n, i, o; t = t.__;)
                        if ((n = t.__c) && !n.__) try {
                            if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, c = 0, y.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this.__h.push(t), x(this))
            }, y.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), x(this))
            }, y.prototype.render = w, d = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, S.__r = 0;
            var O = 0;

            function D(e, t, n, i, o) {
                var r, s, a = {};
                for (s in t) "ref" == s ? r = t[s] : a[s] = t[s];
                var c = {
                    type: e,
                    props: a,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --O,
                    __source: i,
                    __self: o
                };
                if ("function" == typeof e && (r = e.defaultProps))
                    for (s in r) void 0 === a[s] && (a[s] = r[s]);
                return l.vnode && l.vnode(c), c
            }
            var $ = function(e, t) {
                    try {
                        window.localStorage[`emoji-mart.${e}`] = JSON.stringify(t)
                    } catch (e) {}
                },
                V = function(e) {
                    try {
                        let t = window.localStorage[`emoji-mart.${e}`];
                        if (t) return JSON.parse(t)
                    } catch (e) {}
                };
            let U = new Map,
                F = [{
                    v: 15,
                    emoji: "\uD83E\uDEE8"
                }, {
                    v: 14,
                    emoji: "\uD83E\uDEE0"
                }, {
                    v: 13.1,
                    emoji: "\uD83D\uDE36‍\uD83C\uDF2B️"
                }, {
                    v: 13,
                    emoji: "\uD83E\uDD78"
                }, {
                    v: 12.1,
                    emoji: "\uD83E\uDDD1‍\uD83E\uDDB0"
                }, {
                    v: 12,
                    emoji: "\uD83E\uDD71"
                }, {
                    v: 11,
                    emoji: "\uD83E\uDD70"
                }, {
                    v: 5,
                    emoji: "\uD83E\uDD29"
                }, {
                    v: 4,
                    emoji: "\uD83D\uDC71‍♀️"
                }, {
                    v: 3,
                    emoji: "\uD83E\uDD23"
                }, {
                    v: 2,
                    emoji: "\uD83D\uDC4B\uD83C\uDFFB"
                }, {
                    v: 1,
                    emoji: "\uD83D\uDE43"
                }];

            function N(e) {
                if (U.has(e)) return U.get(e);
                let t = W(e);
                return U.set(e, t), t
            }
            let W = (() => {
                let e = null;
                try {
                    navigator.userAgent.includes("jsdom") || (e = document.createElement("canvas").getContext("2d", {
                        willReadFrequently: !0
                    }))
                } catch {}
                if (!e) return () => !1;
                let t = Math.floor(12.5);
                return e.font = t + "px Arial, Sans-Serif", e.textBaseline = "top", e.canvas.width = 40, e.canvas.height = 25, t => {
                    e.clearRect(0, 0, 40, 25), e.fillStyle = "#FF0000", e.fillText(t, 0, 22), e.fillStyle = "#0000FF", e.fillText(t, 20, 22);
                    let n = e.getImageData(0, 0, 20, 25).data,
                        i = n.length,
                        o = 0;
                    for (; o < i && !n[o + 3]; o += 4);
                    if (o >= i) return !1;
                    let r = 20 + o / 4 % 20,
                        s = Math.floor(o / 4 / 20),
                        a = e.getImageData(r, s, 1, 1).data;
                    return n[o] === a[0] && n[o + 2] === a[2] && !(e.measureText(t).width >= 20)
                }
            })();
            var q = function() {
                for (let {
                        v: e,
                        emoji: t
                    }
                    of F)
                    if (N(t)) return e
            };
            let K = ["+1", "grinning", "kissing_heart", "heart_eyes", "laughing", "stuck_out_tongue_winking_eye", "sweat_smile", "joy", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart"],
                G = null;
            var X = function(e) {
                    G || (G = V("frequently") || {});
                    let t = e.id || e;
                    t && (G[t] || (G[t] = 0), G[t] += 1, $("last", t), $("frequently", G))
                },
                Y = function(e) {
                    let {
                        maxFrequentRows: t,
                        perLine: n
                    } = e;
                    if (!t) return [];
                    G || (G = V("frequently"));
                    let i = [];
                    if (!G) {
                        for (let e in G = {}, K.slice(0, n)) {
                            let t = K[e];
                            G[t] = n - e, i.push(t)
                        }
                        return i
                    }
                    let o = t * n,
                        r = V("last");
                    for (let e in G) i.push(e);
                    if (i.sort((e, t) => {
                            let n = G[t],
                                i = G[e];
                            return n == i ? e.localeCompare(t) : n - i
                        }), i.length > o) {
                        let e = i.slice(o);
                        for (let t of (i = i.slice(0, o), e)) t != r && delete G[t];
                        r && -1 == i.indexOf(r) && (delete G[i[i.length - 1]], i.splice(-1, 1, r)), $("frequently", G)
                    }
                    return i
                },
                J = {};
            J = JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');
            var Z = {
                autoFocus: {
                    value: !1
                },
                dynamicWidth: {
                    value: !1
                },
                emojiButtonColors: {
                    value: null
                },
                emojiButtonRadius: {
                    value: "100%"
                },
                emojiButtonSize: {
                    value: 36
                },
                emojiSize: {
                    value: 24
                },
                emojiVersion: {
                    value: 15,
                    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15]
                },
                exceptEmojis: {
                    value: []
                },
                icons: {
                    value: "auto",
                    choices: ["auto", "outline", "solid"]
                },
                locale: {
                    value: "en",
                    choices: ["en", "ar", "be", "cs", "de", "es", "fa", "fi", "fr", "hi", "it", "ja", "ko", "nl", "pl", "pt", "ru", "sa", "tr", "uk", "vi", "zh"]
                },
                maxFrequentRows: {
                    value: 4
                },
                navPosition: {
                    value: "top",
                    choices: ["top", "bottom", "none"]
                },
                noCountryFlags: {
                    value: !1
                },
                noResultsEmoji: {
                    value: null
                },
                perLine: {
                    value: 9
                },
                previewEmoji: {
                    value: null
                },
                previewPosition: {
                    value: "bottom",
                    choices: ["top", "bottom", "none"]
                },
                searchPosition: {
                    value: "sticky",
                    choices: ["sticky", "static", "none"]
                },
                set: {
                    value: "native",
                    choices: ["native", "apple", "facebook", "google", "twitter"]
                },
                skin: {
                    value: 1,
                    choices: [1, 2, 3, 4, 5, 6]
                },
                skinTonePosition: {
                    value: "preview",
                    choices: ["preview", "search", "none"]
                },
                theme: {
                    value: "auto",
                    choices: ["auto", "light", "dark"]
                },
                categories: null,
                categoryIcons: null,
                custom: null,
                data: null,
                i18n: null,
                getImageURL: null,
                getSpritesheetURL: null,
                onAddCustomEmoji: null,
                onClickOutside: null,
                onEmojiSelect: null,
                stickySearch: {
                    deprecated: !0,
                    value: !0
                }
            };
            let Q = null,
                ee = null,
                et = {};
            async function en(e) {
                if (et[e]) return et[e];
                let t = await fetch(e),
                    n = await t.json();
                return et[e] = n, n
            }
            let ei = null,
                eo = null,
                er = !1;

            function es(e) {
                let {
                    caller: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return ei || (ei = new Promise(e => {
                    eo = e
                })), e ? ea(e) : t && !er && console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`), ei
            }
            async function ea(e) {
                er = !0;
                let {
                    emojiVersion: t,
                    set: n,
                    locale: i
                } = e;
                if (t || (t = Z.emojiVersion.value), n || (n = Z.set.value), i || (i = Z.locale.value), ee) ee.categories = ee.categories.filter(e => !e.name);
                else {
                    for (let i in (ee = ("function" == typeof e.data ? await e.data() : e.data) || await en(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`)).emoticons = {}, ee.natives = {}, ee.categories.unshift({
                            id: "frequent",
                            emojis: []
                        }), ee.aliases) {
                        let e = ee.aliases[i],
                            t = ee.emojis[e];
                        t && (t.aliases || (t.aliases = []), t.aliases.push(i))
                    }
                    ee.originalCategories = ee.categories
                }
                if (Q = ("function" == typeof e.i18n ? await e.i18n() : e.i18n) || ("en" == i ? r(J) : await en(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)), e.custom)
                    for (let t in e.custom) {
                        t = parseInt(t);
                        let n = e.custom[t],
                            i = e.custom[t - 1];
                        if (n.emojis && n.emojis.length)
                            for (let e of (n.id || (n.id = `custom_${t+1}`), n.name || (n.name = Q.categories.custom), i && !n.icon && (n.target = i.target || i), ee.categories.push(n), n.emojis)) ee.emojis[e.id] = e
                    }
                e.categories && (ee.categories = ee.originalCategories.filter(t => -1 != e.categories.indexOf(t.id)).sort((t, n) => e.categories.indexOf(t.id) - e.categories.indexOf(n.id)));
                let o = null,
                    s = null;
                "native" == n && (o = q(), s = e.noCountryFlags || !N("\uD83C\uDDE8\uD83C\uDDE6"));
                let a = ee.categories.length,
                    l = !1;
                for (; a--;) {
                    let t = ee.categories[a];
                    if ("frequent" == t.id) {
                        let {
                            maxFrequentRows: n,
                            perLine: i
                        } = e;
                        n = n >= 0 ? n : Z.maxFrequentRows.value, i || (i = Z.perLine.value), t.emojis = Y({
                            maxFrequentRows: n,
                            perLine: i
                        })
                    }
                    if (!t.emojis || !t.emojis.length) {
                        ee.categories.splice(a, 1);
                        continue
                    }
                    let {
                        categoryIcons: n
                    } = e;
                    if (n) {
                        let e = n[t.id];
                        e && !t.icon && (t.icon = e)
                    }
                    let i = t.emojis.length;
                    for (; i--;) {
                        let n = t.emojis[i],
                            r = n.id ? n : ee.emojis[n],
                            a = () => {
                                t.emojis.splice(i, 1)
                            };
                        if (!r || e.exceptEmojis && e.exceptEmojis.includes(r.id) || o && r.version > o || s && "flags" == t.id && !eh.includes(r.id)) {
                            a();
                            continue
                        }
                        if (!r.search) {
                            if (l = !0, r.search = "," + [
                                    [r.id, !1],
                                    [r.name, !0],
                                    [r.keywords, !1],
                                    [r.emoticons, !1]
                                ].map(e => {
                                    let [t, n] = e;
                                    if (t) return (Array.isArray(t) ? t : [t]).map(e => (n ? e.split(/[-|_|\s]+/) : [e]).map(e => e.toLowerCase())).flat()
                                }).flat().filter(e => e && e.trim()).join(","), r.emoticons)
                                for (let e of r.emoticons) ee.emoticons[e] || (ee.emoticons[e] = r.id);
                            let e = 0;
                            for (let t of r.skins) {
                                if (!t) continue;
                                e++;
                                let {
                                    native: n
                                } = t;
                                n && (ee.natives[n] = r.id, r.search += `,${n}`);
                                let i = 1 == e ? "" : `:skin-tone-${e}:`;
                                t.shortcodes = `:${r.id}:${i}`
                            }
                        }
                    }
                }
                l && eu.reset(), eo()
            }

            function el(e, t, n) {
                e || (e = {});
                let i = {};
                for (let o in t) i[o] = ec(o, e, t, n);
                return i
            }

            function ec(e, t, n, i) {
                let o = n[e],
                    r = i && i.getAttribute(e) || (null != t[e] && void 0 != t[e] ? t[e] : null);
                return o && (null != r && o.value && typeof o.value != typeof r && (r = "boolean" == typeof o.value ? "false" != r : o.value.constructor(r)), o.transform && r && (r = o.transform(r)), (null == r || o.choices && -1 == o.choices.indexOf(r)) && (r = o.value)), r
            }
            let ed = null;
            var eu = {
                search: async function(e) {
                    let t, n, {
                        maxResults: i,
                        caller: o
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e || !e.trim().length) return null;
                    i || (i = 90), await es(null, {
                        caller: o || "SearchIndex.search"
                    });
                    let r = e.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter((e, t, n) => e.trim() && n.indexOf(e) == t);
                    if (!r.length) return;
                    let s = ed || (ed = Object.values(ee.emojis));
                    for (let e of r) {
                        if (!s.length) break;
                        for (let i of (t = [], n = {}, s)) {
                            if (!i.search) continue;
                            let o = i.search.indexOf(`,${e}`); - 1 != o && (t.push(i), n[i.id] || (n[i.id] = 0), n[i.id] += i.id == e ? 0 : o + 1)
                        }
                        s = t
                    }
                    return t.length < 2 || (t.sort((e, t) => {
                        let i = n[e.id],
                            o = n[t.id];
                        return i == o ? e.id.localeCompare(t.id) : i - o
                    }), t.length > i && (t = t.slice(0, i))), t
                },
                get: function(e) {
                    return e.id ? e : ee.emojis[e] || ee.emojis[ee.aliases[e]] || ee.emojis[ee.natives[e]]
                },
                reset: function() {
                    ed = null
                },
                SHORTCODES_REGEX: /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/
            };
            let eh = ["checkered_flag", "crossed_flags", "pirate_flag", "rainbow-flag", "transgender_flag", "triangular_flag_on_post", "waving_black_flag", "waving_white_flag"];
            async function ep() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                for (let t in [...Array(e).keys()]) await new Promise(requestAnimationFrame)
            }
            var ef = {
                categories: {
                    activity: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: D("path", {
                                    d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
                                })
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
                                })
                            })
                        }
                    },
                    get custom() {
                        return D("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512",
                            children: D("path", {
                                d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
                            })
                        })
                    },
                    flags: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: D("path", {
                                    d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
                                })
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
                                })
                            })
                        }
                    },
                    foods: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: D("path", {
                                    d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
                                })
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
                                })
                            })
                        }
                    },
                    frequent: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: [D("path", {
                                    d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
                                }), D("path", {
                                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                                })]
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                                })
                            })
                        }
                    },
                    nature: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: [D("path", {
                                    d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
                                }), D("path", {
                                    d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
                                })]
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 576 512",
                                children: D("path", {
                                    d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
                                })
                            })
                        }
                    },
                    objects: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: [D("path", {
                                    d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
                                }), D("path", {
                                    d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
                                })]
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 384 512",
                                children: D("path", {
                                    d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
                                })
                            })
                        }
                    },
                    people: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: [D("path", {
                                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                                }), D("path", {
                                    d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
                                })]
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
                                })
                            })
                        }
                    },
                    places: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: [D("path", {
                                    d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
                                }), D("path", {
                                    d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
                                })]
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
                                })
                            })
                        }
                    },
                    symbols: {
                        get outline() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                children: D("path", {
                                    d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
                                })
                            })
                        },
                        get solid() {
                            return D("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512",
                                children: D("path", {
                                    d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
                                })
                            })
                        }
                    }
                },
                search: {
                    get loupe() {
                        return D("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            children: D("path", {
                                d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                            })
                        })
                    },
                    get delete() {
                        return D("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            children: D("path", {
                                d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                            })
                        })
                    }
                }
            };

            function eg(e) {
                let {
                    id: t,
                    skin: n,
                    emoji: i
                } = e;
                if (e.shortcodes) {
                    let i = e.shortcodes.match(eu.SHORTCODES_REGEX);
                    i && (t = i[1], i[2] && (n = i[2]))
                }
                if (i || (i = eu.get(t || e.native)), !i) return e.fallback;
                let o = i.skins[n - 1] || i.skins[0],
                    r = o.src || ("native" == e.set || e.spritesheet ? void 0 : "function" == typeof e.getImageURL ? e.getImageURL(e.set, o.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/64/${o.unified}.png`),
                    s = "function" == typeof e.getSpritesheetURL ? e.getSpritesheetURL(e.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/sheets-256/64.png`;
                return D("span", {
                    class: "emoji-mart-emoji",
                    "data-emoji-set": e.set,
                    children: r ? D("img", {
                        style: {
                            maxWidth: e.size || "1em",
                            maxHeight: e.size || "1em",
                            display: "inline-block"
                        },
                        alt: o.native || o.shortcodes,
                        src: r
                    }) : "native" == e.set ? D("span", {
                        style: {
                            fontSize: e.size,
                            fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
                        },
                        children: o.native
                    }) : D("span", {
                        style: {
                            display: "block",
                            width: e.size,
                            height: e.size,
                            backgroundImage: `url(${s})`,
                            backgroundSize: `${100*ee.sheet.cols}% ${100*ee.sheet.rows}%`,
                            backgroundPosition: `${100/(ee.sheet.cols-1)*o.x}% ${100/(ee.sheet.rows-1)*o.y}%`
                        }
                    })
                })
            }
            let e_ = "undefined" != typeof window && window.HTMLElement ? window.HTMLElement : Object;
            class em extends e_ {
                static get observedAttributes() {
                    return Object.keys(this.Props)
                }
                update() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    for (let t in e) this.attributeChangedCallback(t, null, e[t])
                }
                attributeChangedCallback(e, t, n) {
                    if (!this.component) return;
                    let i = ec(e, {
                        [e]: n
                    }, this.constructor.Props, this);
                    this.component.componentWillReceiveProps ? this.component.componentWillReceiveProps({
                        [e]: i
                    }) : (this.component.props[e] = i, this.component.forceUpdate())
                }
                disconnectedCallback() {
                    this.disconnected = !0, this.component && this.component.unregister && this.component.unregister()
                }
                constructor(e = {}) {
                    if (super(), this.props = e, e.parent || e.ref) {
                        let t = null;
                        const n = e.parent || (t = e.ref && e.ref.current);
                        t && (t.innerHTML = ""), n && n.appendChild(this)
                    }
                }
            }
            class ev extends em {
                setShadow() {
                    this.attachShadow({
                        mode: "open"
                    })
                }
                injectStyles(e) {
                    if (!e) return;
                    let t = document.createElement("style");
                    t.textContent = e, this.shadowRoot.insertBefore(t, this.shadowRoot.firstChild)
                }
                constructor(e, {
                    styles: t
                } = {}) {
                    super(e), this.setShadow(), this.injectStyles(t)
                }
            }
            var eb = {
                fallback: "",
                id: "",
                native: "",
                shortcodes: "",
                size: {
                    value: "",
                    transform: e => /\D/.test(e) ? e : `${e}px`
                },
                set: Z.set,
                skin: Z.skin
            };
            class ek extends em {
                async connectedCallback() {
                    let e = el(this.props, eb, this);
                    e.element = this, e.ref = e => {
                        this.component = e
                    }, await es(), this.disconnected || I(D(eg, {
                        ...e
                    }), this)
                }
                constructor(e) {
                    super(e)
                }
            }
            s(ek, "Props", eb), "undefined" == typeof customElements || customElements.get("em-emoji") || customElements.define("em-emoji", ek);
            var ew, ey, eC = [],
                ex = l.__b,
                eS = l.__r,
                ej = l.diffed,
                eM = l.__c,
                ez = l.unmount;

            function eL() {
                var e;
                for (eC.sort(function(e, t) {
                        return e.__v.__b - t.__v.__b
                    }); e = eC.pop();)
                    if (e.__P) try {
                        e.__H.__h.forEach(eR), e.__H.__h.forEach(eP), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], l.__e(t, e.__v)
                    }
            }
            l.__b = function(e) {
                ew = null, ex && ex(e)
            }, l.__r = function(e) {
                eS && eS(e);
                var t = (ew = e.__c).__H;
                t && (t.__h.forEach(eR), t.__h.forEach(eP), t.__h = [])
            }, l.diffed = function(e) {
                ej && ej(e);
                var t = e.__c;
                t && t.__H && t.__H.__h.length && (1 !== eC.push(t) && ey === l.requestAnimationFrame || ((ey = l.requestAnimationFrame) || function(e) {
                    var t, n = function() {
                            clearTimeout(i), eE && cancelAnimationFrame(t), setTimeout(e)
                        },
                        i = setTimeout(n, 100);
                    eE && (t = requestAnimationFrame(n))
                })(eL)), ew = null
            }, l.__c = function(e, t) {
                t.some(function(e) {
                    try {
                        e.__h.forEach(eR), e.__h = e.__h.filter(function(e) {
                            return !e.__ || eP(e)
                        })
                    } catch (n) {
                        t.some(function(e) {
                            e.__h && (e.__h = [])
                        }), t = [], l.__e(n, e.__v)
                    }
                }), eM && eM(e, t)
            }, l.unmount = function(e) {
                ez && ez(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach(function(e) {
                    try {
                        eR(e)
                    } catch (e) {
                        t = e
                    }
                }), t && l.__e(t, n.__v))
            };
            var eE = "function" == typeof requestAnimationFrame;

            function eR(e) {
                var t = ew,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), ew = t
            }

            function eP(e) {
                var t = ew;
                e.__c = e.__(), ew = t
            }

            function eB(e, t) {
                for (var n in e)
                    if ("__source" !== n && !(n in t)) return !0;
                for (var i in t)
                    if ("__source" !== i && e[i] !== t[i]) return !0;
                return !1
            }

            function eT(e) {
                this.props = e
            }(eT.prototype = new y).isPureReactComponent = !0, eT.prototype.shouldComponentUpdate = function(e, t) {
                return eB(this.props, e) || eB(this.state, t)
            };
            var eH = l.__b;
            l.__b = function(e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), eH && eH(e)
            }, "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
            var eA = l.__e;
            l.__e = function(e, t, n) {
                if (e.then) {
                    for (var i, o = t; o = o.__;)
                        if ((i = o.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
                }
                eA(e, t, n)
            };
            var eI = l.unmount;

            function eO() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function eD(e) {
                var t = e.__.__c;
                return t && t.__e && t.__e(e)
            }

            function e$() {
                this.u = null, this.o = null
            }
            l.unmount = function(e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), eI && eI(e)
            }, (eO.prototype = new y).__c = function(e, t) {
                var n = t.__c,
                    i = this;
                null == i.t && (i.t = []), i.t.push(n);
                var o = eD(i.__v),
                    r = !1,
                    s = function() {
                        r || (r = !0, n.__R = null, o ? o(a) : a())
                    };
                n.__R = s;
                var a = function() {
                        if (!--i.__u) {
                            if (i.state.__e) {
                                var e, t = i.state.__e;
                                i.__v.__k[0] = function e(t, n, i) {
                                    return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(t) {
                                        return e(t, n, i)
                                    }), t.__c && t.__c.__P === n && (t.__e && i.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = i)), t
                                }(t, t.__c.__P, t.__c.__O)
                            }
                            for (i.setState({
                                    __e: i.__b = null
                                }); e = i.t.pop();) e.forceUpdate()
                        }
                    },
                    l = !0 === t.__h;
                i.__u++ || l || i.setState({
                    __e: i.__b = i.__v.__k[0]
                }), e.then(s, s)
            }, eO.prototype.componentWillUnmount = function() {
                this.t = []
            }, eO.prototype.render = function(e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            i = this.__v.__k[0].__c;
                        this.__v.__k[0] = function e(t, n, i) {
                            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(e) {
                                "function" == typeof e.__c && e.__c()
                            }), t.__c.__H = null), null != (t = function(e, t) {
                                for (var n in t) e[n] = t[n];
                                return e
                            }({}, t)).__c && (t.__c.__P === i && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function(t) {
                                return e(t, n, i)
                            })), t
                        }(this.__b, n, i.__O = i.__P)
                    }
                    this.__b = null
                }
                var o = t.__e && v(w, null, e.fallback);
                return o && (o.__h = null), [v(w, null, t.__e ? null : e.children), o]
            };
            var eV = function(e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                    for (n = e.u; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2]
                    }
            };
            (e$.prototype = new y).__e = function(e) {
                var t = this,
                    n = eD(t.__v),
                    i = t.o.get(e);
                return i[0]++,
                    function(o) {
                        var r = function() {
                            t.props.revealOrder ? (i.push(o), eV(t, e, i)) : o()
                        };
                        n ? n(r) : r()
                    }
            }, e$.prototype.render = function(e) {
                this.u = null, this.o = new Map;
                var t = M(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, e$.prototype.componentDidUpdate = e$.prototype.componentDidMount = function() {
                var e = this;
                this.o.forEach(function(t, n) {
                    eV(e, n, t)
                })
            };
            var eU = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                eF = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                eN = "undefined" != typeof document;
            y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
                Object.defineProperty(y.prototype, e, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            });
            var eW = l.event;

            function eq() {}

            function eK() {
                return this.cancelBubble
            }

            function eG() {
                return this.defaultPrevented
            }
            l.event = function(e) {
                return eW && (e = eW(e)), e.persist = eq, e.isPropagationStopped = eK, e.isDefaultPrevented = eG, e.nativeEvent = e
            };
            var eX = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                eY = l.vnode;
            l.vnode = function(e) {
                var t = e.type,
                    n = e.props,
                    i = n;
                if ("string" == typeof t) {
                    var o = -1 === t.indexOf("-");
                    for (var r in i = {}, n) {
                        var s, a = n[r];
                        eN && "children" === r && "noscript" === t || "value" === r && "defaultValue" in n && null == a || ("defaultValue" === r && "value" in n && null == n.value ? r = "value" : "download" === r && !0 === a ? a = "" : /ondoubleclick/i.test(r) ? r = "ondblclick" : /^onchange(textarea|input)/i.test(r + t) && (s = n.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(s)) ? r = "oninput" : /^onfocus$/i.test(r) ? r = "onfocusin" : /^onblur$/i.test(r) ? r = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(r) ? r = r.toLowerCase() : o && eF.test(r) ? r = r.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), i[r] = a)
                    }
                    "select" == t && i.multiple && Array.isArray(i.value) && (i.value = M(n.children).forEach(function(e) {
                        e.props.selected = -1 != i.value.indexOf(e.props.value)
                    })), "select" == t && null != i.defaultValue && (i.value = M(n.children).forEach(function(e) {
                        e.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(e.props.value) : i.defaultValue == e.props.value
                    })), e.props = i, n.class != n.className && (eX.enumerable = "className" in n, null != n.className && (i.class = n.className), Object.defineProperty(i, "className", eX))
                }
                e.$$typeof = eU, eY && eY(e)
            };
            var eJ = l.__r;
            l.__r = function(e) {
                eJ && eJ(e), e.__c
            };
            let eZ = {
                light: "outline",
                dark: "solid"
            };
            class eQ extends eT {
                renderIcon(e) {
                    let {
                        icon: t
                    } = e;
                    if (t) {
                        if (t.svg) return D("span", {
                            class: "flex",
                            dangerouslySetInnerHTML: {
                                __html: t.svg
                            }
                        });
                        if (t.src) return D("img", {
                            src: t.src
                        })
                    }
                    let n = ef.categories[e.id] || ef.categories.custom;
                    return n["auto" == this.props.icons ? eZ[this.props.theme] : this.props.icons] || n
                }
                render() {
                    let e = null;
                    return D("nav", {
                        id: "nav",
                        class: "padding",
                        "data-position": this.props.position,
                        dir: this.props.dir,
                        children: D("div", {
                            class: "flex relative",
                            children: [this.categories.map((t, n) => {
                                let i = t.name || Q.categories[t.id],
                                    o = !this.props.unfocused && t.id == this.state.categoryId;
                                return o && (e = n), D("button", {
                                    "aria-label": i,
                                    "aria-selected": o || void 0,
                                    title: i,
                                    type: "button",
                                    class: "flex flex-grow flex-center",
                                    onMouseDown: e => e.preventDefault(),
                                    onClick: () => {
                                        this.props.onClick({
                                            category: t,
                                            i: n
                                        })
                                    },
                                    children: this.renderIcon(t)
                                })
                            }), D("div", {
                                class: "bar",
                                style: {
                                    width: `${100/this.categories.length}%`,
                                    opacity: +(null != e),
                                    transform: "rtl" === this.props.dir ? `scaleX(-1) translateX(${100*e}%)` : `translateX(${100*e}%)`
                                }
                            })]
                        })
                    })
                }
                constructor() {
                    super(), this.categories = ee.categories.filter(e => !e.target), this.state = {
                        categoryId: this.categories[0].id
                    }
                }
            }
            class e1 extends eT {
                shouldComponentUpdate(e) {
                    for (let t in e)
                        if ("children" != t && e[t] != this.props[t]) return !0;
                    return !1
                }
                render() {
                    return this.props.children
                }
            }
            class e2 extends y {
                getInitialState() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return {
                        skin: V("skin") || e.skin,
                        theme: this.initTheme(e.theme)
                    }
                }
                componentWillMount() {
                    this.dir = Q.rtl ? "rtl" : "ltr", this.refs = {
                        menu: k(),
                        navigation: k(),
                        scroll: k(),
                        search: k(),
                        searchInput: k(),
                        skinToneButton: k(),
                        skinToneRadio: k()
                    }, this.initGrid(), !1 == this.props.stickySearch && "sticky" == this.props.searchPosition && (console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."), this.props.searchPosition = "static")
                }
                componentDidMount() {
                    if (this.register(), this.shadowRoot = this.base.parentNode, this.props.autoFocus) {
                        let {
                            searchInput: e
                        } = this.refs;
                        e.current && e.current.focus()
                    }
                }
                componentWillReceiveProps(e) {
                    for (let t in this.nextState || (this.nextState = {}), e) this.nextState[t] = e[t];
                    clearTimeout(this.nextStateTimer), this.nextStateTimer = setTimeout(() => {
                        let e = !1;
                        for (let t in this.nextState) this.props[t] = this.nextState[t], ("custom" === t || "categories" === t) && (e = !0);
                        delete this.nextState;
                        let t = this.getInitialState();
                        if (e) return this.reset(t);
                        this.setState(t)
                    })
                }
                componentWillUnmount() {
                    this.unregister()
                }
                async reset() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    await es(this.props), this.initGrid(), this.unobserve(), this.setState(e, () => {
                        this.observeCategories(), this.observeRows()
                    })
                }
                register() {
                    document.addEventListener("click", this.handleClickOutside), this.observe()
                }
                unregister() {
                    var e;
                    document.removeEventListener("click", this.handleClickOutside), null == (e = this.darkMedia) || e.removeEventListener("change", this.darkMediaCallback), this.unobserve()
                }
                observe() {
                    this.observeCategories(), this.observeRows()
                }
                unobserve() {
                    let {
                        except: e = []
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    for (let t of (Array.isArray(e) || (e = [e]), this.observers)) e.includes(t) || t.disconnect();
                    this.observers = [].concat(e)
                }
                initGrid() {
                    let {
                        categories: e
                    } = ee;
                    this.refs.categories = new Map;
                    let t = ee.categories.map(e => e.id).join(",");
                    this.navKey && this.navKey != t && this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0), this.navKey = t, this.grid = [], this.grid.setsize = 0;
                    let n = (e, t) => {
                        let n = [];
                        n.__categoryId = t.id, n.__index = e.length, this.grid.push(n);
                        let i = this.grid.length - 1,
                            o = i % 10 ? {} : k();
                        return o.index = i, o.posinset = this.grid.setsize + 1, e.push(o), n
                    };
                    for (let t of e) {
                        let e = [],
                            i = n(e, t);
                        for (let o of t.emojis) i.length == this.getPerLine() && (i = n(e, t)), this.grid.setsize += 1, i.push(o);
                        this.refs.categories.set(t.id, {
                            root: k(),
                            rows: e
                        })
                    }
                }
                initTheme(e) {
                    if ("auto" != e) return e;
                    if (!this.darkMedia) {
                        if (this.darkMedia = matchMedia("(prefers-color-scheme: dark)"), this.darkMedia.media.match(/^not/)) return "light";
                        this.darkMedia.addEventListener("change", this.darkMediaCallback)
                    }
                    return this.darkMedia.matches ? "dark" : "light"
                }
                initDynamicPerLine() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    if (!e.dynamicWidth) return;
                    let {
                        element: t,
                        emojiButtonSize: n
                    } = e, i = () => {
                        let {
                            width: e
                        } = t.getBoundingClientRect();
                        return Math.floor(e / n)
                    }, o = new ResizeObserver(() => {
                        this.unobserve({
                            except: o
                        }), this.setState({
                            perLine: i()
                        }, () => {
                            this.initGrid(), this.forceUpdate(() => {
                                this.observeCategories(), this.observeRows()
                            })
                        })
                    });
                    return o.observe(t), this.observers.push(o), i()
                }
                getPerLine() {
                    return this.state.perLine || this.props.perLine
                }
                getEmojiByPos(e) {
                    let [t, n] = e, i = this.state.searchResults || this.grid, o = i[t] && i[t][n];
                    if (o) return eu.get(o)
                }
                observeCategories() {
                    let e = this.refs.navigation.current;
                    if (!e) return;
                    let t = new Map,
                        n = t => {
                            t != e.state.categoryId && e.setState({
                                categoryId: t
                            })
                        },
                        i = new IntersectionObserver(e => {
                            for (let n of e) {
                                let e = n.target.dataset.id;
                                t.set(e, n.intersectionRatio)
                            }
                            for (let [e, i] of [...t])
                                if (i) {
                                    n(e);
                                    break
                                }
                        }, {
                            root: this.refs.scroll.current,
                            threshold: [0, 1]
                        });
                    for (let {
                            root: e
                        }
                        of this.refs.categories.values()) i.observe(e.current);
                    this.observers.push(i)
                }
                observeRows() {
                    let e = {
                            ...this.state.visibleRows
                        },
                        t = new IntersectionObserver(t => {
                            for (let n of t) {
                                let t = parseInt(n.target.dataset.index);
                                n.isIntersecting ? e[t] = !0 : delete e[t]
                            }
                            this.setState({
                                visibleRows: e
                            })
                        }, {
                            root: this.refs.scroll.current,
                            rootMargin: `${15*this.props.emojiButtonSize}px 0px ${10*this.props.emojiButtonSize}px`
                        });
                    for (let {
                            rows: e
                        }
                        of this.refs.categories.values())
                        for (let n of e) n.current && t.observe(n.current);
                    this.observers.push(t)
                }
                preventDefault(e) {
                    e.preventDefault()
                }
                unfocusSearch() {
                    let e = this.refs.searchInput.current;
                    e && e.blur()
                }
                navigate(e) {
                    let {
                        e: t,
                        input: n,
                        left: i,
                        right: o,
                        up: r,
                        down: s
                    } = e, a = this.state.searchResults || this.grid;
                    if (!a.length) return;
                    let [l, c] = this.state.pos, d = (() => {
                        if (0 == l && 0 == c && !t.repeat && (i || r)) return null;
                        if (-1 == l) return !t.repeat && (o || s) && n.selectionStart == n.value.length ? [0, 0] : null;
                        if (i || o) {
                            let e = a[l],
                                t = i ? -1 : 1;
                            if (!e[c += t]) {
                                if (l += t, !(e = a[l])) return l = i ? 0 : a.length - 1, c = i ? 0 : a[l].length - 1, [l, c];
                                c = i ? e.length - 1 : 0
                            }
                            return [l, c]
                        }
                        if (r || s) {
                            let e = a[l += r ? -1 : 1];
                            return e ? e[c] || (c = e.length - 1) : (l = r ? 0 : a.length - 1, c = r ? 0 : a[l].length - 1), [l, c]
                        }
                    })();
                    if (d) t.preventDefault();
                    else {
                        this.state.pos[0] > -1 && this.setState({
                            pos: [-1, -1]
                        });
                        return
                    }
                    this.setState({
                        pos: d,
                        keyboard: !0
                    }, () => {
                        this.scrollTo({
                            row: d[0]
                        })
                    })
                }
                scrollTo(e) {
                    let {
                        categoryId: t,
                        row: n
                    } = e, i = this.state.searchResults || this.grid;
                    if (!i.length) return;
                    let o = this.refs.scroll.current,
                        r = o.getBoundingClientRect(),
                        s = 0;
                    if (n >= 0 && (t = i[n].__categoryId), t && (s = (this.refs[t] || this.refs.categories.get(t).root).current.getBoundingClientRect().top - (r.top - o.scrollTop) + 1), n >= 0)
                        if (n) {
                            let e = s + i[n].__index * this.props.emojiButtonSize,
                                t = e + this.props.emojiButtonSize + .88 * this.props.emojiButtonSize;
                            if (e < o.scrollTop) s = e;
                            else {
                                if (!(t > o.scrollTop + r.height)) return;
                                s = t - r.height
                            }
                        } else s = 0;
                    this.ignoreMouse(), o.scrollTop = s
                }
                ignoreMouse() {
                    this.mouseIsIgnored = !0, clearTimeout(this.ignoreMouseTimer), this.ignoreMouseTimer = setTimeout(() => {
                        delete this.mouseIsIgnored
                    }, 100)
                }
                handleEmojiOver(e) {
                    this.mouseIsIgnored || this.state.showSkins || this.setState({
                        pos: e || [-1, -1],
                        keyboard: !1
                    })
                }
                handleEmojiClick(e) {
                    let {
                        e: t,
                        emoji: n,
                        pos: i
                    } = e;
                    if (this.props.onEmojiSelect && (!n && i && (n = this.getEmojiByPos(i)), n)) {
                        let e = function(e) {
                            let {
                                skinIndex: t = 0
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.skins[t] || (t = 0, e.skins[t]), i = {
                                id: e.id,
                                name: e.name,
                                native: n.native,
                                unified: n.unified,
                                keywords: e.keywords,
                                shortcodes: n.shortcodes || e.shortcodes
                            };
                            return e.skins.length > 1 && (i.skin = t + 1), n.src && (i.src = n.src), e.aliases && e.aliases.length && (i.aliases = e.aliases), e.emoticons && e.emoticons.length && (i.emoticons = e.emoticons), i
                        }(n, {
                            skinIndex: this.state.skin - 1
                        });
                        this.props.maxFrequentRows && X(e, this.props), this.props.onEmojiSelect(e, t)
                    }
                }
                closeSkins() {
                    this.state.showSkins && (this.setState({
                        showSkins: null,
                        tempSkin: null
                    }), this.base.removeEventListener("click", this.handleBaseClick), this.base.removeEventListener("keydown", this.handleBaseKeydown))
                }
                handleSkinMouseOver(e) {
                    this.setState({
                        tempSkin: e
                    })
                }
                handleSkinClick(e) {
                    this.ignoreMouse(), this.closeSkins(), this.setState({
                        skin: e,
                        tempSkin: null
                    }), $("skin", e)
                }
                renderNav() {
                    return D(eQ, {
                        ref: this.refs.navigation,
                        icons: this.props.icons,
                        theme: this.state.theme,
                        dir: this.dir,
                        unfocused: !!this.state.searchResults,
                        position: this.props.navPosition,
                        onClick: this.handleCategoryClick
                    }, this.navKey)
                }
                renderPreview() {
                    let e = this.getEmojiByPos(this.state.pos),
                        t = this.state.searchResults && !this.state.searchResults.length;
                    return D("div", {
                        id: "preview",
                        class: "flex flex-middle",
                        dir: this.dir,
                        "data-position": this.props.previewPosition,
                        children: [D("div", {
                            class: "flex flex-middle flex-grow",
                            children: [D("div", {
                                class: "flex flex-auto flex-middle flex-center",
                                style: {
                                    height: this.props.emojiButtonSize,
                                    fontSize: this.props.emojiButtonSize
                                },
                                children: D(eg, {
                                    emoji: e,
                                    id: t ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || ("top" == this.props.previewPosition ? "point_down" : "point_up"),
                                    set: this.props.set,
                                    size: this.props.emojiButtonSize,
                                    skin: this.state.tempSkin || this.state.skin,
                                    spritesheet: !0,
                                    getSpritesheetURL: this.props.getSpritesheetURL
                                })
                            }), D("div", {
                                class: `margin-${this.dir[0]}`,
                                children: e || t ? D("div", {
                                    class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                                    children: [D("div", {
                                        class: "preview-title ellipsis",
                                        children: e ? e.name : Q.search_no_results_1
                                    }), D("div", {
                                        class: "preview-subtitle ellipsis color-c",
                                        children: e ? e.skins[0].shortcodes : Q.search_no_results_2
                                    })]
                                }) : D("div", {
                                    class: "preview-placeholder color-c",
                                    children: Q.pick
                                })
                            })]
                        }), !e && "preview" == this.props.skinTonePosition && this.renderSkinToneButton()]
                    })
                }
                renderEmojiButton(e, t) {
                    var n;
                    let {
                        pos: i,
                        posinset: o,
                        grid: r
                    } = t, s = this.props.emojiButtonSize, a = this.state.tempSkin || this.state.skin, l = (e.skins[a - 1] || e.skins[0]).native, c = (n = this.state.pos, Array.isArray(n) && Array.isArray(i) && n.length === i.length && n.every((e, t) => e == i[t])), d = i.concat(e.id).join("");
                    return D(e1, {
                        selected: c,
                        skin: a,
                        size: s,
                        children: D("button", {
                            "aria-label": l,
                            "aria-selected": c || void 0,
                            "aria-posinset": o,
                            "aria-setsize": r.setsize,
                            "data-keyboard": this.state.keyboard,
                            title: "none" == this.props.previewPosition ? e.name : void 0,
                            type: "button",
                            class: "flex flex-center flex-middle",
                            tabindex: "-1",
                            onClick: t => this.handleEmojiClick({
                                e: t,
                                emoji: e
                            }),
                            onMouseEnter: () => this.handleEmojiOver(i),
                            onMouseLeave: () => this.handleEmojiOver(),
                            style: {
                                width: this.props.emojiButtonSize,
                                height: this.props.emojiButtonSize,
                                fontSize: this.props.emojiSize,
                                lineHeight: 0
                            },
                            children: [D("div", {
                                "aria-hidden": "true",
                                class: "background",
                                style: {
                                    borderRadius: this.props.emojiButtonRadius,
                                    backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(o - 1) % this.props.emojiButtonColors.length] : void 0
                                }
                            }), D(eg, {
                                emoji: e,
                                set: this.props.set,
                                size: this.props.emojiSize,
                                skin: a,
                                spritesheet: !0,
                                getSpritesheetURL: this.props.getSpritesheetURL
                            })]
                        })
                    }, d)
                }
                renderSearch() {
                    let e = "none" == this.props.previewPosition || "search" == this.props.skinTonePosition;
                    return D("div", {
                        children: [D("div", {
                            class: "spacer"
                        }), D("div", {
                            class: "flex flex-middle",
                            children: [D("div", {
                                class: "search relative flex-grow",
                                children: [D("input", {
                                    type: "search",
                                    ref: this.refs.searchInput,
                                    placeholder: Q.search,
                                    onClick: this.handleSearchClick,
                                    onInput: this.handleSearchInput,
                                    onKeyDown: this.handleSearchKeyDown,
                                    autoComplete: "off"
                                }), D("span", {
                                    class: "icon loupe flex",
                                    children: ef.search.loupe
                                }), this.state.searchResults && D("button", {
                                    title: "Clear",
                                    "aria-label": "Clear",
                                    type: "button",
                                    class: "icon delete flex",
                                    onClick: this.clearSearch,
                                    onMouseDown: this.preventDefault,
                                    children: ef.search.delete
                                })]
                            }), e && this.renderSkinToneButton()]
                        })]
                    })
                }
                renderSearchResults() {
                    let {
                        searchResults: e
                    } = this.state;
                    return e ? D("div", {
                        class: "category",
                        ref: this.refs.search,
                        children: [D("div", {
                            class: `sticky padding-small align-${this.dir[0]}`,
                            children: Q.categories.search
                        }), D("div", {
                            children: e.length ? e.map((t, n) => D("div", {
                                class: "flex",
                                children: t.map((t, i) => this.renderEmojiButton(t, {
                                    pos: [n, i],
                                    posinset: n * this.props.perLine + i + 1,
                                    grid: e
                                }))
                            })) : D("div", {
                                class: `padding-small align-${this.dir[0]}`,
                                children: this.props.onAddCustomEmoji && D("a", {
                                    onClick: this.props.onAddCustomEmoji,
                                    children: Q.add_custom
                                })
                            })
                        })]
                    }) : null
                }
                renderCategories() {
                    let {
                        categories: e
                    } = ee, t = !!this.state.searchResults, n = this.getPerLine();
                    return D("div", {
                        style: {
                            visibility: t ? "hidden" : void 0,
                            display: t ? "none" : void 0,
                            height: "100%"
                        },
                        children: e.map(e => {
                            let {
                                root: t,
                                rows: i
                            } = this.refs.categories.get(e.id);
                            return D("div", {
                                "data-id": e.target ? e.target.id : e.id,
                                class: "category",
                                ref: t,
                                children: [D("div", {
                                    class: `sticky padding-small align-${this.dir[0]}`,
                                    children: e.name || Q.categories[e.id]
                                }), D("div", {
                                    class: "relative",
                                    style: {
                                        height: i.length * this.props.emojiButtonSize
                                    },
                                    children: i.map((t, i) => {
                                        let o = t.index - t.index % 10,
                                            r = this.state.visibleRows[o],
                                            s = "current" in t ? t : void 0;
                                        if (!r && !s) return null;
                                        let a = i * n,
                                            l = e.emojis.slice(a, a + n);
                                        return l.length < n && l.push(...Array(n - l.length)), D("div", {
                                            "data-index": t.index,
                                            ref: s,
                                            class: "flex row",
                                            style: {
                                                top: i * this.props.emojiButtonSize
                                            },
                                            children: r && l.map((e, n) => {
                                                if (!e) return D("div", {
                                                    style: {
                                                        width: this.props.emojiButtonSize,
                                                        height: this.props.emojiButtonSize
                                                    }
                                                });
                                                let i = eu.get(e);
                                                return this.renderEmojiButton(i, {
                                                    pos: [t.index, n],
                                                    posinset: t.posinset + n,
                                                    grid: this.grid
                                                })
                                            })
                                        }, t.index)
                                    })
                                })]
                            })
                        })
                    })
                }
                renderSkinToneButton() {
                    return "none" == this.props.skinTonePosition ? null : D("div", {
                        class: "flex flex-auto flex-center flex-middle",
                        style: {
                            position: "relative",
                            width: this.props.emojiButtonSize,
                            height: this.props.emojiButtonSize
                        },
                        children: D("button", {
                            type: "button",
                            ref: this.refs.skinToneButton,
                            class: "skin-tone-button flex flex-auto flex-center flex-middle",
                            "aria-selected": this.state.showSkins ? "" : void 0,
                            "aria-label": Q.skins.choose,
                            title: Q.skins.choose,
                            onClick: this.openSkins,
                            style: {
                                width: this.props.emojiSize,
                                height: this.props.emojiSize
                            },
                            children: D("span", {
                                class: `skin-tone skin-tone-${this.state.skin}`
                            })
                        })
                    })
                }
                renderLiveRegion() {
                    let e = this.getEmojiByPos(this.state.pos);
                    return D("div", {
                        "aria-live": "polite",
                        class: "sr-only",
                        children: e ? e.name : ""
                    })
                }
                renderSkins() {
                    let e = this.refs.skinToneButton.current.getBoundingClientRect(),
                        t = this.base.getBoundingClientRect(),
                        n = {};
                    return "ltr" == this.dir ? n.right = t.right - e.right - 3 : n.left = e.left - t.left - 3, "bottom" == this.props.previewPosition && "preview" == this.props.skinTonePosition ? n.bottom = t.bottom - e.top + 6 : (n.top = e.bottom - t.top + 3, n.bottom = "auto"), D("div", {
                        ref: this.refs.menu,
                        role: "radiogroup",
                        dir: this.dir,
                        "aria-label": Q.skins.choose,
                        class: "menu hidden",
                        "data-position": n.top ? "top" : "bottom",
                        style: n,
                        children: [...Array(6).keys()].map(e => {
                            let t = e + 1,
                                n = this.state.skin == t;
                            return D("div", {
                                children: [D("input", {
                                    type: "radio",
                                    name: "skin-tone",
                                    value: t,
                                    "aria-label": Q.skins[t],
                                    ref: n ? this.refs.skinToneRadio : null,
                                    defaultChecked: n,
                                    onChange: () => this.handleSkinMouseOver(t),
                                    onKeyDown: e => {
                                        ("Enter" == e.code || "Space" == e.code || "Tab" == e.code) && (e.preventDefault(), this.handleSkinClick(t))
                                    }
                                }), D("button", {
                                    "aria-hidden": "true",
                                    tabindex: "-1",
                                    onClick: () => this.handleSkinClick(t),
                                    onMouseEnter: () => this.handleSkinMouseOver(t),
                                    onMouseLeave: () => this.handleSkinMouseOver(),
                                    class: "option flex flex-grow flex-middle",
                                    children: [D("span", {
                                        class: `skin-tone skin-tone-${t}`
                                    }), D("span", {
                                        class: "margin-small-lr",
                                        children: Q.skins[t]
                                    })]
                                })]
                            })
                        })
                    })
                }
                render() {
                    let e = this.props.perLine * this.props.emojiButtonSize;
                    return D("section", {
                        id: "root",
                        class: "flex flex-column",
                        dir: this.dir,
                        style: {
                            width: this.props.dynamicWidth ? "100%" : `calc(${e}px + (var(--padding) + var(--sidebar-width)))`
                        },
                        "data-emoji-set": this.props.set,
                        "data-theme": this.state.theme,
                        "data-menu": this.state.showSkins ? "" : void 0,
                        children: ["top" == this.props.previewPosition && this.renderPreview(), "top" == this.props.navPosition && this.renderNav(), "sticky" == this.props.searchPosition && D("div", {
                            class: "padding-lr",
                            children: this.renderSearch()
                        }), D("div", {
                            ref: this.refs.scroll,
                            class: "scroll flex-grow padding-lr",
                            children: D("div", {
                                style: {
                                    width: this.props.dynamicWidth ? "100%" : e,
                                    height: "100%"
                                },
                                children: ["static" == this.props.searchPosition && this.renderSearch(), this.renderSearchResults(), this.renderCategories()]
                            })
                        }), "bottom" == this.props.navPosition && this.renderNav(), "bottom" == this.props.previewPosition && this.renderPreview(), this.state.showSkins && this.renderSkins(), this.renderLiveRegion()]
                    })
                }
                constructor(e) {
                    super(), s(this, "darkMediaCallback", () => {
                        "auto" == this.props.theme && this.setState({
                            theme: this.darkMedia.matches ? "dark" : "light"
                        })
                    }), s(this, "handleClickOutside", e => {
                        let {
                            element: t
                        } = this.props;
                        e.target != t && (this.state.showSkins && this.closeSkins(), this.props.onClickOutside && this.props.onClickOutside(e))
                    }), s(this, "handleBaseClick", e => {
                        this.state.showSkins && (e.target.closest(".menu") || (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins()))
                    }), s(this, "handleBaseKeydown", e => {
                        this.state.showSkins && "Escape" == e.key && (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins())
                    }), s(this, "handleSearchClick", () => {
                        this.getEmojiByPos(this.state.pos) && this.setState({
                            pos: [-1, -1]
                        })
                    }), s(this, "handleSearchInput", async () => {
                        let e = this.refs.searchInput.current;
                        if (!e) return;
                        let {
                            value: t
                        } = e, n = await eu.search(t), i = () => {
                            this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0)
                        };
                        if (!n) return this.setState({
                            searchResults: n,
                            pos: [-1, -1]
                        }, i);
                        let o = e.selectionStart == e.value.length ? [0, 0] : [-1, -1],
                            r = [];
                        r.setsize = n.length;
                        let s = null;
                        for (let e of n) r.length && s.length != this.getPerLine() || ((s = []).__categoryId = "search", s.__index = r.length, r.push(s)), s.push(e);
                        this.ignoreMouse(), this.setState({
                            searchResults: r,
                            pos: o
                        }, i)
                    }), s(this, "handleSearchKeyDown", e => {
                        let t = e.currentTarget;
                        switch (e.stopImmediatePropagation(), e.key) {
                            case "ArrowLeft":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    left: !0
                                });
                                break;
                            case "ArrowRight":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    right: !0
                                });
                                break;
                            case "ArrowUp":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    up: !0
                                });
                                break;
                            case "ArrowDown":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    down: !0
                                });
                                break;
                            case "Enter":
                                e.preventDefault(), this.handleEmojiClick({
                                    e: e,
                                    pos: this.state.pos
                                });
                                break;
                            case "Escape":
                                e.preventDefault(), this.state.searchResults ? this.clearSearch() : this.unfocusSearch()
                        }
                    }), s(this, "clearSearch", () => {
                        let e = this.refs.searchInput.current;
                        e && (e.value = "", e.focus(), this.handleSearchInput())
                    }), s(this, "handleCategoryClick", e => {
                        let {
                            category: t,
                            i: n
                        } = e;
                        this.scrollTo(0 == n ? {
                            row: -1
                        } : {
                            categoryId: t.id
                        })
                    }), s(this, "openSkins", e => {
                        let {
                            currentTarget: t
                        } = e, n = t.getBoundingClientRect();
                        this.setState({
                            showSkins: n
                        }, async () => {
                            await ep(2);
                            let e = this.refs.menu.current;
                            e && (e.classList.remove("hidden"), this.refs.skinToneRadio.current.focus(), this.base.addEventListener("click", this.handleBaseClick, !0), this.base.addEventListener("keydown", this.handleBaseKeydown, !0))
                        })
                    }), this.observers = [], this.state = {
                        pos: [-1, -1],
                        perLine: this.initDynamicPerLine(e),
                        visibleRows: {
                            0: !0
                        },
                        ...this.getInitialState(e)
                    }
                }
            }
            class e0 extends ev {
                async connectedCallback() {
                    let e = el(this.props, Z, this);
                    e.element = this, e.ref = e => {
                        this.component = e
                    }, await es(e), this.disconnected || I(D(e2, {
                        ...e
                    }), this.shadowRoot)
                }
                _cleanupDom(e) {
                    if (!e) return;
                    e.l && (e.l = null), e.__e && (e.__e = null), e.__c && (e.__c = null);
                    let t = e.childNodes || e.children;
                    if (t)
                        for (let e = t.length - 1; e >= 0; e--) this._cleanupDom(t[e])
                }
                disconnectedCallback() {
                    this.component && (this.component.handleClickOutside && document.removeEventListener("click", this.component.handleClickOutside), this.component.unregister()), this.shadowRoot && (this._cleanupDom(this.shadowRoot), I(null, this.shadowRoot), this.shadowRoot.innerHTML = "", this.shadowRoot.__k = null, this.shadowRoot.__n = null, this.shadowRoot._children = null, I(null, document.createElement("div"))), super.disconnectedCallback(), this.component && (this.component.handleClickOutside = null, this.component.handleSearchInput = null, this.component.handleSearchKeyDown = null, this.component.handleBaseClick = null, this.component.darkMediaCallback = null, this.component.base = null, this.component.props = null, this.component.state = null, this.component.refs = null, this.component.__v = null, this.component = null), this.props = null
                }
                constructor(e) {
                    super(e, {
                        styles: r(e3)
                    })
                }
            }
            s(e0, "Props", Z), "undefined" == typeof customElements || customElements.get("em-emoji-picker") || customElements.define("em-emoji-picker", e0);
            var e3 = {};

            function e4(e) {
                let t = (0, i.useRef)(null),
                    n = (0, i.useRef)(null);
                return n.current && n.current.update(e), (0, i.useEffect)(() => (n.current = new e0({
                    ...e,
                    ref: t
                }), () => {
                    n.current = null
                }), []), o().createElement("div", {
                    ref: t
                })
            }
            e3 = ':host {\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;\n  --font-size: 15px;\n  --preview-placeholder-size: 21px;\n  --preview-title-size: 1.1em;\n  --preview-subtitle-size: .9em;\n  --shadow-color: 0deg 0% 0%;\n  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);\n  display: flex;\n}\n\n[data-theme="light"] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme="dark"] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, 0, .2, 1);\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: normal;\n}\n\n*, :before, :after {\n  box-sizing: border-box;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: none;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sr-only {\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  top: auto;\n  left: -10000px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n[dir="rtl"] .scroll {\n  padding-left: 0;\n  padding-right: var(--padding);\n}\n\n.scroll {\n  padding-right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  z-index: 1;\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  font-weight: 500;\n  position: sticky;\n  top: -1px;\n}\n\n[dir="rtl"] .search input[type="search"] {\n  padding: 10px 2.2em 10px 2em;\n}\n\n[dir="rtl"] .search .loupe {\n  left: auto;\n  right: .7em;\n}\n\n[dir="rtl"] .search .delete {\n  left: .7em;\n  right: auto;\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size)  - 1px);\n}\n\n.search input[type="search"] {\n  width: 100%;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n  border: 0;\n  border-radius: 10px;\n  outline: 0;\n  padding: 10px 2em 10px 2.2em;\n  display: block;\n}\n\n.search input[type="search"]::-ms-input-placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type="search"]::placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n}\n\n.search input[type="search"]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);\n}\n\n.search .icon {\n  z-index: 1;\n  color: rgba(var(--em-rgb-color), .7);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  pointer-events: none;\n  left: .7em;\n}\n\n.search .delete {\n  right: .7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n}\n\n#nav {\n  z-index: 2;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav[dir="rtl"] .bar {\n  left: auto;\n  right: 0;\n}\n\n#nav .bar {\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  transition: transform var(--duration) var(--easing);\n  border-radius: 3px 3px 0 0;\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  padding: calc(var(--padding)  + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#preview .preview-placeholder {\n  font-size: var(--preview-placeholder-size);\n}\n\n#preview .preview-title {\n  font-size: var(--preview-title-size);\n}\n\n#preview .preview-subtitle {\n  font-size: var(--preview-subtitle-size);\n}\n\n#nav:before, #preview:before {\n  content: "";\n  height: 2px;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#nav[data-position="top"]:before, #preview[data-position="top"]:before {\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n  top: 100%;\n}\n\n#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n  bottom: 100%;\n}\n\n.category:last-child {\n  min-height: calc(100% + 1px);\n}\n\n.category button {\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;\n  position: relative;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0s;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.skin-tone-button {\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 100%;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  background-color: var(--em-color-border);\n  border-top-color: rgba(0, 0, 0, .05);\n  border-bottom-color: rgba(0, 0, 0, 0);\n  border-left-width: 0;\n  border-right-width: 0;\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(.9);\n}\n\n.menu {\n  z-index: 2;\n  white-space: nowrap;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n  border-radius: 10px;\n  padding: 4px;\n  position: absolute;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position="bottom"] {\n  transform-origin: 100% 100%;\n}\n\n.menu[data-position="bottom"].hidden {\n  transform: scale(.9)rotate(-3deg)translateY(5%);\n}\n\n.menu[data-position="top"] {\n  transform-origin: 100% 0;\n}\n\n.menu[data-position="top"].hidden {\n  transform: scale(.9)rotate(3deg)translateY(-5%);\n}\n\n.menu input[type="radio"] {\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.menu input[type="radio"]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  border-radius: 6px;\n  padding: 4px 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: "";\n  mix-blend-mode: overlay;\n  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));\n  border: 1px solid rgba(0, 0, 0, .8);\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-index] {\n  justify-content: space-between;\n}\n\n[data-emoji-set="twitter"] .skin-tone:after {\n  box-shadow: none;\n  border-color: rgba(0, 0, 0, .5);\n}\n\n[data-emoji-set="twitter"] .skin-tone-1 {\n  background-color: #fade72;\n}\n\n[data-emoji-set="twitter"] .skin-tone-2 {\n  background-color: #f3dfd0;\n}\n\n[data-emoji-set="twitter"] .skin-tone-3 {\n  background-color: #eed3a8;\n}\n\n[data-emoji-set="twitter"] .skin-tone-4 {\n  background-color: #cfad8d;\n}\n\n[data-emoji-set="twitter"] .skin-tone-5 {\n  background-color: #a8805d;\n}\n\n[data-emoji-set="twitter"] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set="google"] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);\n}\n\n[data-emoji-set="google"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set="google"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set="google"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set="google"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set="google"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set="google"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n[data-emoji-set="facebook"] .skin-tone:after {\n  border-color: rgba(0, 0, 0, .4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set="facebook"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set="facebook"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set="facebook"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set="facebook"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set="facebook"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set="facebook"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n'
        },
        58129: function(e, t, n) {
            var i = 0 / 0,
                o = /^\s+|\s+$/g,
                r = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                l = parseInt,
                c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                d = "object" == typeof self && self && self.Object === Object && self,
                u = c || d || Function("return this")(),
                h = Object.prototype.toString,
                p = Math.max,
                f = Math.min,
                g = function() {
                    return u.Date.now()
                };

            function _(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function m(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == h.call(t)) return i;
                if (_(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = _(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(o, "");
                var c = s.test(e);
                return c || a.test(e) ? l(e.slice(2), c ? 2 : 8) : r.test(e) ? i : +e
            }
            e.exports = function(e, t, n) {
                var i, o, r, s, a, l, c = 0,
                    d = !1,
                    u = !1,
                    h = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function v(t) {
                    var n = i,
                        r = o;
                    return i = o = void 0, c = t, s = e.apply(r, n)
                }

                function b(e) {
                    var n = e - l,
                        i = e - c;
                    return void 0 === l || n >= t || n < 0 || u && i >= r
                }

                function k() {
                    var e, n, i, o = g();
                    if (b(o)) return w(o);
                    a = setTimeout(k, (e = o - l, n = o - c, i = t - e, u ? f(i, r - n) : i))
                }

                function w(e) {
                    return (a = void 0, h && i) ? v(e) : (i = o = void 0, s)
                }

                function y() {
                    var e, n = g(),
                        r = b(n);
                    if (i = arguments, o = this, l = n, r) {
                        if (void 0 === a) return c = e = l, a = setTimeout(k, t), d ? v(e) : s;
                        if (u) return a = setTimeout(k, t), v(l)
                    }
                    return void 0 === a && (a = setTimeout(k, t)), s
                }
                return t = m(t) || 0, _(n) && (d = !!n.leading, r = (u = "maxWait" in n) ? p(m(n.maxWait) || 0, t) : r, h = "trailing" in n ? !!n.trailing : h), y.cancel = function() {
                    void 0 !== a && clearTimeout(a), c = 0, i = l = o = a = void 0
                }, y.flush = function() {
                    return void 0 === a ? s : w(g())
                }, y
            }
        },
        2980: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: () => a
            });
            var i = n(92969),
                o = n(87436),
                r = n(56645),
                s = n(53011);

            function a(e) {
                return (0, i.N)(function(t, n) {
                    var i = !1,
                        a = null,
                        l = null,
                        c = function() {
                            if (null == l || l.unsubscribe(), l = null, i) {
                                i = !1;
                                var e = a;
                                a = null, n.next(e)
                            }
                        };
                    t.subscribe((0, r._)(n, function(t) {
                        null == l || l.unsubscribe(), i = !0, a = t, l = (0, r._)(n, c, o.l), (0, s.Tg)(e(t)).subscribe(l)
                    }, function() {
                        c(), n.complete()
                    }, void 0, function() {
                        a = l = null
                    }))
                })
            }
        },
        35060: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: () => function e(t, n) {
                    return n ? function(s) {
                        return (0, i.x)(n.pipe((0, o.s)(1), (0, r.w)()), s.pipe(e(t)))
                    } : (0, a.Z)(function(e, n) {
                        return (0, l.Tg)(t(e, n)).pipe((0, o.s)(1), (0, s.u)(e))
                    })
                }
            });
            var i = n(41296),
                o = n(37284),
                r = n(64908),
                s = n(97244),
                a = n(52545),
                l = n(53011)
        }
    }
]);
//# sourceMappingURL=2779.fd683e2f.js.map