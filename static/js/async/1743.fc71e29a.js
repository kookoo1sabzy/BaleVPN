/*! For license information please see 1743.fc71e29a.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "586c91a2-5c8d-462b-86c4-f4765b0c0cc2", t._sentryDebugIdIdentifier = "sentry-dbid-586c91a2-5c8d-462b-86c4-f4765b0c0cc2")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1743"], {
        36962: function(t, e, i) {
            i.r(e), i.d(e, {
                default: () => s
            });
            var s = (0, i(25260).a)((t, e) => {
                var i, s;
                "u" > typeof navigator && (i = t, s = function() {
                    var i, s, a, r, n, o, h, l, p, f = "",
                        d = !1,
                        m = function(t) {
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
                        k = null,
                        P = "",
                        A = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        S = Math.pow,
                        w = Math.sqrt,
                        x = Math.floor,
                        D = Math.min,
                        C = 150,
                        M = Math.PI / 180;

                    function T(t, e, i, s) {
                        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
                    }

                    function F(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1
                    }

                    function E(t, e, i, s) {
                        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
                    }

                    function I(t, e, i) {
                        this.type = t, this.firstFrame = e, this.totalFrames = i
                    }

                    function L(t, e) {
                        this.type = t, this.target = e
                    }

                    function V(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                    }

                    function R(t) {
                        this.type = "configError", this.nativeError = t
                    }
                    var z = (W = 0, function() {
                        return W += 1, P + "__lottie_element_" + W
                    });

                    function N(t, e, i) {
                        var s, a, r, n, o, h, l, p;
                        switch (n = Math.floor(6 * t), o = 6 * t - n, h = i * (1 - e), l = i * (1 - o * e), p = i * (1 - (1 - o) * e), n % 6) {
                            case 0:
                                s = i, a = p, r = h;
                                break;
                            case 1:
                                s = l, a = i, r = h;
                                break;
                            case 2:
                                s = h, a = i, r = p;
                                break;
                            case 3:
                                s = h, a = l, r = i;
                                break;
                            case 4:
                                s = p, a = h, r = i;
                                break;
                            case 5:
                                s = i, a = h, r = l
                        }
                        return [s, a, r]
                    }

                    function O(t, e, i) {
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

                    function B(t, e) {
                        var i = O(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), N(i[0], i[1], i[2])
                    }

                    function q(t, e) {
                        var i = O(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), N(i[0], i[1], i[2])
                    }

                    function j(t, e) {
                        var i = O(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), N(i[0], i[1], i[2])
                    }
                    var W, X, Y, H = [];
                    for (X = 0; X < 256; X += 1) Y = X.toString(16), H[X] = 1 === Y.length ? "0" + Y : Y;
                    var G = function(t) {
                            _ = !!t
                        },
                        K = function(t) {
                            k = t
                        },
                        J = function() {
                            return k
                        },
                        U = function(t) {
                            C = t
                        },
                        Z = function() {
                            return C
                        },
                        Q = function(t) {
                            P = t
                        };

                    function $(t) {
                        return document.createElementNS("http://www.w3.org/2000/svg", t)
                    }

                    function tt(t) {
                        return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var te = function() {
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
                                    if (window.Worker && window.Blob && d) {
                                        var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                            type: "text/javascript"
                                        });
                                        return new Worker(URL.createObjectURL(i))
                                    }
                                    return t = e, a
                                }(function(t) {
                                    if (r.dataManager || (r.dataManager = function() {
                                            function t(a, r) {
                                                var n, o, h, l, p, f, d = a.length;
                                                for (o = 0; o < d; o += 1)
                                                    if ("ks" in (n = a[o]) && !n.completed) {
                                                        if (n.completed = !0, n.hasMask) {
                                                            var m, c = n.masksProperties;
                                                            for (l = c.length, h = 0; h < l; h += 1)
                                                                if (c[h].pt.k.i) s(c[h].pt.k);
                                                                else
                                                                    for (f = c[h].pt.k.length, p = 0; p < f; p += 1) c[h].pt.k[p].s && s(c[h].pt.k[p].s[0]), c[h].pt.k[p].e && s(c[h].pt.k[p].e[0])
                                                        }
                                                        0 === n.ty ? (n.layers = e(n.refId, r), t(n.layers, r)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && 0 === (m = n).t.a.length && m.t.p
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
                                                o = (r = [4, 7, 99], function(t) {
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
                                                h = function() {
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
                                                        var e, i, s, a, r, n, o = t.length;
                                                        for (i = 0; i < o; i += 1) {
                                                            if ((e = t[i]).hasMask) {
                                                                var h = e.masksProperties;
                                                                for (a = h.length, s = 0; s < a; s += 1)
                                                                    if (h[s].pt.k.i) h[s].pt.k.c = h[s].cl;
                                                                    else
                                                                        for (n = h[s].pt.k.length, r = 0; r < n; r += 1) h[s].pt.k[r].s && (h[s].pt.k[r].s[0].c = h[s].cl), h[s].pt.k[r].e && (h[s].pt.k[r].e[0].c = h[s].cl)
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
                                                i.__complete || (l(i), n(i), o(i), h(i), p(i), t(i.layers, i.assets), function(i, s) {
                                                    if (i) {
                                                        var a = 0,
                                                            r = i.length;
                                                        for (a = 0; a < r; a += 1) 1 === i[a].t && (i[a].data.layers = e(i[a].data.refId, s), t(i[a].data.layers, s))
                                                    }
                                                }(i.chars, i.assets), i.__complete = !0)
                                            }, f.checkColors = l, f.checkChars = o, f.checkPathProperties = h, f.checkShapes = p, f.completeLayers = t, f
                                        }()), r.assetLoader || (r.assetLoader = function() {
                                            function t(t) {
                                                var e = t.getResponseHeader("content-type");
                                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === tt(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
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

                            function o(t, e) {
                                var a = "processId_" + (i += 1);
                                return s[a] = {
                                    onComplete: t,
                                    onError: e
                                }, a
                            }
                            return {
                                loadAnimation: function(t, i, s) {
                                    n();
                                    var a = o(i, s);
                                    e.postMessage({
                                        type: "loadAnimation",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                loadData: function(t, i, s) {
                                    n();
                                    var a = o(i, s);
                                    e.postMessage({
                                        type: "loadData",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                completeAnimation: function(t, i, s) {
                                    n();
                                    var a = o(i, s);
                                    e.postMessage({
                                        type: "complete",
                                        animation: t,
                                        id: a
                                    })
                                }
                            }
                        }(),
                        ti = function() {
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

                            function o(t) {
                                var e = {
                                        assetData: t
                                    },
                                    i = r(t, this.assetsPath, this.path);
                                return te.loadData(i, (function(t) {
                                    e.img = t, this._footageLoaded()
                                }).bind(this), (function() {
                                    e.img = {}, this._footageLoaded()
                                }).bind(this)), e
                            }

                            function h() {
                                this._imageLoaded = s.bind(this), this._footageLoaded = a.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return h.prototype = {
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
                                        s = $("image");
                                    A ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", (function() {
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
                            }, h
                        }();

                    function ts() {}
                    ts.prototype = {
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
                    var ta = function(t) {
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
                        tr = function() {
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
                        tn = {};

                    function to(t) {
                        return (to = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var th = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = z(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = _, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = tr(), this.imagePreloader = new ti, this.audioController = y(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new T("drawnFrame", 0, 0, 0), this.expressionsPlugin = J()
                    };
                    g([ts], th), th.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                        var i = tn[e];
                        this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), te.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                    }, th.prototype.onSetupError = function() {
                        this.trigger("data_failed")
                    }, th.prototype.setupAnimation = function(t) {
                        te.completeAnimation(t, this.configAnimation)
                    }, th.prototype.setData = function(t, e) {
                        e && "object" !== to(e) && (e = JSON.parse(e));
                        var i = {
                                wrapper: t,
                                animationData: e
                            },
                            s = t.attributes;
                        i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : function() {
                            if (tn.canvas) return "canvas";
                            for (var t in tn)
                                if (tn[t]) return t;
                            return ""
                        }() || "canvas";
                        var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                        "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10)), i.autoplay = "false" !== (s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value), i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
                    }, th.prototype.includeLayers = function(t) {
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
                        this.animationData.__complete = !1, te.completeAnimation(this.animationData, this.onSegmentComplete)
                    }, th.prototype.onSegmentComplete = function(t) {
                        this.animationData = t;
                        var e = J();
                        e && e.initExpressions(this), this.loadNextSegment()
                    }, th.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || 0 === t.length || !this.autoloadSegments) {
                            this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                            return
                        }
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, te.loadData(i, this.includeLayers.bind(this), (function() {
                            this.trigger("data_failed")
                        }).bind(this))
                    }, th.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                    }, th.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded()
                    }, th.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                    }, th.prototype.configAnimation = function(t) {
                        if (this.renderer) try {
                            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = ta(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                        } catch (t) {
                            this.triggerConfigError(t)
                        }
                    }, th.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                    }, th.prototype.checkLoaded = function() {
                        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                            this.isLoaded = !0;
                            var t = J();
                            t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                                this.trigger("DOMLoaded")
                            }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                        }
                    }, th.prototype.resize = function(t, e) {
                        this.renderer.updateContainerSize("number" == typeof t ? t : void 0, "number" == typeof e ? e : void 0)
                    }, th.prototype.setSubframe = function(t) {
                        this.isSubframeEnabled = !!t
                    }, th.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                    }, th.prototype.renderFrame = function() {
                        if (!(!1 === this.isLoaded || !this.renderer)) try {
                            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        } catch (t) {
                            this.triggerRenderFrameError(t)
                        }
                    }, th.prototype.play = function(t) {
                        t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                    }, th.prototype.pause = function(t) {
                        t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                    }, th.prototype.togglePause = function(t) {
                        t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                    }, th.prototype.stop = function(t) {
                        t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                    }, th.prototype.getMarkerData = function(t) {
                        for (var e, i = 0; i < this.markers.length; i += 1)
                            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                        return null
                    }, th.prototype.goToAndStop = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            if (isNaN(Number(t))) {
                                var s = this.getMarkerData(t);
                                s && this.goToAndStop(s.time, !0)
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause()
                        }
                    }, th.prototype.goToAndPlay = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            var s = Number(t);
                            if (isNaN(s)) {
                                var a = this.getMarkerData(t);
                                a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                            } else this.goToAndStop(s, e, i);
                            this.play()
                        }
                    }, th.prototype.advanceTime = function(t) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var e = this.currentRawFrame + t * this.frameModifier,
                                i = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i = !0, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                        }
                    }, th.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                    }, th.prototype.setSegment = function(t, e) {
                        var i = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                    }, th.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" === to(t[0])) {
                            var i, s = t.length;
                            for (i = 0; i < s; i += 1) this.segments.push(t[i])
                        } else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                    }, th.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                    }, th.prototype.checkSegments = function(t) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                    }, th.prototype.destroy = function(t) {
                        t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                    }, th.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame()
                    }, th.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier()
                    }, th.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                    }, th.prototype.setLoop = function(t) {
                        this.loop = t
                    }, th.prototype.setVolume = function(t, e) {
                        e && this.name !== e || this.audioController.setVolume(t)
                    }, th.prototype.getVolume = function() {
                        return this.audioController.getVolume()
                    }, th.prototype.mute = function(t) {
                        t && this.name !== t || this.audioController.mute()
                    }, th.prototype.unmute = function(t) {
                        t && this.name !== t || this.audioController.unmute()
                    }, th.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                    }, th.prototype.getPath = function() {
                        return this.path
                    }, th.prototype.getAssetsPath = function(t) {
                        var e = "";
                        if (t.e) e = t.p;
                        else if (this.assetsPath) {
                            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                        } else e = this.path + (t.u ? t.u : "") + t.p;
                        return e
                    }, th.prototype.getAssetData = function(t) {
                        for (var e = 0, i = this.assets.length; e < i;) {
                            if (t === this.assets[e].id) return this.assets[e];
                            e += 1
                        }
                        return null
                    }, th.prototype.hide = function() {
                        this.renderer.hide()
                    }, th.prototype.show = function() {
                        this.renderer.show()
                    }, th.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate
                    }, th.prototype.updateDocumentData = function(t, e, i) {
                        try {
                            this.renderer.getElementByPath(t).updateDocumentData(e, i)
                        } catch {}
                    }, th.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                            case "enterFrame":
                                this.triggerEvent(t, new T(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "drawnFrame":
                                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new E(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new F(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new I(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new L(t, this));
                                break;
                            default:
                                this.triggerEvent(t)
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new T(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new E(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new F(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new I(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new L(t, this))
                    }, th.prototype.triggerRenderFrameError = function(t) {
                        var e = new V(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    }, th.prototype.triggerConfigError = function(t) {
                        var e = new R(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    };
                    var tl = function() {
                            var t = {},
                                e = [],
                                i = 0,
                                s = 0,
                                a = 0,
                                r = !0,
                                n = !1;

                            function o(t) {
                                for (var i = 0, a = t.target; i < s;) e[i].animation === a && (e.splice(i, 1), i -= 1, s -= 1, a.isPaused || p()), i += 1
                            }

                            function h(t, i) {
                                if (!t) return null;
                                for (var a = 0; a < s;) {
                                    if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                                    a += 1
                                }
                                var r = new th;
                                return f(r, t), r.setData(t, i), r
                            }

                            function l() {
                                a += 1, c()
                            }

                            function p() {
                                a -= 1
                            }

                            function f(t, i) {
                                t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                    elem: i,
                                    animation: t
                                }), s += 1
                            }

                            function d(t) {
                                var o, h = t - i;
                                for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h);
                                i = t, a && !n ? window.requestAnimationFrame(d) : r = !0
                            }

                            function m(t) {
                                i = t, window.requestAnimationFrame(d)
                            }

                            function c() {
                                !n && a && r && (window.requestAnimationFrame(m), r = !1)
                            }
                            return t.registerAnimation = h, t.loadAnimation = function(t) {
                                var e = new th;
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
                                for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), h(a[s], t);
                                if (e && 0 === r) {
                                    i || (i = "svg");
                                    var n = document.getElementsByTagName("body")[0];
                                    n.innerText = "";
                                    var o = u("div");
                                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), h(o, t)
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
                        tp = function() {
                            var t = {};
                            t.getBezierEasing = function(t, i, s, a, n) {
                                var o = n || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                                if (e[o]) return e[o];
                                var h = new r([t, i, s, a]);
                                return e[o] = h, h
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
                                    for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, o = 1; 10 !== o && r[o] <= t; ++o) n += .1;
                                    var h = n + (t - r[--o]) / (r[o + 1] - r[o]) * .1,
                                        l = a(h, e, i);
                                    return l >= .001 ? function(t, e, i, r) {
                                        for (var n = 0; n < 4; ++n) {
                                            var o = a(e, i, r);
                                            if (0 === o) break;
                                            var h = s(e, i, r) - t;
                                            e -= h / o
                                        }
                                        return e
                                    }(t, h, e, i) : 0 === l ? h : function(t, e, i, a, r) {
                                        var n, o, h = 0;
                                        do(n = s(o = e + (i - e) / 2, a, r) - t) > 0 ? i = o : e = o; while (Math.abs(n) > 1e-7 && ++h < 10);
                                        return o
                                    }(t, n, n + .1, e, i)
                                }
                            }, t
                        }(),
                        tf = function(t) {
                            return t.concat(b(t.length))
                        },
                        td = function(t, e, i) {
                            var s = 0,
                                a = t,
                                r = b(a);
                            return {
                                newElement: function() {
                                    var t;
                                    return s ? (s -= 1, t = r[s]) : t = e(), t
                                },
                                release: function(t) {
                                    s === a && (r = tf(r), a *= 2), i && i(t), r[s] = t, s += 1
                                }
                            }
                        },
                        tm = td(8, function() {
                            return {
                                addedLength: 0,
                                percents: v("float32", Z()),
                                lengths: v("float32", Z())
                            }
                        }),
                        tc = td(8, function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }, function(t) {
                            var e, i = t.lengths.length;
                            for (e = 0; e < i; e += 1) tm.release(t.lengths[e]);
                            t.lengths.length = 0
                        }),
                        tu = function() {
                            var t, e = Math;

                            function i(t, e, i, s, a, r) {
                                var n = t * s + e * a + i * r - a * s - r * t - i * e;
                                return n > -.001 && n < .001
                            }
                            var s = function(t, e, i, s) {
                                var a, r, n, o, h, l, p = Z(),
                                    f = 0,
                                    d = [],
                                    m = [],
                                    c = tm.newElement();
                                for (n = i.length, a = 0; a < p; a += 1) {
                                    for (h = a / (p - 1), l = 0, r = 0; r < n; r += 1) o = S(1 - h, 3) * t[r] + 3 * S(1 - h, 2) * h * i[r] + 3 * (1 - h) * S(h, 2) * s[r] + S(h, 3) * e[r], d[r] = o, null !== m[r] && (l += S(d[r] - m[r], 2)), m[r] = d[r];
                                    l && (f += l = w(l)), c.percents[a] = h, c.lengths[a] = f
                                }
                                return c.addedLength = f, c
                            };

                            function a(t) {
                                this.segmentLength = 0, this.points = Array(t)
                            }

                            function r(t, e) {
                                this.partialLength = t, this.point = e
                            }
                            var n = (t = {}, function(e, s, n, o) {
                                var h = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                                if (!t[h]) {
                                    var l, p, f, d, m, c, u, g = Z(),
                                        y = 0,
                                        v = null;
                                    2 === e.length && (e[0] !== s[0] || e[1] !== s[1]) && i(e[0], e[1], s[0], s[1], e[0] + n[0], e[1] + n[1]) && i(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) && (g = 2);
                                    var _ = new a(g);
                                    for (f = n.length, l = 0; l < g; l += 1) {
                                        for (u = b(f), m = l / (g - 1), c = 0, p = 0; p < f; p += 1) d = S(1 - m, 3) * e[p] + 3 * S(1 - m, 2) * m * (e[p] + n[p]) + 3 * (1 - m) * S(m, 2) * (s[p] + o[p]) + S(m, 3) * s[p], u[p] = d, null !== v && (c += S(u[p] - v[p], 2));
                                        y += c = w(c), _.points[l] = new r(c, u), v = u
                                    }
                                    _.segmentLength = y, t[h] = _
                                }
                                return t[h]
                            });

                            function o(t, e) {
                                var i = e.percents,
                                    s = e.lengths,
                                    a = i.length,
                                    r = x((a - 1) * t),
                                    n = t * e.addedLength,
                                    o = 0;
                                if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                                for (var h = s[r] > n ? -1 : 1, l = !0; l;)
                                    if (s[r] <= n && s[r + 1] > n ? (o = (n - s[r]) / (s[r + 1] - s[r]), l = !1) : r += h, r < 0 || r >= a - 1) {
                                        if (r === a - 1) return i[r];
                                        l = !1
                                    } return i[r] + (i[r + 1] - i[r]) * o
                            }
                            var h = v("float32", 8);
                            return {
                                getSegmentsLength: function(t) {
                                    var e, i = tc.newElement(),
                                        a = t.c,
                                        r = t.v,
                                        n = t.o,
                                        o = t.i,
                                        h = t._length,
                                        l = i.lengths,
                                        p = 0;
                                    for (e = 0; e < h - 1; e += 1) l[e] = s(r[e], r[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                                    return a && h && (l[e] = s(r[e], r[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
                                },
                                getNewSegment: function(t, i, s, a, r, n, l) {
                                    r < 0 ? r = 0 : r > 1 && (r = 1);
                                    var p, f = o(r, l),
                                        d = o(n = n > 1 ? 1 : n, l),
                                        m = t.length,
                                        c = 1 - f,
                                        u = 1 - d,
                                        g = c * c * c,
                                        y = f * c * c * 3,
                                        v = f * f * c * 3,
                                        b = f * f * f,
                                        _ = c * c * u,
                                        k = f * c * u + c * f * u + c * c * d,
                                        P = f * f * u + c * f * d + f * c * d,
                                        A = f * f * d,
                                        S = c * u * u,
                                        w = f * u * u + c * d * u + c * u * d,
                                        x = f * d * u + c * d * d + f * u * d,
                                        D = f * d * d,
                                        C = u * u * u,
                                        M = d * u * u + u * d * u + u * u * d,
                                        T = d * d * u + u * d * d + d * u * d,
                                        F = d * d * d;
                                    for (p = 0; p < m; p += 1) h[4 * p] = e.round((g * t[p] + y * s[p] + v * a[p] + b * i[p]) * 1e3) / 1e3, h[4 * p + 1] = e.round((_ * t[p] + k * s[p] + P * a[p] + A * i[p]) * 1e3) / 1e3, h[4 * p + 2] = e.round((S * t[p] + w * s[p] + x * a[p] + D * i[p]) * 1e3) / 1e3, h[4 * p + 3] = e.round((C * t[p] + M * s[p] + T * a[p] + F * i[p]) * 1e3) / 1e3;
                                    return h
                                },
                                getPointInSegment: function(t, i, s, a, r, n) {
                                    var h = o(r, n),
                                        l = 1 - h;
                                    return [e.round((l * l * l * t[0] + (h * l * l + l * h * l + l * l * h) * s[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * i[0]) * 1e3) / 1e3, e.round((l * l * l * t[1] + (h * l * l + l * h * l + l * l * h) * s[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * i[1]) * 1e3) / 1e3]
                                },
                                buildBezierData: n,
                                pointOnLine2D: i,
                                pointOnLine3D: function(t, s, a, r, n, o, h, l, p) {
                                    if (0 === a && 0 === o && 0 === p) return i(t, s, r, n, h, l);
                                    var f, d = e.sqrt(e.pow(r - t, 2) + e.pow(n - s, 2) + e.pow(o - a, 2)),
                                        m = e.sqrt(e.pow(h - t, 2) + e.pow(l - s, 2) + e.pow(p - a, 2)),
                                        c = e.sqrt(e.pow(h - r, 2) + e.pow(l - n, 2) + e.pow(p - o, 2));
                                    return (f = d > m ? d > c ? d - m - c : c - m - d : c > m ? c - m - d : m - d - c) > -1e-4 && f < 1e-4
                                }
                            }
                        }(),
                        tg = Math.abs;

                    function ty(t, e) {
                        var i, s, a, r, n, o, h, l, p, f, d, m, c, u, g, y, b, _, k, P, A, S, w, x, D, C, T, F, E, I, L, V, R = this.offsetTime;
                        "multidimensional" === this.propType && (V = v("float32", this.pv.length));
                        for (var z, N, O, B = e.lastIndex, q = B, j = this.keyframes.length - 1, W = !0; W;) {
                            if (z = this.keyframes[q], N = this.keyframes[q + 1], q === j - 1 && t >= N.t - R) {
                                z.h && (z = N), B = 0;
                                break
                            }
                            if (N.t - R > t) {
                                B = q;
                                break
                            }
                            q < j - 1 ? q += 1 : (B = 0, W = !1)
                        }
                        O = this.keyframesMetadata[q] || {};
                        var X, Y, H, G, K, J, U, Z = N.t - R,
                            Q = z.t - R;
                        if (z.to) {
                            O.bezierData || (O.bezierData = tu.buildBezierData(z.s, N.s || z.e, z.to, z.ti));
                            var $ = O.bezierData;
                            if (t >= Z || t < Q) {
                                var tt = t >= Z ? $.points.length - 1 : 0;
                                for (Y = $.points[tt].point.length, X = 0; X < Y; X += 1) V[X] = $.points[tt].point[X]
                            } else {
                                O.__fnct ? J = O.__fnct : O.__fnct = J = tp.getBezierEasing(z.o.x, z.o.y, z.i.x, z.i.y, z.n).get, H = J((t - Q) / (Z - Q));
                                var te, ti = $.segmentLength * H,
                                    ts = e.lastFrame < t && e._lastKeyframeIndex === q ? e._lastAddedLength : 0;
                                for (K = e.lastFrame < t && e._lastKeyframeIndex === q ? e._lastPoint : 0, W = !0, G = $.points.length; W;) {
                                    if (ts += $.points[K].partialLength, 0 === ti || 0 === H || K === $.points.length - 1) {
                                        for (Y = $.points[K].point.length, X = 0; X < Y; X += 1) V[X] = $.points[K].point[X];
                                        break
                                    }
                                    if (ti >= ts && ti < ts + $.points[K + 1].partialLength) {
                                        for (te = (ti - ts) / $.points[K + 1].partialLength, Y = $.points[K].point.length, X = 0; X < Y; X += 1) V[X] = $.points[K].point[X] + ($.points[K + 1].point[X] - $.points[K].point[X]) * te;
                                        break
                                    }
                                    K < G - 1 ? K += 1 : W = !1
                                }
                                e._lastPoint = K, e._lastAddedLength = ts - $.points[K].partialLength, e._lastKeyframeIndex = q
                            }
                        } else if (j = z.s.length, U = N.s || z.e, this.sh && 1 !== z.h) {
                            t >= Z ? (V[0] = U[0], V[1] = U[1], V[2] = U[2]) : t <= Q ? (V[0] = z.s[0], V[1] = z.s[1], V[2] = z.s[2]) : (_ = V, P = (k = (i = tv(z.s), s = tv(U), a = (t - Q) / (Z - Q), p = [], f = i[0], d = i[1], m = i[2], c = i[3], u = s[0], g = s[1], y = s[2], (n = f * u + d * g + m * y + c * (b = s[3])) < 0 && (n = -n, u = -u, g = -g, y = -y, b = -b), 1 - n > 1e-6 ? (o = Math.sin(r = Math.acos(n)), h = Math.sin((1 - a) * r) / o, l = Math.sin(a * r) / o) : (h = 1 - a, l = a), p[0] = h * f + l * u, p[1] = h * d + l * g, p[2] = h * m + l * y, p[3] = h * c + l * b, p))[0], A = k[1], S = k[2], x = Math.atan2(2 * A * (w = k[3]) - 2 * P * S, 1 - 2 * A * A - 2 * S * S), D = Math.asin(2 * P * A + 2 * S * w), C = Math.atan2(2 * P * w - 2 * A * S, 1 - 2 * P * P - 2 * S * S), _[0] = x / M, _[1] = D / M, _[2] = C / M)
                        } else
                            for (q = 0; q < j; q += 1) 1 !== z.h && (t >= Z ? H = 1 : t < Q ? H = 0 : (z.o.x.constructor === Array ? (O.__fnct || (O.__fnct = []), O.__fnct[q] ? J = O.__fnct[q] : (T = void 0 === z.o.x[q] ? z.o.x[0] : z.o.x[q], F = void 0 === z.o.y[q] ? z.o.y[0] : z.o.y[q], E = void 0 === z.i.x[q] ? z.i.x[0] : z.i.x[q], I = void 0 === z.i.y[q] ? z.i.y[0] : z.i.y[q], J = tp.getBezierEasing(T, F, E, I).get, O.__fnct[q] = J)) : O.__fnct ? J = O.__fnct : (T = z.o.x, F = z.o.y, E = z.i.x, I = z.i.y, J = tp.getBezierEasing(T, F, E, I).get, z.keyframeMetadata = J), H = J((t - Q) / (Z - Q)))), U = N.s || z.e, L = 1 === z.h ? z.s[q] : z.s[q] + (U[q] - z.s[q]) * H, "multidimensional" === this.propType ? V[q] = L : V = L;
                        return e.lastIndex = B, V
                    }

                    function tv(t) {
                        var e = t[0] * M,
                            i = t[1] * M,
                            s = t[2] * M,
                            a = Math.cos(e / 2),
                            r = Math.cos(i / 2),
                            n = Math.cos(s / 2),
                            o = Math.sin(e / 2),
                            h = Math.sin(i / 2),
                            l = Math.sin(s / 2);
                        return [o * h * n + a * r * l, o * r * n + a * h * l, a * h * n - o * r * l, a * r * n - o * h * l]
                    }

                    function tb() {
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

                    function t_(t) {
                        var e;
                        if ("unidimensional" === this.propType) e = t * this.mult, tg(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                        else
                            for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, tg(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
                    }

                    function tk() {
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

                    function tA(t, e, i, s) {
                        this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = tk, this.setVValue = t_, this.addEffect = tP
                    }

                    function tS(t, e, i, s) {
                        this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var a, r = e.k.length;
                        for (this.v = v("float32", r), this.pv = v("float32", r), this.vel = v("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = tk, this.setVValue = t_, this.addEffect = tP
                    }

                    function tw(t, e, i, s) {
                        this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = -999999, this.pv = -999999, this._isFirstFrame = !0, this.getValue = tk, this.setVValue = t_, this.interpolateValue = ty, this.effectsSequence = [tb.bind(this)], this.addEffect = tP
                    }

                    function tx(t, e, i, s) {
                        this.propType = "multidimensional";
                        var a, r, n, o, h, l = e.k.length;
                        for (a = 0; a < l - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, h = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && tu.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + o[0], r[1] + o[1]) && tu.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && tu.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + o[0], r[1] + o[1], r[2] + o[2]) && tu.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === r.length || r[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[a].to = null, e.k[a].ti = null));
                        this.effectsSequence = [tb.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = tk, this.setVValue = t_, this.interpolateValue = ty, this.frameId = -1;
                        var p = e.k[0].s.length;
                        for (this.v = v("float32", p), this.pv = v("float32", p), a = 0; a < p; a += 1) this.v[a] = -999999, this.pv[a] = -999999;
                        this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: v("float32", p)
                        }, this.addEffect = tP
                    }
                    var tD = {
                        getProp: function(t, e, i, s, a) {
                            var r;
                            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                                if ("number" == typeof e.k[0]) r = new tS(t, e, s, a);
                                else switch (i) {
                                    case 0:
                                        r = new tw(t, e, s, a);
                                        break;
                                    case 1:
                                        r = new tx(t, e, s, a)
                                } else r = new tA(t, e, s, a);
                            return r.effectsSequence.length && a.addDynamicProperty(r), r
                        }
                    };

                    function tC() {}
                    tC.prototype = {
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
                    var tM = td(8, function() {
                        return v("float32", 2)
                    });

                    function tT() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = b(this._maxLength), this.o = b(this._maxLength), this.i = b(this._maxLength)
                    }
                    tT.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var i = 0; i < e;) this.v[i] = tM.newElement(), this.o[i] = tM.newElement(), this.i[i] = tM.newElement(), i += 1
                    }, tT.prototype.setLength = function(t) {
                        for (; this._maxLength < t;) this.doubleArrayLength();
                        this._length = t
                    }, tT.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(b(this._maxLength)), this.i = this.i.concat(b(this._maxLength)), this.o = this.o.concat(b(this._maxLength)), this._maxLength *= 2
                    }, tT.prototype.setXYAt = function(t, e, i, s, a) {
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
                        r[s] && (!r[s] || a) || (r[s] = tM.newElement()), r[s][0] = t, r[s][1] = e
                    }, tT.prototype.setTripleAt = function(t, e, i, s, a, r, n, o) {
                        this.setXYAt(t, e, "v", n, o), this.setXYAt(i, s, "o", n, o), this.setXYAt(a, r, "i", n, o)
                    }, tT.prototype.reverse = function() {
                        var t = new tT;
                        t.setPathData(this.c, this._length);
                        var e = this.v,
                            i = this.o,
                            s = this.i,
                            a = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                        var r, n = this._length - 1,
                            o = this._length;
                        for (r = a; r < o; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), n -= 1;
                        return t
                    }, tT.prototype.length = function() {
                        return this._length
                    };
                    var tF = ((i = td(4, function() {
                        return new tT
                    }, function(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) tM.release(t.v[e]), tM.release(t.i[e]), tM.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    })).clone = function(t) {
                        var e, s = i.newElement(),
                            a = void 0 === t._length ? t.v.length : t._length;
                        for (s.setLength(a), s.c = t.c, e = 0; e < a; e += 1) s.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return s
                    }, i);

                    function tE() {
                        this._length = 0, this._maxLength = 4, this.shapes = b(this._maxLength)
                    }
                    tE.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(b(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                    }, tE.prototype.releaseShapes = function() {
                        var t;
                        for (t = 0; t < this._length; t += 1) tF.release(this.shapes[t]);
                        this._length = 0
                    };
                    var tI = (s = 0, a = 4, r = b(4), {
                            newShapeCollection: function() {
                                var t;
                                return s ? (s -= 1, t = r[s]) : t = new tE, t
                            },
                            release: function(t) {
                                var e, i = t._length;
                                for (e = 0; e < i; e += 1) tF.release(t.shapes[e]);
                                t._length = 0, s === a && (r = tf(r), a *= 2), r[s] = t, s += 1
                            }
                        }),
                        tL = function() {
                            function t(t, e, i) {
                                var s, a, r, n, o, h, l, p, f, d = i.lastIndex,
                                    m = this.keyframes;
                                if (t < m[0].t - this.offsetTime) s = m[0].s[0], r = !0, d = 0;
                                else if (t >= m[m.length - 1].t - this.offsetTime) s = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], r = !0;
                                else {
                                    for (var c, u, g, y, v = d, b = m.length - 1, _ = !0; _ && (u = m[v], !((g = m[v + 1]).t - this.offsetTime > t));) v < b - 1 ? v += 1 : _ = !1;
                                    y = this.keyframesMetadata[v] || {}, r = 1 === u.h, d = v, r || (t >= g.t - this.offsetTime ? p = 1 : t < u.t - this.offsetTime ? p = 0 : (y.__fnct ? c = y.__fnct : y.__fnct = c = tp.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, p = c((t - (u.t - this.offsetTime)) / (g.t - this.offsetTime - (u.t - this.offsetTime)))), a = g.s ? g.s[0] : u.e[0]), s = u.s[0]
                                }
                                for (h = e._length, l = s.i[0].length, i.lastIndex = d, n = 0; n < h; n += 1)
                                    for (o = 0; o < l; o += 1) f = r ? s.i[n][o] : s.i[n][o] + (a.i[n][o] - s.i[n][o]) * p, e.i[n][o] = f, f = r ? s.o[n][o] : s.o[n][o] + (a.o[n][o] - s.o[n][o]) * p, e.o[n][o] = f, f = r ? s.v[n][o] : s.v[n][o] + (a.v[n][o] - s.v[n][o]) * p, e.v[n][o] = f
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
                                })(this.v, t) || (this.v = tF.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
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
                                this.v = tF.clone(a), this.pv = tF.clone(this.v), this.localShapeCollection = tI.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                            }

                            function n(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function o(t, s, a) {
                                this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                var r = this.keyframes[0].s[0].i.length;
                                this.v = tF.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, r), this.pv = tF.clone(this.v), this.localShapeCollection = tI.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                                    lastFrame: -999999,
                                    lastIndex: 0
                                }, this.effectsSequence = [e.bind(this)]
                            }
                            r.prototype.interpolateShape = t, r.prototype.getValue = a, r.prototype.setVValue = s, r.prototype.addEffect = n, o.prototype.getValue = a, o.prototype.interpolateShape = t, o.prototype.setVValue = s, o.prototype.addEffect = n;
                            var h = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = tI.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = tD.getProp(t, e.p, 1, 0, this), this.s = tD.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
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
                                    }, g([tC], t), t
                                }(),
                                l = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = tD.getProp(t, e.ir, 0, 0, this), this.is = tD.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = tD.getProp(t, e.pt, 0, 0, this), this.p = tD.getProp(t, e.p, 1, 0, this), this.r = tD.getProp(t, e.r, 0, M, this), this.or = tD.getProp(t, e.or, 0, 0, this), this.os = tD.getProp(t, e.os, 0, .01, this), this.localShapeCollection = tI.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
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
                                                o = this.or.v,
                                                h = this.ir.v,
                                                l = this.os.v,
                                                p = this.is.v,
                                                f = 2 * Math.PI * o / (2 * a),
                                                d = 2 * Math.PI * h / (2 * a),
                                                m = -Math.PI / 2;
                                            m += this.r.v;
                                            var c = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, t = 0; t < a; t += 1) {
                                                e = n ? o : h, i = n ? l : p, s = n ? f : d;
                                                var u = e * Math.cos(m),
                                                    g = e * Math.sin(m),
                                                    y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                    v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                                u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * s * i * c, g - v * s * i * c, u + y * s * i * c, g + v * s * i * c, t, !0), n = !n, m += r * c
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var t, e = Math.floor(this.pt.v),
                                                i = 2 * Math.PI / e,
                                                s = this.or.v,
                                                a = this.os.v,
                                                r = 2 * Math.PI * s / (4 * e),
                                                n = -(.5 * Math.PI),
                                                o = 3 === this.data.d ? -1 : 1;
                                            for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                var h = s * Math.cos(n),
                                                    l = s * Math.sin(n),
                                                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                    f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * r * a * o, l - f * r * a * o, h + p * r * a * o, l + f * r * a * o, t, !0), n += i * o
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, g([tC], t), t
                                }(),
                                p = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.c = !0, this.localShapeCollection = tI.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = tD.getProp(t, e.p, 1, 0, this), this.s = tD.getProp(t, e.s, 1, 0, this), this.r = tD.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return t.prototype = {
                                        convertRectToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                i = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                a = D(i, s, this.r.v),
                                                r = .44810000000000005 * a;
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: i
                                    }, g([tC], t), t
                                }(),
                                f = {};
                            return f.getShapeProp = function(t, e, i) {
                                var s;
                                return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new r(t, e, i) : 5 === i ? s = new p(t, e) : 6 === i ? s = new h(t, e) : 7 === i && (s = new l(t, e)), s.k && t.addDynamicProperty(s), s
                            }, f.getConstructorFunction = function() {
                                return r
                            }, f.getKeyframedConstructorFunction = function() {
                                return o
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

                            function o(i) {
                                if (0 === i) return this;
                                var s = t(i),
                                    a = e(i);
                                return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1)
                            }

                            function h(i) {
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

                            function d(t, e, i) {
                                return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                            }

                            function m(t, e, i, s, a, r, n, o, h, l, p, f, d, m, c, u) {
                                return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = d, this.props[13] = m, this.props[14] = c, this.props[15] = u, this
                            }

                            function c(t, e, i) {
                                return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                            }

                            function u(t, e, i, s, a, r, n, o, h, l, p, f, d, m, c, u) {
                                var g = this.props;
                                if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * d, g[13] = g[13] * r + g[15] * m, g[14] = g[14] * p + g[15] * c, g[15] *= u, this._identityCalculated = !1, this;
                                var y = g[0],
                                    v = g[1],
                                    b = g[2],
                                    _ = g[3],
                                    k = g[4],
                                    P = g[5],
                                    A = g[6],
                                    S = g[7],
                                    w = g[8],
                                    x = g[9],
                                    D = g[10],
                                    C = g[11],
                                    M = g[12],
                                    T = g[13],
                                    F = g[14],
                                    E = g[15];
                                return g[0] = y * t + v * a + b * h + _ * d, g[1] = y * e + v * r + b * l + _ * m, g[2] = y * i + v * n + b * p + _ * c, g[3] = y * s + v * o + b * f + _ * u, g[4] = k * t + P * a + A * h + S * d, g[5] = k * e + P * r + A * l + S * m, g[6] = k * i + P * n + A * p + S * c, g[7] = k * s + P * o + A * f + S * u, g[8] = w * t + x * a + D * h + C * d, g[9] = w * e + x * r + D * l + C * m, g[10] = w * i + x * n + D * p + C * c, g[11] = w * s + x * o + D * f + C * u, g[12] = M * t + T * a + F * h + E * d, g[13] = M * e + T * r + F * l + E * m, g[14] = M * i + T * n + F * p + E * c, g[15] = M * s + T * o + F * f + E * u, this._identityCalculated = !1, this
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

                            function k(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                            }

                            function P(t, e, i) {
                                return {
                                    x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                    y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                    z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                                }
                            }

                            function A(t, e, i) {
                                return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                            }

                            function S(t, e, i) {
                                return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                            }

                            function w(t, e, i) {
                                return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }

                            function x() {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    e = this.props[5] / t,
                                    i = -this.props[1] / t,
                                    s = -this.props[4] / t,
                                    a = this.props[0] / t,
                                    r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                    o = new tV;
                                return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = a, o.props[12] = r, o.props[13] = n, o
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

                            function M(t, e, i) {
                                var s = v("float32", 6);
                                if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                                else {
                                    var a = this.props[0],
                                        r = this.props[1],
                                        n = this.props[4],
                                        o = this.props[5],
                                        h = this.props[12],
                                        l = this.props[13];
                                    s[0] = t[0] * a + t[1] * n + h, s[1] = t[0] * r + t[1] * o + l, s[2] = e[0] * a + e[1] * n + h, s[3] = e[0] * r + e[1] * o + l, s[4] = i[0] * a + i[1] * n + h, s[5] = i[0] * r + i[1] * o + l
                                }
                                return s
                            }

                            function T(t, e, i) {
                                return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                            }

                            function F(t, e) {
                                if (this.isIdentity()) return t + "," + e;
                                var i = this.props;
                                return Math.round((t * i[0] + e * i[4] + i[12]) * 100) / 100 + "," + Math.round((t * i[1] + e * i[5] + i[13]) * 100) / 100
                            }

                            function E() {
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
                                this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = d, this.setTransform = m, this.translate = c, this.transform = u, this.multiply = g, this.applyToPoint = P, this.applyToX = A, this.applyToY = S, this.applyToZ = w, this.applyToPointArray = T, this.applyToTriplePoints = M, this.applyToPointStringified = F, this.toCSS = E, this.to2dCSS = L, this.clone = _, this.cloneFromProps = k, this.equals = b, this.inversePoints = C, this.inversePoint = D, this.getInverseMatrix = x, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = v("float32", 16), this.reset()
                            }
                        }();

                    function tR(t) {
                        return (tR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var tz = {};

                    function tN() {
                        tl.searchAnimations()
                    }
                    tz.play = tl.play, tz.pause = tl.pause, tz.setLocationHref = function(t) {
                        m(t)
                    }, tz.togglePause = tl.togglePause, tz.setSpeed = tl.setSpeed, tz.setDirection = tl.setDirection, tz.stop = tl.stop, tz.searchAnimations = tN, tz.registerAnimation = tl.registerAnimation, tz.loadAnimation = function(t) {
                        return tl.loadAnimation(t)
                    }, tz.setSubframeRendering = function(t) {
                        G(t)
                    }, tz.resize = tl.resize, tz.goToAndStop = tl.goToAndStop, tz.destroy = tl.destroy, tz.setQuality = function(t) {
                        if ("string" == typeof t) switch (t) {
                            case "high":
                                U(200);
                                break;
                            default:
                            case "medium":
                                U(50);
                                break;
                            case "low":
                                U(10)
                        } else !isNaN(t) && t > 1 && U(t)
                    }, tz.inBrowser = function() {
                        return "u" > typeof navigator
                    }, tz.installPlugin = function(t, e) {
                        "expressions" === t && K(e)
                    }, tz.freeze = tl.freeze, tz.unfreeze = tl.unfreeze, tz.setVolume = tl.setVolume, tz.mute = tl.mute, tz.unmute = tl.unmute, tz.getRegisteredAnimations = tl.getRegisteredAnimations, tz.useWebWorker = function(t) {
                        d = !!t
                    }, tz.setIDPrefix = function(t) {
                        Q(t)
                    }, tz.__getFactory = function(t) {
                        switch (t) {
                            case "propertyFactory":
                                return tD;
                            case "shapePropertyFactory":
                                return tL;
                            case "matrix":
                                return tV;
                            default:
                                return null
                        }
                    }, tz.version = "5.12.2";
                    var tO = "",
                        tB = document.getElementsByTagName("script"),
                        tq = tB.length - 1,
                        tj = tB[tq] || {
                            src: ""
                        };
                    tO = tj.src ? tj.src.replace(/^[^\?]+\??/, "") : "",
                        function(t) {
                            for (var e = tO.split("&"), i = 0; i < e.length; i += 1) {
                                var s = e[i].split("=");
                                if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
                            }
                        }("renderer");
                    var tW = setInterval(function() {
                        "complete" === document.readyState && (clearInterval(tW), tN())
                    }, 100);
                    try {
                        (typeof t > "u" ? "undefined" : tR(t)) === "object" && "u" > typeof e || "function" == typeof define && define.amd || (window.bodymovin = tz)
                    } catch {}
                    var tX = (o = {}, (n = {}).registerModifier = function(t, e) {
                        o[t] || (o[t] = e)
                    }, n.getModifier = function(t, e, i) {
                        return new o[t](e, i)
                    }, n);

                    function tY() {}

                    function tH() {}

                    function tG() {}
                    tY.prototype.initModifierProperties = function() {}, tY.prototype.addShapeToModifier = function() {}, tY.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: tI.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                        }
                    }, tY.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = -999999, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tY.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, g([tC], tY), g([tY], tH), tH.prototype.initModifierProperties = function(t, e) {
                        this.s = tD.getProp(t, e.s, 0, .01, this), this.e = tD.getProp(t, e.e, 0, .01, this), this.o = tD.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, tH.prototype.addShapeToModifier = function(t) {
                        t.pathsData = []
                    }, tH.prototype.calculateShapeEdges = function(t, e, i, s, a) {
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
                        var o, h, l = [],
                            p = n.length;
                        for (o = 0; o < p; o += 1)(h = n[o]).e * a < s || h.s * a > s + i || (r = h.s * a <= s ? 0 : (h.s * a - s) / i, l.push([r, h.e * a >= s + i ? 1 : (h.e * a - s) / i]));
                        return l.length || l.push([0, 0]), l
                    }, tH.prototype.releasePathsData = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) tc.release(t[e]);
                        return t.length = 0, t
                    }, tH.prototype.processShapes = function(t) {
                        if (this._mdf || t) {
                            var e = this.o.v % 360 / 360;
                            if (e < 0 && (e += 1), (s = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (a = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
                                var i = s;
                                s = a, a = i
                            }
                            s = 1e-4 * Math.round(1e4 * s), a = 1e-4 * Math.round(1e4 * a), this.sValue = s, this.eValue = a
                        } else s = this.sValue, a = this.eValue;
                        var s, a, r, n, o, h, l, p, f, d = this.shapes.length,
                            m = 0;
                        if (a === s)
                            for (n = 0; n < d; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                        else if (1 === a && 0 === s || 0 === a && 1 === s) {
                            if (this._mdf)
                                for (n = 0; n < d; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                        } else {
                            var c, u, g = [];
                            for (n = 0; n < d; n += 1)
                                if ((c = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                    if (h = (r = c.shape.paths)._length, f = 0, !c.shape._mdf && c.pathsData.length) f = c.totalShapeLength;
                                    else {
                                        for (l = this.releasePathsData(c.pathsData), o = 0; o < h; o += 1) p = tu.getSegmentsLength(r.shapes[o]), l.push(p), f += p.totalLength;
                                        c.totalShapeLength = f, c.pathsData = l
                                    }
                                    m += f, c.shape._mdf = !0
                                } else c.shape.paths = c.localShapeCollection;
                            var y, v = s,
                                b = a,
                                _ = 0;
                            for (n = d - 1; n >= 0; n -= 1)
                                if ((c = this.shapes[n]).shape._mdf) {
                                    for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && d > 1 ? (y = this.calculateShapeEdges(s, a, c.totalShapeLength, _, m), _ += c.totalShapeLength) : y = [
                                            [v, b]
                                        ], h = y.length, o = 0; o < h; o += 1) {
                                        v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
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
                                        var k = this.addShapes(c, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1)
                                                if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                                    var P = k.pop();
                                                    this.addPaths(k, u), k = this.addShapes(c, g[1], P)
                                                } else this.addPaths(k, u), k = this.addShapes(c, g[1]);
                                            this.addPaths(k, u)
                                        }
                                    }
                                    c.shape.paths = u
                                }
                        }
                    }, tH.prototype.addPaths = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) e.addShape(t[i])
                    }, tH.prototype.addSegment = function(t, e, i, s, a, r, n) {
                        a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1)
                    }, tH.prototype.addSegmentFromArray = function(t, e, i, s) {
                        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                    }, tH.prototype.addShapes = function(t, e, i) {
                        var s, a, r, n, o, h, l, p, f = t.pathsData,
                            d = t.shape.paths.shapes,
                            m = t.shape.paths._length,
                            c = 0,
                            u = [],
                            g = !0;
                        for (i ? (o = i._length, p = i._length) : (i = tF.newElement(), o = 0, p = 0), u.push(i), s = 0; s < m; s += 1) {
                            for (h = f[s].lengths, i.c = d[s].c, r = d[s].c ? h.length : h.length + 1, a = 1; a < r; a += 1)
                                if (c + (n = h[a - 1]).addedLength < e.s) c += n.addedLength, i.c = !1;
                                else if (c > e.e) {
                                i.c = !1;
                                break
                            } else e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[a], d[s].v[a], i, o, g), g = !1) : (l = tu.getNewSegment(d[s].v[a - 1], d[s].v[a], d[s].o[a - 1], d[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), c += n.addedLength, o += 1;
                            if (d[s].c && h.length) {
                                if (n = h[a - 1], c <= e.e) {
                                    var y = h[a - 1].addedLength;
                                    e.s <= c && e.e >= c + y ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[0], d[s].v[0], i, o, g), g = !1) : (l = tu.getNewSegment(d[s].v[a - 1], d[s].v[0], d[s].o[a - 1], d[s].i[0], (e.s - c) / y, (e.e - c) / y, h[a - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                                } else i.c = !1;
                                c += n.addedLength, o += 1
                            }
                            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                            s < m - 1 && (i = tF.newElement(), g = !0, u.push(i), o = 0)
                        }
                        return u
                    }, g([tY], tG), tG.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tD.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, tG.prototype.processPath = function(t, e) {
                        var i, s, a, r, n, o, h = e / 100,
                            l = [0, 0],
                            p = t._length,
                            f = 0;
                        for (f = 0; f < p; f += 1) l[0] += t.v[f][0], l[1] += t.v[f][1];
                        l[0] /= p, l[1] /= p;
                        var d = tF.newElement();
                        for (f = 0, d.c = t.c; f < p; f += 1) i = t.v[f][0] + (l[0] - t.v[f][0]) * h, s = t.v[f][1] + (l[1] - t.v[f][1]) * h, a = t.o[f][0] + -((l[0] - t.o[f][0]) * h), r = t.o[f][1] + -((l[1] - t.o[f][1]) * h), n = t.i[f][0] + -((l[0] - t.i[f][0]) * h), o = t.i[f][1] + -((l[1] - t.i[f][1]) * h), d.setTripleAt(i, s, a, r, n, o, f);
                        return d
                    }, tG.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, o = this.shapes.length,
                            h = this.amount.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], h));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var tK = function() {
                        var t = [0, 0];

                        function e(t, e, i) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new tV, this.pre = new tV, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = tD.getProp(t, e.p.x, 0, 0, this), this.py = tD.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = tD.getProp(t, e.p.z, 0, 0, this))) : this.p = tD.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = tD.getProp(t, e.rx, 0, M, this), this.ry = tD.getProp(t, e.ry, 0, M, this), this.rz = tD.getProp(t, e.rz, 0, M, this), e.or.k[0].ti) {
                                    var s, a = e.or.k.length;
                                    for (s = 0; s < a; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                                }
                                this.or = tD.getProp(t, e.or, 1, M, this), this.or.sh = !0
                            } else this.r = tD.getProp(t, e.r || {
                                k: 0
                            }, 0, M, this);
                            e.sk && (this.sk = tD.getProp(t, e.sk, 0, M, this), this.sa = tD.getProp(t, e.sa, 0, M, this)), this.a = tD.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = tD.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = tD.getProp(t, e.o, 0, .01, t) : this.o = {
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
                        }, g([tC], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = tC.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, i, s) {
                                return new e(t, i, s)
                            }
                        }
                    }();

                    function tJ() {}

                    function tU() {}

                    function tZ(t, e) {
                        return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                    }

                    function tQ(t) {
                        return 1e-5 >= Math.abs(t)
                    }

                    function t$(t, e, i) {
                        var s, a;
                        return [(s = t[0], s * (1 - i) + e[0] * i), (a = t[1], a * (1 - i) + e[1] * i)]
                    }

                    function t0(t, e, i, s) {
                        return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
                    }

                    function t1(t) {
                        return new t2(t, t, t, t, !1)
                    }

                    function t2(t, e, i, s, a) {
                        a && et(t, e) && (e = t$(t, s, 1 / 3)), a && et(i, s) && (i = t$(t, s, 2 / 3));
                        var r = t0(t[0], e[0], i[0], s[0]),
                            n = t0(t[1], e[1], i[1], s[1]);
                        this.a = [r[0], n[0]], this.b = [r[1], n[1]], this.c = [r[2], n[2]], this.d = [r[3], n[3]], this.points = [t, e, i, s]
                    }

                    function t3(t, e) {
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
                                var o = t.point(r[n])[e];
                                o < i ? i = o : o > s && (s = o)
                            } return {
                            min: i,
                            max: s
                        }
                    }

                    function t5(t, e, i) {
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

                    function t9(t) {
                        var e = t.bez.split(.5);
                        return [t5(e[0], t.t1, t.t), t5(e[1], t.t, t.t2)]
                    }

                    function t4(t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    }

                    function t6(t, e, i, s) {
                        var a = [t[0], t[1], 1],
                            r = [e[0], e[1], 1],
                            n = [i[0], i[1], 1],
                            o = [s[0], s[1], 1],
                            h = t4(t4(a, r), t4(n, o));
                        return tQ(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
                    }

                    function t8(t, e, i) {
                        return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
                    }

                    function t7(t, e) {
                        return Math.hypot(t[0] - e[0], t[1] - e[1])
                    }

                    function et(t, e) {
                        return tZ(t[0], e[0]) && tZ(t[1], e[1])
                    }

                    function ee() {}

                    function ei(t, e, i, s, a, r, n) {
                        var o = i - Math.PI / 2,
                            h = i + Math.PI / 2,
                            l = e[0] + Math.cos(i) * s * a,
                            p = e[1] - Math.sin(i) * s * a;
                        t.setTripleAt(l, p, l + Math.cos(o) * r, p - Math.sin(o) * r, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
                    }

                    function es(t, e, i, s, a, r, n) {
                        var o, h, l, p, f, d, m, c = (l = 0 === i ? e.length() - 1 : i - 1, p = (i + 1) % e.length(), f = e.v[l], Math.atan2(0, 1) - Math.atan2((o = [(d = e.v[p])[0] - f[0], d[1] - f[1]], m = [Math.cos(h = -(.5 * Math.PI)) * o[0] - Math.sin(h) * o[1], Math.sin(h) * o[0] + Math.cos(h) * o[1]])[1], m[0])),
                            u = e.v[i % e._length],
                            g = e.v[0 === i ? e._length - 1 : i - 1],
                            y = e.v[(i + 1) % e._length],
                            v = 2 === r ? Math.sqrt(Math.pow(u[0] - g[0], 2) + Math.pow(u[1] - g[1], 2)) : 0,
                            b = 2 === r ? Math.sqrt(Math.pow(u[0] - y[0], 2) + Math.pow(u[1] - y[1], 2)) : 0;
                        ei(t, e.v[i % e._length], c, n, s, b / ((a + 1) * 2), v / ((a + 1) * 2))
                    }

                    function ea(t, e, i) {
                        var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                        return [t8(t, s, i), t8(e, s, i)]
                    }

                    function er(t, e) {
                        i = (h = ea(t.points[0], t.points[1], e))[0], s = h[1], a = (h = ea(t.points[1], t.points[2], e))[0], r = h[1], n = (h = ea(t.points[2], t.points[3], e))[0], o = h[1];
                        var i, s, a, r, n, o, h, l = t6(i, s, a, r);
                        null === l && (l = s);
                        var p = t6(n, o, a, r);
                        return null === p && (p = n), new t2(i, l, p, o)
                    }

                    function en(t, e, i, s, a) {
                        var r = e.points[3],
                            n = i.points[0];
                        if (3 === s || et(r, n)) return r;
                        if (2 === s) {
                            var o = -e.tangentAngle(1),
                                h = -i.tangentAngle(0) + Math.PI,
                                l = t6(r, t8(r, o + Math.PI / 2, 100), n, t8(n, o + Math.PI / 2, 100)),
                                p = l ? t7(l, r) : t7(r, n) / 2,
                                f = t8(r, o, 2 * p * .5519);
                            return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = t8(n, h, 2 * p * .5519), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                        }
                        var d = et(r, e.points[2]) ? e.points[0] : e.points[2],
                            m = et(n, i.points[1]) ? i.points[3] : i.points[1],
                            c = t6(d, r, n, m);
                        return c && t7(c, r) < a ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : r
                    }

                    function eo(t, e) {
                        var i = t.intersections(e);
                        return i.length && tZ(i[0][0], 1) && i.shift(), i.length ? i[0] : null
                    }

                    function eh(t, e) {
                        var i = t.slice(),
                            s = e.slice(),
                            a = eo(t[t.length - 1], e[0]);
                        return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], s[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = eo(t[0], e[e.length - 1])) ? [
                            [t[0].split(a[0])[0]],
                            [e[e.length - 1].split(a[1])[1]]
                        ] : [i, s]
                    }

                    function el(t, e) {
                        var i, s, a, r, n = t.inflectionPoints();
                        if (0 === n.length) return [er(t, e)];
                        if (1 === n.length || tZ(n[1], 1)) return i = (a = t.split(n[0]))[0], s = a[1], [er(i, e), er(s, e)];
                        i = (a = t.split(n[0]))[0];
                        var o = (n[1] - n[0]) / (1 - n[0]);
                        return r = (a = a[1].split(o))[0], s = a[1], [er(i, e), er(r, e), er(s, e)]
                    }

                    function ep() {}

                    function ef(t) {
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
                    g([tY], tJ), tJ.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = tD.getProp(t, e.c, 0, null, this), this.o = tD.getProp(t, e.o, 0, null, this), this.tr = tK.getTransformProperty(t, e.tr, this), this.so = tD.getProp(t, e.tr.so, 0, .01, this), this.eo = tD.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new tV, this.rMatrix = new tV, this.sMatrix = new tV, this.tMatrix = new tV, this.matrix = new tV
                    }, tJ.prototype.applyTransforms = function(t, e, i, s, a, r) {
                        var n = r ? -1 : 1,
                            o = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
                            h = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                        t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / o : o, r ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                    }, tJ.prototype.init = function(t, e, i, s) {
                        for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tJ.prototype.resetElements = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                    }, tJ.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e
                    }, tJ.prototype.changeGroupRender = function(t, e) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                    }, tJ.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n = !1;
                        if (this._mdf || t) {
                            var o, h, l, p = Math.ceil(this.c.v);
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
                                if (o = r < p, this._groups[s]._render = o, this.changeGroupRender(this._groups[s].it, o), !o) {
                                    var d = this.elemsData[s].it,
                                        m = d[d.length - 1];
                                    0 !== m.transform.op.v ? (m.transform.op._mdf = !0, m.transform.op.v = 0) : m.transform.op._mdf = !1
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
                                    for ((0 !== s && 1 === a || s !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), h = 0; h < l; h += 1) i[h] = this.matrix.props[h];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), h = 0; h < l; h += 1) i[h] = this.matrix.props[h];
                                _ += 1, r -= 1, s += a
                            }
                        } else
                            for (r = this._currentCopies, s = 0, a = 1; r;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, s += a;
                        return n
                    }, tJ.prototype.addShape = function() {}, g([tY], tU), tU.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = tD.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, tU.prototype.processPath = function(t, e) {
                        var i = tF.newElement();
                        i.c = t.c;
                        var s, a, r, n, o, h, l, p, f, d, m, c, u, g = t._length,
                            y = 0;
                        for (s = 0; s < g; s += 1) a = t.v[s], n = t.o[s], r = t.i[s], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== s && s !== g - 1 || t.c ? (o = 0 === s ? t.v[g - 1] : t.v[s - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, d = p - (p - a[0]) * .5519, m = f - (f - a[1]) * .5519, i.setTripleAt(p, f, d, m, c, u, y), y += 1, o = s === g - 1 ? t.v[0] : t.v[s + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = a[0] + (o[0] - a[0]) * l, f = m = a[1] + (o[1] - a[1]) * l, c = p - (p - a[0]) * .5519, u = f - (f - a[1]) * .5519, i.setTripleAt(p, f, d, m, c, u, y)) : i.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y) : i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], y), y += 1;
                        return i
                    }, tU.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, o = this.shapes.length,
                            h = this.rd.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], h));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, t2.prototype.point = function(t) {
                        return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                    }, t2.prototype.derivative = function(t) {
                        return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                    }, t2.prototype.tangentAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[1], e[0])
                    }, t2.prototype.normalAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[0], e[1])
                    }, t2.prototype.inflectionPoints = function() {
                        var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                        if (tQ(t)) return [];
                        var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                            i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                        if (i < 0) return [];
                        var s = Math.sqrt(i);
                        return tQ(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(t) {
                            return t > 0 && t < 1
                        })
                    }, t2.prototype.split = function(t) {
                        if (t <= 0) return [t1(this.points[0]), this];
                        if (t >= 1) return [this, t1(this.points[this.points.length - 1])];
                        var e = t$(this.points[0], this.points[1], t),
                            i = t$(this.points[1], this.points[2], t),
                            s = t$(this.points[2], this.points[3], t),
                            a = t$(e, i, t),
                            r = t$(i, s, t),
                            n = t$(a, r, t);
                        return [new t2(this.points[0], e, a, n, !0), new t2(n, r, s, this.points[3], !0)]
                    }, t2.prototype.bounds = function() {
                        return {
                            x: t3(this, 0),
                            y: t3(this, 1)
                        }
                    }, t2.prototype.boundingBox = function() {
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
                    }, t2.prototype.intersections = function(t, e, i) {
                        void 0 === e && (e = 2), void 0 === i && (i = 7);
                        var s = [];
                        return function t(e, i, s, a, r, n) {
                            if (2 * Math.abs(e.cx - i.cx) < e.width + i.width && 2 * Math.abs(e.cy - i.cy) < e.height + i.height) {
                                if (s >= n || e.width <= a && e.height <= a && i.width <= a && i.height <= a) return void r.push([e.t, i.t]);
                                var o = t9(e),
                                    h = t9(i);
                                t(o[0], h[0], s + 1, a, r, n), t(o[0], h[1], s + 1, a, r, n), t(o[1], h[0], s + 1, a, r, n), t(o[1], h[1], s + 1, a, r, n)
                            }
                        }(t5(this, 0, 1), t5(t, 0, 1), 0, e, s, i), s
                    }, t2.shapeSegment = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new t2(t.v[e], t.o[e], t.i[i], t.v[i], !0)
                    }, t2.shapeSegmentInverted = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new t2(t.v[i], t.i[i], t.o[e], t.v[e], !0)
                    }, g([tY], ee), ee.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amplitude = tD.getProp(t, e.s, 0, null, this), this.frequency = tD.getProp(t, e.r, 0, null, this), this.pointsType = tD.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                    }, ee.prototype.processPath = function(t, e, i, s) {
                        var a = t._length,
                            r = tF.newElement();
                        if (r.c = t.c, t.c || (a -= 1), 0 === a) return r;
                        var n = -1,
                            o = t2.shapeSegment(t, 0);
                        es(r, t, 0, e, i, s, n);
                        for (var h = 0; h < a; h += 1) n = function(t, e, i, s, a, r) {
                            for (var n = 0; n < s; n += 1) {
                                var o = (n + 1) / (s + 1),
                                    h = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                                    l = e.normalAngle(o);
                                ei(t, e.point(o), l, r, i, h / ((s + 1) * 2), h / ((s + 1) * 2)), r = -r
                            }
                            return r
                        }(r, o, e, i, s, -n), o = h !== a - 1 || t.c ? t2.shapeSegment(t, (h + 1) % a) : null, es(r, t, h + 1, e, i, s, n);
                        return r
                    }, ee.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, o = this.shapes.length,
                            h = this.amplitude.v,
                            l = Math.max(0, Math.round(this.frequency.v)),
                            p = this.pointsType.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], h, l, p));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, g([tY], ep), ep.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tD.getProp(t, e.a, 0, null, this), this.miterLimit = tD.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                    }, ep.prototype.processPath = function(t, e, i, s) {
                        var a = tF.newElement();
                        a.c = t.c;
                        var r = t.length();
                        t.c || (r -= 1);
                        var n, o, h, l = [];
                        for (n = 0; n < r; n += 1) h = t2.shapeSegment(t, n), l.push(el(h, e));
                        if (!t.c)
                            for (n = r - 1; n >= 0; n -= 1) h = t2.shapeSegmentInverted(t, n), l.push(el(h, e));
                        l = function(t) {
                            for (var e, i = 1; i < t.length; i += 1) e = eh(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                            return t.length > 1 && (e = eh(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                        }(l);
                        var p = null,
                            f = null;
                        for (n = 0; n < l.length; n += 1) {
                            var d = l[n];
                            for (f && (p = en(a, f, d[0], i, s)), f = d[d.length - 1], o = 0; o < d.length; o += 1) h = d[o], p && et(h.points[0], p) ? a.setXYAt(h.points[1][0], h.points[1][1], "o", a.length() - 1) : a.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], a.length()), a.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], a.length()), p = h.points[3]
                        }
                        return l.length && en(a, f, l[0][0], i, s), a
                    }, ep.prototype.processShapes = function(t) {
                        var e, i, s, a, r, n, o = this.shapes.length,
                            h = this.amount.v,
                            l = this.miterLimit.v,
                            p = this.lineJoin;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (i = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (i.releaseShapes(), e.shape._mdf = !0, s = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) i.addShape(this.processPath(s[r], h, p, l));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var ed = function() {
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
                                a = ef(t);
                            if ("svg" === s) {
                                var r = $("text");
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
                        var o = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return o.isModifier = function(t, e) {
                            var s = t.toString(16) + e.toString(16);
                            return -1 !== i.indexOf(s)
                        }, o.isZeroWidthJoiner = function(t) {
                            return 8205 === t
                        }, o.isFlagEmoji = function(t) {
                            return n(t.substr(0, 2)) && n(t.substr(2, 2))
                        }, o.isRegionalCode = n, o.isCombinedCharacter = function(t) {
                            return -1 !== e.indexOf(t)
                        }, o.isRegionalFlag = function(t, e) {
                            var i = r(t.substr(e, 2));
                            if (127988 !== i) return !1;
                            var s = 0;
                            for (e += 2; s < 5;) {
                                if ((i = r(t.substr(e, 2))) < 917601 || i > 917626) return !1;
                                s += 1, e += 2
                            }
                            return 917631 === r(t.substr(e, 2))
                        }, o.isVariationSelector = function(t) {
                            return 65039 === t
                        }, o.BLACK_FLAG_CODE_POINT = 127988, o.prototype = {
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
                                    o = n;
                                for (i = 0; i < n; i += 1) {
                                    var h, l, p = !0;
                                    if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                        if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                            if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                var f = u("style");
                                                f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("f-family", r[i].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(f)
                                            }
                                        } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                            for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                                            if (p) {
                                                var d = u("link");
                                                d.setAttribute("f-forigin", r[i].fOrigin), d.setAttribute("f-origin", r[i].origin), d.type = "text/css", d.rel = "stylesheet", d.href = r[i].fPath, document.body.appendChild(d)
                                            }
                                        } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                            for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r[i].fPath === h[l].src && (p = !1);
                                            if (p) {
                                                var m = u("link");
                                                m.setAttribute("f-forigin", r[i].fOrigin), m.setAttribute("f-origin", r[i].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", r[i].fPath), e.appendChild(m)
                                            }
                                        }
                                    } else r[i].loaded = !0, o -= 1;
                                    r[i].helper = a(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
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
                        }, o
                    }();

                    function em(t) {
                        this.animationData = t
                    }

                    function ec() {}
                    em.prototype.getProp = function(t) {
                        return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                    }, ec.prototype = {
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
                    var eu = (h = {
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
                        return h[t] || ""
                    });

                    function eg(t, e, i) {
                        this.p = tD.getProp(e, t.v, 0, 0, i)
                    }

                    function ey(t, e, i) {
                        this.p = tD.getProp(e, t.v, 0, 0, i)
                    }

                    function ev(t, e, i) {
                        this.p = tD.getProp(e, t.v, 1, 0, i)
                    }

                    function eb(t, e, i) {
                        this.p = tD.getProp(e, t.v, 1, 0, i)
                    }

                    function e_(t, e, i) {
                        this.p = tD.getProp(e, t.v, 0, 0, i)
                    }

                    function ek(t, e, i) {
                        this.p = tD.getProp(e, t.v, 0, 0, i)
                    }

                    function eP(t, e, i) {
                        this.p = tD.getProp(e, t.v, 0, 0, i)
                    }

                    function eA() {
                        this.p = {}
                    }

                    function eS(t, e) {
                        var i = t.ef || [];
                        this.effectElements = [];
                        var s, a, r = i.length;
                        for (s = 0; s < r; s += 1) a = new ew(i[s], e), this.effectElements.push(a)
                    }

                    function ew(t, e) {
                        this.init(t, e)
                    }

                    function ex() {}

                    function eD() {}

                    function eC(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                    }

                    function eM(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                        var s = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? tD.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }, this.lv = tD.getProp(this, t.au && t.au.lv ? t.au.lv : {
                            k: [100]
                        }, 1, .01, this)
                    }

                    function eT() {}
                    g([tC], ew), ew.prototype.getValue = ew.prototype.iterateDynamicProperties, ew.prototype.init = function(t, e) {
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        var i, s, a = this.data.ef.length,
                            r = this.data.ef;
                        for (i = 0; i < a; i += 1) {
                            switch (s = null, r[i].ty) {
                                case 0:
                                    s = new eg(r[i], e, this);
                                    break;
                                case 1:
                                    s = new ey(r[i], e, this);
                                    break;
                                case 2:
                                    s = new ev(r[i], e, this);
                                    break;
                                case 3:
                                    s = new eb(r[i], e, this);
                                    break;
                                case 4:
                                case 7:
                                    s = new eP(r[i], e, this);
                                    break;
                                case 10:
                                    s = new e_(r[i], e, this);
                                    break;
                                case 11:
                                    s = new ek(r[i], e, this);
                                    break;
                                case 5:
                                    s = new eS(r[i], e);
                                    break;
                                default:
                                    s = new eA(r[i])
                            }
                            s && this.effectElements.push(s)
                        }
                    }, ex.prototype = {
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
                            var t = eu(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                        },
                        initBaseData: function(t, e, i) {
                            this.globalData = e, this.comp = i, this.data = t, this.layerId = z(), this.data.sr || (this.data.sr = 1), this.effectsManager = new eS(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, eD.prototype = {
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
                    }, eC.prototype.prepareFrame = function() {}, g([ec, ex, eD], eC), eC.prototype.getBaseElement = function() {
                        return null
                    }, eC.prototype.renderFrame = function() {}, eC.prototype.destroy = function() {}, eC.prototype.initExpressions = function() {}, eC.prototype.getFootageData = function() {
                        return this.footageData
                    }, eM.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e
                        }
                        this._volume = this.lv.v[0];
                        var i = this._volume * this._volumeMultiplier;
                        this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
                    }, g([ec, ex, eD], eM), eM.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                    }, eM.prototype.show = function() {}, eM.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1
                    }, eM.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                    }, eM.prototype.resume = function() {
                        this._canPlay = !0
                    }, eM.prototype.setRate = function(t) {
                        this.audio.rate(t)
                    }, eM.prototype.volume = function(t) {
                        this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                    }, eM.prototype.getBaseElement = function() {
                        return null
                    }, eM.prototype.destroy = function() {}, eM.prototype.sourceRectAtTime = function() {}, eM.prototype.initExpressions = function() {}, eT.prototype.checkLayers = function(t) {
                        var e, i, s = this.layers.length;
                        for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements()
                    }, eT.prototype.createItem = function(t) {
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
                    }, eT.prototype.createCamera = function() {
                        throw Error("You're using a 3d camera. Try the html renderer.")
                    }, eT.prototype.createAudio = function(t) {
                        return new eM(t, this.globalData, this)
                    }, eT.prototype.createFootage = function(t) {
                        return new eC(t, this.globalData, this)
                    }, eT.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.buildItem(t);
                        this.checkPendingElements()
                    }, eT.prototype.includeLayers = function(t) {
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
                    }, eT.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t
                    }, eT.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, eT.prototype.buildElementParenting = function(t, e, i) {
                        for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
                    }, eT.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t)
                    }, eT.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var s = this.createComp(t[e]);
                                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                            }
                    }, eT.prototype.getElementById = function(t) {
                        var e, i = this.elements.length;
                        for (e = 0; e < i; e += 1)
                            if (this.elements[e].data.ind === t) return this.elements[e];
                        return null
                    }, eT.prototype.getElementByPath = function(t) {
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
                    }, eT.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new ed, this.globalData.slotManager = new em(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        }
                    };

                    function eF() {}

                    function eE(t, e, i) {
                        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var s, a = this.globalData.defs,
                            r = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = b(r), this.solidPath = "";
                        var n, o, h, l, p, f, d, m = this.masksProperties,
                            u = 0,
                            g = [],
                            y = z(),
                            v = "clipPath",
                            _ = "clip-path";
                        for (s = 0; s < r; s += 1)
                            if (("a" !== m[s].mode && "n" !== m[s].mode || m[s].inv || 100 !== m[s].o.k || m[s].o.x) && (v = "mask", _ = "mask"), ("s" === m[s].mode || "i" === m[s].mode) && 0 === u ? ((l = $("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), g.push(l)) : l = null, n = $("path"), "n" === m[s].mode) this.viewData[s] = {
                                op: tD.getProp(this.element, m[s].o, 0, .01, this.element),
                                prop: tL.getShapeProp(this.element, m[s], 3),
                                elem: n,
                                lastPath: ""
                            }, a.appendChild(n);
                            else {
                                if (u += 1, n.setAttribute("fill", "s" === m[s].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== m[s].x.k ? (v = "mask", _ = "mask", d = tD.getProp(this.element, m[s].x, 0, null, this.element), k = z(), (p = $("filter")).setAttribute("id", k), (f = $("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), a.appendChild(p), n.setAttribute("stroke", "s" === m[s].mode ? "#000000" : "#ffffff")) : (f = null, d = null), this.storedData[s] = {
                                        elem: n,
                                        x: d,
                                        expan: f,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: k,
                                        lastRadius: 0
                                    }, "i" === m[s].mode) {
                                    h = g.length;
                                    var k, P = $("g");
                                    for (o = 0; o < h; o += 1) P.appendChild(g[o]);
                                    var A = $("mask");
                                    A.setAttribute("mask-type", "alpha"), A.setAttribute("id", y + "_" + u), A.appendChild(n), a.appendChild(A), P.setAttribute("mask", "url(" + c() + "#" + y + "_" + u + ")"), g.length = 0, g.push(P)
                                } else g.push(n);
                                m[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                    elem: n,
                                    lastPath: "",
                                    op: tD.getProp(this.element, m[s].o, 0, .01, this.element),
                                    prop: tL.getShapeProp(this.element, m[s], 3),
                                    invRect: l
                                }, this.viewData[s].prop.k || this.drawPath(m[s], this.viewData[s].prop.v, this.viewData[s])
                            } for (this.maskElement = $(v), r = g.length, s = 0; s < r; s += 1) this.maskElement.appendChild(g[s]);
                        u > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + c() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }
                    eF.prototype = {
                        initTransform: function() {
                            var t = new tV;
                            this.finalTransform = {
                                mProp: this.data.ks ? tK.getTransformProperty(this, this.data.ks, this) : {
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
                    }, eE.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop
                    }, eE.prototype.renderFrame = function(t) {
                        var e, i = this.element.finalTransform.mat,
                            s = this.masksProperties.length;
                        for (e = 0; e < s; e += 1)
                            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                var a = this.storedData[e].expan;
                                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + c() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                            }
                    }, eE.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, eE.prototype.createLayerSolidPath = function() {
                        return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h)) + " "
                    }, eE.prototype.drawPath = function(t, e, i) {
                        var s, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                        for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                        if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                            var n = "";
                            i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r
                        }
                    }, eE.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    };
                    var eI = ((l = {}).createFilter = function(t, e) {
                            var i = $("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        }, l.createAlphaToLuminanceFilter = function() {
                            var t = $("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }, l),
                        eL = (p = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "u" > typeof OffscreenCanvas
                        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (p.maskType = !1), /firefox/i.test(navigator.userAgent) && (p.svgLumaHidden = !1), p),
                        eV = {},
                        eR = "filter_result_";

                    function ez(t) {
                        var e, i, s = "SourceGraphic",
                            a = t.data.ef ? t.data.ef.length : 0,
                            r = z(),
                            n = eI.createFilter(r, !0),
                            o = 0;
                        for (i = 0, this.filters = []; i < a; i += 1) {
                            e = null;
                            var h = t.data.ef[i].ty;
                            eV[h] && (e = new eV[h].effect(n, t.effectsManager.effectElements[i], t, eR + o, s), s = eR + o, eV[h].countsAsEffect && (o += 1)), e && this.filters.push(e)
                        }
                        o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + c() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
                    }

                    function eN() {}

                    function eO() {}

                    function eB() {}

                    function eq(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function ej(t, e) {
                        this.elem = t, this.pos = e
                    }

                    function eW() {}
                    ez.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                    }, ez.prototype.getEffects = function(t) {
                        var e, i = this.filters.length,
                            s = [];
                        for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
                        return s
                    }, eN.prototype = {
                        initRendererElement: function() {
                            this.layerElement = $("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = $("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var e = $("g");
                                e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var i = $("clipPath"),
                                    s = $("path");
                                s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var a = z();
                                if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                    var r = $("g");
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
                            this.maskManager = new eE(this.data, this, this.globalData), this.renderableEffectsManager = new ez(this), this.searchEffectTransforms()
                        },
                        getMatte: function(t) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                var e, i, s, a, r = this.layerId + "_" + t;
                                if (1 === t || 3 === t) {
                                    var n = $("mask");
                                    n.setAttribute("id", r), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = $("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), eL.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = z(), i = eI.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(eI.createAlphaToLuminanceFilter()), (a = $("g")).appendChild(s), n.appendChild(a), a.setAttribute("filter", "url(" + c() + "#" + e + ")"))
                                } else if (2 === t) {
                                    var o = $("mask");
                                    o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                                    var h = $("g");
                                    o.appendChild(h), e = z(), i = eI.createFilter(e);
                                    var l = $("feComponentTransfer");
                                    l.setAttribute("in", "SourceGraphic"), i.appendChild(l);
                                    var p = $("feFuncA");
                                    p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(i);
                                    var f = $("rect");
                                    f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + c() + "#" + e + ")"), h.appendChild(f), (s = $("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(s), eL.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(eI.createAlphaToLuminanceFilter()), a = $("g"), h.appendChild(f), a.appendChild(this.layerElement), h.appendChild(a)), this.globalData.defs.appendChild(o)
                                }
                                this.matteMasks[t] = r
                            }
                            return this.matteMasks[t]
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + c() + "#" + t + ")")
                        }
                    }, eO.prototype = {
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
                    }, g([ec, function(t) {
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
                    })], eB), g([ex, eF, eN, eO, eD, eB], eq), eq.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = $("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, eq.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, eW.prototype = {
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
                                } i.push(new ej(t, e))
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
                        eY = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        };

                    function eH(t, e, i) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                        for (var s = 0, a = t.length; s < a;) {
                            if (t[s].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            s += 1
                        }
                    }

                    function eG(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = $("path"), this.msElem = null
                    }

                    function eK(t, e, i, s) {
                        this.elem = t, this.frameId = -1, this.dataProps = b(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = v("float32", e.length ? e.length - 1 : 0), this.dashoffset = v("float32", 1), this.initDynamicPropertyContainer(s);
                        var a, r, n = e.length || 0;
                        for (a = 0; a < n; a += 1) r = tD.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                            n: e[a].n,
                            p: r
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function eJ(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tD.getProp(t, e.o, 0, .01, this), this.w = tD.getProp(t, e.w, 0, null, this), this.d = new eK(t, e.d || {}, "svg", this), this.c = tD.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                    }

                    function eU(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tD.getProp(t, e.o, 0, .01, this), this.c = tD.getProp(t, e.c, 1, 255, this), this.style = i
                    }

                    function eZ(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
                    }

                    function eQ(t, e, i) {
                        this.data = e, this.c = v("uint8c", 4 * e.p);
                        var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = v("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = tD.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }

                    function e$(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                    }

                    function e0(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = tD.getProp(t, e.w, 0, null, this), this.d = new eK(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                    }

                    function e1() {
                        this.it = [], this.prevViewData = [], this.gr = $("g")
                    }

                    function e2(t, e, i) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: i
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }
                    eH.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, eG.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, eK.prototype.getValue = function(t) {
                        if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0,
                                i = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                        }
                    }, g([tC], eK), g([tC], eJ), g([tC], eU), g([tC], eZ), eQ.prototype.comparePoints = function(t, e) {
                        for (var i = 0, s = this.o.length / 2; i < s;) {
                            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                            i += 1
                        }
                        return !0
                    }, eQ.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var t = 0, e = this.data.k.k.length; t < e;) {
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                t += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, eQ.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, i, s, a = 4 * this.data.p;
                            for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                            if (this.o.length)
                                for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                            this._mdf = !t
                        }
                    }, g([tC], eQ), e$.prototype.initGradientData = function(t, e, i) {
                        this.o = tD.getProp(t, e.o, 0, .01, this), this.s = tD.getProp(t, e.s, 1, null, this), this.e = tD.getProp(t, e.e, 1, null, this), this.h = tD.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = tD.getProp(t, e.a || {
                            k: 0
                        }, 0, M, this), this.g = new eQ(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                    }, e$.prototype.setGradientData = function(t, e) {
                        var i = z(),
                            s = $(1 === e.t ? "linearGradient" : "radialGradient");
                        s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                        var a, r, n, o = [];
                        for (n = 4 * e.g.p, r = 0; r < n; r += 4) a = $("stop"), s.appendChild(a), o.push(a);
                        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + c() + "#" + i + ")"), this.gf = s, this.cst = o
                    }, e$.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i, s, a, r = $("mask"),
                                n = $("path");
                            r.appendChild(n);
                            var o = z(),
                                h = z();
                            r.setAttribute("id", h);
                            var l = $(1 === t.t ? "linearGradient" : "radialGradient");
                            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var p = this.stops;
                            for (s = 4 * t.g.p; s < a; s += 2)(i = $("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + c() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", eX[t.lc || 2]), n.setAttribute("stroke-linejoin", eY[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = r, this.ost = p, this.maskId = h, e.msElem = n
                        }
                    }, g([tC], e$), g([e$, tC], e0);
                    var e3 = function(t, e, i, s) {
                            if (0 === e) return "";
                            var a, r = t.o,
                                n = t.i,
                                o = t.v,
                                h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                            for (a = 1; a < e; a += 1) h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(o[a][0], o[a][1]);
                            return i && e && (h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]) + "z"), h
                        },
                        e5 = function() {
                            var t = new tV,
                                e = new tV;

                            function i(t, e, i) {
                                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                            }

                            function s() {}

                            function a(i, s, a) {
                                var r, n, o, h, l, p, f, d, m, c, u = s.styles.length,
                                    g = s.lvl;
                                for (p = 0; p < u; p += 1) {
                                    if (h = s.sh._mdf || a, s.styles[p].lvl < g) {
                                        for (d = e.reset(), m = g - s.styles[p].lvl, c = s.transformers.length - 1; !h && m > 0;) h = s.transformers[c].mProps._mdf || h, m -= 1, c -= 1;
                                        if (h)
                                            for (m = g - s.styles[p].lvl, c = s.transformers.length - 1; m > 0;) d.multiply(s.transformers[c].mProps.v), m -= 1, c -= 1
                                    } else d = t;
                                    if (n = (f = s.sh.paths)._length, h) {
                                        for (o = "", r = 0; r < n; r += 1)(l = f.shapes[r]) && l._length && (o += e3(l, l._length, l.c, d));
                                        s.caches[p] = o
                                    } else o = s.caches[p];
                                    s.styles[p].d += !0 === i.hd ? "" : o, s.styles[p]._mdf = h || s.styles[p]._mdf
                                }
                            }

                            function r(t, e, i) {
                                var s = e.style;
                                (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + x(e.c.v[0]) + "," + x(e.c.v[1]) + "," + x(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                            }

                            function n(t, e, i) {
                                o(t, e, i), h(t, e, i)
                            }

                            function o(t, e, i) {
                                var s, a, r, n, o, h = e.gf,
                                    l = e.g._hasOpacity,
                                    p = e.s.v,
                                    f = e.e.v;
                                if (e.o._mdf || i) {
                                    var d = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                    e.style.pElem.setAttribute(d, e.o.v)
                                }
                                if (e.s._mdf || i) {
                                    var m = 1 === t.t ? "x1" : "cx",
                                        c = "x1" === m ? "y1" : "cy";
                                    h.setAttribute(m, p[0]), h.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(c, p[1]))
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
                                if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                                else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                    o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                    var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                        v = e.h.v;
                                    v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                    var b = o * v,
                                        _ = Math.cos(y + e.a.v) * b + p[0],
                                        k = Math.sin(y + e.a.v) * b + p[1];
                                    h.setAttribute("fx", _), h.setAttribute("fy", k), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", k))
                                }
                            }

                            function h(t, e, i) {
                                var s = e.style,
                                    a = e.d;
                                a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + x(e.c.v[0]) + "," + x(e.c.v[1]) + "," + x(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                            }
                            return {
                                createRenderFunction: function(t) {
                                    switch (t.ty) {
                                        case "fl":
                                            return r;
                                        case "gf":
                                            return o;
                                        case "gs":
                                            return n;
                                        case "st":
                                            return h;
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

                    function e9(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                    }

                    function e4(t, e, i, s, a, r) {
                        this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = r, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!i,
                            fc: !!s,
                            m: !0,
                            p: !0
                        }
                    }

                    function e6(t, e) {
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
                    g([ex, eF, eN, eW, eO, eD, eB], e9), e9.prototype.initSecondaryElement = function() {}, e9.prototype.identityMatrix = new tV, e9.prototype.buildExpressionInterface = function() {}, e9.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, e9.prototype.filterUniqueShapes = function() {
                        var t, e, i, s, a = this.shapes.length,
                            r = this.stylesList.length,
                            n = [],
                            o = !1;
                        for (i = 0; i < r; i += 1) {
                            for (s = this.stylesList[i], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), o = e._isAnimated || o);
                            n.length > 1 && o && this.setShapesAsAnimated(n)
                        }
                    }, e9.prototype.setShapesAsAnimated = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                    }, e9.prototype.createStyleElement = function(t, e) {
                        var i, s = new eG(t, e),
                            a = s.pElem;
                        return "st" === t.ty ? i = new eJ(this, t, s) : "fl" === t.ty ? i = new eU(this, t, s) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? e$ : e0)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + c() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new eZ(this, t, s)), ("st" === t.ty || "gs" === t.ty) && (a.setAttribute("stroke-linecap", eX[t.lc || 2]), a.setAttribute("stroke-linejoin", eY[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = eu(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
                    }, e9.prototype.createGroupElement = function(t) {
                        var e = new e1;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = eu(t.bm)), e
                    }, e9.prototype.createTransformElement = function(t, e) {
                        var i = tK.getTransformProperty(this, t, this),
                            s = new e2(i, i.o, e);
                        return this.addToAnimatedContents(t, s), s
                    }, e9.prototype.createShapeElement = function(t, e, i) {
                        var s = 4;
                        "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                        var a = new eH(e, i, tL.getShapeProp(this, t, s, this));
                        return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                    }, e9.prototype.addToAnimatedContents = function(t, e) {
                        for (var i = 0, s = this.animatedContents.length; i < s;) {
                            if (this.animatedContents[i].element === e) return;
                            i += 1
                        }
                        this.animatedContents.push({
                            fn: e5.createRenderFunction(t),
                            element: e,
                            data: t
                        })
                    }, e9.prototype.setElementStyles = function(t) {
                        var e, i = t.styles,
                            s = this.stylesList.length;
                        for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                    }, e9.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers()
                    }, e9.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                        var o, h, l, p, f, d, m = [].concat(r),
                            c = t.length - 1,
                            u = [],
                            g = [];
                        for (o = c; o >= 0; o -= 1) {
                            if ((d = this.searchProcessedElement(t[o])) ? e[o] = i[d - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) d ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), u.push(e[o].style);
                            else if ("gr" === t[o].ty) {
                                if (d)
                                    for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                                else e[o] = this.createGroupElement(t[o]);
                                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, m, n), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                            } else "tr" === t[o].ty ? (d || (e[o] = this.createTransformElement(t[o], s)), p = e[o].transform, m.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (d || (e[o] = this.createShapeElement(t[o], m, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (d ? (f = e[o]).closed = !1 : ((f = tX.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[o].ty && (d ? (f = e[o]).closed = !0 : (f = tX.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                            this.addProcessedElement(t[o], o + 1)
                        }
                        for (c = u.length, o = 0; o < c; o += 1) u[o].closed = !0;
                        for (c = g.length, o = 0; o < c; o += 1) g[o].closed = !0
                    }, e9.prototype.renderInnerContent = function() {
                        this.renderModifiers();
                        var t, e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                    }, e9.prototype.renderShape = function() {
                        var t, e, i = this.animatedContents.length;
                        for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                    }, e9.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, e4.prototype.update = function(t, e, i, s, a, r) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = !0, n = !0), n
                    }, e6.prototype.defaultBoxWidth = [0, 0], e6.prototype.copyData = function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, e6.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, e6.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, e6.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, e6.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                    }, e6.prototype.getValue = function(t) {
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
                    }, e6.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                    }, e6.prototype.buildFinalText = function(t) {
                        for (var e, i, s = [], a = 0, r = t.length, n = !1, o = !1, h = ""; a < r;) n = o, o = !1, e = t.charCodeAt(a), h = t.charAt(a), ed.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? ed.isRegionalFlag(t, a) ? h = t.substr(a, 14) : (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (ed.isModifier(e, i) ? (h = t.substr(a, 2), n = !0) : h = ed.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (i = t.charCodeAt(a + 1), ed.isVariationSelector(e) && (n = !0)) : ed.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (s[s.length - 1] += h, n = !1) : s.push(h), a += h.length;
                        return s
                    }, e6.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, i, s, a, r, n, o, h = this.elem.globalData.fontManager,
                            l = this.data,
                            p = [],
                            f = 0,
                            d = l.m.g,
                            m = 0,
                            c = 0,
                            u = 0,
                            g = [],
                            y = 0,
                            v = 0,
                            b = h.getFontByName(t.f),
                            _ = 0,
                            k = ef(b);
                        t.fWeight = k.weight, t.fStyle = k.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                        var P, A = t.tr / 1e3 * t.finalSize;
                        if (t.sz)
                            for (var S, w, x = !0, D = t.sz[0], C = t.sz[1]; x;) {
                                w = this.buildFinalText(t.t), S = 0, y = 0, i = w.length, A = t.tr / 1e3 * t.finalSize;
                                var M = -1;
                                for (e = 0; e < i; e += 1) P = w[e].charCodeAt(0), s = !1, " " === w[e] ? M = e : (13 === P || 3 === P) && (y = 0, s = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(w[e], b.fStyle, b.fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(w[e], t.f, t.finalSize), y + _ > D && " " !== w[e] ? (-1 === M ? i += 1 : e = M, S += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, +(M === e), "\r"), M = -1, y = 0) : (y += _, y += A);
                                S += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && C < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, i = t.finalText.length, x = !1)
                            }
                        y = -A, _ = 0;
                        var T, F = 0;
                        for (e = 0; e < i; e += 1)
                            if (s = !1, 13 === (P = (T = t.finalText[e]).charCodeAt(0)) || 3 === P ? (F = 0, g.push(y), v = y > v ? y : v, y = -2 * A, a = "", s = !0, u += 1) : a = T, h.chars ? (o = h.getCharData(T, b.fStyle, h.getFontByName(t.f).fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(a, t.f, t.finalSize), " " === T ? F += _ + A : (y += _ + A + F, F = 0), p.push({
                                    l: _,
                                    an: _,
                                    add: m,
                                    n: s,
                                    anIndexes: [],
                                    val: a,
                                    line: u,
                                    animatorJustifyOffset: 0
                                }), 2 == d) {
                                if (m += _, "" === a || " " === a || e === i - 1) {
                                    for (("" === a || " " === a) && (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                                    f += 1, m = 0
                                }
                            } else if (3 == d) {
                            if (m += _, "" === a || e === i - 1) {
                                for ("" === a && (m -= _); c <= e;) p[c].an = m, p[c].ind = f, p[c].extra = _, c += 1;
                                m = 0, f += 1
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
                        var E, I, L = l.a;
                        n = L.length;
                        var V, R, z = [];
                        for (r = 0; r < n; r += 1) {
                            for ((E = L[r]).a.sc && (t.strokeColorAnim = !0), E.a.sw && (t.strokeWidthAnim = !0), (E.a.fc || E.a.fh || E.a.fs || E.a.fb) && (t.fillColorAnim = !0), R = 0, V = E.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[r] = R, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == i - 1) || 4 == V && (I.n || e == i - 1)) && (1 === E.s.rn && z.push(R), R += 1);
                            l.a[r].s.totalChars = R;
                            var N, O = -1;
                            if (1 === E.s.rn)
                                for (e = 0; e < i; e += 1) O != (I = p[e]).anIndexes[r] && (O = I.anIndexes[r], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), I.anIndexes[r] = N
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                    }, e6.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
                    }, e6.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                    }, e6.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, e6.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var e8 = function() {
                        var t = Math.max,
                            e = Math.min,
                            i = Math.floor;

                        function s(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = tD.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), "e" in e ? this.e = tD.getProp(t, e.e, 0, 0, this) : this.e = {
                                v: 100
                            }, this.o = tD.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = tD.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = tD.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = tD.getProp(t, e.sm || {
                                k: 100
                            }, 0, 0, this), this.a = tD.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return s.prototype = {
                            getMult: function(s) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var a = 0,
                                    r = 0,
                                    n = 1,
                                    o = 1;
                                this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                var h = tp.getBezierEasing(a, r, n, o).get,
                                    l = 0,
                                    p = this.finalS,
                                    f = this.finalE,
                                    d = this.data.sh;
                                if (2 === d) l = h(l = f === p ? +(s >= f) : t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                else if (3 === d) l = h(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                                else if (4 === d) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (s - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                                else if (5 === d) {
                                    if (f === p) l = 0;
                                    else {
                                        var m = f - p,
                                            c = -m / 2 + (s = e(t(0, s + .5 - p), f - p)),
                                            u = m / 2;
                                        l = Math.sqrt(1 - c * c / (u * u))
                                    }
                                    l = h(l)
                                } else 6 === d ? l = h(l = f === p ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (s = e(t(0, s + .5 - p), f - p)) / (f - p))) / 2) : (s >= i(p) && (l = s - p < 0 ? t(0, e(e(f, 1) - (p - s), 1)) : t(0, e(f - s, 1))), l = h(l));
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
                        }, g([tC], s), {
                            getTextSelectorProp: function(t, e, i) {
                                return new s(t, e)
                            }
                        }
                    }();

                    function e7(t, e, i) {
                        var s = {
                                propType: !1
                            },
                            a = tD.getProp,
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
                        }, this.s = e8.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                    }

                    function it(t, e, i) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = b(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                    }

                    function ie() {}
                    it.prototype.searchProperties = function() {
                        var t, e, i = this._textData.a.length,
                            s = tD.getProp;
                        for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new e7(this._elem, e, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: s(this._elem, this._textData.p.a, 0, 0, this),
                            f: s(this._elem, this._textData.p.f, 0, 0, this),
                            l: s(this._elem, this._textData.p.l, 0, 0, this),
                            r: s(this._elem, this._textData.p.r, 0, 0, this),
                            p: s(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                    }, it.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                            this._isFirstFrame = !1;
                            var i, s, a, r, n, o, h, l, p, f, d, m, c, u, g, y, v, b, _, k = this._moreOptions.alignment.v,
                                P = this._animatorsData,
                                A = this._textData,
                                S = this.mHelper,
                                w = this._renderType,
                                x = this.renderedLetters.length,
                                D = t.l;
                            if (this._hasMaskedPath) {
                                if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var C, M = _.v;
                                    for (this._pathData.r.v && (M = M.reverse()), n = {
                                            tLength: 0,
                                            segments: []
                                        }, r = M._length - 1, y = 0, a = 0; a < r; a += 1) C = tu.buildBezierData(M.v[a], M.v[a + 1], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[a + 1][0] - M.v[a + 1][0], M.i[a + 1][1] - M.v[a + 1][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength;
                                    a = r, _.v.c && (C = tu.buildBezierData(M.v[a], M.v[0], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += C.segmentLength, n.segments.push(C), y += C.segmentLength), this._pathData.pi = n
                                }
                                if (n = this._pathData.pi, o = this._pathData.f.v, d = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && _.v.c)
                                    for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), d = u.length - 1, f = (c = u[d].points).length - 1; o < 0;) o += c[f].partialLength, (f -= 1) < 0 && (d -= 1, f = (c = u[d].points).length - 1);
                                m = (c = u[d].points)[f - 1], g = (h = c[f]).partialLength
                            }
                            r = D.length, i = 0, s = 0;
                            var T, F, E, I, L = 1.2 * t.finalSize * .714,
                                V = !0;
                            E = P.length;
                            var R, z, N, O, W, X, Y, H, G, K, J, U, Z, Q = -1,
                                $ = o,
                                tt = d,
                                te = f,
                                ti = -1,
                                ts = "",
                                ta = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var tr = 0,
                                    tn = 0,
                                    to = 2 === t.j ? -.5 : -1,
                                    th = 0,
                                    tl = !0;
                                for (a = 0; a < r; a += 1)
                                    if (D[a].n) {
                                        for (tr && (tr += tn); th < a;) D[th].animatorJustifyOffset = tr, th += 1;
                                        tr = 0, tl = !0
                                    } else {
                                        for (F = 0; F < E; F += 1)(T = P[F].a).t.propType && (tl && 2 === t.j && (tn += T.t.v * to), (R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars)).length ? tr += T.t.v * R[0] * to : tr += T.t.v * R * to);
                                        tl = !1
                                    } for (tr && (tr += tn); th < a;) D[th].animatorJustifyOffset = tr, th += 1
                            }
                            for (a = 0; a < r; a += 1) {
                                if (S.reset(), W = 1, D[a].n) i = 0, s += t.yOffset, s += +!!V, o = $, V = !1, this._hasMaskedPath && (d = tt, f = te, m = (c = u[d].points)[f - 1], g = (h = c[f]).partialLength, l = 0), ts = "", U = "", K = "", Z = "", ta = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (ti !== D[a].line) {
                                            switch (t.j) {
                                                case 1:
                                                    o += y - t.lineWidths[D[a].line];
                                                    break;
                                                case 2:
                                                    o += (y - t.lineWidths[D[a].line]) / 2
                                            }
                                            ti = D[a].line
                                        }
                                        Q !== D[a].ind && (D[Q] && (o += D[Q].extra), o += D[a].an / 2, Q = D[a].ind), o += k[0] * D[a].an * .005;
                                        var tp = 0;
                                        for (F = 0; F < E; F += 1)(T = P[F].a).p.propType && ((R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars)).length ? tp += T.p.v[0] * R[0] : tp += T.p.v[0] * R), T.a.propType && ((R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars)).length ? tp += T.a.v[0] * R[0] : tp += T.a.v[0] * R);
                                        for (p = !0, this._pathData.a.v && (o = .5 * D[0].an + (y - this._pathData.f.v - .5 * D[0].an - .5 * D[D.length - 1].an) * Q / (r - 1) + this._pathData.f.v); p;) l + g >= o + tp || !c ? (v = (o + tp - l) / h.partialLength, N = m.point[0] + (h.point[0] - m.point[0]) * v, O = m.point[1] + (h.point[1] - m.point[1]) * v, S.translate(-k[0] * D[a].an * .005, -(.01 * (k[1] * L))), p = !1) : c && (l += h.partialLength, (f += 1) >= c.length && (f = 0, u[d += 1] ? c = u[d].points : _.v.c ? (f = 0, c = u[d = 0].points) : (l -= h.partialLength, c = null)), c && (m = h, g = (h = c[f]).partialLength));
                                        z = D[a].an / 2 - D[a].add, S.translate(-z, 0, 0)
                                    } else z = D[a].an / 2 - D[a].add, S.translate(-z, 0, 0), S.translate(-k[0] * D[a].an * .005, -k[1] * L * .01, 0);
                                    for (F = 0; F < E; F += 1)(T = P[F].a).t.propType && (R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars), (0 !== i || 0 !== t.j) && (this._hasMaskedPath ? R.length ? o += T.t.v * R[0] : o += T.t.v * R : R.length ? i += T.t.v * R[0] : i += T.t.v * R));
                                    for (t.strokeWidthAnim && (Y = t.sw || 0), t.strokeColorAnim && (X = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < E; F += 1)(T = P[F].a).a.propType && ((R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars)).length ? S.translate(-T.a.v[0] * R[0], -T.a.v[1] * R[1], T.a.v[2] * R[2]) : S.translate(-T.a.v[0] * R, -T.a.v[1] * R, T.a.v[2] * R));
                                    for (F = 0; F < E; F += 1)(T = P[F].a).s.propType && ((R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars)).length ? S.scale(1 + (T.s.v[0] - 1) * R[0], 1 + (T.s.v[1] - 1) * R[1], 1) : S.scale(1 + (T.s.v[0] - 1) * R, 1 + (T.s.v[1] - 1) * R, 1));
                                    for (F = 0; F < E; F += 1) {
                                        if (T = P[F].a, R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars), T.sk.propType && (R.length ? S.skewFromAxis(-T.sk.v * R[0], T.sa.v * R[1]) : S.skewFromAxis(-T.sk.v * R, T.sa.v * R)), T.r.propType && (R.length ? S.rotateZ(-T.r.v * R[2]) : S.rotateZ(-T.r.v * R)), T.ry.propType && (R.length ? S.rotateY(T.ry.v * R[1]) : S.rotateY(T.ry.v * R)), T.rx.propType && (R.length ? S.rotateX(T.rx.v * R[0]) : S.rotateX(T.rx.v * R)), T.o.propType && (R.length ? W += (T.o.v * R[0] - W) * R[0] : W += (T.o.v * R - W) * R), t.strokeWidthAnim && T.sw.propType && (R.length ? Y += T.sw.v * R[0] : Y += T.sw.v * R), t.strokeColorAnim && T.sc.propType)
                                            for (G = 0; G < 3; G += 1) R.length ? X[G] += (T.sc.v[G] - X[G]) * R[0] : X[G] += (T.sc.v[G] - X[G]) * R;
                                        if (t.fillColorAnim && t.fc) {
                                            if (T.fc.propType)
                                                for (G = 0; G < 3; G += 1) R.length ? H[G] += (T.fc.v[G] - H[G]) * R[0] : H[G] += (T.fc.v[G] - H[G]) * R;
                                            T.fh.propType && (H = R.length ? j(H, T.fh.v * R[0]) : j(H, T.fh.v * R)), T.fs.propType && (H = R.length ? B(H, T.fs.v * R[0]) : B(H, T.fs.v * R)), T.fb.propType && (H = R.length ? q(H, T.fb.v * R[0]) : q(H, T.fb.v * R))
                                        }
                                    }
                                    for (F = 0; F < E; F += 1)(T = P[F].a).p.propType && (R = P[F].s.getMult(D[a].anIndexes[F], A.a[F].s.totalChars), this._hasMaskedPath ? R.length ? S.translate(0, T.p.v[1] * R[0], -T.p.v[2] * R[1]) : S.translate(0, T.p.v[1] * R, -T.p.v[2] * R) : R.length ? S.translate(T.p.v[0] * R[0], T.p.v[1] * R[1], -T.p.v[2] * R[2]) : S.translate(T.p.v[0] * R, T.p.v[1] * R, -T.p.v[2] * R));
                                    if (t.strokeWidthAnim && (K = Y < 0 ? 0 : Y), t.strokeColorAnim && (J = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                        if (S.translate(0, -t.ls), S.translate(0, k[1] * L * .01 + s, 0), this._pathData.p.v) {
                                            var tf = 180 * Math.atan(b = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0])) / Math.PI;
                                            h.point[0] < m.point[0] && (tf += 180), S.rotate(-tf * Math.PI / 180)
                                        }
                                        S.translate(N, O, 0), o -= k[0] * D[a].an * .005, D[a + 1] && Q !== D[a + 1].ind && (o += D[a].an / 2, o += .001 * t.tr * t.finalSize)
                                    } else {
                                        switch (S.translate(i, s, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                            case 1:
                                                S.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]), 0, 0);
                                                break;
                                            case 2:
                                                S.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]) / 2, 0, 0)
                                        }
                                        S.translate(0, -t.ls), S.translate(z, 0, 0), S.translate(k[0] * D[a].an * .005, k[1] * L * .01, 0), i += D[a].l + .001 * t.tr * t.finalSize
                                    }
                                    "html" === w ? ts = S.toCSS() : "svg" === w ? ts = S.to2dCSS() : ta = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], Z = W
                                }
                                x <= a ? (I = new e4(Z, K, J, U, ts, ta), this.renderedLetters.push(I), x += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(Z, K, J, U, ts, ta) || this.lettersChangedFlag)
                            }
                        }
                    }, it.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, it.prototype.mHelper = new tV, it.prototype.defaultPropsArray = [], g([tC], it), ie.prototype.initElement = function(t, e, i) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new e6(this, t.t, this.dynamicProperties), this.textAnimator = new it(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, ie.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }, ie.prototype.createPathShape = function(t, e) {
                        var i, s, a = e.length,
                            r = "";
                        for (i = 0; i < a; i += 1) "sh" === e[i].ty && (r += e3(s = e[i].ks.k, s.i.length, !0, t));
                        return r
                    }, ie.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e)
                    }, ie.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t)
                    }, ie.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t)
                    }, ie.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                        }
                        e.translate(s, a, 0)
                    }, ie.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                    }, ie.prototype.emptyProp = new e4, ie.prototype.destroy = function() {}, ie.prototype.validateText = function() {
                        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    };
                    var ii = {
                        shapes: []
                    };

                    function is(t, e, i) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                    }

                    function ia(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function ir(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                    }

                    function io() {}

                    function ih() {}

                    function il(t, e, i) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? b(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? tD.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function ip(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = $("svg");
                        var i = "";
                        if (e && e.title) {
                            var s = $("title"),
                                a = z();
                            s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a
                        }
                        if (e && e.description) {
                            var r = $("desc"),
                                n = z();
                            r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + n
                        }
                        i && this.svgElement.setAttribute("aria-labelledby", i);
                        var o = $("defs");
                        this.svgElement.appendChild(o);
                        var h = $("g");
                        this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
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
                            defs: o,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                    }
                    return g([ex, eF, eN, eO, eD, eB, ie], is), is.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = $("text"))
                    }, is.prototype.buildTextContents = function(t) {
                        for (var e = 0, i = t.length, s = [], a = ""; e < i;) "\r" === t[e] || "\x03" === t[e] ? (s.push(a), a = "") : a += t[e], e += 1;
                        return s.push(a), s
                    }, is.prototype.buildShapeData = function(t, e) {
                        if (t.shapes && t.shapes.length) {
                            var i = t.shapes[0];
                            if (i.it) {
                                var s = i.it[i.it.length - 1];
                                s.s && (s.s.k[0] = e, s.s.k[1] = e)
                            }
                        }
                        return t
                    }, is.prototype.buildNewText = function() {
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
                            o = !!this.globalData.fontManager.chars;
                        e = n.length;
                        var h, l = this.mHelper,
                            p = this.data.singleShape,
                            f = 0,
                            d = 0,
                            m = !0,
                            c = .001 * i.tr * i.finalSize;
                        if (!p || o || i.sz) {
                            var u, g = this.textSpans.length;
                            for (t = 0; t < e; t += 1) {
                                if (this.textSpans[t] || (this.textSpans[t] = {
                                        span: null,
                                        childSpan: null,
                                        glyph: null
                                    }), !o || !p || 0 === t) {
                                    if (h = g > t ? this.textSpans[t].span : $(o ? "g" : "text"), g <= t) {
                                        if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = h, o) {
                                            var y = $("g");
                                            h.appendChild(y), this.textSpans[t].childSpan = y
                                        }
                                        this.textSpans[t].span = h, this.layerElement.appendChild(h)
                                    }
                                    h.style.display = "inherit"
                                }
                                if (l.reset(), p && (n[t].n && (f = -c, d += i.yOffset, d += +!!m, m = !1), this.applyTextPropertiesToMatrix(i, l, n[t].line, f, d), f += n[t].l || 0, f += c), o) {
                                    if (1 === (u = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) v = new il(u.data, this.globalData, this);
                                    else {
                                        var v, _ = ii;
                                        u.data && u.data.shapes && (_ = this.buildShapeData(u.data, i.finalSize)), v = new e9(_, this.globalData, this)
                                    }
                                    if (this.textSpans[t].glyph) {
                                        var k = this.textSpans[t].glyph;
                                        this.textSpans[t].childSpan.removeChild(k.layerElement), k.destroy()
                                    }
                                    this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                                } else p && h.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), h.textContent = n[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                            }
                            p && h && h.setAttribute("d", "")
                        } else {
                            var P = this.textContainer,
                                A = "start";
                            switch (i.j) {
                                case 1:
                                    A = "end";
                                    break;
                                case 2:
                                    A = "middle";
                                    break;
                                default:
                                    A = "start"
                            }
                            P.setAttribute("text-anchor", A), P.setAttribute("letter-spacing", c);
                            var S = this.buildTextContents(i.finalText);
                            for (e = S.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(h = this.textSpans[t].span || $("tspan")).textContent = S[t], h.setAttribute("x", 0), h.setAttribute("y", d), h.style.display = "inherit", P.appendChild(h), this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[t].span = h, d += i.finalLineHeight;
                            this.layerElement.appendChild(P)
                        }
                        for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                        this._sizeChanged = !0
                    }, is.prototype.sourceRectAtTime = function() {
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
                    }, is.prototype.getValue = function() {
                        var t, e, i = this.textSpans.length;
                        for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                    }, is.prototype.renderInnerContent = function() {
                        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            this._sizeChanged = !0;
                            var t, e, i, s, a, r = this.textAnimator.renderedLetters,
                                n = this.textProperty.currentData.l;
                            for (s = 0, a = n.length; s < a; s += 1) n[s].n || (t = r[s], e = this.textSpans[s].span, (i = this.textSpans[s].glyph) && i.renderFrame(), t._mdf.m && e.setAttribute("transform", t.m), t._mdf.o && e.setAttribute("opacity", t.o), t._mdf.sw && e.setAttribute("stroke-width", t.sw), t._mdf.sc && e.setAttribute("stroke", t.sc), t._mdf.fc && e.setAttribute("fill", t.fc))
                        }
                    }, g([eq], ia), ia.prototype.createContent = function() {
                        var t = $("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                    }, ir.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, ir.prototype.renderFrame = function() {}, ir.prototype.getBaseElement = function() {
                        return null
                    }, ir.prototype.destroy = function() {}, ir.prototype.sourceRectAtTime = function() {}, ir.prototype.hide = function() {}, g([ex, eF, eO, eD], ir), g([eT], io), io.prototype.createNull = function(t) {
                        return new ir(t, this.globalData, this)
                    }, io.prototype.createShape = function(t) {
                        return new e9(t, this.globalData, this)
                    }, io.prototype.createText = function(t) {
                        return new is(t, this.globalData, this)
                    }, io.prototype.createImage = function(t) {
                        return new eq(t, this.globalData, this)
                    }, io.prototype.createSolid = function(t) {
                        return new ia(t, this.globalData, this)
                    }, io.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var i = $("clipPath"),
                            s = $("rect");
                        s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                        var a = z();
                        i.setAttribute("id", a), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = b(t.layers.length)
                    }, io.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, io.prototype.updateContainerSize = function() {}, io.prototype.findIndexByInd = function(t) {
                        var e = 0,
                            i = this.layers.length;
                        for (e = 0; e < i; e += 1)
                            if (this.layers[e].ind === t) return e;
                        return -1
                    }, io.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || 99 === this.layers[t].ty)) {
                            e[t] = !0;
                            var i = this.createItem(this.layers[t]);
                            if (e[t] = i, J() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                                var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                                if (-1 === s) return;
                                if (this.elements[s] && !0 !== this.elements[s]) {
                                    var a = e[s].getMatte(this.layers[t].tt);
                                    i.setMatte(a)
                                } else this.buildItem(s), this.addPendingElement(i)
                            }
                        }
                    }, io.prototype.checkPendingElements = function() {
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
                    }, io.prototype.renderFrame = function(t) {
                        if (!(this.renderedFrame === t || this.destroyed)) {
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var e, i = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf)
                                for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }
                    }, io.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            for (var s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), a += 1;
                            s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                        }
                    }, io.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, io.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, g([ex, eF, eO, eD, eB], ih), ih.prototype.initElement = function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
                    }, ih.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                            }
                            var i, s = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                        }
                    }, ih.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, ih.prototype.setElements = function(t) {
                        this.elements = t
                    }, ih.prototype.getElements = function() {
                        return this.elements
                    }, ih.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                    }, ih.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, g([io, ih, eN], il), il.prototype.createComp = function(t) {
                        return new il(t, this.globalData, this)
                    }, g([io], ip), ip.prototype.createComp = function(t) {
                        return new il(t, this.globalData, this)
                    }, tn.svg = ip, tX.registerModifier("tm", tH), tX.registerModifier("pb", tG), tX.registerModifier("rp", tJ), tX.registerModifier("rd", tU), tX.registerModifier("zz", ee), tX.registerModifier("op", ep), tz
                }, "object" == typeof t && "u" > typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : (i = "u" > typeof globalThis ? globalThis : i || self).lottie = s())
            })()
        }
    }
]);