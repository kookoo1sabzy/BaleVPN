try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f3493fb6-cd59-484c-9359-d52176baf0a4", t._sentryDebugIdIdentifier = "sentry-dbid-f3493fb6-cd59-484c-9359-d52176baf0a4")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3326"], {
        47733: function(t, e, i) {
            i.d(e, {
                a: () => o
            });
            var n = i(51116),
                r = i(47920),
                o = class {
                    get dotLottie() {
                        return this._dotLottie
                    }
                    get animationsMap() {
                        return this._animationsMap
                    }
                    get themeMap() {
                        return this._themeMap
                    }
                    get stateMachinesMap() {
                        return this._stateMachinesMap
                    }
                    get manifest() {
                        return this._manifest
                    }
                    async loadFromUrl(t) {
                        let e = await fetch(t, {
                            method: "GET",
                            mode: "cors"
                        });
                        if (!e.ok) throw Error(`Failed to load dotLottie from ${t} with status ${e.status}`);
                        let i = e.headers.get("content-type");
                        if (null != i && i.includes("application/json")) {
                            let i = await e.json();
                            if (!(0, r.l)(i)) throw Error(`Invalid lottie JSON at ${t}`);
                            let n = (0, r.k)(t);
                            this._animationsMap.set(n, i), this._manifest = {
                                activeAnimationId: n,
                                animations: [{
                                    id: n
                                }]
                            }
                        } else {
                            this._dotLottie = await (0, r.c)(await e.arrayBuffer());
                            let t = await (0, r.b)(this._dotLottie);
                            if (!t) throw Error("Manifest not found");
                            this._manifest = t
                        }
                    }
                    loadFromLottieJSON(t) {
                        if (!(0, r.l)(t)) throw Error("Invalid lottie JSON");
                        let e = "my-animation";
                        this._animationsMap.set(e, t), this._manifest = {
                            activeAnimationId: e,
                            animations: [{
                                id: e
                            }]
                        }
                    }
                    async loadFromArrayBuffer(t) {
                        this._dotLottie = await (0, r.c)(t);
                        let e = await (0, r.b)(this._dotLottie);
                        if (!e) throw Error("Manifest not found");
                        this._manifest = e
                    }
                    async getAnimation(t) {
                        if (this._animationsMap.get(t)) return this._animationsMap.get(t);
                        if (!this._dotLottie) return;
                        let e = await (0, r.d)(this._dotLottie, t, {
                            inlineAssets: !0
                        });
                        return e && this._animationsMap.set(t, e), e
                    }
                    async getTheme(t) {
                        if (this._themeMap.get(t)) return this._themeMap.get(t);
                        if (!this._dotLottie) return;
                        let e = await (0, r.e)(this._dotLottie, t);
                        return e && this._themeMap.set(t, e), e
                    }
                    async getStateMachines() {
                        if (!this._dotLottie) return;
                        let t = await (0, r.f)(this._dotLottie);
                        for (let e in t)
                            if (e) {
                                let i = t[e];
                                if (i) {
                                    let t = JSON.parse(i);
                                    if (t) {
                                        let e = t.descriptor.id;
                                        this._stateMachinesMap.get(e) || this._stateMachinesMap.set(e, t)
                                    }
                                }
                            } return Array.from(this._stateMachinesMap.values())
                    }
                    async getStateMachine(t) {
                        if (this._stateMachinesMap.get(t)) return this._stateMachinesMap.get(t);
                        if (!this._dotLottie) return;
                        let e = await (0, r.g)(this._dotLottie, t);
                        return e && this._stateMachinesMap.set(e.descriptor.id, e), e
                    }
                    constructor() {
                        (0, n._)(this, "_dotLottie", void 0), (0, n._)(this, "_animationsMap", new Map), (0, n._)(this, "_themeMap", new Map), (0, n._)(this, "_stateMachinesMap", new Map), (0, n._)(this, "_manifest", void 0)
                    }
                }
        },
        28924: function(t, e, i) {
            i.d(e, {
                a: () => r
            });
            var n = i(47920);
            async function r(t, e) {
                let [{
                    DotLottieStateMachineManager: r
                }] = await Promise.all([i.e("7027").then(i.bind(i, 68414))]);
                if (!t.length) throw (0, n.h)("No state machines available inside this .lottie!");
                return new r(t, e)
            }
        },
        25260: function(t, e, i) {
            i.d(e, {
                a: () => u,
                b: () => h
            });
            var n = Object.create,
                r = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                s = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                u = (t, e) => () => (e || t((e = {
                    exports: {}
                }).exports, e), e.exports),
                h = (t, e, i) => (i = null != t ? n(s(t)) : {}, ((t, e, i, n) => {
                    if (e && "object" == typeof e || "function" == typeof e)
                        for (let s of a(e)) l.call(t, s) || s === i || r(t, s, {
                            get: () => e[s],
                            enumerable: !(n = o(e, s)) || n.enumerable
                        });
                    return t
                })(!e && t && t.__esModule ? i : r(i, "default", {
                    value: t,
                    enumerable: !0
                }), t))
        },
        36157: function(t, e, i) {
            i.d(e, {
                a: () => w
            });
            var n = i(51116);

            function r() {
                throw Error("Cycle detected")
            }

            function o() {
                if (l > 1) l--;
                else {
                    for (var t, e = !1; void 0 !== s;) {
                        var i = s;
                        for (s = void 0, u++; void 0 !== i;) {
                            var n = i.o;
                            if (i.o = void 0, i.f &= -3, !(8 & i.f) && f(i)) try {
                                i.c()
                            } catch (i) {
                                e || (t = i, e = !0)
                            }
                            i = n
                        }
                    }
                    if (u = 0, l--, e) throw t
                }
            }
            var a = void 0,
                s = void 0,
                l = 0,
                u = 0,
                h = 0;

            function d(t) {
                if (void 0 !== a) {
                    var e = t.n;
                    if (void 0 === e || e.t !== a) return e = {
                        i: 0,
                        S: t,
                        p: a.s,
                        n: void 0,
                        t: a,
                        e: void 0,
                        x: void 0,
                        r: e
                    }, void 0 !== a.s && (a.s.n = e), a.s = e, t.n = e, 32 & a.f && t.S(e), e;
                    if (-1 === e.i) return e.i = 0, void 0 !== e.n && (e.n.p = e.p, void 0 !== e.p && (e.p.n = e.n), e.p = a.s, e.n = void 0, a.s.n = e, a.s = e), e
                }
            }

            function c(t) {
                this.v = t, this.i = 0, this.n = void 0, this.t = void 0
            }

            function f(t) {
                for (var e = t.s; void 0 !== e; e = e.n)
                    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
                return !1
            }

            function p(t) {
                for (var e = t.s; void 0 !== e; e = e.n) {
                    var i = e.S.n;
                    if (void 0 !== i && (e.r = i), e.S.n = e, e.i = -1, void 0 === e.n) {
                        t.s = e;
                        break
                    }
                }
            }

            function v(t) {
                for (var e = t.s, i = void 0; void 0 !== e;) {
                    var n = e.p; - 1 === e.i ? (e.S.U(e), void 0 !== n && (n.n = e.n), void 0 !== e.n && (e.n.p = n)) : i = e, e.S.n = e.r, void 0 !== e.r && (e.r = void 0), e = n
                }
                t.s = i
            }

            function _(t) {
                c.call(this, void 0), this.x = t, this.s = void 0, this.g = h - 1, this.f = 4
            }

            function m(t) {
                var e = t.u;
                if (t.u = void 0, "function" == typeof e) {
                    l++;
                    var i = a;
                    a = void 0;
                    try {
                        e()
                    } catch (e) {
                        throw t.f &= -2, t.f |= 8, y(t), e
                    } finally {
                        a = i, o()
                    }
                }
            }

            function y(t) {
                for (var e = t.s; void 0 !== e; e = e.n) e.S.U(e);
                t.x = void 0, t.s = void 0, m(t)
            }

            function g(t) {
                if (a !== this) throw Error("Out-of-order effect");
                v(this), a = t, this.f &= -2, 8 & this.f && y(this), o()
            }

            function b(t) {
                this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
            }
            c.prototype.h = function() {
                return !0
            }, c.prototype.S = function(t) {
                this.t !== t && void 0 === t.e && (t.x = this.t, void 0 !== this.t && (this.t.e = t), this.t = t)
            }, c.prototype.U = function(t) {
                if (void 0 !== this.t) {
                    var e = t.e,
                        i = t.x;
                    void 0 !== e && (e.x = i, t.e = void 0), void 0 !== i && (i.e = e, t.x = void 0), t === this.t && (this.t = i)
                }
            }, c.prototype.subscribe = function(t) {
                var e = this,
                    i = function() {
                        var i = e.value,
                            n = 32 & this.f;
                        this.f &= -33;
                        try {
                            t(i)
                        } finally {
                            this.f |= n
                        }
                    },
                    n = new b(i);
                try {
                    n.c()
                } catch (t) {
                    throw n.d(), t
                }
                return n.d.bind(n)
            }, c.prototype.valueOf = function() {
                return this.value
            }, c.prototype.toString = function() {
                return this.value + ""
            }, c.prototype.toJSON = function() {
                return this.value
            }, c.prototype.peek = function() {
                return this.v
            }, Object.defineProperty(c.prototype, "value", {
                get: function() {
                    var t = d(this);
                    return void 0 !== t && (t.i = this.i), this.v
                },
                set: function(t) {
                    if (a instanceof _ && function() {
                            throw Error("Computed cannot have side-effects")
                        }(), t !== this.v) {
                        u > 100 && r(), this.v = t, this.i++, h++, l++;
                        try {
                            for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
                        } finally {
                            o()
                        }
                    }
                }
            }), (_.prototype = new c).h = function() {
                if (this.f &= -3, 1 & this.f) return !1;
                if ((36 & this.f) == 32 || (this.f &= -5, this.g === h)) return !0;
                if (this.g = h, this.f |= 1, this.i > 0 && !f(this)) return this.f &= -2, !0;
                var t = a;
                try {
                    p(this), a = this;
                    var e = this.x();
                    (16 & this.f || this.v !== e || 0 === this.i) && (this.v = e, this.f &= -17, this.i++)
                } catch (t) {
                    this.v = t, this.f |= 16, this.i++
                }
                return a = t, v(this), this.f &= -2, !0
            }, _.prototype.S = function(t) {
                if (void 0 === this.t) {
                    this.f |= 36;
                    for (var e = this.s; void 0 !== e; e = e.n) e.S.S(e)
                }
                c.prototype.S.call(this, t)
            }, _.prototype.U = function(t) {
                if (void 0 !== this.t && (c.prototype.U.call(this, t), void 0 === this.t)) {
                    this.f &= -33;
                    for (var e = this.s; void 0 !== e; e = e.n) e.S.U(e)
                }
            }, _.prototype.N = function() {
                if (!(2 & this.f)) {
                    this.f |= 6;
                    for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                }
            }, _.prototype.peek = function() {
                if (this.h() || r(), 16 & this.f) throw this.v;
                return this.v
            }, Object.defineProperty(_.prototype, "value", {
                get: function() {
                    1 & this.f && r();
                    var t = d(this);
                    if (this.h(), void 0 !== t && (t.i = this.i), 16 & this.f) throw this.v;
                    return this.v
                }
            }), b.prototype.c = function() {
                var t = this.S();
                try {
                    if (8 & this.f || void 0 === this.x) return;
                    var e = this.x();
                    "function" == typeof e && (this.u = e)
                } finally {
                    t()
                }
            }, b.prototype.S = function() {
                1 & this.f && r(), this.f |= 1, this.f &= -9, m(this), p(this), l++;
                var t = a;
                return a = this, g.bind(this, t)
            }, b.prototype.N = function() {
                2 & this.f || (this.f |= 2, this.o = s, s = this)
            }, b.prototype.d = function() {
                this.f |= 8, 1 & this.f || y(this)
            };
            var w = class {
                setState(t) {
                    this._prevState = this._state.value, this._state.value = t
                }
                subscribe(t) {
                    return this._state.subscribe(e => t(e, this._prevState))
                }
                constructor(t) {
                    (0, n._)(this, "_state", void 0), (0, n._)(this, "_prevState", void 0), this._prevState = t, this._state = new c(t)
                }
            }
        },
        47920: function(t, e, i) {
            let n, r, o, a;
            i.d(e, {
                a: () => tF,
                b: () => tQ,
                c: () => tZ,
                d: () => t8,
                e: () => t5,
                f: () => t6,
                g: () => t4,
                h: () => t7,
                i: () => t9,
                j: () => et,
                k: () => ee,
                l: () => ei,
                m: () => en,
                n: () => er,
                o: () => eo,
                p: () => ea
            });
            var s, l = i(51116),
                u = {},
                h = function(t, e, i, n, r) {
                    var o = new Worker(u[e] || (u[e] = URL.createObjectURL(new Blob([t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                        type: "text/javascript"
                    }))));
                    return o.onmessage = function(t) {
                        var e = t.data,
                            i = e.$e$;
                        if (i) {
                            var n = Error(i[0]);
                            n.code = i[1], n.stack = i[2], r(n, null)
                        } else r(null, e)
                    }, o.postMessage(i, n), o
                },
                d = Uint8Array,
                c = Uint16Array,
                f = Int32Array,
                p = new d([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                v = new d([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                _ = new d([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                m = function(t, e) {
                    for (var i = new c(31), n = 0; n < 31; ++n) i[n] = e += 1 << t[n - 1];
                    for (var r = new f(i[30]), n = 1; n < 30; ++n)
                        for (var o = i[n]; o < i[n + 1]; ++o) r[o] = o - i[n] << 5 | n;
                    return {
                        b: i,
                        r: r
                    }
                },
                y = m(p, 2),
                g = y.b,
                b = y.r;
            g[28] = 258, b[258] = 28;
            var w = m(v, 0).b,
                S = new c(32768);
            for (s = 0; s < 32768; ++s) I = (61680 & (I = (52428 & (I = (43690 & s) >> 1 | (21845 & s) << 1)) >> 2 | (13107 & I) << 2)) >> 4 | (3855 & I) << 4, S[s] = ((65280 & I) >> 8 | (255 & I) << 8) >> 1;
            var I, s, L = function(t, e, i) {
                    for (var n, r = t.length, o = 0, a = new c(e); o < r; ++o) t[o] && ++a[t[o] - 1];
                    var s = new c(e);
                    for (o = 1; o < e; ++o) s[o] = s[o - 1] + a[o - 1] << 1;
                    if (i) {
                        n = new c(1 << e);
                        var l = 15 - e;
                        for (o = 0; o < r; ++o)
                            if (t[o])
                                for (var u = o << 4 | t[o], h = e - t[o], d = s[t[o] - 1]++ << h, f = d | (1 << h) - 1; d <= f; ++d) n[S[d] >> l] = u
                    } else
                        for (n = new c(r), o = 0; o < r; ++o) t[o] && (n[o] = S[s[t[o] - 1]++] >> 15 - t[o]);
                    return n
                },
                k = new d(288);
            for (s = 0; s < 144; ++s) k[s] = 8;
            for (s = 144; s < 256; ++s) k[s] = 9;
            for (s = 256; s < 280; ++s) k[s] = 7;
            for (s = 280; s < 288; ++s) k[s] = 8;
            var s, O = new d(32);
            for (s = 0; s < 32; ++s) O[s] = 5;
            var M = L(k, 9, 1),
                A = L(O, 5, 1),
                E = function(t) {
                    for (var e = t[0], i = 1; i < t.length; ++i) t[i] > e && (e = t[i]);
                    return e
                },
                P = function(t, e, i) {
                    var n = e / 8 | 0;
                    return (t[n] | t[n + 1] << 8) >> (7 & e) & i
                },
                C = function(t, e) {
                    var i = e / 8 | 0;
                    return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (7 & e)
                },
                T = function(t) {
                    return (t + 7) / 8 | 0
                },
                j = function(t, e, i) {
                    return (null == e || e < 0) && (e = 0), (null == i || i > t.length) && (i = t.length), new d(t.subarray(e, i))
                },
                x = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
                N = function(t, e, i) {
                    var n = Error(e || x[t]);
                    if (n.code = t, Error.captureStackTrace && Error.captureStackTrace(n, N), !i) throw n;
                    return n
                },
                F = function(t, e, i, n) {
                    var r = t.length,
                        o = n ? n.length : 0;
                    if (!r || e.f && !e.l) return i || new d(0);
                    var a = !i,
                        s = a || 2 != e.i,
                        l = e.i;
                    a && (i = new d(3 * r));
                    var u = function(t) {
                            var e = i.length;
                            if (t > e) {
                                var n = new d(Math.max(2 * e, t));
                                n.set(i), i = n
                            }
                        },
                        h = e.f || 0,
                        c = e.p || 0,
                        f = e.b || 0,
                        m = e.l,
                        y = e.d,
                        b = e.m,
                        S = e.n,
                        I = 8 * r;
                    do {
                        if (!m) {
                            h = P(t, c, 1);
                            var k = P(t, c + 1, 3);
                            if (c += 3, k)
                                if (1 == k) m = M, y = A, b = 9, S = 5;
                                else if (2 == k) {
                                var O = P(t, c, 31) + 257,
                                    x = P(t, c + 10, 15) + 4,
                                    F = O + P(t, c + 5, 31) + 1;
                                c += 14;
                                for (var D = new d(F), z = new d(19), V = 0; V < x; ++V) z[_[V]] = P(t, c + 3 * V, 7);
                                c += 3 * x;
                                for (var U = E(z), q = (1 << U) - 1, $ = L(z, U, 1), V = 0; V < F;) {
                                    var B = $[P(t, c, q)];
                                    c += 15 & B;
                                    var R = B >> 4;
                                    if (R < 16) D[V++] = R;
                                    else {
                                        var J = 0,
                                            H = 0;
                                        for (16 == R ? (H = 3 + P(t, c, 3), c += 2, J = D[V - 1]) : 17 == R ? (H = 3 + P(t, c, 7), c += 3) : 18 == R && (H = 11 + P(t, c, 127), c += 7); H--;) D[V++] = J
                                    }
                                }
                                var W = D.subarray(0, O),
                                    G = D.subarray(O);
                                b = E(W), S = E(G), m = L(W, b, 1), y = L(G, S, 1)
                            } else N(1);
                            else {
                                var R = T(c) + 4,
                                    Y = t[R - 4] | t[R - 3] << 8,
                                    K = R + Y;
                                if (K > r) {
                                    l && N(0);
                                    break
                                }
                                s && u(f + Y), i.set(t.subarray(R, K), f), e.b = f += Y, e.p = c = 8 * K, e.f = h;
                                continue
                            }
                            if (c > I) {
                                l && N(0);
                                break
                            }
                        }
                        s && u(f + 131072);
                        for (var Q = (1 << b) - 1, X = (1 << S) - 1, Z = c;; Z = c) {
                            var J = m[C(t, c) & Q],
                                tt = J >> 4;
                            if ((c += 15 & J) > I) {
                                l && N(0);
                                break
                            }
                            if (J || N(2), tt < 256) i[f++] = tt;
                            else if (256 == tt) {
                                Z = c, m = null;
                                break
                            } else {
                                var te = tt - 254;
                                if (tt > 264) {
                                    var V = tt - 257,
                                        ti = p[V];
                                    te = P(t, c, (1 << ti) - 1) + g[V], c += ti
                                }
                                var tn = y[C(t, c) & X],
                                    tr = tn >> 4;
                                tn || N(3), c += 15 & tn;
                                var G = w[tr];
                                if (tr > 3) {
                                    var ti = v[tr];
                                    G += C(t, c) & (1 << ti) - 1, c += ti
                                }
                                if (c > I) {
                                    l && N(0);
                                    break
                                }
                                s && u(f + 131072);
                                var to = f + te;
                                if (f < G) {
                                    var ta = o - G,
                                        ts = Math.min(G, to);
                                    for (ta + f < 0 && N(3); f < ts; ++f) i[f] = n[ta + f]
                                }
                                for (; f < to; ++f) i[f] = i[f - G]
                            }
                        }
                        e.l = m, e.p = Z, e.b = f, e.f = h, m && (h = 1, e.m = b, e.d = y, e.n = S)
                    } while (!h);
                    return f != i.length && a ? j(i, 0, f) : i.subarray(0, f)
                },
                D = new d(0),
                z = function(t, e) {
                    var i = {};
                    for (var n in t) i[n] = t[n];
                    for (var n in e) i[n] = e[n];
                    return i
                },
                V = function(t, e, i) {
                    for (var n = t(), r = t.toString(), o = r.slice(r.indexOf("[") + 1, r.lastIndexOf("]")).replace(/\s+/g, "").split(","), a = 0; a < n.length; ++a) {
                        var s = n[a],
                            l = o[a];
                        if ("function" == typeof s) {
                            e += ";" + l + "=";
                            var u = s.toString();
                            if (s.prototype)
                                if (-1 != u.indexOf("[native code]")) {
                                    var h = u.indexOf(" ", 8) + 1;
                                    e += u.slice(h, u.indexOf("(", h))
                                } else
                                    for (var d in e += u, s.prototype) e += ";" + l + ".prototype." + d + "=" + s.prototype[d].toString();
                            else e += u
                        } else i[l] = s
                    }
                    return e
                },
                U = [],
                q = function(t) {
                    var e = [];
                    for (var i in t) t[i].buffer && e.push((t[i] = new t[i].constructor(t[i])).buffer);
                    return e
                },
                $ = function(t, e, i, n) {
                    if (!U[i]) {
                        for (var r = "", o = {}, a = t.length - 1, s = 0; s < a; ++s) r = V(t[s], r, o);
                        U[i] = {
                            c: V(t[a], r, o),
                            e: o
                        }
                    }
                    var l = z({}, U[i].e);
                    return h(U[i].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", i, l, q(l), n)
                },
                B = function() {
                    return [d, c, f, p, v, _, g, w, M, A, S, x, L, E, P, C, T, j, N, F, K, R, J]
                },
                R = function(t) {
                    return postMessage(t, [t.buffer])
                },
                J = function(t) {
                    return t && {
                        out: t.size && new d(t.size),
                        dictionary: t.dictionary
                    }
                },
                H = function(t, e, i, n, r, o) {
                    var a = $(i, n, r, function(t, e) {
                        a.terminate(), o(t, e)
                    });
                    return a.postMessage([t, e], e.consume ? [t.buffer] : []),
                        function() {
                            a.terminate()
                        }
                },
                W = function(t, e) {
                    return t[e] | t[e + 1] << 8
                },
                G = function(t, e) {
                    return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
                },
                Y = function(t, e) {
                    return G(t, e) + 0x100000000 * G(t, e + 4)
                };

            function K(t, e) {
                return F(t, {
                    i: 2
                }, e && e.out, e && e.dictionary)
            }
            var Q = "u" > typeof TextDecoder && new TextDecoder;
            try {
                Q.decode(D, {
                    stream: !0
                })
            } catch {}
            var X = function(t) {
                for (var e = "", i = 0;;) {
                    var n = t[i++],
                        r = (n > 127) + (n > 223) + (n > 239);
                    if (i + r > t.length) return {
                        s: e,
                        r: j(t, i - 1)
                    };
                    r ? 3 == r ? e += String.fromCharCode(55296 | (n = ((15 & n) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536) >> 10, 56320 | 1023 & n) : 1 & r ? e += String.fromCharCode((31 & n) << 6 | 63 & t[i++]) : e += String.fromCharCode((15 & n) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) : e += String.fromCharCode(n)
                }
            };

            function Z(t, e) {
                if (e) {
                    for (var i = "", n = 0; n < t.length; n += 16384) i += String.fromCharCode.apply(null, t.subarray(n, n + 16384));
                    return i
                }
                if (Q) return Q.decode(t);
                var r = X(t),
                    o = r.s,
                    i = r.r;
                return i.length && N(8), o
            }
            var tt = function(t, e, i) {
                    var n = W(t, e + 28),
                        r = Z(t.subarray(e + 46, e + 46 + n), !(2048 & W(t, e + 8))),
                        o = e + 46 + n,
                        a = G(t, e + 20),
                        s = i && 0xffffffff == a ? te(t, o) : [a, G(t, e + 24), G(t, e + 42)],
                        l = s[0],
                        u = s[1],
                        h = s[2];
                    return [W(t, e + 10), l, u, r, o + W(t, e + 30) + W(t, e + 32), h]
                },
                te = function(t, e) {
                    for (; 1 != W(t, e); e += 4 + W(t, e + 2));
                    return [Y(t, e + 12), Y(t, e + 4), Y(t, e + 20)]
                },
                ti = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(t) {
                    t()
                },
                tn = class extends Error {
                    constructor(t) {
                        super(t[0].message), (0, l._)(this, "issues", void 0), this.name = "ValiError", this.issues = t
                    }
                };

            function tr(t, e, i, n) {
                if (!e || !e.length) return {
                    output: t
                };
                let r, o, a = t;
                for (let t of e) {
                    let e = t(a);
                    if (e.issue) {
                        var s, l;
                        let t = (s = r = r || {
                            reason: n,
                            origin: null == i ? void 0 : i.origin,
                            abortEarly: null == i ? void 0 : i.abortEarly,
                            abortPipeEarly: null == i ? void 0 : i.abortPipeEarly
                        }, l = e.issue, {
                            reason: null == s ? void 0 : s.reason,
                            validation: l.validation,
                            origin: (null == s ? void 0 : s.origin) || "value",
                            message: l.message,
                            input: l.input,
                            abortEarly: null == s ? void 0 : s.abortEarly,
                            abortPipeEarly: null == s ? void 0 : s.abortPipeEarly
                        });
                        if (o ? o.push(t) : o = [t], r.abortEarly || r.abortPipeEarly) break
                    } else a = e.output
                }
                return o ? {
                    issues: o
                } : {
                    output: a
                }
            }

            function to(t, e) {
                return t && "string" != typeof t ? [void 0, t] : [t, e]
            }

            function ta(t, e, i, n, r, o) {
                return {
                    issues: [{
                        reason: e,
                        validation: i,
                        origin: (null == t ? void 0 : t.origin) || "value",
                        message: n,
                        input: r,
                        issues: o,
                        abortEarly: null == t ? void 0 : t.abortEarly,
                        abortPipeEarly: null == t ? void 0 : t.abortPipeEarly
                    }]
                }
            }

            function ts(t, e, i) {
                let [n, r] = to(e, i);
                return {
                    schema: "array",
                    array: {
                        item: t
                    },
                    async: !1,
                    _parse(e, i) {
                        if (!Array.isArray(e)) return ta(i, "type", "array", n || "Invalid type", e);
                        let o, a = [];
                        for (let n = 0; n < e.length; n++) {
                            let r = e[n],
                                s = t._parse(r, i);
                            if (s.issues) {
                                let t = {
                                    schema: "array",
                                    input: e,
                                    key: n,
                                    value: r
                                };
                                for (let e of s.issues) e.path ? e.path.unshift(t) : e.path = [t], null == o || o.push(e);
                                if (o || (o = s.issues), null != i && i.abortEarly) break
                            } else a.push(s.output)
                        }
                        return o ? {
                            issues: o
                        } : tr(a, r, i, "array")
                    }
                }
            }

            function tl(t, e) {
                let [i, n] = to(t, e);
                return {
                    schema: "boolean",
                    async: !1,
                    _parse: (t, e) => "boolean" != typeof t ? ta(e, "type", "boolean", i || "Invalid type", t) : tr(t, n, e, "boolean")
                }
            }

            function tu(t, e) {
                return {
                    schema: "literal",
                    literal: t,
                    async: !1,
                    _parse: (i, n) => i !== t ? ta(n, "type", "literal", e || "Invalid type", i) : {
                        output: i
                    }
                }
            }

            function th(t, e) {
                let [i, n] = to(t, e);
                return {
                    schema: "number",
                    async: !1,
                    _parse: (t, e) => "number" != typeof t ? ta(e, "type", "number", i || "Invalid type", t) : tr(t, n, e, "number")
                }
            }

            function td(t, e, i) {
                let [n, r] = to(e, i), o;
                return {
                    schema: "object",
                    object: t,
                    async: !1,
                    _parse(e, i) {
                        if (!e || "object" != typeof e) return ta(i, "type", "object", n || "Invalid type", e);
                        o = o || Object.entries(t);
                        let a, s = {};
                        for (let [t, n] of o) {
                            let r = e[t],
                                o = n._parse(r, i);
                            if (o.issues) {
                                let n = {
                                    schema: "object",
                                    input: e,
                                    key: t,
                                    value: r
                                };
                                for (let t of o.issues) t.path ? t.path.unshift(n) : t.path = [n], null == a || a.push(t);
                                if (a || (a = o.issues), null != i && i.abortEarly) break
                            } else s[t] = o.output
                        }
                        return a ? {
                            issues: a
                        } : tr(s, r, i, "object")
                    }
                }
            }

            function tc(t) {
                return {
                    schema: "optional",
                    wrapped: t,
                    async: !1,
                    _parse: (e, i) => void 0 === e ? {
                        output: e
                    } : t._parse(e, i)
                }
            }

            function tf(t, e) {
                let [i, n] = to(t, e);
                return {
                    schema: "string",
                    async: !1,
                    _parse: (t, e) => "string" != typeof t ? ta(e, "type", "string", i || "Invalid type", t) : tr(t, n, e, "string")
                }
            }
            var tp = ["__proto__", "prototype", "constructor"];

            function tv(t, e, i, n) {
                let [r, o, a] = function(t, e, i) {
                    if ("object" == typeof t && !Array.isArray(t)) {
                        let [n, r] = to(e, i);
                        return [t, n, r]
                    }
                    let [n, r] = to(t, e);
                    return [void 0, n, r]
                }(e, i, n);
                return {
                    schema: "tuple",
                    tuple: {
                        items: t,
                        rest: r
                    },
                    async: !1,
                    _parse(e, i) {
                        if (!Array.isArray(e) || !r && t.length !== e.length || r && t.length > e.length) return ta(i, "type", "tuple", o || "Invalid type", e);
                        let n, s = [];
                        for (let r = 0; r < t.length; r++) {
                            let o = e[r],
                                a = t[r]._parse(o, i);
                            if (a.issues) {
                                let t = {
                                    schema: "tuple",
                                    input: e,
                                    key: r,
                                    value: o
                                };
                                for (let e of a.issues) e.path ? e.path.unshift(t) : e.path = [t], null == n || n.push(e);
                                if (n || (n = a.issues), null != i && i.abortEarly) break
                            } else s[r] = a.output
                        }
                        if (r)
                            for (let o = t.length; o < e.length; o++) {
                                let t = e[o],
                                    a = r._parse(t, i);
                                if (a.issues) {
                                    let r = {
                                        schema: "tuple",
                                        input: e,
                                        key: o,
                                        value: t
                                    };
                                    for (let t of a.issues) t.path ? t.path.unshift(r) : t.path = [r], null == n || n.push(t);
                                    if (n || (n = a.issues), null != i && i.abortEarly) break
                                } else s[o] = a.output
                            }
                        return n ? {
                            issues: n
                        } : tr(s, a, i, "tuple")
                    }
                }
            }

            function t_(t, e) {
                return {
                    schema: "union",
                    union: t,
                    async: !1,
                    _parse(i, n) {
                        let r, o;
                        for (let e of t) {
                            let t = e._parse(i, n);
                            if (t.issues)
                                if (r)
                                    for (let e of t.issues) r.push(e);
                                else r = t.issues;
                            else {
                                o = [t.output];
                                break
                            }
                        }
                        return o ? {
                            output: o[0]
                        } : ta(n, "type", "union", e || "Invalid type", i, r)
                    }
                }
            }

            function tm(t, e, i) {
                let [n, r] = to(e, i);
                return td(t.reduce((t, e) => ({
                    ...t,
                    ...e.object
                }), {}), n, r)
            }

            function ty(t, e) {
                return i => i > t ? {
                    issue: {
                        validation: "max_value",
                        message: e || "Invalid value",
                        input: i
                    }
                } : {
                    output: i
                }
            }

            function tg(t, e) {
                return i => i < t ? {
                    issue: {
                        validation: "min_value",
                        message: e || "Invalid value",
                        input: i
                    }
                } : {
                    output: i
                }
            }
            var tb = Object.create,
                tw = Object.defineProperty,
                tS = Object.getOwnPropertyDescriptor,
                tI = Object.getOwnPropertyNames,
                tL = Object.getPrototypeOf,
                tk = Object.prototype.hasOwnProperty,
                tO = (t, e) => function() {
                    return e || (0, t[tI(t)[0]])((e = {
                        exports: {}
                    }).exports, e), e.exports
                },
                tM = tO({
                    "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.copy = void 0, t.copy = function(t, e) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t.width - i,
                                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t.height - n,
                                a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
                            if (i |= 0, n |= 0, o |= 0, a |= 0, s |= 0, (r |= 0) <= 0 || o <= 0) return;
                            let l = new Uint32Array(t.data.buffer),
                                u = new Uint32Array(e.data.buffer);
                            for (let h = 0; h < o; h++) {
                                let o = n + h;
                                if (o < 0 || o >= t.height) continue;
                                let d = s + h;
                                if (!(d < 0 || d >= e.height))
                                    for (let n = 0; n < r; n++) {
                                        let r = i + n;
                                        if (r < 0 || r >= t.width) continue;
                                        let s = a + n;
                                        if (s < 0 || s >= e.width) continue;
                                        let h = o * t.width + r;
                                        u[d * e.width + s] = l[h]
                                    }
                            }
                        }
                    }
                }),
                tA = tO({
                    "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.CreateImageFactory = function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0],
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                            if (isNaN(e = Math.floor(e)) || e < 1) throw TypeError("channels should be a positive non-zero number");
                            if (!("length" in t) || t.length < e) throw TypeError(`fill should be iterable with at least ${e} members`);
                            let i = (t = new Uint8ClampedArray(t).slice(0, e)).every(t => 0 === t);
                            return (n, r, o) => {
                                if (void 0 === n || void 0 === r) throw TypeError("Not enough arguments");
                                if (n = Math.floor(n), r = Math.floor(r), isNaN(n) || n < 1 || isNaN(r) || r < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                                let a = n * r * e;
                                if (void 0 === o && (o = new Uint8ClampedArray(a)), o instanceof Uint8ClampedArray) {
                                    if (o.length !== a) throw TypeError("Index or size is negative or greater than the allowed amount");
                                    if (!i)
                                        for (let i = 0; i < r; i++)
                                            for (let r = 0; r < n; r++) {
                                                let a = (i * n + r) * e;
                                                for (let i = 0; i < e; i++) o[a + i] = t[i]
                                            }
                                    return {
                                        get width() {
                                            return n
                                        },
                                        get height() {
                                            return r
                                        },
                                        get data() {
                                            return o
                                        }
                                    }
                                }
                                throw TypeError("Expected data to be Uint8ClampedArray or undefined")
                            }
                        }, t.createImage = t.CreateImageFactory()
                    }
                }),
                tE = tO({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.filters = void 0;
                        var e = (t, e) => {
                                if (t <= -e || t >= e || 0 == t) return 0;
                                let i = t * Math.PI;
                                return Math.sin(i) / i * Math.sin(i / e) / (i / e)
                            },
                            i = t => Math.round(16383 * t);
                        t.filters = (t, n, r, o, a) => {
                            let s = a ? 2 : 3,
                                l = 1 / r,
                                u = Math.min(1, r),
                                h = s / u,
                                d = new Int16Array((Math.floor((h + 1) * 2) + 2) * n),
                                c = 0;
                            for (let r = 0; r < n; r++) {
                                let a = (r + .5) * l + o,
                                    f = Math.max(0, Math.floor(a - h)),
                                    p = Math.min(t - 1, Math.ceil(a + h)),
                                    v = p - f + 1,
                                    _ = new Float32Array(v),
                                    m = new Int16Array(v),
                                    y = 0,
                                    g = 0;
                                for (let t = f; t <= p; t++) {
                                    let i = e((t + .5 - a) * u, s);
                                    y += i, _[g] = i, g++
                                }
                                let b = 0;
                                for (let t = 0; t < _.length; t++) {
                                    let e = _[t] / y;
                                    b += e, m[t] = i(e)
                                }
                                m[n >> 1] += i(1 - b);
                                let w = 0;
                                for (; w < m.length && 0 === m[w];) w++;
                                let S = m.length - 1;
                                for (; S > 0 && 0 === m[S];) S--;
                                let I = f + w,
                                    L = S - w + 1;
                                d[c++] = I, d[c++] = L, d.set(m.subarray(w, S + 1), c), c += L
                            }
                            return d
                        }
                    }
                }),
                tP = tO({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.convolve = void 0, t.convolve = (t, e, i, n, r, o) => {
                            let a = 0,
                                s = 0;
                            for (let l = 0; l < n; l++) {
                                let u = 0;
                                for (let i = 0; i < r; i++) {
                                    let i = a + 4 * o[u++] | 0,
                                        r = 0,
                                        l = 0,
                                        h = 0,
                                        d = 0;
                                    for (let e = o[u++]; e > 0; e--) {
                                        let e = o[u++];
                                        r = r + e * t[i] | 0, l = l + e * t[i + 1] | 0, h = h + e * t[i + 2] | 0, d = d + e * t[i + 3] | 0, i = i + 4 | 0
                                    }
                                    e[s] = r + 8192 >> 14, e[s + 1] = l + 8192 >> 14, e[s + 2] = h + 8192 >> 14, e[s + 3] = d + 8192 >> 14, s = s + 4 * n | 0
                                }
                                s = (l + 1) * 4 | 0, a = (l + 1) * i * 4 | 0
                            }
                        }
                    }
                }),
                tC = tO({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.lanczos2 = t.lanczos = void 0;
                        var e = tM(),
                            i = tA(),
                            n = tE(),
                            r = tP(),
                            o = function(t, e) {
                                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    o = e.width / t.width,
                                    a = e.height / t.height,
                                    s = n.filters(t.width, e.width, o, 0, i),
                                    l = n.filters(t.height, e.height, a, 0, i),
                                    u = new Uint8ClampedArray(e.width * t.height * 4);
                                r.convolve(t.data, u, t.width, t.height, e.width, s), r.convolve(u, e.data, t.height, e.width, e.height, l)
                            };
                        t.lanczos = function(t, n) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t.width - r,
                                l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t.height - a,
                                u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                                d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - u,
                                c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - h;
                            if (r |= 0, a |= 0, l |= 0, u |= 0, h |= 0, d |= 0, c |= 0, (s |= 0) <= 0 || l <= 0 || d <= 0 || c <= 0) return;
                            if (0 === r && 0 === a && s === t.width && l === t.height && 0 === u && 0 === h && d === n.width && c === n.height) return void o(t, n);
                            let f = i.createImage(s, l),
                                p = i.createImage(d, c);
                            e.copy(t, f, r, a), o(f, p), e.copy(p, n, 0, 0, p.width, p.height, u, h)
                        }, t.lanczos2 = function(t, n) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t.width - r,
                                l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t.height - a,
                                u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                                d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - u,
                                c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - h;
                            if (r |= 0, a |= 0, l |= 0, u |= 0, h |= 0, d |= 0, c |= 0, (s |= 0) <= 0 || l <= 0 || d <= 0 || c <= 0) return;
                            if (0 === r && 0 === a && s === t.width && l === t.height && 0 === u && 0 === h && d === n.width && c === n.height) return void o(t, n, !0);
                            let f = i.createImage(s, l),
                                p = i.createImage(d, c);
                            e.copy(t, f, r, a), o(f, p, !0), e.copy(p, n, 0, 0, p.width, p.height, u, h)
                        }
                    }
                }),
                tT = ((n = tT || {}).Bounce = "bounce", n.Normal = "normal", n),
                tj = td({
                    autoplay: tc(tl()),
                    defaultTheme: tc(tf()),
                    direction: tc(t_([tu(1), tu(-1)])),
                    hover: tc(tl()),
                    id: tf(),
                    intermission: tc(th()),
                    loop: tc(t_([tl(), th()])),
                    playMode: tc({
                        schema: "native_enum",
                        nativeEnum: tT,
                        async: !1,
                        _parse: (t, e) => Object.values(tT).includes(t) ? {
                            output: t
                        } : ta(e, "type", "native_enum", "Invalid type", t)
                    }),
                    speed: tc(th()),
                    themeColor: tc(tf())
                }),
                tx = td({
                    animations: ts(tf()),
                    id: tf()
                }),
                tN = td({
                    activeAnimationId: tc(tf()),
                    animations: ts(tj),
                    author: tc(tf()),
                    custom: tc(function(t, e, i, n) {
                        let [r, o, a, s] = function(t, e, i, n) {
                            if ("object" == typeof e && !Array.isArray(e)) {
                                let [r, o] = to(i, n);
                                return [t, e, r, o]
                            }
                            let [r, o] = to(e, i);
                            return [tf(), t, r, o]
                        }(t, e, void 0, void 0);
                        return {
                            schema: "record",
                            record: {
                                key: r,
                                value: o
                            },
                            async: !1,
                            _parse(t, e) {
                                if (!t || "object" != typeof t) return ta(e, "type", "record", a || "Invalid type", t);
                                let i, n = {};
                                for (let [a, s] of Object.entries(t))
                                    if (!tp.includes(a)) {
                                        let l, u = r._parse(a, {
                                            origin: "key",
                                            abortEarly: null == e ? void 0 : e.abortEarly,
                                            abortPipeEarly: null == e ? void 0 : e.abortPipeEarly
                                        });
                                        if (u.issues) {
                                            for (let e of (l = {
                                                    schema: "record",
                                                    input: t,
                                                    key: a,
                                                    value: s
                                                }, u.issues)) e.path = [l], null == i || i.push(e);
                                            if (i || (i = u.issues), null != e && e.abortEarly) break
                                        }
                                        let h = o._parse(s, e);
                                        if (h.issues) {
                                            for (let e of (l = l || {
                                                    schema: "record",
                                                    input: t,
                                                    key: a,
                                                    value: s
                                                }, h.issues)) e.path ? e.path.unshift(l) : e.path = [l], null == i || i.push(e);
                                            if (i || (i = h.issues), null != e && e.abortEarly) break
                                        }
                                        u.issues || h.issues || (n[u.output] = h.output)
                                    } return i ? {
                                    issues: i
                                } : tr(n, s, e, "record")
                            }
                        }
                    }(tf(), function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return {
                            schema: "any",
                            async: !1,
                            _parse: (e, i) => tr(e, t, i, "any")
                        }
                    }())),
                    description: tc(tf()),
                    generator: tc(tf()),
                    keywords: tc(tf()),
                    revision: tc(th()),
                    themes: tc(ts(tx)),
                    states: tc(ts(tf())),
                    version: tc(tf())
                }),
                tF = function(t, e, i, n) {
                    let [r, o] = to(void 0, void 0);
                    return td(Object.entries(t.object).reduce((t, i) => {
                        let [n, r] = i;
                        return e.includes(n) ? t : {
                            ...t,
                            [n]: r
                        }
                    }, {}), r, o)
                }(tj, ["id"]),
                tD = td({
                    state: tf()
                }),
                tz = tm([tD, td({
                    ms: th()
                })]),
                tV = tm([tD, td({
                    count: th()
                })]),
                tU = tm([tD, td({
                    threshold: tc(ts(th([tg(0), ty(1)])))
                })]),
                tq = td({
                    onAfter: tc(tz),
                    onClick: tc(tD),
                    onComplete: tc(tD),
                    onEnter: tc(tV),
                    onMouseEnter: tc(tD),
                    onMouseLeave: tc(tD),
                    onShow: tc(tU)
                }),
                t$ = tm([tF, td({
                    playOnScroll: tc(tv([th([tg(0), ty(1)]), th([tg(0), ty(1)])])),
                    segments: tc(t_([tv([th(), th()]), tf()]))
                })]);
            tm([tq, td({
                animationId: tc(tf()),
                playbackSettings: t$
            })]);
            var tB = {
                    jpeg: "image/jpeg",
                    png: "image/png",
                    gif: "image/gif",
                    bmp: "image/bmp",
                    svg: "image/svg+xml",
                    webp: "image/webp",
                    mpeg: "audio/mpeg",
                    mp3: "audio/mp3"
                },
                tR = {
                    jpeg: [255, 216, 255],
                    png: [137, 80, 78, 71, 13, 10, 26, 10],
                    gif: [71, 73, 70],
                    bmp: [66, 77],
                    webp: [82, 73, 70, 70, 87, 69, 66, 80],
                    svg: [60, 63, 120],
                    mp3: [73, 68, 51, 3, 0, 0, 0, 0],
                    mpeg: [73, 68, 51, 3, 0, 0, 0, 0]
                },
                tJ = class extends Error {
                    constructor(t, e) {
                        super(t), ((t, e, i) => {
                            let n;
                            return (n = "symbol" != typeof e ? e + "" : e) in t ? tw(t, n, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: i
                            }) : t[n] = i
                        })(this, "code"), this.name = "[dotlottie-js]", this.code = e
                    }
                };

            function tH(t) {
                let e;
                if (typeof window > "u") e = Buffer.from(t).toString("base64");
                else {
                    let i = Array.prototype.map.call(t, t => String.fromCharCode(t)).join("");
                    e = window.btoa(i)
                }
                return `data:${(t=>{let e=null,i=[];if(!t)return null;let n=t.substring(t.indexOf(",")+1),r=new Uint8Array((e=typeof window>"u"?Buffer.from(n,"base64").toString("binary"):atob(n)).length);for(let t=0;t<e.length;t+=1)r[t]=e.charCodeAt(t);for(let t in i=Array.from(r.subarray(0,8)),tR){let e=tR[t];if(e&&i.every((t,i)=>t===e[i]))return tB[t]}return null})(e)};base64,${e}`
            }

            function tW(t) {
                return "w" in t && "h" in t && !("xt" in t) && "p" in t
            }

            function tG(t) {
                return !("h" in t) && !("w" in t) && "p" in t && "e" in t && "u" in t && "id" in t
            }
            async function tY(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
                if (!(t instanceof Uint8Array)) throw new tJ("DotLottie not found", "INVALID_DOTLOTTIE");
                return await new Promise((i, n) => {
                    ! function(t, e, i) {
                        i || (i = e, e = {}), "function" != typeof i && N(7);
                        var n = [],
                            r = function() {
                                for (var t = 0; t < n.length; ++t) n[t]()
                            },
                            o = {},
                            a = function(t, e) {
                                ti(function() {
                                    i(t, e)
                                })
                            };
                        ti(function() {
                            a = i
                        });
                        for (var s = t.length - 22; 0x6054b50 != G(t, s); --s)
                            if (!s || t.length - s > 65558) return a(N(13, 0, 1), null), r;
                        var l = W(t, s + 8);
                        if (l) {
                            var u = l,
                                h = G(t, s + 16),
                                c = 0xffffffff == h || 65535 == u;
                            if (c) {
                                var f = G(t, s - 12);
                                (c = 0x6064b50 == G(t, f)) && (u = l = G(t, f + 32), h = G(t, f + 48))
                            }
                            for (var p = e && e.filter, v = 0; v < u; ++v) ! function(e) {
                                var i = tt(t, h, c),
                                    s = i[0],
                                    u = i[1],
                                    f = i[2],
                                    v = i[3],
                                    _ = i[4],
                                    m = i[5],
                                    y = m + 30 + W(t, m + 26) + W(t, m + 28);
                                h = _;
                                var g = function(t, e) {
                                    t ? (r(), a(t, null)) : (e && (o[v] = e), --l || a(null, o))
                                };
                                if (!p || p({
                                        name: v,
                                        size: u,
                                        originalSize: f,
                                        compression: s
                                    }))
                                    if (s)
                                        if (8 == s) {
                                            var b, w, S = t.subarray(y, y + u);
                                            if (u < 32e4) try {
                                                g(null, K(S, {
                                                    out: new d(f)
                                                }))
                                            } catch (t) {
                                                g(t, null)
                                            } else n.push((b = {
                                                size: f
                                            }, (w = g) || (w = b, b = {}), "function" != typeof w && N(7), H(S, b, [B], function(t) {
                                                return R(K(t.data[0], J(t.data[1])))
                                            }, 1, w)))
                                        } else g(N(14, "unknown compression type " + s, 1), null);
                                else g(null, j(t, y, y + u));
                                else g(null, null)
                            }(0)
                        } else a(null, {})
                    }(t, {
                        filter: e
                    }, (t, e) => {
                        t && n(t), i(e)
                    })
                })
            }
            async function tK(t, e, i) {
                if (!(t instanceof Uint8Array)) throw new tJ("DotLottie not found", "INVALID_DOTLOTTIE");
                return (await tY(t, t => t.name === e && (!i || i(t))))[e]
            }
            async function tQ(t) {
                let e = "manifest.json",
                    i = (await tY(t, t => t.name === e))[e];
                if (!(typeof i > "u")) return JSON.parse(Z(i, !1))
            }
            async function tX(t) {
                var e;
                let i;
                if (!(t instanceof Uint8Array)) return {
                    success: !1,
                    error: "DotLottie not found"
                };
                let n = await tQ(t);
                if (typeof n > "u") return {
                    success: !1,
                    error: "Invalid .lottie file, manifest.json is missing"
                };
                let r = (i = tN._parse(n, void 0)).issues ? {
                    success: !1,
                    error: new tn(i.issues),
                    issues: i.issues
                } : {
                    success: !0,
                    data: i.output,
                    output: i.output
                };
                return r.success ? {
                    success: !0
                } : {
                    success: !1,
                    error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify((Array.isArray(e=r.error)?e:e.issues).reduce((t,e)=>{if(e.path){let i=e.path.map(t=>{let{key:e}=t;return e}).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t},{nested:{}}).nested,null,2)}`
                }
            }
            async function tZ(t) {
                let e = new Uint8Array(t),
                    i = await tX(e);
                if (i.error) throw new tJ(i.error, "INVALID_DOTLOTTIE");
                return e
            }
            async function t0(t, e) {
                let i = await tY(t, t => {
                        let i = t.name.replace("audio/", "");
                        return t.name.startsWith("audio/") && (!e || e({
                            ...t,
                            name: i
                        }))
                    }),
                    n = {};
                for (let t in i) {
                    let e = i[t];
                    e instanceof Uint8Array && (n[t.replace("audio/", "")] = tH(e))
                }
                return n
            }
            async function t1(t, e) {
                var i;
                let n = new Map;
                for (let [t, r] of Object.entries(e))
                    for (let e of r.assets || [])
                        if (tG(e)) {
                            let r = e.p;
                            n.has(r) || n.set(r, new Set), null == (i = n.get(r)) || i.add(t)
                        } let r = await t0(t, t => n.has(t.name));
                for (let [t, i] of n) {
                    let n = r[t];
                    if (n)
                        for (let r of i) {
                            let i = e[r];
                            for (let e of (null == i ? void 0 : i.assets) || []) tG(e) && e.p === t && (e.p = n, e.u = "", e.e = 1)
                        }
                }
            }
            async function t2(t, e) {
                let i = await tY(t, t => {
                        let i = t.name.replace("images/", "");
                        return t.name.startsWith("images/") && (!e || e({
                            ...t,
                            name: i
                        }))
                    }),
                    n = {};
                for (let t in i) {
                    let e = i[t];
                    e instanceof Uint8Array && (n[t.replace("images/", "")] = tH(e))
                }
                return n
            }
            async function t3(t, e) {
                var i;
                let n = new Map;
                for (let [t, r] of Object.entries(e))
                    for (let e of r.assets || [])
                        if (tW(e)) {
                            let r = e.p;
                            n.has(r) || n.set(r, new Set), null == (i = n.get(r)) || i.add(t)
                        } let r = await t2(t, t => n.has(t.name));
                for (let [t, i] of n) {
                    let n = r[t];
                    if (n)
                        for (let r of i) {
                            let i = e[r];
                            for (let e of (null == i ? void 0 : i.assets) || []) tW(e) && e.p === t && (e.p = n, e.u = "", e.e = 1)
                        }
                }
            }
            async function t8(t, e) {
                let {
                    inlineAssets: i
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0, r = `animations/${e}.json`, o = await tK(t, r, n);
                if (typeof o > "u") return;
                let a = JSON.parse(Z(o, !1));
                if (!i) return a;
                let s = {
                    [e]: a
                };
                return await t3(t, s), await t1(t, s), a
            }
            async function t5(t, e, i) {
                let n = `themes/${e}.json`,
                    r = await tK(t, n, i);
                if (!(typeof r > "u")) return JSON.parse(Z(r, !1))
            }
            async function t6(t, e) {
                let i = {},
                    n = await tY(t, t => {
                        let i = t.name.replace("states/", "").replace(".json", "");
                        return t.name.startsWith("states/") && (!e || e({
                            ...t,
                            name: i
                        }))
                    });
                for (let t in n) {
                    let e = n[t];
                    e instanceof Uint8Array && (i[t.replace("states/", "").replace(".json", "")] = Z(e, !1))
                }
                return i
            }
            async function t4(t, e, i) {
                let n = `states/${e}.json`,
                    r = await tK(t, n, i);
                return typeof r > "u" ? void 0 : JSON.parse(Z(r, !1))
            }

            function t7(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                return Error(`[${e}]: ${t}`)
            }

            function t9(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
                console.error(`[${e}]:`, t, ...n)
            }

            function et(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
                console.warn(`[${e}]:`, t, ...n)
            }

            function ee() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = t.trim(),
                    i = e.lastIndexOf("/"),
                    n = e.substring(i + 1),
                    r = n.indexOf(".");
                return -1 !== r ? n.substring(0, r) : n
            }

            function ei(t) {
                return ["v", "ip", "op", "layers", "fr", "w", "h"].every(e => Object.prototype.hasOwnProperty.call(t, e))
            }

            function en(t) {
                let e = t.assets;
                return !!e && e.some(t => tG(t))
            }

            function er(t) {
                try {
                    let e = JSON.parse(t);
                    return ei(e)
                } catch {
                    return !1
                }
            }

            function eo(t, e) {
                let i = Object.keys(t).find(i => t[i] === e);
                if (void 0 === i) throw Error("Value not found in the object.");
                return i
            }

            function ea(t) {
                return JSON.parse(JSON.stringify(t))
            }
            a = null != (r = tC()) ? tb(tL(r)) : {}, ((t, e, i, n) => {
                if (e && "object" == typeof e || "function" == typeof e)
                    for (let r of tI(e)) tk.call(t, r) || r === i || tw(t, r, {
                        get: () => e[r],
                        enumerable: !(n = tS(e, r)) || n.enumerable
                    })
            })(!o && r && r.__esModule ? a : tw(a, "default", {
                value: r,
                enumerable: !0
            }), r)
        },
        76275: function(t, e, i) {
            let n, r, o;
            i.d(e, {
                a: () => c,
                b: () => f,
                d: () => v,
                e: () => _,
                f: () => m
            });
            var a = i(51116),
                s = i(47733),
                l = i(28924),
                u = i(36157),
                h = i(47920),
                d = "^5.12.2",
                c = ((n = c || {}).Complete = "complete", n.DataFail = "data_fail", n.DataReady = "data_ready", n.Error = "error", n.Frame = "frame", n.Freeze = "freeze", n.LoopComplete = "loopComplete", n.Pause = "pause", n.Play = "play", n.Ready = "ready", n.Stop = "stop", n.VisibilityChange = "visibilityChange", n),
                f = ((r = f || {}).Completed = "completed", r.Error = "error", r.Fetching = "fetching", r.Frozen = "frozen", r.Initial = "initial", r.Loading = "loading", r.Paused = "paused", r.Playing = "playing", r.Ready = "ready", r.Stopped = "stopped", r),
                p = ((o = p || {}).Bounce = "bounce", o.Normal = "normal", o),
                v = {
                    autoplay: !1,
                    direction: 1,
                    hover: !1,
                    intermission: 0,
                    loop: !1,
                    playMode: "normal",
                    speed: 1,
                    defaultTheme: ""
                },
                _ = {
                    activeStateId: "",
                    autoplay: !1,
                    currentState: "initial",
                    frame: 0,
                    seeker: 0,
                    direction: 1,
                    hover: !1,
                    loop: !1,
                    playMode: "normal",
                    speed: 1,
                    background: "transparent",
                    intermission: 0,
                    currentAnimationId: void 0,
                    visibilityPercentage: 0
                },
                m = class {
                    _listenToHover() {
                        var t, e, i, n;
                        let r = () => {
                                this._hover && "playing" !== this.currentState && this.play()
                            },
                            o = () => {
                                this._hover && "playing" === this.currentState && this.stop()
                            };
                        null == (t = this._container) || t.removeEventListener("mouseenter", r), null == (e = this._container) || e.removeEventListener("mouseleave", o), null == (i = this._container) || i.addEventListener("mouseleave", o), null == (n = this._container) || n.addEventListener("mouseenter", r)
                    }
                    _onVisibilityChange() {
                        !this._lottie || typeof document > "u" || (document.hidden && "playing" === this.currentState ? this.freeze() : "frozen" === this.currentState && this.unfreeze())
                    }
                    _listenToVisibilityChange() {
                        "u" > typeof document && "u" > typeof document.hidden && document.addEventListener("visibilitychange", () => this._onVisibilityChange())
                    }
                    _getOption(t) {
                        var e;
                        if ("u" > typeof this._userPlaybackOptions[t]) return this._userPlaybackOptions[t];
                        let i = null == (e = this._dotLottieLoader.manifest) ? void 0 : e.animations.find(t => t.id === this._currentAnimationId);
                        return i && "u" > typeof i[t] ? i[t] : v[t]
                    }
                    _getPlaybackOptions() {
                        let t = {};
                        for (let e in v) "u" > typeof v[e] && (t[e] = this._getOption(e));
                        return t
                    }
                    _setPlayerState(t) {
                        var e, i, n;
                        let r = t(this._getPlaybackOptions());
                        try {
                            h.a._parse(r)
                        } catch {
                            (0, h.j)(`Invalid PlaybackOptions, ${JSON.stringify(r,null,2)}`);
                            return
                        }
                        "u" > typeof r.defaultTheme && (this._defaultTheme = r.defaultTheme), "u" > typeof r.playMode && (this._mode = r.playMode), "u" > typeof r.intermission && (this._intermission = r.intermission), "u" > typeof r.hover && (this._hover = r.hover), "u" > typeof r.loop && (this.clearCountTimer(), this._loop = r.loop, this._counter = 0, null == (e = this._lottie) || e.setLoop("number" == typeof r.loop || r.loop)), "u" > typeof r.speed && (null == (i = this._lottie) || i.setSpeed(r.speed)), "u" > typeof r.autoplay && this._lottie && (this._lottie.autoplay = r.autoplay), "u" > typeof r.direction && (null == (n = this._lottie) || n.setDirection(r.direction))
                    }
                    _getOptionsFromAnimation(t) {
                        let {
                            id: e,
                            ...i
                        } = t;
                        return {
                            ...v,
                            ...i
                        }
                    }
                    _updateTestData() {
                        this._testId && this._lottie && (window.dotLottiePlayer || (window.dotLottiePlayer = {
                            [this._testId]: {}
                        }), window.dotLottiePlayer[this._testId] = {
                            direction: this._lottie.playDirection,
                            currentState: this._currentState,
                            loop: this.loop,
                            mode: this._mode,
                            speed: this._lottie.playSpeed
                        })
                    }
                    setContainer(t) {
                        t !== this._container && (this._container = t, this.setBackground(this._background), this._listenToHover())
                    }
                    get currentState() {
                        return this._currentState
                    }
                    clearCountTimer() {
                        this._counterInterval && clearInterval(this._counterInterval)
                    }
                    setCurrentState(t) {
                        this._currentState = t, this._notify(), this._updateTestData()
                    }
                    static isPathJSON(t) {
                        var e;
                        return (null == (e = t.split(".").pop()) ? void 0 : e.toLowerCase()) === "json"
                    }
                    get src() {
                        return this._src
                    }
                    updateSrc(t) {
                        this._src !== t && ("string" == typeof t ? this._src = t : this._src = (0, h.p)(t), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load())
                    }
                    get intermission() {
                        return this._intermission
                    }
                    get hover() {
                        return this._hover
                    }
                    setHover(t) {
                        "boolean" == typeof t && (this._hover = t, this._userPlaybackOptions.hover = t, this._notify())
                    }
                    setIntermission(t) {
                        this._intermission = t, this._userPlaybackOptions.intermission = t, this._notify()
                    }
                    get mode() {
                        return this._mode
                    }
                    get animations() {
                        return this._dotLottieLoader.animationsMap
                    }
                    get themes() {
                        return this._dotLottieLoader.themeMap
                    }
                    setMode(t) {
                        "string" == typeof t && (this._mode = t, this._userPlaybackOptions.playMode = t, this._setPlayerState(() => ({
                            playMode: t
                        })), this._notify(), this._updateTestData())
                    }
                    get container() {
                        if (this._container) return this._container
                    }
                    goToAndPlay(t, e, i) {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("goToAndPlay() Can't use whilst loading.") : (this._lottie.goToAndPlay(t, e, i), this.setCurrentState("playing"))
                    }
                    goToAndStop(t, e, i) {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("goToAndStop() Can't use whilst loading.") : (this._lottie.goToAndStop(t, e, i), this.setCurrentState("stopped"))
                    }
                    seek(t) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) return void(0, h.j)("seek() Can't use whilst loading.");
                        let e = t;
                        "number" == typeof e && (e = Math.round(e));
                        let i = /^(\d+)(%?)$/u.exec(e.toString());
                        if (!i) return;
                        let n = "%" === i[2] ? this.totalFrames * Number(i[1]) / 100 : i[1];
                        void 0 !== n && (this._lottie.goToAndPlay(n, !0), "playing" === this.currentState ? this.play() : "frozen" === this.currentState ? this.freeze() : this.pause())
                    }
                    _areNumbersInRange(t, e) {
                        return t >= 0 && t <= 1 && e >= 0 && e <= 1
                    }
                    _updatePosition(t, e, i) {
                        let [n, r] = null != t ? t : [0, this.totalFrames - 1], [o, a] = null != e ? e : [0, 1];
                        if (!this._areNumbersInRange(o, a)) return void(0, h.i)("threshold values must be between 0 and 1");
                        if (this.container) {
                            let {
                                height: t,
                                top: e
                            } = this.container.getBoundingClientRect(), s = (window.innerHeight - e) / (window.innerHeight + t), l = n + Math.round((s - o) / (a - o) * (r - n));
                            i && i(s), this.goToAndStop(l, !0), (l >= r || s >= a) && this._handleAnimationComplete()
                        }
                        this._scrollTicking = !1
                    }
                    _requestTick(t, e, i) {
                        this._scrollTicking || (requestAnimationFrame(() => this._updatePosition(t, e, i)), this._scrollTicking = !0)
                    }
                    playOnScroll(t) {
                        this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = () => this._requestTick(null == t ? void 0 : t.segments, null == t ? void 0 : t.threshold, null == t ? void 0 : t.positionCallback), window.addEventListener("scroll", this._scrollCallback)
                    }
                    stopPlayOnScroll() {
                        this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0)
                    }
                    stopPlayOnShow() {
                        this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0)
                    }
                    addIntersectionObserver(t) {
                        if (!this.container) throw (0, h.h)("Can't play on show, player container element not available.");
                        let e = {
                                root: null,
                                rootMargin: "0px",
                                threshold: null != t && t.threshold ? t.threshold : [0, 1]
                            },
                            i = e => {
                                e.forEach(e => {
                                    var i, n;
                                    this._visibilityPercentage = 100 * e.intersectionRatio, e.isIntersecting ? (null != t && t.callbackOnIntersect && t.callbackOnIntersect(this._visibilityPercentage), null == (i = this._container) || i.dispatchEvent(new Event("visibilityChange"))) : null != t && t.callbackOnIntersect && (t.callbackOnIntersect(0), null == (n = this._container) || n.dispatchEvent(new Event("visibilityChange")))
                                })
                            };
                        this._onShowIntersectionObserver = new IntersectionObserver(i, e), this._onShowIntersectionObserver.observe(this.container)
                    }
                    playOnShow(t) {
                        var e;
                        if (this.stop(), !this.container) throw (0, h.h)("Can't play on show, player container element not available.");
                        this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
                            threshold: null != (e = null == t ? void 0 : t.threshold) ? e : [],
                            callbackOnIntersect: t => {
                                0 === t ? this.pause() : this.play()
                            }
                        })
                    }
                    _validatePlaybackOptions(t) {
                        if (!t) return {};
                        let e = {};
                        for (let [i, n] of Object.entries(t)) switch (i) {
                            case "autoplay":
                                "boolean" == typeof n && (e.autoplay = n);
                                break;
                            case "direction":
                                "number" == typeof n && [1, -1].includes(n) && (e.direction = n);
                                break;
                            case "loop":
                                ("boolean" == typeof n || "number" == typeof n) && (e.loop = n);
                                break;
                            case "playMode":
                                "string" == typeof n && ["normal", "bounce"].includes(n) && (e.playMode = n);
                                break;
                            case "speed":
                                "number" == typeof n && (e.speed = n);
                                break;
                            case "themeColor":
                                "string" == typeof n && (e.themeColor = n);
                                break;
                            case "hover":
                                "boolean" == typeof n && (e.hover = n);
                                break;
                            case "intermission":
                                "number" == typeof n && (e.intermission = n);
                                break;
                            case "defaultTheme":
                                "string" == typeof n && (e.defaultTheme = n)
                        }
                        return this._requireValidPlaybackOptions(e), e
                    }
                    _requireAnimationsInTheManifest() {
                        var t;
                        if (!(null != (t = this._dotLottieLoader.manifest) && t.animations.length)) throw (0, h.h)("No animations found in manifest.")
                    }
                    _requireAnimationsToBeLoaded() {
                        if (0 === this._dotLottieLoader.animationsMap.size) throw (0, h.h)("No animations have been loaded.")
                    }
                    async play(t, e) {
                        var i, n;
                        if (["initial", "loading"].includes(this._currentState)) return void(0, h.j)("Player unable to play whilst loading.");
                        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !t) {
                            -1 === this._lottie.playDirection && 0 === this._lottie.currentFrame ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
                            return
                        }
                        if ("number" == typeof t) {
                            let n = null == (i = this._dotLottieLoader.manifest) ? void 0 : i.animations[t];
                            if (!n) throw (0, h.h)("animation not found.");
                            "function" == typeof e ? await this.render({
                                id: n.id,
                                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(n))
                            }) : await this.render({
                                id: n.id
                            })
                        }
                        if ("string" == typeof t) {
                            let i = null == (n = this._dotLottieLoader.manifest) ? void 0 : n.animations.find(e => e.id === t);
                            if (!i) throw (0, h.h)("animation not found.");
                            "function" == typeof e ? await this.render({
                                id: i.id,
                                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
                            }) : await this.render({
                                id: i.id
                            })
                        }
                    }
                    playSegments(t, e) {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("playSegments() Can't use whilst loading.") : (this._lottie.playSegments(t, e), this.setCurrentState("playing"))
                    }
                    resetSegments(t) {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("resetSegments() Can't use whilst loading.") : this._lottie.resetSegments(t)
                    }
                    togglePlay() {
                        "playing" === this.currentState ? this.pause() : this.play()
                    }
                    _getAnimationByIdOrIndex(t) {
                        var e, i;
                        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), "number" == typeof t) {
                            let i = null == (e = this._dotLottieLoader.manifest) ? void 0 : e.animations[t];
                            if (!i) throw (0, h.h)("animation not found.");
                            return i
                        }
                        if ("string" == typeof t) {
                            let e = null == (i = this._dotLottieLoader.manifest) ? void 0 : i.animations.find(e => e.id === t);
                            if (!e) throw (0, h.h)("animation not found.");
                            return e
                        }
                        throw (0, h.h)("first param must be a number or string")
                    }
                    get activeAnimationId() {
                        return this._getActiveAnimationId()
                    }
                    get currentAnimationId() {
                        return this._currentAnimationId
                    }
                    get activeStateId() {
                        return this._activeStateId
                    }
                    async _startInteractivity(t) {
                        if (!this._inInteractiveMode) return void(0, h.i)("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
                        if (0 === this._dotLottieLoader.stateMachinesMap.size && await this._dotLottieLoader.getStateMachines(), 0 === this._dotLottieLoader.stateMachinesMap.size) throw (0, h.h)("No interactivity states are available.");
                        if ("undefined" === t) throw (0, h.h)("stateId is not specified.");
                        this._stateMachineManager || (this._stateMachineManager = await (0, l.a)(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(t)
                    }
                    enterInteractiveMode(t) {
                        var e;
                        if (t) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
                            ...this._userPlaybackOptions
                        }), this._inInteractiveMode && (null == (e = this._stateMachineManager) || e.stop()), this._activeStateId = t, this._inInteractiveMode = !0, this._startInteractivity(t);
                        else throw (0, h.h)("stateId must be a non-empty string.")
                    }
                    exitInteractiveMode() {
                        var t;
                        this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", null == (t = this._stateMachineManager) || t.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
                            ...this._prevUserPlaybackOptions
                        }, this._prevUserPlaybackOptions = {}, this.reset())
                    }
                    reset() {
                        var t;
                        let e = this._getActiveAnimationId(),
                            i = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.animations.find(t => t.id === e);
                        if (this._inInteractiveMode && this.exitInteractiveMode(), !i) throw (0, h.h)("animation not found.");
                        this.play(e)
                    }
                    previous(t) {
                        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, h.h)("manifest not found.");
                        if (this._inInteractiveMode) return void(0, h.j)("previous() is not supported in interactive mode.");
                        let e = this._dotLottieLoader.manifest.animations.findIndex(t => t.id === this._currentAnimationId);
                        if (-1 === e) throw (0, h.h)("animation not found.");
                        let i = this._dotLottieLoader.manifest.animations[(e - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
                        if (!i || !i.id) throw (0, h.h)("animation not found.");
                        "function" == typeof t ? this.render({
                            id: i.id,
                            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
                        }) : this.render({
                            id: i.id
                        })
                    }
                    next(t) {
                        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, h.h)("manifest not found.");
                        if (this._inInteractiveMode) return void(0, h.j)("next() is not supported in interactive mode.");
                        let e = this._dotLottieLoader.manifest.animations.findIndex(t => t.id === this._currentAnimationId);
                        if (-1 === e) throw (0, h.h)("animation not found.");
                        let i = this._dotLottieLoader.manifest.animations[(e + 1) % this._dotLottieLoader.manifest.animations.length];
                        if (!i || !i.id) throw (0, h.h)("animation not found.");
                        "function" == typeof t ? this.render({
                            id: i.id,
                            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
                        }) : this.render({
                            id: i.id
                        })
                    }
                    getManifest() {
                        return this._dotLottieLoader.manifest
                    }
                    resize() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("resize() Can't use whilst loading.") : this._lottie.resize()
                    }
                    stop() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("stop() Can't use whilst loading.") : (this.clearCountTimer(), this._counter = 0, this._setPlayerState(() => ({
                            direction: this._getOption("direction")
                        })), this._lottie.stop(), this.setCurrentState("stopped"))
                    }
                    pause() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("pause() Can't use whilst loading.") : (this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused"))
                    }
                    freeze() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("freeze() Can't use whilst loading.") : ("frozen" !== this.currentState && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen"))
                    }
                    unfreeze() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("unfreeze() Can't use whilst loading.") : "playing" === this._stateBeforeFreeze ? this.play() : this.pause()
                    }
                    destroy() {
                        var t, e;
                        null != (t = this._container) && t.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach(t => {
                            t.unload()
                        }), this._audios = []), this.clearCountTimer(), "u" > typeof document && document.removeEventListener("visibilitychange", () => this._onVisibilityChange()), this._counter = 0, null == (e = this._lottie) || e.destroy(), this._lottie = void 0
                    }
                    getAnimationInstance() {
                        return this._lottie
                    }
                    static getLottieWebVersion() {
                        return `${d}`
                    }
                    addEventListener(t, e) {
                        var i, n, r;
                        this._listeners.has(t) || this._listeners.set(t, new Set), null == (i = this._listeners.get(t)) || i.add(e);
                        try {
                            "complete" === t ? null == (n = this._container) || n.addEventListener(t, e) : null == (r = this._lottie) || r.addEventListener(t, e)
                        } catch (t) {
                            (0, h.i)(`addEventListener ${t}`)
                        }
                    }
                    getState() {
                        var t, e, i, n, r, o, a;
                        return {
                            autoplay: null != (e = null == (t = this._lottie) ? void 0 : t.autoplay) && e,
                            currentState: this._currentState,
                            frame: this._frame,
                            visibilityPercentage: this._visibilityPercentage,
                            seeker: this._seeker,
                            direction: null != (n = null == (i = this._lottie) ? void 0 : i.playDirection) ? n : 1,
                            hover: this._hover,
                            loop: this._loop || !1,
                            playMode: this._mode,
                            speed: null != (o = null == (r = this._lottie) ? void 0 : r.playSpeed) ? o : 1,
                            background: this._background,
                            intermission: this._intermission,
                            defaultTheme: this._defaultTheme,
                            currentAnimationId: this._currentAnimationId,
                            activeStateId: null != (a = this._activeStateId) ? a : ""
                        }
                    }
                    _notify() {
                        this.state.setState(this.getState())
                    }
                    get totalFrames() {
                        var t;
                        return (null == (t = this._lottie) ? void 0 : t.totalFrames) || 0
                    }
                    get direction() {
                        return this._lottie ? this._lottie.playDirection : 1
                    }
                    setDirection(t) {
                        this._requireValidDirection(t), this._setPlayerState(() => ({
                            direction: t
                        })), this._userPlaybackOptions.direction = t
                    }
                    get speed() {
                        var t;
                        return (null == (t = this._lottie) ? void 0 : t.playSpeed) || 1
                    }
                    setSpeed(t) {
                        this._requireValidSpeed(t), this._setPlayerState(() => ({
                            speed: t
                        })), this._userPlaybackOptions.speed = t
                    }
                    get autoplay() {
                        var t, e;
                        return null != (e = null == (t = this._lottie) ? void 0 : t.autoplay) && e
                    }
                    setAutoplay(t) {
                        (this._requireValidAutoplay(t), !this._lottie || ["loading"].includes(this._currentState)) ? (0, h.j)("setAutoplay() Can't use whilst loading.") : (this._setPlayerState(() => ({
                            autoplay: t
                        })), this._userPlaybackOptions.autoplay = t)
                    }
                    toggleAutoplay() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("toggleAutoplay() Can't use whilst loading.") : this.setAutoplay(!this._lottie.autoplay)
                    }
                    get defaultTheme() {
                        return this._defaultTheme
                    }
                    setDefaultTheme(t) {
                        this._setPlayerState(() => ({
                            defaultTheme: t
                        })), this._userPlaybackOptions.defaultTheme = t, this._animation && this.render()
                    }
                    get loop() {
                        return this._loop
                    }
                    setLoop(t) {
                        this._requireValidLoop(t), this._setPlayerState(() => ({
                            loop: t
                        })), this._userPlaybackOptions.loop = t
                    }
                    toggleLoop() {
                        !this._lottie || ["loading"].includes(this._currentState) ? (0, h.j)("toggleLoop() Can't use whilst loading.") : this.setLoop(!this._loop)
                    }
                    get background() {
                        return this._background
                    }
                    setBackground(t) {
                        this._requireValidBackground(t), this._background = t, this._container && (this._container.style.backgroundColor = t)
                    }
                    get _frame() {
                        return this._lottie ? "completed" === this.currentState ? -1 === this.direction ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0
                    }
                    get _seeker() {
                        return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0
                    }
                    async revertToManifestValues(t) {
                        var e;
                        let i;
                        i = Array.isArray(t) && 0 !== t.length ? t : ["autoplay", "defaultTheme", "direction", "hover", "intermission", "loop", "playMode", "speed", "activeAnimationId"];
                        let n = !1;
                        if (i.includes("activeAnimationId")) {
                            let t = null == (e = this._dotLottieLoader.manifest) ? void 0 : e.activeAnimationId,
                                i = this._getAnimationByIdOrIndex(t || 0);
                            this._activeAnimationId = t, await this._setCurrentAnimation(i.id), n = !0
                        }
                        i.forEach(t => {
                            switch (t) {
                                case "autoplay":
                                    delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                                    break;
                                case "defaultTheme":
                                    delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                                    break;
                                case "direction":
                                    delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                                    break;
                                case "hover":
                                    delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                                    break;
                                case "intermission":
                                    delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                                    break;
                                case "loop":
                                    delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                                    break;
                                case "playMode":
                                    delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                                    break;
                                case "speed":
                                    delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"))
                            }
                        }), n && this.render()
                    }
                    removeEventListener(t, e) {
                        var i, n, r;
                        try {
                            "complete" === t ? null == (i = this._container) || i.removeEventListener(t, e) : null == (n = this._lottie) || n.removeEventListener(t, e), null == (r = this._listeners.get(t)) || r.delete(e)
                        } catch (t) {
                            (0, h.i)("removeEventListener", t)
                        }
                    }
                    _handleAnimationComplete() {
                        var t;
                        "number" == typeof this._loop && this.stop();
                        let e = -1 === this.direction ? 0 : this.totalFrames;
                        this.goToAndStop(e, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), null == (t = this._container) || t.dispatchEvent(new Event("complete"))
                    }
                    addEventListeners() {
                        var t;
                        if (!this._lottie || ["loading"].includes(this._currentState)) return void(0, h.j)("addEventListeners() Can't use whilst loading.");
                        for (let [e, i] of(this._lottie.addEventListener("enterFrame", () => {
                                var t;
                                this._lottie ? (0 === Math.floor(this._lottie.currentFrame) && -1 === this.direction && (null == (t = this._container) || t.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify()) : (0, h.j)("enterFrame event : Lottie is undefined.")
                            }), this._lottie.addEventListener("loopComplete", () => {
                                var t;
                                if (!this._lottie) return void(0, h.j)("loopComplete event : Lottie is undefined.");
                                null == (t = this._container) || t.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
                                let e = this._lottie.playDirection;
                                if ("number" == typeof this._loop && this._loop > 0 && (this._counter += "bounce" === this._mode ? .5 : 1, this._counter >= this._loop)) return void this._handleAnimationComplete();
                                "bounce" === this._mode && "number" == typeof e && (e = -1 * Number(e));
                                let i = -1 === e ? this._lottie.totalFrames - 1 : 0;
                                this.intermission ? (this.goToAndPlay(i, !0), this.pause(), this._counterInterval = window.setTimeout(() => {
                                    this._lottie && (this._setPlayerState(() => ({
                                        direction: e
                                    })), this.goToAndPlay(i, !0))
                                }, this._intermission)) : (this._setPlayerState(() => ({
                                    direction: e
                                })), this.goToAndPlay(-1 === e ? this.totalFrames - 1 : 0, !0))
                            }), this._lottie.addEventListener("complete", () => {
                                if (this._lottie && !1 === this._loop && "bounce" === this._mode) {
                                    if (this._counter += .5, this._counter >= 1) return void this._handleAnimationComplete();
                                    this._counterInterval = window.setTimeout(() => {
                                        if (!this._lottie) return;
                                        let t = this._lottie.playDirection;
                                        "bounce" === this._mode && "number" == typeof t && (t = -1 * Number(t));
                                        let e = -1 === t ? this.totalFrames - 1 : 0;
                                        this._setPlayerState(() => ({
                                            direction: t
                                        })), this.goToAndPlay(e, !0)
                                    }, this._intermission)
                                } else this._handleAnimationComplete()
                            }), this._listeners))
                            if ("complete" === e)
                                for (let n of i) null == (t = this._container) || t.addEventListener(e, n);
                            else
                                for (let t of i) this._lottie.addEventListener(e, t)
                    }
                    async _setCurrentAnimation(t) {
                        this._currentState = "loading";
                        let e = await this._dotLottieLoader.getAnimation(t);
                        this._currentAnimationId = t, this._animation = e, this._currentState = "ready"
                    }
                    async _getAudioFactory() {
                        if (this._animation && (0, h.m)(this._animation)) {
                            let {
                                DotLottieAudio: t
                            } = await i.e("9794").then(i.bind(i, 25913));
                            return e => {
                                let i = new t({
                                    src: [e]
                                });
                                return this._audios.push(i), i
                            }
                        }
                        return null
                    }
                    async render(t) {
                        var e, i, n, r, o, a, s, l, u, d, c, f, p, _, m, y, g, b;
                        if (null != t && t.id) await this._setCurrentAnimation(t.id);
                        else if (!this._animation) throw (0, h.h)("no animation selected");
                        let w = null != (e = v.loop) && e,
                            S = null != (i = v.autoplay) && i,
                            I = null != (n = v.playMode) ? n : "normal",
                            L = null != (r = v.intermission) ? r : 0,
                            k = null != (o = v.hover) && o,
                            O = null != (a = v.direction) ? a : 1,
                            M = null != (s = v.speed) ? s : 1,
                            A = null != (l = v.defaultTheme) ? l : "";
                        w = null != (u = null == t ? void 0 : t.loop) ? u : this._getOption("loop"), S = null != (d = null == t ? void 0 : t.autoplay) ? d : this._getOption("autoplay"), I = null != (c = null == t ? void 0 : t.playMode) ? c : this._getOption("playMode"), L = null != (f = null == t ? void 0 : t.intermission) ? f : this._getOption("intermission"), k = null != (p = null == t ? void 0 : t.hover) ? p : this._getOption("hover"), O = null != (_ = null == t ? void 0 : t.direction) ? _ : this._getOption("direction"), M = null != (m = null == t ? void 0 : t.speed) ? m : this._getOption("speed"), A = null != (y = null == t ? void 0 : t.defaultTheme) ? y : this._getOption("defaultTheme");
                        let E = {
                                ...this._animationConfig,
                                autoplay: !k && S,
                                loop: "number" == typeof w || w,
                                renderer: this._worker ? "svg" : null != (g = this._animationConfig.renderer) ? g : "svg"
                            },
                            [P, C, T] = await Promise.all([this._dotLottieLoader.getTheme(A), this._getLottiePlayerInstance(), this._getAudioFactory()]);
                        (P && this._animation ? (this._animation = (0, h.p)(this._animation), this._animation.slots = P) : this._animation = await this._dotLottieLoader.getAnimation(null != (b = this._currentAnimationId) ? b : ""), this._activeStateId && !this._inInteractiveMode) ? this.enterInteractiveMode(this._activeStateId): (this.destroy(), this._setPlayerState(() => ({
                            defaultTheme: A,
                            playMode: I,
                            intermission: L,
                            hover: k,
                            loop: w
                        })), T ? this._lottie = C.loadAnimation({
                            ...E,
                            container: this._container,
                            animationData: this._animation,
                            audioFactory: T
                        }) : this._lottie = C.loadAnimation({
                            ...E,
                            container: this._container,
                            animationData: this._animation
                        }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = () => {
                            var t;
                            null == (t = this._lottie) || t.playSegments([0, this._lottie.totalFrames], !0)
                        }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(() => ({
                            direction: O,
                            speed: M
                        })), S && !k && (!1 === w && -1 === O ? this.play() : this.setCurrentState("playing")), this._updateTestData())
                    }
                    async _getLottiePlayerInstance() {
                        var t;
                        let e = null != (t = this._animationConfig.renderer) ? t : "svg",
                            n;
                        if (this._worker) return "svg" !== e && (0, h.j)("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), (n = await i.e("748").then(i.bind(i, 56007))).default;
                        switch (e) {
                            case "svg":
                                n = this._light ? await i.e("1743").then(i.bind(i, 36962)) : await i.e("2442").then(i.bind(i, 25281));
                                break;
                            case "canvas":
                                n = this._light ? await i.e("7570").then(i.bind(i, 23593)) : await i.e("9839").then(i.bind(i, 78898));
                                break;
                            case "html":
                                n = this._light ? await i.e("1526").then(i.bind(i, 85333)) : await i.e("3602").then(i.bind(i, 28873));
                                break;
                            default:
                                throw Error(`Invalid renderer: ${e}`)
                        }
                        return n.default
                    }
                    _getActiveAnimationId() {
                        var t, e, i, n;
                        let r = this._dotLottieLoader.manifest;
                        return null != (n = null != (i = null != (t = this._activeAnimationId) ? t : null == r ? void 0 : r.activeAnimationId) ? i : null == (e = null == r ? void 0 : r.animations[0]) ? void 0 : e.id) ? n : void 0
                    }
                    async load(t) {
                        if ("loading" === this._currentState) return void(0, h.j)("Loading in progress..");
                        try {
                            if (this.setCurrentState("loading"), "string" == typeof this._src)
                                if ((0, h.n)(this._src)) {
                                    let t = JSON.parse(this._src);
                                    this._dotLottieLoader.loadFromLottieJSON(t)
                                } else {
                                    let t = new URL(this._src, window.location.href);
                                    await this._dotLottieLoader.loadFromUrl(t.toString())
                                }
                            else if ("object" == typeof this._src && (0, h.l)(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
                            else throw (0, h.h)("Invalid src provided");
                            if (!this._dotLottieLoader.manifest) throw (0, h.h)("No manifest found");
                            let e = this._getActiveAnimationId();
                            if (!e) throw (0, h.h)("No active animation found");
                            await this._setCurrentAnimation(e), await this.render(t)
                        } catch (t) {
                            this.setCurrentState("error"), t instanceof Error && (0, h.i)(`Error loading animation: ${t.message}`)
                        }
                    }
                    setErrorState(t) {
                        this.setCurrentState("error"), (0, h.i)(t)
                    }
                    _requireValidDirection(t) {
                        if (-1 !== t && 1 !== t) throw (0, h.h)("Direction can only be -1 (backwards) or 1 (forwards)")
                    }
                    _requireValidIntermission(t) {
                        if (t < 0 || !Number.isInteger(t)) throw (0, h.h)("intermission must be a positive number")
                    }
                    _requireValidLoop(t) {
                        if ("number" == typeof t && (!Number.isInteger(t) || t < 0)) throw (0, h.h)("loop must be a positive number or boolean")
                    }
                    _requireValidSpeed(t) {
                        if ("number" != typeof t) throw (0, h.h)("speed must be a number")
                    }
                    _requireValidBackground(t) {
                        if ("string" != typeof t) throw (0, h.h)("background must be a string")
                    }
                    _requireValidAutoplay(t) {
                        if ("boolean" != typeof t) throw (0, h.h)("autoplay must be a boolean")
                    }
                    _requireValidPlaybackOptions(t) {
                        t.direction && this._requireValidDirection(t.direction), t.intermission && this._requireValidIntermission(t.intermission), t.loop && this._requireValidLoop(t.loop), t.speed && this._requireValidSpeed(t.speed)
                    }
                    constructor(t, e, i) {
                        (0, a._)(this, "_lottie", void 0), (0, a._)(this, "_src", void 0), (0, a._)(this, "_animationConfig", void 0), (0, a._)(this, "_prevUserPlaybackOptions", {}), (0, a._)(this, "_userPlaybackOptions", void 0), (0, a._)(this, "_hover", !1), (0, a._)(this, "_loop", !1), (0, a._)(this, "_counter", 0), (0, a._)(this, "_intermission", 0), (0, a._)(this, "_counterInterval", null), (0, a._)(this, "_container", null), (0, a._)(this, "_name", void 0), (0, a._)(this, "_mode", "normal"), (0, a._)(this, "_background", "transparent"), (0, a._)(this, "_animation", void 0), (0, a._)(this, "_defaultTheme", void 0), (0, a._)(this, "_activeAnimationId", void 0), (0, a._)(this, "_currentAnimationId", void 0), (0, a._)(this, "_testId", void 0), (0, a._)(this, "_listeners", new Map), (0, a._)(this, "_currentState", "initial"), (0, a._)(this, "_stateBeforeFreeze", "initial"), (0, a._)(this, "state", new u.a(_)), (0, a._)(this, "_light", !1), (0, a._)(this, "_worker", !1), (0, a._)(this, "_dotLottieLoader", new s.a), (0, a._)(this, "_activeStateId", void 0), (0, a._)(this, "_inInteractiveMode", !1), (0, a._)(this, "_scrollTicking", !1), (0, a._)(this, "_scrollCallback", void 0), (0, a._)(this, "_onShowIntersectionObserver", void 0), (0, a._)(this, "_visibilityPercentage", 0), (0, a._)(this, "_audios", []), (0, a._)(this, "_stateMachineManager", void 0), "string" == typeof t ? this._src = t : this._src = (0, h.p)(t), null != i && i.testId && (this._testId = i.testId), this._defaultTheme = (null == i ? void 0 : i.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(i || {}), "string" == typeof(null == i ? void 0 : i.activeAnimationId) && (this._activeAnimationId = i.activeAnimationId), this._container = e || null, "string" == typeof(null == i ? void 0 : i.background) && this.setBackground(i.background), "u" > typeof(null == i ? void 0 : i.activeStateId) && (this._activeStateId = i.activeStateId);
                        let {
                            rendererSettings: n,
                            ...r
                        } = i || {};
                        this._animationConfig = {
                            loop: !1,
                            autoplay: !1,
                            renderer: "svg",
                            rendererSettings: {
                                clearCanvas: !0,
                                progressiveLoad: !0,
                                hideOnTransparent: !0,
                                filterSize: {
                                    width: "200%",
                                    height: "200%",
                                    x: "-50%",
                                    y: "-50%"
                                },
                                ...n
                            },
                            ...r
                        }, null != i && i.light && (this._light = i.light), null != i && i.worker && (this._worker = i.worker), this._listenToHover(), this._listenToVisibilityChange()
                    }
                }
        },
        65581: function(t, e, i) {
            i.d(e, {
                Ii: () => c
            });
            var n = i(58191),
                r = i.n(n),
                o = i(76275);
            i(47733), i(28924), i(36157), i(47920), i(25260);
            var a = function(t, e) {
                    var i, r = (i = (0, n.useRef)(!0)).current ? (i.current = !1, !0) : i.current;
                    (0, n.useEffect)(function() {
                        if (!r) return t()
                    }, e)
                },
                s = (0, n.createContext)(null).Provider,
                l = typeof window > "u" ? n.useEffect : n.useLayoutEffect;

            function u(t, e) {
                let i = (0, n.useCallback)(() => e(t.getState()), [e, t]);
                return ((t, e, i) => {
                    let [r, o] = (0, n.useState)(() => i());
                    return (0, n.useEffect)(() => {
                        let i = t(() => {
                            o(e())
                        });
                        return () => {
                            i()
                        }
                    }, [t]), r
                })((0, n.useCallback)(e => t.state.subscribe(e), [t]), i, () => e(o.e))
            }
            var h = {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                },
                d = {
                    position: "relative"
                },
                c = r().forwardRef((t, e) => {
                    let {
                        onEvent: i,
                        activeAnimationId: c,
                        autoplay: f,
                        background: p = "transparent",
                        direction: v,
                        intermission: _,
                        loop: m,
                        playMode: y,
                        hover: g,
                        speed: b,
                        renderer: w = "svg",
                        rendererSettings: S = {},
                        src: I,
                        className: L = "",
                        testId: k,
                        children: O,
                        defaultTheme: M,
                        light: A = !1,
                        worker: E = !1,
                        activeStateId: P,
                        lottieRef: C,
                        ...T
                    } = t, j = (0, n.useRef)(null), x = ((t, e, i) => {
                        let [r] = (0, n.useState)(() => new o.f(t, e.current, i)), a = (0, n.useRef)(!1);
                        return l(() => ((async function() {
                            !a.current && e.current && (a.current = !0, r.setContainer(e.current), await r.load())
                        })(), () => {
                            a.current && r.destroy()
                        }), [r]), r
                    })(I, j, {
                        renderer: w,
                        activeAnimationId: c,
                        rendererSettings: {
                            clearCanvas: !0,
                            progressiveLoad: !1,
                            hideOnTransparent: !0,
                            ...S
                        },
                        hover: g,
                        loop: m,
                        direction: v,
                        speed: b,
                        intermission: _,
                        background: p,
                        playMode: y,
                        autoplay: !g && f,
                        testId: k,
                        defaultTheme: M,
                        light: A,
                        worker: E,
                        activeStateId: P
                    }), N = (0, n.useRef)(x);
                    N.current = x, r().useImperativeHandle(e, () => x, [x]), r().useImperativeHandle(C, () => x, [x]);
                    let F = u(x, t => t.currentState),
                        D = u(x, t => t.frame),
                        z = u(x, t => t.seeker),
                        V = u(x, t => t.currentAnimationId);
                    return a(() => {
                        typeof m > "u" ? N.current.revertToManifestValues(["loop"]) : N.current.setLoop(m)
                    }, [m]), a(() => {
                        [o.b.Initial, o.b.Loading].includes(F) || (typeof f > "u" ? N.current.revertToManifestValues(["autoplay"]) : N.current.setAutoplay(f))
                    }, [f]), a(() => {
                        typeof v > "u" ? N.current.revertToManifestValues(["direction"]) : N.current.setDirection(v)
                    }, [v]), a(() => {
                        typeof b > "u" ? N.current.revertToManifestValues(["speed"]) : N.current.setSpeed(b)
                    }, [b]), a(() => {
                        typeof y > "u" ? N.current.revertToManifestValues(["playMode"]) : N.current.setMode(y)
                    }, [y]), a(() => {
                        typeof g > "u" ? N.current.revertToManifestValues(["hover"]) : N.current.setHover(g)
                    }, [g]), a(() => {
                        typeof p > "u" ? N.current.setBackground("transparent") : N.current.setBackground(p)
                    }, [p]), a(() => {
                        typeof _ > "u" ? N.current.revertToManifestValues(["intermission"]) : N.current.setIntermission(_)
                    }, [_]), a(() => {
                        typeof M > "u" || !M ? N.current.revertToManifestValues(["defaultTheme"]) : N.current.setDefaultTheme(M)
                    }, [M]), a(() => {
                        c && N.current.play(c)
                    }, [c]), a(() => ("u" > typeof P && N.current.enterInteractiveMode(P), () => {
                        N.current.exitInteractiveMode()
                    }), [P]), a(() => {
                        "u" > typeof I && N.current.updateSrc(I)
                    }, [I]), (0, n.useEffect)(() => {
                        let t = () => {
                                null == i || i(o.a.Ready)
                            },
                            e = () => {
                                null == i || i(o.a.DataReady)
                            },
                            n = () => {
                                null == i || i(o.a.DataFail)
                            },
                            r = () => {
                                N.current.currentState !== o.b.Playing && (null == i || i(o.a.Complete))
                            },
                            a = () => {
                                null == i || i(o.a.LoopComplete)
                            };
                        return N.current.addEventListener("DOMLoaded", t), N.current.addEventListener("data_ready", e), N.current.addEventListener("data_failed", n), N.current.addEventListener("complete", r), N.current.addEventListener("loopComplete", a), () => {
                            N.current.removeEventListener("DOMLoaded", t), N.current.removeEventListener("data_ready", e), N.current.removeEventListener("data_failed", n), N.current.removeEventListener("complete", r), N.current.removeEventListener("loopComplete", a)
                        }
                    }, []), (0, n.useEffect)(() => {
                        switch (F) {
                            case o.b.Stopped:
                                null == i || i(o.a.Stop);
                                break;
                            case o.b.Paused:
                                null == i || i(o.a.Pause);
                                break;
                            case o.b.Playing:
                                null == i || i(o.a.Play);
                                break;
                            case o.b.Frozen:
                                null == i || i(o.a.Freeze);
                                break;
                            case o.b.Error:
                                null == i || i(o.a.Error)
                        }
                    }, [F]), (0, n.useEffect)(() => {
                        null == i || i(o.a.Frame, {
                            frame: D,
                            seeker: z
                        })
                    }, [D]), r().createElement(s, {
                        value: x
                    }, r().createElement("div", {
                        className: `dotlottie-container main ${O?"controls":""} ${L}`,
                        lang: "en",
                        ...k && {
                            "data-testid": k
                        },
                        ...T
                    }, r().createElement("div", {
                        ref: j,
                        "data-name": `${V}`,
                        role: "figure",
                        className: `animation ${O?"controls":""}`,
                        style: O ? d : h,
                        ...k && {
                            "data-testid": "animation"
                        }
                    }, F === o.b.Error && r().createElement("div", {
                        ...k && {
                            "data-testid": "error"
                        },
                        className: "error"
                    }, "⚠️")), O))
                })
        }
    }
]);
//# sourceMappingURL=3326.77347e15.js.map