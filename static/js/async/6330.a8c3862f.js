try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "90bc0ea0-8a52-4a3a-ac19-db022d804cc0", e._sentryDebugIdIdentifier = "sentry-dbid-90bc0ea0-8a52-4a3a-ac19-db022d804cc0")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6330"], {
        50161: function(e, t, r) {
            let s, i, n, a, o, l, h;
            r.d(t, {
                F: () => T
            });
            var d, c, u = r(36878),
                p = r(58191);

            function m() {
                return Date.now().toString(36) + Math.random().toString(36).slice(2)
            }

            function f(e) {
                s ? s.push(e) : (s = [e], Promise.resolve().then(() => {
                    let e = s;
                    s = void 0, e.forEach(e => e())
                }))
            }
            var g = function(e, t) {
                var r = {};
                for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (r[s] = e[s]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++) 0 > t.indexOf(s[i]) && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (r[s[i]] = e[s[i]]);
                return r
            };
            class v {
                destroy() {}
                init() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    this.postMessageOnTickEnd({
                        type: "init",
                        args: t
                    })
                }
                request(e) {
                    let {
                        requestStates: t,
                        requestStatesByCallback: r
                    } = this, {
                        transferables: s
                    } = e, i = g(e, ["transferables"]), n = m(), a = Object.assign({
                        type: "callMethod",
                        messageId: n
                    }, i), o = {
                        messageId: n
                    }, l = new Promise((e, t) => {
                        Object.assign(o, {
                            resolve: e,
                            reject: t
                        })
                    });
                    if ("function" == typeof a.args[a.args.length - 1]) {
                        a.withCallback = !0;
                        let e = a.args.pop();
                        o.callback = e, r.set(e, o)
                    }
                    return t.set(n, o), l.catch(() => void 0).finally(() => {
                        t.delete(n), o.callback && r.delete(o.callback)
                    }), this.postMessageOnTickEnd(a, s), l
                }
                cancelCallback(e) {
                    var t;
                    e.isCanceled = !0;
                    let {
                        messageId: r
                    } = null != (t = this.requestStatesByCallback.get(e)) ? t : {};
                    r && this.postMessageOnTickEnd({
                        type: "cancelProgress",
                        messageId: r
                    })
                }
                onMessage(e) {
                    let {
                        requestStates: t,
                        channel: r
                    } = this;
                    e.channel === r && e.payloads.forEach(e => {
                        var r, s;
                        if ("update" === e.type && this.onUpdate && this.onUpdate(e.update), "methodResponse" === e.type) {
                            let r = t.get(e.messageId);
                            r && (e.error ? r.reject(e.error) : r.resolve(e.response))
                        } else if ("methodCallback" === e.type) {
                            let s = t.get(e.messageId);
                            null == (r = null == s ? void 0 : s.callback) || r.call(s, ...e.callbackArgs)
                        } else if ("unhandledError" === e.type) throw Error(null == (s = e.error) ? void 0 : s.message)
                    })
                }
                postMessageOnTickEnd(e, t) {
                    this.pendingPayloads.push(e), t && this.pendingTransferables.push(...t), this.postMessagesOnTickEnd()
                }
                constructor(e, t, r) {
                    this.target = e, this.onUpdate = t, this.channel = r, this.requestStates = new Map, this.requestStatesByCallback = new Map, this.pendingPayloads = [], this.pendingTransferables = [], this.postMessagesOnTickEnd = function(e, t) {
                        let r, s = !1;
                        return function() {
                            for (var i = arguments.length, n = Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                            r = n, s || (s = !0, e(() => {
                                s = !1, t(...r)
                            }))
                        }
                    }(f, () => {
                        let {
                            channel: e
                        } = this, t = this.pendingPayloads, r = this.pendingTransferables;
                        this.pendingPayloads = [], this.pendingTransferables = [], this.target.postMessage({
                            channel: e,
                            payloads: t
                        }, r)
                    })
                }
            }
            let y = Math.min(navigator.hardwareConcurrency || 4, 4);

            function w(e, t) {
                return t - Math.floor(t / e) * e
            }
            class b {
                static resolved(e) {
                    let t = new b;
                    return t.resolve(e), t
                }
                constructor() {
                    this.promise = new Promise((e, t) => {
                        this.reject = t, this.resolve = e
                    })
                }
            }
            let I = [],
                x = [],
                F = [];

            function C(e, t) {
                var r;
                1;
                return e()
            }
            let E = (d = () => {
                let e = I;
                I = [], e.forEach(e => {
                    C(e)
                }), Promise.resolve().then(() => {
                    let e = x;
                    x = [], e.forEach(e => {
                        C(e)
                    })
                }).then(() => {
                    let e = [];
                    for (let t of F) C(() => {
                        let r = t();
                        r && e.push(r)
                    });
                    return F = [], e
                }).then(e => {
                    for (let t of e) C(t)
                })
            }, c = e => {
                ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    n ? n.add(e) : (n = new Set([e]), requestAnimationFrame(() => {
                        let e = n;
                        n = void 0, a = void 0, o && (clearTimeout(o), o = void 0), e.forEach(e => e())
                    })), t && (a ? a.add(e) : a = new Set([e]), o || (o = window.setTimeout(() => {
                        let e = a;
                        if (n) {
                            let t = n;
                            e.forEach(e => t.delete(e))
                        }
                        a = void 0, o && (clearTimeout(o), o = void 0), e.forEach(e => e())
                    }, 35)))
                }(e, !0)
            }, h = !1, function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                l = t, h || (h = !0, c(() => {
                    h = !1, d(...l)
                }))
            });

            function M(e) {
                x.push(e), E()
            }
            let k = Symbol("WAITING"),
                P = (!i && (i = Array(y).fill(void 0).map(() => {
                    let e = new Worker(new URL(r.p + r.u("3942"), r.b), Object.assign({}, {
                            type: "module"
                        }, {
                            type: void 0
                        })),
                        t = function(e, t, r) {
                            let s = new v(e, t, r);

                            function i(e) {
                                let {
                                    data: t
                                } = e;
                                s.onMessage(t)
                            }
                            return e.addEventListener("message", i), s.destroy = () => {
                                e.removeEventListener("message", i)
                            }, s
                        }(e, void 0, "rlottie");
                    return {
                        worker: e,
                        connector: t
                    }
                })), i).map(e => {
                    let {
                        connector: t
                    } = e;
                    return t
                }),
                R = new Map,
                S = new WeakMap,
                L = -1;
            class A {
                static init(e, t, r, s) {
                    var i, n, a;
                    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        l = null != (i = o.viewId) ? i : m(),
                        h = R.get(r);
                    return h ? h.addView(l, t, null == (a = o.callbacks) ? void 0 : a.onLoad, null == s ? void 0 : s.coords) : (h = new A(e, t, r, s, {
                        customColor: o.customColor,
                        callbacks: o.callbacks
                    }), R.set(r, h), h.addView(l, t, null == (n = o.callbacks) ? void 0 : n.onLoad, s.coords), h.initRenderer()), h
                }
                removeView(e) {
                    let t = this.views.get(e);
                    if (!t) return;
                    let {
                        canvas: r,
                        ctx: s,
                        isSharedCanvas: i,
                        coords: n
                    } = t;
                    i ? s.clearRect(n.x, n.y, this.imgSize, this.imgSize) : r.remove(), this.views.delete(e), this.views.size || this.destroy()
                }
                isPlaying() {
                    return this.isAnimating || this.isWaiting
                }
                play() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    t && (this.views.get(t).isPaused = !1), this.isEnded && e && (this.approxFrameIndex = Math.floor(0)), this.stopFrameIndex = void 0, this.direction = 1, this.doPlay()
                }
                pause(e) {
                    this.lastRenderAt = void 0, (!e || (this.views.get(e).isPaused = !0, Array.from(this.views.values()).every(e => {
                        let {
                            isPaused: t
                        } = e;
                        return t
                    }))) && (this.isWaiting ? this.stopFrameIndex = this.approxFrameIndex : this.isAnimating = !1, this.params.isLowPriority || (this.frames = this.frames.map((e, t) => {
                        if (t === this.prevFrameIndex) return e;
                        e && e !== k && e.close()
                    })))
                }
                playSegment(e) {
                    let [t, r] = e, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments.length > 2 ? arguments[2] : void 0;
                    i && (this.views.get(i).isPaused = !1);
                    let n = Math.round(this.approxFrameIndex);
                    this.stopFrameIndex = Math.floor(r / this.reduceFactor), (n !== r || s) && (this.approxFrameIndex = Math.floor(t / this.reduceFactor)), this.direction = t < r ? 1 : -1, this.doPlay()
                }
                setSpeed(e) {
                    this.speed = e
                }
                setNoLoop(e) {
                    this.params.noLoop = e
                }
                setSharedCanvasCoords(e, t) {
                    var r, s, i, n;
                    return r = this, s = void 0, i = void 0, n = function*() {
                        var r, s, i;
                        let n = this.views.get(e),
                            {
                                canvas: a,
                                ctx: o
                            } = n,
                            l = !a.dataset.isJustCleaned || "false" === a.dataset.isJustCleaned;
                        l || (yield S.get(a));
                        let [h, d] = [a.width, a.height];
                        if (l) {
                            let e = this.calcSizeFactor();
                            [h, d] = D(a, e), o.clearRect(0, 0, h, d), a.dataset.isJustCleaned = "true", I.push(() => {
                                a.dataset.isJustCleaned = "false"
                            }), E()
                        }
                        n.coords = {
                            x: Math.round((null != (r = null == t ? void 0 : t.x) ? r : 0) * h),
                            y: Math.round((null != (s = null == t ? void 0 : t.y) ? s : 0) * d)
                        };
                        let c = null != (i = this.getFrame(this.prevFrameIndex)) ? i : this.getFrame(Math.round(this.approxFrameIndex));
                        c && c !== k && o.drawImage(c, n.coords.x, n.coords.y)
                    }, new(i || (i = Promise))(function(e, t) {
                        function a(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function l(t) {
                            var r;
                            t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function(e) {
                                e(r)
                            })).then(a, o)
                        }
                        l((n = n.apply(r, s || [])).next())
                    })
                }
                addView(e, t, r, s) {
                    let i, n = this.calcSizeFactor();
                    if (t instanceof HTMLDivElement) {
                        if (!(t.parentNode instanceof HTMLElement)) throw Error("[RLottie] Container is not mounted");
                        let {
                            size: s
                        } = this.params;
                        i = Math.round(s * n), this.imgSize || (this.imgSize = i, this.imageData = new ImageData(i, i)), M(() => {
                            let n = document.createElement("canvas"),
                                a = n.getContext("2d");
                            n.classList.add("rlottie-canvas"), n.style.width = `${s}px`, n.style.height = `${s}px`, n.width = i, n.height = i, t.appendChild(n), this.views.set(e, {
                                canvas: n,
                                ctx: a,
                                onLoad: r
                            })
                        })
                    } else {
                        if (!t.isConnected) throw Error("[RLottie] Shared canvas is not mounted");
                        let a = t.getContext("2d");
                        i = Math.round(this.params.size * n), this.imgSize || (this.imgSize = i, this.imageData = new ImageData(i, i));
                        let [o, l] = D(t, n);
                        this.views.set(e, {
                            canvas: t,
                            ctx: a,
                            isSharedCanvas: !0,
                            coords: {
                                x: Math.round(s.x * o),
                                y: Math.round(s.y * l)
                            },
                            onLoad: r
                        })
                    }
                    this.isRendererInited && this.doPlay()
                }
                calcSizeFactor() {
                    let {
                        size: e,
                        isLowPriority: t,
                        quality: r = t && (!e || e > 24) ? .5 : .75
                    } = this.params;
                    return Math.max(window.devicePixelRatio * r, 1)
                }
                destroy() {
                    this.isDestroyed = !0, this.pause(), this.clearCache(), this.destroyRenderer(), R.delete(this.renderId)
                }
                clearCache() {
                    this.frames.forEach(e => {
                        e && e !== k && e.close()
                    }), this.imageData = null, this.frames = []
                }
                initConfig() {
                    let {
                        isLowPriority: e
                    } = this.params;
                    this.cacheModulo = 4 * !e
                }
                setColor(e) {
                    this.customColor = e
                }
                initRenderer() {
                    var e;
                    (this.workerIndex = w(y, ++L), 0 === P.length) ? console.error("[RLottie] No workers available!"): P[this.workerIndex].request({
                        name: "rlottie:init",
                        args: [this.renderId, this.tgsUrl, this.imgSize, null != (e = this.params.isLowPriority) && e, this.customColor, this.onRendererInit.bind(this)]
                    }).catch(e => {
                        var t;
                        console.error("[RLottie] Worker request failed:", e), null == (t = this.onError) || t.call(this, e instanceof Error ? e : Error(String(e)))
                    })
                }
                destroyRenderer() {
                    P[this.workerIndex].request({
                        name: "rlottie:destroy",
                        args: [this.renderId]
                    })
                }
                onRendererInit(e, t, r) {
                    this.isRendererInited = !0, this.reduceFactor = e, this.msPerFrame = t, this.framesCount = r, this.isWaiting && this.doPlay()
                }
                changeData(e) {
                    var t;
                    this.pause(), this.tgsUrl = e, this.initConfig(), P[this.workerIndex].request({
                        name: "rlottie:changeData",
                        args: [this.renderId, this.tgsUrl, null != (t = this.params.isLowPriority) && t, this.onChangeData.bind(this)]
                    })
                }
                onChangeData(e, t, r) {
                    this.reduceFactor = e, this.msPerFrame = t, this.framesCount = r, this.isWaiting = !1, this.isAnimating = !1, this.doPlay()
                }
                doPlay() {
                    !this.framesCount || this.isDestroyed || this.isAnimating || (this.isWaiting || (this.lastRenderAt = void 0), this.isEnded = !1, this.isAnimating = !0, this.isWaiting = !1, function e(t, r) {
                        r(() => {
                            t() && e(t, r)
                        })
                    }(() => {
                        var e, t, r, s;
                        if (this.isDestroyed || !this.isAnimating && Array.from(this.views.values()).every(e => {
                                let {
                                    isLoaded: t
                                } = e;
                                return t
                            })) return !1;
                        let i = Math.round(this.approxFrameIndex),
                            n = this.getFrame(i);
                        if (!n || n === k) return n || this.requestFrame(i), this.isAnimating = !1, this.isWaiting = !0, !1;
                        this.cacheModulo && i % this.cacheModulo == 0 && this.cleanupPrevFrame(i), i !== this.prevFrameIndex && (this.views.forEach(e => {
                            let {
                                ctx: t,
                                isLoaded: r,
                                isPaused: s,
                                coords: {
                                    x: i,
                                    y: a
                                } = {},
                                onLoad: o
                            } = e;
                            r && s || (t.clearRect(null != i ? i : 0, null != a ? a : 0, this.imgSize, this.imgSize), t.drawImage(n, null != i ? i : 0, null != a ? a : 0)), r || (e.isLoaded = !0, null == o || o())
                        }), this.prevFrameIndex = i);
                        let a = Date.now(),
                            o = this.lastRenderAt ? this.msPerFrame / (a - this.lastRenderAt) : 1,
                            l = this.direction * this.speed / o,
                            h = Math.round(this.approxFrameIndex + l);
                        if (this.lastRenderAt = a, l > 0 && (i === this.framesCount - 1 || h > this.framesCount - 1)) {
                            if (this.params.noLoop) return this.isAnimating = !1, this.isEnded = !0, null == (e = this.onEnded) || e.call(this), !1;
                            null == (t = this.onLoop) || t.call(this), this.approxFrameIndex = 0
                        } else if (l < 0 && (0 === i || h < 0)) {
                            if (this.params.noLoop) return this.isAnimating = !1, this.isEnded = !0, null == (r = this.onEnded) || r.call(this), !1;
                            null == (s = this.onLoop) || s.call(this), this.approxFrameIndex = this.framesCount - 1
                        } else {
                            if (void 0 !== this.stopFrameIndex && (i === this.stopFrameIndex || l > 0 && h > this.stopFrameIndex || l < 0 && h < this.stopFrameIndex)) return this.stopFrameIndex = void 0, this.isAnimating = !1, !1;
                            this.approxFrameIndex += l
                        }
                        let d = Math.round(this.approxFrameIndex);
                        return !!this.getFrame(d) || (this.requestFrame(d), this.isWaiting = !0, this.isAnimating = !1, !1)
                    }, M))
                }
                getFrame(e) {
                    return this.frames[e]
                }
                requestFrame(e) {
                    this.frames[e] = k, P[this.workerIndex].request({
                        name: "rlottie:renderFrames",
                        args: [this.renderId, e, this.onFrameLoad.bind(this)]
                    })
                }
                cleanupPrevFrame(e) {
                    if (this.framesCount < 3) return;
                    let t = w(this.framesCount, e - 1);
                    this.frames[t] = void 0
                }
                onFrameLoad(e, t) {
                    this.frames[e] === k && (this.frames[e] = t, this.isWaiting && this.doPlay())
                }
                constructor(e, t, r, s, i = {}) {
                    this.views = new Map, this.msPerFrame = 1e3 / 60, this.reduceFactor = 1, this.frames = [], this.isAnimating = !1, this.isWaiting = !0, this.isEnded = !1, this.isDestroyed = !1, this.isRendererInited = !1, this.approxFrameIndex = 0, this.prevFrameIndex = -1, this.stopFrameIndex = 0, this.speed = 1, this.direction = 1;
                    const {
                        customColor: n,
                        callbacks: a = {}
                    } = i, {
                        onLoad: o,
                        onEnded: l,
                        onLoop: h,
                        onError: d
                    } = a;
                    this.tgsUrl = e, this.container = t, this.renderId = r, this.params = s, this.customColor = n, this.onLoad = o, this.onEnded = l, this.onLoop = h, this.onError = d, this.initConfig()
                }
            }

            function D(e, t) {
                let r = Math.round(e.offsetWidth * t),
                    s = Math.round(e.offsetHeight * t);
                if (e.width !== r || e.height !== s) {
                    let t = new b;
                    S.set(e, t.promise), M(() => {
                        e.width = r, e.height = s, t.resolve()
                    })
                }
                return [r, s]
            }
            let T = (0, p.forwardRef)((e, t) => {
                let {
                    tgsUrl: r,
                    size: s,
                    renderId: i,
                    viewId: n,
                    noLoop: a = !1,
                    quality: o,
                    isLowPriority: l = !1,
                    customColor: h,
                    coords: d,
                    onLoad: c,
                    onEnded: f,
                    onLoop: g,
                    onError: v,
                    autoPlay: y = !0,
                    className: w,
                    style: b
                } = e, I = (0, p.useRef)(null), x = (0, p.useRef)(null), F = (0, p.useRef)(n || m()), C = (0, p.useRef)(i || m()), E = (0, p.useRef)(!1), M = (0, p.useRef)(!1), k = (0, p.useRef)(r), P = (0, p.useCallback)(() => {
                    !M.current && (null == c || c(), y && x.current && x.current.play())
                }, [c, y]), R = (0, p.useCallback)(e => {
                    M.current || null == f || f(e)
                }, [f]), S = (0, p.useCallback)(() => {
                    M.current || null == g || g()
                }, [g]), L = (0, p.useCallback)(e => {
                    M.current || null == v || v(e)
                }, [v]);
                return (0, p.useEffect)(() => {
                    let e = I.current;
                    !e || E.current || M.current || (E.current = !0, k.current = r, x.current = A.init(r, e, C.current, {
                        size: s,
                        noLoop: a,
                        quality: o,
                        isLowPriority: l,
                        coords: d
                    }, {
                        viewId: F.current,
                        customColor: h,
                        callbacks: {
                            onLoad: P,
                            onEnded: R,
                            onLoop: S,
                            onError: L
                        }
                    }))
                }, []), (0, p.useEffect)(() => {
                    x.current && E.current && (M.current || x.current.setNoLoop(a))
                }, [a]), (0, p.useEffect)(() => {
                    x.current && E.current && (M.current || x.current.setColor(h))
                }, [h]), (0, p.useEffect)(() => {
                    x.current && E.current && (M.current || r !== k.current && (k.current = r, x.current.changeData(r)))
                }, [r]), (0, p.useEffect)(() => {
                    !x.current || !E.current || M.current || d && x.current.setSharedCanvasCoords(F.current, d).catch(() => {})
                }, [d]), (0, p.useEffect)(() => () => {
                    if (M.current = !0, E.current = !1, x.current) {
                        try {
                            x.current.removeView(F.current)
                        } catch (e) {}
                        x.current = null
                    }
                }, []), (0, p.useImperativeHandle)(t, () => ({
                    play: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        x.current && !M.current && x.current.play(e, F.current)
                    },
                    pause: () => {
                        x.current && !M.current && x.current.pause(F.current)
                    },
                    playSegment: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        x.current && !M.current && x.current.playSegment(e, t, F.current)
                    },
                    setSpeed: e => {
                        x.current && !M.current && x.current.setSpeed(e)
                    },
                    setNoLoop: e => {
                        x.current && !M.current && x.current.setNoLoop(e)
                    },
                    changeData: e => {
                        x.current && !M.current && x.current.changeData(e)
                    },
                    setColor: e => {
                        x.current && !M.current && x.current.setColor(e)
                    },
                    isPlaying: () => !!x.current && !M.current && x.current.isPlaying(),
                    getInstance: () => x.current
                }), []), (0, u.jsx)("div", {
                    ref: I,
                    className: w,
                    style: Object.assign({
                        width: s,
                        height: s
                    }, b)
                })
            });
            T.displayName = "RLottieComponent"
        }
    }
]);
//# sourceMappingURL=6330.a8c3862f.js.map