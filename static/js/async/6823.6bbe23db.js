try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3b07a570-06b7-4f10-ad00-2fe081127e1e", e._sentryDebugIdIdentifier = "sentry-dbid-3b07a570-06b7-4f10-ad00-2fe081127e1e")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6823"], {
        27546: function(e, a, s) {
            s.d(a, {
                $K: () => d,
                Lc: () => t,
                Nl: () => l,
                Tv: () => o
            });
            let d = ["SuspendedGroupAlert", "reactionerAvatar", "Deactivated"],
                o = ["UserProfile", "Settings", "AutoDownload", "ChatSettings", "DefaultTab", "MultiAvatar", "MediaView", "FullScreenFeed", "NotificationGuide", "SelectPfmTag", "SelectPfmSubTag", "PFMProblemReport", "ShowStory", "AddStory", "AfkarStory", "GifPreview", "GifView", "MoreText"],
                l = ["FullScreenFeed", "Attachment", "InAppMessagePromotion"],
                t = ["InAppMessagePromotion"]
        },
        47002: function(e, a, s) {
            s.d(a, {
                NS: () => r,
                iT: () => p
            });
            var d = s(56053),
                o = s(78625),
                l = s(383),
                t = s(27546);
            let i = (0, d.VP)("Modal/Close", function(e, a, s) {
                    return {
                        payload: {
                            modalType: e,
                            callback: a,
                            runCallbackIfFail: s
                        }
                    }
                }),
                n = (0, d.VP)("Modal/Open", function(e, a, s, d, o) {
                    return {
                        payload: {
                            modalType: e,
                            data: a,
                            replace: null == s ? void 0 : s.replace,
                            keepBackModal: null == s ? void 0 : s.keepBackModal,
                            id: d,
                            backdropColor: o
                        }
                    }
                }),
                g = (0, d.Z0)({
                    name: "modal",
                    initialState: {
                        modals: [],
                        drawer: !1,
                        isModalManagerReady: !1
                    },
                    reducers: {
                        popModal(e) {
                            e.modals.pop()
                        },
                        popMultipleModal(e, a) {
                            for (let s = 0; s < a.payload; s++) e.modals.pop()
                        },
                        clearModals(e) {
                            e.modals.splice(0, e.modals.length)
                        },
                        editModalData(e, a) {
                            let s = (0, o.HV)(e.modals);
                            s && (s.data = {
                                ...s.data ?? {},
                                ...a.payload
                            })
                        },
                        setIsModalManagerReady(e, a) {
                            e.isModalManagerReady = a.payload
                        },
                        toggleDrawer(e, a) {
                            e.drawer = a.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(i.type, (e, a) => {
                            let s = e.modals.findIndex(e => e.type === a.payload.modalType);
                            if (-1 !== s) {
                                let a = e.modals[s];
                                a && (e.modals.splice(s, 1), e.modals.push(a))
                            }
                        }), e.addCase(n.type, (e, a) => {
                            var s, d;
                            let l = (0, o.HV)(e.modals);
                            a.payload.replace && e.modals.pop(), e.modals.push({
                                data: a.payload.data,
                                type: a.payload.modalType,
                                keepBackModal: null == (s = a.payload) ? void 0 : s.keepBackModal,
                                id: a.payload.id,
                                backdropColor: a.payload.backdropColor
                            }), (null == (d = a.payload) ? void 0 : d.replace) && l && e.modals.push(l)
                        }), e.addCase(l.EW.type, e => {
                            let a = (0, o.HV)(e.modals);
                            a && !t.Nl.includes(null == a ? void 0 : a.type) && (e.modals = [])
                        })
                    }
                }),
                r = {
                    ...g.actions,
                    openModal: n,
                    closeModal: i
                },
                p = g.reducer
        },
        383: function(e, a, s) {
            s.d(a, {
                AA: () => L,
                Ao: () => v,
                EW: () => P,
                O2: () => V,
                Og: () => f,
                Qi: () => A,
                dY: () => h,
                dy: () => w,
                g: () => C,
                tD: () => R,
                uF: () => T
            });
            var d, o = s(33222),
                l = s(76526),
                t = s(7384),
                i = s(87728),
                n = s(15342),
                g = s(7836),
                r = s(56053),
                p = s(82759),
                M = s(80073);
            s(62025);
            var c = s(78625),
                u = s(5856),
                D = s(36823);
            let y = M.j.getLogger("Dialog Slice");
            var f = ((d = {}).LoadDialogs = "Dialogs/LoadDialogs", d.ChangeCategory = "Dialogs/ChangeCategory", d.DeleteDialog = "Dialogs/Delete", d.DeleteDialogWithTimout = "Dialogs/DeleteDialogWithPending", d.CancelDeleteDialogWithTimeout = "Dialogs/CancelDeleteDialogWithTimeout", d.ClearDialog = "Dialogs/Clear", d.OpenThread = "DialogsSlice/openThread", d.ReadMention = "DialogsSlice/ReadMention", d.MessageReactionsRead = "DialogsSlice/MessageReactionsRead", d.LoadPinnedDialogs = "Dialogs/LoadPinnedDialogs", d.MarkedDialogAsRead = "Dialogs/MarkedDialogAsRead", d.MarkedDialogAsUnRead = "Dialogs/MarkedDialogAsUnRead", d.ClickedDialog = "Dialogs/ClickedDialog", d.GetDialogClicks = "Dialogs/GetDialogClicks", d);
            let P = (0, r.VP)("DialogsSlice/setCurrentChat", (e, a) => ({
                    payload: {
                        peer: e,
                        thread: a
                    },
                    meta: {
                        [r.cN]: !0
                    }
                })),
                S = (0, r.Z0)({
                    name: "DialogsSlice",
                    initialState: u.e,
                    reducers: {
                        dialogsLoading(e, a) {
                            let s = e.dialogsCategoryInfo.get(a.payload);
                            y.warn("dialogs loading. info:", null == s ? void 0 : s.isLoaded, null == s ? void 0 : s.lastDate), s ? s.isFetching = !0 : e.dialogsCategoryInfo.set(a.payload, {
                                isFetching: !0,
                                isLoaded: !1,
                                lastDate: 0,
                                isInited: !1
                            })
                        },
                        dialogsFailed(e, a) {
                            let s = e.dialogsCategoryInfo.get(a.payload);
                            y.warn("dialogs failed and last state:", null == s ? void 0 : s.lastDate), s && (s.isFetching = !1)
                        },
                        dialogsReceived(e, a) {
                            var s;
                            let d = a.payload.dialogs;
                            y.info("received dialogs: ", a.payload.folderId, d.length);
                            let o = null == (s = d[d.length - 1]) ? void 0 : s.date,
                                l = e.dialogsCategoryInfo.get(a.payload.folderId);
                            l && (void 0 !== o && (l.lastDate = o), l.isLoaded = 10 === a.payload.folderId || d.length <= 1, l.isFetching = !1, l.isInited = !0), d.forEach(a => {
                                e.dialogs.set(a.peer.id, a)
                            })
                        },
                        pinnedDialogs(e, a) {
                            if (!a.payload.pinnedDialogs) return;
                            let s = new Set;
                            a.payload.pinnedDialogs.forEach(a => {
                                var d;
                                let o = null == (d = a.peer) ? void 0 : d.id;
                                o && (e.dialogs.set(o, a), s.add(o))
                            }), e.pinnedDialogs.set(a.payload.folderId, s)
                        },
                        changeCategory(e, a) {
                            e.currentCategory = a.payload
                        },
                        setLastVisitedMessage(e, a) {
                            let s = (0, g.LP)(a.payload.peer),
                                d = a.payload.lastVisitedMessageId ? {
                                    lastVisitedMessageId: a.payload.lastVisitedMessageId,
                                    lastVisitedMessageOffset: a.payload.offset
                                } : void 0;
                            d ? e.peerLastVisitedMessageInfo.set(s, d) : e.peerLastVisitedMessageInfo.delete(s)
                        },
                        addSelectedDialog(e, a) {
                            e.selectedDialogs.set(a.payload.uid, a.payload.folderId)
                        },
                        removeSelectedDialog(e, a) {
                            e.selectedDialogs.delete(a.payload)
                        },
                        clearSelectedDialogs(e) {
                            e.selectedDialogs.clear()
                        },
                        hiddenDialogs(e, a) {
                            a.payload.forEach(a => e.hiddenDialogs.add(a.id))
                        },
                        clearHiddenDialogs(e) {
                            e.hiddenDialogs.clear()
                        },
                        setDialogClicks(e, a) {
                            e.dialogClicks = a.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase("MessagesSendingFailed", (e, a) => {
                            let {
                                payload: s
                            } = a;
                            if (e.dialogs.has(s.peer.id)) {
                                let a = e.dialogs.get(s.peer.id);
                                a && a.rid === s.messageContainer.rid && e.dialogs.set(s.peer.id, {
                                    ...a,
                                    state: o.Zu.Error
                                })
                            }
                        }), e.addCase(l.u3.Update, (e, a) => {
                            a.dialogs.forEach(a => {
                                var s;
                                (null == (s = a.peer) ? void 0 : s.id) && e.dialogs.set(a.peer.id, a)
                            })
                        }), e.addCase(l.u3.Delete, (e, a) => {
                            y.debug("Delete", a), a.peers.forEach(a => {
                                e.dialogs.delete(a.id), e.pinnedDialogs.forEach(e => {
                                    e.delete(a.id)
                                })
                            })
                        }), e.addCase(t.t.UserKickedOrLeft, (e, a) => {
                            a.isMe && (y.debug("Kicked Me: ", a), e.dialogs.delete(a.gid))
                        }), e.addCase(l.u3.Replace, (e, a) => {
                            var s;
                            let d = e.dialogs,
                                o = new Set;
                            e.pinnedDialogs.forEach(e => {
                                e.forEach(e => o.add(e))
                            }), e.dialogsCategoryInfo.clear(), e.dialogs = new Map(a.dialogs.map(e => {
                                var a;
                                return [null == (a = e.peer) ? void 0 : a.id, e]
                            })), o.forEach(a => {
                                if (!e.dialogs.has(a)) {
                                    let s = d.get(a);
                                    s && e.dialogs.set(a, s)
                                }
                            }), e.dialogsCategoryInfo.set(i.m4.EXPEERTYPE_UNKNOWN, {
                                isFetching: !1,
                                isInited: !0,
                                isLoaded: a.dialogs.length < u.GF,
                                lastDate: (null == (s = (0, c.HV)(a.dialogs)) ? void 0 : s.date) ?? 0
                            })
                        }), e.addCase(P.type, (e, a) => {
                            e.currentPeer = a.payload.peer, e.thread = a.payload.thread
                        }), e.addCase(l.u3.ReplacePinned, (e, a) => {
                            var s;
                            let d = new Set;
                            a.dialogs.forEach(a => {
                                var s;
                                let o = null == (s = a.peer) ? void 0 : s.id;
                                o && (e.dialogs.set(o, a), d.add(o))
                            }), null == (s = e.pinnedDialogs) || s.set(a.folderId, d)
                        }), e.addCase(l.u3.RemovePinned, (e, a) => {
                            var s, d;
                            let o = (null == (s = e.pinnedDialogs) ? void 0 : s.get(a.folderId)) ?? new Set;
                            a.peers.forEach(e => {
                                o.delete(e.id)
                            }), null == (d = e.pinnedDialogs) || d.set(a.folderId, o)
                        }), e.addCase(n.LC.Delete, (e, a) => {
                            a.folderIds.forEach(a => {
                                e.dialogsCategoryInfo.delete(a), e.pinnedDialogs.delete(a)
                            })
                        })
                    }
                }),
                h = {
                    ...S.actions,
                    updateMagazineDialog: (0, r.VP)("DialogsSlice/updateMagazineDialog"),
                    readMention: (0, r.VP)("DialogsSlice/ReadMention"),
                    messageReactionsRead: (0, r.VP)("DialogsSlice/MessageReactionsRead"),
                    markedDialogAsRead: (0, r.VP)("Dialogs/MarkedDialogAsRead"),
                    markedDialogAsUnRead: (0, r.VP)("Dialogs/MarkedDialogAsUnRead"),
                    clickedDialog: (0, r.VP)("Dialogs/ClickedDialog"),
                    getDialogClicks: (0, r.VP)("Dialogs/GetDialogClicks")
                },
                m = S.reducer,
                C = (0, p.HY)({
                    fullDialogs: m,
                    shortDialogs: D._Z
                }),
                v = (0, r.VP)("Dialogs/LoadDialogs"),
                V = (0, r.VP)("Dialogs/LoadPinnedDialogs"),
                A = (e, a) => {
                    e(v(a)), e(V(a))
                },
                T = (0, r.VP)("Dialogs/Delete"),
                w = (0, r.VP)("Dialogs/DeleteDialogWithPending"),
                R = (0, r.VP)("Dialogs/CancelDeleteDialogWithTimeout"),
                L = (0, r.VP)("Dialogs/Clear")
        },
        5856: function(e, a, s) {
            s.d(a, {
                AV: () => p,
                GF: () => t,
                KZ: () => i,
                LG: () => n,
                LT: () => D,
                Q1: () => c,
                Qz: () => r,
                RA: () => M,
                XR: () => y,
                e: () => g,
                fB: () => u
            });
            var d = s(39201),
                o = s(87728),
                l = s(31855);
            let t = 40,
                i = e => e.sort((e, a) => e.isPinned && a.isPinned ? (0, l.AG)() ? -1 : 1 : e.isSpecial && a.isSpecial ? e.date > a.date ? -1 : 1 : !!e.isSpecial != !!a.isSpecial ? e.isSpecial ? -1 : 1 : e.isPinned !== a.isPinned ? e.isPinned ? -1 : 1 : !!e.draft != !!a.draft ? e.draft ? -1 : 1 : e.date > a.date ? -1 : 1),
                n = (e, a, s) => e.map(e => ({
                    ...e,
                    ...!s && {},
                    draft: a[(0, d.Ng)(e.peer)]
                })),
                g = {
                    dialogs: new Map,
                    pinnedDialogs: new Map,
                    hiddenDialogs: new Set,
                    dialogsCategoryInfo: new Map,
                    currentCategory: {
                        type: "folder",
                        id: o.m4.EXPEERTYPE_UNKNOWN
                    },
                    currentPeer: void 0,
                    selectedDialogs: new Map,
                    thread: void 0,
                    loadingThread: void 0,
                    peerLastVisitedMessageInfo: new Map,
                    dialogClicks: []
                },
                r = (e, a) => a === o.m4.EXPEERTYPE_UNKNOWN || e === a;

            function p(e, a) {
                return e >= ((null == a ? void 0 : a.lastDate) ?? Number.MAX_SAFE_INTEGER)
            }
            let M = (e, a) => {
                    var s;
                    return !!(null == (s = e[(0, d.Ng)(a)]) ? void 0 : s.trim())
                },
                c = e => {
                    var a;
                    return u(Number((null == (a = e.firstUnreadDate) ? void 0 : a.value) ?? "0"), e.date) || (null == e ? void 0 : e.markedAsUnread)
                },
                u = (e, a) => e < a,
                D = 5e3,
                y = (e, a) => {
                    if (e) return {
                        messageId: e,
                        threadType: a
                    }
                }
        },
        36823: function(e, a, s) {
            s.d(a, {
                AJ: () => n,
                In: () => r,
                _Z: () => g
            });
            var d = s(76526),
                o = s(90120),
                l = s(56053);
            let t = {
                    dialogsShort: new Map,
                    isLoading: !1,
                    isLoaded: !1
                },
                i = (0, l.Z0)({
                    name: "ShortDialogsSlice",
                    initialState: t,
                    reducers: {
                        dialogShortsReceived(e, a) {
                            e.dialogsShort = new Map(a.payload.map(e => {
                                var a;
                                return [null == (a = e.peer) ? void 0 : a.id, e]
                            })), e.isLoading = !1, e.isLoaded = !0
                        },
                        deleteShortDialog(e, a) {
                            e.dialogsShort.delete(a.payload)
                        },
                        setShortDialogsLoading(e, a) {
                            e.isLoading = a.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(d.u3.Update, (e, a) => {
                            a.dialogs.forEach(a => {
                                e.dialogsShort.set(a.peer.id, (0, o.Dq)(a))
                            })
                        }), e.addCase(d.u3.UpdateShort, (e, a) => {
                            a.shorts.forEach(a => {
                                var s;
                                e.dialogsShort.set(null == (s = a.peer) ? void 0 : s.id, a)
                            })
                        }), e.addCase(d.u3.ReplaceShort, (e, a) => {
                            e.dialogsShort = new Map(a.dialogs.map(e => {
                                var a;
                                return [null == (a = e.peer) ? void 0 : a.id, e]
                            }))
                        }), e.addCase(d.u3.Delete, (e, a) => {
                            a.peers.forEach(a => {
                                e.dialogsShort.delete(a.id)
                            })
                        })
                    }
                }),
                n = i.actions,
                g = i.reducer,
                r = (0, l.VP)("ShortDialogs/getShortDialogs")
        },
        62025: function(e, a, s) {
            s.d(a, {
                _W: () => l,
                on: () => t
            });
            var d, o = s(56053),
                l = ((d = {}).MessagesSendingFailed = "MessagesSendingFailed", d.BindToUpdates = "Messages/BindToUpdates", d.UnbindUpdates = "Messages/UnbindUpdates", d.SendDocument = "Messages/SendDocument", d.AbortDocument = "Messages/AbortDocument", d.SendTextMessage = "Messages/SendTextMessage", d.ForwardMessages = "Messages/ForwardMessage", d.ForwardToMe = "Messages/ForwardToMe", d.DeleteMessage = "Messages/DeleteMessage", d.SendTemplateMessageResponse = "Messages/SendTemplateMessageResponse", d.SendInlineCallbackData = "Messages/SendInlineCallbackData", d.EditMessage = "Messages/EditMessage", d.SendReceiptMessage = "Messages/SendReceiptMessage", d.SendContactMessage = "Messages/SendContactMessage", d.GetCrowdFundingTotalPaidAmount = "Messages/GetCrowdFundingTotalPaidAmount", d.SendPurchaseMessage = "Messages/SendPurchaseMessage", d.GetPurchaseMessageDetails = "Messages/GetPurchaseMessageDetails", d.GetPurchaseMessagePaymentList = "Messages/GetPurchaseMessagePaymentList", d.SendCrowdfundingMessage = "Messages/SendCrowdfundingMessage", d.SendFaleHafezMessage = "Messages/SendFaleHafezMessage", d.SendMultiMediaMessage = "Messages/SendMultiMediaMessage", d.AbortUploadMultiMedia = "Messages/AbortUploadMultiMedia", d.SendAttachmentAsGif = "Messages/SendAttachmentAsGif", d.UploadFile = "Messages/UploadFile", d.SendLocationMessage = "Messages/SendLocationMessage", d.FetchProtectedContent = "Messages/FetchProtectedContent", d.AddProtectedContent = "Messages/AddProtectedContent", d.SendPollMessage = "Messages/SendPollMessage", d.AddPendingTextMessageAfterHistoryLoad = "Messages/AddPendingTextMessageAfterHistoryLoad", d.SendPendingTextMessagesAfterHistoryLoad = "Messages/SendPendingTextMessagesAfterHistoryLoad", d.HistoryLoadedForBotTopic = "Messages/HistoryLoadedForBotTopic", d.RetrySendDocumentMessage = "Messages/RetrySendDocumentMessage", d);
            let t = {
                editMessage: (0, o.VP)("Messages/EditMessage", (e, a) => ({
                    payload: {
                        messageContainer: e,
                        text: a
                    }
                })),
                deleteMessages: (0, o.VP)("Messages/DeleteMessage", function(e) {
                    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return {
                        payload: {
                            ids: e,
                            justMine: a
                        }
                    }
                }),
                sendInlineCallbackData: (0, o.VP)("Messages/SendInlineCallbackData", (e, a, s, d, o) => ({
                    payload: {
                        id: e,
                        date: a,
                        data: s,
                        buttonId: d,
                        botId: o
                    }
                })),
                sendLocation: (0, o.VP)("Messages/SendLocationMessage", (e, a) => ({
                    payload: {
                        location: e,
                        replyMessage: a
                    }
                })),
                forwardMessages: (0, o.VP)("Messages/ForwardMessage"),
                forwardToMe: (0, o.VP)("Messages/ForwardToMe", (e, a) => ({
                    payload: {
                        messageContainer: e,
                        fromPeer: a
                    }
                })),
                sendTemplateMessageResponse: (0, o.VP)("Messages/SendTemplateMessageResponse", (e, a) => ({
                    payload: {
                        text: e,
                        templateMessageId: a
                    }
                })),
                sendTextMessage: (0, o.VP)("Messages/SendTextMessage", (e, a, s, d) => ({
                    payload: {
                        text: e,
                        replyMessage: a,
                        thread: s,
                        scheduledAt: d
                    }
                })),
                sendReceiptMessage: (0, o.VP)("Messages/SendReceiptMessage", (e, a) => ({
                    payload: {
                        receipt: e,
                        destPeer: a
                    }
                })),
                sendContactMessage: (0, o.VP)("Messages/SendContactMessage"),
                sendPollMessage: (0, o.VP)("Messages/SendPollMessage", (e, a, s) => ({
                    payload: {
                        pollMessage: e,
                        scheduledAt: a,
                        replyMessage: s
                    }
                })),
                messageFailed: (0, o.VP)("MessagesSendingFailed", (e, a) => ({
                    payload: {
                        peer: e,
                        messageContainer: a
                    }
                })),
                bindToMessagesUpdates: (0, o.VP)("Messages/BindToUpdates", () => ({
                    payload: void 0
                })),
                unbindMessagesUpdates: (0, o.VP)("Messages/UnbindUpdates", () => ({
                    payload: void 0
                })),
                sendDocument: (0, o.VP)("Messages/SendDocument", function(e) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        s = arguments.length > 2 ? arguments[2] : void 0,
                        d = arguments.length > 3 ? arguments[3] : void 0;
                    return {
                        payload: {
                            attachments: e,
                            attachmentType: a,
                            peer: s,
                            scheduledAt: d
                        }
                    }
                }),
                sendFaleHafez: (0, o.VP)("Messages/SendFaleHafezMessage"),
                sendMultiMediaMessage: (0, o.VP)("Messages/SendMultiMediaMessage"),
                abortUploadMultiMedia: (0, o.VP)("Messages/AbortUploadMultiMedia"),
                abortDocument: (0, o.VP)("Messages/AbortDocument", (e, a) => ({
                    payload: {
                        peer: e,
                        messageContainer: a
                    }
                })),
                getCrowdfundingTotalPaidAmount: (0, o.VP)("Messages/GetCrowdFundingTotalPaidAmount", (e, a, s, d) => ({
                    payload: {
                        peer: e,
                        rid: a,
                        date: s,
                        senderUid: d
                    }
                })),
                sendPurchaseMessage: (0, o.VP)("Messages/SendPurchaseMessage", (e, a, s, d, o) => ({
                    payload: {
                        attachment: e,
                        accountNumber: a,
                        requestType: s,
                        isDesired: d,
                        amount: o
                    }
                })),
                getPurchaseMessageDetails: (0, o.VP)("Messages/GetPurchaseMessageDetails", (e, a, s, d) => ({
                    payload: {
                        peer: e,
                        date: a,
                        rid: s,
                        sendUid: d
                    }
                })),
                getPurchaseMessagePaymentList: (0, o.VP)("Messages/GetPurchaseMessagePaymentList", (e, a, s, d, o) => ({
                    payload: {
                        peer: e,
                        date: a,
                        rid: s,
                        sendUid: d,
                        loadMoreState: o
                    }
                })),
                sendCrowdFundingMessage: (0, o.VP)("Messages/SendCrowdfundingMessage", (e, a, s, d, o, l, t) => ({
                    payload: {
                        attachment: e,
                        sliceAmount: a,
                        endDate: s,
                        cardNumber: d,
                        description: o,
                        totalAmount: l,
                        title: t
                    }
                })),
                sendAttachmentAsGif: (0, o.VP)("Messages/SendAttachmentAsGif", (e, a) => ({
                    payload: {
                        attachment: e,
                        peer: a
                    }
                })),
                uploadFile: (0, o.VP)("Messages/UploadFile", (e, a, s, d, o, l) => ({
                    payload: {
                        file: e,
                        peer: a,
                        messageContainer: s,
                        actions$: d,
                        filesDB: o,
                        thread: l
                    }
                })),
                fetchProtectedContent: (0, o.VP)("Messages/FetchProtectedContent", (e, a, s) => ({
                    payload: {
                        messageId: e,
                        peer: a,
                        token: s
                    }
                })),
                addProtectedContent: (0, o.VP)("Messages/AddProtectedContent", e => ({
                    payload: {
                        protectedContent: e
                    }
                })),
                addPendingTextMessageAfterHistoryLoad: (0, o.VP)("Messages/AddPendingTextMessageAfterHistoryLoad", (e, a, s, d) => ({
                    payload: {
                        peer: e,
                        text: a,
                        replyMessage: s,
                        thread: d
                    }
                })),
                sendPendingTextMessagesAfterHistoryLoad: (0, o.VP)("Messages/SendPendingTextMessagesAfterHistoryLoad", e => ({
                    payload: {
                        peer: e
                    }
                })),
                historyLoadedForBotTopic: (0, o.VP)("Messages/HistoryLoadedForBotTopic", e => ({
                    payload: {
                        peer: e
                    }
                })),
                retrySendDocumentMessage: (0, o.VP)("Messages/RetrySendDocumentMessage", (e, a) => ({
                    payload: {
                        peer: e,
                        messageContainer: a
                    }
                }))
            }
        }
    }
]);
//# sourceMappingURL=6823.6bbe23db.js.map