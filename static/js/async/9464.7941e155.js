/*! For license information please see 9464.7941e155.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e14642b4-507f-42ba-9b79-23d14b11dad0", t._sentryDebugIdIdentifier = "sentry-dbid-e14642b4-507f-42ba-9b79-23d14b11dad0")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9464"], {
        12984: function(t, e, i) {
            "use strict";
            let r, s;
            i.d(e, {
                E8: () => rO,
                m_: () => rW,
                s$: () => rA,
                PP: () => rU,
                kc: () => rY,
                t1: () => ra,
                Bs: () => rd,
                ju: () => e9,
                A6: () => e4,
                hE: () => rR
            });
            let n = "undefined" == typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function o(t, e, i) {
                let r = i || (t => Array.prototype.slice.call(t)),
                    s = !1,
                    o = [];
                return function() {
                    for (var i = arguments.length, a = Array(i), h = 0; h < i; h++) a[h] = arguments[h];
                    o = r(a), s || (s = !0, n.call(window, () => {
                        s = !1, t.apply(e, o)
                    }))
                }
            }
            let a = t => "start" === t ? "left" : "end" === t ? "right" : "center",
                h = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2;

            function l() {}
            let u = (s = 0, function() {
                return s++
            });

            function c(t) {
                return null == t
            }

            function d(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                let e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            }

            function f(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }
            let p = t => ("number" == typeof t || t instanceof Number) && isFinite(+t);

            function g(t, e) {
                return p(t) ? t : e
            }

            function m(t, e) {
                return void 0 === t ? e : t
            }
            let b = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

            function _(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
            }

            function v(t, e, i, r) {
                let s, n, o;
                if (d(t))
                    if (n = t.length, r)
                        for (s = n - 1; s >= 0; s--) e.call(i, t[s], s);
                    else
                        for (s = 0; s < n; s++) e.call(i, t[s], s);
                else if (f(t))
                    for (s = 0, n = (o = Object.keys(t)).length; s < n; s++) e.call(i, t[o[s]], o[s])
            }

            function y(t, e) {
                let i, r, s, n;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, r = t.length; i < r; ++i)
                    if (s = t[i], n = e[i], s.datasetIndex !== n.datasetIndex || s.index !== n.index) return !1;
                return !0
            }

            function x(t) {
                if (d(t)) return t.map(x);
                if (f(t)) {
                    let e = Object.create(null),
                        i = Object.keys(t),
                        r = i.length,
                        s = 0;
                    for (; s < r; ++s) e[i[s]] = x(t[i[s]]);
                    return e
                }
                return t
            }

            function w(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function T(t, e, i, r) {
                if (!w(t)) return;
                let s = e[t],
                    n = i[t];
                f(s) && f(n) ? M(s, n, r) : e[t] = x(n)
            }

            function M(t, e, i) {
                let r = d(e) ? e : [e],
                    s = r.length;
                if (!f(t)) return t;
                let n = (i = i || {}).merger || T;
                for (let o = 0; o < s; ++o) {
                    if (!f(e = r[o])) continue;
                    let s = Object.keys(e);
                    for (let r = 0, o = s.length; r < o; ++r) n(s[r], t, e, i)
                }
                return t
            }

            function S(t, e) {
                return M(t, e, {
                    merger: k
                })
            }

            function k(t, e, i) {
                if (!w(t)) return;
                let r = e[t],
                    s = i[t];
                f(r) && f(s) ? S(r, s) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = x(s))
            }

            function D(t, e) {
                let i = t.indexOf(".", e);
                return -1 === i ? t.length : i
            }

            function O(t, e) {
                if ("" === e) return t;
                let i = 0,
                    r = D(e, 0);
                for (; t && r > i;) t = t[e.substr(i, r - i)], r = D(e, i = r + 1);
                return t
            }

            function E(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            let P = t => void 0 !== t,
                A = t => "function" == typeof t,
                C = (t, e) => {
                    if (t.size !== e.size) return !1;
                    for (let i of t)
                        if (!e.has(i)) return !1;
                    return !0
                },
                R = Math.PI,
                L = 2 * R,
                B = L + R,
                V = 1 / 0,
                I = R / 180,
                F = R / 2,
                z = R / 4,
                N = 2 * R / 3,
                j = Math.log10,
                H = Math.sign;

            function W(t) {
                let e = Math.round(t),
                    i = Math.pow(10, Math.floor(j(t = q(t, e, t / 1e3) ? e : t))),
                    r = t / i;
                return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * i
            }

            function U(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function q(t, e, i) {
                return Math.abs(t - e) < i
            }

            function $(t, e, i) {
                let r, s, n;
                for (r = 0, s = t.length; r < s; r++) isNaN(n = t[r][i]) || (e.min = Math.min(e.min, n), e.max = Math.max(e.max, n))
            }

            function Y(t) {
                return R / 180 * t
            }

            function K(t) {
                if (!p(t)) return;
                let e = 1,
                    i = 0;
                for (; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }

            function X(t, e) {
                let i = e.x - t.x,
                    r = e.y - t.y,
                    s = Math.sqrt(i * i + r * r),
                    n = Math.atan2(r, i);
                return n < -.5 * R && (n += L), {
                    angle: n,
                    distance: s
                }
            }

            function Z(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function G(t, e) {
                return (t - e + B) % L - R
            }

            function Q(t) {
                return (t % L + L) % L
            }

            function J(t, e, i, r) {
                let s = Q(t),
                    n = Q(e),
                    o = Q(i),
                    a = Q(n - s),
                    h = Q(o - s),
                    l = Q(s - n),
                    u = Q(s - o);
                return s === n || s === o || r && n === o || a > h && l < u
            }

            function tt(t, e, i) {
                return Math.max(e, Math.min(i, t))
            }

            function te(t, e, i) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
                return t >= Math.min(e, i) - r && t <= Math.max(e, i) + r
            }
            let ti = t => 0 === t || 1 === t,
                tr = (t, e, i) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * L / i)),
                ts = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * L / i) + 1,
                tn = {
                    linear: t => t,
                    easeInQuad: t => t * t,
                    easeOutQuad: t => -t * (t - 2),
                    easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                    easeInCubic: t => t * t * t,
                    easeOutCubic: t => (t -= 1) * t * t + 1,
                    easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                    easeInQuart: t => t * t * t * t,
                    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                    easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                    easeInQuint: t => t * t * t * t * t,
                    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                    easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                    easeInSine: t => -Math.cos(t * F) + 1,
                    easeOutSine: t => Math.sin(t * F),
                    easeInOutSine: t => -.5 * (Math.cos(R * t) - 1),
                    easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                    easeOutExpo: t => 1 === t ? 1 : -Math.pow(2, -10 * t) + 1,
                    easeInOutExpo: t => ti(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (-Math.pow(2, -10 * (2 * t - 1)) + 2),
                    easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                    easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                    easeInElastic: t => ti(t) ? t : tr(t, .075, .3),
                    easeOutElastic: t => ti(t) ? t : ts(t, .075, .3),
                    easeInOutElastic: t => ti(t) ? t : t < .5 ? .5 * tr(2 * t, .1125, .45) : .5 + .5 * ts(2 * t - 1, .1125, .45),
                    easeInBack: t => t * t * (2.70158 * t - 1.70158),
                    easeOutBack: t => (t -= 1) * t * (2.70158 * t + 1.70158) + 1,
                    easeInOutBack(t) {
                        let e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: t => 1 - tn.easeOutBounce(1 - t),
                    easeOutBounce: t => t < .36363636363636365 ? 7.5625 * t * t : t < .7272727272727273 ? 7.5625 * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? 7.5625 * (t -= .8181818181818182) * t + .9375 : 7.5625 * (t -= .9545454545454546) * t + .984375,
                    easeInOutBounce: t => t < .5 ? .5 * tn.easeInBounce(2 * t) : .5 * tn.easeOutBounce(2 * t - 1) + .5
                },
                to = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    A: 10,
                    B: 11,
                    C: 12,
                    D: 13,
                    E: 14,
                    F: 15,
                    a: 10,
                    b: 11,
                    c: 12,
                    d: 13,
                    e: 14,
                    f: 15
                },
                ta = "0123456789ABCDEF",
                th = t => ta[15 & t],
                tl = t => ta[(240 & t) >> 4] + ta[15 & t],
                tu = t => (240 & t) >> 4 == (15 & t);

            function tc(t) {
                return t + .5 | 0
            }
            let td = (t, e, i) => Math.max(Math.min(t, i), e);

            function tf(t) {
                return td(tc(2.55 * t), 0, 255)
            }

            function tp(t) {
                return td(tc(255 * t), 0, 255)
            }

            function tg(t) {
                return td(tc(t / 2.55) / 100, 0, 1)
            }

            function tm(t) {
                return td(tc(100 * t), 0, 100)
            }
            let tb = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
                t_ = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function tv(t, e, i) {
                let r = e * Math.min(i, 1 - i),
                    s = function(e) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12;
                        return i - r * Math.max(Math.min(s - 3, 9 - s, 1), -1)
                    };
                return [s(0), s(8), s(4)]
            }

            function ty(t, e, i) {
                let r = function(r) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (r + t / 60) % 6;
                    return i - i * e * Math.max(Math.min(s, 4 - s, 1), 0)
                };
                return [r(5), r(3), r(1)]
            }

            function tx(t, e, i) {
                let r, s = tv(t, 1, .5);
                for (e + i > 1 && (r = 1 / (e + i), e *= r, i *= r), r = 0; r < 3; r++) s[r] *= 1 - e - i, s[r] += e;
                return s
            }

            function tw(t) {
                let e, i, r, s = t.r / 255,
                    n = t.g / 255,
                    o = t.b / 255,
                    a = Math.max(s, n, o),
                    h = Math.min(s, n, o),
                    l = (a + h) / 2;
                return a !== h && (r = a - h, i = l > .5 ? r / (2 - a - h) : r / (a + h), e = 60 * (e = a === s ? (n - o) / r + 6 * (n < o) : a === n ? (o - s) / r + 2 : (s - n) / r + 4) + .5), [0 | e, i || 0, l]
            }

            function tT(t, e, i, r) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, r)).map(tp)
            }

            function tM(t) {
                return (t % 360 + 360) % 360
            }
            let tS = {
                    x: "dark",
                    Z: "light",
                    Y: "re",
                    X: "blu",
                    W: "gr",
                    V: "medium",
                    U: "slate",
                    A: "ee",
                    T: "ol",
                    S: "or",
                    B: "ra",
                    C: "lateg",
                    D: "ights",
                    R: "in",
                    Q: "turquois",
                    E: "hi",
                    P: "ro",
                    O: "al",
                    N: "le",
                    M: "de",
                    L: "yello",
                    F: "en",
                    K: "ch",
                    G: "arks",
                    H: "ea",
                    I: "ightg",
                    J: "wh"
                },
                tk = {
                    OiceXe: "f0f8ff",
                    antiquewEte: "faebd7",
                    aqua: "ffff",
                    aquamarRe: "7fffd4",
                    azuY: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "0",
                    blanKedOmond: "ffebcd",
                    Xe: "ff",
                    XeviTet: "8a2be2",
                    bPwn: "a52a2a",
                    burlywood: "deb887",
                    caMtXe: "5f9ea0",
                    KartYuse: "7fff00",
                    KocTate: "d2691e",
                    cSO: "ff7f50",
                    cSnflowerXe: "6495ed",
                    cSnsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "ffff",
                    xXe: "8b",
                    xcyan: "8b8b",
                    xgTMnPd: "b8860b",
                    xWay: "a9a9a9",
                    xgYF: "6400",
                    xgYy: "a9a9a9",
                    xkhaki: "bdb76b",
                    xmagFta: "8b008b",
                    xTivegYF: "556b2f",
                    xSange: "ff8c00",
                    xScEd: "9932cc",
                    xYd: "8b0000",
                    xsOmon: "e9967a",
                    xsHgYF: "8fbc8f",
                    xUXe: "483d8b",
                    xUWay: "2f4f4f",
                    xUgYy: "2f4f4f",
                    xQe: "ced1",
                    xviTet: "9400d3",
                    dAppRk: "ff1493",
                    dApskyXe: "bfff",
                    dimWay: "696969",
                    dimgYy: "696969",
                    dodgerXe: "1e90ff",
                    fiYbrick: "b22222",
                    flSOwEte: "fffaf0",
                    foYstWAn: "228b22",
                    fuKsia: "ff00ff",
                    gaRsbSo: "dcdcdc",
                    ghostwEte: "f8f8ff",
                    gTd: "ffd700",
                    gTMnPd: "daa520",
                    Way: "808080",
                    gYF: "8000",
                    gYFLw: "adff2f",
                    gYy: "808080",
                    honeyMw: "f0fff0",
                    hotpRk: "ff69b4",
                    RdianYd: "cd5c5c",
                    Rdigo: "4b0082",
                    ivSy: "fffff0",
                    khaki: "f0e68c",
                    lavFMr: "e6e6fa",
                    lavFMrXsh: "fff0f5",
                    lawngYF: "7cfc00",
                    NmoncEffon: "fffacd",
                    ZXe: "add8e6",
                    ZcSO: "f08080",
                    Zcyan: "e0ffff",
                    ZgTMnPdLw: "fafad2",
                    ZWay: "d3d3d3",
                    ZgYF: "90ee90",
                    ZgYy: "d3d3d3",
                    ZpRk: "ffb6c1",
                    ZsOmon: "ffa07a",
                    ZsHgYF: "20b2aa",
                    ZskyXe: "87cefa",
                    ZUWay: "778899",
                    ZUgYy: "778899",
                    ZstAlXe: "b0c4de",
                    ZLw: "ffffe0",
                    lime: "ff00",
                    limegYF: "32cd32",
                    lRF: "faf0e6",
                    magFta: "ff00ff",
                    maPon: "800000",
                    VaquamarRe: "66cdaa",
                    VXe: "cd",
                    VScEd: "ba55d3",
                    VpurpN: "9370db",
                    VsHgYF: "3cb371",
                    VUXe: "7b68ee",
                    VsprRggYF: "fa9a",
                    VQe: "48d1cc",
                    VviTetYd: "c71585",
                    midnightXe: "191970",
                    mRtcYam: "f5fffa",
                    mistyPse: "ffe4e1",
                    moccasR: "ffe4b5",
                    navajowEte: "ffdead",
                    navy: "80",
                    Tdlace: "fdf5e6",
                    Tive: "808000",
                    TivedBb: "6b8e23",
                    Sange: "ffa500",
                    SangeYd: "ff4500",
                    ScEd: "da70d6",
                    pOegTMnPd: "eee8aa",
                    pOegYF: "98fb98",
                    pOeQe: "afeeee",
                    pOeviTetYd: "db7093",
                    papayawEp: "ffefd5",
                    pHKpuff: "ffdab9",
                    peru: "cd853f",
                    pRk: "ffc0cb",
                    plum: "dda0dd",
                    powMrXe: "b0e0e6",
                    purpN: "800080",
                    YbeccapurpN: "663399",
                    Yd: "ff0000",
                    Psybrown: "bc8f8f",
                    PyOXe: "4169e1",
                    saddNbPwn: "8b4513",
                    sOmon: "fa8072",
                    sandybPwn: "f4a460",
                    sHgYF: "2e8b57",
                    sHshell: "fff5ee",
                    siFna: "a0522d",
                    silver: "c0c0c0",
                    skyXe: "87ceeb",
                    UXe: "6a5acd",
                    UWay: "708090",
                    UgYy: "708090",
                    snow: "fffafa",
                    sprRggYF: "ff7f",
                    stAlXe: "4682b4",
                    tan: "d2b48c",
                    teO: "8080",
                    tEstN: "d8bfd8",
                    tomato: "ff6347",
                    Qe: "40e0d0",
                    viTet: "ee82ee",
                    JHt: "f5deb3",
                    wEte: "ffffff",
                    wEtesmoke: "f5f5f5",
                    Lw: "ffff00",
                    LwgYF: "9acd32"
                };

            function tD(t, e, i) {
                if (t) {
                    let r = tw(t);
                    r[e] = Math.max(0, Math.min(r[e] + r[e] * i, 0 === e ? 360 : 1)), t.r = (r = tT(tv, r, void 0, void 0))[0], t.g = r[1], t.b = r[2]
                }
            }

            function tO(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }

            function tE(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = tp(t[3]))) : (e = tO(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = tp(e.a), e
            }
            class tP {
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = tO(this._rgb);
                    return t && (t.a = tg(t.a)), t
                }
                set rgb(t) {
                    this._rgb = tE(t)
                }
                rgbString() {
                    var t;
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${tg(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb
                }
                hexString() {
                    var t, e, i;
                    return this._valid ? (i = tu((e = t = this._rgb).r) && tu(e.g) && tu(e.b) && tu(e.a) ? th : tl, t ? "#" + i(t.r) + i(t.g) + i(t.b) + (t.a < 255 ? i(t.a) : "") : t) : this._rgb
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t) return;
                        let e = tw(t),
                            i = e[0],
                            r = tm(e[1]),
                            s = tm(e[2]);
                        return t.a < 255 ? `hsla(${i}, ${r}%, ${s}%, ${tg(t.a)})` : `hsl(${i}, ${r}%, ${s}%)`
                    }(this._rgb) : this._rgb
                }
                mix(t, e) {
                    if (t) {
                        let i, r = this.rgb,
                            s = t.rgb,
                            n = e === i ? .5 : e,
                            o = 2 * n - 1,
                            a = r.a - s.a,
                            h = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2;
                        i = 1 - h, r.r = 255 & h * r.r + i * s.r + .5, r.g = 255 & h * r.g + i * s.g + .5, r.b = 255 & h * r.b + i * s.b + .5, r.a = n * r.a + (1 - n) * s.a, this.rgb = r
                    }
                    return this
                }
                clone() {
                    return new tP(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = tp(t), this
                }
                clearer(t) {
                    let e = this._rgb;
                    return e.a *= 1 - t, this
                }
                greyscale() {
                    let t = this._rgb,
                        e = tc(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e, this
                }
                opaquer(t) {
                    let e = this._rgb;
                    return e.a *= 1 + t, this
                }
                negate() {
                    let t = this._rgb;
                    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                }
                lighten(t) {
                    return tD(this._rgb, 2, t), this
                }
                darken(t) {
                    return tD(this._rgb, 2, -t), this
                }
                saturate(t) {
                    return tD(this._rgb, 1, t), this
                }
                desaturate(t) {
                    return tD(this._rgb, 1, -t), this
                }
                rotate(t) {
                    var e, i;
                    return e = this._rgb, (i = tw(e))[0] = tM(i[0] + t), e.r = (i = tT(tv, i, void 0, void 0))[0], e.g = i[1], e.b = i[2], this
                }
                constructor(t) {
                    let e;
                    if (t instanceof tP) return t;
                    const i = typeof t;
                    "object" === i ? e = tE(t) : "string" === i && (e = function(t) {
                        var e, i = t.length;
                        return "#" === t[0] && (4 === i || 5 === i ? e = {
                            r: 255 & 17 * to[t[1]],
                            g: 255 & 17 * to[t[2]],
                            b: 255 & 17 * to[t[3]],
                            a: 5 === i ? 17 * to[t[4]] : 255
                        } : (7 === i || 9 === i) && (e = {
                            r: to[t[1]] << 4 | to[t[2]],
                            g: to[t[3]] << 4 | to[t[4]],
                            b: to[t[5]] << 4 | to[t[6]],
                            a: 9 === i ? to[t[7]] << 4 | to[t[8]] : 255
                        })), e
                    }(t) || function(t) {
                        r || ((r = function() {
                            let t, e, i, r, s, n = {},
                                o = Object.keys(tk),
                                a = Object.keys(tS);
                            for (t = 0; t < o.length; t++) {
                                for (e = 0, r = s = o[t]; e < a.length; e++) i = a[e], s = s.replace(i, tS[i]);
                                i = parseInt(tk[r], 16), n[s] = [i >> 16 & 255, i >> 8 & 255, 255 & i]
                            }
                            return n
                        }()).transparent = [0, 0, 0, 0]);
                        let e = r[t.toLowerCase()];
                        return e && {
                            r: e[0],
                            g: e[1],
                            b: e[2],
                            a: 4 === e.length ? e[3] : 255
                        }
                    }(t) || function(t) {
                        return "r" === t.charAt(0) ? function(t) {
                            let e, i, r, s = tb.exec(t),
                                n = 255;
                            if (s) {
                                if (s[7] !== e) {
                                    let t = +s[7];
                                    n = 255 & (s[8] ? tf(t) : 255 * t)
                                }
                                return e = +s[1], i = +s[3], r = +s[5], e = 255 & (s[2] ? tf(e) : e), {
                                    r: e,
                                    g: i = 255 & (s[4] ? tf(i) : i),
                                    b: r = 255 & (s[6] ? tf(r) : r),
                                    a: n
                                }
                            }
                        }(t) : function(t) {
                            let e, i = t_.exec(t),
                                r = 255;
                            if (!i) return;
                            i[5] !== e && (r = i[6] ? tf(+i[5]) : tp(+i[5]));
                            let s = tM(+i[2]),
                                n = i[3] / 100,
                                o = i[4] / 100;
                            return {
                                r: (e = "hwb" === i[1] ? tT(tx, s, n, o) : "hsv" === i[1] ? tT(ty, s, n, o) : tT(tv, s, n, o))[0],
                                g: e[1],
                                b: e[2],
                                a: r
                            }
                        }(t)
                    }(t)), this._rgb = e, this._valid = !!e
                }
            }
            let tA = t => t instanceof CanvasGradient || t instanceof CanvasPattern;

            function tC(t) {
                return tA(t) ? t : new tP(t)
            }

            function tR(t) {
                return tA(t) ? t : new tP(t).saturate(.5).darken(.1).hexString()
            }
            let tL = Object.create(null),
                tB = Object.create(null);

            function tV(t, e) {
                if (!e) return t;
                let i = e.split(".");
                for (let e = 0, r = i.length; e < r; ++e) {
                    let r = i[e];
                    t = t[r] || (t[r] = Object.create(null))
                }
                return t
            }

            function tI(t, e, i) {
                return "string" == typeof e ? M(tV(t, e), i) : M(tV(t, ""), e)
            }
            var tF = new class {
                set(t, e) {
                    return tI(this, t, e)
                }
                get(t) {
                    return tV(this, t)
                }
                describe(t, e) {
                    return tI(tB, t, e)
                }
                override(t, e) {
                    return tI(tL, t, e)
                }
                route(t, e, i, r) {
                    let s = tV(this, t),
                        n = tV(this, i),
                        o = "_" + e;
                    Object.defineProperties(s, {
                        [o]: {
                            value: s[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                let t = this[o],
                                    e = n[r];
                                return f(t) ? Object.assign({}, e, t) : m(t, e)
                            },
                            set(t) {
                                this[o] = t
                            }
                        }
                    })
                }
                constructor(t) {
                    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = (t, e) => tR(e.backgroundColor), this.hoverBorderColor = (t, e) => tR(e.borderColor), this.hoverColor = (t, e) => tR(e.color), this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t)
                }
            }({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            });

            function tz(t, e, i, r, s) {
                let n = e[s];
                return n || (n = e[s] = t.measureText(s).width, i.push(s)), n > r && (r = n), r
            }

            function tN(t, e, i) {
                let r = t.currentDevicePixelRatio,
                    s = 0 !== i ? Math.max(i / 2, .5) : 0;
                return Math.round((e - s) * r) / r + s
            }

            function tj(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
            }

            function tH(t, e, i, r) {
                let s, n, o, a, h, l = e.pointStyle,
                    u = e.rotation,
                    c = e.radius,
                    d = (u || 0) * I;
                if (l && "object" == typeof l && ("[object HTMLImageElement]" === (s = l.toString()) || "[object HTMLCanvasElement]" === s)) {
                    t.save(), t.translate(i, r), t.rotate(d), t.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height), t.restore();
                    return
                }
                if (!isNaN(c) && !(c <= 0)) {
                    switch (t.beginPath(), l) {
                        default:
                            t.arc(i, r, c, 0, L), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(i + Math.sin(d) * c, r - Math.cos(d) * c), d += N, t.lineTo(i + Math.sin(d) * c, r - Math.cos(d) * c), d += N, t.lineTo(i + Math.sin(d) * c, r - Math.cos(d) * c), t.closePath();
                            break;
                        case "rectRounded":
                            h = .516 * c, n = Math.cos(d + z) * (a = c - h), o = Math.sin(d + z) * a, t.arc(i - n, r - o, h, d - R, d - F), t.arc(i + o, r - n, h, d - F, d), t.arc(i + n, r + o, h, d, d + F), t.arc(i - o, r + n, h, d + F, d + R), t.closePath();
                            break;
                        case "rect":
                            if (!u) {
                                a = Math.SQRT1_2 * c, t.rect(i - a, r - a, 2 * a, 2 * a);
                                break
                            }
                            d += z;
                        case "rectRot":
                            n = Math.cos(d) * c, o = Math.sin(d) * c, t.moveTo(i - n, r - o), t.lineTo(i + o, r - n), t.lineTo(i + n, r + o), t.lineTo(i - o, r + n), t.closePath();
                            break;
                        case "crossRot":
                            d += z;
                        case "cross":
                            n = Math.cos(d) * c, o = Math.sin(d) * c, t.moveTo(i - n, r - o), t.lineTo(i + n, r + o), t.moveTo(i + o, r - n), t.lineTo(i - o, r + n);
                            break;
                        case "star":
                            n = Math.cos(d) * c, o = Math.sin(d) * c, t.moveTo(i - n, r - o), t.lineTo(i + n, r + o), t.moveTo(i + o, r - n), t.lineTo(i - o, r + n), d += z, n = Math.cos(d) * c, o = Math.sin(d) * c, t.moveTo(i - n, r - o), t.lineTo(i + n, r + o), t.moveTo(i + o, r - n), t.lineTo(i - o, r + n);
                            break;
                        case "line":
                            n = Math.cos(d) * c, o = Math.sin(d) * c, t.moveTo(i - n, r - o), t.lineTo(i + n, r + o);
                            break;
                        case "dash":
                            t.moveTo(i, r), t.lineTo(i + Math.cos(d) * c, r + Math.sin(d) * c)
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke()
                }
            }

            function tW(t, e, i) {
                return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
            }

            function tU(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            }

            function tq(t) {
                t.restore()
            }

            function t$(t, e, i, r, s) {
                if (!e) return t.lineTo(i.x, i.y);
                if ("middle" === s) {
                    let r = (e.x + i.x) / 2;
                    t.lineTo(r, e.y), t.lineTo(r, i.y)
                } else "after" === s != !!r ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y)
            }

            function tY(t, e, i, r) {
                if (!e) return t.lineTo(i.x, i.y);
                t.bezierCurveTo(r ? e.cp1x : e.cp2x, r ? e.cp1y : e.cp2y, r ? i.cp2x : i.cp1x, r ? i.cp2y : i.cp1y, i.x, i.y)
            }

            function tK(t, e, i, r, s) {
                var n, o;
                let a, h, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    u = d(e) ? e : [e],
                    f = l.strokeWidth > 0 && "" !== l.strokeColor;
                for (t.save(), t.font = s.string, n = t, (o = l).translation && n.translate(o.translation[0], o.translation[1]), c(o.rotation) || n.rotate(o.rotation), o.color && (n.fillStyle = o.color), o.textAlign && (n.textAlign = o.textAlign), o.textBaseline && (n.textBaseline = o.textBaseline), a = 0; a < u.length; ++a) h = u[a], f && (l.strokeColor && (t.strokeStyle = l.strokeColor), c(l.strokeWidth) || (t.lineWidth = l.strokeWidth), t.strokeText(h, i, r, l.maxWidth)), t.fillText(h, i, r, l.maxWidth),
                    function(t, e, i, r, s) {
                        if (s.strikethrough || s.underline) {
                            let n = t.measureText(r),
                                o = e - n.actualBoundingBoxLeft,
                                a = e + n.actualBoundingBoxRight,
                                h = i - n.actualBoundingBoxAscent,
                                l = i + n.actualBoundingBoxDescent,
                                u = s.strikethrough ? (h + l) / 2 : l;
                            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = s.decorationWidth || 2, t.moveTo(o, u), t.lineTo(a, u), t.stroke()
                        }
                    }(t, i, r, h, l), r += s.lineHeight;
                t.restore()
            }

            function tX(t, e) {
                let {
                    x: i,
                    y: r,
                    w: s,
                    h: n,
                    radius: o
                } = e;
                t.arc(i + o.topLeft, r + o.topLeft, o.topLeft, -F, R, !0), t.lineTo(i, r + n - o.bottomLeft), t.arc(i + o.bottomLeft, r + n - o.bottomLeft, o.bottomLeft, R, F, !0), t.lineTo(i + s - o.bottomRight, r + n), t.arc(i + s - o.bottomRight, r + n - o.bottomRight, o.bottomRight, F, 0, !0), t.lineTo(i + s, r + o.topRight), t.arc(i + s - o.topRight, r + o.topRight, o.topRight, 0, -F, !0), t.lineTo(i + o.topLeft, r)
            }
            let tZ = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                tG = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/),
                tQ = t => +t || 0;

            function tJ(t, e) {
                let i = {},
                    r = f(e),
                    s = r ? Object.keys(e) : e,
                    n = f(t) ? r ? i => m(t[i], t[e[i]]) : e => t[e] : () => t;
                for (let t of s) i[t] = tQ(n(t));
                return i
            }

            function t0(t) {
                return tJ(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function t1(t) {
                return tJ(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function t2(t) {
                let e = t0(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function t5(t, e) {
                t = t || {}, e = e || tF.font;
                let i = m(t.size, e.size);
                "string" == typeof i && (i = parseInt(i, 10));
                let r = m(t.style, e.style);
                r && !("" + r).match(tG) && (console.warn('Invalid font style specified: "' + r + '"'), r = "");
                let s = {
                    family: m(t.family, e.family),
                    lineHeight: function(t, e) {
                        let i = ("" + t).match(tZ);
                        if (!i || "normal" === i[1]) return 1.2 * e;
                        switch (t = +i[2], i[3]) {
                            case "px":
                                return t;
                            case "%":
                                t /= 100
                        }
                        return e * t
                    }(m(t.lineHeight, e.lineHeight), i),
                    size: i,
                    style: r,
                    weight: m(t.weight, e.weight),
                    string: ""
                };
                return s.string = !s || c(s.size) || c(s.family) ? null : (s.style ? s.style + " " : "") + (s.weight ? s.weight + " " : "") + s.size + "px " + s.family, s
            }

            function t3(t, e, i, r) {
                let s, n, o, a = !0;
                for (s = 0, n = t.length; s < n; ++s)
                    if (void 0 !== (o = t[s]) && (void 0 !== e && "function" == typeof o && (o = o(e), a = !1), void 0 !== i && d(o) && (o = o[i % o.length], a = !1), void 0 !== o)) return r && !a && (r.cacheable = !1), o
            }

            function t6(t, e) {
                return Object.assign(Object.create(t), e)
            }

            function t8(t, e, i) {
                let r;
                i = i || (i => t[i] < e);
                let s = t.length - 1,
                    n = 0;
                for (; s - n > 1;) i(r = n + s >> 1) ? n = r : s = r;
                return {
                    lo: n,
                    hi: s
                }
            }
            let t4 = (t, e, i) => t8(t, i, r => t[r][e] < i),
                t7 = (t, e, i) => t8(t, i, r => t[r][e] >= i),
                t9 = ["push", "pop", "shift", "splice", "unshift"];

            function et(t, e) {
                let i = t._chartjs;
                if (!i) return;
                let r = i.listeners,
                    s = r.indexOf(e); - 1 !== s && r.splice(s, 1), r.length > 0 || (t9.forEach(e => {
                    delete t[e]
                }), delete t._chartjs)
            }

            function ee(t) {
                let e, i, r = new Set;
                for (e = 0, i = t.length; e < i; ++e) r.add(t[e]);
                return r.size === i ? t : Array.from(r)
            }

            function ei(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => t[0];
                return P(r) || (r = ec("_fallback", t)), new Proxy({
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: i,
                    _fallback: r,
                    _getTarget: s,
                    override: s => ei([s, ...t], e, i, r)
                }, {
                    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
                    get: (i, r) => ea(i, r, () => (function(t, e, i, r) {
                        let s;
                        for (let n of e)
                            if (P(s = ec(en(n, t), i))) return eo(t, s) ? el(i, r, t, s) : s
                    })(r, e, t, i)),
                    getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                    has: (t, e) => ed(t).includes(e),
                    ownKeys: t => ed(t),
                    set(t, e, i) {
                        let r = t._storage || (t._storage = s());
                        return t[e] = r[e] = i, delete t._keys, !0
                    }
                })
            }

            function er(t, e, i, r) {
                return new Proxy({
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: i,
                    _stack: new Set,
                    _descriptors: es(t, r),
                    setContext: e => er(t, e, i, r),
                    override: s => er(t.override(s), e, i, r)
                }, {
                    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
                    get: (t, e, i) => ea(t, e, () => (function(t, e, i) {
                        let {
                            _proxy: r,
                            _context: s,
                            _subProxy: n,
                            _descriptors: o
                        } = t, a = r[e];
                        return A(a) && o.isScriptable(e) && (a = function(t, e, i, r) {
                            let {
                                _proxy: s,
                                _context: n,
                                _subProxy: o,
                                _stack: a
                            } = i;
                            if (a.has(t)) throw Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                            return a.add(t), e = e(n, o || r), a.delete(t), eo(t, e) && (e = el(s._scopes, s, t, e)), e
                        }(e, a, t, i)), d(a) && a.length && (a = function(t, e, i, r) {
                            let {
                                _proxy: s,
                                _context: n,
                                _subProxy: o,
                                _descriptors: a
                            } = i;
                            if (P(n.index) && r(t)) e = e[n.index % e.length];
                            else if (f(e[0])) {
                                let i = e,
                                    r = s._scopes.filter(t => t !== i);
                                for (let h of (e = [], i)) {
                                    let i = el(r, s, t, h);
                                    e.push(er(i, n, o && o[t], a))
                                }
                            }
                            return e
                        }(e, a, t, o.isIndexable)), eo(e, a) && (a = er(a, s, n && n[e], o)), a
                    })(t, e, i)),
                    getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t),
                    has: (e, i) => Reflect.has(t, i),
                    ownKeys: () => Reflect.ownKeys(t),
                    set: (e, i, r) => (t[i] = r, delete e[i], !0)
                })
            }

            function es(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scriptable: !0,
                        indexable: !0
                    },
                    {
                        _scriptable: i = e.scriptable,
                        _indexable: r = e.indexable,
                        _allKeys: s = e.allKeys
                    } = t;
                return {
                    allKeys: s,
                    scriptable: i,
                    indexable: r,
                    isScriptable: A(i) ? i : () => i,
                    isIndexable: A(r) ? r : () => r
                }
            }
            let en = (t, e) => t ? t + E(e) : e,
                eo = (t, e) => f(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

            function ea(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                let r = i();
                return t[e] = r, r
            }
            let eh = (t, e) => !0 === t ? e : "string" == typeof t ? O(e, t) : void 0;

            function el(t, e, i, r) {
                var s;
                let n = e._rootScopes,
                    o = (s = e._fallback, A(s) ? s(i, r) : s),
                    a = [...t, ...n],
                    h = new Set;
                h.add(r);
                let l = eu(h, a, i, o || i, r);
                return !(null === l || P(o) && o !== i && null === (l = eu(h, a, o, l, r))) && ei(Array.from(h), [""], n, o, () => {
                    var t, s, n;
                    let o, a;
                    return t = e, s = i, n = r, s in (o = t._getTarget()) || (o[s] = {}), d(a = o[s]) && f(n) ? n : a
                })
            }

            function eu(t, e, i, r, s) {
                for (; i;) i = function(t, e, i, r, s) {
                    for (let o of e) {
                        let e = eh(i, o);
                        if (e) {
                            var n;
                            t.add(e);
                            let o = (n = e._fallback, A(n) ? n(i, s) : n);
                            if (P(o) && o !== i && o !== r) return o
                        } else if (!1 === e && P(r) && i !== r) return null
                    }
                    return !1
                }(t, e, i, r, s);
                return i
            }

            function ec(t, e) {
                for (let i of e) {
                    if (!i) continue;
                    let e = i[t];
                    if (P(e)) return e
                }
            }

            function ed(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    let e = new Set;
                    for (let i of t)
                        for (let t of Object.keys(i).filter(t => !t.startsWith("_"))) e.add(t);
                    return Array.from(e)
                }(t._scopes)), e
            }
            let ef = Number.EPSILON || 1e-14,
                ep = (t, e) => e < t.length && !t[e].skip && t[e],
                eg = t => "x" === t ? "y" : "x";

            function em(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }

            function eb() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function e_(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            }

            function ev(t, e, i) {
                let r;
                return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[i])) : r = t, r
            }
            let ey = ["top", "right", "bottom", "left"];

            function ex(t, e, i) {
                let r = {};
                i = i ? "-" + i : "";
                for (let s = 0; s < 4; s++) {
                    let n = ey[s];
                    r[n] = parseFloat(t[e + "-" + n + i]) || 0
                }
                return r.width = r.left + r.right, r.height = r.top + r.bottom, r
            }

            function ew(t, e) {
                let {
                    canvas: i,
                    currentDevicePixelRatio: r
                } = e, s = window.getComputedStyle(i, null), n = "border-box" === s.boxSizing, o = ex(s, "padding"), a = ex(s, "border", "width"), {
                    x: h,
                    y: l,
                    box: u
                } = function(t, e) {
                    let i, r, s, n = t.native || t,
                        o = n.touches,
                        a = o && o.length ? o[0] : n,
                        {
                            offsetX: h,
                            offsetY: l
                        } = a,
                        u = !1;
                    if (s = n.target, (h > 0 || l > 0) && (!s || !s.shadowRoot)) i = h, r = l;
                    else {
                        let t = e.getBoundingClientRect();
                        i = a.clientX - t.left, r = a.clientY - t.top, u = !0
                    }
                    return {
                        x: i,
                        y: r,
                        box: u
                    }
                }(t, i), c = o.left + (u && a.left), d = o.top + (u && a.top), {
                    width: f,
                    height: p
                } = e;
                return n && (f -= o.width + a.width, p -= o.height + a.height), {
                    x: Math.round((h - c) / f * i.width / r),
                    y: Math.round((l - d) / p * i.height / r)
                }
            }
            let eT = t => Math.round(10 * t) / 10;

            function eM(t, e, i) {
                let r = e || 1,
                    s = Math.floor(t.height * r),
                    n = Math.floor(t.width * r);
                t.height = s / r, t.width = n / r;
                let o = t.canvas;
                return o.style && (i || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== r || o.height !== s || o.width !== n) && (t.currentDevicePixelRatio = r, o.height = s, o.width = n, t.ctx.setTransform(r, 0, 0, r, 0, 0), !0)
            }
            let eS = function() {
                let t = !1;
                try {
                    let e = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                } catch (t) {}
                return t
            }();

            function ek(t, e) {
                let i = window.getComputedStyle(t, null).getPropertyValue(e),
                    r = i && i.match(/^(\d+)(\.\d+)?px$/);
                return r ? +r[1] : void 0
            }

            function eD(t, e, i, r) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: t.y + i * (e.y - t.y)
                }
            }

            function eO(t, e, i, r) {
                return {
                    x: t.x + i * (e.x - t.x),
                    y: "middle" === r ? i < .5 ? t.y : e.y : "after" === r ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
                }
            }

            function eE(t, e, i, r) {
                let s = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    n = {
                        x: e.cp1x,
                        y: e.cp1y
                    },
                    o = eD(t, s, i),
                    a = eD(s, n, i),
                    h = eD(n, e, i),
                    l = eD(o, a, i),
                    u = eD(a, h, i);
                return eD(l, u, i)
            }
            let eP = new Map;

            function eA(t, e, i) {
                var r;
                let s, n;
                return (s = e + JSON.stringify(r = (r = i) || {}), !(n = eP.get(s)) && (n = new Intl.NumberFormat(e, r), eP.set(s, n)), n).format(t)
            }

            function eC(t, e, i) {
                var r;
                return t ? (r = i, {
                    x: t => e + e + r - t,
                    setWidth(t) {
                        r = t
                    },
                    textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                    xPlus: (t, e) => t - e,
                    leftForLtr: (t, e) => t - e
                }) : {
                    x: t => t,
                    setWidth(t) {},
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                }
            }

            function eR(t, e) {
                let i, r;
                ("ltr" === e || "rtl" === e) && (r = [(i = t.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = r)
            }

            function eL(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }

            function eB(t) {
                return "angle" === t ? {
                    between: J,
                    compare: G,
                    normalize: Q
                } : {
                    between: te,
                    compare: (t, e) => t - e,
                    normalize: t => t
                }
            }

            function eV(t) {
                let {
                    start: e,
                    end: i,
                    count: r,
                    loop: s,
                    style: n
                } = t;
                return {
                    start: e % r,
                    end: i % r,
                    loop: s && (i - e + 1) % r == 0,
                    style: n
                }
            }

            function eI(t, e, i, r) {
                return r && r.setContext && i ? function(t, e, i, r) {
                    let s = t._chart.getContext(),
                        n = eF(t.options),
                        {
                            _datasetIndex: o,
                            options: {
                                spanGaps: a
                            }
                        } = t,
                        h = i.length,
                        l = [],
                        u = n,
                        c = e[0].start,
                        d = c;

                    function f(t, e, r, s) {
                        let n = a ? -1 : 1;
                        if (t !== e) {
                            for (t += h; i[t % h].skip;) t -= n;
                            for (; i[e % h].skip;) e += n;
                            t % h != e % h && (l.push({
                                start: t % h,
                                end: e % h,
                                loop: r,
                                style: s
                            }), u = s, c = e % h)
                        }
                    }
                    for (let t of e) {
                        let e, n = i[(c = a ? c : t.start) % h];
                        for (d = c + 1; d <= t.end; d++) {
                            var p, g;
                            let a = i[d % h];
                            p = e = eF(r.setContext(t6(s, {
                                type: "segment",
                                p0: n,
                                p1: a,
                                p0DataIndex: (d - 1) % h,
                                p1DataIndex: d % h,
                                datasetIndex: o
                            }))), (g = u) && JSON.stringify(p) !== JSON.stringify(g) && f(c, d - 1, t.loop, u), n = a, u = e
                        }
                        c < d - 1 && f(c, d - 1, t.loop, u)
                    }
                    return l
                }(t, e, i, r) : e
            }

            function eF(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }
            var ez = new class {
                _notify(t, e, i, r) {
                    let s = e.listeners[r],
                        n = e.duration;
                    s.forEach(r => r({
                        chart: t,
                        initial: e.initial,
                        numSteps: n,
                        currentStep: Math.min(i - e.start, n)
                    }))
                }
                _refresh() {
                    this._request || (this._running = !0, this._request = n.call(window, () => {
                        this._update(), this._request = null, this._running && this._refresh()
                    }))
                }
                _update() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                        e = 0;
                    this._charts.forEach((i, r) => {
                        let s;
                        if (!i.running || !i.items.length) return;
                        let n = i.items,
                            o = n.length - 1,
                            a = !1;
                        for (; o >= 0; --o)(s = n[o])._active ? (s._total > i.duration && (i.duration = s._total), s.tick(t), a = !0) : (n[o] = n[n.length - 1], n.pop());
                        a && (r.draw(), this._notify(r, i, t, "progress")), n.length || (i.running = !1, this._notify(r, i, t, "complete"), i.initial = !1), e += n.length
                    }), this._lastDate = t, 0 === e && (this._running = !1)
                }
                _getAnims(t) {
                    let e = this._charts,
                        i = e.get(t);
                    return i || (i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: {
                            complete: [],
                            progress: []
                        }
                    }, e.set(t, i)), i
                }
                listen(t, e, i) {
                    this._getAnims(t).listeners[e].push(i)
                }
                add(t, e) {
                    e && e.length && this._getAnims(t).items.push(...e)
                }
                has(t) {
                    return this._getAnims(t).items.length > 0
                }
                start(t) {
                    let e = this._charts.get(t);
                    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0), this._refresh())
                }
                running(t) {
                    if (!this._running) return !1;
                    let e = this._charts.get(t);
                    return !!e && !!e.running && !!e.items.length
                }
                stop(t) {
                    let e = this._charts.get(t);
                    if (!e || !e.items.length) return;
                    let i = e.items,
                        r = i.length - 1;
                    for (; r >= 0; --r) i[r].cancel();
                    e.items = [], this._notify(t, e, Date.now(), "complete")
                }
                remove(t) {
                    return this._charts.delete(t)
                }
                constructor() {
                    this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
                }
            };
            let eN = "transparent",
                ej = {
                    boolean: (t, e, i) => i > .5 ? e : t,
                    color(t, e, i) {
                        let r = tC(t || eN),
                            s = r.valid && tC(e || eN);
                        return s && s.valid ? s.mix(r, i).hexString() : e
                    },
                    number: (t, e, i) => t + (e - t) * i
                };
            class eH {
                active() {
                    return this._active
                }
                update(t, e, i) {
                    if (this._active) {
                        this._notify(!1);
                        let r = this._target[this._prop],
                            s = i - this._start,
                            n = this._duration - s;
                        this._start = i, this._duration = Math.floor(Math.max(n, t.duration)), this._total += s, this._loop = !!t.loop, this._to = t3([t.to, e, r, t.from]), this._from = t3([t.from, r, e])
                    }
                }
                cancel() {
                    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
                }
                tick(t) {
                    let e, i = t - this._start,
                        r = this._duration,
                        s = this._prop,
                        n = this._from,
                        o = this._loop,
                        a = this._to;
                    if (this._active = n !== a && (o || i < r), !this._active) {
                        this._target[s] = a, this._notify(!0);
                        return
                    }
                    if (i < 0) {
                        this._target[s] = n;
                        return
                    }
                    e = i / r % 2, e = o && e > 1 ? 2 - e : e, e = this._easing(Math.min(1, Math.max(0, e))), this._target[s] = this._fn(n, a, e)
                }
                wait() {
                    let t = this._promises || (this._promises = []);
                    return new Promise((e, i) => {
                        t.push({
                            res: e,
                            rej: i
                        })
                    })
                }
                _notify(t) {
                    let e = t ? "res" : "rej",
                        i = this._promises || [];
                    for (let t = 0; t < i.length; t++) i[t][e]()
                }
                constructor(t, e, i, r) {
                    const s = e[i];
                    r = t3([t.to, r, s, t.from]);
                    const n = t3([t.from, s, r]);
                    this._active = !0, this._fn = t.fn || ej[t.type || typeof n], this._easing = tn[t.easing] || tn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = n, this._to = r, this._promises = void 0
                }
            }
            tF.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            });
            let eW = Object.keys(tF.animation);
            tF.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
            }), tF.set("animations", {
                colors: {
                    type: "color",
                    properties: ["color", "borderColor", "backgroundColor"]
                },
                numbers: {
                    type: "number",
                    properties: ["x", "y", "borderWidth", "radius", "tension"]
                }
            }), tF.describe("animations", {
                _fallback: "animation"
            }), tF.set("transitions", {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                resize: {
                    animation: {
                        duration: 0
                    }
                },
                show: {
                    animations: {
                        colors: {
                            from: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            easing: "linear",
                            fn: t => 0 | t
                        }
                    }
                }
            });
            class eU {
                configure(t) {
                    if (!f(t)) return;
                    let e = this._properties;
                    Object.getOwnPropertyNames(t).forEach(i => {
                        let r = t[i];
                        if (!f(r)) return;
                        let s = {};
                        for (let t of eW) s[t] = r[t];
                        (d(r.properties) && r.properties || [i]).forEach(t => {
                            t !== i && e.has(t) || e.set(t, s)
                        })
                    })
                }
                _animateOptions(t, e) {
                    let i = e.options,
                        r = function(t, e) {
                            if (!e) return;
                            let i = t.options;
                            if (!i) {
                                t.options = e;
                                return
                            }
                            return i.$shared && (t.options = i = Object.assign({}, i, {
                                $shared: !1,
                                $animations: {}
                            })), i
                        }(t, i);
                    if (!r) return [];
                    let s = this._createAnimations(r, i);
                    return i.$shared && (function(t, e) {
                        let i = [],
                            r = Object.keys(e);
                        for (let e = 0; e < r.length; e++) {
                            let s = t[r[e]];
                            s && s.active() && i.push(s.wait())
                        }
                        return Promise.all(i)
                    })(t.options.$animations, i).then(() => {
                        t.options = i
                    }, () => {}), s
                }
                _createAnimations(t, e) {
                    let i, r = this._properties,
                        s = [],
                        n = t.$animations || (t.$animations = {}),
                        o = Object.keys(e),
                        a = Date.now();
                    for (i = o.length - 1; i >= 0; --i) {
                        let h = o[i];
                        if ("$" === h.charAt(0)) continue;
                        if ("options" === h) {
                            s.push(...this._animateOptions(t, e));
                            continue
                        }
                        let l = e[h],
                            u = n[h],
                            c = r.get(h);
                        if (u)
                            if (c && u.active()) {
                                u.update(c, l, a);
                                continue
                            } else u.cancel();
                        if (!c || !c.duration) {
                            t[h] = l;
                            continue
                        }
                        n[h] = u = new eH(c, t, h, l), s.push(u)
                    }
                    return s
                }
                update(t, e) {
                    if (0 === this._properties.size) return void Object.assign(t, e);
                    let i = this._createAnimations(t, e);
                    if (i.length) return ez.add(this._chart, i), !0
                }
                constructor(t, e) {
                    this._chart = t, this._properties = new Map, this.configure(e)
                }
            }

            function eq(t, e) {
                let i = t && t.options || {},
                    r = i.reverse,
                    s = void 0 === i.min ? e : 0,
                    n = void 0 === i.max ? e : 0;
                return {
                    start: r ? n : s,
                    end: r ? s : n
                }
            }

            function e$(t, e) {
                let i, r, s = [],
                    n = t._getSortedDatasetMetas(e);
                for (i = 0, r = n.length; i < r; ++i) s.push(n[i].index);
                return s
            }

            function eY(t, e, i) {
                let r, s, n, o, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    h = t.keys,
                    l = "single" === a.mode;
                if (null !== e) {
                    for (r = 0, s = h.length; r < s; ++r) {
                        if ((n = +h[r]) === i) {
                            if (a.all) continue;
                            break
                        }
                        p(o = t.values[n]) && (l || 0 === e || H(e) === H(o)) && (e += o)
                    }
                    return e
                }
            }

            function eK(t, e) {
                let i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
            }

            function eX(t, e, i, r) {
                for (let s of e.getMatchingVisibleMetas(r).reverse()) {
                    let e = t[s.index];
                    if (i && e > 0 || !i && e < 0) return s.index
                }
                return null
            }

            function eZ(t, e) {
                let i, {
                        chart: r,
                        _cachedMeta: s
                    } = t,
                    n = r._stacks || (r._stacks = {}),
                    {
                        iScale: o,
                        vScale: a,
                        index: h
                    } = s,
                    l = o.axis,
                    u = a.axis,
                    c = `${o.id}.${a.id}.${s.stack||s.type}`,
                    d = e.length;
                for (let t = 0; t < d; ++t) {
                    let r = e[t],
                        {
                            [l]: o,
                            [u]: d
                        } = r;
                    (i = (r._stacks || (r._stacks = {}))[u] = function(t, e, i) {
                        let r = t[e] || (t[e] = {});
                        return r[i] || (r[i] = {})
                    }(n, c, o))[h] = d, i._top = eX(i, a, !0, s.type), i._bottom = eX(i, a, !1, s.type)
                }
            }

            function eG(t, e) {
                let i = t.scales;
                return Object.keys(i).filter(t => i[t].axis === e).shift()
            }

            function eQ(t, e) {
                let i = t.controller.index,
                    r = t.vScale && t.vScale.axis;
                if (r)
                    for (let s of e = e || t._parsed) {
                        let t = s._stacks;
                        if (!t || void 0 === t[r] || void 0 === t[r][i]) return;
                        delete t[r][i]
                    }
            }
            let eJ = t => "reset" === t || "none" === t,
                e0 = (t, e) => e ? t : Object.assign({}, t);
            class e1 {
                initialize() {
                    let t = this._cachedMeta;
                    this.configure(), this.linkScales(), t._stacked = eK(t.vScale, t), this.addElements()
                }
                updateIndex(t) {
                    this.index !== t && eQ(this._cachedMeta), this.index = t
                }
                linkScales() {
                    let t = this.chart,
                        e = this._cachedMeta,
                        i = this.getDataset(),
                        r = (t, e, i, r) => "x" === t ? e : "r" === t ? r : i,
                        s = e.xAxisID = m(i.xAxisID, eG(t, "x")),
                        n = e.yAxisID = m(i.yAxisID, eG(t, "y")),
                        o = e.rAxisID = m(i.rAxisID, eG(t, "r")),
                        a = e.indexAxis,
                        h = e.iAxisID = r(a, s, n, o),
                        l = e.vAxisID = r(a, n, s, o);
                    e.xScale = this.getScaleForId(s), e.yScale = this.getScaleForId(n), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(l)
                }
                getDataset() {
                    return this.chart.data.datasets[this.index]
                }
                getMeta() {
                    return this.chart.getDatasetMeta(this.index)
                }
                getScaleForId(t) {
                    return this.chart.scales[t]
                }
                _getOtherScale(t) {
                    let e = this._cachedMeta;
                    return t === e.iScale ? e.vScale : e.iScale
                }
                reset() {
                    this._update("reset")
                }
                _destroy() {
                    let t = this._cachedMeta;
                    this._data && et(this._data, this), t._stacked && eQ(t)
                }
                _dataCheck() {
                    let t = this.getDataset(),
                        e = t.data || (t.data = []),
                        i = this._data;
                    if (f(e)) this._data = function(t) {
                        let e, i, r, s = Object.keys(t),
                            n = Array(s.length);
                        for (e = 0, i = s.length; e < i; ++e) r = s[e], n[e] = {
                            x: r,
                            y: t[r]
                        };
                        return n
                    }(e);
                    else if (i !== e) {
                        if (i) {
                            et(i, this);
                            let t = this._cachedMeta;
                            eQ(t), t._parsed = []
                        }
                        e && Object.isExtensible(e) && (e._chartjs ? e._chartjs.listeners.push(this) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [this]
                            }
                        }), t9.forEach(t => {
                            let i = "_onData" + E(t),
                                r = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !1,
                                value() {
                                    for (var t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                                    let o = r.apply(this, s);
                                    return e._chartjs.listeners.forEach(t => {
                                        "function" == typeof t[i] && t[i](...s)
                                    }), o
                                }
                            })
                        }))), this._syncList = [], this._data = e
                    }
                }
                addElements() {
                    let t = this._cachedMeta;
                    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
                }
                buildOrUpdateElements(t) {
                    let e = this._cachedMeta,
                        i = this.getDataset(),
                        r = !1;
                    this._dataCheck();
                    let s = e._stacked;
                    e._stacked = eK(e.vScale, e), e.stack !== i.stack && (r = !0, eQ(e), e.stack = i.stack), this._resyncElements(t), (r || s !== e._stacked) && eZ(this, e._parsed)
                }
                configure() {
                    let t = this.chart.config,
                        e = t.datasetScopeKeys(this._type),
                        i = t.getOptionScopes(this.getDataset(), e, !0);
                    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
                }
                parse(t, e) {
                    let i, r, s, {
                            _cachedMeta: n,
                            _data: o
                        } = this,
                        {
                            iScale: a,
                            _stacked: h
                        } = n,
                        l = a.axis,
                        u = 0 === t && e === o.length || n._sorted,
                        c = t > 0 && n._parsed[t - 1];
                    if (!1 === this._parsing) n._parsed = o, n._sorted = !0, s = o;
                    else {
                        s = d(o[t]) ? this.parseArrayData(n, o, t, e) : f(o[t]) ? this.parseObjectData(n, o, t, e) : this.parsePrimitiveData(n, o, t, e);
                        let a = () => null === r[l] || c && r[l] < c[l];
                        for (i = 0; i < e; ++i) n._parsed[i + t] = r = s[i], u && (a() && (u = !1), c = r);
                        n._sorted = u
                    }
                    h && eZ(this, s)
                }
                parsePrimitiveData(t, e, i, r) {
                    let s, n, {
                            iScale: o,
                            vScale: a
                        } = t,
                        h = o.axis,
                        l = a.axis,
                        u = o.getLabels(),
                        c = o === a,
                        d = Array(r);
                    for (s = 0; s < r; ++s) n = s + i, d[s] = {
                        [h]: c || o.parse(u[n], n),
                        [l]: a.parse(e[n], n)
                    };
                    return d
                }
                parseArrayData(t, e, i, r) {
                    let s, n, o, {
                            xScale: a,
                            yScale: h
                        } = t,
                        l = Array(r);
                    for (s = 0; s < r; ++s) o = e[n = s + i], l[s] = {
                        x: a.parse(o[0], n),
                        y: h.parse(o[1], n)
                    };
                    return l
                }
                parseObjectData(t, e, i, r) {
                    let s, n, o, {
                            xScale: a,
                            yScale: h
                        } = t,
                        {
                            xAxisKey: l = "x",
                            yAxisKey: u = "y"
                        } = this._parsing,
                        c = Array(r);
                    for (s = 0; s < r; ++s) o = e[n = s + i], c[s] = {
                        x: a.parse(O(o, l), n),
                        y: h.parse(O(o, u), n)
                    };
                    return c
                }
                getParsed(t) {
                    return this._cachedMeta._parsed[t]
                }
                getDataElement(t) {
                    return this._cachedMeta.data[t]
                }
                applyStack(t, e, i) {
                    let r = this.chart,
                        s = this._cachedMeta,
                        n = e[t.axis];
                    return eY({
                        keys: e$(r, !0),
                        values: e._stacks[t.axis]
                    }, n, s.index, {
                        mode: i
                    })
                }
                updateRangeFromParsed(t, e, i, r) {
                    let s = i[e.axis],
                        n = null === s ? NaN : s,
                        o = r && i._stacks[e.axis];
                    r && o && (r.values = o, n = eY(r, s, this._cachedMeta.index)), t.min = Math.min(t.min, n), t.max = Math.max(t.max, n)
                }
                getMinMax(t, e) {
                    let i, r, s, n = this._cachedMeta,
                        o = n._parsed,
                        a = n._sorted && t === n.iScale,
                        h = o.length,
                        l = this._getOtherScale(t),
                        u = (s = this.chart, e && !n.hidden && n._stacked && {
                            keys: e$(s, !0),
                            values: null
                        }),
                        c = {
                            min: 1 / 0,
                            max: -1 / 0
                        },
                        {
                            min: d,
                            max: f
                        } = function(t) {
                            let {
                                min: e,
                                max: i,
                                minDefined: r,
                                maxDefined: s
                            } = t.getUserBounds();
                            return {
                                min: r ? e : -1 / 0,
                                max: s ? i : 1 / 0
                            }
                        }(l);

                    function g() {
                        let e = (r = o[i])[l.axis];
                        return !p(r[t.axis]) || d > e || f < e
                    }
                    for (i = 0; i < h && (g() || (this.updateRangeFromParsed(c, t, r, u), !a)); ++i);
                    if (a) {
                        for (i = h - 1; i >= 0; --i)
                            if (!g()) {
                                this.updateRangeFromParsed(c, t, r, u);
                                break
                            }
                    }
                    return c
                }
                getAllParsedValues(t) {
                    let e, i, r, s = this._cachedMeta._parsed,
                        n = [];
                    for (e = 0, i = s.length; e < i; ++e) p(r = s[e][t.axis]) && n.push(r);
                    return n
                }
                getMaxOverflow() {
                    return !1
                }
                getLabelAndValue(t) {
                    let e = this._cachedMeta,
                        i = e.iScale,
                        r = e.vScale,
                        s = this.getParsed(t);
                    return {
                        label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
                        value: r ? "" + r.getLabelForValue(s[r.axis]) : ""
                    }
                }
                _update(t) {
                    var e;
                    let i, r, s, n, o = this._cachedMeta;
                    this.update(t || "default"), f(e = m(this.options.clip, function(t, e, i) {
                        if (!1 === i) return !1;
                        let r = eq(t, i),
                            s = eq(e, i);
                        return {
                            top: s.end,
                            right: r.end,
                            bottom: s.start,
                            left: r.start
                        }
                    }(o.xScale, o.yScale, this.getMaxOverflow()))) ? (i = e.top, r = e.right, s = e.bottom, n = e.left) : i = r = s = n = e, o._clip = {
                        top: i,
                        right: r,
                        bottom: s,
                        left: n,
                        disabled: !1 === e
                    }
                }
                update(t) {}
                draw() {
                    let t, e = this._ctx,
                        i = this.chart,
                        r = this._cachedMeta,
                        s = r.data || [],
                        n = i.chartArea,
                        o = [],
                        a = this._drawStart || 0,
                        h = this._drawCount || s.length - a,
                        l = this.options.drawActiveElementsOnTop;
                    for (r.dataset && r.dataset.draw(e, n, a, h), t = a; t < a + h; ++t) {
                        let i = s[t];
                        i.hidden || (i.active && l ? o.push(i) : i.draw(e, n))
                    }
                    for (t = 0; t < o.length; ++t) o[t].draw(e, n)
                }
                getStyle(t, e) {
                    let i = e ? "active" : "default";
                    return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
                }
                getContext(t, e, i) {
                    var r, s;
                    let n, o = this.getDataset();
                    if (t >= 0 && t < this._cachedMeta.data.length) {
                        let e = this._cachedMeta.data[t];
                        (n = e.$context || (r = this.getContext(), e.$context = t6(r, {
                            active: !1,
                            dataIndex: t,
                            parsed: void 0,
                            raw: void 0,
                            element: e,
                            index: t,
                            mode: "default",
                            type: "data"
                        }))).parsed = this.getParsed(t), n.raw = o.data[t], n.index = n.dataIndex = t
                    } else(n = this.$context || (this.$context = t6(this.chart.getContext(), {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: s = this.index,
                        index: s,
                        mode: "default",
                        type: "dataset"
                    }))).dataset = o, n.index = n.datasetIndex = this.index;
                    return n.active = !!e, n.mode = i, n
                }
                resolveDatasetElementOptions(t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t)
                }
                resolveDataElementOptions(t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t)
                }
                _resolveElementOptions(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        r = "active" === e,
                        s = this._cachedDataOpts,
                        n = t + "-" + e,
                        o = s[n],
                        a = this.enableOptionSharing && P(i);
                    if (o) return e0(o, a);
                    let h = this.chart.config,
                        l = h.datasetElementScopeKeys(this._type, t),
                        u = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                        c = h.getOptionScopes(this.getDataset(), l),
                        d = Object.keys(tF.elements[t]),
                        f = () => this.getContext(i, r),
                        p = h.resolveNamedOptions(c, d, f, u);
                    return p.$shared && (p.$shared = a, s[n] = Object.freeze(e0(p, a))), p
                }
                _resolveAnimations(t, e, i) {
                    let r, s = this.chart,
                        n = this._cachedDataOpts,
                        o = `animation-${e}`,
                        a = n[o];
                    if (a) return a;
                    if (!1 !== s.options.animation) {
                        let s = this.chart.config,
                            n = s.datasetAnimationScopeKeys(this._type, e),
                            o = s.getOptionScopes(this.getDataset(), n);
                        r = s.createResolver(o, this.getContext(t, i, e))
                    }
                    let h = new eU(s, r && r.animations);
                    return r && r._cacheable && (n[o] = Object.freeze(h)), h
                }
                getSharedOptions(t) {
                    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                }
                includeOptions(t, e) {
                    return !e || eJ(t) || this.chart._animationsDisabled
                }
                updateElement(t, e, i, r) {
                    eJ(r) ? Object.assign(t, i) : this._resolveAnimations(e, r).update(t, i)
                }
                updateSharedOptions(t, e, i) {
                    t && !eJ(e) && this._resolveAnimations(void 0, e).update(t, i)
                }
                _setStyle(t, e, i, r) {
                    t.active = r;
                    let s = this.getStyle(e, r);
                    this._resolveAnimations(e, i, r).update(t, {
                        options: !r && this.getSharedOptions(s) || s
                    })
                }
                removeHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !1)
                }
                setHoverStyle(t, e, i) {
                    this._setStyle(t, i, "active", !0)
                }
                _removeDatasetHoverStyle() {
                    let t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !1)
                }
                _setDatasetHoverStyle() {
                    let t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !0)
                }
                _resyncElements(t) {
                    let e = this._data,
                        i = this._cachedMeta.data;
                    for (let [t, e, i] of this._syncList) this[t](e, i);
                    this._syncList = [];
                    let r = i.length,
                        s = e.length,
                        n = Math.min(s, r);
                    n && this.parse(0, n), s > r ? this._insertElements(r, s - r, t) : s < r && this._removeElements(s, r - s)
                }
                _insertElements(t, e) {
                    let i, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        s = this._cachedMeta,
                        n = s.data,
                        o = t + e,
                        a = t => {
                            for (t.length += e, i = t.length - 1; i >= o; i--) t[i] = t[i - e]
                        };
                    for (a(n), i = t; i < o; ++i) n[i] = new this.dataElementType;
                    this._parsing && a(s._parsed), this.parse(t, e), r && this.updateElements(n, t, e, "reset")
                }
                updateElements(t, e, i, r) {}
                _removeElements(t, e) {
                    let i = this._cachedMeta;
                    if (this._parsing) {
                        let r = i._parsed.splice(t, e);
                        i._stacked && eQ(i, r)
                    }
                    i.data.splice(t, e)
                }
                _sync(t) {
                    if (this._parsing) this._syncList.push(t);
                    else {
                        let [e, i, r] = t;
                        this[e](i, r)
                    }
                    this.chart._dataChanges.push([this.index, ...t])
                }
                _onDataPush() {
                    let t = arguments.length;
                    this._sync(["_insertElements", this.getDataset().data.length - t, t])
                }
                _onDataPop() {
                    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
                }
                _onDataShift() {
                    this._sync(["_removeElements", 0, 1])
                }
                _onDataSplice(t, e) {
                    e && this._sync(["_removeElements", t, e]);
                    let i = arguments.length - 2;
                    i && this._sync(["_insertElements", t, i])
                }
                _onDataUnshift() {
                    this._sync(["_insertElements", 0, arguments.length])
                }
                constructor(t, e) {
                    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize()
                }
            }

            function e2(t, e, i, r) {
                if (d(t)) {
                    let s, n, o, a, h, l;
                    s = i.parse(t[0], r), o = Math.min(s, n = i.parse(t[1], r)), a = Math.max(s, n), h = o, l = a, Math.abs(o) > Math.abs(a) && (h = a, l = o), e[i.axis] = l, e._custom = {
                        barStart: h,
                        barEnd: l,
                        start: s,
                        end: n,
                        min: o,
                        max: a
                    }
                } else e[i.axis] = i.parse(t, r);
                return e
            }

            function e5(t, e, i, r) {
                let s, n, o, a, h = t.iScale,
                    l = t.vScale,
                    u = h.getLabels(),
                    c = h === l,
                    d = [];
                for (s = i, n = i + r; s < n; ++s) a = e[s], (o = {})[h.axis] = c || h.parse(u[s], s), d.push(e2(a, o, l, s));
                return d
            }

            function e3(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd
            }

            function e6(t, e, i, r) {
                var s, n, o;
                return r ? e8((s = t, n = e, o = i, t = s === n ? o : s === o ? n : s), i, e) : e8(t, e, i)
            }

            function e8(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t
            }
            e1.defaults = {}, e1.prototype.datasetElementType = null, e1.prototype.dataElementType = null;
            class e4 extends e1 {
                parsePrimitiveData(t, e, i, r) {
                    return e5(t, e, i, r)
                }
                parseArrayData(t, e, i, r) {
                    return e5(t, e, i, r)
                }
                parseObjectData(t, e, i, r) {
                    let s, n, o, a, {
                            iScale: h,
                            vScale: l
                        } = t,
                        {
                            xAxisKey: u = "x",
                            yAxisKey: c = "y"
                        } = this._parsing,
                        d = "x" === h.axis ? u : c,
                        f = "x" === l.axis ? u : c,
                        p = [];
                    for (s = i, n = i + r; s < n; ++s) a = e[s], (o = {})[h.axis] = h.parse(O(a, d), s), p.push(e2(O(a, f), o, l, s));
                    return p
                }
                updateRangeFromParsed(t, e, i, r) {
                    super.updateRangeFromParsed(t, e, i, r);
                    let s = i._custom;
                    s && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, s.min), t.max = Math.max(t.max, s.max))
                }
                getMaxOverflow() {
                    return 0
                }
                getLabelAndValue(t) {
                    let {
                        iScale: e,
                        vScale: i
                    } = this._cachedMeta, r = this.getParsed(t), s = r._custom, n = e3(s) ? "[" + s.start + ", " + s.end + "]" : "" + i.getLabelForValue(r[i.axis]);
                    return {
                        label: "" + e.getLabelForValue(r[e.axis]),
                        value: n
                    }
                }
                initialize() {
                    this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
                }
                update(t) {
                    let e = this._cachedMeta;
                    this.updateElements(e.data, 0, e.data.length, t)
                }
                updateElements(t, e, i, r) {
                    let s = "reset" === r,
                        {
                            index: n,
                            _cachedMeta: {
                                vScale: o
                            }
                        } = this,
                        a = o.getBasePixel(),
                        h = o.isHorizontal(),
                        l = this._getRuler(),
                        u = this.resolveDataElementOptions(e, r),
                        d = this.getSharedOptions(u),
                        f = this.includeOptions(r, d);
                    this.updateSharedOptions(d, r, u);
                    for (let u = e; u < e + i; u++) {
                        let e = this.getParsed(u),
                            i = s || c(e[o.axis]) ? {
                                base: a,
                                head: a
                            } : this._calculateBarValuePixels(u),
                            p = this._calculateBarIndexPixels(u, l),
                            g = (e._stacks || {})[o.axis],
                            m = {
                                horizontal: h,
                                base: i.base,
                                enableBorderRadius: !g || e3(e._custom) || n === g._top || n === g._bottom,
                                x: h ? i.head : p.center,
                                y: h ? p.center : i.head,
                                height: h ? p.size : Math.abs(i.size),
                                width: h ? Math.abs(i.size) : p.size
                            };
                        f && (m.options = d || this.resolveDataElementOptions(u, t[u].active ? "active" : r));
                        let b = m.options || t[u].options;
                        ! function(t, e, i, r) {
                            let s, n, o, a, h, l = e.borderSkipped,
                                u = {};
                            if (!l) {
                                t.borderSkipped = u;
                                return
                            }
                            let {
                                start: c,
                                end: d,
                                reverse: f,
                                top: p,
                                bottom: g
                            } = (t.horizontal ? (s = t.base > t.x, n = "left", o = "right") : (s = t.base < t.y, n = "bottom", o = "top"), s ? (a = "end", h = "start") : (a = "start", h = "end"), {
                                start: n,
                                end: o,
                                reverse: s,
                                top: a,
                                bottom: h
                            });
                            "middle" === l && i && (t.enableBorderRadius = !0, (i._top || 0) === r ? l = p : (i._bottom || 0) === r ? l = g : (u[e6(g, c, d, f)] = !0, l = p)), u[e6(l, c, d, f)] = !0, t.borderSkipped = u
                        }(m, b, g, n),
                        function(t, e, i) {
                            let {
                                inflateAmount: r
                            } = e;
                            t.inflateAmount = "auto" === r ? .33 * (1 === i) : r
                        }(m, b, l.ratio), this.updateElement(t[u], u, m, r)
                    }
                }
                _getStacks(t, e) {
                    let i, r, s = this._cachedMeta.iScale,
                        n = s.getMatchingVisibleMetas(this._type),
                        o = s.options.stacked,
                        a = n.length,
                        h = [];
                    for (i = 0; i < a; ++i)
                        if ((r = n[i]).controller.options.grouped) {
                            if (void 0 !== e) {
                                let t = r.controller.getParsed(e)[r.controller._cachedMeta.vScale.axis];
                                if (c(t) || isNaN(t)) continue
                            }
                            if ((!1 === o || -1 === h.indexOf(r.stack) || void 0 === o && void 0 === r.stack) && h.push(r.stack), r.index === t) break
                        } return h.length || h.push(void 0), h
                }
                _getStackCount(t) {
                    return this._getStacks(void 0, t).length
                }
                _getStackIndex(t, e, i) {
                    let r = this._getStacks(t, i),
                        s = void 0 !== e ? r.indexOf(e) : -1;
                    return -1 === s ? r.length - 1 : s
                }
                _getRuler() {
                    let t, e, i = this.options,
                        r = this._cachedMeta,
                        s = r.iScale,
                        n = [];
                    for (t = 0, e = r.data.length; t < e; ++t) n.push(s.getPixelForValue(this.getParsed(t)[s.axis], t));
                    let o = i.barThickness;
                    return {
                        min: o || function(t) {
                            let e, i, r, s, n = t.iScale,
                                o = function(t, e) {
                                    if (!t._cache.$bar) {
                                        let i = t.getMatchingVisibleMetas(e),
                                            r = [];
                                        for (let e = 0, s = i.length; e < s; e++) r = r.concat(i[e].controller.getAllParsedValues(t));
                                        t._cache.$bar = ee(r.sort((t, e) => t - e))
                                    }
                                    return t._cache.$bar
                                }(n, t.type),
                                a = n._length,
                                h = () => {
                                    32767 !== r && -32768 !== r && (P(s) && (a = Math.min(a, Math.abs(r - s) || a)), s = r)
                                };
                            for (e = 0, i = o.length; e < i; ++e) r = n.getPixelForValue(o[e]), h();
                            for (e = 0, s = void 0, i = n.ticks.length; e < i; ++e) r = n.getPixelForTick(e), h();
                            return a
                        }(r),
                        pixels: n,
                        start: s._startPixel,
                        end: s._endPixel,
                        stackCount: this._getStackCount(),
                        scale: s,
                        grouped: i.grouped,
                        ratio: o ? 1 : i.categoryPercentage * i.barPercentage
                    }
                }
                _calculateBarValuePixels(t) {
                    let e, i, {
                            _cachedMeta: {
                                vScale: r,
                                _stacked: s
                            },
                            options: {
                                base: n,
                                minBarLength: o
                            }
                        } = this,
                        a = n || 0,
                        h = this.getParsed(t),
                        l = h._custom,
                        u = e3(l),
                        d = h[r.axis],
                        f = 0,
                        p = s ? this.applyStack(r, h, s) : d;
                    p !== d && (f = p - d, p = d), u && (d = l.barStart, p = l.barEnd - l.barStart, 0 !== d && H(d) !== H(l.barEnd) && (f = 0), f += d);
                    let g = c(n) || u ? f : n,
                        m = r.getPixelForValue(g);
                    if (Math.abs(i = (e = this.chart.getDataVisibility(t) ? r.getPixelForValue(f + p) : m) - m) < o) {
                        var b;
                        i = (0 !== (b = i) ? H(b) : (r.isHorizontal() ? 1 : -1) * (r.min >= a ? 1 : -1)) * o, d === a && (m -= i / 2), e = m + i
                    }
                    if (m === r.getPixelForValue(a)) {
                        let t = H(i) * r.getLineWidthForValue(a) / 2;
                        m += t, i -= t
                    }
                    return {
                        size: i,
                        base: m,
                        head: e,
                        center: e + i / 2
                    }
                }
                _calculateBarIndexPixels(t, e) {
                    let i, r, s = e.scale,
                        n = this.options,
                        o = n.skipNull,
                        a = m(n.maxBarThickness, 1 / 0);
                    if (e.grouped) {
                        let s, h, l, u, d, f, p, g, m, b = o ? this._getStackCount(t) : e.stackCount,
                            _ = "flex" === n.barThickness ? (h = (s = e.pixels)[t], l = t > 0 ? s[t - 1] : null, u = t < s.length - 1 ? s[t + 1] : null, d = n.categoryPercentage, null === l && (l = h - (null === u ? e.end - e.start : u - h)), null === u && (u = h + h - l), f = h - (h - Math.min(l, u)) / 2 * d, {
                                chunk: Math.abs(u - l) / 2 * d / b,
                                ratio: n.barPercentage,
                                start: f
                            }) : (c(m = n.barThickness) ? (p = e.min * n.categoryPercentage, g = n.barPercentage) : (p = m * b, g = 1), {
                                chunk: p / b,
                                ratio: g,
                                start: e.pixels[t] - p / 2
                            }),
                            v = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                        i = _.start + _.chunk * v + _.chunk / 2, r = Math.min(a, _.chunk * _.ratio)
                    } else i = s.getPixelForValue(this.getParsed(t)[s.axis], t), r = Math.min(a, e.min * e.ratio);
                    return {
                        base: i - r / 2,
                        head: i + r / 2,
                        center: i,
                        size: r
                    }
                }
                draw() {
                    let t = this._cachedMeta,
                        e = t.vScale,
                        i = t.data,
                        r = i.length,
                        s = 0;
                    for (; s < r; ++s) null !== this.getParsed(s)[e.axis] && i[s].draw(this._ctx)
                }
            }
            e4.id = "bar", e4.defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            }, e4.overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            class e7 extends e1 {
                initialize() {
                    this.enableOptionSharing = !0, super.initialize()
                }
                parsePrimitiveData(t, e, i, r) {
                    let s = super.parsePrimitiveData(t, e, i, r);
                    for (let t = 0; t < s.length; t++) s[t]._custom = this.resolveDataElementOptions(t + i).radius;
                    return s
                }
                parseArrayData(t, e, i, r) {
                    let s = super.parseArrayData(t, e, i, r);
                    for (let t = 0; t < s.length; t++) {
                        let r = e[i + t];
                        s[t]._custom = m(r[2], this.resolveDataElementOptions(t + i).radius)
                    }
                    return s
                }
                parseObjectData(t, e, i, r) {
                    let s = super.parseObjectData(t, e, i, r);
                    for (let t = 0; t < s.length; t++) {
                        let r = e[i + t];
                        s[t]._custom = m(r && r.r && +r.r, this.resolveDataElementOptions(t + i).radius)
                    }
                    return s
                }
                getMaxOverflow() {
                    let t = this._cachedMeta.data,
                        e = 0;
                    for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                    return e > 0 && e
                }
                getLabelAndValue(t) {
                    let e = this._cachedMeta,
                        {
                            xScale: i,
                            yScale: r
                        } = e,
                        s = this.getParsed(t),
                        n = i.getLabelForValue(s.x),
                        o = r.getLabelForValue(s.y),
                        a = s._custom;
                    return {
                        label: e.label,
                        value: "(" + n + ", " + o + (a ? ", " + a : "") + ")"
                    }
                }
                update(t) {
                    let e = this._cachedMeta.data;
                    this.updateElements(e, 0, e.length, t)
                }
                updateElements(t, e, i, r) {
                    let s = "reset" === r,
                        {
                            iScale: n,
                            vScale: o
                        } = this._cachedMeta,
                        a = this.resolveDataElementOptions(e, r),
                        h = this.getSharedOptions(a),
                        l = this.includeOptions(r, h),
                        u = n.axis,
                        c = o.axis;
                    for (let a = e; a < e + i; a++) {
                        let e = t[a],
                            i = !s && this.getParsed(a),
                            h = {},
                            d = h[u] = s ? n.getPixelForDecimal(.5) : n.getPixelForValue(i[u]),
                            f = h[c] = s ? o.getBasePixel() : o.getPixelForValue(i[c]);
                        h.skip = isNaN(d) || isNaN(f), l && (h.options = this.resolveDataElementOptions(a, e.active ? "active" : r), s && (h.options.radius = 0)), this.updateElement(e, a, h, r)
                    }
                    this.updateSharedOptions(h, r, a)
                }
                resolveDataElementOptions(t, e) {
                    let i = this.getParsed(t),
                        r = super.resolveDataElementOptions(t, e);
                    r.$shared && (r = Object.assign({}, r, {
                        $shared: !1
                    }));
                    let s = r.radius;
                    return "active" !== e && (r.radius = 0), r.radius += m(i && i._custom, s), r
                }
            }
            e7.id = "bubble", e7.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            }, e7.overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: () => ""
                        }
                    }
                }
            };
            class e9 extends e1 {
                linkScales() {}
                parse(t, e) {
                    let i = this.getDataset().data,
                        r = this._cachedMeta;
                    if (!1 === this._parsing) r._parsed = i;
                    else {
                        let s, n, o = t => +i[t];
                        if (f(i[t])) {
                            let {
                                key: t = "value"
                            } = this._parsing;
                            o = e => +O(i[e], t)
                        }
                        for (s = t, n = t + e; s < n; ++s) r._parsed[s] = o(s)
                    }
                }
                _getRotation() {
                    return Y(this.options.rotation - 90)
                }
                _getCircumference() {
                    return Y(this.options.circumference)
                }
                _getRotationExtents() {
                    let t = L,
                        e = -L;
                    for (let i = 0; i < this.chart.data.datasets.length; ++i)
                        if (this.chart.isDatasetVisible(i)) {
                            let r = this.chart.getDatasetMeta(i).controller,
                                s = r._getRotation(),
                                n = r._getCircumference();
                            t = Math.min(t, s), e = Math.max(e, s + n)
                        } return {
                        rotation: t,
                        circumference: e - t
                    }
                }
                update(t) {
                    let e, {
                            chartArea: i
                        } = this.chart,
                        r = this._cachedMeta,
                        s = r.data,
                        n = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
                        o = Math.max((Math.min(i.width, i.height) - n) / 2, 0),
                        a = Math.min((e = this.options.cutout, "string" == typeof e && e.endsWith("%") ? parseFloat(e) / 100 : e / o), 1),
                        h = this._getRingWeight(this.index),
                        {
                            circumference: l,
                            rotation: u
                        } = this._getRotationExtents(),
                        {
                            ratioX: c,
                            ratioY: d,
                            offsetX: f,
                            offsetY: p
                        } = function(t, e, i) {
                            let r = 1,
                                s = 1,
                                n = 0,
                                o = 0;
                            if (e < L) {
                                let a = t + e,
                                    h = Math.cos(t),
                                    l = Math.sin(t),
                                    u = Math.cos(a),
                                    c = Math.sin(a),
                                    d = (e, r, s) => J(e, t, a, !0) ? 1 : Math.max(r, r * i, s, s * i),
                                    f = (e, r, s) => J(e, t, a, !0) ? -1 : Math.min(r, r * i, s, s * i),
                                    p = d(0, h, u),
                                    g = d(F, l, c),
                                    m = f(R, h, u),
                                    b = f(R + F, l, c);
                                r = (p - m) / 2, s = (g - b) / 2, n = -(p + m) / 2, o = -(g + b) / 2
                            }
                            return {
                                ratioX: r,
                                ratioY: s,
                                offsetX: n,
                                offsetY: o
                            }
                        }(u, l, a),
                        g = Math.max(Math.min((i.width - n) / c, (i.height - n) / d) / 2, 0),
                        m = b(this.options.radius, g),
                        _ = Math.max(m * a, 0),
                        v = (m - _) / this._getVisibleDatasetWeightTotal();
                    this.offsetX = f * m, this.offsetY = p * m, r.total = this.calculateTotal(), this.outerRadius = m - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * h, 0), this.updateElements(s, 0, s.length, t)
                }
                _circumference(t, e) {
                    let i = this.options,
                        r = this._cachedMeta,
                        s = this._getCircumference();
                    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === r._parsed[t] || r.data[t].hidden ? 0 : this.calculateCircumference(r._parsed[t] * s / L)
                }
                updateElements(t, e, i, r) {
                    let s, n = "reset" === r,
                        o = this.chart,
                        a = o.chartArea,
                        h = o.options.animation,
                        l = (a.left + a.right) / 2,
                        u = (a.top + a.bottom) / 2,
                        c = n && h.animateScale,
                        d = c ? 0 : this.innerRadius,
                        f = c ? 0 : this.outerRadius,
                        p = this.resolveDataElementOptions(e, r),
                        g = this.getSharedOptions(p),
                        m = this.includeOptions(r, g),
                        b = this._getRotation();
                    for (s = 0; s < e; ++s) b += this._circumference(s, n);
                    for (s = e; s < e + i; ++s) {
                        let e = this._circumference(s, n),
                            i = t[s],
                            o = {
                                x: l + this.offsetX,
                                y: u + this.offsetY,
                                startAngle: b,
                                endAngle: b + e,
                                circumference: e,
                                outerRadius: f,
                                innerRadius: d
                            };
                        m && (o.options = g || this.resolveDataElementOptions(s, i.active ? "active" : r)), b += e, this.updateElement(i, s, o, r)
                    }
                    this.updateSharedOptions(g, r, p)
                }
                calculateTotal() {
                    let t, e = this._cachedMeta,
                        i = e.data,
                        r = 0;
                    for (t = 0; t < i.length; t++) {
                        let s = e._parsed[t];
                        null !== s && !isNaN(s) && this.chart.getDataVisibility(t) && !i[t].hidden && (r += Math.abs(s))
                    }
                    return r
                }
                calculateCircumference(t) {
                    let e = this._cachedMeta.total;
                    return e > 0 && !isNaN(t) ? Math.abs(t) / e * L : 0
                }
                getLabelAndValue(t) {
                    let e = this._cachedMeta,
                        i = this.chart,
                        r = i.data.labels || [],
                        s = eA(e._parsed[t], i.options.locale);
                    return {
                        label: r[t] || "",
                        value: s
                    }
                }
                getMaxBorderWidth(t) {
                    let e, i, r, s, n, o = 0,
                        a = this.chart;
                    if (!t) {
                        for (e = 0, i = a.data.datasets.length; e < i; ++e)
                            if (a.isDatasetVisible(e)) {
                                t = (r = a.getDatasetMeta(e)).data, s = r.controller;
                                break
                            }
                    }
                    if (!t) return 0;
                    for (e = 0, i = t.length; e < i; ++e) "inner" !== (n = s.resolveDataElementOptions(e)).borderAlign && (o = Math.max(o, n.borderWidth || 0, n.hoverBorderWidth || 0));
                    return o
                }
                getMaxOffset(t) {
                    let e = 0;
                    for (let i = 0, r = t.length; i < r; ++i) {
                        let t = this.resolveDataElementOptions(i);
                        e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                    }
                    return e
                }
                _getRingWeightOffset(t) {
                    let e = 0;
                    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                    return e
                }
                _getRingWeight(t) {
                    return Math.max(m(this.chart.data.datasets[t].weight, 1), 0)
                }
                _getVisibleDatasetWeightTotal() {
                    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
                }
                constructor(t, e) {
                    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
                }
            }
            e9.id = "doughnut", e9.defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                    }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
            }, e9.descriptors = {
                _scriptable: t => "spacing" !== t,
                _indexable: t => "spacing" !== t
            }, e9.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                let e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    let {
                                        labels: {
                                            pointStyle: i
                                        }
                                    } = t.legend.options;
                                    return e.labels.map((e, r) => {
                                        let s = t.getDatasetMeta(0).controller.getStyle(r);
                                        return {
                                            text: e,
                                            fillStyle: s.backgroundColor,
                                            strokeStyle: s.borderColor,
                                            lineWidth: s.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(r),
                                            index: r
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index), i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: () => "",
                            label(t) {
                                let e = t.label,
                                    i = ": " + t.formattedValue;
                                return d(e) ? (e = e.slice(), e[0] += i) : e += i, e
                            }
                        }
                    }
                }
            };
            class it extends e1 {
                initialize() {
                    this.enableOptionSharing = !0, super.initialize()
                }
                update(t) {
                    let e = this._cachedMeta,
                        {
                            dataset: i,
                            data: r = [],
                            _dataset: s
                        } = e,
                        n = this.chart._animationsDisabled,
                        {
                            start: o,
                            count: a
                        } = function(t, e, i) {
                            let r = e.length,
                                s = 0,
                                n = r;
                            if (t._sorted) {
                                let {
                                    iScale: o,
                                    _parsed: a
                                } = t, h = o.axis, {
                                    min: l,
                                    max: u,
                                    minDefined: c,
                                    maxDefined: d
                                } = o.getUserBounds();
                                c && (s = tt(Math.min(t4(a, o.axis, l).lo, i ? r : t4(e, h, o.getPixelForValue(l)).lo), 0, r - 1)), n = d ? tt(Math.max(t4(a, o.axis, u).hi + 1, i ? 0 : t4(e, h, o.getPixelForValue(u)).hi + 1), s, r) - s : r - s
                            }
                            return {
                                start: s,
                                count: n
                            }
                        }(e, r, n);
                    this._drawStart = o, this._drawCount = a,
                        function(t) {
                            let {
                                xScale: e,
                                yScale: i,
                                _scaleRanges: r
                            } = t, s = {
                                xmin: e.min,
                                xmax: e.max,
                                ymin: i.min,
                                ymax: i.max
                            };
                            if (!r) return t._scaleRanges = s, !0;
                            let n = r.xmin !== e.min || r.xmax !== e.max || r.ymin !== i.min || r.ymax !== i.max;
                            return Object.assign(r, s), n
                        }(e) && (o = 0, a = r.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!s._decimated, i.points = r;
                    let h = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (h.borderWidth = 0), h.segment = this.options.segment, this.updateElement(i, void 0, {
                        animated: !n,
                        options: h
                    }, t), this.updateElements(r, o, a, t)
                }
                updateElements(t, e, i, r) {
                    let s = "reset" === r,
                        {
                            iScale: n,
                            vScale: o,
                            _stacked: a,
                            _dataset: h
                        } = this._cachedMeta,
                        l = this.resolveDataElementOptions(e, r),
                        u = this.getSharedOptions(l),
                        d = this.includeOptions(r, u),
                        f = n.axis,
                        p = o.axis,
                        {
                            spanGaps: g,
                            segment: m
                        } = this.options,
                        b = U(g) ? g : 1 / 0,
                        _ = this.chart._animationsDisabled || s || "none" === r,
                        v = e > 0 && this.getParsed(e - 1);
                    for (let l = e; l < e + i; ++l) {
                        let e = t[l],
                            i = this.getParsed(l),
                            g = _ ? e : {},
                            y = c(i[p]),
                            x = g[f] = n.getPixelForValue(i[f], l),
                            w = g[p] = s || y ? o.getBasePixel() : o.getPixelForValue(a ? this.applyStack(o, i, a) : i[p], l);
                        g.skip = isNaN(x) || isNaN(w) || y, g.stop = l > 0 && i[f] - v[f] > b, m && (g.parsed = i, g.raw = h.data[l]), d && (g.options = u || this.resolveDataElementOptions(l, e.active ? "active" : r)), _ || this.updateElement(e, l, g, r), v = i
                    }
                    this.updateSharedOptions(u, r, l)
                }
                getMaxOverflow() {
                    let t = this._cachedMeta,
                        e = t.dataset,
                        i = e.options && e.options.borderWidth || 0,
                        r = t.data || [];
                    return r.length ? Math.max(i, r[0].size(this.resolveDataElementOptions(0)), r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1))) / 2 : i
                }
                draw() {
                    let t = this._cachedMeta;
                    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
                }
            }
            it.id = "line", it.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            }, it.overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            class ie extends e1 {
                getLabelAndValue(t) {
                    let e = this._cachedMeta,
                        i = this.chart,
                        r = i.data.labels || [],
                        s = eA(e._parsed[t].r, i.options.locale);
                    return {
                        label: r[t] || "",
                        value: s
                    }
                }
                update(t) {
                    let e = this._cachedMeta.data;
                    this._updateRadius(), this.updateElements(e, 0, e.length, t)
                }
                _updateRadius() {
                    let t = this.chart,
                        e = t.chartArea,
                        i = t.options,
                        r = Math.max(Math.min(e.right - e.left, e.bottom - e.top) / 2, 0),
                        s = Math.max(i.cutoutPercentage ? r / 100 * i.cutoutPercentage : 1, 0),
                        n = (r - s) / t.getVisibleDatasetCount();
                    this.outerRadius = r - n * this.index, this.innerRadius = this.outerRadius - n
                }
                updateElements(t, e, i, r) {
                    let s, n = "reset" === r,
                        o = this.chart,
                        a = this.getDataset(),
                        h = o.options.animation,
                        l = this._cachedMeta.rScale,
                        u = l.xCenter,
                        c = l.yCenter,
                        d = l.getIndexAngle(0) - .5 * R,
                        f = d,
                        p = 360 / this.countVisibleElements();
                    for (s = 0; s < e; ++s) f += this._computeAngle(s, r, p);
                    for (s = e; s < e + i; s++) {
                        let e = t[s],
                            i = f,
                            g = f + this._computeAngle(s, r, p),
                            m = o.getDataVisibility(s) ? l.getDistanceFromCenterForValue(a.data[s]) : 0;
                        f = g, n && (h.animateScale && (m = 0), h.animateRotate && (i = g = d));
                        let b = {
                            x: u,
                            y: c,
                            innerRadius: 0,
                            outerRadius: m,
                            startAngle: i,
                            endAngle: g,
                            options: this.resolveDataElementOptions(s, e.active ? "active" : r)
                        };
                        this.updateElement(e, s, b, r)
                    }
                }
                countVisibleElements() {
                    let t = this.getDataset(),
                        e = this._cachedMeta,
                        i = 0;
                    return e.data.forEach((e, r) => {
                        !isNaN(t.data[r]) && this.chart.getDataVisibility(r) && i++
                    }), i
                }
                _computeAngle(t, e, i) {
                    return this.chart.getDataVisibility(t) ? Y(this.resolveDataElementOptions(t, e).angle || i) : 0
                }
                constructor(t, e) {
                    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
                }
            }
            ie.id = "polarArea", ie.defaults = {
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                    }
                },
                indexAxis: "r",
                startAngle: 0
            }, ie.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                let e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    let {
                                        labels: {
                                            pointStyle: i
                                        }
                                    } = t.legend.options;
                                    return e.labels.map((e, r) => {
                                        let s = t.getDatasetMeta(0).controller.getStyle(r);
                                        return {
                                            text: e,
                                            fillStyle: s.backgroundColor,
                                            strokeStyle: s.borderColor,
                                            lineWidth: s.borderWidth,
                                            pointStyle: i,
                                            hidden: !t.getDataVisibility(r),
                                            index: r
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, i) {
                            i.chart.toggleDataVisibility(e.index), i.chart.update()
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: () => "",
                            label: t => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                        }
                    }
                },
                scales: {
                    r: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        beginAtZero: !0,
                        grid: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        startAngle: 0
                    }
                }
            };
            class ii extends e9 {}
            ii.id = "pie", ii.defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            };
            class ir extends e1 {
                getLabelAndValue(t) {
                    let e = this._cachedMeta.vScale,
                        i = this.getParsed(t);
                    return {
                        label: e.getLabels()[t],
                        value: "" + e.getLabelForValue(i[e.axis])
                    }
                }
                update(t) {
                    let e = this._cachedMeta,
                        i = e.dataset,
                        r = e.data || [],
                        s = e.iScale.getLabels();
                    if (i.points = r, "resize" !== t) {
                        let e = this.resolveDatasetElementOptions(t);
                        this.options.showLine || (e.borderWidth = 0);
                        let n = {
                            _loop: !0,
                            _fullLoop: s.length === r.length,
                            options: e
                        };
                        this.updateElement(i, void 0, n, t)
                    }
                    this.updateElements(r, 0, r.length, t)
                }
                updateElements(t, e, i, r) {
                    let s = this.getDataset(),
                        n = this._cachedMeta.rScale,
                        o = "reset" === r;
                    for (let a = e; a < e + i; a++) {
                        let e = t[a],
                            i = this.resolveDataElementOptions(a, e.active ? "active" : r),
                            h = n.getPointPositionForValue(a, s.data[a]),
                            l = o ? n.xCenter : h.x,
                            u = o ? n.yCenter : h.y,
                            c = {
                                x: l,
                                y: u,
                                angle: h.angle,
                                skip: isNaN(l) || isNaN(u),
                                options: i
                            };
                        this.updateElement(e, a, c, r)
                    }
                }
            }
            ir.id = "radar", ir.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            }, ir.overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            class is extends it {}

            function io() {
                throw Error("This method is not implemented: Check that a complete date adapter is provided.")
            }
            is.id = "scatter", is.defaults = {
                showLine: !1,
                fill: !1
            }, is.overrides = {
                interaction: {
                    mode: "point"
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: () => "",
                            label: t => "(" + t.label + ", " + t.formattedValue + ")"
                        }
                    }
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            class ia {
                formats() {
                    return io()
                }
                parse(t, e) {
                    return io()
                }
                format(t, e) {
                    return io()
                }
                add(t, e, i) {
                    return io()
                }
                diff(t, e, i) {
                    return io()
                }
                startOf(t, e, i) {
                    return io()
                }
                endOf(t, e) {
                    return io()
                }
                constructor(t) {
                    this.options = t || {}
                }
            }
            ia.override = function(t) {
                Object.assign(ia.prototype, t)
            };

            function ih(t, e) {
                return "native" in t ? {
                    x: t.x,
                    y: t.y
                } : ew(t, e)
            }

            function il(t, e, i, r, s) {
                let n = t.getSortedVisibleDatasetMetas(),
                    o = i[e];
                for (let t = 0, i = n.length; t < i; ++t) {
                    let {
                        index: i,
                        data: a
                    } = n[t], {
                        lo: h,
                        hi: l
                    } = function(t, e, i, r) {
                        let {
                            controller: s,
                            data: n,
                            _sorted: o
                        } = t, a = s._cachedMeta.iScale;
                        if (a && e === a.axis && "r" !== e && o && n.length) {
                            let t = a._reversePixels ? t7 : t4;
                            if (!r) return t(n, e, i);
                            if (s._sharedOptions) {
                                let r = n[0],
                                    s = "function" == typeof r.getRange && r.getRange(e);
                                if (s) {
                                    let r = t(n, e, i - s),
                                        o = t(n, e, i + s);
                                    return {
                                        lo: r.lo,
                                        hi: o.hi
                                    }
                                }
                            }
                        }
                        return {
                            lo: 0,
                            hi: n.length - 1
                        }
                    }(n[t], e, o, s);
                    for (let t = h; t <= l; ++t) {
                        let e = a[t];
                        e.skip || r(e, i, t)
                    }
                }
            }

            function iu(t, e, i, r) {
                let s = [];
                return tW(e, t.chartArea, t._minPadding) && il(t, i, e, function(t, i, n) {
                    t.inRange(e.x, e.y, r) && s.push({
                        element: t,
                        datasetIndex: i,
                        index: n
                    })
                }, !0), s
            }

            function ic(t, e, i, r, s) {
                let n, o, a, h, l, u;
                return tW(e, t.chartArea, t._minPadding) ? "r" !== i || r ? (n = [], o = -1 !== i.indexOf("x"), a = -1 !== i.indexOf("y"), h = function(t, e) {
                    return Math.sqrt(Math.pow(o ? Math.abs(t.x - e.x) : 0, 2) + Math.pow(a ? Math.abs(t.y - e.y) : 0, 2))
                }, l = 1 / 0, il(t, i, e, function(i, o, a) {
                    let u = i.inRange(e.x, e.y, s);
                    if (r && !u) return;
                    let c = i.getCenterPoint(s);
                    if (!tW(c, t.chartArea, t._minPadding) && !u) return;
                    let d = h(e, c);
                    d < l ? (n = [{
                        element: i,
                        datasetIndex: o,
                        index: a
                    }], l = d) : d === l && n.push({
                        element: i,
                        datasetIndex: o,
                        index: a
                    })
                }), n) : (u = [], il(t, i, e, function(t, i, r) {
                    let {
                        startAngle: n,
                        endAngle: o
                    } = t.getProps(["startAngle", "endAngle"], s), {
                        angle: a
                    } = X(t, {
                        x: e.x,
                        y: e.y
                    });
                    J(a, n, o) && u.push({
                        element: t,
                        datasetIndex: i,
                        index: r
                    })
                }), u) : []
            }

            function id(t, e, i, r) {
                let s = ih(e, t),
                    n = [],
                    o = i.axis,
                    a = "x" === o ? "inXRange" : "inYRange",
                    h = !1;
                return (! function(t, e) {
                    let i, r, s, n = t.getSortedVisibleDatasetMetas();
                    for (let t = 0, o = n.length; t < o; ++t) {
                        ({
                            index: i,
                            data: r
                        } = n[t]);
                        for (let t = 0, n = r.length; t < n; ++t)(s = r[t]).skip || e(s, i, t)
                    }
                }(t, (t, e, i) => {
                    t[a](s[o], r) && n.push({
                        element: t,
                        datasetIndex: e,
                        index: i
                    }), t.inRange(s.x, s.y, r) && (h = !0)
                }), i.intersect && !h) ? [] : n
            }
            var ip = {
                modes: {
                    index(t, e, i, r) {
                        let s = ih(e, t),
                            n = i.axis || "x",
                            o = i.intersect ? iu(t, s, n, r) : ic(t, s, n, !1, r),
                            a = [];
                        return o.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
                            let e = o[0].index,
                                i = t.data[e];
                            i && !i.skip && a.push({
                                element: i,
                                datasetIndex: t.index,
                                index: e
                            })
                        }), a) : []
                    },
                    dataset(t, e, i, r) {
                        let s = ih(e, t),
                            n = i.axis || "xy",
                            o = i.intersect ? iu(t, s, n, r) : ic(t, s, n, !1, r);
                        if (o.length > 0) {
                            let e = o[0].datasetIndex,
                                i = t.getDatasetMeta(e).data;
                            o = [];
                            for (let t = 0; t < i.length; ++t) o.push({
                                element: i[t],
                                datasetIndex: e,
                                index: t
                            })
                        }
                        return o
                    },
                    point(t, e, i, r) {
                        let s = ih(e, t);
                        return iu(t, s, i.axis || "xy", r)
                    },
                    nearest(t, e, i, r) {
                        let s = ih(e, t);
                        return ic(t, s, i.axis || "xy", i.intersect, r)
                    },
                    x: (t, e, i, r) => id(t, e, {
                        axis: "x",
                        intersect: i.intersect
                    }, r),
                    y: (t, e, i, r) => id(t, e, {
                        axis: "y",
                        intersect: i.intersect
                    }, r)
                }
            };
            let ig = ["left", "top", "right", "bottom"];

            function im(t, e) {
                return t.filter(t => t.pos === e)
            }

            function ib(t, e) {
                return t.filter(t => -1 === ig.indexOf(t.pos) && t.box.axis === e)
            }

            function i_(t, e) {
                return t.sort((t, i) => {
                    let r = e ? i : t,
                        s = e ? t : i;
                    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight
                })
            }

            function iv(t, e, i, r) {
                return Math.max(t[i], e[i]) + Math.max(t[r], e[r])
            }

            function iy(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
            }

            function ix(t, e, i, r) {
                let s, n, o, a, h, l, u = [];
                for (s = 0, n = t.length, h = 0; s < n; ++s) {
                    (a = (o = t[s]).box).update(o.width || e.w, o.height || e.h, function(t, e) {
                        let i = e.maxPadding;
                        return function(t) {
                            let r = {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            };
                            return t.forEach(t => {
                                r[t] = Math.max(e[t], i[t])
                            }), r
                        }(t ? ["left", "right"] : ["top", "bottom"])
                    }(o.horizontal, e));
                    let {
                        same: n,
                        other: c
                    } = function(t, e, i, r) {
                        let {
                            pos: s,
                            box: n
                        } = i, o = t.maxPadding;
                        if (!f(s)) {
                            i.size && (t[s] -= i.size);
                            let e = r[i.stack] || {
                                size: 0,
                                count: 1
                            };
                            e.size = Math.max(e.size, i.horizontal ? n.height : n.width), i.size = e.size / e.count, t[s] += i.size
                        }
                        n.getPadding && iy(o, n.getPadding());
                        let a = Math.max(0, e.outerWidth - iv(o, t, "left", "right")),
                            h = Math.max(0, e.outerHeight - iv(o, t, "top", "bottom")),
                            l = a !== t.w,
                            u = h !== t.h;
                        return t.w = a, t.h = h, i.horizontal ? {
                            same: l,
                            other: u
                        } : {
                            same: u,
                            other: l
                        }
                    }(e, i, o, r);
                    h |= n && u.length, l = l || c, a.fullSize || u.push(o)
                }
                return h && ix(u, e, i, r) || l
            }

            function iw(t, e, i, r, s) {
                t.top = i, t.left = e, t.right = e + r, t.bottom = i + s, t.width = r, t.height = s
            }

            function iT(t, e, i, r) {
                let s = i.padding,
                    {
                        x: n,
                        y: o
                    } = e;
                for (let a of t) {
                    let t = a.box,
                        h = r[a.stack] || {
                            count: 1,
                            placed: 0,
                            weight: 1
                        },
                        l = a.stackWeight / h.weight || 1;
                    if (a.horizontal) {
                        let r = e.w * l,
                            n = h.size || t.height;
                        P(h.start) && (o = h.start), t.fullSize ? iw(t, s.left, o, i.outerWidth - s.right - s.left, n) : iw(t, e.left + h.placed, o, r, n), h.start = o, h.placed += r, o = t.bottom
                    } else {
                        let r = e.h * l,
                            o = h.size || t.width;
                        P(h.start) && (n = h.start), t.fullSize ? iw(t, n, s.top, o, i.outerHeight - s.bottom - s.top) : iw(t, n, e.top + h.placed, o, r), h.start = n, h.placed += r, n = t.right
                    }
                }
                e.x = n, e.y = o
            }
            tF.set("layout", {
                autoPadding: !0,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
            var iM = {
                addBox(t, e) {
                    t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                        return [{
                            z: 0,
                            draw(t) {
                                e.draw(t)
                            }
                        }]
                    }, t.boxes.push(e)
                },
                removeBox(t, e) {
                    let i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                configure(t, e, i) {
                    e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
                },
                update(t, e, i, r) {
                    let s, n, o, a, h, l, u, c;
                    if (!t) return;
                    let d = t2(t.options.layout.padding),
                        f = Math.max(e - d.width, 0),
                        p = Math.max(i - d.height, 0),
                        g = (n = i_((s = function(t) {
                            let e, i, r, s, n, o, a = [];
                            for (e = 0, i = (t || []).length; e < i; ++e) r = t[e], ({
                                position: s,
                                options: {
                                    stack: n,
                                    stackWeight: o = 1
                                }
                            } = r), a.push({
                                index: e,
                                box: r,
                                pos: s,
                                horizontal: r.isHorizontal(),
                                weight: r.weight,
                                stack: n && s + n,
                                stackWeight: o
                            });
                            return a
                        }(t.boxes)).filter(t => t.box.fullSize), !0), o = i_(im(s, "left"), !0), a = i_(im(s, "right")), h = i_(im(s, "top"), !0), l = i_(im(s, "bottom")), u = ib(s, "x"), c = ib(s, "y"), {
                            fullSize: n,
                            leftAndTop: o.concat(h),
                            rightAndBottom: a.concat(c).concat(l).concat(u),
                            chartArea: im(s, "chartArea"),
                            vertical: o.concat(a).concat(c),
                            horizontal: h.concat(l).concat(u)
                        }),
                        m = g.vertical,
                        b = g.horizontal;
                    v(t.boxes, t => {
                        "function" == typeof t.beforeLayout && t.beforeLayout()
                    });
                    let _ = Object.freeze({
                            outerWidth: e,
                            outerHeight: i,
                            padding: d,
                            availableWidth: f,
                            availableHeight: p,
                            vBoxMaxWidth: f / 2 / (m.reduce((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1, 0) || 1),
                            hBoxMaxHeight: p / 2
                        }),
                        y = Object.assign({}, d);
                    iy(y, t2(r));
                    let x = Object.assign({
                            maxPadding: y,
                            w: f,
                            h: p,
                            x: d.left,
                            y: d.top
                        }, d),
                        w = function(t, e) {
                            let i, r, s, n = function(t) {
                                    let e = {};
                                    for (let i of t) {
                                        let {
                                            stack: t,
                                            pos: r,
                                            stackWeight: s
                                        } = i;
                                        if (!t || !ig.includes(r)) continue;
                                        let n = e[t] || (e[t] = {
                                            count: 0,
                                            placed: 0,
                                            weight: 0,
                                            size: 0
                                        });
                                        n.count++, n.weight += s
                                    }
                                    return e
                                }(t),
                                {
                                    vBoxMaxWidth: o,
                                    hBoxMaxHeight: a
                                } = e;
                            for (i = 0, r = t.length; i < r; ++i) {
                                let {
                                    fullSize: r
                                } = (s = t[i]).box, h = n[s.stack], l = h && s.stackWeight / h.weight;
                                s.horizontal ? (s.width = l ? l * o : r && e.availableWidth, s.height = a) : (s.width = o, s.height = l ? l * a : r && e.availableHeight)
                            }
                            return n
                        }(m.concat(b), _);
                    ix(g.fullSize, x, _, w), ix(m, x, _, w), ix(b, x, _, w) && ix(m, x, _, w);
                    let T = x.maxPadding;

                    function M(t) {
                        let e = Math.max(T[t] - x[t], 0);
                        return x[t] += e, e
                    }
                    x.y += M("top"), x.x += M("left"), M("right"), M("bottom"), iT(g.leftAndTop, x, _, w), x.x += x.w, x.y += x.h, iT(g.rightAndBottom, x, _, w), t.chartArea = {
                        left: x.left,
                        top: x.top,
                        right: x.left + x.w,
                        bottom: x.top + x.h,
                        height: x.h,
                        width: x.w
                    }, v(g.chartArea, e => {
                        let i = e.box;
                        Object.assign(i, t.chartArea), i.update(x.w, x.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        })
                    })
                }
            };
            class iS {
                acquireContext(t, e) {}
                releaseContext(t) {
                    return !1
                }
                addEventListener(t, e, i) {}
                removeEventListener(t, e, i) {}
                getDevicePixelRatio() {
                    return 1
                }
                getMaximumSize(t, e, i, r) {
                    return e = Math.max(0, e || t.width), i = i || t.height, {
                        width: e,
                        height: Math.max(0, r ? Math.floor(e / r) : i)
                    }
                }
                isAttached(t) {
                    return !0
                }
                updateConfig(t) {}
            }
            class ik extends iS {
                acquireContext(t) {
                    return t && t.getContext && t.getContext("2d") || null
                }
                updateConfig(t) {
                    t.options.animation = !1
                }
            }
            let iD = "$chartjs",
                iO = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                },
                iE = t => null === t || "" === t,
                iP = !!eS && {
                    passive: !0
                };

            function iA(t, e) {
                for (let i of t)
                    if (i === e || i.contains(e)) return !0
            }

            function iC(t, e, i) {
                let r = t.canvas,
                    s = new MutationObserver(t => {
                        let e = !1;
                        for (let i of t) e = (e = e || iA(i.addedNodes, r)) && !iA(i.removedNodes, r);
                        e && i()
                    });
                return s.observe(document, {
                    childList: !0,
                    subtree: !0
                }), s
            }

            function iR(t, e, i) {
                let r = t.canvas,
                    s = new MutationObserver(t => {
                        let e = !1;
                        for (let i of t) e = (e = e || iA(i.removedNodes, r)) && !iA(i.addedNodes, r);
                        e && i()
                    });
                return s.observe(document, {
                    childList: !0,
                    subtree: !0
                }), s
            }
            let iL = new Map,
                iB = 0;

            function iV() {
                let t = window.devicePixelRatio;
                t !== iB && (iB = t, iL.forEach((e, i) => {
                    i.currentDevicePixelRatio !== t && e()
                }))
            }

            function iI(t, e, i) {
                let r = t.canvas,
                    s = r && e_(r);
                if (!s) return;
                let n = o((t, e) => {
                        let r = s.clientWidth;
                        i(t, e), r < s.clientWidth && i()
                    }, window),
                    a = new ResizeObserver(t => {
                        let e = t[0],
                            i = e.contentRect.width,
                            r = e.contentRect.height;
                        (0 !== i || 0 !== r) && n(i, r)
                    });
                return a.observe(s), iL.size || window.addEventListener("resize", iV), iL.set(t, n), a
            }

            function iF(t, e, i) {
                i && i.disconnect(), "resize" === e && (iL.delete(t), iL.size || window.removeEventListener("resize", iV))
            }

            function iz(t, e, i) {
                let r = t.canvas,
                    s = o(e => {
                        null !== t.ctx && i(function(t, e) {
                            let i = iO[t.type] || t.type,
                                {
                                    x: r,
                                    y: s
                                } = ew(t, e);
                            return {
                                type: i,
                                chart: e,
                                native: t,
                                x: void 0 !== r ? r : null,
                                y: void 0 !== s ? s : null
                            }
                        }(e, t))
                    }, t, t => {
                        let e = t[0];
                        return [e, e.offsetX, e.offsetY]
                    });
                return r.addEventListener(e, s, iP), s
            }
            class iN extends iS {
                acquireContext(t, e) {
                    let i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (! function(t, e) {
                        let i = t.style,
                            r = t.getAttribute("height"),
                            s = t.getAttribute("width");
                        if (t[iD] = {
                                initial: {
                                    height: r,
                                    width: s,
                                    style: {
                                        display: i.display,
                                        height: i.height,
                                        width: i.width
                                    }
                                }
                            }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", iE(s)) {
                            let e = ek(t, "width");
                            void 0 !== e && (t.width = e)
                        }
                        if (iE(r))
                            if ("" === t.style.height) t.height = t.width / (e || 2);
                            else {
                                let e = ek(t, "height");
                                void 0 !== e && (t.height = e)
                            }
                    }(t, e), i) : null
                }
                releaseContext(t) {
                    let e = t.canvas;
                    if (!e[iD]) return !1;
                    let i = e[iD].initial;
                    ["height", "width"].forEach(t => {
                        let r = i[t];
                        c(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                    });
                    let r = i.style || {};
                    return Object.keys(r).forEach(t => {
                        e.style[t] = r[t]
                    }), e.width = e.width, delete e[iD], !0
                }
                addEventListener(t, e, i) {
                    this.removeEventListener(t, e);
                    let r = t.$proxies || (t.$proxies = {}),
                        s = {
                            attach: iC,
                            detach: iR,
                            resize: iI
                        } [e] || iz;
                    r[e] = s(t, e, i)
                }
                removeEventListener(t, e) {
                    let i = t.$proxies || (t.$proxies = {}),
                        r = i[e];
                    r && ((({
                        attach: iF,
                        detach: iF,
                        resize: iF
                    })[e] || function(t, e, i) {
                        t.canvas.removeEventListener(e, i, iP)
                    })(t, e, r), i[e] = void 0)
                }
                getDevicePixelRatio() {
                    return window.devicePixelRatio
                }
                getMaximumSize(t, e, i, r) {
                    return function(t, e, i, r) {
                        let s = window.getComputedStyle(t, null),
                            n = ex(s, "margin"),
                            o = ev(s.maxWidth, t, "clientWidth") || V,
                            a = ev(s.maxHeight, t, "clientHeight") || V,
                            h = function(t, e, i) {
                                let r, s;
                                if (void 0 === e || void 0 === i) {
                                    let n = e_(t);
                                    if (n) {
                                        let t = n.getBoundingClientRect(),
                                            o = window.getComputedStyle(n, null),
                                            a = ex(o, "border", "width"),
                                            h = ex(o, "padding");
                                        e = t.width - h.width - a.width, i = t.height - h.height - a.height, r = ev(o.maxWidth, n, "clientWidth"), s = ev(o.maxHeight, n, "clientHeight")
                                    } else e = t.clientWidth, i = t.clientHeight
                                }
                                return {
                                    width: e,
                                    height: i,
                                    maxWidth: r || V,
                                    maxHeight: s || V
                                }
                            }(t, e, i),
                            {
                                width: l,
                                height: u
                            } = h;
                        if ("content-box" === s.boxSizing) {
                            let t = ex(s, "border", "width"),
                                e = ex(s, "padding");
                            l -= e.width + t.width, u -= e.height + t.height
                        }
                        return l = Math.max(0, l - n.width), u = Math.max(0, r ? Math.floor(l / r) : u - n.height), l = eT(Math.min(l, o, h.maxWidth)), u = eT(Math.min(u, a, h.maxHeight)), l && !u && (u = eT(l / 2)), {
                            width: l,
                            height: u
                        }
                    }(t, e, i, r)
                }
                isAttached(t) {
                    let e = e_(t);
                    return !!(e && e.isConnected)
                }
            }
            class ij {
                tooltipPosition(t) {
                    let {
                        x: e,
                        y: i
                    } = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                hasValue() {
                    return U(this.x) && U(this.y)
                }
                getProps(t, e) {
                    let i = this.$animations;
                    if (!e || !i) return this;
                    let r = {};
                    return t.forEach(t => {
                        r[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                    }), r
                }
                constructor() {
                    this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
                }
            }
            ij.defaults = {}, ij.defaultRoutes = void 0;
            let iH = {
                values: t => d(t) ? t : "" + t,
                numeric(t, e, i) {
                    let r;
                    if (0 === t) return "0";
                    let s = this.chart.options.locale,
                        n = t;
                    if (i.length > 1) {
                        var o, a;
                        let e, s = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (s < 1e-4 || s > 1e15) && (r = "scientific"), o = t, Math.abs(e = (a = i).length > 3 ? a[2].value - a[1].value : a[1].value - a[0].value) >= 1 && o !== Math.floor(o) && (e = o - Math.floor(o)), n = e
                    }
                    let h = Math.max(Math.min(-1 * Math.floor(j(Math.abs(n))), 20), 0),
                        l = {
                            notation: r,
                            minimumFractionDigits: h,
                            maximumFractionDigits: h
                        };
                    return Object.assign(l, this.options.ticks.format), eA(t, s, l)
                },
                logarithmic(t, e, i) {
                    if (0 === t) return "0";
                    let r = t / Math.pow(10, Math.floor(j(t)));
                    return 1 === r || 2 === r || 5 === r ? iH.numeric.call(this, t, e, i) : ""
                }
            };

            function iW(t, e, i, r, s) {
                let n, o, a, h = m(r, 0),
                    l = Math.min(m(s, t.length), t.length),
                    u = 0;
                for (i = Math.ceil(i), s && (i = (n = s - r) / Math.floor(n / i)), a = h; a < 0;) a = Math.round(h + ++u * i);
                for (o = Math.max(h, 0); o < l; o++) o === a && (e.push(t[o]), a = Math.round(h + ++u * i))
            }
            tF.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                    display: !0,
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickLength: 8,
                    tickWidth: (t, e) => e.lineWidth,
                    tickColor: (t, e) => e.color,
                    offset: !1,
                    borderDash: [],
                    borderDashOffset: 0,
                    borderWidth: 1
                },
                title: {
                    display: !1,
                    text: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    textStrokeWidth: 0,
                    textStrokeColor: "",
                    padding: 3,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: iH.values,
                    minor: {},
                    major: {},
                    align: "center",
                    crossAlign: "near",
                    showLabelBackdrop: !1,
                    backdropColor: "rgba(255, 255, 255, 0.75)",
                    backdropPadding: 2
                }
            }), tF.route("scale.ticks", "color", "", "color"), tF.route("scale.grid", "color", "", "borderColor"), tF.route("scale.grid", "borderColor", "", "borderColor"), tF.route("scale.title", "color", "", "color"), tF.describe("scale", {
                _fallback: !1,
                _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                _indexable: t => "borderDash" !== t && "tickBorderDash" !== t
            }), tF.describe("scales", {
                _fallback: "scale"
            }), tF.describe("scale.ticks", {
                _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                _indexable: t => "backdropPadding" !== t
            });
            let iU = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i;

            function iq(t, e) {
                let i = [],
                    r = t.length / e,
                    s = t.length,
                    n = 0;
                for (; n < s; n += r) i.push(t[Math.floor(n)]);
                return i
            }

            function i$(t) {
                return t.drawTicks ? t.tickLength : 0
            }

            function iY(t, e) {
                if (!t.display) return 0;
                let i = t5(t.font, e),
                    r = t2(t.padding);
                return (d(t.text) ? t.text.length : 1) * i.lineHeight + r.height
            }
            class iK extends ij {
                init(t) {
                    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
                }
                parse(t, e) {
                    return t
                }
                getUserBounds() {
                    let {
                        _userMin: t,
                        _userMax: e,
                        _suggestedMin: i,
                        _suggestedMax: r
                    } = this;
                    return t = g(t, 1 / 0), e = g(e, -1 / 0), i = g(i, 1 / 0), r = g(r, -1 / 0), {
                        min: g(t, i),
                        max: g(e, r),
                        minDefined: p(t),
                        maxDefined: p(e)
                    }
                }
                getMinMax(t) {
                    let e, {
                        min: i,
                        max: r,
                        minDefined: s,
                        maxDefined: n
                    } = this.getUserBounds();
                    if (s && n) return {
                        min: i,
                        max: r
                    };
                    let o = this.getMatchingVisibleMetas();
                    for (let a = 0, h = o.length; a < h; ++a) e = o[a].controller.getMinMax(this, t), s || (i = Math.min(i, e.min)), n || (r = Math.max(r, e.max));
                    return i = n && i > r ? r : i, r = s && i > r ? i : r, {
                        min: g(i, g(r, i)),
                        max: g(r, g(i, r))
                    }
                }
                getPadding() {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                }
                getTicks() {
                    return this.ticks
                }
                getLabels() {
                    let t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                }
                beforeLayout() {
                    this._cache = {}, this._dataLimitsCached = !1
                }
                beforeUpdate() {
                    _(this.options.beforeUpdate, [this])
                }
                update(t, e, i) {
                    let {
                        beginAtZero: r,
                        grace: s,
                        ticks: n
                    } = this.options, o = n.sampleSize;
                    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function(t, e, i) {
                        let {
                            min: r,
                            max: s
                        } = t, n = b(e, (s - r) / 2), o = (t, e) => i && 0 === t ? 0 : t + e;
                        return {
                            min: o(r, -Math.abs(n)),
                            max: o(s, n)
                        }
                    }(this, s, r), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                    let a = o < this.ticks.length;
                    this._convertTicksToLabels(a ? iq(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), n.display && (n.autoSkip || "auto" === n.source) && (this.ticks = function(t, e) {
                        var i;
                        let r, s, n = t.options.ticks,
                            o = n.maxTicksLimit || (r = (i = t).options.offset, s = i._tickSize(), Math.floor(Math.min(i._length / s + +!r, i._maxLength / s))),
                            a = n.major.enabled ? function(t) {
                                let e, i, r = [];
                                for (e = 0, i = t.length; e < i; e++) t[e].major && r.push(e);
                                return r
                            }(e) : [],
                            h = a.length,
                            l = a[0],
                            u = a[h - 1],
                            d = [];
                        if (h > o) return function(t, e, i, r) {
                            let s, n = 0,
                                o = i[0];
                            for (s = 0, r = Math.ceil(r); s < t.length; s++) s === o && (e.push(t[s]), o = i[++n * r])
                        }(e, d, a, h / o), d;
                        let f = function(t, e, i) {
                            let r = function(t) {
                                    let e, i, r = t.length;
                                    if (r < 2) return !1;
                                    for (i = t[0], e = 1; e < r; ++e)
                                        if (t[e] - t[e - 1] !== i) return !1;
                                    return i
                                }(t),
                                s = e.length / i;
                            if (!r) return Math.max(s, 1);
                            let n = function(t) {
                                let e, i = [],
                                    r = Math.sqrt(t);
                                for (e = 1; e < r; e++) t % e == 0 && (i.push(e), i.push(t / e));
                                return r === (0 | r) && i.push(r), i.sort((t, e) => t - e).pop(), i
                            }(r);
                            for (let t = 0, e = n.length - 1; t < e; t++) {
                                let e = n[t];
                                if (e > s) return e
                            }
                            return Math.max(s, 1)
                        }(a, e, o);
                        if (h > 0) {
                            let t, i, r = h > 1 ? Math.round((u - l) / (h - 1)) : null;
                            for (iW(e, d, f, c(r) ? 0 : l - r, l), t = 0, i = h - 1; t < i; t++) iW(e, d, f, a[t], a[t + 1]);
                            return iW(e, d, f, u, c(r) ? e.length : u + r), d
                        }
                        return iW(e, d, f), d
                    }(this, this.ticks), this._labelSizes = null), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
                }
                configure() {
                    let t, e, i = this.options.reverse;
                    this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
                }
                afterUpdate() {
                    _(this.options.afterUpdate, [this])
                }
                beforeSetDimensions() {
                    _(this.options.beforeSetDimensions, [this])
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                }
                afterSetDimensions() {
                    _(this.options.afterSetDimensions, [this])
                }
                _callHooks(t) {
                    this.chart.notifyPlugins(t, this.getContext()), _(this.options[t], [this])
                }
                beforeDataLimits() {
                    this._callHooks("beforeDataLimits")
                }
                determineDataLimits() {}
                afterDataLimits() {
                    this._callHooks("afterDataLimits")
                }
                beforeBuildTicks() {
                    this._callHooks("beforeBuildTicks")
                }
                buildTicks() {
                    return []
                }
                afterBuildTicks() {
                    this._callHooks("afterBuildTicks")
                }
                beforeTickToLabelConversion() {
                    _(this.options.beforeTickToLabelConversion, [this])
                }
                generateTickLabels(t) {
                    let e, i, r, s = this.options.ticks;
                    for (e = 0, i = t.length; e < i; e++)(r = t[e]).label = _(s.callback, [r.value, e, t], this)
                }
                afterTickToLabelConversion() {
                    _(this.options.afterTickToLabelConversion, [this])
                }
                beforeCalculateLabelRotation() {
                    _(this.options.beforeCalculateLabelRotation, [this])
                }
                calculateLabelRotation() {
                    let t, e, i, r = this.options,
                        s = r.ticks,
                        n = this.ticks.length,
                        o = s.minRotation || 0,
                        a = s.maxRotation,
                        h = o;
                    if (!this._isVisible() || !s.display || o >= a || n <= 1 || !this.isHorizontal()) {
                        this.labelRotation = o;
                        return
                    }
                    let l = this._getLabelSizes(),
                        u = l.widest.width,
                        c = l.highest.height,
                        d = tt(this.chart.width - u, 0, this.maxWidth);
                    u + 6 > (t = r.offset ? this.maxWidth / n : d / (n - 1)) && (t = d / (n - (r.offset ? .5 : 1)), e = this.maxHeight - i$(r.grid) - s.padding - iY(r.title, this.chart.options.font), i = Math.sqrt(u * u + c * c), h = Math.max(o, Math.min(a, h = 180 / R * Math.min(Math.asin(tt((l.highest.height + 6) / t, -1, 1)), Math.asin(tt(e / i, -1, 1)) - Math.asin(tt(c / i, -1, 1)))))), this.labelRotation = h
                }
                afterCalculateLabelRotation() {
                    _(this.options.afterCalculateLabelRotation, [this])
                }
                beforeFit() {
                    _(this.options.beforeFit, [this])
                }
                fit() {
                    let t = {
                            width: 0,
                            height: 0
                        },
                        {
                            chart: e,
                            options: {
                                ticks: i,
                                title: r,
                                grid: s
                            }
                        } = this,
                        n = this._isVisible(),
                        o = this.isHorizontal();
                    if (n) {
                        let n = iY(r, e.options.font);
                        if (o ? (t.width = this.maxWidth, t.height = i$(s) + n) : (t.height = this.maxHeight, t.width = i$(s) + n), i.display && this.ticks.length) {
                            let {
                                first: e,
                                last: r,
                                widest: s,
                                highest: n
                            } = this._getLabelSizes(), a = 2 * i.padding, h = Y(this.labelRotation), l = Math.cos(h), u = Math.sin(h);
                            if (o) {
                                let e = i.mirror ? 0 : u * s.width + l * n.height;
                                t.height = Math.min(this.maxHeight, t.height + e + a)
                            } else {
                                let e = i.mirror ? 0 : l * s.width + u * n.height;
                                t.width = Math.min(this.maxWidth, t.width + e + a)
                            }
                            this._calculatePadding(e, r, u, l)
                        }
                    }
                    this._handleMargins(), o ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                }
                _calculatePadding(t, e, i, r) {
                    let {
                        ticks: {
                            align: s,
                            padding: n
                        },
                        position: o
                    } = this.options, a = 0 !== this.labelRotation, h = "top" !== o && "x" === this.axis;
                    if (this.isHorizontal()) {
                        let o = this.getPixelForTick(0) - this.left,
                            l = this.right - this.getPixelForTick(this.ticks.length - 1),
                            u = 0,
                            c = 0;
                        a ? h ? (u = r * t.width, c = i * e.height) : (u = i * t.height, c = r * e.width) : "start" === s ? c = e.width : "end" === s ? u = t.width : (u = t.width / 2, c = e.width / 2), this.paddingLeft = Math.max((u - o + n) * this.width / (this.width - o), 0), this.paddingRight = Math.max((c - l + n) * this.width / (this.width - l), 0)
                    } else {
                        let i = e.height / 2,
                            r = t.height / 2;
                        "start" === s ? (i = 0, r = t.height) : "end" === s && (i = e.height, r = 0), this.paddingTop = i + n, this.paddingBottom = r + n
                    }
                }
                _handleMargins() {
                    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
                }
                afterFit() {
                    _(this.options.afterFit, [this])
                }
                isHorizontal() {
                    let {
                        axis: t,
                        position: e
                    } = this.options;
                    return "top" === e || "bottom" === e || "x" === t
                }
                isFullSize() {
                    return this.options.fullSize
                }
                _convertTicksToLabels(t) {
                    let e, i;
                    for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) c(t[e].label) && (t.splice(e, 1), i--, e--);
                    this.afterTickToLabelConversion()
                }
                _getLabelSizes() {
                    let t = this._labelSizes;
                    if (!t) {
                        let e = this.options.ticks.sampleSize,
                            i = this.ticks;
                        e < i.length && (i = iq(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
                    }
                    return t
                }
                _computeLabelSizes(t, e) {
                    let i, r, s, n, o, a, h, l, u, f, p, {
                            ctx: g,
                            _longestTextCache: m
                        } = this,
                        b = [],
                        _ = [],
                        y = 0,
                        x = 0;
                    for (i = 0; i < e; ++i) {
                        if (n = t[i].label, g.font = a = (o = this._resolveTickFontOptions(i)).string, h = m[a] = m[a] || {
                                data: {},
                                gc: []
                            }, l = o.lineHeight, u = f = 0, c(n) || d(n)) {
                            if (d(n))
                                for (r = 0, s = n.length; r < s; ++r) c(p = n[r]) || d(p) || (u = tz(g, h.data, h.gc, u, p), f += l)
                        } else u = tz(g, h.data, h.gc, u, n), f = l;
                        b.push(u), _.push(f), y = Math.max(u, y), x = Math.max(f, x)
                    }
                    v(m, t => {
                        let i, r = t.gc,
                            s = r.length / 2;
                        if (s > e) {
                            for (i = 0; i < s; ++i) delete t.data[r[i]];
                            r.splice(0, s)
                        }
                    });
                    let w = b.indexOf(y),
                        T = _.indexOf(x),
                        M = t => ({
                            width: b[t] || 0,
                            height: _[t] || 0
                        });
                    return {
                        first: M(0),
                        last: M(e - 1),
                        widest: M(w),
                        highest: M(T),
                        widths: b,
                        heights: _
                    }
                }
                getLabelForValue(t) {
                    return t
                }
                getPixelForValue(t, e) {
                    return NaN
                }
                getValueForPixel(t) {}
                getPixelForTick(t) {
                    let e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getPixelForDecimal(t) {
                    this._reversePixels && (t = 1 - t);
                    let e = this._startPixel + t * this._length;
                    return tt(this._alignToPixels ? tN(this.chart, e, 0) : e, -32768, 32767)
                }
                getDecimalForPixel(t) {
                    let e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                }
                getBasePixel() {
                    return this.getPixelForValue(this.getBaseValue())
                }
                getBaseValue() {
                    let {
                        min: t,
                        max: e
                    } = this;
                    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                }
                getContext(t) {
                    var e, i;
                    let r = this.ticks || [];
                    if (t >= 0 && t < r.length) {
                        let i = r[t];
                        return i.$context || (e = this.getContext(), i.$context = t6(e, {
                            tick: i,
                            index: t,
                            type: "tick"
                        }))
                    }
                    return this.$context || (this.$context = (i = this.chart.getContext(), t6(i, {
                        scale: this,
                        type: "scale"
                    })))
                }
                _tickSize() {
                    let t = this.options.ticks,
                        e = Y(this.labelRotation),
                        i = Math.abs(Math.cos(e)),
                        r = Math.abs(Math.sin(e)),
                        s = this._getLabelSizes(),
                        n = t.autoSkipPadding || 0,
                        o = s ? s.widest.width + n : 0,
                        a = s ? s.highest.height + n : 0;
                    return this.isHorizontal() ? a * i > o * r ? o / i : a / r : a * r < o * i ? a / i : o / r
                }
                _isVisible() {
                    let t = this.options.display;
                    return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                }
                _computeGridLineItems(t) {
                    let e, i, r, s, n, o, a, h, l, u, c, d, p = this.axis,
                        g = this.chart,
                        b = this.options,
                        {
                            grid: _,
                            position: v
                        } = b,
                        y = _.offset,
                        x = this.isHorizontal(),
                        w = this.ticks.length + +!!y,
                        T = i$(_),
                        M = [],
                        S = _.setContext(this.getContext()),
                        k = S.drawBorder ? S.borderWidth : 0,
                        D = k / 2,
                        O = function(t) {
                            return tN(g, t, k)
                        };
                    if ("top" === v) e = O(this.bottom), o = this.bottom - T, h = e - D, u = O(t.top) + D, d = t.bottom;
                    else if ("bottom" === v) e = O(this.top), u = t.top, d = O(t.bottom) - D, o = e + D, h = this.top + T;
                    else if ("left" === v) e = O(this.right), n = this.right - T, a = e - D, l = O(t.left) + D, c = t.right;
                    else if ("right" === v) e = O(this.left), l = t.left, c = O(t.right) - D, n = e + D, a = this.left + T;
                    else if ("x" === p) {
                        if ("center" === v) e = O((t.top + t.bottom) / 2 + .5);
                        else if (f(v)) {
                            let t = Object.keys(v)[0],
                                i = v[t];
                            e = O(this.chart.scales[t].getPixelForValue(i))
                        }
                        u = t.top, d = t.bottom, h = (o = e + D) + T
                    } else if ("y" === p) {
                        if ("center" === v) e = O((t.left + t.right) / 2);
                        else if (f(v)) {
                            let t = Object.keys(v)[0],
                                i = v[t];
                            e = O(this.chart.scales[t].getPixelForValue(i))
                        }
                        a = (n = e - D) - T, l = t.left, c = t.right
                    }
                    let E = m(b.ticks.maxTicksLimit, w),
                        P = Math.max(1, Math.ceil(w / E));
                    for (i = 0; i < w; i += P) {
                        let t = _.setContext(this.getContext(i)),
                            e = t.lineWidth,
                            f = t.color,
                            p = _.borderDash || [],
                            m = t.borderDashOffset,
                            b = t.tickWidth,
                            v = t.tickColor,
                            w = t.tickBorderDash || [],
                            T = t.tickBorderDashOffset;
                        void 0 !== (r = function(t, e, i) {
                            let r, s = t.ticks.length,
                                n = Math.min(e, s - 1),
                                o = t._startPixel,
                                a = t._endPixel,
                                h = t.getPixelForTick(n);
                            if (!i || (r = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, !((h += n < e ? r : -r) < o - 1e-6) && !(h > a + 1e-6))) return h
                        }(this, i, y)) && (s = tN(g, r, e), x ? n = a = l = c = s : o = h = u = d = s, M.push({
                            tx1: n,
                            ty1: o,
                            tx2: a,
                            ty2: h,
                            x1: l,
                            y1: u,
                            x2: c,
                            y2: d,
                            width: e,
                            color: f,
                            borderDash: p,
                            borderDashOffset: m,
                            tickWidth: b,
                            tickColor: v,
                            tickBorderDash: w,
                            tickBorderDashOffset: T
                        }))
                    }
                    return this._ticksLength = w, this._borderValue = e, M
                }
                _computeLabelItems(t) {
                    let e, i, r, s, n, o, a, h, l, u, c, p = this.axis,
                        g = this.options,
                        {
                            position: m,
                            ticks: b
                        } = g,
                        _ = this.isHorizontal(),
                        v = this.ticks,
                        {
                            align: y,
                            crossAlign: x,
                            padding: w,
                            mirror: T
                        } = b,
                        M = i$(g.grid),
                        S = M + w,
                        k = T ? -w : S,
                        D = -Y(this.labelRotation),
                        O = [],
                        E = "middle";
                    if ("top" === m) n = this.bottom - k, o = this._getXAxisLabelAlignment();
                    else if ("bottom" === m) n = this.top + k, o = this._getXAxisLabelAlignment();
                    else if ("left" === m) {
                        let t = this._getYAxisLabelAlignment(M);
                        o = t.textAlign, s = t.x
                    } else if ("right" === m) {
                        let t = this._getYAxisLabelAlignment(M);
                        o = t.textAlign, s = t.x
                    } else if ("x" === p) {
                        if ("center" === m) n = (t.top + t.bottom) / 2 + S;
                        else if (f(m)) {
                            let t = Object.keys(m)[0],
                                e = m[t];
                            n = this.chart.scales[t].getPixelForValue(e) + S
                        }
                        o = this._getXAxisLabelAlignment()
                    } else if ("y" === p) {
                        if ("center" === m) s = (t.left + t.right) / 2 - S;
                        else if (f(m)) {
                            let t = Object.keys(m)[0],
                                e = m[t];
                            s = this.chart.scales[t].getPixelForValue(e)
                        }
                        o = this._getYAxisLabelAlignment(M).textAlign
                    }
                    "y" === p && ("start" === y ? E = "top" : "end" === y && (E = "bottom"));
                    let P = this._getLabelSizes();
                    for (e = 0, i = v.length; e < i; ++e) {
                        let t;
                        r = v[e].label;
                        let i = b.setContext(this.getContext(e));
                        a = this.getPixelForTick(e) + b.labelOffset, l = (h = this._resolveTickFontOptions(e)).lineHeight;
                        let f = (u = d(r) ? r.length : 1) / 2,
                            p = i.color,
                            g = i.textStrokeColor,
                            y = i.textStrokeWidth;
                        if (_ ? (s = a, c = "top" === m ? "near" === x || 0 !== D ? -u * l + l / 2 : "center" === x ? -P.highest.height / 2 - f * l + l : -P.highest.height + l / 2 : "near" === x || 0 !== D ? l / 2 : "center" === x ? P.highest.height / 2 - f * l : P.highest.height - u * l, T && (c *= -1)) : (n = a, c = (1 - u) * l / 2), i.showLabelBackdrop) {
                            let r = t2(i.backdropPadding),
                                a = P.heights[e],
                                h = P.widths[e],
                                l = n + c - r.top,
                                u = s - r.left;
                            switch (E) {
                                case "middle":
                                    l -= a / 2;
                                    break;
                                case "bottom":
                                    l -= a
                            }
                            switch (o) {
                                case "center":
                                    u -= h / 2;
                                    break;
                                case "right":
                                    u -= h
                            }
                            t = {
                                left: u,
                                top: l,
                                width: h + r.width,
                                height: a + r.height,
                                color: i.backdropColor
                            }
                        }
                        O.push({
                            rotation: D,
                            label: r,
                            font: h,
                            color: p,
                            strokeColor: g,
                            strokeWidth: y,
                            textOffset: c,
                            textAlign: o,
                            textBaseline: E,
                            translation: [s, n],
                            backdrop: t
                        })
                    }
                    return O
                }
                _getXAxisLabelAlignment() {
                    let {
                        position: t,
                        ticks: e
                    } = this.options;
                    if (-Y(this.labelRotation)) return "top" === t ? "left" : "right";
                    let i = "center";
                    return "start" === e.align ? i = "left" : "end" === e.align && (i = "right"), i
                }
                _getYAxisLabelAlignment(t) {
                    let e, i, {
                            position: r,
                            ticks: {
                                crossAlign: s,
                                mirror: n,
                                padding: o
                            }
                        } = this.options,
                        a = this._getLabelSizes(),
                        h = t + o,
                        l = a.widest.width;
                    return "left" === r ? n ? (i = this.right + o, "near" === s ? e = "left" : "center" === s ? (e = "center", i += l / 2) : (e = "right", i += l)) : (i = this.right - h, "near" === s ? e = "right" : "center" === s ? (e = "center", i -= l / 2) : (e = "left", i = this.left)) : "right" === r ? n ? (i = this.left + o, "near" === s ? e = "right" : "center" === s ? (e = "center", i -= l / 2) : (e = "left", i -= l)) : (i = this.left + h, "near" === s ? e = "left" : "center" === s ? (e = "center", i += l / 2) : (e = "right", i = this.right)) : e = "right", {
                        textAlign: e,
                        x: i
                    }
                }
                _computeLabelArea() {
                    if (this.options.ticks.mirror) return;
                    let t = this.chart,
                        e = this.options.position;
                    return "left" === e || "right" === e ? {
                        top: 0,
                        left: this.left,
                        bottom: t.height,
                        right: this.right
                    } : "top" === e || "bottom" === e ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: t.width
                    } : void 0
                }
                drawBackground() {
                    let {
                        ctx: t,
                        options: {
                            backgroundColor: e
                        },
                        left: i,
                        top: r,
                        width: s,
                        height: n
                    } = this;
                    e && (t.save(), t.fillStyle = e, t.fillRect(i, r, s, n), t.restore())
                }
                getLineWidthForValue(t) {
                    let e = this.options.grid;
                    if (!this._isVisible() || !e.display) return 0;
                    let i = this.ticks.findIndex(e => e.value === t);
                    return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0
                }
                drawGrid(t) {
                    let e, i, r = this.options.grid,
                        s = this.ctx,
                        n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                        o = (t, e, i) => {
                            i.width && i.color && (s.save(), s.lineWidth = i.width, s.strokeStyle = i.color, s.setLineDash(i.borderDash || []), s.lineDashOffset = i.borderDashOffset, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(e.x, e.y), s.stroke(), s.restore())
                        };
                    if (r.display)
                        for (e = 0, i = n.length; e < i; ++e) {
                            let t = n[e];
                            r.drawOnChartArea && o({
                                x: t.x1,
                                y: t.y1
                            }, {
                                x: t.x2,
                                y: t.y2
                            }, t), r.drawTicks && o({
                                x: t.tx1,
                                y: t.ty1
                            }, {
                                x: t.tx2,
                                y: t.ty2
                            }, {
                                color: t.tickColor,
                                width: t.tickWidth,
                                borderDash: t.tickBorderDash,
                                borderDashOffset: t.tickBorderDashOffset
                            })
                        }
                }
                drawBorder() {
                    let t, e, i, r, {
                            chart: s,
                            ctx: n,
                            options: {
                                grid: o
                            }
                        } = this,
                        a = o.setContext(this.getContext()),
                        h = o.drawBorder ? a.borderWidth : 0;
                    if (!h) return;
                    let l = o.setContext(this.getContext(0)).lineWidth,
                        u = this._borderValue;
                    this.isHorizontal() ? (t = tN(s, this.left, h) - h / 2, e = tN(s, this.right, l) + l / 2, i = r = u) : (i = tN(s, this.top, h) - h / 2, r = tN(s, this.bottom, l) + l / 2, t = e = u), n.save(), n.lineWidth = a.borderWidth, n.strokeStyle = a.borderColor, n.beginPath(), n.moveTo(t, i), n.lineTo(e, r), n.stroke(), n.restore()
                }
                drawLabels(t) {
                    let e, i;
                    if (!this.options.ticks.display) return;
                    let r = this.ctx,
                        s = this._computeLabelArea();
                    s && tU(r, s);
                    let n = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                    for (e = 0, i = n.length; e < i; ++e) {
                        let t = n[e],
                            i = t.font,
                            s = t.label;
                        t.backdrop && (r.fillStyle = t.backdrop.color, r.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), tK(r, s, 0, t.textOffset, i, t)
                    }
                    s && tq(r)
                }
                drawTitle() {
                    let t, e, {
                        ctx: i,
                        options: {
                            position: r,
                            title: s,
                            reverse: n
                        }
                    } = this;
                    if (!s.display) return;
                    let o = t5(s.font),
                        l = t2(s.padding),
                        u = s.align,
                        c = o.lineHeight / 2;
                    "bottom" === r || "center" === r || f(r) ? (c += l.bottom, d(s.text) && (c += o.lineHeight * (s.text.length - 1))) : c += l.top;
                    let {
                        titleX: p,
                        titleY: g,
                        maxWidth: m,
                        rotation: b
                    } = function(t, e, i, r) {
                        let s, n, o, {
                                top: a,
                                left: l,
                                bottom: u,
                                right: c,
                                chart: d
                            } = t,
                            {
                                chartArea: p,
                                scales: g
                            } = d,
                            m = 0,
                            b = u - a,
                            _ = c - l;
                        if (t.isHorizontal()) {
                            if (n = h(r, l, c), f(i)) {
                                let t = Object.keys(i)[0],
                                    r = i[t];
                                o = g[t].getPixelForValue(r) + b - e
                            } else o = "center" === i ? (p.bottom + p.top) / 2 + b - e : iU(t, i, e);
                            s = c - l
                        } else {
                            if (f(i)) {
                                let t = Object.keys(i)[0],
                                    r = i[t];
                                n = g[t].getPixelForValue(r) - _ + e
                            } else n = "center" === i ? (p.left + p.right) / 2 - _ + e : iU(t, i, e);
                            o = h(r, u, a), m = "left" === i ? -F : F
                        }
                        return {
                            titleX: n,
                            titleY: o,
                            maxWidth: s,
                            rotation: m
                        }
                    }(this, c, r, u);
                    tK(i, s.text, 0, 0, o, {
                        color: s.color,
                        maxWidth: m,
                        rotation: b,
                        textAlign: (t = a(u), (n && "right" !== r || !n && "right" === r) && (t = "left" === (e = t) ? "right" : "right" === e ? "left" : e), t),
                        textBaseline: "middle",
                        translation: [p, g]
                    })
                }
                draw(t) {
                    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
                }
                _layers() {
                    let t = this.options,
                        e = t.ticks && t.ticks.z || 0,
                        i = m(t.grid && t.grid.z, -1);
                    return this._isVisible() && this.draw === iK.prototype.draw ? [{
                        z: i,
                        draw: t => {
                            this.drawBackground(), this.drawGrid(t), this.drawTitle()
                        }
                    }, {
                        z: i + 1,
                        draw: () => {
                            this.drawBorder()
                        }
                    }, {
                        z: e,
                        draw: t => {
                            this.drawLabels(t)
                        }
                    }] : [{
                        z: e,
                        draw: t => {
                            this.draw(t)
                        }
                    }]
                }
                getMatchingVisibleMetas(t) {
                    let e, i, r = this.chart.getSortedVisibleDatasetMetas(),
                        s = this.axis + "AxisID",
                        n = [];
                    for (e = 0, i = r.length; e < i; ++e) {
                        let i = r[e];
                        i[s] !== this.id || t && i.type !== t || n.push(i)
                    }
                    return n
                }
                _resolveTickFontOptions(t) {
                    return t5(this.options.ticks.setContext(this.getContext(t)).font)
                }
                _maxDigits() {
                    let t = this._resolveTickFontOptions(0).lineHeight;
                    return (this.isHorizontal() ? this.width : this.height) / t
                }
                constructor(t) {
                    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
                }
            }
            class iX {
                isForType(t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                }
                register(t) {
                    var e, i, r, s, n, o;
                    let a, h, l = Object.getPrototypeOf(t);
                    "id" in (e = l) && "defaults" in e && (h = this.register(l));
                    let u = this.items,
                        c = t.id,
                        d = this.scope + "." + c;
                    if (!c) throw Error("class does not have id: " + t);
                    return c in u || (u[c] = t, i = t, r = d, s = h, a = M(Object.create(null), [s ? tF.get(s) : {}, tF.get(r), i.defaults]), tF.set(r, a), i.defaultRoutes && (n = r, Object.keys(o = i.defaultRoutes).forEach(t => {
                        let e = t.split("."),
                            i = e.pop(),
                            r = [n].concat(e).join("."),
                            s = o[t].split("."),
                            a = s.pop(),
                            h = s.join(".");
                        tF.route(r, i, h, a)
                    })), i.descriptors && tF.describe(r, i.descriptors), this.override && tF.override(t.id, t.overrides)), d
                }
                get(t) {
                    return this.items[t]
                }
                unregister(t) {
                    let e = this.items,
                        i = t.id,
                        r = this.scope;
                    i in e && delete e[i], r && i in tF[r] && (delete tF[r][i], this.override && delete tL[i])
                }
                constructor(t, e, i) {
                    this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
                }
            }
            var iZ = new class {
                add() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("register", e)
                }
                remove() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("unregister", e)
                }
                addControllers() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("register", e, this.controllers)
                }
                addElements() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("register", e, this.elements)
                }
                addPlugins() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("register", e, this.plugins)
                }
                addScales() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("register", e, this.scales)
                }
                getController(t) {
                    return this._get(t, this.controllers, "controller")
                }
                getElement(t) {
                    return this._get(t, this.elements, "element")
                }
                getPlugin(t) {
                    return this._get(t, this.plugins, "plugin")
                }
                getScale(t) {
                    return this._get(t, this.scales, "scale")
                }
                removeControllers() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("unregister", e, this.controllers)
                }
                removeElements() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("unregister", e, this.elements)
                }
                removePlugins() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("unregister", e, this.plugins)
                }
                removeScales() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    this._each("unregister", e, this.scales)
                }
                _each(t, e, i) {
                    [...e].forEach(e => {
                        let r = i || this._getRegistryForType(e);
                        i || r.isForType(e) || r === this.plugins && e.id ? this._exec(t, r, e) : v(e, e => {
                            let r = i || this._getRegistryForType(e);
                            this._exec(t, r, e)
                        })
                    })
                }
                _exec(t, e, i) {
                    let r = E(t);
                    _(i["before" + r], [], i), e[t](i), _(i["after" + r], [], i)
                }
                _getRegistryForType(t) {
                    for (let e = 0; e < this._typedRegistries.length; e++) {
                        let i = this._typedRegistries[e];
                        if (i.isForType(t)) return i
                    }
                    return this.plugins
                }
                _get(t, e, i) {
                    let r = e.get(t);
                    if (void 0 === r) throw Error('"' + t + '" is not a registered ' + i + ".");
                    return r
                }
                constructor() {
                    this.controllers = new iX(e1, "datasets", !0), this.elements = new iX(ij, "elements"), this.plugins = new iX(Object, "plugins"), this.scales = new iX(iK, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
                }
            };
            class iG {
                notify(t, e, i, r) {
                    "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                    let s = r ? this._descriptors(t).filter(r) : this._descriptors(t),
                        n = this._notify(s, t, e, i);
                    return "afterDestroy" === e && (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")), n
                }
                _notify(t, e, i, r) {
                    for (let s of (r = r || {}, t)) {
                        let t = s.plugin;
                        if (!1 === _(t[i], [e, r, s.options], t) && r.cancelable) return !1
                    }
                    return !0
                }
                invalidate() {
                    c(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
                }
                _descriptors(t) {
                    if (this._cache) return this._cache;
                    let e = this._cache = this._createDescriptors(t);
                    return this._notifyStateChanges(t), e
                }
                _createDescriptors(t, e) {
                    let i = t && t.config,
                        r = m(i.options && i.options.plugins, {}),
                        s = function(t) {
                            let e = [],
                                i = Object.keys(iZ.plugins.items);
                            for (let t = 0; t < i.length; t++) e.push(iZ.getPlugin(i[t]));
                            let r = t.plugins || [];
                            for (let t = 0; t < r.length; t++) {
                                let i = r[t]; - 1 === e.indexOf(i) && e.push(i)
                            }
                            return e
                        }(i);
                    return !1 !== r || e ? function(t, e, i, r) {
                        let s = [],
                            n = t.getContext();
                        for (let a = 0; a < e.length; a++) {
                            var o;
                            let h = e[a],
                                l = (o = i[h.id], r || !1 !== o ? !0 === o ? {} : o : null);
                            null !== l && s.push({
                                plugin: h,
                                options: function(t, e, i, r) {
                                    let s = t.pluginScopeKeys(e),
                                        n = t.getOptionScopes(i, s);
                                    return t.createResolver(n, r, [""], {
                                        scriptable: !1,
                                        indexable: !1,
                                        allKeys: !0
                                    })
                                }(t.config, h, l, n)
                            })
                        }
                        return s
                    }(t, s, r, e) : []
                }
                _notifyStateChanges(t) {
                    let e = this._oldCache || [],
                        i = this._cache,
                        r = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
                    this._notify(r(e, i), t, "stop"), this._notify(r(i, e), t, "start")
                }
                constructor() {
                    this._init = []
                }
            }

            function iQ(t, e) {
                let i = tF.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
            }

            function iJ(t, e) {
                var i;
                return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase()
            }

            function i0(t) {
                let e, i, r, s, n, o = t.options || (t.options = {});
                o.plugins = m(o.plugins, {}), e = tL[t.type] || {
                    scales: {}
                }, i = o.scales || {}, r = iQ(t.type, o), s = Object.create(null), n = Object.create(null), Object.keys(i).forEach(t => {
                    let o = i[t];
                    if (!f(o)) return console.error(`Invalid scale configuration for scale: ${t}`);
                    if (o._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                    let a = iJ(t, o),
                        h = a === r ? "_index_" : "_value_",
                        l = e.scales || {};
                    s[a] = s[a] || t, n[t] = S(Object.create(null), [{
                        axis: a
                    }, o, l[a], l[h]])
                }), t.data.datasets.forEach(e => {
                    let r = e.type || t.type,
                        a = e.indexAxis || iQ(r, o),
                        h = (tL[r] || {}).scales || {};
                    Object.keys(h).forEach(t => {
                        let r, o = (r = t, "_index_" === t ? r = a : "_value_" === t && (r = "x" === a ? "y" : "x"), r),
                            l = e[o + "AxisID"] || s[o] || o;
                        n[l] = n[l] || Object.create(null), S(n[l], [{
                            axis: o
                        }, i[l], h[t]])
                    })
                }), Object.keys(n).forEach(t => {
                    let e = n[t];
                    S(e, [tF.scales[e.type], tF.scale])
                }), o.scales = n
            }

            function i1(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
            }
            let i2 = new Map,
                i5 = new Set;

            function i3(t, e) {
                let i = i2.get(t);
                return i || (i = e(), i2.set(t, i), i5.add(i)), i
            }
            let i6 = (t, e, i) => {
                let r = O(e, i);
                void 0 !== r && t.add(r)
            };
            class i8 {
                get platform() {
                    return this._config.platform
                }
                get type() {
                    return this._config.type
                }
                set type(t) {
                    this._config.type = t
                }
                get data() {
                    return this._config.data
                }
                set data(t) {
                    this._config.data = i1(t)
                }
                get options() {
                    return this._config.options
                }
                set options(t) {
                    this._config.options = t
                }
                get plugins() {
                    return this._config.plugins
                }
                update() {
                    let t = this._config;
                    this.clearCache(), i0(t)
                }
                clearCache() {
                    this._scopeCache.clear(), this._resolverCache.clear()
                }
                datasetScopeKeys(t) {
                    return i3(t, () => [
                        [`datasets.${t}`, ""]
                    ])
                }
                datasetAnimationScopeKeys(t, e) {
                    return i3(`${t}.transition.${e}`, () => [
                        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                        [`datasets.${t}`, ""]
                    ])
                }
                datasetElementScopeKeys(t, e) {
                    return i3(`${t}-${e}`, () => [
                        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
                    ])
                }
                pluginScopeKeys(t) {
                    let e = t.id,
                        i = this.type;
                    return i3(`${i}-plugin-${e}`, () => [
                        [`plugins.${e}`, ...t.additionalOptionScopes || []]
                    ])
                }
                _cachedScopes(t, e) {
                    let i = this._scopeCache,
                        r = i.get(t);
                    return (!r || e) && (r = new Map, i.set(t, r)), r
                }
                getOptionScopes(t, e, i) {
                    let {
                        options: r,
                        type: s
                    } = this, n = this._cachedScopes(t, i), o = n.get(e);
                    if (o) return o;
                    let a = new Set;
                    e.forEach(e => {
                        t && (a.add(t), e.forEach(e => i6(a, t, e))), e.forEach(t => i6(a, r, t)), e.forEach(t => i6(a, tL[s] || {}, t)), e.forEach(t => i6(a, tF, t)), e.forEach(t => i6(a, tB, t))
                    });
                    let h = Array.from(a);
                    return 0 === h.length && h.push(Object.create(null)), i5.has(e) && n.set(e, h), h
                }
                chartOptionScopes() {
                    let {
                        options: t,
                        type: e
                    } = this;
                    return [t, tL[e] || {}, tF.datasets[e] || {}, {
                        type: e
                    }, tF, tB]
                }
                resolveNamedOptions(t, e, i) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [""],
                        s = {
                            $shared: !0
                        },
                        {
                            resolver: n,
                            subPrefixes: o
                        } = i4(this._resolverCache, t, r),
                        a = n;
                    if (function(t, e) {
                            let {
                                isScriptable: i,
                                isIndexable: r
                            } = es(t);
                            for (let s of e) {
                                let e = i(s),
                                    n = r(s),
                                    o = (n || e) && t[s];
                                if (e && (A(o) || i7(o)) || n && d(o)) return !0
                            }
                            return !1
                        }(n, e)) {
                        s.$shared = !1, i = A(i) ? i() : i;
                        let e = this.createResolver(t, i, o);
                        a = er(n, i, e)
                    }
                    for (let t of e) s[t] = a[t];
                    return s
                }
                createResolver(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [""],
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        {
                            resolver: s
                        } = i4(this._resolverCache, t, i);
                    return f(e) ? er(s, e, void 0, r) : s
                }
                constructor(t) {
                    this._config = function(t) {
                        return (t = t || {}).data = i1(t.data), i0(t), t
                    }(t), this._scopeCache = new Map, this._resolverCache = new Map
                }
            }

            function i4(t, e, i) {
                let r = t.get(e);
                r || (r = new Map, t.set(e, r));
                let s = i.join(),
                    n = r.get(s);
                return n || (n = {
                    resolver: ei(e, i),
                    subPrefixes: i.filter(t => !t.toLowerCase().includes("hover"))
                }, r.set(s, n)), n
            }
            let i7 = t => f(t) && Object.getOwnPropertyNames(t).reduce((e, i) => e || A(t[i]), !1),
                i9 = ["top", "bottom", "left", "right", "chartArea"];

            function rt(t, e) {
                return "top" === t || "bottom" === t || -1 === i9.indexOf(t) && "x" === e
            }

            function re(t, e) {
                return function(i, r) {
                    return i[t] === r[t] ? i[e] - r[e] : i[t] - r[t]
                }
            }

            function ri(t) {
                let e = t.chart,
                    i = e.options.animation;
                e.notifyPlugins("afterRender"), _(i && i.onComplete, [t], e)
            }

            function rr(t) {
                let e = t.chart,
                    i = e.options.animation;
                _(i && i.onProgress, [t], e)
            }

            function rs(t) {
                return eb() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
            }
            let rn = {},
                ro = t => {
                    let e = rs(t);
                    return Object.values(rn).filter(t => t.canvas === e).pop()
                };
            class ra {
                get aspectRatio() {
                    let {
                        options: {
                            aspectRatio: t,
                            maintainAspectRatio: e
                        },
                        width: i,
                        height: r,
                        _aspectRatio: s
                    } = this;
                    return c(t) ? e && s ? s : r ? i / r : null : t
                }
                get data() {
                    return this.config.data
                }
                set data(t) {
                    this.config.data = t
                }
                get options() {
                    return this._options
                }
                set options(t) {
                    this.config.options = t
                }
                _initialize() {
                    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : eM(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
                }
                clear() {
                    return tj(this.canvas, this.ctx), this
                }
                stop() {
                    return ez.stop(this), this
                }
                resize(t, e) {
                    ez.running(this) ? this._resizeBeforeDraw = {
                        width: t,
                        height: e
                    } : this._resize(t, e)
                }
                _resize(t, e) {
                    let i = this.options,
                        r = this.canvas,
                        s = i.maintainAspectRatio && this.aspectRatio,
                        n = this.platform.getMaximumSize(r, t, e, s),
                        o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                        a = this.width ? "resize" : "attach";
                    this.width = n.width, this.height = n.height, this._aspectRatio = this.aspectRatio, eM(this, o, !0) && (this.notifyPlugins("resize", {
                        size: n
                    }), _(i.onResize, [this, n], this), this.attached && this._doResize(a) && this.render())
                }
                ensureScalesHaveIDs() {
                    v(this.options.scales || {}, (t, e) => {
                        t.id = e
                    })
                }
                buildOrUpdateScales() {
                    let t = this.options,
                        e = t.scales,
                        i = this.scales,
                        r = Object.keys(i).reduce((t, e) => (t[e] = !1, t), {}),
                        s = [];
                    e && (s = s.concat(Object.keys(e).map(t => {
                        let i = e[t],
                            r = iJ(t, i),
                            s = "r" === r,
                            n = "x" === r;
                        return {
                            options: i,
                            dposition: s ? "chartArea" : n ? "bottom" : "left",
                            dtype: s ? "radialLinear" : n ? "category" : "linear"
                        }
                    }))), v(s, e => {
                        let s = e.options,
                            n = s.id,
                            o = iJ(n, s),
                            a = m(s.type, e.dtype);
                        (void 0 === s.position || rt(s.position, o) !== rt(e.dposition)) && (s.position = e.dposition), r[n] = !0;
                        let h = null;
                        n in i && i[n].type === a ? h = i[n] : i[(h = new(iZ.getScale(a))({
                            id: n,
                            type: a,
                            ctx: this.ctx,
                            chart: this
                        })).id] = h, h.init(s, t)
                    }), v(r, (t, e) => {
                        t || delete i[e]
                    }), v(i, t => {
                        iM.configure(this, t, t.options), iM.addBox(this, t)
                    })
                }
                _updateMetasets() {
                    let t = this._metasets,
                        e = this.data.datasets.length,
                        i = t.length;
                    if (t.sort((t, e) => t.index - e.index), i > e) {
                        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                        t.splice(e, i - e)
                    }
                    this._sortedMetasets = t.slice(0).sort(re("order", "index"))
                }
                _removeUnreferencedMetasets() {
                    let {
                        _metasets: t,
                        data: {
                            datasets: e
                        }
                    } = this;
                    t.length > e.length && delete this._stacks, t.forEach((t, i) => {
                        0 === e.filter(e => e === t._dataset).length && this._destroyDatasetMeta(i)
                    })
                }
                buildOrUpdateControllers() {
                    let t, e, i = [],
                        r = this.data.datasets;
                    for (this._removeUnreferencedMetasets(), t = 0, e = r.length; t < e; t++) {
                        let e = r[t],
                            s = this.getDatasetMeta(t),
                            n = e.type || this.config.type;
                        if (s.type && s.type !== n && (this._destroyDatasetMeta(t), s = this.getDatasetMeta(t)), s.type = n, s.indexAxis = e.indexAxis || iQ(n, this.options), s.order = e.order || 0, s.index = t, s.label = "" + e.label, s.visible = this.isDatasetVisible(t), s.controller) s.controller.updateIndex(t), s.controller.linkScales();
                        else {
                            let e = iZ.getController(n),
                                {
                                    datasetElementType: r,
                                    dataElementType: o
                                } = tF.datasets[n];
                            Object.assign(e.prototype, {
                                dataElementType: iZ.getElement(o),
                                datasetElementType: r && iZ.getElement(r)
                            }), s.controller = new e(this, t), i.push(s.controller)
                        }
                    }
                    return this._updateMetasets(), i
                }
                _resetElements() {
                    v(this.data.datasets, (t, e) => {
                        this.getDatasetMeta(e).controller.reset()
                    }, this)
                }
                reset() {
                    this._resetElements(), this.notifyPlugins("reset")
                }
                update(t) {
                    let e = this.config;
                    e.update();
                    let i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                        r = this._animationsDisabled = !i.animation;
                    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                            mode: t,
                            cancelable: !0
                        })) return;
                    let s = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    let n = 0;
                    for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                        let {
                            controller: e
                        } = this.getDatasetMeta(t), i = !r && -1 === s.indexOf(e);
                        e.buildOrUpdateElements(i), n = Math.max(+e.getMaxOverflow(), n)
                    }
                    n = this._minPadding = i.layout.autoPadding ? n : 0, this._updateLayout(n), r || v(s, t => {
                        t.reset()
                    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                        mode: t
                    }), this._layers.sort(re("z", "_idx"));
                    let {
                        _active: o,
                        _lastEvent: a
                    } = this;
                    a ? this._eventHandler(a, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render()
                }
                _updateScales() {
                    v(this.scales, t => {
                        iM.removeBox(this, t)
                    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
                }
                _checkEventBindings() {
                    let t = this.options;
                    C(new Set(Object.keys(this._listeners)), new Set(t.events)) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
                }
                _updateHiddenIndices() {
                    let {
                        _hiddenIndices: t
                    } = this;
                    for (let {
                            method: i,
                            start: r,
                            count: s
                        }
                        of this._getUniformDataChanges() || []) {
                        var e = "_removeElements" === i ? -s : s;
                        for (let i of Object.keys(t)) {
                            let s = +i;
                            if (s >= r) {
                                let n = t[i];
                                delete t[i], (e > 0 || s > r) && (t[s + e] = n)
                            }
                        }
                    }
                }
                _getUniformDataChanges() {
                    let t = this._dataChanges;
                    if (!t || !t.length) return;
                    this._dataChanges = [];
                    let e = this.data.datasets.length,
                        i = e => new Set(t.filter(t => t[0] === e).map((t, e) => e + "," + t.splice(1).join(","))),
                        r = i(0);
                    for (let t = 1; t < e; t++)
                        if (!C(r, i(t))) return;
                    return Array.from(r).map(t => t.split(",")).map(t => ({
                        method: t[1],
                        start: +t[2],
                        count: +t[3]
                    }))
                }
                _updateLayout(t) {
                    if (!1 === this.notifyPlugins("beforeLayout", {
                            cancelable: !0
                        })) return;
                    iM.update(this, this.width, this.height, t);
                    let e = this.chartArea,
                        i = e.width <= 0 || e.height <= 0;
                    this._layers = [], v(this.boxes, t => {
                        i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
                    }, this), this._layers.forEach((t, e) => {
                        t._idx = e
                    }), this.notifyPlugins("afterLayout")
                }
                _updateDatasets(t) {
                    if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                            mode: t,
                            cancelable: !0
                        })) {
                        for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                        for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, A(t) ? t({
                            datasetIndex: e
                        }) : t);
                        this.notifyPlugins("afterDatasetsUpdate", {
                            mode: t
                        })
                    }
                }
                _updateDataset(t, e) {
                    let i = this.getDatasetMeta(t),
                        r = {
                            meta: i,
                            index: t,
                            mode: e,
                            cancelable: !0
                        };
                    !1 !== this.notifyPlugins("beforeDatasetUpdate", r) && (i.controller._update(e), r.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", r))
                }
                render() {
                    !1 !== this.notifyPlugins("beforeRender", {
                        cancelable: !0
                    }) && (ez.has(this) ? this.attached && !ez.running(this) && ez.start(this) : (this.draw(), ri({
                        chart: this
                    })))
                }
                draw() {
                    let t;
                    if (this._resizeBeforeDraw) {
                        let {
                            width: t,
                            height: e
                        } = this._resizeBeforeDraw;
                        this._resize(t, e), this._resizeBeforeDraw = null
                    }
                    if (this.clear(), this.width <= 0 || this.height <= 0 || !1 === this.notifyPlugins("beforeDraw", {
                            cancelable: !0
                        })) return;
                    let e = this._layers;
                    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw")
                }
                _getSortedDatasetMetas(t) {
                    let e, i, r = this._sortedMetasets,
                        s = [];
                    for (e = 0, i = r.length; e < i; ++e) {
                        let i = r[e];
                        (!t || i.visible) && s.push(i)
                    }
                    return s
                }
                getSortedVisibleDatasetMetas() {
                    return this._getSortedDatasetMetas(!0)
                }
                _drawDatasets() {
                    if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                            cancelable: !0
                        })) return;
                    let t = this.getSortedVisibleDatasetMetas();
                    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw")
                }
                _drawDataset(t) {
                    let e = this.ctx,
                        i = t._clip,
                        r = !i.disabled,
                        s = this.chartArea,
                        n = {
                            meta: t,
                            index: t.index,
                            cancelable: !0
                        };
                    !1 !== this.notifyPlugins("beforeDatasetDraw", n) && (r && tU(e, {
                        left: !1 === i.left ? 0 : s.left - i.left,
                        right: !1 === i.right ? this.width : s.right + i.right,
                        top: !1 === i.top ? 0 : s.top - i.top,
                        bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom
                    }), t.controller.draw(), r && tq(e), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n))
                }
                getElementsAtEventForMode(t, e, i, r) {
                    let s = ip.modes[e];
                    return "function" == typeof s ? s(this, t, i, r) : []
                }
                getDatasetMeta(t) {
                    let e = this.data.datasets[t],
                        i = this._metasets,
                        r = i.filter(t => t && t._dataset === e).pop();
                    return r || (r = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e && e.order || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1
                    }, i.push(r)), r
                }
                getContext() {
                    return this.$context || (this.$context = t6(null, {
                        chart: this,
                        type: "chart"
                    }))
                }
                getVisibleDatasetCount() {
                    return this.getSortedVisibleDatasetMetas().length
                }
                isDatasetVisible(t) {
                    let e = this.data.datasets[t];
                    if (!e) return !1;
                    let i = this.getDatasetMeta(t);
                    return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
                }
                setDatasetVisibility(t, e) {
                    this.getDatasetMeta(t).hidden = !e
                }
                toggleDataVisibility(t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t]
                }
                getDataVisibility(t) {
                    return !this._hiddenIndices[t]
                }
                _updateVisibility(t, e, i) {
                    let r = i ? "show" : "hide",
                        s = this.getDatasetMeta(t),
                        n = s.controller._resolveAnimations(void 0, r);
                    P(e) ? (s.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), n.update(s, {
                        visible: i
                    }), this.update(e => e.datasetIndex === t ? r : void 0))
                }
                hide(t, e) {
                    this._updateVisibility(t, e, !1)
                }
                show(t, e) {
                    this._updateVisibility(t, e, !0)
                }
                _destroyDatasetMeta(t) {
                    let e = this._metasets[t];
                    e && e.controller && e.controller._destroy(), delete this._metasets[t]
                }
                _stop() {
                    let t, e;
                    for (this.stop(), ez.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
                }
                destroy() {
                    this.notifyPlugins("beforeDestroy");
                    let {
                        canvas: t,
                        ctx: e
                    } = this;
                    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), tj(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete rn[this.id], this.notifyPlugins("afterDestroy")
                }
                toBase64Image() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return this.canvas.toDataURL(...e)
                }
                bindEvents() {
                    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
                }
                bindUserEvents() {
                    let t = this._listeners,
                        e = this.platform,
                        i = (i, r) => {
                            e.addEventListener(this, i, r), t[i] = r
                        },
                        r = (t, e, i) => {
                            t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                        };
                    v(this.options.events, t => i(t, r))
                }
                bindResponsiveEvents() {
                    let t;
                    this._responsiveListeners || (this._responsiveListeners = {});
                    let e = this._responsiveListeners,
                        i = this.platform,
                        r = (t, r) => {
                            i.addEventListener(this, t, r), e[t] = r
                        },
                        s = (t, r) => {
                            e[t] && (i.removeEventListener(this, t, r), delete e[t])
                        },
                        n = (t, e) => {
                            this.canvas && this.resize(t, e)
                        },
                        o = () => {
                            s("attach", o), this.attached = !0, this.resize(), r("resize", n), r("detach", t)
                        };
                    t = () => {
                        this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), r("attach", o)
                    }, i.isAttached(this.canvas) ? o() : t()
                }
                unbindEvents() {
                    v(this._listeners, (t, e) => {
                        this.platform.removeEventListener(this, e, t)
                    }), this._listeners = {}, v(this._responsiveListeners, (t, e) => {
                        this.platform.removeEventListener(this, e, t)
                    }), this._responsiveListeners = void 0
                }
                updateHoverStyle(t, e, i) {
                    let r, s, n, o = i ? "set" : "remove";
                    for ("dataset" === e && this.getDatasetMeta(t[0].datasetIndex).controller["_" + o + "DatasetHoverStyle"](), s = 0, n = t.length; s < n; ++s) {
                        let e = (r = t[s]) && this.getDatasetMeta(r.datasetIndex).controller;
                        e && e[o + "HoverStyle"](r.element, r.datasetIndex, r.index)
                    }
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t) {
                    let e = this._active || [],
                        i = t.map(t => {
                            let {
                                datasetIndex: e,
                                index: i
                            } = t, r = this.getDatasetMeta(e);
                            if (!r) throw Error("No dataset found at index " + e);
                            return {
                                datasetIndex: e,
                                element: r.data[i],
                                index: i
                            }
                        });
                    y(i, e) || (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
                }
                notifyPlugins(t, e, i) {
                    return this._plugins.notify(this, t, e, i)
                }
                _updateHoverStyles(t, e, i) {
                    let r = this.options.hover,
                        s = (t, e) => t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
                        n = s(e, t),
                        o = i ? t : s(t, e);
                    n.length && this.updateHoverStyle(n, r.mode, !1), o.length && r.mode && this.updateHoverStyle(o, r.mode, !0)
                }
                _eventHandler(t, e) {
                    let i = {
                            event: t,
                            replay: e,
                            cancelable: !0,
                            inChartArea: tW(t, this.chartArea, this._minPadding)
                        },
                        r = e => (e.options.events || this.options.events).includes(t.native.type);
                    if (!1 === this.notifyPlugins("beforeEvent", i, r)) return;
                    let s = this._handleEvent(t, e, i.inChartArea);
                    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, r), (s || i.changed) && this.render(), this
                }
                _handleEvent(t, e, i) {
                    var r;
                    let {
                        _active: s = [],
                        options: n
                    } = this, o = this._getActiveElements(t, s, i, e), a = "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type, h = (r = this._lastEvent, i && "mouseout" !== t.type ? a ? r : t : null);
                    i && (this._lastEvent = null, _(n.onHover, [t, o, this], this), a && _(n.onClick, [t, o, this], this));
                    let l = !y(o, s);
                    return (l || e) && (this._active = o, this._updateHoverStyles(o, s, e)), this._lastEvent = h, l
                }
                _getActiveElements(t, e, i, r) {
                    if ("mouseout" === t.type) return [];
                    if (!i) return e;
                    let s = this.options.hover;
                    return this.getElementsAtEventForMode(t, s.mode, s, r)
                }
                constructor(t, e) {
                    const i = this.config = new i8(e),
                        r = rs(t),
                        s = ro(r);
                    if (s) throw Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas can be reused.");
                    const n = i.createResolver(i.chartOptionScopes(), this.getContext());
                    this.platform = new(i.platform || (!eb() || "undefined" != typeof OffscreenCanvas && r instanceof OffscreenCanvas ? ik : iN)), this.platform.updateConfig(i);
                    const o = this.platform.acquireContext(r, n.aspectRatio),
                        a = o && o.canvas,
                        h = a && a.height,
                        l = a && a.width;
                    if (this.id = u(), this.ctx = o, this.canvas = a, this.width = l, this.height = h, this._options = n, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new iG, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function(t, e) {
                            let i;
                            return function() {
                                for (var r = arguments.length, s = Array(r), n = 0; n < r; n++) s[n] = arguments[n];
                                return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e
                            }
                        }(t => this.update(t), n.resizeDelay || 0), this._dataChanges = [], rn[this.id] = this, !o || !a) return void console.error("Failed to create chart: can't acquire context from the given item");
                    ez.listen(this, "complete", ri), ez.listen(this, "progress", rr), this._initialize(), this.attached && this.update()
                }
            }
            let rh = () => v(ra.instances, t => t._plugins.invalidate());

            function rl(t, e, i) {
                let {
                    startAngle: r,
                    pixelMargin: s,
                    x: n,
                    y: o,
                    outerRadius: a,
                    innerRadius: h
                } = e, l = s / a;
                t.beginPath(), t.arc(n, o, a, r - l, i + l), h > s ? (l = s / h, t.arc(n, o, h, i + l, r - l, !0)) : t.arc(n, o, s, i + F, r - F), t.closePath(), t.clip()
            }

            function ru(t, e, i, r) {
                return {
                    x: i + t * Math.cos(e),
                    y: r + t * Math.sin(e)
                }
            }

            function rc(t, e, i, r, s) {
                var n, o, a, h;
                let l, u, c, d, {
                        x: f,
                        y: p,
                        startAngle: g,
                        pixelMargin: m,
                        innerRadius: b
                    } = e,
                    _ = Math.max(e.outerRadius + r + i - m, 0),
                    v = b > 0 ? b + r + i + m : 0,
                    y = 0,
                    x = s - g;
                if (r) {
                    let t = _ > 0 ? _ - r : 0,
                        e = ((b > 0 ? b - r : 0) + t) / 2;
                    y = (x - (0 !== e ? x * e / (e + r) : x)) / 2
                }
                let w = Math.max(.001, x * _ - i / R) / _,
                    T = (x - w) / 2,
                    M = g + T + y,
                    S = s - T - y,
                    {
                        outerStart: k,
                        outerEnd: D,
                        innerStart: O,
                        innerEnd: E
                    } = (n = e, o = v, a = _, h = S - M, l = tJ(n.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]), c = Math.min(u = (a - o) / 2, h * o / 2), {
                        outerStart: (d = t => {
                            let e = (a - Math.min(u, t)) * h / 2;
                            return tt(t, 0, Math.min(u, e))
                        })(l.outerStart),
                        outerEnd: d(l.outerEnd),
                        innerStart: tt(l.innerStart, 0, c),
                        innerEnd: tt(l.innerEnd, 0, c)
                    }),
                    P = _ - k,
                    A = _ - D,
                    C = M + k / P,
                    L = S - D / A,
                    B = v + O,
                    V = v + E,
                    I = M + O / B,
                    z = S - E / V;
                if (t.beginPath(), t.arc(f, p, _, C, L), D > 0) {
                    let e = ru(A, L, f, p);
                    t.arc(e.x, e.y, D, L, S + F)
                }
                let N = ru(V, S, f, p);
                if (t.lineTo(N.x, N.y), E > 0) {
                    let e = ru(V, z, f, p);
                    t.arc(e.x, e.y, E, S + F, z + Math.PI)
                }
                if (t.arc(f, p, v, S - E / v, M + O / v, !0), O > 0) {
                    let e = ru(B, I, f, p);
                    t.arc(e.x, e.y, O, I + Math.PI, M - F)
                }
                let j = ru(P, M, f, p);
                if (t.lineTo(j.x, j.y), k > 0) {
                    let e = ru(P, C, f, p);
                    t.arc(e.x, e.y, k, M - F, C)
                }
                t.closePath()
            }
            Object.defineProperties(ra, {
                defaults: {
                    enumerable: !0,
                    value: tF
                },
                instances: {
                    enumerable: !0,
                    value: rn
                },
                overrides: {
                    enumerable: !0,
                    value: tL
                },
                registry: {
                    enumerable: !0,
                    value: iZ
                },
                version: {
                    enumerable: !0,
                    value: "3.7.0"
                },
                getChart: {
                    enumerable: !0,
                    value: ro
                },
                register: {
                    enumerable: !0,
                    value: function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        iZ.add(...e), rh()
                    }
                },
                unregister: {
                    enumerable: !0,
                    value: function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        iZ.remove(...e), rh()
                    }
                }
            });
            class rd extends ij {
                inRange(t, e, i) {
                    let {
                        angle: r,
                        distance: s
                    } = X(this.getProps(["x", "y"], i), {
                        x: t,
                        y: e
                    }), {
                        startAngle: n,
                        endAngle: o,
                        innerRadius: a,
                        outerRadius: h,
                        circumference: l
                    } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i), u = this.options.spacing / 2, c = m(l, o - n) >= L || J(r, n, o), d = te(s, a + u, h + u);
                    return c && d
                }
                getCenterPoint(t) {
                    let {
                        x: e,
                        y: i,
                        startAngle: r,
                        endAngle: s,
                        innerRadius: n,
                        outerRadius: o
                    } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), {
                        offset: a,
                        spacing: h
                    } = this.options, l = (r + s) / 2, u = (n + o + h + a) / 2;
                    return {
                        x: e + Math.cos(l) * u,
                        y: i + Math.sin(l) * u
                    }
                }
                tooltipPosition(t) {
                    return this.getCenterPoint(t)
                }
                draw(t) {
                    let {
                        options: e,
                        circumference: i
                    } = this, r = (e.offset || 0) / 2, s = (e.spacing || 0) / 2;
                    if (this.pixelMargin = .33 * ("inner" === e.borderAlign), this.fullCircles = i > L ? Math.floor(i / L) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                    t.save();
                    let n = 0;
                    if (r) {
                        n = r / 2;
                        let e = (this.startAngle + this.endAngle) / 2;
                        t.translate(Math.cos(e) * n, Math.sin(e) * n), this.circumference >= R && (n = r)
                    }
                    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                    let o = function(t, e, i, r) {
                        let {
                            fullCircles: s,
                            startAngle: n,
                            circumference: o
                        } = e, a = e.endAngle;
                        if (s) {
                            rc(t, e, i, r, n + L);
                            for (let e = 0; e < s; ++e) t.fill();
                            isNaN(o) || (a = n + o % L, o % L == 0 && (a += L))
                        }
                        return rc(t, e, i, r, a), t.fill(), a
                    }(t, this, n, s);
                    ! function(t, e, i, r, s) {
                        let {
                            options: n
                        } = e, {
                            borderWidth: o,
                            borderJoinStyle: a
                        } = n, h = "inner" === n.borderAlign;
                        o && (h ? (t.lineWidth = 2 * o, t.lineJoin = a || "round") : (t.lineWidth = o, t.lineJoin = a || "bevel"), e.fullCircles && function(t, e, i) {
                            let r, {
                                    x: s,
                                    y: n,
                                    startAngle: o,
                                    pixelMargin: a,
                                    fullCircles: h
                                } = e,
                                l = Math.max(e.outerRadius - a, 0),
                                u = e.innerRadius + a;
                            for (i && rl(t, e, o + L), t.beginPath(), t.arc(s, n, u, o + L, o, !0), r = 0; r < h; ++r) t.stroke();
                            for (t.beginPath(), t.arc(s, n, l, o, o + L), r = 0; r < h; ++r) t.stroke()
                        }(t, e, h), h && rl(t, e, s), rc(t, e, i, r, s), t.stroke())
                    }(t, this, n, s, o), t.restore()
                }
                constructor(t) {
                    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
                }
            }

            function rf(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                t.lineCap = m(i.borderCapStyle, e.borderCapStyle), t.setLineDash(m(i.borderDash, e.borderDash)), t.lineDashOffset = m(i.borderDashOffset, e.borderDashOffset), t.lineJoin = m(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = m(i.borderWidth, e.borderWidth), t.strokeStyle = m(i.borderColor, e.borderColor)
            }

            function rp(t, e, i) {
                t.lineTo(i.x, i.y)
            }

            function rg(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = t.length,
                    {
                        start: s = 0,
                        end: n = r - 1
                    } = i,
                    {
                        start: o,
                        end: a
                    } = e,
                    h = Math.max(s, o),
                    l = Math.min(n, a);
                return {
                    count: r,
                    start: h,
                    loop: e.loop,
                    ilen: l < h && !(s < o && n < o || s > a && n > a) ? r + l - h : l - h
                }
            }

            function rm(t, e, i, r) {
                let s, n, o, {
                        points: a,
                        options: h
                    } = e,
                    {
                        count: l,
                        start: u,
                        loop: c,
                        ilen: d
                    } = rg(a, i, r),
                    f = h.stepped ? t$ : h.tension || "monotone" === h.cubicInterpolationMode ? tY : rp,
                    {
                        move: p = !0,
                        reverse: g
                    } = r || {};
                for (s = 0; s <= d; ++s)(n = a[(u + (g ? d - s : s)) % l]).skip || (p ? (t.moveTo(n.x, n.y), p = !1) : f(t, o, n, g, h.stepped), o = n);
                return c && f(t, o, n = a[(u + (g ? d : 0)) % l], g, h.stepped), !!c
            }

            function rb(t, e, i, r) {
                let s, n, o, a, h, l, u = e.points,
                    {
                        count: c,
                        start: d,
                        ilen: f
                    } = rg(u, i, r),
                    {
                        move: p = !0,
                        reverse: g
                    } = r || {},
                    m = 0,
                    b = 0,
                    _ = t => (d + (g ? f - t : t)) % c,
                    v = () => {
                        a !== h && (t.lineTo(m, h), t.lineTo(m, a), t.lineTo(m, l))
                    };
                for (p && (n = u[_(0)], t.moveTo(n.x, n.y)), s = 0; s <= f; ++s) {
                    if ((n = u[_(s)]).skip) continue;
                    let e = n.x,
                        i = n.y,
                        r = 0 | e;
                    r === o ? (i < a ? a = i : i > h && (h = i), m = (b * m + e) / ++b) : (v(), t.lineTo(e, i), o = r, b = 0, a = h = i), l = i
                }
                v()
            }

            function r_(t) {
                let e = t.options,
                    i = e.borderDash && e.borderDash.length;
                return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? rm : rb
            }
            rd.id = "arc", rd.defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0
            }, rd.defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            let rv = "function" == typeof Path2D;
            class ry extends ij {
                updateControlPoints(t, e) {
                    let i = this.options;
                    if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                        let r = i.spanGaps ? this._loop : this._fullLoop;
                        ! function(t, e, i, r, s) {
                            let n, o, a, h;
                            if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) ! function(t) {
                                let e, i, r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                                    n = eg(s),
                                    o = t.length,
                                    a = Array(o).fill(0),
                                    h = Array(o),
                                    l = ep(t, 0);
                                for (e = 0; e < o; ++e)
                                    if (i = r, r = l, l = ep(t, e + 1), r) {
                                        if (l) {
                                            let t = l[s] - r[s];
                                            a[e] = 0 !== t ? (l[n] - r[n]) / t : 0
                                        }
                                        h[e] = i ? l ? H(a[e - 1]) !== H(a[e]) ? 0 : (a[e - 1] + a[e]) / 2 : a[e - 1] : a[e]
                                    }!
                                function(t, e, i) {
                                    let r, s, n, o, a, h = t.length,
                                        l = ep(t, 0);
                                    for (let u = 0; u < h - 1; ++u)
                                        if (a = l, l = ep(t, u + 1), a && l) {
                                            if (q(e[u], 0, ef)) {
                                                i[u] = i[u + 1] = 0;
                                                continue
                                            }(o = Math.pow(r = i[u] / e[u], 2) + Math.pow(s = i[u + 1] / e[u], 2)) <= 9 || (n = 3 / Math.sqrt(o), i[u] = r * n * e[u], i[u + 1] = s * n * e[u])
                                        }
                                }(t, a, h),
                                function(t, e) {
                                    let i, r, s, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x",
                                        o = eg(n),
                                        a = t.length,
                                        h = ep(t, 0);
                                    for (let l = 0; l < a; ++l) {
                                        if (r = s, s = h, h = ep(t, l + 1), !s) continue;
                                        let a = s[n],
                                            u = s[o];
                                        r && (i = (a - r[n]) / 3, s[`cp1${n}`] = a - i, s[`cp1${o}`] = u - i * e[l]), h && (i = (h[n] - a) / 3, s[`cp2${n}`] = a + i, s[`cp2${o}`] = u + i * e[l])
                                    }
                                }(t, h, s)
                            }(t, s);
                            else {
                                let i = r ? t[t.length - 1] : t[0];
                                for (n = 0, o = t.length; n < o; ++n) h = function(t, e, i, r) {
                                    let s = t.skip ? e : t,
                                        n = i.skip ? e : i,
                                        o = Z(e, s),
                                        a = Z(n, e),
                                        h = o / (o + a),
                                        l = a / (o + a);
                                    h = isNaN(h) ? 0 : h, l = isNaN(l) ? 0 : l;
                                    let u = r * h,
                                        c = r * l;
                                    return {
                                        previous: {
                                            x: e.x - u * (n.x - s.x),
                                            y: e.y - u * (n.y - s.y)
                                        },
                                        next: {
                                            x: e.x + c * (n.x - s.x),
                                            y: e.y + c * (n.y - s.y)
                                        }
                                    }
                                }(i, a = t[n], t[Math.min(n + 1, o - !r) % o], e.tension), a.cp1x = h.previous.x, a.cp1y = h.previous.y, a.cp2x = h.next.x, a.cp2y = h.next.y, i = a
                            }
                            e.capBezierPoints && function(t, e) {
                                let i, r, s, n, o, a = tW(t[0], e);
                                for (i = 0, r = t.length; i < r; ++i) o = n, n = a, a = i < r - 1 && tW(t[i + 1], e), n && (s = t[i], o && (s.cp1x = em(s.cp1x, e.left, e.right), s.cp1y = em(s.cp1y, e.top, e.bottom)), a && (s.cp2x = em(s.cp2x, e.left, e.right), s.cp2y = em(s.cp2y, e.top, e.bottom)))
                            }(t, i)
                        }(this._points, i, t, r, e), this._pointsUpdated = !0
                    }
                }
                set points(t) {
                    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
                }
                get points() {
                    return this._points
                }
                get segments() {
                    return this._segments || (this._segments = function(t, e) {
                        let i = t.points,
                            r = t.options.spanGaps,
                            s = i.length;
                        if (!s) return [];
                        let n = !!t._loop,
                            {
                                start: o,
                                end: a
                            } = function(t, e, i, r) {
                                let s = 0,
                                    n = e - 1;
                                if (i && !r)
                                    for (; s < e && !t[s].skip;) s++;
                                for (; s < e && t[s].skip;) s++;
                                for (s %= e, i && (n += s); n > s && t[n % e].skip;) n--;
                                return {
                                    start: s,
                                    end: n %= e
                                }
                            }(i, s, n, r);
                        if (!0 === r) return eI(t, [{
                            start: o,
                            end: a,
                            loop: n
                        }], i, e);
                        let h = a < o ? a + s : a,
                            l = !!t._fullLoop && 0 === o && a === s - 1;
                        return eI(t, function(t, e, i, r) {
                            let s, n = t.length,
                                o = [],
                                a = e,
                                h = t[e];
                            for (s = e + 1; s <= i; ++s) {
                                let i = t[s % n];
                                i.skip || i.stop ? h.skip || (r = !1, o.push({
                                    start: e % n,
                                    end: (s - 1) % n,
                                    loop: r
                                }), e = a = i.stop ? s : null) : (a = s, h.skip && (e = s)), h = i
                            }
                            return null !== a && o.push({
                                start: e % n,
                                end: a % n,
                                loop: r
                            }), o
                        }(i, o, h, l), i, e)
                    }(this, this.options.segment))
                }
                first() {
                    let t = this.segments,
                        e = this.points;
                    return t.length && e[t[0].start]
                }
                last() {
                    let t = this.segments,
                        e = this.points,
                        i = t.length;
                    return i && e[t[i - 1].end]
                }
                interpolate(t, e) {
                    let i, r, s = this.options,
                        n = t[e],
                        o = this.points,
                        a = function(t, e) {
                            let i = [],
                                r = t.segments;
                            for (let s = 0; s < r.length; s++) {
                                let n = function(t, e, i) {
                                    let r, s, n;
                                    if (!i) return [t];
                                    let {
                                        property: o,
                                        start: a,
                                        end: h
                                    } = i, l = e.length, {
                                        compare: u,
                                        between: c,
                                        normalize: d
                                    } = eB(o), {
                                        start: f,
                                        end: p,
                                        loop: g,
                                        style: m
                                    } = function(t, e, i) {
                                        let r, {
                                                property: s,
                                                start: n,
                                                end: o
                                            } = i,
                                            {
                                                between: a,
                                                normalize: h
                                            } = eB(s),
                                            l = e.length,
                                            {
                                                start: u,
                                                end: c,
                                                loop: d
                                            } = t;
                                        if (d) {
                                            for (u += l, c += l, r = 0; r < l && a(h(e[u % l][s]), n, o); ++r) u--, c--;
                                            u %= l, c %= l
                                        }
                                        return c < u && (c += l), {
                                            start: u,
                                            end: c,
                                            loop: d,
                                            style: t.style
                                        }
                                    }(t, e, i), b = [], _ = !1, v = null, y = () => _ || c(a, n, r) && 0 !== u(a, n), x = () => !_ || 0 === u(h, r) || c(h, n, r);
                                    for (let t = f, i = f; t <= p; ++t)(s = e[t % l]).skip || (r = d(s[o])) !== n && (_ = c(r, a, h), null === v && y() && (v = 0 === u(r, a) ? t : i), null !== v && x() && (b.push(eV({
                                        start: v,
                                        end: t,
                                        loop: g,
                                        count: l,
                                        style: m
                                    })), v = null), i = t, n = r);
                                    return null !== v && b.push(eV({
                                        start: v,
                                        end: p,
                                        loop: g,
                                        count: l,
                                        style: m
                                    })), b
                                }(r[s], t.points, e);
                                n.length && i.push(...n)
                            }
                            return i
                        }(this, {
                            property: e,
                            start: n,
                            end: n
                        });
                    if (!a.length) return;
                    let h = [],
                        l = s.stepped ? eO : s.tension || "monotone" === s.cubicInterpolationMode ? eE : eD;
                    for (i = 0, r = a.length; i < r; ++i) {
                        let {
                            start: r,
                            end: u
                        } = a[i], c = o[r], d = o[u];
                        if (c === d) {
                            h.push(c);
                            continue
                        }
                        let f = Math.abs((n - c[e]) / (d[e] - c[e])),
                            p = l(c, d, f, s.stepped);
                        p[e] = t[e], h.push(p)
                    }
                    return 1 === h.length ? h[0] : h
                }
                pathSegment(t, e, i) {
                    return r_(this)(t, this, e, i)
                }
                path(t, e, i) {
                    let r = this.segments,
                        s = r_(this),
                        n = this._loop;
                    for (let o of (e = e || 0, i = i || this.points.length - e, r)) n &= s(t, this, o, {
                        start: e,
                        end: e + i - 1
                    });
                    return !!n
                }
                draw(t, e, i, r) {
                    let s = this.options || {};
                    (this.points || []).length && s.borderWidth && (t.save(), function(t, e, i, r) {
                        if (rv && !e.options.segment) {
                            let s;
                            (s = e._path) || (s = e._path = new Path2D, e.path(s, i, r) && s.closePath()), rf(t, e.options), t.stroke(s)
                        } else ! function(t, e, i, r) {
                            let {
                                segments: s,
                                options: n
                            } = e, o = r_(e);
                            for (let a of s) rf(t, n, a.style), t.beginPath(), o(t, e, a, {
                                start: i,
                                end: i + r - 1
                            }) && t.closePath(), t.stroke()
                        }(t, e, i, r)
                    }(t, this, i, r), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
                }
                constructor(t) {
                    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
                }
            }

            function rx(t, e, i, r) {
                let s = t.options,
                    {
                        [i]: n
                    } = t.getProps([i], r);
                return Math.abs(e - n) < s.radius + s.hitRadius
            }
            ry.id = "line", ry.defaults = {
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: "default",
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
            }, ry.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            }, ry.descriptors = {
                _scriptable: !0,
                _indexable: t => "borderDash" !== t && "fill" !== t
            };
            class rw extends ij {
                inRange(t, e, i) {
                    let r = this.options,
                        {
                            x: s,
                            y: n
                        } = this.getProps(["x", "y"], i);
                    return Math.pow(t - s, 2) + Math.pow(e - n, 2) < Math.pow(r.hitRadius + r.radius, 2)
                }
                inXRange(t, e) {
                    return rx(this, t, "x", e)
                }
                inYRange(t, e) {
                    return rx(this, t, "y", e)
                }
                getCenterPoint(t) {
                    let {
                        x: e,
                        y: i
                    } = this.getProps(["x", "y"], t);
                    return {
                        x: e,
                        y: i
                    }
                }
                size(t) {
                    let e = (t = t || this.options || {}).radius || 0,
                        i = (e = Math.max(e, e && t.hoverRadius || 0)) && t.borderWidth || 0;
                    return (e + i) * 2
                }
                draw(t, e) {
                    let i = this.options;
                    !this.skip && !(i.radius < .1) && tW(this, e, this.size(i) / 2) && (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, tH(t, i, this.x, this.y))
                }
                getRange() {
                    let t = this.options || {};
                    return t.radius + t.hitRadius
                }
                constructor(t) {
                    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
                }
            }

            function rT(t, e) {
                let i, r, s, n, o, {
                    x: a,
                    y: h,
                    base: l,
                    width: u,
                    height: c
                } = t.getProps(["x", "y", "base", "width", "height"], e);
                return t.horizontal ? (o = c / 2, i = Math.min(a, l), r = Math.max(a, l), s = h - o, n = h + o) : (i = a - (o = u / 2), r = a + o, s = Math.min(h, l), n = Math.max(h, l)), {
                    left: i,
                    top: s,
                    right: r,
                    bottom: n
                }
            }

            function rM(t, e, i, r) {
                return t ? 0 : tt(e, i, r)
            }

            function rS(t, e, i, r) {
                let s = null === e,
                    n = null === i,
                    o = t && !(s && n) && rT(t, r);
                return o && (s || te(e, o.left, o.right)) && (n || te(i, o.top, o.bottom))
            }

            function rk(t, e) {
                t.rect(e.x, e.y, e.w, e.h)
            }

            function rD(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = t.x !== i.x ? -e : 0,
                    s = t.y !== i.y ? -e : 0,
                    n = (t.x + t.w !== i.x + i.w ? e : 0) - r,
                    o = (t.y + t.h !== i.y + i.h ? e : 0) - s;
                return {
                    x: t.x + r,
                    y: t.y + s,
                    w: t.w + n,
                    h: t.h + o,
                    radius: t.radius
                }
            }
            rw.id = "point", rw.defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            }, rw.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            class rO extends ij {
                draw(t) {
                    var e, i, r;
                    let s, n, o, a, h, l, u, c, {
                            inflateAmount: d,
                            options: {
                                borderColor: p,
                                backgroundColor: g
                            }
                        } = this,
                        {
                            inner: m,
                            outer: b
                        } = (n = (s = rT(this)).right - s.left, o = s.bottom - s.top, e = n / 2, i = o / 2, a = this.options.borderWidth, h = this.borderSkipped, l = t0(a), u = {
                            t: rM(h.top, l.top, 0, i),
                            r: rM(h.right, l.right, 0, e),
                            b: rM(h.bottom, l.bottom, 0, i),
                            l: rM(h.left, l.left, 0, e)
                        }, c = function(t, e, i) {
                            let {
                                enableBorderRadius: r
                            } = t.getProps(["enableBorderRadius"]), s = t.options.borderRadius, n = t1(s), o = Math.min(e, i), a = t.borderSkipped, h = r || f(s);
                            return {
                                topLeft: rM(!h || a.top || a.left, n.topLeft, 0, o),
                                topRight: rM(!h || a.top || a.right, n.topRight, 0, o),
                                bottomLeft: rM(!h || a.bottom || a.left, n.bottomLeft, 0, o),
                                bottomRight: rM(!h || a.bottom || a.right, n.bottomRight, 0, o)
                            }
                        }(this, n / 2, o / 2), {
                            outer: {
                                x: s.left,
                                y: s.top,
                                w: n,
                                h: o,
                                radius: c
                            },
                            inner: {
                                x: s.left + u.l,
                                y: s.top + u.t,
                                w: n - u.l - u.r,
                                h: o - u.t - u.b,
                                radius: {
                                    topLeft: Math.max(0, c.topLeft - Math.max(u.t, u.l)),
                                    topRight: Math.max(0, c.topRight - Math.max(u.t, u.r)),
                                    bottomLeft: Math.max(0, c.bottomLeft - Math.max(u.b, u.l)),
                                    bottomRight: Math.max(0, c.bottomRight - Math.max(u.b, u.r))
                                }
                            }
                        }),
                        _ = (r = b.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? tX : rk;
                    t.save(), (b.w !== m.w || b.h !== m.h) && (t.beginPath(), _(t, rD(b, d, m)), t.clip(), _(t, rD(m, -d, b)), t.fillStyle = p, t.fill("evenodd")), t.beginPath(), _(t, rD(m, d)), t.fillStyle = g, t.fill(), t.restore()
                }
                inRange(t, e, i) {
                    return rS(this, t, e, i)
                }
                inXRange(t, e) {
                    return rS(this, t, null, e)
                }
                inYRange(t, e) {
                    return rS(this, null, t, e)
                }
                getCenterPoint(t) {
                    let {
                        x: e,
                        y: i,
                        base: r,
                        horizontal: s
                    } = this.getProps(["x", "y", "base", "horizontal"], t);
                    return {
                        x: s ? (e + r) / 2 : e,
                        y: s ? i : (i + r) / 2
                    }
                }
                getRange(t) {
                    return "x" === t ? this.width / 2 : this.height / 2
                }
                constructor(t) {
                    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
                }
            }
            rO.id = "bar", rO.defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            }, rO.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            let rE = (t, e) => {
                let {
                    boxHeight: i = e,
                    boxWidth: r = e
                } = t;
                return t.usePointStyle && (i = Math.min(i, e), r = Math.min(r, e)), {
                    boxWidth: r,
                    boxHeight: i,
                    itemHeight: Math.max(e, i)
                }
            };
            class rP extends ij {
                update(t, e, i) {
                    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit()
                }
                setDimensions() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
                }
                buildLabels() {
                    let t = this.options.labels || {},
                        e = _(t.generateLabels, [this.chart], this) || [];
                    t.filter && (e = e.filter(e => t.filter(e, this.chart.data))), t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e
                }
                fit() {
                    let t, e, {
                        options: i,
                        ctx: r
                    } = this;
                    if (!i.display) {
                        this.width = this.height = 0;
                        return
                    }
                    let s = i.labels,
                        n = t5(s.font),
                        o = n.size,
                        a = this._computeTitleHeight(),
                        {
                            boxWidth: h,
                            itemHeight: l
                        } = rE(s, o);
                    r.font = n.string, this.isHorizontal() ? (t = this.maxWidth, e = this._fitRows(a, o, h, l) + 10) : (e = this.maxHeight, t = this._fitCols(a, o, h, l) + 10), this.width = Math.min(t, i.maxWidth || this.maxWidth), this.height = Math.min(e, i.maxHeight || this.maxHeight)
                }
                _fitRows(t, e, i, r) {
                    let {
                        ctx: s,
                        maxWidth: n,
                        options: {
                            labels: {
                                padding: o
                            }
                        }
                    } = this, a = this.legendHitBoxes = [], h = this.lineWidths = [0], l = r + o, u = t;
                    s.textAlign = "left", s.textBaseline = "middle";
                    let c = -1,
                        d = -l;
                    return this.legendItems.forEach((t, f) => {
                        let p = i + e / 2 + s.measureText(t.text).width;
                        (0 === f || h[h.length - 1] + p + 2 * o > n) && (u += l, h[h.length - (f > 0 ? 0 : 1)] = 0, d += l, c++), a[f] = {
                            left: 0,
                            top: d,
                            row: c,
                            width: p,
                            height: r
                        }, h[h.length - 1] += p + o
                    }), u
                }
                _fitCols(t, e, i, r) {
                    let {
                        ctx: s,
                        maxHeight: n,
                        options: {
                            labels: {
                                padding: o
                            }
                        }
                    } = this, a = this.legendHitBoxes = [], h = this.columnSizes = [], l = n - t, u = o, c = 0, d = 0, f = 0, p = 0;
                    return this.legendItems.forEach((t, n) => {
                        let g = i + e / 2 + s.measureText(t.text).width;
                        n > 0 && d + r + 2 * o > l && (u += c + o, h.push({
                            width: c,
                            height: d
                        }), f += c + o, p++, c = d = 0), a[n] = {
                            left: f,
                            top: d,
                            col: p,
                            width: g,
                            height: r
                        }, c = Math.max(c, g), d += r + o
                    }), u += c, h.push({
                        width: c,
                        height: d
                    }), u
                }
                adjustHitBoxes() {
                    if (!this.options.display) return;
                    let t = this._computeTitleHeight(),
                        {
                            legendHitBoxes: e,
                            options: {
                                align: i,
                                labels: {
                                    padding: r
                                },
                                rtl: s
                            }
                        } = this,
                        n = eC(s, this.left, this.width);
                    if (this.isHorizontal()) {
                        let s = 0,
                            o = h(i, this.left + r, this.right - this.lineWidths[s]);
                        for (let a of e) s !== a.row && (s = a.row, o = h(i, this.left + r, this.right - this.lineWidths[s])), a.top += this.top + t + r, a.left = n.leftForLtr(n.x(o), a.width), o += a.width + r
                    } else {
                        let s = 0,
                            o = h(i, this.top + t + r, this.bottom - this.columnSizes[s].height);
                        for (let a of e) a.col !== s && (s = a.col, o = h(i, this.top + t + r, this.bottom - this.columnSizes[s].height)), a.top = o, a.left += this.left + r, a.left = n.leftForLtr(n.x(a.left), a.width), o += a.height + r
                    }
                }
                isHorizontal() {
                    return "top" === this.options.position || "bottom" === this.options.position
                }
                draw() {
                    if (this.options.display) {
                        let t = this.ctx;
                        tU(t, this), this._draw(), tq(t)
                    }
                }
                _draw() {
                    let t, {
                            options: e,
                            columnSizes: i,
                            lineWidths: r,
                            ctx: s
                        } = this,
                        {
                            align: n,
                            labels: o
                        } = e,
                        a = tF.color,
                        l = eC(e.rtl, this.left, this.width),
                        u = t5(o.font),
                        {
                            color: c,
                            padding: d
                        } = o,
                        f = u.size,
                        p = f / 2;
                    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = u.string;
                    let {
                        boxWidth: g,
                        boxHeight: b,
                        itemHeight: _
                    } = rE(o, f), v = function(t, e, i) {
                        if (isNaN(g) || g <= 0 || isNaN(b) || b < 0) return;
                        s.save();
                        let r = m(i.lineWidth, 1);
                        if (s.fillStyle = m(i.fillStyle, a), s.lineCap = m(i.lineCap, "butt"), s.lineDashOffset = m(i.lineDashOffset, 0), s.lineJoin = m(i.lineJoin, "miter"), s.lineWidth = r, s.strokeStyle = m(i.strokeStyle, a), s.setLineDash(m(i.lineDash, [])), o.usePointStyle) tH(s, {
                            radius: g * Math.SQRT2 / 2,
                            pointStyle: i.pointStyle,
                            rotation: i.rotation,
                            borderWidth: r
                        }, l.xPlus(t, g / 2), e + p);
                        else {
                            let n = e + Math.max((f - b) / 2, 0),
                                o = l.leftForLtr(t, g),
                                a = t1(i.borderRadius);
                            s.beginPath(), Object.values(a).some(t => 0 !== t) ? tX(s, {
                                x: o,
                                y: n,
                                w: g,
                                h: b,
                                radius: a
                            }) : s.rect(o, n, g, b), s.fill(), 0 !== r && s.stroke()
                        }
                        s.restore()
                    }, y = function(t, e, i) {
                        tK(s, i.text, t, e + _ / 2, u, {
                            strikethrough: i.hidden,
                            textAlign: l.textAlign(i.textAlign)
                        })
                    }, x = this.isHorizontal(), w = this._computeTitleHeight();
                    t = x ? {
                        x: h(n, this.left + d, this.right - r[0]),
                        y: this.top + d + w,
                        line: 0
                    } : {
                        x: this.left + d,
                        y: h(n, this.top + w + d, this.bottom - i[0].height),
                        line: 0
                    }, eR(this.ctx, e.textDirection);
                    let T = _ + d;
                    this.legendItems.forEach((a, u) => {
                        var f, m;
                        s.strokeStyle = a.fontColor || c, s.fillStyle = a.fontColor || c;
                        let b = s.measureText(a.text).width,
                            _ = l.textAlign(a.textAlign || (a.textAlign = o.textAlign)),
                            M = g + p + b,
                            S = t.x,
                            k = t.y;
                        l.setWidth(this.width), x ? u > 0 && S + M + d > this.right && (k = t.y += T, t.line++, S = t.x = h(n, this.left + d, this.right - r[t.line])) : u > 0 && k + T > this.bottom && (S = t.x = S + i[t.line].width + d, t.line++, k = t.y = h(n, this.top + w + d, this.bottom - i[t.line].height)), v(l.x(S), k, a), f = S + g + p, m = x ? S + M : this.right, S = _ === (e.rtl ? "left" : "right") ? m : "center" === _ ? (f + m) / 2 : f, y(l.x(S), k, a), x ? t.x += M + d : t.y += T
                    }), eL(this.ctx, e.textDirection)
                }
                drawTitle() {
                    let t, e = this.options,
                        i = e.title,
                        r = t5(i.font),
                        s = t2(i.padding);
                    if (!i.display) return;
                    let n = eC(e.rtl, this.left, this.width),
                        o = this.ctx,
                        l = i.position,
                        u = r.size / 2,
                        c = s.top + u,
                        d = this.left,
                        f = this.width;
                    if (this.isHorizontal()) f = Math.max(...this.lineWidths), t = this.top + c, d = h(e.align, d, this.right - f);
                    else {
                        let i = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
                        t = c + h(e.align, this.top, this.bottom - i - e.labels.padding - this._computeTitleHeight())
                    }
                    let p = h(l, d, d + f);
                    o.textAlign = n.textAlign(a(l)), o.textBaseline = "middle", o.strokeStyle = i.color, o.fillStyle = i.color, o.font = r.string, tK(o, i.text, p, t, r)
                }
                _computeTitleHeight() {
                    let t = this.options.title,
                        e = t5(t.font),
                        i = t2(t.padding);
                    return t.display ? e.lineHeight + i.height : 0
                }
                _getLegendItemAt(t, e) {
                    let i, r, s;
                    if (te(t, this.left, this.right) && te(e, this.top, this.bottom)) {
                        for (i = 0, s = this.legendHitBoxes; i < s.length; ++i)
                            if (te(t, (r = s[i]).left, r.left + r.width) && te(e, r.top, r.top + r.height)) return this.legendItems[i]
                    }
                    return null
                }
                handleEvent(t) {
                    var e, i;
                    let r = this.options;
                    if (e = t.type, i = r, ("mousemove" !== e || !i.onHover && !i.onLeave) && (!i.onClick || "click" !== e && "mouseup" !== e)) return;
                    let s = this._getLegendItemAt(t.x, t.y);
                    if ("mousemove" === t.type) {
                        let e = this._hoveredItem,
                            i = null !== e && null !== s && e.datasetIndex === s.datasetIndex && e.index === s.index;
                        e && !i && _(r.onLeave, [t, e, this], this), this._hoveredItem = s, s && !i && _(r.onHover, [t, s, this], this)
                    } else s && _(r.onClick, [t, s, this], this)
                }
                constructor(t) {
                    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
                }
            }
            var rA = {
                id: "legend",
                _element: rP,
                start(t, e, i) {
                    let r = t.legend = new rP({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    });
                    iM.configure(t, r, i), iM.addBox(t, r)
                },
                stop(t) {
                    iM.removeBox(t, t.legend), delete t.legend
                },
                beforeUpdate(t, e, i) {
                    let r = t.legend;
                    iM.configure(t, r, i), r.options = i
                },
                afterUpdate(t) {
                    let e = t.legend;
                    e.buildLabels(), e.adjustHitBoxes()
                },
                afterEvent(t, e) {
                    e.replay || t.legend.handleEvent(e.event)
                },
                defaults: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullSize: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick(t, e, i) {
                        let r = e.datasetIndex,
                            s = i.chart;
                        s.isDatasetVisible(r) ? (s.hide(r), e.hidden = !0) : (s.show(r), e.hidden = !1)
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        color: t => t.chart.options.color,
                        boxWidth: 40,
                        padding: 10,
                        generateLabels(t) {
                            let e = t.data.datasets,
                                {
                                    labels: {
                                        usePointStyle: i,
                                        pointStyle: r,
                                        textAlign: s,
                                        color: n
                                    }
                                } = t.legend.options;
                            return t._getSortedDatasetMetas().map(t => {
                                let o = t.controller.getStyle(i ? 0 : void 0),
                                    a = t2(o.borderWidth);
                                return {
                                    text: e[t.index].label,
                                    fillStyle: o.backgroundColor,
                                    fontColor: n,
                                    hidden: !t.visible,
                                    lineCap: o.borderCapStyle,
                                    lineDash: o.borderDash,
                                    lineDashOffset: o.borderDashOffset,
                                    lineJoin: o.borderJoinStyle,
                                    lineWidth: (a.width + a.height) / 4,
                                    strokeStyle: o.borderColor,
                                    pointStyle: r || o.pointStyle,
                                    rotation: o.rotation,
                                    textAlign: s || o.textAlign,
                                    borderRadius: 0,
                                    datasetIndex: t.index
                                }
                            }, this)
                        }
                    },
                    title: {
                        color: t => t.chart.options.color,
                        display: !1,
                        position: "center",
                        text: ""
                    }
                },
                descriptors: {
                    _scriptable: t => !t.startsWith("on"),
                    labels: {
                        _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
                    }
                }
            };
            class rC extends ij {
                update(t, e) {
                    let i = this.options;
                    if (this.left = 0, this.top = 0, !i.display) {
                        this.width = this.height = this.right = this.bottom = 0;
                        return
                    }
                    this.width = this.right = t, this.height = this.bottom = e;
                    let r = d(i.text) ? i.text.length : 1;
                    this._padding = t2(i.padding);
                    let s = r * t5(i.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? this.height = s : this.width = s
                }
                isHorizontal() {
                    let t = this.options.position;
                    return "top" === t || "bottom" === t
                }
                _drawArgs(t) {
                    let e, i, r, {
                            top: s,
                            left: n,
                            bottom: o,
                            right: a,
                            options: l
                        } = this,
                        u = l.align,
                        c = 0;
                    return this.isHorizontal() ? (i = h(u, n, a), r = s + t, e = a - n) : ("left" === l.position ? (i = n + t, r = h(u, o, s), c = -.5 * R) : (i = a - t, r = h(u, s, o), c = .5 * R), e = o - s), {
                        titleX: i,
                        titleY: r,
                        maxWidth: e,
                        rotation: c
                    }
                }
                draw() {
                    let t = this.ctx,
                        e = this.options;
                    if (!e.display) return;
                    let i = t5(e.font),
                        r = i.lineHeight / 2 + this._padding.top,
                        {
                            titleX: s,
                            titleY: n,
                            maxWidth: o,
                            rotation: h
                        } = this._drawArgs(r);
                    tK(t, e.text, 0, 0, i, {
                        color: e.color,
                        maxWidth: o,
                        rotation: h,
                        textAlign: a(e.align),
                        textBaseline: "middle",
                        translation: [s, n]
                    })
                }
                constructor(t) {
                    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
                }
            }
            var rR = {
                id: "title",
                _element: rC,
                start(t, e, i) {
                    let r;
                    r = new rC({
                        ctx: t.ctx,
                        options: i,
                        chart: t
                    }), iM.configure(t, r, i), iM.addBox(t, r), t.titleBlock = r
                },
                stop(t) {
                    let e = t.titleBlock;
                    iM.removeBox(t, e), delete t.titleBlock
                },
                beforeUpdate(t, e, i) {
                    let r = t.titleBlock;
                    iM.configure(t, r, i), r.options = i
                },
                defaults: {
                    align: "center",
                    display: !1,
                    font: {
                        weight: "bold"
                    },
                    fullSize: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                },
                defaultRoutes: {
                    color: "color"
                },
                descriptors: {
                    _scriptable: !0,
                    _indexable: !1
                }
            };
            new WeakMap;
            let rL = {
                average(t) {
                    let e, i;
                    if (!t.length) return !1;
                    let r = 0,
                        s = 0,
                        n = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        let i = t[e].element;
                        if (i && i.hasValue()) {
                            let t = i.tooltipPosition();
                            r += t.x, s += t.y, ++n
                        }
                    }
                    return {
                        x: r / n,
                        y: s / n
                    }
                },
                nearest(t, e) {
                    let i, r, s;
                    if (!t.length) return !1;
                    let n = e.x,
                        o = e.y,
                        a = 1 / 0;
                    for (i = 0, r = t.length; i < r; ++i) {
                        let r = t[i].element;
                        if (r && r.hasValue()) {
                            let t = Z(e, r.getCenterPoint());
                            t < a && (a = t, s = r)
                        }
                    }
                    if (s) {
                        let t = s.tooltipPosition();
                        n = t.x, o = t.y
                    }
                    return {
                        x: n,
                        y: o
                    }
                }
            };

            function rB(t, e) {
                return e && (d(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function rV(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }

            function rI(t, e) {
                let i = t.chart.ctx,
                    {
                        body: r,
                        footer: s,
                        title: n
                    } = t,
                    {
                        boxWidth: o,
                        boxHeight: a
                    } = e,
                    h = t5(e.bodyFont),
                    l = t5(e.titleFont),
                    u = t5(e.footerFont),
                    c = n.length,
                    d = s.length,
                    f = r.length,
                    p = t2(e.padding),
                    g = p.height,
                    m = 0,
                    b = r.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
                b += t.beforeBody.length + t.afterBody.length, c && (g += c * l.lineHeight + (c - 1) * e.titleSpacing + e.titleMarginBottom), b && (g += f * (e.displayColors ? Math.max(a, h.lineHeight) : h.lineHeight) + (b - f) * h.lineHeight + (b - 1) * e.bodySpacing), d && (g += e.footerMarginTop + d * u.lineHeight + (d - 1) * e.footerSpacing);
                let _ = 0,
                    y = function(t) {
                        m = Math.max(m, i.measureText(t).width + _)
                    };
                return i.save(), i.font = l.string, v(t.title, y), i.font = h.string, v(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? o + 2 + e.boxPadding : 0, v(r, t => {
                    v(t.before, y), v(t.lines, y), v(t.after, y)
                }), _ = 0, i.font = u.string, v(t.footer, y), i.restore(), {
                    width: m += p.width,
                    height: g
                }
            }

            function rF(t, e, i) {
                let r = i.yAlign || e.yAlign || function(t, e) {
                    let {
                        y: i,
                        height: r
                    } = e;
                    return i < r / 2 ? "top" : i > t.height - r / 2 ? "bottom" : "center"
                }(t, i);
                return {
                    xAlign: i.xAlign || e.xAlign || function(t, e, i, r) {
                        let {
                            x: s,
                            width: n
                        } = i, {
                            width: o,
                            chartArea: {
                                left: a,
                                right: h
                            }
                        } = t, l = "center";
                        return "center" === r ? l = s <= (a + h) / 2 ? "left" : "right" : s <= n / 2 ? l = "left" : s >= o - n / 2 && (l = "right"),
                            function(t, e, i, r) {
                                let {
                                    x: s,
                                    width: n
                                } = r, o = i.caretSize + i.caretPadding;
                                if ("left" === t && s + n + o > e.width || "right" === t && s - n - o < 0) return !0
                            }(l, t, e, i) && (l = "center"), l
                    }(t, e, i, r),
                    yAlign: r
                }
            }

            function rz(t, e, i, r) {
                let {
                    caretSize: s,
                    caretPadding: n,
                    cornerRadius: o
                } = t, {
                    xAlign: a,
                    yAlign: h
                } = i, l = s + n, {
                    topLeft: u,
                    topRight: c,
                    bottomLeft: d,
                    bottomRight: f
                } = t1(o), p = function(t, e) {
                    let {
                        x: i,
                        width: r
                    } = t;
                    return "right" === e ? i -= r : "center" === e && (i -= r / 2), i
                }(e, a), g = function(t, e, i) {
                    let {
                        y: r,
                        height: s
                    } = t;
                    return "top" === e ? r += i : "bottom" === e ? r -= s + i : r -= s / 2, r
                }(e, h, l);
                return "center" === h ? "left" === a ? p += l : "right" === a && (p -= l) : "left" === a ? p -= Math.max(u, d) + s : "right" === a && (p += Math.max(c, f) + s), {
                    x: tt(p, 0, r.width - e.width),
                    y: tt(g, 0, r.height - e.height)
                }
            }

            function rN(t, e, i) {
                let r = t2(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - r.right : t.x + r.left
            }

            function rj(t, e) {
                let i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
            }
            class rH extends ij {
                initialize(t) {
                    this.options = t, this._cachedAnimations = void 0, this.$context = void 0
                }
                _resolveAnimations() {
                    let t = this._cachedAnimations;
                    if (t) return t;
                    let e = this.chart,
                        i = this.options.setContext(this.getContext()),
                        r = i.enabled && e.options.animation && i.animations,
                        s = new eU(this.chart, r);
                    return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s
                }
                getContext() {
                    var t;
                    return this.$context || (this.$context = (t = this.chart.getContext(), t6(t, {
                        tooltip: this,
                        tooltipItems: this._tooltipItems,
                        type: "tooltip"
                    })))
                }
                getTitle(t, e) {
                    let {
                        callbacks: i
                    } = e, r = i.beforeTitle.apply(this, [t]), s = i.title.apply(this, [t]), n = i.afterTitle.apply(this, [t]), o = [];
                    return o = rB(o, rV(r)), o = rB(o, rV(s)), o = rB(o, rV(n))
                }
                getBeforeBody(t, e) {
                    return rB([], rV(e.callbacks.beforeBody.apply(this, [t])))
                }
                getBody(t, e) {
                    let {
                        callbacks: i
                    } = e, r = [];
                    return v(t, t => {
                        let e = {
                                before: [],
                                lines: [],
                                after: []
                            },
                            s = rj(i, t);
                        rB(e.before, rV(s.beforeLabel.call(this, t))), rB(e.lines, s.label.call(this, t)), rB(e.after, rV(s.afterLabel.call(this, t))), r.push(e)
                    }), r
                }
                getAfterBody(t, e) {
                    return rB([], rV(e.callbacks.afterBody.apply(this, [t])))
                }
                getFooter(t, e) {
                    let {
                        callbacks: i
                    } = e, r = i.beforeFooter.apply(this, [t]), s = i.footer.apply(this, [t]), n = i.afterFooter.apply(this, [t]), o = [];
                    return o = rB(o, rV(r)), o = rB(o, rV(s)), o = rB(o, rV(n))
                }
                _createItems(t) {
                    let e, i, r = this._active,
                        s = this.chart.data,
                        n = [],
                        o = [],
                        a = [],
                        h = [];
                    for (e = 0, i = r.length; e < i; ++e) h.push(function(t, e) {
                        let {
                            element: i,
                            datasetIndex: r,
                            index: s
                        } = e, n = t.getDatasetMeta(r).controller, {
                            label: o,
                            value: a
                        } = n.getLabelAndValue(s);
                        return {
                            chart: t,
                            label: o,
                            parsed: n.getParsed(s),
                            raw: t.data.datasets[r].data[s],
                            formattedValue: a,
                            dataset: n.getDataset(),
                            dataIndex: s,
                            datasetIndex: r,
                            element: i
                        }
                    }(this.chart, r[e]));
                    return t.filter && (h = h.filter((e, i, r) => t.filter(e, i, r, s))), t.itemSort && (h = h.sort((e, i) => t.itemSort(e, i, s))), v(h, e => {
                        let i = rj(t.callbacks, e);
                        n.push(i.labelColor.call(this, e)), o.push(i.labelPointStyle.call(this, e)), a.push(i.labelTextColor.call(this, e))
                    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = h, h
                }
                update(t, e) {
                    let i, r = this.options.setContext(this.getContext()),
                        s = this._active,
                        n = [];
                    if (s.length) {
                        let t = rL[r.position].call(this, s, this._eventPosition);
                        n = this._createItems(r), this.title = this.getTitle(n, r), this.beforeBody = this.getBeforeBody(n, r), this.body = this.getBody(n, r), this.afterBody = this.getAfterBody(n, r), this.footer = this.getFooter(n, r);
                        let e = this._size = rI(this, r),
                            o = Object.assign({}, t, e),
                            a = rF(this.chart, r, o),
                            h = rz(r, o, a, this.chart);
                        this.xAlign = a.xAlign, this.yAlign = a.yAlign, i = {
                            opacity: 1,
                            x: h.x,
                            y: h.y,
                            width: e.width,
                            height: e.height,
                            caretX: t.x,
                            caretY: t.y
                        }
                    } else 0 !== this.opacity && (i = {
                        opacity: 0
                    });
                    this._tooltipItems = n, this.$context = void 0, i && this._resolveAnimations().update(this, i), t && r.external && r.external.call(this, {
                        chart: this.chart,
                        tooltip: this,
                        replay: e
                    })
                }
                drawCaret(t, e, i, r) {
                    let s = this.getCaretPosition(t, i, r);
                    e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3)
                }
                getCaretPosition(t, e, i) {
                    let r, s, n, o, a, h, {
                            xAlign: l,
                            yAlign: u
                        } = this,
                        {
                            caretSize: c,
                            cornerRadius: d
                        } = i,
                        {
                            topLeft: f,
                            topRight: p,
                            bottomLeft: g,
                            bottomRight: m
                        } = t1(d),
                        {
                            x: b,
                            y: _
                        } = t,
                        {
                            width: v,
                            height: y
                        } = e;
                    return "center" === u ? (a = _ + y / 2, "left" === l ? (s = (r = b) - c, o = a + c, h = a - c) : (s = (r = b + v) + c, o = a - c, h = a + c), n = r) : (s = "left" === l ? b + Math.max(f, g) + c : "right" === l ? b + v - Math.max(p, m) - c : this.caretX, "top" === u ? (a = (o = _) - c, r = s - c, n = s + c) : (a = (o = _ + y) + c, r = s + c, n = s - c), h = o), {
                        x1: r,
                        x2: s,
                        x3: n,
                        y1: o,
                        y2: a,
                        y3: h
                    }
                }
                drawTitle(t, e, i) {
                    let r, s, n, o = this.title,
                        a = o.length;
                    if (a) {
                        let h = eC(i.rtl, this.x, this.width);
                        for (n = 0, t.x = rN(this, i.titleAlign, i), e.textAlign = h.textAlign(i.titleAlign), e.textBaseline = "middle", r = t5(i.titleFont), s = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string; n < a; ++n) e.fillText(o[n], h.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s, n + 1 === a && (t.y += i.titleMarginBottom - s)
                    }
                }
                _drawColorBox(t, e, i, r, s) {
                    let n = this.labelColors[i],
                        o = this.labelPointStyles[i],
                        {
                            boxHeight: a,
                            boxWidth: h,
                            boxPadding: l
                        } = s,
                        u = t5(s.bodyFont),
                        c = rN(this, "left", s),
                        d = r.x(c),
                        f = a < u.lineHeight ? (u.lineHeight - a) / 2 : 0,
                        p = e.y + f;
                    if (s.usePointStyle) {
                        let e = {
                                radius: Math.min(h, a) / 2,
                                pointStyle: o.pointStyle,
                                rotation: o.rotation,
                                borderWidth: 1
                            },
                            i = r.leftForLtr(d, h) + h / 2,
                            l = p + a / 2;
                        t.strokeStyle = s.multiKeyBackground, t.fillStyle = s.multiKeyBackground, tH(t, e, i, l), t.strokeStyle = n.borderColor, t.fillStyle = n.backgroundColor, tH(t, e, i, l)
                    } else {
                        t.lineWidth = n.borderWidth || 1, t.strokeStyle = n.borderColor, t.setLineDash(n.borderDash || []), t.lineDashOffset = n.borderDashOffset || 0;
                        let e = r.leftForLtr(d, h - l),
                            i = r.leftForLtr(r.xPlus(d, 1), h - l - 2),
                            o = t1(n.borderRadius);
                        Object.values(o).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = s.multiKeyBackground, tX(t, {
                            x: e,
                            y: p,
                            w: h,
                            h: a,
                            radius: o
                        }), t.fill(), t.stroke(), t.fillStyle = n.backgroundColor, t.beginPath(), tX(t, {
                            x: i,
                            y: p + 1,
                            w: h - 2,
                            h: a - 2,
                            radius: o
                        }), t.fill()) : (t.fillStyle = s.multiKeyBackground, t.fillRect(e, p, h, a), t.strokeRect(e, p, h, a), t.fillStyle = n.backgroundColor, t.fillRect(i, p + 1, h - 2, a - 2))
                    }
                    t.fillStyle = this.labelTextColors[i]
                }
                drawBody(t, e, i) {
                    let r, s, n, o, a, h, {
                            body: l
                        } = this,
                        {
                            bodySpacing: u,
                            bodyAlign: c,
                            displayColors: d,
                            boxHeight: f,
                            boxWidth: p,
                            boxPadding: g
                        } = i,
                        m = t5(i.bodyFont),
                        b = m.lineHeight,
                        _ = 0,
                        y = eC(i.rtl, this.x, this.width),
                        x = function(i) {
                            e.fillText(i, y.x(t.x + _), t.y + b / 2), t.y += b + u
                        },
                        w = y.textAlign(c);
                    for (e.textAlign = c, e.textBaseline = "middle", e.font = m.string, t.x = rN(this, w, i), e.fillStyle = i.bodyColor, v(this.beforeBody, x), _ = d && "right" !== w ? "center" === c ? p / 2 + g : p + 2 + g : 0, n = 0, a = l.length; n < a; ++n) {
                        for (r = l[n], e.fillStyle = this.labelTextColors[n], v(r.before, x), s = r.lines, d && s.length && (this._drawColorBox(e, t, n, y, i), b = Math.max(m.lineHeight, f)), o = 0, h = s.length; o < h; ++o) x(s[o]), b = m.lineHeight;
                        v(r.after, x)
                    }
                    _ = 0, b = m.lineHeight, v(this.afterBody, x), t.y -= u
                }
                drawFooter(t, e, i) {
                    let r, s, n = this.footer,
                        o = n.length;
                    if (o) {
                        let a = eC(i.rtl, this.x, this.width);
                        for (t.x = rN(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", r = t5(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, s = 0; s < o; ++s) e.fillText(n[s], a.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing
                    }
                }
                drawBackground(t, e, i, r) {
                    let {
                        xAlign: s,
                        yAlign: n
                    } = this, {
                        x: o,
                        y: a
                    } = t, {
                        width: h,
                        height: l
                    } = i, {
                        topLeft: u,
                        topRight: c,
                        bottomLeft: d,
                        bottomRight: f
                    } = t1(r.cornerRadius);
                    e.fillStyle = r.backgroundColor, e.strokeStyle = r.borderColor, e.lineWidth = r.borderWidth, e.beginPath(), e.moveTo(o + u, a), "top" === n && this.drawCaret(t, e, i, r), e.lineTo(o + h - c, a), e.quadraticCurveTo(o + h, a, o + h, a + c), "center" === n && "right" === s && this.drawCaret(t, e, i, r), e.lineTo(o + h, a + l - f), e.quadraticCurveTo(o + h, a + l, o + h - f, a + l), "bottom" === n && this.drawCaret(t, e, i, r), e.lineTo(o + d, a + l), e.quadraticCurveTo(o, a + l, o, a + l - d), "center" === n && "left" === s && this.drawCaret(t, e, i, r), e.lineTo(o, a + u), e.quadraticCurveTo(o, a, o + u, a), e.closePath(), e.fill(), r.borderWidth > 0 && e.stroke()
                }
                _updateAnimationTarget(t) {
                    let e = this.chart,
                        i = this.$animations,
                        r = i && i.x,
                        s = i && i.y;
                    if (r || s) {
                        let i = rL[t.position].call(this, this._active, this._eventPosition);
                        if (!i) return;
                        let n = this._size = rI(this, t),
                            o = Object.assign({}, i, this._size),
                            a = rF(e, t, o),
                            h = rz(t, o, a, e);
                        (r._to !== h.x || s._to !== h.y) && (this.xAlign = a.xAlign, this.yAlign = a.yAlign, this.width = n.width, this.height = n.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, h))
                    }
                }
                draw(t) {
                    let e = this.options.setContext(this.getContext()),
                        i = this.opacity;
                    if (!i) return;
                    this._updateAnimationTarget(e);
                    let r = {
                            width: this.width,
                            height: this.height
                        },
                        s = {
                            x: this.x,
                            y: this.y
                        };
                    i = .001 > Math.abs(i) ? 0 : i;
                    let n = t2(e.padding),
                        o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                    e.enabled && o && (t.save(), t.globalAlpha = i, this.drawBackground(s, t, r, e), eR(t, e.textDirection), s.y += n.top, this.drawTitle(s, t, e), this.drawBody(s, t, e), this.drawFooter(s, t, e), eL(t, e.textDirection), t.restore())
                }
                getActiveElements() {
                    return this._active || []
                }
                setActiveElements(t, e) {
                    let i = this._active,
                        r = t.map(t => {
                            let {
                                datasetIndex: e,
                                index: i
                            } = t, r = this.chart.getDatasetMeta(e);
                            if (!r) throw Error("Cannot find a dataset at index " + e);
                            return {
                                datasetIndex: e,
                                element: r.data[i],
                                index: i
                            }
                        }),
                        s = !y(i, r),
                        n = this._positionChanged(r, e);
                    (s || n) && (this._active = r, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
                }
                handleEvent(t, e) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    if (e && this._ignoreReplayEvents) return !1;
                    this._ignoreReplayEvents = !1;
                    let r = this.options,
                        s = this._active || [],
                        n = this._getActiveElements(t, s, e, i),
                        o = this._positionChanged(n, t),
                        a = e || !y(n, s) || o;
                    return a && (this._active = n, (r.enabled || r.external) && (this._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, this.update(!0, e))), a
                }
                _getActiveElements(t, e, i, r) {
                    let s = this.options;
                    if ("mouseout" === t.type) return [];
                    if (!r) return e;
                    let n = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
                    return s.reverse && n.reverse(), n
                }
                _positionChanged(t, e) {
                    let {
                        caretX: i,
                        caretY: r,
                        options: s
                    } = this, n = rL[s.position].call(this, t, e);
                    return !1 !== n && (i !== n.x || r !== n.y)
                }
                constructor(t) {
                    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
                }
            }
            rH.positioners = rL;
            var rW = {
                id: "tooltip",
                _element: rH,
                positioners: rL,
                afterInit(t, e, i) {
                    i && (t.tooltip = new rH({
                        chart: t,
                        options: i
                    }))
                },
                beforeUpdate(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                reset(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                afterDraw(t) {
                    let e = t.tooltip,
                        i = {
                            tooltip: e
                        };
                    !1 !== t.notifyPlugins("beforeTooltipDraw", i) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i))
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        let i = e.replay;
                        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: {
                        weight: "bold"
                    },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {
                        weight: "bold"
                    },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: {
                        duration: 400,
                        easing: "easeOutQuart"
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: ["x", "y", "width", "height", "caretX", "caretY"]
                        },
                        opacity: {
                            easing: "linear",
                            duration: 200
                        }
                    },
                    callbacks: {
                        beforeTitle: l,
                        title(t) {
                            if (t.length > 0) {
                                let e = t[0],
                                    i = e.chart.data.labels,
                                    r = i ? i.length : 0;
                                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                                if (e.label) return e.label;
                                if (r > 0 && e.dataIndex < r) return i[e.dataIndex]
                            }
                            return ""
                        },
                        afterTitle: l,
                        beforeBody: l,
                        beforeLabel: l,
                        label(t) {
                            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                            let e = t.dataset.label || "";
                            e && (e += ": ");
                            let i = t.formattedValue;
                            return c(i) || (e += i), e
                        },
                        labelColor(t) {
                            let e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                borderColor: e.borderColor,
                                backgroundColor: e.backgroundColor,
                                borderWidth: e.borderWidth,
                                borderDash: e.borderDash,
                                borderDashOffset: e.borderDashOffset,
                                borderRadius: 0
                            }
                        },
                        labelTextColor() {
                            return this.options.bodyColor
                        },
                        labelPointStyle(t) {
                            let e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                pointStyle: e.pointStyle,
                                rotation: e.rotation
                            }
                        },
                        afterLabel: l,
                        afterBody: l,
                        beforeFooter: l,
                        footer: l,
                        afterFooter: l
                    }
                },
                defaultRoutes: {
                    bodyFont: "font",
                    footerFont: "font",
                    titleFont: "font"
                },
                descriptors: {
                    _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: {
                        _scriptable: !1,
                        _indexable: !1
                    },
                    animation: {
                        _fallback: !1
                    },
                    animations: {
                        _fallback: "animation"
                    }
                },
                additionalOptionScopes: ["interaction"]
            };
            class rU extends iK {
                init(t) {
                    let e = this._addedLabels;
                    if (e.length) {
                        let t = this.getLabels();
                        for (let {
                                index: i,
                                label: r
                            }
                            of e) t[i] === r && t.splice(i, 1);
                        this._addedLabels = []
                    }
                    super.init(t)
                }
                parse(t, e) {
                    let i, r;
                    if (c(t)) return null;
                    let s = this.getLabels();
                    return i = e = isFinite(e) && s[e] === t ? e : function(t, e, i, r) {
                        let s = t.indexOf(e);
                        if (-1 === s) {
                            var n;
                            return n = i, "string" == typeof e ? (n = t.push(e) - 1, r.unshift({
                                index: n,
                                label: e
                            })) : isNaN(e) && (n = null), n
                        }
                        return s !== t.lastIndexOf(e) ? i : s
                    }(s, t, m(e, t), this._addedLabels), r = s.length - 1, null === i ? null : tt(Math.round(i), 0, r)
                }
                determineDataLimits() {
                    let {
                        minDefined: t,
                        maxDefined: e
                    } = this.getUserBounds(), {
                        min: i,
                        max: r
                    } = this.getMinMax(!0);
                    "ticks" === this.options.bounds && (t || (i = 0), e || (r = this.getLabels().length - 1)), this.min = i, this.max = r
                }
                buildTicks() {
                    let t = this.min,
                        e = this.max,
                        i = this.options.offset,
                        r = [],
                        s = this.getLabels();
                    s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1), this._valueRange = Math.max(s.length - !i, 1), this._startValue = this.min - .5 * !!i;
                    for (let i = t; i <= e; i++) r.push({
                        value: i
                    });
                    return r
                }
                getLabelForValue(t) {
                    let e = this.getLabels();
                    return t >= 0 && t < e.length ? e[t] : t
                }
                configure() {
                    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
                }
                getPixelForValue(t) {
                    return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getPixelForTick(t) {
                    let e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getValueForPixel(t) {
                    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                }
                getBasePixel() {
                    return this.bottom
                }
                constructor(t) {
                    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
                }
            }

            function rq(t, e, i) {
                let {
                    horizontal: r,
                    minRotation: s
                } = i, n = Y(s), o = (r ? Math.sin(n) : Math.cos(n)) || .001, a = .75 * e * ("" + t).length;
                return Math.min(e / o, a)
            }
            rU.id = "category", rU.defaults = {
                ticks: {
                    callback: rU.prototype.getLabelForValue
                }
            };
            class r$ extends iK {
                parse(t, e) {
                    return c(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
                }
                handleTickRangeOptions() {
                    let {
                        beginAtZero: t
                    } = this.options, {
                        minDefined: e,
                        maxDefined: i
                    } = this.getUserBounds(), {
                        min: r,
                        max: s
                    } = this, n = t => r = e ? r : t, o = t => s = i ? s : t;
                    if (t) {
                        let t = H(r),
                            e = H(s);
                        t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && n(0)
                    }
                    if (r === s) {
                        let e = 1;
                        (s >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * s)), o(s + e), t || n(r - e)
                    }
                    this.min = r, this.max = s
                }
                getTickLimit() {
                    let t, {
                        maxTicksLimit: e,
                        stepSize: i
                    } = this.options.ticks;
                    return i ? (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${t} ticks. Limiting to 1000.`), t = 1e3) : (t = this.computeTickLimit(), e = e || 11), e && (t = Math.min(e, t)), t
                }
                computeTickLimit() {
                    return 1 / 0
                }
                buildTicks() {
                    let t = this.options,
                        e = t.ticks,
                        i = this.getTickLimit(),
                        r = function(t, e) {
                            var i, r;
                            let s, n, o, a, h, l = [],
                                {
                                    bounds: u,
                                    step: d,
                                    min: f,
                                    max: p,
                                    precision: g,
                                    count: m,
                                    maxTicks: b,
                                    maxDigits: _,
                                    includeBounds: v
                                } = t,
                                y = d || 1,
                                x = b - 1,
                                {
                                    min: w,
                                    max: T
                                } = e,
                                M = !c(f),
                                S = !c(p),
                                k = !c(m),
                                D = (T - w) / (_ + 1),
                                O = W((T - w) / x / y) * y;
                            if (O < 1e-14 && !M && !S) return [{
                                value: w
                            }, {
                                value: T
                            }];
                            (a = Math.ceil(T / O) - Math.floor(w / O)) > x && (O = W(a * O / x / y) * y), c(g) || (O = Math.ceil(O * (s = Math.pow(10, g))) / s), "ticks" === u ? (n = Math.floor(w / O) * O, o = Math.ceil(T / O) * O) : (n = w, o = T), M && S && d && (i = (p - f) / d, r = O / 1e3, (h = Math.round(i)) - r <= i && h + r >= i) ? (a = Math.round(Math.min((p - f) / O, b)), O = (p - f) / a, n = f, o = p) : k ? (n = M ? f : n, O = ((o = S ? p : o) - n) / (a = m - 1)) : a = q(a = (o - n) / O, Math.round(a), O / 1e3) ? Math.round(a) : Math.ceil(a);
                            let E = Math.max(K(O), K(n));
                            n = Math.round(n * (s = Math.pow(10, c(g) ? E : g))) / s, o = Math.round(o * s) / s;
                            let P = 0;
                            for (M && (v && n !== f ? (l.push({
                                    value: f
                                }), n < f && P++, q(Math.round((n + P * O) * s) / s, f, rq(f, D, t)) && P++) : n < f && P++); P < a; ++P) l.push({
                                value: Math.round((n + P * O) * s) / s
                            });
                            return S && v && o !== p ? l.length && q(l[l.length - 1].value, p, rq(p, D, t)) ? l[l.length - 1].value = p : l.push({
                                value: p
                            }) : S && o !== p || l.push({
                                value: o
                            }), l
                        }({
                            maxTicks: i = Math.max(2, i),
                            bounds: t.bounds,
                            min: t.min,
                            max: t.max,
                            precision: e.precision,
                            step: e.stepSize,
                            count: e.count,
                            maxDigits: this._maxDigits(),
                            horizontal: this.isHorizontal(),
                            minRotation: e.minRotation || 0,
                            includeBounds: !1 !== e.includeBounds
                        }, this._range || this);
                    return "ticks" === t.bounds && $(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r
                }
                configure() {
                    let t = this.ticks,
                        e = this.min,
                        i = this.max;
                    if (super.configure(), this.options.offset && t.length) {
                        let r = (i - e) / Math.max(t.length - 1, 1) / 2;
                        e -= r, i += r
                    }
                    this._startValue = e, this._endValue = i, this._valueRange = i - e
                }
                getLabelForValue(t) {
                    return eA(t, this.chart.options.locale, this.options.ticks.format)
                }
                constructor(t) {
                    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
                }
            }
            class rY extends r$ {
                determineDataLimits() {
                    let {
                        min: t,
                        max: e
                    } = this.getMinMax(!0);
                    this.min = p(t) ? t : 0, this.max = p(e) ? e : 1, this.handleTickRangeOptions()
                }
                computeTickLimit() {
                    let t = this.isHorizontal(),
                        e = t ? this.width : this.height,
                        i = Y(this.options.ticks.minRotation),
                        r = (t ? Math.sin(i) : Math.cos(i)) || .001;
                    return Math.ceil(e / Math.min(40, this._resolveTickFontOptions(0).lineHeight / r))
                }
                getPixelForValue(t) {
                    return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                }
            }

            function rK(t) {
                return 1 == t / Math.pow(10, Math.floor(j(t)))
            }
            rY.id = "linear", rY.defaults = {
                ticks: {
                    callback: iH.numeric
                }
            };
            class rX extends iK {
                parse(t, e) {
                    let i = r$.prototype.parse.apply(this, [t, e]);
                    if (0 === i) {
                        this._zero = !0;
                        return
                    }
                    return p(i) && i > 0 ? i : null
                }
                determineDataLimits() {
                    let {
                        min: t,
                        max: e
                    } = this.getMinMax(!0);
                    this.min = p(t) ? Math.max(0, t) : null, this.max = p(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
                }
                handleTickRangeOptions() {
                    let {
                        minDefined: t,
                        maxDefined: e
                    } = this.getUserBounds(), i = this.min, r = this.max, s = e => i = t ? i : e, n = t => r = e ? r : t, o = (t, e) => Math.pow(10, Math.floor(j(t)) + e);
                    i === r && (i <= 0 ? (s(1), n(10)) : (s(o(i, -1)), n(o(r, 1)))), i <= 0 && s(o(r, -1)), r <= 0 && n(o(i, 1)), this._zero && this.min !== this._suggestedMin && i === o(this.min, 0) && s(o(i, -1)), this.min = i, this.max = r
                }
                buildTicks() {
                    let t = this.options,
                        e = function(t, e) {
                            let i = Math.floor(j(e.max)),
                                r = Math.ceil(e.max / Math.pow(10, i)),
                                s = [],
                                n = g(t.min, Math.pow(10, Math.floor(j(e.min)))),
                                o = Math.floor(j(n)),
                                a = Math.floor(n / Math.pow(10, o)),
                                h = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                            do s.push({
                                value: n,
                                major: rK(n)
                            }), 10 == ++a && (a = 1, h = ++o >= 0 ? 1 : h), n = Math.round(a * Math.pow(10, o) * h) / h; while (o < i || o === i && a < r);
                            return s.push({
                                value: g(t.max, n),
                                major: rK(n)
                            }), s
                        }({
                            min: this._userMin,
                            max: this._userMax
                        }, this);
                    return "ticks" === t.bounds && $(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
                }
                getLabelForValue(t) {
                    return void 0 === t ? "0" : eA(t, this.chart.options.locale, this.options.ticks.format)
                }
                configure() {
                    let t = this.min;
                    super.configure(), this._startValue = j(t), this._valueRange = j(this.max) - j(t)
                }
                getPixelForValue(t) {
                    return ((void 0 === t || 0 === t) && (t = this.min), null === t || isNaN(t)) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (j(t) - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                    let e = this.getDecimalForPixel(t);
                    return Math.pow(10, this._startValue + e * this._valueRange)
                }
                constructor(t) {
                    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
                }
            }

            function rZ(t) {
                let e = t.ticks;
                if (e.display && t.display) {
                    let t = t2(e.backdropPadding);
                    return m(e.font && e.font.size, tF.font.size) + t.height
                }
                return 0
            }

            function rG(t, e, i, r, s) {
                return t === r || t === s ? {
                    start: e - i / 2,
                    end: e + i / 2
                } : t < r || t > s ? {
                    start: e - i,
                    end: e
                } : {
                    start: e,
                    end: e + i
                }
            }

            function rQ(t, e, i, r) {
                let {
                    ctx: s
                } = t;
                if (i) s.arc(t.xCenter, t.yCenter, e, 0, L);
                else {
                    let i = t.getPointPosition(0, e);
                    s.moveTo(i.x, i.y);
                    for (let n = 1; n < r; n++) i = t.getPointPosition(n, e), s.lineTo(i.x, i.y)
                }
            }
            rX.id = "logarithmic", rX.defaults = {
                ticks: {
                    callback: iH.logarithmic,
                    major: {
                        enabled: !0
                    }
                }
            };
            class rJ extends r$ {
                setDimensions() {
                    let t = this._padding = t2(rZ(this.options) / 2),
                        e = this.width = this.maxWidth - t.width,
                        i = this.height = this.maxHeight - t.height;
                    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
                }
                determineDataLimits() {
                    let {
                        min: t,
                        max: e
                    } = this.getMinMax(!1);
                    this.min = p(t) && !isNaN(t) ? t : 0, this.max = p(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
                }
                computeTickLimit() {
                    return Math.ceil(this.drawingArea / rZ(this.options))
                }
                generateTickLabels(t) {
                    r$.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((t, e) => {
                        let i = _(this.options.pointLabels.callback, [t, e], this);
                        return i || 0 === i ? i : ""
                    }).filter((t, e) => this.chart.getDataVisibility(e))
                }
                fit() {
                    let t = this.options;
                    t.display && t.pointLabels.display ? function(t) {
                        let e = {
                                l: t.left + t._padding.left,
                                r: t.right - t._padding.right,
                                t: t.top + t._padding.top,
                                b: t.bottom - t._padding.bottom
                            },
                            i = Object.assign({}, e),
                            r = [],
                            s = [],
                            n = t._pointLabels.length,
                            o = t.options.pointLabels,
                            a = o.centerPointLabels ? R / n : 0;
                        for (let u = 0; u < n; u++) {
                            var h, l;
                            let n = o.setContext(t.getPointLabelContext(u));
                            s[u] = n.padding;
                            let c = t.getPointPosition(u, t.drawingArea + s[u], a),
                                f = t5(n.font),
                                p = (h = t.ctx, l = d(l = t._pointLabels[u]) ? l : [l], {
                                    w: function(t, e, i, r) {
                                        let s, n, o, a, h, l = (r = r || {}).data = r.data || {},
                                            u = r.garbageCollect = r.garbageCollect || [];
                                        r.font !== e && (l = r.data = {}, u = r.garbageCollect = [], r.font = e), t.save(), t.font = e;
                                        let c = 0,
                                            f = i.length;
                                        for (s = 0; s < f; s++)
                                            if (null != (a = i[s]) && !0 !== d(a)) c = tz(t, l, u, c, a);
                                            else if (d(a))
                                            for (n = 0, o = a.length; n < o; n++) null == (h = a[n]) || d(h) || (c = tz(t, l, u, c, h));
                                        t.restore();
                                        let p = u.length / 2;
                                        if (p > i.length) {
                                            for (s = 0; s < p; s++) delete l[u[s]];
                                            u.splice(0, p)
                                        }
                                        return c
                                    }(h, f.string, l),
                                    h: l.length * f.lineHeight
                                });
                            r[u] = p;
                            let g = Q(t.getIndexAngle(u) + a),
                                m = Math.round(180 / R * g);
                            ! function(t, e, i, r, s) {
                                let n = Math.abs(Math.sin(i)),
                                    o = Math.abs(Math.cos(i)),
                                    a = 0,
                                    h = 0;
                                r.start < e.l ? (a = (e.l - r.start) / n, t.l = Math.min(t.l, e.l - a)) : r.end > e.r && (a = (r.end - e.r) / n, t.r = Math.max(t.r, e.r + a)), s.start < e.t ? (h = (e.t - s.start) / o, t.t = Math.min(t.t, e.t - h)) : s.end > e.b && (h = (s.end - e.b) / o, t.b = Math.max(t.b, e.b + h))
                            }(i, e, g, rG(m, c.x, p.w, 0, 180), rG(m, c.y, p.h, 90, 270))
                        }
                        t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) {
                            let r = [],
                                s = t._pointLabels.length,
                                n = t.options,
                                o = rZ(n) / 2,
                                a = t.drawingArea,
                                h = n.pointLabels.centerPointLabels ? R / s : 0;
                            for (let n = 0; n < s; n++) {
                                var l, u, c, d, f, p, g;
                                let s = t.getPointPosition(n, a + o + i[n], h),
                                    m = Math.round(180 / R * Q(s.angle + F)),
                                    b = e[n],
                                    _ = (l = s.y, u = b.h, 90 === (c = m) || 270 === c ? l -= u / 2 : (c > 270 || c < 90) && (l -= u), l),
                                    v = 0 === (d = m) || 180 === d ? "center" : d < 180 ? "left" : "right",
                                    y = (f = s.x, p = b.w, "right" === (g = v) ? f -= p : "center" === g && (f -= p / 2), f);
                                r.push({
                                    x: s.x,
                                    y: _,
                                    textAlign: v,
                                    left: y,
                                    top: _,
                                    right: y + b.w,
                                    bottom: _ + b.h
                                })
                            }
                            return r
                        }(t, r, s)
                    }(this) : this.setCenterPoint(0, 0, 0, 0)
                }
                setCenterPoint(t, e, i, r) {
                    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - r) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, r))
                }
                getIndexAngle(t) {
                    return Q(t * (L / (this._pointLabels.length || 1)) + Y(this.options.startAngle || 0))
                }
                getDistanceFromCenterForValue(t) {
                    if (c(t)) return NaN;
                    let e = this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                }
                getValueForDistanceFromCenter(t) {
                    if (c(t)) return NaN;
                    let e = t / (this.drawingArea / (this.max - this.min));
                    return this.options.reverse ? this.max - e : this.min + e
                }
                getPointLabelContext(t) {
                    let e = this._pointLabels || [];
                    if (t >= 0 && t < e.length) {
                        var i;
                        let r = e[t];
                        return i = this.getContext(), t6(i, {
                            label: r,
                            index: t,
                            type: "pointLabel"
                        })
                    }
                }
                getPointPosition(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = this.getIndexAngle(t) - F + i;
                    return {
                        x: Math.cos(r) * e + this.xCenter,
                        y: Math.sin(r) * e + this.yCenter,
                        angle: r
                    }
                }
                getPointPositionForValue(t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }
                getBasePosition(t) {
                    return this.getPointPositionForValue(t || 0, this.getBaseValue())
                }
                getPointLabelPosition(t) {
                    let {
                        left: e,
                        top: i,
                        right: r,
                        bottom: s
                    } = this._pointLabelItems[t];
                    return {
                        left: e,
                        top: i,
                        right: r,
                        bottom: s
                    }
                }
                drawBackground() {
                    let {
                        backgroundColor: t,
                        grid: {
                            circular: e
                        }
                    } = this.options;
                    if (t) {
                        let i = this.ctx;
                        i.save(), i.beginPath(), rQ(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
                    }
                }
                drawGrid() {
                    let t, e, i, r = this.ctx,
                        s = this.options,
                        {
                            angleLines: n,
                            grid: o
                        } = s,
                        a = this._pointLabels.length;
                    if (s.pointLabels.display && function(t, e) {
                            let {
                                ctx: i,
                                options: {
                                    pointLabels: r
                                }
                            } = t;
                            for (let s = e - 1; s >= 0; s--) {
                                let e = r.setContext(t.getPointLabelContext(s)),
                                    n = t5(e.font),
                                    {
                                        x: o,
                                        y: a,
                                        textAlign: h,
                                        left: l,
                                        top: u,
                                        right: d,
                                        bottom: f
                                    } = t._pointLabelItems[s],
                                    {
                                        backdropColor: p
                                    } = e;
                                if (!c(p)) {
                                    let t = t2(e.backdropPadding);
                                    i.fillStyle = p, i.fillRect(l - t.left, u - t.top, d - l + t.width, f - u + t.height)
                                }
                                tK(i, t._pointLabels[s], o, a + n.lineHeight / 2, n, {
                                    color: e.color,
                                    textAlign: h,
                                    textBaseline: "middle"
                                })
                            }
                        }(this, a), o.display && this.ticks.forEach((t, i) => {
                            0 !== i && (e = this.getDistanceFromCenterForValue(t.value), function(t, e, i, r) {
                                let s = t.ctx,
                                    n = e.circular,
                                    {
                                        color: o,
                                        lineWidth: a
                                    } = e;
                                (n || r) && o && a && !(i < 0) && (s.save(), s.strokeStyle = o, s.lineWidth = a, s.setLineDash(e.borderDash), s.lineDashOffset = e.borderDashOffset, s.beginPath(), rQ(t, i, n, r), s.closePath(), s.stroke(), s.restore())
                            }(this, o.setContext(this.getContext(i - 1)), e, a))
                        }), n.display) {
                        for (r.save(), t = a - 1; t >= 0; t--) {
                            let o = n.setContext(this.getPointLabelContext(t)),
                                {
                                    color: a,
                                    lineWidth: h
                                } = o;
                            h && a && (r.lineWidth = h, r.strokeStyle = a, r.setLineDash(o.borderDash), r.lineDashOffset = o.borderDashOffset, e = this.getDistanceFromCenterForValue(s.ticks.reverse ? this.min : this.max), i = this.getPointPosition(t, e), r.beginPath(), r.moveTo(this.xCenter, this.yCenter), r.lineTo(i.x, i.y), r.stroke())
                        }
                        r.restore()
                    }
                }
                drawBorder() {}
                drawLabels() {
                    let t, e, i = this.ctx,
                        r = this.options,
                        s = r.ticks;
                    if (!s.display) return;
                    let n = this.getIndexAngle(0);
                    i.save(), i.translate(this.xCenter, this.yCenter), i.rotate(n), i.textAlign = "center", i.textBaseline = "middle", this.ticks.forEach((n, o) => {
                        if (0 === o && !r.reverse) return;
                        let a = s.setContext(this.getContext(o)),
                            h = t5(a.font);
                        if (t = this.getDistanceFromCenterForValue(this.ticks[o].value), a.showLabelBackdrop) {
                            i.font = h.string, e = i.measureText(n.label).width, i.fillStyle = a.backdropColor;
                            let r = t2(a.backdropPadding);
                            i.fillRect(-e / 2 - r.left, -t - h.size / 2 - r.top, e + r.width, h.size + r.height)
                        }
                        tK(i, n.label, 0, -t, h, {
                            color: a.color
                        })
                    }), i.restore()
                }
                drawTitle() {}
                constructor(t) {
                    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
                }
            }
            rJ.id = "radialLinear", rJ.defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: !1
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: !0,
                    callback: iH.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {
                        size: 10
                    },
                    callback: t => t,
                    padding: 5,
                    centerPointLabels: !1
                }
            }, rJ.defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            }, rJ.descriptors = {
                angleLines: {
                    _fallback: "grid"
                }
            };
            let r0 = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: 1e3
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: 60
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: 60
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: 24
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: 30
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: 4
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: 12
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: 4
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                r1 = Object.keys(r0);

            function r2(t, e) {
                return t - e
            }

            function r5(t, e) {
                if (c(e)) return null;
                let i = t._adapter,
                    {
                        parser: r,
                        round: s,
                        isoWeekday: n
                    } = t._parseOpts,
                    o = e;
                return ("function" == typeof r && (o = r(o)), p(o) || (o = "string" == typeof r ? i.parse(o, r) : i.parse(o)), null === o) ? null : (s && (o = "week" === s && (U(n) || !0 === n) ? i.startOf(o, "isoWeek", n) : i.startOf(o, s)), +o)
            }

            function r3(t, e, i, r) {
                let s = r1.length;
                for (let n = r1.indexOf(t); n < s - 1; ++n) {
                    let t = r0[r1[n]],
                        s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                    if (t.common && Math.ceil((i - e) / (s * t.size)) <= r) return r1[n]
                }
                return r1[s - 1]
            }

            function r6(t, e, i) {
                if (i) {
                    if (i.length) {
                        let {
                            lo: r,
                            hi: s
                        } = t8(i, e);
                        t[i[r] >= e ? i[r] : i[s]] = !0
                    }
                } else t[e] = !0
            }

            function r8(t, e, i) {
                let r, s, n = [],
                    o = {},
                    a = e.length;
                for (r = 0; r < a; ++r) o[s = e[r]] = r, n.push({
                    value: s,
                    major: !1
                });
                return 0 !== a && i ? function(t, e, i, r) {
                    let s, n, o = t._adapter,
                        a = +o.startOf(e[0].value, r),
                        h = e[e.length - 1].value;
                    for (s = a; s <= h; s = +o.add(s, 1, r))(n = i[s]) >= 0 && (e[n].major = !0);
                    return e
                }(t, n, o, i) : n
            }
            class r4 extends iK {
                init(t, e) {
                    let i = t.time || (t.time = {}),
                        r = this._adapter = new ia(t.adapters.date);
                    S(i.displayFormats, r.formats()), this._parseOpts = {
                        parser: i.parser,
                        round: i.round,
                        isoWeekday: i.isoWeekday
                    }, super.init(t), this._normalized = e.normalized
                }
                parse(t, e) {
                    return void 0 === t ? null : r5(this, t)
                }
                beforeLayout() {
                    super.beforeLayout(), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }
                }
                determineDataLimits() {
                    let t = this.options,
                        e = this._adapter,
                        i = t.time.unit || "day",
                        {
                            min: r,
                            max: s,
                            minDefined: n,
                            maxDefined: o
                        } = this.getUserBounds();

                    function a(t) {
                        n || isNaN(t.min) || (r = Math.min(r, t.min)), o || isNaN(t.max) || (s = Math.max(s, t.max))
                    }
                    n && o || (a(this._getLabelBounds()), ("ticks" !== t.bounds || "labels" !== t.ticks.source) && a(this.getMinMax(!1))), r = p(r) && !isNaN(r) ? r : +e.startOf(Date.now(), i), s = p(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1, this.min = Math.min(r, s - 1), this.max = Math.max(r + 1, s)
                }
                _getLabelBounds() {
                    let t = this.getLabelTimestamps(),
                        e = 1 / 0,
                        i = -1 / 0;
                    return t.length && (e = t[0], i = t[t.length - 1]), {
                        min: e,
                        max: i
                    }
                }
                buildTicks() {
                    let t = this.options,
                        e = t.time,
                        i = t.ticks,
                        r = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                    "ticks" === t.bounds && r.length && (this.min = this._userMin || r[0], this.max = this._userMax || r[r.length - 1]);
                    let s = this.min,
                        n = function(t, e, i) {
                            let r = 0,
                                s = t.length;
                            for (; r < s && t[r] < e;) r++;
                            for (; s > r && t[s - 1] > i;) s--;
                            return r > 0 || s < t.length ? t.slice(r, s) : t
                        }(r, s, this.max);
                    return this._unit = e.unit || (i.autoSkip ? r3(e.minUnit, this.min, this.max, this._getLabelCapacity(s)) : function(t, e, i, r, s) {
                        for (let n = r1.length - 1; n >= r1.indexOf(i); n--) {
                            let i = r1[n];
                            if (r0[i].common && t._adapter.diff(s, r, i) >= e - 1) return i
                        }
                        return r1[i ? r1.indexOf(i) : 0]
                    }(this, n.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                        for (let e = r1.indexOf(t) + 1, i = r1.length; e < i; ++e)
                            if (r0[r1[e]].common) return r1[e]
                    }(this._unit) : void 0, this.initOffsets(r), t.reverse && n.reverse(), r8(this, n, this._majorUnit)
                }
                initOffsets(t) {
                    let e, i, r = 0,
                        s = 0;
                    this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), r = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), s = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                    let n = t.length < 3 ? .5 : .25;
                    r = tt(r, 0, n), s = tt(s, 0, n), this._offsets = {
                        start: r,
                        end: s,
                        factor: 1 / (r + 1 + s)
                    }
                }
                _generate() {
                    let t, e, i = this._adapter,
                        r = this.min,
                        s = this.max,
                        n = this.options,
                        o = n.time,
                        a = o.unit || r3(o.minUnit, r, s, this._getLabelCapacity(r)),
                        h = m(o.stepSize, 1),
                        l = "week" === a && o.isoWeekday,
                        u = U(l) || !0 === l,
                        c = {},
                        d = r;
                    if (u && (d = +i.startOf(d, "isoWeek", l)), d = +i.startOf(d, u ? "day" : a), i.diff(s, r, a) > 1e5 * h) throw Error(r + " and " + s + " are too far apart with stepSize of " + h + " " + a);
                    let f = "data" === n.ticks.source && this.getDataTimestamps();
                    for (t = d, e = 0; t < s; t = +i.add(t, h, a), e++) r6(c, t, f);
                    return (t === s || "ticks" === n.bounds || 1 === e) && r6(c, t, f), Object.keys(c).sort((t, e) => t - e).map(t => +t)
                }
                getLabelForValue(t) {
                    let e = this._adapter,
                        i = this.options.time;
                    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
                }
                _tickFormatFunction(t, e, i, r) {
                    let s = this.options,
                        n = s.time.displayFormats,
                        o = this._unit,
                        a = this._majorUnit,
                        h = o && n[o],
                        l = a && n[a],
                        u = i[e],
                        c = a && l && u && u.major,
                        d = this._adapter.format(t, r || (c ? l : h)),
                        f = s.ticks.callback;
                    return f ? _(f, [d, e, i], this) : d
                }
                generateTickLabels(t) {
                    let e, i, r;
                    for (e = 0, i = t.length; e < i; ++e)(r = t[e]).label = this._tickFormatFunction(r.value, e, t)
                }
                getDecimalForValue(t) {
                    return null === t ? NaN : (t - this.min) / (this.max - this.min)
                }
                getPixelForValue(t) {
                    let e = this._offsets,
                        i = this.getDecimalForValue(t);
                    return this.getPixelForDecimal((e.start + i) * e.factor)
                }
                getValueForPixel(t) {
                    let e = this._offsets,
                        i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return this.min + i * (this.max - this.min)
                }
                _getLabelSize(t) {
                    let e = this.options.ticks,
                        i = this.ctx.measureText(t).width,
                        r = Y(this.isHorizontal() ? e.maxRotation : e.minRotation),
                        s = Math.cos(r),
                        n = Math.sin(r),
                        o = this._resolveTickFontOptions(0).size;
                    return {
                        w: i * s + o * n,
                        h: i * n + o * s
                    }
                }
                _getLabelCapacity(t) {
                    let e = this.options.time,
                        i = e.displayFormats,
                        r = i[e.unit] || i.millisecond,
                        s = this._tickFormatFunction(t, 0, r8(this, [t], this._majorUnit), r),
                        n = this._getLabelSize(s),
                        o = Math.floor(this.isHorizontal() ? this.width / n.w : this.height / n.h) - 1;
                    return o > 0 ? o : 1
                }
                getDataTimestamps() {
                    let t, e, i = this._cache.data || [];
                    if (i.length) return i;
                    let r = this.getMatchingVisibleMetas();
                    if (this._normalized && r.length) return this._cache.data = r[0].controller.getAllParsedValues(this);
                    for (t = 0, e = r.length; t < e; ++t) i = i.concat(r[t].controller.getAllParsedValues(this));
                    return this._cache.data = this.normalize(i)
                }
                getLabelTimestamps() {
                    let t, e, i = this._cache.labels || [];
                    if (i.length) return i;
                    let r = this.getLabels();
                    for (t = 0, e = r.length; t < e; ++t) i.push(r5(this, r[t]));
                    return this._cache.labels = this._normalized ? i : this.normalize(i)
                }
                normalize(t) {
                    return ee(t.sort(r2))
                }
                constructor(t) {
                    super(t), this._cache = {
                        data: [],
                        labels: [],
                        all: []
                    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
                }
            }

            function r7(t, e, i) {
                let r, s, n, o, a = 0,
                    h = t.length - 1;
                i ? (e >= t[a].pos && e <= t[h].pos && ({
                    lo: a,
                    hi: h
                } = t4(t, "pos", e)), {
                    pos: r,
                    time: n
                } = t[a], {
                    pos: s,
                    time: o
                } = t[h]) : (e >= t[a].time && e <= t[h].time && ({
                    lo: a,
                    hi: h
                } = t4(t, "time", e)), {
                    time: r,
                    pos: n
                } = t[a], {
                    time: s,
                    pos: o
                } = t[h]);
                let l = s - r;
                return l ? n + (o - n) * (e - r) / l : n
            }
            r4.id = "time", r4.defaults = {
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            };
            class r9 extends r4 {
                initOffsets() {
                    let t = this._getTimestampsForTable(),
                        e = this._table = this.buildLookupTable(t);
                    this._minPos = r7(e, this.min), this._tableRange = r7(e, this.max) - this._minPos, super.initOffsets(t)
                }
                buildLookupTable(t) {
                    let e, i, r, {
                            min: s,
                            max: n
                        } = this,
                        o = [],
                        a = [];
                    for (e = 0, i = t.length; e < i; ++e)(r = t[e]) >= s && r <= n && o.push(r);
                    if (o.length < 2) return [{
                        time: s,
                        pos: 0
                    }, {
                        time: n,
                        pos: 1
                    }];
                    for (e = 0, i = o.length; e < i; ++e) Math.round((o[e + 1] + o[e - 1]) / 2) !== (r = o[e]) && a.push({
                        time: r,
                        pos: e / (i - 1)
                    });
                    return a
                }
                _getTimestampsForTable() {
                    let t = this._cache.all || [];
                    if (t.length) return t;
                    let e = this.getDataTimestamps(),
                        i = this.getLabelTimestamps();
                    return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t
                }
                getDecimalForValue(t) {
                    return (r7(this._table, t) - this._minPos) / this._tableRange
                }
                getValueForPixel(t) {
                    let e = this._offsets,
                        i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return r7(this._table, i * this._tableRange + this._minPos, !0)
                }
                constructor(t) {
                    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
                }
            }
            r9.id = "timeseries", r9.defaults = r4.defaults
        },
        40284: function(t, e, i) {
            "use strict";

            function r(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function s(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            i.d(e, {
                os: () => rL
            });
            var n, o, a, h, l, u, c, d, f, p, g, m, b, _, v, y, x, w, T, M, S, k, D, O, E, P, A, C, R = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                L = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                B = 2 * Math.PI,
                V = B / 4,
                I = 0,
                F = Math.sqrt,
                z = Math.cos,
                N = Math.sin,
                j = function(t) {
                    return "string" == typeof t
                },
                H = function(t) {
                    return "function" == typeof t
                },
                W = function(t) {
                    return "number" == typeof t
                },
                U = function(t) {
                    return void 0 === t
                },
                q = function(t) {
                    return "object" == typeof t
                },
                $ = function(t) {
                    return !1 !== t
                },
                Y = function() {
                    return "undefined" != typeof window
                },
                K = function(t) {
                    return H(t) || j(t)
                },
                X = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                Z = Array.isArray,
                G = /(?:-?\.?\d|\.)+/gi,
                Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                te = /[+-]=-?[.\d]+/,
                ti = /[^,'"\[\]\s]+/gi,
                tr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                ts = {},
                tn = {},
                to = function(t) {
                    return (tn = tB(t, ts)) && iD
                },
                ta = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                th = function(t, e) {
                    return !e && console.warn(t)
                },
                tl = function(t, e) {
                    return t && (ts[t] = e) && tn && (tn[t] = e) || ts
                },
                tu = function() {
                    return 0
                },
                tc = {
                    suppressEvents: !0,
                    isStart: !0,
                    kill: !1
                },
                td = {
                    suppressEvents: !0,
                    kill: !1
                },
                tf = {
                    suppressEvents: !0
                },
                tp = {},
                tg = [],
                tm = {},
                tb = {},
                t_ = {},
                tv = 30,
                ty = [],
                tx = "",
                tw = function(t) {
                    var e, i, r = t[0];
                    if (q(r) || H(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                        for (i = ty.length; i-- && !ty[i].targetTest(r););
                        e = ty[i]
                    }
                    for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new eH(t[i], e))) || t.splice(i, 1);
                    return t
                },
                tT = function(t) {
                    return t._gsap || tw(en(t))[0]._gsap
                },
                tM = function(t, e, i) {
                    return (i = t[e]) && H(i) ? t[e]() : U(i) && t.getAttribute && t.getAttribute(e) || i
                },
                tS = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                tk = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                tD = function(t) {
                    return Math.round(1e7 * t) / 1e7 || 0
                },
                tO = function(t, e) {
                    var i = e.charAt(0),
                        r = parseFloat(e.substr(2));
                    return t = parseFloat(t), "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
                },
                tE = function(t, e) {
                    for (var i = e.length, r = 0; 0 > t.indexOf(e[r]) && ++r < i;);
                    return r < i
                },
                tP = function() {
                    var t, e, i = tg.length,
                        r = tg.slice(0);
                    for (t = 0, tm = {}, tg.length = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                tA = function(t, e, i, r) {
                    tg.length && tP(), t.render(e, i, r || T && e < 0 && (t._initted || t._startAt)), tg.length && tP()
                },
                tC = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(ti).length < 2 ? e : j(t) ? t.trim() : t
                },
                tR = function(t) {
                    return t
                },
                tL = function(t, e) {
                    for (var i in e) i in t || (t[i] = e[i]);
                    return t
                },
                tB = function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                tV = function t(e, i) {
                    for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = q(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
                    return e
                },
                tI = function(t, e) {
                    var i, r = {};
                    for (i in t) i in e || (r[i] = t[i]);
                    return r
                },
                tF = function(t) {
                    var e, i = t.parent || S,
                        r = t.keyframes ? (e = Z(t.keyframes), function(t, i) {
                            for (var r in i) r in t || "duration" === r && e || "ease" === r || (t[r] = i[r])
                        }) : tL;
                    if ($(t.inherit))
                        for (; i;) r(t, i.vars.defaults), i = i.parent || i._dp;
                    return t
                },
                tz = function(t, e) {
                    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                    return i < 0
                },
                tN = function(t, e, i, r, s) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var n, o = t[r];
                    if (s)
                        for (n = e[s]; o && o[s] > n;) o = o._prev;
                    return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = o, e.parent = e._dp = t, e
                },
                tj = function(t, e, i, r) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var s = e._prev,
                        n = e._next;
                    s ? s._next = n : t[i] === e && (t[i] = n), n ? n._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
                },
                tH = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
                },
                tW = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var i = t; i;) i._dirty = 1, i = i.parent;
                    return t
                },
                tU = function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                },
                tq = function(t, e, i, r) {
                    return t._startAt && (T ? t._startAt.revert(td) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
                },
                t$ = function(t) {
                    return t._repeat ? tY(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                tY = function(t, e) {
                    var i = Math.floor(t /= e);
                    return t && i === t ? i - 1 : i
                },
                tK = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                tX = function(t) {
                    return t._end = tD(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
                },
                tZ = function(t, e) {
                    var i = t._dp;
                    return i && i.smoothChildTiming && t._ts && (t._start = tD(i._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), tX(t), i._dirty || tW(i, t)), t
                },
                tG = function(t, e) {
                    var i;
                    if ((e._time || e._initted && !e._dur) && (i = tK(t.rawTime(), e), (!e._dur || ee(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), tW(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                        t._zTime = -1e-8
                    }
                },
                tQ = function(t, e, i, r) {
                    return e.parent && tH(e), e._start = tD((W(i) ? i : i || t !== S ? t7(t, i, e) : t._time) + e._delay), e._end = tD(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), tN(t, e, "_first", "_last", t._sort ? "_start" : 0), t2(e) || (t._recent = e), r || tG(t, e), t._ts < 0 && tZ(t, t._tTime), t
                },
                tJ = function(t, e) {
                    return (ts.ScrollTrigger || ta("scrollTrigger", e)) && ts.ScrollTrigger.create(e, t)
                },
                t0 = function(t, e, i, r, s) {
                    return (e1(t, e, s), t._initted) ? !i && t._pt && !T && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && P !== eD.frame ? (tg.push(t), t._lazy = [s, r], 1) : void 0 : 1
                },
                t1 = function t(e) {
                    var i = e.parent;
                    return i && i._ts && i._initted && !i._lock && (0 > i.rawTime() || t(i))
                },
                t2 = function(t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                },
                t5 = function(t, e, i, r) {
                    var s, n, o, a = t.ratio,
                        h = e < 0 || !e && (!t._start && t1(t) && !(!t._initted && t2(t)) || (t._ts < 0 || t._dp._ts < 0) && !t2(t)) ? 0 : 1,
                        l = t._rDelay,
                        u = 0;
                    if (l && t._repeat && (n = tY(u = ee(0, t._tDur, e), l), t._yoyo && 1 & n && (h = 1 - h), n !== tY(t._tTime, l) && (a = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== a || T || r || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && t0(t, e, r, i, u)) return;
                        for (o = t._zTime, t._zTime = e || 1e-8 * !!i, i || (i = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = u, s = t._pt; s;) s.r(h, s.d), s = s._next;
                        e < 0 && tq(t, e, i, !0), t._onUpdate && !i && em(t, "onUpdate"), u && t._repeat && !i && t.parent && em(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && tH(t, 1), i || T || (em(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                },
                t3 = function(t, e, i) {
                    var r;
                    if (i > e)
                        for (r = t._first; r && r._start <= i;) {
                            if ("isPause" === r.data && r._start > e) return r;
                            r = r._next
                        } else
                            for (r = t._last; r && r._start >= i;) {
                                if ("isPause" === r.data && r._start < e) return r;
                                r = r._prev
                            }
                },
                t6 = function(t, e, i, r) {
                    var s = t._repeat,
                        n = tD(e) || 0,
                        o = t._tTime / t._tDur;
                    return o && !r && (t._time *= n / t._dur), t._dur = n, t._tDur = s ? s < 0 ? 1e10 : tD(n * (s + 1) + t._rDelay * s) : n, o > 0 && !r && tZ(t, t._tTime = t._tDur * o), t.parent && tX(t), i || tW(t.parent, t), t
                },
                t8 = function(t) {
                    return t instanceof eU ? tW(t) : t6(t, t._dur)
                },
                t4 = {
                    _start: 0,
                    endTime: tu,
                    totalDuration: tu
                },
                t7 = function t(e, i, r) {
                    var s, n, o, a = e.labels,
                        h = e._recent || t4,
                        l = e.duration() >= 1e8 ? h.endTime(!1) : e._dur;
                    return j(i) && (isNaN(i) || i in a) ? (n = i.charAt(0), o = "%" === i.substr(-1), s = i.indexOf("="), "<" === n || ">" === n) ? (s >= 0 && (i = i.replace(/=/, "")), ("<" === n ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (s < 0 ? h : r).totalDuration() / 100 : 1)) : s < 0 ? (i in a || (a[i] = l), a[i]) : (n = parseFloat(i.charAt(s - 1) + i.substr(s + 1)), o && r && (n = n / 100 * (Z(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, i.substr(0, s - 1), r) + n : l + n) : null == i ? l : +i
                },
                t9 = function(t, e, i) {
                    var r, s, n = W(e[1]),
                        o = (n ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[o];
                    if (n && (a.duration = e[1]), a.parent = i, t) {
                        for (r = a, s = i; s && !("immediateRender" in r);) r = s.vars.defaults || {}, s = $(s.vars.inherit) && s.parent;
                        a.immediateRender = $(r.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
                    }
                    return new e7(e[0], a, e[o + 1])
                },
                et = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                ee = function(t, e, i) {
                    return i < t ? t : i > e ? e : i
                },
                ei = function(t, e) {
                    return j(t) && (e = tr.exec(t)) ? e[1] : ""
                },
                er = [].slice,
                es = function(t, e) {
                    return t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== k
                },
                en = function(t, e, i) {
                    var r;
                    return M && !e && M.selector ? M.selector(t) : j(t) && !i && (D || !eO()) ? er.call((e || O).querySelectorAll(t), 0) : Z(t) ? (void 0 === r && (r = []), t.forEach(function(t) {
                        var e;
                        return j(t) && !i || es(t, 1) ? (e = r).push.apply(e, en(t)) : r.push(t)
                    }) || r) : es(t) ? er.call(t, 0) : t ? [t] : []
                },
                eo = function(t) {
                    return t = en(t)[0] || th("Invalid scope") || {},
                        function(e) {
                            var i = t.current || t.nativeElement || t;
                            return en(e, i.querySelectorAll ? i : i === t ? th("Invalid scope") || O.createElement("div") : t)
                        }
                },
                ea = function(t) {
                    return t.sort(function() {
                        return .5 - Math.random()
                    })
                },
                eh = function(t) {
                    if (H(t)) return t;
                    var e = q(t) ? t : {
                            each: t
                        },
                        i = eI(e.ease),
                        r = e.from || 0,
                        s = parseFloat(e.base) || 0,
                        n = {},
                        o = r > 0 && r < 1,
                        a = isNaN(r) || o,
                        h = e.axis,
                        l = r,
                        u = r;
                    return j(r) ? l = u = ({
                            center: .5,
                            edges: .5,
                            end: 1
                        })[r] || 0 : !o && a && (l = r[0], u = r[1]),
                        function(t, o, c) {
                            var d, f, p, g, m, b, _, v, y, x = (c || e).length,
                                w = n[x];
                            if (!w) {
                                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                                    for (_ = -1e8; _ < (_ = c[y++].getBoundingClientRect().left) && y < x;);
                                    y--
                                }
                                for (b = 0, w = n[x] = [], d = a ? Math.min(y, x) * l - .5 : r % y, f = 1e8 === y ? 0 : a ? x * u / y - .5 : r / y | 0, _ = 0, v = 1e8; b < x; b++) p = b % y - d, g = f - (b / y | 0), w[b] = m = h ? Math.abs("y" === h ? g : p) : F(p * p + g * g), m > _ && (_ = m), m < v && (v = m);
                                "random" === r && ea(w), w.max = _ - v, w.min = v, w.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (y > x ? x - 1 : h ? "y" === h ? x / y : y : Math.max(y, x / y)) || 0) * ("edges" === r ? -1 : 1), w.b = x < 0 ? s - x : s, w.u = ei(e.amount || e.each) || 0, i = i && x < 0 ? eB(i) : i
                            }
                            return x = (w[t] - w.min) / w.max || 0, tD(w.b + (i ? i(x) : x) * w.v) + w.u
                        }
                },
                el = function(t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function(i) {
                        var r = tD(Math.round(parseFloat(i) / t) * t * e);
                        return (r - r % 1) / e + (W(i) ? 0 : ei(i))
                    }
                },
                eu = function(t, e) {
                    var i, r, s = Z(t);
                    return !s && q(t) && (i = s = t.radius || 1e8, t.values ? (r = !W((t = en(t.values))[0])) && (i *= i) : t = el(t.increment)), et(e, s ? H(t) ? function(e) {
                        return Math.abs((r = t(e)) - e) <= i ? r : e
                    } : function(e) {
                        for (var s, n, o = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), h = 1e8, l = 0, u = t.length; u--;)(s = r ? (s = t[u].x - o) * s + (n = t[u].y - a) * n : Math.abs(t[u] - o)) < h && (h = s, l = u);
                        return l = !i || h <= i ? t[l] : e, r || l === e || W(e) ? l : l + ei(e)
                    } : el(t))
                },
                ec = function(t, e, i, r) {
                    return et(Z(t) ? !e : !0 === i ? (i = 0, !1) : !r, function() {
                        return Z(t) ? t[~~(Math.random() * t.length)] : (r = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
                    })
                },
                ed = function(t, e, i) {
                    return et(i, function(i) {
                        return t[~~e(i)]
                    })
                },
                ef = function(t) {
                    for (var e, i, r, s, n = 0, o = ""; ~(e = t.indexOf("random(", n));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? ti : G), o += t.substr(n, e - n) + ec(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), n = r + 1;
                    return o + t.substr(n, t.length - n)
                },
                ep = function(t, e, i, r, s) {
                    var n = e - t,
                        o = r - i;
                    return et(s, function(e) {
                        return i + ((e - t) / n * o || 0)
                    })
                },
                eg = function(t, e, i) {
                    var r, s, n, o = t.labels,
                        a = 1e8;
                    for (r in o)(s = o[r] - e) < 0 == !!i && s && a > (s = Math.abs(s)) && (n = r, a = s);
                    return n
                },
                em = function(t, e, i) {
                    var r, s, n, o = t.vars,
                        a = o[e],
                        h = M,
                        l = t._ctx;
                    if (a) return r = o[e + "Params"], s = o.callbackScope || t, i && tg.length && tP(), l && (M = l), n = r ? a.apply(s, r) : a.call(s), M = h, n
                },
                eb = function(t) {
                    return tH(t), t.scrollTrigger && t.scrollTrigger.kill(!!T), 1 > t.progress() && em(t, "onInterrupt"), t
                },
                e_ = function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        i = H(t),
                        r = e && !i && t.init ? function() {
                            this._props = []
                        } : t,
                        s = {
                            init: tu,
                            render: ih,
                            add: eQ,
                            kill: iu,
                            modifier: il,
                            rawVars: 0
                        },
                        n = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ir,
                            aliases: {},
                            register: 0
                        };
                    if (eO(), t !== r) {
                        if (tb[e]) return;
                        tL(r, tL(tI(t, s), n)), tB(r.prototype, tB(s, tI(t, n))), tb[r.prop = e] = r, t.targetTest && (ty.push(r), tp[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    tl(e, r), t.register && t.register(iD, r, ip)
                },
                ev = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ey = function(t, e, i) {
                    return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
                },
                ex = function(t, e, i) {
                    var r, s, n, o, a, h, l, u, c, d, f = t ? W(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ev.black;
                    if (!f) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ev[t]) f = ev[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (r = t.charAt(1), t = "#" + r + r + (s = t.charAt(2)) + s + (n = t.charAt(3)) + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                            f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                        } else if ("hsl" === t.substr(0, 3))
                            if (f = d = t.match(G), e) {
                                if (~t.indexOf("=")) return f = t.match(Q), i && f.length < 4 && (f[3] = 1), f
                            } else o = f[0] % 360 / 360, a = f[1] / 100, s = (h = f[2] / 100) <= .5 ? h * (a + 1) : h + a - h * a, r = 2 * h - s, f.length > 3 && (f[3] *= 1), f[0] = ey(o + 1 / 3, r, s), f[1] = ey(o, r, s), f[2] = ey(o - 1 / 3, r, s);
                        else f = t.match(G) || ev.transparent;
                        f = f.map(Number)
                    }
                    return e && !d && (r = f[0] / 255, h = ((l = Math.max(r, s = f[1] / 255, n = f[2] / 255)) + (u = Math.min(r, s, n))) / 2, l === u ? o = a = 0 : (c = l - u, a = h > .5 ? c / (2 - l - u) : c / (l + u), o = (l === r ? (s - n) / c + 6 * (s < n) : l === s ? (n - r) / c + 2 : (r - s) / c + 4) * 60), f[0] = ~~(o + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
                },
                ew = function(t) {
                    var e = [],
                        i = [],
                        r = -1;
                    return t.split(eM).forEach(function(t) {
                        var s = t.match(J) || [];
                        e.push.apply(e, s), i.push(r += s.length + 1)
                    }), e.c = i, e
                },
                eT = function(t, e, i) {
                    var r, s, n, o, a = "",
                        h = (t + a).match(eM),
                        l = e ? "hsla(" : "rgba(",
                        u = 0;
                    if (!h) return t;
                    if (h = h.map(function(t) {
                            return (t = ex(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        }), i && (n = ew(t), (r = i.c).join(a) !== n.c.join(a)))
                        for (o = (s = t.replace(eM, "1").split(J)).length - 1; u < o; u++) a += s[u] + (~r.indexOf(u) ? h.shift() || l + "0,0,0,0)" : (n.length ? n : h.length ? h : i).shift());
                    if (!s)
                        for (o = (s = t.split(eM)).length - 1; u < o; u++) a += s[u] + h[u];
                    return a + s[o]
                },
                eM = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in ev) e += "|" + t + "\\b";
                    return RegExp(e + ")", "gi")
                }(),
                eS = /hsl[a]?\(/,
                ek = function(t) {
                    var e, i = t.join(" ");
                    if (eM.lastIndex = 0, eM.test(i)) return e = eS.test(i), t[1] = eT(t[1], e), t[0] = eT(t[0], e, ew(t[1])), !0
                },
                eD = (f = Date.now, p = 500, g = 33, b = m = f(), _ = 1e3 / 240, v = 1e3 / 240, y = [], x = function t(e) {
                    var i, r, s, n, o = f() - b,
                        l = !0 === e;
                    if (o > p && (m += o - g), b += o, ((i = (s = b - m) - v) > 0 || l) && (n = ++u.frame, c = s - 1e3 * u.time, u.time = s /= 1e3, v += i + (i >= _ ? 4 : _ - i), r = 1), l || (a = h(t)), r)
                        for (d = 0; d < y.length; d++) y[d](s, c, n, e)
                }, u = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        x(!0)
                    },
                    deltaRatio: function(t) {
                        return c / (1e3 / (t || 60))
                    },
                    wake: function() {
                        E && (!D && Y() && (O = (k = D = window).document || {}, ts.gsap = iD, (k.gsapVersions || (k.gsapVersions = [])).push(iD.version), to(tn || k.GreenSockGlobals || !k.gsap && k || {}), l = k.requestAnimationFrame), a && u.sleep(), h = l || function(t) {
                            return setTimeout(t, v - 1e3 * u.time + 1 | 0)
                        }, C = 1, x(2))
                    },
                    sleep: function() {
                        (l ? k.cancelAnimationFrame : clearTimeout)(a), C = 0, h = tu
                    },
                    lagSmoothing: function(t, e) {
                        g = Math.min(e, p = t || 1e8, 0)
                    },
                    fps: function(t) {
                        _ = 1e3 / (t || 240), v = 1e3 * u.time + _
                    },
                    add: function(t, e, i) {
                        var r = e ? function(e, i, s, n) {
                            t(e, i, s, n), u.remove(r)
                        } : t;
                        return u.remove(t), y[i ? "unshift" : "push"](r), eO(), r
                    },
                    remove: function(t, e) {
                        ~(e = y.indexOf(t)) && y.splice(e, 1) && d >= e && d--
                    },
                    _listeners: y
                }),
                eO = function() {
                    return !C && eD.wake()
                },
                eE = {},
                eP = /^[\d.\-M][\d.\-,\s]/,
                eA = /["']/g,
                eC = function(t) {
                    for (var e, i, r, s = {}, n = t.substr(1, t.length - 3).split(":"), o = n[0], a = 1, h = n.length; a < h; a++) i = n[a], e = a !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[o] = isNaN(r) ? r.replace(eA, "").trim() : +r, o = i.substr(e + 1).trim();
                    return s
                },
                eR = function(t) {
                    var e = t.indexOf("(") + 1,
                        i = t.indexOf(")"),
                        r = t.indexOf("(", e);
                    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
                },
                eL = function(t) {
                    var e = (t + "").split("("),
                        i = eE[e[0]];
                    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [eC(e[1])] : eR(t).split(",").map(tC)) : eE._CE && eP.test(t) ? eE._CE("", t) : i
                },
                eB = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                eV = function t(e, i) {
                    for (var r, s = e._first; s;) s instanceof eU ? t(s, i) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === i || (s.timeline ? t(s.timeline, i) : (r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = i)), s = s._next
                },
                eI = function(t, e) {
                    return t && (H(t) ? t : eE[t] || eL(t)) || e
                },
                eF = function(t, e, i, r) {
                    void 0 === i && (i = function(t) {
                        return 1 - e(1 - t)
                    }), void 0 === r && (r = function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
                    });
                    var s, n = {
                        easeIn: e,
                        easeOut: i,
                        easeInOut: r
                    };
                    return tS(t, function(t) {
                        for (var e in eE[t] = ts[t] = n, eE[s = t.toLowerCase()] = i, n) eE[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eE[t + "." + e] = n[e]
                    }), n
                },
                ez = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
                    }
                },
                eN = function t(e, i, r) {
                    var s = i >= 1 ? i : 1,
                        n = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
                        o = n / B * (Math.asin(1 / s) || 0),
                        a = function(t) {
                            return 1 === t ? 1 : s * Math.pow(2, -10 * t) * N((t - o) * n) + 1
                        },
                        h = "out" === e ? a : "in" === e ? function(t) {
                            return 1 - a(1 - t)
                        } : ez(a);
                    return n = B / n, h.config = function(i, r) {
                        return t(e, i, r)
                    }, h
                },
                ej = function t(e, i) {
                    void 0 === i && (i = 1.70158);
                    var r = function(t) {
                            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                        },
                        s = "out" === e ? r : "in" === e ? function(t) {
                            return 1 - r(1 - t)
                        } : ez(r);
                    return s.config = function(i) {
                        return t(e, i)
                    }, s
                };
            tS("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
                var i = e < 5 ? e + 1 : e;
                eF(t + ",Power" + (i - 1), e ? function(t) {
                    return Math.pow(t, i)
                } : function(t) {
                    return t
                }, function(t) {
                    return 1 - Math.pow(1 - t, i)
                }, function(t) {
                    return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2
                })
            }), eE.Linear.easeNone = eE.none = eE.Linear.easeIn, eF("Elastic", eN("in"), eN("out"), eN()), e$ = 2 * (eq = 1 / 2.75), eY = 2.5 * eq, eF("Bounce", function(t) {
                return 1 - eK(1 - t)
            }, eK = function(t) {
                return t < eq ? 7.5625 * t * t : t < e$ ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < eY ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
            }), eF("Expo", function(t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0
            }), eF("Circ", function(t) {
                return -(F(1 - t * t) - 1)
            }), eF("Sine", function(t) {
                return 1 === t ? 1 : -z(t * V) + 1
            }), eF("Back", ej("in"), ej("out"), ej()), eE.SteppedEase = eE.steps = ts.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var i = 1 / t,
                        r = t + +!e,
                        s = +!!e,
                        n = .99999999;
                    return function(t) {
                        return ((r * ee(0, n, t) | 0) + s) * i
                    }
                }
            }, L.ease = eE["quad.out"], tS("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
                return tx += t + "," + t + "Params,"
            });
            var eH = function(t, e) {
                    this.id = I++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : tM, this.set = e ? e.getSetter : ir
                },
                eW = function() {
                    function t(t) {
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, t6(this, +t.duration, 1, 1), this.data = t.data, M && (this._ctx = M, M.data.push(this)), C || eD.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, t6(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (eO(), !arguments.length) return this._tTime;
                        var i = this._dp;
                        if (i && i.smoothChildTiming && this._ts) {
                            for (tZ(this, t), !i._dp || i.parent || tG(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : -((i.totalDuration() - i._tTime) / i._ts)) && i.totalTime(i._tTime, !0), i = i.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tQ(this._dp, this, this._start - this._delay)
                        }
                        return this._tTime === t && (this._dur || e) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (t || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = t), tA(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + t$(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + t$(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                    }, e.iteration = function(t, e) {
                        var i = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? tY(this._tTime, i) + 1 : 1
                    }, e.timeScale = function(t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? tK(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(ee(-this._delay, this._tDur, e), !0), tX(this), tU(this)
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (eO(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && tQ(e, this, t - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + ($(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tK(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.revert = function(t) {
                        void 0 === t && (t = tf);
                        var e = T;
                        return T = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), T = e, this
                    }, e.globalTime = function(t) {
                        for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                        return !this.parent && this.vars.immediateRender ? -1 : i
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, t8(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                    }, e.repeatDelay = function(t) {
                        if (arguments.length) {
                            var e = this._time;
                            return this._rDelay = t, t8(this), e ? this.time(e) : this
                        }
                        return this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(t7(this, t), $(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, $(e))
                    }, e.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, e.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, e.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, e.resume = function() {
                        return this.paused(!1)
                    }, e.reversed = function(t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                    }, e.invalidate = function() {
                        return this._initted = this._act = 0, this._zTime = -1e-8, this
                    }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            i = this._start;
                        return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8)
                    }, e.eventCallback = function(t, e, i) {
                        var r = this.vars;
                        return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
                    }, e.then = function(t) {
                        var e = this;
                        return new Promise(function(i) {
                            var r = H(t) ? t : tR,
                                s = function() {
                                    var t = e.then;
                                    e.then = null, H(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                        })
                    }, e.kill = function() {
                        eb(this)
                    }, t
                }();
            tL(eW.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -1e-8,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });
            var eU = function(t) {
                function e(e, i) {
                    var s;
                    return void 0 === e && (e = {}), (s = t.call(this, e) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = $(e.sortChildren), S && tQ(e.parent || S, r(s), i), e.reversed && s.reverse(), e.paused && s.paused(!0), e.scrollTrigger && tJ(r(s), e.scrollTrigger), s
                }
                s(e, t);
                var i = e.prototype;
                return i.to = function(t, e, i) {
                    return t9(0, arguments, this), this
                }, i.from = function(t, e, i) {
                    return t9(1, arguments, this), this
                }, i.fromTo = function(t, e, i, r) {
                    return t9(2, arguments, this), this
                }, i.set = function(t, e, i) {
                    return e.duration = 0, e.parent = this, tF(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new e7(t, e, t7(this, i), 1), this
                }, i.call = function(t, e, i) {
                    return tQ(this, e7.delayedCall(0, t, e), i)
                }, i.staggerTo = function(t, e, i, r, s, n, o) {
                    return i.duration = e, i.stagger = i.stagger || r, i.onComplete = n, i.onCompleteParams = o, i.parent = this, new e7(t, i, t7(this, s)), this
                }, i.staggerFrom = function(t, e, i, r, s, n, o) {
                    return i.runBackwards = 1, tF(i).immediateRender = $(i.immediateRender), this.staggerTo(t, e, i, r, s, n, o)
                }, i.staggerFromTo = function(t, e, i, r, s, n, o, a) {
                    return r.startAt = i, tF(r).immediateRender = $(r.immediateRender), this.staggerTo(t, e, r, s, n, o, a)
                }, i.render = function(t, e, i) {
                    var r, s, n, o, a, h, l, u, c, d, f, p, g = this._time,
                        m = this._dirty ? this.totalDuration() : this._tDur,
                        b = this._dur,
                        _ = t <= 0 ? 0 : tD(t),
                        v = this._zTime < 0 != t < 0 && (this._initted || !b);
                    if (this !== S && _ > m && t >= 0 && (_ = m), _ !== this._tTime || i || v) {
                        if (g !== this._time && b && (_ += this._time - g, t += this._time - g), r = _, c = this._start, h = !(u = this._ts), v && (b || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (f = this._yoyo, a = b + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                            if (r = tD(_ % a), _ === m ? (o = this._repeat, r = b) : ((o = ~~(_ / a)) && o === _ / a && (r = b, o--), r > b && (r = b)), d = tY(this._tTime, a), !g && this._tTime && d !== o && (d = o), f && 1 & o && (r = b - r, p = 1), o !== d && !this._lock) {
                                var y = f && 1 & d,
                                    x = y === (f && 1 & o);
                                if (o < d && (y = !y), g = y ? 0 : b, this._lock = 1, this.render(g || (p ? 0 : tD(o * a)), e, !b)._lock = 0, this._tTime = _, !e && this.parent && em(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), g && g !== this._time || !this._ts !== h || this.vars.onRepeat && !this.parent && !this._act || (b = this._dur, m = this._tDur, x && (this._lock = 2, g = y ? b : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !h)) return this;
                                eV(this, p)
                            }
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (l = t3(this, tD(g), tD(r))) && (_ -= r - (r = l._start)), this._tTime = _, this._time = r, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && r && !e && (em(this, "onStart"), this._tTime !== _)) return this;
                        if (r >= g && t >= 0)
                            for (s = this._first; s;) {
                                if (n = s._next, (s._act || r >= s._start) && s._ts && l !== s) {
                                    if (s.parent !== this) return this.render(t, e, i);
                                    if (s.render(s._ts > 0 ? (r - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (r - s._start) * s._ts, e, i), r !== this._time || !this._ts && !h) {
                                        l = 0, n && (_ += this._zTime = -1e-8);
                                        break
                                    }
                                }
                                s = n
                            } else {
                                s = this._last;
                                for (var w = t < 0 ? t : r; s;) {
                                    if (n = s._prev, (s._act || w <= s._end) && s._ts && l !== s) {
                                        if (s.parent !== this) return this.render(t, e, i);
                                        if (s.render(s._ts > 0 ? (w - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (w - s._start) * s._ts, e, i || T && (s._initted || s._startAt)), r !== this._time || !this._ts && !h) {
                                            l = 0, n && (_ += this._zTime = w ? -1e-8 : 1e-8);
                                            break
                                        }
                                    }
                                    s = n
                                }
                            }
                        if (l && !e && (this.pause(), l.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = c, tX(this), this.render(t, e, i);
                        this._onUpdate && !e && em(this, "onUpdate", !0), (_ === m && this._tTime >= this.totalDuration() || !_ && g) && (c === this._start || Math.abs(u) !== Math.abs(this._ts)) && !this._lock && ((t || !b) && (_ === m && this._ts > 0 || !_ && this._ts < 0) && tH(this, 1), e || t < 0 && !g || !_ && !g && m || (em(this, _ === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < m && this.timeScale() > 0) && this._prom()))
                    }
                    return this
                }, i.add = function(t, e) {
                    var i = this;
                    if (W(e) || (e = t7(this, e, t)), !(t instanceof eW)) {
                        if (Z(t)) return t.forEach(function(t) {
                            return i.add(t, e)
                        }), this;
                        if (j(t)) return this.addLabel(t, e);
                        if (!H(t)) return this;
                        t = e7.delayedCall(0, t)
                    }
                    return this !== t ? tQ(this, t, e) : this
                }, i.getChildren = function(t, e, i, r) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -1e8);
                    for (var s = [], n = this._first; n;) n._start >= r && (n instanceof e7 ? e && s.push(n) : (i && s.push(n), t && s.push.apply(s, n.getChildren(!0, e, i)))), n = n._next;
                    return s
                }, i.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                        if (e[i].vars.id === t) return e[i]
                }, i.remove = function(t) {
                    return j(t) ? this.removeLabel(t) : H(t) ? this.killTweensOf(t) : (tj(this, t), t === this._recent && (this._recent = this._last), tW(this))
                }, i.totalTime = function(e, i) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = tD(eD.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
                }, i.addLabel = function(t, e) {
                    return this.labels[t] = t7(this, e), this
                }, i.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, i.addPause = function(t, e, i) {
                    var r = e7.delayedCall(0, e || tu, i);
                    return r.data = "isPause", this._hasPause = 1, tQ(this, r, t7(this, t))
                }, i.removePause = function(t) {
                    var e = this._first;
                    for (t = t7(this, t); e;) e._start === t && "isPause" === e.data && tH(e), e = e._next
                }, i.killTweensOf = function(t, e, i) {
                    for (var r = this.getTweensOf(t, i), s = r.length; s--;) eX !== r[s] && r[s].kill(t, e);
                    return this
                }, i.getTweensOf = function(t, e) {
                    for (var i, r = [], s = en(t), n = this._first, o = W(e); n;) n instanceof e7 ? tE(n._targets, s) && (o ? (!eX || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && r.push(n) : (i = n.getTweensOf(s, e)).length && r.push.apply(r, i), n = n._next;
                    return r
                }, i.tweenTo = function(t, e) {
                    e = e || {};
                    var i, r = this,
                        s = t7(r, t),
                        n = e,
                        o = n.startAt,
                        a = n.onStart,
                        h = n.onStartParams,
                        l = n.immediateRender,
                        u = e7.to(r, tL({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: s,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((s - (o && "time" in o ? o.time : r._time)) / r.timeScale()) || 1e-8,
                            onStart: function() {
                                if (r.pause(), !i) {
                                    var t = e.duration || Math.abs((s - (o && "time" in o ? o.time : r._time)) / r.timeScale());
                                    u._dur !== t && t6(u, t, 0, 1).render(u._time, !0, !0), i = 1
                                }
                                a && a.apply(u, h || [])
                            }
                        }, e));
                    return l ? u.render(0) : u
                }, i.tweenFromTo = function(t, e, i) {
                    return this.tweenTo(e, tL({
                        startAt: {
                            time: t7(this, t)
                        }
                    }, i))
                }, i.recent = function() {
                    return this._recent
                }, i.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), eg(this, t7(this, t))
                }, i.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), eg(this, t7(this, t), 1)
                }, i.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
                }, i.shiftChildren = function(t, e, i) {
                    void 0 === i && (i = 0);
                    for (var r, s = this._first, n = this.labels; s;) s._start >= i && (s._start += t, s._end += t), s = s._next;
                    if (e)
                        for (r in n) n[r] >= i && (n[r] += t);
                    return tW(this)
                }, i.invalidate = function(e) {
                    var i = this._first;
                    for (this._lock = 0; i;) i.invalidate(e), i = i._next;
                    return t.prototype.invalidate.call(this, e)
                }, i.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), tW(this)
                }, i.totalDuration = function(t) {
                    var e, i, r, s = 0,
                        n = this._last,
                        o = 1e8;
                    if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
                    if (this._dirty) {
                        for (r = this.parent; n;) e = n._prev, n._dirty && n.totalDuration(), (i = n._start) > o && this._sort && n._ts && !this._lock ? (this._lock = 1, tQ(this, n, i - n._delay, 1)._lock = 0) : o = i, i < 0 && n._ts && (s -= i, (!r && !this._dp || r && r.smoothChildTiming) && (this._start += i / this._ts, this._time -= i, this._tTime -= i), this.shiftChildren(-i, !1, -Infinity), o = 0), n._end > s && n._ts && (s = n._end), n = e;
                        t6(this, this === S && this._time > s ? this._time : s, 1, 1), this._dirty = 0
                    }
                    return this._tDur
                }, e.updateRoot = function(t) {
                    if (S._ts && (tA(S, tK(t, S)), P = eD.frame), eD.frame >= tv) {
                        tv += R.autoSleep || 120;
                        var e = S._first;
                        if ((!e || !e._ts) && R.autoSleep && eD._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || eD.sleep()
                        }
                    }
                }, e
            }(eW);
            tL(eU.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var eq, e$, eY, eK, eX, eZ, eG = function(t, e, i, r, s, n, o) {
                    var a, h, l, u, c, d, f, p, g = new ip(this._pt, t, e, 0, 1, ia, null, s),
                        m = 0,
                        b = 0;
                    for (g.b = i, g.e = r, i += "", r += "", (f = ~r.indexOf("random(")) && (r = ef(r)), n && (n(p = [i, r], t, e), i = p[0], r = p[1]), h = i.match(tt) || []; a = tt.exec(r);) u = a[0], c = r.substring(m, a.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), u !== h[b++] && (d = parseFloat(h[b - 1]) || 0, g._pt = {
                        _next: g._pt,
                        p: c || 1 === b ? c : ",",
                        s: d,
                        c: "=" === u.charAt(1) ? tO(d, u) - d : parseFloat(u) - d,
                        m: l && l < 4 ? Math.round : 0
                    }, m = tt.lastIndex);
                    return g.c = m < r.length ? r.substring(m, r.length) : "", g.fp = o, (te.test(r) || f) && (g.e = 0), this._pt = g, g
                },
                eQ = function(t, e, i, r, s, n, o, a, h, l) {
                    H(r) && (r = r(s || 0, t, n));
                    var u, c = t[e],
                        d = "get" !== i ? i : H(c) ? h ? t[e.indexOf("set") || !H(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : c,
                        f = H(c) ? h ? ie : it : e9;
                    if (j(r) && (~r.indexOf("random(") && (r = ef(r)), "=" === r.charAt(1) && ((u = tO(d, r) + (ei(d) || 0)) || 0 === u) && (r = u)), !l || d !== r || eZ) return isNaN(d * r) || "" === r ? (c || e in t || ta(e, r), eG.call(this, t, e, d, r, f, a || R.stringFilter, h)) : (u = new ip(this._pt, t, e, +d || 0, r - (d || 0), "boolean" == typeof c ? io : is, 0, f), h && (u.fp = h), o && u.modifier(o, this, t), this._pt = u)
                },
                eJ = function(t, e, i, r, s) {
                    if (H(t) && (t = e6(t, s, e, i, r)), !q(t) || t.style && t.nodeType || Z(t) || X(t)) return j(t) ? e6(t, s, e, i, r) : t;
                    var n, o = {};
                    for (n in t) o[n] = e6(t[n], s, e, i, r);
                    return o
                },
                e0 = function(t, e, i, r, s, n) {
                    var o, a, h, l;
                    if (tb[t] && !1 !== (o = new tb[t]).init(s, o.rawVars ? e[t] : eJ(e[t], r, s, n, i), i, r, n) && (i._pt = a = new ip(i._pt, s, t, 0, 1, o.render, o, 0, o.priority), i !== A))
                        for (h = i._ptLookup[i._targets.indexOf(s)], l = o._props.length; l--;) h[o._props[l]] = a;
                    return o
                },
                e1 = function t(e, i, r) {
                    var s, n, o, a, h, l, u, c, d, f, p, g, m, b = e.vars,
                        _ = b.ease,
                        v = b.startAt,
                        y = b.immediateRender,
                        x = b.lazy,
                        M = b.onUpdate,
                        k = b.onUpdateParams,
                        D = b.callbackScope,
                        O = b.runBackwards,
                        E = b.yoyoEase,
                        P = b.keyframes,
                        A = b.autoRevert,
                        C = e._dur,
                        R = e._startAt,
                        B = e._targets,
                        V = e.parent,
                        I = V && "nested" === V.data ? V.vars.targets : B,
                        F = "auto" === e._overwrite && !w,
                        z = e.timeline;
                    if (!z || P && _ || (_ = "none"), e._ease = eI(_, L.ease), e._yEase = E ? eB(eI(!0 === E ? _ : E, L.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !z && !!b.runBackwards, !z || P && !b.stagger) {
                        if (g = (c = B[0] ? tT(B[0]).harness : 0) && b[c.prop], s = tI(b, tp), R && (R._zTime < 0 && R.progress(1), i < 0 && O && y && !A ? R.render(-1, !0) : R.revert(O && C ? td : tc), R._lazy = 0), v) {
                            if (tH(e._startAt = e7.set(B, tL({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: V,
                                    immediateRender: !0,
                                    lazy: $(x),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: M,
                                    onUpdateParams: k,
                                    callbackScope: D,
                                    stagger: 0
                                }, v))), e._startAt._dp = 0, i < 0 && (T || !y && !A) && e._startAt.revert(td), y && C && i <= 0 && r <= 0) {
                                i && (e._zTime = i);
                                return
                            }
                        } else if (O && C && !R)
                            if (i && (y = !1), o = tL({
                                    overwrite: !1,
                                    data: "isFromStart",
                                    lazy: y && $(x),
                                    immediateRender: y,
                                    stagger: 0,
                                    parent: V
                                }, s), g && (o[c.prop] = g), tH(e._startAt = e7.set(B, o)), e._startAt._dp = 0, i < 0 && (T ? e._startAt.revert(td) : e._startAt.render(-1, !0)), e._zTime = i, y) {
                                if (!i) return
                            } else t(e._startAt, 1e-8, 1e-8);
                        for (n = 0, e._pt = e._ptCache = 0, x = C && $(x) || x && !C; n < B.length; n++) {
                            if (u = (h = B[n])._gsap || tw(B)[n]._gsap, e._ptLookup[n] = f = {}, tm[u.id] && tg.length && tP(), p = I === B ? n : I.indexOf(h), c && !1 !== (d = new c).init(h, g || s, e, p, I) && (e._pt = a = new ip(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function(t) {
                                    f[t] = a
                                }), d.priority && (l = 1)), !c || g)
                                for (o in s) tb[o] && (d = e0(o, s, e, p, h, I)) ? d.priority && (l = 1) : f[o] = a = eQ.call(e, h, o, "get", s[o], p, I, 0, b.stringFilter);
                            e._op && e._op[n] && e.kill(h, e._op[n]), F && e._pt && (eX = e, S.killTweensOf(h, f, e.globalTime(i)), m = !e.parent, eX = 0), e._pt && x && (tm[u.id] = 1)
                        }
                        l && id(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = M, e._initted = (!e._op || e._pt) && !m, P && i <= 0 && z.render(1e8, !0, !0)
                },
                e2 = function(t, e, i, r, s, n, o) {
                    var a, h, l, u, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!c)
                        for (c = t._ptCache[e] = [], l = t._ptLookup, u = t._targets.length; u--;) {
                            if ((a = l[u][e]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                            if (!a) return eZ = 1, t.vars[e] = "+=0", e1(t, o), eZ = 0, 1;
                            c.push(a)
                        }
                    for (u = c.length; u--;)(a = (h = c[u])._pt || h).s = (r || 0 === r) && !s ? r : a.s + (r || 0) + n * a.c, a.c = i - a.s, h.e && (h.e = tk(i) + ei(h.e)), h.b && (h.b = a.s + ei(h.b))
                },
                e5 = function(t, e) {
                    var i, r, s, n, o = t[0] ? tT(t[0]).harness : 0,
                        a = o && o.aliases;
                    if (!a) return e;
                    for (r in i = tB({}, e), a)
                        if (r in i)
                            for (s = (n = a[r].split(",")).length; s--;) i[n[s]] = i[r];
                    return i
                },
                e3 = function(t, e, i, r) {
                    var s, n, o = e.ease || r || "power1.inOut";
                    if (Z(e)) n = i[t] || (i[t] = []), e.forEach(function(t, i) {
                        return n.push({
                            t: i / (e.length - 1) * 100,
                            v: t,
                            e: o
                        })
                    });
                    else
                        for (s in e) n = i[s] || (i[s] = []), "ease" === s || n.push({
                            t: parseFloat(t),
                            v: e[s],
                            e: o
                        })
                },
                e6 = function(t, e, i, r, s) {
                    return H(t) ? t.call(e, i, r, s) : j(t) && ~t.indexOf("random(") ? ef(t) : t
                },
                e8 = tx + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                e4 = {};
            tS(e8 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
                return e4[t] = 1
            });
            var e7 = function(t) {
                function e(e, i, s, n) {
                    "number" == typeof i && (s.duration = i, i = s, s = null);
                    var o, a, h, l, u, c, d, f, p = t.call(this, n ? i : tF(i)) || this,
                        g = p.vars,
                        m = g.duration,
                        b = g.delay,
                        _ = g.immediateRender,
                        v = g.stagger,
                        y = g.overwrite,
                        x = g.keyframes,
                        T = g.defaults,
                        M = g.scrollTrigger,
                        k = g.yoyoEase,
                        D = i.parent || S,
                        O = (Z(e) || X(e) ? W(e[0]) : "length" in i) ? [e] : en(e);
                    if (p._targets = O.length ? tw(O) : th("GSAP target " + e + " not found. https://greensock.com", !R.nullTargetWarn) || [], p._ptLookup = [], p._overwrite = y, x || v || K(m) || K(b)) {
                        if (i = p.vars, (o = p.timeline = new eU({
                                data: "nested",
                                defaults: T || {},
                                targets: D && "nested" === D.data ? D.vars.targets : O
                            })).kill(), o.parent = o._dp = r(p), o._start = 0, v || K(m) || K(b)) {
                            if (l = O.length, d = v && eh(v), q(v))
                                for (u in v) ~e8.indexOf(u) && (f || (f = {}), f[u] = v[u]);
                            for (a = 0; a < l; a++)(h = tI(i, e4)).stagger = 0, k && (h.yoyoEase = k), f && tB(h, f), c = O[a], h.duration = +e6(m, r(p), a, c, O), h.delay = (+e6(b, r(p), a, c, O) || 0) - p._delay, !v && 1 === l && h.delay && (p._delay = b = h.delay, p._start += b, h.delay = 0), o.to(c, h, d ? d(a, c, O) : 0), o._ease = eE.none;
                            o.duration() ? m = b = 0 : p.timeline = 0
                        } else if (x) {
                            tF(tL(o.vars.defaults, {
                                ease: "none"
                            })), o._ease = eI(x.ease || i.ease || "none");
                            var E, P, A, C = 0;
                            if (Z(x)) x.forEach(function(t) {
                                return o.to(O, t, ">")
                            }), o.duration();
                            else {
                                for (u in h = {}, x) "ease" === u || "easeEach" === u || e3(u, x[u], h, x.easeEach);
                                for (u in h)
                                    for (a = 0, E = h[u].sort(function(t, e) {
                                            return t.t - e.t
                                        }), C = 0; a < E.length; a++)(A = {
                                        ease: (P = E[a]).e,
                                        duration: (P.t - (a ? E[a - 1].t : 0)) / 100 * m
                                    })[u] = P.v, o.to(O, A, C), C += A.duration;
                                o.duration() < m && o.to({}, {
                                    duration: m - o.duration()
                                })
                            }
                        }
                        m || p.duration(m = o.duration())
                    } else p.timeline = 0;
                    return !0 !== y || w || (eX = r(p), S.killTweensOf(O), eX = 0), tQ(D, r(p), s), i.reversed && p.reverse(), i.paused && p.paused(!0), (_ || !m && !x && p._start === tD(D._time) && $(_) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(r(p)) && "nested" !== D.data) && (p._tTime = -1e-8, p.render(Math.max(0, -b) || 0)), M && tJ(r(p), M), p
                }
                s(e, t);
                var i = e.prototype;
                return i.render = function(t, e, i) {
                    var r, s, n, o, a, h, l, u, c, d = this._time,
                        f = this._tDur,
                        p = this._dur,
                        g = t < 0,
                        m = t > f - 1e-8 && !g ? f : t < 1e-8 ? 0 : t;
                    if (p) {
                        if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                            if (r = m, u = this.timeline, this._repeat) {
                                if (o = p + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
                                if (r = tD(m % o), m === f ? (n = this._repeat, r = p) : ((n = ~~(m / o)) && n === m / o && (r = p, n--), r > p && (r = p)), (h = this._yoyo && 1 & n) && (c = this._yEase, r = p - r), a = tY(this._tTime, o), r === d && !i && this._initted) return this._tTime = m, this;
                                n !== a && (u && this._yEase && eV(u, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(tD(o * n), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (t0(this, g ? t : r, i, e, m)) return this._tTime = 0, this;
                                if (d !== this._time) return this;
                                if (p !== this._dur) return this.render(t, e, i)
                            }
                            if (this._tTime = m, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(r / p), this._from && (this.ratio = l = 1 - l), r && !d && !e && (em(this, "onStart"), this._tTime !== m)) return this;
                            for (s = this._pt; s;) s.r(l, s.d), s = s._next;
                            u && u.render(t < 0 ? t : !r && h ? -1e-8 : u._dur * u._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && tq(this, t, e, i), em(this, "onUpdate")), this._repeat && n !== a && this.vars.onRepeat && !e && this.parent && em(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (g && !this._onUpdate && tq(this, t, !0, !0), (t || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && tH(this, 1), !e && !(g && !d) && (m || d || h) && (em(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                        }
                    } else t5(this, t, e, i);
                    return this
                }, i.targets = function() {
                    return this._targets
                }, i.invalidate = function(e) {
                    return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
                }, i.resetTo = function(t, e, i, r) {
                    C || eD.wake(), this._ts || this.play();
                    var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return (this._initted || e1(this, s), e2(this, t, e, i, r, this._ease(s / this._dur), s)) ? this.resetTo(t, e, i, r) : (tZ(this, 0), this.parent || tN(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                }, i.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !t && (!e || "all" === e)) return this._lazy = this._pt = 0, this.parent ? eb(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, eX && !0 !== eX.vars.overwrite)._first || eb(this), this.parent && i !== this.timeline.totalDuration() && t6(this, this._dur * this.timeline._tDur / i, 0, 1), this
                    }
                    var r, s, n, o, a, h, l, u = this._targets,
                        c = t ? en(t) : u,
                        d = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && tz(u, c)) return "all" === e && (this._pt = 0), eb(this);
                    for (r = this._op = this._op || [], "all" !== e && (j(e) && (a = {}, tS(e, function(t) {
                            return a[t] = 1
                        }), e = a), e = e5(u, e)), l = u.length; l--;)
                        if (~c.indexOf(u[l]))
                            for (a in s = d[l], "all" === e ? (r[l] = e, o = s, n = {}) : (n = r[l] = r[l] || {}, o = e), o)(h = s && s[a]) && ("kill" in h.d && !0 !== h.d.kill(a) || tj(this, h, "_pt"), delete s[a]), "all" !== n && (n[a] = 1);
                    return this._initted && !this._pt && f && eb(this), this
                }, e.to = function(t, i) {
                    return new e(t, i, arguments[2])
                }, e.from = function(t, e) {
                    return t9(1, arguments)
                }, e.delayedCall = function(t, i, r, s) {
                    return new e(i, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: i,
                        onReverseComplete: i,
                        onCompleteParams: r,
                        onReverseCompleteParams: r,
                        callbackScope: s
                    })
                }, e.fromTo = function(t, e, i) {
                    return t9(2, arguments)
                }, e.set = function(t, i) {
                    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
                }, e.killTweensOf = function(t, e, i) {
                    return S.killTweensOf(t, e, i)
                }, e
            }(eW);
            tL(e7.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), tS("staggerTo,staggerFrom,staggerFromTo", function(t) {
                e7[t] = function() {
                    var e = new eU,
                        i = er.call(arguments, 0);
                    return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
                }
            });
            var e9 = function(t, e, i) {
                    return t[e] = i
                },
                it = function(t, e, i) {
                    return t[e](i)
                },
                ie = function(t, e, i, r) {
                    return t[e](r.fp, i)
                },
                ii = function(t, e, i) {
                    return t.setAttribute(e, i)
                },
                ir = function(t, e) {
                    return H(t[e]) ? it : U(t[e]) && t.setAttribute ? ii : e9
                },
                is = function(t, e) {
                    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
                },
                io = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                ia = function(t, e) {
                    var i = e._pt,
                        r = "";
                    if (!t && e.b) r = e.b;
                    else if (1 === t && e.e) r = e.e;
                    else {
                        for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
                        r += e.c
                    }
                    e.set(e.t, e.p, r, e)
                },
                ih = function(t, e) {
                    for (var i = e._pt; i;) i.r(t, i.d), i = i._next
                },
                il = function(t, e, i, r) {
                    for (var s, n = this._pt; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
                },
                iu = function(t) {
                    for (var e, i, r = this._pt; r;) i = r._next, (r.p !== t || r.op) && r.op !== t ? r.dep || (e = 1) : tj(this, r, "_pt"), r = i;
                    return !e
                },
                ic = function(t, e, i, r) {
                    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
                },
                id = function(t) {
                    for (var e, i, r, s, n = t._pt; n;) {
                        for (e = n._next, i = r; i && i.pr > n.pr;) i = i._next;
                        (n._prev = i ? i._prev : s) ? n._prev._next = n: r = n, (n._next = i) ? i._prev = n : s = n, n = e
                    }
                    t._pt = r
                },
                ip = function() {
                    function t(t, e, i, r, s, n, o, a, h) {
                        this.t = e, this.s = r, this.c = s, this.p = i, this.r = n || is, this.d = o || this, this.set = a || e9, this.pr = h || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, i) {
                        this.mSet = this.mSet || this.set, this.set = ic, this.m = t, this.mt = i, this.tween = e
                    }, t
                }();
            tS(tx + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
                return tp[t] = 1
            }), ts.TweenMax = ts.TweenLite = e7, ts.TimelineLite = ts.TimelineMax = eU, S = new eU({
                sortChildren: !1,
                defaults: L,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), R.stringFilter = ek;
            var ig = [],
                im = {},
                ib = [],
                i_ = 0,
                iv = function(t) {
                    return (im[t] || ib).map(function(t) {
                        return t()
                    })
                },
                iy = function() {
                    var t = Date.now(),
                        e = [];
                    t - i_ > 2 && (iv("matchMediaInit"), ig.forEach(function(t) {
                        var i, r, s, n, o = t.queries,
                            a = t.conditions;
                        for (r in o)(i = k.matchMedia(o[r]).matches) && (s = 1), i !== a[r] && (a[r] = i, n = 1);
                        n && (t.revert(), s && e.push(t))
                    }), iv("matchMediaRevert"), e.forEach(function(t) {
                        return t.onMatch(t)
                    }), i_ = t, iv("matchMedia"))
                },
                ix = function() {
                    function t(t, e) {
                        this.selector = e && eo(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, i) {
                        H(t) && (i = e, e = t, t = H);
                        var r = this,
                            s = function() {
                                var t, s = M,
                                    n = r.selector;
                                return s && s !== r && s.data.push(r), i && (r.selector = eo(i)), M = r, t = e.apply(r, arguments), H(t) && r._r.push(t), M = s, r.selector = n, r.isReverted = !1, t
                            };
                        return r.last = s, t === H ? s(r) : t ? r[t] = s : s
                    }, e.ignore = function(t) {
                        var e = M;
                        M = null, t(this), M = e
                    }, e.getTweens = function() {
                        var e = [];
                        return this.data.forEach(function(i) {
                            return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof e7 && !(i.parent && "nested" === i.parent.data) && e.push(i)
                        }), e
                    }, e.clear = function() {
                        this._r.length = this.data.length = 0
                    }, e.kill = function(t, e) {
                        var i = this;
                        if (t) {
                            var r = this.getTweens();
                            this.data.forEach(function(t) {
                                "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                                    return r.splice(r.indexOf(t), 1)
                                }))
                            }), r.map(function(t) {
                                return {
                                    g: t.globalTime(0),
                                    t: t
                                }
                            }).sort(function(t, e) {
                                return e.g - t.g || -1
                            }).forEach(function(e) {
                                return e.t.revert(t)
                            }), this.data.forEach(function(e) {
                                return !(e instanceof eW) && e.revert && e.revert(t)
                            }), this._r.forEach(function(e) {
                                return e(t, i)
                            }), this.isReverted = !0
                        } else this.data.forEach(function(t) {
                            return t.kill && t.kill()
                        });
                        if (this.clear(), e) {
                            var s = ig.indexOf(this);
                            ~s && ig.splice(s, 1)
                        }
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, t
                }(),
                iw = function() {
                    function t(t) {
                        this.contexts = [], this.scope = t
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, i) {
                        q(t) || (t = {
                            matches: t
                        });
                        var r, s, n, o = new ix(0, i || this.scope),
                            a = o.conditions = {};
                        for (s in this.contexts.push(o), e = o.add("onMatch", e), o.queries = t, t) "all" === s ? n = 1 : (r = k.matchMedia(t[s])) && (0 > ig.indexOf(o) && ig.push(o), (a[s] = r.matches) && (n = 1), r.addListener ? r.addListener(iy) : r.addEventListener("change", iy));
                        return n && e(o), this
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, e.kill = function(t) {
                        this.contexts.forEach(function(e) {
                            return e.kill(t, !0)
                        })
                    }, t
                }(),
                iT = {
                    registerPlugin: function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        e.forEach(function(t) {
                            return e_(t)
                        })
                    },
                    timeline: function(t) {
                        return new eU(t)
                    },
                    getTweensOf: function(t, e) {
                        return S.getTweensOf(t, e)
                    },
                    getProperty: function(t, e, i, r) {
                        j(t) && (t = en(t)[0]);
                        var s = tT(t || {}).get,
                            n = i ? tR : tC;
                        return "native" === i && (i = ""), t ? e ? n((tb[e] && tb[e].get || s)(t, e, i, r)) : function(e, i, r) {
                            return n((tb[e] && tb[e].get || s)(t, e, i, r))
                        } : t
                    },
                    quickSetter: function(t, e, i) {
                        if ((t = en(t)).length > 1) {
                            var r = t.map(function(t) {
                                    return iD.quickSetter(t, e, i)
                                }),
                                s = r.length;
                            return function(t) {
                                for (var e = s; e--;) r[e](t)
                            }
                        }
                        t = t[0] || {};
                        var n = tb[e],
                            o = tT(t),
                            a = o.harness && (o.harness.aliases || {})[e] || e,
                            h = n ? function(e) {
                                var r = new n;
                                A._pt = 0, r.init(t, i ? e + i : e, A, 0, [t]), r.render(1, r), A._pt && ih(1, A)
                            } : o.set(t, a);
                        return n ? h : function(e) {
                            return h(t, a, i ? e + i : e, o, 1)
                        }
                    },
                    quickTo: function(t, e, i) {
                        var r, s = iD.to(t, tB(((r = {})[e] = "+=0.1", r.paused = !0, r), i || {})),
                            n = function(t, i, r) {
                                return s.resetTo(e, t, i, r)
                            };
                        return n.tween = s, n
                    },
                    isTweening: function(t) {
                        return S.getTweensOf(t, !0).length > 0
                    },
                    defaults: function(t) {
                        return t && t.ease && (t.ease = eI(t.ease, L.ease)), tV(L, t || {})
                    },
                    config: function(t) {
                        return tV(R, t || {})
                    },
                    registerEffect: function(t) {
                        var e = t.name,
                            i = t.effect,
                            r = t.plugins,
                            s = t.defaults,
                            n = t.extendTimeline;
                        (r || "").split(",").forEach(function(t) {
                            return t && !tb[t] && !ts[t] && th(e + " effect requires " + t + " plugin.")
                        }), t_[e] = function(t, e, r) {
                            return i(en(t), tL(e || {}, s), r)
                        }, n && (eU.prototype[e] = function(t, i, r) {
                            return this.add(t_[e](t, q(i) ? i : (r = i) && {}, this), r)
                        })
                    },
                    registerEase: function(t, e) {
                        eE[t] = eI(e)
                    },
                    parseEase: function(t, e) {
                        return arguments.length ? eI(t, e) : eE
                    },
                    getById: function(t) {
                        return S.getById(t)
                    },
                    exportRoot: function(t, e) {
                        void 0 === t && (t = {});
                        var i, r, s = new eU(t);
                        for (s.smoothChildTiming = $(t.smoothChildTiming), S.remove(s), s._dp = 0, s._time = s._tTime = S._time, i = S._first; i;) r = i._next, (e || !(!i._dur && i instanceof e7 && i.vars.onComplete === i._targets[0])) && tQ(s, i, i._start - i._delay), i = r;
                        return tQ(S, s, 0), s
                    },
                    context: function(t, e) {
                        return t ? new ix(t, e) : M
                    },
                    matchMedia: function(t) {
                        return new iw(t)
                    },
                    matchMediaRefresh: function() {
                        return ig.forEach(function(t) {
                            var e, i, r = t.conditions;
                            for (i in r) r[i] && (r[i] = !1, e = 1);
                            e && t.revert()
                        }) || iy()
                    },
                    addEventListener: function(t, e) {
                        var i = im[t] || (im[t] = []);
                        ~i.indexOf(e) || i.push(e)
                    },
                    removeEventListener: function(t, e) {
                        var i = im[t],
                            r = i && i.indexOf(e);
                        r >= 0 && i.splice(r, 1)
                    },
                    utils: {
                        wrap: function t(e, i, r) {
                            var s = i - e;
                            return Z(e) ? ed(e, t(0, e.length), i) : et(r, function(t) {
                                return (s + (t - e) % s) % s + e
                            })
                        },
                        wrapYoyo: function t(e, i, r) {
                            var s = i - e,
                                n = 2 * s;
                            return Z(e) ? ed(e, t(0, e.length - 1), i) : et(r, function(t) {
                                return t = (n + (t - e) % n) % n || 0, e + (t > s ? n - t : t)
                            })
                        },
                        distribute: eh,
                        random: ec,
                        snap: eu,
                        normalize: function(t, e, i) {
                            return ep(t, e, 0, 1, i)
                        },
                        getUnit: ei,
                        clamp: function(t, e, i) {
                            return et(i, function(i) {
                                return ee(t, e, i)
                            })
                        },
                        splitColor: ex,
                        toArray: en,
                        selector: eo,
                        mapRange: ep,
                        pipe: function() {
                            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return function(t) {
                                return e.reduce(function(t, e) {
                                    return e(t)
                                }, t)
                            }
                        },
                        unitize: function(t, e) {
                            return function(i) {
                                return t(parseFloat(i)) + (e || ei(i))
                            }
                        },
                        interpolate: function t(e, i, r, s) {
                            var n = isNaN(e + i) ? 0 : function(t) {
                                return (1 - t) * e + t * i
                            };
                            if (!n) {
                                var o, a, h, l, u, c = j(e),
                                    d = {};
                                if (!0 === r && (s = 1) && (r = null), c) e = {
                                    p: e
                                }, i = {
                                    p: i
                                };
                                else if (Z(e) && !Z(i)) {
                                    for (a = 1, h = [], u = (l = e.length) - 2; a < l; a++) h.push(t(e[a - 1], e[a]));
                                    l--, n = function(t) {
                                        var e = Math.min(u, ~~(t *= l));
                                        return h[e](t - e)
                                    }, r = i
                                } else s || (e = tB(Z(e) ? [] : {}, e));
                                if (!h) {
                                    for (o in i) eQ.call(d, e, o, "get", i[o]);
                                    n = function(t) {
                                        return ih(t, d) || (c ? e.p : e)
                                    }
                                }
                            }
                            return et(r, n)
                        },
                        shuffle: ea
                    },
                    install: to,
                    effects: t_,
                    ticker: eD,
                    updateRoot: eU.updateRoot,
                    plugins: tb,
                    globalTimeline: S,
                    core: {
                        PropTween: ip,
                        globals: tl,
                        Tween: e7,
                        Timeline: eU,
                        Animation: eW,
                        getCache: tT,
                        _removeLinkedListItem: tj,
                        reverting: function() {
                            return T
                        },
                        context: function(t) {
                            return t && M && (M.data.push(t), t._ctx = M), M
                        },
                        suppressOverwrites: function(t) {
                            return w = t
                        }
                    }
                };
            tS("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
                return iT[t] = e7[t]
            }), eD.add(eU.updateRoot), A = iT.to({}, {
                duration: 0
            });
            var iM = function(t, e) {
                    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                    return i
                },
                iS = function(t, e) {
                    var i, r, s, n = t._targets;
                    for (i in e)
                        for (r = n.length; r--;)(s = t._ptLookup[r][i]) && (s = s.d) && (s._pt && (s = iM(s, i)), s && s.modifier && s.modifier(e[i], t, n[r], i))
                },
                ik = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, i, r) {
                            r._onInit = function(t) {
                                var r, s;
                                if (j(i) && (r = {}, tS(i, function(t) {
                                        return r[t] = 1
                                    }), i = r), e) {
                                    for (s in r = {}, i) r[s] = e(i[s]);
                                    i = r
                                }
                                iS(t, i)
                            }
                        }
                    }
                },
                iD = iT.registerPlugin({
                    name: "attr",
                    init: function(t, e, i, r, s) {
                        var n, o, a;
                        for (n in this.tween = i, e) a = t.getAttribute(n) || "", (o = this.add(t, "setAttribute", (a || 0) + "", e[n], r, s, 0, 0, n)).op = n, o.b = a, this._props.push(n)
                    },
                    render: function(t, e) {
                        for (var i = e._pt; i;) T ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
                    }
                }, {
                    name: "endArray",
                    init: function(t, e) {
                        for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
                    }
                }, ik("roundProps", el), ik("modifiers"), ik("snap", eu)) || iT;
            e7.version = eU.version = iD.version = "3.11.3", E = 1, Y() && eO(), eE.Power0, eE.Power1, eE.Power2, eE.Power3, eE.Power4, eE.Linear, eE.Quad, eE.Cubic, eE.Quart, eE.Quint, eE.Strong, eE.Elastic, eE.Back, eE.SteppedEase, eE.Bounce, eE.Sine, eE.Expo, eE.Circ;
            var iO, iE, iP, iA, iC, iR, iL, iB = {},
                iV = 180 / Math.PI,
                iI = Math.PI / 180,
                iF = Math.atan2,
                iz = /([A-Z])/g,
                iN = /(left|right|width|margin|padding|x)/i,
                ij = /[\s,\(]\S/,
                iH = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                iW = function(t, e) {
                    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                iU = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                iq = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
                },
                i$ = function(t, e) {
                    var i = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
                },
                iY = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                iK = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                iX = function(t, e, i) {
                    return t.style[e] = i
                },
                iZ = function(t, e, i) {
                    return t.style.setProperty(e, i)
                },
                iG = function(t, e, i) {
                    return t._gsap[e] = i
                },
                iQ = function(t, e, i) {
                    return t._gsap.scaleX = t._gsap.scaleY = i
                },
                iJ = function(t, e, i, r, s) {
                    var n = t._gsap;
                    n.scaleX = n.scaleY = i, n.renderTransform(s, n)
                },
                i0 = function(t, e, i, r, s) {
                    var n = t._gsap;
                    n[e] = i, n.renderTransform(s, n)
                },
                i1 = "transform",
                i2 = i1 + "Origin",
                i5 = function(t, e) {
                    var i = this,
                        r = this.target,
                        s = r.style;
                    if (t in iB) {
                        if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = iH[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                                return i.tfm[t] = rc(r, t)
                            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : rc(r, t)), this.props.indexOf(i1) >= 0) return;
                        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(i2, e, "")), t = i1
                    }(s || e) && this.props.push(t, e, s[t])
                },
                i3 = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                i6 = function() {
                    var t, e, i = this.props,
                        r = this.target,
                        s = r.style,
                        n = r._gsap;
                    for (t = 0; t < i.length; t += 3) i[t + 1] ? r[i[t]] = i[t + 2] : i[t + 2] ? s[i[t]] = i[t + 2] : s.removeProperty(i[t].replace(iz, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) n[e] = this.tfm[e];
                        n.svg && (n.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (t = iR()) && !t.isStart && !s[i1] && (i3(s), n.uncache = 1)
                    }
                },
                i8 = function(t, e) {
                    var i = {
                        target: t,
                        props: [],
                        revert: i6,
                        save: i5
                    };
                    return e && e.split(",").forEach(function(t) {
                        return i.save(t)
                    }), i
                },
                i4 = function(t, e) {
                    var i = iO.createElementNS ? iO.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : iO.createElement(t);
                    return i.style ? i : iO.createElement(t)
                },
                i7 = function t(e, i, r) {
                    var s = getComputedStyle(e);
                    return s[i] || s.getPropertyValue(i.replace(iz, "-$1").toLowerCase()) || s.getPropertyValue(i) || !r && t(e, rt(i) || i, 1) || ""
                },
                i9 = "O,Moz,ms,Ms,Webkit".split(","),
                rt = function(t, e, i) {
                    var r = (e || iA).style,
                        s = 5;
                    if (t in r && !i) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(i9[s] + t in r););
                    return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? i9[s] : "") + t
                },
                re = function() {
                    "undefined" != typeof window && window.document && (iE = (iO = window.document).documentElement, iA = i4("div") || {
                        style: {}
                    }, i4("div"), i2 = (i1 = rt(i1)) + "Origin", iA.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", iL = !!rt("perspective"), iR = iD.core.reverting, iP = 1)
                },
                ri = function t(e) {
                    var i, r = i4("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        n = this.nextSibling,
                        o = this.style.cssText;
                    if (iE.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                        i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                    return s && (n ? s.insertBefore(this, n) : s.appendChild(this)), iE.removeChild(r), this.style.cssText = o, i
                },
                rr = function(t, e) {
                    for (var i = e.length; i--;)
                        if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
                },
                rs = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (i) {
                        e = ri.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === ri || (e = ri.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +rr(t, ["x", "cx", "x1"]) || 0,
                        y: +rr(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                rn = function(t) {
                    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && rs(t))
                },
                ro = function(t, e) {
                    if (e) {
                        var i = t.style;
                        e in iB && e !== i2 && (e = i1), i.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), i.removeProperty(e.replace(iz, "-$1").toLowerCase())) : i.removeAttribute(e)
                    }
                },
                ra = function(t, e, i, r, s, n) {
                    var o = new ip(t._pt, e, i, 0, 1, n ? iK : iY);
                    return t._pt = o, o.b = r, o.e = s, t._props.push(i), o
                },
                rh = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                rl = {
                    grid: 1,
                    flex: 1
                },
                ru = function t(e, i, r, s) {
                    var n, o, a, h, l = parseFloat(r) || 0,
                        u = (r + "").trim().substr((l + "").length) || "px",
                        c = iA.style,
                        d = iN.test(i),
                        f = "svg" === e.tagName.toLowerCase(),
                        p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
                        g = "px" === s,
                        m = "%" === s;
                    return s === u || !l || rh[s] || rh[u] ? l : ("px" === u || g || (l = t(e, i, r, "px")), h = e.getCTM && rn(e), (m || "%" === u) && (iB[i] || ~i.indexOf("adius"))) ? (n = h ? e.getBBox()[d ? "width" : "height"] : e[p], tk(m ? l / n * 100 : l / 100 * n)) : (c[d ? "width" : "height"] = 100 + (g ? u : s), o = ~i.indexOf("adius") || "em" === s && e.appendChild && !f ? e : e.parentNode, h && (o = (e.ownerSVGElement || {}).parentNode), o && o !== iO && o.appendChild || (o = iO.body), (a = o._gsap) && m && a.width && d && a.time === eD.time && !a.uncache) ? tk(l / a.width * 100) : ((m || "%" === u) && !rl[i7(o, "display")] && (c.position = i7(e, "position")), o === e && (c.position = "static"), o.appendChild(iA), n = iA[p], o.removeChild(iA), c.position = "absolute", d && m && ((a = tT(o)).time = eD.time, a.width = o[p]), tk(g ? n * l / 100 : n && l ? 100 / n * l : 0))
                },
                rc = function(t, e, i, r) {
                    var s;
                    return iP || re(), e in iH && "transform" !== e && ~(e = iH[e]).indexOf(",") && (e = e.split(",")[0]), iB[e] && "transform" !== e ? (s = rT(t, r), s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : rM(i7(t, i2)) + " " + s.zOrigin + "px") : (!(s = t.style[e]) || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = rm[e] && rm[e](t, e, i) || i7(t, e) || tM(t, e) || +("opacity" === e)), i && !~(s + "").trim().indexOf(" ") ? ru(t, e, s, i) + i : s
                },
                rd = function(t, e, i, r) {
                    if (!i || "none" === i) {
                        var s = rt(e, t, 1),
                            n = s && i7(t, s, 1);
                        n && n !== i ? (e = s, i = n) : "borderColor" === e && (i = i7(t, "borderTopColor"))
                    }
                    var o, a, h, l, u, c, d, f, p, g, m, b = new ip(this._pt, t.style, e, 0, 1, ia),
                        _ = 0,
                        v = 0;
                    if (b.b = i, b.e = r, i += "", "auto" == (r += "") && (t.style[e] = r, r = i7(t, e) || r, t.style[e] = i), ek(o = [i, r]), i = o[0], r = o[1], h = i.match(J) || [], (r.match(J) || []).length) {
                        for (; a = J.exec(r);) d = a[0], p = r.substring(_, a.index), u ? u = (u + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (u = 1), d !== (c = h[v++] || "") && (l = parseFloat(c) || 0, m = c.substr((l + "").length), "=" === d.charAt(1) && (d = tO(l, d) + m), f = parseFloat(d), g = d.substr((f + "").length), _ = J.lastIndex - g.length, g || (g = g || R.units[e] || m, _ === r.length && (r += g, b.e += g)), m !== g && (l = ru(t, e, c, g) || 0), b._pt = {
                            _next: b._pt,
                            p: p || 1 === v ? p : ",",
                            s: l,
                            c: f - l,
                            m: u && u < 4 || "zIndex" === e ? Math.round : 0
                        });
                        b.c = _ < r.length ? r.substring(_, r.length) : ""
                    } else b.r = "display" === e && "none" === r ? iK : iY;
                    return te.test(r) && (b.e = 0), this._pt = b, b
                },
                rf = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                rp = function(t) {
                    var e = t.split(" "),
                        i = e[0],
                        r = e[1] || "50%";
                    return ("top" === i || "bottom" === i || "left" === r || "right" === r) && (t = i, i = r, r = t), e[0] = rf[i] || i, e[1] = rf[r] || r, e.join(" ")
                },
                rg = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var i, r, s, n = e.t,
                            o = n.style,
                            a = e.u,
                            h = n._gsap;
                        if ("all" === a || !0 === a) o.cssText = "", r = 1;
                        else
                            for (s = (a = a.split(",")).length; --s > -1;) iB[i = a[s]] && (r = 1, i = "transformOrigin" === i ? i2 : i1), ro(n, i);
                        r && (ro(n, i1), h && (h.svg && n.removeAttribute("transform"), rT(n, 1), h.uncache = 1, i3(o)))
                    }
                },
                rm = {
                    clearProps: function(t, e, i, r, s) {
                        if ("isFromStart" !== s.data) {
                            var n = t._pt = new ip(t._pt, e, i, 0, 0, rg);
                            return n.u = r, n.pr = -10, n.tween = s, t._props.push(i), 1
                        }
                    }
                },
                rb = [1, 0, 0, 1, 0, 0],
                r_ = {},
                rv = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                ry = function(t) {
                    var e = i7(t, i1);
                    return rv(e) ? rb : e.substr(7).match(Q).map(tk)
                },
                rx = function(t, e) {
                    var i, r, s, n, o = t._gsap || tT(t),
                        a = t.style,
                        h = ry(t);
                    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? rb : h : (h !== rb || t.offsetParent || t === iE || o.svg || (s = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, r = t.nextElementSibling, iE.appendChild(t)), h = ry(t), s ? a.display = s : ro(t, "display"), n && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : iE.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
                },
                rw = function(t, e, i, r, s, n) {
                    var o, a, h, l, u = t._gsap,
                        c = s || rx(t, !0),
                        d = u.xOrigin || 0,
                        f = u.yOrigin || 0,
                        p = u.xOffset || 0,
                        g = u.yOffset || 0,
                        m = c[0],
                        b = c[1],
                        _ = c[2],
                        v = c[3],
                        y = c[4],
                        x = c[5],
                        w = e.split(" "),
                        T = parseFloat(w[0]) || 0,
                        M = parseFloat(w[1]) || 0;
                    i ? c !== rb && (a = m * v - b * _) && (h = v / a * T + -_ / a * M + (_ * x - v * y) / a, l = -b / a * T + m / a * M - (m * x - b * y) / a, T = h, M = l) : (T = (o = rs(t)).x + (~w[0].indexOf("%") ? T / 100 * o.width : T), M = o.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * o.height : M)), r || !1 !== r && u.smooth ? (u.xOffset = p + ((y = T - d) * m + (x = M - f) * _) - y, u.yOffset = g + (y * b + x * v) - x) : u.xOffset = u.yOffset = 0, u.xOrigin = T, u.yOrigin = M, u.smooth = !!r, u.origin = e, u.originIsAbsolute = !!i, t.style[i2] = "0px 0px", n && (ra(n, u, "xOrigin", d, T), ra(n, u, "yOrigin", f, M), ra(n, u, "xOffset", p, u.xOffset), ra(n, u, "yOffset", g, u.yOffset)), t.setAttribute("data-svg-origin", T + " " + M)
                },
                rT = function(t, e) {
                    var i = t._gsap || new eH(t);
                    if ("x" in i && !e && !i.uncache) return i;
                    var r, s, n, o, a, h, l, u, c, d, f, p, g, m, b, _, v, y, x, w, T, M, S, k, D, O, E, P, A, C, L, B, V = t.style,
                        I = i.scaleX < 0,
                        F = getComputedStyle(t),
                        z = i7(t, i2) || "0";
                    return r = s = n = h = l = u = c = d = f = 0, o = a = 1, i.svg = !!(t.getCTM && rn(t)), F.translate && (("none" !== F.translate || "none" !== F.scale || "none" !== F.rotate) && (V[i1] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[i1] ? F[i1] : "")), V.scale = V.rotate = V.translate = "none"), m = rx(t, i.svg), i.svg && (i.uncache ? (D = t.getBBox(), z = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px", k = "") : k = !e && t.getAttribute("data-svg-origin"), rw(t, k || z, !!k || i.originIsAbsolute, !1 !== i.smooth, m)), p = i.xOrigin || 0, g = i.yOrigin || 0, m !== rb && (y = m[0], x = m[1], w = m[2], T = m[3], r = M = m[4], s = S = m[5], 6 === m.length ? (o = Math.sqrt(y * y + x * x), a = Math.sqrt(T * T + w * w), h = y || x ? iF(x, y) * iV : 0, (c = w || T ? iF(w, T) * iV + h : 0) && (a *= Math.abs(Math.cos(c * iI))), i.svg && (r -= p - (p * y + g * w), s -= g - (p * x + g * T))) : (B = m[6], C = m[7], E = m[8], P = m[9], A = m[10], L = m[11], r = m[12], s = m[13], n = m[14], l = (b = iF(B, A)) * iV, b && (k = M * (_ = Math.cos(-b)) + E * (v = Math.sin(-b)), D = S * _ + P * v, O = B * _ + A * v, E = -(M * v) + E * _, P = -(S * v) + P * _, A = -(B * v) + A * _, L = -(C * v) + L * _, M = k, S = D, B = O), u = (b = iF(-w, A)) * iV, b && (k = y * (_ = Math.cos(-b)) - E * (v = Math.sin(-b)), D = x * _ - P * v, O = w * _ - A * v, L = T * v + L * _, y = k, x = D, w = O), h = (b = iF(x, y)) * iV, b && (k = y * (_ = Math.cos(b)) + x * (v = Math.sin(b)), D = M * _ + S * v, x = x * _ - y * v, S = S * _ - M * v, y = k, M = D), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, u = 180 - u), o = tk(Math.sqrt(y * y + x * x + w * w)), a = tk(Math.sqrt(S * S + B * B)), c = Math.abs(b = iF(M, S)) > 2e-4 ? b * iV : 0, f = L ? 1 / (L < 0 ? -L : L) : 0), i.svg && (k = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !rv(i7(t, i1)), k && t.setAttribute("transform", k))), Math.abs(c) > 90 && 270 > Math.abs(c) && (I ? (o *= -1, c += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), e = e || i.uncache, i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = s - ((i.yPercent = s && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = n + "px", i.scaleX = tk(o), i.scaleY = tk(a), i.rotation = tk(h) + "deg", i.rotationX = tk(l) + "deg", i.rotationY = tk(u) + "deg", i.skewX = c + "deg", i.skewY = d + "deg", i.transformPerspective = f + "px", (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (V[i2] = rM(z)), i.xOffset = i.yOffset = 0, i.force3D = R.force3D, i.renderTransform = i.svg ? rE : iL ? rO : rk, i.uncache = 0, i
                },
                rM = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                rS = function(t, e, i) {
                    var r = ei(e);
                    return tk(parseFloat(e) + parseFloat(ru(t, "x", i + "px", r))) + r
                },
                rk = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, rO(t, e)
                },
                rD = "0deg",
                rO = function(t, e) {
                    var i = e || this,
                        r = i.xPercent,
                        s = i.yPercent,
                        n = i.x,
                        o = i.y,
                        a = i.z,
                        h = i.rotation,
                        l = i.rotationY,
                        u = i.rotationX,
                        c = i.skewX,
                        d = i.skewY,
                        f = i.scaleX,
                        p = i.scaleY,
                        g = i.transformPerspective,
                        m = i.force3D,
                        b = i.target,
                        _ = i.zOrigin,
                        v = "",
                        y = "auto" === m && t && 1 !== t || !0 === m;
                    if (_ && (u !== rD || l !== rD)) {
                        var x, w = parseFloat(l) * iI,
                            T = Math.sin(w),
                            M = Math.cos(w);
                        n = rS(b, n, -(T * (x = Math.cos(w = parseFloat(u) * iI)) * _)), o = rS(b, o, -(-Math.sin(w) * _)), a = rS(b, a, -(M * x * _) + _)
                    }
                    "0px" !== g && (v += "perspective(" + g + ") "), (r || s) && (v += "translate(" + r + "%, " + s + "%) "), (y || "0px" !== n || "0px" !== o || "0px" !== a) && (v += "0px" !== a || y ? "translate3d(" + n + ", " + o + ", " + a + ") " : "translate(" + n + ", " + o + ") "), h !== rD && (v += "rotate(" + h + ") "), l !== rD && (v += "rotateY(" + l + ") "), u !== rD && (v += "rotateX(" + u + ") "), (c !== rD || d !== rD) && (v += "skew(" + c + ", " + d + ") "), (1 !== f || 1 !== p) && (v += "scale(" + f + ", " + p + ") "), b.style[i1] = v || "translate(0, 0)"
                },
                rE = function(t, e) {
                    var i, r, s, n, o, a = e || this,
                        h = a.xPercent,
                        l = a.yPercent,
                        u = a.x,
                        c = a.y,
                        d = a.rotation,
                        f = a.skewX,
                        p = a.skewY,
                        g = a.scaleX,
                        m = a.scaleY,
                        b = a.target,
                        _ = a.xOrigin,
                        v = a.yOrigin,
                        y = a.xOffset,
                        x = a.yOffset,
                        w = a.forceCSS,
                        T = parseFloat(u),
                        M = parseFloat(c);
                    d = parseFloat(d), f = parseFloat(f), (p = parseFloat(p)) && (f += p = parseFloat(p), d += p), d || f ? (d *= iI, f *= iI, i = Math.cos(d) * g, r = Math.sin(d) * g, s = -(Math.sin(d - f) * m), n = Math.cos(d - f) * m, f && (p *= iI, s *= o = Math.sqrt(1 + (o = Math.tan(f - p)) * o), n *= o, p && (i *= o = Math.sqrt(1 + (o = Math.tan(p)) * o), r *= o)), i = tk(i), r = tk(r), s = tk(s), n = tk(n)) : (i = g, n = m, r = s = 0), (T && !~(u + "").indexOf("px") || M && !~(c + "").indexOf("px")) && (T = ru(b, "x", u, "px"), M = ru(b, "y", c, "px")), (_ || v || y || x) && (T = tk(T + _ - (_ * i + v * s) + y), M = tk(M + v - (_ * r + v * n) + x)), (h || l) && (T = tk(T + h / 100 * (o = b.getBBox()).width), M = tk(M + l / 100 * o.height)), o = "matrix(" + i + "," + r + "," + s + "," + n + "," + T + "," + M + ")", b.setAttribute("transform", o), w && (b.style[i1] = o)
                },
                rP = function(t, e, i, r, s) {
                    var n, o, a = j(s),
                        h = parseFloat(s) * (a && ~s.indexOf("rad") ? iV : 1) - r,
                        l = r + h + "deg";
                    return a && ("short" === (n = s.split("_")[1]) && (h %= 360) != h % 180 && (h += h < 0 ? 360 : -360), "cw" === n && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === n && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = o = new ip(t._pt, e, i, r, h, iU), o.e = l, o.u = "deg", t._props.push(i), o
                },
                rA = function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                rC = function(t, e, i) {
                    var r, s, n, o, a, h, l, u = rA({}, i._gsap),
                        c = i.style;
                    for (s in u.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), c[i1] = e, r = rT(i, 1), ro(i, i1), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[i1], c[i1] = e, r = rT(i, 1), c[i1] = n), iB)(n = u[s]) !== (o = r[s]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) && (a = ei(n) !== (l = ei(o)) ? ru(i, s, n, l) : parseFloat(n), h = parseFloat(o), t._pt = new ip(t._pt, r, s, a, h - a, iW), t._pt.u = l || 0, t._props.push(s));
                    rA(r, u)
                };
            tS("padding,margin,Width,Radius", function(t, e) {
                var i = "Right",
                    r = "Bottom",
                    s = "Left",
                    n = (e < 3 ? ["Top", i, r, s] : ["Top" + s, "Top" + i, r + i, r + s]).map(function(i) {
                        return e < 2 ? t + i : "border" + i + t
                    });
                rm[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
                    var o, a;
                    if (arguments.length < 4) return 5 === (a = (o = n.map(function(e) {
                        return rc(t, e, i)
                    })).join(" ")).split(o[0]).length ? o[0] : a;
                    o = (r + "").split(" "), a = {}, n.forEach(function(t, e) {
                        return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                    }), t.init(e, a, s)
                }
            });
            var rR = {
                name: "css",
                register: re,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, i, r, s) {
                    var n, o, a, h, l, u, c, d, f, p, g, m, b, _, v, y, x = this._props,
                        w = t.style,
                        T = i.vars.startAt;
                    for (c in iP || re(), this.styles = this.styles || i8(t), y = this.styles.props, this.tween = i, e)
                        if ("autoRound" !== c && (o = e[c], !(tb[c] && e0(c, e, i, r, t, s)))) {
                            if (l = typeof o, u = rm[c], "function" === l && (l = typeof(o = o.call(i, r, t, s))), "string" === l && ~o.indexOf("random(") && (o = ef(o)), u) u(this, t, c, o, i) && (v = 1);
                            else if ("--" === c.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", eM.lastIndex = 0, eM.test(n) || (d = ei(n), f = ei(o)), f ? d !== f && (n = ru(t, c, n, f) + f) : d && (o += d), this.add(w, "setProperty", n, o, r, s, 0, 0, c), x.push(c), y.push(c, 0, w[c]);
                            else if ("undefined" !== l) {
                                if (T && c in T ? (j(n = "function" == typeof T[c] ? T[c].call(i, r, t, s) : T[c]) && ~n.indexOf("random(") && (n = ef(n)), ei(n + "") || (n += R.units[c] || ei(rc(t, c)) || ""), "=" === (n + "").charAt(1) && (n = rc(t, c))) : n = rc(t, c), h = parseFloat(n), (p = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), c in iH && ("autoAlpha" === c && (1 === h && "hidden" === rc(t, "visibility") && a && (h = 0), y.push("visibility", 0, w.visibility), ra(this, w, "visibility", h ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = iH[c]).indexOf(",") && (c = c.split(",")[0])), g = c in iB) {
                                    if (this.styles.save(c), m || ((b = t._gsap).renderTransform && !e.parseTransform || rT(t, e.parseTransform), _ = !1 !== e.smoothOrigin && b.smooth, (m = this._pt = new ip(this._pt, w, i1, 0, 1, b.renderTransform, b, 0, -1)).dep = 1), "scale" === c) this._pt = new ip(this._pt, b, "scaleY", h, (p ? tO(h, p + a) : a) - h || 0, iW), this._pt.u = 0, x.push("scaleY", c), c += "X";
                                    else if ("transformOrigin" === c) {
                                        y.push(i2, 0, w[i2]), o = rp(o), b.svg ? rw(t, o, 0, _, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== b.zOrigin && ra(this, b, "zOrigin", b.zOrigin, f), ra(this, w, c, rM(n), rM(o)));
                                        continue
                                    } else if ("svgOrigin" === c) {
                                        rw(t, o, 1, _, 0, this);
                                        continue
                                    } else if (c in r_) {
                                        rP(this, b, c, h, p ? tO(h, p + o) : o);
                                        continue
                                    } else if ("smoothOrigin" === c) {
                                        ra(this, b, "smooth", b.smooth, o);
                                        continue
                                    } else if ("force3D" === c) {
                                        b[c] = o;
                                        continue
                                    } else if ("transform" === c) {
                                        rC(this, o, t);
                                        continue
                                    }
                                } else c in w || (c = rt(c) || c);
                                if (g || (a || 0 === a) && (h || 0 === h) && !ij.test(o) && c in w) d = (n + "").substr((h + "").length), a || (a = 0), f = ei(o) || (c in R.units ? R.units[c] : d), d !== f && (h = ru(t, c, n, f)), this._pt = new ip(this._pt, g ? b : w, c, h, (p ? tO(h, p + a) : a) - h, !g && ("px" === f || "zIndex" === c) && !1 !== e.autoRound ? i$ : iW), this._pt.u = f || 0, d !== f && "%" !== f && (this._pt.b = n, this._pt.r = iq);
                                else if (c in w) rd.call(this, t, c, n, p ? p + o : o);
                                else if (c in t) this.add(t, c, n || t[c], p ? p + o : o, r, s);
                                else {
                                    ta(c, o);
                                    continue
                                }
                                g || (c in w ? y.push(c, 0, w[c]) : y.push(c, 1, n || t[c])), x.push(c)
                            }
                        } v && id(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !iR())
                        for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
                    else e.styles.revert()
                },
                get: rc,
                aliases: iH,
                getSetter: function(t, e, i) {
                    var r = iH[e];
                    return r && 0 > r.indexOf(",") && (e = r), e in iB && e !== i2 && (t._gsap.x || rc(t, "x")) ? i && iC === i ? "scale" === e ? iQ : iG : (iC = i || {}, "scale" === e ? iJ : i0) : t.style && !U(t.style[e]) ? iX : ~e.indexOf("-") ? iZ : ir(t, e)
                },
                core: {
                    _removeProperty: ro,
                    _getMatrix: rx
                }
            };
            iD.utils.checkPrefix = rt, iD.core.getStyleSaver = i8, o = tS("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
                iB[t] = 1
            }), tS(n, function(t) {
                R.units[t] = "deg", r_[t] = 1
            }), iH[o[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + n, tS("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
                var e = t.split(":");
                iH[e[1]] = o[e[0]]
            }), tS("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
                R.units[t] = "px"
            }), iD.registerPlugin(rR);
            var rL = iD.registerPlugin(rR) || iD;
            rL.core.Tween
        },
        91152: function(t, e, i) {
            "use strict";

            function r(t) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
            }

            function s(t, e) {
                return t & e
            }

            function n(t, e) {
                return t | e
            }

            function o(t, e) {
                return t ^ e
            }

            function a(t, e) {
                return t & ~e
            }
            i.d(e, {
                v: () => te
            });
            var h, l, u, c, d, f, p, g, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            function b(t) {
                var e, i, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), r += m.charAt(i >> 6) + m.charAt(63 & i);
                for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += m.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), r += m.charAt(i >> 2) + m.charAt((3 & i) << 4));
                    (3 & r.length) > 0;) r += "=";
                return r
            }

            function _(t) {
                var e, i = "",
                    s = 0,
                    n = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var o = m.indexOf(t.charAt(e));
                    o < 0 || (0 == s ? (i += r(o >> 2), n = 3 & o, s = 1) : 1 == s ? (i += r(n << 2 | o >> 4), n = 15 & o, s = 2) : 2 == s ? (i += r(n), i += r(o >> 2), n = 3 & o, s = 3) : (i += r(n << 2 | o >> 4), i += r(15 & o), s = 0))
                }
                return 1 == s && (i += r(n << 2)), i
            }
            var v = function(t) {
                    if (void 0 === h) {
                        var e, i = "0123456789ABCDEF",
                            r = " \f\n\r	\xa0\u2028\u2029";
                        for (e = 0, h = {}; e < 16; ++e) h[i.charAt(e)] = e;
                        for (e = 10, i = i.toLowerCase(); e < 16; ++e) h[i.charAt(e)] = e;
                        for (e = 0; e < r.length; ++e) h[r.charAt(e)] = -1
                    }
                    var s = [],
                        n = 0,
                        o = 0;
                    for (e = 0; e < t.length; ++e) {
                        var a = t.charAt(e);
                        if ("=" == a) break;
                        if (-1 != (a = h[a])) {
                            if (void 0 === a) throw Error("Illegal character at offset " + e);
                            n |= a, ++o >= 2 ? (s[s.length] = n, n = 0, o = 0) : n <<= 4
                        }
                    }
                    if (o) throw Error("Hex encoding incomplete: 4 bits missing");
                    return s
                },
                y = {
                    decode: function(t) {
                        if (void 0 === l) {
                            var e, i = "= \f\n\r	\xa0\u2028\u2029";
                            for (e = 0, l = Object.create(null); e < 64; ++e) l["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                            for (e = 0, l["-"] = 62, l._ = 63; e < i.length; ++e) l[i.charAt(e)] = -1
                        }
                        var r = [],
                            s = 0,
                            n = 0;
                        for (e = 0; e < t.length; ++e) {
                            var o = t.charAt(e);
                            if ("=" == o) break;
                            if (-1 != (o = l[o])) {
                                if (void 0 === o) throw Error("Illegal character at offset " + e);
                                s |= o, ++n >= 4 ? (r[r.length] = s >> 16, r[r.length] = s >> 8 & 255, r[r.length] = 255 & s, s = 0, n = 0) : s <<= 6
                            }
                        }
                        switch (n) {
                            case 1:
                                throw Error("Base64 encoding incomplete: at least 2 bits missing");
                            case 2:
                                r[r.length] = s >> 10;
                                break;
                            case 3:
                                r[r.length] = s >> 16, r[r.length] = s >> 8 & 255
                        }
                        return r
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function(t) {
                        var e = y.re.exec(t);
                        if (e)
                            if (e[1]) t = e[1];
                            else if (e[2]) t = e[2];
                        else throw Error("RegExp out of sync");
                        return y.decode(t)
                    }
                },
                x = function() {
                    function t(t) {
                        this.buf = [+t || 0]
                    }
                    return t.prototype.mulAdd = function(t, e) {
                        var i, r, s = this.buf,
                            n = s.length;
                        for (i = 0; i < n; ++i)(r = s[i] * t + e) < 1e13 ? e = 0 : (e = 0 | r / 1e13, r -= 1e13 * e), s[i] = r;
                        e > 0 && (s[i] = e)
                    }, t.prototype.sub = function(t) {
                        var e, i, r = this.buf,
                            s = r.length;
                        for (e = 0; e < s; ++e)(i = r[e] - t) < 0 ? (i += 1e13, t = 1) : t = 0, r[e] = i;
                        for (; 0 === r[r.length - 1];) r.pop()
                    }, t.prototype.toString = function(t) {
                        if (10 != (t || 10)) throw Error("only base 10 is supported");
                        for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; r >= 0; --r) i += (1e13 + e[r]).toString().substring(1);
                        return i
                    }, t.prototype.valueOf = function() {
                        for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i) e = 1e13 * e + t[i];
                        return e
                    }, t.prototype.simplify = function() {
                        var t = this.buf;
                        return 1 == t.length ? t[0] : this
                    }, t
                }(),
                w = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                T = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function M(t, e) {
                return t.length > e && (t = t.substring(0, e) + "…"), t
            }
            var S = function() {
                    function t(e, i) {
                        this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = i)
                    }
                    return t.prototype.get = function(t) {
                        if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                        return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                    }, t.prototype.hexByte = function(t) {
                        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                    }, t.prototype.hexDump = function(t, e, i) {
                        for (var r = "", s = t; s < e; ++s)
                            if (r += this.hexByte(this.get(s)), !0 !== i) switch (15 & s) {
                                case 7:
                                    r += "  ";
                                    break;
                                case 15:
                                    r += "\n";
                                    break;
                                default:
                                    r += " "
                            }
                        return r
                    }, t.prototype.isASCII = function(t, e) {
                        for (var i = t; i < e; ++i) {
                            var r = this.get(i);
                            if (r < 32 || r > 176) return !1
                        }
                        return !0
                    }, t.prototype.parseStringISO = function(t, e) {
                        for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                        return i
                    }, t.prototype.parseStringUTF = function(t, e) {
                        for (var i = "", r = t; r < e;) {
                            var s = this.get(r++);
                            s < 128 ? i += String.fromCharCode(s) : s > 191 && s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & this.get(r++)) : i += String.fromCharCode((15 & s) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                        }
                        return i
                    }, t.prototype.parseStringBMP = function(t, e) {
                        for (var i = "", r = t; r < e;) i += String.fromCharCode(this.get(r++) << 8 | this.get(r++));
                        return i
                    }, t.prototype.parseTime = function(t, e, i) {
                        var r = this.parseStringISO(t, e),
                            s = (i ? w : T).exec(r);
                        return s ? (i && (s[1] = +s[1], s[1] += 70 > +s[1] ? 2e3 : 1900), r = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4], s[5] && (r += ":" + s[5], s[6] && (r += ":" + s[6], s[7] && (r += "." + s[7]))), s[8] && (r += " UTC", "Z" != s[8] && (r += s[8], s[9] && (r += ":" + s[9]))), r) : "Unrecognized time: " + r
                    }, t.prototype.parseInteger = function(t, e) {
                        for (var i, r = this.get(t), s = r > 127, n = 255 * !!s, o = ""; r == n && ++t < e;) r = this.get(t);
                        if (0 == (i = e - t)) return s ? -1 : 0;
                        if (i > 4) {
                            for (o = r, i <<= 3;
                                ((o ^ n) & 128) == 0;) o <<= 1, --i;
                            o = "(" + i + " bit)\n"
                        }
                        s && (r -= 256);
                        for (var a = new x(r), h = t + 1; h < e; ++h) a.mulAdd(256, this.get(h));
                        return o + a.toString()
                    }, t.prototype.parseBitString = function(t, e, i) {
                        for (var r = this.get(t), s = "(" + ((e - t - 1 << 3) - r) + " bit)\n", n = "", o = t + 1; o < e; ++o) {
                            for (var a = this.get(o), h = o == e - 1 ? r : 0, l = 7; l >= h; --l) n += a >> l & 1 ? "1" : "0";
                            if (n.length > i) return s + M(n, i)
                        }
                        return s + n
                    }, t.prototype.parseOctetString = function(t, e, i) {
                        if (this.isASCII(t, e)) return M(this.parseStringISO(t, e), i);
                        var r = e - t,
                            s = "(" + r + " byte)\n";
                        r > (i /= 2) && (e = t + i);
                        for (var n = t; n < e; ++n) s += this.hexByte(this.get(n));
                        return r > i && (s += "…"), s
                    }, t.prototype.parseOID = function(t, e, i) {
                        for (var r = "", s = new x, n = 0, o = t; o < e; ++o) {
                            var a = this.get(o);
                            if (s.mulAdd(128, 127 & a), n += 7, !(128 & a)) {
                                if ("" === r)
                                    if ((s = s.simplify()) instanceof x) s.sub(80), r = "2." + s.toString();
                                    else {
                                        var h = s < 80 ? s < 40 ? 0 : 1 : 2;
                                        r = h + "." + (s - 40 * h)
                                    }
                                else r += "." + s.toString();
                                if (r.length > i) return M(r, i);
                                s = new x, n = 0
                            }
                        }
                        return n > 0 && (r += ".incomplete"), r
                    }, t
                }(),
                k = function() {
                    function t(t, e, i, r, s) {
                        if (!(r instanceof D)) throw Error("Invalid tag value.");
                        this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = s
                    }
                    return t.prototype.typeName = function() {
                        switch (this.tag.tagClass) {
                            case 0:
                                switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString"
                                }
                                return "Universal_" + this.tag.tagNumber.toString();
                            case 1:
                                return "Application_" + this.tag.tagNumber.toString();
                            case 2:
                                return "[" + this.tag.tagNumber.toString() + "]";
                            case 3:
                                return "Private_" + this.tag.tagNumber.toString()
                        }
                    }, t.prototype.content = function(t) {
                        if (void 0 === this.tag) return null;
                        void 0 === t && (t = 1 / 0);
                        var e = this.posContent(),
                            i = Math.abs(this.length);
                        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                        switch (this.tag.tagNumber) {
                            case 1:
                                return 0 === this.stream.get(e) ? "false" : "true";
                            case 2:
                                return this.stream.parseInteger(e, e + i);
                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                            case 6:
                                return this.stream.parseOID(e, e + i, t);
                            case 16:
                            case 17:
                                if (null !== this.sub) return "(" + this.sub.length + " elem)";
                                return "(no elem)";
                            case 12:
                                return M(this.stream.parseStringUTF(e, e + i), t);
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return M(this.stream.parseStringISO(e, e + i), t);
                            case 30:
                                return M(this.stream.parseStringBMP(e, e + i), t);
                            case 23:
                            case 24:
                                return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                        }
                        return null
                    }, t.prototype.toString = function() {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    }, t.prototype.toPrettyString = function(t) {
                        void 0 === t && (t = "");
                        var e = t + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : this.tag.isUniversal() && (3 == this.tag.tagNumber || 4 == this.tag.tagNumber) && null !== this.sub && (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                            t += "  ";
                            for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t)
                        }
                        return e
                    }, t.prototype.posStart = function() {
                        return this.stream.pos
                    }, t.prototype.posContent = function() {
                        return this.stream.pos + this.header
                    }, t.prototype.posEnd = function() {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    }, t.prototype.toHexString = function() {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    }, t.decodeLength = function(t) {
                        var e = t.get(),
                            i = 127 & e;
                        if (i == e) return i;
                        if (i > 6) throw Error("Length over 48 bits not supported at position " + (t.pos - 1));
                        if (0 === i) return null;
                        e = 0;
                        for (var r = 0; r < i; ++r) e = 256 * e + t.get();
                        return e
                    }, t.prototype.getHexStringValue = function() {
                        var t = this.toHexString(),
                            e = 2 * this.header,
                            i = 2 * this.length;
                        return t.substr(e, i)
                    }, t.decode = function(e) {
                        var i = e instanceof S ? e : new S(e, 0),
                            r = new S(i),
                            s = new D(i),
                            n = t.decodeLength(i),
                            o = i.pos,
                            a = o - r.pos,
                            h = null,
                            l = function() {
                                var e = [];
                                if (null !== n) {
                                    for (var r = o + n; i.pos < r;) e[e.length] = t.decode(i);
                                    if (i.pos != r) throw Error("Content size is not correct for container starting at offset " + o)
                                } else try {
                                    for (;;) {
                                        var s = t.decode(i);
                                        if (s.tag.isEOC()) break;
                                        e[e.length] = s
                                    }
                                    n = o - i.pos
                                } catch (t) {
                                    throw Error("Exception while decoding undefined length content: " + t)
                                }
                                return e
                            };
                        if (s.tagConstructed) h = l();
                        else if (s.isUniversal() && (3 == s.tagNumber || 4 == s.tagNumber)) try {
                            if (3 == s.tagNumber && 0 != i.get()) throw Error("BIT STRINGs with unused bits cannot encapsulate.");
                            h = l();
                            for (var u = 0; u < h.length; ++u)
                                if (h[u].tag.isEOC()) throw Error("EOC is not supposed to be actual content.")
                        } catch (t) {
                            h = null
                        }
                        if (null === h) {
                            if (null === n) throw Error("We can't skip over an invalid tag with undefined length at offset " + o);
                            i.pos = o + Math.abs(n)
                        }
                        return new t(r, a, n, s, h)
                    }, t
                }(),
                D = function() {
                    function t(t) {
                        var e = t.get();
                        if (this.tagClass = e >> 6, this.tagConstructed = (32 & e) != 0, this.tagNumber = 31 & e, 31 == this.tagNumber) {
                            var i = new x;
                            do e = t.get(), i.mulAdd(128, 127 & e); while (128 & e);
                            this.tagNumber = i.simplify()
                        }
                    }
                    return t.prototype.isUniversal = function() {
                        return 0 === this.tagClass
                    }, t.prototype.isEOC = function() {
                        return 0 === this.tagClass && 0 === this.tagNumber
                    }, t
                }(),
                O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                E = 0x4000000 / O[O.length - 1],
                P = function() {
                    function t(t, e, i) {
                        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                    }
                    return t.prototype.toString = function(t) {
                        if (this.s < 0) return "-" + this.negate().toString(t);
                        if (16 == t) e = 4;
                        else if (8 == t) e = 3;
                        else if (2 == t) e = 1;
                        else if (32 == t) e = 5;
                        else {
                            if (4 != t) return this.toRadix(t);
                            e = 2
                        }
                        var e, i, s = (1 << e) - 1,
                            n = !1,
                            o = "",
                            a = this.t,
                            h = this.DB - a * this.DB % e;
                        if (a-- > 0)
                            for (h < this.DB && (i = this[a] >> h) > 0 && (n = !0, o = r(i)); a >= 0;) h < e ? i = (this[a] & (1 << h) - 1) << e - h | this[--a] >> (h += this.DB - e) : (i = this[a] >> (h -= e) & s, h <= 0 && (h += this.DB, --a)), i > 0 && (n = !0), n && (o += r(i));
                        return n ? o : "0"
                    }, t.prototype.negate = function() {
                        var e = B();
                        return t.ZERO.subTo(this, e), e
                    }, t.prototype.abs = function() {
                        return this.s < 0 ? this.negate() : this
                    }, t.prototype.compareTo = function(t) {
                        var e = this.s - t.s;
                        if (0 != e) return e;
                        var i = this.t;
                        if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                        for (; --i >= 0;)
                            if (0 != (e = this[i] - t[i])) return e;
                        return 0
                    }, t.prototype.bitLength = function() {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + j(this[this.t - 1] ^ this.s & this.DM)
                    }, t.prototype.mod = function(e) {
                        var i = B();
                        return this.abs().divRemTo(e, null, i), this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i), i
                    }, t.prototype.modPowInt = function(t, e) {
                        var i;
                        return i = t < 256 || e.isEven() ? new C(e) : new R(e), this.exp(t, i)
                    }, t.prototype.clone = function() {
                        var t = B();
                        return this.copyTo(t), t
                    }, t.prototype.intValue = function() {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            else if (0 == this.t) return -1
                        } else if (1 == this.t) return this[0];
                        else if (0 == this.t) return 0;
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    }, t.prototype.byteValue = function() {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    }, t.prototype.shortValue = function() {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    }, t.prototype.signum = function() {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    }, t.prototype.toByteArray = function() {
                        var t, e = this.t,
                            i = [];
                        i[0] = this.s;
                        var r = this.DB - e * this.DB % 8,
                            s = 0;
                        if (e-- > 0)
                            for (r < this.DB && (t = this[e] >> r) != (this.s & this.DM) >> r && (i[s++] = t | this.s << this.DB - r); e >= 0;) r < 8 ? t = (this[e] & (1 << r) - 1) << 8 - r | this[--e] >> (r += this.DB - 8) : (t = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --e)), (128 & t) != 0 && (t |= -256), 0 == s && (128 & this.s) != (128 & t) && ++s, (s > 0 || t != this.s) && (i[s++] = t);
                        return i
                    }, t.prototype.equals = function(t) {
                        return 0 == this.compareTo(t)
                    }, t.prototype.min = function(t) {
                        return 0 > this.compareTo(t) ? this : t
                    }, t.prototype.max = function(t) {
                        return this.compareTo(t) > 0 ? this : t
                    }, t.prototype.and = function(t) {
                        var e = B();
                        return this.bitwiseTo(t, s, e), e
                    }, t.prototype.or = function(t) {
                        var e = B();
                        return this.bitwiseTo(t, n, e), e
                    }, t.prototype.xor = function(t) {
                        var e = B();
                        return this.bitwiseTo(t, o, e), e
                    }, t.prototype.andNot = function(t) {
                        var e = B();
                        return this.bitwiseTo(t, a, e), e
                    }, t.prototype.not = function() {
                        for (var t = B(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                        return t.t = this.t, t.s = ~this.s, t
                    }, t.prototype.shiftLeft = function(t) {
                        var e = B();
                        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                    }, t.prototype.shiftRight = function(t) {
                        var e = B();
                        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                    }, t.prototype.getLowestSetBit = function() {
                        for (var t = 0; t < this.t; ++t)
                            if (0 != this[t]) return t * this.DB + function(t) {
                                if (0 == t) return -1;
                                var e = 0;
                                return (65535 & t) == 0 && (t >>= 16, e += 16), (255 & t) == 0 && (t >>= 8, e += 8), (15 & t) == 0 && (t >>= 4, e += 4), (3 & t) == 0 && (t >>= 2, e += 2), (1 & t) == 0 && ++e, e
                            }(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    }, t.prototype.bitCount = function() {
                        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += function(t) {
                            for (var e = 0; 0 != t;) t &= t - 1, ++e;
                            return e
                        }(this[i] ^ e);
                        return t
                    }, t.prototype.testBit = function(t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : (this[e] & 1 << t % this.DB) != 0
                    }, t.prototype.setBit = function(t) {
                        return this.changeBit(t, n)
                    }, t.prototype.clearBit = function(t) {
                        return this.changeBit(t, a)
                    }, t.prototype.flipBit = function(t) {
                        return this.changeBit(t, o)
                    }, t.prototype.add = function(t) {
                        var e = B();
                        return this.addTo(t, e), e
                    }, t.prototype.subtract = function(t) {
                        var e = B();
                        return this.subTo(t, e), e
                    }, t.prototype.multiply = function(t) {
                        var e = B();
                        return this.multiplyTo(t, e), e
                    }, t.prototype.divide = function(t) {
                        var e = B();
                        return this.divRemTo(t, e, null), e
                    }, t.prototype.remainder = function(t) {
                        var e = B();
                        return this.divRemTo(t, null, e), e
                    }, t.prototype.divideAndRemainder = function(t) {
                        var e = B(),
                            i = B();
                        return this.divRemTo(t, e, i), [e, i]
                    }, t.prototype.modPow = function(t, e) {
                        var i, r, s, n, o = t.bitLength(),
                            a = N(1);
                        if (o <= 0) return a;
                        i = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, r = o < 8 ? new C(e) : e.isEven() ? new L(e) : new R(e);
                        var h = [],
                            l = 3,
                            u = i - 1,
                            c = (1 << i) - 1;
                        if (h[1] = r.convert(this), i > 1) {
                            var d = B();
                            for (r.sqrTo(h[1], d); l <= c;) h[l] = B(), r.mulTo(d, h[l - 2], h[l]), l += 2
                        }
                        var f = t.t - 1,
                            p = !0,
                            g = B();
                        for (o = j(t[f]) - 1; f >= 0;) {
                            for (o >= u ? s = t[f] >> o - u & c : (s = (t[f] & (1 << o + 1) - 1) << u - o, f > 0 && (s |= t[f - 1] >> this.DB + o - u)), l = i;
                                (1 & s) == 0;) s >>= 1, --l;
                            if ((o -= l) < 0 && (o += this.DB, --f), p) h[s].copyTo(a), p = !1;
                            else {
                                for (; l > 1;) r.sqrTo(a, g), r.sqrTo(g, a), l -= 2;
                                l > 0 ? r.sqrTo(a, g) : (n = a, a = g, g = n), r.mulTo(g, h[s], a)
                            }
                            for (; f >= 0 && (t[f] & 1 << o) == 0;) r.sqrTo(a, g), n = a, a = g, g = n, --o < 0 && (o = this.DB - 1, --f)
                        }
                        return r.revert(a)
                    }, t.prototype.modInverse = function(e) {
                        var i = e.isEven();
                        if (this.isEven() && i || 0 == e.signum()) return t.ZERO;
                        for (var r = e.clone(), s = this.clone(), n = N(1), o = N(0), a = N(0), h = N(1); 0 != r.signum();) {
                            for (; r.isEven();) r.rShiftTo(1, r), i ? (n.isEven() && o.isEven() || (n.addTo(this, n), o.subTo(e, o)), n.rShiftTo(1, n)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o);
                            for (; s.isEven();) s.rShiftTo(1, s), i ? (a.isEven() && h.isEven() || (a.addTo(this, a), h.subTo(e, h)), a.rShiftTo(1, a)) : h.isEven() || h.subTo(e, h), h.rShiftTo(1, h);
                            r.compareTo(s) >= 0 ? (r.subTo(s, r), i && n.subTo(a, n), o.subTo(h, o)) : (s.subTo(r, s), i && a.subTo(n, a), h.subTo(o, h))
                        }
                        return 0 != s.compareTo(t.ONE) ? t.ZERO : h.compareTo(e) >= 0 ? h.subtract(e) : 0 > h.signum() && (h.addTo(e, h), 0 > h.signum()) ? h.add(e) : h
                    }, t.prototype.pow = function(t) {
                        return this.exp(t, new A)
                    }, t.prototype.gcd = function(t) {
                        var e = this.s < 0 ? this.negate() : this.clone(),
                            i = t.s < 0 ? t.negate() : t.clone();
                        if (0 > e.compareTo(i)) {
                            var r = e;
                            e = i, i = r
                        }
                        var s = e.getLowestSetBit(),
                            n = i.getLowestSetBit();
                        if (n < 0) return e;
                        for (s < n && (n = s), n > 0 && (e.rShiftTo(n, e), i.rShiftTo(n, i)); e.signum() > 0;)(s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                        return n > 0 && i.lShiftTo(n, i), i
                    }, t.prototype.isProbablePrime = function(t) {
                        var e, i = this.abs();
                        if (1 == i.t && i[0] <= O[O.length - 1]) {
                            for (e = 0; e < O.length; ++e)
                                if (i[0] == O[e]) return !0;
                            return !1
                        }
                        if (i.isEven()) return !1;
                        for (e = 1; e < O.length;) {
                            for (var r = O[e], s = e + 1; s < O.length && r < E;) r *= O[s++];
                            for (r = i.modInt(r); e < s;)
                                if (r % O[e++] == 0) return !1
                        }
                        return i.millerRabin(t)
                    }, t.prototype.copyTo = function(t) {
                        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                        t.t = this.t, t.s = this.s
                    }, t.prototype.fromInt = function(t) {
                        this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                    }, t.prototype.fromString = function(e, i) {
                        if (16 == i) r = 4;
                        else if (8 == i) r = 3;
                        else if (256 == i) r = 8;
                        else if (2 == i) r = 1;
                        else if (32 == i) r = 5;
                        else {
                            if (4 != i) return void this.fromRadix(e, i);
                            r = 2
                        }
                        this.t = 0, this.s = 0;
                        for (var r, s = e.length, n = !1, o = 0; --s >= 0;) {
                            var a = 8 == r ? 255 & e[s] : z(e, s);
                            if (a < 0) {
                                "-" == e.charAt(s) && (n = !0);
                                continue
                            }
                            n = !1, 0 == o ? this[this.t++] = a : o + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, (o += r) >= this.DB && (o -= this.DB)
                        }
                        8 == r && (128 & e[0]) != 0 && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), n && t.ZERO.subTo(this, this)
                    }, t.prototype.clamp = function() {
                        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
                    }, t.prototype.dlShiftTo = function(t, e) {
                        var i;
                        for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
                        for (i = t - 1; i >= 0; --i) e[i] = 0;
                        e.t = this.t + t, e.s = this.s
                    }, t.prototype.drShiftTo = function(t, e) {
                        for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                        e.t = Math.max(this.t - t, 0), e.s = this.s
                    }, t.prototype.lShiftTo = function(t, e) {
                        for (var i = t % this.DB, r = this.DB - i, s = (1 << r) - 1, n = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; a >= 0; --a) e[a + n + 1] = this[a] >> r | o, o = (this[a] & s) << i;
                        for (var a = n - 1; a >= 0; --a) e[a] = 0;
                        e[n] = o, e.t = this.t + n + 1, e.s = this.s, e.clamp()
                    }, t.prototype.rShiftTo = function(t, e) {
                        e.s = this.s;
                        var i = Math.floor(t / this.DB);
                        if (i >= this.t) {
                            e.t = 0;
                            return
                        }
                        var r = t % this.DB,
                            s = this.DB - r,
                            n = (1 << r) - 1;
                        e[0] = this[i] >> r;
                        for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & n) << s, e[o - i] = this[o] >> r;
                        r > 0 && (e[this.t - i - 1] |= (this.s & n) << s), e.t = this.t - i, e.clamp()
                    }, t.prototype.subTo = function(t, e) {
                        for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r -= t.s
                        }
                        e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, e.clamp()
                    }, t.prototype.multiplyTo = function(e, i) {
                        var r = this.abs(),
                            s = e.abs(),
                            n = r.t;
                        for (i.t = n + s.t; --n >= 0;) i[n] = 0;
                        for (n = 0; n < s.t; ++n) i[n + r.t] = r.am(0, s[n], i, n, 0, r.t);
                        i.s = 0, i.clamp(), this.s != e.s && t.ZERO.subTo(i, i)
                    }, t.prototype.squareTo = function(t) {
                        for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;) t[i] = 0;
                        for (i = 0; i < e.t - 1; ++i) {
                            var r = e.am(i, e[i], t, 2 * i, 0, 1);
                            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
                    }, t.prototype.divRemTo = function(e, i, r) {
                        var s = e.abs();
                        if (!(s.t <= 0)) {
                            var n = this.abs();
                            if (n.t < s.t) {
                                null != i && i.fromInt(0), null != r && this.copyTo(r);
                                return
                            }
                            null == r && (r = B());
                            var o = B(),
                                a = this.s,
                                h = e.s,
                                l = this.DB - j(s[s.t - 1]);
                            l > 0 ? (s.lShiftTo(l, o), n.lShiftTo(l, r)) : (s.copyTo(o), n.copyTo(r));
                            var u = o.t,
                                c = o[u - 1];
                            if (0 != c) {
                                var d = c * (1 << this.F1) + (u > 1 ? o[u - 2] >> this.F2 : 0),
                                    f = this.FV / d,
                                    p = (1 << this.F1) / d,
                                    g = 1 << this.F2,
                                    m = r.t,
                                    b = m - u,
                                    _ = null == i ? B() : i;
                                for (o.dlShiftTo(b, _), r.compareTo(_) >= 0 && (r[r.t++] = 1, r.subTo(_, r)), t.ONE.dlShiftTo(u, _), _.subTo(o, o); o.t < u;) o[o.t++] = 0;
                                for (; --b >= 0;) {
                                    var v = r[--m] == c ? this.DM : Math.floor(r[m] * f + (r[m - 1] + g) * p);
                                    if ((r[m] += o.am(0, v, r, b, 0, u)) < v)
                                        for (o.dlShiftTo(b, _), r.subTo(_, r); r[m] < --v;) r.subTo(_, r)
                                }
                                null != i && (r.drShiftTo(u, i), a != h && t.ZERO.subTo(i, i)), r.t = u, r.clamp(), l > 0 && r.rShiftTo(l, r), a < 0 && t.ZERO.subTo(r, r)
                            }
                        }
                    }, t.prototype.invDigit = function() {
                        if (this.t < 1) return 0;
                        var t = this[0];
                        if ((1 & t) == 0) return 0;
                        var e = 3 & t;
                        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                    }, t.prototype.isEven = function() {
                        return (this.t > 0 ? 1 & this[0] : this.s) == 0
                    }, t.prototype.exp = function(e, i) {
                        if (e > 0xffffffff || e < 1) return t.ONE;
                        var r = B(),
                            s = B(),
                            n = i.convert(this),
                            o = j(e) - 1;
                        for (n.copyTo(r); --o >= 0;)
                            if (i.sqrTo(r, s), (e & 1 << o) > 0) i.mulTo(s, n, r);
                            else {
                                var a = r;
                                r = s, s = a
                            } return i.revert(r)
                    }, t.prototype.chunkSize = function(t) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                    }, t.prototype.toRadix = function(t) {
                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                        var e = this.chunkSize(t),
                            i = Math.pow(t, e),
                            r = N(i),
                            s = B(),
                            n = B(),
                            o = "";
                        for (this.divRemTo(r, s, n); s.signum() > 0;) o = (i + n.intValue()).toString(t).substr(1) + o, s.divRemTo(r, s, n);
                        return n.intValue().toString(t) + o
                    }, t.prototype.fromRadix = function(e, i) {
                        this.fromInt(0), null == i && (i = 10);
                        for (var r = this.chunkSize(i), s = Math.pow(i, r), n = !1, o = 0, a = 0, h = 0; h < e.length; ++h) {
                            var l = z(e, h);
                            if (l < 0) {
                                "-" == e.charAt(h) && 0 == this.signum() && (n = !0);
                                continue
                            }
                            a = i * a + l, ++o >= r && (this.dMultiply(s), this.dAddOffset(a, 0), o = 0, a = 0)
                        }
                        o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(a, 0)), n && t.ZERO.subTo(this, this)
                    }, t.prototype.fromNumber = function(e, i, r) {
                        if ("number" == typeof i)
                            if (e < 2) this.fromInt(1);
                            else
                                for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), n, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                        else {
                            var s = [],
                                o = 7 & e;
                            s.length = (e >> 3) + 1, i.nextBytes(s), o > 0 ? s[0] &= (1 << o) - 1 : s[0] = 0, this.fromString(s, 256)
                        }
                    }, t.prototype.bitwiseTo = function(t, e, i) {
                        var r, s, n = Math.min(t.t, this.t);
                        for (r = 0; r < n; ++r) i[r] = e(this[r], t[r]);
                        if (t.t < this.t) {
                            for (s = t.s & this.DM, r = n; r < this.t; ++r) i[r] = e(this[r], s);
                            i.t = this.t
                        } else {
                            for (s = this.s & this.DM, r = n; r < t.t; ++r) i[r] = e(s, t[r]);
                            i.t = t.t
                        }
                        i.s = e(this.s, t.s), i.clamp()
                    }, t.prototype.changeBit = function(e, i) {
                        var r = t.ONE.shiftLeft(e);
                        return this.bitwiseTo(r, i, r), r
                    }, t.prototype.addTo = function(t, e) {
                        for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                        if (t.t < this.t) {
                            for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += this.s
                        } else {
                            for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                            r += t.s
                        }
                        e.s = r < 0 ? -1 : 0, r > 0 ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
                    }, t.prototype.dMultiply = function(t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                    }, t.prototype.dAddOffset = function(t, e) {
                        if (0 != t) {
                            for (; this.t <= e;) this[this.t++] = 0;
                            for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                        }
                    }, t.prototype.multiplyLowerTo = function(t, e, i) {
                        var r = Math.min(this.t + t.t, e);
                        for (i.s = 0, i.t = r; r > 0;) i[--r] = 0;
                        for (var s = i.t - this.t; r < s; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                        for (var s = Math.min(t.t, e); r < s; ++r) this.am(0, t[r], i, r, 0, e - r);
                        i.clamp()
                    }, t.prototype.multiplyUpperTo = function(t, e, i) {
                        --e;
                        var r = i.t = this.t + t.t - e;
                        for (i.s = 0; --r >= 0;) i[r] = 0;
                        for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                        i.clamp(), i.drShiftTo(1, i)
                    }, t.prototype.modInt = function(t) {
                        if (t <= 0) return 0;
                        var e = this.DV % t,
                            i = this.s < 0 ? t - 1 : 0;
                        if (this.t > 0)
                            if (0 == e) i = this[0] % t;
                            else
                                for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
                        return i
                    }, t.prototype.millerRabin = function(e) {
                        var i = this.subtract(t.ONE),
                            r = i.getLowestSetBit();
                        if (r <= 0) return !1;
                        var s = i.shiftRight(r);
                        (e = e + 1 >> 1) > O.length && (e = O.length);
                        for (var n = B(), o = 0; o < e; ++o) {
                            n.fromInt(O[Math.floor(Math.random() * O.length)]);
                            var a = n.modPow(s, this);
                            if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(i)) {
                                for (var h = 1; h++ < r && 0 != a.compareTo(i);)
                                    if (0 == (a = a.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                                if (0 != a.compareTo(i)) return !1
                            }
                        }
                        return !0
                    }, t.prototype.square = function() {
                        var t = B();
                        return this.squareTo(t), t
                    }, t.prototype.gcda = function(t, e) {
                        var i = this.s < 0 ? this.negate() : this.clone(),
                            r = t.s < 0 ? t.negate() : t.clone();
                        if (0 > i.compareTo(r)) {
                            var s = i;
                            i = r, r = s
                        }
                        var n = i.getLowestSetBit(),
                            o = r.getLowestSetBit();
                        if (o < 0) return void e(i);
                        n < o && (o = n), o > 0 && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                        var a = function() {
                            (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i), (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function() {
                                e(r)
                            }, 0))
                        };
                        setTimeout(a, 10)
                    }, t.prototype.fromNumberAsync = function(e, i, r, s) {
                        if ("number" == typeof i)
                            if (e < 2) this.fromInt(1);
                            else {
                                this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), n, this), this.isEven() && this.dAddOffset(1, 0);
                                var o = this,
                                    a = function() {
                                        o.dAddOffset(2, 0), o.bitLength() > e && o.subTo(t.ONE.shiftLeft(e - 1), o), o.isProbablePrime(i) ? setTimeout(function() {
                                            s()
                                        }, 0) : setTimeout(a, 0)
                                    };
                                setTimeout(a, 0)
                            }
                        else {
                            var h = [],
                                l = 7 & e;
                            h.length = (e >> 3) + 1, i.nextBytes(h), l > 0 ? h[0] &= (1 << l) - 1 : h[0] = 0, this.fromString(h, 256)
                        }
                    }, t
                }(),
                A = function() {
                    function t() {}
                    return t.prototype.convert = function(t) {
                        return t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e)
                    }, t
                }(),
                C = function() {
                    function t(t) {
                        this.m = t
                    }
                    return t.prototype.convert = function(t) {
                        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        t.divRemTo(this.m, null, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }(),
                R = function() {
                    function t(t) {
                        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                    }
                    return t.prototype.convert = function(t) {
                        var e = B();
                        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(P.ZERO) > 0 && this.m.subTo(e, e), e
                    }, t.prototype.revert = function(t) {
                        var e = B();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.reduce = function(t) {
                        for (; t.t <= this.mt2;) t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var i = 32767 & t[e],
                                r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            for (i = e + this.m.t, t[i] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
                        }
                        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }(),
                L = function() {
                    function t(t) {
                        this.m = t, this.r2 = B(), this.q3 = B(), P.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
                    }
                    return t.prototype.convert = function(t) {
                        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                        if (0 > t.compareTo(this.m)) return t;
                        var e = B();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > t.compareTo(this.r2);) t.dAddOffset(1, this.m.t + 1);
                        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, i) {
                        t.multiplyTo(e, i), this.reduce(i)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }();

            function B() {
                return new P(null)
            }

            function V(t, e) {
                return new P(t, e)
            }
            var I = "undefined" != typeof navigator;
            I && "Microsoft Internet Explorer" == navigator.appName ? (P.prototype.am = function(t, e, i, r, s, n) {
                for (var o = 32767 & e, a = e >> 15; --n >= 0;) {
                    var h = 32767 & this[t],
                        l = this[t++] >> 15,
                        u = a * h + l * o;
                    s = ((h = o * h + ((32767 & u) << 15) + i[r] + (0x3fffffff & s)) >>> 30) + (u >>> 15) + a * l + (s >>> 30), i[r++] = 0x3fffffff & h
                }
                return s
            }, u = 30) : I && "Netscape" != navigator.appName ? (P.prototype.am = function(t, e, i, r, s, n) {
                for (; --n >= 0;) {
                    var o = e * this[t++] + i[r] + s;
                    s = Math.floor(o / 0x4000000), i[r++] = 0x3ffffff & o
                }
                return s
            }, u = 26) : (P.prototype.am = function(t, e, i, r, s, n) {
                for (var o = 16383 & e, a = e >> 14; --n >= 0;) {
                    var h = 16383 & this[t],
                        l = this[t++] >> 14,
                        u = a * h + l * o;
                    s = ((h = o * h + ((16383 & u) << 14) + i[r] + s) >> 28) + (u >> 14) + a * l, i[r++] = 0xfffffff & h
                }
                return s
            }, u = 28), P.prototype.DB = u, P.prototype.DM = (1 << u) - 1, P.prototype.DV = 1 << u, P.prototype.FV = 0x10000000000000, P.prototype.F1 = 52 - u, P.prototype.F2 = 2 * u - 52;
            var F = [];
            for (d = 0, c = 48; d <= 9; ++d) F[c++] = d;
            for (d = 10, c = 97; d < 36; ++d) F[c++] = d;
            for (d = 10, c = 65; d < 36; ++d) F[c++] = d;

            function z(t, e) {
                var i = F[t.charCodeAt(e)];
                return null == i ? -1 : i
            }

            function N(t) {
                var e = B();
                return e.fromInt(t), e
            }

            function j(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
            }
            P.ZERO = N(0), P.ONE = N(1);
            var H = function() {
                    function t() {
                        this.i = 0, this.j = 0, this.S = []
                    }
                    return t.prototype.init = function(t) {
                        var e, i, r;
                        for (e = 0; e < 256; ++e) this.S[e] = e;
                        for (e = 0, i = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
                        this.i = 0, this.j = 0
                    }, t.prototype.next = function() {
                        var t;
                        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                    }, t
                }(),
                W = null;
            W = [], p = 0;
            var U = void 0;
            if (window.crypto && window.crypto.getRandomValues) {
                var q = new Uint32Array(256);
                for (window.crypto.getRandomValues(q), U = 0; U < q.length; ++U) W[p++] = 255 & q[U]
            }
            var $ = 0,
                Y = function(t) {
                    if (($ = $ || 0) >= 256 || p >= 256) return void(window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y));
                    try {
                        var e = t.x + t.y;
                        W[p++] = 255 & e, $ += 1
                    } catch (t) {}
                };
            window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y);
            var K = function() {
                    function t() {}
                    return t.prototype.nextBytes = function(t) {
                        for (var e = 0; e < t.length; ++e) t[e] = function() {
                            if (null == f) {
                                for (f = new H; p < 256;) {
                                    var t = Math.floor(65536 * Math.random());
                                    W[p++] = 255 & t
                                }
                                for (f.init(W), p = 0; p < W.length; ++p) W[p] = 0;
                                p = 0
                            }
                            return f.next()
                        }()
                    }, t
                }(),
                X = function() {
                    function t() {
                        this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
                    }
                    return t.prototype.doPublic = function(t) {
                        return t.modPowInt(this.e, this.n)
                    }, t.prototype.doPrivate = function(t) {
                        if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                        for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); 0 > e.compareTo(i);) e = e.add(this.p);
                        return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                    }, t.prototype.setPublic = function(t, e) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = V(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                    }, t.prototype.encrypt = function(t) {
                        var e = this.n.bitLength() + 7 >> 3,
                            i = function(t, e) {
                                if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                                for (var i = [], r = t.length - 1; r >= 0 && e > 0;) {
                                    var s = t.charCodeAt(r--);
                                    s < 128 ? i[--e] = s : s > 127 && s < 2048 ? (i[--e] = 63 & s | 128, i[--e] = s >> 6 | 192) : (i[--e] = 63 & s | 128, i[--e] = s >> 6 & 63 | 128, i[--e] = s >> 12 | 224)
                                }
                                i[--e] = 0;
                                for (var n = new K, o = []; e > 2;) {
                                    for (o[0] = 0; 0 == o[0];) n.nextBytes(o);
                                    i[--e] = o[0]
                                }
                                return i[--e] = 2, i[--e] = 0, new P(i)
                            }(t, e);
                        if (null == i) return null;
                        var r = this.doPublic(i);
                        if (null == r) return null;
                        for (var s = r.toString(16), n = s.length, o = 0; o < 2 * e - n; o++) s = "0" + s;
                        return s
                    }, t.prototype.setPrivate = function(t, e, i) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = V(t, 16), this.e = parseInt(e, 16), this.d = V(i, 16)) : console.error("Invalid RSA private key")
                    }, t.prototype.setPrivateEx = function(t, e, i, r, s, n, o, a) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = V(t, 16), this.e = parseInt(e, 16), this.d = V(i, 16), this.p = V(r, 16), this.q = V(s, 16), this.dmp1 = V(n, 16), this.dmq1 = V(o, 16), this.coeff = V(a, 16)) : console.error("Invalid RSA private key")
                    }, t.prototype.generate = function(t, e) {
                        var i = new K,
                            r = t >> 1;
                        this.e = parseInt(e, 16);
                        for (var s = new P(e, 16);;) {
                            for (; this.p = new P(t - r, 1, i), !(0 == this.p.subtract(P.ONE).gcd(s).compareTo(P.ONE) && this.p.isProbablePrime(10)););
                            for (; this.q = new P(r, 1, i), !(0 == this.q.subtract(P.ONE).gcd(s).compareTo(P.ONE) && this.q.isProbablePrime(10)););
                            if (0 >= this.p.compareTo(this.q)) {
                                var n = this.p;
                                this.p = this.q, this.q = n
                            }
                            var o = this.p.subtract(P.ONE),
                                a = this.q.subtract(P.ONE),
                                h = o.multiply(a);
                            if (0 == h.gcd(s).compareTo(P.ONE)) {
                                this.n = this.p.multiply(this.q), this.d = s.modInverse(h), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                                break
                            }
                        }
                    }, t.prototype.decrypt = function(t) {
                        var e = V(t, 16),
                            i = this.doPrivate(e);
                        return null == i ? null : function(t, e) {
                            for (var i = t.toByteArray(), r = 0; r < i.length && 0 == i[r];) ++r;
                            if (i.length - r != e - 1 || 2 != i[r]) return null;
                            for (++r; 0 != i[r];)
                                if (++r >= i.length) return null;
                            for (var s = ""; ++r < i.length;) {
                                var n = 255 & i[r];
                                n < 128 ? s += String.fromCharCode(n) : n > 191 && n < 224 ? (s += String.fromCharCode((31 & n) << 6 | 63 & i[r + 1]), ++r) : (s += String.fromCharCode((15 & n) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), r += 2)
                            }
                            return s
                        }(i, this.n.bitLength() + 7 >> 3)
                    }, t.prototype.generateAsync = function(t, e, i) {
                        var r = new K,
                            s = t >> 1;
                        this.e = parseInt(e, 16);
                        var n = new P(e, 16),
                            o = this,
                            a = function() {
                                var e = function() {
                                        if (0 >= o.p.compareTo(o.q)) {
                                            var t = o.p;
                                            o.p = o.q, o.q = t
                                        }
                                        var e = o.p.subtract(P.ONE),
                                            r = o.q.subtract(P.ONE),
                                            s = e.multiply(r);
                                        0 == s.gcd(n).compareTo(P.ONE) ? (o.n = o.p.multiply(o.q), o.d = n.modInverse(s), o.dmp1 = o.d.mod(e), o.dmq1 = o.d.mod(r), o.coeff = o.q.modInverse(o.p), setTimeout(function() {
                                            i()
                                        }, 0)) : setTimeout(a, 0)
                                    },
                                    h = function() {
                                        o.q = B(), o.q.fromNumberAsync(s, 1, r, function() {
                                            o.q.subtract(P.ONE).gcda(n, function(t) {
                                                0 == t.compareTo(P.ONE) && o.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(h, 0)
                                            })
                                        })
                                    },
                                    l = function() {
                                        o.p = B(), o.p.fromNumberAsync(t - s, 1, r, function() {
                                            o.p.subtract(P.ONE).gcda(n, function(t) {
                                                0 == t.compareTo(P.ONE) && o.p.isProbablePrime(10) ? setTimeout(h, 0) : setTimeout(l, 0)
                                            })
                                        })
                                    };
                                setTimeout(l, 0)
                            };
                        setTimeout(a, 0)
                    }, t.prototype.sign = function(t, e, i) {
                        var r = function(t, e) {
                            if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                            for (var i = e - t.length - 6, r = "", s = 0; s < i; s += 2) r += "ff";
                            return V("0001" + r + "00" + t, 16)
                        }((Z[i] || "") + e(t).toString(), this.n.bitLength() / 4);
                        if (null == r) return null;
                        var s = this.doPrivate(r);
                        if (null == s) return null;
                        var n = s.toString(16);
                        return (1 & n.length) == 0 ? n : "0" + n
                    }, t.prototype.verify = function(t, e, i) {
                        var r = V(e, 16),
                            s = this.doPublic(r);
                        return null == s ? null : function(t) {
                            for (var e in Z)
                                if (Z.hasOwnProperty(e)) {
                                    var i = Z[e],
                                        r = i.length;
                                    if (t.substr(0, r) == i) return t.substr(r)
                                } return t
                        }(s.toString(16).replace(/^1f+00/, "")) == i(t).toString()
                    }, t
                }(),
                Z = {
                    md2: "3020300c06082a864886f70d020205000410",
                    md5: "3020300c06082a864886f70d020505000410",
                    sha1: "3021300906052b0e03021a05000414",
                    sha224: "302d300d06096086480165030402040500041c",
                    sha256: "3031300d060960864801650304020105000420",
                    sha384: "3041300d060960864801650304020205000430",
                    sha512: "3051300d060960864801650304020305000440",
                    ripemd160: "3021300906052b2403020105000414"
                },
                G = {};
            G.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var r = function() {};
                    if (r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), i) {
                        for (s in i) t.prototype[s] = i[s];
                        var s, n = function() {},
                            o = ["toString", "valueOf"];
                        try {
                            /MSIE/.test(navigator.userAgent) && (n = function(t, e) {
                                for (s = 0; s < o.length; s += 1) {
                                    var i = o[s],
                                        r = e[i];
                                    "function" == typeof r && r != Object.prototype[i] && (t[i] = r)
                                }
                            })
                        } catch (t) {}
                        n(t.prototype, i)
                    }
                }
            };
            var Q = {};
            void 0 !== Q.asn1 && Q.asn1 || (Q.asn1 = {}), Q.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", s = 0; s < i; s++) r += "f";
                        e = new P(r, 16).xor(t).add(P.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e)
                }, this.newObject = function(t) {
                    var e = Q.asn1,
                        i = e.DERBoolean,
                        r = e.DERInteger,
                        s = e.DERBitString,
                        n = e.DEROctetString,
                        o = e.DERNull,
                        a = e.DERObjectIdentifier,
                        h = e.DEREnumerated,
                        l = e.DERUTF8String,
                        u = e.DERNumericString,
                        c = e.DERPrintableString,
                        d = e.DERTeletexString,
                        f = e.DERIA5String,
                        p = e.DERUTCTime,
                        g = e.DERGeneralizedTime,
                        m = e.DERSequence,
                        b = e.DERSet,
                        _ = e.DERTaggedObject,
                        v = e.ASN1Util.newObject,
                        y = Object.keys(t);
                    if (1 != y.length) throw "key of param shall be only one.";
                    var x = y[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + x + ":")) throw "undefined key: " + x;
                    if ("bool" == x) return new i(t[x]);
                    if ("int" == x) return new r(t[x]);
                    if ("bitstr" == x) return new s(t[x]);
                    if ("octstr" == x) return new n(t[x]);
                    if ("null" == x) return new o(t[x]);
                    if ("oid" == x) return new a(t[x]);
                    if ("enum" == x) return new h(t[x]);
                    if ("utf8str" == x) return new l(t[x]);
                    if ("numstr" == x) return new u(t[x]);
                    if ("prnstr" == x) return new c(t[x]);
                    if ("telstr" == x) return new d(t[x]);
                    if ("ia5str" == x) return new f(t[x]);
                    if ("utctime" == x) return new p(t[x]);
                    if ("gentime" == x) return new g(t[x]);
                    if ("seq" == x) {
                        for (var w = t[x], T = [], M = 0; M < w.length; M++) {
                            var S = v(w[M]);
                            T.push(S)
                        }
                        return new m({
                            array: T
                        })
                    }
                    if ("set" == x) {
                        for (var w = t[x], T = [], M = 0; M < w.length; M++) {
                            var S = v(w[M]);
                            T.push(S)
                        }
                        return new b({
                            array: T
                        })
                    }
                    if ("tag" == x) {
                        var k = t[x];
                        if ("[object Array]" === Object.prototype.toString.call(k) && 3 == k.length) {
                            var D = v(k[2]);
                            return new _({
                                tag: k[0],
                                explicit: k[1],
                                obj: D
                            })
                        }
                        var O = {};
                        if (void 0 !== k.explicit && (O.explicit = k.explicit), void 0 !== k.tag && (O.tag = k.tag), void 0 === k.obj) throw "obj shall be specified for 'tag'.";
                        return O.obj = v(k.obj), new _(O)
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex()
                }
            }, Q.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = Math.floor(i / 40), e = r + "." + i % 40, s = "", n = 2; n < t.length; n += 2) {
                    var o = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
                    s += o.substr(1, 7), "0" == o.substr(0, 1) && (e = e + "." + new P(s, 2).toString(10), s = "")
                }
                return e
            }, Q.asn1.ASN1Util.oidIntToHex = function(t) {
                var e = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                };
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var i = "",
                    r = t.split(".");
                i += e(40 * parseInt(r[0]) + parseInt(r[1])), r.splice(0, 2);
                for (var s = 0; s < r.length; s++) i += function(t) {
                    var i = "",
                        r = new P(t, 10).toString(2),
                        s = 7 - r.length % 7;
                    7 == s && (s = 0);
                    for (var n = "", o = 0; o < s; o++) n += "0";
                    r = n + r;
                    for (var o = 0; o < r.length - 1; o += 7) {
                        var a = r.substr(o, 7);
                        o != r.length - 7 && (a = "1" + a), i += e(parseInt(a, 2))
                    }
                    return i
                }(r[s]);
                return i
            }, Q.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=0,v=" + this.hV;
                    var t = this.hV.length / 2,
                        e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var i = e.length / 2;
                    if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + i).toString(16) + e
                }, this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function() {
                    return ""
                }
            }, Q.asn1.DERAbstractString = function(t) {
                Q.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
            }, G.lang.extend(Q.asn1.DERAbstractString, Q.asn1.ASN1Object), Q.asn1.DERAbstractTime = function(t) {
                Q.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
                    return new Date(utc = t.getTime() + 6e4 * t.getTimezoneOffset())
                }, this.formatDate = function(t, e, i) {
                    var r = this.zeroPadding,
                        s = this.localDateToUTC(t),
                        n = String(s.getFullYear());
                    "utc" == e && (n = n.substr(2, 2));
                    var o = n + r(String(s.getMonth() + 1), 2) + r(String(s.getDate()), 2) + r(String(s.getHours()), 2) + r(String(s.getMinutes()), 2) + r(String(s.getSeconds()), 2);
                    if (!0 === i) {
                        var a = s.getMilliseconds();
                        if (0 != a) {
                            var h = r(String(a), 3);
                            o = o + "." + (h = h.replace(/[0]+$/, ""))
                        }
                    }
                    return o + "Z"
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : Array(e - t.length + 1).join("0") + t
                }, this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
                }, this.setByDateValue = function(t, e, i, r, s, n) {
                    var o = new Date(Date.UTC(t, e - 1, i, r, s, n, 0));
                    this.setByDate(o)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }
            }, G.lang.extend(Q.asn1.DERAbstractTime, Q.asn1.ASN1Object), Q.asn1.DERAbstractStructured = function(t) {
                Q.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = [], void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
            }, G.lang.extend(Q.asn1.DERAbstractStructured, Q.asn1.ASN1Object), Q.asn1.DERBoolean = function() {
                Q.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, G.lang.extend(Q.asn1.DERBoolean, Q.asn1.ASN1Object), Q.asn1.DERInteger = function(t) {
                Q.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = Q.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new P(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, G.lang.extend(Q.asn1.DERInteger, Q.asn1.ASN1Object), Q.asn1.DERBitString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = Q.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex()
                }
                Q.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + t + e
                }, this.setByBinaryString = function(t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++) t += "0";
                    for (var r = "", i = 0; i < t.length - 1; i += 8) {
                        var s = parseInt(t.substr(i, 8), 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) !0 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function(t) {
                    for (var e = Array(t), i = 0; i < t; i++) e[i] = !1;
                    return e
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
            }, G.lang.extend(Q.asn1.DERBitString, Q.asn1.ASN1Object), Q.asn1.DEROctetString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = Q.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex()
                }
                Q.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, G.lang.extend(Q.asn1.DEROctetString, Q.asn1.DERAbstractString), Q.asn1.DERNull = function() {
                Q.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, G.lang.extend(Q.asn1.DERNull, Q.asn1.ASN1Object), Q.asn1.DERObjectIdentifier = function(t) {
                var e = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e), e
                    },
                    i = function(t) {
                        var i = "",
                            r = new P(t, 10).toString(2),
                            s = 7 - r.length % 7;
                        7 == s && (s = 0);
                        for (var n = "", o = 0; o < s; o++) n += "0";
                        r = n + r;
                        for (var o = 0; o < r.length - 1; o += 7) {
                            var a = r.substr(o, 7);
                            o != r.length - 7 && (a = "1" + a), i += e(parseInt(a, 2))
                        }
                        return i
                    };
                Q.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var r = "",
                        s = t.split(".");
                    r += e(40 * parseInt(s[0]) + parseInt(s[1])), s.splice(0, 2);
                    for (var n = 0; n < s.length; n++) r += i(s[n]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
                }, this.setValueName = function(t) {
                    var e = Q.asn1.x509.OID.name2oid(t);
                    if ("" !== e) this.setValueOidString(e);
                    else throw "DERObjectIdentifier oidName undefined: " + t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, G.lang.extend(Q.asn1.DERObjectIdentifier, Q.asn1.ASN1Object), Q.asn1.DEREnumerated = function(t) {
                Q.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = Q.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    var e = new P(String(t), 10);
                    this.setByBigInteger(e)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, G.lang.extend(Q.asn1.DEREnumerated, Q.asn1.ASN1Object), Q.asn1.DERUTF8String = function(t) {
                Q.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, G.lang.extend(Q.asn1.DERUTF8String, Q.asn1.DERAbstractString), Q.asn1.DERNumericString = function(t) {
                Q.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, G.lang.extend(Q.asn1.DERNumericString, Q.asn1.DERAbstractString), Q.asn1.DERPrintableString = function(t) {
                Q.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, G.lang.extend(Q.asn1.DERPrintableString, Q.asn1.DERAbstractString), Q.asn1.DERTeletexString = function(t) {
                Q.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, G.lang.extend(Q.asn1.DERTeletexString, Q.asn1.DERAbstractString), Q.asn1.DERIA5String = function(t) {
                Q.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, G.lang.extend(Q.asn1.DERIA5String, Q.asn1.DERAbstractString), Q.asn1.DERUTCTime = function(t) {
                Q.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, G.lang.extend(Q.asn1.DERUTCTime, Q.asn1.DERAbstractTime), Q.asn1.DERGeneralizedTime = function(t) {
                Q.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
            }, G.lang.extend(Q.asn1.DERGeneralizedTime, Q.asn1.DERAbstractTime), Q.asn1.DERSequence = function(t) {
                Q.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
                    return this.hV = t, this.hV
                }
            }, G.lang.extend(Q.asn1.DERSequence, Q.asn1.DERAbstractStructured), Q.asn1.DERSet = function(t) {
                Q.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                    for (var t = [], e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex())
                    }
                    return !0 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
                }, void 0 !== t && void 0 !== t.sortflag && !1 == t.sortflag && (this.sortFlag = !1)
            }, G.lang.extend(Q.asn1.DERSet, Q.asn1.DERAbstractStructured), Q.asn1.DERTaggedObject = function(t) {
                Q.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
            }, G.lang.extend(Q.asn1.DERTaggedObject, Q.asn1.ASN1Object);
            var J = (g = function(t, e) {
                    return (g = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }
                    g(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                tt = function(t) {
                    function e(i) {
                        var r = t.call(this) || this;
                        return i && ("string" == typeof i ? r.parseKey(i) : (e.hasPrivateKeyProperty(i) || e.hasPublicKeyProperty(i)) && r.parsePropertiesFrom(i)), r
                    }
                    return J(e, t), e.prototype.parseKey = function(t) {
                        try {
                            var e = 0,
                                i = 0,
                                r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? v(t) : y.unarmor(t),
                                s = k.decode(r);
                            if (3 === s.sub.length && (s = s.sub[2].sub[0]), 9 === s.sub.length) {
                                e = s.sub[1].getHexStringValue(), this.n = V(e, 16), i = s.sub[2].getHexStringValue(), this.e = parseInt(i, 16);
                                var n = s.sub[3].getHexStringValue();
                                this.d = V(n, 16);
                                var o = s.sub[4].getHexStringValue();
                                this.p = V(o, 16);
                                var a = s.sub[5].getHexStringValue();
                                this.q = V(a, 16);
                                var h = s.sub[6].getHexStringValue();
                                this.dmp1 = V(h, 16);
                                var l = s.sub[7].getHexStringValue();
                                this.dmq1 = V(l, 16);
                                var u = s.sub[8].getHexStringValue();
                                this.coeff = V(u, 16)
                            } else {
                                if (2 !== s.sub.length) return !1;
                                var c = s.sub[1].sub[0];
                                e = c.sub[0].getHexStringValue(), this.n = V(e, 16), i = c.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                            }
                            return !0
                        } catch (t) {
                            return !1
                        }
                    }, e.prototype.getPrivateBaseKey = function() {
                        var t = {
                            array: [new Q.asn1.DERInteger({
                                int: 0
                            }), new Q.asn1.DERInteger({
                                bigint: this.n
                            }), new Q.asn1.DERInteger({
                                int: this.e
                            }), new Q.asn1.DERInteger({
                                bigint: this.d
                            }), new Q.asn1.DERInteger({
                                bigint: this.p
                            }), new Q.asn1.DERInteger({
                                bigint: this.q
                            }), new Q.asn1.DERInteger({
                                bigint: this.dmp1
                            }), new Q.asn1.DERInteger({
                                bigint: this.dmq1
                            }), new Q.asn1.DERInteger({
                                bigint: this.coeff
                            })]
                        };
                        return new Q.asn1.DERSequence(t).getEncodedHex()
                    }, e.prototype.getPrivateBaseKeyB64 = function() {
                        return b(this.getPrivateBaseKey())
                    }, e.prototype.getPublicBaseKey = function() {
                        var t = new Q.asn1.DERSequence({
                                array: [new Q.asn1.DERObjectIdentifier({
                                    oid: "1.2.840.113549.1.1.1"
                                }), new Q.asn1.DERNull]
                            }),
                            e = new Q.asn1.DERSequence({
                                array: [new Q.asn1.DERInteger({
                                    bigint: this.n
                                }), new Q.asn1.DERInteger({
                                    int: this.e
                                })]
                            }),
                            i = new Q.asn1.DERBitString({
                                hex: "00" + e.getEncodedHex()
                            });
                        return new Q.asn1.DERSequence({
                            array: [t, i]
                        }).getEncodedHex()
                    }, e.prototype.getPublicBaseKeyB64 = function() {
                        return b(this.getPublicBaseKey())
                    }, e.wordwrap = function(t, e) {
                        if (e = e || 64, !t) return t;
                        var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                        return t.match(RegExp(i, "g")).join("\n")
                    }, e.prototype.getPrivateKey = function() {
                        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                        return t + (e.wordwrap(this.getPrivateBaseKeyB64()) + "\n-----END RSA PRIVATE KEY-----")
                    }, e.prototype.getPublicKey = function() {
                        var t = "-----BEGIN PUBLIC KEY-----\n";
                        return t + (e.wordwrap(this.getPublicBaseKeyB64()) + "\n-----END PUBLIC KEY-----")
                    }, e.hasPublicKeyProperty = function(t) {
                        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
                    }, e.hasPrivateKeyProperty = function(t) {
                        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                    }, e.prototype.parsePropertiesFrom = function(t) {
                        this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
                    }, e
                }(X),
                te = function() {
                    function t(t) {
                        void 0 === t && (t = {}), t = t || {}, this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
                    }
                    return t.prototype.setKey = function(t) {
                        this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new tt(t)
                    }, t.prototype.setPrivateKey = function(t) {
                        this.setKey(t)
                    }, t.prototype.setPublicKey = function(t) {
                        this.setKey(t)
                    }, t.prototype.decrypt = function(t) {
                        try {
                            return this.getKey().decrypt(_(t))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.encrypt = function(t) {
                        try {
                            return b(this.getKey().encrypt(t))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.sign = function(t, e, i) {
                        try {
                            return b(this.getKey().sign(t, e, i))
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.verify = function(t, e, i) {
                        try {
                            return this.getKey().verify(t, _(e), i)
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype.getKey = function(t) {
                        if (!this.key) {
                            if (this.key = new tt, t && "[object Function]" === ({}).toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                            this.key.generate(this.default_key_size, this.default_public_exponent)
                        }
                        return this.key
                    }, t.prototype.getPrivateKey = function() {
                        return this.getKey().getPrivateKey()
                    }, t.prototype.getPrivateKeyB64 = function() {
                        return this.getKey().getPrivateBaseKeyB64()
                    }, t.prototype.getPublicKey = function() {
                        return this.getKey().getPublicKey()
                    }, t.prototype.getPublicKeyB64 = function() {
                        return this.getKey().getPublicBaseKeyB64()
                    }, t.version = "3.2.1", t
                }()
        },
        51970: function(t, e, i) {
            var r = i(82515),
                s = i(68553),
                n = i(74121),
                o = i(26189),
                a = i(75925);
            t.exports = function(t, e, i, h) {
                if (!o(t)) return t;
                e = s(e, t);
                for (var l = -1, u = e.length, c = u - 1, d = t; null != d && ++l < u;) {
                    var f = a(e[l]),
                        p = i;
                    if ("__proto__" === f || "constructor" === f || "prototype" === f) break;
                    if (l != c) {
                        var g = d[f];
                        void 0 === (p = h ? h(g, f, d) : void 0) && (p = o(g) ? g : n(e[l + 1]) ? [] : {})
                    }
                    r(d, f, p), d = d[f]
                }
                return t
            }
        },
        16152: function(t, e, i) {
            var r = i(51970);
            t.exports = function(t, e, i) {
                return null == t ? t : r(t, e, i)
            }
        },
        59359: function(t, e, i) {
            "use strict";
            i.d(e, {
                nu: () => d,
                yP: () => c
            });
            var r = i(58191),
                s = i.n(r),
                n = i(12984);
            let o = "label";

            function a(t, e) {
                "function" == typeof t ? t(e) : t && (t.current = e)
            }

            function h(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
                    r = [];
                t.datasets = e.map(e => {
                    let s = t.datasets.find(t => t[i] === e[i]);
                    return !s || !e.data || r.includes(s) ? {
                        ...e
                    } : (r.push(s), Object.assign(s, e), s)
                })
            }
            let l = (0, r.forwardRef)(function(t, e) {
                let {
                    height: i = 150,
                    width: l = 300,
                    redraw: u = !1,
                    datasetIdKey: c,
                    type: d,
                    data: f,
                    options: p,
                    plugins: g = [],
                    fallbackContent: m,
                    ...b
                } = t, _ = (0, r.useRef)(null), v = (0, r.useRef)(), y = () => {
                    _.current && (v.current = new n.t1(_.current, {
                        type: d,
                        data: function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                                i = {
                                    labels: [],
                                    datasets: []
                                };
                            return i.labels = t.labels, h(i, t.datasets, e), i
                        }(f, c),
                        options: p,
                        plugins: g
                    }), a(e, v.current))
                }, x = () => {
                    a(e, null), v.current && (v.current.destroy(), v.current = null)
                };
                return (0, r.useEffect)(() => {
                    !u && v.current && p && (v.current.options = {
                        ...p
                    })
                }, [u, p]), (0, r.useEffect)(() => {
                    !u && v.current && (v.current.config.data.labels = f.labels)
                }, [u, f.labels]), (0, r.useEffect)(() => {
                    !u && v.current && f.datasets && h(v.current.config.data, f.datasets, c)
                }, [u, f.datasets]), (0, r.useEffect)(() => {
                    v.current && (u ? (x(), setTimeout(y)) : v.current.update())
                }, [u, p, f.labels, f.datasets]), (0, r.useEffect)(() => (y(), () => x()), []), s().createElement("canvas", Object.assign({
                    ref: _,
                    role: "img",
                    height: i,
                    width: l
                }, b), m)
            });

            function u(t, e) {
                return n.t1.register(e), (0, r.forwardRef)((e, i) => s().createElement(l, Object.assign({}, e, {
                    ref: i,
                    type: t
                })))
            }
            let c = u("bar", n.A6),
                d = u("doughnut", n.ju)
        },
        30040: function(t, e, i) {
            "use strict";
            i.d(e, {
                pL: () => l
            });
            var r = i(58191);

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var n = new Map,
                o = new WeakMap,
                a = 0;

            function h(t) {
                return "function" != typeof t.children
            }
            var l = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this, e) || this).node = null, i._unobserveCb = null, i.handleNode = function(t) {
                        i.node && (i.unobserve(), t || i.props.triggerOnce || i.props.skip || i.setState({
                            inView: !!i.props.initialInView,
                            entry: void 0
                        })), i.node = t || null, i.observeNode()
                    }, i.handleChange = function(t, e) {
                        t && i.props.triggerOnce && i.unobserve(), h(i.props) || i.setState({
                            inView: t,
                            entry: e
                        }), i.props.onChange && i.props.onChange(t, e)
                    }, i.state = {
                        inView: !!e.initialInView,
                        entry: void 0
                    }, i
                }
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
                var i = e.prototype;
                return i.componentDidUpdate = function(t) {
                    (t.rootMargin !== this.props.rootMargin || t.root !== this.props.root || t.threshold !== this.props.threshold || t.skip !== this.props.skip || t.trackVisibility !== this.props.trackVisibility || t.delay !== this.props.delay) && (this.unobserve(), this.observeNode())
                }, i.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, i.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var t = this.props,
                            e = t.threshold,
                            i = t.root,
                            r = t.rootMargin,
                            s = t.trackVisibility,
                            h = t.delay;
                        this._unobserveCb = function(t, e, i) {
                            if (void 0 === i && (i = {}), !t) return function() {};
                            var r = function(t) {
                                    var e = Object.keys(t).sort().filter(function(e) {
                                            return void 0 !== t[e]
                                        }).map(function(e) {
                                            var i;
                                            return e + "_" + ("root" === e ? (i = t.root) ? (o.has(i) || (a += 1, o.set(i, a.toString())), o.get(i)) : "0" : t[e])
                                        }).toString(),
                                        i = n.get(e);
                                    if (!i) {
                                        var r, s = new Map,
                                            h = new IntersectionObserver(function(e) {
                                                e.forEach(function(e) {
                                                    var i, n = e.isIntersecting && r.some(function(t) {
                                                        return e.intersectionRatio >= t
                                                    });
                                                    t.trackVisibility && void 0 === e.isVisible && (e.isVisible = n), null == (i = s.get(e.target)) || i.forEach(function(t) {
                                                        t(n, e)
                                                    })
                                                })
                                            }, t);
                                        r = h.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), i = {
                                            id: e,
                                            observer: h,
                                            elements: s
                                        }, n.set(e, i)
                                    }
                                    return i
                                }(i),
                                s = r.id,
                                h = r.observer,
                                l = r.elements,
                                u = l.get(t) || [];
                            return l.has(t) || l.set(t, u), u.push(e), h.observe(t),
                                function() {
                                    u.splice(u.indexOf(e), 1), 0 === u.length && (l.delete(t), h.unobserve(t)), 0 === l.size && (h.disconnect(), n.delete(s))
                                }
                        }(this.node, this.handleChange, {
                            threshold: e,
                            root: i,
                            rootMargin: r,
                            trackVisibility: s,
                            delay: h
                        })
                    }
                }, i.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, i.render = function() {
                    if (!h(this.props)) {
                        var t = this.state,
                            e = t.inView,
                            i = t.entry;
                        return this.props.children({
                            inView: e,
                            entry: i,
                            ref: this.handleNode
                        })
                    }
                    var n = this.props,
                        o = n.children,
                        a = n.as,
                        l = n.tag,
                        u = function(t, e) {
                            if (null == t) return {};
                            var i, r, s = {},
                                n = Object.keys(t);
                            for (r = 0; r < n.length; r++) e.indexOf(i = n[r]) >= 0 || (s[i] = t[i]);
                            return s
                        }(n, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView"]);
                    return (0, r.createElement)(a || l || "div", s({
                        ref: this.handleNode
                    }, u), o)
                }, e
            }(r.Component);
            l.displayName = "InView", l.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        19258: function(t, e, i) {
            "use strict";
            i.d(e, {
                O: () => a
            });
            var r = i(82080),
                s = i(53011),
                n = i(38245),
                o = i(56645);

            function a() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                return 1 === (e = (0, n.K)(e)).length ? (0, s.Tg)(e[0]) : new r.c((t = e, function(e) {
                    for (var i = [], r = function(r) {
                            i.push((0, s.Tg)(t[r]).subscribe((0, o._)(e, function(t) {
                                if (i) {
                                    for (var s = 0; s < i.length; s++) s !== r && i[s].unsubscribe();
                                    i = null
                                }
                                e.next(t)
                            })))
                        }, n = 0; i && !e.closed && n < t.length; n++) r(n)
                }))
            }
        },
        60363: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => n
            });
            var r, s = new Uint8Array(16);

            function n() {
                if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(s)
            }
        },
        63811: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => o
            });
            for (var r = i(1510), s = [], n = 0; n < 256; ++n) s.push((n + 256).toString(16).substr(1));
            let o = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = (s[t[e + 0]] + s[t[e + 1]] + s[t[e + 2]] + s[t[e + 3]] + "-" + s[t[e + 4]] + s[t[e + 5]] + "-" + s[t[e + 6]] + s[t[e + 7]] + "-" + s[t[e + 8]] + s[t[e + 9]] + "-" + s[t[e + 10]] + s[t[e + 11]] + s[t[e + 12]] + s[t[e + 13]] + s[t[e + 14]] + s[t[e + 15]]).toLowerCase();
                if (!(0, r.A)(i)) throw TypeError("Stringified UUID is invalid");
                return i
            }
        },
        36134: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => n
            });
            var r = i(60363),
                s = i(63811);
            let n = function(t, e, i) {
                var n = (t = t || {}).random || (t.rng || r.A)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                    i = i || 0;
                    for (var o = 0; o < 16; ++o) e[i + o] = n[o];
                    return e
                }
                return (0, s.A)(n)
            }
        },
        1510: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => s
            });
            let r = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                s = function(t) {
                    return "string" == typeof t && r.test(t)
                }
        }
    }
]);
//# sourceMappingURL=9464.7941e155.js.map