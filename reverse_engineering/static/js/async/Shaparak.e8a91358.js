try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            d = (new e.Error).stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d774f5df-2490-4792-b8de-13d5dce89452", e._sentryDebugIdIdentifier = "sentry-dbid-d774f5df-2490-4792-b8de-13d5dce89452")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8465"], {
        42622: function(e, d, n) {
            n.r(d), n.d(d, {
                default: () => f
            });
            var t = n(45831),
                a = n(58191),
                s = n(71081),
                i = n(53703);
            let f = () => ((0, a.useEffect)(() => {
                let e = window.location.search.substring(1).slice(7);
                new i.X2("shaparak-channel").postMessage(e).then(() => {
                    window.close()
                })
            }, []), (0, t.Y)("div", {
                style: {
                    width: "100vw",
                    height: "100vh"
                },
                "data-sentry-component": "Shaparak",
                "data-sentry-source-file": "Shaparak.tsx",
                children: (0, t.Y)(s.R, {
                    "data-sentry-element": "Loading",
                    "data-sentry-source-file": "Shaparak.tsx"
                })
            }))
        }
    }
]);
//# sourceMappingURL=Shaparak.e8a91358.js.map