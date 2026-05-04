try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2dbcf12-0f22-40d3-94ce-dd5e1f46a890", e._sentryDebugIdIdentifier = "sentry-dbid-a2dbcf12-0f22-40d3-94ce-dd5e1f46a890")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5138"], {
        59339: function(e, t, i) {
            i.r(t), i.d(t, {
                default: () => S
            });
            var r, n, o = i(45831),
                l = i(63727),
                a = i(13274),
                c = i(29083),
                p = i(99290),
                s = i(41349),
                g = i(617),
                d = i(91755),
                u = i(29066),
                f = i(84323),
                m = i(23942),
                h = i(22279),
                x = i(5845),
                b = i(23555),
                y = i(38344),
                $ = i.n(y);
            let v = i.p + "static/svg/reciept-bubble.b6a07c1d.svg";
            (r = n || (n = {})).Medium = "Medium", r.Regular = "Regular";
            let T = {
                    [n.Medium]: "500",
                    [n.Regular]: "normal"
                },
                k = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Regular;
                    return `
  font-family: IRANSans;
  font-weight: ${T[e]}
`
                },
                w = $().p`
  ${e=>`
     margin: 0;
    ${k(e.fontWeight??n.Regular)};
     font-size: ${e.fontSize}px;
     line-height: ${e.lineHeight}px;
     ${e.color?`color: ${e.color};`:""}
     ${e.margin?`margin: ${e.margin};`:""}
     ${e.marginRight?`margin-right: ${e.marginRight}px;`:""}
     ${e.marginLeft?`margin-left: ${e.marginLeft}px;`:""}
     ${e.marginBottom?`margin-bottom: ${e.marginBottom}px;`:""}
     ${e.marginTop?`margin-top: ${e.marginTop}px;`:""}
  `}
`;
            $().span`
  ${e=>`
     margin: 0;
    ${k(e.fontWeight??n.Regular)};
     font-size: ${e.fontSize}px;
     line-height: ${e.lineHeight}px;
     ${e.color?`color: ${e.color};`:""}
     ${e.margin?`margin: ${e.margin};`:""}
     ${e.marginRight?`margin-right: ${e.marginRight}px;`:""}
     ${e.marginLeft?`margin-left: ${e.marginLeft}px;`:""}
     ${e.marginBottom?`margin-bottom: ${e.marginBottom}px;`:""}
     ${e.marginTop?`margin-top: ${e.marginTop}px;`:""}
  `}
`, (0, p.css)`
  ${k(n.Regular)};
  font-size: 16px;
  line-height: 24px;
`, (0, p.css)`
  ${k(n.Regular)};
  font-size: 14px;
  line-height: 24px;
`;
            let P = $().div`
  background-color: ${e=>{let{theme:t}=e;return t.mobileChargeInternet.receipt.bg}};
  width: 328px;
  box-shadow: 0px 1px 2px rgba(9, 30, 66, 0.16);
  border-radius: 0 0 12px 12px;
  margin: 10px auto 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  :before {
    content: "";
    background: url("${v}") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 7px;
    transform: translateY(-100%);
  }
`,
                Y = $().div`
  padding: 24px 16px 0 16px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
                z = $()(w)`
  color: ${e=>{let{theme:t,type:i}=e;return i&&"success"!==i?t["9"]:t.mobileChargeInternet.receipt.success_text}};
  margin-top: 20px;
  font-weight: 500;
  font-family: ${b.a};
`,
                R = $()(w)`
  color: ${e=>{let{theme:t}=e;return t["9"]}};
  margin: 0 0 24px 0;
  font-family: ${b.a};
`,
                I = $().div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  direction: rtl;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 24px;
  }
`,
                _ = $()(w)`
  color: ${e=>{let{theme:t}=e;return t.mobileChargeInternet.receipt.key_text}};
  font-family: ${b.a};
`,
                C = $()(w)`
  direction: ${e=>{let{dir:t}=e;return t||"rtl"}};
  color: ${e=>{let{theme:t}=e;return t.mobileChargeInternet.receipt.value_text}};
  font-family: ${b.a};
`;
            $().div`
  border-top: 1px solid
    ${e=>{let{theme:t}=e;return t.mobileChargeInternet.receipt.borderTop}};
  display: flex;
  align-items: center;
  align-self: stretch;
  direction: rtl;
`, $().div`
  flex-grow: 1;
  display: flex;
  direction: rtl;
  align-self: stretch;
  justify-content: center;
  padding: 14px 0;
  box-sizing: border-box;
  align-items: center;
  gap: 12px;
`, $()(w)`
  color: ${e=>{let{theme:t}=e;return t.mobileChargeInternet.receipt.shareText}};
  font-family: ${b.a};
`;
            let L = e => {
                    let {
                        code: t,
                        items: i,
                        onPrimaryClick: r,
                        onSecondaryClick: n,
                        primaryText: l,
                        transactionKey: a,
                        onTransactionClicked: c,
                        message: s,
                        type: g,
                        secondaryText: d,
                        primaryIcon: u,
                        title: f
                    } = e, m = (0, p.useTheme)(), b = (0, o.Y)(h.M, {
                        color: m.mobileChargeInternet.receipt.success_text,
                        size: 40
                    }), y = (0, o.Y)(x.U, {
                        size: 40
                    });
                    return (0, o.Y)(P, {
                        children: (0, o.FD)(Y, {
                            children: [g && "success" != g ? y : b, (0, o.Y)(z, {
                                type: g,
                                marginTop: 0,
                                marginBottom: 24,
                                fontSize: 18,
                                lineHeight: 26,
                                children: f
                            }), s && (0, o.Y)(R, {
                                fontSize: 15,
                                lineHeight: 24,
                                children: s
                            }), "error" !== g && (0, o.Y)(o.FK, {
                                children: i && i.map(e => (0, o.FD)(I, {
                                    children: [(0, o.Y)(_, {
                                        marginBottom: 0,
                                        marginTop: 0,
                                        fontSize: 15,
                                        lineHeight: 24,
                                        children: e.key
                                    }), (0, o.Y)(C, {
                                        dir: e.dir,
                                        marginTop: 0,
                                        marginBottom: 0,
                                        fontSize: 15,
                                        lineHeight: 24,
                                        children: e.value
                                    })]
                                }))
                            })]
                        })
                    })
                },
                S = () => {
                    var e;
                    let {
                        TopBar: t
                    } = (0, f.bE)(), i = (0, s.useLocation)(), r = (0, g.L)(), {
                        close: n
                    } = (0, g.h)(), h = (0, p.useTheme)(), x = null == i ? void 0 : i.state, b = d.P.receipt.title, y = d.P.receipt.keys.cost, $ = d.P.receipt.errorTitle, v = d.P.receipt.successTitle;
                    (null == x ? void 0 : x.receiptType) === u.Lc.Transfer ? (b = b + " " + d.P.receipt.transfer, y = y + " " + d.P.receipt.transfer, $ = $ + " " + d.P.receipt.transfer, v = d.P.receipt.transfer + " " + v) : (null == x ? void 0 : x.receiptType) === u.Lc.Purchase && (b = b + " " + d.P.receipt.purchase, y = y + " " + d.P.receipt.purchase, $ = $ + " " + d.P.receipt.purchase, v = d.P.receipt.purchase + " " + v);
                    let T = (null == x ? void 0 : x.type) === "success" ? [{
                        key: y,
                        value: `${(0,a.hZ)((0,a._h)(null==x||null==(e=x.amount)?void 0:e.toString()))} ریال`
                    }, {
                        key: d.P.receipt.keys.date,
                        value: (0, a._h)((0, c.Yp)(((null == x ? void 0 : x.date) ?? 0) * 1e3).replace("،", " - ").slice(0, -3)),
                        dir: "ltr"
                    }, {
                        key: d.P.receipt.keys.destination,
                        value: (0, a._h)((null == x ? void 0 : x.dstToken) ?? "")
                    }, {
                        key: d.P.receipt.keys.origin,
                        value: (0, a._h)(null == x ? void 0 : x.srcToken)
                    }] : [];
                    return (0, o.FD)(m.YW, {
                        children: [(0, o.Y)(t, {
                            title: b,
                            onClose: () => r("")
                        }), (0, o.Y)(m.LN, {
                            children: (0, o.Y)(L, {
                                onPrimaryClick: n,
                                primaryText: d.P.receipt.return,
                                items: T,
                                primaryIcon: (0, o.Y)(l.Q, {
                                    size: 16,
                                    color: h.secondary_2
                                }),
                                type: null == x ? void 0 : x.type,
                                message: (null == x ? void 0 : x.type) === "error" ? d.P.receipt.errorDescription : "",
                                title: (null == x ? void 0 : x.type) === "error" ? $ : v
                            })
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=5138.1b8a409d.js.map