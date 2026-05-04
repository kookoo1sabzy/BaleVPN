try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "adb5749a-9703-4a09-b800-4c0176a7ab48", e._sentryDebugIdIdentifier = "sentry-dbid-adb5749a-9703-4a09-b800-4c0176a7ab48")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6118"], {
        11050: function(e, a, l) {
            l.d(a, {
                i: () => c
            });
            var n = l(45831);
            l(58191);
            var t = l(2077),
                o = l(47002),
                d = l(50340),
                s = l(41941);
            let c = e => {
                let a = (0, t.wA)(),
                    {
                        formatMessage: l,
                        direction: c
                    } = (0, s.t)();
                return (0, n.Y)(d.a, {
                    ...e,
                    cancelText: e.cancelText ?? l("back"),
                    onCancel: () => {
                        e.onCancel ? e.onCancel() : a(o.NS.closeModal())
                    },
                    onClose: () => {
                        e.onClose ? e.onClose() : a(o.NS.closeModal())
                    },
                    direction: e.direction ?? c,
                    "data-sentry-element": "Modal",
                    "data-sentry-component": "NewModal",
                    "data-sentry-source-file": "NewModal.tsx"
                })
            }
        },
        34356: function(e, a, l) {
            l.r(a), l.d(a, {
                default: () => f
            });
            var n = l(45831),
                t = l(58191),
                o = l(41941),
                d = l(47380),
                s = l(66487),
                c = l(34267),
                r = l(41650),
                u = l(14452),
                i = l(11050);
            let f = e => {
                let a = Object.keys(d.A),
                    {
                        formatMessage: l,
                        locale: f,
                        setLocale: b
                    } = (0, o.t)(),
                    [g, w] = (0, t.useState)(f),
                    {
                        handler: y,
                        close: p
                    } = (0, s.KO)(),
                    C = (0, c.cb)(),
                    {
                        showLanguageBadge: M,
                        changeSetting: h
                    } = (0, u.e)(),
                    m = C >= c.Rp.Medium ? "md" : "sm";
                return (0, t.useEffect)(() => {
                    M && h()
                }, [M]), (0, n.Y)(i.i, {
                    title: l("drawer_setting.menu.language"),
                    onCancel: (null == e ? void 0 : e.onClose) ?? p,
                    onClose: (null == e ? void 0 : e.onClose) ?? y,
                    onConfirm: () => {
                        var a;
                        b(g), null == (a = e.onClose) || a.call(e), p()
                    },
                    confirmText: C >= c.Rp.Medium ? l("save") : void 0,
                    "data-sentry-element": "NewModal",
                    "data-sentry-component": "LanguageSettingsModal",
                    "data-sentry-source-file": "LanguageSettingsModal.tsx",
                    children: a.map(e => (0, n.Y)(r.B, {
                        title: d.A[e],
                        checked: e === g,
                        onChange: () => {
                            w(e), C < c.Rp.Medium && b(e)
                        },
                        "data-testid": e + "-radio",
                        type: r.p.RADIO,
                        size: m
                    }, e))
                })
            }
        },
        14452: function(e, a, l) {
            l.d(a, {
                e: () => u
            });
            var n = l(52484),
                t = l(2077),
                o = l(77693),
                d = l(41394),
                s = l(87197),
                c = l(92810),
                r = l(10208);
            let u = () => {
                let e = (0, t.d4)(e => "false" === (0, s._W)((0, c.t2)(e), n.$Z.seen_language_badge, "false")),
                    a = (0, t.wA)(),
                    l = (0, t.d4)(e => {
                        var a, l;
                        let n = (0, o.H4)(e);
                        return parseInt((null == (l = (0, r.dt)(e, n)) || null == (a = l.createdAt) ? void 0 : a.value) ?? "0")
                    }),
                    u = () => a(d.b0.changeSetting({
                        key: n.$Z.seen_language_badge,
                        value: "true"
                    }));
                return 0 === l ? {
                    showLanguageBadge: !1,
                    changeSetting: u
                } : {
                    showLanguageBadge: 0x18d0cc176f7 > l && e,
                    changeSetting: u
                }
            }
        },
        66487: function(e, a, l) {
            l.d(a, {
                KO: () => s,
                lF: () => c
            });
            var n = l(58191),
                t = l(34267),
                o = l(2077),
                d = l(47002);
            let s = e => {
                    let a = (0, t.cb)(),
                        l = (0, o.wA)(),
                        s = (0, n.useCallback)(() => {
                            let n = a <= t.Rp.Small;
                            n && e && e(), l(n ? d.NS.closeModal() : d.NS.clearModals())
                        }, [l, a, e]);
                    return {
                        close: (0, n.useCallback)(() => {
                            e ? e() : l(d.NS.closeModal())
                        }, [l, e]),
                        clear: (0, n.useCallback)(() => {
                            l(d.NS.clearModals())
                        }, [l]),
                        handler: s
                    }
                },
                c = e => {
                    let a = (0, t.cb)(),
                        l = (0, o.wA)();
                    return (0, n.useCallback)(() => {
                        a < t.Rp.Medium ? e() : l(d.NS.clearModals())
                    }, [a, e])
                }
        }
    }
]);
//# sourceMappingURL=LanguageSettingsModal.979b92d3.js.map