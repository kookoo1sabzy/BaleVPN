/*! For license information please see 7570.f69bba86.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9feb3f8f-e351-41dd-a98b-98cf507efec9", t._sentryDebugIdIdentifier = "sentry-dbid-9feb3f8f-e351-41dd-a98b-98cf507efec9")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7570"], {
        23593: function(t, e, s) {
            s.r(e), s.d(e, {
                default: () => i
            });
            var i = (0, s(25260).a)((t, e) => {
                var s, i;
                "u" > typeof navigator && (s = t, i = function() {
                    var s, i, a, r, n, o, h, l, p, f = "",
                        c = !1,
                        d = function(t) {
                            f = t
                        },
                        m = function() {
                            return f
                        };

                    function u(t) {
                        return document.createElement(t)
                    }

                    function g(t, e) {
                        var s, i, a = t.length;
                        for (s = 0; s < a; s += 1)
                            for (var r in i = t[s].prototype) Object.prototype.hasOwnProperty.call(i, r) && (e.prototype[r] = i[r])
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
                                        var e, s = this.audios.length;
                                        for (e = 0; e < s; e += 1) this.audios[e].setRate(t)
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
                                var s, i = 0,
                                    a = [];
                                switch (t) {
                                    case "int16":
                                    case "uint8c":
                                        s = 1;
                                        break;
                                    default:
                                        s = 1.1
                                }
                                for (i = 0; i < e; i += 1) a.push(s);
                                return a
                            }
                            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, s) {
                                return "float32" === e ? new Float32Array(s) : "int16" === e ? new Int16Array(s) : "uint8c" === e ? new Uint8ClampedArray(s) : t(e, s)
                            } : t
                        }();

                    function b(t) {
                        return Array.apply(null, {
                            length: t
                        })
                    }
                    var _ = !0,
                        C = null,
                        x = "",
                        k = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        S = Math.pow,
                        P = Math.sqrt,
                        D = Math.floor,
                        w = Math.min,
                        A = 150,
                        T = Math.PI / 180;

                    function M(t, e, s, i) {
                        this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1
                    }

                    function F(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1
                    }

                    function E(t, e, s, i) {
                        this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                    }

                    function L(t, e, s) {
                        this.type = t, this.firstFrame = e, this.totalFrames = s
                    }

                    function I(t, e) {
                        this.type = t, this.target = e
                    }

                    function R(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                    }

                    function V(t) {
                        this.type = "configError", this.nativeError = t
                    }
                    var z = (j = 0, function() {
                        return j += 1, x + "__lottie_element_" + j
                    });

                    function O(t, e, s) {
                        var i, a, r, n, o, h, l, p;
                        switch (n = Math.floor(6 * t), o = 6 * t - n, h = s * (1 - e), l = s * (1 - o * e), p = s * (1 - (1 - o) * e), n % 6) {
                            case 0:
                                i = s, a = p, r = h;
                                break;
                            case 1:
                                i = l, a = s, r = h;
                                break;
                            case 2:
                                i = h, a = s, r = p;
                                break;
                            case 3:
                                i = h, a = l, r = s;
                                break;
                            case 4:
                                i = p, a = h, r = s;
                                break;
                            case 5:
                                i = s, a = h, r = l
                        }
                        return [i, a, r]
                    }

                    function N(t, e, s) {
                        var i, a = Math.max(t, e, s),
                            r = Math.min(t, e, s),
                            n = a - r;
                        switch (a) {
                            case r:
                                i = 0;
                                break;
                            case t:
                                i = (e - s + 6 * (e < s) * n) / (6 * n);
                                break;
                            case e:
                                i = (s - t + 2 * n) / (6 * n);
                                break;
                            case s:
                                i = (t - e + 4 * n) / (6 * n)
                        }
                        return [i, 0 === a ? 0 : n / a, a / 255]
                    }

                    function q(t, e) {
                        var s = N(255 * t[0], 255 * t[1], 255 * t[2]);
                        return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), O(s[0], s[1], s[2])
                    }

                    function B(t, e) {
                        var s = N(255 * t[0], 255 * t[1], 255 * t[2]);
                        return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), O(s[0], s[1], s[2])
                    }

                    function W(t, e) {
                        var s = N(255 * t[0], 255 * t[1], 255 * t[2]);
                        return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), O(s[0], s[1], s[2])
                    }
                    var j, Y, J, H = [];
                    for (Y = 0; Y < 256; Y += 1) J = Y.toString(16), H[Y] = 1 === J.length ? "0" + J : J;
                    var X = function(t) {
                            _ = !!t
                        },
                        G = function(t) {
                            C = t
                        },
                        K = function() {
                            return C
                        },
                        U = function(t) {
                            A = t
                        },
                        Z = function() {
                            return A
                        },
                        Q = function(t) {
                            x = t
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
                            var t, e, s = 1,
                                i = [],
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
                                    if (window.Worker && window.Blob && c) {
                                        var s = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                            type: "text/javascript"
                                        });
                                        return new Worker(URL.createObjectURL(s))
                                    }
                                    return t = e, a
                                }(function(t) {
                                    if (r.dataManager || (r.dataManager = function() {
                                            function t(a, r) {
                                                var n, o, h, l, p, f, c = a.length;
                                                for (o = 0; o < c; o += 1)
                                                    if ("ks" in (n = a[o]) && !n.completed) {
                                                        if (n.completed = !0, n.hasMask) {
                                                            var d, m = n.masksProperties;
                                                            for (l = m.length, h = 0; h < l; h += 1)
                                                                if (m[h].pt.k.i) i(m[h].pt.k);
                                                                else
                                                                    for (f = m[h].pt.k.length, p = 0; p < f; p += 1) m[h].pt.k[p].s && i(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && i(m[h].pt.k[p].e[0])
                                                        }
                                                        0 === n.ty ? (n.layers = e(n.refId, r), t(n.layers, r)) : 4 === n.ty ? s(n.shapes) : 5 === n.ty && 0 === (d = n).t.a.length && d.t.p
                                                    }
                                            }

                                            function e(t, e) {
                                                var s = function(t, e) {
                                                    for (var s = 0, i = e.length; s < i;) {
                                                        if (e[s].id === t) return e[s];
                                                        s += 1
                                                    }
                                                    return null
                                                }(t, e);
                                                return s ? s.layers.__used ? JSON.parse(JSON.stringify(s.layers)) : (s.layers.__used = !0, s.layers) : null
                                            }

                                            function s(t) {
                                                var e, a, r;
                                                for (e = t.length - 1; e >= 0; e -= 1)
                                                    if ("sh" === t[e].ty)
                                                        if (t[e].ks.k.i) i(t[e].ks.k);
                                                        else
                                                            for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i(t[e].ks.k[a].e[0]);
                                                else "gr" === t[e].ty && s(t[e].it)
                                            }

                                            function i(t) {
                                                var e, s = t.i.length;
                                                for (e = 0; e < s; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                            }

                                            function a(t, e) {
                                                var s = e ? e.split(".") : [100, 100, 100];
                                                return t[0] > s[0] || !(s[0] > t[0]) && (t[1] > s[1] || !(s[1] > t[1]) && (t[2] > s[2] || !(s[2] > t[2]) && null))
                                            }
                                            var r, n = function() {
                                                    var t = [4, 4, 14];

                                                    function e(t) {
                                                        var e, s = t.length;
                                                        for (e = 0; e < s; e += 1) 5 === t[e].ty && function(t) {
                                                            var e = t.t.d;
                                                            t.t.d = {
                                                                k: [{
                                                                    s: e,
                                                                    t: 0
                                                                }]
                                                            }
                                                        }(t[e])
                                                    }
                                                    return function(s) {
                                                        if (a(t, s.v) && (e(s.layers), s.assets)) {
                                                            var i, r = s.assets.length;
                                                            for (i = 0; i < r; i += 1) s.assets[i].layers && e(s.assets[i].layers)
                                                        }
                                                    }
                                                }(),
                                                o = (r = [4, 7, 99], function(t) {
                                                    if (t.chars && !a(r, t.v)) {
                                                        var e, i = t.chars.length;
                                                        for (e = 0; e < i; e += 1) {
                                                            var n = t.chars[e];
                                                            n.data && n.data.shapes && (s(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
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
                                                        var e, s = t.length;
                                                        for (e = 0; e < s; e += 1) 5 === t[e].ty && function(t) {
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
                                                    return function(s) {
                                                        if (a(t, s.v) && (e(s.layers), s.assets)) {
                                                            var i, r = s.assets.length;
                                                            for (i = 0; i < r; i += 1) s.assets[i].layers && e(s.assets[i].layers)
                                                        }
                                                    }
                                                }(),
                                                l = function() {
                                                    var t = [4, 1, 9];

                                                    function e(t) {
                                                        var e, s = t.length;
                                                        for (e = 0; e < s; e += 1) 4 === t[e].ty && function t(e) {
                                                            var s, i, a, r = e.length;
                                                            for (s = 0; s < r; s += 1)
                                                                if ("gr" === e[s].ty) t(e[s].it);
                                                                else if ("fl" === e[s].ty || "st" === e[s].ty)
                                                                if (e[s].c.k && e[s].c.k[0].i)
                                                                    for (a = e[s].c.k.length, i = 0; i < a; i += 1) e[s].c.k[i].s && (e[s].c.k[i].s[0] /= 255, e[s].c.k[i].s[1] /= 255, e[s].c.k[i].s[2] /= 255, e[s].c.k[i].s[3] /= 255), e[s].c.k[i].e && (e[s].c.k[i].e[0] /= 255, e[s].c.k[i].e[1] /= 255, e[s].c.k[i].e[2] /= 255, e[s].c.k[i].e[3] /= 255);
                                                                else e[s].c.k[0] /= 255, e[s].c.k[1] /= 255, e[s].c.k[2] /= 255, e[s].c.k[3] /= 255
                                                        }(t[e].shapes)
                                                    }
                                                    return function(s) {
                                                        if (a(t, s.v) && (e(s.layers), s.assets)) {
                                                            var i, r = s.assets.length;
                                                            for (i = 0; i < r; i += 1) s.assets[i].layers && e(s.assets[i].layers)
                                                        }
                                                    }
                                                }(),
                                                p = function() {
                                                    var t = [4, 4, 18];

                                                    function e(t) {
                                                        var e, s, i, a, r, n, o = t.length;
                                                        for (s = 0; s < o; s += 1) {
                                                            if ((e = t[s]).hasMask) {
                                                                var h = e.masksProperties;
                                                                for (a = h.length, i = 0; i < a; i += 1)
                                                                    if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                                                    else
                                                                        for (n = h[i].pt.k.length, r = 0; r < n; r += 1) h[i].pt.k[r].s && (h[i].pt.k[r].s[0].c = h[i].cl), h[i].pt.k[r].e && (h[i].pt.k[r].e[0].c = h[i].cl)
                                                            }
                                                            4 === e.ty && function t(e) {
                                                                var s, i, a;
                                                                for (s = e.length - 1; s >= 0; s -= 1)
                                                                    if ("sh" === e[s].ty)
                                                                        if (e[s].ks.k.i) e[s].ks.k.c = e[s].closed;
                                                                        else
                                                                            for (a = e[s].ks.k.length, i = 0; i < a; i += 1) e[s].ks.k[i].s && (e[s].ks.k[i].s[0].c = e[s].closed), e[s].ks.k[i].e && (e[s].ks.k[i].e[0].c = e[s].closed);
                                                                else "gr" === e[s].ty && t(e[s].it)
                                                            }(e.shapes)
                                                        }
                                                    }
                                                    return function(s) {
                                                        if (a(t, s.v) && (e(s.layers), s.assets)) {
                                                            var i, r = s.assets.length;
                                                            for (i = 0; i < r; i += 1) s.assets[i].layers && e(s.assets[i].layers)
                                                        }
                                                    }
                                                }(),
                                                f = {};
                                            return f.completeData = function(s) {
                                                s.__complete || (l(s), n(s), o(s), h(s), p(s), t(s.layers, s.assets), function(s, i) {
                                                    if (s) {
                                                        var a = 0,
                                                            r = s.length;
                                                        for (a = 0; a < r; a += 1) 1 === s[a].t && (s[a].data.layers = e(s[a].data.refId, i), t(s[a].data.layers, i))
                                                    }
                                                }(s.chars, s.assets), s.__complete = !0)
                                            }, f.checkColors = l, f.checkChars = o, f.checkPathProperties = h, f.checkShapes = p, f.completeLayers = t, f
                                        }()), r.assetLoader || (r.assetLoader = function() {
                                            function t(t) {
                                                var e = t.getResponseHeader("content-type");
                                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === tt(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                            }
                                            return {
                                                load: function(e, s, i, a) {
                                                    var r, n = new XMLHttpRequest;
                                                    try {
                                                        n.responseType = "json"
                                                    } catch {}
                                                    n.onreadystatechange = function() {
                                                        if (4 === n.readyState)
                                                            if (200 === n.status) i(r = t(n));
                                                            else try {
                                                                r = t(n), i(r)
                                                            } catch (t) {
                                                                a && a(t)
                                                            }
                                                    };
                                                    try {
                                                        n.open("GET", e, !0)
                                                    } catch {
                                                        n.open("GET", s + "/" + e, !0)
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
                                        s = e.id,
                                        a = i[s];
                                    i[s] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
                                })
                            }

                            function o(t, e) {
                                var a = "processId_" + (s += 1);
                                return i[a] = {
                                    onComplete: t,
                                    onError: e
                                }, a
                            }
                            return {
                                loadAnimation: function(t, s, i) {
                                    n();
                                    var a = o(s, i);
                                    e.postMessage({
                                        type: "loadAnimation",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                loadData: function(t, s, i) {
                                    n();
                                    var a = o(s, i);
                                    e.postMessage({
                                        type: "loadData",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: a
                                    })
                                },
                                completeAnimation: function(t, s, i) {
                                    n();
                                    var a = o(s, i);
                                    e.postMessage({
                                        type: "complete",
                                        animation: t,
                                        id: a
                                    })
                                }
                            }
                        }(),
                        ts = function() {
                            var t, e, s = ((t = u("canvas")).width = 1, t.height = 1, (e = t.getContext("2d")).fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t);

                            function i() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function a() {
                                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function r(t, e, s) {
                                var i = "";
                                if (t.e) i = t.p;
                                else if (e) {
                                    var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
                                } else i = s + (t.u ? t.u : "") + t.p;
                                return i
                            }

                            function n(t) {
                                var e = 0,
                                    s = setInterval((function() {
                                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(s)), e += 1
                                    }).bind(this), 50)
                            }

                            function o(t) {
                                var e = {
                                        assetData: t
                                    },
                                    s = r(t, this.assetsPath, this.path);
                                return te.loadData(s, (function(t) {
                                    e.img = t, this._footageLoaded()
                                }).bind(this), (function() {
                                    e.img = {}, this._footageLoaded()
                                }).bind(this)), e
                            }

                            function h() {
                                this._imageLoaded = i.bind(this), this._footageLoaded = a.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return h.prototype = {
                                loadAssets: function(t, e) {
                                    this.imagesLoadedCb = e;
                                    var s, i = t.length;
                                    for (s = 0; s < i; s += 1) t[s].layers || (t[s].t && "seq" !== t[s].t ? 3 === t[s].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[s]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[s]))))
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
                                    for (var e = 0, s = this.images.length; e < s;) {
                                        if (this.images[e].assetData === t) return this.images[e].img;
                                        e += 1
                                    }
                                    return null
                                },
                                createImgData: function(t) {
                                    var e = r(t, this.assetsPath, this.path),
                                        i = u("img");
                                    i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", (function() {
                                        a.img = s, this._imageLoaded()
                                    }).bind(this), !1), i.src = e;
                                    var a = {
                                        img: i,
                                        assetData: t
                                    };
                                    return a
                                },
                                createImageData: function(t) {
                                    var e = r(t, this.assetsPath, this.path),
                                        i = $("image");
                                    k ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", (function() {
                                        a.img = s, this._imageLoaded()
                                    }).bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                                    var a = {
                                        img: i,
                                        assetData: t
                                    };
                                    return a
                                },
                                imageLoaded: i,
                                footageLoaded: a,
                                setCacheType: function(t, e) {
                                    "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                }
                            }, h
                        }();

                    function ti() {}
                    ti.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t])
                                for (var s = this._cbs[t], i = 0; i < s.length; i += 1) s[i](e)
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                                this.removeEventListener(t, e)
                            }).bind(this)
                        },
                        removeEventListener: function(t, e) {
                            if (e) {
                                if (this._cbs[t]) {
                                    for (var s = 0, i = this._cbs[t].length; s < i;) this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
                                    this._cbs[t].length || (this._cbs[t] = null)
                                }
                            } else this._cbs[t] = null
                        }
                    };
                    var ta = function(t) {
                            for (var e = [], s = 0; s < t.length; s += 1) {
                                var i = t[s],
                                    a = {
                                        time: i.tm,
                                        duration: i.dr
                                    };
                                try {
                                    a.payload = JSON.parse(t[s].cm)
                                } catch {
                                    try {
                                        a.payload = function(t) {
                                            for (var e, s = t.split(`\r
`), i = {}, a = 0, r = 0; r < s.length; r += 1) 2 === (e = s[r].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
                                            if (0 === a) throw Error();
                                            return i
                                        }(t[s].cm)
                                    } catch {
                                        a.payload = {
                                            name: t[s].cm
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
                                    for (var e = 0, s = this.compositions.length; e < s;) {
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
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = z(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = _, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = tr(), this.imagePreloader = new ts, this.audioController = y(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new M("drawnFrame", 0, 0, 0), this.expressionsPlugin = K()
                    };
                    g([ti], th), th.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                        var s = tn[e];
                        this.renderer = new s(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), te.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                    }, th.prototype.onSetupError = function() {
                        this.trigger("data_failed")
                    }, th.prototype.setupAnimation = function(t) {
                        te.completeAnimation(t, this.configAnimation)
                    }, th.prototype.setData = function(t, e) {
                        e && "object" !== to(e) && (e = JSON.parse(e));
                        var s = {
                                wrapper: t,
                                animationData: e
                            },
                            i = t.attributes;
                        s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : function() {
                            if (tn.canvas) return "canvas";
                            for (var t in tn)
                                if (tn[t]) return t;
                            return ""
                        }() || "canvas";
                        var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                        "false" === a ? s.loop = !1 : "true" === a ? s.loop = !0 : "" !== a && (s.loop = parseInt(a, 10)), s.autoplay = "false" !== (i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value), s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (s.prerender = !1), s.path ? this.setParams(s) : this.trigger("destroy")
                    }, th.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        var e, s, i = this.animationData.layers,
                            a = i.length,
                            r = t.layers,
                            n = r.length;
                        for (s = 0; s < n; s += 1)
                            for (e = 0; e < a;) {
                                if (i[e].id === r[s].id) {
                                    i[e] = r[s];
                                    break
                                }
                                e += 1
                            }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                            for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                        this.animationData.__complete = !1, te.completeAnimation(this.animationData, this.onSegmentComplete)
                    }, th.prototype.onSegmentComplete = function(t) {
                        this.animationData = t;
                        var e = K();
                        e && e.initExpressions(this), this.loadNextSegment()
                    }, th.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || 0 === t.length || !this.autoloadSegments) {
                            this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                            return
                        }
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, te.loadData(s, this.includeLayers.bind(this), (function() {
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
                            var t = K();
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
                        for (var e, s = 0; s < this.markers.length; s += 1)
                            if ((e = this.markers[s]).payload && e.payload.name === t) return e;
                        return null
                    }, th.prototype.goToAndStop = function(t, e, s) {
                        if (!(s && this.name !== s)) {
                            if (isNaN(Number(t))) {
                                var i = this.getMarkerData(t);
                                i && this.goToAndStop(i.time, !0)
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause()
                        }
                    }, th.prototype.goToAndPlay = function(t, e, s) {
                        if (!(s && this.name !== s)) {
                            var i = Number(t);
                            if (isNaN(i)) {
                                var a = this.getMarkerData(t);
                                a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                            } else this.goToAndStop(i, e, s);
                            this.play()
                        }
                    }, th.prototype.advanceTime = function(t) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var e = this.currentRawFrame + t * this.frameModifier,
                                s = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (s = !0, e = 0)) : this.setCurrentRawFrameValue(e), s && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                        }
                    }, th.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                    }, th.prototype.setSegment = function(t, e) {
                        var s = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== s && this.goToAndStop(s, !0)
                    }, th.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" === to(t[0])) {
                            var s, i = t.length;
                            for (s = 0; s < i; s += 1) this.segments.push(t[s])
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
                            var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
                        } else e = this.path + (t.u ? t.u : "") + t.p;
                        return e
                    }, th.prototype.getAssetData = function(t) {
                        for (var e = 0, s = this.assets.length; e < s;) {
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
                    }, th.prototype.updateDocumentData = function(t, e, s) {
                        try {
                            this.renderer.getElementByPath(t).updateDocumentData(e, s)
                        } catch {}
                    }, th.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                            case "enterFrame":
                                this.triggerEvent(t, new M(t, this.currentFrame, this.totalFrames, this.frameModifier));
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
                                this.triggerEvent(t, new L(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new I(t, this));
                                break;
                            default:
                                this.triggerEvent(t)
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new M(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new E(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new F(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new L(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new I(t, this))
                    }, th.prototype.triggerRenderFrameError = function(t) {
                        var e = new R(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    }, th.prototype.triggerConfigError = function(t) {
                        var e = new V(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    };
                    var tl = function() {
                            var t = {},
                                e = [],
                                s = 0,
                                i = 0,
                                a = 0,
                                r = !0,
                                n = !1;

                            function o(t) {
                                for (var s = 0, a = t.target; s < i;) e[s].animation === a && (e.splice(s, 1), s -= 1, i -= 1, a.isPaused || p()), s += 1
                            }

                            function h(t, s) {
                                if (!t) return null;
                                for (var a = 0; a < i;) {
                                    if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                                    a += 1
                                }
                                var r = new th;
                                return f(r, t), r.setData(t, s), r
                            }

                            function l() {
                                a += 1, m()
                            }

                            function p() {
                                a -= 1
                            }

                            function f(t, s) {
                                t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                    elem: s,
                                    animation: t
                                }), i += 1
                            }

                            function c(t) {
                                var o, h = t - s;
                                for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
                                s = t, a && !n ? window.requestAnimationFrame(c) : r = !0
                            }

                            function d(t) {
                                s = t, window.requestAnimationFrame(c)
                            }

                            function m() {
                                !n && a && r && (window.requestAnimationFrame(d), r = !1)
                            }
                            return t.registerAnimation = h, t.loadAnimation = function(t) {
                                var e = new th;
                                return f(e, null), e.setParams(t), e
                            }, t.setSpeed = function(t, s) {
                                var a;
                                for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, s)
                            }, t.setDirection = function(t, s) {
                                var a;
                                for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, s)
                            }, t.play = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.play(t)
                            }, t.pause = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.pause(t)
                            }, t.stop = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.stop(t)
                            }, t.togglePause = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.togglePause(t)
                            }, t.searchAnimations = function(t, e, s) {
                                var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    r = a.length;
                                for (i = 0; i < r; i += 1) s && a[i].setAttribute("data-bm-type", s), h(a[i], t);
                                if (e && 0 === r) {
                                    s || (s = "svg");
                                    var n = document.getElementsByTagName("body")[0];
                                    n.innerText = "";
                                    var o = u("div");
                                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", s), n.appendChild(o), h(o, t)
                                }
                            }, t.resize = function() {
                                var t;
                                for (t = 0; t < i; t += 1) e[t].animation.resize()
                            }, t.goToAndStop = function(t, s, a) {
                                var r;
                                for (r = 0; r < i; r += 1) e[r].animation.goToAndStop(t, s, a)
                            }, t.destroy = function(t) {
                                var s;
                                for (s = i - 1; s >= 0; s -= 1) e[s].animation.destroy(t)
                            }, t.freeze = function() {
                                n = !0
                            }, t.unfreeze = function() {
                                n = !1, m()
                            }, t.setVolume = function(t, s) {
                                var a;
                                for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, s)
                            }, t.mute = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.mute(t)
                            }, t.unmute = function(t) {
                                var s;
                                for (s = 0; s < i; s += 1) e[s].animation.unmute(t)
                            }, t.getRegisteredAnimations = function() {
                                var t, s = e.length,
                                    i = [];
                                for (t = 0; t < s; t += 1) i.push(e[t].animation);
                                return i
                            }, t
                        }(),
                        tp = function() {
                            var t = {};
                            t.getBezierEasing = function(t, s, i, a, n) {
                                var o = n || ("bez_" + t + "_" + s + "_" + i + "_" + a).replace(/\./g, "p");
                                if (e[o]) return e[o];
                                var h = new r([t, s, i, a]);
                                return e[o] = h, h
                            };
                            var e = {},
                                s = "function" == typeof Float32Array;

                            function i(t, e, s) {
                                return (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t
                            }

                            function a(t, e, s) {
                                return 3 * (1 - 3 * s + 3 * e) * t * t + 2 * (3 * s - 6 * e) * t + 3 * e
                            }

                            function r(t) {
                                this._p = t, this._mSampleValues = s ? new Float32Array(11) : Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                            }
                            return r.prototype = {
                                get: function(t) {
                                    var e = this._p[0],
                                        s = this._p[1],
                                        a = this._p[2],
                                        r = this._p[3];
                                    return this._precomputed || this._precompute(), e === s && a === r ? t : 0 === t ? 0 : 1 === t ? 1 : i(this._getTForX(t), s, r)
                                },
                                _precompute: function() {
                                    var t = this._p[0],
                                        e = this._p[1],
                                        s = this._p[2],
                                        i = this._p[3];
                                    this._precomputed = !0, (t !== e || s !== i) && this._calcSampleValues()
                                },
                                _calcSampleValues: function() {
                                    for (var t = this._p[0], e = this._p[2], s = 0; s < 11; ++s) this._mSampleValues[s] = i(.1 * s, t, e)
                                },
                                _getTForX: function(t) {
                                    for (var e = this._p[0], s = this._p[2], r = this._mSampleValues, n = 0, o = 1; 10 !== o && r[o] <= t; ++o) n += .1;
                                    var h = n + (t - r[--o]) / (r[o + 1] - r[o]) * .1,
                                        l = a(h, e, s);
                                    return l >= .001 ? function(t, e, s, r) {
                                        for (var n = 0; n < 4; ++n) {
                                            var o = a(e, s, r);
                                            if (0 === o) break;
                                            var h = i(e, s, r) - t;
                                            e -= h / o
                                        }
                                        return e
                                    }(t, h, e, s) : 0 === l ? h : function(t, e, s, a, r) {
                                        var n, o, h = 0;
                                        do(n = i(o = e + (s - e) / 2, a, r) - t) > 0 ? s = o : e = o; while (Math.abs(n) > 1e-7 && ++h < 10);
                                        return o
                                    }(t, n, n + .1, e, s)
                                }
                            }, t
                        }(),
                        tf = function(t) {
                            return t.concat(b(t.length))
                        },
                        tc = function(t, e, s) {
                            var i = 0,
                                a = t,
                                r = b(a);
                            return {
                                newElement: function() {
                                    var t;
                                    return i ? (i -= 1, t = r[i]) : t = e(), t
                                },
                                release: function(t) {
                                    i === a && (r = tf(r), a *= 2), s && s(t), r[i] = t, i += 1
                                }
                            }
                        },
                        td = tc(8, function() {
                            return {
                                addedLength: 0,
                                percents: v("float32", Z()),
                                lengths: v("float32", Z())
                            }
                        }),
                        tm = tc(8, function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }, function(t) {
                            var e, s = t.lengths.length;
                            for (e = 0; e < s; e += 1) td.release(t.lengths[e]);
                            t.lengths.length = 0
                        }),
                        tu = function() {
                            var t, e = Math;

                            function s(t, e, s, i, a, r) {
                                var n = t * i + e * a + s * r - a * i - r * t - s * e;
                                return n > -.001 && n < .001
                            }
                            var i = function(t, e, s, i) {
                                var a, r, n, o, h, l, p = Z(),
                                    f = 0,
                                    c = [],
                                    d = [],
                                    m = td.newElement();
                                for (n = s.length, a = 0; a < p; a += 1) {
                                    for (h = a / (p - 1), l = 0, r = 0; r < n; r += 1) o = S(1 - h, 3) * t[r] + 3 * S(1 - h, 2) * h * s[r] + 3 * (1 - h) * S(h, 2) * i[r] + S(h, 3) * e[r], c[r] = o, null !== d[r] && (l += S(c[r] - d[r], 2)), d[r] = c[r];
                                    l && (f += l = P(l)), m.percents[a] = h, m.lengths[a] = f
                                }
                                return m.addedLength = f, m
                            };

                            function a(t) {
                                this.segmentLength = 0, this.points = Array(t)
                            }

                            function r(t, e) {
                                this.partialLength = t, this.point = e
                            }
                            var n = (t = {}, function(e, i, n, o) {
                                var h = (e[0] + "_" + e[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                                if (!t[h]) {
                                    var l, p, f, c, d, m, u, g = Z(),
                                        y = 0,
                                        v = null;
                                    2 === e.length && (e[0] !== i[0] || e[1] !== i[1]) && s(e[0], e[1], i[0], i[1], e[0] + n[0], e[1] + n[1]) && s(e[0], e[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                                    var _ = new a(g);
                                    for (f = n.length, l = 0; l < g; l += 1) {
                                        for (u = b(f), d = l / (g - 1), m = 0, p = 0; p < f; p += 1) c = S(1 - d, 3) * e[p] + 3 * S(1 - d, 2) * d * (e[p] + n[p]) + 3 * (1 - d) * S(d, 2) * (i[p] + o[p]) + S(d, 3) * i[p], u[p] = c, null !== v && (m += S(u[p] - v[p], 2));
                                        y += m = P(m), _.points[l] = new r(m, u), v = u
                                    }
                                    _.segmentLength = y, t[h] = _
                                }
                                return t[h]
                            });

                            function o(t, e) {
                                var s = e.percents,
                                    i = e.lengths,
                                    a = s.length,
                                    r = D((a - 1) * t),
                                    n = t * e.addedLength,
                                    o = 0;
                                if (r === a - 1 || 0 === r || n === i[r]) return s[r];
                                for (var h = i[r] > n ? -1 : 1, l = !0; l;)
                                    if (i[r] <= n && i[r + 1] > n ? (o = (n - i[r]) / (i[r + 1] - i[r]), l = !1) : r += h, r < 0 || r >= a - 1) {
                                        if (r === a - 1) return s[r];
                                        l = !1
                                    } return s[r] + (s[r + 1] - s[r]) * o
                            }
                            var h = v("float32", 8);
                            return {
                                getSegmentsLength: function(t) {
                                    var e, s = tm.newElement(),
                                        a = t.c,
                                        r = t.v,
                                        n = t.o,
                                        o = t.i,
                                        h = t._length,
                                        l = s.lengths,
                                        p = 0;
                                    for (e = 0; e < h - 1; e += 1) l[e] = i(r[e], r[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                                    return a && h && (l[e] = i(r[e], r[0], n[e], o[0]), p += l[e].addedLength), s.totalLength = p, s
                                },
                                getNewSegment: function(t, s, i, a, r, n, l) {
                                    r < 0 ? r = 0 : r > 1 && (r = 1);
                                    var p, f = o(r, l),
                                        c = o(n = n > 1 ? 1 : n, l),
                                        d = t.length,
                                        m = 1 - f,
                                        u = 1 - c,
                                        g = m * m * m,
                                        y = f * m * m * 3,
                                        v = f * f * m * 3,
                                        b = f * f * f,
                                        _ = m * m * u,
                                        C = f * m * u + m * f * u + m * m * c,
                                        x = f * f * u + m * f * c + f * m * c,
                                        k = f * f * c,
                                        S = m * u * u,
                                        P = f * u * u + m * c * u + m * u * c,
                                        D = f * c * u + m * c * c + f * u * c,
                                        w = f * c * c,
                                        A = u * u * u,
                                        T = c * u * u + u * c * u + u * u * c,
                                        M = c * c * u + u * c * c + c * u * c,
                                        F = c * c * c;
                                    for (p = 0; p < d; p += 1) h[4 * p] = e.round((g * t[p] + y * i[p] + v * a[p] + b * s[p]) * 1e3) / 1e3, h[4 * p + 1] = e.round((_ * t[p] + C * i[p] + x * a[p] + k * s[p]) * 1e3) / 1e3, h[4 * p + 2] = e.round((S * t[p] + P * i[p] + D * a[p] + w * s[p]) * 1e3) / 1e3, h[4 * p + 3] = e.round((A * t[p] + T * i[p] + M * a[p] + F * s[p]) * 1e3) / 1e3;
                                    return h
                                },
                                getPointInSegment: function(t, s, i, a, r, n) {
                                    var h = o(r, n),
                                        l = 1 - h;
                                    return [e.round((l * l * l * t[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * s[0]) * 1e3) / 1e3, e.round((l * l * l * t[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * s[1]) * 1e3) / 1e3]
                                },
                                buildBezierData: n,
                                pointOnLine2D: s,
                                pointOnLine3D: function(t, i, a, r, n, o, h, l, p) {
                                    if (0 === a && 0 === o && 0 === p) return s(t, i, r, n, h, l);
                                    var f, c = e.sqrt(e.pow(r - t, 2) + e.pow(n - i, 2) + e.pow(o - a, 2)),
                                        d = e.sqrt(e.pow(h - t, 2) + e.pow(l - i, 2) + e.pow(p - a, 2)),
                                        m = e.sqrt(e.pow(h - r, 2) + e.pow(l - n, 2) + e.pow(p - o, 2));
                                    return (f = c > d ? c > m ? c - d - m : m - d - c : m > d ? m - d - c : d - c - m) > -1e-4 && f < 1e-4
                                }
                            }
                        }(),
                        tg = Math.abs;

                    function ty(t, e) {
                        var s, i, a, r, n, o, h, l, p, f, c, d, m, u, g, y, b, _, C, x, k, S, P, D, w, A, M, F, E, L, I, R, V = this.offsetTime;
                        "multidimensional" === this.propType && (R = v("float32", this.pv.length));
                        for (var z, O, N, q = e.lastIndex, B = q, W = this.keyframes.length - 1, j = !0; j;) {
                            if (z = this.keyframes[B], O = this.keyframes[B + 1], B === W - 1 && t >= O.t - V) {
                                z.h && (z = O), q = 0;
                                break
                            }
                            if (O.t - V > t) {
                                q = B;
                                break
                            }
                            B < W - 1 ? B += 1 : (q = 0, j = !1)
                        }
                        N = this.keyframesMetadata[B] || {};
                        var Y, J, H, X, G, K, U, Z = O.t - V,
                            Q = z.t - V;
                        if (z.to) {
                            N.bezierData || (N.bezierData = tu.buildBezierData(z.s, O.s || z.e, z.to, z.ti));
                            var $ = N.bezierData;
                            if (t >= Z || t < Q) {
                                var tt = t >= Z ? $.points.length - 1 : 0;
                                for (J = $.points[tt].point.length, Y = 0; Y < J; Y += 1) R[Y] = $.points[tt].point[Y]
                            } else {
                                N.__fnct ? K = N.__fnct : N.__fnct = K = tp.getBezierEasing(z.o.x, z.o.y, z.i.x, z.i.y, z.n).get, H = K((t - Q) / (Z - Q));
                                var te, ts = $.segmentLength * H,
                                    ti = e.lastFrame < t && e._lastKeyframeIndex === B ? e._lastAddedLength : 0;
                                for (G = e.lastFrame < t && e._lastKeyframeIndex === B ? e._lastPoint : 0, j = !0, X = $.points.length; j;) {
                                    if (ti += $.points[G].partialLength, 0 === ts || 0 === H || G === $.points.length - 1) {
                                        for (J = $.points[G].point.length, Y = 0; Y < J; Y += 1) R[Y] = $.points[G].point[Y];
                                        break
                                    }
                                    if (ts >= ti && ts < ti + $.points[G + 1].partialLength) {
                                        for (te = (ts - ti) / $.points[G + 1].partialLength, J = $.points[G].point.length, Y = 0; Y < J; Y += 1) R[Y] = $.points[G].point[Y] + ($.points[G + 1].point[Y] - $.points[G].point[Y]) * te;
                                        break
                                    }
                                    G < X - 1 ? G += 1 : j = !1
                                }
                                e._lastPoint = G, e._lastAddedLength = ti - $.points[G].partialLength, e._lastKeyframeIndex = B
                            }
                        } else if (W = z.s.length, U = O.s || z.e, this.sh && 1 !== z.h) {
                            t >= Z ? (R[0] = U[0], R[1] = U[1], R[2] = U[2]) : t <= Q ? (R[0] = z.s[0], R[1] = z.s[1], R[2] = z.s[2]) : (_ = R, x = (C = (s = tv(z.s), i = tv(U), a = (t - Q) / (Z - Q), p = [], f = s[0], c = s[1], d = s[2], m = s[3], u = i[0], g = i[1], y = i[2], (n = f * u + c * g + d * y + m * (b = i[3])) < 0 && (n = -n, u = -u, g = -g, y = -y, b = -b), 1 - n > 1e-6 ? (o = Math.sin(r = Math.acos(n)), h = Math.sin((1 - a) * r) / o, l = Math.sin(a * r) / o) : (h = 1 - a, l = a), p[0] = h * f + l * u, p[1] = h * c + l * g, p[2] = h * d + l * y, p[3] = h * m + l * b, p))[0], k = C[1], S = C[2], D = Math.atan2(2 * k * (P = C[3]) - 2 * x * S, 1 - 2 * k * k - 2 * S * S), w = Math.asin(2 * x * k + 2 * S * P), A = Math.atan2(2 * x * P - 2 * k * S, 1 - 2 * x * x - 2 * S * S), _[0] = D / T, _[1] = w / T, _[2] = A / T)
                        } else
                            for (B = 0; B < W; B += 1) 1 !== z.h && (t >= Z ? H = 1 : t < Q ? H = 0 : (z.o.x.constructor === Array ? (N.__fnct || (N.__fnct = []), N.__fnct[B] ? K = N.__fnct[B] : (M = void 0 === z.o.x[B] ? z.o.x[0] : z.o.x[B], F = void 0 === z.o.y[B] ? z.o.y[0] : z.o.y[B], E = void 0 === z.i.x[B] ? z.i.x[0] : z.i.x[B], L = void 0 === z.i.y[B] ? z.i.y[0] : z.i.y[B], K = tp.getBezierEasing(M, F, E, L).get, N.__fnct[B] = K)) : N.__fnct ? K = N.__fnct : (M = z.o.x, F = z.o.y, E = z.i.x, L = z.i.y, K = tp.getBezierEasing(M, F, E, L).get, z.keyframeMetadata = K), H = K((t - Q) / (Z - Q)))), U = O.s || z.e, I = 1 === z.h ? z.s[B] : z.s[B] + (U[B] - z.s[B]) * H, "multidimensional" === this.propType ? R[B] = I : R = I;
                        return e.lastIndex = q, R
                    }

                    function tv(t) {
                        var e = t[0] * T,
                            s = t[1] * T,
                            i = t[2] * T,
                            a = Math.cos(e / 2),
                            r = Math.cos(s / 2),
                            n = Math.cos(i / 2),
                            o = Math.sin(e / 2),
                            h = Math.sin(s / 2),
                            l = Math.sin(i / 2);
                        return [o * h * n + a * r * l, o * r * n + a * h * l, a * h * n - o * r * l, a * r * n - o * h * l]
                    }

                    function tb() {
                        var t = this.comp.renderedFrame - this.offsetTime,
                            e = this.keyframes[0].t - this.offsetTime,
                            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(t === this._caching.lastFrame || -999999 !== this._caching.lastFrame && (this._caching.lastFrame >= s && t >= s || this._caching.lastFrame < e && t < e))) {
                            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var i = this.interpolateValue(t, this._caching);
                            this.pv = i
                        }
                        return this._caching.lastFrame = t, this.pv
                    }

                    function t_(t) {
                        var e;
                        if ("unidimensional" === this.propType) e = t * this.mult, tg(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                        else
                            for (var s = 0, i = this.v.length; s < i;) e = t[s] * this.mult, tg(this.v[s] - e) > 1e-5 && (this.v[s] = e, this._mdf = !0), s += 1
                    }

                    function tC() {
                        if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                            if (this.lock) return void this.setVValue(this.pv);
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length,
                                s = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) s = this.effectsSequence[t](s);
                            this.setVValue(s), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function tx(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function tk(t, e, s, i) {
                        this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = tC, this.setVValue = t_, this.addEffect = tx
                    }

                    function tS(t, e, s, i) {
                        this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var a, r = e.k.length;
                        for (this.v = v("float32", r), this.pv = v("float32", r), this.vel = v("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = tC, this.setVValue = t_, this.addEffect = tx
                    }

                    function tP(t, e, s, i) {
                        this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = e, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = -999999, this.pv = -999999, this._isFirstFrame = !0, this.getValue = tC, this.setVValue = t_, this.interpolateValue = ty, this.effectsSequence = [tb.bind(this)], this.addEffect = tx
                    }

                    function tD(t, e, s, i) {
                        this.propType = "multidimensional";
                        var a, r, n, o, h, l = e.k.length;
                        for (a = 0; a < l - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, h = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && tu.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + o[0], r[1] + o[1]) && tu.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && tu.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + o[0], r[1] + o[1], r[2] + o[2]) && tu.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === r.length || r[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[a].to = null, e.k[a].ti = null));
                        this.effectsSequence = [tb.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = tC, this.setVValue = t_, this.interpolateValue = ty, this.frameId = -1;
                        var p = e.k[0].s.length;
                        for (this.v = v("float32", p), this.pv = v("float32", p), a = 0; a < p; a += 1) this.v[a] = -999999, this.pv[a] = -999999;
                        this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0,
                            value: v("float32", p)
                        }, this.addEffect = tx
                    }
                    var tw = {
                        getProp: function(t, e, s, i, a) {
                            var r;
                            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                                if ("number" == typeof e.k[0]) r = new tS(t, e, i, a);
                                else switch (s) {
                                    case 0:
                                        r = new tP(t, e, i, a);
                                        break;
                                    case 1:
                                        r = new tD(t, e, i, a)
                                } else r = new tk(t, e, i, a);
                            return r.effectsSequence.length && a.addDynamicProperty(r), r
                        }
                    };

                    function tA() {}
                    tA.prototype = {
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

                    function tM() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = b(this._maxLength), this.o = b(this._maxLength), this.i = b(this._maxLength)
                    }
                    tM.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var s = 0; s < e;) this.v[s] = tT.newElement(), this.o[s] = tT.newElement(), this.i[s] = tT.newElement(), s += 1
                    }, tM.prototype.setLength = function(t) {
                        for (; this._maxLength < t;) this.doubleArrayLength();
                        this._length = t
                    }, tM.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(b(this._maxLength)), this.i = this.i.concat(b(this._maxLength)), this.o = this.o.concat(b(this._maxLength)), this._maxLength *= 2
                    }, tM.prototype.setXYAt = function(t, e, s, i, a) {
                        var r;
                        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s) {
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
                        r[i] && (!r[i] || a) || (r[i] = tT.newElement()), r[i][0] = t, r[i][1] = e
                    }, tM.prototype.setTripleAt = function(t, e, s, i, a, r, n, o) {
                        this.setXYAt(t, e, "v", n, o), this.setXYAt(s, i, "o", n, o), this.setXYAt(a, r, "i", n, o)
                    }, tM.prototype.reverse = function() {
                        var t = new tM;
                        t.setPathData(this.c, this._length);
                        var e = this.v,
                            s = this.o,
                            i = this.i,
                            a = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), a = 1);
                        var r, n = this._length - 1,
                            o = this._length;
                        for (r = a; r < o; r += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], s[n][0], s[n][1], r, !1), n -= 1;
                        return t
                    }, tM.prototype.length = function() {
                        return this._length
                    };
                    var tF = ((s = tc(4, function() {
                        return new tM
                    }, function(t) {
                        var e, s = t._length;
                        for (e = 0; e < s; e += 1) tT.release(t.v[e]), tT.release(t.i[e]), tT.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    })).clone = function(t) {
                        var e, i = s.newElement(),
                            a = void 0 === t._length ? t.v.length : t._length;
                        for (i.setLength(a), i.c = t.c, e = 0; e < a; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return i
                    }, s);

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
                    var tL = (i = 0, a = 4, r = b(4), {
                            newShapeCollection: function() {
                                var t;
                                return i ? (i -= 1, t = r[i]) : t = new tE, t
                            },
                            release: function(t) {
                                var e, s = t._length;
                                for (e = 0; e < s; e += 1) tF.release(t.shapes[e]);
                                t._length = 0, i === a && (r = tf(r), a *= 2), r[i] = t, i += 1
                            }
                        }),
                        tI = function() {
                            function t(t, e, s) {
                                var i, a, r, n, o, h, l, p, f, c = s.lastIndex,
                                    d = this.keyframes;
                                if (t < d[0].t - this.offsetTime) i = d[0].s[0], r = !0, c = 0;
                                else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], r = !0;
                                else {
                                    for (var m, u, g, y, v = c, b = d.length - 1, _ = !0; _ && (u = d[v], !((g = d[v + 1]).t - this.offsetTime > t));) v < b - 1 ? v += 1 : _ = !1;
                                    y = this.keyframesMetadata[v] || {}, r = 1 === u.h, c = v, r || (t >= g.t - this.offsetTime ? p = 1 : t < u.t - this.offsetTime ? p = 0 : (y.__fnct ? m = y.__fnct : y.__fnct = m = tp.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, p = m((t - (u.t - this.offsetTime)) / (g.t - this.offsetTime - (u.t - this.offsetTime)))), a = g.s ? g.s[0] : u.e[0]), i = u.s[0]
                                }
                                for (h = e._length, l = i.i[0].length, s.lastIndex = c, n = 0; n < h; n += 1)
                                    for (o = 0; o < l; o += 1) f = r ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = f, f = r ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = f, f = r ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = f
                            }

                            function e() {
                                var t = this.comp.renderedFrame - this.offsetTime,
                                    e = this.keyframes[0].t - this.offsetTime,
                                    s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    i = this._caching.lastFrame;
                                return -999999 !== i && (i < e && t < e || i > s && t > s) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                            }

                            function s() {
                                this.paths = this.localShapeCollection
                            }

                            function i(t) {
                                (function(t, e) {
                                    if (t._length !== e._length || t.c !== e.c) return !1;
                                    var s, i = t._length;
                                    for (s = 0; s < i; s += 1)
                                        if (t.v[s][0] !== e.v[s][0] || t.v[s][1] !== e.v[s][1] || t.o[s][0] !== e.o[s][0] || t.o[s][1] !== e.o[s][1] || t.i[s][0] !== e.i[s][0] || t.i[s][1] !== e.i[s][1]) return !1;
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
                                        s = this.effectsSequence.length;
                                    for (t = 0; t < s; t += 1) e = this.effectsSequence[t](e);
                                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }

                            function r(t, e, i) {
                                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                var a = 3 === i ? e.pt.k : e.ks.k;
                                this.v = tF.clone(a), this.pv = tF.clone(this.v), this.localShapeCollection = tL.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
                            }

                            function n(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function o(t, i, a) {
                                this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                var r = this.keyframes[0].s[0].i.length;
                                this.v = tF.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, r), this.pv = tF.clone(this.v), this.localShapeCollection = tL.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = s, this._caching = {
                                    lastFrame: -999999,
                                    lastIndex: 0
                                }, this.effectsSequence = [e.bind(this)]
                            }
                            r.prototype.interpolateShape = t, r.prototype.getValue = a, r.prototype.setVValue = i, r.prototype.addEffect = n, o.prototype.getValue = a, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = n;
                            var h = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = tL.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = tw.getProp(t, e.p, 1, 0, this), this.s = tw.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                    }
                                    return t.prototype = {
                                        reset: s,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                        },
                                        convertEllToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                s = this.s.v[0] / 2,
                                                i = this.s.v[1] / 2,
                                                a = 3 !== this.d,
                                                r = this.v;
                                            r.v[0][0] = t, r.v[0][1] = e - i, r.v[1][0] = a ? t + s : t - s, r.v[1][1] = e, r.v[2][0] = t, r.v[2][1] = e + i, r.v[3][0] = a ? t - s : t + s, r.v[3][1] = e, r.i[0][0] = a ? t - .5519 * s : t + .5519 * s, r.i[0][1] = e - i, r.i[1][0] = a ? t + s : t - s, r.i[1][1] = e - .5519 * i, r.i[2][0] = a ? t + .5519 * s : t - .5519 * s, r.i[2][1] = e + i, r.i[3][0] = a ? t - s : t + s, r.i[3][1] = e + .5519 * i, r.o[0][0] = a ? t + .5519 * s : t - .5519 * s, r.o[0][1] = e - i, r.o[1][0] = a ? t + s : t - s, r.o[1][1] = e + .5519 * i, r.o[2][0] = a ? t - .5519 * s : t + .5519 * s, r.o[2][1] = e + i, r.o[3][0] = a ? t - s : t + s, r.o[3][1] = e - .5519 * i
                                        }
                                    }, g([tA], t), t
                                }(),
                                l = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = tw.getProp(t, e.ir, 0, 0, this), this.is = tw.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = tw.getProp(t, e.pt, 0, 0, this), this.p = tw.getProp(t, e.p, 1, 0, this), this.r = tw.getProp(t, e.r, 0, T, this), this.or = tw.getProp(t, e.or, 0, 0, this), this.os = tw.getProp(t, e.os, 0, .01, this), this.localShapeCollection = tL.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                    }
                                    return t.prototype = {
                                        reset: s,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                        },
                                        convertStarToPath: function() {
                                            var t, e, s, i, a = 2 * Math.floor(this.pt.v),
                                                r = 2 * Math.PI / a,
                                                n = !0,
                                                o = this.or.v,
                                                h = this.ir.v,
                                                l = this.os.v,
                                                p = this.is.v,
                                                f = 2 * Math.PI * o / (2 * a),
                                                c = 2 * Math.PI * h / (2 * a),
                                                d = -Math.PI / 2;
                                            d += this.r.v;
                                            var m = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, t = 0; t < a; t += 1) {
                                                e = n ? o : h, s = n ? l : p, i = n ? f : c;
                                                var u = e * Math.cos(d),
                                                    g = e * Math.sin(d),
                                                    y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                    v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                                u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * i * s * m, g - v * i * s * m, u + y * i * s * m, g + v * i * s * m, t, !0), n = !n, d += r * m
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var t, e = Math.floor(this.pt.v),
                                                s = 2 * Math.PI / e,
                                                i = this.or.v,
                                                a = this.os.v,
                                                r = 2 * Math.PI * i / (4 * e),
                                                n = -(.5 * Math.PI),
                                                o = 3 === this.data.d ? -1 : 1;
                                            for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                var h = i * Math.cos(n),
                                                    l = i * Math.sin(n),
                                                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                    f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * r * a * o, l - f * r * a * o, h + p * r * a * o, l + f * r * a * o, t, !0), n += s * o
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, g([tA], t), t
                                }(),
                                p = function() {
                                    function t(t, e) {
                                        this.v = tF.newElement(), this.v.c = !0, this.localShapeCollection = tL.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = tw.getProp(t, e.p, 1, 0, this), this.s = tw.getProp(t, e.s, 1, 0, this), this.r = tw.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return t.prototype = {
                                        convertRectToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                s = this.s.v[0] / 2,
                                                i = this.s.v[1] / 2,
                                                a = w(s, i, this.r.v),
                                                r = .44810000000000005 * a;
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + a, t + s, e - i + r, 0, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - r, t + s, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e + i, t + s - a, e + i, t + s - r, e + i, 2, !0), this.v.setTripleAt(t - s + a, e + i, t - s + r, e + i, t - s + a, e + i, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - a, t - s, e + i - r, 4, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + r, t - s, e - i + a, 5, !0), this.v.setTripleAt(t - s + a, e - i, t - s + a, e - i, t - s + r, e - i, 6, !0), this.v.setTripleAt(t + s - a, e - i, t + s - r, e - i, t + s - a, e - i, 7, !0)) : (this.v.setTripleAt(t - s, e + i, t - s + r, e + i, t - s, e + i, 2), this.v.setTripleAt(t - s, e - i, t - s, e - i + r, t - s, e - i, 3))) : (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + r, t + s, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e - i, t + s - a, e - i, t + s - r, e - i, 1, !0), this.v.setTripleAt(t - s + a, e - i, t - s + r, e - i, t - s + a, e - i, 2, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + a, t - s, e - i + r, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - r, t - s, e + i - a, 4, !0), this.v.setTripleAt(t - s + a, e + i, t - s + a, e + i, t - s + r, e + i, 5, !0), this.v.setTripleAt(t + s - a, e + i, t + s - r, e + i, t + s - a, e + i, 6, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - a, t + s, e + i - r, 7, !0)) : (this.v.setTripleAt(t - s, e - i, t - s + r, e - i, t - s, e - i, 1, !0), this.v.setTripleAt(t - s, e + i, t - s, e + i - r, t - s, e + i, 2, !0), this.v.setTripleAt(t + s, e + i, t + s - r, e + i, t + s, e + i, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: s
                                    }, g([tA], t), t
                                }(),
                                f = {};
                            return f.getShapeProp = function(t, e, s) {
                                var i;
                                return 3 === s || 4 === s ? i = (3 === s ? e.pt : e.ks).k.length ? new o(t, e, s) : new r(t, e, s) : 5 === s ? i = new p(t, e) : 6 === s ? i = new h(t, e) : 7 === s && (i = new l(t, e)), i.k && t.addDynamicProperty(i), i
                            }, f.getConstructorFunction = function() {
                                return r
                            }, f.getKeyframedConstructorFunction = function() {
                                return o
                            }, f
                        }(),
                        tR = function() {
                            var t = Math.cos,
                                e = Math.sin,
                                s = Math.tan,
                                i = Math.round;

                            function a() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function r(s) {
                                if (0 === s) return this;
                                var i = t(s),
                                    a = e(s);
                                return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function n(s) {
                                if (0 === s) return this;
                                var i = t(s),
                                    a = e(s);
                                return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
                            }

                            function o(s) {
                                if (0 === s) return this;
                                var i = t(s),
                                    a = e(s);
                                return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
                            }

                            function h(s) {
                                if (0 === s) return this;
                                var i = t(s),
                                    a = e(s);
                                return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function l(t, e) {
                                return this._t(1, e, t, 1, 0, 0)
                            }

                            function p(t, e) {
                                return this.shear(s(t), s(e))
                            }

                            function f(i, a) {
                                var r = t(a),
                                    n = e(a);
                                return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, s(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function c(t, e, s) {
                                return s || 0 === s || (s = 1), 1 === t && 1 === e && 1 === s ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
                            }

                            function d(t, e, s, i, a, r, n, o, h, l, p, f, c, d, m, u) {
                                return this.props[0] = t, this.props[1] = e, this.props[2] = s, this.props[3] = i, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = d, this.props[14] = m, this.props[15] = u, this
                            }

                            function m(t, e, s) {
                                return s = s || 0, 0 !== t || 0 !== e || 0 !== s ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1) : this
                            }

                            function u(t, e, s, i, a, r, n, o, h, l, p, f, c, d, m, u) {
                                var g = this.props;
                                if (1 === t && 0 === e && 0 === s && 0 === i && 0 === a && 1 === r && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * r + g[15] * d, g[14] = g[14] * p + g[15] * m, g[15] *= u, this._identityCalculated = !1, this;
                                var y = g[0],
                                    v = g[1],
                                    b = g[2],
                                    _ = g[3],
                                    C = g[4],
                                    x = g[5],
                                    k = g[6],
                                    S = g[7],
                                    P = g[8],
                                    D = g[9],
                                    w = g[10],
                                    A = g[11],
                                    T = g[12],
                                    M = g[13],
                                    F = g[14],
                                    E = g[15];
                                return g[0] = y * t + v * a + b * h + _ * c, g[1] = y * e + v * r + b * l + _ * d, g[2] = y * s + v * n + b * p + _ * m, g[3] = y * i + v * o + b * f + _ * u, g[4] = C * t + x * a + k * h + S * c, g[5] = C * e + x * r + k * l + S * d, g[6] = C * s + x * n + k * p + S * m, g[7] = C * i + x * o + k * f + S * u, g[8] = P * t + D * a + w * h + A * c, g[9] = P * e + D * r + w * l + A * d, g[10] = P * s + D * n + w * p + A * m, g[11] = P * i + D * o + w * f + A * u, g[12] = T * t + M * a + F * h + E * c, g[13] = T * e + M * r + F * l + E * d, g[14] = T * s + M * n + F * p + E * m, g[15] = T * i + M * o + F * f + E * u, this._identityCalculated = !1, this
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

                            function C(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                            }

                            function x(t, e, s) {
                                return {
                                    x: t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12],
                                    y: t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13],
                                    z: t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                                }
                            }

                            function k(t, e, s) {
                                return t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12]
                            }

                            function S(t, e, s) {
                                return t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13]
                            }

                            function P(t, e, s) {
                                return t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                            }

                            function D() {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    e = this.props[5] / t,
                                    s = -this.props[1] / t,
                                    i = -this.props[4] / t,
                                    a = this.props[0] / t,
                                    r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                    o = new tR;
                                return o.props[0] = e, o.props[1] = s, o.props[4] = i, o.props[5] = a, o.props[12] = r, o.props[13] = n, o
                            }

                            function w(t) {
                                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                            }

                            function A(t) {
                                var e, s = t.length,
                                    i = [];
                                for (e = 0; e < s; e += 1) i[e] = w(t[e]);
                                return i
                            }

                            function T(t, e, s) {
                                var i = v("float32", 6);
                                if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = s[0], i[5] = s[1];
                                else {
                                    var a = this.props[0],
                                        r = this.props[1],
                                        n = this.props[4],
                                        o = this.props[5],
                                        h = this.props[12],
                                        l = this.props[13];
                                    i[0] = t[0] * a + t[1] * n + h, i[1] = t[0] * r + t[1] * o + l, i[2] = e[0] * a + e[1] * n + h, i[3] = e[0] * r + e[1] * o + l, i[4] = s[0] * a + s[1] * n + h, i[5] = s[0] * r + s[1] * o + l
                                }
                                return i
                            }

                            function M(t, e, s) {
                                return this.isIdentity() ? [t, e, s] : [t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]]
                            }

                            function F(t, e) {
                                if (this.isIdentity()) return t + "," + e;
                                var s = this.props;
                                return Math.round((t * s[0] + e * s[4] + s[12]) * 100) / 100 + "," + Math.round((t * s[1] + e * s[5] + s[13]) * 100) / 100
                            }

                            function E() {
                                for (var t = 0, e = this.props, s = "matrix3d("; t < 16;) s += i(1e4 * e[t]) / 1e4, s += 15 === t ? ")" : ",", t += 1;
                                return s
                            }

                            function L(t) {
                                return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                            }

                            function I() {
                                var t = this.props;
                                return "matrix(" + L(t[0]) + "," + L(t[1]) + "," + L(t[4]) + "," + L(t[5]) + "," + L(t[12]) + "," + L(t[13]) + ")"
                            }
                            return function() {
                                this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = d, this.translate = m, this.transform = u, this.multiply = g, this.applyToPoint = x, this.applyToX = k, this.applyToY = S, this.applyToZ = P, this.applyToPointArray = M, this.applyToTriplePoints = T, this.applyToPointStringified = F, this.toCSS = E, this.to2dCSS = I, this.clone = _, this.cloneFromProps = C, this.equals = b, this.inversePoints = A, this.inversePoint = w, this.getInverseMatrix = D, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = v("float32", 16), this.reset()
                            }
                        }();

                    function tV(t) {
                        return (tV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }
                    var tz = {};

                    function tO() {
                        tl.searchAnimations()
                    }
                    tz.play = tl.play, tz.pause = tl.pause, tz.setLocationHref = function(t) {
                        d(t)
                    }, tz.togglePause = tl.togglePause, tz.setSpeed = tl.setSpeed, tz.setDirection = tl.setDirection, tz.stop = tl.stop, tz.searchAnimations = tO, tz.registerAnimation = tl.registerAnimation, tz.loadAnimation = function(t) {
                        return tl.loadAnimation(t)
                    }, tz.setSubframeRendering = function(t) {
                        X(t)
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
                        "expressions" === t && G(e)
                    }, tz.freeze = tl.freeze, tz.unfreeze = tl.unfreeze, tz.setVolume = tl.setVolume, tz.mute = tl.mute, tz.unmute = tl.unmute, tz.getRegisteredAnimations = tl.getRegisteredAnimations, tz.useWebWorker = function(t) {
                        c = !!t
                    }, tz.setIDPrefix = function(t) {
                        Q(t)
                    }, tz.__getFactory = function(t) {
                        switch (t) {
                            case "propertyFactory":
                                return tw;
                            case "shapePropertyFactory":
                                return tI;
                            case "matrix":
                                return tR;
                            default:
                                return null
                        }
                    }, tz.version = "5.12.2";
                    var tN = "",
                        tq = document.getElementsByTagName("script"),
                        tB = tq.length - 1,
                        tW = tq[tB] || {
                            src: ""
                        };
                    tN = tW.src ? tW.src.replace(/^[^\?]+\??/, "") : "",
                        function(t) {
                            for (var e = tN.split("&"), s = 0; s < e.length; s += 1) {
                                var i = e[s].split("=");
                                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                            }
                        }("renderer");
                    var tj = setInterval(function() {
                        "complete" === document.readyState && (clearInterval(tj), tO())
                    }, 100);
                    try {
                        (typeof t > "u" ? "undefined" : tV(t)) === "object" && "u" > typeof e || "function" == typeof define && define.amd || (window.bodymovin = tz)
                    } catch {}
                    var tY = (o = {}, (n = {}).registerModifier = function(t, e) {
                        o[t] || (o[t] = e)
                    }, n.getModifier = function(t, e, s) {
                        return new o[t](e, s)
                    }, n);

                    function tJ() {}

                    function tH() {}

                    function tX() {}
                    tJ.prototype.initModifierProperties = function() {}, tJ.prototype.addShapeToModifier = function() {}, tJ.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: tL.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                        }
                    }, tJ.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = -999999, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tJ.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, g([tA], tJ), g([tJ], tH), tH.prototype.initModifierProperties = function(t, e) {
                        this.s = tw.getProp(t, e.s, 0, .01, this), this.e = tw.getProp(t, e.e, 0, .01, this), this.o = tw.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, tH.prototype.addShapeToModifier = function(t) {
                        t.pathsData = []
                    }, tH.prototype.calculateShapeEdges = function(t, e, s, i, a) {
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
                        for (o = 0; o < p; o += 1)(h = n[o]).e * a < i || h.s * a > i + s || (r = h.s * a <= i ? 0 : (h.s * a - i) / s, l.push([r, h.e * a >= i + s ? 1 : (h.e * a - i) / s]));
                        return l.length || l.push([0, 0]), l
                    }, tH.prototype.releasePathsData = function(t) {
                        var e, s = t.length;
                        for (e = 0; e < s; e += 1) tm.release(t[e]);
                        return t.length = 0, t
                    }, tH.prototype.processShapes = function(t) {
                        if (this._mdf || t) {
                            var e = this.o.v % 360 / 360;
                            if (e < 0 && (e += 1), (i = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (a = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
                                var s = i;
                                i = a, a = s
                            }
                            i = 1e-4 * Math.round(1e4 * i), a = 1e-4 * Math.round(1e4 * a), this.sValue = i, this.eValue = a
                        } else i = this.sValue, a = this.eValue;
                        var i, a, r, n, o, h, l, p, f, c = this.shapes.length,
                            d = 0;
                        if (a === i)
                            for (n = 0; n < c; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                        else if (1 === a && 0 === i || 0 === a && 1 === i) {
                            if (this._mdf)
                                for (n = 0; n < c; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                        } else {
                            var m, u, g = [];
                            for (n = 0; n < c; n += 1)
                                if ((m = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                    if (h = (r = m.shape.paths)._length, f = 0, !m.shape._mdf && m.pathsData.length) f = m.totalShapeLength;
                                    else {
                                        for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = tu.getSegmentsLength(r.shapes[o]), l.push(p), f += p.totalLength;
                                        m.totalShapeLength = f, m.pathsData = l
                                    }
                                    d += f, m.shape._mdf = !0
                                } else m.shape.paths = m.localShapeCollection;
                            var y, v = i,
                                b = a,
                                _ = 0;
                            for (n = c - 1; n >= 0; n -= 1)
                                if ((m = this.shapes[n]).shape._mdf) {
                                    for ((u = m.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (y = this.calculateShapeEdges(i, a, m.totalShapeLength, _, d), _ += m.totalShapeLength) : y = [
                                            [v, b]
                                        ], h = y.length, o = 0; o < h; o += 1) {
                                        v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                            s: m.totalShapeLength * v,
                                            e: m.totalShapeLength * b
                                        }) : v >= 1 ? g.push({
                                            s: m.totalShapeLength * (v - 1),
                                            e: m.totalShapeLength * (b - 1)
                                        }) : (g.push({
                                            s: m.totalShapeLength * v,
                                            e: m.totalShapeLength
                                        }), g.push({
                                            s: 0,
                                            e: m.totalShapeLength * (b - 1)
                                        }));
                                        var C = this.addShapes(m, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1)
                                                if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                                    var x = C.pop();
                                                    this.addPaths(C, u), C = this.addShapes(m, g[1], x)
                                                } else this.addPaths(C, u), C = this.addShapes(m, g[1]);
                                            this.addPaths(C, u)
                                        }
                                    }
                                    m.shape.paths = u
                                }
                        }
                    }, tH.prototype.addPaths = function(t, e) {
                        var s, i = t.length;
                        for (s = 0; s < i; s += 1) e.addShape(t[s])
                    }, tH.prototype.addSegment = function(t, e, s, i, a, r, n) {
                        a.setXYAt(e[0], e[1], "o", r), a.setXYAt(s[0], s[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(i[0], i[1], "v", r + 1)
                    }, tH.prototype.addSegmentFromArray = function(t, e, s, i) {
                        e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1)
                    }, tH.prototype.addShapes = function(t, e, s) {
                        var i, a, r, n, o, h, l, p, f = t.pathsData,
                            c = t.shape.paths.shapes,
                            d = t.shape.paths._length,
                            m = 0,
                            u = [],
                            g = !0;
                        for (s ? (o = s._length, p = s._length) : (s = tF.newElement(), o = 0, p = 0), u.push(s), i = 0; i < d; i += 1) {
                            for (h = f[i].lengths, s.c = c[i].c, r = c[i].c ? h.length : h.length + 1, a = 1; a < r; a += 1)
                                if (m + (n = h[a - 1]).addedLength < e.s) m += n.addedLength, s.c = !1;
                                else if (m > e.e) {
                                s.c = !1;
                                break
                            } else e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[a], c[i].v[a], s, o, g), g = !1) : (l = tu.getNewSegment(c[i].v[a - 1], c[i].v[a], c[i].o[a - 1], c[i].i[a], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, s, o, g), g = !1, s.c = !1), m += n.addedLength, o += 1;
                            if (c[i].c && h.length) {
                                if (n = h[a - 1], m <= e.e) {
                                    var y = h[a - 1].addedLength;
                                    e.s <= m && e.e >= m + y ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[0], c[i].v[0], s, o, g), g = !1) : (l = tu.getNewSegment(c[i].v[a - 1], c[i].v[0], c[i].o[a - 1], c[i].i[0], (e.s - m) / y, (e.e - m) / y, h[a - 1]), this.addSegmentFromArray(l, s, o, g), g = !1, s.c = !1)
                                } else s.c = !1;
                                m += n.addedLength, o += 1
                            }
                            if (s._length && (s.setXYAt(s.v[p][0], s.v[p][1], "i", p), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), m > e.e) break;
                            i < d - 1 && (s = tF.newElement(), g = !0, u.push(s), o = 0)
                        }
                        return u
                    }, g([tJ], tX), tX.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tw.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, tX.prototype.processPath = function(t, e) {
                        var s, i, a, r, n, o, h = e / 100,
                            l = [0, 0],
                            p = t._length,
                            f = 0;
                        for (f = 0; f < p; f += 1) l[0] += t.v[f][0], l[1] += t.v[f][1];
                        l[0] /= p, l[1] /= p;
                        var c = tF.newElement();
                        for (f = 0, c.c = t.c; f < p; f += 1) s = t.v[f][0] + (l[0] - t.v[f][0]) * h, i = t.v[f][1] + (l[1] - t.v[f][1]) * h, a = t.o[f][0] + -((l[0] - t.o[f][0]) * h), r = t.o[f][1] + -((l[1] - t.o[f][1]) * h), n = t.i[f][0] + -((l[0] - t.i[f][0]) * h), o = t.i[f][1] + -((l[1] - t.i[f][1]) * h), c.setTripleAt(s, i, a, r, n, o, f);
                        return c
                    }, tX.prototype.processShapes = function(t) {
                        var e, s, i, a, r, n, o = this.shapes.length,
                            h = this.amount.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (s = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (s.releaseShapes(), e.shape._mdf = !0, i = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) s.addShape(this.processPath(i[r], h));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    };
                    var tG = function() {
                        var t = [0, 0];

                        function e(t, e, s) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new tR, this.pre = new tR, this.appliedTransformations = 0, this.initDynamicPropertyContainer(s || t), e.p && e.p.s ? (this.px = tw.getProp(t, e.p.x, 0, 0, this), this.py = tw.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = tw.getProp(t, e.p.z, 0, 0, this))) : this.p = tw.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = tw.getProp(t, e.rx, 0, T, this), this.ry = tw.getProp(t, e.ry, 0, T, this), this.rz = tw.getProp(t, e.rz, 0, T, this), e.or.k[0].ti) {
                                    var i, a = e.or.k.length;
                                    for (i = 0; i < a; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
                                }
                                this.or = tw.getProp(t, e.or, 1, T, this), this.or.sh = !0
                            } else this.r = tw.getProp(t, e.r || {
                                k: 0
                            }, 0, T, this);
                            e.sk && (this.sk = tw.getProp(t, e.sk, 0, T, this), this.sa = tw.getProp(t, e.sa, 0, T, this)), this.a = tw.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = tw.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = tw.getProp(t, e.o, 0, .01, t) : this.o = {
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
                                            if (s = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / s, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / s, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / s, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / s, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / s, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                i = [], a = [];
                                                var s, i, a, r = this.px,
                                                    n = this.py;
                                                r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (i[0] = r.getValueAtTime((r.keyframes[0].t + .01) / s, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / s, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / s, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / s, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (i[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / s, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / s, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / s, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / s, 0)) : (i = [r.pv, n.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / s, r.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / s, n.offsetTime))
                                            } else i = a = t;
                                            this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
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
                        }, g([tA], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = tA.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, s, i) {
                                return new e(t, s, i)
                            }
                        }
                    }();

                    function tK() {}

                    function tU() {}

                    function tZ(t, e) {
                        return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                    }

                    function tQ(t) {
                        return 1e-5 >= Math.abs(t)
                    }

                    function t$(t, e, s) {
                        var i, a;
                        return [(i = t[0], i * (1 - s) + e[0] * s), (a = t[1], a * (1 - s) + e[1] * s)]
                    }

                    function t0(t, e, s, i) {
                        return [-t + 3 * e - 3 * s + i, 3 * t - 6 * e + 3 * s, -3 * t + 3 * e, t]
                    }

                    function t1(t) {
                        return new t2(t, t, t, t, !1)
                    }

                    function t2(t, e, s, i, a) {
                        a && et(t, e) && (e = t$(t, i, 1 / 3)), a && et(s, i) && (s = t$(t, i, 2 / 3));
                        var r = t0(t[0], e[0], s[0], i[0]),
                            n = t0(t[1], e[1], s[1], i[1]);
                        this.a = [r[0], n[0]], this.b = [r[1], n[1]], this.c = [r[2], n[2]], this.d = [r[3], n[3]], this.points = [t, e, s, i]
                    }

                    function t3(t, e) {
                        var s = t.points[0][e],
                            i = t.points[t.points.length - 1][e];
                        if (s > i) {
                            var a = i;
                            i = s, s = a
                        }
                        for (var r = function(t, e, s) {
                                if (0 === t) return [];
                                var i = e * e - 4 * t * s;
                                if (i < 0) return [];
                                var a = -e / (2 * t);
                                if (0 === i) return [a];
                                var r = Math.sqrt(i) / (2 * t);
                                return [a - r, a + r]
                            }(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < r.length; n += 1)
                            if (r[n] > 0 && r[n] < 1) {
                                var o = t.point(r[n])[e];
                                o < s ? s = o : o > i && (i = o)
                            } return {
                            min: s,
                            max: i
                        }
                    }

                    function t5(t, e, s) {
                        var i = t.boundingBox();
                        return {
                            cx: i.cx,
                            cy: i.cy,
                            width: i.width,
                            height: i.height,
                            bez: t,
                            t: (e + s) / 2,
                            t1: e,
                            t2: s
                        }
                    }

                    function t9(t) {
                        var e = t.bez.split(.5);
                        return [t5(e[0], t.t1, t.t), t5(e[1], t.t, t.t2)]
                    }

                    function t4(t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    }

                    function t6(t, e, s, i) {
                        var a = [t[0], t[1], 1],
                            r = [e[0], e[1], 1],
                            n = [s[0], s[1], 1],
                            o = [i[0], i[1], 1],
                            h = t4(t4(a, r), t4(n, o));
                        return tQ(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
                    }

                    function t8(t, e, s) {
                        return [t[0] + Math.cos(e) * s, t[1] - Math.sin(e) * s]
                    }

                    function t7(t, e) {
                        return Math.hypot(t[0] - e[0], t[1] - e[1])
                    }

                    function et(t, e) {
                        return tZ(t[0], e[0]) && tZ(t[1], e[1])
                    }

                    function ee() {}

                    function es(t, e, s, i, a, r, n) {
                        var o = s - Math.PI / 2,
                            h = s + Math.PI / 2,
                            l = e[0] + Math.cos(s) * i * a,
                            p = e[1] - Math.sin(s) * i * a;
                        t.setTripleAt(l, p, l + Math.cos(o) * r, p - Math.sin(o) * r, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
                    }

                    function ei(t, e, s, i, a, r, n) {
                        var o, h, l, p, f, c, d, m = (l = 0 === s ? e.length() - 1 : s - 1, p = (s + 1) % e.length(), f = e.v[l], Math.atan2(0, 1) - Math.atan2((o = [(c = e.v[p])[0] - f[0], c[1] - f[1]], d = [Math.cos(h = -(.5 * Math.PI)) * o[0] - Math.sin(h) * o[1], Math.sin(h) * o[0] + Math.cos(h) * o[1]])[1], d[0])),
                            u = e.v[s % e._length],
                            g = e.v[0 === s ? e._length - 1 : s - 1],
                            y = e.v[(s + 1) % e._length],
                            v = 2 === r ? Math.sqrt(Math.pow(u[0] - g[0], 2) + Math.pow(u[1] - g[1], 2)) : 0,
                            b = 2 === r ? Math.sqrt(Math.pow(u[0] - y[0], 2) + Math.pow(u[1] - y[1], 2)) : 0;
                        es(t, e.v[s % e._length], m, n, i, b / ((a + 1) * 2), v / ((a + 1) * 2))
                    }

                    function ea(t, e, s) {
                        var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                        return [t8(t, i, s), t8(e, i, s)]
                    }

                    function er(t, e) {
                        s = (h = ea(t.points[0], t.points[1], e))[0], i = h[1], a = (h = ea(t.points[1], t.points[2], e))[0], r = h[1], n = (h = ea(t.points[2], t.points[3], e))[0], o = h[1];
                        var s, i, a, r, n, o, h, l = t6(s, i, a, r);
                        null === l && (l = i);
                        var p = t6(n, o, a, r);
                        return null === p && (p = n), new t2(s, l, p, o)
                    }

                    function en(t, e, s, i, a) {
                        var r = e.points[3],
                            n = s.points[0];
                        if (3 === i || et(r, n)) return r;
                        if (2 === i) {
                            var o = -e.tangentAngle(1),
                                h = -s.tangentAngle(0) + Math.PI,
                                l = t6(r, t8(r, o + Math.PI / 2, 100), n, t8(n, o + Math.PI / 2, 100)),
                                p = l ? t7(l, r) : t7(r, n) / 2,
                                f = t8(r, o, 2 * p * .5519);
                            return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = t8(n, h, 2 * p * .5519), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                        }
                        var c = et(r, e.points[2]) ? e.points[0] : e.points[2],
                            d = et(n, s.points[1]) ? s.points[3] : s.points[1],
                            m = t6(c, r, n, d);
                        return m && t7(m, r) < a ? (t.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], t.length()), m) : r
                    }

                    function eo(t, e) {
                        var s = t.intersections(e);
                        return s.length && tZ(s[0][0], 1) && s.shift(), s.length ? s[0] : null
                    }

                    function eh(t, e) {
                        var s = t.slice(),
                            i = e.slice(),
                            a = eo(t[t.length - 1], e[0]);
                        return a && (s[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = eo(t[0], e[e.length - 1])) ? [
                            [t[0].split(a[0])[0]],
                            [e[e.length - 1].split(a[1])[1]]
                        ] : [s, i]
                    }

                    function el(t, e) {
                        var s, i, a, r, n = t.inflectionPoints();
                        if (0 === n.length) return [er(t, e)];
                        if (1 === n.length || tZ(n[1], 1)) return s = (a = t.split(n[0]))[0], i = a[1], [er(s, e), er(i, e)];
                        s = (a = t.split(n[0]))[0];
                        var o = (n[1] - n[0]) / (1 - n[0]);
                        return r = (a = a[1].split(o))[0], i = a[1], [er(s, e), er(r, e), er(i, e)]
                    }

                    function ep() {}

                    function ef(t) {
                        for (var e = t.fStyle ? t.fStyle.split(" ") : [], s = "normal", i = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
                            case "italic":
                                i = "italic";
                                break;
                            case "bold":
                                s = "700";
                                break;
                            case "black":
                                s = "900";
                                break;
                            case "medium":
                                s = "500";
                                break;
                            case "regular":
                            case "normal":
                                s = "400";
                                break;
                            case "light":
                            case "thin":
                                s = "200"
                        }
                        return {
                            style: i,
                            weight: t.fWeight || s
                        }
                    }
                    g([tJ], tK), tK.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = tw.getProp(t, e.c, 0, null, this), this.o = tw.getProp(t, e.o, 0, null, this), this.tr = tG.getTransformProperty(t, e.tr, this), this.so = tw.getProp(t, e.tr.so, 0, .01, this), this.eo = tw.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new tR, this.rMatrix = new tR, this.sMatrix = new tR, this.tMatrix = new tR, this.matrix = new tR
                    }, tK.prototype.applyTransforms = function(t, e, s, i, a, r) {
                        var n = r ? -1 : 1,
                            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                            h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                        t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(r ? 1 / o : o, r ? 1 / h : h), s.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                    }, tK.prototype.init = function(t, e, s, i) {
                        for (this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]); s > 0;) s -= 1, this._elements.unshift(e[s]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, tK.prototype.resetElements = function(t) {
                        var e, s = t.length;
                        for (e = 0; e < s; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                    }, tK.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e
                    }, tK.prototype.changeGroupRender = function(t, e) {
                        var s, i = t.length;
                        for (s = 0; s < i; s += 1) t[s]._render = e, "gr" === t[s].ty && this.changeGroupRender(t[s].it, e)
                    }, tK.prototype.processShapes = function(t) {
                        var e, s, i, a, r, n = !1;
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
                            for (i = 0, r = 0; i <= this._groups.length - 1; i += 1) {
                                if (o = r < p, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                                    var c = this.elemsData[i].it,
                                        d = c[c.length - 1];
                                    0 !== d.transform.op.v ? (d.transform.op._mdf = !0, d.transform.op.v = 0) : d.transform.op._mdf = !1
                                }
                                r += 1
                            }
                            this._currentCopies = p;
                            var m = this.o.v,
                                u = m % 1,
                                g = m > 0 ? Math.floor(m) : Math.ceil(m),
                                y = this.pMatrix.props,
                                v = this.rMatrix.props,
                                b = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var _ = 0;
                            if (m > 0) {
                                for (; _ < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                                u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), _ += u)
                            } else if (m < 0) {
                                for (; _ > g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                                u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), _ -= u)
                            }
                            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
                                if (l = (s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== _) {
                                    for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), h = 0; h < l; h += 1) s[h] = this.matrix.props[h];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), h = 0; h < l; h += 1) s[h] = this.matrix.props[h];
                                _ += 1, r -= 1, i += a
                            }
                        } else
                            for (r = this._currentCopies, i = 0, a = 1; r;) s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, i += a;
                        return n
                    }, tK.prototype.addShape = function() {}, g([tJ], tU), tU.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = tw.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, tU.prototype.processPath = function(t, e) {
                        var s = tF.newElement();
                        s.c = t.c;
                        var i, a, r, n, o, h, l, p, f, c, d, m, u, g = t._length,
                            y = 0;
                        for (i = 0; i < g; i += 1) a = t.v[i], n = t.o[i], r = t.i[i], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, c = p - (p - a[0]) * .5519, d = f - (f - a[1]) * .5519, s.setTripleAt(p, f, c, d, m, u, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = d = a[1] + (o[1] - a[1]) * l, m = p - (p - a[0]) * .5519, u = f - (f - a[1]) * .5519, s.setTripleAt(p, f, c, d, m, u, y)) : s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y) : s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1;
                        return s
                    }, tU.prototype.processShapes = function(t) {
                        var e, s, i, a, r, n, o = this.shapes.length,
                            h = this.rd.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (s = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (s.releaseShapes(), e.shape._mdf = !0, i = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) s.addShape(this.processPath(i[r], h));
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
                            s = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                        if (s < 0) return [];
                        var i = Math.sqrt(s);
                        return tQ(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(t) {
                            return t > 0 && t < 1
                        })
                    }, t2.prototype.split = function(t) {
                        if (t <= 0) return [t1(this.points[0]), this];
                        if (t >= 1) return [this, t1(this.points[this.points.length - 1])];
                        var e = t$(this.points[0], this.points[1], t),
                            s = t$(this.points[1], this.points[2], t),
                            i = t$(this.points[2], this.points[3], t),
                            a = t$(e, s, t),
                            r = t$(s, i, t),
                            n = t$(a, r, t);
                        return [new t2(this.points[0], e, a, n, !0), new t2(n, r, i, this.points[3], !0)]
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
                    }, t2.prototype.intersections = function(t, e, s) {
                        void 0 === e && (e = 2), void 0 === s && (s = 7);
                        var i = [];
                        return function t(e, s, i, a, r, n) {
                            if (2 * Math.abs(e.cx - s.cx) < e.width + s.width && 2 * Math.abs(e.cy - s.cy) < e.height + s.height) {
                                if (i >= n || e.width <= a && e.height <= a && s.width <= a && s.height <= a) return void r.push([e.t, s.t]);
                                var o = t9(e),
                                    h = t9(s);
                                t(o[0], h[0], i + 1, a, r, n), t(o[0], h[1], i + 1, a, r, n), t(o[1], h[0], i + 1, a, r, n), t(o[1], h[1], i + 1, a, r, n)
                            }
                        }(t5(this, 0, 1), t5(t, 0, 1), 0, e, i, s), i
                    }, t2.shapeSegment = function(t, e) {
                        var s = (e + 1) % t.length();
                        return new t2(t.v[e], t.o[e], t.i[s], t.v[s], !0)
                    }, t2.shapeSegmentInverted = function(t, e) {
                        var s = (e + 1) % t.length();
                        return new t2(t.v[s], t.i[s], t.o[e], t.v[e], !0)
                    }, g([tJ], ee), ee.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amplitude = tw.getProp(t, e.s, 0, null, this), this.frequency = tw.getProp(t, e.r, 0, null, this), this.pointsType = tw.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                    }, ee.prototype.processPath = function(t, e, s, i) {
                        var a = t._length,
                            r = tF.newElement();
                        if (r.c = t.c, t.c || (a -= 1), 0 === a) return r;
                        var n = -1,
                            o = t2.shapeSegment(t, 0);
                        ei(r, t, 0, e, s, i, n);
                        for (var h = 0; h < a; h += 1) n = function(t, e, s, i, a, r) {
                            for (var n = 0; n < i; n += 1) {
                                var o = (n + 1) / (i + 1),
                                    h = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                                    l = e.normalAngle(o);
                                es(t, e.point(o), l, r, s, h / ((i + 1) * 2), h / ((i + 1) * 2)), r = -r
                            }
                            return r
                        }(r, o, e, s, i, -n), o = h !== a - 1 || t.c ? t2.shapeSegment(t, (h + 1) % a) : null, ei(r, t, h + 1, e, s, i, n);
                        return r
                    }, ee.prototype.processShapes = function(t) {
                        var e, s, i, a, r, n, o = this.shapes.length,
                            h = this.amplitude.v,
                            l = Math.max(0, Math.round(this.frequency.v)),
                            p = this.pointsType.v;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (s = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (s.releaseShapes(), e.shape._mdf = !0, i = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) s.addShape(this.processPath(i[r], h, l, p));
                                e.shape.paths = e.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, g([tJ], ep), ep.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = tw.getProp(t, e.a, 0, null, this), this.miterLimit = tw.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                    }, ep.prototype.processPath = function(t, e, s, i) {
                        var a = tF.newElement();
                        a.c = t.c;
                        var r = t.length();
                        t.c || (r -= 1);
                        var n, o, h, l = [];
                        for (n = 0; n < r; n += 1) h = t2.shapeSegment(t, n), l.push(el(h, e));
                        if (!t.c)
                            for (n = r - 1; n >= 0; n -= 1) h = t2.shapeSegmentInverted(t, n), l.push(el(h, e));
                        l = function(t) {
                            for (var e, s = 1; s < t.length; s += 1) e = eh(t[s - 1], t[s]), t[s - 1] = e[0], t[s] = e[1];
                            return t.length > 1 && (e = eh(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                        }(l);
                        var p = null,
                            f = null;
                        for (n = 0; n < l.length; n += 1) {
                            var c = l[n];
                            for (f && (p = en(a, f, c[0], s, i)), f = c[c.length - 1], o = 0; o < c.length; o += 1) h = c[o], p && et(h.points[0], p) ? a.setXYAt(h.points[1][0], h.points[1][1], "o", a.length() - 1) : a.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], a.length()), a.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], a.length()), p = h.points[3]
                        }
                        return l.length && en(a, f, l[0][0], s, i), a
                    }, ep.prototype.processShapes = function(t) {
                        var e, s, i, a, r, n, o = this.shapes.length,
                            h = this.amount.v,
                            l = this.miterLimit.v,
                            p = this.lineJoin;
                        if (0 !== h)
                            for (a = 0; a < o; a += 1) {
                                if (s = (e = this.shapes[a]).localShapeCollection, !(!e.shape._mdf && !this._mdf && !t))
                                    for (s.releaseShapes(), e.shape._mdf = !0, i = e.shape.paths.shapes, n = e.shape.paths._length, r = 0; r < n; r += 1) s.addShape(this.processPath(i[r], h, p, l));
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
                        var s = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                        function i(t, e) {
                            var s = u("span");
                            s.setAttribute("aria-hidden", !0), s.style.fontFamily = e;
                            var i = u("span");
                            i.innerText = "giItT1WQy@!-/#", s.style.position = "absolute", s.style.left = "-10000px", s.style.top = "-10000px", s.style.fontSize = "300px", s.style.fontVariant = "normal", s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "0", s.appendChild(i), document.body.appendChild(s);
                            var a = i.offsetWidth;
                            return i.style.fontFamily = function(t) {
                                var e, s = t.split(","),
                                    i = s.length,
                                    a = [];
                                for (e = 0; e < i; e += 1) "sans-serif" !== s[e] && "monospace" !== s[e] && a.push(s[e]);
                                return a.join(",")
                            }(t) + ", " + e, {
                                node: i,
                                w: a,
                                parent: s
                            }
                        }

                        function a(t, e) {
                            var s, i = document.body && e ? "svg" : "canvas",
                                a = ef(t);
                            if ("svg" === i) {
                                var r = $("text");
                                r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", a.style), r.setAttribute("font-weight", a.weight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), s = r
                            } else {
                                var n = new OffscreenCanvas(500, 500).getContext("2d");
                                n.font = a.style + " " + a.weight + " 100px " + t.fFamily, s = n
                            }
                            return {
                                measureText: function(t) {
                                    return "svg" === i ? (s.textContent = t, s.getComputedTextLength()) : s.measureText(t).width
                                }
                            }
                        }

                        function r(t) {
                            var e = 0,
                                s = t.charCodeAt(0);
                            if (s >= 55296 && s <= 56319) {
                                var i = t.charCodeAt(1);
                                i >= 56320 && i <= 57343 && (e = (s - 55296) * 1024 + i - 56320 + 65536)
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
                            var i = t.toString(16) + e.toString(16);
                            return -1 !== s.indexOf(i)
                        }, o.isZeroWidthJoiner = function(t) {
                            return 8205 === t
                        }, o.isFlagEmoji = function(t) {
                            return n(t.substr(0, 2)) && n(t.substr(2, 2))
                        }, o.isRegionalCode = n, o.isCombinedCharacter = function(t) {
                            return -1 !== e.indexOf(t)
                        }, o.isRegionalFlag = function(t, e) {
                            var s = r(t.substr(e, 2));
                            if (127988 !== s) return !1;
                            var i = 0;
                            for (e += 2; i < 5;) {
                                if ((s = r(t.substr(e, 2))) < 917601 || s > 917626) return !1;
                                i += 1, e += 2
                            }
                            return 917631 === r(t.substr(e, 2))
                        }, o.isVariationSelector = function(t) {
                            return 65039 === t
                        }, o.BLACK_FLAG_CODE_POINT = 127988, o.prototype = {
                            addChars: function(t) {
                                if (t) {
                                    this.chars || (this.chars = []);
                                    var e, s, i, a = t.length,
                                        r = this.chars.length;
                                    for (e = 0; e < a; e += 1) {
                                        for (s = 0, i = !1; s < r;) this.chars[s].style === t[e].style && this.chars[s].fFamily === t[e].fFamily && this.chars[s].ch === t[e].ch && (i = !0), s += 1;
                                        i || (this.chars.push(t[e]), r += 1)
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
                                var s, r = t.list,
                                    n = r.length,
                                    o = n;
                                for (s = 0; s < n; s += 1) {
                                    var h, l, p = !0;
                                    if (r[s].loaded = !1, r[s].monoCase = i(r[s].fFamily, "monospace"), r[s].sansCase = i(r[s].fFamily, "sans-serif"), r[s].fPath) {
                                        if ("p" === r[s].fOrigin || 3 === r[s].origin) {
                                            if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[s].fFamily + '"], style[f-origin="3"][f-family="' + r[s].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                var f = u("style");
                                                f.setAttribute("f-forigin", r[s].fOrigin), f.setAttribute("f-origin", r[s].origin), f.setAttribute("f-family", r[s].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + r[s].fFamily + "; font-style: normal; src: url('" + r[s].fPath + "');}", e.appendChild(f)
                                            }
                                        } else if ("g" === r[s].fOrigin || 1 === r[s].origin) {
                                            for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(r[s].fPath) && (p = !1);
                                            if (p) {
                                                var c = u("link");
                                                c.setAttribute("f-forigin", r[s].fOrigin), c.setAttribute("f-origin", r[s].origin), c.type = "text/css", c.rel = "stylesheet", c.href = r[s].fPath, document.body.appendChild(c)
                                            }
                                        } else if ("t" === r[s].fOrigin || 2 === r[s].origin) {
                                            for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r[s].fPath === h[l].src && (p = !1);
                                            if (p) {
                                                var d = u("link");
                                                d.setAttribute("f-forigin", r[s].fOrigin), d.setAttribute("f-origin", r[s].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", r[s].fPath), e.appendChild(d)
                                            }
                                        }
                                    } else r[s].loaded = !0, o -= 1;
                                    r[s].helper = a(r[s], e), r[s].cache = {}, this.fonts.push(r[s])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            },
                            getCharData: function(e, s, i) {
                                for (var a = 0, r = this.chars.length; a < r;) {
                                    if (this.chars[a].ch === e && this.chars[a].style === s && this.chars[a].fFamily === i) return this.chars[a];
                                    a += 1
                                }
                                return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, s, i)), t
                            },
                            getFontByName: function(t) {
                                for (var e = 0, s = this.fonts.length; e < s;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(t, e, s) {
                                var i = this.getFontByName(e);
                                if (!i.cache[t]) {
                                    var a = i.helper;
                                    if (" " === t) {
                                        var r = a.measureText("|" + t + "|"),
                                            n = a.measureText("||");
                                        i.cache[t] = (r - n) / 100
                                    } else i.cache[t] = a.measureText(t) / 100
                                }
                                return i.cache[t] * s
                            },
                            checkLoadedFonts: function() {
                                var t, e, s, i = this.fonts.length,
                                    a = i;
                                for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, s = this.fonts[t].monoCase.w, e.offsetWidth !== s ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, s = this.fonts[t].sansCase.w, e.offsetWidth !== s && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, o
                    }();

                    function ed(t) {
                        this.animationData = t
                    }

                    function em() {}
                    ed.prototype.getProp = function(t) {
                        return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                    }, em.prototype = {
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

                    function eg(t, e, s) {
                        this.p = tw.getProp(e, t.v, 0, 0, s)
                    }

                    function ey(t, e, s) {
                        this.p = tw.getProp(e, t.v, 0, 0, s)
                    }

                    function ev(t, e, s) {
                        this.p = tw.getProp(e, t.v, 1, 0, s)
                    }

                    function eb(t, e, s) {
                        this.p = tw.getProp(e, t.v, 1, 0, s)
                    }

                    function e_(t, e, s) {
                        this.p = tw.getProp(e, t.v, 0, 0, s)
                    }

                    function eC(t, e, s) {
                        this.p = tw.getProp(e, t.v, 0, 0, s)
                    }

                    function ex(t, e, s) {
                        this.p = tw.getProp(e, t.v, 0, 0, s)
                    }

                    function ek() {
                        this.p = {}
                    }

                    function eS(t, e) {
                        var s = t.ef || [];
                        this.effectElements = [];
                        var i, a, r = s.length;
                        for (i = 0; i < r; i += 1) a = new eP(s[i], e), this.effectElements.push(a)
                    }

                    function eP(t, e) {
                        this.init(t, e)
                    }

                    function eD() {}

                    function ew() {}

                    function eA(t, e, s) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, s)
                    }

                    function eT(t, e, s) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, s), this._isPlaying = !1, this._canPlay = !1;
                        var i = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? tw.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }, this.lv = tw.getProp(this, t.au && t.au.lv ? t.au.lv : {
                            k: [100]
                        }, 1, .01, this)
                    }

                    function eM() {}
                    g([tA], eP), eP.prototype.getValue = eP.prototype.iterateDynamicProperties, eP.prototype.init = function(t, e) {
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        var s, i, a = this.data.ef.length,
                            r = this.data.ef;
                        for (s = 0; s < a; s += 1) {
                            switch (i = null, r[s].ty) {
                                case 0:
                                    i = new eg(r[s], e, this);
                                    break;
                                case 1:
                                    i = new ey(r[s], e, this);
                                    break;
                                case 2:
                                    i = new ev(r[s], e, this);
                                    break;
                                case 3:
                                    i = new eb(r[s], e, this);
                                    break;
                                case 4:
                                case 7:
                                    i = new ex(r[s], e, this);
                                    break;
                                case 10:
                                    i = new e_(r[s], e, this);
                                    break;
                                case 11:
                                    i = new eC(r[s], e, this);
                                    break;
                                case 5:
                                    i = new eS(r[s], e);
                                    break;
                                default:
                                    i = new ek(r[s])
                            }
                            i && this.effectElements.push(i)
                        }
                    }, eD.prototype = {
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
                        initBaseData: function(t, e, s) {
                            this.globalData = e, this.comp = s, this.data = t, this.layerId = z(), this.data.sr || (this.data.sr = 1), this.effectsManager = new eS(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, ew.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                        },
                        prepareProperties: function(t, e) {
                            var s, i = this.dynamicProperties.length;
                            for (s = 0; s < i; s += 1)(e || this._isParent && "transform" === this.dynamicProperties[s].propType) && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                        },
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                        }
                    }, eA.prototype.prepareFrame = function() {}, g([em, eD, ew], eA), eA.prototype.getBaseElement = function() {
                        return null
                    }, eA.prototype.renderFrame = function() {}, eA.prototype.destroy = function() {}, eA.prototype.initExpressions = function() {}, eA.prototype.getFootageData = function() {
                        return this.footageData
                    }, eT.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e
                        }
                        this._volume = this.lv.v[0];
                        var s = this._volume * this._volumeMultiplier;
                        this._previousVolume !== s && (this._previousVolume = s, this.audio.volume(s))
                    }, g([em, eD, ew], eT), eT.prototype.renderFrame = function() {
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
                    }, eT.prototype.destroy = function() {}, eT.prototype.sourceRectAtTime = function() {}, eT.prototype.initExpressions = function() {}, eM.prototype.checkLayers = function(t) {
                        var e, s, i = this.layers.length;
                        for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (s = this.layers[e]).ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements()
                    }, eM.prototype.createItem = function(t) {
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
                    }, eM.prototype.createCamera = function() {
                        throw Error("You're using a 3d camera. Try the html renderer.")
                    }, eM.prototype.createAudio = function(t) {
                        return new eT(t, this.globalData, this)
                    }, eM.prototype.createFootage = function(t) {
                        return new eA(t, this.globalData, this)
                    }, eM.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.buildItem(t);
                        this.checkPendingElements()
                    }, eM.prototype.includeLayers = function(t) {
                        this.completeLayers = !1;
                        var e, s, i = t.length,
                            a = this.layers.length;
                        for (e = 0; e < i; e += 1)
                            for (s = 0; s < a;) {
                                if (this.layers[s].id === t[e].id) {
                                    this.layers[s] = t[e];
                                    break
                                }
                                s += 1
                            }
                    }, eM.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t
                    }, eM.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, eM.prototype.buildElementParenting = function(t, e, s) {
                        for (var i = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (i[r] && !0 !== i[r] ? (s.push(i[r]), i[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, s) : t.setHierarchy(s)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
                    }, eM.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t)
                    }, eM.prototype.searchExtraCompositions = function(t) {
                        var e, s = t.length;
                        for (e = 0; e < s; e += 1)
                            if (t[e].xt) {
                                var i = this.createComp(t[e]);
                                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                            }
                    }, eM.prototype.getElementById = function(t) {
                        var e, s = this.elements.length;
                        for (e = 0; e < s; e += 1)
                            if (this.elements[e].data.ind === t) return this.elements[e];
                        return null
                    }, eM.prototype.getElementByPath = function(t) {
                        var e, s = t.shift();
                        if ("number" == typeof s) e = this.elements[s];
                        else {
                            var i, a = this.elements.length;
                            for (i = 0; i < a; i += 1)
                                if (this.elements[i].data.nm === s) {
                                    e = this.elements[i];
                                    break
                                }
                        }
                        return 0 === t.length ? e : e.getElementByPath(t)
                    }, eM.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new ec, this.globalData.slotManager = new ed(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        }
                    };
                    var eF = "transformEFfect";

                    function eE() {}

                    function eL(t, e, s) {
                        this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var i, a = this.globalData.defs,
                            r = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = b(r), this.solidPath = "";
                        var n, o, h, l, p, f, c, d = this.masksProperties,
                            u = 0,
                            g = [],
                            y = z(),
                            v = "clipPath",
                            _ = "clip-path";
                        for (i = 0; i < r; i += 1)
                            if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (v = "mask", _ = "mask"), ("s" === d[i].mode || "i" === d[i].mode) && 0 === u ? ((l = $("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), g.push(l)) : l = null, n = $("path"), "n" === d[i].mode) this.viewData[i] = {
                                op: tw.getProp(this.element, d[i].o, 0, .01, this.element),
                                prop: tI.getShapeProp(this.element, d[i], 3),
                                elem: n,
                                lastPath: ""
                            }, a.appendChild(n);
                            else {
                                if (u += 1, n.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (v = "mask", _ = "mask", c = tw.getProp(this.element, d[i].x, 0, null, this.element), C = z(), (p = $("filter")).setAttribute("id", C), (f = $("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), a.appendChild(p), n.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[i] = {
                                        elem: n,
                                        x: c,
                                        expan: f,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: C,
                                        lastRadius: 0
                                    }, "i" === d[i].mode) {
                                    h = g.length;
                                    var C, x = $("g");
                                    for (o = 0; o < h; o += 1) x.appendChild(g[o]);
                                    var k = $("mask");
                                    k.setAttribute("mask-type", "alpha"), k.setAttribute("id", y + "_" + u), k.appendChild(n), a.appendChild(k), x.setAttribute("mask", "url(" + m() + "#" + y + "_" + u + ")"), g.length = 0, g.push(x)
                                } else g.push(n);
                                d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                    elem: n,
                                    lastPath: "",
                                    op: tw.getProp(this.element, d[i].o, 0, .01, this.element),
                                    prop: tI.getShapeProp(this.element, d[i], 3),
                                    invRect: l
                                }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
                            } for (this.maskElement = $(v), r = g.length, i = 0; i < r; i += 1) this.maskElement.appendChild(g[i]);
                        u > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + m() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }
                    eE.prototype = {
                        initTransform: function() {
                            var t = new tR;
                            this.finalTransform = {
                                mProp: this.data.ks ? tG.getTransformProperty(this, this.data.ks, this) : {
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
                                    s = 0,
                                    i = this.hierarchy.length;
                                if (!this.finalTransform._matMdf)
                                    for (; s < i;) {
                                        if (this.hierarchy[s].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        s += 1
                                    }
                                if (this.finalTransform._matMdf)
                                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), s = 0; s < i; s += 1) e.multiply(this.hierarchy[s].finalTransform.mProp.v)
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
                                    var s = this.finalTransform.localMat;
                                    for (this.localTransforms[0].matrix.clone(s), t = 1; t < e; t += 1) {
                                        var i = this.localTransforms[t].matrix;
                                        s.multiply(i)
                                    }
                                    s.multiply(this.finalTransform.mat)
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
                                var t = this.renderableEffectsManager.getEffects(eF);
                                if (t.length) {
                                    this.localTransforms = [], this.finalTransform.localMat = new tR;
                                    var e = 0,
                                        s = t.length;
                                    for (e = 0; e < s; e += 1) this.localTransforms.push(t[e])
                                }
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for (var s = !0, i = this.comp; s;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
                            var a, r, n = e.length;
                            for (a = 0; a < n; a += 1) r = e[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                            return t
                        },
                        mHelper: new tR
                    }, eL.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop
                    }, eL.prototype.renderFrame = function(t) {
                        var e, s = this.element.finalTransform.mat,
                            i = this.masksProperties.length;
                        for (e = 0; e < i; e += 1)
                            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", s.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                var a = this.storedData[e].expan;
                                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + m() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                            }
                    }, eL.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, eL.prototype.createLayerSolidPath = function() {
                        return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h)) + " "
                    }, eL.prototype.drawPath = function(t, e, s) {
                        var i, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                        for (a = e._length, i = 1; i < a; i += 1) r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                        if (e.c && a > 1 && (r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== r) {
                            var n = "";
                            s.elem && (e.c && (n = t.inv ? this.solidPath + r : r), s.elem.setAttribute("d", n)), s.lastPath = r
                        }
                    }, eL.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    };
                    var eI = ((l = {}).createFilter = function(t, e) {
                            var s = $("filter");
                            return s.setAttribute("id", t), !0 !== e && (s.setAttribute("filterUnits", "objectBoundingBox"), s.setAttribute("x", "0%"), s.setAttribute("y", "0%"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")), s
                        }, l.createAlphaToLuminanceFilter = function() {
                            var t = $("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }, l),
                        eR = (p = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "u" > typeof OffscreenCanvas
                        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (p.maskType = !1), /firefox/i.test(navigator.userAgent) && (p.svgLumaHidden = !1), p),
                        eV = {},
                        ez = "filter_result_";

                    function eO(t) {
                        var e, s, i = "SourceGraphic",
                            a = t.data.ef ? t.data.ef.length : 0,
                            r = z(),
                            n = eI.createFilter(r, !0),
                            o = 0;
                        for (s = 0, this.filters = []; s < a; s += 1) {
                            e = null;
                            var h = t.data.ef[s].ty;
                            eV[h] && (e = new eV[h].effect(n, t.effectsManager.effectElements[s], t, ez + o, i), i = ez + o, eV[h].countsAsEffect && (o += 1)), e && this.filters.push(e)
                        }
                        o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + m() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
                    }

                    function eN() {}

                    function eq() {}

                    function eB() {}

                    function eW(t, e, s) {
                        this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, s), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function ej(t, e) {
                        this.elem = t, this.pos = e
                    }

                    function eY() {}
                    eO.prototype.renderFrame = function(t) {
                        var e, s = this.filters.length;
                        for (e = 0; e < s; e += 1) this.filters[e].renderFrame(t)
                    }, eO.prototype.getEffects = function(t) {
                        var e, s = this.filters.length,
                            i = [];
                        for (e = 0; e < s; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
                        return i
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
                                var s = $("clipPath"),
                                    i = $("path");
                                i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var a = z();
                                if (s.setAttribute("id", a), s.appendChild(i), this.globalData.defs.appendChild(s), this.checkMasks()) {
                                    var r = $("g");
                                    r.setAttribute("clip-path", "url(" + m() + "#" + a + ")"), r.appendChild(this.layerElement), this.transformedElement = r, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + m() + "#" + a + ")")
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
                            this.maskManager = new eL(this.data, this, this.globalData), this.renderableEffectsManager = new eO(this), this.searchEffectTransforms()
                        },
                        getMatte: function(t) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                var e, s, i, a, r = this.layerId + "_" + t;
                                if (1 === t || 3 === t) {
                                    var n = $("mask");
                                    n.setAttribute("id", r), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = $("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), eR.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = z(), s = eI.createFilter(e), this.globalData.defs.appendChild(s), s.appendChild(eI.createAlphaToLuminanceFilter()), (a = $("g")).appendChild(i), n.appendChild(a), a.setAttribute("filter", "url(" + m() + "#" + e + ")"))
                                } else if (2 === t) {
                                    var o = $("mask");
                                    o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                                    var h = $("g");
                                    o.appendChild(h), e = z(), s = eI.createFilter(e);
                                    var l = $("feComponentTransfer");
                                    l.setAttribute("in", "SourceGraphic"), s.appendChild(l);
                                    var p = $("feFuncA");
                                    p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(s);
                                    var f = $("rect");
                                    f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + m() + "#" + e + ")"), h.appendChild(f), (i = $("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(i), eR.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(eI.createAlphaToLuminanceFilter()), a = $("g"), h.appendChild(f), a.appendChild(this.layerElement), h.appendChild(a)), this.globalData.defs.appendChild(o)
                                }
                                this.matteMasks[t] = r
                            }
                            return this.matteMasks[t]
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + m() + "#" + t + ")")
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
                    }, g([em, function(t) {
                        function e() {}
                        return e.prototype = t, e
                    }({
                        initElement: function(t, e, s) {
                            this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
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
                    })], eB), g([eD, eE, eN, eq, ew, eB], eW), eW.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = $("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, eW.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, eY.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, s = this.shapeModifiers.length;
                            for (e = 0; e < s; e += 1) this.shapeModifiers[e].addShape(t)
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
                            for (var e = this.processedElements, s = 0, i = e.length; s < i;) {
                                if (e[s].elem === t) return e[s].pos;
                                s += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(t, e) {
                            for (var s = this.processedElements, i = s.length; i;)
                                if (s[i -= 1].elem === t) {
                                    s[i].pos = e;
                                    return
                                } s.push(new ej(t, e))
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                        }
                    };
                    var eJ = {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        eH = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        };

                    function eX(t, e, s) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = s, this.lvl = e, this._isAnimated = !!s.k;
                        for (var i = 0, a = t.length; i < a;) {
                            if (t[i].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            i += 1
                        }
                    }

                    function eG(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = $("path"), this.msElem = null
                    }

                    function eK(t, e, s, i) {
                        this.elem = t, this.frameId = -1, this.dataProps = b(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = v("float32", e.length ? e.length - 1 : 0), this.dashoffset = v("float32", 1), this.initDynamicPropertyContainer(i);
                        var a, r, n = e.length || 0;
                        for (a = 0; a < n; a += 1) r = tw.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                            n: e[a].n,
                            p: r
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function eU(t, e, s) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tw.getProp(t, e.o, 0, .01, this), this.w = tw.getProp(t, e.w, 0, null, this), this.d = new eK(t, e.d || {}, "svg", this), this.c = tw.getProp(t, e.c, 1, 255, this), this.style = s, this._isAnimated = !!this._isAnimated
                    }

                    function eZ(t, e, s) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = tw.getProp(t, e.o, 0, .01, this), this.c = tw.getProp(t, e.c, 1, 255, this), this.style = s
                    }

                    function eQ(t, e, s) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = s
                    }

                    function e$(t, e, s) {
                        this.data = e, this.c = v("uint8c", 4 * e.p);
                        var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = v("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = tw.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }

                    function e0(t, e, s) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, s)
                    }

                    function e1(t, e, s) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = tw.getProp(t, e.w, 0, null, this), this.d = new eK(t, e.d || {}, "svg", this), this.initGradientData(t, e, s), this._isAnimated = !!this._isAnimated
                    }

                    function e2() {
                        this.it = [], this.prevViewData = [], this.gr = $("g")
                    }

                    function e3(t, e, s) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: s
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }
                    eX.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, eG.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, eK.prototype.getValue = function(t) {
                        if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0,
                                s = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < s; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                        }
                    }, g([tA], eK), g([tA], eU), g([tA], eZ), g([tA], eQ), e$.prototype.comparePoints = function(t, e) {
                        for (var s = 0, i = this.o.length / 2; s < i;) {
                            if (Math.abs(t[4 * s] - t[4 * e + 2 * s]) > .01) return !1;
                            s += 1
                        }
                        return !0
                    }, e$.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var t = 0, e = this.data.k.k.length; t < e;) {
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                t += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, e$.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, s, i, a = 4 * this.data.p;
                            for (e = 0; e < a; e += 1) s = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * s), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                            if (this.o.length)
                                for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) s = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                            this._mdf = !t
                        }
                    }, g([tA], e$), e0.prototype.initGradientData = function(t, e, s) {
                        this.o = tw.getProp(t, e.o, 0, .01, this), this.s = tw.getProp(t, e.s, 1, null, this), this.e = tw.getProp(t, e.e, 1, null, this), this.h = tw.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = tw.getProp(t, e.a || {
                            k: 0
                        }, 0, T, this), this.g = new e$(t, e.g, this), this.style = s, this.stops = [], this.setGradientData(s.pElem, e), this.setGradientOpacity(e, s), this._isAnimated = !!this._isAnimated
                    }, e0.prototype.setGradientData = function(t, e) {
                        var s = z(),
                            i = $(1 === e.t ? "linearGradient" : "radialGradient");
                        i.setAttribute("id", s), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                        var a, r, n, o = [];
                        for (n = 4 * e.g.p, r = 0; r < n; r += 4) a = $("stop"), i.appendChild(a), o.push(a);
                        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + m() + "#" + s + ")"), this.gf = i, this.cst = o
                    }, e0.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var s, i, a, r = $("mask"),
                                n = $("path");
                            r.appendChild(n);
                            var o = z(),
                                h = z();
                            r.setAttribute("id", h);
                            var l = $(1 === t.t ? "linearGradient" : "radialGradient");
                            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var p = this.stops;
                            for (i = 4 * t.g.p; i < a; i += 2)(s = $("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(s), p.push(s);
                            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + m() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", eJ[t.lc || 2]), n.setAttribute("stroke-linejoin", eH[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = r, this.ost = p, this.maskId = h, e.msElem = n
                        }
                    }, g([tA], e0), g([e0, tA], e1);
                    var e5 = function(t, e, s, i) {
                            if (0 === e) return "";
                            var a, r = t.o,
                                n = t.i,
                                o = t.v,
                                h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                            for (a = 1; a < e; a += 1) h += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
                            return s && e && (h += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]) + "z"), h
                        },
                        e9 = function() {
                            var t = new tR,
                                e = new tR;

                            function s(t, e, s) {
                                (s || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (s || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                            }

                            function i() {}

                            function a(s, i, a) {
                                var r, n, o, h, l, p, f, c, d, m, u = i.styles.length,
                                    g = i.lvl;
                                for (p = 0; p < u; p += 1) {
                                    if (h = i.sh._mdf || a, i.styles[p].lvl < g) {
                                        for (c = e.reset(), d = g - i.styles[p].lvl, m = i.transformers.length - 1; !h && d > 0;) h = i.transformers[m].mProps._mdf || h, d -= 1, m -= 1;
                                        if (h)
                                            for (d = g - i.styles[p].lvl, m = i.transformers.length - 1; d > 0;) c.multiply(i.transformers[m].mProps.v), d -= 1, m -= 1
                                    } else c = t;
                                    if (n = (f = i.sh.paths)._length, h) {
                                        for (o = "", r = 0; r < n; r += 1)(l = f.shapes[r]) && l._length && (o += e5(l, l._length, l.c, c));
                                        i.caches[p] = o
                                    } else o = i.caches[p];
                                    i.styles[p].d += !0 === s.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf
                                }
                            }

                            function r(t, e, s) {
                                var i = e.style;
                                (e.c._mdf || s) && i.pElem.setAttribute("fill", "rgb(" + D(e.c.v[0]) + "," + D(e.c.v[1]) + "," + D(e.c.v[2]) + ")"), (e.o._mdf || s) && i.pElem.setAttribute("fill-opacity", e.o.v)
                            }

                            function n(t, e, s) {
                                o(t, e, s), h(t, e, s)
                            }

                            function o(t, e, s) {
                                var i, a, r, n, o, h = e.gf,
                                    l = e.g._hasOpacity,
                                    p = e.s.v,
                                    f = e.e.v;
                                if (e.o._mdf || s) {
                                    var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                    e.style.pElem.setAttribute(c, e.o.v)
                                }
                                if (e.s._mdf || s) {
                                    var d = 1 === t.t ? "x1" : "cx",
                                        m = "x1" === d ? "y1" : "cy";
                                    h.setAttribute(d, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(m, p[1]))
                                }
                                if (e.g._cmdf || s) {
                                    i = e.cst;
                                    var u = e.g.c;
                                    for (r = i.length, a = 0; a < r; a += 1)(n = i[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                                }
                                if (l && (e.g._omdf || s)) {
                                    var g = e.g.o;
                                    for (r = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = i[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
                                }
                                if (1 === t.t)(e.e._mdf || s) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                                else if ((e.s._mdf || e.e._mdf || s) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || s) {
                                    o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                    var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                        v = e.h.v;
                                    v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                    var b = o * v,
                                        _ = Math.cos(y + e.a.v) * b + p[0],
                                        C = Math.sin(y + e.a.v) * b + p[1];
                                    h.setAttribute("fx", _), h.setAttribute("fy", C), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", C))
                                }
                            }

                            function h(t, e, s) {
                                var i = e.style,
                                    a = e.d;
                                a && (a._mdf || s) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || s) && i.pElem.setAttribute("stroke", "rgb(" + D(e.c.v[0]) + "," + D(e.c.v[1]) + "," + D(e.c.v[2]) + ")"), (e.o._mdf || s) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || s) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
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
                                            return s;
                                        case "no":
                                            return i;
                                        default:
                                            return null
                                    }
                                }
                            }
                        }();

                    function e4(t, e, s) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, s), this.prevViewData = []
                    }

                    function e6(t, e, s, i, a, r) {
                        this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = a, this.p = r, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!s,
                            fc: !!i,
                            m: !0,
                            p: !0
                        }
                    }

                    function e8(t, e) {
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
                    g([eD, eE, eN, eY, eq, ew, eB], e4), e4.prototype.initSecondaryElement = function() {}, e4.prototype.identityMatrix = new tR, e4.prototype.buildExpressionInterface = function() {}, e4.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, e4.prototype.filterUniqueShapes = function() {
                        var t, e, s, i, a = this.shapes.length,
                            r = this.stylesList.length,
                            n = [],
                            o = !1;
                        for (s = 0; s < r; s += 1) {
                            for (i = this.stylesList[s], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                            n.length > 1 && o && this.setShapesAsAnimated(n)
                        }
                    }, e4.prototype.setShapesAsAnimated = function(t) {
                        var e, s = t.length;
                        for (e = 0; e < s; e += 1) t[e].setAsAnimated()
                    }, e4.prototype.createStyleElement = function(t, e) {
                        var s, i = new eG(t, e),
                            a = i.pElem;
                        return "st" === t.ty ? s = new eU(this, t, i) : "fl" === t.ty ? s = new eZ(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (s = new("gf" === t.ty ? e0 : e1)(this, t, i), this.globalData.defs.appendChild(s.gf), s.maskId && (this.globalData.defs.appendChild(s.ms), this.globalData.defs.appendChild(s.of), a.setAttribute("mask", "url(" + m() + "#" + s.maskId + ")"))) : "no" === t.ty && (s = new eQ(this, t, i)), ("st" === t.ty || "gs" === t.ty) && (a.setAttribute("stroke-linecap", eJ[t.lc || 2]), a.setAttribute("stroke-linejoin", eH[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = eu(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, s), s
                    }, e4.prototype.createGroupElement = function(t) {
                        var e = new e2;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = eu(t.bm)), e
                    }, e4.prototype.createTransformElement = function(t, e) {
                        var s = tG.getTransformProperty(this, t, this),
                            i = new e3(s, s.o, e);
                        return this.addToAnimatedContents(t, i), i
                    }, e4.prototype.createShapeElement = function(t, e, s) {
                        var i = 4;
                        "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                        var a = new eX(e, s, tI.getShapeProp(this, t, i, this));
                        return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                    }, e4.prototype.addToAnimatedContents = function(t, e) {
                        for (var s = 0, i = this.animatedContents.length; s < i;) {
                            if (this.animatedContents[s].element === e) return;
                            s += 1
                        }
                        this.animatedContents.push({
                            fn: e9.createRenderFunction(t),
                            element: e,
                            data: t
                        })
                    }, e4.prototype.setElementStyles = function(t) {
                        var e, s = t.styles,
                            i = this.stylesList.length;
                        for (e = 0; e < i; e += 1) this.stylesList[e].closed || s.push(this.stylesList[e])
                    }, e4.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers()
                    }, e4.prototype.searchShapes = function(t, e, s, i, a, r, n) {
                        var o, h, l, p, f, c, d = [].concat(r),
                            m = t.length - 1,
                            u = [],
                            g = [];
                        for (o = m; o >= 0; o -= 1) {
                            if ((c = this.searchProcessedElement(t[o])) ? e[o] = s[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                            else if ("gr" === t[o].ty) {
                                if (c)
                                    for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                                else e[o] = this.createGroupElement(t[o]);
                                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, d, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                            } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], d, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (f = e[o]).closed = !1 : ((f = tY.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[o].ty && (c ? (f = e[o]).closed = !0 : (f = tY.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), g.push(f));
                            this.addProcessedElement(t[o], o + 1)
                        }
                        for (m = u.length, o = 0; o < m; o += 1) u[o].closed = !0;
                        for (m = g.length, o = 0; o < m; o += 1) g[o].closed = !0
                    }, e4.prototype.renderInnerContent = function() {
                        this.renderModifiers();
                        var t, e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                    }, e4.prototype.renderShape = function() {
                        var t, e, s = this.animatedContents.length;
                        for (t = 0; t < s; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                    }, e4.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, e6.prototype.update = function(t, e, s, i, a, r) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== s && (this.sc = s, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = !0, n = !0), n
                    }, e8.prototype.defaultBoxWidth = [0, 0], e8.prototype.copyData = function(t, e) {
                        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                        return t
                    }, e8.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, e8.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, e8.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, e8.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                    }, e8.prototype.getValue = function(t) {
                        if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData,
                                s = this.keysIndex;
                            if (this.lock) return void this.setCurrentData(this.currentData);
                            this.lock = !0, this._mdf = !1;
                            var i, a = this.effectsSequence.length,
                                r = t || this.data.d.k[this.keysIndex].s;
                            for (i = 0; i < a; i += 1) r = s !== this.keysIndex ? this.effectsSequence[i](r, r.t) : this.effectsSequence[i](this.currentData, r.t);
                            e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }, e8.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && !(s === i - 1 || t[s + 1].t > e);) s += 1;
                        return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s
                    }, e8.prototype.buildFinalText = function(t) {
                        for (var e, s, i = [], a = 0, r = t.length, n = !1, o = !1, h = ""; a < r;) n = o, o = !1, e = t.charCodeAt(a), h = t.charAt(a), ec.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? ec.isRegionalFlag(t, a) ? h = t.substr(a, 14) : (s = t.charCodeAt(a + 1)) >= 56320 && s <= 57343 && (ec.isModifier(e, s) ? (h = t.substr(a, 2), n = !0) : h = ec.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (s = t.charCodeAt(a + 1), ec.isVariationSelector(e) && (n = !0)) : ec.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (i[i.length - 1] += h, n = !1) : i.push(h), a += h.length;
                        return i
                    }, e8.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, s, i, a, r, n, o, h = this.elem.globalData.fontManager,
                            l = this.data,
                            p = [],
                            f = 0,
                            c = l.m.g,
                            d = 0,
                            m = 0,
                            u = 0,
                            g = [],
                            y = 0,
                            v = 0,
                            b = h.getFontByName(t.f),
                            _ = 0,
                            C = ef(b);
                        t.fWeight = C.weight, t.fStyle = C.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
                        var x, k = t.tr / 1e3 * t.finalSize;
                        if (t.sz)
                            for (var S, P, D = !0, w = t.sz[0], A = t.sz[1]; D;) {
                                P = this.buildFinalText(t.t), S = 0, y = 0, s = P.length, k = t.tr / 1e3 * t.finalSize;
                                var T = -1;
                                for (e = 0; e < s; e += 1) x = P[e].charCodeAt(0), i = !1, " " === P[e] ? T = e : (13 === x || 3 === x) && (y = 0, i = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(P[e], b.fStyle, b.fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(P[e], t.f, t.finalSize), y + _ > w && " " !== P[e] ? (-1 === T ? s += 1 : e = T, S += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, +(T === e), "\r"), T = -1, y = 0) : (y += _, y += k);
                                S += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, s = t.finalText.length, D = !1)
                            }
                        y = -k, _ = 0;
                        var M, F = 0;
                        for (e = 0; e < s; e += 1)
                            if (i = !1, 13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x ? (F = 0, g.push(y), v = y > v ? y : v, y = -2 * k, a = "", i = !0, u += 1) : a = M, h.chars ? (o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(a, t.f, t.finalSize), " " === M ? F += _ + k : (y += _ + k + F, F = 0), p.push({
                                    l: _,
                                    an: _,
                                    add: d,
                                    n: i,
                                    anIndexes: [],
                                    val: a,
                                    line: u,
                                    animatorJustifyOffset: 0
                                }), 2 == c) {
                                if (d += _, "" === a || " " === a || e === s - 1) {
                                    for (("" === a || " " === a) && (d -= _); m <= e;) p[m].an = d, p[m].ind = f, p[m].extra = _, m += 1;
                                    f += 1, d = 0
                                }
                            } else if (3 == c) {
                            if (d += _, "" === a || e === s - 1) {
                                for ("" === a && (d -= _); m <= e;) p[m].an = d, p[m].ind = f, p[m].extra = _, m += 1;
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
                        var E, L, I = l.a;
                        n = I.length;
                        var R, V, z = [];
                        for (r = 0; r < n; r += 1) {
                            for ((E = I[r]).a.sc && (t.strokeColorAnim = !0), E.a.sw && (t.strokeWidthAnim = !0), (E.a.fc || E.a.fh || E.a.fs || E.a.fb) && (t.fillColorAnim = !0), V = 0, R = E.s.b, e = 0; e < s; e += 1)(L = p[e]).anIndexes[r] = V, (1 == R && "" !== L.val || 2 == R && "" !== L.val && " " !== L.val || 3 == R && (L.n || " " == L.val || e == s - 1) || 4 == R && (L.n || e == s - 1)) && (1 === E.s.rn && z.push(V), V += 1);
                            l.a[r].s.totalChars = V;
                            var O, N = -1;
                            if (1 === E.s.rn)
                                for (e = 0; e < s; e += 1) N != (L = p[e]).anIndexes[r] && (N = L.anIndexes[r], O = z.splice(Math.floor(Math.random() * z.length), 1)[0]), L.anIndexes[r] = O
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                    }, e8.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var s = this.copyData({}, this.data.d.k[e].s);
                        s = this.copyData(s, t), this.data.d.k[e].s = s, this.recalculate(e), this.setCurrentData(s), this.elem.addDynamicProperty(this)
                    }, e8.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                    }, e8.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, e8.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var e7 = function() {
                        var t = Math.max,
                            e = Math.min,
                            s = Math.floor;

                        function i(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = tw.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), "e" in e ? this.e = tw.getProp(t, e.e, 0, 0, this) : this.e = {
                                v: 100
                            }, this.o = tw.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = tw.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = tw.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = tw.getProp(t, e.sm || {
                                k: 100
                            }, 0, 0, this), this.a = tw.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return i.prototype = {
                            getMult: function(i) {
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
                                    c = this.data.sh;
                                if (2 === c) l = h(l = f === p ? +(i >= f) : t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
                                else if (3 === c) l = h(l = f === p ? i >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
                                else if (4 === c) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (i - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                                else if (5 === c) {
                                    if (f === p) l = 0;
                                    else {
                                        var d = f - p,
                                            m = -d / 2 + (i = e(t(0, i + .5 - p), f - p)),
                                            u = d / 2;
                                        l = Math.sqrt(1 - m * m / (u * u))
                                    }
                                    l = h(l)
                                } else 6 === c ? l = h(l = f === p ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (i = e(t(0, i + .5 - p), f - p)) / (f - p))) / 2) : (i >= s(p) && (l = i - p < 0 ? t(0, e(e(f, 1) - (p - i), 1)) : t(0, e(f - i, 1))), l = h(l));
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
                                    s = this.o.v / e,
                                    i = this.s.v / e + s,
                                    a = this.e.v / e + s;
                                if (i > a) {
                                    var r = i;
                                    i = a, a = r
                                }
                                this.finalS = i, this.finalE = a
                            }
                        }, g([tA], i), {
                            getTextSelectorProp: function(t, e, s) {
                                return new i(t, e)
                            }
                        }
                    }();

                    function st(t, e, s) {
                        var i = {
                                propType: !1
                            },
                            a = tw.getProp,
                            r = e.a;
                        this.a = {
                            r: r.r ? a(t, r.r, 0, T, s) : i,
                            rx: r.rx ? a(t, r.rx, 0, T, s) : i,
                            ry: r.ry ? a(t, r.ry, 0, T, s) : i,
                            sk: r.sk ? a(t, r.sk, 0, T, s) : i,
                            sa: r.sa ? a(t, r.sa, 0, T, s) : i,
                            s: r.s ? a(t, r.s, 1, .01, s) : i,
                            a: r.a ? a(t, r.a, 1, 0, s) : i,
                            o: r.o ? a(t, r.o, 0, .01, s) : i,
                            p: r.p ? a(t, r.p, 1, 0, s) : i,
                            sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
                            sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
                            fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
                            fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
                            fs: r.fs ? a(t, r.fs, 0, .01, s) : i,
                            fb: r.fb ? a(t, r.fb, 0, .01, s) : i,
                            t: r.t ? a(t, r.t, 0, 0, s) : i
                        }, this.s = e7.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t
                    }

                    function se(t, e, s) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = b(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s)
                    }

                    function ss() {}
                    se.prototype.searchProperties = function() {
                        var t, e, s = this._textData.a.length,
                            i = tw.getProp;
                        for (t = 0; t < s; t += 1) e = this._textData.a[t], this._animatorsData[t] = new st(this._elem, e, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: i(this._elem, this._textData.p.a, 0, 0, this),
                            f: i(this._elem, this._textData.p.f, 0, 0, this),
                            l: i(this._elem, this._textData.p.l, 0, 0, this),
                            r: i(this._elem, this._textData.p.r, 0, 0, this),
                            p: i(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                    }, se.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                            this._isFirstFrame = !1;
                            var s, i, a, r, n, o, h, l, p, f, c, d, m, u, g, y, v, b, _, C = this._moreOptions.alignment.v,
                                x = this._animatorsData,
                                k = this._textData,
                                S = this.mHelper,
                                P = this._renderType,
                                D = this.renderedLetters.length,
                                w = t.l;
                            if (this._hasMaskedPath) {
                                if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var A, T = _.v;
                                    for (this._pathData.r.v && (T = T.reverse()), n = {
                                            tLength: 0,
                                            segments: []
                                        }, r = T._length - 1, y = 0, a = 0; a < r; a += 1) A = tu.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]]), n.tLength += A.segmentLength, n.segments.push(A), y += A.segmentLength;
                                    a = r, _.v.c && (A = tu.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += A.segmentLength, n.segments.push(A), y += A.segmentLength), this._pathData.pi = n
                                }
                                if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && _.v.c)
                                    for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = u.length - 1, f = (m = u[c].points).length - 1; o < 0;) o += m[f].partialLength, (f -= 1) < 0 && (c -= 1, f = (m = u[c].points).length - 1);
                                d = (m = u[c].points)[f - 1], g = (h = m[f]).partialLength
                            }
                            r = w.length, s = 0, i = 0;
                            var M, F, E, L, I = 1.2 * t.finalSize * .714,
                                R = !0;
                            E = x.length;
                            var V, z, O, N, j, Y, J, H, X, G, K, U, Z, Q = -1,
                                $ = o,
                                tt = c,
                                te = f,
                                ts = -1,
                                ti = "",
                                ta = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var tr = 0,
                                    tn = 0,
                                    to = 2 === t.j ? -.5 : -1,
                                    th = 0,
                                    tl = !0;
                                for (a = 0; a < r; a += 1)
                                    if (w[a].n) {
                                        for (tr && (tr += tn); th < a;) w[th].animatorJustifyOffset = tr, th += 1;
                                        tr = 0, tl = !0
                                    } else {
                                        for (F = 0; F < E; F += 1)(M = x[F].a).t.propType && (tl && 2 === t.j && (tn += M.t.v * to), (V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars)).length ? tr += M.t.v * V[0] * to : tr += M.t.v * V * to);
                                        tl = !1
                                    } for (tr && (tr += tn); th < a;) w[th].animatorJustifyOffset = tr, th += 1
                            }
                            for (a = 0; a < r; a += 1) {
                                if (S.reset(), j = 1, w[a].n) s = 0, i += t.yOffset, i += +!!R, o = $, R = !1, this._hasMaskedPath && (c = tt, f = te, d = (m = u[c].points)[f - 1], g = (h = m[f]).partialLength, l = 0), ti = "", U = "", G = "", Z = "", ta = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (ts !== w[a].line) {
                                            switch (t.j) {
                                                case 1:
                                                    o += y - t.lineWidths[w[a].line];
                                                    break;
                                                case 2:
                                                    o += (y - t.lineWidths[w[a].line]) / 2
                                            }
                                            ts = w[a].line
                                        }
                                        Q !== w[a].ind && (w[Q] && (o += w[Q].extra), o += w[a].an / 2, Q = w[a].ind), o += C[0] * w[a].an * .005;
                                        var tp = 0;
                                        for (F = 0; F < E; F += 1)(M = x[F].a).p.propType && ((V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars)).length ? tp += M.p.v[0] * V[0] : tp += M.p.v[0] * V), M.a.propType && ((V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars)).length ? tp += M.a.v[0] * V[0] : tp += M.a.v[0] * V);
                                        for (p = !0, this._pathData.a.v && (o = .5 * w[0].an + (y - this._pathData.f.v - .5 * w[0].an - .5 * w[w.length - 1].an) * Q / (r - 1) + this._pathData.f.v); p;) l + g >= o + tp || !m ? (v = (o + tp - l) / h.partialLength, O = d.point[0] + (h.point[0] - d.point[0]) * v, N = d.point[1] + (h.point[1] - d.point[1]) * v, S.translate(-C[0] * w[a].an * .005, -(.01 * (C[1] * I))), p = !1) : m && (l += h.partialLength, (f += 1) >= m.length && (f = 0, u[c += 1] ? m = u[c].points : _.v.c ? (f = 0, m = u[c = 0].points) : (l -= h.partialLength, m = null)), m && (d = h, g = (h = m[f]).partialLength));
                                        z = w[a].an / 2 - w[a].add, S.translate(-z, 0, 0)
                                    } else z = w[a].an / 2 - w[a].add, S.translate(-z, 0, 0), S.translate(-C[0] * w[a].an * .005, -C[1] * I * .01, 0);
                                    for (F = 0; F < E; F += 1)(M = x[F].a).t.propType && (V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars), (0 !== s || 0 !== t.j) && (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? s += M.t.v * V[0] : s += M.t.v * V));
                                    for (t.strokeWidthAnim && (J = t.sw || 0), t.strokeColorAnim && (Y = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < E; F += 1)(M = x[F].a).a.propType && ((V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars)).length ? S.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : S.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                                    for (F = 0; F < E; F += 1)(M = x[F].a).s.propType && ((V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars)).length ? S.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : S.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                                    for (F = 0; F < E; F += 1) {
                                        if (M = x[F].a, V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars), M.sk.propType && (V.length ? S.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : S.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? S.rotateZ(-M.r.v * V[2]) : S.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? S.rotateY(M.ry.v * V[1]) : S.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? S.rotateX(M.rx.v * V[0]) : S.rotateX(M.rx.v * V)), M.o.propType && (V.length ? j += (M.o.v * V[0] - j) * V[0] : j += (M.o.v * V - j) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? J += M.sw.v * V[0] : J += M.sw.v * V), t.strokeColorAnim && M.sc.propType)
                                            for (X = 0; X < 3; X += 1) V.length ? Y[X] += (M.sc.v[X] - Y[X]) * V[0] : Y[X] += (M.sc.v[X] - Y[X]) * V;
                                        if (t.fillColorAnim && t.fc) {
                                            if (M.fc.propType)
                                                for (X = 0; X < 3; X += 1) V.length ? H[X] += (M.fc.v[X] - H[X]) * V[0] : H[X] += (M.fc.v[X] - H[X]) * V;
                                            M.fh.propType && (H = V.length ? W(H, M.fh.v * V[0]) : W(H, M.fh.v * V)), M.fs.propType && (H = V.length ? q(H, M.fs.v * V[0]) : q(H, M.fs.v * V)), M.fb.propType && (H = V.length ? B(H, M.fb.v * V[0]) : B(H, M.fb.v * V))
                                        }
                                    }
                                    for (F = 0; F < E; F += 1)(M = x[F].a).p.propType && (V = x[F].s.getMult(w[a].anIndexes[F], k.a[F].s.totalChars), this._hasMaskedPath ? V.length ? S.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : S.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? S.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : S.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                                    if (t.strokeWidthAnim && (G = J < 0 ? 0 : J), t.strokeColorAnim && (K = "rgb(" + Math.round(255 * Y[0]) + "," + Math.round(255 * Y[1]) + "," + Math.round(255 * Y[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                        if (S.translate(0, -t.ls), S.translate(0, C[1] * I * .01 + i, 0), this._pathData.p.v) {
                                            var tf = 180 * Math.atan(b = (h.point[1] - d.point[1]) / (h.point[0] - d.point[0])) / Math.PI;
                                            h.point[0] < d.point[0] && (tf += 180), S.rotate(-tf * Math.PI / 180)
                                        }
                                        S.translate(O, N, 0), o -= C[0] * w[a].an * .005, w[a + 1] && Q !== w[a + 1].ind && (o += w[a].an / 2, o += .001 * t.tr * t.finalSize)
                                    } else {
                                        switch (S.translate(s, i, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                            case 1:
                                                S.translate(w[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[a].line]), 0, 0);
                                                break;
                                            case 2:
                                                S.translate(w[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[a].line]) / 2, 0, 0)
                                        }
                                        S.translate(0, -t.ls), S.translate(z, 0, 0), S.translate(C[0] * w[a].an * .005, C[1] * I * .01, 0), s += w[a].l + .001 * t.tr * t.finalSize
                                    }
                                    "html" === P ? ti = S.toCSS() : "svg" === P ? ti = S.to2dCSS() : ta = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], Z = j
                                }
                                D <= a ? (L = new e6(Z, G, K, U, ti, ta), this.renderedLetters.push(L), D += 1, this.lettersChangedFlag = !0) : (L = this.renderedLetters[a], this.lettersChangedFlag = L.update(Z, G, K, U, ti, ta) || this.lettersChangedFlag)
                            }
                        }
                    }, se.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, se.prototype.mHelper = new tR, se.prototype.defaultPropsArray = [], g([tA], se), ss.prototype.initElement = function(t, e, s) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new e8(this, t.t, this.dynamicProperties), this.textAnimator = new se(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, ss.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }, ss.prototype.createPathShape = function(t, e) {
                        var s, i, a = e.length,
                            r = "";
                        for (s = 0; s < a; s += 1) "sh" === e[s].ty && (r += e5(i = e[s].ks.k, i.i.length, !0, t));
                        return r
                    }, ss.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e)
                    }, ss.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t)
                    }, ss.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t)
                    }, ss.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, a) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0)
                        }
                        e.translate(i, a, 0)
                    }, ss.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                    }, ss.prototype.emptyProp = new e6, ss.prototype.destroy = function() {}, ss.prototype.validateText = function() {
                        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    };
                    var si = {
                        shapes: []
                    };

                    function sa(t, e, s) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, s)
                    }

                    function sr(t, e, s) {
                        this.initElement(t, e, s)
                    }

                    function sn(t, e, s) {
                        this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy()
                    }

                    function so() {}

                    function sh() {}

                    function sl(t, e, s) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? b(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? tw.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function sp(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = $("svg");
                        var s = "";
                        if (e && e.title) {
                            var i = $("title"),
                                a = z();
                            i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), s += a
                        }
                        if (e && e.description) {
                            var r = $("desc"),
                                n = z();
                            r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), s += " " + n
                        }
                        s && this.svgElement.setAttribute("aria-labelledby", s);
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

                    function sf() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                    }
                    g([eD, eE, eN, eq, ew, eB, ss], sa), sa.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = $("text"))
                    }, sa.prototype.buildTextContents = function(t) {
                        for (var e = 0, s = t.length, i = [], a = ""; e < s;) "\r" === t[e] || "\x03" === t[e] ? (i.push(a), a = "") : a += t[e], e += 1;
                        return i.push(a), i
                    }, sa.prototype.buildShapeData = function(t, e) {
                        if (t.shapes && t.shapes.length) {
                            var s = t.shapes[0];
                            if (s.it) {
                                var i = s.it[s.it.length - 1];
                                i.s && (i.s.k[0] = e, i.s.k[1] = e)
                            }
                        }
                        return t
                    }, sa.prototype.buildNewText = function() {
                        this.addDynamicProperty(this);
                        var t, e, s = this.textProperty.currentData;
                        this.renderedLetters = b(s ? s.l.length : 0), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.finalSize);
                        var i = this.globalData.fontManager.getFontByName(s.f);
                        if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", i.fFamily);
                            var a = s.fWeight,
                                r = s.fStyle;
                            this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
                        }
                        this.layerElement.setAttribute("aria-label", s.t);
                        var n = s.l || [],
                            o = !!this.globalData.fontManager.chars;
                        e = n.length;
                        var h, l = this.mHelper,
                            p = this.data.singleShape,
                            f = 0,
                            c = 0,
                            d = !0,
                            m = .001 * s.tr * s.finalSize;
                        if (!p || o || s.sz) {
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
                                if (l.reset(), p && (n[t].n && (f = -m, c += s.yOffset, c += +!!d, d = !1), this.applyTextPropertiesToMatrix(s, l, n[t].line, f, c), f += n[t].l || 0, f += m), o) {
                                    if (1 === (u = this.globalData.fontManager.getCharData(s.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily)).t) v = new sl(u.data, this.globalData, this);
                                    else {
                                        var v, _ = si;
                                        u.data && u.data.shapes && (_ = this.buildShapeData(u.data, s.finalSize)), v = new e4(_, this.globalData, this)
                                    }
                                    if (this.textSpans[t].glyph) {
                                        var C = this.textSpans[t].glyph;
                                        this.textSpans[t].childSpan.removeChild(C.layerElement), C.destroy()
                                    }
                                    this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + s.finalSize / 100 + "," + s.finalSize / 100 + ")")
                                } else p && h.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), h.textContent = n[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                            }
                            p && h && h.setAttribute("d", "")
                        } else {
                            var x = this.textContainer,
                                k = "start";
                            switch (s.j) {
                                case 1:
                                    k = "end";
                                    break;
                                case 2:
                                    k = "middle";
                                    break;
                                default:
                                    k = "start"
                            }
                            x.setAttribute("text-anchor", k), x.setAttribute("letter-spacing", m);
                            var S = this.buildTextContents(s.finalText);
                            for (e = S.length, c = s.ps ? s.ps[1] + s.ascent : 0, t = 0; t < e; t += 1)(h = this.textSpans[t].span || $("tspan")).textContent = S[t], h.setAttribute("x", 0), h.setAttribute("y", c), h.style.display = "inherit", x.appendChild(h), this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[t].span = h, c += s.finalLineHeight;
                            this.layerElement.appendChild(x)
                        }
                        for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                        this._sizeChanged = !0
                    }, sa.prototype.sourceRectAtTime = function() {
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
                    }, sa.prototype.getValue = function() {
                        var t, e, s = this.textSpans.length;
                        for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < s; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                    }, sa.prototype.renderInnerContent = function() {
                        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            this._sizeChanged = !0;
                            var t, e, s, i, a, r = this.textAnimator.renderedLetters,
                                n = this.textProperty.currentData.l;
                            for (i = 0, a = n.length; i < a; i += 1) n[i].n || (t = r[i], e = this.textSpans[i].span, (s = this.textSpans[i].glyph) && s.renderFrame(), t._mdf.m && e.setAttribute("transform", t.m), t._mdf.o && e.setAttribute("opacity", t.o), t._mdf.sw && e.setAttribute("stroke-width", t.sw), t._mdf.sc && e.setAttribute("stroke", t.sc), t._mdf.fc && e.setAttribute("fill", t.fc))
                        }
                    }, g([eW], sr), sr.prototype.createContent = function() {
                        var t = $("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                    }, sn.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, sn.prototype.renderFrame = function() {}, sn.prototype.getBaseElement = function() {
                        return null
                    }, sn.prototype.destroy = function() {}, sn.prototype.sourceRectAtTime = function() {}, sn.prototype.hide = function() {}, g([eD, eE, eq, ew], sn), g([eM], so), so.prototype.createNull = function(t) {
                        return new sn(t, this.globalData, this)
                    }, so.prototype.createShape = function(t) {
                        return new e4(t, this.globalData, this)
                    }, so.prototype.createText = function(t) {
                        return new sa(t, this.globalData, this)
                    }, so.prototype.createImage = function(t) {
                        return new eW(t, this.globalData, this)
                    }, so.prototype.createSolid = function(t) {
                        return new sr(t, this.globalData, this)
                    }, so.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var s = $("clipPath"),
                            i = $("rect");
                        i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                        var a = z();
                        s.setAttribute("id", a), s.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + m() + "#" + a + ")"), e.appendChild(s), this.layers = t.layers, this.elements = b(t.layers.length)
                    }, so.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, so.prototype.updateContainerSize = function() {}, so.prototype.findIndexByInd = function(t) {
                        var e = 0,
                            s = this.layers.length;
                        for (e = 0; e < s; e += 1)
                            if (this.layers[e].ind === t) return e;
                        return -1
                    }, so.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || 99 === this.layers[t].ty)) {
                            e[t] = !0;
                            var s = this.createItem(this.layers[t]);
                            if (e[t] = s, K() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt) {
                                var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                                if (-1 === i) return;
                                if (this.elements[i] && !0 !== this.elements[i]) {
                                    var a = e[i].getMatte(this.layers[t].tt);
                                    s.setMatte(a)
                                } else this.buildItem(i), this.addPendingElement(s)
                            }
                        }
                    }, so.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) {
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt)
                                for (var e = 0, s = this.elements.length; e < s;) {
                                    if (this.elements[e] === t) {
                                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                            a = this.elements[i].getMatte(this.layers[e].tt);
                                        t.setMatte(a);
                                        break
                                    }
                                    e += 1
                                }
                        }
                    }, so.prototype.renderFrame = function(t) {
                        if (!(this.renderedFrame === t || this.destroyed)) {
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var e, s = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf)
                                for (e = 0; e < s; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }
                    }, so.prototype.appendElementInPos = function(t, e) {
                        var s = t.getBaseElement();
                        if (s) {
                            for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                            i ? this.layerElement.insertBefore(s, i) : this.layerElement.appendChild(s)
                        }
                    }, so.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, so.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, g([eD, eE, eq, ew, eB], sh), sh.prototype.initElement = function(t, e, s) {
                        this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
                    }, sh.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                            }
                            var s, i = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0))
                        }
                    }, sh.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, sh.prototype.setElements = function(t) {
                        this.elements = t
                    }, sh.prototype.getElements = function() {
                        return this.elements
                    }, sh.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                    }, sh.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, g([so, sh, eN], sl), sl.prototype.createComp = function(t) {
                        return new sl(t, this.globalData, this)
                    }, g([so], sp), sp.prototype.createComp = function(t) {
                        return new sl(t, this.globalData, this)
                    }, sf.prototype = {
                        addTransformSequence: function(t) {
                            var e, s = t.length,
                                i = "_";
                            for (e = 0; e < s; e += 1) i += t[e].transform.key + "_";
                            var a = this.sequences[i];
                            return a || (a = {
                                transforms: [].concat(t),
                                finalTransform: new tR,
                                _mdf: !1
                            }, this.sequences[i] = a, this.sequenceList.push(a)), a
                        },
                        processSequence: function(t, e) {
                            for (var s = 0, i = t.transforms.length, a = e; s < i && !e;) {
                                if (t.transforms[s].transform.mProps._mdf) {
                                    a = !0;
                                    break
                                }
                                s += 1
                            }
                            if (a)
                                for (t.finalTransform.reset(), s = i - 1; s >= 0; s -= 1) t.finalTransform.multiply(t.transforms[s].transform.mProps.v);
                            t._mdf = a
                        },
                        processSequences: function(t) {
                            var e, s = this.sequenceList.length;
                            for (e = 0; e < s; e += 1) this.processSequence(this.sequenceList[e], t)
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count
                        }
                    };
                    var sc = function() {
                            var t = "__lottie_element_luma_buffer",
                                e = null,
                                s = null,
                                i = null;

                            function a() {
                                var a, r, n;
                                e || (a = $("svg"), r = $("filter"), n = $("feColorMatrix"), r.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), r.appendChild(n), a.appendChild(r), a.setAttribute("id", t + "_svg"), eR.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), (s = (e = u("canvas")).getContext("2d")).filter = "url(#" + t + ")", s.fillStyle = "rgba(0,0,0,0)", s.fillRect(0, 0, 1, 1))
                            }
                            return {
                                load: a,
                                get: function(i) {
                                    return e || a(), e.width = i.width, e.height = i.height, s.filter = "url(#" + t + ")", e
                                }
                            }
                        },
                        sd = {
                            loadLumaCanvas: sc.load,
                            getLumaCanvas: sc.get,
                            createCanvas: function(t, e) {
                                if (eR.offscreenCanvas) return new OffscreenCanvas(t, e);
                                var s = u("canvas");
                                return s.width = t, s.height = e, s
                            }
                        },
                        sm = {};

                    function su(t) {
                        var e, s, i = t.data.ef ? t.data.ef.length : 0;
                        for (s = 0, this.filters = []; s < i; s += 1) {
                            e = null;
                            var a = t.data.ef[s].ty;
                            sm[a] && (e = new sm[a].effect(t.effectsManager.effectElements[s], t)), e && this.filters.push(e)
                        }
                        this.filters.length && t.addRenderableComponent(this)
                    }

                    function sg(t, e) {
                        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = b(this.masksProperties.length);
                        var s, i = this.masksProperties.length,
                            a = !1;
                        for (s = 0; s < i; s += 1) "n" !== this.masksProperties[s].mode && (a = !0), this.viewData[s] = tI.getShapeProp(this.element, this.masksProperties[s], 3);
                        this.hasMasks = a, a && this.element.addRenderableComponent(this)
                    }

                    function sy() {}
                    su.prototype.renderFrame = function(t) {
                        var e, s = this.filters.length;
                        for (e = 0; e < s; e += 1) this.filters[e].renderFrame(t)
                    }, su.prototype.getEffects = function(t) {
                        var e, s = this.filters.length,
                            i = [];
                        for (e = 0; e < s; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
                        return i
                    }, sg.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var t, e, s, i, a = this.element.finalTransform.mat,
                                r = this.element.canvasContext,
                                n = this.masksProperties.length;
                            for (r.beginPath(), t = 0; t < n; t += 1)
                                if ("n" !== this.masksProperties[t].mode) {
                                    this.masksProperties[t].inv && (r.moveTo(0, 0), r.lineTo(this.element.globalData.compSize.w, 0), r.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), r.lineTo(0, this.element.globalData.compSize.h), r.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), r.moveTo(e[0], e[1]);
                                    var o, h = i._length;
                                    for (o = 1; o < h; o += 1) s = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), r.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                                    s = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), r.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5])
                                } this.element.globalData.renderer.save(!0), r.clip()
                        }
                    }, sg.prototype.getMaskProperty = eL.prototype.getMaskProperty, sg.prototype.destroy = function() {
                        this.element = null
                    };
                    var sv = {
                        1: "source-in",
                        2: "source-out",
                        3: "source-in",
                        4: "source-out"
                    };

                    function sb(t, e, s, i) {
                        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                        var a = 4;
                        "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = tI.getShapeProp(t, e, a, t);
                        var r, n, o = s.length;
                        for (r = 0; r < o; r += 1) s[r].closed || (n = {
                            transforms: i.addTransformSequence(s[r].transforms),
                            trNodes: []
                        }, this.styledShapes.push(n), s[r].elements.push(n))
                    }

                    function s_(t, e, s) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new sf, this.initElement(t, e, s)
                    }

                    function sC(t, e, s) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(t, e, s)
                    }

                    function sx(t, e, s) {
                        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, s)
                    }

                    function sk(t, e, s) {
                        this.initElement(t, e, s)
                    }

                    function sS() {}

                    function sP() {
                        this.opacity = -1, this.transform = v("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
                    }

                    function sD() {
                        var t;
                        for (this.stack = [], this.cArrPos = 0, this.cTr = new tR, t = 0; t < 15; t += 1) {
                            var e = new sP;
                            this.stack[t] = e
                        }
                        this._length = 15, this.nativeContext = null, this.transformMat = new tR, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
                    }

                    function sw(t, e, s) {
                        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = b(this.layers.length), this.initElement(t, e, s), this.tm = t.tm ? tw.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function sA(t, e) {
                        this.animationItem = t, this.renderConfig = {
                            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                            context: e && e.context || null,
                            progressiveLoad: e && e.progressiveLoad || !1,
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            className: e && e.className || "",
                            id: e && e.id || "",
                            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new sD, this.elements = [], this.pendingElements = [], this.transformMat = new tR, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
                    }
                    return sy.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            if (this.data.tt >= 1) {
                                this.buffers = [];
                                var t = this.globalData.canvasContext,
                                    e = sd.createCanvas(t.canvas.width, t.canvas.height);
                                this.buffers.push(e);
                                var s = sd.createCanvas(t.canvas.width, t.canvas.height);
                                this.buffers.push(s), this.data.tt >= 3 && !document._isProxy && sd.loadLumaCanvas()
                            }
                            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new su(this), this.searchEffectTransforms()
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var t = this.globalData;
                            if (t.blendMode !== this.data.bm) {
                                t.blendMode = this.data.bm;
                                var e = eu(this.data.bm);
                                t.canvasContext.globalCompositeOperation = e
                            }
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new sg(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(eF)
                        },
                        hideElement: function() {
                            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                        },
                        clearCanvas: function(t) {
                            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                        },
                        prepareLayer: function() {
                            if (this.data.tt >= 1) {
                                var t = this.buffers[0].getContext("2d");
                                this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                            }
                        },
                        exitLayer: function() {
                            if (this.data.tt >= 1) {
                                var t = this.buffers[1],
                                    e = t.getContext("2d");
                                if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                    var s = sd.getLumaCanvas(this.canvasContext.canvas);
                                    s.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
                                }
                                this.canvasContext.globalCompositeOperation = sv[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                            }
                        },
                        renderFrame: function(t) {
                            if (!(this.hidden || this.data.hd) && !(1 === this.data.td && !t)) {
                                this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                                var e = 0 === this.data.ty;
                                this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                            }
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                        },
                        mHelper: new tR
                    }, sy.prototype.hide = sy.prototype.hideElement, sy.prototype.show = sy.prototype.showElement, sb.prototype.setAsAnimated = eX.prototype.setAsAnimated, g([eD, eE, sy, eY, eq, ew, em], s_), s_.prototype.initElement = eB.prototype.initElement, s_.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, s_.prototype.dashResetter = [], s_.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                    }, s_.prototype.createStyleElement = function(t, e) {
                        var s = {
                                data: t,
                                type: t.ty,
                                preTransforms: this.transformsManager.addTransformSequence(e),
                                transforms: [],
                                elements: [],
                                closed: !0 === t.hd
                            },
                            i = {};
                        return ("fl" === t.ty || "st" === t.ty ? (i.c = tw.getProp(this, t.c, 1, 255, this), i.c.k || (s.co = "rgb(" + D(i.c.v[0]) + "," + D(i.c.v[1]) + "," + D(i.c.v[2]) + ")")) : ("gf" === t.ty || "gs" === t.ty) && (i.s = tw.getProp(this, t.s, 1, null, this), i.e = tw.getProp(this, t.e, 1, null, this), i.h = tw.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), i.a = tw.getProp(this, t.a || {
                            k: 0
                        }, 0, T, this), i.g = new e$(this, t.g, this)), i.o = tw.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) ? (s.lc = eJ[t.lc || 2], s.lj = eH[t.lj || 2], 1 == t.lj && (s.ml = t.ml), i.w = tw.getProp(this, t.w, 0, null, this), i.w.k || (s.wi = i.w.v), t.d && (i.d = new eK(this, t.d, "canvas", this), i.d.k || (s.da = i.d.dashArray, s.do = i.d.dashoffset[0]))) : s.r = 2 === t.r ? "evenodd" : "nonzero", this.stylesList.push(s), i.style = s, i
                    }, s_.prototype.createGroupElement = function() {
                        return {
                            it: [],
                            prevViewData: []
                        }
                    }, s_.prototype.createTransformElement = function(t) {
                        return {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: tw.getProp(this, t.o, 0, .01, this),
                                mProps: tG.getTransformProperty(this, t, this)
                            }
                        }
                    }, s_.prototype.createShapeElement = function(t) {
                        var e = new sb(this, t, this.stylesList, this.transformsManager);
                        return this.shapes.push(e), this.addShapeToModifiers(e), e
                    }, s_.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                    }, s_.prototype.addTransformToStyleList = function(t) {
                        var e, s = this.stylesList.length;
                        for (e = 0; e < s; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                    }, s_.prototype.removeTransformFromStyleList = function() {
                        var t, e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                    }, s_.prototype.closeStyles = function(t) {
                        var e, s = t.length;
                        for (e = 0; e < s; e += 1) t[e].closed = !0
                    }, s_.prototype.searchShapes = function(t, e, s, i, a) {
                        var r, n, o, h, l, p, f = t.length - 1,
                            c = [],
                            d = [],
                            m = [].concat(a);
                        for (r = f; r >= 0; r -= 1) {
                            if ((h = this.searchProcessedElement(t[r])) ? e[r] = s[h - 1] : t[r]._shouldRender = i, "fl" === t[r].ty || "st" === t[r].ty || "gf" === t[r].ty || "gs" === t[r].ty) h ? e[r].style.closed = !1 : e[r] = this.createStyleElement(t[r], m), c.push(e[r].style);
                            else if ("gr" === t[r].ty) {
                                if (h)
                                    for (o = e[r].it.length, n = 0; n < o; n += 1) e[r].prevViewData[n] = e[r].it[n];
                                else e[r] = this.createGroupElement(t[r]);
                                this.searchShapes(t[r].it, e[r].it, e[r].prevViewData, i, m)
                            } else "tr" === t[r].ty ? (h || (p = this.createTransformElement(t[r]), e[r] = p), m.push(e[r]), this.addTransformToStyleList(e[r])) : "sh" === t[r].ty || "rc" === t[r].ty || "el" === t[r].ty || "sr" === t[r].ty ? h || (e[r] = this.createShapeElement(t[r])) : "tm" === t[r].ty || "rd" === t[r].ty || "pb" === t[r].ty || "zz" === t[r].ty || "op" === t[r].ty ? (h ? (l = e[r]).closed = !1 : ((l = tY.getModifier(t[r].ty)).init(this, t[r]), e[r] = l, this.shapeModifiers.push(l)), d.push(l)) : "rp" === t[r].ty && (h ? (l = e[r]).closed = !0 : (l = tY.getModifier(t[r].ty), e[r] = l, l.init(this, t, r, e), this.shapeModifiers.push(l), i = !1), d.push(l));
                            this.addProcessedElement(t[r], r + 1)
                        }
                        for (this.removeTransformFromStyleList(), this.closeStyles(c), f = d.length, r = 0; r < f; r += 1) d[r].closed = !0
                    }, s_.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                    }, s_.prototype.renderShapeTransform = function(t, e) {
                        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                    }, s_.prototype.drawLayer = function() {
                        var t, e, s, i, a, r, n, o, h, l = this.stylesList.length,
                            p = this.globalData.renderer,
                            f = this.globalData.canvasContext;
                        for (t = 0; t < l; t += 1)
                            if (!(("st" === (o = (h = this.stylesList[t]).type) || "gs" === o) && 0 === h.wi || !h.data._shouldRender || 0 === h.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                                for (p.save(), r = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), s = r.length, e = 0; e < s; e += 1) {
                                    for (("st" === o || "gs" === o) && (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = r[e].trNodes).length, i = 0; i < a; i += 1) "m" === n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? f.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : f.closePath();
                                    ("st" === o || "gs" === o) && (p.ctxStroke(), h.da && f.setLineDash(this.dashResetter))
                                }
                                "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r), p.restore()
                            }
                    }, s_.prototype.renderShape = function(t, e, s, i) {
                        var a, r, n = e.length - 1;
                        for (r = t, a = n; a >= 0; a -= 1) "tr" === e[a].ty ? (r = s[a].transform, this.renderShapeTransform(t, r)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], s[a]) : "fl" === e[a].ty ? this.renderFill(e[a], s[a], r) : "st" === e[a].ty ? this.renderStroke(e[a], s[a], r) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], s[a], r) : "gr" === e[a].ty ? this.renderShape(r, e[a].it, s[a].it) : e[a].ty;
                        i && this.drawLayer()
                    }, s_.prototype.renderStyledShape = function(t, e) {
                        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                            var s, i, a, r = t.trNodes,
                                n = e.paths,
                                o = n._length;
                            r.length = 0;
                            var h = t.transforms.finalTransform;
                            for (a = 0; a < o; a += 1) {
                                var l = n.shapes[a];
                                if (l && l.v) {
                                    for (i = l._length, s = 1; s < i; s += 1) 1 === s && r.push({
                                        t: "m",
                                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), r.push({
                                        t: "c",
                                        pts: h.applyToTriplePoints(l.o[s - 1], l.i[s], l.v[s])
                                    });
                                    1 === i && r.push({
                                        t: "m",
                                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), l.c && i && (r.push({
                                        t: "c",
                                        pts: h.applyToTriplePoints(l.o[s - 1], l.i[0], l.v[0])
                                    }), r.push({
                                        t: "z"
                                    }))
                                }
                            }
                            t.trNodes = r
                        }
                    }, s_.prototype.renderPath = function(t, e) {
                        if (!0 !== t.hd && t._shouldRender) {
                            var s, i = e.styledShapes.length;
                            for (s = 0; s < i; s += 1) this.renderStyledShape(e.styledShapes[s], e.sh)
                        }
                    }, s_.prototype.renderFill = function(t, e, s) {
                        var i = e.style;
                        (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + D(e.c.v[0]) + "," + D(e.c.v[1]) + "," + D(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity)
                    }, s_.prototype.renderGradientFill = function(t, e, s) {
                        var i, a = e.style;
                        if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                            var r = this.globalData.canvasContext,
                                n = e.s.v,
                                o = e.e.v;
                            if (1 === t.t) i = r.createLinearGradient(n[0], n[1], o[0], o[1]);
                            else {
                                var h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)),
                                    l = Math.atan2(o[1] - n[1], o[0] - n[0]),
                                    p = e.h.v;
                                p >= 1 ? p = .99 : p <= -1 && (p = -.99);
                                var f = h * p,
                                    c = Math.cos(l + e.a.v) * f + n[0],
                                    d = Math.sin(l + e.a.v) * f + n[1];
                                i = r.createRadialGradient(c, d, 0, n[0], n[1], h)
                            }
                            var m, u = t.g.p,
                                g = e.g.c,
                                y = 1;
                            for (m = 0; m < u; m += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * m + 1]), i.addColorStop(g[4 * m] / 100, "rgba(" + g[4 * m + 1] + "," + g[4 * m + 2] + "," + g[4 * m + 3] + "," + y + ")");
                            a.grd = i
                        }
                        a.coOp = e.o.v * s.opacity
                    }, s_.prototype.renderStroke = function(t, e, s) {
                        var i = e.style,
                            a = e.d;
                        a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + D(e.c.v[0]) + "," + D(e.c.v[1]) + "," + D(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                    }, s_.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                    }, g([eD, eE, sy, eq, ew, em, ss], sC), sC.prototype.tHelper = u("canvas").getContext("2d"), sC.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = b(t.l ? t.l.length : 0);
                        var e = !1;
                        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                        var s = !1;
                        t.sc && (s = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                        var i, a, r = this.globalData.fontManager.getFontByName(t.f),
                            n = t.l,
                            o = this.mHelper;
                        this.stroke = s, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
                        var h, l, p, f, c, d, m, u, g, y, v = this.data.singleShape,
                            _ = .001 * t.tr * t.finalSize,
                            C = 0,
                            x = 0,
                            k = !0,
                            S = 0;
                        for (i = 0; i < a; i += 1) {
                            l = (h = this.globalData.fontManager.getCharData(t.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[i].n && (C = -_, x += t.yOffset, x += +!!k, k = !1), m = (c = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[i].line, C, x), g = b(m - 1);
                            var P = 0;
                            for (d = 0; d < m; d += 1)
                                if ("sh" === c[d].ty) {
                                    for (f = c[d].ks.k.i.length, u = c[d].ks.k, y = [], p = 1; p < f; p += 1) 1 === p && y.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                                    y.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g[P] = y, P += 1
                                } v && (C += n[i].l, C += _), this.textSpans[S] ? this.textSpans[S].elem = g : this.textSpans[S] = {
                                elem: g
                            }, S += 1
                        }
                    }, sC.prototype.renderInnerContent = function() {
                        this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        var t, e, s, i, a, r, n = this.textAnimator.renderedLetters,
                            o = this.textProperty.currentData.l;
                        e = o.length;
                        var h, l, p, f = null,
                            c = null,
                            d = null,
                            m = this.globalData.renderer;
                        for (t = 0; t < e; t += 1)
                            if (!o[t].n) {
                                if ((h = n[t]) && (m.save(), m.ctxTransform(h.p), m.ctxOpacity(h.o)), this.fill) {
                                    for (h && h.fc ? f !== h.fc && (m.ctxFillStyle(h.fc), f = h.fc) : f !== this.values.fill && (f = this.values.fill, m.ctxFillStyle(this.values.fill)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
                                        for (r = (p = l[s]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                                    this.globalData.canvasContext.closePath(), m.ctxFill()
                                }
                                if (this.stroke) {
                                    for (h && h.sw ? d !== h.sw && (d = h.sw, m.ctxLineWidth(h.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), h && h.sc ? c !== h.sc && (c = h.sc, m.ctxStrokeStyle(h.sc)) : c !== this.values.stroke && (c = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
                                        for (r = (p = l[s]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                                    this.globalData.canvasContext.closePath(), m.ctxStroke()
                                }
                                h && this.globalData.renderer.restore()
                            }
                    }, g([eD, eE, sy, eq, ew, em], sx), sx.prototype.initElement = e4.prototype.initElement, sx.prototype.prepareFrame = eW.prototype.prepareFrame, sx.prototype.createContent = function() {
                        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                            var t = u("canvas");
                            t.width = this.assetData.w, t.height = this.assetData.h;
                            var e, s, i = t.getContext("2d"),
                                a = this.img.width,
                                r = this.img.height,
                                n = a / r,
                                o = this.assetData.w / this.assetData.h,
                                h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                            n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (s = r) * o : s = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (r - s) / 2, e, s, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                        }
                    }, sx.prototype.renderInnerContent = function() {
                        this.canvasContext.drawImage(this.img, 0, 0)
                    }, sx.prototype.destroy = function() {
                        this.img = null
                    }, g([eD, eE, sy, eq, ew, em], sk), sk.prototype.initElement = e4.prototype.initElement, sk.prototype.prepareFrame = eW.prototype.prepareFrame, sk.prototype.renderInnerContent = function() {
                        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
                    }, g([eM], sS), sS.prototype.createShape = function(t) {
                        return new s_(t, this.globalData, this)
                    }, sS.prototype.createText = function(t) {
                        return new sC(t, this.globalData, this)
                    }, sS.prototype.createImage = function(t) {
                        return new sx(t, this.globalData, this)
                    }, sS.prototype.createSolid = function(t) {
                        return new sk(t, this.globalData, this)
                    }, sS.prototype.createNull = sp.prototype.createNull, sS.prototype.ctxTransform = function(t) {
                        1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                    }, sS.prototype.ctxOpacity = function(t) {
                        this.canvasContext.globalAlpha *= t < 0 ? 0 : t
                    }, sS.prototype.ctxFillStyle = function(t) {
                        this.canvasContext.fillStyle = t
                    }, sS.prototype.ctxStrokeStyle = function(t) {
                        this.canvasContext.strokeStyle = t
                    }, sS.prototype.ctxLineWidth = function(t) {
                        this.canvasContext.lineWidth = t
                    }, sS.prototype.ctxLineCap = function(t) {
                        this.canvasContext.lineCap = t
                    }, sS.prototype.ctxLineJoin = function(t) {
                        this.canvasContext.lineJoin = t
                    }, sS.prototype.ctxMiterLimit = function(t) {
                        this.canvasContext.miterLimit = t
                    }, sS.prototype.ctxFill = function(t) {
                        this.canvasContext.fill(t)
                    }, sS.prototype.ctxFillRect = function(t, e, s, i) {
                        this.canvasContext.fillRect(t, e, s, i)
                    }, sS.prototype.ctxStroke = function() {
                        this.canvasContext.stroke()
                    }, sS.prototype.reset = function() {
                        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                    }, sS.prototype.save = function() {
                        this.canvasContext.save()
                    }, sS.prototype.restore = function(t) {
                        this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
                    }, sS.prototype.configAnimation = function(t) {
                        if (this.animationItem.wrapper) {
                            this.animationItem.container = u("canvas");
                            var e = this.animationItem.container.style;
                            e.width = "100%", e.height = "100%";
                            var s = "0px 0px 0px";
                            e.transformOrigin = s, e.mozTransformOrigin = s, e.webkitTransformOrigin = s, e["-webkit-transform"] = s, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                        } else this.canvasContext = this.renderConfig.context;
                        this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                            w: t.w,
                            h: t.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = b(t.layers.length), this.updateContainerSize()
                    }, sS.prototype.updateContainerSize = function(t, e) {
                        if (this.reset(), t ? (s = t, i = e, this.canvasContext.canvas.width = s, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (s = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (s = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = s * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                            var s, i, a, r, n = this.renderConfig.preserveAspectRatio.split(" "),
                                o = n[1] || "meet",
                                h = n[0] || "xMidYMid",
                                l = h.substr(0, 4),
                                p = h.substr(4);
                            a = s / i, (r = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || r < a && "slice" === o ? (this.transformCanvas.sx = s / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), "xMid" === l && (r < a && "meet" === o || r > a && "slice" === o) ? this.transformCanvas.tx = (s - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (r < a && "meet" === o || r > a && "slice" === o) ? this.transformCanvas.tx = (s - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, "YMid" === p && (r > a && "meet" === o || r < a && "slice" === o) ? this.transformCanvas.ty = (i - this.transformCanvas.h * (s / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (r > a && "meet" === o || r < a && "slice" === o) ? this.transformCanvas.ty = (i - this.transformCanvas.h * (s / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
                        } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = s / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
                        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                    }, sS.prototype.destroy = function() {
                        var t;
                        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                    }, sS.prototype.renderFrame = function(t, e) {
                        if (!(this.renderedFrame === t && !0 === this.renderConfig.clearCanvas && !e || this.destroyed || -1 === t)) {
                            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                            var s, i = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(t - this.layers[s].st);
                            if (this.globalData._mdf) {
                                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && this.elements[s].renderFrame();
                                !0 !== this.renderConfig.clearCanvas && this.restore()
                            }
                        }
                    }, sS.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || 99 === this.layers[t].ty)) {
                            var s = this.createItem(this.layers[t], this, this.globalData);
                            e[t] = s, s.initExpressions()
                        }
                    }, sS.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, sS.prototype.hide = function() {
                        this.animationItem.container.style.display = "none"
                    }, sS.prototype.show = function() {
                        this.animationItem.container.style.display = "block"
                    }, sD.prototype.duplicate = function() {
                        var t = 2 * this._length,
                            e = 0;
                        for (e = this._length; e < t; e += 1) this.stack[e] = new sP;
                        this._length = t
                    }, sD.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
                    }, sD.prototype.restore = function(t) {
                        this.cArrPos -= 1;
                        var e, s = this.stack[this.cArrPos],
                            i = s.transform,
                            a = this.cTr.props;
                        for (e = 0; e < 16; e += 1) a[e] = i[e];
                        if (t) {
                            this.nativeContext.restore();
                            var r = this.stack[this.cArrPos + 1];
                            this.appliedFillStyle = r.fillStyle, this.appliedStrokeStyle = r.strokeStyle, this.appliedLineWidth = r.lineWidth, this.appliedLineCap = r.lineCap, this.appliedLineJoin = r.lineJoin, this.appliedMiterLimit = r.miterLimit
                        }
                        this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== s.opacity && this.currentOpacity !== s.opacity) && (this.nativeContext.globalAlpha = s.opacity, this.currentOpacity = s.opacity), this.currentFillStyle = s.fillStyle, this.currentStrokeStyle = s.strokeStyle, this.currentLineWidth = s.lineWidth, this.currentLineCap = s.lineCap, this.currentLineJoin = s.lineJoin, this.currentMiterLimit = s.miterLimit
                    }, sD.prototype.save = function(t) {
                        t && this.nativeContext.save();
                        var e = this.cTr.props;
                        this._length <= this.cArrPos && this.duplicate();
                        var s, i = this.stack[this.cArrPos];
                        for (s = 0; s < 16; s += 1) i.transform[s] = e[s];
                        this.cArrPos += 1;
                        var a = this.stack[this.cArrPos];
                        a.opacity = i.opacity, a.fillStyle = i.fillStyle, a.strokeStyle = i.strokeStyle, a.lineWidth = i.lineWidth, a.lineCap = i.lineCap, a.lineJoin = i.lineJoin, a.miterLimit = i.miterLimit
                    }, sD.prototype.setOpacity = function(t) {
                        this.stack[this.cArrPos].opacity = t
                    }, sD.prototype.setContext = function(t) {
                        this.nativeContext = t
                    }, sD.prototype.fillStyle = function(t) {
                        this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
                    }, sD.prototype.strokeStyle = function(t) {
                        this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
                    }, sD.prototype.lineWidth = function(t) {
                        this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
                    }, sD.prototype.lineCap = function(t) {
                        this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
                    }, sD.prototype.lineJoin = function(t) {
                        this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
                    }, sD.prototype.miterLimit = function(t) {
                        this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
                    }, sD.prototype.transform = function(t) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.cTr;
                        this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
                        var s = e.props;
                        this.nativeContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13])
                    }, sD.prototype.opacity = function(t) {
                        var e = this.stack[this.cArrPos].opacity;
                        e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
                    }, sD.prototype.fill = function(t) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
                    }, sD.prototype.fillRect = function(t, e, s, i) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, s, i)
                    }, sD.prototype.stroke = function() {
                        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
                    }, g([sS, sh, sy], sw), sw.prototype.renderInnerContent = function() {
                        var t, e = this.canvasContext;
                        for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, sw.prototype.destroy = function() {
                        var t;
                        for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                        this.layers = null, this.elements = null
                    }, sw.prototype.createComp = function(t) {
                        return new sw(t, this.globalData, this)
                    }, g([sS], sA), sA.prototype.createComp = function(t) {
                        return new sw(t, this.globalData, this)
                    }, tn.canvas = sA, tY.registerModifier("tm", tH), tY.registerModifier("pb", tX), tY.registerModifier("rp", tK), tY.registerModifier("rd", tU), tY.registerModifier("zz", ee), tY.registerModifier("op", ep), tz
                }, "object" == typeof t && "u" > typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : (s = "u" > typeof globalThis ? globalThis : s || self).lottie = i())
            })()
        }
    }
]);