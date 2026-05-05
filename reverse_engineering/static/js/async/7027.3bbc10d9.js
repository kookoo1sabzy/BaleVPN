/*! For license information please see 7027.3bbc10d9.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0e41121b-89f6-470b-9a1e-5fa1dc5f0ac9", t._sentryDebugIdIdentifier = "sentry-dbid-0e41121b-89f6-470b-9a1e-5fa1dc5f0ac9")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7027"], {
        68414: function(t, e, n) {
            n.r(e), n.d(e, {
                DotLottieStateMachineManager: () => tQ
            });
            var i, r = n(51116),
                o = n(76275);
            n(47733), n(28924), n(36157);
            var a = n(47920);
            n(25260);
            var s = function() {
                return (s = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };

            function c(t, e) {
                var n = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
                return n
            }

            function u(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    i = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function h(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i, r, o = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return a
            }

            function l(t, e, n) {
                if (n || 2 == arguments.length)
                    for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                return t.concat(i || Array.prototype.slice.call(e))
            }(tL = tD || (tD = {})).Start = "xstate.start", tL.Stop = "xstate.stop", tL.Raise = "xstate.raise", tL.Send = "xstate.send", tL.Cancel = "xstate.cancel", tL.NullEvent = "", tL.Assign = "xstate.assign", tL.After = "xstate.after", tL.DoneState = "done.state", tL.DoneInvoke = "done.invoke", tL.Log = "xstate.log", tL.Init = "xstate.init", tL.Invoke = "xstate.invoke", tL.ErrorExecution = "error.execution", tL.ErrorCommunication = "error.communication", tL.ErrorPlatform = "error.platform", tL.ErrorCustom = "xstate.error", tL.Update = "xstate.update", tL.Pure = "xstate.pure", tL.Choose = "xstate.choose", (tI = tC || (tC = {})).Parent = "#_parent", tI.Internal = "#_internal";
            var f = tD.Start,
                d = tD.Stop,
                p = tD.Raise,
                v = tD.Send,
                y = tD.Cancel,
                g = tD.NullEvent,
                m = tD.Assign;
            tD.After, tD.DoneState;
            var b = tD.Log,
                _ = tD.Init,
                x = tD.Invoke;
            tD.ErrorExecution;
            var S = tD.ErrorPlatform,
                w = tD.ErrorCustom,
                E = tD.Update,
                O = tD.Choose,
                k = tD.Pure,
                T = {},
                N = "xstate.guard";

            function P(t, e, n) {
                void 0 === n && (n = ".");
                var i = L(t, n),
                    r = L(e, n);
                return X(r) ? !!X(i) && r === i : X(i) ? i in r : Object.keys(i).every(function(t) {
                    return t in r && P(i[t], r[t])
                })
            }

            function j(t) {
                try {
                    return X(t) || "number" == typeof t ? "".concat(t) : t.type
                } catch {
                    throw Error("Events must be strings or objects with a string event.type property.")
                }
            }

            function A(t, e) {
                try {
                    return F(t) ? t : t.toString().split(e)
                } catch {
                    throw Error("'".concat(t, "' is not a valid state path."))
                }
            }

            function L(t, e) {
                return "object" == typeof t && "value" in t && "context" in t && "event" in t && "_event" in t ? t.value : F(t) ? I(t) : "string" != typeof t ? t : I(A(t, e))
            }

            function I(t) {
                if (1 === t.length) return t[0];
                for (var e = {}, n = e, i = 0; i < t.length - 1; i++) i === t.length - 2 ? n[t[i]] = t[i + 1] : (n[t[i]] = {}, n = n[t[i]]);
                return e
            }

            function D(t, e) {
                for (var n = {}, i = Object.keys(t), r = 0; r < i.length; r++) {
                    var o = i[r];
                    n[o] = e(t[o], o, t, r)
                }
                return n
            }

            function C(t, e, n) {
                var i, r, o = {};
                try {
                    for (var a = u(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
                        var c = s.value,
                            h = t[c];
                        n(h) && (o[c] = e(h, c, t))
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = a.return) && r.call(a)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }
            var V = function(t) {
                return function(e) {
                    var n, i, r = e;
                    try {
                        for (var o = u(t), a = o.next(); !a.done; a = o.next()) r = r[a.value]
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (i = o.return) && i.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return r
                }
            };

            function M(t) {
                return t ? X(t) ? [
                    [t]
                ] : R(Object.keys(t).map(function(e) {
                    var n = t[e];
                    return "string" == typeof n || n && Object.keys(n).length ? M(t[e]).map(function(t) {
                        return [e].concat(t)
                    }) : [
                        [e]
                    ]
                })) : [
                    []
                ]
            }

            function R(t) {
                var e;
                return (e = []).concat.apply(e, l([], h(t), !1))
            }

            function z(t) {
                return void 0 === t ? [] : F(t) ? t : [t]
            }

            function U(t, e, n) {
                if ($(t)) return t(e, n.data);
                var i, r, o = {};
                try {
                    for (var a = u(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
                        var c = s.value,
                            h = t[c];
                        $(h) ? o[c] = h(e, n.data) : o[c] = h
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = a.return) && r.call(a)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function q(t) {
                return !!(t instanceof Promise || null !== t && ($(t) || "object" == typeof t) && $(t.then))
            }

            function B(t, e, n, i) {
                return t && n.reduce(function(t, n) {
                    var r, o, a = n.assignment,
                        s = {
                            state: i,
                            action: n,
                            _event: e
                        },
                        c = {};
                    if ($(a)) c = a(t, e.data, s);
                    else try {
                        for (var h = u(Object.keys(a)), l = h.next(); !l.done; l = h.next()) {
                            var f = l.value,
                                d = a[f];
                            c[f] = $(d) ? d(t, e.data, s) : d
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (o = h.return) && o.call(h)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return Object.assign({}, t, c)
                }, t)
            }
            var J = function() {};

            function F(t) {
                return Array.isArray(t)
            }

            function $(t) {
                return "function" == typeof t
            }

            function X(t) {
                return "string" == typeof t
            }

            function Q(t, e) {
                if (t) return X(t) ? {
                    type: N,
                    name: t,
                    predicate: e ? e[t] : void 0
                } : $(t) ? {
                    type: N,
                    name: t.name,
                    predicate: t
                } : t
            }
            var H = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function Y(t) {
                return !!t && "__xstatenode" in t
            }

            function G(t, e) {
                return X(t) || "number" == typeof t ? s({
                    type: t
                }, e) : t
            }

            function W(t, e) {
                if (!X(t) && "$$type" in t && "scxml" === t.$$type) return t;
                var n = G(t);
                return s({
                    name: n.type,
                    data: n,
                    $$type: "scxml",
                    type: "external"
                }, e)
            }

            function K(t, e) {
                return (F(e) ? e : [e]).map(function(e) {
                    return typeof e > "u" || "string" == typeof e || Y(e) ? {
                        target: e,
                        event: t
                    } : s(s({}, e), {
                        event: t
                    })
                })
            }

            function Z(t, e, n, i, r) {
                var o = t.options.guards,
                    a = {
                        state: r,
                        cond: e,
                        _event: i
                    };
                if (e.type === N) return ((null == o ? void 0 : o[e.name]) || e.predicate)(n, i.data, a);
                var s = null == o ? void 0 : o[e.type];
                if (!s) throw Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(t.id, "'."));
                return s(n, i.data, a)
            }

            function tt(t) {
                return "string" == typeof t ? {
                    type: t
                } : t
            }

            function te(t, e, n) {
                var i = function() {},
                    r = "object" == typeof t,
                    o = r ? t : null;
                return {
                    next: ((r ? t.next : t) || i).bind(o),
                    error: ((r ? t.error : e) || i).bind(o),
                    complete: ((r ? t.complete : n) || i).bind(o)
                }
            }

            function tn(t, e) {
                return "".concat(t, ":invocation[").concat(e, "]")
            }

            function ti(t) {
                return (t.type === p || t.type === v && t.to === tC.Internal) && "number" != typeof t.delay
            }(tV = {})[H] = function() {
                return this
            }, tV[Symbol.observable] = function() {
                return this
            };
            var tr = W({
                type: _
            });

            function to(t, e) {
                return e && e[t] || void 0
            }

            function ta(t, e) {
                var n;
                if (X(t) || "number" == typeof t) {
                    var i = to(t, e);
                    n = $(i) ? {
                        type: t,
                        exec: i
                    } : i || {
                        type: t,
                        exec: void 0
                    }
                } else if ($(t)) n = {
                    type: t.name || t.toString(),
                    exec: t
                };
                else {
                    var i = to(t.type, e);
                    if ($(i)) n = s(s({}, t), {
                        exec: i
                    });
                    else if (i) {
                        var r = i.type || t.type;
                        n = s(s(s({}, i), t), {
                            type: r
                        })
                    } else n = t
                }
                return n
            }
            var ts = function(t, e) {
                return t ? (F(t) ? t : [t]).map(function(t) {
                    return ta(t, e)
                }) : []
            };

            function tc(t) {
                var e = ta(t);
                return s(s({
                    id: X(t) ? t : e.id
                }, e), {
                    type: e.type
                })
            }

            function tu(t, e) {
                var n = "".concat(tD.DoneState, ".").concat(t),
                    i = {
                        type: n,
                        data: e
                    };
                return i.toString = function() {
                    return n
                }, i
            }

            function th(t, e) {
                var n = "".concat(tD.DoneInvoke, ".").concat(t),
                    i = {
                        type: n,
                        data: e
                    };
                return i.toString = function() {
                    return n
                }, i
            }

            function tl(t, e) {
                var n = "".concat(tD.ErrorPlatform, ".").concat(t),
                    i = {
                        type: n,
                        data: e
                    };
                return i.toString = function() {
                    return n
                }, i
            }
            var tf = function(t) {
                var e, n, i = [];
                try {
                    for (var r = u(t), o = r.next(); !o.done; o = r.next())
                        for (var a = o.value, s = 0; s < a.actions.length;) {
                            if (a.actions[s].type === m) {
                                i.push(a.actions[s]), a.actions.splice(s, 1);
                                continue
                            }
                            s++
                        }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            };

            function td(t, e, n, i, r, o, a) {
                void 0 === a && (a = !1);
                var c = a ? [] : tf(r),
                    f = c.length ? B(n, i, c, e) : n,
                    y = a ? [n] : void 0,
                    g = [];
                return [R(r.map(function(r) {
                    var c, _, x = [];
                    try {
                        for (var S = u(r.actions), w = S.next(); !w.done; w = S.next()) {
                            var E = w.value,
                                T = function(r, c) {
                                    var u;
                                    switch (c.type) {
                                        case p:
                                            var _ = function(t, e, n, i) {
                                                var r, o = {
                                                        _event: n
                                                    },
                                                    a = W($(t.event) ? t.event(e, n.data, o) : t.event);
                                                if (X(t.delay)) {
                                                    var c = i && i[t.delay];
                                                    r = $(c) ? c(e, n.data, o) : c
                                                } else r = $(t.delay) ? t.delay(e, n.data, o) : t.delay;
                                                return s(s({}, t), {
                                                    type: p,
                                                    _event: a,
                                                    delay: r
                                                })
                                            }(c, f, i, t.options.delays);
                                            return o && "number" == typeof _.delay && o(_, f, i), _;
                                        case v:
                                            var x = function(t, e, n, i) {
                                                var r, o = {
                                                        _event: n
                                                    },
                                                    a = W($(t.event) ? t.event(e, n.data, o) : t.event);
                                                if (X(t.delay)) {
                                                    var c = i && i[t.delay];
                                                    r = $(c) ? c(e, n.data, o) : c
                                                } else r = $(t.delay) ? t.delay(e, n.data, o) : t.delay;
                                                var u = $(t.to) ? t.to(e, n.data, o) : t.to;
                                                return s(s({}, t), {
                                                    to: u,
                                                    _event: a,
                                                    event: a.data,
                                                    delay: r
                                                })
                                            }(c, f, i, t.options.delays);
                                            return o && x.to !== tC.Internal && ("entry" === r ? g.push(x) : o(x, f, i)), x;
                                        case b:
                                            var S, w = (S = f, s(s({}, c), {
                                                value: X(c.expr) ? c.expr : c.expr(S, i.data, {
                                                    _event: i
                                                })
                                            }));
                                            return null == o || o(w, f, i), w;
                                        case O:
                                            var E = null == (u = c.conds.find(function(n) {
                                                var r = Q(n.cond, t.options.guards);
                                                return !r || Z(t, r, f, i, o ? void 0 : e)
                                            })) ? void 0 : u.actions;
                                            if (!E) return [];
                                            var T = h(td(t, e, f, i, [{
                                                    type: r,
                                                    actions: ts(z(E), t.options.actions)
                                                }], o, a), 2),
                                                N = T[0];
                                            return f = T[1], null == y || y.push(f), N;
                                        case k:
                                            var E = c.get(f, i.data);
                                            if (!E) return [];
                                            var P = h(td(t, e, f, i, [{
                                                    type: r,
                                                    actions: ts(z(E), t.options.actions)
                                                }], o, a), 2),
                                                j = P[0];
                                            return f = P[1], null == y || y.push(f), j;
                                        case d:
                                            var A, L, w = (A = f, L = $(c.activity) ? c.activity(A, i.data) : c.activity, {
                                                type: tD.Stop,
                                                activity: "string" == typeof L ? {
                                                    id: L
                                                } : L
                                            });
                                            return null == o || o(w, n, i), w;
                                        case m:
                                            f = B(f, i, [c], o ? void 0 : e), null == y || y.push(f);
                                            break;
                                        default:
                                            var I = ta(c, t.options.actions),
                                                D = I.exec;
                                            if (o) o(I, f, i);
                                            else if (D && y) {
                                                var C = y.length - 1;
                                                I = s(s({}, I), {
                                                    exec: function(t) {
                                                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                                        D.apply(void 0, l([y[C]], h(e), !1))
                                                    }
                                                })
                                            }
                                            return I
                                    }
                                }(r.type, E);
                            T && (x = x.concat(T))
                        }
                    } catch (t) {
                        c = {
                            error: t
                        }
                    } finally {
                        try {
                            w && !w.done && (_ = S.return) && _.call(S)
                        } finally {
                            if (c) throw c.error
                        }
                    }
                    return g.forEach(function(t) {
                        o(t, f, i)
                    }), g.length = 0, x
                })), f]
            }
            var tp = function(t, e) {
                return e(t)
            };

            function tv(t) {
                var e;
                return (e = {
                    id: t,
                    send: function() {},
                    subscribe: function() {
                        return {
                            unsubscribe: function() {}
                        }
                    },
                    getSnapshot: function() {},
                    toJSON: function() {
                        return {
                            id: t
                        }
                    }
                })[H] = function() {
                    return this
                }, e
            }

            function ty(t, e, n) {
                var i = tv(e);
                if (i.deferred = !0, Y(t)) {
                    var r = i.state = tp(void 0, function() {
                        return (n ? t.withContext(n) : t).initialState
                    });
                    i.getSnapshot = function() {
                        return r
                    }
                }
                return i
            }
            var tg = function(t) {
                return "atomic" === t.type || "final" === t.type
            };

            function tm(t) {
                return Object.keys(t.states).map(function(e) {
                    return t.states[e]
                })
            }

            function tb(t) {
                return tm(t).filter(function(t) {
                    return "history" !== t.type
                })
            }

            function t_(t, e) {
                var n, i, r, o, a, s, c, h, l = tx(new Set(t)),
                    f = new Set(e);
                try {
                    for (var d = u(f), p = d.next(); !p.done; p = d.next())
                        for (var v = p.value, y = v.parent; y && !f.has(y);) f.add(y), y = y.parent
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        p && !p.done && (i = d.return) && i.call(d)
                    } finally {
                        if (n) throw n.error
                    }
                }
                var g = tx(f);
                try {
                    for (var m = u(f), b = m.next(); !b.done; b = m.next()) {
                        var v = b.value;
                        if ("compound" !== v.type || g.get(v) && g.get(v).length) {
                            if ("parallel" === v.type) try {
                                for (var _ = (a = void 0, u(tb(v))), x = _.next(); !x.done; x = _.next()) {
                                    var S = x.value;
                                    f.has(S) || (f.add(S), l.get(S) ? l.get(S).forEach(function(t) {
                                        return f.add(t)
                                    }) : S.initialStateNodes.forEach(function(t) {
                                        return f.add(t)
                                    }))
                                }
                            } catch (t) {
                                a = {
                                    error: t
                                }
                            } finally {
                                try {
                                    x && !x.done && (s = _.return) && s.call(_)
                                } finally {
                                    if (a) throw a.error
                                }
                            }
                        } else l.get(v) ? l.get(v).forEach(function(t) {
                            return f.add(t)
                        }) : v.initialStateNodes.forEach(function(t) {
                            return f.add(t)
                        })
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        b && !b.done && (o = m.return) && o.call(m)
                    } finally {
                        if (r) throw r.error
                    }
                }
                try {
                    for (var w = u(f), E = w.next(); !E.done; E = w.next())
                        for (var v = E.value, y = v.parent; y && !f.has(y);) f.add(y), y = y.parent
                } catch (t) {
                    c = {
                        error: t
                    }
                } finally {
                    try {
                        E && !E.done && (h = w.return) && h.call(w)
                    } finally {
                        if (c) throw c.error
                    }
                }
                return f
            }

            function tx(t) {
                var e, n, i = new Map;
                try {
                    for (var r = u(t), o = r.next(); !o.done; o = r.next()) {
                        var a = o.value;
                        i.has(a) || i.set(a, []), a.parent && (i.has(a.parent) || i.set(a.parent, []), i.get(a.parent).push(a))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            }

            function tS(t, e) {
                return Array.isArray(t) ? t.some(function(t) {
                    return t === e
                }) : t instanceof Set && t.has(e)
            }

            function tw(t, e) {
                return "compound" === e.type ? tb(e).some(function(e) {
                    return "final" === e.type && tS(t, e)
                }) : "parallel" === e.type && tb(e).every(function(e) {
                    return tw(t, e)
                })
            }

            function tE(t) {
                return new Set(R(t.map(function(t) {
                    return t.tags
                })))
            }
            var tO = function() {
                    function t(t) {
                        var e, n, i = this;
                        this.actions = [], this.activities = T, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || T, this.meta = (void 0 === (e = t.configuration) && (e = []), e.reduce(function(t, e) {
                            return void 0 !== e.meta && (t[e.id] = e.meta), t
                        }, {})), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = null != (n = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) ? n : new Set, this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
                            get: function() {
                                return l([], h(new Set(R(l([], h(i.configuration.map(function(t) {
                                    return t.ownEvents
                                })), !1)))), !1)
                            }
                        })
                    }
                    return t.from = function(e, n) {
                        return e instanceof t ? e.context !== n ? new t({
                            value: e.value,
                            context: n,
                            _event: e._event,
                            _sessionid: null,
                            historyValue: e.historyValue,
                            history: e.history,
                            actions: [],
                            activities: e.activities,
                            meta: {},
                            events: [],
                            configuration: [],
                            transitions: [],
                            children: {}
                        }) : e : new t({
                            value: e,
                            context: n,
                            _event: tr,
                            _sessionid: null,
                            historyValue: void 0,
                            history: void 0,
                            actions: [],
                            activities: void 0,
                            meta: void 0,
                            events: [],
                            configuration: [],
                            transitions: [],
                            children: {}
                        })
                    }, t.create = function(e) {
                        return new t(e)
                    }, t.inert = function(e, n) {
                        return e instanceof t ? e.actions.length ? new t({
                            value: e.value,
                            context: n,
                            _event: tr,
                            _sessionid: null,
                            historyValue: e.historyValue,
                            history: e.history,
                            activities: e.activities,
                            configuration: e.configuration,
                            transitions: [],
                            children: {}
                        }) : e : t.from(e, n)
                    }, t.prototype.toStrings = function(t, e) {
                        var n = this;
                        if (void 0 === t && (t = this.value), void 0 === e && (e = "."), X(t)) return [t];
                        var i = Object.keys(t);
                        return i.concat.apply(i, l([], h(i.map(function(i) {
                            return n.toStrings(t[i], e).map(function(t) {
                                return i + e + t
                            })
                        })), !1))
                    }, t.prototype.toJSON = function() {
                        this.configuration, this.transitions;
                        var t = this.tags;
                        this.machine;
                        var e = c(this, ["configuration", "transitions", "tags", "machine"]);
                        return s(s({}, e), {
                            tags: Array.from(t)
                        })
                    }, t.prototype.matches = function(t) {
                        return P(t, this.value)
                    }, t.prototype.hasTag = function(t) {
                        return this.tags.has(t)
                    }, t.prototype.can = function(t) {
                        J(!!this.machine);
                        var e, n = null == (e = this.machine) ? void 0 : e.getTransitionData(this, t);
                        return !!(null != n && n.transitions.length) && n.transitions.some(function(t) {
                            return void 0 !== t.target || t.actions.length
                        })
                    }, t
                }(),
                tk = {
                    deferEvents: !1
                },
                tT = function() {
                    function t(t) {
                        this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = s(s({}, tk), t)
                    }
                    return t.prototype.initialize = function(t) {
                        if (this.initialized = !0, t) {
                            if (!this.options.deferEvents) return void this.schedule(t);
                            this.process(t)
                        }
                        this.flushEvents()
                    }, t.prototype.schedule = function(t) {
                        if (!this.initialized || this.processingEvent) return void this.queue.push(t);
                        if (0 !== this.queue.length) throw Error("Event queue should be empty when it is not processing events");
                        this.process(t), this.flushEvents()
                    }, t.prototype.clear = function() {
                        this.queue = []
                    }, t.prototype.flushEvents = function() {
                        for (var t = this.queue.shift(); t;) this.process(t), t = this.queue.shift()
                    }, t.prototype.process = function(t) {
                        this.processingEvent = !0;
                        try {
                            t()
                        } catch (t) {
                            throw this.clear(), t
                        } finally {
                            this.processingEvent = !1
                        }
                    }, t
                }(),
                tN = new Map,
                tP = 0,
                tj = function(t) {
                    tN.delete(t)
                };

            function tA() {
                return "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : "u" > typeof n.g ? n.g : void 0
            }
            var tL, tI, tD, tC, tV, tM, tR = {
                sync: !1,
                autoForward: !1
            };
            (i = tM || (tM = {}))[i.NotStarted = 0] = "NotStarted", i[i.Running = 1] = "Running", i[i.Stopped = 2] = "Stopped";
            var tz = function() {
                function t(e, n) {
                    void 0 === n && (n = t.defaultOptions);
                    var i = this;
                    this.machine = e, this.delayedEventsMap = {}, this.listeners = new Set, this.contextListeners = new Set, this.stopListeners = new Set, this.doneListeners = new Set, this.eventListeners = new Set, this.sendListeners = new Set, this.initialized = !1, this.status = tM.NotStarted, this.children = new Map, this.forwardTo = new Set, this._outgoingQueue = [], this.init = this.start, this.send = function(t, e) {
                        if (F(t)) return i.batch(t), i.state;
                        var n = W(G(t, e));
                        if (i.status === tM.Stopped) return i.state;
                        if (i.status !== tM.Running && !i.options.deferEvents) throw Error('Event "'.concat(n.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(n.data)));
                        return i.scheduler.schedule(function() {
                            i.forward(n);
                            var t = i._nextState(n);
                            i.update(t, n)
                        }), i._state
                    }, this.sendTo = function(t, e, n) {
                        var r, o = i.parent && (e === tC.Parent || i.parent.id === e),
                            a = o ? i.parent : X(e) ? e === tC.Internal ? i : i.children.get(e) || (r = e, tN.get(r)) : e && "function" == typeof e.send ? e : void 0;
                        if (!a) {
                            if (!o) throw Error("Unable to send event to child '".concat(e, "' from service '").concat(i.id, "'."));
                            return
                        }
                        if ("machine" in a) {
                            if (i.status !== tM.Stopped || i.parent !== a || i.state.done) {
                                var c = s(s({}, t), {
                                    name: t.name === w ? "".concat(tl(i.id)) : t.name,
                                    origin: i.sessionId
                                });
                                !n && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([a, c]) : a.send(c)
                            }
                        } else !n && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([a, t.data]) : a.send(t.data)
                    }, this._exec = function(t, e, n, r) {
                        void 0 === r && (r = i.machine.options.actions);
                        var o = t.exec || to(t.type, r),
                            a = $(o) ? o : o ? o.exec : t.exec;
                        if (a) try {
                            return a(e, n.data, i.machine.config.predictableActionArguments ? {
                                action: t,
                                _event: n
                            } : {
                                action: t,
                                state: i.state,
                                _event: n
                            })
                        } catch (t) {
                            throw i.parent && i.parent.send({
                                type: "xstate.error",
                                data: t
                            }), t
                        }
                        switch (t.type) {
                            case p:
                                i.defer(t);
                                break;
                            case v:
                                if ("number" == typeof t.delay) return void i.defer(t);
                                t.to ? i.sendTo(t._event, t.to, n === tr) : i.send(t._event);
                                break;
                            case y:
                                i.cancel(t.sendId);
                                break;
                            case f:
                                if (i.status !== tM.Running) return;
                                var s = t.activity;
                                if (!i.machine.config.predictableActionArguments && !i.state.activities[s.id || s.type]) break;
                                if (s.type === tD.Invoke) {
                                    var c = tt(s.src),
                                        u = i.machine.options.services ? i.machine.options.services[c.type] : void 0,
                                        h = s.id,
                                        l = s.data,
                                        g = "autoForward" in s ? s.autoForward : !!s.forward;
                                    if (!u) return;
                                    var m = l ? U(l, e, n) : void 0;
                                    if ("string" == typeof u) return;
                                    var _ = $(u) ? u(e, n.data, {
                                        data: m,
                                        src: c,
                                        meta: s.meta
                                    }) : u;
                                    if (!_) return;
                                    var x = void 0;
                                    Y(_) && (_ = m ? _.withContext(m) : _, x = {
                                        autoForward: g
                                    }), i.spawn(_, h, x)
                                } else i.spawnActivity(s);
                                break;
                            case d:
                                i.stopChild(t.activity.id);
                                break;
                            case b:
                                var S = t.label,
                                    w = t.value;
                                S ? i.logger(S, w) : i.logger(w)
                        }
                    };
                    var r = s(s({}, t.defaultOptions), n),
                        o = r.clock,
                        a = r.logger,
                        c = r.parent,
                        u = r.id,
                        h = void 0 !== u ? u : e.id;
                    this.id = h, this.logger = a, this.clock = o, this.parent = c, this.options = r, this.scheduler = new tT({
                        deferEvents: this.options.deferEvents
                    }), this.sessionId = "x:".concat(tP++)
                }
                return Object.defineProperty(t.prototype, "initialState", {
                    get: function() {
                        var t = this;
                        return this._initialState ? this._initialState : tp(this, function() {
                            return t._initialState = t.machine.initialState, t._initialState
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "state", {
                    get: function() {
                        return this._state
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.execute = function(t, e) {
                    var n, i;
                    try {
                        for (var r = u(t.actions), o = r.next(); !o.done; o = r.next()) {
                            var a = o.value;
                            this.exec(a, t, e)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (i = r.return) && i.call(r)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, t.prototype.update = function(t, e) {
                    var n, i, r, o, a, s, c, h, l = this;
                    if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || e === tr) && this.options.execute) this.execute(this.state);
                    else
                        for (var f = void 0; f = this._outgoingQueue.shift();) f[0].send(f[1]);
                    if (this.children.forEach(function(t) {
                            l.state.children[t.id] = t
                        }), this.devTools && this.devTools.send(e.data, t), t.event) try {
                        for (var d = u(this.eventListeners), p = d.next(); !p.done; p = d.next()) {
                            var v = p.value;
                            v(t.event)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            p && !p.done && (i = d.return) && i.call(d)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    try {
                        for (var y = u(this.listeners), g = y.next(); !g.done; g = y.next()) {
                            var v = g.value;
                            v(t, t.event)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            g && !g.done && (o = y.return) && o.call(y)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    try {
                        for (var m = u(this.contextListeners), b = m.next(); !b.done; b = m.next())(0, b.value)(this.state.context, this.state.history ? this.state.history.context : void 0)
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            b && !b.done && (s = m.return) && s.call(m)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    if (this.state.done) {
                        var _ = t.configuration.find(function(t) {
                                return "final" === t.type && t.parent === l.machine
                            }),
                            x = _ && _.doneData ? U(_.doneData, t.context, e) : void 0;
                        this._doneEvent = th(this.id, x);
                        try {
                            for (var S = u(this.doneListeners), w = S.next(); !w.done; w = S.next()) {
                                var v = w.value;
                                v(this._doneEvent)
                            }
                        } catch (t) {
                            c = {
                                error: t
                            }
                        } finally {
                            try {
                                w && !w.done && (h = S.return) && h.call(S)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                        this._stop(), this._stopChildren(), tj(this.sessionId)
                    }
                }, t.prototype.onTransition = function(t) {
                    return this.listeners.add(t), this.status === tM.Running && t(this.state, this.state.event), this
                }, t.prototype.subscribe = function(t, e, n) {
                    var i = this,
                        r = te(t, e, n);
                    this.listeners.add(r.next), this.status !== tM.NotStarted && r.next(this.state);
                    var o = function() {
                        i.doneListeners.delete(o), i.stopListeners.delete(o), r.complete()
                    };
                    return this.status === tM.Stopped ? r.complete() : (this.onDone(o), this.onStop(o)), {
                        unsubscribe: function() {
                            i.listeners.delete(r.next), i.doneListeners.delete(o), i.stopListeners.delete(o)
                        }
                    }
                }, t.prototype.onEvent = function(t) {
                    return this.eventListeners.add(t), this
                }, t.prototype.onSend = function(t) {
                    return this.sendListeners.add(t), this
                }, t.prototype.onChange = function(t) {
                    return this.contextListeners.add(t), this
                }, t.prototype.onStop = function(t) {
                    return this.stopListeners.add(t), this
                }, t.prototype.onDone = function(t) {
                    return this.status === tM.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this
                }, t.prototype.off = function(t) {
                    return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this
                }, t.prototype.start = function(t) {
                    var e, n, i = this;
                    if (this.status === tM.Running) return this;
                    this.machine._init(), e = this.sessionId, n = this, tN.set(e, n), this.initialized = !0, this.status = tM.Running;
                    var r = void 0 === t ? this.initialState : tp(this, function() {
                        return "object" == typeof t && null !== t && "value" in t && "_event" in t ? i.machine.resolveState(t) : i.machine.resolveState(tO.from(t, i.machine.context))
                    });
                    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
                        i.update(r, tr)
                    }), this
                }, t.prototype._stopChildren = function() {
                    this.children.forEach(function(t) {
                        $(t.stop) && t.stop()
                    }), this.children.clear()
                }, t.prototype._stop = function() {
                    var t, e, n, i, r, o, a, s, c, h;
                    try {
                        for (var l = u(this.listeners), f = l.next(); !f.done; f = l.next()) {
                            var d = f.value;
                            this.listeners.delete(d)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (e = l.return) && e.call(l)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    try {
                        for (var p = u(this.stopListeners), v = p.next(); !v.done; v = p.next()) {
                            var d = v.value;
                            d(), this.stopListeners.delete(d)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            v && !v.done && (i = p.return) && i.call(p)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    try {
                        for (var y = u(this.contextListeners), g = y.next(); !g.done; g = y.next()) {
                            var d = g.value;
                            this.contextListeners.delete(d)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            g && !g.done && (o = y.return) && o.call(y)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    try {
                        for (var m = u(this.doneListeners), b = m.next(); !b.done; b = m.next()) {
                            var d = b.value;
                            this.doneListeners.delete(d)
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            b && !b.done && (s = m.return) && s.call(m)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    if (!this.initialized) return this;
                    this.initialized = !1, this.status = tM.Stopped, this._initialState = void 0;
                    try {
                        for (var _ = u(Object.keys(this.delayedEventsMap)), x = _.next(); !x.done; x = _.next()) {
                            var S = x.value;
                            this.clock.clearTimeout(this.delayedEventsMap[S])
                        }
                    } catch (t) {
                        c = {
                            error: t
                        }
                    } finally {
                        try {
                            x && !x.done && (h = _.return) && h.call(_)
                        } finally {
                            if (c) throw c.error
                        }
                    }
                    this.scheduler.clear(), this.scheduler = new tT({
                        deferEvents: this.options.deferEvents
                    })
                }, t.prototype.stop = function() {
                    var t = this,
                        e = this.scheduler;
                    return this._stop(), e.schedule(function() {
                        var e = W({
                                type: "xstate.stop"
                            }),
                            n = tp(t, function() {
                                var n = R(l([], h(t.state.configuration), !1).sort(function(t, e) {
                                        return e.order - t.order
                                    }).map(function(e) {
                                        return ts(e.onExit, t.machine.options.actions)
                                    })),
                                    i = h(td(t.machine, t.state, t.state.context, e, [{
                                        type: "exit",
                                        actions: n
                                    }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2),
                                    r = i[0],
                                    o = i[1],
                                    a = new tO({
                                        value: t.state.value,
                                        context: o,
                                        _event: e,
                                        _sessionid: t.sessionId,
                                        historyValue: void 0,
                                        history: t.state,
                                        actions: r.filter(function(t) {
                                            return !ti(t)
                                        }),
                                        activities: {},
                                        events: [],
                                        configuration: [],
                                        transitions: [],
                                        children: {},
                                        done: t.state.done,
                                        tags: t.state.tags,
                                        machine: t.machine
                                    });
                                return a.changed = !0, a
                            });
                        t.update(n, e), t._stopChildren(), tj(t.sessionId)
                    }), this
                }, t.prototype.batch = function(t) {
                    var e = this;
                    if (this.status === tM.NotStarted && this.options.deferEvents);
                    else if (this.status !== tM.Running) throw Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
                    if (t.length) {
                        var n = !!this.machine.config.predictableActionArguments && this._exec;
                        this.scheduler.schedule(function() {
                            var i, r, o = e.state,
                                a = !1,
                                c = [];
                            try {
                                for (var f = u(t), d = f.next(); !d.done; d = f.next()) {
                                    var p = d.value;
                                    ! function(t) {
                                        var i = W(t);
                                        e.forward(i), o = tp(e, function() {
                                            return e.machine.transition(o, i, void 0, n || void 0)
                                        }), c.push.apply(c, l([], h(e.machine.config.predictableActionArguments ? o.actions : o.actions.map(function(t) {
                                            var e, n;
                                            return e = o, n = t.exec, s(s({}, t), {
                                                exec: void 0 !== n ? function() {
                                                    return n(e.context, e.event, {
                                                        action: t,
                                                        state: e,
                                                        _event: e._event
                                                    })
                                                } : void 0
                                            })
                                        })), !1)), a = a || !!o.changed
                                    }(p)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    d && !d.done && (r = f.return) && r.call(f)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                            o.changed = a, o.actions = c, e.update(o, W(t[t.length - 1]))
                        })
                    }
                }, t.prototype.sender = function(t) {
                    return this.send.bind(this, t)
                }, t.prototype._nextState = function(t, e) {
                    var n = this;
                    void 0 === e && (e = !!this.machine.config.predictableActionArguments && this._exec);
                    var i = W(t);
                    if (0 === i.name.indexOf(S) && !this.state.nextEvents.some(function(t) {
                            return 0 === t.indexOf(S)
                        })) throw i.data.data;
                    return tp(this, function() {
                        return n.machine.transition(n.state, i, void 0, e || void 0)
                    })
                }, t.prototype.nextState = function(t) {
                    return this._nextState(t, !1)
                }, t.prototype.forward = function(t) {
                    var e, n;
                    try {
                        for (var i = u(this.forwardTo), r = i.next(); !r.done; r = i.next()) {
                            var o = r.value,
                                a = this.children.get(o);
                            if (!a) throw Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(o, "'."));
                            a.send(t)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                }, t.prototype.defer = function(t) {
                    var e = this,
                        n = this.clock.setTimeout(function() {
                            "to" in t && t.to ? e.sendTo(t._event, t.to, !0) : e.send(t._event)
                        }, t.delay);
                    t.id && (this.delayedEventsMap[t.id] = n)
                }, t.prototype.cancel = function(t) {
                    this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t]
                }, t.prototype.exec = function(t, e, n) {
                    void 0 === n && (n = this.machine.options.actions), this._exec(t, e.context, e._event, n)
                }, t.prototype.removeChild = function(t) {
                    var e;
                    this.children.delete(t), this.forwardTo.delete(t), null == (e = this.state) || delete e.children[t]
                }, t.prototype.stopChild = function(t) {
                    var e = this.children.get(t);
                    e && (this.removeChild(t), $(e.stop) && e.stop())
                }, t.prototype.spawn = function(t, e, n) {
                    if (this.status !== tM.Running) return ty(t, e);
                    if (q(t)) return this.spawnPromise(Promise.resolve(t), e);
                    if ($(t)) return this.spawnCallback(t, e);
                    if (function(t) {
                            try {
                                return "function" == typeof t.send
                            } catch {
                                return !1
                            }
                        }(t) && "id" in t) return this.spawnActor(t, e);
                    if (function(t) {
                            try {
                                return "subscribe" in t && $(t.subscribe)
                            } catch {
                                return !1
                            }
                        }(t)) return this.spawnObservable(t, e);
                    if (Y(t)) return this.spawnMachine(t, s(s({}, n), {
                        id: e
                    }));
                    if (null !== t && "object" == typeof t && "transition" in t && "function" == typeof t.transition) return this.spawnBehavior(t, e);
                    throw Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'))
                }, t.prototype.spawnMachine = function(e, n) {
                    var i = this;
                    void 0 === n && (n = {});
                    var r = new t(e, s(s({}, this.options), {
                            parent: this,
                            id: n.id || e.id
                        })),
                        o = s(s({}, tR), n);
                    return o.sync && r.onTransition(function(t) {
                        i.send(E, {
                            state: t,
                            id: r.id
                        })
                    }), this.children.set(r.id, r), o.autoForward && this.forwardTo.add(r.id), r.onDone(function(t) {
                        i.removeChild(r.id), i.send(W(t, {
                            origin: r.id
                        }))
                    }).start(), r
                }, t.prototype.spawnBehavior = function(t, e) {
                    var n, i, r, o, a, c, u, h, l, f, d = (n = {
                        id: e,
                        parent: this
                    }, o = t.initialState, a = new Set, c = [], u = !1, h = function() {
                        if (!u) {
                            for (u = !0; c.length > 0;) {
                                var e = c.shift();
                                o = t.transition(o, e, f), a.forEach(function(t) {
                                    return t.next(o)
                                })
                            }
                            u = !1
                        }
                    }, i = {
                        id: n.id,
                        send: function(t) {
                            c.push(t), h()
                        },
                        getSnapshot: function() {
                            return o
                        },
                        subscribe: function(t, e, n) {
                            var i = te(t, e, n);
                            return a.add(i), i.next(o), {
                                unsubscribe: function() {
                                    a.delete(i)
                                }
                            }
                        }
                    }, l = s(((r = {
                        subscribe: function() {
                            return {
                                unsubscribe: function() {}
                            }
                        },
                        id: "anonymous",
                        getSnapshot: function() {}
                    })[H] = function() {
                        return this
                    }, r), i), f = {
                        parent: n.parent,
                        self: l,
                        id: n.id || "anonymous",
                        observers: a
                    }, o = t.start ? t.start(f) : o, l);
                    return this.children.set(e, d), d
                }, t.prototype.spawnPromise = function(t, e) {
                    var n, i, r = this,
                        o = !1;
                    t.then(function(t) {
                        o || (i = t, r.removeChild(e), r.send(W(th(e, t), {
                            origin: e
                        })))
                    }, function(t) {
                        if (!o) {
                            r.removeChild(e);
                            var n = tl(e, t);
                            try {
                                r.send(W(n, {
                                    origin: e
                                }))
                            } catch (t) {
                                r.devTools && r.devTools.send(n, r.state), r.machine.strict && r.stop()
                            }
                        }
                    });
                    var a = ((n = {
                        id: e,
                        send: function() {},
                        subscribe: function(e, n, i) {
                            var r = te(e, n, i),
                                o = !1;
                            return t.then(function(t) {
                                o || (r.next(t), o || r.complete())
                            }, function(t) {
                                o || r.error(t)
                            }), {
                                unsubscribe: function() {
                                    return o = !0
                                }
                            }
                        },
                        stop: function() {
                            o = !0
                        },
                        toJSON: function() {
                            return {
                                id: e
                            }
                        },
                        getSnapshot: function() {
                            return i
                        }
                    })[H] = function() {
                        return this
                    }, n);
                    return this.children.set(e, a), a
                }, t.prototype.spawnCallback = function(t, e) {
                    var n, i, r, o = this,
                        a = !1,
                        s = new Set,
                        c = new Set;
                    try {
                        r = t(function(t) {
                            i = t, c.forEach(function(e) {
                                return e(t)
                            }), a || o.send(W(t, {
                                origin: e
                            }))
                        }, function(t) {
                            s.add(t)
                        })
                    } catch (t) {
                        this.send(tl(e, t))
                    }
                    if (q(r)) return this.spawnPromise(r, e);
                    var u = ((n = {
                        id: e,
                        send: function(t) {
                            return s.forEach(function(e) {
                                return e(t)
                            })
                        },
                        subscribe: function(t) {
                            var e = te(t);
                            return c.add(e.next), {
                                unsubscribe: function() {
                                    c.delete(e.next)
                                }
                            }
                        },
                        stop: function() {
                            a = !0, $(r) && r()
                        },
                        toJSON: function() {
                            return {
                                id: e
                            }
                        },
                        getSnapshot: function() {
                            return i
                        }
                    })[H] = function() {
                        return this
                    }, n);
                    return this.children.set(e, u), u
                }, t.prototype.spawnObservable = function(t, e) {
                    var n, i, r = this,
                        o = t.subscribe(function(t) {
                            i = t, r.send(W(t, {
                                origin: e
                            }))
                        }, function(t) {
                            r.removeChild(e), r.send(W(tl(e, t), {
                                origin: e
                            }))
                        }, function() {
                            r.removeChild(e), r.send(W(th(e), {
                                origin: e
                            }))
                        }),
                        a = ((n = {
                            id: e,
                            send: function() {},
                            subscribe: function(e, n, i) {
                                return t.subscribe(e, n, i)
                            },
                            stop: function() {
                                return o.unsubscribe()
                            },
                            getSnapshot: function() {
                                return i
                            },
                            toJSON: function() {
                                return {
                                    id: e
                                }
                            }
                        })[H] = function() {
                            return this
                        }, n);
                    return this.children.set(e, a), a
                }, t.prototype.spawnActor = function(t, e) {
                    return this.children.set(e, t), t
                }, t.prototype.spawnActivity = function(t) {
                    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
                    if (e) {
                        var n = e(this.state.context, t);
                        this.spawnEffect(t.id, n)
                    }
                }, t.prototype.spawnEffect = function(t, e) {
                    var n;
                    this.children.set(t, ((n = {
                        id: t,
                        send: function() {},
                        subscribe: function() {
                            return {
                                unsubscribe: function() {}
                            }
                        },
                        stop: e || void 0,
                        getSnapshot: function() {},
                        toJSON: function() {
                            return {
                                id: t
                            }
                        }
                    })[H] = function() {
                        return this
                    }, n))
                }, t.prototype.attachDev = function() {
                    var t = tA();
                    if (this.options.devTools && t) {
                        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
                            var e = "object" == typeof this.options.devTools ? this.options.devTools : void 0;
                            this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(s(s({
                                name: this.id,
                                autoPause: !0,
                                stateSanitizer: function(t) {
                                    return {
                                        value: t.value,
                                        context: t.context,
                                        actions: t.actions
                                    }
                                }
                            }, e), {
                                features: s({
                                    jump: !1,
                                    skip: !1
                                }, e ? e.features : void 0)
                            }), this.machine), this.devTools.init(this.state)
                        }
                        if (tA()) {
                            var n = function() {
                                var t = tA();
                                if (t && "__xstate__" in t) return t.__xstate__
                            }();
                            n && n.register(this)
                        }
                    }
                }, t.prototype.toJSON = function() {
                    return {
                        id: this.id
                    }
                }, t.prototype[H] = function() {
                    return this
                }, t.prototype.getSnapshot = function() {
                    return this.status === tM.NotStarted ? this.initialState : this._state
                }, t.defaultOptions = {
                    execute: !0,
                    deferEvents: !0,
                    clock: {
                        setTimeout: function(t, e) {
                            return setTimeout(t, e)
                        },
                        clearTimeout: function(t) {
                            return clearTimeout(t)
                        }
                    },
                    logger: console.log.bind(console),
                    devTools: !1
                }, t.interpret = tU, t
            }();

            function tU(t, e) {
                return new tz(t, e)
            }

            function tq(t) {
                return s(s({
                    type: x
                }, t), {
                    toJSON: function() {
                        t.onDone, t.onError;
                        var e = c(t, ["onDone", "onError"]);
                        return s(s({}, e), {
                            type: x,
                            src: function(t) {
                                if ("string" == typeof t) {
                                    var e = {
                                        type: t
                                    };
                                    return e.toString = function() {
                                        return t
                                    }, e
                                }
                                return t
                            }(t.src)
                        })
                    }
                })
            }
            var tB = {},
                tJ = function(t) {
                    return "#" === t[0]
                },
                tF = function() {
                    function t(e, n, i, r) {
                        void 0 === i && (i = "context" in e ? e.context : void 0);
                        var o, a = this;
                        this.config = e, this._context = i, this.order = -1, this.__xstatenode = !0, this.__cache = {
                            events: void 0,
                            relativeValue: new Map,
                            initialStateValue: void 0,
                            initialState: void 0,
                            on: void 0,
                            transitions: void 0,
                            candidates: {},
                            delayedTransitions: void 0
                        }, this.idMap = {}, this.tags = [], this.options = Object.assign({
                            actions: {},
                            guards: {},
                            services: {},
                            activities: {},
                            delays: {}
                        }, n), this.parent = null == r ? void 0 : r.parent, this.key = this.config.key || (null == r ? void 0 : r.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : "."), this.id = this.config.id || l([this.machine.key], h(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : null != (o = this.config.schema) ? o : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? D(this.config.states, function(e, n) {
                            var i, r = new t(e, {}, void 0, {
                                parent: a,
                                key: n
                            });
                            return Object.assign(a.idMap, s(((i = {})[r.id] = r, i), r.idMap)), r
                        }) : tB;
                        var c = 0;
                        (function t(e) {
                            var n, i;
                            e.order = c++;
                            try {
                                for (var r = u(tm(e)), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    t(a)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (i = r.return) && i.call(r)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        })(this), this.history = !0 === this.config.history ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || !!this.config.on && (Array.isArray(this.config.on) ? this.config.on.some(function(t) {
                            return "" === t.event
                        }) : "" in this.config.on), this.strict = !!this.config.strict, this.onEntry = z(this.config.entry || this.config.onEntry).map(function(t) {
                            return ta(t)
                        }), this.onExit = z(this.config.exit || this.config.onExit).map(function(t) {
                            return ta(t)
                        }), this.meta = this.config.meta, this.doneData = "final" === this.type ? this.config.data : void 0, this.invoke = z(this.config.invoke).map(function(t, e) {
                            if (Y(t)) {
                                var n, i, r = tn(a.id, e);
                                return a.machine.options.services = s(((n = {})[r] = t, n), a.machine.options.services), tq({
                                    src: r,
                                    id: r
                                })
                            }
                            if (X(t.src)) {
                                var r = t.id || tn(a.id, e);
                                return tq(s(s({}, t), {
                                    id: r,
                                    src: t.src
                                }))
                            }
                            if (Y(t.src) || $(t.src)) {
                                var r = t.id || tn(a.id, e);
                                return a.machine.options.services = s(((i = {})[r] = t.src, i), a.machine.options.services), tq(s(s({
                                    id: r
                                }, t), {
                                    src: r
                                }))
                            }
                            var o = t.src;
                            return tq(s(s({
                                id: tn(a.id, e)
                            }, t), {
                                src: o
                            }))
                        }), this.activities = z(this.config.activities).concat(this.invoke).map(function(t) {
                            return tc(t)
                        }), this.transition = this.transition.bind(this), this.tags = z(this.config.tags)
                    }
                    return t.prototype._init = function() {
                        this.__cache.transitions || (function t(e) {
                            var n = [e];
                            return tg(e) ? n : n.concat(R(tb(e).map(t)))
                        })(this).forEach(function(t) {
                            return t.on
                        })
                    }, t.prototype.withConfig = function(e, n) {
                        var i = this.options,
                            r = i.actions,
                            o = i.activities,
                            a = i.guards,
                            c = i.services,
                            u = i.delays;
                        return new t(this.config, {
                            actions: s(s({}, r), e.actions),
                            activities: s(s({}, o), e.activities),
                            guards: s(s({}, a), e.guards),
                            services: s(s({}, c), e.services),
                            delays: s(s({}, u), e.delays)
                        }, null != n ? n : this.context)
                    }, t.prototype.withContext = function(e) {
                        return new t(this.config, this.options, e)
                    }, Object.defineProperty(t.prototype, "context", {
                        get: function() {
                            return $(this._context) ? this._context() : this._context
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "definition", {
                        get: function() {
                            return {
                                id: this.id,
                                key: this.key,
                                version: this.version,
                                context: this.context,
                                type: this.type,
                                initial: this.initial,
                                history: this.history,
                                states: D(this.states, function(t) {
                                    return t.definition
                                }),
                                on: this.on,
                                transitions: this.transitions,
                                entry: this.onEntry,
                                exit: this.onExit,
                                activities: this.activities || [],
                                meta: this.meta,
                                order: this.order || -1,
                                data: this.doneData,
                                invoke: this.invoke,
                                description: this.description,
                                tags: this.tags
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.toJSON = function() {
                        return this.definition
                    }, Object.defineProperty(t.prototype, "on", {
                        get: function() {
                            if (this.__cache.on) return this.__cache.on;
                            var t = this.transitions;
                            return this.__cache.on = t.reduce(function(t, e) {
                                return t[e.eventType] = t[e.eventType] || [], t[e.eventType].push(e), t
                            }, {})
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "after", {
                        get: function() {
                            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "transitions", {
                        get: function() {
                            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.getCandidates = function(t) {
                        if (this.__cache.candidates[t]) return this.__cache.candidates[t];
                        var e = "" === t,
                            n = this.transitions.filter(function(n) {
                                var i = n.eventType === t;
                                return e ? i : i || "*" === n.eventType
                            });
                        return this.__cache.candidates[t] = n, n
                    }, t.prototype.getDelayedTransitions = function() {
                        var t = this,
                            e = this.config.after;
                        if (!e) return [];
                        var n = function(e, n) {
                            var i, r, o, a = (i = $(e) ? "".concat(t.id, ":delay[").concat(n, "]") : e, r = t.id, "".concat(tD.After, "(").concat(i, ")").concat(r ? "#".concat(r) : ""));
                            return t.onEntry.push({
                                to: (o = {
                                    delay: e
                                }).to,
                                type: v,
                                event: $(a) ? a : G(a),
                                delay: o ? o.delay : void 0,
                                id: o && void 0 !== o.id ? o.id : $(a) ? a.name : j(a)
                            }), t.onExit.push({
                                type: y,
                                sendId: a
                            }), a
                        };
                        return (F(e) ? e.map(function(t, e) {
                            var i = n(t.delay, e);
                            return s(s({}, t), {
                                event: i
                            })
                        }) : R(Object.keys(e).map(function(t, i) {
                            var r = e[t],
                                o = X(r) ? {
                                    target: r
                                } : r,
                                a = isNaN(+t) ? t : +t,
                                c = n(a, i);
                            return z(o).map(function(t) {
                                return s(s({}, t), {
                                    event: c,
                                    delay: a
                                })
                            })
                        }))).map(function(e) {
                            var n = e.delay;
                            return s(s({}, t.formatTransition(e)), {
                                delay: n
                            })
                        })
                    }, t.prototype.getStateNodes = function(t) {
                        var e, n = this;
                        if (!t) return [];
                        var i = t instanceof tO ? t.value : L(t, this.delimiter);
                        if (X(i)) {
                            var r = this.getStateNode(i).initial;
                            return void 0 !== r ? this.getStateNodes(((e = {})[i] = r, e)) : [this, this.states[i]]
                        }
                        var o = Object.keys(i),
                            a = [this];
                        return a.push.apply(a, l([], h(R(o.map(function(t) {
                            return n.getStateNode(t).getStateNodes(i[t])
                        }))), !1)), a
                    }, t.prototype.handles = function(t) {
                        var e = j(t);
                        return this.events.includes(e)
                    }, t.prototype.resolveState = function(t) {
                        var e = t instanceof tO ? t : tO.create(t),
                            n = Array.from(t_([], this.getStateNodes(e.value)));
                        return new tO(s(s({}, e), {
                            value: this.resolve(e.value),
                            configuration: n,
                            done: tw(n, this),
                            tags: tE(n),
                            machine: this.machine
                        }))
                    }, t.prototype.transitionLeafNode = function(t, e, n) {
                        var i = this.getStateNode(t).next(e, n);
                        return i && i.transitions.length ? i : this.next(e, n)
                    }, t.prototype.transitionCompoundNode = function(t, e, n) {
                        var i = Object.keys(t),
                            r = this.getStateNode(i[0])._transition(t[i[0]], e, n);
                        return r && r.transitions.length ? r : this.next(e, n)
                    }, t.prototype.transitionParallelNode = function(t, e, n) {
                        var i, r, o = {};
                        try {
                            for (var a = u(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
                                var c = s.value,
                                    h = t[c];
                                if (h) {
                                    var l = this.getStateNode(c)._transition(h, e, n);
                                    l && (o[c] = l)
                                }
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (r = a.return) && r.call(a)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        var f = Object.keys(o).map(function(t) {
                                return o[t]
                            }),
                            d = R(f.map(function(t) {
                                return t.transitions
                            }));
                        if (!f.some(function(t) {
                                return t.transitions.length > 0
                            })) return this.next(e, n);
                        var p = R(Object.keys(o).map(function(t) {
                            return o[t].configuration
                        }));
                        return {
                            transitions: d,
                            exitSet: R(f.map(function(t) {
                                return t.exitSet
                            })),
                            configuration: p,
                            source: e,
                            actions: R(Object.keys(o).map(function(t) {
                                return o[t].actions
                            }))
                        }
                    }, t.prototype._transition = function(t, e, n) {
                        return X(t) ? this.transitionLeafNode(t, e, n) : 1 === Object.keys(t).length ? this.transitionCompoundNode(t, e, n) : this.transitionParallelNode(t, e, n)
                    }, t.prototype.getTransitionData = function(t, e) {
                        return this._transition(t.value, t, W(e))
                    }, t.prototype.next = function(t, e) {
                        var n, i, r, o = this,
                            a = e.name,
                            s = [],
                            c = [];
                        try {
                            for (var f = u(this.getCandidates(a)), d = f.next(); !d.done; d = f.next()) {
                                var p = d.value,
                                    v = p.cond,
                                    y = p.in,
                                    g = t.context,
                                    m = !y || (X(y) && tJ(y) ? t.matches(L(this.getStateNodeById(y).path, this.delimiter)) : P(L(y, this.delimiter), V(this.path.slice(0, -2))(t.value))),
                                    b = !1;
                                try {
                                    b = !v || Z(this.machine, v, g, e, t)
                                } catch (t) {
                                    throw Error("Unable to evaluate guard '".concat(v.name || v.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(t.message))
                                }
                                if (b && m) {
                                    void 0 !== p.target && (c = p.target), s.push.apply(s, l([], h(p.actions), !1)), r = p;
                                    break
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (i = f.return) && i.call(f)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        if (r) {
                            if (!c.length) return {
                                transitions: [r],
                                exitSet: [],
                                configuration: t.value ? [this] : [],
                                source: t,
                                actions: s
                            };
                            var _ = R(c.map(function(e) {
                                    return o.getRelativeStateNodes(e, t.historyValue)
                                })),
                                x = !!r.internal;
                            return {
                                transitions: [r],
                                exitSet: x ? [] : R(c.map(function(t) {
                                    return o.getPotentiallyReenteringNodes(t)
                                })),
                                configuration: _,
                                source: t,
                                actions: s
                            }
                        }
                    }, t.prototype.getPotentiallyReenteringNodes = function(t) {
                        if (this.order < t.order) return [this];
                        for (var e = [], n = this; n && n !== t;) e.push(n), n = n.parent;
                        return n !== t ? [] : (e.push(t), e)
                    }, t.prototype.getActions = function(t, e, n, i, r, o, a) {
                        var s, c, f, d, v = this,
                            y = o ? t_([], this.getStateNodes(o.value)) : [],
                            g = new Set;
                        try {
                            for (var m = u(Array.from(t).sort(function(t, e) {
                                    return t.order - e.order
                                })), b = m.next(); !b.done; b = m.next()) {
                                var _ = b.value;
                                (!tS(y, _) || tS(n.exitSet, _) || _.parent && g.has(_.parent)) && g.add(_)
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                b && !b.done && (c = m.return) && c.call(m)
                            } finally {
                                if (s) throw s.error
                            }
                        }
                        try {
                            for (var x = u(y), S = x.next(); !S.done; S = x.next()) {
                                var _ = S.value;
                                (!tS(t, _) || tS(n.exitSet, _.parent)) && n.exitSet.push(_)
                            }
                        } catch (t) {
                            f = {
                                error: t
                            }
                        } finally {
                            try {
                                S && !S.done && (d = x.return) && d.call(x)
                            } finally {
                                if (f) throw f.error
                            }
                        }
                        n.exitSet.sort(function(t, e) {
                            return e.order - t.order
                        });
                        var w = Array.from(g).sort(function(t, e) {
                                return t.order - e.order
                            }),
                            E = new Set(n.exitSet),
                            O = R(w.map(function(t) {
                                var e = [];
                                if ("final" !== t.type) return e;
                                var o = t.parent;
                                if (!o.parent) return e;
                                e.push(tu(t.id, t.doneData), tu(o.id, t.doneData ? U(t.doneData, i, r) : void 0));
                                var a = o.parent;
                                return "parallel" === a.type && tb(a).every(function(t) {
                                    return tw(n.configuration, t)
                                }) && e.push(tu(a.id)), e
                            })),
                            k = w.map(function(t) {
                                var e = t.onEntry,
                                    n = t.activities.map(function(t) {
                                        var e;
                                        return e = tc(t), {
                                            type: tD.Start,
                                            activity: e,
                                            exec: void 0
                                        }
                                    });
                                return {
                                    type: "entry",
                                    actions: ts(a ? l(l([], h(e), !1), h(n), !1) : l(l([], h(n), !1), h(e), !1), v.machine.options.actions)
                                }
                            }).concat({
                                type: "state_done",
                                actions: O.map(function(t) {
                                    return {
                                        type: p,
                                        event: "function" == typeof t ? t : G(t),
                                        delay: void 0,
                                        id: void 0
                                    }
                                })
                            }),
                            T = Array.from(E).map(function(t) {
                                return {
                                    type: "exit",
                                    actions: ts(l(l([], h(t.onExit), !1), h(t.activities.map(function(t) {
                                        var e;
                                        return e = $(t) ? t : tc(t), {
                                            type: tD.Stop,
                                            activity: e,
                                            exec: void 0
                                        }
                                    })), !1), v.machine.options.actions)
                                }
                            }).concat({
                                type: "transition",
                                actions: ts(n.actions, this.machine.options.actions)
                            }).concat(k);
                        if (e) {
                            var N = ts(R(l([], h(t), !1).sort(function(t, e) {
                                return e.order - t.order
                            }).map(function(t) {
                                return t.onExit
                            })), this.machine.options.actions).filter(function(t) {
                                return !ti(t)
                            });
                            return T.concat({
                                type: "stop",
                                actions: N
                            })
                        }
                        return T
                    }, t.prototype.transition = function(t, e, n, i) {
                        void 0 === t && (t = this.initialState);
                        var r, o, a = W(e);
                        if (t instanceof tO) o = void 0 === n ? t : this.resolveState(tO.from(t, n));
                        else {
                            var s = X(t) ? this.resolve(I(this.getResolvedPath(t))) : this.resolve(t),
                                c = null != n ? n : this.machine.context;
                            o = this.resolveState(tO.from(s, c))
                        }
                        if (this.strict && !this.events.includes(a.name) && (r = a.name, !/^(done|error)\./.test(r))) throw Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
                        var u = this._transition(o.value, o, a) || {
                                transitions: [],
                                configuration: [],
                                exitSet: [],
                                source: o,
                                actions: []
                            },
                            f = t_([], this.getStateNodes(o.value)),
                            d = u.configuration.length ? t_(f, u.configuration) : f;
                        return u.configuration = l([], h(d), !1), this.resolveTransition(u, o, o.context, i, a)
                    }, t.prototype.resolveRaisedTransition = function(t, e, n, i) {
                        var r, o = t.actions;
                        return (t = this.transition(t, e, void 0, i))._event = n, t.event = n.data, (r = t.actions).unshift.apply(r, l([], h(o), !1)), t
                    }, t.prototype.resolveTransition = function(t, e, n, i, r) {
                        var o, a, c, l, p, v, y = this;
                        void 0 === r && (r = tr);
                        var m = t.configuration,
                            b = !e || t.transitions.length > 0,
                            _ = b ? t.configuration : e ? e.configuration : [],
                            S = tw(_, this),
                            w = b ? (a = t_([o = this.machine], m), function t(e, n) {
                                var i = n.get(e);
                                if (!i) return {};
                                if ("compound" === e.type) {
                                    var r = i[0];
                                    if (!r) return {};
                                    if (tg(r)) return r.key
                                }
                                var o = {};
                                return i.forEach(function(e) {
                                    o[e.key] = t(e, n)
                                }), o
                            }(o, tx(a))) : void 0,
                            O = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0,
                            k = this.getActions(new Set(_), S, t, n, r, e, i),
                            T = e ? s({}, e.activities) : {};
                        try {
                            for (var N = u(k), P = N.next(); !P.done; P = N.next()) {
                                var j = P.value;
                                try {
                                    for (var A = (p = void 0, u(j.actions)), L = A.next(); !L.done; L = A.next()) {
                                        var I = L.value;
                                        I.type === f ? T[I.activity.id || I.activity.type] = I : I.type === d && (T[I.activity.id || I.activity.type] = !1)
                                    }
                                } catch (t) {
                                    p = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        L && !L.done && (v = A.return) && v.call(A)
                                    } finally {
                                        if (p) throw p.error
                                    }
                                }
                            }
                        } catch (t) {
                            c = {
                                error: t
                            }
                        } finally {
                            try {
                                P && !P.done && (l = N.return) && l.call(N)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                        var C = h(td(this, e, n, r, k, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2),
                            V = C[0],
                            M = C[1],
                            R = h(function(t, e) {
                                var n, i, r = h([
                                        [],
                                        []
                                    ], 2),
                                    o = r[0],
                                    a = r[1];
                                try {
                                    for (var s = u(t), c = s.next(); !c.done; c = s.next()) {
                                        var l = c.value;
                                        e(l) ? o.push(l) : a.push(l)
                                    }
                                } catch (t) {
                                    n = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (i = s.return) && i.call(s)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return [o, a]
                            }(V, ti), 2),
                            z = R[0],
                            q = R[1],
                            B = V.filter(function(t) {
                                var e;
                                return t.type === f && (null == (e = t.activity) ? void 0 : e.type) === x
                            }).reduce(function(t, e) {
                                var n, i, o, a, s, c, u, h;
                                return t[e.activity.id] = (n = e.activity, i = y.machine, o = r, s = tt(n.src), c = null == (a = null == i ? void 0 : i.options.services) ? void 0 : a[s.type], u = n.data ? U(n.data, M, o) : void 0, (h = c ? ty(c, n.id, u) : tv(n.id)).meta = n, h), t
                            }, e ? s({}, e.children) : {}),
                            J = new tO({
                                value: w || e.value,
                                context: M,
                                _event: r,
                                _sessionid: e ? e._sessionid : null,
                                historyValue: w ? O ? {
                                    current: w,
                                    states: function t(e, n) {
                                        return D(e.states, function(e, i) {
                                            if (e) {
                                                var r = (X(n) ? void 0 : n[i]) || (e ? e.current : void 0);
                                                if (r) return {
                                                    current: r,
                                                    states: t(e, r)
                                                }
                                            }
                                        })
                                    }(O, w)
                                } : void 0 : e ? e.historyValue : void 0,
                                history: !w || t.source ? e : void 0,
                                actions: w ? q : [],
                                activities: w ? T : e ? e.activities : {},
                                events: [],
                                configuration: _,
                                transitions: t.transitions,
                                children: B,
                                done: S,
                                tags: tE(_),
                                machine: this
                            }),
                            F = n !== M;
                        J.changed = r.name === E || F;
                        var $ = J.history;
                        $ && delete $.history;
                        var Q = !S && (this._transient || m.some(function(t) {
                            return t._transient
                        }));
                        if (!b && (!Q || "" === r.name)) return J;
                        var H = J;
                        if (!S)
                            for (Q && (H = this.resolveRaisedTransition(H, {
                                    type: g
                                }, r, i)); z.length;) {
                                var Y = z.shift();
                                H = this.resolveRaisedTransition(H, Y._event, r, i)
                            }
                        var G = H.changed || ($ ? !!H.actions.length || F || typeof $.value != typeof H.value || ! function t(e, n) {
                            if (e === n) return !0;
                            if (void 0 === e || void 0 === n) return !1;
                            if (X(e) || X(n)) return e === n;
                            var i = Object.keys(e),
                                r = Object.keys(n);
                            return i.length === r.length && i.every(function(i) {
                                return t(e[i], n[i])
                            })
                        }(H.value, $.value) : void 0);
                        return H.changed = G, H.history = $, H
                    }, t.prototype.getStateNode = function(t) {
                        if (tJ(t)) return this.machine.getStateNodeById(t);
                        if (!this.states) throw Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
                        var e = this.states[t];
                        if (!e) throw Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
                        return e
                    }, t.prototype.getStateNodeById = function(t) {
                        var e = tJ(t) ? t.slice(1) : t;
                        if (e === this.id) return this;
                        var n = this.machine.idMap[e];
                        if (!n) throw Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
                        return n
                    }, t.prototype.getStateNodeByPath = function(t) {
                        if ("string" == typeof t && tJ(t)) try {
                            return this.getStateNodeById(t.slice(1))
                        } catch {}
                        for (var e = A(t, this.delimiter).slice(), n = this; e.length;) {
                            var i = e.shift();
                            if (!i.length) break;
                            n = n.getStateNode(i)
                        }
                        return n
                    }, t.prototype.resolve = function(t) {
                        var e, n = this;
                        if (!t) return this.initialStateValue || tB;
                        switch (this.type) {
                            case "parallel":
                                return D(this.initialStateValue, function(e, i) {
                                    return e ? n.getStateNode(i).resolve(t[i] || e) : tB
                                });
                            case "compound":
                                if (X(t)) {
                                    var i = this.getStateNode(t);
                                    return "parallel" === i.type || "compound" === i.type ? ((e = {})[t] = i.initialStateValue, e) : t
                                }
                                return Object.keys(t).length ? D(t, function(t, e) {
                                    return t ? n.getStateNode(e).resolve(t) : tB
                                }) : this.initialStateValue || {};
                            default:
                                return t || tB
                        }
                    }, t.prototype.getResolvedPath = function(t) {
                        if (tJ(t)) {
                            var e = this.machine.idMap[t.slice(1)];
                            if (!e) throw Error("Unable to find state node '".concat(t, "'"));
                            return e.path
                        }
                        return A(t, this.delimiter)
                    }, Object.defineProperty(t.prototype, "initialStateValue", {
                        get: function() {
                            var t, e;
                            if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                            if ("parallel" === this.type) e = C(this.states, function(t) {
                                return t.initialStateValue || tB
                            }, function(t) {
                                return "history" !== t.type
                            });
                            else if (void 0 !== this.initial) {
                                if (!this.states[this.initial]) throw Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
                                e = tg(this.states[this.initial]) ? this.initial : ((t = {})[this.initial] = this.states[this.initial].initialStateValue, t)
                            } else e = {};
                            return this.__cache.initialStateValue = e, this.__cache.initialStateValue
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.getInitialState = function(t, e) {
                        this._init();
                        var n = this.getStateNodes(t);
                        return this.resolveTransition({
                            configuration: n,
                            exitSet: [],
                            transitions: [],
                            source: void 0,
                            actions: []
                        }, void 0, null != e ? e : this.machine.context, void 0)
                    }, Object.defineProperty(t.prototype, "initialState", {
                        get: function() {
                            var t = this.initialStateValue;
                            if (!t) throw Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
                            return this.getInitialState(t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "target", {
                        get: function() {
                            var t;
                            if ("history" === this.type) {
                                var e = this.config;
                                t = X(e.target) && tJ(e.target) ? I(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target
                            }
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.getRelativeStateNodes = function(t, e, n) {
                        return void 0 === n && (n = !0), n ? "history" === t.type ? t.resolveHistory(e) : t.initialStateNodes : [t]
                    }, Object.defineProperty(t.prototype, "initialStateNodes", {
                        get: function() {
                            var t = this;
                            return tg(this) || "compound" === this.type && !this.initial ? [this] : R(M(this.initialStateValue).map(function(e) {
                                return t.getFromRelativePath(e)
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.getFromRelativePath = function(t) {
                        if (!t.length) return [this];
                        var e = h(t),
                            n = e[0],
                            i = e.slice(1);
                        if (!this.states) throw Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
                        var r = this.getStateNode(n);
                        if ("history" === r.type) return r.resolveHistory();
                        if (!this.states[n]) throw Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
                        return this.states[n].getFromRelativePath(i)
                    }, t.prototype.historyValue = function(t) {
                        if (Object.keys(this.states).length) return {
                            current: t || this.initialStateValue,
                            states: C(this.states, function(e, n) {
                                if (!t) return e.historyValue();
                                var i = X(t) ? void 0 : t[n];
                                return e.historyValue(i || e.initialStateValue)
                            }, function(t) {
                                return !t.history
                            })
                        }
                    }, t.prototype.resolveHistory = function(t) {
                        var e, n = this;
                        if ("history" !== this.type) return [this];
                        var i = this.parent;
                        if (!t) {
                            var r = this.target;
                            return r ? R(M(r).map(function(t) {
                                return i.getFromRelativePath(t)
                            })) : i.initialStateNodes
                        }
                        var o = (e = i.path, function(t) {
                            var n, i, r = t;
                            try {
                                for (var o = u(e), a = o.next(); !a.done; a = o.next()) {
                                    var s = a.value;
                                    r = r.states[s]
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    a && !a.done && (i = o.return) && i.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            return r
                        })(t).current;
                        return X(o) ? [i.getStateNode(o)] : R(M(o).map(function(t) {
                            return "deep" === n.history ? i.getFromRelativePath(t) : [i.states[t[0]]]
                        }))
                    }, Object.defineProperty(t.prototype, "stateIds", {
                        get: function() {
                            var t = this,
                                e = R(Object.keys(this.states).map(function(e) {
                                    return t.states[e].stateIds
                                }));
                            return [this.id].concat(e)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "events", {
                        get: function() {
                            if (this.__cache.events) return this.__cache.events;
                            var t, e, n, i, r = this.states,
                                o = new Set(this.ownEvents);
                            if (r) try {
                                for (var a = u(Object.keys(r)), s = a.next(); !s.done; s = a.next()) {
                                    var c = r[s.value];
                                    if (c.states) try {
                                        for (var h = (n = void 0, u(c.events)), l = h.next(); !l.done; l = h.next()) {
                                            var f = l.value;
                                            o.add("".concat(f))
                                        }
                                    } catch (t) {
                                        n = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            l && !l.done && (i = h.return) && i.call(h)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = a.return) && e.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return this.__cache.events = Array.from(o)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ownEvents", {
                        get: function() {
                            return Array.from(new Set(this.transitions.filter(function(t) {
                                return !(!t.target && !t.actions.length && t.internal)
                            }).map(function(t) {
                                return t.eventType
                            })))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.resolveTarget = function(t) {
                        var e = this;
                        if (void 0 !== t) return t.map(function(t) {
                            if (!X(t)) return t;
                            var n = t[0] === e.delimiter;
                            if (n && !e.parent) return e.getStateNodeByPath(t.slice(1));
                            var i = n ? e.key + t : t;
                            if (!e.parent) return e.getStateNodeByPath(i);
                            try {
                                return e.parent.getStateNodeByPath(i)
                            } catch (t) {
                                throw Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(t.message))
                            }
                        })
                    }, t.prototype.formatTransition = function(t) {
                        var e = this,
                            n = function(t) {
                                if (void 0 !== t && "" !== t) return z(t)
                            }(t.target),
                            i = "internal" in t ? t.internal : !n || n.some(function(t) {
                                return X(t) && t[0] === e.delimiter
                            }),
                            r = this.machine.options.guards,
                            o = this.resolveTarget(n),
                            a = s(s({}, t), {
                                actions: ts(z(t.actions)),
                                cond: Q(t.cond, r),
                                target: o,
                                source: this,
                                internal: i,
                                eventType: t.event,
                                toJSON: function() {
                                    return s(s({}, a), {
                                        target: a.target ? a.target.map(function(t) {
                                            return "#".concat(t.id)
                                        }) : void 0,
                                        source: "#".concat(e.id)
                                    })
                                }
                            });
                        return a
                    }, t.prototype.formatTransitions = function() {
                        var t, e, n, i = this;
                        if (this.config.on)
                            if (Array.isArray(this.config.on)) n = this.config.on;
                            else {
                                var r = this.config.on,
                                    o = r["*"],
                                    a = c(r, ["*"]);
                                n = R(Object.keys(a).map(function(t) {
                                    return K(t, a[t])
                                }).concat(K("*", void 0 === o ? [] : o)))
                            }
                        else n = [];
                        var s = this.config.always ? K("", this.config.always) : [],
                            f = this.config.onDone ? K(String(tu(this.id)), this.config.onDone) : [],
                            d = R(this.invoke.map(function(t) {
                                var e = [];
                                return t.onDone && e.push.apply(e, l([], h(K(String(th(t.id)), t.onDone)), !1)), t.onError && e.push.apply(e, l([], h(K(String(tl(t.id)), t.onError)), !1)), e
                            })),
                            p = this.after,
                            v = R(l(l(l(l([], h(f), !1), h(d), !1), h(n), !1), h(s), !1).map(function(t) {
                                return z(t).map(function(t) {
                                    return i.formatTransition(t)
                                })
                            }));
                        try {
                            for (var y = u(p), g = y.next(); !g.done; g = y.next()) {
                                var m = g.value;
                                v.push(m)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                g && !g.done && (e = y.return) && e.call(y)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return v
                    }, t
                }(),
                t$ = {
                    click: "onClick",
                    mouseenter: "onMouseEnter",
                    mouseleave: "onMouseLeave",
                    complete: "onComplete",
                    after: "onAfter",
                    enter: "onEnter",
                    show: "onShow"
                };
            Object.values(t$);
            var tX = Object.keys(t$),
                tQ = class {
                    start(t) {
                        this.stop();
                        let e = this._machineSchemas.get(t);
                        if (typeof e > "u") throw (0, a.h)(`invalid state machine id ${t}`);
                        this._service = tU(new tF(e, void 0)), this._addEventListeners(), this._service.start()
                    }
                    stop() {
                        var t;
                        this._removeEventListeners(), null == (t = this._service) || t.stop(), this._player.stop()
                    }
                    _removeEventListeners() {
                        var t;
                        for (let [e, n] of(this._requiresDomElement(), this._domListeners)) "visibilityChange" === e && this._player.stopPlayOnShow(), null == (t = this._domElement) || t.removeEventListener(e, n), this._domListeners.delete(e);
                        for (let [t, e] of this._playerListeners) this._player.removeEventListener(t, e), this._playerListeners.delete(t)
                    }
                    _addEventListeners() {
                        this._requiresDomElement();
                        let t = t => {
                                this._service.send({
                                    type: t
                                })
                            },
                            e = e => function() {
                                t(e)
                            };
                        this._service.subscribe(t => {
                            var n;
                            if (typeof t.changed > "u" || t.changed) {
                                for (let i of (this._removeEventListeners(), t.nextEvents))
                                    if (tX.filter(t => "complete" !== t && "show" !== t).includes(i)) {
                                        let t = e(i);
                                        this._domListeners.set(i, t), null == (n = this._domElement) || n.addEventListener(i, t, {
                                            once: !0
                                        })
                                    } else if ("complete" === i) {
                                    let t = e(i);
                                    this._player.addEventListener(i, t), this._playerListeners.set(i, t)
                                } else if ("show" === i) {
                                    let t = e(i);
                                    this._player.addIntersectionObserver({
                                        callbackOnIntersect: e => {
                                            e > 0 && (100 !== e && this._onShowPrevValue !== e && t(), this._onShowPrevValue = e)
                                        },
                                        threshold: []
                                    }), this._domListeners.set("visibilityChange", t)
                                }
                            }
                        })
                    }
                    subscribe(t) {
                        throw (0, a.h)(t.toString())
                    }
                    _transformToXStateSchema(t) {
                        var e, n, i;
                        let r = new Map;
                        for (let s of t) {
                            let t = {},
                                c = {};
                            if (c.id = s.descriptor.id, "u" > typeof s.descriptor.initial && (c.initial = s.descriptor.initial), "u" > typeof s) {
                                let r = s.states;
                                for (let s in r)
                                    if ("u" > typeof r[s] && r[s]) {
                                        let c = r[s],
                                            u = c.playbackSettings,
                                            h = Object.keys(c).filter(t => t.startsWith("on")),
                                            l = {},
                                            f = {};
                                        for (let t of h)
                                            if ("u" > typeof c[t]) {
                                                let r = c[t];
                                                t === t$.after ? f[r.ms] = {
                                                    target: null != (e = null == r ? void 0 : r.state) ? e : ""
                                                } : t === t$.enter ? l[(0, a.o)(t$, t)] = {
                                                    target: null != (n = null == r ? void 0 : r.state) ? n : ""
                                                } : l[(0, a.o)(t$, t)] = {
                                                    target: null != (i = null == r ? void 0 : r.state) ? i : ""
                                                }
                                            } t[s] = {
                                            entry: () => {
                                                !this._player.getAnimationInstance() || c.animationId && c.animationId !== this._player.currentAnimationId ? this._player.play(c.animationId, () => ({
                                                    ...o.d,
                                                    ...u
                                                })).then(() => {
                                                    this._updatePlaybackSettings(u)
                                                }).catch(t => {
                                                    (0, a.i)(`State machine error: ${t.message}`)
                                                }) : this._updatePlaybackSettings(u)
                                            },
                                            exit: () => {
                                                "u" > typeof u.segments && this._player.resetSegments(!1), "u" > typeof u.playOnScroll && this._player.stopPlayOnScroll()
                                            },
                                            on: l,
                                            after: f,
                                            meta: u
                                        }
                                    }
                            }
                            c.states = t, r.set(c.id, c)
                        }
                        return r
                    }
                    _handlePlaySegments(t) {
                        if ("string" == typeof t.segments) this._player.goToAndPlay(t.segments, !0);
                        else {
                            let [e, n] = t.segments, i = e;
                            0 !== e && e === n && (i = e - 1), 0 === e && e === n ? this._player.goToAndPlay(e, !0) : this._player.playSegments([i, n], !0)
                        }
                    }
                    _handlePlayOnScroll(t) {
                        let e = t.playOnScroll;
                        if (t.segments && "string" != typeof t.segments) {
                            let n = t.segments;
                            this._player.playOnScroll({
                                threshold: e,
                                segments: n
                            })
                        } else this._player.playOnScroll({
                            threshold: e
                        })
                    }
                    _updatePlaybackSettings(t) {
                        if (!this._player.getAnimationInstance()) throw Error("Unable to update playbackSettings. Animations is not rendered yet.");
                        "u" > typeof t.autoplay && (this._player.setAutoplay(t.autoplay), t.autoplay ? this._player.play() : this._player.pause()), "u" > typeof t.direction && this._player.setDirection(t.direction), "u" > typeof t.intermission && this._player.setIntermission(t.intermission), "u" > typeof t.loop && this._player.setLoop(t.loop), "u" > typeof t.playMode && this._player.setMode(t.playMode), "u" > typeof t.speed && this._player.setSpeed(t.speed), "u" > typeof t.defaultTheme && this._player.setDefaultTheme(t.defaultTheme), "u" > typeof t.playOnScroll && this._handlePlayOnScroll(t), t.segments && this._handlePlaySegments(t), t.autoplay || this._player.pause()
                    }
                    _requiresDomElement() {
                        if (!this._domElement) throw (0, a.h)("Requires a DOM element to attach events.")
                    }
                    constructor(t, e) {
                        (0, r._)(this, "activeStateId", ""), (0, r._)(this, "_service", void 0), (0, r._)(this, "_domListeners", new Map), (0, r._)(this, "_domElement", void 0), (0, r._)(this, "_playerListeners", new Map), (0, r._)(this, "_player", void 0), (0, r._)(this, "_machineSchemas", new Map), (0, r._)(this, "_onShowPrevValue", 0), this._player = e, this._machineSchemas = this._transformToXStateSchema(t), this._domElement = e.container
                    }
                }
        }
    }
]);