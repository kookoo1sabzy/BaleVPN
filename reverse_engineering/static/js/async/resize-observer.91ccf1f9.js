try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3c6ceafa-e695-4da0-a554-fa7e59dfa896", t._sentryDebugIdIdentifier = "sentry-dbid-3c6ceafa-e695-4da0-a554-fa7e59dfa896")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7"], {
        82831: function(t, e, n) {
            n.d(e, {
                default: () => E
            });
            var i = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some(function(t, i) {
                            return t[0] === e && (n = i, !0)
                        }), n
                    }

                    function e() {
                        this.__entries__ = []
                    }
                    return Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.get = function(e) {
                        var n = t(this.__entries__, e),
                            i = this.__entries__[n];
                        return i && i[1]
                    }, e.prototype.set = function(e, n) {
                        var i = t(this.__entries__, e);
                        ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n])
                    }, e.prototype.delete = function(e) {
                        var n = this.__entries__,
                            i = t(n, e);
                        ~i && n.splice(i, 1)
                    }, e.prototype.has = function(e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function(t, e) {
                        void 0 === e && (e = null);
                        for (var n = 0, i = this.__entries__; n < i.length; n++) {
                            var r = i[n];
                            t.call(e, r[1], r[0])
                        }
                    }, e
                }(),
                r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                o = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t) {
                    return setTimeout(function() {
                        return t(Date.now())
                    }, 1e3 / 60)
                },
                a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                c = "undefined" != typeof MutationObserver,
                h = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                i = !1,
                                r = 0;

                            function o() {
                                n && (n = !1, t()), i && c()
                            }

                            function a() {
                                s(o)
                            }

                            function c() {
                                var t = Date.now();
                                if (n) {
                                    if (t - r < 2) return;
                                    i = !0
                                } else n = !0, i = !1, setTimeout(a, 20);
                                r = t
                            }
                            return c
                        }(this.refresh.bind(this), 0)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter(function(t) {
                            return t.gatherActive(), t.hasActive()
                        });
                        return t.forEach(function(t) {
                            return t.broadcastActive()
                        }), t.length > 0
                    }, t.prototype.connect_ = function() {
                        r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        a.some(function(t) {
                            return !!~n.indexOf(t)
                        }) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                u = function(t, e) {
                    for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                        var r = i[n];
                        Object.defineProperty(t, r, {
                            value: e[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                f = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || o
                },
                d = _(0, 0, 0, 0);

            function l(t) {
                return parseFloat(t) || 0
            }

            function p(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce(function(e, n) {
                    return e + l(t["border-" + n + "-width"])
                }, 0)
            }
            var v = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof f(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof f(t).SVGElement && "function" == typeof t.getBBox
            };

            function _(t, e, n, i) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: i
                }
            }
            var b = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = function(t) {
                            if (!r) return d;
                            if (v(t)) {
                                var e;
                                return _(0, 0, (e = t.getBBox()).width, e.height)
                            }
                            return function(t) {
                                var e, n = t.clientWidth,
                                    i = t.clientHeight;
                                if (!n && !i) return d;
                                var r = f(t).getComputedStyle(t),
                                    o = function(t) {
                                        for (var e = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                                            var r = i[n],
                                                o = t["padding-" + r];
                                            e[r] = l(o)
                                        }
                                        return e
                                    }(r),
                                    s = o.left + o.right,
                                    a = o.top + o.bottom,
                                    c = l(r.width),
                                    h = l(r.height);
                                if ("border-box" === r.boxSizing && (Math.round(c + s) !== n && (c -= p(r, "left", "right") + s), Math.round(h + a) !== i && (h -= p(r, "top", "bottom") + a)), (e = t) !== f(e).document.documentElement) {
                                    var u = Math.round(c + s) - n,
                                        v = Math.round(h + a) - i;
                                    1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(v) && (h -= v)
                                }
                                return _(o.left, o.top, c, h)
                            }(t)
                        }(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                y = function(t, e) {
                    var n, i, r, o, s, a = (n = e.x, i = e.y, r = e.width, o = e.height, u(s = Object.create(("undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype), {
                        x: n,
                        y: i,
                        width: r,
                        height: o,
                        top: i,
                        right: n + r,
                        bottom: o + i,
                        left: n
                    }), s);
                    u(this, {
                        target: t,
                        contentRect: a
                    })
                },
                g = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new i, "function" != typeof t) throw TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new b(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof f(t).Element)) throw TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach(function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        })
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map(function(t) {
                                    return new y(t.target, t.broadcastRect())
                                });
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                m = "undefined" != typeof WeakMap ? new WeakMap : new i,
                w = function t(e) {
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
                    var n = new g(e, h.getInstance(), this);
                    m.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach(function(t) {
                w.prototype[t] = function() {
                    var e;
                    return (e = m.get(this))[t].apply(e, arguments)
                }
            });
            let E = void 0 !== o.ResizeObserver ? o.ResizeObserver : w
        }
    }
]);
//# sourceMappingURL=resize-observer.91ccf1f9.js.map