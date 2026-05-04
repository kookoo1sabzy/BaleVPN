try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e06dbf3e-61c1-4bcb-b1ae-e787e2e0c931", e._sentryDebugIdIdentifier = "sentry-dbid-e06dbf3e-61c1-4bcb-b1ae-e787e2e0c931")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1708"], {
        77778: function(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(46756),
                l = n.n(r),
                i = n(5421),
                a = n.n(i)()(l());
            a.push([e.id, '.XOU3Qq{background-color:var(--color-neutrals-n-30);-webkit-user-select:none;user-select:none;width:100%;height:16px;display:flex}.wHx1TT{border:1px solid var(--color-neutrals-n-30);width:100%}.wHx1TT.P7ftck{border-style:dashed}.TrlIVJ{white-space:nowrap;-webkit-user-select:none;user-select:none;width:100%;display:flex}.TrlIVJ:before,.TrlIVJ:after{content:"";border-top:1px solid var(--color-neutrals-n-30);align-self:center;width:100%}.TrlIVJ:before{margin-inline-end:12px}.TrlIVJ:after{margin-inline-start:12px}.TrlIVJ.P7ftck:before,.TrlIVJ.P7ftck:after{border-top-style:dashed}', ""]), a.locals = {
                Divider: "XOU3Qq",
                divider: "XOU3Qq",
                SimpleDivider: "wHx1TT",
                simpleDivider: "wHx1TT",
                Dashed: "P7ftck",
                dashed: "P7ftck",
                DividerWithChildren: "TrlIVJ",
                dividerWithChildren: "TrlIVJ"
            };
            let o = a
        },
        30810: function(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(46756),
                l = n.n(r),
                i = n(5421),
                a = n.n(i)()(l());
            a.push([e.id, ".Fi0UGL{cursor:pointer;background-color:var(--color-bubble-background-icon);aspect-ratio:1;border-radius:50%;justify-content:center;align-items:center;width:4.4rem;display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.Fi0UGL.qbBmt5{width:3rem}.Fi0UGL.qbBmt5 .s05xut,.s05xut{width:1.8rem}@media screen and (min-width:768px){.s05xut{width:2.4rem}}.AoNOXR{width:4.4rem;height:4.4rem}.AoNOXR .s05xut{width:2.4rem}", ""]), a.locals = {
                icon: "Fi0UGL",
                Albumi: "qbBmt5",
                albumi: "qbBmt5",
                icon_img: "s05xut",
                iconImg: "s05xut",
                isSingleMedia: "AoNOXR"
            };
            let o = a
        },
        50128: function(e, t, n) {
            n.d(t, {
                A: () => p
            });
            var r = n(53321),
                l = n.n(r),
                i = n(23518),
                a = n.n(i),
                o = n(14182),
                d = n.n(o),
                s = n(5033),
                c = n.n(s),
                u = n(77141),
                h = n.n(u),
                f = n(66338),
                v = n.n(f),
                m = n(30810),
                g = {};
            g.styleTagTransform = v(), g.setAttributes = c(), g.insert = d().bind(null, "head"), g.domAPI = a(), g.insertStyleElement = h(), l()(m.A, g);
            let p = m.A && m.A.locals ? m.A.locals : void 0
        },
        20677: function(e, t, n) {
            n.d(t, {
                a: () => i
            });
            var r = n(58191),
                l = n.n(r);
            let i = e => {
                var t;
                let n = null != (t = e.color) ? t : "#5E6C84";
                return e.bgColor, e.secondColor, l().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "AddStatus-icon"
                }, e), l().createElement("path", {
                    fill: n,
                    fillRule: "evenodd",
                    d: "M12 1.25a.75.75 0 0 0 0 1.5 9.173 9.173 0 0 1 5.55 1.849A9.309 9.309 0 0 1 20.48 8.3a9.179 9.179 0 0 1 .77 3.7 9.374 9.374 0 0 1-.185 1.85 9.201 9.201 0 0 1-2.59 4.756c-.29.285-.6.55-.925.795a.75.75 0 0 0 .9 1.2 10.797 10.797 0 0 0 3.808-5.376A10.666 10.666 0 0 0 22.75 12a10.677 10.677 0 0 0-2.15-6.451 10.807 10.807 0 0 0-4.3-3.404A10.676 10.676 0 0 0 12 1.25M9.225 3.173a.75.75 0 0 0-.45-1.43c-.367.115-.726.25-1.075.402a.75.75 0 0 0 .6 1.374c.3-.13.609-.246.925-.346M6.018 4.944a.75.75 0 0 0-.97-1.143 10.807 10.807 0 0 0-2.053 2.325.75.75 0 0 0 1.256.82 9.279 9.279 0 0 1 1.767-2.002m-2.845 4.28a.75.75 0 0 0-1.43-.449A10.675 10.675 0 0 0 1.25 12a10.868 10.868 0 0 0 .215 2.15 10.669 10.669 0 0 0 .933 2.688l.034.067a.75.75 0 1 0 1.334-.686l-.03-.057A9.176 9.176 0 0 1 2.75 12a9.368 9.368 0 0 1 .185-1.85c.064-.315.144-.624.238-.925m2.221 9.251a.75.75 0 0 0-1.071 1.05 10.804 10.804 0 0 0 3.377 2.33 10.695 10.695 0 0 0 4.3.895 10.868 10.868 0 0 0 2.15-.215 10.666 10.666 0 0 0 1.612-.462.75.75 0 0 0-.524-1.405 9.216 9.216 0 0 1-4.164.536 9.24 9.24 0 0 1-2.774-.723 9.211 9.211 0 0 1-2.906-2.006m6.602-10.897a.75.75 0 0 1 .75.75v2.914h2.915a.75.75 0 0 1 0 1.5h-2.915v2.912a.75.75 0 0 1-1.5 0v-2.912H8.328a.75.75 0 0 1 0-1.5h2.918V8.328a.75.75 0 0 1 .75-.75",
                    clipRule: "evenodd"
                }))
            }
        },
        56810: function(e, t, n) {
            n.d(t, {
                X: () => i
            });
            var r = n(58191),
                l = n.n(r);
            let i = e => {
                var t;
                let n = null != (t = e.color) ? t : "#5E6C84";
                return e.bgColor, e.secondColor, l().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "ForwardE-icon"
                }, e), l().createElement("path", {
                    fill: n,
                    fillRule: "evenodd",
                    d: "M13.413 2.351a1.13 1.13 0 0 1 1.198.168l.007.005 6.548 5.82a6.317 6.317 0 0 1 .308.311c.019.02.042.048.065.076l.001.002c.012.015.07.088.114.186a1.129 1.129 0 0 1-.272 1.29l-.007.007-6.758 6.007-.007.005a1.129 1.129 0 0 1-1.86-.847v-1.878c-1.319.061-2.611.442-3.583 1.066-1.043.671-1.653 1.573-1.668 2.637.11.95.503 1.843 1.128 2.566a1.125 1.125 0 0 1 .387.85v.015A1.138 1.138 0 0 1 7.9 21.75h-.028c-.18 0-.356-.045-.514-.128a9.301 9.301 0 0 1-5.107-7.7l-.002-.025v-.025c0-2.42 1.258-4.426 3.151-5.8 1.885-1.37 4.42-2.136 7.099-2.136h.25l.001-2.57a1.128 1.128 0 0 1 .662-1.015m.838 1.854 5.814 5.168-5.815 5.168V11.99h-.884l-.024.001a3.379 3.379 0 0 1-.217.004c-1.688 0-3.428.451-4.77 1.314C7.008 14.175 6 15.51 6 17.246v.04l.004.04c.075.696.265 1.37.56 1.997a7.801 7.801 0 0 1-2.813-5.475c.008-1.839.955-3.417 2.533-4.563 1.593-1.157 3.808-1.85 6.217-1.85h1.75l.001-3.23",
                    clipRule: "evenodd"
                }))
            }
        },
        66302: function(e, t, n) {
            n.d(t, {
                cG: () => A,
                Jg: () => C,
                OK: () => x
            });
            var r, l, i = n(36878);
            n(58191);
            var a = n(53321),
                o = n.n(a),
                d = n(23518),
                s = n.n(d),
                c = n(14182),
                u = n.n(c),
                h = n(5033),
                f = n.n(h),
                v = n(77141),
                m = n.n(v),
                g = n(66338),
                p = n.n(g),
                b = n(77778),
                w = {};
            w.styleTagTransform = p(), w.setAttributes = f(), w.insert = u().bind(null, "head"), w.domAPI = s(), w.insertStyleElement = m(), o()(b.A, w);
            let y = b.A && b.A.locals ? b.A.locals : void 0;
            var T = n(42625),
                x = ((r = {}).Thick = "thick", r.Thin = "thin", r),
                C = ((l = {}).Dashed = "dashed", l.Solid = "solid", l);
            let A = e => {
                let t = null != e.children;
                return "thick" == e.thickness || t ? (0, i.jsx)("div", {
                    className: (0, T.A)({
                        [y.Divider]: "thick" == e.thickness,
                        [y.Dashed]: "dashed" === e.lineVariant
                    }, t ? y.DividerWithChildren : "", e.className),
                    children: e.children
                }) : (0, i.jsx)("hr", {
                    className: (0, T.A)(y.SimpleDivider, {
                        [y.Dashed]: "dashed" == e.lineVariant
                    }, e.className)
                })
            };
            A.defaultProps = {
                thickness: "thick"
            }
        },
        54582: function(e, t, n) {
            n.d(t, {
                R: () => l
            });
            var r = n(36878);
            n(58191);
            let l = e => {
                let {
                    color: t,
                    size: n,
                    ...l
                } = e, i = t ?? "#238FF3";
                return (0, r.jsxs)("svg", {
                    width: n,
                    height: n,
                    ...l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z",
                        fill: i
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.9922 13.3721C11.5782 13.3721 11.2422 13.0361 11.2422 12.6221V8.20312C11.2422 7.78912 11.5782 7.45312 11.9922 7.45312C12.4062 7.45312 12.7422 7.78912 12.7422 8.20312V12.6221C12.7422 13.0361 12.4062 13.3721 11.9922 13.3721Z",
                        fill: i
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.005 16.7969C11.452 16.7969 11 16.3499 11 15.7969C11 15.2439 11.443 14.7969 11.995 14.7969H12.005C12.558 14.7969 13.005 15.2439 13.005 15.7969C13.005 16.3499 12.558 16.7969 12.005 16.7969Z",
                        fill: i
                    })]
                })
            }
        },
        51289: function(e, t, n) {
            n.d(t, {
                P: () => w
            });
            var r = n(45831),
                l = n(58191),
                i = n(33222),
                a = n(87728),
                o = n(41941),
                d = n(72984),
                s = n(36214),
                c = n(24673),
                u = n(27767),
                h = n(69948),
                f = n(17197),
                v = n(24344),
                m = n(88325),
                g = n(56810),
                p = n(17022);
            let b = u.xm["0"] < 16,
                w = e => {
                    let t = void 0 != e.state ? (0, m.Ik)(e.state) : void 0,
                        n = !!e.button && 0 === e.unreadCount,
                        w = e.isPinned && !n,
                        y = e.exPeerType === a.m4.EXPEERTYPE_CHANNEL && e.state && ![i.Zu.Pending, i.Zu.Error].includes(e.state),
                        T = 0 === e.unreadCount && e.isLastMessageSentByMe && null != e.state && (!e.isSavedMessage || e.state === i.Zu.Pending) && !y && !n,
                        x = !1 == e.isNotificationEnabled,
                        C = e.exPeerType === a.m4.EXPEERTYPE_GROUP,
                        A = e.exPeerType === a.m4.EXPEERTYPE_BOT,
                        S = e.secondaryText && (e.senderName && C && !e.isLastMessageService || e.isDraft || e.showSearchResultSender && e.senderName),
                        k = (0, d.Er)(s.Qs.color_neutrals_n_300),
                        {
                            formatNumber: E
                        } = (0, o.t)(),
                        P = (0, l.useMemo)(() => {
                            var t, n;
                            return (0, h.XC)(!0, !1, A || C).render(null == (n = e.secondaryText) || null == (t = n.replace) ? void 0 : t.call(n, /\n(?!-\s+\[[ xX]\])/g, " "), {
                                queryForHighlighting: e.queryForHighlighting
                            })
                        }, [e.secondaryText, A, C, e.queryForHighlighting]),
                        D = e.isForwarded && !e.isTyping && !e.isDraft && (0, r.Y)(g.X, {
                            size: 20,
                            color: k,
                            "data-testid": "forward-icon"
                        });
                    return (0, r.Y)(p.LazyModuleProvider, {
                        moduleNames: p.ModuleName.Emoji,
                        "data-sentry-element": "LazyModuleProvider",
                        "data-sentry-component": "BottomBlockFC",
                        "data-sentry-source-file": "BottomBlock.tsx",
                        children: () => (0, r.Y)(c.y, {
                            isMuted: x,
                            isPinned: w,
                            showMentions: e.showMentions,
                            unreadCountProps: {
                                count: e.unreadCount,
                                max: 999
                            },
                            dangerouslySetTextHTML: P,
                            prefixIcons: D,
                            title: e.secondaryText,
                            hideOverflow: !u.pz || b,
                            hidePrefixText: !S,
                            dangerouslySetPrefixTextHTML: (0, f.L3)((0, v.W)(e.senderName)),
                            prefixTextType: e.isDraft ? c.I.draft : void 0,
                            textColor: e.isSecondaryTextPrimary ? s.yQ.color_primary_p_50 : void 0,
                            formatNumber: E,
                            showMessageStateIcon: T,
                            messageStateIcon: null == t ? void 0 : t.icon,
                            messageStateIconColor: null == t ? void 0 : t.color,
                            showUnreadReaction: e.showUnreadReaction,
                            markedAsUnread: e.markedAsUnread,
                            button: e.button
                        })
                    })
                }
        },
        39392: function(e, t, n) {
            n.d(t, {
                A: () => o
            });
            var r = n(58191),
                l = n(52535),
                i = n(41941),
                a = n(89950);
            let o = () => {
                let {
                    locale: e,
                    intlDateTimeFormatHM: t,
                    intlDateTimeFormatWeekday: n
                } = (0, r.useContext)(l.M), {
                    formatMessage: o
                } = (0, i.t)(), d = (0, a.A)();
                return (0, r.useCallback)(e => {
                    let r = new Date(e),
                        l = new Date,
                        i = new Date(Date.now() - 864e5),
                        a = new Date(Date.now() - 6048e5);
                    if (r.toDateString() === l.toDateString()) return t.format(r);
                    {
                        if (r.toDateString() === i.toDateString()) return o("yesterday");
                        if (r >= a && r < l) return n.format(r);
                        let {
                            year: e,
                            day: t,
                            month: s
                        } = d(r);
                        return r.getTime() / 1e3 + 31536e3 <= Date.now() / 1e3 ? `${t} ${s} ${e}` : `${t} ${s}`
                    }
                }, [e])
            }
        },
        388: function(e, t, n) {
            n.d(t, {
                De: () => u,
                S3: () => d.A,
                Sk: () => c,
                UC: () => h
            });
            var r = n(45831);
            n(58191);
            var l = n(99290),
                i = n(57243),
                a = n.n(i),
                o = n(13274),
                d = n(50128),
                s = n(80073);
            let c = e => {
                    try {
                        let t = Math.floor(e / 86400),
                            n = Math.floor(e % 86400 / 3600),
                            r = Math.floor(e % 3600 / 60),
                            l = [t > 0 ? t : null, t > 0 || n > 0 ? String(n).padStart(2, "0") : null, String(r).padStart(2, "0"), String(e % 60).padStart(2, "0")].filter(Boolean);
                        return (0, o._h)(l.join(":"))
                    } catch (e) {
                        return s.j.error(e), ""
                    }
                },
                u = (0, l.css)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,
                h = e => (0, r.Y)("div", {
                    className: a()(d.A.icon, {
                        [d.A.Albumi]: e.isAlbumi
                    }, e.className),
                    onClickCapture: e.onClick,
                    "data-sentry-component": "MediaIcon",
                    "data-sentry-source-file": "shared.tsx",
                    children: e.children
                })
        },
        73100: function(e, t, n) {
            n.d(t, {
                V: () => l
            });
            var r = n(56053);
            let l = {
                setUpvoteBannerInUpvoteListSeen: (0, r.VP)("FeedConfig/setUpvoteBannerInUpvoteListSeen"),
                setFeedConfigValue: (0, r.VP)("FeedConfig/setFeedConfigValue"),
                loadFeedCategories: (0, r.VP)("FeedMessages/loadFeedCategories")
            }
        },
        20696: function(e, t, n) {
            n.d(t, {
                Z: () => i
            });
            var r = n(43322),
                l = n(36035);
            let i = () => {
                let {
                    feedVirtuosoHandleRef: e,
                    setFeedScollerStateSnapshot: t
                } = (0, r.$K)();
                return {
                    saveScrollState: () => {
                        var n;
                        let r = document.querySelector(l.XQ),
                            i = null == r ? void 0 : r.clientHeight;
                        null == e || null == (n = e.current) || n.getState(e => {
                            t({
                                ...e,
                                scrollTop: e.scrollTop - (i ?? 0)
                            })
                        })
                    }
                }
            }
        },
        59008: function(e, t, n) {
            n.d(t, {
                E: () => l
            });
            var r = n(34267);
            let l = () => (0, r.cb)() > r.Rp.XSmall
        },
        69084: function(e, t, n) {
            n.d(t, {
                T: () => i,
                e: () => l
            });
            var r = n(44251);
            let l = `${r.V2.FLOW}/arbaeen`,
                i = e => [`/${r.V2.FLOW}`, `/${l}`].includes(e)
        },
        50073: function(e, t, n) {
            n.d(t, {
                u: () => l
            });
            var r = n(58191);
            let l = e => {
                let {
                    onDoubleClick: t,
                    onSingleClick: n,
                    duration: l = 200,
                    forceSingle: i
                } = e, a = (0, r.useRef)(), o = (0, r.useRef)(!1);
                return (0, r.useCallback)(e => {
                    i ? n(e) : o.current ? (t(e), a.current && clearTimeout(a.current), o.current = !1) : (o.current = !0, a.current = setTimeout(() => {
                        o.current = !1, n(e)
                    }, l))
                }, [l, t, n, i])
            }
        }
    }
]);
//# sourceMappingURL=1708.efa7172a.js.map