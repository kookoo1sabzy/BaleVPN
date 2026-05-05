try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07c57429-dbf2-43ba-aefb-a6809d9064f8", e._sentryDebugIdIdentifier = "sentry-dbid-07c57429-dbf2-43ba-aefb-a6809d9064f8")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4249"], {
        72612: function(e, t, a) {
            a.d(t, {
                A: () => r
            });
            var n = a(46756),
                l = a.n(n),
                o = a(5421),
                d = a.n(o)()(l());
            d.push([e.id, ".hWgKRo{width:100%;max-width:336px;margin:2.4rem auto 0}@media screen and (min-width:576px){.hWgKRo{max-width:362px;margin-top:3.2rem}}._6glSt{flex-direction:column;flex-grow:1;align-items:center;width:100%;max-width:336px;margin:50px auto;display:flex}@media screen and (min-width:576px){._6glSt{max-width:362px;margin-top:3.2rem}}._6glSt.GW2PF7{margin:20px auto;overflow-y:auto}.xuJb6s{flex-direction:column;justify-content:space-between;display:flex}", ""]), d.locals = {
                GroupTab: "hWgKRo",
                groupTab: "hWgKRo",
                TabContent: "_6glSt",
                tabContent: "_6glSt",
                isKeyBoardOpen: "GW2PF7",
                Body: "xuJb6s",
                body: "xuJb6s"
            };
            let r = d
        },
        63131: function(e, t, a) {
            a.d(t, {
                A: () => r
            });
            var n = a(46756),
                l = a.n(n),
                o = a(5421),
                d = a.n(o)()(l());
            d.push([e.id, ".nHdaVn{color:var(--color-neutrals-n-500);text-align:center;margin:0;font-family:Shabnam;font-size:16px;line-height:24px;display:flex;color:var(--color-neutrals-n-300)!important;font-weight:400!important}.XvuM7q{margin:1.2rem 0 2rem}.telvuD{width:100%;margin-top:auto!important}.telvuD.hphV2f{margin-top:2rem}", ""]), d.locals = {
                PhonePrefix: "nHdaVn",
                phonePrefix: "nHdaVn",
                TextField: "XvuM7q",
                textField: "XvuM7q",
                Button: "telvuD",
                button: "telvuD",
                openKeyboard: "hphV2f"
            };
            let r = d
        },
        97333: function(e, t, a) {
            a.d(t, {
                A: () => r
            });
            var n = a(46756),
                l = a.n(n),
                o = a(5421),
                d = a.n(o)()(l());
            d.push([e.id, ".Dhuqdd{justify-content:flex-start;align-items:center;width:100%;margin-top:2.4rem;display:flex}.k9DdNJ{border-top:1px solid var(--color-neutrals-n-30);border-bottom:1px solid var(--color-neutrals-n-30);flex-direction:column;flex-grow:1;margin-inline-start:1rem;padding:8px 0;display:flex}.U8aQpC{color:var(--color-neutrals-n-500);margin:0;font-family:Shabnam;font-size:14px;line-height:22px;color:var(--color-neutrals-n-200)!important;margin-top:4px!important}.R7BQS5{color:var(--color-neutrals-n-500);margin:0;font-family:Shabnam;font-size:15px;line-height:23px}.n7yKjC{width:100%;margin-top:auto!important}", ""]), d.locals = {
                UserItem: "Dhuqdd",
                userItem: "Dhuqdd",
                InfoWrapper: "k9DdNJ",
                infoWrapper: "k9DdNJ",
                NickText: "U8aQpC",
                nickText: "U8aQpC",
                NameText: "R7BQS5",
                nameText: "R7BQS5",
                Button: "n7yKjC",
                button: "n7yKjC"
            };
            let r = d
        },
        86704: function(e, t, a) {
            a.r(t), a.d(t, {
                AddContactModal: () => ee
            });
            var n = a(45831),
                l = a(58191),
                o = a(2077),
                d = a(47002),
                r = a(29765),
                i = a(12226),
                s = a(3101),
                c = a(86903),
                u = a(72036),
                m = a(14782),
                p = a(41799),
                h = a(13274),
                f = a(26048),
                b = a(43268),
                x = a(27767),
                y = a(41941),
                g = a(57243),
                C = a.n(g),
                v = a(53321),
                w = a.n(v),
                _ = a(23518),
                A = a.n(_),
                T = a(14182),
                N = a.n(T),
                S = a(5033),
                k = a.n(S),
                D = a(77141),
                F = a.n(D),
                I = a(66338),
                P = a.n(I),
                B = a(63131),
                W = {};
            W.styleTagTransform = P(), W.setAttributes = k(), W.insert = N().bind(null, "head"), W.domAPI = A(), W.insertStyleElement = F(), w()(B.A, W);
            let K = B.A && B.A.locals ? B.A.locals : void 0,
                Y = "contacts.add_contact",
                $ = e => {
                    let [t, a] = (0, l.useState)(""), [d, g] = (0, l.useState)(""), {
                        formatMessage: v,
                        formatNumber: w,
                        direction: _
                    } = (0, y.t)(), [A, T] = (0, l.useState)((0, u.X)().find(e => e.code === v("phone_prefix_iran"))), [N, S] = (0, l.useState)(!1), k = (0, o.wA)(), {
                        isOpen: D
                    } = (0, x.de)(), F = (0, l.useCallback)((e, t) => {
                        t.validity.valid && a((0, h._h)(e))
                    }, []), I = (0, l.useCallback)(e => {
                        e.code = (0, h._h)(e.code), T(e)
                    }, []), P = (0, l.useCallback)(e => {
                        g(e)
                    }, []), B = (0, l.useCallback)(() => {
                        S(!0)
                    }, []), W = (0, l.useCallback)(() => {
                        k(f.P.importContact({
                            phone: (0, p.IJ)((0, p.Ds)(A) + (0, p.iq)(t)),
                            name: d
                        })), e.close()
                    }, [t, d]);
                    return (0, n.FD)(n.FK, {
                        children: [(0, n.Y)(c.w, {
                            label: v("country"),
                            items: (0, u.X)(),
                            placeholderMessage: v("country_code_placeholder"),
                            defaultSelectedItem: A,
                            onChange: I,
                            "data-sentry-element": "CountryDropdown",
                            "data-sentry-source-file": "AddContactWithPhone.tsx"
                        }), (0, n.Y)(r.p, {
                            className: K.TextField,
                            value: w(t),
                            "data-testid": v("mobile_phone_number"),
                            onChange: F,
                            onBlur: B,
                            errorText: N && !(0, b.J4)(t) ? "" === t.trim() ? v(`${Y}.phone_empty_error`) : v(`${Y}.phone_validation`) : void 0,
                            label: v("mobile_phone_number"),
                            placeholder: v("phone_number_placeholder"),
                            datatestidPhonenumber: "phone-prefix",
                            prefixNumber: w((null == A ? void 0 : A.code) ?? v("phone_prefix_iran")),
                            "data-sentry-element": "PhoneNumberTextField",
                            "data-sentry-source-file": "AddContactWithPhone.tsx"
                        }), (0, n.Y)(i.O, {
                            value: d,
                            direction: d ? (0, m._)(d) : _,
                            onChange: P,
                            "data-testid": v(`${Y}.name`),
                            label: v(`${Y}.name`),
                            placeholder: v(`${Y}.name_placeholder`),
                            "data-sentry-element": "NewTextField",
                            "data-sentry-source-file": "AddContactWithPhone.tsx"
                        }), (0, n.Y)(s.XD, {
                            text: v(`${Y}.add`),
                            size: s.Se.LARGE,
                            disabled: !(0, b.J4)(t) || "" === d,
                            onClick: W,
                            className: C()(K.Button, {
                                [K.openKeyboard]: D
                            }),
                            "data-sentry-element": "NewButton",
                            "data-sentry-source-file": "AddContactWithPhone.tsx"
                        })]
                    })
                };
            var R = a(11256),
                E = a(19376),
                M = a(47234),
                J = a(97333),
                q = {};
            q.styleTagTransform = P(), q.setAttributes = k(), q.insert = N().bind(null, "head"), q.domAPI = A(), q.insertStyleElement = F(), w()(J.A, q);
            let G = J.A && J.A.locals ? J.A.locals : void 0;
            var U = a(77693),
                X = a(65988);
            let z = "contacts.add_contact",
                Q = e => {
                    let [t, a] = (0, l.useState)(""), [d, r] = (0, l.useState)(), c = (0, o.d4)(U.H4), u = (0, o.d4)(e => null != d ? (0, X.dt)(e, d.uid) : void 0), p = (0, o.wA)(), {
                        formatMessage: h,
                        direction: b
                    } = (0, y.t)(), x = (0, l.useCallback)(e => {
                        e.uid !== c && r(e)
                    }, [c]), g = (0, R.KM)(x), C = (0, l.useCallback)(e => {
                        a(e), r(null), e.length >= 4 && g(e)
                    }, []), v = (0, l.useCallback)(() => {
                        null != u && (p(f.P.addContact({
                            uid: u.id
                        })), e.close())
                    }, [null == u ? void 0 : u.id, e.close]);
                    return (0, n.FD)(n.FK, {
                        children: [(0, n.Y)(i.O, {
                            value: t,
                            direction: t ? (0, m._)(t) : b,
                            onChange: C,
                            label: h(`${z}.username`),
                            "data-testid": h(`${z}.username`),
                            placeholder: h(`${z}.username_placeholder`),
                            "data-sentry-element": "NewTextField",
                            "data-sentry-source-file": "AddContactWithUsername.tsx"
                        }), null != u && (0, n.FD)("div", {
                            className: G.UserItem,
                            "data-testid": "user-item",
                            children: [(0, n.Y)(M.d, {
                                size: "50px",
                                avatar: u.avatar,
                                peer: (0, E.S2)(u)
                            }), (0, n.FD)("div", {
                                className: G.InfoWrapper,
                                children: [(0, n.Y)("p", {
                                    className: G.NameText,
                                    children: u.name
                                }), (0, n.Y)("p", {
                                    className: G.NickText,
                                    children: u.nick ?? ""
                                })]
                            })]
                        }), (0, n.Y)(s.XD, {
                            className: G.Button,
                            text: h(`${z}.add`),
                            size: s.Se.LARGE,
                            disabled: null == u,
                            onClick: v,
                            "data-sentry-element": "NewButton",
                            "data-sentry-source-file": "AddContactWithUsername.tsx"
                        })]
                    })
                };
            var j = a(72612),
                V = {};
            V.styleTagTransform = P(), V.setAttributes = k(), V.insert = N().bind(null, "head"), V.domAPI = A(), V.insertStyleElement = F(), w()(j.A, V);
            let H = j.A && j.A.locals ? j.A.locals : void 0;
            var O = a(16080),
                L = a(11050);
            let Z = "contacts.add_contact",
                ee = (0, o.Ng)(null, e => ({
                    close() {
                        e(d.NS.closeModal())
                    }
                }))(e => {
                    let [t, a] = (0, l.useState)("phone"), {
                        isOpen: o
                    } = (0, x.de)(), {
                        formatMessage: d,
                        formatNumber: r,
                        direction: i
                    } = (0, y.t)(), s = [{
                        id: "phone",
                        label: d(`${Z}.through_phone_number`),
                        onClick: () => a("phone")
                    }, {
                        id: "username",
                        label: d(`${Z}.through_username`),
                        onClick: () => a("username")
                    }];
                    return (0, n.FD)(L.i, {
                        title: d(`${Z}.title`),
                        onClose: e.close,
                        hideCancelButton: !0,
                        bodyClassName: H.Body,
                        "data-sentry-element": "NewModal",
                        "data-sentry-component": "AddContactModalFC",
                        "data-sentry-source-file": "AddContact.modal.tsx",
                        children: [(0, n.Y)(O.h, {
                            items: s,
                            formatNumber: r,
                            direction: i,
                            activeTabId: t,
                            className: H.GroupTab,
                            "data-sentry-element": "MessagingGroupTab",
                            "data-sentry-source-file": "AddContact.modal.tsx"
                        }), (0, n.FD)("div", {
                            className: C()(H.TabContent, {
                                [H.isKeyBoardOpen]: o
                            }),
                            children: ["phone" === t && (0, n.Y)($, {
                                close: e.close
                            }), "username" === t && (0, n.Y)(Q, {
                                close: e.close
                            })]
                        })]
                    })
                })
        }
    }
]);
//# sourceMappingURL=4249.bb4bfe9c.js.map