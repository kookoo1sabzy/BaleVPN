try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8b050bd5-21ae-4a6a-b72d-bd97cbd71312", e._sentryDebugIdIdentifier = "sentry-dbid-8b050bd5-21ae-4a6a-b72d-bd97cbd71312")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4636"], {
        46926: function(e, t, a) {
            a.d(t, {
                A: () => o
            });
            var n = a(46756),
                r = a.n(n),
                s = a(5421),
                i = a.n(s)()(r());
            i.push([e.id, ".LMazud{color:var(--color-neutrals-n-300);text-align:center;margin:0;font-family:Shabnam;font-size:1.3rem;font-weight:500;line-height:2.2rem}", ""]), i.locals = {
                countDownWrapper: "LMazud"
            };
            let o = i
        },
        3979: function(e, t, a) {
            a.r(t), a.d(t, {
                default: () => $,
                ForgetPassword: () => W
            });
            var n, r = a(45831),
                s = a(7305),
                i = a(36878),
                o = a(58191),
                l = a.n(o),
                d = a(38628),
                u = a(53321),
                c = a.n(u),
                f = a(23518),
                p = a.n(f),
                m = a(14182),
                y = a.n(m),
                T = a(5033),
                g = a.n(T),
                b = a(77141),
                w = a.n(b),
                v = a(66338),
                h = a.n(v),
                P = a(46926),
                E = {};
            E.styleTagTransform = h(), E.setAttributes = g(), E.insert = y().bind(null, "head"), E.domAPI = p(), E.insertStyleElement = w(), c()(P.A, E);
            let A = P.A && P.A.locals ? P.A.locals : void 0;
            var N = ((n = {}).Running = "running", n.Paused = "paused", n.Stopped = "stopped", n);
            let C = l().forwardRef((e, t) => {
                let {
                    resetCountDownComponent: a,
                    initialTime: n,
                    TimeRemaining: r
                } = e, {
                    time: s,
                    reset: l,
                    start: u,
                    status: c
                } = (0, d.useTimer)({
                    initialTime: n,
                    interval: 1e3,
                    timerType: "DECREMENTAL",
                    endTime: 0
                }), [f, p] = (0, o.useState)(!1);
                return ((0, o.useImperativeHandle)(t, () => ({
                    start: () => {
                        p(!0), u()
                    },
                    getStatus: () => "RUNNING" === c ? "running" : "PAUSED" === c ? "paused" : "stopped"
                }), [u, c]), f) ? (0, i.jsx)("div", {
                    className: A.countDownWrapper,
                    children: 0 != s ? (0, i.jsx)(r, {
                        time: s
                    }) : (0, i.jsx)("div", {
                        onClick: () => {
                            l(), p(!1)
                        },
                        children: a
                    })
                }) : null
            });
            var S = a(12226),
                D = a(3101),
                _ = a(13274),
                F = a(41349),
                x = a(21843),
                k = a(84900),
                O = a(41941),
                R = a(13205),
                I = a(31855),
                Y = a(2077),
                L = a(44251),
                M = a(15490),
                j = a(934),
                z = a(82178),
                B = a(98999);
            let U = e => {
                    let {
                        time: t
                    } = e, {
                        formatNumber: a,
                        formatMessage: n
                    } = (0, O.t)();
                    return (0, r.FD)(r.FK, {
                        children: [(0, r.Y)("span", {
                            className: z.A.primaryText,
                            children: `${a(n("auth.timeLeft",{time:t.toString()}))}`
                        }), n("auth.getNewCodeTitle")]
                    })
                },
                W = (0, Y.Ng)(() => ({}))(e => {
                    let {
                        step: t
                    } = e, a = (0, Y.wA)(), n = (0, L.mJ)(), {
                        formatMessage: i,
                        formatNumber: l
                    } = (0, O.t)(), [d, u] = (0, o.useState)(""), [c, f] = (0, o.useState)(""), p = (0, o.useRef)(null), [m, y] = (0, o.useState)(!1), T = (0, F.useLocation)(), {
                        redirectTo: g
                    } = (0, B.Z$)(T.search), b = (0, o.useCallback)(() => {
                        null != p.current && p.current.start()
                    }, []), w = (0, o.useCallback)(e => {
                        y(!1), f(e)
                    }, []), v = (0, o.useCallback)(() => {
                        let e = {
                            onSuccess: b,
                            onError: w
                        };
                        "forgetPassword" == t ? a(j.g2.forgetPassword({
                            callbacks: e
                        })) : a(j.g2.sendOTP({
                            callbacks: e
                        }))
                    }, [t, b, w]);
                    (0, o.useEffect)(() => {
                        var e;
                        (null == (e = p.current) ? void 0 : e.getStatus()) !== N.Running && v()
                    }, [v]);
                    let h = i("forgetPassword" == t ? "ramz.recover_password" : "ramz.enter_confirm_code");
                    return (0, r.Y)(x.mO, {
                        "data-sentry-element": "Wrapper",
                        "data-sentry-component": "ForgetPasswordFC",
                        "data-sentry-source-file": "ForgetPassword.tsx",
                        children: (0, r.FD)(x.LN, {
                            "data-sentry-element": "PageContainer",
                            "data-sentry-source-file": "ForgetPassword.tsx",
                            children: [(0, r.Y)(k.V, {
                                title: h,
                                "data-sentry-element": "TopBar",
                                "data-sentry-source-file": "ForgetPassword.tsx"
                            }), (0, r.Y)(x.nB, {
                                "data-sentry-element": "Body",
                                "data-sentry-source-file": "ForgetPassword.tsx",
                                children: (0, r.FD)(x.qA, {
                                    className: z.A.bodyWrapper,
                                    "data-sentry-element": "BodyWrapper",
                                    "data-sentry-source-file": "ForgetPassword.tsx",
                                    children: [(0, r.Y)("p", {
                                        className: z.A.text,
                                        children: i("ramz.code_via_sms")
                                    }), (0, r.Y)(S.O, {
                                        value: l(d),
                                        placeholder: l("123456"),
                                        label: i("confirm_code"),
                                        onChange: e => {
                                            M.A.test(e) && u((0, _.IJ)(e))
                                        },
                                        inputMode: (0, I.Fr)() ? "numeric" : void 0,
                                        errorText: c,
                                        "data-sentry-element": "NewTextField",
                                        "data-sentry-source-file": "ForgetPassword.tsx"
                                    }), (0, r.Y)(C, {
                                        initialTime: 120,
                                        TimeRemaining: U,
                                        ref: p,
                                        resetCountDownComponent: (0, r.Y)("span", {
                                            onClick: v,
                                            className: z.A.primaryText,
                                            children: i("ramz.resend_code")
                                        }),
                                        "data-sentry-element": "CountDown",
                                        "data-sentry-source-file": "ForgetPassword.tsx"
                                    })]
                                })
                            }), (0, r.Y)(x.wi, {
                                className: z.A.footer,
                                "data-sentry-element": "Footer",
                                "data-sentry-source-file": "ForgetPassword.tsx",
                                children: (0, r.Y)(x.qA, {
                                    "data-sentry-element": "BodyWrapper",
                                    "data-sentry-source-file": "ForgetPassword.tsx",
                                    children: (0, r.Y)(D.XD, {
                                        text: i("ok"),
                                        size: D.Se.LARGE,
                                        onClick: () => {
                                            y(!0), f("");
                                            let e = e => {
                                                y(!1), n(e, {
                                                    replace: !0
                                                })
                                            };
                                            "forgetPassword" == t ? a(j.g2.deletePassword({
                                                otp: d,
                                                callbacks: {
                                                    onSuccess: () => e(`${R.F.SetPassword}${T.search}`),
                                                    onError: w
                                                }
                                            })) : a(j.g2.validateOTP({
                                                otp: d,
                                                serviceType: s.C0.BOT,
                                                callbacks: {
                                                    onSuccess: () => e(g ?? ""),
                                                    onError: w
                                                }
                                            }))
                                        },
                                        loading: m,
                                        disabled: 0 == d.length,
                                        "data-sentry-element": "NewButton",
                                        "data-sentry-source-file": "ForgetPassword.tsx"
                                    })
                                })
                            })]
                        })
                    })
                }),
                $ = W
        },
        38628: function(e, t, a) {
            t.useTimer = void 0;
            var n = a(47754);
            Object.defineProperty(t, "useTimer", {
                enumerable: !0,
                get: function() {
                    return n.useTimer
                }
            })
        },
        83618: function(e, t) {
            var a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                switch (t.type) {
                    case "advanceTime":
                        var n = t.payload.timeToAdd;
                        return a(a({}, e), {
                            time: "DECREMENTAL" === e.timerType ? e.time - n : e.time + n
                        });
                    case "pause":
                        return a(a({}, e), {
                            status: "PAUSED"
                        });
                    case "reset":
                        return a(a({}, e), {
                            status: "STOPPED",
                            time: t.payload.initialTime
                        });
                    case "set":
                        return a(a({}, e), {
                            time: t.payload.newTime
                        });
                    case "start":
                        var r = t.payload.initialTime;
                        return a(a({}, e), {
                            status: "RUNNING",
                            time: "STOPPED" === e.status ? r : e.time
                        });
                    case "stop":
                        return a(a({}, e), {
                            status: "STOPPED"
                        });
                    default:
                        return e
                }
            }
        },
        47754: function(e, t, a) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useTimer = void 0;
            var r = a(58191),
                s = n(a(83618));
            t.useTimer = function(e) {
                var t = void 0 === e ? {} : e,
                    a = t.autostart,
                    n = void 0 !== a && a,
                    i = t.endTime,
                    o = t.initialTime,
                    l = void 0 === o ? 0 : o,
                    d = t.interval,
                    u = void 0 === d ? 1e3 : d,
                    c = t.onTimeOver,
                    f = t.onTimeUpdate,
                    p = t.step,
                    m = void 0 === p ? 1 : p,
                    y = t.timerType,
                    T = void 0 === y ? "INCREMENTAL" : y,
                    g = r.useReducer(s.default, {
                        status: "STOPPED",
                        time: l,
                        timerType: T
                    }),
                    b = g[0],
                    w = g[1],
                    v = b.status,
                    h = b.time,
                    P = r.useCallback(function(e) {
                        w({
                            type: "advanceTime",
                            payload: {
                                timeToAdd: e
                            }
                        })
                    }, []),
                    E = r.useCallback(function() {
                        w({
                            type: "pause"
                        })
                    }, []),
                    A = r.useCallback(function() {
                        w({
                            type: "reset",
                            payload: {
                                initialTime: l
                            }
                        })
                    }, [l]),
                    N = r.useCallback(function() {
                        w({
                            type: "start",
                            payload: {
                                initialTime: l
                            }
                        })
                    }, []);
                return r.useEffect(function() {
                    n && w({
                        type: "start",
                        payload: {
                            initialTime: l
                        }
                    })
                }, [n]), r.useEffect(function() {
                    "function" == typeof f && f(h)
                }, [h]), r.useEffect(function() {
                    "STOPPED" !== v && h === i && (w({
                        type: "stop"
                    }), "function" == typeof c && c())
                }, [i, c, h, v]), r.useEffect(function() {
                    var e = null;
                    return "RUNNING" === v ? e = setInterval(function() {
                            w({
                                type: "set",
                                payload: {
                                    newTime: "DECREMENTAL" === T ? h - m : h + m
                                }
                            })
                        }, u) : e && clearInterval(e),
                        function() {
                            e && clearInterval(e)
                        }
                }, [v, m, T, u, h]), {
                    advanceTime: P,
                    pause: E,
                    reset: A,
                    start: N,
                    status: v,
                    time: h
                }
            }
        },
        15490: function(e, t, a) {
            a.d(t, {
                A: () => n
            });
            let n = /^[0-9۰-۹]*$/
        }
    }
]);
//# sourceMappingURL=ForgetPassword.c46b6298.js.map