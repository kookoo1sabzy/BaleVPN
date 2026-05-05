try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            l = (new e.Error).stack;
        l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "9e23d09a-4e41-4949-9393-d699fa7ec732", e._sentryDebugIdIdentifier = "sentry-dbid-9e23d09a-4e41-4949-9393-d699fa7ec732")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6265"], {
        52966: function(e, l, n) {
            n.d(l, {
                Z: () => o
            });
            var d = n(58191),
                i = n.n(d);
            let o = e => {
                var l;
                let n = null != (l = e.color) ? l : "#5E6C84";
                return e.bgColor, e.secondColor, i().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Restore-icon"
                }, e), i().createElement("path", {
                    fill: n,
                    fillRule: "evenodd",
                    d: "M13.348 3.5a8.5 8.5 0 0 0-8.5 8.5.75.75 0 0 1-1.5 0c0-5.523 4.476-10 10-10 5.523 0 10 4.477 10 10s-4.477 10-10 10a9.98 9.98 0 0 1-7.612-3.514.75.75 0 1 1 1.141-.973 8.48 8.48 0 0 0 6.47 2.987 8.5 8.5 0 0 0 8.5-8.5 8.5 8.5 0 0 0-8.5-8.5",
                    clipRule: "evenodd"
                }), i().createElement("path", {
                    fill: n,
                    fillRule: "evenodd",
                    d: "M.839 9.284a.75.75 0 0 1 1.06-.02l2.348 2.263 2.349-2.262a.75.75 0 1 1 1.04 1.08l-2.868 2.763a.75.75 0 0 1-1.041 0L.859 10.345a.75.75 0 0 1-.02-1.06",
                    clipRule: "evenodd"
                }))
            }
        }
    }
]);
//# sourceMappingURL=Contacts.fbdb5d89.js.map