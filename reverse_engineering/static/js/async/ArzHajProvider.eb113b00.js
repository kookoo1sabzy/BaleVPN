try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "97e9cfb1-92ad-4fd4-a4c0-2e4985a78a0c", e._sentryDebugIdIdentifier = "sentry-dbid-97e9cfb1-92ad-4fd4-a4c0-2e4985a78a0c")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2776"], {
        60737: function(e, a, t) {
            t.r(a), t.d(a, {
                default: () => v
            });
            var d = t(45831),
                n = t(59505),
                o = t(52484),
                r = t(74588),
                s = t(58191),
                l = t.n(s),
                i = t(27192),
                f = t(11933),
                u = t(77693),
                c = t(57737),
                b = t(71795),
                y = t(24549),
                p = t(87629),
                w = t(23329),
                h = t(65988),
                g = t(21452),
                k = t(2077),
                m = t(44251),
                z = t(22187),
                A = t(28945);
            let T = l().lazy(() => (0, r.G)({
                    url: "https://arz.bale.ai",
                    scope: "arz",
                    module: "Main"
                })),
                v = () => {
                    let e = (0, A.S)(),
                        a = (0, z.F)(),
                        t = (0, m.mJ)(),
                        r = (0, k.d4)(b.X),
                        l = (0, g.u)(o.TO.ArzMosaferatiMFE) ? T : n.A,
                        v = (0, k.d4)(e => (0, h.tl)(e, (0, u.H4)(e))),
                        D = (0, s.useMemo)(() => ({
                            safeRedirect: () => {
                                let {
                                    onSuccess: e,
                                    onError: a
                                } = (0, w.Y)();
                                return {
                                    onSuccess: a => {
                                        e((0, f.w)(a)), t(`/${m.V2.MY_BANK}`)
                                    },
                                    onError: a
                                }
                            },
                            isMosaferatiDisabled: e => r.find(a => {
                                let t = `${e.year}/${e.month}/${e.day}`;
                                return a.date === t
                            })
                        }), [r]),
                        E = (0, p.i)();
                    return (0, d.Y)(l, {
                        baseRoute: y.FY.ArzHaj,
                        exchange: "haj",
                        theme: e,
                        components: a,
                        rpc: null == E ? void 0 : E.webSdk.core.api,
                        isTooshle: !1,
                        callBacks: D,
                        useFileUrl: c.JD,
                        userId: (null == v ? void 0 : v.id) ?? 0,
                        toast: i.oR,
                        "data-sentry-element": "ArzPackage",
                        "data-sentry-component": "ArzHajProvider",
                        "data-sentry-source-file": "ArzHajProvider.tsx"
                    })
                }
        }
    }
]);
//# sourceMappingURL=ArzHajProvider.eb113b00.js.map