/*! For license information please see 6930.9ef3bf7a.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f69f150e-4251-477d-9f03-3af495ad145e", e._sentryDebugIdIdentifier = "sentry-dbid-f69f150e-4251-477d-9f03-3af495ad145e")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6930"], {
        43241: function(e, t, n) {
            let r, i;
            n.r(t), n.d(t, {
                Store: () => az,
                ReactScanInternals: () => aT,
                getOptions: () => aF,
                setOptions: () => aM,
                scan: () => aI,
                useScan: () => aL,
                getReport: () => aA,
                ignoreScan: () => aW,
                getIsProduction: () => aR,
                onRender: () => aO,
                ignoredProps: () => aU,
                start: () => aD
            });
            let o = "bippy-0.3.34",
                a = Object.defineProperty,
                l = Object.prototype.hasOwnProperty,
                s = () => {},
                c = e => {
                    try {
                        Function.prototype.toString.call(e).indexOf("^_^") > -1 && setTimeout(() => {
                            throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")
                        })
                    } catch {}
                },
                d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g();
                    return "getFiberRoots" in e
                },
                u = !1,
                p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g();
                    return !!u || ("function" == typeof e.inject && (r = e.inject.toString()), !!(null == r ? void 0 : r.includes("(injected)")))
                },
                h = new Set,
                m = new Set,
                f = e => {
                    e && h.add(e);
                    try {
                        let t = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (!t) return;
                        if (!t._instrumentationSource) {
                            let e = d();
                            if (t.checkDCE = c, t.supportsFiber = !0, t.supportsFlight = !0, t.hasUnsupportedRendererAttached = !1, t._instrumentationSource = o, t._instrumentationIsActive = !1, e || (t.on = s), t.renderers.size) {
                                t._instrumentationIsActive = !0, h.forEach(e => e());
                                return
                            }
                            let n = t.inject;
                            p(t) && !e && (u = !0, t.inject({
                                scheduleRefresh() {}
                            }) && (t._instrumentationIsActive = !0)), t.inject = e => {
                                let r = n(e);
                                return m.add(e), t._instrumentationIsActive = !0, h.forEach(e => e()), r
                            }
                        }(t.renderers.size || t._instrumentationIsActive || p()) && (null == e || e())
                    } catch {}
                },
                g = e => l.call(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__") ? (f(e), globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) : (e => {
                    let t = new Map,
                        n = 0,
                        r = {
                            _instrumentationIsActive: !1,
                            _instrumentationSource: o,
                            checkDCE: c,
                            hasUnsupportedRendererAttached: !1,
                            inject(e) {
                                let i = ++n;
                                return t.set(i, e), m.add(e), r._instrumentationIsActive || (r._instrumentationIsActive = !0, h.forEach(e => e())), i
                            },
                            on: s,
                            onCommitFiberRoot: s,
                            onCommitFiberUnmount: s,
                            onPostCommitFiberRoot: s,
                            renderers: t,
                            supportsFiber: !0,
                            supportsFlight: !0
                        };
                    try {
                        a(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
                            configurable: !0,
                            enumerable: !0,
                            get: () => r,
                            set(t) {
                                if (t && "object" == typeof t) {
                                    let n = r.renderers;
                                    r = t, n.size > 0 && (n.forEach((e, n) => {
                                        m.add(e), t.renderers.set(n, e)
                                    }), f(e))
                                }
                            }
                        });
                        let t = window.hasOwnProperty,
                            n = !1;
                        a(window, "hasOwnProperty", {
                            configurable: !0,
                            value: function() {
                                for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                try {
                                    if (!n && "__REACT_DEVTOOLS_GLOBAL_HOOK__" === r[0]) return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = void 0, n = !0, -0
                                } catch {}
                                return t.apply(this, r)
                            },
                            writable: !0
                        })
                    } catch {
                        f(e)
                    }
                    return r
                })(e),
                v = e => {
                    switch (e.tag) {
                        case 5:
                        case 26:
                        case 27:
                            return !0;
                        default:
                            return "string" == typeof e.type
                    }
                },
                w = e => {
                    switch (e.tag) {
                        case 1:
                        case 11:
                        case 0:
                        case 14:
                        case 15:
                            return !0;
                        default:
                            return !1
                    }
                },
                b = e => {
                    var t;
                    let n = e.memoizedProps,
                        r = (null == (t = e.alternate) ? void 0 : t.memoizedProps) || {},
                        i = e.flags ?? e.effectTag ?? 0;
                    switch (e.tag) {
                        case 1:
                        case 9:
                        case 11:
                        case 0:
                        case 14:
                        case 15:
                            return (1 & i) == 1;
                        default:
                            if (!e.alternate) return !0;
                            return r !== n || e.alternate.memoizedState !== e.memoizedState || e.alternate.ref !== e.ref
                    }
                },
                x = e => (13374 & e.flags) != 0 || (13374 & e.subtreeFlags) != 0,
                y = e => {
                    switch (e.tag) {
                        case 18:
                        case 7:
                        case 6:
                        case 23:
                        case 22:
                            return !0;
                        case 3:
                            return !1;
                        default: {
                            let t = "object" == typeof e.type && null !== e.type ? e.type.$$typeof : e.type;
                            switch ("symbol" == typeof t ? t.toString() : t) {
                                case 60111:
                                case "Symbol(react.concurrent_mode)":
                                case "Symbol(react.async_mode)":
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                    }
                };

            function k(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e && t(e) instanceof Promise ? N(e, t, n) : _(e, t, n)
            }
            let _ = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e) return null;
                    if (!0 === t(e)) return e;
                    let r = n ? e.return : e.child;
                    for (; r;) {
                        let e = _(r, t, n);
                        if (e) return e;
                        r = n ? null : r.sibling
                    }
                    return null
                },
                N = async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e) return null;
                    if (await t(e) === !0) return e;
                    let r = n ? e.return : e.child;
                    for (; r;) {
                        let e = await N(r, t, n);
                        if (e) return e;
                        r = n ? null : r.sibling
                    }
                    return null
                }, S = e => {
                    let t = (null == e ? void 0 : e.actualDuration) ?? 0,
                        n = t,
                        r = (null == e ? void 0 : e.child) ?? null;
                    for (; t > 0 && null != r;) n -= r.actualDuration ?? 0, r = r.sibling;
                    return {
                        selfTime: n,
                        totalTime: t
                    }
                }, C = e => {
                    var t;
                    return !!(null == (t = e.updateQueue) ? void 0 : t.memoCache)
                }, z = e => "function" == typeof e ? e : "object" == typeof e && e ? z(e.type || e.render) : null, T = e => {
                    if ("string" == typeof e) return e;
                    if ("function" != typeof e && !("object" == typeof e && e)) return null;
                    let t = e.displayName || e.name || null;
                    if (t) return t;
                    let n = z(e);
                    return n && (n.displayName || n.name) || null
                }, E = e => {
                    try {
                        if ("string" == typeof e.version && e.bundleType > 0) return "development"
                    } catch {}
                    return "production"
                }, A = 0, M = new WeakMap, F = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A++;
                    M.set(e, t)
                }, $ = e => {
                    let t = M.get(e);
                    return !t && e.alternate && (t = M.get(e.alternate)), t || F(e, t = A++), t
                }, R = (e, t, n) => {
                    let r = t;
                    for (; null != r;) {
                        if (M.has(r) || $(r), !y(r) && b(r) && e(r, "mount"), 13 === r.tag)
                            if (null !== r.memoizedState) {
                                let t = r.child,
                                    n = t ? t.sibling : null;
                                if (n) {
                                    let t = n.child;
                                    null !== t && R(e, t, !1)
                                }
                            } else {
                                let t = null;
                                null !== r.child && (t = r.child.child), null !== t && R(e, t, !1)
                            }
                        else null != r.child && R(e, r.child, !0);
                        r = n ? r.sibling : null
                    }
                }, D = (e, t, n, r) => {
                    var i, o, a;
                    if (M.has(t) || $(t), !n) return;
                    M.has(n) || $(n);
                    let l = 13 === t.tag,
                        s = !y(t);
                    s && b(t) && e(t, "update");
                    let c = l && null !== n.memoizedState,
                        d = l && null !== t.memoizedState;
                    if (c && d) {
                        let r = (null == (i = t.child) ? void 0 : i.sibling) ?? null,
                            a = (null == (o = n.child) ? void 0 : o.sibling) ?? null;
                        null !== r && null !== a && D(e, r, a, t)
                    } else if (c && !d) {
                        let n = t.child;
                        null !== n && R(e, n, !0)
                    } else if (!c && d) {
                        j(e, n);
                        let r = (null == (a = t.child) ? void 0 : a.sibling) ?? null;
                        null !== r && R(e, r, !0)
                    } else if (t.child !== n.child) {
                        let n = t.child;
                        for (; n;) {
                            if (n.alternate) {
                                let i = n.alternate;
                                D(e, n, i, s ? t : r)
                            } else R(e, n, !1);
                            n = n.sibling
                        }
                    }
                }, P = (e, t) => {
                    3 !== t.tag && y(t) || e(t, "unmount")
                }, j = (e, t) => {
                    let n = 13 === t.tag && null !== t.memoizedState,
                        r = t.child;
                    if (n) {
                        let e = t.child,
                            n = (null == e ? void 0 : e.sibling) ?? null;
                        r = (null == n ? void 0 : n.child) ?? null
                    }
                    for (; null !== r;) null !== r.return && (P(e, r), j(e, r)), r = r.sibling
                }, I = 0, L = new WeakMap;
            Error();
            try {
                var O, U;
                "undefined" != typeof window && ((null == (O = window.document) ? void 0 : O.createElement) || (null == (U = window.navigator) ? void 0 : U.product) === "ReactNative") && g()
            } catch {}
            var W, H, Y, X, B, V, q, J, G, K, Z, Q, ee, et, en, er, ei, eo = {},
                ea = [],
                el = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                es = Array.isArray;

            function ec(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function ed(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function eu(e, t, n) {
                var r, i, o, a = {};
                for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
                if (arguments.length > 2 && (a.children = arguments.length > 3 ? V.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (o in e.defaultProps) null == a[o] && (a[o] = e.defaultProps[o]);
                return ep(e, a, r, i, null)
            }

            function ep(e, t, n, r, i) {
                var o = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __c: null,
                    constructor: void 0,
                    __v: null == i ? ++J : i,
                    __i: -1,
                    __u: 0
                };
                return null == i && null != q.vnode && q.vnode(o), o
            }

            function eh(e) {
                return e.children
            }

            function em(e, t) {
                this.props = e, this.context = t
            }

            function ef(e, t) {
                if (null == t) return e.__ ? ef(e.__, e.__i + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? ef(e) : null
            }

            function eg(e) {
                (!e.__d && (e.__d = !0) && G.push(e) && !ev.__r++ || K != q.debounceRendering) && ((K = q.debounceRendering) || Z)(ev)
            }

            function ev() {
                for (var e, t, n, r, i, o, a = 1; G.length;) G.length > a && G.sort(Q), e = G.shift(), a = G.length, e.__d && (t = void 0, r = (n = e.__v).__e, i = [], o = [], e.__P && ((t = ec({}, n)).__v = n.__v + 1, q.vnode && q.vnode(t), e_(e.__P, t, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [r] : null, i, null == r ? ef(n) : r, !!(32 & n.__u), o), t.__v = n.__v, t.__.__k[t.__i] = t, eN(i, t, o), t.__e != r && function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            } return e(t)
                    }
                }(t)));
                ev.__r = 0
            }

            function ew(e, t, n, r, i, o, a, l, s, c, d) {
                var u, p, h, m, f, g, v = r && r.__k || ea,
                    w = t.length;
                for (s = function(e, t, n, r, i) {
                        var o, a, l, s, c, d = n.length,
                            u = d,
                            p = 0;
                        for (e.__k = Array(i), o = 0; o < i; o++) null != (a = t[o]) && "boolean" != typeof a && "function" != typeof a ? (s = o + p, (a = e.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? ep(null, a, null, null, null) : es(a) ? ep(eh, {
                            children: a
                        }, null, null, null) : null == a.constructor && a.__b > 0 ? ep(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, l = null, -1 != (c = a.__i = function(e, t, n, r) {
                            var i, o, a = e.key,
                                l = e.type,
                                s = t[n];
                            if (null === s && null == e.key || s && a == s.key && l == s.type && 0 == (2 & s.__u)) return n;
                            if (r > +(null != s && 0 == (2 & s.__u)))
                                for (i = n - 1, o = n + 1; i >= 0 || o < t.length;) {
                                    if (i >= 0) {
                                        if ((s = t[i]) && 0 == (2 & s.__u) && a == s.key && l == s.type) return i;
                                        i--
                                    }
                                    if (o < t.length) {
                                        if ((s = t[o]) && 0 == (2 & s.__u) && a == s.key && l == s.type) return o;
                                        o++
                                    }
                                }
                            return -1
                        }(a, n, s, u)) && (u--, (l = n[c]) && (l.__u |= 2)), null == l || null == l.__v ? (-1 == c && (i > d ? p-- : i < d && p++), "function" != typeof a.type && (a.__u |= 4)) : c != s && (c == s - 1 ? p-- : c == s + 1 ? p++ : (c > s ? p-- : p++, a.__u |= 4))) : e.__k[o] = null;
                        if (u)
                            for (o = 0; o < d; o++) null != (l = n[o]) && 0 == (2 & l.__u) && (l.__e == r && (r = ef(l)), function e(t, n, r) {
                                var i, o;
                                if (q.unmount && q.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || eS(i, null, n)), null != (i = t.__c)) {
                                    if (i.componentWillUnmount) try {
                                        i.componentWillUnmount()
                                    } catch (e) {
                                        q.__e(e, n)
                                    }
                                    i.base = i.__P = null
                                }
                                if (i = t.__k)
                                    for (o = 0; o < i.length; o++) i[o] && e(i[o], n, r || "function" != typeof t.type);
                                r || ed(t.__e), t.__c = t.__ = t.__e = void 0
                            }(l, l));
                        return r
                    }(n, t, v, s, w), u = 0; u < w; u++) null != (h = n.__k[u]) && (p = -1 == h.__i ? eo : v[h.__i] || eo, h.__i = u, g = e_(e, h, p, i, o, a, l, s, c, d), m = h.__e, h.ref && p.ref != h.ref && (p.ref && eS(p.ref, null, h), d.push(h.ref, h.__c || m, h)), null == f && null != m && (f = m), 4 & h.__u || p.__k === h.__k ? s = function e(t, n, r) {
                    var i, o;
                    if ("function" == typeof t.type) {
                        for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, n = e(i[o], n, r));
                        return n
                    }
                    t.__e != n && (n && t.type && !r.contains(n) && (n = ef(t)), r.insertBefore(t.__e, n || null), n = t.__e);
                    do n = n && n.nextSibling; while (null != n && 8 == n.nodeType);
                    return n
                }(h, s, e) : "function" == typeof h.type && void 0 !== g ? s = g : m && (s = m.nextSibling), h.__u &= -7);
                return n.__e = f, s
            }

            function eb(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (es(e) ? e.some(function(e) {
                    eb(e, t)
                }) : t.push(e)), t
            }

            function ex(e, t, n) {
                "-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || el.test(t) ? n : n + "px"
            }

            function ey(e, t, n, r, i) {
                var o;
                e: if ("style" == t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof r && (e.style.cssText = r = ""), r)
                            for (t in r) n && t in n || ex(e.style, t, "");
                        if (n)
                            for (t in n) r && n[t] == r[t] || ex(e.style, t, n[t])
                    }
                else if ("o" == t[0] && "n" == t[1]) o = t != (t = t.replace(ee, "$1")), t = t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = et, e.addEventListener(t, o ? er : en, o)) : e.removeEventListener(t, o ? er : en, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
                }
            }

            function ek(e) {
                return function(t) {
                    if (this.l) {
                        var n = this.l[t.type + e];
                        if (null == t.t) t.t = et++;
                        else if (t.t < n.u) return;
                        return n(q.event ? q.event(t) : t)
                    }
                }
            }

            function e_(e, t, n, r, i, o, a, l, s, c) {
                var d, u, p, h, m, f, g, v, w, b, x, y, k, _, N, S, C, z = t.type;
                if (null != t.constructor) return null;
                128 & n.__u && (s = !!(32 & n.__u), o = [l = t.__e = n.__e]), (d = q.__b) && d(t);
                e: if ("function" == typeof z) try {
                    if (v = t.props, w = "prototype" in z && z.prototype.render, b = (d = z.contextType) && r[d.__c], x = d ? b ? b.props.value : d.__ : r, n.__c ? g = (u = t.__c = n.__c).__ = u.__E : (w ? t.__c = u = new z(v, x) : (t.__c = u = new em(v, x), u.constructor = z, u.render = eC), b && b.sub(u), u.props = v, u.state || (u.state = {}), u.context = x, u.__n = r, p = u.__d = !0, u.__h = [], u._sb = []), w && null == u.__s && (u.__s = u.state), w && null != z.getDerivedStateFromProps && (u.__s == u.state && (u.__s = ec({}, u.__s)), ec(u.__s, z.getDerivedStateFromProps(v, u.__s))), h = u.props, m = u.state, u.__v = t, p) w && null == z.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), w && null != u.componentDidMount && u.__h.push(u.componentDidMount);
                    else {
                        if (w && null == z.getDerivedStateFromProps && v !== h && null != u.componentWillReceiveProps && u.componentWillReceiveProps(v, x), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(v, u.__s, x) || t.__v == n.__v) {
                            for (t.__v != n.__v && (u.props = v, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
                                    e && (e.__ = t)
                                }), y = 0; y < u._sb.length; y++) u.__h.push(u._sb[y]);
                            u._sb = [], u.__h.length && a.push(u);
                            break e
                        }
                        null != u.componentWillUpdate && u.componentWillUpdate(v, u.__s, x), w && null != u.componentDidUpdate && u.__h.push(function() {
                            u.componentDidUpdate(h, m, f)
                        })
                    }
                    if (u.context = x, u.props = v, u.__P = e, u.__e = !1, k = q.__r, _ = 0, w) {
                        for (u.state = u.__s, u.__d = !1, k && k(t), d = u.render(u.props, u.state, u.context), N = 0; N < u._sb.length; N++) u.__h.push(u._sb[N]);
                        u._sb = []
                    } else
                        do u.__d = !1, k && k(t), d = u.render(u.props, u.state, u.context), u.state = u.__s; while (u.__d && ++_ < 25);
                    u.state = u.__s, null != u.getChildContext && (r = ec(ec({}, r), u.getChildContext())), w && !p && null != u.getSnapshotBeforeUpdate && (f = u.getSnapshotBeforeUpdate(h, m)), S = d, null != d && d.type === eh && null == d.key && (S = function e(t) {
                        return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : es(t) ? t.map(e) : ec({}, t)
                    }(d.props.children)), l = ew(e, es(S) ? S : [S], t, n, r, i, o, a, l, s, c), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), g && (u.__E = u.__ = null)
                } catch (e) {
                    if (t.__v = null, s || null != o)
                        if (e.then) {
                            for (t.__u |= s ? 160 : 128; l && 8 == l.nodeType && l.nextSibling;) l = l.nextSibling;
                            o[o.indexOf(l)] = null, t.__e = l
                        } else
                            for (C = o.length; C--;) ed(o[C]);
                    else t.__e = n.__e, t.__k = n.__k;
                    q.__e(e, t, n)
                } else null == o && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = function(e, t, n, r, i, o, a, l, s) {
                    var c, d, u, p, h, m, f, g = n.props,
                        v = t.props,
                        w = t.type;
                    if ("svg" == w ? i = "http://www.w3.org/2000/svg" : "math" == w ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), null != o) {
                        for (c = 0; c < o.length; c++)
                            if ((h = o[c]) && "setAttribute" in h == !!w && (w ? h.localName == w : 3 == h.nodeType)) {
                                e = h, o[c] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null == w) return document.createTextNode(v);
                        e = document.createElementNS(i, w, v.is && v), l && (q.__m && q.__m(t, o), l = !1), o = null
                    }
                    if (null == w) g === v || l && e.data == v || (e.data = v);
                    else {
                        if (o = o && V.call(e.childNodes), g = n.props || eo, !l && null != o)
                            for (g = {}, c = 0; c < e.attributes.length; c++) g[(h = e.attributes[c]).name] = h.value;
                        for (c in g)
                            if (h = g[c], "children" == c);
                            else if ("dangerouslySetInnerHTML" == c) u = h;
                        else if (!(c in v)) {
                            if ("value" == c && "defaultValue" in v || "checked" == c && "defaultChecked" in v) continue;
                            ey(e, c, null, h, i)
                        }
                        for (c in v) h = v[c], "children" == c ? p = h : "dangerouslySetInnerHTML" == c ? d = h : "value" == c ? m = h : "checked" == c ? f = h : l && "function" != typeof h || g[c] === h || ey(e, c, h, g[c], i);
                        if (d) l || u && (d.__html == u.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
                        else if (u && (e.innerHTML = ""), ew("template" == t.type ? e.content : e, es(p) ? p : [p], t, n, r, "foreignObject" == w ? "http://www.w3.org/1999/xhtml" : i, o, a, o ? o[0] : n.__k && ef(n, 0), l, s), null != o)
                            for (c = o.length; c--;) ed(o[c]);
                        l || (c = "value", "progress" == w && null == m ? e.removeAttribute("value") : null == m || m === e[c] && ("progress" != w || m) && ("option" != w || m == g[c]) || ey(e, c, m, g[c], i), c = "checked", null != f && f != e[c] && ey(e, c, f, g[c], i))
                    }
                    return e
                }(n.__e, t, n, r, i, o, a, s, c);
                return (d = q.diffed) && d(t), 128 & t.__u ? void 0 : l
            }

            function eN(e, t, n) {
                for (var r = 0; r < n.length; r++) eS(n[r], n[++r], n[++r]);
                q.__c && q.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        q.__e(e, t.__v)
                    }
                })
            }

            function eS(e, t, n) {
                try {
                    if ("function" == typeof e) {
                        var r = "function" == typeof e.__u;
                        r && e.__u(), r && null == t || (e.__u = e(t))
                    } else e.current = t
                } catch (e) {
                    q.__e(e, n)
                }
            }

            function eC(e, t, n) {
                return this.constructor(e, n)
            }

            function ez(e, t, n) {
                var r, i, o, a;
                t == document && (t = document.documentElement), q.__ && q.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], a = [], e_(t, e = (!r && n || t).__k = eu(eh, null, [e]), i || eo, eo, t.namespaceURI, !r && n ? [n] : i ? null : t.firstChild ? V.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r, a), eN(o, e, a)
            }

            function eT(e) {
                function t(e) {
                    var n, r;
                    return this.getChildContext || (n = new Set, (r = {})[t.__c] = this, this.getChildContext = function() {
                        return r
                    }, this.componentWillUnmount = function() {
                        n = null
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value != e.value && n.forEach(function(e) {
                            e.__e = !0, eg(e)
                        })
                    }, this.sub = function(e) {
                        n.add(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            n && n.delete(e), t && t.call(e)
                        }
                    }), e.children
                }
                return t.__c = "__cC" + ei++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
                    return e.children(t)
                }).contextType = t, t
            }
            V = ea.slice, q = {
                __e: function(e, t, n, r) {
                    for (var i, o, a; t = t.__;)
                        if ((i = t.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), a = i.__d), a) return i.__E = i
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, J = 0, em.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = ec({}, this.state), "function" == typeof e && (e = e(ec({}, n), this.props)), e && ec(n, e), null != e && this.__v && (t && this._sb.push(t), eg(this))
            }, em.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), eg(this))
            }, em.prototype.render = eh, G = [], Z = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Q = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, ev.__r = 0, ee = /(PointerCapture)$|Capture$/i, et = 0, en = ek(!1), er = ek(!0), ei = 0;
            var eE, eA, eM, eF, e$ = 0,
                eR = [],
                eD = q,
                eP = eD.__b,
                ej = eD.__r,
                eI = eD.diffed,
                eL = eD.__c,
                eO = eD.unmount,
                eU = eD.__;

            function eW(e, t) {
                eD.__h && eD.__h(eA, e, e$ || t), e$ = 0;
                var n = eA.__H || (eA.__H = {
                    __: [],
                    __h: []
                });
                return e >= n.__.length && n.__.push({}), n.__[e]
            }

            function eH(e) {
                return e$ = 1,
                    function(e, t, n) {
                        var r = eW(eE++, 2);
                        if (r.t = e, !r.__c && (r.__ = [e1(void 0, t), function(e) {
                                var t = r.__N ? r.__N[0] : r.__[0],
                                    n = r.t(t, e);
                                t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                            }], r.__c = eA, !eA.__f)) {
                            var i = function(e, t, n) {
                                if (!r.__c.__H) return !0;
                                var i = r.__c.__H.__.filter(function(e) {
                                    return !!e.__c
                                });
                                if (i.every(function(e) {
                                        return !e.__N
                                    })) return !o || o.call(this, e, t, n);
                                var a = r.__c.props !== e;
                                return i.forEach(function(e) {
                                    if (e.__N) {
                                        var t = e.__[0];
                                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (a = !0)
                                    }
                                }), o && o.call(this, e, t, n) || a
                            };
                            eA.__f = !0;
                            var o = eA.shouldComponentUpdate,
                                a = eA.componentWillUpdate;
                            eA.componentWillUpdate = function(e, t, n) {
                                if (this.__e) {
                                    var r = o;
                                    o = void 0, i(e, t, n), o = r
                                }
                                a && a.call(this, e, t, n)
                            }, eA.shouldComponentUpdate = i
                        }
                        return r.__N || r.__
                    }(e1, e)
            }

            function eY(e, t) {
                var n = eW(eE++, 3);
                !eD.__s && e0(n.__H, t) && (n.__ = e, n.u = t, eA.__H.__h.push(n))
            }

            function eX(e, t) {
                var n = eW(eE++, 4);
                !eD.__s && e0(n.__H, t) && (n.__ = e, n.u = t, eA.__h.push(n))
            }

            function eB(e) {
                return e$ = 5, eV(function() {
                    return {
                        current: e
                    }
                }, [])
            }

            function eV(e, t) {
                var n = eW(eE++, 7);
                return e0(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
            }

            function eq(e, t) {
                return e$ = 8, eV(function() {
                    return e
                }, t)
            }

            function eJ(e) {
                var t = eA.context[e.__c],
                    n = eW(eE++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(eA)), t.props.value) : e.__
            }

            function eG() {
                for (var e; e = eR.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(eZ), e.__H.__h.forEach(eQ), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], eD.__e(t, e.__v)
                    }
            }
            eD.__b = function(e) {
                eA = null, eP && eP(e)
            }, eD.__ = function(e, t) {
                e && t.__k && t.__k.__m && (e.__m = t.__k.__m), eU && eU(e, t)
            }, eD.__r = function(e) {
                ej && ej(e), eE = 0;
                var t = (eA = e.__c).__H;
                t && (eM === eA ? (t.__h = [], eA.__h = [], t.__.forEach(function(e) {
                    e.__N && (e.__ = e.__N), e.u = e.__N = void 0
                })) : (t.__h.forEach(eZ), t.__h.forEach(eQ), t.__h = [], eE = 0)), eM = eA
            }, eD.diffed = function(e) {
                eI && eI(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== eR.push(t) && eF === eD.requestAnimationFrame || ((eF = eD.requestAnimationFrame) || function(e) {
                    var t, n = function() {
                            clearTimeout(r), eK && cancelAnimationFrame(t), setTimeout(e)
                        },
                        r = setTimeout(n, 100);
                    eK && (t = requestAnimationFrame(n))
                })(eG)), t.__H.__.forEach(function(e) {
                    e.u && (e.__H = e.u), e.u = void 0
                })), eM = eA = null
            }, eD.__c = function(e, t) {
                t.some(function(e) {
                    try {
                        e.__h.forEach(eZ), e.__h = e.__h.filter(function(e) {
                            return !e.__ || eQ(e)
                        })
                    } catch (n) {
                        t.some(function(e) {
                            e.__h && (e.__h = [])
                        }), t = [], eD.__e(n, e.__v)
                    }
                }), eL && eL(e, t)
            }, eD.unmount = function(e) {
                eO && eO(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach(function(e) {
                    try {
                        eZ(e)
                    } catch (e) {
                        t = e
                    }
                }), n.__H = void 0, t && eD.__e(t, n.__v))
            };
            var eK = "function" == typeof requestAnimationFrame;

            function eZ(e) {
                var t = eA,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), eA = t
            }

            function eQ(e) {
                var t = eA;
                e.__c = e.__(), eA = t
            }

            function e0(e, t) {
                return !e || e.length !== t.length || t.some(function(t, n) {
                    return t !== e[n]
                })
            }

            function e1(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            var e2 = Symbol.for("preact-signals");

            function e4() {
                if (e8 > 1) e8--;
                else {
                    for (var e, t = !1; void 0 !== e6;) {
                        var n = e6;
                        for (e6 = void 0, e7++; void 0 !== n;) {
                            var r = n.o;
                            if (n.o = void 0, n.f &= -3, !(8 & n.f) && tr(n)) try {
                                n.c()
                            } catch (n) {
                                t || (e = n, t = !0)
                            }
                            n = r
                        }
                    }
                    if (e7 = 0, e8--, t) throw e
                }
            }
            var e5 = void 0;

            function e3(e) {
                var t = e5;
                e5 = void 0;
                try {
                    return e()
                } finally {
                    e5 = t
                }
            }
            var e6 = void 0,
                e8 = 0,
                e7 = 0,
                e9 = 0;

            function te(e) {
                if (void 0 !== e5) {
                    var t = e.n;
                    if (void 0 === t || t.t !== e5) return t = {
                        i: 0,
                        S: e,
                        p: e5.s,
                        n: void 0,
                        t: e5,
                        e: void 0,
                        x: void 0,
                        r: t
                    }, void 0 !== e5.s && (e5.s.n = t), e5.s = t, e.n = t, 32 & e5.f && e.S(t), t;
                    if (-1 === t.i) return t.i = 0, void 0 !== t.n && (t.n.p = t.p, void 0 !== t.p && (t.p.n = t.n), t.p = e5.s, t.n = void 0, e5.s.n = t, e5.s = t), t
                }
            }

            function tt(e, t) {
                this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = null == t ? void 0 : t.watched, this.Z = null == t ? void 0 : t.unwatched, this.name = null == t ? void 0 : t.name
            }

            function tn(e, t) {
                return new tt(e, t)
            }

            function tr(e) {
                for (var t = e.s; void 0 !== t; t = t.n)
                    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                return !1
            }

            function ti(e) {
                for (var t = e.s; void 0 !== t; t = t.n) {
                    var n = t.S.n;
                    if (void 0 !== n && (t.r = n), t.S.n = t, t.i = -1, void 0 === t.n) {
                        e.s = t;
                        break
                    }
                }
            }

            function to(e) {
                for (var t = e.s, n = void 0; void 0 !== t;) {
                    var r = t.p; - 1 === t.i ? (t.S.U(t), void 0 !== r && (r.n = t.n), void 0 !== t.n && (t.n.p = r)) : n = t, t.S.n = t.r, void 0 !== t.r && (t.r = void 0), t = r
                }
                e.s = n
            }

            function ta(e, t) {
                tt.call(this, void 0), this.x = e, this.s = void 0, this.g = e9 - 1, this.f = 4, this.W = null == t ? void 0 : t.watched, this.Z = null == t ? void 0 : t.unwatched, this.name = null == t ? void 0 : t.name
            }

            function tl(e, t) {
                return new ta(e, t)
            }

            function ts(e) {
                var t = e.u;
                if (e.u = void 0, "function" == typeof t) {
                    e8++;
                    var n = e5;
                    e5 = void 0;
                    try {
                        t()
                    } catch (t) {
                        throw e.f &= -2, e.f |= 8, tc(e), t
                    } finally {
                        e5 = n, e4()
                    }
                }
            }

            function tc(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                e.x = void 0, e.s = void 0, ts(e)
            }

            function td(e) {
                if (e5 !== this) throw Error("Out-of-order effect");
                to(this), e5 = e, this.f &= -2, 8 & this.f && tc(this), e4()
            }

            function tu(e, t) {
                this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = null == t ? void 0 : t.name
            }

            function tp(e, t) {
                var n = new tu(e, t);
                try {
                    n.c()
                } catch (e) {
                    throw n.d(), e
                }
                var r = n.d.bind(n);
                return r[Symbol.dispose] = r, r
            }

            function th(e, t) {
                q[e] = t.bind(null, q[e] || function() {})
            }

            function tm(e) {
                tW && tW(), tW = e && e.S()
            }

            function tf(e) {
                var t, n = this,
                    r = e.data,
                    i = (t = r, eV(function() {
                        return tn(t)
                    }, []));
                i.value = r;
                var o = eV(function() {
                    for (var e = n.__v; e = e.__;)
                        if (e.__c) {
                            e.__c.__$f |= 4;
                            break
                        } return n.__$u.c = function() {
                        var e, t = n.__$u.S(),
                            r = o.value;
                        (t(), null != r && null == r.constructor || 3 !== (null == (e = n.base) ? void 0 : e.nodeType)) ? (n.__$f |= 1, n.setState({})) : n.base.data = r
                    }, tl(function() {
                        var e = i.value.value;
                        return 0 === e ? 0 : !0 === e ? "" : e || ""
                    })
                }, []);
                return o.value
            }

            function tg(e) {
                var t = eB(e);
                t.current = e, eY(function() {
                    return tp(function() {
                        return t.current()
                    })
                }, [])
            }

            function tv(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function tw(e, t) {
                for (var n in e)
                    if ("__source" !== n && !(n in t)) return !0;
                for (var r in t)
                    if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1
            }

            function tb(e) {
                var t = e.u,
                    n = e.__;
                try {
                    var r = t();
                    return (n !== r || 0 === n && 1 / n != 1 / r) && (n == n || r == r)
                } catch (e) {
                    return !0
                }
            }

            function tx(e, t) {
                this.props = e, this.context = t
            }

            function ty(e, t) {
                function n(e) {
                    var n = this.props.ref,
                        r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : tw(this.props, e)
                }

                function r(t) {
                    return this.shouldComponentUpdate = n, eu(e, t)
                }
                return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
            }
            tt.prototype.brand = e2, tt.prototype.h = function() {
                return !0
            }, tt.prototype.S = function(e) {
                var t = this,
                    n = this.t;
                n !== e && void 0 === e.e && (e.x = n, this.t = e, void 0 !== n ? n.e = e : e3(function() {
                    var e;
                    null == (e = t.W) || e.call(t)
                }))
            }, tt.prototype.U = function(e) {
                var t = this;
                if (void 0 !== this.t) {
                    var n = e.e,
                        r = e.x;
                    void 0 !== n && (n.x = r, e.e = void 0), void 0 !== r && (r.e = n, e.x = void 0), e === this.t && (this.t = r, void 0 === r && e3(function() {
                        var e;
                        null == (e = t.Z) || e.call(t)
                    }))
                }
            }, tt.prototype.subscribe = function(e) {
                var t = this;
                return tp(function() {
                    var n = t.value,
                        r = e5;
                    e5 = void 0;
                    try {
                        e(n)
                    } finally {
                        e5 = r
                    }
                }, {
                    name: "sub"
                })
            }, tt.prototype.valueOf = function() {
                return this.value
            }, tt.prototype.toString = function() {
                return this.value + ""
            }, tt.prototype.toJSON = function() {
                return this.value
            }, tt.prototype.peek = function() {
                var e = e5;
                e5 = void 0;
                try {
                    return this.value
                } finally {
                    e5 = e
                }
            }, Object.defineProperty(tt.prototype, "value", {
                get: function() {
                    var e = te(this);
                    return void 0 !== e && (e.i = this.i), this.v
                },
                set: function(e) {
                    if (e !== this.v) {
                        if (e7 > 100) throw Error("Cycle detected");
                        this.v = e, this.i++, e9++, e8++;
                        try {
                            for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                        } finally {
                            e4()
                        }
                    }
                }
            }), ta.prototype = new tt, ta.prototype.h = function() {
                if (this.f &= -3, 1 & this.f) return !1;
                if (32 == (36 & this.f) || (this.f &= -5, this.g === e9)) return !0;
                if (this.g = e9, this.f |= 1, this.i > 0 && !tr(this)) return this.f &= -2, !0;
                var e = e5;
                try {
                    ti(this), e5 = this;
                    var t = this.x();
                    (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
                } catch (e) {
                    this.v = e, this.f |= 16, this.i++
                }
                return e5 = e, to(this), this.f &= -2, !0
            }, ta.prototype.S = function(e) {
                if (void 0 === this.t) {
                    this.f |= 36;
                    for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t)
                }
                tt.prototype.S.call(this, e)
            }, ta.prototype.U = function(e) {
                if (void 0 !== this.t && (tt.prototype.U.call(this, e), void 0 === this.t)) {
                    this.f &= -33;
                    for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t)
                }
            }, ta.prototype.N = function() {
                if (!(2 & this.f)) {
                    this.f |= 6;
                    for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
                }
            }, Object.defineProperty(ta.prototype, "value", {
                get: function() {
                    if (1 & this.f) throw Error("Cycle detected");
                    var e = te(this);
                    if (this.h(), void 0 !== e && (e.i = this.i), 16 & this.f) throw this.v;
                    return this.v
                }
            }), tu.prototype.c = function() {
                var e = this.S();
                try {
                    if (8 & this.f || void 0 === this.x) return;
                    var t = this.x();
                    "function" == typeof t && (this.u = t)
                } finally {
                    e()
                }
            }, tu.prototype.S = function() {
                if (1 & this.f) throw Error("Cycle detected");
                this.f |= 1, this.f &= -9, ts(this), ti(this), e8++;
                var e = e5;
                return e5 = this, td.bind(this, e)
            }, tu.prototype.N = function() {
                2 & this.f || (this.f |= 2, this.o = e6, e6 = this)
            }, tu.prototype.d = function() {
                this.f |= 8, 1 & this.f || tc(this)
            }, tu.prototype.dispose = function() {
                this.d()
            }, tf.displayName = "_st", Object.defineProperties(tt.prototype, {
                constructor: {
                    configurable: !0,
                    value: void 0
                },
                type: {
                    configurable: !0,
                    value: tf
                },
                props: {
                    configurable: !0,
                    get: function() {
                        return {
                            data: this
                        }
                    }
                },
                __b: {
                    configurable: !0,
                    value: 1
                }
            }), th("__b", function(e, t) {
                if ("string" == typeof t.type) {
                    var n, r = t.props;
                    for (var i in r)
                        if ("children" !== i) {
                            var o = r[i];
                            o instanceof tt && (n || (t.__np = n = {}), n[i] = o, r[i] = o.peek())
                        }
                }
                e(t)
            }), th("__r", function(e, t) {
                tm();
                var n, r, i = t.__c;
                i && (i.__$f &= -2, void 0 === (r = i.__$u) && (tp(function() {
                    n = this
                }), n.c = function() {
                    i.__$f |= 1, i.setState({})
                }, i.__$u = r = n)), tm(r), e(t)
            }), th("__e", function(e, t, n, r) {
                tm(), e(t, n, r)
            }), th("diffed", function(e, t) {
                if (tm(), "string" == typeof t.type && (n = t.__e)) {
                    var n, r = t.__np,
                        i = t.props;
                    if (r) {
                        var o = n.U;
                        if (o)
                            for (var a in o) {
                                var l = o[a];
                                void 0 === l || a in r || (l.d(), o[a] = void 0)
                            } else n.U = o = {};
                        for (var s in r) {
                            var c = o[s],
                                d = r[s];
                            void 0 === c ? (c = function(e, t, n, r) {
                                var i = t in e && void 0 === e.ownerSVGElement,
                                    o = tn(n);
                                return {
                                    o: function(e, t) {
                                        o.value = e, r = t
                                    },
                                    d: tp(function() {
                                        var n = o.value.value;
                                        r[t] !== n && (r[t] = n, i ? e[t] = n : n ? e.setAttribute(t, n) : e.removeAttribute(t))
                                    })
                                }
                            }(n, s, d, i), o[s] = c) : c.o(d, i)
                        }
                    }
                }
                e(t)
            }), th("unmount", function(e, t) {
                if ("string" == typeof t.type) {
                    var n = t.__e;
                    if (n) {
                        var r = n.U;
                        if (r)
                            for (var i in n.U = void 0, r) {
                                var o = r[i];
                                o && o.d()
                            }
                    }
                } else {
                    var a = t.__c;
                    if (a) {
                        var l = a.__$u;
                        l && (a.__$u = void 0, l.d())
                    }
                }
                e(t)
            }), th("__h", function(e, t, n, r) {
                (r < 3 || 9 === r) && (t.__$f |= 2), e(t, n, r)
            }), em.prototype.shouldComponentUpdate = function(e, t) {
                var n = this.__$u,
                    r = n && void 0 !== n.s;
                for (var i in t) return !0;
                if (this.__f || "boolean" == typeof this.u && !0 === this.u) {
                    if (!(r || 2 & this.__$f || 4 & this.__$f) || 1 & this.__$f) return !0
                } else if (!(r || 4 & this.__$f) || 3 & this.__$f) return !0;
                for (var o in e)
                    if ("__source" !== o && e[o] !== this.props[o]) return !0;
                for (var a in this.props)
                    if (!(a in e)) return !0;
                return !1
            }, (tx.prototype = new em).isPureReactComponent = !0, tx.prototype.shouldComponentUpdate = function(e, t) {
                return tw(this.props, e) || tw(this.state, t)
            };
            var tk = q.__b;
            q.__b = function(e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), tk && tk(e)
            };
            var t_ = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function tN(e) {
                function t(t) {
                    var n = tv({}, t);
                    return delete n.ref, e(n, t.ref || null)
                }
                return t.$$typeof = t_, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            }
            var tS = q.__e;
            q.__e = function(e, t, n, r) {
                if (e.then) {
                    for (var i, o = t; o = o.__;)
                        if ((i = o.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
                }
                tS(e, t, n, r)
            };
            var tC = q.unmount;

            function tz() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function tT(e) {
                var t = e.__.__c;
                return t && t.__a && t.__a(e)
            }

            function tE() {
                this.i = null, this.l = null
            }
            q.unmount = function(e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), tC && tC(e)
            }, (tz.prototype = new em).__c = function(e, t) {
                var n = t.__c,
                    r = this;
                null == r.o && (r.o = []), r.o.push(n);
                var i = tT(r.__v),
                    o = !1,
                    a = function() {
                        o || (o = !0, n.__R = null, i ? i(l) : l())
                    };
                n.__R = a;
                var l = function() {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var e, t = r.state.__a;
                            r.__v.__k[0] = function e(t, n, r) {
                                return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(t) {
                                    return e(t, n, r)
                                }), t.__c && t.__c.__P === n && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t
                            }(t, t.__c.__P, t.__c.__O)
                        }
                        for (r.setState({
                                __a: r.__b = null
                            }); e = r.o.pop();) e.forceUpdate()
                    }
                };
                r.__u++ || 32 & t.__u || r.setState({
                    __a: r.__b = r.__v.__k[0]
                }), e.then(a, a)
            }, tz.prototype.componentWillUnmount = function() {
                this.o = []
            }, tz.prototype.render = function(e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            r = this.__v.__k[0].__c;
                        this.__v.__k[0] = function e(t, n, r) {
                            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(e) {
                                "function" == typeof e.__c && e.__c()
                            }), t.__c.__H = null), null != (t = tv({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(t) {
                                return e(t, n, r)
                            })), t
                        }(this.__b, n, r.__O = r.__P)
                    }
                    this.__b = null
                }
                var i = t.__a && eu(eh, null, e.fallback);
                return i && (i.__u &= -33), [eu(eh, null, t.__a ? null : e.children), i]
            };
            var tA = function(e, t, n) {
                if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
                    for (n = e.i; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.i = n = n[2]
                    }
            };

            function tM(e) {
                return this.getChildContext = function() {
                    return e.context
                }, e.children
            }

            function tF(e) {
                var t = this,
                    n = e.h;
                t.componentWillUnmount = function() {
                    ez(null, t.v), t.v = null, t.h = null
                }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    contains: function() {
                        return !0
                    },
                    appendChild: function(e) {
                        this.childNodes.push(e), t.h.appendChild(e)
                    },
                    insertBefore: function(e, n) {
                        this.childNodes.push(e), t.h.insertBefore(e, n)
                    },
                    removeChild: function(e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.h.removeChild(e)
                    }
                }), ez(eu(tM, {
                    context: t.context
                }, e.__v), t.v)
            }(tE.prototype = new em).__a = function(e) {
                var t = this,
                    n = tT(t.__v),
                    r = t.l.get(e);
                return r[0]++,
                    function(i) {
                        var o = function() {
                            t.props.revealOrder ? (r.push(i), tA(t, e, r)) : i()
                        };
                        n ? n(o) : o()
                    }
            }, tE.prototype.render = function(e) {
                this.i = null, this.l = new Map;
                var t = eb(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);
                return e.children
            }, tE.prototype.componentDidUpdate = tE.prototype.componentDidMount = function() {
                var e = this;
                this.l.forEach(function(t, n) {
                    tA(e, n, t)
                })
            };
            var t$ = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                tR = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                tD = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
                tP = /[A-Z0-9]/g,
                tj = "undefined" != typeof document;
            em.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
                Object.defineProperty(em.prototype, e, {
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
            var tI = q.event;

            function tL() {}

            function tO() {
                return this.cancelBubble
            }

            function tU() {
                return this.defaultPrevented
            }
            q.event = function(e) {
                return tI && (e = tI(e)), e.persist = tL, e.isPropagationStopped = tO, e.isDefaultPrevented = tU, e.nativeEvent = e
            };
            var tW, tH = {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                tY = q.vnode;
            q.vnode = function(e) {
                "string" == typeof e.type && function(e) {
                    var t = e.props,
                        n = e.type,
                        r = {},
                        i = -1 === n.indexOf("-");
                    for (var o in t) {
                        var a = t[o];
                        if (!("value" === o && "defaultValue" in t && null == a || tj && "children" === o && "noscript" === n || "class" === o || "className" === o)) {
                            var l, s = o.toLowerCase();
                            "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === a ? a = "" : "translate" === s && "no" === a ? a = !1 : "o" === s[0] && "n" === s[1] ? "ondoubleclick" === s ? o = "ondblclick" : "onchange" !== s || "input" !== n && "textarea" !== n || (l = t.type, ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(l)) ? "onfocus" === s ? o = "onfocusin" : "onblur" === s ? o = "onfocusout" : tD.test(o) && (o = s) : s = o = "oninput" : i && tR.test(o) ? o = o.replace(tP, "-$&").toLowerCase() : null === a && (a = void 0), "oninput" === s && r[o = s] && (o = "oninputCapture"), r[o] = a
                        }
                    }
                    "select" == n && r.multiple && Array.isArray(r.value) && (r.value = eb(t.children).forEach(function(e) {
                        e.props.selected = -1 != r.value.indexOf(e.props.value)
                    })), "select" == n && null != r.defaultValue && (r.value = eb(t.children).forEach(function(e) {
                        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                    })), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", tH)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className), e.props = r
                }(e), e.$$typeof = t$, tY && tY(e)
            };
            var tX = q.__r;
            q.__r = function(e) {
                tX && tX(e), e.__c
            };
            var tB = q.diffed;
            q.diffed = function(e) {
                tB && tB(e);
                var t = e.props,
                    n = e.__e;
                null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value)
            };
            var tV = 0;

            function tq(e, t, n, r, i, o) {
                t || (t = {});
                var a, l, s = t;
                if ("ref" in s)
                    for (l in s = {}, t) "ref" == l ? a = t[l] : s[l] = t[l];
                var c = {
                    type: e,
                    props: s,
                    key: n,
                    ref: a,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __c: null,
                    constructor: void 0,
                    __v: --tV,
                    __i: -1,
                    __u: 0,
                    __source: i,
                    __self: o
                };
                if ("function" == typeof e && (a = e.defaultProps))
                    for (l in a) void 0 === s[l] && (s[l] = a[l]);
                return q.vnode && q.vnode(c), c
            }

            function tJ(e, t) {
                return t - e
            }
            n(58191), Array.prototype.toSorted || Object.defineProperty(Array.prototype, "toSorted", {
                value: function(e) {
                    return [...this].sort(e)
                },
                writable: !0,
                configurable: !0
            });
            var tG = e => {
                let t = "",
                    n = new Map;
                for (let t of e) {
                    let {
                        forget: e,
                        time: r,
                        aggregatedCount: i,
                        name: o
                    } = t;
                    n.has(i) || n.set(i, []);
                    let a = n.get(i);
                    a && a.push({
                        name: o,
                        forget: e,
                        time: r ?? 0
                    })
                }
                let r = Array.from(n.keys()).sort(tJ),
                    i = [],
                    o = 0;
                for (let e of r) {
                    let t = n.get(e);
                    if (!t) continue;
                    let r = function(e) {
                            let t = e[0].name,
                                n = Math.min(4, e.length);
                            for (let r = 1; r < n; r++) t += `, ${e[r].name}`;
                            return t
                        }(t),
                        a = function(e) {
                            let t = e[0].time;
                            for (let n = 1, r = e.length; n < r; n++) t += e[n].time;
                            return t
                        }(t),
                        l = function(e) {
                            for (let t = 0, n = e.length; t < n; t++)
                                if (e[t].forget) return !0;
                            return !1
                        }(t);
                    o += a, t.length > 4 && (r += "…"), e > 1 && (r += ` \xd7 ${e}`), l && (r = `\u2728${r}`), i.push(r)
                }
                return (t = i.join(", ")).length ? (t.length > 40 && (t = `${t.slice(0,40)}\u2026`), o >= .01 && (t += ` (${Number(o.toFixed(2))}ms)`), t) : null
            };

            function tK(e, t) {
                return e === t || e != e && t != t
            }
            var tZ = e => {
                    let t = e.createOscillator(),
                        n = e.createGain();
                    t.connect(n), n.connect(e.destination);
                    let r = [392, 600],
                        i = .3 / r.length;
                    r.forEach((n, r) => {
                        t.frequency.setValueAtTime(n, e.currentTime + r * i)
                    }), t.type = "sine", n.gain.setValueAtTime(.12, e.currentTime), n.gain.setTargetAtTime(0, e.currentTime + .21, .05), t.start(), t.stop(e.currentTime + .3)
                },
                tQ = {
                    mount: 1,
                    update: 2,
                    unmount: 4
                },
                t0 = tN((e, t) => {
                    let {
                        size: n = 15,
                        name: r,
                        fill: i = "currentColor",
                        stroke: o = "currentColor",
                        className: a,
                        externalURL: l = "",
                        style: s
                    } = e, c = Array.isArray(n) ? n[0] : n, d = Array.isArray(n) ? n[1] || n[0] : n, u = `${l}#${r}`;
                    return tq("svg", {
                        ref: t,
                        width: `${c}px`,
                        height: `${d}px`,
                        fill: i,
                        stroke: o,
                        className: a,
                        style: {
                            ...s,
                            minWidth: `${c}px`,
                            maxWidth: `${c}px`,
                            minHeight: `${d}px`,
                            maxHeight: `${d}px`
                        },
                        children: [tq("title", {
                            children: r
                        }), tq("use", {
                            href: u
                        })]
                    })
                }),
                t1 = "react-scan-widget-settings-v2",
                t2 = "react-scan-widget-collapsed-v1",
                t4 = "react-scan-widget-last-view-v1",
                t5 = "undefined" != typeof window,
                t3 = (e, t) => {
                    var n;
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        i = t.nextPart.get(r),
                        o = i ? t3(e.slice(1), i) : void 0;
                    if (o) return o;
                    if (0 === t.validators.length) return;
                    let a = e.join("-");
                    return null == (n = t.validators.find(e => {
                        let {
                            validator: t
                        } = e;
                        return t(a)
                    })) ? void 0 : n.classGroupId
                },
                t6 = /^\[(.+)\]$/,
                t8 = (e, t, n, r) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : t7(t, e)).classGroupId = n;
                            return
                        }
                        "function" == typeof e ? t9(e) ? t8(e(r), t, n, r) : t.validators.push({
                            validator: e,
                            classGroupId: n
                        }) : Object.entries(e).forEach(e => {
                            let [i, o] = e;
                            t8(o, t7(t, i), n, r)
                        })
                    })
                },
                t7 = (e, t) => {
                    let n = e;
                    return t.split("-").forEach(e => {
                        n.nextPart.has(e) || n.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), n = n.nextPart.get(e)
                    }), n
                },
                t9 = e => e.isThemeGetter,
                ne = (e, t) => t ? e.map(e => {
                    let [n, r] = e;
                    return [n, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(e => {
                        let [n, r] = e;
                        return [t + n, r]
                    })) : e)]
                }) : e,
                nt = e => {
                    if (e.length <= 1) return e;
                    let t = [],
                        n = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (t.push(...n.sort(), e), n = []) : n.push(e)
                    }), t.push(...n.sort()), t
                },
                nn = /\s+/;

            function nr() {
                let e, t, n = 0,
                    r = "";
                for (; n < arguments.length;)(e = arguments[n++]) && (t = ni(e)) && (r && (r += " "), r += t);
                return r
            }
            var ni = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let n = "";
                    for (let r = 0; r < e.length; r++) e[r] && (t = ni(e[r])) && (n && (n += " "), n += t);
                    return n
                },
                no = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                na = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                nl = /^\d+\/\d+$/,
                ns = new Set(["px", "full", "screen"]),
                nc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                nd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                nu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                np = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                nh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                nm = e => ng(e) || ns.has(e) || nl.test(e),
                nf = e => nE(e, "length", nA),
                ng = e => !!e && !Number.isNaN(Number(e)),
                nv = e => nE(e, "number", ng),
                nw = e => !!e && Number.isInteger(Number(e)),
                nb = e => e.endsWith("%") && ng(e.slice(0, -1)),
                nx = e => na.test(e),
                ny = e => nc.test(e),
                nk = new Set(["length", "size", "percentage"]),
                n_ = e => nE(e, nk, nM),
                nN = e => nE(e, "position", nM),
                nS = new Set(["image", "url"]),
                nC = e => nE(e, nS, n$),
                nz = e => nE(e, "", nF),
                nT = () => !0,
                nE = (e, t, n) => {
                    let r = na.exec(e);
                    return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
                },
                nA = e => nd.test(e) && !nu.test(e),
                nM = () => !1,
                nF = e => np.test(e),
                n$ = e => nh.test(e),
                nR = function(e) {
                    let t, n, r;
                    for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                    let l = function(i) {
                        let a;
                        return n = (t = {
                            cache: (e => {
                                if (e < 1) return {
                                    get: () => void 0,
                                    set: () => {}
                                };
                                let t = 0,
                                    n = new Map,
                                    r = new Map,
                                    i = (i, o) => {
                                        n.set(i, o), ++t > e && (t = 0, r = n, n = new Map)
                                    };
                                return {
                                    get(e) {
                                        let t = n.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (i(e, t), t) : void 0
                                    },
                                    set(e, t) {
                                        n.has(e) ? n.set(e, t) : i(e, t)
                                    }
                                }
                            })((a = o.reduce((e, t) => t(e), e())).cacheSize),
                            parseClassName: (e => {
                                let {
                                    separator: t,
                                    experimentalParseClassName: n
                                } = e, r = 1 === t.length, i = t[0], o = t.length, a = e => {
                                    let n, a = [],
                                        l = 0,
                                        s = 0;
                                    for (let c = 0; c < e.length; c++) {
                                        let d = e[c];
                                        if (0 === l) {
                                            if (d === i && (r || e.slice(c, c + o) === t)) {
                                                a.push(e.slice(s, c)), s = c + o;
                                                continue
                                            }
                                            if ("/" === d) {
                                                n = c;
                                                continue
                                            }
                                        }
                                        "[" === d ? l++ : "]" === d && l--
                                    }
                                    let c = 0 === a.length ? e : e.substring(s),
                                        d = c.startsWith("!"),
                                        u = d ? c.substring(1) : c;
                                    return {
                                        modifiers: a,
                                        hasImportantModifier: d,
                                        baseClassName: u,
                                        maybePostfixModifierPosition: n && n > s ? n - s : void 0
                                    }
                                };
                                return n ? e => n({
                                    className: e,
                                    parseClassName: a
                                }) : a
                            })(a),
                            ...(e => {
                                let t = (e => {
                                        let {
                                            theme: t,
                                            prefix: n
                                        } = e, r = {
                                            nextPart: new Map,
                                            validators: []
                                        };
                                        return ne(Object.entries(e.classGroups), n).forEach(e => {
                                            let [n, i] = e;
                                            t8(i, r, n, t)
                                        }), r
                                    })(e),
                                    {
                                        conflictingClassGroups: n,
                                        conflictingClassGroupModifiers: r
                                    } = e;
                                return {
                                    getClassGroupId: e => {
                                        let n = e.split("-");
                                        return "" === n[0] && 1 !== n.length && n.shift(), t3(n, t) || (e => {
                                            if (t6.test(e)) {
                                                let t = t6.exec(e)[1],
                                                    n = null == t ? void 0 : t.substring(0, t.indexOf(":"));
                                                if (n) return "arbitrary.." + n
                                            }
                                        })(e)
                                    },
                                    getConflictingClassGroupIds: (e, t) => {
                                        let i = n[e] || [];
                                        return t && r[e] ? [...i, ...r[e]] : i
                                    }
                                }
                            })(a)
                        }).cache.get, r = t.cache.set, l = s, s(i)
                    };

                    function s(e) {
                        let i = n(e);
                        if (i) return i;
                        let o = ((e, t) => {
                            let {
                                parseClassName: n,
                                getClassGroupId: r,
                                getConflictingClassGroupIds: i
                            } = t, o = [], a = e.trim().split(nn), l = "";
                            for (let e = a.length - 1; e >= 0; e -= 1) {
                                let t = a[e],
                                    {
                                        modifiers: s,
                                        hasImportantModifier: c,
                                        baseClassName: d,
                                        maybePostfixModifierPosition: u
                                    } = n(t),
                                    p = !!u,
                                    h = r(p ? d.substring(0, u) : d);
                                if (!h) {
                                    if (!p || !(h = r(d))) {
                                        l = t + (l.length > 0 ? " " + l : l);
                                        continue
                                    }
                                    p = !1
                                }
                                let m = nt(s).join(":"),
                                    f = c ? m + "!" : m,
                                    g = f + h;
                                if (o.includes(g)) continue;
                                o.push(g);
                                let v = i(h, p);
                                for (let e = 0; e < v.length; ++e) {
                                    let t = v[e];
                                    o.push(f + t)
                                }
                                l = t + (l.length > 0 ? " " + l : l)
                            }
                            return l
                        })(e, t);
                        return r(e, o), o
                    }
                    return function() {
                        return l(nr.apply(null, arguments))
                    }
                }(() => {
                    let e = no("colors"),
                        t = no("spacing"),
                        n = no("blur"),
                        r = no("brightness"),
                        i = no("borderColor"),
                        o = no("borderRadius"),
                        a = no("borderSpacing"),
                        l = no("borderWidth"),
                        s = no("contrast"),
                        c = no("grayscale"),
                        d = no("hueRotate"),
                        u = no("invert"),
                        p = no("gap"),
                        h = no("gradientColorStops"),
                        m = no("gradientColorStopPositions"),
                        f = no("inset"),
                        g = no("margin"),
                        v = no("opacity"),
                        w = no("padding"),
                        b = no("saturate"),
                        x = no("scale"),
                        y = no("sepia"),
                        k = no("skew"),
                        _ = no("space"),
                        N = no("translate"),
                        S = () => ["auto", "contain", "none"],
                        C = () => ["auto", "hidden", "clip", "visible", "scroll"],
                        z = () => ["auto", nx, t],
                        T = () => [nx, t],
                        E = () => ["", nm, nf],
                        A = () => ["auto", ng, nx],
                        M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                        F = () => ["solid", "dashed", "dotted", "double", "none"],
                        $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                        R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                        D = () => ["", "0", nx],
                        P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                        j = () => [ng, nx];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [nT],
                            spacing: [nm, nf],
                            blur: ["none", "", ny, nx],
                            brightness: j(),
                            borderColor: [e],
                            borderRadius: ["none", "", "full", ny, nx],
                            borderSpacing: T(),
                            borderWidth: E(),
                            contrast: j(),
                            grayscale: D(),
                            hueRotate: j(),
                            invert: D(),
                            gap: T(),
                            gradientColorStops: [e],
                            gradientColorStopPositions: [nb, nf],
                            inset: z(),
                            margin: z(),
                            opacity: j(),
                            padding: T(),
                            saturate: j(),
                            scale: j(),
                            sepia: D(),
                            skew: j(),
                            space: T(),
                            translate: T()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", nx]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [ny]
                            }],
                            "break-after": [{
                                "break-after": P()
                            }],
                            "break-before": [{
                                "break-before": P()
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: [...M(), nx]
                            }],
                            overflow: [{
                                overflow: C()
                            }],
                            "overflow-x": [{
                                "overflow-x": C()
                            }],
                            "overflow-y": [{
                                "overflow-y": C()
                            }],
                            overscroll: [{
                                overscroll: S()
                            }],
                            "overscroll-x": [{
                                "overscroll-x": S()
                            }],
                            "overscroll-y": [{
                                "overscroll-y": S()
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [f]
                            }],
                            "inset-x": [{
                                "inset-x": [f]
                            }],
                            "inset-y": [{
                                "inset-y": [f]
                            }],
                            start: [{
                                start: [f]
                            }],
                            end: [{
                                end: [f]
                            }],
                            top: [{
                                top: [f]
                            }],
                            right: [{
                                right: [f]
                            }],
                            bottom: [{
                                bottom: [f]
                            }],
                            left: [{
                                left: [f]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", nw, nx]
                            }],
                            basis: [{
                                basis: z()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", nx]
                            }],
                            grow: [{
                                grow: D()
                            }],
                            shrink: [{
                                shrink: D()
                            }],
                            order: [{
                                order: ["first", "last", "none", nw, nx]
                            }],
                            "grid-cols": [{
                                "grid-cols": [nT]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", nw, nx]
                                }, nx]
                            }],
                            "col-start": [{
                                "col-start": A()
                            }],
                            "col-end": [{
                                "col-end": A()
                            }],
                            "grid-rows": [{
                                "grid-rows": [nT]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [nw, nx]
                                }, nx]
                            }],
                            "row-start": [{
                                "row-start": A()
                            }],
                            "row-end": [{
                                "row-end": A()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", nx]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", nx]
                            }],
                            gap: [{
                                gap: [p]
                            }],
                            "gap-x": [{
                                "gap-x": [p]
                            }],
                            "gap-y": [{
                                "gap-y": [p]
                            }],
                            "justify-content": [{
                                justify: ["normal", ...R()]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", ...R(), "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": [...R(), "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [w]
                            }],
                            px: [{
                                px: [w]
                            }],
                            py: [{
                                py: [w]
                            }],
                            ps: [{
                                ps: [w]
                            }],
                            pe: [{
                                pe: [w]
                            }],
                            pt: [{
                                pt: [w]
                            }],
                            pr: [{
                                pr: [w]
                            }],
                            pb: [{
                                pb: [w]
                            }],
                            pl: [{
                                pl: [w]
                            }],
                            m: [{
                                m: [g]
                            }],
                            mx: [{
                                mx: [g]
                            }],
                            my: [{
                                my: [g]
                            }],
                            ms: [{
                                ms: [g]
                            }],
                            me: [{
                                me: [g]
                            }],
                            mt: [{
                                mt: [g]
                            }],
                            mr: [{
                                mr: [g]
                            }],
                            mb: [{
                                mb: [g]
                            }],
                            ml: [{
                                ml: [g]
                            }],
                            "space-x": [{
                                "space-x": [_]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [_]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", nx, t]
                            }],
                            "min-w": [{
                                "min-w": [nx, t, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [nx, t, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [ny]
                                }, ny]
                            }],
                            h: [{
                                h: [nx, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [nx, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [nx, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [nx, t, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", ny, nf]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", nv]
                            }],
                            "font-family": [{
                                font: [nT]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", nx]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", ng, nv]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", nm, nx]
                            }],
                            "list-image": [{
                                "list-image": ["none", nx]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", nx]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [e]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [v]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [e]
                            }],
                            "text-opacity": [{
                                "text-opacity": [v]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: [...F(), "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", nm, nf]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", nm, nx]
                            }],
                            "text-decoration-color": [{
                                decoration: [e]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: T()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", nx]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", nx]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [v]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: [...M(), nN]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", n_]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, nC]
                            }],
                            "bg-color": [{
                                bg: [e]
                            }],
                            "gradient-from-pos": [{
                                from: [m]
                            }],
                            "gradient-via-pos": [{
                                via: [m]
                            }],
                            "gradient-to-pos": [{
                                to: [m]
                            }],
                            "gradient-from": [{
                                from: [h]
                            }],
                            "gradient-via": [{
                                via: [h]
                            }],
                            "gradient-to": [{
                                to: [h]
                            }],
                            rounded: [{
                                rounded: [o]
                            }],
                            "rounded-s": [{
                                "rounded-s": [o]
                            }],
                            "rounded-e": [{
                                "rounded-e": [o]
                            }],
                            "rounded-t": [{
                                "rounded-t": [o]
                            }],
                            "rounded-r": [{
                                "rounded-r": [o]
                            }],
                            "rounded-b": [{
                                "rounded-b": [o]
                            }],
                            "rounded-l": [{
                                "rounded-l": [o]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [o]
                            }],
                            "rounded-se": [{
                                "rounded-se": [o]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [o]
                            }],
                            "rounded-es": [{
                                "rounded-es": [o]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [o]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [o]
                            }],
                            "rounded-br": [{
                                "rounded-br": [o]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [o]
                            }],
                            "border-w": [{
                                border: [l]
                            }],
                            "border-w-x": [{
                                "border-x": [l]
                            }],
                            "border-w-y": [{
                                "border-y": [l]
                            }],
                            "border-w-s": [{
                                "border-s": [l]
                            }],
                            "border-w-e": [{
                                "border-e": [l]
                            }],
                            "border-w-t": [{
                                "border-t": [l]
                            }],
                            "border-w-r": [{
                                "border-r": [l]
                            }],
                            "border-w-b": [{
                                "border-b": [l]
                            }],
                            "border-w-l": [{
                                "border-l": [l]
                            }],
                            "border-opacity": [{
                                "border-opacity": [v]
                            }],
                            "border-style": [{
                                border: [...F(), "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [l]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [l]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [v]
                            }],
                            "divide-style": [{
                                divide: F()
                            }],
                            "border-color": [{
                                border: [i]
                            }],
                            "border-color-x": [{
                                "border-x": [i]
                            }],
                            "border-color-y": [{
                                "border-y": [i]
                            }],
                            "border-color-s": [{
                                "border-s": [i]
                            }],
                            "border-color-e": [{
                                "border-e": [i]
                            }],
                            "border-color-t": [{
                                "border-t": [i]
                            }],
                            "border-color-r": [{
                                "border-r": [i]
                            }],
                            "border-color-b": [{
                                "border-b": [i]
                            }],
                            "border-color-l": [{
                                "border-l": [i]
                            }],
                            "divide-color": [{
                                divide: [i]
                            }],
                            "outline-style": [{
                                outline: ["", ...F()]
                            }],
                            "outline-offset": [{
                                "outline-offset": [nm, nx]
                            }],
                            "outline-w": [{
                                outline: [nm, nf]
                            }],
                            "outline-color": [{
                                outline: [e]
                            }],
                            "ring-w": [{
                                ring: E()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [e]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [v]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [nm, nf]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [e]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", ny, nz]
                            }],
                            "shadow-color": [{
                                shadow: [nT]
                            }],
                            opacity: [{
                                opacity: [v]
                            }],
                            "mix-blend": [{
                                "mix-blend": [...$(), "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": $()
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [n]
                            }],
                            brightness: [{
                                brightness: [r]
                            }],
                            contrast: [{
                                contrast: [s]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", ny, nx]
                            }],
                            grayscale: [{
                                grayscale: [c]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [d]
                            }],
                            invert: [{
                                invert: [u]
                            }],
                            saturate: [{
                                saturate: [b]
                            }],
                            sepia: [{
                                sepia: [y]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [n]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [r]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [s]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [c]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [d]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [u]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [v]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [b]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [y]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [a]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [a]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [a]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", nx]
                            }],
                            duration: [{
                                duration: j()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", nx]
                            }],
                            delay: [{
                                delay: j()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", nx]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [x]
                            }],
                            "scale-x": [{
                                "scale-x": [x]
                            }],
                            "scale-y": [{
                                "scale-y": [x]
                            }],
                            rotate: [{
                                rotate: [nw, nx]
                            }],
                            "translate-x": [{
                                "translate-x": [N]
                            }],
                            "translate-y": [{
                                "translate-y": [N]
                            }],
                            "skew-x": [{
                                "skew-x": [k]
                            }],
                            "skew-y": [{
                                "skew-y": [k]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", nx]
                            }],
                            accent: [{
                                accent: ["auto", e]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", nx]
                            }],
                            "caret-color": [{
                                caret: [e]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": T()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": T()
                            }],
                            "scroll-my": [{
                                "scroll-my": T()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": T()
                            }],
                            "scroll-me": [{
                                "scroll-me": T()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": T()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": T()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": T()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": T()
                            }],
                            "scroll-p": [{
                                "scroll-p": T()
                            }],
                            "scroll-px": [{
                                "scroll-px": T()
                            }],
                            "scroll-py": [{
                                "scroll-py": T()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": T()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": T()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": T()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": T()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": T()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": T()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", nx]
                            }],
                            fill: [{
                                fill: [e, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [nm, nf, nv]
                            }],
                            stroke: [{
                                stroke: [e, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                }),
                nD = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return nR(function() {
                        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
                            var n, r, i = "";
                            if ("string" == typeof t || "number" == typeof t) i += t;
                            else if ("object" == typeof t)
                                if (Array.isArray(t)) {
                                    var o = t.length;
                                    for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
                                } else
                                    for (r in t) t[r] && (i && (i += " "), i += r);
                            return i
                        }(e)) && (r && (r += " "), r += t);
                        return r
                    }(t))
                };
            "undefined" != typeof navigator && navigator.userAgent.includes("Firefox");
            var nP = (e, t) => {
                    let n = 0;
                    return r => {
                        let i = Date.now();
                        if (i - n >= t) return n = i, e(r)
                    }
                },
                nj = e => {
                    if (!t5) return null;
                    try {
                        let t = localStorage.getItem(e);
                        return t ? JSON.parse(t) : null
                    } catch {
                        return null
                    }
                },
                nI = (e, t) => {
                    if (t5) try {
                        window.localStorage.setItem(e, JSON.stringify(t))
                    } catch {}
                },
                nL = e => {
                    if (t5) try {
                        window.localStorage.removeItem(e)
                    } catch {}
                },
                nO = e => {
                    if (!e) return {
                        name: "Unknown",
                        wrappers: [],
                        wrapperTypes: []
                    };
                    let {
                        tag: t,
                        type: n,
                        elementType: r
                    } = e, i = T(n), o = [], a = [];
                    if (C(e) || 15 === t || 14 === t || (null == n ? void 0 : n.$$typeof) === Symbol.for("react.memo") || (null == r ? void 0 : r.$$typeof) === Symbol.for("react.memo")) {
                        let t = C(e);
                        a.push({
                            type: "memo",
                            title: t ? "This component has been auto-memoized by the React Compiler." : "Memoized component that skips re-renders if props are the same",
                            compiler: t
                        })
                    }
                    if (24 === t && a.push({
                            type: "lazy",
                            title: "Lazily loaded component that supports code splitting"
                        }), 13 === t && a.push({
                            type: "suspense",
                            title: "Component that can suspend while content is loading"
                        }), 12 === t && a.push({
                            type: "profiler",
                            title: "Component that measures rendering performance"
                        }), "string" == typeof i) {
                        let e = /^(\w+)\((.*)\)$/,
                            t = i;
                        for (; e.test(t);) {
                            let n = t.match(e);
                            if ((null == n ? void 0 : n[1]) && (null == n ? void 0 : n[2])) o.unshift(n[1]), t = n[2];
                            else break
                        }
                        i = t
                    }
                    return {
                        name: i || "Unknown",
                        wrappers: o,
                        wrapperTypes: a
                    }
                },
                nU = tn(!1),
                nW = tn(null),
                nH = {
                    corner: "bottom-right",
                    dimensions: {
                        isFullWidth: !1,
                        isFullHeight: !1,
                        width: 550,
                        height: 350,
                        position: {
                            x: 24,
                            y: 24
                        }
                    },
                    lastDimensions: {
                        isFullWidth: !1,
                        isFullHeight: !1,
                        width: 550,
                        height: 350,
                        position: {
                            x: 24,
                            y: 24
                        }
                    },
                    componentsTree: {
                        width: 240
                    }
                },
                nY = tn((i = nj(t1)) ? {
                    corner: i.corner ?? nH.corner,
                    dimensions: i.dimensions ?? nH.dimensions,
                    lastDimensions: i.lastDimensions ?? i.dimensions ?? nH.lastDimensions,
                    componentsTree: i.componentsTree ?? nH.componentsTree
                } : (nI(t1, {
                    corner: nH.corner,
                    dimensions: nH.dimensions,
                    lastDimensions: nH.lastDimensions,
                    componentsTree: nH.componentsTree
                }), nH)),
                nX = () => {
                    if (!t5) return;
                    let {
                        dimensions: e
                    } = nY.value, {
                        width: t,
                        height: n,
                        position: r
                    } = e;
                    nY.value = {
                        ...nY.value,
                        dimensions: {
                            isFullWidth: t >= window.innerWidth - 48,
                            isFullHeight: n >= window.innerHeight - 48,
                            width: t,
                            height: n,
                            position: r
                        }
                    }
                },
                nB = tn({
                    view: "none"
                }),
                nV = tn(nj(t2) ?? null);

            function nq() {
                return !1
            }

            function nJ(e) {
                function t(t) {
                    return this.shouldComponentUpdate = nq, eu(e, t)
                }
                return t.displayName = `Memo(${e.displayName||e.name})`, t.prototype.isReactComponent = !0, t._forwarded = !0, t
            }
            nj("react-scann-pinned");
            var nG = new WeakMap,
                nK = {
                    activeFlashes: new Map,
                    create(e) {
                        let t, n, r, i = e.querySelector(".react-scan-flash-overlay"),
                            o = i instanceof HTMLElement ? i : ((t = document.createElement("div")).className = "react-scan-flash-overlay", e.appendChild(t), n = (() => {
                                e.querySelector(".react-scan-flash-overlay") && this.create(e)
                            }).bind(null, e), document.addEventListener("scroll", n, {
                                passive: !0,
                                capture: !0
                            }), r = () => {
                                document.removeEventListener("scroll", n, {
                                    capture: !0
                                })
                            }, this.activeFlashes.set(e, {
                                element: e,
                                overlay: t,
                                scrollCleanup: r
                            }), t),
                            a = nG.get(o);
                        a && (clearTimeout(a), nG.delete(o)), requestAnimationFrame(() => {
                            o.style.transition = "none", o.style.opacity = "0.9";
                            let t = setTimeout(() => {
                                o.style.transition = "opacity 150ms ease-out", o.style.opacity = "0";
                                let t = setTimeout(() => {
                                    o.parentNode && o.parentNode.removeChild(o);
                                    let t = this.activeFlashes.get(e);
                                    (null == t ? void 0 : t.scrollCleanup) && t.scrollCleanup(), this.activeFlashes.delete(e), nG.delete(o)
                                }, 150);
                                nG.set(o, t)
                            }, 300);
                            nG.set(o, t)
                        })
                    },
                    cleanup(e) {
                        let t = this.activeFlashes.get(e);
                        if (t) {
                            let n = nG.get(t.overlay);
                            n && (clearTimeout(n), nG.delete(t.overlay)), t.overlay.parentNode && t.overlay.parentNode.removeChild(t.overlay), t.scrollCleanup && t.scrollCleanup(), this.activeFlashes.delete(e)
                        }
                    },
                    cleanupAll() {
                        for (let [, e] of this.activeFlashes) this.cleanup(e.element)
                    }
                },
                nZ = {
                    updates: [],
                    currentFiber: null,
                    totalUpdates: 0,
                    windowOffset: 0,
                    currentIndex: 0,
                    isViewingHistory: !1,
                    latestFiber: null,
                    isVisible: !1,
                    playbackSpeed: 1
                },
                nQ = tn(nZ),
                n0 = tn(0),
                n1 = [],
                n2 = null,
                n4 = tn({
                    query: "",
                    matches: [],
                    currentMatchIndex: -1
                }),
                n5 = tn(!1),
                n3 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return e.reduce((e, r, i) => {
                        var o, a;
                        let l = r.element ? (e => {
                                let t = [],
                                    n = e;
                                for (; n;) {
                                    let e = n.elementType,
                                        r = "function" == typeof e ? e.displayName || e.name : "string" == typeof e ? e : "Unknown",
                                        i = void 0 !== n.index ? `[${n.index}]` : "";
                                    t.unshift(`${r}${i}`), n = n.return ?? null
                                }
                                return t.join("::")
                            })(r.fiber) : `${n}-${i}`,
                            s = (null == (o = r.fiber) ? void 0 : o.type) ? ip(r.fiber) : void 0,
                            c = {
                                ...r,
                                depth: t,
                                nodeId: l,
                                parentId: n,
                                fiber: r.fiber,
                                renderData: s
                            };
                        return e.push(c), (null == (a = r.children) ? void 0 : a.length) && e.push(...n3(r.children, t + 1, l)), e
                    }, [])
                },
                n6 = ["memo", "forwardRef", "lazy", "suspense"],
                n8 = e => {
                    let t = e.match(/\[(.*?)\]/);
                    if (!t) return null;
                    let n = [];
                    for (let e of t[1].split(",")) {
                        let t = e.trim().toLowerCase();
                        t && n.push(t)
                    }
                    return n
                },
                n7 = (e, t) => {
                    if (0 === e.length) return !0;
                    if (!t.length) return !1;
                    for (let n of e) {
                        let e = !1;
                        for (let r of t)
                            if (r.type.toLowerCase().includes(n)) {
                                e = !0;
                                break
                            } if (!e) return !1
                    }
                    return !0
                },
                n9 = e => e > 0 ? e < .1 - Number.EPSILON ? "< 0.1" : e < 1e3 ? Number(e.toFixed(1)).toString() : `${(e/1e3).toFixed(1)}k` : "0",
                re = e => {
                    var t, n;
                    let {
                        node: r,
                        nodeIndex: i,
                        hasChildren: o,
                        isCollapsed: a,
                        handleTreeNodeClick: l,
                        handleTreeNodeToggle: s,
                        searchValue: c
                    } = e, d = eB(null), u = eB((null == (t = r.renderData) ? void 0 : t.renderCount) ?? 0), {
                        highlightedText: p,
                        typeHighlight: h
                    } = eV(() => {
                        let {
                            query: e,
                            matches: t
                        } = c, n = t.some(e => e.nodeId === r.nodeId), i = n8(e) || [], o = e ? e.replace(/\[.*?\]/, "").trim() : "";
                        if (!e || !n) return {
                            highlightedText: tq("span", {
                                className: "truncate",
                                children: r.label
                            }),
                            typeHighlight: !1
                        };
                        let a = !0;
                        if (i.length > 0)
                            if (r.fiber) {
                                let {
                                    wrapperTypes: e
                                } = nO(r.fiber);
                                a = n7(i, e)
                            } else a = !1;
                        let l = tq("span", {
                            className: "truncate",
                            children: r.label
                        });
                        if (o) try {
                            if (o.startsWith("/") && o.endsWith("/")) {
                                let e = o.slice(1, -1),
                                    t = RegExp(`(${e})`, "i"),
                                    n = r.label.split(t);
                                l = tq("span", {
                                    className: "tree-node-search-highlight",
                                    children: n.map((e, i) => t.test(e) ? tq("span", {
                                        className: nD("regex", {
                                            start: t.test(e) && 0 === i,
                                            middle: t.test(e) && i % 2 == 1,
                                            end: t.test(e) && i === n.length - 1,
                                            "!ml-0": 1 === i
                                        }),
                                        children: e
                                    }, `${r.nodeId}-${e}`) : e)
                                })
                            } else {
                                let e = r.label.toLowerCase(),
                                    t = o.toLowerCase(),
                                    n = e.indexOf(t);
                                n >= 0 && (l = tq("span", {
                                    className: "tree-node-search-highlight",
                                    children: [r.label.slice(0, n), tq("span", {
                                        className: "single",
                                        children: r.label.slice(n, n + o.length)
                                    }), r.label.slice(n + o.length)]
                                }))
                            }
                        } catch {}
                        return {
                            highlightedText: l,
                            typeHighlight: a && i.length > 0
                        }
                    }, [r.label, r.nodeId, r.fiber, c]);
                    eY(() => {
                        var e;
                        let t = null == (e = r.renderData) ? void 0 : e.renderCount,
                            n = d.current;
                        n && u.current && t && u.current !== t && (n.classList.remove("count-flash"), n.offsetWidth, n.classList.add("count-flash"), u.current = t)
                    }, [null == (n = r.renderData) ? void 0 : n.renderCount]);
                    let m = eV(() => {
                            if (!r.renderData) return null;
                            let {
                                selfTime: e,
                                totalTime: t,
                                renderCount: n
                            } = r.renderData;
                            return n ? tq("span", {
                                className: nD("flex items-center gap-x-0.5 ml-1.5", "text-[10px] text-neutral-400"),
                                children: tq("span", {
                                    ref: d,
                                    title: `Self time: ${n9(e)}ms
Total time: ${n9(t)}ms`,
                                    className: "count-badge",
                                    children: ["\xd7", n]
                                })
                            }) : null
                        }, [r.renderData]),
                        f = eV(() => {
                            if (!r.fiber) return null;
                            let {
                                wrapperTypes: e
                            } = nO(r.fiber), t = e[0];
                            return tq("span", {
                                className: nD("flex items-center gap-x-1", "text-[10px] text-neutral-400 tracking-wide", "overflow-hidden"),
                                children: [t && tq(eh, {
                                    children: [tq("span", {
                                        title: null == t ? void 0 : t.title,
                                        className: nD("rounded py-[1px] px-1", "bg-neutral-700 text-neutral-300", "truncate", "memo" === t.type && "bg-[#8e61e3] text-white", h && "bg-yellow-300 text-black"),
                                        children: t.type
                                    }, t.type), t.compiler && tq("span", {
                                        className: "text-yellow-300 ml-1",
                                        children: "✨"
                                    })]
                                }), e.length > 1 && `\xd7${e.length}`, m]
                            })
                        }, [r.fiber, h, m]);
                    return tq("button", {
                        type: "button",
                        title: r.title,
                        "data-index": i,
                        className: nD("flex items-center gap-x-1", "pl-1 pr-2", "w-full h-7", "text-left", "rounded", "cursor-pointer select-none"),
                        onClick: l,
                        children: [tq("button", {
                            type: "button",
                            "data-index": i,
                            onClick: s,
                            className: nD("w-6 h-6 flex items-center justify-center", "text-left"),
                            children: o && tq(t0, {
                                name: "icon-chevron-right",
                                size: 12,
                                className: nD("transition-transform", !a && "rotate-90")
                            })
                        }), p, f]
                    })
                },
                rt = () => {
                    let e = eB(null),
                        t = eB(null),
                        n = eB(null),
                        r = eB(null),
                        i = eB(null),
                        o = eB(0),
                        a = eB(!1),
                        l = eB(!1),
                        s = eB(null),
                        [c, d] = eH([]),
                        [u, p] = eH(new Set),
                        [h, m] = eH(void 0),
                        [f, g] = eH(n4.value),
                        v = eV(() => {
                            let e = [],
                                t = new Map(c.map(e => [e.nodeId, e]));
                            for (let n of c) {
                                let r = !0,
                                    i = n;
                                for (; i.parentId;) {
                                    let e = t.get(i.parentId);
                                    if (!e) break;
                                    if (u.has(e.nodeId)) {
                                        r = !1;
                                        break
                                    }
                                    i = e
                                }
                                r && e.push(n)
                            }
                            return e
                        }, [u, c]),
                        {
                            virtualItems: w,
                            totalSize: b
                        } = (e => {
                            let {
                                count: t,
                                getScrollElement: n,
                                estimateSize: r,
                                overscan: i = 5
                            } = e, [o, a] = eH(0), [l, s] = eH(0), c = eB(), d = eB(null), u = eB(null), p = r(), h = eq(e => {
                                var t;
                                d.current && s((null == e || null == (t = e[0]) ? void 0 : t.contentRect.height) ?? d.current.getBoundingClientRect().height)
                            }, []), m = eq(() => {
                                null !== u.current && cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
                                    h(), u.current = null
                                })
                            }, [h]);
                            eY(() => {
                                let e = n();
                                if (!e) return;
                                d.current = e;
                                let t = () => {
                                    d.current && a(d.current.scrollTop)
                                };
                                h(), c.current || (c.current = new ResizeObserver(() => {
                                    m()
                                })), c.current.observe(e), e.addEventListener("scroll", t, {
                                    passive: !0
                                });
                                let r = new MutationObserver(m);
                                return r.observe(e, {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0
                                }), () => {
                                    e.removeEventListener("scroll", t), c.current && c.current.disconnect(), r.disconnect(), null !== u.current && cancelAnimationFrame(u.current)
                                }
                            }, [n, h, m]);
                            let f = eV(() => {
                                let e = Math.floor(o / p);
                                return {
                                    start: Math.max(0, e - i),
                                    end: Math.min(t, e + Math.ceil(l / p) + i)
                                }
                            }, [o, p, l, t, i]);
                            return {
                                virtualItems: eV(() => {
                                    let e = [];
                                    for (let t = f.start; t < f.end; t++) e.push({
                                        key: t,
                                        index: t,
                                        start: t * p
                                    });
                                    return e
                                }, [f, p]),
                                totalSize: t * p,
                                scrollTop: o,
                                containerHeight: l
                            }
                        })({
                            count: v.length,
                            getScrollElement: () => e.current,
                            estimateSize: () => 28,
                            overscan: 5
                        }),
                        x = eq(t => {
                            var n;
                            a.current = !0, null == (n = r.current) || n.blur(), n5.value = !0;
                            let {
                                parentCompositeFiber: i
                            } = rM(t);
                            if (!i) return;
                            az.inspectState.value = {
                                kind: "focused",
                                focusedDomElement: t,
                                fiber: i
                            };
                            let o = v.findIndex(e => e.element === t);
                            if (-1 !== o) {
                                m(o);
                                let t = 28 * o,
                                    n = e.current;
                                if (n) {
                                    let e = n.clientHeight,
                                        r = n.scrollTop;
                                    (t < r || t + 28 > r + e) && n.scrollTo({
                                        top: Math.max(0, t - e / 2),
                                        behavior: "instant"
                                    })
                                }
                            }
                        }, [v]),
                        y = eq(e => {
                            let t = Number(e.currentTarget.dataset.index);
                            if (Number.isNaN(t)) return;
                            let n = v[t].element;
                            n && x(n)
                        }, [v, x]),
                        k = eq(e => {
                            p(t => {
                                let n = new Set(t);
                                return n.has(e) ? n.delete(e) : n.add(e), n
                            })
                        }, []),
                        _ = eq(e => {
                            e.stopPropagation();
                            let t = Number(e.target.dataset.index);
                            Number.isNaN(t) || k(v[t].nodeId)
                        }, [v, k]),
                        N = eq(t => {
                            var r, i, o, a, l;
                            null == (r = n.current) || r.classList.remove("!border-red-500");
                            let s = [];
                            if (!t) {
                                n4.value = {
                                    query: t,
                                    matches: s,
                                    currentMatchIndex: -1
                                };
                                return
                            }
                            if (t.includes("[") && !t.includes("]") && t.length > t.indexOf("[") + 1) {
                                null == (i = n.current) || i.classList.add("!border-red-500");
                                return
                            }
                            let d = n8(t) || [];
                            if (t.includes("[") && !(e => {
                                    if (0 === e.length) return !1;
                                    for (let t of e) {
                                        let e = !1;
                                        for (let n of n6)
                                            if (n.toLowerCase().includes(t)) {
                                                e = !0;
                                                break
                                            } if (!e) return !1
                                    }
                                    return !0
                                })(d)) {
                                null == (o = n.current) || o.classList.add("!border-red-500");
                                return
                            }
                            let u = t.replace(/\[.*?\]/, "").trim(),
                                p = /^\/.*\/$/.test(u),
                                h = e => !1;
                            if (u.startsWith("/") && !p && u.length > 1) {
                                null == (a = n.current) || a.classList.add("!border-red-500");
                                return
                            }
                            if (p) try {
                                let e = u.slice(1, -1),
                                    t = RegExp(e, "i");
                                h = e => t.test(e)
                            } catch {
                                null == (l = n.current) || l.classList.add("!border-red-500");
                                return
                            } else if (u) {
                                let e = u.toLowerCase();
                                h = t => t.toLowerCase().includes(e)
                            } for (let e of c) {
                                let t = !0;
                                if (u && (t = h(e.label)), t && d.length > 0)
                                    if (e.fiber) {
                                        let {
                                            wrapperTypes: n
                                        } = nO(e.fiber);
                                        t = n7(d, n)
                                    } else t = !1;
                                t && s.push(e)
                            }
                            if (n4.value = {
                                    query: t,
                                    matches: s,
                                    currentMatchIndex: s.length > 0 ? 0 : -1
                                }, s.length > 0) {
                                let t = s[0],
                                    n = v.findIndex(e => e.nodeId === t.nodeId);
                                if (-1 !== n) {
                                    let t = e.current;
                                    if (t) {
                                        let e = t.clientHeight;
                                        t.scrollTo({
                                            top: Math.max(0, 28 * n - e / 2),
                                            behavior: "instant"
                                        })
                                    }
                                }
                            }
                        }, [c, v]),
                        S = eq(e => {
                            let t = e.currentTarget;
                            t && N(t.value)
                        }, [N]),
                        C = eq(t => {
                            let {
                                matches: n,
                                currentMatchIndex: r
                            } = n4.value;
                            if (0 === n.length) return;
                            let i = "next" === t ? (r + 1) % n.length : (r - 1 + n.length) % n.length;
                            n4.value = {
                                ...n4.value,
                                currentMatchIndex: i
                            };
                            let o = n[i],
                                a = v.findIndex(e => e.nodeId === o.nodeId);
                            if (-1 !== a) {
                                m(a);
                                let t = 28 * a,
                                    n = e.current;
                                if (n) {
                                    let e = n.clientHeight;
                                    n.scrollTo({
                                        top: Math.max(0, t - e / 2),
                                        behavior: "instant"
                                    })
                                }
                            }
                        }, [v]),
                        z = eq(n => {
                            if (t.current && (t.current.style.width = `${n}px`), e.current) {
                                e.current.style.width = `${n}px`;
                                let t = ((e, t) => {
                                    if (t <= 0) return 24;
                                    let n = Math.max(0, e - 240);
                                    return n < 24 ? 0 : Math.max(0, Math.min(24, Math.min(.3 * n, 24 * t) / t))
                                })(n, o.current);
                                e.current.style.setProperty("--indentation-size", `${t}px`)
                            }
                        }, []),
                        T = eq(e => {
                            if (!s.current) return;
                            let t = Math.floor(nY.value.dimensions.width - 120);
                            s.current.classList.remove("cursor-ew-resize", "cursor-w-resize", "cursor-e-resize"), e <= 240 ? s.current.classList.add("cursor-w-resize") : e >= t ? s.current.classList.add("cursor-e-resize") : s.current.classList.add("cursor-ew-resize")
                        }, []),
                        E = eq(t => {
                            if (t.preventDefault(), t.stopPropagation(), !e.current) return;
                            e.current.style.setProperty("pointer-events", "none"), l.current = !0;
                            let n = t.clientX,
                                r = e.current.offsetWidth,
                                i = Math.floor(nY.value.dimensions.width - 120);
                            T(r);
                            let o = e => {
                                    let t = r + (n - e.clientX);
                                    T(t), z(Math.min(i, Math.max(240, t)))
                                },
                                a = () => {
                                    e.current && (e.current.style.removeProperty("pointer-events"), document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", a), nY.value = {
                                        ...nY.value,
                                        componentsTree: {
                                            ...nY.value.componentsTree,
                                            width: e.current.offsetWidth
                                        }
                                    }, nI(t1, nY.value), l.current = !1)
                                };
                            document.addEventListener("pointermove", o), document.addEventListener("pointerup", a)
                        }, [z, T]);
                    eY(() => {
                        if (e.current) return T(e.current.offsetWidth), nY.subscribe(() => {
                            e.current && T(e.current.offsetWidth)
                        })
                    }, [T]);
                    let A = eq(() => {
                        a.current = !1
                    }, []);
                    return eY(() => {
                        let t = !0,
                            n = () => {
                                let n = i.current;
                                if (!n) return;
                                let r = (e => {
                                    let t = new Map,
                                        n = [];
                                    for (let {
                                            element: n,
                                            name: r,
                                            fiber: i
                                        }
                                        of e) {
                                        if (!n) continue;
                                        let e = r,
                                            {
                                                name: o,
                                                wrappers: a
                                            } = nO(i);
                                        o && (e = a.length > 0 ? `${a.join("(")}(${o})${")".repeat(a.length)}` : o), t.set(n, {
                                            label: o || r,
                                            title: e,
                                            children: [],
                                            element: n,
                                            fiber: i
                                        })
                                    }
                                    for (let {
                                            element: r,
                                            depth: i
                                        }
                                        of e) {
                                        if (!r) continue;
                                        let e = t.get(r);
                                        if (e)
                                            if (0 === i) n.push(e);
                                            else {
                                                let n = r.parentElement;
                                                for (; n;) {
                                                    let r = t.get(n);
                                                    if (r) {
                                                        r.children = r.children || [], r.children.push(e);
                                                        break
                                                    }
                                                    n = n.parentElement
                                                }
                                            }
                                    }
                                    return n
                                })(rP());
                                if (r.length > 0) {
                                    let i = n3(r);
                                    if (o.current = i.reduce((e, t) => Math.max(e, t.depth), 0), z(nY.value.componentsTree.width), d(i), t) {
                                        t = !1;
                                        let r = i.findIndex(e => e.element === n);
                                        if (-1 !== r) {
                                            let t = 28 * r,
                                                n = e.current;
                                            n && setTimeout(() => {
                                                n.scrollTo({
                                                    top: t,
                                                    behavior: "instant"
                                                })
                                            }, 96)
                                        }
                                    }
                                }
                            },
                            r = az.inspectState.subscribe(e => {
                                "focused" === e.kind && (n5.value || (N(""), i.current = e.focusedDomElement, n()))
                            }),
                            a = 0,
                            s = n0.subscribe(() => {
                                "focused" === az.inspectState.value.kind && (cancelAnimationFrame(a), l.current || (a = requestAnimationFrame(() => {
                                    n5.value = !1, n()
                                })))
                            });
                        return () => {
                            r(), s(), n4.value = {
                                query: "",
                                matches: [],
                                currentMatchIndex: -1
                            }
                        }
                    }, []), eY(() => {
                        let e = e => {
                            if (a.current && h) switch (e.key) {
                                case "ArrowUp":
                                    if (e.preventDefault(), e.stopPropagation(), h > 0) {
                                        let e = v[h - 1];
                                        (null == e ? void 0 : e.element) && x(e.element)
                                    }
                                    return;
                                case "ArrowDown":
                                    if (e.preventDefault(), e.stopPropagation(), h < v.length - 1) {
                                        let e = v[h + 1];
                                        (null == e ? void 0 : e.element) && x(e.element)
                                    }
                                    return;
                                case "ArrowLeft":
                                case "ArrowRight": {
                                    e.preventDefault(), e.stopPropagation();
                                    let t = v[h];
                                    (null == t ? void 0 : t.nodeId) && k(t.nodeId);
                                    return
                                }
                            }
                        };
                        return document.addEventListener("keydown", e), () => {
                            document.removeEventListener("keydown", e)
                        }
                    }, [h, v, x, k]), eY(() => n4.subscribe(g), []), eY(() => nY.subscribe(e => {
                        var n;
                        null == (n = t.current) || n.style.setProperty("transition", "width 0.1s"), z(e.componentsTree.width), setTimeout(() => {
                            var e;
                            null == (e = t.current) || e.style.removeProperty("transition")
                        }, 500)
                    }), []), tq("div", {
                        className: "react-scan-components-tree flex",
                        children: [tq("div", {
                            ref: s,
                            onPointerDown: E,
                            className: "relative resize-v-line",
                            children: tq("span", {
                                children: tq(t0, {
                                    name: "icon-ellipsis",
                                    size: 18
                                })
                            })
                        }), tq("div", {
                            ref: t,
                            className: "flex flex-col h-full",
                            children: [tq("div", {
                                className: "p-2 border-b border-[#1e1e1e]",
                                children: tq("div", {
                                    ref: n,
                                    title: `Search components by:

\u2022 Name (e.g., "Button") \u2014 Case insensitive, matches any part

\u2022 Regular Expression (e.g., "/^Button/") \u2014 Use forward slashes

\u2022 Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

\u2022 Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

\u2022 Navigation:
   - Enter \u2192 Next match
   - Shift + Enter \u2192 Previous match
   - Cmd/Ctrl + Enter \u2192 Select and focus match
`,
                                    className: nD("relative", "flex items-center gap-x-1 px-2", "rounded", "border border-transparent", "focus-within:border-[#454545]", "bg-[#1e1e1e] text-neutral-300", "transition-colors", "whitespace-nowrap", "overflow-hidden"),
                                    children: [tq(t0, {
                                        name: "icon-search",
                                        size: 12,
                                        className: " text-neutral-500"
                                    }), tq("div", {
                                        className: "relative flex-1 h-7 overflow-hidden",
                                        children: tq("input", {
                                            ref: r,
                                            type: "text",
                                            value: n4.value.query,
                                            onClick: e => {
                                                e.stopPropagation(), e.currentTarget.focus()
                                            },
                                            onPointerDown: e => {
                                                e.stopPropagation()
                                            },
                                            onKeyDown: e => {
                                                "Escape" === e.key && e.currentTarget.blur(), n4.value.matches.length && ("Enter" === e.key && e.shiftKey ? C("prev") : "Enter" === e.key && (e.metaKey || e.ctrlKey ? (e.preventDefault(), e.stopPropagation(), x(n4.value.matches[n4.value.currentMatchIndex].element), e.currentTarget.focus()) : C("next")))
                                            },
                                            onChange: S,
                                            className: "absolute inset-y-0 inset-x-1",
                                            placeholder: "Component name, /regex/, or [type]"
                                        })
                                    }), n4.value.query ? tq(eh, {
                                        children: [tq("span", {
                                            className: "flex items-center gap-x-0.5 text-xs text-neutral-500",
                                            children: [n4.value.currentMatchIndex + 1, "|", n4.value.matches.length]
                                        }), !!n4.value.matches.length && tq(eh, {
                                            children: [tq("button", {
                                                type: "button",
                                                onClick: e => {
                                                    e.stopPropagation(), C("prev")
                                                },
                                                className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                                children: tq(t0, {
                                                    name: "icon-chevron-right",
                                                    className: "-rotate-90",
                                                    size: 12
                                                })
                                            }), tq("button", {
                                                type: "button",
                                                onClick: e => {
                                                    e.stopPropagation(), C("next")
                                                },
                                                className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                                children: tq(t0, {
                                                    name: "icon-chevron-right",
                                                    className: "rotate-90",
                                                    size: 12
                                                })
                                            })]
                                        }), tq("button", {
                                            type: "button",
                                            onClick: e => {
                                                e.stopPropagation(), N("")
                                            },
                                            className: "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                            children: tq(t0, {
                                                name: "icon-close",
                                                size: 12
                                            })
                                        })]
                                    }) : !!c.length && tq("span", {
                                        className: "text-xs text-neutral-500",
                                        children: c.length
                                    })]
                                })
                            }), tq("div", {
                                className: "flex-1 overflow-hidden",
                                children: tq("div", {
                                    ref: e,
                                    onPointerLeave: A,
                                    className: "tree h-full overflow-auto will-change-transform",
                                    children: tq("div", {
                                        className: "relative w-full",
                                        style: {
                                            height: b
                                        },
                                        children: w.map(e => {
                                            var t;
                                            let n = v[e.index];
                                            if (!n) return null;
                                            let r = "focused" === az.inspectState.value.kind && n.element === az.inspectState.value.focusedDomElement,
                                                i = e.index === h;
                                            return tq("div", {
                                                className: nD("absolute left-0 w-full overflow-hidden", "text-neutral-400 hover:text-neutral-300", "bg-transparent hover:bg-[#5f3f9a]/20", (r || i) && "text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),
                                                style: {
                                                    top: e.start,
                                                    height: 28
                                                },
                                                children: tq("div", {
                                                    className: "w-full h-full",
                                                    style: {
                                                        paddingLeft: `calc(${n.depth} * var(--indentation-size))`
                                                    },
                                                    children: tq(re, {
                                                        node: n,
                                                        nodeIndex: e.index,
                                                        hasChildren: !!(null == (t = n.children) ? void 0 : t.length),
                                                        isCollapsed: u.has(n.nodeId),
                                                        handleTreeNodeClick: y,
                                                        handleTreeNodeToggle: _,
                                                        searchValue: f
                                                    })
                                                })
                                            }, n.nodeId)
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                rn = ty(e => {
                    let {
                        text: t,
                        children: n,
                        onCopy: r,
                        className: i,
                        iconSize: o = 14
                    } = e, [a, l] = eH(!1);
                    eY(() => {
                        if (a) {
                            let e = setTimeout(() => l(!1), 600);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [a]);
                    let s = eq(e => {
                            e.preventDefault(), e.stopPropagation(), navigator.clipboard.writeText(t).then(() => {
                                l(!0), null == r || r(!0, t)
                            }, () => {
                                null == r || r(!1, t)
                            })
                        }, [t, r]),
                        c = tq("button", {
                            onClick: s,
                            type: "button",
                            className: nD("z-10", "flex items-center justify-center", "hover:text-dev-pink-400", "transition-colors duration-200 ease-in-out", "cursor-pointer", `size-[${o}px]`, i),
                            children: tq(t0, {
                                name: `icon-${a?"check":"copy"}`,
                                size: [o],
                                className: nD(a && "text-green-500")
                            })
                        });
                    return n ? n({
                        ClipboardIcon: c,
                        onClick: s
                    }) : c
                }),
                rr = e => {
                    let {
                        length: t,
                        expanded: n,
                        onToggle: r,
                        isNegative: i
                    } = e;
                    return tq("div", {
                        className: "flex items-center gap-1",
                        children: [tq("button", {
                            type: "button",
                            onClick: r,
                            className: "flex items-center p-0 opacity-50",
                            children: tq(t0, {
                                name: "icon-chevron-right",
                                size: 12,
                                className: nD("transition-[color,transform]", i ? "text-[#f87171]" : "text-[#4ade80]", n && "rotate-90")
                            })
                        }), tq("span", {
                            children: ["Array(", t, ")"]
                        })]
                    })
                },
                ri = e => {
                    let {
                        value: t,
                        path: n,
                        isNegative: r
                    } = e, [i, o] = eH(!1);
                    if (null === t || "object" != typeof t || t instanceof Date) return tq("div", {
                        className: "flex items-center gap-1",
                        children: [tq("span", {
                            className: "text-gray-500",
                            children: [n, ":"]
                        }), tq("span", {
                            className: "truncate",
                            children: rU(t)
                        })]
                    });
                    let a = Object.entries(t);
                    return tq("div", {
                        className: "flex flex-col",
                        children: [tq("div", {
                            className: "flex items-center gap-1",
                            children: [tq("button", {
                                type: "button",
                                onClick: () => o(!i),
                                className: "flex items-center p-0 opacity-50",
                                children: tq(t0, {
                                    name: "icon-chevron-right",
                                    size: 12,
                                    className: nD("transition-[color,transform]", r ? "text-[#f87171]" : "text-[#4ade80]", i && "rotate-90")
                                })
                            }), tq("span", {
                                className: "text-gray-500",
                                children: [n, ":"]
                            }), !i && tq("span", {
                                className: "truncate",
                                children: t instanceof Date ? rU(t) : `{${Object.keys(t).join(", ")}}`
                            })]
                        }), i && tq("div", {
                            className: "pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",
                            children: a.map(e => {
                                let [t, n] = e;
                                return tq(ri, {
                                    value: n,
                                    path: t,
                                    isNegative: r
                                }, t)
                            })
                        })]
                    })
                },
                ro = e => {
                    let {
                        value: t,
                        expanded: n,
                        onToggle: r,
                        isNegative: i
                    } = e, {
                        value: o,
                        error: a
                    } = rW(t);
                    return a ? tq("span", {
                        className: "text-gray-500 font-italic",
                        children: a
                    }) : null === o || "object" != typeof o || o instanceof Promise ? tq("span", {
                        children: rU(o)
                    }) : Array.isArray(o) ? tq("div", {
                        className: "flex flex-col gap-1 relative",
                        children: [tq(rr, {
                            length: o.length,
                            expanded: n,
                            onToggle: r,
                            isNegative: i
                        }), n && tq("div", {
                            className: "pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",
                            children: o.map((e, t) => tq(ri, {
                                value: e,
                                path: t.toString(),
                                isNegative: i
                            }, t.toString()))
                        }), tq(rn, {
                            text: rj(o),
                            className: "absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",
                            children: e => {
                                let {
                                    ClipboardIcon: t
                                } = e;
                                return tq(eh, {
                                    children: t
                                })
                            }
                        })]
                    }) : tq("div", {
                        className: "flex items-start gap-1 relative",
                        children: [tq("button", {
                            type: "button",
                            onClick: r,
                            className: nD("flex items-center", "p-0 mt-0.5 mr-1", "opacity-50"),
                            children: tq(t0, {
                                name: "icon-chevron-right",
                                size: 12,
                                className: nD("transition-[color,transform]", i ? "text-[#f87171]" : "text-[#4ade80]", n && "rotate-90")
                            })
                        }), tq("div", {
                            className: "flex-1",
                            children: n ? tq("div", {
                                className: "pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",
                                children: Object.entries(o).map(e => {
                                    let [t, n] = e;
                                    return tq(ri, {
                                        value: n,
                                        path: t,
                                        isNegative: i
                                    }, t)
                                })
                            }) : tq("span", {
                                children: rU(o)
                            })
                        }), tq(rn, {
                            text: rj(o),
                            className: "absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",
                            children: e => {
                                let {
                                    ClipboardIcon: t
                                } = e;
                                return tq(eh, {
                                    children: t
                                })
                            }
                        })]
                    })
                };
            tn({
                fiber: null,
                fiberProps: {
                    current: [],
                    changes: new Set
                },
                fiberState: {
                    current: [],
                    changes: new Set
                },
                fiberContext: {
                    current: [],
                    changes: new Set
                }
            });
            var ra = e => {
                    switch (e.kind) {
                        case "initialized":
                            return e.changes.currentValue;
                        case "partially-initialized":
                            return e.value
                    }
                },
                rl = (e, t) => {
                    for (let n of e) {
                        let e = t.get(n.name);
                        if (e) {
                            t.set(e.name, {
                                count: e.count + 1,
                                currentValue: n.value,
                                id: e.name,
                                lastUpdated: Date.now(),
                                name: e.name,
                                previousValue: n.prevValue
                            });
                            continue
                        }
                        t.set(n.name, {
                            count: 1,
                            currentValue: n.value,
                            id: n.name,
                            lastUpdated: Date.now(),
                            name: n.name,
                            previousValue: n.prevValue
                        })
                    }
                },
                rs = (e, t) => {
                    let n = new Map;
                    return e.forEach((e, t) => {
                        n.set(t, e)
                    }), t.forEach((e, t) => {
                        let r = n.get(t);
                        r ? n.set(t, {
                            count: r.count + e.count,
                            currentValue: e.currentValue,
                            id: e.id,
                            lastUpdated: e.lastUpdated,
                            name: e.name,
                            previousValue: e.previousValue
                        }) : n.set(t, e)
                    }), n
                },
                rc = e => Array.from(e.propsChanges.values()).reduce((e, t) => e + t.count, 0) + Array.from(e.stateChanges.values()).reduce((e, t) => e + t.count, 0) + Array.from(e.contextChanges.values()).filter(e => "initialized" === e.kind).reduce((e, t) => e + t.changes.count, 0),
                rd = e => {
                    if (null == e || "function" == typeof e || "object" != typeof e) return {
                        value: e
                    };
                    if (rH(e)) return {
                        value: "Promise"
                    };
                    try {
                        var t;
                        let n = Object.getPrototypeOf(e);
                        if (n === Promise.prototype || (null == n || null == (t = n.constructor) ? void 0 : t.name) === "Promise") return {
                            value: "Promise"
                        };
                        return {
                            value: e
                        }
                    } catch {
                        return {
                            value: null,
                            error: "Error accessing value"
                        }
                    }
                },
                ru = ty(() => {
                    let [e, t] = eH(!0), n = (e => {
                        let t = eB({
                                queue: []
                            }),
                            [n, r] = eH({
                                propsChanges: new Map,
                                stateChanges: new Map,
                                contextChanges: new Map
                            }),
                            i = "focused" === az.inspectState.value.kind ? az.inspectState.value.fiber : null,
                            o = i ? $(i) : null;
                        return eY(() => {
                            let n = setInterval(() => {
                                0 !== t.current.queue.length && (r(n => {
                                    var r, i;
                                    let o, a, l = (i = t.current.queue, o = {
                                            contextChanges: new Map,
                                            propsChanges: new Map,
                                            stateChanges: new Map
                                        }, i.forEach(e => {
                                            for (let t of e.contextChanges) {
                                                let e = o.contextChanges.get(t.contextType);
                                                if (e) {
                                                    if (tK(ra(e), t.value)) continue;
                                                    if ("partially-initialized" === e.kind) {
                                                        o.contextChanges.set(t.contextType, {
                                                            kind: "initialized",
                                                            changes: {
                                                                count: 1,
                                                                currentValue: t.value,
                                                                id: t.contextType.toString(),
                                                                lastUpdated: Date.now(),
                                                                name: t.name,
                                                                previousValue: e.value
                                                            }
                                                        });
                                                        continue
                                                    }
                                                    o.contextChanges.set(t.contextType, {
                                                        kind: "initialized",
                                                        changes: {
                                                            count: e.changes.count + 1,
                                                            currentValue: t.value,
                                                            id: t.contextType.toString(),
                                                            lastUpdated: Date.now(),
                                                            name: t.name,
                                                            previousValue: e.changes.currentValue
                                                        }
                                                    });
                                                    continue
                                                }
                                                o.contextChanges.set(t.contextType, {
                                                    kind: "partially-initialized",
                                                    id: t.contextType.toString(),
                                                    lastUpdated: Date.now(),
                                                    name: t.name,
                                                    value: t.value
                                                })
                                            }
                                            rl(e.stateChanges, o.stateChanges), rl(e.propsChanges, o.propsChanges)
                                        }), o),
                                        s = (a = new Map, n.contextChanges.forEach((e, t) => {
                                            a.set(t, e)
                                        }), l.contextChanges.forEach((e, t) => {
                                            let n = a.get(t);
                                            if (!n) return void a.set(t, e);
                                            if (ra(e) !== ra(n)) switch (n.kind) {
                                                case "initialized":
                                                    switch (e.kind) {
                                                        case "initialized":
                                                            return void a.set(t, {
                                                                kind: "initialized",
                                                                changes: {
                                                                    ...e.changes,
                                                                    count: e.changes.count + n.changes.count + 1,
                                                                    currentValue: e.changes.currentValue,
                                                                    previousValue: e.changes.previousValue
                                                                }
                                                            });
                                                        case "partially-initialized":
                                                            return void a.set(t, {
                                                                kind: "initialized",
                                                                changes: {
                                                                    count: n.changes.count + 1,
                                                                    currentValue: e.value,
                                                                    id: e.id,
                                                                    lastUpdated: e.lastUpdated,
                                                                    name: e.name,
                                                                    previousValue: n.changes.currentValue
                                                                }
                                                            })
                                                    }
                                                case "partially-initialized":
                                                    switch (e.kind) {
                                                        case "initialized":
                                                            return void a.set(t, {
                                                                kind: "initialized",
                                                                changes: {
                                                                    count: e.changes.count + 1,
                                                                    currentValue: e.changes.currentValue,
                                                                    id: e.changes.id,
                                                                    lastUpdated: e.changes.lastUpdated,
                                                                    name: e.changes.name,
                                                                    previousValue: n.value
                                                                }
                                                            });
                                                        case "partially-initialized":
                                                            return void a.set(t, {
                                                                kind: "initialized",
                                                                changes: {
                                                                    count: 1,
                                                                    currentValue: e.value,
                                                                    id: e.id,
                                                                    lastUpdated: e.lastUpdated,
                                                                    name: e.name,
                                                                    previousValue: n.value
                                                                }
                                                            })
                                                    }
                                            }
                                        }), {
                                            contextChanges: a,
                                            propsChanges: rs(n.propsChanges, l.propsChanges),
                                            stateChanges: rs(n.stateChanges, l.stateChanges)
                                        }),
                                        c = rc(n),
                                        d = rc(s);
                                    return null == e || null == (r = e.onChangeUpdate) || r.call(e, d - c), s
                                }), t.current.queue = [])
                            }, 50);
                            return () => {
                                clearInterval(n)
                            }
                        }, [i]), eY(() => {
                            if (!o) return;
                            let e = e => {
                                    var n;
                                    null == (n = t.current) || n.queue.push(e)
                                },
                                n = az.changesListeners.get(o);
                            return n || (n = [], az.changesListeners.set(o, n)), n.push(e), () => {
                                var n;
                                r({
                                    propsChanges: new Map,
                                    stateChanges: new Map,
                                    contextChanges: new Map
                                }), t.current.queue = [], az.changesListeners.set(o, (null == (n = az.changesListeners.get(o)) ? void 0 : n.filter(t => t !== e)) ?? [])
                            }
                        }, [o]), eY(() => () => {
                            r({
                                propsChanges: new Map,
                                stateChanges: new Map,
                                contextChanges: new Map
                            }), t.current.queue = []
                        }, [o]), n
                    })(), [r, i] = eH(!1), o = rc(n) > 0;
                    eY(() => {
                        if (!r && o) {
                            let e = setTimeout(() => {
                                i(!0), requestAnimationFrame(() => {
                                    t(!0)
                                })
                            }, 0);
                            return () => clearTimeout(e)
                        }
                    }, [r, o]);
                    let a = new Map(Array.from(n.contextChanges.entries()).filter(e => {
                            let [, t] = e;
                            return "initialized" === t.kind
                        }).map(e => {
                            let [t, n] = e;
                            return [t, "partially-initialized" === n.kind ? null : n.changes]
                        })),
                        l = "focused" === az.inspectState.value.kind ? az.inspectState.value.fiber : null;
                    if (l) return tq(eh, {
                        children: [tq(rh, {}), tq("div", {
                            className: "overflow-hidden h-full flex flex-col gap-y-2",
                            children: [tq("div", {
                                className: "flex flex-col gap-2 px-3 pt-2",
                                children: [tq("span", {
                                    className: "text-sm font-medium text-[#888]",
                                    children: ["Why did", " ", tq("span", {
                                        className: "text-[#A855F7]",
                                        children: T(l)
                                    }), " ", "render?"]
                                }), !o && tq("div", {
                                    className: "text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",
                                    children: [tq("div", {
                                        children: "No changes detected since selecting"
                                    }), tq("div", {
                                        children: "The props, state, and context changes within your component will be reported here"
                                    })]
                                })]
                            }), tq("div", {
                                className: nD("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),
                                children: [tq(rf, {
                                    changes: n.propsChanges,
                                    title: "Changed Props",
                                    isExpanded: e
                                }), tq(rf, {
                                    renderName: e => rp(e, T(z(l)) ?? "Unknown Component"),
                                    changes: n.stateChanges,
                                    title: "Changed State",
                                    isExpanded: e
                                }), tq(rf, {
                                    changes: a,
                                    title: "Changed Context",
                                    isExpanded: e
                                })]
                            })]
                        })]
                    })
                }),
                rp = (e, t) => {
                    if (Number.isNaN(Number(e))) return e;
                    let n = Number.parseInt(e);
                    return tq("span", {
                        className: "truncate",
                        children: [tq("span", {
                            className: "text-white",
                            children: [n, (e => {
                                let t = e % 100;
                                if (t >= 11 && t <= 13) return "th";
                                switch (e % 10) {
                                    case 1:
                                        return "st";
                                    case 2:
                                        return "nd";
                                    case 3:
                                        return "rd";
                                    default:
                                        return "th"
                                }
                            })(n), " hook", " "]
                        }), tq("span", {
                            style: {
                                color: "#666"
                            },
                            children: ["called in ", tq("i", {
                                className: "text-[#A855F7] truncate",
                                children: t
                            })]
                        })]
                    })
                },
                rh = ty(() => {
                    let e = eB(null),
                        t = eB(null),
                        n = eB(null),
                        r = eB({
                            isPropsChanged: !1,
                            isStateChanged: !1,
                            isContextChanged: !1
                        });
                    return eY(() => {
                        let i = nP(() => {
                            var r, i, o;
                            let a = [];
                            for (let l of ((null == (r = e.current) ? void 0 : r.dataset.flash) === "true" && a.push(e.current), (null == (i = t.current) ? void 0 : i.dataset.flash) === "true" && a.push(t.current), (null == (o = n.current) ? void 0 : o.dataset.flash) === "true" && a.push(n.current), a)) l.classList.remove("count-flash-white"), l.offsetWidth, l.classList.add("count-flash-white")
                        }, 400);
                        return nQ.subscribe(o => {
                            var a, l, s, c, d, u;
                            if (!e.current || !t.current || !n.current) return;
                            let {
                                currentIndex: p,
                                updates: h
                            } = o, m = h[p];
                            m && 0 !== p && (i(), r.current = {
                                isPropsChanged: ((null == (l = m.props) || null == (a = l.changes) ? void 0 : a.size) ?? 0) > 0,
                                isStateChanged: ((null == (c = m.state) || null == (s = c.changes) ? void 0 : s.size) ?? 0) > 0,
                                isContextChanged: ((null == (u = m.context) || null == (d = u.changes) ? void 0 : d.size) ?? 0) > 0
                            }, "true" !== e.current.dataset.flash && (e.current.dataset.flash = r.current.isPropsChanged.toString()), "true" !== t.current.dataset.flash && (t.current.dataset.flash = r.current.isStateChanged.toString()), "true" !== n.current.dataset.flash && (n.current.dataset.flash = r.current.isContextChanged.toString()))
                        })
                    }, []), tq("button", {
                        type: "button",
                        className: nD("react-section-header", "overflow-hidden", "max-h-0", "transition-[max-height]"),
                        children: tq("div", {
                            className: nD("flex-1 react-scan-expandable"),
                            children: tq("div", {
                                className: "overflow-hidden",
                                children: tq("div", {
                                    className: "flex items-center whitespace-nowrap",
                                    children: [tq("div", {
                                        className: "flex items-center gap-x-2",
                                        children: "What changed?"
                                    }), tq("div", {
                                        className: nD("ml-auto", "change-scope", "transition-opacity duration-300 delay-150"),
                                        children: [tq("div", {
                                            ref: e,
                                            children: "props"
                                        }), tq("div", {
                                            ref: t,
                                            children: "state"
                                        }), tq("div", {
                                            ref: n,
                                            children: "context"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }),
                rm = e => e,
                rf = ty(e => {
                    let {
                        title: t,
                        changes: n,
                        renderName: r = rm
                    } = e, [i, o] = eH(new Set), [a, l] = eH(new Set), s = Array.from(n.entries());
                    return 0 === n.size ? null : tq("div", {
                        children: [tq("div", {
                            className: "text-xs text-[#888] mb-1.5",
                            children: t
                        }), tq("div", {
                            className: "flex flex-col gap-2",
                            children: s.map(e => {
                                let [n, s] = e, c = a.has(String(n)), {
                                    value: d,
                                    error: u
                                } = rd(s.previousValue), {
                                    value: p,
                                    error: h
                                } = rd(s.currentValue), m = rI(d, p);
                                return tq("div", {
                                    children: [tq("button", {
                                        onClick: () => {
                                            l(e => {
                                                let t = new Set(e);
                                                return t.has(String(n)) ? t.delete(String(n)) : t.add(String(n)), t
                                            })
                                        },
                                        className: "flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",
                                        children: tq("div", {
                                            className: "flex items-center gap-1.5 flex-1",
                                            children: [tq(t0, {
                                                name: "icon-chevron-right",
                                                size: 12,
                                                className: nD("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]", {
                                                    "rotate-90": c
                                                })
                                            }), tq("div", {
                                                className: "whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",
                                                children: [r(s.name), tq(rb, {
                                                    count: s.count,
                                                    isFunction: "function" == typeof s.currentValue,
                                                    showWarning: 0 === m.changes.length,
                                                    forceFlash: !0
                                                })]
                                            })]
                                        })
                                    }), tq("div", {
                                        className: nD("react-scan-expandable", {
                                            "react-scan-expanded": c
                                        }),
                                        children: tq("div", {
                                            className: "pl-3 text-xs font-mono border-l-1 border-[#333]",
                                            children: tq("div", {
                                                className: "flex flex-col gap-0.5",
                                                children: u || h ? tq(rg, {
                                                    currError: h,
                                                    prevError: u
                                                }) : m.changes.length > 0 ? tq(rv, {
                                                    change: s,
                                                    diff: m,
                                                    expandedFns: i,
                                                    renderName: r,
                                                    setExpandedFns: o,
                                                    title: t
                                                }) : tq(rw, {
                                                    currValue: p,
                                                    entryKey: n,
                                                    expandedFns: i,
                                                    prevValue: d,
                                                    setExpandedFns: o
                                                })
                                            })
                                        })
                                    })]
                                }, n)
                            })
                        })]
                    })
                }),
                rg = e => {
                    let {
                        prevError: t,
                        currError: n
                    } = e;
                    return tq(eh, {
                        children: [t && tq("div", {
                            className: "text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",
                            children: t
                        }), n && tq("div", {
                            className: "text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",
                            children: n
                        })]
                    })
                },
                rv = e => {
                    let {
                        diff: t,
                        title: n,
                        renderName: r,
                        change: i,
                        expandedFns: o,
                        setExpandedFns: a
                    } = e;
                    return t.changes.map((e, l) => {
                        let s, {
                                value: c,
                                error: d
                            } = rd(e.prevValue),
                            {
                                value: u,
                                error: p
                            } = rd(e.currentValue),
                            h = "function" == typeof c || "function" == typeof u;
                        return "Props" === n && (s = e.path.length > 0 ? `${r(String(i.name))}.${rL(e.path)}` : void 0), "State" === n && e.path.length > 0 && (s = `state.${rL(e.path)}`), s || (s = rL(e.path)), tq("div", {
                            className: nD("flex flex-col gap-y-1", l < t.changes.length - 1 && "mb-4"),
                            children: [s && tq("div", {
                                className: "text-[#666] text-[10px]",
                                children: s
                            }), tq("button", {
                                type: "button",
                                className: nD("group", "flex items-start", "py-[3px] px-1.5", "text-left text-[#f87171] bg-[#2a1515]", "rounded", "overflow-hidden break-all", h && "cursor-pointer"),
                                onClick: h ? () => {
                                    let t = `${rL(e.path)}-prev`;
                                    a(e => {
                                        let n = new Set(e);
                                        return n.has(t) ? n.delete(t) : n.add(t), n
                                    })
                                } : void 0,
                                children: [tq("span", {
                                    className: "w-3 flex items-center justify-center opacity-50",
                                    children: "-"
                                }), tq("span", {
                                    className: "flex-1 whitespace-nowrap font-mono",
                                    children: d ? tq("span", {
                                        className: "italic text-[#f87171]",
                                        children: d
                                    }) : h ? tq("div", {
                                        className: "flex gap-1 items-start flex-col",
                                        children: [tq("div", {
                                            className: "flex gap-1 items-start w-full",
                                            children: [tq("span", {
                                                className: "flex-1 max-h-40",
                                                children: rO(c, o.has(`${rL(e.path)}-prev`))
                                            }), "function" == typeof c && tq(rn, {
                                                text: c.toString(),
                                                className: "opacity-0 transition-opacity group-hover:opacity-100",
                                                children: e => {
                                                    let {
                                                        ClipboardIcon: t
                                                    } = e;
                                                    return tq(eh, {
                                                        children: t
                                                    })
                                                }
                                            })]
                                        }), (null == c ? void 0 : c.toString()) === (null == u ? void 0 : u.toString()) && tq("div", {
                                            className: "text-[10px] text-[#666] italic",
                                            children: "Function reference changed"
                                        })]
                                    }) : tq(ro, {
                                        value: c,
                                        expanded: o.has(`${rL(e.path)}-prev`),
                                        onToggle: () => {
                                            let t = `${rL(e.path)}-prev`;
                                            a(e => {
                                                let n = new Set(e);
                                                return n.has(t) ? n.delete(t) : n.add(t), n
                                            })
                                        },
                                        isNegative: !0
                                    })
                                })]
                            }), tq("button", {
                                type: "button",
                                className: nD("group", "flex items-start", "py-[3px] px-1.5", "text-left text-[#4ade80] bg-[#1a2a1a]", "rounded", "overflow-hidden break-all", h && "cursor-pointer"),
                                onClick: h ? () => {
                                    let t = `${rL(e.path)}-current`;
                                    a(e => {
                                        let n = new Set(e);
                                        return n.has(t) ? n.delete(t) : n.add(t), n
                                    })
                                } : void 0,
                                children: [tq("span", {
                                    className: "w-3 flex items-center justify-center opacity-50",
                                    children: "+"
                                }), tq("span", {
                                    className: "flex-1 whitespace-pre-wrap font-mono",
                                    children: p ? tq("span", {
                                        className: "italic text-[#4ade80]",
                                        children: p
                                    }) : h ? tq("div", {
                                        className: "flex gap-1 items-start flex-col",
                                        children: [tq("div", {
                                            className: "flex gap-1 items-start w-full",
                                            children: [tq("span", {
                                                className: "flex-1",
                                                children: rO(u, o.has(`${rL(e.path)}-current`))
                                            }), "function" == typeof u && tq(rn, {
                                                text: u.toString(),
                                                className: "opacity-0 transition-opacity group-hover:opacity-100",
                                                children: e => {
                                                    let {
                                                        ClipboardIcon: t
                                                    } = e;
                                                    return tq(eh, {
                                                        children: t
                                                    })
                                                }
                                            })]
                                        }), (null == c ? void 0 : c.toString()) === (null == u ? void 0 : u.toString()) && tq("div", {
                                            className: "text-[10px] text-[#666] italic",
                                            children: "Function reference changed"
                                        })]
                                    }) : tq(ro, {
                                        value: u,
                                        expanded: o.has(`${rL(e.path)}-current`),
                                        onToggle: () => {
                                            let t = `${rL(e.path)}-current`;
                                            a(e => {
                                                let n = new Set(e);
                                                return n.has(t) ? n.delete(t) : n.add(t), n
                                            })
                                        },
                                        isNegative: !1
                                    })
                                })]
                            })]
                        }, `${s}-${i.name}-${l}`)
                    })
                },
                rw = e => {
                    let {
                        prevValue: t,
                        currValue: n,
                        entryKey: r,
                        expandedFns: i,
                        setExpandedFns: o
                    } = e;
                    return tq(eh, {
                        children: [tq("div", {
                            className: "group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",
                            children: [tq("span", {
                                className: "w-3 flex items-center justify-center opacity-50",
                                children: "-"
                            }), tq("span", {
                                className: "flex-1 overflow-hidden whitespace-pre-wrap font-mono",
                                children: tq(ro, {
                                    value: t,
                                    expanded: i.has(`${String(r)}-prev`),
                                    onToggle: () => {
                                        let e = `${String(r)}-prev`;
                                        o(t => {
                                            let n = new Set(t);
                                            return n.has(e) ? n.delete(e) : n.add(e), n
                                        })
                                    },
                                    isNegative: !0
                                })
                            })]
                        }), tq("div", {
                            className: "group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",
                            children: [tq("span", {
                                className: "w-3 flex items-center justify-center opacity-50",
                                children: "+"
                            }), tq("span", {
                                className: "flex-1 overflow-hidden whitespace-pre-wrap font-mono",
                                children: tq(ro, {
                                    value: n,
                                    expanded: i.has(`${String(r)}-current`),
                                    onToggle: () => {
                                        let e = `${String(r)}-current`;
                                        o(t => {
                                            let n = new Set(t);
                                            return n.has(e) ? n.delete(e) : n.add(e), n
                                        })
                                    },
                                    isNegative: !1
                                })
                            })]
                        }), "object" == typeof n && null !== n && tq("div", {
                            className: "text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",
                            children: [tq(t0, {
                                name: "icon-triangle-alert",
                                className: "text-yellow-500 mb-px",
                                size: 14
                            }), tq("span", {
                                children: "Reference changed but objects are structurally the same"
                            })]
                        })]
                    })
                },
                rb = e => {
                    let {
                        count: t,
                        forceFlash: n,
                        isFunction: r,
                        showWarning: i
                    } = e, o = eB(!0), a = eB(null), l = eB(t);
                    return eY(() => {
                        let e = a.current;
                        e && l.current !== t && (e.classList.remove("count-flash"), e.offsetWidth, e.classList.add("count-flash"), l.current = t)
                    }, [t]), eY(() => {
                        if (o.current) {
                            o.current = !1;
                            return
                        }
                        if (n) {
                            let e = setTimeout(() => {
                                var t;
                                null == (t = a.current) || t.classList.add("count-flash-white"), e = setTimeout(() => {
                                    var e;
                                    null == (e = a.current) || e.classList.remove("count-flash-white")
                                }, 300)
                            }, 500);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [n]), tq("div", {
                        ref: a,
                        className: "count-badge",
                        children: [i && tq(t0, {
                            name: "icon-triangle-alert",
                            className: "text-yellow-500 mb-px",
                            size: 14
                        }), r && tq(t0, {
                            name: "icon-function",
                            className: "text-[#A855F7] mb-px",
                            size: 14
                        }), "x", t]
                    })
                },
                rx = {
                    lastRendered: new Map,
                    expandedPaths: new Set,
                    cleanup: () => {
                        rx.lastRendered.clear(), rx.expandedPaths.clear(), nK.cleanupAll(), rK(), n2 && (clearTimeout(n2), n2 = null), n1 = [], nQ.value = nZ
                    }
                },
                ry = class extends em {
                    static getDerivedStateFromError(e) {
                        return {
                            hasError: !0,
                            error: e
                        }
                    }
                    render() {
                        if (this.state.hasError) {
                            var e;
                            return tq("div", {
                                className: "p-4 bg-red-950/50 h-screen backdrop-blur-sm",
                                children: [tq("div", {
                                    className: "flex items-center gap-2 mb-3 text-red-400 font-medium",
                                    children: [tq(t0, {
                                        name: "icon-flame",
                                        className: "text-red-500",
                                        size: 16
                                    }), "Something went wrong in the inspector"]
                                }), tq("div", {
                                    className: "p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",
                                    children: (null == (e = this.state.error) ? void 0 : e.message) || JSON.stringify(this.state.error)
                                }), tq("button", {
                                    type: "button",
                                    onClick: this.handleReset,
                                    className: "px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",
                                    children: "Reset Inspector"
                                })]
                            })
                        }
                        return this.props.children
                    }
                    constructor() {
                        super(...arguments), this.state = {
                            hasError: !1,
                            error: null
                        }, this.handleReset = () => {
                            this.setState({
                                hasError: !1,
                                error: null
                            }), rx.cleanup()
                        }
                    }
                },
                rk = tl(() => nD("react-scan-inspector", "flex-1", "opacity-0", "overflow-y-auto overflow-x-hidden", "transition-opacity delay-0", "pointer-events-none", !nU.value && "opacity-100 delay-300 pointer-events-auto")),
                r_ = nJ(() => {
                    let e = eB(null),
                        t = t => {
                            if (!t) return;
                            e.current = t;
                            let {
                                data: n,
                                shouldUpdate: r
                            } = r4(t);
                            if (r) {
                                var i = {
                                        timestamp: Date.now(),
                                        fiberInfo: rY(t),
                                        props: n.fiberProps,
                                        state: n.fiberState,
                                        context: n.fiberContext,
                                        stateNames: rG(t)
                                    },
                                    o = t;
                                if (n1.push({
                                        update: i,
                                        fiber: o
                                    }), !n2) {
                                    let e = () => {
                                        (() => {
                                            let e;
                                            if (0 === n1.length) return;
                                            let t = [...n1],
                                                {
                                                    updates: n,
                                                    totalUpdates: r,
                                                    currentIndex: i,
                                                    isViewingHistory: o
                                                } = nQ.value,
                                                a = [...n],
                                                l = r;
                                            for (let {
                                                    update: e
                                                }
                                                of t) a.length >= 1e3 && a.shift(), a.push(e), l++;
                                            let s = Math.max(0, l - 1e3);
                                            e = o ? i === r - 1 ? a.length - 1 : 0 === i ? 0 : 0 === s ? i : i - 1 : a.length - 1;
                                            let c = t[t.length - 1];
                                            nQ.value = {
                                                ...nQ.value,
                                                latestFiber: c.fiber,
                                                updates: a,
                                                totalUpdates: l,
                                                windowOffset: s,
                                                currentIndex: e,
                                                isViewingHistory: o
                                            }, n1 = n1.slice(t.length)
                                        })(), n2 = null, n1.length > 0 && (n2 = setTimeout(e, 96))
                                    };
                                    n2 = setTimeout(e, 96)
                                }
                            }
                        };
                    return tg(() => {
                        let n = az.inspectState.value;
                        e3(() => {
                            var r;
                            if ("focused" !== n.kind || !n.focusedDomElement) {
                                e.current = null, rx.cleanup();
                                return
                            }
                            "focused" === n.kind && (nU.value = !1);
                            let {
                                parentCompositeFiber: i
                            } = rF(n.focusedDomElement, n.fiber);
                            if (!i) {
                                az.inspectState.value = {
                                    kind: "inspect-off"
                                }, nB.value = {
                                    view: "none"
                                };
                                return
                            }(null == (r = e.current) ? void 0 : r.type) !== i.type && (e.current = i, rx.cleanup(), t(i))
                        })
                    }), tg(() => {
                        n0.value, e3(() => {
                            let n = az.inspectState.value;
                            if ("focused" !== n.kind || !n.focusedDomElement) {
                                e.current = null, rx.cleanup();
                                return
                            }
                            let {
                                parentCompositeFiber: r
                            } = rF(n.focusedDomElement, n.fiber);
                            if (!r) {
                                az.inspectState.value = {
                                    kind: "inspect-off"
                                }, nB.value = {
                                    view: "none"
                                };
                                return
                            }
                            t(r), n.focusedDomElement.isConnected || (e.current = null, rx.cleanup(), az.inspectState.value = {
                                kind: "inspecting",
                                hoveredDomElement: null
                            })
                        })
                    }), eY(() => () => {
                        rx.cleanup()
                    }, []), tq(ry, {
                        children: tq("div", {
                            className: rk,
                            children: tq("div", {
                                className: "w-full h-full",
                                children: tq(ru, {})
                            })
                        })
                    })
                }),
                rN = nJ(() => "focused" !== az.inspectState.value.kind ? null : tq(ry, {
                    children: [tq(r_, {}), tq(rt, {})]
                })),
                rS = e => {
                    var t, n, r;
                    if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window) {
                        let n = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (!(null == n ? void 0 : n.renderers)) return null;
                        for (let [, r] of Array.from(n.renderers)) try {
                            let n = null == (t = r.findFiberByHostInstance) ? void 0 : t.call(r, e);
                            if (n) return n
                        } catch {}
                    }
                    if ("_reactRootContainer" in e) {
                        let t = e._reactRootContainer;
                        return (null == t || null == (r = t._internalRoot) || null == (n = r.current) ? void 0 : n.child) ?? null
                    }
                    for (let t in e)
                        if (t.startsWith("__reactInternalInstance$") || t.startsWith("__reactFiber")) return e[t];
                    return null
                },
                rC = e => {
                    let t = e;
                    for (; t;) {
                        if (t.stateNode instanceof Element) return t.stateNode;
                        if (!t.child) break;
                        t = t.child
                    }
                    for (; t;) {
                        if (t.stateNode instanceof Element) return t.stateNode;
                        if (!t.return) break;
                        t = t.return
                    }
                    return null
                },
                rz = e => {
                    if (!e) return null;
                    try {
                        let t = rS(e);
                        if (!t) return null;
                        let n = rT(t);
                        return n ? n[0] : null
                    } catch {
                        return null
                    }
                },
                rT = e => {
                    let t = e,
                        n = null;
                    for (; t;) {
                        if (w(t)) return [t, n];
                        v(t) && !n && (n = t), t = t.return
                    }
                    return null
                },
                rE = (e, t) => !!k(t, t => t === e),
                rA = async e => {
                    let t, n = rz(e);
                    if (!n) return null;
                    let r = rC(n);
                    if (!r) return null;
                    let i = (await (t = [r], new Promise(e => {
                        let n = new Map,
                            r = new IntersectionObserver(t => {
                                for (let e of t) {
                                    let t = e.target,
                                        r = e.boundingClientRect;
                                    n.set(t, r)
                                }
                                r.disconnect(), e(n)
                            });
                        for (let e of t) r.observe(e)
                    }))).get(r);
                    return i || null
                }, rM = e => {
                    let t = rz(e);
                    if (!t || !rC(t)) return {};
                    let n = rT(t);
                    if (!n) return {};
                    let [r] = n;
                    return {
                        parentCompositeFiber: r
                    }
                }, rF = (e, t) => {
                    var n, r;
                    if (!e.isConnected) return {};
                    let i = t ?? rz(e);
                    if (!i) return {};
                    let o = i,
                        a = null,
                        l = null;
                    for (; o;) {
                        if (!o.stateNode) {
                            o = o.return;
                            continue
                        }
                        if (null == (r = aT.instrumentation) ? void 0 : r.fiberRoots.has(o.stateNode)) {
                            a = o, l = o.stateNode.current;
                            break
                        }
                        o = o.return
                    }
                    if (!a || !l || !(i = rE(i, l) ? i : i.alternate ?? i) || !rC(i)) return {};
                    let s = null == (n = rT(i)) ? void 0 : n[0];
                    return s ? {
                        parentCompositeFiber: rE(s, l) ? s : s.alternate ?? s
                    } : {}
                }, r$ = e => {
                    var t;
                    let n = e.memoizedProps ?? {},
                        r = (null == (t = e.alternate) ? void 0 : t.memoizedProps) ?? {},
                        i = [];
                    for (let e in n) {
                        if ("children" === e) continue;
                        let t = n[e],
                            o = r[e];
                        tK(t, o) || i.push({
                            name: e,
                            value: t,
                            prevValue: o,
                            type: 1
                        })
                    }
                    return i
                }, rR = new Set(["HTML", "HEAD", "META", "TITLE", "BASE", "SCRIPT", "SCRIPT", "STYLE", "LINK", "NOSCRIPT", "SOURCE", "TRACK", "EMBED", "OBJECT", "PARAM", "TEMPLATE", "PORTAL", "SLOT", "AREA", "XML", "DOCTYPE", "COMMENT"]), rD = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (e.stateNode && "nodeType" in e.stateNode) {
                        let n = e.stateNode;
                        return t && n.tagName && rR.has(n.tagName.toLowerCase()) ? null : n
                    }
                    let n = e.child;
                    for (; n;) {
                        let e = rD(n, t);
                        if (e) return e;
                        n = n.sibling
                    }
                    return null
                }, rP = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                        t = [],
                        n = function(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                i = (e => {
                                    if (!e) return null;
                                    let {
                                        parentCompositeFiber: t
                                    } = rM(e);
                                    return t && rD(t) === e ? e : null
                                })(e);
                            if (i) {
                                let {
                                    parentCompositeFiber: e
                                } = rM(i);
                                if (!e) return;
                                t.push({
                                    element: i,
                                    depth: r,
                                    name: T(e.type) ?? "Unknown",
                                    fiber: e
                                })
                            }
                            for (let t of Array.from(e.children)) n(t, i ? r + 1 : r)
                        };
                    return n(e), t
                }, rj = e => {
                    try {
                        if (null === e) return "null";
                        if (void 0 === e) return "undefined";
                        if (rH(e)) return "Promise";
                        if ("function" == typeof e) {
                            let t = e.toString();
                            try {
                                return t.replace(/\s+/g, " ").replace(/{\s+/g, "{\n  ").replace(/;\s+/g, ";\n  ").replace(/}\s*$/g, "\n}").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")").replace(/,\s+/g, ", ")
                            } catch {
                                return t
                            }
                        }
                        switch (!0) {
                            case e instanceof Date:
                                return e.toISOString();
                            case e instanceof RegExp:
                                return e.toString();
                            case e instanceof Error:
                                return `${e.name}: ${e.message}`;
                            case e instanceof Map:
                                return JSON.stringify(Array.from(e.entries()), null, 2);
                            case e instanceof Set:
                                return JSON.stringify(Array.from(e), null, 2);
                            case e instanceof DataView:
                                return JSON.stringify(Array.from(new Uint8Array(e.buffer)), null, 2);
                            case e instanceof ArrayBuffer:
                                return JSON.stringify(Array.from(new Uint8Array(e)), null, 2);
                            case ArrayBuffer.isView(e) && "length" in e:
                                return JSON.stringify(Array.from(e), null, 2);
                            case Array.isArray(e):
                            case "object" == typeof e:
                                return JSON.stringify(e, null, 2);
                            default:
                                return String(e)
                        }
                    } catch {
                        return String(e)
                    }
                }, rI = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new WeakSet;
                    if (e === t) return {
                        type: "primitive",
                        changes: [],
                        hasDeepChanges: !1
                    };
                    if ("function" == typeof e && "function" == typeof t) {
                        let r = ((e, t) => {
                            try {
                                if ("function" != typeof e || "function" != typeof t) return !1;
                                return e.toString() === t.toString()
                            } catch {
                                return !1
                            }
                        })(e, t);
                        return {
                            type: "primitive",
                            changes: [{
                                path: n,
                                prevValue: e,
                                currentValue: t,
                                sameFunction: r
                            }],
                            hasDeepChanges: !r
                        }
                    }
                    if (null === e || null === t || void 0 === e || void 0 === t || "object" != typeof e || "object" != typeof t) return {
                        type: "primitive",
                        changes: [{
                            path: n,
                            prevValue: e,
                            currentValue: t
                        }],
                        hasDeepChanges: !0
                    };
                    if (r.has(e) || r.has(t)) return {
                        type: "object",
                        changes: [{
                            path: n,
                            prevValue: "[Circular]",
                            currentValue: "[Circular]"
                        }],
                        hasDeepChanges: !1
                    };
                    r.add(e), r.add(t);
                    let i = new Set([...Object.keys(e), ...Object.keys(t)]),
                        o = [],
                        a = !1;
                    for (let l of i) {
                        let i = e[l],
                            s = t[l];
                        if (i !== s)
                            if ("object" == typeof i && "object" == typeof s && null !== i && null !== s) {
                                let e = rI(i, s, [...n, l], r);
                                o.push(...e.changes), e.hasDeepChanges && (a = !0)
                            } else o.push({
                                path: [...n, l],
                                prevValue: i,
                                currentValue: s
                            }), a = !0
                    }
                    return {
                        type: "object",
                        changes: o,
                        hasDeepChanges: a
                    }
                }, rL = e => 0 === e.length ? "" : e.reduce((e, t, n) => /^\d+$/.test(t) ? `${e}[${t}]` : 0 === n ? t : `${e}.${t}`, ""), rO = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    try {
                        let n = e.toString(),
                            r = n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);
                        if (!r) return "ƒ";
                        let i = (r[1] || r[2] || "").replace(/\s+/g, "");
                        if (!t) return `\u0192 (${i}) => ...`;
                        return function(e) {
                            let t = e.replace(/\s+/g, " ").trim(),
                                n = [],
                                r = "";
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                if ("=" === i && ">" === t[e + 1]) {
                                    r.trim() && n.push(r.trim()), n.push("=>"), r = "", e++;
                                    continue
                                }
                                /[(){}[\];,<>:\?!]/.test(i) ? (r.trim() && n.push(r.trim()), n.push(i), r = "") : /\s/.test(i) ? (r.trim() && n.push(r.trim()), r = "") : r += i
                            }
                            r.trim() && n.push(r.trim());
                            let i = [];
                            for (let e = 0; e < n.length; e++) {
                                let t = n[e],
                                    r = n[e + 1];
                                "(" === t && ")" === r || "[" === t && "]" === r || "{" === t && "}" === r || "<" === t && ">" === r ? (i.push(t + r), e++) : i.push(t)
                            }
                            let o = new Set,
                                a = new Set;

                            function l(e, t, n) {
                                let r = 0;
                                for (let o = n; o < i.length; o++) {
                                    let n = i[o];
                                    if (n === e) r++;
                                    else if (n === t && 0 == --r) return o
                                }
                                return -1
                            }
                            for (let e = 0; e < i.length; e++)
                                if ("(" === i[e]) {
                                    let t = l("(", ")", e);
                                    if (-1 !== t && "=>" === i[t + 1])
                                        for (let n = e; n <= t; n++) o.add(n)
                                } for (let e = 1; e < i.length; e++) {
                                let t = i[e - 1],
                                    n = i[e];
                                if (/^[a-zA-Z0-9_$]+$/.test(t) && "<" === n) {
                                    let t = l("<", ">", e);
                                    if (-1 !== t)
                                        for (let n = e; n <= t; n++) a.add(n)
                                }
                            }
                            let s = 0,
                                c = [],
                                d = "";

                            function u() {
                                d.trim() && c.push(d.replace(/\s+$/, "")), d = ""
                            }

                            function p() {
                                u(), d = "  ".repeat(s)
                            }
                            let h = [];

                            function m() {
                                return h.length ? h[h.length - 1] : null
                            }

                            function f(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                d.trim() ? t || /^[),;:\].}>]$/.test(e) ? d += e : d += ` ${e}` : d += e
                            }
                            for (let e = 0; e < i.length; e++) {
                                let t = i[e],
                                    n = i[e + 1] || "";
                                if (["(", "{", "[", "<"].includes(t)) f(t), h.push(t), "{" === t ? (s++, p()) : ("(" === t || "[" === t || "<" === t) && (o.has(e) && "(" === t || a.has(e) && "<" === t || n !== ({
                                    "(": ")",
                                    "[": "]",
                                    "<": ">"
                                })[t] && "()" !== n && "[]" !== n && "<>" !== n && (s++, p()));
                                else if ([")", "}", "]", ">"].includes(t)) {
                                    let n = m();
                                    ")" === t && "(" === n || "]" === t && "[" === n || ">" === t && "<" === n ? o.has(e) && ")" === t || a.has(e) && ">" === t || (s = Math.max(s - 1, 0), p()) : "}" === t && "{" === n && (s = Math.max(s - 1, 0), p()), h.pop(), f(t), "}" === t && p()
                                } else if (/^\(\)|\[\]|\{\}|\<\>$/.test(t)) f(t);
                                else if ("=>" === t) f(t);
                                else if (";" === t) f(t, !0), p();
                                else if ("," === t) {
                                    f(t, !0);
                                    let n = m();
                                    !(o.has(e) && "(" === n) && !(a.has(e) && "<" === n) && n && ["{", "[", "(", "<"].includes(n) && p()
                                } else f(t)
                            }
                            return u(), c.join("\n").replace(/\n\s*\n+/g, "\n").trim()
                        }(n)
                    } catch {
                        return "ƒ"
                    }
                }, rU = e => {
                    if (null === e) return "null";
                    if (void 0 === e) return "undefined";
                    if ("string" == typeof e) return `"${e.length>150?`${e.slice(0,20)}...`:e}"`;
                    if ("number" == typeof e || "boolean" == typeof e) return String(e);
                    if ("function" == typeof e) return rO(e);
                    if (Array.isArray(e)) return `Array(${e.length})`;
                    if (e instanceof Map) return `Map(${e.size})`;
                    if (e instanceof Set) return `Set(${e.size})`;
                    if (e instanceof Date) return e.toISOString();
                    if (e instanceof RegExp) return e.toString();
                    if (e instanceof Error) return `${e.name}: ${e.message}`;
                    if ("object" == typeof e) {
                        let t = Object.keys(e);
                        return `{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`
                    }
                    return String(e)
                }, rW = e => {
                    if (null == e || "function" == typeof e || "object" != typeof e) return {
                        value: e
                    };
                    if (e instanceof Promise) return {
                        value: "Promise"
                    };
                    try {
                        var t;
                        let n = Object.getPrototypeOf(e);
                        if (n === Promise.prototype || (null == n || null == (t = n.constructor) ? void 0 : t.name) === "Promise") return {
                            value: "Promise"
                        };
                        return {
                            value: e
                        }
                    } catch {
                        return {
                            value: null,
                            error: "Error accessing value"
                        }
                    }
                }, rH = e => !!e && (e instanceof Promise || "object" == typeof e && "then" in e), rY = e => {
                    let t = S(e);
                    return {
                        displayName: T(e) || "Unknown",
                        type: e.type,
                        key: e.key,
                        id: e.index,
                        selfTime: (null == t ? void 0 : t.selfTime) ?? null,
                        totalTime: (null == t ? void 0 : t.totalTime) ?? null
                    }
                }, rX = new Map, rB = new Map, rV = new Map, rq = null, rJ = /\[(?<name>\w+),\s*set\w+\]/g, rG = e => {
                    var t, n;
                    let r = (null == (n = e.type) || null == (t = n.toString) ? void 0 : t.call(n)) || "";
                    return r ? Array.from(r.matchAll(rJ), e => {
                        var t;
                        return (null == (t = e.groups) ? void 0 : t.name) ?? ""
                    }) : []
                }, rK = () => {
                    rX.clear(), rB.clear(), rV.clear(), rq = null
                }, rZ = (e, t, n, r) => {
                    let i = e.get(t),
                        o = e === rX || e === rV,
                        a = !tK(n, r);
                    if (!i) return e.set(t, {
                        count: a && o ? 1 : 0,
                        currentValue: n,
                        previousValue: r,
                        lastUpdated: Date.now()
                    }), {
                        hasChanged: a,
                        count: a && o ? 1 : +!o
                    };
                    if (!tK(i.currentValue, n)) {
                        let r = i.count + 1;
                        return e.set(t, {
                            count: r,
                            currentValue: n,
                            previousValue: i.currentValue,
                            lastUpdated: Date.now()
                        }), {
                            hasChanged: !0,
                            count: r
                        }
                    }
                    return {
                        hasChanged: !1,
                        count: i.count
                    }
                }, rQ = e => {
                    if (!e) return {};
                    if (0 === e.tag || 11 === e.tag || 15 === e.tag || 14 === e.tag) {
                        let t = e.memoizedState,
                            n = {},
                            r = 0;
                        for (; t;) t.queue && void 0 !== t.memoizedState && (n[r] = t.memoizedState), t = t.next, r++;
                        return n
                    }
                    return 1 === e.tag && e.memoizedState || {}
                }, r0 = e => {
                    var t;
                    let n = e.memoizedProps || {},
                        r = (null == (t = e.alternate) ? void 0 : t.memoizedProps) || {},
                        i = {},
                        o = {};
                    for (let e of Object.keys(n)) e in n && (i[e] = n[e], o[e] = r[e]);
                    return {
                        current: i,
                        prev: o,
                        changes: r$(e).map(e => ({
                            name: e.name,
                            value: e.value,
                            prevValue: e.prevValue
                        }))
                    }
                }, r1 = e => {
                    let t = rQ(e),
                        n = e.alternate ? rQ(e.alternate) : {},
                        r = [];
                    for (let [i, o] of Object.entries(t)) {
                        let t = 1 === e.tag ? i : Number(i);
                        e.alternate && !tK(n[i], o) && r.push({
                            name: t,
                            value: o,
                            prevValue: n[i]
                        })
                    }
                    return {
                        current: t,
                        prev: n,
                        changes: r
                    }
                }, r2 = e => {
                    let t = r3(e),
                        n = e.alternate ? r3(e.alternate) : new Map,
                        r = {},
                        i = {},
                        o = [],
                        a = new Set;
                    for (let [e, l] of t) {
                        let t = l.displayName;
                        if (a.has(e)) continue;
                        a.add(e), r[t] = l.value;
                        let s = n.get(e);
                        s && (i[t] = s.value, tK(s.value, l.value) || o.push({
                            name: t,
                            value: l.value,
                            prevValue: s.value,
                            contextType: e
                        }))
                    }
                    return {
                        current: r,
                        prev: i,
                        changes: o
                    }
                }, r4 = e => {
                    let t, n = () => ({
                        current: [],
                        changes: new Set,
                        changesCounts: new Map
                    });
                    if (!e) return {
                        data: {
                            fiberProps: n(),
                            fiberState: n(),
                            fiberContext: n()
                        },
                        shouldUpdate: !1
                    };
                    let r = !1,
                        i = (t = e.type !== rq, rq = e.type, t),
                        o = n();
                    if (e.memoizedProps) {
                        let {
                            current: t,
                            changes: n
                        } = r0(e);
                        for (let [e, n] of Object.entries(t)) o.current.push({
                            name: e,
                            value: rH(n) ? {
                                type: "promise",
                                displayValue: "Promise"
                            } : n
                        });
                        for (let e of n) {
                            let {
                                hasChanged: t,
                                count: n
                            } = rZ(rX, e.name, e.value, e.prevValue);
                            t && (r = !0, o.changes.add(e.name), o.changesCounts.set(e.name, n))
                        }
                    }
                    let a = n(),
                        {
                            current: l,
                            changes: s
                        } = r1(e);
                    for (let [t, n] of Object.entries(l)) {
                        let r = 1 === e.tag ? t : Number(t);
                        a.current.push({
                            name: r,
                            value: n
                        })
                    }
                    for (let e of s) {
                        let {
                            hasChanged: t,
                            count: n
                        } = rZ(rB, e.name, e.value, e.prevValue);
                        t && (r = !0, a.changes.add(e.name), a.changesCounts.set(e.name, n))
                    }
                    let c = n(),
                        {
                            current: d,
                            changes: u
                        } = r2(e);
                    for (let [e, t] of Object.entries(d)) c.current.push({
                        name: e,
                        value: t
                    });
                    if (!i)
                        for (let e of u) {
                            let {
                                hasChanged: t,
                                count: n
                            } = rZ(rV, e.name, e.value, e.prevValue);
                            t && (r = !0, c.changes.add(e.name), c.changesCounts.set(e.name, n))
                        }
                    return r || i || (o.changes.clear(), a.changes.clear(), c.changes.clear()), {
                        data: {
                            fiberProps: o,
                            fiberState: a,
                            fiberContext: c
                        },
                        shouldUpdate: r || i
                    }
                }, r5 = new WeakMap, r3 = e => {
                    if (!e) return new Map;
                    let t = r5.get(e);
                    if (t) return t;
                    let n = new Map,
                        r = e;
                    for (; r;) {
                        let e = r.dependencies;
                        if (null == e ? void 0 : e.firstContext) {
                            let t = e.firstContext;
                            for (; t;) {
                                var i;
                                let e = t.memoizedValue,
                                    r = null == (i = t.context) ? void 0 : i.displayName;
                                if (n.has(e) || n.set(t.context, {
                                        value: e,
                                        displayName: r ?? "UnnamedContext",
                                        contextType: null
                                    }), t === t.next) break;
                                t = t.next
                            }
                        }
                        r = r.return
                    }
                    return r5.set(e, n), n
                }, r6 = e => {
                    let t = () => ({
                        current: [],
                        changes: new Set,
                        changesCounts: new Map
                    });
                    if (!e) return {
                        fiberProps: t(),
                        fiberState: t(),
                        fiberContext: t()
                    };
                    let n = t();
                    if (e.memoizedProps) {
                        let {
                            current: t,
                            changes: r
                        } = r0(e);
                        for (let [e, r] of Object.entries(t)) n.current.push({
                            name: e,
                            value: rH(r) ? {
                                type: "promise",
                                displayValue: "Promise"
                            } : r
                        });
                        for (let e of r) n.changes.add(e.name), n.changesCounts.set(e.name, 1)
                    }
                    let r = t();
                    if (e.memoizedState) {
                        let {
                            current: t,
                            changes: n
                        } = r1(e);
                        for (let [e, n] of Object.entries(t)) r.current.push({
                            name: e,
                            value: rH(n) ? {
                                type: "promise",
                                displayValue: "Promise"
                            } : n
                        });
                        for (let e of n) r.changes.add(e.name), r.changesCounts.set(e.name, 1)
                    }
                    let i = t(),
                        {
                            current: o,
                            changes: a
                        } = r2(e);
                    for (let [e, t] of Object.entries(o)) i.current.push({
                        name: e,
                        value: rH(t) ? {
                            type: "promise",
                            displayValue: "Promise"
                        } : t
                    });
                    for (let e of a) i.changes.add(e.name), i.changesCounts.set(e.name, 1);
                    return {
                        fiberProps: n,
                        fiberState: r,
                        fiberContext: i
                    }
                }, r8 = 0, r7 = performance.now(), r9 = 0, ie = !1, it = () => {
                    r9++;
                    let e = performance.now();
                    e - r7 >= 1e3 && (r8 = r9, r9 = 0, r7 = e), requestAnimationFrame(it)
                }, ir = () => (ie || (ie = !0, it(), r8 = 60), r8), ii = 0, io = new WeakMap;

            function ia(e, t) {
                var n;
                let r;
                if (!e || !t) return;
                let i = e.memoizedValue,
                    o = {
                        type: 4,
                        name: e.context.displayName ?? "Context.Provider",
                        value: i,
                        contextType: (n = e.context, (r = io.get(n)) || (ii++, io.set(n, ii), ii))
                    };
                this.push(o)
            }
            var il = new Map,
                is = !1,
                ic = () => Array.from(il.values()),
                id = new WeakMap;

            function iu(e) {
                return String($(e))
            }

            function ip(e) {
                let t = iu(e),
                    n = id.get(z(e));
                if (n) return n.get(t)
            }
            var ih = (e, t) => Math.floor(e + (t - e) * .1),
                im = "115,97,230";

            function ig(e, t) {
                return t[0] - e[0]
            }

            function iv(e) {
                let [t, n] = e, r = `${n.slice(0,4).join(", ")} \xd7${t}`;
                return r.length > 40 && (r = `${r.slice(0,40)}\u2026`), r
            }
            var iw = e => {
                    let t = new Map;
                    for (let {
                            name: n,
                            count: r
                        }
                        of e) t.set(n, (t.get(n) || 0) + r);
                    let n = new Map;
                    for (let [e, r] of t) {
                        let t = n.get(r);
                        t ? t.push(e) : n.set(r, [e])
                    }
                    let r = [...n.entries()].sort(ig),
                        i = iv(r[0]);
                    for (let e = 1, t = r.length; e < t; e++) i += ", " + iv(r[e]);
                    return i.length > 40 ? `${i.slice(0,40)}\u2026` : i
                },
                ib = e => {
                    let t = 0;
                    for (let n of e) t += n.width * n.height;
                    return t
                },
                ix = (e, t) => {
                    for (let {
                            id: n,
                            name: r,
                            count: i,
                            x: o,
                            y: a,
                            width: l,
                            height: s,
                            didCommit: c
                        }
                        of t) {
                        let t = {
                                id: n,
                                name: r,
                                count: i,
                                x: o,
                                y: a,
                                width: l,
                                height: s,
                                frame: 0,
                                targetX: o,
                                targetY: a,
                                targetWidth: l,
                                targetHeight: s,
                                didCommit: c
                            },
                            d = String(t.id),
                            u = e.get(d);
                        u ? (u.count++, u.frame = 0, u.targetX = o, u.targetY = a, u.targetWidth = l, u.targetHeight = s, u.didCommit = c) : e.set(d, t)
                    }
                },
                iy = (e, t, n) => {
                    for (let r of e.values()) {
                        let e = r.x - t,
                            i = r.y - n;
                        r.targetX = e, r.targetY = i
                    }
                },
                ik = null,
                i_ = null,
                iN = null,
                iS = 1,
                iC = null,
                iz = new Map,
                iT = new Map,
                iE = new Set,
                iA = e => {
                    let t, n, r, i, o = e[0];
                    if (1 === e.length) return o;
                    for (let o = 0, a = e.length; o < a; o++) {
                        let a = e[o];
                        t = null == t ? a.x : Math.min(t, a.x), n = null == n ? a.y : Math.min(n, a.y), r = null == r ? a.x + a.width : Math.max(r, a.x + a.width), i = null == i ? a.y + a.height : Math.max(i, a.y + a.height)
                    }
                    return null == t || null == n || null == r || null == i ? e[0] : new DOMRect(t, n, r - t, i - n)
                };

            function iM(e, t) {
                let n = [];
                for (let t of e) {
                    let e = t.target;
                    this.seenElements.has(e) || (this.seenElements.add(e), n.push(t))
                }
                n.length > 0 && this.resolveNext && (this.resolveNext(n), this.resolveNext = null), this.seenElements.size === this.uniqueElements.size && (t.disconnect(), this.done = !0, this.resolveNext && this.resolveNext([]))
            }
            var iF = async function*(e) {
                let t = {
                        uniqueElements: new Set(e),
                        seenElements: new Set,
                        resolveNext: null,
                        done: !1
                    },
                    n = new IntersectionObserver(iM.bind(t));
                for (let e of t.uniqueElements) n.observe(e);
                for (; !t.done;) {
                    let e = await new Promise(e => {
                        t.resolveNext = e
                    });
                    e.length > 0 && (yield e)
                }
            }, i$ = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, iR = async () => {
                let e = [];
                for (let t of iE) {
                    let n = iT.get(t);
                    if (n)
                        for (let t = 0; t < n.elements.length; t++) n.elements[t] instanceof Element && e.push(n.elements[t])
                }
                let t = new Map;
                for await (let n of iF(e)) {
                    for (let e of n) {
                        let n = e.target,
                            r = e.intersectionRect;
                        e.isIntersecting && r.width && r.height && t.set(n, r)
                    }
                    let e = [],
                        r = [],
                        i = [];
                    for (let n of iE) {
                        let o = iT.get(n);
                        if (!o) continue;
                        let a = [];
                        for (let e = 0; e < o.elements.length; e++) {
                            let n = o.elements[e],
                                r = t.get(n);
                            r && a.push(r)
                        }
                        a.length && (e.push(o), r.push(iA(a)), i.push($(n)))
                    }
                    if (e.length > 0) {
                        let t, n = new i$(7 * e.length * 4),
                            o = new Float32Array(n),
                            a = Array(e.length);
                        for (let n = 0, l = e.length; n < l; n++) {
                            let l = e[n],
                                s = i[n],
                                {
                                    x: c,
                                    y: d,
                                    width: u,
                                    height: p
                                } = r[n],
                                {
                                    count: h,
                                    name: m,
                                    didCommit: f
                                } = l;
                            if (ik) {
                                let e = 7 * n;
                                o[e] = s, o[e + 1] = h, o[e + 2] = c, o[e + 3] = d, o[e + 4] = u, o[e + 5] = p, o[e + 6] = f, a[n] = m
                            } else(t ||= Array(e.length))[n] = {
                                id: s,
                                name: m,
                                count: h,
                                x: c,
                                y: d,
                                width: u,
                                height: p,
                                didCommit: f
                            }
                        }
                        ik ? ik.postMessage({
                            type: "draw-outlines",
                            data: n,
                            names: a
                        }) : i_ && iN && t && (ix(iz, t), iC || (iC = requestAnimationFrame(iD)))
                    }
                }
                for (let e of iE) iT.delete(e), iE.delete(e)
            }, iD = () => {
                iN && i_ && (iC = ((e, t, n, r) => {
                    e.clearRect(0, 0, t.width / n, t.height / n);
                    let i = new Map,
                        o = new Map;
                    for (let e of r.values()) {
                        let {
                            x: t,
                            y: n,
                            width: r,
                            height: a,
                            targetX: l,
                            targetY: s,
                            targetWidth: c,
                            targetHeight: d,
                            frame: u
                        } = e;
                        l !== t && (e.x = ih(t, l)), s !== n && (e.y = ih(n, s)), c !== r && (e.width = ih(r, c)), d !== a && (e.height = ih(a, d));
                        let p = `${l??t},${s??n}`,
                            h = `${p},${c??r},${d??a}`,
                            m = i.get(p);
                        m ? m.push(e) : i.set(p, [e]);
                        let f = 1 - u / 45;
                        e.frame++;
                        let g = o.get(h) || {
                            x: t,
                            y: n,
                            width: r,
                            height: a,
                            alpha: f
                        };
                        f > g.alpha && (g.alpha = f), o.set(h, g)
                    }
                    for (let {
                            x: t,
                            y: n,
                            width: r,
                            height: i,
                            alpha: a
                        }
                        of o.values()) e.strokeStyle = `rgba(${im},${a})`, e.lineWidth = 1, e.beginPath(), e.rect(t, n, r, i), e.stroke(), e.fillStyle = `rgba(${im},${.1*a})`, e.fill();
                    e.font = "11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";
                    let a = new Map;
                    for (let t of (e.textRendering = "optimizeSpeed", i.values())) {
                        let {
                            x: n,
                            y: i,
                            frame: o
                        } = t[0], l = 1 - o / 45, s = iw(t), {
                            width: c
                        } = e.measureText(s);
                        a.set(`${n},${i},${c},${s}`, {
                            text: s,
                            width: c,
                            height: 11,
                            alpha: l,
                            x: n,
                            y: i,
                            outlines: t
                        });
                        let d = i - 11 - 4;
                        if (d < 0 && (d = 0), o > 45)
                            for (let e of t) r.delete(String(e.id))
                    }
                    for (let [t, n] of Array.from(a.entries()).sort((e, t) => {
                            let [n, r] = e, [i, o] = t;
                            return ib(o.outlines) - ib(r.outlines)
                        }))
                        if (a.has(t))
                            for (let [r, i] of a.entries()) {
                                if (t === r) continue;
                                let {
                                    x: o,
                                    y: l,
                                    width: s,
                                    height: c
                                } = n, {
                                    x: d,
                                    y: u,
                                    width: p,
                                    height: h
                                } = i;
                                o + s > d && d + p > o && l + c > u && u + h > l && (n.text = iw(n.outlines.concat(i.outlines)), n.width = e.measureText(n.text).width, a.delete(r))
                            }
                    for (let t of a.values()) {
                        let {
                            x: n,
                            y: r,
                            alpha: i,
                            width: o,
                            height: a,
                            text: l
                        } = t, s = r - a - 4;
                        s < 0 && (s = 0), e.fillStyle = `rgba(${im},${i})`, e.fillRect(n, s, o + 4, a + 4), e.fillStyle = `rgba(255,255,255,${i})`, e.fillText(l, n + 2, s + a)
                    }
                    return r.size > 0
                })(iN, i_, iS, iz) ? requestAnimationFrame(iD) : null)
            }, iP = "undefined" != typeof OffscreenCanvas && "undefined" != typeof Worker, ij = () => Math.min(window.devicePixelRatio || 1, 2), iI = !1, iL = e => !aU.has(e.memoizedProps), iO = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    [r, i] = eH(e);
                return eY(() => {
                    if (e === r) return;
                    let o = setTimeout(() => i(e), e ? t : n);
                    return () => clearTimeout(o)
                }, [e, t, n]), r
            }, iU = tl(() => nD("absolute inset-0 flex items-center gap-x-2", "translate-y-0", "transition-transform duration-300", nU.value && "-translate-y-[200%]")), iW = () => {
                let e = eB(null),
                    t = eB(null),
                    [n, r] = eH(null);
                tg(() => {
                    let e = az.inspectState.value;
                    "focused" === e.kind && r(e.fiber)
                }), tg(() => {
                    let n = nQ.value;
                    e3(() => {
                        let r;
                        if ("focused" !== az.inspectState.value.kind || !e.current || !t.current) return;
                        let {
                            totalUpdates: i,
                            currentIndex: o,
                            updates: a,
                            isVisible: l,
                            windowOffset: s
                        } = n, c = Math.max(0, i - 1), d = l ? `#${s+o} Re-render` : c > 0 ? `\xd7${c}` : "";
                        if (c > 0 && o >= 0 && o < a.length) {
                            var u, p;
                            let e = null == (p = a[o]) || null == (u = p.fiberInfo) ? void 0 : u.selfTime;
                            r = e > 0 ? e < .1 - Number.EPSILON ? "< 0.1ms" : `${Number(e.toFixed(1))}ms` : void 0
                        }
                        e.current.dataset.text = d ? ` \u2022 ${d}` : "", t.current.dataset.text = r ? ` \u2022 ${r}` : ""
                    })
                });
                let i = eV(() => {
                    if (!n) return null;
                    let {
                        name: e,
                        wrappers: t,
                        wrapperTypes: r
                    } = nO(n), i = t.length ? `${t.join("(")}(${e})${")".repeat(t.length)}` : e ?? "", o = r[0];
                    return tq("span", {
                        title: i,
                        className: "flex items-center gap-x-1",
                        children: [e ?? "Unknown", tq("span", {
                            title: null == o ? void 0 : o.title,
                            className: "flex items-center gap-x-1 text-[10px] text-purple-400",
                            children: !!o && tq(eh, {
                                children: [tq("span", {
                                    className: nD("rounded py-[1px] px-1", "truncate", o.compiler && "bg-purple-800 text-neutral-400", !o.compiler && "bg-neutral-700 text-neutral-300", "memo" === o.type && "bg-[#5f3f9a] text-white"),
                                    children: o.type
                                }, o.type), o.compiler && tq("span", {
                                    className: "text-yellow-300",
                                    children: "✨"
                                })]
                            })
                        }), r.length > 1 && tq("span", {
                            className: "text-[10px] text-neutral-400",
                            children: ["\xd7", r.length - 1]
                        })]
                    })
                }, [n]);
                return tq("div", {
                    className: iU,
                    children: [i, tq("div", {
                        className: "flex items-center gap-x-2 mr-auto text-xs text-[#888]",
                        children: [tq("span", {
                            ref: e,
                            className: "with-data-text cursor-pointer !overflow-visible",
                            title: "Click to toggle between rerenders and total renders"
                        }), tq("span", {
                            ref: t,
                            className: "with-data-text !overflow-visible"
                        })]
                    })]
                })
            }, iH = () => {
                let e = iO("focused" === az.inspectState.value.kind, 150, 0);
                if ("notifications" !== nB.value.view) return tq("div", {
                    className: "react-scan-header",
                    children: [tq("div", {
                        className: "relative flex-1 h-full",
                        children: tq("div", {
                            className: nD("react-scan-header-item is-visible", !e && "!duration-0"),
                            children: tq(iW, {})
                        })
                    }), tq("button", {
                        type: "button",
                        title: "Close",
                        className: "react-scan-close-button",
                        onClick: () => {
                            nB.value = {
                                view: "none"
                            }, az.inspectState.value = {
                                kind: "inspect-off"
                            }
                        },
                        children: tq(t0, {
                            name: "icon-close"
                        })
                    })]
                })
            }, iY = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return tq("div", {
                    className: nD("react-scan-toggle", t),
                    children: [tq("input", {
                        type: "checkbox",
                        ...n
                    }), tq("div", {})]
                })
            }, iX = e => {
                let {
                    fps: t
                } = e;
                return tq("div", {
                    className: nD("flex items-center gap-x-1 px-2 w-full", "h-6", "rounded-md", "font-mono leading-none", "bg-[#141414]", "ring-1 ring-white/[0.08]"),
                    children: [tq("div", {
                        style: {
                            color: t < 30 ? "#EF4444" : t < 50 ? "#F59E0B" : "rgb(214,132,245)"
                        },
                        className: "text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",
                        children: t
                    }), tq("span", {
                        className: "text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",
                        children: "FPS"
                    })]
                })
            }, iB = () => {
                let [e, t] = eH(null);
                return eY(() => {
                    let e = setInterval(() => {
                        t(ir())
                    }, 200);
                    return () => clearInterval(e)
                }, []), tq("div", {
                    className: nD("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]", "whitespace-nowrap text-sm text-white"),
                    children: null === e ? tq(eh, {
                        children: "️"
                    }) : tq(iX, {
                        fps: e
                    })
                })
            };
            t5 && (window.Cypress || navigator.webdriver);
            var iV = () => t5 ? (void 0 === window.reactScanIdCounter && (window.reactScanIdCounter = 0), `${++window.reactScanIdCounter}`) : "0",
                iq = e => {},
                iJ = class e extends Array {
                    push() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        let r = super.push(...t);
                        for (; this.length > this.capacity;) this.shift();
                        return r
                    }
                    static fromArray(t, n) {
                        let r = new e(n);
                        return r.push(...t), r
                    }
                    constructor(e = 25) {
                        super(), this.capacity = e
                    }
                },
                iG = new class {
                    subscribe(e) {
                        return this.subscribers.add(e), e(this.currentValue), () => {
                            this.subscribers.delete(e)
                        }
                    }
                    setState(e) {
                        this.currentValue = e, this.subscribers.forEach(t => t(e))
                    }
                    getCurrentState() {
                        return this.currentValue
                    }
                    constructor(e) {
                        this.subscribers = new Set, this.currentValue = e
                    }
                }(new iJ(150)),
                iK = new class {
                    publish(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            r = this.channels[t];
                        if (!r) {
                            if (!n) return;
                            this.channels[t] = {
                                callbacks: new iJ(50),
                                state: new iJ(50)
                            }, this.channels[t].state.push(e);
                            return
                        }
                        r.state.push(e), r.callbacks.forEach(t => t(e))
                    }
                    getAvailableChannels() {
                        return iJ.fromArray(Object.keys(this.channels), 50)
                    }
                    subscribe(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = () => (n || this.channels[e].state.forEach(e => {
                                t(e)
                            }), () => {
                                let n = this.channels[e].callbacks.filter(e => e !== t);
                                this.channels[e].callbacks = iJ.fromArray(n, 50)
                            }),
                            i = this.channels[e];
                        return i ? i.callbacks.push(t) : (this.channels[e] = {
                            callbacks: new iJ(50),
                            state: new iJ(50)
                        }, this.channels[e].callbacks.push(t)), r()
                    }
                    updateChannelState(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            r = this.channels[e];
                        if (!r) {
                            if (!n) return;
                            let r = new iJ(50),
                                i = {
                                    callbacks: new iJ(50),
                                    state: r
                                };
                            this.channels[e] = i, i.state = t(r);
                            return
                        }
                        r.state = t(r.state)
                    }
                    getChannelState(e) {
                        return this.channels[e].state ?? new iJ(50)
                    }
                    constructor() {
                        this.channels = {}
                    }
                },
                iZ = {
                    skipProviders: !0,
                    skipHocs: !0,
                    skipContainers: !0,
                    skipMinified: !0,
                    skipUtilities: !0,
                    skipBoundaries: !0
                },
                iQ = [/Provider$/, /^Provider$/, /^Context$/],
                i0 = [/^with[A-Z]/, /^forward(?:Ref)?$/i, /^Forward(?:Ref)?\(/],
                i1 = [/^(?:App)?Container$/, /^Root$/, /^ReactDev/],
                i2 = [/^Fragment$/, /^Suspense$/, /^ErrorBoundary$/, /^Portal$/, /^Consumer$/, /^Layout$/, /^Router/, /^Hydration/],
                i4 = [/^Boundary$/, /Boundary$/, /^Provider$/, /Provider$/],
                i5 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iZ,
                        n = [];
                    return t.skipProviders && n.push(...iQ), t.skipHocs && n.push(...i0), t.skipContainers && n.push(...i1), t.skipUtilities && n.push(...i2), t.skipBoundaries && n.push(...i4), !n.some(t => t.test(e))
                },
                i3 = [/^[a-z]$/, /^[a-z][0-9]$/, /^_+$/, /^[A-Za-z][_$]$/, /^[a-z]{1,2}$/],
                i6 = e => {
                    var t;
                    for (let t = 0; t < i3.length; t++)
                        if (i3[t].test(e)) return !0;
                    let n = !/[aeiou]/i.test(e),
                        r = ((null == (t = e.match(/\d/g)) ? void 0 : t.length) ?? 0) > e.length / 2,
                        i = /^[a-z]+$/.test(e),
                        o = /[$_]{2,}/.test(e);
                    return Number(n) + Number(r) + Number(i) + Number(o) >= 2
                },
                i8 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iZ;
                    if (!e || !T(e.type)) return [];
                    let n = [],
                        r = e;
                    for (; r.return;) {
                        let e = i7(r.type);
                        e && !i6(e) && i5(e, t) && e.toLowerCase() !== e && n.push(e), r = r.return
                    }
                    let i = Array(n.length);
                    for (let e = 0; e < n.length; e++) i[e] = n[n.length - e - 1];
                    return i
                },
                i7 = e => {
                    let t = T(e);
                    return t ? t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/, "$<inner>") : ""
                },
                i9 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                        n = e;
                    for (; n;) {
                        let e = T(n.type);
                        if (e && t(e)) return e;
                        n = n.return
                    }
                    return null
                },
                oe = "never-hidden",
                ot = null,
                on = new iJ(25),
                or = (e, t) => {
                    let n = null,
                        r = t => {
                            switch (e) {
                                case "pointer":
                                    if ("start" === t.phase) return "pointerup";
                                    if (t.target instanceof HTMLInputElement || t.target instanceof HTMLSelectElement) return "change";
                                    return "click";
                                case "keyboard":
                                    if ("start" === t.phase) return "keydown";
                                    return "change"
                            }
                        },
                        i = {
                            current: {
                                kind: "uninitialized-stage",
                                interactionUUID: iV(),
                                stageStart: Date.now(),
                                interactionType: e
                            }
                        },
                        o = n => {
                            var o, l;
                            if (n.composedPath().some(e => e instanceof Element && "react-scan-toolbar-root" === e.id) || (Date.now() - i.current.stageStart > 2e3 && (i.current = {
                                    kind: "uninitialized-stage",
                                    interactionUUID: iV(),
                                    stageStart: Date.now(),
                                    interactionType: e
                                }), "uninitialized-stage" !== i.current.kind)) return;
                            let s = performance.now();
                            null == t || null == (o = t.onStart) || o.call(t, i.current.interactionUUID);
                            let c = (e => {
                                let t = rS(e);
                                if (!t) return;
                                let n = t ? T(null == t ? void 0 : t.type) : "N/A";
                                if (n || (n = i9(t, e => e.length > 2) ?? "N/A"), n) return {
                                    componentPath: i8(t),
                                    childrenTree: {},
                                    componentName: n,
                                    elementFiber: t
                                }
                            })(n.target);
                            if (!c) {
                                null == t || null == (l = t.onError) || l.call(t, i.current.interactionUUID);
                                return
                            }
                            let d = {},
                                u = oa(d);
                            i.current = {
                                ...i.current,
                                interactionType: e,
                                blockingTimeStart: Date.now(),
                                childrenTree: c.childrenTree,
                                componentName: c.componentName,
                                componentPath: c.componentPath,
                                fiberRenders: d,
                                kind: "interaction-start",
                                interactionStartDetail: s,
                                stopListeningForRenders: u
                            };
                            let p = r({
                                phase: "end",
                                target: n.target
                            });
                            document.addEventListener(p, a, {
                                once: !0
                            }), requestAnimationFrame(() => {
                                document.removeEventListener(p, a)
                            })
                        };
                    document.addEventListener(r({
                        phase: "start"
                    }), o, {
                        capture: !0
                    });
                    let a = (r, o, a) => {
                            if ("interaction-start" !== i.current.kind && o === n) {
                                var l;
                                if ("pointer" === e && r.target instanceof HTMLSelectElement) {
                                    i.current = {
                                        kind: "uninitialized-stage",
                                        interactionUUID: iV(),
                                        stageStart: Date.now(),
                                        interactionType: e
                                    };
                                    return
                                }
                                null == t || null == (l = t.onError) || l.call(t, i.current.interactionUUID), i.current = {
                                    kind: "uninitialized-stage",
                                    interactionUUID: iV(),
                                    stageStart: Date.now(),
                                    interactionType: e
                                }, iq("pointer -> click");
                                return
                            }
                            n = o, (e => {
                                let {
                                    onMicroTask: t,
                                    onRAF: n,
                                    onTimeout: r,
                                    abort: i
                                } = e;
                                queueMicrotask(() => {
                                    (null == i ? void 0 : i()) === !0 || t() && requestAnimationFrame(() => {
                                        (null == i ? void 0 : i()) === !0 || n() && setTimeout(() => {
                                            (null == i ? void 0 : i()) !== !0 && r()
                                        }, 0)
                                    })
                                })
                            })({
                                abort: a,
                                onMicroTask: () => "uninitialized-stage" !== i.current.kind && (i.current = {
                                    ...i.current,
                                    kind: "js-end-stage",
                                    jsEndDetail: performance.now()
                                }, !0),
                                onRAF: () => {
                                    if ("js-end-stage" !== i.current.kind && "raf-stage" !== i.current.kind) {
                                        var n;
                                        return null == t || null == (n = t.onError) || n.call(t, i.current.interactionUUID), iq("bad transition to raf"), i.current = {
                                            kind: "uninitialized-stage",
                                            interactionUUID: iV(),
                                            stageStart: Date.now(),
                                            interactionType: e
                                        }, !1
                                    }
                                    return i.current = {
                                        ...i.current,
                                        kind: "raf-stage",
                                        rafStart: performance.now()
                                    }, !0
                                },
                                onTimeout: () => {
                                    if ("raf-stage" !== i.current.kind) {
                                        var n;
                                        null == t || null == (n = t.onError) || n.call(t, i.current.interactionUUID), i.current = {
                                            kind: "uninitialized-stage",
                                            interactionUUID: iV(),
                                            stageStart: Date.now(),
                                            interactionType: e
                                        }, iq("raf->timeout");
                                        return
                                    }
                                    let r = Date.now(),
                                        o = Object.freeze({
                                            ...i.current,
                                            kind: "timeout-stage",
                                            blockingTimeEnd: r,
                                            commitEnd: performance.now()
                                        });
                                    i.current = {
                                        kind: "uninitialized-stage",
                                        interactionUUID: iV(),
                                        stageStart: r,
                                        interactionType: e
                                    };
                                    let a = !1,
                                        l = e => {
                                            var n;
                                            a = !0;
                                            let r = {
                                                detailedTiming: o,
                                                latency: "auto-complete-race" === e.kind ? e.detailedTiming.commitEnd - e.detailedTiming.interactionStartDetail : e.entry.latency,
                                                completedAt: Date.now(),
                                                flushNeeded: !0
                                            };
                                            null == t || null == (n = t.onComplete) || n.call(t, o.interactionUUID, r, e);
                                            let i = on.filter(e => e.interactionUUID !== o.interactionUUID);
                                            return on = iJ.fromArray(i, 25), r
                                        },
                                        s = {
                                            completeInteraction: l,
                                            endDateTime: Date.now(),
                                            startDateTime: o.blockingTimeStart,
                                            type: e,
                                            interactionUUID: o.interactionUUID
                                        };
                                    if (on.push(s), oo()) setTimeout(() => {
                                        if (a) return;
                                        l({
                                            kind: "auto-complete-race",
                                            detailedTiming: o,
                                            interactionUUID: o.interactionUUID
                                        });
                                        let e = on.filter(e => e.interactionUUID !== o.interactionUUID);
                                        on = iJ.fromArray(e, 25)
                                    }, 1e3);
                                    else {
                                        let e = on.filter(e => e.interactionUUID !== o.interactionUUID);
                                        on = iJ.fromArray(e, 25), l({
                                            kind: "auto-complete-race",
                                            detailedTiming: o,
                                            interactionUUID: o.interactionUUID
                                        })
                                    }
                                }
                            })
                        },
                        l = e => {
                            let t = iV();
                            a(e, t, () => t !== n)
                        };
                    return "keyboard" === e && document.addEventListener("keypress", l), () => {
                        document.removeEventListener(r({
                            phase: "start"
                        }), o, {
                            capture: !0
                        }), document.removeEventListener("keypress", l)
                    }
                },
                oi = e => {
                    var t;
                    return null == (t = k(e, e => {
                        if (v(e)) return !0
                    })) ? void 0 : t.stateNode
                },
                oo = () => "PerformanceEventTiming" in globalThis,
                oa = e => {
                    let t = t => {
                        var n, r, i, o, a;
                        let l = T(t.type);
                        if (!l) return;
                        let s = e[l];
                        if (!s) {
                            let n = new Set,
                                r = t.return && rT(t.return),
                                i = r && T(r[0]);
                            i && n.add(i);
                            let {
                                selfTime: o,
                                totalTime: a
                            } = S(t), s = r6(t), c = {
                                current: [],
                                changes: new Set,
                                changesCounts: new Map
                            }, d = {
                                fiberProps: s.fiberProps || c,
                                fiberState: s.fiberState || c,
                                fiberContext: s.fiberContext || c
                            };
                            e[l] = {
                                renderCount: 1,
                                hasMemoCache: C(t),
                                wasFiberRenderMount: os(t),
                                parents: n,
                                selfTime: o,
                                totalTime: a,
                                nodeInfo: [{
                                    element: oi(t),
                                    name: T(t.type) ?? "Unknown",
                                    selfTime: S(t).selfTime
                                }],
                                changes: d
                            };
                            return
                        }
                        if (null == (r = rT(t)) || null == (n = r[0]) ? void 0 : n.type) {
                            let e = t.return && rT(t.return),
                                n = e && T(e[0]);
                            n && s.parents.add(n)
                        }
                        let {
                            selfTime: c,
                            totalTime: d
                        } = S(t), u = r6(t);
                        if (!u) return;
                        let p = {
                            current: [],
                            changes: new Set,
                            changesCounts: new Map
                        };
                        s.wasFiberRenderMount = s.wasFiberRenderMount || os(t), s.hasMemoCache = s.hasMemoCache || C(t), s.changes = {
                            fiberProps: ol((null == (i = s.changes) ? void 0 : i.fiberProps) || p, u.fiberProps || p),
                            fiberState: ol((null == (o = s.changes) ? void 0 : o.fiberState) || p, u.fiberState || p),
                            fiberContext: ol((null == (a = s.changes) ? void 0 : a.fiberContext) || p, u.fiberContext || p)
                        }, s.renderCount += 1, s.selfTime += c, s.totalTime += d, s.nodeInfo.push({
                            element: oi(t),
                            name: T(t.type) ?? "Unknown",
                            selfTime: S(t).selfTime
                        })
                    };
                    return az.interactionListeningForRenders = t, () => {
                        az.interactionListeningForRenders === t && (az.interactionListeningForRenders = null)
                    }
                },
                ol = (e, t) => {
                    let n = {
                        current: [...e.current],
                        changes: new Set,
                        changesCounts: new Map
                    };
                    for (let e of t.current) n.current.some(t => t.name === e.name) || n.current.push(e);
                    for (let r of t.changes)
                        if ("string" == typeof r || "number" == typeof r) {
                            n.changes.add(r);
                            let i = e.changesCounts.get(r) || 0,
                                o = t.changesCounts.get(r) || 0;
                            n.changesCounts.set(r, i + o)
                        } return n
                },
                os = e => {
                    if (!e.alternate) return !0;
                    let t = e.alternate,
                        n = t && null != t.memoizedState && null != t.memoizedState.element && !0 !== t.memoizedState.isDehydrated,
                        r = null != e.memoizedState && null != e.memoizedState.element && !0 !== e.memoizedState.isDehydrated;
                    return !n && r
                },
                oc = e => {
                    let t, n = new Set,
                        r = (e, r) => {
                            let i = "function" == typeof e ? e(t) : e;
                            if (!Object.is(i, t)) {
                                let e = t;
                                t = r ?? ("object" != typeof i || null === i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                            }
                        },
                        i = () => t,
                        o = {
                            setState: r,
                            getState: i,
                            getInitialState: () => a,
                            subscribe: (e, r) => {
                                let i, o;
                                r ? (i = e, o = r) : o = e;
                                let a = i ? i(t) : void 0,
                                    l = (e, t) => {
                                        if (i) {
                                            let n = i(e),
                                                r = i(t);
                                            Object.is(a, n) || (a = n, o(n, r))
                                        } else o(e, t)
                                    };
                                return n.add(l), () => n.delete(l)
                            }
                        },
                        a = t = e(r, i, o);
                    return o
                },
                od = e => e ? oc(e) : oc,
                ou = null;
            od()(e => ({
                state: {
                    events: []
                },
                actions: {
                    addEvent: t => {
                        e(e => ({
                            state: {
                                events: [...e.state.events, t]
                            }
                        }))
                    },
                    clear: () => {
                        e({
                            state: {
                                events: []
                            }
                        })
                    }
                }
            }));
            var op = od()((e, t) => {
                    let n = new Set;
                    return {
                        state: {
                            events: new iJ(200)
                        },
                        actions: {
                            addEvent: r => {
                                n.forEach(e => e(r));
                                let i = [...t().state.events, r],
                                    o = new Set;
                                i.forEach(e => {
                                    if ("interaction" !== e.kind) {
                                        let t;
                                        (t = i.find(t => {
                                            if ("long-render" !== t.kind && t.id !== e.id && (e.data.startAt <= t.data.startAt && e.data.endAt <= t.data.endAt && e.data.endAt >= t.data.startAt || t.data.startAt <= e.data.startAt && t.data.endAt >= e.data.startAt || e.data.startAt <= t.data.startAt && e.data.endAt >= t.data.endAt)) return !0
                                        })) && (() => {
                                            o.add(e.id)
                                        })(t)
                                    }
                                });
                                let a = i.filter(e => !o.has(e.id));
                                e(() => ({
                                    state: {
                                        events: iJ.fromArray(a, 200)
                                    }
                                }))
                            },
                            addListener: e => (n.add(e), () => {
                                n.delete(e)
                            }),
                            clear: () => {
                                e({
                                    state: {
                                        events: new iJ(200)
                                    }
                                })
                            }
                        }
                    }
                }),
                oh = null,
                om = null,
                of = null,
                og = [],
                ov = e => {
                    let t = e.filter(e => e.length > 2);
                    return 0 === t.length ? e.at(-1) ?? "Unknown" : t.at(-1)
                },
                ow = e => {
                    switch (e.kind) {
                        case "interaction": {
                            let {
                                renderTime: t,
                                otherJSTime: n,
                                framePreparation: r,
                                frameConstruction: i,
                                frameDraw: o
                            } = e;
                            return t + n + r + i + (o ?? 0)
                        }
                        case "dropped-frames":
                            return e.otherTime + e.renderTime
                    }
                },
                ob = e => {
                    let t = ow(e.timing);
                    switch (e.kind) {
                        case "interaction":
                            if (t < 200) return "low";
                            if (t < 500) return "needs-improvement";
                            return "high";
                        case "dropped-frames":
                            if (t < 50) return "low";
                            if (t < 150) return "needs-improvement";
                            return "high"
                    }
                },
                ox = eT(null),
                oy = e => {
                    let {
                        size: t = 24,
                        className: n
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: nD(["lucide lucide-chevron-right", n]),
                        children: tq("path", {
                            d: "m9 18 6-6-6-6"
                        })
                    })
                },
                ok = e => {
                    let {
                        className: t = "",
                        size: n = 24,
                        events: r = []
                    } = e, i = r.includes(!0), o = r.filter(e => e).length, a = i ? Math.max(.6 * n, 14) : Math.max(.4 * n, 6);
                    return tq("div", {
                        className: "relative",
                        children: [tq("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: n,
                            height: n,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            className: `lucide lucide-bell ${t}`,
                            children: [tq("path", {
                                d: "M10.268 21a2 2 0 0 0 3.464 0"
                            }), tq("path", {
                                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                            })]
                        }), r.length > 0 && o > 0 && aT.options.value.showNotificationCount && tq("div", {
                            className: nD(["absolute", i ? "-top-2.5 -right-2.5" : "-top-1 -right-1", "rounded-full", "flex items-center justify-center", "text-[8px] font-medium text-white", "aspect-square", i ? "bg-red-500/90" : "bg-purple-500/90"]),
                            style: {
                                width: `${a}px`,
                                height: `${a}px`,
                                padding: i ? "0.5px" : "0"
                            },
                            children: i && (o > 99 ? ">99" : o)
                        })]
                    })
                },
                o_ = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        children: [tq("path", {
                            d: "M18 6 6 18"
                        }), tq("path", {
                            d: "m6 6 12 12"
                        })]
                    })
                },
                oN = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        children: [tq("path", {
                            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
                        }), tq("path", {
                            d: "M16 9a5 5 0 0 1 0 6"
                        }), tq("path", {
                            d: "M19.364 18.364a9 9 0 0 0 0-12.728"
                        })]
                    })
                },
                oS = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        children: [tq("path", {
                            d: "M16 9a5 5 0 0 1 .95 2.293"
                        }), tq("path", {
                            d: "M19.364 5.636a9 9 0 0 1 1.889 9.96"
                        }), tq("path", {
                            d: "m2 2 20 20"
                        }), tq("path", {
                            d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
                        }), tq("path", {
                            d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686"
                        })]
                    })
                },
                oC = e => {
                    let {
                        size: t = 24,
                        className: n
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: nD(["lucide lucide-arrow-left", n]),
                        children: [tq("path", {
                            d: "m12 19-7-7 7-7"
                        }), tq("path", {
                            d: "M19 12H5"
                        })]
                    })
                },
                oz = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        children: [tq("path", {
                            d: "M14 4.1 12 6"
                        }), tq("path", {
                            d: "m5.1 8-2.9-.8"
                        }), tq("path", {
                            d: "m6 12-1.9 2"
                        }), tq("path", {
                            d: "M7.2 2.2 8 5.1"
                        }), tq("path", {
                            d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
                        })]
                    })
                },
                oT = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        children: [tq("path", {
                            d: "M10 8h.01"
                        }), tq("path", {
                            d: "M12 12h.01"
                        }), tq("path", {
                            d: "M14 8h.01"
                        }), tq("path", {
                            d: "M16 12h.01"
                        }), tq("path", {
                            d: "M18 8h.01"
                        }), tq("path", {
                            d: "M6 8h.01"
                        }), tq("path", {
                            d: "M7 16h10"
                        }), tq("path", {
                            d: "M8 12h.01"
                        }), tq("rect", {
                            width: "20",
                            height: "16",
                            x: "2",
                            y: "4",
                            rx: "2"
                        })]
                    })
                },
                oE = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className: t,
                        style: {
                            transform: "rotate(180deg)"
                        },
                        children: [tq("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }), tq("path", {
                            d: "m4.9 4.9 14.2 14.2"
                        })]
                    })
                },
                oA = e => {
                    let {
                        className: t = "",
                        size: n = 24
                    } = e;
                    return tq("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: t,
                        children: [tq("polyline", {
                            points: "22 17 13.5 8.5 8.5 13.5 2 7"
                        }), tq("polyline", {
                            points: "16 17 22 17 22 11"
                        })]
                    })
                },
                oM = e => {
                    var t;
                    let {
                        children: n,
                        triggerContent: r,
                        wrapperProps: i
                    } = e, [o, a] = eH("closed"), [l, s] = eH(null), [c, d] = eH({
                        width: window.innerWidth,
                        height: window.innerHeight
                    }), u = eB(null), p = eB(null), h = eJ(ak), m = eB(!1);
                    eY(() => {
                        let e = () => {
                            d({
                                width: window.innerWidth,
                                height: window.innerHeight
                            }), f()
                        };
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []);
                    let f = () => {
                        if (u.current && h) {
                            let e = u.current.getBoundingClientRect(),
                                t = h.getBoundingClientRect(),
                                n = e.left + e.width / 2,
                                r = e.top;
                            s(new DOMRect(n - t.left, r - t.top, e.width, e.height))
                        }
                    };
                    eY(() => {
                        f()
                    }, [u.current]), eY(() => {
                        if ("opening" === o) {
                            let e = setTimeout(() => a("open"), 120);
                            return () => clearTimeout(e)
                        }
                        if ("closing" === o) {
                            let e = setTimeout(() => a("closed"), 120);
                            return () => clearTimeout(e)
                        }
                    }, [o]), eY(() => {
                        let e = setInterval(() => {
                            m.current || "closed" === o || a("closing")
                        }, 1e3);
                        return () => clearInterval(e)
                    }, [o]);
                    let g = () => {
                        var e;
                        if (!l || !h) return {
                            top: 0,
                            left: 0
                        };
                        let t = h.getBoundingClientRect(),
                            n = (null == (e = p.current) ? void 0 : e.offsetHeight) || 40,
                            r = l.x + t.left,
                            i = l.y + t.top,
                            o = r,
                            a = i - 4;
                        return o - 87.5 < 5 ? o = 92.5 : o + 87.5 > c.width - 5 && (o = c.width - 5 - 87.5), a - n < 5 && (a = i + l.height + 4), {
                            top: a - t.top,
                            left: o - t.left
                        }
                    };
                    return tq(eh, {
                        children: [h && l && "closed" !== o && ((t = eu(tF, {
                            __v: tq("div", {
                                ref: p,
                                className: nD(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg", "transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]", 'after:content-[""] after:absolute after:top-[100%]', "after:left-1/2 after:-translate-x-1/2", "after:w-[10px] after:h-[6px]", "after:border-l-[5px] after:border-l-transparent", "after:border-r-[5px] after:border-r-transparent", "after:border-t-[6px] after:border-t-white", "pointer-events-none", "opening" === o || "closing" === o ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"]),
                                style: {
                                    top: g().top + "px",
                                    left: g().left + "px",
                                    transform: "translate(-50%, -100%)",
                                    minWidth: "175px"
                                },
                                children: n
                            }),
                            h: h
                        })).containerInfo = h, t), tq("div", {
                            ref: u,
                            onMouseEnter: () => {
                                m.current = !0, f(), a("opening")
                            },
                            onMouseLeave: () => {
                                m.current = !1, f(), a("closing")
                            },
                            ...i,
                            children: r
                        })]
                    })
                },
                oF = e => {
                    let {
                        selectedEvent: t
                    } = e, {
                        notificationState: n,
                        setNotificationState: r,
                        setRoute: i
                    } = eJ(ox);
                    return tq("div", {
                        className: nD(["flex w-full justify-between items-center px-3 py-2 text-xs"]),
                        children: [tq("div", {
                            className: nD(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),
                            children: [tq("button", {
                                onClick: () => {
                                    i({
                                        route: "render-visualization",
                                        routeMessage: null
                                    })
                                },
                                className: nD(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "render-visualization" === n.route || "render-explanation" === n.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]),
                                children: "Ranked"
                            }), tq("button", {
                                onClick: () => {
                                    i({
                                        route: "other-visualization",
                                        routeMessage: null
                                    })
                                },
                                className: nD(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "other-visualization" === n.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]),
                                children: "Overview"
                            }), tq("button", {
                                onClick: () => {
                                    i({
                                        route: "optimize",
                                        routeMessage: null
                                    })
                                },
                                className: nD(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1", "optimize" === n.route ? "text-white bg-[#7521c8] rounded-sm" : "text-[#6E6E77] bg-[#18181B] rounded-sm"]),
                                children: tq("span", {
                                    children: "Prompts"
                                })
                            })]
                        }), tq(oM, {
                            triggerContent: tq("button", {
                                onClick: () => {
                                    r(e => {
                                        e.audioNotificationsOptions.enabled && "closed" !== e.audioNotificationsOptions.audioContext.state && e.audioNotificationsOptions.audioContext.close();
                                        let t = e.audioNotificationsOptions.enabled;
                                        localStorage.setItem("react-scan-notifications-audio", String(!t));
                                        let n = new AudioContext;
                                        return e.audioNotificationsOptions.enabled || tZ(n), t && n.close(), {
                                            ...e,
                                            audioNotificationsOptions: t ? {
                                                audioContext: null,
                                                enabled: !1
                                            } : {
                                                audioContext: n,
                                                enabled: !0
                                            }
                                        }
                                    })
                                },
                                className: "ml-auto",
                                children: tq("div", {
                                    className: nD(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),
                                    children: [tq("span", {
                                        children: "Alerts"
                                    }), n.audioNotificationsOptions.enabled ? tq(oN, {
                                        size: 16,
                                        className: "text-[#6E6E77]"
                                    }) : tq(oS, {
                                        size: 16,
                                        className: "text-[#6E6E77]"
                                    })]
                                })
                            }),
                            children: tq(eh, {
                                children: "Play a chime when a slowdown is recorded"
                            })
                        })]
                    })
                },
                o$ = e => {
                    let t = "";
                    return e.toSorted((e, t) => t.totalTime - e.totalTime).slice(0, 30).filter(e => e.totalTime > 5).forEach(e => {
                        let n = "";
                        n += "Component Name:", n += e.name, n += "\n", n += `Rendered: ${e.count} times
`, n += `Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`, e.changes.props.length > 0 && (n += `Changed props for all ${e.name} instances ("name:count" pairs)
`, e.changes.props.forEach(e => {
                            n += `${e.name}:${e.count}x
`
                        })), e.changes.state.length > 0 && (n += `Changed state for all ${e.name} instances ("hook index:count" pairs)
`, e.changes.state.forEach(e => {
                            n += `${e.index}:${e.count}x
`
                        })), e.changes.context.length > 0 && (n += `Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`, e.changes.context.forEach(e => {
                            n += `${e.name}:${e.count}x
`
                        })), t += n, t += "\n"
                    }), t
                },
                oR = (e, t) => (() => {
                    switch (e) {
                        case "data":
                            switch (t.kind) {
                                case "dropped-frames":
                                    return (e => {
                                        let {
                                            renderTime: t,
                                            otherTime: n,
                                            formattedReactData: r
                                        } = e;
                                        return `I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${n}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`
                                    })({
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        otherTime: t.timing.otherTime
                                    });
                                case "interaction":
                                    return (e => {
                                        let {
                                            renderTime: t,
                                            eHandlerTimeExcludingRenders: n,
                                            toRafTime: r,
                                            commitTime: i,
                                            framePresentTime: o,
                                            formattedReactData: a
                                        } = e;
                                        return `I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${n.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${i.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===o?"":`- how long it took from dom commit for the frame to be presented: ${o.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`
                                    })({
                                        commitTime: t.timing.frameConstruction,
                                        eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        framePresentTime: t.timing.frameDraw,
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        toRafTime: t.timing.framePreparation
                                    })
                            }
                        case "explanation":
                            switch (t.kind) {
                                case "dropped-frames":
                                    return (e => {
                                        let {
                                            renderTime: t,
                                            otherTime: n,
                                            formattedReactData: r
                                        } = e;
                                        return `Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${n}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`
                                    })({
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        otherTime: t.timing.otherTime
                                    });
                                case "interaction":
                                    return (e => {
                                        let {
                                            interactionType: t,
                                            name: n,
                                            time: r,
                                            renderTime: i,
                                            eHandlerTimeExcludingRenders: o,
                                            toRafTime: a,
                                            commitTime: l,
                                            framePresentTime: s,
                                            formattedReactData: c
                                        } = e;
                                        return `Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${t} on a component named ${n}. This means, roughly, the component that handled the ${t} event was named ${n}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${o.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===s?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`
                                    })({
                                        commitTime: t.timing.frameConstruction,
                                        eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        framePresentTime: t.timing.frameDraw,
                                        interactionType: t.type,
                                        name: ov(t.componentPath),
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        time: ow(t.timing),
                                        toRafTime: t.timing.framePreparation
                                    })
                            }
                        case "fix":
                            switch (t.kind) {
                                case "dropped-frames":
                                    return (e => {
                                        let {
                                            renderTime: t,
                                            otherTime: n,
                                            formattedReactData: r
                                        } = e;
                                        return `You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time: ${n}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`
                                    })({
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        otherTime: t.timing.otherTime
                                    });
                                case "interaction":
                                    return (e => {
                                        let {
                                            interactionType: t,
                                            name: n,
                                            componentPath: r,
                                            time: i,
                                            renderTime: o,
                                            eHandlerTimeExcludingRenders: a,
                                            toRafTime: l,
                                            commitTime: s,
                                            framePresentTime: c,
                                            formattedReactData: d
                                        } = e;
                                        return `You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${t} on the component named ${n}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${o.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${l.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===c?"":`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${d}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`
                                    })({
                                        commitTime: t.timing.frameConstruction,
                                        componentPath: t.componentPath.join(">"),
                                        eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                                        formattedReactData: o$(t.groupedFiberRenders),
                                        framePresentTime: t.timing.frameDraw,
                                        interactionType: t.type,
                                        name: ov(t.componentPath),
                                        renderTime: t.groupedFiberRenders.reduce((e, t) => e + t.totalTime, 0),
                                        time: ow(t.timing),
                                        toRafTime: t.timing.framePreparation
                                    })
                            }
                    }
                })(),
                oD = e => {
                    let {
                        selectedEvent: t
                    } = e, [n, r] = eH("fix"), [i, o] = eH(!1);
                    return tq("div", {
                        className: nD(["w-full h-full"]),
                        children: [tq("div", {
                            className: nD(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),
                            children: [tq("div", {
                                className: nD(["bg-[#18181B] p-1 rounded-t-sm"]),
                                children: tq("div", {
                                    className: nD(["flex items-center gap-x-1"]),
                                    children: [tq("button", {
                                        onClick: () => r("fix"),
                                        className: nD(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "fix" === n ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]),
                                        children: "Fix"
                                    }), tq("button", {
                                        onClick: () => r("explanation"),
                                        className: nD(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "explanation" === n ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]),
                                        children: "Explanation"
                                    }), tq("button", {
                                        onClick: () => r("data"),
                                        className: nD(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm", "data" === n ? "text-white bg-[#7521c8]" : "text-[#6E6E77] hover:text-white"]),
                                        children: "Data"
                                    })]
                                })
                            }), tq("div", {
                                className: nD(["overflow-y-auto h-full"]),
                                children: tq("pre", {
                                    className: nD(["p-2 h-full", "whitespace-pre-wrap break-words", "text-gray-300 font-mono "]),
                                    children: oR(n, t)
                                })
                            })]
                        }), tq("button", {
                            onClick: async () => {
                                let e = oR(n, t);
                                await navigator.clipboard.writeText(e), o(!0), setTimeout(() => o(!1), 1e3)
                            },
                            className: nD(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm", "hover:text-white transition-colors duration-200", "flex items-center justify-center gap-x-2 text-xs"]),
                            children: [tq("span", {
                                children: i ? "Copied!" : "Copy Prompt"
                            }), tq("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: nD(["transition-transform duration-200", i && "scale-110"]),
                                children: i ? tq("path", {
                                    d: "M20 6L9 17l-5-5"
                                }) : tq(eh, {
                                    children: [tq("rect", {
                                        width: "14",
                                        height: "14",
                                        x: "8",
                                        y: "8",
                                        rx: "2",
                                        ry: "2"
                                    }), tq("path", {
                                        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                oP = e => {
                    var t;
                    let {
                        selectedEvent: n
                    } = e, [r] = eH(aR() ?? !1), {
                        notificationState: i
                    } = eJ(ox), [o, a] = eH((null == (t = i.routeMessage) ? void 0 : t.name) ? [i.routeMessage.name] : []), l = ((e, t) => {
                        switch (e.kind) {
                            case "dropped-frames":
                                return [...t ? [{
                                    name: "Total Processing Time",
                                    time: ow(e.timing),
                                    color: "bg-red-500",
                                    kind: "total-processing-time"
                                }] : [{
                                    name: "Renders",
                                    time: e.timing.renderTime,
                                    color: "bg-purple-500",
                                    kind: "render"
                                }, {
                                    name: "JavaScript, DOM updates, Draw Frame",
                                    time: e.timing.otherTime,
                                    color: "bg-[#4b4b4b]",
                                    kind: "other-frame-drop"
                                }]];
                            case "interaction":
                                return [...t ? [] : [{
                                    name: "Renders",
                                    time: e.timing.renderTime,
                                    color: "bg-purple-500",
                                    kind: "render"
                                }], {
                                    name: t ? "React Renders, Hooks, Other JavaScript" : "JavaScript/React Hooks ",
                                    time: e.timing.otherJSTime,
                                    color: "bg-[#EFD81A]",
                                    kind: "other-javascript"
                                }, {
                                    name: "Update DOM and Draw New Frame",
                                    time: ow(e.timing) - e.timing.renderTime - e.timing.otherJSTime,
                                    color: "bg-[#1D3A66]",
                                    kind: "other-not-javascript"
                                }]
                        }
                    })(n, r), s = eJ(ak);
                    eY(() => {
                        var e;
                        if (null == (e = i.routeMessage) ? void 0 : e.name) {
                            let e = null == s ? void 0 : s.querySelector("#overview-scroll-container"),
                                t = null == s ? void 0 : s.querySelector(`#react-scan-overview-bar-${i.routeMessage.name}`);
                            if (e && t) {
                                let n = t.getBoundingClientRect().top,
                                    r = e.getBoundingClientRect().top;
                                e.scrollTop = e.scrollTop + (n - r)
                            }
                        }
                    }, [i.route]), eY(() => {
                        "other-visualization" === i.route && a(e => {
                            var t;
                            return (null == (t = i.routeMessage) ? void 0 : t.name) ? [i.routeMessage.name] : e
                        })
                    }, [i.route]);
                    let c = l.reduce((e, t) => e + t.time, 0);
                    return tq("div", {
                        className: "rounded-sm border border-zinc-800 text-xs",
                        children: [tq("div", {
                            className: "p-2 border-b border-zinc-800 bg-zinc-900/50",
                            children: tq("div", {
                                className: "flex items-center justify-between",
                                children: [tq("h3", {
                                    className: "text-xs font-medium",
                                    children: "What was time spent on?"
                                }), tq("span", {
                                    className: "text-xs text-zinc-400",
                                    children: ["Total: ", c.toFixed(0), "ms"]
                                })]
                            })
                        }), tq("div", {
                            className: "divide-y divide-zinc-800",
                            children: l.map(e => {
                                let t = o.includes(e.kind);
                                return tq("div", {
                                    id: `react-scan-overview-bar-${e.kind}`,
                                    children: [tq("button", {
                                        onClick: () => a(t => t.includes(e.kind) ? t.filter(t => t !== e.kind) : [...t, e.kind]),
                                        className: "w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",
                                        children: tq("div", {
                                            className: "flex-1",
                                            children: [tq("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [tq("div", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [tq("svg", {
                                                        className: `h-4 w-4 text-zinc-400 transition-transform ${t?"rotate-90":""}`,
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: tq("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5l7 7-7 7"
                                                        })
                                                    }), tq("span", {
                                                        className: "font-medium flex items-center text-left",
                                                        children: e.name
                                                    })]
                                                }), tq("span", {
                                                    className: " text-zinc-400",
                                                    children: [e.time.toFixed(0), "ms"]
                                                })]
                                            }), tq("div", {
                                                className: "h-1 bg-zinc-800 rounded-full overflow-hidden",
                                                children: tq("div", {
                                                    className: `h-full ${e.color} transition-all`,
                                                    style: {
                                                        width: `${e.time/c*100}%`
                                                    }
                                                })
                                            })]
                                        })
                                    }), t && tq("div", {
                                        className: "bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",
                                        children: tq("p", {
                                            className: " text-zinc-400 mb-4 text-xs",
                                            children: (() => {
                                                switch (n.kind) {
                                                    case "interaction":
                                                        switch (e.kind) {
                                                            case "render":
                                                                return tq(oU, {
                                                                    input: oL(n)
                                                                });
                                                            case "other-javascript":
                                                                return tq(oU, {
                                                                    input: oO(n)
                                                                });
                                                            case "other-not-javascript":
                                                                return tq(oU, {
                                                                    input: oj(n)
                                                                })
                                                        }
                                                    case "dropped-frames":
                                                        switch (e.kind) {
                                                            case "total-processing-time":
                                                                return tq(oU, {
                                                                    input: {
                                                                        kind: "total-processing",
                                                                        data: {
                                                                            time: ow(n.timing)
                                                                        }
                                                                    }
                                                                });
                                                            case "render":
                                                                return tq(eh, {
                                                                    children: tq(oU, {
                                                                        input: {
                                                                            kind: "render",
                                                                            data: {
                                                                                topByTime: n.groupedFiberRenders.toSorted((e, t) => t.totalTime - e.totalTime).slice(0, 3).map(e => ({
                                                                                    name: e.name,
                                                                                    percentage: e.totalTime / ow(n.timing)
                                                                                }))
                                                                            }
                                                                        }
                                                                    })
                                                                });
                                                            case "other-frame-drop":
                                                                return tq(oU, {
                                                                    input: {
                                                                        kind: "other"
                                                                    }
                                                                })
                                                        }
                                                }
                                            })()
                                        })
                                    })]
                                }, e.kind)
                            })
                        })]
                    })
                },
                oj = e => {
                    let t = e.groupedFiberRenders.reduce((e, t) => e + t.count, 0),
                        n = e.timing.renderTime,
                        r = ow(e.timing);
                    return t > 100 ? {
                        kind: "high-render-count-update-dom-draw-frame",
                        data: {
                            count: t,
                            percentageOfTotal: n / r * 100,
                            copyButton: tq(oI, {})
                        }
                    } : {
                        kind: "update-dom-draw-frame",
                        data: {
                            copyButton: tq(oI, {})
                        }
                    }
                },
                oI = () => {
                    let [e, t] = eH(!1), {
                        notificationState: n
                    } = eJ(ox);
                    return tq("button", {
                        onClick: async () => {
                            n.selectedEvent && (await navigator.clipboard.writeText(oR("explanation", n.selectedEvent)), t(!0), setTimeout(() => t(!1), 1e3))
                        },
                        className: "bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",
                        children: [tq("span", {
                            children: e ? "Copied!" : "Copy Prompt"
                        }), tq("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: nD(["transition-transform duration-200", e && "scale-110"]),
                            children: e ? tq("path", {
                                d: "M20 6L9 17l-5-5"
                            }) : tq(eh, {
                                children: [tq("rect", {
                                    width: "14",
                                    height: "14",
                                    x: "8",
                                    y: "8",
                                    rx: "2",
                                    ry: "2"
                                }), tq("path", {
                                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                                })]
                            })
                        })]
                    })
                },
                oL = e => e.timing.renderTime / ow(e.timing) > .3 ? {
                    kind: "render",
                    data: {
                        topByTime: e.groupedFiberRenders.toSorted((e, t) => t.totalTime - e.totalTime).slice(0, 3).map(t => ({
                            percentage: t.totalTime / ow(e.timing),
                            name: t.name
                        }))
                    }
                } : {
                    kind: "other"
                },
                oO = e => {
                    let t = e.groupedFiberRenders.reduce((e, t) => e + t.count, 0);
                    return e.timing.otherJSTime / ow(e.timing) < .2 ? {
                        kind: "js-explanation-base"
                    } : e.groupedFiberRenders.find(e => e.count > 200) || e.groupedFiberRenders.reduce((e, t) => e + t.count, 0) > 500 ? {
                        kind: "high-render-count-high-js",
                        data: {
                            renderCount: t,
                            topByCount: e.groupedFiberRenders.filter(e => e.count > 100).toSorted((e, t) => t.count - e.count).slice(0, 3)
                        }
                    } : e.timing.otherJSTime / ow(e.timing) > .3 ? e.timing.renderTime > .2 ? {
                        kind: "js-explanation-base"
                    } : {
                        kind: "low-render-count-high-js",
                        data: {
                            renderCount: t
                        }
                    } : {
                        kind: "js-explanation-base"
                    }
                },
                oU = e => {
                    let {
                        input: t
                    } = e;
                    switch (t.kind) {
                        case "total-processing":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: ["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ", "<=16ms"]
                                }), tq("p", {
                                    children: 'To debug the issue, check the "Ranked" tab to see if there are significant component renders'
                                }), tq("p", {
                                    children: "On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"
                                }), tq("p", {
                                    children: ["To understand precisely what caused the slowdown while in production, use the ", tq("strong", {
                                        children: "Chrome profiler"
                                    }), " and analyze the function call times."]
                                }), tq("p", {})]
                            });
                        case "render":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "This is the time it took React to run components, and internal logic to handle the output of your component."
                                }), tq("div", {
                                    className: nD(["flex flex-col"]),
                                    children: [tq("p", {
                                        children: "The slowest components for this time period were:"
                                    }), t.data.topByTime.map(e => tq("div", {
                                        children: [tq("strong", {
                                            children: e.name
                                        }), ":", " ", (100 * e.percentage).toFixed(0), "% of total"]
                                    }, e.name))]
                                }), tq("p", {
                                    children: 'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'
                                }), tq("p", {
                                    children: 'The "Ranked" tab shows the render times of every component.'
                                }), tq("p", {
                                    children: "The render times of the same components are grouped together into one bar."
                                }), tq("p", {
                                    children: "Clicking the component will show you what props, state, or context caused the component to re-render."
                                })]
                            });
                        case "js-explanation-base":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run."
                                }), tq("p", {
                                    children: ["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ", tq("code", {
                                        children: "useEffect"
                                    }), "'s or a large number of useEffect's called, but this can also be JavaScript event handlers (", tq("code", {
                                        children: "'onclick'"
                                    }), ", ", tq("code", {
                                        children: "'onchange'"
                                    }), ") that performed expensive computation."]
                                }), tq("p", {
                                    children: "If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."
                                }), tq("p", {
                                    children: ["You should profile your app using the", " ", tq("strong", {
                                        children: "Chrome DevTools profiler"
                                    }), " to learn exactly which functions took the longest to execute."]
                                })]
                            });
                        case "high-render-count-high-js":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run."
                                }), 0 === t.data.renderCount ? tq(eh, {
                                    children: [tq("p", {
                                        children: "There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"
                                    }), tq("p", {
                                        children: ["You should try to reproduce the slowdown while profiling your website with the", tq("strong", {
                                            children: "Chrome DevTools profiler"
                                        }), " to see exactly what functions took the longest to execute."]
                                    })]
                                }) : tq(eh, {
                                    children: [" ", tq("p", {
                                        children: ["There were ", tq("strong", {
                                            children: t.data.renderCount
                                        }), " renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ", tq("code", {
                                            children: "useEffects"
                                        }), "."]
                                    }), tq("div", {
                                        className: nD(["flex flex-col"]),
                                        children: [tq("p", {
                                            children: "You should try optimizing the renders of:"
                                        }), t.data.topByCount.map(e => tq("div", {
                                            children: ["- ", tq("strong", {
                                                children: e.name
                                            }), " (rendered ", e.count, "x)"]
                                        }, e.name))]
                                    }), "and then checking if the problem still exists.", tq("p", {
                                        children: ["You can also try profiling your app using the", " ", tq("strong", {
                                            children: "Chrome DevTools profiler"
                                        }), " to see exactly what functions took the longest to execute."]
                                    })]
                                })]
                            });
                        case "low-render-count-high-js":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "This is the period when JavaScript hooks and other JavaScript outside of React Renders run."
                                }), tq("p", {
                                    children: ["There were only ", tq("strong", {
                                        children: t.data.renderCount
                                    }), " renders detected, which means either you had very expensive hooks like", " ", tq("code", {
                                        children: "useEffect"
                                    }), "/", tq("code", {
                                        children: "useLayoutEffect"
                                    }), ", or there is other JavaScript running during this interaction that took up the majority of the time."]
                                }), tq("p", {
                                    children: ["To understand precisely what caused the slowdown, use the", " ", tq("strong", {
                                        children: "Chrome profiler"
                                    }), " and analyze the function call times."]
                                })]
                            });
                        case "high-render-count-update-dom-draw-frame":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."
                                }), tq("p", {
                                    children: "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."
                                }), tq("p", {
                                    children: ["During this interaction, there were", " ", tq("strong", {
                                        children: t.data.count
                                    }), " renders, which was", " ", tq("strong", {
                                        children: [t.data.percentageOfTotal.toFixed(0), "%"]
                                    }), " of the time spent processing"]
                                }), tq("p", {
                                    children: "The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."
                                }), tq("p", {
                                    children: 'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'
                                }), tq("p", {
                                    children: "If you use an AI-based code editor, you can export the performance data collected as a prompt."
                                }), tq("p", {
                                    children: t.data.copyButton
                                }), tq("p", {
                                    children: "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."
                                }), tq("p", {
                                    children: 'For a larger selection of prompts, try the "Prompts" tab'
                                })]
                            });
                        case "update-dom-draw-frame":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."
                                }), tq("p", {
                                    children: "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."
                                }), tq("p", {
                                    children: "If you use an AI-based code editor, you can export the performance data collected as a prompt."
                                }), tq("p", {
                                    children: t.data.copyButton
                                }), tq("p", {
                                    children: "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."
                                }), tq("p", {
                                    children: 'For a larger selection of prompts, try the "Prompts" tab'
                                })]
                            });
                        case "other":
                            return tq("div", {
                                className: nD(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),
                                children: [tq("p", {
                                    children: ["This is the time it took to run everything other than React renders. This can be hooks like ", tq("code", {
                                        children: "useEffect"
                                    }), ", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]
                                }), tq("p", {
                                    children: ["To get a better picture of what happened, profile your app using the", " ", tq("strong", {
                                        children: "Chrome profiler"
                                    }), " when the performance problem arises."]
                                })]
                            })
                    }
                },
                oW = null,
                oH = null,
                oY = null,
                oX = tn({
                    kind: "idle",
                    current: null
                }),
                oB = null,
                oV = () => {
                    oB && cancelAnimationFrame(oB), oB = requestAnimationFrame(() => {
                        if (!oW || !oH) return;
                        oH.clearRect(0, 0, oW.width, oW.height);
                        let e = "hsl(271, 76%, 53%)",
                            t = oX.value,
                            {
                                alpha: n,
                                current: r
                            } = (() => {
                                var e, n;
                                switch (t.kind) {
                                    case "transition": {
                                        let n = (null == (e = t.current) ? void 0 : e.alpha) && t.current.alpha > 0 ? t.current : t.transitionTo;
                                        return {
                                            alpha: n ? n.alpha : 0,
                                            current: n
                                        }
                                    }
                                    case "move-out":
                                        return {
                                            alpha: (null == (n = t.current) ? void 0 : n.alpha) ?? 0, current: t.current
                                        };
                                    case "idle":
                                        return {
                                            alpha: 1, current: t.current
                                        }
                                }
                            })();
                        switch (null == r || r.rects.forEach(t => {
                                oH && (oH.shadowColor = e, oH.shadowBlur = 6, oH.strokeStyle = e, oH.lineWidth = 2, oH.globalAlpha = n, oH.beginPath(), oH.rect(t.left, t.top, t.width, t.height), oH.stroke(), oH.shadowBlur = 0, oH.beginPath(), oH.rect(t.left, t.top, t.width, t.height), oH.stroke())
                            }), t.kind) {
                            case "move-out":
                                if (0 === t.current.alpha) {
                                    oX.value = {
                                        kind: "idle",
                                        current: null
                                    };
                                    return
                                }
                                t.current.alpha <= .01 && (t.current.alpha = 0), t.current.alpha = Math.max(0, t.current.alpha - .03), oV();
                                return;
                            case "transition":
                                if (t.current && t.current.alpha > 0) {
                                    t.current.alpha = Math.max(0, t.current.alpha - .03), oV();
                                    return
                                }
                                if (1 === t.transitionTo.alpha) {
                                    oX.value = {
                                        kind: "idle",
                                        current: t.transitionTo
                                    };
                                    return
                                }
                                t.transitionTo.alpha = Math.min(t.transitionTo.alpha + .03, 1), oV();
                            case "idle":
                                return
                        }
                    })
                },
                oq = null;

            function oJ() {
                oY && (cancelAnimationFrame(oY), oY = null), (null == oW ? void 0 : oW.parentNode) && oW.parentNode.removeChild(oW), oW = null, oH = null
            }
            var oG = () => {
                    let e = oX.value.current ? oX.value.current : "transition" === oX.value.kind ? oX.value.transitionTo : null;
                    if (e) {
                        if ("transition" === oX.value.kind) {
                            var t;
                            oX.value = {
                                kind: "move-out",
                                current: (null == (t = oX.value.current) ? void 0 : t.alpha) === 0 ? oX.value.transitionTo : oX.value.current ?? oX.value.transitionTo
                            };
                            return
                        }
                        oX.value = {
                            kind: "move-out",
                            current: {
                                alpha: 0,
                                ...e
                            }
                        }
                    }
                },
                oK = e => {
                    let {
                        selectedEvent: t
                    } = e, n = ow(t.timing), r = n - t.timing.renderTime, [i] = eH(aR()), o = t.groupedFiberRenders.map(e => ({
                        event: e,
                        kind: "render",
                        totalTime: i ? e.count : e.totalTime
                    })), a = (() => {
                        switch (t.kind) {
                            case "dropped-frames":
                                return t.timing.renderTime / n < .1;
                            case "interaction":
                                return (t.timing.otherJSTime + t.timing.renderTime) / n < .2
                        }
                    })();
                    "interaction" !== t.kind || i || o.push({
                        kind: "other-javascript",
                        totalTime: t.timing.otherJSTime
                    }), a && !i && ("interaction" === t.kind ? o.push({
                        kind: "other-not-javascript",
                        totalTime: ow(t.timing) - t.timing.renderTime - t.timing.otherJSTime
                    }) : o.push({
                        kind: "other-frame-drop",
                        totalTime: r
                    }));
                    let l = eB({
                            lastCallAt: null,
                            timer: null
                        }),
                        s = o.reduce((e, t) => e + t.totalTime, 0);
                    return tq("div", {
                        className: nD(["flex flex-col h-full w-full gap-y-1"]),
                        children: [i && 0 === o.length ? tq("div", {
                            className: "flex flex-col items-center justify-center h-full text-zinc-400",
                            children: [tq("p", {
                                className: "text-sm w-full text-left text-white mb-1.5",
                                children: "No data available"
                            }), tq("p", {
                                className: "text-x w-full text-lefts",
                                children: "No data was collected during this period"
                            })]
                        }) : 0 === o.length ? tq("div", {
                            className: "flex flex-col items-center justify-center h-full text-zinc-400",
                            children: [tq("p", {
                                className: "text-sm w-full text-left text-white mb-1.5",
                                children: "No renders collected"
                            }), tq("p", {
                                className: "text-x w-full text-lefts",
                                children: "There were no renders during this period"
                            })]
                        }) : void 0, o.toSorted((e, t) => t.totalTime - e.totalTime).map(e => tq(oZ, {
                            bars: o,
                            bar: e,
                            debouncedMouseEnter: l,
                            totalBarTime: s,
                            isProduction: i
                        }, "render" === e.kind ? e.event.id : e.kind))]
                    })
                },
                oZ = e => {
                    var t;
                    let {
                        bar: n,
                        debouncedMouseEnter: r,
                        totalBarTime: i,
                        isProduction: o,
                        bars: a,
                        depth: l = 0
                    } = e, {
                        setNotificationState: s,
                        setRoute: c
                    } = eJ(ox), [d, u] = eH(!1), p = "render" !== n.kind || 0 === n.event.parents.size, h = a.filter(e => "render" === e.kind && "render" === n.kind && n.event.parents.has(e.event.name) && e.event.name !== n.event.name), m = "render" === n.kind ? Array.from(n.event.parents).filter(e => !a.some(t => "render" === t.kind && t.event.name === e)) : [];
                    return tq("div", {
                        className: "w-full",
                        children: [tq("div", {
                            className: nD(["w-full flex items-center relative text-xs min-w-0"]),
                            children: [tq("button", {
                                onMouseLeave: () => {
                                    r.current.timer && clearTimeout(r.current.timer), oG()
                                },
                                onMouseEnter: async () => {
                                    let e = async () => {
                                        if (r.current.lastCallAt = Date.now(), "render" !== n.kind) {
                                            let e = oX.value.current ? oX.value.current : "transition" === oX.value.kind ? oX.value.transitionTo : null;
                                            if (!e) {
                                                oX.value = {
                                                    kind: "idle",
                                                    current: null
                                                };
                                                return
                                            }
                                            oX.value = {
                                                kind: "move-out",
                                                current: {
                                                    alpha: 0,
                                                    ...e
                                                }
                                            };
                                            return
                                        }
                                        let e = oX.value,
                                            t = (() => {
                                                switch (e.kind) {
                                                    case "transition":
                                                        return e.transitionTo;
                                                    case "idle":
                                                    case "move-out":
                                                        return e.current
                                                }
                                            })(),
                                            i = [];
                                        if ("transition" === e.kind) {
                                            let t = e.current && e.current.alpha > 0 ? "fading-out" : "fading-in";
                                            (() => {
                                                switch (t) {
                                                    case "fading-in":
                                                        oX.value = {
                                                            kind: "transition",
                                                            current: e.transitionTo,
                                                            transitionTo: {
                                                                rects: i,
                                                                alpha: 0,
                                                                name: n.event.name
                                                            }
                                                        };
                                                        return;
                                                    case "fading-out":
                                                        oX.value = {
                                                            kind: "transition",
                                                            current: oX.value.current ? {
                                                                alpha: 0,
                                                                ...oX.value.current
                                                            } : null,
                                                            transitionTo: {
                                                                rects: i,
                                                                alpha: 0,
                                                                name: n.event.name
                                                            }
                                                        };
                                                        return
                                                }
                                            })()
                                        } else oX.value = {
                                            kind: "transition",
                                            transitionTo: {
                                                rects: i,
                                                alpha: 0,
                                                name: n.event.name
                                            },
                                            current: t ? {
                                                alpha: 0,
                                                ...t
                                            } : null
                                        };
                                        for await (let e of iF(n.event.elements.filter(e => e instanceof Element))) e.forEach(e => {
                                            let {
                                                boundingClientRect: t
                                            } = e;
                                            i.push(t)
                                        }), oV()
                                    };
                                    if (r.current.lastCallAt && Date.now() - r.current.lastCallAt < 200) {
                                        r.current.timer && clearTimeout(r.current.timer), r.current.timer = setTimeout(() => {
                                            e()
                                        }, 200);
                                        return
                                    }
                                    e()
                                },
                                onClick: () => {
                                    "render" === n.kind ? (s(e => ({
                                        ...e,
                                        selectedFiber: n.event
                                    })), c({
                                        route: "render-explanation",
                                        routeMessage: null
                                    })) : c({
                                        route: "other-visualization",
                                        routeMessage: {
                                            kind: "auto-open-overview-accordion",
                                            name: n.kind
                                        }
                                    })
                                },
                                className: nD(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),
                                children: [tq("div", {
                                    style: {
                                        minWidth: "fit-content",
                                        width: `${n.totalTime/i*100}%`
                                    },
                                    className: nD(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0", "render" === n.kind && "bg-[#412162] group-hover:bg-[#5b2d89]", "other-frame-drop" === n.kind && "bg-[#44444a] group-hover:bg-[#6a6a6a]", "other-javascript" === n.kind && "bg-[#efd81a6b] group-hover:bg-[#efda1a2f]", "other-not-javascript" === n.kind && "bg-[#214379d4] group-hover:bg-[#21437982]"])
                                }), tq("div", {
                                    className: nD(["absolute inset-0 flex items-center px-2", "min-w-0"]),
                                    children: tq("div", {
                                        className: "flex items-center gap-x-2 min-w-0 w-full",
                                        children: [tq("span", {
                                            className: nD(["truncate"]),
                                            children: (() => {
                                                switch (n.kind) {
                                                    case "other-frame-drop":
                                                        return "JavaScript, DOM updates, Draw Frame";
                                                    case "other-javascript":
                                                        return "JavaScript/React Hooks";
                                                    case "other-not-javascript":
                                                        return "Update DOM and Draw New Frame";
                                                    case "render":
                                                        return n.event.name
                                                }
                                            })()
                                        }), "render" === n.kind && !(t = n.event).wasFiberRenderMount && !t.hasMemoCache && 0 === t.changes.context.length && 0 === t.changes.props.length && 0 === t.changes.state.length && tq("div", {
                                            style: {
                                                lineHeight: "10px"
                                            },
                                            className: nD(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),
                                            children: "Memoizable"
                                        })]
                                    })
                                })]
                            }), tq("button", {
                                onClick: () => "render" === n.kind && !p && u(!d),
                                className: nD(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]", !p && "hover:bg-[#0f0f0f]", "render" !== n.kind || p ? "cursor-default" : "cursor-pointer"]),
                                children: [tq("div", {
                                    className: "w-[20px] flex items-center justify-center",
                                    children: "render" === n.kind && !p && tq(oy, {
                                        className: nD("transition-transform", d && "rotate-90"),
                                        size: 16
                                    })
                                }), tq("div", {
                                    style: {
                                        minWidth: p ? "fit-content" : o ? "30px" : "60px"
                                    },
                                    className: "flex items-center justify-end gap-x-1",
                                    children: ["render" === n.kind && tq("span", {
                                        className: nD(["text-[10px]"]),
                                        children: ["x", n.event.count]
                                    }), ("render" !== n.kind || !o) && tq("span", {
                                        className: "text-[10px] text-[#7346a0] pr-1",
                                        children: [n.totalTime < 1 ? "<1" : n.totalTime.toFixed(0), "ms"]
                                    })]
                                })]
                            }), 0 === l && tq("div", {
                                className: nD(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16", "pointer-events-none"]),
                                children: "Click to learn more"
                            })]
                        }), d && (h.length > 0 || m.length > 0) && tq("div", {
                            className: "pl-3 flex flex-col gap-y-1 mt-1",
                            children: [h.toSorted((e, t) => t.totalTime - e.totalTime).map((e, t) => tq(oZ, {
                                depth: l + 1,
                                bar: e,
                                debouncedMouseEnter: r,
                                totalBarTime: i,
                                isProduction: o,
                                bars: a
                            }, t)), m.map(e => tq("div", {
                                className: "w-full",
                                children: tq("div", {
                                    className: "w-full flex items-center relative text-xs",
                                    children: tq("div", {
                                        className: "h-full w-full flex items-center relative",
                                        children: [tq("div", {
                                            className: "flex items-center rounded-sm text-white text-xs h-[28px] w-full"
                                        }), tq("div", {
                                            className: "absolute inset-0 flex items-center px-2",
                                            children: tq("span", {
                                                className: "truncate whitespace-nowrap text-white/70 w-full",
                                                children: e
                                            })
                                        })]
                                    })
                                })
                            }, e))]
                        })]
                    })
                },
                oQ = e => {
                    let {
                        selectedEvent: t,
                        selectedFiber: n
                    } = e, {
                        setRoute: r
                    } = eJ(ox), [i, o] = eH(!0), [a] = eH(aR());
                    eX(() => {
                        let e = localStorage.getItem("react-scan-tip-shown"),
                            t = "true" === e || "false" !== e && null;
                        if (null === t) {
                            o(!0), localStorage.setItem("react-scan-tip-is-shown", "true");
                            return
                        }
                        t || o(!1)
                    }, []);
                    let l = 0 === n.changes.context.length && 0 === n.changes.props.length && 0 === n.changes.state.length;
                    return tq("div", {
                        className: nD(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),
                        children: [tq("div", {
                            className: nD(["flex items-start gap-x-4 "]),
                            children: [tq("button", {
                                onClick: () => {
                                    r({
                                        route: "render-visualization",
                                        routeMessage: null
                                    })
                                },
                                className: nD(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),
                                children: [tq(oC, {
                                    size: 14
                                }), " ", tq("span", {
                                    children: "Overview"
                                })]
                            }), tq("div", {
                                className: nD(["flex flex-col gap-y-1"]),
                                children: [tq("div", {
                                    className: nD(["text-sm font-bold text-white overflow-x-hidden"]),
                                    children: tq("div", {
                                        className: "flex items-center gap-x-2 truncate",
                                        children: n.name
                                    })
                                }), tq("div", {
                                    className: nD(["flex gap-x-2"]),
                                    children: [!a && tq(eh, {
                                        children: tq("div", {
                                            className: nD(["text-xs text-gray-400"]),
                                            children: ["• Render time: ", n.totalTime.toFixed(0), "ms"]
                                        })
                                    }), tq("div", {
                                        className: nD(["text-xs text-gray-400 mb-4"]),
                                        children: ["• Renders: ", n.count, "x"]
                                    })]
                                })]
                            })]
                        }), i && !l && tq("div", {
                            className: nD(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),
                            children: [tq("button", {
                                onClick: () => {
                                    o(!1), localStorage.setItem("react-scan-tip-shown", "false")
                                },
                                className: nD(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),
                                children: tq(o_, {
                                    size: 12
                                })
                            }), tq("div", {
                                className: nD(["w-1 bg-[#d36cff]"])
                            }), tq("div", {
                                className: nD(["flex-1"]),
                                children: [tq("div", {
                                    className: nD(["px-3 py-2 text-gray-100 text-xs font-semibold"]),
                                    children: "How to stop renders"
                                }), tq("div", {
                                    className: nD(["px-3 pb-2 text-gray-400 text-[10px]"]),
                                    children: "Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"
                                })]
                            })]
                        }), l && tq("div", {
                            className: nD(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),
                            children: [tq("div", {
                                className: nD(["w-1 bg-[#d36cff]"])
                            }), tq("div", {
                                className: nD(["flex-1"]),
                                children: [tq("div", {
                                    className: nD(["px-3 py-2 text-gray-100 text-sm font-semibold"]),
                                    children: "No changes detected"
                                }), tq("div", {
                                    className: nD(["px-3 pb-2 text-gray-400 text-xs"]),
                                    children: "This component would not of rendered if it was memoized"
                                })]
                            })]
                        }), tq("div", {
                            className: nD(["flex w-full"]),
                            children: [tq("div", {
                                className: nD(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),
                                children: [tq("div", {
                                    className: nD(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),
                                    children: "Changed Props"
                                }), n.changes.props.length > 0 ? n.changes.props.toSorted((e, t) => t.count - e.count).map(e => tq("div", {
                                    className: nD(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),
                                    children: [tq("span", {
                                        className: nD(["text-white "]),
                                        children: e.name
                                    }), tq("div", {
                                        className: nD([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),
                                        children: [e.count, "/", n.count, "x"]
                                    })]
                                }, e.name)) : tq("div", {
                                    className: nD(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),
                                    children: "No changes"
                                })]
                            }), tq("div", {
                                className: nD(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),
                                children: [tq("div", {
                                    className: nD([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),
                                    children: "Changed State"
                                }), n.changes.state.length > 0 ? n.changes.state.toSorted((e, t) => t.count - e.count).map(e => tq("div", {
                                    className: nD(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),
                                    children: [tq("span", {
                                        className: nD(["text-white "]),
                                        children: ["index ", e.index]
                                    }), tq("div", {
                                        className: nD(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),
                                        children: [e.count, "/", n.count, "x"]
                                    })]
                                }, e.index)) : tq("div", {
                                    className: nD(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),
                                    children: "No changes"
                                })]
                            }), tq("div", {
                                className: nD(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),
                                children: [tq("div", {
                                    className: nD([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),
                                    children: "Changed Context"
                                }), n.changes.context.length > 0 ? n.changes.context.toSorted((e, t) => t.count - e.count).map(e => tq("div", {
                                    className: nD(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),
                                    children: [tq("span", {
                                        className: nD(["text-white "]),
                                        children: e.name
                                    }), tq("div", {
                                        className: nD(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),
                                        children: [e.count, "/", n.count, "x"]
                                    })]
                                }, e.name)) : tq("div", {
                                    className: nD(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),
                                    children: "No changes"
                                })]
                            })]
                        })]
                    })
                },
                o0 = () => {
                    let {
                        notificationState: e,
                        setNotificationState: t
                    } = eJ(ox), [n, r] = eH("..."), i = eB(null);
                    if (eY(() => {
                            let e = setInterval(() => {
                                r(e => "..." === e ? "" : e + ".")
                            }, 500);
                            return () => clearInterval(e)
                        }, []), !e.selectedEvent) return tq("div", {
                        ref: i,
                        className: nD(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),
                        children: [tq("div", {
                            className: nD(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),
                            children: tq("button", {
                                onClick: () => {
                                    nB.value = {
                                        view: "none"
                                    }
                                },
                                children: tq(o_, {
                                    size: 18,
                                    className: "text-[#6F6F78]"
                                })
                            })
                        }), tq("div", {
                            className: nD(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md", " shadow-lg"]),
                            children: tq("div", {
                                className: nD(["flex flex-col items-start gap-y-4"]),
                                children: [tq("div", {
                                    className: nD(["flex items-center"]),
                                    children: tq("span", {
                                        className: nD(["text-zinc-400 font-medium text-[17px]"]),
                                        children: ["Scanning for slowdowns", n]
                                    })
                                }), 0 !== e.events.length && tq("p", {
                                    className: nD(["text-xs"]),
                                    children: ["Click on an item in the", " ", tq("span", {
                                        className: nD(["text-purple-400"]),
                                        children: "History"
                                    }), " list to get started"]
                                }), tq("p", {
                                    className: nD(["text-zinc-600 text-xs"]),
                                    children: "You don't need to keep this panel open for React Scan to record slowdowns"
                                }), tq("p", {
                                    className: nD(["text-zinc-600 text-xs"]),
                                    children: "Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"
                                }), tq("button", {
                                    onClick: () => {
                                        if (e.audioNotificationsOptions.enabled) return void t(e => {
                                            var t, n;
                                            return (null == (t = e.audioNotificationsOptions.audioContext) ? void 0 : t.state) !== "closed" && (null == (n = e.audioNotificationsOptions.audioContext) || n.close()), localStorage.setItem("react-scan-notifications-audio", "false"), {
                                                ...e,
                                                audioNotificationsOptions: {
                                                    audioContext: null,
                                                    enabled: !1
                                                }
                                            }
                                        });
                                        localStorage.setItem("react-scan-notifications-audio", "true");
                                        let n = new AudioContext;
                                        tZ(n), t(e => ({
                                            ...e,
                                            audioNotificationsOptions: {
                                                enabled: !0,
                                                audioContext: n
                                            }
                                        }))
                                    },
                                    className: nD(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full", " text-sm flex items-center gap-x-2 justify-center"]),
                                    children: e.audioNotificationsOptions.enabled ? tq(eh, {
                                        children: tq("span", {
                                            className: "flex items-center gap-x-1",
                                            children: "Disable audio alerts"
                                        })
                                    }) : tq(eh, {
                                        children: tq("span", {
                                            className: "flex items-center gap-x-1",
                                            children: "Enable audio alerts"
                                        })
                                    })
                                })]
                            })
                        })]
                    });
                    switch (e.route) {
                        case "render-visualization":
                            return tq(o1, {
                                children: tq(oK, {
                                    selectedEvent: e.selectedEvent
                                })
                            });
                        case "render-explanation":
                            if (!e.selectedFiber) throw Error("Invariant: must have selected fiber when viewing render explanation");
                            return tq(o1, {
                                children: tq(oQ, {
                                    selectedFiber: e.selectedFiber,
                                    selectedEvent: e.selectedEvent
                                })
                            });
                        case "other-visualization":
                            return tq(o1, {
                                children: tq("div", {
                                    className: nD(["flex w-full h-full flex-col overflow-y-auto"]),
                                    id: "overview-scroll-container",
                                    children: tq(oP, {
                                        selectedEvent: e.selectedEvent
                                    })
                                })
                            });
                        case "optimize":
                            return tq(o1, {
                                children: tq(oD, {
                                    selectedEvent: e.selectedEvent
                                })
                            })
                    }
                    e.route
                },
                o1 = e => {
                    let {
                        children: t
                    } = e, {
                        notificationState: n
                    } = eJ(ox);
                    if (!n.selectedEvent) throw Error("Invariant: d must have selected event when viewing render explanation");
                    return tq("div", {
                        className: nD(["w-full h-full flex flex-col gap-y-2"]),
                        children: [tq("div", {
                            className: nD(["h-[50px] w-full"]),
                            children: tq(oF, {
                                selectedEvent: n.selectedEvent
                            })
                        }), tq("div", {
                            className: nD(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),
                            children: t
                        })]
                    })
                },
                o2 = e => {
                    let {
                        selectedEvent: t
                    } = e, n = ob(t);
                    switch (t.kind) {
                        case "interaction":
                            return tq("div", {
                                className: nD(["w-full flex border-b border-[#27272A] min-h-[48px]"]),
                                children: tq("div", {
                                    className: nD(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),
                                    children: [tq("div", {
                                        className: nD(["flex items-center gap-x-2 "]),
                                        children: [tq("span", {
                                            className: nD(["text-[#5a5a5a] mr-0.5"]),
                                            children: "click" === t.type ? "Clicked " : "Typed in "
                                        }), tq("span", {
                                            children: ov(t.componentPath)
                                        }), tq("div", {
                                            className: nD(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap", "low" === n && "bg-green-500/50", "needs-improvement" === n && "bg-[#b77116]", "high" === n && "bg-[#b94040]"]),
                                            children: [ow(t.timing).toFixed(0), "ms processing time"]
                                        })]
                                    }), tq("div", {
                                        className: nD(["flex items-center gap-x-2  justify-end ml-auto"]),
                                        children: tq("div", {
                                            className: nD(["p-2 flex justify-center items-center border-[#27272A]"]),
                                            children: tq("button", {
                                                onClick: () => {
                                                    nB.value = {
                                                        view: "none"
                                                    }
                                                },
                                                title: "Close",
                                                children: tq(o_, {
                                                    size: 18,
                                                    className: "text-[#6F6F78]"
                                                })
                                            })
                                        })
                                    })]
                                })
                            });
                        case "dropped-frames":
                            return tq("div", {
                                className: nD(["w-full flex border-b border-[#27272A] min-h-[48px]"]),
                                children: tq("div", {
                                    className: nD(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),
                                    children: [tq("div", {
                                        className: nD(["flex items-center gap-x-2 "]),
                                        children: ["FPS Drop", tq("div", {
                                            className: nD(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap", "low" === n && "bg-green-500/50", "needs-improvement" === n && "bg-[#b77116]", "high" === n && "bg-[#b94040]"]),
                                            children: ["dropped to ", t.fps, " FPS"]
                                        })]
                                    }), tq("div", {
                                        className: nD(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),
                                        children: tq("div", {
                                            className: nD(["p-2 flex justify-center items-center border-[#27272A]"]),
                                            children: tq("button", {
                                                onClick: () => {
                                                    nB.value = {
                                                        view: "none"
                                                    }
                                                },
                                                children: tq(o_, {
                                                    size: 18,
                                                    className: "text-[#6F6F78]"
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                    }
                },
                o4 = e => {
                    var t;
                    let {
                        item: n,
                        shouldFlash: r
                    } = e, [i, o] = eH(!1), a = n.events.map(ob).reduce((e, t) => {
                        switch (t) {
                            case "high":
                                return "high";
                            case "needs-improvement":
                                return "high" === e ? "high" : "needs-improvement";
                            case "low":
                                return e
                        }
                    }, "low"), l = (e => {
                        let {
                            flashingItemsCount: t,
                            totalEvents: n
                        } = e, [r, i] = eH(!1), o = eB(0), a = eB(0);
                        return eY(() => {
                            if (o.current >= n) return;
                            let e = Date.now() - a.current;
                            if (e >= 250) {
                                i(!1);
                                let e = setTimeout(() => {
                                    o.current = n, a.current = Date.now(), i(!0), setTimeout(() => {
                                        i(!1)
                                    }, 2e3)
                                }, 50);
                                return () => clearTimeout(e)
                            } {
                                let t = setTimeout(() => {
                                    i(!1), setTimeout(() => {
                                        o.current = n, a.current = Date.now(), i(!0), setTimeout(() => {
                                            i(!1)
                                        }, 2e3)
                                    }, 50)
                                }, 250 - e);
                                return () => clearTimeout(t)
                            }
                        }, [t]), r
                    })({
                        flashingItemsCount: n.events.reduce((e, t) => r(t.id) ? e + 1 : e, 0),
                        totalEvents: n.events.length
                    });
                    return tq("div", {
                        className: nD(["flex flex-col gap-y-0.5"]),
                        children: [tq("button", {
                            onClick: () => o(e => !e),
                            className: nD(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", l && !i && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),
                            children: [tq("div", {
                                className: nD(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),
                                children: [tq("span", {
                                    className: nD(["min-w-fit"]),
                                    children: tq(oy, {
                                        className: nD(["text-[#A1A1AA] transition-transform", i ? "rotate-90" : ""]),
                                        size: 14
                                    }, `chevron-${n.timestamp}`)
                                }), tq("span", {
                                    className: nD(["text-xs"]),
                                    children: "collapsed-frame-drops" === n.kind ? "FPS Drops" : ov((null == (t = n.events.at(0)) ? void 0 : t.componentPath) ?? [])
                                })]
                            }), tq("div", {
                                className: nD(["ml-auto min-w-fit flex justify-end items-center"]),
                                children: tq("div", {
                                    style: {
                                        lineHeight: "10px"
                                    },
                                    className: nD(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold", "low" === a && "bg-green-500/60", "needs-improvement" === a && "bg-[#b77116] text-[10px]", "high" === a && "bg-[#b94040]"]),
                                    children: ["x", n.events.length]
                                })
                            })]
                        }), i && tq(o5, {
                            children: n.events.toSorted((e, t) => t.timestamp - e.timestamp).map(e => tq(o3, {
                                event: e,
                                shouldFlash: r(e.id)
                            }))
                        })]
                    })
                },
                o5 = e => {
                    let {
                        children: t
                    } = e;
                    return tq("div", {
                        className: "relative pl-6 flex flex-col gap-y-1",
                        children: [tq("div", {
                            className: "absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"
                        }), t]
                    })
                },
                o3 = e => {
                    var t, n;
                    let {
                        event: r,
                        shouldFlash: i
                    } = e, {
                        notificationState: o,
                        setNotificationState: a
                    } = eJ(ox), l = ob(r), s = (e => {
                        let {
                            shouldFlash: t
                        } = e, [n, r] = eH(t);
                        return eY(() => {
                            if (t) {
                                r(!0);
                                let e = setTimeout(() => {
                                    r(!1)
                                }, 1e3);
                                return () => clearTimeout(e)
                            }
                        }, [t]), n
                    })({
                        shouldFlash: i
                    });
                    switch (r.kind) {
                        case "interaction":
                            return tq("button", {
                                onClick: () => {
                                    a(e => ({
                                        ...e,
                                        selectedEvent: r,
                                        route: "render-visualization",
                                        selectedFiber: null
                                    }))
                                },
                                className: nD(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", r.id === (null == (t = o.selectedEvent) ? void 0 : t.id) && "bg-[#18181B]", s && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),
                                children: [tq("div", {
                                    className: nD(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),
                                    children: [tq("span", {
                                        className: nD(["min-w-fit text-xs"]),
                                        children: (() => {
                                            switch (r.type) {
                                                case "click":
                                                    return tq(oz, {
                                                        size: 14
                                                    });
                                                case "keyboard":
                                                    return tq(oT, {
                                                        size: 14
                                                    })
                                            }
                                        })()
                                    }), tq("span", {
                                        className: nD(["text-xs pr-1 truncate"]),
                                        children: ov(r.componentPath)
                                    })]
                                }), tq("div", {
                                    className: nD([" min-w-fit flex justify-end items-center ml-auto"]),
                                    children: tq("div", {
                                        style: {
                                            lineHeight: "10px"
                                        },
                                        className: nD(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]", "low" === l && "bg-green-500/50", "needs-improvement" === l && "bg-[#b77116] text-[10px]", "high" === l && "bg-[#b94040]"]),
                                        children: tq("div", {
                                            style: {
                                                lineHeight: "10px"
                                            },
                                            className: nD(["text-[10px] text-white flex items-end"]),
                                            children: [ow(r.timing).toFixed(0), "ms"]
                                        })
                                    })
                                })]
                            });
                        case "dropped-frames":
                            return tq("button", {
                                onClick: () => {
                                    a(e => ({
                                        ...e,
                                        selectedEvent: r,
                                        route: "render-visualization",
                                        selectedFiber: null
                                    }))
                                },
                                className: nD(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden", r.id === (null == (n = o.selectedEvent) ? void 0 : n.id) && "bg-[#18181B]", s && "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),
                                children: [tq("div", {
                                    className: nD(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),
                                    children: [tq(oA, {
                                        size: 14,
                                        className: "mr-1.5"
                                    }), " FPS Drop"]
                                }), tq("div", {
                                    className: nD([" min-w-fit flex justify-end items-center ml-auto"]),
                                    children: tq("div", {
                                        style: {
                                            lineHeight: "10px"
                                        },
                                        className: nD(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold", "low" === l && "bg-green-500/60", "needs-improvement" === l && "bg-[#b77116] text-[10px]", "high" === l && "bg-[#b94040]"]),
                                        children: [r.fps, " FPS"]
                                    })
                                })]
                            })
                    }
                },
                o6 = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 150,
                        {
                            notificationState: t
                        } = eJ(ox),
                        [n, r] = eH(t.events);
                    return eY(() => {
                        setTimeout(() => {
                            r(t.events)
                        }, e)
                    }, [t.events]), [n, r]
                },
                o8 = () => {
                    let {
                        notificationState: e,
                        setNotificationState: t
                    } = eJ(ox), n = (e => {
                        let t = eB([]),
                            [n, r] = eH(new Set),
                            i = eB(!0);
                        return eY(() => {
                            if (i.current) {
                                i.current = !1, t.current = e;
                                return
                            }
                            let n = new Set(e.map(e => e.id)),
                                o = new Set(t.current.map(e => e.id)),
                                a = new Set;
                            n.forEach(e => {
                                o.has(e) || a.add(e)
                            }), a.size > 0 && (r(a), setTimeout(() => {
                                r(new Set)
                            }, 2e3)), t.current = e
                        }, [e]), e => n.has(e)
                    })(e.events), [r, i] = o6(), o = r.reduce((e, t) => {
                        let n = e.at(-1);
                        if (!n) return [{
                            kind: "single",
                            event: t,
                            timestamp: t.timestamp
                        }];
                        switch (n.kind) {
                            case "collapsed-keyboard":
                                if ("interaction" === t.kind && "keyboard" === t.type && t.componentPath.join("-") === n.events[0].componentPath.join("-")) return [...e.filter(e => e !== n), {
                                    kind: "collapsed-keyboard",
                                    events: [...n.events, t],
                                    timestamp: Math.max(...[...n.events, t].map(e => e.timestamp))
                                }];
                                return [...e, {
                                    kind: "single",
                                    event: t,
                                    timestamp: t.timestamp
                                }];
                            case "single":
                                if ("interaction" === n.event.kind && "keyboard" === n.event.type && "interaction" === t.kind && "keyboard" === t.type && n.event.componentPath.join("-") === t.componentPath.join("-")) return [...e.filter(e => e !== n), {
                                    kind: "collapsed-keyboard",
                                    events: [n.event, t],
                                    timestamp: Math.max(n.event.timestamp, t.timestamp)
                                }];
                                if ("dropped-frames" === n.event.kind && "dropped-frames" === t.kind) return [...e.filter(e => e !== n), {
                                    kind: "collapsed-frame-drops",
                                    events: [n.event, t],
                                    timestamp: Math.max(n.event.timestamp, t.timestamp)
                                }];
                                return [...e, {
                                    kind: "single",
                                    event: t,
                                    timestamp: t.timestamp
                                }];
                            case "collapsed-frame-drops":
                                if ("dropped-frames" === t.kind) return [...e.filter(e => e !== n), {
                                    kind: "collapsed-frame-drops",
                                    events: [...n.events, t],
                                    timestamp: Math.max(...[...n.events, t].map(e => e.timestamp))
                                }];
                                return [...e, {
                                    kind: "single",
                                    event: t,
                                    timestamp: t.timestamp
                                }]
                        }
                    }, []).toSorted((e, t) => t.timestamp - e.timestamp);
                    return tq("div", {
                        className: nD(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),
                        children: [tq("div", {
                            className: nD(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),
                            children: [tq("span", {
                                children: "History"
                            }), tq(oM, {
                                wrapperProps: {
                                    className: "h-full flex items-center justify-center ml-auto"
                                },
                                triggerContent: tq("button", {
                                    className: nD(["hover:bg-[#18181B] rounded-full p-2"]),
                                    title: "Clear all events",
                                    onClick: () => {
                                        op.getState().actions.clear(), t(e => ({
                                            ...e,
                                            selectedEvent: null,
                                            selectedFiber: null,
                                            route: "other-visualization" === e.route ? "other-visualization" : "render-visualization"
                                        })), i([])
                                    },
                                    children: tq(oE, {
                                        className: nD([""]),
                                        size: 16
                                    })
                                }),
                                children: tq("div", {
                                    className: nD(["w-full flex justify-center"]),
                                    children: "Clear all events"
                                })
                            })]
                        }), tq("div", {
                            className: nD(["flex flex-col px-1 gap-y-1"]),
                            children: [0 === o.length && tq("div", {
                                className: nD(["flex items-center justify-center text-zinc-500 text-sm py-4"]),
                                children: "No Events"
                            }), o.map(e => (() => {
                                switch (e.kind) {
                                    case "collapsed-keyboard":
                                    case "collapsed-frame-drops":
                                        return tq(o4, {
                                            shouldFlash: n,
                                            item: e
                                        });
                                    case "single":
                                        return tq(o3, {
                                            event: e.event,
                                            shouldFlash: n(e.event.id)
                                        }, e.event.id)
                                }
                            })())]
                        })]
                    })
                },
                o7 = () => {
                    var e, t, n, r, i, o, a;
                    let l = (e = op.subscribe, i = (r = eH({
                            t: {
                                __: n = (t = op.getState)(),
                                u: t
                            }
                        }))[0].t, o = r[1], eX(function() {
                            i.__ = n, i.u = t, tb(i) && o({
                                t: i
                            })
                        }, [e, n, t]), eY(function() {
                            return tb(i) && o({
                                t: i
                            }), e(function() {
                                tb(i) && o({
                                    t: i
                                })
                            })
                        }, [e]), n),
                        s = [];
                    return eY(() => {
                        let e = setInterval(() => {
                            a.forEach(e => {
                                e.groupedFiberRenders && e.groupedFiberRenders.forEach(e => {
                                    if (e.deletedAll) return;
                                    if (!e.elements || 0 === e.elements.length) {
                                        e.deletedAll = !0;
                                        return
                                    }
                                    let t = e.elements.length;
                                    e.elements = e.elements.filter(e => e && e.isConnected), 0 === e.elements.length && t > 0 && (e.deletedAll = !0)
                                })
                            })
                        }, 5e3);
                        return () => {
                            clearInterval(e)
                        }
                    }, [a = s]), l.state.events.forEach(e => {
                        let t = Object.values("interaction" === e.kind ? e.data.meta.detailedTiming.fiberRenders : e.data.meta.fiberRenders).map(e => ({
                                id: iV(),
                                totalTime: e.nodeInfo.reduce((e, t) => e + t.selfTime, 0),
                                count: e.nodeInfo.length,
                                name: e.nodeInfo[0].name,
                                deletedAll: !1,
                                parents: e.parents,
                                hasMemoCache: e.hasMemoCache,
                                wasFiberRenderMount: e.wasFiberRenderMount,
                                elements: e.nodeInfo.map(e => e.element),
                                changes: {
                                    context: e.changes.fiberContext.current.filter(t => e.changes.fiberContext.changesCounts.get(t.name)).map(t => ({
                                        name: String(t.name),
                                        count: e.changes.fiberContext.changesCounts.get(t.name) ?? 0
                                    })),
                                    props: e.changes.fiberProps.current.filter(t => e.changes.fiberProps.changesCounts.get(t.name)).map(t => ({
                                        name: String(t.name),
                                        count: e.changes.fiberProps.changesCounts.get(t.name) ?? 0
                                    })),
                                    state: e.changes.fiberState.current.filter(t => e.changes.fiberState.changesCounts.get(Number(t.name))).map(t => ({
                                        index: t.name,
                                        count: e.changes.fiberState.changesCounts.get(Number(t.name)) ?? 0
                                    }))
                                }
                            })),
                            n = t.reduce((e, t) => e + t.totalTime, 0);
                        switch (e.kind) {
                            case "interaction": {
                                let {
                                    commitEnd: r,
                                    jsEndDetail: i,
                                    interactionStartDetail: o,
                                    rafStart: a
                                } = e.data.meta.detailedTiming;
                                i - o - n < 0 && iq("js time must be longer than render time");
                                let l = Math.max(0, i - o - n),
                                    c = Math.max(e.data.meta.latency - (r - o), 0);
                                s.push({
                                    componentPath: e.data.meta.detailedTiming.componentPath,
                                    groupedFiberRenders: t,
                                    id: e.id,
                                    kind: "interaction",
                                    memory: null,
                                    timestamp: e.data.startAt,
                                    type: "keyboard" === e.data.meta.detailedTiming.interactionType ? "keyboard" : "click",
                                    timing: {
                                        renderTime: n,
                                        kind: "interaction",
                                        otherJSTime: l,
                                        framePreparation: a - i,
                                        frameConstruction: r - a,
                                        frameDraw: c
                                    }
                                });
                                return
                            }
                            case "long-render":
                                return void s.push({
                                    kind: "dropped-frames",
                                    id: e.id,
                                    memory: null,
                                    timing: {
                                        kind: "dropped-frames",
                                        renderTime: n,
                                        otherTime: e.data.meta.latency
                                    },
                                    groupedFiberRenders: t,
                                    timestamp: e.data.startAt,
                                    fps: e.data.meta.fps
                                })
                        }
                    }), s
                },
                o9 = () => {
                    let {
                        notificationState: e,
                        setNotificationState: t
                    } = eJ(ox), n = eB(null), r = eB(null), i = eB(0), [o] = o6(), a = o.filter(e => "high" === ob(e)).length;
                    return eY(() => {
                        let e = localStorage.getItem("react-scan-notifications-audio");
                        "false" !== e && "true" !== e ? localStorage.setItem("react-scan-notifications-audio", "false") : "false" !== e && t(e => e.audioNotificationsOptions.enabled ? e : {
                            ...e,
                            audioNotificationsOptions: {
                                enabled: !0,
                                audioContext: new AudioContext
                            }
                        })
                    }, []), eY(() => {
                        let {
                            audioNotificationsOptions: t
                        } = e;
                        !t.enabled || 0 === a || n.current && n.current >= a || (r.current && clearTimeout(r.current), r.current = setTimeout(() => {
                            tZ(t.audioContext), n.current = a, i.current = Date.now(), r.current = null
                        }, Math.max(0, 1e3 - (Date.now() - i.current))))
                    }, [a]), eY(() => {
                        0 === a && (n.current = null)
                    }, [a]), eY(() => () => {
                        r.current && clearTimeout(r.current)
                    }, []), null
                },
                ae = tN((e, t) => {
                    let n = o7(),
                        [r, i] = eH({
                            detailsExpanded: !1,
                            events: n,
                            filterBy: "latest",
                            moreInfoExpanded: !1,
                            route: "render-visualization",
                            selectedEvent: n.toSorted((e, t) => e.timestamp - t.timestamp).at(-1) ?? null,
                            selectedFiber: null,
                            routeMessage: null,
                            audioNotificationsOptions: {
                                enabled: !1,
                                audioContext: null
                            }
                        });
                    return r.events = n, tq(ox.Provider, {
                        value: {
                            notificationState: r,
                            setNotificationState: i,
                            setRoute: e => {
                                let {
                                    route: t,
                                    routeMessage: n
                                } = e;
                                i(e => {
                                    let r = {
                                        ...e,
                                        route: t,
                                        routeMessage: n
                                    };
                                    switch (t) {
                                        case "render-visualization":
                                        case "optimize":
                                        case "other-visualization":
                                            return oG(), {
                                                ...r,
                                                selectedFiber: null
                                            };
                                        case "render-explanation":
                                            return oG(), r
                                    }
                                })
                            }
                        },
                        children: [tq(o9, {}), tq(at, {
                            ref: t
                        })]
                    })
                }),
                at = tN((e, t) => {
                    var n;
                    let {
                        notificationState: r
                    } = eJ(ox);
                    return tq("div", {
                        ref: t,
                        className: nD(["h-full w-full flex flex-col"]),
                        children: [r.selectedEvent && tq("div", {
                            className: nD(["w-full h-[48px] flex flex-col", r.moreInfoExpanded && "h-[235px]", r.moreInfoExpanded && "dropped-frames" === r.selectedEvent.kind && "h-[150px]"]),
                            children: [tq(o2, {
                                selectedEvent: r.selectedEvent
                            }), r.moreInfoExpanded && tq(an, {})]
                        }), tq("div", {
                            className: nD(["flex ", r.selectedEvent ? "h-[calc(100%-48px)]" : "h-full", r.moreInfoExpanded && "h-[calc(100%-200px)]", r.moreInfoExpanded && (null == (n = r.selectedEvent) ? void 0 : n.kind) === "dropped-frames" && "h-[calc(100%-150px)]"]),
                            children: [tq("div", {
                                className: nD(["h-full min-w-[200px]"]),
                                children: tq(o8, {})
                            }), tq("div", {
                                className: nD(["w-[calc(100%-200px)] h-full overflow-y-auto"]),
                                children: tq(o0, {})
                            })]
                        })]
                    })
                }),
                an = () => {
                    let {
                        notificationState: e
                    } = eJ(ox);
                    if (!e.selectedEvent) throw Error("Invariant must have selected event for more info");
                    let t = e.selectedEvent;
                    return tq("div", {
                        className: nD(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]", "dropped-frames" === t.kind && "h-[calc(100%-25px)]"]),
                        children: tq("div", {
                            className: nD(["flex flex-col gap-y-4 h-full"]),
                            children: (() => {
                                switch (t.kind) {
                                    case "interaction":
                                        return tq(eh, {
                                            children: [tq("div", {
                                                className: nD(["flex items-center gap-x-3"]),
                                                children: [tq("span", {
                                                    className: "text-[#6F6F78] text-xs font-medium",
                                                    children: "click" === t.type ? "Clicked component location" : "Typed in component location"
                                                }), tq("div", {
                                                    className: "font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",
                                                    children: t.componentPath.toReversed().map((e, n) => tq(eh, {
                                                        children: [tq("span", {
                                                            style: {
                                                                lineHeight: "14px"
                                                            },
                                                            className: "text-[10px] whitespace-nowrap",
                                                            children: e
                                                        }, e), n < t.componentPath.length - 1 && tq("span", {
                                                            className: "text-[#6F6F78] mx-0.5",
                                                            children: "‹"
                                                        })]
                                                    }))
                                                })]
                                            }), tq("div", {
                                                className: nD(["flex items-center gap-x-3"]),
                                                children: [tq("span", {
                                                    className: "text-[#6F6F78] text-xs font-medium",
                                                    children: "Total Time"
                                                }), tq("span", {
                                                    className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                                                    children: [ow(t.timing).toFixed(0), "ms"]
                                                })]
                                            }), tq("div", {
                                                className: nD(["flex items-center gap-x-3"]),
                                                children: [tq("span", {
                                                    className: "text-[#6F6F78] text-xs font-medium",
                                                    children: "Occurred"
                                                }), tq("span", {
                                                    className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                                                    children: `${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`
                                                })]
                                            })]
                                        });
                                    case "dropped-frames":
                                        return tq(eh, {
                                            children: [tq("div", {
                                                className: nD(["flex items-center gap-x-3"]),
                                                children: [tq("span", {
                                                    className: "text-[#6F6F78] text-xs font-medium",
                                                    children: "Total Time"
                                                }), tq("span", {
                                                    className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                                                    children: [ow(t.timing).toFixed(0), "ms"]
                                                })]
                                            }), tq("div", {
                                                className: nD(["flex items-center gap-x-3"]),
                                                children: [tq("span", {
                                                    className: "text-[#6F6F78] text-xs font-medium",
                                                    children: "Occurred"
                                                }), tq("span", {
                                                    className: "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                                                    children: `${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`
                                                })]
                                            })]
                                        })
                                }
                            })()
                        })
                    })
                },
                ar = nJ(() => {
                    var e;
                    let t = o7(),
                        [n, r] = eH(t);
                    eY(() => {
                        let e = setTimeout(() => {
                            r(t)
                        }, 600);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [t]);
                    let i = az.inspectState,
                        o = "inspecting" === i.value.kind,
                        a = "focused" === i.value.kind,
                        [l, s] = eH([]),
                        c = eq(() => {
                            switch (az.inspectState.value.kind) {
                                case "inspecting":
                                    nB.value = {
                                        view: "none"
                                    }, az.inspectState.value = {
                                        kind: "inspect-off"
                                    };
                                    return;
                                case "focused":
                                    nB.value = {
                                        view: "inspector"
                                    }, az.inspectState.value = {
                                        kind: "inspecting",
                                        hoveredDomElement: null
                                    };
                                    return;
                                case "inspect-off":
                                    nB.value = {
                                        view: "none"
                                    }, az.inspectState.value = {
                                        kind: "inspecting",
                                        hoveredDomElement: null
                                    };
                                    return;
                                case "uninitialized":
                                    return
                            }
                        }, []),
                        d = eq(e => {
                            if (e.preventDefault(), e.stopPropagation(), !aT.instrumentation) return;
                            let t = !aT.instrumentation.isPaused.value;
                            aT.instrumentation.isPaused.value = t, nI("react-scan-options", {
                                ...nj("react-scan-options"),
                                enabled: !t
                            })
                        }, []);
                    tg(() => {
                        "uninitialized" === az.inspectState.value.kind && (az.inspectState.value = {
                            kind: "inspect-off"
                        })
                    });
                    let u = null,
                        p = "#999";
                    return o ? (u = tq(t0, {
                        name: "icon-inspect"
                    }), p = "#8e61e3") : a ? (u = tq(t0, {
                        name: "icon-focus"
                    }), p = "#8e61e3") : (u = tq(t0, {
                        name: "icon-inspect"
                    }), p = "#999"), eX(() => {
                        "notifications" !== nB.value.view || s([...new Set(t.map(e => e.id)).values()])
                    }, [t.length, nB.value.view]), tq("div", {
                        className: "flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",
                        children: [tq("div", {
                            className: "h-full flex items-center min-w-fit",
                            children: tq("button", {
                                type: "button",
                                id: "react-scan-inspect-element",
                                title: "Inspect element",
                                onClick: c,
                                className: "button flex items-center justify-center h-full w-full pl-3 pr-2.5",
                                style: {
                                    color: p
                                },
                                children: u
                            })
                        }), tq("div", {
                            className: "h-full flex items-center justify-center",
                            children: tq("button", {
                                type: "button",
                                id: "react-scan-notifications",
                                title: "Notifications",
                                onClick: () => {
                                    switch ("inspect-off" !== az.inspectState.value.kind && (az.inspectState.value = {
                                            kind: "inspect-off"
                                        }), nB.value.view) {
                                        case "inspector":
                                            az.inspectState.value = {
                                                kind: "inspect-off"
                                            }, s([...new Set(t.map(e => e.id)).values()]), nB.value = {
                                                view: "notifications"
                                            };
                                            return;
                                        case "notifications":
                                            nB.value = {
                                                view: "none"
                                            };
                                            return;
                                        case "none":
                                            s([...new Set(t.map(e => e.id)).values()]), nB.value = {
                                                view: "notifications"
                                            };
                                            return
                                    }
                                },
                                className: "button flex items-center justify-center h-full pl-2.5 pr-2.5",
                                style: {
                                    color: p
                                },
                                children: tq(ok, {
                                    events: n.filter(e => !l.includes(e.id)).map(e => "high" === ob(e)),
                                    size: 16,
                                    className: nD(["text-[#999]", "notifications" === nB.value.view && "text-[#8E61E3]"])
                                })
                            })
                        }), tq(iY, {
                            checked: !(null == (e = aT.instrumentation) ? void 0 : e.isPaused.value),
                            onChange: d,
                            className: "place-self-center",
                            title: "Outline Re-renders"
                        }), aT.options.value.showFPS && tq(iB, {})]
                    })
                }),
                ai = tl(() => "inspecting" === az.inspectState.value.kind),
                ao = tl(() => nD("relative", "flex-1", "flex flex-col", "rounded-t-lg", "overflow-hidden", "opacity-100", "transition-[opacity]", ai.value && "opacity-0 duration-0 delay-0")),
                aa = tl(() => "inspector" === nB.value.view),
                al = tl(() => "notifications" === nB.value.view),
                as = () => tq("div", {
                    className: nD("flex flex-1 flex-col", "overflow-hidden z-10", "rounded-lg", "bg-black", "opacity-100", "transition-[border-radius]", "peer-hover/left:rounded-l-none", "peer-hover/right:rounded-r-none", "peer-hover/top:rounded-t-none", "peer-hover/bottom:rounded-b-none"),
                    children: [tq("div", {
                        className: ao,
                        children: [tq(iH, {}), tq("div", {
                            className: nD("relative", "flex-1 flex", "text-white", "bg-[#0A0A0A]", "transition-opacity delay-150", "overflow-hidden", "border-b border-[#222]"),
                            children: [tq(ac, {
                                isOpen: aa,
                                children: tq(rN, {})
                            }), tq(ac, {
                                isOpen: al,
                                children: tq(ae, {})
                            })]
                        })]
                    }), tq(ar, {})]
                }),
                ac = e => {
                    let {
                        isOpen: t,
                        children: n
                    } = e;
                    return tq("div", {
                        className: nD("flex-1", "opacity-0", "overflow-y-auto overflow-x-hidden", "transition-opacity delay-0", "pointer-events-none", t.value && "opacity-100 delay-150 pointer-events-auto"),
                        children: tq("div", {
                            className: "absolute inset-0 flex",
                            children: n
                        })
                    })
                },
                ad = (e, t, n) => e + (t - e) * n,
                au = {
                    frameInterval: 1e3 / 60,
                    speeds: {
                        fast: .51,
                        slow: .1,
                        off: 0
                    }
                },
                ap = t5 && window.devicePixelRatio || 1,
                ah = () => {
                    let e = eB(null),
                        t = eB(null),
                        n = eB(null),
                        r = eB(null),
                        i = eB(null),
                        o = eB(0),
                        a = eB(),
                        l = eB(new Map),
                        s = eB(!1),
                        c = eB(0),
                        d = (e, t, i, o) => {
                            if (!n.current) return;
                            let a = n.current;
                            t.clearRect(0, 0, e.width, e.height), t.strokeStyle = "rgba(142, 97, 227, 0.5)", t.fillStyle = "rgba(173, 97, 230, 0.10)", "locked" === i ? t.setLineDash([]) : t.setLineDash([4]), t.lineWidth = 1, t.fillRect(a.left, a.top, a.width, a.height), t.strokeRect(a.left, a.top, a.width, a.height), ((e, t, n, i) => {
                                if (!i) return;
                                let o = ((null == i ? void 0 : i.type) && T(i.type)) ?? "Unknown";
                                e.save(), e.font = "12px system-ui, -apple-system, sans-serif";
                                let a = e.measureText(o).width,
                                    l = 14 * ("locked" === n),
                                    s = 6 * ("locked" === n),
                                    c = t.left,
                                    d = t.top - 24 - 4;
                                if (e.fillStyle = "rgb(37, 37, 38, .75)", e.beginPath(), e.roundRect(c, d, a + 16 + l + s, 24, 3), e.fill(), "locked" === n) {
                                    let t, n, i, o = c + 8,
                                        a = d + (24 - l) / 2 + 2;
                                    e.save(), e.strokeStyle = "white", e.fillStyle = "white", e.lineWidth = 1.5, t = .6 * l, n = .5 * l, e.beginPath(), e.arc(o + (l - t) / 2 + t / 2, a + n / 2, t / 2, Math.PI, 0, !1), e.stroke(), i = .8 * l, e.fillRect(o + (l - i) / 2, a + n / 2, i, .5 * l), e.restore(), r.current = {
                                        x: o,
                                        y: a,
                                        width: l,
                                        height: l
                                    }
                                } else r.current = null;
                                e.fillStyle = "white", e.textBaseline = "middle";
                                e.fillText(o, c + 8 + ("locked" === n ? l + s : 0), d + 12), e.restore()
                            })(t, a, i, o)
                        },
                        u = async (e, t, r, i) => {
                            if (!e || !t || !r) return;
                            let {
                                parentCompositeFiber: l
                            } = rM(e), s = await rA(e);
                            l && s && ((e, t, r, i, l) => {
                                var s;
                                let u, p, h;
                                if (t.save(), !n.current) {
                                    n.current = r, d(e, t, i, l), t.restore();
                                    return
                                }
                                u = aT.options.value.animationSpeed, p = au.speeds[u] ?? au.speeds.off, h = a => {
                                    if (a - c.current < au.frameInterval) {
                                        o.current = requestAnimationFrame(h);
                                        return
                                    }(c.current = a, n.current) ? (n.current = {
                                        left: ad(n.current.left, r.left, p),
                                        top: ad(n.current.top, r.top, p),
                                        width: ad(n.current.width, r.width, p),
                                        height: ad(n.current.height, r.height, p)
                                    }, d(e, t, i, l), Math.abs(n.current.left - r.left) > .1 || Math.abs(n.current.top - r.top) > .1 || Math.abs(n.current.width - r.width) > .1 || Math.abs(n.current.height - r.height) > .1 ? o.current = requestAnimationFrame(h) : (n.current = r, d(e, t, i, l), cancelAnimationFrame(o.current), t.restore(), null == s || s())) : cancelAnimationFrame(o.current)
                                }, cancelAnimationFrame(o.current), clearTimeout(a.current), o.current = requestAnimationFrame(h), a.current = setTimeout(() => {
                                    cancelAnimationFrame(o.current), n.current = r, d(e, t, i, l), t.restore(), null == s || s()
                                }, 1e3)
                            })(t, r, s, i, l)
                        }, p = t => {
                            if (!e.current || s.current) return;
                            let o = a => {
                                    if (e.current && "opacity" === a.propertyName && s.current) {
                                        var l;
                                        let a;
                                        e.current.removeEventListener("transitionend", o), (a = (l = e.current).getContext("2d")) && a.clearRect(0, 0, l.width, l.height), n.current = null, r.current = null, i.current = null, l.classList.remove("fade-in"), s.current = !1, null == t || t()
                                    }
                                },
                                a = l.current.get("fade-out");
                            a && (a(), l.current.delete("fade-out")), e.current.addEventListener("transitionend", o), l.current.set("fade-out", () => {
                                var t;
                                null == (t = e.current) || t.removeEventListener("transitionend", o)
                            }), s.current = !0, e.current.classList.remove("fade-in"), requestAnimationFrame(() => {
                                var t;
                                null == (t = e.current) || t.classList.add("fade-out")
                            })
                        }, h = () => {
                            e.current && (s.current = !1, e.current.classList.remove("fade-out"), requestAnimationFrame(() => {
                                var t;
                                null == (t = e.current) || t.classList.add("fade-in")
                            }))
                        }, m = nP(r => {
                            if ("inspecting" !== az.inspectState.peek().kind || !t.current) return;
                            t.current.style.pointerEvents = "none";
                            let o = document.elementFromPoint((null == r ? void 0 : r.clientX) ?? 0, (null == r ? void 0 : r.clientY) ?? 0);
                            if (t.current.style.removeProperty("pointer-events"), clearTimeout(a.current), o && o !== e.current) {
                                let {
                                    parentCompositeFiber: e
                                } = rM(o);
                                if (e) {
                                    let t = rD(e);
                                    if (t) return void(t !== i.current && (i.current = t, rR.has(t.tagName) ? p() : h(), az.inspectState.value = {
                                        kind: "inspecting",
                                        hoveredDomElement: t
                                    }))
                                }
                            }
                            n.current && e.current && !s.current && p()
                        }, 32), f = (e, t) => {
                            let n = r.current;
                            if (!n) return !1;
                            let i = t.getBoundingClientRect(),
                                o = t.width / i.width,
                                a = t.height / i.height,
                                l = (e.clientX - i.left) * o,
                                s = (e.clientY - i.top) * a,
                                c = l / ap,
                                d = s / ap;
                            return c >= n.x && c <= n.x + n.width && d >= n.y && d <= n.y + n.height
                        }, g = n => {
                            if (n.__reactScanSyntheticEvent) return;
                            let r = az.inspectState.peek(),
                                o = e.current;
                            if (o && t.current) {
                                if (f(n, o)) {
                                    n.preventDefault(), n.stopPropagation(), "focused" === r.kind && (az.inspectState.value = {
                                        kind: "inspecting",
                                        hoveredDomElement: r.focusedDomElement
                                    });
                                    return
                                }
                                "inspecting" === r.kind && (e => {
                                    var t;
                                    let n = ["react-scan-inspect-element", "react-scan-power"];
                                    if (e.target instanceof HTMLElement && n.includes(e.target.id)) return;
                                    let r = null == (t = i.current) ? void 0 : t.tagName;
                                    if (r && rR.has(r)) return;
                                    e.preventDefault(), e.stopPropagation();
                                    let o = i.current ?? document.elementFromPoint(e.clientX, e.clientY);
                                    if (!o) return;
                                    let a = e.composedPath().at(0);
                                    if (a instanceof HTMLElement && n.includes(a.id)) {
                                        let t = new MouseEvent(e.type, e);
                                        t.__reactScanSyntheticEvent = !0, a.dispatchEvent(t);
                                        return
                                    }
                                    let {
                                        parentCompositeFiber: l
                                    } = rM(o);
                                    if (!l) return;
                                    let s = rD(l);
                                    if (!s) {
                                        i.current = null, az.inspectState.value = {
                                            kind: "inspect-off"
                                        };
                                        return
                                    }
                                    az.inspectState.value = {
                                        kind: "focused",
                                        focusedDomElement: s,
                                        fiber: l
                                    }
                                })(n)
                            }
                        }, v = t => {
                            var r;
                            if ("Escape" !== t.key) return;
                            let o = az.inspectState.peek();
                            if (e.current && (null == (r = document.activeElement) ? void 0 : r.id) !== "react-scan-root" && (nB.value = {
                                    view: "none"
                                }, "focused" === o.kind || "inspecting" === o.kind)) switch (t.preventDefault(), t.stopPropagation(), o.kind) {
                                case "focused":
                                    h(), n.current = null, i.current = o.focusedDomElement, az.inspectState.value = {
                                        kind: "inspecting",
                                        hoveredDomElement: o.focusedDomElement
                                    };
                                    break;
                                case "inspecting":
                                    p(() => {
                                        nU.value = !1, az.inspectState.value = {
                                            kind: "inspect-off"
                                        }
                                    })
                            }
                        }, w = (e, t) => {
                            let n = e.getBoundingClientRect();
                            e.width = n.width * ap, e.height = n.height * ap, t.scale(ap, ap), t.save()
                        }, b = () => {
                            let t = az.inspectState.peek(),
                                r = e.current;
                            if (!r) return;
                            let i = null == r ? void 0 : r.getContext("2d");
                            i && (cancelAnimationFrame(o.current), clearTimeout(a.current), w(r, i), n.current = null, "focused" === t.kind && t.focusedDomElement ? u(t.focusedDomElement, r, i, "locked") : "inspecting" === t.kind && t.hoveredDomElement && u(t.hoveredDomElement, r, i, "inspecting"))
                        }, x = t => {
                            let n = az.inspectState.peek(),
                                r = e.current;
                            r && ("inspecting" === n.kind || f(t, r)) && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
                        };
                    return eY(() => {
                        let r = e.current;
                        if (!r) return;
                        let s = null == r ? void 0 : r.getContext("2d");
                        if (!s) return;
                        w(r, s);
                        let c = az.inspectState.subscribe(e => {
                            ((e, r, a) => {
                                var s;
                                let c;
                                switch (null == (s = l.current.get(e.kind)) || s(), t.current && "inspecting" !== e.kind && (t.current.style.pointerEvents = "none"), o.current && cancelAnimationFrame(o.current), e.kind) {
                                    case "inspect-off":
                                        p();
                                        return;
                                    case "inspecting":
                                        u(e.hoveredDomElement, r, a, "inspecting");
                                        break;
                                    case "focused":
                                        if (!e.focusedDomElement) return;
                                        i.current !== e.focusedDomElement && (i.current = e.focusedDomElement), nB.value = {
                                            view: "inspector"
                                        }, u(e.focusedDomElement, r, a, "locked"), (c = az.lastReportTime.subscribe(() => {
                                            if (o.current && n.current) {
                                                let {
                                                    parentCompositeFiber: t
                                                } = rM(e.focusedDomElement);
                                                t && u(e.focusedDomElement, r, a, "locked")
                                            }
                                        })) && l.current.set(e.kind, c)
                                }
                            })(e, r, s)
                        });
                        return window.addEventListener("scroll", b, {
                            passive: !0
                        }), window.addEventListener("resize", b, {
                            passive: !0
                        }), document.addEventListener("pointermove", m, {
                            passive: !0,
                            capture: !0
                        }), document.addEventListener("pointerdown", x, {
                            capture: !0
                        }), document.addEventListener("click", g, {
                            capture: !0
                        }), document.addEventListener("keydown", v, {
                            capture: !0
                        }), () => {
                            for (let e of l.current.values()) null == e || e();
                            c(), window.removeEventListener("scroll", b), window.removeEventListener("resize", b), document.removeEventListener("pointermove", m, {
                                capture: !0
                            }), document.removeEventListener("click", g, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", x, {
                                capture: !0
                            }), document.removeEventListener("keydown", v, {
                                capture: !0
                            }), o.current && cancelAnimationFrame(o.current), clearTimeout(a.current)
                        }
                    }, []), tq(eh, {
                        children: [tq("div", {
                            ref: t,
                            className: nD("fixed top-0 left-0 w-screen h-screen", "z-[214748365]"),
                            style: {
                                pointerEvents: "none"
                            }
                        }), tq("canvas", {
                            ref: e,
                            dir: "ltr",
                            className: nD("react-scan-inspector-overlay", "fixed top-0 left-0 w-screen h-screen", "pointer-events-none", "z-[214748367]")
                        })]
                    })
                },
                am = class {
                    rightEdge(e) {
                        return this.width - e - 24
                    }
                    bottomEdge(e) {
                        return this.height - e - 24
                    }
                    isFullWidth(e) {
                        return e >= this.maxWidth
                    }
                    isFullHeight(e) {
                        return e >= this.maxHeight
                    }
                    constructor(e, t) {
                        this.width = e, this.height = t, this.maxWidth = e - 48, this.maxHeight = t - 48
                    }
                },
                af = () => {
                    let e = window.innerWidth,
                        t = window.innerHeight;
                    return X && X.width === e && X.height === t ? X : X = new am(e, t)
                },
                ag = (e, t, n) => {
                    let r, i, o = "rtl" === getComputedStyle(document.body).direction,
                        a = window.innerWidth,
                        l = window.innerHeight,
                        s = 550 === t,
                        c = s ? t : Math.min(t, a - 48),
                        d = s ? n : Math.min(n, l - 48),
                        u = a - c - 24,
                        p = l - d - 24;
                    switch (e) {
                        case "top-right":
                            r = o ? -24 : u, i = 24;
                            break;
                        case "bottom-right":
                            r = o ? -24 : u, i = p;
                            break;
                        case "bottom-left":
                            r = o ? -u : 24, i = p;
                            break;
                        case "top-left":
                            r = o ? -u : 24, i = 24;
                            break;
                        default:
                            r = 24, i = 24
                    }
                    return s && (r = o ? Math.min(-24, Math.max(r, -u)) : Math.max(24, Math.min(r, u)), i = Math.max(24, Math.min(i, p))), {
                        x: r,
                        y: i
                    }
                },
                av = (e, t, n) => {
                    let r = n ? af().maxWidth : af().maxHeight;
                    return Math.min(Math.max(n ? 550 : 400, e + t), r)
                },
                aw = function(e, t, n, r) {
                    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 100,
                        o = void 0 !== n ? e - n : 0,
                        a = void 0 !== r ? t - r : 0,
                        l = window.innerWidth / 2,
                        s = window.innerHeight / 2,
                        c = o > i,
                        d = a > i;
                    if (c || o < -i) {
                        let e = t > s;
                        return c ? e ? "bottom-right" : "top-right" : e ? "bottom-left" : "top-left"
                    }
                    if (d || a < -i) {
                        let t = e > l;
                        return d ? t ? "bottom-right" : "bottom-left" : t ? "top-right" : "top-left"
                    }
                    return e > l ? t > s ? "bottom-right" : "top-right" : t > s ? "bottom-left" : "top-left"
                },
                ab = e => {
                    let {
                        position: t
                    } = e, n = eB(null), r = eB(null), i = eB(null), o = eB(null);
                    return eY(() => {
                        let e = n.current;
                        if (!e) return;
                        let a = () => {
                                var n, r, i;
                                e.classList.remove("pointer-events-none");
                                let o = "focused" === az.inspectState.value.kind,
                                    a = "none" !== nB.value.view;
                                (o || a) && (n = nY.value.corner, r = nY.value.dimensions.isFullWidth, i = nY.value.dimensions.isFullHeight, r && i || (r || i ? r ? t !== n.split("-")[0] : !!i && t !== n.split("-")[1] : ((e, t) => {
                                    let [n, r] = t.split("-");
                                    return e !== n && e !== r
                                })(t, n))) ? e.classList.remove("hidden", "pointer-events-none", "opacity-0"): e.classList.add("hidden", "pointer-events-none", "opacity-0")
                            },
                            l = nY.subscribe(e => {
                                (null === r.current || null === i.current || null === o.current || e.dimensions.width !== r.current || e.dimensions.height !== i.current || e.corner !== o.current) && (a(), r.current = e.dimensions.width, i.current = e.dimensions.height, o.current = e.corner)
                            }),
                            s = az.inspectState.subscribe(() => {
                                a()
                            });
                        return () => {
                            l(), s(), r.current = null, i.current = null, o.current = null
                        }
                    }, []), tq("div", {
                        ref: n,
                        onPointerDown: eq(e => {
                            e.preventDefault(), e.stopPropagation();
                            let n = nW.value;
                            if (!n) return;
                            let r = n.style,
                                {
                                    dimensions: i
                                } = nY.value,
                                o = e.clientX,
                                a = e.clientY,
                                l = i.width,
                                s = i.height,
                                c = i.position;
                            nY.value = {
                                ...nY.value,
                                dimensions: {
                                    ...i,
                                    isFullWidth: !1,
                                    isFullHeight: !1,
                                    width: l,
                                    height: s,
                                    position: c
                                }
                            };
                            let d = null,
                                u = e => {
                                    d || (r.transition = "none", d = requestAnimationFrame(() => {
                                        let {
                                            newSize: n,
                                            newPosition: i
                                        } = ((e, t, n, r, i) => {
                                            let o = "rtl" === getComputedStyle(document.body).direction,
                                                a = window.innerWidth - 48,
                                                l = window.innerHeight - 48,
                                                s = t.width,
                                                c = t.height,
                                                d = n.x,
                                                u = n.y;
                                            if (o && e.includes("right")) {
                                                let e = -n.x + t.width - 24;
                                                s = Math.min(a, Math.max(550, Math.min(t.width + r, e))), d = n.x + (s - t.width)
                                            }
                                            if (o && e.includes("left")) {
                                                let e = window.innerWidth - n.x - 24;
                                                s = Math.min(a, Math.max(550, Math.min(t.width - r, e)))
                                            }
                                            if (!o && e.includes("right")) {
                                                let e = window.innerWidth - n.x - 24;
                                                s = Math.min(a, Math.max(550, Math.min(t.width + r, e)))
                                            }
                                            if (!o && e.includes("left")) {
                                                let e = n.x + t.width - 24;
                                                s = Math.min(a, Math.max(550, Math.min(t.width - r, e))), d = n.x - (s - t.width)
                                            }
                                            if (e.includes("bottom")) {
                                                let e = window.innerHeight - n.y - 24;
                                                c = Math.min(l, Math.max(400, Math.min(t.height + i, e)))
                                            }
                                            if (e.includes("top")) {
                                                let e = n.y + t.height - 24;
                                                c = Math.min(l, Math.max(400, Math.min(t.height - i, e))), u = n.y - (c - t.height)
                                            }
                                            let p = window.innerWidth - 24 - s,
                                                h = window.innerHeight - 24 - c;
                                            return {
                                                newSize: {
                                                    width: s,
                                                    height: c
                                                },
                                                newPosition: {
                                                    x: d = o ? Math.min(-24, Math.max(d, -p)) : Math.max(24, Math.min(d, p)),
                                                    y: u = Math.max(24, Math.min(u, h))
                                                }
                                            }
                                        })(t, {
                                            width: l,
                                            height: s
                                        }, c, e.clientX - o, e.clientY - a);
                                        r.transform = `translate3d(${i.x}px, ${i.y}px, 0)`, r.width = `${n.width}px`, r.height = `${n.height}px`;
                                        let u = Math.min(Math.floor(n.width - 120), Math.max(240, nY.value.componentsTree.width));
                                        nY.value = {
                                            ...nY.value,
                                            dimensions: {
                                                isFullWidth: !1,
                                                isFullHeight: !1,
                                                width: n.width,
                                                height: n.height,
                                                position: i
                                            },
                                            componentsTree: {
                                                ...nY.value.componentsTree,
                                                width: u
                                            }
                                        }, d = null
                                    }))
                                },
                                p = () => {
                                    d && (cancelAnimationFrame(d), d = null), document.removeEventListener("pointermove", u), document.removeEventListener("pointerup", p);
                                    let {
                                        dimensions: e,
                                        corner: t
                                    } = nY.value, i = af(), o = i.isFullWidth(e.width), a = i.isFullHeight(e.height), l = t;
                                    (o && a || o || a) && (l = (e => {
                                        let t = af(),
                                            n = {
                                                "top-left": Math.hypot(e.x, e.y),
                                                "top-right": Math.hypot(t.maxWidth - e.x, e.y),
                                                "bottom-left": Math.hypot(e.x, t.maxHeight - e.y),
                                                "bottom-right": Math.hypot(t.maxWidth - e.x, t.maxHeight - e.y)
                                            },
                                            r = "top-left";
                                        for (let e in n) n[e] < n[r] && (r = e);
                                        return r
                                    })(e.position));
                                    let s = ag(l, e.width, e.height),
                                        c = () => {
                                            n.removeEventListener("transitionend", c)
                                        };
                                    n.addEventListener("transitionend", c), r.transform = `translate3d(${s.x}px, ${s.y}px, 0)`, nY.value = {
                                        ...nY.value,
                                        corner: l,
                                        dimensions: {
                                            isFullWidth: o,
                                            isFullHeight: a,
                                            width: e.width,
                                            height: e.height,
                                            position: s
                                        },
                                        lastDimensions: {
                                            isFullWidth: o,
                                            isFullHeight: a,
                                            width: e.width,
                                            height: e.height,
                                            position: s
                                        }
                                    }, nI(t1, {
                                        corner: l,
                                        dimensions: nY.value.dimensions,
                                        lastDimensions: nY.value.lastDimensions,
                                        componentsTree: nY.value.componentsTree
                                    })
                                };
                            document.addEventListener("pointermove", u, {
                                passive: !0
                            }), document.addEventListener("pointerup", p)
                        }, []),
                        onDblClick: eq(e => {
                            e.preventDefault(), e.stopPropagation();
                            let n = nW.value;
                            if (!n) return;
                            let r = n.style,
                                {
                                    dimensions: i,
                                    corner: o
                                } = nY.value,
                                a = af(),
                                l = a.isFullWidth(i.width),
                                s = a.isFullHeight(i.height),
                                c = l && s,
                                d = (l || s) && !c,
                                u = i.width,
                                p = i.height,
                                h = ((e, t, n, r, i) => {
                                    if (n) {
                                        if ("top-left" === e) return "bottom-right";
                                        if ("top-right" === e) return "bottom-left";
                                        if ("bottom-left" === e) return "top-right";
                                        if ("bottom-right" === e) return "top-left";
                                        let [n, r] = t.split("-");
                                        if ("left" === e) return `${n}-right`;
                                        if ("right" === e) return `${n}-left`;
                                        if ("top" === e) return `bottom-${r}`;
                                        if ("bottom" === e) return `top-${r}`
                                    }
                                    if (r) {
                                        if ("left" === e) return `${t.split("-")[0]}-right`;
                                        if ("right" === e) return `${t.split("-")[0]}-left`
                                    }
                                    if (i) {
                                        if ("top" === e) return `bottom-${t.split("-")[1]}`;
                                        if ("bottom" === e) return `top-${t.split("-")[1]}`
                                    }
                                    return t
                                })(t, o, c, l, s);
                            "left" === t || "right" === t ? (u = l ? i.width : a.maxWidth, d && (u = l ? 550 : a.maxWidth)) : (p = s ? i.height : a.maxHeight, d && (p = s ? 400 : a.maxHeight)), c && ("left" === t || "right" === t ? u = 550 : p = 400);
                            let m = ag(h, u, p),
                                f = {
                                    isFullWidth: a.isFullWidth(u),
                                    isFullHeight: a.isFullHeight(p),
                                    width: u,
                                    height: p,
                                    position: m
                                },
                                g = Math.floor(u - 275),
                                v = nY.value.componentsTree.width,
                                w = Math.floor(.3 * u),
                                b = l ? 240 : "left" !== t && "right" !== t || l ? Math.min(g, Math.max(240, v)) : Math.min(g, Math.max(240, w));
                            requestAnimationFrame(() => {
                                nY.value = {
                                    corner: h,
                                    dimensions: f,
                                    lastDimensions: i,
                                    componentsTree: {
                                        ...nY.value.componentsTree,
                                        width: b
                                    }
                                }, r.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", r.width = `${u}px`, r.height = `${p}px`, r.transform = `translate3d(${m.x}px, ${m.y}px, 0)`
                            }), nI(t1, {
                                corner: h,
                                dimensions: f,
                                lastDimensions: i,
                                componentsTree: {
                                    ...nY.value.componentsTree,
                                    width: b
                                }
                            })
                        }, []),
                        className: nD("absolute z-50", "flex items-center justify-center", "group", "transition-colors select-none", "peer", {
                            "resize-left peer/left": "left" === t,
                            "resize-right peer/right z-10": "right" === t,
                            "resize-top peer/top": "top" === t,
                            "resize-bottom peer/bottom": "bottom" === t
                        }),
                        children: tq("span", {
                            className: "resize-line-wrapper",
                            children: tq("span", {
                                className: "resize-line",
                                children: tq(t0, {
                                    name: "icon-ellipsis",
                                    size: 18,
                                    className: nD("text-neutral-400", ("left" === t || "right" === t) && "rotate-90")
                                })
                            })
                        })
                    })
                },
                ax = {
                    horizontal: {
                        width: 20,
                        height: 48
                    },
                    vertical: {
                        width: 48,
                        height: 20
                    }
                },
                ay = () => {
                    let e = eB(null),
                        t = eB(!1),
                        n = eB(0),
                        r = eB(0),
                        i = eB(!1),
                        o = eq(function() {
                            let o, a, l = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            if (!e.current) return;
                            let {
                                corner: s
                            } = nY.value;
                            if (nV.value) {
                                let e = ax[nV.value.orientation || "horizontal"];
                                o = e.width, a = e.height
                            } else if (t.current) {
                                let e = nY.value.lastDimensions;
                                o = av(e.width, 0, !0), a = av(e.height, 0, !1), i.current && (i.current = !1)
                            } else o = n.current, a = r.current;
                            let c = ag(s, o, a);
                            if (nV.value) {
                                let {
                                    corner: e,
                                    orientation: t = "horizontal"
                                } = nV.value, n = ax[t];
                                switch (e) {
                                    case "top-left":
                                        c = "horizontal" === t ? {
                                            x: -1,
                                            y: 24
                                        } : {
                                            x: 24,
                                            y: -1
                                        };
                                        break;
                                    case "bottom-left":
                                        c = "horizontal" === t ? {
                                            x: -1,
                                            y: window.innerHeight - n.height - 24
                                        } : {
                                            x: 24,
                                            y: window.innerHeight - n.height + 1
                                        };
                                        break;
                                    case "top-right":
                                        c = "horizontal" === t ? {
                                            x: window.innerWidth - n.width + 1,
                                            y: 24
                                        } : {
                                            x: window.innerWidth - n.width - 24,
                                            y: -1
                                        };
                                        break;
                                    default:
                                        c = "horizontal" === t ? {
                                            x: window.innerWidth - n.width + 1,
                                            y: window.innerHeight - n.height - 24
                                        } : {
                                            x: window.innerWidth - n.width - 24,
                                            y: window.innerHeight - n.height + 1
                                        }
                                }
                            }
                            let d = o < 550 || a < 400,
                                u = e.current,
                                p = u.style,
                                h = null,
                                m = () => {
                                    nX(), u.removeEventListener("transitionend", m), h && (cancelAnimationFrame(h), h = null)
                                };
                            u.addEventListener("transitionend", m), p.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", h = requestAnimationFrame(() => {
                                p.width = `${o}px`, p.height = `${a}px`, p.transform = `translate3d(${c.x}px, ${c.y}px, 0)`, h = null
                            });
                            let f = {
                                isFullWidth: o >= window.innerWidth - 48,
                                isFullHeight: a >= window.innerHeight - 48,
                                width: o,
                                height: a,
                                position: c
                            };
                            nY.value = {
                                corner: s,
                                dimensions: f,
                                lastDimensions: t ? nY.value.lastDimensions : o > n.current ? f : nY.value.lastDimensions,
                                componentsTree: nY.value.componentsTree
                            }, l && !d && nI(t1, {
                                corner: nY.value.corner,
                                dimensions: nY.value.dimensions,
                                lastDimensions: nY.value.lastDimensions,
                                componentsTree: nY.value.componentsTree
                            }), nX()
                        }, []),
                        a = eq(t => {
                            if (t.preventDefault(), !e.current || t.target.closest("button")) return;
                            let n = e.current,
                                r = n.style,
                                {
                                    dimensions: i
                                } = nY.value,
                                a = t.clientX,
                                l = t.clientY,
                                s = i.position.x,
                                c = i.position.y,
                                d = s,
                                u = c,
                                p = null,
                                h = !1,
                                m = a,
                                f = l,
                                g = e => {
                                    p || (h = !0, m = e.clientX, f = e.clientY, p = requestAnimationFrame(() => {
                                        let e = m - a,
                                            t = f - l;
                                        d = Number(s) + e, u = Number(c) + t, r.transition = "none", r.transform = `translate3d(${d}px, ${u}px, 0)`;
                                        let n = d + i.width,
                                            h = u + i.height,
                                            w = Math.max(0, -d),
                                            b = Math.max(0, n - window.innerWidth),
                                            x = Math.max(0, -u),
                                            y = Math.max(0, h - window.innerHeight),
                                            k = Math.min(i.width, w + b),
                                            _ = Math.min(i.height, x + y),
                                            N = k * i.height + _ * i.width - k * _ > .35 * (i.width * i.height);
                                        if (!N && aT.options.value.showFPS) {
                                            let e = d + i.width;
                                            N = e <= 0 || e - 100 >= window.innerWidth || u + i.height <= 0 || u >= window.innerHeight
                                        }
                                        if (N) {
                                            let e, t = d + i.width / 2,
                                                n = u + i.height / 2,
                                                r = window.innerWidth / 2,
                                                a = window.innerHeight / 2;
                                            e = t < r ? n < a ? "top-left" : "bottom-left" : n < a ? "top-right" : "bottom-right";
                                            let l = Math.max(w, b),
                                                s = Math.max(x, y);
                                            nY.value = {
                                                ...nY.value,
                                                corner: e,
                                                lastDimensions: {
                                                    ...i,
                                                    position: ag(e, i.width, i.height)
                                                }
                                            };
                                            let c = {
                                                corner: e,
                                                orientation: l > s ? "horizontal" : "vertical"
                                            };
                                            nV.value = c, nI(t2, c), nI(t1, nY.value), o(!1), document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", v), p && (cancelAnimationFrame(p), p = null)
                                        }
                                        p = null
                                    }))
                                },
                                v = () => {
                                    if (!n) return;
                                    p && (cancelAnimationFrame(p), p = null), document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", v);
                                    let e = Math.abs(m - a),
                                        t = Math.abs(f - l),
                                        o = Math.sqrt(e * e + t * t);
                                    if (!h || o < 60) return;
                                    let w = aw(m, f, a, l, "focused" === az.inspectState.value.kind ? 80 : 40);
                                    if (w === nY.value.corner) {
                                        r.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
                                        let e = nY.value.dimensions.position;
                                        requestAnimationFrame(() => {
                                            r.transform = `translate3d(${e.x}px, ${e.y}px, 0)`
                                        });
                                        return
                                    }
                                    let b = ag(w, i.width, i.height);
                                    if (d === s && u === c) return;
                                    let x = () => {
                                        r.transition = "none", nX(), n.removeEventListener("transitionend", x), p && (cancelAnimationFrame(p), p = null)
                                    };
                                    n.addEventListener("transitionend", x), r.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)", requestAnimationFrame(() => {
                                        r.transform = `translate3d(${b.x}px, ${b.y}px, 0)`
                                    }), nY.value = {
                                        corner: w,
                                        dimensions: {
                                            isFullWidth: i.isFullWidth,
                                            isFullHeight: i.isFullHeight,
                                            width: i.width,
                                            height: i.height,
                                            position: b
                                        },
                                        lastDimensions: nY.value.lastDimensions,
                                        componentsTree: nY.value.componentsTree
                                    }, nI(t1, {
                                        corner: w,
                                        dimensions: nY.value.dimensions,
                                        lastDimensions: nY.value.lastDimensions,
                                        componentsTree: nY.value.componentsTree
                                    })
                                };
                            document.addEventListener("pointermove", g), document.addEventListener("pointerup", v)
                        }, []),
                        l = eq(t => {
                            if (t.preventDefault(), !e.current || !nV.value) return;
                            let {
                                corner: r,
                                orientation: i = "horizontal"
                            } = nV.value, a = t.clientX, l = t.clientY, s = null, c = !1, d = t => {
                                if (c || s) return;
                                let p = t.clientX - a,
                                    h = t.clientY - l,
                                    m = !1;
                                "horizontal" === i ? r.endsWith("left") && p > 50 ? m = !0 : r.endsWith("right") && p < -50 && (m = !0) : r.startsWith("top") && h > 50 ? m = !0 : r.startsWith("bottom") && h < -50 && (m = !0), m && (c = !0, nV.value = null, nI(t2, null), 0 === n.current && e.current ? requestAnimationFrame(() => {
                                    if (e.current) {
                                        e.current.style.width = "min-content", n.current = e.current.offsetWidth || 300;
                                        let r = nY.value.lastDimensions,
                                            i = av(r.width, 0, !0),
                                            a = av(r.height, 0, !1),
                                            l = t.clientX - i / 2,
                                            s = t.clientY - a / 2;
                                        l = Math.max(24, Math.min(l, window.innerWidth - i - 24)), s = Math.max(24, Math.min(s, window.innerHeight - a - 24)), nY.value = {
                                            ...nY.value,
                                            dimensions: {
                                                ...nY.value.dimensions,
                                                position: {
                                                    x: l,
                                                    y: s
                                                }
                                            }
                                        }, o(!0), nB.value = nj(t4) || {
                                            view: "none"
                                        }, setTimeout(() => {
                                            if (e.current) {
                                                let n = new PointerEvent("pointerdown", {
                                                    clientX: t.clientX,
                                                    clientY: t.clientY,
                                                    pointerId: t.pointerId,
                                                    bubbles: !0
                                                });
                                                e.current.dispatchEvent(n)
                                            }
                                        }, 100)
                                    }
                                }) : (o(!0), nB.value = nj(t4) || {
                                    view: "none"
                                }), document.removeEventListener("pointermove", d), document.removeEventListener("pointerup", u))
                            }, u = () => {
                                s && (cancelAnimationFrame(s), s = null), document.removeEventListener("pointermove", d), document.removeEventListener("pointerup", u)
                            };
                            document.addEventListener("pointermove", d), document.addEventListener("pointerup", u)
                        }, []);
                    eY(() => {
                        if (!e.current) return;
                        nL(t4), nV.value ? (r.current = 36, n.current = 0) : (e.current.style.width = "min-content", r.current = 36, n.current = e.current.offsetWidth), e.current.style.maxWidth = "calc(100vw - 48px)", e.current.style.maxHeight = "calc(100vh - 48px)", o(), "focused" === az.inspectState.value.kind || nV.value || i.current || (nY.value = {
                            ...nY.value,
                            dimensions: {
                                isFullWidth: !1,
                                isFullHeight: !1,
                                width: n.current,
                                height: r.current,
                                position: nY.value.dimensions.position
                            }
                        }), nW.value = e.current;
                        let a = nY.subscribe(t => {
                                if (!e.current) return;
                                let {
                                    x: n,
                                    y: r
                                } = t.dimensions.position, {
                                    width: i,
                                    height: o
                                } = t.dimensions, a = e.current;
                                requestAnimationFrame(() => {
                                    a.style.transform = `translate3d(${n}px, ${r}px, 0)`, a.style.width = `${i}px`, a.style.height = `${o}px`
                                })
                            }),
                            l = nB.subscribe(e => {
                                t.current = "none" !== e.view, o(), nV.value || ("none" !== e.view ? nI(t4, e) : nL(t4))
                            }),
                            s = az.inspectState.subscribe(e => {
                                t.current = "focused" === e.kind, o()
                            }),
                            c = () => {
                                o(!0)
                            };
                        return window.addEventListener("resize", c, {
                            passive: !0
                        }), () => {
                            window.removeEventListener("resize", c), l(), s(), a(), nI(t1, {
                                ...nH,
                                corner: nY.value.corner
                            })
                        }
                    }, []);
                    let [s, c] = eH(!1);
                    eY(() => {
                        c(!0)
                    }, []);
                    let d = nV.value,
                        u = "";
                    if (d) {
                        let {
                            orientation: e = "horizontal",
                            corner: t
                        } = d;
                        u = "horizontal" === e ? (null == t ? void 0 : t.endsWith("right")) ? "rotate-180" : "" : (null == t ? void 0 : t.startsWith("bottom")) ? "-rotate-90" : "rotate-90"
                    }
                    return tq(eh, {
                        children: [tq(ah, {}), tq(ak.Provider, {
                            value: e.current,
                            children: tq("div", {
                                id: "react-scan-toolbar",
                                dir: "ltr",
                                ref: e,
                                onPointerDown: d ? l : a,
                                className: nD("fixed inset-0", d ? (() => {
                                    let {
                                        orientation: e = "horizontal",
                                        corner: t
                                    } = d;
                                    return "horizontal" === e ? (null == t ? void 0 : t.endsWith("right")) ? "rounded-tl-lg rounded-bl-lg shadow-lg" : "rounded-tr-lg rounded-br-lg shadow-lg" : (null == t ? void 0 : t.startsWith("bottom")) ? "rounded-tl-lg rounded-tr-lg shadow-lg" : "rounded-bl-lg rounded-br-lg shadow-lg"
                                })() : "rounded-lg shadow-lg", "flex flex-col", "font-mono text-[13px]", "user-select-none", "opacity-0", d ? "cursor-pointer" : "cursor-move", "z-[124124124124]", "animate-fade-in animation-duration-300 animation-delay-300", "will-change-transform", "[touch-action:none]"),
                                children: d ? tq("button", {
                                    type: "button",
                                    onClick: () => {
                                        nV.value = null, nI(t2, null), 0 === n.current && e.current && requestAnimationFrame(() => {
                                            e.current && (e.current.style.width = "min-content", n.current = e.current.offsetWidth || 300, o(!0))
                                        }), nB.value = nj(t4) || {
                                            view: "none"
                                        }
                                    },
                                    className: "flex items-center justify-center w-full h-full text-white",
                                    title: "Expand toolbar",
                                    children: tq(t0, {
                                        name: "icon-chevron-right",
                                        size: 16,
                                        className: nD("transition-transform", u)
                                    })
                                }) : tq(eh, {
                                    children: [tq(ab, {
                                        position: "top"
                                    }), tq(ab, {
                                        position: "bottom"
                                    }), tq(ab, {
                                        position: "left"
                                    }), tq(ab, {
                                        position: "right"
                                    }), tq(as, {})]
                                })
                            })
                        })]
                    })
                },
                ak = eT(null),
                a_ = () => tq("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    style: "display: none;",
                    children: [tq("title", {
                        children: "React Scan Icons"
                    }), tq("symbol", {
                        id: "icon-inspect",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
                        }), tq("path", {
                            d: "M5 3a2 2 0 0 0-2 2"
                        }), tq("path", {
                            d: "M19 3a2 2 0 0 1 2 2"
                        }), tq("path", {
                            d: "M5 21a2 2 0 0 1-2-2"
                        }), tq("path", {
                            d: "M9 3h1"
                        }), tq("path", {
                            d: "M9 21h2"
                        }), tq("path", {
                            d: "M14 3h1"
                        }), tq("path", {
                            d: "M3 9v1"
                        }), tq("path", {
                            d: "M21 9v2"
                        }), tq("path", {
                            d: "M3 14v1"
                        })]
                    }), tq("symbol", {
                        id: "icon-focus",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
                        }), tq("path", {
                            d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
                        })]
                    }), tq("symbol", {
                        id: "icon-next",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: tq("path", {
                            d: "M6 9h6V5l7 7-7 7v-4H6V9z"
                        })
                    }), tq("symbol", {
                        id: "icon-previous",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: tq("path", {
                            d: "M18 15h-6v4l-7-7 7-7v4h6v6z"
                        })
                    }), tq("symbol", {
                        id: "icon-close",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("line", {
                            x1: "18",
                            y1: "6",
                            x2: "6",
                            y2: "18"
                        }), tq("line", {
                            x1: "6",
                            y1: "6",
                            x2: "18",
                            y2: "18"
                        })]
                    }), tq("symbol", {
                        id: "icon-replay",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M3 7V5a2 2 0 0 1 2-2h2"
                        }), tq("path", {
                            d: "M17 3h2a2 2 0 0 1 2 2v2"
                        }), tq("path", {
                            d: "M21 17v2a2 2 0 0 1-2 2h-2"
                        }), tq("path", {
                            d: "M7 21H5a2 2 0 0 1-2-2v-2"
                        }), tq("circle", {
                            cx: "12",
                            cy: "12",
                            r: "1"
                        }), tq("path", {
                            d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
                        })]
                    }), tq("symbol", {
                        id: "icon-ellipsis",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("circle", {
                            cx: "12",
                            cy: "12",
                            r: "1"
                        }), tq("circle", {
                            cx: "19",
                            cy: "12",
                            r: "1"
                        }), tq("circle", {
                            cx: "5",
                            cy: "12",
                            r: "1"
                        })]
                    }), tq("symbol", {
                        id: "icon-copy",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("rect", {
                            width: "14",
                            height: "14",
                            x: "8",
                            y: "8",
                            rx: "2",
                            ry: "2"
                        }), tq("path", {
                            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                        })]
                    }), tq("symbol", {
                        id: "icon-check",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: tq("path", {
                            d: "M20 6 9 17l-5-5"
                        })
                    }), tq("symbol", {
                        id: "icon-chevron-right",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: tq("path", {
                            d: "m9 18 6-6-6-6"
                        })
                    }), tq("symbol", {
                        id: "icon-settings",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                        }), tq("circle", {
                            cx: "12",
                            cy: "12",
                            r: "3"
                        })]
                    }), tq("symbol", {
                        id: "icon-flame",
                        viewBox: "0 0 24 24",
                        children: tq("path", {
                            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                        })
                    }), tq("symbol", {
                        id: "icon-function",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("rect", {
                            width: "18",
                            height: "18",
                            x: "3",
                            y: "3",
                            rx: "2",
                            ry: "2"
                        }), tq("path", {
                            d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
                        }), tq("path", {
                            d: "M9 11.2h5.7"
                        })]
                    }), tq("symbol", {
                        id: "icon-triangle-alert",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        }), tq("path", {
                            d: "M12 9v4"
                        }), tq("path", {
                            d: "M12 17h.01"
                        })]
                    }), tq("symbol", {
                        id: "icon-gallery-horizontal-end",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M2 7v10"
                        }), tq("path", {
                            d: "M6 5v14"
                        }), tq("rect", {
                            width: "12",
                            height: "18",
                            x: "10",
                            y: "3",
                            rx: "2"
                        })]
                    }), tq("symbol", {
                        id: "icon-search",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }), tq("line", {
                            x1: "21",
                            y1: "21",
                            x2: "16.65",
                            y2: "16.65"
                        })]
                    }), tq("symbol", {
                        id: "icon-lock",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("rect", {
                            width: "18",
                            height: "11",
                            x: "3",
                            y: "11",
                            rx: "2",
                            ry: "2"
                        }), tq("path", {
                            d: "M7 11V7a5 5 0 0 1 10 0v4"
                        })]
                    }), tq("symbol", {
                        id: "icon-lock-open",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("rect", {
                            width: "18",
                            height: "11",
                            x: "3",
                            y: "11",
                            rx: "2",
                            ry: "2"
                        }), tq("path", {
                            d: "M7 11V7a5 5 0 0 1 9.9-1"
                        })]
                    }), tq("symbol", {
                        id: "icon-sanil",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [tq("path", {
                            d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
                        }), tq("circle", {
                            cx: "10",
                            cy: "13",
                            r: "8"
                        }), tq("path", {
                            d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
                        }), tq("path", {
                            d: "M18 3 19.1 5.2"
                        })]
                    })]
                }),
                aN = class extends em {
                    static getDerivedStateFromError(e) {
                        return {
                            hasError: !0,
                            error: e
                        }
                    }
                    render() {
                        if (this.state.hasError) {
                            var e;
                            return tq("div", {
                                className: "fixed bottom-4 right-4 z-[124124124124]",
                                children: tq("div", {
                                    className: "p-3 bg-black rounded-lg shadow-lg w-80",
                                    children: [tq("div", {
                                        className: "flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",
                                        children: [tq(t0, {
                                            name: "icon-flame",
                                            className: "text-red-500",
                                            size: 14
                                        }), "React Scan ran into a problem"]
                                    }), tq("div", {
                                        className: "p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",
                                        children: (null == (e = this.state.error) ? void 0 : e.message) || JSON.stringify(this.state.error)
                                    }), tq("button", {
                                        type: "button",
                                        onClick: this.handleReset,
                                        className: "px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",
                                        children: "Restart"
                                    })]
                                })
                            })
                        }
                        return this.props.children
                    }
                    constructor() {
                        super(...arguments), this.state = {
                            hasError: !1,
                            error: null
                        }, this.handleReset = () => {
                            this.setState({
                                hasError: !1,
                                error: null
                            })
                        }
                    }
                },
                aS = null,
                aC = null,
                az = {
                    wasDetailsOpen: tn(!0),
                    isInIframe: tn(t5 && window.self !== window.top),
                    inspectState: tn({
                        kind: "uninitialized"
                    }),
                    monitor: tn(null),
                    fiberRoots: new Set,
                    reportData: new Map,
                    legacyReportData: new Map,
                    lastReportTime: tn(0),
                    interactionListeningForRenders: null,
                    changesListeners: new Map
                },
                aT = {
                    instrumentation: null,
                    componentAllowList: null,
                    options: tn({
                        enabled: !0,
                        log: !1,
                        showToolbar: !0,
                        animationSpeed: "fast",
                        dangerouslyForceRunInProduction: !1,
                        showFPS: !0,
                        showNotificationCount: !0,
                        allowInIframe: !1
                    }),
                    runInAllEnvironments: !1,
                    onRender: null,
                    scheduledOutlines: new Map,
                    activeOutlines: new Map,
                    Store: az,
                    version: "0.4.3"
                };
            t5 && window.__REACT_SCAN_EXTENSION__ && (window.__REACT_SCAN_VERSION__ = aT.version);
            var aE = e => {
                    let t = [],
                        n = {};
                    for (let r in e) {
                        if (!(r in aT.options.value)) continue;
                        let i = e[r];
                        switch (r) {
                            case "enabled":
                            case "log":
                            case "showToolbar":
                            case "showNotificationCount":
                            case "dangerouslyForceRunInProduction":
                            case "showFPS":
                            case "allowInIframe":
                                "boolean" != typeof i ? t.push(`- ${r} must be a boolean. Got "${i}"`) : n[r] = i;
                                break;
                            case "animationSpeed":
                                ["slow", "fast", "off"].includes(i) ? n[r] = i : t.push(`- Invalid animation speed "${i}". Using default "fast"`);
                                break;
                            case "onCommitStart":
                                "function" != typeof i ? t.push(`- ${r} must be a function. Got "${i}"`) : n.onCommitStart = i;
                                break;
                            case "onCommitFinish":
                                "function" != typeof i ? t.push(`- ${r} must be a function. Got "${i}"`) : n.onCommitFinish = i;
                                break;
                            case "onRender":
                                "function" != typeof i ? t.push(`- ${r} must be a function. Got "${i}"`) : n.onRender = i;
                                break;
                            case "onPaintStart":
                            case "onPaintFinish":
                                "function" != typeof i ? t.push(`- ${r} must be a function. Got "${i}"`) : n[r] = i;
                                break;
                            default:
                                t.push(`- Unknown option "${r}"`)
                        }
                    }
                    return t.length > 0 && console.warn(`[React Scan] Invalid options:
${t.join("\n")}`), n
                },
                aA = e => {
                    if (e) {
                        for (let t of Array.from(az.legacyReportData.values()))
                            if (t.type === e) return t;
                        return null
                    }
                    return az.legacyReportData
                },
                aM = e => {
                    try {
                        let n = aE(e);
                        if (0 === Object.keys(n).length) return;
                        let r = "showToolbar" in n && void 0 !== n.showToolbar,
                            i = {
                                ...aT.options.value,
                                ...n
                            },
                            {
                                instrumentation: o
                            } = aT;
                        o && "enabled" in n && (o.isPaused.value = !1 === n.enabled), aT.options.value = i;
                        try {
                            var t;
                            let e = null == (t = nj("react-scan-options")) ? void 0 : t.enabled;
                            "boolean" == typeof e && (i.enabled = e)
                        } catch (e) {
                            "verbose" === aT.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e)
                        }
                        return nI("react-scan-options", i), r && aP(!!i.showToolbar), i
                    } catch (e) {
                        "verbose" === aT.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e)
                    }
                },
                aF = () => aT.options,
                a$ = null,
                aR = () => {
                    if (null !== a$) return a$;
                    for (let e of (B ??= g()).renderers.values()) "production" === E(e) && (a$ = !0);
                    return a$
                },
                aD = () => {
                    try {
                        if (!t5 || !aT.runInAllEnvironments && aR() && !aT.options.value.dangerouslyForceRunInProduction) return;
                        let e = nj("react-scan-options");
                        if (e) {
                            let t = aE(e);
                            Object.keys(t).length > 0 && (aT.options.value = {
                                ...aT.options.value,
                                ...t
                            })
                        }
                        let t = aF();
                        (e => {
                            var t, n;
                            let r, i;
                            if (globalThis.__REACT_SCAN_STOP__) return;
                            let a = !1,
                                l = () => {
                                    a || (r && cancelAnimationFrame(r), r = requestAnimationFrame(() => {
                                        a = !0;
                                        let t = (() => {
                                            var e;
                                            let t, n;
                                            (n = document.querySelector("[data-react-scan]")) && n.remove();
                                            let r = document.createElement("div");
                                            r.setAttribute("data-react-scan", "true");
                                            let i = r.attachShadow({
                                                    mode: "open"
                                                }),
                                                o = document.createElement("canvas");
                                            if (o.style.position = "fixed", o.style.top = "0", o.style.left = "0", o.style.pointerEvents = "none", o.style.zIndex = "2147483646", o.setAttribute("aria-hidden", "true"), i.appendChild(o), !o) return null;
                                            iS = ij(), i_ = o;
                                            let {
                                                innerWidth: a,
                                                innerHeight: l
                                            } = window;
                                            o.style.width = `${a}px`, o.style.height = `${l}px`;
                                            let s = a * iS,
                                                c = l * iS;
                                            if (o.width = s, o.height = c, iP && !window.__REACT_SCAN_EXTENSION__) try {
                                                ik = new Worker(URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n'], {
                                                    type: "application/javascript"
                                                })));
                                                let e = o.transferControlToOffscreen();
                                                null == ik || ik.postMessage({
                                                    type: "init",
                                                    canvas: e,
                                                    width: o.width,
                                                    height: o.height,
                                                    dpr: iS
                                                }, [e])
                                            } catch (e) {
                                                console.warn("Failed to initialize OffscreenCanvas worker:", e)
                                            }
                                            ik || (e = iS, (t = o.getContext("2d", {
                                                alpha: !0
                                            })) && t.scale(e, e), iN = t);
                                            let d = !1;
                                            window.addEventListener("resize", () => {
                                                d || (d = !0, setTimeout(() => {
                                                    let e = window.innerWidth,
                                                        t = window.innerHeight;
                                                    iS = ij(), o.style.width = `${e}px`, o.style.height = `${t}px`, ik ? ik.postMessage({
                                                        type: "resize",
                                                        width: e,
                                                        height: t,
                                                        dpr: iS
                                                    }) : (o.width = e * iS, o.height = t * iS, iN && (iN.resetTransform(), iN.scale(iS, iS)), iD()), d = !1
                                                }))
                                            });
                                            let u = window.scrollX,
                                                p = window.scrollY,
                                                h = !1;
                                            return window.addEventListener("scroll", () => {
                                                h || (h = !0, setTimeout(() => {
                                                    let {
                                                        scrollX: e,
                                                        scrollY: t
                                                    } = window, n = e - u, r = t - p;
                                                    u = e, p = t, ik ? ik.postMessage({
                                                        type: "scroll",
                                                        deltaX: n,
                                                        deltaY: r
                                                    }) : requestAnimationFrame(iy.bind(null, iz, n, r)), h = !1
                                                }, 32))
                                            }), setInterval(() => {
                                                iE.size && requestAnimationFrame(iR)
                                            }, 32), i.appendChild(o), r
                                        })();
                                        t && document.documentElement.appendChild(t), e()
                                    }))
                                },
                                s = (t = "react-scan-devtools-0.1.0", n = {
                                    onCommitStart: () => {
                                        var e, t;
                                        null == (e = (t = aT.options.value).onCommitStart) || e.call(t)
                                    },
                                    onActive: () => {
                                        globalThis.__REACT_SCAN_STOP__ || (l(), window.__REACT_SCAN_EXTENSION__ || (globalThis.__REACT_SCAN__ = {
                                            ReactScanInternals: aT
                                        }), clearInterval(W), W = setInterval(() => {
                                            iI && (az.lastReportTime.value = Date.now(), iI = !1)
                                        }, 50), (() => {
                                            if (window.hideIntro) {
                                                window.hideIntro = void 0;
                                                return
                                            }
                                            console.log("%c[\xb7] %cReact Scan", "font-weight:bold;color:#7a68e8;font-size:20px;", "font-weight:bold;font-size:14px;"), console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")
                                        })())
                                    },
                                    onError: () => {},
                                    isValidFiber: iL,
                                    onRender: (e, t) => {
                                        var n, r, i, o;
                                        w(e) && (null == (o = az.interactionListeningForRenders) || o.call(az, e, t));
                                        let a = null == (n = aT.instrumentation) ? void 0 : n.isPaused.value,
                                            l = "inspect-off" === az.inspectState.value.kind || "uninitialized" === az.inspectState.value.kind;
                                        a && l || (a || (e => {
                                            if (!w(e)) return;
                                            let t = "string" == typeof e.type ? e.type : T(e);
                                            if (!t) return;
                                            let n = iT.get(e),
                                                r = (e => {
                                                    let t = [],
                                                        n = [];
                                                    for (v(e) ? t.push(e) : e.child && n.push(e.child); n.length;) {
                                                        let e = n.pop();
                                                        if (!e) break;
                                                        v(e) ? t.push(e) : e.child && n.push(e.child), e.sibling && n.push(e.sibling)
                                                    }
                                                    return t
                                                })(e),
                                                i = x(e);
                                            n ? n.count++ : (iT.set(e, {
                                                name: t,
                                                count: 1,
                                                elements: r.map(e => e.stateNode),
                                                didCommit: +!!i
                                            }), iE.add(e))
                                        })(e), aT.options.value.log && (e => {
                                            let t = new Map;
                                            for (let n = 0, r = e.length; n < r; n++) {
                                                let r = e[n];
                                                if (!r.componentName) continue;
                                                let i = t.get(r.componentName) ?? [],
                                                    o = tG([{
                                                        aggregatedCount: 1,
                                                        computedKey: null,
                                                        name: r.componentName,
                                                        frame: null,
                                                        ...r,
                                                        changes: {
                                                            type: r.changes.reduce((e, t) => e | t.type, 0),
                                                            unstable: r.changes.some(e => e.unstable)
                                                        },
                                                        phase: r.phase,
                                                        computedCurrent: null
                                                    }]);
                                                if (!o) continue;
                                                let a = null,
                                                    l = null;
                                                if (r.changes)
                                                    for (let e = 0, t = r.changes.length; e < t; e++) {
                                                        let {
                                                            name: t,
                                                            prevValue: n,
                                                            nextValue: o,
                                                            unstable: s,
                                                            type: c
                                                        } = r.changes[e];
                                                        1 === c ? (l ??= {}, (a ??= {})[`${s?"⚠️":""}${t} (prev)`] = n, l[`${s?"⚠️":""}${t} (next)`] = o) : i.push({
                                                            prev: n,
                                                            next: o,
                                                            type: 4 === c ? "context" : "state",
                                                            unstable: s ?? !1
                                                        })
                                                    }
                                                a && l && i.push({
                                                    prev: a,
                                                    next: l,
                                                    type: "props",
                                                    unstable: !1
                                                }), t.set(o, i)
                                            }
                                            for (let [e, n] of Array.from(t.entries())) {
                                                for (let {
                                                        type: t,
                                                        prev: r,
                                                        next: i,
                                                        unstable: o
                                                    }
                                                    of(console.group(`%c${e}`, "background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"), n)) console.log(`${t}:`, o ? "⚠️" : "", r, "!==", i);
                                                console.groupEnd()
                                            }
                                        })(t), "focused" === az.inspectState.value.kind && (n0.value = Date.now()), l || (e => {
                                            if (w(e) && !1 !== aT.options.value.showToolbar && "focused" === az.inspectState.value.kind) {
                                                let {
                                                    selfTime: t
                                                } = S(e), n = T(e.type), r = $(e), i = az.reportData.get(r), o = (null == i ? void 0 : i.count) ?? 0, a = (null == i ? void 0 : i.time) ?? 0, l = az.changesListeners.get($(e));
                                                if (null == l ? void 0 : l.length) {
                                                    let t, n = r$(e).map(e => ({
                                                            type: 1,
                                                            name: e.name,
                                                            value: e.value,
                                                            prevValue: e.prevValue,
                                                            unstable: !1
                                                        })),
                                                        r = (e => {
                                                            var t, n;
                                                            if (!e) return [];
                                                            let r = [];
                                                            if (0 === e.tag || 11 === e.tag || 15 === e.tag || 14 === e.tag) {
                                                                let n = e.memoizedState,
                                                                    i = null == (t = e.alternate) ? void 0 : t.memoizedState,
                                                                    o = 0;
                                                                for (; n;) {
                                                                    if (n.queue && void 0 !== n.memoizedState) {
                                                                        let e = {
                                                                            type: 2,
                                                                            name: o.toString(),
                                                                            value: n.memoizedState,
                                                                            prevValue: null == i ? void 0 : i.memoizedState
                                                                        };
                                                                        tK(e.prevValue, e.value) || r.push(e)
                                                                    }
                                                                    n = n.next, i = null == i ? void 0 : i.next, o++
                                                                }
                                                                return r
                                                            }
                                                            if (1 === e.tag) {
                                                                let t = {
                                                                    type: 3,
                                                                    name: "state",
                                                                    value: e.memoizedState,
                                                                    prevValue: null == (n = e.alternate) ? void 0 : n.memoizedState
                                                                };
                                                                tK(t.prevValue, t.value) || r.push(t)
                                                            }
                                                            return r
                                                        })(e),
                                                        i = (t = [], ((e, t) => {
                                                            try {
                                                                var n;
                                                                let r = e.dependencies,
                                                                    i = null == (n = e.alternate) ? void 0 : n.dependencies;
                                                                if (!r || !i || "object" != typeof r || !("firstContext" in r) || "object" != typeof i || !("firstContext" in i)) return !1;
                                                                let o = r.firstContext,
                                                                    a = i.firstContext;
                                                                for (; o && "object" == typeof o && "memoizedValue" in o || a && "object" == typeof a && "memoizedValue" in a;) {
                                                                    if (!0 === t(o, a)) return !0;
                                                                    o = null == o ? void 0 : o.next, a = null == a ? void 0 : a.next
                                                                }
                                                            } catch {}
                                                        })(e, ia.bind(t)), t).map(e => ({
                                                            name: e.name,
                                                            type: 4,
                                                            value: e.value,
                                                            contextType: e.contextType
                                                        }));
                                                    l.forEach(e => {
                                                        e({
                                                            propsChanges: n,
                                                            stateChanges: r,
                                                            contextChanges: i
                                                        })
                                                    })
                                                }
                                                let s = {
                                                    count: o + 1,
                                                    time: a + t || 0,
                                                    renders: [],
                                                    displayName: n,
                                                    type: z(e.type) || null,
                                                    changes: []
                                                };
                                                az.reportData.set(r, s), iI = !0
                                            }
                                        })(e), null == (r = (i = aT.options.value).onRender) || r.call(i, e, t))
                                    },
                                    onCommitFinish: () => {
                                        var e, t;
                                        l(), null == (e = (t = aT.options.value).onCommitFinish) || e.call(t)
                                    },
                                    onPostCommitFiberRoot() {
                                        l()
                                    },
                                    trackChanges: !1
                                }, i = {
                                    isPaused: tn(!aT.options.value.enabled),
                                    fiberRoots: new WeakSet
                                }, il.set(t, {
                                    key: t,
                                    config: n,
                                    instrumentation: i
                                }), is || (is = !0, (e => {
                                    let t = g(e.onActive);
                                    t._instrumentationSource = e.name ?? o;
                                    let n = t.onCommitFiberRoot;
                                    if (e.onCommitFiberRoot) {
                                        let r = (i, o, a) => {
                                            var l;
                                            t.onCommitFiberRoot === r && (null == n || n(i, o, a), null == (l = e.onCommitFiberRoot) || l.call(e, i, o, a))
                                        };
                                        t.onCommitFiberRoot = r
                                    }
                                    let r = t.onCommitFiberUnmount;
                                    if (e.onCommitFiberUnmount) {
                                        let n = (i, o) => {
                                            var a;
                                            t.onCommitFiberUnmount === n && (null == r || r(i, o), null == (a = e.onCommitFiberUnmount) || a.call(e, i, o))
                                        };
                                        t.onCommitFiberUnmount = n
                                    }
                                    let i = t.onPostCommitFiberRoot;
                                    if (e.onPostCommitFiberRoot) {
                                        let n = (r, o) => {
                                            var a;
                                            t.onPostCommitFiberRoot === n && (null == i || i(r, o), null == (a = e.onPostCommitFiberRoot) || a.call(e, r, o))
                                        };
                                        t.onPostCommitFiberRoot = n
                                    }
                                })({
                                    name: "react-scan",
                                    onActive: n.onActive,
                                    onCommitFiberRoot(e, t) {
                                        i.fiberRoots.add(t);
                                        let n = ic();
                                        for (let e of n) e.config.onCommitStart();
                                        for (let e of (((e, t) => {
                                                let n = "current" in e ? e.current : e,
                                                    r = L.get(e);
                                                r || (r = {
                                                    id: I++,
                                                    prevFiber: null
                                                }, L.set(e, r));
                                                let {
                                                    prevFiber: i
                                                } = r;
                                                if (n)
                                                    if (null !== i) {
                                                        let e = i && null != i.memoizedState && null != i.memoizedState.element && !0 !== i.memoizedState.isDehydrated,
                                                            r = null != n.memoizedState && null != n.memoizedState.element && !0 !== n.memoizedState.isDehydrated;
                                                        !e && r ? R(t, n, !1) : e && r ? D(t, n, n.alternate, null) : e && !r && P(t, n)
                                                    } else R(t, n, !0);
                                                else P(t, n);
                                                r.prevFiber = n
                                            })(t.current, (e, t) => {
                                                let n = z(e.type);
                                                if (!n) return null;
                                                let r = ic(),
                                                    i = [];
                                                for (let t = 0, n = r.length; t < n; t++) r[t].config.isValidFiber(e) && i.push(t);
                                                if (!i.length) return null;
                                                let o = [];
                                                if (r.some(e => e.config.trackChanges)) {
                                                    let t = r0(e).changes,
                                                        n = r1(e).changes,
                                                        r = r2(e).changes;
                                                    for (let r of (o.push.apply(null, t.map(e => ({
                                                            type: 1,
                                                            name: e.name,
                                                            value: e.value
                                                        }))), n)) 1 === e.tag ? o.push({
                                                        type: 3,
                                                        name: r.name.toString(),
                                                        value: r.value
                                                    }) : o.push({
                                                        type: 2,
                                                        name: r.name.toString(),
                                                        value: r.value
                                                    });
                                                    o.push.apply(null, r.map(e => ({
                                                        type: 4,
                                                        name: e.name,
                                                        value: e.value,
                                                        contextType: Number(e.contextType)
                                                    })))
                                                }
                                                let {
                                                    selfTime: a,
                                                    totalTime: l
                                                } = S(e), s = ir(), c = {
                                                    phase: tQ[t],
                                                    componentName: T(n),
                                                    count: 1,
                                                    changes: o,
                                                    time: a,
                                                    forget: C(e),
                                                    unnecessary: null,
                                                    didCommit: x(e),
                                                    fps: s
                                                }, d = o.length > 0, u = (e => {
                                                    let t = [],
                                                        n = [e];
                                                    for (; n.length;) {
                                                        let e = n.pop();
                                                        e && (v(e) && x(e) && b(e) && t.push(e), e.child && n.push(e.child), e.sibling && n.push(e.sibling))
                                                    }
                                                    return t
                                                })(e).length > 0;
                                                "update" === t && ((e, t, n, r, i) => {
                                                    let o = Date.now(),
                                                        a = ip(e);
                                                    if ((r || i) && (!a || o - (a.lastRenderTimestamp || 0) > 16)) {
                                                        var l;
                                                        let r, i, s, c = a || {
                                                            selfTime: 0,
                                                            totalTime: 0,
                                                            renderCount: 0,
                                                            lastRenderTimestamp: o
                                                        };
                                                        c.renderCount = (c.renderCount || 0) + 1, c.selfTime = t || 0, c.totalTime = n || 0, c.lastRenderTimestamp = o, l = {
                                                            ...c
                                                        }, r = z(e.type), i = iu(e), (s = id.get(r)) || (s = new Map, id.set(r, s)), s.set(i, l)
                                                    }
                                                })(e, a, l, d, u);
                                                for (let t = 0, n = i.length; t < n; t++) r[i[t]].config.onRender(e, [c])
                                            }), n)) e.config.onCommitFinish()
                                    },
                                    onPostCommitFiberRoot() {
                                        for (let e of ic()) e.config.onPostCommitFiberRoot()
                                    }
                                })), i);
                            aT.instrumentation = s
                        })(() => {
                            aP(!!t.value.showToolbar)
                        }), !az.monitor.value && t5 && setTimeout(() => {
                            g()._instrumentationIsActive || d() || p() || console.error("[React Scan] Failed to load. Must import React Scan before React runs.")
                        }, 5e3)
                    } catch (e) {
                        "verbose" === aT.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e)
                    }
                },
                aP = e => {
                    var t, n, r;
                    let i, o, a, l, s, c, d, u, p, h, m, f, g, v, w;
                    null == (t = (n = window).reactScanCleanupListeners) || t.call(n);
                    let b = (i = (e => {
                            let t;
                            null == H || H(), t = () => {
                                document.hidden && (oe = Date.now())
                            }, document.addEventListener("visibilitychange", t), H = () => {
                                document.removeEventListener("visibilitychange", t)
                            };
                            let n = new Map,
                                r = new Map,
                                i = t => {
                                    if (!t.interactionId) return;
                                    if (t.interactionId && t.target && !r.has(t.interactionId) && r.set(t.interactionId, t.target), t.target) {
                                        let e = t.target;
                                        for (; e;) {
                                            if ("react-scan-toolbar-root" === e.id || "react-scan-root" === e.id) return;
                                            e = e.parentElement
                                        }
                                    }
                                    let i = n.get(t.interactionId);
                                    if (i) t.duration > i.latency ? (i.entries = [t], i.latency = t.duration) : t.duration === i.latency && t.startTime === i.entries[0].startTime && i.entries.push(t);
                                    else {
                                        var o;
                                        let r = ["pointerup", "click"].includes(o = t.name) ? "pointer" : (o.includes("key"), ["keydown", "keyup"].includes(o)) ? "keyboard" : null;
                                        if (!r) return;
                                        let i = {
                                            id: t.interactionId,
                                            latency: t.duration,
                                            entries: [t],
                                            target: t.target,
                                            type: r,
                                            startTime: t.startTime,
                                            endTime: Date.now(),
                                            processingStart: t.processingStart,
                                            processingEnd: t.processingEnd,
                                            duration: t.duration,
                                            inputDelay: t.processingStart - t.startTime,
                                            processingDuration: t.processingEnd - t.processingStart,
                                            presentationDelay: t.duration - (t.processingEnd - t.startTime),
                                            timestamp: Date.now(),
                                            timeSinceTabInactive: "never-hidden" === oe ? "never-hidden" : Date.now() - oe,
                                            visibilityState: document.visibilityState,
                                            timeOrigin: performance.timeOrigin,
                                            referrer: document.referrer
                                        };
                                        n.set(i.id, i), ot || (ot = requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                e(n.get(i.id)), ot = null
                                            })
                                        }))
                                    }
                                },
                                o = new PerformanceObserver(e => {
                                    let t = e.getEntries();
                                    for (let e = 0, n = t.length; e < n; e++) i(t[e])
                                });
                            try {
                                o.observe({
                                    type: "event",
                                    buffered: !0,
                                    durationThreshold: 16
                                }), o.observe({
                                    type: "first-input",
                                    buffered: !0
                                })
                            } catch {}
                            return () => o.disconnect()
                        })(e => {
                            iK.publish({
                                kind: "entry-received",
                                entry: e
                            }, "recording")
                        }), o = e => {
                            Y = e.composedPath().map(e => e.id).filter(Boolean).includes("react-scan-toolbar")
                        }, document.addEventListener("mouseover", o), of = o, a = () => {
                            of && document.removeEventListener("mouseover", of)
                        }, l = () => {
                            oh = performance.now(), om = performance.timeOrigin
                        }, document.addEventListener("visibilitychange", l), s = () => {
                            document.removeEventListener("visibilitychange", l)
                        }, u = function e() {
                            let t = null;
                            ou = null, t = oa(ou = {});
                            let n = performance.timeOrigin,
                                r = performance.now();
                            return c = requestAnimationFrame(() => {
                                d = setTimeout(() => {
                                    let i = performance.now(),
                                        o = i - r,
                                        a = performance.timeOrigin;
                                    og.push(i + a);
                                    let l = og.filter(e => i + a - e <= 1e3),
                                        s = l.length;
                                    og = l;
                                    let c = null !== oh && null !== om ? i + a - (om + oh) < 100 : null,
                                        d = null !== Y && Y;
                                    !(o > 150) || c || "visible" !== document.visibilityState || d || op.getState().actions.addEvent({
                                        kind: "long-render",
                                        id: iV(),
                                        data: {
                                            endAt: a + i,
                                            startAt: r + n,
                                            meta: {
                                                fiberRenders: ou,
                                                latency: o,
                                                fps: s
                                            }
                                        }
                                    }), oh = null, om = null, null == t || t(), e()
                                }, 0)
                            }), t
                        }(), p = () => {
                            u(), cancelAnimationFrame(c), clearTimeout(d)
                        }, m = or("pointer", {
                            onComplete: h = async (e, t, n) => {
                                op.getState().actions.addEvent({
                                    kind: "interaction",
                                    id: iV(),
                                    data: {
                                        startAt: t.detailedTiming.blockingTimeStart,
                                        endAt: performance.now() + performance.timeOrigin,
                                        meta: {
                                            ...t,
                                            kind: n.kind
                                        }
                                    }
                                });
                                let r = iK.getChannelState("recording");
                                t.detailedTiming.stopListeningForRenders(), r.length && iK.updateChannelState("recording", () => new iJ(50))
                            }
                        }), f = or("keyboard", {
                            onComplete: h
                        }), r = e => {
                            iG.setState(iJ.fromArray(iG.getCurrentState().concat(e), 150))
                        }, g = iK.subscribe("recording", e => {
                            let t = "auto-complete-race" === e.kind ? on.find(t => t.interactionUUID === e.interactionUUID) : ((e, t) => {
                                let n = null;
                                for (let r of t) {
                                    if (r.type !== e.type) continue;
                                    if (null === n) {
                                        n = r;
                                        continue
                                    }
                                    let t = (e, t) => Math.abs(e.startDateTime) - (t.startTime + t.timeOrigin);
                                    t(r, e) < t(n, e) && (n = r)
                                }
                                return n
                            })(e.entry, on);
                            t && r(t.completeInteraction(e))
                        }), () => {
                            a(), s(), p(), i(), m(), g(), f()
                        }),
                        x = aj();
                    window.reactScanCleanupListeners = () => {
                        b(), null == x || x()
                    };
                    let y = window.__REACT_SCAN_TOOLBAR_CONTAINER__;
                    if (!e) {
                        null == y || y.remove();
                        return
                    }
                    null == y || y.remove();
                    let {
                        shadowRoot: k
                    } = (() => {
                        if (aS && aC) return {
                            rootContainer: aS,
                            shadowRoot: aC
                        };
                        (aS = document.createElement("div")).id = "react-scan-root", aC = aS.attachShadow({
                            mode: "open"
                        });
                        let e = document.createElement("style");
                        return e.textContent = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.\\!container {\n  width: 100% !important;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .\\!container {\n    max-width: 640px !important;\n  }\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .\\!container {\n    max-width: 768px !important;\n  }\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .\\!container {\n    max-width: 1024px !important;\n  }\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .\\!container {\n    max-width: 1280px !important;\n  }\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\!container {\n    max-width: 1536px !important;\n  }\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.visible {\n  visibility: visible;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  inset: 0px;\n}\n.inset-x-1 {\n  left: 4px;\n  right: 4px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.-right-1 {\n  right: -4px;\n}\n.-right-2\\.5 {\n  right: -10px;\n}\n.-top-1 {\n  top: -4px;\n}\n.-top-2\\.5 {\n  top: -10px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-4 {\n  bottom: 16px;\n}\n.left-0 {\n  left: 0px;\n}\n.left-3 {\n  left: 12px;\n}\n.right-0 {\n  right: 0px;\n}\n.right-0\\.5 {\n  right: 2px;\n}\n.right-2 {\n  right: 8px;\n}\n.right-4 {\n  right: 16px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-0\\.5 {\n  top: 2px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-2 {\n  top: 8px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-100 {\n  z-index: 100;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[124124124124\\] {\n  z-index: 124124124124;\n}\n.z-\\[214748365\\] {\n  z-index: 214748365;\n}\n.z-\\[214748367\\] {\n  z-index: 214748367;\n}\n.m-\\[2px\\] {\n  margin: 2px;\n}\n.mx-0\\.5 {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.\\!ml-0 {\n  margin-left: 0px !important;\n}\n.mb-1\\.5 {\n  margin-bottom: 6px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-px {\n  margin-bottom: 1px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-1\\.5 {\n  margin-left: 6px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-0\\.5 {\n  margin-right: 2px;\n}\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-1\\.5 {\n  margin-right: 6px;\n}\n.mr-16 {\n  margin-right: 64px;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.mt-0\\.5 {\n  margin-top: 2px;\n}\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.hidden {\n  display: none;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-1 {\n  height: 4px;\n}\n.h-1\\.5 {\n  height: 6px;\n}\n.h-10 {\n  height: 40px;\n}\n.h-12 {\n  height: 48px;\n}\n.h-4 {\n  height: 16px;\n}\n.h-4\\/5 {\n  height: 80%;\n}\n.h-6 {\n  height: 24px;\n}\n.h-7 {\n  height: 28px;\n}\n.h-8 {\n  height: 32px;\n}\n.h-\\[150px\\] {\n  height: 150px;\n}\n.h-\\[235px\\] {\n  height: 235px;\n}\n.h-\\[28px\\] {\n  height: 28px;\n}\n.h-\\[48px\\] {\n  height: 48px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[calc\\(100\\%-150px\\)\\] {\n  height: calc(100% - 150px);\n}\n.h-\\[calc\\(100\\%-200px\\)\\] {\n  height: calc(100% - 200px);\n}\n.h-\\[calc\\(100\\%-25px\\)\\] {\n  height: calc(100% - 25px);\n}\n.h-\\[calc\\(100\\%-40px\\)\\] {\n  height: calc(100% - 40px);\n}\n.h-\\[calc\\(100\\%-48px\\)\\] {\n  height: calc(100% - 48px);\n}\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-40 {\n  max-height: 160px;\n}\n.max-h-9 {\n  max-height: 36px;\n}\n.min-h-9 {\n  min-height: 36px;\n}\n.min-h-\\[48px\\] {\n  min-height: 48px;\n}\n.min-h-fit {\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n.w-1 {\n  width: 4px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-2\\/4 {\n  width: 50%;\n}\n.w-3 {\n  width: 12px;\n}\n.w-4 {\n  width: 16px;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-6 {\n  width: 24px;\n}\n.w-80 {\n  width: 320px;\n}\n.w-\\[20px\\] {\n  width: 20px;\n}\n.w-\\[72px\\] {\n  width: 72px;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[calc\\(100\\%-200px\\)\\] {\n  width: calc(100% - 200px);\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.w-px {\n  width: 1px;\n}\n.w-screen {\n  width: 100vw;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-\\[200px\\] {\n  min-width: 200px;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-md {\n  max-width: 448px;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-\\[200\\%\\] {\n  --tw-translate-y: -200%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1 {\n  --tw-translate-y: 4px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-90 {\n  --tw-rotate: -90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes fadeIn {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fadeIn ease-in forwards;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-e-resize {\n  cursor: e-resize;\n}\n.cursor-ew-resize {\n  cursor: ew-resize;\n}\n.cursor-move {\n  cursor: move;\n}\n.cursor-nesw-resize {\n  cursor: nesw-resize;\n}\n.cursor-ns-resize {\n  cursor: ns-resize;\n}\n.cursor-nwse-resize {\n  cursor: nwse-resize;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-w-resize {\n  cursor: w-resize;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.resize {\n  resize: both;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0\\.5 {\n  gap: 2px;\n}\n.gap-1 {\n  gap: 4px;\n}\n.gap-1\\.5 {\n  gap: 6px;\n}\n.gap-2 {\n  gap: 8px;\n}\n.gap-4 {\n  gap: 16px;\n}\n.gap-x-0\\.5 {\n  -moz-column-gap: 2px;\n       column-gap: 2px;\n}\n.gap-x-1 {\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n}\n.gap-x-1\\.5 {\n  -moz-column-gap: 6px;\n       column-gap: 6px;\n}\n.gap-x-2 {\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n}\n.gap-x-3 {\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n.gap-x-4 {\n  -moz-column-gap: 16px;\n       column-gap: 16px;\n}\n.gap-y-0\\.5 {\n  row-gap: 2px;\n}\n.gap-y-1 {\n  row-gap: 4px;\n}\n.gap-y-2 {\n  row-gap: 8px;\n}\n.gap-y-4 {\n  row-gap: 16px;\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6px * var(--tw-space-y-reverse));\n}\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));\n}\n.place-self-center {\n  place-self: center;\n}\n.self-end {\n  align-self: flex-end;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.\\!overflow-visible {\n  overflow: visible !important;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.text-wrap {\n  text-wrap: wrap;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 4px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 8px;\n}\n.rounded-md {\n  border-radius: 6px;\n}\n.rounded-sm {\n  border-radius: 2px;\n}\n.rounded-l-md {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.rounded-l-sm {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.rounded-r-md {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.rounded-r-sm {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.rounded-t-lg {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.rounded-t-sm {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.rounded-bl-lg {\n  border-bottom-left-radius: 8px;\n}\n.rounded-br-lg {\n  border-bottom-right-radius: 8px;\n}\n.rounded-tl-lg {\n  border-top-left-radius: 8px;\n}\n.rounded-tr-lg {\n  border-top-right-radius: 8px;\n}\n.border {\n  border-width: 1px;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-l-0 {\n  border-left-width: 0px;\n}\n.border-l-1 {\n  border-left-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-none {\n  border-style: none;\n}\n.\\!border-red-500 {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;\n}\n.border-\\[\\#1e1e1e\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));\n}\n.border-\\[\\#222\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));\n}\n.border-\\[\\#27272A\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));\n}\n.border-\\[\\#333\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-zinc-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));\n}\n.bg-\\[\\#0A0A0A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#141414\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#18181B\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#18181B\\]\\/50 {\n  background-color: rgb(24 24 27 / 0.5);\n}\n.bg-\\[\\#1D3A66\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#1E1E1E\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#1a2a1a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#1e1e1e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#214379d4\\] {\n  background-color: #214379d4;\n}\n.bg-\\[\\#27272A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#2a1515\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#412162\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#44444a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#4b4b4b\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#5f3f9a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#5f3f9a\\]\\/40 {\n  background-color: rgb(95 63 154 / 0.4);\n}\n.bg-\\[\\#6a369e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#7521c8\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#8e61e3\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#EFD81A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#b77116\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#b94040\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#d36cff\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#efd81a6b\\] {\n  background-color: #efd81a6b;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.bg-black\\/40 {\n  background-color: rgb(0 0 0 / 0.4);\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-green-500\\/50 {\n  background-color: rgb(34 197 94 / 0.5);\n}\n.bg-green-500\\/60 {\n  background-color: rgb(34 197 94 / 0.6);\n}\n.bg-neutral-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-500\\/90 {\n  background-color: rgb(168 85 247 / 0.9);\n}\n.bg-purple-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.bg-red-500\\/90 {\n  background-color: rgb(239 68 68 / 0.9);\n}\n.bg-red-950\\/50 {\n  background-color: rgb(69 10 10 / 0.5);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));\n}\n.bg-zinc-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));\n}\n.bg-zinc-900\\/30 {\n  background-color: rgb(24 24 27 / 0.3);\n}\n.bg-zinc-900\\/50 {\n  background-color: rgb(24 24 27 / 0.5);\n}\n.p-0 {\n  padding: 0px;\n}\n.p-1 {\n  padding: 4px;\n}\n.p-2 {\n  padding: 8px;\n}\n.p-3 {\n  padding: 12px;\n}\n.p-4 {\n  padding: 16px;\n}\n.p-5 {\n  padding: 20px;\n}\n.p-6 {\n  padding: 24px;\n}\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.px-1\\.5 {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.px-2\\.5 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.py-0\\.5 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.py-1\\.5 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-\\[3px\\] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.pb-2 {\n  padding-bottom: 8px;\n}\n.pl-1 {\n  padding-left: 4px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pl-2\\.5 {\n  padding-left: 10px;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pl-5 {\n  padding-left: 20px;\n}\n.pl-6 {\n  padding-left: 24px;\n}\n.pr-1 {\n  padding-right: 4px;\n}\n.pr-1\\.5 {\n  padding-right: 6px;\n}\n.pr-2 {\n  padding-right: 8px;\n}\n.pr-2\\.5 {\n  padding-right: 10px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n.pt-5 {\n  padding-top: 20px;\n}\n.text-left {\n  text-align: left;\n}\n.font-mono {\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n}\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n.text-\\[13px\\] {\n  font-size: 13px;\n}\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n.text-\\[17px\\] {\n  font-size: 17px;\n}\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n.text-sm {\n  font-size: 14px;\n  line-height: 20px;\n}\n.text-xs {\n  font-size: 12px;\n  line-height: 16px;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.leading-6 {\n  line-height: 24px;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-\\[\\#4ade80\\] {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#5a5a5a\\] {\n  --tw-text-opacity: 1;\n  color: rgb(90 90 90 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#65656D\\] {\n  --tw-text-opacity: 1;\n  color: rgb(101 101 109 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#666\\] {\n  --tw-text-opacity: 1;\n  color: rgb(102 102 102 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#6E6E77\\] {\n  --tw-text-opacity: 1;\n  color: rgb(110 110 119 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#6F6F78\\] {\n  --tw-text-opacity: 1;\n  color: rgb(111 111 120 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#7346a0\\] {\n  --tw-text-opacity: 1;\n  color: rgb(115 70 160 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#737373\\] {\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#888\\] {\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#8E61E3\\] {\n  --tw-text-opacity: 1;\n  color: rgb(142 97 227 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#999\\] {\n  --tw-text-opacity: 1;\n  color: rgb(153 153 153 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#A1A1AA\\] {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#A855F7\\] {\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#E4E4E7\\] {\n  --tw-text-opacity: 1;\n  color: rgb(228 228 231 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#d36cff\\] {\n  --tw-text-opacity: 1;\n  color: rgb(211 108 255 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#f87171\\] {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity, 1));\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.text-neutral-300 {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 212 / var(--tw-text-opacity, 1));\n}\n.text-neutral-400 {\n  --tw-text-opacity: 1;\n  color: rgb(163 163 163 / var(--tw-text-opacity, 1));\n}\n.text-neutral-500 {\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity, 1));\n}\n.text-red-300 {\n  --tw-text-opacity: 1;\n  color: rgb(252 165 165 / var(--tw-text-opacity, 1));\n}\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text-white\\/30 {\n  color: rgb(255 255 255 / 0.3);\n}\n.text-white\\/70 {\n  color: rgb(255 255 255 / 0.7);\n}\n.text-yellow-300 {\n  --tw-text-opacity: 1;\n  color: rgb(253 224 71 / var(--tw-text-opacity, 1));\n}\n.text-yellow-500 {\n  --tw-text-opacity: 1;\n  color: rgb(234 179 8 / var(--tw-text-opacity, 1));\n}\n.text-zinc-200 {\n  --tw-text-opacity: 1;\n  color: rgb(228 228 231 / var(--tw-text-opacity, 1));\n}\n.text-zinc-400 {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity, 1));\n}\n.text-zinc-500 {\n  --tw-text-opacity: 1;\n  color: rgb(113 113 122 / var(--tw-text-opacity, 1));\n}\n.text-zinc-600 {\n  --tw-text-opacity: 1;\n  color: rgb(82 82 91 / var(--tw-text-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-white\\/\\[0\\.08\\] {\n  --tw-ring-color: rgb(255 255 255 / 0.08);\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.\\!filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[border-radius\\] {\n  transition-property: border-radius;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[color\\2c transform\\] {\n  transition-property: color,transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[max-height\\] {\n  transition-property: max-height;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[opacity\\] {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-none {\n  transition-property: none;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.delay-0 {\n  transition-delay: 0s;\n}\n.delay-150 {\n  transition-delay: 150ms;\n}\n.delay-300 {\n  transition-delay: 300ms;\n}\n.\\!duration-0 {\n  transition-duration: 0s !important;\n}\n.duration-0 {\n  transition-duration: 0s;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {\n  transition-timing-function: cubic-bezier(0.23,1,0.32,1);\n}\n.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {\n  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.will-change-transform {\n  will-change: transform;\n}\n.animation-duration-300 {\n  animation-duration: .3s;\n}\n.animation-delay-300 {\n  animation-delay: .3s;\n}\n.\\[touch-action\\:none\\] {\n  touch-action: none;\n}\n\n* {\n  outline: none !important;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n\n  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.3);\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.4);\n  }\n\n  &::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n}\n\n@-moz-document url-prefix() {\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;\n    scrollbar-width: 6px;\n  }\n}\n\nbutton:hover {\n  background-image: none;\n}\n\nbutton {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  border-style: none;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-timing-function: linear;\n  cursor: pointer;\n}\n\ninput {\n  border-style: none;\n  background-color: transparent;\n  background-image: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\ninput::-moz-placeholder {\n  font-size: 12px;\n  line-height: 16px;\n  font-style: italic;\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n\ninput::placeholder {\n  font-size: 12px;\n  line-height: 16px;\n  font-style: italic;\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n\ninput:-moz-placeholder-shown {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ninput:placeholder-shown {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nsvg {\n  height: auto;\n  width: auto;\n  pointer-events: none;\n}\n\n/*\n  Using CSS content with data attributes is more performant than:\n  1. React re-renders with JSX text content\n  2. Direct DOM manipulation methods:\n     - element.textContent (creates/updates text nodes, triggers repaint)\n     - element.innerText (triggers reflow by computing styles & layout)\n     - element.innerHTML (heavy parsing, triggers reflow, security risks)\n  3. Multiple data attributes with complex CSS concatenation\n\n  This approach:\n  - Avoids React reconciliation\n  - Uses browser's native CSS engine (optimized content updates)\n  - Minimizes main thread work\n  - Reduces DOM operations\n  - Avoids forced reflows (layout recalculation)\n  - Only triggers necessary repaints\n  - Keeps pseudo-element updates in render layer\n*/\n.with-data-text {\n  overflow: hidden;\n  &::before {\n    content: attr(data-text);\n  }\n  &::before {\n    display: block;\n  }\n  &::before {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n#react-scan-toolbar {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  font-size: 13px;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: move;\n  opacity: 0;\n  z-index: 2147483678;\n}\n\n@keyframes fadeIn {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n#react-scan-toolbar {\n  animation: fadeIn ease-in forwards;\n  animation-duration: .3s;\n  animation-delay: .3s;\n  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);\n  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  place-self: start;\n\n  /* [CURSOR GENERATED] Anti-blur fixes:\n   * We removed will-change-transform and replaced it with these properties\n   * because will-change was causing stacking context issues and inconsistent\n   * text rendering. The new properties work together to force proper\n   * GPU acceleration without z-index side effects:\n   */\n  transform: translate3d(\n    0,\n    0,\n    0\n  ); /* Forces GPU acceleration without causing stacking issues */\n  backface-visibility: hidden; /* Prevents blurry text during transforms */\n  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */\n  transform-style: preserve-3d;\n}\n\n.button {\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n\n  &:active {\n    background: rgba(255, 255, 255, 0.15);\n  }\n}\n\n.resize-line-wrapper {\n  position: absolute;\n  overflow: hidden;\n}\n\n.resize-line {\n  position: absolute;\n  inset: 0px;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n\n  svg {\n    position: absolute;\n  }\n\n  svg {\n    top: 50%;\n  }\n\n  svg {\n    left: 50%;\n  }\n\n  svg {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-right,\n.resize-left {\n  top: 0px;\n  bottom: 0px;\n  width: 24px;\n  cursor: ew-resize;\n\n  .resize-line-wrapper {\n    top: 0px;\n    bottom: 0px;\n  }\n\n  .resize-line-wrapper {\n    width: 50%;\n  }\n\n  &:hover {\n    .resize-line {\n      --tw-translate-x: 0px;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n}\n.resize-right {\n  right: 0px;\n  --tw-translate-x: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    right: 0px;\n  }\n  .resize-line {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-x: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-left {\n  left: 0px;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    left: 0px;\n  }\n  .resize-line {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-x: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-top,\n.resize-bottom {\n  left: 0px;\n  right: 0px;\n  height: 24px;\n  cursor: ns-resize;\n\n  .resize-line-wrapper {\n    left: 0px;\n    right: 0px;\n  }\n\n  .resize-line-wrapper {\n    height: 50%;\n  }\n\n  &:hover {\n    .resize-line {\n      --tw-translate-y: 0px;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n}\n.resize-top {\n  top: 0px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    top: 0px;\n  }\n  .resize-line {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-y: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-bottom {\n  bottom: 0px;\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    bottom: 0px;\n  }\n  .resize-line {\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-y: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-scan-header {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 12px;\n  padding-right: 8px;\n  min-height: 36px;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.react-scan-replay-button,\n.react-scan-close-button {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-radius: 4px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\n.react-scan-replay-button {\n  position: relative;\n  overflow: hidden;\n  background-color: rgb(168 85 247 / 0.5) !important;\n\n  &:hover {\n    background-color: rgb(168 85 247 / 0.25);\n  }\n\n  &.disabled {\n    opacity: 0.5;\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:before {\n    content: \"\";\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    inset: 0px;\n  }\n\n  &:before {\n    --tw-translate-x: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &:before {\n    animation: shimmer 2s infinite;\n    background: linear-gradient(\n      to right,\n      transparent,\n      rgba(142, 97, 227, 0.3),\n      transparent\n    );\n  }\n}\n\n.react-scan-close-button {\n  background-color: rgb(255 255 255 / 0.1);\n\n  &:hover {\n    background-color: rgb(255 255 255 / 0.15);\n  }\n}\n\n@keyframes shimmer {\n  100% {\n    --tw-translate-x: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-section-header {\n  position: sticky;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  height: 28px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));\n}\n\n.react-scan-section {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  padding-right: 8px;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n}\n\n.react-scan-section::before {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n  --tw-content: attr(data-section);\n  content: var(--tw-content);\n}\n\n.react-scan-section {\n  font-size: 12px;\n  line-height: 16px;\n\n  > .react-scan-property {\n    margin-left: -14px;\n  }\n}\n\n.react-scan-property {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-left: 32px;\n  border-left-width: 1px;\n  border-color: transparent;\n  overflow: hidden;\n}\n\n.react-scan-property-content {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  min-height: 28px;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.react-scan-string {\n  color: #9ecbff;\n}\n\n.react-scan-number {\n  color: #79c7ff;\n}\n\n.react-scan-boolean {\n  color: #56b6c2;\n}\n\n.react-scan-key {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.react-scan-input {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n\n@keyframes blink {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.react-scan-arrow {\n  position: absolute;\n  top: 0px;\n  left: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 28px;\n  width: 24px;\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  z-index: 10;\n\n  > svg {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n}\n\n.react-scan-expandable {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 75ms;\n\n  &.react-scan-expanded {\n    grid-template-rows: 1fr;\n  }\n\n  &.react-scan-expanded {\n    transition-duration: 100ms;\n  }\n}\n\n.react-scan-nested {\n  position: relative;\n  overflow: hidden;\n\n  &:before {\n    content: \"\";\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    top: 0px;\n  }\n\n  &:before {\n    left: 0px;\n  }\n\n  &:before {\n    height: 100%;\n  }\n\n  &:before {\n    width: 1px;\n  }\n\n  &:before {\n    background-color: rgb(107 114 128 / 0.3);\n  }\n}\n\n.react-scan-settings {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n\n  > div {\n    display: flex;\n  }\n\n  > div {\n    align-items: center;\n  }\n\n  > div {\n    justify-content: space-between;\n  }\n\n  > div {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > div {\n    transition-duration: 300ms;\n  }\n}\n\n.react-scan-preview-line {\n  position: relative;\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n}\n\n.react-scan-flash-overlay {\n  position: absolute;\n  inset: 0px;\n  opacity: 0;\n  z-index: 50;\n  pointer-events: none;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  mix-blend-mode: multiply;\n  background-color: rgb(168 85 247 / 0.9);\n}\n\n.react-scan-toggle {\n  position: relative;\n  display: inline-flex;\n  height: 24px;\n  width: 40px;\n\n  input {\n    position: absolute;\n  }\n\n  input {\n    inset: 0px;\n  }\n\n  input {\n    z-index: 20;\n  }\n\n  input {\n    opacity: 0;\n  }\n\n  input {\n    cursor: pointer;\n  }\n\n  input {\n    height: 100%;\n  }\n\n  input {\n    width: 100%;\n  }\n\n  input:checked {\n    + div {\n      --tw-bg-opacity: 1;\n      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));\n    }\n    + div {\n\n      &::before {\n        --tw-translate-x: 100%;\n        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n      }\n\n      &::before {\n        left: auto;\n      }\n\n      &::before {\n        --tw-border-opacity: 1;\n        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));\n      }\n    }\n  }\n\n  > div {\n    position: absolute;\n  }\n\n  > div {\n    inset: 4px;\n  }\n\n  > div {\n    --tw-bg-opacity: 1;\n    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));\n  }\n\n  > div {\n    border-radius: 9999px;\n  }\n\n  > div {\n    pointer-events: none;\n  }\n\n  > div {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > div {\n    transition-duration: 300ms;\n  }\n\n  > div {\n\n    &:before {\n      --tw-content: '';\n      content: var(--tw-content);\n    }\n\n    &:before {\n      position: absolute;\n    }\n\n    &:before {\n      top: 50%;\n    }\n\n    &:before {\n      left: 0px;\n    }\n\n    &:before {\n      --tw-translate-y: -50%;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n\n    &:before {\n      height: 16px;\n    }\n\n    &:before {\n      width: 16px;\n    }\n\n    &:before {\n      --tw-bg-opacity: 1;\n      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n    }\n\n    &:before {\n      border-width: 2px;\n    }\n\n    &:before {\n      --tw-border-opacity: 1;\n      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));\n    }\n\n    &:before {\n      border-radius: 9999px;\n    }\n\n    &:before {\n      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    }\n\n    &:before {\n      transition-property: all;\n      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n      transition-duration: 150ms;\n    }\n\n    &:before {\n      transition-duration: 300ms;\n    }\n  }\n}\n\n.react-scan-flash-active {\n  opacity: 0.4;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\n.react-scan-inspector-overlay {\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n\n  &.fade-out {\n    opacity: 0;\n  }\n\n  &.fade-in {\n    opacity: 1;\n  }\n}\n\n.react-scan-what-changed {\n  ul {\n    list-style-type: disc;\n  }\n  ul {\n    padding-left: 16px;\n  }\n\n  li {\n    white-space: nowrap;\n  }\n\n  li {\n    > div {\n      display: flex;\n    }\n    > div {\n      align-items: center;\n    }\n    > div {\n      justify-content: space-between;\n    }\n    > div {\n      -moz-column-gap: 8px;\n           column-gap: 8px;\n    }\n  }\n}\n\n.count-badge {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 500;\n  --tw-numeric-spacing: tabular-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n  background-color: rgb(168 85 247 / 0.1);\n  transform-origin: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-delay: 150ms;\n  transition-duration: 300ms;\n}\n\n@keyframes countFlash {\n\n  0% {\n    background-color: rgba(168, 85, 247, 0.3);\n    transform: scale(1.05);\n  }\n\n  100% {\n    background-color: rgba(168, 85, 247, 0.1);\n    transform: scale(1);\n  }\n}\n\n.count-flash {\n  animation: countFlash .3s ease-out forwards;\n}\n\n@keyframes countFlashShake {\n\n  0% {\n    transform: translateX(0);\n  }\n\n  25% {\n    transform: translateX(-5px);\n  }\n\n  50% {\n    transform: translateX(5px) scale(1.1);\n  }\n\n  75% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.count-flash-white {\n  animation: countFlashShake .3s ease-out forwards;\n  transition-delay: 500ms !important;\n}\n\n.change-scope {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n  --tw-text-opacity: 1;\n  color: rgb(102 102 102 / var(--tw-text-opacity, 1));\n  font-size: 12px;\n  line-height: 16px;\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n\n  > div {\n    padding-left: 6px;\n    padding-right: 6px;\n  }\n\n  > div {\n    padding-top: 2px;\n    padding-bottom: 2px;\n  }\n\n  > div {\n    transform-origin: center;\n  }\n\n  > div {\n    border-radius: 4px;\n  }\n\n  > div {\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n  > div {\n    font-weight: 500;\n  }\n\n  > div {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n  }\n\n  > div {\n    transform-origin: center;\n  }\n\n  > div {\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > div {\n    transition-delay: 150ms;\n  }\n\n  > div {\n    transition-duration: 300ms;\n  }\n\n  > div {\n\n    &[data-flash=\"true\"] {\n      background-color: rgb(168 85 247 / 0.1);\n    }\n\n    &[data-flash=\"true\"] {\n      --tw-text-opacity: 1;\n      color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n    }\n  }\n}\n\n.react-scan-slider {\n  position: relative;\n  min-height: 24px;\n\n  > input {\n    position: absolute;\n  }\n\n  > input {\n    inset: 0px;\n  }\n\n  > input {\n    opacity: 0;\n  }\n\n  &:before {\n    --tw-content: '';\n    content: var(--tw-content);\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    left: 0px;\n    right: 0px;\n  }\n\n  &:before {\n    top: 50%;\n  }\n\n  &:before {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &:before {\n    height: 6px;\n  }\n\n  &:before {\n    background-color: rgb(142 97 227 / 0.4);\n  }\n\n  &:before {\n    border-radius: 8px;\n  }\n\n  &:before {\n    pointer-events: none;\n  }\n\n  &:after {\n    --tw-content: '';\n    content: var(--tw-content);\n  }\n\n  &:after {\n    position: absolute;\n  }\n\n  &:after {\n    left: 0px;\n    right: 0px;\n  }\n\n  &:after {\n    top: -8px;\n    bottom: -8px;\n  }\n\n  &:after {\n    z-index: -10;\n  }\n\n  span {\n    position: absolute;\n  }\n\n  span {\n    left: 0px;\n  }\n\n  span {\n    top: 50%;\n  }\n\n  span {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  span {\n    height: 10px;\n  }\n\n  span {\n    width: 10px;\n  }\n\n  span {\n    border-radius: 8px;\n  }\n\n  span {\n    --tw-bg-opacity: 1;\n    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));\n  }\n\n  span {\n    pointer-events: none;\n  }\n\n  span {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  span {\n    transition-duration: 75ms;\n  }\n}\n\n.resize-v-line {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 4px;\n  max-width: 4px;\n  height: 100%;\n  width: 100%;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n\n  &:hover,\n  &:active {\n    > span {\n      --tw-bg-opacity: 1;\n      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));\n    }\n\n    svg {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    --tw-content: \"\";\n    content: var(--tw-content);\n  }\n\n  &::before {\n    position: absolute;\n  }\n\n  &::before {\n    inset: 0px;\n  }\n\n  &::before {\n    left: 50%;\n  }\n\n  &::before {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &::before {\n    width: 1px;\n  }\n\n  &::before {\n    --tw-bg-opacity: 1;\n    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));\n  }\n\n  &::before {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > span {\n    position: absolute;\n  }\n\n  > span {\n    left: 50%;\n  }\n\n  > span {\n    top: 50%;\n  }\n\n  > span {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  > span {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  > span {\n    height: 18px;\n  }\n\n  > span {\n    width: 6px;\n  }\n\n  > span {\n    border-radius: 4px;\n  }\n\n  > span {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  svg {\n    position: absolute;\n  }\n\n  svg {\n    left: 50%;\n  }\n\n  svg {\n    top: 50%;\n  }\n\n  svg {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-text-opacity: 1;\n    color: rgb(163 163 163 / var(--tw-text-opacity, 1));\n  }\n\n  svg {\n    opacity: 0;\n  }\n\n  svg {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  svg {\n    z-index: 50;\n  }\n}\n\n.tree-node-search-highlight {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  span {\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  span {\n    border-radius: 2px;\n  }\n\n  span {\n    --tw-bg-opacity: 1;\n    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));\n  }\n\n  span {\n    font-weight: 500;\n  }\n\n  span {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n  }\n\n  .single {\n    margin-right: 1px;\n  }\n\n  .single {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  .regex {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  .start {\n    margin-left: 1px;\n  }\n\n  .start {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n  }\n\n  .end {\n    margin-right: 1px;\n  }\n\n  .end {\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n  }\n\n  .middle {\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .middle {\n    border-radius: 2px;\n  }\n}\n\n.react-scan-toolbar-notification {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding: 4px;\n  padding-left: 8px;\n  font-size: 10px;\n  --tw-text-opacity: 1;\n  color: rgb(212 212 212 / var(--tw-text-opacity, 1));\n  background-color: rgb(0 0 0 / 0.9);\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n\n  &:before {\n    --tw-content: '';\n    content: var(--tw-content);\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    left: 0px;\n    right: 0px;\n  }\n\n  &:before {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  }\n\n  &:before {\n    height: 8px;\n  }\n\n  &.position-top {\n    top: 100%;\n  }\n\n  &.position-top {\n    --tw-translate-y: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &.position-top {\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n\n  &.position-top {\n\n    &::before {\n      top: 0px;\n    }\n\n    &::before {\n      --tw-translate-y: -100%;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n\n  &.position-bottom {\n    bottom: 100%;\n  }\n\n  &.position-bottom {\n    --tw-translate-y: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &.position-bottom {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &.position-bottom {\n\n    &::before {\n      bottom: 0px;\n    }\n\n    &::before {\n      --tw-translate-y: 100%;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n\n  &.is-open {\n    --tw-translate-y: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-scan-header-item {\n  position: absolute;\n  inset: 0px;\n  --tw-translate-y: -200%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n\n  &.is-visible {\n    --tw-translate-y: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)\n  .tree {\n  overflow: hidden;\n}\n\n.react-scan-expandable {\n  display: grid;\n  grid-template-rows: 0fr;\n  overflow: hidden;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 75ms;\n  transition-timing-function: ease-out;\n\n  > * {\n    min-height: 0;\n  }\n\n  &.react-scan-expanded {\n    grid-template-rows: 1fr;\n    transition-duration: 100ms;\n  }\n}\n\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n\n.after\\:inset-0::after {\n  content: var(--tw-content);\n  inset: 0px;\n}\n\n.after\\:left-1\\/2::after {\n  content: var(--tw-content);\n  left: 50%;\n}\n\n.after\\:top-\\[100\\%\\]::after {\n  content: var(--tw-content);\n  top: 100%;\n}\n\n.after\\:h-\\[6px\\]::after {\n  content: var(--tw-content);\n  height: 6px;\n}\n\n.after\\:w-\\[10px\\]::after {\n  content: var(--tw-content);\n  width: 10px;\n}\n\n.after\\:-translate-x-1\\/2::after {\n  content: var(--tw-content);\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes fadeOut {\n\n  0% {\n    content: var(--tw-content);\n    opacity: 1;\n  }\n\n  100% {\n    content: var(--tw-content);\n    opacity: 0;\n  }\n}\n\n.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {\n  content: var(--tw-content);\n  animation: fadeOut 1s ease-out forwards;\n}\n\n.after\\:border-l-\\[5px\\]::after {\n  content: var(--tw-content);\n  border-left-width: 5px;\n}\n\n.after\\:border-r-\\[5px\\]::after {\n  content: var(--tw-content);\n  border-right-width: 5px;\n}\n\n.after\\:border-t-\\[6px\\]::after {\n  content: var(--tw-content);\n  border-top-width: 6px;\n}\n\n.after\\:border-l-transparent::after {\n  content: var(--tw-content);\n  border-left-color: transparent;\n}\n\n.after\\:border-r-transparent::after {\n  content: var(--tw-content);\n  border-right-color: transparent;\n}\n\n.after\\:border-t-white::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n}\n\n.after\\:bg-purple-500\\/30::after {\n  content: var(--tw-content);\n  background-color: rgb(168 85 247 / 0.3);\n}\n\n.after\\:content-\\[\\\"\\\"\\]::after {\n  --tw-content: \"\";\n  content: var(--tw-content);\n}\n\n.focus-within\\:border-\\[\\#454545\\]:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));\n}\n\n.hover\\:bg-\\[\\#0f0f0f\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-\\[\\#18181B\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-\\[\\#34343b\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {\n  background-color: rgb(95 63 154 / 0.2);\n}\n\n.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {\n  background-color: rgb(95 63 154 / 0.4);\n}\n\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-zinc-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-zinc-800\\/50:hover {\n  background-color: rgb(39 39 42 / 0.5);\n}\n\n.hover\\:text-neutral-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 212 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.group:hover .group-hover\\:bg-\\[\\#21437982\\] {\n  background-color: #21437982;\n}\n\n.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));\n}\n\n.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));\n}\n\n.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {\n  background-color: #efda1a2f;\n}\n\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n\n.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n", aC.appendChild(e), document.documentElement.appendChild(aS), {
                            rootContainer: aS,
                            shadowRoot: aC
                        }
                    })();
                    (v = document.createElement("div")).id = "react-scan-toolbar-root", window.__REACT_SCAN_TOOLBAR_CONTAINER__ = v, k.appendChild(v), ez(tq(aN, {
                        children: tq(eh, {
                            children: [tq(a_, {}), tq(ay, {})]
                        })
                    }), v), w = v.remove.bind(v), v.remove = () => {
                        window.__REACT_SCAN_TOOLBAR_CONTAINER__ = void 0, v.hasChildNodes() && (ez(null, v), ez(null, v)), w()
                    }
                },
                aj = () => {
                    try {
                        let e = document.documentElement;
                        return (e => {
                            if (!(oH = (oW = document.createElement("canvas")).getContext("2d", {
                                    alpha: !0
                                }))) return null;
                            let t = window.devicePixelRatio || 1,
                                {
                                    innerWidth: n,
                                    innerHeight: r
                                } = window;
                            oW.style.width = `${n}px`, oW.style.height = `${r}px`, oW.width = n * t, oW.height = r * t, oW.style.position = "fixed", oW.style.left = "0", oW.style.top = "0", oW.style.pointerEvents = "none", oW.style.zIndex = "2147483600", oH.scale(t, t), e.appendChild(oW), oq && window.removeEventListener("resize", oq);
                            let i = () => {
                                if (!oW || !oH) return;
                                let e = window.devicePixelRatio || 1,
                                    {
                                        innerWidth: t,
                                        innerHeight: n
                                    } = window;
                                oW.style.width = `${t}px`, oW.style.height = `${n}px`, oW.width = t * e, oW.height = n * e, oH.scale(e, e), oV()
                            };
                            return oq = i, window.addEventListener("resize", i), oX.subscribe(() => {
                                requestAnimationFrame(() => {
                                    oV()
                                })
                            }), oJ
                        })(e)
                    } catch (e) {
                        "verbose" === aT.options.value._debug && console.error("[React Scan Internal Error]", "Failed to create notifications outline canvas", e)
                    }
                },
                aI = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    aM(e), (!az.isInIframe.value || aT.options.value.allowInIframe || aT.runInAllEnvironments) && (!1 !== e.enabled || !0 === e.showToolbar) && aD()
                },
                aL = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    aM(e), aD()
                },
                aO = (e, t) => {
                    let n = aT.onRender;
                    aT.onRender = (r, i) => {
                        null == n || n(r, i), z(r.type) === e && t(r, i)
                    }
                },
                aU = new WeakSet,
                aW = e => {
                    e && "object" == typeof e && aU.add(e)
                }
        }
    }
]);
//# sourceMappingURL=6930.9ef3bf7a.js.map