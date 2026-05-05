try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "86375084-8e66-4d30-a1f4-6b5f0a3591d5", t._sentryDebugIdIdentifier = "sentry-dbid-86375084-8e66-4d30-a1f4-6b5f0a3591d5")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5050"], {
        13505: function(t, e, i) {
            i.d(e, {
                i3: () => X
            });
            let n = {
                toVector: (t, e) => (void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]),
                add: (t, e) => [t[0] + e[0], t[1] + e[1]],
                sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
                addTo(t, e) {
                    t[0] += e[0], t[1] += e[1]
                },
                subTo(t, e) {
                    t[0] -= e[0], t[1] -= e[1]
                }
            };

            function r(t, e, i) {
                return 0 === e || Math.abs(e) === 1 / 0 ? Math.pow(t, 5 * i) : t * e * i / (e + i * t)
            }

            function s(t, e, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
                return 0 === n ? Math.max(e, Math.min(t, i)) : t < e ? -r(e - t, i - e, n) + e : t > i ? +r(t - i, i - e, n) + i : t
            }

            function o(t, e, i) {
                var n;
                return (e = "symbol" == typeof(n = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string")) ? n : String(n)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach(function(e) {
                        o(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }
            let c = {
                pointer: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                mouse: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                touch: {
                    start: "start",
                    change: "move",
                    end: "end"
                },
                gesture: {
                    start: "start",
                    change: "change",
                    end: "end"
                }
            };

            function h(t) {
                return t ? t[0].toUpperCase() + t.slice(1) : ""
            }
            let u = ["enter", "leave"],
                d = ["gotpointercapture", "lostpointercapture"];

            function f(t) {
                return "touches" in t
            }

            function p(t) {
                return f(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse"
            }

            function v(t) {
                return f(t) ? ("touchend" === t.type || "touchcancel" === t.type ? t.changedTouches : t.targetTouches)[0] : t
            }

            function g(t) {
                let e = v(t);
                return f(t) ? e.identifier : e.pointerId
            }

            function m(t) {
                let e = v(t);
                return [e.clientX, e.clientY]
            }

            function b(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return "function" == typeof t ? t(...i) : t
            }

            function y() {}

            function _(t, e) {
                return Object.assign({}, e, t || {})
            }
            class w {
                get state() {
                    return this.ctrl.state[this.key]
                }
                set state(t) {
                    this.ctrl.state[this.key] = t
                }
                get shared() {
                    return this.ctrl.state.shared
                }
                get eventStore() {
                    return this.ctrl.gestureEventStores[this.key]
                }
                get timeoutStore() {
                    return this.ctrl.gestureTimeoutStores[this.key]
                }
                get config() {
                    return this.ctrl.config[this.key]
                }
                get sharedConfig() {
                    return this.ctrl.config.shared
                }
                get handler() {
                    return this.ctrl.handlers[this.key]
                }
                reset() {
                    let {
                        state: t,
                        shared: e,
                        ingKey: i,
                        args: n
                    } = this;
                    e[i] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [
                        [-1 / 0, 1 / 0],
                        [-1 / 0, 1 / 0]
                    ], t.args = n, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0
                }
                start(t) {
                    let e = this.state,
                        i = this.config;
                    e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = i.from ? b(i.from, e) : e.offset, e.offset = e.lastOffset, e.startTime = e.timeStamp = t.timeStamp)
                }
                computeValues(t) {
                    let e = this.state;
                    e._values = t, e.values = this.config.transform(t)
                }
                computeInitial() {
                    let t = this.state;
                    t._initial = t._values, t.initial = t.values
                }
                compute(t) {
                    let {
                        state: e,
                        config: i,
                        shared: r
                    } = this;
                    e.args = this.args;
                    let o = 0;
                    if (t && (e.event = t, i.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(t) {
                            let e = {};
                            if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
                                let {
                                    shiftKey: i,
                                    altKey: n,
                                    metaKey: r,
                                    ctrlKey: s
                                } = t;
                                Object.assign(e, {
                                    shiftKey: i,
                                    altKey: n,
                                    metaKey: r,
                                    ctrlKey: s
                                })
                            }
                            return e
                        }(t)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
                        let t = e._delta.map(Math.abs);
                        n.addTo(e._distance, t)
                    }
                    this.axisIntent && this.axisIntent(t);
                    let [a, l] = e._movement, [c, h] = i.threshold, {
                        _step: u,
                        values: d
                    } = e;
                    if (i.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(a) >= c && d[0]), !1 === u[1] && (u[1] = Math.abs(l) >= h && d[1])) : (!1 === u[0] && (u[0] = Math.abs(a) >= c && Math.sign(a) * c), !1 === u[1] && (u[1] = Math.abs(l) >= h && Math.sign(l) * h)), e.intentional = !1 !== u[0] || !1 !== u[1], !e.intentional) return;
                    let f = [0, 0];
                    if (i.hasCustomTransform) {
                        let [t, e] = d;
                        f[0] = !1 !== u[0] ? t - u[0] : 0, f[1] = !1 !== u[1] ? e - u[1] : 0
                    } else f[0] = !1 !== u[0] ? a - u[0] : 0, f[1] = !1 !== u[1] ? l - u[1] : 0;
                    this.restrictToAxis && !e._blocked && this.restrictToAxis(f);
                    let p = e.offset,
                        v = e._active && !e._blocked || e.active;
                    v && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = r[this.ingKey] = e._active, t && (e.first && ("bounds" in i && (e._bounds = b(i.bounds, e)), this.setup && this.setup()), e.movement = f, this.computeOffset()));
                    let [g, m] = e.offset, [
                        [y, _],
                        [w, k]
                    ] = e._bounds;
                    e.overflow = [g < y ? -1 : +(g > _), m < w ? -1 : +(m > k)], e._movementBound[0] = !!e.overflow[0] && (!1 === e._movementBound[0] ? e._movement[0] : e._movementBound[0]), e._movementBound[1] = !!e.overflow[1] && (!1 === e._movementBound[1] ? e._movement[1] : e._movementBound[1]);
                    let S = e._active && i.rubberband || [0, 0];
                    if (e.offset = function(t, e, i) {
                            let [n, r] = e, [o, a] = i, [
                                [l, c],
                                [h, u]
                            ] = t;
                            return [s(n, l, c, o), s(r, h, u, a)]
                        }(e._bounds, e.offset, S), e.delta = n.sub(e.offset, p), this.computeMovement(), v && (!e.last || o > 32)) {
                        e.delta = n.sub(e.offset, p);
                        let t = e.delta.map(Math.abs);
                        n.addTo(e.distance, t), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && o > 0 && (e.velocity = [t[0] / o, t[1] / o], e.timeDelta = o)
                    }
                }
                emit() {
                    let t = this.state,
                        e = this.shared,
                        i = this.config;
                    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents) return;
                    let n = this.handler(l(l(l({}, e), t), {}, {
                        [this.aliasKey]: t.values
                    }));
                    void 0 !== n && (t.memo = n)
                }
                clean() {
                    this.eventStore.clean(), this.timeoutStore.clean()
                }
                constructor(t, e, i) {
                    this.ctrl = t, this.args = e, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
                }
            }
            class k extends w {
                reset() {
                    super.reset(), this.state.axis = void 0
                }
                init() {
                    this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
                }
                computeOffset() {
                    this.state.offset = n.add(this.state.lastOffset, this.state.movement)
                }
                computeMovement() {
                    this.state.movement = n.sub(this.state.offset, this.state.lastOffset)
                }
                axisIntent(t) {
                    let e = this.state,
                        i = this.config;
                    if (!e.axis && t) {
                        let n = "object" == typeof i.axisThreshold ? i.axisThreshold[p(t)] : i.axisThreshold;
                        e.axis = function(t, e) {
                            let [i, n] = t, r = Math.abs(i), s = Math.abs(n);
                            return r > s && r > e ? "x" : s > r && s > e ? "y" : void 0
                        }(e._movement, n)
                    }
                    e._blocked = (i.lockDirection || !!i.axis) && !e.axis || !!i.axis && i.axis !== e.axis
                }
                restrictToAxis(t) {
                    if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
                        case "x":
                            t[1] = 0;
                            break;
                        case "y":
                            t[0] = 0
                    }
                }
                constructor(...t) {
                    super(...t), o(this, "aliasKey", "xy")
                }
            }
            let S = t => t,
                T = {
                    enabled() {
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        return t
                    },
                    eventOptions: (t, e, i) => l(l({}, i.shared.eventOptions), t),
                    preventDefault() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return t
                    },
                    triggerAllEvents() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return t
                    },
                    rubberband() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        switch (t) {
                            case !0:
                                return [.15, .15];
                            case !1:
                                return [0, 0];
                            default:
                                return n.toVector(t)
                        }
                    },
                    from: t => "function" == typeof t ? t : null != t ? n.toVector(t) : void 0,
                    transform(t, e, i) {
                        let n = t || i.shared.transform;
                        return this.hasCustomTransform = !!n, n || S
                    },
                    threshold: t => n.toVector(t, 0)
                },
                x = l(l({}, T), {}, {
                    axis(t, e, i) {
                        let {
                            axis: n
                        } = i;
                        if (this.lockDirection = "lock" === n, !this.lockDirection) return n
                    },
                    axisThreshold() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return t
                    },
                    bounds() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if ("function" == typeof t) return e => x.bounds(t(e));
                        if ("current" in t) return () => t.current;
                        if ("function" == typeof HTMLElement && t instanceof HTMLElement) return t;
                        let {
                            left: e = -1 / 0,
                            right: i = 1 / 0,
                            top: n = -1 / 0,
                            bottom: r = 1 / 0
                        } = t;
                        return [
                            [e, i],
                            [n, r]
                        ]
                    }
                }),
                O = {
                    ArrowRight: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return [t * e, 0]
                    },
                    ArrowLeft: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return [-1 * t * e, 0]
                    },
                    ArrowUp: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return [0, -1 * t * e]
                    },
                    ArrowDown: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return [0, t * e]
                    }
                },
                D = "undefined" != typeof window && window.document && window.document.createElement;

            function A() {
                return D && "ontouchstart" in window
            }
            let I = {
                    isBrowser: D,
                    gesture: function() {
                        try {
                            return "constructor" in GestureEvent
                        } catch (t) {
                            return !1
                        }
                    }(),
                    touch: A(),
                    touchscreen: A() || D && window.navigator.maxTouchPoints > 1,
                    pointer: D && "onpointerdown" in window,
                    pointerLock: D && "exitPointerLock" in window.document
                },
                E = {
                    mouse: 0,
                    touch: 0,
                    pen: 8
                },
                P = l(l({}, x), {}, {
                    device(t, e, i) {
                        let {
                            pointer: {
                                touch: n = !1,
                                lock: r = !1,
                                mouse: s = !1
                            } = {}
                        } = i;
                        return (this.pointerLock = r && I.pointerLock, I.touch && n) ? "touch" : this.pointerLock ? "mouse" : I.pointer && !s ? "pointer" : I.touch ? "touch" : "mouse"
                    },
                    preventScrollAxis(t, e, i) {
                        let {
                            preventScroll: n
                        } = i;
                        if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && t ? 250 : void 0, I.touchscreen && !1 !== n) return t || (void 0 !== n ? "y" : void 0)
                    },
                    pointerCapture(t, e, i) {
                        let {
                            pointer: {
                                capture: n = !0,
                                buttons: r = 1,
                                keys: s = !0
                            } = {}
                        } = i;
                        return this.pointerButtons = r, this.keys = s, !this.pointerLock && "pointer" === this.device && n
                    },
                    threshold(t, e, i) {
                        let {
                            filterTaps: r = !1,
                            tapsThreshold: s = 3,
                            axis: o
                        } = i, a = n.toVector(t, r ? s : +!!o);
                        return this.filterTaps = r, this.tapsThreshold = s, a
                    },
                    swipe() {
                        let {
                            velocity: t = .5,
                            distance: e = 50,
                            duration: i = 250
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            velocity: this.transform(n.toVector(t)),
                            distance: this.transform(n.toVector(e)),
                            duration: i
                        }
                    },
                    delay() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        switch (t) {
                            case !0:
                                return 180;
                            case !1:
                                return 0;
                            default:
                                return t
                        }
                    },
                    axisThreshold: t => t ? l(l({}, E), t) : E,
                    keyboardDisplacement() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                        return t
                    }
                });
            l(l({}, T), {}, {
                device(t, e, i) {
                    let {
                        shared: n,
                        pointer: {
                            touch: r = !1
                        } = {}
                    } = i;
                    if (n.target && !I.touch && I.gesture) return "gesture";
                    if (I.touch && r) return "touch";
                    if (I.touchscreen) {
                        if (I.pointer) return "pointer";
                        if (I.touch) return "touch"
                    }
                },
                bounds(t, e, i) {
                    let {
                        scaleBounds: n = {},
                        angleBounds: r = {}
                    } = i, s = t => {
                        let e = _(b(n, t), {
                            min: -1 / 0,
                            max: 1 / 0
                        });
                        return [e.min, e.max]
                    }, o = t => {
                        let e = _(b(r, t), {
                            min: -1 / 0,
                            max: 1 / 0
                        });
                        return [e.min, e.max]
                    };
                    return "function" != typeof n && "function" != typeof r ? [s(), o()] : t => [s(t), o(t)]
                },
                threshold(t, e, i) {
                    return this.lockDirection = "lock" === i.axis, n.toVector(t, this.lockDirection ? [.1, 3] : 0)
                },
                modifierKey: t => void 0 === t ? "ctrlKey" : t,
                pinchOnWheel() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return t
                }
            }), l(l({}, x), {}, {
                mouseOnly: function() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return t
                }
            }), l(l({}, x), {}, {
                mouseOnly: function() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return t
                }
            });
            let M = new Map,
                C = new Map,
                j = {
                    key: "drag",
                    engine: class extends k {
                        reset() {
                            super.reset();
                            let t = this.state;
                            t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this)
                        }
                        setup() {
                            let t = this.state;
                            if (t._bounds instanceof HTMLElement) {
                                let e = t._bounds.getBoundingClientRect(),
                                    i = t.currentTarget.getBoundingClientRect(),
                                    n = {
                                        left: e.left - i.left + t.offset[0],
                                        right: e.right - i.right + t.offset[0],
                                        top: e.top - i.top + t.offset[1],
                                        bottom: e.bottom - i.bottom + t.offset[1]
                                    };
                                t._bounds = x.bounds(n)
                            }
                        }
                        cancel() {
                            let t = this.state;
                            t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
                                this.compute(), this.emit()
                            }, 0))
                        }
                        setActive() {
                            this.state._active = this.state._pointerActive || this.state._keyboardActive
                        }
                        clean() {
                            this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
                        }
                        pointerDown(t) {
                            let e = this.config,
                                i = this.state;
                            if (null != t.buttons && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)) return;
                            let n = this.ctrl.setEventIds(t);
                            e.pointerCapture && t.target.setPointerCapture(t.pointerId), n && n.size > 1 && i._pointerActive || (this.start(t), this.setupPointer(t), i._pointerId = g(t), i._pointerActive = !0, this.computeValues(m(t)), this.computeInitial(), e.preventScrollAxis && "mouse" !== p(t) ? (i._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t))
                        }
                        startPointerDrag(t) {
                            let e = this.state;
                            e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit()
                        }
                        pointerMove(t) {
                            let e = this.state,
                                i = this.config;
                            if (!e._pointerActive) return;
                            let r = g(t);
                            if (void 0 !== e._pointerId && r !== e._pointerId) return;
                            let s = m(t);
                            if (document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = n.sub(s, e._values), this.computeValues(s)), n.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional) {
                                this.timeoutStore.remove("dragDelay"), e.active = !1, this.startPointerDrag(t);
                                return
                            }
                            if (i.preventScrollAxis && !e._preventScroll)
                                if (!e.axis) return;
                                else if (e.axis === i.preventScrollAxis || "xy" === i.preventScrollAxis) {
                                e._active = !1, this.clean();
                                return
                            } else {
                                this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
                                return
                            }
                            this.emit()
                        }
                        pointerUp(t) {
                            this.ctrl.setEventIds(t);
                            try {
                                this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
                            } catch (t) {}
                            let e = this.state,
                                i = this.config;
                            if (!e._active || !e._pointerActive) return;
                            let n = g(t);
                            if (void 0 !== e._pointerId && n !== e._pointerId) return;
                            this.state._pointerActive = !1, this.setActive(), this.compute(t);
                            let [r, s] = e._distance;
                            if (e.tap = r <= i.tapsThreshold && s <= i.tapsThreshold, e.tap && i.filterTaps) e._force = !0;
                            else {
                                let [t, n] = e._delta, [r, s] = e._movement, [o, a] = i.swipe.velocity, [l, c] = i.swipe.distance, h = i.swipe.duration;
                                if (e.elapsedTime < h) {
                                    let i = Math.abs(t / e.timeDelta),
                                        h = Math.abs(n / e.timeDelta);
                                    i > o && Math.abs(r) > l && (e.swipe[0] = Math.sign(t)), h > a && Math.abs(s) > c && (e.swipe[1] = Math.sign(n))
                                }
                            }
                            this.emit()
                        }
                        pointerClick(t) {
                            !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation())
                        }
                        setupPointer(t) {
                            let e = this.config,
                                i = e.device;
                            e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)))
                        }
                        pointerClean() {
                            this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
                        }
                        preventScroll(t) {
                            this.state._preventScroll && t.cancelable && t.preventDefault()
                        }
                        setupScrollPrevention(t) {
                            var e;
                            this.state._preventScroll = !1, "persist" in (e = t) && "function" == typeof e.persist && e.persist();
                            let i = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                                passive: !1
                            });
                            this.eventStore.add(this.sharedConfig.window, "touch", "end", i), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", i), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t)
                        }
                        setupDelayTrigger(t) {
                            this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                                this.state._step = [0, 0], this.startPointerDrag(t)
                            }, this.config.delay)
                        }
                        keyDown(t) {
                            let e = O[t.key];
                            if (e) {
                                let i = this.state,
                                    r = t.shiftKey ? 10 : t.altKey ? .1 : 1;
                                this.start(t), i._delta = e(this.config.keyboardDisplacement, r), i._keyboardActive = !0, n.addTo(i._movement, i._delta), this.compute(t), this.emit()
                            }
                        }
                        keyUp(t) {
                            t.key in O && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit())
                        }
                        bind(t) {
                            let e = this.config.device;
                            t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
                                capture: !0,
                                passive: !1
                            })
                        }
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "dragging")
                        }
                    },
                    resolver: P
                };
            var L = i(58191),
                K = i.n(L);
            let B = {
                    target(t) {
                        if (t) return () => "current" in t ? t.current : t
                    },
                    enabled() {
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        return t
                    },
                    window() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.isBrowser ? window : void 0;
                        return t
                    },
                    eventOptions() {
                        let {
                            passive: t = !0,
                            capture: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            passive: t,
                            capture: e
                        }
                    },
                    transform: t => t
                },
                V = ["target", "eventOptions", "window", "enabled", "transform"];

            function U() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    i = {};
                for (let [n, r] of Object.entries(e)) switch (typeof r) {
                    case "function":
                        i[n] = r.call(i, t[n], n, t);
                        break;
                    case "object":
                        i[n] = U(t[n], r);
                        break;
                    case "boolean":
                        r && (i[n] = t[n])
                }
                return i
            }
            class H {
                add(t, e, i, n, r) {
                    let s = this._listeners,
                        o = function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                i = c[t];
                            return t + (i && i[e] || e)
                        }(e, i),
                        a = l(l({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), r);
                    t.addEventListener(o, n, a);
                    let h = () => {
                        t.removeEventListener(o, n, a), s.delete(h)
                    };
                    return s.add(h), h
                }
                clean() {
                    this._listeners.forEach(t => t()), this._listeners.clear()
                }
                constructor(t, e) {
                    o(this, "_listeners", new Set), this._ctrl = t, this._gestureKey = e
                }
            }
            class R {
                add(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
                    for (var n = arguments.length, r = Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) r[s - 3] = arguments[s];
                    this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...r))
                }
                remove(t) {
                    let e = this._timeouts.get(t);
                    e && window.clearTimeout(e)
                }
                clean() {
                    this._timeouts.forEach(t => void window.clearTimeout(t)), this._timeouts.clear()
                }
                constructor() {
                    o(this, "_timeouts", new Map)
                }
            }
            class z {
                setEventIds(t) {
                    if (f(t)) return this.touchIds = new Set(Array.from(t.touches).filter(e => {
                        var i, n;
                        return e.target === t.currentTarget || (null == (i = t.currentTarget) || null == (n = i.contains) ? void 0 : n.call(i, e.target))
                    }).map(t => t.identifier)), this.touchIds;
                    if ("pointerId" in t) return "pointerup" === t.type || "pointercancel" === t.type ? this.pointerIds.delete(t.pointerId) : "pointerdown" === t.type && this.pointerIds.add(t.pointerId), this.pointerIds
                }
                applyHandlers(t, e) {
                    this.handlers = t, this.nativeHandlers = e
                }
                applyConfig(t, e) {
                    this.config = function(t, e) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                target: n,
                                eventOptions: r,
                                window: s,
                                enabled: o,
                                transform: a
                            } = t,
                            c = function(t, e) {
                                if (null == t) return {};
                                var i, n, r = function(t, e) {
                                    if (null == t) return {};
                                    var i, n, r = {},
                                        s = Object.keys(t);
                                    for (n = 0; n < s.length; n++) i = s[n], e.indexOf(i) >= 0 || (r[i] = t[i]);
                                    return r
                                }(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var s = Object.getOwnPropertySymbols(t);
                                    for (n = 0; n < s.length; n++) i = s[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
                                }
                                return r
                            }(t, V);
                        if (i.shared = U({
                                target: n,
                                eventOptions: r,
                                window: s,
                                enabled: o,
                                transform: a
                            }, B), e) {
                            let t = C.get(e);
                            i[e] = U(l({
                                shared: i.shared
                            }, c), t)
                        } else
                            for (let t in c) {
                                let e = C.get(t);
                                e && (i[t] = U(l({
                                    shared: i.shared
                                }, c[t]), e))
                            }
                        return i
                    }(t, e, this.config)
                }
                clean() {
                    for (let t of (this._targetEventStore.clean(), this.gestures)) this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean()
                }
                effect() {
                    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
                }
                bind() {
                    let t;
                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    let r = this.config.shared,
                        s = {};
                    if (!r.target || (t = r.target())) {
                        if (r.enabled) {
                            for (let e of this.gestures) {
                                let n = this.config[e],
                                    r = N(s, n.eventOptions, !!t);
                                n.enabled && new(M.get(e))(this, i, e).bind(r)
                            }
                            let e = N(s, r.eventOptions, !!t);
                            for (let t in this.nativeHandlers) e(t, "", e => this.nativeHandlers[t](l(l({}, this.state.shared), {}, {
                                event: e,
                                args: i
                            })), void 0, !0)
                        }
                        for (let t in s) s[t] = function() {
                            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return 0 === e.length ? y : 1 === e.length ? e[0] : function() {
                                let t;
                                for (let i of e) t = i.apply(this, arguments) || t;
                                return t
                            }
                        }(...s[t]);
                        if (!t) return s;
                        for (let e in s) {
                            let {
                                device: i,
                                capture: n,
                                passive: r
                            } = function(t) {
                                let e = t.substring(2).toLowerCase(),
                                    i = !!~e.indexOf("passive");
                                i && (e = e.replace("passive", ""));
                                let n = d.includes(e) ? "capturecapture" : "capture",
                                    r = !!~e.indexOf(n);
                                return r && (e = e.replace("capture", "")), {
                                    device: e,
                                    capture: r,
                                    passive: i
                                }
                            }(e);
                            this._targetEventStore.add(t, i, "", s[e], {
                                capture: n,
                                passive: r
                            })
                        }
                    }
                }
                constructor(t) {
                    o(this, "gestures", new Set), o(this, "_targetEventStore", new H(this)), o(this, "gestureEventStores", {}), o(this, "gestureTimeoutStores", {}), o(this, "handlers", {}), o(this, "config", {}), o(this, "pointerIds", new Set), o(this, "touchIds", new Set), o(this, "state", {
                            shared: {
                                shiftKey: !1,
                                metaKey: !1,
                                ctrlKey: !1,
                                altKey: !1
                            }
                        }),
                        function(t, e) {
                            e.drag && Y(t, "drag"), e.wheel && Y(t, "wheel"), e.scroll && Y(t, "scroll"), e.move && Y(t, "move"), e.pinch && Y(t, "pinch"), e.hover && Y(t, "hover")
                        }(this, t)
                }
            }

            function Y(t, e) {
                t.gestures.add(e), t.gestureEventStores[e] = new H(t, e), t.gestureTimeoutStores[e] = new R
            }
            let N = (t, e, i) => function(n, r, s) {
                var o, a;
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    f = null != (o = l.capture) ? o : e.capture,
                    p = null != (a = l.passive) ? a : e.passive,
                    v = d ? n : function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = c[t],
                            r = n && n[e] || e;
                        return "on" + h(t) + h(r) + (! function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = arguments.length > 1 ? arguments[1] : void 0;
                            return t && !u.includes(e)
                        }(i, r) ? "" : "Capture")
                    }(n, r, f);
                i && p && (v += "Passive"), t[v] = t[v] || [], t[v].push(s)
            };

            function X(t, e) {
                return M.set(j.key, j.engine), C.set(j.key, j.resolver),
                    function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            n = arguments.length > 3 ? arguments[3] : void 0,
                            r = K().useMemo(() => new z(t), []);
                        if (r.applyHandlers(t, n), r.applyConfig(e, i), K().useEffect(r.effect.bind(r)), K().useEffect(() => r.clean.bind(r), []), void 0 === e.target) return r.bind.bind(r)
                    }({
                        drag: t
                    }, e || {}, "drag")
            }
        }
    }
]);
//# sourceMappingURL=5050.c1ba63dd.js.map