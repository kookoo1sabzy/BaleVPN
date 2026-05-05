/*! For license information please see 8851.19e4c7d8.js.LICENSE.txt */
try {
    ! function() {
        var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new n.Error).stack;
        t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "18295074-0810-4027-bf11-447b49e57332", n._sentryDebugIdIdentifier = "sentry-dbid-18295074-0810-4027-bf11-447b49e57332")
    }()
} catch (n) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (n) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8851"], {
        71699: function(n, t, e) {
            e.d(t, {
                GT: () => nd,
                WZ: () => nm
            });
            var o = e(58191),
                i = e.n(o),
                a = function(n, t) {
                    return (a = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(n, t) {
                        n.__proto__ = t
                    } || function(n, t) {
                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
                    })(n, t)
                },
                r = function() {
                    return (r = Object.assign || function(n) {
                        for (var t, e = 1, o = arguments.length; e < o; e++)
                            for (var i in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                        return n
                    }).apply(this, arguments)
                };

            function s(n, t, e) {
                if (e || 2 == arguments.length)
                    for (var o, i = 0, a = t.length; i < a; i++) !o && i in t || (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
                return n.concat(o || t)
            }
            var u = function(n, t) {
                    return Number(n.toFixed(t))
                },
                l = function(n, t, e) {
                    e && "function" == typeof e && e(n, t)
                },
                c = {
                    easeOut: function(n) {
                        return -Math.cos(n * Math.PI) / 2 + .5
                    },
                    linear: function(n) {
                        return n
                    },
                    easeInQuad: function(n) {
                        return n * n
                    },
                    easeOutQuad: function(n) {
                        return n * (2 - n)
                    },
                    easeInOutQuad: function(n) {
                        return n < .5 ? 2 * n * n : -1 + (4 - 2 * n) * n
                    },
                    easeInCubic: function(n) {
                        return n * n * n
                    },
                    easeOutCubic: function(n) {
                        return --n * n * n + 1
                    },
                    easeInOutCubic: function(n) {
                        return n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1
                    },
                    easeInQuart: function(n) {
                        return n * n * n * n
                    },
                    easeOutQuart: function(n) {
                        return 1 - --n * n * n * n
                    },
                    easeInOutQuart: function(n) {
                        return n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n
                    },
                    easeInQuint: function(n) {
                        return n * n * n * n * n
                    },
                    easeOutQuint: function(n) {
                        return 1 + --n * n * n * n * n
                    },
                    easeInOutQuint: function(n) {
                        return n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n
                    }
                },
                p = function(n) {
                    "number" == typeof n && cancelAnimationFrame(n)
                },
                f = function(n) {
                    n.mounted && (p(n.animation), n.animate = !1, n.animation = null, n.velocity = null)
                };

            function d(n, t, e, o) {
                if (n.mounted) {
                    var i = new Date().getTime();
                    f(n), n.animation = function() {
                        if (!n.mounted) return p(n.animation);
                        var a = new Date().getTime() - i,
                            r = (0, c[t])(a / e);
                        a >= e ? (o(1), n.animation = null) : n.animation && (o(r), requestAnimationFrame(n.animation))
                    }, requestAnimationFrame(n.animation)
                }
            }

            function m(n, t, e, o) {
                var i, a, r, s, u = (a = (i = t).scale, r = i.positionX, s = i.positionY, !(isNaN(a) || isNaN(r) || isNaN(s)));
                if (n.mounted && u) {
                    var l = n.setTransformState,
                        c = n.transformState,
                        p = c.scale,
                        f = c.positionX,
                        m = c.positionY,
                        v = t.scale - p,
                        h = t.positionX - f,
                        g = t.positionY - m;
                    0 === e ? l(t.scale, t.positionX, t.positionY) : d(n, o, e, function(n) {
                        l(p + v * n, f + h * n, m + g * n)
                    })
                }
            }
            var v = function(n, t, e, o, i, a, r) {
                    var s = n > t ? e * (r ? 1 : .5) : 0,
                        u = o > i ? a * (r ? 1 : .5) : 0;
                    return {
                        minPositionX: n - t - s,
                        maxPositionX: s,
                        minPositionY: o - i - u,
                        maxPositionY: u
                    }
                },
                h = function(n, t) {
                    var e, o, i, a, r, s, u = n.wrapperComponent,
                        l = n.contentComponent,
                        c = n.setup.centerZoomedOut;
                    if (!u || !l) throw Error("Components are not mounted");
                    var p = (e = u.offsetWidth, o = u.offsetHeight, i = l.offsetWidth, a = l.offsetHeight, {
                            wrapperWidth: e,
                            wrapperHeight: o,
                            newContentWidth: r = i * t,
                            newDiffWidth: e - r,
                            newContentHeight: s = a * t,
                            newDiffHeight: o - s
                        }),
                        f = p.wrapperWidth,
                        d = p.wrapperHeight;
                    return v(f, p.newContentWidth, p.newDiffWidth, d, p.newContentHeight, p.newDiffHeight, !!c)
                },
                g = function(n, t) {
                    var e = h(n, t);
                    return n.bounds = e, e
                };

            function y(n, t, e, o, i, a, r) {
                var s = e.minPositionX,
                    u = e.minPositionY,
                    l = e.maxPositionX,
                    c = e.maxPositionY,
                    p = 0,
                    f = 0;
                return r && (p = i, f = a), {
                    x: w(n, s - p, l + p, o),
                    y: w(t, u - f, c + f, o)
                }
            }
            var w = function(n, t, e, o) {
                return o ? n < t ? u(t, 2) : n > e ? u(e, 2) : u(n, 2) : u(n, 2)
            };

            function S(n, t, e, o, i, a) {
                var r = n.transformState,
                    s = r.scale,
                    u = r.positionX,
                    l = r.positionY,
                    c = o - s;
                return "number" != typeof t || "number" != typeof e ? (console.error("Mouse X and Y position were not provided!"), {
                    x: u,
                    y: l
                }) : y(u - t * c, l - e * c, i, a, 0, 0, null)
            }

            function b(n, t, e, o, i) {
                var a = t - (i ? o : 0);
                return !isNaN(e) && n >= e ? e : !isNaN(t) && n <= a ? a : n
            }
            var P = function(n, t) {
                    var e = n.setup.panning.excluded,
                        o = n.isInitialized,
                        i = n.wrapperComponent,
                        a = t.target,
                        r = null == i ? void 0 : i.contains(a);
                    return !(!(o && a && r) || F(a, e))
                },
                T = function(n) {
                    var t = n.isInitialized,
                        e = n.isPanning,
                        o = n.setup.panning.disabled;
                    return !!(t && e && !o)
                },
                C = function(n, t) {
                    var e = n.transformState,
                        o = e.positionX,
                        i = e.positionY;
                    n.isPanning = !0, n.startCoords = {
                        x: t.clientX - o,
                        y: t.clientY - i
                    }
                },
                x = function(n, t) {
                    var e = t.touches,
                        o = n.transformState,
                        i = o.positionX,
                        a = o.positionY;
                    n.isPanning = !0, 1 === e.length && (n.startCoords = {
                        x: e[0].clientX - i,
                        y: e[0].clientY - a
                    })
                },
                Y = function(n, t, e) {
                    var o = n.startCoords,
                        i = n.transformState,
                        a = n.setup.panning,
                        r = a.lockAxisX,
                        s = a.lockAxisY,
                        u = i.positionX,
                        l = i.positionY;
                    if (!o) return {
                        x: u,
                        y: l
                    };
                    var c = t - o.x,
                        p = e - o.y;
                    return {
                        x: r ? u : c,
                        y: s ? l : p
                    }
                },
                X = function(n, t) {
                    var e = n.setup,
                        o = n.transformState.scale,
                        i = e.minScale;
                    return t > 0 && o >= i ? t : 0
                },
                E = function(n) {
                    var t = n.mounted,
                        e = n.setup,
                        o = e.disabled,
                        i = e.velocityAnimation,
                        a = n.transformState.scale;
                    return !!(!i.disabled || a > 1 || !o || t)
                },
                z = function(n) {
                    var t = n.mounted,
                        e = n.velocity,
                        o = n.bounds,
                        i = n.setup,
                        a = i.disabled,
                        r = i.velocityAnimation,
                        s = n.transformState.scale;
                    return !!(!r.disabled || s > 1 || !a || t) && !!e && !!o
                };

            function D(n, t, e, o, i, a, r, s, u, l) {
                if (i) {
                    if (t > r && e > r) {
                        var c = r + (n - r) * l;
                        return c > u ? u : c < r ? r : c
                    }
                    if (t < a && e < a) {
                        var c = a + (n - a) * l;
                        return c < s ? s : c > a ? a : c
                    }
                }
                return o ? t : w(n, a, r, i)
            }

            function N(n, t) {
                var e = n.transformState.scale;
                f(n), g(n, e), t.touches ? x(n, t) : C(n, t)
            }

            function O(n, t, e) {
                var o = n.startCoords,
                    i = n.setup.alignmentAnimation,
                    a = i.sizeX,
                    r = i.sizeY;
                if (o) {
                    var s = Y(n, t, e),
                        u = s.x,
                        l = s.y,
                        c = X(n, a),
                        p = X(n, r);
                    ! function(n, t) {
                        if (E(n)) {
                            var e = n.lastMousePosition,
                                o = n.velocityTime,
                                i = n.setup,
                                a = n.wrapperComponent,
                                r = i.velocityAnimation.equalToMove,
                                s = Date.now();
                            if (e && o && a) {
                                var u = r ? Math.min(1, a.offsetWidth / window.innerWidth) : 1,
                                    l = t.x - e.x,
                                    c = t.y - e.y,
                                    p = Math.sqrt(l * l + c * c) / (s - o);
                                n.velocity = {
                                    velocityX: l / u,
                                    velocityY: c / u,
                                    total: p
                                }
                            }
                            n.lastMousePosition = t, n.velocityTime = s
                        }
                    }(n, {
                        x: u,
                        y: l
                    }),
                    function(n, t, e, o, i) {
                        var a = n.setup.limitToBounds,
                            r = n.wrapperComponent,
                            s = n.bounds,
                            u = n.transformState,
                            l = u.scale,
                            c = u.positionX,
                            p = u.positionY,
                            f = t !== c,
                            d = e !== p;
                        if (r && !(!f || !d) && s) {
                            var m = y(t, e, s, a, o, i, r),
                                v = m.x,
                                h = m.y;
                            n.setTransformState(l, v, h)
                        }
                    }(n, u, l, c, p)
                }
            }

            function A(n) {
                var t = n.transformState.scale,
                    e = n.setup,
                    o = e.minScale,
                    i = e.alignmentAnimation,
                    a = i.disabled,
                    r = i.sizeX,
                    s = i.sizeY,
                    u = i.animationTime,
                    l = i.animationType;
                if (!(a || t < o || !r && !s)) {
                    var c = function(n) {
                        var t = n.transformState,
                            e = t.positionX,
                            o = t.positionY,
                            i = t.scale,
                            a = n.setup,
                            r = a.disabled,
                            s = a.limitToBounds,
                            u = a.centerZoomedOut,
                            l = n.wrapperComponent;
                        if (!r && l && n.bounds) {
                            var c = n.bounds,
                                p = c.maxPositionX,
                                f = c.minPositionX,
                                d = c.maxPositionY,
                                m = c.minPositionY,
                                v = e > p ? l.offsetWidth : n.setup.minPositionX || 0,
                                h = o > d ? l.offsetHeight : n.setup.minPositionY || 0,
                                g = S(n, v, h, i, n.bounds, s || u),
                                y = g.x,
                                w = g.y;
                            return {
                                scale: i,
                                positionX: e > p || e < f ? y : e,
                                positionY: o > d || o < m ? w : o
                            }
                        }
                    }(n);
                    c && m(n, c, u, l)
                }
            }

            function I(n, t, e) {
                var o = n.transformState.scale,
                    i = n.wrapperComponent,
                    a = n.setup,
                    r = a.minScale,
                    s = a.limitToBounds,
                    u = a.zoomAnimation,
                    l = u.disabled,
                    c = u.animationTime,
                    p = u.animationType,
                    f = l || o >= r;
                if ((o >= 1 || s) && A(n), !f && i && n.mounted) {
                    var d = W(n, r, t || i.offsetWidth / 2, e || i.offsetHeight / 2);
                    d && m(n, d, c, p)
                }
            }

            function W(n, t, e, o) {
                var i = n.setup,
                    a = i.minScale,
                    r = i.maxScale,
                    s = i.limitToBounds,
                    l = b(u(t, 2), a, r, 0, !1),
                    c = g(n, l),
                    p = S(n, e, o, l, c, s);
                return {
                    scale: l,
                    positionX: p.x,
                    positionY: p.y
                }
            }
            var _ = {
                    previousScale: 1,
                    scale: 1,
                    positionX: 0,
                    positionY: 0
                },
                k = r(r({}, _), {
                    setComponents: function() {},
                    contextInstance: null
                }),
                M = {
                    disabled: !1,
                    minPositionX: null,
                    maxPositionX: null,
                    minPositionY: null,
                    maxPositionY: null,
                    minScale: 1,
                    maxScale: 8,
                    limitToBounds: !0,
                    centerZoomedOut: !1,
                    centerOnInit: !1,
                    wheel: {
                        step: .2,
                        disabled: !1,
                        wheelDisabled: !1,
                        touchPadDisabled: !1,
                        activationKeys: [],
                        excluded: []
                    },
                    panning: {
                        disabled: !1,
                        velocityDisabled: !1,
                        lockAxisX: !1,
                        lockAxisY: !1,
                        activationKeys: [],
                        excluded: []
                    },
                    pinch: {
                        step: 5,
                        disabled: !1,
                        excluded: []
                    },
                    doubleClick: {
                        disabled: !1,
                        step: .7,
                        mode: "zoomIn",
                        animationType: "easeOut",
                        animationTime: 200,
                        excluded: []
                    },
                    zoomAnimation: {
                        disabled: !1,
                        size: .4,
                        animationTime: 200,
                        animationType: "easeOut"
                    },
                    alignmentAnimation: {
                        disabled: !1,
                        sizeX: 100,
                        sizeY: 100,
                        animationTime: 200,
                        velocityAlignmentTime: 400,
                        animationType: "easeOut"
                    },
                    velocityAnimation: {
                        disabled: !1,
                        sensitivity: 1,
                        animationTime: 400,
                        animationType: "easeOut",
                        equalToMove: !0
                    }
                },
                K = function(n) {
                    var t, e, o, i;
                    return {
                        previousScale: null != (t = n.initialScale) ? t : _.scale,
                        scale: null != (e = n.initialScale) ? e : _.scale,
                        positionX: null != (o = n.initialPositionX) ? o : _.positionX,
                        positionY: null != (i = n.initialPositionY) ? i : _.positionY
                    }
                },
                H = function(n) {
                    var t = r({}, M);
                    return Object.keys(n).forEach(function(e) {
                        var o = void 0 !== n[e];
                        if (void 0 !== M[e] && o) {
                            var i = Object.prototype.toString.call(M[e]);
                            "[object Object]" === i ? t[e] = r(r({}, M[e]), n[e]) : "[object Array]" === i ? t[e] = s(s([], M[e]), n[e]) : t[e] = n[e]
                        }
                    }), t
                },
                L = function(n, t, e) {
                    var o = n.transformState.scale,
                        i = n.wrapperComponent,
                        a = n.setup,
                        r = a.maxScale,
                        s = a.minScale,
                        l = a.zoomAnimation.size;
                    if (!i) throw Error("Wrapper is not mounted");
                    return b(u(o * Math.exp(t * e), 3), s, r, l, !1)
                };

            function B(n, t, e, o, i) {
                var a = n.wrapperComponent,
                    r = n.transformState,
                    s = r.scale,
                    u = r.positionX,
                    l = r.positionY;
                if (!a) return console.error("No WrapperComponent found");
                var c = a.offsetWidth,
                    p = a.offsetHeight,
                    f = L(n, t, e),
                    d = W(n, f, (c / 2 - u) / s, (p / 2 - l) / s);
                if (!d) return console.error("Error during zoom event. New transformation state was not calculated.");
                m(n, d, o, i)
            }

            function R(n, t, e) {
                var o = n.setup,
                    i = n.wrapperComponent,
                    a = o.limitToBounds,
                    r = K(n.props),
                    s = n.transformState,
                    u = s.scale,
                    l = s.positionX,
                    c = s.positionY;
                if (i) {
                    var p = h(n, r.scale),
                        f = y(r.positionX, r.positionY, p, a, 0, 0, i),
                        d = {
                            scale: r.scale,
                            positionX: f.x,
                            positionY: f.y
                        };
                    (u !== r.scale || l !== r.positionX || c !== r.positionY) && m(n, d, t, e)
                }
            }
            var Z = function(n) {
                return {
                    instance: n,
                    state: n.transformState,
                    zoomIn: function(t, e, o) {
                        void 0 === t && (t = .5), void 0 === e && (e = 300), void 0 === o && (o = "easeOut"), B(n, 1, t, e, o)
                    },
                    zoomOut: function(t, e, o) {
                        void 0 === t && (t = .5), void 0 === e && (e = 300), void 0 === o && (o = "easeOut"), B(n, -1, t, e, o)
                    },
                    setTransform: function(t, e, o, i, a) {
                        void 0 === i && (i = 300), void 0 === a && (a = "easeOut");
                        var r = n.transformState,
                            s = r.positionX,
                            u = r.positionY,
                            l = r.scale,
                            c = n.wrapperComponent,
                            p = n.contentComponent;
                        !n.setup.disabled && c && p && m(n, {
                            positionX: isNaN(t) ? s : t,
                            positionY: isNaN(e) ? u : e,
                            scale: isNaN(o) ? l : o
                        }, i, a)
                    },
                    resetTransform: function(t, e) {
                        void 0 === t && (t = 200), void 0 === e && (e = "easeOut"), R(n, t, e)
                    },
                    centerView: function(t, e, o) {
                        void 0 === e && (e = 200), void 0 === o && (o = "easeOut");
                        var i = n.transformState,
                            a = n.wrapperComponent,
                            r = n.contentComponent;
                        a && r && m(n, q(t || i.scale, a, r), e, o)
                    },
                    zoomToElement: function(t, e, o, i) {
                        void 0 === o && (o = 600), void 0 === i && (i = "easeOut"), f(n);
                        var a = n.wrapperComponent,
                            r = "string" == typeof t ? document.getElementById(t) : t;
                        if (a && (r ? (null == r ? void 0 : r.offsetWidth) !== void 0 && (null == r ? void 0 : r.offsetHeight) !== void 0 || (console.error("Zoom node is not valid - it must contain offsetWidth and offsetHeight"), !1) : (console.error("Zoom node not found"), !1)) && r && a.contains(r)) {
                            var s = function(n, t, e) {
                                var o = n.wrapperComponent,
                                    i = n.setup,
                                    a = i.limitToBounds,
                                    r = i.minScale,
                                    s = i.maxScale;
                                if (!o) return _;
                                var u = o.getBoundingClientRect(),
                                    l = function(n) {
                                        for (var t = n, e = 0, o = 0; t;) e += t.offsetLeft, o += t.offsetTop, t = t.offsetParent;
                                        return {
                                            x: e,
                                            y: o
                                        }
                                    }(t),
                                    c = l.x,
                                    p = l.y,
                                    f = t.offsetWidth,
                                    d = t.offsetHeight,
                                    m = o.offsetWidth / f,
                                    v = o.offsetHeight / d,
                                    g = b(e || Math.min(m, v), r, s, 0, !1),
                                    w = (u.width - f * g) / 2,
                                    S = (u.height - d * g) / 2,
                                    P = y((u.left - c) * g + w, (u.top - p) * g + S, h(n, g), a, 0, 0, o);
                                return {
                                    positionX: P.x,
                                    positionY: P.y,
                                    scale: g
                                }
                            }(n, r, e);
                            m(n, s, o, i)
                        }
                    }
                }
            };

            function j() {
                try {
                    return {
                        get passive() {
                            return !1
                        }
                    }
                } catch (n) {
                    return !1
                }
            }
            var F = function(n, t) {
                    var e = n.tagName.toUpperCase();
                    return !!(t.find(function(n) {
                        return n.toUpperCase() === e
                    }) || t.find(function(t) {
                        return n.classList.contains(t)
                    }))
                },
                Q = function(n) {
                    n && clearTimeout(n)
                },
                q = function(n, t, e) {
                    var o = e.offsetWidth * n,
                        i = e.offsetHeight * n;
                    return {
                        scale: n,
                        positionX: (t.offsetWidth - o) / 2,
                        positionY: (t.offsetHeight - i) / 2
                    }
                },
                U = function(n, t) {
                    var e = n.setup.wheel,
                        o = e.disabled,
                        i = e.wheelDisabled,
                        a = e.touchPadDisabled,
                        r = e.excluded,
                        s = n.isInitialized,
                        u = n.isPanning,
                        l = t.target;
                    return !(!(s && !u && !o && l) || i && !t.ctrlKey || a && t.ctrlKey || F(l, r))
                };

            function G(n, t, e) {
                var o = t.getBoundingClientRect(),
                    i = 0,
                    a = 0;
                if ("clientX" in n) i = (n.clientX - o.left) / e, a = (n.clientY - o.top) / e;
                else {
                    var r = n.touches[0];
                    i = (r.clientX - o.left) / e, a = (r.clientY - o.top) / e
                }
                return (isNaN(i) || isNaN(a)) && console.error("No mouse or touch offset found"), {
                    x: i,
                    y: a
                }
            }
            var V = function(n, t, e, o, i) {
                    var a = n.transformState.scale,
                        r = n.wrapperComponent,
                        s = n.setup,
                        l = s.maxScale,
                        c = s.minScale,
                        p = s.zoomAnimation,
                        f = p.size,
                        d = p.disabled;
                    if (!r) throw Error("Wrapper is not mounted");
                    var m = a + t * (a - a * e) * e;
                    return i ? m : b(u(m, 3), c, l, f, !o && !d)
                },
                J = function(n, t) {
                    var e = n.previousWheelEvent,
                        o = n.transformState.scale,
                        i = n.setup,
                        a = i.maxScale,
                        r = i.minScale;
                    return !!e && (!!(o < a) || !!(o > r) || Math.sign(e.deltaY) !== Math.sign(t.deltaY) || !!(e.deltaY > 0) && !!(e.deltaY < t.deltaY) || !!(e.deltaY < 0) && !!(e.deltaY > t.deltaY) || Math.sign(e.deltaY) !== Math.sign(t.deltaY))
                },
                $ = function(n, t) {
                    var e = n.setup.pinch,
                        o = e.disabled,
                        i = e.excluded,
                        a = n.isInitialized,
                        r = t.target;
                    return !(!(a && !o && r) || F(r, i))
                },
                nn = function(n) {
                    var t = n.setup.pinch.disabled,
                        e = n.isInitialized,
                        o = n.pinchStartDistance;
                    return !!(e && !t && o)
                },
                nt = function(n, t, e) {
                    var o = e.getBoundingClientRect(),
                        i = n.touches,
                        a = u(i[0].clientX - o.left, 5),
                        r = u(i[0].clientY - o.top, 5);
                    return {
                        x: (a + u(i[1].clientX - o.left, 5)) / 2 / t,
                        y: (r + u(i[1].clientY - o.top, 5)) / 2 / t
                    }
                },
                ne = function(n) {
                    return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2))
                },
                no = function(n, t) {
                    var e = n.pinchStartScale,
                        o = n.pinchStartDistance,
                        i = n.setup,
                        a = i.maxScale,
                        r = i.minScale,
                        s = i.zoomAnimation,
                        l = s.size,
                        c = s.disabled;
                    if (!e || null === o || !t) throw Error("Pinch touches distance was not provided");
                    return t < 0 ? n.transformState.scale : b(u(t / o * e, 2), r, a, l, !c)
                },
                ni = function(n, t) {
                    var e = n.props,
                        o = e.onWheelStart,
                        i = e.onZoomStart;
                    n.wheelStopEventTimer || (f(n), l(Z(n), t, o), l(Z(n), t, i))
                },
                na = function(n, t) {
                    var e, o = n.props,
                        i = o.onWheel,
                        a = o.onZoom,
                        r = n.contentComponent,
                        s = n.setup,
                        u = n.transformState.scale,
                        c = s.limitToBounds,
                        p = s.centerZoomedOut,
                        f = s.zoomAnimation,
                        d = s.wheel,
                        m = f.size,
                        v = f.disabled,
                        h = d.step;
                    if (!r) throw Error("Component not mounted");
                    t.preventDefault(), t.stopPropagation();
                    var y = V(n, (e = t ? t.deltaY < 0 ? 1 : -1 : 0, e), h, !t.ctrlKey);
                    if (u !== y) {
                        var w = g(n, y),
                            b = G(t, r, u),
                            P = S(n, b.x, b.y, y, w, c && (v || 0 === m || p)),
                            T = P.x,
                            C = P.y;
                        n.previousWheelEvent = t, n.setTransformState(y, T, C), l(Z(n), t, i), l(Z(n), t, a)
                    }
                },
                nr = function(n, t) {
                    var e = n.props,
                        o = e.onWheelStop,
                        i = e.onZoomStop;
                    Q(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
                        n.mounted && (I(n, t.x, t.y), n.wheelAnimationTimer = null)
                    }, 100), J(n, t) && (Q(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
                        n.mounted && (n.wheelStopEventTimer = null, l(Z(n), t, o), l(Z(n), t, i))
                    }, 160))
                },
                ns = function(n, t) {
                    var e = ne(t);
                    n.pinchStartDistance = e, n.lastDistance = e, n.pinchStartScale = n.transformState.scale, n.isPanning = !1, f(n)
                },
                nu = function(n, t) {
                    var e = n.contentComponent,
                        o = n.pinchStartDistance,
                        i = n.transformState.scale,
                        a = n.setup,
                        r = a.limitToBounds,
                        s = a.centerZoomedOut,
                        u = a.zoomAnimation,
                        l = u.disabled,
                        c = u.size;
                    if (null !== o && e) {
                        var p = nt(t, i, e);
                        if (isFinite(p.x) && isFinite(p.y)) {
                            var f = ne(t),
                                d = no(n, f);
                            if (d !== i) {
                                var m = g(n, d),
                                    v = S(n, p.x, p.y, d, m, r && (l || 0 === c || s)),
                                    h = v.x,
                                    y = v.y;
                                n.pinchMidpoint = p, n.lastDistance = f, n.setTransformState(d, h, y)
                            }
                        }
                    }
                },
                nl = function(n) {
                    var t = n.pinchMidpoint;
                    n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, I(n, null == t ? void 0 : t.x, null == t ? void 0 : t.y)
                },
                nc = function(n, t) {
                    var e = n.isInitialized,
                        o = n.setup,
                        i = n.wrapperComponent,
                        a = o.doubleClick,
                        r = a.disabled,
                        s = a.excluded,
                        u = t.target,
                        l = null == i ? void 0 : i.contains(u),
                        c = e && u && l && !r;
                    return !(!c || F(u, s)) && !!c
                },
                np = i().createContext(k),
                nf = function(n) {
                    if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function t() {
                        this.constructor = e
                    }

                    function e() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.mounted = !0, t.transformState = K(t.props), t.setup = H(t.props), t.wrapperComponent = null, t.contentComponent = null, t.isInitialized = !1, t.bounds = null, t.previousWheelEvent = null, t.wheelStopEventTimer = null, t.wheelAnimationTimer = null, t.isPanning = !1, t.startCoords = null, t.lastTouch = null, t.distance = null, t.lastDistance = null, t.pinchStartDistance = null, t.pinchStartScale = null, t.pinchMidpoint = null, t.velocity = null, t.velocityTime = null, t.lastMousePosition = null, t.animate = !1, t.animation = null, t.maxBounds = null, t.pressedKeys = {}, t.handleInitializeWrapperEvents = function(n) {
                            var e = j();
                            n.addEventListener("wheel", t.onWheelZoom, e), n.addEventListener("dblclick", t.onDoubleClick, e), n.addEventListener("touchstart", t.onTouchPanningStart, e), n.addEventListener("touchmove", t.onTouchPanning, e), n.addEventListener("touchend", t.onTouchPanningStop, e)
                        }, t.handleInitialize = function() {
                            var n = t.setup.centerOnInit;
                            t.applyTransformation(), t.forceUpdate(), n && (setTimeout(function() {
                                t.mounted && t.setCenter()
                            }, 50), setTimeout(function() {
                                t.mounted && t.setCenter()
                            }, 100), setTimeout(function() {
                                t.mounted && t.setCenter()
                            }, 200))
                        }, t.onWheelZoom = function(n) {
                            t.setup.disabled || !U(t, n) || t.isPressingKeys(t.setup.wheel.activationKeys) && (ni(t, n), na(t, n), nr(t, n))
                        }, t.onPanningStart = function(n) {
                            var e = t.setup.disabled,
                                o = t.props.onPanningStart;
                            e || !P(t, n) || t.isPressingKeys(t.setup.panning.activationKeys) && (n.preventDefault(), n.stopPropagation(), f(t), N(t, n), l(Z(t), n, o))
                        }, t.onPanning = function(n) {
                            var e = t.setup.disabled,
                                o = t.props.onPanning;
                            e || !T(t) || t.isPressingKeys(t.setup.panning.activationKeys) && (n.preventDefault(), n.stopPropagation(), O(t, n.clientX, n.clientY), l(Z(t), n, o))
                        }, t.onPanningStop = function(n) {
                            var e = t.props.onPanningStop;
                            t.isPanning && (! function(n) {
                                if (n.isPanning) {
                                    var t = n.setup.panning.velocityDisabled,
                                        e = n.velocity,
                                        o = n.wrapperComponent,
                                        i = n.contentComponent;
                                    n.isPanning = !1, n.animate = !1, n.animation = null;
                                    var a = null == o ? void 0 : o.getBoundingClientRect(),
                                        r = null == i ? void 0 : i.getBoundingClientRect(),
                                        s = (null == a ? void 0 : a.width) || 0,
                                        u = (null == a ? void 0 : a.height) || 0,
                                        l = (null == r ? void 0 : r.width) || 0,
                                        p = (null == r ? void 0 : r.height) || 0;
                                    !t && e && (null == e ? void 0 : e.total) > .1 && (s < l || u < p) ? function(n) {
                                        var t = n.velocity,
                                            e = n.bounds,
                                            o = n.setup,
                                            i = n.wrapperComponent;
                                        if (z(n) && t && e && i) {
                                            var a, r, s, u, l = t.velocityX,
                                                p = t.velocityY,
                                                f = t.total,
                                                m = e.maxPositionX,
                                                v = e.minPositionX,
                                                h = e.maxPositionY,
                                                g = e.minPositionY,
                                                y = o.limitToBounds,
                                                w = o.alignmentAnimation,
                                                S = o.zoomAnimation,
                                                b = o.panning,
                                                P = b.lockAxisY,
                                                T = b.lockAxisX,
                                                C = S.animationType,
                                                x = w.sizeX,
                                                Y = w.sizeY,
                                                E = w.velocityAlignmentTime,
                                                N = Math.max((r = (a = n.setup.velocityAnimation).equalToMove, s = a.animationTime, u = a.sensitivity, r ? s * f * u : s), E),
                                                O = X(n, x),
                                                A = X(n, Y),
                                                I = O * i.offsetWidth / 100,
                                                W = A * i.offsetHeight / 100,
                                                _ = m + I,
                                                k = v - I,
                                                M = h + W,
                                                K = g - W,
                                                H = n.transformState,
                                                L = new Date().getTime();
                                            d(n, C, N, function(t) {
                                                var e = n.transformState,
                                                    o = e.scale,
                                                    i = e.positionX,
                                                    a = e.positionY,
                                                    r = new Date().getTime() - L,
                                                    s = 1 - (0, c[w.animationType])(Math.min(1, r / E)),
                                                    u = 1 - t,
                                                    f = i + l * u,
                                                    d = a + p * u,
                                                    S = D(f, H.positionX, i, T, y, v, m, k, _, s),
                                                    b = D(d, H.positionY, a, P, y, g, h, K, M, s);
                                                (i !== f || a !== d) && n.setTransformState(o, S, b)
                                            })
                                        }
                                    }(n) : A(n)
                                }
                            }(t), l(Z(t), n, e))
                        }, t.onPinchStart = function(n) {
                            var e = t.setup.disabled,
                                o = t.props,
                                i = o.onPinchingStart,
                                a = o.onZoomStart;
                            e || $(t, n) && (ns(t, n), f(t), l(Z(t), n, i), l(Z(t), n, a))
                        }, t.onPinch = function(n) {
                            var e = t.setup.disabled,
                                o = t.props,
                                i = o.onPinching,
                                a = o.onZoom;
                            e || nn(t) && (n.preventDefault(), n.stopPropagation(), nu(t, n), l(Z(t), n, i), l(Z(t), n, a))
                        }, t.onPinchStop = function(n) {
                            var e = t.props,
                                o = e.onPinchingStop,
                                i = e.onZoomStop;
                            t.pinchStartScale && (nl(t), l(Z(t), n, o), l(Z(t), n, i))
                        }, t.onTouchPanningStart = function(n) {
                            var e = t.setup.disabled,
                                o = t.props.onPanningStart;
                            if (!e && P(t, n))
                                if (t.lastTouch && new Date - t.lastTouch < 200 && 1 === n.touches.length) t.onDoubleClick(n);
                                else {
                                    t.lastTouch = +new Date, f(t);
                                    var i = n.touches,
                                        a = 1 === i.length,
                                        r = 2 === i.length;
                                    a && (f(t), N(t, n), l(Z(t), n, o)), r && t.onPinchStart(n)
                                }
                        }, t.onTouchPanning = function(n) {
                            var e = t.setup.disabled,
                                o = t.props.onPanning;
                            if (t.isPanning && 1 === n.touches.length) {
                                if (e || !T(t)) return;
                                n.preventDefault(), n.stopPropagation();
                                var i = n.touches[0];
                                O(t, i.clientX, i.clientY), l(Z(t), n, o)
                            } else n.touches.length > 1 && t.onPinch(n)
                        }, t.onTouchPanningStop = function(n) {
                            t.onPanningStop(n), t.onPinchStop(n)
                        }, t.onDoubleClick = function(n) {
                            t.setup.disabled || nc(t, n) && function(n, t) {
                                var e = n.setup.doubleClick,
                                    o = e.disabled,
                                    i = e.mode,
                                    a = e.step,
                                    r = e.animationTime,
                                    s = e.animationType;
                                if (!o) {
                                    if ("reset" === i) return R(n, r, s);
                                    var u = n.transformState.scale,
                                        l = n.contentComponent;
                                    if (!l) return console.error("No ContentComponent found");
                                    var c = L(n, "zoomOut" === i ? -1 : 1, a),
                                        p = G(t, l, u),
                                        f = W(n, c, p.x, p.y);
                                    if (!f) return console.error("Error during zoom event. New transformation state was not calculated.");
                                    m(n, f, r, s)
                                }
                            }(t, n)
                        }, t.clearPanning = function(n) {
                            t.isPanning && t.onPanningStop(n)
                        }, t.setKeyPressed = function(n) {
                            t.pressedKeys[n.key] = !0
                        }, t.setKeyUnPressed = function(n) {
                            t.pressedKeys[n.key] = !1
                        }, t.isPressingKeys = function(n) {
                            return !n.length || !!n.find(function(n) {
                                return t.pressedKeys[n]
                            })
                        }, t.setComponents = function(n, e) {
                            t.wrapperComponent = n, t.contentComponent = e, g(t, t.transformState.scale), t.handleInitializeWrapperEvents(n), t.handleInitialize(), t.handleRef(), t.isInitialized = !0, l(Z(t), void 0, t.props.onInit)
                        }, t.setTransformState = function(n, e, o) {
                            isNaN(n) || isNaN(e) || isNaN(o) ? console.error("Detected NaN set state values") : (n !== t.transformState.scale && (t.transformState.previousScale = t.transformState.scale, t.transformState.scale = n), t.transformState.positionX = e, t.transformState.positionY = o, t.applyTransformation())
                        }, t.setCenter = function() {
                            if (t.wrapperComponent && t.contentComponent) {
                                var n = q(t.transformState.scale, t.wrapperComponent, t.contentComponent);
                                t.setTransformState(n.scale, n.positionX, n.positionY)
                            }
                        }, t.applyTransformation = function() {
                            if (t.mounted && t.contentComponent) {
                                var n = t.transformState,
                                    e = n.scale,
                                    o = "translate3d(" + n.positionX + "px, " + n.positionY + "px, 0) scale(" + e + ")";
                                t.contentComponent.style.transform = o, t.handleRef()
                            }
                        }, t.handleRef = function() {
                            t.props.setRef(Z(t))
                        }, t
                    }
                    return a(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t), e.prototype.componentDidMount = function() {
                        var n = j();
                        window.addEventListener("mousedown", this.onPanningStart, n), window.addEventListener("mousemove", this.onPanning, n), window.addEventListener("mouseup", this.onPanningStop, n), document.addEventListener("mouseleave", this.clearPanning, n), window.addEventListener("keyup", this.setKeyUnPressed, n), window.addEventListener("keydown", this.setKeyPressed, n), this.handleRef()
                    }, e.prototype.componentWillUnmount = function() {
                        var n = j();
                        window.removeEventListener("mousedown", this.onPanningStart, n), window.removeEventListener("mousemove", this.onPanning, n), window.removeEventListener("mouseup", this.onPanningStop, n), window.removeEventListener("keyup", this.setKeyUnPressed, n), window.removeEventListener("keydown", this.setKeyPressed, n), f(this)
                    }, e.prototype.componentDidUpdate = function(n) {
                        n !== this.props && (g(this, this.transformState.scale), this.setup = H(this.props))
                    }, e.prototype.render = function() {
                        var n = Z(this),
                            t = this.props.children,
                            e = "function" == typeof t ? t(n) : t;
                        return i().createElement(np.Provider, {
                            value: r(r({}, this.transformState), {
                                setComponents: this.setComponents,
                                contextInstance: this
                            })
                        }, e)
                    }, e
                }(o.Component),
                nd = i().forwardRef(function(n, t) {
                    var e = (0, o.useState)(null),
                        a = e[0],
                        s = e[1];
                    return (0, o.useImperativeHandle)(t, function() {
                        return a
                    }, [a]), i().createElement(nf, r({}, n, {
                        setRef: s
                    }))
                });
            ! function(n, t) {
                void 0 === t && (t = {});
                var e = t.insertAt;
                if (n && "undefined" != typeof document) {
                    var o = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === e && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n))
                }
            }(".transform-component-module_wrapper__1_Fgj {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__2jYgh {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__2jYgh img {\n  pointer-events: none;\n}\n");
            var nm = function(n) {
                var t = n.children,
                    e = n.wrapperClass,
                    a = n.contentClass,
                    r = n.wrapperStyle,
                    s = n.contentStyle,
                    u = (0, o.useContext)(np).setComponents,
                    l = (0, o.useRef)(null),
                    c = (0, o.useRef)(null);
                return (0, o.useEffect)(function() {
                    var n = l.current,
                        t = c.current;
                    null !== n && null !== t && u && u(n, t)
                }, []), i().createElement("div", {
                    ref: l,
                    className: "react-transform-wrapper transform-component-module_wrapper__1_Fgj " + (void 0 === e ? "" : e),
                    style: r
                }, i().createElement("div", {
                    ref: c,
                    className: "react-transform-component transform-component-module_content__2jYgh " + (void 0 === a ? "" : a),
                    style: s
                }, t))
            }
        }
    }
]);
//# sourceMappingURL=8851.19e4c7d8.js.map