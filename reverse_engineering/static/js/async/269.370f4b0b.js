try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d165c60d-61c8-4eda-a1b6-3635c765efa4", e._sentryDebugIdIdentifier = "sentry-dbid-d165c60d-61c8-4eda-a1b6-3635c765efa4")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["269"], {
        60653: function(e, n, l) {
            l.d(n, {
                A: () => r
            });
            var t = l(46756),
                o = l.n(t),
                i = l(5421),
                a = l.n(i)()(o());
            a.push([e.id, ".Modal-H9Bx_U{max-width:376px;height:auto}.Content-_iFTav{flex-direction:column;gap:1.2rem;width:100%;padding:1.2rem;display:flex}.Text-FW1zcd{color:var(--color-neutrals-n-500);text-align:center;margin:0;font-family:Shabnam;font-size:15px;font-weight:400;line-height:23px}.CheckBox-yvuR4J{cursor:pointer;gap:1rem;padding:1.25rem .2rem 0;display:flex}", ""]);
            let r = a
        },
        78247: function(e, n, l) {
            l.d(n, {
                A: () => r
            });
            var t = l(46756),
                o = l.n(t),
                i = l(5421),
                a = l.n(i)()(o());
            a.push([e.id, ".Wrapper-prw0UX{background-color:var(--color-neutrals-n-00);border-radius:1.5rem;max-width:336px;overflow:hidden}@media screen and (min-width:768px){.Wrapper-prw0UX{max-width:376px}}.Header-L87Weu{border:1px solid var(--color-neutrals-n-30);justify-content:space-between;align-items:center;padding:1.6rem;display:flex}.CloseButton-Q3F6gW{cursor:pointer;position:absolute}.Container-Gf0Aqj{flex-direction:column;justify-content:center;align-items:center;gap:16px;display:flex;width:100%!important}.Title-jcJtss{color:var(--color-neutrals-n-500);text-align:center;flex:1;margin:0;font-family:Shabnam;font-size:16px;font-weight:500;line-height:24px}.Content-LC16Oc{flex-direction:column;align-items:center;display:flex}.Description-geubZW{color:var(--color-neutrals-n-500);text-align:center;margin:0;padding:0 1.2rem;font-family:Shabnam;font-size:15px;line-height:23px;margin:1.5rem 0!important}.ActionBar-EZxzmn{justify-content:space-between;align-items:center;column-gap:.8rem;width:100%;padding:1.2rem;display:flex}.ActionBar-EZxzmn.notVisible-B3f2vS{display:none}.ActionButton-wWgXAL{flex:1;width:auto;margin:0 6px;min-width:150px!important}.ActionButton-wWgXAL.isConfirm-X29LVq{width:100%}@media screen and (min-width:576px){.ActionButton-wWgXAL{min-width:170px!important}}", ""]);
            let r = a
        },
        10835: function(e, n, l) {
            l.d(n, {
                A: () => r
            });
            var t = l(46756),
                o = l.n(t),
                i = l(5421),
                a = l.n(i)()(o());
            a.push([e.id, ".ModalContentStyles-QLTz7o{position:initial;border-radius:none;background-color:transparent;border:none;flex-direction:column;justify-content:center;align-items:center;padding:0;display:flex}.ModalContentStyles-QLTz7o.fullScreenInMobile-T1pP9_{align-self:flex-start;width:100%;height:100%}@media screen and (min-width:768px){.ModalContentStyles-QLTz7o.fullScreenInMobile-T1pP9_{align-self:center}.ModalContentStyles-QLTz7o{width:auto!important;height:auto!important}}.CloseButton-valkTt{cursor:pointer;width:40px;height:40px;position:absolute;top:1rem;right:1rem}", ""]);
            let r = a
        },
        80629: function(e, n, l) {
            l.d(n, {
                a: () => i
            });
            var t = l(58191),
                o = l.n(t);
            let i = e => {
                var n;
                let l = null != (n = e.color) ? n : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "LowerHandIcon-icon"
                }, e), o().createElement("path", {
                    fill: l,
                    stroke: l,
                    strokeWidth: .2,
                    d: "m15.505 13.109-.071-.071.07.07c.266-.265.513-.51.835-.671.404-.202 1.053-.37 1.622-.33.284.02.54.09.737.225.18.125.315.308.373.572-.194.151-.393.3-.593.45l-.004.003c-.615.461-1.244.933-1.78 1.491l-1.594 1.66c-.913.952-1.595 2.043-2.244 3.168-.23.4-.658.648-1.12.648H8.68a.94.94 0 0 1-.434-.107 1.758 1.758 0 0 1-.813-.89l-.702-1.705a8.405 8.405 0 0 1-.632-3.198V7.2a.5.5 0 0 1 1 0v4.2a.7.7 0 0 0 1.4 0v-6a.5.5 0 0 1 1 0v4.8a.7.7 0 0 0 1.4 0v-6a.5.5 0 0 1 1 0v6a.7.7 0 1 0 1.4 0V5.4a.5.5 0 0 1 1 0v7.198a.7.7 0 0 0 1.194.521l.01-.01ZM4.7 14.424c0 1.28.25 2.547.737 3.73l.702 1.706a3.158 3.158 0 0 0 1.462 1.6 2.34 2.34 0 0 0 1.08.264h3.055c.963 0 1.853-.515 2.333-1.35.599-1.038 1.213-2.033 2.041-2.896l1.594-1.66c.523-.545 1.144-1.006 1.766-1.468.24-.178.48-.356.713-.538a.823.823 0 0 0 .317-.648c0-.475-.169-.966-.441-1.372-.272-.405-.654-.733-1.088-.871-1.12-.377-2.21-.26-3.258.264l-.013.006V5.4a1.9 1.9 0 0 0-2.498-1.804 1.9 1.9 0 0 0-3.604 0A1.9 1.9 0 0 0 7.1 5.366 1.902 1.902 0 0 0 4.7 7.2v7.224Z"
                }), o().createElement("path", {
                    fill: l,
                    stroke: "#FCFDFD",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m18.865 2.866.35.35-.35-.35-15.999 16a1.25 1.25 0 0 0 1.768 1.768l15.999-16a1.25 1.25 0 1 0-1.768-1.768"
                }))
            }
        },
        21725: function(e, n, l) {
            l.d(n, {
                q: () => i
            });
            var t = l(58191),
                o = l.n(t);
            let i = e => {
                var n;
                let l = null != (n = e.color) ? n : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "TwoUser-icon"
                }, e), o().createElement("mask", {
                    id: "mask0_1732_25381",
                    width: 16,
                    height: 9,
                    x: 2,
                    y: 13,
                    maskUnits: "userSpaceOnUse",
                    style: {
                        maskType: "luminance"
                    }
                }, o().createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M2 13.957h15.184v7.1H2z",
                    clipRule: "evenodd"
                })), o().createElement("g", {
                    mask: "url(#mask0_1732_25381)"
                }, o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M9.592 15.457c-2.779 0-6.092.357-6.092 2.062 0 1.352 2.05 2.038 6.092 2.038s6.092-.693 6.092-2.058c0-1.355-2.05-2.042-6.092-2.042m0 5.6c-2.076 0-7.592 0-7.592-3.538 0-3.562 5.714-3.562 7.592-3.562 3.259 0 7.592.367 7.592 3.542 0 3.558-5.714 3.558-7.592 3.558",
                    clipRule: "evenodd"
                })), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M9.593 3.5a3.64 3.64 0 0 0-3.636 3.635 3.64 3.64 0 0 0 3.636 3.635h.031a3.594 3.594 0 0 0 2.553-1.07 3.587 3.587 0 0 0 1.051-2.562A3.64 3.64 0 0 0 9.593 3.5m0 8.77a5.142 5.142 0 0 1-5.136-5.135A5.142 5.142 0 0 1 9.593 2a5.141 5.141 0 0 1 5.135 5.135 5.077 5.077 0 0 1-1.487 3.622 5.081 5.081 0 0 1-3.614 1.513h-.034M16.484 11.13a.75.75 0 0 1-.104-1.492 2.559 2.559 0 0 0 2.192-2.52 2.538 2.538 0 0 0-2.133-2.514.75.75 0 0 1 .242-1.481 4.033 4.033 0 0 1 3.39 3.996 4.069 4.069 0 0 1-3.482 4.005.74.74 0 0 1-.105.007",
                    clipRule: "evenodd"
                }), o().createElement("mask", {
                    id: "mask1_1732_25381",
                    width: 5,
                    height: 6,
                    x: 17,
                    y: 13,
                    maskUnits: "userSpaceOnUse",
                    style: {
                        maskType: "luminance"
                    }
                }, o().createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M17.844 13.484h4.133v4.978h-4.133v-4.978",
                    clipRule: "evenodd"
                })), o().createElement("g", {
                    mask: "url(#mask1_1732_25381)"
                }, o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M19.894 18.462a.75.75 0 0 1-.266-1.451c.85-.322.85-.715.85-.883 0-.567-.671-.955-1.994-1.152a.752.752 0 0 1-.632-.853.762.762 0 0 1 .853-.632c2.706.405 3.273 1.658 3.273 2.637 0 .729-.315 1.716-1.818 2.285a.75.75 0 0 1-.266.049",
                    clipRule: "evenodd"
                })))
            }
        },
        589: function(e, n, l) {
            l.d(n, {
                G: () => i
            });
            var t = l(58191),
                o = l.n(t);
            let i = e => {
                var n;
                let l = null != (n = e.color) ? n : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "VideoUnmute-icon"
                }, e), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M6.128 5.505h-.045C4.566 5.57 3.44 6.797 3.503 8.19v.771a5754.127 5754.127 0 0 0 .003 5.787v.143a.75.75 0 0 1-1.5.004v-.143a2155.483 2155.483 0 0 1-.003-5.792v-.72C1.91 5.973 3.733 4.104 6.02 4.007c.137-.005 1.892-.003 3.572 0 .863 0 1.721.002 2.364.003l1.07.002-.002.75-.002.75-1.069-.002a7127.366 7127.366 0 0 0-5.56-.006l-.265.001m7.646-.742a.75.75 0 0 1-.752.749l.002-.75.001-.75a.75.75 0 0 1 .749.751m1.82.728a.75.75 0 0 1 1.054.13 4.067 4.067 0 0 1 .498.821 3.976 3.976 0 0 1 .341 1.324v.002c.004.051.005.218.006.397v.016l.002.866a2049.607 2049.607 0 0 1 .002 5.095v1.133c.09 2.265-1.736 4.13-4.022 4.224-.102.003-1.872.001-3.574-.002-.864 0-1.723-.002-2.366-.004l-1.043-.002.03-.002-.057-.748.002-.75 1.07.002a10223.91 10223.91 0 0 0 5.567.008l.284-.001h.025c1.517-.062 2.646-1.287 2.585-2.677a.74.74 0 0 1-.001-.033v-1.148a5453.669 5453.669 0 0 0-.004-5.954 54.045 54.045 0 0 0-.001-.305 2.49 2.49 0 0 0-.526-1.34.75.75 0 0 1 .129-1.052m-9.129 13.25.057.748-.03.002a4.342 4.342 0 0 1-1.44-.142 4.259 4.259 0 0 1-1.849-1.063.75.75 0 0 1 1.053-1.068 2.7 2.7 0 0 0 1.193.684 2.796 2.796 0 0 0 .96.091.758.758 0 0 1 .058-.002l-.002.75Z",
                    clipRule: "evenodd"
                }), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M21.332 8.002a.498.498 0 0 0-.814-.385l-3.293 2.695a.75.75 0 0 1-.95-1.161l3.293-2.695c1.306-1.07 3.266-.137 3.264 1.548l-.012 7.349c-.002 1.688-1.964 2.61-3.266 1.541l-3.28-2.695a.75.75 0 0 1 .952-1.16l3.28 2.696a.498.498 0 0 0 .814-.383l.012-7.35M18.28 3.22a.75.75 0 0 1 0 1.06l-16 16a.75.75 0 0 1-1.06-1.06l15.999-16a.75.75 0 0 1 1.06 0",
                    clipRule: "evenodd"
                }))
            }
        },
        92696: function(e, n, l) {
            l.d(n, {
                t: () => i
            });
            var t = l(58191),
                o = l.n(t);
            let i = e => {
                var n;
                let l = null != (n = e.color) ? n : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "VoiceUnmute-icon"
                }, e), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M4.715 10.184a.75.75 0 0 1 .75.75c0 1.759.681 3.357 1.796 4.547l.21.215a.75.75 0 0 1-1.06 1.06 8.128 8.128 0 0 1-2.446-5.823.75.75 0 0 1 .75-.75m14.808 0a.75.75 0 0 1 .75.75A8.153 8.153 0 0 1 8.41 18.197a.75.75 0 1 1 .683-1.335 6.653 6.653 0 0 0 9.68-5.928.75.75 0 0 1 .75-.75",
                    clipRule: "evenodd"
                }), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M12.121 17.586a.75.75 0 0 1 .75.75v2.81a.75.75 0 0 1-1.5 0v-2.81a.75.75 0 0 1 .75-.75M11.992 3.465a2.91 2.91 0 0 0-2.91 2.91v4.55c0 .626.196 1.203.53 1.676a.75.75 0 1 1-1.225.865 4.393 4.393 0 0 1-.805-2.54V6.374a4.41 4.41 0 0 1 4.41-4.41h.252a4.411 4.411 0 0 1 4.388 3.96c.005.056.007.16.008.23v.009l.005.327.003.323v.025l.003.15a.75.75 0 0 1-1.5.042 9.047 9.047 0 0 1-.002-.175l-.013-.81a2.911 2.911 0 0 0-2.892-2.581h-.252m3.912 6.285a.75.75 0 0 1 .75.75v.425a4.41 4.41 0 0 1-4.41 4.41h-.252a4.48 4.48 0 0 1-.235-.006.75.75 0 1 1 .079-1.498c.051.003.104.004.156.004h.252a2.91 2.91 0 0 0 2.91-2.91V10.5a.75.75 0 0 1 .75-.75",
                    clipRule: "evenodd"
                }), o().createElement("path", {
                    fill: l,
                    fillRule: "evenodd",
                    d: "M20.678 2.47a.75.75 0 0 1 0 1.06L3.53 20.678a.75.75 0 1 1-1.06-1.06L19.617 2.47a.75.75 0 0 1 1.061 0",
                    clipRule: "evenodd"
                }))
            }
        },
        3103: function(e, n, l) {
            l.d(n, {
                A: () => _
            });
            var t = l(36878),
                o = l(58191),
                i = l(80937),
                a = l(53321),
                r = l.n(a),
                s = l(23518),
                c = l.n(s),
                d = l(14182),
                p = l.n(d),
                m = l(5033),
                h = l.n(m),
                u = l(77141),
                f = l.n(u),
                v = l(66338),
                g = l.n(v),
                x = l(60653),
                C = {};
            C.styleTagTransform = g(), C.setAttributes = h(), C.insert = p().bind(null, "head"), C.domAPI = c(), C.insertStyleElement = f(), r()(x.A, C), x.A && x.A.locals && x.A.locals;
            let b = "Text-FW1zcd";
            var y = l(4832),
                w = l(95534),
                k = l(3101),
                A = l(78247),
                E = {};
            E.styleTagTransform = g(), E.setAttributes = h(), E.insert = p().bind(null, "head"), E.domAPI = c(), E.insertStyleElement = f(), r()(A.A, E), A.A && A.A.locals && A.A.locals;
            let T = "ActionButton-wWgXAL";
            var j = l(42625),
                M = l(35680),
                S = l(51586);
            let L = e => {
                let {
                    useTheme: n
                } = (0, M.uQ)(), {
                    NavButton: l
                } = (0, S.kj)(), o = n();
                return (0, t.jsxs)("div", {
                    className: (0, j.A)("Wrapper-prw0UX", e.className),
                    children: [!e.hideHeader && (0, t.jsxs)("div", {
                        className: "Header-L87Weu",
                        children: [e.showXButton && (0, t.jsx)(w.K, {
                            onClick: e.onCancel,
                            className: "CloseButton-Q3F6gW",
                            children: (0, t.jsx)(l, {
                                close: !0
                            })
                        }), (0, t.jsxs)("div", {
                            className: "Container-Gf0Aqj",
                            children: [e.icon, (0, t.jsx)("div", {
                                className: "Title-jcJtss",
                                children: e.title
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "Content-LC16Oc",
                        children: [e.description && (0, t.jsx)("p", {
                            className: "Description-geubZW",
                            style: {
                                direction: e.descriptionDirection
                            },
                            children: e.description
                        }), e.children, (0, t.jsxs)("div", {
                            className: (0, j.A)("ActionBar-EZxzmn", {
                                "notVisible-B3f2vS": !e.confirmText && !e.cancelText
                            }),
                            children: [e.confirmText && (0, t.jsx)(k.XD, {
                                className: (0, j.A)(T, {
                                    "isConfirm-X29LVq": e.confirmText
                                }),
                                color: e.confirmColor,
                                loading: e.loading,
                                text: e.confirmText,
                                size: k.Se.SMALL,
                                variant: e.confirmButtonVariant,
                                onClick: e.onConfirm,
                                disabled: e.confirmDisabled
                            }), e.cancelText && (0, t.jsx)(k.XD, {
                                className: T,
                                style: {
                                    borderColor: `${e.cancelColor??o.dark[300]} !important
            `
                                },
                                color: e.cancelColor,
                                text: e.cancelText,
                                size: k.Se.SMALL,
                                variant: k.GJ.OUTLINED,
                                onClick: e.onCancel
                            })]
                        })]
                    })]
                })
            };
            var B = l(72984),
                z = l(36214),
                R = l(44971);
            let _ = e => {
                let {
                    useIntl: n
                } = (0, M.uQ)(), [l, a] = (0, o.useState)(!1), {
                    formatMessage: r
                } = n(), s = () => {
                    e.onConfirm(l)
                };
                return ((e, n) => {
                    let {
                        isMobile: l
                    } = (0, i.tw)(), t = (0, o.useCallback)(n => {
                        if ("Enter" === n.key && !l() && !n.ctrlKey && !n.shiftKey) {
                            n.preventDefault(), e();
                            return
                        }
                    }, [e]);
                    return (0, o.useEffect)(() => {
                        if (n) return window.addEventListener("keypress", t), () => {
                            window.removeEventListener("keypress", t)
                        }
                    }, [t])
                })(s, e.isOpen), (0, t.jsx)(y.O, {
                    isOpen: e.isOpen,
                    onClose: e.onClose,
                    backgroundColor: (0, B.Er)(z.Qs.color_bubble_mask),
                    children: (0, t.jsx)(L, {
                        confirmText: e.confirmText ?? r("yes"),
                        cancelText: e.cancelText,
                        title: e.title,
                        onConfirm: s,
                        onCancel: e.onClose,
                        className: "Modal-H9Bx_U",
                        confirmColor: e.confirmColor,
                        cancelColor: e.cancelColor,
                        loading: e.loading,
                        children: (0, t.jsxs)("div", {
                            className: "Content-_iFTav",
                            children: [(0, t.jsx)("p", {
                                className: b,
                                children: e.description
                            }), e.checkBoxText && (0, t.jsxs)("div", {
                                className: "CheckBox-yvuR4J",
                                onClick: () => {
                                    a(e => !e)
                                },
                                children: [(0, t.jsx)(R.S, {
                                    checked: l
                                }), (0, t.jsx)("p", {
                                    className: b,
                                    children: e.checkBoxText
                                })]
                            })]
                        })
                    })
                })
            }
        },
        4832: function(e, n, l) {
            l.d(n, {
                O: () => A
            });
            var t = l(36878),
                o = l(58191),
                i = l.n(o),
                a = l(94644),
                r = l.n(a),
                s = l(53321),
                c = l.n(s),
                d = l(23518),
                p = l.n(d),
                m = l(14182),
                h = l.n(m),
                u = l(5033),
                f = l.n(u),
                v = l(77141),
                g = l.n(v),
                x = l(66338),
                C = l.n(x),
                b = l(10835),
                y = {};
            y.styleTagTransform = C(), y.setAttributes = f(), y.insert = h().bind(null, "head"), y.domAPI = p(), y.insertStyleElement = g(), c()(b.A, y), b.A && b.A.locals && b.A.locals;
            var w = l(42625);
            let k = {
                zIndex: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            };
            class A extends i().Component {
                render() {
                    return (0, t.jsxs)(r(), {
                        isOpen: this.props.isOpen,
                        onRequestClose: this.props.onClose,
                        shouldCloseOnOverlayClick: !this.props.shouldNotClose && this.props.shouldCloseOnOverlayClick,
                        shouldCloseOnEsc: !this.props.shouldNotClose,
                        style: {
                            overlay: {
                                ...k,
                                ...this.props.overlayStyle,
                                backgroundColor: this.props.backgroundColor,
                                height: this.props.fullHeight || this.props.shouldHandleKeyboardOpen ? "calc(var(--vh, 1vh) * 100)" : "initial",
                                transition: this.props.haveTransition ? "opacity 100ms ease-in-out" : "none"
                            },
                            content: {
                                height: this.props.fullScreenInMobile || this.props.shouldHandleKeyboardOpen ? "calc(var(--vh, 1vh) * 100)" : "initial"
                            }
                        },
                        className: (0, w.A)("ModalContentStyles-QLTz7o", {
                            "fullScreenInMobile-T1pP9_": this.props.fullScreenInMobile
                        }),
                        ...this.props.reactModalProps,
                        children: [this.props.showCloseButton && (0, t.jsx)("img", {
                            className: "CloseButton-valkTt",
                            src: "/icons/ic_close.svg",
                            alt: "ic_close",
                            onClick: this.props.onClose
                        }), this.props.children]
                    })
                }
                constructor(e) {
                    super(e);
                    let n = document.getElementById("root");
                    n || (n = document.createElement("div")), r().setAppElement(n)
                }
            }
            A.defaultProps = {
                shouldNotClose: !1
            }
        }
    }
]);
//# sourceMappingURL=269.370f4b0b.js.map