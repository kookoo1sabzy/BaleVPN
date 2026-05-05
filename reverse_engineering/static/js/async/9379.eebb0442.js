try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0d5aa7fe-8557-4c75-b91f-86c3be9aa19c", e._sentryDebugIdIdentifier = "sentry-dbid-0d5aa7fe-8557-4c75-b91f-86c3be9aa19c")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9379"], {
        15424: function(e, t, i) {
            "use strict";
            i.d(t, {
                B: () => e1,
                C: () => eU,
                E: () => eV,
                H: () => eq,
                I: () => eW,
                K: () => eM,
                M: () => eE,
                R: () => e3,
                U: () => eC,
                V: () => eJ,
                W: () => ew,
                X: () => eO,
                Y: () => eR,
                a1: () => eb,
                a8: () => eA,
                ae: () => l,
                c: () => e2,
                d: () => eH,
                e: () => eD,
                f: () => e4,
                i: () => eZ,
                l: () => eS,
                o: () => eF,
                p: () => ey,
                q: () => eB,
                s: () => eG,
                t: () => eL,
                u: () => e9,
                w: () => e5,
                x: () => e_,
                y: () => eK
            });
            var n, r, a, s, o = i(14443),
                c = i(58191),
                l = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof i.g ? i.g : "u" > typeof self ? self : {},
                d = {
                    exports: {}
                },
                u = d.exports;
            let h = (s || (s = 1, n = function() {
                var e = function() {},
                    t = "undefined",
                    i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                    n = ["trace", "debug", "info", "warn", "error"],
                    r = {},
                    a = null;

                function s(e, t) {
                    var i = e[t];
                    if ("function" == typeof i.bind) return i.bind(e);
                    try {
                        return Function.prototype.bind.call(i, e)
                    } catch {
                        return function() {
                            return Function.prototype.apply.apply(i, [e, arguments])
                        }
                    }
                }

                function o() {
                    console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                }

                function c() {
                    for (var i = this.getLevel(), r = 0; r < n.length; r++) {
                        var a = n[r];
                        this[a] = r < i ? e : this.methodFactory(a, i, this.name)
                    }
                    if (this.log = this.debug, typeof console === t && i < this.levels.SILENT) return "No console available for logging"
                }

                function l(e) {
                    return function() {
                        typeof console !== t && (c.call(this), this[e].apply(this, arguments))
                    }
                }

                function d(n, r, a) {
                    var c;
                    return "debug" === (c = n) && (c = "log"), typeof console !== t && ("trace" === c && i ? o : void 0 !== console[c] ? s(console, c) : void 0 !== console.log ? s(console, "log") : e) || l.apply(this, arguments)
                }

                function u(e, i) {
                    var s, o, l, u = this,
                        h = "loglevel";

                    function p() {
                        var e;
                        if (!(typeof window === t || !h)) {
                            try {
                                e = window.localStorage[h]
                            } catch {}
                            if (typeof e === t) try {
                                var i = window.document.cookie,
                                    n = encodeURIComponent(h),
                                    r = i.indexOf(n + "="); - 1 !== r && (e = /^([^;]+)/.exec(i.slice(r + n.length + 1))[1])
                            } catch {}
                            return void 0 === u.levels[e] && (e = void 0), e
                        }
                    }

                    function m(e) {
                        var t = e;
                        if ("string" == typeof t && void 0 !== u.levels[t.toUpperCase()] && (t = u.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= u.levels.SILENT) return t;
                        throw TypeError("log.setLevel() called with invalid level: " + e)
                    }
                    "string" == typeof e ? h += ":" + e : "symbol" == typeof e && (h = void 0), u.name = e, u.levels = {
                        TRACE: 0,
                        DEBUG: 1,
                        INFO: 2,
                        WARN: 3,
                        ERROR: 4,
                        SILENT: 5
                    }, u.methodFactory = i || d, u.getLevel = function() {
                        return l ?? o ?? s
                    }, u.setLevel = function(e, i) {
                        return l = m(e), !1 !== i && function(e) {
                            var i = (n[e] || "silent").toUpperCase();
                            if (!(typeof window === t || !h)) {
                                try {
                                    window.localStorage[h] = i;
                                    return
                                } catch {}
                                try {
                                    window.document.cookie = encodeURIComponent(h) + "=" + i + ";"
                                } catch {}
                            }
                        }(l), c.call(u)
                    }, u.setDefaultLevel = function(e) {
                        o = m(e), p() || u.setLevel(e, !1)
                    }, u.resetLevel = function() {
                        l = null,
                            function() {
                                if (!(typeof window === t || !h)) {
                                    try {
                                        window.localStorage.removeItem(h)
                                    } catch {}
                                    try {
                                        window.document.cookie = encodeURIComponent(h) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                    } catch {}
                                }
                            }(), c.call(u)
                    }, u.enableAll = function(e) {
                        u.setLevel(u.levels.TRACE, e)
                    }, u.disableAll = function(e) {
                        u.setLevel(u.levels.SILENT, e)
                    }, u.rebuild = function() {
                        if (a !== u && (s = m(a.getLevel())), c.call(u), a === u)
                            for (var e in r) r[e].rebuild()
                    }, s = m(a ? a.getLevel() : "WARN");
                    var f = p();
                    null != f && (l = m(f)), c.call(u)
                }(a = new u).getLogger = function(e) {
                    if ("symbol" != typeof e && "string" != typeof e || "" === e) throw TypeError("You must supply a name when creating a logger.");
                    var t = r[e];
                    return t || (t = r[e] = new u(e, a.methodFactory)), t
                };
                var h = typeof window !== t ? window.log : void 0;
                return a.noConflict = function() {
                    return typeof window !== t && window.log === a && (window.log = h), a
                }, a.getLoggers = function() {
                    return r
                }, a.default = a, a
            }, d.exports ? d.exports = n() : u.log = n()), (r = d.exports) && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")) ? r.default : r;
            var p = function(e, t) {
                return (p = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
            };

            function m(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function i() {
                    this.constructor = e
                }
                p(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }

            function f(e, t) {
                var i, n, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    },
                    s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return s.next = o(0), s.throw = o(1), s.return = o(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(o) {
                    return function(c) {
                        var l = [o, c];
                        if (i) throw TypeError("Generator is already executing.");
                        for (; s && (s = 0, l[0] && (a = 0)), a;) try {
                            if (i = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                            switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                case 0:
                                case 1:
                                    r = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < r[1]) {
                                        a.label = r[1], r = l;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(l);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = t.call(e, a)
                        } catch (e) {
                            l = [6, e], n = 0
                        } finally {
                            i = r = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function g(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    i = t && e[t],
                    n = 0;
                if (i) return i.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var i = "function" == typeof Symbol && e[Symbol.iterator];
                if (!i) return e;
                var n, r, a = i.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) s.push(n.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (i = a.return) && i.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            }

            function b(e, t, i) {
                if (i || 2 == arguments.length)
                    for (var n, r = 0, a = t.length; r < a; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function y(e) {
                return this instanceof y ? (this.v = e, this) : new y(e)
            }

            function k(e) {
                return "function" == typeof e
            }

            function T(e) {
                var t = e(function(e) {
                    Error.call(e), e.stack = Error().stack
                });
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            var S = T(function(e) {
                return function(t) {
                    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(e, t) {
                        return t + 1 + ") " + e.toString()
                    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
                }
            });

            function C(e, t) {
                if (e) {
                    var i = e.indexOf(t);
                    0 <= i && e.splice(i, 1)
                }
            }
            var w = function() {
                    var e;

                    function t(e) {
                        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                    }
                    return t.prototype.unsubscribe = function() {
                        var e, t, i, n, r;
                        if (!this.closed) {
                            this.closed = !0;
                            var a = this._parentage;
                            if (a)
                                if (this._parentage = null, Array.isArray(a)) try {
                                    for (var s = g(a), o = s.next(); !o.done; o = s.next()) o.value.remove(this)
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (t = s.return) && t.call(s)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                } else a.remove(this);
                            var c = this.initialTeardown;
                            if (k(c)) try {
                                c()
                            } catch (e) {
                                r = e instanceof S ? e.errors : [e]
                            }
                            var l = this._finalizers;
                            if (l) {
                                this._finalizers = null;
                                try {
                                    for (var d = g(l), u = d.next(); !u.done; u = d.next()) {
                                        var h = u.value;
                                        try {
                                            R(h)
                                        } catch (e) {
                                            r = r ?? [], e instanceof S ? r = b(b([], v(r)), v(e.errors)) : r.push(e)
                                        }
                                    }
                                } catch (e) {
                                    i = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        u && !u.done && (n = d.return) && n.call(d)
                                    } finally {
                                        if (i) throw i.error
                                    }
                                }
                            }
                            if (r) throw new S(r)
                        }
                    }, t.prototype.add = function(e) {
                        var i;
                        if (e && e !== this)
                            if (this.closed) R(e);
                            else {
                                if (e instanceof t) {
                                    if (e.closed || e._hasParent(this)) return;
                                    e._addParent(this)
                                }(this._finalizers = null != (i = this._finalizers) ? i : []).push(e)
                            }
                    }, t.prototype._hasParent = function(e) {
                        var t = this._parentage;
                        return t === e || Array.isArray(t) && t.includes(e)
                    }, t.prototype._addParent = function(e) {
                        var t = this._parentage;
                        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                    }, t.prototype._removeParent = function(e) {
                        var t = this._parentage;
                        t === e ? this._parentage = null : Array.isArray(t) && C(t, e)
                    }, t.prototype.remove = function(e) {
                        var i = this._finalizers;
                        i && C(i, e), e instanceof t && e._removeParent(this)
                    }, (e = new t).closed = !0, t.EMPTY = e, t
                }(),
                E = w.EMPTY;

            function P(e) {
                return e instanceof w || e && "closed" in e && k(e.remove) && k(e.add) && k(e.unsubscribe)
            }

            function R(e) {
                k(e) ? e() : e.unsubscribe()
            }
            var O = void 0,
                I = function(e, t) {
                    for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                    return setTimeout.apply(void 0, b([e, t], v(i)))
                };

            function x(e) {
                I(function() {
                    throw e
                })
            }

            function D() {}
            var M = function(e) {
                    function t(t) {
                        var i = e.call(this) || this;
                        return i.isStopped = !1, t ? (i.destination = t, P(t) && t.add(i)) : i.destination = N, i
                    }
                    return m(t, e), t.create = function(e, t, i) {
                        return new A(e, t, i)
                    }, t.prototype.next = function(e) {
                        this.isStopped || this._next(e)
                    }, t.prototype.error = function(e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                    }, t.prototype._next = function(e) {
                        this.destination.next(e)
                    }, t.prototype._error = function(e) {
                        try {
                            this.destination.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    }, t.prototype._complete = function() {
                        try {
                            this.destination.complete()
                        } finally {
                            this.unsubscribe()
                        }
                    }, t
                }(w),
                _ = function() {
                    function e(e) {
                        this.partialObserver = e
                    }
                    return e.prototype.next = function(e) {
                        var t = this.partialObserver;
                        if (t.next) try {
                            t.next(e)
                        } catch (e) {
                            x(e)
                        }
                    }, e.prototype.error = function(e) {
                        var t = this.partialObserver;
                        if (t.error) try {
                            t.error(e)
                        } catch (e) {
                            x(e)
                        } else x(e)
                    }, e.prototype.complete = function() {
                        var e = this.partialObserver;
                        if (e.complete) try {
                            e.complete()
                        } catch (e) {
                            x(e)
                        }
                    }, e
                }(),
                A = function(e) {
                    function t(t, i, n) {
                        var r = e.call(this) || this;
                        return r.destination = new _(k(t) || !t ? {
                            next: t ?? void 0,
                            error: i ?? void 0,
                            complete: n ?? void 0
                        } : t), r
                    }
                    return m(t, e), t
                }(M),
                N = {
                    closed: !0,
                    next: D,
                    error: function(e) {
                        throw e
                    },
                    complete: D
                },
                L = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function U(e) {
                return e
            }
            var j = function() {
                function e(e) {
                    e && (this._subscribe = e)
                }
                return e.prototype.lift = function(t) {
                    var i = new e;
                    return i.source = this, i.operator = t, i
                }, e.prototype.subscribe = function(e, t, i) {
                    var n, r, a = this,
                        s = ! function(e) {
                            return e && e instanceof M || e && k(e.next) && k(e.error) && k(e.complete) && P(e)
                        }(e) ? new A(e, t, i) : e;
                    return n = a.operator, r = a.source, s.add(n ? n.call(s, r) : r ? a._subscribe(s) : a._trySubscribe(s)), s
                }, e.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        e.error(t)
                    }
                }, e.prototype.forEach = function(e, t) {
                    var i = this;
                    return new(t = F(t))(function(t, n) {
                        var r = new A({
                            next: function(t) {
                                try {
                                    e(t)
                                } catch (e) {
                                    n(e), r.unsubscribe()
                                }
                            },
                            error: n,
                            complete: t
                        });
                        i.subscribe(r)
                    })
                }, e.prototype._subscribe = function(e) {
                    var t;
                    return null == (t = this.source) ? void 0 : t.subscribe(e)
                }, e.prototype[L] = function() {
                    return this
                }, e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0 === e.length ? U : 1 === e.length ? e[0] : function(t) {
                        return e.reduce(function(e, t) {
                            return t(e)
                        }, t)
                    })(this)
                }, e.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = F(e))(function(e, i) {
                        var n;
                        t.subscribe(function(e) {
                            return n = e
                        }, function(e) {
                            return i(e)
                        }, function() {
                            return e(n)
                        })
                    })
                }, e.create = function(t) {
                    return new e(t)
                }, e
            }();

            function F(e) {
                var t;
                return null != (t = e ?? O) ? t : Promise
            }

            function B(e) {
                return function(t) {
                    if (k(null == t ? void 0 : t.lift)) return t.lift(function(t) {
                        try {
                            return e(t, this)
                        } catch (e) {
                            this.error(e)
                        }
                    });
                    throw TypeError("Unable to lift unknown Observable type")
                }
            }

            function V(e, t, i, n, r) {
                return new q(e, t, i, n, r)
            }
            var q = function(e) {
                    function t(t, i, n, r, a, s) {
                        var o = e.call(this, t) || this;
                        return o.onFinalize = a, o.shouldUnsubscribe = s, o._next = i ? function(e) {
                            try {
                                i(e)
                            } catch (e) {
                                t.error(e)
                            }
                        } : e.prototype._next, o._error = r ? function(e) {
                            try {
                                r(e)
                            } catch (e) {
                                t.error(e)
                            } finally {
                                this.unsubscribe()
                            }
                        } : e.prototype._error, o._complete = n ? function() {
                            try {
                                n()
                            } catch (e) {
                                t.error(e)
                            } finally {
                                this.unsubscribe()
                            }
                        } : e.prototype._complete, o
                    }
                    return m(t, e), t.prototype.unsubscribe = function() {
                        var t;
                        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                            var i = this.closed;
                            e.prototype.unsubscribe.call(this), i || null == (t = this.onFinalize) || t.call(this)
                        }
                    }, t
                }(M),
                W = T(function(e) {
                    return function() {
                        e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
                    }
                }),
                K = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                    }
                    return m(t, e), t.prototype.lift = function(e) {
                        var t = new H(this, this);
                        return t.operator = e, t
                    }, t.prototype._throwIfClosed = function() {
                        if (this.closed) throw new W
                    }, t.prototype.next = function(e) {
                        var t, i;
                        if (this._throwIfClosed(), !this.isStopped) {
                            this.currentObservers || (this.currentObservers = Array.from(this.observers));
                            try {
                                for (var n = g(this.currentObservers), r = n.next(); !r.done; r = n.next()) r.value.next(e)
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (i = n.return) && i.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }
                    }, t.prototype.error = function(e) {
                        if (this._throwIfClosed(), !this.isStopped) {
                            this.hasError = this.isStopped = !0, this.thrownError = e;
                            for (var t = this.observers; t.length;) t.shift().error(e)
                        }
                    }, t.prototype.complete = function() {
                        if (this._throwIfClosed(), !this.isStopped) {
                            this.isStopped = !0;
                            for (var e = this.observers; e.length;) e.shift().complete()
                        }
                    }, t.prototype.unsubscribe = function() {
                        this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
                    }, Object.defineProperty(t.prototype, "observed", {
                        get: function() {
                            var e;
                            return (null == (e = this.observers) ? void 0 : e.length) > 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._trySubscribe = function(t) {
                        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
                    }, t.prototype._subscribe = function(e) {
                        return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
                    }, t.prototype._innerSubscribe = function(e) {
                        var t = this,
                            i = this.hasError,
                            n = this.isStopped,
                            r = this.observers;
                        return i || n ? E : (this.currentObservers = null, r.push(e), new w(function() {
                            t.currentObservers = null, C(r, e)
                        }))
                    }, t.prototype._checkFinalizedStatuses = function(e) {
                        var t = this.hasError,
                            i = this.thrownError,
                            n = this.isStopped;
                        t ? e.error(i) : n && e.complete()
                    }, t.prototype.asObservable = function() {
                        var e = new j;
                        return e.source = this, e
                    }, t.create = function(e, t) {
                        return new H(e, t)
                    }, t
                }(j),
                H = function(e) {
                    function t(t, i) {
                        var n = e.call(this) || this;
                        return n.destination = t, n.source = i, n
                    }
                    return m(t, e), t.prototype.next = function(e) {
                        var t, i;
                        null == (i = null == (t = this.destination) ? void 0 : t.next) || i.call(t, e)
                    }, t.prototype.error = function(e) {
                        var t, i;
                        null == (i = null == (t = this.destination) ? void 0 : t.error) || i.call(t, e)
                    }, t.prototype.complete = function() {
                        var e, t;
                        null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e)
                    }, t.prototype._subscribe = function(e) {
                        var t, i;
                        return null != (i = null == (t = this.source) ? void 0 : t.subscribe(e)) ? i : E
                    }, t
                }(K),
                G = function(e) {
                    function t(t) {
                        var i = e.call(this) || this;
                        return i._value = t, i
                    }
                    return m(t, e), Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._subscribe = function(t) {
                        var i = e.prototype._subscribe.call(this, t);
                        return i.closed || t.next(this._value), i
                    }, t.prototype.getValue = function() {
                        var e = this.hasError,
                            t = this.thrownError,
                            i = this._value;
                        if (e) throw t;
                        return this._throwIfClosed(), i
                    }, t.prototype.next = function(t) {
                        e.prototype.next.call(this, this._value = t)
                    }, t
                }(K),
                z = function() {
                    return Date.now()
                },
                J = function(e) {
                    function t(t, i) {
                        return e.call(this) || this
                    }
                    return m(t, e), t.prototype.schedule = function(e, t) {
                        return this
                    }, t
                }(w),
                Y = function(e, t) {
                    for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                    return setInterval.apply(void 0, b([e, t], v(i)))
                },
                Q = function(e) {
                    function t(t, i) {
                        var n = e.call(this, t, i) || this;
                        return n.scheduler = t, n.work = i, n.pending = !1, n
                    }
                    return m(t, e), t.prototype.schedule = function(e, t) {
                        if (void 0 === t && (t = 0), this.closed) return this;
                        this.state = e;
                        var i, n = this.id,
                            r = this.scheduler;
                        return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, this.delay = t, this.id = null != (i = this.id) ? i : this.requestAsyncId(r, this.id, t), this
                    }, t.prototype.requestAsyncId = function(e, t, i) {
                        return void 0 === i && (i = 0), Y(e.flush.bind(e, this), i)
                    }, t.prototype.recycleAsyncId = function(e, t, i) {
                        if (void 0 === i && (i = 0), null != i && this.delay === i && !1 === this.pending) return t;
                        null != t && clearInterval(t)
                    }, t.prototype.execute = function(e, t) {
                        if (this.closed) return Error("executing a cancelled action");
                        this.pending = !1;
                        var i = this._execute(e, t);
                        if (i) return i;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, t.prototype._execute = function(e, t) {
                        var i, n = !1;
                        try {
                            this.work(e)
                        } catch (e) {
                            n = !0, i = e || Error("Scheduled action threw falsy error")
                        }
                        if (n) return this.unsubscribe(), i
                    }, t.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            var t = this.id,
                                i = this.scheduler,
                                n = i.actions;
                            this.work = this.state = this.scheduler = null, this.pending = !1, C(n, this), null != t && (this.id = this.recycleAsyncId(i, t, null)), this.delay = null, e.prototype.unsubscribe.call(this)
                        }
                    }, t
                }(J),
                X = function() {
                    function e(t, i) {
                        void 0 === i && (i = e.now), this.schedulerActionCtor = t, this.now = i
                    }
                    return e.prototype.schedule = function(e, t, i) {
                        return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(i, t)
                    }, e.now = z, e
                }();

            function $(e) {
                var t;
                return (t = e[e.length - 1]) && k(t.schedule) ? e.pop() : void 0
            }
            new(function(e) {
                function t(t, i) {
                    void 0 === i && (i = X.now);
                    var n = e.call(this, t, i) || this;
                    return n.actions = [], n._active = !1, n
                }
                return m(t, e), t.prototype.flush = function(e) {
                    var t, i = this.actions;
                    if (this._active) return void i.push(e);
                    this._active = !0;
                    do
                        if (t = e.execute(e.state, e.delay)) break; while (e = i.shift());
                    if (this._active = !1, t) {
                        for (; e = i.shift();) e.unsubscribe();
                        throw t
                    }
                }, t
            }(X))(Q);
            var Z = function(e) {
                return e && "number" == typeof e.length && "function" != typeof e
            };

            function ee(e) {
                return k(null == e ? void 0 : e.then)
            }

            function et(e) {
                return Symbol.asyncIterator && k(null == e ? void 0 : e[Symbol.asyncIterator])
            }

            function ei(e) {
                return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            var en = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

            function er(e) {
                return k(null == e ? void 0 : e[en])
            }

            function ea(e) {
                return function(e, t, i) {
                    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                    var n, r = i.apply(e, t || []),
                        a = [];
                    return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(e) {
                        return function(t) {
                            return Promise.resolve(t).then(e, l)
                        }
                    }), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function s(e, t) {
                        r[e] && (n[e] = function(t) {
                            return new Promise(function(i, n) {
                                a.push([e, t, i, n]) > 1 || o(e, t)
                            })
                        }, t && (n[e] = t(n[e])))
                    }

                    function o(e, t) {
                        try {
                            var i;
                            (i = r[e](t)).value instanceof y ? Promise.resolve(i.value.v).then(c, l) : d(a[0][2], i)
                        } catch (e) {
                            d(a[0][3], e)
                        }
                    }

                    function c(e) {
                        o("next", e)
                    }

                    function l(e) {
                        o("throw", e)
                    }

                    function d(e, t) {
                        e(t), a.shift(), a.length && o(a[0][0], a[0][1])
                    }
                }(this, arguments, function() {
                    var t, i, n;
                    return f(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = e.getReader(), r.label = 1;
                            case 1:
                                r.trys.push([1, , 9, 10]), r.label = 2;
                            case 2:
                                return [4, y(t.read())];
                            case 3:
                                return n = (i = r.sent()).value, i.done ? [4, y(void 0)] : [3, 5];
                            case 4:
                                return [2, r.sent()];
                            case 5:
                                return [4, y(n)];
                            case 6:
                                return [4, r.sent()];
                            case 7:
                                return r.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return t.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    })
                })
            }

            function es(e) {
                return k(null == e ? void 0 : e.getReader)
            }

            function eo(e) {
                if (e instanceof j) return e;
                if (null != e) {
                    var t, i, n, r;
                    if (k(e[L])) {
                        return t = e, new j(function(e) {
                            var i = t[L]();
                            if (k(i.subscribe)) return i.subscribe(e);
                            throw TypeError("Provided object does not correctly implement Symbol.observable")
                        })
                    }
                    if (Z(e)) {
                        return i = e, new j(function(e) {
                            for (var t = 0; t < i.length && !e.closed; t++) e.next(i[t]);
                            e.complete()
                        })
                    }
                    if (ee(e)) {
                        return n = e, new j(function(e) {
                            n.then(function(t) {
                                e.closed || (e.next(t), e.complete())
                            }, function(t) {
                                return e.error(t)
                            }).then(null, x)
                        })
                    }
                    if (et(e)) return ec(e);
                    if (er(e)) {
                        return r = e, new j(function(e) {
                            var t, i;
                            try {
                                for (var n = g(r), a = n.next(); !a.done; a = n.next()) {
                                    var s = a.value;
                                    if (e.next(s), e.closed) return
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (i = n.return) && i.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            e.complete()
                        })
                    }
                    if (es(e)) return ec(ea(e))
                }
                throw ei(e)
            }

            function ec(e) {
                return new j(function(t) {
                    (function(e, t) {
                        var i, n, r, a, s, o, c, l;
                        return s = this, o = void 0, c = void 0, l = function() {
                            var s;
                            return f(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        o.trys.push([0, 5, 6, 11]), i = function(e) {
                                            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                                            var t, i = e[Symbol.asyncIterator];
                                            return i ? i.call(e) : (e = g(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                                                return this
                                            }, t);

                                            function n(i) {
                                                t[i] = e[i] && function(t) {
                                                    return new Promise(function(n, r) {
                                                        var a, s, o;
                                                        a = n, s = r, o = (t = e[i](t)).done, Promise.resolve(t.value).then(function(e) {
                                                            a({
                                                                value: e,
                                                                done: o
                                                            })
                                                        }, s)
                                                    })
                                                }
                                            }
                                        }(e), o.label = 1;
                                    case 1:
                                        return [4, i.next()];
                                    case 2:
                                        if ((n = o.sent()).done) return [3, 4];
                                        if (s = n.value, t.next(s), t.closed) return [2];
                                        o.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return r = {
                                            error: o.sent()
                                        }, [3, 11];
                                    case 6:
                                        return o.trys.push([6, , 9, 10]), n && !n.done && (a = i.return) ? [4, a.call(i)] : [3, 8];
                                    case 7:
                                        o.sent(), o.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (r) throw r.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return t.complete(), [2]
                                }
                            })
                        }, new(c || (c = Promise))(function(e, t) {
                            function i(e) {
                                try {
                                    r(l.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function n(e) {
                                try {
                                    r(l.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function r(t) {
                                var r;
                                t.done ? e(t.value) : ((r = t.value) instanceof c ? r : new c(function(e) {
                                    e(r)
                                })).then(i, n)
                            }
                            r((l = l.apply(s, o || [])).next())
                        })
                    })(e, t).catch(function(e) {
                        return t.error(e)
                    })
                })
            }

            function el(e, t, i, n, r) {
                void 0 === n && (n = 0), void 0 === r && (r = !1);
                var a = t.schedule(function() {
                    i(), r ? e.add(this.schedule(null, n)) : this.unsubscribe()
                }, n);
                if (e.add(a), !r) return a
            }

            function ed(e, t) {
                return void 0 === t && (t = 0), B(function(i, n) {
                    i.subscribe(V(n, function(i) {
                        return el(n, e, function() {
                            return n.next(i)
                        }, t)
                    }, function() {
                        return el(n, e, function() {
                            return n.complete()
                        }, t)
                    }, function(i) {
                        return el(n, e, function() {
                            return n.error(i)
                        }, t)
                    }))
                })
            }

            function eu(e, t) {
                return void 0 === t && (t = 0), B(function(i, n) {
                    n.add(e.schedule(function() {
                        return i.subscribe(n)
                    }, t))
                })
            }

            function eh(e, t) {
                if (!e) throw Error("Iterable cannot be null");
                return new j(function(i) {
                    el(i, t, function() {
                        var n = e[Symbol.asyncIterator]();
                        el(i, t, function() {
                            n.next().then(function(e) {
                                e.done ? i.complete() : i.next(e.value)
                            })
                        }, 0, !0)
                    })
                })
            }

            function ep(e, t) {
                return B(function(i, n) {
                    var r = 0;
                    i.subscribe(V(n, function(i) {
                        n.next(e.call(t, i, r++))
                    }))
                })
            }

            function em() {
                for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                return (function e(t, i, n) {
                    return void 0 === n && (n = 1 / 0), k(i) ? e(function(e, n) {
                        return ep(function(t, r) {
                            return i(e, t, n, r)
                        })(eo(t(e, n)))
                    }, n) : ("number" == typeof i && (n = i), B(function(e, i) {
                        var r, a, s, o, c, l, d;
                        return r = n, a = [], s = 0, o = 0, c = !1, l = function() {
                                !c || a.length || s || i.complete()
                            }, d = function(e) {
                                s++;
                                var n = !1;
                                eo(t(e, o++)).subscribe(V(i, function(e) {
                                    i.next(e)
                                }, function() {
                                    n = !0
                                }, void 0, function() {
                                    if (n) try {
                                        for (s--; a.length && s < r;) ! function() {
                                            var e = a.shift();
                                            d(e)
                                        }();
                                        l()
                                    } catch (e) {
                                        i.error(e)
                                    }
                                }))
                            }, e.subscribe(V(i, function(e) {
                                return s < r ? d(e) : a.push(e)
                            }, function() {
                                c = !0, l()
                            })),
                            function() {}
                    }))
                })(U, 1)((e = $(t)) ? function(e, t) {
                    if (null != e) {
                        if (k(e[L])) return eo(e).pipe(eu(t), ed(t));
                        if (Z(e)) return new j(function(i) {
                            var n = 0;
                            return t.schedule(function() {
                                n === e.length ? i.complete() : (i.next(e[n++]), i.closed || this.schedule())
                            })
                        });
                        if (ee(e)) return eo(e).pipe(eu(t), ed(t));
                        if (et(e)) return eh(e, t);
                        if (er(e)) return new j(function(i) {
                            var n;
                            return el(i, t, function() {
                                    n = e[en](), el(i, t, function() {
                                        var e, t, r;
                                        try {
                                            t = (e = n.next()).value, r = e.done
                                        } catch (e) {
                                            i.error(e);
                                            return
                                        }
                                        r ? i.complete() : i.next(t)
                                    }, 0, !0)
                                }),
                                function() {
                                    return k(null == n ? void 0 : n.return) && n.return()
                                }
                        });
                        if (es(e)) return eh(ea(e), t)
                    }
                    throw ei(e)
                }(t, e) : eo(t))
            }

            function ef() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i = $(e);
                return B(function(t, n) {
                    (i ? em(e, t, i) : em(e, t)).subscribe(n)
                })
            }

            function eg(e, t) {
                return B(function(i, n) {
                    var r = null,
                        a = 0,
                        s = !1,
                        o = function() {
                            return s && !r && n.complete()
                        };
                    i.subscribe(V(n, function(i) {
                        null == r || r.unsubscribe();
                        var s = 0,
                            c = a++;
                        eo(e(i, c)).subscribe(r = V(n, function(e) {
                            return n.next(t ? t(i, e, c, s++) : e)
                        }, function() {
                            r = null, o()
                        }))
                    }, function() {
                        s = !0, o()
                    }))
                })
            }
            T(function(e) {
                return function(t) {
                    void 0 === t && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
                }
            }), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var ev = (e, t, i) => new Promise((n, r) => {
                var a = e => {
                        try {
                            o(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    },
                    s = e => {
                        try {
                            o(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    },
                    o = e => e.done ? n(e.value) : Promise.resolve(e.value).then(a, s);
                o((i = i.apply(e, t)).next())
            });

            function eb(e) {
                var t, i, n;
                return !(typeof e > "u") && (!!(t = e) && t.hasOwnProperty("participant") && t.hasOwnProperty("source") && t.hasOwnProperty("track") && "u" > typeof(null == (i = t.publication) ? void 0 : i.track) || !!(n = e) && n.hasOwnProperty("participant") && n.hasOwnProperty("source") && n.hasOwnProperty("publication") && "u" > typeof n.publication)
            }

            function ey(e) {
                if ("string" == typeof e || "number" == typeof e) return `${e}`;
                if (e && e.hasOwnProperty("participant") && e.hasOwnProperty("source") && typeof e.publication > "u") return `${e.participant.identity}_${e.source}_placeholder`;
                if (eb(e)) return `${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;
                throw Error(`Can't generate a id for the given track reference: ${e}`)
            }
            var ek = [o.RoomEvent.ConnectionStateChanged, o.RoomEvent.RoomMetadataChanged, o.RoomEvent.ActiveSpeakersChanged, o.RoomEvent.ConnectionQualityChanged, o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ParticipantPermissionsChanged, o.RoomEvent.ParticipantMetadataChanged, o.RoomEvent.ParticipantNameChanged, o.RoomEvent.ParticipantAttributesChanged, o.RoomEvent.TrackMuted, o.RoomEvent.TrackUnmuted, o.RoomEvent.TrackPublished, o.RoomEvent.TrackUnpublished, o.RoomEvent.TrackStreamStateChanged, o.RoomEvent.TrackSubscriptionFailed, o.RoomEvent.TrackSubscriptionPermissionChanged, o.RoomEvent.TrackSubscriptionStatusChanged, o.RoomEvent.LocalTrackPublished, o.RoomEvent.LocalTrackUnpublished],
                eT = [...(o.ParticipantEvent.TrackPublished, o.ParticipantEvent.TrackUnpublished, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.TrackStreamStateChanged, o.ParticipantEvent.TrackSubscribed, o.ParticipantEvent.TrackUnsubscribed, o.ParticipantEvent.TrackSubscriptionPermissionChanged, o.ParticipantEvent.TrackSubscriptionFailed, o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished, [o.ParticipantEvent.ConnectionQualityChanged, o.ParticipantEvent.IsSpeakingChanged, o.ParticipantEvent.ParticipantMetadataChanged, o.ParticipantEvent.ParticipantPermissionsChanged, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.TrackPublished, o.ParticipantEvent.TrackUnpublished, o.ParticipantEvent.TrackStreamStateChanged, o.ParticipantEvent.TrackSubscriptionFailed, o.ParticipantEvent.TrackSubscriptionPermissionChanged, o.ParticipantEvent.TrackSubscriptionStatusChanged]), o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished],
                eS = h.getLogger("lk-components-js");

            function eC(e) {
                return "object" == typeof e
            }

            function ew(e) {
                return Array.isArray(e) && e.filter(eC).length > 0
            }

            function eE(e) {
                let t = [...e];
                t.sort((e, t) => {
                    var i, n, r, a, s, o, c, l;
                    if (e.isSpeaking && t.isSpeaking) return t.audioLevel - e.audioLevel;
                    if (e.isSpeaking !== t.isSpeaking) return e.isSpeaking === t.isSpeaking ? 0 : e.isSpeaking ? -1 : 1;
                    if (e.lastSpokeAt !== t.lastSpokeAt) return void 0 !== e.lastSpokeAt || void 0 !== t.lastSpokeAt ? (null != (n = null == (i = t.lastSpokeAt) ? void 0 : i.getTime()) ? n : 0) - (null != (a = null == (r = e.lastSpokeAt) ? void 0 : r.getTime()) ? a : 0) : 0;
                    let d = e.videoTrackPublications.size > 0;
                    return d !== t.videoTrackPublications.size > 0 ? d ? -1 : 1 : (null != (o = null == (s = e.joinedAt) ? void 0 : s.getTime()) ? o : 0) - (null != (l = null == (c = t.joinedAt) ? void 0 : c.getTime()) ? l : 0)
                });
                let i = t.find(e => e.isLocal);
                if (i) {
                    let e = t.indexOf(i);
                    e >= 0 && (t.splice(e, 1), t.length > 0 ? t.splice(0, 0, i) : t.push(i))
                }
                return t
            }

            function eP(e) {
                return `lk-${e}`
            }

            function eR(e) {
                let t = eO(e),
                    i = eL(e.participant).pipe(ep(() => eO(e)), ef(t));
                return {
                    className: eP(e.source === o.Track.Source.Camera || e.source === o.Track.Source.ScreenShare ? "participant-media-video" : "participant-media-audio"),
                    trackObserver: i
                }
            }

            function eO(e) {
                if (eb(e)) return e.publication;
                {
                    let {
                        source: t,
                        name: i,
                        participant: n
                    } = e;
                    if (t && i) return n.getTrackPublications().find(e => e.source === t && e.trackName === i);
                    if (i) return n.getTrackPublicationByName(i);
                    if (t) return n.getTrackPublication(t);
                    throw Error("At least one of source and name needs to be defined")
                }
            }

            function eI(e) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                return new j(t => {
                    let n = () => {
                        t.next(e)
                    };
                    return i.forEach(t => {
                        e.on(t, n)
                    }), () => {
                        i.forEach(t => {
                            e.off(t, n)
                        })
                    }
                }).pipe(ef(e))
            }

            function ex(e, t) {
                return new j(i => {
                    let n = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.next(t)
                    };
                    return e.on(t, n), () => {
                        e.off(t, n)
                    }
                })
            }

            function eD(e) {
                return ex(e, o.RoomEvent.ConnectionStateChanged).pipe(ep(e => {
                    let [t] = e;
                    return t
                }), ef(e.state))
            }

            function eM(e) {
                return ex(e, o.RoomEvent.ActiveSpeakersChanged).pipe(ep(e => {
                    let [t] = e;
                    return t
                }))
            }

            function e_(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return em(new j(n => {
                    o.Room.getLocalDevices(e, i).then(e => {
                        n.next(e), n.complete()
                    }).catch(e => {
                        null == t || t(e), n.next([]), n.complete()
                    })
                }), new j(n => {
                    var r;
                    let a = () => ev(this, null, function*() {
                        try {
                            let t = yield o.Room.getLocalDevices(e, i);
                            n.next(t)
                        } catch (e) {
                            null == t || t(e)
                        }
                    });
                    if ("u" > typeof window) {
                        if (!window.isSecureContext) throw Error("Accessing media devices is available only in secure contexts (HTTPS and localhost), in some or all supporting browsers. See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices");
                        null == (r = null == navigator ? void 0 : navigator.mediaDevices) || r.addEventListener("devicechange", a)
                    }
                    return () => {
                        var e;
                        null == (e = null == navigator ? void 0 : navigator.mediaDevices) || e.removeEventListener("devicechange", a)
                    }
                }))
            }

            function eA(e) {
                return ex(e, o.RoomEvent.RecordingStatusChanged).pipe(ep(e => {
                    let [t] = e;
                    return t
                }), ef(e.isRecording))
            }

            function eN(e) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                return new j(t => {
                    let n = () => {
                        t.next(e)
                    };
                    return i.forEach(t => {
                        e.on(t, n)
                    }), () => {
                        i.forEach(t => {
                            e.off(t, n)
                        })
                    }
                }).pipe(ef(e))
            }

            function eL(e) {
                return eN(e, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.ParticipantPermissionsChanged, o.ParticipantEvent.TrackPublished, o.ParticipantEvent.TrackUnpublished, o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished, o.ParticipantEvent.MediaDevicesError, o.ParticipantEvent.TrackSubscriptionStatusChanged).pipe(ep(e => {
                    let {
                        isMicrophoneEnabled: t,
                        isCameraEnabled: i,
                        isScreenShareEnabled: n
                    } = e, r = e.getTrackPublication(o.Track.Source.Microphone);
                    return {
                        isCameraEnabled: i,
                        isMicrophoneEnabled: t,
                        isScreenShareEnabled: n,
                        cameraTrack: e.getTrackPublication(o.Track.Source.Camera),
                        microphoneTrack: r,
                        participant: e
                    }
                }))
            }

            function eU(e) {
                return e ? eN(e, o.ParticipantEvent.ParticipantMetadataChanged, o.ParticipantEvent.ParticipantNameChanged).pipe(ep(e => {
                    let {
                        name: t,
                        identity: i,
                        metadata: n
                    } = e;
                    return {
                        name: t,
                        identity: i,
                        metadata: n
                    }
                }), ef({
                    name: e.name,
                    identity: e.identity,
                    metadata: e.metadata
                })) : void 0
            }

            function ej(e, t) {
                return new j(i => {
                    let n = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.next(t)
                    };
                    return e.on(t, n), () => {
                        e.off(t, n)
                    }
                })
            }

            function eF(e) {
                var t, i, n, r;
                return eN(e.participant, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.TrackSubscribed, o.ParticipantEvent.TrackUnsubscribed, o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished).pipe(ep(t => {
                    var i, n;
                    let r = null != (i = e.publication) ? i : t.getTrackPublication(e.source);
                    return null == (n = null == r ? void 0 : r.isMuted) || n
                }), ef(null == (r = null != (n = null == (t = e.publication) ? void 0 : t.isMuted) ? n : null == (i = e.participant.getTrackPublication(e.source)) ? void 0 : i.isMuted) || r))
            }

            function eB(e) {
                return ej(e, o.ParticipantEvent.IsSpeakingChanged).pipe(ep(e => {
                    let [t] = e;
                    return t
                }))
            }

            function eV(e) {
                var t;
                let i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = new j(e => (i = e, () => s.unsubscribe())).pipe(ef(Array.from(e.remoteParticipants.values()))),
                    a = null != (t = n.additionalRoomEvents) ? t : ek,
                    s = eI(e, ...Array.from(new Set([o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ConnectionStateChanged, ...a]))).subscribe(e => null == i ? void 0 : i.next(Array.from(e.remoteParticipants.values())));
                return e.remoteParticipants.size > 0 && (null == i || i.next(Array.from(e.remoteParticipants.values()))), r
            }

            function eq(e, t) {
                var i;
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null != (i = n.additionalEvents) ? i : eT;
                return eI(e, o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ConnectionStateChanged).pipe(eg(e => {
                    let i = e.getParticipantByIdentity(t);
                    return i ? eN(i, ...r) : new j(e => e.next(void 0))
                }), ef(e.getParticipantByIdentity(t)))
            }

            function eW(e, t) {
                var i;
                let {
                    kind: n,
                    identity: r
                } = t, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = null != (i = a.additionalEvents) ? i : eT, c = e => {
                    let t = !0;
                    return n && (t = t && e.kind === n), r && (t = t && e.identity === r), t
                };
                return eI(e, o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ConnectionStateChanged).pipe(eg(e => {
                    let t = Array.from(e.remoteParticipants.values()).find(e => c(e));
                    return t ? eN(t, ...s) : new j(e => e.next(void 0))
                }), ef(Array.from(e.remoteParticipants.values()).find(e => c(e))))
            }

            function eK(e, t, i) {
                var n, r = this;
                let a = new G(void 0),
                    s = ex(t, o.RoomEvent.ActiveDeviceChanged).pipe((n = t => {
                        let [i] = t;
                        return i === e
                    }, B(function(e, t) {
                        var i = 0;
                        e.subscribe(V(t, function(e) {
                            return n.call(void 0, e, i++) && t.next(e)
                        }))
                    })), ep(e => {
                        let [t, i] = e;
                        return eS.debug("activeDeviceObservable | RoomEvent.ActiveDeviceChanged", {
                            kind: t,
                            deviceId: i
                        }), i
                    }));
                return {
                    className: eP("media-device-select"),
                    activeDeviceObservable: s,
                    setActiveMediaDevice: function(i) {
                        for (var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) s[c - 1] = arguments[c];
                        return ev(r, [i, ...s], function*(i) {
                            var n, r, s;
                            let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (t) {
                                let l;
                                eS.debug(`Switching active device of kind "${e}" with id ${i}.`), yield t.switchActiveDevice(e, i, c.exact);
                                let d = null != (n = t.getActiveDevice(e)) ? n : i;
                                d !== i && "default" !== i && eS.info(`We tried to select the device with id (${i}), but the browser decided to select the device with id (${d}) instead.`), "audioinput" === e ? l = null == (r = t.localParticipant.getTrackPublication(o.Track.Source.Microphone)) ? void 0 : r.track : "videoinput" === e && (l = null == (s = t.localParticipant.getTrackPublication(o.Track.Source.Camera)) ? void 0 : s.track);
                                let u = "default" === i && !l || "default" === i && (null == l ? void 0 : l.mediaStreamTrack.label.startsWith("Default"));
                                a.next(u ? i : d)
                            }
                        })
                    }
                }
            }

            function eH(e) {
                return {
                    className: eP("connection-quality"),
                    connectionQualityObserver: ej(e, o.ParticipantEvent.ConnectionQualityChanged).pipe(ep(e => {
                        let [t] = e;
                        return t
                    }), ef(e.connectionQuality))
                }
            }

            function eG() {
                return {
                    className: "lk-room-container"
                }
            }

            function ez(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = [e.localParticipant, ...Array.from(e.remoteParticipants.values())],
                    r = [];
                return n.forEach(e => {
                    t.forEach(t => {
                        let n = Array.from(e.trackPublications.values()).filter(e => e.source === t && (!i || e.track)).map(t => ({
                            participant: e,
                            publication: t,
                            source: t.source
                        }));
                        r.push(...n)
                    })
                }), {
                    trackReferences: r,
                    participants: n
                }
            }

            function eJ(e, t, i) {
                var n, r;
                let a = null != (n = i.additionalRoomEvents) ? n : ek,
                    s = null == (r = i.onlySubscribed) || r;
                return eI(e, ...Array.from(new Set([o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ConnectionStateChanged, o.RoomEvent.LocalTrackPublished, o.RoomEvent.LocalTrackUnpublished, o.RoomEvent.TrackPublished, o.RoomEvent.TrackUnpublished, o.RoomEvent.TrackSubscriptionStatusChanged, ...a]).values())).pipe(ep(e => {
                    let i = ez(e, t, s);
                    return eS.debug(`TrackReference[] was updated. (length ${i.trackReferences.length})`, i), i
                }), ef(ez(e, t, s)))
            }
            eS.setDefaultLevel("WARN");
            var {
                load: eY,
                save: eQ
            } = (a = "lk-user-choices", {
                load: () => (function(e) {
                    if (typeof localStorage > "u") return void eS.error("Local storage is not available.");
                    try {
                        let t = localStorage.getItem(e);
                        if (!t) return void eS.warn(`Item with key ${e} does not exist in local storage.`);
                        return JSON.parse(t)
                    } catch (e) {
                        eS.error(`Error getting item from local storage: ${e}`);
                        return
                    }
                })(a),
                save: e => (function(e, t) {
                    if (typeof localStorage > "u") return void eS.error("Local storage is not available.");
                    try {
                        if (t) {
                            let i = Object.fromEntries(Object.entries(t).filter(e => {
                                let [, t] = e;
                                return "" !== t
                            }));
                            localStorage.setItem(e, JSON.stringify(i))
                        }
                    } catch (e) {
                        eS.error(`Error setting item to local storage: ${e}`)
                    }
                })(a, e)
            });
            let eX = c.createContext(void 0);

            function e$() {
                return c.useContext(eX)
            }

            function eZ(e) {
                let t = e$(),
                    i = e ?? t;
                if (!i) throw Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");
                return i
            }
            let e0 = c.createContext(void 0);

            function e1() {
                return c.useContext(e0)
            }

            function e2(e) {
                let t = e1(),
                    i = e$(),
                    n = e ?? t ?? (null == i ? void 0 : i.participant);
                if (!n) throw Error("No participant provided, make sure you are inside a participant context or pass the participant explicitly");
                return n
            }
            let e3 = c.createContext(void 0);

            function e4() {
                let e = c.useContext(e3);
                if (!e) throw Error("tried to access room context outside of livekit room component");
                return e
            }

            function e5() {
                return c.useContext(e3)
            }

            function e9(e) {
                let t = e5(),
                    i = e ?? t;
                if (!i) throw Error("No room provided, make sure you are inside a Room context or pass the room explicitly");
                return i
            }
        },
        77530: function(e, t, i) {
            "use strict";
            i.d(t, {
                C: () => d,
                G: () => c,
                H: () => l,
                I: () => h,
                K: () => m,
                L: () => f,
                M: () => p,
                N: () => g,
                Y: () => b,
                e: () => u,
                i: () => o,
                t: () => v
            });
            var n = i(58191),
                r = i(15424),
                a = i(14443);

            function s(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    [r, a] = n.useState(t);
                return n.useEffect(() => {
                    if (i && a(t), typeof window > "u" || !e) return;
                    let n = e.subscribe(a);
                    return () => n.unsubscribe()
                }, [e, i]), r
            }

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, r.c)(e.participant),
                    {
                        className: i,
                        connectionQualityObserver: a
                    } = n.useMemo(() => (0, r.d)(t), [t]);
                return {
                    className: i,
                    quality: s(a, t.connectionQuality)
                }
            }

            function c(e) {
                var t, i;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = "string" == typeof e ? a.participant : e.participant,
                    o = (0, r.c)(s),
                    c = "string" == typeof e ? {
                        participant: o,
                        source: e
                    } : e,
                    [l, d] = n.useState(!!(null != (t = c.publication) && t.isMuted || null != (i = o.getTrackPublication(c.source)) && i.isMuted));
                return n.useEffect(() => {
                    let e = (0, r.o)(c).subscribe(d);
                    return () => e.unsubscribe()
                }, [(0, r.p)(c)]), l
            }

            function l(e) {
                let t = (0, r.c)(e);
                return s(n.useMemo(() => (0, r.q)(t), [t]), t.isSpeaking)
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, r.u)(e.room),
                    [i, a] = n.useState(t.localParticipant),
                    [s, o] = n.useState(i.isMicrophoneEnabled),
                    [c, l] = n.useState(i.isCameraEnabled),
                    [d, u] = n.useState(i.isScreenShareEnabled),
                    [h, p] = n.useState(i.lastMicrophoneError),
                    [m, f] = n.useState(i.lastCameraError),
                    [g, v] = n.useState(void 0),
                    [b, y] = n.useState(void 0),
                    k = e => {
                        l(e.isCameraEnabled), o(e.isMicrophoneEnabled), u(e.isScreenShareEnabled), y(e.cameraTrack), v(e.microphoneTrack), p(e.participant.lastMicrophoneError), f(e.participant.lastCameraError), a(e.participant)
                    };
                return n.useEffect(() => {
                    let e = (0, r.t)(t.localParticipant).subscribe(k);
                    return () => e.unsubscribe()
                }, [t]), {
                    isMicrophoneEnabled: s,
                    isScreenShareEnabled: d,
                    isCameraEnabled: c,
                    microphoneTrack: g,
                    cameraTrack: b,
                    lastMicrophoneError: h,
                    lastCameraError: m,
                    localParticipant: i
                }
            }

            function u(e) {
                let {
                    kind: t,
                    room: i,
                    track: o,
                    requestPermissions: c,
                    onError: l
                } = e, d = (0, r.w)(), u = n.useMemo(() => i ?? d ?? new a.Room, [i, d]), h = s(n.useMemo(() => (0, r.x)(t, l, c), [t, c, l]), []), [p, m] = n.useState((null == u ? void 0 : u.getActiveDevice(t)) ?? "default"), {
                    className: f,
                    activeDeviceObservable: g,
                    setActiveMediaDevice: v
                } = n.useMemo(() => (0, r.y)(t, u), [t, u, o]);
                return n.useEffect(() => {
                    let e = g.subscribe(e => {
                        e && (r.l.info("setCurrentDeviceId", e), m(e))
                    });
                    return () => {
                        null == e || e.unsubscribe()
                    }
                }, [g]), {
                    devices: h,
                    className: f,
                    activeDeviceId: p,
                    setActiveMediaDevice: v
                }
            }

            function h() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, r.B)();
                e.participant && (t = e.participant);
                let {
                    identity: i,
                    name: a,
                    metadata: o
                } = s(n.useMemo(() => (0, r.C)(t), [t]), {
                    name: null == t ? void 0 : t.name,
                    identity: null == t ? void 0 : t.identity,
                    metadata: null == t ? void 0 : t.metadata
                });
                return {
                    identity: i,
                    name: a,
                    metadata: o
                }
            }

            function p() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, r.u)(e.room),
                    [i, a] = n.useState([]);
                return n.useEffect(() => {
                    let i = (0, r.E)(t, {
                        additionalRoomEvents: e.updateOnlyOn
                    }).subscribe(a);
                    return () => i.unsubscribe()
                }, [t, JSON.stringify(e.updateOnlyOn)]), i
            }

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = p(e),
                    {
                        localParticipant: i
                    } = d(e);
                return n.useMemo(() => [i, ...t], [i, t])
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, r.f)(),
                    [a] = n.useState(t.updateOnlyOn),
                    s = n.useMemo(() => "string" == typeof e ? (0, r.H)(i, e, {
                        additionalEvents: a
                    }) : (0, r.I)(i, e, {
                        additionalEvents: a
                    }), [i, JSON.stringify(e), a]),
                    [o, c] = n.useState({
                        p: void 0
                    });
                return n.useEffect(() => {
                    let e = s.subscribe(e => c({
                        p: e
                    }));
                    return () => e.unsubscribe()
                }, [s]), o.p
            }

            function g(e) {
                let t, [i, a] = n.useState((0, r.M)(e)),
                    o = (t = (0, r.f)(), s(n.useMemo(() => (0, r.K)(t), [t]), t.activeSpeakers));
                return n.useEffect(() => {
                    a((0, r.M)(e))
                }, [o, e]), i
            }

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.Track.Source.Camera, a.Track.Source.Microphone, a.Track.Source.ScreenShare, a.Track.Source.ScreenShareAudio, a.Track.Source.Unknown],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, r.u)(t.room),
                    [s, o] = n.useState([]),
                    [c, l] = n.useState([]),
                    d = n.useMemo(() => e.map(e => (0, r.U)(e) ? e.source : e), [JSON.stringify(e)]);
                return n.useEffect(() => {
                    let e = (0, r.V)(i, d, {
                        additionalRoomEvents: t.updateOnlyOn,
                        onlySubscribed: t.onlySubscribed
                    }).subscribe(e => {
                        let {
                            trackReferences: t,
                            participants: i
                        } = e;
                        r.l.debug("setting track bundles", t, i), o(t), l(i)
                    });
                    return () => e.unsubscribe()
                }, [i, JSON.stringify(t.onlySubscribed), JSON.stringify(t.updateOnlyOn), JSON.stringify(e)]), n.useMemo(() => {
                    if (!(0, r.W)(e)) return s;
                    {
                        let t = function(e, t) {
                                let i = new Map;
                                if ((0, r.W)(e)) {
                                    let n = e.filter(e => e.withPlaceholder).map(e => e.source);
                                    t.forEach(e => {
                                        let t = e.getTrackPublications().map(e => {
                                                var t;
                                                return null == (t = e.track) ? void 0 : t.source
                                            }).filter(e => void 0 !== e),
                                            r = Array.from(function(e, t) {
                                                let i = new Set(e);
                                                for (let e of t) i.delete(e);
                                                return i
                                            }(new Set(n), new Set(t)));
                                        r.length > 0 && i.set(e.identity, r)
                                    })
                                }
                                return i
                            }(e, c),
                            i = Array.from(s);
                        return c.forEach(e => {
                            t.has(e.identity) && (t.get(e.identity) ?? []).forEach(t => {
                                s.find(i => {
                                    let {
                                        participant: n,
                                        publication: r
                                    } = i;
                                    return e.identity === n.identity && r.source === t
                                }) || (r.l.debug(`Add ${t} placeholder for participant ${e.identity}.`), i.push({
                                    participant: e,
                                    source: t
                                }))
                            })
                        }), i
                    }
                }, [s, c, e])
            }

            function b(e) {
                let t, i = (0, r.u)(e),
                    a = (t = (0, r.u)(i), s(n.useMemo(() => (0, r.e)(t), [t]), t.state));
                return s(n.useMemo(() => (0, r.a8)(i), [i, a]), i.isRecording)
            }
        },
        14443: function(e, t, i) {
            "use strict";
            let n, r, a, s, o, c;
            i.r(t), i.d(t, {
                AudioPresets: () => ep,
                BackupCodecPolicy: () => eh,
                BaseKeyProvider: () => r_,
                CheckStatus: () => eE,
                Checker: () => of,
                ConnectionCheck: () => ow,
                ConnectionError: () => rL,
                ConnectionErrorReason: () => er,
                ConnectionQuality: () => eC,
                ConnectionState: () => ew,
                CriticalTimers: () => rZ,
                CryptorError: () => rH,
                CryptorErrorReason: () => es,
                CryptorEvent: () => en,
                DataPacket_Kind: () => t9,
                DefaultReconnectPolicy: () => nk,
                DeviceUnsupportedError: () => rU,
                DisconnectReason: () => tK,
                EncryptionEvent: () => ei,
                EngineEvent: () => el,
                ExternalE2EEKeyProvider: () => rA,
                KeyHandlerEvent: () => et,
                KeyProviderEvent: () => ee,
                LivekitError: () => rN,
                LocalAudioTrack: () => s_,
                LocalParticipant: () => od,
                LocalTrack: () => sM,
                LocalTrackPublication: () => or,
                LocalTrackRecorder: () => sD,
                LocalVideoTrack: () => sH,
                LogLevel: () => Q,
                LoggerNames: () => X,
                MediaDeviceFailure: () => ea,
                Mutex: () => eO,
                NegotiationError: () => rV,
                Participant: () => ol,
                ParticipantEvent: () => ec,
                ParticipantKind: () => tZ,
                PublishDataError: () => rq,
                PublishTrackError: () => rW,
                RemoteAudioTrack: () => s8,
                RemoteParticipant: () => oh,
                RemoteTrack: () => s6,
                RemoteTrackPublication: () => ou,
                RemoteVideoTrack: () => s7,
                Room: () => op,
                RoomEvent: () => eo,
                RpcError: () => sE,
                ScreenSharePresets: () => ae,
                SignalRequestError: () => rK,
                SubscriptionError: () => tG,
                Track: () => r1,
                TrackEvent: () => ed,
                TrackInvalidError: () => rj,
                TrackPublication: () => on,
                TrackType: () => tF,
                UnexpectedConnectionState: () => rB,
                UnsupportedServer: () => rF,
                VideoPreset: () => r4,
                VideoPresets: () => r8,
                VideoPresets43: () => r7,
                VideoQuality: () => eu,
                attachToElement: () => r2,
                attributes: () => om,
                compareVersions: () => aC,
                createAudioAnalyser: () => aA,
                createE2EEKey: () => rO,
                createKeyMaterialFromBuffer: () => rE,
                createKeyMaterialFromString: () => rw,
                createLocalAudioTrack: () => oo,
                createLocalScreenTracks: () => oc,
                createLocalTracks: () => oa,
                createLocalVideoTrack: () => os,
                deriveKeys: () => rR,
                detachTrack: () => r3,
                facingModeFromDeviceLabel: () => oO,
                facingModeFromLocalTrack: () => oE,
                getBrowser: () => rz,
                getEmptyAudioStreamTrack: () => aM,
                getEmptyVideoStreamTrack: () => ax,
                getLogger: () => nf,
                importKey: () => rC,
                isAudioTrack: () => aV,
                isBackupCodec: () => r6,
                isBrowserSupported: () => au,
                isE2EESupported: () => ry,
                isInsertableStreamSupported: () => rT,
                isLocalParticipant: () => az,
                isLocalTrack: () => aB,
                isRemoteParticipant: () => aJ,
                isRemoteTrack: () => aH,
                isScriptTransformSupported: () => rk,
                isVideoFrame: () => rS,
                isVideoTrack: () => aq,
                needsRbspUnescaping: () => rx,
                parseRbsp: () => rD,
                protocolVersion: () => r$,
                ratchet: () => rI,
                setLogExtension: () => nv,
                setLogLevel: () => ng,
                supportsAV1: () => ao,
                supportsAdaptiveStream: () => aa,
                supportsDynacast: () => as,
                supportsVP9: () => ac,
                version: () => rX,
                videoCodecs: () => r9,
                writeRbsp: () => rM
            });
            var l, d, u, h, p, m, f, g, v, b, y, k, T, S, C, w, E, P, R, O, I, x, D, M, _, A, N, L, U, j, F, B, V, q, W, K, H, G, z, J, Y, Q, X, $, Z, ee, et, ei, en, er, ea, es, eo, ec, el, ed, eu, eh, ep, em, ef, eg, ev, eb, ey, ek, eT, eS, eC, ew, eE, eP = Object.defineProperty,
                eR = (e, t, i) => {
                    let n;
                    return (n = "symbol" != typeof t ? t + "" : t) in e ? eP(e, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i
                    }) : e[n] = i
                };
            class eO {
                isLocked() {
                    return this._locks > 0
                }
                lock() {
                    let e;
                    this._locks += 1;
                    let t = new Promise(t => e = () => {
                            this._locks -= 1, t()
                        }),
                        i = this._locking.then(() => e);
                    return this._locking = this._locking.then(() => t), i
                }
                constructor() {
                    eR(this, "_locking"), eR(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0
                }
            }

            function eI(e, t) {
                if (!e) throw Error(t)
            }

            function ex(e) {
                if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
                if (!Number.isInteger(e) || e > 0x7fffffff || e < -0x80000000) throw Error("invalid int 32: " + e)
            }

            function eD(e) {
                if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
                if (!Number.isInteger(e) || e > 0xffffffff || e < 0) throw Error("invalid uint 32: " + e)
            }

            function eM(e) {
                if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
                if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw Error("invalid float 32: " + e)
            }
            let e_ = Symbol("@bufbuild/protobuf/enum-type");

            function eA(e, t, i, n) {
                e[e_] = eN(t, i.map(t => ({
                    no: t.no,
                    name: t.name,
                    localName: e[t.no]
                })))
            }

            function eN(e, t, i) {
                let n = Object.create(null),
                    r = Object.create(null),
                    a = [];
                for (let e of t) {
                    let t = eL(e);
                    a.push(t), n[e.name] = t, r[e.no] = t
                }
                return {
                    typeName: e,
                    values: a,
                    findName: e => n[e],
                    findNumber: e => r[e]
                }
            }

            function eL(e) {
                return "localName" in e ? e : Object.assign(Object.assign({}, e), {
                    localName: e.name
                })
            }
            class eU {
                equals(e) {
                    return this.getType().runtime.util.equals(this.getType(), this, e)
                }
                clone() {
                    return this.getType().runtime.util.clone(this)
                }
                fromBinary(e, t) {
                    let i = this.getType().runtime.bin,
                        n = i.makeReadOptions(t);
                    return i.readMessage(this, n.readerFactory(e), e.byteLength, n), this
                }
                fromJson(e, t) {
                    let i = this.getType(),
                        n = i.runtime.json,
                        r = n.makeReadOptions(t);
                    return n.readMessage(i, e, r, this), this
                }
                fromJsonString(e, t) {
                    let i;
                    try {
                        i = JSON.parse(e)
                    } catch (e) {
                        throw Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(e instanceof Error ? e.message : String(e)))
                    }
                    return this.fromJson(i, t)
                }
                toBinary(e) {
                    let t = this.getType().runtime.bin,
                        i = t.makeWriteOptions(e),
                        n = i.writerFactory();
                    return t.writeMessage(this, n, i), n.finish()
                }
                toJson(e) {
                    let t = this.getType().runtime.json,
                        i = t.makeWriteOptions(e);
                    return t.writeMessage(this, i)
                }
                toJsonString(e) {
                    var t;
                    return JSON.stringify(this.toJson(e), null, null != (t = null == e ? void 0 : e.prettySpaces) ? t : 0)
                }
                toJSON() {
                    return this.toJson({
                        emitDefaultValues: !0
                    })
                }
                getType() {
                    return Object.getPrototypeOf(this).constructor
                }
            }

            function ej() {
                let e = 0,
                    t = 0;
                for (let i = 0; i < 28; i += 7) {
                    let n = this.buf[this.pos++];
                    if (e |= (127 & n) << i, (128 & n) == 0) return this.assertBounds(), [e, t]
                }
                let i = this.buf[this.pos++];
                if (e |= (15 & i) << 28, t = (112 & i) >> 4, (128 & i) == 0) return this.assertBounds(), [e, t];
                for (let i = 3; i <= 31; i += 7) {
                    let n = this.buf[this.pos++];
                    if (t |= (127 & n) << i, (128 & n) == 0) return this.assertBounds(), [e, t]
                }
                throw Error("invalid varint")
            }

            function eF(e, t, i) {
                for (let n = 0; n < 28; n += 7) {
                    let r = e >>> n,
                        a = r >>> 7 != 0 || 0 != t,
                        s = (a ? 128 | r : r) & 255;
                    if (i.push(s), !a) return
                }
                let n = e >>> 28 & 15 | (7 & t) << 4,
                    r = t >> 3 != 0;
                if (i.push((r ? 128 | n : n) & 255), r) {
                    for (let e = 3; e < 31; e += 7) {
                        let n = t >>> e,
                            r = n >>> 7 != 0,
                            a = (r ? 128 | n : n) & 255;
                        if (i.push(a), !r) return
                    }
                    i.push(t >>> 31 & 1)
                }
            }

            function eB(e) {
                let t = "-" === e[0];
                t && (e = e.slice(1));
                let i = 0,
                    n = 0;

                function r(t, r) {
                    let a = Number(e.slice(t, r));
                    n *= 1e6, (i = 1e6 * i + a) >= 0x100000000 && (n += i / 0x100000000 | 0, i %= 0x100000000)
                }
                return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), t ? eW(i, n) : eq(i, n)
            }

            function eV(e, t) {
                if ({
                        lo: e,
                        hi: t
                    } = {
                        lo: e >>> 0,
                        hi: t >>> 0
                    }, t <= 2097151) return String(0x100000000 * t + e);
                let i = 0xffffff & e,
                    n = (e >>> 24 | t << 8) & 0xffffff,
                    r = t >> 16 & 65535,
                    a = i + 6777216 * n + 6710656 * r,
                    s = n + 8147497 * r,
                    o = 2 * r;
                return a >= 1e7 && (s += Math.floor(a / 1e7), a %= 1e7), s >= 1e7 && (o += Math.floor(s / 1e7), s %= 1e7), o.toString() + eK(s) + eK(a)
            }

            function eq(e, t) {
                return {
                    lo: 0 | e,
                    hi: 0 | t
                }
            }

            function eW(e, t) {
                return t = ~t, e ? e = ~e + 1 : t += 1, eq(e, t)
            }
            let eK = e => {
                let t = String(e);
                return "0000000".slice(t.length) + t
            };

            function eH(e, t) {
                if (e >= 0) {
                    for (; e > 127;) t.push(127 & e | 128), e >>>= 7;
                    t.push(e)
                } else {
                    for (let i = 0; i < 9; i++) t.push(127 & e | 128), e >>= 7;
                    t.push(1)
                }
            }

            function eG() {
                let e = this.buf[this.pos++],
                    t = 127 & e;
                if ((128 & e) == 0 || (t |= (127 & (e = this.buf[this.pos++])) << 7, (128 & e) == 0) || (t |= (127 & (e = this.buf[this.pos++])) << 14, (128 & e) == 0) || (t |= (127 & (e = this.buf[this.pos++])) << 21, (128 & e) == 0)) return this.assertBounds(), t;
                t |= (15 & (e = this.buf[this.pos++])) << 28;
                for (let t = 5;
                    (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
                if ((128 & e) != 0) throw Error("invalid varint");
                return this.assertBounds(), t >>> 0
            }
            let ez = function() {
                let e = new DataView(new ArrayBuffer(8));
                if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
                    let t = BigInt("-9223372036854775808"),
                        i = BigInt("9223372036854775807"),
                        n = BigInt("0"),
                        r = BigInt("18446744073709551615");
                    return {
                        zero: BigInt(0),
                        supported: !0,
                        parse(e) {
                            let n = "bigint" == typeof e ? e : BigInt(e);
                            if (n > i || n < t) throw Error("int64 invalid: ".concat(e));
                            return n
                        },
                        uParse(e) {
                            let t = "bigint" == typeof e ? e : BigInt(e);
                            if (t > r || t < n) throw Error("uint64 invalid: ".concat(e));
                            return t
                        },
                        enc(t) {
                            return e.setBigInt64(0, this.parse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        uEnc(t) {
                            return e.setBigInt64(0, this.uParse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        dec: (t, i) => (e.setInt32(0, t, !0), e.setInt32(4, i, !0), e.getBigInt64(0, !0)),
                        uDec: (t, i) => (e.setInt32(0, t, !0), e.setInt32(4, i, !0), e.getBigUint64(0, !0))
                    }
                }
                let t = e => eI(/^-?[0-9]+$/.test(e), "int64 invalid: ".concat(e)),
                    i = e => eI(/^[0-9]+$/.test(e), "uint64 invalid: ".concat(e));
                return {
                    zero: "0",
                    supported: !1,
                    parse: e => ("string" != typeof e && (e = e.toString()), t(e), e),
                    uParse: e => ("string" != typeof e && (e = e.toString()), i(e), e),
                    enc: e => ("string" != typeof e && (e = e.toString()), t(e), eB(e)),
                    uEnc: e => ("string" != typeof e && (e = e.toString()), i(e), eB(e)),
                    dec: (e, t) => {
                        let i, n, r;
                        return (n = 0x80000000 & (i = eq(e, t)).hi) && (i = eW(i.lo, i.hi)), r = eV(i.lo, i.hi), n ? "-" + r : r
                    },
                    uDec: (e, t) => eV(e, t)
                }
            }();

            function eJ(e, t, i) {
                if (t === i) return !0;
                if (e == G.BYTES) {
                    if (!(t instanceof Uint8Array) || !(i instanceof Uint8Array) || t.length !== i.length) return !1;
                    for (let e = 0; e < t.length; e++)
                        if (t[e] !== i[e]) return !1;
                    return !0
                }
                switch (e) {
                    case G.UINT64:
                    case G.FIXED64:
                    case G.INT64:
                    case G.SFIXED64:
                    case G.SINT64:
                        return t == i
                }
                return !1
            }

            function eY(e, t) {
                switch (e) {
                    case G.BOOL:
                        return !1;
                    case G.UINT64:
                    case G.FIXED64:
                    case G.INT64:
                    case G.SFIXED64:
                    case G.SINT64:
                        return 0 == t ? ez.zero : "0";
                    case G.DOUBLE:
                    case G.FLOAT:
                        return 0;
                    case G.BYTES:
                        return new Uint8Array(0);
                    case G.STRING:
                        return "";
                    default:
                        return 0
                }
            }

            function eQ(e, t) {
                switch (e) {
                    case G.BOOL:
                        return !1 === t;
                    case G.STRING:
                        return "" === t;
                    case G.BYTES:
                        return t instanceof Uint8Array && !t.byteLength;
                    default:
                        return 0 == t
                }
            }(l = G || (G = {}))[l.DOUBLE = 1] = "DOUBLE", l[l.FLOAT = 2] = "FLOAT", l[l.INT64 = 3] = "INT64", l[l.UINT64 = 4] = "UINT64", l[l.INT32 = 5] = "INT32", l[l.FIXED64 = 6] = "FIXED64", l[l.FIXED32 = 7] = "FIXED32", l[l.BOOL = 8] = "BOOL", l[l.STRING = 9] = "STRING", l[l.BYTES = 12] = "BYTES", l[l.UINT32 = 13] = "UINT32", l[l.SFIXED32 = 15] = "SFIXED32", l[l.SFIXED64 = 16] = "SFIXED64", l[l.SINT32 = 17] = "SINT32", l[l.SINT64 = 18] = "SINT64", (d = z || (z = {}))[d.BIGINT = 0] = "BIGINT", d[d.STRING = 1] = "STRING", (u = J || (J = {}))[u.Varint = 0] = "Varint", u[u.Bit64 = 1] = "Bit64", u[u.LengthDelimited = 2] = "LengthDelimited", u[u.StartGroup = 3] = "StartGroup", u[u.EndGroup = 4] = "EndGroup", u[u.Bit32 = 5] = "Bit32";
            class eX {
                finish() {
                    this.chunks.push(new Uint8Array(this.buf));
                    let e = 0;
                    for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
                    let t = new Uint8Array(e),
                        i = 0;
                    for (let e = 0; e < this.chunks.length; e++) t.set(this.chunks[e], i), i += this.chunks[e].length;
                    return this.chunks = [], t
                }
                fork() {
                    return this.stack.push({
                        chunks: this.chunks,
                        buf: this.buf
                    }), this.chunks = [], this.buf = [], this
                }
                join() {
                    let e = this.finish(),
                        t = this.stack.pop();
                    if (!t) throw Error("invalid state, fork stack empty");
                    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
                }
                tag(e, t) {
                    return this.uint32((e << 3 | t) >>> 0)
                }
                raw(e) {
                    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
                }
                uint32(e) {
                    for (eD(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
                    return this.buf.push(e), this
                }
                int32(e) {
                    return ex(e), eH(e, this.buf), this
                }
                bool(e) {
                    return this.buf.push(+!!e), this
                }
                bytes(e) {
                    return this.uint32(e.byteLength), this.raw(e)
                }
                string(e) {
                    let t = this.textEncoder.encode(e);
                    return this.uint32(t.byteLength), this.raw(t)
                }
                float(e) {
                    eM(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
                }
                double(e) {
                    let t = new Uint8Array(8);
                    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
                }
                fixed32(e) {
                    eD(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
                }
                sfixed32(e) {
                    ex(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
                }
                sint32(e) {
                    return ex(e), eH(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this
                }
                sfixed64(e) {
                    let t = new Uint8Array(8),
                        i = new DataView(t.buffer),
                        n = ez.enc(e);
                    return i.setInt32(0, n.lo, !0), i.setInt32(4, n.hi, !0), this.raw(t)
                }
                fixed64(e) {
                    let t = new Uint8Array(8),
                        i = new DataView(t.buffer),
                        n = ez.uEnc(e);
                    return i.setInt32(0, n.lo, !0), i.setInt32(4, n.hi, !0), this.raw(t)
                }
                int64(e) {
                    let t = ez.enc(e);
                    return eF(t.lo, t.hi, this.buf), this
                }
                sint64(e) {
                    let t = ez.enc(e),
                        i = t.hi >> 31;
                    return eF(t.lo << 1 ^ i, (t.hi << 1 | t.lo >>> 31) ^ i, this.buf), this
                }
                uint64(e) {
                    let t = ez.uEnc(e);
                    return eF(t.lo, t.hi, this.buf), this
                }
                constructor(e) {
                    this.stack = [], this.textEncoder = null != e ? e : new TextEncoder, this.chunks = [], this.buf = []
                }
            }
            class e$ {
                tag() {
                    let e = this.uint32(),
                        t = e >>> 3,
                        i = 7 & e;
                    if (t <= 0 || i < 0 || i > 5) throw Error("illegal tag: field no " + t + " wire type " + i);
                    return [t, i]
                }
                skip(e, t) {
                    let i = this.pos;
                    switch (e) {
                        case J.Varint:
                            for (; 128 & this.buf[this.pos++];);
                            break;
                        case J.Bit64:
                            this.pos += 4;
                        case J.Bit32:
                            this.pos += 4;
                            break;
                        case J.LengthDelimited:
                            let n = this.uint32();
                            this.pos += n;
                            break;
                        case J.StartGroup:
                            for (;;) {
                                let [e, i] = this.tag();
                                if (i === J.EndGroup) {
                                    if (void 0 !== t && e !== t) throw Error("invalid end group tag");
                                    break
                                }
                                this.skip(i, e)
                            }
                            break;
                        default:
                            throw Error("cant skip wire type " + e)
                    }
                    return this.assertBounds(), this.buf.subarray(i, this.pos)
                }
                assertBounds() {
                    if (this.pos > this.len) throw RangeError("premature EOF")
                }
                int32() {
                    return 0 | this.uint32()
                }
                sint32() {
                    let e = this.uint32();
                    return e >>> 1 ^ -(1 & e)
                }
                int64() {
                    return ez.dec(...this.varint64())
                }
                uint64() {
                    return ez.uDec(...this.varint64())
                }
                sint64() {
                    let [e, t] = this.varint64(), i = -(1 & e);
                    return e = (e >>> 1 | (1 & t) << 31) ^ i, t = t >>> 1 ^ i, ez.dec(e, t)
                }
                bool() {
                    let [e, t] = this.varint64();
                    return 0 !== e || 0 !== t
                }
                fixed32() {
                    return this.view.getUint32((this.pos += 4) - 4, !0)
                }
                sfixed32() {
                    return this.view.getInt32((this.pos += 4) - 4, !0)
                }
                fixed64() {
                    return ez.uDec(this.sfixed32(), this.sfixed32())
                }
                sfixed64() {
                    return ez.dec(this.sfixed32(), this.sfixed32())
                }
                float() {
                    return this.view.getFloat32((this.pos += 4) - 4, !0)
                }
                double() {
                    return this.view.getFloat64((this.pos += 8) - 8, !0)
                }
                bytes() {
                    let e = this.uint32(),
                        t = this.pos;
                    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
                }
                string() {
                    return this.textDecoder.decode(this.bytes())
                }
                constructor(e, t) {
                    this.varint64 = ej, this.uint32 = eG, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = null != t ? t : new TextDecoder
                }
            }

            function eZ(e) {
                let t = e.field.localName,
                    i = Object.create(null);
                return i[t] = function(e) {
                    let t = e.field;
                    if (t.repeated) return [];
                    if (void 0 !== t.default) return t.default;
                    switch (t.kind) {
                        case "enum":
                            return t.T.values[0].no;
                        case "scalar":
                            return eY(t.T, t.L);
                        case "message":
                            let i = t.T,
                                n = new i;
                            return i.fieldWrapper ? i.fieldWrapper.unwrapField(n) : n;
                        case "map":
                            throw "map fields are not allowed to be extensions"
                    }
                }(e), [i, () => i[t]]
            }
            let e0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                e1 = [];
            for (let e = 0; e < e0.length; e++) e1[e0[e].charCodeAt(0)] = e;
            e1[45] = e0.indexOf("+"), e1[95] = e0.indexOf("/");
            let e2 = {
                dec(e) {
                    let t = 3 * e.length / 4;
                    "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
                    let i = new Uint8Array(t),
                        n = 0,
                        r = 0,
                        a, s = 0;
                    for (let t = 0; t < e.length; t++) {
                        if (void 0 === (a = e1[e.charCodeAt(t)])) switch (e[t]) {
                            case "=":
                                r = 0;
                            case "\n":
                            case "\r":
                            case "	":
                            case " ":
                                continue;
                            default:
                                throw Error("invalid base64 string.")
                        }
                        switch (r) {
                            case 0:
                                s = a, r = 1;
                                break;
                            case 1:
                                i[n++] = s << 2 | (48 & a) >> 4, s = a, r = 2;
                                break;
                            case 2:
                                i[n++] = (15 & s) << 4 | (60 & a) >> 2, s = a, r = 3;
                                break;
                            case 3:
                                i[n++] = (3 & s) << 6 | a, r = 0
                        }
                    }
                    if (1 == r) throw Error("invalid base64 string.");
                    return i.subarray(0, n)
                },
                enc(e) {
                    let t = "",
                        i = 0,
                        n, r = 0;
                    for (let a = 0; a < e.length; a++) switch (n = e[a], i) {
                        case 0:
                            t += e0[n >> 2], r = (3 & n) << 4, i = 1;
                            break;
                        case 1:
                            t += e0[r | n >> 4], r = (15 & n) << 2, i = 2;
                            break;
                        case 2:
                            t += e0[r | n >> 6], t += e0[63 & n], i = 0
                    }
                    return i && (t += e0[r], t += "=", 1 == i && (t += "=")), t
                }
            };

            function e3(e, t) {
                let i = e.getType();
                return t.extendee.typeName === i.typeName && !!i.runtime.bin.listUnknownFields(e).find(e => e.no == t.field.no)
            }

            function e4(e, t) {
                eI(e.extendee.typeName == t.getType().typeName, "extension ".concat(e.typeName, " can only be applied to message ").concat(e.extendee.typeName))
            }

            function e5(e, t) {
                let i = e.localName;
                if (e.repeated) return t[i].length > 0;
                if (e.oneof) return t[e.oneof.localName].case === i;
                switch (e.kind) {
                    case "enum":
                    case "scalar":
                        if (e.opt || e.req) return void 0 !== t[i];
                        if ("enum" == e.kind) return t[i] !== e.T.values[0].no;
                        return !eQ(e.T, t[i]);
                    case "message":
                        return void 0 !== t[i];
                    case "map":
                        return Object.keys(t[i]).length > 0
                }
            }

            function e9(e, t) {
                let i = e.localName,
                    n = !e.opt && !e.req;
                if (e.repeated) t[i] = [];
                else if (e.oneof) t[e.oneof.localName] = {
                    case: void 0
                };
                else switch (e.kind) {
                    case "map":
                        t[i] = {};
                        break;
                    case "enum":
                        t[i] = n ? e.T.values[0].no : void 0;
                        break;
                    case "scalar":
                        t[i] = n ? eY(e.T, e.L) : void 0;
                        break;
                    case "message":
                        t[i] = void 0
                }
            }

            function e6(e, t) {
                if (null === e || "object" != typeof e || !Object.getOwnPropertyNames(eU.prototype).every(t => t in e && "function" == typeof e[t])) return !1;
                let i = e.getType();
                return null !== i && "function" == typeof i && "typeName" in i && "string" == typeof i.typeName && (void 0 === t || i.typeName == t.typeName)
            }

            function e8(e, t) {
                return e6(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t)
            }
            G.DOUBLE, G.FLOAT, G.INT64, G.UINT64, G.INT32, G.UINT32, G.BOOL, G.STRING, G.BYTES;
            let e7 = {
                    ignoreUnknownFields: !1
                },
                te = {
                    emitDefaultValues: !1,
                    enumAsInteger: !1,
                    useProtoFieldName: !1,
                    prettySpaces: 0
                },
                tt = Symbol(),
                ti = Symbol();

            function tn(e) {
                if (null === e) return "null";
                switch (typeof e) {
                    case "object":
                        return Array.isArray(e) ? "array" : "object";
                    case "string":
                        return e.length > 100 ? "string" : '"'.concat(e.split('"').join('\\"'), '"');
                    default:
                        return String(e)
                }
            }

            function tr(e, t, i, n, r) {
                let a = i.localName;
                if (i.repeated) {
                    if (eI("map" != i.kind), null === t) return;
                    if (!Array.isArray(t)) throw Error("cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(t)));
                    let s = e[a];
                    for (let e of t) {
                        if (null === e) throw Error("cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(e)));
                        switch (i.kind) {
                            case "message":
                                s.push(i.T.fromJson(e, n));
                                break;
                            case "enum":
                                let t = ts(i.T, e, n.ignoreUnknownFields, !0);
                                t !== ti && s.push(t);
                                break;
                            case "scalar":
                                try {
                                    s.push(ta(i.T, e, i.L, !0))
                                } catch (n) {
                                    let t = "cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(e));
                                    throw n instanceof Error && n.message.length > 0 && (t += ": ".concat(n.message)), Error(t)
                                }
                        }
                    }
                } else if ("map" == i.kind) {
                    if (null === t) return;
                    if ("object" != typeof t || Array.isArray(t)) throw Error("cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(t)));
                    let s = e[a];
                    for (let [e, a] of Object.entries(t)) {
                        let o;
                        if (null === a) throw Error("cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: map value null"));
                        try {
                            o = function(e, t) {
                                if (e === G.BOOL) switch (t) {
                                    case "true":
                                        t = !0;
                                        break;
                                    case "false":
                                        t = !1
                                }
                                return ta(e, t, z.BIGINT, !0).toString()
                            }(i.K, e)
                        } catch (n) {
                            let e = "cannot decode map key for field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(t));
                            throw n instanceof Error && n.message.length > 0 && (e += ": ".concat(n.message)), Error(e)
                        }
                        switch (i.V.kind) {
                            case "message":
                                s[o] = i.V.T.fromJson(a, n);
                                break;
                            case "enum":
                                let c = ts(i.V.T, a, n.ignoreUnknownFields, !0);
                                c !== ti && (s[o] = c);
                                break;
                            case "scalar":
                                try {
                                    s[o] = ta(i.V.T, a, z.BIGINT, !0)
                                } catch (n) {
                                    let e = "cannot decode map value for field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(t));
                                    throw n instanceof Error && n.message.length > 0 && (e += ": ".concat(n.message)), Error(e)
                                }
                        }
                    }
                } else switch (i.oneof && (e = e[i.oneof.localName] = {
                        case: a
                    }, a = "value"), i.kind) {
                    case "message":
                        let s = i.T;
                        if (null === t && "google.protobuf.Value" != s.typeName) return;
                        let o = e[a];
                        e6(o) ? o.fromJson(t, n) : (e[a] = o = s.fromJson(t, n), s.fieldWrapper && !i.oneof && (e[a] = s.fieldWrapper.unwrapField(o)));
                        break;
                    case "enum":
                        let c = ts(i.T, t, n.ignoreUnknownFields, !1);
                        switch (c) {
                            case tt:
                                e9(i, e);
                                break;
                            case ti:
                                break;
                            default:
                                e[a] = c
                        }
                        break;
                    case "scalar":
                        try {
                            let n = ta(i.T, t, i.L, !1);
                            n === tt ? e9(i, e) : e[a] = n
                        } catch (n) {
                            let e = "cannot decode field ".concat(r.typeName, ".").concat(i.name, " from JSON: ").concat(tn(t));
                            throw n instanceof Error && n.message.length > 0 && (e += ": ".concat(n.message)), Error(e)
                        }
                }
            }

            function ta(e, t, i, n) {
                if (null === t) return n ? eY(e, i) : tt;
                switch (e) {
                    case G.DOUBLE:
                    case G.FLOAT:
                        if ("NaN" === t) return NaN;
                        if ("Infinity" === t) return 1 / 0;
                        if ("-Infinity" === t) return -1 / 0;
                        if ("" === t || "string" == typeof t && t.trim().length !== t.length || "string" != typeof t && "number" != typeof t) break;
                        let r = Number(t);
                        if (Number.isNaN(r) || !Number.isFinite(r)) break;
                        return e == G.FLOAT && eM(r), r;
                    case G.INT32:
                    case G.FIXED32:
                    case G.SFIXED32:
                    case G.SINT32:
                    case G.UINT32:
                        let a;
                        if ("number" == typeof t ? a = t : "string" == typeof t && t.length > 0 && t.trim().length === t.length && (a = Number(t)), void 0 === a) break;
                        return e == G.UINT32 || e == G.FIXED32 ? eD(a) : ex(a), a;
                    case G.INT64:
                    case G.SFIXED64:
                    case G.SINT64:
                        if ("number" != typeof t && "string" != typeof t) break;
                        let s = ez.parse(t);
                        return i ? s.toString() : s;
                    case G.FIXED64:
                    case G.UINT64:
                        if ("number" != typeof t && "string" != typeof t) break;
                        let o = ez.uParse(t);
                        return i ? o.toString() : o;
                    case G.BOOL:
                        if ("boolean" != typeof t) break;
                        return t;
                    case G.STRING:
                        if ("string" != typeof t) break;
                        try {
                            encodeURIComponent(t)
                        } catch (e) {
                            throw Error("invalid UTF8")
                        }
                        return t;
                    case G.BYTES:
                        if ("" === t) return new Uint8Array(0);
                        if ("string" != typeof t) break;
                        return e2.dec(t)
                }
                throw Error()
            }

            function ts(e, t, i, n) {
                if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : n ? e.values[0].no : tt;
                switch (typeof t) {
                    case "number":
                        if (Number.isInteger(t)) return t;
                        break;
                    case "string":
                        let r = e.findName(t);
                        if (void 0 !== r) return r.no;
                        if (i) return ti
                }
                throw Error("cannot decode enum ".concat(e.typeName, " from JSON: ").concat(tn(t)))
            }

            function to(e, t, i) {
                if ("map" == e.kind) {
                    eI("object" == typeof t && null != t);
                    let n = {},
                        r = Object.entries(t);
                    switch (e.V.kind) {
                        case "scalar":
                            for (let [t, i] of r) n[t.toString()] = tl(e.V.T, i);
                            break;
                        case "message":
                            for (let [e, t] of r) n[e.toString()] = t.toJson(i);
                            break;
                        case "enum":
                            let a = e.V.T;
                            for (let [e, t] of r) n[e.toString()] = tc(a, t, i.enumAsInteger)
                    }
                    return i.emitDefaultValues || r.length > 0 ? n : void 0
                }
                if (e.repeated) {
                    eI(Array.isArray(t));
                    let n = [];
                    switch (e.kind) {
                        case "scalar":
                            for (let i = 0; i < t.length; i++) n.push(tl(e.T, t[i]));
                            break;
                        case "enum":
                            for (let r = 0; r < t.length; r++) n.push(tc(e.T, t[r], i.enumAsInteger));
                            break;
                        case "message":
                            for (let e = 0; e < t.length; e++) n.push(t[e].toJson(i))
                    }
                    return i.emitDefaultValues || n.length > 0 ? n : void 0
                }
                switch (e.kind) {
                    case "scalar":
                        return tl(e.T, t);
                    case "enum":
                        return tc(e.T, t, i.enumAsInteger);
                    case "message":
                        return e8(e.T, t).toJson(i)
                }
            }

            function tc(e, t, i) {
                var n;
                if (eI("number" == typeof t), "google.protobuf.NullValue" == e.typeName) return null;
                if (i) return t;
                let r = e.findNumber(t);
                return null != (n = null == r ? void 0 : r.name) ? n : t
            }

            function tl(e, t) {
                switch (e) {
                    case G.INT32:
                    case G.SFIXED32:
                    case G.SINT32:
                    case G.FIXED32:
                    case G.UINT32:
                        return eI("number" == typeof t), t;
                    case G.FLOAT:
                    case G.DOUBLE:
                        if (eI("number" == typeof t), Number.isNaN(t)) return "NaN";
                        if (t === 1 / 0) return "Infinity";
                        if (t === -1 / 0) return "-Infinity";
                        return t;
                    case G.STRING:
                        return eI("string" == typeof t), t;
                    case G.BOOL:
                        return eI("boolean" == typeof t), t;
                    case G.UINT64:
                    case G.FIXED64:
                    case G.INT64:
                    case G.SFIXED64:
                    case G.SINT64:
                        return eI("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString();
                    case G.BYTES:
                        return eI(t instanceof Uint8Array), e2.enc(t)
                }
            }
            let td = Symbol("@bufbuild/protobuf/unknown-fields"),
                tu = {
                    readUnknownFields: !0,
                    readerFactory: e => new e$(e)
                },
                th = {
                    writeUnknownFields: !0,
                    writerFactory: () => new eX
                };

            function tp(e, t, i, n, r) {
                let {
                    repeated: a,
                    localName: s
                } = i;
                switch (i.oneof && ((e = e[i.oneof.localName]).case != s && delete e.value, e.case = s, s = "value"), i.kind) {
                    case "scalar":
                    case "enum":
                        let o = "enum" == i.kind ? G.INT32 : i.T,
                            c = tg;
                        if ("scalar" == i.kind && i.L > 0 && (c = tf), a) {
                            let i = e[s];
                            if (n == J.LengthDelimited && o != G.STRING && o != G.BYTES) {
                                let e = t.uint32() + t.pos;
                                for (; t.pos < e;) i.push(c(t, o))
                            } else i.push(c(t, o))
                        } else e[s] = c(t, o);
                        break;
                    case "message":
                        let l = i.T;
                        a ? e[s].push(tm(t, new l, r, i)) : e6(e[s]) ? tm(t, e[s], r, i) : (e[s] = tm(t, new l, r, i), !l.fieldWrapper || i.oneof || i.repeated || (e[s] = l.fieldWrapper.unwrapField(e[s])));
                        break;
                    case "map":
                        let [d, u] = function(e, t, i) {
                            let n, r, a = t.uint32(),
                                s = t.pos + a;
                            for (; t.pos < s;) {
                                let [a] = t.tag();
                                switch (a) {
                                    case 1:
                                        n = tg(t, e.K);
                                        break;
                                    case 2:
                                        switch (e.V.kind) {
                                            case "scalar":
                                                r = tg(t, e.V.T);
                                                break;
                                            case "enum":
                                                r = t.int32();
                                                break;
                                            case "message":
                                                r = tm(t, new e.V.T, i, void 0)
                                        }
                                }
                            }
                            if (void 0 === n && (n = eY(e.K, z.BIGINT)), "string" != typeof n && "number" != typeof n && (n = n.toString()), void 0 === r) switch (e.V.kind) {
                                case "scalar":
                                    r = eY(e.V.T, z.BIGINT);
                                    break;
                                case "enum":
                                    r = e.V.T.values[0].no;
                                    break;
                                case "message":
                                    r = new e.V.T
                            }
                            return [n, r]
                        }(i, t, r);
                        e[s][d] = u
                }
            }

            function tm(e, t, i, n) {
                let r = t.getType().runtime.bin,
                    a = null == n ? void 0 : n.delimited;
                return r.readMessage(t, e, a ? n.no : e.uint32(), i, a), t
            }

            function tf(e, t) {
                let i = tg(e, t);
                return "bigint" == typeof i ? i.toString() : i
            }

            function tg(e, t) {
                switch (t) {
                    case G.STRING:
                        return e.string();
                    case G.BOOL:
                        return e.bool();
                    case G.DOUBLE:
                        return e.double();
                    case G.FLOAT:
                        return e.float();
                    case G.INT32:
                        return e.int32();
                    case G.INT64:
                        return e.int64();
                    case G.UINT64:
                        return e.uint64();
                    case G.FIXED64:
                        return e.fixed64();
                    case G.BYTES:
                        return e.bytes();
                    case G.FIXED32:
                        return e.fixed32();
                    case G.SFIXED32:
                        return e.sfixed32();
                    case G.SFIXED64:
                        return e.sfixed64();
                    case G.SINT64:
                        return e.sint64();
                    case G.UINT32:
                        return e.uint32();
                    case G.SINT32:
                        return e.sint32()
                }
            }

            function tv(e, t, i, n) {
                eI(void 0 !== t);
                let r = e.repeated;
                switch (e.kind) {
                    case "scalar":
                    case "enum":
                        let a = "enum" == e.kind ? G.INT32 : e.T;
                        if (r)
                            if (eI(Array.isArray(t)), e.packed) ! function(e, t, i, n) {
                                if (!n.length) return;
                                e.tag(i, J.LengthDelimited).fork();
                                let [, r] = tk(t);
                                for (let t = 0; t < n.length; t++) e[r](n[t]);
                                e.join()
                            }(i, a, e.no, t);
                            else
                                for (let n of t) ty(i, a, e.no, n);
                        else ty(i, a, e.no, t);
                        break;
                    case "message":
                        if (r)
                            for (let r of (eI(Array.isArray(t)), t)) tb(i, n, e, r);
                        else tb(i, n, e, t);
                        break;
                    case "map":
                        for (let [r, a] of(eI("object" == typeof t && null != t), Object.entries(t))) ! function(e, t, i, n, r) {
                            e.tag(i.no, J.LengthDelimited), e.fork();
                            let a = n;
                            switch (i.K) {
                                case G.INT32:
                                case G.FIXED32:
                                case G.UINT32:
                                case G.SFIXED32:
                                case G.SINT32:
                                    a = Number.parseInt(n);
                                    break;
                                case G.BOOL:
                                    eI("true" == n || "false" == n), a = "true" == n
                            }
                            switch (ty(e, i.K, 1, a), i.V.kind) {
                                case "scalar":
                                    ty(e, i.V.T, 2, r);
                                    break;
                                case "enum":
                                    ty(e, G.INT32, 2, r);
                                    break;
                                case "message":
                                    eI(void 0 !== r), e.tag(2, J.LengthDelimited).bytes(r.toBinary(t))
                            }
                            e.join()
                        }(i, n, e, r, a)
                }
            }

            function tb(e, t, i, n) {
                let r = e8(i.T, n);
                i.delimited ? e.tag(i.no, J.StartGroup).raw(r.toBinary(t)).tag(i.no, J.EndGroup) : e.tag(i.no, J.LengthDelimited).bytes(r.toBinary(t))
            }

            function ty(e, t, i, n) {
                eI(void 0 !== n);
                let [r, a] = tk(t);
                e.tag(i, r)[a](n)
            }

            function tk(e) {
                let t = J.Varint;
                switch (e) {
                    case G.BYTES:
                    case G.STRING:
                        t = J.LengthDelimited;
                        break;
                    case G.DOUBLE:
                    case G.FIXED64:
                    case G.SFIXED64:
                        t = J.Bit64;
                        break;
                    case G.FIXED32:
                    case G.SFIXED32:
                    case G.FLOAT:
                        t = J.Bit32
                }
                return [t, G[e].toLowerCase()]
            }

            function tT(e) {
                if (void 0 === e) return e;
                if (e6(e)) return e.clone();
                if (e instanceof Uint8Array) {
                    let t = new Uint8Array(e.byteLength);
                    return t.set(e), t
                }
                return e
            }

            function tS(e) {
                return e instanceof Uint8Array ? e : new Uint8Array(e)
            }
            class tC {
                findJsonName(e) {
                    if (!this.jsonNames) {
                        let e = {};
                        for (let t of this.list()) e[t.jsonName] = e[t.name] = t;
                        this.jsonNames = e
                    }
                    return this.jsonNames[e]
                }
                find(e) {
                    if (!this.numbers) {
                        let e = {};
                        for (let t of this.list()) e[t.no] = t;
                        this.numbers = e
                    }
                    return this.numbers[e]
                }
                list() {
                    return this.all || (this.all = this._normalizer(this._fields)), this.all
                }
                byNumber() {
                    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc
                }
                byMember() {
                    if (!this.members) {
                        let e;
                        this.members = [];
                        let t = this.members;
                        for (let i of this.list()) i.oneof ? i.oneof !== e && (e = i.oneof, t.push(e)) : t.push(i)
                    }
                    return this.members
                }
                constructor(e, t) {
                    this._fields = e, this._normalizer = t
                }
            }

            function tw(e, t) {
                let i = tP(e);
                return t ? i : tx(tI(i))
            }
            let tE = tP;

            function tP(e) {
                let t = !1,
                    i = [];
                for (let n = 0; n < e.length; n++) {
                    let r = e.charAt(n);
                    switch (r) {
                        case "_":
                            t = !0;
                            break;
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            i.push(r), t = !1;
                            break;
                        default:
                            t && (t = !1, r = r.toUpperCase()), i.push(r)
                    }
                }
                return i.join("")
            }
            let tR = new Set(["constructor", "toString", "toJSON", "valueOf"]),
                tO = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
                tI = e => {
                    if (tO.has(e)) return "".concat(e, "$");
                    return e
                },
                tx = e => {
                    if (tR.has(e)) return "".concat(e, "$");
                    return e
                };
            class tD {
                addField(e) {
                    eI(e.oneof === this, "field ".concat(e.name, " not one of ").concat(this.name)), this.fields.push(e)
                }
                findField(e) {
                    if (!this._lookup) {
                        this._lookup = Object.create(null);
                        for (let e = 0; e < this.fields.length; e++) this._lookup[this.fields[e].localName] = this.fields[e]
                    }
                    return this._lookup[e]
                }
                constructor(e) {
                    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = tw(e, !1)
                }
            }
            let tM = (h = e => new tC(e, e => (function(e, t) {
                var i, n, r, a, s, o;
                let c, l = [];
                for (let t of "function" == typeof e ? e() : e) {
                    if (t.localName = tw(t.name, void 0 !== t.oneof), t.jsonName = null != (i = t.jsonName) ? i : tE(t.name), t.repeated = null != (n = t.repeated) && n, "scalar" == t.kind && (t.L = null != (r = t.L) ? r : z.BIGINT), t.delimited = null != (a = t.delimited) && a, t.req = null != (s = t.req) && s, t.opt = null != (o = t.opt) && o, void 0 === t.packed && (t.packed = "enum" == t.kind || "scalar" == t.kind && t.T != G.BYTES && t.T != G.STRING), void 0 !== t.oneof) {
                        let e = "string" == typeof t.oneof ? t.oneof : t.oneof.name;
                        c && c.name == e || (c = new tD(e)), t.oneof = c, c.addField(t)
                    }
                    l.push(t)
                }
                return l
            })(e)), p = e => {
                for (let t of e.getType().fields.byMember()) {
                    if (t.opt) continue;
                    let i = t.localName;
                    if (t.repeated) {
                        e[i] = [];
                        continue
                    }
                    switch (t.kind) {
                        case "oneof":
                            e[i] = {
                                case: void 0
                            };
                            break;
                        case "enum":
                            e[i] = 0;
                            break;
                        case "map":
                            e[i] = {};
                            break;
                        case "scalar":
                            e[i] = eY(t.T, t.L)
                    }
                }
            }, {
                syntax: "proto3",
                json: {
                    makeReadOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, e7), e) : e7
                    },
                    makeWriteOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, te), e) : te
                    },
                    readMessage(e, t, i, n) {
                        if (null == t || Array.isArray(t) || "object" != typeof t) throw Error("cannot decode message ".concat(e.typeName, " from JSON: ").concat(tn(t)));
                        n = null != n ? n : new e;
                        let r = new Map,
                            a = i.typeRegistry;
                        for (let [s, o] of Object.entries(t)) {
                            let t = e.fields.findJsonName(s);
                            if (t) {
                                if (t.oneof) {
                                    if (null === o && "scalar" == t.kind) continue;
                                    let i = r.get(t.oneof);
                                    if (void 0 !== i) throw Error("cannot decode message ".concat(e.typeName, ' from JSON: multiple keys for oneof "').concat(t.oneof.name, '" present: "').concat(i, '", "').concat(s, '"'));
                                    r.set(t.oneof, s)
                                }
                                tr(n, o, t, i, e)
                            } else {
                                let t = !1;
                                if ((null == a ? void 0 : a.findExtension) && s.startsWith("[") && s.endsWith("]")) {
                                    let r = a.findExtension(s.substring(1, s.length - 1));
                                    if (r && r.extendee.typeName == e.typeName) {
                                        t = !0;
                                        let [e, a] = eZ(r);
                                        tr(e, o, r.field, i, r),
                                            function(e, t, i, n) {
                                                e4(t, e);
                                                let r = t.runtime.bin.makeReadOptions(n),
                                                    a = t.runtime.bin.makeWriteOptions(n);
                                                if (e3(e, t)) {
                                                    let i = e.getType().runtime.bin.listUnknownFields(e).filter(e => e.no != t.field.no);
                                                    for (let t of (e.getType().runtime.bin.discardUnknownFields(e), i)) e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data)
                                                }
                                                let s = a.writerFactory(),
                                                    o = t.field;
                                                o.opt || o.repeated || "enum" != o.kind && "scalar" != o.kind || (o = Object.assign(Object.assign({}, t.field), {
                                                    opt: !0
                                                })), t.runtime.bin.writeField(o, i, s, a);
                                                let c = r.readerFactory(s.finish());
                                                for (; c.pos < c.len;) {
                                                    let [t, i] = c.tag(), n = c.skip(i, t);
                                                    e.getType().runtime.bin.onUnknownField(e, t, i, n)
                                                }
                                            }(n, r, a(), i)
                                    }
                                }
                                if (!t && !i.ignoreUnknownFields) throw Error("cannot decode message ".concat(e.typeName, ' from JSON: key "').concat(s, '" is unknown'))
                            }
                        }
                        return n
                    },
                    writeMessage(e, t) {
                        let i, n = e.getType(),
                            r = {};
                        try {
                            for (i of n.fields.byNumber()) {
                                if (!e5(i, e)) {
                                    var a;
                                    if (i.req) throw "required field not set";
                                    if (!t.emitDefaultValues || !((a = i).repeated || "map" == a.kind || !a.oneof && "message" != a.kind && !a.opt && !a.req)) continue
                                }
                                let n = i.oneof ? e[i.oneof.localName].value : e[i.localName],
                                    s = to(i, n, t);
                                void 0 !== s && (r[t.useProtoFieldName ? i.name : i.jsonName] = s)
                            }
                            let s = t.typeRegistry;
                            if (null == s ? void 0 : s.findExtensionFor)
                                for (let i of n.runtime.bin.listUnknownFields(e)) {
                                    let a = s.findExtensionFor(n.typeName, i.no);
                                    if (a && e3(e, a)) {
                                        let i = function(e, t, i) {
                                                e4(t, e);
                                                let n = t.runtime.bin.makeReadOptions(i),
                                                    r = function(e, t) {
                                                        if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
                                                            for (let i = e.length - 1; i >= 0; --i)
                                                                if (e[i].no == t.no) return [e[i]];
                                                            return []
                                                        }
                                                        return e.filter(e => e.no === t.no)
                                                    }(e.getType().runtime.bin.listUnknownFields(e), t.field),
                                                    [a, s] = eZ(t);
                                                for (let e of r) t.runtime.bin.readField(a, n.readerFactory(e.data), t.field, e.wireType, n);
                                                return s()
                                            }(e, a, t),
                                            n = to(a.field, i, t);
                                        void 0 !== n && (r[a.field.jsonName] = n)
                                    }
                                }
                        } catch (r) {
                            let e = i ? "cannot encode field ".concat(n.typeName, ".").concat(i.name, " to JSON") : "cannot encode message ".concat(n.typeName, " to JSON"),
                                t = r instanceof Error ? r.message : String(r);
                            throw Error(e + (t.length > 0 ? ": ".concat(t) : ""))
                        }
                        return r
                    },
                    readScalar: (e, t, i) => ta(e, t, null != i ? i : z.BIGINT, !0),
                    writeScalar(e, t, i) {
                        if (void 0 !== t && (i || eQ(e, t))) return tl(e, t)
                    },
                    debug: tn
                },
                bin: {
                    makeReadOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, tu), e) : tu
                    },
                    makeWriteOptions: function(e) {
                        return e ? Object.assign(Object.assign({}, th), e) : th
                    },
                    listUnknownFields(e) {
                        var t;
                        return null != (t = e[td]) ? t : []
                    },
                    discardUnknownFields(e) {
                        delete e[td]
                    },
                    writeUnknownFields(e, t) {
                        let i = e[td];
                        if (i)
                            for (let e of i) t.tag(e.no, e.wireType).raw(e.data)
                    },
                    onUnknownField(e, t, i, n) {
                        Array.isArray(e[td]) || (e[td] = []), e[td].push({
                            no: t,
                            wireType: i,
                            data: n
                        })
                    },
                    readMessage(e, t, i, n, r) {
                        let a, s, o = e.getType(),
                            c = r ? t.len : t.pos + i;
                        for (; t.pos < c && ([a, s] = t.tag(), !0 !== r || s != J.EndGroup);) {
                            let i = o.fields.find(a);
                            if (!i) {
                                let i = t.skip(s, a);
                                n.readUnknownFields && this.onUnknownField(e, a, s, i);
                                continue
                            }
                            tp(e, t, i, s, n)
                        }
                        if (r && (s != J.EndGroup || a !== i)) throw Error("invalid end group tag")
                    },
                    readField: tp,
                    writeMessage(e, t, i) {
                        let n = e.getType();
                        for (let r of n.fields.byNumber()) {
                            if (!e5(r, e)) {
                                if (r.req) throw Error("cannot encode field ".concat(n.typeName, ".").concat(r.name, " to binary: required field not set"));
                                continue
                            }
                            let a = r.oneof ? e[r.oneof.localName].value : e[r.localName];
                            tv(r, a, t, i)
                        }
                        return i.writeUnknownFields && this.writeUnknownFields(e, t), t
                    },
                    writeField(e, t, i, n) {
                        void 0 !== t && tv(e, t, i, n)
                    }
                },
                util: Object.assign(Object.assign({}, {
                    setEnumType: eA,
                    initPartial(e, t) {
                        if (void 0 !== e)
                            for (let i of t.getType().fields.byMember()) {
                                let n = i.localName;
                                if (null != e[n]) switch (i.kind) {
                                    case "oneof":
                                        let r = e[n].case;
                                        if (void 0 === r) continue;
                                        let a = i.findField(r),
                                            s = e[n].value;
                                        a && "message" == a.kind && !e6(s, a.T) ? s = new a.T(s) : a && "scalar" === a.kind && a.T === G.BYTES && (s = tS(s)), t[n] = {
                                            case: r,
                                            value: s
                                        };
                                        break;
                                    case "scalar":
                                    case "enum":
                                        let o = e[n];
                                        i.T === G.BYTES && (o = i.repeated ? o.map(tS) : tS(o)), t[n] = o;
                                        break;
                                    case "map":
                                        switch (i.V.kind) {
                                            case "scalar":
                                            case "enum":
                                                if (i.V.T === G.BYTES)
                                                    for (let [i, r] of Object.entries(e[n])) t[n][i] = tS(r);
                                                else Object.assign(t[n], e[n]);
                                                break;
                                            case "message":
                                                let c = i.V.T;
                                                for (let i of Object.keys(e[n])) {
                                                    let r = e[n][i];
                                                    c.fieldWrapper || (r = new c(r)), t[n][i] = r
                                                }
                                        }
                                        break;
                                    case "message":
                                        let l = i.T;
                                        if (i.repeated) t[n] = e[n].map(e => e6(e, l) ? e : new l(e));
                                        else {
                                            let i = e[n];
                                            l.fieldWrapper ? "google.protobuf.BytesValue" === l.typeName ? t[n] = tS(i) : t[n] = i : t[n] = e6(i, l) ? i : new l(i)
                                        }
                                }
                            }
                    },
                    equals: (e, t, i) => t === i || !!t && !!i && e.fields.byMember().every(e => {
                        let n = t[e.localName],
                            r = i[e.localName];
                        if (e.repeated) {
                            if (n.length !== r.length) return !1;
                            switch (e.kind) {
                                case "message":
                                    return n.every((t, i) => e.T.equals(t, r[i]));
                                case "scalar":
                                    return n.every((t, i) => eJ(e.T, t, r[i]));
                                case "enum":
                                    return n.every((e, t) => eJ(G.INT32, e, r[t]))
                            }
                            throw Error("repeated cannot contain ".concat(e.kind))
                        }
                        switch (e.kind) {
                            case "message":
                                let a = n,
                                    s = r;
                                return e.T.fieldWrapper && (void 0 === a || e6(a) || (a = e.T.fieldWrapper.wrapField(a)), void 0 === s || e6(s) || (s = e.T.fieldWrapper.wrapField(s))), e.T.equals(a, s);
                            case "enum":
                                return eJ(G.INT32, n, r);
                            case "scalar":
                                return eJ(e.T, n, r);
                            case "oneof":
                                if (n.case !== r.case) return !1;
                                let o = e.findField(n.case);
                                if (void 0 === o) return !0;
                                switch (o.kind) {
                                    case "message":
                                        return o.T.equals(n.value, r.value);
                                    case "enum":
                                        return eJ(G.INT32, n.value, r.value);
                                    case "scalar":
                                        return eJ(o.T, n.value, r.value)
                                }
                                throw Error("oneof cannot contain ".concat(o.kind));
                            case "map":
                                let c = Object.keys(n).concat(Object.keys(r));
                                switch (e.V.kind) {
                                    case "message":
                                        let l = e.V.T;
                                        return c.every(e => l.equals(n[e], r[e]));
                                    case "enum":
                                        return c.every(e => eJ(G.INT32, n[e], r[e]));
                                    case "scalar":
                                        let d = e.V.T;
                                        return c.every(e => eJ(d, n[e], r[e]))
                                }
                        }
                    }),
                    clone(e) {
                        let t = e.getType(),
                            i = new t;
                        for (let n of t.fields.byMember()) {
                            let t, r = e[n.localName];
                            if (n.repeated) t = r.map(tT);
                            else if ("map" == n.kind)
                                for (let [e, a] of(t = i[n.localName], Object.entries(r))) t[e] = tT(a);
                            else t = "oneof" == n.kind ? n.findField(r.case) ? {
                                case: r.case,
                                value: tT(r.value)
                            } : {
                                case: void 0
                            } : tT(r);
                            i[n.localName] = t
                        }
                        for (let n of t.runtime.bin.listUnknownFields(e)) t.runtime.bin.onUnknownField(i, n.no, n.wireType, n.data);
                        return i
                    }
                }), {
                    newFieldList: h,
                    initFields: p
                }),
                makeMessageType(e, t, i) {
                    var n, r;
                    let a, s;
                    return n = this, Object.setPrototypeOf((s = ({
                        [a = null != (r = null == i ? void 0 : i.localName) ? r : e.substring(e.lastIndexOf(".") + 1)]: function(e) {
                            n.util.initFields(this), n.util.initPartial(e, this)
                        }
                    })[a]).prototype, new eU), Object.assign(s, {
                        runtime: n,
                        typeName: e,
                        fields: n.util.newFieldList(t),
                        fromBinary: (e, t) => new s().fromBinary(e, t),
                        fromJson: (e, t) => new s().fromJson(e, t),
                        fromJsonString: (e, t) => new s().fromJsonString(e, t),
                        equals: (e, t) => n.util.equals(s, e, t)
                    }), s
                },
                makeEnum: function(e, t, i) {
                    let n = {};
                    for (let e of t) {
                        let t = eL(e);
                        n[t.localName] = t.no, n[t.no] = t.localName
                    }
                    return eA(n, e, t), n
                },
                makeEnumType: eN,
                getEnumType: function(e) {
                    let t = e[e_];
                    return eI(t, "missing enum type on enum object"), t
                },
                makeExtension(e, t, i) {
                    var n;
                    let r;
                    return n = this, {
                        typeName: e,
                        extendee: t,
                        get field() {
                            if (!r) {
                                let t = "function" == typeof i ? i() : i;
                                t.name = e.split(".").pop(), t.jsonName = "[".concat(e, "]"), r = n.util.newFieldList([t]).list()[0]
                            }
                            return r
                        },
                        runtime: n
                    }
                }
            });
            class t_ extends eU {
                fromJson(e, t) {
                    if ("string" != typeof e) throw Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(tM.json.debug(e)));
                    let i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
                    if (!i) throw Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                    let n = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
                    if (Number.isNaN(n)) throw Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                    return this.seconds = ez.parse(n / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this
                }
                toJson(e) {
                    let t = 1e3 * Number(this.seconds);
                    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                    if (this.nanos < 0) throw Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
                    let i = "Z";
                    if (this.nanos > 0) {
                        let e = (this.nanos + 1e9).toString().substring(1);
                        i = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z"
                    }
                    return new Date(t).toISOString().replace(".000Z", i)
                }
                toDate() {
                    return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6))
                }
                static now() {
                    return t_.fromDate(new Date)
                }
                static fromDate(e) {
                    let t = e.getTime();
                    return new t_({
                        seconds: ez.parse(Math.floor(t / 1e3)),
                        nanos: t % 1e3 * 1e6
                    })
                }
                static fromBinary(e, t) {
                    return new t_().fromBinary(e, t)
                }
                static fromJson(e, t) {
                    return new t_().fromJson(e, t)
                }
                static fromJsonString(e, t) {
                    return new t_().fromJsonString(e, t)
                }
                static equals(e, t) {
                    return tM.util.equals(t_, e, t)
                }
                constructor(e) {
                    super(), this.seconds = ez.zero, this.nanos = 0, tM.util.initPartial(e, this)
                }
            }
            t_.runtime = tM, t_.typeName = "google.protobuf.Timestamp", t_.fields = tM.util.newFieldList(() => [{
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            }, {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }]);
            let tA = tM.makeMessageType("livekit.MetricsBatch", () => [{
                    no: 1,
                    name: "timestamp_ms",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 2,
                    name: "normalized_timestamp",
                    kind: "message",
                    T: t_
                }, {
                    no: 3,
                    name: "str_data",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 4,
                    name: "time_series",
                    kind: "message",
                    T: tN,
                    repeated: !0
                }, {
                    no: 5,
                    name: "events",
                    kind: "message",
                    T: tU,
                    repeated: !0
                }]),
                tN = tM.makeMessageType("livekit.TimeSeriesMetric", () => [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "participant_identity",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "track_sid",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "samples",
                    kind: "message",
                    T: tL,
                    repeated: !0
                }, {
                    no: 5,
                    name: "rid",
                    kind: "scalar",
                    T: 13
                }]),
                tL = tM.makeMessageType("livekit.MetricSample", () => [{
                    no: 1,
                    name: "timestamp_ms",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 2,
                    name: "normalized_timestamp",
                    kind: "message",
                    T: t_
                }, {
                    no: 3,
                    name: "value",
                    kind: "scalar",
                    T: 2
                }]),
                tU = tM.makeMessageType("livekit.EventMetric", () => [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "participant_identity",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "track_sid",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "start_timestamp_ms",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 5,
                    name: "end_timestamp_ms",
                    kind: "scalar",
                    T: 3,
                    opt: !0
                }, {
                    no: 6,
                    name: "normalized_start_timestamp",
                    kind: "message",
                    T: t_
                }, {
                    no: 7,
                    name: "normalized_end_timestamp",
                    kind: "message",
                    T: t_,
                    opt: !0
                }, {
                    no: 8,
                    name: "metadata",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 9,
                    name: "rid",
                    kind: "scalar",
                    T: 13
                }]),
                tj = tM.makeEnum("livekit.BackupCodecPolicy", [{
                    no: 0,
                    name: "PREFER_REGRESSION"
                }, {
                    no: 1,
                    name: "SIMULCAST"
                }, {
                    no: 2,
                    name: "REGRESSION"
                }]),
                tF = tM.makeEnum("livekit.TrackType", [{
                    no: 0,
                    name: "AUDIO"
                }, {
                    no: 1,
                    name: "VIDEO"
                }, {
                    no: 2,
                    name: "DATA"
                }]),
                tB = tM.makeEnum("livekit.TrackSource", [{
                    no: 0,
                    name: "UNKNOWN"
                }, {
                    no: 1,
                    name: "CAMERA"
                }, {
                    no: 2,
                    name: "MICROPHONE"
                }, {
                    no: 3,
                    name: "SCREEN_SHARE"
                }, {
                    no: 4,
                    name: "SCREEN_SHARE_AUDIO"
                }]),
                tV = tM.makeEnum("livekit.VideoQuality", [{
                    no: 0,
                    name: "LOW"
                }, {
                    no: 1,
                    name: "MEDIUM"
                }, {
                    no: 2,
                    name: "HIGH"
                }, {
                    no: 3,
                    name: "OFF"
                }]),
                tq = tM.makeEnum("livekit.ConnectionQuality", [{
                    no: 0,
                    name: "POOR"
                }, {
                    no: 1,
                    name: "GOOD"
                }, {
                    no: 2,
                    name: "EXCELLENT"
                }, {
                    no: 3,
                    name: "LOST"
                }]),
                tW = tM.makeEnum("livekit.ClientConfigSetting", [{
                    no: 0,
                    name: "UNSET"
                }, {
                    no: 1,
                    name: "DISABLED"
                }, {
                    no: 2,
                    name: "ENABLED"
                }]),
                tK = tM.makeEnum("livekit.DisconnectReason", [{
                    no: 0,
                    name: "UNKNOWN_REASON"
                }, {
                    no: 1,
                    name: "CLIENT_INITIATED"
                }, {
                    no: 2,
                    name: "DUPLICATE_IDENTITY"
                }, {
                    no: 3,
                    name: "SERVER_SHUTDOWN"
                }, {
                    no: 4,
                    name: "PARTICIPANT_REMOVED"
                }, {
                    no: 5,
                    name: "ROOM_DELETED"
                }, {
                    no: 6,
                    name: "STATE_MISMATCH"
                }, {
                    no: 7,
                    name: "JOIN_FAILURE"
                }, {
                    no: 8,
                    name: "MIGRATION"
                }, {
                    no: 9,
                    name: "SIGNAL_CLOSE"
                }, {
                    no: 10,
                    name: "ROOM_CLOSED"
                }, {
                    no: 11,
                    name: "USER_UNAVAILABLE"
                }, {
                    no: 12,
                    name: "USER_REJECTED"
                }, {
                    no: 13,
                    name: "SIP_TRUNK_FAILURE"
                }, {
                    no: 14,
                    name: "CONNECTION_TIMEOUT"
                }, {
                    no: 15,
                    name: "MEDIA_FAILURE"
                }]),
                tH = tM.makeEnum("livekit.ReconnectReason", [{
                    no: 0,
                    name: "RR_UNKNOWN"
                }, {
                    no: 1,
                    name: "RR_SIGNAL_DISCONNECTED"
                }, {
                    no: 2,
                    name: "RR_PUBLISHER_FAILED"
                }, {
                    no: 3,
                    name: "RR_SUBSCRIBER_FAILED"
                }, {
                    no: 4,
                    name: "RR_SWITCH_CANDIDATE"
                }]),
                tG = tM.makeEnum("livekit.SubscriptionError", [{
                    no: 0,
                    name: "SE_UNKNOWN"
                }, {
                    no: 1,
                    name: "SE_CODEC_UNSUPPORTED"
                }, {
                    no: 2,
                    name: "SE_TRACK_NOTFOUND"
                }]),
                tz = tM.makeEnum("livekit.AudioTrackFeature", [{
                    no: 0,
                    name: "TF_STEREO"
                }, {
                    no: 1,
                    name: "TF_NO_DTX"
                }, {
                    no: 2,
                    name: "TF_AUTO_GAIN_CONTROL"
                }, {
                    no: 3,
                    name: "TF_ECHO_CANCELLATION"
                }, {
                    no: 4,
                    name: "TF_NOISE_SUPPRESSION"
                }, {
                    no: 5,
                    name: "TF_ENHANCED_NOISE_CANCELLATION"
                }, {
                    no: 6,
                    name: "TF_PRECONNECT_BUFFER"
                }]),
                tJ = tM.makeMessageType("livekit.Room", () => [{
                    no: 1,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "empty_timeout",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 14,
                    name: "departure_timeout",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "max_participants",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 5,
                    name: "creation_time",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 15,
                    name: "creation_time_ms",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 6,
                    name: "turn_password",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 7,
                    name: "enabled_codecs",
                    kind: "message",
                    T: tY,
                    repeated: !0
                }, {
                    no: 8,
                    name: "metadata",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 9,
                    name: "num_participants",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 11,
                    name: "num_publishers",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 10,
                    name: "active_recording",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 13,
                    name: "version",
                    kind: "message",
                    T: ib
                }]),
                tY = tM.makeMessageType("livekit.Codec", () => [{
                    no: 1,
                    name: "mime",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "fmtp_line",
                    kind: "scalar",
                    T: 9
                }]),
                tQ = tM.makeMessageType("livekit.ParticipantPermission", () => [{
                    no: 1,
                    name: "can_subscribe",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 2,
                    name: "can_publish",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 3,
                    name: "can_publish_data",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 9,
                    name: "can_publish_sources",
                    kind: "enum",
                    T: tM.getEnumType(tB),
                    repeated: !0
                }, {
                    no: 7,
                    name: "hidden",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 8,
                    name: "recorder",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 10,
                    name: "can_update_metadata",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 11,
                    name: "agent",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 12,
                    name: "can_subscribe_metrics",
                    kind: "scalar",
                    T: 8
                }]),
                tX = tM.makeMessageType("livekit.ParticipantInfo", () => [{
                    no: 1,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "identity",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "state",
                    kind: "enum",
                    T: tM.getEnumType(t$)
                }, {
                    no: 4,
                    name: "tracks",
                    kind: "message",
                    T: t3,
                    repeated: !0
                }, {
                    no: 5,
                    name: "metadata",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 6,
                    name: "joined_at",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 17,
                    name: "joined_at_ms",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 9,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 10,
                    name: "version",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 11,
                    name: "permission",
                    kind: "message",
                    T: tQ
                }, {
                    no: 12,
                    name: "region",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 13,
                    name: "is_publisher",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 14,
                    name: "kind",
                    kind: "enum",
                    T: tM.getEnumType(tZ)
                }, {
                    no: 15,
                    name: "attributes",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "scalar",
                        T: 9
                    }
                }, {
                    no: 16,
                    name: "disconnect_reason",
                    kind: "enum",
                    T: tM.getEnumType(tK)
                }, {
                    no: 18,
                    name: "kind_details",
                    kind: "enum",
                    T: tM.getEnumType(t0),
                    repeated: !0
                }]),
                t$ = tM.makeEnum("livekit.ParticipantInfo.State", [{
                    no: 0,
                    name: "JOINING"
                }, {
                    no: 1,
                    name: "JOINED"
                }, {
                    no: 2,
                    name: "ACTIVE"
                }, {
                    no: 3,
                    name: "DISCONNECTED"
                }]),
                tZ = tM.makeEnum("livekit.ParticipantInfo.Kind", [{
                    no: 0,
                    name: "STANDARD"
                }, {
                    no: 1,
                    name: "INGRESS"
                }, {
                    no: 2,
                    name: "EGRESS"
                }, {
                    no: 3,
                    name: "SIP"
                }, {
                    no: 4,
                    name: "AGENT"
                }]),
                t0 = tM.makeEnum("livekit.ParticipantInfo.KindDetail", [{
                    no: 0,
                    name: "CLOUD_AGENT"
                }, {
                    no: 1,
                    name: "FORWARDED"
                }]),
                t1 = tM.makeEnum("livekit.Encryption.Type", [{
                    no: 0,
                    name: "NONE"
                }, {
                    no: 1,
                    name: "GCM"
                }, {
                    no: 2,
                    name: "CUSTOM"
                }]),
                t2 = tM.makeMessageType("livekit.SimulcastCodecInfo", () => [{
                    no: 1,
                    name: "mime_type",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "mid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "cid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "layers",
                    kind: "message",
                    T: t4,
                    repeated: !0
                }]),
                t3 = tM.makeMessageType("livekit.TrackInfo", () => [{
                    no: 1,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "type",
                    kind: "enum",
                    T: tM.getEnumType(tF)
                }, {
                    no: 3,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "muted",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 5,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 6,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 7,
                    name: "simulcast",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 8,
                    name: "disable_dtx",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 9,
                    name: "source",
                    kind: "enum",
                    T: tM.getEnumType(tB)
                }, {
                    no: 10,
                    name: "layers",
                    kind: "message",
                    T: t4,
                    repeated: !0
                }, {
                    no: 11,
                    name: "mime_type",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 12,
                    name: "mid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 13,
                    name: "codecs",
                    kind: "message",
                    T: t2,
                    repeated: !0
                }, {
                    no: 14,
                    name: "stereo",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 15,
                    name: "disable_red",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 16,
                    name: "encryption",
                    kind: "enum",
                    T: tM.getEnumType(t1)
                }, {
                    no: 17,
                    name: "stream",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 18,
                    name: "version",
                    kind: "message",
                    T: ib
                }, {
                    no: 19,
                    name: "audio_features",
                    kind: "enum",
                    T: tM.getEnumType(tz),
                    repeated: !0
                }, {
                    no: 20,
                    name: "backup_codec_policy",
                    kind: "enum",
                    T: tM.getEnumType(tj)
                }]),
                t4 = tM.makeMessageType("livekit.VideoLayer", () => [{
                    no: 1,
                    name: "quality",
                    kind: "enum",
                    T: tM.getEnumType(tV)
                }, {
                    no: 2,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "bitrate",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 5,
                    name: "ssrc",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 6,
                    name: "spatial_layer",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 7,
                    name: "rid",
                    kind: "scalar",
                    T: 9
                }]),
                t5 = tM.makeMessageType("livekit.DataPacket", () => [{
                    no: 1,
                    name: "kind",
                    kind: "enum",
                    T: tM.getEnumType(t9)
                }, {
                    no: 4,
                    name: "participant_identity",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "destination_identities",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 2,
                    name: "user",
                    kind: "message",
                    T: t7,
                    oneof: "value"
                }, {
                    no: 3,
                    name: "speaker",
                    kind: "message",
                    T: t6,
                    oneof: "value"
                }, {
                    no: 6,
                    name: "sip_dtmf",
                    kind: "message",
                    T: ie,
                    oneof: "value"
                }, {
                    no: 7,
                    name: "transcription",
                    kind: "message",
                    T: it,
                    oneof: "value"
                }, {
                    no: 8,
                    name: "metrics",
                    kind: "message",
                    T: tA,
                    oneof: "value"
                }, {
                    no: 9,
                    name: "chat_message",
                    kind: "message",
                    T: ir,
                    oneof: "value"
                }, {
                    no: 10,
                    name: "rpc_request",
                    kind: "message",
                    T: ia,
                    oneof: "value"
                }, {
                    no: 11,
                    name: "rpc_ack",
                    kind: "message",
                    T: is,
                    oneof: "value"
                }, {
                    no: 12,
                    name: "rpc_response",
                    kind: "message",
                    T: io,
                    oneof: "value"
                }, {
                    no: 13,
                    name: "stream_header",
                    kind: "message",
                    T: iS,
                    oneof: "value"
                }, {
                    no: 14,
                    name: "stream_chunk",
                    kind: "message",
                    T: iC,
                    oneof: "value"
                }, {
                    no: 15,
                    name: "stream_trailer",
                    kind: "message",
                    T: iw,
                    oneof: "value"
                }, {
                    no: 16,
                    name: "sequence",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 17,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }]),
                t9 = tM.makeEnum("livekit.DataPacket.Kind", [{
                    no: 0,
                    name: "RELIABLE"
                }, {
                    no: 1,
                    name: "LOSSY"
                }]),
                t6 = tM.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{
                    no: 1,
                    name: "speakers",
                    kind: "message",
                    T: t8,
                    repeated: !0
                }]),
                t8 = tM.makeMessageType("livekit.SpeakerInfo", () => [{
                    no: 1,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "level",
                    kind: "scalar",
                    T: 2
                }, {
                    no: 3,
                    name: "active",
                    kind: "scalar",
                    T: 8
                }]),
                t7 = tM.makeMessageType("livekit.UserPacket", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "participant_identity",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "payload",
                    kind: "scalar",
                    T: 12
                }, {
                    no: 3,
                    name: "destination_sids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 6,
                    name: "destination_identities",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 4,
                    name: "topic",
                    kind: "scalar",
                    T: 9,
                    opt: !0
                }, {
                    no: 8,
                    name: "id",
                    kind: "scalar",
                    T: 9,
                    opt: !0
                }, {
                    no: 9,
                    name: "start_time",
                    kind: "scalar",
                    T: 4,
                    opt: !0
                }, {
                    no: 10,
                    name: "end_time",
                    kind: "scalar",
                    T: 4,
                    opt: !0
                }, {
                    no: 11,
                    name: "nonce",
                    kind: "scalar",
                    T: 12
                }]),
                ie = tM.makeMessageType("livekit.SipDTMF", () => [{
                    no: 3,
                    name: "code",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 4,
                    name: "digit",
                    kind: "scalar",
                    T: 9
                }]),
                it = tM.makeMessageType("livekit.Transcription", () => [{
                    no: 2,
                    name: "transcribed_participant_identity",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "track_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "segments",
                    kind: "message",
                    T: ii,
                    repeated: !0
                }]),
                ii = tM.makeMessageType("livekit.TranscriptionSegment", () => [{
                    no: 1,
                    name: "id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "text",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "start_time",
                    kind: "scalar",
                    T: 4
                }, {
                    no: 4,
                    name: "end_time",
                    kind: "scalar",
                    T: 4
                }, {
                    no: 5,
                    name: "final",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 6,
                    name: "language",
                    kind: "scalar",
                    T: 9
                }]),
                ir = tM.makeMessageType("livekit.ChatMessage", () => [{
                    no: 1,
                    name: "id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "timestamp",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 3,
                    name: "edit_timestamp",
                    kind: "scalar",
                    T: 3,
                    opt: !0
                }, {
                    no: 4,
                    name: "message",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "deleted",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 6,
                    name: "generated",
                    kind: "scalar",
                    T: 8
                }]),
                ia = tM.makeMessageType("livekit.RpcRequest", () => [{
                    no: 1,
                    name: "id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "method",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "payload",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "response_timeout_ms",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 5,
                    name: "version",
                    kind: "scalar",
                    T: 13
                }]),
                is = tM.makeMessageType("livekit.RpcAck", () => [{
                    no: 1,
                    name: "request_id",
                    kind: "scalar",
                    T: 9
                }]),
                io = tM.makeMessageType("livekit.RpcResponse", () => [{
                    no: 1,
                    name: "request_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "payload",
                    kind: "scalar",
                    T: 9,
                    oneof: "value"
                }, {
                    no: 3,
                    name: "error",
                    kind: "message",
                    T: ic,
                    oneof: "value"
                }]),
                ic = tM.makeMessageType("livekit.RpcError", () => [{
                    no: 1,
                    name: "code",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "message",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "data",
                    kind: "scalar",
                    T: 9
                }]),
                il = tM.makeMessageType("livekit.ParticipantTracks", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "track_sids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }]),
                id = tM.makeMessageType("livekit.ServerInfo", () => [{
                    no: 1,
                    name: "edition",
                    kind: "enum",
                    T: tM.getEnumType(iu)
                }, {
                    no: 2,
                    name: "version",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "protocol",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 4,
                    name: "region",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "node_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 6,
                    name: "debug_info",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 7,
                    name: "agent_protocol",
                    kind: "scalar",
                    T: 5
                }]),
                iu = tM.makeEnum("livekit.ServerInfo.Edition", [{
                    no: 0,
                    name: "Standard"
                }, {
                    no: 1,
                    name: "Cloud"
                }]),
                ih = tM.makeMessageType("livekit.ClientInfo", () => [{
                    no: 1,
                    name: "sdk",
                    kind: "enum",
                    T: tM.getEnumType(ip)
                }, {
                    no: 2,
                    name: "version",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "protocol",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 4,
                    name: "os",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "os_version",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 6,
                    name: "device_model",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 7,
                    name: "browser",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 8,
                    name: "browser_version",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 9,
                    name: "address",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 10,
                    name: "network",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 11,
                    name: "other_sdks",
                    kind: "scalar",
                    T: 9
                }]),
                ip = tM.makeEnum("livekit.ClientInfo.SDK", [{
                    no: 0,
                    name: "UNKNOWN"
                }, {
                    no: 1,
                    name: "JS"
                }, {
                    no: 2,
                    name: "SWIFT"
                }, {
                    no: 3,
                    name: "ANDROID"
                }, {
                    no: 4,
                    name: "FLUTTER"
                }, {
                    no: 5,
                    name: "GO"
                }, {
                    no: 6,
                    name: "UNITY"
                }, {
                    no: 7,
                    name: "REACT_NATIVE"
                }, {
                    no: 8,
                    name: "RUST"
                }, {
                    no: 9,
                    name: "PYTHON"
                }, {
                    no: 10,
                    name: "CPP"
                }, {
                    no: 11,
                    name: "UNITY_WEB"
                }, {
                    no: 12,
                    name: "NODE"
                }, {
                    no: 13,
                    name: "UNREAL"
                }, {
                    no: 14,
                    name: "ESP32"
                }]),
                im = tM.makeMessageType("livekit.ClientConfiguration", () => [{
                    no: 1,
                    name: "video",
                    kind: "message",
                    T: ig
                }, {
                    no: 2,
                    name: "screen",
                    kind: "message",
                    T: ig
                }, {
                    no: 3,
                    name: "resume_connection",
                    kind: "enum",
                    T: tM.getEnumType(tW)
                }, {
                    no: 4,
                    name: "disabled_codecs",
                    kind: "message",
                    T: iv
                }, {
                    no: 5,
                    name: "force_relay",
                    kind: "enum",
                    T: tM.getEnumType(tW)
                }]),
                ig = tM.makeMessageType("livekit.VideoConfiguration", () => [{
                    no: 1,
                    name: "hardware_encoder",
                    kind: "enum",
                    T: tM.getEnumType(tW)
                }]),
                iv = tM.makeMessageType("livekit.DisabledCodecs", () => [{
                    no: 1,
                    name: "codecs",
                    kind: "message",
                    T: tY,
                    repeated: !0
                }, {
                    no: 2,
                    name: "publish",
                    kind: "message",
                    T: tY,
                    repeated: !0
                }]),
                ib = tM.makeMessageType("livekit.TimedVersion", () => [{
                    no: 1,
                    name: "unix_micro",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 2,
                    name: "ticks",
                    kind: "scalar",
                    T: 5
                }]),
                iy = tM.makeEnum("livekit.DataStream.OperationType", [{
                    no: 0,
                    name: "CREATE"
                }, {
                    no: 1,
                    name: "UPDATE"
                }, {
                    no: 2,
                    name: "DELETE"
                }, {
                    no: 3,
                    name: "REACTION"
                }]),
                ik = tM.makeMessageType("livekit.DataStream.TextHeader", () => [{
                    no: 1,
                    name: "operation_type",
                    kind: "enum",
                    T: tM.getEnumType(iy)
                }, {
                    no: 2,
                    name: "version",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 3,
                    name: "reply_to_stream_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "attached_stream_ids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 5,
                    name: "generated",
                    kind: "scalar",
                    T: 8
                }], {
                    localName: "DataStream_TextHeader"
                }),
                iT = tM.makeMessageType("livekit.DataStream.ByteHeader", () => [{
                    no: 1,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }], {
                    localName: "DataStream_ByteHeader"
                }),
                iS = tM.makeMessageType("livekit.DataStream.Header", () => [{
                    no: 1,
                    name: "stream_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "timestamp",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 3,
                    name: "topic",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 4,
                    name: "mime_type",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "total_length",
                    kind: "scalar",
                    T: 4,
                    opt: !0
                }, {
                    no: 7,
                    name: "encryption_type",
                    kind: "enum",
                    T: tM.getEnumType(t1)
                }, {
                    no: 8,
                    name: "attributes",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "scalar",
                        T: 9
                    }
                }, {
                    no: 9,
                    name: "text_header",
                    kind: "message",
                    T: ik,
                    oneof: "content_header"
                }, {
                    no: 10,
                    name: "byte_header",
                    kind: "message",
                    T: iT,
                    oneof: "content_header"
                }], {
                    localName: "DataStream_Header"
                }),
                iC = tM.makeMessageType("livekit.DataStream.Chunk", () => [{
                    no: 1,
                    name: "stream_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "chunk_index",
                    kind: "scalar",
                    T: 4
                }, {
                    no: 3,
                    name: "content",
                    kind: "scalar",
                    T: 12
                }, {
                    no: 4,
                    name: "version",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 5,
                    name: "iv",
                    kind: "scalar",
                    T: 12,
                    opt: !0
                }], {
                    localName: "DataStream_Chunk"
                }),
                iw = tM.makeMessageType("livekit.DataStream.Trailer", () => [{
                    no: 1,
                    name: "stream_id",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "reason",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "attributes",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "scalar",
                        T: 9
                    }
                }], {
                    localName: "DataStream_Trailer"
                }),
                iE = tM.makeEnum("livekit.SignalTarget", [{
                    no: 0,
                    name: "PUBLISHER"
                }, {
                    no: 1,
                    name: "SUBSCRIBER"
                }]),
                iP = tM.makeEnum("livekit.StreamState", [{
                    no: 0,
                    name: "ACTIVE"
                }, {
                    no: 1,
                    name: "PAUSED"
                }]),
                iR = tM.makeEnum("livekit.CandidateProtocol", [{
                    no: 0,
                    name: "UDP"
                }, {
                    no: 1,
                    name: "TCP"
                }, {
                    no: 2,
                    name: "TLS"
                }]),
                iO = tM.makeMessageType("livekit.SignalRequest", () => [{
                    no: 1,
                    name: "offer",
                    kind: "message",
                    T: ij,
                    oneof: "message"
                }, {
                    no: 2,
                    name: "answer",
                    kind: "message",
                    T: ij,
                    oneof: "message"
                }, {
                    no: 3,
                    name: "trickle",
                    kind: "message",
                    T: iM,
                    oneof: "message"
                }, {
                    no: 4,
                    name: "add_track",
                    kind: "message",
                    T: iD,
                    oneof: "message"
                }, {
                    no: 5,
                    name: "mute",
                    kind: "message",
                    T: i_,
                    oneof: "message"
                }, {
                    no: 6,
                    name: "subscription",
                    kind: "message",
                    T: iB,
                    oneof: "message"
                }, {
                    no: 7,
                    name: "track_setting",
                    kind: "message",
                    T: iV,
                    oneof: "message"
                }, {
                    no: 8,
                    name: "leave",
                    kind: "message",
                    T: iK,
                    oneof: "message"
                }, {
                    no: 10,
                    name: "update_layers",
                    kind: "message",
                    T: iG,
                    oneof: "message"
                }, {
                    no: 11,
                    name: "subscription_permission",
                    kind: "message",
                    T: i5,
                    oneof: "message"
                }, {
                    no: 12,
                    name: "sync_state",
                    kind: "message",
                    T: i8,
                    oneof: "message"
                }, {
                    no: 13,
                    name: "simulate",
                    kind: "message",
                    T: nt,
                    oneof: "message"
                }, {
                    no: 14,
                    name: "ping",
                    kind: "scalar",
                    T: 3,
                    oneof: "message"
                }, {
                    no: 15,
                    name: "update_metadata",
                    kind: "message",
                    T: iz,
                    oneof: "message"
                }, {
                    no: 16,
                    name: "ping_req",
                    kind: "message",
                    T: ni,
                    oneof: "message"
                }, {
                    no: 17,
                    name: "update_audio_track",
                    kind: "message",
                    T: iq,
                    oneof: "message"
                }, {
                    no: 18,
                    name: "update_video_track",
                    kind: "message",
                    T: iW,
                    oneof: "message"
                }]),
                iI = tM.makeMessageType("livekit.SignalResponse", () => [{
                    no: 1,
                    name: "join",
                    kind: "message",
                    T: iA,
                    oneof: "message"
                }, {
                    no: 2,
                    name: "answer",
                    kind: "message",
                    T: ij,
                    oneof: "message"
                }, {
                    no: 3,
                    name: "offer",
                    kind: "message",
                    T: ij,
                    oneof: "message"
                }, {
                    no: 4,
                    name: "trickle",
                    kind: "message",
                    T: iM,
                    oneof: "message"
                }, {
                    no: 5,
                    name: "update",
                    kind: "message",
                    T: iF,
                    oneof: "message"
                }, {
                    no: 6,
                    name: "track_published",
                    kind: "message",
                    T: iL,
                    oneof: "message"
                }, {
                    no: 8,
                    name: "leave",
                    kind: "message",
                    T: iK,
                    oneof: "message"
                }, {
                    no: 9,
                    name: "mute",
                    kind: "message",
                    T: i_,
                    oneof: "message"
                }, {
                    no: 10,
                    name: "speakers_changed",
                    kind: "message",
                    T: iY,
                    oneof: "message"
                }, {
                    no: 11,
                    name: "room_update",
                    kind: "message",
                    T: iQ,
                    oneof: "message"
                }, {
                    no: 12,
                    name: "connection_quality",
                    kind: "message",
                    T: i$,
                    oneof: "message"
                }, {
                    no: 13,
                    name: "stream_state_update",
                    kind: "message",
                    T: i0,
                    oneof: "message"
                }, {
                    no: 14,
                    name: "subscribed_quality_update",
                    kind: "message",
                    T: i3,
                    oneof: "message"
                }, {
                    no: 15,
                    name: "subscription_permission_update",
                    kind: "message",
                    T: i9,
                    oneof: "message"
                }, {
                    no: 16,
                    name: "refresh_token",
                    kind: "scalar",
                    T: 9,
                    oneof: "message"
                }, {
                    no: 17,
                    name: "track_unpublished",
                    kind: "message",
                    T: iU,
                    oneof: "message"
                }, {
                    no: 18,
                    name: "pong",
                    kind: "scalar",
                    T: 3,
                    oneof: "message"
                }, {
                    no: 19,
                    name: "reconnect",
                    kind: "message",
                    T: iN,
                    oneof: "message"
                }, {
                    no: 20,
                    name: "pong_resp",
                    kind: "message",
                    T: nn,
                    oneof: "message"
                }, {
                    no: 21,
                    name: "subscription_response",
                    kind: "message",
                    T: ns,
                    oneof: "message"
                }, {
                    no: 22,
                    name: "request_response",
                    kind: "message",
                    T: no,
                    oneof: "message"
                }, {
                    no: 23,
                    name: "track_subscribed",
                    kind: "message",
                    T: nl,
                    oneof: "message"
                }, {
                    no: 24,
                    name: "room_moved",
                    kind: "message",
                    T: i6,
                    oneof: "message"
                }]),
                ix = tM.makeMessageType("livekit.SimulcastCodec", () => [{
                    no: 1,
                    name: "codec",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "cid",
                    kind: "scalar",
                    T: 9
                }]),
                iD = tM.makeMessageType("livekit.AddTrackRequest", () => [{
                    no: 1,
                    name: "cid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "type",
                    kind: "enum",
                    T: tM.getEnumType(tF)
                }, {
                    no: 4,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 5,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 6,
                    name: "muted",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 7,
                    name: "disable_dtx",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 8,
                    name: "source",
                    kind: "enum",
                    T: tM.getEnumType(tB)
                }, {
                    no: 9,
                    name: "layers",
                    kind: "message",
                    T: t4,
                    repeated: !0
                }, {
                    no: 10,
                    name: "simulcast_codecs",
                    kind: "message",
                    T: ix,
                    repeated: !0
                }, {
                    no: 11,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 12,
                    name: "stereo",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 13,
                    name: "disable_red",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 14,
                    name: "encryption",
                    kind: "enum",
                    T: tM.getEnumType(t1)
                }, {
                    no: 15,
                    name: "stream",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 16,
                    name: "backup_codec_policy",
                    kind: "enum",
                    T: tM.getEnumType(tj)
                }, {
                    no: 17,
                    name: "audio_features",
                    kind: "enum",
                    T: tM.getEnumType(tz),
                    repeated: !0
                }]),
                iM = tM.makeMessageType("livekit.TrickleRequest", () => [{
                    no: 1,
                    name: "candidateInit",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "target",
                    kind: "enum",
                    T: tM.getEnumType(iE)
                }, {
                    no: 3,
                    name: "final",
                    kind: "scalar",
                    T: 8
                }]),
                i_ = tM.makeMessageType("livekit.MuteTrackRequest", () => [{
                    no: 1,
                    name: "sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "muted",
                    kind: "scalar",
                    T: 8
                }]),
                iA = tM.makeMessageType("livekit.JoinResponse", () => [{
                    no: 1,
                    name: "room",
                    kind: "message",
                    T: tJ
                }, {
                    no: 2,
                    name: "participant",
                    kind: "message",
                    T: tX
                }, {
                    no: 3,
                    name: "other_participants",
                    kind: "message",
                    T: tX,
                    repeated: !0
                }, {
                    no: 4,
                    name: "server_version",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 5,
                    name: "ice_servers",
                    kind: "message",
                    T: iJ,
                    repeated: !0
                }, {
                    no: 6,
                    name: "subscriber_primary",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 7,
                    name: "alternative_url",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 8,
                    name: "client_configuration",
                    kind: "message",
                    T: im
                }, {
                    no: 9,
                    name: "server_region",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 10,
                    name: "ping_timeout",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 11,
                    name: "ping_interval",
                    kind: "scalar",
                    T: 5
                }, {
                    no: 12,
                    name: "server_info",
                    kind: "message",
                    T: id
                }, {
                    no: 13,
                    name: "sif_trailer",
                    kind: "scalar",
                    T: 12
                }, {
                    no: 14,
                    name: "enabled_publish_codecs",
                    kind: "message",
                    T: tY,
                    repeated: !0
                }, {
                    no: 15,
                    name: "fast_publish",
                    kind: "scalar",
                    T: 8
                }]),
                iN = tM.makeMessageType("livekit.ReconnectResponse", () => [{
                    no: 1,
                    name: "ice_servers",
                    kind: "message",
                    T: iJ,
                    repeated: !0
                }, {
                    no: 2,
                    name: "client_configuration",
                    kind: "message",
                    T: im
                }, {
                    no: 3,
                    name: "server_info",
                    kind: "message",
                    T: id
                }, {
                    no: 4,
                    name: "last_message_seq",
                    kind: "scalar",
                    T: 13
                }]),
                iL = tM.makeMessageType("livekit.TrackPublishedResponse", () => [{
                    no: 1,
                    name: "cid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "track",
                    kind: "message",
                    T: t3
                }]),
                iU = tM.makeMessageType("livekit.TrackUnpublishedResponse", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }]),
                ij = tM.makeMessageType("livekit.SessionDescription", () => [{
                    no: 1,
                    name: "type",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "sdp",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "id",
                    kind: "scalar",
                    T: 13
                }]),
                iF = tM.makeMessageType("livekit.ParticipantUpdate", () => [{
                    no: 1,
                    name: "participants",
                    kind: "message",
                    T: tX,
                    repeated: !0
                }]),
                iB = tM.makeMessageType("livekit.UpdateSubscription", () => [{
                    no: 1,
                    name: "track_sids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 2,
                    name: "subscribe",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 3,
                    name: "participant_tracks",
                    kind: "message",
                    T: il,
                    repeated: !0
                }]),
                iV = tM.makeMessageType("livekit.UpdateTrackSettings", () => [{
                    no: 1,
                    name: "track_sids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 3,
                    name: "disabled",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 4,
                    name: "quality",
                    kind: "enum",
                    T: tM.getEnumType(tV)
                }, {
                    no: 5,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 6,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 7,
                    name: "fps",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 8,
                    name: "priority",
                    kind: "scalar",
                    T: 13
                }]),
                iq = tM.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "features",
                    kind: "enum",
                    T: tM.getEnumType(tz),
                    repeated: !0
                }]),
                iW = tM.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "width",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "height",
                    kind: "scalar",
                    T: 13
                }]),
                iK = tM.makeMessageType("livekit.LeaveRequest", () => [{
                    no: 1,
                    name: "can_reconnect",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 2,
                    name: "reason",
                    kind: "enum",
                    T: tM.getEnumType(tK)
                }, {
                    no: 3,
                    name: "action",
                    kind: "enum",
                    T: tM.getEnumType(iH)
                }, {
                    no: 4,
                    name: "regions",
                    kind: "message",
                    T: nr
                }]),
                iH = tM.makeEnum("livekit.LeaveRequest.Action", [{
                    no: 0,
                    name: "DISCONNECT"
                }, {
                    no: 1,
                    name: "RESUME"
                }, {
                    no: 2,
                    name: "RECONNECT"
                }]),
                iG = tM.makeMessageType("livekit.UpdateVideoLayers", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "layers",
                    kind: "message",
                    T: t4,
                    repeated: !0
                }]),
                iz = tM.makeMessageType("livekit.UpdateParticipantMetadata", () => [{
                    no: 1,
                    name: "metadata",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "name",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "attributes",
                    kind: "map",
                    K: 9,
                    V: {
                        kind: "scalar",
                        T: 9
                    }
                }, {
                    no: 4,
                    name: "request_id",
                    kind: "scalar",
                    T: 13
                }]),
                iJ = tM.makeMessageType("livekit.ICEServer", () => [{
                    no: 1,
                    name: "urls",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 2,
                    name: "username",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "credential",
                    kind: "scalar",
                    T: 9
                }]),
                iY = tM.makeMessageType("livekit.SpeakersChanged", () => [{
                    no: 1,
                    name: "speakers",
                    kind: "message",
                    T: t8,
                    repeated: !0
                }]),
                iQ = tM.makeMessageType("livekit.RoomUpdate", () => [{
                    no: 1,
                    name: "room",
                    kind: "message",
                    T: tJ
                }]),
                iX = tM.makeMessageType("livekit.ConnectionQualityInfo", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "quality",
                    kind: "enum",
                    T: tM.getEnumType(tq)
                }, {
                    no: 3,
                    name: "score",
                    kind: "scalar",
                    T: 2
                }]),
                i$ = tM.makeMessageType("livekit.ConnectionQualityUpdate", () => [{
                    no: 1,
                    name: "updates",
                    kind: "message",
                    T: iX,
                    repeated: !0
                }]),
                iZ = tM.makeMessageType("livekit.StreamStateInfo", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "state",
                    kind: "enum",
                    T: tM.getEnumType(iP)
                }]),
                i0 = tM.makeMessageType("livekit.StreamStateUpdate", () => [{
                    no: 1,
                    name: "stream_states",
                    kind: "message",
                    T: iZ,
                    repeated: !0
                }]),
                i1 = tM.makeMessageType("livekit.SubscribedQuality", () => [{
                    no: 1,
                    name: "quality",
                    kind: "enum",
                    T: tM.getEnumType(tV)
                }, {
                    no: 2,
                    name: "enabled",
                    kind: "scalar",
                    T: 8
                }]),
                i2 = tM.makeMessageType("livekit.SubscribedCodec", () => [{
                    no: 1,
                    name: "codec",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "qualities",
                    kind: "message",
                    T: i1,
                    repeated: !0
                }]),
                i3 = tM.makeMessageType("livekit.SubscribedQualityUpdate", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "subscribed_qualities",
                    kind: "message",
                    T: i1,
                    repeated: !0
                }, {
                    no: 3,
                    name: "subscribed_codecs",
                    kind: "message",
                    T: i2,
                    repeated: !0
                }]),
                i4 = tM.makeMessageType("livekit.TrackPermission", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "all_tracks",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 3,
                    name: "track_sids",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 4,
                    name: "participant_identity",
                    kind: "scalar",
                    T: 9
                }]),
                i5 = tM.makeMessageType("livekit.SubscriptionPermission", () => [{
                    no: 1,
                    name: "all_participants",
                    kind: "scalar",
                    T: 8
                }, {
                    no: 2,
                    name: "track_permissions",
                    kind: "message",
                    T: i4,
                    repeated: !0
                }]),
                i9 = tM.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{
                    no: 1,
                    name: "participant_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "allowed",
                    kind: "scalar",
                    T: 8
                }]),
                i6 = tM.makeMessageType("livekit.RoomMovedResponse", () => [{
                    no: 1,
                    name: "room",
                    kind: "message",
                    T: tJ
                }, {
                    no: 2,
                    name: "token",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "participant",
                    kind: "message",
                    T: tX
                }, {
                    no: 4,
                    name: "other_participants",
                    kind: "message",
                    T: tX,
                    repeated: !0
                }]),
                i8 = tM.makeMessageType("livekit.SyncState", () => [{
                    no: 1,
                    name: "answer",
                    kind: "message",
                    T: ij
                }, {
                    no: 2,
                    name: "subscription",
                    kind: "message",
                    T: iB
                }, {
                    no: 3,
                    name: "publish_tracks",
                    kind: "message",
                    T: iL,
                    repeated: !0
                }, {
                    no: 4,
                    name: "data_channels",
                    kind: "message",
                    T: ne,
                    repeated: !0
                }, {
                    no: 5,
                    name: "offer",
                    kind: "message",
                    T: ij
                }, {
                    no: 6,
                    name: "track_sids_disabled",
                    kind: "scalar",
                    T: 9,
                    repeated: !0
                }, {
                    no: 7,
                    name: "datachannel_receive_states",
                    kind: "message",
                    T: i7,
                    repeated: !0
                }]),
                i7 = tM.makeMessageType("livekit.DataChannelReceiveState", () => [{
                    no: 1,
                    name: "publisher_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "last_seq",
                    kind: "scalar",
                    T: 13
                }]),
                ne = tM.makeMessageType("livekit.DataChannelInfo", () => [{
                    no: 1,
                    name: "label",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "id",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 3,
                    name: "target",
                    kind: "enum",
                    T: tM.getEnumType(iE)
                }]),
                nt = tM.makeMessageType("livekit.SimulateScenario", () => [{
                    no: 1,
                    name: "speaker_update",
                    kind: "scalar",
                    T: 5,
                    oneof: "scenario"
                }, {
                    no: 2,
                    name: "node_failure",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }, {
                    no: 3,
                    name: "migration",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }, {
                    no: 4,
                    name: "server_leave",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }, {
                    no: 5,
                    name: "switch_candidate_protocol",
                    kind: "enum",
                    T: tM.getEnumType(iR),
                    oneof: "scenario"
                }, {
                    no: 6,
                    name: "subscriber_bandwidth",
                    kind: "scalar",
                    T: 3,
                    oneof: "scenario"
                }, {
                    no: 7,
                    name: "disconnect_signal_on_resume",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }, {
                    no: 8,
                    name: "disconnect_signal_on_resume_no_messages",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }, {
                    no: 9,
                    name: "leave_request_full_reconnect",
                    kind: "scalar",
                    T: 8,
                    oneof: "scenario"
                }]),
                ni = tM.makeMessageType("livekit.Ping", () => [{
                    no: 1,
                    name: "timestamp",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 2,
                    name: "rtt",
                    kind: "scalar",
                    T: 3
                }]),
                nn = tM.makeMessageType("livekit.Pong", () => [{
                    no: 1,
                    name: "last_ping_timestamp",
                    kind: "scalar",
                    T: 3
                }, {
                    no: 2,
                    name: "timestamp",
                    kind: "scalar",
                    T: 3
                }]),
                nr = tM.makeMessageType("livekit.RegionSettings", () => [{
                    no: 1,
                    name: "regions",
                    kind: "message",
                    T: na,
                    repeated: !0
                }]),
                na = tM.makeMessageType("livekit.RegionInfo", () => [{
                    no: 1,
                    name: "region",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "url",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 3,
                    name: "distance",
                    kind: "scalar",
                    T: 3
                }]),
                ns = tM.makeMessageType("livekit.SubscriptionResponse", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }, {
                    no: 2,
                    name: "err",
                    kind: "enum",
                    T: tM.getEnumType(tG)
                }]),
                no = tM.makeMessageType("livekit.RequestResponse", () => [{
                    no: 1,
                    name: "request_id",
                    kind: "scalar",
                    T: 13
                }, {
                    no: 2,
                    name: "reason",
                    kind: "enum",
                    T: tM.getEnumType(nc)
                }, {
                    no: 3,
                    name: "message",
                    kind: "scalar",
                    T: 9
                }]),
                nc = tM.makeEnum("livekit.RequestResponse.Reason", [{
                    no: 0,
                    name: "OK"
                }, {
                    no: 1,
                    name: "NOT_FOUND"
                }, {
                    no: 2,
                    name: "NOT_ALLOWED"
                }, {
                    no: 3,
                    name: "LIMIT_EXCEEDED"
                }]),
                nl = tM.makeMessageType("livekit.TrackSubscribed", () => [{
                    no: 1,
                    name: "track_sid",
                    kind: "scalar",
                    T: 9
                }]);
            var nd = {
                    exports: {}
                },
                nu = nd.exports,
                nh = function() {
                    var e;
                    return Y ? nd.exports : (Y = 1, e = function() {
                        var e = function() {},
                            t = "undefined",
                            i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                            n = ["trace", "debug", "info", "warn", "error"],
                            r = {},
                            a = null;

                        function s(e, t) {
                            var i = e[t];
                            if ("function" == typeof i.bind) return i.bind(e);
                            try {
                                return Function.prototype.bind.call(i, e)
                            } catch (t) {
                                return function() {
                                    return Function.prototype.apply.apply(i, [e, arguments])
                                }
                            }
                        }

                        function o() {
                            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                        }

                        function c() {
                            for (var i = this.getLevel(), r = 0; r < n.length; r++) {
                                var a = n[r];
                                this[a] = r < i ? e : this.methodFactory(a, i, this.name)
                            }
                            if (this.log = this.debug, typeof console === t && i < this.levels.SILENT) return "No console available for logging"
                        }

                        function l(e) {
                            return function() {
                                typeof console !== t && (c.call(this), this[e].apply(this, arguments))
                            }
                        }

                        function d(n, r, a) {
                            var c;
                            return "debug" === (c = n) && (c = "log"), typeof console !== t && ("trace" === c && i ? o : void 0 !== console[c] ? s(console, c) : void 0 !== console.log ? s(console, "log") : e) || l.apply(this, arguments)
                        }

                        function u(e, i) {
                            var s, o, l, u = this,
                                h = "loglevel";

                            function p() {
                                var e;
                                if (typeof window !== t && h) {
                                    try {
                                        e = window.localStorage[h]
                                    } catch (e) {}
                                    if (typeof e === t) try {
                                        var i = window.document.cookie,
                                            n = encodeURIComponent(h),
                                            r = i.indexOf(n + "="); - 1 !== r && (e = /^([^;]+)/.exec(i.slice(r + n.length + 1))[1])
                                    } catch (e) {}
                                    return void 0 === u.levels[e] && (e = void 0), e
                                }
                            }

                            function m(e) {
                                var t = e;
                                if ("string" == typeof t && void 0 !== u.levels[t.toUpperCase()] && (t = u.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= u.levels.SILENT) return t;
                                throw TypeError("log.setLevel() called with invalid level: " + e)
                            }
                            "string" == typeof e ? h += ":" + e : "symbol" == typeof e && (h = void 0), u.name = e, u.levels = {
                                TRACE: 0,
                                DEBUG: 1,
                                INFO: 2,
                                WARN: 3,
                                ERROR: 4,
                                SILENT: 5
                            }, u.methodFactory = i || d, u.getLevel = function() {
                                return null != l ? l : null != o ? o : s
                            }, u.setLevel = function(e, i) {
                                return l = m(e), !1 !== i && function(e) {
                                    var i = (n[e] || "silent").toUpperCase();
                                    if (typeof window !== t && h) {
                                        try {
                                            window.localStorage[h] = i;
                                            return
                                        } catch (e) {}
                                        try {
                                            window.document.cookie = encodeURIComponent(h) + "=" + i + ";"
                                        } catch (e) {}
                                    }
                                }(l), c.call(u)
                            }, u.setDefaultLevel = function(e) {
                                o = m(e), p() || u.setLevel(e, !1)
                            }, u.resetLevel = function() {
                                if (l = null, typeof window !== t && h) {
                                    try {
                                        window.localStorage.removeItem(h)
                                    } catch (e) {}
                                    try {
                                        window.document.cookie = encodeURIComponent(h) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                    } catch (e) {}
                                }
                                c.call(u)
                            }, u.enableAll = function(e) {
                                u.setLevel(u.levels.TRACE, e)
                            }, u.disableAll = function(e) {
                                u.setLevel(u.levels.SILENT, e)
                            }, u.rebuild = function() {
                                if (a !== u && (s = m(a.getLevel())), c.call(u), a === u)
                                    for (var e in r) r[e].rebuild()
                            }, s = m(a ? a.getLevel() : "WARN");
                            var f = p();
                            null != f && (l = m(f)), c.call(u)
                        }(a = new u).getLogger = function(e) {
                            if ("symbol" != typeof e && "string" != typeof e || "" === e) throw TypeError("You must supply a name when creating a logger.");
                            var t = r[e];
                            return t || (t = r[e] = new u(e, a.methodFactory)), t
                        };
                        var h = typeof window !== t ? window.log : void 0;
                        return a.noConflict = function() {
                            return typeof window !== t && window.log === a && (window.log = h), a
                        }, a.getLoggers = function() {
                            return r
                        }, a.default = a, a
                    }, nd.exports ? nd.exports = e() : nu.log = e(), nd.exports)
                }();
            (m = Q || (Q = {}))[m.trace = 0] = "trace", m[m.debug = 1] = "debug", m[m.info = 2] = "info", m[m.warn = 3] = "warn", m[m.error = 4] = "error", m[m.silent = 5] = "silent", (f = X || (X = {})).Default = "livekit", f.Room = "livekit-room", f.Participant = "livekit-participant", f.Track = "livekit-track", f.Publication = "livekit-track-publication", f.Engine = "livekit-engine", f.Signal = "livekit-signal", f.PCManager = "livekit-pc-manager", f.PCTransport = "livekit-pc-transport", f.E2EE = "lk-e2ee";
            let np = nh.getLogger("livekit"),
                nm = Object.values(X).map(e => nh.getLogger(e));

            function nf(e) {
                let t = nh.getLogger(e);
                return t.setDefaultLevel(np.getLevel()), t
            }

            function ng(e, t) {
                if (t) nh.getLogger(t).setLevel(e);
                else
                    for (let t of nm) t.setLevel(e)
            }

            function nv(e, t) {
                (t ? [t] : nm).forEach(t => {
                    let i = t.methodFactory;
                    t.methodFactory = (t, n, r) => {
                        let a = i(t, n, r),
                            s = Q[t],
                            o = s >= n && s < Q.silent;
                        return (t, i) => {
                            i ? a(t, i) : a(t), o && e(s, t, i)
                        }
                    }, t.setLevel(t.getLevel())
                })
            }
            np.setDefaultLevel(Q.info);
            let nb = nh.getLogger("lk-e2ee"),
                ny = [0, 300, 1200, 2700, 4800, 7e3, 7e3, 7e3, 7e3, 7e3];
            class nk {
                nextRetryDelayInMs(e) {
                    if (e.retryCount >= this._retryDelays.length) return null;
                    let t = this._retryDelays[e.retryCount];
                    return e.retryCount <= 1 ? t : t + 1e3 * Math.random()
                }
                constructor(e) {
                    this._retryDelays = void 0 !== e ? [...e] : ny
                }
            }

            function nT(e, t, i, n) {
                return new(i || (i = Promise))(function(r, a) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, o)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function nS(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, i = e[Symbol.asyncIterator];
                return i ? i.call(e) : (e = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        i = t && e[t],
                        n = 0;
                    if (i) return i.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(i) {
                    t[i] = e[i] && function(t) {
                        return new Promise(function(n, r) {
                            var a, s, o;
                            a = n, s = r, o = (t = e[i](t)).done, Promise.resolve(t.value).then(function(e) {
                                a({
                                    value: e,
                                    done: o
                                })
                            }, s)
                        })
                    }
                }
            }
            "function" == typeof SuppressedError && SuppressedError;
            var nC = {
                    exports: {}
                },
                nw = function() {
                    if ($) return nC.exports;
                    $ = 1;
                    var e, t = "object" == typeof Reflect ? Reflect : null,
                        i = t && "function" == typeof t.apply ? t.apply : function(e, t, i) {
                            return Function.prototype.apply.call(e, t, i)
                        };
                    e = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                    } : function(e) {
                        return Object.getOwnPropertyNames(e)
                    };
                    var n = Number.isNaN || function(e) {
                        return e != e
                    };

                    function r() {
                        r.init.call(this)
                    }
                    nC.exports = r, nC.exports.once = function(e, t) {
                        return new Promise(function(i, n) {
                            var r, a, s;

                            function o(i) {
                                e.removeListener(t, c), n(i)
                            }

                            function c() {
                                "function" == typeof e.removeListener && e.removeListener("error", o), i([].slice.call(arguments))
                            }
                            m(e, t, c, {
                                once: !0
                            }), "error" !== t && (r = e, a = o, s = {
                                once: !0
                            }, "function" == typeof r.on && m(r, "error", a, s))
                        })
                    }, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
                    var a = 10;

                    function s(e) {
                        if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                    }

                    function o(e) {
                        return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
                    }

                    function c(e, t, i, n) {
                        if (s(i), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, i.listener ? i.listener : i), a = e._events), c = a[t]), void 0 === c) c = a[t] = i, ++e._eventsCount;
                        else if ("function" == typeof c ? c = a[t] = n ? [i, c] : [c, i] : n ? c.unshift(i) : c.push(i), (r = o(e)) > 0 && c.length > r && !c.warned) {
                            c.warned = !0;
                            var r, a, c, l = Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = c.length, console && console.warn && console.warn(l)
                        }
                        return e
                    }

                    function l() {
                        if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    }

                    function d(e, t, i) {
                        var n = {
                                fired: !1,
                                wrapFn: void 0,
                                target: e,
                                type: t,
                                listener: i
                            },
                            r = l.bind(n);
                        return r.listener = i, n.wrapFn = r, r
                    }

                    function u(e, t, i) {
                        var n = e._events;
                        if (void 0 === n) return [];
                        var r = n[t];
                        return void 0 === r ? [] : "function" == typeof r ? i ? [r.listener || r] : [r] : i ? function(e) {
                            for (var t = Array(e.length), i = 0; i < t.length; ++i) t[i] = e[i].listener || e[i];
                            return t
                        }(r) : p(r, r.length)
                    }

                    function h(e) {
                        var t = this._events;
                        if (void 0 !== t) {
                            var i = t[e];
                            if ("function" == typeof i) return 1;
                            if (void 0 !== i) return i.length
                        }
                        return 0
                    }

                    function p(e, t) {
                        for (var i = Array(t), n = 0; n < t; ++n) i[n] = e[n];
                        return i
                    }

                    function m(e, t, i, n) {
                        if ("function" == typeof e.on) n.once ? e.once(t, i) : e.on(t, i);
                        else if ("function" == typeof e.addEventListener) e.addEventListener(t, function r(a) {
                            n.once && e.removeEventListener(t, r), i(a)
                        });
                        else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
                    }
                    return Object.defineProperty(r, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                            a = e
                        }
                    }), r.init = function() {
                        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                    }, r.prototype.setMaxListeners = function(e) {
                        if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                        return this._maxListeners = e, this
                    }, r.prototype.getMaxListeners = function() {
                        return o(this)
                    }, r.prototype.emit = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                        var r = "error" === e,
                            a = this._events;
                        if (void 0 !== a) r = r && void 0 === a.error;
                        else if (!r) return !1;
                        if (r) {
                            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                            var s, o = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                            throw o.context = s, o
                        }
                        var c = a[e];
                        if (void 0 === c) return !1;
                        if ("function" == typeof c) i(c, this, t);
                        else
                            for (var l = c.length, d = p(c, l), n = 0; n < l; ++n) i(d[n], this, t);
                        return !0
                    }, r.prototype.addListener = function(e, t) {
                        return c(this, e, t, !1)
                    }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(e, t) {
                        return c(this, e, t, !0)
                    }, r.prototype.once = function(e, t) {
                        return s(t), this.on(e, d(this, e, t)), this
                    }, r.prototype.prependOnceListener = function(e, t) {
                        return s(t), this.prependListener(e, d(this, e, t)), this
                    }, r.prototype.removeListener = function(e, t) {
                        var i, n, r, a, o;
                        if (s(t), void 0 === (n = this._events) || void 0 === (i = n[e])) return this;
                        if (i === t || i.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || t));
                        else if ("function" != typeof i) {
                            for (r = -1, a = i.length - 1; a >= 0; a--)
                                if (i[a] === t || i[a].listener === t) {
                                    o = i[a].listener, r = a;
                                    break
                                } if (r < 0) return this;
                            0 === r ? i.shift() : function(e, t) {
                                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                e.pop()
                            }(i, r), 1 === i.length && (n[e] = i[0]), void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
                        }
                        return this
                    }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(e) {
                        var t, i, n;
                        if (void 0 === (i = this._events)) return this;
                        if (void 0 === i.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== i[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[e]), this;
                        if (0 == arguments.length) {
                            var r, a = Object.keys(i);
                            for (n = 0; n < a.length; ++n) "removeListener" !== (r = a[n]) && this.removeAllListeners(r);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                        }
                        if ("function" == typeof(t = i[e])) this.removeListener(e, t);
                        else if (void 0 !== t)
                            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
                        return this
                    }, r.prototype.listeners = function(e) {
                        return u(this, e, !0)
                    }, r.prototype.rawListeners = function(e) {
                        return u(this, e, !1)
                    }, r.listenerCount = function(e, t) {
                        return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
                    }, r.prototype.listenerCount = h, r.prototype.eventNames = function() {
                        return this._eventsCount > 0 ? e(this._events) : []
                    }, nC.exports
                }();
            let nE = !0,
                nP = !0;

            function nR(e, t, i) {
                let n = e.match(t);
                return n && n.length >= i && parseFloat(n[i], 10)
            }

            function nO(e, t, i) {
                if (!e.RTCPeerConnection) return;
                let n = e.RTCPeerConnection.prototype,
                    r = n.addEventListener;
                n.addEventListener = function(e, n) {
                    if (e !== t) return r.apply(this, arguments);
                    let a = e => {
                        let t = i(e);
                        t && (n.handleEvent ? n.handleEvent(t) : n(t))
                    };
                    return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map), this._eventMap[t].set(n, a), r.apply(this, [e, a])
                };
                let a = n.removeEventListener;
                n.removeEventListener = function(e, i) {
                    if (e !== t || !this._eventMap || !this._eventMap[t] || !this._eventMap[t].has(i)) return a.apply(this, arguments);
                    let n = this._eventMap[t].get(i);
                    return this._eventMap[t].delete(i), 0 === this._eventMap[t].size && delete this._eventMap[t], 0 === Object.keys(this._eventMap).length && delete this._eventMap, a.apply(this, [e, n])
                }, Object.defineProperty(n, "on" + t, {
                    get() {
                        return this["_on" + t]
                    },
                    set(e) {
                        this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }

            function nI(e) {
                return "boolean" != typeof e ? Error("Argument type: " + typeof e + ". Please use a boolean.") : (nE = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
            }

            function nx(e) {
                return "boolean" != typeof e ? Error("Argument type: " + typeof e + ". Please use a boolean.") : (nP = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
            }

            function nD() {
                "object" == typeof window && (nE || "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments))
            }

            function nM(e, t) {
                nP && console.warn(e + " is deprecated, please use " + t + " instead.")
            }

            function n_(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function nA(e, t, i) {
                let n = i ? "outbound-rtp" : "inbound-rtp",
                    r = new Map;
                if (null === t) return r;
                let a = [];
                return e.forEach(e => {
                    "track" === e.type && e.trackIdentifier === t.id && a.push(e)
                }), a.forEach(t => {
                    e.forEach(i => {
                        i.type === n && i.trackId === t.id && function e(t, i, n) {
                            !i || n.has(i.id) || (n.set(i.id, i), Object.keys(i).forEach(r => {
                                r.endsWith("Id") ? e(t, t.get(i[r]), n) : r.endsWith("Ids") && i[r].forEach(i => {
                                    e(t, t.get(i), n)
                                })
                            }))
                        }(e, i, r)
                    })
                }), r
            }

            function nN(e, t) {
                let i = e && e.navigator;
                if (!i.mediaDevices) return;
                let n = function(e) {
                        if ("object" != typeof e || e.mandatory || e.optional) return e;
                        let t = {};
                        return Object.keys(e).forEach(i => {
                            if ("require" === i || "advanced" === i || "mediaSource" === i) return;
                            let n = "object" == typeof e[i] ? e[i] : {
                                ideal: e[i]
                            };
                            void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
                            let r = function(e, t) {
                                return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                            };
                            if (void 0 !== n.ideal) {
                                t.optional = t.optional || [];
                                let e = {};
                                "number" == typeof n.ideal ? (e[r("min", i)] = n.ideal, t.optional.push(e), (e = {})[r("max", i)] = n.ideal) : e[r("", i)] = n.ideal, t.optional.push(e)
                            }
                            void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", i)] = n.exact) : ["min", "max"].forEach(e => {
                                void 0 !== n[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, i)] = n[e])
                            })
                        }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
                    },
                    r = function(e, r) {
                        if (t.version >= 61) return r(e);
                        if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
                            let t = function(e, t, i) {
                                t in e && !(i in e) && (e[i] = e[t], delete e[t])
                            };
                            t((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), t(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = n(e.audio)
                        }
                        if (e && "object" == typeof e.video) {
                            let a = e.video.facingMode;
                            a = a && ("object" == typeof a ? a : {
                                ideal: a
                            });
                            let s = t.version < 66;
                            if (a && ("user" === a.exact || "environment" === a.exact || "user" === a.ideal || "environment" === a.ideal) && !(i.mediaDevices.getSupportedConstraints && i.mediaDevices.getSupportedConstraints().facingMode && !s)) {
                                let t;
                                if (delete e.video.facingMode, "environment" === a.exact || "environment" === a.ideal ? t = ["back", "rear"] : ("user" === a.exact || "user" === a.ideal) && (t = ["front"]), t) return i.mediaDevices.enumerateDevices().then(i => {
                                    let s = (i = i.filter(e => "videoinput" === e.kind)).find(e => t.some(t => e.label.toLowerCase().includes(t)));
                                    return !s && i.length && t.includes("back") && (s = i[i.length - 1]), s && (e.video.deviceId = a.exact ? {
                                        exact: s.deviceId
                                    } : {
                                        ideal: s.deviceId
                                    }), e.video = n(e.video), nD("chrome: " + JSON.stringify(e)), r(e)
                                })
                            }
                            e.video = n(e.video)
                        }
                        return nD("chrome: " + JSON.stringify(e)), r(e)
                    },
                    a = function(e) {
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
                            toString() {
                                return this.name + (this.message && ": ") + this.message
                            }
                        }
                    };
                if (i.getUserMedia = (function(e, t, n) {
                        r(e, e => {
                            i.webkitGetUserMedia(e, t, e => {
                                n && n(a(e))
                            })
                        })
                    }).bind(i), i.mediaDevices.getUserMedia) {
                    let e = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
                    i.mediaDevices.getUserMedia = function(t) {
                        return r(t, t => e(t).then(e => {
                            if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach(e => {
                                e.stop()
                            }), new DOMException("", "NotFoundError");
                            return e
                        }, e => Promise.reject(a(e))))
                    }
                }
            }

            function nL(e) {
                e.MediaStream = e.MediaStream || e.webkitMediaStream
            }

            function nU(e) {
                if ("object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) nO(e, "track", e => (e.transceiver || Object.defineProperty(e, "transceiver", {
                    value: {
                        receiver: e.receiver
                    }
                }), e));
                else {
                    Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                        get() {
                            return this._ontrack
                        },
                        set(e) {
                            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                    let t = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        return this._ontrackpoly || (this._ontrackpoly = t => {
                            t.stream.addEventListener("addtrack", i => {
                                let n;
                                n = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(e => e.track && e.track.id === i.track.id) : {
                                    track: i.track
                                };
                                let r = new Event("track");
                                r.track = i.track, r.receiver = n, r.transceiver = {
                                    receiver: n
                                }, r.streams = [t.stream], this.dispatchEvent(r)
                            }), t.stream.getTracks().forEach(i => {
                                let n;
                                n = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(e => e.track && e.track.id === i.id) : {
                                    track: i
                                };
                                let r = new Event("track");
                                r.track = i, r.receiver = n, r.transceiver = {
                                    receiver: n
                                }, r.streams = [t.stream], this.dispatchEvent(r)
                            })
                        }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
                    }
                }
            }

            function nj(e) {
                if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                    let t = function(e, t) {
                        return {
                            track: t,
                            get dtmf() {
                                return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                            },
                            _pc: e
                        }
                    };
                    if (!e.RTCPeerConnection.prototype.getSenders) {
                        e.RTCPeerConnection.prototype.getSenders = function() {
                            return this._senders = this._senders || [], this._senders.slice()
                        };
                        let i = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addTrack = function(e, n) {
                            let r = i.apply(this, arguments);
                            return r || (r = t(this, e), this._senders.push(r)), r
                        };
                        let n = e.RTCPeerConnection.prototype.removeTrack;
                        e.RTCPeerConnection.prototype.removeTrack = function(e) {
                            n.apply(this, arguments);
                            let t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1)
                        }
                    }
                    let i = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function(e) {
                        this._senders = this._senders || [], i.apply(this, [e]), e.getTracks().forEach(e => {
                            this._senders.push(t(this, e))
                        })
                    };
                    let n = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function(e) {
                        this._senders = this._senders || [], n.apply(this, [e]), e.getTracks().forEach(e => {
                            let t = this._senders.find(t => t.track === e);
                            t && this._senders.splice(this._senders.indexOf(t), 1)
                        })
                    }
                } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                    let t = e.RTCPeerConnection.prototype.getSenders;
                    e.RTCPeerConnection.prototype.getSenders = function() {
                        let e = t.apply(this, []);
                        return e.forEach(e => e._pc = this), e
                    }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                        get() {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                        }
                    })
                }
            }

            function nF(e) {
                if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
                if (!("getStats" in e.RTCRtpSender.prototype)) {
                    let t = e.RTCPeerConnection.prototype.getSenders;
                    t && (e.RTCPeerConnection.prototype.getSenders = function() {
                        let e = t.apply(this, []);
                        return e.forEach(e => e._pc = this), e
                    });
                    let i = e.RTCPeerConnection.prototype.addTrack;
                    i && (e.RTCPeerConnection.prototype.addTrack = function() {
                        let e = i.apply(this, arguments);
                        return e._pc = this, e
                    }), e.RTCRtpSender.prototype.getStats = function() {
                        let e = this;
                        return this._pc.getStats().then(t => nA(t, e.track, !0))
                    }
                }
                if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                    let t = e.RTCPeerConnection.prototype.getReceivers;
                    t && (e.RTCPeerConnection.prototype.getReceivers = function() {
                        let e = t.apply(this, []);
                        return e.forEach(e => e._pc = this), e
                    }), nO(e, "track", e => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
                        let e = this;
                        return this._pc.getStats().then(t => nA(t, e.track, !1))
                    }
                }
                if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
                let t = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function() {
                    if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                        let e, t, i, n = arguments[0];
                        return (this.getSenders().forEach(t => {
                            t.track === n && (e ? i = !0 : e = t)
                        }), this.getReceivers().forEach(e => (e.track === n && (t ? i = !0 : t = e), e.track === n)), i || e && t) ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : e ? e.getStats() : t ? t.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                    }
                    return t.apply(this, arguments)
                }
            }

            function nB(e) {
                e.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(e => this._shimmedLocalStreams[e][0])
                };
                let t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function(e, i) {
                    if (!i) return t.apply(this, arguments);
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    let n = t.apply(this, arguments);
                    return this._shimmedLocalStreams[i.id] ? -1 === this._shimmedLocalStreams[i.id].indexOf(n) && this._shimmedLocalStreams[i.id].push(n) : this._shimmedLocalStreams[i.id] = [i, n], n
                };
                let i = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function(e) {
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(e => {
                        if (this.getSenders().find(t => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError")
                    });
                    let t = this.getSenders();
                    i.apply(this, arguments);
                    let n = this.getSenders().filter(e => -1 === t.indexOf(e));
                    this._shimmedLocalStreams[e.id] = [e].concat(n)
                };
                let n = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function(e) {
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], n.apply(this, arguments)
                };
                let r = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function(e) {
                    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(t => {
                        let i = this._shimmedLocalStreams[t].indexOf(e); - 1 !== i && this._shimmedLocalStreams[t].splice(i, 1), 1 === this._shimmedLocalStreams[t].length && delete this._shimmedLocalStreams[t]
                    }), r.apply(this, arguments)
                }
            }

            function nV(e, t) {
                if (!e.RTCPeerConnection) return;
                if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return nB(e);
                let i = e.RTCPeerConnection.prototype.getLocalStreams;
                e.RTCPeerConnection.prototype.getLocalStreams = function() {
                    let e = i.apply(this);
                    return this._reverseStreams = this._reverseStreams || {}, e.map(e => this._reverseStreams[e.id])
                };
                let n = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function(t) {
                    if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(e => {
                            if (this.getSenders().find(t => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError")
                        }), !this._reverseStreams[t.id]) {
                        let i = new e.MediaStream(t.getTracks());
                        this._streams[t.id] = i, this._reverseStreams[i.id] = t, t = i
                    }
                    n.apply(this, [t])
                };
                let r = e.RTCPeerConnection.prototype.removeStream;

                function a(e, t) {
                    let i = t.sdp;
                    return Object.keys(e._reverseStreams || []).forEach(t => {
                        let n = e._reverseStreams[t],
                            r = e._streams[n.id];
                        i = i.replace(RegExp(r.id, "g"), n.id)
                    }), new RTCSessionDescription({
                        type: t.type,
                        sdp: i
                    })
                }
                e.RTCPeerConnection.prototype.removeStream = function(e) {
                    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, r.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
                }, e.RTCPeerConnection.prototype.addTrack = function(t, i) {
                    if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                    let n = [].slice.call(arguments, 1);
                    if (1 !== n.length || !n[0].getTracks().find(e => e === t)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                    if (this.getSenders().find(e => e.track === t)) throw new DOMException("Track already exists.", "InvalidAccessError");
                    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                    let r = this._streams[i.id];
                    if (r) r.addTrack(t), Promise.resolve().then(() => {
                        this.dispatchEvent(new Event("negotiationneeded"))
                    });
                    else {
                        let n = new e.MediaStream([t]);
                        this._streams[i.id] = n, this._reverseStreams[n.id] = i, this.addStream(n)
                    }
                    return this.getSenders().find(e => e.track === t)
                }, ["createOffer", "createAnswer"].forEach(function(t) {
                    let i = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = ({
                        [t]() {
                            let e = arguments,
                                t = arguments.length && "function" == typeof arguments[0];
                            return t ? i.apply(this, [t => {
                                let i = a(this, t);
                                e[0].apply(null, [i])
                            }, t => {
                                e[1] && e[1].apply(null, t)
                            }, arguments[2]]) : i.apply(this, arguments).then(e => a(this, e))
                        }
                    })[t]
                });
                let s = e.RTCPeerConnection.prototype.setLocalDescription;
                e.RTCPeerConnection.prototype.setLocalDescription = function() {
                    var e, t;
                    let i;
                    return arguments.length && arguments[0].type ? (arguments[0] = (e = this, t = arguments[0], i = t.sdp, Object.keys(e._reverseStreams || []).forEach(t => {
                        let n = e._reverseStreams[t],
                            r = e._streams[n.id];
                        i = i.replace(RegExp(n.id, "g"), r.id)
                    }), new RTCSessionDescription({
                        type: t.type,
                        sdp: i
                    })), s.apply(this, arguments)) : s.apply(this, arguments)
                };
                let o = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                    get() {
                        let e = o.get.apply(this);
                        return "" === e.type ? e : a(this, e)
                    }
                }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
                    let t;
                    if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                    if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                    if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                    this._streams = this._streams || {}, Object.keys(this._streams).forEach(i => {
                        this._streams[i].getTracks().find(t => e.track === t) && (t = this._streams[i])
                    }), t && (1 === t.getTracks().length ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
                }
            }

            function nq(e, t) {
                !e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
                    let i = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = ({
                        [t]() {
                            return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), i.apply(this, arguments)
                        }
                    })[t]
                })
            }

            function nW(e, t) {
                nO(e, "negotiationneeded", e => {
                    let i = e.target;
                    if (!(t.version < 72) && (!i.getConfiguration || "plan-b" !== i.getConfiguration().sdpSemantics) || "stable" === i.signalingState) return e
                })
            }
            var nK = Object.freeze({
                __proto__: null,
                fixNegotiationNeeded: nW,
                shimAddTrackRemoveTrack: nV,
                shimAddTrackRemoveTrackWithNative: nB,
                shimGetSendersWithDtmf: nj,
                shimGetUserMedia: nN,
                shimMediaStream: nL,
                shimOnTrack: nU,
                shimPeerConnection: nq,
                shimSenderReceiverGetStats: nF
            });

            function nH(e, t) {
                let i = e && e.navigator,
                    n = e && e.MediaStreamTrack;
                if (i.getUserMedia = function(e, t, n) {
                        nM("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), i.mediaDevices.getUserMedia(e).then(t, n)
                    }, !(t.version > 55 && "autoGainControl" in i.mediaDevices.getSupportedConstraints())) {
                    let e = function(e, t, i) {
                            t in e && !(i in e) && (e[i] = e[t], delete e[t])
                        },
                        t = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
                    if (i.mediaDevices.getUserMedia = function(i) {
                            return "object" == typeof i && "object" == typeof i.audio && (e((i = JSON.parse(JSON.stringify(i))).audio, "autoGainControl", "mozAutoGainControl"), e(i.audio, "noiseSuppression", "mozNoiseSuppression")), t(i)
                        }, n && n.prototype.getSettings) {
                        let t = n.prototype.getSettings;
                        n.prototype.getSettings = function() {
                            let i = t.apply(this, arguments);
                            return e(i, "mozAutoGainControl", "autoGainControl"), e(i, "mozNoiseSuppression", "noiseSuppression"), i
                        }
                    }
                    if (n && n.prototype.applyConstraints) {
                        let t = n.prototype.applyConstraints;
                        n.prototype.applyConstraints = function(i) {
                            return "audio" === this.kind && "object" == typeof i && (e(i = JSON.parse(JSON.stringify(i)), "autoGainControl", "mozAutoGainControl"), e(i, "noiseSuppression", "mozNoiseSuppression")), t.apply(this, [i])
                        }
                    }
                }
            }

            function nG(e) {
                "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                    get() {
                        return {
                            receiver: this.receiver
                        }
                    }
                })
            }

            function nz(e, t) {
                if ("object" != typeof e || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return;
                !e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
                    let i = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = ({
                        [t]() {
                            return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), i.apply(this, arguments)
                        }
                    })[t]
                });
                let i = {
                        inboundrtp: "inbound-rtp",
                        outboundrtp: "outbound-rtp",
                        candidatepair: "candidate-pair",
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    },
                    n = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function() {
                    let [e, r, a] = arguments;
                    return n.apply(this, [e || null]).then(e => {
                        if (t.version < 53 && !r) try {
                            e.forEach(e => {
                                e.type = i[e.type] || e.type
                            })
                        } catch (t) {
                            if ("TypeError" !== t.name) throw t;
                            e.forEach((t, n) => {
                                e.set(n, Object.assign({}, t, {
                                    type: i[t.type] || t.type
                                }))
                            })
                        }
                        return e
                    }).then(r, a)
                }
            }

            function nJ(e) {
                if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
                let t = e.RTCPeerConnection.prototype.getSenders;
                t && (e.RTCPeerConnection.prototype.getSenders = function() {
                    let e = t.apply(this, []);
                    return e.forEach(e => e._pc = this), e
                });
                let i = e.RTCPeerConnection.prototype.addTrack;
                i && (e.RTCPeerConnection.prototype.addTrack = function() {
                    let e = i.apply(this, arguments);
                    return e._pc = this, e
                }), e.RTCRtpSender.prototype.getStats = function() {
                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
                }
            }

            function nY(e) {
                if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
                let t = e.RTCPeerConnection.prototype.getReceivers;
                t && (e.RTCPeerConnection.prototype.getReceivers = function() {
                    let e = t.apply(this, []);
                    return e.forEach(e => e._pc = this), e
                }), nO(e, "track", e => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
                    return this._pc.getStats(this.track)
                }
            }

            function nQ(e) {
                !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
                    nM("removeStream", "removeTrack"), this.getSenders().forEach(t => {
                        t.track && e.getTracks().includes(t.track) && this.removeTrack(t)
                    })
                })
            }

            function nX(e) {
                e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
            }

            function n$(e) {
                if (!("object" == typeof e && e.RTCPeerConnection)) return;
                let t = e.RTCPeerConnection.prototype.addTransceiver;
                t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
                    this.setParametersPromises = [];
                    let e = arguments[1] && arguments[1].sendEncodings;
                    void 0 === e && (e = []);
                    let i = (e = [...e]).length > 0;
                    i && e.forEach(e => {
                        if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw TypeError("Invalid RID value provided.");
                        if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw RangeError("scale_resolution_down_by must be >= 1.0");
                        if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw RangeError("max_framerate must be >= 0.0")
                    });
                    let n = t.apply(this, arguments);
                    if (i) {
                        let {
                            sender: t
                        } = n, i = t.getParameters();
                        "encodings" in i && (1 !== i.encodings.length || 0 !== Object.keys(i.encodings[0]).length) || (i.encodings = e, t.sendEncodings = e, this.setParametersPromises.push(t.setParameters(i).then(() => {
                            delete t.sendEncodings
                        }).catch(() => {
                            delete t.sendEncodings
                        })))
                    }
                    return n
                })
            }

            function nZ(e) {
                if (!("object" == typeof e && e.RTCRtpSender)) return;
                let t = e.RTCRtpSender.prototype.getParameters;
                t && (e.RTCRtpSender.prototype.getParameters = function() {
                    let e = t.apply(this, arguments);
                    return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e
                })
            }

            function n0(e) {
                if (!("object" == typeof e && e.RTCPeerConnection)) return;
                let t = e.RTCPeerConnection.prototype.createOffer;
                e.RTCPeerConnection.prototype.createOffer = function() {
                    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
                        this.setParametersPromises = []
                    }) : t.apply(this, arguments)
                }
            }

            function n1(e) {
                if (!("object" == typeof e && e.RTCPeerConnection)) return;
                let t = e.RTCPeerConnection.prototype.createAnswer;
                e.RTCPeerConnection.prototype.createAnswer = function() {
                    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
                        this.setParametersPromises = []
                    }) : t.apply(this, arguments)
                }
            }
            var n2 = Object.freeze({
                __proto__: null,
                shimAddTransceiver: n$,
                shimCreateAnswer: n1,
                shimCreateOffer: n0,
                shimGetDisplayMedia: function(e, t) {
                    e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(i) {
                        if (!(i && i.video)) {
                            let e = new DOMException("getDisplayMedia without video constraints is undefined");
                            return e.name = "NotFoundError", e.code = 8, Promise.reject(e)
                        }
                        return !0 === i.video ? i.video = {
                            mediaSource: t
                        } : i.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(i)
                    })
                },
                shimGetParameters: nZ,
                shimGetUserMedia: nH,
                shimOnTrack: nG,
                shimPeerConnection: nz,
                shimRTCDataChannel: nX,
                shimReceiverGetStats: nY,
                shimRemoveStream: nQ,
                shimSenderGetStats: nJ
            });

            function n3(e) {
                if ("object" == typeof e && e.RTCPeerConnection) {
                    if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                            return this._localStreams || (this._localStreams = []), this._localStreams
                        }), !("addStream" in e.RTCPeerConnection.prototype)) {
                        let t = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addStream = function(e) {
                            this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach(i => t.call(this, i, e)), e.getVideoTracks().forEach(i => t.call(this, i, e))
                        }, e.RTCPeerConnection.prototype.addTrack = function(e) {
                            for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                            return n && n.forEach(e => {
                                this._localStreams ? this._localStreams.includes(e) || this._localStreams.push(e) : this._localStreams = [e]
                            }), t.apply(this, arguments)
                        }
                    }
                    "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
                        this._localStreams || (this._localStreams = []);
                        let t = this._localStreams.indexOf(e);
                        if (-1 === t) return;
                        this._localStreams.splice(t, 1);
                        let i = e.getTracks();
                        this.getSenders().forEach(e => {
                            i.includes(e.track) && this.removeTrack(e)
                        })
                    })
                }
            }

            function n4(e) {
                if ("object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                        return this._remoteStreams ? this._remoteStreams : []
                    }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
                    Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                        get() {
                            return this._onaddstream
                        },
                        set(e) {
                            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = e => {
                                e.streams.forEach(e => {
                                    if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e)) return;
                                    this._remoteStreams.push(e);
                                    let t = new Event("addstream");
                                    t.stream = e, this.dispatchEvent(t)
                                })
                            })
                        }
                    });
                    let t = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                        let e = this;
                        return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t) {
                            t.streams.forEach(t => {
                                if (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0) return;
                                e._remoteStreams.push(t);
                                let i = new Event("addstream");
                                i.stream = t, e.dispatchEvent(i)
                            })
                        }), t.apply(e, arguments)
                    }
                }
            }

            function n5(e) {
                if ("object" != typeof e || !e.RTCPeerConnection) return;
                let t = e.RTCPeerConnection.prototype,
                    i = t.createOffer,
                    n = t.createAnswer,
                    r = t.setLocalDescription,
                    a = t.setRemoteDescription,
                    s = t.addIceCandidate;
                t.createOffer = function(e, t) {
                    let n = arguments.length >= 2 ? arguments[2] : arguments[0],
                        r = i.apply(this, [n]);
                    return t ? (r.then(e, t), Promise.resolve()) : r
                }, t.createAnswer = function(e, t) {
                    let i = arguments.length >= 2 ? arguments[2] : arguments[0],
                        r = n.apply(this, [i]);
                    return t ? (r.then(e, t), Promise.resolve()) : r
                };
                let o = function(e, t, i) {
                    let n = r.apply(this, [e]);
                    return i ? (n.then(t, i), Promise.resolve()) : n
                };
                t.setLocalDescription = o, t.setRemoteDescription = o = function(e, t, i) {
                    let n = a.apply(this, [e]);
                    return i ? (n.then(t, i), Promise.resolve()) : n
                }, t.addIceCandidate = function(e, t, i) {
                    let n = s.apply(this, [e]);
                    return i ? (n.then(t, i), Promise.resolve()) : n
                }
            }

            function n9(e) {
                let t = e && e.navigator;
                if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                    let e = t.mediaDevices,
                        i = e.getUserMedia.bind(e);
                    t.mediaDevices.getUserMedia = e => i(n6(e))
                }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(e, i, n) {
                    t.mediaDevices.getUserMedia(e).then(i, n)
                }).bind(t))
            }

            function n6(e) {
                return e && void 0 !== e.video ? Object.assign({}, e, {
                    video: function e(t) {
                        return n_(t) ? Object.keys(t).reduce(function(i, n) {
                            let r = n_(t[n]),
                                a = r ? e(t[n]) : t[n],
                                s = r && !Object.keys(a).length;
                            return void 0 === a || s ? i : Object.assign(i, {
                                [n]: a
                            })
                        }, {}) : t
                    }(e.video)
                }) : e
            }

            function n8(e) {
                if (!e.RTCPeerConnection) return;
                let t = e.RTCPeerConnection;
                e.RTCPeerConnection = function(e, i) {
                    if (e && e.iceServers) {
                        let t = [];
                        for (let i = 0; i < e.iceServers.length; i++) {
                            let n = e.iceServers[i];
                            void 0 === n.urls && n.url ? (nM("RTCIceServer.url", "RTCIceServer.urls"), (n = JSON.parse(JSON.stringify(n))).urls = n.url, delete n.url, t.push(n)) : t.push(e.iceServers[i])
                        }
                        e.iceServers = t
                    }
                    return new t(e, i)
                }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                    get: () => t.generateCertificate
                })
            }

            function n7(e) {
                "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                    get() {
                        return {
                            receiver: this.receiver
                        }
                    }
                })
            }

            function re(e) {
                let t = e.RTCPeerConnection.prototype.createOffer;
                e.RTCPeerConnection.prototype.createOffer = function(e) {
                    if (e) {
                        void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                        let t = this.getTransceivers().find(e => "audio" === e.receiver.track.kind);
                        !1 === e.offerToReceiveAudio && t ? "sendrecv" === t.direction ? t.setDirection ? t.setDirection("sendonly") : t.direction = "sendonly" : "recvonly" === t.direction && (t.setDirection ? t.setDirection("inactive") : t.direction = "inactive") : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio", {
                            direction: "recvonly"
                        }), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                        let i = this.getTransceivers().find(e => "video" === e.receiver.track.kind);
                        !1 === e.offerToReceiveVideo && i ? "sendrecv" === i.direction ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : "recvonly" === i.direction && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : !0 !== e.offerToReceiveVideo || i || this.addTransceiver("video", {
                            direction: "recvonly"
                        })
                    }
                    return t.apply(this, arguments)
                }
            }

            function rt(e) {
                "object" != typeof e || e.AudioContext || (e.AudioContext = e.webkitAudioContext)
            }
            var ri = Object.freeze({
                    __proto__: null,
                    shimAudioContext: rt,
                    shimCallbacksAPI: n5,
                    shimConstraints: n6,
                    shimCreateOfferLegacy: re,
                    shimGetUserMedia: n9,
                    shimLocalStreamsAPI: n3,
                    shimRTCIceServerUrls: n8,
                    shimRemoteStreamsAPI: n4,
                    shimTrackEventTransceiver: n7
                }),
                rn = {
                    exports: {}
                },
                rr = function() {
                    let e;
                    return Z ? rn.exports : (Z = 1, (e = {}).generateIdentifier = function() {
                        return Math.random().toString(36).substring(2, 12)
                    }, e.localCName = e.generateIdentifier(), e.splitLines = function(e) {
                        return e.trim().split("\n").map(e => e.trim())
                    }, e.splitSections = function(e) {
                        return e.split("\nm=").map((e, t) => (t > 0 ? "m=" + e : e).trim() + "\r\n")
                    }, e.getDescription = function(t) {
                        let i = e.splitSections(t);
                        return i && i[0]
                    }, e.getMediaSections = function(t) {
                        let i = e.splitSections(t);
                        return i.shift(), i
                    }, e.matchPrefix = function(t, i) {
                        return e.splitLines(t).filter(e => 0 === e.indexOf(i))
                    }, e.parseCandidate = function(e) {
                        let t, i = {
                            foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                            component: {
                                1: "rtp",
                                2: "rtcp"
                            } [t[1]] || t[1],
                            protocol: t[2].toLowerCase(),
                            priority: parseInt(t[3], 10),
                            ip: t[4],
                            address: t[4],
                            port: parseInt(t[5], 10),
                            type: t[7]
                        };
                        for (let e = 8; e < t.length; e += 2) switch (t[e]) {
                            case "raddr":
                                i.relatedAddress = t[e + 1];
                                break;
                            case "rport":
                                i.relatedPort = parseInt(t[e + 1], 10);
                                break;
                            case "tcptype":
                                i.tcpType = t[e + 1];
                                break;
                            case "ufrag":
                                i.ufrag = t[e + 1], i.usernameFragment = t[e + 1];
                                break;
                            default:
                                void 0 === i[t[e]] && (i[t[e]] = t[e + 1])
                        }
                        return i
                    }, e.writeCandidate = function(e) {
                        let t = [];
                        t.push(e.foundation);
                        let i = e.component;
                        "rtp" === i ? t.push(1) : "rtcp" === i ? t.push(2) : t.push(i), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
                        let n = e.type;
                        return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
                    }, e.parseIceOptions = function(e) {
                        return e.substring(14).split(" ")
                    }, e.parseRtpMap = function(e) {
                        let t = e.substring(9).split(" "),
                            i = {
                                payloadType: parseInt(t.shift(), 10)
                            };
                        return i.name = (t = t[0].split("/"))[0], i.clockRate = parseInt(t[1], 10), i.channels = 3 === t.length ? parseInt(t[2], 10) : 1, i.numChannels = i.channels, i
                    }, e.writeRtpMap = function(e) {
                        let t = e.payloadType;
                        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                        let i = e.channels || e.numChannels || 1;
                        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== i ? "/" + i : "") + "\r\n"
                    }, e.parseExtmap = function(e) {
                        let t = e.substring(9).split(" ");
                        return {
                            id: parseInt(t[0], 10),
                            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                            uri: t[1],
                            attributes: t.slice(2).join(" ")
                        }
                    }, e.writeExtmap = function(e) {
                        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + (e.attributes ? " " + e.attributes : "") + "\r\n"
                    }, e.parseFmtp = function(e) {
                        let t, i = {},
                            n = e.substring(e.indexOf(" ") + 1).split(";");
                        for (let e = 0; e < n.length; e++) i[(t = n[e].trim().split("="))[0].trim()] = t[1];
                        return i
                    }, e.writeFmtp = function(e) {
                        let t = "",
                            i = e.payloadType;
                        if (void 0 !== e.preferredPayloadType && (i = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                            let n = [];
                            Object.keys(e.parameters).forEach(t => {
                                void 0 !== e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t)
                            }), t += "a=fmtp:" + i + " " + n.join(";") + "\r\n"
                        }
                        return t
                    }, e.parseRtcpFb = function(e) {
                        let t = e.substring(e.indexOf(" ") + 1).split(" ");
                        return {
                            type: t.shift(),
                            parameter: t.join(" ")
                        }
                    }, e.writeRtcpFb = function(e) {
                        let t = "",
                            i = e.payloadType;
                        return void 0 !== e.preferredPayloadType && (i = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(e => {
                            t += "a=rtcp-fb:" + i + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
                        }), t
                    }, e.parseSsrcMedia = function(e) {
                        let t = e.indexOf(" "),
                            i = {
                                ssrc: parseInt(e.substring(7, t), 10)
                            },
                            n = e.indexOf(":", t);
                        return n > -1 ? (i.attribute = e.substring(t + 1, n), i.value = e.substring(n + 1)) : i.attribute = e.substring(t + 1), i
                    }, e.parseSsrcGroup = function(e) {
                        let t = e.substring(13).split(" ");
                        return {
                            semantics: t.shift(),
                            ssrcs: t.map(e => parseInt(e, 10))
                        }
                    }, e.getMid = function(t) {
                        let i = e.matchPrefix(t, "a=mid:")[0];
                        if (i) return i.substring(6)
                    }, e.parseFingerprint = function(e) {
                        let t = e.substring(14).split(" ");
                        return {
                            algorithm: t[0].toLowerCase(),
                            value: t[1].toUpperCase()
                        }
                    }, e.getDtlsParameters = function(t, i) {
                        return {
                            role: "auto",
                            fingerprints: e.matchPrefix(t + i, "a=fingerprint:").map(e.parseFingerprint)
                        }
                    }, e.writeDtlsParameters = function(e, t) {
                        let i = "a=setup:" + t + "\r\n";
                        return e.fingerprints.forEach(e => {
                            i += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
                        }), i
                    }, e.parseCryptoLine = function(e) {
                        let t = e.substring(9).split(" ");
                        return {
                            tag: parseInt(t[0], 10),
                            cryptoSuite: t[1],
                            keyParams: t[2],
                            sessionParams: t.slice(3)
                        }
                    }, e.writeCryptoLine = function(t) {
                        return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + ("object" == typeof t.keyParams ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + "\r\n"
                    }, e.parseCryptoKeyParams = function(e) {
                        if (0 !== e.indexOf("inline:")) return null;
                        let t = e.substring(7).split("|");
                        return {
                            keyMethod: "inline",
                            keySalt: t[0],
                            lifeTime: t[1],
                            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                            mkiLength: t[2] ? t[2].split(":")[1] : void 0
                        }
                    }, e.writeCryptoKeyParams = function(e) {
                        return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
                    }, e.getCryptoParameters = function(t, i) {
                        return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine)
                    }, e.getIceParameters = function(t, i) {
                        let n = e.matchPrefix(t + i, "a=ice-ufrag:")[0],
                            r = e.matchPrefix(t + i, "a=ice-pwd:")[0];
                        return n && r ? {
                            usernameFragment: n.substring(12),
                            password: r.substring(10)
                        } : null
                    }, e.writeIceParameters = function(e) {
                        let t = "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
                        return e.iceLite && (t += "a=ice-lite\r\n"), t
                    }, e.parseRtpParameters = function(t) {
                        let i = {
                                codecs: [],
                                headerExtensions: [],
                                fecMechanisms: [],
                                rtcp: []
                            },
                            n = e.splitLines(t)[0].split(" ");
                        i.profile = n[2];
                        for (let r = 3; r < n.length; r++) {
                            let a = n[r],
                                s = e.matchPrefix(t, "a=rtpmap:" + a + " ")[0];
                            if (s) {
                                let n = e.parseRtpMap(s),
                                    r = e.matchPrefix(t, "a=fmtp:" + a + " ");
                                switch (n.parameters = r.length ? e.parseFmtp(r[0]) : {}, n.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + a + " ").map(e.parseRtcpFb), i.codecs.push(n), n.name.toUpperCase()) {
                                    case "RED":
                                    case "ULPFEC":
                                        i.fecMechanisms.push(n.name.toUpperCase())
                                }
                            }
                        }
                        e.matchPrefix(t, "a=extmap:").forEach(t => {
                            i.headerExtensions.push(e.parseExtmap(t))
                        });
                        let r = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
                        return i.codecs.forEach(e => {
                            r.forEach(t => {
                                e.rtcpFeedback.find(e => e.type === t.type && e.parameter === t.parameter) || e.rtcpFeedback.push(t)
                            })
                        }), i
                    }, e.writeRtpDescription = function(t, i) {
                        let n = "";
                        n += "m=" + t + " ", n += i.codecs.length > 0 ? "9" : "0", n += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " ", n += i.codecs.map(e => void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType).join(" ") + "\r\n", n += "c=IN IP4 0.0.0.0\r\n", n += "a=rtcp:9 IN IP4 0.0.0.0\r\n", i.codecs.forEach(t => {
                            n += e.writeRtpMap(t), n += e.writeFmtp(t), n += e.writeRtcpFb(t)
                        });
                        let r = 0;
                        return i.codecs.forEach(e => {
                            e.maxptime > r && (r = e.maxptime)
                        }), r > 0 && (n += "a=maxptime:" + r + "\r\n"), i.headerExtensions && i.headerExtensions.forEach(t => {
                            n += e.writeExtmap(t)
                        }), n
                    }, e.parseRtpEncodingParameters = function(t) {
                        let i, n = [],
                            r = e.parseRtpParameters(t),
                            a = -1 !== r.fecMechanisms.indexOf("RED"),
                            s = -1 !== r.fecMechanisms.indexOf("ULPFEC"),
                            o = e.matchPrefix(t, "a=ssrc:").map(t => e.parseSsrcMedia(t)).filter(e => "cname" === e.attribute),
                            c = o.length > 0 && o[0].ssrc,
                            l = e.matchPrefix(t, "a=ssrc-group:FID").map(e => e.substring(17).split(" ").map(e => parseInt(e, 10)));
                        l.length > 0 && l[0].length > 1 && l[0][0] === c && (i = l[0][1]), r.codecs.forEach(e => {
                            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                                let t = {
                                    ssrc: c,
                                    codecPayloadType: parseInt(e.parameters.apt, 10)
                                };
                                c && i && (t.rtx = {
                                    ssrc: i
                                }), n.push(t), a && ((t = JSON.parse(JSON.stringify(t))).fec = {
                                    ssrc: c,
                                    mechanism: s ? "red+ulpfec" : "red"
                                }, n.push(t))
                            }
                        }), 0 === n.length && c && n.push({
                            ssrc: c
                        });
                        let d = e.matchPrefix(t, "b=");
                        return d.length && (d = 0 === d[0].indexOf("b=TIAS:") ? parseInt(d[0].substring(7), 10) : 0 === d[0].indexOf("b=AS:") ? 1e3 * parseInt(d[0].substring(5), 10) * .95 - 16e3 : void 0, n.forEach(e => {
                            e.maxBitrate = d
                        })), n
                    }, e.parseRtcpParameters = function(t) {
                        let i = {},
                            n = e.matchPrefix(t, "a=ssrc:").map(t => e.parseSsrcMedia(t)).filter(e => "cname" === e.attribute)[0];
                        n && (i.cname = n.value, i.ssrc = n.ssrc);
                        let r = e.matchPrefix(t, "a=rtcp-rsize");
                        return i.reducedSize = r.length > 0, i.compound = 0 === r.length, i.mux = e.matchPrefix(t, "a=rtcp-mux").length > 0, i
                    }, e.writeRtcpParameters = function(e) {
                        let t = "";
                        return e.reducedSize && (t += "a=rtcp-rsize\r\n"), e.mux && (t += "a=rtcp-mux\r\n"), void 0 !== e.ssrc && e.cname && (t += "a=ssrc:" + e.ssrc + " cname:" + e.cname + "\r\n"), t
                    }, e.parseMsid = function(t) {
                        let i, n = e.matchPrefix(t, "a=msid:");
                        if (1 === n.length) return {
                            stream: (i = n[0].substring(7).split(" "))[0],
                            track: i[1]
                        };
                        let r = e.matchPrefix(t, "a=ssrc:").map(t => e.parseSsrcMedia(t)).filter(e => "msid" === e.attribute);
                        if (r.length > 0) return {
                            stream: (i = r[0].value.split(" "))[0],
                            track: i[1]
                        }
                    }, e.parseSctpDescription = function(t) {
                        let i, n = e.parseMLine(t),
                            r = e.matchPrefix(t, "a=max-message-size:");
                        r.length > 0 && (i = parseInt(r[0].substring(19), 10)), isNaN(i) && (i = 65536);
                        let a = e.matchPrefix(t, "a=sctp-port:");
                        if (a.length > 0) return {
                            port: parseInt(a[0].substring(12), 10),
                            protocol: n.fmt,
                            maxMessageSize: i
                        };
                        let s = e.matchPrefix(t, "a=sctpmap:");
                        if (s.length > 0) {
                            let e = s[0].substring(10).split(" ");
                            return {
                                port: parseInt(e[0], 10),
                                protocol: e[1],
                                maxMessageSize: i
                            }
                        }
                    }, e.writeSctpDescription = function(e, t) {
                        let i = [];
                        return i = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && i.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), i.join("")
                    }, e.generateSessionId = function() {
                        return Math.random().toString().substr(2, 22)
                    }, e.writeSessionBoilerplate = function(t, i, n) {
                        return "v=0\r\no=" + (n || "thisisadapterortc") + " " + (t || e.generateSessionId()) + " " + (void 0 !== i ? i : 2) + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                    }, e.getDirection = function(t, i) {
                        let n = e.splitLines(t);
                        for (let e = 0; e < n.length; e++) switch (n[e]) {
                            case "a=sendrecv":
                            case "a=sendonly":
                            case "a=recvonly":
                            case "a=inactive":
                                return n[e].substring(2)
                        }
                        return i ? e.getDirection(i) : "sendrecv"
                    }, e.getKind = function(t) {
                        return e.splitLines(t)[0].split(" ")[0].substring(2)
                    }, e.isRejected = function(e) {
                        return "0" === e.split(" ", 2)[1]
                    }, e.parseMLine = function(t) {
                        let i = e.splitLines(t)[0].substring(2).split(" ");
                        return {
                            kind: i[0],
                            port: parseInt(i[1], 10),
                            protocol: i[2],
                            fmt: i.slice(3).join(" ")
                        }
                    }, e.parseOLine = function(t) {
                        let i = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
                        return {
                            username: i[0],
                            sessionId: i[1],
                            sessionVersion: parseInt(i[2], 10),
                            netType: i[3],
                            addressType: i[4],
                            address: i[5]
                        }
                    }, e.isValidSDP = function(t) {
                        if ("string" != typeof t || 0 === t.length) return !1;
                        let i = e.splitLines(t);
                        for (let e = 0; e < i.length; e++)
                            if (i[e].length < 2 || "=" !== i[e].charAt(1)) return !1;
                        return !0
                    }, rn.exports = e, rn.exports)
                }(),
                ra = rr && rr.__esModule && Object.prototype.hasOwnProperty.call(rr, "default") ? rr.default : rr,
                rs = (g = {
                    __proto__: null,
                    default: ra
                }, [rr].forEach(function(e) {
                    e && "string" != typeof e && !Array.isArray(e) && Object.keys(e).forEach(function(t) {
                        if ("default" !== t && !(t in g)) {
                            var i = Object.getOwnPropertyDescriptor(e, t);
                            Object.defineProperty(g, t, i.get ? i : {
                                enumerable: !0,
                                get: function() {
                                    return e[t]
                                }
                            })
                        }
                    })
                }), Object.freeze(g));

            function ro(e) {
                if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
                let t = e.RTCIceCandidate;
                e.RTCIceCandidate = function(e) {
                    if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substring(2)), e.candidate && e.candidate.length) {
                        let i = new t(e),
                            n = ra.parseCandidate(e.candidate);
                        for (let e in n) e in i || Object.defineProperty(i, e, {
                            value: n[e]
                        });
                        return i.toJSON = function() {
                            return {
                                candidate: i.candidate,
                                sdpMid: i.sdpMid,
                                sdpMLineIndex: i.sdpMLineIndex,
                                usernameFragment: i.usernameFragment
                            }
                        }, i
                    }
                    return new t(e)
                }, e.RTCIceCandidate.prototype = t.prototype, nO(e, "icecandidate", t => (t.candidate && Object.defineProperty(t, "candidate", {
                    value: new e.RTCIceCandidate(t.candidate),
                    writable: "false"
                }), t))
            }

            function rc(e) {
                !e.RTCIceCandidate || e.RTCIceCandidate && "relayProtocol" in e.RTCIceCandidate.prototype || nO(e, "icecandidate", e => {
                    if (e.candidate) {
                        let t = ra.parseCandidate(e.candidate.candidate);
                        "relay" === t.type && (e.candidate.relayProtocol = ({
                            0: "tls",
                            1: "tcp",
                            2: "udp"
                        })[t.priority >> 24])
                    }
                    return e
                })
            }

            function rl(e, t) {
                if (!e.RTCPeerConnection) return;
                "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp
                    }
                });
                let i = function(e) {
                        if (!e || !e.sdp) return !1;
                        let t = ra.splitSections(e.sdp);
                        return t.shift(), t.some(e => {
                            let t = ra.parseMLine(e);
                            return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                        })
                    },
                    n = function(e) {
                        let t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                        if (null === t || t.length < 2) return -1;
                        let i = parseInt(t[1], 10);
                        return i != i ? -1 : i
                    },
                    r = function(e) {
                        let i = 65536;
                        return "firefox" === t.browser && (i = t.version < 57 ? -1 === e ? 16384 : 0x7ffffff5 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 0x7ffffff5), i
                    },
                    a = function(e, i) {
                        let n = 65536;
                        "firefox" === t.browser && 57 === t.version && (n = 65535);
                        let r = ra.matchPrefix(e.sdp, "a=max-message-size:");
                        return r.length > 0 ? n = parseInt(r[0].substring(19), 10) : "firefox" === t.browser && -1 !== i && (n = 0x7ffffff5), n
                    },
                    s = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                    if (this._sctp = null, "chrome" === t.browser && t.version >= 76) {
                        let {
                            sdpSemantics: e
                        } = this.getConfiguration();
                        "plan-b" === e && Object.defineProperty(this, "sctp", {
                            get() {
                                return void 0 === this._sctp ? null : this._sctp
                            },
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                    if (i(arguments[0])) {
                        let e, t = n(arguments[0]),
                            i = r(t),
                            s = a(arguments[0], t);
                        e = 0 === i && 0 === s ? 1 / 0 : 0 === i || 0 === s ? Math.max(i, s) : Math.min(i, s);
                        let o = {};
                        Object.defineProperty(o, "maxMessageSize", {
                            get: () => e
                        }), this._sctp = o
                    }
                    return s.apply(this, arguments)
                }
            }

            function rd(e) {
                if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;

                function t(e, t) {
                    let i = e.send;
                    e.send = function() {
                        let n = arguments[0],
                            r = n.length || n.size || n.byteLength;
                        if ("open" === e.readyState && t.sctp && r > t.sctp.maxMessageSize) throw TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                        return i.apply(e, arguments)
                    }
                }
                let i = e.RTCPeerConnection.prototype.createDataChannel;
                e.RTCPeerConnection.prototype.createDataChannel = function() {
                    let e = i.apply(this, arguments);
                    return t(e, this), e
                }, nO(e, "datachannel", e => (t(e.channel, e.target), e))
            }

            function ru(e) {
                if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
                let t = e.RTCPeerConnection.prototype;
                Object.defineProperty(t, "connectionState", {
                    get() {
                        return ({
                            completed: "connected",
                            checking: "connecting"
                        })[this.iceConnectionState] || this.iceConnectionState
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "onconnectionstatechange", {
                    get() {
                        return this._onconnectionstatechange || null
                    },
                    set(e) {
                        this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), ["setLocalDescription", "setRemoteDescription"].forEach(e => {
                    let i = t[e];
                    t[e] = function() {
                        return this._connectionstatechangepoly || (this._connectionstatechangepoly = e => {
                            let t = e.target;
                            if (t._lastConnectionState !== t.connectionState) {
                                t._lastConnectionState = t.connectionState;
                                let i = new Event("connectionstatechange", e);
                                t.dispatchEvent(i)
                            }
                            return e
                        }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), i.apply(this, arguments)
                    }
                })
            }

            function rh(e, t) {
                if (!e.RTCPeerConnection || "chrome" === t.browser && t.version >= 71 || "safari" === t.browser && t._safariVersion >= 13.1) return;
                let i = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function(t) {
                    if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
                        let i = t.sdp.split("\n").filter(e => "a=extmap-allow-mixed" !== e.trim()).join("\n");
                        e.RTCSessionDescription && t instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
                            type: t.type,
                            sdp: i
                        }) : t.sdp = i
                    }
                    return i.apply(this, arguments)
                }
            }

            function rp(e, t) {
                if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
                let i = e.RTCPeerConnection.prototype.addIceCandidate;
                i && 0 !== i.length && (e.RTCPeerConnection.prototype.addIceCandidate = function() {
                    return arguments[0] ? ("chrome" === t.browser && t.version < 78 || "firefox" === t.browser && t.version < 68 || "safari" === t.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : i.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                })
            }

            function rm(e, t) {
                if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
                let i = e.RTCPeerConnection.prototype.setLocalDescription;
                i && 0 !== i.length && (e.RTCPeerConnection.prototype.setLocalDescription = function() {
                    let e = arguments[0] || {};
                    if ("object" != typeof e || e.type && e.sdp) return i.apply(this, arguments);
                    if (!(e = {
                            type: e.type,
                            sdp: e.sdp
                        }).type) switch (this.signalingState) {
                        case "stable":
                        case "have-local-offer":
                        case "have-remote-pranswer":
                            e.type = "offer";
                            break;
                        default:
                            e.type = "answer"
                    }
                    return e.sdp || "offer" !== e.type && "answer" !== e.type ? i.apply(this, [e]) : ("offer" === e.type ? this.createOffer : this.createAnswer).apply(this).then(e => i.apply(this, [e]))
                })
            }
            var rf = Object.freeze({
                __proto__: null,
                removeExtmapAllowMixed: rh,
                shimAddIceCandidateNullOrEmpty: rp,
                shimConnectionState: ru,
                shimMaxMessageSize: rl,
                shimParameterlessSetLocalDescription: rm,
                shimRTCIceCandidate: ro,
                shimRTCIceCandidateRelayProtocol: rc,
                shimSendThrowTypeError: rd
            });
            ! function() {
                let {
                    window: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    shimChrome: !0,
                    shimFirefox: !0,
                    shimSafari: !0
                }, i = function(e) {
                    let t = {
                        browser: null,
                        version: null
                    };
                    if (void 0 === e || !e.navigator || !e.navigator.userAgent) return t.browser = "Not a browser.", t;
                    let {
                        navigator: i
                    } = e;
                    if (i.userAgentData && i.userAgentData.brands) {
                        let e = i.userAgentData.brands.find(e => "Chromium" === e.brand);
                        if (e) return {
                            browser: "chrome",
                            version: parseInt(e.version, 10)
                        }
                    }
                    return i.mozGetUserMedia ? (t.browser = "firefox", t.version = parseInt(nR(i.userAgent, /Firefox\/(\d+)\./, 1))) : i.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection ? (t.browser = "chrome", t.version = parseInt(nR(i.userAgent, /Chrom(e|ium)\/(\d+)\./, 2))) : e.RTCPeerConnection && i.userAgent.match(/AppleWebKit\/(\d+)\./) ? (t.browser = "safari", t.version = parseInt(nR(i.userAgent, /AppleWebKit\/(\d+)\./, 1)), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype, t._safariVersion = nR(i.userAgent, /Version\/(\d+(\.?\d+))/, 1)) : t.browser = "Not a supported browser.", t
                }(e), n = {
                    browserDetails: i,
                    commonShim: rf,
                    extractVersion: nR,
                    disableLog: nI,
                    disableWarnings: nx,
                    sdp: rs
                };
                switch (i.browser) {
                    case "chrome":
                        if (!nK || !nq || !t.shimChrome) {
                            nD("Chrome shim is not included in this adapter release.");
                            break
                        }
                        if (null === i.version) {
                            nD("Chrome shim can not determine version, not shimming.");
                            break
                        }
                        nD("adapter.js shimming chrome."), n.browserShim = nK, rp(e, i), rm(e), nN(e, i), nL(e), nq(e, i), nU(e), nV(e, i), nj(e), nF(e), nW(e, i), ro(e), rc(e), ru(e), rl(e, i), rd(e), rh(e, i);
                        break;
                    case "firefox":
                        if (!n2 || !nz || !t.shimFirefox) {
                            nD("Firefox shim is not included in this adapter release.");
                            break
                        }
                        nD("adapter.js shimming firefox."), n.browserShim = n2, rp(e, i), rm(e), nH(e, i), nz(e, i), nG(e), nQ(e), nJ(e), nY(e), nX(e), n$(e), nZ(e), n0(e), n1(e), ro(e), ru(e), rl(e, i), rd(e);
                        break;
                    case "safari":
                        if (!ri || !t.shimSafari) {
                            nD("Safari shim is not included in this adapter release.");
                            break
                        }
                        nD("adapter.js shimming safari."), n.browserShim = ri, rp(e, i), rm(e), n8(e), re(e), n5(e), n3(e), n4(e), n7(e), n9(e), rt(e), ro(e), rc(e), rl(e, i), rd(e), rh(e, i);
                        break;
                    default:
                        nD("Unsupported browser!")
                }
            }({
                window: "undefined" == typeof window ? void 0 : window
            });
            let rg = "AES-GCM",
                rv = "lk_e2ee",
                rb = {
                    sharedKey: !1,
                    ratchetSalt: "LKFrameEncryptionKey",
                    ratchetWindowSize: 8,
                    failureTolerance: 10,
                    keyringSize: 16
                };

            function ry() {
                return rT() || rk()
            }

            function rk() {
                return void 0 !== window.RTCRtpScriptTransform
            }

            function rT() {
                return void 0 !== window.RTCRtpSender && void 0 !== window.RTCRtpSender.prototype.createEncodedStreams
            }

            function rS(e) {
                return "type" in e
            }

            function rC(e) {
                return nT(this, arguments, void 0, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            name: rg
                        },
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "encrypt";
                    return function*() {
                        return crypto.subtle.importKey("raw", e, t, !1, "derive" === i ? ["deriveBits", "deriveKey"] : ["encrypt", "decrypt"])
                    }()
                })
            }

            function rw(e) {
                return nT(this, void 0, void 0, function*() {
                    let t = new TextEncoder;
                    return yield crypto.subtle.importKey("raw", t.encode(e), {
                        name: "PBKDF2"
                    }, !1, ["deriveBits", "deriveKey"])
                })
            }

            function rE(e) {
                return nT(this, void 0, void 0, function*() {
                    return yield crypto.subtle.importKey("raw", e, "HKDF", !1, ["deriveBits", "deriveKey"])
                })
            }

            function rP(e, t) {
                let i = new TextEncoder().encode(t);
                switch (e) {
                    case "HKDF":
                        return {
                            name: "HKDF", salt: i, hash: "SHA-256", info: new ArrayBuffer(128)
                        };
                    case "PBKDF2":
                        return {
                            name: "PBKDF2", salt: i, hash: "SHA-256", iterations: 1e5
                        };
                    default:
                        throw Error("algorithm ".concat(e, " is currently unsupported"))
                }
            }

            function rR(e, t) {
                return nT(this, void 0, void 0, function*() {
                    let i = rP(e.algorithm.name, t),
                        n = yield crypto.subtle.deriveKey(i, e, {
                            name: rg,
                            length: 128
                        }, !1, ["encrypt", "decrypt"]);
                    return {
                        material: e,
                        encryptionKey: n
                    }
                })
            }

            function rO() {
                return window.crypto.getRandomValues(new Uint8Array(32))
            }

            function rI(e, t) {
                return nT(this, void 0, void 0, function*() {
                    let i = rP(e.algorithm.name, t);
                    return crypto.subtle.deriveBits(i, e, 256)
                })
            }

            function rx(e) {
                for (var t = 0; t < e.length - 3; t++)
                    if (0 == e[t] && 0 == e[t + 1] && 3 == e[t + 2]) return !0;
                return !1
            }

            function rD(e) {
                let t = [];
                for (var i = e.length, n = 0; n < e.length;) !(i - n >= 3) || e[n] || e[n + 1] || 3 != e[n + 2] ? t.push(e[n++]) : (t.push(e[n++]), t.push(e[n++]), n++);
                return new Uint8Array(t)
            }

            function rM(e) {
                let t = [];
                for (var i = 0, n = 0; n < e.length; ++n) {
                    var r = e[n];
                    r <= 3 && i >= 2 && (t.push(3), i = 0), t.push(r), 0 == r ? ++i : i = 0
                }
                return new Uint8Array(t)
            }(v = ee || (ee = {})).SetKey = "setKey", v.RatchetRequest = "ratchetRequest", v.KeyRatcheted = "keyRatcheted", (et || (et = {})).KeyRatcheted = "keyRatcheted", (b = ei || (ei = {})).ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", b.EncryptionError = "encryptionError", (en || (en = {})).Error = "cryptorError";
            class r_ extends nw.EventEmitter {
                onSetEncryptionKey(e, t, i) {
                    let n = {
                        key: e,
                        participantIdentity: t,
                        keyIndex: i
                    };
                    if (!this.options.sharedKey && !t) throw Error("participant identity needs to be passed for encryption key if sharedKey option is false");
                    this.keyInfoMap.set("".concat(null != t ? t : "shared", "-").concat(null != i ? i : 0), n), this.emit(ee.SetKey, n)
                }
                getKeys() {
                    return Array.from(this.keyInfoMap.values())
                }
                getOptions() {
                    return this.options
                }
                ratchetKey(e, t) {
                    this.emit(ee.RatchetRequest, e, t)
                }
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    super(), this.onKeyRatcheted = (e, t, i) => {
                        np.debug("key ratcheted event received", {
                            ratchetResult: e,
                            participantId: t,
                            keyIndex: i
                        })
                    }, this.keyInfoMap = new Map, this.options = Object.assign(Object.assign({}, rb), e), this.on(ee.KeyRatcheted, this.onKeyRatcheted)
                }
            }
            class rA extends r_ {
                setKey(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = "string" == typeof e ? yield rw(e): yield rE(e);
                        this.onSetEncryptionKey(t)
                    })
                }
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    super(Object.assign(Object.assign({}, e), {
                        sharedKey: !0,
                        ratchetWindowSize: 0,
                        failureTolerance: -1
                    }))
                }
            }
            class rN extends Error {
                constructor(e, t) {
                    super(t || "an error has occured"), this.name = "LiveKitError", this.code = e
                }
            }(y = er || (er = {}))[y.NotAllowed = 0] = "NotAllowed", y[y.ServerUnreachable = 1] = "ServerUnreachable", y[y.InternalError = 2] = "InternalError", y[y.Cancelled = 3] = "Cancelled", y[y.LeaveRequest = 4] = "LeaveRequest", y[y.Timeout = 5] = "Timeout";
            class rL extends rN {
                constructor(e, t, i, n) {
                    super(1, e), this.name = "ConnectionError", this.status = i, this.reason = t, this.context = n, this.reasonName = er[t]
                }
            }
            class rU extends rN {
                constructor(e) {
                    super(21, null != e ? e : "device is unsupported"), this.name = "DeviceUnsupportedError"
                }
            }
            class rj extends rN {
                constructor(e) {
                    super(20, null != e ? e : "track is invalid"), this.name = "TrackInvalidError"
                }
            }
            class rF extends rN {
                constructor(e) {
                    super(10, null != e ? e : "unsupported server"), this.name = "UnsupportedServer"
                }
            }
            class rB extends rN {
                constructor(e) {
                    super(12, null != e ? e : "unexpected connection state"), this.name = "UnexpectedConnectionState"
                }
            }
            class rV extends rN {
                constructor(e) {
                    super(13, null != e ? e : "unable to negotiate"), this.name = "NegotiationError"
                }
            }
            class rq extends rN {
                constructor(e) {
                    super(14, null != e ? e : "unable to publish data"), this.name = "PublishDataError"
                }
            }
            class rW extends rN {
                constructor(e, t) {
                    super(15, e), this.name = "PublishTrackError", this.status = t
                }
            }
            class rK extends rN {
                constructor(e, t) {
                    super(15, e), this.reason = t, this.reasonName = "string" == typeof t ? t : nc[t]
                }
            }(k = ea || (ea = {})).PermissionDenied = "PermissionDenied", k.NotFound = "NotFound", k.DeviceInUse = "DeviceInUse", k.Other = "Other", (T = ea || (ea = {})).getFailure = function(e) {
                if (e && "name" in e) return "NotFoundError" === e.name || "DevicesNotFoundError" === e.name ? T.NotFound : "NotAllowedError" === e.name || "PermissionDeniedError" === e.name ? T.PermissionDenied : "NotReadableError" === e.name || "TrackStartError" === e.name ? T.DeviceInUse : T.Other
            }, (S = es || (es = {}))[S.InvalidKey = 0] = "InvalidKey", S[S.MissingKey = 1] = "MissingKey", S[S.InternalError = 2] = "InternalError";
            class rH extends rN {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.InternalError,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    super(40, e), this.reason = t, this.participantIdentity = i
                }
            }(C = eo || (eo = {})).Connected = "connected", C.Reconnecting = "reconnecting", C.SignalReconnecting = "signalReconnecting", C.Reconnected = "reconnected", C.Disconnected = "disconnected", C.ConnectionStateChanged = "connectionStateChanged", C.Moved = "moved", C.MediaDevicesChanged = "mediaDevicesChanged", C.ParticipantConnected = "participantConnected", C.ParticipantDisconnected = "participantDisconnected", C.TrackPublished = "trackPublished", C.TrackSubscribed = "trackSubscribed", C.TrackSubscriptionFailed = "trackSubscriptionFailed", C.TrackUnpublished = "trackUnpublished", C.TrackUnsubscribed = "trackUnsubscribed", C.TrackMuted = "trackMuted", C.TrackUnmuted = "trackUnmuted", C.LocalTrackPublished = "localTrackPublished", C.LocalTrackUnpublished = "localTrackUnpublished", C.LocalAudioSilenceDetected = "localAudioSilenceDetected", C.ActiveSpeakersChanged = "activeSpeakersChanged", C.ParticipantMetadataChanged = "participantMetadataChanged", C.ParticipantNameChanged = "participantNameChanged", C.ParticipantAttributesChanged = "participantAttributesChanged", C.ParticipantActive = "participantActive", C.RoomMetadataChanged = "roomMetadataChanged", C.DataReceived = "dataReceived", C.SipDTMFReceived = "sipDTMFReceived", C.TranscriptionReceived = "transcriptionReceived", C.ConnectionQualityChanged = "connectionQualityChanged", C.TrackStreamStateChanged = "trackStreamStateChanged", C.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", C.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", C.AudioPlaybackStatusChanged = "audioPlaybackChanged", C.VideoPlaybackStatusChanged = "videoPlaybackChanged", C.MediaDevicesError = "mediaDevicesError", C.ParticipantPermissionsChanged = "participantPermissionsChanged", C.SignalConnected = "signalConnected", C.RecordingStatusChanged = "recordingStatusChanged", C.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", C.EncryptionError = "encryptionError", C.DCBufferStatusChanged = "dcBufferStatusChanged", C.ActiveDeviceChanged = "activeDeviceChanged", C.ChatMessage = "chatMessage", C.LocalTrackSubscribed = "localTrackSubscribed", C.MetricsReceived = "metricsReceived", (w = ec || (ec = {})).TrackPublished = "trackPublished", w.TrackSubscribed = "trackSubscribed", w.TrackSubscriptionFailed = "trackSubscriptionFailed", w.TrackUnpublished = "trackUnpublished", w.TrackUnsubscribed = "trackUnsubscribed", w.TrackMuted = "trackMuted", w.TrackUnmuted = "trackUnmuted", w.LocalTrackPublished = "localTrackPublished", w.LocalTrackUnpublished = "localTrackUnpublished", w.LocalTrackCpuConstrained = "localTrackCpuConstrained", w.LocalSenderCreated = "localSenderCreated", w.ParticipantMetadataChanged = "participantMetadataChanged", w.ParticipantNameChanged = "participantNameChanged", w.DataReceived = "dataReceived", w.SipDTMFReceived = "sipDTMFReceived", w.TranscriptionReceived = "transcriptionReceived", w.IsSpeakingChanged = "isSpeakingChanged", w.ConnectionQualityChanged = "connectionQualityChanged", w.TrackStreamStateChanged = "trackStreamStateChanged", w.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", w.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", w.TrackCpuConstrained = "trackCpuConstrained", w.MediaDevicesError = "mediaDevicesError", w.AudioStreamAcquired = "audioStreamAcquired", w.ParticipantPermissionsChanged = "participantPermissionsChanged", w.PCTrackAdded = "pcTrackAdded", w.AttributesChanged = "attributesChanged", w.LocalTrackSubscribed = "localTrackSubscribed", w.ChatMessage = "chatMessage", w.Active = "active", (E = el || (el = {})).TransportsCreated = "transportsCreated", E.Connected = "connected", E.Disconnected = "disconnected", E.Resuming = "resuming", E.Resumed = "resumed", E.Restarting = "restarting", E.Restarted = "restarted", E.SignalResumed = "signalResumed", E.SignalRestarted = "signalRestarted", E.Closing = "closing", E.MediaTrackAdded = "mediaTrackAdded", E.ActiveSpeakersUpdate = "activeSpeakersUpdate", E.DataPacketReceived = "dataPacketReceived", E.RTPVideoMapUpdate = "rtpVideoMapUpdate", E.DCBufferStatusChanged = "dcBufferStatusChanged", E.ParticipantUpdate = "participantUpdate", E.RoomUpdate = "roomUpdate", E.SpeakersChanged = "speakersChanged", E.StreamStateChanged = "streamStateChanged", E.ConnectionQualityUpdate = "connectionQualityUpdate", E.SubscriptionError = "subscriptionError", E.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", E.RemoteMute = "remoteMute", E.SubscribedQualityUpdate = "subscribedQualityUpdate", E.LocalTrackUnpublished = "localTrackUnpublished", E.LocalTrackSubscribed = "localTrackSubscribed", E.Offline = "offline", E.SignalRequestResponse = "signalRequestResponse", E.SignalConnected = "signalConnected", E.RoomMoved = "roomMoved", (P = ed || (ed = {})).Message = "message", P.Muted = "muted", P.Unmuted = "unmuted", P.Restarted = "restarted", P.Ended = "ended", P.Subscribed = "subscribed", P.Unsubscribed = "unsubscribed", P.CpuConstrained = "cpuConstrained", P.UpdateSettings = "updateSettings", P.UpdateSubscription = "updateSubscription", P.AudioPlaybackStarted = "audioPlaybackStarted", P.AudioPlaybackFailed = "audioPlaybackFailed", P.AudioSilenceDetected = "audioSilenceDetected", P.VisibilityChanged = "visibilityChanged", P.VideoDimensionsChanged = "videoDimensionsChanged", P.VideoPlaybackStarted = "videoPlaybackStarted", P.VideoPlaybackFailed = "videoPlaybackFailed", P.ElementAttached = "elementAttached", P.ElementDetached = "elementDetached", P.UpstreamPaused = "upstreamPaused", P.UpstreamResumed = "upstreamResumed", P.SubscriptionPermissionChanged = "subscriptionPermissionChanged", P.SubscriptionStatusChanged = "subscriptionStatusChanged", P.SubscriptionFailed = "subscriptionFailed", P.TrackProcessorUpdate = "trackProcessorUpdate", P.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", P.TranscriptionReceived = "transcriptionReceived", P.TimeSyncUpdate = "timeSyncUpdate", P.PreConnectBufferFlushed = "preConnectBufferFlushed";
            let rG = /version\/(\d+(\.?_?\d+)+)/i;

            function rz(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (void 0 === e && "undefined" == typeof navigator) return;
                let i = (null != e ? e : navigator.userAgent).toLowerCase();
                if (void 0 === n || t) {
                    let e = rJ.find(e => {
                        let {
                            test: t
                        } = e;
                        return t.test(i)
                    });
                    n = null == e ? void 0 : e.describe(i)
                }
                return n
            }
            let rJ = [{
                test: /firefox|iceweasel|fxios/i,
                describe: e => ({
                    name: "Firefox",
                    version: rY(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e),
                    os: e.toLowerCase().includes("fxios") ? "iOS" : void 0,
                    osVersion: rQ(e)
                })
            }, {
                test: /chrom|crios|crmo/i,
                describe: e => ({
                    name: "Chrome",
                    version: rY(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e),
                    os: e.toLowerCase().includes("crios") ? "iOS" : void 0,
                    osVersion: rQ(e)
                })
            }, {
                test: /safari|applewebkit/i,
                describe: e => ({
                    name: "Safari",
                    version: rY(rG, e),
                    os: e.includes("mobile/") ? "iOS" : "macOS",
                    osVersion: rQ(e)
                })
            }];

            function rY(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = t.match(e);
                return n && n.length >= i && n[i] || ""
            }

            function rQ(e) {
                return e.includes("mac os") ? rY(/\(.+?(\d+_\d+(:?_\d+)?)/, e, 1).replace(/_/g, ".") : void 0
            }
            let rX = "2.15.2",
                r$ = 16;
            class rZ {}
            rZ.setTimeout = function() {
                return setTimeout(...arguments)
            }, rZ.setInterval = function() {
                return setInterval(...arguments)
            }, rZ.clearTimeout = function() {
                return clearTimeout(...arguments)
            }, rZ.clearInterval = function() {
                return clearInterval(...arguments)
            };
            let r0 = [];
            (R = eu || (eu = {}))[R.LOW = 0] = "LOW", R[R.MEDIUM = 1] = "MEDIUM", R[R.HIGH = 2] = "HIGH";
            class r1 extends nw.EventEmitter {
                get logContext() {
                    var e;
                    return Object.assign(Object.assign({}, null == (e = this.loggerContextCb) ? void 0 : e.call(this)), a3(this))
                }
                get currentBitrate() {
                    return this._currentBitrate
                }
                get mediaStreamTrack() {
                    return this._mediaStreamTrack
                }
                get mediaStreamID() {
                    return this._mediaStreamID
                }
                attach(e) {
                    let t = "audio";
                    this.kind === r1.Kind.Video && (t = "video"), 0 === this.attachedElements.length && this.kind === r1.Kind.Video && this.addAppVisibilityListener(), !e && ("audio" === t && (r0.forEach(t => {
                        null !== t.parentElement || e || (e = t)
                    }), e && r0.splice(r0.indexOf(e), 1)), e || (e = document.createElement(t))), this.attachedElements.includes(e) || this.attachedElements.push(e), r2(this.mediaStreamTrack, e);
                    let i = e.srcObject.getTracks(),
                        n = i.some(e => "audio" === e.kind);
                    return e.play().then(() => {
                        this.emit(n ? ed.AudioPlaybackStarted : ed.VideoPlaybackStarted)
                    }).catch(t => {
                        "NotAllowedError" === t.name ? this.emit(n ? ed.AudioPlaybackFailed : ed.VideoPlaybackFailed, t) : "AbortError" === t.name ? np.debug("".concat(n ? "audio" : "video", " playback aborted, likely due to new play request")) : np.warn("could not playback ".concat(n ? "audio" : "video"), t), n && e && i.some(e => "video" === e.kind) && "NotAllowedError" === t.name && (e.muted = !0, e.play().catch(() => {}))
                    }), this.emit(ed.ElementAttached, e), e
                }
                detach(e) {
                    try {
                        if (e) {
                            r3(this.mediaStreamTrack, e);
                            let t = this.attachedElements.indexOf(e);
                            return t >= 0 && (this.attachedElements.splice(t, 1), this.recycleElement(e), this.emit(ed.ElementDetached, e)), e
                        }
                        let t = [];
                        return this.attachedElements.forEach(e => {
                            r3(this.mediaStreamTrack, e), t.push(e), this.recycleElement(e), this.emit(ed.ElementDetached, e)
                        }), this.attachedElements = [], t
                    } finally {
                        0 === this.attachedElements.length && this.removeAppVisibilityListener()
                    }
                }
                stop() {
                    this.stopMonitor(), this._mediaStreamTrack.stop()
                }
                enable() {
                    this._mediaStreamTrack.enabled = !0
                }
                disable() {
                    this._mediaStreamTrack.enabled = !1
                }
                stopMonitor() {
                    this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle)
                }
                updateLoggerOptions(e) {
                    e.loggerName && (this.log = nf(e.loggerName)), e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb)
                }
                recycleElement(e) {
                    if (e instanceof HTMLAudioElement) {
                        let t = !0;
                        e.pause(), r0.forEach(e => {
                            e.parentElement || (t = !1)
                        }), t && r0.push(e)
                    }
                }
                handleAppVisibilityChanged() {
                    return nT(this, void 0, void 0, function*() {
                        this.isInBackground = "hidden" === document.visibilityState, this.isInBackground || this.kind !== r1.Kind.Video || setTimeout(() => this.attachedElements.forEach(e => e.play().catch(() => {})), 0)
                    })
                }
                addAppVisibilityListener() {
                    av() ? (this.isInBackground = "hidden" === document.visibilityState, document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = !1
                }
                removeAppVisibilityListener() {
                    av() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener)
                }
                constructor(e, t) {
                    var i;
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super(), this.attachedElements = [], this.isMuted = !1, this.streamState = r1.StreamState.Active, this.isInBackground = !1, this._currentBitrate = 0, this.log = np, this.appVisibilityChangedListener = () => {
                        this.backgroundTimeout && clearTimeout(this.backgroundTimeout), "hidden" === document.visibilityState ? this.backgroundTimeout = setTimeout(() => this.handleAppVisibilityChanged(), 5e3) : this.handleAppVisibilityChanged()
                    }, this.log = nf(null != (i = n.loggerName) ? i : X.Track), this.loggerContextCb = n.loggerContextCb, this.setMaxListeners(100), this.kind = t, this._mediaStreamTrack = e, this._mediaStreamID = e.id, this.source = r1.Source.Unknown
                }
            }

            function r2(e, t) {
                let i, n;
                i = t.srcObject instanceof MediaStream ? t.srcObject : new MediaStream, (n = "audio" === e.kind ? i.getAudioTracks() : i.getVideoTracks()).includes(e) || (n.forEach(e => {
                    i.removeTrack(e)
                }), i.addTrack(e)), ap() && t instanceof HTMLVideoElement || (t.autoplay = !0), t.muted = 0 === i.getAudioTracks().length, t instanceof HTMLVideoElement && (t.playsInline = !0), t.srcObject !== i && (t.srcObject = i, (ap() || ah()) && t instanceof HTMLVideoElement && setTimeout(() => {
                    t.srcObject = i, t.play().catch(() => {})
                }, 0))
            }

            function r3(e, t) {
                if (t.srcObject instanceof MediaStream) {
                    let i = t.srcObject;
                    i.removeTrack(e), i.getTracks().length > 0 ? t.srcObject = i : t.srcObject = null
                }
            }(I = s = (O = r1 || (r1 = {})).Kind || (O.Kind = {})).Audio = "audio", I.Video = "video", I.Unknown = "unknown", (x = o = O.Source || (O.Source = {})).Camera = "camera", x.Microphone = "microphone", x.ScreenShare = "screen_share", x.ScreenShareAudio = "screen_share_audio", x.Unknown = "unknown", (D = c = O.StreamState || (O.StreamState = {})).Active = "active", D.Paused = "paused", D.Unknown = "unknown", O.kindToProto = function(e) {
                switch (e) {
                    case s.Audio:
                        return tF.AUDIO;
                    case s.Video:
                        return tF.VIDEO;
                    default:
                        return tF.DATA
                }
            }, O.kindFromProto = function(e) {
                switch (e) {
                    case tF.AUDIO:
                        return s.Audio;
                    case tF.VIDEO:
                        return s.Video;
                    default:
                        return s.Unknown
                }
            }, O.sourceToProto = function(e) {
                switch (e) {
                    case o.Camera:
                        return tB.CAMERA;
                    case o.Microphone:
                        return tB.MICROPHONE;
                    case o.ScreenShare:
                        return tB.SCREEN_SHARE;
                    case o.ScreenShareAudio:
                        return tB.SCREEN_SHARE_AUDIO;
                    default:
                        return tB.UNKNOWN
                }
            }, O.sourceFromProto = function(e) {
                switch (e) {
                    case tB.CAMERA:
                        return o.Camera;
                    case tB.MICROPHONE:
                        return o.Microphone;
                    case tB.SCREEN_SHARE:
                        return o.ScreenShare;
                    case tB.SCREEN_SHARE_AUDIO:
                        return o.ScreenShareAudio;
                    default:
                        return o.Unknown
                }
            }, O.streamStateFromProto = function(e) {
                switch (e) {
                    case iP.ACTIVE:
                        return c.Active;
                    case iP.PAUSED:
                        return c.Paused;
                    default:
                        return c.Unknown
                }
            };
            class r4 {
                get resolution() {
                    return {
                        width: this.width,
                        height: this.height,
                        frameRate: this.encoding.maxFramerate,
                        aspectRatio: this.aspectRatio
                    }
                }
                constructor(e, t, i, n, r) {
                    if ("object" == typeof e) this.width = e.width, this.height = e.height, this.aspectRatio = e.aspectRatio, this.encoding = {
                        maxBitrate: e.maxBitrate,
                        maxFramerate: e.maxFramerate,
                        priority: e.priority
                    };
                    else if (void 0 !== t && void 0 !== i) this.width = e, this.height = t, this.aspectRatio = e / t, this.encoding = {
                        maxBitrate: i,
                        maxFramerate: n,
                        priority: r
                    };
                    else throw TypeError("Unsupported options: provide at least width, height and maxBitrate")
                }
            }
            let r5 = ["vp8", "h264"],
                r9 = ["vp8", "h264", "vp9", "av1", "h265"];

            function r6(e) {
                return !!r5.find(t => t === e)
            }(M = eh || (eh = {}))[M.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", M[M.SIMULCAST = 1] = "SIMULCAST", M[M.REGRESSION = 2] = "REGRESSION", (_ = ep || (ep = {})).telephone = {
                maxBitrate: 12e3
            }, _.speech = {
                maxBitrate: 24e3
            }, _.music = {
                maxBitrate: 48e3
            }, _.musicStereo = {
                maxBitrate: 64e3
            }, _.musicHighQuality = {
                maxBitrate: 96e3
            }, _.musicHighQualityStereo = {
                maxBitrate: 128e3
            };
            let r8 = {
                    h90: new r4(160, 90, 9e4, 20),
                    h180: new r4(320, 180, 16e4, 20),
                    h216: new r4(384, 216, 18e4, 20),
                    h360: new r4(640, 360, 45e4, 20),
                    h540: new r4(960, 540, 8e5, 25),
                    h720: new r4(1280, 720, 17e5, 30),
                    h1080: new r4(1920, 1080, 3e6, 30),
                    h1440: new r4(2560, 1440, 5e6, 30),
                    h2160: new r4(3840, 2160, 8e6, 30)
                },
                r7 = {
                    h120: new r4(160, 120, 7e4, 20),
                    h180: new r4(240, 180, 125e3, 20),
                    h240: new r4(320, 240, 14e4, 20),
                    h360: new r4(480, 360, 33e4, 20),
                    h480: new r4(640, 480, 5e5, 20),
                    h540: new r4(720, 540, 6e5, 25),
                    h720: new r4(960, 720, 13e5, 30),
                    h1080: new r4(1440, 1080, 23e5, 30),
                    h1440: new r4(1920, 1440, 38e5, 30)
                },
                ae = {
                    h360fps3: new r4(640, 360, 2e5, 3, "medium"),
                    h360fps15: new r4(640, 360, 4e5, 15, "medium"),
                    h720fps5: new r4(1280, 720, 8e5, 5, "medium"),
                    h720fps15: new r4(1280, 720, 15e5, 15, "medium"),
                    h720fps30: new r4(1280, 720, 2e6, 30, "medium"),
                    h1080fps15: new r4(1920, 1080, 25e5, 15, "medium"),
                    h1080fps30: new r4(1920, 1080, 5e6, 30, "medium"),
                    original: new r4(0, 0, 7e6, 30, "medium")
                },
                at = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";

            function ai(e) {
                return nT(this, void 0, void 0, function*() {
                    return new Promise(t => rZ.setTimeout(t, e))
                })
            }

            function an() {
                return "addTransceiver" in RTCPeerConnection.prototype
            }

            function ar() {
                return "addTrack" in RTCPeerConnection.prototype
            }

            function aa() {
                return !0
            }

            function as() {
                return an()
            }

            function ao() {
                if (!("getCapabilities" in RTCRtpSender) || ap()) return !1;
                let e = RTCRtpSender.getCapabilities("video"),
                    t = !1;
                if (e) {
                    for (let i of e.codecs)
                        if ("video/AV1" === i.mimeType) {
                            t = !0;
                            break
                        }
                }
                return t
            }

            function ac() {
                if (!("getCapabilities" in RTCRtpSender) || ah()) return !1;
                if (ap()) {
                    let e = rz();
                    if ((null == e ? void 0 : e.version) && 0 > aC(e.version, "16") || (null == e ? void 0 : e.os) === "iOS" && (null == e ? void 0 : e.osVersion) && 0 > aC(e.osVersion, "16")) return !1
                }
                let e = RTCRtpSender.getCapabilities("video"),
                    t = !1;
                if (e) {
                    for (let i of e.codecs)
                        if ("video/VP9" === i.mimeType) {
                            t = !0;
                            break
                        }
                }
                return t
            }

            function al(e) {
                return "av1" === e || "vp9" === e
            }

            function ad(e) {
                return !!document && (e || (e = document.createElement("audio")), "setSinkId" in e)
            }

            function au() {
                return "undefined" != typeof RTCPeerConnection && (an() || ar())
            }

            function ah() {
                var e;
                return (null == (e = rz()) ? void 0 : e.name) === "Firefox"
            }

            function ap() {
                var e;
                return (null == (e = rz()) ? void 0 : e.name) === "Safari"
            }

            function am() {
                let e = rz();
                return (null == e ? void 0 : e.name) === "Safari" || (null == e ? void 0 : e.os) === "iOS"
            }

            function af() {
                let e = rz();
                return (null == e ? void 0 : e.name) === "Safari" && e.version.startsWith("17.") || (null == e ? void 0 : e.os) === "iOS" && !!(null == e ? void 0 : e.osVersion) && aC(e.osVersion, "17") >= 0
            }

            function ag() {
                var e, t;
                return !!av() && (null != (t = null == (e = navigator.userAgentData) ? void 0 : e.mobile) ? t : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent))
            }

            function av() {
                return "undefined" != typeof document
            }

            function ab() {
                return "ReactNative" == navigator.product
            }

            function ay(e) {
                return e.hostname.endsWith(".livekit.cloud") || e.hostname.endsWith(".livekit.run")
            }

            function ak() {
                if (i.g && i.g.LiveKitReactNativeGlobal) return i.g.LiveKitReactNativeGlobal
            }

            function aT() {
                if (!ab()) return;
                let e = ak();
                if (e) return e.platform
            }

            function aS() {
                if (av()) return window.devicePixelRatio;
                if (ab()) {
                    let e = ak();
                    if (e) return e.devicePixelRatio
                }
                return 1
            }

            function aC(e, t) {
                let i = e.split("."),
                    n = t.split("."),
                    r = Math.min(i.length, n.length);
                for (let e = 0; e < r; ++e) {
                    let t = parseInt(i[e], 10),
                        a = parseInt(n[e], 10);
                    if (t > a) return 1;
                    if (t < a) return -1;
                    if (e === r - 1 && t === a) return 0
                }
                return "" === e && "" !== t ? -1 : "" === t ? 1 : i.length == n.length ? 0 : i.length < n.length ? -1 : 1
            }

            function aw(e) {
                for (let t of e) t.target.handleResize(t)
            }

            function aE(e) {
                for (let t of e) t.target.handleVisibilityChanged(t)
            }
            let aP = null,
                aR = () => (aP || (aP = new ResizeObserver(aw)), aP),
                aO = null,
                aI = () => (aO || (aO = new IntersectionObserver(aE, {
                    root: null,
                    rootMargin: "0px"
                })), aO);

            function ax() {
                return r || (r = aD()), r.clone()
            }

            function aD() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = document.createElement("canvas");
                r.width = e, r.height = t;
                let a = r.getContext("2d");
                null == a || a.fillRect(0, 0, r.width, r.height), n && a && (a.beginPath(), a.arc(e / 2, t / 2, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fillStyle = "grey", a.fill());
                let [s] = r.captureStream().getTracks();
                if (!s) throw Error("Could not get empty media stream video track");
                return s.enabled = i, s
            }

            function aM() {
                if (!a) {
                    let e = new AudioContext,
                        t = e.createOscillator(),
                        i = e.createGain();
                    i.gain.setValueAtTime(0, 0);
                    let n = e.createMediaStreamDestination();
                    if (t.connect(i), i.connect(n), t.start(), [a] = n.stream.getAudioTracks(), !a) throw Error("Could not get empty media stream audio track");
                    a.enabled = !1
                }
                return a.clone()
            }
            class a_ {
                constructor(e, t) {
                    this.onFinally = t, this.promise = new Promise((t, i) => nT(this, void 0, void 0, function*() {
                        this.resolve = t, this.reject = i, e && (yield e(t, i))
                    })).finally(() => {
                        var e;
                        return null == (e = this.onFinally) ? void 0 : e.call(this)
                    })
                }
            }

            function aA(e, t) {
                let i = Object.assign({
                        cloneTrack: !1,
                        fftSize: 2048,
                        smoothingTimeConstant: .8,
                        minDecibels: -100,
                        maxDecibels: -80
                    }, t),
                    n = aZ();
                if (!n) throw Error("Audio Context not supported on this browser");
                let r = i.cloneTrack ? e.mediaStreamTrack.clone() : e.mediaStreamTrack,
                    a = n.createMediaStreamSource(new MediaStream([r])),
                    s = n.createAnalyser();
                s.minDecibels = i.minDecibels, s.maxDecibels = i.maxDecibels, s.fftSize = i.fftSize, s.smoothingTimeConstant = i.smoothingTimeConstant, a.connect(s);
                let o = new Uint8Array(s.frequencyBinCount);
                return {
                    calculateVolume: () => {
                        s.getByteFrequencyData(o);
                        let e = 0;
                        for (let t of o) e += Math.pow(t / 255, 2);
                        return Math.sqrt(e / o.length)
                    },
                    analyser: s,
                    cleanup: () => nT(this, void 0, void 0, function*() {
                        yield n.close(), i.cloneTrack && r.stop()
                    })
                }
            }

            function aN(e) {
                if ("string" == typeof e || "number" == typeof e) return e;
                if (Array.isArray(e)) return e[0];
                if (e.exact) return Array.isArray(e.exact) ? e.exact[0] : e.exact;
                if (e.ideal) return Array.isArray(e.ideal) ? e.ideal[0] : e.ideal;
                throw Error("could not unwrap constraint")
            }

            function aL(e) {
                return e.startsWith("ws") ? e.replace(/^(ws)/, "http") : e
            }

            function aU(e) {
                switch (e.reason) {
                    case er.LeaveRequest:
                        return e.context;
                    case er.Cancelled:
                        return tK.CLIENT_INITIATED;
                    case er.NotAllowed:
                        return tK.USER_REJECTED;
                    case er.ServerUnreachable:
                        return tK.JOIN_FAILURE;
                    default:
                        return tK.UNKNOWN_REASON
                }
            }

            function aj(e) {
                return void 0 !== e ? Number(e) : void 0
            }

            function aF(e) {
                return void 0 !== e ? BigInt(e) : void 0
            }

            function aB(e) {
                return !!e && !(e instanceof MediaStreamTrack) && e.isLocal
            }

            function aV(e) {
                return !!e && e.kind == r1.Kind.Audio
            }

            function aq(e) {
                return !!e && e.kind == r1.Kind.Video
            }

            function aW(e) {
                return aB(e) && aq(e)
            }

            function aK(e) {
                return aB(e) && aV(e)
            }

            function aH(e) {
                return !!e && !e.isLocal
            }

            function aG(e) {
                return aH(e) && aq(e)
            }

            function az(e) {
                return e.isLocal
            }

            function aJ(e) {
                return !e.isLocal
            }

            function aY(e, t, i) {
                var n, r;
                let {
                    optionsWithoutProcessor: a,
                    audioProcessor: s,
                    videoProcessor: o
                } = a4(null != e ? e : {}), c = null == t ? void 0 : t.processor, l = null == i ? void 0 : i.processor, d = null != a ? a : {};
                return !0 === d.audio && (d.audio = {}), !0 === d.video && (d.video = {}), d.audio && (aQ(d.audio, t), null != (n = d.audio).deviceId || (n.deviceId = {
                    ideal: "default"
                }), (s || c) && (d.audio.processor = null != s ? s : c)), d.video && (aQ(d.video, i), null != (r = d.video).deviceId || (r.deviceId = {
                    ideal: "default"
                }), (o || l) && (d.video.processor = null != o ? o : l)), d
            }

            function aQ(e, t) {
                return Object.keys(t).forEach(i => {
                    void 0 === e[i] && (e[i] = t[i])
                }), e
            }

            function aX(e) {
                var t, i;
                let n = {};
                if (e.video)
                    if ("object" == typeof e.video) {
                        let i = {},
                            r = e.video;
                        Object.keys(r).forEach(e => {
                            "resolution" === e ? aQ(i, r.resolution) : i[e] = r[e]
                        }), n.video = i, null != (t = n.video).deviceId || (t.deviceId = {
                            ideal: "default"
                        })
                    } else n.video = !!e.video && {
                        deviceId: {
                            ideal: "default"
                        }
                    };
                else n.video = !1;
                return e.audio ? "object" == typeof e.audio ? (n.audio = e.audio, null != (i = n.audio).deviceId || (i.deviceId = {
                    ideal: "default"
                })) : n.audio = {
                    deviceId: {
                        ideal: "default"
                    }
                } : n.audio = !1, n
            }

            function a$(e) {
                return nT(this, arguments, void 0, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
                    return function*() {
                        let i = aZ();
                        if (i) {
                            let n = i.createAnalyser();
                            n.fftSize = 2048;
                            let r = new Uint8Array(n.frequencyBinCount);
                            i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])).connect(n), yield ai(t), n.getByteTimeDomainData(r);
                            let a = r.some(e => 128 !== e && 0 !== e);
                            return i.close(), !a
                        }
                        return !1
                    }()
                })
            }

            function aZ() {
                var e;
                let t = "undefined" != typeof window && (window.AudioContext || window.webkitAudioContext);
                if (t) {
                    let i = new t({
                        latencyHint: "interactive"
                    });
                    if ("suspended" === i.state && "undefined" != typeof window && (null == (e = window.document) ? void 0 : e.body)) {
                        let e = () => nT(this, void 0, void 0, function*() {
                            var t;
                            try {
                                "suspended" === i.state && (yield i.resume())
                            } catch (e) {
                                console.warn("Error trying to auto-resume audio context", e)
                            }
                            null == (t = window.document.body) || t.removeEventListener("click", e)
                        });
                        window.document.body.addEventListener("click", e)
                    }
                    return i
                }
            }

            function a0(e) {
                return e === r1.Source.Microphone ? "audioinput" : e === r1.Source.Camera ? "videoinput" : void 0
            }

            function a1(e) {
                var t, i;
                let n = null == (t = e.video) || t;
                return e.resolution && e.resolution.width > 0 && e.resolution.height > 0 && (n = "boolean" == typeof n ? {} : n, n = ap() ? Object.assign(Object.assign({}, n), {
                    width: {
                        max: e.resolution.width
                    },
                    height: {
                        max: e.resolution.height
                    },
                    frameRate: e.resolution.frameRate
                }) : Object.assign(Object.assign({}, n), {
                    width: {
                        ideal: e.resolution.width
                    },
                    height: {
                        ideal: e.resolution.height
                    },
                    frameRate: e.resolution.frameRate
                })), {
                    audio: null != (i = e.audio) && i,
                    video: n,
                    controller: e.controller,
                    selfBrowserSurface: e.selfBrowserSurface,
                    surfaceSwitching: e.surfaceSwitching,
                    systemAudio: e.systemAudio,
                    preferCurrentTab: e.preferCurrentTab
                }
            }

            function a2(e) {
                return e.split("/")[1].toLowerCase()
            }

            function a3(e) {
                return "mediaStreamTrack" in e ? {
                    trackID: e.sid,
                    source: e.source,
                    muted: e.isMuted,
                    enabled: e.mediaStreamTrack.enabled,
                    kind: e.kind,
                    streamID: e.mediaStreamID,
                    streamTrackID: e.mediaStreamTrack.id
                } : {
                    trackID: e.trackSid,
                    enabled: e.isEnabled,
                    muted: e.isMuted,
                    trackInfo: Object.assign({
                        mimeType: e.mimeType,
                        name: e.trackName,
                        encrypted: e.isEncrypted,
                        kind: e.kind,
                        source: e.source
                    }, e.track ? a3(e.track) : {})
                }
            }

            function a4(e) {
                let t, i, n = Object.assign({}, e);
                return "object" == typeof n.audio && n.audio.processor && (t = n.audio.processor, n.audio = Object.assign(Object.assign({}, n.audio), {
                    processor: void 0
                })), "object" == typeof n.video && n.video.processor && (i = n.video.processor, n.video = Object.assign(Object.assign({}, n.video), {
                    processor: void 0
                })), {
                    audioProcessor: t,
                    videoProcessor: i,
                    optionsWithoutProcessor: void 0 === n ? n : "function" != typeof structuredClone ? JSON.parse(JSON.stringify(n)) : "object" == typeof n && null !== n ? structuredClone(Object.assign({}, n)) : structuredClone(n)
                }
            }

            function a5(e, t) {
                return e.width * e.height < t.width * t.height
            }
            class a9 extends nw.EventEmitter {
                setup(e) {
                    if (!ry()) throw new rU("tried to setup end-to-end encryption on an unsupported browser");
                    if (np.info("setting up e2ee"), e !== this.room) {
                        this.room = e, this.setupEventListeners(e, this.keyProvider);
                        let t = {
                            kind: "init",
                            data: {
                                keyProviderOptions: this.keyProvider.getOptions(),
                                loglevel: nb.getLevel()
                            }
                        };
                        this.worker && (np.info("initializing worker", {
                            worker: this.worker
                        }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t))
                    }
                }
                setParticipantCryptorEnabled(e, t) {
                    np.debug("set e2ee to ".concat(e, " for participant ").concat(t)), this.postEnable(e, t)
                }
                setSifTrailer(e) {
                    e && 0 !== e.length ? this.postSifTrailer(e) : np.warn("ignoring server sent trailer as it's empty")
                }
                setupEngine(e) {
                    e.on(el.RTPVideoMapUpdate, e => {
                        this.postRTPMap(e)
                    })
                }
                setupEventListeners(e, t) {
                    e.on(eo.TrackPublished, (e, t) => this.setParticipantCryptorEnabled(e.trackInfo.encryption !== t1.NONE, t.identity)), e.on(eo.ConnectionStateChanged, t => {
                        t === ew.Connected && e.remoteParticipants.forEach(e => {
                            e.trackPublications.forEach(t => {
                                this.setParticipantCryptorEnabled(t.trackInfo.encryption !== t1.NONE, e.identity)
                            })
                        })
                    }).on(eo.TrackUnsubscribed, (e, t, i) => {
                        var n;
                        let r = {
                            kind: "removeTransform",
                            data: {
                                participantIdentity: i.identity,
                                trackId: e.mediaStreamID
                            }
                        };
                        null == (n = this.worker) || n.postMessage(r)
                    }).on(eo.TrackSubscribed, (e, t, i) => {
                        this.setupE2EEReceiver(e, i.identity, t.trackInfo)
                    }).on(eo.SignalConnected, () => {
                        if (!this.room) throw TypeError("expected room to be present on signal connect");
                        t.getKeys().forEach(e => {
                            this.postKey(e)
                        }), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity)
                    }), e.localParticipant.on(ec.LocalSenderCreated, (e, t) => nT(this, void 0, void 0, function*() {
                        this.setupE2EESender(t, e)
                    })), t.on(ee.SetKey, e => this.postKey(e)).on(ee.RatchetRequest, (e, t) => this.postRatchetRequest(e, t))
                }
                postRatchetRequest(e, t) {
                    if (!this.worker) throw Error("could not ratchet key, worker is missing");
                    this.worker.postMessage({
                        kind: "ratchetRequest",
                        data: {
                            participantIdentity: e,
                            keyIndex: t
                        }
                    })
                }
                postKey(e) {
                    var t;
                    let {
                        key: i,
                        participantIdentity: n,
                        keyIndex: r
                    } = e;
                    if (!this.worker) throw Error("could not set key, worker is missing");
                    let a = {
                        kind: "setKey",
                        data: {
                            participantIdentity: n,
                            isPublisher: n === (null == (t = this.room) ? void 0 : t.localParticipant.identity),
                            key: i,
                            keyIndex: r
                        }
                    };
                    this.worker.postMessage(a)
                }
                postEnable(e, t) {
                    if (this.worker) this.worker.postMessage({
                        kind: "enable",
                        data: {
                            enabled: e,
                            participantIdentity: t
                        }
                    });
                    else throw ReferenceError("failed to enable e2ee, worker is not ready")
                }
                postRTPMap(e) {
                    var t;
                    if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
                    if (!(null == (t = this.room) ? void 0 : t.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
                    let i = {
                        kind: "setRTPMap",
                        data: {
                            map: e,
                            participantIdentity: this.room.localParticipant.identity
                        }
                    };
                    this.worker.postMessage(i)
                }
                postSifTrailer(e) {
                    if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
                    this.worker.postMessage({
                        kind: "setSifTrailer",
                        data: {
                            trailer: e
                        }
                    })
                }
                setupE2EEReceiver(e, t, i) {
                    if (e.receiver) {
                        if (!(null == i ? void 0 : i.mimeType) || "" === i.mimeType) throw TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
                        this.handleReceiver(e.receiver, e.mediaStreamID, t, "video" === e.kind ? a2(i.mimeType) : void 0)
                    }
                }
                setupE2EESender(e, t) {
                    if (!aB(e) || !t) {
                        t || np.warn("early return because sender is not ready");
                        return
                    }
                    this.handleSender(t, e.mediaStreamID, void 0)
                }
                handleReceiver(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.worker) {
                            if (rk()) e.transform = new RTCRtpScriptTransform(this.worker, {
                                kind: "decode",
                                participantIdentity: i,
                                trackId: t,
                                codec: n
                            });
                            else {
                                if (rv in e && n) return void this.worker.postMessage({
                                    kind: "updateCodec",
                                    data: {
                                        trackId: t,
                                        codec: n,
                                        participantIdentity: i
                                    }
                                });
                                let r = e.writableStream,
                                    a = e.readableStream;
                                if (!r || !a) {
                                    let t = e.createEncodedStreams();
                                    e.writableStream = t.writable, r = t.writable, e.readableStream = t.readable, a = t.readable
                                }
                                let s = {
                                    kind: "decode",
                                    data: {
                                        readableStream: a,
                                        writableStream: r,
                                        trackId: t,
                                        codec: n,
                                        participantIdentity: i,
                                        isReuse: rv in e
                                    }
                                };
                                this.worker.postMessage(s, [a, r])
                            }
                            e[rv] = !0
                        }
                    })
                }
                handleSender(e, t, i) {
                    var n;
                    if (!(rv in e) && this.worker) {
                        if (!(null == (n = this.room) ? void 0 : n.localParticipant.identity) || "" === this.room.localParticipant.identity) throw TypeError("local identity needs to be known in order to set up encrypted sender");
                        if (rk()) {
                            np.info("initialize script transform");
                            let n = {
                                kind: "encode",
                                participantIdentity: this.room.localParticipant.identity,
                                trackId: t,
                                codec: i
                            };
                            e.transform = new RTCRtpScriptTransform(this.worker, n)
                        } else {
                            np.info("initialize encoded streams");
                            let n = e.createEncodedStreams(),
                                r = {
                                    kind: "encode",
                                    data: {
                                        readableStream: n.readable,
                                        writableStream: n.writable,
                                        codec: i,
                                        trackId: t,
                                        participantIdentity: this.room.localParticipant.identity,
                                        isReuse: !1
                                    }
                                };
                            this.worker.postMessage(r, [n.readable, n.writable])
                        }
                        e[rv] = !0
                    }
                }
                constructor(e) {
                    super(), this.onWorkerMessage = e => {
                        var t, i;
                        let {
                            kind: n,
                            data: r
                        } = e.data;
                        switch (n) {
                            case "error":
                                np.error(r.error.message), this.emit(ei.EncryptionError, r.error);
                                break;
                            case "initAck":
                                r.enabled && this.keyProvider.getKeys().forEach(e => {
                                    this.postKey(e)
                                });
                                break;
                            case "enable":
                                if (r.enabled && this.keyProvider.getKeys().forEach(e => {
                                        this.postKey(e)
                                    }), this.encryptionEnabled !== r.enabled && r.participantIdentity === (null == (t = this.room) ? void 0 : t.localParticipant.identity)) this.emit(ei.ParticipantEncryptionStatusChanged, r.enabled, this.room.localParticipant), this.encryptionEnabled = r.enabled;
                                else if (r.participantIdentity) {
                                    let e = null == (i = this.room) ? void 0 : i.getParticipantByIdentity(r.participantIdentity);
                                    if (!e) throw TypeError("couldn't set encryption status, participant not found".concat(r.participantIdentity));
                                    this.emit(ei.ParticipantEncryptionStatusChanged, r.enabled, e)
                                }
                                break;
                            case "ratchetKey":
                                this.keyProvider.emit(ee.KeyRatcheted, r.ratchetResult, r.participantIdentity, r.keyIndex)
                        }
                    }, this.onWorkerError = e => {
                        np.error("e2ee worker encountered an error:", {
                            error: e.error
                        }), this.emit(ei.EncryptionError, e.error)
                    }, this.keyProvider = e.keyProvider, this.worker = e.worker, this.encryptionEnabled = !1
                }
            }
            let a6 = "default";
            class a8 {
                static getInstance() {
                    return void 0 === this.instance && (this.instance = new a8), this.instance
                }
                get previousDevices() {
                    return this._previousDevices
                }
                getDevices(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return function*() {
                            var n;
                            if ((null == (n = a8.userMediaPromiseMap) ? void 0 : n.size) > 0) {
                                np.debug("awaiting getUserMedia promise");
                                try {
                                    e ? yield a8.userMediaPromiseMap.get(e): yield Promise.all(a8.userMediaPromiseMap.values())
                                } catch (e) {
                                    np.warn("error waiting for media permissons")
                                }
                            }
                            let r = yield navigator.mediaDevices.enumerateDevices();
                            if (i && !(ap() && t.hasDeviceInUse(e)) && (0 === r.filter(t => t.kind === e).length || r.some(t => {
                                    let i = "" === t.label,
                                        n = !e || t.kind === e;
                                    return i && n
                                }))) {
                                let t = yield navigator.mediaDevices.getUserMedia({
                                    video: "audioinput" !== e && "audiooutput" !== e,
                                    audio: "videoinput" !== e && {
                                        deviceId: {
                                            ideal: "default"
                                        }
                                    }
                                });
                                r = yield navigator.mediaDevices.enumerateDevices(), t.getTracks().forEach(e => {
                                    e.stop()
                                })
                            }
                            return t._previousDevices = r, e && (r = r.filter(t => t.kind === e)), r
                        }()
                    })
                }
                normalizeDeviceId(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        if (t !== a6) return t;
                        let n = yield this.getDevices(e), r = n.find(e => e.deviceId === a6);
                        if (!r) return void np.warn("could not reliably determine default device");
                        let a = n.find(e => e.deviceId !== a6 && e.groupId === (null != i ? i : r.groupId));
                        return a ? null == a ? void 0 : a.deviceId : void np.warn("could not reliably determine default device")
                    })
                }
                hasDeviceInUse(e) {
                    return e ? a8.userMediaPromiseMap.has(e) : a8.userMediaPromiseMap.size > 0
                }
                constructor() {
                    this._previousDevices = []
                }
            }
            a8.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"], a8.userMediaPromiseMap = new Map, (A = em || (em = {}))[A.WAITING = 0] = "WAITING", A[A.RUNNING = 1] = "RUNNING", A[A.COMPLETED = 2] = "COMPLETED";
            class a7 {
                run(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = {
                            id: this.nextTaskIndex++,
                            enqueuedAt: Date.now(),
                            status: em.WAITING
                        };
                        this.pendingTasks.set(t.id, t);
                        let i = yield this.taskMutex.lock();
                        try {
                            return t.executedAt = Date.now(), t.status = em.RUNNING, yield e()
                        } finally {
                            t.status = em.COMPLETED, this.pendingTasks.delete(t.id), i()
                        }
                    })
                }
                flush() {
                    return nT(this, void 0, void 0, function*() {
                        return this.run(() => nT(this, void 0, void 0, function*() {}))
                    })
                }
                snapshot() {
                    return Array.from(this.pendingTasks.values())
                }
                constructor() {
                    this.pendingTasks = new Map, this.taskMutex = new eO, this.nextTaskIndex = 0
                }
            }

            function se(e, t) {
                var i;
                return e.pathname = "".concat((i = e.pathname).endsWith("/") ? i : "".concat(i, "/")).concat(t), e.toString()
            }
            let st = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
            (N = ef || (ef = {}))[N.CONNECTING = 0] = "CONNECTING", N[N.CONNECTED = 1] = "CONNECTED", N[N.RECONNECTING = 2] = "RECONNECTING", N[N.DISCONNECTING = 3] = "DISCONNECTING", N[N.DISCONNECTED = 4] = "DISCONNECTED";
            class si {
                get currentState() {
                    return this.state
                }
                get isDisconnected() {
                    return this.state === ef.DISCONNECTING || this.state === ef.DISCONNECTED
                }
                get isEstablishingConnection() {
                    return this.state === ef.CONNECTING || this.state === ef.RECONNECTING
                }
                getNextRequestId() {
                    return this._requestId += 1, this._requestId
                }
                get logContext() {
                    var e, t;
                    return null != (t = null == (e = this.loggerContextCb) ? void 0 : e.call(this)) ? t : {}
                }
                join(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        return this.state = ef.CONNECTING, this.options = i, yield this.connect(e, t, i, n)
                    })
                }
                reconnect(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        return this.options ? (this.state = ef.RECONNECTING, this.clearPingInterval(), yield this.connect(e, t, Object.assign(Object.assign({}, this.options), {
                            reconnect: !0,
                            sid: i,
                            reconnectReason: n
                        }))) : void this.log.warn("attempted to reconnect without signal options being set, ignoring", this.logContext)
                    })
                }
                connect(e, t, i, n) {
                    var r, a, s, o, c;
                    let l, d, u;
                    this.connectOptions = i;
                    let h = (a = t, s = (l = new ih({
                            sdk: ip.JS,
                            protocol: r$,
                            version: rX
                        }), ab() && (l.os = null != (r = aT()) ? r : ""), l), o = i, (u = new URLSearchParams).set("access_token", a), o.reconnect && (u.set("reconnect", "1"), o.sid && u.set("sid", o.sid)), u.set("auto_subscribe", o.autoSubscribe ? "1" : "0"), u.set("sdk", ab() ? "reactnative" : "js"), u.set("version", s.version), u.set("protocol", s.protocol.toString()), s.deviceModel && u.set("device_model", s.deviceModel), s.os && u.set("os", s.os), s.osVersion && u.set("os_version", s.osVersion), s.browser && u.set("browser", s.browser), s.browserVersion && u.set("browser_version", s.browserVersion), o.adaptiveStream && u.set("adaptive_stream", "1"), o.reconnectReason && u.set("reconnect_reason", o.reconnectReason.toString()), (null == (c = navigator.connection) ? void 0 : c.type) && u.set("network", navigator.connection.type), u),
                        p = (d = new URL(e.startsWith("http") ? e.replace(/^(http)/, "ws") : e), h.forEach((e, t) => {
                            d.searchParams.set(t, e)
                        }), se(d, "rtc")),
                        m = se(new URL(aL(p)), "validate");
                    return new Promise((e, t) => nT(this, void 0, void 0, function*() {
                        let r = yield this.connectionLock.lock();
                        try {
                            let r = () => nT(this, void 0, void 0, function*() {
                                    this.close(), clearTimeout(a), t(new rL("room connection has been cancelled (signal)", er.Cancelled))
                                }),
                                a = setTimeout(() => {
                                    this.close(), t(new rL("room connection has timed out (signal)", er.ServerUnreachable))
                                }, i.websocketTimeout);
                            (null == n ? void 0 : n.aborted) && r(), null == n || n.addEventListener("abort", r);
                            let s = new URL(p);
                            s.searchParams.has("access_token") && s.searchParams.set("access_token", "<redacted>"), this.log.debug("connecting to ".concat(s), Object.assign({
                                reconnect: i.reconnect,
                                reconnectReason: i.reconnectReason
                            }, this.logContext)), this.ws && (yield this.close(!1)), this.ws = new WebSocket(p), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => {
                                clearTimeout(a)
                            }, this.ws.onerror = e => nT(this, void 0, void 0, function*() {
                                if (this.state !== ef.CONNECTED) {
                                    this.state = ef.DISCONNECTED, clearTimeout(a);
                                    try {
                                        let i = yield fetch(m);
                                        if (i.status.toFixed(0).startsWith("4")) {
                                            let e = yield i.text();
                                            t(new rL(e, er.NotAllowed, i.status))
                                        } else t(new rL("Encountered unknown websocket error during connection: ".concat(e.toString()), er.InternalError, i.status))
                                    } catch (e) {
                                        t(new rL(e instanceof Error ? e.message : "server was not reachable", er.ServerUnreachable))
                                    }
                                    return
                                }
                                this.handleWSError(e)
                            }), this.ws.onmessage = a => nT(this, void 0, void 0, function*() {
                                var s, o, c;
                                let l;
                                if ("string" == typeof a.data) {
                                    let e = JSON.parse(a.data);
                                    l = iI.fromJson(e, {
                                        ignoreUnknownFields: !0
                                    })
                                } else {
                                    if (!(a.data instanceof ArrayBuffer)) return void this.log.error("could not decode websocket message: ".concat(typeof a.data), this.logContext);
                                    l = iI.fromBinary(new Uint8Array(a.data))
                                }
                                if (this.state !== ef.CONNECTED) {
                                    let a = !1;
                                    if ((null == (s = l.message) ? void 0 : s.case) === "join" ? (this.state = ef.CONNECTED, null == n || n.removeEventListener("abort", r), this.pingTimeoutDuration = l.message.value.pingTimeout, this.pingIntervalDuration = l.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && (this.log.debug("ping config", Object.assign(Object.assign({}, this.logContext), {
                                            timeout: this.pingTimeoutDuration,
                                            interval: this.pingIntervalDuration
                                        })), this.startPingInterval()), e(l.message.value)) : this.state === ef.RECONNECTING && "leave" !== l.message.case ? (this.state = ef.CONNECTED, null == n || n.removeEventListener("abort", r), this.startPingInterval(), (null == (o = l.message) ? void 0 : o.case) === "reconnect" ? e(l.message.value) : (this.log.debug("declaring signal reconnected without reconnect response received", this.logContext), e(void 0), a = !0)) : this.isEstablishingConnection && "leave" === l.message.case ? t(new rL("Received leave request while trying to (re)connect", er.LeaveRequest, void 0, l.message.value.reason)) : i.reconnect || t(new rL("did not receive join response, got ".concat(null == (c = l.message) ? void 0 : c.case, " instead"), er.InternalError)), !a) return
                                }
                                this.signalLatency && (yield ai(this.signalLatency)), this.handleSignalResponse(l)
                            }), this.ws.onclose = e => {
                                this.isEstablishingConnection && t(new rL("Websocket got closed during a (re)connection attempt", er.InternalError)), this.log.warn("websocket closed", Object.assign(Object.assign({}, this.logContext), {
                                    reason: e.reason,
                                    code: e.code,
                                    wasClean: e.wasClean,
                                    state: this.state
                                })), this.handleOnClose(e.reason)
                            }
                        } finally {
                            r()
                        }
                    }))
                }
                close() {
                    return nT(this, arguments, void 0, function() {
                        var e = this;
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        return function*() {
                            let i = yield e.closingLock.lock();
                            try {
                                if (e.clearPingInterval(), t && (e.state = ef.DISCONNECTING), e.ws) {
                                    e.ws.onmessage = null, e.ws.onopen = null, e.ws.onclose = null;
                                    let t = new Promise(t => {
                                        e.ws ? e.ws.onclose = () => {
                                            t()
                                        } : t()
                                    });
                                    e.ws.readyState < e.ws.CLOSING && (e.ws.close(), yield Promise.race([t, ai(250)])), e.ws = void 0
                                }
                            } finally {
                                t && (e.state = ef.DISCONNECTED), i()
                            }
                        }()
                    })
                }
                sendOffer(e, t) {
                    this.log.debug("sending offer", Object.assign(Object.assign({}, this.logContext), {
                        offerSdp: e.sdp
                    })), this.sendRequest({
                        case: "offer",
                        value: sr(e, t)
                    })
                }
                sendAnswer(e, t) {
                    return this.log.debug("sending answer", Object.assign(Object.assign({}, this.logContext), {
                        answerSdp: e.sdp
                    })), this.sendRequest({
                        case: "answer",
                        value: sr(e, t)
                    })
                }
                sendIceCandidate(e, t) {
                    return this.log.debug("sending ice candidate", Object.assign(Object.assign({}, this.logContext), {
                        candidate: e
                    })), this.sendRequest({
                        case: "trickle",
                        value: new iM({
                            candidateInit: JSON.stringify(e),
                            target: t
                        })
                    })
                }
                sendMuteTrack(e, t) {
                    return this.sendRequest({
                        case: "mute",
                        value: new i_({
                            sid: e,
                            muted: t
                        })
                    })
                }
                sendAddTrack(e) {
                    return this.sendRequest({
                        case: "addTrack",
                        value: e
                    })
                }
                sendUpdateLocalMetadata(e, t) {
                    return nT(this, arguments, void 0, function(e, t) {
                        var i = this;
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return function*() {
                            let r = i.getNextRequestId();
                            return yield i.sendRequest({
                                case: "updateMetadata",
                                value: new iz({
                                    requestId: r,
                                    metadata: e,
                                    name: t,
                                    attributes: n
                                })
                            }), r
                        }()
                    })
                }
                sendUpdateTrackSettings(e) {
                    this.sendRequest({
                        case: "trackSetting",
                        value: e
                    })
                }
                sendUpdateSubscription(e) {
                    return this.sendRequest({
                        case: "subscription",
                        value: e
                    })
                }
                sendSyncState(e) {
                    return this.sendRequest({
                        case: "syncState",
                        value: e
                    })
                }
                sendUpdateVideoLayers(e, t) {
                    return this.sendRequest({
                        case: "updateLayers",
                        value: new iG({
                            trackSid: e,
                            layers: t
                        })
                    })
                }
                sendUpdateSubscriptionPermissions(e, t) {
                    return this.sendRequest({
                        case: "subscriptionPermission",
                        value: new i5({
                            allParticipants: e,
                            trackPermissions: t
                        })
                    })
                }
                sendSimulateScenario(e) {
                    return this.sendRequest({
                        case: "simulate",
                        value: e
                    })
                }
                sendPing() {
                    return Promise.all([this.sendRequest({
                        case: "ping",
                        value: ez.parse(Date.now())
                    }), this.sendRequest({
                        case: "pingReq",
                        value: new ni({
                            timestamp: ez.parse(Date.now()),
                            rtt: ez.parse(this.rtt)
                        })
                    })])
                }
                sendUpdateLocalAudioTrack(e, t) {
                    return this.sendRequest({
                        case: "updateAudioTrack",
                        value: new iq({
                            trackSid: e,
                            features: t
                        })
                    })
                }
                sendLeave() {
                    return this.sendRequest({
                        case: "leave",
                        value: new iK({
                            reason: tK.CLIENT_INITIATED,
                            action: iH.DISCONNECT
                        })
                    })
                }
                sendRequest(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return function*() {
                            let n;
                            if (!i && (n = st.indexOf(e.case) >= 0, np.trace("request allowed to bypass queue:", {
                                    canPass: n,
                                    req: e
                                }), !n) && t.state === ef.RECONNECTING) return void t.queuedRequests.push(() => nT(t, void 0, void 0, function*() {
                                yield this.sendRequest(e, !0)
                            }));
                            if (i || (yield t.requestQueue.flush()), t.signalLatency && (yield ai(t.signalLatency)), !t.ws || t.ws.readyState !== t.ws.OPEN) return void t.log.error("cannot send signal request before connected, type: ".concat(null == e ? void 0 : e.case), t.logContext);
                            let r = new iO({
                                message: e
                            });
                            try {
                                t.useJSON ? t.ws.send(r.toJsonString()) : t.ws.send(r.toBinary())
                            } catch (e) {
                                t.log.error("error sending signal message", Object.assign(Object.assign({}, t.logContext), {
                                    error: e
                                }))
                            }
                        }()
                    })
                }
                handleSignalResponse(e) {
                    var t, i;
                    let n = e.message;
                    if (void 0 == n) return void this.log.debug("received unsupported message", this.logContext);
                    let r = !1;
                    if ("answer" === n.case) {
                        let e = sn(n.value);
                        this.onAnswer && this.onAnswer(e, n.value.id)
                    } else if ("offer" === n.case) {
                        let e = sn(n.value);
                        this.onOffer && this.onOffer(e, n.value.id)
                    } else if ("trickle" === n.case) {
                        let e = JSON.parse(n.value.candidateInit);
                        this.onTrickle && this.onTrickle(e, n.value.target)
                    } else "update" === n.case ? this.onParticipantUpdate && this.onParticipantUpdate(null != (t = n.value.participants) ? t : []) : "trackPublished" === n.case ? this.onLocalTrackPublished && this.onLocalTrackPublished(n.value) : "speakersChanged" === n.case ? this.onSpeakersChanged && this.onSpeakersChanged(null != (i = n.value.speakers) ? i : []) : "leave" === n.case ? this.onLeave && this.onLeave(n.value) : "mute" === n.case ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(n.value.sid, n.value.muted) : "roomUpdate" === n.case ? this.onRoomUpdate && n.value.room && this.onRoomUpdate(n.value.room) : "connectionQuality" === n.case ? this.onConnectionQuality && this.onConnectionQuality(n.value) : "streamStateUpdate" === n.case ? this.onStreamStateUpdate && this.onStreamStateUpdate(n.value) : "subscribedQualityUpdate" === n.case ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(n.value) : "subscriptionPermissionUpdate" === n.case ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(n.value) : "refreshToken" === n.case ? this.onTokenRefresh && this.onTokenRefresh(n.value) : "trackUnpublished" === n.case ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(n.value) : "subscriptionResponse" === n.case ? this.onSubscriptionError && this.onSubscriptionError(n.value) : "pong" === n.case || ("pongResp" === n.case ? (this.rtt = Date.now() - Number.parseInt(n.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r = !0) : "requestResponse" === n.case ? this.onRequestResponse && this.onRequestResponse(n.value) : "trackSubscribed" === n.case ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(n.value.trackSid) : "roomMoved" === n.case ? (this.onTokenRefresh && this.onTokenRefresh(n.value.token), this.onRoomMoved && this.onRoomMoved(n.value)) : this.log.debug("unsupported message", Object.assign(Object.assign({}, this.logContext), {
                        msgCase: n.case
                    })));
                    r || this.resetPingTimeout()
                }
                setReconnected() {
                    for (; this.queuedRequests.length > 0;) {
                        let e = this.queuedRequests.shift();
                        e && this.requestQueue.run(e)
                    }
                }
                handleOnClose(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.state === ef.DISCONNECTED) return;
                        let t = this.onClose;
                        yield this.close(), this.log.debug("websocket connection closed: ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                            reason: e
                        })), t && t(e)
                    })
                }
                handleWSError(e) {
                    this.log.error("websocket error", Object.assign(Object.assign({}, this.logContext), {
                        error: e
                    }))
                }
                resetPingTimeout() {
                    (this.clearPingTimeout(), this.pingTimeoutDuration) ? this.pingTimeout = rZ.setTimeout(() => {
                        this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - 1e3 * this.pingTimeoutDuration).toUTCString()), this.logContext), this.handleOnClose("ping timeout")
                    }, 1e3 * this.pingTimeoutDuration): this.log.warn("ping timeout duration not set", this.logContext)
                }
                clearPingTimeout() {
                    this.pingTimeout && rZ.clearTimeout(this.pingTimeout)
                }
                startPingInterval() {
                    (this.clearPingInterval(), this.resetPingTimeout(), this.pingIntervalDuration) ? (this.log.debug("start ping interval", this.logContext), this.pingInterval = rZ.setInterval(() => {
                        this.sendPing()
                    }, 1e3 * this.pingIntervalDuration)) : this.log.warn("ping interval duration not set", this.logContext)
                }
                clearPingInterval() {
                    this.log.debug("clearing ping interval", this.logContext), this.clearPingTimeout(), this.pingInterval && rZ.clearInterval(this.pingInterval)
                }
                constructor() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.rtt = 0, this.state = ef.DISCONNECTED, this.log = np, this._requestId = 0, this.resetCallbacks = () => {
                        this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0
                    }, this.log = nf(null != (e = i.loggerName) ? e : X.Signal), this.loggerContextCb = i.loggerContextCb, this.useJSON = t, this.requestQueue = new a7, this.queuedRequests = [], this.closingLock = new eO, this.connectionLock = new eO, this.state = ef.DISCONNECTED
                }
            }

            function sn(e) {
                let t = {
                    type: "offer",
                    sdp: e.sdp
                };
                switch (e.type) {
                    case "answer":
                    case "offer":
                    case "pranswer":
                    case "rollback":
                        t.type = e.type
                }
                return t
            }

            function sr(e, t) {
                return new ij({
                    sdp: e.sdp,
                    type: e.type,
                    id: t
                })
            }
            class sa {
                push(e) {
                    this.buffer.push(e), this._totalSize += e.data.byteLength
                }
                pop() {
                    let e = this.buffer.shift();
                    return e && (this._totalSize -= e.data.byteLength), e
                }
                getAll() {
                    return this.buffer.slice()
                }
                popToSequence(e) {
                    for (; this.buffer.length > 0;)
                        if (this.buffer[0].sequence <= e) this.pop();
                        else break
                }
                alignBufferedAmount(e) {
                    for (; this.buffer.length > 0;) {
                        let t = this.buffer[0];
                        if (this._totalSize - t.data.byteLength <= e) break;
                        this.pop()
                    }
                }
                get length() {
                    return this.buffer.length
                }
                constructor() {
                    this.buffer = [], this._totalSize = 0
                }
            }
            class ss {
                set(e, t) {
                    let i = Date.now();
                    i - this._lastCleanup > this.ttl / 2 && this.cleanup();
                    let n = i + this.ttl;
                    return this._map.set(e, {
                        value: t,
                        expiresAt: n
                    }), this
                }
                get(e) {
                    let t = this._map.get(e);
                    if (t) return t.expiresAt < Date.now() ? void this._map.delete(e) : t.value
                }
                has(e) {
                    let t = this._map.get(e);
                    return !!t && (!(t.expiresAt < Date.now()) || (this._map.delete(e), !1))
                }
                delete(e) {
                    return this._map.delete(e)
                }
                clear() {
                    this._map.clear()
                }
                cleanup() {
                    let e = Date.now();
                    for (let [t, i] of this._map.entries()) i.expiresAt < e && this._map.delete(t);
                    this._lastCleanup = e
                }
                get size() {
                    return this.cleanup(), this._map.size
                }
                forEach(e) {
                    for (let [t, i] of(this.cleanup(), this._map.entries())) i.expiresAt >= Date.now() && e(i.value, t, this.asValueMap())
                }
                map(e) {
                    this.cleanup();
                    let t = [],
                        i = this.asValueMap();
                    for (let [n, r] of i.entries()) t.push(e(r, n, i));
                    return t
                }
                asValueMap() {
                    let e = new Map;
                    for (let [t, i] of this._map.entries()) i.expiresAt >= Date.now() && e.set(t, i.value);
                    return e
                }
                constructor(e) {
                    this._map = new Map, this._lastCleanup = 0, this.ttl = e
                }
            }
            var so = {},
                sc = {},
                sl = {
                    exports: {}
                };

            function sd() {
                if (eg) return sl.exports;
                eg = 1;
                var e = sl.exports = {
                    v: [{
                        name: "version",
                        reg: /^(\d*)$/
                    }],
                    o: [{
                        name: "origin",
                        reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                        names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
                        format: "%s %s %d %s IP%d %s"
                    }],
                    s: [{
                        name: "name"
                    }],
                    i: [{
                        name: "description"
                    }],
                    u: [{
                        name: "uri"
                    }],
                    e: [{
                        name: "email"
                    }],
                    p: [{
                        name: "phone"
                    }],
                    z: [{
                        name: "timezones"
                    }],
                    r: [{
                        name: "repeats"
                    }],
                    t: [{
                        name: "timing",
                        reg: /^(\d*) (\d*)/,
                        names: ["start", "stop"],
                        format: "%d %d"
                    }],
                    c: [{
                        name: "connection",
                        reg: /^IN IP(\d) (\S*)/,
                        names: ["version", "ip"],
                        format: "IN IP%d %s"
                    }],
                    b: [{
                        push: "bandwidth",
                        reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                        names: ["type", "limit"],
                        format: "%s:%s"
                    }],
                    m: [{
                        reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
                        names: ["type", "port", "protocol", "payloads"],
                        format: "%s %d %s %s"
                    }],
                    a: [{
                        push: "rtp",
                        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                        names: ["payload", "codec", "rate", "encoding"],
                        format: function(e) {
                            return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s"
                        }
                    }, {
                        push: "fmtp",
                        reg: /^fmtp:(\d*) ([\S| ]*)/,
                        names: ["payload", "config"],
                        format: "fmtp:%d %s"
                    }, {
                        name: "control",
                        reg: /^control:(.*)/,
                        format: "control:%s"
                    }, {
                        name: "rtcp",
                        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                        names: ["port", "netType", "ipVer", "address"],
                        format: function(e) {
                            return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d"
                        }
                    }, {
                        push: "rtcpFbTrrInt",
                        reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                        names: ["payload", "value"],
                        format: "rtcp-fb:%s trr-int %d"
                    }, {
                        push: "rtcpFb",
                        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                        names: ["payload", "type", "subtype"],
                        format: function(e) {
                            return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s"
                        }
                    }, {
                        push: "ext",
                        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                        names: ["value", "direction", "encrypt-uri", "uri", "config"],
                        format: function(e) {
                            return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "")
                        }
                    }, {
                        name: "extmapAllowMixed",
                        reg: /^(extmap-allow-mixed)/
                    }, {
                        push: "crypto",
                        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                        names: ["id", "suite", "config", "sessionConfig"],
                        format: function(e) {
                            return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s"
                        }
                    }, {
                        name: "setup",
                        reg: /^setup:(\w*)/,
                        format: "setup:%s"
                    }, {
                        name: "connectionType",
                        reg: /^connection:(new|existing)/,
                        format: "connection:%s"
                    }, {
                        name: "mid",
                        reg: /^mid:([^\s]*)/,
                        format: "mid:%s"
                    }, {
                        name: "msid",
                        reg: /^msid:(.*)/,
                        format: "msid:%s"
                    }, {
                        name: "ptime",
                        reg: /^ptime:(\d*(?:\.\d*)*)/,
                        format: "ptime:%d"
                    }, {
                        name: "maxptime",
                        reg: /^maxptime:(\d*(?:\.\d*)*)/,
                        format: "maxptime:%d"
                    }, {
                        name: "direction",
                        reg: /^(sendrecv|recvonly|sendonly|inactive)/
                    }, {
                        name: "icelite",
                        reg: /^(ice-lite)/
                    }, {
                        name: "iceUfrag",
                        reg: /^ice-ufrag:(\S*)/,
                        format: "ice-ufrag:%s"
                    }, {
                        name: "icePwd",
                        reg: /^ice-pwd:(\S*)/,
                        format: "ice-pwd:%s"
                    }, {
                        name: "fingerprint",
                        reg: /^fingerprint:(\S*) (\S*)/,
                        names: ["type", "hash"],
                        format: "fingerprint:%s %s"
                    }, {
                        push: "candidates",
                        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                        names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                        format: function(e) {
                            var t = "candidate:%s %d %s %d %s %d typ %s";
                            return t += (null != e.raddr ? " raddr %s rport %d" : "%v%v") + (null != e.tcptype ? " tcptype %s" : "%v"), null != e.generation && (t += " generation %d"), t += (null != e["network-id"] ? " network-id %d" : "%v") + (null != e["network-cost"] ? " network-cost %d" : "%v")
                        }
                    }, {
                        name: "endOfCandidates",
                        reg: /^(end-of-candidates)/
                    }, {
                        name: "remoteCandidates",
                        reg: /^remote-candidates:(.*)/,
                        format: "remote-candidates:%s"
                    }, {
                        name: "iceOptions",
                        reg: /^ice-options:(\S*)/,
                        format: "ice-options:%s"
                    }, {
                        push: "ssrcs",
                        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                        names: ["id", "attribute", "value"],
                        format: function(e) {
                            var t = "ssrc:%d";
                            return null != e.attribute && (t += " %s", null != e.value && (t += ":%s")), t
                        }
                    }, {
                        push: "ssrcGroups",
                        reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                        names: ["semantics", "ssrcs"],
                        format: "ssrc-group:%s %s"
                    }, {
                        name: "msidSemantic",
                        reg: /^msid-semantic:\s?(\w*) (\S*)/,
                        names: ["semantic", "token"],
                        format: "msid-semantic: %s %s"
                    }, {
                        push: "groups",
                        reg: /^group:(\w*) (.*)/,
                        names: ["type", "mids"],
                        format: "group:%s %s"
                    }, {
                        name: "rtcpMux",
                        reg: /^(rtcp-mux)/
                    }, {
                        name: "rtcpRsize",
                        reg: /^(rtcp-rsize)/
                    }, {
                        name: "sctpmap",
                        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                        names: ["sctpmapNumber", "app", "maxMessageSize"],
                        format: function(e) {
                            return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s"
                        }
                    }, {
                        name: "xGoogleFlag",
                        reg: /^x-google-flag:([^\s]*)/,
                        format: "x-google-flag:%s"
                    }, {
                        push: "rids",
                        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                        names: ["id", "direction", "params"],
                        format: function(e) {
                            return e.params ? "rid:%s %s %s" : "rid:%s %s"
                        }
                    }, {
                        push: "imageattrs",
                        reg: RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                        format: function(e) {
                            return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "")
                        }
                    }, {
                        name: "simulcast",
                        reg: RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                        names: ["dir1", "list1", "dir2", "list2"],
                        format: function(e) {
                            return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "")
                        }
                    }, {
                        name: "simulcast_03",
                        reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                        names: ["value"],
                        format: "simulcast: %s"
                    }, {
                        name: "framerate",
                        reg: /^framerate:(\d+(?:$|\.\d+))/,
                        format: "framerate:%s"
                    }, {
                        name: "sourceFilter",
                        reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
                        names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
                        format: "source-filter: %s %s %s %s %s"
                    }, {
                        name: "bundleOnly",
                        reg: /^(bundle-only)/
                    }, {
                        name: "label",
                        reg: /^label:(.+)/,
                        format: "label:%s"
                    }, {
                        name: "sctpPort",
                        reg: /^sctp-port:(\d+)$/,
                        format: "sctp-port:%s"
                    }, {
                        name: "maxMessageSize",
                        reg: /^max-message-size:(\d+)$/,
                        format: "max-message-size:%s"
                    }, {
                        push: "tsRefClocks",
                        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                        names: ["clksrc", "clksrcExt"],
                        format: function(e) {
                            return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "")
                        }
                    }, {
                        name: "mediaClk",
                        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                        names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
                        format: function(e) {
                            var t = "mediaclk:";
                            return t + ((null != e.id ? "id=%s %s" : "%v%s") + (null != e.mediaClockValue ? "=%s" : "") + (null != e.rateNumerator ? " rate=%s" : "") + (null != e.rateDenominator ? "/%s" : ""))
                        }
                    }, {
                        name: "keywords",
                        reg: /^keywds:(.+)$/,
                        format: "keywds:%s"
                    }, {
                        name: "content",
                        reg: /^content:(.+)/,
                        format: "content:%s"
                    }, {
                        name: "bfcpFloorCtrl",
                        reg: /^floorctrl:(c-only|s-only|c-s)/,
                        format: "floorctrl:%s"
                    }, {
                        name: "bfcpConfId",
                        reg: /^confid:(\d+)/,
                        format: "confid:%s"
                    }, {
                        name: "bfcpUserId",
                        reg: /^userid:(\d+)/,
                        format: "userid:%s"
                    }, {
                        name: "bfcpFloorId",
                        reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
                        names: ["id", "mStream"],
                        format: "floorid:%s mstrm:%s"
                    }, {
                        push: "invalid",
                        names: ["value"]
                    }]
                };
                return Object.keys(e).forEach(function(t) {
                    e[t].forEach(function(e) {
                        e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s")
                    })
                }), sl.exports
            }
            var su = function() {
                if (ek) return so;
                ek = 1;
                var e = function() {
                        var e, t, i, n, r, a;
                        return ev ? sc : (ev = 1, e = function(e) {
                            return String(Number(e)) === e ? Number(e) : e
                        }, t = function(t, i, n, r) {
                            if (r && !n) i[r] = e(t[1]);
                            else
                                for (var a = 0; a < n.length; a += 1) null != t[a + 1] && (i[n[a]] = e(t[a + 1]))
                        }, i = function(e, i, n) {
                            var r = e.name && e.names;
                            e.push && !i[e.push] ? i[e.push] = [] : r && !i[e.name] && (i[e.name] = {});
                            var a = e.push ? {} : r ? i[e.name] : i;
                            t(n.match(e.reg), a, e.names, e.name), e.push && i[e.push].push(a)
                        }, n = sd(), r = RegExp.prototype.test.bind(/^([a-z])=(.*)/), sc.parse = function(e) {
                            var t = {},
                                a = [],
                                s = t;
                            return e.split(/(\r\n|\r|\n)/).filter(r).forEach(function(e) {
                                var t = e[0],
                                    r = e.slice(2);
                                "m" === t && (a.push({
                                    rtp: [],
                                    fmtp: []
                                }), s = a[a.length - 1]);
                                for (var o = 0; o < (n[t] || []).length; o += 1) {
                                    var c = n[t][o];
                                    if (c.reg.test(r)) return i(c, s, r)
                                }
                            }), t.media = a, t
                        }, a = function(t, i) {
                            var n = i.split(/=(.+)/, 2);
                            return 2 === n.length ? t[n[0]] = e(n[1]) : 1 === n.length && i.length > 1 && (t[n[0]] = void 0), t
                        }, sc.parseParams = function(e) {
                            return e.split(/;\s?/).reduce(a, {})
                        }, sc.parseFmtpConfig = sc.parseParams, sc.parsePayloads = function(e) {
                            return e.toString().split(" ").map(Number)
                        }, sc.parseRemoteCandidates = function(t) {
                            for (var i = [], n = t.split(" ").map(e), r = 0; r < n.length; r += 3) i.push({
                                component: n[r],
                                ip: n[r + 1],
                                port: n[r + 2]
                            });
                            return i
                        }, sc.parseImageAttributes = function(e) {
                            return e.split(" ").map(function(e) {
                                return e.substring(1, e.length - 1).split(",").reduce(a, {})
                            })
                        }, sc.parseSimulcastStreamList = function(t) {
                            return t.split(";").map(function(t) {
                                return t.split(",").map(function(t) {
                                    var i, n = !1;
                                    return "~" !== t[0] ? i = e(t) : (i = e(t.substring(1, t.length)), n = !0), {
                                        scid: i,
                                        paused: n
                                    }
                                })
                            })
                        }, sc)
                    }(),
                    t = function() {
                        if (ey) return eb;
                        ey = 1;
                        var e = sd(),
                            t = /%[sdv%]/g,
                            i = function(e) {
                                var i = 1,
                                    n = arguments,
                                    r = n.length;
                                return e.replace(t, function(e) {
                                    if (i >= r) return e;
                                    var t = n[i];
                                    switch (i += 1, e) {
                                        case "%%":
                                            return "%";
                                        case "%s":
                                            return String(t);
                                        case "%d":
                                            return Number(t);
                                        case "%v":
                                            return ""
                                    }
                                })
                            },
                            n = function(e, t, n) {
                                var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
                                if (t.names)
                                    for (var a = 0; a < t.names.length; a += 1) {
                                        var s = t.names[a];
                                        t.name ? r.push(n[t.name][s]) : r.push(n[t.names[a]])
                                    } else r.push(n[t.name]);
                                return i.apply(null, r)
                            },
                            r = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
                            a = ["i", "c", "b", "a"];
                        return eb = function(t, i) {
                            i = i || {}, null == t.version && (t.version = 0), null == t.name && (t.name = " "), t.media.forEach(function(e) {
                                null == e.payloads && (e.payloads = "")
                            });
                            var s = i.outerOrder || r,
                                o = i.innerOrder || a,
                                c = [];
                            return s.forEach(function(i) {
                                e[i].forEach(function(e) {
                                    e.name in t && null != t[e.name] ? c.push(n(i, e, t)) : e.push in t && null != t[e.push] && t[e.push].forEach(function(t) {
                                        c.push(n(i, e, t))
                                    })
                                })
                            }), t.media.forEach(function(t) {
                                c.push(n("m", e.m[0], t)), o.forEach(function(i) {
                                    e[i].forEach(function(e) {
                                        e.name in t && null != t[e.name] ? c.push(n(i, e, t)) : e.push in t && null != t[e.push] && t[e.push].forEach(function(t) {
                                            c.push(n(i, e, t))
                                        })
                                    })
                                })
                            }), c.join("\r\n") + "\r\n"
                        }
                    }();
                return so.grammar = sd(), so.write = t, so.parse = e.parse, so.parseParams = e.parseParams, so.parseFmtpConfig = e.parseFmtpConfig, so.parsePayloads = e.parsePayloads, so.parseRemoteCandidates = e.parseRemoteCandidates, so.parseImageAttributes = e.parseImageAttributes, so.parseSimulcastStreamList = e.parseSimulcastStreamList, so
            }();

            function sh(e, t, i) {
                void 0 === t && (t = 50), void 0 === i && (i = {});
                var n, r, a, s = null != (n = i.isImmediate) && n,
                    o = null != (r = i.callback) && r,
                    c = i.maxWait,
                    l = Date.now(),
                    d = [],
                    u = function() {
                        var i = [].slice.call(arguments),
                            n = this;
                        return new Promise(function(r, u) {
                            var h = s && void 0 === a;
                            if (void 0 !== a && clearTimeout(a), a = setTimeout(function() {
                                    if (a = void 0, l = Date.now(), !s) {
                                        var t = e.apply(n, i);
                                        o && o(t), d.forEach(function(e) {
                                            return (0, e.resolve)(t)
                                        }), d = []
                                    }
                                }, function() {
                                    if (void 0 !== c) {
                                        var e = Date.now() - l;
                                        if (e + t >= c) return c - e
                                    }
                                    return t
                                }()), h) {
                                var p = e.apply(n, i);
                                return o && o(p), r(p)
                            }
                            d.push({
                                resolve: r,
                                reject: u
                            })
                        })
                    };
                return u.cancel = function(e) {
                    void 0 !== a && clearTimeout(a), d.forEach(function(t) {
                        return (0, t.reject)(e)
                    }), d = []
                }, u
            }
            let sp = "negotiationStarted",
                sm = "negotiationComplete",
                sf = "rtpVideoPayloadTypes";
            class sg extends nw.EventEmitter {
                get pc() {
                    return this._pc || (this._pc = this.createPC()), this._pc
                }
                createPC() {
                    let e = new RTCPeerConnection(this.config);
                    return e.onicecandidate = e => {
                        var t;
                        e.candidate && (null == (t = this.onIceCandidate) || t.call(this, e.candidate))
                    }, e.onicecandidateerror = e => {
                        var t;
                        null == (t = this.onIceCandidateError) || t.call(this, e)
                    }, e.oniceconnectionstatechange = () => {
                        var t;
                        null == (t = this.onIceConnectionStateChange) || t.call(this, e.iceConnectionState)
                    }, e.onsignalingstatechange = () => {
                        var t;
                        null == (t = this.onSignalingStatechange) || t.call(this, e.signalingState)
                    }, e.onconnectionstatechange = () => {
                        var t;
                        null == (t = this.onConnectionStateChange) || t.call(this, e.connectionState)
                    }, e.ondatachannel = e => {
                        var t;
                        null == (t = this.onDataChannel) || t.call(this, e)
                    }, e.ontrack = e => {
                        var t;
                        null == (t = this.onTrack) || t.call(this, e)
                    }, e
                }
                get logContext() {
                    var e, t;
                    return Object.assign({}, null == (t = (e = this.loggerOptions).loggerContextCb) ? void 0 : t.call(e))
                }
                get isICEConnected() {
                    return null !== this._pc && ("connected" === this.pc.iceConnectionState || "completed" === this.pc.iceConnectionState)
                }
                addIceCandidate(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e);
                        this.pendingCandidates.push(e)
                    })
                }
                setRemoteDescription(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i, n, r;
                        let a;
                        if ("answer" === e.type && this.latestOfferId > 0 && t > 0 && t !== this.latestOfferId) return this.log.warn("ignoring answer for old offer", Object.assign(Object.assign({}, this.logContext), {
                            offerId: t,
                            latestOfferId: this.latestOfferId
                        })), !1;
                        if ("offer" === e.type) {
                            let t, i, a, s, {
                                stereoMids: o,
                                nackMids: c
                            } = (n = e, t = [], i = [], a = su.parse(null != (r = n.sdp) ? r : ""), s = 0, a.media.forEach(e => {
                                var n;
                                "audio" === e.type && (e.rtp.some(e => "opus" === e.codec && (s = e.payload, !0)), (null == (n = e.rtcpFb) ? void 0 : n.some(e => e.payload === s && "nack" === e.type)) && i.push(e.mid), e.fmtp.some(i => i.payload === s && (i.config.includes("sprop-stereo=1") && t.push(e.mid), !0)))
                            }), {
                                stereoMids: t,
                                nackMids: i
                            });
                            this.remoteStereoMids = o, this.remoteNackMids = c
                        } else if ("answer" === e.type) {
                            let t = su.parse(null != (i = e.sdp) ? i : "");
                            t.media.forEach(e => {
                                "audio" === e.type && this.trackBitrates.some(t => {
                                    if (!t.transceiver || e.mid != t.transceiver.mid) return !1;
                                    let i = 0;
                                    if (e.rtp.some(e => e.codec.toUpperCase() === t.codec.toUpperCase() && (i = e.payload, !0)), 0 === i) return !0;
                                    let n = !1;
                                    for (let r of e.fmtp)
                                        if (r.payload === i) {
                                            r.config = r.config.split(";").filter(e => !e.includes("maxaveragebitrate")).join(";"), t.maxbr > 0 && (r.config += ";maxaveragebitrate=".concat(1e3 * t.maxbr)), n = !0;
                                            break
                                        } return !n && t.maxbr > 0 && e.fmtp.push({
                                        payload: i,
                                        config: "maxaveragebitrate=".concat(1e3 * t.maxbr)
                                    }), !0
                                })
                            }), a = su.write(t)
                        }
                        return yield this.setMungedSDP(e, a, !0), this.pendingCandidates.forEach(e => {
                            this.pc.addIceCandidate(e)
                        }), this.pendingCandidates = [], this.restartingIce = !1, this.renegotiate ? (this.renegotiate = !1, yield this.createAndSendOffer()) : "answer" === e.type && (this.emit(sm), e.sdp && su.parse(e.sdp).media.forEach(e => {
                            "video" === e.type && this.emit(sf, e.rtp)
                        })), !0
                    })
                }
                createAndSendOffer(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t;
                        let i = yield this.offerLock.lock();
                        try {
                            if (void 0 === this.onOffer) return;
                            if ((null == e ? void 0 : e.iceRestart) && (this.log.debug("restarting ICE", this.logContext), this.restartingIce = !0), this._pc && "have-local-offer" === this._pc.signalingState) {
                                let t = this._pc.remoteDescription;
                                if ((null == e ? void 0 : e.iceRestart) && t) yield this._pc.setRemoteDescription(t);
                                else {
                                    this.renegotiate = !0;
                                    return
                                }
                            } else if (!this._pc || "closed" === this._pc.signalingState) return void this.log.warn("could not createOffer with closed peer connection", this.logContext);
                            this.log.debug("starting to negotiate", this.logContext);
                            let i = this.latestOfferId + 1;
                            this.latestOfferId = i;
                            let n = yield this.pc.createOffer(e);
                            this.log.debug("original offer", Object.assign({
                                sdp: n.sdp
                            }, this.logContext));
                            let r = su.parse(null != (t = n.sdp) ? t : "");
                            if (r.media.forEach(e => {
                                    sb(e), "audio" === e.type ? sv(e, [], []) : "video" === e.type && this.trackBitrates.some(t => {
                                        if (!e.msid || !t.cid || !e.msid.includes(t.cid)) return !1;
                                        let i = 0;
                                        if (e.rtp.some(e => e.codec.toUpperCase() === t.codec.toUpperCase() && (i = e.payload, !0)), 0 === i || (al(t.codec) && this.ensureVideoDDExtensionForSVC(e, r), "av1" !== t.codec)) return !0;
                                        let n = Math.round(.7 * t.maxbr);
                                        for (let t of e.fmtp)
                                            if (t.payload === i) {
                                                t.config.includes("x-google-start-bitrate") || (t.config += ";x-google-start-bitrate=".concat(n));
                                                break
                                            } return !0
                                    })
                                }), this.latestOfferId > i) return void this.log.warn("latestOfferId mismatch", Object.assign(Object.assign({}, this.logContext), {
                                latestOfferId: this.latestOfferId,
                                offerId: i
                            }));
                            yield this.setMungedSDP(n, su.write(r)), this.onOffer(n, this.latestOfferId)
                        } finally {
                            i()
                        }
                    })
                }
                createAndSetAnswer() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t = yield this.pc.createAnswer(), i = su.parse(null != (e = t.sdp) ? e : "");
                        return i.media.forEach(e => {
                            sb(e), "audio" === e.type && sv(e, this.remoteStereoMids, this.remoteNackMids)
                        }), yield this.setMungedSDP(t, su.write(i)), t
                    })
                }
                createDataChannel(e, t) {
                    return this.pc.createDataChannel(e, t)
                }
                addTransceiver(e, t) {
                    return this.pc.addTransceiver(e, t)
                }
                addTrack(e) {
                    if (!this._pc) throw new rB("PC closed, cannot add track");
                    return this._pc.addTrack(e)
                }
                setTrackCodecBitrate(e) {
                    this.trackBitrates.push(e)
                }
                setConfiguration(e) {
                    var t;
                    if (!this._pc) throw new rB("PC closed, cannot configure");
                    return null == (t = this._pc) ? void 0 : t.setConfiguration(e)
                }
                canRemoveTrack() {
                    var e;
                    return !!(null == (e = this._pc) ? void 0 : e.removeTrack)
                }
                removeTrack(e) {
                    var t;
                    return null == (t = this._pc) ? void 0 : t.removeTrack(e)
                }
                getConnectionState() {
                    var e, t;
                    return null != (t = null == (e = this._pc) ? void 0 : e.connectionState) ? t : "closed"
                }
                getICEConnectionState() {
                    var e, t;
                    return null != (t = null == (e = this._pc) ? void 0 : e.iceConnectionState) ? t : "closed"
                }
                getSignallingState() {
                    var e, t;
                    return null != (t = null == (e = this._pc) ? void 0 : e.signalingState) ? t : "closed"
                }
                getTransceivers() {
                    var e, t;
                    return null != (t = null == (e = this._pc) ? void 0 : e.getTransceivers()) ? t : []
                }
                getSenders() {
                    var e, t;
                    return null != (t = null == (e = this._pc) ? void 0 : e.getSenders()) ? t : []
                }
                getLocalDescription() {
                    var e;
                    return null == (e = this._pc) ? void 0 : e.localDescription
                }
                getRemoteDescription() {
                    var e;
                    return null == (e = this.pc) ? void 0 : e.remoteDescription
                }
                getStats() {
                    return this.pc.getStats()
                }
                getConnectedAddress() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        if (!this._pc) return;
                        let t = "",
                            i = new Map,
                            n = new Map;
                        if ((yield this._pc.getStats()).forEach(e => {
                                switch (e.type) {
                                    case "transport":
                                        t = e.selectedCandidatePairId;
                                        break;
                                    case "candidate-pair":
                                        "" === t && e.selected && (t = e.id), i.set(e.id, e);
                                        break;
                                    case "remote-candidate":
                                        n.set(e.id, "".concat(e.address, ":").concat(e.port))
                                }
                            }), "" === t) return;
                        let r = null == (e = i.get(t)) ? void 0 : e.remoteCandidateId;
                        if (void 0 !== r) return n.get(r)
                    })
                }
                setMungedSDP(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        if (t) {
                            let n = e.sdp;
                            e.sdp = t;
                            try {
                                this.log.debug("setting munged ".concat(i ? "remote" : "local", " description"), this.logContext), i ? yield this.pc.setRemoteDescription(e): yield this.pc.setLocalDescription(e);
                                return
                            } catch (i) {
                                this.log.warn("not able to set ".concat(e.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), {
                                    error: i,
                                    sdp: t
                                })), e.sdp = n
                            }
                        }
                        try {
                            i ? yield this.pc.setRemoteDescription(e): yield this.pc.setLocalDescription(e)
                        } catch (r) {
                            let t = "unknown error";
                            r instanceof Error ? t = r.message : "string" == typeof r && (t = r);
                            let n = {
                                error: t,
                                sdp: e.sdp
                            };
                            throw !i && this.pc.remoteDescription && (n.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e.type), Object.assign(Object.assign({}, this.logContext), {
                                fields: n
                            })), new rV(t)
                        }
                    })
                }
                ensureVideoDDExtensionForSVC(e, t) {
                    var i, n;
                    if (!(null == (i = e.ext) ? void 0 : i.some(e => e.uri === at))) {
                        if (0 === this.ddExtID) {
                            let e = 0;
                            t.media.forEach(t => {
                                var i;
                                "video" === t.type && (null == (i = t.ext) || i.forEach(t => {
                                    t.value > e && (e = t.value)
                                }))
                            }), this.ddExtID = e + 1
                        }
                        null == (n = e.ext) || n.push({
                            value: this.ddExtID,
                            uri: at
                        })
                    }
                }
                constructor(e) {
                    var t;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(), this.log = np, this.ddExtID = 0, this.latestOfferId = 0, this.pendingCandidates = [], this.restartingIce = !1, this.renegotiate = !1, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = sh(e => nT(this, void 0, void 0, function*() {
                        this.emit(sp);
                        try {
                            yield this.createAndSendOffer()
                        } catch (t) {
                            if (e) e(t);
                            else throw t
                        }
                    }), 20), this.close = () => {
                        this._pc && (this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null)
                    }, this.log = nf(null != (t = i.loggerName) ? t : X.PCTransport), this.loggerOptions = i, this.config = e, this._pc = this.createPC(), this.offerLock = new eO
                }
            }

            function sv(e, t, i) {
                let n = 0;
                e.rtp.some(e => "opus" === e.codec && (n = e.payload, !0)), n > 0 && (e.rtcpFb || (e.rtcpFb = []), i.includes(e.mid) && !e.rtcpFb.some(e => e.payload === n && "nack" === e.type) && e.rtcpFb.push({
                    payload: n,
                    type: "nack"
                }), t.includes(e.mid) && e.fmtp.some(e => e.payload === n && (e.config.includes("stereo=1") || (e.config += ";stereo=1"), !0)))
            }

            function sb(e) {
                if (e.connection) {
                    let t = e.connection.ip.indexOf(":") >= 0;
                    (4 === e.connection.version && t || 6 === e.connection.version && !t) && (e.connection.ip = "0.0.0.0", e.connection.version = 4)
                }
            }
            let sy = {
                    audioPreset: ep.music,
                    dtx: !0,
                    red: !0,
                    forceStereo: !1,
                    simulcast: !0,
                    screenShareEncoding: ae.h1080fps15.encoding,
                    stopMicTrackOnMute: !1,
                    videoCodec: "vp8",
                    backupCodec: !0,
                    preConnectBuffer: !1
                },
                sk = {
                    deviceId: {
                        ideal: "default"
                    },
                    autoGainControl: !0,
                    echoCancellation: !0,
                    noiseSuppression: !0,
                    voiceIsolation: !0
                },
                sT = {
                    deviceId: {
                        ideal: "default"
                    },
                    resolution: r8.h720.resolution
                },
                sS = {
                    adaptiveStream: !1,
                    dynacast: !1,
                    stopLocalTrackOnUnpublish: !0,
                    reconnectPolicy: new nk,
                    disconnectOnPageLeave: !0,
                    webAudioMix: !1
                },
                sC = {
                    autoSubscribe: !0,
                    maxRetries: 1,
                    peerConnectionTimeout: 15e3,
                    websocketTimeout: 15e3
                };
            (L = eT || (eT = {}))[L.NEW = 0] = "NEW", L[L.CONNECTING = 1] = "CONNECTING", L[L.CONNECTED = 2] = "CONNECTED", L[L.FAILED = 3] = "FAILED", L[L.CLOSING = 4] = "CLOSING", L[L.CLOSED = 5] = "CLOSED";
            class sw {
                get needsPublisher() {
                    return this.isPublisherConnectionRequired
                }
                get needsSubscriber() {
                    return this.isSubscriberConnectionRequired
                }
                get currentState() {
                    return this.state
                }
                get logContext() {
                    var e, t;
                    return Object.assign({}, null == (t = (e = this.loggerOptions).loggerContextCb) ? void 0 : t.call(e))
                }
                requirePublisher() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this.isPublisherConnectionRequired = e, this.updateState()
                }
                requireSubscriber() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this.isSubscriberConnectionRequired = e, this.updateState()
                }
                createAndSendPublisherOffer(e) {
                    return this.publisher.createAndSendOffer(e)
                }
                setPublisherAnswer(e, t) {
                    return this.publisher.setRemoteDescription(e, t)
                }
                removeTrack(e) {
                    return this.publisher.removeTrack(e)
                }
                close() {
                    return nT(this, void 0, void 0, function*() {
                        if (this.publisher && "closed" !== this.publisher.getSignallingState()) {
                            let e = this.publisher;
                            for (let t of e.getSenders()) try {
                                e.canRemoveTrack() && e.removeTrack(t)
                            } catch (e) {
                                this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), {
                                    error: e
                                }))
                            }
                        }
                        yield Promise.all([this.publisher.close(), this.subscriber.close()]), this.updateState()
                    })
                }
                triggerIceRestart() {
                    return nT(this, void 0, void 0, function*() {
                        this.subscriber.restartingIce = !0, this.needsPublisher && (yield this.createAndSendPublisherOffer({
                            iceRestart: !0
                        }))
                    })
                }
                addIceCandidate(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        t === iE.PUBLISHER ? yield this.publisher.addIceCandidate(e): yield this.subscriber.addIceCandidate(e)
                    })
                }
                createSubscriberAnswerFromOffer(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), {
                            RTCSdpType: e.type,
                            sdp: e.sdp,
                            signalingState: this.subscriber.getSignallingState().toString()
                        }));
                        let i = yield this.remoteOfferLock.lock();
                        try {
                            if (!(yield this.subscriber.setRemoteDescription(e, t))) return;
                            return yield this.subscriber.createAndSetAnswer()
                        } finally {
                            i()
                        }
                    })
                }
                updateConfiguration(e, t) {
                    this.publisher.setConfiguration(e), this.subscriber.setConfiguration(e), t && this.triggerIceRestart()
                }
                ensurePCTransportConnection(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i;
                        let n = yield this.connectionLock.lock();
                        try {
                            this.isPublisherConnectionRequired && "connected" !== this.publisher.getConnectionState() && "connecting" !== this.publisher.getConnectionState() && (this.log.debug("negotiation required, start negotiating", this.logContext), this.publisher.negotiate()), yield Promise.all(null == (i = this.requiredTransports) ? void 0 : i.map(i => this.ensureTransportConnected(i, e, t)))
                        } finally {
                            n()
                        }
                    })
                }
                negotiate(e) {
                    return nT(this, void 0, void 0, function*() {
                        return new Promise((t, i) => nT(this, void 0, void 0, function*() {
                            let n = setTimeout(() => {
                                i("negotiation timed out")
                            }, this.peerConnectionTimeout);
                            e.signal.addEventListener("abort", () => {
                                clearTimeout(n), i("negotiation aborted")
                            }), this.publisher.once(sp, () => {
                                e.signal.aborted || this.publisher.once(sm, () => {
                                    clearTimeout(n), t()
                                })
                            }), yield this.publisher.negotiate(e => {
                                clearTimeout(n), i(e)
                            })
                        }))
                    })
                }
                addPublisherTransceiver(e, t) {
                    return this.publisher.addTransceiver(e, t)
                }
                addPublisherTrack(e) {
                    return this.publisher.addTrack(e)
                }
                createPublisherDataChannel(e, t) {
                    return this.publisher.createDataChannel(e, t)
                }
                getConnectedAddress(e) {
                    return e === iE.PUBLISHER || e === iE.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress()
                }
                get requiredTransports() {
                    let e = [];
                    return this.isPublisherConnectionRequired && e.push(this.publisher), this.isSubscriberConnectionRequired && e.push(this.subscriber), e
                }
                ensureTransportConnected(e, t) {
                    return nT(this, arguments, void 0, function(e, t) {
                        var i = this;
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.peerConnectionTimeout;
                        return function*() {
                            if ("connected" !== e.getConnectionState()) return new Promise((e, r) => nT(i, void 0, void 0, function*() {
                                let i = () => {
                                    this.log.warn("abort transport connection", this.logContext), rZ.clearTimeout(a), r(new rL("room connection has been cancelled", er.Cancelled))
                                };
                                (null == t ? void 0 : t.signal.aborted) && i(), null == t || t.signal.addEventListener("abort", i);
                                let a = rZ.setTimeout(() => {
                                    null == t || t.signal.removeEventListener("abort", i), r(new rL("could not establish pc connection", er.InternalError))
                                }, n);
                                for (; this.state !== eT.CONNECTED;)
                                    if (yield ai(50), null == t ? void 0 : t.signal.aborted) return void r(new rL("room connection has been cancelled", er.Cancelled));
                                rZ.clearTimeout(a), null == t || t.signal.removeEventListener("abort", i), e()
                            }))
                        }()
                    })
                }
                constructor(e, t, i) {
                    var n;
                    this.peerConnectionTimeout = sC.peerConnectionTimeout, this.log = np, this.updateState = () => {
                        var e;
                        let t = this.state,
                            i = this.requiredTransports.map(e => e.getConnectionState());
                        i.every(e => "connected" === e) ? this.state = eT.CONNECTED : i.some(e => "failed" === e) ? this.state = eT.FAILED : i.some(e => "connecting" === e) ? this.state = eT.CONNECTING : i.every(e => "closed" === e) ? this.state = eT.CLOSED : i.some(e => "closed" === e) ? this.state = eT.CLOSING : i.every(e => "new" === e) && (this.state = eT.NEW), t !== this.state && (this.log.debug("pc state change: from ".concat(eT[t], " to ").concat(eT[this.state]), this.logContext), null == (e = this.onStateChange) || e.call(this, this.state, this.publisher.getConnectionState(), this.subscriber.getConnectionState()))
                    }, this.log = nf(null != (n = i.loggerName) ? n : X.PCManager), this.loggerOptions = i, this.isPublisherConnectionRequired = !t, this.isSubscriberConnectionRequired = t, this.publisher = new sg(e, i), this.subscriber = new sg(e, i), this.publisher.onConnectionStateChange = this.updateState, this.subscriber.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = e => {
                        var t;
                        null == (t = this.onIceCandidate) || t.call(this, e, iE.PUBLISHER)
                    }, this.subscriber.onIceCandidate = e => {
                        var t;
                        null == (t = this.onIceCandidate) || t.call(this, e, iE.SUBSCRIBER)
                    }, this.subscriber.onDataChannel = e => {
                        var t;
                        null == (t = this.onDataChannel) || t.call(this, e)
                    }, this.subscriber.onTrack = e => {
                        var t;
                        null == (t = this.onTrack) || t.call(this, e)
                    }, this.publisher.onOffer = (e, t) => {
                        var i;
                        null == (i = this.onPublisherOffer) || i.call(this, e, t)
                    }, this.state = eT.NEW, this.connectionLock = new eO, this.remoteOfferLock = new eO
                }
            }
            class sE extends Error {
                static fromProto(e) {
                    return new sE(e.code, e.message, e.data)
                }
                toProto() {
                    return new ic({
                        code: this.code,
                        message: this.message,
                        data: this.data
                    })
                }
                static builtIn(e, t) {
                    return new sE(sE.ErrorCode[e], sE.ErrorMessage[e], t)
                }
                constructor(e, t, i) {
                    super(t), this.code = e, this.message = sR(t, sE.MAX_MESSAGE_BYTES), this.data = i ? sR(i, sE.MAX_DATA_BYTES) : void 0
                }
            }

            function sP(e) {
                return new TextEncoder().encode(e).length
            }

            function sR(e, t) {
                if (sP(e) <= t) return e;
                let i = 0,
                    n = e.length,
                    r = new TextEncoder;
                for (; i < n;) {
                    let a = Math.floor((i + n + 1) / 2);
                    r.encode(e.slice(0, a)).length <= t ? i = a : n = a - 1
                }
                return e.slice(0, i)
            }

            function sO(e, t) {
                let i, n;
                return t ? ("bytesReceived" in e ? (i = e.bytesReceived, n = t.bytesReceived) : "bytesSent" in e && (i = e.bytesSent, n = t.bytesSent), void 0 === i || void 0 === n || void 0 === e.timestamp || void 0 === t.timestamp) ? 0 : (i - n) * 8e3 / (e.timestamp - t.timestamp) : 0
            }
            sE.MAX_MESSAGE_BYTES = 256, sE.MAX_DATA_BYTES = 15360, sE.ErrorCode = {
                APPLICATION_ERROR: 1500,
                CONNECTION_TIMEOUT: 1501,
                RESPONSE_TIMEOUT: 1502,
                RECIPIENT_DISCONNECTED: 1503,
                RESPONSE_PAYLOAD_TOO_LARGE: 1504,
                SEND_FAILED: 1505,
                UNSUPPORTED_METHOD: 1400,
                RECIPIENT_NOT_FOUND: 1401,
                REQUEST_PAYLOAD_TOO_LARGE: 1402,
                UNSUPPORTED_SERVER: 1403,
                UNSUPPORTED_VERSION: 1404
            }, sE.ErrorMessage = {
                APPLICATION_ERROR: "Application error in method handler",
                CONNECTION_TIMEOUT: "Connection timeout",
                RESPONSE_TIMEOUT: "Response timeout",
                RECIPIENT_DISCONNECTED: "Recipient disconnected",
                RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
                SEND_FAILED: "Failed to send",
                UNSUPPORTED_METHOD: "Method not supported at destination",
                RECIPIENT_NOT_FOUND: "Recipient not found",
                REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
                UNSUPPORTED_SERVER: "RPC not supported by server",
                UNSUPPORTED_VERSION: "Unsupported RPC version"
            };
            let sI = "undefined" != typeof MediaRecorder,
                sx = sI ? MediaRecorder : class {
                    constructor() {
                        throw Error("MediaRecorder is not available in this environment")
                    }
                };
            class sD extends sx {
                constructor(e, t) {
                    let i, n;
                    if (!sI) throw Error("MediaRecorder is not available in this environment");
                    super(new MediaStream([e.mediaStreamTrack]), t);
                    const r = () => {
                            this.removeEventListener("dataavailable", i), this.removeEventListener("stop", r), this.removeEventListener("error", a), null == n || n.close(), n = void 0
                        },
                        a = e => {
                            null == n || n.error(e), this.removeEventListener("dataavailable", i), this.removeEventListener("stop", r), this.removeEventListener("error", a), n = void 0
                        };
                    this.byteStream = new ReadableStream({
                        start: e => {
                            n = e, i = t => nT(this, void 0, void 0, function*() {
                                let i = yield t.data.arrayBuffer();
                                void 0 !== n && e.enqueue(new Uint8Array(i))
                            }), this.addEventListener("dataavailable", i)
                        },
                        cancel: () => {
                            r()
                        }
                    }), this.addEventListener("stop", r), this.addEventListener("error", a)
                }
            }
            class sM extends r1 {
                get sender() {
                    return this._sender
                }
                set sender(e) {
                    this._sender = e
                }
                get constraints() {
                    return this._constraints
                }
                get hasPreConnectBuffer() {
                    return !!this.localTrackRecorder
                }
                get id() {
                    return this._mediaStreamTrack.id
                }
                get dimensions() {
                    if (this.kind !== r1.Kind.Video) return;
                    let {
                        width: e,
                        height: t
                    } = this._mediaStreamTrack.getSettings();
                    if (e && t) return {
                        width: e,
                        height: t
                    }
                }
                get isUpstreamPaused() {
                    return this._isUpstreamPaused
                }
                get isUserProvided() {
                    return this.providedByUser
                }
                get mediaStreamTrack() {
                    var e, t;
                    return null != (t = null == (e = this.processor) ? void 0 : e.processedTrack) ? t : this._mediaStreamTrack
                }
                get isLocal() {
                    return !0
                }
                getSourceTrackSettings() {
                    return this._mediaStreamTrack.getSettings()
                }
                setMediaStreamTrack(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i;
                        let n;
                        if (e !== this._mediaStreamTrack || t) {
                            if (this._mediaStreamTrack && (this.attachedElements.forEach(e => {
                                    r3(this._mediaStreamTrack, e)
                                }), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e]), e && (e.addEventListener("ended", this.handleEnded), e.addEventListener("mute", this.handleTrackMuteEvent), e.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e.getConstraints()), this.processor && e) {
                                let t = yield this.processorLock.lock();
                                try {
                                    if (this.log.debug("restarting processor", this.logContext), "unknown" === this.kind) throw TypeError("cannot set processor on track of unknown kind");
                                    this.processorElement && (r2(e, this.processorElement), this.processorElement.muted = !0), yield this.processor.restart({
                                        track: e,
                                        kind: this.kind,
                                        element: this.processorElement
                                    }), n = this.processor.processedTrack
                                } finally {
                                    t()
                                }
                            }
                            this.sender && (null == (i = this.sender.transport) ? void 0 : i.state) !== "closed" && (yield this.sender.replaceTrack(null != n ? n : e)), this.providedByUser || this._mediaStreamTrack === e || this._mediaStreamTrack.stop(), this._mediaStreamTrack = e, e && (this._mediaStreamTrack.enabled = !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach(t => {
                                r2(null != n ? n : e, t)
                            }))
                        }
                    })
                }
                waitForDimensions() {
                    return nT(this, arguments, void 0, function() {
                        var e = this;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                        return function*() {
                            var i;
                            if (e.kind === r1.Kind.Audio) throw Error("cannot get dimensions for audio tracks");
                            (null == (i = rz()) ? void 0 : i.os) === "iOS" && (yield ai(10));
                            let n = Date.now();
                            for (; Date.now() - n < t;) {
                                let t = e.dimensions;
                                if (t) return t;
                                yield ai(50)
                            }
                            throw new rj("unable to get track dimensions after timeout")
                        }()
                    })
                }
                setDeviceId(e) {
                    return nT(this, void 0, void 0, function*() {
                        return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === aN(e) || (this._constraints.deviceId = e, !!this.isMuted || (yield this.restartTrack(), aN(e) === this._mediaStreamTrack.getSettings().deviceId))
                    })
                }
                getDeviceId() {
                    return nT(this, arguments, void 0, function() {
                        var e = this;
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        return function*() {
                            if (e.source === r1.Source.ScreenShare) return;
                            let {
                                deviceId: i,
                                groupId: n
                            } = e._mediaStreamTrack.getSettings(), r = e.kind === r1.Kind.Audio ? "audioinput" : "videoinput";
                            return t ? a8.getInstance().normalizeDeviceId(r, i, n) : i
                        }()
                    })
                }
                mute() {
                    return nT(this, void 0, void 0, function*() {
                        return this.setTrackMuted(!0), this
                    })
                }
                unmute() {
                    return nT(this, void 0, void 0, function*() {
                        return this.setTrackMuted(!1), this
                    })
                }
                replaceTrack(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i, n;
                        if (!this.sender) throw new rj("unable to replace an unpublished track");
                        return "boolean" == typeof t ? i = t : void 0 !== t && (i = t.userProvidedTrack, n = t.stopProcessor), this.providedByUser = null == i || i, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e), n && this.processor && (yield this.stopProcessor()), this
                    })
                }
                restart(e) {
                    return nT(this, void 0, void 0, function*() {
                        this.manuallyStopped = !1;
                        let t = yield this.restartLock.lock();
                        try {
                            e || (e = this._constraints);
                            let {
                                deviceId: t,
                                facingMode: i
                            } = e, n = function(e, t) {
                                var i = {};
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]]);
                                return i
                            }(e, ["deviceId", "facingMode"]);
                            this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), {
                                constraints: e
                            }));
                            let r = {
                                audio: !1,
                                video: !1
                            };
                            this.kind === r1.Kind.Video ? r.video = !t && !i || {
                                deviceId: t,
                                facingMode: i
                            } : r.audio = !t || {
                                deviceId: t
                            }, this.attachedElements.forEach(e => {
                                r3(this.mediaStreamTrack, e)
                            }), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
                            let a = (yield navigator.mediaDevices.getUserMedia(r)).getTracks()[0];
                            return yield a.applyConstraints(n), a.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(a), this._constraints = e, this.emit(ed.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this
                        } finally {
                            t()
                        }
                    })
                }
                setTrackMuted(e) {
                    this.log.debug("setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"), this.logContext), (this.isMuted !== e || this._mediaStreamTrack.enabled === e) && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? ed.Muted : ed.Unmuted, this))
                }
                get needsReAcquisition() {
                    return "live" !== this._mediaStreamTrack.readyState || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack
                }
                handleAppVisibilityChanged() {
                    let e = Object.create(null, {
                        handleAppVisibilityChanged: {
                            get: () => super.handleAppVisibilityChanged
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        yield e.handleAppVisibilityChanged.call(this), ag() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), this.isInBackground || !this.needsReAcquisition || this.isUserProvided || this.isMuted || (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = !1))
                    })
                }
                stop() {
                    var e;
                    this.manuallyStopped = !0, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), null == (e = this.processor) || e.destroy(), this.processor = void 0
                }
                pauseUpstream() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t = yield this.pauseUpstreamLock.lock();
                        try {
                            if (!0 === this._isUpstreamPaused) return;
                            if (!this.sender) return void this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
                            this._isUpstreamPaused = !0, this.emit(ed.UpstreamPaused, this);
                            let t = rz();
                            if ((null == t ? void 0 : t.name) === "Safari" && 0 > aC(t.version, "12.0")) throw new rU("pauseUpstream is not supported on Safari < 12.");
                            (null == (e = this.sender.transport) ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(null))
                        } finally {
                            t()
                        }
                    })
                }
                resumeUpstream() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t = yield this.pauseUpstreamLock.lock();
                        try {
                            if (!1 === this._isUpstreamPaused) return;
                            if (!this.sender) return void this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
                            this._isUpstreamPaused = !1, this.emit(ed.UpstreamResumed, this), (null == (e = this.sender.transport) ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(this.mediaStreamTrack))
                        } finally {
                            t()
                        }
                    })
                }
                getRTCStatsReport() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        if (null == (e = this.sender) ? void 0 : e.getStats) return yield this.sender.getStats()
                    })
                }
                setProcessor(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return function*() {
                            var n;
                            let r = yield t.processorLock.lock();
                            try {
                                t.log.debug("setting up processor", t.logContext);
                                let r = document.createElement(t.kind),
                                    a = {
                                        kind: t.kind,
                                        track: t._mediaStreamTrack,
                                        element: r,
                                        audioContext: t.audioContext
                                    };
                                if (yield e.init(a), t.log.debug("processor initialized", t.logContext), t.processor && (yield t.stopProcessor()), "unknown" === t.kind) throw TypeError("cannot set processor on track of unknown kind");
                                if (r2(t._mediaStreamTrack, r), r.muted = !0, r.play().catch(e => t.log.error("failed to play processor element", Object.assign(Object.assign({}, t.logContext), {
                                        error: e
                                    }))), t.processor = e, t.processorElement = r, t.processor.processedTrack) {
                                    for (let e of t.attachedElements) e !== t.processorElement && i && (r3(t._mediaStreamTrack, e), r2(t.processor.processedTrack, e));
                                    yield null == (n = t.sender) ? void 0 : n.replaceTrack(t.processor.processedTrack)
                                }
                                t.emit(ed.TrackProcessorUpdate, t.processor)
                            } finally {
                                r()
                            }
                        }()
                    })
                }
                getProcessor() {
                    return this.processor
                }
                stopProcessor() {
                    return nT(this, arguments, void 0, function() {
                        var e = this;
                        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        return function*() {
                            var i, n;
                            e.processor && (e.log.debug("stopping processor", e.logContext), null == (i = e.processor.processedTrack) || i.stop(), yield e.processor.destroy(), e.processor = void 0, t || (null == (n = e.processorElement) || n.remove(), e.processorElement = void 0), yield e._mediaStreamTrack.applyConstraints(e._constraints), yield e.setMediaStreamTrack(e._mediaStreamTrack, !0), e.emit(ed.TrackProcessorUpdate))
                        }()
                    })
                }
                startPreConnectBuffer() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                    sI ? this.localTrackRecorder ? this.log.warn("preconnect buffer already started") : (this.localTrackRecorder = new sD(this, {
                        mimeType: "audio/webm;codecs=opus"
                    }), this.localTrackRecorder.start(e), this.autoStopPreConnectBuffer = setTimeout(() => {
                        this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer()
                    }, 1e4)) : this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext)
                }
                stopPreConnectBuffer() {
                    clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = void 0)
                }
                getPreConnectBuffer() {
                    var e;
                    return null == (e = this.localTrackRecorder) ? void 0 : e.byteStream
                }
                constructor(e, t, i) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = arguments.length > 4 ? arguments[4] : void 0;
                    super(e, t, r), this.manuallyStopped = !1, this._isUpstreamPaused = !1, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch(() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)), this.debouncedTrackMuteHandler = sh(() => nT(this, void 0, void 0, function*() {
                        yield this.pauseUpstream()
                    }), 5e3), this.handleTrackUnmuteEvent = () => nT(this, void 0, void 0, function*() {
                        this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream()
                    }), this.handleEnded = () => {
                        this.isInBackground && (this.reacquireTrack = !0), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(ed.Ended, this)
                    }, this.reacquireTrack = !1, this.providedByUser = n, this.muteLock = new eO, this.pauseUpstreamLock = new eO, this.processorLock = new eO, this.restartLock = new eO, this.setMediaStreamTrack(e, !0), this._constraints = e.getConstraints(), i && (this._constraints = i)
                }
            }
            class s_ extends sM {
                get enhancedNoiseCancellation() {
                    return this.isKrispNoiseFilterEnabled
                }
                mute() {
                    let e = Object.create(null, {
                        mute: {
                            get: () => super.mute
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        let t = yield this.muteLock.lock();
                        try {
                            if (this.isMuted) return this.log.debug("Track already muted", this.logContext), this;
                            return this.source === r1.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this
                        } finally {
                            t()
                        }
                    })
                }
                unmute() {
                    let e = Object.create(null, {
                        unmute: {
                            get: () => super.unmute
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        let t = yield this.muteLock.lock();
                        try {
                            if (!this.isMuted) return this.log.debug("Track already unmuted", this.logContext), this;
                            let t = this._constraints.deviceId && this._mediaStreamTrack.getSettings().deviceId !== aN(this._constraints.deviceId);
                            return this.source === r1.Source.Microphone && (this.stopOnMute || "ended" === this._mediaStreamTrack.readyState || t) && !this.isUserProvided && (this.log.debug("reacquiring mic track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this
                        } finally {
                            t()
                        }
                    })
                }
                restartTrack(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t;
                        if (e) {
                            let i = aX({
                                audio: e
                            });
                            "boolean" != typeof i.audio && (t = i.audio)
                        }
                        yield this.restart(t)
                    })
                }
                restart(e) {
                    let t = Object.create(null, {
                        restart: {
                            get: () => super.restart
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        let i = yield t.restart.call(this, e);
                        return this.checkForSilence(), i
                    })
                }
                startMonitor() {
                    !av() || this.monitorInterval || (this.monitorInterval = setInterval(() => {
                        this.monitorSender()
                    }, 2e3))
                }
                setProcessor(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t;
                        let i = yield this.processorLock.lock();
                        try {
                            if (!ab() && !this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
                            this.processor && (yield this.stopProcessor());
                            let i = {
                                kind: this.kind,
                                track: this._mediaStreamTrack,
                                audioContext: this.audioContext
                            };
                            this.log.debug("setting up audio processor ".concat(e.name), this.logContext), yield e.init(i), this.processor = e, this.processor.processedTrack && (yield null == (t = this.sender) ? void 0 : t.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(ed.TrackProcessorUpdate, this.processor)
                        } finally {
                            i()
                        }
                    })
                }
                setAudioContext(e) {
                    this.audioContext = e
                }
                getSenderStats() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t;
                        if (null == (e = this.sender) ? void 0 : e.getStats) return (yield this.sender.getStats()).forEach(e => {
                            "outbound-rtp" === e.type && (t = {
                                type: "audio",
                                streamId: e.id,
                                packetsSent: e.packetsSent,
                                packetsLost: e.packetsLost,
                                bytesSent: e.bytesSent,
                                timestamp: e.timestamp,
                                roundTripTime: e.roundTripTime,
                                jitter: e.jitter
                            })
                        }), t
                    })
                }
                checkForSilence() {
                    return nT(this, void 0, void 0, function*() {
                        let e = yield a$(this);
                        return e && (this.isMuted || this.log.warn("silence detected on local audio track", this.logContext), this.emit(ed.AudioSilenceDetected)), e
                    })
                }
                constructor(e, t) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = arguments.length > 4 ? arguments[4] : void 0;
                    super(e, r1.Kind.Audio, t, i, r), this.stopOnMute = !1, this.isKrispNoiseFilterEnabled = !1, this.monitorSender = () => nT(this, void 0, void 0, function*() {
                        let e;
                        if (!this.sender) {
                            this._currentBitrate = 0;
                            return
                        }
                        try {
                            e = yield this.getSenderStats()
                        } catch (e) {
                            this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
                                error: e
                            }));
                            return
                        }
                        e && this.prevStats && (this._currentBitrate = sO(e, this.prevStats)), this.prevStats = e
                    }), this.handleKrispNoiseFilterEnable = () => {
                        this.isKrispNoiseFilterEnabled = !0, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(ed.AudioTrackFeatureUpdate, this, tz.TF_ENHANCED_NOISE_CANCELLATION, !0)
                    }, this.handleKrispNoiseFilterDisable = () => {
                        this.isKrispNoiseFilterEnabled = !1, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(ed.AudioTrackFeatureUpdate, this, tz.TF_ENHANCED_NOISE_CANCELLATION, !1)
                    }, this.audioContext = n, this.checkForSilence()
                }
            }
            let sA = Object.values(r8),
                sN = Object.values(r7),
                sL = Object.values(ae),
                sU = [r8.h180, r8.h360],
                sj = [r7.h180, r7.h360],
                sF = ["q", "h", "f"];

            function sB(e, t, i, n) {
                var r, a, s;
                let o, c = null == n ? void 0 : n.videoEncoding;
                e && (c = null == n ? void 0 : n.screenShareEncoding);
                let l = null == n ? void 0 : n.simulcast,
                    d = null == n ? void 0 : n.scalabilityMode,
                    u = null == n ? void 0 : n.videoCodec;
                if (!c && !l && !d || !t || !i) return [{}];
                c || (c = function(e, t, i, n) {
                    let r = function(e, t, i) {
                            if (e) return sL;
                            let n = t > i ? t / i : i / t;
                            return Math.abs(n - 16 / 9) < Math.abs(n - 4 / 3) ? sA : sN
                        }(e, t, i),
                        {
                            encoding: a
                        } = r[0],
                        s = Math.max(t, i);
                    for (let e = 0; e < r.length; e += 1) {
                        let t = r[e];
                        if (a = t.encoding, t.width >= s) break
                    }
                    if (n) switch (n) {
                        case "av1":
                        case "h265":
                            (a = Object.assign({}, a)).maxBitrate = .7 * a.maxBitrate;
                            break;
                        case "vp9":
                            (a = Object.assign({}, a)).maxBitrate = .85 * a.maxBitrate
                    }
                    return a
                }(e, t, i, u), np.debug("using video encoding", c));
                let h = c.maxFramerate,
                    p = new r4(t, i, c.maxBitrate, c.maxFramerate, c.priority);
                if (d && al(u)) {
                    let e = new sK(d),
                        t = [];
                    if (e.spatial > 3) throw Error("unsupported scalabilityMode: ".concat(d));
                    let i = rz();
                    if (am() || ab() || (null == i ? void 0 : i.name) === "Chrome" && 0 > aC(null == i ? void 0 : i.version, "113")) {
                        let n = "h" == e.suffix ? 2 : 3,
                            r = ((s = i) || (s = rz()), (null == s ? void 0 : s.name) === "Safari" && aC(s.version, "18.3") > 0 || (null == s ? void 0 : s.os) === "iOS" && !!(null == s ? void 0 : s.osVersion) && aC(s.osVersion, "18.3") > 0);
                        for (let i = 0; i < e.spatial; i += 1) t.push({
                            rid: sF[2 - i],
                            maxBitrate: c.maxBitrate / Math.pow(n, i),
                            maxFramerate: p.encoding.maxFramerate,
                            scaleResolutionDownBy: r ? Math.pow(2, i) : void 0
                        });
                        t[0].scalabilityMode = d
                    } else t.push({
                        maxBitrate: c.maxBitrate,
                        maxFramerate: p.encoding.maxFramerate,
                        scalabilityMode: d
                    });
                    return p.encoding.priority && (t[0].priority = p.encoding.priority, t[0].networkPriority = p.encoding.priority), np.debug("using svc encoding", {
                        encodings: t
                    }), t
                }
                if (!l) return [c];
                let m = [];
                if ((m = e ? null != (r = sW(null == n ? void 0 : n.screenShareSimulcastLayers)) ? r : sV(e, p) : null != (a = sW(null == n ? void 0 : n.videoSimulcastLayers)) ? a : sV(e, p)).length > 0) {
                    let e = m[0];
                    m.length > 1 && ([, o] = m);
                    let n = Math.max(t, i);
                    if (n >= 960 && o) return sq(t, i, [e, o, p], h);
                    if (n >= 480) return sq(t, i, [e, p], h)
                }
                return sq(t, i, [p])
            }

            function sV(e, t) {
                if (e) return [{
                    scaleResolutionDownBy: 2,
                    fps: t.encoding.maxFramerate
                }].map(e => {
                    var i, n;
                    return new r4(Math.floor(t.width / e.scaleResolutionDownBy), Math.floor(t.height / e.scaleResolutionDownBy), Math.max(15e4, Math.floor(t.encoding.maxBitrate / (Math.pow(e.scaleResolutionDownBy, 2) * ((null != (i = t.encoding.maxFramerate) ? i : 30) / (null != (n = e.fps) ? n : 30))))), e.fps, t.encoding.priority)
                });
                let {
                    width: i,
                    height: n
                } = t, r = i > n ? i / n : n / i;
                return Math.abs(r - 16 / 9) < Math.abs(r - 4 / 3) ? sU : sj
            }

            function sq(e, t, i, n) {
                let r = [];
                if (i.forEach((i, a) => {
                        if (a >= sF.length) return;
                        let s = Math.min(e, t),
                            o = {
                                rid: sF[a],
                                scaleResolutionDownBy: Math.max(1, s / Math.min(i.width, i.height)),
                                maxBitrate: i.encoding.maxBitrate
                            },
                            c = n && i.encoding.maxFramerate ? Math.min(n, i.encoding.maxFramerate) : i.encoding.maxFramerate;
                        c && (o.maxFramerate = c);
                        let l = ah() || 0 === a;
                        i.encoding.priority && l && (o.priority = i.encoding.priority, o.networkPriority = i.encoding.priority), r.push(o)
                    }), ab() && "ios" === aT()) {
                    let e;
                    r.forEach(t => {
                        e ? t.maxFramerate && t.maxFramerate > e && (e = t.maxFramerate) : e = t.maxFramerate
                    });
                    let t = !0;
                    r.forEach(i => {
                        var n;
                        i.maxFramerate != e && (t && (t = !1, np.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), np.info('Setting framerate of encoding "'.concat(null != (n = i.rid) ? n : "", '" to ').concat(e)), i.maxFramerate = e)
                    })
                }
                return r
            }

            function sW(e) {
                if (e) return e.sort((e, t) => {
                    let {
                        encoding: i
                    } = e, {
                        encoding: n
                    } = t;
                    return i.maxBitrate > n.maxBitrate ? 1 : i.maxBitrate < n.maxBitrate ? -1 : i.maxBitrate === n.maxBitrate && i.maxFramerate && n.maxFramerate ? i.maxFramerate > n.maxFramerate ? 1 : -1 : 0
                })
            }
            class sK {
                toString() {
                    var e;
                    return "L".concat(this.spatial, "T").concat(this.temporal).concat(null != (e = this.suffix) ? e : "")
                }
                constructor(e) {
                    const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
                    if (!t) throw Error("invalid scalability mode");
                    if (this.spatial = parseInt(t[1]), this.temporal = parseInt(t[2]), t.length > 3) switch (t[3]) {
                        case "h":
                        case "_KEY":
                        case "_KEY_SHIFT":
                            this.suffix = t[3]
                    }
                }
            }
            class sH extends sM {
                get sender() {
                    return this._sender
                }
                set sender(e) {
                    this._sender = e, this.degradationPreference && this.setDegradationPreference(this.degradationPreference)
                }
                get isSimulcast() {
                    return !!this.sender && !!(this.sender.getParameters().encodings.length > 1)
                }
                startMonitor(e) {
                    var t;
                    if (this.signalClient = e, !av()) return;
                    let i = null == (t = this.sender) ? void 0 : t.getParameters();
                    i && (this.encodings = i.encodings), this.monitorInterval || (this.monitorInterval = setInterval(() => {
                        this.monitorSender()
                    }, 2e3))
                }
                stop() {
                    this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach(e => {
                        e.mediaStreamTrack.stop()
                    }), super.stop()
                }
                pauseUpstream() {
                    let e = Object.create(null, {
                        pauseUpstream: {
                            get: () => super.pauseUpstream
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        yield e.pauseUpstream.call(this);
                        try {
                            for (var t, i, n, r, a, s, o = !0, c = nS(this.simulcastCodecs.values()); !(t = (s = yield c.next()).done); o = !0) r = s.value, o = !1, yield null == (a = r.sender) ? void 0 : a.replaceTrack(null)
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                !o && !t && (n = c.return) && (yield n.call(c))
                            } finally {
                                if (i) throw i.error
                            }
                        }
                    })
                }
                resumeUpstream() {
                    let e = Object.create(null, {
                        resumeUpstream: {
                            get: () => super.resumeUpstream
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        yield e.resumeUpstream.call(this);
                        try {
                            for (var t, i, n, r, a, s, o = !0, c = nS(this.simulcastCodecs.values()); !(t = (s = yield c.next()).done); o = !0) r = s.value, o = !1, yield null == (a = r.sender) ? void 0 : a.replaceTrack(r.mediaStreamTrack)
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                !o && !t && (n = c.return) && (yield n.call(c))
                            } finally {
                                if (i) throw i.error
                            }
                        }
                    })
                }
                mute() {
                    let e = Object.create(null, {
                        mute: {
                            get: () => super.mute
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        let t = yield this.muteLock.lock();
                        try {
                            if (this.isMuted) return this.log.debug("Track already muted", this.logContext), this;
                            return this.source !== r1.Source.Camera || this.isUserProvided || (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this
                        } finally {
                            t()
                        }
                    })
                }
                unmute() {
                    let e = Object.create(null, {
                        unmute: {
                            get: () => super.unmute
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        let t = yield this.muteLock.lock();
                        try {
                            if (!this.isMuted) return this.log.debug("Track already unmuted", this.logContext), this;
                            return this.source !== r1.Source.Camera || this.isUserProvided || (this.log.debug("reacquiring camera track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this
                        } finally {
                            t()
                        }
                    })
                }
                setTrackMuted(e) {
                    for (let t of (super.setTrackMuted(e), this.simulcastCodecs.values())) t.mediaStreamTrack.enabled = !e
                }
                getSenderStats() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        if (!(null == (e = this.sender) ? void 0 : e.getStats)) return [];
                        let t = [],
                            i = yield this.sender.getStats();
                        return i.forEach(e => {
                            var n;
                            if ("outbound-rtp" === e.type) {
                                let r = {
                                        type: "video",
                                        streamId: e.id,
                                        frameHeight: e.frameHeight,
                                        frameWidth: e.frameWidth,
                                        framesPerSecond: e.framesPerSecond,
                                        framesSent: e.framesSent,
                                        firCount: e.firCount,
                                        pliCount: e.pliCount,
                                        nackCount: e.nackCount,
                                        packetsSent: e.packetsSent,
                                        bytesSent: e.bytesSent,
                                        qualityLimitationReason: e.qualityLimitationReason,
                                        qualityLimitationDurations: e.qualityLimitationDurations,
                                        qualityLimitationResolutionChanges: e.qualityLimitationResolutionChanges,
                                        rid: null != (n = e.rid) ? n : e.id,
                                        retransmittedPacketsSent: e.retransmittedPacketsSent,
                                        targetBitrate: e.targetBitrate,
                                        timestamp: e.timestamp
                                    },
                                    a = i.get(e.remoteId);
                                a && (r.jitter = a.jitter, r.packetsLost = a.packetsLost, r.roundTripTime = a.roundTripTime), t.push(r)
                            }
                        }), t.sort((e, t) => {
                            var i, n;
                            return (null != (i = t.frameWidth) ? i : 0) - (null != (n = e.frameWidth) ? n : 0)
                        }), t
                    })
                }
                setPublishingQuality(e) {
                    let t = [];
                    for (let i = eu.LOW; i <= eu.HIGH; i += 1) t.push(new i1({
                        quality: i,
                        enabled: i <= e
                    }));
                    this.log.debug("setting publishing quality. max quality ".concat(e), this.logContext), this.setPublishingLayers(al(this.codec), t)
                }
                restartTrack(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t;
                        if (e) {
                            let i = aX({
                                video: e
                            });
                            "boolean" != typeof i.video && (t = i.video)
                        }
                        yield this.restart(t), this.isCpuConstrained = !1;
                        try {
                            for (var i, n, r, a, s, o, c = !0, l = nS(this.simulcastCodecs.values()); !(i = (o = yield l.next()).done); c = !0) a = o.value, c = !1, a.sender && (null == (s = a.sender.transport) ? void 0 : s.state) !== "closed" && (a.mediaStreamTrack = this.mediaStreamTrack.clone(), yield a.sender.replaceTrack(a.mediaStreamTrack))
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                !c && !i && (r = l.return) && (yield r.call(l))
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    })
                }
                setProcessor(e) {
                    let t = Object.create(null, {
                        setProcessor: {
                            get: () => super.setProcessor
                        }
                    });
                    return nT(this, arguments, void 0, function(e) {
                        var i = this;
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return function*() {
                            if (yield t.setProcessor.call(i, e, n), null == (c = i.processor) ? void 0 : c.processedTrack) try {
                                for (var r, a, s, o, c, l, d, u = !0, h = nS(i.simulcastCodecs.values()); !(r = (d = yield h.next()).done); u = !0) o = d.value, u = !1, yield null == (l = o.sender) ? void 0 : l.replaceTrack(i.processor.processedTrack)
                            } catch (e) {
                                a = {
                                    error: e
                                }
                            } finally {
                                try {
                                    !u && !r && (s = h.return) && (yield s.call(h))
                                } finally {
                                    if (a) throw a.error
                                }
                            }
                        }()
                    })
                }
                setDegradationPreference(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.degradationPreference = e, this.sender) try {
                            this.log.debug("setting degradationPreference to ".concat(e), this.logContext);
                            let t = this.sender.getParameters();
                            t.degradationPreference = e, this.sender.setParameters(t)
                        } catch (e) {
                            this.log.warn("failed to set degradationPreference", Object.assign({
                                error: e
                            }, this.logContext))
                        }
                    })
                }
                addSimulcastTrack(e, t) {
                    if (this.simulcastCodecs.has(e)) return void this.log.error("".concat(e, " already added, skipping adding simulcast codec"), this.logContext);
                    let i = {
                        codec: e,
                        mediaStreamTrack: this.mediaStreamTrack.clone(),
                        sender: void 0,
                        encodings: t
                    };
                    return this.simulcastCodecs.set(e, i), i
                }
                setSimulcastTrackSender(e, t) {
                    let i = this.simulcastCodecs.get(e);
                    i && (i.sender = t, setTimeout(() => {
                        this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs)
                    }, 5e3))
                }
                setPublishingCodecs(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i, n, r, a, s, o;
                        if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), {
                                codecs: e,
                                currentCodec: this.codec
                            })), !this.codec && e.length > 0) return yield this.setPublishingLayers(al(e[0].codec), e[0].qualities), [];
                        this.subscribedCodecs = e;
                        let c = [];
                        try {
                            for (t = !0, i = nS(e); !(r = (n = yield i.next()).done); t = !0)
                                if (o = n.value, t = !1, this.codec && this.codec !== o.codec) {
                                    let e = this.simulcastCodecs.get(o.codec);
                                    if (this.log.debug("try setPublishingCodec for ".concat(o.codec), Object.assign(Object.assign({}, this.logContext), {
                                            simulcastCodecInfo: e
                                        })), e && e.sender) e.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(o.codec), this.logContext), yield sG(e.sender, e.encodings, o.qualities, this.senderLock, al(o.codec), this.log, this.logContext));
                                    else
                                        for (let e of o.qualities)
                                            if (e.enabled) {
                                                c.push(o.codec);
                                                break
                                            }
                                } else yield this.setPublishingLayers(al(o.codec), o.qualities)
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                !t && !r && (s = i.return) && (yield s.call(i))
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        return c
                    })
                }
                setPublishingLayers(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        this.optimizeForPerformance ? this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), {
                            qualities: t
                        })) : (this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), {
                            qualities: t
                        })), this.sender && this.encodings && (yield sG(this.sender, this.encodings, t, this.senderLock, e, this.log, this.logContext)))
                    })
                }
                prioritizePerformance() {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.sender) throw Error("sender not found");
                        let e = yield this.senderLock.lock();
                        try {
                            this.optimizeForPerformance = !0;
                            let e = this.sender.getParameters();
                            e.encodings = e.encodings.map((e, t) => {
                                var i;
                                return Object.assign(Object.assign({}, e), {
                                    active: 0 === t,
                                    scaleResolutionDownBy: Math.max(1, Math.ceil((null != (i = this.mediaStreamTrack.getSettings().height) ? i : 360) / 360)),
                                    scalabilityMode: 0 === t && al(this.codec) ? "L1T3" : void 0,
                                    maxFramerate: 15 * (0 === t),
                                    maxBitrate: 0 === t ? e.maxBitrate : 0
                                })
                            }), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), {
                                encodings: e.encodings
                            })), this.encodings = e.encodings, yield this.sender.setParameters(e)
                        } catch (e) {
                            this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), {
                                error: e
                            })), this.optimizeForPerformance = !1
                        } finally {
                            e()
                        }
                    })
                }
                handleAppVisibilityChanged() {
                    let e = Object.create(null, {
                        handleAppVisibilityChanged: {
                            get: () => super.handleAppVisibilityChanged
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        yield e.handleAppVisibilityChanged.call(this), ag() && this.isInBackground && this.source === r1.Source.Camera && (this._mediaStreamTrack.enabled = !1)
                    })
                }
                constructor(e, t) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    super(e, r1.Kind.Video, t, i, n), this.simulcastCodecs = new Map, this.degradationPreference = "balanced", this.isCpuConstrained = !1, this.optimizeForPerformance = !1, this.monitorSender = () => nT(this, void 0, void 0, function*() {
                        let e;
                        if (!this.sender) {
                            this._currentBitrate = 0;
                            return
                        }
                        try {
                            e = yield this.getSenderStats()
                        } catch (e) {
                            this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), {
                                error: e
                            }));
                            return
                        }
                        let t = new Map(e.map(e => [e.rid, e])),
                            i = e.some(e => "cpu" === e.qualityLimitationReason);
                        if (i !== this.isCpuConstrained && (this.isCpuConstrained = i, this.isCpuConstrained && this.emit(ed.CpuConstrained)), this.prevStats) {
                            let e = 0;
                            t.forEach((t, i) => {
                                var n;
                                let r = null == (n = this.prevStats) ? void 0 : n.get(i);
                                e += sO(t, r)
                            }), this._currentBitrate = e
                        }
                        this.prevStats = t
                    }), this.senderLock = new eO
                }
            }

            function sG(e, t, i, n, r, a, s) {
                return nT(this, void 0, void 0, function*() {
                    let o = yield n.lock();
                    a.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, s), {
                        sender: e,
                        qualities: i,
                        senderEncodings: t
                    }));
                    try {
                        let n = e.getParameters(),
                            {
                                encodings: o
                            } = n;
                        if (!o) return;
                        if (o.length !== t.length) return void a.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, s), {
                            encodings: o,
                            senderEncodings: t
                        }));
                        let c = !1;
                        r && i.some(e => e.enabled) && i.forEach(e => e.enabled = !0), o.forEach((e, n) => {
                            var r;
                            let o = null != (r = e.rid) ? r : "";
                            "" === o && (o = "q");
                            let l = sz(o),
                                d = i.find(e => e.quality === l);
                            d && e.active !== d.enabled && (c = !0, e.active = d.enabled, a.debug("setting layer ".concat(d.quality, " to ").concat(e.active ? "enabled" : "disabled"), s), ah() && (d.enabled ? (e.scaleResolutionDownBy = t[n].scaleResolutionDownBy, e.maxBitrate = t[n].maxBitrate, e.maxFrameRate = t[n].maxFrameRate) : (e.scaleResolutionDownBy = 4, e.maxBitrate = 10, e.maxFrameRate = 2)))
                        }), c && (n.encodings = o, a.debug("setting encodings", Object.assign(Object.assign({}, s), {
                            encodings: n.encodings
                        })), yield e.setParameters(n))
                    } finally {
                        o()
                    }
                })
            }

            function sz(e) {
                switch (e) {
                    case "f":
                    default:
                        return eu.HIGH;
                    case "h":
                        return eu.MEDIUM;
                    case "q":
                        return eu.LOW
                }
            }

            function sJ(e, t, i, n) {
                if (!i) return [new t4({
                    quality: eu.HIGH,
                    width: e,
                    height: t,
                    bitrate: 0,
                    ssrc: 0
                })];
                if (n) {
                    let n = new sK(i[0].scalabilityMode),
                        r = [],
                        a = "h" == n.suffix ? 1.5 : 2,
                        s = "h" == n.suffix ? 2 : 3;
                    for (let o = 0; o < n.spatial; o += 1) r.push(new t4({
                        quality: Math.min(eu.HIGH, n.spatial - 1) - o,
                        width: Math.ceil(e / Math.pow(a, o)),
                        height: Math.ceil(t / Math.pow(a, o)),
                        bitrate: i[0].maxBitrate ? Math.ceil(i[0].maxBitrate / Math.pow(s, o)) : 0,
                        ssrc: 0
                    }));
                    return r
                }
                return i.map(i => {
                    var n, r, a;
                    let s = null != (n = i.scaleResolutionDownBy) ? n : 1;
                    return new t4({
                        quality: sz(null != (r = i.rid) ? r : ""),
                        width: Math.ceil(e / s),
                        height: Math.ceil(t / s),
                        bitrate: null != (a = i.maxBitrate) ? a : 0,
                        ssrc: 0
                    })
                })
            }
            let sY = "_lossy",
                sQ = "_reliable",
                sX = "leave-reconnect";
            (U = eS || (eS = {}))[U.New = 0] = "New", U[U.Connected = 1] = "Connected", U[U.Disconnected = 2] = "Disconnected", U[U.Reconnecting = 3] = "Reconnecting", U[U.Closed = 4] = "Closed";
            class s$ extends nw.EventEmitter {
                get isClosed() {
                    return this._isClosed
                }
                get pendingReconnect() {
                    return !!this.reconnectTimeout
                }
                get logContext() {
                    var e, t, i, n, r, a;
                    return {
                        room: null == (t = null == (e = this.latestJoinResponse) ? void 0 : e.room) ? void 0 : t.name,
                        roomID: null == (n = null == (i = this.latestJoinResponse) ? void 0 : i.room) ? void 0 : n.sid,
                        participant: null == (a = null == (r = this.latestJoinResponse) ? void 0 : r.participant) ? void 0 : a.identity,
                        pID: this.participantSid
                    }
                }
                join(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        this.url = e, this.token = t, this.signalOpts = i, this.maxJoinAttempts = i.maxRetries;
                        try {
                            this.joinAttempts += 1, this.setupSignalClientCallbacks();
                            let r = yield this.client.join(e, t, i, n);
                            return this._isClosed = !1, this.latestJoinResponse = r, this.subscriberPrimary = r.subscriberPrimary, this.pcManager || (yield this.configure(r)), (!this.subscriberPrimary || r.fastPublish) && this.negotiate(), this.clientConfiguration = r.clientConfiguration, this.emit(el.SignalConnected, r), r
                        } catch (r) {
                            if (r instanceof rL && r.reason === er.ServerUnreachable && (this.log.warn("Couldn't connect to server, attempt ".concat(this.joinAttempts, " of ").concat(this.maxJoinAttempts), this.logContext), this.joinAttempts < this.maxJoinAttempts)) return this.join(e, t, i, n);
                            throw r
                        }
                    })
                }
                close() {
                    return nT(this, void 0, void 0, function*() {
                        let e = yield this.closingLock.lock();
                        if (this.isClosed) return void e();
                        try {
                            this._isClosed = !0, this.joinAttempts = 0, this.emit(el.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), yield this.cleanupPeerConnections(), yield this.cleanupClient()
                        } finally {
                            e()
                        }
                    })
                }
                cleanupPeerConnections() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        yield null == (e = this.pcManager) ? void 0 : e.close(), this.pcManager = void 0;
                        let t = e => {
                            e && (e.close(), e.onbufferedamountlow = null, e.onclose = null, e.onclosing = null, e.onerror = null, e.onmessage = null, e.onopen = null)
                        };
                        t(this.lossyDC), t(this.lossyDCSub), t(this.reliableDC), t(this.reliableDCSub), this.lossyDC = void 0, this.lossyDCSub = void 0, this.reliableDC = void 0, this.reliableDCSub = void 0, this.reliableMessageBuffer = new sa, this.reliableDataSequence = 1, this.reliableReceivedState.clear()
                    })
                }
                cleanupClient() {
                    return nT(this, void 0, void 0, function*() {
                        yield this.client.close(), this.client.resetCallbacks()
                    })
                }
                addTrack(e) {
                    if (this.pendingTrackResolvers[e.cid]) throw new rj("a track with the same ID has already been published");
                    return new Promise((t, i) => {
                        let n = setTimeout(() => {
                            delete this.pendingTrackResolvers[e.cid], i(new rL("publication of local track timed out, no response from server", er.Timeout))
                        }, 1e4);
                        this.pendingTrackResolvers[e.cid] = {
                            resolve: e => {
                                clearTimeout(n), t(e)
                            },
                            reject: () => {
                                clearTimeout(n), i(Error("Cancelled publication by calling unpublish"))
                            }
                        }, this.client.sendAddTrack(e)
                    })
                }
                removeTrack(e) {
                    if (e.track && this.pendingTrackResolvers[e.track.id]) {
                        let {
                            reject: t
                        } = this.pendingTrackResolvers[e.track.id];
                        t && t(), delete this.pendingTrackResolvers[e.track.id]
                    }
                    try {
                        return this.pcManager.removeTrack(e), !0
                    } catch (e) {
                        this.log.warn("failed to remove track", Object.assign(Object.assign({}, this.logContext), {
                            error: e
                        }))
                    }
                    return !1
                }
                updateMuteStatus(e, t) {
                    this.client.sendMuteTrack(e, t)
                }
                get dataSubscriberReadyState() {
                    var e;
                    return null == (e = this.reliableDCSub) ? void 0 : e.readyState
                }
                getConnectedServerAddress() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        return null == (e = this.pcManager) ? void 0 : e.getConnectedAddress()
                    })
                }
                setRegionUrlProvider(e) {
                    this.regionUrlProvider = e
                }
                configure(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i, n;
                        if (this.pcManager && this.pcManager.currentState !== eT.NEW) return;
                        this.participantSid = null == (t = e.participant) ? void 0 : t.sid;
                        let r = this.makeRTCConfiguration(e);
                        this.pcManager = new sw(r, e.subscriberPrimary, this.loggerOptions), this.emit(el.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (e, t) => {
                            this.client.sendIceCandidate(e, t)
                        }, this.pcManager.onPublisherOffer = (e, t) => {
                            this.client.sendOffer(e, t)
                        }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (t, i, n) => nT(this, void 0, void 0, function*() {
                            if (this.log.debug("primary PC state changed ".concat(t), this.logContext), ["closed", "disconnected", "failed"].includes(i) && (this.publisherConnectionPromise = void 0), t === eT.CONNECTED) {
                                let t = this.pcState === eS.New;
                                this.pcState = eS.Connected, t && this.emit(el.Connected, e)
                            } else t === eT.FAILED && this.pcState === eS.Connected && (this.pcState = eS.Disconnected, this.handleDisconnect("peerconnection failed", "failed" === n ? tH.RR_SUBSCRIBER_FAILED : tH.RR_PUBLISHER_FAILED));
                            let r = this.client.isDisconnected || this.client.currentState === ef.RECONNECTING,
                                a = [eT.FAILED, eT.CLOSING, eT.CLOSED].includes(t);
                            r && a && !this._isClosed && this.emit(el.Offline)
                        }), this.pcManager.onTrack = e => {
                            this.emit(el.MediaTrackAdded, e.track, e.streams[0], e.receiver)
                        }, void 0 !== (n = null == (i = e.serverInfo) ? void 0 : i.protocol) && n > 13 || this.createDataChannels()
                    })
                }
                setupSignalClientCallbacks() {
                    this.client.onAnswer = (e, t) => nT(this, void 0, void 0, function*() {
                        this.pcManager && (this.log.debug("received server answer", Object.assign(Object.assign({}, this.logContext), {
                            RTCSdpType: e.type
                        })), yield this.pcManager.setPublisherAnswer(e, t))
                    }), this.client.onTrickle = (e, t) => {
                        this.pcManager && (this.log.debug("got ICE candidate from peer", Object.assign(Object.assign({}, this.logContext), {
                            candidate: e,
                            target: t
                        })), this.pcManager.addIceCandidate(e, t))
                    }, this.client.onOffer = (e, t) => nT(this, void 0, void 0, function*() {
                        if (this.latestRemoteOfferId = t, !this.pcManager) return;
                        let i = yield this.pcManager.createSubscriberAnswerFromOffer(e, t);
                        i && this.client.sendAnswer(i, t)
                    }), this.client.onLocalTrackPublished = e => {
                        var t;
                        if (this.log.debug("received trackPublishedResponse", Object.assign(Object.assign({}, this.logContext), {
                                cid: e.cid,
                                track: null == (t = e.track) ? void 0 : t.sid
                            })), !this.pendingTrackResolvers[e.cid]) return void this.log.error("missing track resolver for ".concat(e.cid), Object.assign(Object.assign({}, this.logContext), {
                            cid: e.cid
                        }));
                        let {
                            resolve: i
                        } = this.pendingTrackResolvers[e.cid];
                        delete this.pendingTrackResolvers[e.cid], i(e.track)
                    }, this.client.onLocalTrackUnpublished = e => {
                        this.emit(el.LocalTrackUnpublished, e)
                    }, this.client.onLocalTrackSubscribed = e => {
                        this.emit(el.LocalTrackSubscribed, e)
                    }, this.client.onTokenRefresh = e => {
                        this.token = e
                    }, this.client.onRemoteMuteChanged = (e, t) => {
                        this.emit(el.RemoteMute, e, t)
                    }, this.client.onSubscribedQualityUpdate = e => {
                        this.emit(el.SubscribedQualityUpdate, e)
                    }, this.client.onRoomMoved = e => {
                        var t;
                        this.participantSid = null == (t = e.participant) ? void 0 : t.sid, this.latestJoinResponse && (this.latestJoinResponse.room = e.room), this.emit(el.RoomMoved, e)
                    }, this.client.onClose = () => {
                        this.handleDisconnect("signal", tH.RR_SIGNAL_DISCONNECTED)
                    }, this.client.onLeave = e => {
                        switch (this.log.debug("client leave request", Object.assign(Object.assign({}, this.logContext), {
                                reason: null == e ? void 0 : e.reason
                            })), e.regions && this.regionUrlProvider && (this.log.debug("updating regions", this.logContext), this.regionUrlProvider.setServerReportedRegions(e.regions)), e.action) {
                            case iH.DISCONNECT:
                                this.emit(el.Disconnected, null == e ? void 0 : e.reason), this.close();
                                break;
                            case iH.RECONNECT:
                                this.fullReconnectOnNext = !0, this.handleDisconnect(sX);
                                break;
                            case iH.RESUME:
                                this.handleDisconnect(sX)
                        }
                    }
                }
                makeRTCConfiguration(e) {
                    var t;
                    let i = Object.assign({}, this.rtcConfig);
                    if ((null == (t = this.signalOpts) ? void 0 : t.e2eeEnabled) && (this.log.debug("E2EE - setting up transports with insertable streams", this.logContext), i.encodedInsertableStreams = !0), e.iceServers && !i.iceServers) {
                        let t = [];
                        e.iceServers.forEach(e => {
                            let i = {
                                urls: e.urls
                            };
                            e.username && (i.username = e.username), e.credential && (i.credential = e.credential), t.push(i)
                        }), i.iceServers = t
                    }
                    return e.clientConfiguration && e.clientConfiguration.forceRelay === tW.ENABLED && (i.iceTransportPolicy = "relay"), i.sdpSemantics = "unified-plan", i.continualGatheringPolicy = "gather_continually", i
                }
                createDataChannels() {
                    this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null, this.lossyDC.onerror = null), this.reliableDC && (this.reliableDC.onmessage = null, this.reliableDC.onerror = null), this.lossyDC = this.pcManager.createPublisherDataChannel(sY, {
                        ordered: !1,
                        maxRetransmits: 0
                    }), this.reliableDC = this.pcManager.createPublisherDataChannel(sQ, {
                        ordered: !0
                    }), this.lossyDC.onmessage = this.handleDataMessage, this.reliableDC.onmessage = this.handleDataMessage, this.lossyDC.onerror = this.handleDataError, this.reliableDC.onerror = this.handleDataError, this.lossyDC.bufferedAmountLowThreshold = 65535, this.reliableDC.bufferedAmountLowThreshold = 65535, this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow, this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow)
                }
                createSender(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        if (an()) return yield this.createTransceiverRTCRtpSender(e, t, i);
                        if (ar()) return this.log.warn("using add-track fallback", this.logContext), yield this.createRTCRtpSender(e.mediaStreamTrack);
                        throw new rB("Required webRTC APIs not supported on this device")
                    })
                }
                createSimulcastSender(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        if (an()) return this.createSimulcastTransceiverSender(e, t, i, n);
                        if (ar()) return this.log.debug("using add-track fallback", this.logContext), this.createRTCRtpSender(e.mediaStreamTrack);
                        throw new rB("Cannot stream on this device")
                    })
                }
                createTransceiverRTCRtpSender(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.pcManager) throw new rB("publisher is closed");
                        let n = [];
                        e.mediaStream && n.push(e.mediaStream), aq(e) && (e.codec = t.videoCodec);
                        let r = {
                            direction: "sendonly",
                            streams: n
                        };
                        return i && (r.sendEncodings = i), (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, r)).sender
                    })
                }
                createSimulcastTransceiverSender(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.pcManager) throw new rB("publisher is closed");
                        let r = {
                            direction: "sendonly"
                        };
                        n && (r.sendEncodings = n);
                        let a = yield this.pcManager.addPublisherTransceiver(t.mediaStreamTrack, r);
                        if (i.videoCodec) return e.setSimulcastTrackSender(i.videoCodec, a.sender), a.sender
                    })
                }
                createRTCRtpSender(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.pcManager) throw new rB("publisher is closed");
                        return this.pcManager.addPublisherTrack(e)
                    })
                }
                attemptReconnect(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i, n;
                        if (!this._isClosed) {
                            if (this.attemptingReconnect) return void np.warn("already attempting reconnect, returning early", this.logContext);
                            ((null == (t = this.clientConfiguration) ? void 0 : t.resumeConnection) === tW.DISABLED || (null != (n = null == (i = this.pcManager) ? void 0 : i.currentState) ? n : eT.NEW) === eT.NEW) && (this.fullReconnectOnNext = !0);
                            try {
                                this.attemptingReconnect = !0, this.fullReconnectOnNext ? yield this.restartConnection(): yield this.resumeConnection(e), this.clearPendingReconnect(), this.fullReconnectOnNext = !1
                            } catch (t) {
                                this.reconnectAttempts += 1;
                                let e = !0;
                                t instanceof rB ? (this.log.debug("received unrecoverable error", Object.assign(Object.assign({}, this.logContext), {
                                    error: t
                                })), e = !1) : t instanceof sZ || (this.fullReconnectOnNext = !0), e ? this.handleDisconnect("reconnect", tH.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up"), this.logContext), this.emit(el.Disconnected), yield this.close())
                            } finally {
                                this.attemptingReconnect = !1
                            }
                        }
                    })
                }
                getNextRetryDelay(e) {
                    try {
                        return this.reconnectPolicy.nextRetryDelayInMs(e)
                    } catch (e) {
                        this.log.warn("encountered error in reconnect policy", Object.assign(Object.assign({}, this.logContext), {
                            error: e
                        }))
                    }
                    return null
                }
                restartConnection(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i, n;
                        try {
                            let i;
                            if (!this.url || !this.token) throw new rB("could not reconnect, url or token not saved");
                            this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts), this.logContext), this.emit(el.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
                            try {
                                if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present", this.logContext), new sZ;
                                i = yield this.join(null != e ? e : this.url, this.token, this.signalOpts)
                            } catch (e) {
                                if (e instanceof rL && e.reason === er.NotAllowed) throw new rB("could not reconnect, token might be expired");
                                throw new sZ
                            }
                            if (this.shouldFailNext) throw this.shouldFailNext = !1, Error("simulated failure");
                            if (this.client.setReconnected(), this.emit(el.SignalRestarted, i), yield this.waitForPCReconnected(), this.client.currentState !== ef.CONNECTED) throw new sZ("Signal connection got severed during reconnect");
                            null == (t = this.regionUrlProvider) || t.resetAttempts(), this.emit(el.Restarted)
                        } catch (t) {
                            let e = yield null == (i = this.regionUrlProvider) ? void 0 : i.getNextBestRegionUrl();
                            if (e) return void(yield this.restartConnection(e));
                            throw null == (n = this.regionUrlProvider) || n.resetAttempts(), t
                        }
                    })
                }
                resumeConnection(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t;
                        let i;
                        if (!this.url || !this.token) throw new rB("could not reconnect, url or token not saved");
                        if (!this.pcManager) throw new rB("publisher and subscriber connections unset");
                        this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts), this.logContext), this.emit(el.Resuming);
                        try {
                            this.setupSignalClientCallbacks(), i = yield this.client.reconnect(this.url, this.token, this.participantSid, e)
                        } catch (t) {
                            let e = "";
                            if (t instanceof Error && (e = t.message, this.log.error(t.message, Object.assign(Object.assign({}, this.logContext), {
                                    error: t
                                }))), t instanceof rL && t.reason === er.NotAllowed) throw new rB("could not reconnect, token might be expired");
                            if (t instanceof rL && t.reason === er.LeaveRequest) throw t;
                            throw new sZ(e)
                        }
                        if (this.emit(el.SignalResumed), i) {
                            let e = this.makeRTCConfiguration(i);
                            this.pcManager.updateConfiguration(e), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = i.serverInfo)
                        } else this.log.warn("Did not receive reconnect response", this.logContext);
                        if (this.shouldFailNext) throw this.shouldFailNext = !1, Error("simulated failure");
                        if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== ef.CONNECTED) throw new sZ("Signal connection got severed during reconnect");
                        this.client.setReconnected(), (null == (t = this.reliableDC) ? void 0 : t.readyState) === "open" && null === this.reliableDC.id && this.createDataChannels(), (null == i ? void 0 : i.lastMessageSeq) && this.resendReliableMessagesForResume(i.lastMessageSeq), this.emit(el.Resumed)
                    })
                }
                waitForPCInitialConnection(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.pcManager) throw new rB("PC manager is closed");
                        yield this.pcManager.ensurePCTransportConnection(t, e)
                    })
                }
                waitForPCReconnected() {
                    return nT(this, void 0, void 0, function*() {
                        this.pcState = eS.Reconnecting, this.log.debug("waiting for peer connection to reconnect", this.logContext);
                        try {
                            if (yield ai(2e3), !this.pcManager) throw new rB("PC manager is closed");
                            yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = eS.Connected
                        } catch (e) {
                            throw this.pcState = eS.Disconnected, new rL("could not establish PC connection, ".concat(e.message), er.InternalError)
                        }
                    })
                }
                publishRpcResponse(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        let r = new t5({
                            destinationIdentities: [e],
                            kind: t9.RELIABLE,
                            value: {
                                case: "rpcResponse",
                                value: new io({
                                    requestId: t,
                                    value: n ? {
                                        case: "error",
                                        value: n.toProto()
                                    } : {
                                        case: "payload",
                                        value: null != i ? i : ""
                                    }
                                })
                            }
                        });
                        yield this.sendDataPacket(r, t9.RELIABLE)
                    })
                }
                publishRpcAck(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i = new t5({
                            destinationIdentities: [e],
                            kind: t9.RELIABLE,
                            value: {
                                case: "rpcAck",
                                value: new is({
                                    requestId: t
                                })
                            }
                        });
                        yield this.sendDataPacket(i, t9.RELIABLE)
                    })
                }
                sendDataPacket(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.ensurePublisherConnected(t), t === t9.RELIABLE && (e.sequence = this.reliableDataSequence, this.reliableDataSequence += 1);
                        let i = e.toBinary(),
                            n = this.dataChannelForKind(t);
                        if (n) {
                            if (t === t9.RELIABLE && this.reliableMessageBuffer.push({
                                    data: i,
                                    sequence: e.sequence
                                }), this.attemptingReconnect) return;
                            n.send(i)
                        }
                        this.updateAndEmitDCBufferStatus(t)
                    })
                }
                resendReliableMessagesForResume(e) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.ensurePublisherConnected(t9.RELIABLE);
                        let t = this.dataChannelForKind(t9.RELIABLE);
                        t && (this.reliableMessageBuffer.popToSequence(e), this.reliableMessageBuffer.getAll().forEach(e => {
                            t.send(e.data)
                        })), this.updateAndEmitDCBufferStatus(t9.RELIABLE)
                    })
                }
                waitForBufferStatusLow(e) {
                    return new Promise((t, i) => nT(this, void 0, void 0, function*() {
                        if (this.isBufferStatusLow(e)) t();
                        else {
                            let n = () => i("Engine closed");
                            for (this.once(el.Closing, n); !this.dcBufferStatus.get(e);) yield ai(10);
                            this.off(el.Closing, n), t()
                        }
                    }))
                }
                ensureDataTransportConnected(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.subscriberPrimary;
                        return function*() {
                            var n;
                            if (!t.pcManager) throw new rB("PC manager is closed");
                            let r = i ? t.pcManager.subscriber : t.pcManager.publisher,
                                a = i ? "Subscriber" : "Publisher";
                            if (!r) throw new rL("".concat(a, " connection not set"), er.InternalError);
                            let s = !1;
                            i || t.dataChannelForKind(e, i) || (t.createDataChannels(), s = !0), s || i || t.pcManager.publisher.isICEConnected || "checking" === t.pcManager.publisher.getICEConnectionState() || (s = !0), s && t.negotiate();
                            let o = t.dataChannelForKind(e, i);
                            if ((null == o ? void 0 : o.readyState) === "open") return;
                            let c = new Date().getTime() + t.peerConnectionTimeout;
                            for (; new Date().getTime() < c;) {
                                if (r.isICEConnected && (null == (n = t.dataChannelForKind(e, i)) ? void 0 : n.readyState) === "open") return;
                                yield ai(50)
                            }
                            throw new rL("could not establish ".concat(a, " connection, state: ").concat(r.getICEConnectionState()), er.InternalError)
                        }()
                    })
                }
                ensurePublisherConnected(e) {
                    return nT(this, void 0, void 0, function*() {
                        this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e, !1)), yield this.publisherConnectionPromise
                    })
                }
                verifyTransport() {
                    return !!this.pcManager && this.pcManager.currentState === eT.CONNECTED && !!this.client.ws && this.client.ws.readyState !== WebSocket.CLOSED
                }
                negotiate() {
                    return nT(this, void 0, void 0, function*() {
                        return new Promise((e, t) => nT(this, void 0, void 0, function*() {
                            if (!this.pcManager) return void t(new rV("PC manager is closed"));
                            this.pcManager.requirePublisher(), 0 != this.pcManager.publisher.getTransceivers().length || this.lossyDC || this.reliableDC || this.createDataChannels();
                            let i = new AbortController,
                                n = () => {
                                    i.abort(), this.log.debug("engine disconnected while negotiation was ongoing", this.logContext), e()
                                };
                            this.isClosed && t("cannot negotiate on closed engine"), this.on(el.Closing, n), this.pcManager.publisher.once(sf, e => {
                                let t = new Map;
                                e.forEach(e => {
                                    let i = e.codec.toLowerCase();
                                    r9.includes(i) && t.set(e.payload, i)
                                }), this.emit(el.RTPVideoMapUpdate, t)
                            });
                            try {
                                yield this.pcManager.negotiate(i), e()
                            } catch (e) {
                                e instanceof rV && (this.fullReconnectOnNext = !0), this.handleDisconnect("negotiation", tH.RR_UNKNOWN), t(e)
                            } finally {
                                this.off(el.Closing, n)
                            }
                        }))
                    })
                }
                dataChannelForKind(e, t) {
                    if (t) {
                        if (e === t9.LOSSY) return this.lossyDCSub;
                        if (e === t9.RELIABLE) return this.reliableDCSub
                    } else {
                        if (e === t9.LOSSY) return this.lossyDC;
                        if (e === t9.RELIABLE) return this.reliableDC
                    }
                }
                sendSyncState(e, t) {
                    var i, n;
                    let r;
                    if (!this.pcManager) return void this.log.warn("sync state cannot be sent without peer connection setup", this.logContext);
                    let a = this.pcManager.subscriber.getLocalDescription(),
                        s = this.pcManager.subscriber.getRemoteDescription(),
                        o = null == (n = null == (i = this.signalOpts) ? void 0 : i.autoSubscribe) || n,
                        c = [],
                        l = [];
                    e.forEach(e => {
                        e.isDesired !== o && c.push(e.trackSid), e.isEnabled || l.push(e.trackSid)
                    }), this.client.sendSyncState(new i8({
                        answer: a ? sr({
                            sdp: a.sdp,
                            type: a.type
                        }) : void 0,
                        offer: s ? sr({
                            sdp: s.sdp,
                            type: s.type
                        }) : void 0,
                        subscription: new iB({
                            trackSids: c,
                            subscribe: !o,
                            participantTracks: []
                        }),
                        publishTracks: (r = [], t.forEach(e => {
                            void 0 !== e.track && r.push(new iL({
                                cid: e.track.mediaStreamID,
                                track: e.trackInfo
                            }))
                        }), r),
                        dataChannels: this.dataChannelsInfo(),
                        trackSidsDisabled: l,
                        datachannelReceiveStates: this.reliableReceivedState.map((e, t) => new i7({
                            publisherSid: t,
                            lastSeq: e
                        }))
                    }))
                }
                failNext() {
                    this.shouldFailNext = !0
                }
                dataChannelsInfo() {
                    let e = [],
                        t = (t, i) => {
                            (null == t ? void 0 : t.id) !== void 0 && null !== t.id && e.push(new ne({
                                label: t.label,
                                id: t.id,
                                target: i
                            }))
                        };
                    return t(this.dataChannelForKind(t9.LOSSY), iE.PUBLISHER), t(this.dataChannelForKind(t9.RELIABLE), iE.PUBLISHER), t(this.dataChannelForKind(t9.LOSSY, !0), iE.SUBSCRIBER), t(this.dataChannelForKind(t9.RELIABLE, !0), iE.SUBSCRIBER), e
                }
                clearReconnectTimeout() {
                    this.reconnectTimeout && rZ.clearTimeout(this.reconnectTimeout)
                }
                clearPendingReconnect() {
                    this.clearReconnectTimeout(), this.reconnectAttempts = 0
                }
                registerOnLineListener() {
                    av() && window.addEventListener("online", this.handleBrowserOnLine)
                }
                deregisterOnLineListener() {
                    av() && window.removeEventListener("online", this.handleBrowserOnLine)
                }
                constructor(e) {
                    var t;
                    super(), this.options = e, this.rtcConfig = {}, this.peerConnectionTimeout = sC.peerConnectionTimeout, this.fullReconnectOnNext = !1, this.latestRemoteOfferId = 0, this.subscriberPrimary = !1, this.pcState = eS.New, this._isClosed = !0, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = !1, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = !1, this.log = np, this.reliableDataSequence = 1, this.reliableMessageBuffer = new sa, this.reliableReceivedState = new ss(3e4), this.handleDataChannel = e => nT(this, [e], void 0, function(e) {
                        var t = this;
                        let {
                            channel: i
                        } = e;
                        return function*() {
                            if (i) {
                                if (i.label === sQ) t.reliableDCSub = i;
                                else {
                                    if (i.label !== sY) return;
                                    t.lossyDCSub = i
                                }
                                t.log.debug("on data channel ".concat(i.id, ", ").concat(i.label), t.logContext), i.onmessage = t.handleDataMessage
                            }
                        }()
                    }), this.handleDataMessage = e => nT(this, void 0, void 0, function*() {
                        var t, i, n, r;
                        let a = yield this.dataProcessLock.lock();
                        try {
                            let a, s, o;
                            if (e.data instanceof ArrayBuffer) a = e.data;
                            else {
                                if (!(e.data instanceof Blob)) return void this.log.error("unsupported data type", Object.assign(Object.assign({}, this.logContext), {
                                    data: e.data
                                }));
                                a = yield e.data.arrayBuffer()
                            }
                            let c = t5.fromBinary(new Uint8Array(a));
                            if (c.sequence > 0 && "" !== c.participantSid) {
                                let e = this.reliableReceivedState.get(c.participantSid);
                                if (e && c.sequence <= e) return;
                                this.reliableReceivedState.set(c.participantSid, c.sequence)
                            }(null == (t = c.value) ? void 0 : t.case) === "speaker" ? this.emit(el.ActiveSpeakersUpdate, c.value.value.speakers): ((null == (i = c.value) ? void 0 : i.case) === "user" && (n = c, r = c.value.value, s = n.participantIdentity ? n.participantIdentity : r.participantIdentity, n.participantIdentity = s, r.participantIdentity = s, o = 0 !== n.destinationIdentities.length ? n.destinationIdentities : r.destinationIdentities, n.destinationIdentities = o, r.destinationIdentities = o), this.emit(el.DataPacketReceived, c))
                        } finally {
                            a()
                        }
                    }), this.handleDataError = e => {
                        let t = 0 === e.currentTarget.maxRetransmits ? "lossy" : "reliable";
                        if (e instanceof ErrorEvent && e.error) {
                            let {
                                error: i
                            } = e.error;
                            this.log.error("DataChannel error on ".concat(t, ": ").concat(e.message), Object.assign(Object.assign({}, this.logContext), {
                                error: i
                            }))
                        } else this.log.error("Unknown DataChannel error on ".concat(t), Object.assign(Object.assign({}, this.logContext), {
                            event: e
                        }))
                    }, this.handleBufferedAmountLow = e => {
                        let t = 0 === e.currentTarget.maxRetransmits ? t9.LOSSY : t9.RELIABLE;
                        this.updateAndEmitDCBufferStatus(t)
                    }, this.handleDisconnect = (e, t) => {
                        if (this._isClosed) return;
                        this.log.warn("".concat(e, " disconnected"), this.logContext), 0 === this.reconnectAttempts && (this.reconnectStart = Date.now());
                        let i = e => {
                                this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(e, "ms. giving up"), this.logContext), this.emit(el.Disconnected), this.close()
                            },
                            n = Date.now() - this.reconnectStart,
                            r = this.getNextRetryDelay({
                                elapsedMs: n,
                                retryCount: this.reconnectAttempts
                            });
                        null === r ? i(n) : (e === sX && (r = 0), this.log.debug("reconnecting in ".concat(r, "ms"), this.logContext), this.clearReconnectTimeout(), this.token && this.regionUrlProvider && this.regionUrlProvider.updateToken(this.token), this.reconnectTimeout = rZ.setTimeout(() => this.attemptReconnect(t).finally(() => this.reconnectTimeout = void 0), r))
                    }, this.waitForRestarted = () => new Promise((e, t) => {
                        this.pcState === eS.Connected && e();
                        let i = () => {
                                this.off(el.Disconnected, n), e()
                            },
                            n = () => {
                                this.off(el.Restarted, i), t()
                            };
                        this.once(el.Restarted, i), this.once(el.Disconnected, n)
                    }), this.updateAndEmitDCBufferStatus = e => {
                        let t = this.isBufferStatusLow(e);
                        void 0 !== t && t !== this.dcBufferStatus.get(e) && (this.dcBufferStatus.set(e, t), this.emit(el.DCBufferStatusChanged, t, e))
                    }, this.isBufferStatusLow = e => {
                        let t = this.dataChannelForKind(e);
                        if (t) return e === t9.RELIABLE && this.reliableMessageBuffer.alignBufferedAmount(t.bufferedAmount), t.bufferedAmount <= t.bufferedAmountLowThreshold
                    }, this.handleBrowserOnLine = () => {
                        this.client.currentState === ef.RECONNECTING && (this.clearReconnectTimeout(), this.attemptReconnect(tH.RR_SIGNAL_DISCONNECTED))
                    }, this.log = nf(null != (t = e.loggerName) ? t : X.Engine), this.loggerOptions = {
                        loggerName: e.loggerName,
                        loggerContextCb: () => this.logContext
                    }, this.client = new si(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.registerOnLineListener(), this.closingLock = new eO, this.dataProcessLock = new eO, this.dcBufferStatus = new Map([
                        [t9.LOSSY, !0],
                        [t9.RELIABLE, !0]
                    ]), this.client.onParticipantUpdate = e => this.emit(el.ParticipantUpdate, e), this.client.onConnectionQuality = e => this.emit(el.ConnectionQualityUpdate, e), this.client.onRoomUpdate = e => this.emit(el.RoomUpdate, e), this.client.onSubscriptionError = e => this.emit(el.SubscriptionError, e), this.client.onSubscriptionPermissionUpdate = e => this.emit(el.SubscriptionPermissionUpdate, e), this.client.onSpeakersChanged = e => this.emit(el.SpeakersChanged, e), this.client.onStreamStateUpdate = e => this.emit(el.StreamStateChanged, e), this.client.onRequestResponse = e => this.emit(el.SignalRequestResponse, e)
                }
            }
            class sZ extends Error {}
            class s0 {
                updateToken(e) {
                    this.token = e
                }
                isCloud() {
                    return ay(this.serverUrl)
                }
                getServerUrl() {
                    return this.serverUrl
                }
                getNextBestRegionUrl(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
                        (!this.regionSettings || Date.now() - this.lastUpdateAt > this.settingsCacheTime) && (this.regionSettings = yield this.fetchRegionSettings(e));
                        let t = this.regionSettings.regions.filter(e => !this.attemptedRegions.find(t => t.url === e.url));
                        if (!(t.length > 0)) return null;
                        {
                            let e = t[0];
                            return this.attemptedRegions.push(e), np.debug("next region: ".concat(e.region)), e.url
                        }
                    })
                }
                resetAttempts() {
                    this.attemptedRegions = []
                }
                fetchRegionSettings(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t;
                        let i = yield fetch("".concat((t = this.serverUrl, "".concat(t.protocol.replace("ws", "http"), "//").concat(t.host, "/settings")), "/regions"), {
                            headers: {
                                authorization: "Bearer ".concat(this.token)
                            },
                            signal: e
                        });
                        if (i.ok) {
                            let e = yield i.json();
                            return this.lastUpdateAt = Date.now(), e
                        }
                        throw new rL("Could not fetch region settings: ".concat(i.statusText), 401 === i.status ? er.NotAllowed : er.InternalError, i.status)
                    })
                }
                setServerReportedRegions(e) {
                    this.regionSettings = e, this.lastUpdateAt = Date.now()
                }
                constructor(e, t) {
                    this.lastUpdateAt = 0, this.settingsCacheTime = 3e3, this.attemptedRegions = [], this.serverUrl = new URL(e), this.token = t
                }
            }
            class s1 {
                get info() {
                    return this._info
                }
                constructor(e, t, i) {
                    this.reader = t, this.totalByteSize = i, this._info = e, this.bytesReceived = 0
                }
            }
            K = Symbol.asyncIterator;
            class s2 extends s1 {
                handleChunkReceived(e) {
                    var t;
                    this.bytesReceived += e.content.byteLength;
                    let i = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
                    null == (t = this.onProgress) || t.call(this, i)
                } [K]() {
                    let e = this.reader.getReader();
                    return {
                        next: () => nT(this, void 0, void 0, function*() {
                            try {
                                let {
                                    done: t,
                                    value: i
                                } = yield e.read();
                                if (t) return {
                                    done: !0,
                                    value: void 0
                                };
                                return this.handleChunkReceived(i), {
                                    done: !1,
                                    value: i.content
                                }
                            } catch (e) {
                                return {
                                    done: !0,
                                    value: void 0
                                }
                            }
                        }),
                        return () {
                            return nT(this, void 0, void 0, function*() {
                                return e.releaseLock(), {
                                    done: !0,
                                    value: void 0
                                }
                            })
                        }
                    }
                }
                readAll() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t, i, n;
                        let r = new Set;
                        try {
                            for (var a, s = !0, o = nS(this); !(e = (a = yield o.next()).done); s = !0) n = a.value, s = !1, r.add(n)
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                !s && !e && (i = o.return) && (yield i.call(o))
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return Array.from(r)
                    })
                }
            }
            H = Symbol.asyncIterator;
            class s3 extends s1 {
                handleChunkReceived(e) {
                    var t;
                    let i = aj(e.chunkIndex),
                        n = this.receivedChunks.get(i);
                    if (n && n.version > e.version) return;
                    this.receivedChunks.set(i, e), this.bytesReceived += e.content.byteLength;
                    let r = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
                    null == (t = this.onProgress) || t.call(this, r)
                } [H]() {
                    let e = this.reader.getReader(),
                        t = new TextDecoder;
                    return {
                        next: () => nT(this, void 0, void 0, function*() {
                            try {
                                let {
                                    done: i,
                                    value: n
                                } = yield e.read();
                                if (i) return {
                                    done: !0,
                                    value: void 0
                                };
                                return this.handleChunkReceived(n), {
                                    done: !1,
                                    value: t.decode(n.content)
                                }
                            } catch (e) {
                                return {
                                    done: !0,
                                    value: void 0
                                }
                            }
                        }),
                        return () {
                            return nT(this, void 0, void 0, function*() {
                                return e.releaseLock(), {
                                    done: !0,
                                    value: void 0
                                }
                            })
                        }
                    }
                }
                readAll() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t, i, n;
                        let r = "";
                        try {
                            for (var a, s = !0, o = nS(this); !(e = (a = yield o.next()).done); s = !0) n = a.value, s = !1, r += n
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                !s && !e && (i = o.return) && (yield i.call(o))
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r
                    })
                }
                constructor(e, t, i) {
                    super(e, t, i), this.receivedChunks = new Map
                }
            }
            class s4 {
                write(e) {
                    return this.defaultWriter.write(e)
                }
                close() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), null == (e = this.onClose) || e.call(this)
                    })
                }
                constructor(e, t, i) {
                    this.writableStream = e, this.defaultWriter = e.getWriter(), this.onClose = i, this.info = t
                }
            }
            class s5 extends s4 {}
            class s9 extends s4 {}
            class s6 extends r1 {
                get isLocal() {
                    return !1
                }
                setMuted(e) {
                    this.isMuted !== e && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? ed.Muted : ed.Unmuted, this))
                }
                setMediaStream(e) {
                    this.mediaStream = e;
                    let t = i => {
                        i.track === this._mediaStreamTrack && (e.removeEventListener("removetrack", t), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(ed.Ended, this))
                    };
                    e.addEventListener("removetrack", t)
                }
                start() {
                    this.startMonitor(), super.enable()
                }
                stop() {
                    this.stopMonitor(), super.disable()
                }
                getRTCStatsReport() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        if (null == (e = this.receiver) ? void 0 : e.getStats) return yield this.receiver.getStats()
                    })
                }
                setPlayoutDelay(e) {
                    this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended")
                }
                getPlayoutDelay() {
                    if (this.receiver)
                        if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
                        else this.log.warn("Playout delay not supported in this browser");
                    else this.log.warn("Cannot get playout delay, track already ended");
                    return 0
                }
                startMonitor() {
                    this.monitorInterval || (this.monitorInterval = setInterval(() => this.monitorReceiver(), 2e3)), "undefined" != typeof RTCRtpReceiver && "getSynchronizationSources" in RTCRtpReceiver && this.registerTimeSyncUpdate()
                }
                registerTimeSyncUpdate() {
                    let e = () => {
                        var t;
                        this.timeSyncHandle = requestAnimationFrame(() => e());
                        let i = null == (t = this.receiver) ? void 0 : t.getSynchronizationSources()[0];
                        if (i) {
                            let {
                                timestamp: e,
                                rtpTimestamp: t
                            } = i;
                            t && this.rtpTimestamp !== t && (this.emit(ed.TimeSyncUpdate, {
                                timestamp: e,
                                rtpTimestamp: t
                            }), this.rtpTimestamp = t)
                        }
                    };
                    e()
                }
                constructor(e, t, i, n, r) {
                    super(e, i, r), this.sid = t, this.receiver = n
                }
            }
            class s8 extends s6 {
                setVolume(e) {
                    var t;
                    for (let i of this.attachedElements) this.audioContext ? null == (t = this.gainNode) || t.gain.setTargetAtTime(e, 0, .1) : i.volume = e;
                    ab() && this._mediaStreamTrack._setVolume(e), this.elementVolume = e
                }
                getVolume() {
                    if (this.elementVolume) return this.elementVolume;
                    if (ab()) return 1;
                    let e = 0;
                    return this.attachedElements.forEach(t => {
                        t.volume > e && (e = t.volume)
                    }), e
                }
                setSinkId(e) {
                    return nT(this, void 0, void 0, function*() {
                        this.sinkId = e, yield Promise.all(this.attachedElements.map(t => {
                            if (ad(t)) return t.setSinkId(e)
                        }))
                    })
                }
                attach(e) {
                    let t = 0 === this.attachedElements.length;
                    return e ? super.attach(e) : e = super.attach(), this.sinkId && ad(e) && e.setSinkId(this.sinkId).catch(e => {
                        this.log.error("Failed to set sink id on remote audio track", e, this.logContext)
                    }), this.audioContext && t && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e), e.volume = 0, e.muted = !0), this.elementVolume && this.setVolume(this.elementVolume), e
                }
                detach(e) {
                    let t;
                    return e ? (t = super.detach(e), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t = super.detach(), this.disconnectWebAudio()), t
                }
                setAudioContext(e) {
                    this.audioContext = e, e && this.attachedElements.length > 0 ? this.connectWebAudio(e, this.attachedElements[0]) : e || this.disconnectWebAudio()
                }
                setWebAudioPlugins(e) {
                    this.webAudioPluginNodes = e, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0])
                }
                connectWebAudio(e, t) {
                    this.disconnectWebAudio(), this.sourceNode = e.createMediaStreamSource(t.srcObject);
                    let i = this.sourceNode;
                    this.webAudioPluginNodes.forEach(e => {
                        i.connect(e), i = e
                    }), this.gainNode = e.createGain(), i.connect(this.gainNode), this.gainNode.connect(e.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, .1), "running" !== e.state && e.resume().then(() => {
                        "running" !== e.state && this.emit(ed.AudioPlaybackFailed, Error("Audio Context couldn't be started automatically"))
                    }).catch(e => {
                        this.emit(ed.AudioPlaybackFailed, e)
                    })
                }
                disconnectWebAudio() {
                    var e, t;
                    null == (e = this.gainNode) || e.disconnect(), null == (t = this.sourceNode) || t.disconnect(), this.gainNode = void 0, this.sourceNode = void 0
                }
                getReceiverStats() {
                    return nT(this, void 0, void 0, function*() {
                        let e;
                        if (this.receiver && this.receiver.getStats) return (yield this.receiver.getStats()).forEach(t => {
                            "inbound-rtp" === t.type && (e = {
                                type: "audio",
                                streamId: t.id,
                                timestamp: t.timestamp,
                                jitter: t.jitter,
                                bytesReceived: t.bytesReceived,
                                concealedSamples: t.concealedSamples,
                                concealmentEvents: t.concealmentEvents,
                                silentConcealedSamples: t.silentConcealedSamples,
                                silentConcealmentEvents: t.silentConcealmentEvents,
                                totalAudioEnergy: t.totalAudioEnergy,
                                totalSamplesDuration: t.totalSamplesDuration
                            })
                        }), e
                    })
                }
                constructor(e, t, i, n, r, a) {
                    super(e, t, r1.Kind.Audio, i, a), this.monitorReceiver = () => nT(this, void 0, void 0, function*() {
                        if (!this.receiver) {
                            this._currentBitrate = 0;
                            return
                        }
                        let e = yield this.getReceiverStats();
                        e && this.prevStats && this.receiver && (this._currentBitrate = sO(e, this.prevStats)), this.prevStats = e
                    }), this.audioContext = n, this.webAudioPluginNodes = [], r && (this.sinkId = r.deviceId)
                }
            }
            class s7 extends s6 {
                get isAdaptiveStream() {
                    return void 0 !== this.adaptiveStreamSettings
                }
                get mediaStreamTrack() {
                    return this._mediaStreamTrack
                }
                setMuted(e) {
                    super.setMuted(e), this.attachedElements.forEach(t => {
                        e ? r3(this._mediaStreamTrack, t) : r2(this._mediaStreamTrack, t)
                    })
                }
                attach(e) {
                    if (e ? super.attach(e) : e = super.attach(), this.adaptiveStreamSettings && void 0 === this.elementInfos.find(t => t.element === e)) {
                        let t = new oe(e);
                        this.observeElementInfo(t)
                    }
                    return e
                }
                observeElementInfo(e) {
                    this.adaptiveStreamSettings && void 0 === this.elementInfos.find(t => t === e) ? (e.handleResize = () => {
                        this.debouncedHandleResize()
                    }, e.handleVisibilityChanged = () => {
                        this.updateVisibility()
                    }, this.elementInfos.push(e), e.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext)
                }
                stopObservingElementInfo(e) {
                    if (!this.isAdaptiveStream) return void this.log.warn("stopObservingElementInfo ignored", this.logContext);
                    for (let t of this.elementInfos.filter(t => t === e)) t.stopObserving();
                    this.elementInfos = this.elementInfos.filter(t => t !== e), this.updateVisibility(), this.debouncedHandleResize()
                }
                detach(e) {
                    let t = [];
                    if (e) return this.stopObservingElement(e), super.detach(e);
                    for (let e of t = super.detach()) this.stopObservingElement(e);
                    return t
                }
                getDecoderImplementation() {
                    var e;
                    return null == (e = this.prevStats) ? void 0 : e.decoderImplementation
                }
                getReceiverStats() {
                    return nT(this, void 0, void 0, function*() {
                        let e;
                        if (!this.receiver || !this.receiver.getStats) return;
                        let t = yield this.receiver.getStats(), i = "", n = new Map;
                        return t.forEach(t => {
                            "inbound-rtp" === t.type ? (i = t.codecId, e = {
                                type: "video",
                                streamId: t.id,
                                framesDecoded: t.framesDecoded,
                                framesDropped: t.framesDropped,
                                framesReceived: t.framesReceived,
                                packetsReceived: t.packetsReceived,
                                packetsLost: t.packetsLost,
                                frameWidth: t.frameWidth,
                                frameHeight: t.frameHeight,
                                pliCount: t.pliCount,
                                firCount: t.firCount,
                                nackCount: t.nackCount,
                                jitter: t.jitter,
                                timestamp: t.timestamp,
                                bytesReceived: t.bytesReceived,
                                decoderImplementation: t.decoderImplementation
                            }) : "codec" === t.type && n.set(t.id, t)
                        }), e && "" !== i && n.get(i) && (e.mimeType = n.get(i).mimeType), e
                    })
                }
                stopObservingElement(e) {
                    for (let t of this.elementInfos.filter(t => t.element === e)) this.stopObservingElementInfo(t)
                }
                handleAppVisibilityChanged() {
                    let e = Object.create(null, {
                        handleAppVisibilityChanged: {
                            get: () => super.handleAppVisibilityChanged
                        }
                    });
                    return nT(this, void 0, void 0, function*() {
                        yield e.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility()
                    })
                }
                updateVisibility() {
                    var e, t;
                    let i = this.elementInfos.reduce((e, t) => Math.max(e, t.visibilityChangedAt || 0), 0),
                        n = (null == (t = null == (e = this.adaptiveStreamSettings) ? void 0 : e.pauseVideoInBackground) || !!t) && this.isInBackground,
                        r = this.elementInfos.some(e => e.pictureInPicture),
                        a = this.elementInfos.some(e => e.visible) && !n || r;
                    if (this.lastVisible !== a) {
                        if (!a && Date.now() - i < 100) return void rZ.setTimeout(() => {
                            this.updateVisibility()
                        }, 100);
                        this.lastVisible = a, this.emit(ed.VisibilityChanged, a, this)
                    }
                }
                updateDimensions() {
                    var e, t;
                    let i = 0,
                        n = 0,
                        r = this.getPixelDensity();
                    for (let e of this.elementInfos) {
                        let t = e.width() * r,
                            a = e.height() * r;
                        t + a > i + n && (i = t, n = a)
                    }((null == (e = this.lastDimensions) ? void 0 : e.width) !== i || (null == (t = this.lastDimensions) ? void 0 : t.height) !== n) && (this.lastDimensions = {
                        width: i,
                        height: n
                    }, this.emit(ed.VideoDimensionsChanged, this.lastDimensions, this))
                }
                getPixelDensity() {
                    var e;
                    let t = null == (e = this.adaptiveStreamSettings) ? void 0 : e.pixelDensity;
                    return "screen" === t ? aS() : t ? t : aS() > 2 ? 2 : 1
                }
                constructor(e, t, i, n, r) {
                    super(e, t, r1.Kind.Video, i, r), this.elementInfos = [], this.monitorReceiver = () => nT(this, void 0, void 0, function*() {
                        if (!this.receiver) {
                            this._currentBitrate = 0;
                            return
                        }
                        let e = yield this.getReceiverStats();
                        e && this.prevStats && this.receiver && (this._currentBitrate = sO(e, this.prevStats)), this.prevStats = e
                    }), this.debouncedHandleResize = sh(() => {
                        this.updateDimensions()
                    }, 100), this.adaptiveStreamSettings = n
                }
            }
            class oe {
                get visible() {
                    return this.isPiP || this.isIntersecting
                }
                get pictureInPicture() {
                    return this.isPiP
                }
                width() {
                    return this.element.clientWidth
                }
                height() {
                    return this.element.clientHeight
                }
                observe() {
                    var e, t, i;
                    this.isIntersecting = oi(this.element), this.isPiP = ot(this.element), this.element.handleResize = () => {
                        var e;
                        null == (e = this.handleResize) || e.call(this)
                    }, this.element.handleVisibilityChanged = this.onVisibilityChanged, aI().observe(this.element), aR().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), null == (e = window.documentPictureInPicture) || e.addEventListener("enter", this.onEnterPiP), null == (i = null == (t = window.documentPictureInPicture) ? void 0 : t.window) || i.addEventListener("pagehide", this.onLeavePiP)
                }
                stopObserving() {
                    var e, t, i, n, r;
                    null == (e = aI()) || e.unobserve(this.element), null == (t = aR()) || t.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), null == (i = window.documentPictureInPicture) || i.removeEventListener("enter", this.onEnterPiP), null == (r = null == (n = window.documentPictureInPicture) ? void 0 : n.window) || r.removeEventListener("pagehide", this.onLeavePiP)
                }
                constructor(e, t) {
                    this.onVisibilityChanged = e => {
                        var t;
                        let {
                            target: i,
                            isIntersecting: n
                        } = e;
                        i === this.element && (this.isIntersecting = n, this.isPiP = ot(this.element), this.visibilityChangedAt = Date.now(), null == (t = this.handleVisibilityChanged) || t.call(this))
                    }, this.onEnterPiP = () => {
                        var e, t, i;
                        null == (t = null == (e = window.documentPictureInPicture) ? void 0 : e.window) || t.addEventListener("pagehide", this.onLeavePiP), this.isPiP = ot(this.element), null == (i = this.handleVisibilityChanged) || i.call(this)
                    }, this.onLeavePiP = () => {
                        var e;
                        this.isPiP = ot(this.element), null == (e = this.handleVisibilityChanged) || e.call(this)
                    }, this.element = e, this.isIntersecting = null != t ? t : oi(e), this.isPiP = av() && ot(e), this.visibilityChangedAt = 0
                }
            }

            function ot(e) {
                var t, i;
                return document.pictureInPictureElement === e || null != (t = window.documentPictureInPicture) && !!t.window && oi(e, null == (i = window.documentPictureInPicture) ? void 0 : i.window)
            }

            function oi(e, t) {
                let i = t || window,
                    n = e.offsetTop,
                    r = e.offsetLeft,
                    a = e.offsetWidth,
                    s = e.offsetHeight,
                    {
                        hidden: o
                    } = e,
                    {
                        display: c
                    } = getComputedStyle(e);
                for (; e.offsetParent;) n += (e = e.offsetParent).offsetTop, r += e.offsetLeft;
                return n < i.pageYOffset + i.innerHeight && r < i.pageXOffset + i.innerWidth && n + s > i.pageYOffset && r + a > i.pageXOffset && !o && "none" !== c
            }
            class on extends nw.EventEmitter {
                setTrack(e) {
                    this.track && (this.track.off(ed.Muted, this.handleMuted), this.track.off(ed.Unmuted, this.handleUnmuted)), this.track = e, e && (e.on(ed.Muted, this.handleMuted), e.on(ed.Unmuted, this.handleUnmuted))
                }
                get logContext() {
                    var e;
                    return Object.assign(Object.assign({}, null == (e = this.loggerContextCb) ? void 0 : e.call(this)), a3(this))
                }
                get isMuted() {
                    return this.metadataMuted
                }
                get isEnabled() {
                    return !0
                }
                get isSubscribed() {
                    return void 0 !== this.track
                }
                get isEncrypted() {
                    return this.encryption !== t1.NONE
                }
                get audioTrack() {
                    if (aV(this.track)) return this.track
                }
                get videoTrack() {
                    if (aq(this.track)) return this.track
                }
                updateInfo(e) {
                    this.trackSid = e.sid, this.trackName = e.name, this.source = r1.sourceFromProto(e.source), this.mimeType = e.mimeType, this.kind === r1.Kind.Video && e.width > 0 && (this.dimensions = {
                        width: e.width,
                        height: e.height
                    }, this.simulcasted = e.simulcast), this.encryption = e.encryption, this.trackInfo = e, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), {
                        info: e
                    }))
                }
                constructor(e, t, i, n) {
                    var r;
                    super(), this.metadataMuted = !1, this.encryption = t1.NONE, this.log = np, this.handleMuted = () => {
                        this.emit(ed.Muted)
                    }, this.handleUnmuted = () => {
                        this.emit(ed.Unmuted)
                    }, this.log = nf(null != (r = null == n ? void 0 : n.loggerName) ? r : X.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = e, this.trackSid = t, this.trackName = i, this.source = r1.Source.Unknown
                }
            }(F = (j = on || (on = {})).SubscriptionStatus || (j.SubscriptionStatus = {})).Desired = "desired", F.Subscribed = "subscribed", F.Unsubscribed = "unsubscribed", (B = j.PermissionStatus || (j.PermissionStatus = {})).Allowed = "allowed", B.NotAllowed = "not_allowed";
            class or extends on {
                get isUpstreamPaused() {
                    var e;
                    return null == (e = this.track) ? void 0 : e.isUpstreamPaused
                }
                setTrack(e) {
                    this.track && (this.track.off(ed.Ended, this.handleTrackEnded), this.track.off(ed.CpuConstrained, this.handleCpuConstrained)), super.setTrack(e), e && (e.on(ed.Ended, this.handleTrackEnded), e.on(ed.CpuConstrained, this.handleCpuConstrained))
                }
                get isMuted() {
                    return this.track ? this.track.isMuted : super.isMuted
                }
                get audioTrack() {
                    return super.audioTrack
                }
                get videoTrack() {
                    return super.videoTrack
                }
                get isLocal() {
                    return !0
                }
                mute() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        return null == (e = this.track) ? void 0 : e.mute()
                    })
                }
                unmute() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        return null == (e = this.track) ? void 0 : e.unmute()
                    })
                }
                pauseUpstream() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        yield null == (e = this.track) ? void 0 : e.pauseUpstream()
                    })
                }
                resumeUpstream() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        yield null == (e = this.track) ? void 0 : e.resumeUpstream()
                    })
                }
                getTrackFeatures() {
                    var e;
                    if (!aV(this.track)) return [];
                    {
                        let t = this.track.getSourceTrackSettings(),
                            i = new Set;
                        return t.autoGainControl && i.add(tz.TF_AUTO_GAIN_CONTROL), t.echoCancellation && i.add(tz.TF_ECHO_CANCELLATION), t.noiseSuppression && i.add(tz.TF_NOISE_SUPPRESSION), t.channelCount && t.channelCount > 1 && i.add(tz.TF_STEREO), (null == (e = this.options) ? void 0 : e.dtx) || i.add(tz.TF_NO_DTX), this.track.enhancedNoiseCancellation && i.add(tz.TF_ENHANCED_NOISE_CANCELLATION), Array.from(i.values())
                    }
                }
                constructor(e, t, i, n) {
                    super(e, t.sid, t.name, n), this.track = void 0, this.handleTrackEnded = () => {
                        this.emit(ed.Ended)
                    }, this.handleCpuConstrained = () => {
                        this.track && aq(this.track) && this.emit(ed.CpuConstrained, this.track)
                    }, this.updateInfo(t), this.setTrack(i)
                }
            }

            function oa(e, t) {
                return nT(this, void 0, void 0, function*() {
                    null != e || (e = {});
                    let i = !1,
                        {
                            audioProcessor: n,
                            videoProcessor: r,
                            optionsWithoutProcessor: a
                        } = a4(e),
                        s = a.audio,
                        o = a.video;
                    if (n && "object" == typeof a.audio && (a.audio.processor = n), r && "object" == typeof a.video && (a.video.processor = r), e.audio && "object" == typeof a.audio && "string" == typeof a.audio.deviceId) {
                        let e = a.audio.deviceId;
                        a.audio.deviceId = {
                            exact: e
                        }, i = !0, s = Object.assign(Object.assign({}, a.audio), {
                            deviceId: {
                                ideal: e
                            }
                        })
                    }
                    if (a.video && "object" == typeof a.video && "string" == typeof a.video.deviceId) {
                        let e = a.video.deviceId;
                        a.video.deviceId = {
                            exact: e
                        }, i = !0, o = Object.assign(Object.assign({}, a.video), {
                            deviceId: {
                                ideal: e
                            }
                        })
                    }!0 !== a.audio && ("object" != typeof a.audio || a.audio.deviceId) || (a.audio = {
                        deviceId: "default"
                    }), !0 === a.video ? a.video = {
                        deviceId: "default"
                    } : "object" != typeof a.video || a.video.deviceId || (a.video.deviceId = "default");
                    let c = aY(a, sk, sT),
                        l = aX(c),
                        d = navigator.mediaDevices.getUserMedia(l);
                    a.audio && (a8.userMediaPromiseMap.set("audioinput", d), d.catch(() => a8.userMediaPromiseMap.delete("audioinput"))), a.video && (a8.userMediaPromiseMap.set("videoinput", d), d.catch(() => a8.userMediaPromiseMap.delete("videoinput")));
                    try {
                        let e = yield d;
                        return yield Promise.all(e.getTracks().map(i => nT(this, void 0, void 0, function*() {
                            let a, s = "audio" === i.kind,
                                o = s ? c.audio : c.video;
                            "boolean" != typeof o && o || (o = {});
                            let d = s ? l.audio : l.video;
                            "boolean" != typeof d && (a = d);
                            let u = i.getSettings().deviceId;
                            (null == a ? void 0 : a.deviceId) && aN(a.deviceId) !== u ? a.deviceId = u : a || (a = {
                                deviceId: u
                            });
                            let h = function(e, t, i) {
                                switch (e.kind) {
                                    case "audio":
                                        return new s_(e, t, !1, void 0, i);
                                    case "video":
                                        return new sH(e, t, !1, i);
                                    default:
                                        throw new rj("unsupported track type: ".concat(e.kind))
                                }
                            }(i, a, t);
                            return h.kind === r1.Kind.Video ? h.source = r1.Source.Camera : h.kind === r1.Kind.Audio && (h.source = r1.Source.Microphone), h.mediaStream = e, aV(h) && n ? yield h.setProcessor(n): aq(h) && r && (yield h.setProcessor(r)), h
                        })))
                    } catch (n) {
                        if (!i) throw n;
                        return oa(Object.assign(Object.assign({}, e), {
                            audio: s,
                            video: o
                        }), t)
                    }
                })
            }

            function os(e) {
                return nT(this, void 0, void 0, function*() {
                    return (yield oa({
                        audio: !1,
                        video: null == e || e
                    }))[0]
                })
            }

            function oo(e) {
                return nT(this, void 0, void 0, function*() {
                    return (yield oa({
                        audio: null == e || e,
                        video: !1
                    }))[0]
                })
            }

            function oc(e) {
                return nT(this, void 0, void 0, function*() {
                    if (void 0 === e && (e = {}), void 0 !== e.resolution || af() || (e.resolution = ae.h1080fps30.resolution), void 0 === navigator.mediaDevices.getDisplayMedia) throw new rU("getDisplayMedia not supported");
                    let t = a1(e),
                        i = yield navigator.mediaDevices.getDisplayMedia(t), n = i.getVideoTracks();
                    if (0 === n.length) throw new rj("no video track found");
                    let r = new sH(n[0], void 0, !1);
                    r.source = r1.Source.ScreenShare;
                    let a = [r];
                    if (i.getAudioTracks().length > 0) {
                        let e = new s_(i.getAudioTracks()[0], void 0, !1);
                        e.source = r1.Source.ScreenShareAudio, a.push(e)
                    }
                    return a
                })
            }(V = eC || (eC = {})).Excellent = "excellent", V.Good = "good", V.Poor = "poor", V.Lost = "lost", V.Unknown = "unknown";
            class ol extends nw.EventEmitter {
                get logContext() {
                    var e, t;
                    return Object.assign({}, null == (t = null == (e = this.loggerOptions) ? void 0 : e.loggerContextCb) ? void 0 : t.call(e))
                }
                get isEncrypted() {
                    return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(e => e.isEncrypted)
                }
                get isAgent() {
                    var e;
                    return (null == (e = this.permissions) ? void 0 : e.agent) || this.kind === tZ.AGENT
                }
                get isActive() {
                    var e;
                    return (null == (e = this.participantInfo) ? void 0 : e.state) === t$.ACTIVE
                }
                get kind() {
                    return this._kind
                }
                get attributes() {
                    return Object.freeze(Object.assign({}, this._attributes))
                }
                getTrackPublications() {
                    return Array.from(this.trackPublications.values())
                }
                getTrackPublication(e) {
                    for (let [, t] of this.trackPublications)
                        if (t.source === e) return t
                }
                getTrackPublicationByName(e) {
                    for (let [, t] of this.trackPublications)
                        if (t.trackName === e) return t
                }
                waitUntilActive() {
                    return this.isActive ? Promise.resolve() : (this.activeFuture || (this.activeFuture = new a_, this.once(ec.Active, () => {
                        var e, t;
                        null == (t = null == (e = this.activeFuture) ? void 0 : e.resolve) || t.call(e), this.activeFuture = void 0
                    })), this.activeFuture.promise)
                }
                get connectionQuality() {
                    return this._connectionQuality
                }
                get isCameraEnabled() {
                    var e;
                    let t = this.getTrackPublication(r1.Source.Camera);
                    return !(null == (e = null == t ? void 0 : t.isMuted) || e)
                }
                get isMicrophoneEnabled() {
                    var e;
                    let t = this.getTrackPublication(r1.Source.Microphone);
                    return !(null == (e = null == t ? void 0 : t.isMuted) || e)
                }
                get isScreenShareEnabled() {
                    return !!this.getTrackPublication(r1.Source.ScreenShare)
                }
                get isLocal() {
                    return !1
                }
                get joinedAt() {
                    return this.participantInfo ? new Date(1e3 * Number.parseInt(this.participantInfo.joinedAt.toString())) : new Date
                }
                updateInfo(e) {
                    var t;
                    return (!this.participantInfo || this.participantInfo.sid !== e.sid || !(this.participantInfo.version > e.version)) && (this.identity = e.identity, this.sid = e.sid, this._setName(e.name), this._setMetadata(e.metadata), this._setAttributes(e.attributes), e.state === t$.ACTIVE && (null == (t = this.participantInfo) ? void 0 : t.state) !== t$.ACTIVE && this.emit(ec.Active), e.permission && this.setPermissions(e.permission), this.participantInfo = e, !0)
                }
                _setMetadata(e) {
                    let t = this.metadata !== e,
                        i = this.metadata;
                    this.metadata = e, t && this.emit(ec.ParticipantMetadataChanged, i)
                }
                _setName(e) {
                    let t = this.name !== e;
                    this.name = e, t && this.emit(ec.ParticipantNameChanged, e)
                }
                _setAttributes(e) {
                    let t = function(e, t) {
                        var i;
                        void 0 === e && (e = {}), void 0 === t && (t = {});
                        let n = [...Object.keys(t), ...Object.keys(e)],
                            r = {};
                        for (let a of n) e[a] !== t[a] && (r[a] = null != (i = t[a]) ? i : "");
                        return r
                    }(this.attributes, e);
                    this._attributes = e, Object.keys(t).length > 0 && this.emit(ec.AttributesChanged, t)
                }
                setPermissions(e) {
                    var t, i, n, r, a, s;
                    let o = this.permissions,
                        c = e.canPublish !== (null == (t = this.permissions) ? void 0 : t.canPublish) || e.canSubscribe !== (null == (i = this.permissions) ? void 0 : i.canSubscribe) || e.canPublishData !== (null == (n = this.permissions) ? void 0 : n.canPublishData) || e.hidden !== (null == (r = this.permissions) ? void 0 : r.hidden) || e.recorder !== (null == (a = this.permissions) ? void 0 : a.recorder) || e.canPublishSources.length !== this.permissions.canPublishSources.length || e.canPublishSources.some((e, t) => {
                            var i;
                            return e !== (null == (i = this.permissions) ? void 0 : i.canPublishSources[t])
                        }) || e.canSubscribeMetrics !== (null == (s = this.permissions) ? void 0 : s.canSubscribeMetrics);
                    return this.permissions = e, c && this.emit(ec.ParticipantPermissionsChanged, o), c
                }
                setIsSpeaking(e) {
                    e !== this.isSpeaking && (this.isSpeaking = e, e && (this.lastSpokeAt = new Date), this.emit(ec.IsSpeakingChanged, e))
                }
                setConnectionQuality(e) {
                    let t = this._connectionQuality;
                    this._connectionQuality = function(e) {
                        switch (e) {
                            case tq.EXCELLENT:
                                return eC.Excellent;
                            case tq.GOOD:
                                return eC.Good;
                            case tq.POOR:
                                return eC.Poor;
                            case tq.LOST:
                                return eC.Lost;
                            default:
                                return eC.Unknown
                        }
                    }(e), t !== this._connectionQuality && this.emit(ec.ConnectionQualityChanged, this._connectionQuality)
                }
                setDisconnected() {
                    var e, t;
                    this.activeFuture && (null == (t = (e = this.activeFuture).reject) || t.call(e, Error("Participant disconnected")), this.activeFuture = void 0)
                }
                setAudioContext(e) {
                    this.audioContext = e, this.audioTrackPublications.forEach(t => aV(t.track) && t.track.setAudioContext(e))
                }
                addTrackPublication(e) {
                    switch (e.on(ed.Muted, () => {
                            this.emit(ec.TrackMuted, e)
                        }), e.on(ed.Unmuted, () => {
                            this.emit(ec.TrackUnmuted, e)
                        }), e.track && (e.track.sid = e.trackSid), this.trackPublications.set(e.trackSid, e), e.kind) {
                        case r1.Kind.Audio:
                            this.audioTrackPublications.set(e.trackSid, e);
                            break;
                        case r1.Kind.Video:
                            this.videoTrackPublications.set(e.trackSid, e)
                    }
                }
                constructor(e, t, i, n, r, a) {
                    var s;
                    let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tZ.STANDARD;
                    super(), this.audioLevel = 0, this.isSpeaking = !1, this._connectionQuality = eC.Unknown, this.log = np, this.log = nf(null != (s = null == a ? void 0 : a.loggerName) ? s : X.Participant), this.loggerOptions = a, this.setMaxListeners(100), this.sid = e, this.identity = t, this.name = i, this.metadata = n, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this._kind = o, this._attributes = null != r ? r : {}
                }
            }
            class od extends ol {
                get lastCameraError() {
                    return this.cameraError
                }
                get lastMicrophoneError() {
                    return this.microphoneError
                }
                get isE2EEEnabled() {
                    return this.encryptionType !== t1.NONE
                }
                getTrackPublication(e) {
                    let t = super.getTrackPublication(e);
                    if (t) return t
                }
                getTrackPublicationByName(e) {
                    let t = super.getTrackPublicationByName(e);
                    if (t) return t
                }
                setupEngine(e) {
                    this.engine = e, this.engine.on(el.RemoteMute, (e, t) => {
                        let i = this.trackPublications.get(e);
                        i && i.track && (t ? i.mute() : i.unmute())
                    }), this.engine.on(el.Connected, this.handleReconnected).on(el.SignalConnected, this.handleSignalConnected).on(el.SignalRestarted, this.handleReconnected).on(el.SignalResumed, this.handleReconnected).on(el.Restarting, this.handleReconnecting).on(el.Resuming, this.handleReconnecting).on(el.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(el.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(el.Disconnected, this.handleDisconnected).on(el.SignalRequestResponse, this.handleSignalRequestResponse).on(el.DataPacketReceived, this.handleDataPacket)
                }
                setMetadata(e) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.requestMetadataUpdate({
                            metadata: e
                        })
                    })
                }
                setName(e) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.requestMetadataUpdate({
                            name: e
                        })
                    })
                }
                setAttributes(e) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.requestMetadataUpdate({
                            attributes: e
                        })
                    })
                }
                requestMetadataUpdate(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let {
                            metadata: i,
                            name: n,
                            attributes: r
                        } = e;
                        return function*() {
                            return new Promise((e, a) => nT(t, void 0, void 0, function*() {
                                var t, s;
                                try {
                                    let o = !1,
                                        c = yield this.engine.client.sendUpdateLocalMetadata(null != (t = null != i ? i : this.metadata) ? t : "", null != (s = null != n ? n : this.name) ? s : "", r), l = performance.now();
                                    for (this.pendingSignalRequests.set(c, {
                                            resolve: e,
                                            reject: e => {
                                                a(e), o = !0
                                            },
                                            values: {
                                                name: n,
                                                metadata: i,
                                                attributes: r
                                            }
                                        }); performance.now() - l < 5e3 && !o;) {
                                        if ((!n || this.name === n) && (!i || this.metadata === i) && (!r || Object.entries(r).every(e => {
                                                let [t, i] = e;
                                                return this.attributes[t] === i || "" === i && !this.attributes[t]
                                            }))) {
                                            this.pendingSignalRequests.delete(c), e();
                                            return
                                        }
                                        yield ai(50)
                                    }
                                    a(new rK("Request to update local metadata timed out", "TimeoutError"))
                                } catch (e) {
                                    e instanceof Error && a(e)
                                }
                            }))
                        }()
                    })
                }
                setCameraEnabled(e, t, i) {
                    return this.setTrackEnabled(r1.Source.Camera, e, t, i)
                }
                setMicrophoneEnabled(e, t, i) {
                    return this.setTrackEnabled(r1.Source.Microphone, e, t, i)
                }
                setScreenShareEnabled(e, t, i) {
                    return this.setTrackEnabled(r1.Source.ScreenShare, e, t, i)
                }
                setPermissions(e) {
                    let t = this.permissions,
                        i = super.setPermissions(e);
                    return i && t && this.emit(ec.ParticipantPermissionsChanged, t), i
                }
                setE2EEEnabled(e) {
                    return nT(this, void 0, void 0, function*() {
                        this.encryptionType = e ? t1.GCM : t1.NONE, yield this.republishAllTracks(void 0, !1)
                    })
                }
                setTrackEnabled(e, t, i, n) {
                    return nT(this, void 0, void 0, function*() {
                        this.log.debug("setTrackEnabled", Object.assign(Object.assign({}, this.logContext), {
                            source: e,
                            enabled: t
                        })), this.republishPromise && (yield this.republishPromise);
                        let r = this.getTrackPublication(e);
                        if (t)
                            if (r) yield r.unmute();
                            else {
                                let t;
                                if (this.pendingPublishing.has(e)) {
                                    let t = yield this.waitForPendingPublicationOfSource(e);
                                    return t || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), {
                                        source: e
                                    })), yield null == t ? void 0 : t.unmute(), t
                                }
                                this.pendingPublishing.add(e);
                                try {
                                    switch (e) {
                                        case r1.Source.Camera:
                                            t = yield this.createTracks({
                                                video: null == i || i
                                            });
                                            break;
                                        case r1.Source.Microphone:
                                            t = yield this.createTracks({
                                                audio: null == i || i
                                            });
                                            break;
                                        case r1.Source.ScreenShare:
                                            t = yield this.createScreenTracks(Object.assign({}, i));
                                            break;
                                        default:
                                            throw new rj(e)
                                    }
                                } catch (i) {
                                    throw null == t || t.forEach(e => {
                                        e.stop()
                                    }), i instanceof Error && this.emit(ec.MediaDevicesError, i, a0(e)), this.pendingPublishing.delete(e), i
                                }
                                for (let i of t) e === r1.Source.Microphone && aV(i) && (null == n ? void 0 : n.preConnectBuffer) && (this.log.info("starting preconnect buffer for microphone", Object.assign({}, this.logContext)), i.startPreConnectBuffer());
                                try {
                                    let e = [];
                                    for (let i of t) this.log.info("publishing track", Object.assign(Object.assign({}, this.logContext), a3(i))), e.push(this.publishTrack(i, n));
                                    let i = yield Promise.all(e);
                                    [r] = i
                                } catch (e) {
                                    throw null == t || t.forEach(e => {
                                        e.stop()
                                    }), e
                                } finally {
                                    this.pendingPublishing.delete(e)
                                }
                            }
                        else if (!(null == r ? void 0 : r.track) && this.pendingPublishing.has(e) && ((r = yield this.waitForPendingPublicationOfSource(e)) || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), {
                                source: e
                            }))), r && r.track)
                            if (e === r1.Source.ScreenShare) {
                                r = yield this.unpublishTrack(r.track);
                                let e = this.getTrackPublication(r1.Source.ScreenShareAudio);
                                e && e.track && this.unpublishTrack(e.track)
                            } else yield r.mute();
                        return r
                    })
                }
                enableCameraAndMicrophone() {
                    return nT(this, void 0, void 0, function*() {
                        if (!(this.pendingPublishing.has(r1.Source.Camera) || this.pendingPublishing.has(r1.Source.Microphone))) {
                            this.pendingPublishing.add(r1.Source.Camera), this.pendingPublishing.add(r1.Source.Microphone);
                            try {
                                let e = yield this.createTracks({
                                    audio: !0,
                                    video: !0
                                });
                                yield Promise.all(e.map(e => this.publishTrack(e)))
                            } finally {
                                this.pendingPublishing.delete(r1.Source.Camera), this.pendingPublishing.delete(r1.Source.Microphone)
                            }
                        }
                    })
                }
                createTracks(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i;
                        null != e || (e = {});
                        let n = aY(e, null == (t = this.roomOptions) ? void 0 : t.audioCaptureDefaults, null == (i = this.roomOptions) ? void 0 : i.videoCaptureDefaults);
                        try {
                            return (yield oa(n, {
                                loggerName: this.roomOptions.loggerName,
                                loggerContextCb: () => this.logContext
                            })).map(e => (aV(e) && (this.microphoneError = void 0, e.setAudioContext(this.audioContext), e.source = r1.Source.Microphone, this.emit(ec.AudioStreamAcquired)), aq(e) && (this.cameraError = void 0, e.source = r1.Source.Camera), e))
                        } catch (t) {
                            throw t instanceof Error && (e.audio && (this.microphoneError = t), e.video && (this.cameraError = t)), t
                        }
                    })
                }
                createScreenTracks(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (void 0 === e && (e = {}), void 0 === navigator.mediaDevices.getDisplayMedia) throw new rU("getDisplayMedia not supported");
                        void 0 !== e.resolution || af() || (e.resolution = ae.h1080fps30.resolution);
                        let t = a1(e),
                            i = yield navigator.mediaDevices.getDisplayMedia(t), n = i.getVideoTracks();
                        if (0 === n.length) throw new rj("no video track found");
                        let r = new sH(n[0], void 0, !1, {
                            loggerName: this.roomOptions.loggerName,
                            loggerContextCb: () => this.logContext
                        });
                        r.source = r1.Source.ScreenShare, e.contentHint && (r.mediaStreamTrack.contentHint = e.contentHint);
                        let a = [r];
                        if (i.getAudioTracks().length > 0) {
                            this.emit(ec.AudioStreamAcquired);
                            let e = new s_(i.getAudioTracks()[0], void 0, !1, this.audioContext, {
                                loggerName: this.roomOptions.loggerName,
                                loggerContextCb: () => this.logContext
                            });
                            e.source = r1.Source.ScreenShareAudio, a.push(e)
                        }
                        return a
                    })
                }
                publishTrack(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        return this.publishOrRepublishTrack(e, t)
                    })
                }
                publishOrRepublishTrack(e, t) {
                    return nT(this, arguments, void 0, function(e, t) {
                        var i = this;
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return function*() {
                            var r, a;
                            let s, o;
                            if (aK(e) && e.setAudioContext(i.audioContext), yield null == (r = i.reconnectFuture) ? void 0 : r.promise, i.republishPromise && !n && (yield i.republishPromise), aB(e) && i.pendingPublishPromises.has(e) && (yield i.pendingPublishPromises.get(e)), e instanceof MediaStreamTrack) s = e.getConstraints();
                            else {
                                let t;
                                switch (s = e.constraints, e.source) {
                                    case r1.Source.Microphone:
                                        t = "audioinput";
                                        break;
                                    case r1.Source.Camera:
                                        t = "videoinput"
                                }
                                t && i.activeDeviceMap.has(t) && (s = Object.assign(Object.assign({}, s), {
                                    deviceId: i.activeDeviceMap.get(t)
                                }))
                            }
                            if (e instanceof MediaStreamTrack) switch (e.kind) {
                                case "audio":
                                    e = new s_(e, s, !0, i.audioContext, {
                                        loggerName: i.roomOptions.loggerName,
                                        loggerContextCb: () => i.logContext
                                    });
                                    break;
                                case "video":
                                    e = new sH(e, s, !0, {
                                        loggerName: i.roomOptions.loggerName,
                                        loggerContextCb: () => i.logContext
                                    });
                                    break;
                                default:
                                    throw new rj("unsupported MediaStreamTrack kind ".concat(e.kind))
                            } else e.updateLoggerOptions({
                                loggerName: i.roomOptions.loggerName,
                                loggerContextCb: () => i.logContext
                            });
                            if (i.trackPublications.forEach(t => {
                                    t.track && t.track === e && (o = t)
                                }), o) return i.log.warn("track has already been published, skipping", Object.assign(Object.assign({}, i.logContext), a3(o))), o;
                            let c = "channelCount" in e.mediaStreamTrack.getSettings() && 2 === e.mediaStreamTrack.getSettings().channelCount || 2 === e.mediaStreamTrack.getConstraints().channelCount,
                                l = null != (a = null == t ? void 0 : t.forceStereo) ? a : c;
                            l && (t || (t = {}), void 0 === t.dtx && i.log.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", Object.assign(Object.assign({}, i.logContext), a3(e))), void 0 === t.red && i.log.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), null != t.dtx || (t.dtx = !1), null != t.red || (t.red = !1));
                            let d = Object.assign(Object.assign({}, i.roomOptions.publishDefaults), t);
                            ! function() {
                                let e = rz(),
                                    t = "17.2";
                                if (e)
                                    if ("Safari" !== e.name && "iOS" !== e.os) return !0;
                                    else if ("iOS" === e.os && e.osVersion && aC(t, e.osVersion) >= 0) return !0;
                                else if ("Safari" === e.name && aC(t, e.version) >= 0) return !0;
                                else return !1
                            }() && i.roomOptions.e2ee && (i.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2", Object.assign({}, i.logContext)), d.simulcast = !1), d.source && (e.source = d.source);
                            let u = new Promise((t, n) => nT(i, void 0, void 0, function*() {
                                try {
                                    if (this.engine.client.currentState !== ef.CONNECTED) {
                                        this.log.debug("deferring track publication until signal is connected", Object.assign(Object.assign({}, this.logContext), {
                                            track: a3(e)
                                        }));
                                        let i = setTimeout(() => {
                                            n(new rW("publishing rejected as engine not connected within timeout", 408))
                                        }, 15e3);
                                        yield this.waitUntilEngineConnected(), clearTimeout(i);
                                        let r = yield this.publish(e, d, l);
                                        t(r)
                                    } else try {
                                        let i = yield this.publish(e, d, l);
                                        t(i)
                                    } catch (e) {
                                        n(e)
                                    }
                                } catch (e) {
                                    n(e)
                                }
                            }));
                            i.pendingPublishPromises.set(e, u);
                            try {
                                return yield u
                            } catch (e) {
                                throw e
                            } finally {
                                i.pendingPublishPromises.delete(e)
                            }
                        }()
                    })
                }
                waitUntilEngineConnected() {
                    return this.signalConnectedFuture || (this.signalConnectedFuture = new a_), this.signalConnectedFuture.promise
                }
                hasPermissionsToPublish(e) {
                    if (!this.permissions) return this.log.warn("no permissions present for publishing track", Object.assign(Object.assign({}, this.logContext), a3(e))), !1;
                    let {
                        canPublish: t,
                        canPublishSources: i
                    } = this.permissions;
                    return !!(t && (0 === i.length || i.map(e => (function(e) {
                        switch (e) {
                            case tB.CAMERA:
                                return r1.Source.Camera;
                            case tB.MICROPHONE:
                                return r1.Source.Microphone;
                            case tB.SCREEN_SHARE:
                                return r1.Source.ScreenShare;
                            case tB.SCREEN_SHARE_AUDIO:
                                return r1.Source.ScreenShareAudio;
                            default:
                                return r1.Source.Unknown
                        }
                    })(e)).includes(e.source))) || (this.log.warn("insufficient permissions to publish", Object.assign(Object.assign({}, this.logContext), a3(e))), !1)
                }
                publish(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        var n, r, a, s, o, c, l, d, u, h;
                        let p, m;
                        if (!this.hasPermissionsToPublish(e)) throw new rW("failed to publish track, insufficient permissions", 403);
                        Array.from(this.trackPublications.values()).find(t => aB(e) && t.source === e.source) && e.source !== r1.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(e.source), Object.assign(Object.assign({}, this.logContext), a3(e))), t.stopMicTrackOnMute && aV(e) && (e.stopOnMute = !0), e.source === r1.Source.ScreenShare && ah() && (t.simulcast = !1), "av1" !== t.videoCodec || ao() || (t.videoCodec = void 0), "vp9" !== t.videoCodec || ac() || (t.videoCodec = void 0), void 0 === t.videoCodec && (t.videoCodec = "vp8"), this.enabledPublishVideoCodecs.length > 0 && !this.enabledPublishVideoCodecs.some(e => t.videoCodec === a2(e.mime)) && (t.videoCodec = a2(this.enabledPublishVideoCodecs[0].mime));
                        let f = t.videoCodec;
                        e.on(ed.Muted, this.onTrackMuted), e.on(ed.Unmuted, this.onTrackUnmuted), e.on(ed.Ended, this.handleTrackEnded), e.on(ed.UpstreamPaused, this.onTrackUpstreamPaused), e.on(ed.UpstreamResumed, this.onTrackUpstreamResumed), e.on(ed.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
                        let g = [],
                            v = !(null == (n = t.dtx) || n),
                            b = e.getSourceTrackSettings();
                        b.autoGainControl && g.push(tz.TF_AUTO_GAIN_CONTROL), b.echoCancellation && g.push(tz.TF_ECHO_CANCELLATION), b.noiseSuppression && g.push(tz.TF_NOISE_SUPPRESSION), b.channelCount && b.channelCount > 1 && g.push(tz.TF_STEREO), v && g.push(tz.TF_NO_DTX), aK(e) && e.hasPreConnectBuffer && g.push(tz.TF_PRECONNECT_BUFFER);
                        let y = new iD({
                            cid: e.mediaStreamTrack.id,
                            name: t.name,
                            type: r1.kindToProto(e.kind),
                            muted: e.isMuted,
                            source: r1.sourceToProto(e.source),
                            disableDtx: v,
                            encryption: this.encryptionType,
                            stereo: i,
                            disableRed: this.isE2EEEnabled || !(null == (r = t.red) || r),
                            stream: null == t ? void 0 : t.stream,
                            backupCodecPolicy: null == t ? void 0 : t.backupCodecPolicy,
                            audioFeatures: g
                        });
                        if (e.kind === r1.Kind.Video) {
                            let i = {
                                width: 0,
                                height: 0
                            };
                            try {
                                i = yield e.waitForDimensions()
                            } catch (n) {
                                let t = null != (s = null == (a = this.roomOptions.videoCaptureDefaults) ? void 0 : a.resolution) ? s : r8.h720.resolution;
                                i = {
                                    width: t.width,
                                    height: t.height
                                }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(e)), {
                                    dims: i
                                }))
                            }
                            y.width = i.width, y.height = i.height, aW(e) && (al(f) && (e.source === r1.Source.ScreenShare && (t.scalabilityMode = "L1T3", "contentHint" in e.mediaStreamTrack && (e.mediaStreamTrack.contentHint = "motion", this.log.info("forcing contentHint to motion for screenshare with SVC codecs", Object.assign(Object.assign({}, this.logContext), a3(e))))), t.scalabilityMode = null != (o = t.scalabilityMode) ? o : "L3T3_KEY"), y.simulcastCodecs = [new ix({
                                codec: f,
                                cid: e.mediaStreamTrack.id
                            })], !0 === t.backupCodec && (t.backupCodec = {
                                codec: "vp8"
                            }), t.backupCodec && f !== t.backupCodec.codec && y.encryption === t1.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0), y.simulcastCodecs.push(new ix({
                                codec: t.backupCodec.codec,
                                cid: ""
                            })))), p = sB(e.source === r1.Source.ScreenShare, y.width, y.height, t), y.layers = sJ(y.width, y.height, p, al(t.videoCodec))
                        } else e.kind === r1.Kind.Audio && (p = [{
                            maxBitrate: null == (c = t.audioPreset) ? void 0 : c.maxBitrate,
                            priority: null != (d = null == (l = t.audioPreset) ? void 0 : l.priority) ? d : "high",
                            networkPriority: null != (h = null == (u = t.audioPreset) ? void 0 : u.priority) ? h : "high"
                        }]);
                        if (!this.engine || this.engine.isClosed) throw new rB("cannot publish track when not connected");
                        let k = () => nT(this, void 0, void 0, function*() {
                                var i, n;
                                if (!this.engine.pcManager) throw new rB("pcManager is not ready");
                                if (e.sender = yield this.engine.createSender(e, t, p), this.emit(ec.LocalSenderCreated, e.sender, e), aW(e) && (null != t.degradationPreference || (t.degradationPreference = e.source === r1.Source.ScreenShare || e.constraints.height && aN(e.constraints.height) >= 1080 ? "maintain-resolution" : "balanced"), e.setDegradationPreference(t.degradationPreference)), p)
                                    if (ah() && e.kind === r1.Kind.Audio) {
                                        let t;
                                        for (let i of this.engine.pcManager.publisher.getTransceivers())
                                            if (i.sender === e.sender) {
                                                t = i;
                                                break
                                            } t && this.engine.pcManager.publisher.setTrackCodecBitrate({
                                            transceiver: t,
                                            codec: "opus",
                                            maxbr: (null == (i = p[0]) ? void 0 : i.maxBitrate) ? p[0].maxBitrate / 1e3 : 0
                                        })
                                    } else e.codec && al(e.codec) && (null == (n = p[0]) ? void 0 : n.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({
                                        cid: y.cid,
                                        codec: e.codec,
                                        maxbr: p[0].maxBitrate / 1e3
                                    });
                                yield this.engine.negotiate()
                            }),
                            T = new Promise((t, i) => nT(this, void 0, void 0, function*() {
                                var n;
                                try {
                                    m = yield this.engine.addTrack(y), t(m)
                                } catch (t) {
                                    e.sender && (null == (n = this.engine.pcManager) ? void 0 : n.publisher) && (this.engine.pcManager.publisher.removeTrack(e.sender), yield this.engine.negotiate().catch(t => {
                                        this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(e)), {
                                            error: t
                                        }))
                                    })), i(t)
                                }
                            }));
                        if (this.enabledPublishVideoCodecs.length > 0) m = (yield Promise.all([T, k()]))[0];
                        else {
                            let i;
                            if ((m = yield T).codecs.forEach(e => {
                                    void 0 === i && (i = e.mimeType)
                                }), i && e.kind === r1.Kind.Video) {
                                let n = a2(i);
                                n !== f && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(e)), {
                                    codec: n
                                })), t.videoCodec = n, p = sB(e.source === r1.Source.ScreenShare, y.width, y.height, t))
                            }
                            yield k()
                        }
                        let S = new or(e.kind, m, e, {
                            loggerName: this.roomOptions.loggerName,
                            loggerContextCb: () => this.logContext
                        });
                        if (S.on(ed.CpuConstrained, e => this.onTrackCpuConstrained(e, S)), S.options = t, e.sid = m.sid, this.log.debug("publishing ".concat(e.kind, " with encodings"), Object.assign(Object.assign({}, this.logContext), {
                                encodings: p,
                                trackInfo: m
                            })), aW(e) ? e.startMonitor(this.engine.client) : aK(e) && e.startMonitor(), this.addTrackPublication(S), this.emit(ec.LocalTrackPublished, S), aK(e) && m.audioFeatures.includes(tz.TF_PRECONNECT_BUFFER)) {
                            let t = e.getPreConnectBuffer();
                            this.on(ec.LocalTrackSubscribed, t => {
                                if (t.trackSid === m.sid) {
                                    if (!e.hasPreConnectBuffer) return void this.log.warn("subscribe event came to late, buffer already closed", this.logContext);
                                    this.log.debug("finished recording preconnect buffer", Object.assign(Object.assign({}, this.logContext), a3(e))), e.stopPreConnectBuffer()
                                }
                            }), t && new Promise((i, n) => nT(this, void 0, void 0, function*() {
                                try {
                                    this.log.debug("waiting for agent", Object.assign(Object.assign({}, this.logContext), a3(e)));
                                    let p = setTimeout(() => {
                                            n(Error("agent not active within 10 seconds"))
                                        }, 1e4),
                                        m = yield this.waitUntilActiveAgentPresent();
                                    clearTimeout(p), this.log.debug("sending preconnect buffer", Object.assign(Object.assign({}, this.logContext), a3(e)));
                                    let f = yield this.streamBytes({
                                        name: "preconnect-buffer",
                                        mimeType: "audio/opus",
                                        topic: "lk.agent.pre-connect-audio-buffer",
                                        destinationIdentities: [m.identity],
                                        attributes: {
                                            trackId: S.trackSid,
                                            sampleRate: String(null != (c = b.sampleRate) ? c : "48000"),
                                            channels: String(null != (l = b.channelCount) ? l : "1")
                                        }
                                    });
                                    try {
                                        for (var r, a, s, o, c, l, d, u = !0, h = nS(t); !(r = (d = yield h.next()).done); u = !0) o = d.value, u = !1, yield f.write(o)
                                    } catch (e) {
                                        a = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            !u && !r && (s = h.return) && (yield s.call(h))
                                        } finally {
                                            if (a) throw a.error
                                        }
                                    }
                                    yield f.close(), i()
                                } catch (e) {
                                    n(e)
                                }
                            })).then(() => {
                                this.log.debug("preconnect buffer sent successfully", Object.assign(Object.assign({}, this.logContext), a3(e)))
                            }).catch(t => {
                                this.log.error("error sending preconnect buffer", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(e)), {
                                    error: t
                                }))
                            })
                        }
                        return S
                    })
                }
                get isLocal() {
                    return !0
                }
                publishAdditionalCodecForTrack(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        var n;
                        let r;
                        if (this.encryptionType !== t1.NONE) return;
                        if (this.trackPublications.forEach(t => {
                                t.track && t.track === e && (r = t)
                            }), !r) throw new rj("track is not published");
                        if (!aW(e)) throw new rj("track is not a video track");
                        let a = Object.assign(Object.assign({}, null == (n = this.roomOptions) ? void 0 : n.publishDefaults), i),
                            s = function(e, t, i) {
                                var n, r, a, s;
                                if (!i.backupCodec || !0 === i.backupCodec || i.backupCodec.codec === i.videoCodec) return;
                                t !== i.backupCodec.codec && np.warn("requested a different codec than specified as backup", {
                                    serverRequested: t,
                                    backup: i.backupCodec.codec
                                }), i.videoCodec = t, i.videoEncoding = i.backupCodec.encoding;
                                let o = e.mediaStreamTrack.getSettings(),
                                    c = null != (n = o.width) ? n : null == (r = e.dimensions) ? void 0 : r.width,
                                    l = null != (a = o.height) ? a : null == (s = e.dimensions) ? void 0 : s.height;
                                return e.source === r1.Source.ScreenShare && i.simulcast && (i.simulcast = !1), sB(e.source === r1.Source.ScreenShare, c, l, i)
                            }(e, t, a);
                        if (!s) return void this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", Object.assign(Object.assign({}, this.logContext), a3(e)));
                        let o = e.addSimulcastTrack(t, s);
                        if (!o) return;
                        let c = new iD({
                            cid: o.mediaStreamTrack.id,
                            type: r1.kindToProto(e.kind),
                            muted: e.isMuted,
                            source: r1.sourceToProto(e.source),
                            sid: e.sid,
                            simulcastCodecs: [{
                                codec: a.videoCodec,
                                cid: o.mediaStreamTrack.id
                            }]
                        });
                        if (c.layers = sJ(c.width, c.height, s), !this.engine || this.engine.isClosed) throw new rB("cannot publish track when not connected");
                        let l = () => nT(this, void 0, void 0, function*() {
                                yield this.engine.createSimulcastSender(e, o, a, s), yield this.engine.negotiate()
                            }),
                            d = (yield Promise.all([this.engine.addTrack(c), l()]))[0];
                        this.log.debug("published ".concat(t, " for track ").concat(e.sid), Object.assign(Object.assign({}, this.logContext), {
                            encodings: s,
                            trackInfo: d
                        }))
                    })
                }
                unpublishTrack(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i, n;
                        if (aB(e)) {
                            let t = this.pendingPublishPromises.get(e);
                            t && (this.log.info("awaiting publish promise before attempting to unpublish", Object.assign(Object.assign({}, this.logContext), a3(e))), yield t)
                        }
                        let r = this.getPublicationForTrack(e),
                            a = r ? a3(r) : void 0;
                        if (this.log.debug("unpublishing track", Object.assign(Object.assign({}, this.logContext), a)), !r || !r.track) return void this.log.warn("track was not unpublished because no publication was found", Object.assign(Object.assign({}, this.logContext), a));
                        (e = r.track).off(ed.Muted, this.onTrackMuted), e.off(ed.Unmuted, this.onTrackUnmuted), e.off(ed.Ended, this.handleTrackEnded), e.off(ed.UpstreamPaused, this.onTrackUpstreamPaused), e.off(ed.UpstreamResumed, this.onTrackUpstreamResumed), e.off(ed.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), void 0 === t && (t = null == (n = null == (i = this.roomOptions) ? void 0 : i.stopLocalTrackOnUnpublish) || n), t ? e.stop() : e.stopMonitor();
                        let s = !1,
                            o = e.sender;
                        if (e.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < eT.FAILED && o) try {
                            for (let e of this.engine.pcManager.publisher.getTransceivers()) e.sender === o && (e.direction = "inactive", s = !0);
                            if (this.engine.removeTrack(o) && (s = !0), aW(e)) {
                                for (let [, t] of e.simulcastCodecs) t.sender && (this.engine.removeTrack(t.sender) && (s = !0), t.sender = void 0);
                                e.simulcastCodecs.clear()
                            }
                        } catch (e) {
                            this.log.warn("failed to unpublish track", Object.assign(Object.assign(Object.assign({}, this.logContext), a), {
                                error: e
                            }))
                        }
                        switch (this.trackPublications.delete(r.trackSid), r.kind) {
                            case r1.Kind.Audio:
                                this.audioTrackPublications.delete(r.trackSid);
                                break;
                            case r1.Kind.Video:
                                this.videoTrackPublications.delete(r.trackSid)
                        }
                        return this.emit(ec.LocalTrackUnpublished, r), r.setTrack(void 0), s && (yield this.engine.negotiate()), r
                    })
                }
                unpublishTracks(e) {
                    return nT(this, void 0, void 0, function*() {
                        return (yield Promise.all(e.map(e => this.unpublishTrack(e)))).filter(e => !!e)
                    })
                }
                republishAllTracks(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return function*() {
                            t.republishPromise && (yield t.republishPromise), t.republishPromise = new Promise((n, r) => nT(t, void 0, void 0, function*() {
                                try {
                                    let t = [];
                                    this.trackPublications.forEach(i => {
                                        i.track && (e && (i.options = Object.assign(Object.assign({}, i.options), e)), t.push(i))
                                    }), yield Promise.all(t.map(e => nT(this, void 0, void 0, function*() {
                                        let t = e.track;
                                        yield this.unpublishTrack(t, !1), i && !t.isMuted && t.source !== r1.Source.ScreenShare && t.source !== r1.Source.ScreenShareAudio && (aK(t) || aW(t)) && !t.isUserProvided && (this.log.debug("restarting existing track", Object.assign(Object.assign({}, this.logContext), {
                                            track: e.trackSid
                                        })), yield t.restartTrack()), yield this.publishOrRepublishTrack(t, e.options, !0)
                                    }))), n()
                                } catch (e) {
                                    r(e)
                                } finally {
                                    this.republishPromise = void 0
                                }
                            })), yield t.republishPromise
                        }()
                    })
                }
                publishData(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function*() {
                            let n = i.reliable ? t9.RELIABLE : t9.LOSSY,
                                r = i.destinationIdentities,
                                a = i.topic,
                                s = new t5({
                                    kind: n,
                                    value: {
                                        case: "user",
                                        value: new t7({
                                            participantIdentity: t.identity,
                                            payload: e,
                                            destinationIdentities: r,
                                            topic: a
                                        })
                                    }
                                });
                            yield t.engine.sendDataPacket(s, n)
                        }()
                    })
                }
                publishDtmf(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i = new t5({
                            kind: t9.RELIABLE,
                            value: {
                                case: "sipDtmf",
                                value: new ie({
                                    code: e,
                                    digit: t
                                })
                            }
                        });
                        yield this.engine.sendDataPacket(i, t9.RELIABLE)
                    })
                }
                sendChatMessage(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i = {
                                id: crypto.randomUUID(),
                                message: e,
                                timestamp: Date.now(),
                                attachedFiles: null == t ? void 0 : t.attachments
                            },
                            n = new t5({
                                value: {
                                    case: "chatMessage",
                                    value: new ir(Object.assign(Object.assign({}, i), {
                                        timestamp: ez.parse(i.timestamp)
                                    }))
                                }
                            });
                        return yield this.engine.sendDataPacket(n, t9.RELIABLE), this.emit(ec.ChatMessage, i), i
                    })
                }
                editChatMessage(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i = Object.assign(Object.assign({}, t), {
                                message: e,
                                editTimestamp: Date.now()
                            }),
                            n = new t5({
                                value: {
                                    case: "chatMessage",
                                    value: new ir(Object.assign(Object.assign({}, i), {
                                        timestamp: ez.parse(i.timestamp),
                                        editTimestamp: ez.parse(i.editTimestamp)
                                    }))
                                }
                            });
                        return yield this.engine.sendDataPacket(n, t9.RELIABLE), this.emit(ec.ChatMessage, i), i
                    })
                }
                sendText(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i;
                        let n = crypto.randomUUID(),
                            r = new TextEncoder().encode(e).byteLength,
                            a = null == (i = null == t ? void 0 : t.attachments) ? void 0 : i.map(() => crypto.randomUUID()),
                            s = Array(a ? a.length + 1 : 1).fill(0),
                            o = (e, i) => {
                                var n;
                                s[i] = e;
                                let r = s.reduce((e, t) => e + t, 0);
                                null == (n = null == t ? void 0 : t.onProgress) || n.call(t, r)
                            },
                            c = yield this.streamText({
                                streamId: n,
                                totalSize: r,
                                destinationIdentities: null == t ? void 0 : t.destinationIdentities,
                                topic: null == t ? void 0 : t.topic,
                                attachedStreamIds: a,
                                attributes: null == t ? void 0 : t.attributes
                            });
                        return yield c.write(e), o(1, 0), yield c.close(), (null == t ? void 0 : t.attachments) && a && (yield Promise.all(t.attachments.map((e, i) => nT(this, void 0, void 0, function*() {
                            return this._sendFile(a[i], e, {
                                topic: t.topic,
                                mimeType: e.type,
                                onProgress: e => {
                                    o(e, i + 1)
                                }
                            })
                        })))), c.info
                    })
                }
                streamText(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i;
                        let n = null != (t = null == e ? void 0 : e.streamId) ? t : crypto.randomUUID(),
                            r = {
                                id: n,
                                mimeType: "text/plain",
                                timestamp: Date.now(),
                                topic: null != (i = null == e ? void 0 : e.topic) ? i : "",
                                size: null == e ? void 0 : e.totalSize,
                                attributes: null == e ? void 0 : e.attributes
                            },
                            a = new iS({
                                streamId: n,
                                mimeType: r.mimeType,
                                topic: r.topic,
                                timestamp: aF(r.timestamp),
                                totalLength: aF(null == e ? void 0 : e.totalSize),
                                attributes: r.attributes,
                                contentHeader: {
                                    case: "textHeader",
                                    value: new ik({
                                        version: null == e ? void 0 : e.version,
                                        attachedStreamIds: null == e ? void 0 : e.attachedStreamIds,
                                        replyToStreamId: null == e ? void 0 : e.replyToStreamId,
                                        operationType: (null == e ? void 0 : e.type) === "update" ? iy.UPDATE : iy.CREATE
                                    })
                                }
                            }),
                            s = null == e ? void 0 : e.destinationIdentities,
                            o = new t5({
                                destinationIdentities: s,
                                value: {
                                    case: "streamHeader",
                                    value: a
                                }
                            });
                        yield this.engine.sendDataPacket(o, t9.RELIABLE);
                        let c = 0,
                            l = this,
                            d = new WritableStream({
                                write(e) {
                                    return nT(this, void 0, void 0, function*() {
                                        for (let t of function(e, t) {
                                                let i = [],
                                                    n = new TextEncoder().encode(e);
                                                for (; n.length > 15e3;) {
                                                    let e = 15e3;
                                                    for (; e > 0;) {
                                                        let t = n[e];
                                                        if (void 0 !== t && (192 & t) != 128) break;
                                                        e--
                                                    }
                                                    i.push(n.slice(0, e)), n = n.slice(e)
                                                }
                                                return n.length > 0 && i.push(n), i
                                            }(e, 0)) {
                                            yield l.engine.waitForBufferStatusLow(t9.RELIABLE);
                                            let e = new t5({
                                                destinationIdentities: s,
                                                value: {
                                                    case: "streamChunk",
                                                    value: new iC({
                                                        content: t,
                                                        streamId: n,
                                                        chunkIndex: aF(c)
                                                    })
                                                }
                                            });
                                            yield l.engine.sendDataPacket(e, t9.RELIABLE), c += 1
                                        }
                                    })
                                },
                                close() {
                                    return nT(this, void 0, void 0, function*() {
                                        let e = new t5({
                                            destinationIdentities: s,
                                            value: {
                                                case: "streamTrailer",
                                                value: new iw({
                                                    streamId: n
                                                })
                                            }
                                        });
                                        yield l.engine.sendDataPacket(e, t9.RELIABLE)
                                    })
                                },
                                abort(e) {
                                    console.log("Sink error:", e)
                                }
                            }),
                            u = () => nT(this, void 0, void 0, function*() {
                                yield h.close()
                            });
                        l.engine.once(el.Closing, u);
                        let h = new s5(d, r, () => this.engine.off(el.Closing, u));
                        return h
                    })
                }
                sendFile(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i = crypto.randomUUID();
                        return yield this._sendFile(i, e, t), {
                            id: i
                        }
                    })
                }
                _sendFile(e, t, i) {
                    return nT(this, void 0, void 0, function*() {
                        var n;
                        let r = yield this.streamBytes({
                            streamId: e,
                            totalSize: t.size,
                            name: t.name,
                            mimeType: null != (n = null == i ? void 0 : i.mimeType) ? n : t.type,
                            topic: null == i ? void 0 : i.topic,
                            destinationIdentities: null == i ? void 0 : i.destinationIdentities
                        }), a = t.stream().getReader();
                        for (;;) {
                            let {
                                done: e,
                                value: t
                            } = yield a.read();
                            if (e) break;
                            yield r.write(t)
                        }
                        return yield r.close(), r.info
                    })
                }
                streamBytes(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i, n, r, a;
                        let s = null != (t = null == e ? void 0 : e.streamId) ? t : crypto.randomUUID(),
                            o = null == e ? void 0 : e.destinationIdentities,
                            c = {
                                id: s,
                                mimeType: null != (i = null == e ? void 0 : e.mimeType) ? i : "application/octet-stream",
                                topic: null != (n = null == e ? void 0 : e.topic) ? n : "",
                                timestamp: Date.now(),
                                attributes: null == e ? void 0 : e.attributes,
                                size: null == e ? void 0 : e.totalSize,
                                name: null != (r = null == e ? void 0 : e.name) ? r : "unknown"
                            },
                            l = new t5({
                                destinationIdentities: o,
                                value: {
                                    case: "streamHeader",
                                    value: new iS({
                                        totalLength: aF(null != (a = c.size) ? a : 0),
                                        mimeType: c.mimeType,
                                        streamId: s,
                                        topic: c.topic,
                                        timestamp: aF(Date.now()),
                                        attributes: c.attributes,
                                        contentHeader: {
                                            case: "byteHeader",
                                            value: new iT({
                                                name: c.name
                                            })
                                        }
                                    })
                                }
                            });
                        yield this.engine.sendDataPacket(l, t9.RELIABLE);
                        let d = 0,
                            u = new eO,
                            h = this.engine,
                            p = this.log;
                        return new s9(new WritableStream({
                            write(e) {
                                return nT(this, void 0, void 0, function*() {
                                    let t = yield u.lock(), i = 0;
                                    try {
                                        for (; i < e.byteLength;) {
                                            let t = e.slice(i, i + 15e3);
                                            yield h.waitForBufferStatusLow(t9.RELIABLE);
                                            let n = new t5({
                                                destinationIdentities: o,
                                                value: {
                                                    case: "streamChunk",
                                                    value: new iC({
                                                        content: t,
                                                        streamId: s,
                                                        chunkIndex: aF(d)
                                                    })
                                                }
                                            });
                                            yield h.sendDataPacket(n, t9.RELIABLE), d += 1, i += t.byteLength
                                        }
                                    } finally {
                                        t()
                                    }
                                })
                            },
                            close() {
                                return nT(this, void 0, void 0, function*() {
                                    let e = new t5({
                                        destinationIdentities: o,
                                        value: {
                                            case: "streamTrailer",
                                            value: new iw({
                                                streamId: s
                                            })
                                        }
                                    });
                                    yield h.sendDataPacket(e, t9.RELIABLE)
                                })
                            },
                            abort(e) {
                                p.error("Sink error:", e)
                            }
                        }), c)
                    })
                }
                performRpc(e) {
                    return nT(this, arguments, void 0, function(e) {
                        var t = this;
                        let {
                            destinationIdentity: i,
                            method: n,
                            payload: r,
                            responseTimeout: a = 1e4
                        } = e;
                        return function*() {
                            return new Promise((e, s) => nT(t, void 0, void 0, function*() {
                                var t, o, c, l;
                                if (sP(r) > 15360) return void s(sE.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
                                if ((null == (o = null == (t = this.engine.latestJoinResponse) ? void 0 : t.serverInfo) ? void 0 : o.version) && 0 > aC(null == (l = null == (c = this.engine.latestJoinResponse) ? void 0 : c.serverInfo) ? void 0 : l.version, "1.8.0")) return void s(sE.builtIn("UNSUPPORTED_SERVER"));
                                let d = crypto.randomUUID();
                                yield this.publishRpcRequest(i, d, n, r, a - 2e3);
                                let u = setTimeout(() => {
                                    this.pendingAcks.delete(d), s(sE.builtIn("CONNECTION_TIMEOUT")), this.pendingResponses.delete(d), clearTimeout(h)
                                }, 2e3);
                                this.pendingAcks.set(d, {
                                    resolve: () => {
                                        clearTimeout(u)
                                    },
                                    participantIdentity: i
                                });
                                let h = setTimeout(() => {
                                    this.pendingResponses.delete(d), s(sE.builtIn("RESPONSE_TIMEOUT"))
                                }, a);
                                this.pendingResponses.set(d, {
                                    resolve: (t, i) => {
                                        clearTimeout(h), this.pendingAcks.has(d) && (console.warn("RPC response received before ack", d), this.pendingAcks.delete(d), clearTimeout(u)), i ? s(i) : e(null != t ? t : "")
                                    },
                                    participantIdentity: i
                                })
                            }))
                        }()
                    })
                }
                registerRpcMethod(e, t) {
                    this.rpcHandlers.has(e) && this.log.warn("you're overriding the RPC handler for method ".concat(e, ", in the future this will throw an error")), this.rpcHandlers.set(e, t)
                }
                unregisterRpcMethod(e) {
                    this.rpcHandlers.delete(e)
                }
                setTrackSubscriptionPermissions(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    this.participantTrackPermissions = t, this.allParticipantsAllowedToSubscribe = e, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions()
                }
                handleIncomingRpcAck(e) {
                    let t = this.pendingAcks.get(e);
                    t ? (t.resolve(), this.pendingAcks.delete(e)) : console.error("Ack received for unexpected RPC request", e)
                }
                handleIncomingRpcResponse(e, t, i) {
                    let n = this.pendingResponses.get(e);
                    n ? (n.resolve(t, i), this.pendingResponses.delete(e)) : console.error("Response received for unexpected RPC request", e)
                }
                publishRpcRequest(e, t, i, n, r) {
                    return nT(this, void 0, void 0, function*() {
                        let a = new t5({
                            destinationIdentities: [e],
                            kind: t9.RELIABLE,
                            value: {
                                case: "rpcRequest",
                                value: new ia({
                                    id: t,
                                    method: i,
                                    payload: n,
                                    responseTimeoutMs: r,
                                    version: 1
                                })
                            }
                        });
                        yield this.engine.sendDataPacket(a, t9.RELIABLE)
                    })
                }
                handleParticipantDisconnected(e) {
                    for (let [t, {
                            participantIdentity: i
                        }] of this.pendingAcks) i === e && this.pendingAcks.delete(t);
                    for (let [t, {
                            participantIdentity: i,
                            resolve: n
                        }] of this.pendingResponses) i === e && (n(null, sE.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(t))
                }
                setEnabledPublishCodecs(e) {
                    this.enabledPublishVideoCodecs = e.filter(e => "video" === e.mime.split("/")[0].toLowerCase())
                }
                updateInfo(e) {
                    return !!super.updateInfo(e) && (e.tracks.forEach(e => {
                        var t, i;
                        let n = this.trackPublications.get(e.sid);
                        if (n) {
                            let r = n.isMuted || null != (i = null == (t = n.track) ? void 0 : t.isUpstreamPaused) && i;
                            r !== e.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(n)), {
                                mutedOnServer: r
                            })), this.engine.client.sendMuteTrack(e.sid, r))
                        }
                    }), !0)
                }
                setActiveAgent(e) {
                    var t, i, n, r;
                    this.firstActiveAgent = e, e && !this.firstActiveAgent && (this.firstActiveAgent = e), e ? null == (i = null == (t = this.activeAgentFuture) ? void 0 : t.resolve) || i.call(t, e) : null == (r = null == (n = this.activeAgentFuture) ? void 0 : n.reject) || r.call(n, "Agent disconnected"), this.activeAgentFuture = void 0
                }
                waitUntilActiveAgentPresent() {
                    return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new a_), this.activeAgentFuture.promise)
                }
                getPublicationForTrack(e) {
                    let t;
                    return this.trackPublications.forEach(i => {
                        let n = i.track;
                        n && (e instanceof MediaStreamTrack ? (aK(n) || aW(n)) && n.mediaStreamTrack === e && (t = i) : e === n && (t = i))
                    }), t
                }
                waitForPendingPublicationOfSource(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = Date.now();
                        for (; Date.now() < t + 1e4;) {
                            let t = Array.from(this.pendingPublishPromises.entries()).find(t => {
                                let [i] = t;
                                return i.source === e
                            });
                            if (t) return t[1];
                            yield ai(20)
                        }
                    })
                }
                constructor(e, t, i, n, r) {
                    super(e, t, void 0, void 0, void 0, {
                        loggerName: n.loggerName,
                        loggerContextCb: () => this.engine.logContext
                    }), this.pendingPublishing = new Set, this.pendingPublishPromises = new Map, this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = !0, this.encryptionType = t1.NONE, this.enabledPublishVideoCodecs = [], this.pendingAcks = new Map, this.pendingResponses = new Map, this.handleReconnecting = () => {
                        this.reconnectFuture || (this.reconnectFuture = new a_)
                    }, this.handleReconnected = () => {
                        var e, t;
                        null == (t = null == (e = this.reconnectFuture) ? void 0 : e.resolve) || t.call(e), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions()
                    }, this.handleDisconnected = () => {
                        var e, t, i, n, r, a;
                        this.reconnectFuture && (this.reconnectFuture.promise.catch(e => this.log.warn(e.message, this.logContext)), null == (t = null == (e = this.reconnectFuture) ? void 0 : e.reject) || t.call(e, "Got disconnected during reconnection attempt"), this.reconnectFuture = void 0), this.signalConnectedFuture && (null == (n = (i = this.signalConnectedFuture).reject) || n.call(i, "Got disconnected without signal connected"), this.signalConnectedFuture = void 0), null == (a = null == (r = this.activeAgentFuture) ? void 0 : r.reject) || a.call(r, "Got disconnected without active agent present"), this.activeAgentFuture = void 0, this.firstActiveAgent = void 0
                    }, this.handleSignalConnected = e => {
                        var t, i;
                        e.participant && this.updateInfo(e.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new a_), null == (i = (t = this.signalConnectedFuture).resolve) || i.call(t)
                    }, this.handleSignalRequestResponse = e => {
                        let {
                            requestId: t,
                            reason: i,
                            message: n
                        } = e, r = this.pendingSignalRequests.get(t);
                        r && (i !== nc.OK && r.reject(new rK(n, i)), this.pendingSignalRequests.delete(t))
                    }, this.handleDataPacket = e => {
                        switch (e.value.case) {
                            case "rpcResponse":
                                let t = e.value.value,
                                    i = null,
                                    n = null;
                                "payload" === t.value.case ? i = t.value.value : "error" === t.value.case && (n = sE.fromProto(t.value.value)), this.handleIncomingRpcResponse(t.requestId, i, n);
                                break;
                            case "rpcAck":
                                let r = e.value.value;
                                this.handleIncomingRpcAck(r.requestId)
                        }
                    }, this.updateTrackSubscriptionPermissions = () => {
                        this.log.debug("updating track subscription permissions", Object.assign(Object.assign({}, this.logContext), {
                            allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
                            participantTrackPermissions: this.participantTrackPermissions
                        })), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(e => (function(e) {
                            var t, i, n;
                            if (!e.participantSid && !e.participantIdentity) throw Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
                            return new i4({
                                participantIdentity: null != (t = e.participantIdentity) ? t : "",
                                participantSid: null != (i = e.participantSid) ? i : "",
                                allTracks: null != (n = e.allowAll) && n,
                                trackSids: e.allowedTrackSids || []
                            })
                        })(e)))
                    }, this.onTrackUnmuted = e => {
                        this.onTrackMuted(e, e.isUpstreamPaused)
                    }, this.onTrackMuted = (e, t) => {
                        (void 0 === t && (t = !0), e.sid) ? this.engine.updateMuteStatus(e.sid, t): this.log.error("could not update mute status for unpublished track", Object.assign(Object.assign({}, this.logContext), a3(e)))
                    }, this.onTrackUpstreamPaused = e => {
                        this.log.debug("upstream paused", Object.assign(Object.assign({}, this.logContext), a3(e))), this.onTrackMuted(e, !0)
                    }, this.onTrackUpstreamResumed = e => {
                        this.log.debug("upstream resumed", Object.assign(Object.assign({}, this.logContext), a3(e))), this.onTrackMuted(e, e.isMuted)
                    }, this.onTrackFeatureUpdate = e => {
                        let t = this.audioTrackPublications.get(e.sid);
                        t ? this.engine.client.sendUpdateLocalAudioTrack(t.trackSid, t.getTrackFeatures()) : this.log.warn("Could not update local audio track settings, missing publication for track ".concat(e.sid), this.logContext)
                    }, this.onTrackCpuConstrained = (e, t) => {
                        this.log.debug("track cpu constrained", Object.assign(Object.assign({}, this.logContext), a3(t))), this.emit(ec.LocalTrackCpuConstrained, e, t)
                    }, this.handleSubscribedQualityUpdate = e => nT(this, void 0, void 0, function*() {
                        if (!(null == (o = this.roomOptions) ? void 0 : o.dynacast)) return;
                        let t = this.videoTrackPublications.get(e.trackSid);
                        if (!t) return void this.log.warn("received subscribed quality update for unknown track", Object.assign(Object.assign({}, this.logContext), {
                            trackSid: e.trackSid
                        }));
                        if (!t.videoTrack) return;
                        let i = yield t.videoTrack.setPublishingCodecs(e.subscribedCodecs);
                        try {
                            for (var n, r, a, s, o, c, l = !0, d = nS(i); !(n = (c = yield d.next()).done); l = !0) s = c.value, l = !1, r6(s) && (this.log.debug("publish ".concat(s, " for ").concat(t.videoTrack.sid), Object.assign(Object.assign({}, this.logContext), a3(t))), yield this.publishAdditionalCodecForTrack(t.videoTrack, s, t.options))
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                !l && !n && (a = d.return) && (yield a.call(d))
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }), this.handleLocalTrackUnpublished = e => {
                        let t = this.trackPublications.get(e.trackSid);
                        t ? this.unpublishTrack(t.track) : this.log.warn("received unpublished event for unknown track", Object.assign(Object.assign({}, this.logContext), {
                            trackSid: e.trackSid
                        }))
                    }, this.handleTrackEnded = e => nT(this, void 0, void 0, function*() {
                        if (e.source === r1.Source.ScreenShare || e.source === r1.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", Object.assign(Object.assign({}, this.logContext), a3(e))), this.unpublishTrack(e);
                        else if (e.isUserProvided) yield e.mute();
                        else if (aK(e) || aW(e)) try {
                            if (av()) try {
                                let t = yield null == navigator ? void 0 : navigator.permissions.query({
                                    name: e.source === r1.Source.Camera ? "camera" : "microphone"
                                });
                                if (t && "denied" === t.state) throw this.log.warn("user has revoked access to ".concat(e.source), Object.assign(Object.assign({}, this.logContext), a3(e))), t.onchange = () => {
                                    "denied" !== t.state && (e.isMuted || e.restartTrack(), t.onchange = null)
                                }, Error("GetUserMedia Permission denied")
                            } catch (e) {}
                            e.isMuted || (this.log.debug("track ended, attempting to use a different device", Object.assign(Object.assign({}, this.logContext), a3(e))), aK(e) ? yield e.restartTrack({
                                deviceId: "default"
                            }): yield e.restartTrack())
                        } catch (t) {
                            this.log.warn("could not restart track, muting instead", Object.assign(Object.assign({}, this.logContext), a3(e))), yield e.mute()
                        }
                    }), this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.trackPublications = new Map, this.engine = i, this.roomOptions = n, this.setupEngine(i), this.activeDeviceMap = new Map([
                        ["audioinput", "default"],
                        ["videoinput", "default"],
                        ["audiooutput", "default"]
                    ]), this.pendingSignalRequests = new Map, this.rpcHandlers = r
                }
            }
            class ou extends on {
                setSubscribed(e) {
                    let t = this.subscriptionStatus,
                        i = this.permissionStatus;
                    this.subscribed = e, e && (this.allowed = !0);
                    let n = new iB({
                        trackSids: [this.trackSid],
                        subscribe: this.subscribed,
                        participantTracks: [new il({
                            participantSid: "",
                            trackSids: [this.trackSid]
                        })]
                    });
                    this.emit(ed.UpdateSubscription, n), this.emitSubscriptionUpdateIfChanged(t), this.emitPermissionUpdateIfChanged(i)
                }
                get subscriptionStatus() {
                    return !1 === this.subscribed ? on.SubscriptionStatus.Unsubscribed : super.isSubscribed ? on.SubscriptionStatus.Subscribed : on.SubscriptionStatus.Desired
                }
                get permissionStatus() {
                    return this.allowed ? on.PermissionStatus.Allowed : on.PermissionStatus.NotAllowed
                }
                get isSubscribed() {
                    return !1 !== this.subscribed && super.isSubscribed
                }
                get isDesired() {
                    return !1 !== this.subscribed
                }
                get isEnabled() {
                    return void 0 !== this.requestedDisabled ? !this.requestedDisabled : !this.isAdaptiveStream || this.visible
                }
                get isLocal() {
                    return !1
                }
                setEnabled(e) {
                    this.isManualOperationAllowed() && !e !== this.requestedDisabled && (this.requestedDisabled = !e, this.emitTrackUpdate())
                }
                setVideoQuality(e) {
                    this.isManualOperationAllowed() && this.requestedMaxQuality !== e && (this.requestedMaxQuality = e, this.requestedVideoDimensions = void 0, this.emitTrackUpdate())
                }
                setVideoDimensions(e) {
                    var t, i;
                    this.isManualOperationAllowed() && ((null == (t = this.requestedVideoDimensions) ? void 0 : t.width) !== e.width || (null == (i = this.requestedVideoDimensions) ? void 0 : i.height) !== e.height) && (aG(this.track) && (this.requestedVideoDimensions = e), this.requestedMaxQuality = void 0, this.emitTrackUpdate())
                }
                setVideoFPS(e) {
                    this.isManualOperationAllowed() && aG(this.track) && this.fps !== e && (this.fps = e, this.emitTrackUpdate())
                }
                get videoQuality() {
                    var e;
                    return null != (e = this.requestedMaxQuality) ? e : eu.HIGH
                }
                setTrack(e) {
                    let t = this.subscriptionStatus,
                        i = this.permissionStatus,
                        n = this.track;
                    n !== e && (n && (n.off(ed.VideoDimensionsChanged, this.handleVideoDimensionsChange), n.off(ed.VisibilityChanged, this.handleVisibilityChange), n.off(ed.Ended, this.handleEnded), n.detach(), n.stopMonitor(), this.emit(ed.Unsubscribed, n)), super.setTrack(e), e && (e.sid = this.trackSid, e.on(ed.VideoDimensionsChanged, this.handleVideoDimensionsChange), e.on(ed.VisibilityChanged, this.handleVisibilityChange), e.on(ed.Ended, this.handleEnded), this.emit(ed.Subscribed, e)), this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t))
                }
                setAllowed(e) {
                    let t = this.subscriptionStatus,
                        i = this.permissionStatus;
                    this.allowed = e, this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t)
                }
                setSubscriptionError(e) {
                    this.emit(ed.SubscriptionFailed, e)
                }
                updateInfo(e) {
                    super.updateInfo(e);
                    let t = this.metadataMuted;
                    this.metadataMuted = e.muted, this.track ? this.track.setMuted(e.muted) : t !== e.muted && this.emit(e.muted ? ed.Muted : ed.Unmuted)
                }
                emitSubscriptionUpdateIfChanged(e) {
                    let t = this.subscriptionStatus;
                    e !== t && this.emit(ed.SubscriptionStatusChanged, t, e)
                }
                emitPermissionUpdateIfChanged(e) {
                    this.permissionStatus !== e && this.emit(ed.SubscriptionPermissionChanged, this.permissionStatus, e)
                }
                isManualOperationAllowed() {
                    return !!this.isDesired || (this.log.warn("cannot update track settings when not subscribed", this.logContext), !1)
                }
                get isAdaptiveStream() {
                    return aG(this.track) && this.track.isAdaptiveStream
                }
                emitTrackUpdate() {
                    let e = new iV({
                        trackSids: [this.trackSid],
                        disabled: !this.isEnabled,
                        fps: this.fps
                    });
                    if (this.kind === r1.Kind.Video) {
                        let r = this.requestedVideoDimensions;
                        if (void 0 !== this.videoDimensionsAdaptiveStream)
                            if (r) a5(this.videoDimensionsAdaptiveStream, r) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r = this.videoDimensionsAdaptiveStream);
                            else if (void 0 !== this.requestedMaxQuality && this.trackInfo) {
                            var t, i, n;
                            let e = (t = this.trackInfo, i = this.requestedMaxQuality, null == (n = t.layers) ? void 0 : n.find(e => e.quality === i));
                            e && a5(this.videoDimensionsAdaptiveStream, e) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r = this.videoDimensionsAdaptiveStream)
                        } else this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r = this.videoDimensionsAdaptiveStream;
                        r ? (e.width = Math.ceil(r.width), e.height = Math.ceil(r.height)) : void 0 !== this.requestedMaxQuality ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), {
                            quality: this.requestedMaxQuality
                        })), e.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), {
                            quality: eu.HIGH
                        })), e.quality = eu.HIGH)
                    }
                    this.emit(ed.UpdateSettings, e)
                }
                constructor(e, t, i, n) {
                    super(e, t.sid, t.name, n), this.track = void 0, this.allowed = !0, this.requestedDisabled = void 0, this.visible = !0, this.handleEnded = e => {
                        this.setTrack(void 0), this.emit(ed.Ended, e)
                    }, this.handleVisibilityChange = e => {
                        this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(e), this.logContext), this.visible = e, this.emitTrackUpdate()
                    }, this.handleVideoDimensionsChange = e => {
                        this.log.debug("adaptivestream video dimensions ".concat(e.width, "x").concat(e.height), this.logContext), this.videoDimensionsAdaptiveStream = e, this.emitTrackUpdate()
                    }, this.subscribed = i, this.updateInfo(t)
                }
            }
            class oh extends ol {
                static fromParticipantInfo(e, t, i) {
                    return new oh(e, t.sid, t.identity, t.name, t.metadata, t.attributes, i, t.kind)
                }
                get logContext() {
                    return Object.assign(Object.assign({}, super.logContext), {
                        rpID: this.sid,
                        remoteParticipant: this.identity
                    })
                }
                addTrackPublication(e) {
                    super.addTrackPublication(e), e.on(ed.UpdateSettings, t => {
                        this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), a3(e)), {
                            settings: t
                        })), this.signalClient.sendUpdateTrackSettings(t)
                    }), e.on(ed.UpdateSubscription, e => {
                        e.participantTracks.forEach(e => {
                            e.participantSid = this.sid
                        }), this.signalClient.sendUpdateSubscription(e)
                    }), e.on(ed.SubscriptionPermissionChanged, t => {
                        this.emit(ec.TrackSubscriptionPermissionChanged, e, t)
                    }), e.on(ed.SubscriptionStatusChanged, t => {
                        this.emit(ec.TrackSubscriptionStatusChanged, e, t)
                    }), e.on(ed.Subscribed, t => {
                        this.emit(ec.TrackSubscribed, t, e)
                    }), e.on(ed.Unsubscribed, t => {
                        this.emit(ec.TrackUnsubscribed, t, e)
                    }), e.on(ed.SubscriptionFailed, t => {
                        this.emit(ec.TrackSubscriptionFailed, e.trackSid, t)
                    })
                }
                getTrackPublication(e) {
                    let t = super.getTrackPublication(e);
                    if (t) return t
                }
                getTrackPublicationByName(e) {
                    let t = super.getTrackPublicationByName(e);
                    if (t) return t
                }
                setVolume(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r1.Source.Microphone;
                    this.volumeMap.set(t, e);
                    let i = this.getTrackPublication(t);
                    i && i.track && i.track.setVolume(e)
                }
                getVolume() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r1.Source.Microphone,
                        t = this.getTrackPublication(e);
                    return t && t.track ? t.track.getVolume() : this.volumeMap.get(e)
                }
                addSubscribedMediaTrack(e, t, i, n, r, a) {
                    let s, o = this.getTrackPublicationBySid(t);
                    if (o || t.startsWith("TR") || this.trackPublications.forEach(t => {
                            o || e.kind !== t.kind.toString() || (o = t)
                        }), !o) {
                        if (0 === a) {
                            this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), {
                                trackSid: t
                            })), this.emit(ec.TrackSubscriptionFailed, t);
                            return
                        }
                        void 0 === a && (a = 20), setTimeout(() => {
                            this.addSubscribedMediaTrack(e, t, i, n, r, a - 1)
                        }, 150);
                        return
                    }
                    if ("ended" === e.readyState) {
                        this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), a3(o))), this.emit(ec.TrackSubscriptionFailed, t);
                        return
                    }
                    return (s = "video" === e.kind ? new s7(e, t, n, r) : new s8(e, t, n, this.audioContext, this.audioOutput)).source = o.source, s.isMuted = o.isMuted, s.setMediaStream(i), s.start(), o.setTrack(s), this.volumeMap.has(o.source) && aH(s) && aV(s) && s.setVolume(this.volumeMap.get(o.source)), o
                }
                get hasMetadata() {
                    return !!this.participantInfo
                }
                getTrackPublicationBySid(e) {
                    return this.trackPublications.get(e)
                }
                updateInfo(e) {
                    if (!super.updateInfo(e)) return !1;
                    let t = new Map,
                        i = new Map;
                    return e.tracks.forEach(e => {
                        var n, r;
                        let a = this.getTrackPublicationBySid(e.sid);
                        if (a) a.updateInfo(e);
                        else {
                            let t = r1.kindFromProto(e.type);
                            if (!t) return;
                            (a = new ou(t, e, null == (n = this.signalClient.connectOptions) ? void 0 : n.autoSubscribe, {
                                loggerContextCb: () => this.logContext,
                                loggerName: null == (r = this.loggerOptions) ? void 0 : r.loggerName
                            })).updateInfo(e), i.set(e.sid, a);
                            let s = Array.from(this.trackPublications.values()).find(e => e.source === (null == a ? void 0 : a.source));
                            s && a.source !== r1.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(a.source), Object.assign(Object.assign({}, this.logContext), {
                                oldTrack: a3(s),
                                newTrack: a3(a)
                            })), this.addTrackPublication(a)
                        }
                        t.set(e.sid, a)
                    }), this.trackPublications.forEach(e => {
                        t.has(e.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), a3(e))), this.unpublishTrack(e.trackSid, !0))
                    }), i.forEach(e => {
                        this.emit(ec.TrackPublished, e)
                    }), !0
                }
                unpublishTrack(e, t) {
                    let i = this.trackPublications.get(e);
                    if (!i) return;
                    let {
                        track: n
                    } = i;
                    switch (n && (n.stop(), i.setTrack(void 0)), this.trackPublications.delete(e), i.kind) {
                        case r1.Kind.Audio:
                            this.audioTrackPublications.delete(e);
                            break;
                        case r1.Kind.Video:
                            this.videoTrackPublications.delete(e)
                    }
                    t && this.emit(ec.TrackUnpublished, i)
                }
                setAudioOutput(e) {
                    return nT(this, void 0, void 0, function*() {
                        this.audioOutput = e;
                        let t = [];
                        this.audioTrackPublications.forEach(i => {
                            var n;
                            aV(i.track) && aH(i.track) && t.push(i.track.setSinkId(null != (n = e.deviceId) ? n : "default"))
                        }), yield Promise.all(t)
                    })
                }
                emit(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), {
                        event: e,
                        args: i
                    })), super.emit(e, ...i)
                }
                constructor(e, t, i, n, r, a, s) {
                    let o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : tZ.STANDARD;
                    super(t, i || "", n, r, a, s, o), this.signalClient = e, this.trackPublications = new Map, this.audioTrackPublications = new Map, this.videoTrackPublications = new Map, this.volumeMap = new Map
                }
            }(q = ew || (ew = {})).Disconnected = "disconnected", q.Connecting = "connecting", q.Connected = "connected", q.Reconnecting = "reconnecting", q.SignalReconnecting = "signalReconnecting";
            class op extends nw.EventEmitter {
                registerTextStreamHandler(e, t) {
                    if (this.textStreamHandlers.has(e)) throw TypeError('A text stream handler for topic "'.concat(e, '" has already been set.'));
                    this.textStreamHandlers.set(e, t)
                }
                unregisterTextStreamHandler(e) {
                    this.textStreamHandlers.delete(e)
                }
                registerByteStreamHandler(e, t) {
                    if (this.byteStreamHandlers.has(e)) throw TypeError('A byte stream handler for topic "'.concat(e, '" has already been set.'));
                    this.byteStreamHandlers.set(e, t)
                }
                unregisterByteStreamHandler(e) {
                    this.byteStreamHandlers.delete(e)
                }
                registerRpcMethod(e, t) {
                    if (this.rpcHandlers.has(e)) throw Error("RPC handler already registered for method ".concat(e, ", unregisterRpcMethod before trying to register again"));
                    this.rpcHandlers.set(e, t)
                }
                unregisterRpcMethod(e) {
                    this.rpcHandlers.delete(e)
                }
                handleIncomingRpcRequest(e, t, i, n, r, a) {
                    return nT(this, void 0, void 0, function*() {
                        if (yield this.engine.publishRpcAck(e, t), 1 !== a) return void(yield this.engine.publishRpcResponse(e, t, null, sE.builtIn("UNSUPPORTED_VERSION")));
                        let s = this.rpcHandlers.get(i);
                        if (!s) return void(yield this.engine.publishRpcResponse(e, t, null, sE.builtIn("UNSUPPORTED_METHOD")));
                        let o = null,
                            c = null;
                        try {
                            let a = yield s({
                                requestId: t,
                                callerIdentity: e,
                                payload: n,
                                responseTimeout: r
                            });
                            sP(a) > 15360 ? (o = sE.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"), console.warn("RPC Response payload too large for ".concat(i))) : c = a
                        } catch (e) {
                            e instanceof sE ? o = e : (console.warn("Uncaught error returned by RPC handler for ".concat(i, ". Returning APPLICATION_ERROR instead."), e), o = sE.builtIn("APPLICATION_ERROR"))
                        }
                        yield this.engine.publishRpcResponse(e, t, c, o)
                    })
                }
                setE2EEEnabled(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.e2eeManager) yield Promise.all([this.localParticipant.setE2EEEnabled(e)]), "" !== this.localParticipant.identity && this.e2eeManager.setParticipantCryptorEnabled(e, this.localParticipant.identity);
                        else throw Error("e2ee not configured, please set e2ee settings within the room options")
                    })
                }
                setupE2EE() {
                    var e;
                    this.options.e2ee && ("e2eeManager" in this.options.e2ee ? this.e2eeManager = this.options.e2ee.e2eeManager : this.e2eeManager = new a9(this.options.e2ee), this.e2eeManager.on(ei.ParticipantEncryptionStatusChanged, (e, t) => {
                        az(t) && (this.isE2EEEnabled = e), this.emit(eo.ParticipantEncryptionStatusChanged, e, t)
                    }), this.e2eeManager.on(ei.EncryptionError, e => this.emit(eo.EncryptionError, e)), null == (e = this.e2eeManager) || e.setup(this))
                }
                get logContext() {
                    var e;
                    return {
                        room: this.name,
                        roomID: null == (e = this.roomInfo) ? void 0 : e.sid,
                        participant: this.localParticipant.identity,
                        pID: this.localParticipant.sid
                    }
                }
                get isRecording() {
                    var e, t;
                    return null != (t = null == (e = this.roomInfo) ? void 0 : e.activeRecording) && t
                }
                getSid() {
                    return nT(this, void 0, void 0, function*() {
                        return this.state === ew.Disconnected ? "" : this.roomInfo && "" !== this.roomInfo.sid ? this.roomInfo.sid : new Promise((e, t) => {
                            let i = t => {
                                "" !== t.sid && (this.engine.off(el.RoomUpdate, i), e(t.sid))
                            };
                            this.engine.on(el.RoomUpdate, i), this.once(eo.Disconnected, () => {
                                this.engine.off(el.RoomUpdate, i), t("Room disconnected before room server id was available")
                            })
                        })
                    })
                }
                get name() {
                    var e, t;
                    return null != (t = null == (e = this.roomInfo) ? void 0 : e.name) ? t : ""
                }
                get metadata() {
                    var e;
                    return null == (e = this.roomInfo) ? void 0 : e.metadata
                }
                get numParticipants() {
                    var e, t;
                    return null != (t = null == (e = this.roomInfo) ? void 0 : e.numParticipants) ? t : 0
                }
                get numPublishers() {
                    var e, t;
                    return null != (t = null == (e = this.roomInfo) ? void 0 : e.numPublishers) ? t : 0
                }
                maybeCreateEngine() {
                    (!this.engine || this.engine.isClosed) && (this.engine = new s$(this.options), this.engine.on(el.ParticipantUpdate, this.handleParticipantUpdates).on(el.RoomUpdate, this.handleRoomUpdate).on(el.SpeakersChanged, this.handleSpeakersChanged).on(el.StreamStateChanged, this.handleStreamStateUpdate).on(el.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(el.SubscriptionError, this.handleSubscriptionError).on(el.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(el.MediaTrackAdded, (e, t, i) => {
                        this.onTrackAdded(e, t, i)
                    }).on(el.Disconnected, e => {
                        this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e)
                    }).on(el.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(el.DataPacketReceived, this.handleDataPacket).on(el.Resuming, () => {
                        this.clearConnectionReconcile(), this.isResuming = !0, this.log.info("Resuming signal connection", this.logContext), this.setAndEmitConnectionState(ew.SignalReconnecting) && this.emit(eo.SignalReconnecting)
                    }).on(el.Resumed, () => {
                        this.registerConnectionReconcile(), this.isResuming = !1, this.log.info("Resumed signal connection", this.logContext), this.updateSubscriptions(), this.emitBufferedEvents(), this.setAndEmitConnectionState(ew.Connected) && this.emit(eo.Reconnected)
                    }).on(el.SignalResumed, () => {
                        this.bufferedEvents = [], (this.state === ew.Reconnecting || this.isResuming) && this.sendSyncState()
                    }).on(el.Restarting, this.handleRestarting).on(el.SignalRestarted, this.handleSignalRestarted).on(el.Offline, () => {
                        this.setAndEmitConnectionState(ew.Reconnecting) && this.emit(eo.Reconnecting)
                    }).on(el.DCBufferStatusChanged, (e, t) => {
                        this.emit(eo.DCBufferStatusChanged, e, t)
                    }).on(el.LocalTrackSubscribed, e => {
                        let t = this.localParticipant.getTrackPublications().find(t => {
                            let {
                                trackSid: i
                            } = t;
                            return i === e
                        });
                        t ? (this.localParticipant.emit(ec.LocalTrackSubscribed, t), this.emitWhenConnected(eo.LocalTrackSubscribed, t, this.localParticipant)) : this.log.warn("could not find local track subscription for subscribed event", this.logContext)
                    }).on(el.RoomMoved, e => {
                        this.log.debug("room moved", e), e.room && this.handleRoomUpdate(e.room), this.remoteParticipants.forEach((e, t) => {
                            this.handleParticipantDisconnected(t, e)
                        }), this.emit(eo.Moved, e.room.name), e.participant ? this.handleParticipantUpdates([e.participant, ...e.otherParticipants]) : this.handleParticipantUpdates(e.otherParticipants)
                    }), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine))
                }
                static getLocalDevices(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return a8.getInstance().getDevices(e, t)
                }
                prepareConnection(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.state === ew.Disconnected) {
                            this.log.debug("prepareConnection to ".concat(e), this.logContext);
                            try {
                                if (ay(new URL(e)) && t) {
                                    this.regionUrlProvider = new s0(e, t);
                                    let i = yield this.regionUrlProvider.getNextBestRegionUrl();
                                    i && this.state === ew.Disconnected && (this.regionUrl = i, yield fetch(aL(i), {
                                        method: "HEAD"
                                    }), this.log.debug("prepared connection to ".concat(i), this.logContext))
                                } else yield fetch(aL(e), {
                                    method: "HEAD"
                                })
                            } catch (e) {
                                this.log.warn("could not prepare connection", Object.assign(Object.assign({}, this.logContext), {
                                    error: e
                                }))
                            }
                        }
                    })
                }
                getParticipantByIdentity(e) {
                    return this.localParticipant.identity === e ? this.localParticipant : this.remoteParticipants.get(e)
                }
                clearConnectionFutures() {
                    this.connectFuture = void 0
                }
                simulateScenario(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        let i, n = () => {};
                        switch (e) {
                            case "signal-reconnect":
                                yield this.engine.client.handleOnClose("simulate disconnect");
                                break;
                            case "speaker":
                                i = new nt({
                                    scenario: {
                                        case: "speakerUpdate",
                                        value: 3
                                    }
                                });
                                break;
                            case "node-failure":
                                i = new nt({
                                    scenario: {
                                        case: "nodeFailure",
                                        value: !0
                                    }
                                });
                                break;
                            case "server-leave":
                                i = new nt({
                                    scenario: {
                                        case: "serverLeave",
                                        value: !0
                                    }
                                });
                                break;
                            case "migration":
                                i = new nt({
                                    scenario: {
                                        case: "migration",
                                        value: !0
                                    }
                                });
                                break;
                            case "resume-reconnect":
                                this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
                                break;
                            case "disconnect-signal-on-resume":
                                n = () => nT(this, void 0, void 0, function*() {
                                    yield this.engine.client.handleOnClose("simulate resume-disconnect")
                                }), i = new nt({
                                    scenario: {
                                        case: "disconnectSignalOnResume",
                                        value: !0
                                    }
                                });
                                break;
                            case "disconnect-signal-on-resume-no-messages":
                                n = () => nT(this, void 0, void 0, function*() {
                                    yield this.engine.client.handleOnClose("simulate resume-disconnect")
                                }), i = new nt({
                                    scenario: {
                                        case: "disconnectSignalOnResumeNoMessages",
                                        value: !0
                                    }
                                });
                                break;
                            case "full-reconnect":
                                this.engine.fullReconnectOnNext = !0, yield this.engine.client.handleOnClose("simulate full-reconnect");
                                break;
                            case "force-tcp":
                            case "force-tls":
                                i = new nt({
                                    scenario: {
                                        case: "switchCandidateProtocol",
                                        value: "force-tls" === e ? 2 : 1
                                    }
                                }), n = () => nT(this, void 0, void 0, function*() {
                                    let e = this.engine.client.onLeave;
                                    e && e(new iK({
                                        reason: tK.CLIENT_INITIATED,
                                        action: iH.RECONNECT
                                    }))
                                });
                                break;
                            case "subscriber-bandwidth":
                                if (void 0 === t || "number" != typeof t) throw Error("subscriber-bandwidth requires a number as argument");
                                i = new nt({
                                    scenario: {
                                        case: "subscriberBandwidth",
                                        value: aF(t)
                                    }
                                });
                                break;
                            case "leave-full-reconnect":
                                i = new nt({
                                    scenario: {
                                        case: "leaveRequestFullReconnect",
                                        value: !0
                                    }
                                })
                        }
                        i && (yield this.engine.client.sendSimulateScenario(i), yield n())
                    })
                }
                get canPlaybackAudio() {
                    return this.audioEnabled
                }
                get canPlaybackVideo() {
                    return !this.isVideoPlaybackBlocked
                }
                getActiveDevice(e) {
                    return this.localParticipant.activeDeviceMap.get(e)
                }
                switchActiveDevice(e, t) {
                    return nT(this, arguments, void 0, function(e, t) {
                        var i = this;
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        return function*() {
                            var r, a, s, o, c, l;
                            let d = !0,
                                u = !1,
                                h = n ? {
                                    exact: t
                                } : t;
                            if ("audioinput" === e) {
                                u = 0 === i.localParticipant.audioTrackPublications.size;
                                let t = null != (r = i.getActiveDevice(e)) ? r : i.options.audioCaptureDefaults.deviceId;
                                i.options.audioCaptureDefaults.deviceId = h;
                                let n = Array.from(i.localParticipant.audioTrackPublications.values()).filter(e => e.source === r1.Source.Microphone);
                                try {
                                    d = (yield Promise.all(n.map(e => {
                                        var t;
                                        return null == (t = e.audioTrack) ? void 0 : t.setDeviceId(h)
                                    }))).every(e => !0 === e)
                                } catch (e) {
                                    throw i.options.audioCaptureDefaults.deviceId = t, e
                                }
                                let a = n.some(e => {
                                    var t, i;
                                    return null != (i = null == (t = e.track) ? void 0 : t.isMuted) && i
                                });
                                d && a && (u = !0)
                            } else if ("videoinput" === e) {
                                u = 0 === i.localParticipant.videoTrackPublications.size;
                                let t = null != (a = i.getActiveDevice(e)) ? a : i.options.videoCaptureDefaults.deviceId;
                                i.options.videoCaptureDefaults.deviceId = h;
                                let n = Array.from(i.localParticipant.videoTrackPublications.values()).filter(e => e.source === r1.Source.Camera);
                                try {
                                    d = (yield Promise.all(n.map(e => {
                                        var t;
                                        return null == (t = e.videoTrack) ? void 0 : t.setDeviceId(h)
                                    }))).every(e => !0 === e)
                                } catch (e) {
                                    throw i.options.videoCaptureDefaults.deviceId = t, e
                                }
                                let r = n.some(e => {
                                    var t, i;
                                    return null != (i = null == (t = e.track) ? void 0 : t.isMuted) && i
                                });
                                d && r && (u = !0)
                            } else if ("audiooutput" === e) {
                                if (u = !0, !ad() && !i.options.webAudioMix || i.options.webAudioMix && i.audioContext && !("setSinkId" in i.audioContext)) throw Error("cannot switch audio output, setSinkId not supported");
                                i.options.webAudioMix && (t = null != (s = yield a8.getInstance().normalizeDeviceId("audiooutput", t)) ? s : ""), null != (l = i.options).audioOutput || (l.audioOutput = {});
                                let n = null != (o = i.getActiveDevice(e)) ? o : i.options.audioOutput.deviceId;
                                i.options.audioOutput.deviceId = t;
                                try {
                                    i.options.webAudioMix && (null == (c = i.audioContext) || c.setSinkId(t)), yield Promise.all(Array.from(i.remoteParticipants.values()).map(e => e.setAudioOutput({
                                        deviceId: t
                                    })))
                                } catch (e) {
                                    throw i.options.audioOutput.deviceId = n, e
                                }
                            }
                            return u && (i.localParticipant.activeDeviceMap.set(e, t), i.emit(eo.ActiveDeviceChanged, e, t)), d
                        }()
                    })
                }
                setupLocalParticipantEvents() {
                    this.localParticipant.on(ec.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(ec.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(ec.AttributesChanged, this.onLocalAttributesChanged).on(ec.TrackMuted, this.onLocalTrackMuted).on(ec.TrackUnmuted, this.onLocalTrackUnmuted).on(ec.LocalTrackPublished, this.onLocalTrackPublished).on(ec.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(ec.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(ec.MediaDevicesError, this.onMediaDevicesError).on(ec.AudioStreamAcquired, this.startAudio).on(ec.ChatMessage, this.onLocalChatMessageSent).on(ec.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged)
                }
                recreateEngine() {
                    var e;
                    null == (e = this.engine) || e.close(), this.engine = void 0, this.isResuming = !1, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine()
                }
                onTrackAdded(e, t, i) {
                    var n;
                    let r, a;
                    if (this.state === ew.Connecting || this.state === ew.Reconnecting) {
                        let n = () => {
                                this.onTrackAdded(e, t, i), r()
                            },
                            r = () => {
                                this.off(eo.Reconnected, n), this.off(eo.Connected, n), this.off(eo.Disconnected, r)
                            };
                        this.once(eo.Reconnected, n), this.once(eo.Connected, n), this.once(eo.Disconnected, r);
                        return
                    }
                    if (this.state === ew.Disconnected) return void this.log.warn("skipping incoming track after Room disconnected", this.logContext);
                    if ("ended" === e.readyState) return void this.log.info("skipping incoming track as it already ended", this.logContext);
                    let s = (a = (n = t.id).split("|")).length > 1 ? [a[0], n.substr(a[0].length + 1)] : [n, ""],
                        o = s[0],
                        c = s[1],
                        l = e.id;
                    if (c && c.startsWith("TR") && (l = c), o === this.localParticipant.sid) return void this.log.warn("tried to create RemoteParticipant for local participant", this.logContext);
                    let d = Array.from(this.remoteParticipants.values()).find(e => e.sid === o);
                    d ? (this.options.adaptiveStream && (r = "object" == typeof this.options.adaptiveStream ? this.options.adaptiveStream : {}), d.addSubscribedMediaTrack(e, l, t, i, r)) : this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(o), this.logContext)
                }
                handleDisconnect() {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        i = arguments.length > 1 ? arguments[1] : void 0;
                    if (this.clearConnectionReconcile(), this.isResuming = !1, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.state !== ew.Disconnected) {
                        this.regionUrl = void 0;
                        try {
                            this.remoteParticipants.forEach(e => {
                                e.trackPublications.forEach(t => {
                                    e.unpublishTrack(t.trackSid)
                                })
                            }), this.localParticipant.trackPublications.forEach(e => {
                                var i, n, r;
                                e.track && this.localParticipant.unpublishTrack(e.track, t), t ? (null == (i = e.track) || i.detach(), null == (n = e.track) || n.stop()) : null == (r = e.track) || r.stopMonitor()
                            }), this.localParticipant.off(ec.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(ec.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(ec.AttributesChanged, this.onLocalAttributesChanged).off(ec.TrackMuted, this.onLocalTrackMuted).off(ec.TrackUnmuted, this.onLocalTrackUnmuted).off(ec.LocalTrackPublished, this.onLocalTrackPublished).off(ec.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(ec.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(ec.MediaDevicesError, this.onMediaDevicesError).off(ec.AudioStreamAcquired, this.startAudio).off(ec.ChatMessage, this.onLocalChatMessageSent).off(ec.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && "boolean" == typeof this.options.webAudioMix && (this.audioContext.close(), this.audioContext = void 0), av() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), null == (e = navigator.mediaDevices) || e.removeEventListener("devicechange", this.handleDeviceChange))
                        } finally {
                            this.setAndEmitConnectionState(ew.Disconnected), this.emit(eo.Disconnected, i)
                        }
                    }
                }
                handleParticipantDisconnected(e, t) {
                    var i;
                    this.remoteParticipants.delete(e), t && (t.trackPublications.forEach(e => {
                        t.unpublishTrack(e.trackSid, !0)
                    }), this.emit(eo.ParticipantDisconnected, t), t.setDisconnected(), null == (i = this.localParticipant) || i.handleParticipantDisconnected(t.identity))
                }
                handleStreamHeader(e, t) {
                    return nT(this, void 0, void 0, function*() {
                        var i;
                        if ("byteHeader" === e.contentHeader.case) {
                            let n, r = this.byteStreamHandlers.get(e.topic);
                            if (!r) return void this.log.debug("ignoring incoming byte stream due to no handler for topic", e.topic);
                            let a = {
                                    id: e.streamId,
                                    name: null != (i = e.contentHeader.value.name) ? i : "unknown",
                                    mimeType: e.mimeType,
                                    size: e.totalLength ? Number(e.totalLength) : void 0,
                                    topic: e.topic,
                                    timestamp: aj(e.timestamp),
                                    attributes: e.attributes
                                },
                                s = new ReadableStream({
                                    start: t => {
                                        n = t, this.byteStreamControllers.set(e.streamId, {
                                            info: a,
                                            controller: n,
                                            startTime: Date.now()
                                        })
                                    }
                                });
                            r(new s2(a, s, aj(e.totalLength)), {
                                identity: t
                            })
                        } else if ("textHeader" === e.contentHeader.case) {
                            let i, n = this.textStreamHandlers.get(e.topic);
                            if (!n) return void this.log.debug("ignoring incoming text stream due to no handler for topic", e.topic);
                            let r = {
                                    id: e.streamId,
                                    mimeType: e.mimeType,
                                    size: e.totalLength ? Number(e.totalLength) : void 0,
                                    topic: e.topic,
                                    timestamp: Number(e.timestamp),
                                    attributes: e.attributes
                                },
                                a = new ReadableStream({
                                    start: t => {
                                        i = t, this.textStreamControllers.set(e.streamId, {
                                            info: r,
                                            controller: i,
                                            startTime: Date.now()
                                        })
                                    }
                                });
                            n(new s3(r, a, aj(e.totalLength)), {
                                identity: t
                            })
                        }
                    })
                }
                handleStreamChunk(e) {
                    let t = this.byteStreamControllers.get(e.streamId);
                    t && e.content.length > 0 && t.controller.enqueue(e);
                    let i = this.textStreamControllers.get(e.streamId);
                    i && e.content.length > 0 && i.controller.enqueue(e)
                }
                handleStreamTrailer(e) {
                    let t = this.textStreamControllers.get(e.streamId);
                    t && (t.info.attributes = Object.assign(Object.assign({}, t.info.attributes), e.attributes), t.controller.close(), this.textStreamControllers.delete(e.streamId));
                    let i = this.byteStreamControllers.get(e.streamId);
                    i && (i.info.attributes = Object.assign(Object.assign({}, i.info.attributes), e.attributes), i.controller.close(), this.byteStreamControllers.delete(e.streamId))
                }
                selectDefaultDevices() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t, i;
                        let n = a8.getInstance().previousDevices,
                            r = yield a8.getInstance().getDevices(void 0, !1), a = rz();
                        if ((null == a ? void 0 : a.name) === "Chrome" && "iOS" !== a.os)
                            for (let e of r) {
                                let t = n.find(t => t.deviceId === e.deviceId);
                                t && "" !== t.label && t.kind === e.kind && t.label !== e.label && "default" === this.getActiveDevice(e.kind) && this.emit(eo.ActiveDeviceChanged, e.kind, e.deviceId)
                            }
                        for (let a of ["audiooutput", "audioinput", "videoinput"]) {
                            let s = "audioinput" === a ? r1.Source.Microphone : "videoinput" === a ? r1.Source.Camera : r1.Source.Unknown,
                                o = this.localParticipant.getTrackPublication(s);
                            if (o && (null == (e = o.track) ? void 0 : e.isUserProvided)) continue;
                            let c = r.filter(e => e.kind === a),
                                l = this.getActiveDevice(a);
                            if (l === (null == (t = n.filter(e => e.kind === a)[0]) ? void 0 : t.deviceId) && c.length > 0 && (null == (i = c[0]) ? void 0 : i.deviceId) !== l) {
                                yield this.switchActiveDevice(a, c[0].deviceId);
                                continue
                            }("audioinput" !== a || am()) && "videoinput" !== a && (!(c.length > 0) || c.find(e => e.deviceId === this.getActiveDevice(a)) || "audiooutput" === a && am() || (yield this.switchActiveDevice(a, c[0].deviceId)))
                        }
                    })
                }
                acquireAudioContext() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t;
                        if ("boolean" != typeof this.options.webAudioMix && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : this.audioContext && "closed" !== this.audioContext.state || (this.audioContext = null != (e = aZ()) ? e : void 0), this.options.webAudioMix && this.remoteParticipants.forEach(e => e.setAudioContext(this.audioContext)), this.localParticipant.setAudioContext(this.audioContext), this.audioContext && "suspended" === this.audioContext.state) try {
                            yield Promise.race([this.audioContext.resume(), ai(200)])
                        } catch (e) {
                            this.log.warn("Could not resume audio context", Object.assign(Object.assign({}, this.logContext), {
                                error: e
                            }))
                        }
                        let i = (null == (t = this.audioContext) ? void 0 : t.state) === "running";
                        i !== this.canPlaybackAudio && (this.audioEnabled = i, this.emit(eo.AudioPlaybackStatusChanged, i))
                    })
                }
                createParticipant(e, t) {
                    var i;
                    let n;
                    return n = t ? oh.fromParticipantInfo(this.engine.client, t, {
                        loggerContextCb: () => this.logContext,
                        loggerName: this.options.loggerName
                    }) : new oh(this.engine.client, "", e, void 0, void 0, void 0, {
                        loggerContextCb: () => this.logContext,
                        loggerName: this.options.loggerName
                    }), this.options.webAudioMix && n.setAudioContext(this.audioContext), (null == (i = this.options.audioOutput) ? void 0 : i.deviceId) && n.setAudioOutput(this.options.audioOutput).catch(e => this.log.warn("Could not set audio output: ".concat(e.message), this.logContext)), n
                }
                getOrCreateParticipant(e, t) {
                    if (this.remoteParticipants.has(e)) {
                        let i = this.remoteParticipants.get(e);
                        return t && i.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), i
                    }
                    let i = this.createParticipant(e, t);
                    return this.remoteParticipants.set(e, i), this.sidToIdentity.set(t.sid, t.identity), this.emitWhenConnected(eo.ParticipantConnected, i), i.on(ec.TrackPublished, e => {
                        this.emitWhenConnected(eo.TrackPublished, e, i)
                    }).on(ec.TrackSubscribed, (e, t) => {
                        e.kind === r1.Kind.Audio ? (e.on(ed.AudioPlaybackStarted, this.handleAudioPlaybackStarted), e.on(ed.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : e.kind === r1.Kind.Video && (e.on(ed.VideoPlaybackFailed, this.handleVideoPlaybackFailed), e.on(ed.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emit(eo.TrackSubscribed, e, t, i)
                    }).on(ec.TrackUnpublished, e => {
                        this.emit(eo.TrackUnpublished, e, i)
                    }).on(ec.TrackUnsubscribed, (e, t) => {
                        this.emit(eo.TrackUnsubscribed, e, t, i)
                    }).on(ec.TrackMuted, e => {
                        this.emitWhenConnected(eo.TrackMuted, e, i)
                    }).on(ec.TrackUnmuted, e => {
                        this.emitWhenConnected(eo.TrackUnmuted, e, i)
                    }).on(ec.ParticipantMetadataChanged, e => {
                        this.emitWhenConnected(eo.ParticipantMetadataChanged, e, i)
                    }).on(ec.ParticipantNameChanged, e => {
                        this.emitWhenConnected(eo.ParticipantNameChanged, e, i)
                    }).on(ec.AttributesChanged, e => {
                        this.emitWhenConnected(eo.ParticipantAttributesChanged, e, i)
                    }).on(ec.ConnectionQualityChanged, e => {
                        this.emitWhenConnected(eo.ConnectionQualityChanged, e, i)
                    }).on(ec.ParticipantPermissionsChanged, e => {
                        this.emitWhenConnected(eo.ParticipantPermissionsChanged, e, i)
                    }).on(ec.TrackSubscriptionStatusChanged, (e, t) => {
                        this.emitWhenConnected(eo.TrackSubscriptionStatusChanged, e, t, i)
                    }).on(ec.TrackSubscriptionFailed, (e, t) => {
                        this.emit(eo.TrackSubscriptionFailed, e, i, t)
                    }).on(ec.TrackSubscriptionPermissionChanged, (e, t) => {
                        this.emitWhenConnected(eo.TrackSubscriptionPermissionChanged, e, t, i)
                    }).on(ec.Active, () => {
                        this.emitWhenConnected(eo.ParticipantActive, i), i.kind === tZ.AGENT && this.localParticipant.setActiveAgent(i)
                    }), t && i.updateInfo(t), i
                }
                sendSyncState() {
                    let e = Array.from(this.remoteParticipants.values()).reduce((e, t) => (e.push(...t.getTrackPublications()), e), []),
                        t = this.localParticipant.getTrackPublications();
                    this.engine.sendSyncState(e, t)
                }
                updateSubscriptions() {
                    for (let t of this.remoteParticipants.values())
                        for (let i of t.videoTrackPublications.values()) {
                            var e;
                            i.isSubscribed && (e = i) && !e.isLocal && i.emitTrackUpdate()
                        }
                }
                getRemoteParticipantBySid(e) {
                    let t = this.sidToIdentity.get(e);
                    if (t) return this.remoteParticipants.get(t)
                }
                registerConnectionReconcile() {
                    this.clearConnectionReconcile();
                    let e = 0;
                    this.connectionReconcileInterval = rZ.setInterval(() => {
                        this.engine && !this.engine.isClosed && this.engine.verifyTransport() ? e = 0 : (e++, this.log.warn("detected connection state mismatch", Object.assign(Object.assign({}, this.logContext), {
                            numFailures: e,
                            engine: this.engine ? {
                                closed: this.engine.isClosed,
                                transportsConnected: this.engine.verifyTransport()
                            } : void 0
                        })), e >= 3 && (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, tK.STATE_MISMATCH)))
                    }, 4e3)
                }
                clearConnectionReconcile() {
                    this.connectionReconcileInterval && rZ.clearInterval(this.connectionReconcileInterval)
                }
                setAndEmitConnectionState(e) {
                    return e !== this.state && (this.state = e, this.emit(eo.ConnectionStateChanged, this.state), !0)
                }
                emitBufferedEvents() {
                    this.bufferedEvents.forEach(e => {
                        let [t, i] = e;
                        this.emit(t, ...i)
                    }), this.bufferedEvents = []
                }
                emitWhenConnected(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    if (this.state === ew.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([e, i]);
                    else if (this.state === ew.Connected) return this.emit(e, ...i);
                    return !1
                }
                simulateParticipants(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i;
                        let n = Object.assign({
                                audio: !0,
                                video: !0,
                                useRealTracks: !1
                            }, e.publish),
                            r = Object.assign({
                                count: 9,
                                audio: !1,
                                video: !0,
                                aspectRatios: [1.66, 1.7, 1.3]
                            }, e.participants);
                        if (this.handleDisconnect(), this.roomInfo = new tJ({
                                sid: "RM_SIMULATED",
                                name: "simulated-room",
                                emptyTimeout: 0,
                                maxParticipants: 0,
                                creationTime: ez.parse(new Date().getTime()),
                                metadata: "",
                                numParticipants: 1,
                                numPublishers: 1,
                                turnPassword: "",
                                enabledCodecs: [],
                                activeRecording: !1
                            }), this.localParticipant.updateInfo(new tX({
                                identity: "simulated-local",
                                name: "local-name"
                            })), this.setupLocalParticipantEvents(), this.emit(eo.SignalConnected), this.emit(eo.Connected), this.setAndEmitConnectionState(ew.Connected), n.video) {
                            let e = new or(r1.Kind.Video, new t3({
                                source: tB.CAMERA,
                                sid: Math.floor(1e4 * Math.random()).toString(),
                                type: tF.AUDIO,
                                name: "video-dummy"
                            }), new sH(n.useRealTracks ? (yield window.navigator.mediaDevices.getUserMedia({
                                video: !0
                            })).getVideoTracks()[0] : aD(160 * (null != (t = r.aspectRatios[0]) ? t : 1), 160, !0, !0), void 0, !1, {
                                loggerName: this.options.loggerName,
                                loggerContextCb: () => this.logContext
                            }), {
                                loggerName: this.options.loggerName,
                                loggerContextCb: () => this.logContext
                            });
                            this.localParticipant.addTrackPublication(e), this.localParticipant.emit(ec.LocalTrackPublished, e)
                        }
                        if (n.audio) {
                            let e = new or(r1.Kind.Audio, new t3({
                                source: tB.MICROPHONE,
                                sid: Math.floor(1e4 * Math.random()).toString(),
                                type: tF.AUDIO
                            }), new s_(n.useRealTracks ? (yield navigator.mediaDevices.getUserMedia({
                                audio: !0
                            })).getAudioTracks()[0] : aM(), void 0, !1, this.audioContext, {
                                loggerName: this.options.loggerName,
                                loggerContextCb: () => this.logContext
                            }), {
                                loggerName: this.options.loggerName,
                                loggerContextCb: () => this.logContext
                            });
                            this.localParticipant.addTrackPublication(e), this.localParticipant.emit(ec.LocalTrackPublished, e)
                        }
                        for (let e = 0; e < r.count - 1; e += 1) {
                            let t = new tX({
                                    sid: Math.floor(1e4 * Math.random()).toString(),
                                    identity: "simulated-".concat(e),
                                    state: t$.ACTIVE,
                                    tracks: [],
                                    joinedAt: ez.parse(Date.now())
                                }),
                                n = this.getOrCreateParticipant(t.identity, t);
                            if (r.video) {
                                let a = aD(160 * (null != (i = r.aspectRatios[e % r.aspectRatios.length]) ? i : 1), 160, !1, !0),
                                    s = new t3({
                                        source: tB.CAMERA,
                                        sid: Math.floor(1e4 * Math.random()).toString(),
                                        type: tF.AUDIO
                                    });
                                n.addSubscribedMediaTrack(a, s.sid, new MediaStream([a]), new RTCRtpReceiver), t.tracks = [...t.tracks, s]
                            }
                            if (r.audio) {
                                let e = aM(),
                                    i = new t3({
                                        source: tB.MICROPHONE,
                                        sid: Math.floor(1e4 * Math.random()).toString(),
                                        type: tF.AUDIO
                                    });
                                n.addSubscribedMediaTrack(e, i.sid, new MediaStream([e]), new RTCRtpReceiver), t.tracks = [...t.tracks, i]
                            }
                            n.updateInfo(t)
                        }
                    })
                }
                emit(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    if (e !== eo.ActiveSpeakersChanged && e !== eo.TranscriptionReceived) {
                        let t = (function e(t) {
                            return t.map(t => {
                                if (t) return Array.isArray(t) ? e(t) : "object" == typeof t ? "logContext" in t ? t.logContext : void 0 : t
                            })
                        })(i).filter(e => void 0 !== e);
                        this.log.debug("room event ".concat(e), Object.assign(Object.assign({}, this.logContext), {
                            event: e,
                            args: t
                        }))
                    }
                    return super.emit(e, ...i)
                }
                constructor(e) {
                    var t, i, n, r;
                    if (super(), t = this, this.state = ew.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = !1, this.audioEnabled = !0, this.isVideoPlaybackBlocked = !1, this.log = np, this.bufferedEvents = [], this.isResuming = !1, this.byteStreamControllers = new Map, this.textStreamControllers = new Map, this.byteStreamHandlers = new Map, this.textStreamHandlers = new Map, this.rpcHandlers = new Map, this.connect = (e, t, i) => nT(this, void 0, void 0, function*() {
                            var n;
                            if (!au())
                                if (ab()) throw Error("WebRTC isn't detected, have you called registerGlobals?");
                                else throw Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
                            let r = yield this.disconnectLock.lock();
                            if (this.state === ew.Connected) return this.log.info("already connected to room ".concat(this.name), this.logContext), r(), Promise.resolve();
                            if (this.connectFuture) return r(), this.connectFuture.promise;
                            this.setAndEmitConnectionState(ew.Connecting), (null == (n = this.regionUrlProvider) ? void 0 : n.getServerUrl().toString()) !== e && (this.regionUrl = void 0, this.regionUrlProvider = void 0), ay(new URL(e)) && (void 0 === this.regionUrlProvider ? this.regionUrlProvider = new s0(e, t) : this.regionUrlProvider.updateToken(t), this.regionUrlProvider.fetchRegionSettings().then(e => {
                                var t;
                                null == (t = this.regionUrlProvider) || t.setServerReportedRegions(e)
                            }).catch(e => {
                                this.log.warn("could not fetch region settings", Object.assign(Object.assign({}, this.logContext), {
                                    error: e
                                }))
                            }));
                            let a = (n, s, o) => nT(this, void 0, void 0, function*() {
                                    var c, l;
                                    this.abortController && this.abortController.abort();
                                    let d = new AbortController;
                                    this.abortController = d, null == r || r();
                                    try {
                                        yield this.attemptConnection(null != o ? o : e, t, i, d), this.abortController = void 0, n()
                                    } catch (e) {
                                        if (this.regionUrlProvider && e instanceof rL && e.reason !== er.Cancelled && e.reason !== er.NotAllowed) {
                                            let t = null;
                                            try {
                                                t = yield this.regionUrlProvider.getNextBestRegionUrl(null == (c = this.abortController) ? void 0 : c.signal)
                                            } catch (e) {
                                                if (e instanceof rL && (401 === e.status || e.reason === er.Cancelled)) {
                                                    this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), s(e);
                                                    return
                                                }
                                            }!t || (null == (l = this.abortController) ? void 0 : l.signal.aborted) ? (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, aU(e)), s(e)) : (this.log.info("Initial connection failed with ConnectionError: ".concat(e.message, ". Retrying with another region: ").concat(t), this.logContext), this.recreateEngine(), yield a(n, s, t))
                                        } else {
                                            let t = tK.UNKNOWN_REASON;
                                            e instanceof rL && (t = aU(e)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, t), s(e)
                                        }
                                    }
                                }),
                                s = this.regionUrl;
                            return this.regionUrl = void 0, this.connectFuture = new a_((e, t) => {
                                a(e, t, s)
                            }, () => {
                                this.clearConnectionFutures()
                            }), this.connectFuture.promise
                        }), this.connectSignal = (e, t, i, n, r, a) => nT(this, void 0, void 0, function*() {
                            var s, o, c;
                            let l = yield i.join(e, t, {
                                autoSubscribe: n.autoSubscribe,
                                adaptiveStream: "object" == typeof r.adaptiveStream || r.adaptiveStream,
                                maxRetries: n.maxRetries,
                                e2eeEnabled: !!this.e2eeManager,
                                websocketTimeout: n.websocketTimeout
                            }, a.signal), d = l.serverInfo;
                            if (d || (d = {
                                    version: l.serverVersion,
                                    region: l.serverRegion
                                }), this.serverInfo = d, this.log.debug("connected to Livekit Server ".concat(Object.entries(d).map(e => {
                                    let [t, i] = e;
                                    return "".concat(t, ": ").concat(i)
                                }).join(", ")), {
                                    room: null == (s = l.room) ? void 0 : s.name,
                                    roomSid: null == (o = l.room) ? void 0 : o.sid,
                                    identity: null == (c = l.participant) ? void 0 : c.identity
                                }), !d.version) throw new rF("unknown server version");
                            return "0.15.1" === d.version && this.options.dynacast && (this.log.debug("disabling dynacast due to server version", this.logContext), r.dynacast = !1), l
                        }), this.applyJoinResponse = e => {
                            let t = e.participant;
                            if (this.localParticipant.sid = t.sid, this.localParticipant.identity = t.identity, this.localParticipant.setEnabledPublishCodecs(e.enabledPublishCodecs), this.options.e2ee && this.e2eeManager) try {
                                this.e2eeManager.setSifTrailer(e.sifTrailer)
                            } catch (e) {
                                this.log.error(e instanceof Error ? e.message : "Could not set SifTrailer", Object.assign(Object.assign({}, this.logContext), {
                                    error: e
                                }))
                            }
                            this.handleParticipantUpdates([t, ...e.otherParticipants]), e.room && this.handleRoomUpdate(e.room)
                        }, this.attemptConnection = (e, t, i, n) => nT(this, void 0, void 0, function*() {
                            var r, a;
                            this.state === ew.Reconnecting || this.isResuming || (null == (r = this.engine) ? void 0 : r.pendingReconnect) ? (this.log.info("Reconnection attempt replaced by new connection attempt", this.logContext), this.recreateEngine()) : this.maybeCreateEngine(), (null == (a = this.regionUrlProvider) ? void 0 : a.isCloud()) && this.engine.setRegionUrlProvider(this.regionUrlProvider), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, sC), i), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
                            try {
                                let i = yield this.connectSignal(e, t, this.engine, this.connOptions, this.options, n);
                                this.applyJoinResponse(i), this.setupLocalParticipantEvents(), this.emit(eo.SignalConnected)
                            } catch (t) {
                                yield this.engine.close(), this.recreateEngine();
                                let e = new rL("could not establish signal connection", er.ServerUnreachable);
                                throw t instanceof Error && (e.message = "".concat(e.message, ": ").concat(t.message)), t instanceof rL && (e.reason = t.reason, e.status = t.status), this.log.debug("error trying to establish signal connection", Object.assign(Object.assign({}, this.logContext), {
                                    error: t
                                })), e
                            }
                            if (n.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), new rL("Connection attempt aborted", er.Cancelled);
                            try {
                                yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, n)
                            } catch (e) {
                                throw yield this.engine.close(), this.recreateEngine(), e
                            }
                            av() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), av() && document.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(ew.Connected), this.emit(eo.Connected), this.registerConnectionReconcile()
                        }), this.disconnect = function() {
                            for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                            return nT(t, [...i], void 0, function() {
                                var e = this;
                                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                                return function*() {
                                    var i, n, r, a;
                                    let s = yield e.disconnectLock.lock();
                                    try {
                                        if (e.state === ew.Disconnected) return void e.log.debug("already disconnected", e.logContext);
                                        e.log.info("disconnect from room", Object.assign({}, e.logContext)), (e.state === ew.Connecting || e.state === ew.Reconnecting || e.isResuming) && (e.log.warn("abort connection attempt", e.logContext), null == (i = e.abortController) || i.abort(), null == (r = null == (n = e.connectFuture) ? void 0 : n.reject) || r.call(n, new rL("Client initiated disconnect", er.Cancelled)), e.connectFuture = void 0), (null == (a = e.engine) ? void 0 : a.client.isDisconnected) || (yield e.engine.client.sendLeave()), e.engine && (yield e.engine.close()), e.handleDisconnect(t, tK.CLIENT_INITIATED), e.engine = void 0
                                    } finally {
                                        s()
                                    }
                                }()
                            })
                        }, this.onPageLeave = () => nT(this, void 0, void 0, function*() {
                            this.log.info("Page leave detected, disconnecting", this.logContext), yield this.disconnect()
                        }), this.startAudio = () => nT(this, void 0, void 0, function*() {
                            let e = [],
                                t = rz();
                            if (t && "iOS" === t.os) {
                                let t = "livekit-dummy-audio-el",
                                    i = document.getElementById(t);
                                if (!i) {
                                    (i = document.createElement("audio")).id = t, i.autoplay = !0, i.hidden = !0;
                                    let e = aM();
                                    e.enabled = !0;
                                    let n = new MediaStream([e]);
                                    i.srcObject = n, document.addEventListener("visibilitychange", () => {
                                        i && (i.srcObject = document.hidden ? null : n, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status", this.logContext), this.startAudio()))
                                    }), document.body.append(i), this.once(eo.Disconnected, () => {
                                        null == i || i.remove(), i = null
                                    })
                                }
                                e.push(i)
                            }
                            this.remoteParticipants.forEach(t => {
                                t.audioTrackPublications.forEach(t => {
                                    t.track && t.track.attachedElements.forEach(t => {
                                        e.push(t)
                                    })
                                })
                            });
                            try {
                                yield Promise.all([this.acquireAudioContext(), ...e.map(e => (e.muted = !1, e.play()))]), this.handleAudioPlaybackStarted()
                            } catch (e) {
                                throw this.handleAudioPlaybackFailed(e), e
                            }
                        }), this.startVideo = () => nT(this, void 0, void 0, function*() {
                            let e = [];
                            for (let t of this.remoteParticipants.values()) t.videoTrackPublications.forEach(t => {
                                var i;
                                null == (i = t.track) || i.attachedElements.forEach(t => {
                                    e.includes(t) || e.push(t)
                                })
                            });
                            yield Promise.all(e.map(e => e.play())).then(() => {
                                this.handleVideoPlaybackStarted()
                            }).catch(e => {
                                "NotAllowedError" === e.name ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler", this.logContext)
                            })
                        }), this.handleRestarting = () => {
                            for (let e of (this.clearConnectionReconcile(), this.isResuming = !1, this.remoteParticipants.values())) this.handleParticipantDisconnected(e.identity, e);
                            this.setAndEmitConnectionState(ew.Reconnecting) && this.emit(eo.Reconnecting)
                        }, this.handleSignalRestarted = e => nT(this, void 0, void 0, function*() {
                            this.log.debug("signal reconnected to server, region ".concat(e.serverRegion), Object.assign(Object.assign({}, this.logContext), {
                                region: e.serverRegion
                            })), this.bufferedEvents = [], this.applyJoinResponse(e);
                            try {
                                yield this.localParticipant.republishAllTracks(void 0, !0)
                            } catch (e) {
                                this.log.error("error trying to re-publish tracks after reconnection", Object.assign(Object.assign({}, this.logContext), {
                                    error: e
                                }))
                            }
                            try {
                                yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", Object.assign(Object.assign({}, this.logContext), {
                                    region: e.serverRegion
                                }))
                            } catch (e) {
                                return
                            }
                            this.setAndEmitConnectionState(ew.Connected), this.emit(eo.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents()
                        }), this.handleParticipantUpdates = e => {
                            e.forEach(e => {
                                var t;
                                if (e.identity === this.localParticipant.identity) return void this.localParticipant.updateInfo(e);
                                "" === e.identity && (e.identity = null != (t = this.sidToIdentity.get(e.sid)) ? t : "");
                                let i = this.remoteParticipants.get(e.identity);
                                e.state === t$.DISCONNECTED ? this.handleParticipantDisconnected(e.identity, i) : i = this.getOrCreateParticipant(e.identity, e)
                            })
                        }, this.handleActiveSpeakersUpdate = e => {
                            let t = [],
                                i = {};
                            e.forEach(e => {
                                if (i[e.sid] = !0, e.sid === this.localParticipant.sid) this.localParticipant.audioLevel = e.level, this.localParticipant.setIsSpeaking(!0), t.push(this.localParticipant);
                                else {
                                    let i = this.getRemoteParticipantBySid(e.sid);
                                    i && (i.audioLevel = e.level, i.setIsSpeaking(!0), t.push(i))
                                }
                            }), i[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(!1)), this.remoteParticipants.forEach(e => {
                                i[e.sid] || (e.audioLevel = 0, e.setIsSpeaking(!1))
                            }), this.activeSpeakers = t, this.emitWhenConnected(eo.ActiveSpeakersChanged, t)
                        }, this.handleSpeakersChanged = e => {
                            let t = new Map;
                            this.activeSpeakers.forEach(e => {
                                let i = this.remoteParticipants.get(e.identity);
                                i && i.sid !== e.sid || t.set(e.sid, e)
                            }), e.forEach(e => {
                                let i = this.getRemoteParticipantBySid(e.sid);
                                e.sid === this.localParticipant.sid && (i = this.localParticipant), i && (i.audioLevel = e.level, i.setIsSpeaking(e.active), e.active ? t.set(e.sid, i) : t.delete(e.sid))
                            });
                            let i = Array.from(t.values());
                            i.sort((e, t) => t.audioLevel - e.audioLevel), this.activeSpeakers = i, this.emitWhenConnected(eo.ActiveSpeakersChanged, i)
                        }, this.handleStreamStateUpdate = e => {
                            e.streamStates.forEach(e => {
                                let t = this.getRemoteParticipantBySid(e.participantSid);
                                if (!t) return;
                                let i = t.getTrackPublicationBySid(e.trackSid);
                                if (!i || !i.track) return;
                                let n = r1.streamStateFromProto(e.state);
                                n !== i.track.streamState && (i.track.streamState = n, t.emit(ec.TrackStreamStateChanged, i, i.track.streamState), this.emitWhenConnected(eo.TrackStreamStateChanged, i, i.track.streamState, t))
                            })
                        }, this.handleSubscriptionPermissionUpdate = e => {
                            let t = this.getRemoteParticipantBySid(e.participantSid);
                            if (!t) return;
                            let i = t.getTrackPublicationBySid(e.trackSid);
                            i && i.setAllowed(e.allowed)
                        }, this.handleSubscriptionError = e => {
                            let t = Array.from(this.remoteParticipants.values()).find(t => t.trackPublications.has(e.trackSid));
                            if (!t) return;
                            let i = t.getTrackPublicationBySid(e.trackSid);
                            i && i.setSubscriptionError(e.err)
                        }, this.handleDataPacket = e => {
                            let t = this.remoteParticipants.get(e.participantIdentity);
                            if ("user" === e.value.case) this.handleUserPacket(t, e.value.value, e.kind);
                            else if ("transcription" === e.value.case) this.handleTranscription(t, e.value.value);
                            else if ("sipDtmf" === e.value.case) this.handleSipDtmf(t, e.value.value);
                            else if ("chatMessage" === e.value.case) this.handleChatMessage(t, e.value.value);
                            else if ("metrics" === e.value.case) this.handleMetrics(e.value.value, t);
                            else if ("streamHeader" === e.value.case) this.handleStreamHeader(e.value.value, e.participantIdentity);
                            else if ("streamChunk" === e.value.case) this.handleStreamChunk(e.value.value);
                            else if ("streamTrailer" === e.value.case) this.handleStreamTrailer(e.value.value);
                            else if ("rpcRequest" === e.value.case) {
                                let t = e.value.value;
                                this.handleIncomingRpcRequest(e.participantIdentity, t.id, t.method, t.payload, t.responseTimeoutMs, t.version)
                            }
                        }, this.handleUserPacket = (e, t, i) => {
                            this.emit(eo.DataReceived, t.payload, e, i, t.topic), null == e || e.emit(ec.DataReceived, t.payload, i)
                        }, this.handleSipDtmf = (e, t) => {
                            this.emit(eo.SipDTMFReceived, t, e), null == e || e.emit(ec.SipDTMFReceived, t)
                        }, this.bufferedSegments = new Map, this.handleTranscription = (e, t) => {
                            var i;
                            let n = t.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(t.transcribedParticipantIdentity),
                                r = null == n ? void 0 : n.trackPublications.get(t.trackId),
                                a = (i = this.transcriptionReceivedTimes, t.segments.map(e => {
                                    var t;
                                    let {
                                        id: n,
                                        text: r,
                                        language: a,
                                        startTime: s,
                                        endTime: o,
                                        final: c
                                    } = e, l = null != (t = i.get(n)) ? t : Date.now(), d = Date.now();
                                    return c ? i.delete(n) : i.set(n, l), {
                                        id: n,
                                        text: r,
                                        startTime: Number.parseInt(s.toString()),
                                        endTime: Number.parseInt(o.toString()),
                                        final: c,
                                        language: a,
                                        firstReceivedTime: l,
                                        lastReceivedTime: d
                                    }
                                }));
                            null == r || r.emit(ed.TranscriptionReceived, a), null == n || n.emit(ec.TranscriptionReceived, a, r), this.emit(eo.TranscriptionReceived, a, n, r)
                        }, this.handleChatMessage = (e, t) => {
                            let i = function(e) {
                                let {
                                    id: t,
                                    timestamp: i,
                                    message: n,
                                    editTimestamp: r
                                } = e;
                                return {
                                    id: t,
                                    timestamp: Number.parseInt(i.toString()),
                                    editTimestamp: r ? Number.parseInt(r.toString()) : void 0,
                                    message: n
                                }
                            }(t);
                            this.emit(eo.ChatMessage, i, e)
                        }, this.handleMetrics = (e, t) => {
                            this.emit(eo.MetricsReceived, e, t)
                        }, this.handleAudioPlaybackStarted = () => {
                            this.canPlaybackAudio || (this.audioEnabled = !0, this.emit(eo.AudioPlaybackStatusChanged, !0))
                        }, this.handleAudioPlaybackFailed = e => {
                            this.log.warn("could not playback audio", Object.assign(Object.assign({}, this.logContext), {
                                error: e
                            })), this.canPlaybackAudio && (this.audioEnabled = !1, this.emit(eo.AudioPlaybackStatusChanged, !1))
                        }, this.handleVideoPlaybackStarted = () => {
                            this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = !1, this.emit(eo.VideoPlaybackStatusChanged, !0))
                        }, this.handleVideoPlaybackFailed = () => {
                            this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = !0, this.emit(eo.VideoPlaybackStatusChanged, !1))
                        }, this.handleDeviceChange = () => nT(this, void 0, void 0, function*() {
                            var e;
                            (null == (e = rz()) ? void 0 : e.os) !== "iOS" && (yield this.selectDefaultDevices()), this.emit(eo.MediaDevicesChanged)
                        }), this.handleRoomUpdate = e => {
                            let t = this.roomInfo;
                            this.roomInfo = e, t && t.metadata !== e.metadata && this.emitWhenConnected(eo.RoomMetadataChanged, e.metadata), (null == t ? void 0 : t.activeRecording) !== e.activeRecording && this.emitWhenConnected(eo.RecordingStatusChanged, e.activeRecording)
                        }, this.handleConnectionQualityUpdate = e => {
                            e.updates.forEach(e => {
                                if (e.participantSid === this.localParticipant.sid) return void this.localParticipant.setConnectionQuality(e.quality);
                                let t = this.getRemoteParticipantBySid(e.participantSid);
                                t && t.setConnectionQuality(e.quality)
                            })
                        }, this.onLocalParticipantMetadataChanged = e => {
                            this.emit(eo.ParticipantMetadataChanged, e, this.localParticipant)
                        }, this.onLocalParticipantNameChanged = e => {
                            this.emit(eo.ParticipantNameChanged, e, this.localParticipant)
                        }, this.onLocalAttributesChanged = e => {
                            this.emit(eo.ParticipantAttributesChanged, e, this.localParticipant)
                        }, this.onLocalTrackMuted = e => {
                            this.emit(eo.TrackMuted, e, this.localParticipant)
                        }, this.onLocalTrackUnmuted = e => {
                            this.emit(eo.TrackUnmuted, e, this.localParticipant)
                        }, this.onTrackProcessorUpdate = e => {
                            var t;
                            null == (t = null == e ? void 0 : e.onPublish) || t.call(e, this)
                        }, this.onLocalTrackPublished = e => nT(this, void 0, void 0, function*() {
                            var t, i, n, r, a, s;
                            null == (t = e.track) || t.on(ed.TrackProcessorUpdate, this.onTrackProcessorUpdate), null == (i = e.track) || i.on(ed.Restarted, this.onLocalTrackRestarted), null == (a = null == (r = null == (n = e.track) ? void 0 : n.getProcessor()) ? void 0 : r.onPublish) || a.call(r, this), this.emit(eo.LocalTrackPublished, e, this.localParticipant), aK(e.track) && (yield e.track.checkForSilence()) && this.emit(eo.LocalAudioSilenceDetected, e);
                            let o = yield null == (s = e.track) ? void 0 : s.getDeviceId(!1), c = a0(e.source);
                            c && o && o !== this.localParticipant.activeDeviceMap.get(c) && (this.localParticipant.activeDeviceMap.set(c, o), this.emit(eo.ActiveDeviceChanged, c, o))
                        }), this.onLocalTrackUnpublished = e => {
                            var t, i;
                            null == (t = e.track) || t.off(ed.TrackProcessorUpdate, this.onTrackProcessorUpdate), null == (i = e.track) || i.off(ed.Restarted, this.onLocalTrackRestarted), this.emit(eo.LocalTrackUnpublished, e, this.localParticipant)
                        }, this.onLocalTrackRestarted = e => nT(this, void 0, void 0, function*() {
                            let t = yield e.getDeviceId(!1), i = a0(e.source);
                            i && t && t !== this.localParticipant.activeDeviceMap.get(i) && (this.log.debug("local track restarted, setting ".concat(i, " ").concat(t, " active"), this.logContext), this.localParticipant.activeDeviceMap.set(i, t), this.emit(eo.ActiveDeviceChanged, i, t))
                        }), this.onLocalConnectionQualityChanged = e => {
                            this.emit(eo.ConnectionQualityChanged, e, this.localParticipant)
                        }, this.onMediaDevicesError = (e, t) => {
                            this.emit(eo.MediaDevicesError, e, t)
                        }, this.onLocalParticipantPermissionsChanged = e => {
                            this.emit(eo.ParticipantPermissionsChanged, e, this.localParticipant)
                        }, this.onLocalChatMessageSent = e => {
                            this.emit(eo.ChatMessage, e, this.localParticipant)
                        }, this.setMaxListeners(100), this.remoteParticipants = new Map, this.sidToIdentity = new Map, this.options = Object.assign(Object.assign({}, sS), e), this.log = nf(null != (i = this.options.loggerName) ? i : X.Room), this.transcriptionReceivedTimes = new Map, this.options.audioCaptureDefaults = Object.assign(Object.assign({}, sk), null == e ? void 0 : e.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, sT), null == e ? void 0 : e.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, sy), null == e ? void 0 : e.publishDefaults), this.maybeCreateEngine(), this.disconnectLock = new eO, this.localParticipant = new od("", "", this.engine, this.options, this.rpcHandlers), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", aN(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", aN(this.options.audioCaptureDefaults.deviceId)), (null == (n = this.options.audioOutput) ? void 0 : n.deviceId) && this.switchActiveDevice("audiooutput", aN(this.options.audioOutput.deviceId)).catch(e => this.log.warn("Could not set audio output: ".concat(e.message), this.logContext)), this.options.e2ee && this.setupE2EE(), av()) {
                        const e = new AbortController;
                        null == (r = navigator.mediaDevices) || r.addEventListener("devicechange", this.handleDeviceChange, {
                            signal: e.signal
                        }), op.cleanupRegistry && op.cleanupRegistry.register(this, () => {
                            e.abort()
                        })
                    }
                }
            }
            op.cleanupRegistry = "undefined" != typeof FinalizationRegistry && new FinalizationRegistry(e => {
                e()
            });
            var om = Object.freeze({
                __proto__: null,
                Convert: class {
                    static toAgentAttributes(e) {
                        return JSON.parse(e)
                    }
                    static agentAttributesToJson(e) {
                        return JSON.stringify(e)
                    }
                    static toTranscriptionAttributes(e) {
                        return JSON.parse(e)
                    }
                    static transcriptionAttributesToJson(e) {
                        return JSON.stringify(e)
                    }
                }
            });
            (W = eE || (eE = {}))[W.IDLE = 0] = "IDLE", W[W.RUNNING = 1] = "RUNNING", W[W.SKIPPED = 2] = "SKIPPED", W[W.SUCCESS = 3] = "SUCCESS", W[W.FAILED = 4] = "FAILED";
            class of extends nw.EventEmitter {
                run(e) {
                    return nT(this, void 0, void 0, function*() {
                        if (this.status !== eE.IDLE) throw Error("check is running already");
                        this.setStatus(eE.RUNNING);
                        try {
                            yield this.perform()
                        } catch (e) {
                            e instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(e.message) : this.appendError(e.message))
                        }
                        return yield this.disconnect(), yield new Promise(e => setTimeout(e, 500)), this.status !== eE.SKIPPED && this.setStatus(this.isSuccess() ? eE.SUCCESS : eE.FAILED), e && e(), this.getInfo()
                    })
                }
                isSuccess() {
                    return !this.logs.some(e => "error" === e.level)
                }
                connect(e) {
                    return nT(this, void 0, void 0, function*() {
                        return this.room.state === ew.Connected || (e || (e = this.url), yield this.room.connect(e, this.token, this.connectOptions)), this.room
                    })
                }
                disconnect() {
                    return nT(this, void 0, void 0, function*() {
                        this.room && this.room.state !== ew.Disconnected && (yield this.room.disconnect(), yield new Promise(e => setTimeout(e, 500)))
                    })
                }
                skip() {
                    this.setStatus(eE.SKIPPED)
                }
                switchProtocol(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = !1,
                            i = !1;
                        if (this.room.on(eo.Reconnecting, () => {
                                t = !0
                            }), this.room.once(eo.Reconnected, () => {
                                i = !0
                            }), this.room.simulateScenario("force-".concat(e)), yield new Promise(e => setTimeout(e, 1e3)), !t) return;
                        let n = Date.now() + 1e4;
                        for (; Date.now() < n;) {
                            if (i) return;
                            yield ai(100)
                        }
                        throw Error("Could not reconnect using ".concat(e, " protocol after 10 seconds"))
                    })
                }
                appendMessage(e) {
                    this.logs.push({
                        level: "info",
                        message: e
                    }), this.emit("update", this.getInfo())
                }
                appendWarning(e) {
                    this.logs.push({
                        level: "warning",
                        message: e
                    }), this.emit("update", this.getInfo())
                }
                appendError(e) {
                    this.logs.push({
                        level: "error",
                        message: e
                    }), this.emit("update", this.getInfo())
                }
                setStatus(e) {
                    this.status = e, this.emit("update", this.getInfo())
                }
                get engine() {
                    var e;
                    return null == (e = this.room) ? void 0 : e.engine
                }
                getInfo() {
                    return {
                        logs: this.logs,
                        name: this.name,
                        status: this.status,
                        description: this.description
                    }
                }
                constructor(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super(), this.status = eE.IDLE, this.logs = [], this.options = {}, this.url = e, this.token = t, this.name = this.constructor.name, this.room = new op(i.roomOptions), this.connectOptions = i.connectOptions, this.options = i
                }
            }
            class og extends of {
                get description() {
                    return "Cloud regions"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        let e = new s0(this.url, this.token);
                        if (!e.isCloud()) return void this.skip();
                        let t = [],
                            i = new Set;
                        for (let n = 0; n < 3; n++) {
                            let n = yield e.getNextBestRegionUrl();
                            if (!n) break;
                            if (i.has(n)) continue;
                            i.add(n);
                            let r = yield this.checkCloudRegion(n);
                            this.appendMessage("".concat(r.region, " RTT: ").concat(r.rtt, "ms, duration: ").concat(r.duration, "ms")), t.push(r)
                        }
                        t.sort((e, t) => (e.duration - t.duration) * .5 + (e.rtt - t.rtt) * .5);
                        let n = t[0];
                        this.bestStats = n, this.appendMessage("best Cloud region: ".concat(n.region))
                    })
                }
                getInfo() {
                    let e = super.getInfo();
                    return e.data = this.bestStats, e
                }
                checkCloudRegion(e) {
                    return nT(this, void 0, void 0, function*() {
                        var t, i;
                        yield this.connect(e), "tcp" === this.options.protocol && (yield this.switchProtocol("tcp"));
                        let n = null == (t = this.room.serverInfo) ? void 0 : t.region;
                        if (!n) throw Error("Region not found");
                        let r = yield this.room.localParticipant.streamText({
                            topic: "test"
                        }), a = "A".repeat(1e3), s = Date.now();
                        for (let e = 0; e < 1e3; e++) yield r.write(a);
                        yield r.close();
                        let o = Date.now(),
                            c = yield null == (i = this.room.engine.pcManager) ? void 0 : i.publisher.getStats(), l = {
                                region: n,
                                rtt: 1e4,
                                duration: o - s
                            };
                        return null == c || c.forEach(e => {
                            "candidate-pair" === e.type && e.nominated && (l.rtt = 1e3 * e.currentRoundTripTime)
                        }), yield this.disconnect(), l
                    })
                }
            }
            class ov extends of {
                get description() {
                    return "Connection via UDP vs TCP"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        let e = yield this.checkConnectionProtocol("udp"), t = yield this.checkConnectionProtocol("tcp");
                        this.bestStats = e, e.qualityLimitationDurations.bandwidth - t.qualityLimitationDurations.bandwidth > .5 || (e.packetsLost - t.packetsLost) / e.packetsSent > .01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t) : this.appendMessage("best connection quality via udp");
                        let i = this.bestStats;
                        this.appendMessage("upstream bitrate: ".concat((i.bitrateTotal / i.count / 1e3 / 1e3).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((i.rttTotal / i.count * 1e3).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((i.jitterTotal / i.count * 1e3).toFixed(2), " ms")), i.packetsLost > 0 && this.appendWarning("packets lost: ".concat((i.packetsLost / i.packetsSent * 100).toFixed(2), "%")), i.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((i.qualityLimitationDurations.bandwidth / 10 * 100).toFixed(2), "%")), i.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((i.qualityLimitationDurations.cpu / 10 * 100).toFixed(2), "%"))
                    })
                }
                getInfo() {
                    let e = super.getInfo();
                    return e.data = this.bestStats, e
                }
                checkConnectionProtocol(e) {
                    return nT(this, void 0, void 0, function*() {
                        yield this.connect(), "tcp" === e ? yield this.switchProtocol("tcp"): yield this.switchProtocol("udp");
                        let t = document.createElement("canvas");
                        t.width = 1280, t.height = 720;
                        let i = t.getContext("2d");
                        if (!i) throw Error("Could not get canvas context");
                        let n = 0,
                            r = () => {
                                n = (n + 1) % 360, i.fillStyle = "hsl(".concat(n, ", 100%, 50%)"), i.fillRect(0, 0, t.width, t.height), requestAnimationFrame(r)
                            };
                        r();
                        let a = t.captureStream(30).getVideoTracks()[0],
                            s = (yield this.room.localParticipant.publishTrack(a, {
                                simulcast: !1,
                                degradationPreference: "maintain-resolution",
                                videoEncoding: {
                                    maxBitrate: 2e6
                                }
                            })).track,
                            o = {
                                protocol: e,
                                packetsLost: 0,
                                packetsSent: 0,
                                qualityLimitationDurations: {},
                                rttTotal: 0,
                                jitterTotal: 0,
                                bitrateTotal: 0,
                                count: 0
                            },
                            c = setInterval(() => nT(this, void 0, void 0, function*() {
                                let e = yield s.getRTCStatsReport();
                                null == e || e.forEach(e => {
                                    "outbound-rtp" === e.type ? (o.packetsSent = e.packetsSent, o.qualityLimitationDurations = e.qualityLimitationDurations, o.bitrateTotal += e.targetBitrate, o.count++) : "remote-inbound-rtp" === e.type && (o.packetsLost = e.packetsLost, o.rttTotal += e.roundTripTime, o.jitterTotal += e.jitter)
                                })
                            }), 1e3);
                        return yield new Promise(e => setTimeout(e, 1e4)), clearInterval(c), a.stop(), t.remove(), yield this.disconnect(), o
                    })
                }
            }
            class ob extends of {
                get description() {
                    return "Can publish audio"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t = yield this.connect(), i = yield oo();
                        if (yield a$(i, 1e3)) throw Error("unable to detect audio from microphone");
                        this.appendMessage("detected audio from microphone"), t.localParticipant.publishTrack(i), yield new Promise(e => setTimeout(e, 3e3));
                        let n = yield null == (e = i.sender) ? void 0 : e.getStats();
                        if (!n) throw Error("Could not get RTCStats");
                        let r = 0;
                        if (n.forEach(e => {
                                "outbound-rtp" !== e.type || "audio" !== e.kind && (e.kind || "audio" !== e.mediaType) || (r = e.packetsSent)
                            }), 0 === r) throw Error("Could not determine packets are sent");
                        this.appendMessage("published ".concat(r, " audio packets"))
                    })
                }
            }
            class oy extends of {
                get description() {
                    return "Can publish video"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t = yield this.connect(), i = yield os();
                        yield this.checkForVideo(i.mediaStreamTrack), t.localParticipant.publishTrack(i), yield new Promise(e => setTimeout(e, 5e3));
                        let n = yield null == (e = i.sender) ? void 0 : e.getStats();
                        if (!n) throw Error("Could not get RTCStats");
                        let r = 0;
                        if (n.forEach(e => {
                                "outbound-rtp" !== e.type || "video" !== e.kind && (e.kind || "video" !== e.mediaType) || (r += e.packetsSent)
                            }), 0 === r) throw Error("Could not determine packets are sent");
                        this.appendMessage("published ".concat(r, " video packets"))
                    })
                }
                checkForVideo(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = new MediaStream;
                        t.addTrack(e.clone());
                        let i = document.createElement("video");
                        i.srcObject = t, i.muted = !0, yield new Promise(t => {
                            i.onplay = () => {
                                setTimeout(() => {
                                    var n, r, a, s;
                                    let o = document.createElement("canvas"),
                                        c = e.getSettings(),
                                        l = null != (r = null != (n = c.width) ? n : i.videoWidth) ? r : 1280,
                                        d = null != (s = null != (a = c.height) ? a : i.videoHeight) ? s : 720;
                                    o.width = l, o.height = d;
                                    let u = o.getContext("2d");
                                    u.drawImage(i, 0, 0);
                                    let h = u.getImageData(0, 0, o.width, o.height).data,
                                        p = !0;
                                    for (let e = 0; e < h.length; e += 4)
                                        if (0 !== h[e] || 0 !== h[e + 1] || 0 !== h[e + 2]) {
                                            p = !1;
                                            break
                                        } p ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), t()
                                }, 1e3)
                            }, i.play()
                        }), t.getTracks().forEach(e => e.stop()), i.remove()
                    })
                }
            }
            class ok extends of {
                get description() {
                    return "Resuming connection after interruption"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        var e;
                        let t, i = yield this.connect(), n = !1, r = !1, a = new Promise(e => {
                            setTimeout(e, 5e3), t = e
                        }), s = () => {
                            n = !0
                        };
                        i.on(eo.SignalReconnecting, s).on(eo.Reconnecting, s).on(eo.Reconnected, () => {
                            r = !0, t(!0)
                        }), null == (e = i.engine.client.ws) || e.close();
                        let o = i.engine.client.onClose;
                        if (o && o(""), yield a, n) {
                            if (!r || i.state !== ew.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), Error("Not able to reconnect")
                        } else throw Error("Did not attempt to reconnect")
                    })
                }
            }
            class oT extends of {
                get description() {
                    return "Can connect via TURN"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t;
                        let i = new si,
                            n = yield i.join(this.url, this.token, {
                                autoSubscribe: !0,
                                maxRetries: 0,
                                e2eeEnabled: !1,
                                websocketTimeout: 15e3
                            }), r = !1, a = !1, s = !1;
                        for (let e of n.iceServers)
                            for (let t of e.urls) t.startsWith("turn:") ? (a = !0, s = !0) : t.startsWith("turns:") && (a = !0, s = !0, r = !0), t.startsWith("stun:") && (s = !0);
                        s ? a && !r && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield i.close(), (null == (t = null == (e = this.connectOptions) ? void 0 : e.rtcConfig) ? void 0 : t.iceServers) || a ? yield this.room.connect(this.url, this.token, {
                            rtcConfig: {
                                iceTransportPolicy: "relay"
                            }
                        }): (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise(e => setTimeout(e, 0)))
                    })
                }
            }
            class oS extends of {
                get description() {
                    return "Establishing WebRTC connection"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        let e = !1,
                            t = !1;
                        this.room.on(eo.SignalConnected, () => {
                            let i = this.room.engine.client.onTrickle;
                            this.room.engine.client.onTrickle = (n, r) => {
                                if (n.candidate) {
                                    let i = new RTCIceCandidate(n),
                                        r = "".concat(i.protocol, " ").concat(i.address, ":").concat(i.port, " ").concat(i.type);
                                    i.address && (function(e) {
                                        let t = e.split(".");
                                        if (4 === t.length) {
                                            if ("10" === t[0]) return !0;
                                            else if ("192" === t[0] && "168" === t[1]) return !0;
                                            else if ("172" === t[0]) {
                                                let e = parseInt(t[1], 10);
                                                if (e >= 16 && e <= 31) return !0
                                            }
                                        }
                                        return !1
                                    }(i.address) ? r += " (private)" : "tcp" === i.protocol && "passive" === i.tcpType ? (e = !0, r += " (passive)") : "udp" === i.protocol && (t = !0)), this.appendMessage(r)
                                }
                                i && i(n, r)
                            }, this.room.engine.pcManager && (this.room.engine.pcManager.subscriber.onIceCandidateError = e => {
                                e instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(e.errorCode, " ").concat(e.errorText, " ").concat(e.url))
                            })
                        });
                        try {
                            yield this.connect(), np.info("now the room is connected")
                        } catch (e) {
                            throw this.appendWarning("ports need to be open on firewall in order to connect."), e
                        }
                        e || this.appendWarning("Server is not configured for ICE/TCP"), t || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly")
                    })
                }
            }
            class oC extends of {
                get description() {
                    return "Connecting to signal connection via WebSocket"
                }
                perform() {
                    return nT(this, void 0, void 0, function*() {
                        var e, t, i;
                        (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
                        let n = new si,
                            r = yield n.join(this.url, this.token, {
                                autoSubscribe: !0,
                                maxRetries: 0,
                                e2eeEnabled: !1,
                                websocketTimeout: 15e3
                            });
                        this.appendMessage("Connected to server, version ".concat(r.serverVersion, ".")), (null == (e = r.serverInfo) ? void 0 : e.edition) === iu.Cloud && (null == (t = r.serverInfo) ? void 0 : t.region) && this.appendMessage("LiveKit Cloud: ".concat(null == (i = r.serverInfo) ? void 0 : i.region)), yield n.close()
                    })
                }
            }
            class ow extends nw.EventEmitter {
                getNextCheckId() {
                    let e = this.checkResults.size;
                    return this.checkResults.set(e, {
                        logs: [],
                        status: eE.IDLE,
                        name: "",
                        description: ""
                    }), e
                }
                updateCheck(e, t) {
                    this.checkResults.set(e, t), this.emit("checkUpdate", e, t)
                }
                isSuccess() {
                    return Array.from(this.checkResults.values()).every(e => e.status !== eE.FAILED)
                }
                getResults() {
                    return Array.from(this.checkResults.values())
                }
                createAndRunCheck(e) {
                    return nT(this, void 0, void 0, function*() {
                        let t = this.getNextCheckId(),
                            i = new e(this.url, this.token, this.options),
                            n = e => {
                                this.updateCheck(t, e)
                            };
                        i.on("update", n);
                        let r = yield i.run();
                        return i.off("update", n), r
                    })
                }
                checkWebsocket() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(oC)
                    })
                }
                checkWebRTC() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(oS)
                    })
                }
                checkTURN() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(oT)
                    })
                }
                checkReconnect() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(ok)
                    })
                }
                checkPublishAudio() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(ob)
                    })
                }
                checkPublishVideo() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(oy)
                    })
                }
                checkConnectionProtocol() {
                    return nT(this, void 0, void 0, function*() {
                        let e = yield this.createAndRunCheck(ov);
                        if (e.data && "protocol" in e.data) {
                            let t = e.data;
                            this.options.protocol = t.protocol
                        }
                        return e
                    })
                }
                checkCloudRegion() {
                    return nT(this, void 0, void 0, function*() {
                        return this.createAndRunCheck(og)
                    })
                }
                constructor(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super(), this.options = {}, this.checkResults = new Map, this.url = e, this.token = t, this.options = i
                }
            }

            function oE(e) {
                var t, i;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = aB(e) ? e.mediaStreamTrack : e,
                    a = r.getSettings(),
                    s = {
                        facingMode: null != (t = n.defaultFacingMode) ? t : "user",
                        confidence: "low"
                    };
                if ("facingMode" in a) {
                    let e = a.facingMode;
                    np.trace("rawFacingMode", {
                        rawFacingMode: e
                    }), e && "string" == typeof e && (void 0 === (i = e) || ["user", "environment", "left", "right"].includes(i)) && (s = {
                        facingMode: e,
                        confidence: "high"
                    })
                }
                if (["low", "medium"].includes(s.confidence)) {
                    np.trace("Try to get facing mode from device label: (".concat(r.label, ")"));
                    let e = oO(r.label);
                    void 0 !== e && (s = e)
                }
                return s
            }
            let oP = new Map([
                    ["obs virtual camera", {
                        facingMode: "environment",
                        confidence: "medium"
                    }]
                ]),
                oR = new Map([
                    ["iphone", {
                        facingMode: "environment",
                        confidence: "medium"
                    }],
                    ["ipad", {
                        facingMode: "environment",
                        confidence: "medium"
                    }]
                ]);

            function oO(e) {
                var t;
                let i = e.trim().toLowerCase();
                if ("" !== i) return oP.has(i) ? oP.get(i) : null == (t = Array.from(oR.entries()).find(e => {
                    let [t] = e;
                    return i.includes(t)
                })) ? void 0 : t[1]
            }
        },
        99117: function(e, t, i) {
            var n = i(91216),
                r = i(79240);
            e.exports = function(e, t, i) {
                (void 0 === i || r(e[t], i)) && (void 0 !== i || t in e) || n(e, t, i)
            }
        },
        82515: function(e, t, i) {
            var n = i(91216),
                r = i(79240),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, i) {
                var s = e[t];
                a.call(e, t) && r(s, i) && (void 0 !== i || t in e) || n(e, t, i)
            }
        },
        91216: function(e, t, i) {
            var n = i(72011);
            e.exports = function(e, t, i) {
                "__proto__" == t && n ? n(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                }) : e[t] = i
            }
        },
        25568: function(e, t, i) {
            var n = i(26189),
                r = Object.create;
            e.exports = function() {
                function e() {}
                return function(t) {
                    if (!n(t)) return {};
                    if (r) return r(t);
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = void 0, i
                }
            }()
        },
        95863: function(e, t, i) {
            var n = i(26189),
                r = i(64695),
                a = i(72469),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return a(e);
                var t = r(e),
                    i = [];
                for (var o in e) "constructor" == o && (t || !s.call(e, o)) || i.push(o);
                return i
            }
        },
        50482: function(e, t, i) {
            var n = i(91601),
                r = i(99117),
                a = i(88617),
                s = i(68920),
                o = i(26189),
                c = i(33321),
                l = i(92558);
            e.exports = function e(t, i, d, u, h) {
                t !== i && a(i, function(a, c) {
                    if (h || (h = new n), o(a)) s(t, i, c, d, e, u, h);
                    else {
                        var p = u ? u(l(t, c), a, c + "", t, i, h) : void 0;
                        void 0 === p && (p = a), r(t, c, p)
                    }
                }, c)
            }
        },
        68920: function(e, t, i) {
            var n = i(99117),
                r = i(1082),
                a = i(6377),
                s = i(52495),
                o = i(82617),
                c = i(51676),
                l = i(42897),
                d = i(40733),
                u = i(7448),
                h = i(59722),
                p = i(26189),
                m = i(38515),
                f = i(95231),
                g = i(92558),
                v = i(2732);
            e.exports = function(e, t, i, b, y, k, T) {
                var S = g(e, i),
                    C = g(t, i),
                    w = T.get(C);
                if (w) return void n(e, i, w);
                var E = k ? k(S, C, i + "", e, t, T) : void 0,
                    P = void 0 === E;
                if (P) {
                    var R = l(C),
                        O = !R && u(C),
                        I = !R && !O && f(C);
                    E = C, R || O || I ? l(S) ? E = S : d(S) ? E = s(S) : O ? (P = !1, E = r(C, !0)) : I ? (P = !1, E = a(C, !0)) : E = [] : m(C) || c(C) ? (E = S, c(S) ? E = v(S) : (!p(S) || h(S)) && (E = o(C))) : P = !1
                }
                P && (T.set(C, E), y(E, C, b, k, T), T.delete(C)), n(e, i, E)
            }
        },
        16421: function(e, t, i) {
            var n = i(56308);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new n(t).set(new n(e)), t
            }
        },
        1082: function(e, t, i) {
            e = i.nmd(e);
            var n = i(62205),
                r = t && !t.nodeType && t,
                a = r && e && !e.nodeType && e,
                s = a && a.exports === r ? n.Buffer : void 0,
                o = s ? s.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var i = e.length,
                    n = o ? o(i) : new e.constructor(i);
                return e.copy(n), n
            }
        },
        6377: function(e, t, i) {
            var n = i(16421);
            e.exports = function(e, t) {
                var i = t ? n(e.buffer) : e.buffer;
                return new e.constructor(i, e.byteOffset, e.length)
            }
        },
        52495: function(e) {
            e.exports = function(e, t) {
                var i = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++i < n;) t[i] = e[i];
                return t
            }
        },
        72239: function(e, t, i) {
            var n = i(82515),
                r = i(91216);
            e.exports = function(e, t, i, a) {
                var s = !i;
                i || (i = {});
                for (var o = -1, c = t.length; ++o < c;) {
                    var l = t[o],
                        d = a ? a(i[l], e[l], l, i, e) : void 0;
                    void 0 === d && (d = e[l]), s ? r(i, l, d) : n(i, l, d)
                }
                return i
            }
        },
        32535: function(e, t, i) {
            var n = i(65574),
                r = i(29776);
            e.exports = function(e) {
                return n(function(t, i) {
                    var n = -1,
                        a = i.length,
                        s = a > 1 ? i[a - 1] : void 0,
                        o = a > 2 ? i[2] : void 0;
                    for (s = e.length > 3 && "function" == typeof s ? (a--, s) : void 0, o && r(i[0], i[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a;) {
                        var c = i[n];
                        c && e(t, c, n, s)
                    }
                    return t
                })
            }
        },
        46030: function(e, t, i) {
            var n = i(50482),
                r = i(26189);
            e.exports = function e(t, i, a, s, o, c) {
                return r(t) && r(i) && (c.set(i, t), n(t, i, void 0, e, c), c.delete(i)), t
            }
        },
        87647: function(e, t, i) {
            e.exports = i(69775)(Object.getPrototypeOf, Object)
        },
        82617: function(e, t, i) {
            var n = i(25568),
                r = i(87647),
                a = i(64695);
            e.exports = function(e) {
                return "function" != typeof e.constructor || a(e) ? {} : n(r(e))
            }
        },
        72469: function(e) {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var i in Object(e)) t.push(i);
                return t
            }
        },
        92558: function(e) {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        97826: function(e, t, i) {
            var n = i(37449),
                r = i(65574),
                a = i(46030),
                s = i(7804);
            e.exports = r(function(e) {
                return e.push(void 0, a), n(s, void 0, e)
            })
        },
        38515: function(e, t, i) {
            var n = i(37208),
                r = i(87647),
                a = i(71882),
                s = Object.prototype,
                o = Function.prototype.toString,
                c = s.hasOwnProperty,
                l = o.call(Object);
            e.exports = function(e) {
                if (!a(e) || "[object Object]" != n(e)) return !1;
                var t = r(e);
                if (null === t) return !0;
                var i = c.call(t, "constructor") && t.constructor;
                return "function" == typeof i && i instanceof i && o.call(i) == l
            }
        },
        33321: function(e, t, i) {
            var n = i(89943),
                r = i(95863),
                a = i(3310);
            e.exports = function(e) {
                return a(e) ? n(e, !0) : r(e)
            }
        },
        7804: function(e, t, i) {
            var n = i(50482);
            e.exports = i(32535)(function(e, t, i, r) {
                n(e, t, i, r)
            })
        },
        2732: function(e, t, i) {
            var n = i(72239),
                r = i(33321);
            e.exports = function(e) {
                return n(e, r(e))
            }
        },
        65974: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "DraggableCore", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), t.default = void 0;
            var n = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var i = p(void 0);
                    if (i && i.has(e)) return i.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                        } return n.default = e, i && i.set(e, n), n
                }(i(58191)),
                r = h(i(75448)),
                a = h(i(17727)),
                s = h(i(46203)),
                o = i(72414),
                c = i(27515),
                l = i(94117),
                d = h(i(8729)),
                u = h(i(3073));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    i = new WeakMap;
                return (p = function(e) {
                    return e ? i : t
                })(e)
            }

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, t, i) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            class g extends n.Component {
                static getDerivedStateFromProps(e, t) {
                    let {
                        position: i
                    } = e, {
                        prevPropsPosition: n
                    } = t;
                    return i && (!n || i.x !== n.x || i.y !== n.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", {
                        position: i,
                        prevPropsPosition: n
                    }), {
                        x: i.x,
                        y: i.y,
                        prevPropsPosition: {
                            ...i
                        }
                    }) : null
                }
                componentDidMount() {
                    void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                        isElementSVG: !0
                    })
                }
                componentWillUnmount() {
                    this.setState({
                        dragging: !1
                    })
                }
                findDOMNode() {
                    var e, t;
                    return null != (e = null == (t = this.props) || null == (t = t.nodeRef) ? void 0 : t.current) ? e : a.default.findDOMNode(this)
                }
                render() {
                    let {
                        axis: e,
                        bounds: t,
                        children: i,
                        defaultPosition: r,
                        defaultClassName: a,
                        defaultClassNameDragging: l,
                        defaultClassNameDragged: u,
                        position: h,
                        positionOffset: p,
                        scale: f,
                        ...g
                    } = this.props, v = {}, b = null, y = !h || this.state.dragging, k = h || r, T = {
                        x: (0, c.canDragX)(this) && y ? this.state.x : k.x,
                        y: (0, c.canDragY)(this) && y ? this.state.y : k.y
                    };
                    this.state.isElementSVG ? b = (0, o.createSVGTransform)(T, p) : v = (0, o.createCSSTransform)(T, p);
                    let S = (0, s.default)(i.props.className || "", a, {
                        [l]: this.state.dragging,
                        [u]: this.state.dragged
                    });
                    return n.createElement(d.default, m({}, g, {
                        onStart: this.onDragStart,
                        onDrag: this.onDrag,
                        onStop: this.onDragStop
                    }), n.cloneElement(n.Children.only(i), {
                        className: S,
                        style: {
                            ...i.props.style,
                            ...v
                        },
                        transform: b
                    }))
                }
                constructor(e) {
                    super(e), f(this, "onDragStart", (e, t) => {
                        if ((0, u.default)("Draggable: onDragStart: %j", t), !1 === this.props.onStart(e, (0, c.createDraggableData)(this, t))) return !1;
                        this.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    }), f(this, "onDrag", (e, t) => {
                        if (!this.state.dragging) return !1;
                        (0, u.default)("Draggable: onDrag: %j", t);
                        let i = (0, c.createDraggableData)(this, t),
                            n = {
                                x: i.x,
                                y: i.y,
                                slackX: 0,
                                slackY: 0
                            };
                        if (this.props.bounds) {
                            let {
                                x: e,
                                y: t
                            } = n;
                            n.x += this.state.slackX, n.y += this.state.slackY;
                            let [r, a] = (0, c.getBoundPosition)(this, n.x, n.y);
                            n.x = r, n.y = a, n.slackX = this.state.slackX + (e - n.x), n.slackY = this.state.slackY + (t - n.y), i.x = n.x, i.y = n.y, i.deltaX = n.x - this.state.x, i.deltaY = n.y - this.state.y
                        }
                        if (!1 === this.props.onDrag(e, i)) return !1;
                        this.setState(n)
                    }), f(this, "onDragStop", (e, t) => {
                        if (!this.state.dragging || !1 === this.props.onStop(e, (0, c.createDraggableData)(this, t))) return !1;
                        (0, u.default)("Draggable: onDragStop: %j", t);
                        let i = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (this.props.position) {
                            let {
                                x: e,
                                y: t
                            } = this.props.position;
                            i.x = e, i.y = t
                        }
                        this.setState(i)
                    }), this.state = {
                        dragging: !1,
                        dragged: !1,
                        x: e.position ? e.position.x : e.defaultPosition.x,
                        y: e.position ? e.position.y : e.defaultPosition.y,
                        prevPropsPosition: {
                            ...e.position
                        },
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")
                }
            }
            t.default = g, f(g, "displayName", "Draggable"), f(g, "propTypes", {
                ...d.default.propTypes,
                axis: r.default.oneOf(["both", "x", "y", "none"]),
                bounds: r.default.oneOfType([r.default.shape({
                    left: r.default.number,
                    right: r.default.number,
                    top: r.default.number,
                    bottom: r.default.number
                }), r.default.string, r.default.oneOf([!1])]),
                defaultClassName: r.default.string,
                defaultClassNameDragging: r.default.string,
                defaultClassNameDragged: r.default.string,
                defaultPosition: r.default.shape({
                    x: r.default.number,
                    y: r.default.number
                }),
                positionOffset: r.default.shape({
                    x: r.default.oneOfType([r.default.number, r.default.string]),
                    y: r.default.oneOfType([r.default.number, r.default.string])
                }),
                position: r.default.shape({
                    x: r.default.number,
                    y: r.default.number
                }),
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe
            }), f(g, "defaultProps", {
                ...d.default.defaultProps,
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                scale: 1
            })
        },
        8729: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var i = u(void 0);
                    if (i && i.has(e)) return i.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                        } return n.default = e, i && i.set(e, n), n
                }(i(58191)),
                r = d(i(75448)),
                a = d(i(17727)),
                s = i(72414),
                o = i(27515),
                c = i(94117),
                l = d(i(3073));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    i = new WeakMap;
                return (u = function(e) {
                    return e ? i : t
                })(e)
            }

            function h(e, t, i) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            let p = {
                    start: "touchstart",
                    move: "touchmove",
                    stop: "touchend"
                },
                m = {
                    start: "mousedown",
                    move: "mousemove",
                    stop: "mouseup"
                },
                f = m;
            class g extends n.Component {
                componentDidMount() {
                    this.mounted = !0;
                    let e = this.findDOMNode();
                    e && (0, s.addEvent)(e, p.start, this.onTouchStart, {
                        passive: !1
                    })
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    let e = this.findDOMNode();
                    if (e) {
                        let {
                            ownerDocument: t
                        } = e;
                        (0, s.removeEvent)(t, m.move, this.handleDrag), (0, s.removeEvent)(t, p.move, this.handleDrag), (0, s.removeEvent)(t, m.stop, this.handleDragStop), (0, s.removeEvent)(t, p.stop, this.handleDragStop), (0, s.removeEvent)(e, p.start, this.onTouchStart, {
                            passive: !1
                        }), this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(t)
                    }
                }
                findDOMNode() {
                    var e, t;
                    return null != (e = this.props) && e.nodeRef ? null == (t = this.props) || null == (t = t.nodeRef) ? void 0 : t.current : a.default.findDOMNode(this)
                }
                render() {
                    return n.cloneElement(n.Children.only(this.props.children), {
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd
                    })
                }
                constructor() {
                    super(...arguments), h(this, "dragging", !1), h(this, "lastX", NaN), h(this, "lastY", NaN), h(this, "touchIdentifier", null), h(this, "mounted", !1), h(this, "handleDragStart", e => {
                        if (this.props.onMouseDown(e), !this.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button) return !1;
                        let t = this.findDOMNode();
                        if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
                        let {
                            ownerDocument: i
                        } = t;
                        if (this.props.disabled || !(e.target instanceof i.defaultView.Node) || this.props.handle && !(0, s.matchesSelectorAndParentsTo)(e.target, this.props.handle, t) || this.props.cancel && (0, s.matchesSelectorAndParentsTo)(e.target, this.props.cancel, t)) return;
                        "touchstart" === e.type && e.preventDefault();
                        let n = (0, s.getTouchIdentifier)(e);
                        this.touchIdentifier = n;
                        let r = (0, o.getControlPosition)(e, n, this);
                        if (null == r) return;
                        let {
                            x: a,
                            y: c
                        } = r, d = (0, o.createCoreData)(this, a, c);
                        (0, l.default)("DraggableCore: handleDragStart: %j", d), (0, l.default)("calling", this.props.onStart), !1 !== this.props.onStart(e, d) && !1 !== this.mounted && (this.props.enableUserSelectHack && (0, s.addUserSelectStyles)(i), this.dragging = !0, this.lastX = a, this.lastY = c, (0, s.addEvent)(i, f.move, this.handleDrag), (0, s.addEvent)(i, f.stop, this.handleDragStop))
                    }), h(this, "handleDrag", e => {
                        let t = (0, o.getControlPosition)(e, this.touchIdentifier, this);
                        if (null == t) return;
                        let {
                            x: i,
                            y: n
                        } = t;
                        if (Array.isArray(this.props.grid)) {
                            let e = i - this.lastX,
                                t = n - this.lastY;
                            if ([e, t] = (0, o.snapToGrid)(this.props.grid, e, t), !e && !t) return;
                            i = this.lastX + e, n = this.lastY + t
                        }
                        let r = (0, o.createCoreData)(this, i, n);
                        if ((0, l.default)("DraggableCore: handleDrag: %j", r), !1 === this.props.onDrag(e, r) || !1 === this.mounted) {
                            try {
                                this.handleDragStop(new MouseEvent("mouseup"))
                            } catch (t) {
                                let e = document.createEvent("MouseEvents");
                                e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(e)
                            }
                            return
                        }
                        this.lastX = i, this.lastY = n
                    }), h(this, "handleDragStop", e => {
                        if (!this.dragging) return;
                        let t = (0, o.getControlPosition)(e, this.touchIdentifier, this);
                        if (null == t) return;
                        let {
                            x: i,
                            y: n
                        } = t;
                        if (Array.isArray(this.props.grid)) {
                            let e = i - this.lastX || 0,
                                t = n - this.lastY || 0;
                            [e, t] = (0, o.snapToGrid)(this.props.grid, e, t), i = this.lastX + e, n = this.lastY + t
                        }
                        let r = (0, o.createCoreData)(this, i, n);
                        if (!1 === this.props.onStop(e, r) || !1 === this.mounted) return !1;
                        let a = this.findDOMNode();
                        a && this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(a.ownerDocument), (0, l.default)("DraggableCore: handleDragStop: %j", r), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && ((0, l.default)("DraggableCore: Removing handlers"), (0, s.removeEvent)(a.ownerDocument, f.move, this.handleDrag), (0, s.removeEvent)(a.ownerDocument, f.stop, this.handleDragStop))
                    }), h(this, "onMouseDown", e => (f = m, this.handleDragStart(e))), h(this, "onMouseUp", e => (f = m, this.handleDragStop(e))), h(this, "onTouchStart", e => (f = p, this.handleDragStart(e))), h(this, "onTouchEnd", e => (f = p, this.handleDragStop(e)))
                }
            }
            t.default = g, h(g, "displayName", "DraggableCore"), h(g, "propTypes", {
                allowAnyClick: r.default.bool,
                children: r.default.node.isRequired,
                disabled: r.default.bool,
                enableUserSelectHack: r.default.bool,
                offsetParent: function(e, t) {
                    if (e[t] && 1 !== e[t].nodeType) throw Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: r.default.arrayOf(r.default.number),
                handle: r.default.string,
                cancel: r.default.string,
                nodeRef: r.default.object,
                onStart: r.default.func,
                onDrag: r.default.func,
                onStop: r.default.func,
                onMouseDown: r.default.func,
                scale: r.default.number,
                className: c.dontSetMe,
                style: c.dontSetMe,
                transform: c.dontSetMe
            }), h(g, "defaultProps", {
                allowAnyClick: !1,
                disabled: !1,
                enableUserSelectHack: !0,
                onStart: function() {},
                onDrag: function() {},
                onStop: function() {},
                onMouseDown: function() {},
                scale: 1
            })
        },
        50659: function(e, t, i) {
            "use strict";
            let {
                default: n,
                DraggableCore: r
            } = i(65974);
            e.exports = n, e.exports.default = n, e.exports.DraggableCore = r
        },
        72414: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addClassName = l, t.addEvent = function(e, t, i, n) {
                if (!e) return;
                let r = {
                    capture: !0,
                    ...n
                };
                e.addEventListener ? e.addEventListener(t, i, r) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
            }, t.addUserSelectStyles = function(e) {
                if (!e) return;
                let t = e.getElementById("react-draggable-style-el");
                t || ((t = e.createElement("style")).type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(t)), e.body && l(e.body, "react-draggable-transparent-selection")
            }, t.createCSSTransform = function(e, t) {
                let i = c(e, t, "px");
                return {
                    [(0, r.browserPrefixToKey)("transform", r.default)]: i
                }
            }, t.createSVGTransform = function(e, t) {
                return c(e, t, "")
            }, t.getTouch = function(e, t) {
                return e.targetTouches && (0, n.findInArray)(e.targetTouches, e => t === e.identifier) || e.changedTouches && (0, n.findInArray)(e.changedTouches, e => t === e.identifier)
            }, t.getTouchIdentifier = function(e) {
                return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0].identifier : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].identifier : void 0
            }, t.getTranslation = c, t.innerHeight = function(e) {
                let t = e.clientHeight,
                    i = e.ownerDocument.defaultView.getComputedStyle(e);
                return t -= (0, n.int)(i.paddingTop), t -= (0, n.int)(i.paddingBottom)
            }, t.innerWidth = function(e) {
                let t = e.clientWidth,
                    i = e.ownerDocument.defaultView.getComputedStyle(e);
                return t -= (0, n.int)(i.paddingLeft), t -= (0, n.int)(i.paddingRight)
            }, t.matchesSelector = o, t.matchesSelectorAndParentsTo = function(e, t, i) {
                let n = e;
                do {
                    if (o(n, t)) return !0;
                    if (n === i) break;
                    n = n.parentNode
                } while (n);
                return !1
            }, t.offsetXYFromParent = function(e, t, i) {
                let n = t === t.ownerDocument.body ? {
                    left: 0,
                    top: 0
                } : t.getBoundingClientRect();
                return {
                    x: (e.clientX + t.scrollLeft - n.left) / i,
                    y: (e.clientY + t.scrollTop - n.top) / i
                }
            }, t.outerHeight = function(e) {
                let t = e.clientHeight,
                    i = e.ownerDocument.defaultView.getComputedStyle(e);
                return t += (0, n.int)(i.borderTopWidth), t += (0, n.int)(i.borderBottomWidth)
            }, t.outerWidth = function(e) {
                let t = e.clientWidth,
                    i = e.ownerDocument.defaultView.getComputedStyle(e);
                return t += (0, n.int)(i.borderLeftWidth), t += (0, n.int)(i.borderRightWidth)
            }, t.removeClassName = d, t.removeEvent = function(e, t, i, n) {
                if (!e) return;
                let r = {
                    capture: !0,
                    ...n
                };
                e.removeEventListener ? e.removeEventListener(t, i, r) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = null
            }, t.removeUserSelectStyles = function(e) {
                if (e) try {
                    if (e.body && d(e.body, "react-draggable-transparent-selection"), e.selection) e.selection.empty();
                    else {
                        let t = (e.defaultView || window).getSelection();
                        t && "Caret" !== t.type && t.removeAllRanges()
                    }
                } catch (e) {}
            };
            var n = i(94117),
                r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var i = a(void 0);
                    if (i && i.has(e)) return i.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
                        } return n.default = e, i && i.set(e, n), n
                }(i(71427));

            function a(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    i = new WeakMap;
                return (a = function(e) {
                    return e ? i : t
                })(e)
            }
            let s = "";

            function o(e, t) {
                return s || (s = (0, n.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(t) {
                    return (0, n.isFunction)(e[t])
                })), !!(0, n.isFunction)(e[s]) && e[s](t)
            }

            function c(e, t, i) {
                let {
                    x: n,
                    y: r
                } = e, a = "translate(".concat(n).concat(i, ",").concat(r).concat(i, ")");
                if (t) {
                    let e = "".concat("string" == typeof t.x ? t.x : t.x + i),
                        n = "".concat("string" == typeof t.y ? t.y : t.y + i);
                    a = "translate(".concat(e, ", ").concat(n, ")") + a
                }
                return a
            }

            function l(e, t) {
                e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t))
            }

            function d(e, t) {
                e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "")
            }
        },
        71427: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.browserPrefixToKey = r, t.browserPrefixToStyle = function(e, t) {
                return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e
            }, t.default = void 0, t.getPrefix = n;
            let i = ["Moz", "Webkit", "O", "ms"];

            function n() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" == typeof window) return "";
                let n = null == (e = window.document) || null == (e = e.documentElement) ? void 0 : e.style;
                if (!n || t in n) return "";
                for (let e = 0; e < i.length; e++)
                    if (r(t, i[e]) in n) return i[e];
                return ""
            }

            function r(e, t) {
                return t ? "".concat(t).concat(function(e) {
                    let t = "",
                        i = !0;
                    for (let n = 0; n < e.length; n++) i ? (t += e[n].toUpperCase(), i = !1) : "-" === e[n] ? i = !0 : t += e[n];
                    return t
                }(e)) : e
            }
            t.default = n()
        },
        3073: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {}
        },
        27515: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canDragX = function(e) {
                return "both" === e.props.axis || "x" === e.props.axis
            }, t.canDragY = function(e) {
                return "both" === e.props.axis || "y" === e.props.axis
            }, t.createCoreData = function(e, t, i) {
                let r = !(0, n.isNum)(e.lastX),
                    s = a(e);
                return r ? {
                    node: s,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: t,
                    lastY: i,
                    x: t,
                    y: i
                } : {
                    node: s,
                    deltaX: t - e.lastX,
                    deltaY: i - e.lastY,
                    lastX: e.lastX,
                    lastY: e.lastY,
                    x: t,
                    y: i
                }
            }, t.createDraggableData = function(e, t) {
                let i = e.props.scale;
                return {
                    node: t.node,
                    x: e.state.x + t.deltaX / i,
                    y: e.state.y + t.deltaY / i,
                    deltaX: t.deltaX / i,
                    deltaY: t.deltaY / i,
                    lastX: e.state.x,
                    lastY: e.state.y
                }
            }, t.getBoundPosition = function(e, t, i) {
                var s;
                if (!e.props.bounds) return [t, i];
                let {
                    bounds: o
                } = e.props;
                o = "string" == typeof o ? o : {
                    left: (s = o).left,
                    top: s.top,
                    right: s.right,
                    bottom: s.bottom
                };
                let c = a(e);
                if ("string" == typeof o) {
                    let e, {
                            ownerDocument: t
                        } = c,
                        i = t.defaultView;
                    if (!((e = "parent" === o ? c.parentNode : t.querySelector(o)) instanceof i.HTMLElement)) throw Error('Bounds selector "' + o + '" could not find an element.');
                    let a = i.getComputedStyle(c),
                        s = i.getComputedStyle(e);
                    o = {
                        left: -c.offsetLeft + (0, n.int)(s.paddingLeft) + (0, n.int)(a.marginLeft),
                        top: -c.offsetTop + (0, n.int)(s.paddingTop) + (0, n.int)(a.marginTop),
                        right: (0, r.innerWidth)(e) - (0, r.outerWidth)(c) - c.offsetLeft + (0, n.int)(s.paddingRight) - (0, n.int)(a.marginRight),
                        bottom: (0, r.innerHeight)(e) - (0, r.outerHeight)(c) - c.offsetTop + (0, n.int)(s.paddingBottom) - (0, n.int)(a.marginBottom)
                    }
                }
                return (0, n.isNum)(o.right) && (t = Math.min(t, o.right)), (0, n.isNum)(o.bottom) && (i = Math.min(i, o.bottom)), (0, n.isNum)(o.left) && (t = Math.max(t, o.left)), (0, n.isNum)(o.top) && (i = Math.max(i, o.top)), [t, i]
            }, t.getControlPosition = function(e, t, i) {
                let n = "number" == typeof t ? (0, r.getTouch)(e, t) : null;
                if ("number" == typeof t && !n) return null;
                let s = a(i),
                    o = i.props.offsetParent || s.offsetParent || s.ownerDocument.body;
                return (0, r.offsetXYFromParent)(n || e, o, i.props.scale)
            }, t.snapToGrid = function(e, t, i) {
                return [Math.round(t / e[0]) * e[0], Math.round(i / e[1]) * e[1]]
            };
            var n = i(94117),
                r = i(72414);

            function a(e) {
                let t = e.findDOMNode();
                if (!t) throw Error("<DraggableCore>: Unmounted during event!");
                return t
            }
        },
        94117: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dontSetMe = function(e, t, i) {
                if (e[t]) return Error("Invalid prop ".concat(t, " passed to ").concat(i, " - do not set this, set it on the child."))
            }, t.findInArray = function(e, t) {
                for (let i = 0, n = e.length; i < n; i++)
                    if (t.apply(t, [e[i], i, e])) return e[i]
            }, t.int = function(e) {
                return parseInt(e, 10)
            }, t.isFunction = function(e) {
                return "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e)
            }, t.isNum = function(e) {
                return "number" == typeof e && !isNaN(e)
            }
        },
        36616: function(e, t, i) {
            "use strict";
            i.d(t, {
                c: () => s
            });
            var n = i(3331),
                r = i(35060),
                a = i(63438);

            function s(e, t) {
                void 0 === t && (t = n.E);
                var i = (0, a.O)(e, t);
                return (0, r.o)(function() {
                    return i
                })
            }
        },
        68514: function(e, t, i) {
            "use strict";
            var n = i(98848);
            Object.defineProperty(t, "useTimer", {
                enumerable: !0,
                get: function() {
                    return n.useTimer
                }
            })
        },
        11008: function(e, t) {
            "use strict";
            var i = this && this.__assign || function() {
                return (i = Object.assign || function(e) {
                    for (var t, i = 1, n = arguments.length; i < n; i++)
                        for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                switch (t.type) {
                    case "advanceTime":
                        var n = t.payload.timeToAdd;
                        return i(i({}, e), {
                            time: "DECREMENTAL" === e.timerType ? e.time - n : e.time + n
                        });
                    case "pause":
                        return i(i({}, e), {
                            isRunning: !1
                        });
                    case "reset":
                        return i(i({}, e), {
                            isRunning: !1,
                            isTimeOver: !1,
                            time: t.payload.initialTime
                        });
                    case "set":
                        return i(i({}, e), {
                            time: t.payload.newTime
                        });
                    case "start":
                        return i(i({}, e), {
                            isRunning: !0
                        });
                    case "stop":
                        return i(i({}, e), {
                            isRunning: !1,
                            isTimeOver: !0
                        });
                    default:
                        return e
                }
            }
        },
        98848: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useTimer = void 0;
            var r = i(58191),
                a = n(i(11008));
            t.useTimer = function(e) {
                var t = void 0 === e ? {} : e,
                    i = t.initialTime,
                    n = void 0 === i ? 0 : i,
                    s = t.interval,
                    o = void 0 === s ? 1e3 : s,
                    c = t.step,
                    l = void 0 === c ? 1 : c,
                    d = t.timerType,
                    u = void 0 === d ? "INCREMENTAL" : d,
                    h = t.endTime,
                    p = t.onTimeOver,
                    m = t.onTimeUpdate,
                    f = r.useReducer(a.default, {
                        isRunning: !1,
                        isTimeOver: !1,
                        time: n,
                        timerType: u
                    }),
                    g = f[0],
                    v = f[1],
                    b = g.isRunning,
                    y = g.isTimeOver,
                    k = g.time,
                    T = r.useCallback(function(e) {
                        v({
                            type: "advanceTime",
                            payload: {
                                timeToAdd: e
                            }
                        })
                    }, []),
                    S = r.useCallback(function() {
                        v({
                            type: "pause"
                        })
                    }, []),
                    C = r.useCallback(function() {
                        v({
                            type: "reset",
                            payload: {
                                initialTime: n
                            }
                        })
                    }, [n]),
                    w = r.useCallback(function() {
                        y && C(), v({
                            type: "start"
                        })
                    }, [C, y]);
                return r.useEffect(function() {
                    "function" == typeof m && m(k)
                }, [k]), r.useEffect(function() {
                    b && k === h && (v({
                        type: "stop"
                    }), "function" == typeof p && p())
                }, [h, p, k, b]), r.useEffect(function() {
                    var e = null;
                    return b ? e = setInterval(function() {
                            v({
                                type: "set",
                                payload: {
                                    newTime: "DECREMENTAL" === u ? k - l : k + l
                                }
                            })
                        }, o) : e && clearInterval(e),
                        function() {
                            e && clearInterval(e)
                        }
                }, [b, l, u, o, k]), {
                    advanceTime: T,
                    isRunning: b,
                    pause: S,
                    reset: C,
                    start: w,
                    time: k
                }
            }
        },
        20282: function(e) {
            "use strict";
            e.exports = function() {}
        }
    }
]);
//# sourceMappingURL=9379.eebb0442.js.map