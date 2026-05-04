try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b00cfb37-f7a7-4765-9cc6-42568e7e1577", e._sentryDebugIdIdentifier = "sentry-dbid-b00cfb37-f7a7-4765-9cc6-42568e7e1577")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5249"], {
        6654: function(e, r, t) {
            t.d(r, {
                A: () => i
            });
            var o = t(46756),
                n = t.n(o),
                l = t(5421),
                a = t.n(l)()(n());
            a.push([e.id, ".fGRkgU{color:var(--color-neutrals-n-500);width:100%;background-color:var(--color-neutrals-surface);text-align:center;margin:0;padding:16px 12px;font-family:Shabnam;font-size:1.5rem;font-weight:400;line-height:2.4rem}@media screen and (min-width:768px){.fGRkgU{padding:16px 24px}}", ""]), a.locals = {
                ModalBody: "fGRkgU",
                modalBody: "fGRkgU"
            };
            let i = a
        },
        18382: function(e, r, t) {
            t.d(r, {
                A: () => i
            });
            var o = t(46756),
                n = t.n(o),
                l = t(5421),
                a = t.n(l)()(n());
            a.push([e.id, ".kM36bv{box-sizing:border-box;flex-shrink:0;justify-content:flex-end;align-items:flex-end;padding:0 .6rem 1.3rem;transition:transform .3s;display:flex;transform:translate(40px)}.kM36bv.GdOJfC{transform:translate(0)}@media screen and (min-width:576px){.kM36bv{transform:translate(0)}}.kM36bv svg{cursor:pointer}", ""]), a.locals = {
                wrapper: "kM36bv",
                active: "GdOJfC"
            };
            let i = a
        },
        94460: function(e, r, t) {
            t.d(r, {
                A: () => i
            });
            var o = t(46756),
                n = t.n(o),
                l = t(5421),
                a = t.n(l)()(n());
            a.push([e.id, ".iIV_t8{padding:0}.Srwovz{color:var(--color-neutrals-n-500);margin:0;padding:8px 0 20px;font-family:Shabnam;font-size:1.6rem;font-weight:400;line-height:2.4rem}.KmETD4{gap:12px}.IBugye{color:var(--color-neutrals-n-300);margin:0;padding:24px 0 20px;font-family:Shabnam;font-size:1.5rem;font-weight:400;line-height:2.4rem}.jO2gwI{white-space:pre-wrap;color:var(--color-neutrals-n-300);margin:0;padding:8px 0;font-family:Shabnam;font-size:1.5rem;font-weight:400;line-height:2.4rem}.Taa3zm{color:var(--color-primary-p-50)}.U83CjT{background-color:var(--color-neutrals-n-10);border-top:1px solid var(--color-neutrals-n-30)}.kuHzSJ{padding-bottom:20px}", ""]), a.locals = {
                body: "iIV_t8",
                text: "Srwovz",
                bodyWrapper: "KmETD4",
                description: "IBugye",
                descriptionGoldPacketAndWallet: "jO2gwI",
                primaryText: "Taa3zm",
                footer: "U83CjT",
                passwordField: "kuHzSJ"
            };
            let i = a
        },
        82178: function(e, r, t) {
            t.d(r, {
                A: () => m
            });
            var o = t(53321),
                n = t.n(o),
                l = t(23518),
                a = t.n(l),
                i = t(14182),
                d = t.n(i),
                s = t(5033),
                c = t.n(s),
                u = t(77141),
                h = t.n(u),
                f = t(66338),
                p = t.n(f),
                v = t(94460),
                g = {};
            g.styleTagTransform = p(), g.setAttributes = c(), g.insert = d().bind(null, "head"), g.domAPI = a(), g.insertStyleElement = h(), n()(v.A, g);
            let m = v.A && v.A.locals ? v.A.locals : void 0
        },
        21016: function(e, r, t) {
            t.d(r, {
                Z: () => l
            });
            var o = t(58191),
                n = t.n(o);
            let l = e => {
                var r;
                let t = null != (r = e.color) ? r : "#5E6C84";
                return e.bgColor, e.secondColor, n().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Card-icon"
                }, e), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M7.083 4.25c-2.572 0-4.333 1.987-4.333 4.544v6.528c0 2.557 1.761 4.544 4.333 4.544h9.801a4.5 4.5 0 0 0 3.188-1.36 4.153 4.153 0 0 0 1.169-3.184V8.794l.001-.046a4.153 4.153 0 0 0-1.17-3.137 4.5 4.5 0 0 0-3.188-1.361h-9.8M1.25 8.794c0-3.28 2.332-6.044 5.833-6.044h9.814a6 6 0 0 1 4.255 1.82 5.654 5.654 0 0 1 1.589 4.246V15.3a5.654 5.654 0 0 1-1.589 4.246 6 6 0 0 1-4.255 1.82H7.083c-3.501 0-5.833-2.764-5.833-6.044V8.794",
                    clipRule: "evenodd"
                }), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M1.25 9A.75.75 0 0 1 2 8.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9M4.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75",
                    clipRule: "evenodd"
                }))
            }
        },
        86499: function(e, r, t) {
            t.d(r, {
                _: () => l
            });
            var o = t(58191),
                n = t.n(o);
            let l = e => {
                var r;
                let t = null != (r = e.color) ? r : "#5E6C84";
                return e.bgColor, e.secondColor, n().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Password-icon"
                }, e), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M3.526 3.687C4.533 2.606 5.969 2 7.665 2h8.669c1.7 0 3.136.605 4.143 1.687C21.48 4.762 22 6.247 22 7.916v8.168c0 1.668-.521 3.154-1.523 4.23C19.47 21.393 18.034 22 16.333 22H7.665c-1.7 0-3.136-.605-4.143-1.687-1-1.075-1.522-2.56-1.522-4.229V7.916c0-1.67.524-3.154 1.526-4.23Zm1.097 1.022C3.923 5.46 3.5 6.56 3.5 7.916v8.168c0 1.359.421 2.456 1.12 3.207.693.745 1.715 1.209 3.045 1.209h8.668c1.33 0 2.353-.464 3.046-1.209.7-.75 1.121-1.848 1.121-3.207V7.916c0-1.359-.422-2.456-1.12-3.207-.694-.745-1.716-1.209-3.046-1.209H7.665c-1.325 0-2.347.464-3.042 1.21",
                    clipRule: "evenodd"
                }), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M8.84 10.898a1.102 1.102 0 1 0 .002 2.205 1.102 1.102 0 0 0-.003-2.205M6.237 12a2.602 2.602 0 1 1 5.205 0 2.602 2.602 0 0 1-5.205 0",
                    clipRule: "evenodd"
                }), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M9.941 12a.75.75 0 0 1 .75-.75h6.318a.75.75 0 0 1 .75.75v1.852a.75.75 0 0 1-1.5 0V12.75h-5.568a.75.75 0 0 1-.75-.75",
                    clipRule: "evenodd"
                }), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M14.18 11.25a.75.75 0 0 1 .75.75v1.852a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75",
                    clipRule: "evenodd"
                }))
            }
        },
        52966: function(e, r, t) {
            t.d(r, {
                Z: () => l
            });
            var o = t(58191),
                n = t.n(o);
            let l = e => {
                var r;
                let t = null != (r = e.color) ? r : "#5E6C84";
                return e.bgColor, e.secondColor, n().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Restore-icon"
                }, e), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M13.348 3.5a8.5 8.5 0 0 0-8.5 8.5.75.75 0 0 1-1.5 0c0-5.523 4.476-10 10-10 5.523 0 10 4.477 10 10s-4.477 10-10 10a9.98 9.98 0 0 1-7.612-3.514.75.75 0 1 1 1.141-.973 8.48 8.48 0 0 0 6.47 2.987 8.5 8.5 0 0 0 8.5-8.5 8.5 8.5 0 0 0-8.5-8.5",
                    clipRule: "evenodd"
                }), n().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M.839 9.284a.75.75 0 0 1 1.06-.02l2.348 2.263 2.349-2.262a.75.75 0 1 1 1.04 1.08l-2.868 2.763a.75.75 0 0 1-1.041 0L.859 10.345a.75.75 0 0 1-.02-1.06",
                    clipRule: "evenodd"
                }))
            }
        },
        69055: function(e, r, t) {
            t.d(r, {
                a: () => n
            });
            var o = t(36878);
            t(58191);
            let n = e => {
                let {
                    size: r,
                    color: t = "#238FF3",
                    ...n
                } = e;
                return (0, o.jsxs)("svg", {
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...n,
                    children: [(0, o.jsx)("path", {
                        d: "M15.6654 11.9914H8.33203",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        76789: function(e, r, t) {
            t.d(r, {
                u: () => n
            });
            var o = t(36878);
            t(58191);
            let n = e => {
                let {
                    size: r,
                    color: t = "#fff",
                    secondColor: n,
                    className: l,
                    ...a
                } = e;
                return (0, o.jsxs)("svg", {
                    ...a,
                    className: l,
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.5251 9.75272C20.886 5.81932 17.545 2.89308 13.5617 2.77789C13.3723 2.77047 13.1878 2.83866 13.0487 2.96743C12.9096 3.0962 12.8275 3.27499 12.8203 3.46439V3.46439V3.52846L13.2688 10.2378C13.2982 10.6895 13.6865 11.0328 14.1384 11.0067L20.8661 10.5582C21.0556 10.5442 21.2318 10.4552 21.3555 10.3108C21.4792 10.1665 21.5403 9.97882 21.5251 9.78933V9.75272Z",
                        stroke: n ?? t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, o.jsx)("path", {
                        d: "M8.90297 6.76975C9.33093 6.67075 9.76887 6.88972 9.94645 7.29148C9.99297 7.38598 10.0209 7.48852 10.0288 7.59354C10.1204 8.89332 10.3126 11.74 10.4224 13.2778C10.4412 13.5548 10.5695 13.8129 10.7791 13.995C10.9887 14.1771 11.2622 14.2681 11.5391 14.248V14.248L17.1867 13.9002C17.4389 13.885 17.686 13.9747 17.8698 14.1481C18.0535 14.3214 18.1574 14.5629 18.157 14.8155V14.8155C17.9281 18.2259 15.4779 21.0769 12.1407 21.8159C8.80348 22.5549 5.37864 21.0049 3.73135 18.01C3.2396 17.1481 2.92818 16.1951 2.81602 15.2091C2.76807 14.9065 2.74967 14.5999 2.7611 14.2938C2.77081 10.6518 5.32861 7.51371 8.89382 6.76975",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        85129: function(e, r, t) {
            t.d(r, {
                e: () => n
            });
            var o = t(36878);
            t(58191);
            let n = e => {
                let {
                    size: r,
                    color: t = "#238FF3",
                    ...n
                } = e;
                return (0, o.jsxs)("svg", {
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...n,
                    children: [(0, o.jsx)("path", {
                        d: "M11.9996 8.32812V15.6545",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, o.jsx)("path", {
                        d: "M15.6654 11.9914H8.33203",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        34182: function(e, r, t) {
            t.d(r, {
                E: () => b
            });
            var o = t(36878),
                n = t(58191),
                l = t(53321),
                a = t.n(l),
                i = t(23518),
                d = t.n(i),
                s = t(14182),
                c = t.n(s),
                u = t(5033),
                h = t.n(u),
                f = t(77141),
                p = t.n(f),
                v = t(66338),
                g = t.n(v),
                m = t(6654),
                w = {};
            w.styleTagTransform = g(), w.setAttributes = h(), w.insert = c().bind(null, "head"), w.domAPI = d(), w.insertStyleElement = p(), a()(m.A, w);
            let C = m.A && m.A.locals ? m.A.locals : void 0;
            var k = t(42625);
            let b = (0, n.forwardRef)((e, r) => {
                let {
                    className: t,
                    text: n,
                    ...l
                } = e;
                return (0, o.jsx)("div", {
                    className: (0, k.A)(C.ModalBody, t),
                    ref: r,
                    ...l,
                    children: n ?? l.children
                })
            })
        },
        90103: function(e, r, t) {
            t.d(r, {
                S: () => M
            });
            var o = t(45831);
            t(58191);
            var n = t(36878);
            let l = e => {
                    let {
                        color: r = "#238FF3",
                        size: t,
                        ...o
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...o,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("rect", {
                            fill: "none",
                            width: "24",
                            height: "24"
                        }), (0, n.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            d: "M5.67,0h8.67C17.73,0,20,2.38,20,5.92v8.171C20,17.62,17.73,20,14.34,20H5.67C2.28,20,0,17.62,0,14.091V5.92C0,2.38,2.28,0,5.67,0ZM9.43,12.99l4.75-4.75A.877.877,0,1,0,12.94,7L8.81,11.13,7.06,9.38a.877.877,0,0,0-1.24,1.24L8.2,12.99a.881.881,0,0,0,1.23,0Z",
                            transform: "translate(2 2)"
                        })]
                    })
                },
                a = e => {
                    let {
                        color: r = "#5E6C84",
                        size: t,
                        ...o
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...o,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("rect", {
                            fill: "none",
                            width: "24",
                            height: "24"
                        }), (0, n.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            d: "M16.334,2H7.665C4.268,2,2,4.433,2,7.916v8.168C2,19.571,4.262,22,7.665,22h8.668C19.738,22,22,19.571,22,16.084V7.916C22,4.43,19.738,2,16.334,2ZM7.665,3.5h8.669c2.55,0,4.166,1.735,4.166,4.416v8.168c0,2.681-1.616,4.416-4.167,4.416H7.665c-2.55,0-4.165-1.735-4.165-4.416V7.916C3.5,5.239,5.121,3.5,7.665,3.5Z",
                            transform: "translate(0 0)"
                        })]
                    })
                };
            var i = t(57243),
                d = t.n(i),
                s = t(53321),
                c = t.n(s),
                u = t(23518),
                h = t.n(u),
                f = t(14182),
                p = t.n(f),
                v = t(5033),
                g = t.n(v),
                m = t(77141),
                w = t.n(m),
                C = t(66338),
                k = t.n(C),
                b = t(18382),
                x = {};
            x.styleTagTransform = k(), x.setAttributes = g(), x.insert = p().bind(null, "head"), x.domAPI = h(), x.insertStyleElement = w(), c()(b.A, x);
            let S = b.A && b.A.locals ? b.A.locals : void 0;
            var y = t(99290);
            let M = e => {
                let r = d()("checkbox-wrapper", e.className, S.wrapper, {
                        [S.active]: e.isSelectMode
                    }),
                    t = (0, y.useTheme)();
                return (0, o.Y)("div", {
                    className: r,
                    onClick: e.isSelectMode ? e.onClick : void 0,
                    "data-sentry-component": "Checkbox",
                    "data-sentry-source-file": "Checkbox.tsx",
                    children: e.checked ? (0, o.Y)(l, {
                        size: 24,
                        color: t.primary[50]
                    }) : (0, o.Y)(a, {
                        size: 24,
                        onClick: e.isSelectMode ? void 0 : e.onClick,
                        color: t.dark[300]
                    })
                })
            }
        },
        72586: function(e, r, t) {
            t.d(r, {
                Z: () => b
            });
            var o = t(45831),
                n = t(86499),
                l = t(7305),
                a = t(72984),
                i = t(36214),
                d = t(58191),
                s = t(18520),
                c = t(41941),
                u = t(80073),
                h = t(47002),
                f = t(13205),
                p = t(87629),
                v = t(2077),
                g = t(44251),
                m = t(83452),
                w = t(934),
                C = t(82178),
                k = t(98999);
            let b = (e, r, t) => {
                let b = (0, p.i)(),
                    x = (0, g.mJ)(),
                    S = (0, v.wA)(),
                    {
                        formatMessage: y
                    } = (0, c.t)(),
                    M = (0, v.d4)(r => (0, m.Cd)(r, e)),
                    [R, j] = (0, d.useState)(!1),
                    z = (0, v.d4)(m.eK),
                    T = (0, v.d4)(m.mO),
                    A = async (d, c) => {
                        let p = (0, k.hm)(e, r, null == c ? void 0 : c.redirectToOnSuccess);
                        try {
                            let g = z;
                            if ((null == c ? void 0 : c.disablePrecheckHasPassword) || (j(!0), b && await (0, s.s)(b.webSdk.core.ramz.checkPasswordSet()).then(e => {
                                    g = e.hasSet, S(w.gM.setHasSetPassword({
                                        hasSetPassword: e.hasSet
                                    }))
                                }).catch(e => {
                                    u.j.error("failed to revalidate checkPasswordSet", e)
                                }).finally(() => {
                                    j(!1)
                                })), void 0 == g || g) {
                                if (M && "" != M && (0, k.gq)(M)) return void d(M);
                                if (null == t ? void 0 : t.openRamzModal) {
                                    var v;
                                    null == t || null == (v = t.openRamzModal) || v.call(t)
                                } else S(h.NS.openModal("RamzCheckPassword", {
                                    onSuccess: e => {
                                        S(h.NS.closeModal("RamzCheckPassword", () => {
                                            d(e)
                                        }))
                                    },
                                    peer: null == c ? void 0 : c.currentPeer,
                                    serviceType: e,
                                    product: r,
                                    redirectTo: null == c ? void 0 : c.redirectToOnSuccess
                                }))
                            } else if (e == l.C0.C2C) S(h.NS.openModal("ConfirmModal", {
                                title: y("ramz.set_password"),
                                description: (0, o.Y)("p", {
                                    className: C.A.IntroText,
                                    children: T
                                }),
                                icon: (0, o.Y)(n._, {
                                    size: 40,
                                    color: (0, a.Er)(i.Qs.color_neutrals_n_300)
                                }),
                                confirmText: y("confirm"),
                                cancelText: y("cancel"),
                                onConfirm: () => {
                                    let e = `${f.F.SetPassword}?${p.toString()}`;
                                    x(e)
                                },
                                onCancel: () => S(h.NS.closeModal())
                            }));
                            else {
                                let t = (0, k.hm)(e, r, null == c ? void 0 : c.redirectToOnSuccess),
                                    o = `${f.F.SetPassword}?${t.toString()}`;
                                x(o)
                            }
                        } catch (e) {
                            u.j.error("error in protect with ramz", e)
                        }
                    };
                return (0, d.useEffect)(() => {
                    let e = async () => {
                        if (b) try {
                            let {
                                hasSet: e
                            } = await (0, s.s)(b.webSdk.core.ramz.checkPasswordSet());
                            S(w.gM.setHasSetPassword({
                                hasSetPassword: e
                            }))
                        } catch (e) {
                            u.j.error("Failed to check password set:", e)
                        }
                    };
                    void 0 === z && e()
                }, [z]), {
                    token: M,
                    checkPasswordLoading: R,
                    protectWithRamz: A,
                    revalidateTokenBecauseOfError: e => {
                        if (null == t ? void 0 : t.openRamzModal) {
                            var r;
                            null == t || null == (r = t.openRamzModal) || r.call(t, e)
                        } else S(h.NS.openModal("RamzCheckPassword", {
                            errorText: e,
                            onSuccess: () => {
                                S(h.NS.closeModal("RamzCheckPassword"))
                            }
                        }))
                    }
                }
            }
        },
        98999: function(e, r, t) {
            function o(e) {
                if (void 0 == e) return !1;
                try {
                    let r, t = (r = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), JSON.parse(decodeURIComponent(window.atob(r).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    }).join(""))));
                    if (void 0 != t.exp) {
                        let e = Math.floor(Date.now() / 1e3);
                        return t.exp >= e
                    }
                } catch (e) {
                    return !1
                }
            }

            function n(e, r, t) {
                let o = new URLSearchParams;
                return o.append("serviceType", e.toString()), o.append("product", r), t && o.append("redirectTo", t), o
            }

            function l(e) {
                let r = new URLSearchParams(e),
                    t = r.get("serviceType");
                return {
                    serviceType: t,
                    product: r.get("product"),
                    redirectTo: r.get("redirectTo")
                }
            }
            t.d(r, {
                hm: () => n,
                Z$: () => l,
                gq: () => o
            })
        },
        30840: function(e, r, t) {
            t.d(r, {
                J: () => i
            });
            var o = t(78819),
                n = t(87629),
                l = t(58191);
            let a = t(80073).j.getLogger("useUser"),
                i = () => {
                    let e = (0, n.i)();
                    return {
                        getFullUser: (0, l.useCallback)(async r => null == e ? void 0 : e.webSdk.core.users.loadFullUser((0, o.j)(r)).toPromise().catch(e => {
                            a.error("loadFullUser = ", e)
                        }), []),
                        getUser: (0, l.useCallback)(async r => null == e ? void 0 : e.webSdk.core.users.loadUser((0, o.j)(r)).toPromise().catch(e => {
                            a.error("loadUser = ", e)
                        }), [])
                    }
                }
        }
    }
]);
//# sourceMappingURL=5249.bb2498c4.js.map