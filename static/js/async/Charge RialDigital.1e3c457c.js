try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ec1123f7-8476-4822-a411-cdea0a1e8d27", e._sentryDebugIdIdentifier = "sentry-dbid-ec1123f7-8476-4822-a411-cdea0a1e8d27")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["176"], {
        74600: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => k
            });
            var a = n(45831),
                l = n(12707),
                i = n(25790),
                o = n(3101),
                d = n(13274),
                r = n(58191),
                s = n(91125),
                u = n(617),
                c = n(91755),
                f = n(29066),
                p = n(49420),
                g = n(97797),
                h = n(59431),
                m = n(17294),
                b = n(84323),
                y = n(23942),
                C = n(26652),
                v = n(2051);
            let w = [1e5, 5e5, 1e6, 2e6],
                k = e => {
                    let {
                        cryptoWallet: t,
                        cryptoWalletError: n
                    } = e, k = (0, b.Cj)(), I = (null == k ? void 0 : k.increaseCryptoWalletMaxAmount) ? parseInt(null == k ? void 0 : k.increaseCryptoWalletMaxAmount) : 2e5, [A, P] = (0, r.useState)(!1), [S, Y] = (0, r.useState)(""), [D, E] = (0, r.useState)(-1), [F, T] = (0, r.useState)(void 0), [x, M] = (0, r.useState)(void 0), {
                        TopBar: N
                    } = (0, b.bE)(), {
                        safeRedirect: W
                    } = (0, b.fZ)(), {
                        close: _
                    } = (0, u.h)(), R = (0, r.useCallback)(() => {
                        M(void 0)
                    }, []), L = (0, r.useCallback)(() => {
                        if (!S.trim()) return;
                        let e = parseInt(S);
                        e < 1e4 ? M(C.Ui.MinimumAmount) : e > I && M(C.Ui.MaximumAmount)
                    }, [S]), U = (0, s.wA)(), $ = (0, g.dP)(1e4, C.X2.Charge);
                    return (0, a.FD)(a.FK, {
                        children: [(0, a.FD)(y.YW, {
                            children: [(0, a.Y)(N, {
                                title: `${c.P.charge.title} ${c.P.rialDigital}`,
                                onClose: _
                            }), (0, a.FD)(y.LN, {
                                children: [(0, a.Y)(v.A, {
                                    title: c.P.wallet.credit,
                                    loading: !t && !n,
                                    value: null == t ? void 0 : t.balance,
                                    letterEquivalent: !n || "empty",
                                    walletNotFoundText: n ? c.P.noWalletWarning : void 0,
                                    pocketId: null == t ? void 0 : t.pocketId,
                                    isRialDigital: !0
                                }), (0, a.Y)(l.d, {
                                    label: c.P.desired_amount,
                                    value: S,
                                    onChange: e => {
                                        E(-1);
                                        let t = parseInt(e);
                                        isNaN(t) ? Y(e) : Y(Math.min(t, I).toString())
                                    },
                                    onFocus: R,
                                    onBlur: L,
                                    helpText: c.P.input.defaultReaction.replace("{value}", (0, g.W3)("1000")),
                                    unit: c.P.rial,
                                    placeholder: c.P.input.placeholder,
                                    disabled: !t,
                                    error: x && $[x],
                                    toLetters: (0, g.au)(S),
                                    className: h.A.MoneyField
                                }), (0, a.Y)("div", {
                                    className: h.A.OptionsContainer,
                                    children: w.map((e, n) => (0, a.Y)(i.a, {
                                        disabled: !t,
                                        onChange: () => {
                                            E(n), Y(w[n].toString())
                                        },
                                        text: (0, d._h)(`${(0,d.hZ)(e.toString())} ${c.P.rial}`),
                                        checked: n === D
                                    }, e))
                                })]
                            }), (0, a.Y)(y.wi, {
                                children: (0, a.Y)(o.XD, {
                                    text: c.P.pay,
                                    disabled: !S || void 0 != x,
                                    loading: A,
                                    size: o.Se.LARGE,
                                    onClick: () => {
                                        if (t && S)
                                            if (!S || 1e4 > parseInt((0, d.fn)(S)) || parseInt((0, d.fn)(S)) > I) return void M(1e4 > parseInt((0, d.fn)(S)) ? C.Ui.MinimumAmount : C.Ui.MaximumAmount);
                                            else {
                                                M(void 0);
                                                let {
                                                    onSuccess: e
                                                } = W();
                                                P(!0), U(f.ZT.getChargePaymentToken({
                                                    token: t.token,
                                                    amount: parseInt((0, d.fn)(S)),
                                                    cryptoWalletId: t.pocketId,
                                                    onError: e => {
                                                        P(!1), (null == e ? void 0 : e.message) === "مبلغ تراکنش بيش از حد مجاز مي باشد" ? T(5) : T(18)
                                                    },
                                                    onSuccess: t => {
                                                        P(!1), e(t)
                                                    }
                                                }))
                                            }
                                    },
                                    className: h.A.Button
                                })
                            })]
                        }), n && (0, a.Y)(m.A, {
                            from: p.Fk.CryptoCharge,
                            errorCode: n.code
                        }), F && (0, a.Y)(m.A, {
                            from: p.Fk.CryptoCharge,
                            errorCode: F
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=Charge RialDigital.1e3c457c.js.map