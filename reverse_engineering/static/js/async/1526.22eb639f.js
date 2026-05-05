/*! For license information please see 1526.22eb639f.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "86be2fca-2ac8-443e-838c-73dcfea63f53", t._sentryDebugIdIdentifier = "sentry-dbid-86be2fca-2ac8-443e-838c-73dcfea63f53")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1526"], {
        85333: function(t, e, i) {
            i.r(e), i.d(e, {
                default: () => s
            });
            var s = (0, i(25260).a)((t, e) => {
                var i, s;
                "u" > typeof navigator && (i = t, s = function() {
                    var i, s, a, r, n, h, o, l, p, f = "",
                        m = !1,
                        d = function(t) {
                            f = t
                        },
                        c = function() {
                            return f
                        };

                    function u(t) {
                        return document.createElement(t)
                    }

                    function g(t, e) {
                        var i, s, a = t.length;
                        for (i = 0; i < a; i += 1)
                            for (var r in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, r) && (e.prototype[r] = s[r])
                    }
                    var y = function() {
                            function t(t) {
                                this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                            }
                            return t.prototype = {
                                    addAudio: function(t) {
                                        this.audios.push(t)
                                    },
                                    pause: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].pause()
                                    },
                                    resume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].resume()
                                    },
                                    setRate: function(t) {
                                        var e, i = this.audios.length;
                                        for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                    },
                                    createAudio: function(t) {
                                        return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                            src: [t]
                                        }) : {
                                            isPlaying: !1,
                                            play: function() {
                                                this.isPlaying = !0
                                            },
                                            seek: function() {
                                                this.isPlaying = !1
                                            },
                                            playing: function() {},
                                            rate: function() {},
                                            setVolume: function() {}
                                        }
                                    },
                                    setAudioFactory: function(t) {
                                        this.audioFactory = t
                                    },
                                    setVolume: function(t) {
                                        this._volume = t, this._updateVolume()
                                    },
                                    mute: function() {
                                        this._isMuted = !0, this._updateVolume()
                                    },
                                    unmute: function() {
                                        this._isMuted = !1, this._updateVolume()
                                    },
                                    getVolume: function() {
                                        return this._volume
                                    },
                                    _updateVolume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].volume(!this._isMuted * this._volume)
                                    }
                                },
                                function() {
                                    return new t
                                }
                        }(),
                        v = function() {
                            function t(t, e) {
                                var i, s = 0,
                                    a = [];
                                switch (t) {
                                    case "int16":
                                    case "uint8c":
                                        i = 1;
                                        break;
                                    default:
                                        i = 1.1
                                }
                                for (s = 0; s < e; s += 1) a.push(i);
                                return a
                            }
                            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                                return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                            } : t
                        }();

                    function b(t) {
                        return Array.apply(null, {
                            length: t
                        })
                    }
                    var _ = !0,
                        x = null,
                        k = "",
                        w = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        P = Math.pow,
                        S = Math.sqrt,
                        A = Math.floor,
                        D = Math.max,
                        C = Math.min,
                        E = 150,
                        M = Math.PI / 180;

                    function T(t) {
                        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                    }

                    function F(t, e, i, s) {
                        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
                    }

                    function I(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1
                    }

                    function L(t, e, i, s) {
                        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
                    }

                    function B(t, e, i) {
                        this.type = t, this.firstFrame = e, this.totalFrames = i
                    }

                    function z(t, e) {
                        this.type = t, this.target = e
                    }

                    function V(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                    }

                    function R(t) {
                        this.type = "configError", this.nativeError = t
                    }
                    var N = (Y = 0, function() {
                        return Y += 1, k + "__lottie_element_" + Y
                    });

                    function O(t, e, i) {
                        var s, a, r, n, h, o, l, p;
                        switch (n = Math.floor(6 * t), h = 6 * t - n, o = i * (1 - e), l = i * (1 - h * e), p = i * (1 - (1 - h) * e), n % 6) {
                            case 0:
                                s = i, a = p, r = o;
                                break;
                            case 1:
                                s = l, a = i, r = o;
                                break;
                            case 2:
                                s = o, a = i, r = p;
                                break;
                            case 3:
                                s = o, a = l, r = i;
                                break;
                            case 4:
                                s = p, a = o, r = i;
                                break;
                            case 5:
                                s = i, a = o, r = l
                        }
                        return [s, a, r]
                    }

                    function q(t, e, i) {
                        var s, a = Math.max(t, e, i),
                            r = Math.min(t, e, i),
                            n = a - r;
                        switch (a) {
                            case r:
                                s = 0;
                                break;
                            case t:
                                s = (e - i + 6 * (e < i) * n) / (6 * n);
                                break;
                            case e:
                                s = (i - t + 2 * n) / (6 * n);
                                break;
                            case i:
                                s = (t - e + 4 * n) / (6 * n)
                        }
                        return [s, 0 === a ? 0 : n / a, a / 255]
                    }

                    function j(t, e) {
                        var i = q(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), O(i[0], i[1], i[2])
                    }

                    function W(t, e) {
                        var i = q(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), O(i[0], i[1], i[2])
                    }

                    function H(t, e) {
                        var i = q(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), O(i[0], i[1], i[2])
                    }
                    var Y, X, G, K = [];
                    for (X = 0; X < 256; X += 1) G = X.toString(16), K[X] = 1 === G.length ? "0" + G : G;
                    var J = function(t) {
                            _ = !!t
                        },
                        Z = function(t) {
                            x = t
                        },
                        U = function() {
                            return x
                        },
                        Q = function(t) {
                            E = t
                        },
                        $ = function() {
                            return E
                        },
                        tt = function(t) {
                            k = t
                        };

                    function te(t) {
                        return document.createElementNS("http://www.w3.org/2000/svg", t)
                    }

                    function ti(t) {
                        return (ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var ts = function() {
                            var t, e, i = 1,
                                s = [],
                                a = {
                                    onmessage: function() {},
                                    postMessage: function(e) {
                                        t({
                                            data: e
                                        })
                                    }
                                },
                                r = {
                                    postMessage: function(t) {
                                        a.onmessage({
                                            data: t
                                        })
                                    }
                                };

                            function n() {
                                e || ((e = function(e) {
                                    if (window.Worker && window.Blob && m) {
                                        var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                            type: "text/javascript"
                                        });
                                        return new Worker(URL.createObjectURL(i))
                                    }
                                    return t = e, a
                                }(function(t) {
                                    if (r.dataManager || (r.dataManager = function() {
                                            function t(a, r) {
                                                var n, h, o, l, p, f, m = a.length;
                                                for (h = 0; h < m; h += 1)
                                                    if ("ks" in (n = a[h]) && !n.completed) {
                                                        if (n.completed = !0, n.hasMask) {
                                                            var d, c = n.masksProperties;
                                                            for (l = c.length, o = 0; o < l; o += 1)
                                                                if (c[o].pt.k.i) s(c[o].pt.k);
                                                                else
                                                                    for (f = c[o].pt.k.length, p = 0; p < f; p += 1) c[o].pt.k[p].s && s(c[o].pt.k[p].s[0]), c[o].pt.k[p].e && s(c[o].pt.k[p].e[0])
                                                        }
                                                        0 === n.ty ? (n.layers = e(n.refId, r), t(n.layers, r)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && 0 === (d = n).t.a.length && d.t.p
                                                    }
                                            }

                                            function e(t, e) {
                                                var i = function(t, e) {
                                                    for (var i = 0, s = e.length; i < s;) {
                                                        if (e[i].id === t) return e[i];
                                                        i += 1
                                                    }
                                                    return null
                                                }(t, e);
                                                return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                                            }

                                            function i(t) {
                                                var e, a, r;
                                                for (e = t.length - 1; e >= 0; e -= 1)
                                                    if ("sh" === t[e].ty)
                                                        if (t[e].ks.k.i) s(t[e].ks.k);
                                                        else
                                                            for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && s(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && s(t[e].ks.k[a].e[0]);
                                                else "gr" === t[e].ty && i(t[e].it)
                                            }

                                            function s(t) {
                                                var e, i = t.i.length;
                                                for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                            }

                                            function a(t, e) {
                                                var i = e ? e.split(".") : [100, 100, 100];
                                                return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                            }
                                            var r, n = function() {
                                                    var t = [4, 4, 14];

                                                    function e(t) {
                                                        var e, i = t.length;
                                                        for (e = 0; e < i; e += 1) 5 === t[e].ty && function(t) {
                                                            var e = t.t.d;
                                                            t.t.d = {
                                                                k: [{
                                                                    s: e,
                                                                    t: 0
                                                                }]
                                                            }
                                                        }(t[e])
                                                    }
                                                    return function(i) {
                                                        if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                            var s, r = i.assets.length;
                                                            for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                h = (r = [4, 7, 99], function(t) {
                                                    if (t.chars && !a(r, t.v)) {
                                                        var e, s = t.chars.length;
                                                        for (e = 0; e < s; e += 1) {
                                                            var n = t.chars[e];
                                                            n.data && n.data.shapes && (i(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                                                p: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [100, 100],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                }
                                                            }, t.chars[e].t || (n.data.shapes.push({
                                                                ty: "no"
                                                            }), n.data.shapes[0].it.push({
                                                                p: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [100, 100],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                },
                                                                sk: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                sa: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                ty: "tr"
                                                            })))
                                                        }
                                                    }
                                                }),
                                                o = function() {
                                                    var t = [5, 7, 15];

                                                    function e(t) {
                                                        var e, i = t.length;
                                                        for (e = 0; e < i; e += 1) 5 === t[e].ty && function(t) {
                                                            var e = t.t.p;
                                                            "number" == typeof e.a && (e.a = {
                                                                a: 0,
                                                                k: e.a
                                                            }), "number" == typeof e.p && (e.p = {
                                                                a: 0,
                                                                k: e.p
                                                            }), "number" == typeof e.r && (e.r = {
                                                                a: 0,
                                                                k: e.r
                                                            })
                                                        }(t[e])
                                                    }
                                                    return function(i) {
                                                        if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                            var s, r = i.assets.length;
                                                            for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                l = function() {
                                                    var t = [4, 1, 9];

                                                    function e(t) {
                                                        var e, i = t.length;
                                                        for (e = 0; e < i; e += 1) 4 === t[e].ty && function t(e) {
                                                            var i, s, a, r = e.length;
                                                            for (i = 0; i < r; i += 1)
                                                                if ("gr" === e[i].ty) t(e[i].it);
                                                                else if ("fl" === e[i].ty || "st" === e[i].ty)
                                                                if (e[i].c.k && e[i].c.k[0].i)
                                                                    for (a = e[i].c.k.length, s = 0; s < a; s += 1) e[i].c.k[s].s && (e[i].c.k[s].s[0] /= 255, e[i].c.k[s].s[1] /= 255, e[i].c.k[s].s[2] /= 255, e[i].c.k[s].s[3] /= 255), e[i].c.k[s].e && (e[i].c.k[s].e[0] /= 255, e[i].c.k[s].e[1] /= 255, e[i].c.k[s].e[2] /= 255, e[i].c.k[s].e[3] /= 255);
                                                                else e[i].c.k[0] /= 255, e[i].c.k[1] /= 255, e[i].c.k[2] /= 255, e[i].c.k[3] /= 255
                                                        }(t[e].shapes)
                                                    }
                                                    return function(i) {
                                                        if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                            var s, r = i.assets.length;
                                                            for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                p = function() {
                                                    var t = [4, 4, 18];

                                                    function e(t) {
                                                        var e, i, s, a, r, n, h = t.length;
                                                        for (i = 0; i < h; i += 1) {
                                                            if ((e = t[i]).hasMask) {
                                                                var o = e.masksProperties;
                                                                for (a = o.length, s = 0; s < a; s += 1)
                                                                    if (o[s].pt.k.i) o[s].pt.k.c = o[s].cl;
                                                                    else
                                                                        for (n = o[s].pt.k.length, r = 0; r < n; r += 1) o[s].pt.k[r].s && (o[s].pt.k[r].s[0].c = o[s].cl), o[s].pt.k[r].e && (o[s].pt.k[r].e[0].c = o[s].cl)
                                                            }
                                                            4 === e.ty && function t(e) {
                                                                var i, s, a;
                                                                for (i = e.length - 1; i >= 0; i -= 1)
                                                                    if ("sh" === e[i].ty)
                                                                        if (e[i].ks.k.i) e[i].ks.k.c = e[i].closed;
                                                                        else
                                                                            for (a = e[i].ks.k.length, s = 0; s < a; s += 1) e[i].ks.k[s].s && (e[i].ks.k[s].s[0].c = e[i].closed), e[i].ks.k[s].e && (e[i].ks.k[s].e[0].c = e[i].closed);
                                                                else "gr" === e[i].ty && t(e[i].it)
                                                            }(e.shapes)
                                                        }
                                                    }
                                                    return function(i) {
                                                        if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                            var s, r = i.assets.length;
                                                            for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                                                        }
                                                    }
                                                }(),
                                                f = {};
                                            return f.completeData = function(i) {
                                                i.__complete || (l(i), n(i), h(i), o(i), p(i), t(i.layers, i.assets), function(i, s) {
                                                    if (i) {
                                                        var a = 0,
                                                            r = i.length;
                                                        for (a = 0; a < r; a += 1) 1 === i[a].t && (i[a].data.layers = e(i[a].data.refId, s), t(i[a].data.layers, s))
                                                    }
                                                }(i.chars, i.assets), i.__complete = !0)
                                            }, f.checkColors = l, f.checkChars = h, f.checkPathProperties = o, f.checkShapes = p, f.completeLayers = t, f
                                        }()), r.assetLoader || (r.assetLoader = function() {
                                            function t(t) {
                                                var e = t.getResponseHeader("content-type");
                                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === ti(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                            }
                                            return {
                                                load: function(e, i, s, a) {
                                                    var r, n = new XMLHttpRequest;
                                                    try {
                                                        n.responseType = "json"
                                                    } catch {}
                                                    n.onreadystatechange = function() {
                                                        if (4 === n.readyState)
                                                            if (200 === n.status) s(r = t(n));
                                                            else try {
                                                                r = t(n), s(r)
                                                            } catch (t) {
                                                                a && a(t)
                                                            }
                                                    };
                                                    try {
                                                        n.open("GET", e, !0)
                                                    } catch {
                                                        n.open("GET", i + "/" + e, !0)
                                                    }
                                                    n.send()
                                                }
                                            }
                                        }()), "loadAnimation" === t.data.type) r.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                                        r.dataManager.completeData(e), r.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    }, function() {
                                        r.postMessage({
                                            id: t.data.id,
                                            status: "error"
                                        })
                                    });
                                    else if ("complete" === t.data.type) {
                                        var e = t.data.animation;
                                        r.dataManager.completeData(e), r.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    } else "loadData" === t.data.type && r.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                                        r.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    }, function() {
                                        r.postMessage({
                                            id: t.data.id,
                                            status: "error"
                                        })
                                    })
                                })).onmessage = function(t) {
                                    var e = t.data,
                                        i = e.id,
                                        a = s[i];
                                    s[i] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
                                })
                            }

                            function h(t, e) {
                                var a = "processId_" + (i += 1);
                                return s[a] = {
                                    onComplete: t,
                                    onError: e
                                }, a
                            }
                            return {
                                loadAnimation: function(t, i, s) {
                                    n();
                                    var a = h(i, s);
                                    e.postMessage({
                                        type: "loadAnimation",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                loadData: function(t, i, s) {
                                    n();
                                    var a = h(i, s);
                                    e.postMessage({
                                        type: "loadData",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                completeAnimation: function(t, i, s) {
                                    n();
                                    var a = h(i, s);
                                    e.postMessage({
                                        type: "complete",
                                        animation: t,
                                        id: a
                                    })
                                }
                            }
                        }(),
                        ta = function() {
                            var t, e, i = ((t = u("canvas")).width = 1, t.height = 1, (e = t.getContext("2d")).fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t);

                            function s() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function a() {
                                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function r(t, e, i) {
                                var s = "";
                                if (t.e) s = t.p;
                                else if (e) {
                                    var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), s = e + a
                                } else s = i + (t.u ? t.u : "") + t.p;
                                return s
                            }

                            function n(t) {
                                var e = 0,
                                    i = setInterval((function() {
                                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                    }).bind(this), 50)
                            }

                            function h(t) {
                                var e = {
                                        assetData: t
                                    },
                                    i = r(t, this.assetsPath, this.path);
                                return ts.loadData(i, (function(t) {
                                    e.img = t, this._footageLoaded()
                                }).bind(this), (function() {
                                    e.img = {}, this._footageLoaded()
                                }).bind(this)), e
                            }

                            function o() {
                                this._imageLoaded = s.bind(this), this._footageLoaded = a.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = h.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return o.prototype = {
                                loadAssets: function(t, e) {
                                    this.imagesLoadedCb = e;
                                    var i, s = t.length;
                                    for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                                },
                                setAssetsPath: function(t) {
                                    this.assetsPath = t || ""
                                },
                                setPath: function(t) {
                                    this.path = t || ""
                                },
                                loadedImages: function() {
                                    return this.totalImages === this.loadedAssets
                                },
                                loadedFootages: function() {
                                    return this.totalFootages === this.loadedFootagesCount
                                },
                                destroy: function() {
                                    this.imagesLoadedCb = null, this.images.length = 0
                                },
                                getAsset: function(t) {
                                    for (var e = 0, i = this.images.length; e < i;) {
                                        if (this.images[e].assetData === t) return this.images[e].img;
                                        e += 1
                                    }
                                    return null
                                },
                                createImgData: function(t) {
                                    var e = r(t, this.assetsPath, this.path),
                                        s = u("img");
                                    s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", (function() {
                                        a.img = i, this._imageLoaded()
                                    }).bind(this), !1), s.src = e;
                                    var a = {
                                        img: s,
                                        assetData: t
                                    };
                                    return a
                                },
                                createImageData: function(t) {
                                    var e = r(t, this.assetsPath, this.path),
                                        s = te("image");
                                    w ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", (function() {
                                        a.img = i, this._imageLoaded()
                                    }).bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                                    var a = {
                                        img: s,
                                        assetData: t
                                    };
                                    return a
                                },
                                imageLoaded: s,
                                footageLoaded: a,
                                setCacheType: function(t, e) {
                                    "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                }
                            }, o
                        }();

                    function tr() {}
                    tr.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t])
                                for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                                this.removeEventListener(t, e)
                            }).bind(this)
                        },
                        removeEventListener: function(t, e) {
                            if (e) {
                                if (this._cbs[t]) {
                                    for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                                    this._cbs[t].length || (this._cbs[t] = null)
                                }
                            } else this._cbs[t] = null
                        }
                    };
                    var tn = function(t) {
                            for (var e = [], i = 0; i < t.length; i += 1) {
                                var s = t[i],
                                    a = {
                                        time: s.tm,
                                        duration: s.dr
                                    };
                                try {
                                    a.payload = JSON.parse(t[i].cm)
                                } catch {
                                    try {
                                        a.payload = function(t) {
                                            for (var e, i = t.split(`\r
`), s = {}, a = 0, r = 0; r < i.length; r += 1) 2 === (e = i[r].split(":")).length && (s[e[0]] = e[1].trim(), a += 1);
                                            if (0 === a) throw Error();
                                            return s
                                        }(t[i].cm)
                                    } catch {
                                        a.payload = {
                                            name: t[i].cm
                                        }
                                    }
                                }
                                e.push(a)
                            }
                            return e
                        },
                        th = function() {
                            function t(t) {
                                this.compositions.push(t)
                            }
                            return function() {
                                function e(t) {
                                    for (var e = 0, i = this.compositions.length; e < i;) {
                                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                        e += 1
                                    }
                                    return null
                                }
                                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                            }
                        }(),
                        to = {};

                    function tl(t) {
                        return (tl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var tp = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = N(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = _, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = th(), this.imagePreloader = new ta, this.audioController = y(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new F("drawnFrame", 0, 0, 0), this.expressionsPlugin = U()
                    };
                    g([tr], tp), tp.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                        var i = to[e];
                        this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), ts.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                    }, tp.prototype.onSetupError = function() {
                        this.trigger("data_failed")
                    }, tp.prototype.setupAnimation = function(t) {
                        ts.completeAnimation(t, this.configAnimation)
                    }, tp.prototype.setData = function(t, e) {
                        e && "object" !== tl(e) && (e = JSON.parse(e));
                        var i = {
                                wrapper: t,
                                animationData: e
                            },
                            s = t.attributes;
                        i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : function() {
                            if (to.canvas) return "canvas";
                            for (var t in to)
                                if (to[t]) return t;
                            return ""
                        }() || "canvas";
                        var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                        "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10)), i.autoplay = "false" !== (s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value), i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
                    }, tp.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        var e, i, s = this.animationData.layers,
                            a = s.length,
                            r = t.layers,
                            n = r.length;
                        for (i = 0; i < n; i += 1)
                            for (e = 0; e < a;) {
                                if (s[e].id === r[i].id) {
                                    s[e] = r[i];
                                    break
                                }
                                e += 1
                            }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                            for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                        this.animationData.__complete = !1, ts.completeAnimation(this.animationData, this.onSegmentComplete)
                    }, tp.prototype.onSegmentComplete = function(t) {
                        this.animationData = t;
                        var e = U();
                        e && e.initExpressions(this), this.loadNextSegment()
                    }, tp.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || 0 === t.length || !this.autoloadSegments) {
                            this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                            return
                        }
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, ts.loadData(i, this.includeLayers.bind(this), (function() {
                            this.trigger("data_failed")
                        }).bind(this))
                    }, tp.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                    }, tp.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded()
                    }, tp.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                    }, tp.prototype.configAnimation = function(t) {
                        if (this.renderer) try {
                            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = tn(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                        } catch (t) {
                            this.triggerConfigError(t)
                        }
                    }, tp.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                    }, tp.prototype.checkLoaded = function() {
                        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                            this.isLoaded = !0;
                            var t = U();
                            t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                                this.trigger("DOMLoaded")
                            }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                        }
                    }, tp.prototype.resize = function(t, e) {
                        this.renderer.updateContainerSize("number" == typeof t ? t : void 0, "number" == typeof e ? e : void 0)
                    }, tp.prototype.setSubframe = function(t) {
                        this.isSubframeEnabled = !!t
                    }, tp.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                    }, tp.prototype.renderFrame = function() {
                        if (!(!1 === this.isLoaded || !this.renderer)) try {
                            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        } catch (t) {
                            this.triggerRenderFrameError(t)
                        }
                    }, tp.prototype.play = function(t) {
                        t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                    }, tp.prototype.pause = function(t) {
                        t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                    }, tp.prototype.togglePause = function(t) {
                        t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                    }, tp.prototype.stop = function(t) {
                        t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                    }, tp.prototype.getMarkerData = function(t) {
                        for (var e, i = 0; i < this.markers.length; i += 1)
                            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                        return null
                    }, tp.prototype.goToAndStop = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            if (isNaN(Number(t))) {
                                var s = this.getMarkerData(t);
                                s && this.goToAndStop(s.time, !0)
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause()
                        }
                    }, tp.prototype.goToAndPlay = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            var s = Number(t);
                            if (isNaN(s)) {
                                var a = this.getMarkerData(t);
                                a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                            } else this.goToAndStop(s, e, i);
                            this.play()
                        }
                    }, tp.prototype.advanceTime = function(t) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var e = this.currentRawFrame + t * this.frameModifier,
                                i = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i = !0, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                        }
                    }, tp.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                    }, tp.prototype.setSegment = function(t, e) {
                        var i = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                    }, tp.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" === tl(t[0])) {
                            var i, s = t.length;
                            for (i = 0; i < s; i += 1) this.segments.push(t[i])
                        } else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                    }, tp.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                    }, tp.prototype.checkSegments = function(t) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                    }, tp.prototype.destroy = function(t) {
                        t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                    }, tp.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame()
                    }, tp.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier()
                    }, tp.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                    }, tp.prototype.setLoop = function(t) {
                        this.loop = t
                    }, tp.prototype.setVolume = function(t, e) {
                        e && this.name !== e || this.audioController.setVolume(t)
                    }, tp.prototype.getVolume = function() {
                        return this.audioController.getVolume()
                    }, tp.prototype.mute = function(t) {
                        t && this.name !== t || this.audioController.mute()
                    }, tp.prototype.unmute = function(t) {
                        t && this.name !== t || this.audioController.unmute()
                    }, tp.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                    }, tp.prototype.getPath = function() {
                        return this.path
                    }, tp.prototype.getAssetsPath = function(t) {
                        var e = "";
                        if (t.e) e = t.p;
                        else if (this.assetsPath) {
                            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                        } else e = this.path + (t.u ? t.u : "") + t.p;
                        return e
                    }, tp.prototype.getAssetData = function(t) {
                        for (var e = 0, i = this.assets.length; e < i;) {
                            if (t === this.assets[e].id) return this.assets[e];
                            e += 1
                        }
                        return null
                    }, tp.prototype.hide = function() {
                        this.renderer.hide()
                    }, tp.prototype.show = function() {
                        this.renderer.show()
                    }, tp.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate
                    }, tp.prototype.updateDocumentData = function(t, e, i) {
                        try {
                            this.renderer.getElementByPath(t).updateDocumentData(e, i)
                        } catch {}
                    }, tp.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                            case "enterFrame":
                                this.triggerEvent(t, new F(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "drawnFrame":
                                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new L(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new I(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new B(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new z(t, this));
                                break;
                            default:
                                this.triggerEvent(t)
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new F(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new L(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new I(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new B(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new z(t, this))
                    }, tp.prototype.triggerRenderFrameError = function(t) {
                        var e = new V(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    }, tp.prototype.triggerConfigError = function(t) {
                        var e = new R(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    };
                    var tf = function() {
                            var t = {},
                                e = [],
                                i = 0,
                                s = 0,
                                a = 0,
                                r = !0,
                                n = !1;

                            function h(t) {
                                for (var i = 0, a = t.target; i < s;) e[i].animation === a && (e.splice(i, 1), i -= 1, s -= 1, a.isPaused || p()), i += 1
                            }

                            function o(t, i) {
                                if (!t) return null;
                                for (var a = 0; a < s;) {
                                    if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                                    a += 1
                                }
                                var r = new tp;
                                return f(r, t), r.setData(t, i), r
                            }

                            function l() {
                                a += 1, c()
                            }

                            function p() {
                                a -= 1
                            }

                            function f(t, i) {
                                t.addEventListener("destroy", h), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                    elem: i,
                                    animation: t
                                }), s += 1
                            }

                            function m(t) {
                                var h, o = t - i;
                                for (h = 0; h < s; h += 1) e[h].animation.advanceTime(o);
                                i = t, a && !n ? window.requestAnimationFrame(m) : r = !0
                            }

                            function d(t) {
                                i = t, window.requestAnimationFrame(m)
                            }

                            function c() {
                                !n && a && r && (window.requestAnimationFrame(d), r = !1)
                            }
                            return t.registerAnimation = o, t.loadAnimation = function(t) {
                                var e = new tp;
                                return f(e, null), e.setParams(t), e
                            }, t.setSpeed = function(t, i) {
                                var a;
                                for (a = 0; a < s; a += 1) e[a].animation.setSpeed(t, i)
                            }, t.setDirection = function(t, i) {
                                var a;
                                for (a = 0; a < s; a += 1) e[a].animation.setDirection(t, i)
                            }, t.play = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.play(t)
                            }, t.pause = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.pause(t)
                            }, t.stop = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.stop(t)
                            }, t.togglePause = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
                            }, t.searchAnimations = function(t, e, i) {
                                var s, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    r = a.length;
                                for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), o(a[s], t);
                                if (e && 0 === r) {
                                    i || (i = "svg");
                                    var n = document.getElementsByTagName("body")[0];
                                    n.innerText = "";
                                    var h = u("div");
                                    h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", i), n.appendChild(h), o(h, t)
                                }
                            }, t.resize = function() {
                                var t;
                                for (t = 0; t < s; t += 1) e[t].animation.resize()
                            }, t.goToAndStop = function(t, i, a) {
                                var r;
                                for (r = 0; r < s; r += 1) e[r].animation.goToAndStop(t, i, a)
                            }, t.destroy = function(t) {
                                var i;
                                for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                            }, t.freeze = function() {
                                n = !0
                            }, t.unfreeze = function() {
                                n = !1, c()
                            }, t.setVolume = function(t, i) {
                                var a;
                                for (a = 0; a < s; a += 1) e[a].animation.setVolume(t, i)
                            }, t.mute = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.mute(t)
                            }, t.unmute = function(t) {
                                var i;
                                for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
                            }, t.getRegisteredAnimations = function() {
                                var t, i = e.length,
                                    s = [];
                                for (t = 0; t < i; t += 1) s.push(e[t].animation);
                                return s
                            }, t
                        }(),
                        tm = function() {
                            var t = {};
                            t.getBezierEasing = function(t, i, s, a, n) {
                                var h = n || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                                if (e[h]) return e[h];
                                var o = new r([t, i, s, a]);
                                return e[h] = o, o
                            };
                            var e = {},
                                i = "function" == typeof Float32Array;

                            function s(t, e, i) {
                                return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
                            }

                            function a(t, e, i) {
                                return 3 * (1 - 3 * i + 3 * e) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e
                            }

                            function r(t) {
                                this._p = t, this._mSampleValues = i ? new Float32Array(11) : Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                            }
                            return r.prototype = {
                                get: function(t) {
                                    var e = this._p[0],
                                        i = this._p[1],
                                        a = this._p[2],
                                        r = this._p[3];
                                    return this._precomputed || this._precompute(), e === i && a === r ? t : 0 === t ? 0 : 1 === t ? 1 : s(this._getTForX(t), i, r)
                                },
                                _precompute: function() {
                                    var t = this._p[0],
                                        e = this._p[1],
                                        i = this._p[2],
                                        s = this._p[3];
                                    this._precomputed = !0, (t !== e || i !== s) && this._calcSampleValues()
                                },
                                _calcSampleValues: function() {
                                    for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = s(.1 * i, t, e)
                                },
                                _getTForX: function(t) {
                                    for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, h = 1; 10 !== h && r[h] <= t; ++h) n += .1;
                                    var o = n + (t - r[--h]) / (r[h + 1] - r[h]) * .1,
                                        l = a(o, e, i);
                                    return l >= .001 ? function(t, e, i, r) {
                                        for (var n = 0; n < 4; ++n) {
                                            var h = a(e, i, r);
                                            if (0 === h) break;
                                            var o = s(e, i, r) - t;
                                            e -= o / h
                                        }
                                        return e
                                    }(t, o, e, i) : 0 === l ? o : function(t, e, i, a, r) {
                                        var n, h, o = 0;
                                        do(n = s(h = e + (i - e) / 2, a, r) - t) > 0 ? i = h : e = h; while (Math.abs(n) > 1e-7 && ++o < 10);
                                        return h
                                    }(t, n, n + .1, e, i)
                                }
                            }, t
                        }(),
                        td = function(t) {
                            return t.concat(b(t.length))
                        },
                        tc = function(t, e, i) {
                            var s = 0,
                                a = t,
                                r = b(a);
                            return {
                                newElement: function() {
                                    var t;
                                    return s ? (s -= 1, t = r[s]) : t = e(), t
                                },
                                release: function(t) {
                                    s === a && (r = td(r), a *= 2), i && i(t), r[s] = t, s += 1
                                }
                            }
                        },
                        tu = tc(8, function() {
                            return {
                                addedLength: 0,
                                percents: v("float32", $()),
                                lengths: v("float32", $())
                            }
                        }),
                        tg = tc(8, function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }, function(t) {
                            var e, i = t.lengths.length;
                            for (e = 0; e < i; e += 1) tu.release(t.lengths[e]);
                            t.lengths.length = 0
                        }),
                        ty = function() {
                            var t, e = Math;

                            function i(t, e, i, s, a, r) {
                                var n = t * s + e * a + i * r - a * s - r * t - i * e;
                                return n > -.001 && n < .001
                            }
                            var s = function(t, e, i, s) {
                                var a, r, n, h, o, l, p = $(),
                                    f = 0,
                                    m = [],
                                    d = [],
                                    c = tu.newElement();
                                for (n = i.length, a = 0; a < p; a += 1) {
                                    for (o = a / (p - 1), l = 0, r = 0; r < n; r += 1) h = P(1 - o, 3) * t[r] + 3 * P(1 - o, 2) * o * i[r] + 3 * (1 - o) * P(o, 2) * s[r] + P(o, 3) * e[r], m[r] = h, null !== d[r] && (l += P(m[r] - d[r], 2)), d[r] = m[r];
                                    l && (f += l = S(l)), c.percents[a] = o, c.lengths[a] = f
                                }
                                return c.addedLength = f, c
                            };

                            function a(t) {
                                this.segmentLength = 0, this.points = Array(t)
                            }

                            function r(t, e) {
                                this.partialLength = t, this.point = e
                            }
                            var n = (t = {}, function(e, s, n, h) {
                                var o = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + n[0] + "_" + n[1] + "_" + h[0] + "_" + h[1]).replace(/\./g, "p");
                                if (!t[o]) {
                                    var l, p, f, m, d, c, u, g = $(),
                                        y = 0,
                                        v = null;
                                    2 === e.length && (e[0] !== s[0] || e[1] !== s[1]) && i(e[0], e[1], s[0], s[1], e[0] + n[0], e[1] + n[1]) && i(e[0], e[1], s[0], s[1], s[0] + h[0], s[1] + h[1]) && (g = 2);
                                    var _ = new a(g);
                                    for (f = n.length, l = 0; l < g; l += 1) {
                                        for (u = b(f), d = l / (g - 1), c = 0, p = 0; p < f; p += 1) m = P(1 - d, 3) * e[p] + 3 * P(1 - d, 2) * d * (e[p] + n[p]) + 3 * (1 - d) * P(d, 2) * (s[p] + h[p]) + P(d, 3) * s[p], u[p] = m, null !== v && (c += P(u[p] - v[p], 2));
                                        y += c = S(c), _.points[l] = new r(c, u), v = u
                                    }
                                    _.segmentLength = y, t[o] = _
                                }
                                return t[o]
                            });

                            function h(t, e) {
                                var i = e.percents,
                                    s = e.lengths,
                                    a = i.length,
                                    r = A((a - 1) * t),
                                    n = t * e.addedLength,
                                    h = 0;
                                if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                                for (var o = s[r] > n ? -1 : 1, l = !0; l;)
                                    if (s[r] <= n && s[r + 1] > n ? (h = (n - s[r]) / (s[r + 1] - s[r]), l = !1) : r += o, r < 0 || r >= a - 1) {
                                        if (r === a - 1) return i[r];
                                        l = !1
                                    } return i[r] + (i[r + 1] - i[r]) * h
                            }
                            var o = v("float32", 8);
                            return {
                                getSegmentsLength: function(t) {
                                    var e, i = tg.newElement(),
                                        a = t.c,
                                        r = t.v,
                                        n = t.o,
                                        h = t.i,
                                        o = t._length,
                                        l = i.lengths,
                                        p = 0;
                                    for (e = 0; e < o - 1; e += 1) l[e] = s(r[e], r[e + 1], n[e], h[e + 1]), p += l[e].addedLength;
                                    return a && o && (l[e] = s(r[e], r[0], n[e], h[0]), p += l[e].addedLength), i.totalLength = p, i
                                },
                                getNewSegment: function(t, i, s, a, r, n, l) {
                                    r < 0 ? r = 0 : r > 1 && (r = 1);
                                    var p, f = h(r, l),
                                        m = h(n = n > 1 ? 1 : n, l),
                                        d = t.length,
                                        c = 1 - f,
                                        u = 1 - m,
                                        g = c * c * c,
                                        y = f * c * c * 3,
                                        v = f * f * c * 3,
                                        b = f * f * f,
                                        _ = c * c * u,
                                        x = f * c * u + c * f * u + c * c * m,
                                        k = f * f * u + c * f * m + f * c * m,
                                        w = f * f * m,
                                        P = c * u * u,
                                        S = f * u * u + c * m * u + c * u * m,
                                        A = f * m * u + c * m * m + f * u * m,
                                        D = f * m * m,
                                        C = u * u * u,
                                        E = m * u * u + u * m * u + u * u * m,
                                        M = m * m * u + u * m * m + m * u * m,
                                        T = m * m * m;
                                    for (p = 0; p < d; p += 1) o[4 * p] = e.round((g * t[p] + y * s[p] + v * a[p] + b * i[p]) * 1e3) / 1e3, o[4 * p + 1] = e.round((_ * t[p] + x * s[p] + k * a[p] + w * i[p]) * 1e3) / 1e3, o[4 * p + 2] = e.round((P * t[p] + S * s[p] + A * a[p] + D * i[p]) * 1e3) / 1e3, o[4 * p + 3] = e.round((C * t[p] + E * s[p] + M * a[p] + T * i[p]) * 1e3) / 1e3;
                                    return o
                                },
                                getPointInSegment: function(t, i, s, a, r, n) {
                                    var o = h(r, n),
                                        l = 1 - o;
                                    return [e.round((l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * s[0] + (o * o * l + l * o * o + o * l * o) * a[0] + o * o * o * i[0]) * 1e3) / 1e3, e.round((l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * s[1] + (o * o * l + l * o * o + o * l * o) * a[1] + o * o * o * i[1]) * 1e3) / 1e3]
                                },
                                buildBezierData: n,
                                pointOnLine2D: i,
                                pointOnLine3D: function(t, s, a, r, n, h, o, l, p) {
                                    if (0 === a && 0 === h && 0 === p) return i(t, s, r, n, o, l);
                                    var f, m = e.sqrt(e.pow(r - t, 2) + e.pow(n - s, 2) + e.pow(h - a, 2)),
                                        d = e.sqrt(e.pow(o - t, 2) + e.pow(l - s, 2) + e.pow(p - a, 2)),
                                        c = e.sqrt(e.pow(o - r, 2) + e.pow(l - n, 2) + e.pow(p - h, 2));
                                    return (f = m > d ? m > c ? m - d - c : c - d - m : c > d ? c - d - m : d - m - c) > -1e-4 && f < 1e-4
                                }
                            }
                        }(),
                        tv = Math.abs;

                    function tb(t, e) {
                        var i, s, a, r, n, h, o, l, p, f, m, d, c, u, g, y, b, _, x, k, w, P, S, A, D, C, E, T, F, I, L, B, z = this.offsetTime;
                        "multidimensional" === this.propType && (B = v("float32", this.pv.length));
                        for (var V, R, N, O = e.lastIndex, q = O, j = this.keyframes.length - 1, W = !0; W;) {
                            if (V = this.keyframes[q], R = this.keyframes[q + 1], q === j - 1 && t >= R.t - z) {
                                V.h && (V = R), O = 0;
                                break
                            }
                            if (R.t - z > t) {
                                O = q;
                                break
                            }
                            q < j - 1 ? q += 1 : (O = 0, W = !1)
                        }
                        N = this.keyframesMetadata[q] || {};
                        var H, Y, X, G, K, J, Z, U = R.t - z,
                            Q = V.t - z;
                        if (V.to) {
                            N.bezierData || (N.bezierData = ty.buildBezierData(V.s, R.s || V.e, V.to, V.ti));
                            var $ = N.bezierData;
                            if (t >= U || t < Q) {
                                var tt = t >= U ? $.points.length - 1 : 0;
                                for (Y = $.points[tt].point.length, H = 0; H < Y; H += 1) B[H] = $.points[tt].point[H]
                            } else {
                                N.__fnct ? J = N.__fnct : N.__fnct = J = tm.getBezierEasing(V.o.x, V.o.y, V.i.x, V.i.y, V.n).get, X = J((t - Q) / (U - Q));
                                var te, ti = $.segmentLength * X,
                                    ts = e.lastFrame < t && e._lastKeyframeIndex === q ? e._lastAddedLength : 0;
                                for (K = e.lastFrame < t && e._lastKeyframeIndex === q ? e._lastPoint : 0, W = !0, G = $.points.length; W;) {
                                    if (ts += $.points[K].partialLength, 0 === ti || 0 === X || K === $.points.length - 1) {
                                        for (Y = $.points[K].point.length, H = 0; H < Y; H += 1) B[H] = $.points[K].point[H];
                                        break
                                    }
                                    if (ti >= ts && ti < ts + $.points[K + 1].partialLength) {
                                        for (te = (ti - ts) / $.points[K + 1].partialLength, Y = $.points[K].point.length, H = 0; H < Y; H += 1) B[H] = $.points[K].point[H] + ($.points[K + 1].point[H] - $.points[K].point[H]) * te;
                                        break
                                    }
                                    K < G - 1 ? K += 1 : W = !1
                                }
                                e._lastPoint = K, e._lastAddedLength = ts - $.points[K].partialLength, e._lastKeyframeIndex = q
                            }
                        } else if (j = V.s.length, Z = R.s || V.e, this.sh && 1 !== V.h) {
                            t >= U ? (B[0] = Z[0], B[1] = Z[1], B[2] = Z[2]) : t <= Q ? (B[0] = V.s[0], B[1] = V.s[1], B[2] = V.s[2]) : (_ = B, k = (x = (i = t_(V.s), s = t_(Z), a = (t - Q) / (U - Q), p = [], f = i[0], m = i[1], d = i[2], c = i[3], u = s[0], g = s[1], y = s[2], (n = f * u + m * g + d * y + c * (b = s[3])) < 0 && (n = -n, u = -u, g = -g, y = -y, b = -b), 1 - n > 1e-6 ? (h = Math.sin(r = Math.acos(n)), o = Math.sin((1 - a) * r) / h, l = Math.sin(a * r) / h) : (o = 1 - a, l = a), p[0] = o * f + l * u, p[1] = o * m + l * g, p[2] = o * d + l * y, p[3] = o * c + l * b, p))[0], w = x[1], P = x[2], A = Math.atan2(2 * w * (S = x[3]) - 2 * k * P, 1 - 2 * w * w - 2 * P * P), D = Math.asin(2 * k * w + 2 * P * S), C = Math.atan2(2 * k * S - 2 * w * P, 1 - 2 * k * k - 2 * P * P), _[0] = A / M, _[1] = D / M, _[2] = C / M)
                        } else
                            for (q = 0; q < j; q += 1) 1 !== V.h && (t >= U ? X = 1 : t < Q ? X = 0 : (V.o.x.constructor === Array ? (N.__fnct || (N.__fnct = []), N.__fnct[q] ? J = N.__fnct[q] : (E = void 0 === V.o.x[q] ? V.o.x[0] : V.o.x[q], T = void 0 === V.o.y[q] ? V.o.y[0] : V.o.y[q], F = void 0 === V.i.x[q] ? V.i.x[0] : V.i.x[q], I = void 0 === V.i.y[q] ? V.i.y[0] : V.i.y[q], J = tm.getBezierEasing(E, T, F, I).get, N.__fnct[q] = J)) : N.__fnct ? J = N.__fnct : (E = V.o.x, T = V.o.y, F = V.i.x, I = V.i.y, J = tm.getBezierEasing(E, T, F, I).get, V.keyframeMetadata = J), X = J((t - Q) / (U - Q)))), Z = R.s || V.e, L = 1 === V.h ? V.s[q] : V.s[q] + (Z[q] - V.s[q]) * X, "multidimensional" === this.propType ? B[q] = L : B = L;
                        return e.lastIndex = O, B
                    }

                    function t_(t) {
                        var e = t[0] * M,
                            i = t[1] * M,
                            s = t[2] * M,
                            a = Math.cos(e / 2),
                            r = Math.cos(i / 2),
                            n = Math.cos(s / 2),
                            h = Math.sin(e / 2),
                            o = Math.sin(i / 2),
                            l = Math.sin(s / 2);
                        return [h * o * n + a * r * l, h * r * n + a * o * l, a * o * n - h * r * l, a * r * n - h * o * l]
                    }

                    function tx() {
                        var t = this.comp.renderedFrame - this.offsetTime,
                            e = this.keyframes[0].t - this.offsetTime,
                            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(t === this._caching.lastFrame || -999999 !== this._caching.lastFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var s = this.interpolateValue(t, this._caching);
                            this.pv = s
                        }
                        return this._caching.lastFrame = t, this.pv
                    }

                    function tk(t) {
                        var e;
                        if ("unidimensional" === this.propType) e = t * this.mult, tv(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                        else
                            for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, tv(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
                    }

                    function tw() {
                        if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                            if (this.lock) return void this.setVValue(this.pv);
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function tP(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function tS(t, e, i, s) {
                        this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = tw, this.setVValue = tk, this.addEffect = tP
                    }

                    function tA(t, e, i, s) {
                        this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var a, r = e.k.length;
                        for (this.v = v("float32", r), this.pv = v("float32", r), this.vel = v("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = tw, this.setVValue = tk, this.addEffect = tP
                    }

                    function tD(t, e, i, s) {
                        this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = -999999, this.pv = -999999, this._isFirstFrame = !0, this.getValue = tw, this.setVValue = tk, this.interpolateValue = tb, this.effectsSequence = [tx.bind(this)], this.addEffect = tP
                    }

                    function tC(t, e, i, s) {
                        this.propType = "multidimensional";
                        var a, r, n, h, o, l = e.k.length;
                        for (a = 0; a < l - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, n = e.k[a + 1].s, h = e.k[a].to, o = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && ty.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + h[0], r[1] + h[1]) && ty.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && ty.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + h[0], r[1] + h[1], r[2] + h[2]) && ty.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + o[0], n[1] + o[1], n[2] + o[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === h[0] && 0 === h[1] && 0 === o[0] && 0 === o[1] && (2 === r.length || r[2] === n[2] && 0 === h[2] && 0 === o[2]) && (e.k[a].to = null, e.k[a].ti = null));
                        this.effectsSequence = [tx.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = tw, this.setVValue = tk, this.interpolateValue = tb, this.frameId = -1;
                        var p = e.k[0].s.length;
                        for (this.v = v("float32", p), this.pv = v("float32", p), a = 0; a < p; a += 1) this.v[a] = -999999, this.pv[a] = -999999;
                        this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: v("float32", p)
                        }, this.addEffect = tP
                    }
                    var tE = {
                        getProp: function(t, e, i, s, a) {
                            var r;
                            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                                if ("number" == typeof e.k[0]) r = new tA(t, e, s, a);
                                else switch (i) {
                                    case 0:
                                        r = new tD(t, e, s, a);
                                        break;
                                    case 1:
                                        r = new tC(t, e, s, a)
                                } else r = new tS(t, e, s, a);
                            return r.effectsSequence.length && a.addDynamicProperty(r), r
                        }
                    };

                    function tM() {}
                    tM.prototype = {
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                        },
                        iterateDynamicProperties: function() {
                            this._mdf = !1;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                        },
                        initDynamicPropertyContainer: function(t) {
                            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                        }
                    };
                    var tT = tc(8, function() {
                        return v("float32", 2)
                    });

                    function tF() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = b(this._maxLength), this.o = b(this._maxLength), this.i = b(this._maxLength)
                    }
                    tF.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var i = 0; i < e;) this.v[i] = tT.newElement(), this.o[i] = tT.newElement(), this.i[i] = tT.newElement(), i += 1
                    }, tF.prototype.setLength = function(t) {
                        for (; this._maxLength < t;) this.doubleArrayLength();
                        this._length = t
                    }, tF.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(b(this._maxLength)), this.i = this.i.concat(b(this._maxLength)), this.o = this.o.concat(b(this._maxLength)), this._maxLength *= 2
                    }, tF.prototype.setXYAt = function(t, e, i, s, a) {
                        var r;
                        switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                            case "v":
                                r = this.v;
                                break;
                            case "i":
                                r = this.i;
                                break;
                            case "o":
                                r = this.o;
                                break;
                            default:
                                r = []
                        }
                        r[s] && (!r[s] || a) || (r[s] = tT.newElement()), r[s][0] = t, r[s][1] = e
                    }, tF.prototype.setTripleAt = function(t, e, i, s, a, r, n, h) {
                        this.setXYAt(t, e, "v", n, h), this.setXYAt(i, s, "o", n, h), this.setXYAt(a, r, "i", n, h)
                    }, tF.prototype.reverse = function() {
                        var t = new tF;
                        t.setPathData(this.c, this._length);
                        var e = this.v,
                            i = this.o,
                            s = this.i,
                            a = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                        var r, n = this._length - 1,
                            h = this._length;
                        for (r = a; r < h; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), n -= 1;
                        return t
                    }, tF.prototype.length = function() {
                        return this._length
                    };
                    var tI = ((i = tc(4, function() {
                        return new tF
                    }, function(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) tT.release(t.v[e]), tT.release(t.i[e]), tT.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    })).clone = function(t) {
                        var e, s = i.newElement(),
                            a = void 0 === t._length ? t.v.length : t._length;
                        for (s.setLength(a), s.c = t.c, e = 0; e < a; e += 1) s.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return s
                    }, i);

                    function tL() {
                        this._length = 0, this._maxLength = 4, this.shapes = b(this._maxLength)
                    }
                    tL.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(b(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                    }, tL.prototype.releaseShapes = function() {
                        var t;
                        for (t = 0; t < this._length; t += 1) tI.release(this.shapes[t]);
                        this._length = 0
                    };
                    var tB = (s = 0, a = 4, r = b(4), {
                            newShapeCollection: function() {
                                var t;
                                return s ? (s -= 1, t = r[s]) : t = new tL, t
                            },
                            release: function(t) {
                                var e, i = t._length;
                                for (e = 0; e < i; e += 1) tI.release(t.shapes[e]);
                                t._length = 0, s === a && (r = td(r), a *= 2), r[s] = t, s += 1
                            }
                        }),
                        tz = function() {
                            function t(t, e, i) {
                                var s, a, r, n, h, o, l, p, f, m = i.lastIndex,
                                    d = this.keyframes;
                                if (t < d[0].t - this.offsetTime) s = d[0].s[0], r = !0, m = 0;
                                else if (t >= d[d.length - 1].t - this.offsetTime) s = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], r = !0;
                                else {
                                    for (var c, u, g, y, v = m, b = d.length - 1, _ = !0; _ && (u = d[v], !((g = d[v + 1]).t - this.offsetTime > t));) v < b - 1 ? v += 1 : _ = !1;
                                    y = this.keyframesMetadata[v] || {}, r = 1 === u.h, m = v, r || (t >= g.t - this.offsetTime ? p = 1 : t < u.t - this.offsetTime ? p = 0 : (y.__fnct ? c = y.__fnct : y.__fnct = c = tm.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, p = c((t - (u.t - this.offsetTime)) / (g.t - this.offsetTime - (u.t - this.offsetTime)))), a = g.s ? g.s[0] : u.e[0]), s = u.s[0]
                                }
                                for (o = e._length, l = s.i[0].length, i.lastIndex = m, n = 0; n < o; n += 1)
                                    for (h = 0; h < l; h += 1) f = r ? s.i[n][h] : s.i[n][h] + (a.i[n][h] - s.i[n][h]) * p, e.i[n][h] = f, f = r ? s.o[n][h] : s.o[n][h] + (a.o[n][h] - s.o[n][h]) * p, e.o[n][h] = f, f = r ? s.v[n][h] : s.v[n][h] + (a.v[n][h] - s.v[n][h]) * p, e.v[n][h] = f
                            }

                            function e() {
                                var t = this.comp.renderedFrame - this.offsetTime,
                                    e = this.keyframes[0].t - this.offsetTime,
                                    i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    s = this._caching.lastFrame;
                                return -999999 !== s && (s < e && t < e || s > i && t > i) || (this._caching.lastIndex = s < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                            }

                            function i() {
                                this.paths = this.localShapeCollection
                            }

                            function s(t) {
                                (function(t, e) {
                                    if (t._length !== e._length || t.c !== e.c) return !1;
                                    var i, s = t._length;
                                    for (i = 0; i < s; i += 1)
                                        if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                    return !0
                                })(this.v, t) || (this.v = tI.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                            }

                            function a() {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (!this.effectsSequence.length) {
                                        this._mdf = !1;
                                        return
                                    }
                                    if (this.lock) return void this.setVValue(this.pv);
                                    this.lock = !0, this._mdf = !1;
                                    var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                        i = this.effectsSequence.length;
                                    for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }

                            function r(t, e, s) {
                                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                var a = 3 === s ? e.pt.k : e.ks.k;
                                this.v = tI.clone(a), this.pv = tI.clone(this.v), this.localShapeCollection = tB.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                            }

                            function n(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function h(t, s, a) {
                                this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                var r = this.keyframes[0].s[0].i.length;
                                this.v = tI.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, r), this.pv = tI.clone(this.v), this.localShapeCollection = tB.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                                    lastFrame: -999999,
                                    lastIndex: 0
                                }, this.effectsSequence = [e.bind(this)]
                            }
                            r.prototype.interpolateShape = t, r.prototype.getValue = a, r.prototype.setVValue = s, r.prototype.addEffect = n, h.prototype.getValue = a, h.prototype.interpolateShape = t, h.prototype.setVValue = s, h.prototype.addEffect = n;
                            var o = function() {
                                    function t(t, e) {
                                        this.v = tI.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = tB.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = tE.getProp(t, e.p, 1, 0, this), this.s = tE.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                    }
                                    return t.prototype = {
                                        reset: i,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                        },
                                        convertEllToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                i = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                a = 3 !== this.d,
                                                r = this.v;
                                            r.v[0][0] = t, r.v[0][1] = e - s, r.v[1][0] = a ? t + i : t - i, r.v[1][1] = e, r.v[2][0] = t, r.v[2][1] = e + s, r.v[3][0] = a ? t - i : t + i, r.v[3][1] = e, r.i[0][0] = a ? t - .5519 * i : t + .5519 * i, r.i[0][1] = e - s, r.i[1][0] = a ? t + i : t - i, r.i[1][1] = e - .5519 * s, r.i[2][0] = a ? t + .5519 * i : t - .5519 * i, r.i[2][1] = e + s, r.i[3][0] = a ? t - i : t + i, r.i[3][1] = e + .5519 * s, r.o[0][0] = a ? t + .5519 * i : t - .5519 * i, r.o[0][1] = e - s, r.o[1][0] = a ? t + i : t - i, r.o[1][1] = e + .5519 * s, r.o[2][0] = a ? t - .5519 * i : t + .5519 * i, r.o[2][1] = e + s, r.o[3][0] = a ? t - i : t + i, r.o[3][1] = e - .5519 * s
                                        }
                                    }, g([tM], t), t
                                }(),
                                l = function() {
                                    function t(t, e) {
                                        this.v = tI.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = tE.getProp(t, e.ir, 0, 0, this), this.is = tE.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = tE.getProp(t, e.pt, 0, 0, this), this.p = tE.getProp(t, e.p, 1, 0, this), this.r = tE.getProp(t, e.r, 0, M, this), this.or = tE.getProp(t, e.or, 0, 0, this), this.os = tE.getProp(t, e.os, 0, .01, this), this.localShapeCollection = tB.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                    }
                                    return t.prototype = {
                                        reset: i,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                        },
                                        convertStarToPath: function() {
                                            var t, e, i, s, a = 2 * Math.floor(this.pt.v),
                                                r = 2 * Math.PI / a,
                                                n = !0,
                                                h = this.or.v,
                                                o = this.ir.v,
                                                l = this.os.v,
                                                p = this.is.v,
                                                f = 2 * Math.PI * h / (2 * a),
                                                m = 2 * Math.PI * o / (2 * a),
                                                d = -Math.PI / 2;
                                            d += this.r.v;
                                            var c = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, t = 0; t < a; t += 1) {
                                                e = n ? h : o, i = n ? l : p, s = n ? f : m;
                                                var u = e * Math.cos(d),
                                                    g = e * Math.sin(d),
                                                    y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                    v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                                u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * s * i * c, g - v * s * i * c, u + y * s * i * c, g + v * s * i * c, t, !0), n = !n, d += r * c
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var t, e = Math.floor(this.pt.v),
                                                i = 2 * Math.PI / e,
                                                s = this.or.v,
                                                a = this.os.v,
                                                r = 2 * Math.PI * s / (4 * e),
                                                n = -(.5 * Math.PI),
                                                h = 3 === this.data.d ? -1 : 1;
                                            for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                var o = s * Math.cos(n),
                                                    l = s * Math.sin(n),
                                                    p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
                                                    f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l);
                                                o += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(o, l, o - p * r * a * h, l - f * r * a * h, o + p * r * a * h, l + f * r * a * h, t, !0), n += i * h
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, g([tM], t), t
                                }(),
                                p = function() {
                                    function t(t, e) {
                                        this.v = tI.newElement(), this.v.c = !0, this.localShapeCollection = tB.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = tE.getProp(t, e.p, 1, 0, this), this.s = tE.getProp(t, e.s, 1, 0, this), this.r = tE.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return t.prototype = {
                                        convertRectToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                i = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                a = C(i, s, this.r.v),
                                                r = .44810000000000005 * a;
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: i
                                    }, g([tM], t), t
                                }(),
                                f = {};
                            return f.getShapeProp = function(t, e, i) {
                                var s;
                                return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new r(t, e, i) : 5 === i ? s = new p(t, e) : 6 === i ? s = new o(t, e) : 7 === i && (s = new l(t, e)), s.k && t.addDynamicProperty(s), s
                            }, f.getConstructorFunction = function() {
                                return r
                            }, f.getKeyframedConstructorFunction = function() {
                                return h
                            }, f
                        }(),
                        tV = function() {
                            var t = Math.cos,
                                e = Math.sin,
                                i = Math.tan,
                                s = Math.round;

                            function a() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function r(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function n(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1)
                            }

                            function h(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1)
                            }

                            function o(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function l(t, e) {
                                return this._t(1, e, t, 1, 0, 0)
                            }

                            function p(t, e) {
                                return this.shear(i(t), i(e))
                            }

                            function f(s, a) {
                                var r = t(a),
                                    n = e(a);
                                return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function m(t, e, i) {
                                return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                            }

                            function d(t, e, i, s, a, r, n, h, o, l, p, f, m, d, c, u) {
                                return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = h, this.props[8] = o, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = m, this.props[13] = d, this.props[14] = c, this.props[15] = u, this
                            }

                            function c(t, e, i) {
                                return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                            }

                            function u(t, e, i, s, a, r, n, h, o, l, p, f, m, d, c, u) {
                                var g = this.props;
                                if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === h && 0 === o && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * m, g[13] = g[13] * r + g[15] * d, g[14] = g[14] * p + g[15] * c, g[15] *= u, this._identityCalculated = !1, this;
                                var y = g[0],
                                    v = g[1],
                                    b = g[2],
                                    _ = g[3],
                                    x = g[4],
                                    k = g[5],
                                    w = g[6],
                                    P = g[7],
                                    S = g[8],
                                    A = g[9],
                                    D = g[10],
                                    C = g[11],
                                    E = g[12],
                                    M = g[13],
                                    T = g[14],
                                    F = g[15];
                                return g[0] = y * t + v * a + b * o + _ * m, g[1] = y * e + v * r + b * l + _ * d, g[2] = y * i + v * n + b * p + _ * c, g[3] = y * s + v * h + b * f + _ * u, g[4] = x * t + k * a + w * o + P * m, g[5] = x * e + k * r + w * l + P * d, g[6] = x * i + k * n + w * p + P * c, g[7] = x * s + k * h + w * f + P * u, g[8] = S * t + A * a + D * o + C * m, g[9] = S * e + A * r + D * l + C * d, g[10] = S * i + A * n + D * p + C * c, g[11] = S * s + A * h + D * f + C * u, g[12] = E * t + M * a + T * o + F * m, g[13] = E * e + M * r + T * l + F * d, g[14] = E * i + M * n + T * p + F * c, g[15] = E * s + M * h + T * f + F * u, this._identityCalculated = !1, this
                            }

                            function g(t) {
                                var e = t.props;
                                return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                            }

                            function y() {
                                return this._identityCalculated || (this._identity = 1 === this.props[0] && 0 === this.props[1] && 0 === this.props[2] && 0 === this.props[3] && 0 === this.props[4] && 1 === this.props[5] && 0 === this.props[6] && 0 === this.props[7] && 0 === this.props[8] && 0 === this.props[9] && 1 === this.props[10] && 0 === this.props[11] && 0 === this.props[12] && 0 === this.props[13] && 0 === this.props[14] && 1 === this.props[15], this._identityCalculated = !0), this._identity
                            }

                            function b(t) {
                                for (var e = 0; e < 16;) {
                                    if (t.props[e] !== this.props[e]) return !1;
                                    e += 1
                                }
                                return !0
                            }

                            function _(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                                return t
                            }

                            function x(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                            }

                            function k(t, e, i) {
                                return {
                                    x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                    y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                    z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                                }
                            }

                            function w(t, e, i) {
                                return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                            }

                            function P(t, e, i) {
                                return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                            }

                            function S(t, e, i) {
                                return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }

                            function A() {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    e = this.props[5] / t,
                                    i = -this.props[1] / t,
                                    s = -this.props[4] / t,
                                    a = this.props[0] / t,
                                    r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                    h = new tV;
                                return h.props[0] = e, h.props[1] = i, h.props[4] = s, h.props[5] = a, h.props[12] = r, h.props[13] = n, h
                            }

                            function D(t) {
                                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                            }

                            function C(t) {
                                var e, i = t.length,
                                    s = [];
                                for (e = 0; e < i; e += 1) s[e] = D(t[e]);
                                return s
                            }

                            function E(t, e, i) {
                                var s = v("float32", 6);
                                if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                                else {
                                    var a = this.props[0],
                                        r = this.props[1],
                                        n = this.props[4],
                                        h = this.props[5],
                                        o = this.props[12],
                                        l = this.props[13];
                                    s[0] = t[0] * a + t[1] * n + o, s[1] = t[0] * r + t[1] * h + l, s[2] = e[0] * a + e[1] * n + o, s[3] = e[0] * r + e[1] * h + l, s[4] = i[0] * a + i[1] * n + o, s[5] = i[0] * r + i[1] * h + l
                                }
                                return s
                            }

                            function M(t, e, i) {
                                return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                            }

                            function T(t, e) {
                                if (this.isIdentity()) return t + "," + e;
                                var i = this.props;
                                return Math.round((t * i[0] + e * i[4] + i[12]) * 100) / 100 + "," + Math.round((t * i[1] + e * i[5] + i[13]) * 100) / 100
                            }

                            function F() {
                                for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += s(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                                return i
                            }

                            function I(t) {
                                return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(1e4 * t) / 1e4 : t
                            }

                            function L() {
                                var t = this.props;
                                return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
                            }
                            return function() {
                                this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = m, this.setTransform = d, this.translate = c, this.transform = u, this.multiply = g, this.applyToPoint = k, this.applyToX = w, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = M, this.applyToTriplePoints = E, this.applyToPointStringified = T, this.toCSS = F, this.to2dCSS = L, this.clone = _, this.cloneFromProps = x, this.equals = b, this.inversePoints = C, this.inversePoint = D, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = v("float32", 16), this.reset()
                            }
                        }();

                    function tR(t) {
                        return (tR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var tN = {};

                    function tO() {
                        tf.searchAnimations()
                    }
                    tN.play = tf.play, tN.pause = tf.pause, tN.setLocationHref = function(t) {
                        d(t)
                    }, tN.togglePause = tf.togglePause, tN.setSpeed = tf.setSpeed, tN.setDirection = tf.setDirection, tN.stop = tf.stop, tN.searchAnimations = tO, tN.registerAnimation = tf.registerAnimation, tN.loadAnimation = function(t) {
                        return tf.loadAnimation(t)
                    }, tN.setSubframeRendering = function(t) {
                        J(t)
                    }, tN.resize = tf.resize, tN.goToAndStop = tf.goToAndStop, tN.destroy = tf.destroy, tN.setQuality = function(t) {
                        if ("string" == typeof t) switch (t) {
                            case "high":
                                Q(200);
                                break;
                            default:
                            case "medium":
                                Q(50);
                                break;
                            case "low":
                                Q(10)
                        } else !isNaN(t) && t > 1 && Q(t)
                    }, tN.inBrowser = function() {
                        return "u" > typeof navigator
                    }, tN.installPlugin = function(t, e) {
                        "expressions" === t && Z(e)
                    }, tN.freeze = tf.freeze, tN.unfreeze = tf.unfreeze, tN.setVolume = tf.setVolume, tN.mute = tf.mute, tN.unmute = tf.unmute, tN.getRegisteredAnimations = tf.getRegisteredAnimations, tN.useWebWorker = function(t) {
                        m = !!t
                    }, tN.setIDPrefix = function(t) {
                        tt(t)
                    }, tN.__getFactory = function(t) {
                        switch (t) {
                            case "propertyFactory":
                                return tE;
                            case "shapePropertyFactory":
                                return tz;
                            case "matrix":
                                return tV;
                            default:
                                return null
                        }
                    }, tN.version = "5.12.2";
                    var tq = "",
                        tj = document.getElementsByTagName("script"),
                        tW = tj.length - 1,
                        tH = tj[tW] || {
                            src: ""
                        };
                    tq = tH.src ? tH.src.replace(/^[^\?]+\??/, "") : "",
                        function(t) {
                            for (var e = tq.split("&"), i = 0; i < e.length; i += 1) {
                                var s = e[i].split("=");
                                if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
                            }
                        }("renderer");
                    var tY = setInterval(function() {
                        "complete" === document.readyState && (clearInterval(tY), tO())
                    }, 100);
                    try {
                        (typeof t > "u" ? "undefined" : tR(t)) === "object" && "u" > typeof e || "function" == typeof define && define.amd || (window.bodymovin = tN)
                    } catch {}
                    var tX = (h = {}, (n = {}).registerModifier = function(t, e) {
                        h[t] || (h[t] = e)
                    }, n.getModifier = function(t, e, i) {
                        return new h[t](e, i)
                    }, n);

                    function tG() {}

                    function tK() {}

                    function tJ() {}
                    tG.prototype.initModifierProperties = function() {}, tG.prototype.addShapeToModifier = function() {}, tG.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: tB.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                        }
                    }, tG.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = -999999, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tG.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, g([tM], tG), g([tG], tK), tK.prototype.initModifierProperties = function(t, e) {
                        this.s = tE.getProp(t, e.s, 0, .01, this), this.e = tE.getProp(t, e.e, 0, .01, this), this.o = tE.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, tK.prototype.addShapeToModifier = function(t) {
                        t.pathsData = []
                    }, tK.prototype.calculateShapeEdges = function(t, e, i, s, a) {
                        var r, n = [];
                        e <= 1 ? n.push({
                            s: t,
                            e
                        }) : t >= 1 ? n.push({
                            s: t - 1,
                            e: e - 1
                        }) : (n.push({
                            s: t,
                            e: 1
                        }), n.push({
                            s: 0,
                            e: e - 1
                        }));
                        var h, o, l = [],
                            p = n.length;
                        for (h = 0; h < p; h += 1)(o = n[h]).e * a < s || o.s * a > s + i || (r = o.s * a <= s ? 0 : (o.s * a - s) / i, l.push([r, o.e * a >= s + i ? 1 : (o.e * a - s) / i]));
                        return l.length || l.push([0, 0]), l
                    }, tK.prototype.releasePathsData = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) tg.release(t[e]);
                        return t.length = 0, t
                    }, tK.prototype.processShapes = function(t) {
                        if (this._mdf || t) {
                            var e = this.o.v % 360 / 360;
                            if (e < 0 && (e += 1), (s = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (a = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
                                var i = s;
                                s = a, a = i
                            }
                            s = 1e-4 * Math.round(1e4 * s), a = 1e-4 * Math.round(1e4 * a), this.sValue = s, this.eValue = a
                        } else s = this.sValue, a = this.eValue;
                        var s, a, r, n, h, o, l, p, f, m = this.shapes.length,
                            d = 0;
                        if (a === s)
                            for (n = 0; n < m; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                        else if (1 === a && 0 === s || 0 === a && 1 === s) {
                            if (this._mdf)
                                for (n = 0; n < m; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                        } else {
                            var c, u, g = [];
                            for (n = 0; n < m; n += 1)
                                if ((c = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                    if (o = (r = c.shape.paths)._length, f = 0, !c.shape._mdf && c.pathsData.length) f = c.totalShapeLength;
                                    else {
                                        for (l = this.releasePathsData(c.pathsData), h = 0; h < o; h += 1) p = ty.getSegmentsLength(r.shapes[h]), l.push(p), f += p.totalLength;
                                        c.totalShapeLength = f, c.pathsData = l
                                    }
                                    d += f, c.shape._mdf = !0
                                } else c.shape.paths = c.localShapeCollection;
                            var y, v = s,
                                b = a,
                                _ = 0;
                            for (n = m - 1; n >= 0; n -= 1)
                                if ((c = this.shapes[n]).shape._mdf) {
                                    for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && m > 1 ? (y = this.calculateShapeEdges(s, a, c.totalShapeLength, _, d), _ += c.totalShapeLength) : y = [
                                            [v, b]
                                        ], o = y.length, h = 0; h < o; h += 1) {
                                        v = y[h][0], b = y[h][1], g.length = 0, b <= 1 ? g.push({
                                            s: c.totalShapeLength * v,
                                            e: c.totalShapeLength * b
                                        }) : v >= 1 ? g.push({
                                            s: c.totalShapeLength * (v - 1),
                                            e: c.totalShapeLength * (b - 1)
                                        }) : (g.push({
                                            s: c.totalShapeLength * v,
                                            e: c.totalShapeLength
                                        }), g.push({
                                            s: 0,
                                            e: c.totalShapeLength * (b - 1)
                                        }));
                                        var x = this.addShapes(c, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1)
                                                if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                                    var k = x.pop();
                                                    this.addPaths(x, u), x = this.addShapes(c, g[1], k)
                                                } else this.addPaths(x, u), x = this.addShapes(c, g[1]);
                                            this.addPaths(x, u)
                                        }
                                    }
                                    c.shape.paths = u
                                }
                        }
                    }, tK.prototype.addPaths = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) e.addShape(t[i])
                    }, tK.prototype.addSegment = function(t, e, i, s, a, r, n) {
                        a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1)
                    }, tK.prototype.addSegmentFromArray = function(t, e, i, s) {
                        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                    }, tK.prototype.addShapes = function(t, e, i) {
                        var s, a, r, n, h, o, l, p, f = t.pathsData,
                            m = t.shape.paths.shapes,
                            d = t.shape.paths._length,
                            c = 0,
                            u = [],
                            g = !0;
                        for (i ? (h = i._length, p = i._length) : (i = tI.newElement(), h = 0, p = 0), u.push(i), s = 0; s < d; s += 1) {
                            for (o = f[s].lengths, i.c = m[s].c, r = m[s].c ? o.length : o.length + 1, a = 1; a < r; a += 1)
                                if (c + (n = o[a - 1]).addedLength < e.s) c += n.addedLength, i.c = !1;
                                else if (c > e.e) {
                                i.c = !1;
                                break
                            } else e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(m[s].v[a - 1], m[s].o[a - 1], m[s].i[a], m[s].v[a], i, h, g), g = !1) : (l = ty.getNewSegment(m[s].v[a - 1], m[s].v[a], m[s].o[a - 1], m[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1), c += n.addedLength, h += 1;
                            if (m[s].c && o.length) {
                                if (n = o[a - 1], c <= e.e) {
                                    var y = o[a - 1].addedLength;
                                    e.s <= c && e.e >= c + y ? (this.addSegment(m[s].v[a - 1], m[s].o[a - 1], m[s].i[0], m[s].v[0], i, h, g), g = !1) : (l = ty.getNewSegment(m[s].v[a - 1], m[s].v[0], m[s].o[a - 1], m[s].i[0], (e.s - c) / y, (e.e - c) / y, o[a - 1]), this.addSegmentFromArray(l, i, h, g), g = !1, i.c = !1)
                                } else i.c = !1;
                                c += n.addedLength, h += 1
                            }
                            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                            s < d - 1 && (i = tI.newElement(), g = !0, u.push(i), h = 0)
                        }
                        return u
                    }, g([tG], tJ), tJ.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tE.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, tJ.prototype.processPath = function(t, e) {
                        var i, s, a, r, n, h, o = e / 100,
                            l = [0, 0],
                            p = t._length,
                            f = 0;
                        for (f = 0; f < p; f += 1) l[0] += t.v[f][0], l[1] += t.v[f][1];
                        l[0] /= p, l[1] /= p;
                        var m = tI.newElement();
                        for (f = 0, m.c = t.c; f < p; f += 1) i = t.v[f][0] + (l[0] - t.v[f][0]) * o, s = t.v[f][1] + (l[1] - t.v[f][1]) * o, a = t.o[f][0] + -((l[0] - t.o[f][0]) * o), r = t.o[f][1] + -((l[1] - t.o[f][1]) * o), n = t.i[f][0] + -((l[0] - t.i[f][0]) * o), h = t.i[f][1] + -((l[1] - t.i[f][1]) * o), m.setTripleAt(i, s, a, r, n, h, f);
                        return m
                    }, tJ.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.amount.v;
                        if (0 !== o)
                            for (a = 0; a < h; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], o));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var tZ = function() {
                        var t = [0, 0];

                        function e(t, e, i) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new tV, this.pre = new tV, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = tE.getProp(t, e.p.x, 0, 0, this), this.py = tE.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = tE.getProp(t, e.p.z, 0, 0, this))) : this.p = tE.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = tE.getProp(t, e.rx, 0, M, this), this.ry = tE.getProp(t, e.ry, 0, M, this), this.rz = tE.getProp(t, e.rz, 0, M, this), e.or.k[0].ti) {
                                    var s, a = e.or.k.length;
                                    for (s = 0; s < a; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                                }
                                this.or = tE.getProp(t, e.or, 1, M, this), this.or.sh = !0
                            } else this.r = tE.getProp(t, e.r || {
                                k: 0
                            }, 0, M, this);
                            e.sk && (this.sk = tE.getProp(t, e.sk, 0, M, this), this.sa = tE.getProp(t, e.sa, 0, M, this)), this.a = tE.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = tE.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = tE.getProp(t, e.o, 0, .01, t) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return e.prototype = {
                            applyToMatrix: function(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(e) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                s = [], a = [];
                                                var i, s, a, r = this.px,
                                                    n = this.py;
                                                r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (s[0] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / i, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (s[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [r.pv, n.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                            } else s = a = t;
                                            this.v.rotate(-Math.atan2(s[1] - a[1], s[0] - a[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) {
                                    if (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length) {
                                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk)
                                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                            else this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                    }
                                }
                            },
                            autoOrient: function() {}
                        }, g([tM], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = tM.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, i, s) {
                                return new e(t, i, s)
                            }
                        }
                    }();

                    function tU() {}

                    function tQ() {}

                    function t$(t, e) {
                        return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                    }

                    function t0(t) {
                        return 1e-5 >= Math.abs(t)
                    }

                    function t1(t, e, i) {
                        var s, a;
                        return [(s = t[0], s * (1 - i) + e[0] * i), (a = t[1], a * (1 - i) + e[1] * i)]
                    }

                    function t2(t, e, i, s) {
                        return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
                    }

                    function t3(t) {
                        return new t5(t, t, t, t, !1)
                    }

                    function t5(t, e, i, s, a) {
                        a && ei(t, e) && (e = t1(t, s, 1 / 3)), a && ei(i, s) && (i = t1(t, s, 2 / 3));
                        var r = t2(t[0], e[0], i[0], s[0]),
                            n = t2(t[1], e[1], i[1], s[1]);
                        this.a = [r[0], n[0]], this.b = [r[1], n[1]], this.c = [r[2], n[2]], this.d = [r[3], n[3]], this.points = [t, e, i, s]
                    }

                    function t9(t, e) {
                        var i = t.points[0][e],
                            s = t.points[t.points.length - 1][e];
                        if (i > s) {
                            var a = s;
                            s = i, i = a
                        }
                        for (var r = function(t, e, i) {
                                if (0 === t) return [];
                                var s = e * e - 4 * t * i;
                                if (s < 0) return [];
                                var a = -e / (2 * t);
                                if (0 === s) return [a];
                                var r = Math.sqrt(s) / (2 * t);
                                return [a - r, a + r]
                            }(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < r.length; n += 1)
                            if (r[n] > 0 && r[n] < 1) {
                                var h = t.point(r[n])[e];
                                h < i ? i = h : h > s && (s = h)
                            } return {
                            min: i,
                            max: s
                        }
                    }

                    function t4(t, e, i) {
                        var s = t.boundingBox();
                        return {
                            cx: s.cx,
                            cy: s.cy,
                            width: s.width,
                            height: s.height,
                            bez: t,
                            t: (e + i) / 2,
                            t1: e,
                            t2: i
                        }
                    }

                    function t6(t) {
                        var e = t.bez.split(.5);
                        return [t4(e[0], t.t1, t.t), t4(e[1], t.t, t.t2)]
                    }

                    function t8(t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    }

                    function t7(t, e, i, s) {
                        var a = [t[0], t[1], 1],
                            r = [e[0], e[1], 1],
                            n = [i[0], i[1], 1],
                            h = [s[0], s[1], 1],
                            o = t8(t8(a, r), t8(n, h));
                        return t0(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
                    }

                    function et(t, e, i) {
                        return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
                    }

                    function ee(t, e) {
                        return Math.hypot(t[0] - e[0], t[1] - e[1])
                    }

                    function ei(t, e) {
                        return t$(t[0], e[0]) && t$(t[1], e[1])
                    }

                    function es() {}

                    function ea(t, e, i, s, a, r, n) {
                        var h = i - Math.PI / 2,
                            o = i + Math.PI / 2,
                            l = e[0] + Math.cos(i) * s * a,
                            p = e[1] - Math.sin(i) * s * a;
                        t.setTripleAt(l, p, l + Math.cos(h) * r, p - Math.sin(h) * r, l + Math.cos(o) * n, p - Math.sin(o) * n, t.length())
                    }

                    function er(t, e, i, s, a, r, n) {
                        var h, o, l, p, f, m, d, c = (l = 0 === i ? e.length() - 1 : i - 1, p = (i + 1) % e.length(), f = e.v[l], Math.atan2(0, 1) - Math.atan2((h = [(m = e.v[p])[0] - f[0], m[1] - f[1]], d = [Math.cos(o = -(.5 * Math.PI)) * h[0] - Math.sin(o) * h[1], Math.sin(o) * h[0] + Math.cos(o) * h[1]])[1], d[0])),
                            u = e.v[i % e._length],
                            g = e.v[0 === i ? e._length - 1 : i - 1],
                            y = e.v[(i + 1) % e._length],
                            v = 2 === r ? Math.sqrt(Math.pow(u[0] - g[0], 2) + Math.pow(u[1] - g[1], 2)) : 0,
                            b = 2 === r ? Math.sqrt(Math.pow(u[0] - y[0], 2) + Math.pow(u[1] - y[1], 2)) : 0;
                        ea(t, e.v[i % e._length], c, n, s, b / ((a + 1) * 2), v / ((a + 1) * 2))
                    }

                    function en(t, e, i) {
                        var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                        return [et(t, s, i), et(e, s, i)]
                    }

                    function eh(t, e) {
                        i = (o = en(t.points[0], t.points[1], e))[0], s = o[1], a = (o = en(t.points[1], t.points[2], e))[0], r = o[1], n = (o = en(t.points[2], t.points[3], e))[0], h = o[1];
                        var i, s, a, r, n, h, o, l = t7(i, s, a, r);
                        null === l && (l = s);
                        var p = t7(n, h, a, r);
                        return null === p && (p = n), new t5(i, l, p, h)
                    }

                    function eo(t, e, i, s, a) {
                        var r = e.points[3],
                            n = i.points[0];
                        if (3 === s || ei(r, n)) return r;
                        if (2 === s) {
                            var h = -e.tangentAngle(1),
                                o = -i.tangentAngle(0) + Math.PI,
                                l = t7(r, et(r, h + Math.PI / 2, 100), n, et(n, h + Math.PI / 2, 100)),
                                p = l ? ee(l, r) : ee(r, n) / 2,
                                f = et(r, h, 2 * p * .5519);
                            return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = et(n, o, 2 * p * .5519), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                        }
                        var m = ei(r, e.points[2]) ? e.points[0] : e.points[2],
                            d = ei(n, i.points[1]) ? i.points[3] : i.points[1],
                            c = t7(m, r, n, d);
                        return c && ee(c, r) < a ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : r
                    }

                    function el(t, e) {
                        var i = t.intersections(e);
                        return i.length && t$(i[0][0], 1) && i.shift(), i.length ? i[0] : null
                    }

                    function ep(t, e) {
                        var i = t.slice(),
                            s = e.slice(),
                            a = el(t[t.length - 1], e[0]);
                        return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], s[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = el(t[0], e[e.length - 1])) ? [
                            [t[0].split(a[0])[0]],
                            [e[e.length - 1].split(a[1])[1]]
                        ] : [i, s]
                    }

                    function ef(t, e) {
                        var i, s, a, r, n = t.inflectionPoints();
                        if (0 === n.length) return [eh(t, e)];
                        if (1 === n.length || t$(n[1], 1)) return i = (a = t.split(n[0]))[0], s = a[1], [eh(i, e), eh(s, e)];
                        i = (a = t.split(n[0]))[0];
                        var h = (n[1] - n[0]) / (1 - n[0]);
                        return r = (a = a[1].split(h))[0], s = a[1], [eh(i, e), eh(r, e), eh(s, e)]
                    }

                    function em() {}

                    function ed(t) {
                        for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
                            case "italic":
                                s = "italic";
                                break;
                            case "bold":
                                i = "700";
                                break;
                            case "black":
                                i = "900";
                                break;
                            case "medium":
                                i = "500";
                                break;
                            case "regular":
                            case "normal":
                                i = "400";
                                break;
                            case "light":
                            case "thin":
                                i = "200"
                        }
                        return {
                            style: s,
                            weight: t.fWeight || i
                        }
                    }
                    g([tG], tU), tU.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = tE.getProp(t, e.c, 0, null, this), this.o = tE.getProp(t, e.o, 0, null, this), this.tr = tZ.getTransformProperty(t, e.tr, this), this.so = tE.getProp(t, e.tr.so, 0, .01, this), this.eo = tE.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new tV, this.rMatrix = new tV, this.sMatrix = new tV, this.tMatrix = new tV, this.matrix = new tV
                    }, tU.prototype.applyTransforms = function(t, e, i, s, a, r) {
                        var n = r ? -1 : 1,
                            h = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
                            o = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                        t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / h : h, r ? 1 / o : o), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                    }, tU.prototype.init = function(t, e, i, s) {
                        for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tU.prototype.resetElements = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                    }, tU.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e
                    }, tU.prototype.changeGroupRender = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                    }, tU.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n = !1;
                        if (this._mdf || t) {
                            var h, o, l, p = Math.ceil(this.c.v);
                            if (this._groups.length < p) {
                                for (; this._groups.length < p;) {
                                    var f = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    f.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [0, 0]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [0, 0]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [{
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            }, {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            }]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [100, 100]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, f), this._groups.splice(0, 0, f), this._currentCopies += 1
                                }
                                this.elem.reloadShapes(), n = !0
                            }
                            for (s = 0, r = 0; s <= this._groups.length - 1; s += 1) {
                                if (h = r < p, this._groups[s]._render = h, this.changeGroupRender(this._groups[s].it, h), !h) {
                                    var m = this.elemsData[s].it,
                                        d = m[m.length - 1];
                                    0 !== d.transform.op.v ? (d.transform.op._mdf = !0, d.transform.op.v = 0) : d.transform.op._mdf = !1
                                }
                                r += 1
                            }
                            this._currentCopies = p;
                            var c = this.o.v,
                                u = c % 1,
                                g = c > 0 ? Math.floor(c) : Math.ceil(c),
                                y = this.pMatrix.props,
                                v = this.rMatrix.props,
                                b = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var _ = 0;
                            if (c > 0) {
                                for (; _ < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                                u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), _ += u)
                            } else if (c < 0) {
                                for (; _ > g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                                u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), _ -= u)
                            }
                            for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
                                if (l = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== _) {
                                    for ((0 !== s && 1 === a || s !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), o = 0; o < l; o += 1) i[o] = this.matrix.props[o];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), o = 0; o < l; o += 1) i[o] = this.matrix.props[o];
                                _ += 1, r -= 1, s += a
                            }
                        } else
                            for (r = this._currentCopies, s = 0, a = 1; r;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, s += a;
                        return n
                    }, tU.prototype.addShape = function() {}, g([tG], tQ), tQ.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = tE.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, tQ.prototype.processPath = function(t, e) {
                        var i = tI.newElement();
                        i.c = t.c;
                        var s, a, r, n, h, o, l, p, f, m, d, c, u, g = t._length,
                            y = 0;
                        for (s = 0; s < g; s += 1) a = t.v[s], n = t.o[s], r = t.i[s], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== s && s !== g - 1 || t.c ? (h = 0 === s ? t.v[g - 1] : t.v[s - 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = c = a[0] + (h[0] - a[0]) * l, f = u = a[1] - (a[1] - h[1]) * l, m = p - (p - a[0]) * .5519, d = f - (f - a[1]) * .5519, i.setTripleAt(p, f, m, d, c, u, y), y += 1, h = s === g - 1 ? t.v[0] : t.v[s + 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = m = a[0] + (h[0] - a[0]) * l, f = d = a[1] + (h[1] - a[1]) * l, c = p - (p - a[0]) * .5519, u = f - (f - a[1]) * .5519, i.setTripleAt(p, f, m, d, c, u, y)) : i.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y) : i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], y), y += 1;
                        return i
                    }, tQ.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.rd.v;
                        if (0 !== o)
                            for (a = 0; a < h; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], o));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, t5.prototype.point = function(t) {
                        return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                    }, t5.prototype.derivative = function(t) {
                        return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                    }, t5.prototype.tangentAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[1], e[0])
                    }, t5.prototype.normalAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[0], e[1])
                    }, t5.prototype.inflectionPoints = function() {
                        var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                        if (t0(t)) return [];
                        var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                            i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                        if (i < 0) return [];
                        var s = Math.sqrt(i);
                        return t0(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(t) {
                            return t > 0 && t < 1
                        })
                    }, t5.prototype.split = function(t) {
                        if (t <= 0) return [t3(this.points[0]), this];
                        if (t >= 1) return [this, t3(this.points[this.points.length - 1])];
                        var e = t1(this.points[0], this.points[1], t),
                            i = t1(this.points[1], this.points[2], t),
                            s = t1(this.points[2], this.points[3], t),
                            a = t1(e, i, t),
                            r = t1(i, s, t),
                            n = t1(a, r, t);
                        return [new t5(this.points[0], e, a, n, !0), new t5(n, r, s, this.points[3], !0)]
                    }, t5.prototype.bounds = function() {
                        return {
                            x: t9(this, 0),
                            y: t9(this, 1)
                        }
                    }, t5.prototype.boundingBox = function() {
                        var t = this.bounds();
                        return {
                            left: t.x.min,
                            right: t.x.max,
                            top: t.y.min,
                            bottom: t.y.max,
                            width: t.x.max - t.x.min,
                            height: t.y.max - t.y.min,
                            cx: (t.x.max + t.x.min) / 2,
                            cy: (t.y.max + t.y.min) / 2
                        }
                    }, t5.prototype.intersections = function(t, e, i) {
                        void 0 === e && (e = 2), void 0 === i && (i = 7);
                        var s = [];
                        return function t(e, i, s, a, r, n) {
                            if (2 * Math.abs(e.cx - i.cx) < e.width + i.width && 2 * Math.abs(e.cy - i.cy) < e.height + i.height) {
                                if (s >= n || e.width <= a && e.height <= a && i.width <= a && i.height <= a) return void r.push([e.t, i.t]);
                                var h = t6(e),
                                    o = t6(i);
                                t(h[0], o[0], s + 1, a, r, n), t(h[0], o[1], s + 1, a, r, n), t(h[1], o[0], s + 1, a, r, n), t(h[1], o[1], s + 1, a, r, n)
                            }
                        }(t4(this, 0, 1), t4(t, 0, 1), 0, e, s, i), s
                    }, t5.shapeSegment = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new t5(t.v[e], t.o[e], t.i[i], t.v[i], !0)
                    }, t5.shapeSegmentInverted = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new t5(t.v[i], t.i[i], t.o[e], t.v[e], !0)
                    }, g([tG], es), es.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amplitude = tE.getProp(t, e.s, 0, null, this), this.frequency = tE.getProp(t, e.r, 0, null, this), this.pointsType = tE.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                    }, es.prototype.processPath = function(t, e, i, s) {
                        var a = t._length,
                            r = tI.newElement();
                        if (r.c = t.c, t.c || (a -= 1), 0 === a) return r;
                        var n = -1,
                            h = t5.shapeSegment(t, 0);
                        er(r, t, 0, e, i, s, n);
                        for (var o = 0; o < a; o += 1) n = function(t, e, i, s, a, r) {
                            for (var n = 0; n < s; n += 1) {
                                var h = (n + 1) / (s + 1),
                                    o = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                                    l = e.normalAngle(h);
                                ea(t, e.point(h), l, r, i, o / ((s + 1) * 2), o / ((s + 1) * 2)), r = -r
                            }
                            return r
                        }(r, h, e, i, s, -n), h = o !== a - 1 || t.c ? t5.shapeSegment(t, (o + 1) % a) : null, er(r, t, o + 1, e, i, s, n);
                        return r
                    }, es.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.amplitude.v,
                            l = Math.max(0, Math.round(this.frequency.v)),
                            p = this.pointsType.v;
                        if (0 !== o)
                            for (a = 0; a < h; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], o, l, p));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, g([tG], em), em.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tE.getProp(t, e.a, 0, null, this), this.miterLimit = tE.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                    }, em.prototype.processPath = function(t, e, i, s) {
                        var a = tI.newElement();
                        a.c = t.c;
                        var r = t.length();
                        t.c || (r -= 1);
                        var n, h, o, l = [];
                        for (n = 0; n < r; n += 1) o = t5.shapeSegment(t, n), l.push(ef(o, e));
                        if (!t.c)
                            for (n = r - 1; n >= 0; n -= 1) o = t5.shapeSegmentInverted(t, n), l.push(ef(o, e));
                        l = function(t) {
                            for (var e, i = 1; i < t.length; i += 1) e = ep(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                            return t.length > 1 && (e = ep(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                        }(l);
                        var p = null,
                            f = null;
                        for (n = 0; n < l.length; n += 1) {
                            var m = l[n];
                            for (f && (p = eo(a, f, m[0], i, s)), f = m[m.length - 1], h = 0; h < m.length; h += 1) o = m[h], p && ei(o.points[0], p) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), p = o.points[3]
                        }
                        return l.length && eo(a, f, l[0][0], i, s), a
                    }, em.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, h = this.shapes.length,
                            o = this.amount.v,
                            l = this.miterLimit.v,
                            p = this.lineJoin;
                        if (0 !== o)
                            for (a = 0; a < h; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], o, p, l));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var ec = function() {
                        var t = {
                                w: 0,
                                size: 0,
                                shapes: [],
                                data: {
                                    shapes: []
                                }
                            },
                            e = [];
                        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                        function s(t, e) {
                            var i = u("span");
                            i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                            var s = u("span");
                            s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                            var a = s.offsetWidth;
                            return s.style.fontFamily = function(t) {
                                var e, i = t.split(","),
                                    s = i.length,
                                    a = [];
                                for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                                return a.join(",")
                            }(t) + ", " + e, {
                                node: s,
                                w: a,
                                parent: i
                            }
                        }

                        function a(t, e) {
                            var i, s = document.body && e ? "svg" : "canvas",
                                a = ed(t);
                            if ("svg" === s) {
                                var r = te("text");
                                r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", a.style), r.setAttribute("font-weight", a.weight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), i = r
                            } else {
                                var n = new OffscreenCanvas(500, 500).getContext("2d");
                                n.font = a.style + " " + a.weight + " 100px " + t.fFamily, i = n
                            }
                            return {
                                measureText: function(t) {
                                    return "svg" === s ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                                }
                            }
                        }

                        function r(t) {
                            var e = 0,
                                i = t.charCodeAt(0);
                            if (i >= 55296 && i <= 56319) {
                                var s = t.charCodeAt(1);
                                s >= 56320 && s <= 57343 && (e = (i - 55296) * 1024 + s - 56320 + 65536)
                            }
                            return e
                        }

                        function n(t) {
                            var e = r(t);
                            return e >= 127462 && e <= 127487
                        }
                        var h = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return h.isModifier = function(t, e) {
                            var s = t.toString(16) + e.toString(16);
                            return -1 !== i.indexOf(s)
                        }, h.isZeroWidthJoiner = function(t) {
                            return 8205 === t
                        }, h.isFlagEmoji = function(t) {
                            return n(t.substr(0, 2)) && n(t.substr(2, 2))
                        }, h.isRegionalCode = n, h.isCombinedCharacter = function(t) {
                            return -1 !== e.indexOf(t)
                        }, h.isRegionalFlag = function(t, e) {
                            var i = r(t.substr(e, 2));
                            if (127988 !== i) return !1;
                            var s = 0;
                            for (e += 2; s < 5;) {
                                if ((i = r(t.substr(e, 2))) < 917601 || i > 917626) return !1;
                                s += 1, e += 2
                            }
                            return 917631 === r(t.substr(e, 2))
                        }, h.isVariationSelector = function(t) {
                            return 65039 === t
                        }, h.BLACK_FLAG_CODE_POINT = 127988, h.prototype = {
                            addChars: function(t) {
                                if (t) {
                                    this.chars || (this.chars = []);
                                    var e, i, s, a = t.length,
                                        r = this.chars.length;
                                    for (e = 0; e < a; e += 1) {
                                        for (i = 0, s = !1; i < r;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                                        s || (this.chars.push(t[e]), r += 1)
                                    }
                                }
                            },
                            addFonts: function(t, e) {
                                if (!t) {
                                    this.isLoaded = !0;
                                    return
                                }
                                if (this.chars) {
                                    this.isLoaded = !0, this.fonts = t.list;
                                    return
                                }
                                if (!document.body) {
                                    this.isLoaded = !0, t.list.forEach(function(t) {
                                        t.helper = a(t), t.cache = {}
                                    }), this.fonts = t.list;
                                    return
                                }
                                var i, r = t.list,
                                    n = r.length,
                                    h = n;
                                for (i = 0; i < n; i += 1) {
                                    var o, l, p = !0;
                                    if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                        if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                            if ((o = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                var f = u("style");
                                                f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("f-family", r[i].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(f)
                                            }
                                        } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                            for (o = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < o.length; l += 1) - 1 !== o[l].href.indexOf(r[i].fPath) && (p = !1);
                                            if (p) {
                                                var m = u("link");
                                                m.setAttribute("f-forigin", r[i].fOrigin), m.setAttribute("f-origin", r[i].origin), m.type = "text/css", m.rel = "stylesheet", m.href = r[i].fPath, document.body.appendChild(m)
                                            }
                                        } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                            for (o = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < o.length; l += 1) r[i].fPath === o[l].src && (p = !1);
                                            if (p) {
                                                var d = u("link");
                                                d.setAttribute("f-forigin", r[i].fOrigin), d.setAttribute("f-origin", r[i].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", r[i].fPath), e.appendChild(d)
                                            }
                                        }
                                    } else r[i].loaded = !0, h -= 1;
                                    r[i].helper = a(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
                                }
                                0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            },
                            getCharData: function(e, i, s) {
                                for (var a = 0, r = this.chars.length; a < r;) {
                                    if (this.chars[a].ch === e && this.chars[a].style === i && this.chars[a].fFamily === s) return this.chars[a];
                                    a += 1
                                }
                                return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, s)), t
                            },
                            getFontByName: function(t) {
                                for (var e = 0, i = this.fonts.length; e < i;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(t, e, i) {
                                var s = this.getFontByName(e);
                                if (!s.cache[t]) {
                                    var a = s.helper;
                                    if (" " === t) {
                                        var r = a.measureText("|" + t + "|"),
                                            n = a.measureText("||");
                                        s.cache[t] = (r - n) / 100
                                    } else s.cache[t] = a.measureText(t) / 100
                                }
                                return s.cache[t] * i
                            },
                            checkLoadedFonts: function() {
                                var t, e, i, s = this.fonts.length,
                                    a = s;
                                for (t = 0; t < s; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, h
                    }();

                    function eu(t) {
                        this.animationData = t
                    }

                    function eg() {}
                    eu.prototype.getProp = function(t) {
                        return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                    }, eg.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                        },
                        addRenderableComponent: function(t) {
                            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                        },
                        removeRenderableComponent: function(t) {
                            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                        },
                        prepareRenderableFrame: function(t) {
                            this.checkLayerLimits(t)
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                        },
                        checkLayerLimits: function(t) {
                            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                        },
                        renderRenderable: function() {
                            var t, e = this.renderableComponents.length;
                            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            }
                        },
                        getLayerSize: function() {
                            return 5 === this.data.ty ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            }
                        }
                    };
                    var ey = (o = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }, function(t) {
                        return o[t] || ""
                    });

                    function ev(t, e, i) {
                        this.p = tE.getProp(e, t.v, 0, 0, i)
                    }

                    function eb(t, e, i) {
                        this.p = tE.getProp(e, t.v, 0, 0, i)
                    }

                    function e_(t, e, i) {
                        this.p = tE.getProp(e, t.v, 1, 0, i)
                    }

                    function ex(t, e, i) {
                        this.p = tE.getProp(e, t.v, 1, 0, i)
                    }

                    function ek(t, e, i) {
                        this.p = tE.getProp(e, t.v, 0, 0, i)
                    }

                    function ew(t, e, i) {
                        this.p = tE.getProp(e, t.v, 0, 0, i)
                    }

                    function eP(t, e, i) {
                        this.p = tE.getProp(e, t.v, 0, 0, i)
                    }

                    function eS() {
                        this.p = {}
                    }

                    function eA(t, e) {
                        var i = t.ef || [];
                        this.effectElements = [];
                        var s, a, r = i.length;
                        for (s = 0; s < r; s += 1) a = new eD(i[s], e), this.effectElements.push(a)
                    }

                    function eD(t, e) {
                        this.init(t, e)
                    }

                    function eC() {}

                    function eE() {}

                    function eM(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                    }

                    function eT(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                        var s = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? tE.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }, this.lv = tE.getProp(this, t.au && t.au.lv ? t.au.lv : {
                            k: [100]
                        }, 1, .01, this)
                    }

                    function eF() {}
                    g([tM], eD), eD.prototype.getValue = eD.prototype.iterateDynamicProperties, eD.prototype.init = function(t, e) {
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        var i, s, a = this.data.ef.length,
                            r = this.data.ef;
                        for (i = 0; i < a; i += 1) {
                            switch (s = null, r[i].ty) {
                                case 0:
                                    s = new ev(r[i], e, this);
                                    break;
                                case 1:
                                    s = new eb(r[i], e, this);
                                    break;
                                case 2:
                                    s = new e_(r[i], e, this);
                                    break;
                                case 3:
                                    s = new ex(r[i], e, this);
                                    break;
                                case 4:
                                case 7:
                                    s = new eP(r[i], e, this);
                                    break;
                                case 10:
                                    s = new ek(r[i], e, this);
                                    break;
                                case 11:
                                    s = new ew(r[i], e, this);
                                    break;
                                case 5:
                                    s = new eA(r[i], e);
                                    break;
                                default:
                                    s = new eS(r[i])
                            }
                            s && this.effectElements.push(s)
                        }
                    }, eC.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                t += 1
                            }
                            return !1
                        },
                        initExpressions: function() {},
                        setBlendMode: function() {
                            var t = ey(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                        },
                        initBaseData: function(t, e, i) {
                            this.globalData = e, this.comp = i, this.data = t, this.layerId = N(), this.data.sr || (this.data.sr = 1), this.effectsManager = new eA(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, eE.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                        },
                        prepareProperties: function(t, e) {
                            var i, s = this.dynamicProperties.length;
                            for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                        },
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                        }
                    }, eM.prototype.prepareFrame = function() {}, g([eg, eC, eE], eM), eM.prototype.getBaseElement = function() {
                        return null
                    }, eM.prototype.renderFrame = function() {}, eM.prototype.destroy = function() {}, eM.prototype.initExpressions = function() {}, eM.prototype.getFootageData = function() {
                        return this.footageData
                    }, eT.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e
                        }
                        this._volume = this.lv.v[0];
                        var i = this._volume * this._volumeMultiplier;
                        this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
                    }, g([eg, eC, eE], eT), eT.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                    }, eT.prototype.show = function() {}, eT.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1
                    }, eT.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                    }, eT.prototype.resume = function() {
                        this._canPlay = !0
                    }, eT.prototype.setRate = function(t) {
                        this.audio.rate(t)
                    }, eT.prototype.volume = function(t) {
                        this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                    }, eT.prototype.getBaseElement = function() {
                        return null
                    }, eT.prototype.destroy = function() {}, eT.prototype.sourceRectAtTime = function() {}, eT.prototype.initExpressions = function() {}, eF.prototype.checkLayers = function(t) {
                        var e, i, s = this.layers.length;
                        for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements()
                    }, eF.prototype.createItem = function(t) {
                        switch (t.ty) {
                            case 2:
                                return this.createImage(t);
                            case 0:
                                return this.createComp(t);
                            case 1:
                                return this.createSolid(t);
                            case 3:
                            default:
                                return this.createNull(t);
                            case 4:
                                return this.createShape(t);
                            case 5:
                                return this.createText(t);
                            case 6:
                                return this.createAudio(t);
                            case 13:
                                return this.createCamera(t);
                            case 15:
                                return this.createFootage(t)
                        }
                    }, eF.prototype.createCamera = function() {
                        throw Error("You're using a 3d camera. Try the html renderer.")
                    }, eF.prototype.createAudio = function(t) {
                        return new eT(t, this.globalData, this)
                    }, eF.prototype.createFootage = function(t) {
                        return new eM(t, this.globalData, this)
                    }, eF.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.buildItem(t);
                        this.checkPendingElements()
                    }, eF.prototype.includeLayers = function(t) {
                        this.completeLayers = !1;
                        var e, i, s = t.length,
                            a = this.layers.length;
                        for (e = 0; e < s; e += 1)
                            for (i = 0; i < a;) {
                                if (this.layers[i].id === t[e].id) {
                                    this.layers[i] = t[e];
                                    break
                                }
                                i += 1
                            }
                    }, eF.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t
                    }, eF.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, eF.prototype.buildElementParenting = function(t, e, i) {
                        for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
                    }, eF.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t)
                    }, eF.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var s = this.createComp(t[e]);
                                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                            }
                    }, eF.prototype.getElementById = function(t) {
                        var e, i = this.elements.length;
                        for (e = 0; e < i; e += 1)
                            if (this.elements[e].data.ind === t) return this.elements[e];
                        return null
                    }, eF.prototype.getElementByPath = function(t) {
                        var e, i = t.shift();
                        if ("number" == typeof i) e = this.elements[i];
                        else {
                            var s, a = this.elements.length;
                            for (s = 0; s < a; s += 1)
                                if (this.elements[s].data.nm === i) {
                                    e = this.elements[s];
                                    break
                                }
                        }
                        return 0 === t.length ? e : e.getElementByPath(t)
                    }, eF.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new ec, this.globalData.slotManager = new eu(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        }
                    };

                    function eI() {}

                    function eL(t, e, i) {
                        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var s, a = this.globalData.defs,
                            r = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = b(r), this.solidPath = "";
                        var n, h, o, l, p, f, m, d = this.masksProperties,
                            u = 0,
                            g = [],
                            y = N(),
                            v = "clipPath",
                            _ = "clip-path";
                        for (s = 0; s < r; s += 1)
                            if (("a" !== d[s].mode && "n" !== d[s].mode || d[s].inv || 100 !== d[s].o.k || d[s].o.x) && (v = "mask", _ = "mask"), ("s" === d[s].mode || "i" === d[s].mode) && 0 === u ? ((l = te("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), g.push(l)) : l = null, n = te("path"), "n" === d[s].mode) this.viewData[s] = {
                                op: tE.getProp(this.element, d[s].o, 0, .01, this.element),
                                prop: tz.getShapeProp(this.element, d[s], 3),
                                elem: n,
                                lastPath: ""
                            }, a.appendChild(n);
                            else {
                                if (u += 1, n.setAttribute("fill", "s" === d[s].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[s].x.k ? (v = "mask", _ = "mask", m = tE.getProp(this.element, d[s].x, 0, null, this.element), x = N(), (p = te("filter")).setAttribute("id", x), (f = te("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), a.appendChild(p), n.setAttribute("stroke", "s" === d[s].mode ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[s] = {
                                        elem: n,
                                        x: m,
                                        expan: f,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: x,
                                        lastRadius: 0
                                    }, "i" === d[s].mode) {
                                    o = g.length;
                                    var x, k = te("g");
                                    for (h = 0; h < o; h += 1) k.appendChild(g[h]);
                                    var w = te("mask");
                                    w.setAttribute("mask-type", "alpha"), w.setAttribute("id", y + "_" + u), w.appendChild(n), a.appendChild(w), k.setAttribute("mask", "url(" + c() + "#" + y + "_" + u + ")"), g.length = 0, g.push(k)
                                } else g.push(n);
                                d[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                    elem: n,
                                    lastPath: "",
                                    op: tE.getProp(this.element, d[s].o, 0, .01, this.element),
                                    prop: tz.getShapeProp(this.element, d[s], 3),
                                    invRect: l
                                }, this.viewData[s].prop.k || this.drawPath(d[s], this.viewData[s].prop.v, this.viewData[s])
                            } for (this.maskElement = te(v), r = g.length, s = 0; s < r; s += 1) this.maskElement.appendChild(g[s]);
                        u > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + c() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }
                    eI.prototype = {
                        initTransform: function() {
                            var t = new tV;
                            this.finalTransform = {
                                mProp: this.data.ks ? tZ.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _localMatMdf: !1,
                                _opMdf: !1,
                                mat: t,
                                localMat: t,
                                localOpacity: 1
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                var t, e = this.finalTransform.mat,
                                    i = 0,
                                    s = this.hierarchy.length;
                                if (!this.finalTransform._matMdf)
                                    for (; i < s;) {
                                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        i += 1
                                    }
                                if (this.finalTransform._matMdf)
                                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                            }
                            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                        },
                        renderLocalTransform: function() {
                            if (this.localTransforms) {
                                var t = 0,
                                    e = this.localTransforms.length;
                                if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                                    for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                                if (this.finalTransform._localMatMdf) {
                                    var i = this.finalTransform.localMat;
                                    for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                                        var s = this.localTransforms[t].matrix;
                                        i.multiply(s)
                                    }
                                    i.multiply(this.finalTransform.mat)
                                }
                                if (this.finalTransform._opMdf) {
                                    var a = this.finalTransform.localOpacity;
                                    for (t = 0; t < e; t += 1) a *= .01 * this.localTransforms[t].opacity;
                                    this.finalTransform.localOpacity = a
                                }
                            }
                        },
                        searchEffectTransforms: function() {
                            if (this.renderableEffectsManager) {
                                var t = this.renderableEffectsManager.getEffects("transformEFfect");
                                if (t.length) {
                                    this.localTransforms = [], this.finalTransform.localMat = new tV;
                                    var e = 0,
                                        i = t.length;
                                    for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
                                }
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for (var i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
                            var a, r, n = e.length;
                            for (a = 0; a < n; a += 1) r = e[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                            return t
                        },
                        mHelper: new tV
                    }, eL.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop
                    }, eL.prototype.renderFrame = function(t) {
                        var e, i = this.element.finalTransform.mat,
                            s = this.masksProperties.length;
                        for (e = 0; e < s; e += 1)
                            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                var a = this.storedData[e].expan;
                                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + c() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                            }
                    }, eL.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, eL.prototype.createLayerSolidPath = function() {
                        return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h)) + " "
                    }, eL.prototype.drawPath = function(t, e, i) {
                        var s, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                        for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                        if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                            var n = "";
                            i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r
                        }
                    }, eL.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    };
                    var eB = ((l = {}).createFilter = function(t, e) {
                            var i = te("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        }, l.createAlphaToLuminanceFilter = function() {
                            var t = te("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }, l),
                        ez = (p = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "u" > typeof OffscreenCanvas
                        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (p.maskType = !1), /firefox/i.test(navigator.userAgent) && (p.svgLumaHidden = !1), p),
                        eV = {},
                        eR = "filter_result_";

                    function eN(t) {
                        var e, i, s = "SourceGraphic",
                            a = t.data.ef ? t.data.ef.length : 0,
                            r = N(),
                            n = eB.createFilter(r, !0),
                            h = 0;
                        for (i = 0, this.filters = []; i < a; i += 1) {
                            e = null;
                            var o = t.data.ef[i].ty;
                            eV[o] && (e = new eV[o].effect(n, t.effectsManager.effectElements[i], t, eR + h, s), s = eR + h, eV[o].countsAsEffect && (h += 1)), e && this.filters.push(e)
                        }
                        h && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + c() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
                    }

                    function eO() {}

                    function eq() {}

                    function ej() {}

                    function eW(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function eH(t, e) {
                        this.elem = t, this.pos = e
                    }

                    function eY() {}
                    eN.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                    }, eN.prototype.getEffects = function(t) {
                        var e, i = this.filters.length,
                            s = [];
                        for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
                        return s
                    }, eO.prototype = {
                        initRendererElement: function() {
                            this.layerElement = te("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = te("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var e = te("g");
                                e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var i = te("clipPath"),
                                    s = te("path");
                                s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var a = N();
                                if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                    var r = te("g");
                                    r.setAttribute("clip-path", "url(" + c() + "#" + a + ")"), r.appendChild(this.layerElement), this.transformedElement = r, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + a + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new eL(this.data, this, this.globalData), this.renderableEffectsManager = new eN(this), this.searchEffectTransforms()
                        },
                        getMatte: function(t) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                var e, i, s, a, r = this.layerId + "_" + t;
                                if (1 === t || 3 === t) {
                                    var n = te("mask");
                                    n.setAttribute("id", r), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = te("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), ez.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = N(), i = eB.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(eB.createAlphaToLuminanceFilter()), (a = te("g")).appendChild(s), n.appendChild(a), a.setAttribute("filter", "url(" + c() + "#" + e + ")"))
                                } else if (2 === t) {
                                    var h = te("mask");
                                    h.setAttribute("id", r), h.setAttribute("mask-type", "alpha");
                                    var o = te("g");
                                    h.appendChild(o), e = N(), i = eB.createFilter(e);
                                    var l = te("feComponentTransfer");
                                    l.setAttribute("in", "SourceGraphic"), i.appendChild(l);
                                    var p = te("feFuncA");
                                    p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(i);
                                    var f = te("rect");
                                    f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + c() + "#" + e + ")"), o.appendChild(f), (s = te("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(s), ez.maskType || (h.setAttribute("mask-type", "luminance"), i.appendChild(eB.createAlphaToLuminanceFilter()), a = te("g"), o.appendChild(f), a.appendChild(this.layerElement), o.appendChild(a)), this.globalData.defs.appendChild(h)
                                }
                                this.matteMasks[t] = r
                            }
                            return this.matteMasks[t]
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + c() + "#" + t + ")")
                        }
                    }, eq.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    }, g([eg, function(t) {
                        function e() {}
                        return e.prototype = t, e
                    }({
                        initElement: function(t, e, i) {
                            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                        },
                        hide: function() {
                            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                        },
                        show: function() {
                            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        renderInnerContent: function() {},
                        prepareFrame: function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                        },
                        destroy: function() {
                            this.innerElem = null, this.destroyBaseElement()
                        }
                    })], ej), g([eC, eI, eO, eq, eE, ej], eW), eW.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = te("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, eW.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, eY.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, i = this.shapeModifiers.length;
                            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            for (var e = this.shapeModifiers.length; 0 < e;)
                                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var t, e = this.shapes.length;
                                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                            }
                        },
                        searchProcessedElement: function(t) {
                            for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                                if (e[i].elem === t) return e[i].pos;
                                i += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(t, e) {
                            for (var i = this.processedElements, s = i.length; s;)
                                if (i[s -= 1].elem === t) {
                                    i[s].pos = e;
                                    return
                                } i.push(new eH(t, e))
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                        }
                    };
                    var eX = {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        eG = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        };

                    function eK(t, e, i) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                        for (var s = 0, a = t.length; s < a;) {
                            if (t[s].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            s += 1
                        }
                    }

                    function eJ(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = te("path"), this.msElem = null
                    }

                    function eZ(t, e, i, s) {
                        this.elem = t, this.frameId = -1, this.dataProps = b(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = v("float32", e.length ? e.length - 1 : 0), this.dashoffset = v("float32", 1), this.initDynamicPropertyContainer(s);
                        var a, r, n = e.length || 0;
                        for (a = 0; a < n; a += 1) r = tE.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                            n: e[a].n,
                            p: r
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function eU(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tE.getProp(t, e.o, 0, .01, this), this.w = tE.getProp(t, e.w, 0, null, this), this.d = new eZ(t, e.d || {}, "svg", this), this.c = tE.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                    }

                    function eQ(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tE.getProp(t, e.o, 0, .01, this), this.c = tE.getProp(t, e.c, 1, 255, this), this.style = i
                    }

                    function e$(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
                    }

                    function e0(t, e, i) {
                        this.data = e, this.c = v("uint8c", 4 * e.p);
                        var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = v("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = tE.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }

                    function e1(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                    }

                    function e2(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = tE.getProp(t, e.w, 0, null, this), this.d = new eZ(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                    }

                    function e3() {
                        this.it = [], this.prevViewData = [], this.gr = te("g")
                    }

                    function e5(t, e, i) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: i
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }
                    eK.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, eJ.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, eZ.prototype.getValue = function(t) {
                        if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0,
                                i = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                        }
                    }, g([tM], eZ), g([tM], eU), g([tM], eQ), g([tM], e$), e0.prototype.comparePoints = function(t, e) {
                        for (var i = 0, s = this.o.length / 2; i < s;) {
                            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                            i += 1
                        }
                        return !0
                    }, e0.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var t = 0, e = this.data.k.k.length; t < e;) {
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                t += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, e0.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, i, s, a = 4 * this.data.p;
                            for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                            if (this.o.length)
                                for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                            this._mdf = !t
                        }
                    }, g([tM], e0), e1.prototype.initGradientData = function(t, e, i) {
                        this.o = tE.getProp(t, e.o, 0, .01, this), this.s = tE.getProp(t, e.s, 1, null, this), this.e = tE.getProp(t, e.e, 1, null, this), this.h = tE.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = tE.getProp(t, e.a || {
                            k: 0
                        }, 0, M, this), this.g = new e0(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                    }, e1.prototype.setGradientData = function(t, e) {
                        var i = N(),
                            s = te(1 === e.t ? "linearGradient" : "radialGradient");
                        s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                        var a, r, n, h = [];
                        for (n = 4 * e.g.p, r = 0; r < n; r += 4) a = te("stop"), s.appendChild(a), h.push(a);
                        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + c() + "#" + i + ")"), this.gf = s, this.cst = h
                    }, e1.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i, s, a, r = te("mask"),
                                n = te("path");
                            r.appendChild(n);
                            var h = N(),
                                o = N();
                            r.setAttribute("id", o);
                            var l = te(1 === t.t ? "linearGradient" : "radialGradient");
                            l.setAttribute("id", h), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var p = this.stops;
                            for (s = 4 * t.g.p; s < a; s += 2)(i = te("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + c() + "#" + h + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", eX[t.lc || 2]), n.setAttribute("stroke-linejoin", eG[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = r, this.ost = p, this.maskId = o, e.msElem = n
                        }
                    }, g([tM], e1), g([e1, tM], e2);
                    var e9 = function(t, e, i, s) {
                            if (0 === e) return "";
                            var a, r = t.o,
                                n = t.i,
                                h = t.v,
                                o = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                            for (a = 1; a < e; a += 1) o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(h[a][0], h[a][1]);
                            return i && e && (o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]) + "z"), o
                        },
                        e4 = function() {
                            var t = new tV,
                                e = new tV;

                            function i(t, e, i) {
                                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                            }

                            function s() {}

                            function a(i, s, a) {
                                var r, n, h, o, l, p, f, m, d, c, u = s.styles.length,
                                    g = s.lvl;
                                for (p = 0; p < u; p += 1) {
                                    if (o = s.sh._mdf || a, s.styles[p].lvl < g) {
                                        for (m = e.reset(), d = g - s.styles[p].lvl, c = s.transformers.length - 1; !o && d > 0;) o = s.transformers[c].mProps._mdf || o, d -= 1, c -= 1;
                                        if (o)
                                            for (d = g - s.styles[p].lvl, c = s.transformers.length - 1; d > 0;) m.multiply(s.transformers[c].mProps.v), d -= 1, c -= 1
                                    } else m = t;
                                    if (n = (f = s.sh.paths)._length, o) {
                                        for (h = "", r = 0; r < n; r += 1)(l = f.shapes[r]) && l._length && (h += e9(l, l._length, l.c, m));
                                        s.caches[p] = h
                                    } else h = s.caches[p];
                                    s.styles[p].d += !0 === i.hd ? "" : h, s.styles[p]._mdf = o || s.styles[p]._mdf
                                }
                            }

                            function r(t, e, i) {
                                var s = e.style;
                                (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + A(e.c.v[0]) + "," + A(e.c.v[1]) + "," + A(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                            }

                            function n(t, e, i) {
                                h(t, e, i), o(t, e, i)
                            }

                            function h(t, e, i) {
                                var s, a, r, n, h, o = e.gf,
                                    l = e.g._hasOpacity,
                                    p = e.s.v,
                                    f = e.e.v;
                                if (e.o._mdf || i) {
                                    var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                    e.style.pElem.setAttribute(m, e.o.v)
                                }
                                if (e.s._mdf || i) {
                                    var d = 1 === t.t ? "x1" : "cx",
                                        c = "x1" === d ? "y1" : "cy";
                                    o.setAttribute(d, p[0]), o.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(c, p[1]))
                                }
                                if (e.g._cmdf || i) {
                                    s = e.cst;
                                    var u = e.g.c;
                                    for (r = s.length, a = 0; a < r; a += 1)(n = s[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                                }
                                if (l && (e.g._omdf || i)) {
                                    var g = e.g.o;
                                    for (r = (s = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = s[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
                                }
                                if (1 === t.t)(e.e._mdf || i) && (o.setAttribute("x2", f[0]), o.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                                else if ((e.s._mdf || e.e._mdf || i) && (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), o.setAttribute("r", h), l && !e.g._collapsable && e.of.setAttribute("r", h)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                    h || (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                    var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                        v = e.h.v;
                                    v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                    var b = h * v,
                                        _ = Math.cos(y + e.a.v) * b + p[0],
                                        x = Math.sin(y + e.a.v) * b + p[1];
                                    o.setAttribute("fx", _), o.setAttribute("fy", x), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", x))
                                }
                            }

                            function o(t, e, i) {
                                var s = e.style,
                                    a = e.d;
                                a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + A(e.c.v[0]) + "," + A(e.c.v[1]) + "," + A(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                            }
                            return {
                                createRenderFunction: function(t) {
                                    switch (t.ty) {
                                        case "fl":
                                            return r;
                                        case "gf":
                                            return h;
                                        case "gs":
                                            return n;
                                        case "st":
                                            return o;
                                        case "sh":
                                        case "el":
                                        case "rc":
                                        case "sr":
                                            return a;
                                        case "tr":
                                            return i;
                                        case "no":
                                            return s;
                                        default:
                                            return null
                                    }
                                }
                            }
                        }();

                    function e6(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                    }

                    function e8(t, e, i, s, a, r) {
                        this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = r, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!i,
                            fc: !!s,
                            m: !0,
                            p: !0
                        }
                    }

                    function e7(t, e) {
                        this._frameId = -999999, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                    }
                    g([eC, eI, eO, eY, eq, eE, ej], e6), e6.prototype.initSecondaryElement = function() {}, e6.prototype.identityMatrix = new tV, e6.prototype.buildExpressionInterface = function() {}, e6.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, e6.prototype.filterUniqueShapes = function() {
                        var t, e, i, s, a = this.shapes.length,
                            r = this.stylesList.length,
                            n = [],
                            h = !1;
                        for (i = 0; i < r; i += 1) {
                            for (s = this.stylesList[i], h = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), h = e._isAnimated || h);
                            n.length > 1 && h && this.setShapesAsAnimated(n)
                        }
                    }, e6.prototype.setShapesAsAnimated = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                    }, e6.prototype.createStyleElement = function(t, e) {
                        var i, s = new eJ(t, e),
                            a = s.pElem;
                        return "st" === t.ty ? i = new eU(this, t, s) : "fl" === t.ty ? i = new eQ(this, t, s) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? e1 : e2)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + c() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new e$(this, t, s)), ("st" === t.ty || "gs" === t.ty) && (a.setAttribute("stroke-linecap", eX[t.lc || 2]), a.setAttribute("stroke-linejoin", eG[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = ey(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
                    }, e6.prototype.createGroupElement = function(t) {
                        var e = new e3;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ey(t.bm)), e
                    }, e6.prototype.createTransformElement = function(t, e) {
                        var i = tZ.getTransformProperty(this, t, this),
                            s = new e5(i, i.o, e);
                        return this.addToAnimatedContents(t, s), s
                    }, e6.prototype.createShapeElement = function(t, e, i) {
                        var s = 4;
                        "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                        var a = new eK(e, i, tz.getShapeProp(this, t, s, this));
                        return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                    }, e6.prototype.addToAnimatedContents = function(t, e) {
                        for (var i = 0, s = this.animatedContents.length; i < s;) {
                            if (this.animatedContents[i].element === e) return;
                            i += 1
                        }
                        this.animatedContents.push({
                            fn: e4.createRenderFunction(t),
                            element: e,
                            data: t
                        })
                    }, e6.prototype.setElementStyles = function(t) {
                        var e, i = t.styles,
                            s = this.stylesList.length;
                        for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                    }, e6.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers()
                    }, e6.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                        var h, o, l, p, f, m, d = [].concat(r),
                            c = t.length - 1,
                            u = [],
                            g = [];
                        for (h = c; h >= 0; h -= 1) {
                            if ((m = this.searchProcessedElement(t[h])) ? e[h] = i[m - 1] : t[h]._render = n, "fl" === t[h].ty || "st" === t[h].ty || "gf" === t[h].ty || "gs" === t[h].ty || "no" === t[h].ty) m ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a), t[h]._render && e[h].style.pElem.parentNode !== s && s.appendChild(e[h].style.pElem), u.push(e[h].style);
                            else if ("gr" === t[h].ty) {
                                if (m)
                                    for (l = e[h].it.length, o = 0; o < l; o += 1) e[h].prevViewData[o] = e[h].it[o];
                                else e[h] = this.createGroupElement(t[h]);
                                this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, d, n), t[h]._render && e[h].gr.parentNode !== s && s.appendChild(e[h].gr)
                            } else "tr" === t[h].ty ? (m || (e[h] = this.createTransformElement(t[h], s)), p = e[h].transform, d.push(p)) : "sh" === t[h].ty || "rc" === t[h].ty || "el" === t[h].ty || "sr" === t[h].ty ? (m || (e[h] = this.createShapeElement(t[h], d, a)), this.setElementStyles(e[h])) : "tm" === t[h].ty || "rd" === t[h].ty || "ms" === t[h].ty || "pb" === t[h].ty || "zz" === t[h].ty || "op" === t[h].ty ? (m ? (f = e[h]).closed = !1 : ((f = tX.getModifier(t[h].ty)).init(this, t[h]), e[h] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[h].ty && (m ? (f = e[h]).closed = !0 : (f = tX.getModifier(t[h].ty), e[h] = f, f.init(this, t, h, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                            this.addProcessedElement(t[h], h + 1)
                        }
                        for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
                        for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0
                    }, e6.prototype.renderInnerContent = function() {
                        this.renderModifiers();
                        var t, e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                    }, e6.prototype.renderShape = function() {
                        var t, e, i = this.animatedContents.length;
                        for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                    }, e6.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, e8.prototype.update = function(t, e, i, s, a, r) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = !0, n = !0), n
                    }, e7.prototype.defaultBoxWidth = [0, 0], e7.prototype.copyData = function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, e7.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, e7.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, e7.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, e7.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                    }, e7.prototype.getValue = function(t) {
                        if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData,
                                i = this.keysIndex;
                            if (this.lock) return void this.setCurrentData(this.currentData);
                            this.lock = !0, this._mdf = !1;
                            var s, a = this.effectsSequence.length,
                                r = t || this.data.d.k[this.keysIndex].s;
                            for (s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                            e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }, e7.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                    }, e7.prototype.buildFinalText = function(t) {
                        for (var e, i, s = [], a = 0, r = t.length, n = !1, h = !1, o = ""; a < r;) n = h, h = !1, e = t.charCodeAt(a), o = t.charAt(a), ec.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? ec.isRegionalFlag(t, a) ? o = t.substr(a, 14) : (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (ec.isModifier(e, i) ? (o = t.substr(a, 2), n = !0) : o = ec.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (i = t.charCodeAt(a + 1), ec.isVariationSelector(e) && (n = !0)) : ec.isZeroWidthJoiner(e) && (n = !0, h = !0), n ? (s[s.length - 1] += o, n = !1) : s.push(o), a += o.length;
                        return s
                    }, e7.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, i, s, a, r, n, h, o = this.elem.globalData.fontManager,
                            l = this.data,
                            p = [],
                            f = 0,
                            m = l.m.g,
                            d = 0,
                            c = 0,
                            u = 0,
                            g = [],
                            y = 0,
                            v = 0,
                            b = o.getFontByName(t.f),
                            _ = 0,
                            x = ed(b);
                        t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                        var k, w = t.tr / 1e3 * t.finalSize;
                        if (t.sz)
                            for (var P, S, A = !0, D = t.sz[0], C = t.sz[1]; A;) {
                                S = this.buildFinalText(t.t), P = 0, y = 0, i = S.length, w = t.tr / 1e3 * t.finalSize;
                                var E = -1;
                                for (e = 0; e < i; e += 1) k = S[e].charCodeAt(0), s = !1, " " === S[e] ? E = e : (13 === k || 3 === k) && (y = 0, s = !0, P += t.finalLineHeight || 1.2 * t.finalSize), o.chars ? (h = o.getCharData(S[e], b.fStyle, b.fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(S[e], t.f, t.finalSize), y + _ > D && " " !== S[e] ? (-1 === E ? i += 1 : e = E, P += t.finalLineHeight || 1.2 * t.finalSize, S.splice(e, +(E === e), "\r"), E = -1, y = 0) : (y += _, y += w);
                                P += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && C < P ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = S, i = t.finalText.length, A = !1)
                            }
                        y = -w, _ = 0;
                        var M, T = 0;
                        for (e = 0; e < i; e += 1)
                            if (s = !1, 13 === (k = (M = t.finalText[e]).charCodeAt(0)) || 3 === k ? (T = 0, g.push(y), v = y > v ? y : v, y = -2 * w, a = "", s = !0, u += 1) : a = M, o.chars ? (h = o.getCharData(M, b.fStyle, o.getFontByName(t.f).fFamily), _ = s ? 0 : h.w * t.finalSize / 100) : _ = o.measureText(a, t.f, t.finalSize), " " === M ? T += _ + w : (y += _ + w + T, T = 0), p.push({
                                    l: _,
                                    an: _,
                                    add: d,
                                    n: s,
                                    anIndexes: [],
                                    val: a,
                                    line: u,
                                    animatorJustifyOffset: 0
                                }), 2 == m) {
                                if (d += _, "" === a || " " === a || e === i - 1) {
                                    for (("" === a || " " === a) && (d -= _); c <= e;) p[c].an = d, p[c].ind = f, p[c].extra = _, c += 1;
                                    f += 1, d = 0
                                }
                            } else if (3 == m) {
                            if (d += _, "" === a || e === i - 1) {
                                for ("" === a && (d -= _); c <= e;) p[c].an = d, p[c].ind = f, p[c].extra = _, c += 1;
                                d = 0, f += 1
                            }
                        } else p[f].ind = f, p[f].extra = 0, f += 1;
                        if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                        else switch (t.boxWidth = v, t.j) {
                            case 1:
                                t.justifyOffset = -t.boxWidth;
                                break;
                            case 2:
                                t.justifyOffset = -t.boxWidth / 2;
                                break;
                            default:
                                t.justifyOffset = 0
                        }
                        t.lineWidths = g;
                        var F, I, L = l.a;
                        n = L.length;
                        var B, z, V = [];
                        for (r = 0; r < n; r += 1) {
                            for ((F = L[r]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), z = 0, B = F.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[r] = z, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == i - 1) || 4 == B && (I.n || e == i - 1)) && (1 === F.s.rn && V.push(z), z += 1);
                            l.a[r].s.totalChars = z;
                            var R, N = -1;
                            if (1 === F.s.rn)
                                for (e = 0; e < i; e += 1) N != (I = p[e]).anIndexes[r] && (N = I.anIndexes[r], R = V.splice(Math.floor(Math.random() * V.length), 1)[0]), I.anIndexes[r] = R
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                    }, e7.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
                    }, e7.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                    }, e7.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, e7.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var it = function() {
                        var t = Math.max,
                            e = Math.min,
                            i = Math.floor;

                        function s(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = tE.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), "e" in e ? this.e = tE.getProp(t, e.e, 0, 0, this) : this.e = {
                                v: 100
                            }, this.o = tE.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = tE.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = tE.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = tE.getProp(t, e.sm || {
                                k: 100
                            }, 0, 0, this), this.a = tE.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return s.prototype = {
                            getMult: function(s) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var a = 0,
                                    r = 0,
                                    n = 1,
                                    h = 1;
                                this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : h = 1 + this.xe.v / 100;
                                var o = tm.getBezierEasing(a, r, n, h).get,
                                    l = 0,
                                    p = this.finalS,
                                    f = this.finalE,
                                    m = this.data.sh;
                                if (2 === m) l = o(l = f === p ? +(s >= f) : t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                else if (3 === m) l = o(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                else if (4 === m) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (s - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = o(l);
                                else if (5 === m) {
                                    if (f === p) l = 0;
                                    else {
                                        var d = f - p,
                                            c = -d / 2 + (s = e(t(0, s + .5 - p), f - p)),
                                            u = d / 2;
                                        l = Math.sqrt(1 - c * c / (u * u))
                                    }
                                    l = o(l)
                                } else 6 === m ? l = o(l = f === p ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (s = e(t(0, s + .5 - p), f - p)) / (f - p))) / 2) : (s >= i(p) && (l = s - p < 0 ? t(0, e(e(f, 1) - (p - s), 1)) : t(0, e(f - s, 1))), l = o(l));
                                if (100 !== this.sm.v) {
                                    var g = .01 * this.sm.v;
                                    0 === g && (g = 1e-8);
                                    var y = .5 - .5 * g;
                                    l < y ? l = 0 : (l = (l - y) / g) > 1 && (l = 1)
                                }
                                return l * this.a.v
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    i = this.o.v / e,
                                    s = this.s.v / e + i,
                                    a = this.e.v / e + i;
                                if (s > a) {
                                    var r = s;
                                    s = a, a = r
                                }
                                this.finalS = s, this.finalE = a
                            }
                        }, g([tM], s), {
                            getTextSelectorProp: function(t, e, i) {
                                return new s(t, e)
                            }
                        }
                    }();

                    function ie(t, e, i) {
                        var s = {
                                propType: !1
                            },
                            a = tE.getProp,
                            r = e.a;
                        this.a = {
                            r: r.r ? a(t, r.r, 0, M, i) : s,
                            rx: r.rx ? a(t, r.rx, 0, M, i) : s,
                            ry: r.ry ? a(t, r.ry, 0, M, i) : s,
                            sk: r.sk ? a(t, r.sk, 0, M, i) : s,
                            sa: r.sa ? a(t, r.sa, 0, M, i) : s,
                            s: r.s ? a(t, r.s, 1, .01, i) : s,
                            a: r.a ? a(t, r.a, 1, 0, i) : s,
                            o: r.o ? a(t, r.o, 0, .01, i) : s,
                            p: r.p ? a(t, r.p, 1, 0, i) : s,
                            sw: r.sw ? a(t, r.sw, 0, 0, i) : s,
                            sc: r.sc ? a(t, r.sc, 1, 0, i) : s,
                            fc: r.fc ? a(t, r.fc, 1, 0, i) : s,
                            fh: r.fh ? a(t, r.fh, 0, 0, i) : s,
                            fs: r.fs ? a(t, r.fs, 0, .01, i) : s,
                            fb: r.fb ? a(t, r.fb, 0, .01, i) : s,
                            t: r.t ? a(t, r.t, 0, 0, i) : s
                        }, this.s = it.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                    }

                    function ii(t, e, i) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = b(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                    }

                    function is() {}
                    ii.prototype.searchProperties = function() {
                        var t, e, i = this._textData.a.length,
                            s = tE.getProp;
                        for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new ie(this._elem, e, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: s(this._elem, this._textData.p.a, 0, 0, this),
                            f: s(this._elem, this._textData.p.f, 0, 0, this),
                            l: s(this._elem, this._textData.p.l, 0, 0, this),
                            r: s(this._elem, this._textData.p.r, 0, 0, this),
                            p: s(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                    }, ii.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                            this._isFirstFrame = !1;
                            var i, s, a, r, n, h, o, l, p, f, m, d, c, u, g, y, v, b, _, x = this._moreOptions.alignment.v,
                                k = this._animatorsData,
                                w = this._textData,
                                P = this.mHelper,
                                S = this._renderType,
                                A = this.renderedLetters.length,
                                D = t.l;
                            if (this._hasMaskedPath) {
                                if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var C, E = _.v;
                                    for (this._pathData.r.v && (E = E.reverse()), n = {
                                            tLength: 0,
                                            segments: []
                                        }, r = E._length - 1, y = 0, a = 0; a < r; a += 1) C = ty.buildBezierData(E.v[a], E.v[a + 1], [E.o[a][0] - E.v[a][0], E.o[a][1] - E.v[a][1]], [E.i[a + 1][0] - E.v[a + 1][0], E.i[a + 1][1] - E.v[a + 1][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength;
                                    a = r, _.v.c && (C = ty.buildBezierData(E.v[a], E.v[0], [E.o[a][0] - E.v[a][0], E.o[a][1] - E.v[a][1]], [E.i[0][0] - E.v[0][0], E.i[0][1] - E.v[0][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength), this._pathData.pi = n
                                }
                                if (n = this._pathData.pi, h = this._pathData.f.v, m = 0, f = 1, l = 0, p = !0, u = n.segments, h < 0 && _.v.c)
                                    for (n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength), m = u.length - 1, f = (c = u[m].points).length - 1; h < 0;) h += c[f].partialLength, (f -= 1) < 0 && (m -= 1, f = (c = u[m].points).length - 1);
                                d = (c = u[m].points)[f - 1], g = (o = c[f]).partialLength
                            }
                            r = D.length, i = 0, s = 0;
                            var M, T, F, I, L = 1.2 * t.finalSize * .714,
                                B = !0;
                            F = k.length;
                            var z, V, R, N, O, q, Y, X, G, K, J, Z, U, Q = -1,
                                $ = h,
                                tt = m,
                                te = f,
                                ti = -1,
                                ts = "",
                                ta = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var tr = 0,
                                    tn = 0,
                                    th = 2 === t.j ? -.5 : -1,
                                    to = 0,
                                    tl = !0;
                                for (a = 0; a < r; a += 1)
                                    if (D[a].n) {
                                        for (tr && (tr += tn); to < a;) D[to].animatorJustifyOffset = tr, to += 1;
                                        tr = 0, tl = !0
                                    } else {
                                        for (T = 0; T < F; T += 1)(M = k[T].a).t.propType && (tl && 2 === t.j && (tn += M.t.v * th), (z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars)).length ? tr += M.t.v * z[0] * th : tr += M.t.v * z * th);
                                        tl = !1
                                    } for (tr && (tr += tn); to < a;) D[to].animatorJustifyOffset = tr, to += 1
                            }
                            for (a = 0; a < r; a += 1) {
                                if (P.reset(), O = 1, D[a].n) i = 0, s += t.yOffset, s += +!!B, h = $, B = !1, this._hasMaskedPath && (m = tt, f = te, d = (c = u[m].points)[f - 1], g = (o = c[f]).partialLength, l = 0), ts = "", Z = "", K = "", U = "", ta = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (ti !== D[a].line) {
                                            switch (t.j) {
                                                case 1:
                                                    h += y - t.lineWidths[D[a].line];
                                                    break;
                                                case 2:
                                                    h += (y - t.lineWidths[D[a].line]) / 2
                                            }
                                            ti = D[a].line
                                        }
                                        Q !== D[a].ind && (D[Q] && (h += D[Q].extra), h += D[a].an / 2, Q = D[a].ind), h += x[0] * D[a].an * .005;
                                        var tp = 0;
                                        for (T = 0; T < F; T += 1)(M = k[T].a).p.propType && ((z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars)).length ? tp += M.p.v[0] * z[0] : tp += M.p.v[0] * z), M.a.propType && ((z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars)).length ? tp += M.a.v[0] * z[0] : tp += M.a.v[0] * z);
                                        for (p = !0, this._pathData.a.v && (h = .5 * D[0].an + (y - this._pathData.f.v - .5 * D[0].an - .5 * D[D.length - 1].an) * Q / (r - 1) + this._pathData.f.v); p;) l + g >= h + tp || !c ? (v = (h + tp - l) / o.partialLength, R = d.point[0] + (o.point[0] - d.point[0]) * v, N = d.point[1] + (o.point[1] - d.point[1]) * v, P.translate(-x[0] * D[a].an * .005, -(.01 * (x[1] * L))), p = !1) : c && (l += o.partialLength, (f += 1) >= c.length && (f = 0, u[m += 1] ? c = u[m].points : _.v.c ? (f = 0, c = u[m = 0].points) : (l -= o.partialLength, c = null)), c && (d = o, g = (o = c[f]).partialLength));
                                        V = D[a].an / 2 - D[a].add, P.translate(-V, 0, 0)
                                    } else V = D[a].an / 2 - D[a].add, P.translate(-V, 0, 0), P.translate(-x[0] * D[a].an * .005, -x[1] * L * .01, 0);
                                    for (T = 0; T < F; T += 1)(M = k[T].a).t.propType && (z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars), (0 !== i || 0 !== t.j) && (this._hasMaskedPath ? z.length ? h += M.t.v * z[0] : h += M.t.v * z : z.length ? i += M.t.v * z[0] : i += M.t.v * z));
                                    for (t.strokeWidthAnim && (Y = t.sw || 0), t.strokeColorAnim && (q = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (X = [t.fc[0], t.fc[1], t.fc[2]]), T = 0; T < F; T += 1)(M = k[T].a).a.propType && ((z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars)).length ? P.translate(-M.a.v[0] * z[0], -M.a.v[1] * z[1], M.a.v[2] * z[2]) : P.translate(-M.a.v[0] * z, -M.a.v[1] * z, M.a.v[2] * z));
                                    for (T = 0; T < F; T += 1)(M = k[T].a).s.propType && ((z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars)).length ? P.scale(1 + (M.s.v[0] - 1) * z[0], 1 + (M.s.v[1] - 1) * z[1], 1) : P.scale(1 + (M.s.v[0] - 1) * z, 1 + (M.s.v[1] - 1) * z, 1));
                                    for (T = 0; T < F; T += 1) {
                                        if (M = k[T].a, z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars), M.sk.propType && (z.length ? P.skewFromAxis(-M.sk.v * z[0], M.sa.v * z[1]) : P.skewFromAxis(-M.sk.v * z, M.sa.v * z)), M.r.propType && (z.length ? P.rotateZ(-M.r.v * z[2]) : P.rotateZ(-M.r.v * z)), M.ry.propType && (z.length ? P.rotateY(M.ry.v * z[1]) : P.rotateY(M.ry.v * z)), M.rx.propType && (z.length ? P.rotateX(M.rx.v * z[0]) : P.rotateX(M.rx.v * z)), M.o.propType && (z.length ? O += (M.o.v * z[0] - O) * z[0] : O += (M.o.v * z - O) * z), t.strokeWidthAnim && M.sw.propType && (z.length ? Y += M.sw.v * z[0] : Y += M.sw.v * z), t.strokeColorAnim && M.sc.propType)
                                            for (G = 0; G < 3; G += 1) z.length ? q[G] += (M.sc.v[G] - q[G]) * z[0] : q[G] += (M.sc.v[G] - q[G]) * z;
                                        if (t.fillColorAnim && t.fc) {
                                            if (M.fc.propType)
                                                for (G = 0; G < 3; G += 1) z.length ? X[G] += (M.fc.v[G] - X[G]) * z[0] : X[G] += (M.fc.v[G] - X[G]) * z;
                                            M.fh.propType && (X = z.length ? H(X, M.fh.v * z[0]) : H(X, M.fh.v * z)), M.fs.propType && (X = z.length ? j(X, M.fs.v * z[0]) : j(X, M.fs.v * z)), M.fb.propType && (X = z.length ? W(X, M.fb.v * z[0]) : W(X, M.fb.v * z))
                                        }
                                    }
                                    for (T = 0; T < F; T += 1)(M = k[T].a).p.propType && (z = k[T].s.getMult(D[a].anIndexes[T], w.a[T].s.totalChars), this._hasMaskedPath ? z.length ? P.translate(0, M.p.v[1] * z[0], -M.p.v[2] * z[1]) : P.translate(0, M.p.v[1] * z, -M.p.v[2] * z) : z.length ? P.translate(M.p.v[0] * z[0], M.p.v[1] * z[1], -M.p.v[2] * z[2]) : P.translate(M.p.v[0] * z, M.p.v[1] * z, -M.p.v[2] * z));
                                    if (t.strokeWidthAnim && (K = Y < 0 ? 0 : Y), t.strokeColorAnim && (J = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), this._hasMaskedPath) {
                                        if (P.translate(0, -t.ls), P.translate(0, x[1] * L * .01 + s, 0), this._pathData.p.v) {
                                            var tf = 180 * Math.atan(b = (o.point[1] - d.point[1]) / (o.point[0] - d.point[0])) / Math.PI;
                                            o.point[0] < d.point[0] && (tf += 180), P.rotate(-tf * Math.PI / 180)
                                        }
                                        P.translate(R, N, 0), h -= x[0] * D[a].an * .005, D[a + 1] && Q !== D[a + 1].ind && (h += D[a].an / 2, h += .001 * t.tr * t.finalSize)
                                    } else {
                                        switch (P.translate(i, s, 0), t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                            case 1:
                                                P.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]), 0, 0);
                                                break;
                                            case 2:
                                                P.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]) / 2, 0, 0)
                                        }
                                        P.translate(0, -t.ls), P.translate(V, 0, 0), P.translate(x[0] * D[a].an * .005, x[1] * L * .01, 0), i += D[a].l + .001 * t.tr * t.finalSize
                                    }
                                    "html" === S ? ts = P.toCSS() : "svg" === S ? ts = P.to2dCSS() : ta = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], U = O
                                }
                                A <= a ? (I = new e8(U, K, J, Z, ts, ta), this.renderedLetters.push(I), A += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(U, K, J, Z, ts, ta) || this.lettersChangedFlag)
                            }
                        }
                    }, ii.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, ii.prototype.mHelper = new tV, ii.prototype.defaultPropsArray = [], g([tM], ii), is.prototype.initElement = function(t, e, i) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new e7(this, t.t, this.dynamicProperties), this.textAnimator = new ii(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, is.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }, is.prototype.createPathShape = function(t, e) {
                        var i, s, a = e.length,
                            r = "";
                        for (i = 0; i < a; i += 1) "sh" === e[i].ty && (r += e9(s = e[i].ks.k, s.i.length, !0, t));
                        return r
                    }, is.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e)
                    }, is.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t)
                    }, is.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t)
                    }, is.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                        }
                        e.translate(s, a, 0)
                    }, is.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                    }, is.prototype.emptyProp = new e8, is.prototype.destroy = function() {}, is.prototype.validateText = function() {
                        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    };
                    var ia = {
                        shapes: []
                    };

                    function ir(t, e, i) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                    }

                    function ih(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function io(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                    }

                    function il() {}

                    function ip() {}

                    function im(t, e, i) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? b(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? tE.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function id(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = te("svg");
                        var i = "";
                        if (e && e.title) {
                            var s = te("title"),
                                a = N();
                            s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a
                        }
                        if (e && e.description) {
                            var r = te("desc"),
                                n = N();
                            r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + n
                        }
                        i && this.svgElement.setAttribute("aria-labelledby", i);
                        var h = te("defs");
                        this.svgElement.appendChild(h);
                        var o = te("g");
                        this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            progressiveLoad: e && e.progressiveLoad || !1,
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            viewBoxOnly: e && e.viewBoxOnly || !1,
                            viewBoxSize: e && e.viewBoxSize || !1,
                            className: e && e.className || "",
                            id: e && e.id || "",
                            focusable: e && e.focusable,
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "100%",
                                height: e && e.filterSize && e.filterSize.height || "100%",
                                x: e && e.filterSize && e.filterSize.x || "0%",
                                y: e && e.filterSize && e.filterSize.y || "0%"
                            },
                            width: e && e.width,
                            height: e && e.height,
                            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: h,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                    }
                    g([eC, eI, eO, eq, eE, ej, is], ir), ir.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = te("text"))
                    }, ir.prototype.buildTextContents = function(t) {
                        for (var e = 0, i = t.length, s = [], a = ""; e < i;) "\r" === t[e] || "\x03" === t[e] ? (s.push(a), a = "") : a += t[e], e += 1;
                        return s.push(a), s
                    }, ir.prototype.buildShapeData = function(t, e) {
                        if (t.shapes && t.shapes.length) {
                            var i = t.shapes[0];
                            if (i.it) {
                                var s = i.it[i.it.length - 1];
                                s.s && (s.s.k[0] = e, s.s.k[1] = e)
                            }
                        }
                        return t
                    }, ir.prototype.buildNewText = function() {
                        this.addDynamicProperty(this);
                        var t, e, i = this.textProperty.currentData;
                        this.renderedLetters = b(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                        var s = this.globalData.fontManager.getFontByName(i.f);
                        if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", s.fFamily);
                            var a = i.fWeight,
                                r = i.fStyle;
                            this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
                        }
                        this.layerElement.setAttribute("aria-label", i.t);
                        var n = i.l || [],
                            h = !!this.globalData.fontManager.chars;
                        e = n.length;
                        var o, l = this.mHelper,
                            p = this.data.singleShape,
                            f = 0,
                            m = 0,
                            d = !0,
                            c = .001 * i.tr * i.finalSize;
                        if (!p || h || i.sz) {
                            var u, g = this.textSpans.length;
                            for (t = 0; t < e; t += 1) {
                                if (this.textSpans[t] || (this.textSpans[t] = {
                                        span: null,
                                        childSpan: null,
                                        glyph: null
                                    }), !h || !p || 0 === t) {
                                    if (o = g > t ? this.textSpans[t].span : te(h ? "g" : "text"), g <= t) {
                                        if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, h) {
                                            var y = te("g");
                                            o.appendChild(y), this.textSpans[t].childSpan = y
                                        }
                                        this.textSpans[t].span = o, this.layerElement.appendChild(o)
                                    }
                                    o.style.display = "inherit"
                                }
                                if (l.reset(), p && (n[t].n && (f = -c, m += i.yOffset, m += +!!d, d = !1), this.applyTextPropertiesToMatrix(i, l, n[t].line, f, m), f += n[t].l || 0, f += c), h) {
                                    if (1 === (u = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) v = new im(u.data, this.globalData, this);
                                    else {
                                        var v, _ = ia;
                                        u.data && u.data.shapes && (_ = this.buildShapeData(u.data, i.finalSize)), v = new e6(_, this.globalData, this)
                                    }
                                    if (this.textSpans[t].glyph) {
                                        var x = this.textSpans[t].glyph;
                                        this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                                    }
                                    this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                                } else p && o.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                            }
                            p && o && o.setAttribute("d", "")
                        } else {
                            var k = this.textContainer,
                                w = "start";
                            switch (i.j) {
                                case 1:
                                    w = "end";
                                    break;
                                case 2:
                                    w = "middle";
                                    break;
                                default:
                                    w = "start"
                            }
                            k.setAttribute("text-anchor", w), k.setAttribute("letter-spacing", c);
                            var P = this.buildTextContents(i.finalText);
                            for (e = P.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(o = this.textSpans[t].span || te("tspan")).textContent = P[t], o.setAttribute("x", 0), o.setAttribute("y", m), o.style.display = "inherit", k.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[t].span = o, m += i.finalLineHeight;
                            this.layerElement.appendChild(k)
                        }
                        for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                        this._sizeChanged = !0
                    }, ir.prototype.sourceRectAtTime = function() {
                        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                            this._sizeChanged = !1;
                            var t = this.layerElement.getBBox();
                            this.bbox = {
                                top: t.y,
                                left: t.x,
                                width: t.width,
                                height: t.height
                            }
                        }
                        return this.bbox
                    }, ir.prototype.getValue = function() {
                        var t, e, i = this.textSpans.length;
                        for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                    }, ir.prototype.renderInnerContent = function() {
                        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            this._sizeChanged = !0;
                            var t, e, i, s, a, r = this.textAnimator.renderedLetters,
                                n = this.textProperty.currentData.l;
                            for (s = 0, a = n.length; s < a; s += 1) n[s].n || (t = r[s], e = this.textSpans[s].span, (i = this.textSpans[s].glyph) && i.renderFrame(), t._mdf.m && e.setAttribute("transform", t.m), t._mdf.o && e.setAttribute("opacity", t.o), t._mdf.sw && e.setAttribute("stroke-width", t.sw), t._mdf.sc && e.setAttribute("stroke", t.sc), t._mdf.fc && e.setAttribute("fill", t.fc))
                        }
                    }, g([eW], ih), ih.prototype.createContent = function() {
                        var t = te("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                    }, io.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, io.prototype.renderFrame = function() {}, io.prototype.getBaseElement = function() {
                        return null
                    }, io.prototype.destroy = function() {}, io.prototype.sourceRectAtTime = function() {}, io.prototype.hide = function() {}, g([eC, eI, eq, eE], io), g([eF], il), il.prototype.createNull = function(t) {
                        return new io(t, this.globalData, this)
                    }, il.prototype.createShape = function(t) {
                        return new e6(t, this.globalData, this)
                    }, il.prototype.createText = function(t) {
                        return new ir(t, this.globalData, this)
                    }, il.prototype.createImage = function(t) {
                        return new eW(t, this.globalData, this)
                    }, il.prototype.createSolid = function(t) {
                        return new ih(t, this.globalData, this)
                    }, il.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var i = te("clipPath"),
                            s = te("rect");
                        s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                        var a = N();
                        i.setAttribute("id", a), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = b(t.layers.length)
                    }, il.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, il.prototype.updateContainerSize = function() {}, il.prototype.findIndexByInd = function(t) {
                        var e = 0,
                            i = this.layers.length;
                        for (e = 0; e < i; e += 1)
                            if (this.layers[e].ind === t) return e;
                        return -1
                    }, il.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || 99 === this.layers[t].ty)) {
                            e[t] = !0;
                            var i = this.createItem(this.layers[t]);
                            if (e[t] = i, U() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                                var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                                if (-1 === s) return;
                                if (this.elements[s] && !0 !== this.elements[s]) {
                                    var a = e[s].getMatte(this.layers[t].tt);
                                    i.setMatte(a)
                                } else this.buildItem(s), this.addPendingElement(i)
                            }
                        }
                    }, il.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) {
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt)
                                for (var e = 0, i = this.elements.length; e < i;) {
                                    if (this.elements[e] === t) {
                                        var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                            a = this.elements[s].getMatte(this.layers[e].tt);
                                        t.setMatte(a);
                                        break
                                    }
                                    e += 1
                                }
                        }
                    }, il.prototype.renderFrame = function(t) {
                        if (!(this.renderedFrame === t || this.destroyed)) {
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var e, i = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf)
                                for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }
                    }, il.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            for (var s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), a += 1;
                            s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                        }
                    }, il.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, il.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, g([eC, eI, eq, eE, ej], ip), ip.prototype.initElement = function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
                    }, ip.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                            }
                            var i, s = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                        }
                    }, ip.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, ip.prototype.setElements = function(t) {
                        this.elements = t
                    }, ip.prototype.getElements = function() {
                        return this.elements
                    }, ip.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                    }, ip.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, g([il, ip, eO], im), im.prototype.createComp = function(t) {
                        return new im(t, this.globalData, this)
                    }, g([il], id), id.prototype.createComp = function(t) {
                        return new im(t, this.globalData, this)
                    };
                    var ic = {};

                    function iu(t) {
                        var e, i, s = t.data.ef ? t.data.ef.length : 0;
                        for (i = 0, this.filters = []; i < s; i += 1) {
                            e = null;
                            var a = t.data.ef[i].ty;
                            ic[a] && (e = new ic[a].effect(t.effectsManager.effectElements[i], t)), e && this.filters.push(e)
                        }
                        this.filters.length && t.addRenderableComponent(this)
                    }

                    function ig() {}

                    function iy(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function iv(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = te("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }
                    }

                    function ib(t, e, i) {
                        this.textSpans = [], this.textPaths = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
                    }

                    function i_(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                        var s = tE.getProp;
                        if (this.pe = s(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this), this.py = s(this, t.ks.p.y, 1, 0, this), this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                            var a, r = t.ks.or.k.length;
                            for (a = 0; a < r; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
                        }
                        this.or = s(this, t.ks.or, 1, M, this), this.or.sh = !0, this.rx = s(this, t.ks.rx, 0, M, this), this.ry = s(this, t.ks.ry, 0, M, this), this.rz = s(this, t.ks.rz, 0, M, this), this.mat = new tV, this._prevMat = new tV, this._isFirstFrame = !0, this.finalTransform = {
                            mProp: this
                        }
                    }

                    function ix(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
                    }

                    function ik(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: e && e.className || "",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "400%",
                                height: e && e.filterSize && e.filterSize.height || "400%",
                                x: e && e.filterSize && e.filterSize.x || "-100%",
                                y: e && e.filterSize && e.filterSize.y || "-100%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                    }

                    function iw(t, e, i) {
                        this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? b(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? tE.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function iP(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: e && e.className || "",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "400%",
                                height: e && e.filterSize && e.filterSize.height || "400%",
                                x: e && e.filterSize && e.filterSize.x || "-100%",
                                y: e && e.filterSize && e.filterSize.y || "-100%"
                            },
                            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                    }
                    return iu.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                    }, iu.prototype.getEffects = function(t) {
                        var e, i = this.filters.length,
                            s = [];
                        for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
                        return s
                    }, ig.prototype = {
                        checkBlendMode: function() {},
                        initRendererElement: function() {
                            this.baseElement = u(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = te("svg"), this.layerElement = te("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, T(this.baseElement)
                        },
                        createContainerElements: function() {
                            this.renderableEffectsManager = new iu(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            var t = this.transformedElement ? this.transformedElement.style : {};
                            if (this.finalTransform._matMdf) {
                                var e = this.finalTransform.mat.toCSS();
                                t.transform = e, t.webkitTransform = e
                            }
                            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        destroy: function() {
                            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new eL(this.data, this, this.globalData)
                        },
                        addEffects: function() {},
                        setMatte: function() {}
                    }, ig.prototype.getBaseElement = eO.prototype.getBaseElement, ig.prototype.destroyBaseElement = ig.prototype.destroy, ig.prototype.buildElementParenting = eF.prototype.buildElementParenting, g([eC, eI, ig, eq, eE, ej], iy), iy.prototype.createContent = function() {
                        var t;
                        this.data.hasMask ? ((t = te("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = u("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                    }, g([eC, eI, iy, e6, ig, eq, eE, eg], iv), iv.prototype._renderShapeFrame = iv.prototype.renderInnerContent, iv.prototype.createContent = function() {
                        var t;
                        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                        else {
                            t = te("svg");
                            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                        }
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                    }, iv.prototype.getTransformedPoint = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                        return e
                    }, iv.prototype.calculateShapeBoundingBox = function(t, e) {
                        var i, s, a, r, n, h = t.sh.v,
                            o = t.transformers,
                            l = h._length;
                        if (!(l <= 1)) {
                            for (i = 0; i < l - 1; i += 1) s = this.getTransformedPoint(o, h.v[i]), a = this.getTransformedPoint(o, h.o[i]), r = this.getTransformedPoint(o, h.i[i + 1]), n = this.getTransformedPoint(o, h.v[i + 1]), this.checkBounds(s, a, r, n, e);
                            h.c && (s = this.getTransformedPoint(o, h.v[i]), a = this.getTransformedPoint(o, h.o[i]), r = this.getTransformedPoint(o, h.i[0]), n = this.getTransformedPoint(o, h.v[0]), this.checkBounds(s, a, r, n, e))
                        }
                    }, iv.prototype.checkBounds = function(t, e, i, s, a) {
                        this.getBoundsOfCurve(t, e, i, s);
                        var r = this.shapeBoundingBox;
                        a.x = C(r.left, a.x), a.xMax = D(r.right, a.xMax), a.y = C(r.top, a.y), a.yMax = D(r.bottom, a.yMax)
                    }, iv.prototype.shapeBoundingBox = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, iv.prototype.tempBoundingBox = {
                        x: 0,
                        xMax: 0,
                        y: 0,
                        yMax: 0,
                        width: 0,
                        height: 0
                    }, iv.prototype.getBoundsOfCurve = function(t, e, i, s) {
                        for (var a, r, n, h, o, l, p, f = [
                                [t[0], s[0]],
                                [t[1], s[1]]
                            ], m = 0; m < 2; ++m) r = 6 * t[m] - 12 * e[m] + 6 * i[m], a = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * s[m], n = 3 * e[m] - 3 * t[m], r |= 0, n |= 0, 0 == (a |= 0) && 0 === r || (0 === a ? (h = -n / r) > 0 && h < 1 && f[m].push(this.calculateF(h, t, e, i, s, m)) : (o = r * r - 4 * n * a) >= 0 && ((l = (-r + S(o)) / (2 * a)) > 0 && l < 1 && f[m].push(this.calculateF(l, t, e, i, s, m)), (p = (-r - S(o)) / (2 * a)) > 0 && p < 1 && f[m].push(this.calculateF(p, t, e, i, s, m))));
                        this.shapeBoundingBox.left = C.apply(null, f[0]), this.shapeBoundingBox.top = C.apply(null, f[1]), this.shapeBoundingBox.right = D.apply(null, f[0]), this.shapeBoundingBox.bottom = D.apply(null, f[1])
                    }, iv.prototype.calculateF = function(t, e, i, s, a, r) {
                        return P(1 - t, 3) * e[r] + 3 * P(1 - t, 2) * t * i[r] + 3 * (1 - t) * P(t, 2) * s[r] + P(t, 3) * a[r]
                    }, iv.prototype.calculateBoundingBox = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
                    }, iv.prototype.expandStrokeBoundingBox = function(t, e) {
                        var i = 0;
                        if (t.keyframes) {
                            for (var s = 0; s < t.keyframes.length; s += 1) {
                                var a = t.keyframes[s].s;
                                a > i && (i = a)
                            }
                            i *= t.mult
                        } else i = t.v * t.mult;
                        e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
                    }, iv.prototype.currentBoxContains = function(t) {
                        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                    }, iv.prototype.renderInnerContent = function() {
                        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var t = this.tempBoundingBox;
                            if (t.x = 999999, t.xMax = -999999, t.y = 999999, t.yMax = -999999, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, !this.currentBoxContains(t)) {
                                var e = !1;
                                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), e = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), e = !0), e || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                    var i = this.shapeCont.style,
                                        s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    i.transform = s, i.webkitTransform = s
                                }
                            }
                        }
                    }, g([eC, eI, ig, eq, eE, ej, is], ib), ib.prototype.createContent = function() {
                        if (this.isMasked = this.checkMasks(), this.isMasked) {
                            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                            var t = te("g");
                            this.maskedElement.appendChild(t), this.innerElem = t
                        } else this.renderType = "html", this.innerElem = this.layerElement;
                        this.checkParenting()
                    }, ib.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = b(t.l ? t.l.length : 0);
                        var e = this.innerElem.style,
                            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                        e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                        var s = this.globalData.fontManager.getFontByName(t.f);
                        if (!this.globalData.fontManager.chars)
                            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                            else {
                                e.fontFamily = s.fFamily;
                                var a = t.fWeight;
                                e.fontStyle = t.fStyle, e.fontWeight = a
                            } var r, n, h = t.l;
                        n = h.length;
                        var o, l, p, f, m = this.mHelper,
                            d = "",
                            c = 0;
                        for (r = 0; r < n; r += 1) {
                            if (this.globalData.fontManager.chars ? (this.textPaths[c] ? o = this.textPaths[c] : ((o = te("path")).setAttribute("stroke-linecap", eX[1]), o.setAttribute("stroke-linejoin", eG[2]), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[c] ? p = (l = this.textSpans[c]).children[0] : ((l = u("div")).style.lineHeight = 0, (p = te("svg")).appendChild(o), T(l)))) : this.isMasked ? o = this.textPaths[c] ? this.textPaths[c] : te("text") : this.textSpans[c] ? (l = this.textSpans[c], o = this.textPaths[c]) : (T(l = u("span")), T(o = u("span")), l.appendChild(o)), this.globalData.fontManager.chars) {
                                var g, y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                                if (g = y ? y.data : null, m.reset(), g && g.shapes && g.shapes.length && (f = g.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(m, f), o.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(o);
                                else {
                                    if (this.innerElem.appendChild(l), g && g.shapes) {
                                        document.body.appendChild(p);
                                        var v = p.getBBox();
                                        p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                        var _ = p.style,
                                            x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                        _.transform = x, _.webkitTransform = x, h[r].yOffset = v.y - 1
                                    } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                    l.appendChild(p)
                                }
                            } else if (o.textContent = h[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(o);
                            else {
                                this.innerElem.appendChild(l);
                                var k = o.style,
                                    w = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                                k.transform = w, k.webkitTransform = w
                            }
                            this.isMasked ? this.textSpans[c] = o : this.textSpans[c] = l, this.textSpans[c].style.display = "block", this.textPaths[c] = o, c += 1
                        }
                        for (; c < this.textSpans.length;) this.textSpans[c].style.display = "none", c += 1
                    }, ib.prototype.renderInnerContent = function() {
                        if (this.validateText(), this.data.singleShape) {
                            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                            if (this.isMasked && this.finalTransform._matMdf) {
                                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
                                var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                e.transform = t, e.webkitTransform = t
                            }
                        }
                        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                            var e, i, s, a, r, n, h = 0,
                                o = this.textAnimator.renderedLetters,
                                l = this.textProperty.currentData.l;
                            for (r = 0, n = l.length; r < n; r += 1) l[r].n ? h += 1 : (s = this.textSpans[r], a = this.textPaths[r], i = o[h], h += 1, i._mdf.m && (this.isMasked ? s.setAttribute("transform", i.m) : (s.style.webkitTransform = i.m, s.style.transform = i.m)), s.style.opacity = i.o, i.sw && i._mdf.sw && a.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && a.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (a.setAttribute("fill", i.fc), a.style.color = i.fc));
                            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var p = this.innerElem.getBBox();
                                if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                    this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                                    var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    e.transform = f, e.webkitTransform = f
                                }
                            }
                        }
                    }, g([eC, eE, eq], i_), i_.prototype.setup = function() {
                        var t, e, i, s, a = this.comp.threeDElements.length;
                        for (t = 0; t < a; t += 1)
                            if ("3d" === (e = this.comp.threeDElements[t]).type) {
                                i = e.perspectiveElem.style, s = e.container.style;
                                var r = this.pe.v + "px",
                                    n = "0px 0px 0px",
                                    h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                i.perspective = r, i.webkitPerspective = r, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = h, i.webkitTransform = h
                            }
                    }, i_.prototype.createElements = function() {}, i_.prototype.hide = function() {}, i_.prototype.renderFrame = function() {
                        var t, e, i = this._isFirstFrame;
                        if (this.hierarchy)
                            for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                        if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                            if (this.mat.reset(), this.hierarchy)
                                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                    var s = this.hierarchy[t].finalTransform.mProp;
                                    this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                                }
                            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                var a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]],
                                    r = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                                    n = [a[0] / r, a[1] / r, a[2] / r],
                                    h = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                                    o = Math.atan2(n[1], h),
                                    l = Math.atan2(n[0], -n[2]);
                                this.mat.rotateY(l).rotateX(-o)
                            }
                            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                            var p = !this._prevMat.equals(this.mat);
                            if ((p || this.pe._mdf) && this.comp.threeDElements) {
                                for (t = 0, e = this.comp.threeDElements.length; t < e; t += 1)
                                    if ("3d" === (f = this.comp.threeDElements[t]).type) {
                                        if (p) {
                                            var f, m, d, c = this.mat.toCSS();
                                            (d = f.container.style).transform = c, d.webkitTransform = c
                                        }
                                        this.pe._mdf && ((m = f.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px")
                                    } this.mat.clone(this._prevMat)
                            }
                        }
                        this._isFirstFrame = !1
                    }, i_.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, i_.prototype.destroy = function() {}, i_.prototype.getBaseElement = function() {
                        return null
                    }, g([eC, eI, ig, iy, eq, eE, eg], ix), ix.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData),
                            e = new Image;
                        this.data.hasMask ? (this.imageElem = te("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                    }, g([eF], ik), ik.prototype.buildItem = id.prototype.buildItem, ik.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, ik.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            var s = this.layers[e];
                            if (s.ddd && this.supports3d) this.addTo3dContainer(i, e);
                            else if (this.threeDElements) this.addTo3dContainer(i, e);
                            else {
                                for (var a, r, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : r.getBaseElement()) || a), n += 1;
                                a ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, a) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
                            }
                        }
                    }, ik.prototype.createShape = function(t) {
                        return this.supports3d ? new iv(t, this.globalData, this) : new e6(t, this.globalData, this)
                    }, ik.prototype.createText = function(t) {
                        return this.supports3d ? new ib(t, this.globalData, this) : new ir(t, this.globalData, this)
                    }, ik.prototype.createCamera = function(t) {
                        return this.camera = new i_(t, this.globalData, this), this.camera
                    }, ik.prototype.createImage = function(t) {
                        return this.supports3d ? new ix(t, this.globalData, this) : new eW(t, this.globalData, this)
                    }, ik.prototype.createSolid = function(t) {
                        return this.supports3d ? new iy(t, this.globalData, this) : new ih(t, this.globalData, this)
                    }, ik.prototype.createNull = id.prototype.createNull, ik.prototype.getThreeDContainerByPos = function(t) {
                        for (var e = 0, i = this.threeDElements.length; e < i;) {
                            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                            e += 1
                        }
                        return null
                    }, ik.prototype.createThreeDContainer = function(t, e) {
                        var i, s, a = u("div");
                        T(a);
                        var r = u("div");
                        if (T(r), "3d" === e) {
                            (i = a.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                            var n = "50% 50%";
                            i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n;
                            var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            (s = r.style).transform = h, s.webkitTransform = h
                        }
                        a.appendChild(r);
                        var o = {
                            container: r,
                            perspectiveElem: a,
                            startPos: t,
                            endPos: t,
                            type: e
                        };
                        return this.threeDElements.push(o), o
                    }, ik.prototype.build3dContainers = function() {
                        var t, e, i = this.layers.length,
                            s = "";
                        for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== s && (s = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== s && (s = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
                        for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                    }, ik.prototype.addTo3dContainer = function(t, e) {
                        for (var i = 0, s = this.threeDElements.length; i < s;) {
                            if (e <= this.threeDElements[i].endPos) {
                                for (var a, r = this.threeDElements[i].startPos; r < e;) this.elements[r] && this.elements[r].getBaseElement && (a = this.elements[r].getBaseElement()), r += 1;
                                a ? this.threeDElements[i].container.insertBefore(t, a) : this.threeDElements[i].container.appendChild(t);
                                break
                            }
                            i += 1
                        }
                    }, ik.prototype.configAnimation = function(t) {
                        var e = u("div"),
                            i = this.animationItem.wrapper,
                            s = e.style;
                        s.width = t.w + "px", s.height = t.h + "px", this.resizerElem = e, T(e), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), s.overflow = "hidden";
                        var a = te("svg");
                        a.setAttribute("width", "1"), a.setAttribute("height", "1"), T(a), this.resizerElem.appendChild(a);
                        var r = te("defs");
                        a.appendChild(r), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = r, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                    }, ik.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, ik.prototype.updateContainerSize = function() {
                        var t, e, i, s, a = this.animationItem.wrapper.offsetWidth,
                            r = this.animationItem.wrapper.offsetHeight;
                        this.globalData.compSize.w / this.globalData.compSize.h > a / r ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, i = 0, s = (r - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = r / this.globalData.compSize.h, e = r / this.globalData.compSize.h, i = (a - this.globalData.compSize.w * (r / this.globalData.compSize.h)) / 2, s = 0);
                        var n = this.resizerElem.style;
                        n.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)", n.transform = n.webkitTransform
                    }, ik.prototype.renderFrame = id.prototype.renderFrame, ik.prototype.hide = function() {
                        this.resizerElem.style.display = "none"
                    }, ik.prototype.show = function() {
                        this.resizerElem.style.display = "block"
                    }, ik.prototype.initItems = function() {
                        if (this.buildAllItems(), this.camera) this.camera.setup();
                        else {
                            var t, e = this.globalData.compSize.w,
                                i = this.globalData.compSize.h,
                                s = this.threeDElements.length;
                            for (t = 0; t < s; t += 1) {
                                var a = this.threeDElements[t].perspectiveElem.style;
                                a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", a.perspective = a.webkitPerspective
                            }
                        }
                    }, ik.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length,
                            s = u("div");
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var a = this.createComp(t[e], s, this.globalData.comp, null);
                                a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
                            }
                    }, g([ik, ip, ig], iw), iw.prototype._createBaseContainerElements = iw.prototype.createContainerElements, iw.prototype.createContainerElements = function() {
                        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                    }, iw.prototype.addTo3dContainer = function(t, e) {
                        for (var i, s = 0; s < e;) this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1;
                        i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                    }, iw.prototype.createComp = function(t) {
                        return this.supports3d ? new iw(t, this.globalData, this) : new im(t, this.globalData, this)
                    }, g([ik], iP), iP.prototype.createComp = function(t) {
                        return this.supports3d ? new iw(t, this.globalData, this) : new im(t, this.globalData, this)
                    }, to.html = iP, tX.registerModifier("tm", tK), tX.registerModifier("pb", tJ), tX.registerModifier("rp", tU), tX.registerModifier("rd", tQ), tX.registerModifier("zz", es), tX.registerModifier("op", em), tN
                }, "object" == typeof t && "u" > typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : (i = "u" > typeof globalThis ? globalThis : i || self).lottie = s())
            })()
        }
    }
]);