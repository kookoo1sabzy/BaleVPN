try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b6f7c234-15b2-4d63-9ff8-a587f083d11f", e._sentryDebugIdIdentifier = "sentry-dbid-b6f7c234-15b2-4d63-9ff8-a587f083d11f")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5512"], {
        71297: function(e, a, t) {
            t.d(a, {
                A: () => T
            });
            var r = t(46756),
                o = t.n(r),
                n = t(5421),
                i = t.n(n),
                l = t(90136),
                s = t.n(l),
                d = new URL(t(49208), t.b),
                c = i()(o()),
                p = s()(d);
            c.push([e.id, `.pLr4Vr{cursor:auto;flex-shrink:0;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;margin:0;position:relative}.pLr4Vr.sHcYld{cursor:pointer}.pLr4Vr{font-family:Roboto,Shabnam}.pLr4Vr.cfiwtJ{border:2px solid var(--color-primary-p-50);border-radius:50%}.pLr4Vr{position:relative}.i1ssG3{object-fit:cover;border-radius:50%;width:100%;height:100%;transition:opacity .8s;display:none}.i1ssG3.cfiwtJ{border:2px solid var(--color-primary-p-50);border-radius:50%}.i1ssG3.XvjWnA{display:block}.i1ssG3.XvjWnA.PlNMmR{opacity:.3}.i1ssG3.XvjWnA.PlNMmR._okUUA{opacity:1}.N5ck6R{cursor:pointer;border-radius:50%;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.N5ck6R.cfiwtJ{border:2px solid var(--color-primary-p-50);border-radius:50%}.N5ck6R p{color:var(--color-neutrals-on-primary);margin:0;font-weight:500}.w1zfb_{pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}.w1zfb_>div{pointer-events:initial;cursor:pointer}.Wz3nO1{border-radius:50%;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.Dp2f1p{background-color:var(--color-neutrals-n-00);border-radius:50%;width:12px;height:12px;position:absolute}.Dp2f1p:after{content:"";border-radius:50%;width:8px;height:8px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.Dp2f1p.I9bN5C{bottom:0;inset-inline-end:0}.Dp2f1p.I9bN5C:after{background-color:var(--color-neutrals-n-100)}.Dp2f1p.VowZDj{bottom:0;inset-inline-end:0}.Dp2f1p.VowZDj:after{background-color:var(--color-primary-p-50)}.Dp2f1p.JGTkxs{top:0;right:0}.Dp2f1p.JGTkxs:after{background-color:var(--color-error)}.Tofrx1{color:var(--color-neutrals-on-primary)}.oDEfOW{z-index:1;border-radius:50%;width:37.5%;position:absolute;bottom:-2%;right:5%}.J6R6Uc{box-sizing:content-box;background-color:var(--color-neutrals-n-40);cursor:pointer;border-radius:50%;position:absolute}.n7wxZJ{margin:2px}.jJkx10{justify-content:center;align-items:center;display:flex}.p3Iw93{-webkit-mask:url(${p}) 50%/contain no-repeat;mask:url(${p}) 50%/contain no-repeat}`, ""]), c.locals = {
                AvatarWrapper: "pLr4Vr",
                avatarWrapper: "pLr4Vr",
                isClickable: "sHcYld",
                isInCall: "cfiwtJ",
                AvatarImage: "i1ssG3",
                avatarImage: "i1ssG3",
                isDownloaded: "XvjWnA",
                showTransition: "PlNMmR",
                isOpaque: "_okUUA",
                AvatarPlaceholder: "N5ck6R",
                avatarPlaceholder: "N5ck6R",
                AvatarLoaderWrapper: "w1zfb_",
                avatarLoaderWrapper: "w1zfb_",
                IconAvatarWrapper: "Wz3nO1",
                iconAvatarWrapper: "Wz3nO1",
                AvatarBadge: "Dp2f1p",
                avatarBadge: "Dp2f1p",
                offlineBadge: "I9bN5C",
                onlineBadge: "VowZDj",
                notifyBadge: "JGTkxs",
                TextAvatar: "Tofrx1",
                textAvatar: "Tofrx1",
                IconBadge: "oDEfOW",
                iconBadge: "oDEfOW",
                StoryCircle: "J6R6Uc",
                storyCircle: "J6R6Uc",
                PlaceholderWithStory: "n7wxZJ",
                placeholderWithStory: "n7wxZJ",
                StoryAvatarWrapper: "jJkx10",
                storyAvatarWrapper: "jJkx10",
                BadgeMask: "p3Iw93",
                badgeMask: "p3Iw93"
            };
            let T = c
        },
        49208: function(e, a, t) {
            e.exports = t.p + "static/svg/crescent.b2f9eeca.svg"
        },
        71636: function(e, a, t) {
            t.d(a, {
                b: () => n
            });
            var r = t(58191),
                o = t.n(r);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Close-icon"
                }, e), o().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M18.168 5.83a.75.75 0 0 1 0 1.06L6.89 18.166a.75.75 0 0 1-1.06-1.061L17.106 5.829a.75.75 0 0 1 1.06 0",
                    clipRule: "evenodd"
                }), o().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M5.825 5.825a.75.75 0 0 1 1.06 0l11.288 11.288a.75.75 0 0 1-1.06 1.06L5.825 6.886a.75.75 0 0 1 0-1.06",
                    clipRule: "evenodd"
                }))
            }
        },
        6992: function(e, a, t) {
            t.d(a, {
                R: () => n
            });
            var r = t(58191),
                o = t.n(r);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, o().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Loading-icon"
                }, e), o().createElement("g", {
                    fill: t,
                    clipPath: "url(#clip0_2381_271)"
                }, o().createElement("path", {
                    d: "M6.5 13.5a1.5 1.5 0 0 0 0-3h-4a1.5 1.5 0 0 0 0 3z",
                    opacity: .75
                }), o().createElement("path", {
                    d: "M6.342 4.22a1.5 1.5 0 1 0-2.121 2.122L7.049 9.17A1.5 1.5 0 0 0 9.171 7.05L6.342 4.221",
                    opacity: .87
                }), o().createElement("path", {
                    d: "M13.5 17.5a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0z",
                    opacity: .51
                }), o().createElement("path", {
                    d: "M9.17 16.952a1.5 1.5 0 1 0-2.121-2.122L4.22 17.66a1.5 1.5 0 1 0 2.122 2.12l2.828-2.828",
                    opacity: .63
                }), o().createElement("path", {
                    d: "M16.952 14.83a1.5 1.5 0 1 0-2.122 2.121l2.829 2.829a1.5 1.5 0 1 0 2.12-2.122l-2.828-2.828",
                    opacity: .39
                }), o().createElement("path", {
                    d: "M21.5 13.5a1.5 1.5 0 0 0 0-3h-4a1.5 1.5 0 0 0 0 3z",
                    opacity: .27
                }), o().createElement("path", {
                    d: "M19.78 6.342a1.5 1.5 0 1 0-2.122-2.121L14.83 7.049a1.5 1.5 0 1 0 2.121 2.122l2.828-2.829",
                    opacity: .15
                }), o().createElement("path", {
                    d: "M13.5 2.5a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0z"
                })), o().createElement("defs", null, o().createElement("clipPath", {
                    id: "clip0_2381_271"
                }, o().createElement("path", {
                    fill: t,
                    d: "M1 1h22v22H1z"
                }))))
            }
        },
        33439: function(e, a, t) {
            t.d(a, {
                P: () => k,
                f: () => B
            });
            var r, o = t(36878),
                n = t(58191),
                i = t.n(n),
                l = t(99290),
                s = t(36214),
                d = t(72984),
                c = t(57243),
                p = t.n(c),
                T = t(53321),
                O = t.n(T),
                h = t(23518),
                u = t.n(h),
                m = t(14182),
                f = t.n(m),
                g = t(5033),
                b = t.n(g),
                v = t(77141),
                y = t.n(v),
                S = t(66338),
                w = t.n(S),
                C = t(71297),
                A = {};
            A.styleTagTransform = w(), A.setAttributes = b(), A.insert = f().bind(null, "head"), A.domAPI = u(), A.insertStyleElement = y(), O()(C.A, A);
            let M = C.A && C.A.locals ? C.A.locals : void 0;
            var k = ((r = {}).Small = "28px", r.Medium = "32px", r.Large = "50px", r.XLarge = "64px", r);
            let x = i().forwardRef((e, a) => {
                    var t;
                    let {
                        size: r,
                        backgroundColor: i,
                        icon: c,
                        iconSize: T,
                        name: O,
                        hasBorder: h,
                        borderStyle: u,
                        borderClassName: m,
                        src: f,
                        fileSrc: g,
                        imageClassName: b,
                        showTransition: v,
                        avatarPlaceholderClassName: y,
                        isOnline: S,
                        showOnlineBadge: w,
                        showNotifyBadge: C,
                        fontSize: A,
                        badgeIconSrc: k,
                        badgeIconClassName: x,
                        onBadgeIconClick: B,
                        callIcon: L,
                        style: E,
                        className: I,
                        showCompeleteText: R,
                        premiumBadge: D,
                        ...W
                    } = e, P = (0, l.useTheme)(), [j, N] = (0, n.useState)(!1), [z, U] = (0, n.useState)(!1), G = (0, n.useMemo)(() => f || (g && "undefined" != typeof URL && URL.createObjectURL ? URL.createObjectURL(g) : void 0), [f, g]), F = !!c, _ = !F && G, J = !F && (!G || !j), V = (0, d.Er)(i ?? s.p8.color_alternative_a_01);
                    (0, n.useEffect)(() => () => {
                        !f && g && G && URL.revokeObjectURL(G)
                    }, [f, g, G]), (0, n.useEffect)(function() {
                        j && v && U(!0)
                    }, [j]);
                    let H = (0, n.useMemo)(() => ({
                        width: `${parseInt(r)+(h?40>parseInt(r)?2:4:0)}px`,
                        height: `${parseInt(r)+(h?40>parseInt(r)?2:4:0)}px`
                    }), [r, h]);
                    return (0, o.jsxs)("div", {
                        ...W,
                        ref: a,
                        style: {
                            width: r,
                            height: r,
                            ...E
                        },
                        "aria-label": "avatar",
                        className: p()(M.AvatarWrapper, {
                            [M.isClickable]: !!_
                        }, I),
                        children: [c && (0, o.jsx)("div", {
                            className: M.IconAvatarWrapper,
                            style: {
                                backgroundColor: V
                            },
                            children: (0, o.jsx)(c, {
                                size: T ?? 24,
                                color: P.colors.light.on_primary,
                                role: "img"
                            })
                        }), (w || C) && !h && (0, o.jsx)("div", {
                            className: p()(M.AvatarBadge, {
                                [M.onlineBadge]: w && S,
                                [M.offlineBadge]: w && !S,
                                [M.notifyBadge]: C
                            })
                        }), k && (0, o.jsx)("img", {
                            src: k,
                            className: p()(M.IconBadge, x),
                            onClick: B
                        }), (h || _ || J) && (0, o.jsxs)("div", {
                            className: p()(M.StoryAvatarWrapper, {
                                [M.BadgeMask]: k
                            }),
                            style: H,
                            children: [!!L && L, W.children, _ && (0, o.jsx)("img", {
                                className: p()(M.AvatarImage, {
                                    [M.isDownloaded]: j,
                                    [M.showTransition]: v,
                                    [M.isOpaque]: z,
                                    [M.isInCall]: !!L
                                }, b),
                                alt: (null == O ? void 0 : O.charAt(0)) ?? "A",
                                src: G,
                                onLoad: () => N(!0),
                                style: {
                                    width: r,
                                    height: r
                                },
                                role: "img"
                            }), J && (0, o.jsxs)("div", {
                                className: p()(M.AvatarPlaceholder, y, {
                                    [M.PlaceholderWithStory]: h,
                                    [M.isInCall]: !!L
                                }),
                                style: {
                                    backgroundColor: V,
                                    width: h ? `${parseInt(r)-4}px` : r,
                                    height: h ? `${parseInt(r)-4}px` : r
                                },
                                children: [(0, o.jsx)("p", {
                                    style: {
                                        fontSize: A ? `${A}px` : void 0,
                                        direction: R ? "ltr" : void 0
                                    },
                                    children: (0, o.jsx)("span", {
                                        className: M.TextAvatar,
                                        children: O ? R ? O : null == (t = (Intl.Segmenter ? [...new Intl.Segmenter().segment(O)].map(e => e.segment) : O)[0]) ? void 0 : t.toUpperCase() : ""
                                    })
                                }), D && (0, o.jsx)("div", {
                                    className: M.PremiumBadge,
                                    children: D
                                })]
                            }), h && (0, o.jsx)("div", {
                                className: p()(M.StoryCircle, m),
                                style: u
                            })]
                        })]
                    })
                }),
                B = i().memo(x)
        },
        21452: function(e, a, t) {
            t.d(a, {
                $y: () => d,
                L4: () => s,
                Xj: () => h,
                h: () => O,
                u: () => T
            });
            var r = t(52484),
                o = t(39201),
                n = t(58191),
                i = t(27767),
                l = t(2077);
            r.TO.GoldWallet, r.TO.GoldGiftPacket, r.TO.MyBankPageWebViewCharge, r.TO.MyBankPageWebViewBill, r.TO.MyBankPageWebViewInternet, r.TO.MyCards, r.TO.CardToCard, r.TO.ChannelAdvertisement, r.TO.BuyChargeWithUserID, r.TO.PfmThirdLayer, r.TO.ChatCardToCard, r.TO.BalanceCard, r.TO.Safteh, r.TO.KindnessCircle, r.TO.HalalFundWeb, r.TO.DaratoWeb, r.TO.CardStatement, r.TO.MyBankV2, r.TO.Shaparak, r.TO.TGRecorder, r.TO.ImportContacts, r.TO.CheckForUpdate, r.TO.ShouldShowForwardedReactioners, r.TO.NewSharedMediaService, r.TO.NewPrivateSharedMedia, r.TO.MessageDateFilter, r.TO.MessageUserFilter, r.TO.SharedLinks, r.TO.Kashef, r.TO.ShowAvtarOtpBot, r.TO.NewUploadManager, r.TO.MessageSeenList, r.TO.MoreReaction, r.TO.FoldersManagement, r.TO.ShowFolders, r.TO.SimpleEditor, r.TO.FalakeLinks, r.TO.SearchFile, r.TO.AnonymousContact, r.TO.NewContactMessage, r.TO.DynamicSharedMedia, r.TO.UnreadTab, r.TO.StickyAvatar, r.TO.CheckList, r.TO.ChannelStatistics, r.TO.MutualGroups, r.TO.Poll, r.TO.MentionUsername, r.TO.Archive, r.TO.ScheduleMessage, r.TO.SpeechTranscript, r.TO.AIChat, r.TO.LinkSummary, r.TO.FeedOffline, r.TO.SimilarsSwipeTutorial, r.TO.FeedComment, r.TO.FeedCategories, r.TO.FeedNoBlurThumbnail, r.TO.FeedSimilarPosts, r.TO.SpecialStories, r.TO.StoryFaleHafez, r.TO.StoryTag, r.TO.StoryTagSpecial, r.TO.StoryLinkClickCount, r.TO.MostPopularStoriesAlt, r.TO.MusicStory, r.TO.AddStoryForGroup, r.TO.StoryExPeerGroupForGroup, r.TO.ShowStoryInDialogList, r.TO.HideStory, r.TO.StoryHideAnimation, r.TO.LinkValidationInAddStory, r.TO.ArzInquiry, r.TO.FaleHafez, r.TO.SendCrowdfundingWeb, r.TO.ShopAudience, r.TO.ShopAds, r.TO.DisableShopEnrollWeb, r.TO.Bankdari, r.TO.Yara, r.TO.ForcedAdPanelWeb, r.TO.CopyLinkOption, r.TO.ChatAnimationScroll, r.TO.EmojiByColon, r.TO.Shopman, r.TO.ShopProductItem, r.TO.DisableShop, r.TO.PushNotification, r.TO.ShowShopServicesRow, r.TO.WebApp, r.TO.MiniAppDeeplink, r.TO.MiniAppMainButton, r.TO.DownloadLogs, r.TO.DownloadPushLogs, r.TO.AppBarEventBar, r.TO.CashoutCommission, r.TO.AudioMeet, r.TO.VideoCall, r.TO.ScreenShare, r.TO.CallAnimation, r.TO.GroupCall, r.TO.CallSurvey, r.TO.CameraSwitch, r.TO.CallDeviceSettings, r.TO.CallMembersList, r.TO.GroupCallAdminPermissionCheck, r.TO.CallManagement, r.TO.CallLink, r.TO.CallPrivateLink, r.TO.AccessCallLink, r.TO.CallRecordStatus, r.TO.CallRecord, r.TO.RaiseHand, r.TO.InviteCall, r.TO.OngoingCalls, r.TO.SendCallEvents, r.TO.RealDate, r.TO.InternalAutoCall, r.TO.ArbaeenUSSD, r.TO.ChannelRecommendation, r.TO.ChannelRecommendationJoinButton, r.TO.RelatedChannels, r.TO.ShowChannelMembersInRelatedChannels, r.TO.SponsoredNewOrder, r.TO.SecondSponsoredMessage, r.TO.GetGroupPreview, r.TO.NewOnboarding, r.TO.EmptyStateOnBoarding, r.TO.EmptyStateContactsOnBoarding, r.TO.SearchRecommendations, r.TO.GroupRecommendations, r.TO.InviteBotToGroup, r.TO.BlockedUser, r.TO.SimilarGroups, r.TO.BannedUsers, r.TO.BotMessageAccess, r.TO.TwoFA, r.TO.PremiumCore, r.TO.BotSponsoredMessages, r.TO.CustomEventBar, r.TO.AnimatedEmojiOnDialogAd, r.TO.ShimmerEffectOnDialogAd, r.TO.AnimatedTextOnDialogAd, r.TO.UnderPeerAd, r.TO.ShowServicesTooltip, r.TO.OnboardingAdBanner, r.TO.TopPeers, r.TO.GlobalSearchTabs, r.TO.MiniAppWebPermissions, r.TO.MiniAppPayment, r.TO.BotCustomAction, r.TO.MiniAppMinimize, r.TO.BotRating, r.TO.BotAgreement, r.TO.ArzMosaferatiMFE, r.TO.ArzTollBot, r.TO.Theodore, r.TO.InAppMessage, r.TO.DeleteSyncContacts, r.c8.GiftButton, r.c8.BadRouteToTestDialogs, r.c8.ChatHistoryExport, r.c8.MessageItemUpvote, r.c8.CrowdfundingPayWithWallet, r.c8.NowruzCall, r.c8.YaldaCall, r.c8.UpvoteMagazine;
            let s = (e, a) => {
                    {
                        let t = d(a, e);
                        return !!t && c(t)
                    }
                },
                d = (e, a) => e[(0, o.wD)(a)],
                c = e => Number(e) <= Number("151668"),
                p = e => {
                    let a = (0, l.d4)(e => e.settings.settings);
                    return (0, n.useMemo)(() => e.map(e => s(e, a)), [a])
                },
                T = e => p([e])[0],
                O = e => {
                    let a = p(e);
                    return (0, n.useMemo)(() => {
                        let t = new Map;
                        return e.forEach((e, r) => {
                            t.set(e, a[r])
                        }), t
                    }, (0, i.vn)([e, a]))
                },
                h = e => {
                    let {
                        flagname: a,
                        children: t,
                        disabledComponent: r = null
                    } = e;
                    return T(a) ? t : r
                }
        }
    }
]);
//# sourceMappingURL=5512.b90d63b5.js.map