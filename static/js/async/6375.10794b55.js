try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ae6b2117-4fff-44b5-9a39-c47ae92339cf", e._sentryDebugIdIdentifier = "sentry-dbid-ae6b2117-4fff-44b5-9a39-c47ae92339cf")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6375"], {
        75738: function(e, n, s) {
            s.d(n, {
                A: () => r
            });
            var a = s(46756),
                t = s.n(a),
                i = s(5421),
                l = s.n(i)()(t());
            l.push([e.id, ".Wrapper-i_zhYF{color:var(--color-neutrals-n-00);background-color:var(--color-neutrals-n-400);align-items:center;gap:8px;width:100%;margin:0;font-family:Shabnam;font-size:1.5rem;font-weight:500;line-height:2.4rem;display:flex}.Text-RD1I8H{margin:0}.Message-dKPJJJ{text-align:start;flex:1}.ClickableText-o6fsQ9{cursor:pointer;color:var(--color-primary-p-50)}", ""]);
            let r = l
        },
        98410: function(e, n, s) {
            s.r(n), s.d(n, {
                default: () => D
            });
            var a = s(36878),
                t = s(58191),
                i = s.n(t),
                l = s(53321),
                r = s.n(l),
                o = s(23518),
                d = s.n(o),
                f = s(14182),
                c = s.n(f),
                u = s(5033),
                b = s.n(u),
                h = s(77141),
                g = s.n(h),
                m = s(66338),
                p = s.n(m),
                y = s(75738),
                _ = {};
            _.styleTagTransform = p(), _.setAttributes = b(), _.insert = c().bind(null, "head"), _.domAPI = d(), _.insertStyleElement = g(), r()(y.A, _), y.A && y.A.locals && y.A.locals;
            let w = "Text-RD1I8H";
            var A = s(42625),
                k = s(35680),
                T = s(69789),
                v = s(26757),
                x = s(54569),
                C = s(27192),
                I = s(59360),
                M = s(19376),
                R = s(32076),
                E = s(77530);
            let D = i().memo(e => {
                let {
                    toastID: n
                } = e, {
                    useIntl: s,
                    useSelector: i,
                    useDispatch: l
                } = (0, k.uQ)(), {
                    formatMessage: r,
                    formatNumber: o
                } = s(), d = l(), f = i(T.M6), c = (0, E.C)().localParticipant.identity, u = (0, t.useMemo)(() => f ?? [], [f]), b = (0, t.useMemo)(() => u.filter(e => e !== c), [u, c]);
                (0, t.useEffect)(() => {
                    0 === b.length && C.oR.isActive(R.sP) && C.oR.dismiss(R.sP)
                }, [b]), (0, t.useEffect)(() => {
                    let e = setTimeout(() => {
                        C.oR.dismiss(n)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [b, n]);
                let h = (0, t.useCallback)(() => {
                        C.oR.dismiss(n), d(v.BA.setMeetInnerModals({
                            showCallMembersListModal: !0
                        }))
                    }, [d, n]),
                    g = b[0] ? (0, I.$X)(b[0]).uid : void 0,
                    m = i(e => g ? (0, T.CA)(e, g) : void 0),
                    p = m ? (0, M.RN)(m) : "",
                    y = 1 === b.length ? r(x.__.raise_hand.snackbars.hand_raised, {
                        name: p
                    }) : b.length > 1 ? r(x.__.raise_hand.snackbars.multiple_hands_raised, {
                        count: o((b.length - 1).toString()),
                        name: p
                    }) : "";
                return (0, a.jsxs)("div", {
                    className: (0, A.A)("Wrapper-i_zhYF"),
                    children: [(0, a.jsx)("p", {
                        className: (0, A.A)(w, "Message-dKPJJJ"),
                        children: y
                    }), (0, a.jsx)("p", {
                        onClick: h,
                        className: (0, A.A)(w, "ClickableText-o6fsQ9"),
                        children: r(x.__.raise_hand.snackbars.view_raised_hands)
                    })]
                })
            })
        }
    }
]);
//# sourceMappingURL=6375.10794b55.js.map