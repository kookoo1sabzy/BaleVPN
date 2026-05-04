try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9cee098-9e93-46f7-8762-f57966b787e8", e._sentryDebugIdIdentifier = "sentry-dbid-a9cee098-9e93-46f7-8762-f57966b787e8")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5850"], {
        54737: function(e, t, r) {
            let n, o;
            r.d(t, {
                Lp: () => ew
            });
            var a, i, s, c, l = r(58191),
                g = r.n(l),
                u = r(42048),
                A = r(91723),
                h = r(34208),
                w = r(72755),
                d = e => {
                    throw TypeError(e)
                },
                f = (e, t, r) => t.has(e) || d("Cannot " + r);
            let p = ["Aztec", "Codabar", "Code128", "Code39", "Code93", "DataBar", "DataBarExpanded", "DataMatrix", "DXFilmEdge", "EAN-13", "EAN-8", "ITF", "Linear-Codes", "Matrix-Codes", "MaxiCode", "MicroQRCode", "None", "PDF417", "QRCode", "rMQRCode", "UPC-A", "UPC-E"];

            function m(e) {
                return e.toLowerCase().replace(/_-\[\]/g, "")
            }
            let C = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"],
                E = {
                    formats: [],
                    tryHarder: !0,
                    tryRotate: !0,
                    tryInvert: !0,
                    tryDownscale: !0,
                    binarizer: "LocalAverage",
                    isPure: !1,
                    downscaleFactor: 3,
                    downscaleThreshold: 500,
                    minLineCount: 2,
                    maxNumberOfSymbols: 255,
                    tryCode39ExtendedMode: !1,
                    validateCode39CheckSum: !1,
                    validateITFCheckSum: !1,
                    returnCodabarStartEnd: !1,
                    returnErrors: !1,
                    eanAddOnSymbol: "Read",
                    textMode: "Plain",
                    characterSet: "Unknown"
                };

            function B(e, t) {
                var r, n, o, a;
                return {
                    ...t,
                    formats: t.formats.join("|"),
                    binarizer: (r = t.binarizer, e.Binarizer[r]),
                    eanAddOnSymbol: (n = t.eanAddOnSymbol, e.EanAddOnSymbol[n]),
                    textMode: (o = t.textMode, e.TextMode[o]),
                    characterSet: (a = t.characterSet, e.CharacterSet[a])
                }
            }

            function y(e) {
                return {
                    ...e,
                    format: function(e) {
                        let t = m(e),
                            r = 0,
                            n = p.length - 1;
                        for (; r <= n;) {
                            let e = Math.floor((r + n) / 2),
                                o = p[e],
                                a = m(o);
                            if (a === t) return o;
                            a < t ? r = e + 1 : n = e - 1
                        }
                        return "None"
                    }(e.format),
                    eccLevel: e.eccLevel,
                    contentType: C[e.contentType.value]
                }
            }
            let v = {
                    locateFile: (e, t) => {
                        let r = e.match(/_(.+?)\.wasm$/);
                        return r ? `https://fastly.jsdelivr.net/npm/zxing-wasm@1.2.14/dist/${r[1]}/${e}` : t + e
                    }
                },
                M = new WeakMap;

            function T(e, t) {
                var r;
                let n = M.get(e);
                if (null != n && n.modulePromise && void 0 === t) return n.modulePromise;
                let o = null != (r = null == n ? void 0 : n.moduleOverrides) ? r : v,
                    a = e({
                        ...o
                    });
                return M.set(e, {
                    moduleOverrides: o,
                    modulePromise: a
                }), a
            }
            async function D(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
                    n = {
                        ...E,
                        ...r
                    },
                    o = await T(e),
                    {
                        size: a
                    } = t,
                    i = new Uint8Array(await t.arrayBuffer()),
                    s = o._malloc(a);
                o.HEAPU8.set(i, s);
                let c = o.readBarcodesFromImage(s, a, B(o, n));
                o._free(s);
                let l = [];
                for (let e = 0; e < c.size(); ++e) l.push(y(c.get(e)));
                return l
            }
            async function q(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
                    n = {
                        ...E,
                        ...r
                    },
                    o = await T(e),
                    {
                        data: a,
                        width: i,
                        height: s,
                        data: {
                            byteLength: c
                        }
                    } = t,
                    l = o._malloc(c);
                o.HEAPU8.set(a, l);
                let g = o.readBarcodesFromPixmap(l, i, s, B(o, n));
                o._free(l);
                let u = [];
                for (let e = 0; e < g.size(); ++e) u.push(y(g.get(e)));
                return u
            }({
                ...E,
                formats: [...E.formats]
            });
            var I = (i = "u" > typeof document && (null == (a = document.currentScript) ? void 0 : a.tagName.toUpperCase()) === "SCRIPT" ? document.currentScript.src : void 0, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var t, n, o, a, s, c = new Promise((e, t) => {
                        a = e, s = t
                    }),
                    l = "object" == typeof window,
                    g = "u" > typeof Bun,
                    u = "function" == typeof importScripts;
                "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && process.type;
                var A = Object.assign({}, e),
                    h = "./this.program",
                    w = "";
                (l || u || g) && (u ? w = self.location.href : "u" > typeof document && (null == (C = document.currentScript) ? void 0 : C.tagName.toUpperCase()) === "SCRIPT" && (w = document.currentScript.src), i && (w = i), w = w.startsWith("blob:") ? "" : w.substr(0, w.replace(/[?#].*/, "").lastIndexOf("/") + 1), u && (m = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
                }), p = e => fetch(e, {
                    credentials: "same-origin"
                }).then(e => e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url))));
                var d = e.print || console.log.bind(console),
                    f = e.printErr || console.error.bind(console);
                Object.assign(e, A), A = null, e.arguments && e.arguments, e.thisProgram && (h = e.thisProgram);
                var p, m, C, E, B, y, v, M, T, D, q, I, F = e.wasmBinary,
                    G = !1;

                function Y() {
                    var t = E.buffer;
                    e.HEAP8 = B = new Int8Array(t), e.HEAP16 = v = new Int16Array(t), e.HEAPU8 = y = new Uint8Array(t), e.HEAPU16 = M = new Uint16Array(t), e.HEAP32 = T = new Int32Array(t), e.HEAPU32 = D = new Uint32Array(t), e.HEAPF32 = q = new Float32Array(t), e.HEAPF64 = I = new Float64Array(t)
                }
                var b = [],
                    V = [],
                    R = [],
                    k = 0,
                    Q = null;

                function N(t) {
                    null == (r = e.onAbort) || r.call(e, t), f(t = "Aborted(" + t + ")"), G = !0, t += ". Build with -sASSERTIONS for more info.";
                    var r, n = new WebAssembly.RuntimeError(t);
                    throw s(n), n
                }

                function x(e) {
                    if (e == X && F) return new Uint8Array(F);
                    if (m) return m(e);
                    throw "both async and sync fetching of the wasm failed"
                }

                function K(e, t, r) {
                    return (F ? Promise.resolve().then(() => x(e)) : p(e).then(e => new Uint8Array(e), () => x(e))).then(e => WebAssembly.instantiate(e, t)).then(r, e => {
                        f(`failed to asynchronously prepare wasm: ${e}`), N(e)
                    })
                }
                var L = t => {
                    for (; t.length > 0;) t.shift()(e)
                };
                e.noExitRuntime;
                var U = [],
                    P = 0,
                    W = 0;
                class O {
                    set_type(e) {
                        D[this.ptr + 4 >> 2] = e
                    }
                    get_type() {
                        return D[this.ptr + 4 >> 2]
                    }
                    set_destructor(e) {
                        D[this.ptr + 8 >> 2] = e
                    }
                    get_destructor() {
                        return D[this.ptr + 8 >> 2]
                    }
                    set_caught(e) {
                        e = +!!e, B[this.ptr + 12] = e
                    }
                    get_caught() {
                        return 0 != B[this.ptr + 12]
                    }
                    set_rethrown(e) {
                        e = +!!e, B[this.ptr + 13] = e
                    }
                    get_rethrown() {
                        return 0 != B[this.ptr + 13]
                    }
                    init(e, t) {
                        this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t)
                    }
                    set_adjusted_ptr(e) {
                        D[this.ptr + 16 >> 2] = e
                    }
                    get_adjusted_ptr() {
                        return D[this.ptr + 16 >> 2]
                    }
                    constructor(e) {
                        this.excPtr = e, this.ptr = e - 24
                    }
                }
                var J = e => th(e),
                    S = e => {
                        var t = W;
                        if (!t) return J(0), 0;
                        var r = new O(t);
                        r.set_adjusted_ptr(t);
                        var n = r.get_type();
                        if (!n) return J(0), t;
                        for (var o of e) {
                            if (0 === o || o === n) break;
                            var a = r.ptr + 16;
                            if (tm(o, n, a)) return J(o), t
                        }
                        return J(n), t
                    },
                    j = {},
                    Z = e => {
                        for (; e.length;) {
                            var t = e.pop();
                            e.pop()(t)
                        }
                    };

                function H(e) {
                    return this.fromWireType(D[e >> 2])
                }
                var X, z, $, _, ee = {},
                    et = {},
                    er = {},
                    en = e => {
                        throw new z(e)
                    },
                    eo = (e, t, r) => {
                        function n(t) {
                            var n = r(t);
                            n.length !== e.length && en("Mismatched type converter count");
                            for (var o = 0; o < e.length; ++o) es(e[o], n[o])
                        }
                        e.forEach(e => er[e] = t);
                        var o = Array(t.length),
                            a = [],
                            i = 0;
                        t.forEach((e, t) => {
                            et.hasOwnProperty(e) ? o[t] = et[e] : (a.push(e), ee.hasOwnProperty(e) || (ee[e] = []), ee[e].push(() => {
                                o[t] = et[e], ++i === a.length && n(o)
                            }))
                        }), 0 === a.length && n(o)
                    },
                    ea = e => {
                        for (var t = "", r = e; y[r];) t += $[y[r++]];
                        return t
                    },
                    ei = e => {
                        throw new _(e)
                    };

                function es(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        var n = t.name;
                        if (e || ei(`type "${n}" must have a positive integer typeid pointer`), et.hasOwnProperty(e)) {
                            if (r.ignoreDuplicateRegistrations) return;
                            ei(`Cannot register type '${n}' twice`)
                        }
                        if (et[e] = t, delete er[e], ee.hasOwnProperty(e)) {
                            var o = ee[e];
                            delete ee[e], o.forEach(e => e())
                        }
                    }(e, t, r)
                }
                var ec, el = e => {
                        ei(e.$$.ptrType.registeredClass.name + " instance already deleted")
                    },
                    eg = !1,
                    eu = e => {},
                    eA = e => {
                        e.count.value -= 1, 0 === e.count.value && (e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr))
                    },
                    eh = (e, t, r) => {
                        if (t === r) return e;
                        if (void 0 === r.baseClass) return null;
                        var n = eh(e, t, r.baseClass);
                        return null === n ? null : r.downcast(n)
                    },
                    ew = {},
                    ed = [],
                    ef = () => {
                        for (; ed.length;) {
                            var e = ed.pop();
                            e.$$.deleteScheduled = !1, e.delete()
                        }
                    },
                    ep = {},
                    em = (e, t) => (t.ptrType && t.ptr || en("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && en("Both smartPtrType and smartPtr must be specified"), t.count = {
                        value: 1
                    }, eC(Object.create(e, {
                        $$: {
                            value: t,
                            writable: !0
                        }
                    }))),
                    eC = e => typeof FinalizationRegistry > "u" ? (eC = e => e, e) : (eg = new FinalizationRegistry(e => {
                        eA(e.$$)
                    }), eC = e => {
                        var t = e.$$;
                        return t.smartPtr && eg.register(e, {
                            $$: t
                        }, e), e
                    }, eu = e => eg.unregister(e), eC(e));

                function eE() {}
                var eB = (e, t) => Object.defineProperty(t, "name", {
                        value: e
                    }),
                    ey = (e, t, r) => {
                        if (void 0 === e[t].overloadTable) {
                            var n = e[t];
                            e[t] = function() {
                                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                                return e[t].overloadTable.hasOwnProperty(o.length) || ei(`Function '${r}' called with an invalid number of arguments (${o.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[o.length].apply(this, o)
                            }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n
                        }
                    },
                    ev = (t, r, n) => {
                        e.hasOwnProperty(t) ? ((void 0 === n || void 0 !== e[t].overloadTable && void 0 !== e[t].overloadTable[n]) && ei(`Cannot register public name '${t}' twice`), ey(e, t, t), e.hasOwnProperty(n) && ei(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), e[t].overloadTable[n] = r) : (e[t] = r, void 0 !== n && (e[t].numArguments = n))
                    };

                function eM(e, t, r, n, o, a, i, s) {
                    this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = a, this.upcast = i, this.downcast = s, this.pureVirtualFunctions = []
                }
                var eT = (e, t, r) => {
                    for (; t !== r;) t.upcast || ei(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
                    return e
                };

                function eD(e, t) {
                    if (null === t) return this.isReference && ei(`null is not a valid ${this.name}`), 0;
                    t.$$ || ei(`Cannot pass "${eZ(t)}" as a ${this.name}`), t.$$.ptr || ei(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    var r = t.$$.ptrType.registeredClass;
                    return eT(t.$$.ptr, r, this.registeredClass)
                }

                function eq(e, t) {
                    if (null === t) return this.isReference && ei(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), null !== e && e.push(this.rawDestructor, r), r) : 0;
                    t && t.$$ || ei(`Cannot pass "${eZ(t)}" as a ${this.name}`), t.$$.ptr || ei(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && ei(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);
                    var r, n = t.$$.ptrType.registeredClass;
                    if (r = eT(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === t.$$.smartPtr && ei("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                        case 0:
                            t.$$.smartPtrType === this ? r = t.$$.smartPtr : ei(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);
                            break;
                        case 1:
                            r = t.$$.smartPtr;
                            break;
                        case 2:
                            if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                            else {
                                var o = t.clone();
                                r = this.rawShare(r, eJ.toHandle(() => o.delete())), null !== e && e.push(this.rawDestructor, r)
                            }
                            break;
                        default:
                            ei("Unsupporting sharing policy")
                    }
                    return r
                }

                function eI(e, t) {
                    if (null === t) return this.isReference && ei(`null is not a valid ${this.name}`), 0;
                    t.$$ || ei(`Cannot pass "${eZ(t)}" as a ${this.name}`), t.$$.ptr || ei(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && ei(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
                    var r = t.$$.ptrType.registeredClass;
                    return eT(t.$$.ptr, r, this.registeredClass)
                }

                function eF(e, t, r, n, o, a, i, s, c, l, g) {
                    this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = a, this.sharingPolicy = i, this.rawGetPointee = s, this.rawConstructor = c, this.rawShare = l, this.rawDestructor = g, o || void 0 !== t.baseClass ? this.toWireType = eq : (n ? this.toWireType = eD : this.toWireType = eI, this.destructorFunction = null)
                }
                var eG, eY, eb = (t, r, n) => {
                        e.hasOwnProperty(t) || en("Replacing nonexistent public symbol"), void 0 !== e[t].overloadTable && void 0 !== n ? e[t].overloadTable[n] = r : (e[t] = r, e[t].argCount = n)
                    },
                    eV = [],
                    eR = e => {
                        var t = eV[e];
                        return t || (e >= eV.length && (eV.length = e + 1), eV[e] = t = eG.get(e)), t
                    },
                    ek = function(t, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if (t.includes("j")) {
                            var o;
                            return (0, e["dynCall_" + (o = (o = t).replace(/p/g, "i"))])(r, ...n)
                        }
                        return eR(r)(...n)
                    },
                    eQ = (e, t) => {
                        let r;
                        var n = (e = ea(e)).includes("j") ? (r = e, function() {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return ek(r, t, n)
                        }) : eR(t);
                        return "function" != typeof n && ei(`unknown function pointer with signature ${e}: ${t}`), n
                    },
                    eN = e => {
                        var t = tl(e),
                            r = ea(t);
                        return tg(t), r
                    },
                    ex = (e, t) => {
                        var r = [],
                            n = {};
                        throw t.forEach(function e(t) {
                            if (!n[t] && !et[t]) {
                                if (er[t]) return void er[t].forEach(e);
                                r.push(t), n[t] = !0
                            }
                        }), new eY(`${e}: ` + r.map(eN).join([", "]))
                    },
                    eK = (e, t) => {
                        for (var r = [], n = 0; n < e; n++) r.push(D[t + 4 * n >> 2]);
                        return r
                    };

                function eL(e, t, r, n, o, a) {
                    var i = t.length;
                    i < 2 && ei("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    var s = null !== t[1] && null !== r,
                        c = function(e) {
                            for (var t = 1; t < e.length; ++t)
                                if (null !== e[t] && void 0 === e[t].destructorFunction) return !0;
                            return !1
                        }(t),
                        l = "void" !== t[0].name,
                        g = i - 2,
                        u = Array(g),
                        A = [],
                        h = [];
                    return eB(e, function() {
                        h.length = 0, A.length = s ? 2 : 1, A[0] = o, s && (e = t[1].toWireType(h, this), A[1] = e);
                        for (var e, r = 0; r < g; ++r) u[r] = t[r + 2].toWireType(h, r < 0 || arguments.length <= r ? void 0 : arguments[r]), A.push(u[r]);
                        var a = n(...A);
                        if (c) Z(h);
                        else
                            for (var i = s ? 1 : 2; i < t.length; i++) {
                                var w = 1 === i ? e : u[i - 2];
                                null !== t[i].destructorFunction && t[i].destructorFunction(w)
                            }
                        return l ? t[0].fromWireType(a) : void 0
                    })
                }
                var eU = e => {
                        let t = (e = e.trim()).indexOf("(");
                        return -1 !== t ? e.substr(0, t) : e
                    },
                    eP = [],
                    eW = [],
                    eO = e => {
                        e > 9 && 0 == --eW[e + 1] && (eW[e] = void 0, eP.push(e))
                    },
                    eJ = {
                        toValue: e => (e || ei("Cannot use deleted val. handle = " + e), eW[e]),
                        toHandle: e => {
                            switch (e) {
                                case void 0:
                                    return 2;
                                case null:
                                    return 4;
                                case !0:
                                    return 6;
                                case !1:
                                    return 8;
                                default: {
                                    let t = eP.pop() || eW.length;
                                    return eW[t] = e, eW[t + 1] = 1, t
                                }
                            }
                        }
                    },
                    eS = {
                        name: "emscripten::val",
                        fromWireType: e => {
                            var t = eJ.toValue(e);
                            return eO(e), t
                        },
                        toWireType: (e, t) => eJ.toHandle(t),
                        argPackAdvance: 8,
                        readValueFromPointer: H,
                        destructorFunction: null
                    },
                    ej = (e, t) => {
                        var r = et[e];
                        return void 0 === r && ei(`${t} has unknown type ${eN(e)}`), r
                    },
                    eZ = e => {
                        if (null === e) return "null";
                        var t = typeof e;
                        return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
                    },
                    eH = Object.assign({
                        optional: !0
                    }, eS),
                    eX = (e, t, r) => ((e, t, r, n) => {
                        if (!(n > 0)) return 0;
                        for (var o = r, a = r + n - 1, i = 0; i < e.length; ++i) {
                            var s = e.charCodeAt(i);
                            if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++i)), s <= 127) {
                                if (r >= a) break;
                                t[r++] = s
                            } else if (s <= 2047) {
                                if (r + 1 >= a) break;
                                t[r++] = 192 | s >> 6, t[r++] = 128 | 63 & s
                            } else if (s <= 65535) {
                                if (r + 2 >= a) break;
                                t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                            } else {
                                if (r + 3 >= a) break;
                                t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s
                            }
                        }
                        return t[r] = 0, r - o
                    })(e, y, t, r),
                    ez = "u" > typeof TextDecoder ? new TextDecoder : void 0,
                    e$ = (e, t, r) => {
                        for (var n = t + r, o = t; e[o] && !(o >= n);) ++o;
                        if (o - t > 16 && e.buffer && ez) return ez.decode(e.subarray(t, o));
                        for (var a = ""; t < o;) {
                            var i = e[t++];
                            if (!(128 & i)) {
                                a += String.fromCharCode(i);
                                continue
                            }
                            var s = 63 & e[t++];
                            if ((224 & i) == 192) {
                                a += String.fromCharCode((31 & i) << 6 | s);
                                continue
                            }
                            var c = 63 & e[t++];
                            if ((i = (240 & i) == 224 ? (15 & i) << 12 | s << 6 | c : (7 & i) << 18 | s << 12 | c << 6 | 63 & e[t++]) < 65536) a += String.fromCharCode(i);
                            else {
                                var l = i - 65536;
                                a += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                            }
                        }
                        return a
                    },
                    e_ = (e, t) => e ? e$(y, e, t) : "",
                    e0 = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                    e4 = (e, t) => {
                        for (var r = e, n = r >> 1, o = n + t / 2; !(n >= o) && M[n];) ++n;
                        if ((r = n << 1) - e > 32 && e0) return e0.decode(y.subarray(e, r));
                        for (var a = "", i = 0; !(i >= t / 2); ++i) {
                            var s = v[e + 2 * i >> 1];
                            if (0 == s) break;
                            a += String.fromCharCode(s)
                        }
                        return a
                    },
                    e1 = (e, t, r) => {
                        if (null != r || (r = 0x7fffffff), r < 2) return 0;
                        r -= 2;
                        for (var n = t, o = r < 2 * e.length ? r / 2 : e.length, a = 0; a < o; ++a) {
                            var i = e.charCodeAt(a);
                            v[t >> 1] = i, t += 2
                        }
                        return v[t >> 1] = 0, t - n
                    },
                    e8 = e => 2 * e.length,
                    e2 = (e, t) => {
                        for (var r = 0, n = ""; !(r >= t / 4);) {
                            var o = T[e + 4 * r >> 2];
                            if (0 == o) break;
                            if (++r, o >= 65536) {
                                var a = o - 65536;
                                n += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                            } else n += String.fromCharCode(o)
                        }
                        return n
                    },
                    e6 = (e, t, r) => {
                        if (null != r || (r = 0x7fffffff), r < 4) return 0;
                        for (var n = t, o = n + r - 4, a = 0; a < e.length; ++a) {
                            var i = e.charCodeAt(a);
                            if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++a)), T[t >> 2] = i, (t += 4) + 4 > o) break
                        }
                        return T[t >> 2] = 0, t - n
                    },
                    e5 = e => {
                        for (var t = 0, r = 0; r < e.length; ++r) {
                            var n = e.charCodeAt(r);
                            n >= 55296 && n <= 57343 && ++r, t += 4
                        }
                        return t
                    },
                    e3 = [],
                    e9 = {},
                    e7 = () => {
                        if ("object" == typeof globalThis) return globalThis;

                        function e(e) {
                            e.$$$embind_global$$$ = e;
                            var t = "object" == typeof $$$embind_global$$$ && e.$$$embind_global$$$ == e;
                            return t || delete e.$$$embind_global$$$, t
                        }
                        if ("object" == typeof $$$embind_global$$$ || ("object" == typeof r.g && e(r.g) ? $$$embind_global$$$ = r.g : "object" == typeof self && e(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$)) return $$$embind_global$$$;
                        throw Error("unable to get global object.")
                    },
                    te = Reflect.construct,
                    tt = (e, t) => Math.ceil(e / t) * t,
                    tr = e => {
                        var t = (e - E.buffer.byteLength + 65535) / 65536;
                        try {
                            return E.grow(t), Y(), 1
                        } catch {}
                    },
                    tn = {},
                    to = () => {
                        if (!to.strings) {
                            var e = {
                                USER: "web_user",
                                LOGNAME: "web_user",
                                PATH: "/",
                                PWD: "/",
                                HOME: "/home/web_user",
                                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                _: h || "./this.program"
                            };
                            for (var t in tn) void 0 === tn[t] ? delete e[t] : e[t] = tn[t];
                            var r = [];
                            for (var t in e) r.push(`${t}=${e[t]}`);
                            to.strings = r
                        }
                        return to.strings
                    },
                    ta = [null, [],
                        []
                    ],
                    ti = (e, t) => {
                        var r = ta[e];
                        0 === t || 10 === t ? ((1 === e ? d : f)(e$(r, 0)), r.length = 0) : r.push(t)
                    };
                z = e.InternalError = class extends Error {
                    constructor(e) {
                        super(e), this.name = "InternalError"
                    }
                }, (() => {
                    for (var e = Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
                    $ = e
                })(), _ = e.BindingError = class extends Error {
                    constructor(e) {
                        super(e), this.name = "BindingError"
                    }
                }, Object.assign(eE.prototype, {
                    isAliasOf(e) {
                        if (!(this instanceof eE) || !(e instanceof eE)) return !1;
                        var t = this.$$.ptrType.registeredClass,
                            r = this.$$.ptr;
                        e.$$ = e.$$;
                        for (var n = e.$$.ptrType.registeredClass, o = e.$$.ptr; t.baseClass;) r = t.upcast(r), t = t.baseClass;
                        for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
                        return t === n && r === o
                    },
                    clone() {
                        let e;
                        if (this.$$.ptr || el(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                        var t = eC(Object.create(Object.getPrototypeOf(this), {
                            $$: {
                                value: {
                                    count: (e = this.$$).count,
                                    deleteScheduled: e.deleteScheduled,
                                    preservePointerOnDelete: e.preservePointerOnDelete,
                                    ptr: e.ptr,
                                    ptrType: e.ptrType,
                                    smartPtr: e.smartPtr,
                                    smartPtrType: e.smartPtrType
                                }
                            }
                        }));
                        return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t
                    },
                    delete() {
                        this.$$.ptr || el(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && ei("Object already scheduled for deletion"), eu(this), eA(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                    },
                    isDeleted() {
                        return !this.$$.ptr
                    },
                    deleteLater() {
                        return this.$$.ptr || el(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && ei("Object already scheduled for deletion"), ed.push(this), 1 === ed.length && ec && ec(ef), this.$$.deleteScheduled = !0, this
                    }
                }), e.getInheritedInstanceCount = () => Object.keys(ep).length, e.getLiveInheritedInstances = () => {
                    var e = [];
                    for (var t in ep) ep.hasOwnProperty(t) && e.push(ep[t]);
                    return e
                }, e.flushPendingDeletes = ef, e.setDelayFunction = e => {
                    ec = e, ed.length && ec && ec(ef)
                }, Object.assign(eF.prototype, {
                    getPointee(e) {
                        return this.rawGetPointee && (e = this.rawGetPointee(e)), e
                    },
                    destructor(e) {
                        var t;
                        null == (t = this.rawDestructor) || t.call(this, e)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: H,
                    fromWireType: function(e) {
                        var t, r = this.getPointee(e);
                        if (!r) return this.destructor(e), null;
                        var n = ep[((e, t) => {
                            for (void 0 === t && ei("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
                            return t
                        })(this.registeredClass, r)];
                        if (void 0 !== n) {
                            if (0 === n.$$.count.value) return n.$$.ptr = r, n.$$.smartPtr = e, n.clone();
                            var o = n.clone();
                            return this.destructor(e), o
                        }

                        function a() {
                            return this.isSmartPointer ? em(this.registeredClass.instancePrototype, {
                                ptrType: this.pointeeType,
                                ptr: r,
                                smartPtrType: this,
                                smartPtr: e
                            }) : em(this.registeredClass.instancePrototype, {
                                ptrType: this,
                                ptr: e
                            })
                        }
                        var i = ew[this.registeredClass.getActualType(r)];
                        if (!i) return a.call(this);
                        t = this.isConst ? i.constPointerType : i.pointerType;
                        var s = eh(r, this.registeredClass, t.registeredClass);
                        return null === s ? a.call(this) : this.isSmartPointer ? em(t.registeredClass.instancePrototype, {
                            ptrType: t,
                            ptr: s,
                            smartPtrType: this,
                            smartPtr: e
                        }) : em(t.registeredClass.instancePrototype, {
                            ptrType: t,
                            ptr: s
                        })
                    }
                }), t = Error, (n = eB("UnboundTypeError", function(e) {
                    this.name = "UnboundTypeError", this.message = e;
                    var t = Error(e).stack;
                    void 0 !== t && (this.stack = this.toString() + `
` + t.replace(/^Error(:[^\n]*)?\n/, ""))
                })).prototype = Object.create(t.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                    return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
                }, eY = e.UnboundTypeError = n, eW.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), e.count_emval_handles = () => eW.length / 2 - 5 - eP.length;
                var ts = {
                        s: e => {
                            var t = new O(e);
                            return t.get_caught() || (t.set_caught(!0), P--), t.set_rethrown(!1), U.push(t), tp(e), tC(e)
                        },
                        v: () => {
                            tA(0, 0);
                            var e = U.pop();
                            tf(e.excPtr), W = 0
                        },
                        b: () => S([]),
                        g: e => S([e]),
                        q: (e, t) => S([e, t]),
                        Y: () => {
                            var e = U.pop();
                            e || N("no exception to throw");
                            var t = e.excPtr;
                            throw e.get_rethrown() || (U.push(e), e.set_rethrown(!0), e.set_caught(!1), P++), W = t
                        },
                        f: (e, t, r) => {
                            throw new O(e).init(t, r), W = e, P++, W
                        },
                        X: () => P,
                        e: e => {
                            throw W || (W = e), W
                        },
                        T: () => {
                            N("")
                        },
                        ha: e => {
                            var t = j[e];
                            delete j[e];
                            var r = t.rawConstructor,
                                n = t.rawDestructor,
                                o = t.fields;
                            eo([e], o.map(e => e.getterReturnType).concat(o.map(e => e.setterArgumentType)), e => {
                                var a = {};
                                return o.forEach((t, r) => {
                                    var n = t.fieldName,
                                        i = e[r],
                                        s = t.getter,
                                        c = t.getterContext,
                                        l = e[r + o.length],
                                        g = t.setter,
                                        u = t.setterContext;
                                    a[n] = {
                                        read: e => i.fromWireType(s(c, e)),
                                        write: (e, t) => {
                                            var r = [];
                                            g(u, e, l.toWireType(r, t)), Z(r)
                                        }
                                    }
                                }), [{
                                    name: t.name,
                                    fromWireType: e => {
                                        var t = {};
                                        for (var r in a) t[r] = a[r].read(e);
                                        return n(e), t
                                    },
                                    toWireType: (e, t) => {
                                        for (var o in a)
                                            if (!(o in t)) throw TypeError(`Missing field: "${o}"`);
                                        var i = r();
                                        for (o in a) a[o].write(i, t[o]);
                                        return null !== e && e.push(n, i), i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: H,
                                    destructorFunction: n
                                }]
                            })
                        },
                        S: (e, t, r, n, o) => {},
                        ba: (e, t, r, n) => {
                            es(e, {
                                name: t = ea(t),
                                fromWireType: function(e) {
                                    return !!e
                                },
                                toWireType: function(e, t) {
                                    return t ? r : n
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: function(e) {
                                    return this.fromWireType(y[e])
                                },
                                destructorFunction: null
                            })
                        },
                        fa: (e, t, r, n, o, a, i, s, c, l, g, u, A) => {
                            g = ea(g), a = eQ(o, a), s && (s = eQ(i, s)), l && (l = eQ(c, l)), A = eQ(u, A);
                            var h = (e => {
                                if (void 0 === e) return "_unknown";
                                var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                return t >= 48 && t <= 57 ? `_${e}` : e
                            })(g);
                            ev(h, function() {
                                ex(`Cannot construct ${g} due to unbound types`, [n])
                            }), eo([e, t, r], n ? [n] : [], t => {
                                t = t[0];
                                var r, o, i = n ? (r = t.registeredClass).instancePrototype : eE.prototype,
                                    c = eB(g, function() {
                                        if (Object.getPrototypeOf(this) !== u) throw new _("Use 'new' to construct " + g);
                                        if (void 0 === w.constructor_body) throw new _(g + " has no accessible constructor");
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        var n = w.constructor_body[t.length];
                                        if (void 0 === n) throw new _(`Tried to invoke ctor of ${g} with invalid number of parameters (${t.length}) - expected (${Object.keys(w.constructor_body).toString()}) parameters instead!`);
                                        return n.apply(this, t)
                                    }),
                                    u = Object.create(i, {
                                        constructor: {
                                            value: c
                                        }
                                    });
                                c.prototype = u;
                                var w = new eM(g, c, u, A, r, a, s, l);
                                w.baseClass && (null != (o = w.baseClass).__derivedClasses || (o.__derivedClasses = []), w.baseClass.__derivedClasses.push(w));
                                var d = new eF(g, w, !0, !1, !1),
                                    f = new eF(g + "*", w, !1, !1, !1),
                                    p = new eF(g + " const*", w, !1, !0, !1);
                                return ew[e] = {
                                    pointerType: f,
                                    constPointerType: p
                                }, eb(h, c), [d, f, p]
                            })
                        },
                        ea: (e, t, r, n, o, a) => {
                            var i = eK(t, r);
                            o = eQ(n, o), eo([], [e], e => {
                                e = e[0];
                                var r = `constructor ${e.name}`;
                                if (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []), void 0 !== e.registeredClass.constructor_body[t - 1]) throw new _(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                                return e.registeredClass.constructor_body[t - 1] = () => {
                                    ex(`Cannot construct ${e.name} due to unbound types`, i)
                                }, eo([], i, n => (n.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = eL(r, n, null, o, a), [])), []
                            })
                        },
                        w: (e, t, r, n, o, a, i, s, c, l) => {
                            var g = eK(r, n);
                            t = eU(t = ea(t)), a = eQ(o, a), eo([], [e], e => {
                                e = e[0];
                                var n = `${e.name}.${t}`;

                                function o() {
                                    ex(`Cannot call ${n} due to unbound types`, g)
                                }
                                t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.registeredClass.pureVirtualFunctions.push(t);
                                var c = e.registeredClass.instancePrototype,
                                    l = c[t];
                                return void 0 === l || void 0 === l.overloadTable && l.className !== e.name && l.argCount === r - 2 ? (o.argCount = r - 2, o.className = e.name, c[t] = o) : (ey(c, t, n), c[t].overloadTable[r - 2] = o), eo([], g, o => {
                                    var s = eL(n, o, e, a, i);
                                    return void 0 === c[t].overloadTable ? (s.argCount = r - 2, c[t] = s) : c[t].overloadTable[r - 2] = s, []
                                }), []
                            })
                        },
                        aa: e => es(e, eS),
                        x: (e, t, r, n) => {
                            function o() {}
                            t = ea(t), o.values = {}, es(e, {
                                name: t,
                                constructor: o,
                                fromWireType: function(e) {
                                    return this.constructor.values[e]
                                },
                                toWireType: (e, t) => t.value,
                                argPackAdvance: 8,
                                readValueFromPointer: ((e, t, r) => {
                                    switch (t) {
                                        case 1:
                                            return r ? function(e) {
                                                return this.fromWireType(B[e])
                                            } : function(e) {
                                                return this.fromWireType(y[e])
                                            };
                                        case 2:
                                            return r ? function(e) {
                                                return this.fromWireType(v[e >> 1])
                                            } : function(e) {
                                                return this.fromWireType(M[e >> 1])
                                            };
                                        case 4:
                                            return r ? function(e) {
                                                return this.fromWireType(T[e >> 2])
                                            } : function(e) {
                                                return this.fromWireType(D[e >> 2])
                                            };
                                        default:
                                            throw TypeError(`invalid integer width (${t}): ${e}`)
                                    }
                                })(t, r, n),
                                destructorFunction: null
                            }), ev(t, o)
                        },
                        h: (e, t, r) => {
                            var n = ej(e, "enum");
                            t = ea(t);
                            var o = n.constructor,
                                a = Object.create(n.constructor.prototype, {
                                    value: {
                                        value: r
                                    },
                                    constructor: {
                                        value: eB(`${n.name}_${t}`, function() {})
                                    }
                                });
                            o.values[r] = a, o[t] = a
                        },
                        M: (e, t, r) => {
                            es(e, {
                                name: t = ea(t),
                                fromWireType: e => e,
                                toWireType: (e, t) => t,
                                argPackAdvance: 8,
                                readValueFromPointer: ((e, t) => {
                                    switch (t) {
                                        case 4:
                                            return function(e) {
                                                return this.fromWireType(q[e >> 2])
                                            };
                                        case 8:
                                            return function(e) {
                                                return this.fromWireType(I[e >> 3])
                                            };
                                        default:
                                            throw TypeError(`invalid float width (${t}): ${e}`)
                                    }
                                })(t, r),
                                destructorFunction: null
                            })
                        },
                        N: (e, t, r, n, o, a, i, s) => {
                            var c = eK(t, r);
                            e = eU(e = ea(e)), o = eQ(n, o), ev(e, function() {
                                ex(`Cannot call ${e} due to unbound types`, c)
                            }, t - 1), eo([], c, r => {
                                var n = [r[0], null].concat(r.slice(1));
                                return eb(e, eL(e, n, null, o, a), t - 1), []
                            })
                        },
                        t: (e, t, r, n, o) => {
                            t = ea(t);
                            var a = e => e;
                            if (0 === n) {
                                var i = 32 - 8 * r;
                                a = e => e << i >>> i
                            }
                            var s = t.includes("unsigned"),
                                c = (e, t) => {};
                            es(e, {
                                name: t,
                                fromWireType: a,
                                toWireType: s ? function(e, t) {
                                    return c(t, this.name), t >>> 0
                                } : function(e, t) {
                                    return c(t, this.name), t
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: ((e, t, r) => {
                                    switch (t) {
                                        case 1:
                                            return r ? e => B[e] : e => y[e];
                                        case 2:
                                            return r ? e => v[e >> 1] : e => M[e >> 1];
                                        case 4:
                                            return r ? e => T[e >> 2] : e => D[e >> 2];
                                        default:
                                            throw TypeError(`invalid integer width (${t}): ${e}`)
                                    }
                                })(t, r, 0 !== n),
                                destructorFunction: null
                            })
                        },
                        o: (e, t, r) => {
                            var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

                            function o(e) {
                                var t = D[e >> 2],
                                    r = D[e + 4 >> 2];
                                return new n(B.buffer, r, t)
                            }
                            es(e, {
                                name: r = ea(r),
                                fromWireType: o,
                                argPackAdvance: 8,
                                readValueFromPointer: o
                            }, {
                                ignoreDuplicateRegistrations: !0
                            })
                        },
                        ga: (e, t) => {
                            es(e, eH)
                        },
                        L: (e, t) => {
                            var r = "std::string" === (t = ea(t));
                            es(e, {
                                name: t,
                                fromWireType(e) {
                                    var t, n = D[e >> 2],
                                        o = e + 4;
                                    if (r)
                                        for (var a = o, i = 0; i <= n; ++i) {
                                            var s = o + i;
                                            if (i == n || 0 == y[s]) {
                                                var c = s - a,
                                                    l = e_(a, c);
                                                void 0 === t ? t = l : (t += "\0", t += l), a = s + 1
                                            }
                                        } else {
                                            for (var g = Array(n), i = 0; i < n; ++i) g[i] = String.fromCharCode(y[o + i]);
                                            t = g.join("")
                                        }
                                    return tg(e), t
                                },
                                toWireType(e, t) {
                                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                    var n, o = "string" == typeof t;
                                    o || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || ei("Cannot pass non-string to std::string"), n = r && o ? (e => {
                                        for (var t = 0, r = 0; r < e.length; ++r) {
                                            var n = e.charCodeAt(r);
                                            n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3
                                        }
                                        return t
                                    })(t) : t.length;
                                    var a = tu(4 + n + 1),
                                        i = a + 4;
                                    if (D[a >> 2] = n, r && o) eX(t, i, n + 1);
                                    else if (o)
                                        for (var s = 0; s < n; ++s) {
                                            var c = t.charCodeAt(s);
                                            c > 255 && (tg(i), ei("String has UTF-16 code units that do not fit in 8 bits")), y[i + s] = c
                                        } else
                                            for (var s = 0; s < n; ++s) y[i + s] = t[s];
                                    return null !== e && e.push(tg, a), a
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: H,
                                destructorFunction(e) {
                                    tg(e)
                                }
                            })
                        },
                        C: (e, t, r) => {
                            var n, o, a, i;
                            r = ea(r), 2 === t ? (n = e4, o = e1, i = e8, a = e => M[e >> 1]) : 4 === t && (n = e2, o = e6, i = e5, a = e => D[e >> 2]), es(e, {
                                name: r,
                                fromWireType: e => {
                                    for (var r, o = D[e >> 2], i = e + 4, s = 0; s <= o; ++s) {
                                        var c = e + 4 + s * t;
                                        if (s == o || 0 == a(c)) {
                                            var l = c - i,
                                                g = n(i, l);
                                            void 0 === r ? r = g : (r += "\0", r += g), i = c + t
                                        }
                                    }
                                    return tg(e), r
                                },
                                toWireType: (e, n) => {
                                    "string" != typeof n && ei(`Cannot pass non-string to C++ string type ${r}`);
                                    var a = i(n),
                                        s = tu(4 + a + t);
                                    return D[s >> 2] = a / t, o(n, s + 4, a + t), null !== e && e.push(tg, s), s
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: H,
                                destructorFunction(e) {
                                    tg(e)
                                }
                            })
                        },
                        B: (e, t, r, n, o, a) => {
                            j[e] = {
                                name: ea(t),
                                rawConstructor: eQ(r, n),
                                rawDestructor: eQ(o, a),
                                fields: []
                            }
                        },
                        ia: (e, t, r, n, o, a, i, s, c, l) => {
                            j[e].fields.push({
                                fieldName: ea(t),
                                getterReturnType: r,
                                getter: eQ(n, o),
                                getterContext: a,
                                setterArgumentType: i,
                                setter: eQ(s, c),
                                setterContext: l
                            })
                        },
                        ca: (e, t) => {
                            es(e, {
                                isVoid: !0,
                                name: t = ea(t),
                                argPackAdvance: 0,
                                fromWireType: () => {},
                                toWireType: (e, t) => {}
                            })
                        },
                        $: (e, t, r) => y.copyWithin(e, t, t + r),
                        E: (e, t, r, n) => (e = e3[e])(null, t = eJ.toValue(t), r, n),
                        ka: eO,
                        la: e => {
                            var t, r;
                            return 0 === e ? eJ.toHandle(e7()) : (e = void 0 === (r = e9[t = e]) ? ea(t) : r, eJ.toHandle(e7()[e]))
                        },
                        K: (e, t, r) => {
                            var n, o, a = ((e, t) => {
                                    for (var r = Array(e), n = 0; n < e; ++n) r[n] = ej(D[t + 4 * n >> 2], "parameter " + n);
                                    return r
                                })(e, t),
                                i = a.shift(),
                                s = Array(--e);
                            return n = eB(`methodCaller<(${a.map(e=>e.name).join(", ")}) => ${i.name}>`, (t, n, o, c) => {
                                for (var l, g, u = 0, A = 0; A < e; ++A) s[A] = a[A].readValueFromPointer(c + u), u += a[A].argPackAdvance;
                                var h = 1 === r ? te(n, s) : n.apply(t, s);
                                return l = [], g = i.toWireType(l, h), l.length && (D[o >> 2] = eJ.toHandle(l)), g
                            }), o = e3.length, e3.push(n), o
                        },
                        O: e => {
                            e > 9 && (eW[e + 1] += 1)
                        },
                        P: e => {
                            Z(eJ.toValue(e)), eO(e)
                        },
                        da: (e, t) => {
                            var r = (e = ej(e, "_emval_take_value")).readValueFromPointer(t);
                            return eJ.toHandle(r)
                        },
                        U: (e, t, r, n) => {
                            var o = new Date().getFullYear(),
                                a = new Date(o, 0, 1),
                                i = new Date(o, 6, 1),
                                s = a.getTimezoneOffset(),
                                c = i.getTimezoneOffset(),
                                l = Math.max(s, c);
                            D[e >> 2] = 60 * l, T[t >> 2] = +(s != c);
                            var g = e => {
                                    var t = Math.abs(e),
                                        r = String(Math.floor(t / 60)).padStart(2, "0"),
                                        n = String(t % 60).padStart(2, "0");
                                    return `UTC${e>=0?"-":"+"}${r}${n}`
                                },
                                u = g(s),
                                A = g(c);
                            c < s ? (eX(u, r, 17), eX(A, n, 17)) : (eX(u, n, 17), eX(A, r, 17))
                        },
                        Z: e => {
                            var t = y.length;
                            if ((e >>>= 0) > 0x80000000) return !1;
                            for (var r = 1; r <= 4; r *= 2) {
                                var n = t * (1 + .2 / r);
                                if (n = Math.min(n, e + 0x6000000), tr(Math.min(0x80000000, tt(Math.max(e, n), 65536)))) return !0
                            }
                            return !1
                        },
                        V: (e, t) => {
                            var r = 0;
                            return to().forEach((n, o) => {
                                var a = t + r;
                                D[e + 4 * o >> 2] = a, ((e, t) => {
                                    for (var r = 0; r < e.length; ++r) B[t++] = e.charCodeAt(r);
                                    B[t] = 0
                                })(n, a), r += n.length + 1
                            }), 0
                        },
                        W: (e, t) => {
                            var r = to();
                            D[e >> 2] = r.length;
                            var n = 0;
                            return r.forEach(e => n += e.length + 1), D[t >> 2] = n, 0
                        },
                        _: e => 52,
                        R: function(e, t, r, n, o) {
                            return 70
                        },
                        J: (e, t, r, n) => {
                            for (var o = 0, a = 0; a < r; a++) {
                                var i = D[t >> 2],
                                    s = D[t + 4 >> 2];
                                t += 8;
                                for (var c = 0; c < s; c++) ti(e, y[i + c]);
                                o += s
                            }
                            return D[n >> 2] = o, 0
                        },
                        F: function(e, t, r, n) {
                            var o = td();
                            try {
                                return eR(e)(t, r, n)
                            } catch (e) {
                                if (tw(o), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        D: function(e, t, r, n, o) {
                            var a = td();
                            try {
                                return eR(e)(t, r, n, o)
                            } catch (e) {
                                if (tw(a), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        G: function(e, t, r, n) {
                            var o = td();
                            try {
                                return eR(e)(t, r, n)
                            } catch (e) {
                                if (tw(o), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        n: function(e) {
                            var t = td();
                            try {
                                return eR(e)()
                            } catch (e) {
                                if (tw(t), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        a: function(e, t) {
                            var r = td();
                            try {
                                return eR(e)(t)
                            } catch (e) {
                                if (tw(r), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        d: function(e, t, r) {
                            var n = td();
                            try {
                                return eR(e)(t, r)
                            } catch (e) {
                                if (tw(n), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        p: function(e, t, r, n) {
                            var o = td();
                            try {
                                return eR(e)(t, r, n)
                            } catch (e) {
                                if (tw(o), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        j: function(e, t, r, n, o) {
                            var a = td();
                            try {
                                return eR(e)(t, r, n, o)
                            } catch (e) {
                                if (tw(a), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        I: function(e, t, r, n, o, a) {
                            var i = td();
                            try {
                                return eR(e)(t, r, n, o, a)
                            } catch (e) {
                                if (tw(i), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        u: function(e, t, r, n, o, a, i) {
                            var s = td();
                            try {
                                return eR(e)(t, r, n, o, a, i)
                            } catch (e) {
                                if (tw(s), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        H: function(e, t, r, n, o, a, i, s) {
                            var c = td();
                            try {
                                return eR(e)(t, r, n, o, a, i, s)
                            } catch (e) {
                                if (tw(c), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        z: function(e, t, r, n, o, a, i, s, c, l, g, u) {
                            var A = td();
                            try {
                                return eR(e)(t, r, n, o, a, i, s, c, l, g, u)
                            } catch (e) {
                                if (tw(A), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        Q: function(e, t, r, n, o) {
                            var a = td();
                            try {
                                return tE(e, t, r, n, o)
                            } catch (e) {
                                if (tw(a), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        l: function(e) {
                            var t = td();
                            try {
                                eR(e)()
                            } catch (e) {
                                if (tw(t), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        k: function(e, t) {
                            var r = td();
                            try {
                                eR(e)(t)
                            } catch (e) {
                                if (tw(r), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        c: function(e, t, r) {
                            var n = td();
                            try {
                                eR(e)(t, r)
                            } catch (e) {
                                if (tw(n), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        m: function(e, t, r, n) {
                            var o = td();
                            try {
                                eR(e)(t, r, n)
                            } catch (e) {
                                if (tw(o), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        A: function(e, t, r, n, o) {
                            var a = td();
                            try {
                                eR(e)(t, r, n, o)
                            } catch (e) {
                                if (tw(a), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        r: function(e, t, r, n, o, a, i, s) {
                            var c = td();
                            try {
                                eR(e)(t, r, n, o, a, i, s)
                            } catch (e) {
                                if (tw(c), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        i: function(e, t, r, n, o, a, i, s, c, l, g) {
                            var u = td();
                            try {
                                eR(e)(t, r, n, o, a, i, s, c, l, g)
                            } catch (e) {
                                if (tw(u), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        y: function(e, t, r, n, o, a, i, s, c, l, g, u, A, h, w, d) {
                            var f = td();
                            try {
                                eR(e)(t, r, n, o, a, i, s, c, l, g, u, A, h, w, d)
                            } catch (e) {
                                if (tw(f), e !== e + 0) throw e;
                                tA(1, 0)
                            }
                        },
                        ja: e => e
                    },
                    tc = function() {
                        var t, r, n, o, a, i = {
                            a: ts
                        };

                        function c(t, r) {
                            var n;
                            return E = (tc = t.exports).ma, Y(), eG = tc.qa, n = tc.na, V.unshift(n),
                                function(t) {
                                    var r;
                                    if (k--, null == (r = e.monitorRunDependencies) || r.call(e, k), 0 == k && Q) {
                                        var n = Q;
                                        Q = null, n()
                                    }
                                }(), tc
                        }
                        if (k++, null == (a = e.monitorRunDependencies) || a.call(e, k), e.instantiateWasm) try {
                            return e.instantiateWasm(i, c)
                        } catch (e) {
                            f(`Module.instantiateWasm callback failed with error: ${e}`), s(e)
                        }
                        return null != X || (X = function() {
                            var t = "zxing_reader.wasm";
                            return t.startsWith("data:application/octet-stream;base64,") ? t : e.locateFile ? e.locateFile(t, w) : w + t
                        }()), (t = F, r = X, n = i, o = function(e) {
                            c(e.instance)
                        }, t || "function" != typeof WebAssembly.instantiateStreaming || r.startsWith("data:application/octet-stream;base64,") || "function" != typeof fetch ? K(r, n, o) : fetch(r, {
                            credentials: "same-origin"
                        }).then(e => WebAssembly.instantiateStreaming(e, n).then(o, function(e) {
                            return f(`wasm streaming compile failed: ${e}`), f("falling back to ArrayBuffer instantiation"), K(r, n, o)
                        }))).catch(s), {}
                    }(),
                    tl = e => (tl = tc.oa)(e),
                    tg = e._free = t => (tg = e._free = tc.pa)(t),
                    tu = e._malloc = t => (tu = e._malloc = tc.ra)(t),
                    tA = (e, t) => (tA = tc.sa)(e, t),
                    th = e => (th = tc.ta)(e),
                    tw = e => (tw = tc.ua)(e),
                    td = () => (td = tc.va)(),
                    tf = e => (tf = tc.wa)(e),
                    tp = e => (tp = tc.xa)(e),
                    tm = (e, t, r) => (tm = tc.ya)(e, t, r),
                    tC = e => (tC = tc.za)(e);
                e.dynCall_viijii = (t, r, n, o, a, i, s) => (e.dynCall_viijii = tc.Aa)(t, r, n, o, a, i, s), e.dynCall_jiji = (t, r, n, o, a) => (e.dynCall_jiji = tc.Ba)(t, r, n, o, a);
                var tE = e.dynCall_jiiii = (t, r, n, o, a) => (tE = e.dynCall_jiiii = tc.Ca)(t, r, n, o, a);

                function tB() {
                    k > 0 || (function() {
                        if (e.preRun)
                            for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
                                var t;
                                t = e.preRun.shift(), b.unshift(t)
                            }
                        L(b)
                    }(), k > 0) || (e.setStatus ? (e.setStatus("Running..."), setTimeout(() => {
                        setTimeout(() => e.setStatus(""), 1), t()
                    }, 1)) : t());

                    function t() {
                        var t;
                        o || (o = !0, e.calledRun = !0, G || (L(V), a(e), null == (t = e.onRuntimeInitialized) || t.call(e), function() {
                            if (e.postRun)
                                for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                    var t;
                                    t = e.postRun.shift(), R.unshift(t)
                                }
                            L(R)
                        }()))
                    }
                }
                if (e.dynCall_iiiiij = (t, r, n, o, a, i, s) => (e.dynCall_iiiiij = tc.Da)(t, r, n, o, a, i, s), e.dynCall_iiiiijj = (t, r, n, o, a, i, s, c, l) => (e.dynCall_iiiiijj = tc.Ea)(t, r, n, o, a, i, s, c, l), e.dynCall_iiiiiijj = (t, r, n, o, a, i, s, c, l, g) => (e.dynCall_iiiiiijj = tc.Fa)(t, r, n, o, a, i, s, c, l, g), Q = function e() {
                        o || tB(), o || (Q = e)
                    }, e.preInit)
                    for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0;) e.preInit.pop()();
                return tB(), c
            });
            async function F(e, t) {
                return D(I, e, t)
            }
            async function G(e, t) {
                return q(I, e, t)
            }
            let Y = [
                    ["aztec", "Aztec"],
                    ["code_128", "Code128"],
                    ["code_39", "Code39"],
                    ["code_93", "Code93"],
                    ["codabar", "Codabar"],
                    ["databar", "DataBar"],
                    ["databar_expanded", "DataBarExpanded"],
                    ["data_matrix", "DataMatrix"],
                    ["dx_film_edge", "DXFilmEdge"],
                    ["ean_13", "EAN-13"],
                    ["ean_8", "EAN-8"],
                    ["itf", "ITF"],
                    ["maxi_code", "MaxiCode"],
                    ["micro_qr_code", "MicroQRCode"],
                    ["pdf417", "PDF417"],
                    ["qr_code", "QRCode"],
                    ["rm_qr_code", "rMQRCode"],
                    ["upc_a", "UPC-A"],
                    ["upc_e", "UPC-E"],
                    ["linear_codes", "Linear-Codes"],
                    ["matrix_codes", "Matrix-Codes"]
                ],
                b = [...Y, ["unknown"]].map(e => e[0]),
                V = new Map(Y);

            function R(e) {
                var t, r;
                try {
                    return e instanceof(null == (r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView) ? void 0 : r.HTMLImageElement)
                } catch {
                    return !1
                }
            }

            function k(e) {
                var t, r;
                try {
                    return e instanceof(null == (r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView) ? void 0 : r.SVGImageElement)
                } catch {
                    return !1
                }
            }

            function Q(e) {
                var t, r;
                try {
                    return e instanceof(null == (r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView) ? void 0 : r.HTMLVideoElement)
                } catch {
                    return !1
                }
            }

            function N(e) {
                var t, r;
                try {
                    return e instanceof(null == (r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView) ? void 0 : r.HTMLCanvasElement)
                } catch {
                    return !1
                }
            }

            function x(e) {
                try {
                    return e instanceof ImageBitmap || "[object ImageBitmap]" === Object.prototype.toString.call(e)
                } catch {
                    return !1
                }
            }

            function K(e) {
                try {
                    return e instanceof OffscreenCanvas || "[object OffscreenCanvas]" === Object.prototype.toString.call(e)
                } catch {
                    return !1
                }
            }

            function L(e) {
                try {
                    return e instanceof VideoFrame || "[object VideoFrame]" === Object.prototype.toString.call(e)
                } catch {
                    return !1
                }
            }

            function U(e) {
                try {
                    return e instanceof Blob || "[object Blob]" === Object.prototype.toString.call(e)
                } catch {
                    return !1
                }
            }
            async function P(e) {
                var t;
                if (R(e) && !await J(e)) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
                if (k(e) && !await S(e)) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
                if (L(e) && null === e.format) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
                if (Q(e) && (0 === e.readyState || 1 === e.readyState)) throw new DOMException("Invalid element or state.", "InvalidStateError");
                if (x(e) && 0 === (t = e).width && 0 === t.height) throw new DOMException("The image source is detached.", "InvalidStateError");
                let {
                    width: r,
                    height: n
                } = function(e) {
                    if (R(e)) return {
                        width: e.naturalWidth,
                        height: e.naturalHeight
                    };
                    if (k(e)) return {
                        width: e.width.baseVal.value,
                        height: e.height.baseVal.value
                    };
                    if (Q(e)) return {
                        width: e.videoWidth,
                        height: e.videoHeight
                    };
                    if (x(e)) return {
                        width: e.width,
                        height: e.height
                    };
                    if (L(e)) return {
                        width: e.displayWidth,
                        height: e.displayHeight
                    };
                    if (N(e) || K(e)) return {
                        width: e.width,
                        height: e.height
                    };
                    throw TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")
                }(e);
                if (0 === r || 0 === n) return null;
                let o = (function(e, t) {
                    try {
                        let r = new OffscreenCanvas(e, t);
                        if (r.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return r;
                        throw void 0
                    } catch {
                        let r = document.createElement("canvas");
                        return r.width = e, r.height = t, r
                    }
                })(r, n).getContext("2d");
                o.drawImage(e, 0, 0);
                try {
                    return o.getImageData(0, 0, r, n)
                } catch {
                    throw new DOMException("Source would taint origin.", "SecurityError")
                }
            }
            async function W(e) {
                let t;
                try {
                    if (globalThis.createImageBitmap) t = await createImageBitmap(e);
                    else {
                        if (!globalThis.Image) return e;
                        t = new Image;
                        let r = "";
                        try {
                            r = URL.createObjectURL(e), t.src = r, await t.decode()
                        } finally {
                            URL.revokeObjectURL(r)
                        }
                    }
                } catch {
                    throw new DOMException("Failed to load or decode Blob.", "InvalidStateError")
                }
                return await P(t)
            }
            async function O(e) {
                if (U(e)) return await W(e);
                if (function(e) {
                        try {
                            return e instanceof ImageData || "[object ImageData]" === Object.prototype.toString.call(e)
                        } catch {
                            return !1
                        }
                    }(e)) {
                    if (0 === e.data.buffer.byteLength) throw new DOMException("The image data has been detached.", "InvalidStateError");
                    return e
                }
                return N(e) || K(e) ? function(e) {
                    let {
                        width: t,
                        height: r
                    } = e;
                    if (0 === t || 0 === r) return null;
                    let n = e.getContext("2d");
                    try {
                        return n.getImageData(0, 0, t, r)
                    } catch {
                        throw new DOMException("Source would taint origin.", "SecurityError")
                    }
                }(e) : await P(e)
            }
            async function J(e) {
                try {
                    return await e.decode(), !0
                } catch {
                    return !1
                }
            }
            async function S(e) {
                var t;
                try {
                    return await (null == (t = e.decode) ? void 0 : t.call(e)), !0
                } catch {
                    return !1
                }
            }

            function j(e, t) {
                var r, n;
                return (r = e) instanceof DOMException || "[object DOMException]" === Object.prototype.toString.call(r) ? new DOMException(`${t}: ${e.message}`, e.name) : (n = e) instanceof Error || "[object Error]" === Object.prototype.toString.call(n) ? new e.constructor(`${t}: ${e.message}`) : Error(`${t}: ${e}`)
            }
            class Z extends EventTarget {
                static async getSupportedFormats() {
                    return b.filter(e => "unknown" !== e)
                }
                async detect(e) {
                    try {
                        let t, r, n, o = await O(e);
                        if (null === o) return [];
                        let a = {
                            tryHarder: !0,
                            returnCodabarStartEnd: !0,
                            formats: (r = c, f(this, r, "read from private field"), n ? n.call(this) : r.get(this)).map(e => V.get(e))
                        };
                        try {
                            t = U(o) ? await F(o, a) : await G(o, a)
                        } catch (e) {
                            throw console.error(e), new DOMException("Barcode detection service unavailable.", "NotSupportedError")
                        }
                        return t.map(e => {
                            let {
                                topLeft: {
                                    x: t,
                                    y: r
                                },
                                topRight: {
                                    x: n,
                                    y: o
                                },
                                bottomLeft: {
                                    x: a,
                                    y: i
                                },
                                bottomRight: {
                                    x: s,
                                    y: c
                                }
                            } = e.position, l = Math.min(t, n, a, s), g = Math.min(r, o, i, c), u = Math.max(t, n, a, s), A = Math.max(r, o, i, c);
                            return {
                                boundingBox: new DOMRectReadOnly(l, g, u - l, A - g),
                                rawValue: e.text,
                                format: function(e) {
                                    for (let [t, r] of V)
                                        if (e === r) return t;
                                    return "unknown"
                                }(e.format),
                                cornerPoints: [{
                                    x: t,
                                    y: r
                                }, {
                                    x: n,
                                    y: o
                                }, {
                                    x: s,
                                    y: c
                                }, {
                                    x: a,
                                    y: i
                                }]
                            }
                        })
                    } catch (e) {
                        throw j(e, "Failed to execute 'detect' on 'BarcodeDetector'")
                    }
                }
                constructor(e = {}) {
                    var t;
                    super(), ((e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r))(this, c);
                    try {
                        const r = null == (t = null == e ? void 0 : e.formats) ? void 0 : t.filter(e => "unknown" !== e);
                        if ((null == r ? void 0 : r.length) === 0) throw TypeError("Hint option provided, but is empty.");
                        for (const e of null != r ? r : [])
                            if (!V.has(e)) throw TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${e}' is not a valid enum value of type BarcodeFormat.`);
                        ((e, t, r, n) => (f(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r)))(this, c, null != r ? r : []), T(I, void 0).then(e => {
                            this.dispatchEvent(new CustomEvent("load", {
                                detail: e
                            }))
                        }).catch(e => {
                            this.dispatchEvent(new CustomEvent("error", {
                                detail: e
                            }))
                        })
                    } catch (e) {
                        throw j(e, "Failed to construct 'BarcodeDetector'")
                    }
                }
            }

            function H(e) {
                let {
                    onClick: t,
                    disabled: r,
                    className: n
                } = e, o = {
                    cursor: r ? "default" : "pointer",
                    stroke: r ? "grey" : "yellow",
                    strokeLineJoin: "round",
                    strokeLineCap: "round",
                    strokeWidth: 1.5,
                    ...e.style
                };
                return g().createElement("svg", {
                    onClick: r ? void 0 : t,
                    className: n,
                    style: o,
                    width: "28px",
                    height: "28px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    d: "M3 3L6.00007 6.00007M21 21L19.8455 19.8221M9.74194 4.06811C9.83646 4.04279 9.93334 4.02428 10.0319 4.01299C10.1453 4 10.2683 4 10.5141 4H13.5327C13.7786 4 13.9015 4 14.015 4.01299C14.6068 4.08078 15.1375 4.40882 15.4628 4.90782C15.5252 5.00345 15.5802 5.11345 15.6901 5.33333C15.7451 5.44329 15.7726 5.49827 15.8037 5.54609C15.9664 5.79559 16.2318 5.95961 16.5277 5.9935C16.5844 6 16.6459 6 16.7688 6H17.8234C18.9435 6 19.5036 6 19.9314 6.21799C20.3077 6.40973 20.6137 6.71569 20.8055 7.09202C21.0234 7.51984 21.0234 8.0799 21.0234 9.2V15.3496M19.8455 19.8221C19.4278 20 18.8702 20 17.8234 20H6.22344C5.10333 20 4.54328 20 4.11546 19.782C3.73913 19.5903 3.43317 19.2843 3.24142 18.908C3.02344 18.4802 3.02344 17.9201 3.02344 16.8V9.2C3.02344 8.0799 3.02344 7.51984 3.24142 7.09202C3.43317 6.71569 3.73913 6.40973 4.11546 6.21799C4.51385 6.015 5.0269 6.00103 6.00007 6.00007M19.8455 19.8221L14.5619 14.5619M14.5619 14.5619C14.0349 15.4243 13.0847 16 12 16C10.3431 16 9 14.6569 9 13C9 11.9153 9.57566 10.9651 10.4381 10.4381M14.5619 14.5619L10.4381 10.4381M10.4381 10.4381L6.00007 6.00007"
                }))
            }

            function X(e) {
                let {
                    onClick: t,
                    disabled: r,
                    className: n
                } = e, o = {
                    cursor: r ? "default" : "pointer",
                    stroke: r ? "grey" : "yellow",
                    strokeLineJoin: "round",
                    strokeLineCap: "round",
                    strokeWidth: 1.5,
                    ...e.style
                };
                return g().createElement("svg", {
                    onClick: r ? void 0 : t,
                    className: n,
                    style: o,
                    width: "28px",
                    height: "28px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    d: "M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                }), g().createElement("path", {
                    d: "M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                }))
            }

            function z(e) {
                let {
                    scanning: t,
                    startScanning: r,
                    stopScanning: n
                } = e, [o, a] = (0, l.useState)(!1);

                function i() {
                    a(!0), t ? n() : r(), setTimeout(() => a(!1), 1e3)
                }
                return g().createElement("div", {
                    style: {
                        bottom: 85,
                        right: 3,
                        position: "absolute",
                        zIndex: 2,
                        cursor: o ? "default" : "pointer"
                    }
                }, t ? g().createElement(H, {
                    disabled: o,
                    onClick: i
                }) : g().createElement(X, {
                    disabled: o,
                    onClick: i
                }))
            }

            function $(e) {
                let {
                    onClick: t,
                    className: r,
                    style: n
                } = e;
                return g().createElement("svg", {
                    onClick: t,
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    className: r,
                    style: n,
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    strokeWidth: .2,
                    stroke: "yellow",
                    fill: "yellow",
                    d: "M13.225 9l5.025-7h-7.972l-3.3 11h5.359l-2.452 8.648.75.364L20.374 9zm.438 3H8.322l2.7-9H16.3l-5.025 7h7.101l-6.7 8.953z"
                }))
            }

            function _(e) {
                let {
                    onClick: t,
                    className: r,
                    style: n
                } = e;
                return g().createElement("svg", {
                    onClick: t,
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    className: r,
                    style: n,
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    strokeWidth: .2,
                    stroke: "yellow",
                    fill: "yellow",
                    d: "M14.516 15.158l.714.714-4.595 6.14-.75-.364L12.337 13H6.978L8.22 8.861l.803.803L8.322 12h3.036l1.793 1.792-1.475 5.16zm5.984 4.05L4.793 3.5l.707-.707 3.492 3.492L10.278 2h7.972l-5.025 7h7.149l-3.71 4.957 4.543 4.543zM12.707 10l3.243 3.243L18.376 10zM9.795 7.088l2.079 2.079L16.3 3h-5.278z"
                }))
            }

            function ee(e) {
                let {
                    status: t,
                    scanning: r,
                    torchToggle: n
                } = e;
                return r && n ? g().createElement("div", {
                    style: {
                        bottom: 35,
                        right: 3,
                        position: "absolute",
                        zIndex: 2,
                        cursor: "pointer"
                    }
                }, t ? g().createElement(_, {
                    onClick: () => {
                        n(!1)
                    }
                }) : g().createElement($, {
                    onClick: () => {
                        n(!0)
                    }
                })) : null
            }

            function et(e) {
                let {
                    onClick: t,
                    className: r,
                    disabled: n = !1
                } = e, o = {
                    cursor: n ? "default" : "pointer",
                    stroke: n ? "grey" : "yellow",
                    fill: n ? "grey" : "yellow",
                    ...e.style
                };
                return g().createElement("svg", {
                    onClick: n ? void 0 : t,
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    className: r,
                    style: o,
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    strokeWidth: .3,
                    d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z"
                }))
            }

            function er(e) {
                let {
                    onClick: t,
                    className: r,
                    disabled: n = !1
                } = e, o = {
                    cursor: n ? "default" : "pointer",
                    stroke: n ? "grey" : "yellow",
                    fill: n ? "grey" : "yellow",
                    ...e.style
                };
                return g().createElement("svg", {
                    onClick: n ? void 0 : t,
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 24 24",
                    className: r,
                    style: o,
                    xmlns: "http://www.w3.org/2000/svg"
                }, g().createElement("path", {
                    strokeWidth: .3,
                    d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z"
                }))
            }

            function en(e) {
                let {
                    scanning: t,
                    capabilities: r,
                    onZoom: n,
                    value: o
                } = e;
                if (!t || !n) return null;
                let a = (r.max - r.min) / 3;
                return g().createElement(l.Fragment, null, g().createElement("div", {
                    style: {
                        bottom: 130,
                        right: 3,
                        position: "absolute",
                        zIndex: 2,
                        cursor: "pointer"
                    }
                }, g().createElement(er, {
                    disabled: o <= r.min,
                    onClick: function() {
                        n(Math.max(o - a, r.min))
                    }
                })), g().createElement("div", {
                    style: {
                        bottom: 180,
                        right: 3,
                        position: "absolute",
                        zIndex: 2,
                        cursor: "pointer"
                    }
                }, g().createElement(et, {
                    disabled: o >= r.max,
                    onClick: function() {
                        n(Math.min(o + a, r.max))
                    }
                })))
            }

            function eo(e) {
                let {
                    scanning: t,
                    loading: r,
                    capabilities: n,
                    border: o = 35,
                    onOff: a,
                    torch: i,
                    zoom: s,
                    startScanning: c,
                    stopScanning: l
                } = e, u = "rgba(255, 0, 0, 0.5)";
                return g().createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, g().createElement("svg", {
                    viewBox: "0 0 100 100",
                    style: {
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        boxSizing: "border-box",
                        border: `${o>=35?o:35}px solid rgba(0, 0, 0, 0.2)`
                    }
                }, r && g().createElement("text", {
                    x: "50",
                    y: "50",
                    textAnchor: "middle",
                    fill: "black",
                    fontSize: "8",
                    fontFamily: "Arial",
                    fontWeight: "bold"
                }, "Loading ...", g().createElement("animate", {
                    attributeName: "opacity",
                    values: "0;1;0",
                    dur: "2s",
                    repeatCount: "indefinite"
                })), g().createElement("path", {
                    fill: "none",
                    d: "M23,0 L0,0 L0,23",
                    stroke: u,
                    strokeWidth: 3
                }), g().createElement("path", {
                    fill: "none",
                    d: "M0,77 L0,100 L23,100",
                    stroke: u,
                    strokeWidth: 3
                }), g().createElement("path", {
                    fill: "none",
                    d: "M77,100 L100,100 L100,77",
                    stroke: u,
                    strokeWidth: 3
                }), g().createElement("path", {
                    fill: "none",
                    d: "M100,23 L100,0 77,0",
                    stroke: u,
                    strokeWidth: 3
                })), a && g().createElement(z, {
                    scanning: t,
                    startScanning: c,
                    stopScanning: l
                }), i && n.torch && g().createElement(ee, {
                    scanning: t,
                    status: i.status,
                    torchToggle: i.toggle
                }), s && n.zoom && g().createElement(en, {
                    scanning: t,
                    capabilities: n.zoom,
                    value: s.value,
                    onZoom: s.onChange
                }))
            }
            c = new WeakMap, null != globalThis.BarcodeDetector || (globalThis.BarcodeDetector = Z);
            let ea = {
                    facingMode: "environment",
                    width: {
                        min: 640,
                        ideal: 720,
                        max: 1920
                    },
                    height: {
                        min: 640,
                        ideal: 720,
                        max: 1080
                    }
                },
                ei = {
                    audio: !0,
                    tracker: void 0,
                    onOff: !1,
                    finder: !0,
                    torch: !0,
                    zoom: !1
                },
                es = {
                    width: "100%",
                    height: "100%",
                    position: "relative"
                },
                ec = {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    overflow: "hidden"
                };
            var el = (s = () => {
                    let e = (0, w.detectBrowser)(window);
                    switch (e.browser) {
                        case "chrome":
                            (0, u.shimGetUserMedia)(window, e);
                            break;
                        case "firefox":
                            (0, A.shimGetUserMedia)(window, e);
                            break;
                        case "safari":
                            (0, h.shimGetUserMedia)(window, e);
                            break;
                        default:
                            throw Error("Unsupported browser")
                    }
                }, o = !1, function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return o || (n = s(t), o = !0), n
                }),
                eg = e => e instanceof Date,
                eu = e => null != e && !Array.isArray(e) && "object" == typeof e && !eg(e),
                eA = e => null == e || "object" != typeof e;

            function eh(e) {
                if (null === e) throw Error("Canvas should always be defined when component is mounted.");
                let t = e.getContext("2d");
                if (null === t) throw Error("Canvas 2D context should be non-null");
                t.clearRect(0, 0, e.width, e.height)
            }

            function ew(e) {
                var t;
                let {
                    onScan: r,
                    constraints: n,
                    formats: o = ["qr_code"],
                    paused: a = !1,
                    components: i,
                    children: s,
                    styles: c,
                    classNames: u,
                    allowMultiple: A,
                    scanDelay: h,
                    onError: w
                } = e, d = (0, l.useRef)(null), f = (0, l.useRef)(null), p = (0, l.useRef)(null), m = (0, l.useMemo)(() => ({
                    ...ea,
                    ...n
                }), [n]), C = (0, l.useMemo)(() => ({
                    ...ei,
                    ...i
                }), [i]), [E, B] = (0, l.useState)(!1), [y, v] = (0, l.useState)(!0), [M, T] = (0, l.useState)(m), D = function() {
                    let e = (0, l.useRef)(Promise.resolve({
                            type: "stop",
                            data: {}
                        })),
                        t = (0, l.useRef)(null),
                        r = (0, l.useRef)(null),
                        [n, o] = (0, l.useState)({}),
                        [a, i] = (0, l.useState)({}),
                        s = (0, l.useCallback)(async (e, n) => {
                            var a, s, c;
                            if (!window.isSecureContext) throw Error("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.");
                            if (void 0 === (null == (a = null == navigator ? void 0 : navigator.mediaDevices) ? void 0 : a.getUserMedia)) throw Error("this browser has no Stream API support");
                            el();
                            let l = await navigator.mediaDevices.getUserMedia({
                                audio: !1,
                                video: n
                            });
                            void 0 !== e.srcObject ? e.srcObject = l : void 0 !== e.mozSrcObject ? e.mozSrcObject = l : window.URL.createObjectURL ? e.src = window.URL.createObjectURL(l) : window.webkitURL ? e.src = window.webkitURL.createObjectURL(l) : e.src = l.id, await Promise.race([e.play(), new Promise(e => setTimeout(e, 3e3)).then(() => {
                                throw Error("Loading camera stream timed out after 3 seconds.")
                            })]), await new Promise(e => setTimeout(e, 500));
                            let [g] = l.getVideoTracks();
                            return i(g.getSettings()), o(null != (c = null == (s = null == g ? void 0 : g.getCapabilities) ? void 0 : s.call(g)) ? c : {}), t.current = l, r.current = g, {
                                type: "start",
                                data: {
                                    videoEl: e,
                                    stream: l,
                                    constraints: n
                                }
                            }
                        }, []),
                        c = (0, l.useCallback)(async (e, n) => {
                            for (let t of (e.src = "", e.srcObject = null, e.load(), n.getTracks())) n.removeTrack(t), t.stop();
                            return t.current = null, r.current = null, i({}), {
                                type: "stop",
                                data: {}
                            }
                        }, []),
                        g = (0, l.useCallback)(async (t, r) => {
                            let {
                                constraints: n,
                                restart: o = !1
                            } = r;
                            if (e.current = e.current.then(e => {
                                    if ("start" === e.type) {
                                        let {
                                            data: {
                                                videoEl: r,
                                                stream: a,
                                                constraints: i
                                            }
                                        } = e;
                                        return o || t !== r || n !== i ? c(r, a).then(() => s(t, n)) : e
                                    }
                                    return s(t, n)
                                }), "stop" === (await e.current).type) throw Error("Something went wrong with the camera task queue (start task).")
                        }, [s, c]),
                        u = (0, l.useCallback)(async () => {
                            if (e.current = e.current.then(e => {
                                    if ("stop" === e.type) return e;
                                    let {
                                        data: {
                                            videoEl: t,
                                            stream: r
                                        }
                                    } = e;
                                    return c(t, r)
                                }), "start" === (await e.current).type) throw Error("Something went wrong with the camera task queue (stop task).")
                        }, [c]),
                        A = (0, l.useCallback)(async e => {
                            let t = r.current;
                            if (!t) throw Error("No active video track found.");
                            {
                                e.advanced && e.advanced[0].zoom && t.getCapabilities().torch && await t.applyConstraints({
                                    advanced: [{
                                        torch: !1
                                    }]
                                }), await t.applyConstraints(e);
                                let r = t.getCapabilities(),
                                    n = t.getSettings();
                                o(r), i(n)
                            }
                        }, []);
                    return (0, l.useEffect)(() => () => {
                        (async () => {
                            await u()
                        })()
                    }, [u]), {
                        capabilities: n,
                        settings: a,
                        startCamera: g,
                        stopCamera: u,
                        updateConstraints: A
                    }
                }(), {
                    startScanning: q,
                    stopScanning: I
                } = function(e) {
                    let {
                        videoElementRef: t,
                        onScan: r,
                        onFound: n,
                        retryDelay: o = 100,
                        scanDelay: a = 0,
                        formats: i = [],
                        audio: s = !0,
                        allowMultiple: c = !1
                    } = e, g = (0, l.useRef)(new Z({
                        formats: i
                    })), u = (0, l.useRef)(null), A = (0, l.useRef)(null);
                    (0, l.useEffect)(() => {
                        g.current = new Z({
                            formats: i
                        })
                    }, [i]), (0, l.useEffect)(() => {
                        "undefined" != typeof window && s && (u.current = new Audio("data:audio/mp3;base64,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"))
                    }, [s]);
                    let h = (0, l.useCallback)(e => async i => {
                        if (null !== t.current && t.current.readyState > 1) {
                            let {
                                lastScan: l,
                                contentBefore: w,
                                lastScanHadContent: d
                            } = e;
                            if (i - l < o) A.current = window.requestAnimationFrame(h(e));
                            else {
                                let o = await g.current.detect(t.current),
                                    l = o.some(e => !w.includes(e.rawValue)),
                                    f = o.length > 0,
                                    p = e.lastOnScan;
                                (l || c && f && i - p >= a) && (s && u.current && u.current.paused && u.current.play().catch(e => console.error("Error playing the sound", e)), p = i, r(o)), f && n(o), !f && d && n(o);
                                let m = {
                                    lastScan: i,
                                    lastOnScan: p,
                                    lastScanHadContent: f,
                                    contentBefore: l ? o.map(e => e.rawValue) : w
                                };
                                A.current = window.requestAnimationFrame(h(m))
                            }
                        }
                    }, [t.current, r, n, o]);
                    return {
                        startScanning: (0, l.useCallback)(() => {
                            let e = performance.now();
                            A.current = window.requestAnimationFrame(h({
                                lastScan: e,
                                lastOnScan: e,
                                contentBefore: [],
                                lastScanHadContent: !1
                            }))
                        }, [h]),
                        stopScanning: (0, l.useCallback)(() => {
                            null !== A.current && (window.cancelAnimationFrame(A.current), A.current = null)
                        }, [])
                    }
                }({
                    videoElementRef: d,
                    onScan: r,
                    onFound: e => (function(e, t, r, n) {
                        if (null == r) throw Error("onFound handler should only be called when component is mounted. Thus tracking canvas is always defined.");
                        if (null == t) throw Error("onFound handler should only be called when component is mounted. Thus video element is always defined.");
                        if (0 === e.length || void 0 === n) eh(r);
                        else {
                            let o = t.offsetWidth,
                                a = t.offsetHeight,
                                i = t.videoWidth,
                                s = t.videoHeight,
                                c = Math.max(o / i, a / s),
                                l = i * c,
                                g = s * c,
                                u = l / i,
                                A = g / s,
                                h = (o - l) / 2,
                                w = (a - g) / 2,
                                d = e => {
                                    let {
                                        x: t,
                                        y: r
                                    } = e;
                                    return {
                                        x: Math.floor(t * u),
                                        y: Math.floor(r * A)
                                    }
                                },
                                f = e => {
                                    let {
                                        x: t,
                                        y: r
                                    } = e;
                                    return {
                                        x: Math.floor(t + h),
                                        y: Math.floor(r + w)
                                    }
                                },
                                p = e.map(e => {
                                    let {
                                        boundingBox: t,
                                        cornerPoints: r
                                    } = e, {
                                        x: n,
                                        y: o
                                    } = f(d({
                                        x: t.x,
                                        y: t.y
                                    })), {
                                        x: a,
                                        y: i
                                    } = d({
                                        x: t.width,
                                        y: t.height
                                    });
                                    return {
                                        ...e,
                                        cornerPoints: r.map(e => f(d(e))),
                                        boundingBox: DOMRectReadOnly.fromRect({
                                            x: n,
                                            y: o,
                                            width: a,
                                            height: i
                                        })
                                    }
                                });
                            r.width = t.offsetWidth, r.height = t.offsetHeight;
                            let m = r.getContext("2d");
                            if (null === m) throw Error("onFound handler should only be called when component is mounted. Thus tracking canvas 2D context is always defined.");
                            n(p, m)
                        }
                    })(e, d.current, p.current, C.tracker),
                    formats: o,
                    audio: C.audio,
                    allowMultiple: A,
                    retryDelay: void 0 === C.tracker ? 500 : 10,
                    scanDelay: h
                });
                (0, l.useEffect)(() => (B(!0), () => {
                    B(!1)
                }), []), (0, l.useEffect)(() => {
                    E && (I(), q())
                }, [null == i ? void 0 : i.tracker]), (0, l.useEffect)(() => {
                    ! function e(t, r) {
                        if (eA(t) || eA(r)) return t === r;
                        if (eg(t) && eg(r)) return t.getTime() === r.getTime();
                        let n = Object.keys(t),
                            o = Object.keys(r);
                        if (n.length !== o.length) return !1;
                        for (let a of n) {
                            let n = t[a];
                            if (!o.includes(a)) return !1;
                            if ("ref" !== a) {
                                let t = r[a];
                                if (eg(n) && eg(t) || eu(n) && eu(t) || Array.isArray(n) && Array.isArray(t) ? !e(n, t) : n !== t) return !1
                            }
                        }
                        return !0
                    }(m, M) && ((null == n ? void 0 : n.deviceId) && delete m.facingMode, T(m))
                }, [n]);
                let F = (0, l.useMemo)(() => ({
                        constraints: M,
                        shouldStream: E && !a
                    }), [M, E, a]),
                    G = async () => {
                        let e = d.current;
                        if (null == e) throw Error("Video should be defined when component is mounted.");
                        let t = f.current;
                        if (null == t) throw Error("Canvas should be defined when component is mounted.");
                        let r = t.getContext("2d");
                        if (null == r) throw Error("Canvas should be defined when component is mounted.");
                        if (F.shouldStream) {
                            await D.stopCamera(), v(!1);
                            try {
                                await D.startCamera(e, F), e ? v(!0) : await D.stopCamera()
                            } catch (e) {
                                null == w || w(e), console.error("error", e)
                            }
                        } else t.width = e.videoWidth, t.height = e.videoHeight, r.drawImage(e, 0, 0, e.videoWidth, e.videoHeight), await D.stopCamera(), v(!1)
                    };
                (0, l.useEffect)(() => {
                    (async () => {
                        await G()
                    })()
                }, [F]);
                let Y = (0, l.useMemo)(() => F.shouldStream && y, [F.shouldStream, y]);
                return (0, l.useEffect)(() => {
                    if (Y) {
                        if (void 0 === f.current) throw Error("shouldScan effect should only be triggered when component is mounted. Thus pause frame canvas is defined");
                        if (eh(f.current), void 0 === p.current) throw Error("shouldScan effect should only be triggered when component is mounted. Thus tracking canvas is defined");
                        if (eh(p.current), null == d.current) throw Error("shouldScan effect should only be triggered when component is mounted. Thus video element is defined");
                        q()
                    }
                }, [Y]), g().createElement("div", {
                    style: {
                        ...es,
                        ...null == c ? void 0 : c.container
                    },
                    className: null == u ? void 0 : u.container
                }, g().createElement("video", {
                    ref: d,
                    style: {
                        ...ec,
                        ...null == c ? void 0 : c.video,
                        visibility: a ? "hidden" : "visible"
                    },
                    className: null == u ? void 0 : u.video,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0
                }), g().createElement("canvas", {
                    ref: f,
                    style: {
                        display: a ? "block" : "none",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%"
                    }
                }), g().createElement("canvas", {
                    ref: p,
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }
                }), g().createElement("div", {
                    style: {
                        top: 0,
                        left: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }
                }, C.finder && g().createElement(eo, {
                    scanning: y,
                    capabilities: D.capabilities,
                    loading: !1,
                    onOff: C.onOff,
                    zoom: C.zoom && D.settings.zoom ? {
                        value: D.settings.zoom,
                        onChange: async e => {
                            let t = {
                                ...M,
                                advanced: [{
                                    zoom: e
                                }]
                            };
                            await D.updateConstraints(t)
                        }
                    } : void 0,
                    torch: C.torch ? {
                        status: null != (t = D.settings.torch) && t,
                        toggle: async e => {
                            let t = {
                                ...M,
                                advanced: [{
                                    torch: e
                                }]
                            };
                            await D.updateConstraints(t)
                        }
                    } : void 0,
                    startScanning: async () => await G(),
                    stopScanning: async () => {
                        await D.stopCamera(), eh(p.current), v(!1)
                    },
                    border: null == c ? void 0 : c.finderBorder
                }), s))
            }
        },
        42048: function(e, t, r) {
            function n(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (n = function(e) {
                    return e ? r : t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.shimGetUserMedia = function(e, t) {
                var r = e && e.navigator;
                if (r.mediaDevices) {
                    var n = function(e) {
                            if ("object" !== o(e) || e.mandatory || e.optional) return e;
                            var t = {};
                            return Object.keys(e).forEach(function(r) {
                                if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                                    var n = "object" === o(e[r]) ? e[r] : {
                                        ideal: e[r]
                                    };
                                    void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                                    var a = function(e, t) {
                                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                                    };
                                    if (void 0 !== n.ideal) {
                                        t.optional = t.optional || [];
                                        var i = {};
                                        "number" == typeof n.ideal ? (i[a("min", r)] = n.ideal, t.optional.push(i), (i = {})[a("max", r)] = n.ideal) : i[a("", r)] = n.ideal, t.optional.push(i)
                                    }
                                    void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[a("", r)] = n.exact) : ["min", "max"].forEach(function(e) {
                                        void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[a(e, r)] = n[e])
                                    })
                                }
                            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                        },
                        i = function(e, i) {
                            if (t.version >= 61) return i(e);
                            if ((e = JSON.parse(JSON.stringify(e))) && "object" === o(e.audio)) {
                                var s = function(e, t, r) {
                                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                                };
                                s((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), s(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio)
                            }
                            if (e && "object" === o(e.video)) {
                                var c, l = e.video.facingMode;
                                l = l && ("object" === o(l) ? l : {
                                    ideal: l
                                });
                                var g = t.version < 66;
                                if (l && ("user" === l.exact || "environment" === l.exact || "user" === l.ideal || "environment" === l.ideal) && !(r.mediaDevices.getSupportedConstraints && r.mediaDevices.getSupportedConstraints().facingMode && !g) && (delete e.video.facingMode, "environment" === l.exact || "environment" === l.ideal ? c = ["back", "rear"] : ("user" === l.exact || "user" === l.ideal) && (c = ["front"]), c)) return r.mediaDevices.enumerateDevices().then(function(t) {
                                    var r = (t = t.filter(function(e) {
                                        return "videoinput" === e.kind
                                    })).find(function(e) {
                                        return c.some(function(t) {
                                            return e.label.toLowerCase().includes(t)
                                        })
                                    });
                                    return !r && t.length && c.includes("back") && (r = t[t.length - 1]), r && (e.video.deviceId = l.exact ? {
                                        exact: r.deviceId
                                    } : {
                                        ideal: r.deviceId
                                    }), e.video = n(e.video), a("chrome: " + JSON.stringify(e)), i(e)
                                });
                                e.video = n(e.video)
                            }
                            return a("chrome: " + JSON.stringify(e)), i(e)
                        },
                        s = function(e) {
                            return t.version >= 64 ? e : {
                                name: ({
                                    PermissionDeniedError: "NotAllowedError",
                                    PermissionDismissedError: "NotAllowedError",
                                    InvalidStateError: "NotAllowedError",
                                    DevicesNotFoundError: "NotFoundError",
                                    ConstraintNotSatisfiedError: "OverconstrainedError",
                                    TrackStartError: "NotReadableError",
                                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                    MediaDeviceKillSwitchOn: "NotAllowedError",
                                    TabCaptureError: "AbortError",
                                    ScreenCaptureError: "AbortError",
                                    DeviceCaptureError: "AbortError"
                                })[e.name] || e.name,
                                message: e.message,
                                constraint: e.constraint || e.constraintName,
                                toString: function() {
                                    return this.name + (this.message && ": ") + this.message
                                }
                            }
                        };
                    if (r.getUserMedia = (function(e, t, n) {
                            i(e, function(e) {
                                r.webkitGetUserMedia(e, t, function(e) {
                                    n && n(s(e))
                                })
                            })
                        }).bind(r), r.mediaDevices.getUserMedia) {
                        var c = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                        r.mediaDevices.getUserMedia = function(e) {
                            return i(e, function(e) {
                                return c(e).then(function(t) {
                                    if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function(e) {
                                        e.stop()
                                    }), new DOMException("", "NotFoundError");
                                    return t
                                }, function(e) {
                                    return Promise.reject(s(e))
                                })
                            })
                        }
                    }
                }
            };
            var a = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != o(e) && "function" != typeof e) return {
                    default: e
                };
                var r = n(void 0);
                if (r && r.has(e)) return r.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && ({}).hasOwnProperty.call(e, s)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                        c && (c.get || c.set) ? Object.defineProperty(a, s, c) : a[s] = e[s]
                    } return a.default = e, r && r.set(e, a), a
            }(r(72755)).log
        },
        91723: function(e, t, r) {
            t.shimGetUserMedia = function(e, t) {
                var r = e && e.navigator,
                    o = e && e.MediaStreamTrack;
                if (r.getUserMedia = function(e, t, o) {
                        n.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, o)
                    }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
                    var i = function(e, t, r) {
                            t in e && !(r in e) && (e[r] = e[t], delete e[t])
                        },
                        s = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                    if (r.mediaDevices.getUserMedia = function(e) {
                            return "object" === a(e) && "object" === a(e.audio) && (i((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "mozAutoGainControl"), i(e.audio, "noiseSuppression", "mozNoiseSuppression")), s(e)
                        }, o && o.prototype.getSettings) {
                        var c = o.prototype.getSettings;
                        o.prototype.getSettings = function() {
                            var e = c.apply(this, arguments);
                            return i(e, "mozAutoGainControl", "autoGainControl"), i(e, "mozNoiseSuppression", "noiseSuppression"), e
                        }
                    }
                    if (o && o.prototype.applyConstraints) {
                        var l = o.prototype.applyConstraints;
                        o.prototype.applyConstraints = function(e) {
                            return "audio" === this.kind && "object" === a(e) && (i(e = JSON.parse(JSON.stringify(e)), "autoGainControl", "mozAutoGainControl"), i(e, "noiseSuppression", "mozNoiseSuppression")), l.apply(this, [e])
                        }
                    }
                }
            };
            var n = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != a(e) && "function" != typeof e) return {
                    default: e
                };
                var r = o(void 0);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && ({}).hasOwnProperty.call(e, s)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, s, c) : n[s] = e[s]
                    } return n.default = e, r && r.set(e, n), n
            }(r(72755));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (o = function(e) {
                    return e ? r : t
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
        },
        34208: function(e, t, r) {
            t.shimGetUserMedia = function(e) {
                var t = e && e.navigator;
                if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                    var r = t.mediaDevices,
                        o = r.getUserMedia.bind(r);
                    t.mediaDevices.getUserMedia = function(e) {
                        return o(function(e) {
                            return e && void 0 !== e.video ? Object.assign({}, e, {
                                video: n.compactObject(e.video)
                            }) : e
                        }(e))
                    }
                }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(e, r, n) {
                    t.mediaDevices.getUserMedia(e).then(r, n)
                }).bind(t))
            };
            var n = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != a(e) && "function" != typeof e) return {
                    default: e
                };
                var r = o(void 0);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && ({}).hasOwnProperty.call(e, s)) {
                        var c = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, s, c) : n[s] = e[s]
                    } return n.default = e, r && r.set(e, n), n
            }(r(72755));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (o = function(e) {
                    return e ? r : t
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
        },
        72755: function(e, t) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compactObject = function e(t) {
                return i(t) ? Object.keys(t).reduce(function(n, o) {
                    var a, s, c, l = i(t[o]),
                        g = l ? e(t[o]) : t[o],
                        u = l && !Object.keys(g).length;
                    if (void 0 === g || u) return n;
                    return Object.assign(n, (s = {}, (a = function(e, t) {
                        if ("object" != r(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != r(o)) return o;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(c = o, "string"), (c = "symbol" == r(a) ? a : a + "") in s) ? Object.defineProperty(s, c, {
                        value: g,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : s[c] = g, s))
                }, {}) : t
            }, t.deprecated = function(e, t) {
                o && console.warn(e + " is deprecated, please use " + t + " instead.")
            }, t.detectBrowser = function(e) {
                var t = {
                    browser: null,
                    version: null
                };
                if (void 0 === e || !e.navigator || !e.navigator.userAgent) return t.browser = "Not a browser.", t;
                var r = e.navigator;
                if (r.userAgentData && r.userAgentData.brands) {
                    var n = r.userAgentData.brands.find(function(e) {
                        return "Chromium" === e.brand
                    });
                    if (n) return {
                        browser: "chrome",
                        version: parseInt(n.version, 10)
                    }
                }
                return r.mozGetUserMedia ? (t.browser = "firefox", t.version = a(r.userAgent, /Firefox\/(\d+)\./, 1)) : r.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection ? (t.browser = "chrome", t.version = a(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) : e.RTCPeerConnection && r.userAgent.match(/AppleWebKit\/(\d+)\./) ? (t.browser = "safari", t.version = a(r.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype) : t.browser = "Not a supported browser.", t
            }, t.disableLog = function(e) {
                return "boolean" != typeof e ? Error("Argument type: " + r(e) + ". Please use a boolean.") : (n = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
            }, t.disableWarnings = function(e) {
                return "boolean" != typeof e ? Error("Argument type: " + r(e) + ". Please use a boolean.") : (o = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
            }, t.extractVersion = a, t.filterStats = function(e, t, r) {
                var n = r ? "outbound-rtp" : "inbound-rtp",
                    o = new Map;
                if (null === t) return o;
                var a = [];
                return e.forEach(function(e) {
                    "track" === e.type && e.trackIdentifier === t.id && a.push(e)
                }), a.forEach(function(t) {
                    e.forEach(function(r) {
                        r.type === n && r.trackId === t.id && s(e, r, o)
                    })
                }), o
            }, t.log = function() {
                ("undefined" == typeof window ? "undefined" : r(window)) === "object" && (n || "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments))
            }, t.walkStats = s, t.wrapPeerConnectionEvent = function(e, t, r) {
                if (e.RTCPeerConnection) {
                    var n = e.RTCPeerConnection.prototype,
                        o = n.addEventListener;
                    n.addEventListener = function(e, n) {
                        if (e !== t) return o.apply(this, arguments);
                        var a = function(e) {
                            var t = r(e);
                            t && (n.handleEvent ? n.handleEvent(t) : n(t))
                        };
                        return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map), this._eventMap[t].set(n, a), o.apply(this, [e, a])
                    };
                    var a = n.removeEventListener;
                    n.removeEventListener = function(e, r) {
                        if (e !== t || !this._eventMap || !this._eventMap[t] || !this._eventMap[t].has(r)) return a.apply(this, arguments);
                        var n = this._eventMap[t].get(r);
                        return this._eventMap[t].delete(r), 0 === this._eventMap[t].size && delete this._eventMap[t], 0 === Object.keys(this._eventMap).length && delete this._eventMap, a.apply(this, [e, n])
                    }, Object.defineProperty(n, "on" + t, {
                        get: function() {
                            return this["_on" + t]
                        },
                        set: function(e) {
                            this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }
            };
            var n = !0,
                o = !0;

            function a(e, t, r) {
                var n = e.match(t);
                return n && n.length >= r && parseInt(n[r], 10)
            }

            function i(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function s(e, t, r) {
                !t || r.has(t.id) || (r.set(t.id, t), Object.keys(t).forEach(function(n) {
                    n.endsWith("Id") ? s(e, e.get(t[n]), r) : n.endsWith("Ids") && t[n].forEach(function(t) {
                        s(e, e.get(t), r)
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=5850.f56982e9.js.map