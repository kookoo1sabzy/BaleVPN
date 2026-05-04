try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            d = (new e.Error).stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "74977ecf-dbd3-483e-8f15-9b5986fd47a9", e._sentryDebugIdIdentifier = "sentry-dbid-74977ecf-dbd3-483e-8f15-9b5986fd47a9")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3204"], {
        50157: function(e, d, n) {
            n.r(d), n.d(d, {
                default: () => s
            });
            var t = n(45831),
                l = n(58191),
                o = n(71081),
                a = n(53703);
            let s = () => ((0, l.useEffect)(() => {
                new a.X2("shaparak-url").onmessage = e => {
                    window.console.log(e);
                    let d = document.createElement("a");
                    document.body.appendChild(d), d.style.display = "none", d.href = e.data || e, d.click(), document.body.removeChild(d)
                }
            }, []), (0, t.Y)("div", {
                style: {
                    width: "100vw",
                    height: "100vh"
                },
                "data-sentry-component": "Shaparak",
                "data-sentry-source-file": "Enroll.tsx",
                children: (0, t.Y)(o.R, {
                    "data-sentry-element": "Loading",
                    "data-sentry-source-file": "Enroll.tsx"
                })
            }))
        }
    }
]);
//# sourceMappingURL=Enroll.a81dd782.js.map