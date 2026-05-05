try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2e18255d-5dd2-4425-a8e1-fed0438cd03d", t._sentryDebugIdIdentifier = "sentry-dbid-2e18255d-5dd2-4425-a8e1-fed0438cd03d")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1585"], {
        65822: function(t, e, i) {
            let r, s, n, o;

            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, r)
                }
                return i
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach(function(e) {
                        l(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }

            function l(t, e, i) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function c(t, e) {
                if (null == t) return {};
                var i, r, s = function(t, e) {
                    if (null == t) return {};
                    var i, r, s = {},
                        n = Object.keys(t);
                    for (r = 0; r < n.length; r++) i = n[r], e.indexOf(i) >= 0 || (s[i] = t[i]);
                    return s
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < n.length; r++) i = n[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
                }
                return s
            }

            function u(t, e) {
                return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var r = i.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            i.r(e), i.d(e, {
                ActiveSelection: () => rc,
                BaseBrush: () => sv,
                Canvas: () => ss,
                Canvas2dFilterBackend: () => nn,
                CanvasDOMManager: () => r3,
                Circle: () => sT,
                CircleBrush: () => sO,
                Color: () => tM,
                Control: () => ih,
                Ellipse: () => sL,
                Gradient: () => sp,
                Group: () => rl,
                IText: () => nr,
                Image: () => ng,
                Intersection: () => e1,
                Line: () => sA,
                Object: () => iR,
                Observable: () => X,
                Path: () => sC,
                Pattern: () => s_,
                PatternBrush: () => sD,
                PencilBrush: () => sb,
                Point: () => H,
                Polygon: () => sY,
                Polyline: () => sX,
                Rect: () => ra,
                Shadow: () => e8,
                SprayBrush: () => sk,
                StaticCanvas: () => tQ,
                StaticCanvasDOMManager: () => tJ,
                Text: () => s1,
                Textbox: () => ns,
                Triangle: () => sj,
                WebGLFilterBackend: () => no,
                cache: () => S,
                classRegistry: () => R,
                config: () => f,
                controlsUtils: () => nA,
                createCollectionMixin: () => N,
                filters: () => oc,
                getCSSRules: () => nC,
                getEnv: () => x,
                getFabricDocument: () => C,
                getFabricWindow: () => b,
                getFilterBackend: () => nl,
                iMatrix: () => M,
                initFilterBackend: () => nh,
                isWebGLPipelineState: () => nj,
                loadSVGFromString: () => nk,
                loadSVGFromURL: () => nD,
                parseAttributes: () => rs,
                parseFontDeclaration: () => re,
                parsePointsAttribute: () => sB,
                parseSVGDocument: () => nO,
                parseStyleAttribute: () => ri,
                parseTransformAttribute: () => rt,
                runningAnimations: () => I,
                setEnv: () => y,
                setFilterBackend: () => nc,
                util: () => r5,
                version: () => w
            });
            class g {
                constructor() {
                    l(this, "browserShadowBlurConstant", 1), l(this, "DPI", 96), l(this, "devicePixelRatio", 1), l(this, "perfLimitSizeTotal", 2097152), l(this, "maxCacheSideLimit", 4096), l(this, "minCacheSideLimit", 256), l(this, "disableStyleCopyPaste", !1), l(this, "enableGLFiltering", !0), l(this, "textureSize", 4096), l(this, "forceGLPutImageData", !1), l(this, "cachesBoundsOfCurve", !0), l(this, "fontPaths", {}), l(this, "NUM_FRACTION_DIGITS", 4)
                }
            }
            let f = new class extends g {
                configure() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this, t)
                }
                addFonts() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.fontPaths = h(h({}, this.fontPaths), t)
                }
                removeFonts() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    t.forEach(t => {
                        delete this.fontPaths[t]
                    })
                }
                clearFonts() {
                    this.fontPaths = {}
                }
                restoreDefaults(t) {
                    let e = new g,
                        i = (null == t ? void 0 : t.reduce((t, i) => (t[i] = e[i], t), {})) || e;
                    this.configure(i)
                }
                constructor(t) {
                    super(), this.configure(t)
                }
            };
            class p {}
            class m extends p {
                testPrecision(t, e) {
                    let i = t.createShader(t.FRAGMENT_SHADER);
                    return !!i && (t.shaderSource(i, "precision ".concat(e, " float;\nvoid main(){}")), t.compileShader(i), !!t.getShaderParameter(i, t.COMPILE_STATUS))
                }
                queryWebGL(t) {
                    let e = t.getContext("webgl");
                    e && (this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.GLPrecision = ["highp", "mediump", "lowp"].find(t => this.testPrecision(e, t)), console.log("fabric: max texture size ".concat(this.maxTextureSize)))
                }
                isSupported(t) {
                    return !!this.maxTextureSize && this.maxTextureSize >= t
                }
            }
            let _ = {},
                v = !1,
                y = t => {
                    s = t
                },
                x = () => s || (v || (f.configure({
                    devicePixelRatio: window.devicePixelRatio || 1
                }), r = "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0, v = !0), {
                    document,
                    window,
                    isTouchSupported: r,
                    WebGLProbe: new m,
                    dispose() {},
                    copyPasteData: _
                }),
                C = () => x().document,
                b = () => x().window,
                S = new class {
                    getFontCache(t) {
                        let {
                            fontFamily: e,
                            fontStyle: i,
                            fontWeight: r
                        } = t;
                        e = e.toLowerCase(), this.charWidthsCache[e] || (this.charWidthsCache[e] = {});
                        let s = this.charWidthsCache[e],
                            n = "".concat(i.toLowerCase(), "_").concat((r + "").toLowerCase());
                        return s[n] || (s[n] = {}), s[n]
                    }
                    clearFontCache(t) {
                        (t = (t || "").toLowerCase()) ? this.charWidthsCache[t] && delete this.charWidthsCache[t]: this.charWidthsCache = {}
                    }
                    limitDimsByArea(t) {
                        let {
                            perfLimitSizeTotal: e
                        } = f, i = Math.sqrt(e * t);
                        return [Math.floor(i), Math.floor(e / i)]
                    }
                    constructor() {
                        l(this, "charWidthsCache", {}), l(this, "boundsOfCurveCache", {})
                    }
                },
                w = "6.0.0-beta13";

            function T() {}
            let O = Math.PI / 2,
                k = 2 * Math.PI,
                D = Math.PI / 180,
                M = Object.freeze([1, 0, 0, 1, 0, 0]),
                P = "center",
                E = "left",
                A = "bottom",
                j = "right",
                F = "none",
                L = /\r?\n/,
                B = "json",
                R = new class {
                    getClass(t) {
                        let e = this[B].get(t);
                        if (!e) throw Error("No class registered for ".concat(t));
                        return e
                    }
                    setClass(t, e) {
                        e ? this[B].set(e, t) : (this[B].set(t.type, t), this[B].set(t.type.toLowerCase(), t))
                    }
                    getSVGClass(t) {
                        return this.svg.get(t)
                    }
                    setSVGClass(t, e) {
                        this.svg.set(null != e ? e : t.type.toLowerCase(), t)
                    }
                    constructor() {
                        this[B] = new Map, this.svg = new Map
                    }
                },
                I = new class extends Array {
                    remove(t) {
                        let e = this.indexOf(t);
                        e > -1 && this.splice(e, 1)
                    }
                    cancelAll() {
                        let t = this.splice(0);
                        return t.forEach(t => t.abort()), t
                    }
                    cancelByCanvas(t) {
                        if (!t) return [];
                        let e = this.filter(e => {
                            var i;
                            return "object" == typeof e.target && (null == (i = e.target) ? void 0 : i.canvas) === t
                        });
                        return e.forEach(t => t.abort()), e
                    }
                    cancelByTarget(t) {
                        if (!t) return [];
                        let e = this.filter(e => e.target === t);
                        return e.forEach(t => t.abort()), e
                    }
                };
            class X {
                on(t, e) {
                    return (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof t) ? (Object.entries(t).forEach(t => {
                        let [e, i] = t;
                        this.on(e, i)
                    }), () => this.off(t)) : e ? (this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(e), () => this.off(t, e)) : () => !1
                }
                once(t, e) {
                    if ("object" == typeof t) {
                        let e = [];
                        return Object.entries(t).forEach(t => {
                            let [i, r] = t;
                            e.push(this.once(i, r))
                        }), () => e.forEach(t => t())
                    }
                    if (!e) return () => !1;
                    {
                        let i = this.on(t, function() {
                            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                            e.call(this, ...r), i()
                        });
                        return i
                    }
                }
                _removeEventListener(t, e) {
                    if (this.__eventListeners[t])
                        if (e) {
                            let i = this.__eventListeners[t],
                                r = i.indexOf(e);
                            r > -1 && i.splice(r, 1)
                        } else this.__eventListeners[t] = []
                }
                off(t, e) {
                    if (this.__eventListeners)
                        if (void 0 === t)
                            for (let t in this.__eventListeners) this._removeEventListener(t);
                        else "object" == typeof t ? Object.entries(t).forEach(t => {
                            let [e, i] = t;
                            this._removeEventListener(e, i)
                        }) : this._removeEventListener(t, e)
                }
                fire(t, e) {
                    var i;
                    if (!this.__eventListeners) return;
                    let r = null == (i = this.__eventListeners[t]) ? void 0 : i.concat();
                    if (r)
                        for (let t = 0; t < r.length; t++) r[t].call(this, e || {})
                }
                constructor() {
                    l(this, "__eventListeners", {})
                }
            }
            let Y = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t,
                W = (t, e) => isNaN(t) && "number" == typeof e ? e : t,
                V = (t, e) => {
                    let i = t.indexOf(e);
                    return -1 !== i && t.splice(i, 1), t
                },
                G = t => {
                    if (0 === t) return 1;
                    switch (Math.abs(t) / O) {
                        case 1:
                        case 3:
                            return 0;
                        case 2:
                            return -1
                    }
                    return Math.cos(t)
                },
                z = t => {
                    if (0 === t) return 0;
                    let e = Math.sign(t);
                    switch (t / O) {
                        case 1:
                            return e;
                        case 2:
                            return 0;
                        case 3:
                            return -e
                    }
                    return Math.sin(t)
                };
            class H {
                add(t) {
                    return new H(this.x + t.x, this.y + t.y)
                }
                addEquals(t) {
                    return this.x += t.x, this.y += t.y, this
                }
                scalarAdd(t) {
                    return new H(this.x + t, this.y + t)
                }
                scalarAddEquals(t) {
                    return this.x += t, this.y += t, this
                }
                subtract(t) {
                    return new H(this.x - t.x, this.y - t.y)
                }
                subtractEquals(t) {
                    return this.x -= t.x, this.y -= t.y, this
                }
                scalarSubtract(t) {
                    return new H(this.x - t, this.y - t)
                }
                scalarSubtractEquals(t) {
                    return this.x -= t, this.y -= t, this
                }
                multiply(t) {
                    return new H(this.x * t.x, this.y * t.y)
                }
                scalarMultiply(t) {
                    return new H(this.x * t, this.y * t)
                }
                scalarMultiplyEquals(t) {
                    return this.x *= t, this.y *= t, this
                }
                divide(t) {
                    return new H(this.x / t.x, this.y / t.y)
                }
                scalarDivide(t) {
                    return new H(this.x / t, this.y / t)
                }
                scalarDivideEquals(t) {
                    return this.x /= t, this.y /= t, this
                }
                eq(t) {
                    return this.x === t.x && this.y === t.y
                }
                lt(t) {
                    return this.x < t.x && this.y < t.y
                }
                lte(t) {
                    return this.x <= t.x && this.y <= t.y
                }
                gt(t) {
                    return this.x > t.x && this.y > t.y
                }
                gte(t) {
                    return this.x >= t.x && this.y >= t.y
                }
                lerp(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
                    return e = Math.max(Math.min(1, e), 0), new H(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e)
                }
                distanceFrom(t) {
                    let e = this.x - t.x,
                        i = this.y - t.y;
                    return Math.sqrt(e * e + i * i)
                }
                midPointFrom(t) {
                    return this.lerp(t)
                }
                min(t) {
                    return new H(Math.min(this.x, t.x), Math.min(this.y, t.y))
                }
                max(t) {
                    return new H(Math.max(this.x, t.x), Math.max(this.y, t.y))
                }
                toString() {
                    return "".concat(this.x, ",").concat(this.y)
                }
                setXY(t, e) {
                    return this.x = t, this.y = e, this
                }
                setX(t) {
                    return this.x = t, this
                }
                setY(t) {
                    return this.y = t, this
                }
                setFromPoint(t) {
                    return this.x = t.x, this.y = t.y, this
                }
                swap(t) {
                    let e = this.x,
                        i = this.y;
                    this.x = t.x, this.y = t.y, t.x = e, t.y = i
                }
                clone() {
                    return new H(this.x, this.y)
                }
                rotate(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                        i = z(t),
                        r = G(t),
                        s = this.subtract(e);
                    return new H(s.x * r - s.y * i, s.x * i + s.y * r).add(e)
                }
                transform(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new H(t[0] * this.x + t[2] * this.y + (e ? 0 : t[4]), t[1] * this.x + t[3] * this.y + (e ? 0 : t[5]))
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    "object" == typeof t ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = e)
                }
            }
            let U = new H(0, 0);

            function N(t) {
                class e extends t {
                    _onObjectAdded(t) {}
                    _onObjectRemoved(t) {}
                    _onStackOrderChanged(t) {}
                    add() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        let r = this._objects.push(...e);
                        return e.forEach(t => this._onObjectAdded(t)), r
                    }
                    insertAt(t) {
                        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                        return this._objects.splice(t, 0, ...i), i.forEach(t => this._onObjectAdded(t)), this._objects.length
                    }
                    remove() {
                        let t = this._objects,
                            e = [];
                        for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                        return r.forEach(i => {
                            let r = t.indexOf(i); - 1 !== r && (t.splice(r, 1), e.push(i), this._onObjectRemoved(i))
                        }), e
                    }
                    forEachObject(t) {
                        this.getObjects().forEach((e, i, r) => t(e, i, r))
                    }
                    getObjects() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        return 0 === e.length ? [...this._objects] : this._objects.filter(t => t.isType(...e))
                    }
                    item(t) {
                        return this._objects[t]
                    }
                    isEmpty() {
                        return 0 === this._objects.length
                    }
                    size() {
                        return this._objects.length
                    }
                    contains(t, i) {
                        return !!this._objects.includes(t) || !!i && this._objects.some(i => i instanceof e && i.contains(t, !0))
                    }
                    complexity() {
                        return this._objects.reduce((t, e) => t += e.complexity ? e.complexity() : 0, 0)
                    }
                    sendObjectToBack(t) {
                        return !!t && t !== this._objects[0] && (V(this._objects, t), this._objects.unshift(t), this._onStackOrderChanged(t), !0)
                    }
                    bringObjectToFront(t) {
                        return !!t && t !== this._objects[this._objects.length - 1] && (V(this._objects, t), this._objects.push(t), this._onStackOrderChanged(t), !0)
                    }
                    sendObjectBackwards(t, e) {
                        if (!t) return !1;
                        let i = this._objects.indexOf(t);
                        if (0 !== i) {
                            let r = this.findNewLowerIndex(t, i, e);
                            return V(this._objects, t), this._objects.splice(r, 0, t), this._onStackOrderChanged(t), !0
                        }
                        return !1
                    }
                    bringObjectForward(t, e) {
                        if (!t) return !1;
                        let i = this._objects.indexOf(t);
                        if (i !== this._objects.length - 1) {
                            let r = this.findNewUpperIndex(t, i, e);
                            return V(this._objects, t), this._objects.splice(r, 0, t), this._onStackOrderChanged(t), !0
                        }
                        return !1
                    }
                    moveObjectTo(t, e) {
                        return t !== this._objects[e] && (V(this._objects, t), this._objects.splice(e, 0, t), this._onStackOrderChanged(t), !0)
                    }
                    findNewLowerIndex(t, e, i) {
                        let r;
                        if (i) {
                            r = e;
                            for (let i = e - 1; i >= 0; --i)
                                if (t.isOverlapping(this._objects[i])) {
                                    r = i;
                                    break
                                }
                        } else r = e - 1;
                        return r
                    }
                    findNewUpperIndex(t, e, i) {
                        let r;
                        if (i) {
                            r = e;
                            for (let i = e + 1; i < this._objects.length; ++i)
                                if (t.isOverlapping(this._objects[i])) {
                                    r = i;
                                    break
                                }
                        } else r = e + 1;
                        return r
                    }
                    collectObjects(t) {
                        let {
                            left: e,
                            top: i,
                            width: r,
                            height: s
                        } = t, {
                            includeIntersecting: n = !0
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = [], a = new H(e, i), h = a.add(new H(r, s));
                        for (let t = this._objects.length - 1; t >= 0; t--) {
                            let e = this._objects[t];
                            e.selectable && e.visible && (n && e.intersectsWithRect(a, h, !0) || e.isContainedWithinRect(a, h, !0) || n && e.containsPoint(a, void 0, !0) || n && e.containsPoint(h, void 0, !0)) && o.push(e)
                        }
                        return o
                    }
                    constructor() {
                        super(...arguments), l(this, "_objects", [])
                    }
                }
                return e
            }
            class q extends X {
                _setOptions() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    for (let e in t) this.set(e, t[e])
                }
                _setObject(t) {
                    for (let e in t) this._set(e, t[e])
                }
                set(t, e) {
                    return "object" == typeof t ? this._setObject(t) : this._set(t, e), this
                }
                _set(t, e) {
                    this[t] = e
                }
                toggle(t) {
                    let e = this.get(t);
                    return "boolean" == typeof e && this.set(t, !e), this
                }
                get(t) {
                    return this[t]
                }
            }

            function K(t) {
                return b().requestAnimationFrame(t)
            }

            function J(t) {
                return b().cancelAnimationFrame(t)
            }
            let Z = 0,
                Q = () => Z++,
                $ = () => {
                    let t = C().createElement("canvas");
                    if (!t || void 0 === t.getContext) throw Error("Failed to create `canvas` element");
                    return t
                },
                tt = () => C().createElement("img"),
                te = (t, e, i) => t.toDataURL("image/".concat(e), i),
                ti = t => t * D,
                tr = t => t / D,
                ts = ["translateX", "translateY", "angle"],
                tn = (t, e, i) => new H(t).transform(e, i),
                to = t => {
                    let e = 1 / (t[0] * t[3] - t[1] * t[2]),
                        i = [e * t[3], -e * t[1], -e * t[2], e * t[0], 0, 0],
                        {
                            x: r,
                            y: s
                        } = new H(t[4], t[5]).transform(i, !0);
                    return i[4] = -r, i[5] = -s, i
                },
                ta = (t, e, i) => [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]],
                th = (t, e) => t.reduceRight((t, i) => i ? ta(i, t, e) : t, M),
                tl = t => {
                    let e = Math.atan2(t[1], t[0]),
                        i = Math.pow(t[0], 2) + Math.pow(t[1], 2),
                        r = Math.sqrt(i),
                        s = (t[0] * t[3] - t[2] * t[1]) / r,
                        n = Math.atan2(t[0] * t[2] + t[1] * t[3], i);
                    return {
                        angle: tr(e),
                        scaleX: r,
                        scaleY: s,
                        skewX: tr(n),
                        skewY: 0,
                        translateX: t[4] || 0,
                        translateY: t[5] || 0
                    }
                },
                tc = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return [1, 0, 0, 1, t, e]
                };

            function tu() {
                let {
                    angle: t = 0
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                    x: e = 0,
                    y: i = 0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = ti(t), s = G(r), n = z(r);
                return [s, n, -n, s, e ? e - (s * e - n * i) : 0, i ? i - (n * e + s * i) : 0]
            }
            let td = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return [t, 0, 0, e, 0, 0]
                },
                tg = t => Math.tan(ti(t)),
                tf = t => [1, 0, tg(t), 1, 0, 0],
                tp = t => [1, tg(t), 0, 1, 0, 0],
                tm = t => {
                    let {
                        scaleX: e = 1,
                        scaleY: i = 1,
                        flipX: r = !1,
                        flipY: s = !1,
                        skewX: n = 0,
                        skewY: o = 0
                    } = t;
                    return th([td(r ? -e : e, s ? -i : i), n && tf(n), o && tp(o)], !0)
                },
                t_ = t => {
                    let {
                        translateX: e = 0,
                        translateY: i = 0,
                        angle: r = 0
                    } = t, s = c(t, ts);
                    return th([tc(e, i), r && tu({
                        angle: r
                    }), tm(s)])
                },
                tv = function(t) {
                    let {
                        signal: e,
                        crossOrigin: i = null
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(r, s) {
                        let n;
                        if (e && e.aborted) return s(Error("`options.signal` is in `aborted` state"));
                        let o = tt();
                        e && (n = function(t) {
                            o.src = "", s(t)
                        }, e.addEventListener("abort", n, {
                            once: !0
                        }));
                        let a = function() {
                            o.onload = o.onerror = null, n && (null == e || e.removeEventListener("abort", n)), r(o)
                        };
                        t ? (o.onload = a, o.onerror = function() {
                            n && (null == e || e.removeEventListener("abort", n)), s(Error("Error loading " + o.src))
                        }, i && (o.crossOrigin = i), o.src = t) : a()
                    })
                },
                ty = function(t) {
                    let {
                        signal: e,
                        reviver: i = T
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise((r, s) => {
                        let n = [];
                        e && e.addEventListener("abort", s, {
                            once: !0
                        }), Promise.all(t.map(t => R.getClass(t.type).fromObject(t, {
                            signal: e,
                            reviver: i
                        }).then(e => (i(t, e), n.push(e), e)))).then(r).catch(t => {
                            n.forEach(t => {
                                t.dispose && t.dispose()
                            }), s(t)
                        }).finally(() => {
                            e && e.removeEventListener("abort", s)
                        })
                    })
                },
                tx = function(t) {
                    let {
                        signal: e
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise((i, r) => {
                        let s = [];
                        e && e.addEventListener("abort", r, {
                            once: !0
                        });
                        let n = Object.values(t).map(t => t ? t.colorStops ? new(R.getClass("gradient"))(t) : t.type ? ty([t], {
                                signal: e
                            }).then(t => {
                                let [e] = t;
                                return s.push(e), e
                            }) : t.source ? R.getClass("pattern").fromObject(t, {
                                signal: e
                            }).then(t => (s.push(t), t)) : t : t),
                            o = Object.keys(t);
                        Promise.all(n).then(t => t.reduce((t, e, i) => (t[o[i]] = e, t), {})).then(i).catch(t => {
                            s.forEach(t => {
                                t.dispose && t.dispose()
                            }), r(t)
                        }).finally(() => {
                            e && e.removeEventListener("abort", r)
                        })
                    })
                },
                tC = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e.reduce((e, i) => (i in t && (e[i] = t[i]), e), {})
                },
                tb = (t, e) => Object.keys(t).reduce((i, r) => (e(t[r], r, t) && (i[r] = t[r]), i), {}),
                tS = {
                    aliceblue: "#F0F8FF",
                    antiquewhite: "#FAEBD7",
                    aqua: "#0FF",
                    aquamarine: "#7FFFD4",
                    azure: "#F0FFFF",
                    beige: "#F5F5DC",
                    bisque: "#FFE4C4",
                    black: "#000",
                    blanchedalmond: "#FFEBCD",
                    blue: "#00F",
                    blueviolet: "#8A2BE2",
                    brown: "#A52A2A",
                    burlywood: "#DEB887",
                    cadetblue: "#5F9EA0",
                    chartreuse: "#7FFF00",
                    chocolate: "#D2691E",
                    coral: "#FF7F50",
                    cornflowerblue: "#6495ED",
                    cornsilk: "#FFF8DC",
                    crimson: "#DC143C",
                    cyan: "#0FF",
                    darkblue: "#00008B",
                    darkcyan: "#008B8B",
                    darkgoldenrod: "#B8860B",
                    darkgray: "#A9A9A9",
                    darkgrey: "#A9A9A9",
                    darkgreen: "#006400",
                    darkkhaki: "#BDB76B",
                    darkmagenta: "#8B008B",
                    darkolivegreen: "#556B2F",
                    darkorange: "#FF8C00",
                    darkorchid: "#9932CC",
                    darkred: "#8B0000",
                    darksalmon: "#E9967A",
                    darkseagreen: "#8FBC8F",
                    darkslateblue: "#483D8B",
                    darkslategray: "#2F4F4F",
                    darkslategrey: "#2F4F4F",
                    darkturquoise: "#00CED1",
                    darkviolet: "#9400D3",
                    deeppink: "#FF1493",
                    deepskyblue: "#00BFFF",
                    dimgray: "#696969",
                    dimgrey: "#696969",
                    dodgerblue: "#1E90FF",
                    firebrick: "#B22222",
                    floralwhite: "#FFFAF0",
                    forestgreen: "#228B22",
                    fuchsia: "#F0F",
                    gainsboro: "#DCDCDC",
                    ghostwhite: "#F8F8FF",
                    gold: "#FFD700",
                    goldenrod: "#DAA520",
                    gray: "#808080",
                    grey: "#808080",
                    green: "#008000",
                    greenyellow: "#ADFF2F",
                    honeydew: "#F0FFF0",
                    hotpink: "#FF69B4",
                    indianred: "#CD5C5C",
                    indigo: "#4B0082",
                    ivory: "#FFFFF0",
                    khaki: "#F0E68C",
                    lavender: "#E6E6FA",
                    lavenderblush: "#FFF0F5",
                    lawngreen: "#7CFC00",
                    lemonchiffon: "#FFFACD",
                    lightblue: "#ADD8E6",
                    lightcoral: "#F08080",
                    lightcyan: "#E0FFFF",
                    lightgoldenrodyellow: "#FAFAD2",
                    lightgray: "#D3D3D3",
                    lightgrey: "#D3D3D3",
                    lightgreen: "#90EE90",
                    lightpink: "#FFB6C1",
                    lightsalmon: "#FFA07A",
                    lightseagreen: "#20B2AA",
                    lightskyblue: "#87CEFA",
                    lightslategray: "#789",
                    lightslategrey: "#789",
                    lightsteelblue: "#B0C4DE",
                    lightyellow: "#FFFFE0",
                    lime: "#0F0",
                    limegreen: "#32CD32",
                    linen: "#FAF0E6",
                    magenta: "#F0F",
                    maroon: "#800000",
                    mediumaquamarine: "#66CDAA",
                    mediumblue: "#0000CD",
                    mediumorchid: "#BA55D3",
                    mediumpurple: "#9370DB",
                    mediumseagreen: "#3CB371",
                    mediumslateblue: "#7B68EE",
                    mediumspringgreen: "#00FA9A",
                    mediumturquoise: "#48D1CC",
                    mediumvioletred: "#C71585",
                    midnightblue: "#191970",
                    mintcream: "#F5FFFA",
                    mistyrose: "#FFE4E1",
                    moccasin: "#FFE4B5",
                    navajowhite: "#FFDEAD",
                    navy: "#000080",
                    oldlace: "#FDF5E6",
                    olive: "#808000",
                    olivedrab: "#6B8E23",
                    orange: "#FFA500",
                    orangered: "#FF4500",
                    orchid: "#DA70D6",
                    palegoldenrod: "#EEE8AA",
                    palegreen: "#98FB98",
                    paleturquoise: "#AFEEEE",
                    palevioletred: "#DB7093",
                    papayawhip: "#FFEFD5",
                    peachpuff: "#FFDAB9",
                    peru: "#CD853F",
                    pink: "#FFC0CB",
                    plum: "#DDA0DD",
                    powderblue: "#B0E0E6",
                    purple: "#800080",
                    rebeccapurple: "#639",
                    red: "#F00",
                    rosybrown: "#BC8F8F",
                    royalblue: "#4169E1",
                    saddlebrown: "#8B4513",
                    salmon: "#FA8072",
                    sandybrown: "#F4A460",
                    seagreen: "#2E8B57",
                    seashell: "#FFF5EE",
                    sienna: "#A0522D",
                    silver: "#C0C0C0",
                    skyblue: "#87CEEB",
                    slateblue: "#6A5ACD",
                    slategray: "#708090",
                    slategrey: "#708090",
                    snow: "#FFFAFA",
                    springgreen: "#00FF7F",
                    steelblue: "#4682B4",
                    tan: "#D2B48C",
                    teal: "#008080",
                    thistle: "#D8BFD8",
                    tomato: "#FF6347",
                    turquoise: "#40E0D0",
                    violet: "#EE82EE",
                    wheat: "#F5DEB3",
                    white: "#FFF",
                    whitesmoke: "#F5F5F5",
                    yellow: "#FF0",
                    yellowgreen: "#9ACD32"
                },
                tw = (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t,
                tT = (t, e, i, r) => {
                    let s, n, o = Math.max(t /= 255, e /= 255, i /= 255),
                        a = Math.min(t, e, i),
                        h = (o + a) / 2;
                    if (o === a) s = n = 0;
                    else {
                        let r = o - a;
                        switch (n = h > .5 ? r / (2 - o - a) : r / (o + a), o) {
                            case t:
                                s = (e - i) / r + 6 * (e < i);
                                break;
                            case e:
                                s = (i - t) / r + 2;
                                break;
                            case i:
                                s = (t - e) / r + 4
                        }
                        s /= 6
                    }
                    return [Math.round(360 * s), Math.round(100 * n), Math.round(100 * h), r]
                },
                tO = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
                    return parseFloat(t) / (t.endsWith("%") ? 100 : 1)
                },
                tk = t => Math.min(Math.round(t), 255).toString(16).toUpperCase().padStart(2, "0"),
                tD = t => {
                    let [e, i, r, s = 1] = t, n = Math.round(.3 * e + .59 * i + .11 * r);
                    return [n, n, n, s]
                };
            class tM {
                _tryParsingColor(t) {
                    return t in tS && (t = tS[t]), "transparent" === t ? [255, 255, 255, 0] : tM.sourceFromHex(t) || tM.sourceFromRgb(t) || tM.sourceFromHsl(t) || [0, 0, 0, 1]
                }
                getSource() {
                    return this._source
                }
                setSource(t) {
                    this._source = t
                }
                toRgb() {
                    let [t, e, i] = this.getSource();
                    return "rgb(".concat(t, ",").concat(e, ",").concat(i, ")")
                }
                toRgba() {
                    return "rgba(".concat(this.getSource().join(","), ")")
                }
                toHsl() {
                    let [t, e, i] = tT(...this.getSource());
                    return "hsl(".concat(t, ",").concat(e, "%,").concat(i, "%)")
                }
                toHsla() {
                    let [t, e, i, r] = tT(...this.getSource());
                    return "hsla(".concat(t, ",").concat(e, "%,").concat(i, "%,").concat(r, ")")
                }
                toHex() {
                    return this.toHexa().slice(0, 6)
                }
                toHexa() {
                    let [t, e, i, r] = this.getSource();
                    return "".concat(tk(t)).concat(tk(e)).concat(tk(i)).concat(tk(Math.round(255 * r)))
                }
                getAlpha() {
                    return this.getSource()[3]
                }
                setAlpha(t) {
                    return this._source[3] = t, this
                }
                toGrayscale() {
                    return this.setSource(tD(this.getSource())), this
                }
                toBlackWhite(t) {
                    let [e, , , i] = tD(this.getSource()), r = e < (t || 127) ? 0 : 255;
                    return this.setSource([r, r, r, i]), this
                }
                overlayWith(t) {
                    t instanceof tM || (t = new tM(t));
                    let e = this.getSource(),
                        i = t.getSource(),
                        [r, s, n] = e.map((t, e) => Math.round(.5 * t + .5 * i[e]));
                    return this.setSource([r, s, n, e[3]]), this
                }
                static fromRgb(t) {
                    return tM.fromRgba(t)
                }
                static fromRgba(t) {
                    return new tM(tM.sourceFromRgb(t))
                }
                static sourceFromRgb(t) {
                    let e = t.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
                    if (e) {
                        let [t, i, r] = e.slice(1, 4).map(t => {
                            let e = parseFloat(t);
                            return t.endsWith("%") ? Math.round(2.55 * e) : e
                        });
                        return [t, i, r, tO(e[4])]
                    }
                }
                static fromHsl(t) {
                    return tM.fromHsla(t)
                }
                static fromHsla(t) {
                    return new tM(tM.sourceFromHsl(t))
                }
                static sourceFromHsl(t) {
                    let e, i, r, s = t.match(/^hsla?\(\s*([+-]?\d{1,3})\s*[\s|,]\s*(\d{1,3}%)\s*[\s|,]\s*(\d{1,3}%)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
                    if (!s) return;
                    let n = (parseFloat(s[1]) % 360 + 360) % 360 / 360,
                        o = parseFloat(s[2]) / 100,
                        a = parseFloat(s[3]) / 100;
                    if (0 === o) e = i = r = a;
                    else {
                        let t = a <= .5 ? a * (o + 1) : a + o - a * o,
                            s = 2 * a - t;
                        e = tw(s, t, n + 1 / 3), i = tw(s, t, n), r = tw(s, t, n - 1 / 3)
                    }
                    return [Math.round(255 * e), Math.round(255 * i), Math.round(255 * r), tO(s[4])]
                }
                static fromHex(t) {
                    return new tM(tM.sourceFromHex(t))
                }
                static sourceFromHex(t) {
                    if (t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
                        let e = t.slice(t.indexOf("#") + 1),
                            [i, r, s, n = 255] = (e.length <= 4 ? e.split("").map(t => t + t) : e.match(/.{2}/g)).map(t => parseInt(t, 16));
                        return [i, r, s, n / 255]
                    }
                }
                constructor(t) {
                    if (t)
                        if (t instanceof tM) this.setSource([...t._source]);
                        else if (Array.isArray(t)) {
                        const [e, i, r, s = 1] = t;
                        this.setSource([e, i, r, s])
                    } else this.setSource(this._tryParsingColor(t));
                    else this.setSource([0, 0, 0, 1])
                }
            }
            let tP = (t, e) => parseFloat(Number(t).toFixed(e)),
                tE = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                        i = /\D{0,2}$/.exec(t),
                        r = parseFloat(t),
                        s = f.DPI;
                    switch (null == i ? void 0 : i[0]) {
                        case "mm":
                            return r * s / 25.4;
                        case "cm":
                            return r * s / 2.54;
                        case "in":
                            return r * s;
                        case "pt":
                            return r * s / 72;
                        case "pc":
                            return r * s / 72 * 12;
                        case "em":
                            return r * e;
                        default:
                            return r
                    }
                },
                tA = t => {
                    let [e, i] = t.trim().split(" "), [r, s] = e && e !== F ? [e.slice(1, 4), e.slice(5, 8)] : e === F ? [e, e] : ["Mid", "Mid"];
                    return {
                        meetOrSlice: i || "meet",
                        alignX: r,
                        alignY: s
                    }
                },
                tj = t => "matrix(" + t.map(t => tP(t, f.NUM_FRACTION_DIGITS)).join(" ") + ")",
                tF = (t, e) => {
                    if (!e) return "".concat(t, ": none; ");
                    {
                        if (e.toLive) return "".concat(t, ": url(#SVGID_").concat(e.id, "); ");
                        let i = new tM(e),
                            r = i.getAlpha(),
                            s = "".concat(t, ": ").concat(i.toRgb(), "; ");
                        return 1 !== r && (s += "".concat(t, "-opacity: ").concat(r.toString(), "; ")), s
                    }
                },
                tL = function(t, e) {
                    let {
                        left: i,
                        top: r,
                        width: s,
                        height: n
                    } = e, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.NUM_FRACTION_DIGITS, a = tF("fill", t), [h, l, c, u] = [i, r, s, n].map(t => tP(t, o));
                    return "<rect ".concat(a, ' x="').concat(h, '" y="').concat(l, '" width="').concat(c, '" height="').concat(u, '"></rect>')
                },
                tB = t => !!t && void 0 !== t.toLive,
                tR = t => !!t && "function" == typeof t.toObject,
                tI = t => !!t && void 0 !== t.offsetX && void 0 !== t.source,
                tX = t => !!t && Array.isArray(t._objects),
                tY = t => !!t && t.isType("Text", "IText", "Textbox"),
                tW = t => !!t && t.isType("IText", "Textbox"),
                tV = t => !!t && "function" == typeof t.onDragStart && "function" == typeof t.shouldStartDragging;

            function tG(t) {
                let e = t && tz(t),
                    i = 0,
                    r = 0;
                if (!t || !e) return {
                    left: i,
                    top: r
                };
                let s = e.documentElement,
                    n = e.body || {
                        scrollLeft: 0,
                        scrollTop: 0
                    };
                for (; t && (t.parentNode || t.host) && ((t = t.parentNode || t.host) === e ? (i = n.scrollLeft || s.scrollLeft || 0, r = n.scrollTop || s.scrollTop || 0) : (i += t.scrollLeft || 0, r += t.scrollTop || 0), 1 !== t.nodeType || "fixed" !== t.style.position););
                return {
                    left: i,
                    top: r
                }
            }
            let tz = t => t.ownerDocument || null,
                tH = t => {
                    var e;
                    return (null == (e = t.ownerDocument) ? void 0 : e.defaultView) || null
                };

            function tU(t, e) {
                let i = t.style;
                i && ("string" == typeof e ? t.style.cssText += ";" + e : Object.entries(e).forEach(t => {
                    let [e, r] = t;
                    return i.setProperty(e, r)
                }))
            }
            let tN = function(t, e, i) {
                    let {
                        width: r,
                        height: s
                    } = i, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    t.width = r, t.height = s, n > 1 && (t.setAttribute("width", (r * n).toString()), t.setAttribute("height", (s * n).toString()), e.scale(n, n))
                },
                tq = (t, e) => {
                    let {
                        width: i,
                        height: r
                    } = e;
                    i && (t.style.width = "number" == typeof i ? "".concat(i, "px") : i), r && (t.style.height = "number" == typeof r ? "".concat(r, "px") : r)
                };

            function tK(t) {
                return void 0 !== t.onselectstart && (t.onselectstart = () => !1), t.style.userSelect = F, t
            }
            class tJ {
                createLowerCanvas(t) {
                    let e = t && void 0 !== t.getContext ? t : C().getElementById(t) || $();
                    if (e.hasAttribute("data-fabric")) throw Error("fabric.js: trying to initialize a canvas that has already been initialized");
                    return this._originalCanvasStyle = e.style.cssText, e.setAttribute("data-fabric", "main"), e.classList.add("lower-canvas"), e
                }
                cleanupDOM(t) {
                    let {
                        width: e,
                        height: i
                    } = t, {
                        el: r
                    } = this.lower;
                    r.classList.remove("lower-canvas"), r.removeAttribute("data-fabric"), r.setAttribute("width", "".concat(e)), r.setAttribute("height", "".concat(i)), r.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0
                }
                setDimensions(t, e) {
                    let {
                        el: i,
                        ctx: r
                    } = this.lower;
                    tN(i, r, t, e)
                }
                setCSSDimensions(t) {
                    tq(this.lower.el, t)
                }
                calcOffset() {
                    return function(t) {
                        var e;
                        let i = {
                                left: 0,
                                top: 0
                            },
                            r = t && tz(t),
                            s = {
                                left: 0,
                                top: 0
                            },
                            n = {
                                borderLeftWidth: E,
                                borderTopWidth: "top",
                                paddingLeft: E,
                                paddingTop: "top"
                            };
                        if (!r) return s;
                        let o = (null == (e = tH(t)) ? void 0 : e.getComputedStyle(t, null)) || {};
                        for (let t in n) s[n[t]] += parseInt(o[t], 10) || 0;
                        let a = r.documentElement;
                        void 0 !== t.getBoundingClientRect && (i = t.getBoundingClientRect());
                        let h = tG(t);
                        return {
                            left: i.left + h.left - (a.clientLeft || 0) + s.left,
                            top: i.top + h.top - (a.clientTop || 0) + s.top
                        }
                    }(this.lower.el)
                }
                dispose() {
                    x().dispose(this.lower.el), delete this.lower
                }
                constructor(t) {
                    l(this, "_originalCanvasStyle", void 0), l(this, "lower", void 0);
                    const e = this.createLowerCanvas(t);
                    this.lower = {
                        el: e,
                        ctx: e.getContext("2d")
                    }
                }
            }
            let tZ = {
                backgroundVpt: !0,
                backgroundColor: "",
                overlayVpt: !0,
                overlayColor: "",
                includeDefaultValues: !0,
                svgViewportTransformation: !0,
                renderOnAddRemove: !0,
                skipOffscreen: !0,
                enableRetinaScaling: !0,
                imageSmoothingEnabled: !0,
                controlsAboveOverlay: !1,
                allowTouchScrolling: !1,
                viewportTransform: [...M]
            };
            class tQ extends N(q) {
                get lowerCanvasEl() {
                    var t;
                    return null == (t = this.elements.lower) ? void 0 : t.el
                }
                get contextContainer() {
                    var t;
                    return null == (t = this.elements.lower) ? void 0 : t.ctx
                }
                static getDefaults() {
                    return tQ.ownDefaults
                }
                initElements(t) {
                    this.elements = new tJ(t)
                }
                add() {
                    let t = super.add(...arguments);
                    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t
                }
                insertAt(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    let s = super.insertAt(t, ...i);
                    return i.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), s
                }
                remove() {
                    let t = super.remove(...arguments);
                    return t.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t
                }
                _onObjectAdded(t) {
                    t.canvas && t.canvas !== this && (console.warn("fabric.Canvas: trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), t.canvas.remove(t)), t._set("canvas", this), t.setCoords(), this.fire("object:added", {
                        target: t
                    }), t.fire("added", {
                        target: this
                    })
                }
                _onObjectRemoved(t) {
                    t._set("canvas", void 0), this.fire("object:removed", {
                        target: t
                    }), t.fire("removed", {
                        target: this
                    })
                }
                _onStackOrderChanged() {
                    this.renderOnAddRemove && this.requestRenderAll()
                }
                _isRetinaScaling() {
                    return f.devicePixelRatio > 1 && this.enableRetinaScaling
                }
                getRetinaScaling() {
                    return this._isRetinaScaling() ? Math.max(1, f.devicePixelRatio) : 1
                }
                calcOffset() {
                    return this._offset = this.elements.calcOffset()
                }
                getWidth() {
                    return this.width
                }
                getHeight() {
                    return this.height
                }
                setWidth(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.setDimensions({
                        width: t
                    }, e)
                }
                setHeight(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.setDimensions({
                        height: t
                    }, e)
                }
                _setDimensionsImpl(t) {
                    let {
                        cssOnly: e = !1,
                        backstoreOnly: i = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) {
                        let e = h({
                            width: this.width,
                            height: this.height
                        }, t);
                        this.elements.setDimensions(e, this.getRetinaScaling()), this.hasLostContext = !0, this.width = e.width, this.height = e.height
                    }
                    i || this.elements.setCSSDimensions(t), this.calcOffset()
                }
                setDimensions(t) {
                    let {
                        cssOnly: e = !1,
                        backstoreOnly: i = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._setDimensionsImpl(t, {
                        cssOnly: e,
                        backstoreOnly: i
                    }), e || this.requestRenderAll()
                }
                getZoom() {
                    return this.viewportTransform[0]
                }
                setViewportTransform(t) {
                    let e = this.backgroundImage,
                        i = this.overlayImage,
                        r = this._objects.length;
                    this.viewportTransform = t;
                    for (let t = 0; t < r; t++) {
                        let e = this._objects[t];
                        e.group || e.setCoords()
                    }
                    e && e.setCoords(), i && i.setCoords(), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll()
                }
                zoomToPoint(t, e) {
                    let i = [...this.viewportTransform],
                        r = tn(t, to(i));
                    i[0] = e, i[3] = e;
                    let s = tn(r, i);
                    i[4] += t.x - s.x, i[5] += t.y - s.y, this.setViewportTransform(i)
                }
                setZoom(t) {
                    this.zoomToPoint(new H(0, 0), t)
                }
                absolutePan(t) {
                    let e = [...this.viewportTransform];
                    return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e)
                }
                relativePan(t) {
                    return this.absolutePan(new H(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]))
                }
                getElement() {
                    return this.elements.lower.el
                }
                clearContext(t) {
                    t.clearRect(0, 0, this.width, this.height)
                }
                getContext() {
                    return this.elements.lower.ctx
                }
                clear() {
                    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll()
                }
                renderAll() {
                    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects)
                }
                renderAndReset() {
                    this.nextRenderHandle = 0, this.renderAll()
                }
                requestRenderAll() {
                    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = K(() => this.renderAndReset()))
                }
                calcViewportBoundaries() {
                    let t = this.width,
                        e = this.height,
                        i = to(this.viewportTransform),
                        r = tn({
                            x: 0,
                            y: 0
                        }, i),
                        s = tn({
                            x: t,
                            y: e
                        }, i),
                        n = r.min(s),
                        o = r.max(s);
                    return this.vptCoords = {
                        tl: n,
                        tr: new H(o.x, n.y),
                        bl: new H(n.x, o.y),
                        br: o
                    }
                }
                cancelRequestedRender() {
                    this.nextRenderHandle && (J(this.nextRenderHandle), this.nextRenderHandle = 0)
                }
                drawControls(t) {}
                renderCanvas(t, e) {
                    if (this.destroyed) return;
                    let i = this.viewportTransform,
                        r = this.clipPath;
                    this.calcViewportBoundaries(), this.clearContext(t), t.imageSmoothingEnabled = this.imageSmoothingEnabled, t.patternQuality = "best", this.fire("before:render", {
                        ctx: t
                    }), this._renderBackground(t), t.save(), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this._renderObjects(t, e), t.restore(), this.controlsAboveOverlay || this.drawControls(t), r && (r._set("canvas", this), r.shouldCache(), r._transformDone = !0, r.renderCache({
                        forClipping: !0
                    }), this.drawClipPathOnCanvas(t, r)), this._renderOverlay(t), this.controlsAboveOverlay && this.drawControls(t), this.fire("after:render", {
                        ctx: t
                    }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0)
                }
                drawClipPathOnCanvas(t, e) {
                    let i = this.viewportTransform;
                    t.save(), t.transform(...i), t.globalCompositeOperation = "destination-in", e.transform(t), t.scale(1 / e.zoomX, 1 / e.zoomY), t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY), t.restore()
                }
                _renderObjects(t, e) {
                    for (let i = 0, r = e.length; i < r; ++i) e[i] && e[i].render(t)
                }
                _renderBackgroundOrOverlay(t, e) {
                    let i = this["".concat(e, "Color")],
                        r = this["".concat(e, "Image")],
                        s = this.viewportTransform,
                        n = this["".concat(e, "Vpt")];
                    if (!i && !r) return;
                    let o = tB(i);
                    if (i) {
                        if (t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(this.width, 0), t.lineTo(this.width, this.height), t.lineTo(0, this.height), t.closePath(), t.fillStyle = o ? i.toLive(t) : i, n && t.transform(...s), o) {
                            t.transform(1, 0, 0, 1, i.offsetX || 0, i.offsetY || 0);
                            let e = i.gradientTransform || i.patternTransform;
                            e && t.transform(...e)
                        }
                        t.fill(), t.restore()
                    }
                    if (r) {
                        t.save();
                        let {
                            skipOffscreen: e
                        } = this;
                        this.skipOffscreen = n, n && t.transform(...s), r.render(t), this.skipOffscreen = e, t.restore()
                    }
                }
                _renderBackground(t) {
                    this._renderBackgroundOrOverlay(t, "background")
                }
                _renderOverlay(t) {
                    this._renderBackgroundOrOverlay(t, "overlay")
                }
                getCenter() {
                    return {
                        top: this.height / 2,
                        left: this.width / 2
                    }
                }
                getCenterPoint() {
                    return new H(this.width / 2, this.height / 2)
                }
                centerObjectH(t) {
                    return this._centerObject(t, new H(this.getCenterPoint().x, t.getCenterPoint().y))
                }
                centerObjectV(t) {
                    return this._centerObject(t, new H(t.getCenterPoint().x, this.getCenterPoint().y))
                }
                centerObject(t) {
                    return this._centerObject(t, this.getCenterPoint())
                }
                viewportCenterObject(t) {
                    return this._centerObject(t, this.getVpCenter())
                }
                viewportCenterObjectH(t) {
                    return this._centerObject(t, new H(this.getVpCenter().x, t.getCenterPoint().y))
                }
                viewportCenterObjectV(t) {
                    return this._centerObject(t, new H(t.getCenterPoint().x, this.getVpCenter().y))
                }
                getVpCenter() {
                    return tn(this.getCenterPoint(), to(this.viewportTransform))
                }
                _centerObject(t, e) {
                    t.setXY(e, P, P), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll()
                }
                toDatalessJSON(t) {
                    return this.toDatalessObject(t)
                }
                toObject(t) {
                    return this._toObjectMethod("toObject", t)
                }
                toJSON() {
                    return this.toObject()
                }
                toDatalessObject(t) {
                    return this._toObjectMethod("toDatalessObject", t)
                }
                _toObjectMethod(t, e) {
                    let i = this.clipPath,
                        r = i && !i.excludeFromExport ? this._toObject(i, t, e) : null;
                    return h(h(h({
                        version: w
                    }, tC(this, e)), {}, {
                        objects: this._objects.filter(t => !t.excludeFromExport).map(i => this._toObject(i, t, e))
                    }, this.__serializeBgOverlay(t, e)), r ? {
                        clipPath: r
                    } : null)
                }
                _toObject(t, e, i) {
                    let r;
                    this.includeDefaultValues || (r = t.includeDefaultValues, t.includeDefaultValues = !1);
                    let s = t[e](i);
                    return this.includeDefaultValues || (t.includeDefaultValues = !!r), s
                }
                __serializeBgOverlay(t, e) {
                    let i = {},
                        r = this.backgroundImage,
                        s = this.overlayImage,
                        n = this.backgroundColor,
                        o = this.overlayColor;
                    return tB(n) ? n.excludeFromExport || (i.background = n.toObject(e)) : n && (i.background = n), tB(o) ? o.excludeFromExport || (i.overlay = o.toObject(e)) : o && (i.overlay = o), r && !r.excludeFromExport && (i.backgroundImage = this._toObject(r, t, e)), s && !s.excludeFromExport && (i.overlayImage = this._toObject(s, t, e)), i
                }
                toSVG() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    t.reviver = e;
                    let i = [];
                    return this._setSVGPreamble(i, t), this._setSVGHeader(i, t), this.clipPath && i.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, ')" >\n')), this._setSVGBgOverlayColor(i, "background"), this._setSVGBgOverlayImage(i, "backgroundImage", e), this._setSVGObjects(i, e), this.clipPath && i.push("</g>\n"), this._setSVGBgOverlayColor(i, "overlay"), this._setSVGBgOverlayImage(i, "overlayImage", e), i.push("</svg>"), i.join("")
                }
                _setSVGPreamble(t, e) {
                    e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
                }
                _setSVGHeader(t, e) {
                    let i, r = e.width || "".concat(this.width),
                        s = e.height || "".concat(this.height),
                        n = f.NUM_FRACTION_DIGITS,
                        o = e.viewBox;
                    if (o) i = 'viewBox="'.concat(o.x, " ").concat(o.y, " ").concat(o.width, " ").concat(o.height, '" ');
                    else if (this.svgViewportTransformation) {
                        let t = this.viewportTransform;
                        i = 'viewBox="'.concat(tP(-t[4] / t[0], n), " ").concat(tP(-t[5] / t[3], n), " ").concat(tP(this.width / t[0], n), " ").concat(tP(this.height / t[3], n), '" ')
                    } else i = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
                    t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', r, '" ', 'height="', s, '" ', i, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", w, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), "</defs>\n")
                }
                createSVGClipPathMarkup(t) {
                    let e = this.clipPath;
                    return e ? (e.clipPathId = "CLIPPATH_".concat(Q()), '<clipPath id="'.concat(e.clipPathId, '" >\n').concat(e.toClipPathSVG(t.reviver), "</clipPath>\n")) : ""
                }
                createSVGRefElementsMarkup() {
                    return ["background", "overlay"].map(t => {
                        let e = this["".concat(t, "Color")];
                        if (tB(e)) {
                            let i = this["".concat(t, "Vpt")],
                                r = this.viewportTransform,
                                s = {
                                    isType: () => !1,
                                    width: this.width / (i ? r[0] : 1),
                                    height: this.height / (i ? r[3] : 1)
                                };
                            return e.toSVG(s, {
                                additionalTransform: i ? tj(r) : ""
                            })
                        }
                    }).join("")
                }
                createSVGFontFacesMarkup() {
                    let t = [],
                        e = {},
                        i = f.fontPaths;
                    this._objects.forEach(function e(i) {
                        t.push(i), tX(i) && i._objects.forEach(e)
                    }), t.forEach(t => {
                        if (!tY(t)) return;
                        let {
                            styles: r,
                            fontFamily: s
                        } = t;
                        e[s] || !i[s] || (e[s] = !0, r && Object.values(r).forEach(t => {
                            Object.values(t).forEach(t => {
                                let {
                                    fontFamily: r = ""
                                } = t;
                                !e[r] && i[r] && (e[r] = !0)
                            })
                        }))
                    });
                    let r = Object.keys(e).map(t => "		@font-face {\n			font-family: '".concat(t, "';\n			src: url('").concat(i[t], "');\n		}\n")).join("");
                    return r ? '	<style type="text/css"><![CDATA[\n'.concat(r, "]]></style>\n") : ""
                }
                _setSVGObjects(t, e) {
                    this.forEachObject(i => {
                        i.excludeFromExport || this._setSVGObject(t, i, e)
                    })
                }
                _setSVGObject(t, e, i) {
                    t.push(e.toSVG(i))
                }
                _setSVGBgOverlayImage(t, e, i) {
                    let r = this[e];
                    r && !r.excludeFromExport && r.toSVG && t.push(r.toSVG(i))
                }
                _setSVGBgOverlayColor(t, e) {
                    let i = this["".concat(e, "Color")];
                    if (i)
                        if (tB(i)) {
                            let r = i.repeat || "",
                                s = this.width,
                                n = this.height,
                                o = this["".concat(e, "Vpt")] ? tj(to(this.viewportTransform)) : "";
                            t.push('<rect transform="'.concat(o, " translate(").concat(s / 2, ",").concat(n / 2, ')" x="').concat(i.offsetX - s / 2, '" y="').concat(i.offsetY - n / 2, '" width="').concat(("repeat-y" === r || "no-repeat" === r) && tI(i) ? i.source.width : s, '" height="').concat(("repeat-x" === r || "no-repeat" === r) && tI(i) ? i.source.height : n, '" fill="url(#SVGID_').concat(i.id, ')"></rect>\n'))
                        } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', i, '"', "></rect>\n")
                }
                loadFromJSON(t, e) {
                    let {
                        signal: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!t) return Promise.reject(Error("fabric.js: `json` is undefined"));
                    let r = "string" == typeof t ? JSON.parse(t) : t,
                        {
                            objects: s = [],
                            backgroundImage: n,
                            background: o,
                            overlayImage: a,
                            overlay: h,
                            clipPath: l
                        } = r,
                        c = this.renderOnAddRemove;
                    return this.renderOnAddRemove = !1, Promise.all([ty(s, {
                        reviver: e,
                        signal: i
                    }), tx({
                        backgroundImage: n,
                        backgroundColor: o,
                        overlayImage: a,
                        overlayColor: h,
                        clipPath: l
                    }, {
                        signal: i
                    })]).then(t => {
                        let [e, i] = t;
                        return this.clear(), this.add(...e), this.set(r), this.set(i), this.renderOnAddRemove = c, this
                    })
                }
                clone(t) {
                    let e = this.toObject(t);
                    return this.cloneWithoutData().loadFromJSON(e)
                }
                cloneWithoutData() {
                    let t = $();
                    return t.width = this.width, t.height = this.height, new this.constructor(t)
                }
                toDataURL() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            format: e = "png",
                            quality: i = 1,
                            multiplier: r = 1,
                            enableRetinaScaling: s = !1
                        } = t,
                        n = r * (s ? this.getRetinaScaling() : 1);
                    return te(this.toCanvasElement(n, t), e, i)
                }
                toCanvasElement() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        {
                            width: e,
                            height: i,
                            left: r,
                            top: s,
                            filter: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = (e || this.width) * t,
                        a = (i || this.height) * t,
                        h = this.getZoom(),
                        l = this.width,
                        c = this.height,
                        u = h * t,
                        d = this.viewportTransform,
                        g = (d[4] - (r || 0)) * t,
                        f = (d[5] - (s || 0)) * t,
                        p = this.enableRetinaScaling,
                        m = $(),
                        _ = n ? this._objects.filter(t => n(t)) : this._objects;
                    return m.width = o, m.height = a, this.enableRetinaScaling = !1, this.viewportTransform = [u, 0, 0, u, g, f], this.width = o, this.height = a, this.calcViewportBoundaries(), this.renderCanvas(m.getContext("2d"), _), this.viewportTransform = d, this.width = l, this.height = c, this.calcViewportBoundaries(), this.enableRetinaScaling = p, m
                }
                dispose() {
                    return this.disposed || this.elements.cleanupDOM({
                        width: this.width,
                        height: this.height
                    }), this.disposed = !0, new Promise((t, e) => {
                        let i = () => {
                            this.destroy(), t(!0)
                        };
                        i.kill = e, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t(!1) : this.nextRenderHandle ? this.__cleanupTask = i : i()
                    })
                }
                destroy() {
                    this.destroyed = !0, this.cancelRequestedRender(), this.forEachObject(t => t.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose()
                }
                toString() {
                    return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>")
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e), this.initElements(t), this._setDimensionsImpl({
                        width: this.width || this.elements.lower.el.width || 0,
                        height: this.height || this.elements.lower.el.height || 0
                    }), this.viewportTransform = [...this.viewportTransform], this.calcViewportBoundaries()
                }
            }
            l(tQ, "ownDefaults", tZ);
            let t$ = ["touchstart", "touchmove", "touchend"],
                t0 = t => {
                    let e, i = tG(t.target),
                        r = (e = t.changedTouches) && e[0] ? e[0] : t;
                    return new H(r.clientX + i.left, r.clientY + i.top)
                },
                t1 = t => t$.includes(t.type) || "touch" === t.pointerType,
                t2 = t => {
                    t.preventDefault(), t.stopPropagation()
                },
                t5 = t => {
                    if (0 === t.length) return {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    };
                    let {
                        min: e,
                        max: i
                    } = t.reduce((t, e) => {
                        let {
                            min: i,
                            max: r
                        } = t;
                        return {
                            min: i.min(e),
                            max: r.max(e)
                        }
                    }, {
                        min: new H(t[0]),
                        max: new H(t[0])
                    }), r = i.subtract(e);
                    return {
                        left: e.x,
                        top: e.y,
                        width: r.x,
                        height: r.y
                    }
                },
                t3 = ["translateX", "translateY", "scaleX", "scaleY"],
                t4 = (t, e) => t8(t, ta(e, t.calcOwnMatrix())),
                t8 = (t, e) => {
                    let i = tl(e),
                        {
                            translateX: r,
                            translateY: s,
                            scaleX: n,
                            scaleY: o
                        } = i,
                        a = c(i, t3),
                        h = new H(r, s);
                    t.flipX = !1, t.flipY = !1, Object.assign(t, a), t.set({
                        scaleX: n,
                        scaleY: o
                    }), t.setPositionByOrigin(h, P, P)
                },
                t6 = t => {
                    t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0)
                },
                t9 = t => ({
                    scaleX: t.scaleX,
                    scaleY: t.scaleY,
                    skewX: t.skewX,
                    skewY: t.skewY,
                    angle: t.angle,
                    left: t.left,
                    flipX: t.flipX,
                    flipY: t.flipY,
                    top: t.top
                }),
                t7 = (t, e, i) => {
                    let r = t / 2,
                        s = e / 2,
                        n = tm(i),
                        o = t5([new H(-r, -s), new H(r, -s), new H(-r, s), new H(r, s)].map(t => t.transform(n)));
                    return new H(o.width, o.height)
                },
                et = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
                    return ta(to(e), t)
                },
                ee = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M;
                    return t.transform(et(e, i))
                },
                ei = (t, e, i) => {
                    let r = et(e, i);
                    return t8(t, ta(r, t.calcOwnMatrix())), r
                },
                er = (t, e) => {
                    var i;
                    let {
                        transform: {
                            target: r
                        }
                    } = e;
                    null == (i = r.canvas) || i.fire("object:".concat(t), h(h({}, e), {}, {
                        target: r
                    })), r.fire(t, e)
                },
                es = {
                    left: -.5,
                    top: -.5,
                    center: 0,
                    bottom: .5,
                    right: .5
                },
                en = t => "string" == typeof t ? es[t] : t - .5,
                eo = "not-allowed";

            function ea(t) {
                return t.originX === P && t.originY === P
            }
            let eh = (t, e) => t[e],
                el = (t, e, i, r) => ({
                    e: t,
                    transform: e,
                    pointer: new H(i, r)
                });

            function ec(t, e) {
                return Math.round((t.getTotalAngle() + tr(Math.atan2(e.y, e.x)) + 360) % 360 / 45)
            }

            function eu(t, e, i, r, s) {
                var n, o;
                let a, h, {
                        target: l,
                        corner: c
                    } = t,
                    u = l.controls[c],
                    d = (null == (n = l.canvas) ? void 0 : n.getZoom()) || 1,
                    g = l.padding / d,
                    f = (o = new H(r, s), a = l.getRelativeCenterPoint(), h = void 0 !== e && void 0 !== i ? l.translateToGivenOrigin(a, P, P, e, i) : new H(l.left, l.top), (l.angle ? o.rotate(-ti(l.angle), a) : o).subtract(h));
                return f.x >= g && (f.x -= g), f.x <= -g && (f.x += g), f.y >= g && (f.y -= g), f.y <= g && (f.y += g), f.x -= u.offsetX, f.y -= u.offsetY, f
            }
            let ed = (t, e, i, r) => {
                let {
                    target: s,
                    offsetX: n,
                    offsetY: o
                } = e, a = i - n, h = r - o, l = !eh(s, "lockMovementX") && s.left !== a, c = !eh(s, "lockMovementY") && s.top !== h;
                return l && s.set(E, a), c && s.set("top", h), (l || c) && er("moving", el(t, e, i, r)), l || c
            };
            class eg {
                getSvgStyles(t) {
                    let e = this.fillRule ? this.fillRule : "nonzero",
                        i = this.strokeWidth ? this.strokeWidth : "0",
                        r = this.strokeDashArray ? this.strokeDashArray.join(" ") : F,
                        s = this.strokeDashOffset ? this.strokeDashOffset : "0",
                        n = this.strokeLineCap ? this.strokeLineCap : "butt",
                        o = this.strokeLineJoin ? this.strokeLineJoin : "miter",
                        a = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
                        h = void 0 !== this.opacity ? this.opacity : "1",
                        l = this.visible ? "" : " visibility: hidden;",
                        c = t ? "" : this.getSvgFilter(),
                        u = tF("fill", this.fill);
                    return tF("stroke", this.stroke) + "stroke-width: " + i + "; stroke-dasharray: " + r + "; stroke-linecap: " + n + "; stroke-dashoffset: " + s + "; stroke-linejoin: " + o + "; stroke-miterlimit: " + a + "; " + u + "fill-rule: " + e + "; opacity: " + h + ";" + c + l
                }
                getSvgFilter() {
                    return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : ""
                }
                getSvgCommons() {
                    return [this.id ? 'id="'.concat(this.id, '" ') : "", this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""].join("")
                }
                getSvgTransform(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = t ? this.calcTransformMatrix() : this.calcOwnMatrix(),
                        r = 'transform="'.concat(tj(i));
                    return "".concat(r).concat(e, '" ')
                }
                _toSVG(t) {
                    return [""]
                }
                toSVG(t) {
                    return this._createBaseSVGMarkup(this._toSVG(t), {
                        reviver: t
                    })
                }
                toClipPathSVG(t) {
                    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t), {
                        reviver: t
                    })
                }
                _createBaseClipPathSVGMarkup(t) {
                    let {
                        reviver: e,
                        additionalTransform: i = ""
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = [this.getSvgTransform(!0, i), this.getSvgCommons()].join(""), s = t.indexOf("COMMON_PARTS");
                    return t[s] = r, e ? e(t.join("")) : t.join("")
                }
                _createBaseSVGMarkup(t) {
                    let e, {
                            noStyle: i,
                            reviver: r,
                            withShadow: s,
                            additionalTransform: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = i ? "" : 'style="'.concat(this.getSvgStyles(), '" '),
                        a = s ? 'style="'.concat(this.getSvgFilter(), '" ') : "",
                        h = this.clipPath,
                        l = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "",
                        c = h && h.absolutePositioned,
                        u = this.stroke,
                        d = this.fill,
                        g = this.shadow,
                        f = [],
                        p = t.indexOf("COMMON_PARTS");
                    h && (h.clipPathId = "CLIPPATH_".concat(Q()), e = '<clipPath id="'.concat(h.clipPathId, '" >\n').concat(h.toClipPathSVG(r), "</clipPath>\n")), c && f.push("<g ", a, this.getSvgCommons(), " >\n"), f.push("<g ", this.getSvgTransform(!1), c ? "" : a + this.getSvgCommons(), " >\n");
                    let m = "" + o + l + (i ? "" : this.addPaintOrder()) + " " + (n ? 'transform="'.concat(n, '" ') : "");
                    return t[p] = m, tB(d) && f.push(d.toSVG(this)), tB(u) && f.push(u.toSVG(this)), g && f.push(g.toSVG(this)), h && f.push(e), f.push(t.join("")), f.push("</g>\n"), c && f.push("</g>\n"), r ? r(f.join("")) : f.join("")
                }
                addPaintOrder() {
                    return "fill" !== this.paintFirst ? ' paint-order="'.concat(this.paintFirst, '" ') : ""
                }
            }
            let ef = (t, e, i, r) => (t < Math.abs(e) ? (t = e, r = i / 4) : r = 0 === e && 0 === t ? i / k * Math.asin(1) : i / k * Math.asin(e / t), {
                    a: t,
                    c: e,
                    p: i,
                    s: r
                }),
                ep = (t, e, i, r, s) => t * Math.pow(2, 10 * (r -= 1)) * Math.sin((r * s - e) * k / i),
                em = (t, e, i, r) => -i * Math.cos(t / r * O) + i + e,
                e_ = (t, e, i, r) => (t /= r) < 1 / 2.75 ? 7.5625 * t * t * i + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e,
                ev = (t, e, i, r) => i - e_(r - t, 0, i, r) + e;
            var ey, ex, eC, eb, eS, ew, eT, eO, ek, eD, eM = Object.freeze({
                __proto__: null,
                defaultEasing: em,
                easeInBack: function(t, e, i, r) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                    return i * (t /= r) * t * ((s + 1) * t - s) + e
                },
                easeInBounce: ev,
                easeInCirc: (t, e, i, r) => -i * (Math.sqrt(1 - (t /= r) * t) - 1) + e,
                easeInCubic: (t, e, i, r) => i * (t / r) ** 3 + e,
                easeInElastic: (t, e, i, r) => {
                    let s = 0;
                    if (0 === t) return e;
                    if (1 == (t /= r)) return e + i;
                    s || (s = .3 * r);
                    let {
                        a: n,
                        s: o,
                        p: a
                    } = ef(i, i, s, 1.70158);
                    return -ep(n, o, a, t, r) + e
                },
                easeInExpo: (t, e, i, r) => 0 === t ? e : i * 2 ** (10 * (t / r - 1)) + e,
                easeInOutBack: function(t, e, i, r) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                    return (t /= r / 2) < 1 ? i / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + e : i / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + e
                },
                easeInOutBounce: (t, e, i, r) => t < r / 2 ? .5 * ev(2 * t, 0, i, r) + e : .5 * e_(2 * t - r, 0, i, r) + .5 * i + e,
                easeInOutCirc: (t, e, i, r) => (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t ** 2) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e,
                easeInOutCubic: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t ** 3 + e : i / 2 * ((t - 2) ** 3 + 2) + e,
                easeInOutElastic: (t, e, i, r) => {
                    let s = 0;
                    if (0 === t) return e;
                    if (2 == (t /= r / 2)) return e + i;
                    s || (s = .3 * 1.5 * r);
                    let {
                        a: n,
                        s: o,
                        p: a,
                        c: h
                    } = ef(i, i, s, 1.70158);
                    return t < 1 ? -.5 * ep(n, o, a, t, r) + e : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * k / a) * .5 + h + e
                },
                easeInOutExpo: (t, e, i, r) => 0 === t ? e : t === r ? e + i : (t /= r / 2) < 1 ? i / 2 * 2 ** (10 * (t - 1)) + e : -(i / 2 * (2 ** (-10 * --t) + 2)) + e,
                easeInOutQuad: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t ** 2 + e : -i / 2 * (--t * (t - 2) - 1) + e,
                easeInOutQuart: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t ** 4 + e : -i / 2 * ((t -= 2) * t ** 3 - 2) + e,
                easeInOutQuint: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t ** 5 + e : i / 2 * ((t - 2) ** 5 + 2) + e,
                easeInOutSine: (t, e, i, r) => -i / 2 * (Math.cos(Math.PI * t / r) - 1) + e,
                easeInQuad: (t, e, i, r) => i * (t /= r) * t + e,
                easeInQuart: (t, e, i, r) => i * (t /= r) * t ** 3 + e,
                easeInQuint: (t, e, i, r) => i * (t / r) ** 5 + e,
                easeInSine: (t, e, i, r) => -i * Math.cos(t / r * O) + i + e,
                easeOutBack: function(t, e, i, r) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
                    return i * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + e
                },
                easeOutBounce: e_,
                easeOutCirc: (t, e, i, r) => i * Math.sqrt(1 - (t = t / r - 1) * t) + e,
                easeOutCubic: (t, e, i, r) => i * ((t / r - 1) ** 3 + 1) + e,
                easeOutElastic: (t, e, i, r) => {
                    let s = 0;
                    if (0 === t) return e;
                    if (1 == (t /= r)) return e + i;
                    s || (s = .3 * r);
                    let {
                        a: n,
                        s: o,
                        p: a,
                        c: h
                    } = ef(i, i, s, 1.70158);
                    return n * 2 ** (-10 * t) * Math.sin((t * r - o) * k / a) + h + e
                },
                easeOutExpo: (t, e, i, r) => t === r ? e + i : -(i * (2 ** (-10 * t / r) + 1)) + e,
                easeOutQuad: (t, e, i, r) => -i * (t /= r) * (t - 2) + e,
                easeOutQuart: (t, e, i, r) => -i * ((t = t / r - 1) * t ** 3 - 1) + e,
                easeOutQuint: (t, e, i, r) => i * ((t / r - 1) ** 5 + 1) + e,
                easeOutSine: (t, e, i, r) => i * Math.sin(t / r * O) + e
            });
            let eP = () => !1;
            class eE {
                get state() {
                    return this._state
                }
                isDone() {
                    return "aborted" === this._state || "completed" === this._state
                }
                start() {
                    let t = t => {
                        "pending" === this._state && (this.startTime = t || +new Date, this._state = "running", this._onStart(), this.tick(this.startTime))
                    };
                    this.register(), this.delay > 0 ? setTimeout(() => K(t), this.delay) : K(t)
                }
                tick(t) {
                    let e = (t || +new Date) - this.startTime,
                        i = Math.min(e, this.duration);
                    this.durationProgress = i / this.duration;
                    let {
                        value: r,
                        valueProgress: s
                    } = this.calculate(i);
                    this.value = Object.freeze(r), this.valueProgress = s, "aborted" === this._state || (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), K(this.tick)))
                }
                register() {
                    I.push(this)
                }
                unregister() {
                    I.remove(this)
                }
                abort() {
                    this._state = "aborted", this.unregister()
                }
                constructor(t) {
                    let {
                        startValue: e,
                        byValue: i,
                        duration: r = 500,
                        delay: s = 0,
                        easing: n = em,
                        onStart: o = T,
                        onChange: a = T,
                        onComplete: h = T,
                        abort: c = eP,
                        target: u
                    } = t;
                    l(this, "_state", "pending"), l(this, "durationProgress", 0), l(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = r, this.delay = s, this.easing = n, this._onStart = o, this._onChange = a, this._onComplete = h, this._abort = c, this.target = u, this.startValue = e, this.byValue = i, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value)
                }
            }
            let eA = ["startValue", "endValue"];
            class ej extends eE {
                calculate(t) {
                    let e = this.easing(t, this.startValue, this.byValue, this.duration);
                    return {
                        value: e,
                        valueProgress: Math.abs((e - this.startValue) / this.byValue)
                    }
                }
                constructor(t) {
                    let {
                        startValue: e = 0,
                        endValue: i = 100
                    } = t;
                    super(h(h({}, c(t, eA)), {}, {
                        startValue: e,
                        byValue: i - e
                    }))
                }
            }
            let eF = ["startValue", "endValue"];
            class eL extends eE {
                calculate(t) {
                    let e = this.startValue.map((e, i) => this.easing(t, e, this.byValue[i], this.duration, i));
                    return {
                        value: e,
                        valueProgress: Math.abs((e[0] - this.startValue[0]) / this.byValue[0])
                    }
                }
                constructor(t) {
                    let {
                        startValue: e = [0],
                        endValue: i = [100]
                    } = t;
                    super(h(h({}, c(t, eF)), {}, {
                        startValue: e,
                        byValue: i.map((t, i) => t - e[i])
                    }))
                }
            }
            let eB = (t, e, i) => Math.max(t, Math.min(e, i)),
                eR = ["startValue", "endValue", "easing", "onChange", "onComplete", "abort"],
                eI = (t, e, i, r) => e + i * (1 - Math.cos(t / r * O)),
                eX = t => t && ((e, i, r) => t(new tM(e).toRgba(), i, r));
            class eY extends eE {
                calculate(t) {
                    let [e, i, r, s] = this.startValue.map((e, i) => this.easing(t, e, this.byValue[i], this.duration, i)), n = [...[e, i, r].map(Math.round), eB(0, s, 1)];
                    return {
                        value: n,
                        valueProgress: n.map((t, e) => 0 !== this.byValue[e] ? Math.abs((t - this.startValue[e]) / this.byValue[e]) : 0).find(t => 0 !== t) || 0
                    }
                }
                constructor(t) {
                    let {
                        startValue: e,
                        endValue: i,
                        easing: r = eI,
                        onChange: s,
                        onComplete: n,
                        abort: o
                    } = t, a = c(t, eR);
                    const l = new tM(e).getSource();
                    super(h(h({}, a), {}, {
                        startValue: l,
                        byValue: new tM(i).getSource().map((t, e) => t - l[e]),
                        easing: r,
                        onChange: eX(s),
                        onComplete: eX(n),
                        abort: eX(o)
                    }))
                }
            }

            function eW(t) {
                let e = Array.isArray(t.startValue) || Array.isArray(t.endValue) ? new eL(t) : new ej(t);
                return e.start(), e
            }

            function eV(t) {
                let e = new eY(t);
                return e.start(), e
            }
            let eG = new H(1, 0),
                ez = new H,
                eH = (t, e) => t.rotate(e),
                eU = (t, e) => new H(e).subtract(t),
                eN = t => t.distanceFrom(ez),
                eq = (t, e) => Math.atan2(eQ(t, e), e$(t, e)),
                eK = t => eq(eG, t),
                eJ = t => t.eq(ez) ? t : t.scalarDivide(eN(t)),
                eZ = function(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return eJ(new H(-t.y, t.x).scalarMultiply(e ? 1 : -1))
                },
                eQ = (t, e) => t.x * e.y - t.y * e.x,
                e$ = (t, e) => t.x * e.x + t.y * e.y,
                e0 = (t, e, i) => {
                    if (t.eq(e) || t.eq(i)) return !0;
                    let r = eQ(e, i),
                        s = eQ(e, t),
                        n = eQ(i, t);
                    return r >= 0 ? s >= 0 && n <= 0 : !(s <= 0 && n >= 0)
                };
            class e1 {
                includes(t) {
                    return this.points.some(e => e.eq(t))
                }
                append() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return this.points = this.points.concat(e.filter(t => !this.includes(t))), this
                }
                static isPointContained(t, e, i) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (e.eq(i)) return t.eq(e);
                    {
                        if (e.x === i.x) return t.x === e.x && (r || t.y >= Math.min(e.y, i.y) && t.y <= Math.max(e.y, i.y));
                        if (e.y === i.y) return t.y === e.y && (r || t.x >= Math.min(e.x, i.x) && t.x <= Math.max(e.x, i.x));
                        let s = eU(e, i),
                            n = eU(e, t).divide(s);
                        return r ? Math.abs(n.x) === Math.abs(n.y) : n.x === n.y && n.x >= 0 && n.x <= 1
                    }
                }
                static intersectLineLine(t, e, i, r) {
                    let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        n = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
                        o = e.x - t.x,
                        a = e.y - t.y,
                        h = r.x - i.x,
                        l = r.y - i.y,
                        c = t.x - i.x,
                        u = t.y - i.y,
                        d = h * u - l * c,
                        g = o * u - a * c,
                        f = l * o - h * a;
                    if (0 !== f) {
                        let e = d / f,
                            i = g / f;
                        return (s || 0 <= e && e <= 1) && (n || 0 <= i && i <= 1) ? new e1("Intersection").append(new H(t.x + e * o, t.y + e * a)) : new e1
                    }
                    if (0 !== d && 0 !== g) return new e1("Parallel");
                    {
                        let o = s || n || e1.isPointContained(t, i, r) || e1.isPointContained(e, i, r) || e1.isPointContained(i, t, e) || e1.isPointContained(r, t, e);
                        return new e1(o ? "Coincident" : void 0)
                    }
                }
                static intersectSegmentLine(t, e, i, r) {
                    return e1.intersectLineLine(t, e, i, r, !1, !0)
                }
                static intersectSegmentSegment(t, e, i, r) {
                    return e1.intersectLineLine(t, e, i, r, !1, !1)
                }
                static intersectLinePolygon(t, e, i) {
                    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        s = new e1,
                        n = i.length;
                    for (let o = 0, a, h, l; o < n; o++) {
                        if (a = i[o], h = i[(o + 1) % n], "Coincident" === (l = e1.intersectLineLine(t, e, a, h, r, !1)).status) return l;
                        s.append(...l.points)
                    }
                    return s.points.length > 0 && (s.status = "Intersection"), s
                }
                static intersectSegmentPolygon(t, e, i) {
                    return e1.intersectLinePolygon(t, e, i, !1)
                }
                static intersectPolygonPolygon(t, e) {
                    let i = new e1,
                        r = t.length,
                        s = [];
                    for (let n = 0; n < r; n++) {
                        let o = t[n],
                            a = t[(n + 1) % r],
                            h = e1.intersectSegmentPolygon(o, a, e);
                        "Coincident" === h.status ? (s.push(h), i.append(o, a)) : i.append(...h.points)
                    }
                    return s.length > 0 && s.length === t.length ? new e1("Coincident") : (i.points.length > 0 && (i.status = "Intersection"), i)
                }
                static intersectPolygonRectangle(t, e, i) {
                    let r = e.min(i),
                        s = e.max(i),
                        n = new H(s.x, r.y),
                        o = new H(r.x, s.y);
                    return e1.intersectPolygonPolygon(t, [r, n, s, o])
                }
                constructor(t) {
                    this.status = t, this.points = []
                }
            }
            class e2 extends q {
                _getTransformedDimensions() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = h({
                            scaleX: this.scaleX,
                            scaleY: this.scaleY,
                            skewX: this.skewX,
                            skewY: this.skewY,
                            width: this.width,
                            height: this.height,
                            strokeWidth: this.strokeWidth
                        }, t),
                        i = e.strokeWidth,
                        r = i,
                        s = 0;
                    this.strokeUniform && (r = 0, s = i);
                    let n = e.width + r,
                        o = e.height + r;
                    return (0 === e.skewX && 0 === e.skewY ? new H(n * e.scaleX, o * e.scaleY) : t7(n, o, e)).scalarAdd(s)
                }
                translateToGivenOrigin(t, e, i, r, s) {
                    let n = t.x,
                        o = t.y,
                        a = en(r) - en(e),
                        h = en(s) - en(i);
                    if (a || h) {
                        let t = this._getTransformedDimensions();
                        n += a * t.x, o += h * t.y
                    }
                    return new H(n, o)
                }
                translateToCenterPoint(t, e, i) {
                    let r = this.translateToGivenOrigin(t, e, i, P, P);
                    return this.angle ? r.rotate(ti(this.angle), t) : r
                }
                translateToOriginPoint(t, e, i) {
                    let r = this.translateToGivenOrigin(t, P, P, e, i);
                    return this.angle ? r.rotate(ti(this.angle), t) : r
                }
                getCenterPoint() {
                    let t = this.getRelativeCenterPoint();
                    return this.group ? tn(t, this.group.calcTransformMatrix()) : t
                }
                getRelativeCenterPoint() {
                    return this.translateToCenterPoint(new H(this.left, this.top), this.originX, this.originY)
                }
                getPointByOrigin(t, e) {
                    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t, e)
                }
                setPositionByOrigin(t, e, i) {
                    let r = this.translateToCenterPoint(t, e, i),
                        s = this.translateToOriginPoint(r, this.originX, this.originY);
                    this.set({
                        left: s.x,
                        top: s.y
                    })
                }
                _getLeftTopCoords() {
                    return this.translateToOriginPoint(this.getRelativeCenterPoint(), E, "top")
                }
            }
            class e5 extends e2 {
                getX() {
                    return this.getXY().x
                }
                setX(t) {
                    this.setXY(this.getXY().setX(t))
                }
                getY() {
                    return this.getXY().y
                }
                setY(t) {
                    this.setXY(this.getXY().setY(t))
                }
                getRelativeX() {
                    return this.left
                }
                setRelativeX(t) {
                    this.left = t
                }
                getRelativeY() {
                    return this.top
                }
                setRelativeY(t) {
                    this.top = t
                }
                getXY() {
                    let t = this.getRelativeXY();
                    return this.group ? tn(t, this.group.calcTransformMatrix()) : t
                }
                setXY(t, e, i) {
                    this.group && (t = tn(t, to(this.group.calcTransformMatrix()))), this.setRelativeXY(t, e, i)
                }
                getRelativeXY() {
                    return new H(this.left, this.top)
                }
                setRelativeXY(t, e, i) {
                    this.setPositionByOrigin(t, e || this.originX, i || this.originY)
                }
                _getCoords() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e ? t ? this.calcACoords() : this.calcLineCoords() : (this.aCoords || (this.aCoords = this.calcACoords()), this.lineCoords || (this.lineCoords = this.calcLineCoords()), t ? this.aCoords : this.lineCoords)
                }
                getCoords() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            tl: i,
                            tr: r,
                            br: s,
                            bl: n
                        } = this._getCoords(t, e),
                        o = [i, r, s, n];
                    if (this.group) {
                        let t = this.group.calcTransformMatrix();
                        return o.map(e => tn(e, t))
                    }
                    return o
                }
                intersectsWithRect(t, e, i, r) {
                    let s = this.getCoords(i, r);
                    return "Intersection" === e1.intersectPolygonRectangle(s, t, e).status
                }
                intersectsWithObject(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = e1.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i));
                    return "Intersection" === r.status || "Coincident" === r.status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i)
                }
                isContainedWithinObject(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.getCoords(e, i),
                        s = e ? t.aCoords : t.lineCoords,
                        n = t._getImageLines(s);
                    for (let e = 0; e < 4; e++)
                        if (!t.containsPoint(r[e], n)) return !1;
                    return !0
                }
                isContainedWithinRect(t, e, i, r) {
                    let s = this.getBoundingRect(i, r);
                    return s.left >= t.x && s.left + s.width <= e.x && s.top >= t.y && s.top + s.height <= e.y
                }
                isOverlapping(t) {
                    return this.intersectsWithObject(t) || this.isContainedWithinObject(t) || t.isContainedWithinObject(this)
                }
                containsPoint(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = this._getCoords(i, r),
                        n = e || this._getImageLines(s),
                        o = this._findCrossPoints(t, n);
                    return 0 !== o && o % 2 == 1
                }
                isOnScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this.canvas) return !1;
                    let {
                        tl: e,
                        br: i
                    } = this.canvas.vptCoords;
                    return !!(this.getCoords(!0, t).some(t => t.x <= i.x && t.x >= e.x && t.y <= i.y && t.y >= e.y) || this.intersectsWithRect(e, i, !0, t)) || this._containsCenterOfCanvas(e, i, t)
                }
                _containsCenterOfCanvas(t, e, i) {
                    let r = t.midPointFrom(e);
                    return this.containsPoint(r, void 0, !0, i)
                }
                isPartiallyOnScreen(t) {
                    if (!this.canvas) return !1;
                    let {
                        tl: e,
                        br: i
                    } = this.canvas.vptCoords;
                    return !!this.intersectsWithRect(e, i, !0, t) || this.getCoords(!0, t).every(t => (t.x >= i.x || t.x <= e.x) && (t.y >= i.y || t.y <= e.y)) && this._containsCenterOfCanvas(e, i, t)
                }
                _getImageLines(t) {
                    let {
                        tl: e,
                        tr: i,
                        bl: r,
                        br: s
                    } = t;
                    return {
                        topline: {
                            o: e,
                            d: i
                        },
                        rightline: {
                            o: i,
                            d: s
                        },
                        bottomline: {
                            o: s,
                            d: r
                        },
                        leftline: {
                            o: r,
                            d: e
                        }
                    }
                }
                _findCrossPoints(t, e) {
                    let i = 0;
                    for (let r in e) {
                        let s, n = e[r];
                        if ((!(n.o.y < t.y) || !(n.d.y < t.y)) && (!(n.o.y >= t.y) || !(n.d.y >= t.y))) {
                            if (n.o.x === n.d.x && n.o.x >= t.x) s = n.o.x;
                            else {
                                let e = (n.d.y - n.o.y) / (n.d.x - n.o.x);
                                s = -(t.y - 0 * t.x - (n.o.y - e * n.o.x)) / (0 - e)
                            }
                            if (s >= t.x && (i += 1), 2 === i) break
                        }
                    }
                    return i
                }
                getBoundingRect(t, e) {
                    return t5(this.getCoords(t, e))
                }
                getScaledWidth() {
                    return this._getTransformedDimensions().x
                }
                getScaledHeight() {
                    return this._getTransformedDimensions().y
                }
                scale(t) {
                    this._set("scaleX", t), this._set("scaleY", t), this.setCoords()
                }
                scaleToWidth(t, e) {
                    let i = this.getBoundingRect(e).width / this.getScaledWidth();
                    return this.scale(t / this.width / i)
                }
                scaleToHeight(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.getBoundingRect(e).height / this.getScaledHeight();
                    return this.scale(t / this.height / i)
                }
                getCanvasRetinaScaling() {
                    var t;
                    return (null == (t = this.canvas) ? void 0 : t.getRetinaScaling()) || 1
                }
                getTotalAngle() {
                    return this.group ? tl(this.calcTransformMatrix()).angle : this.angle
                }
                calcLineCoords() {
                    let t = this.getViewportTransform(),
                        e = this.padding,
                        i = ti(this.getTotalAngle()),
                        r = G(i) * e,
                        s = z(i) * e,
                        n = r + s,
                        o = r - s,
                        {
                            tl: a,
                            tr: h,
                            bl: l,
                            br: c
                        } = this.calcACoords(),
                        u = {
                            tl: tn(a, t),
                            tr: tn(h, t),
                            bl: tn(l, t),
                            br: tn(c, t)
                        };
                    return e && (u.tl.x -= o, u.tl.y -= n, u.tr.x += n, u.tr.y -= o, u.bl.x -= n, u.bl.y += o, u.br.x += o, u.br.y += n), u
                }
                getViewportTransform() {
                    var t;
                    return (null == (t = this.canvas) ? void 0 : t.viewportTransform) || M.concat()
                }
                calcACoords() {
                    let t = tu({
                            angle: this.angle
                        }),
                        {
                            x: e,
                            y: i
                        } = this.getRelativeCenterPoint(),
                        r = ta(tc(e, i), t),
                        s = this._getTransformedDimensions(),
                        n = s.x / 2,
                        o = s.y / 2;
                    return {
                        tl: tn({
                            x: -n,
                            y: -o
                        }, r),
                        tr: tn({
                            x: n,
                            y: -o
                        }, r),
                        bl: tn({
                            x: -n,
                            y: o
                        }, r),
                        br: tn({
                            x: n,
                            y: o
                        }, r)
                    }
                }
                setCoords() {
                    this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords()
                }
                transformMatrixKey() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = "";
                    return !t && this.group && (e = this.group.transformMatrixKey(t) + "_"), e + this.top + "_" + this.left + "_" + this.scaleX + "_" + this.scaleY + "_" + this.skewX + "_" + this.skewY + "_" + this.angle + "_" + this.originX + "_" + this.originY + "_" + this.width + "_" + this.height + "_" + this.strokeWidth + this.flipX + this.flipY
                }
                calcTransformMatrix() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = this.calcOwnMatrix();
                    if (t || !this.group) return e;
                    let i = this.transformMatrixKey(t),
                        r = this.matrixCache;
                    return r && r.key === i ? r.value : (this.group && (e = ta(this.group.calcTransformMatrix(!1), e)), this.matrixCache = {
                        key: i,
                        value: e
                    }, e)
                }
                calcOwnMatrix() {
                    let t = this.transformMatrixKey(!0),
                        e = this.ownMatrixCache;
                    if (e && e.key === t) return e.value;
                    let i = this.getRelativeCenterPoint(),
                        r = t_({
                            angle: this.angle,
                            translateX: i.x,
                            translateY: i.y,
                            scaleX: this.scaleX,
                            scaleY: this.scaleY,
                            skewX: this.skewX,
                            skewY: this.skewY,
                            flipX: this.flipX,
                            flipY: this.flipY
                        });
                    return this.ownMatrixCache = {
                        key: t,
                        value: r
                    }, r
                }
                _getNonTransformedDimensions() {
                    return new H(this.width, this.height).scalarAdd(this.strokeWidth)
                }
                _calculateCurrentDimensions(t) {
                    return this._getTransformedDimensions(t).transform(this.getViewportTransform(), !0).scalarAdd(2 * this.padding)
                }
            }
            class e3 extends e5 {
                getParent(t) {
                    let e;
                    return ((e = this.group) && e.isType("ActiveSelection") ? this.__owningGroup : this.group) || (t ? void 0 : this.canvas)
                }
                isDescendantOf(t) {
                    return this.__owningGroup === t || this.group === t || this.canvas === t || !!this.__owningGroup && this.__owningGroup.isDescendantOf(t) || !!this.group && this.group.isDescendantOf(t)
                }
                getAncestors(t) {
                    let e = [],
                        i = this;
                    do(i = i instanceof e3 ? i.getParent(t) : void 0) && e.push(i); while (i);
                    return e
                }
                findCommonAncestors(t, e) {
                    if (this === t) return {
                        fork: [],
                        otherFork: [],
                        common: [this, ...this.getAncestors(e)]
                    };
                    let i = this.getAncestors(e),
                        r = t.getAncestors(e);
                    if (0 === i.length && r.length > 0 && this === r[r.length - 1]) return {
                        fork: [],
                        otherFork: [t, ...r.slice(0, r.length - 1)],
                        common: [this]
                    };
                    for (let e = 0, s; e < i.length; e++) {
                        if ((s = i[e]) === t) return {
                            fork: [this, ...i.slice(0, e)],
                            otherFork: [],
                            common: i.slice(e)
                        };
                        for (let n = 0; n < r.length; n++) {
                            if (this === r[n]) return {
                                fork: [],
                                otherFork: [t, ...r.slice(0, n)],
                                common: [this, ...i]
                            };
                            if (s === r[n]) return {
                                fork: [this, ...i.slice(0, e)],
                                otherFork: [t, ...r.slice(0, n)],
                                common: i.slice(e)
                            }
                        }
                    }
                    return {
                        fork: [this, ...i],
                        otherFork: [t, ...r],
                        common: []
                    }
                }
                hasCommonAncestors(t, e) {
                    let i = this.findCommonAncestors(t, e);
                    return i && !!i.common.length
                }
                isInFrontOf(t) {
                    if (this === t) return;
                    let e = this.findCommonAncestors(t);
                    if (!e) return;
                    if (e.fork.includes(t)) return !0;
                    if (e.otherFork.includes(this)) return !1;
                    let i = e.common[0];
                    if (!i) return;
                    let r = e.fork.pop(),
                        s = e.otherFork.pop(),
                        n = i._objects.indexOf(r),
                        o = i._objects.indexOf(s);
                    return n > -1 && n > o
                }
            }
            class e4 extends e3 {
                animate(t, e) {
                    return Object.entries(t).reduce((t, i) => {
                        let [r, s] = i;
                        return t[r] = this._animate(r, s, e), t
                    }, {})
                }
                _animate(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.split("."),
                        s = this.colorProperties.includes(r[r.length - 1]),
                        {
                            easing: n,
                            duration: o,
                            abort: a,
                            startValue: h,
                            onChange: l,
                            onComplete: c
                        } = i,
                        u = {
                            target: this,
                            startValue: null != h ? h : r.reduce((t, e) => t[e], this),
                            endValue: e,
                            easing: n,
                            duration: o,
                            abort: null == a ? void 0 : a.bind(this),
                            onChange: (t, e, i) => {
                                r.reduce((e, i, s) => (s === r.length - 1 && (e[i] = t), e[i]), this), l && l(t, e, i)
                            },
                            onComplete: (t, e, i) => {
                                this.setCoords(), c && c(t, e, i)
                            }
                        };
                    return s ? eV(u) : eW(u)
                }
            }
            class e8 {
                static parseShadow(t) {
                    let e = t.trim(),
                        [i, r = 0, s = 0, n = 0] = (e8.reOffsetsAndBlur.exec(e) || []).map(t => parseFloat(t) || 0);
                    return {
                        color: (e.replace(e8.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(),
                        offsetX: r,
                        offsetY: s,
                        blur: n
                    }
                }
                toString() {
                    return [this.offsetX, this.offsetY, this.blur, this.color].join("px ")
                }
                toSVG(t) {
                    let e = eH(new H(this.offsetX, this.offsetY), ti(-t.angle)),
                        i = new tM(this.color),
                        r = 40,
                        s = 40;
                    return t.width && t.height && (r = 100 * tP((Math.abs(e.x) + this.blur) / t.width, f.NUM_FRACTION_DIGITS) + 20, s = 100 * tP((Math.abs(e.y) + this.blur) / t.height, f.NUM_FRACTION_DIGITS) + 20), t.flipX && (e.x *= -1), t.flipY && (e.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(s, '%" height="').concat(100 + 2 * s, '%" x="-').concat(r, '%" width="').concat(100 + 2 * r, '%" >\n	<feGaussianBlur in="SourceAlpha" stdDeviation="').concat(tP(this.blur ? this.blur / 2 : 0, f.NUM_FRACTION_DIGITS), '"></feGaussianBlur>\n	<feOffset dx="').concat(tP(e.x, f.NUM_FRACTION_DIGITS), '" dy="').concat(tP(e.y, f.NUM_FRACTION_DIGITS), '" result="oBlur" ></feOffset>\n	<feFlood flood-color="').concat(i.toRgb(), '" flood-opacity="').concat(i.getAlpha(), '"/>\n	<feComposite in2="oBlur" operator="in" />\n	<feMerge>\n		<feMergeNode></feMergeNode>\n		<feMergeNode in="SourceGraphic"></feMergeNode>\n	</feMerge>\n</filter>\n')
                }
                toObject() {
                    let t = {
                            color: this.color,
                            blur: this.blur,
                            offsetX: this.offsetX,
                            offsetY: this.offsetY,
                            affectStroke: this.affectStroke,
                            nonScaling: this.nonScaling
                        },
                        e = e8.ownDefaults;
                    return this.includeDefaultValues ? t : tb(t, (t, i) => t !== e[i])
                }
                constructor(t) {
                    const e = "string" == typeof t ? e8.parseShadow(t) : t;
                    for (const t in Object.assign(this, this.constructor.ownDefaults), e) this[t] = e[t];
                    this.id = Q()
                }
            }
            l(e8, "ownDefaults", {
                color: "rgb(0,0,0)",
                blur: 0,
                offsetX: 0,
                offsetY: 0,
                affectStroke: !1,
                includeDefaultValues: !0,
                nonScaling: !1
            }), l(e8, "reOffsetsAndBlur", /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/);
            let e6 = t => JSON.parse(JSON.stringify(t)),
                e9 = ["top", E, "scaleX", "scaleY", "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", "skewX", "skewY"],
                e7 = ["fill", "stroke", "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"],
                it = ["extraParam"],
                ie = class t extends e4 {
                    static getDefaults() {
                        return h({}, t.ownDefaults)
                    }
                    get type() {
                        let t = this.constructor.type;
                        return "FabricObject" === t ? "object" : t.toLowerCase()
                    }
                    set type(t) {
                        console.warn("Setting type has no effect", t)
                    }
                    _createCacheCanvas() {
                        this._cacheCanvas = $(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0
                    }
                    _limitCacheSize(t) {
                        let e = t.width,
                            i = t.height,
                            r = f.maxCacheSideLimit,
                            s = f.minCacheSideLimit;
                        if (e <= r && i <= r && e * i <= f.perfLimitSizeTotal) return e < s && (t.width = s), i < s && (t.height = s), t;
                        let [n, o] = S.limitDimsByArea(e / i), a = eB(s, n, r), h = eB(s, o, r);
                        return e > a && (t.zoomX /= e / a, t.width = a, t.capped = !0), i > h && (t.zoomY /= i / h, t.height = h, t.capped = !0), t
                    }
                    _getCacheCanvasDimensions() {
                        let t = this.getTotalObjectScaling(),
                            e = this._getTransformedDimensions({
                                skewX: 0,
                                skewY: 0
                            }),
                            i = e.x * t.x / this.scaleX,
                            r = e.y * t.y / this.scaleY;
                        return {
                            width: i + 2,
                            height: r + 2,
                            zoomX: t.x,
                            zoomY: t.y,
                            x: i,
                            y: r
                        }
                    }
                    _updateCacheCanvas() {
                        let t = this._cacheCanvas,
                            e = this._cacheContext,
                            i = this._limitCacheSize(this._getCacheCanvasDimensions()),
                            r = f.minCacheSideLimit,
                            s = i.width,
                            n = i.height,
                            o = i.zoomX,
                            a = i.zoomY,
                            h = s !== this.cacheWidth || n !== this.cacheHeight,
                            l = this.zoomX !== o || this.zoomY !== a;
                        if (!t || !e) return !1;
                        let c, u, d = h || l,
                            g = 0,
                            p = 0,
                            m = !1;
                        if (h) {
                            let t = this._cacheCanvas.width,
                                e = this._cacheCanvas.height,
                                o = s > t || n > e;
                            m = o || (s < .9 * t || n < .9 * e) && t > r && e > r, o && !i.capped && (s > r || n > r) && (g = .1 * s, p = .1 * n)
                        }
                        return tY(this) && this.path && (d = !0, m = !0, g += this.getHeightOfLine(0) * this.zoomX, p += this.getHeightOfLine(0) * this.zoomY), !!d && (m ? (t.width = Math.ceil(s + g), t.height = Math.ceil(n + p)) : (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height)), c = i.x / 2, u = i.y / 2, this.cacheTranslationX = Math.round(t.width / 2 - c) + c, this.cacheTranslationY = Math.round(t.height / 2 - u) + u, this.cacheWidth = s, this.cacheHeight = n, e.translate(this.cacheTranslationX, this.cacheTranslationY), e.scale(o, a), this.zoomX = o, this.zoomY = a, !0)
                    }
                    setOptions() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this._setOptions(t)
                    }
                    transform(t) {
                        let e = this.group && !this.group._transformDone || this.group && this.canvas && t === this.canvas.contextTop,
                            i = this.calcTransformMatrix(!e);
                        t.transform(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                    toObject() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            e = f.NUM_FRACTION_DIGITS,
                            i = this.clipPath && !this.clipPath.excludeFromExport ? h(h({}, this.clipPath.toObject(t)), {}, {
                                inverted: this.clipPath.inverted,
                                absolutePositioned: this.clipPath.absolutePositioned
                            }) : null,
                            r = h(h({}, tC(this, t)), {}, {
                                type: this.constructor.type,
                                version: w,
                                originX: this.originX,
                                originY: this.originY,
                                left: tP(this.left, e),
                                top: tP(this.top, e),
                                width: tP(this.width, e),
                                height: tP(this.height, e),
                                fill: tR(this.fill) ? this.fill.toObject() : this.fill,
                                stroke: tR(this.stroke) ? this.stroke.toObject() : this.stroke,
                                strokeWidth: tP(this.strokeWidth, e),
                                strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                                strokeLineCap: this.strokeLineCap,
                                strokeDashOffset: this.strokeDashOffset,
                                strokeLineJoin: this.strokeLineJoin,
                                strokeUniform: this.strokeUniform,
                                strokeMiterLimit: tP(this.strokeMiterLimit, e),
                                scaleX: tP(this.scaleX, e),
                                scaleY: tP(this.scaleY, e),
                                angle: tP(this.angle, e),
                                flipX: this.flipX,
                                flipY: this.flipY,
                                opacity: tP(this.opacity, e),
                                shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                                visible: this.visible,
                                backgroundColor: this.backgroundColor,
                                fillRule: this.fillRule,
                                paintFirst: this.paintFirst,
                                globalCompositeOperation: this.globalCompositeOperation,
                                skewX: tP(this.skewX, e),
                                skewY: tP(this.skewY, e)
                            }, i ? {
                                clipPath: i
                            } : null);
                        return this.includeDefaultValues ? r : this._removeDefaultValues(r)
                    }
                    toDatalessObject(t) {
                        return this.toObject(t)
                    }
                    _removeDefaultValues(t) {
                        let e = this.constructor.getDefaults(),
                            i = Object.keys(e).length > 0 ? e : Object.getPrototypeOf(this);
                        return tb(t, (t, e) => {
                            if (e === E || "top" === e || "type" === e) return !0;
                            let r = i[e];
                            return t !== r && !(Array.isArray(t) && Array.isArray(r) && 0 === t.length && 0 === r.length)
                        })
                    }
                    toString() {
                        return "#<".concat(this.constructor.type, ">")
                    }
                    getObjectScaling() {
                        if (!this.group) return new H(Math.abs(this.scaleX), Math.abs(this.scaleY));
                        let t = tl(this.calcTransformMatrix());
                        return new H(Math.abs(t.scaleX), Math.abs(t.scaleY))
                    }
                    getTotalObjectScaling() {
                        let t = this.getObjectScaling();
                        if (this.canvas) {
                            let e = this.canvas.getZoom(),
                                i = this.getCanvasRetinaScaling();
                            return t.scalarMultiply(e * i)
                        }
                        return t
                    }
                    getObjectOpacity() {
                        let t = this.opacity;
                        return this.group && (t *= this.group.getObjectOpacity()), t
                    }
                    _constrainScale(t) {
                        if (Math.abs(t) < this.minScaleLimit)
                            if (t < 0) return -this.minScaleLimit;
                            else return this.minScaleLimit;
                        return 0 === t ? 1e-4 : t
                    }
                    _set(t, e) {
                        let i = this[t] !== e;
                        if (("scaleX" === t || "scaleY" === t) && (e = this._constrainScale(e)), "scaleX" === t && e < 0 ? (this.flipX = !this.flipX, e *= -1) : "scaleY" === t && e < 0 ? (this.flipY = !this.flipY, e *= -1) : "shadow" !== t || !e || e instanceof e8 ? "dirty" === t && this.group && this.group.set("dirty", e) : e = new e8(e), this[t] = e, i) {
                            let e = this.group && this.group.isOnACache();
                            this.constructor.cacheProperties.includes(t) ? (this.dirty = !0, e && this.group.set("dirty", !0)) : e && this.constructor.stateProperties.includes(t) && this.group.set("dirty", !0)
                        }
                        return this
                    }
                    isNotVisible() {
                        return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible
                    }
                    render(t) {
                        this.isNotVisible() || (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), this.transform(t), this._setOpacity(t), this._setShadow(t), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(), this.drawObject(t), this.dirty = !1), t.restore())
                    }
                    drawSelectionBackground(t) {}
                    renderCache(t) {
                        t = t || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext && (this.drawObject(this._cacheContext, t.forClipping), this.dirty = !1)
                    }
                    _removeCacheCanvas() {
                        this._cacheCanvas = void 0, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0
                    }
                    hasStroke() {
                        return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth
                    }
                    hasFill() {
                        return this.fill && "transparent" !== this.fill
                    }
                    needsItsOwnCache() {
                        return !!("stroke" === this.paintFirst && this.hasFill() && this.hasStroke()) && "object" == typeof this.shadow || !!this.clipPath
                    }
                    shouldCache() {
                        return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching
                    }
                    willDrawShadow() {
                        return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
                    }
                    drawClipPathOnCache(t, e) {
                        if (t.save(), e.inverted ? t.globalCompositeOperation = "destination-out" : t.globalCompositeOperation = "destination-in", e.absolutePositioned) {
                            let e = to(this.calcTransformMatrix());
                            t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
                        }
                        e.transform(t), t.scale(1 / e.zoomX, 1 / e.zoomY), t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY), t.restore()
                    }
                    drawObject(t, e) {
                        let i = this.fill,
                            r = this.stroke;
                        e ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t)) : this._renderBackground(t), this._render(t), this._drawClipPath(t, this.clipPath), this.fill = i, this.stroke = r
                    }
                    _drawClipPath(t, e) {
                        e && (e._set("canvas", this.canvas), e.shouldCache(), e._transformDone = !0, e.renderCache({
                            forClipping: !0
                        }), this.drawClipPathOnCache(t, e))
                    }
                    drawCacheOnCanvas(t) {
                        t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY)
                    }
                    isCacheDirty() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.isNotVisible()) return !1;
                        if (this._cacheCanvas && this._cacheContext && !t && this._updateCacheCanvas()) return !0;
                        if (this.dirty || this.clipPath && this.clipPath.absolutePositioned) {
                            if (this._cacheCanvas && this._cacheContext && !t) {
                                let t = this.cacheWidth / this.zoomX,
                                    e = this.cacheHeight / this.zoomY;
                                this._cacheContext.clearRect(-t / 2, -e / 2, t, e)
                            }
                            return !0
                        }
                        return !1
                    }
                    _renderBackground(t) {
                        if (!this.backgroundColor) return;
                        let e = this._getNonTransformedDimensions();
                        t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t)
                    }
                    _setOpacity(t) {
                        this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity
                    }
                    _setStrokeStyles(t, e) {
                        let i = e.stroke;
                        i && (t.lineWidth = e.strokeWidth, t.lineCap = e.strokeLineCap, t.lineDashOffset = e.strokeDashOffset, t.lineJoin = e.strokeLineJoin, t.miterLimit = e.strokeMiterLimit, tB(i) ? "percentage" === i.gradientUnits || i.gradientTransform || i.patternTransform ? this._applyPatternForTransformedGradient(t, i) : (t.strokeStyle = i.toLive(t), this._applyPatternGradientTransform(t, i)) : t.strokeStyle = e.stroke)
                    }
                    _setFillStyles(t, e) {
                        let {
                            fill: i
                        } = e;
                        i && (tB(i) ? (t.fillStyle = i.toLive(t), this._applyPatternGradientTransform(t, i)) : t.fillStyle = i)
                    }
                    _setClippingProperties(t) {
                        t.globalAlpha = 1, t.strokeStyle = "transparent", t.fillStyle = "#000000"
                    }
                    _setLineDash(t, e) {
                        e && 0 !== e.length && (1 & e.length && e.push(...e), t.setLineDash(e))
                    }
                    _setShadow(t) {
                        if (!this.shadow) return;
                        let e = this.shadow,
                            i = this.canvas,
                            r = this.getCanvasRetinaScaling(),
                            [s, , , n] = (null == i ? void 0 : i.viewportTransform) || M,
                            o = s * r,
                            a = n * r,
                            h = e.nonScaling ? new H(1, 1) : this.getObjectScaling();
                        t.shadowColor = e.color, t.shadowBlur = e.blur * f.browserShadowBlurConstant * (o + a) * (h.x + h.y) / 4, t.shadowOffsetX = e.offsetX * o * h.x, t.shadowOffsetY = e.offsetY * a * h.y
                    }
                    _removeShadow(t) {
                        this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
                    }
                    _applyPatternGradientTransform(t, e) {
                        if (!tB(e)) return {
                            offsetX: 0,
                            offsetY: 0
                        };
                        let i = e.gradientTransform || e.patternTransform,
                            r = -this.width / 2 + e.offsetX || 0,
                            s = -this.height / 2 + e.offsetY || 0;
                        return "percentage" === e.gradientUnits ? t.transform(this.width, 0, 0, this.height, r, s) : t.transform(1, 0, 0, 1, r, s), i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), {
                            offsetX: r,
                            offsetY: s
                        }
                    }
                    _renderPaintInOrder(t) {
                        "stroke" === this.paintFirst ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t))
                    }
                    _render(t) {}
                    _renderFill(t) {
                        this.fill && (t.save(), this._setFillStyles(t, this), "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(), t.restore())
                    }
                    _renderStroke(t) {
                        if (this.stroke && 0 !== this.strokeWidth) {
                            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this.strokeUniform) {
                                let e = this.getObjectScaling();
                                t.scale(1 / e.x, 1 / e.y)
                            }
                            this._setLineDash(t, this.strokeDashArray), this._setStrokeStyles(t, this), t.stroke(), t.restore()
                        }
                    }
                    _applyPatternForTransformedGradient(t, e) {
                        var i;
                        let r = this._limitCacheSize(this._getCacheCanvasDimensions()),
                            s = $(),
                            n = this.getCanvasRetinaScaling(),
                            o = r.x / this.scaleX / n,
                            a = r.y / this.scaleY / n;
                        s.width = Math.ceil(o), s.height = Math.ceil(a);
                        let h = s.getContext("2d");
                        h && (h.beginPath(), h.moveTo(0, 0), h.lineTo(o, 0), h.lineTo(o, a), h.lineTo(0, a), h.closePath(), h.translate(o / 2, a / 2), h.scale(r.zoomX / this.scaleX / n, r.zoomY / this.scaleY / n), this._applyPatternGradientTransform(h, e), h.fillStyle = e.toLive(t), h.fill(), t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t.scale(n * this.scaleX / r.zoomX, n * this.scaleY / r.zoomY), t.strokeStyle = null != (i = h.createPattern(s, "no-repeat")) ? i : "")
                    }
                    _findCenterFromElement() {
                        return new H(this.left + this.width / 2, this.top + this.height / 2)
                    }
                    clone(t) {
                        let e = this.toObject(t);
                        return this.constructor.fromObject(e)
                    }
                    cloneAsImage(t) {
                        let e = this.toCanvasElement(t);
                        return new(R.getClass("image"))(e)
                    }
                    toCanvasElement() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t9(this),
                            i = this.group,
                            r = this.shadow,
                            s = Math.abs,
                            n = t.enableRetinaScaling ? Math.max(f.devicePixelRatio, 1) : 1,
                            o = (t.multiplier || 1) * n;
                        delete this.group, t.withoutTransform && t6(this), t.withoutShadow && (this.shadow = null), t.viewportTransform && ei(this, this.getViewportTransform());
                        let a = $(),
                            h = this.getBoundingRect(!0, !0),
                            l = this.shadow,
                            c = new H;
                        if (l) {
                            let t = l.blur,
                                e = l.nonScaling ? new H(1, 1) : this.getObjectScaling();
                            c.x = 2 * Math.round(s(l.offsetX) + t) * s(e.x), c.y = 2 * Math.round(s(l.offsetY) + t) * s(e.y)
                        }
                        let u = h.width + c.x,
                            d = h.height + c.y;
                        a.width = Math.ceil(u), a.height = Math.ceil(d);
                        let g = new tQ(a, {
                            enableRetinaScaling: !1,
                            renderOnAddRemove: !1,
                            skipOffscreen: !1
                        });
                        "jpeg" === t.format && (g.backgroundColor = "#fff"), this.setPositionByOrigin(new H(g.width / 2, g.height / 2), P, P);
                        let p = this.canvas;
                        g._objects = [this], this.set("canvas", g), this.setCoords();
                        let m = g.toCanvasElement(o || 1, t);
                        return this.set("canvas", p), this.shadow = r, i && (this.group = i), this.set(e), this.setCoords(), g._objects = [], g.destroy(), m
                    }
                    toDataURL() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return te(this.toCanvasElement(t), t.format || "png", t.quality || 1)
                    }
                    isType() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        return e.includes(this.constructor.type) || e.includes(this.type)
                    }
                    complexity() {
                        return 1
                    }
                    toJSON() {
                        return this.toObject()
                    }
                    rotate(t) {
                        let {
                            centeredRotation: e,
                            originX: i,
                            originY: r
                        } = this;
                        if (e) {
                            let {
                                x: t,
                                y: e
                            } = this.getRelativeCenterPoint();
                            this.originX = P, this.originY = P, this.left = t, this.top = e
                        }
                        if (this.set("angle", t), e) {
                            let {
                                x: t,
                                y: e
                            } = this.translateToOriginPoint(this.getRelativeCenterPoint(), i, r);
                            this.left = t, this.top = e, this.originX = i, this.originY = r
                        }
                    }
                    setOnGroup() {}
                    _setupCompositeOperation(t) {
                        this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
                    }
                    dispose() {
                        I.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && x().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null
                    }
                    static _fromObject(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                extraParam: i
                            } = e,
                            r = c(e, it);
                        return tx(e6(t), r).then(t => {
                            let e = h(h({}, r), t);
                            if (!i) return new this(e);
                            {
                                let {
                                    [i]: t, type: r
                                } = e;
                                return new this(t, c(e, [i, "type"].map(d)))
                            }
                        })
                    }
                    static fromObject(t, e) {
                        return this._fromObject(t, e)
                    }
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super(), l(this, "_cacheContext", null), Object.assign(this, this.constructor.getDefaults()), this.setOptions(t)
                    }
                };
            l(ie, "stateProperties", e9), l(ie, "cacheProperties", e7), l(ie, "ownDefaults", {
                originX: E,
                originY: "top",
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                scaleX: 1,
                scaleY: 1,
                flipX: !1,
                flipY: !1,
                opacity: 1,
                angle: 0,
                skewX: 0,
                skewY: 0,
                cornerSize: 13,
                touchCornerSize: 24,
                transparentCorners: !0,
                hoverCursor: null,
                moveCursor: null,
                padding: 0,
                borderColor: "rgb(178,204,255)",
                borderDashArray: null,
                cornerColor: "rgb(178,204,255)",
                cornerStrokeColor: "",
                cornerStyle: "rect",
                cornerDashArray: null,
                centeredScaling: !1,
                centeredRotation: !0,
                fill: "rgb(0,0,0)",
                fillRule: "nonzero",
                globalCompositeOperation: "source-over",
                backgroundColor: "",
                selectionBackgroundColor: "",
                stroke: null,
                strokeWidth: 1,
                strokeDashArray: null,
                strokeDashOffset: 0,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 4,
                shadow: null,
                borderOpacityWhenMoving: .4,
                borderScaleFactor: 1,
                minScaleLimit: 0,
                selectable: !0,
                evented: !0,
                visible: !0,
                hasControls: !0,
                hasBorders: !0,
                perPixelTargetFind: !1,
                includeDefaultValues: !0,
                lockMovementX: !1,
                lockMovementY: !1,
                lockRotation: !1,
                lockScalingX: !1,
                lockScalingY: !1,
                lockSkewingX: !1,
                lockSkewingY: !1,
                lockScalingFlip: !1,
                excludeFromExport: !1,
                objectCaching: !0,
                noScaleCache: !0,
                strokeUniform: !1,
                dirty: !0,
                paintFirst: "fill",
                activeOn: "down",
                colorProperties: ["fill", "stroke", "backgroundColor"],
                clipPath: void 0,
                inverted: !1,
                absolutePositioned: !1,
                FX_DURATION: 500
            }), l(ie, "type", "FabricObject"), R.setClass(ie), R.setClass(ie, "object");
            let ii = (t, e) => (i, r, s, n) => {
                let o = e(i, r, s, n);
                return o && er(t, el(i, r, s, n)), o
            };

            function ir(t) {
                return (e, i, r, s) => {
                    let {
                        target: n,
                        originX: o,
                        originY: a
                    } = i, h = n.getRelativeCenterPoint(), l = n.translateToOriginPoint(h, o, a), c = t(e, i, r, s);
                    return n.setPositionByOrigin(l, i.originX, i.originY), c
                }
            }
            let is = ii("resizing", ir((t, e, i, r) => {
                let s = eu(e, e.originX, e.originY, i, r);
                if (e.originX === P || e.originX === j && s.x < 0 || e.originX === E && s.x > 0) {
                    let {
                        target: t
                    } = e, i = t.strokeWidth / (t.strokeUniform ? t.scaleX : 1), r = ea(e) ? 2 : 1, n = t.width, o = Math.ceil(Math.abs(s.x * r / t.scaleX) - i);
                    return t.set("width", Math.max(o, 0)), n !== t.width
                }
                return !1
            }));

            function io(t, e, i, r, s) {
                r = r || {};
                let n = this.sizeX || r.cornerSize || s.cornerSize,
                    o = this.sizeY || r.cornerSize || s.cornerSize,
                    a = void 0 !== r.transparentCorners ? r.transparentCorners : s.transparentCorners,
                    h = !a && (r.cornerStrokeColor || s.cornerStrokeColor),
                    l = e,
                    c = i,
                    u;
                t.save(), t.fillStyle = r.cornerColor || s.cornerColor || "", t.strokeStyle = r.cornerStrokeColor || s.cornerStrokeColor || "", n > o ? (u = n, t.scale(1, o / n), c = i * n / o) : o > n ? (u = o, t.scale(n / o, 1), l = e * o / n) : u = n, t.lineWidth = 1, t.beginPath(), t.arc(l, c, u / 2, 0, k, !1), t[a ? "stroke" : "fill"](), h && t.stroke(), t.restore()
            }

            function ia(t, e, i, r, s) {
                r = r || {};
                let n = this.sizeX || r.cornerSize || s.cornerSize,
                    o = this.sizeY || r.cornerSize || s.cornerSize,
                    a = void 0 !== r.transparentCorners ? r.transparentCorners : s.transparentCorners,
                    h = !a && (r.cornerStrokeColor || s.cornerStrokeColor),
                    l = n / 2,
                    c = o / 2;
                t.save(), t.fillStyle = r.cornerColor || s.cornerColor || "", t.strokeStyle = r.cornerStrokeColor || s.cornerStrokeColor || "", t.lineWidth = 1, t.translate(e, i);
                let u = s.getTotalAngle();
                t.rotate(ti(u)), t["".concat(a ? "stroke" : "fill", "Rect")](-l, -c, n, o), h && t.strokeRect(-l, -c, n, o), t.restore()
            }
            class ih {
                shouldActivate(t, e) {
                    var i;
                    return (null == (i = e.canvas) ? void 0 : i.getActiveObject()) === e && e.isControlVisible(t)
                }
                getActionHandler(t, e, i) {
                    return this.actionHandler
                }
                getMouseDownHandler(t, e, i) {
                    return this.mouseDownHandler
                }
                getMouseUpHandler(t, e, i) {
                    return this.mouseUpHandler
                }
                cursorStyleHandler(t, e, i) {
                    return e.cursorStyle
                }
                getActionName(t, e, i) {
                    return e.actionName
                }
                getVisibility(t, e) {
                    var i, r;
                    return null != (i = null == (r = t._controlsVisibility) ? void 0 : r[e]) ? i : this.visible
                }
                setVisibility(t, e, i) {
                    this.visible = t
                }
                positionHandler(t, e, i, r) {
                    return new H(this.x * t.x + this.offsetX, this.y * t.y + this.offsetY).transform(e)
                }
                calcCornerCoords(t, e, i, r, s) {
                    let n, o, a, h, l = s ? this.touchSizeX : this.sizeX,
                        c = s ? this.touchSizeY : this.sizeY;
                    if (l && c && l !== c) {
                        let e = Math.atan2(c, l),
                            i = Math.sqrt(l * l + c * c) / 2,
                            r = e - ti(t),
                            s = O - e - ti(t);
                        n = i * G(r), o = i * z(r), a = i * G(s), h = i * z(s)
                    } else {
                        let i = (l && c ? l : e) * Math.SQRT1_2,
                            r = ti(45 - t);
                        n = a = i * G(r), o = h = i * z(r)
                    }
                    return {
                        tl: new H(i - h, r - a),
                        tr: new H(i + n, r - o),
                        bl: new H(i - n, r + o),
                        br: new H(i + h, r + a)
                    }
                }
                render(t, e, i, r, s) {
                    "circle" === ((r = r || {}).cornerStyle || s.cornerStyle) ? io.call(this, t, e, i, r, s): ia.call(this, t, e, i, r, s)
                }
                constructor(t) {
                    l(this, "visible", !0), l(this, "actionName", "scale"), l(this, "angle", 0), l(this, "x", 0), l(this, "y", 0), l(this, "offsetX", 0), l(this, "offsetY", 0), l(this, "sizeX", null), l(this, "sizeY", null), l(this, "touchSizeX", null), l(this, "touchSizeY", null), l(this, "cursorStyle", "crosshair"), l(this, "withConnection", !1), Object.assign(this, t)
                }
            }
            let il = (t, e, i) => i.lockRotation ? eo : e.cursorStyle,
                ic = ii("rotating", ir((t, e, i, r) => {
                    let {
                        target: s,
                        ex: n,
                        ey: o,
                        theta: a,
                        originX: h,
                        originY: l
                    } = e, c = s.translateToOriginPoint(s.getRelativeCenterPoint(), h, l);
                    if (eh(s, "lockRotation")) return !1;
                    let u = Math.atan2(o - c.y, n - c.x),
                        d = tr(Math.atan2(r - c.y, i - c.x) - u + a);
                    if (s.snapAngle && s.snapAngle > 0) {
                        let t = s.snapAngle,
                            e = s.snapThreshold || t,
                            i = Math.ceil(d / t) * t,
                            r = Math.floor(d / t) * t;
                        Math.abs(d - r) < e ? d = r : Math.abs(d - i) < e && (d = i)
                    }
                    d < 0 && (d = 360 + d), d %= 360;
                    let g = s.angle !== d;
                    return s.angle = d, g
                }));

            function iu(t, e) {
                let i = e.canvas,
                    r = t[i.uniScaleKey];
                return i.uniformScaling && !r || !i.uniformScaling && r
            }

            function id(t, e, i) {
                let r = eh(t, "lockScalingX"),
                    s = eh(t, "lockScalingY");
                return !!r && !!s || !e && (!!r || !!s) && !!i || !!r && "x" === e || !!s && "y" === e || !1
            }
            let ig = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"],
                ip = (t, e, i) => {
                    let r = iu(t, i);
                    if (id(i, 0 !== e.x && 0 === e.y ? "x" : 0 === e.x && 0 !== e.y ? "y" : "", r)) return eo;
                    let s = ec(i, e);
                    return "".concat(ig[s], "-resize")
                };

            function im(t, e, i, r) {
                let s, n, o, a, h, l, c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    u = e.target,
                    d = c.by,
                    g = iu(t, u);
                if (id(u, d, g)) return !1;
                if (e.gestureScale) n = e.scaleX * e.gestureScale, o = e.scaleY * e.gestureScale;
                else {
                    if (s = eu(e, e.originX, e.originY, i, r), h = "y" !== d ? Math.sign(s.x || e.signX || 1) : 1, l = "x" !== d ? Math.sign(s.y || e.signY || 1) : 1, e.signX || (e.signX = h), e.signY || (e.signY = l), eh(u, "lockScalingFlip") && (e.signX !== h || e.signY !== l)) return !1;
                    if (a = u._getTransformedDimensions(), g && !d) {
                        let t = Math.abs(s.x) + Math.abs(s.y),
                            {
                                original: i
                            } = e,
                            r = t / (Math.abs(a.x * i.scaleX / u.scaleX) + Math.abs(a.y * i.scaleY / u.scaleY));
                        n = i.scaleX * r, o = i.scaleY * r
                    } else n = Math.abs(s.x * u.scaleX / a.x), o = Math.abs(s.y * u.scaleY / a.y);
                    ea(e) && (n *= 2, o *= 2), e.signX !== h && "y" !== d && (e.originX = -en(e.originX) + .5, n *= -1, e.signX = h), e.signY !== l && "x" !== d && (e.originY = -en(e.originY) + .5, o *= -1, e.signY = l)
                }
                let f = u.scaleX,
                    p = u.scaleY;
                return d ? ("x" === d && u.set("scaleX", n), "y" === d && u.set("scaleY", o)) : (eh(u, "lockScalingX") || u.set("scaleX", n), eh(u, "lockScalingY") || u.set("scaleY", o)), f !== u.scaleX || p !== u.scaleY
            }
            let i_ = ii("scaling", ir((t, e, i, r) => im(t, e, i, r))),
                iv = ii("scaling", ir((t, e, i, r) => im(t, e, i, r, {
                    by: "x"
                }))),
                iy = ii("scaling", ir((t, e, i, r) => im(t, e, i, r, {
                    by: "y"
                }))),
                ix = ["target", "ex", "ey", "skewingSide"],
                iC = {
                    x: {
                        counterAxis: "y",
                        scale: "scaleX",
                        skew: "skewX",
                        lockSkewing: "lockSkewingX",
                        origin: "originX",
                        flip: "flipX"
                    },
                    y: {
                        counterAxis: "x",
                        scale: "scaleY",
                        skew: "skewY",
                        lockSkewing: "lockSkewingY",
                        origin: "originY",
                        flip: "flipY"
                    }
                },
                ib = ["ns", "nesw", "ew", "nwse"],
                iS = (t, e, i) => {
                    if (0 !== e.x && eh(i, "lockSkewingY") || 0 !== e.y && eh(i, "lockSkewingX")) return eo;
                    let r = ec(i, e) % 4;
                    return "".concat(ib[r], "-resize")
                };

            function iw(t, e, i, r, s) {
                let {
                    target: n
                } = i, {
                    counterAxis: o,
                    origin: a,
                    lockSkewing: l,
                    skew: u,
                    flip: d
                } = iC[t];
                if (eh(n, l)) return !1;
                let {
                    origin: g,
                    flip: f
                } = iC[o], p = -Math.sign(en(i[g]) * (n[f] ? -1 : 1)) * (n[d] ? -1 : 1), m = (0 === n[u] && eu(i, P, P, r, s)[t] > 0 || n[u] > 0 ? 1 : -1) * p;
                return ii("skewing", ir((e, i, r, s) => (function(t, e, i) {
                    let {
                        target: r,
                        ex: s,
                        ey: n,
                        skewingSide: o
                    } = e, a = c(e, ix), {
                        skew: h
                    } = iC[t], l = i.subtract(new H(s, n)).divide(new H(r.scaleX, r.scaleY))[t], u = r[h], d = Math.tan(ti(a[h])), g = tr(Math.atan(2 * l * o / Math.max("y" === t ? r._getTransformedDimensions({
                        scaleX: 1,
                        scaleY: 1,
                        skewX: 0
                    }).x : r._getTransformedDimensions({
                        scaleX: 1,
                        scaleY: 1
                    }).y, 1) + d));
                    r.set(h, g);
                    let f = u !== r[h];
                    if (f && "y" === t) {
                        let {
                            skewX: t,
                            scaleX: e
                        } = r, i = r._getTransformedDimensions({
                            skewY: u
                        }), s = r._getTransformedDimensions(), n = 0 !== t ? i.x / s.x : 1;
                        1 !== n && r.set("scaleX", n * e)
                    }
                    return f
                })(t, i, new H(r, s))))(e, h(h({}, i), {}, {
                    [a]: -(.5 * m) + .5,
                    skewingSide: p
                }), r, s)
            }
            let iT = (t, e, i, r) => iw("x", t, e, i, r),
                iO = (t, e, i, r) => iw("y", t, e, i, r);

            function ik(t, e) {
                return t[e.canvas.altActionKey]
            }
            let iD = (t, e, i) => {
                    let r = ik(t, i);
                    return 0 === e.x ? r ? "skewX" : "scaleY" : 0 === e.y ? r ? "skewY" : "scaleX" : ""
                },
                iM = (t, e, i) => ik(t, i) ? iS(t, e, i) : ip(t, e, i),
                iP = (t, e, i, r) => ik(t, e.target) ? iO(t, e, i, r) : iv(t, e, i, r),
                iE = (t, e, i, r) => ik(t, e.target) ? iT(t, e, i, r) : iy(t, e, i, r),
                iA = () => ({
                    ml: new ih({
                        x: -.5,
                        y: 0,
                        cursorStyleHandler: iM,
                        actionHandler: iP,
                        getActionName: iD
                    }),
                    mr: new ih({
                        x: .5,
                        y: 0,
                        cursorStyleHandler: iM,
                        actionHandler: iP,
                        getActionName: iD
                    }),
                    mb: new ih({
                        x: 0,
                        y: .5,
                        cursorStyleHandler: iM,
                        actionHandler: iE,
                        getActionName: iD
                    }),
                    mt: new ih({
                        x: 0,
                        y: -.5,
                        cursorStyleHandler: iM,
                        actionHandler: iE,
                        getActionName: iD
                    }),
                    tl: new ih({
                        x: -.5,
                        y: -.5,
                        cursorStyleHandler: ip,
                        actionHandler: i_
                    }),
                    tr: new ih({
                        x: .5,
                        y: -.5,
                        cursorStyleHandler: ip,
                        actionHandler: i_
                    }),
                    bl: new ih({
                        x: -.5,
                        y: .5,
                        cursorStyleHandler: ip,
                        actionHandler: i_
                    }),
                    br: new ih({
                        x: .5,
                        y: .5,
                        cursorStyleHandler: ip,
                        actionHandler: i_
                    }),
                    mtr: new ih({
                        x: 0,
                        y: -.5,
                        actionHandler: ic,
                        cursorStyleHandler: il,
                        offsetY: -40,
                        withConnection: !0,
                        actionName: "rotate"
                    })
                }),
                ij = () => ({
                    mr: new ih({
                        x: .5,
                        y: 0,
                        actionHandler: is,
                        cursorStyleHandler: iM,
                        actionName: "resizing"
                    }),
                    ml: new ih({
                        x: -.5,
                        y: 0,
                        actionHandler: is,
                        cursorStyleHandler: iM,
                        actionName: "resizing"
                    })
                }),
                iF = () => h(h({}, iA()), ij());
            class iL extends ie {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), {}, {
                        controls: iA()
                    }, iL.ownDefaults)
                }
                _updateCacheCanvas() {
                    let t = this.canvas;
                    if (this.noScaleCache && t && t._currentTransform) {
                        let e = t._currentTransform.target,
                            i = t._currentTransform.action;
                        if (this === e && i.startsWith("scale")) return !1
                    }
                    return super._updateCacheCanvas()
                }
                getActiveControl() {
                    return this.__corner
                }
                _findTargetCorner(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.hasControls || !this.canvas) return "";
                    this.__corner = void 0;
                    let i = Object.entries(this.oCoords);
                    for (let r = i.length - 1; r >= 0; r--) {
                        let [s, n] = i[r];
                        if (this.controls[s].shouldActivate(s, this)) {
                            let i = this._getImageLines(e ? n.touchCorner : n.corner),
                                r = this._findCrossPoints(t, i);
                            if (0 !== r && r % 2 == 1) return this.__corner = s, s
                        }
                    }
                    return ""
                }
                calcOCoords() {
                    let t = this.getViewportTransform(),
                        e = this.getCenterPoint(),
                        i = ta(tc(e.x, e.y), tu({
                            angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
                        })),
                        r = ta(t, i),
                        s = ta(r, [1 / t[0], 0, 0, 1 / t[3], 0, 0]),
                        n = this.group ? tl(this.calcTransformMatrix()) : void 0,
                        o = this._calculateCurrentDimensions(n),
                        a = {};
                    return this.forEachControl((t, e) => {
                        let i = t.positionHandler(o, s, this, t);
                        a[e] = Object.assign(i, this._calcCornerCoords(t, i))
                    }), a
                }
                _calcCornerCoords(t, e) {
                    return {
                        corner: t.calcCornerCoords(this.angle, this.cornerSize, e.x, e.y, !1),
                        touchCorner: t.calcCornerCoords(this.angle, this.touchCornerSize, e.x, e.y, !0)
                    }
                }
                setCoords() {
                    super.setCoords(), this.oCoords = this.calcOCoords()
                }
                forEachControl(t) {
                    for (let e in this.controls) t(this.controls[e], e, this)
                }
                drawSelectionBackground(t) {
                    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
                    t.save();
                    let e = this.getRelativeCenterPoint(),
                        i = this._calculateCurrentDimensions(),
                        r = this.getViewportTransform();
                    t.translate(e.x, e.y), t.scale(1 / r[0], 1 / r[3]), t.rotate(ti(this.angle)), t.fillStyle = this.selectionBackgroundColor, t.fillRect(-i.x / 2, -i.y / 2, i.x, i.y), t.restore()
                }
                strokeBorders(t, e) {
                    t.strokeRect(-e.x / 2, -e.y / 2, e.x, e.y)
                }
                _drawBorders(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = h({
                            hasControls: this.hasControls,
                            borderColor: this.borderColor,
                            borderDashArray: this.borderDashArray
                        }, i);
                    t.save(), t.strokeStyle = r.borderColor, this._setLineDash(t, r.borderDashArray), this.strokeBorders(t, e), r.hasControls && this.drawControlsConnectingLines(t, e), t.restore()
                }
                _renderControls(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            hasBorders: i,
                            hasControls: r
                        } = this,
                        s = h({
                            hasBorders: i,
                            hasControls: r
                        }, e),
                        n = this.getViewportTransform(),
                        o = s.hasBorders,
                        a = s.hasControls,
                        l = tl(ta(n, this.calcTransformMatrix()));
                    t.save(), t.translate(l.translateX, l.translateY), t.lineWidth = +this.borderScaleFactor, this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (l.angle -= 180), t.rotate(ti(this.group ? l.angle : this.angle)), o && this.drawBorders(t, l, e), a && this.drawControls(t, e), t.restore()
                }
                drawBorders(t, e, i) {
                    let r;
                    if (i && i.forActiveSelection || this.group) {
                        let t = t7(this.width, this.height, e),
                            i = (this.strokeUniform ? new H().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new H(e.scaleX, e.scaleY)).scalarMultiply(this.strokeWidth);
                        r = t.add(i).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding)
                    } else r = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
                    this._drawBorders(t, r, i)
                }
                drawControlsConnectingLines(t, e) {
                    let i = !1;
                    t.beginPath(), this.forEachControl((r, s) => {
                        r.withConnection && r.getVisibility(this, s) && (i = !0, t.moveTo(r.x * e.x, r.y * e.y), t.lineTo(r.x * e.x + r.offsetX, r.y * e.y + r.offsetY))
                    }), i && t.stroke()
                }
                drawControls(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t.save();
                    let i = this.getCanvasRetinaScaling(),
                        {
                            cornerStrokeColor: r,
                            cornerDashArray: s,
                            cornerColor: n
                        } = this,
                        o = h({
                            cornerStrokeColor: r,
                            cornerDashArray: s,
                            cornerColor: n
                        }, e);
                    t.setTransform(i, 0, 0, i, 0, 0), t.strokeStyle = t.fillStyle = o.cornerColor, this.transparentCorners || (t.strokeStyle = o.cornerStrokeColor), this._setLineDash(t, o.cornerDashArray), this.setCoords(), this.forEachControl((e, i) => {
                        if (e.getVisibility(this, i)) {
                            let r = this.oCoords[i];
                            e.render(t, r.x, r.y, o, this)
                        }
                    }), t.restore()
                }
                isControlVisible(t) {
                    return this.controls[t] && this.controls[t].getVisibility(this, t)
                }
                setControlVisible(t, e) {
                    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t] = e
                }
                setControlsVisibility() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.entries(t).forEach(t => {
                        let [e, i] = t;
                        return this.setControlVisible(e, i)
                    })
                }
                clearContextTop(t) {
                    if (!this.canvas) return;
                    let e = this.canvas.contextTop;
                    if (!e) return;
                    let i = this.canvas.viewportTransform;
                    e.save(), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this.transform(e);
                    let r = this.width + 4,
                        s = this.height + 4;
                    return e.clearRect(-r / 2, -s / 2, r, s), t || e.restore(), e
                }
                onDeselect(t) {
                    return !1
                }
                onSelect(t) {
                    return !1
                }
                canDrop(t) {
                    return !1
                }
                renderDragSourceEffect(t) {}
                renderDropTargetEffect(t) {}
            }

            function iB(t, e) {
                return e.forEach(e => {
                    Object.getOwnPropertyNames(e.prototype).forEach(i => {
                        "constructor" !== i && Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i) || Object.create(null))
                    })
                }), t
            }
            l(iL, "ownDefaults", {});
            class iR extends iL {}
            iB(iR, [eg]), R.setClass(iR), R.setClass(iR, "object");
            let iI = (t, e, i, r) => {
                    let s = 2 * (r = Math.round(r)) + 1,
                        {
                            data: n
                        } = t.getImageData(e - r, i - r, s, s);
                    for (let t = 3; t < n.length; t += 4)
                        if (n[t] > 0) return !1;
                    return !0
                },
                iX = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];

            function iY(t) {
                return RegExp("^(" + t.join("|") + ")\\b", "i")
            }
            let iW = String.raw(ey || (ey = u(["(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)"], ["(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)"]))),
                iV = "http://www.w3.org/2000/svg";
            String.raw(ex || (ex = u(["(?:s+,?s*|,s*|$)"], ["(?:\\s+,?\\s*|,\\s*|$)"])));
            let iG = RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + iW + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + iW + "))?\\s+(.*)"),
                iz = {
                    cx: E,
                    x: E,
                    r: "radius",
                    cy: "top",
                    y: "top",
                    display: "visible",
                    visibility: "visible",
                    transform: "transformMatrix",
                    "fill-opacity": "fillOpacity",
                    "fill-rule": "fillRule",
                    "font-family": "fontFamily",
                    "font-size": "fontSize",
                    "font-style": "fontStyle",
                    "font-weight": "fontWeight",
                    "letter-spacing": "charSpacing",
                    "paint-order": "paintFirst",
                    "stroke-dasharray": "strokeDashArray",
                    "stroke-dashoffset": "strokeDashOffset",
                    "stroke-linecap": "strokeLineCap",
                    "stroke-linejoin": "strokeLineJoin",
                    "stroke-miterlimit": "strokeMiterLimit",
                    "stroke-opacity": "strokeOpacity",
                    "stroke-width": "strokeWidth",
                    "text-decoration": "textDecoration",
                    "text-anchor": "textAnchor",
                    opacity: "opacity",
                    "clip-path": "clipPath",
                    "clip-rule": "clipRule",
                    "vector-effect": "strokeUniform",
                    "image-rendering": "imageSmoothing"
                },
                iH = "font-size",
                iU = "clip-path",
                iN = iY(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]),
                iq = iY(["symbol", "image", "marker", "pattern", "view", "svg"]),
                iK = iY(["symbol", "g", "a", "svg", "clipPath", "defs"]),
                iJ = RegExp("^\\s*(" + iW + "+)\\s*,?\\s*(" + iW + "+)\\s*,?\\s*(" + iW + "+)\\s*,?\\s*(" + iW + "+)\\s*$");

            function iZ(t, e) {
                let i, r = t.nodeName,
                    s = t.getAttribute("class"),
                    n = t.getAttribute("id");
                if (i = RegExp("^" + r, "i"), e = e.replace(i, ""), n && e.length && (i = RegExp("#" + n + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")), s && e.length) {
                    let t = s.split(" ");
                    for (let r = t.length; r--;) i = RegExp("\\." + t[r] + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")
                }
                return 0 === e.length
            }
            let iQ = t => {
                    var e;
                    return null != (e = iz[t]) ? e : t
                },
                i$ = t => t.replace(RegExp("(".concat(iW, ")"), "gi"), " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " "),
                i0 = "(".concat(iW, ")"),
                i1 = String.raw(eC || (eC = u(["(skewX)(", ")"], ["(skewX)\\(", "\\)"])), i0),
                i2 = String.raw(eb || (eb = u(["(skewY)(", ")"], ["(skewY)\\(", "\\)"])), i0),
                i5 = String.raw(eS || (eS = u(["(rotate)(", "(?: ", " ", ")?)"], ["(rotate)\\(", "(?: ", " ", ")?\\)"])), i0, i0, i0),
                i3 = String.raw(ew || (ew = u(["(scale)(", "(?: ", ")?)"], ["(scale)\\(", "(?: ", ")?\\)"])), i0, i0),
                i4 = String.raw(eT || (eT = u(["(translate)(", "(?: ", ")?)"], ["(translate)\\(", "(?: ", ")?\\)"])), i0, i0),
                i8 = String.raw(eO || (eO = u(["(matrix)(", " ", " ", " ", " ", " ", ")"], ["(matrix)\\(", " ", " ", " ", " ", " ", "\\)"])), i0, i0, i0, i0, i0, i0),
                i6 = "(?:".concat(i8, "|").concat(i4, "|").concat(i5, "|").concat(i3, "|").concat(i1, "|").concat(i2, ")"),
                i9 = new RegExp(String.raw(ek || (ek = u(["^s*(?:", "?)s*$"], ["^\\s*(?:", "?)\\s*$"])), "(?:".concat(i6, "*)"))),
                i7 = RegExp(i6, "g");

            function rt(t) {
                t = i$(t).replace(/\s*([()])\s*/gi, "$1");
                let e = [];
                if (!t || t && !i9.test(t)) return [...M];
                for (let i of t.matchAll(i7)) {
                    let t = new RegExp(i6).exec(i[0]);
                    if (!t) continue;
                    let r = M,
                        [, s, ...n] = t.filter(t => !!t),
                        [o, a, h, l, c, u] = n.map(t => parseFloat(t));
                    switch (s) {
                        case "translate":
                            r = tc(o, a);
                            break;
                        case "rotate":
                            r = tu({
                                angle: o
                            }, {
                                x: a,
                                y: h
                            });
                            break;
                        case "scale":
                            r = td(o, a);
                            break;
                        case "skewX":
                            r = tf(o);
                            break;
                        case "skewY":
                            r = tp(o);
                            break;
                        case "matrix":
                            r = [o, a, h, l, c, u]
                    }
                    e.push(r)
                }
                return th(e)
            }

            function re(t, e) {
                let i = t.match(iG);
                if (!i) return;
                let r = i[1],
                    s = i[3],
                    n = i[4],
                    o = i[5],
                    a = i[6];
                r && (e.fontStyle = r), s && (e.fontWeight = isNaN(parseFloat(s)) ? s : parseFloat(s)), n && (e.fontSize = tE(n)), a && (e.fontFamily = a), o && (e.lineHeight = "normal" === o ? 1 : o)
            }

            function ri(t) {
                let e = {},
                    i = t.getAttribute("style");
                return i ? ("string" == typeof i ? i.replace(/;\s*$/, "").split(";").forEach(t => {
                    let [i, r] = t.split(":");
                    e[i.trim().toLowerCase()] = r.trim()
                }) : Object.entries(i).forEach(t => {
                    let [i, r] = t;
                    void 0 !== r && (e[i.toLowerCase()] = r)
                }), e) : e
            }
            let rr = {
                stroke: "strokeOpacity",
                fill: "fillOpacity"
            };

            function rs(t, e, i) {
                let r;
                if (!t) return {};
                let s = {},
                    n, o = 16;
                t.parentNode && iK.test(t.parentNode.nodeName) && (s = rs(t.parentElement, e, i)).fontSize && (n = o = tE(s.fontSize));
                let a = h(h(h({}, e.reduce((e, i) => {
                    let r = t.getAttribute(i);
                    return r && (e[i] = r), e
                }, {})), function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = {};
                    for (let r in e)(function(t, e) {
                        let i = !0,
                            r = iZ(t, e.pop());
                        return r && e.length && (i = function(t, e) {
                            let i, r = !0;
                            for (; t.parentElement && 1 === t.parentElement.nodeType && e.length;) r && (i = e.pop()), r = iZ(t = t.parentElement, i);
                            return 0 === e.length
                        }(t, e)), r && i && 0 === e.length
                    })(t, r.split(" ")) && (i = h(h({}, i), e[r]));
                    return i
                }(t, i)), ri(t));
                a[iU] && t.setAttribute(iU, a[iU]), a[iH] && (n = tE(a[iH], o), a[iH] = "".concat(n));
                let l = {};
                for (let t in a) {
                    let e = iQ(t),
                        i = function(t, e, i, r) {
                            let s, n = Array.isArray(e),
                                o = e;
                            if (("fill" === t || "stroke" === t) && e === F) o = "";
                            else if ("strokeUniform" === t) return "non-scaling-stroke" === e;
                            else if ("strokeDashArray" === t) o = e === F ? null : e.replace(/,/g, " ").split(/\s+/).map(parseFloat);
                            else if ("transformMatrix" === t) o = i && i.transformMatrix ? ta(i.transformMatrix, rt(e)) : rt(e);
                            else if ("visible" === t) o = e !== F && "hidden" !== e, i && !1 === i.visible && (o = !1);
                            else if ("opacity" === t) o = parseFloat(e), i && void 0 !== i.opacity && (o *= i.opacity);
                            else if ("textAnchor" === t) o = "start" === e ? E : "end" === e ? j : P;
                            else if ("charSpacing" === t) s = tE(e, r) / r * 1e3;
                            else if ("paintFirst" === t) {
                                let t = e.indexOf("fill"),
                                    i = e.indexOf("stroke");
                                o = "fill", t > -1 && i > -1 && i < t ? o = "stroke" : -1 === t && i > -1 && (o = "stroke")
                            } else {
                                if ("href" === t || "xlink:href" === t || "font" === t) return e;
                                if ("imageSmoothing" === t) return "optimizeQuality" === e;
                                s = n ? e.map(tE) : tE(e, r)
                            }
                            return !n && isNaN(s) ? o : s
                        }(e, a[t], s, n);
                    l[e] = i
                }
                l && l.font && re(l.font, l);
                let c = h(h({}, s), l);
                return iK.test(t.nodeName) || (r = iR.getDefaults(), Object.entries(rr).forEach(t => {
                    let [e, i] = t;
                    if (void 0 === c[i] || "" === c[e]) return;
                    if (void 0 === c[e]) {
                        if (!r[e]) return;
                        c[e] = r[e]
                    }
                    if (0 === c[e].indexOf("url(")) return;
                    let s = new tM(c[e]);
                    c[e] = s.setAlpha(tP(s.getAlpha() * c[i], 2)).toRgba()
                })), c
            }
            let rn = ["left", "top", "width", "height", "visible"],
                ro = ["rx", "ry"];
            class ra extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), ra.ownDefaults)
                }
                _initRxRy() {
                    let {
                        rx: t,
                        ry: e
                    } = this;
                    t && !e ? this.ry = t : e && !t && (this.rx = e)
                }
                _render(t) {
                    let {
                        width: e,
                        height: i
                    } = this, r = -e / 2, s = -i / 2, n = this.rx ? Math.min(this.rx, e / 2) : 0, o = this.ry ? Math.min(this.ry, i / 2) : 0, a = 0 !== n || 0 !== o;
                    t.beginPath(), t.moveTo(r + n, s), t.lineTo(r + e - n, s), a && t.bezierCurveTo(r + e - .4477152502 * n, s, r + e, s + .4477152502 * o, r + e, s + o), t.lineTo(r + e, s + i - o), a && t.bezierCurveTo(r + e, s + i - .4477152502 * o, r + e - .4477152502 * n, s + i, r + e - n, s + i), t.lineTo(r + n, s + i), a && t.bezierCurveTo(r + .4477152502 * n, s + i, r, s + i - .4477152502 * o, r, s + i - o), t.lineTo(r, s + o), a && t.bezierCurveTo(r, s + .4477152502 * o, r + .4477152502 * n, s, r + n, s), t.closePath(), this._renderPaintInOrder(t)
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return super.toObject([...ro, ...t])
                }
                _toSVG() {
                    let {
                        width: t,
                        height: e,
                        rx: i,
                        ry: r
                    } = this;
                    return ["<rect ", "COMMON_PARTS", 'x="'.concat(-t / 2, '" y="').concat(-e / 2, '" rx="').concat(i, '" ry="').concat(r, '" width="').concat(t, '" height="').concat(e, '" />\n')]
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, this.ATTRIBUTE_NAMES, i),
                        {
                            left: s = 0,
                            top: n = 0,
                            width: o = 0,
                            height: a = 0,
                            visible: l = !0
                        } = r,
                        u = c(r, rn);
                    return new this(h(h(h({}, e), u), {}, {
                        left: s,
                        top: n,
                        width: o,
                        height: a,
                        visible: !!(l && o && a)
                    }))
                }
                constructor(t) {
                    super(t), this._initRxRy()
                }
            }
            l(ra, "type", "Rect"), l(ra, "cacheProperties", [...e7, ...ro]), l(ra, "ownDefaults", {
                rx: 0,
                ry: 0
            }), l(ra, "ATTRIBUTE_NAMES", [...iX, "x", "y", "rx", "ry", "width", "height"]), R.setClass(ra), R.setSVGClass(ra);
            let rh = ["objects"];
            class rl extends N(iR) {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), rl.ownDefaults)
                }
                canEnterGroup(t) {
                    return t === this || this.isDescendantOf(t) ? (console.error("fabric.Group: circular object trees are not supported, this call has no effect"), !1) : -1 === this._objects.indexOf(t) || (console.error("fabric.Group: duplicate objects are not supported inside group, this call has no effect"), !1)
                }
                _filterObjectsBeforeEnteringGroup(t) {
                    return t.filter((t, e, i) => this.canEnterGroup(t) && i.indexOf(t) === e)
                }
                add() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    let r = this._filterObjectsBeforeEnteringGroup(e),
                        s = super.add(...r);
                    return this._onAfterObjectsChange("added", r), s
                }
                insertAt(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    let s = this._filterObjectsBeforeEnteringGroup(i),
                        n = super.insertAt(t, ...s);
                    return this._onAfterObjectsChange("added", s), n
                }
                remove() {
                    let t = super.remove(...arguments);
                    return this._onAfterObjectsChange("removed", t), t
                }
                _onObjectAdded(t) {
                    this.enterGroup(t, !0), this.fire("object:added", {
                        target: t
                    }), t.fire("added", {
                        target: this
                    })
                }
                _onRelativeObjectAdded(t) {
                    this.enterGroup(t, !1), this.fire("object:added", {
                        target: t
                    }), t.fire("added", {
                        target: this
                    })
                }
                _onObjectRemoved(t, e) {
                    this.exitGroup(t, e), this.fire("object:removed", {
                        target: t
                    }), t.fire("removed", {
                        target: this
                    })
                }
                _onAfterObjectsChange(t, e) {
                    this._applyLayoutStrategy({
                        type: t,
                        targets: e
                    }), this._set("dirty", !0)
                }
                _onStackOrderChanged() {
                    this._set("dirty", !0)
                }
                _set(t, e) {
                    let i = this[t];
                    return super._set(t, e), "canvas" === t && i !== e && this.forEachObject(i => {
                        i._set(t, e)
                    }), "layout" === t && i !== e && this._applyLayoutStrategy({
                        type: "layout_change",
                        layout: e,
                        prevLayout: i
                    }), "interactive" === t && this.forEachObject(t => this._watchObject(e, t)), this
                }
                _shouldSetNestedCoords() {
                    return this.subTargetCheck
                }
                removeAll() {
                    return this._activeObjects = [], this.remove(...this._objects)
                }
                __objectMonitor(t) {
                    this._applyLayoutStrategy(h(h({}, t), {}, {
                        type: "object_modified"
                    })), this._set("dirty", !0)
                }
                __objectSelectionMonitor(t, e) {
                    let {
                        target: i
                    } = e;
                    if (t) this._activeObjects.push(i), this._set("dirty", !0);
                    else if (this._activeObjects.length > 0) {
                        let t = this._activeObjects.indexOf(i);
                        t > -1 && (this._activeObjects.splice(t, 1), this._set("dirty", !0))
                    }
                }
                _watchObject(t, e) {
                    let i = t ? "on" : "off";
                    t && this._watchObject(!1, e), e[i]("changed", this.__objectMonitor), e[i]("modified", this.__objectMonitor), e[i]("selected", this.__objectSelectionTracker), e[i]("deselected", this.__objectSelectionDisposer)
                }
                enterGroup(t, e) {
                    return t.group && t.group.remove(t), this._enterGroup(t, e), !0
                }
                _enterGroup(t, e) {
                    e && t8(t, ta(to(this.calcTransformMatrix()), t.calcTransformMatrix())), this._shouldSetNestedCoords() && t.setCoords(), t._set("group", this), t._set("canvas", this.canvas), this.interactive && this._watchObject(!0, t);
                    let i = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
                    i && (i === t || t.isDescendantOf(i)) && this._activeObjects.push(t)
                }
                exitGroup(t, e) {
                    this._exitGroup(t, e), t._set("canvas", void 0)
                }
                _exitGroup(t, e) {
                    t._set("group", void 0), e || (t8(t, ta(this.calcTransformMatrix(), t.calcTransformMatrix())), t.setCoords()), this._watchObject(!1, t);
                    let i = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t) : -1;
                    i > -1 && this._activeObjects.splice(i, 1)
                }
                shouldCache() {
                    let t = iR.prototype.shouldCache.call(this);
                    if (t) {
                        for (let t = 0; t < this._objects.length; t++)
                            if (this._objects[t].willDrawShadow()) return this.ownCaching = !1, !1
                    }
                    return t
                }
                willDrawShadow() {
                    if (iR.prototype.willDrawShadow.call(this)) return !0;
                    for (let t = 0; t < this._objects.length; t++)
                        if (this._objects[t].willDrawShadow()) return !0;
                    return !1
                }
                isOnACache() {
                    return this.ownCaching || !!this.group && this.group.isOnACache()
                }
                drawObject(t) {
                    this._renderBackground(t);
                    for (let i = 0; i < this._objects.length; i++) {
                        var e;
                        null != (e = this.canvas) && e.preserveObjectStacking && this._objects[i].group !== this ? (t.save(), t.transform(...to(this.calcTransformMatrix())), this._objects[i].render(t), t.restore()) : this._objects[i].group === this && this._objects[i].render(t)
                    }
                    this._drawClipPath(t, this.clipPath)
                }
                setCoords() {
                    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject(t => t.setCoords())
                }
                render(t) {
                    this._transformDone = !0, super.render(t), this._transformDone = !1
                }
                triggerLayout(t) {
                    t && t.layout && (t.prevLayout = this.layout, this.layout = t.layout), this._applyLayoutStrategy({
                        type: "imperative",
                        context: t
                    })
                }
                _adjustObjectPosition(t, e) {
                    t.set({
                        left: t.left + e.x,
                        top: t.top + e.y
                    })
                }
                _applyLayoutStrategy(t) {
                    let e, i = "initialization" === t.type;
                    if (!i && !this._firstLayoutDone) return;
                    let r = i && t.options,
                        s = r && {
                            angle: r.angle || 0,
                            skewX: r.skewX || 0,
                            skewY: r.skewY || 0
                        },
                        n = this.getRelativeCenterPoint(),
                        o = this.getLayoutStrategyResult(this.layout, [...this._objects], t);
                    if (o) {
                        let r = new H(o.centerX, o.centerY);
                        e = n.subtract(r).add(new H(o.correctionX || 0, o.correctionY || 0)).transform(to(this.calcOwnMatrix()), !0), this.set({
                            width: o.width,
                            height: o.height
                        }), t.objectsRelativeToGroup || this.forEachObject(t => {
                            t.group === this && this._adjustObjectPosition(t, e)
                        }), i || "clip-path" === this.layout || !this.clipPath || this.clipPath.absolutePositioned || this._adjustObjectPosition(this.clipPath, e), (!r.eq(n) || s) && (this.setPositionByOrigin(r, P, P), s && this.set(s), this.setCoords())
                    } else {
                        if (!i) return;
                        o = {
                            centerX: n.x,
                            centerY: n.y,
                            width: this.width,
                            height: this.height
                        }, s && this.set(s), e = new H
                    }
                    this._firstLayoutDone = !0, this.onLayout(t, o), this.fire("layout", {
                        context: t,
                        result: o,
                        diff: e
                    }), this.group && this.group._applyLayoutStrategy && (t.path || (t.path = []), t.path.push(this), this.group._applyLayoutStrategy(t))
                }
                getLayoutStrategyResult(t, e, i) {
                    if ("fit-content-lazy" === t && "added" === i.type && e.length > i.targets.length) {
                        let e = i.targets.concat(this);
                        return this.prepareBoundingBox(t, e, i)
                    }
                    if ("fit-content" === t || "fit-content-lazy" === t || "fixed" === t && ("initialization" === i.type || "imperative" === i.type)) return this.prepareBoundingBox(t, e, i);
                    if ("clip-path" === t && this.clipPath) {
                        let r = this.clipPath,
                            s = r._getTransformedDimensions();
                        if (r.absolutePositioned && ("initialization" === i.type || "layout_change" === i.type)) {
                            let t = r.getCenterPoint();
                            return this.group && (t = tn(t, to(this.group.calcTransformMatrix()))), {
                                centerX: t.x,
                                centerY: t.y,
                                width: s.x,
                                height: s.y
                            }
                        }
                        if (!r.absolutePositioned) {
                            let n, o = tn(r.getRelativeCenterPoint(), this.calcOwnMatrix(), !0);
                            if ("initialization" !== i.type && "layout_change" !== i.type) return {
                                centerX: (n = this.getRelativeCenterPoint()).x + o.x,
                                centerY: n.y + o.y,
                                width: s.x,
                                height: s.y
                            };
                            {
                                let s = this.prepareBoundingBox(t, e, i) || {};
                                return {
                                    centerX: (n = new H(s.centerX || 0, s.centerY || 0)).x + o.x,
                                    centerY: n.y + o.y,
                                    correctionX: s.correctionX - o.x,
                                    correctionY: s.correctionY - o.y,
                                    width: r.width,
                                    height: r.height
                                }
                            }
                        }
                    }
                }
                prepareBoundingBox(t, e, i) {
                    return "initialization" === i.type ? this.prepareInitialBoundingBox(t, e, i) : "imperative" === i.type && i.context ? h(h({}, this.getObjectsBoundingBox(e) || {}), i.context) : this.getObjectsBoundingBox(e)
                }
                prepareInitialBoundingBox(t, e, i) {
                    let r = i.options || {},
                        s = "number" == typeof r.left,
                        n = "number" == typeof r.top,
                        o = "number" == typeof r.width,
                        a = "number" == typeof r.height;
                    if (s && n && o && a && i.objectsRelativeToGroup || 0 === e.length) return;
                    let h = this.getObjectsBoundingBox(e) || {},
                        {
                            centerX: l = 0,
                            centerY: c = 0,
                            width: u = 0,
                            height: d = 0
                        } = h,
                        g = o ? this.width : u,
                        f = a ? this.height : d,
                        p = new H(l, c),
                        m = new H(en(this.originX), en(this.originY)),
                        _ = new H(g, f),
                        v = this._getTransformedDimensions({
                            width: 0,
                            height: 0
                        }),
                        y = this._getTransformedDimensions({
                            width: g,
                            height: f,
                            strokeWidth: 0
                        }),
                        x = this._getTransformedDimensions({
                            width: h.width,
                            height: h.height,
                            strokeWidth: 0
                        }),
                        C = new H(0, 0),
                        b = m.scalarAdd(.5),
                        S = y.multiply(b),
                        w = new H(o ? x.x / 2 : S.x, a ? x.y / 2 : S.y),
                        T = new H(s ? this.left - (y.x + v.x) * m.x : p.x - w.x, n ? this.top - (y.y + v.y) * m.y : p.y - w.y),
                        O = new H(s ? T.x - p.x + x.x * (.5 * !!o) : -(o ? (y.x - v.x) * .5 : y.x * b.x), n ? T.y - p.y + x.y * (.5 * !!a) : -(a ? (y.y - v.y) * .5 : y.y * b.y)).add(C),
                        k = new H(o ? -y.x / 2 : 0, a ? -y.y / 2 : 0).add(O);
                    return {
                        centerX: T.x,
                        centerY: T.y,
                        correctionX: k.x,
                        correctionY: k.y,
                        width: _.x,
                        height: _.y
                    }
                }
                getObjectsBoundingBox(t, e) {
                    if (0 === t.length) return null;
                    let i = [];
                    t.forEach(t => {
                        let e = t.getRelativeCenterPoint(),
                            r = t._getTransformedDimensions().scalarDivide(2);
                        if (t.angle) {
                            let e = ti(t.angle),
                                i = Math.abs(z(e)),
                                s = Math.abs(G(e));
                            r = new H(r.x * s + r.y * i, r.x * i + r.y * s)
                        }
                        i.push(e.subtract(r), e.add(r))
                    });
                    let {
                        left: r,
                        top: s,
                        width: n,
                        height: o
                    } = t5(i), a = new H(n, o), h = (!e ? new H(r, s) : new H).add(a.scalarDivide(2)).transform(this.calcOwnMatrix());
                    return {
                        centerX: h.x,
                        centerY: h.y,
                        width: a.x,
                        height: a.y
                    }
                }
                onLayout(t, e) {}
                __serializeObjects(t, e) {
                    let i = this.includeDefaultValues;
                    return this._objects.filter(function(t) {
                        return !t.excludeFromExport
                    }).map(function(r) {
                        let s = r.includeDefaultValues;
                        r.includeDefaultValues = i;
                        let n = r[t || "toObject"](e);
                        return r.includeDefaultValues = s, n
                    })
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return h(h({}, super.toObject(["layout", "subTargetCheck", "interactive", ...t])), {}, {
                        objects: this.__serializeObjects("toObject", t)
                    })
                }
                toString() {
                    return "#<Group: (".concat(this.complexity(), ")>")
                }
                dispose() {
                    this._activeObjects = [], this.forEachObject(t => {
                        this._watchObject(!1, t), t.dispose()
                    }), super.dispose()
                }
                _createSVGBgRect(t) {
                    if (!this.backgroundColor) return "";
                    let e = ra.prototype._toSVG.call(this),
                        i = e.indexOf("COMMON_PARTS");
                    e[i] = 'for="group" ';
                    let r = e.join("");
                    return t ? t(r) : r
                }
                _toSVG(t) {
                    let e = ["<g ", "COMMON_PARTS", " >\n"],
                        i = this._createSVGBgRect(t);
                    i && e.push("		", i);
                    for (let i = 0; i < this._objects.length; i++) e.push("		", this._objects[i].toSVG(t));
                    return e.push("</g>\n"), e
                }
                getSvgStyles() {
                    let t = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: ".concat(this.opacity, ";") : "",
                        e = this.visible ? "" : " visibility: hidden;";
                    return [t, this.getSvgFilter(), e].join("")
                }
                toClipPathSVG(t) {
                    let e = [],
                        i = this._createSVGBgRect(t);
                    i && e.push("	", i);
                    for (let i = 0; i < this._objects.length; i++) e.push("	", this._objects[i].toClipPathSVG(t));
                    return this._createBaseClipPathSVGMarkup(e, {
                        reviver: t
                    })
                }
                static fromObject(t) {
                    let {
                        objects: e = []
                    } = t, i = c(t, rh);
                    return Promise.all([ty(e), tx(i)]).then(t => {
                        let [e, r] = t;
                        return new this(e, h(h({}, i), r), !0)
                    })
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    super(), l(this, "_activeObjects", []), l(this, "__objectSelectionTracker", void 0), l(this, "__objectSelectionDisposer", void 0), l(this, "_firstLayoutDone", !1), this._objects = t.slice(), this.__objectMonitor = this.__objectMonitor.bind(this), this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, !0), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, !1), this.set(h(h({}, e), {}, {
                        angle: 0,
                        skewX: 0,
                        skewY: 0
                    })), this.forEachObject(t => {
                        this.enterGroup(t, !1)
                    }), this._applyLayoutStrategy({
                        type: "initialization",
                        options: e,
                        objectsRelativeToGroup: i
                    })
                }
            }
            l(rl, "stateProperties", [...iR.stateProperties, "layout"]), l(rl, "type", "Group"), l(rl, "ownDefaults", {
                layout: "fit-content",
                strokeWidth: 0,
                subTargetCheck: !1,
                interactive: !1
            }), R.setClass(rl);
            class rc extends rl {
                _shouldSetNestedCoords() {
                    return !0
                }
                __objectSelectionMonitor() {}
                multiSelectAdd() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    "selection-order" === this.multiSelectionStacking ? this.add(...e) : e.forEach(t => {
                        let e = this._objects.findIndex(e => e.isInFrontOf(t)),
                            i = -1 === e ? this.size() : e;
                        this.insertAt(i, t)
                    })
                }
                enterGroup(t, e) {
                    if (t.group) {
                        let e = t.group;
                        e._exitGroup(t), t.__owningGroup = e
                    }
                    return this._enterGroup(t, e), !0
                }
                exitGroup(t, e) {
                    this._exitGroup(t, e);
                    let i = t.__owningGroup;
                    i && (i._enterGroup(t, !0), delete t.__owningGroup)
                }
                _onAfterObjectsChange(t, e) {
                    super._onAfterObjectsChange(t, e);
                    let i = [];
                    e.forEach(t => {
                        t.group && !i.includes(t.group) && i.push(t.group)
                    }), "removed" === t ? i.forEach(t => {
                        t._onAfterObjectsChange("added", e)
                    }) : i.forEach(t => {
                        t._set("dirty", !0)
                    })
                }
                onDeselect() {
                    return this.removeAll(), !1
                }
                _applyLayoutStrategy(t) {
                    super._applyLayoutStrategy(t), 0 === this._objects.length && Object.assign(this, {
                        left: 0,
                        top: 0,
                        angle: 0,
                        scaleX: 1,
                        scaleY: 1,
                        skewX: 0,
                        skewY: 0,
                        flipX: !1,
                        flipY: !1
                    })
                }
                toString() {
                    return "#<ActiveSelection: (".concat(this.complexity(), ")>")
                }
                shouldCache() {
                    return !1
                }
                isOnACache() {
                    return !1
                }
                _renderControls(t, e, i) {
                    t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, super._renderControls(t, e);
                    let r = h(h({
                        hasControls: !1
                    }, i), {}, {
                        forActiveSelection: !0
                    });
                    for (let e = 0; e < this._objects.length; e++) this._objects[e]._renderControls(t, r);
                    t.restore()
                }
                constructor() {
                    super(...arguments), l(this, "multiSelectionStacking", "canvas-stacking")
                }
            }
            l(rc, "type", "ActiveSelection"), R.setClass(rc), R.setClass(rc, "activeSelection");
            class ru {
                createSideVector(t, e) {
                    let i = eU(t, e);
                    return this.options.strokeUniform ? i.multiply(this.scale) : i
                }
                projectOrthogonally(t, e, i) {
                    return this.applySkew(t.add(this.calcOrthogonalProjection(t, e, i)))
                }
                isSkewed() {
                    return 0 !== this.options.skewX || 0 !== this.options.skewY
                }
                applySkew(t) {
                    let e = new H(t);
                    return e.y += e.x * Math.tan(ti(this.options.skewY)), e.x += e.y * Math.tan(ti(this.options.skewX)), e
                }
                scaleUnitVector(t, e) {
                    return t.multiply(this.strokeUniformScalar).scalarMultiply(e)
                }
                constructor(t) {
                    this.options = t, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new H(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new H(1 / this.options.scaleX, 1 / this.options.scaleY) : new H(1, 1)
                }
            }
            let rd = new H;
            class rg extends ru {
                static getOrthogonalRotationFactor(t, e) {
                    return Math.abs(e ? eq(t, e) : eK(t)) < O ? -1 : 1
                }
                calcOrthogonalProjection(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude,
                        r = eZ(this.createSideVector(t, e)),
                        s = rg.getOrthogonalRotationFactor(r, this.bisector);
                    return this.scaleUnitVector(r, i * s)
                }
                projectBevel() {
                    let t = [];
                    return (this.alpha % k == 0 ? [this.B] : [this.B, this.C]).forEach(e => {
                        t.push(this.projectOrthogonally(this.A, e)), t.push(this.projectOrthogonally(this.A, e, -this.strokeProjectionMagnitude))
                    }), t
                }
                projectMiter() {
                    let t = [],
                        e = 1 / Math.sin(Math.abs(this.alpha) / 2),
                        i = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * e),
                        r = this.options.strokeUniform ? eN(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
                    return eN(i) / this.strokeProjectionMagnitude <= r && t.push(this.applySkew(this.A.add(i))), t.push(...this.projectBevel()), t
                }
                projectRoundNoSkew(t, e) {
                    let i = [],
                        r = new H(rg.getOrthogonalRotationFactor(this.bisector), rg.getOrthogonalRotationFactor(new H(this.bisector.y, this.bisector.x)));
                    return [new H(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(r), new H(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(r)].forEach(r => {
                        e0(r, t, e) && i.push(this.A.add(r))
                    }), i
                }
                projectRoundWithSkew(t, e) {
                    let i = [],
                        {
                            skewX: r,
                            skewY: s,
                            scaleX: n,
                            scaleY: o,
                            strokeUniform: a
                        } = this.options,
                        h = new H(Math.tan(ti(r)), Math.tan(ti(s))),
                        l = this.strokeProjectionMagnitude,
                        c = a ? l / o / Math.sqrt(1 / o ** 2 + 1 / n ** 2 * h.y ** 2) : l / Math.sqrt(1 + h.y ** 2),
                        u = new H(Math.sqrt(Math.max(l ** 2 - c ** 2, 0)), c),
                        d = a ? l / Math.sqrt(1 + h.x ** 2 * (1 / o) ** 2 / (1 / n + 1 / n * h.x * h.y) ** 2) : l / Math.sqrt(1 + h.x ** 2 / (1 + h.x * h.y) ** 2),
                        g = new H(d, Math.sqrt(Math.max(l ** 2 - d ** 2, 0)));
                    return [g, g.scalarMultiply(-1), u, u.scalarMultiply(-1)].map(t => this.applySkew(a ? t.multiply(this.strokeUniformScalar) : t)).forEach(r => {
                        e0(r, t, e) && i.push(this.applySkew(this.A).add(r))
                    }), i
                }
                projectRound() {
                    let t = [];
                    t.push(...this.projectBevel());
                    let e = this.alpha % k == 0,
                        i = this.applySkew(this.A),
                        r = t[2 * !e].subtract(i),
                        s = t[+!!e].subtract(i),
                        n = eQ(r, e ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1))) > 0,
                        o = n ? r : s,
                        a = n ? s : r;
                    return this.isSkewed() ? t.push(...this.projectRoundWithSkew(o, a)) : t.push(...this.projectRoundNoSkew(o, a)), t
                }
                projectPoints() {
                    switch (this.options.strokeLineJoin) {
                        case "miter":
                            return this.projectMiter();
                        case "round":
                            return this.projectRound();
                        default:
                            return this.projectBevel()
                    }
                }
                project() {
                    return this.projectPoints().map(t => ({
                        originPoint: this.A,
                        projectedPoint: t,
                        angle: this.alpha,
                        bisector: this.bisector
                    }))
                }
                constructor(t, e, i, r) {
                    super(r), l(this, "AB", void 0), l(this, "AC", void 0), l(this, "alpha", void 0), l(this, "bisector", void 0), this.A = new H(t), this.B = new H(e), this.C = new H(i), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = eq(this.AB, this.AC), this.bisector = eJ(eH(this.AB.eq(rd) ? this.AC : this.AB, this.alpha / 2))
                }
            }
            class rf extends ru {
                calcOrthogonalProjection(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude,
                        r = this.createSideVector(t, e);
                    return this.scaleUnitVector(eZ(r), i)
                }
                projectButt() {
                    return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)]
                }
                projectRound() {
                    let t = [];
                    if (!this.isSkewed() && this.A.eq(this.T)) {
                        let e = new H(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
                        t.push(this.applySkew(this.A.add(e)), this.applySkew(this.A.subtract(e)))
                    } else t.push(...new rg(this.A, this.T, this.T, this.options).projectRound());
                    return t
                }
                projectSquare() {
                    let t = [];
                    if (this.A.eq(this.T)) {
                        let e = new H(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
                        t.push(this.A.add(e), this.A.subtract(e))
                    } else {
                        let e = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude),
                            i = this.scaleUnitVector(eJ(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude),
                            r = this.A.add(i);
                        t.push(r.add(e), r.subtract(e))
                    }
                    return t.map(t => this.applySkew(t))
                }
                projectPoints() {
                    switch (this.options.strokeLineCap) {
                        case "round":
                            return this.projectRound();
                        case "square":
                            return this.projectSquare();
                        default:
                            return this.projectButt()
                    }
                }
                project() {
                    return this.projectPoints().map(t => ({
                        originPoint: this.A,
                        projectedPoint: t
                    }))
                }
                constructor(t, e, i) {
                    super(i), this.A = new H(t), this.T = new H(e)
                }
            }
            let rp = function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = [];
                    if (0 === t.length) return r;
                    let s = t.reduce((t, e) => (t[t.length - 1].eq(e) || t.push(new H(e)), t), [new H(t[0])]);
                    if (1 === s.length) i = !0;
                    else if (!i) {
                        let t = s[0],
                            e = ((t, e) => {
                                for (let i = t.length - 1; i >= 0; i--)
                                    if (e(t[i], i, t)) return i;
                                return -1
                            })(s, e => !e.eq(t));
                        s.splice(e + 1)
                    }
                    return s.forEach((t, s, n) => {
                        let o, a;
                        0 === s ? (a = n[1], o = i ? t : n[n.length - 1]) : s === n.length - 1 ? (o = n[s - 1], a = i ? t : n[0]) : (o = n[s - 1], a = n[s + 1]), i && 1 === n.length ? r.push(...new rf(t, t, e).project()) : i && (0 === s || s === n.length - 1) ? r.push(...new rf(t, 0 === s ? a : o, e).project()) : r.push(...new rg(t, o, a, e).project())
                    }), r
                },
                rm = function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return t.fill !== e.fill || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth || t.fontSize !== e.fontSize || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle || t.textBackgroundColor !== e.textBackgroundColor || t.deltaY !== e.deltaY || i && (t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough)
                },
                r_ = (t, e) => {
                    let i = e.split("\n"),
                        r = [],
                        s = -1,
                        n = {};
                    t = e6(t);
                    for (let e = 0; e < i.length; e++) {
                        if (!t[e]) {
                            s += i[e].length, n = {};
                            continue
                        }
                        for (let o = 0; o < i[e].length; o++) {
                            s++;
                            let i = t[e][o];
                            i && Object.keys(i).length > 0 && (rm(n, i, !0) ? r.push({
                                start: s,
                                end: s + 1,
                                style: i
                            }) : r[r.length - 1].end++), n = i || {}
                        }
                    }
                    return r
                },
                rv = (t, e) => {
                    if (!Array.isArray(t)) return e6(t);
                    let i = e.split(L),
                        r = {},
                        s = -1,
                        n = 0;
                    for (let e = 0; e < i.length; e++)
                        for (let o = 0; o < i[e].length; o++) s++, t[n] && t[n].start <= s && s < t[n].end && (r[e] = r[e] || {}, r[e][o] = h({}, t[n].style), s === t[n].end - 1 && n++);
                    return r
                },
                ry = (t, e) => Math.min(e.width / t.width, e.height / t.height),
                rx = (t, e) => Math.max(e.width / t.width, e.height / t.height),
                rC = t => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                rb = t => {
                    let e = [];
                    for (let i = 0, r; i < t.length; i++) !1 !== (r = rS(t, i)) && e.push(r);
                    return e
                },
                rS = (t, e) => {
                    let i = t.charCodeAt(e);
                    if (isNaN(i)) return "";
                    if (i < 55296 || i > 57343) return t.charAt(e);
                    if (55296 <= i && i <= 56319) {
                        if (t.length <= e + 1) throw "High surrogate without following low surrogate";
                        let i = t.charCodeAt(e + 1);
                        if (56320 > i || i > 57343) throw "High surrogate without following low surrogate";
                        return t.charAt(e) + t.charAt(e + 1)
                    }
                    if (0 === e) throw "Low surrogate without preceding high surrogate";
                    let r = t.charCodeAt(e - 1);
                    if (55296 > r || r > 56319) throw "Low surrogate without preceding high surrogate";
                    return !1
                };
            var rw = Object.freeze({
                __proto__: null,
                capitalize: function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return "".concat(t.charAt(0).toUpperCase()).concat(e ? t.slice(1) : t.slice(1).toLowerCase())
                },
                escapeXml: rC,
                graphemeSplit: rb
            });
            let rT = "(".concat(iW, ")"),
                rO = "(M) (?:".concat(rT, " ").concat(rT, " ?)+"),
                rk = "(L) (?:".concat(rT, " ").concat(rT, " ?)+"),
                rD = "(H) (?:".concat(rT, " ?)+"),
                rM = "(V) (?:".concat(rT, " ?)+"),
                rP = String.raw(eD || (eD = u(["(Z)s*"], ["(Z)\\s*"]))),
                rE = "(C) (?:".concat(rT, " ").concat(rT, " ").concat(rT, " ").concat(rT, " ").concat(rT, " ").concat(rT, " ?)+"),
                rA = "(S) (?:".concat(rT, " ").concat(rT, " ").concat(rT, " ").concat(rT, " ?)+"),
                rj = "(Q) (?:".concat(rT, " ").concat(rT, " ").concat(rT, " ").concat(rT, " ?)+"),
                rF = "(T) (?:".concat(rT, " ").concat(rT, " ?)+"),
                rL = "(A) (?:".concat(rT, " ").concat(rT, " ").concat(rT, " ([01]) ?([01]) ").concat(rT, " ").concat(rT, " ?)+"),
                rB = "(?:(?:".concat(rO, ")") + "|(?:".concat(rk, ")") + "|(?:".concat(rD, ")") + "|(?:".concat(rM, ")") + "|(?:".concat(rP, ")") + "|(?:".concat(rE, ")") + "|(?:".concat(rA, ")") + "|(?:".concat(rj, ")") + "|(?:".concat(rF, ")") + "|(?:".concat(rL, "))"),
                rR = {
                    m: "l",
                    M: "L"
                },
                rI = (t, e, i, r, s, n, o, a, h, l, c) => {
                    let u = G(t),
                        d = z(t),
                        g = G(e),
                        f = z(e),
                        p = i * s * g - r * n * f + o,
                        m = r * s * g + i * n * f + a;
                    return ["C", l + h * (-i * s * d - r * n * u), c + h * (-r * s * d + i * n * u), p + h * (i * s * f + r * n * g), m + h * (r * s * f - i * n * g), p, m]
                },
                rX = (t, e, i, r) => {
                    let s = Math.atan2(e, t),
                        n = Math.atan2(r, i);
                    return n >= s ? n - s : 2 * Math.PI - (s - n)
                };

            function rY(t, e, i, r, s, n, o, a) {
                let h;
                if (f.cachesBoundsOfCurve && (h = [...arguments].join(), S.boundsOfCurveCache[h])) return S.boundsOfCurveCache[h];
                let l = Math.sqrt,
                    c = Math.abs,
                    u = [],
                    d = [
                        [0, 0],
                        [0, 0]
                    ],
                    g = 6 * t - 12 * i + 6 * s,
                    p = -3 * t + 9 * i - 9 * s + 3 * o,
                    m = 3 * i - 3 * t;
                for (let t = 0; t < 2; ++t) {
                    if (t > 0 && (g = 6 * e - 12 * r + 6 * n, p = -3 * e + 9 * r - 9 * n + 3 * a, m = 3 * r - 3 * e), 1e-12 > c(p)) {
                        if (1e-12 > c(g)) continue;
                        let t = -m / g;
                        0 < t && t < 1 && u.push(t);
                        continue
                    }
                    let i = g * g - 4 * m * p;
                    if (i < 0) continue;
                    let s = l(i),
                        o = (-g + s) / (2 * p);
                    0 < o && o < 1 && u.push(o);
                    let h = (-g - s) / (2 * p);
                    0 < h && h < 1 && u.push(h)
                }
                let _ = u.length,
                    v = _,
                    y = rz(t, e, i, r, s, n, o, a);
                for (; _--;) {
                    let {
                        x: t,
                        y: e
                    } = y(u[_]);
                    d[0][_] = t, d[1][_] = e
                }
                d[0][v] = t, d[1][v] = e, d[0][v + 1] = o, d[1][v + 1] = a;
                let x = [new H(Math.min(...d[0]), Math.min(...d[1])), new H(Math.max(...d[0]), Math.max(...d[1]))];
                return f.cachesBoundsOfCurve && (S.boundsOfCurveCache[h] = x), x
            }
            let rW = (t, e, i) => {
                    let [r, s, n, o, a, h, l, c] = i, u = ((t, e, i, r, s, n, o) => {
                        if (0 === i || 0 === r) return [];
                        let a = 0,
                            h = 0,
                            l = 0,
                            c = Math.PI,
                            u = o * D,
                            d = z(u),
                            g = G(u),
                            f = .5 * (-g * t - d * e),
                            p = .5 * (-g * e + d * t),
                            m = i ** 2,
                            _ = r ** 2,
                            v = p ** 2,
                            y = f ** 2,
                            x = m * _ - m * v - _ * y,
                            C = Math.abs(i),
                            b = Math.abs(r);
                        if (x < 0) {
                            let t = Math.sqrt(1 - x / (m * _));
                            C *= t, b *= t
                        } else l = (s === n ? -1 : 1) * Math.sqrt(x / (m * v + _ * y));
                        let S = l * C * p / b,
                            w = -l * b * f / C,
                            T = g * S - d * w + .5 * t,
                            O = d * S + g * w + .5 * e,
                            k = rX(1, 0, (f - S) / C, (p - w) / b),
                            M = rX((f - S) / C, (p - w) / b, (-f - S) / C, (-p - w) / b);
                        0 === n && M > 0 ? M -= 2 * c : 1 === n && M < 0 && (M += 2 * c);
                        let P = Math.ceil(Math.abs(M / c * 2)),
                            E = Array(P),
                            A = M / P,
                            j = 8 / 3 * Math.sin(A / 4) * Math.sin(A / 4) / Math.sin(A / 2),
                            F = k + A;
                        for (let t = 0; t < P; t++) E[t] = rI(k, F, g, d, C, b, T, O, j, a, h), a = E[t][5], h = E[t][6], k = F, F += A;
                        return E
                    })(l - t, c - e, s, n, a, h, o);
                    for (let i = 0, r = u.length; i < r; i++) u[i][1] += t, u[i][2] += e, u[i][3] += t, u[i][4] += e, u[i][5] += t, u[i][6] += e;
                    return u
                },
                rV = t => {
                    let e = 0,
                        i = 0,
                        r = 0,
                        s = 0,
                        n = [],
                        o, a = 0,
                        h = 0;
                    for (let l of t) {
                        let t, c = [...l];
                        switch (c[0]) {
                            case "l":
                                c[1] += e, c[2] += i;
                            case "L":
                                t = ["L", e = c[1], i = c[2]];
                                break;
                            case "h":
                                c[1] += e;
                            case "H":
                                t = ["L", e = c[1], i];
                                break;
                            case "v":
                                c[1] += i;
                            case "V":
                                t = ["L", e, i = c[1]];
                                break;
                            case "m":
                                c[1] += e, c[2] += i;
                            case "M":
                                e = c[1], i = c[2], r = c[1], s = c[2], t = ["M", e, i];
                                break;
                            case "c":
                                c[1] += e, c[2] += i, c[3] += e, c[4] += i, c[5] += e, c[6] += i;
                            case "C":
                                a = c[3], h = c[4], e = c[5], i = c[6], t = ["C", c[1], c[2], a, h, e, i];
                                break;
                            case "s":
                                c[1] += e, c[2] += i, c[3] += e, c[4] += i;
                            case "S":
                                "C" === o ? (a = 2 * e - a, h = 2 * i - h) : (a = e, h = i), e = c[3], i = c[4], a = (t = ["C", a, h, c[1], c[2], e, i])[3], h = t[4];
                                break;
                            case "q":
                                c[1] += e, c[2] += i, c[3] += e, c[4] += i;
                            case "Q":
                                a = c[1], h = c[2], t = ["Q", a, h, e = c[3], i = c[4]];
                                break;
                            case "t":
                                c[1] += e, c[2] += i;
                            case "T":
                                "Q" === o ? (a = 2 * e - a, h = 2 * i - h) : (a = e, h = i), t = ["Q", a, h, e = c[1], i = c[2]];
                                break;
                            case "a":
                                c[6] += e, c[7] += i;
                            case "A":
                                rW(e, i, c).forEach(t => n.push(t)), e = c[6], i = c[7];
                                break;
                            case "z":
                            case "Z":
                                e = r, i = s, t = ["Z"]
                        }
                        t ? (n.push(t), o = t[0]) : o = ""
                    }
                    return n
                },
                rG = (t, e, i, r) => Math.sqrt((i - t) ** 2 + (r - e) ** 2),
                rz = (t, e, i, r, s, n, o, a) => h => {
                    let l = h ** 3,
                        c = 3 * h ** 2 * (1 - h),
                        u = 3 * h * (1 - h) ** 2,
                        d = (1 - h) ** 3;
                    return new H(o * l + s * c + i * u + t * d, a * l + n * c + r * u + e * d)
                },
                rH = t => 2 * t * (1 - t),
                rU = (t, e, i, r, s, n, o, a) => h => {
                    let l = h ** 2,
                        c = rH(h),
                        u = (1 - h) ** 2;
                    return Math.atan2(3 * (u * (r - e) + c * (n - r) + l * (a - n)), 3 * (u * (i - t) + c * (s - i) + l * (o - s)))
                },
                rN = (t, e, i, r, s, n) => o => {
                    let a = o ** 2,
                        h = rH(o),
                        l = (1 - o) ** 2;
                    return new H(s * a + i * h + t * l, n * a + r * h + e * l)
                },
                rq = (t, e, i, r, s, n) => o => {
                    let a = 1 - o;
                    return Math.atan2(2 * (a * (r - e) + o * (n - r)), 2 * (a * (i - t) + o * (s - i)))
                },
                rK = (t, e, i) => {
                    let r = new H(e, i),
                        s = 0;
                    for (let e = 1; e <= 100; e += 1) {
                        let i = t(e / 100);
                        s += rG(r.x, r.y, i.x, i.y), r = i
                    }
                    return s
                },
                rJ = t => {
                    let e = 0,
                        i = 0,
                        r = 0,
                        s = 0,
                        n = 0,
                        o, a, h = [];
                    for (let l of t) {
                        let t = {
                            x: i,
                            y: r,
                            command: l[0],
                            length: 0
                        };
                        switch (l[0]) {
                            case "M":
                                (a = t).x = s = i = l[1], a.y = n = r = l[2];
                                break;
                            case "L":
                                (a = t).length = rG(i, r, l[1], l[2]), i = l[1], r = l[2];
                                break;
                            case "C":
                                o = rz(i, r, l[1], l[2], l[3], l[4], l[5], l[6]), (a = t).iterator = o, a.angleFinder = rU(i, r, l[1], l[2], l[3], l[4], l[5], l[6]), a.length = rK(o, i, r), i = l[5], r = l[6];
                                break;
                            case "Q":
                                o = rN(i, r, l[1], l[2], l[3], l[4]), (a = t).iterator = o, a.angleFinder = rq(i, r, l[1], l[2], l[3], l[4]), a.length = rK(o, i, r), i = l[3], r = l[4];
                                break;
                            case "Z":
                                (a = t).destX = s, a.destY = n, a.length = rG(i, r, s, n), i = s, r = n
                        }
                        e += a.length, h.push(a)
                    }
                    return h.push({
                        length: e,
                        x: i,
                        y: r
                    }), h
                },
                rZ = function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rJ(t),
                        r = 0;
                    for (; e - i[r].length > 0 && r < i.length - 2;) e -= i[r].length, r++;
                    let s = i[r],
                        n = e / s.length,
                        o = t[r];
                    switch (s.command) {
                        case "M":
                            return {
                                x: s.x, y: s.y, angle: 0
                            };
                        case "Z":
                            return h(h({}, new H(s.x, s.y).lerp(new H(s.destX, s.destY), n)), {}, {
                                angle: Math.atan2(s.destY - s.y, s.destX - s.x)
                            });
                        case "L":
                            return h(h({}, new H(s.x, s.y).lerp(new H(o[1], o[2]), n)), {}, {
                                angle: Math.atan2(o[2] - s.y, o[1] - s.x)
                            });
                        case "C":
                        case "Q":
                            return ((t, e) => {
                                let i = 0,
                                    r = 0,
                                    s = {
                                        x: t.x,
                                        y: t.y
                                    },
                                    n = h({}, s),
                                    o, a = .01,
                                    l = 0,
                                    c = t.iterator,
                                    u = t.angleFinder;
                                for (; r < e && a > 1e-4;) n = c(i), l = i, (o = rG(s.x, s.y, n.x, n.y)) + r > e ? (i -= a, a /= 2) : (s = n, i += a, r += o);
                                return h(h({}, n), {}, {
                                    angle: u(l)
                                })
                            })(s, e)
                    }
                },
                rQ = t => {
                    t = i$(t);
                    let e = [];
                    for (let i of t.matchAll(RegExp(rB, "gi"))) {
                        let t, r = i[0],
                            s = [];
                        do {
                            if (!(t = RegExp(rB, "i").exec(r))) break;
                            let e = t.filter(t => t);
                            e.shift();
                            let i = e.map(t => {
                                let e = Number.parseFloat(t);
                                return Number.isNaN(e) ? t : e
                            });
                            if (s.push(i), e.length <= 1) break;
                            e.shift(), r = r.replace(new RegExp("".concat(e.join(" ?"), " ?$")), "")
                        } while (t);
                        s.reverse().forEach((t, i) => {
                            let r = rR[t[0]];
                            i > 0 && ("l" == r || "L" == r) && (t[0] = r), e.push(t)
                        })
                    }
                    return e
                },
                r$ = function(t) {
                    let e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = new H(t[0]),
                        s = new H(t[1]),
                        n = 1,
                        o = 0,
                        a = [],
                        h = t.length,
                        l = h > 2;
                    for (l && (n = t[2].x < s.x ? -1 : +(t[2].x !== s.x), o = t[2].y < s.y ? -1 : +(t[2].y !== s.y)), a.push(["M", r.x - n * i, r.y - o * i]), e = 1; e < h; e++) {
                        if (!r.eq(s)) {
                            let t = r.midPointFrom(s);
                            a.push(["Q", r.x, r.y, t.x, t.y])
                        }
                        r = t[e], e + 1 < t.length && (s = t[e + 1])
                    }
                    return l && (n = r.x > t[e - 2].x ? 1 : r.x === t[e - 2].x ? 0 : -1, o = r.y > t[e - 2].y ? 1 : r.y === t[e - 2].y ? 0 : -1), a.push(["L", r.x + n * i, r.y + o * i]), a
                },
                r0 = (t, e) => t.map(t => t.map((t, i) => 0 === i || void 0 === e ? t : tP(t, e)).join(" ")).join(" ");

            function r1(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = e.onComplete || T,
                    r = new(b()).XMLHttpRequest,
                    s = e.signal,
                    n = function() {
                        r.abort()
                    },
                    o = function() {
                        s && s.removeEventListener("abort", n), r.onerror = r.ontimeout = T
                    };
                if (s && s.aborted) throw Error("`options.signal` is in `aborted` state");
                return s && s.addEventListener("abort", n, {
                    once: !0
                }), r.onreadystatechange = function() {
                    4 === r.readyState && (o(), i(r), r.onreadystatechange = T)
                }, r.onerror = r.ontimeout = o, r.open("get", t, !0), r.send(), r
            }
            let r2 = (t, e) => {
                let i = t._findCenterFromElement();
                t.transformMatrix && ((t => {
                    if (t.transformMatrix) {
                        let {
                            scaleX: e,
                            scaleY: i,
                            angle: r,
                            skewX: s
                        } = tl(t.transformMatrix);
                        t.flipX = !1, t.flipY = !1, t.set("scaleX", e), t.set("scaleY", i), t.angle = r, t.skewX = s, t.skewY = 0
                    }
                })(t), i = i.transform(t.transformMatrix)), delete t.transformMatrix, e && (t.scaleX *= e.scaleX, t.scaleY *= e.scaleY, t.cropX = e.cropX, t.cropY = e.cropY, i.x += e.offsetLeft, i.y += e.offsetTop, t.width = e.width, t.height = e.height), t.setPositionByOrigin(i, P, P)
            };
            var r5 = Object.freeze({
                __proto__: null,
                addTransformToObject: t4,
                animate: eW,
                animateColor: eV,
                applyTransformToObject: t8,
                calcAngleBetweenVectors: eq,
                calcDimensionsMatrix: tm,
                calcPlaneChangeMatrix: et,
                calcVectorRotation: eK,
                cancelAnimFrame: J,
                capValue: eB,
                composeMatrix: t_,
                copyCanvasElement: t => {
                    var e;
                    let i = $();
                    return i.width = t.width, i.height = t.height, null == (e = i.getContext("2d")) || e.drawImage(t, 0, 0), i
                },
                cos: G,
                createCanvasElement: $,
                createImage: tt,
                createRotateMatrix: tu,
                createScaleMatrix: td,
                createSkewXMatrix: tf,
                createSkewYMatrix: tp,
                createTranslateMatrix: tc,
                createVector: eU,
                crossProduct: eQ,
                degreesToRadians: ti,
                dotProduct: e$,
                ease: eM,
                enlivenObjectEnlivables: tx,
                enlivenObjects: ty,
                findScaleToCover: rx,
                findScaleToFit: ry,
                getBoundsOfCurve: rY,
                getOrthonormalVector: eZ,
                getPathSegmentsInfo: rJ,
                getPointOnPath: rZ,
                getPointer: t0,
                getRandomInt: Y,
                getRegularPolygonPath: (t, e) => {
                    let i = 2 * Math.PI / t,
                        r = -O;
                    t % 2 == 0 && (r += i / 2);
                    let s = Array(t + 1);
                    for (let n = 0; n < t; n++) {
                        let t = n * i + r,
                            {
                                x: o,
                                y: a
                            } = new H(G(t), z(t)).scalarMultiply(e);
                        s[n] = [0 === n ? "M" : "L", o, a]
                    }
                    return s[t] = ["Z"], s
                },
                getSmoothPathFromPoints: r$,
                getSvgAttributes: t => {
                    let e = ["instantiated_by_use", "style", "id", "class"];
                    switch (t) {
                        case "linearGradient":
                            return e.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
                        case "radialGradient":
                            return e.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
                        case "stop":
                            return e.concat(["offset", "stop-color", "stop-opacity"])
                    }
                    return e
                },
                getUnitVector: eJ,
                groupSVGElements: t => t && 1 === t.length ? t[0] : new rl(t),
                hasStyleChanged: rm,
                invertTransform: to,
                isBetweenVectors: e0,
                isIdentityMatrix: t => t.every((t, e) => t === M[e]),
                isTouchEvent: t1,
                isTransparent: iI,
                joinPath: r0,
                loadImage: tv,
                magnitude: eN,
                makeBoundingBoxFromPoints: t5,
                makePathSimpler: rV,
                matrixToSVG: tj,
                mergeClipPaths: (t, e) => {
                    var i;
                    let r = t,
                        s = e;
                    r.inverted && !s.inverted && (r = e, s = t), ei(s, null == (i = s.group) ? void 0 : i.calcTransformMatrix(), r.calcTransformMatrix());
                    let n = r.inverted && s.inverted;
                    return n && (r.inverted = s.inverted = !1), new rl([r], {
                        clipPath: s,
                        inverted: n
                    })
                },
                multiplyTransformMatrices: ta,
                multiplyTransformMatrixArray: th,
                parsePath: rQ,
                parsePreserveAspectRatioAttribute: tA,
                parseUnit: tE,
                pick: tC,
                projectStrokeOnPoints: rp,
                qrDecompose: tl,
                radiansToDegrees: tr,
                removeFromArray: V,
                removeTransformFromObject: (t, e) => {
                    let i = ta(to(e), t.calcOwnMatrix());
                    t8(t, i)
                },
                removeTransformMatrixForSvgParsing: r2,
                request: r1,
                requestAnimFrame: K,
                resetObjectTransform: t6,
                rotatePoint: (t, e, i) => t.rotate(i, e),
                rotateVector: eH,
                saveObjectTransform: t9,
                sendObjectToPlane: ei,
                sendPointToPlane: ee,
                setStyle: tU,
                sin: z,
                sizeAfterTransform: t7,
                string: rw,
                stylesFromArray: rv,
                stylesToArray: r_,
                toDataURL: te,
                toFixed: tP,
                transformPath: (t, e, i) => (i && (e = ta(e, [1, 0, 0, 1, -i.x, -i.y])), t.map(t => {
                    let i = [...t];
                    for (let r = 1; r < t.length - 1; r += 2) {
                        let {
                            x: s,
                            y: n
                        } = tn({
                            x: t[r],
                            y: t[r + 1]
                        }, e);
                        i[r] = s, i[r + 1] = n
                    }
                    return i
                })),
                transformPoint: tn,
                transformPointRelativeToCanvas: (t, e, i, r) => {
                    if ("child" !== i && "sibling" !== i) throw Error("fabric.js: received bad argument ".concat(i));
                    if ("child" !== r && "sibling" !== r) throw Error("fabric.js: received bad argument ".concat(r));
                    if (i === r) return t;
                    let s = e.viewportTransform;
                    return t.transform("child" === r ? to(s) : s)
                }
            });
            class r3 extends tJ {
                createUpperCanvas() {
                    let {
                        el: t
                    } = this.lower, e = $();
                    return e.className = t.className, e.classList.remove("lower-canvas"), e.classList.add("upper-canvas"), e.setAttribute("data-fabric", "top"), e.style.cssText = t.style.cssText, e.setAttribute("draggable", "true"), e
                }
                createContainerElement() {
                    let t = C().createElement("div");
                    return t.setAttribute("data-fabric", "wrapper"), tU(t, {
                        position: "relative"
                    }), tK(t), t
                }
                applyCanvasStyle(t, e) {
                    let i, {
                        allowTouchScrolling: r
                    } = e;
                    tU(t, {
                        position: "absolute",
                        left: "0",
                        top: "0"
                    }), tU(t, {
                        "touch-action": i = r ? "manipulation" : F,
                        "-ms-touch-action": i
                    }), tK(t)
                }
                setDimensions(t, e) {
                    super.setDimensions(t, e);
                    let {
                        el: i,
                        ctx: r
                    } = this.upper;
                    tN(i, r, t, e)
                }
                setCSSDimensions(t) {
                    super.setCSSDimensions(t), tq(this.upper.el, t), tq(this.container, t)
                }
                cleanupDOM(t) {
                    let e = this.container,
                        {
                            el: i
                        } = this.lower,
                        {
                            el: r
                        } = this.upper;
                    super.cleanupDOM(t), e.removeChild(r), e.removeChild(i), e.parentNode && e.parentNode.replaceChild(i, e)
                }
                dispose() {
                    super.dispose(), x().dispose(this.upper.el), delete this.upper, delete this.container
                }
                constructor(t) {
                    let {
                        allowTouchScrolling: e = !1,
                        containerClass: i = ""
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(t), l(this, "upper", void 0), l(this, "container", void 0);
                    const {
                        el: r
                    } = this.lower, s = this.createUpperCanvas();
                    this.upper = {
                        el: s,
                        ctx: s.getContext("2d")
                    }, this.applyCanvasStyle(r, {
                        allowTouchScrolling: e
                    }), this.applyCanvasStyle(s, {
                        allowTouchScrolling: e
                    });
                    const n = this.createContainerElement();
                    n.classList.add(i), r.parentNode && r.parentNode.replaceChild(n, r), n.append(r, s), this.container = n
                }
            }
            let r4 = ["activeSelection"];
            class r8 extends tQ {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), r8.ownDefaults)
                }
                get upperCanvasEl() {
                    var t;
                    return null == (t = this.elements.upper) ? void 0 : t.el
                }
                get contextTop() {
                    var t;
                    return null == (t = this.elements.upper) ? void 0 : t.ctx
                }
                get wrapperEl() {
                    return this.elements.container
                }
                initElements(t) {
                    this.elements = new r3(t, {
                        allowTouchScrolling: this.allowTouchScrolling,
                        containerClass: this.containerClass
                    }), this._createCacheCanvas()
                }
                _onObjectAdded(t) {
                    this._objectsToRender = void 0, super._onObjectAdded(t)
                }
                _onObjectRemoved(t) {
                    this._objectsToRender = void 0, t === this._activeObject && (this.fire("before:selection:cleared", {
                        deselected: [t]
                    }), this._discardActiveObject(), this.fire("selection:cleared", {
                        deselected: [t]
                    }), t.fire("deselected", {
                        target: t
                    })), t === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t)
                }
                _chooseObjectsToRender() {
                    let t = this._activeObject;
                    return !this.preserveObjectStacking && t ? this._objects.filter(e => !e.group && e !== t).concat(t) : this._objects
                }
                renderAll() {
                    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1), this._objectsToRender || (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender))
                }
                renderTopLayer(t) {
                    t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = !0), t.restore()
                }
                renderTop() {
                    let t = this.contextTop;
                    this.clearContext(t), this.renderTopLayer(t), this.fire("after:render", {
                        ctx: t
                    })
                }
                _normalizePointer(t, e) {
                    return tn(this.restorePointerVpt(e), to(t.calcTransformMatrix()))
                }
                setTargetFindTolerance(t) {
                    t = Math.round(t), this.targetFindTolerance = t;
                    let e = this.getRetinaScaling(),
                        i = Math.ceil((2 * t + 1) * e);
                    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = i, this.pixelFindContext.scale(e, e)
                }
                isTargetTransparent(t, e, i) {
                    let r = this.targetFindTolerance,
                        s = this.pixelFindContext;
                    this.clearContext(s), s.save(), s.translate(-e + r, -i + r), s.transform(...this.viewportTransform);
                    let n = t.selectionBackgroundColor;
                    t.selectionBackgroundColor = "", t.render(s), t.selectionBackgroundColor = n, s.restore();
                    let o = Math.round(r * this.getRetinaScaling());
                    return iI(s, o, o, o)
                }
                _isSelectionKeyPressed(t) {
                    let e = this.selectionKey;
                    return !!e && (Array.isArray(e) ? !!e.find(e => !!e && !0 === t[e]) : t[e])
                }
                _shouldClearSelection(t, e) {
                    let i = this.getActiveObjects(),
                        r = this._activeObject;
                    return !!(!e || e && r && i.length > 1 && -1 === i.indexOf(e) && r !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && r && r !== e)
                }
                _shouldCenterTransform(t, e, i) {
                    let r;
                    if (t) return "scale" === e || "scaleX" === e || "scaleY" === e || "resizing" === e ? r = this.centeredScaling || t.centeredScaling : "rotate" === e && (r = this.centeredRotation || t.centeredRotation), r ? !i : i
                }
                _getOriginFromCorner(t, e) {
                    let i = {
                        x: t.originX,
                        y: t.originY
                    };
                    return ["ml", "tl", "bl"].includes(e) ? i.x = j : ["mr", "tr", "br"].includes(e) && (i.x = E), ["tl", "mt", "tr"].includes(e) ? i.y = A : ["bl", "mb", "br"].includes(e) && (i.y = "top"), i
                }
                _setupCurrentTransform(t, e, i) {
                    if (!e) return;
                    let r = e.group ? ee(this.getPointer(t), void 0, e.group.calcTransformMatrix()) : this.getPointer(t),
                        s = e.getActiveControl() || "",
                        n = !!s && e.controls[s],
                        o = i && n ? n.getActionHandler(t, e, n) : ed,
                        a = ((t, e, i, r) => {
                            if (!e || !t) return "drag";
                            let s = r.controls[e];
                            return s.getActionName(i, s, r)
                        })(i, s, t, e),
                        l = this._getOriginFromCorner(e, s),
                        c = t[this.centeredKey],
                        u = {
                            target: e,
                            action: a,
                            actionHandler: o,
                            actionPerformed: !1,
                            corner: s,
                            scaleX: e.scaleX,
                            scaleY: e.scaleY,
                            skewX: e.skewX,
                            skewY: e.skewY,
                            offsetX: r.x - e.left,
                            offsetY: r.y - e.top,
                            originX: l.x,
                            originY: l.y,
                            ex: r.x,
                            ey: r.y,
                            lastX: r.x,
                            lastY: r.y,
                            theta: ti(e.angle),
                            width: e.width,
                            height: e.height,
                            shiftKey: t.shiftKey,
                            altKey: c,
                            original: h(h({}, t9(e)), {}, {
                                originX: l.x,
                                originY: l.y
                            })
                        };
                    this._shouldCenterTransform(e, a, c) && (u.originX = P, u.originY = P), this._currentTransform = u, this._beforeTransform(t)
                }
                setCursor(t) {
                    this.upperCanvasEl.style.cursor = t
                }
                _drawSelection(t) {
                    let {
                        x: e,
                        y: i,
                        deltaX: r,
                        deltaY: s
                    } = this._groupSelector, n = new H(e, i).transform(this.viewportTransform), o = new H(e + r, i + s).transform(this.viewportTransform), a = this.selectionLineWidth / 2, h = Math.min(n.x, o.x), l = Math.min(n.y, o.y), c = Math.max(n.x, o.x), u = Math.max(n.y, o.y);
                    this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(h, l, c - h, u - l)), this.selectionLineWidth && this.selectionBorderColor && (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, h += a, l += a, c -= a, u -= a, iR.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(h, l, c - h, u - l))
                }
                findTarget(t) {
                    if (this.skipTargetFind) return;
                    let e = this.getPointer(t, !0),
                        i = this._activeObject,
                        r = this.getActiveObjects();
                    if (this.targets = [], i && r.length >= 1) {
                        if (i._findTargetCorner(e, t1(t))) return i;
                        else if (r.length > 1 && this.searchPossibleTargets([i], e)) return i;
                        else if (i === this.searchPossibleTargets([i], e))
                            if (!this.preserveObjectStacking) return i;
                            else {
                                let r = this.targets;
                                this.targets = [];
                                let s = this.searchPossibleTargets(this._objects, e);
                                return t[this.altSelectionKey] && s && s !== i ? (this.targets = r, i) : s
                            }
                    }
                    return this.searchPossibleTargets(this._objects, e)
                }
                _checkTarget(t, e, i) {
                    if (e && e.visible && e.evented && e.containsPoint(t)) {
                        if (!this.perPixelTargetFind && !e.perPixelTargetFind || e.isEditing) return !0;
                        else if (!this.isTargetTransparent(e, i.x, i.y)) return !0
                    }
                    return !1
                }
                _searchPossibleTargets(t, e) {
                    let i, r = t.length;
                    for (; r--;) {
                        let s = t[r],
                            n = s.group ? this._normalizePointer(s.group, e) : e;
                        if (this._checkTarget(n, s, e)) {
                            if (tX(i = t[r]) && i.subTargetCheck) {
                                let t = this._searchPossibleTargets(i._objects, e);
                                t && this.targets.push(t)
                            }
                            break
                        }
                    }
                    return i
                }
                searchPossibleTargets(t, e) {
                    let i = this._searchPossibleTargets(t, e);
                    return i && tX(i) && i.interactive && this.targets[0] ? this.targets[0] : i
                }
                restorePointerVpt(t) {
                    return t.transform(to(this.viewportTransform))
                }
                getPointer(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._absolutePointer && !e) return this._absolutePointer;
                    if (this._pointer && e) return this._pointer;
                    let i = this.upperCanvasEl,
                        r = i.getBoundingClientRect(),
                        s = t0(t),
                        n = r.width || 0,
                        o = r.height || 0;
                    (!n || !o) && ("top" in r && A in r && (o = Math.abs(r.top - r.bottom)), j in r && E in r && (n = Math.abs(r.right - r.left))), this.calcOffset(), s.x = s.x - this._offset.left, s.y = s.y - this._offset.top, e || (s = this.restorePointerVpt(s));
                    let a = this.getRetinaScaling();
                    1 !== a && (s.x /= a, s.y /= a);
                    let h = 0 === n || 0 === o ? new H(1, 1) : new H(i.width / n, i.height / o);
                    return s.multiply(h)
                }
                _setDimensionsImpl(t, e) {
                    this._resetTransformEventData(), super._setDimensionsImpl(t, e), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop)
                }
                _createCacheCanvas() {
                    this.pixelFindCanvasEl = $(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
                        willReadFrequently: !0
                    }), this.setTargetFindTolerance(this.targetFindTolerance)
                }
                getTopContext() {
                    return this.elements.upper.ctx
                }
                getSelectionContext() {
                    return this.elements.upper.ctx
                }
                getSelectionElement() {
                    return this.elements.upper.el
                }
                getActiveObject() {
                    return this._activeObject
                }
                getActiveSelection() {
                    return this._activeSelection
                }
                getActiveObjects() {
                    let t = this._activeObject;
                    if (t)
                        if (t === this._activeSelection) return [...t._objects];
                        else return [t];
                    return []
                }
                _fireSelectionEvents(t, e) {
                    let i = !1,
                        r = !1,
                        s = this.getActiveObjects(),
                        n = [],
                        o = [];
                    t.forEach(t => {
                        s.includes(t) || (i = !0, t.fire("deselected", {
                            e,
                            target: t
                        }), o.push(t))
                    }), s.forEach(r => {
                        t.includes(r) || (i = !0, r.fire("selected", {
                            e,
                            target: r
                        }), n.push(r))
                    }), t.length > 0 && s.length > 0 ? (r = !0, i && this.fire("selection:updated", {
                        e,
                        selected: n,
                        deselected: o
                    })) : s.length > 0 ? (r = !0, this.fire("selection:created", {
                        e,
                        selected: n
                    })) : t.length > 0 && (r = !0, this.fire("selection:cleared", {
                        e,
                        deselected: o
                    })), r && (this._objectsToRender = void 0)
                }
                setActiveObject(t, e) {
                    let i = this.getActiveObjects(),
                        r = this._setActiveObject(t, e);
                    return this._fireSelectionEvents(i, e), r
                }
                _setActiveObject(t, e) {
                    return !(this._activeObject === t || !this._discardActiveObject(e, t) && this._activeObject || t.onSelect({
                        e
                    })) && (this._activeObject = t, !0)
                }
                _discardActiveObject(t, e) {
                    let i = this._activeObject;
                    return !!i && !i.onDeselect({
                        e: t,
                        object: e
                    }) && (i === this._activeSelection && (this._activeSelection.removeAll(), t6(this._activeSelection)), this._currentTransform && this._currentTransform.target === i && this.endCurrentTransform(t), this._activeObject = void 0, !0)
                }
                discardActiveObject(t) {
                    let e = this.getActiveObjects(),
                        i = this.getActiveObject();
                    e.length && this.fire("before:selection:cleared", {
                        e: t,
                        deselected: [i]
                    });
                    let r = this._discardActiveObject(t);
                    return this._fireSelectionEvents(e, t), r
                }
                setViewportTransform(t) {
                    super.setViewportTransform(t);
                    let e = this._activeObject;
                    e && e.setCoords()
                }
                destroy() {
                    let t = this._activeSelection;
                    t.removeAll(), this._activeSelection = void 0, t.dispose(), super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0
                }
                clear() {
                    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear()
                }
                drawControls(t) {
                    let e = this._activeObject;
                    e && e._renderControls(t)
                }
                _toObject(t, e, i) {
                    let r = this._realizeGroupTransformOnObject(t),
                        s = super._toObject(t, e, i);
                    return t.set(r), s
                }
                _realizeGroupTransformOnObject(t) {
                    if (!t.group || t.group !== this._activeSelection || this._activeObject !== t.group) return {};
                    {
                        let e = tC(t, ["angle", "flipX", "flipY", E, "scaleX", "scaleY", "skewX", "skewY", "top"]);
                        return t4(t, this._activeObject.calcOwnMatrix()), e
                    }
                }
                _setSVGObject(t, e, i) {
                    let r = this._realizeGroupTransformOnObject(e);
                    super._setSVGObject(t, e, i), e.set(r)
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            activeSelection: i = new rc
                        } = e;
                    super(t, c(e, r4)), l(this, "targets", []), l(this, "_hoveredTargets", []), l(this, "_objectsToRender", []), l(this, "_currentTransform", null), l(this, "_groupSelector", null), l(this, "contextTopDirty", !1), l(this, "_activeSelection", void 0), this._activeSelection = i, this._activeSelection.set("canvas", this), this._activeSelection.setCoords()
                }
            }
            l(r8, "ownDefaults", {
                uniformScaling: !0,
                uniScaleKey: "shiftKey",
                centeredScaling: !1,
                centeredRotation: !1,
                centeredKey: "altKey",
                altActionKey: "shiftKey",
                selection: !0,
                selectionKey: "shiftKey",
                selectionColor: "rgba(100, 100, 255, 0.3)",
                selectionDashArray: [],
                selectionBorderColor: "rgba(255, 255, 255, 0.3)",
                selectionLineWidth: 1,
                selectionFullyContained: !1,
                hoverCursor: "move",
                moveCursor: "move",
                defaultCursor: "default",
                freeDrawingCursor: "crosshair",
                notAllowedCursor: "not-allowed",
                perPixelTargetFind: !1,
                targetFindTolerance: 0,
                skipTargetFind: !1,
                stopContextMenu: !1,
                fireRightClick: !1,
                fireMiddleClick: !1,
                enablePointerEvents: !1,
                containerClass: "canvas-container",
                preserveObjectStacking: !1
            });
            class r6 {
                exitTextEditing() {
                    this.target = void 0, this.targets.forEach(t => {
                        t.isEditing && t.exitEditing()
                    })
                }
                add(t) {
                    this.targets.push(t)
                }
                remove(t) {
                    this.unregister(t), V(this.targets, t)
                }
                register(t) {
                    this.target = t
                }
                unregister(t) {
                    t === this.target && (this.target = void 0)
                }
                onMouseMove(t) {
                    var e;
                    (null == (e = this.target) ? void 0 : e.isEditing) && this.target.updateSelectionOnMouseMove(t)
                }
                clear() {
                    this.targets = [], this.target = void 0
                }
                dispose() {
                    this.clear(), this.__disposer(), delete this.__disposer
                }
                constructor(t) {
                    l(this, "targets", []), l(this, "__disposer", void 0);
                    const e = () => {
                            let e = t.getActiveObject();
                            tW(e) && e.hiddenTextarea && e.hiddenTextarea.focus()
                        },
                        i = t.upperCanvasEl;
                    i.addEventListener("click", e), this.__disposer = () => i.removeEventListener("click", e)
                }
            }
            let r9 = ["target", "oldTarget", "fireCanvas", "e"],
                r7 = {
                    passive: !1
                };

            function st(t, e) {
                return !!t.button && t.button === e - 1
            }
            let se = function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    return t.addEventListener(...i)
                },
                si = function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    return t.removeEventListener(...i)
                },
                sr = {
                    mouse: {
                        in: "over",
                        out: "out",
                        targetIn: "mouseover",
                        targetOut: "mouseout",
                        canvasIn: "mouse:over",
                        canvasOut: "mouse:out"
                    },
                    drag: {
                        in: "enter",
                        out: "leave",
                        targetIn: "dragenter",
                        targetOut: "dragleave",
                        canvasIn: "drag:enter",
                        canvasOut: "drag:leave"
                    }
                };
            class ss extends r8 {
                _getEventPrefix() {
                    return this.enablePointerEvents ? "pointer" : "mouse"
                }
                addOrRemove(t, e) {
                    let i = this.upperCanvasEl,
                        r = this._getEventPrefix();
                    t(tH(i), "resize", this._onResize), t(i, r + "down", this._onMouseDown), t(i, "".concat(r, "move"), this._onMouseMove, r7), t(i, "".concat(r, "out"), this._onMouseOut), t(i, "".concat(r, "enter"), this._onMouseEnter), t(i, "wheel", this._onMouseWheel), t(i, "contextmenu", this._onContextMenu), t(i, "dblclick", this._onDoubleClick), t(i, "dragstart", this._onDragStart), t(i, "dragend", this._onDragEnd), t(i, "dragover", this._onDragOver), t(i, "dragenter", this._onDragEnter), t(i, "dragleave", this._onDragLeave), t(i, "drop", this._onDrop), this.enablePointerEvents || t(i, "touchstart", this._onTouchStart, r7)
                }
                removeListeners() {
                    this.addOrRemove(si, "remove");
                    let t = this._getEventPrefix(),
                        e = tz(this.upperCanvasEl);
                    si(e, "".concat(t, "up"), this._onMouseUp), si(e, "touchend", this._onTouchEnd, r7), si(e, "".concat(t, "move"), this._onMouseMove, r7), si(e, "touchmove", this._onMouseMove, r7)
                }
                _onMouseWheel(t) {
                    this.__onMouseWheel(t)
                }
                _onMouseOut(t) {
                    let e = this._hoveredTarget,
                        i = {
                            e: t,
                            isClick: !1,
                            pointer: this.getPointer(t, !0),
                            absolutePointer: this.getPointer(t)
                        };
                    this.fire("mouse:out", h(h({}, i), {}, {
                        target: e
                    })), this._hoveredTarget = void 0, e && e.fire("mouseout", h({}, i)), this._hoveredTargets.forEach(t => {
                        this.fire("mouse:out", h(h({}, i), {}, {
                            target: t
                        })), t && t.fire("mouseout", h({}, i))
                    }), this._hoveredTargets = []
                }
                _onMouseEnter(t) {
                    this._currentTransform || this.findTarget(t) || (this.fire("mouse:over", {
                        e: t,
                        isClick: !1,
                        pointer: this.getPointer(t, !0),
                        absolutePointer: this.getPointer(t)
                    }), this._hoveredTarget = void 0, this._hoveredTargets = [])
                }
                _onDragStart(t) {
                    this._isClick = !1;
                    let e = this.getActiveObject();
                    if (tV(e) && e.onDragStart(t)) {
                        this._dragSource = e;
                        let i = {
                            e: t,
                            target: e
                        };
                        this.fire("dragstart", i), e.fire("dragstart", i), se(this.upperCanvasEl, "drag", this._onDragProgress);
                        return
                    }
                    t2(t)
                }
                _renderDragEffects(t, e, i) {
                    let r = !1,
                        s = this._dropTarget;
                    s && s !== e && s !== i && (s.clearContextTop(), r = !0), null == e || e.clearContextTop(), i !== e && (null == i || i.clearContextTop());
                    let n = this.contextTop;
                    n.save(), n.transform(...this.viewportTransform), e && (n.save(), e.transform(n), e.renderDragSourceEffect(t), n.restore(), r = !0), i && (n.save(), i.transform(n), i.renderDropTargetEffect(t), n.restore(), r = !0), n.restore(), r && (this.contextTopDirty = !0)
                }
                _onDragEnd(t) {
                    let e = !!t.dataTransfer && t.dataTransfer.dropEffect !== F,
                        i = e ? this._activeObject : void 0,
                        r = {
                            e: t,
                            target: this._dragSource,
                            subTargets: this.targets,
                            dragSource: this._dragSource,
                            didDrop: e,
                            dropTarget: i
                        };
                    si(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", r), this._dragSource && this._dragSource.fire("dragend", r), delete this._dragSource, this._onMouseUp(t)
                }
                _onDragProgress(t) {
                    let e = {
                        e: t,
                        target: this._dragSource,
                        dragSource: this._dragSource,
                        dropTarget: this._draggedoverTarget
                    };
                    this.fire("drag", e), this._dragSource && this._dragSource.fire("drag", e)
                }
                findDragTargets(t) {
                    return this.targets = [], {
                        target: this._searchPossibleTargets(this._objects, this.getPointer(t, !0)),
                        targets: [...this.targets]
                    }
                }
                _onDragOver(t) {
                    let e, i = "dragover",
                        {
                            target: r,
                            targets: s
                        } = this.findDragTargets(t),
                        n = this._dragSource,
                        o = {
                            e: t,
                            target: r,
                            subTargets: s,
                            dragSource: n,
                            canDrop: !1,
                            dropTarget: void 0
                        };
                    this.fire(i, o), this._fireEnterLeaveEvents(r, o), r && (r.canDrop(t) && (e = r), r.fire(i, o));
                    for (let r = 0; r < s.length; r++) {
                        let n = s[r];
                        n.canDrop(t) && (e = n), n.fire(i, o)
                    }
                    this._renderDragEffects(t, n, e), this._dropTarget = e
                }
                _onDragEnter(t) {
                    let {
                        target: e,
                        targets: i
                    } = this.findDragTargets(t), r = {
                        e: t,
                        target: e,
                        subTargets: i,
                        dragSource: this._dragSource
                    };
                    this.fire("dragenter", r), this._fireEnterLeaveEvents(e, r)
                }
                _onDragLeave(t) {
                    let e = {
                        e: t,
                        target: this._draggedoverTarget,
                        subTargets: this.targets,
                        dragSource: this._dragSource
                    };
                    this.fire("dragleave", e), this._fireEnterLeaveEvents(void 0, e), this._renderDragEffects(t, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = []
                }
                _onDrop(t) {
                    let {
                        target: e,
                        targets: i
                    } = this.findDragTargets(t), r = this._basicEventHandler("drop:before", {
                        e: t,
                        target: e,
                        subTargets: i,
                        dragSource: this._dragSource,
                        pointer: this.getPointer(t, !0),
                        absolutePointer: this.getPointer(t)
                    });
                    r.didDrop = !1, r.dropTarget = void 0, this._basicEventHandler("drop", r), this.fire("drop:after", r)
                }
                _onContextMenu(t) {
                    let e = this.findTarget(t),
                        i = this.targets || [],
                        r = this._basicEventHandler("contextmenu:before", {
                            e: t,
                            target: e,
                            subTargets: i
                        });
                    return this.stopContextMenu && t2(t), this._basicEventHandler("contextmenu", r), !1
                }
                _onDoubleClick(t) {
                    this._cacheTransformEventData(t), this._handleEvent(t, "dblclick"), this._resetTransformEventData()
                }
                getPointerId(t) {
                    let e = t.changedTouches;
                    return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1
                }
                _isMainEvent(t) {
                    return !0 === t.isPrimary || !1 !== t.isPrimary && ("touchend" === t.type && 0 === t.touches.length || !t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId)
                }
                _onTouchStart(t) {
                    t.preventDefault(), null === this.mainTouchId && (this.mainTouchId = this.getPointerId(t)), this.__onMouseDown(t), this._resetTransformEventData();
                    let e = this.upperCanvasEl,
                        i = this._getEventPrefix(),
                        r = tz(e);
                    se(r, "touchend", this._onTouchEnd, r7), se(r, "touchmove", this._onMouseMove, r7), si(e, "".concat(i, "down"), this._onMouseDown)
                }
                _onMouseDown(t) {
                    this.__onMouseDown(t), this._resetTransformEventData();
                    let e = this.upperCanvasEl,
                        i = this._getEventPrefix();
                    si(e, "".concat(i, "move"), this._onMouseMove, r7);
                    let r = tz(e);
                    se(r, "".concat(i, "up"), this._onMouseUp), se(r, "".concat(i, "move"), this._onMouseMove, r7)
                }
                _onTouchEnd(t) {
                    if (t.touches.length > 0) return;
                    this.__onMouseUp(t), this._resetTransformEventData(), this.mainTouchId = null;
                    let e = this._getEventPrefix(),
                        i = tz(this.upperCanvasEl);
                    si(i, "touchend", this._onTouchEnd, r7), si(i, "touchmove", this._onMouseMove, r7), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
                        se(this.upperCanvasEl, "".concat(e, "down"), this._onMouseDown), this._willAddMouseDown = 0
                    }, 400)
                }
                _onMouseUp(t) {
                    this.__onMouseUp(t), this._resetTransformEventData();
                    let e = this.upperCanvasEl,
                        i = this._getEventPrefix();
                    if (this._isMainEvent(t)) {
                        let t = tz(this.upperCanvasEl);
                        si(t, "".concat(i, "up"), this._onMouseUp), si(t, "".concat(i, "move"), this._onMouseMove, r7), se(e, "".concat(i, "move"), this._onMouseMove, r7)
                    }
                }
                _onMouseMove(t) {
                    let e = this.getActiveObject();
                    !this.allowTouchScrolling && (!e || tV(e) && !e.shouldStartDragging()) && t.preventDefault && t.preventDefault(), this.__onMouseMove(t)
                }
                _onResize() {
                    this.calcOffset(), this._resetTransformEventData()
                }
                _shouldRender(t) {
                    let e = this.getActiveObject();
                    return !!e != !!t || !!e && !!t && e !== t || (tW(e), !1)
                }
                __onMouseUp(t) {
                    let e, i, r = this._currentTransform;
                    this._cacheTransformEventData(t);
                    let s = this._target,
                        n = this._isClick;
                    if (this._handleEvent(t, "up:before"), st(t, 3)) {
                        this.fireRightClick && this._handleEvent(t, "up", 3, n);
                        return
                    }
                    if (st(t, 2)) {
                        this.fireMiddleClick && this._handleEvent(t, "up", 2, n), this._resetTransformEventData();
                        return
                    }
                    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t);
                    if (!this._isMainEvent(t)) return;
                    let o = !1;
                    if (r && (this._finalizeCurrentTransform(t), o = r.actionPerformed), !n) {
                        let e = s === this._activeObject;
                        this.handleSelection(t), o || (o = this._shouldRender(s) || !e && s === this._activeObject)
                    }
                    if (s) {
                        if (i = s._findTargetCorner(this.getPointer(t, !0), t1(t)), s.selectable && s !== this._activeObject && "up" === s.activeOn) this.setActiveObject(s, t), o = !0;
                        else {
                            let n = s.controls[i],
                                o = n && n.getMouseUpHandler(t, s, n);
                            o && (e = this.getPointer(t), o(t, r, e.x, e.y))
                        }
                        s.isMoving = !1
                    }
                    if (r && (r.target !== s || r.corner !== i)) {
                        let i = r.target && r.target.controls[r.corner],
                            s = i && i.getMouseUpHandler(t, r.target, i);
                        e = e || this.getPointer(t), s && s(t, r, e.x, e.y)
                    }
                    this._setCursorFromEvent(t, s), this._handleEvent(t, "up", 1, n), this._groupSelector = null, this._currentTransform = null, s && (s.__corner = void 0), o ? this.requestRenderAll() : n || tW(this._activeObject) && this._activeObject.isEditing || this.renderTop()
                }
                _basicEventHandler(t, e) {
                    let {
                        target: i,
                        subTargets: r = []
                    } = e;
                    this.fire(t, e), i && i.fire(t, e);
                    for (let i = 0; i < r.length; i++) r[i].fire(t, e);
                    return e
                }
                _handleEvent(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = this._target,
                        n = this.targets || [],
                        o = {
                            e: t,
                            target: s,
                            subTargets: n,
                            button: i,
                            isClick: r,
                            pointer: this.getPointer(t, !0),
                            absolutePointer: this.getPointer(t),
                            transform: this._currentTransform
                        };
                    "up" === e && (o.currentTarget = this.findTarget(t), o.currentSubTargets = this.targets), this.fire("mouse:".concat(e), o), s && s.fire("mouse".concat(e), o);
                    for (let t = 0; t < n.length; t++) n[t].fire("mouse".concat(e), o)
                }
                endCurrentTransform(t) {
                    let e = this._currentTransform;
                    this._finalizeCurrentTransform(t), e && e.target && (e.target.isMoving = !1), this._currentTransform = null
                }
                _finalizeCurrentTransform(t) {
                    let e = this._currentTransform,
                        i = e.target,
                        r = {
                            e: t,
                            target: i,
                            transform: e,
                            action: e.action
                        };
                    i._scaling && (i._scaling = !1), i.setCoords(), e.actionPerformed && (this.fire("object:modified", r), i.fire("modified", r))
                }
                _onMouseDownInDrawingMode(t) {
                    this._isCurrentlyDrawing = !0, this.getActiveObject() && (this.discardActiveObject(t), this.requestRenderAll());
                    let e = this.getPointer(t);
                    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e, {
                        e: t,
                        pointer: e
                    }), this._handleEvent(t, "down")
                }
                _onMouseMoveInDrawingMode(t) {
                    if (this._isCurrentlyDrawing) {
                        let e = this.getPointer(t);
                        this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e, {
                            e: t,
                            pointer: e
                        })
                    }
                    this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move")
                }
                _onMouseUpInDrawingMode(t) {
                    let e = this.getPointer(t);
                    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
                        e: t,
                        pointer: e
                    }) : this._isCurrentlyDrawing = !1, this._handleEvent(t, "up")
                }
                __onMouseDown(t) {
                    this._isClick = !0, this._cacheTransformEventData(t), this._handleEvent(t, "down:before");
                    let e = this._target;
                    if (st(t, 3)) {
                        this.fireRightClick && this._handleEvent(t, "down", 3);
                        return
                    }
                    if (st(t, 2)) {
                        this.fireMiddleClick && this._handleEvent(t, "down", 2);
                        return
                    }
                    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t);
                    if (!this._isMainEvent(t) || this._currentTransform) return;
                    let i = this._shouldRender(e),
                        r = !1;
                    if (this.handleMultiSelection(t, e) ? (e = this._activeObject, r = !0, i = !0) : this._shouldClearSelection(t, e) && this.discardActiveObject(t), this.selection && (!e || !e.selectable && !e.isEditing && e !== this._activeObject)) {
                        let e = this.getPointer(t);
                        this._groupSelector = {
                            x: e.x,
                            y: e.y,
                            deltaY: 0,
                            deltaX: 0
                        }
                    }
                    if (e) {
                        let i = e === this._activeObject;
                        e.selectable && "down" === e.activeOn && this.setActiveObject(e, t);
                        let s = e._findTargetCorner(this.getPointer(t, !0), t1(t));
                        if (e === this._activeObject && (s || !r)) {
                            this._setupCurrentTransform(t, e, i);
                            let r = e.controls[s],
                                n = this.getPointer(t),
                                o = r && r.getMouseDownHandler(t, e, r);
                            o && o(t, this._currentTransform, n.x, n.y)
                        }
                    }
                    i && (this._objectsToRender = void 0), this._handleEvent(t, "down"), i && this.requestRenderAll()
                }
                _resetTransformEventData() {
                    this._target = void 0, this._pointer = void 0, this._absolutePointer = void 0
                }
                _cacheTransformEventData(t) {
                    this._resetTransformEventData(), this._pointer = this.getPointer(t, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t)
                }
                _beforeTransform(t) {
                    let e = this._currentTransform;
                    this.fire("before:transform", {
                        e: t,
                        transform: e
                    })
                }
                __onMouseMove(t) {
                    if (this._isClick = !1, this._handleEvent(t, "move:before"), this._cacheTransformEventData(t), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t);
                    if (!this._isMainEvent(t)) return;
                    let e = this._groupSelector;
                    if (e) {
                        let i = this.getPointer(t);
                        e.deltaX = i.x - e.x, e.deltaY = i.y - e.y, this.renderTop()
                    } else if (this._currentTransform) this._transformObject(t);
                    else {
                        let e = this.findTarget(t);
                        this._setCursorFromEvent(t, e), this._fireOverOutEvents(t, e)
                    }
                    this.textEditingManager.onMouseMove(t), this._handleEvent(t, "move"), this._resetTransformEventData()
                }
                _fireOverOutEvents(t, e) {
                    let i = this._hoveredTarget,
                        r = this._hoveredTargets,
                        s = this.targets,
                        n = Math.max(r.length, s.length);
                    this.fireSyntheticInOutEvents("mouse", {
                        e: t,
                        target: e,
                        oldTarget: i,
                        fireCanvas: !0
                    });
                    for (let e = 0; e < n; e++) this.fireSyntheticInOutEvents("mouse", {
                        e: t,
                        target: s[e],
                        oldTarget: r[e]
                    });
                    this._hoveredTarget = e, this._hoveredTargets = this.targets.concat()
                }
                _fireEnterLeaveEvents(t, e) {
                    let i = this._draggedoverTarget,
                        r = this._hoveredTargets,
                        s = this.targets,
                        n = Math.max(r.length, s.length);
                    this.fireSyntheticInOutEvents("drag", h(h({}, e), {}, {
                        target: t,
                        oldTarget: i,
                        fireCanvas: !0
                    }));
                    for (let t = 0; t < n; t++) this.fireSyntheticInOutEvents("drag", h(h({}, e), {}, {
                        target: s[t],
                        oldTarget: r[t]
                    }));
                    this._draggedoverTarget = t
                }
                fireSyntheticInOutEvents(t, e) {
                    let {
                        target: i,
                        oldTarget: r,
                        fireCanvas: s,
                        e: n
                    } = e, o = c(e, r9), {
                        targetIn: a,
                        targetOut: l,
                        canvasIn: u,
                        canvasOut: d
                    } = sr[t], g = r !== i;
                    if (r && g) {
                        let t = h(h({}, o), {}, {
                            e: n,
                            target: r,
                            nextTarget: i,
                            isClick: !1,
                            pointer: this.getPointer(n, !0),
                            absolutePointer: this.getPointer(n)
                        });
                        s && this.fire(u, t), r.fire(l, t)
                    }
                    if (i && g) {
                        let t = h(h({}, o), {}, {
                            e: n,
                            target: i,
                            previousTarget: r,
                            isClick: !1,
                            pointer: this.getPointer(n, !0),
                            absolutePointer: this.getPointer(n)
                        });
                        s && this.fire(d, t), i.fire(a, t)
                    }
                }
                __onMouseWheel(t) {
                    this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData()
                }
                _transformObject(t) {
                    let e = this.getPointer(t),
                        i = this._currentTransform,
                        r = i.target,
                        s = r.group ? ee(e, void 0, r.group.calcTransformMatrix()) : e;
                    i.reset = !1, i.shiftKey = t.shiftKey, i.altKey = !!this.centeredKey && t[this.centeredKey], this._performTransformAction(t, i, s), i.actionPerformed && this.requestRenderAll()
                }
                _performTransformAction(t, e, i) {
                    let r = i.x,
                        s = i.y,
                        n = e.action,
                        o = e.actionHandler,
                        a = !1;
                    o && (a = o(t, e, r, s)), "drag" === n && a && (e.target.isMoving = !0, this.setCursor(e.target.moveCursor || this.moveCursor)), e.actionPerformed = e.actionPerformed || a
                }
                _setCursorFromEvent(t, e) {
                    if (!e) return void this.setCursor(this.defaultCursor);
                    let i = e.hoverCursor || this.hoverCursor,
                        r = this._activeObject === this._activeSelection ? this._activeObject : null,
                        s = (!r || e.group !== r) && e._findTargetCorner(this.getPointer(t, !0));
                    if (s) {
                        let i = e.controls[s];
                        this.setCursor(i.cursorStyleHandler(t, i, e))
                    } else e.subTargetCheck && this.targets.concat().reverse().map(t => {
                        i = t.hoverCursor || i
                    }), this.setCursor(i)
                }
                handleMultiSelection(t, e) {
                    let i = this._activeObject,
                        r = this._activeSelection,
                        s = i === r;
                    if (i && this._isSelectionKeyPressed(t) && this.selection && e && e.selectable && (i !== e || s) && (s || !e.isDescendantOf(i) && !i.isDescendantOf(e)) && !e.onSelect({
                            e: t
                        }) && !i.getActiveControl()) {
                        if (s) {
                            let i = r.getObjects();
                            if (e === r) {
                                let r = this.getPointer(t, !0);
                                if (!(e = this.searchPossibleTargets(i, r) || this.searchPossibleTargets(this._objects, r)) || !e.selectable) return !1
                            }
                            e.group === r ? (r.remove(e), this._hoveredTarget = e, this._hoveredTargets = [...this.targets], 1 === r.size() && this._setActiveObject(r.item(0), t)) : (r.multiSelectAdd(e), this._hoveredTarget = r, this._hoveredTargets = [...this.targets]), this._fireSelectionEvents(i, t)
                        } else tW(i) && i.exitEditing(), r.multiSelectAdd(i, e), this._hoveredTarget = r, this._setActiveObject(r, t), this._fireSelectionEvents([i], t);
                        return !0
                    }
                    return !1
                }
                handleSelection(t) {
                    if (!this.selection || !this._groupSelector) return !1;
                    let {
                        x: e,
                        y: i,
                        deltaX: r,
                        deltaY: s
                    } = this._groupSelector, n = new H(e, i), o = n.add(new H(r, s)), a = n.min(o), h = n.max(o).subtract(a), l = n.eq(o), c = this.collectObjects({
                        left: a.x,
                        top: a.y,
                        width: h.x,
                        height: h.y
                    }, {
                        includeIntersecting: !this.selectionFullyContained
                    }), u = l ? c[0] ? [c[0]] : [] : c.length > 1 ? c.filter(e => !e.onSelect({
                        e: t
                    })).reverse() : c;
                    return 1 === u.length ? this.setActiveObject(u[0], t) : u.length > 1 && (this._activeSelection.add(...u), this.setActiveObject(this._activeSelection, t)), this._groupSelector = null, !0
                }
                clear() {
                    this.textEditingManager.clear(), super.clear()
                }
                destroy() {
                    this.removeListeners(), this.textEditingManager.dispose(), super.destroy()
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(t, e), l(this, "_isClick", void 0), l(this, "textEditingManager", new r6(this)), ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onDoubleClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach(t => {
                        this[t] = this[t].bind(this)
                    }), this.addOrRemove(se, "add")
                }
            }
            let sn = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0
                },
                so = h(h({}, sn), {}, {
                    r1: 0,
                    r2: 0
                }),
                sa = /^(\d+\.\d+)%|(\d+)%$/;

            function sh(t) {
                return t && sa.test(t)
            }

            function sl(t, e) {
                return eB(0, W("number" == typeof t ? t : "string" == typeof t ? parseFloat(t) / (sh(t) ? 100 : 1) : NaN, e), 1)
            }
            let sc = /\s*;\s*/,
                su = /\s*:\s*/;

            function sd(t) {
                return "linearGradient" === t.nodeName || "LINEARGRADIENT" === t.nodeName ? "linear" : "radial"
            }

            function sg(t) {
                return "userSpaceOnUse" === t.getAttribute("gradientUnits") ? "pixels" : "percentage"
            }

            function sf(t, e) {
                return t.getAttribute(e)
            }
            class sp {
                addColorStop(t) {
                    for (let e in t) {
                        let i = new tM(t[e]);
                        this.colorStops.push({
                            offset: parseFloat(e),
                            color: i.toRgb(),
                            opacity: i.getAlpha()
                        })
                    }
                    return this
                }
                toObject(t) {
                    return h(h({}, tC(this, t)), {}, {
                        type: this.type,
                        coords: this.coords,
                        colorStops: this.colorStops,
                        offsetX: this.offsetX,
                        offsetY: this.offsetY,
                        gradientUnits: this.gradientUnits,
                        gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0
                    })
                }
                toSVG(t) {
                    let {
                        additionalTransform: e
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = [], r = this.gradientTransform ? this.gradientTransform.concat() : M.concat(), s = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox", n = this.colorStops.map(t => h({}, t)).sort((t, e) => t.offset - e.offset), o = -this.offsetX, a = -this.offsetY;
                    "objectBoundingBox" === s ? (o /= t.width, a /= t.height) : (o += t.width / 2, a += t.height / 2), t && t.isType("Path") && "percentage" !== this.gradientUnits && (o -= t.pathOffset.x, a -= t.pathOffset.y), r[4] -= o, r[5] -= a;
                    let l = ['id="SVGID_'.concat(this.id, '"'), 'gradientUnits="'.concat(s, '"'), 'gradientTransform="'.concat(e ? e + " " : "").concat(tj(r), '"'), ""].join(" ");
                    if ("linear" === this.type) {
                        let {
                            x1: t,
                            y1: e,
                            x2: r,
                            y2: s
                        } = this.coords;
                        i.push("<linearGradient ", l, ' x1="', t, '" y1="', e, '" x2="', r, '" y2="', s, '">\n')
                    } else if ("radial" === this.type) {
                        let {
                            x1: t,
                            y1: e,
                            x2: r,
                            y2: s,
                            r1: o,
                            r2: a
                        } = this.coords, h = o > a;
                        i.push("<radialGradient ", l, ' cx="', h ? t : r, '" cy="', h ? e : s, '" r="', h ? o : a, '" fx="', h ? r : t, '" fy="', h ? s : e, '">\n'), h && (n.reverse(), n.forEach(t => {
                            t.offset = 1 - t.offset
                        }));
                        let c = Math.min(o, a);
                        if (c > 0) {
                            let t = c / Math.max(o, a);
                            n.forEach(e => {
                                e.offset += t * (1 - e.offset)
                            })
                        }
                    }
                    return n.forEach(t => {
                        let {
                            color: e,
                            offset: r,
                            opacity: s
                        } = t;
                        i.push("<stop ", 'offset="', 100 * r + "%", '" style="stop-color:', e, void 0 !== s ? ";stop-opacity: " + s : ";", '"/>\n')
                    }), i.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), i.join("")
                }
                toLive(t) {
                    let e = this.coords,
                        i = "linear" === this.type ? t.createLinearGradient(e.x1, e.y1, e.x2, e.y2) : t.createRadialGradient(e.x1, e.y1, e.r1, e.x2, e.y2, e.r2);
                    return this.colorStops.forEach(t => {
                        let {
                            color: e,
                            opacity: r,
                            offset: s
                        } = t;
                        i.addColorStop(s, void 0 !== r ? new tM(e).setAlpha(r).toRgba() : e)
                    }), i
                }
                static fromElement(t, e, i) {
                    var r;
                    let s = sg(t),
                        n = e._findCenterFromElement();
                    return new this(h({
                        id: t.getAttribute("id") || void 0,
                        type: sd(t),
                        coords: (r = {
                            width: i.viewBoxWidth || i.width,
                            height: i.viewBoxHeight || i.height
                        }, function(t, e) {
                            let i, {
                                width: r,
                                height: s,
                                gradientUnits: n
                            } = e;
                            return Object.keys(t).reduce((e, o) => {
                                let a = t[o];
                                return "Infinity" === a ? i = 1 : "-Infinity" === a ? i = 0 : (i = "string" == typeof a ? parseFloat(a) : a, "string" == typeof a && sh(a) && (i *= .01, "pixels" === n && (("x1" === o || "x2" === o || "r2" === o) && (i *= r), ("y1" === o || "y2" === o) && (i *= s)))), e[o] = i, e
                            }, {})
                        }("linear" === sd(t) ? {
                            x1: sf(t, "x1") || 0,
                            y1: sf(t, "y1") || 0,
                            x2: sf(t, "x2") || "100%",
                            y2: sf(t, "y2") || 0
                        } : {
                            x1: sf(t, "fx") || sf(t, "cx") || "50%",
                            y1: sf(t, "fy") || sf(t, "cy") || "50%",
                            r1: 0,
                            x2: sf(t, "cx") || "50%",
                            y2: sf(t, "cy") || "50%",
                            r2: sf(t, "r") || "50%"
                        }, h(h({}, r), {}, {
                            gradientUnits: sg(t)
                        }))),
                        colorStops: function(t, e) {
                            let i = [],
                                r = t.getElementsByTagName("stop"),
                                s = sl(e, 1);
                            for (let t = r.length; t--;) i.push(function(t, e) {
                                let i, r, s = t.getAttribute("style");
                                if (s) {
                                    let t = s.split(sc);
                                    "" === t[t.length - 1] && t.pop();
                                    for (let e = t.length; e--;) {
                                        let [s, n] = t[e].split(su).map(t => t.trim());
                                        "stop-color" === s ? i = n : "stop-opacity" === s && (r = n)
                                    }
                                }
                                let n = new tM(i || t.getAttribute("stop-color") || "rgb(0,0,0)");
                                return {
                                    offset: sl(t.getAttribute("offset"), 0),
                                    color: n.toRgb(),
                                    opacity: W(parseFloat(r || t.getAttribute("stop-opacity") || ""), 1) * n.getAlpha() * e
                                }
                            }(r[t], s));
                            return i
                        }(t, i.opacity),
                        gradientUnits: s,
                        gradientTransform: rt(t.getAttribute("gradientTransform") || "")
                    }, "pixels" === s ? {
                        offsetX: e.width / 2 - n.x,
                        offsetY: e.height / 2 - n.y
                    } : {
                        offsetX: 0,
                        offsetY: 0
                    }))
                }
                constructor(t) {
                    let {
                        type: e = "linear",
                        gradientUnits: i = "pixels",
                        coords: r,
                        colorStops: s = [],
                        offsetX: n = 0,
                        offsetY: o = 0,
                        gradientTransform: a,
                        id: l
                    } = t;
                    this.id = l ? "".concat(l, "_").concat(Q()) : Q(), this.type = e, this.gradientUnits = i, this.gradientTransform = a, this.offsetX = n, this.offsetY = o, this.coords = h(h({}, "radial" === this.type ? so : sn), r), this.colorStops = s.slice()
                }
            }
            l(sp, "type", "Gradient"), R.setClass(sp, "gradient");
            let sm = ["source"];
            class s_ {
                get type() {
                    return "pattern"
                }
                set type(t) {
                    console.warn("Setting type has no effect", t)
                }
                isImageSource() {
                    return !!this.source && "string" == typeof this.source.src
                }
                isCanvasSource() {
                    return !!this.source && !!this.source.toDataURL
                }
                sourceToString() {
                    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : ""
                }
                toLive(t) {
                    return !this.source || this.isImageSource() && (!this.source.complete || 0 === this.source.naturalWidth || 0 === this.source.naturalHeight) ? null : t.createPattern(this.source, this.repeat)
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        {
                            repeat: e,
                            crossOrigin: i
                        } = this;
                    return h(h({}, tC(this, t)), {}, {
                        type: "pattern",
                        source: this.sourceToString(),
                        repeat: e,
                        crossOrigin: i,
                        offsetX: tP(this.offsetX, f.NUM_FRACTION_DIGITS),
                        offsetY: tP(this.offsetY, f.NUM_FRACTION_DIGITS),
                        patternTransform: this.patternTransform ? [...this.patternTransform] : null
                    })
                }
                toSVG(t) {
                    let {
                        width: e,
                        height: i
                    } = t, {
                        source: r,
                        repeat: s,
                        id: n
                    } = this, o = W(this.offsetX / e, 0), a = W(this.offsetY / i, 0), h = "repeat-y" === s || "no-repeat" === s ? 1 + Math.abs(o || 0) : W(r.width / e, 0), l = "repeat-x" === s || "no-repeat" === s ? 1 + Math.abs(a || 0) : W(r.height / i, 0);
                    return ['<pattern id="SVGID_'.concat(n, '" x="').concat(o, '" y="').concat(a, '" width="').concat(h, '" height="').concat(l, '">'), '<image x="0" y="0" width="'.concat(r.width, '" height="').concat(r.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'), "</pattern>\n"].join("\n")
                }
                static async fromObject(t, e) {
                    let {
                        source: i
                    } = t, r = c(t, sm), s = await tv(i, h(h({}, e), {}, {
                        crossOrigin: r.crossOrigin
                    }));
                    return new this(h(h({}, r), {}, {
                        source: s
                    }))
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, "repeat", "repeat"), l(this, "offsetX", 0), l(this, "offsetY", 0), l(this, "crossOrigin", ""), l(this, "patternTransform", null), this.id = Q(), Object.assign(this, t)
                }
            }
            l(s_, "type", "Pattern"), R.setClass(s_), R.setClass(s_, "pattern");
            class sv {
                _setBrushStyles(t) {
                    t.strokeStyle = this.color, t.lineWidth = this.width, t.lineCap = this.strokeLineCap, t.miterLimit = this.strokeMiterLimit, t.lineJoin = this.strokeLineJoin, t.setLineDash(this.strokeDashArray || [])
                }
                _saveAndTransform(t) {
                    let e = this.canvas.viewportTransform;
                    t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
                }
                needsFullRender() {
                    return 1 > new tM(this.color).getAlpha() || !!this.shadow
                }
                _setShadow() {
                    if (!this.shadow || !this.canvas) return;
                    let t = this.canvas,
                        e = this.shadow,
                        i = t.contextTop,
                        r = t.getZoom() * t.getRetinaScaling();
                    i.shadowColor = e.color, i.shadowBlur = e.blur * r, i.shadowOffsetX = e.offsetX * r, i.shadowOffsetY = e.offsetY * r
                }
                _resetShadow() {
                    let t = this.canvas.contextTop;
                    t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0
                }
                _isOutSideCanvas(t) {
                    return t.x < 0 || t.x > this.canvas.getWidth() || t.y < 0 || t.y > this.canvas.getHeight()
                }
                constructor(t) {
                    l(this, "color", "rgb(0, 0, 0)"), l(this, "width", 1), l(this, "shadow", null), l(this, "strokeLineCap", "round"), l(this, "strokeLineJoin", "round"), l(this, "strokeMiterLimit", 10), l(this, "strokeDashArray", null), l(this, "limitedToCanvasSize", !1), this.canvas = t
                }
            }
            let sy = ["path", "left", "top"],
                sx = ["d"];
            class sC extends iR {
                _setPath(t, e) {
                    this.path = rV(Array.isArray(t) ? t : rQ(t)), this.setBoundingBox(e)
                }
                _findCenterFromElement() {
                    let t = this._calcBoundsFromPath();
                    return new H(t.left + t.width / 2, t.top + t.height / 2)
                }
                _renderPathCommands(t) {
                    let e = 0,
                        i = 0,
                        r = 0,
                        s = 0,
                        n = 0,
                        o = 0,
                        a = -this.pathOffset.x,
                        h = -this.pathOffset.y;
                    for (let l of (t.beginPath(), this.path)) switch (l[0]) {
                        case "L":
                            r = l[1], s = l[2], t.lineTo(r + a, s + h);
                            break;
                        case "M":
                            r = l[1], s = l[2], e = r, i = s, t.moveTo(r + a, s + h);
                            break;
                        case "C":
                            r = l[5], s = l[6], n = l[3], o = l[4], t.bezierCurveTo(l[1] + a, l[2] + h, n + a, o + h, r + a, s + h);
                            break;
                        case "Q":
                            t.quadraticCurveTo(l[1] + a, l[2] + h, l[3] + a, l[4] + h), r = l[3], s = l[4], n = l[1], o = l[2];
                            break;
                        case "Z":
                            r = e, s = i, t.closePath()
                    }
                }
                _render(t) {
                    this._renderPathCommands(t), this._renderPaintInOrder(t)
                }
                toString() {
                    return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>")
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return h(h({}, super.toObject(t)), {}, {
                        path: e6(this.path)
                    })
                }
                toDatalessObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = this.toObject(t);
                    return this.sourcePath && (delete e.path, e.sourcePath = this.sourcePath), e
                }
                _toSVG() {
                    let t = r0(this.path, f.NUM_FRACTION_DIGITS);
                    return ["<path ", "COMMON_PARTS", 'd="'.concat(t, '" stroke-linecap="round" />\n')]
                }
                _getOffsetTransform() {
                    let t = f.NUM_FRACTION_DIGITS;
                    return " translate(".concat(tP(-this.pathOffset.x, t), ", ").concat(tP(-this.pathOffset.y, t), ")")
                }
                toClipPathSVG(t) {
                    let e = this._getOffsetTransform();
                    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
                        reviver: t,
                        additionalTransform: e
                    })
                }
                toSVG(t) {
                    let e = this._getOffsetTransform();
                    return this._createBaseSVGMarkup(this._toSVG(), {
                        reviver: t,
                        additionalTransform: e
                    })
                }
                complexity() {
                    return this.path.length
                }
                setDimensions() {
                    this.setBoundingBox()
                }
                setBoundingBox(t) {
                    let {
                        width: e,
                        height: i,
                        pathOffset: r
                    } = this._calcDimensions();
                    this.set({
                        width: e,
                        height: i,
                        pathOffset: r
                    }), t && this.setPositionByOrigin(r, P, P)
                }
                _calcBoundsFromPath() {
                    let t = [],
                        e = 0,
                        i = 0,
                        r = 0,
                        s = 0;
                    for (let n of this.path) switch (n[0]) {
                        case "L":
                            r = n[1], s = n[2], t.push(new H(e, i), new H(r, s));
                            break;
                        case "M":
                            r = n[1], s = n[2], e = r, i = s;
                            break;
                        case "C":
                            t.push(...rY(r, s, n[1], n[2], n[3], n[4], n[5], n[6])), r = n[5], s = n[6];
                            break;
                        case "Q":
                            t.push(...rY(r, s, n[1], n[2], n[1], n[2], n[3], n[4])), r = n[3], s = n[4];
                            break;
                        case "Z":
                            r = e, s = i
                    }
                    return t5(t)
                }
                _calcDimensions() {
                    let t = this._calcBoundsFromPath();
                    return h(h({}, t), {}, {
                        pathOffset: new H(t.left + t.width / 2, t.top + t.height / 2)
                    })
                }
                static fromObject(t) {
                    return this._fromObject(t, {
                        extraParam: "path"
                    })
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, this.ATTRIBUTE_NAMES, i),
                        {
                            d: s
                        } = r;
                    return new this(s, h(h(h({}, c(r, sx)), e), {}, {
                        left: void 0,
                        top: void 0
                    }))
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            path: i,
                            left: r,
                            top: s
                        } = e;
                    super(c(e, sy)), this._setPath(t || [], !0), "number" == typeof r && this.set(E, r), "number" == typeof s && this.set("top", s)
                }
            }
            l(sC, "type", "Path"), l(sC, "cacheProperties", [...e7, "path", "fillRule"]), l(sC, "ATTRIBUTE_NAMES", [...iX, "d"]), R.setClass(sC), R.setSVGClass(sC);
            class sb extends sv {
                needsFullRender() {
                    return super.needsFullRender() || this._hasStraightLine
                }
                static drawSegment(t, e, i) {
                    let r = e.midPointFrom(i);
                    return t.quadraticCurveTo(e.x, e.y, r.x, r.y), r
                }
                onMouseDown(t, e) {
                    let {
                        e: i
                    } = e;
                    this.canvas._isMainEvent(i) && (this.drawStraightLine = !!this.straightLineKey && i[this.straightLineKey], this._prepareForDrawing(t), this._addPoint(t), this._render())
                }
                onMouseMove(t, e) {
                    let {
                        e: i
                    } = e;
                    if (this.canvas._isMainEvent(i) && (this.drawStraightLine = !!this.straightLineKey && i[this.straightLineKey], !(!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) && this._addPoint(t) && this._points.length > 1))
                        if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
                        else {
                            let t = this._points,
                                e = t.length,
                                i = this.canvas.contextTop;
                            this._saveAndTransform(i), this.oldEnd && (i.beginPath(), i.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = sb.drawSegment(i, t[e - 2], t[e - 1]), i.stroke(), i.restore()
                        }
                }
                onMouseUp(t) {
                    let {
                        e
                    } = t;
                    return !this.canvas._isMainEvent(e) || (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1)
                }
                _prepareForDrawing(t) {
                    this._reset(), this._addPoint(t), this.canvas.contextTop.moveTo(t.x, t.y)
                }
                _addPoint(t) {
                    return !(this._points.length > 1 && t.eq(this._points[this._points.length - 1])) && (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(t), !0)
                }
                _reset() {
                    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1
                }
                _render() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas.contextTop,
                        e = this._points[0],
                        i = this._points[1];
                    if (this._saveAndTransform(t), t.beginPath(), 2 === this._points.length && e.x === i.x && e.y === i.y) {
                        let t = this.width / 1e3;
                        e.x -= t, i.x += t
                    }
                    t.moveTo(e.x, e.y);
                    for (let r = 1; r < this._points.length; r++) sb.drawSegment(t, e, i), e = this._points[r], i = this._points[r + 1];
                    t.lineTo(e.x, e.y), t.stroke(), t.restore()
                }
                convertPointsToSVGPath(t) {
                    return r$(t, this.width / 1e3)
                }
                createPath(t) {
                    let e = new sC(t, {
                        fill: null,
                        stroke: this.color,
                        strokeWidth: this.width,
                        strokeLineCap: this.strokeLineCap,
                        strokeMiterLimit: this.strokeMiterLimit,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeDashArray: this.strokeDashArray
                    });
                    return this.shadow && (this.shadow.affectStroke = !0, e.shadow = new e8(this.shadow)), e
                }
                decimatePoints(t, e) {
                    if (t.length <= 2) return t;
                    let i = t[0],
                        r = Math.pow(e / this.canvas.getZoom(), 2),
                        s = t.length - 1,
                        n = [i];
                    for (let e = 1; e < s - 1; e++) Math.pow(i.x - t[e].x, 2) + Math.pow(i.y - t[e].y, 2) >= r && n.push(i = t[e]);
                    return n.push(t[s]), n
                }
                _finalizeAndAddPath() {
                    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
                    let t = this.convertPointsToSVGPath(this._points);
                    if ("M 0 0 Q 0 0 0 0 L 0 0" === r0(t)) return void this.canvas.requestRenderAll();
                    let e = this.createPath(t);
                    this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", {
                        path: e
                    }), this.canvas.add(e), this.canvas.requestRenderAll(), e.setCoords(), this._resetShadow(), this.canvas.fire("path:created", {
                        path: e
                    })
                }
                constructor(t) {
                    super(t), l(this, "decimate", .4), l(this, "drawStraightLine", !1), l(this, "straightLineKey", "shiftKey"), this._points = [], this._hasStraightLine = !1
                }
            }
            let sS = ["left", "top", "radius"],
                sw = ["radius", "startAngle", "endAngle"];
            class sT extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), sT.ownDefaults)
                }
                _set(t, e) {
                    return super._set(t, e), "radius" === t && this.setRadius(e), this
                }
                _render(t) {
                    t.beginPath(), t.arc(0, 0, this.radius, ti(this.startAngle), ti(this.endAngle), !1), this._renderPaintInOrder(t)
                }
                getRadiusX() {
                    return this.get("radius") * this.get("scaleX")
                }
                getRadiusY() {
                    return this.get("radius") * this.get("scaleY")
                }
                setRadius(t) {
                    this.radius = t, this.set({
                        width: 2 * t,
                        height: 2 * t
                    })
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return super.toObject([...sw, ...t])
                }
                _toSVG() {
                    let t = (this.endAngle - this.startAngle) % 360;
                    if (0 === t) return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', "".concat(this.radius), '" />\n'];
                    {
                        let {
                            radius: e
                        } = this, i = ti(this.startAngle), r = ti(this.endAngle), s = G(i) * e, n = z(i) * e, o = G(r) * e, a = z(r) * e;
                        return ['<path d="M '.concat(s, " ").concat(n), " A ".concat(e, " ").concat(e), " 0 ", "".concat(t > 180 ? "1" : "0", " 1"), " ".concat(o, " ").concat(a), '" ', "COMMON_PARTS", " />\n"]
                    }
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, this.ATTRIBUTE_NAMES, i),
                        {
                            left: s = 0,
                            top: n = 0,
                            radius: o = 0
                        } = r;
                    return new this(h(h({}, c(r, sS)), {}, {
                        radius: o,
                        left: s - o,
                        top: n - o
                    }))
                }
                static fromObject(t) {
                    return super._fromObject(t)
                }
            }
            l(sT, "type", "Circle"), l(sT, "cacheProperties", [...e7, ...sw]), l(sT, "ownDefaults", {
                radius: 0,
                startAngle: 0,
                endAngle: 360
            }), l(sT, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ...iX]), R.setClass(sT), R.setSVGClass(sT);
            class sO extends sv {
                drawDot(t) {
                    let e = this.addPoint(t),
                        i = this.canvas.contextTop;
                    this._saveAndTransform(i), this.dot(i, e), i.restore()
                }
                dot(t, e) {
                    t.fillStyle = e.fill, t.beginPath(), t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), t.closePath(), t.fill()
                }
                onMouseDown(t) {
                    this.points = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t)
                }
                _render() {
                    let t = this.canvas.contextTop,
                        e = this.points;
                    this._saveAndTransform(t);
                    for (let i = 0; i < e.length; i++) this.dot(t, e[i]);
                    t.restore()
                }
                onMouseMove(t) {
                    !0 === this.limitedToCanvasSize && this._isOutSideCanvas(t) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(t), this._render()) : this.drawDot(t))
                }
                onMouseUp() {
                    let t = this.canvas.renderOnAddRemove;
                    this.canvas.renderOnAddRemove = !1;
                    let e = [];
                    for (let t = 0; t < this.points.length; t++) {
                        let i = this.points[t],
                            r = new sT({
                                radius: i.radius,
                                left: i.x,
                                top: i.y,
                                originX: P,
                                originY: P,
                                fill: i.fill
                            });
                        this.shadow && (r.shadow = new e8(this.shadow)), e.push(r)
                    }
                    let i = new rl(e, {
                        canvas: this.canvas
                    });
                    this.canvas.fire("before:path:created", {
                        path: i
                    }), this.canvas.add(i), this.canvas.fire("path:created", {
                        path: i
                    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.requestRenderAll()
                }
                addPoint(t) {
                    let {
                        x: e,
                        y: i
                    } = t, r = {
                        x: e,
                        y: i,
                        radius: Y(Math.max(0, this.width - 20), this.width + 20) / 2,
                        fill: new tM(this.color).setAlpha(Y(0, 100) / 100).toRgba()
                    };
                    return this.points.push(r), r
                }
                constructor(t) {
                    super(t), l(this, "width", 10), this.points = []
                }
            }
            class sk extends sv {
                onMouseDown(t) {
                    this.sprayChunks = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t), this.renderChunck(this.sprayChunk)
                }
                onMouseMove(t) {
                    !0 === this.limitedToCanvasSize && this._isOutSideCanvas(t) || (this.addSprayChunk(t), this.renderChunck(this.sprayChunk))
                }
                onMouseUp() {
                    let t = this.canvas.renderOnAddRemove;
                    this.canvas.renderOnAddRemove = !1;
                    let e = [];
                    for (let t = 0; t < this.sprayChunks.length; t++) {
                        let i = this.sprayChunks[t];
                        for (let t = 0; t < i.length; t++) {
                            let r = i[t],
                                s = new ra({
                                    width: r.width,
                                    height: r.width,
                                    left: r.x + 1,
                                    top: r.y + 1,
                                    originX: P,
                                    originY: P,
                                    fill: this.color
                                });
                            e.push(s)
                        }
                    }
                    let i = new rl(this.optimizeOverlapping ? function(t) {
                        let e = {},
                            i = [];
                        for (let r = 0, s; r < t.length; r++) e[s = "".concat(t[r].left).concat(t[r].top)] || (e[s] = !0, i.push(t[r]));
                        return i
                    }(e) : e, {
                        objectCaching: !0,
                        layout: "fixed",
                        subTargetCheck: !1,
                        interactive: !1
                    });
                    this.shadow && i.set("shadow", new e8(this.shadow)), this.canvas.fire("before:path:created", {
                        path: i
                    }), this.canvas.add(i), this.canvas.fire("path:created", {
                        path: i
                    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.requestRenderAll()
                }
                renderChunck(t) {
                    let e = this.canvas.contextTop;
                    e.fillStyle = this.color, this._saveAndTransform(e);
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        e.globalAlpha = r.opacity, e.fillRect(r.x, r.y, r.width, r.width)
                    }
                    e.restore()
                }
                _render() {
                    let t = this.canvas.contextTop;
                    t.fillStyle = this.color, this._saveAndTransform(t);
                    for (let t = 0; t < this.sprayChunks.length; t++) this.renderChunck(this.sprayChunks[t]);
                    t.restore()
                }
                addSprayChunk(t) {
                    this.sprayChunk = [];
                    let e = this.width / 2;
                    for (let i = 0; i < this.density; i++) this.sprayChunk.push({
                        x: Y(t.x - e, t.x + e),
                        y: Y(t.y - e, t.y + e),
                        width: this.dotWidthVariance ? Y(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth,
                        opacity: this.randomOpacity ? Y(0, 100) / 100 : 1
                    });
                    this.sprayChunks.push(this.sprayChunk)
                }
                constructor(t) {
                    super(t), l(this, "width", 10), l(this, "density", 20), l(this, "dotWidth", 1), l(this, "dotWidthVariance", 1), l(this, "randomOpacity", !1), l(this, "optimizeOverlapping", !0), this.sprayChunks = [], this.sprayChunk = []
                }
            }
            class sD extends sb {
                getPatternSrc() {
                    let t = $(),
                        e = t.getContext("2d");
                    return t.width = t.height = 25, e && (e.fillStyle = this.color, e.beginPath(), e.arc(10, 10, 10, 0, 2 * Math.PI, !1), e.closePath(), e.fill()), t
                }
                getPattern(t) {
                    return t.createPattern(this.source || this.getPatternSrc(), "repeat")
                }
                _setBrushStyles(t) {
                    super._setBrushStyles(t);
                    let e = this.getPattern(t);
                    e && (t.strokeStyle = e)
                }
                createPath(t) {
                    let e = super.createPath(t),
                        i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
                    return e.stroke = new s_({
                        source: this.source || this.getPatternSrc(),
                        offsetX: -i.x,
                        offsetY: -i.y
                    }), e
                }
                constructor(t) {
                    super(t)
                }
            }
            let sM = ["x1", "y1", "x2", "y2"],
                sP = ["x1", "y1", "x2", "y2"],
                sE = ["x1", "x2", "y1", "y2"];
            class sA extends iR {
                _setWidthHeight() {
                    let {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: r
                    } = this;
                    this.width = Math.abs(i - t), this.height = Math.abs(r - e);
                    let {
                        left: s,
                        top: n,
                        width: o,
                        height: a
                    } = t5([{
                        x: t,
                        y: e
                    }, {
                        x: i,
                        y: r
                    }]), h = new H(s + o / 2, n + a / 2);
                    this.setPositionByOrigin(h, P, P)
                }
                _set(t, e) {
                    return super._set(t, e), sE.includes(t) && this._setWidthHeight(), this
                }
                _render(t) {
                    t.beginPath();
                    let e = this.calcLinePoints();
                    t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2), t.lineWidth = this.strokeWidth;
                    let i = t.strokeStyle;
                    if (tB(this.stroke)) t.strokeStyle = this.stroke.toLive(t);
                    else {
                        var r;
                        t.strokeStyle = null != (r = this.stroke) ? r : t.fillStyle
                    }
                    this.stroke && this._renderStroke(t), t.strokeStyle = i
                }
                _findCenterFromElement() {
                    return new H((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2)
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return h(h({}, super.toObject(t)), this.calcLinePoints())
                }
                _getNonTransformedDimensions() {
                    let t = super._getNonTransformedDimensions();
                    return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth), 0 === this.height && (t.x -= this.strokeWidth)), t
                }
                calcLinePoints() {
                    let {
                        x1: t,
                        x2: e,
                        y1: i,
                        y2: r,
                        width: s,
                        height: n
                    } = this, o = t <= e ? -1 : 1, a = i <= r ? -1 : 1;
                    return {
                        x1: o * s / 2,
                        x2: -(o * s) / 2,
                        y1: a * n / 2,
                        y2: -(a * n) / 2
                    }
                }
                _toSVG() {
                    let {
                        x1: t,
                        x2: e,
                        y1: i,
                        y2: r
                    } = this.calcLinePoints();
                    return ["<line ", "COMMON_PARTS", 'x1="'.concat(t, '" y1="').concat(i, '" x2="').concat(e, '" y2="').concat(r, '" />\n')]
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, this.ATTRIBUTE_NAMES, i),
                        {
                            x1: s = 0,
                            y1: n = 0,
                            x2: o = 0,
                            y2: a = 0
                        } = r;
                    return new this([s, n, o, a], c(r, sM))
                }
                static fromObject(t) {
                    let {
                        x1: e,
                        y1: i,
                        x2: r,
                        y2: s
                    } = t, n = c(t, sP);
                    return this._fromObject(h(h({}, n), {}, {
                        points: [e, i, r, s]
                    }), {
                        extraParam: "points"
                    })
                }
                constructor() {
                    let [t, e, i, r] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0], s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(h(h({}, s), {}, {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: r
                    })), this._setWidthHeight();
                    const {
                        left: n,
                        top: o
                    } = s;
                    "number" == typeof n && this.set(E, n), "number" == typeof o && this.set("top", o)
                }
            }
            l(sA, "type", "Line"), l(sA, "cacheProperties", [...e7, ...sE]), l(sA, "ATTRIBUTE_NAMES", iX.concat(sE)), R.setClass(sA), R.setSVGClass(sA);
            class sj extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), sj.ownDefaults)
                }
                _render(t) {
                    let e = this.width / 2,
                        i = this.height / 2;
                    t.beginPath(), t.moveTo(-e, i), t.lineTo(0, -i), t.lineTo(e, i), t.closePath(), this._renderPaintInOrder(t)
                }
                _toSVG() {
                    let t = this.width / 2,
                        e = this.height / 2;
                    return ["<polygon ", "COMMON_PARTS", 'points="', "".concat(-t, " ").concat(e, ",0 ").concat(-e, ",").concat(t, " ").concat(e), '" />']
                }
            }
            l(sj, "type", "Triangle"), l(sj, "ownDefaults", {
                width: 100,
                height: 100
            }), R.setClass(sj), R.setSVGClass(sj);
            let sF = ["rx", "ry"];
            class sL extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), sL.ownDefaults)
                }
                _set(t, e) {
                    switch (super._set(t, e), t) {
                        case "rx":
                            this.rx = e, this.set("width", 2 * e);
                            break;
                        case "ry":
                            this.ry = e, this.set("height", 2 * e)
                    }
                    return this
                }
                getRx() {
                    return this.get("rx") * this.get("scaleX")
                }
                getRy() {
                    return this.get("ry") * this.get("scaleY")
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return super.toObject([...sF, ...t])
                }
                _toSVG() {
                    return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, '" />\n')]
                }
                _render(t) {
                    t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, k, !1), t.restore(), this._renderPaintInOrder(t)
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, this.ATTRIBUTE_NAMES, i);
                    return r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, new this(r)
                }
            }

            function sB(t) {
                if (!t) return [];
                let e = t.replace(/,/g, " ").trim().split(/\s+/),
                    i = [];
                for (let t = 0; t < e.length; t += 2) i.push({
                    x: parseFloat(e[t]),
                    y: parseFloat(e[t + 1])
                });
                return i
            }
            l(sL, "type", "Ellipse"), l(sL, "cacheProperties", [...e7, ...sF]), l(sL, "ownDefaults", {
                rx: 0,
                ry: 0
            }), l(sL, "ATTRIBUTE_NAMES", [...iX, "cx", "cy", "rx", "ry"]), R.setClass(sL), R.setSVGClass(sL);
            let sR = ["left", "top"],
                sI = {
                    exactBoundingBox: !1
                };
            class sX extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), sX.ownDefaults)
                }
                isOpen() {
                    return !0
                }
                _projectStrokeOnPoints(t) {
                    return rp(this.points, t, this.isOpen())
                }
                _calcDimensions(t) {
                    t = h({
                        scaleX: this.scaleX,
                        scaleY: this.scaleY,
                        skewX: this.skewX,
                        skewY: this.skewY,
                        strokeLineCap: this.strokeLineCap,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeMiterLimit: this.strokeMiterLimit,
                        strokeUniform: this.strokeUniform,
                        strokeWidth: this.strokeWidth
                    }, t || {});
                    let e = this.exactBoundingBox ? this._projectStrokeOnPoints(t).map(t => t.projectedPoint) : this.points;
                    if (0 === e.length) return {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        pathOffset: new H,
                        strokeOffset: new H,
                        strokeDiff: new H
                    };
                    let i = t5(e),
                        r = tm(h(h({}, t), {}, {
                            scaleX: 1,
                            scaleY: 1
                        })),
                        s = t5(this.points.map(t => tn(t, r, !0))),
                        n = i.left + i.width / 2,
                        o = i.top + i.height / 2,
                        a = n - o * Math.tan(ti(this.skewX)),
                        l = o - a * Math.tan(ti(this.skewY)),
                        c = new H(this.scaleX, this.scaleY);
                    return h(h({}, i), {}, {
                        pathOffset: new H(a, l),
                        strokeOffset: new H(s.left, s.top).subtract(new H(i.left, i.top)).multiply(c),
                        strokeDiff: new H(i.width, i.height).subtract(new H(s.width, s.height)).multiply(c)
                    })
                }
                _findCenterFromElement() {
                    let t = t5(this.points);
                    return new H(t.left + t.width / 2, t.top + t.height / 2)
                }
                setDimensions() {
                    this.setBoundingBox()
                }
                setBoundingBox(t) {
                    let {
                        left: e,
                        top: i,
                        width: r,
                        height: s,
                        pathOffset: n,
                        strokeOffset: o,
                        strokeDiff: a
                    } = this._calcDimensions();
                    this.set({
                        width: r,
                        height: s,
                        pathOffset: n,
                        strokeOffset: o,
                        strokeDiff: a
                    }), t && this.setPositionByOrigin(new H(e + r / 2, i + s / 2), P, P)
                }
                _getNonTransformedDimensions() {
                    return this.exactBoundingBox ? new H(this.width, this.height) : super._getNonTransformedDimensions()
                }
                _getTransformedDimensions() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!this.exactBoundingBox) return super._getTransformedDimensions(t);
                    {
                        var e, i, r, s;
                        let n;
                        if (Object.keys(t).some(t => this.strokeUniform || this.constructor.layoutProperties.includes(t))) {
                            let {
                                width: r,
                                height: s
                            } = this._calcDimensions(t);
                            n = new H(null != (e = t.width) ? e : r, null != (i = t.height) ? i : s)
                        } else n = new H(null != (r = t.width) ? r : this.width, null != (s = t.height) ? s : this.height);
                        return n.multiply(new H(t.scaleX || this.scaleX, t.scaleY || this.scaleY))
                    }
                }
                _set(t, e) {
                    let i = this.initialized && this[t] !== e,
                        r = super._set(t, e);
                    return this.exactBoundingBox && i && (("scaleX" === t || "scaleY" === t) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t)) && this.setDimensions(), r
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return h(h({}, super.toObject(t)), {}, {
                        points: e6(this.points)
                    })
                }
                _toSVG() {
                    let t = [],
                        e = this.pathOffset.x,
                        i = this.pathOffset.y,
                        r = f.NUM_FRACTION_DIGITS;
                    for (let s = 0, n = this.points.length; s < n; s++) t.push(tP(this.points[s].x - e, r), ",", tP(this.points[s].y - i, r), " ");
                    return ["<".concat(this.constructor.type.toLowerCase(), " "), "COMMON_PARTS", 'points="'.concat(t.join(""), '" />\n')]
                }
                _render(t) {
                    let e = this.points.length,
                        i = this.pathOffset.x,
                        r = this.pathOffset.y;
                    if (!(!e || isNaN(this.points[e - 1].y))) {
                        t.beginPath(), t.moveTo(this.points[0].x - i, this.points[0].y - r);
                        for (let s = 0; s < e; s++) {
                            let e = this.points[s];
                            t.lineTo(e.x - i, e.y - r)
                        }
                        this.isOpen() || t.closePath(), this._renderPaintInOrder(t)
                    }
                }
                complexity() {
                    return this.points.length
                }
                static async fromElement(t, e, i) {
                    return new this(sB(t.getAttribute("points")), h(h({}, c(rs(t, this.ATTRIBUTE_NAMES, i), sR)), e))
                }
                static fromObject(t) {
                    return this._fromObject(t, {
                        extraParam: "points"
                    })
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(h({
                        points: t
                    }, e)), l(this, "strokeDiff", void 0);
                    const {
                        left: i,
                        top: r
                    } = e;
                    this.initialized = !0, this.setBoundingBox(!0), "number" == typeof i && this.set(E, i), "number" == typeof r && this.set("top", r)
                }
            }
            l(sX, "ownDefaults", sI), l(sX, "type", "Polyline"), l(sX, "layoutProperties", ["skewX", "skewY", "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]), l(sX, "cacheProperties", [...e7, "points"]), l(sX, "ATTRIBUTE_NAMES", [...iX]), R.setClass(sX), R.setSVGClass(sX);
            class sY extends sX {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), sX.ownDefaults)
                }
                isOpen() {
                    return !1
                }
            }
            l(sY, "ownDefaults", sI), l(sY, "type", "Polygon"), R.setClass(sY), R.setSVGClass(sY);
            let sW = ["fontSize", "fontWeight", "fontFamily", "fontStyle"],
                sV = ["underline", "overline", "linethrough"],
                sG = [...sW, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"],
                sz = [...sG, ...sV, "textBackgroundColor", "direction"],
                sH = [...sW, ...sV, "stroke", "strokeWidth", "fill", "deltaY", "textBackgroundColor"],
                sU = "justify",
                sN = "justify-left",
                sq = "justify-right",
                sK = "justify-center";
            class sJ extends iR {
                isEmptyStyles(t) {
                    if (!this.styles || void 0 !== t && !this.styles[t]) return !0;
                    let e = void 0 === t ? this.styles : {
                        line: this.styles[t]
                    };
                    for (let t in e)
                        for (let i in e[t])
                            for (let r in e[t][i]) return !1;
                    return !0
                }
                styleHas(t, e) {
                    if (!this.styles || void 0 !== e && !this.styles[e]) return !1;
                    let i = void 0 === e ? this.styles : {
                        0: this.styles[e]
                    };
                    for (let e in i)
                        for (let r in i[e])
                            if (void 0 !== i[e][r][t]) return !0;
                    return !1
                }
                cleanStyle(t) {
                    if (!this.styles) return !1;
                    let e = this.styles,
                        i = 0,
                        r, s, n = !0,
                        o = 0;
                    for (let o in e) {
                        for (let a in r = 0, e[o]) {
                            let h = e[o][a] || {},
                                l = void 0 !== h[t];
                            i++, l ? (s ? h[t] !== s && (n = !1) : s = h[t], h[t] === this[t] && delete h[t]) : n = !1, 0 !== Object.keys(h).length ? r++ : delete e[o][a]
                        }
                        0 === r && delete e[o]
                    }
                    for (let t = 0; t < this._textLines.length; t++) o += this._textLines[t].length;
                    n && i === o && (this[t] = s, this.removeStyle(t))
                }
                removeStyle(t) {
                    let e, i, r;
                    if (!this.styles) return;
                    let s = this.styles;
                    for (i in s) {
                        for (r in e = s[i]) delete e[r][t], 0 === Object.keys(e[r]).length && delete e[r];
                        0 === Object.keys(e).length && delete s[i]
                    }
                }
                _extendStyles(t, e) {
                    let {
                        lineIndex: i,
                        charIndex: r
                    } = this.get2DCursorLocation(t);
                    this._getLineStyle(i) || this._setLineStyle(i), Object.keys(this._getStyleDeclaration(i, r)).length || this._setStyleDeclaration(i, r, {}), Object.assign(this._getStyleDeclaration(i, r), e)
                }
                getSelectionStyles(t, e, i) {
                    let r = [];
                    for (let s = t; s < (e || t); s++) r.push(this.getStyleAtPosition(s, i));
                    return r
                }
                getStyleAtPosition(t, e) {
                    let {
                        lineIndex: i,
                        charIndex: r
                    } = this.get2DCursorLocation(t);
                    return e ? this.getCompleteStyleDeclaration(i, r) : this._getStyleDeclaration(i, r)
                }
                setSelectionStyles(t, e, i) {
                    for (let r = e; r < (i || e); r++) this._extendStyles(r, t);
                    this._forceClearCache = !0
                }
                _getStyleDeclaration(t, e) {
                    var i;
                    let r = this.styles && this.styles[t];
                    return r && null != (i = r[e]) ? i : {}
                }
                getCompleteStyleDeclaration(t, e) {
                    return h(h({}, tC(this, this.constructor._styleProperties)), this._getStyleDeclaration(t, e))
                }
                _setStyleDeclaration(t, e, i) {
                    this.styles[t][e] = i
                }
                _deleteStyleDeclaration(t, e) {
                    delete this.styles[t][e]
                }
                _getLineStyle(t) {
                    return !!this.styles[t]
                }
                _setLineStyle(t) {
                    this.styles[t] = {}
                }
                _deleteLineStyle(t) {
                    delete this.styles[t]
                }
            }
            l(sJ, "_styleProperties", sH);
            let sZ = /  +/g,
                sQ = /"/g;

            function s$(t, e, i, r, s) {
                return "		".concat(tL(t, {
                    left: e,
                    top: i,
                    width: r,
                    height: s
                }), "\n")
            }
            let s0 = ["textAnchor", "textDecoration", "dx", "dy", "top", "left", "fontSize", "strokeWidth"];
            class s1 extends sJ {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), s1.ownDefaults)
                }
                setPathInfo() {
                    let t = this.path;
                    t && (t.segmentsInfo = rJ(t.path))
                }
                _splitText() {
                    let t = this._splitTextIntoLines(this.text);
                    return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t
                }
                initDimensions() {
                    this._splitText(), this._clearCache(), this.dirty = !0, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(sU) && this.enlargeSpaces()
                }
                enlargeSpaces() {
                    let t, e, i, r, s, n, o;
                    for (let a = 0, h = this._textLines.length; a < h; a++)
                        if (!(this.textAlign !== sU && (a === h - 1 || this.isEndOfWrapping(a))) && (r = 0, s = this._textLines[a], (e = this.getLineWidth(a)) < this.width && (o = this.textLines[a].match(this._reSpacesAndTabs)))) {
                            i = o.length, t = (this.width - e) / i;
                            for (let e = 0; e <= s.length; e++) n = this.__charBounds[a][e], this._reSpaceAndTab.test(s[e]) ? (n.width += t, n.kernedWidth += t, n.left += r, r += t) : n.left += r
                        }
                }
                isEndOfWrapping(t) {
                    return t === this._textLines.length - 1
                }
                missingNewlineOffset(t) {
                    return 1
                }
                get2DCursorLocation(t, e) {
                    let i, r = e ? this._unwrappedTextLines : this._textLines;
                    for (i = 0; i < r.length; i++) {
                        if (t <= r[i].length) return {
                            lineIndex: i,
                            charIndex: t
                        };
                        t -= r[i].length + this.missingNewlineOffset(i, e)
                    }
                    return {
                        lineIndex: i - 1,
                        charIndex: r[i - 1].length < t ? r[i - 1].length : t
                    }
                }
                toString() {
                    return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>')
                }
                _getCacheCanvasDimensions() {
                    let t = super._getCacheCanvasDimensions(),
                        e = this.fontSize;
                    return t.width += e * t.zoomX, t.height += e * t.zoomY, t
                }
                _render(t) {
                    let e = this.path;
                    e && !e.isNotVisible() && e._render(t), this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough")
                }
                _renderText(t) {
                    "stroke" === this.paintFirst ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t))
                }
                _setTextStyles(t, e, i) {
                    if (t.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
                        case P:
                            t.textBaseline = "middle";
                            break;
                        case "ascender":
                            t.textBaseline = "top";
                            break;
                        case "descender":
                            t.textBaseline = A
                    }
                    t.font = this._getFontDeclaration(e, i)
                }
                calcTextWidth() {
                    let t = this.getLineWidth(0);
                    for (let e = 1, i = this._textLines.length; e < i; e++) {
                        let i = this.getLineWidth(e);
                        i > t && (t = i)
                    }
                    return t
                }
                _renderTextLine(t, e, i, r, s, n) {
                    this._renderChars(t, e, i, r, s, n)
                }
                _renderTextLinesBackground(t) {
                    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
                    let e = t.fillStyle,
                        i = this._getLeftOffset(),
                        r = this._getTopOffset();
                    for (let e = 0, s = this._textLines.length; e < s; e++) {
                        let s, n, o = this.getHeightOfLine(e);
                        if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e)) {
                            r += o;
                            continue
                        }
                        let a = this._textLines[e].length,
                            h = this._getLineLeftOffset(e),
                            l = 0,
                            c = 0,
                            u = this.getValueOfPropertyAt(e, 0, "textBackgroundColor");
                        for (let d = 0; d < a; d++) {
                            let a = this.__charBounds[e][d];
                            n = this.getValueOfPropertyAt(e, d, "textBackgroundColor"), this.path ? (t.save(), t.translate(a.renderLeft, a.renderTop), t.rotate(a.angle), t.fillStyle = n, n && t.fillRect(-a.width / 2, -o / this.lineHeight * (1 - this._fontSizeFraction), a.width, o / this.lineHeight), t.restore()) : n !== u ? (s = i + h + c, "rtl" === this.direction && (s = this.width - s - l), t.fillStyle = u, u && t.fillRect(s, r, l, o / this.lineHeight), c = a.left, l = a.width, u = n) : l += a.kernedWidth
                        }
                        n && !this.path && (s = i + h + c, "rtl" === this.direction && (s = this.width - s - l), t.fillStyle = n, t.fillRect(s, r, l, o / this.lineHeight)), r += o
                    }
                    t.fillStyle = e, this._removeShadow(t)
                }
                _measureChar(t, e, i, r) {
                    let s, o, a, h, l = S.getFontCache(e),
                        c = this._getFontDeclaration(e),
                        u = i + t,
                        d = i && c === this._getFontDeclaration(r),
                        g = e.fontSize / this.CACHE_FONT_SIZE;
                    if (i && void 0 !== l[i] && (a = l[i]), void 0 !== l[t] && (h = s = l[t]), d && void 0 !== l[u] && (h = (o = l[u]) - a), void 0 === s || void 0 === a || void 0 === o) {
                        let r = (n || (n = $().getContext("2d")), n);
                        this._setTextStyles(r, e, !0), void 0 === s && (h = s = r.measureText(t).width, l[t] = s), void 0 === a && d && i && (a = r.measureText(i).width, l[i] = a), d && void 0 === o && (o = r.measureText(u).width, l[u] = o, h = o - a)
                    }
                    return {
                        width: s * g,
                        kernedWidth: h * g
                    }
                }
                getHeightOfChar(t, e) {
                    return this.getValueOfPropertyAt(t, e, "fontSize")
                }
                measureLine(t) {
                    let e = this._measureLine(t);
                    return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e
                }
                _measureLine(t) {
                    let e = 0,
                        i, r, s = this.pathSide === j,
                        n = this.path,
                        o = this._textLines[t],
                        a = o.length,
                        h = Array(a);
                    this.__charBounds[t] = h;
                    for (let s = 0; s < a; s++) {
                        let n = o[s];
                        r = this._getGraphemeBox(n, t, s, i), h[s] = r, e += r.kernedWidth, i = n
                    }
                    if (h[a] = {
                            left: r ? r.left + r.width : 0,
                            width: 0,
                            kernedWidth: 0,
                            height: this.fontSize,
                            deltaY: 0
                        }, n && n.segmentsInfo) {
                        let t = 0,
                            i = n.segmentsInfo[n.segmentsInfo.length - 1].length;
                        switch (this.textAlign) {
                            case E:
                                t = s ? i - e : 0;
                                break;
                            case P:
                                t = (i - e) / 2;
                                break;
                            case j:
                                t = s ? 0 : i - e
                        }
                        t += this.pathStartOffset * (s ? -1 : 1);
                        for (let e = s ? a - 1 : 0; s ? e >= 0 : e < a; s ? e-- : e++) r = h[e], t > i ? t %= i : t < 0 && (t += i), this._setGraphemeOnPath(t, r), t += r.kernedWidth
                    }
                    return {
                        width: e,
                        numOfSpaces: 0
                    }
                }
                _setGraphemeOnPath(t, e) {
                    let i = t + e.kernedWidth / 2,
                        r = this.path,
                        s = rZ(r.path, i, r.segmentsInfo);
                    e.renderLeft = s.x - r.pathOffset.x, e.renderTop = s.y - r.pathOffset.y, e.angle = s.angle + (this.pathSide === j ? Math.PI : 0)
                }
                _getGraphemeBox(t, e, i, r, s) {
                    let n = this.getCompleteStyleDeclaration(e, i),
                        o = r ? this.getCompleteStyleDeclaration(e, i - 1) : {},
                        a = this._measureChar(t, n, r, o),
                        h = a.kernedWidth,
                        l = a.width,
                        c;
                    0 !== this.charSpacing && (l += c = this._getWidthOfCharSpacing(), h += c);
                    let u = {
                        width: l,
                        left: 0,
                        height: n.fontSize,
                        kernedWidth: h,
                        deltaY: n.deltaY
                    };
                    if (i > 0 && !s) {
                        let t = this.__charBounds[e][i - 1];
                        u.left = t.left + t.width + a.kernedWidth - a.width
                    }
                    return u
                }
                getHeightOfLine(t) {
                    if (this.__lineHeights[t]) return this.__lineHeights[t];
                    let e = this.getHeightOfChar(t, 0);
                    for (let i = 1, r = this._textLines[t].length; i < r; i++) e = Math.max(this.getHeightOfChar(t, i), e);
                    return this.__lineHeights[t] = e * this.lineHeight * this._fontSizeMult
                }
                calcTextHeight() {
                    let t, e = 0;
                    for (let i = 0, r = this._textLines.length; i < r; i++) t = this.getHeightOfLine(i), e += i === r - 1 ? t / this.lineHeight : t;
                    return e
                }
                _getLeftOffset() {
                    return "ltr" === this.direction ? -this.width / 2 : this.width / 2
                }
                _getTopOffset() {
                    return -this.height / 2
                }
                _renderTextCommon(t, e) {
                    t.save();
                    let i = 0,
                        r = this._getLeftOffset(),
                        s = this._getTopOffset();
                    for (let n = 0, o = this._textLines.length; n < o; n++) {
                        let o = this.getHeightOfLine(n),
                            a = o / this.lineHeight,
                            h = this._getLineLeftOffset(n);
                        this._renderTextLine(e, t, this._textLines[n], r + h, s + i + a, n), i += o
                    }
                    t.restore()
                }
                _renderTextFill(t) {
                    (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText")
                }
                _renderTextStroke(t) {
                    (!this.stroke || 0 === this.strokeWidth) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore())
                }
                _renderChars(t, e, i, r, s, n) {
                    let o = this.getHeightOfLine(n),
                        a = this.textAlign.includes(sU),
                        h = this.path,
                        l = !a && 0 === this.charSpacing && this.isEmptyStyles(n) && !h,
                        c = "ltr" === this.direction,
                        u = "ltr" === this.direction ? 1 : -1,
                        d = e.direction,
                        g, f, p = "",
                        m, _ = 0,
                        v, y;
                    if (e.save(), d !== this.direction && (e.canvas.setAttribute("dir", c ? "ltr" : "rtl"), e.direction = c ? "ltr" : "rtl", e.textAlign = c ? E : j), s -= o * this._fontSizeFraction / this.lineHeight, l) {
                        this._renderChar(t, e, n, 0, i.join(""), r, s), e.restore();
                        return
                    }
                    for (let o = 0, l = i.length - 1; o <= l; o++) v = o === l || this.charSpacing || h, p += i[o], m = this.__charBounds[n][o], 0 === _ ? (r += u * (m.kernedWidth - m.width), _ += m.width) : _ += m.kernedWidth, a && !v && this._reSpaceAndTab.test(i[o]) && (v = !0), v || (v = rm(g = g || this.getCompleteStyleDeclaration(n, o), f = this.getCompleteStyleDeclaration(n, o + 1), !1)), v && (h ? (e.save(), e.translate(m.renderLeft, m.renderTop), e.rotate(m.angle), this._renderChar(t, e, n, o, p, -_ / 2, 0), e.restore()) : (y = r, this._renderChar(t, e, n, o, p, y, s)), p = "", g = f, r += u * _, _ = 0);
                    e.restore()
                }
                _applyPatternGradientTransformText(t) {
                    let e = $(),
                        i = this.width + this.strokeWidth,
                        r = this.height + this.strokeWidth,
                        s = e.getContext("2d");
                    return e.width = i, e.height = r, s.beginPath(), s.moveTo(0, 0), s.lineTo(i, 0), s.lineTo(i, r), s.lineTo(0, r), s.closePath(), s.translate(i / 2, r / 2), s.fillStyle = t.toLive(s), this._applyPatternGradientTransform(s, t), s.fill(), s.createPattern(e, "no-repeat")
                }
                handleFiller(t, e, i) {
                    let r, s;
                    if (tB(i))
                        if ("percentage" === i.gradientUnits || i.gradientTransform || i.patternTransform) return r = -this.width / 2, s = -this.height / 2, t.translate(r, s), t[e] = this._applyPatternGradientTransformText(i), {
                            offsetX: r,
                            offsetY: s
                        };
                        else return t[e] = i.toLive(t), this._applyPatternGradientTransform(t, i);
                    return t[e] = i, {
                        offsetX: 0,
                        offsetY: 0
                    }
                }
                _setStrokeStyles(t, e) {
                    let {
                        stroke: i,
                        strokeWidth: r
                    } = e;
                    return t.lineWidth = r, t.lineCap = this.strokeLineCap, t.lineDashOffset = this.strokeDashOffset, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, this.handleFiller(t, "strokeStyle", i)
                }
                _setFillStyles(t, e) {
                    let {
                        fill: i
                    } = e;
                    return this.handleFiller(t, "fillStyle", i)
                }
                _renderChar(t, e, i, r, s, n, o) {
                    let a = this._getStyleDeclaration(i, r),
                        h = this.getCompleteStyleDeclaration(i, r),
                        l = "fillText" === t && h.fill,
                        c = "strokeText" === t && h.stroke && h.strokeWidth;
                    if (c || l) {
                        if (e.save(), e.font = this._getFontDeclaration(h), a.textBackgroundColor && this._removeShadow(e), a.deltaY && (o += a.deltaY), l) {
                            let t = this._setFillStyles(e, h);
                            e.fillText(s, n - t.offsetX, o - t.offsetY)
                        }
                        if (c) {
                            let t = this._setStrokeStyles(e, h);
                            e.strokeText(s, n - t.offsetX, o - t.offsetY)
                        }
                        e.restore()
                    }
                }
                setSuperscript(t, e) {
                    this._setScript(t, e, this.superscript)
                }
                setSubscript(t, e) {
                    this._setScript(t, e, this.subscript)
                }
                _setScript(t, e, i) {
                    let r = this.get2DCursorLocation(t, !0),
                        s = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "fontSize"),
                        n = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "deltaY"),
                        o = {
                            fontSize: s * i.size,
                            deltaY: n + s * i.baseline
                        };
                    this.setSelectionStyles(o, t, e)
                }
                _getLineLeftOffset(t) {
                    let e = this.getLineWidth(t),
                        i = this.width - e,
                        r = this.textAlign,
                        s = this.direction,
                        n = this.isEndOfWrapping(t),
                        o = 0;
                    return r !== sU && (r !== sK || n) && (r !== sq || n) && (r !== sN || n) ? (r === P && (o = i / 2), r === j && (o = i), r === sK && (o = i / 2), r === sq && (o = i), "rtl" === s && (r === j || r === sU || r === sq ? o = 0 : r === E || r === sN ? o = -i : (r === P || r === sK) && (o = -i / 2)), o) : 0
                }
                _clearCache() {
                    this._forceClearCache = !1, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = []
                }
                getLineWidth(t) {
                    if (void 0 !== this.__lineWidths[t]) return this.__lineWidths[t];
                    let {
                        width: e
                    } = this.measureLine(t);
                    return this.__lineWidths[t] = e, e
                }
                _getWidthOfCharSpacing() {
                    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0
                }
                getValueOfPropertyAt(t, e, i) {
                    var r;
                    return null != (r = this._getStyleDeclaration(t, e)[i]) ? r : this[i]
                }
                _renderTextDecoration(t, e) {
                    if (!this[e] && !this.styleHas(e)) return;
                    let i = this._getTopOffset(),
                        r = this._getLeftOffset(),
                        s = this.path,
                        n = this._getWidthOfCharSpacing(),
                        o = this.offsets[e];
                    for (let a = 0, h = this._textLines.length; a < h; a++) {
                        let h, l, c = this.getHeightOfLine(a);
                        if (!this[e] && !this.styleHas(e, a)) {
                            i += c;
                            continue
                        }
                        let u = this._textLines[a],
                            d = c / this.lineHeight,
                            g = this._getLineLeftOffset(a),
                            f = 0,
                            p = 0,
                            m = this.getValueOfPropertyAt(a, 0, e),
                            _ = this.getValueOfPropertyAt(a, 0, "fill"),
                            v = i + d * (1 - this._fontSizeFraction),
                            y = this.getHeightOfChar(a, 0),
                            x = this.getValueOfPropertyAt(a, 0, "deltaY");
                        for (let i = 0, n = u.length; i < n; i++) {
                            let n = this.__charBounds[a][i];
                            h = this.getValueOfPropertyAt(a, i, e), l = this.getValueOfPropertyAt(a, i, "fill");
                            let c = this.getHeightOfChar(a, i),
                                u = this.getValueOfPropertyAt(a, i, "deltaY");
                            if (s && h && l) t.save(), t.fillStyle = _, t.translate(n.renderLeft, n.renderTop), t.rotate(n.angle), t.fillRect(-n.kernedWidth / 2, o * c + u, n.kernedWidth, this.fontSize / 15), t.restore();
                            else if ((h !== m || l !== _ || c !== y || u !== x) && p > 0) {
                                let e = r + g + f;
                                "rtl" === this.direction && (e = this.width - e - p), m && _ && (t.fillStyle = _, t.fillRect(e, v + o * y + x, p, this.fontSize / 15)), f = n.left, p = n.width, m = h, _ = l, y = c, x = u
                            } else p += n.kernedWidth
                        }
                        let C = r + g + f;
                        "rtl" === this.direction && (C = this.width - C - p), t.fillStyle = l, h && l && t.fillRect(C, v + o * y + x, p - n, this.fontSize / 15), i += c
                    }
                    this._removeShadow(t)
                }
                _getFontDeclaration() {
                    let {
                        fontFamily: t = this.fontFamily,
                        fontStyle: e = this.fontStyle,
                        fontWeight: i = this.fontWeight,
                        fontSize: r = this.fontSize
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0, n = t.includes("'") || t.includes('"') || t.includes(",") || s1.genericFonts.includes(t.toLowerCase()) ? t : '"'.concat(t, '"');
                    return [e, i, "".concat(s ? this.CACHE_FONT_SIZE : r, "px"), n].join(" ")
                }
                render(t) {
                    !this.visible || (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (this._forceClearCache && this.initDimensions(), super.render(t))
                }
                graphemeSplit(t) {
                    return rb(t)
                }
                _splitTextIntoLines(t) {
                    let e = t.split(this._reNewline),
                        i = Array(e.length),
                        r = ["\n"],
                        s = [];
                    for (let t = 0; t < e.length; t++) i[t] = this.graphemeSplit(e[t]), s = s.concat(i[t], r);
                    return s.pop(), {
                        _unwrappedLines: i,
                        lines: e,
                        graphemeText: s,
                        graphemeLines: i
                    }
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return h(h({}, super.toObject([...sz, ...t])), {}, {
                        styles: r_(this.styles, this.text)
                    }, this.path ? {
                        path: this.path.toObject()
                    } : {})
                }
                set(t, e) {
                    let {
                        textLayoutProperties: i
                    } = this.constructor;
                    super.set(t, e);
                    let r = !1,
                        s = !1;
                    if ("object" == typeof t)
                        for (let e in t) "path" === e && this.setPathInfo(), r = r || i.includes(e), s = s || "path" === e;
                    else r = i.includes(t), s = "path" === t;
                    return s && this.setPathInfo(), r && this.initialized && (this.initDimensions(), this.setCoords()), this
                }
                complexity() {
                    return 1
                }
                static async fromElement(t, e, i) {
                    let r = rs(t, s1.ATTRIBUTE_NAMES, i),
                        s = h(h({}, e), r),
                        {
                            textAnchor: n = E,
                            textDecoration: o = "",
                            dx: a = 0,
                            dy: l = 0,
                            top: u = 0,
                            left: d = 0,
                            fontSize: g = 16,
                            strokeWidth: f = 1
                        } = s,
                        p = c(s, s0),
                        m = new this((t.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "), h({
                            left: d + a,
                            top: u + l,
                            underline: o.includes("underline"),
                            overline: o.includes("overline"),
                            linethrough: o.includes("line-through"),
                            strokeWidth: 0,
                            fontSize: g
                        }, p)),
                        _ = m.getScaledHeight() / m.height,
                        v = (m.height + m.strokeWidth) * m.lineHeight - m.height,
                        y = m.getScaledHeight() + v * _,
                        x = 0;
                    return n === P && (x = m.getScaledWidth() / 2), n === j && (x = m.getScaledWidth()), m.set({
                        left: m.left - x,
                        top: m.top - (y - m.fontSize * (.07 + m._fontSizeFraction)) / m.lineHeight,
                        strokeWidth: f
                    }), m
                }
                static fromObject(t) {
                    return this._fromObject(h(h({}, t), {}, {
                        styles: rv(t.styles || {}, t.text)
                    }), {
                        extraParam: "text"
                    })
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(h(h({}, e), {}, {
                        text: t,
                        styles: (null == e ? void 0 : e.styles) || {}
                    })), l(this, "__charBounds", []), this.initialized = !0, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords()
                }
            }
            l(s1, "textLayoutProperties", sG), l(s1, "cacheProperties", [...e7, ...sz]), l(s1, "ownDefaults", {
                _reNewline: L,
                _reSpacesAndTabs: /[ \t\r]/g,
                _reSpaceAndTab: /[ \t\r]/,
                _reWords: /\S+/g,
                fontSize: 40,
                fontWeight: "normal",
                fontFamily: "Times New Roman",
                underline: !1,
                overline: !1,
                linethrough: !1,
                textAlign: E,
                fontStyle: "normal",
                lineHeight: 1.16,
                superscript: {
                    size: .6,
                    baseline: -.35
                },
                subscript: {
                    size: .6,
                    baseline: .11
                },
                textBackgroundColor: "",
                stroke: null,
                shadow: null,
                path: void 0,
                pathStartOffset: 0,
                pathSide: E,
                pathAlign: "baseline",
                _fontSizeFraction: .222,
                offsets: {
                    underline: .1,
                    linethrough: -.315,
                    overline: -.88
                },
                _fontSizeMult: 1.13,
                charSpacing: 0,
                deltaY: 0,
                direction: "ltr",
                CACHE_FONT_SIZE: 400,
                MIN_TEXT_WIDTH: 2
            }), l(s1, "type", "Text"), l(s1, "genericFonts", ["sans-serif", "serif", "cursive", "fantasy", "monospace"]), l(s1, "ATTRIBUTE_NAMES", iX.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), iB(s1, [class extends eg {
                _toSVG() {
                    let t = this._getSVGLeftTopOffsets(),
                        e = this._getSVGTextAndBg(t.textTop, t.textLeft);
                    return this._wrapSVGTextAndBg(e)
                }
                toSVG(t) {
                    return this._createBaseSVGMarkup(this._toSVG(), {
                        reviver: t,
                        noStyle: !0,
                        withShadow: !0
                    })
                }
                _getSVGLeftTopOffsets() {
                    return {
                        textLeft: -this.width / 2,
                        textTop: -this.height / 2,
                        lineTop: this.getHeightOfLine(0)
                    }
                }
                _wrapSVGTextAndBg(t) {
                    let {
                        textBgRects: e,
                        textSpans: i
                    } = t, r = this.getSvgTextDecoration(this);
                    return [e.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(sQ, "'"), '" ') : "", this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : "", this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "", this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "", r ? 'text-decoration="'.concat(r, '" ') : "", "rtl" === this.direction ? 'direction="'.concat(this.direction, '" ') : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", i.join(""), "</text>\n"]
                }
                _getSVGTextAndBg(t, e) {
                    let i = [],
                        r = [],
                        s = t,
                        n;
                    this.backgroundColor && r.push(...s$(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
                    for (let t = 0, o = this._textLines.length; t < o; t++) n = this._getLineLeftOffset(t), "rtl" === this.direction && (n += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", t)) && this._setSVGTextLineBg(r, t, e + n, s), this._setSVGTextLineText(i, t, e + n, s), s += this.getHeightOfLine(t);
                    return {
                        textSpans: i,
                        textBgRects: r
                    }
                }
                _createTextCharSpan(t, e, i, r) {
                    let s = this.getSvgSpanStyles(e, t !== t.trim() || !!t.match(sZ)),
                        n = e.deltaY,
                        o = n ? ' dy="'.concat(tP(n, f.NUM_FRACTION_DIGITS), '" ') : "";
                    return '<tspan x="'.concat(tP(i, f.NUM_FRACTION_DIGITS), '" y="').concat(tP(r, f.NUM_FRACTION_DIGITS), '" ').concat(o).concat(s ? 'style="'.concat(s, '"') : "", ">").concat(rC(t), "</tspan>")
                }
                _setSVGTextLineText(t, e, i, r) {
                    let s = this.getHeightOfLine(e),
                        n = this.textAlign.includes(sU),
                        o = this._textLines[e],
                        a, h, l = "",
                        c, u, d = 0,
                        g;
                    r += s * (1 - this._fontSizeFraction) / this.lineHeight;
                    for (let s = 0, f = o.length - 1; s <= f; s++) g = s === f || this.charSpacing, l += o[s], c = this.__charBounds[e][s], 0 === d ? (i += c.kernedWidth - c.width, d += c.width) : d += c.kernedWidth, n && !g && this._reSpaceAndTab.test(o[s]) && (g = !0), g || (g = rm(a = a || this.getCompleteStyleDeclaration(e, s), h = this.getCompleteStyleDeclaration(e, s + 1), !0)), g && (u = this._getStyleDeclaration(e, s), t.push(this._createTextCharSpan(l, u, i, r)), l = "", a = h, "rtl" === this.direction ? i -= d : i += d, d = 0)
                }
                _setSVGTextLineBg(t, e, i, r) {
                    let s = this._textLines[e],
                        n = this.getHeightOfLine(e) / this.lineHeight,
                        o = 0,
                        a = 0,
                        h, l = this.getValueOfPropertyAt(e, 0, "textBackgroundColor");
                    for (let c = 0; c < s.length; c++) {
                        let {
                            left: s,
                            width: u,
                            kernedWidth: d
                        } = this.__charBounds[e][c];
                        (h = this.getValueOfPropertyAt(e, c, "textBackgroundColor")) !== l ? (l && t.push(...s$(l, i + a, r, o, n)), a = s, o = u, l = h) : o += d
                    }
                    h && t.push(...s$(l, i + a, r, o, n))
                }
                _getSVGLineTopOffset(t) {
                    let e = 0,
                        i;
                    for (i = 0; i < t; i++) e += this.getHeightOfLine(i);
                    let r = this.getHeightOfLine(i);
                    return {
                        lineTop: e,
                        offset: (this._fontSizeMult - this._fontSizeFraction) * r / (this.lineHeight * this._fontSizeMult)
                    }
                }
                getSvgStyles(t) {
                    return "".concat(super.getSvgStyles(t), " white-space: pre;")
                }
                getSvgSpanStyles(t, e) {
                    let {
                        fontFamily: i,
                        strokeWidth: r,
                        stroke: s,
                        fill: n,
                        fontSize: o,
                        fontStyle: a,
                        fontWeight: h,
                        deltaY: l
                    } = t, c = this.getSvgTextDecoration(t);
                    return [s ? tF("stroke", s) : "", r ? "stroke-width: ".concat(r, "; ") : "", i ? "font-family: ".concat(!i.includes("'") && !i.includes('"') ? "'".concat(i, "'") : i, "; ") : "", o ? "font-size: ".concat(o, "px; ") : "", a ? "font-style: ".concat(a, "; ") : "", h ? "font-weight: ".concat(h, "; ") : "", c ? "text-decoration: ".concat(c, "; ") : c, n ? tF("fill", n) : "", l ? "baseline-shift: ".concat(-l, "; ") : "", e ? "white-space: pre; " : ""].join("")
                }
                getSvgTextDecoration(t) {
                    return ["overline", "underline", "line-through"].filter(e => t[e.replace("-", "")]).join(" ")
                }
            }]), R.setClass(s1), R.setSVGClass(s1);
            class s2 {
                isPointerOverSelection(t) {
                    let e = this.target,
                        i = e.getSelectionStartFromPointer(t);
                    return e.isEditing && i >= e.selectionStart && i <= e.selectionEnd && e.selectionStart < e.selectionEnd
                }
                start(t) {
                    return this.__mouseDownInPlace = this.isPointerOverSelection(t)
                }
                isActive() {
                    return this.__mouseDownInPlace
                }
                end(t) {
                    let e = this.isActive();
                    return e && !this.__dragStartFired && (this.target.setCursorByClick(t), this.target.initDelayedCursor(!0)), this.__mouseDownInPlace = !1, this.__dragStartFired = !1, this.__isDraggingOver = !1, e
                }
                getDragStartSelection() {
                    return this.__dragStartSelection
                }
                setDragImage(t, e) {
                    var i;
                    let {
                        selectionStart: r,
                        selectionEnd: s
                    } = e, n = this.target, o = n.canvas, a = new H(n.flipX ? -1 : 1, n.flipY ? -1 : 1), h = n._getCursorBoundaries(r), l = new H(h.left + h.leftOffset, h.top + h.topOffset).multiply(a).transform(n.calcTransformMatrix()), c = o.getPointer(t).subtract(l), u = o._isRetinaScaling(), d = n.getCanvasRetinaScaling(), g = n.getBoundingRect(!0), f = l.subtract(new H(g.left, g.top)), p = o.viewportTransform, m = f.add(c).transform(p, !0), _ = n.backgroundColor, v = e6(n.styles);
                    n.backgroundColor = "";
                    let y = {
                        stroke: "transparent",
                        fill: "transparent",
                        textBackgroundColor: "transparent"
                    };
                    n.setSelectionStyles(y, 0, r), n.setSelectionStyles(y, s, n.text.length), n.dirty = !0;
                    let x = n.toCanvasElement({
                        enableRetinaScaling: u,
                        viewportTransform: !0
                    });
                    n.backgroundColor = _, n.styles = v, n.dirty = !0, tU(x, {
                        position: "fixed",
                        left: "".concat(-x.width, "px"),
                        border: F,
                        width: "".concat(x.width / d, "px"),
                        height: "".concat(x.height / d, "px")
                    }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
                        x.remove()
                    }, tz(t.target || this.target.hiddenTextarea).body.appendChild(x), null == (i = t.dataTransfer) || i.setDragImage(x, m.x, m.y)
                }
                onDragStart(t) {
                    this.__dragStartFired = !0;
                    let e = this.target,
                        i = this.isActive();
                    if (i && t.dataTransfer) {
                        let i = this.__dragStartSelection = {
                                selectionStart: e.selectionStart,
                                selectionEnd: e.selectionEnd
                            },
                            r = e._text.slice(i.selectionStart, i.selectionEnd).join(""),
                            s = h({
                                text: e.text,
                                value: r
                            }, i);
                        t.dataTransfer.setData("text/plain", r), t.dataTransfer.setData("application/fabric", JSON.stringify({
                            value: r,
                            styles: e.getSelectionStyles(i.selectionStart, i.selectionEnd, !0)
                        })), t.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t, s)
                    }
                    return e.abortCursorAnimation(), i
                }
                canDrop(t) {
                    if (this.target.editable && !this.target.getActiveControl() && !t.defaultPrevented) {
                        if (this.isActive() && this.__dragStartSelection) {
                            let e = this.target.getSelectionStartFromPointer(t),
                                i = this.__dragStartSelection;
                            return e < i.selectionStart || e > i.selectionEnd
                        }
                        return !0
                    }
                    return !1
                }
                targetCanDrop(t) {
                    return this.target.canDrop(t)
                }
                dragEnterHandler(t) {
                    let {
                        e
                    } = t, i = this.targetCanDrop(e);
                    !this.__isDraggingOver && i && (this.__isDraggingOver = !0)
                }
                dragOverHandler(t) {
                    let {
                        e
                    } = t, i = this.targetCanDrop(e);
                    !this.__isDraggingOver && i ? this.__isDraggingOver = !0 : this.__isDraggingOver && !i && (this.__isDraggingOver = !1), this.__isDraggingOver && (e.preventDefault(), t.canDrop = !0, t.dropTarget = this.target)
                }
                dragLeaveHandler() {
                    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = !1)
                }
                dropHandler(t) {
                    var e;
                    let {
                        e: i
                    } = t, r = i.defaultPrevented;
                    this.__isDraggingOver = !1, i.preventDefault();
                    let s = null == (e = i.dataTransfer) ? void 0 : e.getData("text/plain");
                    if (s && !r) {
                        let e = this.target,
                            r = e.canvas,
                            n = e.getSelectionStartFromPointer(i),
                            {
                                styles: o
                            } = i.dataTransfer.types.includes("application/fabric") ? JSON.parse(i.dataTransfer.getData("application/fabric")) : {},
                            a = s[Math.max(0, s.length - 1)];
                        if (this.__dragStartSelection) {
                            let t = this.__dragStartSelection.selectionStart,
                                i = this.__dragStartSelection.selectionEnd;
                            n > t && n <= i ? n = t : n > i && (n -= i - t), e.removeChars(t, i), delete this.__dragStartSelection
                        }
                        e._reNewline.test(a) && (e._reNewline.test(e._text[n]) || n === e._text.length) && (s = s.trimEnd()), t.didDrop = !0, t.dropTarget = e, e.insertChars(s, o, n), r.setActiveObject(e), e.enterEditing(i), e.selectionStart = Math.min(n + 0, e._text.length), e.selectionEnd = Math.min(e.selectionStart + s.length, e._text.length), e.hiddenTextarea.value = e.text, e._updateTextarea(), e.hiddenTextarea.focus(), e.fire("changed", {
                            index: n + 0,
                            action: "drop"
                        }), r.fire("text:changed", {
                            target: e
                        }), r.contextTopDirty = !0, r.requestRenderAll()
                    }
                }
                dragEndHandler(t) {
                    let {
                        e
                    } = t;
                    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
                        var i;
                        let t = this.target,
                            r = this.target.canvas,
                            {
                                selectionStart: s,
                                selectionEnd: n
                            } = this.__dragStartSelection,
                            o = (null == (i = e.dataTransfer) ? void 0 : i.dropEffect) || F;
                        o === F ? (t.selectionStart = s, t.selectionEnd = n, t._updateTextarea(), t.hiddenTextarea.focus()) : (t.clearContextTop(), "move" === o && (t.removeChars(s, n), t.selectionStart = t.selectionEnd = s, t.hiddenTextarea && (t.hiddenTextarea.value = t.text), t._updateTextarea(), t.fire("changed", {
                            index: s,
                            action: "dragend"
                        }), r.fire("text:changed", {
                            target: t
                        }), r.requestRenderAll()), t.exitEditing())
                    }
                    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = !1
                }
                dispose() {
                    this._dispose && this._dispose()
                }
                constructor(t) {
                    l(this, "target", void 0), l(this, "__mouseDownInPlace", !1), l(this, "__dragStartFired", !1), l(this, "__isDraggingOver", !1), l(this, "__dragStartSelection", void 0), l(this, "__dragImageDisposer", void 0), l(this, "_dispose", void 0), this.target = t;
                    const e = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
                    this._dispose = () => {
                        e.forEach(t => t()), this._dispose = void 0
                    }
                }
            }
            let s5 = /[ \n\.,;!\?\-]/;
            class s3 extends s1 {
                initBehavior() {
                    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this)
                }
                onDeselect(t) {
                    return this.isEditing && this.exitEditing(), this.selected = !1, super.onDeselect(t)
                }
                _animateCursor(t) {
                    let {
                        toValue: e,
                        duration: i,
                        delay: r,
                        onComplete: s
                    } = t;
                    return eW({
                        startValue: this._currentCursorOpacity,
                        endValue: e,
                        duration: i,
                        delay: r,
                        onComplete: s,
                        abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
                        onChange: t => {
                            this._currentCursorOpacity = t, this.renderCursorOrSelection()
                        }
                    })
                }
                _tick(t) {
                    this._currentTickState = this._animateCursor({
                        toValue: 1,
                        duration: this.cursorDuration,
                        delay: t,
                        onComplete: this._onTickComplete
                    })
                }
                _onTickComplete() {
                    var t;
                    null == (t = this._currentTickCompleteState) || t.abort(), this._currentTickCompleteState = this._animateCursor({
                        toValue: 0,
                        duration: this.cursorDuration / 2,
                        delay: 100,
                        onComplete: this._tick
                    })
                }
                initDelayedCursor(t) {
                    this.abortCursorAnimation(), this._tick(t ? 0 : this.cursorDelay)
                }
                abortCursorAnimation() {
                    let t = !1;
                    [this._currentTickState, this._currentTickCompleteState].forEach(e => {
                        e && !e.isDone() && (t = !0, e.abort())
                    }), this._currentCursorOpacity = 1, t && this.clearContextTop()
                }
                restartCursorIfNeeded() {
                    [this._currentTickState, this._currentTickCompleteState].some(t => !t || t.isDone()) && this.initDelayedCursor()
                }
                selectAll() {
                    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this
                }
                getSelectedText() {
                    return this._text.slice(this.selectionStart, this.selectionEnd).join("")
                }
                findWordBoundaryLeft(t) {
                    let e = 0,
                        i = t - 1;
                    if (this._reSpace.test(this._text[i]))
                        for (; this._reSpace.test(this._text[i]);) e++, i--;
                    for (;
                        /\S/.test(this._text[i]) && i > -1;) e++, i--;
                    return t - e
                }
                findWordBoundaryRight(t) {
                    let e = 0,
                        i = t;
                    if (this._reSpace.test(this._text[i]))
                        for (; this._reSpace.test(this._text[i]);) e++, i++;
                    for (;
                        /\S/.test(this._text[i]) && i < this._text.length;) e++, i++;
                    return t + e
                }
                findLineBoundaryLeft(t) {
                    let e = 0,
                        i = t - 1;
                    for (; !/\n/.test(this._text[i]) && i > -1;) e++, i--;
                    return t - e
                }
                findLineBoundaryRight(t) {
                    let e = 0,
                        i = t;
                    for (; !/\n/.test(this._text[i]) && i < this._text.length;) e++, i++;
                    return t + e
                }
                searchWordBoundary(t, e) {
                    let i = this._text,
                        r = t > 0 && this._reSpace.test(i[t]) && (-1 === e || !L.test(i[t - 1])) ? t - 1 : t,
                        s = i[r];
                    for (; r > 0 && r < i.length && !s5.test(s);) r += e, s = i[r];
                    return -1 === e && s5.test(s) && r++, r
                }
                selectWord(t) {
                    t = t || this.selectionStart;
                    let e = this.searchWordBoundary(t, -1),
                        i = Math.max(e, this.searchWordBoundary(t, 1));
                    this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()
                }
                selectLine(t) {
                    t = t || this.selectionStart;
                    let e = this.findLineBoundaryLeft(t),
                        i = this.findLineBoundaryRight(t);
                    return this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this
                }
                enterEditing(t) {
                    !this.isEditing && this.editable && (this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = !0, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered", t ? {
                        e: t
                    } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
                        target: this,
                        e: t
                    }), this.canvas.requestRenderAll()))
                }
                updateSelectionOnMouseMove(t) {
                    if (this.getActiveControl()) return;
                    let e = this.hiddenTextarea;
                    tz(e).activeElement !== e && e.focus();
                    let i = this.getSelectionStartFromPointer(t),
                        r = this.selectionStart,
                        s = this.selectionEnd;
                    (i === this.__selectionStartOnMouseDown && r !== s || r !== i && s !== i) && (i > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = i) : (this.selectionStart = i, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== r || this.selectionEnd !== s) && (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()))
                }
                _setEditingProps() {
                    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0
                }
                fromStringToGraphemeSelection(t, e, i) {
                    let r = i.slice(0, t),
                        s = this.graphemeSplit(r).length;
                    if (t === e) return {
                        selectionStart: s,
                        selectionEnd: s
                    };
                    let n = i.slice(t, e);
                    return {
                        selectionStart: s,
                        selectionEnd: s + this.graphemeSplit(n).length
                    }
                }
                fromGraphemeToStringSelection(t, e, i) {
                    let r = i.slice(0, t).join("").length;
                    return t === e ? {
                        selectionStart: r,
                        selectionEnd: r
                    } : {
                        selectionStart: r,
                        selectionEnd: r + i.slice(t, e).join("").length
                    }
                }
                _updateTextarea() {
                    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
                        if (!this.inCompositionMode) {
                            let t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                            this.hiddenTextarea.selectionStart = t.selectionStart, this.hiddenTextarea.selectionEnd = t.selectionEnd
                        }
                        this.updateTextareaPosition()
                    }
                }
                updateFromTextArea() {
                    if (!this.hiddenTextarea) return;
                    this.cursorOffsetCache = {};
                    let t = this.hiddenTextarea;
                    this.text = t.value, this.set("dirty", !0), this.initDimensions(), this.setCoords();
                    let e = this.fromStringToGraphemeSelection(t.selectionStart, t.selectionEnd, t.value);
                    this.selectionEnd = this.selectionStart = e.selectionEnd, this.inCompositionMode || (this.selectionStart = e.selectionStart), this.updateTextareaPosition()
                }
                updateTextareaPosition() {
                    if (this.selectionStart === this.selectionEnd) {
                        let t = this._calcTextareaPosition();
                        this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top
                    }
                }
                _calcTextareaPosition() {
                    if (!this.canvas) return {
                        left: "1px",
                        top: "1px"
                    };
                    let t = this.inCompositionMode ? this.compositionStart : this.selectionStart,
                        e = this._getCursorBoundaries(t),
                        i = this.get2DCursorLocation(t),
                        r = i.lineIndex,
                        s = i.charIndex,
                        n = this.getValueOfPropertyAt(r, s, "fontSize") * this.lineHeight,
                        o = e.leftOffset,
                        a = this.getCanvasRetinaScaling(),
                        h = this.canvas.upperCanvasEl,
                        l = h.width / a,
                        c = h.height / a,
                        u = l - n,
                        d = c - n,
                        g = new H(e.left + o, e.top + e.topOffset + n).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new H(h.clientWidth / l, h.clientHeight / c));
                    return g.x < 0 && (g.x = 0), g.x > u && (g.x = u), g.y < 0 && (g.y = 0), g.y > d && (g.y = d), g.x += this.canvas._offset.left, g.y += this.canvas._offset.top, {
                        left: "".concat(g.x, "px"),
                        top: "".concat(g.y, "px"),
                        fontSize: "".concat(n, "px"),
                        charHeight: n
                    }
                }
                _saveEditingProps() {
                    this._savedProps = {
                        hasControls: this.hasControls,
                        borderColor: this.borderColor,
                        lockMovementX: this.lockMovementX,
                        lockMovementY: this.lockMovementY,
                        hoverCursor: this.hoverCursor,
                        selectable: this.selectable,
                        defaultCursor: this.canvas && this.canvas.defaultCursor,
                        moveCursor: this.canvas && this.canvas.moveCursor
                    }
                }
                _restoreEditingProps() {
                    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps)
                }
                _exitEditing() {
                    let t = this.hiddenTextarea;
                    this.selected = !1, this.isEditing = !1, t && (t.blur && t.blur(), t.parentNode && t.parentNode.removeChild(t)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop()
                }
                exitEditing() {
                    let t = this._textBeforeEdit !== this.text;
                    return this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), t && this.fire("modified"), this.canvas && (this.canvas.fire("text:editing:exited", {
                        target: this
                    }), t && this.canvas.fire("object:modified", {
                        target: this
                    })), this
                }
                _removeExtraneousStyles() {
                    for (let t in this.styles) this._textLines[t] || delete this.styles[t]
                }
                removeStyleFromTo(t, e) {
                    let {
                        lineIndex: i,
                        charIndex: r
                    } = this.get2DCursorLocation(t, !0), {
                        lineIndex: s,
                        charIndex: n
                    } = this.get2DCursorLocation(e, !0);
                    if (i !== s) {
                        if (this.styles[i])
                            for (let t = r; t < this._unwrappedTextLines[i].length; t++) delete this.styles[i][t];
                        if (this.styles[s])
                            for (let t = n; t < this._unwrappedTextLines[s].length; t++) {
                                let e = this.styles[s][t];
                                e && (this.styles[i] || (this.styles[i] = {}), this.styles[i][r + t - n] = e)
                            }
                        for (let t = i + 1; t <= s; t++) delete this.styles[t];
                        this.shiftLineStyles(s, i - s)
                    } else if (this.styles[i]) {
                        let t = this.styles[i],
                            e = n - r;
                        for (let e = r; e < n; e++) delete t[e];
                        for (let r in this.styles[i]) {
                            let i = parseInt(r, 10);
                            i >= n && (t[i - e] = t[r], delete t[r])
                        }
                    }
                }
                shiftLineStyles(t, e) {
                    let i = Object.assign({}, this.styles);
                    for (let r in this.styles) {
                        let s = parseInt(r, 10);
                        s > t && (this.styles[s + e] = i[s], i[s - e] || delete this.styles[s])
                    }
                }
                insertNewlineStyleObject(t, e, i, r) {
                    let s = {},
                        n = this._unwrappedTextLines[t].length === e,
                        o = !1;
                    i || (i = 1), this.shiftLineStyles(t, i);
                    let a = this.styles[t] ? this.styles[t][0 === e ? e : e - 1] : void 0;
                    for (let i in this.styles[t]) {
                        let r = parseInt(i, 10);
                        r >= e && (o = !0, s[r - e] = this.styles[t][i], n && 0 === e || delete this.styles[t][i])
                    }
                    let l = !1;
                    for (o && !n && (this.styles[t + i] = s, l = !0), l && i--; i > 0;) r && r[i - 1] ? this.styles[t + i] = {
                        0: h({}, r[i - 1])
                    } : a ? this.styles[t + i] = {
                        0: h({}, a)
                    } : delete this.styles[t + i], i--;
                    this._forceClearCache = !0
                }
                insertCharStyleObject(t, e, i, r) {
                    this.styles || (this.styles = {});
                    let s = this.styles[t],
                        n = s ? h({}, s) : {};
                    for (let t in i || (i = 1), n) {
                        let r = parseInt(t, 10);
                        r >= e && (s[r + i] = n[r], n[r - i] || delete s[r])
                    }
                    if (this._forceClearCache = !0, r) {
                        for (; i--;) Object.keys(r[i]).length && (this.styles[t] || (this.styles[t] = {}), this.styles[t][e + i] = h({}, r[i]));
                        return
                    }
                    if (!s) return;
                    let o = s[e ? e - 1 : 1];
                    for (; o && i--;) this.styles[t][e + i] = h({}, o)
                }
                insertNewStyleBlock(t, e, i) {
                    let r, s = this.get2DCursorLocation(e, !0),
                        n = [0],
                        o = 0;
                    for (let e = 0; e < t.length; e++) "\n" === t[e] ? n[++o] = 0 : n[o]++;
                    for (n[0] > 0 && (this.insertCharStyleObject(s.lineIndex, s.charIndex, n[0], i), i = i && i.slice(n[0] + 1)), o && this.insertNewlineStyleObject(s.lineIndex, s.charIndex + n[0], o), r = 1; r < o; r++) n[r] > 0 ? this.insertCharStyleObject(s.lineIndex + r, 0, n[r], i) : i && this.styles[s.lineIndex + r] && i[0] && (this.styles[s.lineIndex + r][0] = i[0]), i = i && i.slice(n[r] + 1);
                    n[r] > 0 && this.insertCharStyleObject(s.lineIndex + r, 0, n[r], i)
                }
                removeChars(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t + 1;
                    this.removeStyleFromTo(t, e), this._text.splice(t, e - t), this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles()
                }
                insertChars(t, e, i) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i;
                    r > i && this.removeStyleFromTo(i, r);
                    let s = this.graphemeSplit(t);
                    this.insertNewStyleBlock(s, i, e), this._text = [...this._text.slice(0, i), ...s, ...this._text.slice(r)], this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles()
                }
                setSelectionStartEndWithShift(t, e, i) {
                    i <= t ? (e === t ? this._selectionDirection = E : this._selectionDirection === j && (this._selectionDirection = E, this.selectionEnd = t), this.selectionStart = i) : i > t && i < e ? this._selectionDirection === j ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = j : this._selectionDirection === E && (this._selectionDirection = j, this.selectionStart = e), this.selectionEnd = i)
                }
                constructor() {
                    super(...arguments), l(this, "_currentCursorOpacity", 1)
                }
            }
            class s4 extends s3 {
                initHiddenTextarea() {
                    let t = this.canvas && tz(this.canvas.getElement()) || C(),
                        e = t.createElement("textarea");
                    Object.entries({
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        spellcheck: "false",
                        "data-fabric": "textarea",
                        wrap: "off"
                    }).map(t => {
                        let [i, r] = t;
                        return e.setAttribute(i, r)
                    });
                    let {
                        top: i,
                        left: r,
                        fontSize: s
                    } = this._calcTextareaPosition();
                    e.style.cssText = "position: absolute; top: ".concat(i, "; left: ").concat(r, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(s, ";"), (this.hiddenTextareaContainer || t.body).appendChild(e), Object.entries({
                        blur: "blur",
                        keydown: "onKeyDown",
                        keyup: "onKeyUp",
                        input: "onInput",
                        copy: "copy",
                        cut: "copy",
                        paste: "paste",
                        compositionstart: "onCompositionStart",
                        compositionupdate: "onCompositionUpdate",
                        onCompositionUpdate: "onCompositionEnd"
                    }).map(t => {
                        let [i, r] = t;
                        return e.addEventListener(i, this[r].bind(this))
                    }), this.hiddenTextarea = e
                }
                blur() {
                    this.abortCursorAnimation()
                }
                onKeyDown(t) {
                    if (!this.isEditing) return;
                    let e = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
                    if (t.keyCode in e) this[e[t.keyCode]](t);
                    else {
                        if (!(t.keyCode in this.ctrlKeysMapDown) || !t.ctrlKey && !t.metaKey) return;
                        this[this.ctrlKeysMapDown[t.keyCode]](t)
                    }
                    t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll()
                }
                onKeyUp(t) {
                    if (!this.isEditing || this._copyDone || this.inCompositionMode) {
                        this._copyDone = !1;
                        return
                    }
                    t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll())
                }
                onInput(t) {
                    let e = this.fromPaste;
                    if (this.fromPaste = !1, t && t.stopPropagation(), !this.isEditing) return;
                    let i = () => {
                        this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", {
                            target: this
                        }), this.canvas.requestRenderAll())
                    };
                    if ("" === this.hiddenTextarea.value) {
                        this.styles = {}, i();
                        return
                    }
                    let r = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
                        s = this._text.length,
                        n = r.length,
                        o = this.selectionStart,
                        a = this.selectionEnd,
                        h = o !== a,
                        l, c, u = n - s,
                        d, g, p = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
                        m = o > p.selectionStart;
                    h ? (c = this._text.slice(o, a), u += a - o) : n < s && (c = m ? this._text.slice(a + u, a) : this._text.slice(o, o - u));
                    let _ = r.slice(p.selectionEnd - u, p.selectionEnd);
                    if (c && c.length && (_.length && (l = this.getSelectionStyles(o, o + 1, !1), l = _.map(() => l[0])), h ? (d = o, g = a) : m ? (d = a - c.length, g = a) : (d = a, g = a + c.length), this.removeStyleFromTo(d, g)), _.length) {
                        let {
                            copyPasteData: t
                        } = x();
                        e && _.join("") === t.copiedText && !f.disableStyleCopyPaste && (l = t.copiedTextStyle), this.insertNewStyleBlock(_, o, l)
                    }
                    i()
                }
                onCompositionStart() {
                    this.inCompositionMode = !0
                }
                onCompositionEnd() {
                    this.inCompositionMode = !1
                }
                onCompositionUpdate(t) {
                    let {
                        target: e
                    } = t, {
                        selectionStart: i,
                        selectionEnd: r
                    } = e;
                    this.compositionStart = i, this.compositionEnd = r, this.updateTextareaPosition()
                }
                copy() {
                    if (this.selectionStart === this.selectionEnd) return;
                    let {
                        copyPasteData: t
                    } = x();
                    t.copiedText = this.getSelectedText(), f.disableStyleCopyPaste ? t.copiedTextStyle = void 0 : t.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0
                }
                paste() {
                    this.fromPaste = !0
                }
                _getWidthBeforeCursor(t, e) {
                    let i = this._getLineLeftOffset(t),
                        r;
                    return e > 0 && (i += (r = this.__charBounds[t][e - 1]).left + r.width), i
                }
                getDownCursorOffset(t, e) {
                    let i = this._getSelectionForOffset(t, e),
                        r = this.get2DCursorLocation(i),
                        s = r.lineIndex;
                    if (s === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode) return this._text.length - i;
                    let n = r.charIndex,
                        o = this._getWidthBeforeCursor(s, n),
                        a = this._getIndexOnLine(s + 1, o);
                    return this._textLines[s].slice(n).length + a + 1 + this.missingNewlineOffset(s)
                }
                _getSelectionForOffset(t, e) {
                    return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
                }
                getUpCursorOffset(t, e) {
                    let i = this._getSelectionForOffset(t, e),
                        r = this.get2DCursorLocation(i),
                        s = r.lineIndex;
                    if (0 === s || t.metaKey || 33 === t.keyCode) return -i;
                    let n = r.charIndex,
                        o = this._getWidthBeforeCursor(s, n),
                        a = this._getIndexOnLine(s - 1, o),
                        h = this._textLines[s].slice(0, n),
                        l = this.missingNewlineOffset(s - 1);
                    return -this._textLines[s - 1].length + a - h.length + (1 - l)
                }
                _getIndexOnLine(t, e) {
                    let i = this._textLines[t],
                        r = this._getLineLeftOffset(t),
                        s = 0,
                        n, o;
                    for (let a = 0, h = i.length; a < h; a++)
                        if ((r += n = this.__charBounds[t][a].width) > e) {
                            o = !0;
                            let t = Math.abs(r - n - e);
                            s = Math.abs(r - e) < t ? a : a - 1;
                            break
                        } return o || (s = i.length - 1), s
                }
                moveCursorDown(t) {
                    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t)
                }
                moveCursorUp(t) {
                    (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorUpOrDown("Up", t)
                }
                _moveCursorUpOrDown(t, e) {
                    let i = this["get".concat(t, "CursorOffset")](e, this._selectionDirection === j);
                    if (e.shiftKey ? this.moveCursorWithShift(i) : this.moveCursorWithoutShift(i), 0 !== i) {
                        let t = this.text.length;
                        this.selectionStart = eB(0, this.selectionStart, t), this.selectionEnd = eB(0, this.selectionEnd, t), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea()
                    }
                }
                moveCursorWithShift(t) {
                    let e = this._selectionDirection === E ? this.selectionStart + t : this.selectionEnd + t;
                    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), 0 !== t
                }
                moveCursorWithoutShift(t) {
                    return t < 0 ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), 0 !== t
                }
                moveCursorLeft(t) {
                    (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorLeftOrRight("Left", t)
                }
                _move(t, e, i) {
                    let r;
                    if (t.altKey) r = this["findWordBoundary".concat(i)](this[e]);
                    else {
                        if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode) return this[e] += "Left" === i ? -1 : 1, !0;
                        r = this["findLineBoundary".concat(i)](this[e])
                    }
                    return void 0 !== r && this[e] !== r && (this[e] = r, !0)
                }
                _moveLeft(t, e) {
                    return this._move(t, e, "Left")
                }
                _moveRight(t, e) {
                    return this._move(t, e, "Right")
                }
                moveCursorLeftWithoutShift(t) {
                    let e = !0;
                    return this._selectionDirection = E, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e
                }
                moveCursorLeftWithShift(t) {
                    return this._selectionDirection === j && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = E, this._moveLeft(t, "selectionStart")) : void 0
                }
                moveCursorRight(t) {
                    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t)
                }
                _moveCursorLeftOrRight(t, e) {
                    let i = "moveCursor".concat(t).concat(e.shiftKey ? "WithShift" : "WithoutShift");
                    this._currentCursorOpacity = 1, this[i](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
                }
                moveCursorRightWithShift(t) {
                    return this._selectionDirection === E && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = j, this._moveRight(t, "selectionEnd")) : void 0
                }
                moveCursorRightWithoutShift(t) {
                    let e = !0;
                    return this._selectionDirection = j, this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e
                }
            }

            function s8(t) {
                return t.button && 1 !== t.button
            }
            class s6 extends s4 {
                initBehavior() {
                    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler), this.__lastClickTime = +new Date, this.__lastLastClickTime = +new Date, this.__lastPointer = {}, this.on("mousedown", this.onMouseDown), this.draggableTextDelegate = new s2(this), super.initBehavior()
                }
                shouldStartDragging() {
                    return this.draggableTextDelegate.isActive()
                }
                onDragStart(t) {
                    return this.draggableTextDelegate.onDragStart(t)
                }
                canDrop(t) {
                    return this.draggableTextDelegate.canDrop(t)
                }
                onMouseDown(t) {
                    if (!this.canvas) return;
                    this.__newClickTime = +new Date;
                    let e = t.pointer;
                    this.isTripleClick(e) && (this.fire("tripleclick", t), t2(t.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e, this.__lastSelected = this.selected
                }
                isTripleClick(t) {
                    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y
                }
                doubleClickHandler(t) {
                    this.isEditing && this.selectWord(this.getSelectionStartFromPointer(t.e))
                }
                tripleClickHandler(t) {
                    this.isEditing && this.selectLine(this.getSelectionStartFromPointer(t.e))
                }
                _mouseDownHandler(t) {
                    let {
                        e
                    } = t;
                    !this.canvas || !this.editable || s8(e) || this.getActiveControl() || !this.draggableTextDelegate.start(e) && (this.canvas.textEditingManager.register(this), this.selected && (this.inCompositionMode = !1, this.setCursorByClick(e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()))
                }
                _mouseDownHandlerBefore(t) {
                    let {
                        e
                    } = t;
                    !this.canvas || !this.editable || s8(e) || (this.selected = this === this.canvas._activeObject)
                }
                mouseUpHandler(t) {
                    let {
                        e,
                        transform: i,
                        button: r
                    } = t, s = this.draggableTextDelegate.end(e);
                    if (this.canvas) {
                        this.canvas.textEditingManager.unregister(this);
                        let t = this.canvas._activeObject;
                        if (t && t !== this) return
                    }!this.editable || this.group && !this.group.interactive || i && i.actionPerformed || s8(e) || s || (this.__lastSelected && !this.getActiveControl() ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0)
                }
                setCursorByClick(t) {
                    let e = this.getSelectionStartFromPointer(t),
                        i = this.selectionStart,
                        r = this.selectionEnd;
                    t.shiftKey ? this.setSelectionStartEndWithShift(i, r, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea())
                }
                getSelectionStartFromPointer(t) {
                    let e = this.canvas.getPointer(t).transform(to(this.calcTransformMatrix())).add(new H(-this._getLeftOffset(), -this._getTopOffset())),
                        i = 0,
                        r = 0,
                        s = 0;
                    for (let t = 0; t < this._textLines.length; t++)
                        if (i <= e.y) i += this.getHeightOfLine(t), s = t, t > 0 && (r += this._textLines[t - 1].length + this.missingNewlineOffset(t - 1));
                        else break;
                    let n = Math.abs(this._getLineLeftOffset(s)),
                        o = this._textLines[s].length,
                        a = this.__charBounds[s];
                    for (let t = 0; t < o; t++) {
                        let i = n + a[t].kernedWidth;
                        if (e.x <= i) {
                            Math.abs(e.x - i) <= Math.abs(e.x - n) && r++;
                            break
                        }
                        n = i, r++
                    }
                    return Math.min(this.flipX ? o - r : r, this._text.length)
                }
                constructor() {
                    super(...arguments), l(this, "draggableTextDelegate", void 0)
                }
            }
            let s9 = "moveCursorUp",
                s7 = "moveCursorDown",
                nt = "moveCursorLeft",
                ne = "moveCursorRight",
                ni = "exitEditing";
            class nr extends s6 {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), nr.ownDefaults)
                }
                get type() {
                    let t = super.type;
                    return "itext" === t ? "i-text" : t
                }
                _set(t, e) {
                    return this.isEditing && this._savedProps && t in this._savedProps ? (this._savedProps[t] = e, this) : ("canvas" === t && (this.canvas instanceof ss && this.canvas.textEditingManager.remove(this), e instanceof ss && e.textEditingManager.add(this)), super._set(t, e))
                }
                setSelectionStart(t) {
                    t = Math.max(t, 0), this._updateAndFire("selectionStart", t)
                }
                setSelectionEnd(t) {
                    t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t)
                }
                _updateAndFire(t, e) {
                    this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea()
                }
                _fireSelectionChanged() {
                    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
                        target: this
                    })
                }
                initDimensions() {
                    this.isEditing && this.initDelayedCursor(), super.initDimensions()
                }
                getSelectionStyles() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    return super.getSelectionStyles(t, e, i)
                }
                setSelectionStyles(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
                    return super.setSelectionStyles(t, e, i)
                }
                get2DCursorLocation() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    return super.get2DCursorLocation(t, e)
                }
                render(t) {
                    super.render(t), this.cursorOffsetCache = {}, this.renderCursorOrSelection()
                }
                toCanvasElement(t) {
                    let e = this.isEditing;
                    this.isEditing = !1;
                    let i = super.toCanvasElement(t);
                    return this.isEditing = e, i
                }
                renderCursorOrSelection() {
                    if (!this.isEditing) return;
                    let t = this.clearContextTop(!0);
                    if (!t) return;
                    let e = this._getCursorBoundaries();
                    this.selectionStart === this.selectionEnd ? this.renderCursor(t, e) : this.renderSelection(t, e), this.canvas.contextTopDirty = !0, t.restore()
                }
                _getCursorBoundaries() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart,
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        i = this._getLeftOffset(),
                        r = this._getTopOffset(),
                        s = this._getCursorBoundariesOffsets(t, e);
                    return {
                        left: i,
                        top: r,
                        leftOffset: s.left,
                        topOffset: s.top
                    }
                }
                _getCursorBoundariesOffsets(t, e) {
                    return e ? this.__getCursorBoundariesOffsets(t) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t)
                }
                __getCursorBoundariesOffsets(t) {
                    let e = 0,
                        i = 0,
                        {
                            charIndex: r,
                            lineIndex: s
                        } = this.get2DCursorLocation(t);
                    for (let t = 0; t < s; t++) e += this.getHeightOfLine(t);
                    let n = this._getLineLeftOffset(s),
                        o = this.__charBounds[s][r];
                    o && (i = o.left), 0 !== this.charSpacing && r === this._textLines[s].length && (i -= this._getWidthOfCharSpacing());
                    let a = {
                        top: e,
                        left: n + (i > 0 ? i : 0)
                    };
                    return "rtl" === this.direction && (this.textAlign === j || this.textAlign === sU || this.textAlign === sq ? a.left *= -1 : this.textAlign === E || this.textAlign === sN ? a.left = n - (i > 0 ? i : 0) : (this.textAlign === P || this.textAlign === sK) && (a.left = n - (i > 0 ? i : 0))), a
                }
                renderCursorAt(t) {
                    let e = this._getCursorBoundaries(t, !0);
                    this._renderCursor(this.canvas.contextTop, e, t)
                }
                renderCursor(t, e) {
                    this._renderCursor(t, e, this.selectionStart)
                }
                _renderCursor(t, e, i) {
                    let r = this.get2DCursorLocation(i),
                        s = r.lineIndex,
                        n = r.charIndex > 0 ? r.charIndex - 1 : 0,
                        o = this.getValueOfPropertyAt(s, n, "fontSize"),
                        a = this.scaleX * this.canvas.getZoom(),
                        h = this.cursorWidth / a,
                        l = this.getValueOfPropertyAt(s, n, "deltaY"),
                        c = e.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(s) / this.lineHeight - o * (1 - this._fontSizeFraction);
                    this.inCompositionMode && this.renderSelection(t, e), t.fillStyle = this.cursorColor || this.getValueOfPropertyAt(s, n, "fill"), t.globalAlpha = this._currentCursorOpacity, t.fillRect(e.left + e.leftOffset - h / 2, c + e.top + l, h, o)
                }
                renderSelection(t, e) {
                    let i = {
                        selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
                        selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
                    };
                    this._renderSelection(t, i, e)
                }
                renderDragSourceEffect() {
                    let t = this.draggableTextDelegate.getDragStartSelection();
                    this._renderSelection(this.canvas.contextTop, t, this._getCursorBoundaries(t.selectionStart, !0))
                }
                renderDropTargetEffect(t) {
                    let e = this.getSelectionStartFromPointer(t);
                    this.renderCursorAt(e)
                }
                _renderSelection(t, e, i) {
                    let r = e.selectionStart,
                        s = e.selectionEnd,
                        n = this.textAlign.includes(sU),
                        o = this.get2DCursorLocation(r),
                        a = this.get2DCursorLocation(s),
                        h = o.lineIndex,
                        l = a.lineIndex,
                        c = o.charIndex < 0 ? 0 : o.charIndex,
                        u = a.charIndex < 0 ? 0 : a.charIndex;
                    for (let e = h; e <= l; e++) {
                        let r = this._getLineLeftOffset(e) || 0,
                            s = this.getHeightOfLine(e),
                            o = 0,
                            a = 0,
                            d = 0;
                        if (e === h && (a = this.__charBounds[h][c].left), e >= h && e < l) d = n && !this.isEndOfWrapping(e) ? this.width : this.getLineWidth(e) || 5;
                        else if (e === l)
                            if (0 === u) d = this.__charBounds[l][u].left;
                            else {
                                let t = this._getWidthOfCharSpacing();
                                d = this.__charBounds[l][u - 1].left + this.__charBounds[l][u - 1].width - t
                            } o = s, (this.lineHeight < 1 || e === l && this.lineHeight > 1) && (s /= this.lineHeight);
                        let g = i.left + r + a,
                            f = s,
                            p = 0,
                            m = d - a;
                        this.inCompositionMode ? (t.fillStyle = this.compositionColor || "black", f = 1, p = s) : t.fillStyle = this.selectionColor, "rtl" === this.direction && (this.textAlign === j || this.textAlign === sU || this.textAlign === sq ? g = this.width - g - m : this.textAlign === E || this.textAlign === sN ? g = i.left + r - d : (this.textAlign === P || this.textAlign === sK) && (g = i.left + r - d)), t.fillRect(g, i.top + i.topOffset + p, m, f), i.topOffset += o
                    }
                }
                getCurrentCharFontSize() {
                    let t = this._getCurrentCharIndex();
                    return this.getValueOfPropertyAt(t.l, t.c, "fontSize")
                }
                getCurrentCharColor() {
                    let t = this._getCurrentCharIndex();
                    return this.getValueOfPropertyAt(t.l, t.c, "fill")
                }
                _getCurrentCharIndex() {
                    let t = this.get2DCursorLocation(this.selectionStart, !0),
                        e = t.charIndex > 0 ? t.charIndex - 1 : 0;
                    return {
                        l: t.lineIndex,
                        c: e
                    }
                }
                dispose() {
                    this._exitEditing(), this.draggableTextDelegate.dispose(), super.dispose()
                }
                constructor(t, e) {
                    super(t, e), this.initBehavior()
                }
            }
            l(nr, "ownDefaults", {
                selectionStart: 0,
                selectionEnd: 0,
                selectionColor: "rgba(17,119,255,0.3)",
                isEditing: !1,
                editable: !0,
                editingBorderColor: "rgba(102,153,255,0.25)",
                cursorWidth: 2,
                cursorColor: "",
                cursorDelay: 1e3,
                cursorDuration: 600,
                caching: !0,
                hiddenTextareaContainer: null,
                _selectionDirection: null,
                _reSpace: /\s|\r?\n/,
                inCompositionMode: !1,
                keysMap: {
                    9: ni,
                    27: ni,
                    33: s9,
                    34: s7,
                    35: ne,
                    36: nt,
                    37: nt,
                    38: s9,
                    39: ne,
                    40: s7
                },
                keysMapRtl: {
                    9: ni,
                    27: ni,
                    33: s9,
                    34: s7,
                    35: nt,
                    36: ne,
                    37: ne,
                    38: s9,
                    39: nt,
                    40: s7
                },
                ctrlKeysMapDown: {
                    65: "selectAll"
                },
                ctrlKeysMapUp: {
                    67: "copy",
                    88: "cut"
                }
            }), l(nr, "type", "IText"), R.setClass(nr), R.setClass(nr, "i-text");
            class ns extends nr {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), {}, {
                        controls: iF()
                    }, ns.ownDefaults)
                }
                initDimensions() {
                    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(sU) && this.enlargeSpaces(), this.height = this.calcTextHeight())
                }
                _generateStyleMap(t) {
                    let e = 0,
                        i = 0,
                        r = 0,
                        s = {};
                    for (let n = 0; n < t.graphemeLines.length; n++) "\n" === t.graphemeText[r] && n > 0 ? (i = 0, r++, e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[r]) && n > 0 && (i++, r++), s[n] = {
                        line: e,
                        offset: i
                    }, r += t.graphemeLines[n].length, i += t.graphemeLines[n].length;
                    return s
                }
                styleHas(t, e) {
                    if (this._styleMap && !this.isWrapping) {
                        let t = this._styleMap[e];
                        t && (e = t.line)
                    }
                    return super.styleHas(t, e)
                }
                isEmptyStyles(t) {
                    if (!this.styles) return !0;
                    let e = 0,
                        i, r = !1,
                        s = this._styleMap[t],
                        n = this._styleMap[t + 1];
                    s && (t = s.line, e = s.offset), n && (r = n.line === t, i = n.offset);
                    let o = void 0 === t ? this.styles : {
                        line: this.styles[t]
                    };
                    for (let t in o)
                        for (let s in o[t]) {
                            let n = parseInt(s, 10);
                            if (n >= e && (!r || n < i))
                                for (let e in o[t][s]) return !1
                        }
                    return !0
                }
                _getStyleDeclaration(t, e) {
                    if (this._styleMap && !this.isWrapping) {
                        let i = this._styleMap[t];
                        if (!i) return {};
                        t = i.line, e = i.offset + e
                    }
                    return super._getStyleDeclaration(t, e)
                }
                _setStyleDeclaration(t, e, i) {
                    let r = this._styleMap[t];
                    t = r.line, e = r.offset + e, this.styles[t][e] = i
                }
                _deleteStyleDeclaration(t, e) {
                    let i = this._styleMap[t];
                    t = i.line, e = i.offset + e, delete this.styles[t][e]
                }
                _getLineStyle(t) {
                    let e = this._styleMap[t];
                    return !!this.styles[e.line]
                }
                _setLineStyle(t) {
                    let e = this._styleMap[t];
                    this.styles[e.line] = {}
                }
                _wrapText(t, e) {
                    this.isWrapping = !0;
                    let i = this.getGraphemeDataForRender(t),
                        r = [];
                    for (let t = 0; t < i.wordsData.length; t++) r.push(...this._wrapLine(t, e, i));
                    return this.isWrapping = !1, r
                }
                getGraphemeDataForRender(t) {
                    let e = this.splitByGrapheme,
                        i = e ? "" : " ",
                        r = 0;
                    return {
                        wordsData: t.map((t, s) => {
                            let n = 0,
                                o = e ? this.graphemeSplit(t) : this.wordSplit(t);
                            return 0 === o.length ? [{
                                word: [],
                                width: 0
                            }] : o.map(t => {
                                let o = e ? [t] : this.graphemeSplit(t),
                                    a = this._measureWord(o, s, n);
                                return r = Math.max(a, r), n += o.length + i.length, {
                                    word: o,
                                    width: a
                                }
                            })
                        }),
                        largestWordWidth: r
                    }
                }
                _measureWord(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = 0,
                        s;
                    for (let n = 0, o = t.length; n < o; n++) r += this._getGraphemeBox(t[n], e, n + i, s, !0).kernedWidth, s = t[n];
                    return r
                }
                wordSplit(t) {
                    return t.split(this._wordJoiners)
                }
                _wrapLine(t, e, i) {
                    let r, {
                            largestWordWidth: s,
                            wordsData: n
                        } = i,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = this._getWidthOfCharSpacing(),
                        h = this.splitByGrapheme,
                        l = [],
                        c = h ? "" : " ",
                        u = 0,
                        d = [],
                        g = 0,
                        f = 0,
                        p = !0,
                        m = Math.max(e -= o, s, this.dynamicMinWidth),
                        _ = n[t];
                    for (r = 0, g = 0; r < _.length; r++) {
                        let {
                            word: e,
                            width: i
                        } = _[r];
                        g += e.length, (u += f + i - a) > m && !p ? (l.push(d), d = [], u = i, p = !0) : u += a, p || h || d.push(c), d = d.concat(e), f = h ? 0 : this._measureWord([c], t, g), g++, p = !1
                    }
                    return r && l.push(d), s + o > this.dynamicMinWidth && (this.dynamicMinWidth = s - a + o), l
                }
                isEndOfWrapping(t) {
                    return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line
                }
                missingNewlineOffset(t, e) {
                    return this.splitByGrapheme && !e ? +!!this.isEndOfWrapping(t) : 1
                }
                _splitTextIntoLines(t) {
                    let e = super._splitTextIntoLines(t),
                        i = this._wrapText(e.lines, this.width),
                        r = Array(i.length);
                    for (let t = 0; t < i.length; t++) r[t] = i[t].join("");
                    return e.lines = r, e.graphemeLines = i, e
                }
                getMinWidth() {
                    return Math.max(this.minWidth, this.dynamicMinWidth)
                }
                _removeExtraneousStyles() {
                    let t = new Map;
                    for (let e in this._styleMap) {
                        let i = parseInt(e, 10);
                        if (this._textLines[i]) {
                            let i = this._styleMap[e].line;
                            t.set("".concat(i), !0)
                        }
                    }
                    for (let e in this.styles) t.has(e) || delete this.styles[e]
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return super.toObject(["minWidth", "splitByGrapheme", ...t])
                }
            }
            l(ns, "type", "Textbox"), l(ns, "textLayoutProperties", [...nr.textLayoutProperties, "width"]), l(ns, "ownDefaults", {
                minWidth: 20,
                dynamicMinWidth: 2,
                lockScalingFlip: !0,
                noScaleCache: !1,
                _wordJoiners: /[ \t\r]/,
                splitByGrapheme: !1
            }), R.setClass(ns);
            class nn {
                applyFilters(t, e, i, r, s) {
                    let n = s.getContext("2d");
                    if (!n) return;
                    n.drawImage(e, 0, 0, i, r);
                    let o = n.getImageData(0, 0, i, r),
                        a = n.getImageData(0, 0, i, r),
                        h = {
                            sourceWidth: i,
                            sourceHeight: r,
                            imageData: o,
                            originalEl: e,
                            originalImageData: a,
                            canvasEl: s,
                            ctx: n,
                            filterBackend: this
                        };
                    t.forEach(t => {
                        t.applyTo(h)
                    });
                    let {
                        imageData: l
                    } = h;
                    return (l.width !== i || l.height !== r) && (s.width = l.width, s.height = l.height), n.putImageData(l, 0, 0), h
                }
                constructor() {
                    l(this, "resources", {})
                }
            }
            class no {
                setupGLContext(t, e) {
                    this.dispose(), this.createWebGLCanvas(t, e), this.chooseFastestCopyGLTo2DMethod(t, e)
                }
                chooseFastestCopyGLTo2DMethod(t, e) {
                    let i, r = $(),
                        s = new ArrayBuffer(t * e * 4);
                    if (f.forceGLPutImageData) {
                        this.imageBuffer = s, this.copyGLTo2D = na;
                        return
                    }
                    let n = {
                            imageBuffer: s
                        },
                        o = {
                            destinationWidth: t,
                            destinationHeight: e,
                            targetCanvas: r
                        };
                    r.width = t, r.height = e, i = b().performance.now(), this.copyGLTo2D.call(n, this.gl, o);
                    let a = b().performance.now() - i;
                    i = b().performance.now(), na.call(n, this.gl, o), a > b().performance.now() - i && (this.imageBuffer = s, this.copyGLTo2D = na)
                }
                createWebGLCanvas(t, e) {
                    let i = $();
                    i.width = t, i.height = e;
                    let r = i.getContext("webgl", {
                        alpha: !0,
                        premultipliedAlpha: !1,
                        depth: !1,
                        stencil: !1,
                        antialias: !1
                    });
                    r && (r.clearColor(0, 0, 0, 0), this.canvas = i, this.gl = r)
                }
                applyFilters(t, e, i, r, s, n) {
                    var o;
                    let a, h, l, c, u, d, g = this.gl,
                        f = s.getContext("2d");
                    if (!g || !f) return;
                    n && (d = this.getCachedTexture(n, e));
                    let p = {
                            originalWidth: e.width || e.originalWidth || 0,
                            originalHeight: e.height || e.originalHeight || 0,
                            sourceWidth: i,
                            sourceHeight: r,
                            destinationWidth: i,
                            destinationHeight: r,
                            context: g,
                            sourceTexture: this.createTexture(g, i, r, d ? void 0 : e),
                            targetTexture: this.createTexture(g, i, r),
                            originalTexture: d || this.createTexture(g, i, r, d ? void 0 : e),
                            passes: t.length,
                            webgl: !0,
                            aPosition: this.aPosition,
                            programCache: this.programCache,
                            pass: 0,
                            filterBackend: this,
                            targetCanvas: s
                        },
                        m = g.createFramebuffer();
                    return g.bindFramebuffer(g.FRAMEBUFFER, m), t.forEach(t => {
                        t && t.applyTo(p)
                    }), h = (a = (o = p).targetCanvas).width, l = a.height, c = o.destinationWidth, u = o.destinationHeight, (h !== c || l !== u) && (a.width = c, a.height = u), this.copyGLTo2D(g, p), g.bindTexture(g.TEXTURE_2D, null), g.deleteTexture(p.sourceTexture), g.deleteTexture(p.targetTexture), g.deleteFramebuffer(m), f.setTransform(1, 0, 0, 1, 0, 0), p
                }
                dispose() {
                    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches()
                }
                clearWebGLCaches() {
                    this.programCache = {}, this.textureCache = {}
                }
                createTexture(t, e, i, r, s) {
                    let {
                        NEAREST: n,
                        TEXTURE_2D: o,
                        RGBA: a,
                        UNSIGNED_BYTE: h,
                        CLAMP_TO_EDGE: l,
                        TEXTURE_MAG_FILTER: c,
                        TEXTURE_MIN_FILTER: u,
                        TEXTURE_WRAP_S: d,
                        TEXTURE_WRAP_T: g
                    } = t, f = t.createTexture();
                    return t.bindTexture(o, f), t.texParameteri(o, c, s || n), t.texParameteri(o, u, s || n), t.texParameteri(o, d, l), t.texParameteri(o, g, l), r ? t.texImage2D(o, 0, a, a, h, r) : t.texImage2D(o, 0, a, e, i, 0, a, h, null), f
                }
                getCachedTexture(t, e, i) {
                    let {
                        textureCache: r
                    } = this;
                    if (r[t]) return r[t];
                    {
                        let s = this.createTexture(this.gl, e.width, e.height, e, i);
                        return s && (r[t] = s), s
                    }
                }
                evictCachesForKey(t) {
                    this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t])
                }
                copyGLTo2D(t, e) {
                    let i = t.canvas,
                        r = e.targetCanvas,
                        s = r.getContext("2d");
                    if (!s) return;
                    s.translate(0, r.height), s.scale(1, -1);
                    let n = i.height - r.height;
                    s.drawImage(i, 0, n, r.width, r.height, 0, 0, r.width, r.height)
                }
                captureGPUInfo() {
                    if (this.gpuInfo) return this.gpuInfo;
                    let t = this.gl,
                        e = {
                            renderer: "",
                            vendor: ""
                        };
                    if (!t) return e;
                    let i = t.getExtension("WEBGL_debug_renderer_info");
                    if (i) {
                        let r = t.getParameter(i.UNMASKED_RENDERER_WEBGL),
                            s = t.getParameter(i.UNMASKED_VENDOR_WEBGL);
                        r && (e.renderer = r.toLowerCase()), s && (e.vendor = s.toLowerCase())
                    }
                    return this.gpuInfo = e, e
                }
                constructor() {
                    let {
                        tileSize: t = f.textureSize
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), l(this, "resources", {}), this.tileSize = t, this.setupGLContext(t, t), this.captureGPUInfo()
                }
            }

            function na(t, e) {
                let i = e.targetCanvas.getContext("2d"),
                    r = e.destinationWidth,
                    s = e.destinationHeight,
                    n = r * s * 4;
                if (!i) return;
                let o = new Uint8Array(this.imageBuffer, 0, n),
                    a = new Uint8ClampedArray(this.imageBuffer, 0, n);
                t.readPixels(0, 0, r, s, t.RGBA, t.UNSIGNED_BYTE, o);
                let h = new ImageData(a, r, s);
                i.putImageData(h, 0, 0)
            }

            function nh() {
                let {
                    WebGLProbe: t
                } = x();
                return (t.queryWebGL($()), f.enableGLFiltering && t.isSupported(f.textureSize)) ? new no({
                    tileSize: f.textureSize
                }) : new nn
            }

            function nl() {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return !o && t && (o = nh()), o
            }

            function nc(t) {
                o = t
            }
            let nu = ["filters", "resizeFilter", "src", "crossOrigin"],
                nd = ["cropX", "cropY"];
            class ng extends iR {
                static getDefaults() {
                    return h(h({}, super.getDefaults()), ng.ownDefaults)
                }
                getElement() {
                    return this._element
                }
                setElement(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = t, this._originalElement = t, this._setWidthHeight(e), t.classList.add(ng.CSS_CANVAS), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters()
                }
                removeTexture(t) {
                    let e = nl(!1);
                    e instanceof no && e.evictCachesForKey(t)
                }
                dispose() {
                    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(t => {
                        let e = this[t];
                        e && x().dispose(e), this[t] = void 0
                    })
                }
                getCrossOrigin() {
                    return this._originalElement && (this._originalElement.crossOrigin || null)
                }
                getOriginalSize() {
                    let t = this.getElement();
                    return t ? {
                        width: t.naturalWidth || t.width,
                        height: t.naturalHeight || t.height
                    } : {
                        width: 0,
                        height: 0
                    }
                }
                _stroke(t) {
                    if (!this.stroke || 0 === this.strokeWidth) return;
                    let e = this.width / 2,
                        i = this.height / 2;
                    t.beginPath(), t.moveTo(-e, -i), t.lineTo(e, -i), t.lineTo(e, i), t.lineTo(-e, i), t.lineTo(-e, -i), t.closePath()
                }
                toObject() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = [];
                    return this.filters.forEach(t => {
                        t && e.push(t.toObject())
                    }), h(h({}, super.toObject([...nd, ...t])), {}, {
                        src: this.getSrc(),
                        crossOrigin: this.getCrossOrigin(),
                        filters: e
                    }, this.resizeFilter ? {
                        resizeFilter: this.resizeFilter.toObject()
                    } : {})
                }
                hasCrop() {
                    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height
                }
                _toSVG() {
                    let t = [],
                        e = this._element,
                        i = -this.width / 2,
                        r = -this.height / 2,
                        s = [],
                        n = [],
                        o = "",
                        a = "";
                    if (!e) return [];
                    if (this.hasCrop()) {
                        let t = Q();
                        s.push('<clipPath id="imageCrop_' + t + '">\n', '	<rect x="' + i + '" y="' + r + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), o = ' clip-path="url(#imageCrop_' + t + ')" '
                    }
                    if (this.imageSmoothing || (a = ' image-rendering="optimizeSpeed"'), t.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(!0), '" x="').concat(i - this.cropX, '" y="').concat(r - this.cropY, '" width="').concat(e.width || e.naturalWidth, '" height="').concat(e.height || e.naturalHeight, '"').concat(a).concat(o, "></image>\n")), this.stroke || this.strokeDashArray) {
                        let t = this.fill;
                        this.fill = null, n = ['	<rect x="'.concat(i, '" y="').concat(r, '" width="').concat(this.width, '" height="').concat(this.height, '" styles="').concat(this.getSvgStyles(), '" />\n')], this.fill = t
                    }
                    return "fill" !== this.paintFirst ? s.concat(n, t) : s.concat(t, n)
                }
                getSrc(t) {
                    let e = t ? this._element : this._originalElement;
                    return e ? e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") || "" : e.src : this.src || ""
                }
                getSvgSrc(t) {
                    return this.getSrc(t)
                }
                setSrc(t) {
                    let {
                        crossOrigin: e,
                        signal: i
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return tv(t, {
                        crossOrigin: e,
                        signal: i
                    }).then(t => {
                        void 0 !== e && this.set({
                            crossOrigin: e
                        }), this.setElement(t)
                    })
                }
                toString() {
                    return '#<Image: { src: "'.concat(this.getSrc(), '" }>')
                }
                applyResizeFilters() {
                    let t = this.resizeFilter,
                        e = this.minimumScaleTrigger,
                        i = this.getTotalObjectScaling(),
                        r = i.x,
                        s = i.y,
                        n = this._filteredEl || this._originalElement;
                    if (this.group && this.set("dirty", !0), !t || r > e && s > e) {
                        this._element = n, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, this._lastScaleY = s;
                        return
                    }
                    let o = $(),
                        a = n.width,
                        h = n.height;
                    o.width = a, o.height = h, this._element = o, this._lastScaleX = t.scaleX = r, this._lastScaleY = t.scaleY = s, nl().applyFilters([t], n, a, h, this._element), this._filterScalingX = o.width / this._originalElement.width, this._filterScalingY = o.height / this._originalElement.height
                }
                applyFilters() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
                    if (t = t.filter(t => t && !t.isNeutralState()), this.set("dirty", !0), this.removeTexture("".concat(this.cacheKey, "_filtered")), 0 === t.length) {
                        this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, this._filterScalingY = 1;
                        return
                    }
                    let e = this._originalElement,
                        i = e.naturalWidth || e.width,
                        r = e.naturalHeight || e.height;
                    if (this._element === this._originalElement) {
                        let t = $();
                        t.width = i, t.height = r, this._element = t, this._filteredEl = t
                    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, i, r), this._lastScaleX = 1, this._lastScaleY = 1);
                    nl().applyFilters(t, this._originalElement, i, r, this._element), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height)
                }
                _render(t) {
                    t.imageSmoothingEnabled = this.imageSmoothing, !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t)
                }
                drawCacheOnCanvas(t) {
                    t.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t)
                }
                shouldCache() {
                    return this.needsItsOwnCache()
                }
                _renderFill(t) {
                    let e = this._element;
                    if (!e) return;
                    let i = this._filterScalingX,
                        r = this._filterScalingY,
                        s = this.width,
                        n = this.height,
                        o = Math.max(this.cropX, 0),
                        a = Math.max(this.cropY, 0),
                        h = e.naturalWidth || e.width,
                        l = e.naturalHeight || e.height,
                        c = o * i,
                        u = a * r,
                        d = Math.min(s * i, h - c),
                        g = Math.min(n * r, l - u),
                        f = Math.min(s, h / i - o),
                        p = Math.min(n, l / r - a);
                    e && t.drawImage(e, c, u, d, g, -s / 2, -n / 2, f, p)
                }
                _needsResize() {
                    let t = this.getTotalObjectScaling();
                    return t.x !== this._lastScaleX || t.y !== this._lastScaleY
                }
                _resetWidthHeight() {
                    this.set(this.getOriginalSize())
                }
                _setWidthHeight() {
                    let {
                        width: t,
                        height: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = this.getOriginalSize();
                    this.width = t || i.width, this.height = e || i.height
                }
                parsePreserveAspectRatioAttribute() {
                    let t = tA(this.preserveAspectRatio || ""),
                        e = this.width,
                        i = this.height,
                        r = {
                            width: e,
                            height: i
                        },
                        s = this._element.width,
                        n = this._element.height,
                        o = 1,
                        a = 1,
                        h = 0,
                        l = 0,
                        c = 0,
                        u = 0,
                        d;
                    return t && (t.alignX !== F || t.alignY !== F) ? ("meet" === t.meetOrSlice && (d = (e - s * (o = a = ry(this._element, r))) / 2, "Min" === t.alignX && (h = -d), "Max" === t.alignX && (h = d), d = (i - n * a) / 2, "Min" === t.alignY && (l = -d), "Max" === t.alignY && (l = d)), "slice" === t.meetOrSlice && (d = s - e / (o = a = rx(this._element, r)), "Mid" === t.alignX && (c = d / 2), "Max" === t.alignX && (c = d), d = n - i / a, "Mid" === t.alignY && (u = d / 2), "Max" === t.alignY && (u = d), s = e / o, n = i / a)) : (o = e / s, a = i / n), {
                        width: s,
                        height: n,
                        scaleX: o,
                        scaleY: a,
                        offsetLeft: h,
                        offsetTop: l,
                        cropX: c,
                        cropY: u
                    }
                }
                static fromObject(t) {
                    let {
                        filters: e,
                        resizeFilter: i,
                        src: r,
                        crossOrigin: s
                    } = t, n = c(t, nu), o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Promise.all([tv(r, h(h({}, o), {}, {
                        crossOrigin: s
                    })), e && ty(e, o), i && ty([i], o), tx(n, o)]).then(t => {
                        let [e, i = [],
                            [s] = [], o = {}
                        ] = t;
                        return new this(e, h(h({}, n), {}, {
                            src: r,
                            filters: i,
                            resizeFilter: s
                        }, o))
                    })
                }
                static fromURL(t) {
                    let {
                        crossOrigin: e = null,
                        signal: i
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
                    return tv(t, {
                        crossOrigin: e,
                        signal: i
                    }).then(t => new this(t, r))
                }
                static async fromElement(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        r = rs(t, this.ATTRIBUTE_NAMES, i);
                    return this.fromURL(r["xlink:href"], e, r).catch(t => (console.log(t), null))
                }
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(h({
                        filters: []
                    }, e)), l(this, "_lastScaleX", 1), l(this, "_lastScaleY", 1), l(this, "_filterScalingX", 1), l(this, "_filterScalingY", 1), this.cacheKey = "texture".concat(Q()), this.setElement("string" == typeof t ? (this.canvas && tz(this.canvas.getElement()) || C()).getElementById(t) : t, e)
                }
            }

            function nf(t) {
                let e, i;
                if (!iq.test(t.nodeName)) return {};
                let r = t.getAttribute("viewBox"),
                    s = 1,
                    n = 1,
                    o = 0,
                    a = 0,
                    h = t.getAttribute("width"),
                    l = t.getAttribute("height"),
                    c = t.getAttribute("x") || 0,
                    u = t.getAttribute("y") || 0,
                    d = !(r && iJ.test(r)),
                    g = !h || !l || "100%" === h || "100%" === l,
                    f = "",
                    p = 0,
                    m = 0;
                if (d && (c || u) && t.parentNode && "#document" !== t.parentNode.nodeName && (f = " translate(" + tE(c || "0") + " " + tE(u || "0") + ") ", e = (t.getAttribute("transform") || "") + f, t.setAttribute("transform", e), t.removeAttribute("x"), t.removeAttribute("y")), d && g) return {
                    width: 0,
                    height: 0
                };
                let _ = {
                    width: 0,
                    height: 0
                };
                if (d) return _.width = tE(h), _.height = tE(l), _;
                let v = r.match(iJ);
                o = -parseFloat(v[1]), a = -parseFloat(v[2]);
                let y = parseFloat(v[3]),
                    x = parseFloat(v[4]);
                _.minX = o, _.minY = a, _.viewBoxWidth = y, _.viewBoxHeight = x, g ? (_.width = y, _.height = x) : (_.width = tE(h), _.height = tE(l), s = _.width / y, n = _.height / x);
                let C = tA(t.getAttribute("preserveAspectRatio") || "");
                if (C.alignX !== F && ("meet" === C.meetOrSlice && (n = s = s > n ? n : s), "slice" === C.meetOrSlice && (n = s = s > n ? s : n), p = _.width - y * s, m = _.height - x * s, "Mid" === C.alignX && (p /= 2), "Mid" === C.alignY && (m /= 2), "Min" === C.alignX && (p = 0), "Min" === C.alignY && (m = 0)), 1 === s && 1 === n && 0 === o && 0 === a && 0 === c && 0 === u) return _;
                if ((c || u) && "#document" !== t.parentNode.nodeName && (f = " translate(" + tE(c || "0") + " " + tE(u || "0") + ") "), e = f + " matrix(" + s + " 0 0 " + n + " " + (o * s + p) + " " + (a * n + m) + ") ", "svg" === t.nodeName) {
                    for (i = t.ownerDocument.createElementNS(iV, "g"); t.firstChild;) i.appendChild(t.firstChild);
                    t.appendChild(i)
                } else(i = t).removeAttribute("x"), i.removeAttribute("y"), e = i.getAttribute("transform") + e;
                return i.setAttribute("transform", e), _
            }
            l(ng, "type", "Image"), l(ng, "cacheProperties", [...e7, ...nd]), l(ng, "ownDefaults", {
                strokeWidth: 0,
                srcFromAttribute: !1,
                minimumScaleTrigger: .5,
                cropX: 0,
                cropY: 0,
                imageSmoothing: !0
            }), l(ng, "CSS_CANVAS", "canvas-img"), l(ng, "ATTRIBUTE_NAMES", [...iX, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "crossOrigin", "image-rendering"]), R.setClass(ng), R.setSVGClass(ng);
            let np = iY(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);

            function nm(t, e) {
                if (t.getElementById) return t.getElementById(e);
                let i = t.getElementsByTagName("*");
                for (let t = 0, r = i.length; t < r; t++) {
                    let r = i[t];
                    if (e === r.getAttribute("id")) return r
                }
                return null
            }

            function n_(t, e) {
                let i, r = [],
                    s, n, o;
                for (n = 0, o = e.length; n < o; n++) i = e[n], s = t.getElementsByTagNameNS("http://www.w3.org/2000/svg", i), r = r.concat(Array.from(s));
                return r
            }
            let nv = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"],
                ny = "xlink:href",
                nx = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"];

            function nC(t) {
                let e, i, r = t.getElementsByTagName("style"),
                    s = {};
                for (e = 0, i = r.length; e < i; e++) {
                    let t = (r[e].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
                    "" !== t.trim() && t.split("}").filter(function(t) {
                        return t.trim()
                    }).forEach(function(t) {
                        let r = t.split("{"),
                            n = {},
                            o = r[1].trim().split(";").filter(function(t) {
                                return t.trim()
                            });
                        for (e = 0, i = o.length; e < i; e++) {
                            let t = o[e].split(":"),
                                i = t[0].trim(),
                                r = t[1].trim();
                            n[i] = r
                        }(t = r[0].trim()).split(",").forEach(t => {
                            "" !== (t = t.replace(/^svg/i, "").trim()) && (s[t] = h(h({}, s[t] || {}), n))
                        })
                    })
                }
                return s
            }
            let nb = t => R.getSVGClass(t.tagName.toLowerCase().replace("svg:", ""));
            class nS {
                parse() {
                    return Promise.all(this.elements.map(t => this.createObject(t)))
                }
                async createObject(t) {
                    let e = nb(t);
                    if (e) {
                        let i = await e.fromElement(t, this.options, this.cssRules);
                        return this.resolveGradient(i, t, "fill"), this.resolveGradient(i, t, "stroke"), i instanceof ng && i._originalElement ? r2(i, i.parsePreserveAspectRatioAttribute()) : r2(i), await this.resolveClipPath(i, t), this.reviver && this.reviver(t, i), i
                    }
                    return null
                }
                extractPropertyDefinition(t, e, i) {
                    let r = t[e],
                        s = this.regexUrl;
                    if (!s.test(r)) return;
                    s.lastIndex = 0;
                    let n = s.exec(r)[1];
                    return s.lastIndex = 0, i[n]
                }
                resolveGradient(t, e, i) {
                    let r = this.extractPropertyDefinition(t, i, this.gradientDefs);
                    if (r) {
                        let s = e.getAttribute(i + "-opacity"),
                            n = sp.fromElement(r, t, h(h({}, this.options), {}, {
                                opacity: s
                            }));
                        t.set(i, n)
                    }
                }
                async resolveClipPath(t, e) {
                    let i = this.extractPropertyDefinition(t, "clipPath", this.clipPaths);
                    if (!i) return void delete t.clipPath;
                    {
                        let r = to(t.calcTransformMatrix()),
                            s = i[0].parentElement,
                            n = e;
                        for (; n.parentElement && n.getAttribute("clip-path") !== t.clipPath;) n = n.parentElement;
                        n.parentElement.appendChild(s);
                        let o = await Promise.all(i.map(t => nb(t).fromElement(t, this.options, this.cssRules).then(t => (r2(t), t.fillRule = t.clipRule, delete t.clipRule, t)))),
                            a = 1 === o.length ? o[0] : new rl(o),
                            h = ta(r, a.calcTransformMatrix());
                        a.clipPath && await this.resolveClipPath(a, n);
                        let {
                            scaleX: l,
                            scaleY: c,
                            angle: u,
                            skewX: d,
                            translateX: g,
                            translateY: f
                        } = tl(h);
                        a.set({
                            flipX: !1,
                            flipY: !1
                        }), a.set({
                            scaleX: l,
                            scaleY: c,
                            angle: u,
                            skewX: d,
                            skewY: 0
                        }), a.setPositionByOrigin(new H(g, f), P, P), t.clipPath = a
                    }
                }
                constructor(t, e, i, r, s) {
                    this.elements = t, this.options = e, this.reviver = i, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = r, this.clipPaths = s, this.gradientDefs = function(t) {
                        let e = n_(t, nx),
                            i = {},
                            r = e.length;
                        for (; r--;) {
                            let s = e[r];
                            s.getAttribute("xlink:href") && function t(e, i) {
                                var r;
                                let s = nm(e, (null == (r = i.getAttribute(ny)) ? void 0 : r.slice(1)) || "");
                                if (s && s.getAttribute(ny) && t(e, s), s && (nv.forEach(t => {
                                        let e = s.getAttribute(t);
                                        !i.hasAttribute(t) && e && i.setAttribute(t, e)
                                    }), !i.children.length)) {
                                    let t = s.cloneNode(!0);
                                    for (; t.firstChild;) i.appendChild(t.firstChild)
                                }
                                i.removeAttribute(ny)
                            }(t, s);
                            let n = s.getAttribute("id");
                            n && (i[n] = s)
                        }
                        return i
                    }(r), this.cssRules = nC(r)
                }
            }
            let nw = t => iN.test(t.nodeName.replace("svg:", "")),
                nT = () => ({
                    objects: [],
                    elements: [],
                    options: {},
                    allElements: []
                });
            async function nO(t, e) {
                let {
                    crossOrigin: i,
                    signal: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (r && r.aborted) return console.log("`options.signal` is in `aborted` state"), nT();
                let s = t.documentElement;
                ! function(t) {
                    let e = n_(t, ["use", "svg:use"]),
                        i = 0;
                    for (; e.length && i < e.length;) {
                        let r = e[i],
                            s = r.getAttribute("xlink:href") || r.getAttribute("href");
                        if (null === s) return;
                        let n = s.slice(1),
                            o = r.getAttribute("x") || 0,
                            a = r.getAttribute("y") || 0,
                            h = nm(t, n).cloneNode(!0),
                            l = (h.getAttribute("transform") || "") + " translate(" + o + ", " + a + ")",
                            c = e.length;
                        if (nf(h), /^svg$/i.test(h.nodeName)) {
                            let t = h.ownerDocument.createElementNS(iV, "g");
                            for (let e = 0, i = h.attributes, r = i.length; e < r; e++) {
                                let r = i.item(e);
                                r && t.setAttributeNS(iV, r.nodeName, r.nodeValue)
                            }
                            for (; h.firstChild;) t.appendChild(h.firstChild);
                            h = t
                        }
                        for (let t = 0, e = r.attributes, i = e.length; t < i; t++) {
                            let i = e.item(t);
                            if (!i) continue;
                            let {
                                nodeName: r,
                                nodeValue: s
                            } = i;
                            "x" !== r && "y" !== r && "xlink:href" !== r && "href" !== r && ("transform" === r ? l = s + " " + l : h.setAttribute(r, s))
                        }
                        h.setAttribute("transform", l), h.setAttribute("instantiated_by_use", "1"), h.removeAttribute("id"), r.parentNode.replaceChild(h, r), e.length === c && i++
                    }
                }(t);
                let n = Array.from(s.getElementsByTagName("*")),
                    o = h(h({}, nf(s)), {}, {
                        crossOrigin: i,
                        signal: r
                    }),
                    a = n.filter(t => (nf(t), nw(t) && ! function(t) {
                        let e = t;
                        for (; e && (e = e.parentElement);)
                            if (e && e.nodeName && np.test(e.nodeName.replace("svg:", "")) && !e.getAttribute("instantiated_by_use")) return !0;
                        return !1
                    }(t)));
                if (!a || a && !a.length) return h(h({}, nT()), {}, {
                    options: o,
                    allElements: n
                });
                let l = {};
                n.filter(t => "clipPath" === t.nodeName.replace("svg:", "")).forEach(t => {
                    l[t.getAttribute("id")] = Array.from(t.getElementsByTagName("*")).filter(t => nw(t))
                });
                let c = new nS(a, o, e, t, l);
                return {
                    objects: await c.parse(),
                    elements: a,
                    options: o,
                    allElements: n
                }
            }

            function nk(t, e, i) {
                return nO(new(b()).DOMParser().parseFromString(t.trim(), "text/xml"), e, i)
            }

            function nD(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise((e, r) => {
                    r1(t.replace(/^\n\s*/, "").trim(), {
                        onComplete: t => {
                            let i = t.responseXML;
                            i && e(i), r()
                        },
                        signal: i.signal
                    })
                }).then(t => nO(t, e, i)).catch(() => nT())
            }
            let nM = t => function(e, i, r) {
                    var s, n;
                    return new H(r.points[t].x - r.pathOffset.x, r.points[t].y - r.pathOffset.y).transform(ta(null != (s = null == (n = r.canvas) ? void 0 : n.viewportTransform) ? s : M, r.calcTransformMatrix()))
                },
                nP = (t, e, i, r) => {
                    let s = e.target,
                        n = e.pointIndex,
                        o = eu(e, P, P, i, r),
                        a = new H(s.width, s.height),
                        h = s._getTransformedDimensions(),
                        l = a.divide(h),
                        c = new H(s.flipX ? -1 : 1, s.flipY ? -1 : 1),
                        u = o.multiply(c).multiply(l).add(s.pathOffset);
                    return s.points[n] = u, s.setDimensions(), !0
                },
                nE = (t, e) => function(i, r, s, n) {
                    let o = r.target,
                        a = new H(o.points[(t > 0 ? t : o.points.length) - 1]),
                        l = a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),
                        c = e(i, h(h({}, r), {}, {
                            pointIndex: t
                        }), s, n),
                        u = new H(o.flipX ? -1 : 1, o.flipY ? -1 : 1),
                        d = a.subtract(o.pathOffset).divide(o._getNonTransformedDimensions()).multiply(u);
                    return o.setPositionByOrigin(l, d.x + .5, d.y + .5), c
                };
            var nA = Object.freeze({
                __proto__: null,
                changeWidth: is,
                createObjectDefaultControls: iA,
                createPolyControls: function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = {};
                    for (let r = 0; r < ("number" == typeof t ? t : t.points.length); r++) i["p".concat(r)] = new ih(h({
                        actionName: "modifyPoly",
                        positionHandler: nM(r),
                        actionHandler: nE(r, nP)
                    }, e));
                    return i
                },
                createResizeControls: ij,
                createTextboxDefaultControls: iF,
                dragHandler: ed,
                getLocalPoint: eu,
                renderCircleControl: io,
                renderSquareControl: ia,
                rotationStyleHandler: il,
                rotationWithSnapping: ic,
                scaleCursorStyleHandler: ip,
                scaleOrSkewActionName: iD,
                scaleSkewCursorStyleHandler: iM,
                scalingEqually: i_,
                scalingX: iv,
                scalingXOrSkewingY: iP,
                scalingY: iy,
                scalingYOrSkewingX: iE,
                skewCursorStyleHandler: iS,
                skewHandlerX: iT,
                skewHandlerY: iO,
                wrapWithFireEvent: ii,
                wrapWithFixedAnchor: ir
            });
            let nj = t => void 0 !== t.webgl,
                nF = "precision highp float",
                nL = "\n    ".concat(nF, ";\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }"),
                nB = ["type"],
                nR = ["type"];
            class nI {
                get type() {
                    return this.constructor.type
                }
                getFragmentSource() {
                    return nL
                }
                createProgram(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(),
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.vertexSource,
                        {
                            WebGLProbe: {
                                GLPrecision: r = "highp"
                            }
                        } = x();
                    "highp" !== r && (e = e.replace(RegExp(nF, "g"), nF.replace("highp", r)));
                    let s = t.createShader(t.VERTEX_SHADER),
                        n = t.createShader(t.FRAGMENT_SHADER),
                        o = t.createProgram();
                    if (!s || !n || !o) throw Error("Vertex, fragment shader or program creation error");
                    if (t.shaderSource(s, i), t.compileShader(s), !t.getShaderParameter(s, t.COMPILE_STATUS)) throw Error("Vertex shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(s)));
                    if (t.shaderSource(n, e), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) throw Error("Fragment shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(n)));
                    if (t.attachShader(o, s), t.attachShader(o, n), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) throw Error('Shader link error for "${this.type}" ' + t.getProgramInfoLog(o));
                    let a = this.getUniformLocations(t, o) || {};
                    return a.uStepW = t.getUniformLocation(o, "uStepW"), a.uStepH = t.getUniformLocation(o, "uStepH"), {
                        program: o,
                        attributeLocations: this.getAttributeLocations(t, o),
                        uniformLocations: a
                    }
                }
                getAttributeLocations(t, e) {
                    return {
                        aPosition: t.getAttribLocation(e, "aPosition")
                    }
                }
                getUniformLocations(t, e) {
                    return {}
                }
                sendAttributeData(t, e, i) {
                    let r = e.aPosition,
                        s = t.createBuffer();
                    t.bindBuffer(t.ARRAY_BUFFER, s), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW)
                }
                _setupFrameBuffer(t) {
                    let e = t.context;
                    if (t.passes > 1) {
                        let i = t.destinationWidth,
                            r = t.destinationHeight;
                        (t.sourceWidth !== i || t.sourceHeight !== r) && (e.deleteTexture(t.targetTexture), t.targetTexture = t.filterBackend.createTexture(e, i, r)), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.targetTexture, 0)
                    } else e.bindFramebuffer(e.FRAMEBUFFER, null), e.finish()
                }
                _swapTextures(t) {
                    t.passes--, t.pass++;
                    let e = t.targetTexture;
                    t.targetTexture = t.sourceTexture, t.sourceTexture = e
                }
                isNeutralState(t) {
                    let e = this.mainParameter,
                        i = this.constructor.defaults[e];
                    if (!e) return !1;
                    {
                        let t = this[e];
                        return Array.isArray(i) && Array.isArray(t) ? i.every((e, i) => e === t[i]) : i === t
                    }
                }
                applyTo(t) {
                    nj(t) ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t)
                }
                applyTo2d(t) {}
                getCacheKey() {
                    return this.type
                }
                retrieveShader(t) {
                    let e = this.getCacheKey();
                    return t.programCache[e] || (t.programCache[e] = this.createProgram(t.context)), t.programCache[e]
                }
                applyToWebGL(t) {
                    let e = t.context,
                        i = this.retrieveShader(t);
                    0 === t.pass && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture), e.useProgram(i.program), this.sendAttributeData(e, i.attributeLocations, t.aPosition), e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth), e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight), this.sendUniformData(e, i.uniformLocations), e.viewport(0, 0, t.destinationWidth, t.destinationHeight), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
                }
                bindAdditionalTexture(t, e, i) {
                    t.activeTexture(i), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0)
                }
                unbindAdditionalTexture(t, e) {
                    t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0)
                }
                getMainParameter() {
                    return this.mainParameter ? this[this.mainParameter] : void 0
                }
                setMainParameter(t) {
                    this.mainParameter && (this[this.mainParameter] = t)
                }
                sendUniformData(t, e) {}
                createHelpLayer(t) {
                    if (!t.helpLayer) {
                        let e = $();
                        e.width = t.sourceWidth, e.height = t.sourceHeight, t.helpLayer = e
                    }
                }
                toObject() {
                    let t = this.mainParameter;
                    return h({
                        type: this.type
                    }, t ? {
                        [t]: this[t]
                    } : {})
                }
                toJSON() {
                    return this.toObject()
                }
                static async fromObject(t, e) {
                    return new this(c(t, nR))
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = c(t, nB);
                    l(this, "vertexSource", "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }"), Object.assign(this, this.constructor.defaults, e)
                }
            }
            l(nI, "type", "BaseFilter");
            let nX = {
                multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                add: "gl_FragColor.rgb += uColor.rgb;\n",
                difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
                tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
            };
            class nY extends nI {
                getCacheKey() {
                    return "".concat(this.type, "_").concat(this.mode)
                }
                getFragmentSource() {
                    return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ".concat(nX[this.mode], "\n        }\n      }\n      ")
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t, i = new tM(this.color).getSource(), r = i[0] * this.alpha, s = i[1] * this.alpha, n = i[2] * this.alpha, o = 1 - this.alpha;
                    for (let t = 0; t < e.length; t += 4) {
                        let i = e[t],
                            a = e[t + 1],
                            h = e[t + 2];
                        switch (this.mode) {
                            case "multiply":
                                e[t] = i * r / 255, e[t + 1] = a * s / 255, e[t + 2] = h * n / 255;
                                break;
                            case "screen":
                                e[t] = 255 - (255 - i) * (255 - r) / 255, e[t + 1] = 255 - (255 - a) * (255 - s) / 255, e[t + 2] = 255 - (255 - h) * (255 - n) / 255;
                                break;
                            case "add":
                                e[t] = i + r, e[t + 1] = a + s, e[t + 2] = h + n;
                                break;
                            case "difference":
                                e[t] = Math.abs(i - r), e[t + 1] = Math.abs(a - s), e[t + 2] = Math.abs(h - n);
                                break;
                            case "subtract":
                                e[t] = i - r, e[t + 1] = a - s, e[t + 2] = h - n;
                                break;
                            case "darken":
                                e[t] = Math.min(i, r), e[t + 1] = Math.min(a, s), e[t + 2] = Math.min(h, n);
                                break;
                            case "lighten":
                                e[t] = Math.max(i, r), e[t + 1] = Math.max(a, s), e[t + 2] = Math.max(h, n);
                                break;
                            case "overlay":
                                e[t] = r < 128 ? 2 * i * r / 255 : 255 - 2 * (255 - i) * (255 - r) / 255, e[t + 1] = s < 128 ? 2 * a * s / 255 : 255 - 2 * (255 - a) * (255 - s) / 255, e[t + 2] = n < 128 ? 2 * h * n / 255 : 255 - 2 * (255 - h) * (255 - n) / 255;
                                break;
                            case "exclusion":
                                e[t] = r + i - 2 * r * i / 255, e[t + 1] = s + a - 2 * s * a / 255, e[t + 2] = n + h - 2 * n * h / 255;
                                break;
                            case "tint":
                                e[t] = r + i * o, e[t + 1] = s + a * o, e[t + 2] = n + h * o
                        }
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uColor: t.getUniformLocation(e, "uColor")
                    }
                }
                sendUniformData(t, e) {
                    let i = new tM(this.color).getSource();
                    i[0] = this.alpha * i[0] / 255, i[1] = this.alpha * i[1] / 255, i[2] = this.alpha * i[2] / 255, i[3] = this.alpha, t.uniform4fv(e.uColor, i)
                }
                toObject() {
                    return {
                        type: this.type,
                        color: this.color,
                        mode: this.mode,
                        alpha: this.alpha
                    }
                }
            }
            l(nY, "defaults", {
                color: "#F95C63",
                mode: "multiply",
                alpha: 1
            }), l(nY, "type", "BlendColor"), R.setClass(nY);
            let nW = {
                    multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
                    mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
                },
                nV = ["type", "image"];
            class nG extends nI {
                getCacheKey() {
                    return "".concat(this.type, "_").concat(this.mode)
                }
                getFragmentSource() {
                    return nW[this.mode]
                }
                applyToWebGL(t) {
                    let e = t.context,
                        i = this.createTexture(t.filterBackend, this.image);
                    this.bindAdditionalTexture(e, i, e.TEXTURE1), super.applyToWebGL(t), this.unbindAdditionalTexture(e, e.TEXTURE1)
                }
                createTexture(t, e) {
                    return t.getCachedTexture(e.cacheKey, e.getElement())
                }
                calculateMatrix() {
                    let t = this.image,
                        {
                            width: e,
                            height: i
                        } = t.getElement();
                    return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / i, 1]
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e,
                            width: i,
                            height: r
                        },
                        filterBackend: {
                            resources: s
                        }
                    } = t, n = this.image;
                    s.blendImage || (s.blendImage = $());
                    let o = s.blendImage,
                        a = o.getContext("2d");
                    o.width !== i || o.height !== r ? (o.width = i, o.height = r) : a.clearRect(0, 0, i, r), a.setTransform(n.scaleX, 0, 0, n.scaleY, n.left, n.top), a.drawImage(n.getElement(), 0, 0, i, r);
                    let h = a.getImageData(0, 0, i, r).data;
                    for (let t = 0; t < e.length; t += 4) {
                        let i = e[t],
                            r = e[t + 1],
                            s = e[t + 2],
                            n = e[t + 3],
                            o = h[t],
                            a = h[t + 1],
                            l = h[t + 2],
                            c = h[t + 3];
                        switch (this.mode) {
                            case "multiply":
                                e[t] = i * o / 255, e[t + 1] = r * a / 255, e[t + 2] = s * l / 255, e[t + 3] = n * c / 255;
                                break;
                            case "mask":
                                e[t + 3] = c
                        }
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uTransformMatrix: t.getUniformLocation(e, "uTransformMatrix"),
                        uImage: t.getUniformLocation(e, "uImage")
                    }
                }
                sendUniformData(t, e) {
                    let i = this.calculateMatrix();
                    t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, !1, i)
                }
                toObject() {
                    return {
                        type: this.type,
                        image: this.image && this.image.toObject(),
                        mode: this.mode,
                        alpha: this.alpha
                    }
                }
                static fromObject(t, e) {
                    let {
                        type: i,
                        image: r
                    } = t, s = c(t, nV);
                    return ng.fromObject(r, e).then(t => new this(h(h({}, s), {}, {
                        image: t
                    })))
                }
            }
            l(nG, "type", "BlendImage"), l(nG, "defaults", {
                mode: "multiply",
                alpha: 1,
                vertexSource: "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    "
            }), R.setClass(nG);
            class nz extends nI {
                getFragmentSource() {
                    return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float total = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        float weight = 1.0 - abs(percent);\n        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\n        total += weight;\n      }\n      gl_FragColor = color / total;\n    }\n  "
                }
                applyTo(t) {
                    nj(t) ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = !0, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = !1, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t)
                }
                applyTo2d(t) {
                    t.imageData = this.simpleBlur(t)
                }
                simpleBlur(t) {
                    let e, i, r, s, {
                            ctx: n,
                            imageData: o,
                            filterBackend: {
                                resources: a
                            }
                        } = t,
                        {
                            width: h,
                            height: l
                        } = o;
                    a.blurLayer1 || (a.blurLayer1 = $(), a.blurLayer2 = $());
                    let c = a.blurLayer1,
                        u = a.blurLayer2;
                    (c.width !== h || c.height !== l) && (u.width = c.width = h, u.height = c.height = l);
                    let d = c.getContext("2d"),
                        g = u.getContext("2d"),
                        f = .06 * this.blur * .5;
                    for (d.putImageData(o, 0, 0), g.clearRect(0, 0, h, l), s = -15; s <= 15; s++) e = (Math.random() - .5) / 4, r = f * (i = s / 15) * h + e, g.globalAlpha = 1 - Math.abs(i), g.drawImage(c, r, e), d.drawImage(u, 0, 0), g.globalAlpha = 1, g.clearRect(0, 0, u.width, u.height);
                    for (s = -15; s <= 15; s++) e = (Math.random() - .5) / 4, r = f * (i = s / 15) * l + e, g.globalAlpha = 1 - Math.abs(i), g.drawImage(c, e, r), d.drawImage(u, 0, 0), g.globalAlpha = 1, g.clearRect(0, 0, u.width, u.height);
                    n.drawImage(c, 0, 0);
                    let p = n.getImageData(0, 0, c.width, c.height);
                    return d.globalAlpha = 1, d.clearRect(0, 0, c.width, c.height), p
                }
                getUniformLocations(t, e) {
                    return {
                        delta: t.getUniformLocation(e, "uDelta")
                    }
                }
                sendUniformData(t, e) {
                    let i = this.chooseRightDelta();
                    t.uniform2fv(e.delta, i)
                }
                chooseRightDelta() {
                    let t = 1,
                        e = [0, 0];
                    this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio);
                    let i = t * this.blur * .12;
                    return this.horizontal ? e[0] = i : e[1] = i, e
                }
            }
            l(nz, "type", "Blur"), l(nz, "defaults", {
                blur: 0,
                mainParameter: "blur"
            }), R.setClass(nz);
            class nH extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    if (0 === this.brightness) return;
                    let i = Math.round(255 * this.brightness);
                    for (let t = 0; t < e.length; t += 4) e[t] = e[t] + i, e[t + 1] = e[t + 1] + i, e[t + 2] = e[t + 2] + i
                }
                getUniformLocations(t, e) {
                    return {
                        uBrightness: t.getUniformLocation(e, "uBrightness")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uBrightness, this.brightness)
                }
            }
            l(nH, "type", "Brightness"), l(nH, "defaults", {
                brightness: 0,
                mainParameter: "brightness"
            }), R.setClass(nH);
            let nU = ["matrix"],
                nN = {
                    matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    mainParameter: "matrix",
                    colorsOnly: !0
                };
            class nq extends nI {
                setOptions(t) {
                    let {
                        matrix: e
                    } = t, i = c(t, nU);
                    e && (this.matrix = [...e]), Object.assign(this, i)
                }
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }"
                }
                applyTo2d(t) {
                    let e = t.imageData.data,
                        i = this.matrix,
                        r = this.colorsOnly;
                    for (let t = 0; t < e.length; t += 4) {
                        let s = e[t],
                            n = e[t + 1],
                            o = e[t + 2];
                        if (r) e[t] = s * i[0] + n * i[1] + o * i[2] + 255 * i[4], e[t + 1] = s * i[5] + n * i[6] + o * i[7] + 255 * i[9], e[t + 2] = s * i[10] + n * i[11] + o * i[12] + 255 * i[14];
                        else {
                            let r = e[t + 3];
                            e[t] = s * i[0] + n * i[1] + o * i[2] + r * i[3] + 255 * i[4], e[t + 1] = s * i[5] + n * i[6] + o * i[7] + r * i[8] + 255 * i[9], e[t + 2] = s * i[10] + n * i[11] + o * i[12] + r * i[13] + 255 * i[14], e[t + 3] = s * i[15] + n * i[16] + o * i[17] + r * i[18] + 255 * i[19]
                        }
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                        uConstants: t.getUniformLocation(e, "uConstants")
                    }
                }
                sendUniformData(t, e) {
                    let i = this.matrix,
                        r = [i[0], i[1], i[2], i[3], i[5], i[6], i[7], i[8], i[10], i[11], i[12], i[13], i[15], i[16], i[17], i[18]],
                        s = [i[4], i[9], i[14], i[19]];
                    t.uniformMatrix4fv(e.uColorMatrix, !1, r), t.uniform4fv(e.uConstants, s)
                }
            }

            function nK(t, e) {
                var i;
                let r = (l(i = class extends nq {}, "type", t), l(i, "defaults", h(h({}, nN), {}, {
                    mainParameter: void 0,
                    matrix: e
                })), i);
                return R.setClass(r, t), r
            }
            l(nq, "type", "ColorMatrix"), l(nq, "defaults", nN), R.setClass(nq);
            let nJ = nK("Brownie", [.5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0]),
                nZ = nK("Vintage", [.62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0]),
                nQ = nK("Kodachrome", [1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0]),
                n$ = nK("Technicolor", [1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0]),
                n0 = nK("Polaroid", [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0]),
                n1 = nK("Sepia", [.393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0]),
                n2 = nK("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]),
                n5 = ["subFilters"];
            class n3 extends nI {
                applyTo(t) {
                    nj(t) && (t.passes += this.subFilters.length - 1), this.subFilters.forEach(e => {
                        e.applyTo(t)
                    })
                }
                toObject() {
                    return h(h({}, super.toObject()), {}, {
                        subFilters: this.subFilters.map(t => t.toObject())
                    })
                }
                isNeutralState() {
                    return !this.subFilters.some(t => !t.isNeutralState())
                }
                static fromObject(t, e) {
                    return Promise.all((t.subFilters || []).map(t => R.getClass(t.type).fromObject(t, e))).then(t => new this({
                        subFilters: t
                    }))
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            subFilters: e = []
                        } = t;
                    super(c(t, n5)), this.subFilters = e
                }
            }
            l(n3, "type", "Composed"), R.setClass(n3);
            class n4 extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    if (0 === this.contrast) return;
                    let i = Math.floor(255 * this.contrast),
                        r = 259 * (i + 255) / (255 * (259 - i));
                    for (let t = 0; t < e.length; t += 4) e[t] = r * (e[t] - 128) + 128, e[t + 1] = r * (e[t + 1] - 128) + 128, e[t + 2] = r * (e[t + 2] - 128) + 128
                }
                getUniformLocations(t, e) {
                    return {
                        uContrast: t.getUniformLocation(e, "uContrast")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uContrast, this.contrast)
                }
            }
            l(n4, "type", "Contrast"), l(n4, "defaults", {
                contrast: 0,
                mainParameter: "contrast"
            }), R.setClass(n4);
            let n8 = {
                Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
                Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
                Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
                Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
                Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
                Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
                Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
                Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
            };
            class n6 extends nI {
                getCacheKey() {
                    return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(+!!this.opaque)
                }
                getFragmentSource() {
                    return n8[this.getCacheKey()]
                }
                applyTo2d(t) {
                    let e, i, r, s, n, o, a, h, l, c, u, d, g, f = t.imageData,
                        p = f.data,
                        m = this.matrix,
                        _ = Math.round(Math.sqrt(m.length)),
                        v = Math.floor(_ / 2),
                        y = f.width,
                        x = f.height,
                        C = t.ctx.createImageData(y, x),
                        b = C.data,
                        S = +!!this.opaque;
                    for (u = 0; u < x; u++)
                        for (c = 0; c < y; c++) {
                            for (g = 0, n = (u * y + c) * 4, e = 0, i = 0, r = 0, s = 0; g < _; g++)
                                for (d = 0; d < _; d++) a = u + g - v, o = c + d - v, a < 0 || a >= x || o < 0 || o >= y || (h = (a * y + o) * 4, l = m[g * _ + d], e += p[h] * l, i += p[h + 1] * l, r += p[h + 2] * l, S || (s += p[h + 3] * l));
                            b[n] = e, b[n + 1] = i, b[n + 2] = r, S ? b[n + 3] = p[n + 3] : b[n + 3] = s
                        }
                    t.imageData = C
                }
                getUniformLocations(t, e) {
                    return {
                        uMatrix: t.getUniformLocation(e, "uMatrix"),
                        uOpaque: t.getUniformLocation(e, "uOpaque"),
                        uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                        uSize: t.getUniformLocation(e, "uSize")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1fv(e.uMatrix, this.matrix)
                }
                toObject() {
                    return h(h({}, super.toObject()), {}, {
                        opaque: this.opaque,
                        matrix: [...this.matrix]
                    })
                }
            }
            l(n6, "type", "Convolute"), l(n6, "defaults", {
                opaque: !1,
                matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0]
            }), R.setClass(n6);
            let n9 = ["gamma"];
            class n7 extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t, i = this.gamma, r = 1 / i[0], s = 1 / i[1], n = 1 / i[2];
                    this.rgbValues || (this.rgbValues = {
                        r: new Uint8Array(256),
                        g: new Uint8Array(256),
                        b: new Uint8Array(256)
                    });
                    let o = this.rgbValues;
                    for (let t = 0; t < 256; t++) o.r[t] = 255 * Math.pow(t / 255, r), o.g[t] = 255 * Math.pow(t / 255, s), o.b[t] = 255 * Math.pow(t / 255, n);
                    for (let t = 0; t < e.length; t += 4) e[t] = o.r[e[t]], e[t + 1] = o.g[e[t + 1]], e[t + 2] = o.b[e[t + 2]]
                }
                getUniformLocations(t, e) {
                    return {
                        uGamma: t.getUniformLocation(e, "uGamma")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform3fv(e.uGamma, this.gamma)
                }
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            gamma: e = [1, 1, 1]
                        } = t;
                    super(c(t, n9)), this.gamma = e
                }
            }
            l(n7, "type", "Gamma"), l(n7, "defaults", {
                mainParameter: "gamma",
                gamma: [1, 1, 1]
            }), R.setClass(n7);
            let ot = {
                average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
                lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
                luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
            };
            class oe extends nI {
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    for (let t = 0, i; t < e.length; t += 4) {
                        switch (this.mode) {
                            case "average":
                                i = (e[t] + e[t + 1] + e[t + 2]) / 3;
                                break;
                            case "lightness":
                                i = (Math.min(e[t], e[t + 1], e[t + 2]) + Math.max(e[t], e[t + 1], e[t + 2])) / 2;
                                break;
                            case "luminosity":
                                i = .21 * e[t] + .72 * e[t + 1] + .07 * e[t + 2]
                        }
                        e[t] = i, e[t + 1] = i, e[t + 2] = i
                    }
                }
                getCacheKey() {
                    return "".concat(this.type, "_").concat(this.mode)
                }
                getFragmentSource() {
                    return ot[this.mode]
                }
                getUniformLocations(t, e) {
                    return {
                        uMode: t.getUniformLocation(e, "uMode")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1i(e.uMode, 1)
                }
                isNeutralState() {
                    return !1
                }
            }
            l(oe, "type", "Grayscale"), l(oe, "defaults", {
                mode: "average",
                mainParameter: "mode"
            }), R.setClass(oe);
            class oi extends nq {
                calculateMatrix() {
                    let t = this.rotation * Math.PI,
                        e = G(t),
                        i = z(t),
                        r = 1 / 3,
                        s = Math.sqrt(1 / 3) * i,
                        n = 1 - e;
                    this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = e + n / 3, this.matrix[1] = r * n - s, this.matrix[2] = r * n + s, this.matrix[5] = r * n + s, this.matrix[6] = e + r * n, this.matrix[7] = r * n - s, this.matrix[10] = r * n - s, this.matrix[11] = r * n + s, this.matrix[12] = e + r * n
                }
                isNeutralState() {
                    return this.calculateMatrix(), super.isNeutralState()
                }
                applyTo(t) {
                    this.calculateMatrix(), super.applyTo(t)
                }
            }
            l(oi, "type", "HueRotation"), l(oi, "defaults", {
                rotation: 0,
                mainParameter: "rotation"
            }), R.setClass(oi);
            class or extends nI {
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    for (let t = 0; t < e.length; t += 4) e[t] = 255 - e[t], e[t + 1] = 255 - e[t + 1], e[t + 2] = 255 - e[t + 2], this.alpha && (e[t + 3] = 255 - e[t + 3])
                }
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n"
                }
                isNeutralState() {
                    return !this.invert
                }
                getUniformLocations(t, e) {
                    return {
                        uInvert: t.getUniformLocation(e, "uInvert"),
                        uAlpha: t.getUniformLocation(e, "uAlpha")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1i(e.uInvert, Number(this.invert)), t.uniform1i(e.uAlpha, Number(this.alpha))
                }
            }
            l(or, "type", "Invert"), l(or, "defaults", {
                alpha: !1,
                invert: !0,
                mainParameter: "invert"
            }), R.setClass(or);
            class os extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    if (0 === this.noise) return;
                    let i = this.noise;
                    for (let t = 0; t < e.length; t += 4) {
                        let r = (.5 - Math.random()) * i;
                        e[t] += r, e[t + 1] += r, e[t + 2] += r
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uNoise: t.getUniformLocation(e, "uNoise"),
                        uSeed: t.getUniformLocation(e, "uSeed")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random())
                }
                toObject() {
                    return h(h({}, super.toObject()), {}, {
                        noise: this.noise
                    })
                }
            }
            l(os, "type", "Noise"), l(os, "defaults", {
                mainParameter: "noise",
                noise: 0
            }), R.setClass(os);
            class on extends nI {
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e,
                            width: i,
                            height: r
                        }
                    } = t;
                    for (let t = 0; t < r; t += this.blocksize)
                        for (let s = 0; s < i; s += this.blocksize) {
                            let n = 4 * t * i + 4 * s,
                                o = e[n],
                                a = e[n + 1],
                                h = e[n + 2],
                                l = e[n + 3];
                            for (let n = t; n < Math.min(t + this.blocksize, r); n++)
                                for (let t = s; t < Math.min(s + this.blocksize, i); t++) {
                                    let r = 4 * n * i + 4 * t;
                                    e[r] = o, e[r + 1] = a, e[r + 2] = h, e[r + 3] = l
                                }
                        }
                }
                isNeutralState() {
                    return 1 === this.blocksize
                }
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepW;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n"
                }
                getUniformLocations(t, e) {
                    return {
                        uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                        uStepW: t.getUniformLocation(e, "uStepW"),
                        uStepH: t.getUniformLocation(e, "uStepH")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uBlocksize, this.blocksize)
                }
            }
            l(on, "type", "Pixelate"), l(on, "defaults", {
                blocksize: 4,
                mainParameter: "blocksize"
            }), R.setClass(on);
            class oo extends nI {
                getFragmentShader() {
                    return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t, i = 255 * this.distance, r = new tM(this.color).getSource(), s = [r[0] - i, r[1] - i, r[2] - i], n = [r[0] + i, r[1] + i, r[2] + i];
                    for (let t = 0; t < e.length; t += 4) {
                        let i = e[t],
                            r = e[t + 1],
                            o = e[t + 2];
                        i > s[0] && r > s[1] && o > s[2] && i < n[0] && r < n[1] && o < n[2] && (e[t + 3] = 0)
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uLow: t.getUniformLocation(e, "uLow"),
                        uHigh: t.getUniformLocation(e, "uHigh")
                    }
                }
                sendUniformData(t, e) {
                    let i = new tM(this.color).getSource(),
                        r = this.distance,
                        s = [0 + i[0] / 255 - r, 0 + i[1] / 255 - r, 0 + i[2] / 255 - r, 1],
                        n = [i[0] / 255 + r, i[1] / 255 + r, i[2] / 255 + r, 1];
                    t.uniform4fv(e.uLow, s), t.uniform4fv(e.uHigh, n)
                }
                toObject() {
                    return h(h({}, super.toObject()), {}, {
                        color: this.color,
                        distance: this.distance
                    })
                }
            }
            l(oo, "type", "RemoveColor"), l(oo, "defaults", {
                color: "#FFFFFF",
                distance: .02,
                useAlpha: !1
            }), R.setClass(oo);
            class oa extends nI {
                getUniformLocations(t, e) {
                    return {
                        uDelta: t.getUniformLocation(e, "uDelta"),
                        uTaps: t.getUniformLocation(e, "uTaps")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t.uniform1fv(e.uTaps, this.taps)
                }
                getFilterWindow() {
                    let t = this.tempScale;
                    return Math.ceil(this.lanczosLobes / t)
                }
                getCacheKey() {
                    let t = this.getFilterWindow();
                    return "".concat(this.type, "_").concat(t)
                }
                getFragmentSource() {
                    let t = this.getFilterWindow();
                    return this.generateShader(t)
                }
                getTaps() {
                    let t = this.lanczosCreate(this.lanczosLobes),
                        e = this.tempScale,
                        i = this.getFilterWindow(),
                        r = Array(i);
                    for (let s = 1; s <= i; s++) r[s - 1] = t(s * e);
                    return r
                }
                generateShader(t) {
                    let e = Array(t);
                    for (let i = 1; i <= t; i++) e[i - 1] = "".concat(i, ".0 * uDelta");
                    return "\n      ".concat(this.fragmentSourceTOP, "\n      uniform float uTaps[").concat(t, "];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ").concat(e.map((t, e) => "\n              color += texture2D(uTexture, vTexCoord + ".concat(t, ") * uTaps[").concat(e, "] + texture2D(uTexture, vTexCoord - ").concat(t, ") * uTaps[").concat(e, "];\n              sum += 2.0 * uTaps[").concat(e, "];\n            ")).join("\n"), "\n        gl_FragColor = color / sum;\n      }\n    ")
                }
                applyToForWebgl(t) {
                    t.passes++, this.width = t.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = t.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t.destinationWidth = this.dW, super.applyTo(t), t.sourceWidth = t.destinationWidth, this.height = t.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t.destinationHeight = this.dH, super.applyTo(t), t.sourceHeight = t.destinationHeight
                }
                applyTo(t) {
                    nj(t) ? this.applyToForWebgl(t) : this.applyTo2d(t)
                }
                isNeutralState() {
                    return 1 === this.scaleX && 1 === this.scaleY
                }
                lanczosCreate(t) {
                    return e => {
                        if (e >= t || e <= -t) return 0;
                        if (e < 11920929e-14 && e > -11920929e-14) return 1;
                        let i = (e *= Math.PI) / t;
                        return Math.sin(e) / e * Math.sin(i) / i
                    }
                }
                applyTo2d(t) {
                    let e, i = t.imageData,
                        r = this.scaleX,
                        s = this.scaleY;
                    this.rcpScaleX = 1 / r, this.rcpScaleY = 1 / s;
                    let n = i.width,
                        o = i.height,
                        a = Math.round(n * r),
                        h = Math.round(o * s);
                    e = "sliceHack" === this.resizeType ? this.sliceByTwo(t, n, o, a, h) : "hermite" === this.resizeType ? this.hermiteFastResize(t, n, o, a, h) : "bilinear" === this.resizeType ? this.bilinearFiltering(t, n, o, a, h) : "lanczos" === this.resizeType ? this.lanczosResize(t, n, o, a, h) : new ImageData(a, h), t.imageData = e
                }
                sliceByTwo(t, e, i, r, s) {
                    let n = t.imageData,
                        o = !1,
                        a = !1,
                        h = .5 * e,
                        l = .5 * i,
                        c = t.filterBackend.resources,
                        u = 0,
                        d = 0,
                        g = e,
                        f = 0;
                    c.sliceByTwo || (c.sliceByTwo = $());
                    let p = c.sliceByTwo;
                    (p.width < 1.5 * e || p.height < i) && (p.width = 1.5 * e, p.height = i);
                    let m = p.getContext("2d");
                    for (m.clearRect(0, 0, 1.5 * e, i), m.putImageData(n, 0, 0), r = Math.floor(r), s = Math.floor(s); !o || !a;) e = h, i = l, r < Math.floor(.5 * h) ? h = Math.floor(.5 * h) : (h = r, o = !0), s < Math.floor(.5 * l) ? l = Math.floor(.5 * l) : (l = s, a = !0), m.drawImage(p, u, d, e, i, g, f, h, l), u = g, d = f, f += l;
                    return m.getImageData(u, d, r, s)
                }
                lanczosResize(t, e, i, r, s) {
                    let n = t.imageData.data,
                        o = t.ctx.createImageData(r, s),
                        a = o.data,
                        h = this.lanczosCreate(this.lanczosLobes),
                        l = this.rcpScaleX,
                        c = this.rcpScaleY,
                        u = 2 / this.rcpScaleX,
                        d = 2 / this.rcpScaleY,
                        g = Math.ceil(l * this.lanczosLobes / 2),
                        f = Math.ceil(c * this.lanczosLobes / 2),
                        p = {},
                        m = {
                            x: 0,
                            y: 0
                        },
                        _ = {
                            x: 0,
                            y: 0
                        };
                    return function t(v) {
                        let y, x, C, b, S, w, T, O, k, D, M;
                        for (y = 0, m.x = (v + .5) * l, _.x = Math.floor(m.x); y < s; y++) {
                            for (m.y = (y + .5) * c, _.y = Math.floor(m.y), S = 0, w = 0, T = 0, O = 0, k = 0, x = _.x - g; x <= _.x + g; x++)
                                if (!(x < 0) && !(x >= e)) {
                                    p[D = Math.floor(1e3 * Math.abs(x - m.x))] || (p[D] = {});
                                    for (let t = _.y - f; t <= _.y + f; t++) t < 0 || t >= i || (M = Math.floor(1e3 * Math.abs(t - m.y)), p[D][M] || (p[D][M] = h(Math.sqrt(Math.pow(D * u, 2) + Math.pow(M * d, 2)) / 1e3)), (C = p[D][M]) > 0 && (b = (t * e + x) * 4, S += C, w += C * n[b], T += C * n[b + 1], O += C * n[b + 2], k += C * n[b + 3]))
                                } a[b = (y * r + v) * 4] = w / S, a[b + 1] = T / S, a[b + 2] = O / S, a[b + 3] = k / S
                        }
                        return ++v < r ? t(v) : o
                    }(0)
                }
                bilinearFiltering(t, e, i, r, s) {
                    let n, o, a, h, l, c, u, d, g, f, p, m = 0,
                        _ = this.rcpScaleX,
                        v = this.rcpScaleY,
                        y = 4 * (e - 1),
                        x = t.imageData.data,
                        C = t.ctx.createImageData(r, s),
                        b = C.data;
                    for (l = 0; l < s; l++)
                        for (c = 0; c < r; c++)
                            for (g = 0, a = Math.floor(_ * c), h = Math.floor(v * l), u = _ * c - a, d = v * l - h, p = 4 * (h * e + a); g < 4; g++) n = x[p + g], o = x[p + 4 + g], f = n * (1 - u) * (1 - d) + o * u * (1 - d) + x[p + y + g] * d * (1 - u) + x[p + y + 4 + g] * u * d, b[m++] = f;
                    return C
                }
                hermiteFastResize(t, e, i, r, s) {
                    let n = this.rcpScaleX,
                        o = this.rcpScaleY,
                        a = Math.ceil(n / 2),
                        h = Math.ceil(o / 2),
                        l = t.imageData.data,
                        c = t.ctx.createImageData(r, s),
                        u = c.data;
                    for (let t = 0; t < s; t++)
                        for (let i = 0; i < r; i++) {
                            let s = (i + t * r) * 4,
                                c = 0,
                                d = 0,
                                g = 0,
                                f = 0,
                                p = 0,
                                m = 0,
                                _ = 0,
                                v = (t + .5) * o;
                            for (let r = Math.floor(t * o); r < (t + 1) * o; r++) {
                                let t = Math.abs(v - (r + .5)) / h,
                                    s = (i + .5) * n,
                                    o = t * t;
                                for (let t = Math.floor(i * n); t < (i + 1) * n; t++) {
                                    let i = Math.abs(s - (t + .5)) / a,
                                        n = Math.sqrt(o + i * i);
                                    n > 1 && n < -1 || (c = 2 * n * n * n - 3 * n * n + 1) > 0 && (_ += c * l[(i = 4 * (t + r * e)) + 3], g += c, l[i + 3] < 255 && (c = c * l[i + 3] / 250), f += c * l[i], p += c * l[i + 1], m += c * l[i + 2], d += c)
                                }
                            }
                            u[s] = f / d, u[s + 1] = p / d, u[s + 2] = m / d, u[s + 3] = _ / g
                        }
                    return c
                }
                toObject() {
                    return {
                        type: this.type,
                        scaleX: this.scaleX,
                        scaleY: this.scaleY,
                        resizeType: this.resizeType,
                        lanczosLobes: this.lanczosLobes
                    }
                }
            }
            l(oa, "type", "Resize"), l(oa, "defaults", {
                resizeType: "hermite",
                scaleX: 1,
                scaleY: 1,
                lanczosLobes: 3,
                fragmentSourceTOP: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n  "
            }), R.setClass(oa);
            class oh extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    if (0 === this.saturation) return;
                    let i = -this.saturation;
                    for (let t = 0; t < e.length; t += 4) {
                        let r = Math.max(e[t], e[t + 1], e[t + 2]);
                        e[t] += r !== e[t] ? (r - e[t]) * i : 0, e[t + 1] += r !== e[t + 1] ? (r - e[t + 1]) * i : 0, e[t + 2] += r !== e[t + 2] ? (r - e[t + 2]) * i : 0
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uSaturation: t.getUniformLocation(e, "uSaturation")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uSaturation, -this.saturation)
                }
            }
            l(oh, "type", "Saturation"), l(oh, "defaults", {
                saturation: 0,
                mainParameter: "saturation"
            }), R.setClass(oh);
            class ol extends nI {
                getFragmentSource() {
                    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n"
                }
                applyTo2d(t) {
                    let {
                        imageData: {
                            data: e
                        }
                    } = t;
                    if (0 === this.vibrance) return;
                    let i = -this.vibrance;
                    for (let t = 0; t < e.length; t += 4) {
                        let r = Math.max(e[t], e[t + 1], e[t + 2]),
                            s = 2 * Math.abs(r - (e[t] + e[t + 1] + e[t + 2]) / 3) / 255 * i;
                        e[t] += r !== e[t] ? (r - e[t]) * s : 0, e[t + 1] += r !== e[t + 1] ? (r - e[t + 1]) * s : 0, e[t + 2] += r !== e[t + 2] ? (r - e[t + 2]) * s : 0
                    }
                }
                getUniformLocations(t, e) {
                    return {
                        uVibrance: t.getUniformLocation(e, "uVibrance")
                    }
                }
                sendUniformData(t, e) {
                    t.uniform1f(e.uVibrance, -this.vibrance)
                }
            }
            l(ol, "type", "Vibrance"), l(ol, "defaults", {
                vibrance: 0,
                mainParameter: "vibrance"
            }), R.setClass(ol);
            var oc = Object.freeze({
                __proto__: null,
                BaseFilter: nI,
                BlackWhite: n2,
                BlendColor: nY,
                BlendImage: nG,
                Blur: nz,
                Brightness: nH,
                Brownie: nJ,
                ColorMatrix: nq,
                Composed: n3,
                Contrast: n4,
                Convolute: n6,
                Gamma: n7,
                Grayscale: oe,
                HueRotation: oi,
                Invert: or,
                Kodachrome: nQ,
                Noise: os,
                Pixelate: on,
                Polaroid: n0,
                RemoveColor: oo,
                Resize: oa,
                Saturation: oh,
                Sepia: n1,
                Technicolor: n$,
                Vibrance: ol,
                Vintage: nZ
            })
        }
    }
]);
//# sourceMappingURL=fabric-browserified.77714400.js.map