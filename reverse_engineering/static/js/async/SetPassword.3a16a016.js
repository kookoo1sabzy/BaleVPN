try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "1a2b1742-ac55-41b9-83cc-ea57af38b5de", e._sentryDebugIdIdentifier = "sentry-dbid-1a2b1742-ac55-41b9-83cc-ea57af38b5de")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8011"], {
        97667: function(e, s, t) {
            t.r(s), t.d(s, {
                default: () => z
            });
            var a = t(45831),
                r = t(22279),
                o = t(72984),
                d = t(36214),
                n = t(3101),
                l = t(74868),
                i = t(13274),
                c = t(57243),
                u = t.n(c),
                f = t(58191),
                w = t(41349),
                p = t(27192),
                y = t(21843),
                m = t(84900),
                g = t(41941),
                h = t(47002),
                _ = t(13205),
                b = t(69069),
                S = t(2077),
                P = t(44251),
                A = t(15490),
                N = t(934),
                Y = t(82178),
                x = t(98999);
            let k = e => {
                    if (!(e.length > 6)) return A.A.test(e)
                },
                z = () => {
                    let e = (0, S.wA)(),
                        s = (0, w.useLocation)(),
                        t = (0, P.mJ)(),
                        {
                            formatMessage: c,
                            formatNumber: A
                        } = (0, g.t)(),
                        [z, M] = (0, f.useState)(!1),
                        [v, C] = (0, f.useState)(""),
                        [T, B] = (0, f.useState)(),
                        [D, F] = (0, f.useState)(""),
                        [E, I] = (0, f.useState)(),
                        {
                            serviceType: W,
                            product: R,
                            redirectTo: L
                        } = (0, x.Z$)(s.search),
                        J = () => $(v, D),
                        $ = (e, s) => {
                            "" != s && "" == e ? B(c("ramz.enter_password")) : "" != s && "" != e && e != s ? I(c("ramz.not_equal_passwords")) : "" != s && "" != e && e == s && (B(void 0), I(void 0))
                        },
                        q = 6 == v.length && v == D;
                    return (0, a.Y)(y.mO, {
                        "data-sentry-element": "Wrapper",
                        "data-sentry-component": "SetPassword",
                        "data-sentry-source-file": "SetPassword.tsx",
                        children: (0, a.FD)(y.LN, {
                            "data-sentry-element": "PageContainer",
                            "data-sentry-source-file": "SetPassword.tsx",
                            children: [(0, a.Y)(m.V, {
                                title: c("ramz.set_password"),
                                "data-sentry-element": "TopBar",
                                "data-sentry-source-file": "SetPassword.tsx"
                            }), (0, a.Y)(y.nB, {
                                className: u()({
                                    [Y.A.body]: "protectedMessage" == R
                                }),
                                "data-sentry-element": "Body",
                                "data-sentry-source-file": "SetPassword.tsx",
                                children: (0, a.FD)(y.qA, {
                                    className: Y.A.bodyWrapper,
                                    "data-sentry-element": "BodyWrapper",
                                    "data-sentry-source-file": "SetPassword.tsx",
                                    children: ["protectedMessage" == R && (0, a.Y)("p", {
                                        className: Y.A.description,
                                        children: c("ramz.set_password_protected_message_desc")
                                    }), ("goldWallet" == R || "goldPacket" == R) && (0, a.Y)("p", {
                                        className: Y.A.descriptionGoldPacketAndWallet,
                                        children: c("ramz.set_password_gold_packet_and_wallet_desc")
                                    }), (0, a.Y)("p", {
                                        className: Y.A.text,
                                        children: c("ramz.set_password_desc")
                                    }), (0, a.Y)(l.s, {
                                        value: v,
                                        label: c("two_fa.SetPassword.label"),
                                        inputMode: "numeric",
                                        onChange: e => {
                                            if (!k(e)) return;
                                            let s = (0, i.IJ)(e);
                                            C(s), 6 == s.length && $(s, D)
                                        },
                                        onFocus: () => {
                                            B(void 0)
                                        },
                                        onBlur: J,
                                        placeholder: A("123456"),
                                        error: T,
                                        className: Y.A.passwordField,
                                        "data-sentry-element": "PasswordField",
                                        "data-sentry-source-file": "SetPassword.tsx"
                                    }), (0, a.Y)(l.s, {
                                        value: D,
                                        label: c("two_fa.RePassword.title"),
                                        inputMode: "numeric",
                                        onChange: e => {
                                            if (!k(e)) return;
                                            let s = (0, i.IJ)(e);
                                            F(s), 6 == s.length && $(v, s)
                                        },
                                        placeholder: A("123456"),
                                        onBlur: J,
                                        onFocus: () => {
                                            I(void 0)
                                        },
                                        error: E,
                                        "data-sentry-element": "PasswordField",
                                        "data-sentry-source-file": "SetPassword.tsx"
                                    })]
                                })
                            }), (0, a.Y)(y.wi, {
                                className: Y.A.footer,
                                "data-sentry-element": "Footer",
                                "data-sentry-source-file": "SetPassword.tsx",
                                children: (0, a.Y)(y.qA, {
                                    "data-sentry-element": "BodyWrapper",
                                    "data-sentry-source-file": "SetPassword.tsx",
                                    children: (0, a.Y)(n.XD, {
                                        text: c("ok"),
                                        size: n.Se.LARGE,
                                        disabled: !q,
                                        onClick: () => {
                                            M(!0), e(N.g2.setPassword({
                                                password: v,
                                                serviceType: W,
                                                onSuccess: () => {
                                                    e(N.gM.setHasSetPassword({
                                                        hasSetPassword: !0
                                                    })), void 0 != s.search && (M(!1), void 0 != L && t(L, {
                                                        replace: !0
                                                    }).then(() => {
                                                        let s = {
                                                            icon: (0, a.Y)(r.M, {
                                                                size: 48,
                                                                color: (0, o.Er)(d.Qs.color_success)
                                                            }),
                                                            title: c("ramz.password_created_success"),
                                                            description: "goldWallet" == R || "goldPacket" == R ? c("ramz.successfully_reset_password") : c("ramz.password_usage_info"),
                                                            confirmText: c("i_got_it"),
                                                            onConfirm: () => {
                                                                e(h.NS.closeModal("ConfirmModal"))
                                                            },
                                                            confirmButtonVariant: n.GJ.OUTLINED
                                                        };
                                                        setTimeout(() => {
                                                            e(h.NS.openModal("ConfirmModal", s))
                                                        }, 1.11 * b.yY)
                                                    }))
                                                },
                                                onPermissionDenied: a => {
                                                    p.oR.info(a), e(h.NS.closeModal("RamzCheckPassword")), t(`${_.F.SendOTP}${s.search}`, {
                                                        replace: !0
                                                    })
                                                }
                                            }))
                                        },
                                        loading: z,
                                        "data-sentry-element": "NewButton",
                                        "data-sentry-source-file": "SetPassword.tsx"
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        15490: function(e, s, t) {
            t.d(s, {
                A: () => a
            });
            let a = /^[0-9۰-۹]*$/
        }
    }
]);
//# sourceMappingURL=SetPassword.3a16a016.js.map