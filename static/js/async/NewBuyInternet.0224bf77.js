try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f43b98dc-9d62-42aa-9f3b-618a4777d189", e._sentryDebugIdIdentifier = "sentry-dbid-f43b98dc-9d62-42aa-9f3b-618a4777d189")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1035"], {
        91443: function(e, t, n) {
            n.d(t, {
                l: () => N,
                NewBuyInternet: () => x
            });
            var r = n(45831),
                a = n(44251),
                s = n(63066),
                o = n(52484),
                l = n(58191),
                d = n(27192),
                i = n(87629),
                c = n(76591),
                u = n(98391),
                y = n(77693),
                f = n(21843),
                b = n(47002),
                p = n(60532),
                w = n(24549),
                g = n(23329),
                m = n(92810),
                k = n(87197),
                h = n(31855),
                M = n(2077),
                v = n(27648),
                I = n(82217),
                R = n(99290),
                C = n(61137),
                D = n(81205),
                P = n(31809),
                _ = n(32649);
            let B = e => {
                let [t, n] = (0, l.useState)(!0), a = (0, R.useTheme)(), s = (0, l.useCallback)(() => {
                    n(!1)
                }, []), o = (0, l.useCallback)(() => {}, []), d = (0, l.useCallback)(() => {
                    var t;
                    e.newData && (null == (t = e.deleteOrders) || t.call(e, [e.newData.id]))
                }, []);
                return (0, r.Y)(P._, {
                    isOpen: t,
                    onClose: s,
                    "data-sentry-element": "MoreMenuWrapper",
                    "data-sentry-component": "RecentPackageMoreMenu",
                    "data-sentry-source-file": "RecentPackageMoreMenu.tsx",
                    children: (0, r.FD)(C.C, {
                        color: e.disable ? a.light[30] : void 0,
                        toLeft: !0,
                        width: "auto",
                        disabled: e.disable,
                        "data-sentry-element": "DropDown",
                        "data-sentry-source-file": "RecentPackageMoreMenu.tsx",
                        children: [(0, r.Y)(D.Dr, {
                            disabled: !0,
                            title: _.strings.transaction_receipt,
                            onClick: o,
                            color: a.dark[100],
                            icon: (0, r.Y)(v.Z, {
                                css: (0, R.css)`
                margin-left: 0.6rem;
              `,
                                color: a.dark[100],
                                secondColor: a.dark[100],
                                size: 20
                            }),
                            "data-sentry-element": "MenuItem",
                            "data-sentry-source-file": "RecentPackageMoreMenu.tsx"
                        }), (0, r.Y)(D.Dr, {
                            title: _.strings.delete,
                            onClick: d,
                            color: a.error,
                            icon: (0, r.Y)(I.e, {
                                css: (0, R.css)`
                margin-left: 0.6rem;
              `,
                                color: a.error,
                                size: 20
                            }),
                            "data-sentry-element": "MenuItem",
                            "data-sentry-source-file": "RecentPackageMoreMenu.tsx"
                        })]
                    })
                })
            };
            var Y = n(77439),
                T = n(84900),
                S = n(5127);
            let N = () => {
                    var e;
                    let t = (0, i.i)(),
                        n = (0, a.mJ)(),
                        v = (0, M.wA)(),
                        {
                            logEvent: I
                        } = (0, u.yw)(),
                        R = (0, M.d4)(e => (0, p.Fw)(e, o.$Z.internetSupportEnabled)),
                        C = (0, M.d4)(e => {
                            var t;
                            return t = (0, m.t2)(e), "true" == (0, k._W)(t, o.$Z.internet_use_wallet, "true")
                        }),
                        D = (0, l.useMemo)(() => ({
                            chargeUseWallet: !1,
                            internetUseWallet: C
                        }), [C]),
                        P = (0, l.useMemo)(() => ({
                            onClose: () => {
                                n(`/${a.V2.MY_BANK}`)
                            },
                            safeRedirect: g.Y,
                            useWallet: c.vT,
                            shareInternetReceipt: e => {
                                v(b.NS.openModal("ShareReceipt", {
                                    receipt: (0, S.u)(e)
                                }))
                            },
                            loadUsers: null == t ? void 0 : t.webSdk.core.users.loadUsers,
                            logEvent: I
                        }), []),
                        _ = (0, l.useMemo)(() => ({
                            useWallet: c.vT
                        }), []),
                        N = (0, l.useMemo)(() => ({
                            PhoneField: Y.P,
                            TopBar: T.V,
                            RecentPackageMoreMenu: B,
                            LocalModal: f.F_
                        }), []),
                        x = (0, M.d4)(e => (0, y.rp)(e)),
                        E = w.I1;
                    return (0, r.Y)(s.A, {
                        isMobile: (0, h.Fr)(),
                        isTooshle: !1,
                        baseRoute: E,
                        rpc: null == t ? void 0 : t.webSdk.core.api,
                        intercharge: "internet",
                        DataBase: null == t || null == (e = t.webSdk) ? void 0 : e.core.storage,
                        toast: d.oR,
                        callbacks: P,
                        myPhoneNumber: x,
                        supportBotLink: R,
                        components: N,
                        hooks: _,
                        settings: D,
                        "data-sentry-element": "Charnet",
                        "data-sentry-component": "BuyInternetProvider",
                        "data-sentry-source-file": "BuyInternetProvider.tsx"
                    })
                },
                x = () => (0, r.Y)(f.mO, {
                    "data-sentry-element": "Wrapper",
                    "data-sentry-component": "NewBuyInternet",
                    "data-sentry-source-file": "NewBuyInternet.tsx",
                    children: (0, r.Y)(N, {
                        "data-sentry-element": "BuyInternetProvider",
                        "data-sentry-source-file": "NewBuyInternet.tsx"
                    })
                })
        }
    }
]);
//# sourceMappingURL=NewBuyInternet.0224bf77.js.map