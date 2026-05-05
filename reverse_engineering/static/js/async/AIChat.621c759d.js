try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c14d6ea0-9fb6-4296-8c74-756aabdd769d", e._sentryDebugIdIdentifier = "sentry-dbid-c14d6ea0-9fb6-4296-8c74-756aabdd769d")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["976"], {
        65035: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => m
            });
            var a = n(45831),
                i = n(86515),
                o = n(58191),
                r = n(32303),
                l = n(57243),
                d = n.n(l),
                s = n(2077),
                u = n(52684),
                f = n(87629),
                c = n(18520),
                g = n(80073),
                w = n(55731),
                h = n(92810);
            let m = () => {
                let [e, t] = (0, o.useState)(!0), [n, l] = (0, o.useState)(), [m, b] = (0, o.useState)(!1), [p, v] = (0, o.useState)(!1), y = (0, w.y)(), A = (0, s.d4)(u.UJ), E = (0, s.d4)(h.t7), k = (0, f.i)(), _ = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    null != k && (0, c.s)(k.webSdk.core.ai.getAuthToken()).then(e => {
                        l(e)
                    }).catch(e => {
                        g.j.error("failed to get auth token", e)
                    })
                }, [k]);
                let C = (0, o.useCallback)(() => {
                    t(!1), b(!0)
                }, []);
                (0, o.useEffect)(() => {
                    if (m && _.current && (null == n ? void 0 : n.token)) try {
                        var e;
                        let t = new URL(n.url).origin,
                            a = {
                                token: n.token,
                                type: "BALE_AUTH_TOKEN",
                                name: (null == y ? void 0 : y.name) ?? ""
                            };
                        null == (e = _.current.contentWindow) || e.postMessage(a, t), g.j.info("sent auth token to iframe")
                    } catch (e) {
                        g.j.error("failed to post auth token to iframe", e)
                    }
                }, [m, n, null == y ? void 0 : y.name]), (0, o.useEffect)(() => {
                    let e = e => {
                        var t;
                        if (null == n ? void 0 : n.url) {
                            try {
                                let t = new URL((null == n ? void 0 : n.url) ?? "").origin;
                                if (e.origin !== t) return void g.j.warn("received message from unauthorized origin", e.origin)
                            } catch (e) {
                                g.j.error("failed to validate message origin", e);
                                return
                            }
                            if (null == (t = e.data) ? void 0 : t.type) switch (e.data.type) {
                                case "BALE_AUTH_SUCCESS":
                                    g.j.info("authentication successful in iframe"), v(!0);
                                    break;
                                case "BALE_AUTH_ERROR":
                                    g.j.error("authentication failed in iframe", e.data.error)
                            }
                        }
                    };
                    return window.addEventListener("message", e), () => {
                        window.removeEventListener("message", e)
                    }
                }, [null == n ? void 0 : n.url]), (0, o.useEffect)(() => {
                    if (p && _.current) try {
                        var e;
                        let t = new URL((null == n ? void 0 : n.url) ?? "").origin,
                            a = {
                                type: "BALE_INITIAL_DATA",
                                data: {
                                    theme: E,
                                    userName: (null == y ? void 0 : y.name) ?? ""
                                }
                            };
                        null == (e = _.current.contentWindow) || e.postMessage(a, t), g.j.info("sent initial data to iframe", a.data)
                    } catch (e) {
                        g.j.error("failed to send initial data to iframe", e)
                    }
                }, [p, E, null == y ? void 0 : y.name]);
                let I = !!(null == n ? void 0 : n.token);
                return (0, a.FD)("div", {
                    className: i.A.Container,
                    "data-sentry-component": "AIChat",
                    "data-sentry-source-file": "AIChat.tsx",
                    children: [e && (0, a.Y)(r.R, {
                        size: 36
                    }), (0, a.Y)("div", {
                        className: d()(i.A.IframeContainer, {
                            [i.A.Hidden]: e,
                            [i.A.Opening]: "Closing" === A,
                            [i.A.Open]: "Close" === A
                        }),
                        children: I && (0, a.Y)("iframe", {
                            ref: _,
                            className: d()(i.A.AIChat),
                            frameBorder: 0,
                            sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
                            title: "bale ai",
                            src: null == n ? void 0 : n.url,
                            onLoad: C
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=AIChat.621c759d.js.map