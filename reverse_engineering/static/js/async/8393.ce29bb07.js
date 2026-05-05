/*! For license information please see 8393.ce29bb07.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04f7d063-0c14-4bbc-be67-46584cb851a7", e._sentryDebugIdIdentifier = "sentry-dbid-04f7d063-0c14-4bbc-be67-46584cb851a7")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8393"], {
        20394: function(e) {
            e.exports = function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        48976: function(e) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }
        },
        98158: function(e) {
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            e.exports = function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        },
        32679: function(e) {
            function t() {
                return e.exports = t = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, t.apply(this, arguments)
            }
            e.exports = t
        },
        16683: function(e) {
            function t(n) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, t(n)
            }
            e.exports = t
        },
        48400: function(e, t, n) {
            var i = n(29535);
            e.exports = function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && i(e, t)
            }
        },
        18611: function(e) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        68874: function(e) {
            e.exports = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) {
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            i.get || i.set ? Object.defineProperty(t, n, i) : t[n] = e[n]
                        }
                }
                return t.default = e, t
            }
        },
        37514: function(e, t, n) {
            var i = n(61470);
            e.exports = function(e, t) {
                if (null == e) return {};
                var n, r, o = i(e, t);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < u.length; r++) n = u[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
        },
        61470: function(e) {
            e.exports = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    o = Object.keys(e);
                for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }
        },
        8845: function(e, t, n) {
            var i = n(69801),
                r = n(20394);
            e.exports = function(e, t) {
                return t && ("object" === i(t) || "function" == typeof t) ? t : r(e)
            }
        },
        29535: function(e) {
            function t(n, i) {
                return e.exports = t = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, t(n, i)
            }
            e.exports = t
        },
        69801: function(e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(i) {
                return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function(e) {
                    return t(e)
                } : e.exports = n = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                }, n(i)
            }
            e.exports = n
        },
        77949: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bp: () => ea
            });
            var i = n(37406),
                r = n(5255),
                o = n(75448),
                u = n.n(o),
                a = n(58191),
                s = n.n(a);
            n(27676);
            let l = e => "object" == typeof e && null != e && 1 === e.nodeType,
                d = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
                c = (e, t) => {
                    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                        let n, i = getComputedStyle(e, null);
                        return d(i.overflowY, t) || d(i.overflowX, t) || !!(n = (e => {
                            if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                            try {
                                return e.ownerDocument.defaultView.frameElement
                            } catch (e) {
                                return null
                            }
                        })(e)) && (n.clientHeight < e.scrollHeight || n.clientWidth < e.scrollWidth)
                    }
                    return !1
                },
                f = (e, t, n, i, r, o, u, a) => o < e && u > t || o > e && u < t ? 0 : o <= e && a <= n || u >= t && a >= n ? o - e - i : u > t && a < n || o < e && a > n ? u - t + r : 0,
                p = e => {
                    let t = e.parentElement;
                    return null == t ? e.getRootNode().host || null : t
                };
            var h = n(99313),
                g = 0;

            function v() {}

            function m(e, t, n) {
                return e === t || t instanceof n.Node && e.contains && e.contains(t)
            }

            function y(e, t) {
                var n;

                function i() {
                    n && clearTimeout(n)
                }

                function r() {
                    for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                    i(), n = setTimeout(function() {
                        n = null, e.apply(void 0, o)
                    }, t)
                }
                return r.cancel = i, r
            }

            function b() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    return t.some(function(t) {
                        return t && t.apply(void 0, [e].concat(i)), e.preventDownshiftDefault || e.hasOwnProperty("nativeEvent") && e.nativeEvent.preventDownshiftDefault
                    })
                }
            }

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    t.forEach(function(t) {
                        "function" == typeof t ? t(e) : t && (t.current = e)
                    })
                }
            }

            function x(e, t) {
                return e && t ? Object.keys(e).reduce(function(n, i) {
                    return n[i] = void 0 !== t[i] ? t[i] : e[i], n
                }, {}) : e
            }

            function w(e) {
                var t = e.key,
                    n = e.keyCode;
                return n >= 37 && n <= 40 && 0 !== t.indexOf("Arrow") ? "Arrow" + t : t
            }

            function S(e, t, n, i, r) {
                void 0 === r && (r = !1);
                var o = n.length;
                if (0 === o) return -1;
                var u = o - 1;
                ("number" != typeof e || e < 0 || e > u) && (e = t > 0 ? -1 : u + 1);
                var a = e + t;
                a < 0 ? a = r ? u : 0 : a > u && (a = r ? 0 : u);
                var s = C(a, t < 0, n, i, r);
                return -1 === s ? e >= o ? -1 : e : s
            }

            function C(e, t, n, i, r) {
                void 0 === r && (r = !1);
                var o = n.length;
                if (t) {
                    for (var u = e; u >= 0; u--)
                        if (!i(n[u], u)) return u
                } else
                    for (var a = e; a < o; a++)
                        if (!i(n[a], a)) return a;
                return r ? C(t ? o - 1 : 0, t, n, i) : -1
            }

            function E(e, t, n, i) {
                return void 0 === i && (i = !0), n && t.some(function(t) {
                    return t && (m(t, e, n) || i && m(t, n.document.activeElement, n))
                })
            }
            var M = y(function(e) {
                T(e).textContent = ""
            }, 500);

            function T(e) {
                var t = e.getElementById("a11y-status-message");
                return t || ((t = e.createElement("div")).setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
                    border: "0",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: "0",
                    position: "absolute",
                    width: "1px"
                }), e.body.appendChild(t)), t
            }
            var O = {
                    highlightedIndex: -1,
                    isOpen: !1,
                    selectedItem: null,
                    inputValue: ""
                },
                D = y(function(e, t) {
                    e && t && (T(t).textContent = e, M(t))
                }, 200),
                k = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? a.useLayoutEffect : a.useEffect,
                L = "useId" in s() ? function(e) {
                    var t = e.id,
                        n = e.labelId,
                        i = e.menuId,
                        r = e.getItemId,
                        o = e.toggleButtonId,
                        u = e.inputId,
                        l = "downshift-" + s().useId();
                    return t || (t = l), (0, a.useRef)({
                        labelId: n || t + "-label",
                        menuId: i || t + "-menu",
                        getItemId: r || function(e) {
                            return t + "-item-" + e
                        },
                        toggleButtonId: o || t + "-toggle-button",
                        inputId: u || t + "-input"
                    }).current
                } : function(e) {
                    var t = e.id,
                        n = void 0 === t ? "downshift-" + String(g++) : t,
                        i = e.labelId,
                        r = e.menuId,
                        o = e.getItemId,
                        u = e.toggleButtonId,
                        s = e.inputId;
                    return (0, a.useRef)({
                        labelId: i || n + "-label",
                        menuId: r || n + "-menu",
                        getItemId: o || function(e) {
                            return n + "-item-" + e
                        },
                        toggleButtonId: u || n + "-toggle-button",
                        inputId: s || n + "-input"
                    }).current
                };

            function R(e, t, n, i) {
                var r, o;
                if (void 0 === e) {
                    if (void 0 === t) throw Error(i);
                    r = n[t], o = t
                } else o = void 0 === t ? n.indexOf(e) : t, r = e;
                return [r, o]
            }

            function P(e) {
                return "" + e.slice(0, 1).toUpperCase() + e.slice(1)
            }

            function A(e) {
                var t = (0, a.useRef)(e);
                return t.current = e, t
            }

            function N(e, t, n, i) {
                var o = (0, a.useRef)(),
                    u = (0, a.useRef)(),
                    s = (0, a.useCallback)(function(t, n) {
                        u.current = n;
                        var i = e(t = x(t, n.props), n);
                        return n.props.stateReducer(t, (0, r.A)({}, n, {
                            changes: i
                        }))
                    }, [e]),
                    l = (0, a.useReducer)(s, t, n),
                    d = l[0],
                    c = l[1],
                    f = A(t),
                    p = (0, a.useCallback)(function(e) {
                        return c((0, r.A)({
                            props: f.current
                        }, e))
                    }, [f]),
                    h = u.current;
                return (0, a.useEffect)(function() {
                    var e, t, n, u = x(o.current, null == h ? void 0 : h.props);
                    h && o.current && !i(u, d) && (e = h.props, t = h.type, n = {}, Object.keys(u).forEach(function(e) {
                        var t, i, o, a, s, l, c;
                        t = e, i = h, o = u, a = d, s = i.props, l = i.type, s[c = "on" + P(t) + "Change"] && void 0 !== a[t] && a[t] !== o[t] && s[c]((0, r.A)({
                            type: l
                        }, a)), d[e] !== u[e] && (n[e] = d[e])
                    }), e.onStateChange && Object.keys(n).length && e.onStateChange((0, r.A)({
                        type: t
                    }, n))), o.current = d
                }, [d, h, i]), [d, p]
            }
            var V = {
                itemToString: function(e) {
                    return e ? String(e) : ""
                },
                itemToKey: function(e) {
                    return e
                },
                stateReducer: function(e, t) {
                    return t.changes
                },
                scrollIntoView: function(e, t) {
                    e && ((e, t) => {
                        var n, i, r, o;
                        let u;
                        if ("undefined" == typeof document) return [];
                        let {
                            scrollMode: a,
                            block: s,
                            inline: d,
                            boundary: h,
                            skipOverflowHiddenElements: g
                        } = t, v = "function" == typeof h ? h : e => e !== h;
                        if (!l(e)) throw TypeError("Invalid target");
                        let m = document.scrollingElement || document.documentElement,
                            y = [],
                            b = e;
                        for (; l(b) && v(b);) {
                            if ((b = p(b)) === m) {
                                y.push(b);
                                break
                            }
                            null != b && b === document.body && c(b) && !c(document.documentElement) || null != b && c(b, g) && y.push(b)
                        }
                        let I = null != (i = null == (n = window.visualViewport) ? void 0 : n.width) ? i : innerWidth,
                            x = null != (o = null == (r = window.visualViewport) ? void 0 : r.height) ? o : innerHeight,
                            {
                                scrollX: w,
                                scrollY: S
                            } = window,
                            {
                                height: C,
                                width: E,
                                top: M,
                                right: T,
                                bottom: O,
                                left: D
                            } = e.getBoundingClientRect(),
                            {
                                top: k,
                                right: L,
                                bottom: R,
                                left: P
                            } = {
                                top: parseFloat((u = window.getComputedStyle(e)).scrollMarginTop) || 0,
                                right: parseFloat(u.scrollMarginRight) || 0,
                                bottom: parseFloat(u.scrollMarginBottom) || 0,
                                left: parseFloat(u.scrollMarginLeft) || 0
                            },
                            A = "start" === s || "nearest" === s ? M - k : "end" === s ? O + R : M + C / 2 - k + R,
                            N = "center" === d ? D + E / 2 - P + L : "end" === d ? T + L : D - P,
                            V = [];
                        for (let e = 0; e < y.length; e++) {
                            let t = y[e],
                                {
                                    height: n,
                                    width: i,
                                    top: r,
                                    right: o,
                                    bottom: u,
                                    left: l
                                } = t.getBoundingClientRect();
                            if ("if-needed" === a && M >= 0 && D >= 0 && O <= x && T <= I && M >= r && O <= u && D >= l && T <= o) break;
                            let c = getComputedStyle(t),
                                p = parseInt(c.borderLeftWidth, 10),
                                h = parseInt(c.borderTopWidth, 10),
                                g = parseInt(c.borderRightWidth, 10),
                                v = parseInt(c.borderBottomWidth, 10),
                                b = 0,
                                k = 0,
                                L = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - p - g : 0,
                                R = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - h - v : 0,
                                P = "offsetWidth" in t ? 0 === t.offsetWidth ? 0 : i / t.offsetWidth : 0,
                                H = "offsetHeight" in t ? 0 === t.offsetHeight ? 0 : n / t.offsetHeight : 0;
                            if (m === t) b = "start" === s ? A : "end" === s ? A - x : "nearest" === s ? f(S, S + x, x, h, v, S + A, S + A + C, C) : A - x / 2, k = "start" === d ? N : "center" === d ? N - I / 2 : "end" === d ? N - I : f(w, w + I, I, p, g, w + N, w + N + E, E), b = Math.max(0, b + S), k = Math.max(0, k + w);
                            else {
                                b = "start" === s ? A - r - h : "end" === s ? A - u + v + R : "nearest" === s ? f(r, u, n, h, v + R, A, A + C, C) : A - (r + n / 2) + R / 2, k = "start" === d ? N - l - p : "center" === d ? N - (l + i / 2) + L / 2 : "end" === d ? N - o + g + L : f(l, o, i, p, g + L, N, N + E, E);
                                let {
                                    scrollLeft: e,
                                    scrollTop: a
                                } = t;
                                b = 0 === H ? 0 : Math.max(0, Math.min(a + b / H, t.scrollHeight - n / H + R)), k = 0 === P ? 0 : Math.max(0, Math.min(e + k / P, t.scrollWidth - i / P + L)), A += a - b, N += e - k
                            }
                            V.push({
                                el: t,
                                top: b,
                                left: k
                            })
                        }
                        return V
                    })(e, {
                        boundary: t,
                        block: "nearest",
                        scrollMode: "if-needed"
                    }).forEach(function(e) {
                        var t = e.el,
                            n = e.top,
                            i = e.left;
                        t.scrollTop = n, t.scrollLeft = i
                    })
                },
                environment: "undefined" == typeof window ? void 0 : window
            };

            function H(e, t, n) {
                void 0 === n && (n = O);
                var i = e["default" + P(t)];
                return void 0 !== i ? i : n[t]
            }

            function _(e, t, n) {
                void 0 === n && (n = O);
                var i = e[t];
                if (void 0 !== i) return i;
                var r = e["initial" + P(t)];
                return void 0 !== r ? r : H(e, t, n)
            }

            function K(e) {
                var t = _(e, "selectedItem"),
                    n = _(e, "isOpen"),
                    i = _(e, "highlightedIndex"),
                    r = _(e, "inputValue");
                return {
                    highlightedIndex: i < 0 && t && n ? e.items.findIndex(function(n) {
                        return e.itemToKey(n) === e.itemToKey(t)
                    }) : i,
                    isOpen: n,
                    selectedItem: t,
                    inputValue: r
                }
            }

            function X(e, t, n) {
                var i = e.items,
                    r = e.initialHighlightedIndex,
                    o = e.defaultHighlightedIndex,
                    u = e.isItemDisabled,
                    a = e.itemToKey,
                    s = t.selectedItem,
                    l = t.highlightedIndex;
                return 0 === i.length ? -1 : void 0 === r || l !== r || u(i[r]) ? void 0 === o || u(i[o]) ? s ? i.findIndex(function(e) {
                    return a(s) === a(e)
                }) : n < 0 && !u(i[i.length - 1]) ? i.length - 1 : n > 0 && !u(i[0]) ? 0 : -1 : o : r
            }

            function j(e, t, n) {
                var i = (0, a.useRef)({
                    isMouseDown: !1,
                    isTouchMove: !1,
                    isTouchEnd: !1
                });
                return (0, a.useEffect)(function() {
                    if (!e) return v;
                    var r = t.map(function(e) {
                        return e.current
                    });

                    function o() {
                        i.current.isTouchEnd = !1, i.current.isMouseDown = !0
                    }

                    function u(t) {
                        i.current.isMouseDown = !1, E(t.target, r, e) || n()
                    }

                    function a() {
                        i.current.isTouchEnd = !1, i.current.isTouchMove = !1
                    }

                    function s() {
                        i.current.isTouchMove = !0
                    }

                    function l(t) {
                        i.current.isTouchEnd = !0, i.current.isTouchMove || E(t.target, r, e, !1) || n()
                    }
                    return e.addEventListener("mousedown", o), e.addEventListener("mouseup", u), e.addEventListener("touchstart", a), e.addEventListener("touchmove", s), e.addEventListener("touchend", l),
                        function() {
                            e.removeEventListener("mousedown", o), e.removeEventListener("mouseup", u), e.removeEventListener("touchstart", a), e.removeEventListener("touchmove", s), e.removeEventListener("touchend", l)
                        }
                }, [e, n]), i.current
            }
            var F = function() {
                return v
            };

            function B(e, t, n, i) {
                void 0 === i && (i = {});
                var r = i.document,
                    o = q();
                (0, a.useEffect)(function() {
                    e && !o && r && D(e(t), r)
                }, n), (0, a.useEffect)(function() {
                    return function() {
                        var e;
                        D.cancel(), (e = null == r ? void 0 : r.getElementById("a11y-status-message")) && e.remove()
                    }
                }, [r])
            }

            function W(e) {
                var t = e.highlightedIndex,
                    n = e.isOpen,
                    i = e.itemRefs,
                    r = e.getItemNodeFromIndex,
                    o = e.menuElement,
                    u = e.scrollIntoView,
                    s = (0, a.useRef)(!0);
                return k(function() {
                    !(t < 0) && n && Object.keys(i.current).length && (!1 === s.current ? s.current = !0 : u(r(t), o))
                }, [t]), s
            }

            function Y(e, t, n) {
                void 0 === n && (n = !0);
                var i, o = (null == (i = e.items) ? void 0 : i.length) && t >= 0;
                return (0, r.A)({
                    isOpen: !1,
                    highlightedIndex: -1
                }, o && (0, r.A)({
                    selectedItem: e.items[t],
                    isOpen: H(e, "isOpen"),
                    highlightedIndex: H(e, "highlightedIndex")
                }, n && {
                    inputValue: e.itemToString(e.items[t])
                }))
            }

            function U(e, t) {
                return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem
            }

            function q() {
                var e = s().useRef(!0);
                return s().useEffect(function() {
                    return e.current = !1,
                        function() {
                            e.current = !0
                        }
                }, []), e.current
            }
            var z = {
                    environment: u().shape({
                        addEventListener: u().func.isRequired,
                        removeEventListener: u().func.isRequired,
                        document: u().shape({
                            createElement: u().func.isRequired,
                            getElementById: u().func.isRequired,
                            activeElement: u().any.isRequired,
                            body: u().any.isRequired
                        }).isRequired,
                        Node: u().func.isRequired
                    }),
                    itemToString: u().func,
                    itemToKey: u().func,
                    stateReducer: u().func
                },
                G = (0, r.A)({}, z, {
                    getA11yStatusMessage: u().func,
                    highlightedIndex: u().number,
                    defaultHighlightedIndex: u().number,
                    initialHighlightedIndex: u().number,
                    isOpen: u().bool,
                    defaultIsOpen: u().bool,
                    initialIsOpen: u().bool,
                    selectedItem: u().any,
                    initialSelectedItem: u().any,
                    defaultSelectedItem: u().any,
                    id: u().string,
                    labelId: u().string,
                    menuId: u().string,
                    getItemId: u().func,
                    toggleButtonId: u().string,
                    onSelectedItemChange: u().func,
                    onHighlightedIndexChange: u().func,
                    onStateChange: u().func,
                    onIsOpenChange: u().func,
                    scrollIntoView: u().func
                });

            function J(e, t, n) {
                var i, o = t.type,
                    u = t.props;
                switch (o) {
                    case n.ItemMouseMove:
                        i = {
                            highlightedIndex: t.disabled ? -1 : t.index
                        };
                        break;
                    case n.MenuMouseLeave:
                        i = {
                            highlightedIndex: -1
                        };
                        break;
                    case n.ToggleButtonClick:
                    case n.FunctionToggleMenu:
                        i = {
                            isOpen: !e.isOpen,
                            highlightedIndex: e.isOpen ? -1 : X(u, e, 0)
                        };
                        break;
                    case n.FunctionOpenMenu:
                        i = {
                            isOpen: !0,
                            highlightedIndex: X(u, e, 0)
                        };
                        break;
                    case n.FunctionCloseMenu:
                        i = {
                            isOpen: !1
                        };
                        break;
                    case n.FunctionSetHighlightedIndex:
                        i = {
                            highlightedIndex: t.highlightedIndex
                        };
                        break;
                    case n.FunctionSetInputValue:
                        i = {
                            inputValue: t.inputValue
                        };
                        break;
                    case n.FunctionReset:
                        i = {
                            highlightedIndex: H(u, "highlightedIndex"),
                            isOpen: H(u, "isOpen"),
                            selectedItem: H(u, "selectedItem"),
                            inputValue: H(u, "inputValue")
                        };
                        break;
                    default:
                        throw Error("Reducer called without proper action type.")
                }
                return (0, r.A)({}, e, i)
            }(0, h.Cl)((0, h.Cl)({}, G), {
                items: u().array.isRequired,
                isItemDisabled: u().func
            });
            var Q = (0, h.Cl)((0, h.Cl)({}, V), {
                    isItemDisabled: function() {
                        return !1
                    }
                }),
                Z = Object.freeze({
                    __proto__: null,
                    ToggleButtonClick: 0,
                    ToggleButtonKeyDownArrowDown: 1,
                    ToggleButtonKeyDownArrowUp: 2,
                    ToggleButtonKeyDownCharacter: 3,
                    ToggleButtonKeyDownEscape: 4,
                    ToggleButtonKeyDownHome: 5,
                    ToggleButtonKeyDownEnd: 6,
                    ToggleButtonKeyDownEnter: 7,
                    ToggleButtonKeyDownSpaceButton: 8,
                    ToggleButtonKeyDownPageUp: 9,
                    ToggleButtonKeyDownPageDown: 10,
                    ToggleButtonBlur: 11,
                    MenuMouseLeave: 12,
                    ItemMouseMove: 13,
                    ItemClick: 14,
                    FunctionToggleMenu: 15,
                    FunctionOpenMenu: 16,
                    FunctionCloseMenu: 17,
                    FunctionSetHighlightedIndex: 18,
                    FunctionSelectItem: 19,
                    FunctionSetInputValue: 20,
                    FunctionReset: 21
                });
            var $ = Object.freeze({
                __proto__: null,
                InputKeyDownArrowDown: 0,
                InputKeyDownArrowUp: 1,
                InputKeyDownEscape: 2,
                InputKeyDownHome: 3,
                InputKeyDownEnd: 4,
                InputKeyDownPageUp: 5,
                InputKeyDownPageDown: 6,
                InputKeyDownEnter: 7,
                InputChange: 8,
                InputBlur: 9,
                InputClick: 10,
                MenuMouseLeave: 11,
                ItemMouseMove: 12,
                ItemClick: 13,
                ToggleButtonClick: 14,
                FunctionToggleMenu: 15,
                FunctionOpenMenu: 16,
                FunctionCloseMenu: 17,
                FunctionSetHighlightedIndex: 18,
                FunctionSelectItem: 19,
                FunctionSetInputValue: 20,
                FunctionReset: 21,
                ControlledPropUpdatedSelectedItem: 22
            });

            function ee(e) {
                var t = K(e),
                    n = t.selectedItem,
                    i = t.inputValue;
                return "" === i && n && void 0 === e.defaultInputValue && void 0 === e.initialInputValue && void 0 === e.inputValue && (i = e.itemToString(n)), (0, r.A)({}, t, {
                    inputValue: i
                })
            }(0, r.A)({}, G, {
                items: u().array.isRequired,
                isItemDisabled: u().func,
                inputValue: u().string,
                defaultInputValue: u().string,
                initialInputValue: u().string,
                inputId: u().string,
                onInputValueChange: u().func
            });
            var et = (0, r.A)({}, V, {
                isItemDisabled: function() {
                    return !1
                }
            });

            function en(e, t) {
                var n, i, o = t.type,
                    u = t.props,
                    a = t.altKey;
                switch (o) {
                    case 13:
                        i = {
                            isOpen: H(u, "isOpen"),
                            highlightedIndex: H(u, "highlightedIndex"),
                            selectedItem: u.items[t.index],
                            inputValue: u.itemToString(u.items[t.index])
                        };
                        break;
                    case 0:
                        i = e.isOpen ? {
                            highlightedIndex: S(e.highlightedIndex, 1, u.items, u.isItemDisabled, !0)
                        } : {
                            highlightedIndex: a && null == e.selectedItem ? -1 : X(u, e, 1),
                            isOpen: u.items.length >= 0
                        };
                        break;
                    case 1:
                        i = e.isOpen ? a ? Y(u, e.highlightedIndex) : {
                            highlightedIndex: S(e.highlightedIndex, -1, u.items, u.isItemDisabled, !0)
                        } : {
                            highlightedIndex: X(u, e, -1),
                            isOpen: u.items.length >= 0
                        };
                        break;
                    case 7:
                        i = Y(u, e.highlightedIndex);
                        break;
                    case 2:
                        i = (0, r.A)({
                            isOpen: !1,
                            highlightedIndex: -1
                        }, !e.isOpen && {
                            selectedItem: null,
                            inputValue: ""
                        });
                        break;
                    case 5:
                        i = {
                            highlightedIndex: S(e.highlightedIndex, -10, u.items, u.isItemDisabled, !0)
                        };
                        break;
                    case 6:
                        i = {
                            highlightedIndex: S(e.highlightedIndex, 10, u.items, u.isItemDisabled, !0)
                        };
                        break;
                    case 3:
                        i = {
                            highlightedIndex: C(0, !1, u.items, u.isItemDisabled)
                        };
                        break;
                    case 4:
                        i = {
                            highlightedIndex: C(u.items.length - 1, !0, u.items, u.isItemDisabled)
                        };
                        break;
                    case 9:
                        i = (0, r.A)({
                            isOpen: !1,
                            highlightedIndex: -1
                        }, e.highlightedIndex >= 0 && (null == (n = u.items) ? void 0 : n.length) && t.selectItem && {
                            selectedItem: u.items[e.highlightedIndex],
                            inputValue: u.itemToString(u.items[e.highlightedIndex])
                        });
                        break;
                    case 8:
                        i = {
                            isOpen: !0,
                            highlightedIndex: H(u, "highlightedIndex"),
                            inputValue: t.inputValue
                        };
                        break;
                    case 10:
                        i = {
                            isOpen: !e.isOpen,
                            highlightedIndex: e.isOpen ? -1 : X(u, e, 0)
                        };
                        break;
                    case 19:
                        i = {
                            selectedItem: t.selectedItem,
                            inputValue: u.itemToString(t.selectedItem)
                        };
                        break;
                    case 22:
                        i = {
                            inputValue: t.inputValue
                        };
                        break;
                    default:
                        return J(e, t, $)
                }
                return (0, r.A)({}, e, i)
            }
            var ei = ["onMouseLeave", "refKey", "ref"],
                er = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "disabled"],
                eo = ["onClick", "onPress", "refKey", "ref"],
                eu = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKey", "ref"];

            function ea(e) {
                void 0 === e && (e = {});
                var t, n, o, u, s, l = (0, r.A)({}, et, e),
                    d = l.items,
                    c = l.scrollIntoView,
                    f = l.environment,
                    p = l.getA11yStatusMessage,
                    h = (t = (0, a.useRef)(), o = (n = N(en, l, ee, U))[0], u = n[1], s = q(), (0, a.useEffect)(function() {
                        void 0 !== l.selectedItem && (s || l.itemToKey(l.selectedItem) !== l.itemToKey(t.current) && u({
                            type: 22,
                            inputValue: l.itemToString(l.selectedItem)
                        }), t.current = o.selectedItem === t.current ? l.selectedItem : o.selectedItem)
                    }, [o.selectedItem, l.selectedItem]), [x(o, l), u]),
                    g = h[0],
                    v = h[1],
                    m = g.isOpen,
                    y = g.highlightedIndex,
                    S = g.selectedItem,
                    C = g.inputValue,
                    E = (0, a.useRef)(null),
                    M = (0, a.useRef)({}),
                    T = (0, a.useRef)(null),
                    O = (0, a.useRef)(null),
                    D = q(),
                    k = L(l),
                    P = (0, a.useRef)(),
                    V = A({
                        state: g,
                        props: l
                    }),
                    H = (0, a.useCallback)(function(e) {
                        return M.current[k.getItemId(e)]
                    }, [k]);
                B(p, g, [m, y, S, C], f);
                var K = W({
                    menuElement: E.current,
                    highlightedIndex: y,
                    isOpen: m,
                    itemRefs: M,
                    scrollIntoView: c,
                    getItemNodeFromIndex: H
                });
                (0, a.useEffect)(function() {
                    _(l, "isOpen") && T.current && T.current.focus()
                }, []), (0, a.useEffect)(function() {
                    D || (P.current = d.length)
                });
                var X = j(f, [O, E, T], (0, a.useCallback)(function() {
                        V.current.state.isOpen && v({
                            type: 9,
                            selectItem: !1
                        })
                    }, [v, V])),
                    Y = F("getInputProps", "getMenuProps");
                (0, a.useEffect)(function() {
                    m || (M.current = {})
                }, [m]), (0, a.useEffect)(function() {
                    var e;
                    m && null != f && f.document && null != T && null != (e = T.current) && e.focus && f.document.activeElement !== T.current && T.current.focus()
                }, [m, f]);
                var z = (0, a.useMemo)(function() {
                        return {
                            ArrowDown: function(e) {
                                e.preventDefault(), v({
                                    type: 0,
                                    altKey: e.altKey
                                })
                            },
                            ArrowUp: function(e) {
                                e.preventDefault(), v({
                                    type: 1,
                                    altKey: e.altKey
                                })
                            },
                            Home: function(e) {
                                V.current.state.isOpen && (e.preventDefault(), v({
                                    type: 3
                                }))
                            },
                            End: function(e) {
                                V.current.state.isOpen && (e.preventDefault(), v({
                                    type: 4
                                }))
                            },
                            Escape: function(e) {
                                var t = V.current.state;
                                (t.isOpen || t.inputValue || t.selectedItem || t.highlightedIndex > -1) && (e.preventDefault(), v({
                                    type: 2
                                }))
                            },
                            Enter: function(e) {
                                V.current.state.isOpen && 229 !== e.which && (e.preventDefault(), v({
                                    type: 7
                                }))
                            },
                            PageUp: function(e) {
                                V.current.state.isOpen && (e.preventDefault(), v({
                                    type: 5
                                }))
                            },
                            PageDown: function(e) {
                                V.current.state.isOpen && (e.preventDefault(), v({
                                    type: 6
                                }))
                            }
                        }
                    }, [v, V]),
                    G = (0, a.useCallback)(function(e) {
                        return (0, r.A)({
                            id: k.labelId,
                            htmlFor: k.inputId
                        }, e)
                    }, [k]),
                    J = (0, a.useCallback)(function(e, t) {
                        var n, o = void 0 === e ? {} : e,
                            u = o.onMouseLeave,
                            a = o.refKey,
                            s = void 0 === a ? "ref" : a,
                            l = o.ref,
                            d = (0, i.A)(o, ei),
                            c = (void 0 === t ? {} : t).suppressRefError;
                        return Y("getMenuProps", void 0 !== c && c, s, E), (0, r.A)(((n = {})[s] = I(l, function(e) {
                            E.current = e
                        }), n.id = k.menuId, n.role = "listbox", n["aria-labelledby"] = d && d["aria-label"] ? void 0 : "" + k.labelId, n.onMouseLeave = b(u, function() {
                            v({
                                type: 11
                            })
                        }), n), d)
                    }, [v, Y, k]),
                    Q = (0, a.useCallback)(function(e) {
                        var t, n, o = void 0 === e ? {} : e,
                            u = o.item,
                            a = o.index,
                            s = o.refKey,
                            l = o.ref,
                            d = o.onMouseMove,
                            c = o.onMouseDown,
                            f = o.onClick;
                        o.onPress;
                        var p = o.disabled,
                            h = (0, i.A)(o, er);
                        void 0 !== p && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');
                        var g = V.current,
                            m = g.props,
                            y = g.state,
                            x = R(u, a, m.items, "Pass either item or index to getItemProps!"),
                            w = x[0],
                            S = x[1],
                            C = m.isItemDisabled(w, S);
                        return (0, r.A)(((t = {})[void 0 === s ? "ref" : s] = I(l, function(e) {
                            e && (M.current[k.getItemId(S)] = e)
                        }), t["aria-disabled"] = C, t["aria-selected"] = "" + (S === y.highlightedIndex), t.id = k.getItemId(S), t.role = "option", t), !C && ((n = {}).onClick = b(f, function() {
                            v({
                                type: 13,
                                index: S
                            })
                        }), n), {
                            onMouseMove: b(d, function() {
                                X.isTouchEnd || S === y.highlightedIndex || (K.current = !1, v({
                                    type: 12,
                                    index: S,
                                    disabled: C
                                }))
                            }),
                            onMouseDown: b(c, function(e) {
                                return e.preventDefault()
                            })
                        }, h)
                    }, [v, k, V, X, K]),
                    Z = (0, a.useCallback)(function(e) {
                        var t, n = void 0 === e ? {} : e,
                            o = n.onClick;
                        n.onPress;
                        var u = n.refKey,
                            a = n.ref,
                            s = (0, i.A)(n, eo),
                            l = V.current.state;
                        return (0, r.A)(((t = {})[void 0 === u ? "ref" : u] = I(a, function(e) {
                            O.current = e
                        }), t["aria-controls"] = k.menuId, t["aria-expanded"] = l.isOpen, t.id = k.toggleButtonId, t.tabIndex = -1, t), !s.disabled && (0, r.A)({}, {
                            onClick: b(o, function() {
                                v({
                                    type: 14
                                })
                            })
                        }), s)
                    }, [v, V, k]),
                    $ = (0, a.useCallback)(function(e, t) {
                        var n, o, u = void 0 === e ? {} : e,
                            a = u.onKeyDown,
                            s = u.onChange,
                            l = u.onInput,
                            d = u.onBlur;
                        u.onChangeText;
                        var c = u.onClick,
                            p = u.refKey,
                            h = void 0 === p ? "ref" : p,
                            g = u.ref,
                            m = (0, i.A)(u, eu),
                            y = (void 0 === t ? {} : t).suppressRefError;
                        Y("getInputProps", void 0 !== y && y, h, T);
                        var x = V.current.state,
                            S = {};
                        return m.disabled || ((o = {}).onChange = b(s, l, function(e) {
                            v({
                                type: 8,
                                inputValue: e.target.value
                            })
                        }), o.onKeyDown = b(a, function(e) {
                            var t = w(e);
                            t && z[t] && z[t](e)
                        }), o.onBlur = b(d, function(e) {
                            null != f && f.document && x.isOpen && !X.isMouseDown && v({
                                type: 9,
                                selectItem: null !== e.relatedTarget || f.document.activeElement === f.document.body
                            })
                        }), o.onClick = b(c, function() {
                            v({
                                type: 10
                            })
                        }), S = o), (0, r.A)(((n = {})[h] = I(g, function(e) {
                            T.current = e
                        }), n["aria-activedescendant"] = x.isOpen && x.highlightedIndex > -1 ? k.getItemId(x.highlightedIndex) : "", n["aria-autocomplete"] = "list", n["aria-controls"] = k.menuId, n["aria-expanded"] = x.isOpen, n["aria-labelledby"] = m && m["aria-label"] ? void 0 : k.labelId, n.autoComplete = "off", n.id = k.inputId, n.role = "combobox", n.value = x.inputValue, n), S, m)
                    }, [v, k, f, z, V, X, Y]),
                    ea = (0, a.useCallback)(function() {
                        v({
                            type: 15
                        })
                    }, [v]),
                    es = (0, a.useCallback)(function() {
                        v({
                            type: 17
                        })
                    }, [v]),
                    el = (0, a.useCallback)(function() {
                        v({
                            type: 16
                        })
                    }, [v]),
                    ed = (0, a.useCallback)(function(e) {
                        v({
                            type: 18,
                            highlightedIndex: e
                        })
                    }, [v]),
                    ec = (0, a.useCallback)(function(e) {
                        v({
                            type: 19,
                            selectedItem: e
                        })
                    }, [v]);
                return {
                    getItemProps: Q,
                    getLabelProps: G,
                    getMenuProps: J,
                    getInputProps: $,
                    getToggleButtonProps: Z,
                    toggleMenu: ea,
                    openMenu: el,
                    closeMenu: es,
                    setHighlightedIndex: ed,
                    setInputValue: (0, a.useCallback)(function(e) {
                        v({
                            type: 20,
                            inputValue: e
                        })
                    }, [v]),
                    selectItem: ec,
                    reset: (0, a.useCallback)(function() {
                        v({
                            type: 21
                        })
                    }, [v]),
                    highlightedIndex: y,
                    isOpen: m,
                    selectedItem: S,
                    inputValue: C
                }
            }
            ea.stateChangeTypes = $;
            z.stateReducer, z.itemToKey, z.environment, u().array, u().array, u().array, u().func, u().number, u().number, u().number, u().func, u().func, u().string, u().string;
            var es = {
                    itemToKey: V.itemToKey,
                    stateReducer: V.stateReducer,
                    environment: V.environment,
                    keyNavigationNext: "ArrowRight",
                    keyNavigationPrevious: "ArrowLeft"
                },
                el = Object.freeze({
                    __proto__: null,
                    SelectedItemClick: 0,
                    SelectedItemKeyDownDelete: 1,
                    SelectedItemKeyDownBackspace: 2,
                    SelectedItemKeyDownNavigationNext: 3,
                    SelectedItemKeyDownNavigationPrevious: 4,
                    DropdownKeyDownNavigationPrevious: 5,
                    DropdownKeyDownBackspace: 6,
                    DropdownClick: 7,
                    FunctionAddSelectedItem: 8,
                    FunctionRemoveSelectedItem: 9,
                    FunctionSetSelectedItems: 10,
                    FunctionSetActiveIndex: 11,
                    FunctionReset: 12
                })
        },
        7360: function(e, t) {
            "use strict";
            Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy");
            Symbol.for("react.offscreen");
            Symbol.for("react.module.reference")
        },
        27676: function(e, t, n) {
            "use strict";
            n(7360)
        },
        82667: function(e, t, n) {
            "use strict";
            var i = n(18611);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(58191));
            i(n(20282)), t.default = function(e) {
                e.index;
                var t = e.children;
                r.default.Children.count(t)
            }
        },
        87909: function(e, t, n) {
            "use strict";
            var i = n(18611);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.children,
                    i = e.startIndex,
                    u = e.startX,
                    a = e.pageX,
                    s = e.viewLength,
                    l = e.resistance,
                    d = r.default.Children.count(n) - 1,
                    c = i + (u - a) / s;
                return l ? c < 0 ? c = Math.exp(c * o.default.RESISTANCE_COEF) - 1 : c > d && (c = d + 1 - Math.exp((d - c) * o.default.RESISTANCE_COEF)) : c < 0 ? t = ((c = 0) - i) * s + a : c > d && (t = ((c = d) - i) * s + a), {
                    index: c,
                    startX: t
                }
            };
            var r = i(n(58191)),
                o = i(n(38770))
        },
        38770: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = {
                RESISTANCE_COEF: .6,
                UNCERTAINTY_THRESHOLD: 3
            }
        },
        24137: function(e, t, n) {
            "use strict";
            var i = n(18611);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(58191));
            t.default = function(e, t) {
                var n = !1,
                    i = function(e) {
                        return e ? e.key : "empty"
                    };
                if (e.children.length && t.children.length) {
                    var o = r.default.Children.map(e.children, i)[e.index];
                    null != o && o === r.default.Children.map(t.children, i)[t.index] && (n = !0)
                }
                return n
            }
        },
        11564: function(e, t, n) {
            "use strict";
            var i = n(18611);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "checkIndexBounds", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "computeIndex", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "constant", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "getDisplaySameSlide", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "mod", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var r = i(n(82667)),
                o = i(n(87909)),
                u = i(n(38770)),
                a = i(n(24137)),
                s = i(n(5572))
        },
        5572: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function(e, t) {
                var n = e % t;
                return n < 0 ? n + t : n
            }
        },
        26498: function(e, t, n) {
            "use strict";
            var i = n(68874),
                r = n(18611);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomTreeShapes = O, t.findNativeHandler = k, t.default = t.SwipeableViewsContext = void 0;
            var o = r(n(32679)),
                u = r(n(37514)),
                a = r(n(48976)),
                s = r(n(98158)),
                l = r(n(8845)),
                d = r(n(16683)),
                c = r(n(48400)),
                f = i(n(58191));
            r(n(75448)), r(n(20282));
            var p = n(11564);

            function h(e, t, n, i) {
                return e.addEventListener(t, n, i), {
                    remove: function() {
                        e.removeEventListener(t, n, i)
                    }
                }
            }
            var g = {
                    direction: "ltr",
                    display: "flex",
                    willChange: "transform"
                },
                v = {
                    width: "100%",
                    WebkitFlexShrink: 0,
                    flexShrink: 0,
                    overflow: "auto"
                },
                m = {
                    x: {
                        overflowX: "hidden"
                    },
                    "x-reverse": {
                        overflowX: "hidden"
                    },
                    y: {
                        overflowY: "hidden"
                    },
                    "y-reverse": {
                        overflowY: "hidden"
                    }
                },
                y = {
                    x: "row",
                    "x-reverse": "row-reverse",
                    y: "column",
                    "y-reverse": "column-reverse"
                },
                b = {
                    x: function(e) {
                        return "translate(".concat(-e, "%, 0)")
                    },
                    "x-reverse": function(e) {
                        return "translate(".concat(e, "%, 0)")
                    },
                    y: function(e) {
                        return "translate(0, ".concat(-e, "%)")
                    },
                    "y-reverse": function(e) {
                        return "translate(0, ".concat(e, "%)")
                    }
                },
                I = {
                    x: "width",
                    "x-reverse": "width",
                    y: "height",
                    "y-reverse": "height"
                },
                x = {
                    x: {
                        x: [1, 0],
                        y: [0, 1]
                    },
                    "x-reverse": {
                        x: [-1, 0],
                        y: [0, 1]
                    },
                    y: {
                        x: [0, 1],
                        y: [1, 0]
                    },
                    "y-reverse": {
                        x: [0, -1],
                        y: [1, 0]
                    }
                },
                w = {
                    x: "scrollLeft",
                    "x-reverse": "scrollLeft",
                    y: "scrollTop",
                    "y-reverse": "scrollTop"
                },
                S = {
                    x: "scrollWidth",
                    "x-reverse": "scrollWidth",
                    y: "scrollHeight",
                    "y-reverse": "scrollHeight"
                },
                C = {
                    x: "clientWidth",
                    "x-reverse": "clientWidth",
                    y: "clientHeight",
                    "y-reverse": "clientHeight"
                };

            function E(e, t) {
                var n = t.duration,
                    i = t.easeFunction,
                    r = t.delay;
                return "".concat(e, " ").concat(n, " ").concat(i, " ").concat(r)
            }

            function M(e, t) {
                var n = x[t];
                return {
                    pageX: n.x[0] * e.pageX + n.x[1] * e.pageY,
                    pageY: n.y[0] * e.pageX + n.y[1] * e.pageY
                }
            }

            function T(e) {
                return e.touches = [{
                    pageX: e.pageX,
                    pageY: e.pageY
                }], e
            }

            function O(e, t) {
                for (var n = []; e && e !== t && e !== document.body && !e.hasAttribute("data-swipeable");) {
                    var i = window.getComputedStyle(e);
                    "absolute" === i.getPropertyValue("position") || "hidden" === i.getPropertyValue("overflow-x") ? n = [] : (e.clientWidth > 0 && e.scrollWidth > e.clientWidth || e.clientHeight > 0 && e.scrollHeight > e.clientHeight) && n.push({
                        element: e,
                        scrollWidth: e.scrollWidth,
                        scrollHeight: e.scrollHeight,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                    }), e = e.parentNode
                }
                return n
            }
            var D = null;

            function k(e) {
                var t = e.domTreeShapes,
                    n = e.pageX,
                    i = e.startX,
                    r = e.axis;
                return t.some(function(e) {
                    var t = n >= i;
                    ("x" === r || "y" === r) && (t = !t);
                    var o = Math.round(e[w[r]]),
                        u = o + e[C[r]] < e[S[r]];
                    return (!!t && !!u || !t && o > 0) && (D = e.element, !0)
                })
            }
            var L = f.createContext();
            t.SwipeableViewsContext = L;
            var R = function(e) {
                function t(e) {
                    var n;
                    return (0, a.default)(this, t), (n = (0, l.default)(this, (0, d.default)(t).call(this, e))).rootNode = null, n.containerNode = null, n.ignoreNextScrollEvents = !1, n.viewLength = 0, n.startX = 0, n.lastX = 0, n.vx = 0, n.startY = 0, n.isSwiping = void 0, n.started = !1, n.startIndex = 0, n.transitionListener = null, n.touchMoveListener = null, n.activeSlide = null, n.indexCurrent = null, n.firstRenderTimeout = null, n.setRootNode = function(e) {
                        n.rootNode = e
                    }, n.setContainerNode = function(e) {
                        n.containerNode = e
                    }, n.setActiveSlide = function(e) {
                        n.activeSlide = e, n.updateHeight()
                    }, n.handleSwipeStart = function(e) {
                        var t = n.props.axis,
                            i = M(e.touches[0], t);
                        n.viewLength = n.rootNode.getBoundingClientRect()[I[t]], n.startX = i.pageX, n.lastX = i.pageX, n.vx = 0, n.startY = i.pageY, n.isSwiping = void 0, n.started = !0;
                        var r = window.getComputedStyle(n.containerNode),
                            o = r.getPropertyValue("-webkit-transform") || r.getPropertyValue("transform");
                        if (o && "none" !== o) {
                            var u = o.split("(")[1].split(")")[0].split(","),
                                a = window.getComputedStyle(n.rootNode);
                            n.startIndex = -M({
                                pageX: parseInt(u[4], 10),
                                pageY: parseInt(u[5], 10)
                            }, t).pageX / (n.viewLength - parseInt(a.paddingLeft, 10) - parseInt(a.paddingRight, 10)) || 0
                        }
                    }, n.handleSwipeMove = function(e) {
                        if (!n.started) return void n.handleTouchStart(e);
                        if (null === D || D === n.rootNode) {
                            var t = n.props,
                                i = t.axis,
                                r = t.children,
                                o = t.ignoreNativeScroll,
                                u = t.onSwitching,
                                a = t.resistance,
                                s = M(e.touches[0], i);
                            if (void 0 === n.isSwiping) {
                                var l = Math.abs(s.pageX - n.startX),
                                    d = Math.abs(s.pageY - n.startY),
                                    c = l > d && l > p.constant.UNCERTAINTY_THRESHOLD;
                                if (!a && ("y" === i || "y-reverse" === i) && (0 === n.indexCurrent && n.startX < s.pageX || n.indexCurrent === f.Children.count(n.props.children) - 1 && n.startX > s.pageX)) {
                                    n.isSwiping = !1;
                                    return
                                }
                                if (l > d && e.preventDefault(), !0 === c || d > p.constant.UNCERTAINTY_THRESHOLD) {
                                    n.isSwiping = c, n.startX = s.pageX;
                                    return
                                }
                            }
                            if (!0 === n.isSwiping) {
                                e.preventDefault(), n.vx = .5 * n.vx + (s.pageX - n.lastX) * .5, n.lastX = s.pageX;
                                var h = (0, p.computeIndex)({
                                        children: r,
                                        resistance: a,
                                        pageX: s.pageX,
                                        startIndex: n.startIndex,
                                        startX: n.startX,
                                        viewLength: n.viewLength
                                    }),
                                    g = h.index,
                                    v = h.startX;
                                if (null === D && !o && k({
                                        domTreeShapes: O(e.target, n.rootNode),
                                        startX: n.startX,
                                        pageX: s.pageX,
                                        axis: i
                                    })) return;
                                v ? n.startX = v : null === D && (D = n.rootNode), n.setIndexCurrent(g);
                                var m = function() {
                                    u && u(g, "move")
                                };
                                (n.state.displaySameSlide || !n.state.isDragging) && n.setState({
                                    displaySameSlide: !1,
                                    isDragging: !0
                                }, m), m()
                            }
                        }
                    }, n.handleSwipeEnd = function() {
                        if ((D = null, n.started) && (n.started = !1, !0 === n.isSwiping)) {
                            var e, t = n.state.indexLatest,
                                i = n.indexCurrent,
                                r = t - i;
                            e = Math.abs(n.vx) > n.props.threshold ? n.vx > 0 ? Math.floor(i) : Math.ceil(i) : Math.abs(r) > n.props.hysteresis ? r > 0 ? Math.floor(i) : Math.ceil(i) : t;
                            var o = f.Children.count(n.props.children) - 1;
                            e < 0 ? e = 0 : e > o && (e = o), n.setIndexCurrent(e), n.setState({
                                indexLatest: e,
                                isDragging: !1
                            }, function() {
                                n.props.onSwitching && n.props.onSwitching(e, "end"), n.props.onChangeIndex && e !== t && n.props.onChangeIndex(e, t, {
                                    reason: "swipe"
                                }), i === t && n.handleTransitionEnd()
                            })
                        }
                    }, n.handleTouchStart = function(e) {
                        n.props.onTouchStart && n.props.onTouchStart(e), n.handleSwipeStart(e)
                    }, n.handleTouchEnd = function(e) {
                        n.props.onTouchEnd && n.props.onTouchEnd(e), n.handleSwipeEnd(e)
                    }, n.handleMouseDown = function(e) {
                        n.props.onMouseDown && n.props.onMouseDown(e), e.persist(), n.handleSwipeStart(T(e))
                    }, n.handleMouseUp = function(e) {
                        n.props.onMouseUp && n.props.onMouseUp(e), n.handleSwipeEnd(T(e))
                    }, n.handleMouseLeave = function(e) {
                        n.props.onMouseLeave && n.props.onMouseLeave(e), n.started && n.handleSwipeEnd(T(e))
                    }, n.handleMouseMove = function(e) {
                        n.props.onMouseMove && n.props.onMouseMove(e), n.started && n.handleSwipeMove(T(e))
                    }, n.handleScroll = function(e) {
                        if (n.props.onScroll && n.props.onScroll(e), e.target === n.rootNode) {
                            if (n.ignoreNextScrollEvents) {
                                n.ignoreNextScrollEvents = !1;
                                return
                            }
                            var t = n.state.indexLatest,
                                i = Math.ceil(e.target.scrollLeft / e.target.clientWidth) + t;
                            n.ignoreNextScrollEvents = !0, e.target.scrollLeft = 0, n.props.onChangeIndex && i !== t && n.props.onChangeIndex(i, t, {
                                reason: "focus"
                            })
                        }
                    }, n.updateHeight = function() {
                        if (null !== n.activeSlide) {
                            var e = n.activeSlide.children[0];
                            void 0 !== e && void 0 !== e.offsetHeight && n.state.heightLatest !== e.offsetHeight && n.setState({
                                heightLatest: e.offsetHeight
                            })
                        }
                    }, n.state = {
                        indexLatest: e.index,
                        isDragging: !1,
                        renderOnlyActive: !e.disableLazyLoading,
                        heightLatest: 0,
                        displaySameSlide: !0
                    }, n.setIndexCurrent(e.index), n
                }
                return (0, c.default)(t, e), (0, s.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.transitionListener = h(this.containerNode, "transitionend", function(t) {
                            t.target === e.containerNode && e.handleTransitionEnd()
                        }), this.touchMoveListener = h(this.rootNode, "touchmove", function(t) {
                            e.props.disabled || e.handleSwipeMove(t)
                        }, {
                            passive: !1
                        }), this.props.disableLazyLoading || (this.firstRenderTimeout = setTimeout(function() {
                            e.setState({
                                renderOnlyActive: !1
                            })
                        }, 0)), this.props.action && this.props.action({
                            updateHeight: this.updateHeight
                        })
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        var t = e.index;
                        "number" == typeof t && t !== this.props.index && (this.setIndexCurrent(t), this.setState({
                            displaySameSlide: (0, p.getDisplaySameSlide)(this.props, e),
                            indexLatest: t
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.transitionListener.remove(), this.touchMoveListener.remove(), clearTimeout(this.firstRenderTimeout)
                    }
                }, {
                    key: "getSwipeableViewsContext",
                    value: function() {
                        var e = this;
                        return {
                            slideUpdateHeight: function() {
                                e.updateHeight()
                            }
                        }
                    }
                }, {
                    key: "setIndexCurrent",
                    value: function(e) {
                        if (this.props.animateTransitions || this.indexCurrent === e || this.handleTransitionEnd(), this.indexCurrent = e, this.containerNode) {
                            var t = b[this.props.axis](100 * e);
                            this.containerNode.style.WebkitTransform = t, this.containerNode.style.transform = t
                        }
                    }
                }, {
                    key: "handleTransitionEnd",
                    value: function() {
                        this.props.onTransitionEnd && !this.state.displaySameSlide && (this.state.isDragging || this.props.onTransitionEnd())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n = this,
                            i = this.props,
                            r = (i.action, i.animateHeight),
                            a = i.animateTransitions,
                            s = i.axis,
                            l = i.children,
                            d = i.containerStyle,
                            c = i.disabled,
                            p = (i.disableLazyLoading, i.enableMouseEvents),
                            h = (i.hysteresis, i.ignoreNativeScroll, i.index, i.onChangeIndex, i.onSwitching, i.onTransitionEnd, i.resistance, i.slideStyle),
                            I = i.slideClassName,
                            x = i.springConfig,
                            w = i.style,
                            S = (i.threshold, (0, u.default)(i, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"])),
                            C = this.state,
                            M = C.displaySameSlide,
                            T = C.heightLatest,
                            O = C.indexLatest,
                            D = C.isDragging,
                            k = C.renderOnlyActive,
                            R = c ? {} : {
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            },
                            P = !c && p ? {
                                onMouseDown: this.handleMouseDown,
                                onMouseUp: this.handleMouseUp,
                                onMouseLeave: this.handleMouseLeave,
                                onMouseMove: this.handleMouseMove
                            } : {},
                            A = (0, o.default)({}, v, h);
                        if (D || !a || M) e = "all 0s ease 0s", t = "all 0s ease 0s";
                        else if (e = E("transform", x), t = E("-webkit-transform", x), 0 !== T) {
                            var N = ", ".concat(E("height", x));
                            e += N, t += N
                        }
                        var V = {
                            height: null,
                            WebkitFlexDirection: y[s],
                            flexDirection: y[s],
                            WebkitTransition: t,
                            transition: e
                        };
                        if (!k) {
                            var H = b[s](100 * this.indexCurrent);
                            V.WebkitTransform = H, V.transform = H
                        }
                        return r && (V.height = T), f.createElement(L.Provider, {
                            value: this.getSwipeableViewsContext()
                        }, f.createElement("div", (0, o.default)({
                            ref: this.setRootNode,
                            style: (0, o.default)({}, m[s], w)
                        }, S, R, P, {
                            onScroll: this.handleScroll
                        }), f.createElement("div", {
                            ref: this.setContainerNode,
                            style: (0, o.default)({}, V, g, d),
                            className: "react-swipeable-view-container"
                        }, f.Children.map(l, function(e, t) {
                            if (k && t !== O) return null;
                            var i, o = !0;
                            return t === O && (o = !1, r && (i = n.setActiveSlide, A.overflowY = "hidden")), f.createElement("div", {
                                ref: i,
                                style: A,
                                className: I,
                                "aria-hidden": o,
                                "data-swipeable": "true"
                            }, e)
                        }))))
                    }
                }]), t
            }(f.Component);
            R.displayName = "ReactSwipableView", R.propTypes = {}, R.defaultProps = {
                animateHeight: !1,
                animateTransitions: !0,
                axis: "x",
                disabled: !1,
                disableLazyLoading: !1,
                enableMouseEvents: !1,
                hysteresis: .6,
                ignoreNativeScroll: !1,
                index: 0,
                threshold: 5,
                springConfig: {
                    duration: "0.35s",
                    easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
                    delay: "0s"
                },
                resistance: !1
            }, t.default = R
        },
        78556: function(e, t, n) {
            "use strict";
            var i = n(68874);
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = i(n(26498))
        }
    }
]);
//# sourceMappingURL=8393.ce29bb07.js.map