try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da6f1709-b719-416f-b2b0-cc18fd3dbcad", e._sentryDebugIdIdentifier = "sentry-dbid-da6f1709-b719-416f-b2b0-cc18fd3dbcad")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1092"], {
        48517: function(e, t, i) {
            i.r(t), i.d(t, {
                build: () => aR
            });
            var s, r, n, a, o, d, l, u, p, h, g, c, f, v, m, k, y, b, T, M, S, w, P, E, I, R, D = i(51116),
                _ = i(6756),
                U = i(18520);
            class A {
                putAttribute(e, t) {
                    this.attributes[e] = t, this.externalTrace.putAttribute(e, t)
                }
                start() {
                    this.startTime = this.now();
                    try {
                        this.externalTrace.start()
                    } catch (e) {
                        this.logger.error("trace start", e)
                    }
                }
                stop() {
                    let e = this.now(),
                        t = e - this.startTime;
                    try {
                        this.externalTrace.stop()
                    } catch (e) {
                        this.logger.error("trace stop", e)
                    }
                    _.U.warn("stop trace", this.eventName, {
                        ...this.attributes,
                        duration: t
                    }), this.send(this.eventName, {
                        ...this.attributes,
                        start: this.startTime,
                        end: e,
                        duration: t
                    })
                }
                constructor(e, t, i, s) {
                    (0, D._)(this, "eventName", void 0), (0, D._)(this, "externalTrace", void 0), (0, D._)(this, "now", void 0), (0, D._)(this, "send", void 0), (0, D._)(this, "startTime", void 0), (0, D._)(this, "attributes", {}), (0, D._)(this, "logger", _.U.getLogger("Peformance")), this.eventName = e, this.externalTrace = t, this.now = i, this.send = s
                }
            }
            class C {
                newTrace(e) {
                    let t = this.externalPerformance.newTrace(e),
                        i = new A(e, t, this.now, this.send);
                    return i.putAttribute("app_version", this.appVersion.toString()), i
                }
                constructor(e, t, i) {
                    (0, D._)(this, "appVersion", void 0), (0, D._)(this, "externalPerformance", void 0), (0, D._)(this, "seraj", void 0), (0, D._)(this, "send", (e, t) => {
                        (0, U.s)(this.seraj.sendSerajEvent(e, t, Date.now())).catch(t => {
                            _.U.error("send perf event error", e, t)
                        })
                    }), (0, D._)(this, "now", () => this.externalPerformance.now()), this.appVersion = e, this.externalPerformance = t, this.seraj = i
                }
            }
            var O = i(43806),
                G = i(56530),
                x = i(65952);
            class L {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "setOnline", e => (0, G.UY)(() => this.api.SetOnline({
                        isOnline: e,
                        deviceCategory: void 0,
                        deviceType: x.bq.DEVICETYPE_UNKNOWN,
                        timeout: 9e4
                    }), {
                        timeOut: 5e3,
                        retry: !1
                    })), (0, D._)(this, "subscribeToUsersOnline", e => (0, G.UY)(() => this.api.SubscribeToOnline({
                        users: e
                    }))), (0, D._)(this, "subscribeToGroupsOnline", e => (0, G.UY)(() => this.api.SubscribeToGroupOnline({
                        groups: e
                    }))), (0, D._)(this, "unSubscribeFromUsersOnline", e => (0, G.UY)(() => this.api.SubscribeFromOnline({
                        users: e
                    }))), (0, D._)(this, "unSubscribeFromGroupsOnline", e => (0, G.UY)(() => this.api.SubscribeFromGroupOnline({
                        groups: e
                    }))), (0, D._)(this, "getContactsPresences", e => (0, G.UY)(() => this.api.GetContactsPresences({
                        limit: e
                    }))), (0, D._)(this, "getUsersPresences", e => (0, G.UY)(() => this.api.GetUsersPresence({
                        userIds: e
                    }))), this.api = e
                }
            }
            var N = i(33654),
                q = i(44334),
                F = i(63438),
                H = i(72547),
                V = i(36595),
                B = i(23031),
                j = i(69758),
                Y = i(84748),
                W = i(3537),
                z = i(34993),
                $ = i(46896),
                K = i(97474),
                J = i(52545),
                Z = i(37284),
                X = i(35133),
                Q = i(74679),
                ee = i(78130),
                et = i(10492),
                ei = i(28972),
                es = i(36343),
                er = i(87728),
                en = i(33222),
                ea = i(21574),
                eo = i(31622),
                ed = i(49553),
                el = i(19376),
                eu = i(78819),
                ep = i(33148);
            (s = v || (v = {}))[s.Hidden = 0] = "Hidden", s[s.Visibile = 1] = "Visibile";
            class eh {
                setOnlineInterval() {
                    let e = this.ctx.auth.authState.pipe((0, W.p)(e => e === ea.k.Success), (0, z.n)(() => (0, N.Y)(9e4).pipe((0, W.p)(() => this.isAppVisible.value), (0, z.n)(() => this.api.setOnline(!0).pipe((0, $.W)(e => (this.logger.error("setOnline", e), q.w)))), (0, K.Q)(this.ctx.auth.authState.pipe((0, W.p)(e => ea.k.SignOutSuccess === e)))))).subscribe();
                    this.subscriptions.push(e)
                }
                isUserPresenceEvent(e, t) {
                    var i, s, r, n;
                    return (null == (i = e.userOnline) ? void 0 : i.uid) === t || (null == (s = e.userOffline) ? void 0 : s.uid) === t || (null == (r = e.userLastSeen) ? void 0 : r.uid) === t || (null == (n = e.userLastSeenUnknown) ? void 0 : n.uid) === t
                }
                bindToUserOnlineWeak() {
                    return this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.userOnline), (0, J.Z)(e => {
                        let {
                            uid: t
                        } = e.userOnline;
                        return (0, F.O)(9e4).pipe((0, K.Q)(this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => this.isUserPresenceEvent(e, t)), (0, Z.s)(1))), (0, X.T)(() => ({
                            userOffline: e.userOnline
                        })), (0, Q.Z)(e))
                    }))
                }
                reduceWeakEvents() {
                    return (0, X.T)(e => {
                        let t = {
                            groupOnline: new Map,
                            userLastSeen: new Map,
                            userLastSeenUnknown: new Map,
                            userOffline: new Map,
                            userOnline: new Map
                        };

                        function i(e) {
                            t.userOnline.has(e) && t.userOnline.delete(e)
                        }
                        return e.forEach(e => {
                            if (e.groupOnline) t.groupOnline.set(e.groupOnline.groupId, e.groupOnline);
                            else if (e.userLastSeenUnknown) i(e.userLastSeenUnknown.uid), t.userLastSeenUnknown.set(e.userLastSeenUnknown.uid, e.userLastSeenUnknown);
                            else if (e.userLastSeen) i(e.userLastSeen.uid), t.userLastSeen.set(e.userLastSeen.uid, e.userLastSeen);
                            else if (e.userOnline) {
                                var s;
                                s = e.userOnline.uid, t.userOffline.has(s) && t.userOffline.delete(s), t.userOnline.set(e.userOnline.uid, e.userOnline)
                            } else e.userOffline && (i(e.userOffline.uid), t.userOffline.set(e.userOffline.uid, e.userOffline))
                        }), {
                            userLastSeenUnknown: [...t.userLastSeenUnknown.values()],
                            userLastSeen: [...t.userLastSeen.values()],
                            userOnline: [...t.userOnline.values()],
                            userOffline: [...t.userOffline.values()],
                            groupOnline: [...t.groupOnline.values()]
                        }
                    })
                }
                setAppVisibliblity(e) {
                    return this.isAppVisible.next(e), this.ctx.auth.authState.asObservable().pipe((0, z.n)(t => t === ea.k.SignOutSuccess ? q.w : this.api.setOnline(e).pipe((0, $.W)(e => (this.logger.error("setOnline", e), q.w)))))
                }
                getContactsPresence(e) {
                    return this.api.getContactsPresences(e).pipe((0, z.n)(() => q.w))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "isAppVisible", new H.t(!1)), (0, D._)(this, "logger", _.U.getLogger("PresenceModule")), (0, D._)(this, "subscriptions", []), (0, D._)(this, "usersLastSeen", new Map), (0, D._)(this, "appVisible", () => this.isAppVisible.asObservable()), (0, D._)(this, "start", () => {
                        this.setOnlineInterval()
                    }), (0, D._)(this, "stop", () => {
                        this.subscriptions.forEach(e => e.unsubscribe())
                    }), (0, D._)(this, "subscribeToUsers", e => (0, V.T)(() => e.length > 0, this.ctx.users.loadUsers(e.map(el.u5)).pipe((0, z.n)(e => this.api.subscribeToUsersOnline(e.filter(e => !e.isBot).map(e => (0, eu.j)(e.id))))), q.w)), (0, D._)(this, "unSubscribeFromUsers", e => (0, V.T)(() => e.length > 0, this.ctx.users.loadUsers(e.map(el.u5)).pipe((0, z.n)(e => this.api.unSubscribeFromUsersOnline(e.filter(e => !e.isBot).map(e => (0, eu.j)(e.id))))), q.w)), (0, D._)(this, "subscribeToGroups", e => (0, V.T)(() => e.length > 0, this.ctx.groups.loadGroups(e.map(eo.uY)).pipe((0, z.n)(e => this.api.subscribeToGroupsOnline(e.filter(e => e.groupType !== es.MH.GROUPTYPE_CHANNEL).map(e => (0, ed.t)(e.id))))), q.w)), (0, D._)(this, "unSubscribeFromGroups", e => (0, V.T)(() => e.length > 0, this.ctx.groups.loadGroups(e.map(eo.uY)).pipe((0, z.n)(e => this.api.unSubscribeFromGroupsOnline(e.filter(e => e.groupType !== es.MH.GROUPTYPE_CHANNEL).map(e => ({
                        groupId: e.id,
                        accessHash: e.accessHash
                    }))))), q.w)), (0, D._)(this, "weakUpdates$", void 0), (0, D._)(this, "bindToWeak", () => (this.weakUpdates$ || (this.weakUpdates$ = (0, B.h)(this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.groupOnline || !!e.userOffline || !!e.userLastSeen || !!e.userLastSeenUnknown)), this.bindToUserOnlineWeak()).pipe((0, ee.M)(e => {
                        if (e.userLastSeen || e.userLastSeenUnknown) {
                            let t = e.userLastSeen ?? e.userLastSeenUnknown;
                            this.usersLastSeen.set(t.uid, e.userLastSeen ? v.Visibile : v.Hidden)
                        }
                    }), (0, et.u)())), this.weakUpdates$)), (0, D._)(this, "bindToMessagesEventUpdates$", void 0), (0, D._)(this, "bindToMessages", () => (this.bindToMessagesEventUpdates$ || (this.bindToMessagesEventUpdates$ = this.ctx.messaging.bindToEvents().pipe((0, z.n)(e => {
                        if (e.type === ep.i.NewMessages) {
                            var t;
                            let i = e.messages[e.messages.length - 1];
                            if (i.senderUid === (null == (t = this.ctx.auth.user) ? void 0 : t.id) || Number(i.date) < Date.now() - 15e3) return q.w;
                            let s = {
                                id: i.senderUid,
                                type: er.RK.PEERTYPE_PRIVATE
                            };
                            return (0, V.T)(() => e.peer.type === er.RK.PEERTYPE_GROUP, this.ctx.groups.findGroup(e.peer.id).pipe((0, W.p)(e => !!(e && !(0, eo.IV)(e)))), (0, j.of)(void 0)).pipe((0, X.T)(() => s))
                        }
                        if (e.type === ep.i.UpdateMessages) {
                            let t = e.messages,
                                i = t[t.length - 1];
                            if (i && i.state && i.state === en.Zu.Read && Number(i.date) > Date.now() - 15e3) return (0, j.of)(e.peer)
                        }
                        return q.w
                    }), (0, W.p)(e => !!e), (0, et.u)())), this.bindToMessagesEventUpdates$)), (0, D._)(this, "bindToTypingUpdates$", void 0), (0, D._)(this, "bindToTyping", () => (this.bindToTypingUpdates$ || (this.bindToTypingUpdates$ = this.ctx.typing.bindToTypingUpdates().pipe((0, W.p)(e => {
                        var t;
                        return !!(null == (t = e.typing) ? void 0 : t.peer)
                    }), (0, X.T)(e => (0, el.Yt)(e.typing.uid)), (0, et.u)())), this.bindToTypingUpdates$)), (0, D._)(this, "bindToObvious", () => (0, B.h)(this.bindToTyping(), this.bindToMessages()).pipe((0, ei.w)(500), (0, W.p)(e => e.length > 0), this.reducePeers(), (0, z.n)(e => (0, Y.H)(e)), this.scheduleForLastSeen())), (0, D._)(this, "scheduleForLastSeen", () => (0, J.Z)(e => {
                        let t = {
                            userOnline: {
                                uid: e,
                                deviceType: x.bq.DEVICETYPE_UNKNOWN,
                                deviceCategory: ""
                            }
                        };
                        return (0, F.O)(2e4).pipe((0, K.Q)((0, B.h)(this.bindToWeak().pipe((0, W.p)(t => this.isUserPresenceEvent(t, e))), (0, B.h)(this.bindToTyping(), this.bindToMessages()).pipe((0, W.p)(t => t.id === e)))), (0, X.T)(() => {
                            let t = Date.now() / 1e3;
                            return this.usersLastSeen.get(e) === v.Hidden ? {
                                userLastSeenUnknown: {
                                    deviceType: x.bq.DEVICETYPE_UNKNOWN,
                                    uid: e,
                                    date: {
                                        value: t.toString()
                                    },
                                    deviceCategory: ""
                                }
                            } : {
                                userLastSeen: {
                                    uid: e,
                                    date: t,
                                    deviceType: x.bq.DEVICETYPE_UNKNOWN,
                                    deviceCategory: ""
                                }
                            }
                        }), (0, Q.Z)(t))
                    })), (0, D._)(this, "bindToPresenceUpdates", () => this.ctx.auth.authState.pipe((0, W.p)(e => e === ea.k.Success), (0, z.n)(() => (0, B.h)(this.bindToWeak(), this.bindToObvious())), (0, ei.w)(250), (0, W.p)(e => e.length > 0), this.reduceWeakEvents())), (0, D._)(this, "reducePeers", () => (0, X.T)(e => Array.from(e.reduce((e, t) => e.add(t.id), new Set)))), (0, D._)(this, "getUsersPresences", e => this.api.getUsersPresences(e)), this.api = e, this.ctx = t
                }
            }
            var eg = i(45943),
                ec = i(13274);
            class ef {
                loadGroups(e) {
                    return this.loadGroupsByService(e)
                }
                loadGroupsByService(e) {
                    return (0, G.UY)(() => this.api.LoadGroups({
                        peers: e
                    })).pipe((0, X.T)(e => null == e ? void 0 : e.groups))
                }
                loadFullGroups(e) {
                    return (0, G.UY)(() => this.api.LoadFullGroups({
                        groups: e
                    }))
                }
                loadGroupAvatars(e) {
                    return (0, G.UY)(() => this.api.LoadGroupAvatars({
                        peer: e
                    }))
                }
                getFullGroup(e) {
                    return (0, G.UY)(() => this.api.GetFullGroup({
                        peer: e
                    }))
                }
                loadMembers(e, t, i, s) {
                    return (0, G.UY)(() => this.api.LoadMembers({
                        group: e,
                        limit: t,
                        next: i,
                        condition: s
                    }))
                }
                setDefaultPermissions(e, t) {
                    return (0, G.UY)(() => this.api.SetGroupDefaultPermissions({
                        group: (0, ed.t)(e),
                        permissions: t
                    }))
                }
                setMemberPermissions(e, t, i) {
                    return (0, G.UY)(() => this.api.SetMemberPermissions({
                        group: (0, ed.t)(e),
                        user: (0, eu.j)(t),
                        permissions: i
                    }))
                }
                getMemberPermissions(e, t) {
                    return (0, G.UY)(() => this.api.GetMemberPermissions({
                        group: (0, ed.t)(e),
                        user: (0, eu.j)(t)
                    }))
                }
                fetchGroupAdmins(e) {
                    return (0, G.UY)(() => this.api.FetchGroupAdmins({
                        groupOutPeer: e
                    }))
                }
                setGroupReactions(e, t) {
                    return (0, G.UY)(() => this.api.SetAvailableReactions({
                        group: e,
                        codes: t
                    }))
                }
                setDiscussionGroup(e, t) {
                    return (0, G.UY)(() => this.api.SetDiscussionGroup({
                        rid: e,
                        channel: (0, ed.t)(t)
                    }))
                }
                removeDiscussionGroup(e, t) {
                    return (0, G.UY)(() => this.api.RemoveDiscussionGroup({
                        rid: e,
                        channel: (0, ed.t)(t)
                    }))
                }
                addDiscussionGroupAdmin(e, t) {
                    return (0, G.UY)(() => this.api.AddDiscussionGroupAdmin({
                        channel: (0, ed.t)(e),
                        discussionGroup: (0, ed.t)(t)
                    }))
                }
                getBannedUsers(e) {
                    return (0, G.UY)(() => this.api.GetBannedUsers({
                        group: e
                    }))
                }
                unBanUser(e, t, i) {
                    return (0, G.UY)(() => this.api.UnBanUser({
                        groupPeer: e,
                        user: t,
                        optimizations: i
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "leaveGroup", e => (0, G.UY)(() => this.api.LeaveGroup({
                        groupPeer: (0, eo.uY)(e),
                        rid: (0, ec.$C)(),
                        makeOrphan: void 0,
                        optimizations: []
                    }))), (0, D._)(this, "getGroupUrl", e => (0, G.UY)(() => this.api.GetGroupInviteURL({
                        groupPeer: (0, ed.t)(e)
                    }))), (0, D._)(this, "revokeGroupUrl", e => (0, G.UY)(() => this.api.RevokeInviteURL({
                        groupPeer: (0, ed.t)(e)
                    }))), (0, D._)(this, "addMember", (e, t, i) => (0, G.UY)(() => this.api.InviteUser({
                        groupPeer: (0, ed.t)(e),
                        rid: i,
                        messageCount: 300,
                        user: (0, eu.j)(t),
                        optimizations: []
                    }))), (0, D._)(this, "addMembers", (e, t, i) => (0, G.UY)(() => this.api.InviteUsers({
                        groupPeer: (0, ed.t)(e),
                        rid: i,
                        users: (0, eu.g)(t)
                    }))), (0, D._)(this, "editGroupTitle", (e, t) => (0, G.UY)(() => this.api.EditGroupTitle({
                        groupPeer: (0, ed.t)(e),
                        rid: (0, ec.$C)(),
                        title: t,
                        optimizations: []
                    }))), (0, D._)(this, "editGroupAbout", (e, t) => (0, G.UY)(() => this.api.EditGroupAbout({
                        groupPeer: (0, ed.t)(e),
                        about: t,
                        rid: (0, ec.$C)(),
                        optimizations: []
                    }))), (0, D._)(this, "editChannelNick", (e, t) => (0, G.UY)(() => this.api.EditChannelNick({
                        groupPeer: (0, ed.t)(e),
                        nick: t,
                        randomId: (0, ec.$C)()
                    }))), (0, D._)(this, "kickUser", (e, t) => (0, G.UY)(() => this.api.KickUser({
                        groupPeer: (0, ed.t)(e),
                        user: (0, eu.j)(t),
                        rid: (0, ec.$C)(),
                        optimizations: []
                    }))), (0, D._)(this, "getGroupPreview", e => (0, G.UY)(() => this.api.GetGroupPreview({
                        token: e
                    }))), (0, D._)(this, "makeUserAdmin", (e, t, i) => (0, G.UY)(() => this.api.MakeUserAdmin({
                        groupPeer: (0, ed.t)(e),
                        userPeer: (0, eu.j)(t),
                        adminTitle: i ?? void 0
                    }))), (0, D._)(this, "transferOwnership", (e, t) => (0, G.UY)(() => this.api.TransferOwnership({
                        groupPeer: (0, ed.t)(e),
                        newOwner: t
                    }))), (0, D._)(this, "removeUserAdmin", (e, t) => (0, G.UY)(() => this.api.RemoveUserAdmin({
                        groupPeer: (0, ed.t)(e),
                        userPeer: (0, eu.j)(t)
                    }))), (0, D._)(this, "setGroupRestriction", (e, t, i) => (0, G.UY)(() => this.api.SetRestriction({
                        groupOutPeer: (0, ed.t)(e),
                        restriction: t,
                        nick: i
                    }))), (0, D._)(this, "createGroup", (e, t, i, s, r, n) => (0, G.UY)(() => this.api.CreateGroup({
                        rid: e,
                        title: t,
                        users: (0, eu.g)(i),
                        groupType: s,
                        restriction: r,
                        nick: n,
                        optimizations: []
                    }))), (0, D._)(this, "editGroupAvatar", (e, t) => (0, G.UY)(() => this.api.EditGroupAvatar({
                        fileLocation: t,
                        groupPeer: (0, ed.t)(e),
                        rid: (0, ec.$C)(),
                        optimizations: []
                    }))), (0, D._)(this, "removeGroupAvatar", (e, t, i) => (0, G.UY)(() => this.api.RemoveGroupAvatar({
                        groupPeer: (0, ed.t)(e),
                        avaterId: i.id,
                        rid: t,
                        optimizations: []
                    }))), (0, D._)(this, "joinGroup", e => (0, G.UY)(() => this.api.JoinGroup({
                        token: e,
                        optimizations: []
                    }))), (0, D._)(this, "joinPublicGroup", e => (0, G.UY)(() => this.api.JoinPublicGroup({
                        peer: e,
                        optimizations: []
                    }))), (0, D._)(this, "addPinMessage", (e, t, i) => (0, G.UY)(() => this.api.PinMessage({
                        groupPeer: e,
                        date: i,
                        msgRid: t,
                        senderUserId: 0
                    }))), (0, D._)(this, "removePin", e => (0, G.UY)(() => this.api.RemovePin({
                        groupPeer: e
                    }))), (0, D._)(this, "getPinMessages", (e, t, i) => (0, G.UY)(() => this.api.GetPins({
                        groupPeer: e,
                        page: t,
                        limit: i
                    }))), (0, D._)(this, "removeSinglePin", (e, t, i) => (0, G.UY)(() => this.api.RemoveSinglePin({
                        groupPeer: e,
                        msgRid: t,
                        msgDate: i
                    }))), (0, D._)(this, "getGroupMembersCount", e => (0, G.UY)(() => this.api.GetGroupMembersCount({
                        group: e
                    }))), (0, D._)(this, "getMyGroups", e => (0, G.UY)(() => this.api.GetMyGroups({
                        isOwner: e.isOwner,
                        mode: e.groupType,
                        filters: [{
                            filterOwner: {
                                isOwner: e.isOwner
                            },
                            filterAdmin: {
                                isAdmin: e.isAdmin
                            }
                        }]
                    }))), (0, D._)(this, "setMemberCustomTitle", (e, t, i) => (0, G.UY)(() => this.api.SetMemberCustomTitle({
                        groupId: e,
                        memberId: t,
                        title: i
                    }))), (0, D._)(this, "getMutualGroups", e => (0, G.UY)(() => this.api.GetMutualGroups({
                        peer: e
                    }))), this.api = e
                }
            }
            var ev = i(41296),
                em = i(87303),
                ek = i(45663),
                ey = i(97244),
                eb = i(7384),
                eT = i(1962),
                eM = i.n(eT),
                eS = i(59001),
                ew = i(8831);
            let eP = {
                seeMessage: !0,
                deleteMessage: !1,
                kickUser: !1,
                pinMessage: !1,
                inviteUser: !1,
                addAdmin: !1,
                changeInfo: !1,
                sendMessage: !1,
                seeMembers: !1,
                editMessage: !1,
                replyToStory: !1,
                sendGifStickers: !1,
                sendMedia: !1,
                forwardMessageFrom: !1,
                sendForwardedMessage: !1,
                sendGiftPacket: !1,
                sendLinkMessage: !1,
                startCall: !1,
                addStory: !1,
                manageCall: !1
            };
            class eE {
                process(e) {
                    let t = [];
                    for (let r of e) {
                        var i, s;
                        if (r.groupUserLeaveObsolete || r.groupUserKickObsolete || r.groupInviteObsolete || r.groupUserInvitedObsolete || r.groupAvatarChangedObsolete || r.groupTitleChangedObsolete || r.groupAboutChangedObsolete || r.groupMembersCountChanged || r.groupMemberAdminChanged || r.groupRestrictionChanged || r.groupMessagePinned || r.groupPinRemoved || r.groupDefaultPermissionsChanged || r.groupMemberPermissionsChanged || r.groupOwnerChanged || r.groupNicknameChanged || r.hidePrivacyBar) {
                            if (this.logger.warn(">>> groups update: ", (0, eS.xs)(r)), r.groupUserKickObsolete) {
                                let e = this.updateGroupsOnUserKickedOrLeaved(r.groupUserKickObsolete).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupUserLeaveObsolete) {
                                let e = this.updateGroupsOnUserKickedOrLeaved(r.groupUserLeaveObsolete).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupInviteObsolete) {
                                let e = this.updateGroupsOnInvite(r.groupInviteObsolete).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupUserInvitedObsolete) {
                                let e = this.updateGroupsOnUserInvite(r.groupUserInvitedObsolete).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupMembersCountChanged) {
                                let e = this.updateGroupsMemberCount(r.groupMembersCountChanged).pipe((0, ee.M)(() => {
                                    this.groupUpdates$.next([r, void 0])
                                }), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupTitleChangedObsolete) {
                                let e = this.updateGroupTitleChanged(r.groupTitleChangedObsolete).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupAboutChangedObsolete) {
                                let e = this.updateGroupAboutChanged(r.groupAboutChangedObsolete).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupMemberAdminChanged) {
                                let e = this.updateGroupMemberAdminChanged(r.groupMemberAdminChanged).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupRestrictionChanged) {
                                let e = this.updateGroupRestrictionChanged(r.groupRestrictionChanged).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupAvatarChangedObsolete) {
                                let e = this.updateGroupAvatarChangedObsolete(r.groupAvatarChangedObsolete).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupMessagePinned) {
                                let e = this.updateGroupPinMessage(r.groupMessagePinned.groupId, r.groupMessagePinned.message).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupPinRemoved) {
                                let e = this.updateGroupPinMessage(r.groupPinRemoved.groupId, void 0).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupDefaultPermissionsChanged) {
                                let e = this.handleGroupPermissionsChanged(null == (i = r.groupDefaultPermissionsChanged.group) ? void 0 : i.groupId, r.groupDefaultPermissionsChanged.permissions, !0).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupMemberPermissionsChanged) {
                                let e = this.handleGroupPermissionsChanged(r.groupMemberPermissionsChanged.groupId, r.groupMemberPermissionsChanged.permissions, !1, r.groupMemberPermissionsChanged.uid).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupOwnerChanged) {
                                let e = this.groupOwnerChanged(r.groupOwnerChanged).pipe((0, ee.M)(e => this.groupUpdates$.next([r, e])), (0, ey.u)(void 0));
                                t.push(e)
                            } else if (r.groupNicknameChanged) t.push(this.handleGroupNicknameChangedUpdate(r.groupNicknameChanged).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0)));
                            else if (r.hidePrivacyBar) {
                                let e = null == (s = r.hidePrivacyBar.exPeer) ? void 0 : s.type;
                                e && [er.m4.EXPEERTYPE_CHANNEL, er.m4.EXPEERTYPE_GROUP].includes(e) && t.push(this.handleGroupHidePrivacyBarUpdate(r.hidePrivacyBar).pipe((0, ee.M)(() => this.groupUpdates$.next([r, void 0])), (0, ey.u)(void 0)))
                            }
                        }
                    }
                    if (0 !== t.length) return (0, ev.x)(...t).pipe((0, ee.M)(() => {
                        this.logger.warn(">>> after groups update")
                    }), (0, ey.u)(void 0))
                }
                handleGroupNicknameChangedUpdate(e) {
                    return this.ctx.groups.findGroup(e.groupId).pipe((0, J.Z)(t => t && e.nick && t.nick !== e.nick ? this.ctx.groups.putGroup({
                        ...t,
                        nick: e.nick
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))
                }
                handleGroupPermissionsChanged(e, t, i, s) {
                    return this.ctx.groups.findGroup(e).pipe((0, z.n)(r => {
                        if (!r) return (0, j.of)(void 0);
                        {
                            var n;
                            let a = {
                                    ...r
                                },
                                o = s && s === (null == (n = this.ctx.auth.user) ? void 0 : n.id);
                            if (i) a.defaultPermissions = t, eM()(r.defaultPermissions, r.permissions) && (a.permissions = t);
                            else {
                                if (!o) return (0, j.of)(void 0);
                                a.permissions = t
                            }
                            return this.ctx.groups.putGroup(a).pipe((0, X.T)(() => i ? void 0 : {
                                groupId: e,
                                uid: s,
                                member: {
                                    permissions: t
                                },
                                type: eb.t.UpdateMember
                            }))
                        }
                    }))
                }
                updateGroupPinMessage(e, t) {
                    return this.ctx.groups.findFullGroup(e).pipe((0, z.n)(e => e ? this.ctx.groups.putFullGroup({
                        ...e,
                        pin: t
                    }) : (0, j.of)(void 0)), (0, ey.u)(void 0))
                }
                isMember(e, t) {
                    var i;
                    return t === (null == (i = this.ctx.auth.user) ? void 0 : i.id) || e.members.some(e => e.uid === t)
                }
                findBoth(e) {
                    return (0, em.p)({
                        group: this.ctx.groups.findGroup(e),
                        full: this.ctx.groups.findFullGroup(e)
                    })
                }
                handleGroupHidePrivacyBarUpdate(e) {
                    return e.exPeer ? this.ctx.groups.findFullGroup(e.exPeer.id).pipe((0, J.Z)(e => e ? this.ctx.groups.putFullGroup({
                        ...e,
                        privacyBarMode: ew.je.PRIVACYBARMODE_NONE
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0))) : (0, j.of)(void 0)
                }
                constructor(e) {
                    (0, D._)(this, "ctx", void 0), (0, D._)(this, "name", "GroupsUpdatesHandler"), (0, D._)(this, "logger", _.U.getLogger(eE.name)), (0, D._)(this, "groupUpdates$", new ek.B), (0, D._)(this, "bindToGroupsUpdates", () => this.groupUpdates$.asObservable()), (0, D._)(this, "updateGroupAboutChanged", e => this.ctx.groups.findFullGroup(e.groupId).pipe((0, J.Z)(t => t && t.about !== e.about ? this.ctx.groups.putFullGroup({
                        ...t,
                        about: e.about
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))), (0, D._)(this, "updateGroupTitleChanged", e => this.ctx.groups.findGroup(e.groupId).pipe((0, J.Z)(t => t && t.title !== e.title ? this.ctx.groups.putGroup({
                        ...t,
                        title: e.title
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))), (0, D._)(this, "updateGroupsMemberCount", e => this.ctx.groups.findGroup(e.groupId).pipe((0, J.Z)(t => t && t.membersCount !== e.membersCount ? this.ctx.groups.putGroup({
                        ...t,
                        membersCount: e.membersCount
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))), (0, D._)(this, "updateGroupsOnUserInvite", e => this.findBoth(e.groupId).pipe((0, z.n)(t => {
                        let i, {
                            group: s,
                            full: r
                        } = t;
                        if (!s && !r) return (0, j.of)(void 0);
                        let n = [],
                            a = !1;
                        if (r) {
                            a = this.isMember(r, e.uid);
                            let t = {
                                ...r
                            };
                            i = {
                                date: e.date,
                                inviterUid: e.inviterUid,
                                uid: e.uid,
                                isAdmin: e.uid === r.ownerUid,
                                permissions: void 0,
                                promotedAt: void 0,
                                promoterUserId: void 0,
                                title: void 0
                            }, a || (t.members.push(i), n.push(this.ctx.groups.putFullGroup(t)))
                        }
                        if (s) {
                            var o;
                            let t = {
                                ...s
                            };
                            (null == (o = this.ctx.auth.user) ? void 0 : o.id) !== e.uid || a || (t.isMember = !0, t.canSendMessage = !0, t.permissions = s.groupType === es.MH.GROUPTYPE_GROUP ? s.defaultPermissions : eP, n.push(this.ctx.groups.putGroup(t)))
                        }
                        return 0 === n.length ? (0, j.of)(void 0) : (0, em.p)(n).pipe((0, X.T)(() => i ? {
                            groupId: e.groupId,
                            member: i,
                            type: eb.t.AddMember
                        } : void 0))
                    }))), (0, D._)(this, "updateGroupsOnInvite", e => this.ctx.groups.loadGroup(e.groupId, !0).pipe((0, $.W)(e => (this.logger.error("updateGroupsOnInvite error = ", e), (0, j.of)(void 0))), (0, X.T)(() => void 0))), (0, D._)(this, "updateGroupsOnUserKickedOrLeaved", e => (0, em.p)([this.ctx.groups.findGroup(e.groupId), this.ctx.groups.findFullGroup(e.groupId)]).pipe((0, z.n)(t => {
                        var i;
                        let [s, r] = t;
                        if (!s && !r) return (0, j.of)(void 0);
                        let n = e.uid === (null == (i = this.ctx.auth.user) ? void 0 : i.id),
                            a = [],
                            o = null != e.kickerUid || (null == s ? void 0 : s.groupType) !== es.MH.GROUPTYPE_CHANNEL || (null == r ? void 0 : r.restriction) === es.Rk.RESTRICTION_PRIVATE;
                        if (n && o) a.push(this.ctx.groups.deleteGroup(e.groupId));
                        else if (r) {
                            let t = {
                                ...r
                            };
                            t.members = r.members.filter(t => t.uid !== e.uid), a.push(this.ctx.groups.putFullGroup(t))
                        }
                        return 0 === a.length ? (0, j.of)(void 0) : (0, em.p)(a).pipe((0, X.T)(() => ({
                            type: eb.t.UserKickedOrLeft,
                            uid: e.uid,
                            gid: e.groupId,
                            isMe: n
                        })))
                    }))), (0, D._)(this, "updateGroupMemberAdminChanged", e => this.findBoth(e.groupId).pipe((0, z.n)(t => {
                        var i, s;
                        let {
                            group: r,
                            full: n
                        } = t;
                        if (!r && !n) return (0, j.of)(void 0);
                        let a = [];
                        if (n)
                            if ((null == (s = this.ctx.auth.user) ? void 0 : s.id) === e.userId) a.push(this.ctx.groups.loadFullGroup(e.groupId, !0).pipe((0, $.W)(e => (this.logger.error("updateGroupMemberAdminChange loadFullGroup", e), (0, j.of)(void 0)))));
                            else {
                                let t = {
                                    ...n
                                };
                                t.members = n.members.map(t => (t.uid === e.userId && (t.isAdmin = e.isAdmin), t)), a.push(this.ctx.groups.putFullGroup(t))
                            } return (r && (null == (i = this.ctx.auth.user) ? void 0 : i.id) === e.userId && a.push(this.ctx.groups.loadGroup(e.groupId).pipe((0, $.W)(e => (this.logger.error("updateGroupMemberAdmin error = ", e), (0, j.of)(void 0))))), 0 === a.length) ? (0, j.of)(void 0) : (0, em.p)(a).pipe((0, X.T)(() => ({
                            groupId: e.groupId,
                            uid: e.userId,
                            member: {
                                isAdmin: e.isAdmin
                            },
                            type: eb.t.UpdateMember
                        })))
                    }))), (0, D._)(this, "updateGroupRestrictionChanged", e => this.ctx.groups.findFullGroup(e.groupId).pipe((0, J.Z)(t => t ? this.ctx.groups.putFullGroup({
                        ...t,
                        restriction: e.restriction
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))), (0, D._)(this, "updateGroupAvatarChangedObsolete", e => this.ctx.groups.findGroup(e.groupId).pipe((0, J.Z)(t => t ? this.ctx.groups.putGroup({
                        ...t,
                        avatar: e.avatar
                    }).pipe((0, ey.u)(void 0)) : (0, j.of)(void 0)))), (0, D._)(this, "groupOwnerChanged", e => this.findBoth(e.groupId).pipe((0, J.Z)(t => {
                        var i;
                        let {
                            group: s,
                            full: r
                        } = t, n = [], a = e.userId === (null == (i = this.ctx.auth.user) ? void 0 : i.id), o = {
                            seeMessage: !0,
                            deleteMessage: !0,
                            kickUser: !0,
                            pinMessage: !0,
                            inviteUser: !0,
                            addAdmin: !0,
                            changeInfo: !0,
                            sendMessage: !0,
                            seeMembers: !0,
                            editMessage: !0,
                            sendMedia: !0,
                            sendGifStickers: !0,
                            replyToStory: !0,
                            forwardMessageFrom: !0,
                            sendGiftPacket: !0,
                            startCall: !0,
                            sendLinkMessage: !0,
                            sendForwardedMessage: !0,
                            addStory: !0,
                            manageCall: !0
                        };
                        if (s) {
                            let t = {
                                ...s,
                                ownerUid: e.userId
                            };
                            a && (t.permissions = o), n.push(this.ctx.groups.putGroup(t))
                        }
                        if (r) {
                            let t = {
                                ...r
                            };
                            t.members = r.members.map(t => (t.uid === e.userId && (t.isAdmin = !0), t)), n.push(this.ctx.groups.putFullGroup({
                                ...t,
                                ownerUid: e.userId
                            }))
                        }
                        return 0 == n.length ? (0, j.of)(void 0) : (0, em.p)(n).pipe((0, X.T)(() => ({
                            groupId: e.groupId,
                            uid: e.userId,
                            member: {
                                permissions: o,
                                isAdmin: !0
                            },
                            type: eb.t.UpdateMember
                        })))
                    }))), this.ctx = e
                }
            }
            var eI = i(78893),
                eR = i(76432);
            class eD {
                loadFullGroup(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return "number" == typeof e ? this.loadFullGroups([(0, ed.t)(e)], t).pipe((0, X.T)(e => e[0])) : this.loadFullGroups([e], t).pipe((0, z.n)(e => 1 === e.length ? (0, j.of)(e[0]) : (0, eI.$)(() => "Full Group Not Found")))
                }
                clearStorage() {
                    return (0, em.p)([this.groups.clear(), this.fullGroups.clear()]).pipe((0, ee.M)(() => this.logger.warn("storage cleared")))
                }
                loadGroup(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.getFullGroup(e, t)
                }
                loadGroupLegacy(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.loadGroups(["number" == typeof e ? (0, ed.t)(e) : e], t).pipe((0, X.T)(e => e[0]))
                }
                nextGroups(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    (0, G.pF)(e, this.loadedGroups, this.groups$, t)
                }
                findGroups(e) {
                    return this.groups.getItems(e.map(e => e.groupId)).pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })))
                }
                putGroups(e) {
                    return e.length > 0 ? (0, V.T)(() => 1 === e.length, this.putGroup(e[0]), this.groups.putItems(e.map(e => [e.id, e])).pipe((0, ee.M)(() => this.nextGroups(e)))).pipe((0, ey.u)(e)) : (0, j.of)([])
                }
                putGroup(e) {
                    return this.groups.put(e).pipe((0, ee.M)(() => this.nextGroups([e])), (0, ey.u)(e))
                }
                nextFulls(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    (0, G.pF)(e, this.loadedFulls, this.fullGroups$, t)
                }
                getFullGroups(e) {
                    return this.fullGroups.getItems(e.map(e => e.groupId)).pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })))
                }
                addGroupInviteEvent(e, t, i) {
                    return (0, ee.M)(() => {
                        var s;
                        this.ctx.events.addEvent({
                            routeId: 0,
                            sequence: e.seq,
                            subscriptionId: 0,
                            timestamp: t,
                            update: {
                                groupInviteObsolete: {
                                    groupId: e.group.id,
                                    seq: e.seq,
                                    date: t,
                                    inviteUid: null == (s = this.ctx.auth.user) ? void 0 : s.id,
                                    rid: i,
                                    isJoined: !1
                                }
                            },
                            mtupdate: void 0,
                            updates: void 0,
                            weakEvent: void 0
                        })
                    })
                }
                addGroupOwnerChangedEvent(e, t, i, s) {
                    this.ctx.events.addEvent({
                        routeId: i,
                        sequence: e.seq,
                        subscriptionId: 0,
                        timestamp: t,
                        update: {
                            groupOwnerChanged: {
                                groupId: i,
                                userId: s
                            }
                        },
                        mtupdate: void 0,
                        updates: void 0,
                        weakEvent: void 0
                    })
                }
                loadGroupAvatars(e) {
                    return this.loadFullGroup((0, ed.t)(e)).pipe((0, z.n)(t => this.api.loadGroupAvatars((0, ed.t)(e)).pipe((0, z.n)(e => {
                        var i;
                        return this.putFullGroup({
                            ...t,
                            avatars: null == (i = e.avatars) ? void 0 : i.avatars
                        })
                    }))), (0, eR.C)(q.w))
                }
                getFullGroupFromApi(e) {
                    return this.api.getFullGroup(e).pipe((0, z.n)(e => {
                        let t = e => {
                                let t = (0, eo._h)(e);
                                return this.putGroup(t)
                            },
                            i = e => {
                                let t = (0, eo.PJ)(e);
                                return this.putFullGroup(t)
                            };
                        return (0, em.p)([t(e), i(e)]).pipe((0, X.T)(e => {
                            let [t] = e;
                            return t
                        }))
                    }))
                }
                loadMembers(e, t, i, s) {
                    return this.api.loadMembers(e, t, i, s)
                }
                setGroupDefaultPermissions(e, t) {
                    return this.api.setDefaultPermissions(e, t)
                }
                setMemberPermissions(e, t, i) {
                    return this.api.setMemberPermissions(e, t, i)
                }
                getMemberPermissions(e, t) {
                    return this.api.getMemberPermissions(e, t)
                }
                fetchGroupAdmins(e) {
                    return this.api.fetchGroupAdmins(e)
                }
                setDiscussionGroup(e, t) {
                    return this.api.setDiscussionGroup(e, t).pipe((0, z.n)(e => {
                        let i = e.discussionGroup;
                        return i ? this.updateDiscussionGroup(t, !0, i.groupId).pipe((0, X.T)(() => i)) : (0, j.of)(void 0)
                    }))
                }
                removeDiscussionGroup(e, t) {
                    return this.api.removeDiscussionGroup(e, t).pipe((0, z.n)(() => this.updateDiscussionGroup(t, !1)))
                }
                updateDiscussionGroup(e, t, i) {
                    let s = (0, eo.l5)(e),
                        r = i ? (0, eo.l5)(i) : void 0;
                    return this.loadGroups([s, ...r ? [r] : []]).pipe((0, z.n)(e => {
                        if (0 == e.length) return (0, j.of)(void 0);
                        let s = e[0],
                            r = {
                                ...s,
                                linkedGroupPeerId: i ?? s.linkedGroupPeerId,
                                discussionGroupEnabled: t
                            };
                        return this.nextGroups([r]), (0, j.of)(void 0)
                    }))
                }
                addDiscussionGroupAdmin(e, t) {
                    return this.api.addDiscussionGroupAdmin(e, t)
                }
                getBannedUsers(e) {
                    return this.api.getBannedUsers(e).pipe((0, z.n)(e => {
                        let t = e.bannedUsers.map(e => {
                            let {
                                bannedUser: t,
                                bannerUser: i
                            } = e;
                            return [t, i]
                        }).flat().filter(e => void 0 !== e);
                        return this.ctx.users.loadUsers(t).pipe((0, ey.u)(e))
                    }))
                }
                unBanUser(e, t, i) {
                    return this.api.unBanUser(e, t, i)
                }
                constructor(e, t, i, s) {
                    var r = this;
                    (0, D._)(this, "api", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "groupsUpdatesHandler", void 0), (0, D._)(this, "logger", _.U.getLogger("GroupModule")), (0, D._)(this, "loadedGroups", new Set), (0, D._)(this, "groups$", new ek.B), (0, D._)(this, "loadedFulls", new Set), (0, D._)(this, "fullGroups$", new ek.B), (0, D._)(this, "maxInt32", 0x7fffffff), (0, D._)(this, "groups", void 0), (0, D._)(this, "fullGroups", void 0), (0, D._)(this, "validateGroupIds", e => e.filter(this.isGroupIdValid)), (0, D._)(this, "isGroupIdValid", e => {
                        let t = e.groupId < this.maxInt32;
                        return t || this.logger.error("GroupId is bigger than MaxInt32"), t
                    }), (0, D._)(this, "loadFullGroups", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.requiredFullGroupsToFetch(e, t).pipe((0, z.n)(t => t.length > 0 ? r.api.loadFullGroups(t).pipe((0, z.n)(e => {
                            let {
                                groups: t
                            } = e;
                            return r.putFullGroups(t)
                        }), (0, $.W)(e => (r.logger.error("loadFullGroups", e), q.w))).pipe((0, z.n)(() => r.getFullGroups(e))) : r.getFullGroups(e)))
                    }), (0, D._)(this, "_loadGroups", e => {
                        let t = e.map(e => (0, ed.t)(e));
                        return this.api.loadGroups(t).pipe((0, z.n)(e => this.putGroups(e)), (0, $.W)(e => (this.logger.error("loadGroup", e), (0, eI.$)(() => e))))
                    }), (0, D._)(this, "loadGroups", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.requiredGroupsToFetch(e, t).pipe((0, X.T)(r.validateGroupIds), (0, z.n)(t => (r.logger.info("loadGroups", "requiredGroups", t), (0, V.T)(() => t.length > 0, r._loadGroups(e.map(e => e.groupId)), (0, j.of)(void 0)))), (0, z.n)(() => r.findGroups(e)))
                    }), (0, D._)(this, "getGroupsAndInvalid", e => this.clearStorage().pipe((0, z.n)(() => this._loadGroups(e)))), (0, D._)(this, "leaveGroup", e => this.api.leaveGroup(e).pipe((0, z.n)(t => this.findGroup(e.id)), (0, ee.M)(t => this.logger.info("Response leaveGroup: ", e, t && (0, eS.KG)(t))), (0, z.n)(e => (0, V.T)(() => !!e, this.putGroup({
                        ...e,
                        isMember: void 0
                    }), (0, j.of)(void 0))))), (0, D._)(this, "bindToGroups", () => this.groups$), (0, D._)(this, "bindToFullGroups", () => this.fullGroups$), (0, D._)(this, "bindToGroupUpdates", () => this.groupsUpdatesHandler.bindToGroupsUpdates().pipe((0, W.p)(e => {
                        let [t, i] = e;
                        return void 0 == i
                    }), (0, X.T)(e => {
                        let [t] = e;
                        return this.logger.warn(">>> groups update: ", (0, eS.xs)(t)), t
                    }))), (0, D._)(this, "bindToGroupsActions", () => this.groupsUpdatesHandler.bindToGroupsUpdates().pipe((0, W.p)(e => {
                        let [t, i] = e;
                        return !!i
                    }), (0, X.T)(e => {
                        let [t, i] = e;
                        return this.logger.warn(">>> groups action: ", null == i ? void 0 : i.type), i
                    }))), (0, D._)(this, "requiredGroupsToFetch", (e, t) => t ? (0, j.of)(e) : this.groups.getItems(e.map(e => e.groupId)).pipe((0, X.T)(t => (this.nextGroups(t.map(e => {
                        let [, t] = e;
                        return t
                    }), !1), e.filter(e => !t.find(t => {
                        let [i] = t;
                        return i === e.groupId
                    })))))), (0, D._)(this, "findGroup", e => this.db.getKeyValue("groups").get(e)), (0, D._)(this, "requiredFullGroupsToFetch", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.fullGroups.getItems(e.map(e => e.groupId)).pipe((0, X.T)(i => (r.nextFulls(i.map(e => {
                            let [, t] = e;
                            return t
                        }), !1), e.filter(e => t || !i.find(t => {
                            let [i, s] = t;
                            return i === e.groupId
                        })))))
                    }), (0, D._)(this, "getGroupPreview", e => this.api.getGroupPreview(e)), (0, D._)(this, "findFullGroup", e => this.fullGroups.get(e)), (0, D._)(this, "putFullGroups", e => e.length > 0 ? this.fullGroups.putItems(e.map(e => [e.id, e])).pipe((0, ee.M)(() => this.nextFulls(e)), (0, X.T)(() => e)) : (0, j.of)([])), (0, D._)(this, "putFullGroup", e => this.fullGroups.put(e).pipe((0, ee.M)(() => this.nextFulls([e])), (0, X.T)(() => e))), (0, D._)(this, "getGroupUrl", e => this.api.getGroupUrl(e).pipe((0, X.T)(e => e.url))), (0, D._)(this, "getMyGroups", e => {
                        let {
                            isOwner: t,
                            isAdmin: i,
                            groupType: s
                        } = e;
                        return this.api.getMyGroups({
                            isOwner: t,
                            isAdmin: i,
                            groupType: s
                        })
                    }), (0, D._)(this, "revokeGroupUrl", e => this.api.revokeGroupUrl(e).pipe((0, X.T)(e => e.url))), (0, D._)(this, "deleteGroup", e => {
                        let t = (0, el.Yt)(e, er.RK.PEERTYPE_GROUP);
                        return (0, em.p)([this.ctx.events.removeGroupState(e), this.groups.delete(e), this.fullGroups.delete(e), this.ctx.dialogs.deleteChatFromLocal(t)]).pipe((0, ey.u)(void 0))
                    }), (0, D._)(this, "addMembers", (e, t, i) => this.api.addMembers(e, t, i)), (0, D._)(this, "editGroupTitle", (e, t) => this.api.editGroupTitle(e, t)), (0, D._)(this, "editGroupAbout", (e, t) => this.api.editGroupAbout(e, t)), (0, D._)(this, "editChannelNick", (e, t) => this.api.editChannelNick(e, t)), (0, D._)(this, "makeUserAdmin", (e, t, i) => this.api.makeUserAdmin(e, t, i ?? "")), (0, D._)(this, "makeUserOwner", (e, t) => this.api.transferOwnership(e, t).pipe((0, ee.M)(i => {
                        let s = Date.now();
                        this.addGroupOwnerChangedEvent(i, s, e, t)
                    }))), (0, D._)(this, "removeUserAdmin", (e, t) => this.api.removeUserAdmin(e, t).pipe((0, z.n)(() => this.putMember(e, t, {
                        title: ""
                    })))), (0, D._)(this, "kickUser", (e, t) => this.api.kickUser(e, t)), (0, D._)(this, "setGroupRestriction", (e, t, i) => this.api.setGroupRestriction(e, t, i).pipe((0, z.n)(() => this.findGroup(e).pipe((0, J.Z)(e => e ? (e.nick = i, e.restriction = t, this.putGroup(e)) : (0, j.of)(void 0)), (0, ey.u)(void 0))))), (0, D._)(this, "createGroup", (e, t, i, s, r) => {
                        let n = (0, ec.$C)();
                        return this.api.createGroup(n, e, t, i, s, r).pipe((0, z.n)(e => {
                            let t = Date.now();
                            return e.group ? (_.U.debug("create group success", "group permissions", e.group.permissions, e.group.defaultPermissions), this.putGroup(e.group).pipe(this.addGroupInviteEvent(e, t, n), (0, X.T)(() => e))) : (0, j.of)(e)
                        }))
                    }), (0, D._)(this, "editGroupAvatar", (e, t) => this.api.editGroupAvatar(e, t).pipe((0, z.n)(t => this.findFullGroup(e).pipe((0, z.n)(e => e ? this.putFullGroup({
                        ...e,
                        avatars: [t.avatar, ...(null == e ? void 0 : e.avatars) ?? []]
                    }) : q.w))))), (0, D._)(this, "removeGroupAvatar", (e, t, i) => this.api.removeGroupAvatar(e, t, i).pipe((0, z.n)(() => this.findFullGroup(e).pipe((0, z.n)(e => {
                        var t;
                        return e ? this.putFullGroup({
                            ...e,
                            avatars: null == e || null == (t = e.avatars) ? void 0 : t.filter(e => e.id !== i.id)
                        }) : q.w
                    }))))), (0, D._)(this, "joinGroup", e => this.api.joinGroup(e).pipe((0, J.Z)(e => (0, V.T)(() => !!e.group, this.putGroup(e.group), (0, j.of)({})).pipe((0, ey.u)(e))), (0, J.Z)(e => this.ctx.users.loadUsers(e.userPeers).pipe((0, W.p)(t => !!e.group), (0, ey.u)((0, eo.Qq)((0, ed.t)(e.group.id))))))), (0, D._)(this, "joinPublicGroup", e => this.api.joinPublicGroup(e).pipe((0, J.Z)(e => (0, em.p)([(0, V.T)(() => !!e.group, this.putGroup(e.group), q.w), (0, V.T)(() => {
                        var t;
                        return !!(null == (t = e.userPeers) ? void 0 : t.length)
                    }, this.ctx.users.loadUsers(e.userPeers), q.w)])))), (0, D._)(this, "addPinMessage", (e, t, i) => this.findGroup(e.id).pipe((0, z.n)(s => (0, V.T)(() => !!s, this.api.addPinMessage((0, ed.t)(e.id, s.accessHash), t, i), q.w)), (0, ey.u)(void 0))), (0, D._)(this, "getPinMessage", function(e, t) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                        return r.findGroup(e.id).pipe((0, z.n)(s => (0, V.T)(() => !!s, r.api.getPinMessages((0, ed.t)(e.id, null == s ? void 0 : s.accessHash), t, i).pipe((0, X.T)(e => {
                            let {
                                pins: t,
                                count: i
                            } = e;
                            return {
                                pins: t.reverse(),
                                count: i
                            }
                        })), (0, Y.H)([]))), (0, ee.M)(e => {
                            let {
                                pins: t
                            } = e;
                            return t.map(e => r.logger.info("Response PinMessages: ", (0, eS.ds)(e)))
                        }), (0, X.T)(e => {
                            var t;
                            return {
                                ...e,
                                pins: r.ctx.messaging.mapApiMessageContainersToMessageContainers(e.pins, null == (t = r.ctx.auth.user) ? void 0 : t.id)
                            }
                        }))
                    }), (0, D._)(this, "setAvailableReactions", (e, t) => this.findGroup(e.id).pipe((0, J.Z)(i => (i.availableReactions = t, (0, ev.x)(this.api.setGroupReactions((0, ed.t)(e.id, i.accessHash), t), this.putGroup(i)))), (0, ey.u)(void 0))), (0, D._)(this, "removeSinglePin", (e, t, i) => this.findGroup(e.id).pipe((0, z.n)(s => (0, V.T)(() => !!s, this.api.removeSinglePin((0, ed.t)(e.id, s.accessHash), t, i), q.w)), (0, ey.u)(void 0))), (0, D._)(this, "removePin", e => this.findGroup(e.id).pipe((0, z.n)(t => (0, V.T)(() => !!t, this.api.removePin((0, ed.t)(e.id, t.accessHash)), q.w)), (0, ey.u)(void 0))), (0, D._)(this, "getGroupMembersCount", e => this.findGroup(e.id).pipe((0, z.n)(t => (0, V.T)(() => !!t, this.api.getGroupMembersCount((0, ed.t)(e.id, t.accessHash)), q.w).pipe((0, z.n)(e => this.putGroup({
                        ...t,
                        membersCount: e.membersCount
                    })))), (0, ey.u)(void 0))), (0, D._)(this, "getFullGroup", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = "number" == typeof e ? (0, ed.t)(e) : e;
                        return r.groups.get(i.groupId).pipe((0, z.n)(e => e ? (t && (0, U.s)(r.getFullGroupFromApi(i)).catch(e => {
                            r.logger.error("getFullGroups", e)
                        }), (0, j.of)(e).pipe((0, ee.M)(e => {
                            r.nextGroups([e])
                        }))) : r.getFullGroupFromApi(i)))
                    }), (0, D._)(this, "clear", () => {
                        this.loadedGroups.clear(), this.loadedFulls.clear()
                    }), (0, D._)(this, "putMember", (e, t, i) => this.findFullGroup(e).pipe((0, z.n)(e => {
                        if (e) {
                            let s = e.members.findIndex(e => e.uid === t);
                            if (s > -1) return e.members[s] = {
                                ...e.members[s],
                                ...i
                            }, this.putFullGroup(e)
                        }
                        return (0, j.of)(void 0)
                    }), (0, ey.u)({}))), (0, D._)(this, "setMemberCustomTitle", (e, t, i) => void 0 === i ? (0, j.of)({}) : this.api.setMemberCustomTitle(e, t, i).pipe((0, z.n)(() => this.putMember(e, t, {
                        title: i
                    })))), (0, D._)(this, "getMutualGroups", e => this.api.getMutualGroups(e).pipe((0, z.n)(e => this.loadGroups(e.groups)))), this.api = e, this.db = t, this.ctx = i, this.groupsUpdatesHandler = s, this.groups = this.db.getKeyValue("groups"), this.fullGroups = this.db.getKeyValue("full_groups")
                }
            }
            class e_ {
                searchContact(e) {
                    return (0, G.UY)(() => this.usersApi.SearchContacts({
                        request: e,
                        optimizations: []
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "usersApi", void 0), this.usersApi = e
                }
            }
            var eU = i(80557),
                eA = i(55231),
                eC = i(78220),
                eO = i(76421);
            class eG {
                loadPeerDialogs(e) {
                    return (0, G.UY)(() => this.api.LoadPeerDialogs({
                        peers: e
                    }))
                }
                messageRead(e, t, i) {
                    return (0, G.UY)(() => this.api.MessageRead({
                        peer: e,
                        date: t,
                        exPeer: void 0
                    }), {
                        pendingOps: i
                    })
                }
                messageReceived(e, t) {
                    return (0, G.UY)(() => this.api.MessageReceived({
                        peer: e,
                        date: t
                    }))
                }
                deleteChat(e) {
                    return (0, G.UY)(() => this.api.DeleteChat({
                        peer: e
                    }))
                }
                clearChat(e) {
                    return (0, G.UY)(() => this.api.ClearChat({
                        peer: e
                    }))
                }
                markDialogsAsUnread(e) {
                    return (0, G.UY)(() => this.api.MarkDialogsAsUnread({
                        peers: e
                    }))
                }
                markDialogsAsRead(e) {
                    return (0, G.UY)(() => this.api.MarkDialogsAsRead({
                        peers: e
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "abacus", void 0), (0, D._)(this, "loadDialogs", (e, t, i, s) => (e === Number.MAX_SAFE_INTEGER && (e = -1), (0, G.UY)(() => this.api.LoadDialogs({
                        minDate: e,
                        dialogType: t,
                        limit: i,
                        optimizations: [],
                        excludePinnedDialogs: s ?? !1,
                        archiveFilter: eO.$yA.ARCHIVEFILTER_ALL
                    }).pipe((0, X.T)(e => e))))), (0, D._)(this, "readMention", (e, t) => (0, G.UY)(() => this.api.MentionRead({
                        peer: e,
                        messageId: t
                    }))), (0, D._)(this, "messageReactionsRead", (e, t) => (0, G.UY)(() => this.abacus.MessageReactionsRead({
                        peer: e,
                        messageId: t
                    }))), (0, D._)(this, "getGroupedDialogs", e => (0, G.UY)(() => this.api.LoadGroupedDialogs({
                        optimizations: e,
                        archiveFilter: eO.$yA.ARCHIVEFILTER_ALL
                    }), {
                        timeOut: 3e4
                    })), (0, D._)(this, "pinDialogs", (e, t) => (0, G.UY)(() => this.api.PinDialogs({
                        peers: e,
                        folderId: t
                    }))), (0, D._)(this, "unPinDialogs", (e, t) => (0, G.UY)(() => this.api.UnpinDialogs({
                        peers: e,
                        folderId: t
                    }))), (0, D._)(this, "loadPinnedDialogs", e => (0, G.UY)(() => this.api.LoadPinnedDialogs({
                        folderId: e
                    }))), (0, D._)(this, "createReservedFolder", e => (0, G.UY)(() => this.api.CreateReservedFolder({
                        folderId: e
                    }))), (0, D._)(this, "createFolder", (e, t) => (0, G.UY)(() => this.api.CreateFolder({
                        name: e,
                        peers: t
                    }))), (0, D._)(this, "loadFolders", e => (0, G.UY)(() => this.api.LoadFolders({
                        includeMutedUnreadPeers: e
                    }))), (0, D._)(this, "reorderFolders", e => (0, G.UY)(() => this.api.ReorderFolders({
                        folderIds: e
                    }))), (0, D._)(this, "deleteFolder", e => (0, G.UY)(() => this.api.DeleteFolder({
                        folderId: e
                    }))), (0, D._)(this, "loadFolderDialogs", (e, t, i) => (0, G.UY)(() => this.api.LoadFolderDialogs({
                        minDate: e,
                        limit: t,
                        folderId: i,
                        archiveFilter: eO.$yA.ARCHIVEFILTER_ALL
                    }))), (0, D._)(this, "editFolder", (e, t, i, s) => this.api.EditFolder({
                        folderId: e,
                        name: t,
                        addedPeers: i,
                        deletedPeers: s
                    })), this.api = e, this.abacus = t
                }
            }
            var ex = i(82080),
                eL = i(51162),
                eN = i(92023),
                eq = i(44821),
                eF = i(22121),
                eH = i(65155),
                eV = i(55812),
                eB = i(33499),
                ej = i(64908),
                eY = i(24423),
                eW = i(50004),
                ez = i(50851),
                e$ = i(10394),
                eK = i(7836),
                eJ = i(76526),
                eZ = i(90120),
                eX = i(52484),
                eQ = i(94823),
                e0 = i(51743),
                e1 = i(9348),
                e2 = i(39201);
            let e3 = "DialogsInfo_",
                e4 = "IsShortDialogsLoaded";
            class e5 {
                beginCacheLoad(e) {
                    let t = this.cacheLoading.value + 1;
                    this.logger.debug("cache-load: begin", {
                        tag: e,
                        next: t
                    }), this.cacheLoading.next(t)
                }
                endCacheLoad(e) {
                    let t = Math.max(0, this.cacheLoading.value - 1);
                    this.logger.debug("cache-load: end", {
                        tag: e,
                        next: t
                    }), this.cacheLoading.next(t)
                }
                waitForCacheLoadingEnd() {
                    return 0 === this.cacheLoading.value ? (0, j.of)(!0) : this.cacheLoading.pipe((0, W.p)(e => 0 === e), (0, eq.$)(), (0, ey.u)(!0))
                }
                getDialogMutex(e) {
                    return this.dialogMutexes.has(e) || this.dialogMutexes.set(e, new ez.eu), this.dialogMutexes.get(e)
                }
                aquireDialog(e) {
                    return (0, j.of)(this.getDialogMutex("number" == typeof e ? e : (0, eK.LP)(e)).acquire()).pipe((0, X.T)(() => void 0))
                }
                releaseDialog(e) {
                    this.getDialogMutex("number" == typeof e ? e : (0, eK.LP)(e)).release()
                }
                getDialogsMutexes(e) {
                    let t = new Map;
                    return "number" == typeof e[0] ? e.forEach(e => {
                        t.set(e, this.getDialogMutex(e))
                    }) : "peer" in e[0] ? e.forEach(e => {
                        let i = (0, eK.LP)(e.peer);
                        t.set(i, this.getDialogMutex(i))
                    }) : e.forEach(e => {
                        let i = (0, eK.LP)(e);
                        t.set(i, this.getDialogMutex(i))
                    }), t
                }
                aquireDialogs(e) {
                    if (0 === e.length) return (0, j.of)(void 0);
                    let t = this.getDialogsMutexes(e);
                    return (0, em.p)(Array.from(t.values()).map(e => e.acquire())).pipe((0, X.T)(() => void 0))
                }
                releaseDialogs(e) {
                    Array.from(this.getDialogsMutexes(e).values()).forEach(e => e.release())
                }
                updateDialogAtomic(e, t) {
                    let i = (0, eK.LP)(e),
                        s = this.getDialogMutex(i);
                    return this.logger.debug("update dialog atomic", {
                        peer: e
                    }), (0, eN.v)(async () => s.runExclusive(async () => {
                        let i, s = t(await (0, U.s)(this.findDialog(e)));
                        return (i = s instanceof Promise ? await s : s instanceof ex.c ? await (0, U.s)(s) : s) && await (0, U.s)(this.updateDialogAndShort(i)), i
                    }))
                }
                refreshEntities(e, t) {
                    (0, U.s)((0, em.p)([this.ctx.users.getUsersAndInvalid(e), this.ctx.groups.getGroupsAndInvalid(t)])).catch(e => {
                        this.logger.error("invalidate entites", e)
                    })
                }
                loadFreshDialogs() {
                    let e = er.m4.EXPEERTYPE_UNKNOWN,
                        t = Number.MAX_SAFE_INTEGER;
                    return this.removeAllDialogsInfo().pipe((0, z.n)(() => this.apiLoadDialogsFromRemote(e, t, this.LOAD_DIALOG_COUNT)), (0, z.n)(i => (this.logger.info("Acquiring dialogs lock for loadFreshDialogs", i.map(e => e.peer)), this.aquireDialogs(i).pipe((0, z.n)(() => {
                        let s = (0, eZ._r)(i);
                        return this.updateDialogsAndShorts(s).pipe((0, z.n)(i => this.calculateDialogsInfoLoadedFromRemote(i, e, t)))
                    }), (0, z.n)(e => {
                        let {
                            userIds: t,
                            groupIds: i
                        } = this.requiredPeers(e);
                        return (0, em.p)([this.ctx.users.loadUsers((0, eu.g)(t)), this.ctx.groups.loadGroups((0, eo.PN)(i))]).pipe((0, ee.M)(() => {
                            this.logger.debug("load fresh dialogs completed", (0, eS.CF)(e)), this.peerDialogsUpdate$.next((0, eJ.ig)(e)), this.refreshEntities(t, i)
                        }))
                    }), (0, eF.j)(() => {
                        this.logger.info("Releasing dialogs lock for loadFreshDialogs", i.map(e => e.peer)), this.releaseDialogs(i)
                    })))))
                }
                loadFreshPinnedDialogs() {
                    let e = er.m4.EXPEERTYPE_UNKNOWN;
                    return this.pinnedDialogsDb.clear().pipe((0, z.n)(() => this.loadPinnedDialogsFromRemote(e)), (0, ee.M)(t => {
                        this.logger.debug("invalidate: pinned dialogs loaded", (0, eS.CF)(t)), this.peerDialogsUpdate$.next((0, eJ.I4)(t, e, !0))
                    }))
                }
                loadFreshShortDialogs() {
                    return (0, U.s)(this.shortDialogsDb.clear().pipe((0, z.n)(() => this.ctx.configs.deleteParameter(e4).pipe((0, z.n)(() => this.loadShortDialogsFromRemote()), (0, ee.M)(e => {
                        this.logger.info("invalidate: short dialogs loaded"), this.peerDialogsUpdate$.next((0, eJ.qs)(e))
                    }))))).catch(e => {
                        this.logger.error(" load fresh shorts failed", e)
                    }), (0, j.of)(void 0)
                }
                invalidate() {
                    return this.isInvalidating.next(!0), this.logger.info("invalidate: start"), (0, em.p)([this.loadFreshDialogs(), this.loadFreshPinnedDialogs(), this.loadFreshShortDialogs()]).pipe((0, ee.M)(() => {
                        this.logger.info("invalidate: finished")
                    }), (0, $.W)(e => (this.logger.error("invalidate: error", e), (0, j.of)(void 0))), (0, eF.j)(() => {
                        this.isInvalidating.next(!1)
                    }))
                }
                invalidatePeers(e) {
                    return this.api.loadPeerDialogs(e.map(eK.F8)).pipe((0, X.T)(e => e.dialogs), this.prepareDialogs({
                        storeInStorage: !0,
                        isPinnedDialogs: !1,
                        force: !0
                    }), (0, ee.M)(e => {
                        this.logger.debug("invalidate peers", (0, eS.CF)(e)), this.peerDialogsUpdate$.next((0, eJ.X1)(e, !0))
                    }))
                }
                getDialogsInfo(e) {
                    return this.ctx.configs.getParameter(e3 + e)
                }
                removeAllDialogsInfo() {
                    let e = [er.m4.EXPEERTYPE_UNKNOWN, er.m4.EXPEERTYPE_PRIVATE, er.m4.EXPEERTYPE_GROUP, er.m4.EXPEERTYPE_CHANNEL, er.m4.EXPEERTYPE_BOT];
                    return this.db.clear().pipe((0, z.n)(() => this.ctx.configs.deleteParameters(e.map(e => e3 + e)).pipe((0, z.n)(() => this.ctx.folders.removeFoldersDialogInfo()))))
                }
                calculateDialogsInfoLoadedFromRemote(e, t, i, s) {
                    let r, n;
                    return e.length > 0 ? (this.logger.warn("Last Dialog", e[e.length - 1].peer, e[e.length - 1].date, e[e.length - 1].senderUid), r = e[e.length - 1].date) : r = s ? s.lastLoadedDate : i, n = t === eO.W4c.RESERVEDFOLDERID_UNREAD || (t === eO.W4c.RESERVEDFOLDERID_ARCHIVED ? e.length <= this.LOAD_DIALOG_COUNT : e.length <= 1), this.ctx.configs.setParameter(e3 + t, {
                        isLoaded: n,
                        lastLoadedDate: r
                    }).pipe((0, X.T)(() => e))
                }
                exPeersToApiOutPeers(e) {
                    return e.map(eQ.K2).map(eK.F8)
                }
                loadUnreadFolderDialogs() {
                    let e = 2 * this.LOAD_DIALOG_COUNT;
                    return this.ctx.folders.getFolderFromDB(eO.W4c.RESERVEDFOLDERID_UNREAD).pipe((0, z.n)(e => {
                        var t;
                        return (null == e || null == (t = e.unreadPeers) ? void 0 : t.length) ? (0, j.of)(e.unreadPeers) : (this.logger.warn("Unread folder not found or empty"), (0, j.of)([]))
                    }), (0, z.n)(e => this.db.getItems(e.map(e => (0, eK.LP)((0, eQ.K2)(e)))).pipe((0, X.T)(t => ({
                        allPeers: e,
                        items: t
                    })))), (0, z.n)(t => {
                        let {
                            allPeers: i,
                            items: s
                        } = t, r = s.filter(e => {
                            let [, t] = e;
                            return void 0 !== t
                        }).map(e => {
                            let [, t] = e;
                            return t
                        }), n = new Set(r.map(e => (0, eK.LP)(e.peer))), a = i.filter(e => !n.has((0, eK.LP)((0, eQ.K2)(e))));
                        if (this.logger.info(`Unread folder: total=${i.length}, in DB=${n.size}, to load=${a.length}`), 0 === a.length) return (0, j.of)(r);
                        let o = (0, j.of)(r),
                            d = [],
                            l = 0;
                        for (; l < a.length;) {
                            let t = a.slice(l, l + e),
                                i = this.api.loadPeerDialogs(this.exPeersToApiOutPeers(t)).pipe((0, X.T)(e => e.dialogs));
                            d.push(i), l += e
                        }
                        return (0, ev.x)(o, (0, em.p)(d).pipe((0, X.T)(e => e.flat())))
                    }))
                }
                apiLoadDialogsFromRemote(e, t, i) {
                    return e === eO.W4c.RESERVEDFOLDERID_UNREAD ? this.loadUnreadFolderDialogs() : this.api.loadFolderDialogs(t, i, e).pipe((0, X.T)(e => e.dialogs))
                }
                autoLoadMoreDialogs(e, t, i, s, r) {
                    return t > 100 || t === eO.W4c.RESERVEDFOLDERID_ARCHIVED || t === eO.W4c.RESERVEDFOLDERID_UNREAD ? (this.logger.info("[AutoLoad] Skipping", {
                        folderId: t,
                        reason: t > 100 ? "custom folder" : "archive"
                    }), (0, j.of)(e)) : (this.logger.info("[AutoLoad] START", {
                        folderId: t,
                        date: i,
                        totalDialogs: e.length,
                        limit: r,
                        infoIsLoaded: null == s ? void 0 : s.isLoaded
                    }), (0, em.p)({
                        archiveFolder: this.ctx.folders.getFolderFromDB(eO.W4c.RESERVEDFOLDERID_ARCHIVED),
                        isArchiveFeatureActive: this.ctx.settings.isFeatureActive(eX.TO.Archive)
                    }).pipe((0, z.n)(i => {
                        let {
                            archiveFolder: n,
                            isArchiveFeatureActive: a
                        } = i;
                        if (!a || !n) return this.logger.info("[AutoLoad] Archive not active, returning as-is"), (0, j.of)(e);
                        let o = this.getArchivedPeerUniqueIds(n, a);
                        return this.loadAllRemainingFromCache(e, t, n, a, o, r, 20).pipe((0, z.n)(e => {
                            var i;
                            let n = e.filter(e => !o.has(e.id)).length;
                            this.logger.info("[AutoLoad] After cache exhausted", {
                                total: e.length,
                                nonArchived: n,
                                minNeeded: 20
                            });
                            let a = n < 20,
                                d = !(null == s ? void 0 : s.isLoaded);
                            return a && d ? (null == (i = e[e.length - 1]) ? void 0 : i.date) ? (this.logger.info("[AutoLoad] Loading from REMOTE (loop until enough or no more)"), (0, j.of)({
                                done: !1,
                                dialogs: e
                            }).pipe((0, eH.f)(e => {
                                var i;
                                let {
                                    done: n,
                                    dialogs: a
                                } = e;
                                if (n) return q.w;
                                let d = null == (i = a[a.length - 1]) ? void 0 : i.date;
                                return d ? this.apiLoadDialogsFromRemote(t, d, r).pipe((0, $.W)(e => (this.logger.error("[AutoLoad] API error, returning current dialogs", e), (0, j.of)([]))), (0, ee.M)(e => {
                                    this.logger.info("[AutoLoad] API returned", {
                                        count: e.length
                                    })
                                }), this.prepareDialogs({
                                    storeInStorage: !0
                                }), (0, z.n)(e => this.calculateDialogsInfoLoadedFromRemote(e, t, d, s)), (0, X.T)(e => {
                                    let t = [...a, ...e],
                                        i = t.filter(e => !o.has(e.id)).length,
                                        s = i >= 20,
                                        n = e.length < r,
                                        d = s || n;
                                    return this.logger.info("[AutoLoad] From REMOTE batch complete", {
                                        loaded: e.length,
                                        total: t.length,
                                        nonArchived: i,
                                        haveEnough: s,
                                        noMoreFromApi: n,
                                        continueLoad: !d
                                    }), {
                                        done: d,
                                        dialogs: t
                                    }
                                })) : (0, j.of)({
                                    done: !0,
                                    dialogs: a
                                })
                            }), (0, eV.o)(1), (0, X.T)(e => {
                                let {
                                    dialogs: t
                                } = e;
                                return this.logger.info("[AutoLoad] From REMOTE complete", {
                                    total: t.length
                                }), t
                            }))) : (0, j.of)(e) : (this.logger.info("[AutoLoad] No need for remote", {
                                needsMore: a,
                                canLoadMore: d
                            }), (0, j.of)(e))
                        }))
                    })))
                }
                loadAllRemainingFromCache(e, t, i, s, r, n, a) {
                    return (0, em.p)({
                        allDialogsFromDB: this.db.getAll(),
                        folder: this.ctx.folders.getFolderFromDB(t)
                    }).pipe((0, z.n)(o => {
                        let {
                            allDialogsFromDB: d,
                            folder: l
                        } = o;
                        return (0, j.of)({
                            dialogs: e,
                            iteration: 0
                        }).pipe((0, eH.f)(e => {
                            var o;
                            let {
                                dialogs: u,
                                iteration: p
                            } = e, h = u.filter(e => !r.has(e.id)).length;
                            if (h >= a) return this.logger.info("[AutoLoad] Cache: Enough dialogs", {
                                nonArchived: h,
                                iteration: p
                            }), q.w;
                            let g = null == (o = u[u.length - 1]) ? void 0 : o.date;
                            if (!g) return q.w;
                            let c = this.filterDialogs(d, t, g, l, i, s, n);
                            if (this.logger.info("[AutoLoad] Cache iteration", {
                                    iteration: p,
                                    found: c.length,
                                    currentTotal: u.length,
                                    nonArchived: h
                                }), 0 === c.length) return this.logger.info("[AutoLoad] Cache exhausted"), q.w;
                            let f = [...u, ...c];
                            return this.logger.info("[AutoLoad] Cache merged", {
                                added: c.length,
                                total: f.length
                            }), (0, j.of)({
                                dialogs: f,
                                iteration: p + 1
                            })
                        }), (0, eB.H)(), (0, X.T)(e => {
                            let {
                                dialogs: t
                            } = e;
                            return this.logger.info("[AutoLoad] Cache phase complete", {
                                total: t.length
                            }), t
                        }))
                    }))
                }
                loadDialogsFromRemote(e, t, i) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.LOAD_DIALOG_COUNT;
                    return this.apiLoadDialogsFromRemote(e, t, s).pipe((0, J.Z)(r => this.aquireDialogs(r).pipe((0, X.T)(() => r), this.prepareDialogs({
                        storeInStorage: !0
                    }), (0, z.n)(s => this.calculateDialogsInfoLoadedFromRemote(s, e, t, i)), (0, z.n)(r => this.autoLoadMoreDialogs(r, e, t, i, s)), (0, ee.M)(e => {
                        this.logger.debug("load dialogs from remote complete (chunk)", (0, eS.CF)(e))
                    }), (0, eF.j)(() => this.releaseDialogs(r)))))
                }
                getArchivedPeerUniqueIds(e, t) {
                    return t && e ? new Set(e.peers.map(e => (0, eK.LP)((0, eQ.K2)(e)))) : new Set
                }
                filterDialogs(e, t, i, s, r, n, a) {
                    let o = this.getArchivedPeerUniqueIds(r, n);
                    return e.filter(e => {
                        var r;
                        let [, n] = e, a = [er.m4.EXPEERTYPE_PRIVATE, er.m4.EXPEERTYPE_GROUP, er.m4.EXPEERTYPE_CHANNEL, er.m4.EXPEERTYPE_BOT].includes(t) ? (null == (r = n.exInfo) ? void 0 : r.exPeerType) === t : t === er.m4.EXPEERTYPE_UNKNOWN || n.peer && (null == s ? void 0 : s.peers.some(e => (0, eK.LP)((0, eQ.K2)(e)) === n.id));
                        return !(t === er.m4.EXPEERTYPE_UNKNOWN && n.id && o.has(n.id)) && a && n.date < i
                    }).sort((e, t) => {
                        let [, i] = e, [, s] = t;
                        return s.date - i.date
                    }).slice(0, a).map(e => {
                        let [, t] = e;
                        return t
                    })
                }
                requiredPeers(e) {
                    let t = new Set,
                        i = new Set;
                    return e.forEach(e => {
                        var s, r, n;
                        if ((null == (s = e.peer) ? void 0 : s.type) == er.RK.PEERTYPE_PRIVATE) t.add(e.peer.id);
                        else {
                            if (null == (r = e.message) ? void 0 : r.serviceMessage) {
                                let i = (0, eZ.b0)(null == (n = e.message) ? void 0 : n.serviceMessage.ext);
                                i && t.add(i)
                            }
                            i.add(e.peer.id), t.add(e.senderUid)
                        }
                    }), {
                        userIds: Array.from(t),
                        groupIds: Array.from(i)
                    }
                }
                preLoadEntites() {
                    (0, eL._)(this.ctx.groups.loadGroup(0)).catch(() => {})
                }
                loadDialogsFromCache(e, t, i, s) {
                    this.beginCacheLoad(`dialogs:${e}`), this.preLoadEntites();
                    let r = performance.now();
                    return (0, em.p)({
                        dialogs: this.db.getAll().pipe((0, ee.M)(() => this.logger.debug("[perf] getAll", {
                            folderId: e,
                            time: performance.now() - r
                        }))),
                        folder: this.ctx.folders.getFolderFromDB(e),
                        archiveFolder: this.ctx.folders.getFolderFromDB(eO.W4c.RESERVEDFOLDERID_ARCHIVED),
                        isArchiveFeatureActive: this.ctx.settings.isFeatureActive(eX.TO.Archive)
                    }).pipe((0, z.n)(n => {
                        let {
                            dialogs: a,
                            folder: o,
                            archiveFolder: d,
                            isArchiveFeatureActive: l
                        } = n, u = this.filterDialogs(a, e, t, o, d, l, s);
                        this.logger.info("[perf] filter dialogs", {
                            folderId: e,
                            time: performance.now() - r
                        });
                        let p = !1;
                        return this.aquireDialogs(u).pipe((0, z.n)(() => u.length < s && !i.isLoaded ? (this.logger.warn("Load another dialogs from remote (before entities)", u.length), this.releaseDialogs(u), p = !0, this.loadDialogsFromRemote(e, t, i, s)) : (0, j.of)(u)), (0, z.n)(r => p ? (0, j.of)(r) : this.autoLoadMoreDialogs(r, e, t, i, s)), (0, z.n)(s => {
                            let {
                                userIds: r,
                                groupIds: n
                            } = this.requiredPeers(s), a = performance.now();
                            return this.ctx.entities.loadUsersGroups((0, eu.g)(r), n.map(e => (0, ed.t)(e))).pipe((0, ee.M)(() => {
                                this.logger.debug("load entities", {
                                    folderId: e,
                                    date: t,
                                    length: s.length,
                                    info: i,
                                    time: performance.now() - a
                                })
                            }), (0, X.T)(() => s))
                        }), (0, eF.j)(() => {
                            p || this.releaseDialogs(u)
                        }))
                    }), (0, ee.M)(t => this.logger.debug("load dialogs from cache complete", {
                        folderId: e,
                        time: performance.now() - r
                    }, (0, eS.CF)(t))), (0, eF.j)(() => this.endCacheLoad(`dialogs:${e}`)))
                }
                waitForInvalidationEnd() {
                    return this.isInvalidating.value ? this.isInvalidating.pipe((0, W.p)(e => !e), (0, eq.$)()) : (0, j.of)(!0)
                }
                prepareDialogs() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            storeInStorage: t = !0,
                            isPinnedDialogs: i,
                            force: s,
                            folderId: r
                        } = e;
                    return (0, z.n)(e => {
                        let {
                            userIds: n,
                            groupIds: a
                        } = this.requiredPeers(e), o = (0, eZ._r)(e);
                        return (t ? i ? this.updatePinnedDialogs(o, r ?? 0) : this.updateDialogsAndShorts(o) : (0, j.of)(o)).pipe((0, z.n)(e => this.ctx.entities.loadUsersGroups((0, eu.g)(n), a.map(e => (0, ed.t)(e)), s).pipe((0, X.T)(() => e))))
                    })
                }
                readMessages(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = i ? {
                            save: () => this.ctx.pendingOperations.addPendingRead(e, t),
                            remove: () => this.ctx.pendingOperations.removePending(`read_${e.id}`)
                        } : void 0;
                    return (0, eN.v)(() => this.api.messageRead((0, eK.F8)(e), t, s)).pipe((0, $.W)(e => (this.logger.error("readMessages", e), q.w)))
                }
                receivedMessages(e, t) {
                    return this.api.messageReceived((0, eK.F8)(e), t).pipe((0, $.W)(e => (this.logger.error("receivedMessages", e), q.w)))
                }
                loadShortDialogsFromCache() {
                    return this.shortDialogsDb.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })), (0, ee.M)(e => this.logger.info("LocalDialogSearch", "loadSHortDialogsFromCache", e.length)), (0, z.n)(e => this.getRequiredPeers(e)))
                }
                loadShortDialogsFromRemote() {
                    return this.api.getGroupedDialogs([er.Ji.UPDATEOPTIMIZATION_STRIP_UNREAD_COUNTS]).pipe((0, z.n)(e => {
                        let {
                            dialogs: t
                        } = e;
                        this.logger.info("LocalDialogSearch", "loadShortDialogsFromRemote", "res", t.length);
                        let i = (0, eZ.v$)(t).map(e => ({
                            ...e,
                            id: (0, eK.LP)(e.peer)
                        }));
                        return this.putDialogsShortInDB(i).pipe((0, z.n)(() => this.ctx.configs.setParameter(e4, !0)), (0, ey.u)(i))
                    }), (0, z.n)(e => this.getRequiredPeers(e)))
                }
                chatOrThreadOpened(e, t) {
                    this.currentPeer = e, this.currentThread = t
                }
                dialogKeyExtractor(e) {
                    return (0, eK.LP)(e.peer)
                }
                putDialogsInDB(e) {
                    return (0, eZ.z4)(this.db, e, this.dialogKeyExtractor)
                }
                putDialogsShortInDB(e) {
                    return (0, eZ.z4)(this.shortDialogsDb, e, this.dialogKeyExtractor)
                }
                putPinnedDialogsUidsInDB(e, t) {
                    let i = e.map(e => (0, eK.LP)(e.peer));
                    return this.pinnedDialogsDb.put({
                        key: t,
                        value: i
                    }, t).pipe((0, ee.M)(() => {
                        this.logger.info("PUT pinned dialogs", t, i)
                    }), (0, $.W)(e => (_.U.error("Failed to put data in DB:", e), (0, eI.$)(() => e))))
                }
                removePinnedDialogsFromDB(e, t) {
                    return this.pinnedDialogsDb.get(t).pipe((0, z.n)(i => {
                        let s = ((null == i ? void 0 : i.value) ?? []).map(e => (0, eK.TU)(e));
                        return (0, Y.H)((0, U.s)(this.findDialogs(s))).pipe((0, z.n)(i => {
                            let s = i.filter(t => !e.some(e => e.id === t.id));
                            return this.updatePinnedDialogs(s, t ?? 0)
                        }))
                    }))
                }
                putDialog(e) {
                    return this.db.put(e).pipe((0, ey.u)(e))
                }
                putShortDialog(e) {
                    return this.shortDialogsDb.put(e).pipe((0, ey.u)(e))
                }
                updateDialogAndShort(e) {
                    return (0, em.p)([this.putDialog(e), this.putShortDialog((0, eZ.Dq)(e)), this.ctx.folders.updateUnreadFolder(e)]).pipe((0, X.T)(() => e))
                }
                updateDialogsAndShorts(e) {
                    return (0, em.p)([this.putDialogsInDB(e), this.putDialogsShortInDB(e.map(e => (0, eZ.Dq)(e))), this.ctx.folders.updateUnreadFolder(e)]).pipe((0, X.T)(() => e))
                }
                updatePinnedDialogs(e, t) {
                    return (0, em.p)([this.putPinnedDialogsUidsInDB(e, t), this.updateDialogsAndShorts(e)]).pipe((0, X.T)(() => e))
                }
                readMentionsLocal(e, t) {
                    return 0 === t.length ? (0, j.of)(void 0) : this.updateDialogAtomic(e, i => {
                        if (!(null == i ? void 0 : i.peer)) return void this.logger.warn("readMentionsLocal: dialog not found!", e.id);
                        if (!i.unreadMentions || 0 === i.unreadMentions.length) return i;
                        let s = i.unreadMentions.filter(e => !t.some(t => t.rid === e.rid && t.date === e.date));
                        return {
                            ...i,
                            unreadMentions: s
                        }
                    }).pipe((0, ee.M)(e => {
                        e && (this.logger.debug("readMentionsLocal: updated", (0, eS.nM)(e)), this.peerDialogsUpdate$.next((0, eJ.yw)(e)))
                    }), (0, X.T)(() => void 0), (0, $.W)(e => (this.logger.error("readMentionsLocal error", e), q.w)))
                }
                readMention(e, t) {
                    return this.readMentions(e, [t]).pipe((0, X.T)(() => void 0))
                }
                readMentions(e, t) {
                    if (0 === t.length) return (0, j.of)([]);
                    let i = (0, eQ.K2)(e);
                    return (0, em.p)([this.readMentionsRemote(e, t), this.readMentionsLocal(i, t)]).pipe((0, X.T)(e => {
                        let [t] = e;
                        return t
                    }))
                }
                loadPinnedDialogsFromCache(e) {
                    return this.logger.debug("loadPinnedDialogsFromCache", "first step"), this.beginCacheLoad(`pinnedDialogs:${e}`), this.pinnedDialogsDb.get(e).pipe((0, z.n)(e => {
                        if (this.logger.debug("loadPinnedDialogsFromCache", "second step"), !e) return (0, j.of)(void 0);
                        if ((null == e ? void 0 : e.value.length) === 0) return (0, j.of)([]);
                        let t = ((null == e ? void 0 : e.value) ?? []).map(e => (0, eK.TU)(e));
                        return this.aquireDialogs(t).pipe((0, z.n)(() => this.findDialogs(t).pipe((0, ee.M)(() => {
                            this.logger.debug("loadPinnedDialogsFromCache", "peers", t)
                        }), (0, z.n)(e => {
                            this.logger.debug("loadPinnedDialogsFromCache pinnedDialogs");
                            let {
                                userIds: t,
                                groupIds: i
                            } = this.requiredPeers(e);
                            return this.ctx.entities.loadUsersGroups((0, eu.g)(t), i.map(e => (0, ed.t)(e))).pipe((0, X.T)(() => e))
                        }))), (0, eF.j)(() => {
                            this.logger.info("Releasing dialogs lock for loadPinnedDialogsFromCache", t), this.releaseDialogs(t)
                        }))
                    }), (0, eF.j)(() => this.endCacheLoad(`pinnedDialogs:${e}`)))
                }
                markDialogsAsUnRead(e) {
                    return this.api.markDialogsAsUnread(e).pipe((0, ee.M)(t => {
                        let i = {
                            ...(0, e0.GK)(),
                            update: {
                                dialogsMarkedAsUnread: {
                                    peers: e
                                }
                            },
                            sequence: t.seq,
                            routeId: 0,
                            timestamp: Date.now()
                        };
                        this.ctx.events.addEvent(i)
                    }))
                }
                markDialogsAsRead(e) {
                    return this.api.markDialogsAsRead(e).pipe((0, ee.M)(t => {
                        let i = {
                            ...(0, e0.GK)(),
                            update: {
                                dialogsMarkedAsRead: {
                                    peers: e
                                }
                            },
                            sequence: t.seq,
                            routeId: 0,
                            timestamp: Date.now()
                        };
                        this.ctx.events.addEvent(i)
                    }))
                }
                getDialogsClick() {
                    return this.dialogClickDb.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })))
                }
                addDialogClick(e) {
                    let t = (0, eK.LP)(e);
                    return this.dialogClickDb.get(t).pipe((0, z.n)(e => (0, Y.H)(this.dialogClickDb.put({
                        id: t,
                        value: e ? e.value + 1 : 1
                    }))), (0, ej.w)(), (0, $.W)(e => (this.logger.error("Error updating dialog click:", e), q.w)))
                }
                changeChatNotification(e, t) {
                    let i = (0, e2.l4)(e);
                    return i ? this.ctx.configs.editParameter(i, String(t)).pipe((0, z.n)(() => this.ctx.folders.updateUnreadFolder(e, !1, !t)), (0, ej.w)()) : (0, eI.$)(() => "Chat invalid")
                }
                async isChatNotificationEnabledAsync(e) {
                    let t = (0, e2.l4)(e);
                    return !t || "true" === (await (0, U.s)(this.ctx.configs.getParameter(t)) ?? "true")
                }
                constructor(e, t, i, s, r, n) {
                    var a = this;
                    (0, D._)(this, "api", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "shortDialogsDb", void 0), (0, D._)(this, "pinnedDialogsDb", void 0), (0, D._)(this, "dialogClickDb", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "currentPeer", void 0), (0, D._)(this, "currentThread", void 0), (0, D._)(this, "LOAD_DIALOG_COUNT", 40), (0, D._)(this, "logger", _.U.getLogger("DialogsModule")), (0, D._)(this, "subsciptions", []), (0, D._)(this, "allDialogShorts$", void 0), (0, D._)(this, "peerDialogsUpdate$", new ek.B), (0, D._)(this, "isInvalidating", new H.t(!1)), (0, D._)(this, "cacheLoading", new H.t(0)), (0, D._)(this, "dialogMutexes", new Map), (0, D._)(this, "bindToEvents", () => this.peerDialogsUpdate$.asObservable().pipe((0, W.p)(e => void 0 != e), (0, X.T)(e => e), (0, ee.M)(e => this.logger.debug("Update", (0, eS.fB)(e))))), (0, D._)(this, "start", () => {}), (0, D._)(this, "stop", () => {
                        this.subsciptions.forEach(e => e.unsubscribe)
                    }), (0, D._)(this, "loadDialogs", function(e, t) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.LOAD_DIALOG_COUNT;
                        return a.waitForInvalidationEnd().pipe((0, z.n)(() => a.getDialogsInfo(t).pipe((0, z.n)(s => (a.logger.warn("Load Dialogs", t, s, e), s && s.lastLoadedDate < e) ? (a.logger.warn("Load Dialogs", "From cache", {
                            folderId: t,
                            info: s,
                            date: e
                        }), a.loadDialogsFromCache(t, e, s, i)) : (a.logger.warn("Load Dialogs", "From remote", {
                            folderId: t,
                            info: s,
                            date: e
                        }), a.loadDialogsFromRemote(t, e, s, i))))))
                    }), (0, D._)(this, "readMessagesLocal", (e, t, i) => (this.logger.info("local read messages", {
                        peer: e,
                        date: t,
                        count: i
                    }), i <= 0) ? (this.logger.warn("local read messages skipped due to non-positive count", {
                        peer: e,
                        date: t,
                        count: i
                    }), q.w) : this.updateDialogAtomic(e, s => (null == s ? void 0 : s.peer) ? (this.logger.debug("local read messsage: before update", (0, eS.nM)(s)), this.ctx.messaging.getHistoryMessage(s.peer, s.rid).pipe((0, X.T)(e => (e && e.state > s.state && (s.state = e.state, s.date = e.date, s.sortDate = e.date), {
                        ...s,
                        unreadCount: Math.max(s.unreadCount - i, 0),
                        firstUnreadDate: t
                    })))) : (this.logger.warn("read message local dialog not found!", e.id), (0, j.of)(void 0))).pipe((0, X.T)(e => {
                        e && (this.logger.debug("local read message: after update", (0, eS.nM)(e)), this.peerDialogsUpdate$.next((0, eJ.yw)(e)))
                    }))), (0, D._)(this, "loadPeerDialog", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            save: !0
                        };
                        return a.loadPeersDialogs([e], t).pipe((0, X.T)(e => e[0]))
                    }), (0, D._)(this, "loadPeersDialogs", function(e) {
                        let {
                            save: t
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            save: !0
                        };
                        return a.api.loadPeerDialogs(e.map(eK.F8)).pipe((0, X.T)(e => e.dialogs), a.prepareDialogs({
                            storeInStorage: t
                        }), (0, $.W)(e => (a.logger.error("LoadPeer", e), (0, j.of)([]))))
                    }), (0, D._)(this, "getPeerDialog", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            save: !0
                        };
                        return a.getPeersDialogs([e], t).pipe((0, X.T)(e => e[0]))
                    }), (0, D._)(this, "getPeersDialogs", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            save: !0
                        };
                        return a.findDialogs(e).pipe((0, z.n)(i => {
                            let s = [],
                                r = [];
                            return e.forEach(e => {
                                i.find(t => {
                                    var i;
                                    return (null == (i = t.peer) ? void 0 : i.id) === e.id
                                }) ? r.push(e) : s.push(e)
                            }), (0, V.T)(() => s.length > 0, a.loadPeersDialogs(s, t), (0, eN.v)(() => {
                                let e = r.filter(e => (null == e ? void 0 : e.type) === er.RK.PEERTYPE_GROUP).map(e => (0, eo.uY)(e)),
                                    t = r.filter(e => e.type === er.RK.PEERTYPE_PRIVATE).map(e => (0, el.u5)(e));
                                return a.ctx.entities.loadUsersGroups(t, e).pipe((0, X.T)(() => []))
                            })).pipe((0, X.T)(e => i.concat(e)))
                        }))
                    }), (0, D._)(this, "getOutPeers", e => {
                        let t = [],
                            i = [];
                        return e.forEach(e => {
                            var s, r;
                            (null == (s = e.peer) ? void 0 : s.type) === er.RK.PEERTYPE_PRIVATE ? t.push({
                                accessHash: "0",
                                uid: e.peer.id
                            }) : (null == (r = e.peer) ? void 0 : r.type) === er.RK.PEERTYPE_GROUP && i.push({
                                accessHash: "0",
                                groupId: e.peer.id
                            })
                        }), {
                            userPeers: t,
                            groupPeers: i
                        }
                    }), (0, D._)(this, "getRequiredPeers", e => {
                        let {
                            userPeers: t,
                            groupPeers: i
                        } = this.getOutPeers(e);
                        return this.ctx.entities.loadUsersGroups(t, i).pipe((0, ee.M)(e => {
                            let {
                                users: t,
                                groups: i
                            } = e;
                            return this.logger.info("LocalDialogSearch", "loadSHortDialogs", "getRequiredPeers", t.length, i.length)
                        }), (0, eF.j)(() => this.logger.info("LocalDialogSearch", "getRequiredPeers", "completed")), (0, ey.u)(e))
                    }), (0, D._)(this, "getShortDialogs", () => this.ctx.configs.getParameter(e4).pipe((0, z.n)(e => e ? (this.logger.info("LocalDialogSearch", "loadSHortDialogsFromCache"), this.loadShortDialogsFromCache()) : (this.logger.info("LocalDialogSearch", "loadShortDialogsFromRemote"), this.loadShortDialogsFromRemote())), (0, $.W)(e => (this.logger.error("getAllDialogs error:", e), q.w)))), (0, D._)(this, "getAllDialogs", e => ((!this.allDialogShorts$ || e) && (this.allDialogShorts$ = this.getShortDialogs().pipe((0, eY.t)(1))), this.allDialogShorts$)), (0, D._)(this, "deleteChat", e => this.api.deleteChat((0, eK.F8)(e)).pipe((0, X.T)(() => void 0), (0, $.W)(t => (this.logger.error("server error. delete dialog locally = ", t), (null == t ? void 0 : t.code) && !e1.mG.includes(t.code)) ? (this.peerDialogsUpdate$.next((0, eJ.uF)(e)), (0, j.of)(void 0)) : (0, eI.$)(() => t)), (0, J.Z)(() => this.deleteChatLocallyAndNextUpdate(e)))), (0, D._)(this, "deleteChatLocallyAndNextUpdate", e => this.deleteChatFromLocal(e).pipe((0, ee.M)(() => this.peerDialogsUpdate$.next((0, eJ.uF)(e))))), (0, D._)(this, "deleteChatFromLocal", e => {
                        let t = e.type === er.RK.PEERTYPE_GROUP;
                        return (0, em.p)([this.ctx.settings.toggleDialogPin([e], !1), this.deleteDialog(e), this.ctx.folders.deletePeersFromFolder(e), t ? this.ctx.events.removeGroupState(e.id) : (0, j.of)(void 0)]).pipe((0, ey.u)(void 0), (0, $.W)(() => (0, j.of)(void 0)))
                    }), (0, D._)(this, "clearChat", e => this.api.clearChat((0, eK.F8)(e)).pipe((0, z.n)(() => this.getDialog(e)), (0, z.n)(t => {
                        let i = [];
                        return (null == t ? void 0 : t.unreadMentions) && (null == t ? void 0 : t.unreadMentions.length) > 0 && i.push(this.readMentions((0, eQ.YQ)(e, er.m4.EXPEERTYPE_GROUP), t.unreadMentions)), (null == t ? void 0 : t.unreadReactions) && t.unreadReactions.length > 0 && i.push(this.messagesReactionsRead((0, eQ.YQ)(e, e.type === er.RK.PEERTYPE_PRIVATE ? er.m4.EXPEERTYPE_PRIVATE : er.m4.EXPEERTYPE_GROUP), t.unreadReactions)), i.length > 0 ? (0, em.p)(i).pipe((0, ey.u)(t)) : (0, j.of)(t)
                    }), (0, z.n)(() => this.updateDialogAtomic(e, e => ({
                        ...e,
                        firstUnreadDate: Date.now(),
                        unreadCount: 0,
                        message: {
                            textMessage: {
                                text: "پیام‌های گفت‌وگو حذف شدند",
                                mentions: [],
                                ext: void 0
                            }
                        }
                    }))), (0, $.W)(() => q.w))), (0, D._)(this, "getDialog", e => this.db.get((0, eK.LP)(e)).pipe((0, J.Z)(t => t ? (0, j.of)(t) : this.loadPeerDialog(e)))), (0, D._)(this, "findDialog", e => this.db.get((0, eK.LP)(e))), (0, D._)(this, "findDialogShort", e => this.shortDialogsDb.get((0, eK.LP)(e))), (0, D._)(this, "deleteDialog", e => {
                        let t = (0, eK.LP)(e);
                        return (0, em.p)([this.db.delete(t), this.shortDialogsDb.delete(t), this.pinnedDialogsDb.getAll().pipe((0, z.n)(e => {
                            let i = e.map(e => {
                                let [i, s] = e;
                                return {
                                    key: i,
                                    value: s.value.filter(e => e !== t)
                                }
                            });
                            return (0, Y.H)(i).pipe((0, J.Z)(e => this.pinnedDialogsDb.put(e, e.key)), (0, eW.U)(void 0))
                        }))]).pipe((0, ey.u)(void 0))
                    }), (0, D._)(this, "findDialogs", e => this.db.getItems(e.map(e => (0, eK.LP)(e))).pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })))), (0, D._)(this, "updateLastMessage", function(e, t) {
                        let {
                            forceUpdate: i,
                            createDialog: s
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            forceUpdate: !1,
                            createDialog: !1
                        }, r = (0, e$.H7)(t);
                        return a.logger.debug("update last message", {
                            peer: e
                        }), a.updateDialogAtomic(e, n => (0, V.T)(() => !n && !!s, a.findDialogShort(e).pipe((0, z.n)(i => {
                            var s;
                            if (!i) return a.loadPeerDialog(e);
                            let n = {
                                ...(0, eO.cfp)(),
                                id: (0, eK.LP)(e),
                                peer: e,
                                message: r ? null == (s = t.quotedMessage) ? void 0 : s.quotedMessageContent : t.message,
                                date: t.date,
                                rid: t.rid,
                                sortDate: t.date,
                                senderUid: t.senderUid,
                                state: t.state,
                                isGrouped: (0, e$.Mk)(t),
                                firstUnreadDate: t.date,
                                unreadCount: 0,
                                isMessageForwarded: r,
                                exInfo: i.exInfo,
                                markedAsUnread: i.markedAsUnread ?? !1
                            };
                            return (0, j.of)(n)
                        })), (0, j.of)(n)).pipe((0, X.T)(e => {
                            if (e && (e.date <= t.date || i)) {
                                var s;
                                return {
                                    ...e,
                                    message: r ? null == (s = t.quotedMessage) ? void 0 : s.quotedMessageContent : t.message,
                                    date: t.date,
                                    rid: t.rid,
                                    sortDate: t.date,
                                    senderUid: t.senderUid,
                                    state: t.state,
                                    isGrouped: (0, e$.Mk)(t),
                                    firstUnreadDate: t.date,
                                    unreadCount: 0,
                                    isMessageForwarded: r
                                }
                            }
                        }))).pipe((0, ee.M)(e => {
                            e && (a.logger.debug("updated last message", (0, eS.nM)(e)), a.peerDialogsUpdate$.next((0, eJ.yw)(e)))
                        }))
                    }), (0, D._)(this, "readMentionsRemote", (e, t) => (0, em.p)(t.map(t => this.api.readMention(e, t)))), (0, D._)(this, "readReactionsLocal", (e, t) => 0 === t.length ? (0, j.of)(void 0) : this.updateDialogAtomic(e, e => {
                        var i;
                        if (!e) return;
                        let s = null == (i = e.unreadReactions) ? void 0 : i.filter(e => !t.some(t => t.rid === e.rid && t.date === e.date));
                        return {
                            ...e,
                            unreadReactions: s
                        }
                    }).pipe((0, ee.M)(e => {
                        e && (this.logger.debug("readReactionsLocal: updated", (0, eS.nM)(e)), this.peerDialogsUpdate$.next((0, eJ.yw)(e)))
                    }), (0, $.W)(e => (_.U.error("readReactionsLocal error", e), q.w)), (0, X.T)(() => void 0))), (0, D._)(this, "messageReactionsRead", (e, t) => {
                        let i = (0, eQ.K2)(e);
                        return (0, em.p)([this.readReactionsLocal(i, [t]), this.api.messageReactionsRead(e, t)]).pipe((0, z.n)(() => this.findDialog(i)))
                    }), (0, D._)(this, "messagesReactionsReadRemote", (e, t) => (0, em.p)(t.map(t => this.api.messageReactionsRead(e, t)))), (0, D._)(this, "messagesReactionsRead", (e, t) => (0, em.p)([this.messagesReactionsReadRemote(e, t), this.readReactionsLocal((0, eQ.K2)(e), t)]).pipe((0, X.T)(e => {
                        let [t] = e;
                        return t
                    }))), (0, D._)(this, "updateDialogsOnDeleteMessage", (e, t, i) => (this.logger.info("Acquiring dialog lock for updateDialogsOnDeleteMessage", e), (0, Y.H)(this.aquireDialog(e)).pipe((0, z.n)(() => this.findDialog(e).pipe((0, J.Z)(s => {
                        if (!s) return this.ctx.dialogs.loadPeerDialog(e).pipe((0, z.n)(e => e ? (this.peerDialogsUpdate$.next((0, eJ.yw)(e)), (0, j.of)(e)) : (0, j.of)(void 0)), (0, $.W)(e => (this.logger.error("mapLoadPeerDialogToUpdateDialogEvent", e), (0, j.of)(void 0))));
                        if (t.find(e => e === s.rid)) return this.ctx.messaging.getLastMessage(e).pipe((0, J.Z)(e => {
                            if (!e) return (0, j.of)(void 0);
                            let t = {
                                ...s,
                                message: (0, eZ.I4)(e),
                                date: e.date,
                                sortDate: e.date,
                                senderUid: e.senderUid,
                                rid: e.rid,
                                isGrouped: (0, e$.Mk)(e),
                                state: e.state,
                                unreadCount: (0, eZ.nS)(i, s)
                            };
                            return this.logger.info("deleteMessageUpdateHandler", "update dialog by core messages", JSON.stringify({
                                dialog: (0, eS.nM)(t),
                                lastMessage: (0, eS.dF)(e)
                            })), this.updateDialogAndShort(t).pipe((0, ee.M)(e => {
                                this.peerDialogsUpdate$.next((0, eJ.yw)(e))
                            }))
                        }));
                        {
                            let e = {
                                ...s,
                                unreadCount: (0, eZ.nS)(i, s)
                            };
                            return this.updateDialogAndShort(e).pipe((0, ee.M)(e => {
                                this.peerDialogsUpdate$.next((0, eJ.yw)(e))
                            }))
                        }
                    }))), (0, eF.j)(() => {
                        this.logger.info("Releasing dialog lock for updateDialogsOnDeleteMessage", e), this.releaseDialog(e)
                    })))), (0, D._)(this, "getCurrentPeer", () => this.currentPeer), (0, D._)(this, "getCurrentThread", () => this.currentThread), (0, D._)(this, "pinDialogs", (e, t) => {
                        let i = e.map(e => (0, eQ.K2)(e));
                        return this.logger.info("Acquiring dialogs lock for pinDialogs", i), (0, Y.H)(this.aquireDialogs(i)).pipe((0, z.n)(() => this.api.pinDialogs(e, t).pipe((0, z.n)(i => {
                            let s = [...e, ...i.peers].map(e => (0, eQ.K2)(e));
                            return this.getPeersDialogs(s).pipe((0, z.n)(e => this.updatePinnedDialogs(e, t ?? 0)))
                        }), (0, eF.j)(() => {
                            this.logger.info("Releasing dialogs lock for pinDialogs", i), this.releaseDialogs(i)
                        }))))
                    }), (0, D._)(this, "unPinDialogs", (e, t) => {
                        let i = e.map(e => (0, eQ.K2)(e));
                        return this.logger.info("Acquiring dialogs lock for unPinDialogs", i), (0, Y.H)(this.aquireDialogs(i)).pipe((0, z.n)(() => this.api.unPinDialogs(e, t).pipe((0, z.n)(() => this.findDialogs(i).pipe((0, z.n)(e => this.removePinnedDialogsFromDB(e, t)))), (0, eF.j)(() => {
                            this.logger.info("Releasing dialogs lock for unPinDialogs", i), this.releaseDialogs(i)
                        }))))
                    }), (0, D._)(this, "loadPinnedDialogsFromRemote", e => this.api.loadPinnedDialogs(e).pipe((0, X.T)(e => e.dialogs), (0, z.n)(t => (this.logger.info("Acquiring dialogs lock for loadPinnedDialogsFromRemote", t.map(e => e.peer)), (0, Y.H)(this.aquireDialogs(t)).pipe((0, X.T)(() => t), this.prepareDialogs({
                        storeInStorage: !0,
                        isPinnedDialogs: !0,
                        folderId: e
                    }), (0, eF.j)(() => {
                        this.logger.info("Releasing dialogs lock for loadPinnedDialogsFromRemote", t.map(e => e.peer)), this.releaseDialogs(t)
                    })))))), (0, D._)(this, "loadPinnedDialogs", e => this.waitForInvalidationEnd().pipe((0, z.n)(() => (this.logger.debug("loadPinnedDialogs", "before from cache"), this.loadPinnedDialogsFromCache(e).pipe((0, z.n)(t => (this.logger.debug("loadPinnedDialogs, dialogs", null == t ? void 0 : t.map(e => (0, eS.nM)(e))), t && t.length >= 0) ? (0, j.of)(t) : (this.logger.debug("loadPinnedDialogs, lets go get from remote"), this.loadPinnedDialogsFromRemote(e)))))))), (0, D._)(this, "createReservedFolder", e => this.api.createReservedFolder(e)), this.api = e, this.db = t, this.shortDialogsDb = i, this.pinnedDialogsDb = s, this.dialogClickDb = r, this.ctx = n
                }
            }
            var e7 = i(15342);
            class e8 {
                filterUnreadPeersByMuteStatus(e, t) {
                    let i = t ?? this.includeMutedInUnread;
                    return e.filter(e => !!e.peer && (i || !e.isMuted)).map(e => e.peer)
                }
                process(e) {
                    let t = e.filter(e => e.folderCreated || e.folderDeleted || e.foldersReordered || e.folderEdited);
                    if (this.logger.info("folder events:", t), 0 == t.length) return (0, j.of)(void 0);
                    let i = [];
                    for (let e of t)
                        if (e.folderCreated) {
                            let t = this.handleFolderCreated(e.folderCreated);
                            i.push(t)
                        } else if (e.folderDeleted) {
                        let t = this.handleFolderDeleted(e.folderDeleted);
                        i.push(t)
                    } else if (e.foldersReordered) {
                        let t = this.handleFoldersReordered(e.foldersReordered);
                        i.push(t)
                    } else if (e.folderEdited) {
                        let t = this.handleEditFolder(e.folderEdited);
                        i.push(t)
                    }
                    if (0 === i.length) return this.logger.info("no observable events to process"), (0, j.of)(void 0);
                    let s = (0, ev.x)(...i).pipe((0, X.T)(e => (this.logger.info("emitting folder update event", e), e && this.folderUpdates$.next(e))), (0, eB.H)(), (0, ee.M)(() => {
                        this.logger.warn(">>> after folders update")
                    }), (0, ey.u)(void 0));
                    return this.areFoldersLoaded.value ? s : (this.logger.info("Folders not loaded yet, queuing events"), this.eventQueue.push(s), (0, j.of)(void 0))
                }
                updateUnreadFolder(e, t, i) {
                    if (!this.areFoldersLoaded.value) return this.logger.info("Folders not loaded yet, skipping unread folder update"), (0, j.of)(void 0);
                    let s = t ?? this.includeMutedInUnread,
                        r = e && "type" in e;
                    return (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        var t, n;
                        let a, o = await (0, U.s)(this.getFolderFromDB(eO.W4c.RESERVEDFOLDERID_UNREAD));
                        if (!o) return void this.logger.warn("Unread folder not found");
                        let d = o,
                            l = !1;
                        if (r) {
                            let i = await (0, U.s)(this.ctx.dialogs.findDialog(e));
                            if (!(null == i || null == (t = i.exInfo) ? void 0 : t.exPeerType)) return void this.logger.warn("Dialog or exInfo not found for peer", (0, eK.LP)(e));
                            a = [i]
                        } else a = Array.isArray(e) ? e : [e];
                        for (let e of a) {
                            if (!e.peer || !(null == (n = e.exInfo) ? void 0 : n.exPeerType)) {
                                this.logger.warn("Dialog missing peer or exInfo", e.id);
                                continue
                            }
                            let t = e.peer,
                                r = (0, eK.LP)(t),
                                a = !(void 0 !== i ? !i : await this.ctx.dialogs.isChatNotificationEnabledAsync(t));
                            this.logger.info("Updating unread folder for peer", {
                                peerUniqueId: r,
                                counter: e.unreadCount,
                                isMuted: a,
                                includeMuted: s,
                                exPeerType: e.exInfo.exPeerType
                            });
                            let o = e.unreadCount >= 1,
                                u = d.unreadPeers.some(e => (0, eK.LP)((0, eQ.K2)(e)) === r),
                                p = (o || e.markedAsUnread) && (s || !a);
                            if (p && !u) {
                                let i = {
                                        id: t.id,
                                        type: e.exInfo.exPeerType,
                                        accessHash: ""
                                    },
                                    n = [...d.unreadPeers, i];
                                d = {
                                    ...d,
                                    peers: n,
                                    unreadPeers: n
                                }, l = !0, this.logger.info("Added peer to unread folder", r, {
                                    counter: e.unreadCount,
                                    isMuted: a,
                                    includeMuted: s
                                })
                            } else if (!p && u) {
                                let t = d.unreadPeers.filter(e => (0, eK.LP)((0, eQ.K2)(e)) !== r);
                                d = {
                                    ...d,
                                    peers: t,
                                    unreadPeers: t
                                }, l = !0;
                                let i = o ? a && !s ? "muted" : "unknown" : "no unread";
                                this.logger.info("Removed peer from unread folder", r, {
                                    reason: i,
                                    counter: e.unreadCount,
                                    isMuted: a,
                                    includeMuted: s
                                })
                            }
                        }
                        l && (await (0, U.s)(this.putFoldersInDB([d])), this.folderUpdates$.next((0, e7.g$)(d)))
                    })).pipe((0, X.T)(() => void 0))
                }
                putInDBAndSendUpdate(e) {
                    return this.putFoldersInDB([e]).pipe((0, X.T)(() => (0, e7.g$)(e)))
                }
                handleAddPeersToFolder(e, t) {
                    let i = new Set;
                    e.forEach(e => {
                        i.add((0, eK.LP)((0, eQ.K2)(e)))
                    });
                    let s = [...e];
                    return t.forEach(e => {
                        i.has((0, eK.LP)((0, eQ.K2)(e))) || s.push(e)
                    }), s
                }
                handleDeletePeersFromFolder(e, t) {
                    return e.filter(e => {
                        let i = (0, eK.LP)((0, eQ.K2)(e));
                        return !t.find(e => (0, eK.LP)((0, eQ.K2)(e)) === i)
                    })
                }
                handleFolderCreated(e) {
                    if (!e.folder) return (0, j.of)(void 0);
                    if (e.folder.id === eO.W4c.RESERVEDFOLDERID_UNREAD) return this.createReservedFolder(e.folder.id).pipe((0, X.T)(e => {
                        let {
                            folder: t
                        } = e;
                        if (t) return (0, e7.ZS)([t])
                    }));
                    let t = {
                        ...e.folder,
                        index: e.index
                    };
                    return this.logger.info("handleFolderCreated", e), (0, Y.H)(this.foldersMutex.runExclusive(async () => (await (0, U.s)(this.putFoldersInDB([t])), (0, e7.ZS)([t]))))
                }
                handleFolderDeleted(e) {
                    return (0, Y.H)(this.foldersMutex.runExclusive(async () => (await (0, U.s)(this.deleteFolderFromDB(e.folderId)), await (0, U.s)(this.removeFolderDialogsInfo(e.folderId)), this.logger.info("handle delete folder", e), (0, e7.sE)(e.folderId))))
                }
                handleFoldersReordered(e) {
                    return (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        this.logger.info("Acquiring lock for handleFoldersReordered", e);
                        let t = await (0, U.s)(this.getAllFolders()),
                            i = this.reorderFolderIndexes(t, e.folderIds);
                        return this.logger.info("handle reorder folder", e, i), await (0, U.s)(this.putFoldersInDB(i)), this.logger.info("Released lock for handleFoldersReordered", e), (0, e7.TL)(i.map(e => ({
                            id: e.id,
                            index: e.index
                        })))
                    }))
                }
                getEditedFolder(e, t, i, s) {
                    return this.getFolderFromDB(e).pipe((0, X.T)(r => {
                        if (r || e !== eO.W4c.RESERVEDFOLDERID_ARCHIVED || (this.logger.info("Archive folder not found in DB, creating it", e), r = {
                                ...(0, eO.mqZ)(),
                                id: e,
                                name: "",
                                peers: [],
                                index: 0,
                                isReserved: !0
                            }), !r) return;
                        let n = {
                            ...r
                        };
                        if (t && (n.name = t), i && i.length > 0 && (n.peers = this.handleAddPeersToFolder(r.peers, i)), s && s.length > 0) {
                            let e = this.handleDeletePeersFromFolder(n.peers, s);
                            n.peers = e
                        }
                        return n
                    }))
                }
                handleEditFolder(e) {
                    return (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        let t = await (0, U.s)(this.getEditedFolder(e.folderId, e.newName, e.addedPeers, e.deletedPeers));
                        if (!t) return;
                        let i = await (0, U.s)(this.putInDBAndSendUpdate(t)),
                            {
                                newName: s,
                                ...r
                            } = e;
                        return this.logger.info("handle edit folder", r, i), i
                    })).pipe((0, z.n)(t => t ? this.getFolderNewPeersDialogs(e.addedPeers).pipe((0, X.T)(() => t)) : (0, j.of)(void 0)))
                }
                getFolderNewPeersDialogs(e) {
                    let t = e.map(e => (0, eQ.K2)(e));
                    return this.logger.info("Acquiring dialogs lock for getFolderNewPeersDialogs", t), this.ctx.dialogs.aquireDialogs(t).pipe((0, z.n)(() => this.ctx.dialogs.getPeersDialogs(t).pipe((0, X.T)(e => {
                        this.logger.info("Updating dialogs for folder new peers", (0, eS.CF)(e)), this.folderUpdates$.next((0, eJ.X1)(e))
                    }), (0, eF.j)(() => {
                        this.logger.info("Releasing dialogs lock for getFolderNewPeersDialogs", t), this.ctx.dialogs.releaseDialogs(t)
                    }))))
                }
                putFoldersInDB(e) {
                    return this.db.putItems(e.map(e => [e.id, e]))
                }
                removeFolderDialogsInfo(e) {
                    return this.ctx.configs.deleteParameter(e3 + e.toString())
                }
                removeFoldersDialogInfo() {
                    return this.getAllFolders().pipe((0, z.n)(e => this.ctx.configs.deleteParameters(e.map(e => e3 + e.id.toString())).pipe((0, X.T)(() => void 0))))
                }
                buildUnreadFolderFromPeers(e, t) {
                    let i = this.filterUnreadPeersByMuteStatus(e, void 0);
                    return {
                        ...(0, eO.mqZ)(),
                        id: eO.W4c.RESERVEDFOLDERID_UNREAD,
                        name: "",
                        peers: i,
                        unreadPeers: i,
                        isReserved: !0,
                        index: t
                    }
                }
                sortFolders(e) {
                    return e.sort((e, t) => e.index - t.index)
                }
                reorderFolderIndexes(e, t) {
                    let i = new Map(t.map((e, t) => [e, t]));
                    return e.filter(e => i.has(e.id)).map(e => ({
                        ...e,
                        index: i.get(e.id) ?? 0
                    })).sort((e, t) => e.index - t.index)
                }
                waitForInvalidationEnd() {
                    return this.isInvalidating.value ? this.isInvalidating.pipe((0, W.p)(e => !e), (0, eq.$)()) : (0, j.of)(!0)
                }
                processQueuedEvents() {
                    for (this.logger.info("Processing queued events"); this.eventQueue.length > 0;) {
                        let e = this.eventQueue.shift();
                        e && e.subscribe()
                    }
                }
                deleteFolderFromDB(e) {
                    return this.db.delete(e)
                }
                deletePeersFromFolder(e) {
                    return (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        this.logger.info("Acquiring lock for deletePeersFromFolder", e);
                        let t = await (0, U.s)(this.getAllFolders()),
                            i = (0, eK.LP)(e),
                            s = [];
                        t.forEach(e => {
                            let t = !1,
                                r = e.peers.filter(e => {
                                    let s = (0, eK.LP)((0, eQ.K2)(e)) === i;
                                    return s && (t = !0), !s
                                }),
                                n = e.unreadPeers.filter(e => {
                                    let s = (0, eK.LP)((0, eQ.K2)(e)) === i;
                                    return s && (t = !0), !s
                                });
                            t && s.push({
                                ...e,
                                peers: r,
                                unreadPeers: n
                            })
                        }), s.length > 0 && (this.folderUpdates$.next((0, e7.TL)(s)), await (0, U.s)(this.putFoldersInDB(s))), this.logger.info("Released lock for deletePeersFromFolder", e)
                    }))
                }
                invalidate() {
                    return this.logger.info("invalidate: start"), this.isInvalidating.next(!0), (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        await (0, U.s)((0, em.p)([this.db.clear(), this.removeFoldersDialogInfo()]));
                        let e = await (0, U.s)(this.loadFreshFolders());
                        return this.folderUpdates$.next((0, e7.Kq)(e)), this.areFoldersLoaded.next(!0), this.isInvalidating.next(!1), this.logger.info("invalidate: finished"), e
                    }))
                }
                clear() {
                    return this.areFoldersLoaded.next(!1), this.eventQueue = [], this.foldersMutex.cancel(), this.db.clear()
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "name", "FoldersModule"), (0, D._)(this, "logger", _.U.getLogger("FoldersModule")), (0, D._)(this, "folderUpdates$", new ek.B), (0, D._)(this, "isInvalidating", new H.t(!1)), (0, D._)(this, "areFoldersLoaded", new H.t(!1)), (0, D._)(this, "eventQueue", []), (0, D._)(this, "foldersMutex", new ez.eu), (0, D._)(this, "includeMutedInUnread", !1), (0, D._)(this, "bindToFoldersUpdates", () => this.folderUpdates$.asObservable()), (0, D._)(this, "loadFoldersFromRemote", () => this.ctx.settings.isFeatureActive(eX.TO.UnreadTab).pipe((0, z.n)(e => this.api.loadFolders(e).pipe((0, ee.M)(e => {
                        this.logger.info("load Folders From Remote", e)
                    }), (0, z.n)(e => {
                        var t;
                        let i = e.folders.map((e, t) => ({
                                ...e,
                                index: t
                            })),
                            s = i.findIndex(e => e.id === eO.W4c.RESERVEDFOLDERID_UNREAD);
                        if (-1 !== s && (null == (t = e.unreadPeers) ? void 0 : t.length) > 0) {
                            this.logger.info("Unread folder found in response, creating from unreadPeers");
                            let t = this.buildUnreadFolderFromPeers(e.unreadPeers, i[s].index);
                            i[s] = t
                        }
                        return this.putFoldersInDB(i).pipe((0, X.T)(() => i))
                    }))))), (0, D._)(this, "loadFreshFolders", () => (this.logger.info("load Fresh Folders"), this.loadFoldersFromRemote())), (0, D._)(this, "getFolderFromDB", e => this.db.get(e).pipe((0, $.W)(e => (this.logger.error("get Folder", e), (0, j.of)(void 0))))), (0, D._)(this, "getAllFolders", () => this.db.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [t, i] = e;
                        return i
                    })))), (0, D._)(this, "createReservedFolder", e => this.api.createReservedFolder(e).pipe((0, J.Z)(t => (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        if (e === eO.W4c.RESERVEDFOLDERID_UNREAD) {
                            this.logger.info("createUnreadFolder: loading folders to get unreadPeers");
                            let e = await (0, U.s)(this.api.loadFolders(!0)),
                                i = this.buildUnreadFolderFromPeers(e.unreadPeers, t.index);
                            return await (0, U.s)(this.putFoldersInDB([i])), this.logger.info("createUnreadFolder: created with peers", i.peers.length, {
                                includeMuted: this.includeMutedInUnread
                            }), {
                                index: t.index,
                                unreadPeers: t.unreadPeers,
                                folder: i
                            }
                        }
                        this.logger.info("createDefaultReservedFolder", {
                            folderId: e
                        });
                        let i = {
                            ...(0, eO.mqZ)(),
                            id: e,
                            name: "",
                            peers: [],
                            unreadPeers: [],
                            isReserved: !0,
                            index: t.index
                        };
                        return await (0, U.s)(this.putFoldersInDB([i])), {
                            index: t.index,
                            unreadPeers: t.unreadPeers,
                            folder: i
                        }
                    }))))), (0, D._)(this, "createFolder", (e, t) => this.api.createFolder(e, t).pipe((0, J.Z)(i => {
                        let s = {
                            ...(0, eO.mqZ)(),
                            id: i.folderId,
                            name: e,
                            peers: t,
                            index: i.index
                        };
                        return (0, Y.H)(this.foldersMutex.runExclusive(async () => (await (0, U.s)(this.putFoldersInDB([s])), i)))
                    }))), (0, D._)(this, "loadFolders", () => this.waitForInvalidationEnd().pipe((0, z.n)(() => (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        let e;
                        this.logger.info("start loadFolders");
                        let t = await (0, U.s)(this.getAllFolders());
                        return t.length > 0 ? (this.logger.info("loadFolders from db", t), e = this.sortFolders(t)) : e = await (0, U.s)(this.loadFoldersFromRemote()), this.isInvalidating.next(!1), this.areFoldersLoaded.next(!0), this.processQueuedEvents(), e
                    }))))), (0, D._)(this, "reorderFolders", e => this.api.reorderFolders(e).pipe((0, z.n)(() => (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        this.logger.info("Acquiring lock for reorderFolders", e);
                        let t = await (0, U.s)(this.getAllFolders()),
                            i = this.reorderFolderIndexes(t, e);
                        return await (0, U.s)(this.putFoldersInDB(i)), this.logger.info("Released lock for reorderFolders", e), (0, e7.TL)(i.map(e => ({
                            id: e.id,
                            index: e.index
                        })))
                    }))))), (0, D._)(this, "editFolder", (e, t, i, s) => this.api.editFolder(e, t, i, s).pipe((0, J.Z)(() => (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        this.logger.info("Acquiring lock for editFolder", e);
                        let r = await (0, U.s)(this.getEditedFolder(e, t, i, s));
                        if (!r) return void this.logger.info("Released lock for editFolder (no folder)", e);
                        let n = await (0, U.s)(this.putInDBAndSendUpdate(r));
                        return this.folderUpdates$.next(n), this.logger.info("Released lock for editFolder", e), n
                    })).pipe((0, z.n)(() => this.getFolderNewPeersDialogs(i).pipe((0, X.T)(() => void 0))))))), (0, D._)(this, "deleteFolder", e => this.api.deleteFolder(e).pipe((0, J.Z)(t => (0, Y.H)(this.foldersMutex.runExclusive(async () => {
                        this.logger.info("Acquiring lock for deleteFolder", e);
                        let i = (await (0, U.s)(this.getAllFolders())).filter(t => t.id !== e),
                            s = i.map(e => e.id),
                            r = this.reorderFolderIndexes(i, s);
                        return await (0, U.s)((0, em.p)([this.deleteFolderFromDB(e), this.removeFolderDialogsInfo(e)])), await (0, U.s)(this.putFoldersInDB(r)), this.folderUpdates$.next((0, e7.sE)(e)), this.folderUpdates$.next((0, e7.TL)(r.map(e => ({
                            id: e.id,
                            index: e.index
                        })))), this.logger.info("Released lock for deleteFolder", e), (0, j.of)(t)
                    }))))), (0, D._)(this, "loadFolderDialogs", (e, t, i) => this.api.loadFolderDialogs(e, t, i)), this.api = e, this.db = t, this.ctx = i
                }
            }
            var e6 = i(36742),
                e9 = i(78533),
                te = i(86654);
            let tt = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.userId && t.uint32(8).int32(e.userId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                userId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.userId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ti = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.peer && er.Cu.encode(e.peer, t.uint32(10).fork()).join(), void 0 !== e.messageId && eO.vzI.encode(e.messageId, t.uint32(18).fork()).join(), 0 !== e.page && t.uint32(24).int32(e.page), 0 !== e.limit && t.uint32(32).int32(e.limit), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peer: void 0,
                                messageId: void 0,
                                page: 0,
                                limit: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = eO.vzI.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.page = i.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.limit = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ts = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.usersSeen) tt.encode(i, t.uint32(10).fork()).join();
                        return 0 !== e.count && t.uint32(16).int32(e.count), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                usersSeen: [],
                                count: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.usersSeen.push(tt.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.count = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class tr {
                GetMessageSeenList(e, t) {
                    return this.rpc.unary(tn, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetMessageSeenList = this.GetMessageSeenList.bind(this)
                }
            }
            let tn = {
                methodName: "GetMessageSeenList",
                service: {
                    serviceName: "bale.negah.v1.Negah"
                },
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return ti.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary(e) {
                        let t = ts.decode(e);
                        return {
                            ...t,
                            toObject: () => t
                        }
                    }
                }
            };
            var ta = i(89304),
                to = i(78625),
                td = i(10391),
                tl = i(31754),
                tu = i(85141),
                tp = i(17782);
            let th = (e, t) => t instanceof Uint8Array ? {
                    __type: "Uint8Array",
                    data: Array.from(t)
                } : t,
                tg = (e, t) => t && "Uint8Array" === t.__type ? new Uint8Array(t.data) : t;
            class tc {
                getLastMessage(e) {
                    let t = (0, eK.LP)(e);
                    return this.sql.query("SELECT message FROM messages WHERE unique_id = ? ORDER BY date DESC LIMIT 1", [t]).pipe((0, X.T)(e => {
                        if (null == e ? void 0 : e[0]) return JSON.parse(e[0].message, tg)
                    }), (0, $.W)(e => (this.logger.error("Error getting last message", e), (0, j.of)(void 0))))
                }
                findFirstMessage(e) {
                    let t = (0, eK.LP)(e);
                    return this.sql.query("SELECT message FROM messages WHERE unique_id = ? ORDER BY date ASC LIMIT 1", [t]).pipe((0, X.T)(e => {
                        if (null == e ? void 0 : e[0]) return JSON.parse(e[0].message, tg)
                    }), (0, $.W)(e => (this.logger.error("Error getting first message", e), (0, j.of)(void 0))))
                }
                findMessage(e, t) {
                    let i = (0, eK.LP)(e);
                    return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ? AND date = ?", [i, t.rid, t.date]).pipe((0, X.T)(e => {
                        if (null == e ? void 0 : e[0]) return JSON.parse(e[0].message, tg)
                    }), (0, $.W)(e => (this.logger.error("Error getting message", e), (0, j.of)(void 0))))
                }
                findMessages(e, t) {
                    let i = (0, eK.LP)(e);
                    return this.sql.query(`SELECT message FROM messages WHERE unique_id = ? AND rid IN (${t.map(()=>"?").join(",")})`, [i, ...t.map(e => e.rid)]).pipe((0, X.T)(e => (null == e ? void 0 : e.map(e => JSON.parse(e.message, tg))) ?? []), (0, $.W)(e => (this.logger.error("Error getting messages", e), (0, j.of)([]))))
                }
                deletePeerHistory(e) {
                    let t = (0, eK.LP)(e);
                    return (0, em.p)([this.sql.execute("DELETE FROM history_metadata WHERE unique_id = ?", [t]), this.sql.execute("DELETE FROM messages WHERE unique_id = ?", [t])]).pipe((0, X.T)(() => void 0))
                }
                constructor(e) {
                    (0, D._)(this, "sql", void 0), (0, D._)(this, "isPersistent", !0), (0, D._)(this, "logger", _.U.getLogger(tc.name)), (0, D._)(this, "tablesInitialized", !1), (0, D._)(this, "init", () => this.createTables()), (0, D._)(this, "createTables", () => this.tablesInitialized ? (0, j.of)(void 0) : (0, em.p)([this.sql.execute(`CREATE TABLE IF NOT EXISTS history_metadata (
          unique_id INTEGER NOT NULL PRIMARY KEY,
          ranges TEXT NOT NULL,
          loaded_start BOOLEAN NOT NULL,
          loaded_end BOOLEAN NOT NULL
        )`), this.sql.execute(`CREATE TABLE IF NOT EXISTS messages (
          unique_id INTEGER NOT NULL,
          rid TEXT NOT NULL,
          date INTEGER NOT NULL,
          quoted_rid_date TEXT,
          grouped_id TEXT,
          message TEXT NOT NULL,
          PRIMARY KEY (unique_id, rid, date)
        )`).pipe((0, J.Z)(() => (0, em.p)([this.sql.execute("CREATE INDEX IF NOT EXISTS idx_messages_chat_date ON messages (unique_id, date)"), this.sql.execute("CREATE INDEX IF NOT EXISTS idx_messages_quoted_rid_date ON messages (quoted_rid_date)"), this.sql.execute("CREATE INDEX IF NOT EXISTS idx_messages_grouped_id ON messages (grouped_id)")])))]).pipe((0, X.T)(() => {
                        this.tablesInitialized = !0
                    }))), (0, D._)(this, "getHistoryMetadata", e => this.sql.query("SELECT ranges, loaded_start, loaded_end FROM history_metadata WHERE unique_id = ?", [(0, eK.LP)(e)]).pipe((0, X.T)(e => {
                        if (null == e ? void 0 : e[0]) return {
                            ranges: JSON.parse(e[0].ranges),
                            loaded: {
                                start: e[0].loaded_start,
                                end: e[0].loaded_end
                            }
                        }
                    }), (0, $.W)(e => (this.logger.error("Error getting history metadata", e), (0, j.of)(void 0))))), (0, D._)(this, "updateHistoryMetadata", (e, t) => {
                        var i, s;
                        let r = (0, eK.LP)(e),
                            n = [],
                            a = [];
                        return (void 0 !== t.ranges && (n.push("ranges = ?"), a.push(JSON.stringify(t.ranges))), (null == (i = t.loaded) ? void 0 : i.start) !== void 0 && (n.push("loaded_start = ?"), a.push(t.loaded.start)), (null == (s = t.loaded) ? void 0 : s.end) !== void 0 && (n.push("loaded_end = ?"), a.push(t.loaded.end)), 0 === n.length) ? (0, j.of)(void 0) : (a.push(r), this.sql.execute(`UPDATE history_metadata SET ${n.join(", ")} WHERE unique_id = ?`, a))
                    }), (0, D._)(this, "updateMessages", (e, t) => {
                        let i = (0, eK.LP)(e);
                        return this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, quoted_rid_date, grouped_id) VALUES ${t.map(()=>"(?, ?, ?, ?, ?, ?)").join(",")}`, t.flatMap(e => [i, JSON.stringify(e, th), e.rid, e.date, this.getQuoteRidDate(e), this.getGroupedId(e)]))
                    }), (0, D._)(this, "invalidateHistories", (e, t) => {
                        let i = [];
                        if (t) {
                            let s = t.filter(t => !e || (0, eK.LP)(t) !== (0, eK.LP)(e));
                            if (s.length > 0) {
                                let e = s.map(e => (0, eK.LP)(e));
                                i.push((0, em.p)([this.sql.execute(`DELETE FROM history_metadata WHERE unique_id IN (${e.map(()=>"?").join(",")})`, e), this.sql.execute(`DELETE FROM messages WHERE unique_id IN (${e.map(()=>"?").join(",")})`, e)]).pipe((0, X.T)(() => void 0)))
                            }
                        }
                        return (e && i.push(this.updateHistoryMetadata(e, {
                            loaded: {
                                start: !1,
                                end: !1
                            }
                        })), t || e) ? (this.logger.warn(">>>> invalidateHistories", i), i.length > 0 ? (0, em.p)(i).pipe((0, X.T)(() => void 0)) : (0, j.of)(void 0)) : (this.logger.warn(">>>> invalidateHistories 2", i), this.clear())
                    }), (0, D._)(this, "getQuoteRidDate", e => {
                        var t, i, s;
                        return (null == (i = e.quotedMessage) || null == (t = i.messageId) ? void 0 : t.value) && e.quotedMessage.messageDate ? `${null==(s=e.quotedMessage)?void 0:s.messageId.value}:${e.quotedMessage.messageDate}` : null
                    }), (0, D._)(this, "getGroupedId", e => {
                        var t;
                        return (null == (t = e.groupedId) ? void 0 : t.value) ?? null
                    }), (0, D._)(this, "initHistoryWithMessages", (e, t, i) => {
                        let s = (0, eK.LP)(e),
                            r = (0, to.$1)(t),
                            n = (0, to.HV)(t);
                        if (r && n) {
                            let e = [{
                                    start: r.date,
                                    end: n.date
                                }],
                                a = {
                                    start: !0,
                                    end: t.length < i
                                },
                                o = [],
                                d = [];
                            return t.forEach(e => {
                                o.push(s, JSON.stringify(e, th), e.rid, e.date, this.getQuoteRidDate(e), this.getGroupedId(e)), d.push("(?, ?, ?, ?, ?, ?)")
                            }), (0, em.p)([this.sql.execute(`INSERT OR REPLACE INTO history_metadata
       (unique_id, ranges, loaded_start, loaded_end)
       VALUES (?, ?, ?, ?)`, [s, JSON.stringify(e), a.start, a.end]), this.sql.execute(`INSERT OR REPLACE INTO messages
       (unique_id, message, rid, date, quoted_rid_date, grouped_id) VALUES ${d.join(", ")}`, o)]).pipe((0, X.T)(() => void 0), (0, $.W)(e => (this.logger.error("Error initializing history with messages", e), (0, j.of)(void 0))))
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "getHistoryMessage", (e, t) => {
                        let i = (0, eK.LP)(e);
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [i, t]).pipe((0, X.T)(e => {
                            if (null == e ? void 0 : e[0]) return JSON.parse(e[0].message, tg)
                        }), (0, $.W)(e => (this.logger.error("Error getting history message", e), (0, j.of)(void 0))))
                    }), (0, D._)(this, "getInRangeMessages", (e, t, i, s, r, n) => {
                        let a = (0, eK.LP)(e);
                        this.logger.info("Messages", ">> DebugRefactorHist getInRangeMessages", s, t, i, n);
                        let o = "",
                            d = [];
                        return s === ew.iP.LISTLOADMODE_BACKWARD ? (o = `
        SELECT * FROM (
          SELECT message, rid, date FROM messages
          WHERE unique_id = ? AND date >= ? And date <= ? AND date ${r?"<":"<="} ?
          ORDER BY date DESC
          LIMIT ?
        )
        ORDER BY date ASC
      `, d = [a, i.start, i.end, t, tl.k]) : s === ew.iP.LISTLOADMODE_FORWARD ? (o = `
        SELECT message, rid, date FROM messages
          WHERE unique_id = ? AND date >= ? And date <= ? AND date ${r?">":">="} ?
          ORDER BY date ASC
          LIMIT ?
      `, d = [a, i.start, i.end, t, tl.k]) : s === ew.iP.LISTLOADMODE_BOTH && (o = `
        SELECT * FROM (
          -- Backward messages (older)
          SELECT * FROM (SELECT message, rid, date FROM messages
          WHERE unique_id = ? AND date < ${t} AND date >= ${i.start} AND date <= ${i.end}
          ORDER BY date DESC
          LIMIT ${tl.k-1})

          UNION ALL

          -- The message at the exact date
          SELECT message, rid, date FROM messages
          WHERE unique_id = ? AND date = ${t}

          UNION ALL

          -- Forward messages (newer)
          SELECT * FROM (SELECT message, rid, date FROM messages
          WHERE unique_id = ? AND date > ${t} AND date <= ${i.end} AND date >= ${i.start}
          ORDER BY date ASC
          LIMIT ${tl.k})
        )
        ORDER BY date ASC
      `, d = [a, a, a]), this.sql.query(o, d).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return [];
                            let t = e.map(e => JSON.parse(e.message, tg));
                            if (!(e.length < tl.k && s === ew.iP.LISTLOADMODE_BOTH)) return (0, j.of)(t);
                            let r = t[t.length - 1].date,
                                n = `
            SELECT * FROM (
              SELECT message, rid, date FROM messages
              WHERE unique_id = ? AND date <= ${r} AND date >= ${i.start} AND date <= ${i.end}
              ORDER BY date DESC
              LIMIT ${tl.k})
            ORDER BY date ASC
          `;
                            return this.sql.query(n, [a]).pipe((0, X.T)(e => e && 0 !== e.length ? e.map(e => JSON.parse(e.message, tg)).sort((e, t) => e.date - t.date) : []))
                        }), (0, $.W)(e => (this.logger.error("Error getting in-range messages", e), (0, j.of)(null))))
                    }), (0, D._)(this, "getHistoryRanges", e => this.getHistoryMetadata(e).pipe((0, X.T)(e => null == e ? void 0 : e.ranges))), (0, D._)(this, "updateHistory", (e, t, i, s, r, n, a) => {
                        if (!r || 0 === r.length) return (0, j.of)(void 0);
                        let o = (0, eK.LP)(e);
                        return this.getHistoryMetadata(e).pipe((0, z.n)(d => {
                            if (d) {
                                let l = (0, to.HV)(d.ranges),
                                    u = (0, tu.eL)(i, t, r, s, l),
                                    p = !!n,
                                    h = n ? r.filter(e => e.date > n) : [],
                                    g = !(null == a ? void 0 : a.considerLastVisitedMessage) && p && !!h.length && h.length < tl.k / 2 - 1;
                                this.logger.warn(">>> DebugRefactorHist has history", "updateHistory", t, i, u, n, g, null == a ? void 0 : a.considerLastVisitedMessage);
                                let c = d.ranges;
                                u && (c = (0, tu.$Z)(d.ranges, u));
                                let f = {
                                    ...d.loaded
                                };
                                return s === td.C.Open && (g || !p) ? (this.logger.warn(">>> DebugRefactorHist hasLessThanHalfLimitUnread", "updateHistory"), f.end = !0) : s === td.C.GoToFirstMessage && (f.start = !0), r.length < tl.k && (i === ew.iP.LISTLOADMODE_BACKWARD ? f.start = !0 : i === ew.iP.LISTLOADMODE_FORWARD && (f.end = !0)), (0, B.h)(this.updateHistoryMetadata(e, {
                                    ranges: c,
                                    loaded: f
                                }), this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, grouped_id, quoted_rid_date)
             VALUES ${r.map(()=>"(?, ?, ?, ?, ?, ?)").join(",")}`, r.flatMap(e => [o, JSON.stringify(e, th), e.rid, e.date, this.getGroupedId(e), this.getQuoteRidDate(e)]))).pipe((0, X.T)(() => ({
                                    loaded: f,
                                    ranges: c
                                })))
                            } {
                                if (!r || 0 === r.length) return (0, j.of)(void 0);
                                let e = (0, tu.eL)(i, t, r, s);
                                if (e) {
                                    let t = !!n,
                                        i = n ? r.filter(e => e.date > n) : [],
                                        d = !(null == a ? void 0 : a.considerLastVisitedMessage) && t && !!i.length && i.length < tl.k / 2 - 1;
                                    this.logger.warn(">>> DebugRefactorHist init history", "updateHistory", r.map(eS.dF), s, t, d, e, null == a ? void 0 : a.considerLastVisitedMessage);
                                    let l = r.length < tl.k,
                                        u = s === td.C.Open && (d || !t);
                                    return (0, em.p)([this.sql.execute("INSERT OR REPLACE INTO history_metadata (unique_id, ranges, loaded_start, loaded_end) VALUES (?, ?, ?, ?)", [o, JSON.stringify([e]), l, l || u]), this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, grouped_id, quoted_rid_date)
               VALUES ${r.map(()=>"(?, ?, ?, ?, ?, ?)").join(",")}`, r.flatMap(e => {
                                        var t;
                                        return [o, JSON.stringify(e, th), e.rid, e.date, null == (t = e.groupedId) ? void 0 : t.value, this.getQuoteRidDate(e)]
                                    }))]).pipe((0, X.T)(() => ({
                                        loaded: {
                                            start: !0,
                                            end: !0
                                        },
                                        ranges: [e]
                                    })))
                                }
                            }
                            return (0, j.of)(void 0)
                        }))
                    }), (0, D._)(this, "updateHistoryMessage", (e, t) => {
                        let i = (0, eK.LP)(e);
                        return this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ? AND date = ?", [JSON.stringify(t, th), i, t.rid, t.date])
                    }), (0, D._)(this, "editHistoryMessage", e => {
                        let {
                            message: t,
                            peer: i,
                            rid: s
                        } = e, r = (0, eK.LP)(i), n = [];
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [r, s]).pipe((0, z.n)(i => {
                            if (!i || 0 === i.length) return (0, j.of)([]);
                            let s = JSON.parse(i[0].message, tg);
                            return void 0 != e.updatedContentTypeMessage && (0, e$.Pw)(e.updatedContentTypeMessage) != (0, e$.Pw)(e.message) ? (s.message = e.updatedContentTypeMessage, s.type = (0, e$.Pw)(e.updatedContentTypeMessage)) : (s.message = t, s.type = (0, e$.Pw)(t), s.editedAt = {
                                value: `${Date.now()}`
                            }), n.push({
                                rid: s.rid,
                                message: s.message,
                                type: s.type,
                                editedAt: s.editedAt
                            }), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(s, th), r, s.rid]).pipe((0, z.n)(() => this.sql.query(`SELECT message FROM messages
               WHERE unique_id = ? AND quoted_rid_date = ?`, [r, this.getQuoteRidDate(s)])), (0, z.n)(e => {
                                if (!e || 0 === e.length) return (0, j.of)(n);
                                let t = e.map(e => {
                                    var t, i;
                                    let a = JSON.parse(e.message, tg);
                                    return (0, e$.H7)(a) || (null == (i = a.quotedMessage) || null == (t = i.messageId) ? void 0 : t.value) !== s.rid ? (0, j.of)(void 0) : (a.quotedMessage.quotedMessageContent = s.message, n.push({
                                        rid: a.rid,
                                        quotedMessage: a.quotedMessage
                                    }), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(a, th), r, a.rid]))
                                });
                                return (0, em.p)(t).pipe((0, X.T)(() => n))
                            }))
                        }))
                    }), (0, D._)(this, "addMessagesToHistory", (e, t) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let i = (0, eK.LP)(e),
                            s = t.map(() => "(?, ?, ?, ?, ?, ?)").join(","),
                            r = t.flatMap(e => [i, JSON.stringify(e, th), e.rid, e.date, this.getGroupedId(e), this.getQuoteRidDate(e)]);
                        return this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, grouped_id, quoted_rid_date) VALUES ${s}`, r).pipe((0, $.W)(e => (this.logger.error("Error adding messages to history", e), (0, j.of)(void 0))))
                    }), (0, D._)(this, "addNewMessagesToHistory", (e, t, i) => {
                        if (!t || 0 === t.length) return (0, j.of)({
                            newMsgs: [],
                            updatedMessages: []
                        });
                        let s = (0, eK.LP)(e),
                            r = [],
                            n = [];
                        return this.getHistoryMetadata(e).pipe((0, z.n)(a => {
                            let o = t.map(e => e.rid);
                            return this.sql.query(`SELECT message, rid FROM messages WHERE unique_id = ? AND rid IN (${o.map(()=>"?").join(",")})`, [s, ...o]).pipe((0, z.n)(o => {
                                let d = new Map;
                                (o ?? []).forEach(e => {
                                    d.set(e.rid, JSON.parse(e.message, tg))
                                });
                                let l = [];
                                if (t.forEach(e => {
                                        if (d.has(e.rid)) {
                                            let t = d.get(e.rid);
                                            t.date = e.date, i && (0, e$.Pz)(i, t) && (t.state = (0, eZ.XK)(e.date, e.state, i)), r.push({
                                                rid: t.rid,
                                                date: t.date,
                                                state: t.state
                                            }), l.push(this.sql.execute("UPDATE messages SET message = ?, date = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(t, th), t.date, s, t.rid]).pipe((0, $.W)(e => (this.logger.error("Error updating message and date", e, t), (0, j.of)(void 0)))))
                                        } else n.push(e)
                                    }), n.length > 0) {
                                    let e = n.map(() => "(?, ?, ?, ?, ?, ?)").join(","),
                                        t = n.flatMap(e => [s, JSON.stringify(e, th), e.rid, e.date, this.getGroupedId(e), this.getQuoteRidDate(e)]);
                                    l.push(this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, grouped_id, quoted_rid_date) VALUES ${e}`, t))
                                }
                                if (a) {
                                    let i;
                                    if (t.length > 0 && (i = t.reduce((e, t) => e.date > t.date ? e : t)), i) {
                                        let {
                                            ranges: s,
                                            loaded: r
                                        } = a, n = s.length > 0 ? (0, to.HV)(s) : void 0;
                                        if (r.end && n && i.date >= n.end) n.end = i.date, s[s.length - 1] = n;
                                        else {
                                            let e = {
                                                start: (0, to.$1)(t).date,
                                                end: i.date
                                            };
                                            a.ranges = (0, tu.$Z)(s, e), r.end = !0
                                        }
                                        l.push(this.updateHistoryMetadata(e, {
                                            ranges: a.ranges,
                                            loaded: r
                                        }))
                                    }
                                } else if (n.length > 0) {
                                    let e = (0, to.$1)(n),
                                        t = (0, to.HV)(n),
                                        i = {
                                            start: e.date,
                                            end: t.date
                                        };
                                    l.push(this.sql.execute("INSERT OR REPLACE INTO history_metadata (unique_id, ranges, loaded_start, loaded_end) VALUES (?, ?, ?, ?)", [s, JSON.stringify([i]), !1, !0]))
                                }
                                return (0, em.p)(l).pipe((0, X.T)(() => ({
                                    newMsgs: n,
                                    updatedMessages: r
                                })))
                            }))
                        }))
                    }), (0, D._)(this, "handleMessageReceivedUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e, s = (0, eK.LP)(t), r = [];
                        return this.sql.query("SELECT message, rid FROM messages WHERE unique_id = ? AND date <= ?", [s, i]).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return (0, j.of)([]);
                            let t = [];
                            return (e.forEach(e => {
                                let i = JSON.parse(e.message, tg);
                                if (i.state !== en.Zu.Error && i.state !== en.Zu.Pending) {
                                    let e = (0, eZ.Wd)(en.Zu.Received, i.state);
                                    i.state !== e && (i.state = e, r.push({
                                        rid: i.rid,
                                        state: i.state
                                    }), t.push(this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(i, th), s, i.rid])))
                                }
                            }), 0 === t.length) ? (0, j.of)(r) : (0, em.p)(t).pipe((0, X.T)(() => r))
                        }))
                    }), (0, D._)(this, "handleReadMessagesUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e, s = (0, eK.LP)(t), r = [];
                        return this.sql.query("SELECT message, rid FROM messages WHERE unique_id = ? AND date <= ?", [s, i]).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return (0, j.of)([]);
                            let t = [];
                            return (e.forEach(e => {
                                let i = JSON.parse(e.message, tg);
                                (0, e$.f2)(i) && (i.state = en.Zu.Read, r.push({
                                    rid: i.rid,
                                    state: i.state
                                }), t.push(this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(i, th), s, i.rid])))
                            }), 0 === t.length) ? (0, j.of)(r) : (0, em.p)(t).pipe((0, X.T)(() => r))
                        }))
                    }), (0, D._)(this, "handleMessageSentUpdate", (e, t) => {
                        let {
                            peer: i,
                            date: s,
                            rid: r
                        } = e, n = (0, eK.LP)(i), a = [];
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [n, r]).pipe((0, z.n)(e => {
                            let o = [];
                            if (e && e.length > 0) {
                                let r = JSON.parse(e[0].message, tg);
                                return (0, e$.Mk)(r) || (r.date = s, r.state = t && (0, e$.Pz)(t, r) ? (0, eZ.XK)(r.date, r.state, t) : (0, eZ.Wd)(en.Zu.Sent, r.state), a.push({
                                    rid: r.rid,
                                    date: r.date,
                                    state: r.state
                                }), o.push(this.sql.execute("UPDATE messages SET message = ?, date = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(r, th), r.date, n, r.rid]).pipe((0, $.W)(e => (this.logger.error("Error updating message and date", e), (0, j.of)(void 0)))))), o.push(this.getHistoryMetadata(i).pipe((0, z.n)(e => {
                                    if (e) {
                                        let {
                                            ranges: t
                                        } = e, r = (0, to.HV)(t);
                                        if (r && r.end < s) return r.end === r.start && (r.start = s), r.end = s, this.updateHistoryMetadata(i, {
                                            ranges: t
                                        })
                                    }
                                    return (0, j.of)(void 0)
                                }))), (0, em.p)(o).pipe((0, X.T)(() => a))
                            }
                            return this.sql.query(`SELECT message FROM messages
           WHERE unique_id = ? AND grouped_id = ?`, [n, r]).pipe((0, z.n)(e => {
                                if (!e || 0 === e.length) return (0, j.of)(a);
                                let r = e.map(e => JSON.parse(e.message, tg)),
                                    d = r.length;
                                return r.forEach((e, i) => {
                                    e.date = s - d + i + 1, e.state = t && (0, e$.Pz)(t, e) ? (0, eZ.XK)(e.date, e.state, t) : (0, eZ.Wd)(en.Zu.Sent, e.state), a.push({
                                        rid: e.rid,
                                        date: e.date,
                                        state: e.state
                                    }), o.push(this.sql.execute("UPDATE messages SET message = ?, date = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(e, th), e.date, n, e.rid]))
                                }), o.push(this.getHistoryMetadata(i).pipe((0, z.n)(e => {
                                    if (e) {
                                        let {
                                            ranges: t
                                        } = e, r = (0, to.HV)(t);
                                        if (r && r.end < s) return r.end === r.start && (r.start = s), r.end = s, this.updateHistoryMetadata(i, {
                                            ranges: t
                                        })
                                    }
                                    return (0, j.of)(void 0)
                                }))), (0, em.p)(o).pipe((0, X.T)(() => a))
                            }))
                        }))
                    }), (0, D._)(this, "handleReactionsUpdate", e => {
                        let {
                            peer: t,
                            reactions: i,
                            rid: s
                        } = e, r = (0, eK.LP)(t), n = [];
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [r, s]).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return (0, j.of)([]);
                            let t = JSON.parse(e[0].message, tg);
                            return t.reactions = [...t.reactions.filter(e => e.code === tp.Cr.View), ...i], n.push({
                                rid: t.rid,
                                reactions: t.reactions
                            }), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(t, th), r, t.rid]).pipe((0, X.T)(() => n))
                        }))
                    }), (0, D._)(this, "deleteHistoryMessages", (e, t) => {
                        let i = (0, eK.LP)(e),
                            s = [];
                        return this.sql.query(`SELECT message, rid, date FROM messages
 WHERE unique_id = ? AND rid IN (${t.map(()=>"?").join(",")})`, [i, ...t]).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return (0, j.of)(s);
                            let r = e.map(e => `${e.rid}:${e.date}`);
                            return this.sql.query(`SELECT message, rid FROM messages
 WHERE unique_id = ? AND quoted_rid_date IN (${r.map(()=>"?").join(",")})`, [i, ...r]).pipe((0, z.n)(e => {
                                let r = [];
                                if (e && e.length > 0) {
                                    let t = e.map(e => e.rid);
                                    r.push(this.sql.execute(`DELETE FROM messages WHERE unique_id = ? AND rid IN (${t.map(()=>"?").join(",")})`, [i, ...t]))
                                }
                                return r.push(this.sql.execute(`DELETE FROM messages WHERE unique_id = ? AND rid IN (${t.map(()=>"?").join(",")})`, [i, ...t])), (0, em.p)(r).pipe((0, X.T)(() => s))
                            }))
                        }))
                    }), (0, D._)(this, "addPendingMessagesToHistory", (e, t) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let i = (0, eK.LP)(e);
                        return this.getHistoryMetadata(e).pipe((0, z.n)(s => {
                            let r = (0, to.$1)(t),
                                n = (0, to.HV)(t),
                                a = [],
                                o = t.map(() => "(?, ?, ?, ?, ?, ?)").join(","),
                                d = t.flatMap(e => [i, JSON.stringify(e, th), e.rid, e.date, this.getGroupedId(e), this.getQuoteRidDate(e)]);
                            if (a.push(this.sql.execute(`INSERT OR REPLACE INTO messages (unique_id, message, rid, date, grouped_id, quoted_rid_date) VALUES ${o}`, d)), s)
                                if (s.loaded.end) {
                                    let t, {
                                        ranges: i
                                    } = s;
                                    if (0 === i.length) t = [{
                                        start: r.date,
                                        end: n.date
                                    }];
                                    else {
                                        t = [...i];
                                        let e = (0, to.HV)(t);
                                        e && e.end < n.date && (t[t.length - 1] = {
                                            ...e,
                                            end: n.date
                                        })
                                    }
                                    a.push(this.updateHistoryMetadata(e, {
                                        ranges: t
                                    }))
                                } else {
                                    let t = {
                                            start: r.date,
                                            end: n.date
                                        },
                                        i = [...s.ranges, t];
                                    a.push(this.updateHistoryMetadata(e, {
                                        ranges: i
                                    }))
                                }
                            else {
                                let e = {
                                    start: r.date,
                                    end: n.date
                                };
                                a.push(this.sql.execute("INSERT OR REPLACE INTO history_metadata (unique_id, ranges, loaded_start, loaded_end) VALUES (?, ?, ?, ?)", [i, JSON.stringify([e]), !1, !0]))
                            }
                            return (0, em.p)(a).pipe((0, X.T)(() => void 0))
                        }))
                    }), (0, D._)(this, "setLocalReactions", (e, t, i, s, r) => {
                        let n = (0, eK.LP)(e),
                            a = [];
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [n, t[t.length - 1]]).pipe((0, z.n)(e => {
                            if (!e || 0 === e.length) return (0, j.of)([]);
                            let o = JSON.parse(e[0].message, tg),
                                d = o.reactions.findIndex(e => e.code === r),
                                l = !0;
                            if (d >= 0 && r) {
                                var u;
                                let e = {
                                        ...o.reactions[d],
                                        users: o.reactions[d].users.filter(e => e !== i),
                                        cardinality: {
                                            value: `${Number((null==(u=o.reactions[d].cardinality)?void 0:u.value)??1)-1}`
                                        }
                                    },
                                    t = [...o.reactions];
                                t[d] = e, o.reactions = t, l = o.reactions[d].code !== s
                            }
                            return l && (o.reactions = (0, e$.Tl)([...o.reactions], s, i)), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(o, th), n, o.rid]).pipe((0, z.n)(() => {
                                let e = t.map(e => (a.push({
                                    rid: e,
                                    reactions: o.reactions
                                }), e !== o.rid) ? this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [n, e]).pipe((0, z.n)(e => {
                                    if (!e || 0 === e.length) return (0, j.of)(void 0);
                                    let t = JSON.parse(e[0].message, tg);
                                    return t.reactions = o.reactions, this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(t, th), n, t.rid])
                                })) : (0, j.of)(void 0));
                                return (0, em.p)(e).pipe((0, X.T)(() => a))
                            }))
                        }))
                    }), (0, D._)(this, "updateReactions", (e, t) => {
                        let i = (0, eK.LP)(e),
                            s = [];
                        if (!t || 0 === t.length) return (0, j.of)([]);
                        let r = t.map(e => this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ? AND date = ?", [i, e.rid, e.date]).pipe((0, z.n)(t => {
                            if (!t || 0 === t.length) return (0, j.of)([]);
                            let r = t.map(t => {
                                let r = JSON.parse(t.message, tg),
                                    n = r.reactions.find(e => e.code === tp.Cr.View);
                                return r.reactions = n ? [...e.reactions, n] : e.reactions, s.push({
                                    rid: r.rid,
                                    reactions: e.reactions
                                }), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(r, th), i, r.rid])
                            });
                            return (0, em.p)(r).pipe((0, X.T)(() => void 0))
                        })));
                        return (0, em.p)(r).pipe((0, X.T)(() => s))
                    }), (0, D._)(this, "updateViews", (e, t) => {
                        let i = (0, eK.LP)(e),
                            s = [];
                        if (!t || 0 === t.length) return (0, j.of)([]);
                        let r = t.map(e => {
                            var t;
                            return (null == (t = e.mId) ? void 0 : t.rid) ? this.sql.query(`SELECT message FROM messages WHERE unique_id = ? AND (rid = ? OR
         quoted_rid_date = ?)`, [i, e.mId.rid, `${e.mId.rid}:${e.mId.date}`]).pipe((0, z.n)(t => {
                                if (!t || 0 === t.length) return (0, j.of)(void 0);
                                let r = t.map(t => {
                                    let r = JSON.parse(t.message, tg),
                                        n = r.reactions.find(e => e.code === tp.Cr.View),
                                        a = {
                                            code: tp.Cr.View,
                                            cardinality: e.views,
                                            users: [],
                                            ext: {}
                                        };
                                    return n ? n.cardinality = e.views : r.reactions.push(a), s.push({
                                        rid: r.rid,
                                        reactions: [a]
                                    }), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(r, th), i, r.rid])
                                });
                                return (0, em.p)(r).pipe((0, X.T)(() => void 0))
                            })) : (0, j.of)(void 0)
                        });
                        return (0, em.p)(r).pipe((0, X.T)(() => s))
                    }), (0, D._)(this, "updateDocumentMessage", (e, t, i) => {
                        let s = (0, eK.LP)(e);
                        return this.sql.query("SELECT message FROM messages WHERE unique_id = ? AND rid = ?", [s, t]).pipe((0, z.n)(e => {
                            var t;
                            if (!e || 0 === e.length) return (0, j.of)(void 0);
                            let r = JSON.parse(e[0].message, tg);
                            return (null == (t = r.message) ? void 0 : t.documentMessage) ? (r.message = {
                                documentMessage: {
                                    ...r.message.documentMessage,
                                    ...i
                                }
                            }, this.logger.info("DebugRefactorHist updateDocumentMessage", (0, eS.dF)(r)), this.sql.execute("UPDATE messages SET message = ? WHERE unique_id = ? AND rid = ?", [JSON.stringify(r, th), s, r.rid]).pipe((0, X.T)(() => r))) : (0, j.of)(void 0)
                        }))
                    }), (0, D._)(this, "updateMessagesRepliesInfo", (e, t, i) => {
                        let s = [],
                            r = i.map(t => this.getHistoryMessage(e, t.rid).pipe((0, z.n)(i => {
                                if (!i || !t.repliesInfo) return (0, j.of)(void 0);
                                i.replies = {
                                    ...i.replies,
                                    ...t.repliesInfo
                                };
                                let r = {
                                    rid: t.rid,
                                    date: t.date,
                                    replies: i.replies
                                };
                                return s.push(r), this.updateHistoryMessage(e, i)
                            })));
                        return (0, em.p)(r).pipe((0, z.n)(() => {
                            let r = i.map(e => e.rid),
                                n = t.filter(e => !r.includes(e.rid)).map(t => this.getHistoryMessage(e, t.rid).pipe((0, z.n)(i => {
                                    if (!i || i.state < en.Zu.Sent) return (0, j.of)(void 0);
                                    i.hasComment = !1;
                                    let r = {
                                        rid: t.rid,
                                        date: t.date,
                                        hasComment: !1
                                    };
                                    return s.push(r), this.updateHistoryMessage(e, i)
                                })));
                            return 0 === n.length ? (0, j.of)(s) : (0, em.p)(n).pipe((0, X.T)(() => s))
                        }))
                    }), (0, D._)(this, "updateMessageThreadReadInfo", (e, t, i) => {
                        let s = [];
                        return this.getHistoryMessage(e, t.rid).pipe((0, z.n)(r => {
                            if (!r) return (0, j.of)([]);
                            r.replies = {
                                ...r.replies ?? (0, eO.S2M)(),
                                ...i
                            };
                            let n = {
                                rid: t.rid,
                                date: t.date,
                                replies: r.replies
                            };
                            return s.push(n), this.updateHistoryMessage(e, r).pipe((0, X.T)(() => s))
                        }))
                    }), (0, D._)(this, "clear", () => (0, em.p)([this.sql.execute("DELETE FROM messages"), this.sql.execute("DELETE FROM history_metadata")]).pipe((0, X.T)(() => void 0))), this.sql = e
                }
            }
            var tf = i(95177),
                tv = i.n(tf);
            class tm {
                setPeerHistory(e, t) {
                    let i = (0, eK.LP)(e);
                    this.historyMessages.set(i, t)
                }
                getLastMessage(e) {
                    let t = this.getPeerHistory(e);
                    return (null == t ? void 0 : t.loaded.end) ? (0, j.of)((0, to.HV)(t.messages)) : (0, j.of)(void 0)
                }
                findFirstMessage(e) {
                    let t = this.getPeerHistory(e);
                    if (!t || 0 === t.messages.length) return (0, j.of)(void 0);
                    let i = t.messages.slice().sort((e, t) => e.date - t.date)[0];
                    return (0, j.of)(i)
                }
                findMessage(e, t) {
                    let i = this.getPeerHistory(e);
                    if (!i) return (0, j.of)(void 0);
                    let s = i.messages.find(e => e.rid === t.rid && e.date === t.date);
                    return (0, j.of)(s)
                }
                findMessages(e, t) {
                    let i = this.getPeerHistory(e);
                    if (!i) return (0, j.of)([]);
                    let s = t.map(e => i.messages.find(t => t.rid === e.rid)).filter(e => void 0 !== e);
                    return (0, j.of)(s)
                }
                updateHistory(e, t, i, s, r, n, a) {
                    if (!r || 0 === r.length) return (0, j.of)(void 0);
                    let o = this.getPeerHistory(e),
                        d = o && (0, to.HV)(o.ranges),
                        l = (0, tu.eL)(i, t, r, s, d),
                        u = n ? r.filter(e => e.date > n) : [],
                        p = !!n,
                        h = !(null == a ? void 0 : a.considerLastVisitedMessage) && p && !!u.length && u.length < tl.k / 2 - 1;
                    if (o) return this.logger.warn(">>> DebugRefactorHist has history", "updateHistory", t, i, l, n, h, null == a ? void 0 : a.considerLastVisitedMessage), l && (o.ranges = (0, tu.$Z)(o.ranges, l)), o.messages = (0, to.wo)(tv()(o.messages, r, e => e.rid), (e, t) => e.date > t.date ? 1 : -1), s === td.C.Open && (h || !p) ? (this.logger.warn(">>> DebugRefactorHist hasLessThanHalfLimitUnread", "updateHistory"), o.loaded = {
                        ...o.loaded,
                        end: !0
                    }) : s === td.C.GoToFirstMessage && (o.loaded = {
                        ...o.loaded,
                        start: !0
                    }), r.length < tl.k && (i === ew.iP.LISTLOADMODE_BACKWARD ? o.loaded = {
                        ...o.loaded,
                        start: !0
                    } : i === ew.iP.LISTLOADMODE_FORWARD && (o.loaded = {
                        ...o.loaded,
                        end: !0
                    })), (0, j.of)({
                        ranges: o.ranges,
                        loaded: o.loaded
                    });
                    if (l) {
                        this.logger.warn(">>> DebugRefactorHist init history", "updateHistory", r.map(eS.dF), s, p, h, l, null == a ? void 0 : a.considerLastVisitedMessage);
                        let t = r.length < tl.k,
                            i = s === td.C.Open && (h || !p),
                            n = {
                                start: t,
                                end: t || i
                            };
                        return this.setPeerHistory(e, {
                            messages: r,
                            ranges: [l],
                            loaded: n
                        }), (0, j.of)({
                            ranges: [l],
                            loaded: n
                        })
                    }
                    return (0, j.of)(void 0)
                }
                constructor() {
                    (0, D._)(this, "isPersistent", !1), (0, D._)(this, "logger", _.U.getLogger(tm.name)), (0, D._)(this, "historyMessages", new Map), (0, D._)(this, "init", () => (0, j.of)(void 0)), (0, D._)(this, "getHistoryMetadata", e => {
                        let t = this.getPeerHistory(e);
                        return t ? (0, j.of)({
                            ranges: t.ranges,
                            loaded: t.loaded
                        }) : (0, j.of)(void 0)
                    }), (0, D._)(this, "updateHistoryMetadata", (e, t) => {
                        let i = this.getPeerHistory(e);
                        return i && (t.ranges && (i.ranges = t.ranges), t.loaded && (i.loaded = {
                            ...i.loaded,
                            ...t.loaded
                        })), (0, j.of)(void 0)
                    }), (0, D._)(this, "getPeerHistory", e => {
                        let t = (0, eK.LP)(e);
                        return this.historyMessages.get(t)
                    }), (0, D._)(this, "deletePeerHistory", e => {
                        let t = (0, eK.LP)(e);
                        return this.historyMessages.delete(t), (0, j.of)(void 0)
                    }), (0, D._)(this, "hasPeerHistory", e => {
                        let t = (0, eK.LP)(e);
                        return (0, j.of)(this.historyMessages.has(t))
                    }), (0, D._)(this, "hasMessage", (e, t) => {
                        let i = this.getPeerHistory(e);
                        return (0, j.of)((null == i ? void 0 : i.messages.some(e => e.rid === t.rid)) ?? !1)
                    }), (0, D._)(this, "invalidateHistories", (e, t) => ((t ? t.map(e => (0, eK.LP)(e)) : Array.from(this.historyMessages.keys())).forEach(t => {
                        if (e && t === (0, eK.LP)(e)) {
                            let t = e ? this.getPeerHistory(e) : void 0;
                            t && (t.loaded.end = !1)
                        } else this.historyMessages.delete(t)
                    }), (0, j.of)(void 0))), (0, D._)(this, "initHistoryWithMessages", (e, t, i) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let s = (0, to.$1)(t),
                            r = (0, to.HV)(t);
                        if (s && r) {
                            let n = [{
                                    start: s.date,
                                    end: r.date
                                }],
                                a = {
                                    start: !0,
                                    end: t.length < i
                                };
                            this.setPeerHistory(e, {
                                messages: t,
                                ranges: n,
                                loaded: a
                            })
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "getHistoryMessage", (e, t) => {
                        let i = this.getPeerHistory(e),
                            s = null == i ? void 0 : i.messages.find(e => e.rid === t);
                        return (0, j.of)(s)
                    }), (0, D._)(this, "getInRangeMessages", (e, t, i, s, r, n) => {
                        let a = this.getPeerHistory(e);
                        if (null == a ? void 0 : a.messages) {
                            let e = (0, tu.VL)(t, i, s, a.messages, tl.k, r, n);
                            if (n && e) {
                                let t = (0, to.HV)(a.ranges),
                                    i = t && (0, tu.r4)(n, t),
                                    r = e.filter(e => e.date > n);
                                if (r.length < tl.k / 2 - 1 && (!a.loaded.end || !i)) {
                                    let t = tl.k / 2 - r.length - 1,
                                        i = tl.k - t;
                                    e = e.slice(-1 * i), _.U.debug(">> DebugRefactorHist should load again", "not enough unread messages", t, s, n, r.map(eS.dF), i, e.map(eS.dF))
                                }
                            }
                            return (0, j.of)(e)
                        }
                        return this.logger.info(">> DebugRefactorHist getInRangeMessages return null", null == a ? void 0 : a.ranges, !!a), (0, j.of)(null)
                    }), (0, D._)(this, "getHistoryRanges", e => {
                        let t = this.getPeerHistory(e);
                        return (0, j.of)(null == t ? void 0 : t.ranges)
                    }), (0, D._)(this, "updateHistoryMessage", (e, t) => {
                        let i = this.getPeerHistory(e);
                        if (i) {
                            let e = i.messages.findIndex(e => e.rid === t.rid); - 1 !== e && (i.messages[e] = t)
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "editHistoryMessage", e => {
                        let {
                            message: t,
                            peer: i,
                            rid: s
                        } = e, r = this.getPeerHistory(i), n = [];
                        if (this.logger.debug("DebugRefactorHist", "UpdateMessages editHistoryMessage", null == r ? void 0 : r.ranges, null == r ? void 0 : r.messages.length), r) {
                            let {
                                messages: i
                            } = r, d = i.findIndex(e => e.rid === s), l = r.messages[d];
                            if (!l) return (0, j.of)([]);
                            void 0 != e.updatedContentTypeMessage && (0, e$.Pw)(e.updatedContentTypeMessage) != (0, e$.Pw)(e.message) ? (l.message = e.updatedContentTypeMessage, l.type = (0, e$.Pw)(e.updatedContentTypeMessage)) : (l.message = t, l.type = (0, e$.Pw)(t), l.editedAt = {
                                value: `${Date.now()}`
                            }), n.push({
                                rid: l.rid,
                                message: l.message,
                                type: l.type,
                                editedAt: l.editedAt
                            });
                            for (let e = d; e < r.messages.length; ++e) {
                                var a, o;
                                let t = r.messages[e];
                                (0, e$.H7)(t) || (null == (o = t.quotedMessage) || null == (a = o.messageId) ? void 0 : a.value) !== l.rid || (t.quotedMessage.quotedMessageContent = l.message, n.push({
                                    rid: t.rid,
                                    quotedMessage: t.quotedMessage
                                }))
                            }
                        }
                        return (0, j.of)(n)
                    }), (0, D._)(this, "addMessagesToHistory", (e, t) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let i = this.getPeerHistory(e);
                        if (i) {
                            let {
                                messages: s
                            } = i;
                            this.logger.warn("addMessagesToHistory to existed History", e.id), t.forEach(e => {
                                s.find(t => t.rid === e.rid) || i.messages.push(e)
                            }), i.messages.sort((e, t) => e.date - t.date)
                        } else {
                            this.logger.warn("addMessagesToHistory by init History", e.id);
                            let i = (0, eK.LP)(e);
                            this.historyMessages.set(i, {
                                messages: t,
                                ranges: [],
                                loaded: {
                                    start: !1,
                                    end: !1
                                }
                            })
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "addNewMessagesToHistory", (e, t, i) => {
                        let s = [],
                            r = [],
                            n = this.getPeerHistory(e);
                        if (n) {
                            let {
                                messages: a
                            } = n;
                            t.forEach(e => {
                                let t = a.find(t => t.rid === e.rid);
                                t ? (t.date = e.date, i && (0, e$.Pz)(i, t) && (t.state = (0, eZ.XK)(e.date, e.state, i)), s.push(t)) : (n.messages.push(e), r.push(e))
                            });
                            let o = a[a.length - 1],
                                {
                                    loaded: d,
                                    ranges: l
                                } = n,
                                u = l.length > 0 ? l[l.length - 1] : void 0;
                            if (d.end && u && o.date >= u.end) this.logger.warn("DebugRefactorHist", "addNewMessagesToHistory loaded end", e.id, u, (0, eS.dF)(o), n.ranges, n.messages.length), u.end = o.date;
                            else if (t.length > 0) {
                                let i = {
                                    start: t[0].date,
                                    end: o.date
                                };
                                n.ranges = (0, tu.$Z)(n.ranges, i), d.end = !0, this.logger.warn("DebugRefactorHist", "addNewMessagesToHistory add range", e.id, u, n.ranges, n.messages.length)
                            }
                        } else if (t.length > 0) {
                            let i = {
                                start: (0, to.$1)(t).date,
                                end: (0, to.HV)(t).date
                            };
                            this.logger.warn("DebugRefactorHist", "addNewMessagesToHistory by init History", e.id, i);
                            let s = (0, eK.LP)(e);
                            this.historyMessages.set(s, {
                                messages: t,
                                ranges: [i],
                                loaded: {
                                    start: !1,
                                    end: !0
                                }
                            }), r.push(...t)
                        }
                        return (0, j.of)({
                            newMsgs: r,
                            updatedMessages: s
                        })
                    }), (0, D._)(this, "handleMessageReceivedUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e, s = this.getPeerHistory(t), r = [];
                        return s && (s.messages = s.messages.map(e => {
                            if (e.date <= i && e.state !== en.Zu.Error && e.state !== en.Zu.Pending) {
                                let t = (0, eZ.Wd)(en.Zu.Received, e.state);
                                e.state !== t && (e.state = t, r.push({
                                    rid: e.rid,
                                    state: e.state
                                }))
                            }
                            return e
                        })), (0, j.of)(r)
                    }), (0, D._)(this, "handleReadMessagesUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e, s = this.getPeerHistory(t), r = [];
                        return s && (s.messages = s.messages.map(e => (e.date <= i && (0, e$.f2)(e) && (e.state = en.Zu.Read, r.push({
                            rid: e.rid,
                            state: e.state
                        })), e))), (0, j.of)(r)
                    }), (0, D._)(this, "handleMessageSentUpdate", (e, t) => {
                        let {
                            peer: i,
                            date: s,
                            rid: r
                        } = e, n = this.getPeerHistory(i), a = [];
                        if (n) {
                            let e = n.messages.find(e => e.rid === r);
                            if (e && !(0, e$.Mk)(e)) e.date = s, e.state = t && (0, e$.Pz)(t, e) ? (0, eZ.XK)(e.date, e.state, t) : (0, eZ.Wd)(en.Zu.Sent, e.state), a.push({
                                rid: e.rid,
                                date: e.date,
                                state: e.state
                            });
                            else {
                                let e = n.messages.filter(e => (0, e$.Mk)(e) && (0, e$._R)(e) === r),
                                    i = e.length;
                                i > 0 && e.forEach((e, r) => {
                                    e.date = s - i + r + 1, e.state = t && (0, e$.Pz)(t, e) ? (0, eZ.XK)(e.date, e.state, t) : (0, eZ.Wd)(en.Zu.Sent, e.state), a.push({
                                        rid: e.rid,
                                        date: e.date,
                                        state: e.state
                                    })
                                })
                            }
                            let {
                                ranges: i
                            } = n, o = (0, to.HV)(i);
                            o && o.end < s && (o.end === o.start && (o.start = s), o.end = s)
                        }
                        return (0, j.of)(a)
                    }), (0, D._)(this, "handleReactionsUpdate", e => {
                        let {
                            peer: t,
                            reactions: i,
                            rid: s
                        } = e, r = this.getPeerHistory(t), n = [];
                        if (r) {
                            let e = r.messages.find(e => e.rid === s);
                            e && (e.reactions = [...e.reactions.filter(e => e.code === tp.Cr.View), ...i], n.push(e))
                        }
                        return (0, j.of)(n)
                    }), (0, D._)(this, "deleteHistoryMessages", (e, t) => {
                        let i = this.getPeerHistory(e),
                            s = [];
                        if (i) {
                            let e = [];
                            i.messages.forEach(i => {
                                var r, n;
                                let a = null == (n = i.quotedMessage) || null == (r = n.messageId) ? void 0 : r.value;
                                !(0, e$.H7)(i) && a && t.includes(a) && (i.quotedMessage.quotedMessageContent = {
                                    deletedMessage: {}
                                }, s.push({
                                    rid: i.rid,
                                    quotedMessage: i.quotedMessage
                                })), t.includes(i.rid) || e.push(i)
                            }), i.messages = e
                        }
                        return (0, j.of)(s)
                    }), (0, D._)(this, "addPendingMessagesToHistory", (e, t) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let i = this.getPeerHistory(e),
                            s = i && 0 === i.ranges.length;
                        if (!i || s) {
                            let i = Math.min(...t.map(e => e.date)),
                                s = Math.max(...t.map(e => e.date));
                            this.setPeerHistory(e, {
                                messages: t,
                                ranges: [{
                                    start: i,
                                    end: s
                                }],
                                loaded: {
                                    start: !1,
                                    end: !0
                                }
                            })
                        } else {
                            let s, r = [...i.messages, ...t],
                                n = (0, to.$1)(t),
                                a = (0, to.HV)(t);
                            if (i.loaded.end) {
                                let {
                                    ranges: e
                                } = i;
                                if (0 === e.length) s = [{
                                    start: n.date,
                                    end: a.date
                                }];
                                else {
                                    s = [...e];
                                    let t = (0, to.HV)(s);
                                    t && t.end < a.date && (s[s.length - 1] = {
                                        ...t,
                                        end: a.date
                                    })
                                }
                            } else s = [...i.ranges, {
                                start: n.date,
                                end: a.date
                            }];
                            this.setPeerHistory(e, {
                                ...i,
                                messages: r,
                                ranges: s
                            })
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "setLocalReactions", (e, t, i, s, r) => {
                        let n = this.getPeerHistory(e),
                            a = [];
                        if (n) {
                            let e = n.messages.find(e => e.rid === t[t.length - 1]);
                            if (e) {
                                let n = e.reactions.findIndex(e => e.code === r),
                                    d = !0;
                                if (n >= 0 && r) {
                                    var o;
                                    let t = {
                                            ...e.reactions[n],
                                            users: e.reactions[n].users.filter(e => e !== i),
                                            cardinality: {
                                                value: `${Number((null==(o=e.reactions[n].cardinality)?void 0:o.value)??1)-1}`
                                            }
                                        },
                                        r = [...e.reactions];
                                    r[n] = t, e.reactions = r, d = e.reactions[n].code !== s
                                }
                                d && (e.reactions = (0, e$.Tl)([...e.reactions], s, i)), t.forEach(t => {
                                    a.push({
                                        rid: t,
                                        reactions: e.reactions
                                    })
                                })
                            }
                        }
                        return (0, j.of)(a)
                    }), (0, D._)(this, "updateReactions", (e, t) => {
                        let i = this.getPeerHistory(e),
                            s = [];
                        return i && t.forEach(e => {
                            let t = i.messages.filter(t => {
                                var i, s;
                                return t.rid === e.rid || (null == (s = t.quotedMessage) || null == (i = s.messageId) ? void 0 : i.value) === e.rid && (0, e$.H7)(t)
                            });
                            t.length && t.forEach(t => {
                                let i = t.reactions.find(e => e.code === tp.Cr.View);
                                t.reactions = i ? [...e.reactions, i] : e.reactions, s.push({
                                    rid: t.rid,
                                    reactions: t.reactions
                                })
                            })
                        }), (0, j.of)(s)
                    }), (0, D._)(this, "updateViews", (e, t) => {
                        let i = this.getPeerHistory(e),
                            s = [];
                        return i && t.forEach(e => {
                            let t = i.messages.find(t => {
                                var i, s, r, n;
                                return t.rid === (null == (i = e.mId) ? void 0 : i.rid) || (null == (r = t.quotedMessage) || null == (s = r.messageId) ? void 0 : s.value) === (null == (n = e.mId) ? void 0 : n.rid)
                            });
                            if (t) {
                                let i = t.reactions.find(e => e.code === tp.Cr.View);
                                i ? i.cardinality = e.views : t.reactions.push({
                                    code: tp.Cr.View,
                                    cardinality: e.views,
                                    users: [],
                                    ext: {}
                                }), s.push({
                                    rid: t.rid,
                                    reactions: t.reactions
                                })
                            }
                        }), (0, j.of)(s)
                    }), (0, D._)(this, "updateDocumentMessage", (e, t, i) => {
                        let s = this.getPeerHistory(e);
                        if (s) {
                            var r;
                            let e = s.messages.find(e => e.rid === t);
                            return (null == e || null == (r = e.message) ? void 0 : r.documentMessage) ? (e.message = {
                                documentMessage: {
                                    ...e.message.documentMessage,
                                    ...i
                                }
                            }, this.logger.info("DebugRefactorHist updateDocumentMessage", (0, eS.dF)(e)), (0, j.of)(e)) : (0, j.of)(void 0)
                        }
                        return (0, j.of)(void 0)
                    }), (0, D._)(this, "updateMessagesRepliesInfo", (e, t, i) => {
                        let s = [],
                            r = i.map(e => ({
                                rid: e.rid,
                                date: e.date
                            }));
                        return this.findMessages(e, r).pipe((0, z.n)(r => {
                            r.forEach(e => {
                                let t = i.find(t => t.rid === e.rid);
                                if (e && (null == t ? void 0 : t.repliesInfo)) {
                                    e.replies = {
                                        ...e.replies,
                                        ...t.repliesInfo
                                    };
                                    let i = {
                                        rid: t.rid,
                                        date: t.date,
                                        replies: e.replies
                                    };
                                    s.push(i)
                                }
                            });
                            let n = i.map(e => e.rid),
                                a = t.filter(e => !n.includes(e.rid));
                            return this.findMessages(e, a).pipe((0, X.T)(e => (e.forEach(e => {
                                e.hasComment = !1;
                                let t = {
                                    rid: e.rid,
                                    date: e.date,
                                    hasComment: !1
                                };
                                s.push(t)
                            }), s)))
                        }))
                    }), (0, D._)(this, "updateMessageThreadReadInfo", (e, t, i) => {
                        let s = [];
                        return this.getHistoryMessage(e, t.rid).pipe((0, z.n)(r => {
                            if (r) {
                                r.replies = {
                                    ...r.replies ?? (0, eO.S2M)(),
                                    ...i
                                };
                                let n = {
                                    rid: t.rid,
                                    date: t.date,
                                    replies: r.replies
                                };
                                return s.push(n), this.updateHistoryMessage(e, r).pipe((0, X.T)(() => s))
                            }
                            return (0, j.of)(s)
                        }))
                    }), (0, D._)(this, "clear", () => (this.historyMessages.clear(), (0, j.of)(void 0)))
                }
            }

            function tk(e) {
                return {
                    rid: e.rid,
                    date: e.date,
                    data: e
                }
            }
            let ty = [{
                name: "by_date",
                keyPath: "date"
            }, {
                name: "by_rid",
                keyPath: "rid"
            }];
            class tb {
                getMetaMutex(e) {
                    let t = (0, eK.LP)(e);
                    return this.metaMutexes.has(t) || this.metaMutexes.set(t, new ez.eu), this.metaMutexes.get(t)
                }
                get metaKV() {
                    return this.db.getKeyValue("_meta", {
                        cache: !1
                    })
                }
                async getPeerIDBStore(e) {
                    let t = (0, eK.LP)(e);
                    return this.db.createKeyValue(`peer_${t}`, {
                        keyPath: ["rid", "date"]
                    }, [...ty])
                }
                getPeerStoreByName(e) {
                    if (this.db.getObjectStoreNames().contains(e)) return this.db.getKeyValue(e, {
                        cache: !1
                    })
                }
                persistMeta(e, t) {
                    let i = (0, eK.LP)(e);
                    return this.metaKV.put({
                        unique_id: i,
                        ranges: t.ranges,
                        loaded_start: t.loaded.start,
                        loaded_end: t.loaded.end
                    })
                }
                putMessages(e, t) {
                    return 0 === t.length ? (0, j.of)(void 0) : (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => e.putItems(t.map(e => [
                        [e.rid, e.date], tk(e)
                    ]))))
                }
                putMessage(e, t) {
                    return (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => e.put(tk(t), [t.rid, t.date])))
                }
                findByRid(e, t) {
                    return e.query("by_rid").equals(t).first()
                }
                deleteByRid(e, t) {
                    return e.query("by_rid", "readwrite").equals(t).delete().pipe((0, X.T)(() => void 0))
                }
                getLastMessage(e) {
                    return this.getHistoryMetadata(e).pipe((0, z.n)(t => (null == t ? void 0 : t.loaded.end) ? (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => e.query("by_date").reverse().limit(1).first()), (0, X.T)(e => null == e ? void 0 : e.data)) : (0, j.of)(void 0)), (0, $.W)(() => (0, j.of)(void 0)))
                }
                findFirstMessage(e) {
                    return (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => e.query("by_date").limit(1).first()), (0, X.T)(e => null == e ? void 0 : e.data), (0, $.W)(() => (0, j.of)(void 0)))
                }
                findMessage(e, t) {
                    return (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => e.get([t.rid, t.date])), (0, X.T)(e => null == e ? void 0 : e.data), (0, $.W)(() => (0, j.of)(void 0)))
                }
                findMessages(e, t) {
                    return 0 === t.length ? (0, j.of)([]) : (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => (0, em.p)(t.map(t => e.get([t.rid, t.date]).pipe((0, $.W)(() => (0, j.of)(void 0)))))), (0, X.T)(e => e.filter(e => void 0 !== e).map(e => e.data)), (0, $.W)(() => (0, j.of)([])))
                }
                queryMessagesInDirection(e, t, i, s) {
                    return s === ew.iP.LISTLOADMODE_BACKWARD ? e.query("by_date").between(i.start, t).reverse().limit(tl.k).toArray().pipe((0, X.T)(e => e.reverse())) : s === ew.iP.LISTLOADMODE_FORWARD ? e.query("by_date").between(t, i.end).limit(tl.k).toArray() : (0, em.p)([e.query("by_date").between(i.start, t).reverse().limit(tl.k).toArray().pipe((0, X.T)(e => e.reverse())), e.query("by_date").between(t, i.end, {
                        includeLower: !1
                    }).limit(tl.k).toArray()]).pipe((0, X.T)(e => {
                        let [t, i] = e;
                        return [...t, ...i]
                    }))
                }
                updateHistory(e, t, i, s, r, n, a) {
                    return r && 0 !== r.length ? this.getHistoryMetadata(e).pipe((0, z.n)(o => {
                        let d = n ? r.filter(e => e.date > n) : [],
                            l = !!n,
                            u = !(null == a ? void 0 : a.considerLastVisitedMessage) && l && !!d.length && d.length < tl.k / 2 - 1;
                        if (o) {
                            let n = (0, to.HV)(o.ranges),
                                a = (0, tu.eL)(i, t, r, s, n),
                                d = o.ranges;
                            a && (d = (0, tu.$Z)(o.ranges, a));
                            let p = {
                                ...o.loaded
                            };
                            s === td.C.Open && (u || !l) ? p.end = !0 : s === td.C.GoToFirstMessage && (p.start = !0), r.length < tl.k && (i === ew.iP.LISTLOADMODE_BACKWARD ? p.start = !0 : i === ew.iP.LISTLOADMODE_FORWARD && (p.end = !0));
                            let h = {
                                ranges: d,
                                loaded: p
                            };
                            return this.logger.debug("updateHistory existing", (0, eK.LP)(e), {
                                date: t,
                                mode: i,
                                updateType: s,
                                msgCount: r.length
                            }, {
                                prevRanges: o.ranges,
                                newRanges: d,
                                prevLoaded: o.loaded,
                                newLoaded: p
                            }), (0, em.p)([this.putMessages(e, r), this.persistMeta(e, h)]).pipe((0, X.T)(() => h))
                        }
                        let p = (0, tu.eL)(i, t, r, s);
                        if (!p) return (0, j.of)(void 0);
                        let h = r.length < tl.k,
                            g = s === td.C.Open && (u || !l),
                            c = {
                                start: h,
                                end: h || g
                            },
                            f = {
                                ranges: [p],
                                loaded: c
                            };
                        return this.logger.debug("updateHistory new", (0, eK.LP)(e), {
                            date: t,
                            mode: i,
                            updateType: s,
                            msgCount: r.length,
                            range: p,
                            loaded: c
                        }), (0, em.p)([this.putMessages(e, r), this.persistMeta(e, f)]).pipe((0, X.T)(() => f))
                    })) : (0, j.of)(void 0)
                }
                constructor(e) {
                    (0, D._)(this, "db", void 0), (0, D._)(this, "isPersistent", !0), (0, D._)(this, "logger", _.U.getLogger(tb.name)), (0, D._)(this, "metaMutexes", new Map), (0, D._)(this, "init", () => (0, j.of)(void 0)), (0, D._)(this, "clear", () => {
                        let e = Array.from(this.db.getObjectStoreNames()).filter(e => e.startsWith("peer_")).map(e => this.db.getKeyValue(e, {
                            cache: !1
                        }).clear());
                        return (0, em.p)([this.metaKV.clear(), ...e]).pipe((0, X.T)(() => void 0))
                    }), (0, D._)(this, "getHistoryMetadata", e => {
                        let t = (0, eK.LP)(e);
                        return this.metaKV.get(t).pipe((0, X.T)(e => {
                            if (e) return {
                                ranges: e.ranges,
                                loaded: {
                                    start: e.loaded_start,
                                    end: e.loaded_end
                                }
                            }
                        }), (0, $.W)(() => (0, j.of)(void 0)))
                    }), (0, D._)(this, "updateHistoryMetadata", (e, t) => (0, eN.v)(() => this.getMetaMutex(e).runExclusive(async () => {
                        let i = await (0, U.s)(this.getHistoryMetadata(e));
                        i && (t.ranges && (i.ranges = t.ranges), t.loaded && (i.loaded = {
                            ...i.loaded,
                            ...t.loaded
                        }), await (0, U.s)(this.persistMeta(e, i)))
                    })).pipe((0, X.T)(() => void 0))), (0, D._)(this, "getHistoryRanges", e => this.getHistoryMetadata(e).pipe((0, X.T)(e => null == e ? void 0 : e.ranges))), (0, D._)(this, "getHistoryMessage", (e, t) => (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => this.findByRid(e, t)), (0, X.T)(e => null == e ? void 0 : e.data), (0, $.W)(() => (0, j.of)(void 0)))), (0, D._)(this, "getInRangeMessages", (e, t, i, s, r, n) => (0, em.p)([(0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => this.queryMessagesInDirection(e, t, i, s)), (0, X.T)(e => e.map(e => e.data))), this.getHistoryMetadata(e)]).pipe((0, X.T)(a => {
                        var o, d, l, u, p, h;
                        let [g, c] = a;
                        if (this.logger.info("DebugGoToMsg getInRangeMessages", JSON.stringify({
                                peerId: (0, eK.LP)(e),
                                date: t,
                                range: i,
                                direction: s,
                                rawQueryCount: g.length,
                                rawFirstDate: null == (o = g[0]) ? void 0 : o.date,
                                rawLastDate: null == (d = g[g.length - 1]) ? void 0 : d.date
                            })), 0 === g.length) return this.logger.debug("getInRangeMessages empty", (0, eK.LP)(e), {
                            date: t,
                            range: i,
                            direction: s
                        }), null;
                        let f = (0, tu.VL)(t, i, s, g, tl.k, r, n);
                        if (this.logger.info("DebugGoToMsg getMessages result", JSON.stringify({
                                getMessagesResultCount: (null == f ? void 0 : f.length) ?? 0,
                                resultFirstDate: null == f || null == (l = f[0]) ? void 0 : l.date,
                                resultLastDate: null == f || null == (u = f[f.length - 1]) ? void 0 : u.date,
                                resultFirstRid: null == f || null == (p = f[0]) ? void 0 : p.rid,
                                resultLastRid: null == f || null == (h = f[f.length - 1]) ? void 0 : h.rid
                            })), n && f && c) {
                            let e = (0, to.HV)(c.ranges),
                                t = e && (0, tu.r4)(n, e),
                                i = f.filter(e => e.date > n);
                            if (i.length < tl.k / 2 - 1 && (!c.loaded.end || !t)) {
                                let e = tl.k / 2 - i.length - 1,
                                    t = tl.k - e;
                                f = f.slice(-1 * t)
                            }
                        }
                        return f
                    }), (0, $.W)(e => (this.logger.error("getInRangeMessages", e), (0, j.of)(null))))), (0, D._)(this, "hasPeerHistory", e => this.getHistoryMetadata(e).pipe((0, X.T)(e => void 0 !== e))), (0, D._)(this, "hasMessage", (e, t) => this.getHistoryMessage(e, t.rid).pipe((0, X.T)(e => void 0 !== e), (0, $.W)(() => (0, j.of)(!1)))), (0, D._)(this, "deletePeerHistory", e => {
                        let t = (0, eK.LP)(e);
                        this.logger.debug("deletePeerHistory", t);
                        let i = [this.metaKV.delete(t)],
                            s = this.getPeerStoreByName(`peer_${t}`);
                        return s && i.push(s.clear()), (0, em.p)(i).pipe((0, X.T)(() => void 0))
                    }), (0, D._)(this, "invalidateHistories", (e, t) => {
                        let i = e ? (0, eK.LP)(e) : void 0;
                        if (this.logger.debug("invalidateHistories", {
                                exceptUid: i,
                                peerCount: null == t ? void 0 : t.length
                            }), !t && !e) return this.clear();
                        if (!t) return this.getHistoryMetadata(e).pipe((0, z.n)(t => this.clear().pipe((0, z.n)(() => t ? this.persistMeta(e, {
                            ...t,
                            loaded: {
                                ...t.loaded,
                                end: !1
                            }
                        }) : (0, j.of)(void 0)))), (0, X.T)(() => void 0));
                        let s = [];
                        return (t.forEach(t => {
                            let r = (0, eK.LP)(t);
                            if (r === i) s.push(this.getHistoryMetadata(e).pipe((0, z.n)(t => t ? this.persistMeta(e, {
                                ...t,
                                loaded: {
                                    ...t.loaded,
                                    end: !1
                                }
                            }) : (0, j.of)(void 0))));
                            else {
                                s.push(this.metaKV.delete(r));
                                let e = this.getPeerStoreByName(`peer_${r}`);
                                e && s.push(e.clear())
                            }
                        }), 0 === s.length) ? (0, j.of)(void 0) : (0, em.p)(s).pipe((0, X.T)(() => void 0))
                    }), (0, D._)(this, "initHistoryWithMessages", (e, t, i) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let s = (0, to.$1)(t),
                            r = (0, to.HV)(t);
                        if (!s || !r) return (0, j.of)(void 0);
                        let n = [{
                                start: s.date,
                                end: r.date
                            }],
                            a = {
                                start: !0,
                                end: t.length < i
                            };
                        return (0, em.p)([this.putMessages(e, t), this.persistMeta(e, {
                            ranges: n,
                            loaded: a
                        })]).pipe((0, X.T)(() => void 0), (0, $.W)(e => (this.logger.error("initHistoryWithMessages", e), (0, j.of)(void 0))))
                    }), (0, D._)(this, "addMessagesToHistory", (e, t) => t && 0 !== t.length ? this.putMessages(e, t) : (0, j.of)(void 0)), (0, D._)(this, "addNewMessagesToHistory", (e, t, i) => t && 0 !== t.length ? (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(s => {
                        let r = t.map(e => e.rid);
                        return (0, em.p)(r.map(e => this.findByRid(s, e).pipe((0, $.W)(() => (0, j.of)(void 0))))).pipe((0, z.n)(r => (0, eN.v)(() => this.getMetaMutex(e).runExclusive(async () => {
                            let n = new Map;
                            r.forEach(e => {
                                e && n.set(e.rid, e.data)
                            });
                            let a = [],
                                o = [],
                                d = [];
                            t.forEach(e => {
                                let t = n.get(e.rid);
                                if (t) {
                                    let r = t.date;
                                    t.date = e.date, i && (0, e$.Pz)(i, t) && (t.state = (0, eZ.XK)(e.date, e.state, i)), a.push({
                                        rid: t.rid,
                                        date: t.date,
                                        state: t.state
                                    }), r !== t.date && d.push(this.deleteByRid(s, t.rid)), d.push(s.put(tk(t), [t.rid, t.date]))
                                } else o.push(e), d.push(s.put(tk(e), [e.rid, e.date]))
                            });
                            let l = await (0, U.s)(this.getHistoryMetadata(e)),
                                u = t.reduce((e, t) => e.date > t.date ? e : t);
                            if (this.logger.debug("addNewMessages", (0, eK.LP)(e), {
                                    newCount: o.length,
                                    updatedCount: a.length,
                                    lastMsgDate: u.date
                                }, l && {
                                    ranges: l.ranges,
                                    loaded: l.loaded
                                }), l) {
                                let {
                                    ranges: t,
                                    loaded: i
                                } = l, s = t.length > 0 ? (0, to.HV)(t) : void 0;
                                if (i.end && s && u.date >= s.end) s.end = u.date, t[t.length - 1] = s;
                                else if (o.length > 0) {
                                    let e = {
                                        start: (0, to.$1)(o).date,
                                        end: u.date
                                    };
                                    l.ranges = (0, tu.$Z)(t, e), l.loaded.end = !0
                                }
                                d.push(this.persistMeta(e, l))
                            } else if (o.length > 0) {
                                let t = {
                                    start: (0, to.$1)(o).date,
                                    end: (0, to.HV)(o).date
                                };
                                d.push(this.persistMeta(e, {
                                    ranges: [t],
                                    loaded: {
                                        start: !1,
                                        end: !0
                                    }
                                }))
                            }
                            return 0 === d.length || await (0, U.s)((0, em.p)(d)), {
                                newMsgs: o,
                                updatedMessages: a
                            }
                        }))))
                    }), (0, $.W)(e => (this.logger.error("addNewMessagesToHistory", e), (0, j.of)({
                        newMsgs: [],
                        updatedMessages: []
                    })))) : (0, j.of)({
                        newMsgs: [],
                        updatedMessages: []
                    })), (0, D._)(this, "addPendingMessagesToHistory", (e, t) => {
                        if (!t || 0 === t.length) return (0, j.of)(void 0);
                        let i = (0, to.$1)(t),
                            s = (0, to.HV)(t);
                        return (0, eN.v)(() => this.getMetaMutex(e).runExclusive(async () => {
                            let r = await (0, U.s)(this.getHistoryMetadata(e)),
                                n = (0, eK.LP)(e),
                                a = [this.putMessages(e, t)];
                            if (r)
                                if (r.loaded.end) {
                                    let t, {
                                        ranges: o
                                    } = r;
                                    if (0 === o.length) t = [{
                                        start: i.date,
                                        end: s.date
                                    }];
                                    else {
                                        t = [...o];
                                        let e = (0, to.HV)(t);
                                        e && e.end < s.date && (t[t.length - 1] = {
                                            ...e,
                                            end: s.date
                                        })
                                    }
                                    this.logger.debug("addPending extend end", n, {
                                        prevRanges: o,
                                        updatedRanges: t
                                    }), a.push(this.persistMeta(e, {
                                        ranges: t,
                                        loaded: r.loaded
                                    }))
                                } else {
                                    let t = {
                                        start: i.date,
                                        end: s.date
                                    };
                                    this.logger.debug("addPending append range", n, {
                                        existingRanges: r.ranges,
                                        newRange: t
                                    }), a.push(this.persistMeta(e, {
                                        ranges: [...r.ranges, t],
                                        loaded: r.loaded
                                    }))
                                }
                            else {
                                let t = {
                                    start: i.date,
                                    end: s.date
                                };
                                this.logger.debug("addPending no metadata", n, t), a.push(this.persistMeta(e, {
                                    ranges: [t],
                                    loaded: {
                                        start: !1,
                                        end: !0
                                    }
                                }))
                            }
                            await (0, U.s)((0, em.p)(a))
                        })).pipe((0, X.T)(() => void 0))
                    }), (0, D._)(this, "updateHistoryMessage", (e, t) => (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => this.deleteByRid(e, t.rid).pipe((0, z.n)(() => e.put(tk(t), [t.rid, t.date])), (0, X.T)(() => void 0))))), (0, D._)(this, "editHistoryMessage", e => {
                        let {
                            message: t,
                            peer: i,
                            rid: s
                        } = e;
                        if (!i) return (0, j.of)([]);
                        let r = [];
                        return (0, Y.H)(this.getPeerIDBStore(i)).pipe((0, z.n)(i => this.findByRid(i, s).pipe((0, z.n)(s => {
                            if (!s) return (0, j.of)([]);
                            let n = s.data;
                            void 0 != e.updatedContentTypeMessage && (0, e$.Pw)(e.updatedContentTypeMessage) != (0, e$.Pw)(e.message) ? (n.message = e.updatedContentTypeMessage, n.type = (0, e$.Pw)(e.updatedContentTypeMessage)) : (n.message = t, n.type = (0, e$.Pw)(t), n.editedAt = {
                                value: `${Date.now()}`
                            }), r.push({
                                rid: n.rid,
                                message: n.message,
                                type: n.type,
                                editedAt: n.editedAt
                            });
                            let a = [i.put(tk(n), [n.rid, n.date])];
                            return i.query("by_date").above(0).toArray().pipe((0, z.n)(e => (e.forEach(e => {
                                var t, s;
                                let o = e.data;
                                (0, e$.H7)(o) || (null == (s = o.quotedMessage) || null == (t = s.messageId) ? void 0 : t.value) !== n.rid || (o.quotedMessage.quotedMessageContent = n.message, r.push({
                                    rid: o.rid,
                                    quotedMessage: o.quotedMessage
                                }), a.push(i.put(tk(o), [o.rid, o.date])))
                            }), 0 === a.length) ? (0, j.of)(r) : (0, em.p)(a).pipe((0, X.T)(() => r))))
                        }))), (0, $.W)(() => (0, j.of)([])))
                    }), (0, D._)(this, "handleMessageReceivedUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e;
                        return t ? (0, Y.H)(this.getPeerIDBStore(t)).pipe((0, z.n)(e => e.query("by_date").below(i).toArray().pipe((0, z.n)(t => {
                            let i = [],
                                s = [];
                            return (t.forEach(t => {
                                let r = t.data;
                                if (r.state !== en.Zu.Error && r.state !== en.Zu.Pending) {
                                    let t = (0, eZ.Wd)(en.Zu.Received, r.state);
                                    r.state !== t && (r.state = t, i.push({
                                        rid: r.rid,
                                        state: r.state
                                    }), s.push(e.put(tk(r), [r.rid, r.date])))
                                }
                            }), 0 === s.length) ? (0, j.of)(i) : (0, em.p)(s).pipe((0, X.T)(() => i))
                        }))), (0, $.W)(() => (0, j.of)([]))) : (0, j.of)([])
                    }), (0, D._)(this, "handleReadMessagesUpdate", e => {
                        let {
                            peer: t,
                            startDate: i
                        } = e;
                        return t ? (0, Y.H)(this.getPeerIDBStore(t)).pipe((0, z.n)(e => e.query("by_date").below(i).toArray().pipe((0, z.n)(t => {
                            let i = [],
                                s = [];
                            return (t.forEach(t => {
                                let r = t.data;
                                (0, e$.f2)(r) && (r.state = en.Zu.Read, i.push({
                                    rid: r.rid,
                                    state: r.state
                                }), s.push(e.put(tk(r), [r.rid, r.date])))
                            }), 0 === s.length) ? (0, j.of)(i) : (0, em.p)(s).pipe((0, X.T)(() => i))
                        }))), (0, $.W)(() => (0, j.of)([]))) : (0, j.of)([])
                    }), (0, D._)(this, "handleMessageSentUpdate", (e, t) => {
                        let {
                            peer: i,
                            date: s,
                            rid: r
                        } = e;
                        return i ? (0, Y.H)(this.getPeerIDBStore(i)).pipe((0, z.n)(e => this.findByRid(e, r).pipe((0, z.n)(n => (0, eN.v)(() => this.getMetaMutex(i).runExclusive(async () => {
                            let a = [],
                                o = [];
                            if (n && !(0, e$.Mk)(n.data)) {
                                let d = n.data,
                                    l = d.date;
                                d.date = s, d.state = t && (0, e$.Pz)(t, d) ? (0, eZ.XK)(d.date, d.state, t) : (0, eZ.Wd)(en.Zu.Sent, d.state), l !== d.date && this.logger.debug("messageSent date changed", (0, eK.LP)(i), {
                                    rid: r,
                                    oldDate: l,
                                    newDate: s
                                }), a.push({
                                    rid: d.rid,
                                    date: d.date,
                                    state: d.state
                                }), l !== d.date && o.push(this.deleteByRid(e, d.rid)), o.push(e.put(tk(d), [d.rid, d.date]));
                                let u = await (0, U.s)(this.getHistoryMetadata(i));
                                if (u) {
                                    let e = (0, to.HV)(u.ranges);
                                    e && e.end < s && (e.end === e.start && (e.start = s), e.end = s, o.push(this.persistMeta(i, u)))
                                }
                                return await (0, U.s)((0, em.p)(o)), a
                            }
                            let d = (await (0, U.s)(e.query("by_date").above(0).toArray()) ?? []).filter(e => (0, e$.Mk)(e.data) && (0, e$._R)(e.data) === r);
                            if (0 === d.length) return a;
                            let l = d.length;
                            d.forEach((i, r) => {
                                let n = i.data;
                                o.push(this.deleteByRid(e, n.rid)), n.date = s - l + r + 1, n.state = t && (0, e$.Pz)(t, n) ? (0, eZ.XK)(n.date, n.state, t) : (0, eZ.Wd)(en.Zu.Sent, n.state), a.push({
                                    rid: n.rid,
                                    date: n.date,
                                    state: n.state
                                }), o.push(e.put(tk(n), [n.rid, n.date]))
                            });
                            let u = await (0, U.s)(this.getHistoryMetadata(i));
                            if (u) {
                                let e = (0, to.HV)(u.ranges);
                                e && e.end < s && (e.end === e.start && (e.start = s), e.end = s, o.push(this.persistMeta(i, u)))
                            }
                            return 0 === o.length || await (0, U.s)((0, em.p)(o)), a
                        }))))), (0, $.W)(() => (0, j.of)([]))) : (0, j.of)([])
                    }), (0, D._)(this, "handleReactionsUpdate", e => {
                        let {
                            peer: t,
                            reactions: i,
                            rid: s
                        } = e;
                        return t ? (0, Y.H)(this.getPeerIDBStore(t)).pipe((0, z.n)(e => this.findByRid(e, s).pipe((0, z.n)(t => {
                            if (!t) return (0, j.of)([]);
                            let s = t.data;
                            return s.reactions = [...s.reactions.filter(e => e.code === tp.Cr.View), ...i], e.put(tk(s), [s.rid, s.date]).pipe((0, X.T)(() => [{
                                rid: s.rid,
                                reactions: s.reactions
                            }]))
                        }))), (0, $.W)(() => (0, j.of)([]))) : (0, j.of)([])
                    }), (0, D._)(this, "deleteHistoryMessages", (e, t) => (this.logger.debug("deleteMessages", (0, eK.LP)(e), t), (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => {
                        let i = [],
                            s = [];
                        return e.query("by_date").above(0).toArray().pipe((0, X.T)(r => {
                            r.forEach(r => {
                                var n, a;
                                let o = r.data;
                                !(0, e$.H7)(o) && (null == (a = o.quotedMessage) || null == (n = a.messageId) ? void 0 : n.value) && t.includes(o.quotedMessage.messageId.value) && (o.quotedMessage.quotedMessageContent = {
                                    deletedMessage: {}
                                }, i.push({
                                    rid: o.rid,
                                    quotedMessage: o.quotedMessage
                                }), s.push(e.put(tk(o), [o.rid, o.date])))
                            })
                        }), (0, $.W)(() => (0, j.of)(void 0))).pipe((0, z.n)(() => (t.forEach(t => s.push(this.deleteByRid(e, t))), 0 === s.length) ? (0, j.of)(i) : (0, em.p)(s).pipe((0, X.T)(() => i))))
                    })))), (0, D._)(this, "setLocalReactions", (e, t, i, s, r) => (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => this.findByRid(e, t[t.length - 1]).pipe((0, z.n)(n => {
                        if (!n) return (0, j.of)([]);
                        let a = n.data,
                            o = a.reactions.findIndex(e => e.code === r),
                            d = !0;
                        if (o >= 0 && r) {
                            var l;
                            let e = {
                                    ...a.reactions[o],
                                    users: a.reactions[o].users.filter(e => e !== i),
                                    cardinality: {
                                        value: `${Number((null==(l=a.reactions[o].cardinality)?void 0:l.value)??1)-1}`
                                    }
                                },
                                t = [...a.reactions];
                            t[o] = e, a.reactions = t, d = a.reactions[o].code !== s
                        }
                        d && (a.reactions = (0, e$.Tl)([...a.reactions], s, i));
                        let u = t.map(e => ({
                                rid: e,
                                reactions: a.reactions
                            })),
                            p = [e.put(tk(a), [a.rid, a.date])];
                        return t.filter(e => e !== a.rid).forEach(t => {
                            p.push(this.findByRid(e, t).pipe((0, z.n)(t => t ? (t.data.reactions = a.reactions, e.put(tk(t.data), [t.data.rid, t.data.date])) : (0, j.of)(void 0))))
                        }), (0, em.p)(p).pipe((0, X.T)(() => u))
                    }))))), (0, D._)(this, "updateReactions", (e, t) => t && 0 !== t.length ? (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => {
                        let i = [],
                            s = t.map(t => this.findByRid(e, t.rid).pipe((0, z.n)(s => {
                                if (!s) return (0, j.of)(void 0);
                                let r = s.data,
                                    n = r.reactions.find(e => e.code === tp.Cr.View);
                                return r.reactions = n ? [...t.reactions, n] : t.reactions, i.push({
                                    rid: r.rid,
                                    reactions: r.reactions
                                }), e.put(tk(r), [r.rid, r.date])
                            }), (0, $.W)(() => (0, j.of)(void 0))));
                        return (0, em.p)(s).pipe((0, X.T)(() => i))
                    })) : (0, j.of)([])), (0, D._)(this, "updateViews", (e, t) => t && 0 !== t.length ? (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => {
                        let i = [],
                            s = t.map(t => {
                                var s;
                                return (null == (s = t.mId) ? void 0 : s.rid) ? this.findByRid(e, t.mId.rid).pipe((0, z.n)(s => {
                                    if (!s) return (0, j.of)(void 0);
                                    let r = s.data,
                                        n = r.reactions.find(e => e.code === tp.Cr.View);
                                    return n ? n.cardinality = t.views : r.reactions.push({
                                        code: tp.Cr.View,
                                        cardinality: t.views,
                                        users: [],
                                        ext: {}
                                    }), i.push({
                                        rid: r.rid,
                                        reactions: r.reactions
                                    }), e.put(tk(r), [r.rid, r.date])
                                }), (0, $.W)(() => (0, j.of)(void 0))) : (0, j.of)(void 0)
                            });
                        return (0, em.p)(s).pipe((0, X.T)(() => i))
                    })) : (0, j.of)([])), (0, D._)(this, "updateDocumentMessage", (e, t, i) => (0, Y.H)(this.getPeerIDBStore(e)).pipe((0, z.n)(e => this.findByRid(e, t).pipe((0, z.n)(t => {
                        var s;
                        if (!(null == t || null == (s = t.data.message) ? void 0 : s.documentMessage)) return (0, j.of)(void 0);
                        let r = t.data;
                        return r.message = {
                            documentMessage: {
                                ...r.message.documentMessage,
                                ...i
                            }
                        }, e.put(tk(r), [r.rid, r.date]).pipe((0, X.T)(() => r))
                    }))), (0, $.W)(() => (0, j.of)(void 0)))), (0, D._)(this, "updateMessagesRepliesInfo", (e, t, i) => {
                        let s = [],
                            r = i.map(t => this.getHistoryMessage(e, t.rid).pipe((0, z.n)(i => i && t.repliesInfo ? (i.replies = {
                                ...i.replies,
                                ...t.repliesInfo
                            }, s.push({
                                rid: t.rid,
                                date: t.date,
                                replies: i.replies
                            }), this.updateHistoryMessage(e, i)) : (0, j.of)(void 0))));
                        return (0, em.p)(r.length > 0 ? r : [(0, j.of)(void 0)]).pipe((0, z.n)(() => {
                            let r = i.map(e => e.rid),
                                n = t.filter(e => !r.includes(e.rid)).map(t => this.getHistoryMessage(e, t.rid).pipe((0, z.n)(i => i ? (i.hasComment = !1, s.push({
                                    rid: t.rid,
                                    date: t.date,
                                    hasComment: !1
                                }), this.updateHistoryMessage(e, i)) : (0, j.of)(void 0))));
                            return 0 === n.length ? (0, j.of)(s) : (0, em.p)(n).pipe((0, X.T)(() => s))
                        }))
                    }), (0, D._)(this, "updateMessageThreadReadInfo", (e, t, i) => this.getHistoryMessage(e, t.rid).pipe((0, z.n)(s => {
                        if (!s) return (0, j.of)([]);
                        s.replies = {
                            ...s.replies ?? (0, eO.S2M)(),
                            ...i
                        };
                        let r = {
                            rid: t.rid,
                            date: t.date,
                            replies: s.replies
                        };
                        return this.updateHistoryMessage(e, s).pipe((0, X.T)(() => [r]))
                    }))), this.db = e
                }
            }
            var tT = i(9888);
            class tM {
                loadHistory(e, t, i, s, r) {
                    return (0, G.UY)(() => this.api.LoadHistory({
                        peer: (0, eK.F8)(e),
                        date: i,
                        limit: r,
                        loadMode: s,
                        optimizations: []
                    }))
                }
                deleteMessages(e, t, i) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    return (0, G.UY)(() => this.api.DeleteMessage({
                        dates: {
                            dates: i
                        },
                        justMine: s,
                        peer: e,
                        rids: t
                    }))
                }
                sendMessage(e, t, i, s, r, n) {
                    return (0, G.UY)(() => this.api.SendMessage({
                        peer: e,
                        rid: i,
                        message: s,
                        quotedMessageReference: r,
                        isOnlyForUser: void 0,
                        exPeer: t,
                        isSilent: !1,
                        threadId: n
                    }))
                }
                sendMultiMediaMessaege(e, t, i, s) {
                    return (0, G.UY)(() => this.api.SendMultiMediaMessage({
                        peer: e,
                        multiMedia: t,
                        repliedMessage: s,
                        groupedId: i
                    }))
                }
                sendInlineCallbackData(e, t, i, s) {
                    return (0, G.UY)(() => this.ketf.SendInlineCallback({
                        peer: e,
                        messageId: {
                            seq: "",
                            date: s,
                            rid: t
                        },
                        data: i
                    }))
                }
                loadReactions(e, t) {
                    return (0, G.UY)(() => this.abacus.LoadReactions({
                        peer: e,
                        mids: t,
                        ignoreCountViews: !0
                    }))
                }
                getShowReactionFlag() {
                    return (0, G.UY)(() => this.abacus.GetShowReactionFlag({}))
                }
                enableShowReactionFlag() {
                    return (0, G.UY)(() => this.abacus.EnableShowReactionFlag({}))
                }
                getMessagesViews(e, t, i) {
                    return (0, G.UY)(() => this.abacus.GetMessagesViews({
                        peer: e,
                        mids: t,
                        increment: i,
                        correctMids: []
                    }))
                }
                getMessagesReactions(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    return (0, G.UY)(() => this.abacus.GetMessagesReactions({
                        originPeer: e,
                        originMids: t,
                        peer: i,
                        mids: s
                    }))
                }
                addReaction(e, t, i, s) {
                    return (0, G.UY)(() => this.abacus.MessageSetReaction({
                        peer: e,
                        code: t,
                        date: s,
                        rid: i
                    }))
                }
                removeReaction(e, t, i, s) {
                    return (0, G.UY)(() => this.abacus.MessageRemoveReaction({
                        peer: e,
                        code: t,
                        date: s,
                        rid: i
                    }))
                }
                getReactionsList(e) {
                    return _.U.warn("GetReaction", e), (0, G.UY)(() => this.abacus.GetMessageReactionsList(e))
                }
                updateMessage(e, t, i) {
                    return (0, G.UY)(() => this.api.UpdateMessage({
                        peer: e,
                        rid: t,
                        updatedMessage: i
                    }))
                }
                forwardMessages(e, t, i, s) {
                    return (0, G.UY)(() => this.api.ForwardMessages({
                        peer: e,
                        rid: t,
                        forwardedMessages: i,
                        groupedId: s ? {
                            value: s
                        } : void 0
                    }))
                }
                getDiscussionMessage(e, t) {
                    return (0, G.UY)(() => this.api.GetDiscussionMessage({
                        peer: e,
                        messageId: t
                    }))
                }
                loadReplies(e, t, i, s, r) {
                    return (0, G.UY)(() => this.api.LoadReplies({
                        peer: e,
                        threadId: t,
                        date: i,
                        loadMode: s,
                        limit: r
                    }))
                }
                getMessagesRepliesInfo(e, t) {
                    return (0, G.UY)(() => this.api.GetMessagesRepliesInfo({
                        peer: e,
                        mids: t
                    }))
                }
                pinMessage(e, t, i) {
                    return (0, G.UY)(() => this.api.PinMessage({
                        peer: e,
                        messageId: t,
                        justMine: i
                    }))
                }
                unPinMessage(e, t, i) {
                    return (0, G.UY)(() => this.api.UnPinMessages({
                        peer: e,
                        messageIds: [t],
                        all: i
                    }))
                }
                loadPinMessages(e) {
                    return (0, G.UY)(() => this.api.LoadPinnedMessages({
                        peer: e
                    }))
                }
                sendDataMiniappCallback(e, t, i) {
                    return (0, G.UY)(() => this.ketf.SendMiniAppData({
                        data: e,
                        botUserId: t,
                        queryId: i
                    }))
                }
                invokeCustomAction(e) {
                    return (0, G.UY)(() => this.ketf.InvokeCustomAction(e))
                }
                fetchProtectedContent(e, t, i) {
                    let s = new tT.BrowserHeaders;
                    return s.append("bale_ramz_token", i), (0, G.UY)(() => this.api.FetchProtectedMessage({
                        messageId: e,
                        peer: t
                    }, s))
                }
                receiveMessageStream(e) {
                    return (0, G.UY)(() => this.messageStream.ReceiveMessageStream(e))
                }
                cancelMessageStream(e) {
                    return (0, G.UY)(() => this.messageStream.CancelMessageStream(e))
                }
                createTopic(e, t) {
                    return (0, G.UY)(() => this.api.CreateTopic({
                        exPeer: e,
                        title: t
                    }))
                }
                getTopics(e, t, i) {
                    return (0, G.UY)(() => this.api.GetTopics({
                        exPeer: e,
                        minDate: t,
                        limit: i
                    }))
                }
                editTopic(e, t, i) {
                    return (0, G.UY)(() => this.api.EditTopic({
                        exPeer: e,
                        topicId: t,
                        title: i
                    }))
                }
                deleteTopic(e, t) {
                    return (0, G.UY)(() => this.api.DeleteTopic({
                        exPeer: e,
                        topicId: t
                    }))
                }
                constructor(e, t, i, s, r) {
                    (0, D._)(this, "ketf", void 0), (0, D._)(this, "api", void 0), (0, D._)(this, "abacus", void 0), (0, D._)(this, "negah", void 0), (0, D._)(this, "messageStream", void 0), this.ketf = e, this.api = t, this.abacus = i, this.negah = s, this.messageStream = r
                }
            }
            var tS = i(60966),
                tw = i(94757),
                tP = i(29728),
                tE = i(54789),
                tI = i(85243);
            class tR {
                bindToThreadUpdates() {
                    return this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.threadMessage || !!e.threadEditMessage || !!e.threadDeleteMessage), (0, W.p)(e => {
                        var t, i, s, r, n;
                        let a = this.ctx.dialogs.getCurrentPeer(),
                            o = this.ctx.dialogs.getCurrentThread();
                        if (!a || !o) return !1;
                        let d = (null == (t = e.threadMessage) ? void 0 : t.peer) ?? (null == (i = e.threadEditMessage) ? void 0 : i.peer) ?? (null == (s = e.threadDeleteMessage) ? void 0 : s.peer);
                        if (!d || (0, eK.LP)(d) != (0, eK.LP)(a)) return !1;
                        if (e.threadMessage || e.threadEditMessage) {
                            let t = (null == (r = e.threadMessage) ? void 0 : r.threadId) ?? (null == (n = e.threadEditMessage) ? void 0 : n.threadId);
                            return (0, tI.oK)(o.messageId, t)
                        }
                        return !0
                    }), (0, tw.H)(e => {
                        if (e.threadDeleteMessage) {
                            let {
                                peer: t,
                                rids: i,
                                dates: s,
                                threadIds: r
                            } = e.threadDeleteMessage, n = new Map;
                            return r.forEach((e, r) => {
                                let a = (0, tI.w9)(e),
                                    o = n.get(a);
                                if (o) {
                                    var d, l;
                                    (null == (d = o.dates) ? void 0 : d.dates) && (null == s || null == (l = s.dates) ? void 0 : l[r]) != void 0 && o.dates.dates.push(s.dates[r]), void 0 != i[r] && o.rids.push(i[r])
                                } else n.set(a, {
                                    ...(0, eA.XC2)(),
                                    peer: t,
                                    threadId: e,
                                    dates: {
                                        dates: (null == s ? void 0 : s.dates[r]) != void 0 ? [s.dates[r]] : []
                                    },
                                    rids: void 0 != i[r] ? [i[r]] : [],
                                    quotedCommentReplySenderIds: []
                                })
                            }), (0, j.of)(...[...n.values()].map(e => ({
                                event: e,
                                kind: "delete"
                            })))
                        }
                        return e.threadMessage ? (0, j.of)({
                            event: e.threadMessage,
                            kind: "new"
                        }) : e.threadEditMessage ? (0, j.of)({
                            event: e.threadEditMessage,
                            kind: "edit"
                        }) : (0, j.of)(void 0)
                    }), (0, W.p)(e => void 0 != e), (0, tE.$)(e => {
                        if (!e) return "";
                        let {
                            peer: t,
                            threadId: i
                        } = e.event;
                        return t && i ? (0, tI.Iu)(t, i) : ""
                    }), (0, J.Z)(e => e.pipe((0, ee.M)(e => {
                        var t, i, s, r, n, a, o;
                        return this.logger.info("comment: weak update received. event = ", null == e || null == (i = e.event) || null == (t = i.peer) ? void 0 : t.id, null == e || null == (r = e.event) || null == (s = r.peer) ? void 0 : s.type, {
                            rid: null == e || null == (n = e.event.threadId) ? void 0 : n.rid,
                            date: null == e || null == (o = e.event) || null == (a = o.threadId) ? void 0 : a.date
                        })
                    }), (0, tw.H)(e => e ? "new" == e.kind ? this.handleThreadNewMessageUpdate(e.event) : "edit" == e.kind ? this.handleThreadEditMessageUpdate(e.event) : "delete" == e.kind ? this.ctx.comment.handleUpdateThreadOnDeleteMessage(e.event) : (0, j.of)(void 0) : (0, j.of)(void 0)))))
                }
                handleThreadNewMessageUpdate(e) {
                    let {
                        peer: t,
                        threadId: i
                    } = e;
                    if (!e || !t) return (0, j.of)(void 0);
                    let s = (0, eo.l5)(t.id),
                        r = (0, e$.RM)([e], t);
                    return this.ctx.entities.loadPeers((0, eQ.cJ)(r)).pipe((0, z.n)(() => {
                        var r;
                        let n = [(0, e$.o6)(e, null == (r = this.ctx.auth.user) ? void 0 : r.id)];
                        return (0, B.h)((0, V.T)(() => !!i, this.ctx.groups.loadGroups([s]).pipe((0, z.n)(s => {
                            let [r] = s, n = null == r ? void 0 : r.linkedGroupPeerId;
                            if (!n) return q.w;
                            let a = (0, el.Yt)(n, er.RK.PEERTYPE_GROUP);
                            return this.ctx.messaging.updateThreadReadInfo(t, a, i, {
                                lastOpenedLastMessageDate: e.date
                            })
                        }), (0, $.W)(() => q.w)).pipe((0, J.Z)(() => q.w)), q.w), this.ctx.comment.handleUpdateThreadOnNewMessages(t, i, n))
                    }), (0, $.W)(t => {
                        var i, s, r;
                        return this.logger.info("comment: failed to handle weak update", null == (i = e.peer) ? void 0 : i.id, null == e || null == (s = e.threadId) ? void 0 : s.rid, null == e || null == (r = e.threadId) ? void 0 : r.date, t), (0, j.of)(void 0)
                    }))
                }
                handleThreadEditMessageUpdate(e) {
                    return this.ctx.comment.getThreads().editHistoryMessage(e).pipe((0, X.T)(t => {
                        if (null == t ? void 0 : t.length) return {
                            type: ep.i.UpdateMessages,
                            peer: e.peer,
                            messages: t
                        }
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", void 0), this.ctx = e, this.logger = t
                }
            }
            class tD {
                bindToEvents() {
                    return this.eventsSubs || (this.eventsSubs = this.handleConfigEvents().pipe((0, ee.M)(e => {
                        e && this.messagingUpdates$.next(e)
                    })).subscribe()), (0, B.h)(this.messagingUpdates$.asObservable(), this.bindToReactionUpdate(), this.threadUpdateHandler.bindToThreadUpdates())
                }
                bindToReactionUpdate() {
                    return this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.messageReaction), (0, J.Z)(e => this.reactionsUpdateHandler(e.messageReaction)))
                }
                applyReducedUpdates(e) {
                    let t = (0, e$.nc)(e),
                        i = [];
                    return (t.forEach((e, t) => {
                        let s = [];
                        if (e.readByMe) {
                            let t = this.handler({
                                messageReadByMe: e.readByMe
                            });
                            t && s.push(t)
                        }
                        if (e.markedAsRead) {
                            let t = this.handler({
                                dialogsMarkedAsRead: e.markedAsRead
                            });
                            t && s.push(t)
                        }
                        if (e.makredAsUnread) {
                            let t = this.handler({
                                dialogsMarkedAsUnread: e.makredAsUnread
                            });
                            t && s.push(t)
                        }
                        if (e.clearChat) {
                            let e = (0, eK.TU)(t);
                            s.push((0, eN.v)(() => this.chatCleared({
                                peer: e
                            })))
                        }
                        if (e.messages) {
                            let i = (0, eK.TU)(t);
                            s.push((0, eN.v)(() => e.messages ? this.newMessagesEventHandler(i, e.messages) : q.w))
                        }
                        if (e.received) {
                            let i = (0, eK.TU)(t),
                                r = this.handler({
                                    messageReceived: {
                                        peer: i,
                                        startDate: e.received,
                                        receivedDate: 0
                                    }
                                });
                            r && s.push(r)
                        }
                        if (e.read) {
                            let i = (0, eK.TU)(t),
                                r = this.handler({
                                    messageRead: {
                                        peer: i,
                                        startDate: e.read,
                                        readDate: 0
                                    }
                                });
                            r && s.push(r)
                        }
                        e.others && e.others.forEach(e => {
                            let t = this.handler(e);
                            t && s.push(t)
                        }), i.push((0, G.Ts)(s).pipe((0, ee.M)(e => this.logger.info("peer events before reducing", e.map(e => {
                            var t, i;
                            return {
                                dialogEvents: null == e || null == (t = e.dialogsEvents) ? void 0 : t.map(e => (0, eS.fB)(e)),
                                messagesEvents: null == e || null == (i = e.messagesEvents) ? void 0 : i.map(e => (0, eS.jR)(e))
                            }
                        }))), (0, X.T)(e => {
                            if (!e) return;
                            let t = [],
                                i = [];
                            e.forEach(e => {
                                (null == e ? void 0 : e.dialogsEvents) && t.push(...e.dialogsEvents), (null == e ? void 0 : e.messagesEvents) && i.push(...e.messagesEvents)
                            });
                            let s = (0, e$.SZ)(t);
                            if (this.logger.warn("reducedDialogEvents", s.map(e => (0, eS.fB)(e))), i.length || s.length) return [...s, ...i]
                        })))
                    }), 0 === i.length) ? (0, j.of)([]) : (0, B.h)(...i).pipe((0, tS.S)(5), (0, X.T)(e => {
                        let t = new Map,
                            i = [];
                        return e.forEach(e => {
                            null == e || e.forEach(e => {
                                e.type === eJ.u3.Update ? e.dialogs.forEach(e => {
                                    e.peer && t.set((0, eK.LP)(e.peer), e)
                                }) : (e.type === eJ.u3.Delete && e.peers.forEach(e => {
                                    t.delete((0, eK.LP)(e))
                                }), i.push(e))
                            })
                        }), t.size > 0 && i.push((0, eJ.X1)(Array.from(t).map(e => {
                            let [, t] = e;
                            return t
                        }))), i
                    }))
                }
                process(e) {
                    return this.convertGroupUpdatesToMessageUpdates(e).pipe((0, J.Z)(e => {
                        let t = (0, e$.xg)(e);
                        return 0 === t.length ? (0, j.of)(void 0) : this.ctx.dialogs.waitForCacheLoadingEnd().pipe((0, z.n)(() => this.applyReducedUpdates(t).pipe((0, ee.M)(e => {
                            0 !== e.length && (this.logger.info("apply reduced updates", e.length), e.forEach(e => this.messagingUpdates$.next(e)))
                        }), (0, ey.u)(void 0), (0, eW.U)(void 0))))
                    }))
                }
                convertGroupUpdatesToMessageUpdates(e) {
                    let t = (0, e$.Y7)(e);
                    return t.length ? this.ctx.users.loadUsers((0, e$.Bh)(t).userOutPeers).pipe((0, X.T)(t => (0, e$.nA)(e, this.ctx.auth.user, t))) : (0, j.of)(e)
                }
                handleConfigEvents() {
                    return this.ctx.settings.bindToSettings().pipe((0, tw.H)(e => this.ctx.dialogs.waitForInvalidationEnd().pipe((0, z.n)(() => this.updateDialogOnDraftChange(e.value)))))
                }
                updateDialogOnDraftChange(e) {
                    return (0, j.of)(e).pipe((0, X.T)(e => e.filter(e => {
                        let [t, i] = e;
                        return t.startsWith(eX.$Z.draft_chat_prefix) && !!i
                    })), (0, W.p)(e => e.length > 0), (0, z.n)(e => {
                        let t = e.map(e => {
                            let [t] = e;
                            return (0, e2.hO)(t)
                        });
                        return this.logger.info("Acquiring dialogs lock for draftChange", t), this.ctx.dialogs.aquireDialogs(t).pipe((0, z.n)(() => this.ctx.dialogs.getPeersDialogs(t)), (0, ee.M)(e => this.logger.warn("Draft Dialogs", e.map(e => e.id))), (0, z.n)(e => (0, ev.x)(...e.map(e => {
                            var t;
                            return (null == (t = e.peer) ? void 0 : t.type) === er.RK.PEERTYPE_GROUP ? this.ctx.groups.findGroup(e.peer.id).pipe((0, W.p)(e => {
                                var t;
                                return null != e && !!e.isMember && !!(null == (t = e.permissions) ? void 0 : t.sendMessage)
                            }), (0, X.T)(() => e)) : (0, j.of)(e)
                        })).pipe((0, tP.$)())), (0, ee.M)(e => {
                            this.logger.warn("Final Draft Dialogs", e.map(e => e.id))
                        }), (0, eF.j)(() => this.ctx.dialogs.releaseDialogs(t)), (0, W.p)(e => e.length > 0), (0, X.T)(e => (0, eJ.X1)(e)))
                    }))
                }
                handler(e) {
                    let t;
                    return (e.message ? t = (0, eN.v)(() => {
                        var t;
                        return this.newMessagesEventHandler(null == (t = e.message) ? void 0 : t.peer, [e.message])
                    }) : e.messageDelete ? t = (0, eN.v)(() => this.deleteMessageUpdateHandler(e.messageDelete)) : e.messageContentChanged ? t = (0, eN.v)(() => this.editMessageUpdateHandler(e.messageContentChanged)) : e.messageRead ? t = (0, eN.v)(() => this.readMessageUpdateHandler(e.messageRead)) : e.messageReceived ? t = (0, eN.v)(() => this.messageReceivedUpdateHandler(e.messageReceived)) : e.messageSent ? t = (0, eN.v)(() => this.messageSentUpdateHandler(e.messageSent)) : e.chatClear ? t = (0, eN.v)(() => this.chatCleared(e.chatClear)) : e.chatDelete ? t = (0, eN.v)(() => this.chatDeleted(e.chatDelete)) : e.messageReadByMe ? t = (0, eN.v)(() => this.readByMeUpdateHandler(e.messageReadByMe)) : e.messageNewReaction ? t = (0, eN.v)(() => this.messageNewReactionsEventHandler(e.messageNewReaction)) : e.mentionReadByMe ? t = (0, eN.v)(() => this.readMentionsUpdateHandler(e.mentionReadByMe)) : e.messageReactionsReadByMe ? t = (0, eN.v)(() => this.readUnreadReactionsByMeUpdateHandler(e.messageReactionsReadByMe)) : e.pinnedDialogsChanged ? t = (0, eN.v)(() => this.pinnedDialogsChangedUpdateHandler(e.pinnedDialogsChanged)) : e.dialogsUnpinned ? t = (0, eN.v)(() => this.updateDialogsUnpinned(e.dialogsUnpinned)) : e.dialogsMarkedAsRead ? t = (0, eN.v)(() => this.markedAsReadUpdateHandler(e.dialogsMarkedAsRead)) : e.dialogsMarkedAsUnread ? t = (0, eN.v)(() => this.markedAsUnReadUpdateHandler(e.dialogsMarkedAsUnread)) : e.messagePinned ? t = (0, eN.v)(() => this.pinnedMessageUpdateHandler(e.messagePinned)) : e.messagesUnPinned ? t = (0, eN.v)(() => this.unPinnedMessageUpdateHandler(e.messagesUnPinned)) : e.topicCreated ? t = (0, eN.v)(() => this.topicCreatedUpdateHandler(e.topicCreated)) : e.topicEdited ? t = (0, eN.v)(() => this.topicEditedUpdateHandler(e.topicEdited)) : e.topicDeleted && (t = (0, eN.v)(() => this.topicDeletedUpdateHandler(e.topicDeleted))), void 0 == t) ? void this.logger.error("MessagingUpdatehandler not found: ", e) : t
                }
                async chatDeleted(e) {
                    if (e.peer) try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer)), this.logger.info("chatDeleted: dialog acquired", e.peer.id), await (0, U.s)(this.histories.deletePeerHistory(e.peer));
                        let t = {
                                ...e,
                                type: ep.i.ClearChat
                            },
                            i = (0, eJ.uF)(e.peer);
                        return await (0, U.s)(this.ctx.dialogs.deleteChatFromLocal(e.peer)), {
                            dialogsEvents: [i],
                            messagesEvents: [t]
                        }
                    } finally {
                        this.logger.info("chatDeleted: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                reactionsUpdateHandler(e) {
                    return this.histories.handleReactionsUpdate(e).pipe((0, z.n)(t => {
                        let i = [];
                        return e.reactions.map(e => e.users.map(e => i.push((0, eu.j)(e)))), this.ctx.users.loadUsers(i).pipe((0, ey.u)({
                            type: ep.i.UpdateMessages,
                            messages: t,
                            peer: e.peer
                        }))
                    }))
                }
                async messageSentUpdateHandler(e) {
                    if (e.peer) try {
                        let t, i, s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let r = await this.findDialog(e.peer);
                        if (this.logger.info("messageSentUpdateHandler: dialog acquired", (0, eS.nM)(r)), r) {
                            if (e.rid === r.rid)(s = {
                                ...r,
                                date: e.date,
                                sortDate: e.date
                            }).unreadCount = 0, s.firstUnreadDate = e.date, s.state = (0, eZ.lq)(s, en.Zu.Sent);
                            else if (e.date > r.date) {
                                this.logger.info("updateDialogsOnMessageSent", "event date > dialog date & not Equal rids", r.message && (0, eQ.jZ)(r.message), r.date, e);
                                let t = await (0, U.s)(this.histories.getHistoryMessage(e.peer, e.rid));
                                s = {
                                    ...r,
                                    date: e.date,
                                    sortDate: e.date
                                }, t && (s = {
                                    ...s,
                                    rid: e.rid,
                                    message: (0, eZ.I4)(t),
                                    senderUid: t.senderUid
                                }), s.unreadCount = 0, s.firstUnreadDate = e.date, s.state = (0, eZ.lq)(s, en.Zu.Sent)
                            } else this.logger.warn(">>> message sent rid and dialog rid doesn't equal");
                            s && (i = (0, eJ.yw)(s))
                        }
                        s || (s = await (0, U.s)(this.ctx.dialogs.getPeerDialog(e.peer, {
                            save: !1
                        })));
                        let n = await (0, U.s)(this.histories.handleMessageSentUpdate(e, s));
                        return await (0, U.s)(this.ctx.comment.getThreads().hasMessage(e.peer, e)) && this.ctx.comment.getThreads().handleMessageSentUpdate(e), n.length && (this.logger.warn("messageSentUpdateHandler", n.map(e => ({
                            rid: e.rid,
                            date: e.date
                        }))), t = {
                            type: ep.i.UpdateMessages,
                            peer: e.peer,
                            messages: n
                        }), s && (await this.updateDialogAndShort(s), this.logger.info("messageSentUpdateHandler", "updated dialog", (0, eS.nM)(s))), (0, e$.v4)(i, t)
                    } finally {
                        this.logger.info("messageSentUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async readByMeUpdateHandler(e) {
                    if (e.peer) try {
                        let s, r;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer)), this.logger.info("readByMeUpdateHandler: dialog acquired", e.peer.id);
                        let n = await this.findDialog(e.peer),
                            a = [];
                        if (this.logger.info("readByMeUpdateHandler", e), n)
                            if (n.firstUnreadDate && n.firstUnreadDate >= e.startDate) this.logger.info("wrong-unread read message by me handler, ignoring update = ", JSON.stringify({
                                dialog: (0, eZ.Dq)(n),
                                event: e
                            }));
                            else {
                                let t = (0, eZ.oP)(e, n),
                                    i = (0, eZ.lP)(e.startDate, n.firstUnreadDate);
                                (s = {
                                    ...n,
                                    unreadCount: t,
                                    firstUnreadDate: i
                                }).firstUnreadDate == s.date && 0 != t && this.logger.warn("wrong-unread dialog has no unread but count is not zero", JSON.stringify({
                                    dialog: (0, eZ.Dq)(n),
                                    newDialog: (0, eZ.Dq)(s),
                                    event: e
                                })), s && a.push((0, eJ.yw)(s))
                            }
                        else {
                            var t, i;
                            let s = await (0, U.s)(this.ctx.dialogs.findDialogShort(e.peer));
                            if (s && !((null == (t = s.firstUnreadDate) ? void 0 : t.value) && e.startDate <= Number(s.firstUnreadDate.value))) {
                                let t = (0, eZ.lP)(e.startDate, (null == (i = s.firstUnreadDate) ? void 0 : i.value) ? Number(s.firstUnreadDate.value) : void 0);
                                r = {
                                    ...s,
                                    counter: 0,
                                    firstUnreadDate: {
                                        value: t.toString()
                                    }
                                }, a.push((0, eJ.c8)(r))
                            }
                        }
                        if (s && (await this.updateDialogAndShort(s), this.logger.info("readByMeUpdateHandler", "newDialog", (0, eS.nM)(s))), r && await (0, U.s)(this.ctx.dialogs.putShortDialog(r)), a.length) return {
                            dialogsEvents: a
                        };
                        return
                    } finally {
                        this.logger.info("readByMeUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async messageNewReactionsEventHandler(e) {
                    var t, i, s;
                    if (!(null == e ? void 0 : e.exPeer) || !(null == (t = e.messageId) ? void 0 : t.date) || !e.messageId.rid) return;
                    let r = (0, eQ.K2)(e.exPeer);
                    try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(r)), this.logger.info("messageNewReactionsEventHandler: dialog acquired", r.id);
                        let t = await this.findDialog(r);
                        if (!t || (null == (i = t.exInfo) ? void 0 : i.exPeerType) === er.m4.EXPEERTYPE_CHANNEL || (null == (s = t.exInfo) ? void 0 : s.exPeerType) === er.m4.EXPEERTYPE_BOT) return;
                        let {
                            unreadReactions: n
                        } = t, a = n ? n.findIndex(t => {
                            var i;
                            return t.rid === (null == (i = e.messageId) ? void 0 : i.rid) && t.date === e.messageId.date
                        }) : -1;
                        if (-1 === a) {
                            let i = {
                                    date: e.messageId.date,
                                    rid: e.messageId.rid,
                                    seq: e.messageId.seq
                                },
                                s = {
                                    ...t,
                                    unreadReactions: n ? [...n, i] : [i]
                                };
                            return await this.updateDialogAndShort(s), this.logger.info("messageNewReactionsEventHandler", "updated dialog", (0, eS.nM)(s)), (0, e$.v4)((0, eJ.yw)(s))
                        }
                        return
                    } finally {
                        this.logger.info("messageNewReactionsEventHandler: releasing dialog", r.id), this.ctx.dialogs.releaseDialog(r)
                    }
                }
                async readUnreadReactionsByMeUpdateHandler(e) {
                    if (!(null == e ? void 0 : e.exPeer)) return;
                    this.logger.info("MentionReadLog", "before update dialog -> readUnreadReactionsByMeUpdate", e.messageId);
                    let t = (0, eQ.K2)(e.exPeer);
                    try {
                        let s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(t)), this.logger.info("readUnreadReactionsByMeUpdateHandler: dialog acquired", t.id);
                        let r = await this.findDialog(t);
                        if (!r) return;
                        let {
                            unreadReactions: n
                        } = r;
                        if (n) {
                            let t = n.filter(t => {
                                var i, s;
                                return t.rid !== (null == (i = e.messageId) ? void 0 : i.rid) || t.date !== (null == (s = e.messageId) ? void 0 : s.date)
                            });
                            s = {
                                ...r,
                                unreadReactions: [...t]
                            }
                        }
                        if (s) {
                            var i;
                            return await this.updateDialogAndShort(s), this.logger.info("ReactionReadLog", "after update dialog -> readUnreadReactionsByMeUpdate", "id: ", null == (i = s.peer) ? void 0 : i.id, "oldDialog: ", r.unreadReactions, "newDialog: ", s.unreadReactions), (0, e$.v4)((0, eJ.yw)(s))
                        }
                        return
                    } finally {
                        this.logger.info("readUnreadReactionsByMeUpdateHandler: releasing dialog", t.id), this.ctx.dialogs.releaseDialog(t)
                    }
                }
                async pinnedDialogsChangedUpdateHandler(e) {
                    let t = e.folderId,
                        i = e.pinnedPeers.map(e => (0, eQ.K2)(e));
                    try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialogs(i)), this.logger.info("pinnedDialogsChangedUpdateHandler: dialogs acquired", i.map(e => e.id));
                        let s = await (0, U.s)(this.ctx.dialogs.getPeersDialogs(i)),
                            r = i.map(e => s.find(t => {
                                var i;
                                return (null == (i = t.peer) ? void 0 : i.id) === e.id
                            })).filter(e => void 0 !== e),
                            n = r.map(e => (0, eS.nM)(e));
                        this.logger.info("pinnedDialogsChangedUpdateHandler", "pinnedDialogsChanged", e, "data", n), await (0, U.s)(this.ctx.dialogs.putPinnedDialogsUidsInDB(r, t));
                        let a = (0, eJ.I4)(r, t);
                        return this.logger.info("in end of dialogpinupdate chage"), {
                            dialogsEvents: [a]
                        }
                    } finally {
                        this.logger.info("pinnedDialogsChangedUpdateHandler: releasing dialogs", i.map(e => e.id)), this.ctx.dialogs.releaseDialogs(i)
                    }
                }
                async updateDialogsUnpinned(e) {
                    let t = e.folderId,
                        i = e.unpinnedPeers.map(e => (0, eQ.K2)(e));
                    try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialogs(i)), this.logger.info("UpdateDialogsUnpinned: dialogs acquired", i.map(e => e.id));
                        let s = await (0, U.s)(this.ctx.dialogs.getPeersDialogs(i));
                        return await (0, U.s)(this.ctx.dialogs.removePinnedDialogsFromDB(s, t)), {
                            dialogsEvents: [(0, eJ.cv)(e.unpinnedPeers, t)]
                        }
                    } finally {
                        this.logger.info("UpdateDialogsUnpinned: releasing dialogs", i.map(e => e.id)), this.ctx.dialogs.releaseDialogs(i)
                    }
                }
                async newMessagesEventHandler(e, t) {
                    try {
                        let s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e));
                        let r = await this.findDialog(e);
                        this.logger.info("newMessagesEventHandler: dialog acquired", {
                            peer: e,
                            dialog: (0, eS.nM)(r)
                        });
                        let n = t,
                            a = [],
                            o = [];
                        if (r) {
                            if (n = n.filter(e => {
                                    var t;
                                    return !((null == (t = r.exInfo) ? void 0 : t.exPeerType) === er.m4.EXPEERTYPE_CHANNEL && (0, e$.jN)(e.message))
                                }), 0 === n.length) return void this.logger.warn("empty messages", n);
                            let a = n[n.length - 1],
                                o = (0, eZ.kT)(n, r);
                            o.date !== a.date && this.logger.info("NewMessagesUpdate >>> newMessage date !== lastMessage date", (0, eS.Ru)(a), (0, eS.Ru)(o));
                            let d = o.rid === r.rid && r.state >= en.Zu.Sent;
                            if (o.date > r.date && !d) {
                                var i;
                                s = {
                                    ...r,
                                    peer: e,
                                    message: (0, eZ.JT)((0, eZ.Dw)(o)),
                                    senderUid: o.senderUid,
                                    date: o.date,
                                    sortDate: o.date,
                                    rid: o.rid,
                                    state: o.rid == r.rid ? r.state : en.Zu.Sent,
                                    isGrouped: (0, e$.Mk)(o),
                                    isMessageForwarded: (0, eZ.Y6)(o),
                                    markedAsUnread: !1
                                };
                                let a = this.ctx.auth.getUserOutPeer().uid,
                                    d = n.filter(e => e.senderUid == a);
                                if (d.length > 0) {
                                    let e = d[d.length - 1];
                                    s.firstUnreadDate = (0, eZ.lP)(e.date, s.firstUnreadDate)
                                }
                                let l = this.ctx.dialogs.getCurrentPeer(),
                                    u = this.ctx.dialogs.getCurrentThread(),
                                    p = l && u && (0, eK.LP)(l) === (0, eK.LP)(e) ? u.messageId : void 0;
                                s.unreadCount = (0, eZ.pz)(e, n, this.ctx.auth.user.id, s, p), s.state = (0, eZ.lq)(s), (null == (i = s.exInfo) ? void 0 : i.exPeerType) === er.m4.EXPEERTYPE_GROUP && (r.unreadMentions ? s.unreadMentions = [...r.unreadMentions, ...(0, e$.OM)(a, t)] : s.unreadMentions = [...(0, e$.OM)(a, t)]), s.firstUnreadDate == s.date && 0 != s.unreadCount ? this.logger.warn("wrong-unread", "new message update", "dialog count != 0 , but firstunreaddate = date", JSON.stringify({
                                    dialog: (0, eS.nM)(r),
                                    newDialog: (0, eZ.Dq)(s)
                                })) : s.firstUnreadDate && s.firstUnreadDate < s.date && 0 === s.unreadCount && this.logger.warn("wrong-unread", "new message update", "dialog count = 0 , but firstunreaddate < date", JSON.stringify({
                                    dialog: (0, eS.nM)(r),
                                    newDialog: (0, eZ.Dq)(s)
                                })), this.logger.warn("Updating local dialog by newMessage", e.id, (0, eS.nM)(s), n.map(e => (0, eS.Ru)(e)))
                            } else this.logger.warn("Last New Message date is less than dialog date or is DuplicateNewMessage", d, n.map(e => (0, eS.Ru)(e)))
                        } else {
                            let t = await (0, U.s)(this.ctx.dialogs.loadPeerDialog(e)),
                                i = t,
                                r = n.find(e => e.message && (0, e$.TA)(e.message));
                            if (!t && r) {
                                let t = await (0, U.s)(this.ctx.groups.loadGroup(e.id)),
                                    s = await (0, U.s)(this.ctx.groups.findFullGroup(t.id)),
                                    n = (0, eZ.M7)((0, eZ.ih)(e, r, null == s ? void 0 : s.exInfo));
                                i = await (0, U.s)(this.ctx.dialogs.updateDialogAndShort(n))
                            }
                            if (!i) return;
                            let a = n[n.length - 1],
                                o = a.date > i.date,
                                d = o ? a.message : i.message,
                                l = o ? a.senderUid : i.senderUid,
                                u = o ? a.date : i.date,
                                p = o ? a.rid : i.rid;
                            (s = {
                                ...i,
                                senderUid: l,
                                message: d && (0, eZ.JT)(d),
                                date: u,
                                sortDate: u,
                                rid: p,
                                isGrouped: (0, e$.Mk)(a),
                                isMessageForwarded: (0, eZ.Y6)(a),
                                markedAsUnread: !1
                            }).firstUnreadDate = (0, eZ.oH)(i) ? i.firstUnreadDate : u
                        }
                        s && (o.push((0, eJ.yw)(s)), this.logger.info("updateDialog called from newMessage", {
                            peer: e,
                            dialog: (0, eS.nM)(s)
                        }));
                        let d = (0, e$.RM)(t, e);
                        this.logger.info("newMessagesEventHandler", t.map(e => (0, eS.Ru)(e))), await (0, U.s)(this.ctx.entities.loadPeers((0, eQ.cJ)(d)));
                        let l = [];
                        t.forEach(e => {
                            var t;
                            l.push((0, e$.o6)(e, null == (t = this.ctx.auth.user) ? void 0 : t.id))
                        }), this.logger.info("newMessagesEventHandler messageContainers", l.map(eS.dF));
                        let u = [];
                        u.push(this.ctx.messaging.downloadExtendedTextForMessages(l, e)), t.forEach((t, i) => {
                            var r, n, a, o, d, u, p;
                            let h = l[i],
                                g = (null == h || null == (r = h.message) ? void 0 : r.streamedMessage) ?? (null == h || null == (o = h.message) || null == (a = o.templateMessage) || null == (n = a.generalMessage) ? void 0 : n.streamedMessage),
                                c = !(null == g || null == (u = g.message) || null == (d = u.longTextMessage) ? void 0 : d.text);
                            if (g && c) {
                                this.logger.info("Detected streamed message, requesting stream chunks", h.rid);
                                let i = {
                                    type: (null == s || null == (p = s.exInfo) ? void 0 : p.exPeerType) ?? e.type,
                                    id: e.id,
                                    accessHash: ""
                                };
                                this.ctx.messaging.startStream(h.rid, t.date, i)
                            }
                        });
                        let p = await (0, U.s)(this.handleSendNewMessagesUpdate(l, e, s));
                        return u.length > 0 && await (0, U.s)((0, em.p)(u).pipe((0, $.W)(e => (this.logger.error("Error executing async requests (download/stream)", e), (0, j.of)(void 0))))), p && a.push(p), s && (await this.updateDialogAndShort(s), this.logger.info("newMessagesEventHandler", "updated dialog", (0, eS.nM)(s))), (0, e$.v4)(o, a)
                    } finally {
                        this.logger.info("newMessagesEventHandler: releasing dialog", e.id), this.ctx.dialogs.releaseDialog(e)
                    }
                }
                async deleteMessageUpdateHandler(e) {
                    if (e.peer) try {
                        var t, i, s;
                        let r, n;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let a = [],
                            o = await this.findDialog(e.peer);
                        this.logger.info("deleteMessageUpdateHandler: dialog acquired", (0, eS.nM)(o));
                        let d = await (0, U.s)(this.histories.deleteHistoryMessages(e.peer, e.rids));
                        if (this.ctx.comment.getThreads().deleteHistoryMessages(e.peer, e.rids), o)
                            if (e.rids.find(e => e === o.rid) && e.peer) {
                                let t = await (0, U.s)(this.histories.getLastMessage(e.peer)),
                                    s = Array.isArray(o.unreadMentions) ? o.unreadMentions.filter(t => {
                                        var i;
                                        let s = e.rids.findIndex(e => e === t.rid);
                                        return -1 === s || !e.rids.includes(t.rid) && (null == (i = e.dates) ? void 0 : i.dates[s]) !== t.date
                                    }) : [];
                                t ? (n = {
                                    ...o,
                                    message: (0, eZ.I4)(t),
                                    date: t.date,
                                    sortDate: t.date,
                                    senderUid: t.senderUid,
                                    rid: t.rid,
                                    isGrouped: (0, e$.Mk)(t),
                                    state: t.state,
                                    unreadCount: (0, eZ.nS)(null == (i = e.dates) ? void 0 : i.dates, o),
                                    isMessageForwarded: (0, e$.H7)(t),
                                    unreadMentions: s
                                }, this.logger.info("deleteMessageUpdateHandler", "update dialog by core messages", JSON.stringify({
                                    dialog: (0, eS.nM)(n),
                                    lastMessage: (0, eS.dF)(t)
                                })), r = (0, eJ.yw)(n)) : r = await (0, U.s)(this.mapLoadPeerDialogToUpdateDialogEvent(e.peer))
                            } else n = {
                                ...o,
                                unreadCount: (0, eZ.nS)(null == (s = e.dates) ? void 0 : s.dates, o)
                            }, this.logger.info("wrong-unread delete message handler = ", JSON.stringify({
                                event: e,
                                dialog: (0, eZ.Dq)(o),
                                newDialog: (0, eZ.Dq)(n)
                            })), r = (0, eJ.yw)(n);
                        else r = await (0, U.s)(this.mapLoadPeerDialogToUpdateDialogEvent(e.peer));
                        return a.push({
                            ...e,
                            type: ep.i.DeleteMessage,
                            dates: null == (t = e.dates) ? void 0 : t.dates,
                            peer: e.peer
                        }), d.length && a.push({
                            type: ep.i.UpdateMessages,
                            peer: e.peer,
                            messages: d
                        }), n && (await this.updateDialogAndShort(n), this.logger.info("deleteMessageUpdateHandler", "updated dialog", (0, eS.nM)(n))), (0, e$.v4)(r, a)
                    } finally {
                        this.logger.info("deleteMessageUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async editMessageUpdateHandler(e) {
                    if (this.logger.info("editMessageUpdateHandler", e.rid, e.date, e.peer), e.peer) try {
                        let t, i, s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let r = await this.findDialog(e.peer);
                        this.logger.info("editMessageUpdateHandler: dialog acquired", (0, eS.nM)(r)), e.rid === (null == r ? void 0 : r.rid) && (s = {
                            ...r,
                            message: e.updatedContentTypeMessage ?? e.message
                        }, i = (0, eJ.yw)(s));
                        let n = await (0, U.s)(this.histories.editHistoryMessage(e));
                        return this.ctx.comment.getThreads().editHistoryMessage(e), (null == n ? void 0 : n.length) && await (0, U.s)(this.ctx.messaging.downloadExtendedTextForMessages(n, e.peer).pipe((0, $.W)(e => (this.logger.error("Error downloading extended text", e), (0, j.of)(void 0))))), (null == n ? void 0 : n.length) && (t = {
                            type: ep.i.UpdateMessages,
                            peer: e.peer,
                            messages: n
                        }), s && (await this.updateDialogAndShort(s), this.logger.info("editMessageUpdateHandler", "updated dialog", (0, eS.nM)(s))), (0, e$.v4)(i, t)
                    } finally {
                        this.logger.info("editMessageUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async markedAsReadUpdateHandler(e) {
                    if (0 === e.peers.length) return;
                    let t = e.peers.map(e => (0, eQ.K2)(e));
                    try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialogs(t));
                        let e = await (0, U.s)(this.ctx.dialogs.findDialogs(t));
                        this.logger.info("markedAsReadUpdateHandler: dialogs acquired", (0, eS.CF)(e));
                        let i = e.map(e => ({
                            ...e,
                            markedAsUnread: !1,
                            firstUnreadDate: e.date,
                            unreadCount: 0
                        }));
                        return await (0, U.s)(this.ctx.dialogs.updateDialogsAndShorts(i)), this.logger.info("markedAsReadUpdateHandler: updated dialogs", (0, eS.CF)(i)), (0, e$.v4)((0, eJ.X1)(i))
                    } finally {
                        this.logger.info("markedAsReadUpdateHandler: releasing dialogs", t.map(e => e.id)), this.ctx.dialogs.releaseDialogs(t)
                    }
                }
                async markedAsUnReadUpdateHandler(e) {
                    if (0 === e.peers.length) return;
                    let t = e.peers.map(e => (0, eQ.K2)(e));
                    try {
                        await (0, U.s)(this.ctx.dialogs.aquireDialogs(t));
                        let e = await (0, U.s)(this.ctx.dialogs.findDialogs(t));
                        this.logger.info("markedAsUnReadUpdateHandler: dialogs acquired", (0, eS.CF)(e));
                        let i = e.map(e => ({
                            ...e,
                            markedAsUnread: !0
                        }));
                        return await (0, U.s)(this.ctx.dialogs.updateDialogsAndShorts(i)), this.logger.debug("markedAsUnReadUpdateHandler: updated dialogs", (0, eS.CF)(i)), (0, e$.v4)((0, eJ.X1)(i))
                    } finally {
                        this.logger.info("markedAsUnReadUpdateHandler: releasing dialogs", t.map(e => e.id)), this.ctx.dialogs.releaseDialogs(t)
                    }
                }
                async pinnedMessageUpdateHandler(e) {
                    if (!e.peer || !e.pinnedMessage) return;
                    let t = this.ctx.messaging.mapApiMessageContainersToMessageContainers([e.pinnedMessage], this.ctx.auth.user.id)[0],
                        i = (0, eQ.K2)(e.peer),
                        s = this.ctx.messaging.updatePinnedMessage(i, t);
                    return (0, e$.v4)(void 0, s)
                }
                async unPinnedMessageUpdateHandler(e) {
                    if (!e.peer || 0 === e.messageIds.length) return;
                    let t = (0, eQ.K2)(e.peer),
                        i = this.ctx.messaging.updateUnPinnedMessages(t, e.messageIds[0], e.all);
                    return (0, e$.v4)(void 0, i)
                }
                mapLoadPeerDialogToUpdateDialogEvent(e) {
                    return this.ctx.dialogs.loadPeerDialog(e).pipe((0, z.n)(e => e ? (0, j.of)((0, eJ.yw)(e)) : (0, j.of)(void 0)), (0, $.W)(e => (this.logger.error("mapLoadPeerDialogToUpdateDialogEvent", e), (0, j.of)(void 0))))
                }
                async findDialog(e) {
                    return (0, U.s)(this.ctx.dialogs.findDialog(e)).catch(e => {
                        this.logger.error("findDialog", e)
                    })
                }
                async updateDialogAndShort(e) {
                    return await (0, U.s)(this.ctx.dialogs.updateDialogAndShort(e))
                }
                async readMentionsUpdateHandler(e) {
                    if (!e.peer) return;
                    let t = (0, eQ.K2)(e.peer);
                    if (e.peer) try {
                        var i;
                        let s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(t));
                        let r = await this.findDialog(t);
                        if (this.logger.info("readMentionsUpdateHandler: dialog acquired", (0, eS.nM)(r)), r && (null == (i = r.exInfo) ? void 0 : i.exPeerType) === er.m4.EXPEERTYPE_GROUP) {
                            let t = null == r ? void 0 : r.unreadMentions;
                            if (t) {
                                let i = t.filter(t => {
                                    var i, s;
                                    return t.rid !== (null == (i = e.messageId) ? void 0 : i.rid) || t.date !== (null == (s = e.messageId) ? void 0 : s.date)
                                });
                                s = {
                                    ...r,
                                    unreadMentions: i
                                }
                            }
                        }
                        if (s) return await this.updateDialogAndShort(s), this.logger.info("MentionRead", "after update dialog -> readMentionsUpdate", (0, eS.nM)(s)), (0, e$.v4)((0, eJ.yw)(s))
                    } finally {
                        this.logger.info("readMentionsUpdateHandler: releasing dialog", t.id), this.ctx.dialogs.releaseDialog(t)
                    }
                }
                async readMessageUpdateHandler(e) {
                    if (e.peer) try {
                        let t, i, s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let r = await this.findDialog(e.peer);
                        this.logger.info("readMessageUpdateHandler: dialog acquired", (0, eS.nM)(r)), r ? (s = {
                            ...r
                        }, e.startDate > (r.outMessageReadDate ?? 0) && (s.outMessageReadDate = e.startDate), e.startDate > (r.outMessageRecievedDate ?? 0) && (s.outMessageRecievedDate = e.startDate), s.state = (0, eZ.lq)(s), i = (0, eJ.yw)(s)) : this.logger.warn("dialog not found on read message update", e.peer);
                        let n = await (0, U.s)(this.histories.handleReadMessagesUpdate(e));
                        return n.length && (this.logger.warn("readMessageUpdateHandler", n.map(e => e.rid)), t = {
                            ...e,
                            type: ep.i.UpdateMessages,
                            peer: e.peer,
                            messages: n
                        }), s && (await this.updateDialogAndShort(s), this.logger.info("MentionRead", "after update dialog -> readMessageUpdate", (0, eS.nM)(s))), (0, e$.v4)(i, t)
                    } finally {
                        this.logger.info("readMessageUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async messageReceivedUpdateHandler(e) {
                    if (e.peer) try {
                        let t, i, s;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let r = await this.findDialog(e.peer);
                        this.logger.info("messageReceivedUpdateHandler: dialog acquired", (0, eS.nM)(r)), r && (s = {
                            ...r
                        }, e.startDate > (r.outMessageRecievedDate ?? 0) && (s.outMessageRecievedDate = e.startDate), s.state = (0, eZ.lq)(s), i = (0, eJ.yw)(s));
                        let n = await (0, U.s)(this.histories.handleMessageReceivedUpdate(e));
                        return n.length && (t = {
                            type: ep.i.UpdateMessages,
                            ...e,
                            peer: e.peer,
                            messages: n
                        }), s && (await this.updateDialogAndShort(s), this.logger.info("messageReceivedUpdateHandler", "updated dialog", (0, eS.nM)(s))), (0, e$.v4)(i, t)
                    } finally {
                        this.logger.info("messageReceivedUpdateHandler: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async chatCleared(e) {
                    if (e.peer) try {
                        let t, i;
                        await (0, U.s)(this.ctx.dialogs.aquireDialog(e.peer));
                        let s = await this.findDialog(e.peer);
                        this.logger.info("chatCleared: dialog acquired", (0, eS.nM)(s)), s || (s = await (0, U.s)(this.ctx.dialogs.loadPeerDialog(e.peer)));
                        let r = Date.now();
                        s && (i = {
                            ...s,
                            unreadCount: 0,
                            firstUnreadDate: r,
                            date: r,
                            message: {
                                textMessage: {
                                    text: "پیام‌های گفت‌وگو پاک شدند!",
                                    mentions: [],
                                    ext: void 0
                                }
                            },
                            isMessageForwarded: !1
                        }, t = (0, eJ.yw)(i)), await (0, U.s)(this.histories.deletePeerHistory(e.peer));
                        let n = {
                            ...e,
                            type: ep.i.ClearChat
                        };
                        return i && (await this.updateDialogAndShort(i), this.logger.debug("chatCleared", "updated dialog", (0, eS.nM)(i))), (0, e$.v4)(t, n)
                    } finally {
                        this.logger.info("chatCleared: releasing dialog", e.peer.id), this.ctx.dialogs.releaseDialog(e.peer)
                    }
                }
                async topicCreatedUpdateHandler(e) {
                    let {
                        exPeer: t,
                        topicId: i,
                        title: s
                    } = e;
                    return t && i ? (this.logger.info("Topic created:", {
                        exPeer: t.id,
                        topicId: {
                            rid: i.rid,
                            date: i.date
                        },
                        title: s
                    }), (0, e$.v4)(void 0, {
                        type: ep.i.TopicCreated,
                        ...e
                    })) : void this.logger.warn("TopicCreated update missing exPeer or topicId", e)
                }
                async topicEditedUpdateHandler(e) {
                    let {
                        exPeer: t,
                        topicId: i,
                        title: s
                    } = e;
                    return t && i ? (this.logger.info("Topic edited:", {
                        exPeer: t.id,
                        topicId: {
                            rid: i.rid,
                            date: i.date
                        },
                        title: s
                    }), (0, e$.v4)(void 0, {
                        type: ep.i.TopicEdited,
                        ...e
                    })) : void this.logger.warn("TopicEdited update missing exPeer or topicId", e)
                }
                async topicDeletedUpdateHandler(e) {
                    let {
                        exPeer: t,
                        topicId: i
                    } = e;
                    return t && i ? (this.logger.info("Topic deleted:", {
                        exPeer: t.id,
                        topicId: {
                            rid: i.rid,
                            date: i.date
                        }
                    }), (0, e$.v4)(void 0, {
                        type: ep.i.TopicDeleted,
                        ...e
                    })) : void this.logger.warn("TopicDeleted update missing exPeer or topicId", e)
                }
                constructor(e, t) {
                    (0, D._)(this, "ctx", void 0), (0, D._)(this, "histories", void 0), (0, D._)(this, "name", "MessagingUpdatesHandler"), (0, D._)(this, "logger", _.U.getLogger("MessagingUpdatesHandler")), (0, D._)(this, "messagingUpdates$", new ek.B), (0, D._)(this, "eventsSubs", void 0), (0, D._)(this, "threadUpdateHandler", void 0), (0, D._)(this, "handleSendNewMessagesUpdate", (e, t, i) => this.ctx.messaging.handleNewMessages(t, e, i).pipe((0, ee.M)(e => this.logger.info("newMessagesEventHandler event", null == e ? void 0 : e.messages.map(e => ({
                        rid: e.rid,
                        date: e.date
                    })))))), this.ctx = e, this.histories = t, this.threadUpdateHandler = new tR(this.ctx, this.logger)
                }
            }
            var t_ = i(33636),
                tU = i(23186),
                tA = i(52236);
            let tC = (e, t) => {
                let {
                    maxInterval: i,
                    maxRetries: s
                } = (null == t ? void 0 : t.mode) === "notifier" ? {
                    maxRetries: 8,
                    maxInterval: 2e3
                } : {
                    maxRetries: 10,
                    maxInterval: 6e4
                };
                return (0, G.UY)(e, {
                    timeOut: null == t ? void 0 : t.timeOut,
                    retry: null == t ? void 0 : t.retry,
                    maxRetries: (null == t ? void 0 : t.maxRetries) ?? s,
                    errorCodes: null == t ? void 0 : t.errorCodes,
                    maxInterval: (null == t ? void 0 : t.maxInterval) ?? i
                })
            };
            class tO {
                startCall(e, t, i, s) {
                    return tC(() => this.api.StartCall({
                        ...(0, t_.hR)(),
                        liveKitCall: {
                            peer: (0, eK.F8)(e),
                            rid: t,
                            video: i,
                            inviteEnable: {
                                value: s
                            }
                        }
                    }), {
                        mode: "notifier"
                    })
                }
                acceptCall(e, t) {
                    return tC(() => this.api.AcceptCall({
                        callId: e,
                        inviteEnable: {
                            value: t
                        }
                    }), {
                        mode: "notifier"
                    })
                }
                discardCall(e, t) {
                    return tC(() => this.api.DiscardCall({
                        callId: e,
                        reason: t,
                        duration: 0,
                        type: tU.JG.CALLTYPE_UNKNOWN
                    }))
                }
                receiveCall(e) {
                    return tC(() => this.api.ReceiveCall({
                        callId: e
                    }))
                }
                bindToEvents() {
                    return this.updates$.asObservable()
                }
                startGroupCall(e) {
                    return tC(() => this.api.StartGroupCall({
                        ...(0, t_.Ot)(),
                        peer: e,
                        randomId: (0, ec.$C)(),
                        video: !1
                    }), {
                        mode: "notifier"
                    })
                }
                startMultiPeerCall(e) {
                    return tC(() => this.api.StartGroupCall({
                        ...(0, t_.Ot)(),
                        randomId: (0, ec.$C)(),
                        mode: tU.GJ.CALLMODE_MULTIPEER,
                        invitees: e
                    }), {
                        mode: "notifier"
                    })
                }
                joinGroupCall(e, t) {
                    return tC(() => this.api.JoinGroupCall({
                        callId: e,
                        name: t ? {
                            text: t
                        } : void 0
                    }), {
                        mode: "notifier"
                    })
                }
                leaveGroupCall(e, t) {
                    return tC(() => this.api.LeaveGroupCall({
                        callId: e,
                        end: t
                    }))
                }
                getGroupCall(e) {
                    return tC(() => this.api.GetGroupCall({
                        peer: e
                    }))
                }
                submitCallFeedback(e) {
                    let {
                        callId: t,
                        rate: i,
                        userOpinion: s,
                        client: r,
                        clientVersion: n,
                        isVideo: a,
                        operator: o,
                        browser: d,
                        isStream: l
                    } = e;
                    return tC(() => this.api.SubmitCallFeedback({
                        callId: t,
                        client: r,
                        clientVersion: {
                            text: n
                        },
                        rate: i,
                        extraFields: {
                            is_video: a ? "video" : "audio",
                            operator: o,
                            browser: d
                        },
                        userOpinion: {
                            text: s
                        },
                        isStream: {
                            value: l
                        }
                    }))
                }
                inviteToCall(e, t) {
                    return tC(() => this.api.InviteToCall({
                        ...(0, t_.VQ)(),
                        callId: e,
                        invitees: t
                    }))
                }
                getMeetWssURL() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return this.api.GetWssURL({
                        callId: e
                    })
                }
                getCallLogs(e, t, i) {
                    return tC(() => this.api.GetCallLogs({
                        ...(0, t_.Yn)(),
                        pageSize: {
                            value: t.toString()
                        },
                        pageNumber: {
                            value: e.toString()
                        },
                        beforeDate: i ? {
                            value: i
                        } : void 0
                    }))
                }
                deleteCallLogs(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return tC(() => this.api.DeleteCallLogs({
                        ...(0, t_.VI)(),
                        callIds: e.map(e => ({
                            value: e
                        })),
                        all: t,
                        invert: !1
                    }))
                }
                getOngoingCalls(e, t) {
                    return tC(() => this.api.GetOngoingCalls({
                        pageNumber: e ? {
                            value: e.toString()
                        } : void 0,
                        pageSize: t ? {
                            value: t.toString()
                        } : void 0
                    }))
                }
                muteParticipant(e, t, i) {
                    return tC(() => this.api.MuteParticipant({
                        callId: e,
                        identity: t,
                        trackId: i,
                        revokePublishPermission: !1
                    }), {
                        mode: "notifier"
                    })
                }
                removeParticipant(e, t) {
                    return tC(() => this.api.RemoveParticipant({
                        callId: e,
                        identity: t,
                        blockFromCall: !1
                    }), {
                        mode: "notifier"
                    })
                }
                generateCallLink(e, t) {
                    return tC(() => this.api.GenerateCallLink({
                        isPublic: e,
                        callId: t ? {
                            value: t
                        } : void 0
                    }), {
                        mode: "notifier"
                    })
                }
                getCallLinkDetails(e) {
                    return tC(() => this.api.GetCallLinkDetails({
                        session: e
                    }), {
                        mode: "notifier"
                    })
                }
                setLinkTitle(e, t) {
                    return tC(() => this.api.SetLinkTitle({
                        callId: {
                            value: e
                        },
                        title: t,
                        linkUrl: void 0
                    }), {
                        mode: "notifier"
                    })
                }
                askToJoinCall(e, t) {
                    return tC(() => this.api.AskToJoinCall({
                        callId: e,
                        name: t
                    }), {
                        mode: "notifier"
                    })
                }
                answerCallJoinRequest(e, t, i) {
                    return tC(() => this.api.AnswerCallJoinRequest({
                        callId: e,
                        isAllowed: i,
                        requesterIdentifier: t
                    }), {
                        mode: "notifier"
                    })
                }
                startRecording(e, t, i) {
                    return tC(() => this.api.StartRecording({
                        callId: e,
                        quality: t,
                        layout: i
                    }), {
                        mode: "notifier"
                    })
                }
                stopRecording(e) {
                    return tC(() => this.api.StopRecording({
                        callId: e
                    }), {
                        mode: "notifier"
                    })
                }
                takeCallAction(e, t, i) {
                    return tC(() => this.api.TakeCallAction({
                        callId: e,
                        lowerHand: t,
                        raiseHand: i
                    }), {
                        mode: "notifier"
                    })
                }
                sendFanoosEvent(e, t, i) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return (0, G.UY)(() => this.api.SendFanoosEvent({
                        date: i,
                        eventName: e,
                        items: t ? {
                            items: t.map(e => ({
                                key: e.key,
                                value: (0, tA.C)(e.value)
                            }))
                        } : void 0
                    }), {
                        timeOut: 3e4,
                        retry: s
                    })
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "updates$", new ek.B), this.api = e
                }
            }
            var tG = i(78032);
            class tx {
                startRecording(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.api.startRecording(e, t, i)
                }
                stopRecording(e) {
                    return this.api.stopRecording(e)
                }
                takeCallAction(e, t, i) {
                    return this.api.takeCallAction(e, t, i)
                }
                process(e) {
                    let t = [];
                    for (let i of e)(0, tG.o)(i) && t.push((0, j.of)(i).pipe((0, ee.M)(e => {
                        this.meetUpdates$.next(e)
                    }), (0, ey.u)(void 0)));
                    if (0 !== t.length) return (0, ev.x)(...t).pipe((0, ey.u)(void 0))
                }
                constructor(e, t) {
                    var i = this;
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "name", "MeetModule"), (0, D._)(this, "meetUpdates$", new ek.B), (0, D._)(this, "logger", _.U.getLogger("MeetModule")), (0, D._)(this, "startCall", (e, t, i, s) => this.api.startCall(e, t, i, s)), (0, D._)(this, "acceptCall", (e, t) => this.api.acceptCall(e, t)), (0, D._)(this, "discardCall", (e, t) => this.api.discardCall(e, t)), (0, D._)(this, "receiveCall", e => this.api.receiveCall(e)), (0, D._)(this, "bindToEvent", () => (0, B.h)(this.ctx.events.bindToWeakEvents().pipe((0, W.p)(tG.o)), this.meetUpdates$.asObservable())), (0, D._)(this, "startGroupCall", e => this.api.startGroupCall(e)), (0, D._)(this, "startMultiPeerCall", e => this.api.startMultiPeerCall(e)), (0, D._)(this, "joinGroupCall", (e, t) => this.api.joinGroupCall(e, t)), (0, D._)(this, "leaveGroupCall", (e, t) => this.api.leaveGroupCall(e, t)), (0, D._)(this, "getGroupCall", e => this.api.getGroupCall(e)), (0, D._)(this, "submitCallFeedback", e => this.api.submitCallFeedback(e)), (0, D._)(this, "inviteToCall", (e, t) => this.api.inviteToCall(e, t)), (0, D._)(this, "getMeetWssURL", e => this.api.getMeetWssURL(e)), (0, D._)(this, "getCallLogs", (e, t, i) => this.api.getCallLogs(e, t, i)), (0, D._)(this, "deleteCallLogs", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return i.api.deleteCallLogs(e, t)
                    }), (0, D._)(this, "getOngoingCalls", (e, t) => this.api.getOngoingCalls(e, t)), (0, D._)(this, "muteParticipant", (e, t, i) => this.api.muteParticipant(e, t, i)), (0, D._)(this, "removeParticipant", (e, t) => this.api.removeParticipant(e, t)), (0, D._)(this, "generateCallLink", (e, t) => this.api.generateCallLink(e, t)), (0, D._)(this, "getCallLinkDetails", e => this.api.getCallLinkDetails(e)), (0, D._)(this, "setLinkTitle", (e, t) => this.api.setLinkTitle(e, t)), (0, D._)(this, "askToJoinCall", (e, t) => this.api.askToJoinCall(e, t)), (0, D._)(this, "answerCallJoinRequest", (e, t, i) => this.api.answerCallJoinRequest(e, t, i)), (0, D._)(this, "sendFanoosEvent", (e, t, i, s) => {
                        let r;
                        return t && (r = Object.entries(t).map(e => ({
                            key: String(e[0]),
                            value: e[1]
                        }))), this.api.sendFanoosEvent(e, r, i, s).pipe((0, $.W)(e => (this.logger.error("fanoosEvent", e), q.w)))
                    }), this.api = e, this.ctx = t
                }
            }
            var tL = i(68647),
                tN = i(49621);
            let tq = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.groupPeer && er.wX.encode(e.groupPeer, t.uint32(10).fork()).join(), 0 !== e.seq && t.uint32(16).int32(e.seq), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                groupPeer: void 0,
                                seq: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupPeer = er.wX.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.seq = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                tF = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.update && tN.xC.encode(e.update, t.uint32(10).fork()).join(), 0 !== e.date && t.uint32(16).int64(e.date), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                update: void 0,
                                date: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.update = tN.xC.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = globalThis.Number(i.int64().toString());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                tH = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (void 0 !== e.state && tq.encode(e.state, t.uint32(10).fork()).join(), e.updates)) tN.xC.encode(i, t.uint32(18).fork()).join();
                        for (let i of (!1 !== e.needMore && t.uint32(24).bool(e.needMore), void 0 !== e.tooLong && tL._t.encode({
                                value: e.tooLong
                            }, t.uint32(34).fork()).join(), e.newUpdates)) tF.encode(i, t.uint32(42).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                state: void 0,
                                updates: [],
                                needMore: !1,
                                tooLong: void 0,
                                newUpdates: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.state = tq.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.updates.push(tN.xC.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.needMore = i.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.tooLong = tL._t.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.newUpdates.push(tF.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };

            function tV() {
                return {
                    groupPeers: [],
                    optimizations: []
                }
            }
            let tB = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.groupPeers) er.wX.encode(i, t.uint32(10).fork()).join();
                        for (let i of (t.uint32(18).fork(), e.optimizations)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = tV();
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupPeers.push(er.wX.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                tj = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.seqs) tq.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                seqs: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.seqs.push(tq.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                tY = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.states) tq.encode(i, t.uint32(10).fork()).join();
                        for (let i of (t.uint32(18).fork(), e.optimizations)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                states: [],
                                optimizations: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.states.push(tq.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                tW = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.updates) tH.encode(i, t.uint32(10).fork()).join();
                        for (let i of e.usersRefs) er.Uw.encode(i, t.uint32(18).fork()).join();
                        for (let i of e.groupsRefs) er.wX.encode(i, t.uint32(26).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                updates: [],
                                usersRefs: [],
                                groupsRefs: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.updates.push(tH.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.usersRefs.push(er.Uw.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.groupsRefs.push(er.wX.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class tz {
                GetRoutesStates(e, t) {
                    return this.rpc.unary(tK, e, t)
                }
                GetDiff(e, t) {
                    return this.rpc.unary(tJ, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetRoutesStates = this.GetRoutesStates.bind(this), this.GetDiff = this.GetDiff.bind(this)
                }
            }
            let t$ = {
                    serviceName: "bale.ghasedak.v1.GhasedakService"
                },
                tK = {
                    methodName: "GetRoutesStates",
                    service: t$,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return tB.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = tj.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                tJ = {
                    methodName: "GetDiff",
                    service: t$,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return tY.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = tW.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            var tZ = i(29456);
            let tX = [er.Ji.UPDATEOPTIMIZATION_STRIP_MESSAGES, er.Ji.UPDATEOPTIMIZATION_STRIP_TOTAL_UPDATES, er.Ji.UPDATEOPTIMIZATION_WITH_DATE];
            class tQ {
                getGroupStates() {
                    return (0, G.UY)(() => this.ghasedak.GetRoutesStates(tV()), {
                        timeOut: 5e3
                    }).pipe((0, X.T)(e => e.seqs.map(e => {
                        var t;
                        return {
                            routeId: (null == (t = e.groupPeer) ? void 0 : t.groupId) || 0,
                            seq: e.seq
                        }
                    })))
                }
                getDifference(e) {
                    return (0, eN.v)(() => this.ghasedak.GetDiff({
                        optimizations: tX,
                        states: e.map(e => {
                            let [t, i] = e;
                            return {
                                groupPeer: {
                                    groupId: i.routeId,
                                    accessHash: ""
                                },
                                seq: i.seq
                            }
                        })
                    })).pipe((0, X.T)(e => {
                        let t = {};
                        return e.updates.forEach(e => {
                            var i;
                            (null == (i = e.state) ? void 0 : i.groupPeer) && (t[e.state.groupPeer.groupId] = {
                                lastSequence: e.state.seq,
                                updates: e.newUpdates ?? [],
                                needMore: e.needMore,
                                tooLong: e.tooLong
                            })
                        }), {
                            groupEvents: t,
                            usersRefs: e.usersRefs,
                            groupsRefs: e.groupsRefs
                        }
                    }))
                }
                subscribeToUpdates() {
                    return new ex.c(e => {
                        let t = this.subscriptionId++,
                            i = t => {
                                this.logger.error("Stream error", t), e.error(t)
                            },
                            s = () => {
                                this.logger.warn("Stream end!"), e.error({
                                    code: tZ.StatusCode.UNAVAILABLE,
                                    message: "stream_end"
                                })
                            },
                            r = this.api.SubscribeToUpdates({
                                isMtProto: !1
                            }).subscribe({
                                complete: s,
                                error: i,
                                next: i => {
                                    e.next({
                                        ...i,
                                        subscriptionId: t
                                    })
                                }
                            });
                        return {
                            unsubscribe: () => {
                                this.logger.info("Cancel subscribe to updates, ID: ", t), r.unsubscribe()
                            }
                        }
                    })
                }
                subscribeToThreadUpdates(e, t) {
                    return (0, G.UY)(() => this.api.SubscribeToThreadUpdates({
                        peer: e,
                        threadId: t
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ghasedak", void 0), (0, D._)(this, "logger", _.U.getLogger("EventsApi")), (0, D._)(this, "subscriptionId", 0), this.api = e, this.ghasedak = t
                }
            }
            var t0 = i(88228),
                t1 = i(54687),
                t2 = i(84585),
                t3 = i(36616);
            (r = m || (m = {})).Connecting = "Connecting", r.Syncing = "Syncing", r.Synced = "Synced";
            var t4 = i(19625);

            function t5(e) {
                return (0, ee.M)({
                    subscribe: e
                })
            }
            let t7 = {
                initialInterval: 1e3,
                maxRetries: 1e4,
                maxInterval: 5e3
            };
            class t8 {
                get syncing() {
                    return this.isSyncing$
                }
                removeGroupState(e) {
                    return this.sequences.delete(e).pipe((0, ee.M)(() => this.logger.warn("deleted", e)))
                }
                initialGetDiff() {
                    let e = this.ctx.perf.newTrace("initial_get_diff");
                    return this.getDifferences(!0).pipe(t5(() => {
                        e.start()
                    }), this.onGetDiffComplete(), (0, ee.M)(() => {
                        e.stop()
                    }))
                }
                startFillingSmallHole(e) {
                    this.eventsQueue.push(e), this.smallHoleSubject.next({
                        routeId: e.routeId,
                        seq: e.sequence
                    })
                }
                clearSmallHole() {
                    this.smallHoleSubject.next(null)
                }
                loadApplyByRouteParallelFlag() {
                    return this.hasLoadedApplyByRouteParallelFlag ? (0, j.of)(void 0) : this.ctx.settings.isFeatureActive(eX.TO.ApplyEventsByRouteInParallel).pipe((0, eq.$)(), (0, ee.M)(e => {
                        this.applyByRouteParallelEnabled = e, this.hasLoadedApplyByRouteParallelFlag = !0, this.logger.info("ApplyEventsByRouteInParallel", e)
                    }), (0, $.W)(e => (this.logger.error("ApplyEventsByRouteInParallel flag error", e), this.applyByRouteParallelEnabled = !1, this.hasLoadedApplyByRouteParallelFlag = !0, (0, j.of)(!1))), (0, ey.u)(void 0))
                }
                subscribe() {
                    return this.debugConnection.pipe((0, ee.M)(() => this.logger.warn("Connection")), (0, z.n)(e => e ? this.api.subscribeToUpdates() : (0, eI.$)(() => "Connection Failed")))
                }
                requestGetDiff(e, t) {
                    let i = t ? this.ctx.perf.newTrace("get_diff_request") : void 0;
                    return (0, V.T)(() => this.debugConnection.value, this.api.getDifference(e).pipe((0, t0.w)(5e3), t5(() => {
                        null == i || i.start()
                    }), (0, ee.M)(() => {
                        null == i || i.stop()
                    }), (0, J.Z)(e => this.ctx.entities.loadUsersGroups(e.usersRefs, e.groupsRefs).pipe((0, ey.u)(e)))), (0, eI.$)(() => "Connection Failed"))
                }
                getSmallHole() {
                    return this.smallHoleSubject.value
                }
                getSeq(e) {
                    return this.sequences.get(e).pipe((0, X.T)(e => null == e ? void 0 : e.seq))
                }
                putSeq(e, t) {
                    return this.sequences.put({
                        seq: e,
                        routeId: t
                    })
                }
                putSeqs(e) {
                    return this.sequences.putItems(e.map(e => {
                        let [t, i] = e;
                        return [t, {
                            routeId: t,
                            seq: i
                        }]
                    }))
                }
                getStates() {
                    return this.getSeq(0).pipe((0, z.n)(e => !e || e <= 0 ? this.api.getGroupStates().pipe((0, t4.h)({
                        ...t7,
                        shouldRetry: e => (null == e ? void 0 : e.code) == null || e1.mG.includes(e.code)
                    }), (0, z.n)(e => this.setSeqs(e)), (0, ee.M)(() => this.isSyncing$.next(!1)), (0, ey.u)(!1)) : (0, j.of)(!0)))
                }
                onGetDiffComplete() {
                    return (0, ee.M)(() => {
                        this.logger.info("GetDiff Finished"), this.isSyncing$.next(!1), this.logger.debug("Queue size:", this.eventsQueue.length), this.eventsQueue.sort((e, t) => e.routeId !== t.routeId ? 0 : e.sequence - t.sequence).forEach(this.addEvent), this.eventsQueue = []
                    })
                }
                getTooLongRoutes(e) {
                    return e.filter(e => {
                        let [, t] = e;
                        return !!t.tooLong
                    })
                }
                tooLongUpdates(e) {
                    var t;
                    let i = null == (t = e.find(e => {
                        let [t] = e;
                        return 0 === t
                    })) ? void 0 : t[1];
                    return !!(null == i ? void 0 : i.tooLong)
                }
                refreshDialogs(e) {
                    return this.logger.warn("Refresh: start loadpeerdialogs for too long routes", e.map(e => {
                        let [t, i] = e;
                        return {
                            id: t,
                            updates: i.updates.map(e => e.update).filter(e => null != e).map(eS.Xc)
                        }
                    })), this.ctx.dialogs.invalidatePeers(e.map(e => {
                        let [t] = e;
                        return {
                            id: t,
                            type: er.RK.PEERTYPE_GROUP
                        }
                    }))
                }
                checkRefreshModules(e) {
                    return e.length > 0 && !this.isLoadingTooLongRoutes ? (this.isLoadingTooLongRoutes = !0, this.refreshDialogs(e).pipe((0, ee.M)(e => {
                        this.logger.warn("Refresh: loadpeerdialogs end", e.length)
                    }), (0, z.n)(e => this.ctx.messaging.invalidate(e.map(e => e.peer))), (0, ee.M)(() => {
                        this.logger.warn("Refresh: apply seqs start")
                    }), (0, z.n)(() => this.putSeqs(e.map(e => {
                        let [t, i] = e;
                        return [t, i.lastSequence]
                    }))), (0, ee.M)(() => {
                        this.logger.warn("Refresh: apply seqs end")
                    }))) : (0, j.of)(void 0)
                }
                invalidateModules() {
                    return (0, em.p)([this.ctx.configs.invalidate(), this.ctx.folders.invalidate().pipe((0, J.Z)(() => this.ctx.dialogs.invalidate())), this.ctx.messaging.invalidate(), this.ctx.users.invalidate(), this.ctx.images.invalidate(), this.ctx.scheduler.invalidate()])
                }
                applyEvents(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (0 == e.length) return (0, j.of)(void 0);
                    this.outComposedUpdates$.next(e);
                    let i = [],
                        s = e.filter(e => !e.emptyUpdate);
                    for (let e of (this.logger.debug("Filtered events for processing", s.map(eS.Xc)), this.processors)) {
                        let r = e.process(s);
                        if (void 0 != r) {
                            let s = e.name;
                            this.logger.debug("Processing events by", s);
                            let n = t ? this.ctx.perf.newTrace(`get_diff_apply_${s}`) : void 0;
                            i.push(r.pipe(t5(() => {
                                null == n || n.start(), this.logger.debug("Starting to process events by", s)
                            }), (0, eV.o)(1), (0, eF.j)(() => {
                                null == n || n.stop(), this.logger.debug("Finished processing events by", s)
                            }), (0, $.W)(e => (this.logger.error("Error occurred while processing events by", s, "error:", e), (0, eI.$)(() => e)))))
                        }
                    }
                    return 0 == i.length ? (0, j.of)(void 0) : (0, em.p)(i).pipe((0, eV.o)(1), (0, ey.u)(void 0), (0, ee.M)(() => this.logger.debug("Process Finished")))
                }
                dumpState() {
                    return this.sequences.getAll().pipe((0, X.T)(e => JSON.stringify(e)))
                }
                applyDump(e) {
                    let t = JSON.parse(e);
                    return this.sequences.putItems(t)
                }
                toggle() {
                    return this.debugConnection.next(!this.debugConnection.value)
                }
                subscribeToThreadUpdates(e, t) {
                    return this.api.subscribeToThreadUpdates(e, t)
                }
                constructor(e, t, i, s, r = !1) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "storage", void 0), (0, D._)(this, "processors", void 0), (0, D._)(this, "syncOnlyPrivateRoute", void 0), (0, D._)(this, "logger", _.U.getLogger("EventsModule:New")), (0, D._)(this, "SmallHoleTreshold", 10), (0, D._)(this, "eventsSubscription", void 0), (0, D._)(this, "sequences", void 0), (0, D._)(this, "inSeqEvents$", new ek.B), (0, D._)(this, "inEventsSubscription", void 0), (0, D._)(this, "outWeakEvents$", new ek.B), (0, D._)(this, "outComposedUpdates$", new ek.B), (0, D._)(this, "eventsQueue", []), (0, D._)(this, "smallHoleSubject", new H.t(null)), (0, D._)(this, "smallHoleSubscription", void 0), (0, D._)(this, "applyByRouteParallelEnabled", !1), (0, D._)(this, "hasLoadedApplyByRouteParallelFlag", !1), (0, D._)(this, "debugConnection", new H.t(!0)), (0, D._)(this, "isSyncing$", new H.t(!0)), (0, D._)(this, "bindToWeakEvents", () => this.outWeakEvents$.asObservable()), (0, D._)(this, "bindToUpdates", () => this.outComposedUpdates$.asObservable()), (0, D._)(this, "addEvent", e => {
                        e.update ? this.inSeqEvents$.next(e) : e.weakEvent && this.outWeakEvents$.next(e.weakEvent)
                    }), (0, D._)(this, "start", () => {
                        this.logger.warn("Start Event"), this.eventsSubscription = (0, em.p)([this.loadApplyByRouteParallelFlag(), this.getStates()]).pipe((0, X.T)(e => {
                            let [, t] = e;
                            return t
                        }), (0, ee.M)(e => this.logger.warn("Should get Diff", e)), (0, z.n)(e => (0, B.h)(e ? this.initialGetDiff() : q.w, this.subscribeToEvents()))).subscribe(e => {
                            e && this.addEvent(e)
                        }), this.inEventsSubscription = this.inSeqEvents$.pipe((0, W.p)(e => (this.isSyncing$.value && (this.logger.warn("Push to queue 0", e.sequence, e.routeId, e.update && (0, eS.xs)(e.update)), this.eventsQueue.push(e)), !this.isSyncing$.value)), (0, tw.H)(e => this.processSeqEvents(e).pipe((0, K.Q)(this.inSeqEvents$.pipe((0, W.p)(e => e.sequence === 1 / 0), (0, eq.$)()))))).subscribe(), this.smallHoleSubscription = this.smallHoleSubject.pipe((0, W.p)(e => null != e), (0, t1.p)(() => (0, F.O)(2e3).pipe((0, K.Q)(this.smallHoleSubject.pipe((0, W.p)(e => null === e), (0, eq.$)(), (0, ee.M)(() => {
                            let e = this.eventsQueue.sort((e, t) => e.routeId !== t.routeId ? 0 : e.sequence - t.sequence);
                            this.logger.warn("Small Hole Final", e.map(e => e.update && (0, eS.xs)(e.update))), e.forEach(this.addEvent), this.eventsQueue = []
                        }))), (0, z.n)(() => (this.isSyncing$.next(!0), this.logger.warn("Start Get diff for small"), this.getDifferences().pipe((0, ey.u)(void 0), this.onGetDiffComplete(), (0, ee.M)(() => {
                            this.clearSmallHole()
                        }))))))).subscribe()
                    }), (0, D._)(this, "stop", () => {
                        var e, t, i;
                        this.logger.debug("Stop EventModule"), null == (e = this.inEventsSubscription) || e.unsubscribe(), null == (t = this.eventsSubscription) || t.unsubscribe(), null == (i = this.smallHoleSubscription) || i.unsubscribe(), this.isSyncing$.next(!1)
                    }), (0, D._)(this, "setSeqs", e => this.putSeqs(e.map(e => [e.routeId, e.seq])).pipe((0, ee.M)(() => {
                        this.logger.info("GroupStates", `size: ${e.length}`, e.map(e => ["routeId:", e.routeId, ",seq:", e.seq].join(" ")).join(" | "))
                    }))), (0, D._)(this, "forceGetDiff", () => {
                        this.isSyncing$.value || (this.logger.warn("force get diff"), this.addEvent({
                            routeId: 0,
                            sequence: 1 / 0,
                            timestamp: Date.now(),
                            update: {},
                            mtupdate: void 0,
                            subscriptionId: 0,
                            updates: void 0,
                            weakEvent: void 0
                        }))
                    }), (0, D._)(this, "subscribeToEvents", () => this.subscribe().pipe((0, $.W)(e => (this.logger.error("Subscribe Error", e), this.forceGetDiff(), (0, eI.$)(() => e))), (0, t4.h)({
                        ...t7,
                        resetOnSuccess: !0
                    }))), (0, D._)(this, "processSeqEvents", e => this.syncOnlyPrivateRoute && 0 !== e.routeId ? (0, j.of)(void 0) : this.getSeq(e.routeId).pipe((0, z.n)(t => t ? e.sequence <= t ? (this.logger.warn("Ignore event", "lastSeq:", t, "event.seq:", e.sequence), this.logger.warn("event update is defined:", !!e.update, "event update:", e.update && (0, eS.xs)(e.update)), this.logger.warn("event weakEvent is defined:", !!e.weakEvent), q.w) : e.sequence === t + 1 ? (this.getSmallHole() && e.routeId === this.getSmallHole().routeId && (this.logger.warn("Small Hole filled"), this.clearSmallHole()), this.logger.debug("New Event, SubId:", {
                        routeId: e.routeId,
                        timestamp: e.routeId,
                        sequence: e.sequence,
                        update: e.update && (0, eS.xs)(e.update)
                    }), this.logger.debug(">>>> RealTime start applyEvents"), this.applyEvents([e.update]).pipe((0, J.Z)(() => (this.logger.debug(">>>> RealTime end applyEvents"), this.putSeq(e.sequence, e.routeId))), (0, ee.M)(() => {
                        this.logger.debug(">>>> RealTime end apply Seqs", {
                            seq: e.sequence,
                            routeId: e.routeId
                        })
                    }), (0, ey.u)(void 0), (0, t2.l)(e => (this.logger.error("apply event error", JSON.stringify(e)), e.pipe((0, t3.c)(1e3)))))) : e.sequence - t < this.SmallHoleTreshold ? (this.logger.warn("GetDiff Start because of small hole", "rotueId:", e.routeId, "lastSeq:", t, "event.seq:", e.sequence), this.startFillingSmallHole(e), q.w) : (e.sequence === 1 / 0 ? this.logger.warn("Force get diff") : this.logger.warn("GetDiff Start because of big hole", "rotueId:", e.routeId, "lastSeq:", t, "event.seq:", e.sequence), this.logger.warn("GetDiff Start", "rotueId:", e.routeId, "lastSeq:", t, "event.seq:", e.sequence), this.getSmallHole()) ? (this.logger.warn("Currently in filling small hole", this.getSmallHole()), q.w) : (this.isSyncing$.next(!0), this.getDifferences().pipe((0, ey.u)(void 0), this.onGetDiffComplete())) : this.applyEvents([e.update]).pipe((0, J.Z)(() => this.putSeq(e.sequence, e.routeId)), (0, ey.u)(void 0))))), (0, D._)(this, "isLoadingTooLongRoutes", !1), (0, D._)(this, "toArrayGroupEvents", e => Object.keys(e).map(t => [Number(t), e[Number(t)]])), (0, D._)(this, "getDifferences", e => (this.storage.startFastMode(), this.isSyncing$.next(!0), this.sequences.getAll().pipe((0, z.n)(t => {
                        let i = new Map;
                        t.forEach(e => {
                            let [t, s] = e;
                            return i.set(t, s.seq)
                        }), this.logger.debug("Routes: ", i);
                        let s = this.syncOnlyPrivateRoute ? t.filter(e => {
                            let [t] = e;
                            return 0 === t
                        }) : t;
                        return this.requestGetDiff(s, e).pipe((0, z.n)(t => {
                            let i, {
                                    groupEvents: s
                                } = t,
                                r = this.toArrayGroupEvents(s);
                            if (this.logger.warn("Processing group events from GetDiff response"), this.tooLongUpdates(r)) return this.logger.warn("Too long updates"), this.invalidateModules().pipe((0, ee.M)(() => this.logger.warn("Module invalidation finished")), (0, z.n)(() => this.putSeqs(r.map(e => {
                                let [t, i] = e;
                                return [t, i.lastSequence]
                            }))), (0, ee.M)(() => this.logger.warn("Seqs applied")));
                            let n = !1,
                                a = [],
                                o = this.getTooLongRoutes(r),
                                d = o.map(e => {
                                    let [t] = e;
                                    return t
                                });
                            r.forEach(e => {
                                let [t, i] = e;
                                i.needMore && (n = !0), d.includes(t) || a.push([t, i.lastSequence])
                            }), this.logger.warn("refresh too Long Routes", o.map(e => {
                                let [t, i] = e;
                                return {
                                    id: t,
                                    updates: i.updates.map(e => e.update).filter(e => null != e).map(eS.Xc)
                                }
                            }));
                            let l = 0;
                            if (this.applyByRouteParallelEnabled) {
                                let t, r, n = (t = new Map, r = (e, i) => {
                                    t.has(e) || t.set(e, []), t.get(e).push(i)
                                }, Object.entries(s).forEach(e => {
                                    let [t, i] = e, s = Number(t);
                                    if (d.includes(s)) return;
                                    let n = i.updates.filter(e => null != e.update);
                                    0 === s ? n.forEach(e => {
                                        var t, i, s, n, a, o, l, u, p;
                                        let h = e.update;
                                        if (h.dialogsMarkedAsRead || h.dialogsMarkedAsUnread) return void((null == (t = h.dialogsMarkedAsRead) ? void 0 : t.peers) ?? (null == (i = h.dialogsMarkedAsUnread) ? void 0 : i.peers) ?? []).forEach(t => {
                                            let i;
                                            d.includes(t.id) || (i = h.dialogsMarkedAsRead ? {
                                                ...h,
                                                dialogsMarkedAsRead: {
                                                    ...h.dialogsMarkedAsRead,
                                                    peers: [t]
                                                }
                                            } : {
                                                ...h,
                                                dialogsMarkedAsUnread: {
                                                    ...h.dialogsMarkedAsUnread,
                                                    peers: [t]
                                                }
                                            }, r(t.type === er.m4.EXPEERTYPE_GROUP ? t.id : 0, {
                                                ...e,
                                                update: i
                                            }))
                                        });
                                        let g = 0,
                                            c = (null == (s = h.messageReadByMe) ? void 0 : s.peer) ? h.messageReadByMe.peer : (null == (n = h.mentionReadByMe) ? void 0 : n.peer) ? (0, eQ.K2)(h.mentionReadByMe.peer) : (null == (a = h.messageReactionsReadByMe) ? void 0 : a.exPeer) ? (0, eQ.K2)(h.messageReactionsReadByMe.exPeer) : (null == (o = h.messageNewReaction) ? void 0 : o.exPeer) ? (0, eQ.K2)(h.messageNewReaction.exPeer) : h.groupUserKickObsolete ? (0, el.Yt)(h.groupUserKickObsolete.groupId, er.RK.PEERTYPE_GROUP) : (null == (l = h.messageReceived) ? void 0 : l.peer) ? h.messageReceived.peer : (null == (u = h.chatClear) ? void 0 : u.peer) ? h.chatClear.peer : (null == (p = h.chatDelete) ? void 0 : p.peer) ? h.chatDelete.peer : void 0;
                                        if (c && c.type === er.RK.PEERTYPE_GROUP) {
                                            if (d.includes(c.id)) return;
                                            g = c.id
                                        }
                                        r(g, e)
                                    }) : n.forEach(e => r(s, e))
                                }), t.forEach(e => {
                                    e.sort((e, t) => (e.date ?? 0) - (t.date ?? 0))
                                }), t);
                                l = Array.from(n.values()).reduce((e, t) => e + t.length, 0);
                                let a = Array.from(n.values()).map(t => this.applyEvents(t.map(e => e.update), e));
                                i = (a.length > 0 ? (0, em.p)(a) : (0, j.of)([])).pipe((0, ey.u)(void 0))
                            } else {
                                let t, s, n = (t = [], s = o.map(e => {
                                    let [t] = e;
                                    return t
                                }), r.forEach(e => {
                                    let [i, r] = e;
                                    if (!o.find(e => {
                                            let [t] = e;
                                            return t === i
                                        })) {
                                        let e = r.updates.map(e => e.update).filter(e => null != e);
                                        if (0 === i) {
                                            var n, a;
                                            let i;
                                            t.push(...(n = {
                                                ...r,
                                                updates: e
                                            }, a = s, i = [], n.updates.forEach(e => {
                                                var t, s, r;
                                                if (e.messageReadByMe || e.messageContentChanged || e.mentionReadByMe || e.messageReactionsReadByMe || e.messageNewReaction) {
                                                    let r;
                                                    (r = (null == (t = e.messageReadByMe || e.messageContentChanged || e.mentionReadByMe) ? void 0 : t.peer) ?? (null == (s = e.messageReactionsReadByMe || e.messageNewReaction) ? void 0 : s.exPeer)) || i.push(e), r && !a.includes(r.id) && i.push(e)
                                                } else if (e.dialogsMarkedAsRead || e.dialogsMarkedAsUnread) {
                                                    let t, s;
                                                    (s = null == (t = null == (r = e.dialogsMarkedAsRead || e.dialogsMarkedAsUnread) ? void 0 : r.peers) ? void 0 : t.filter(e => !a.includes(e.id))) && (null == s ? void 0 : s.length) > 0 && (e.dialogsMarkedAsRead ? i.push({
                                                        ...e,
                                                        dialogsMarkedAsRead: {
                                                            ...e.dialogsMarkedAsRead,
                                                            peers: s
                                                        }
                                                    }) : e.dialogsMarkedAsUnread && i.push({
                                                        ...e,
                                                        dialogsMarkedAsUnread: {
                                                            ...e.dialogsMarkedAsUnread,
                                                            peers: s
                                                        }
                                                    }))
                                                } else i.push(e)
                                            }), i))
                                        } else t.push(...e)
                                    }
                                }), t);
                                l = n.length, i = this.applyEvents(n, e)
                            }
                            this.logger.info("GetDiff response", {
                                routesSize: r.length,
                                updatesSize: l,
                                routes: r.map(e => {
                                    let [t, i] = e;
                                    return {
                                        routeId: t,
                                        lastSeq: i.lastSequence,
                                        needMore: i.needMore
                                    }
                                })
                            }), this.logger.warn(">>>> GetDiff start applyEvents");
                            let u = e ? this.ctx.perf.newTrace("get_diff_apply_events") : void 0,
                                p = i.pipe(t5(() => {
                                    null == u || u.start()
                                }), (0, J.Z)(() => (this.logger.warn(">>>> GetDiff end applyEvents"), null == u || u.stop(), this.storage.stopFastMode().pipe((0, z.n)(() => this.putSeqs(a))))), (0, J.Z)(() => n ? this.getDifferences(e) : (0, j.of)(void 0)), (0, ee.M)(() => {
                                    this.logger.warn(">>>> GetDiff end apply Seqs")
                                }));
                            return (0, em.p)([p, this.checkRefreshModules(o)]).pipe((0, ee.M)(() => {
                                this.isLoadingTooLongRoutes = !1
                            }), (0, ey.u)(void 0))
                        }), (0, $.W)(e => (this.logger.error("GetDiff Error", e), (0, eI.$)(() => e))), (0, t4.h)({
                            ...t7,
                            shouldRetry: e => (null == e ? void 0 : e.code) == null || e1.mG.includes(e.code)
                        }))
                    })))), this.api = e, this.ctx = t, this.storage = i, this.processors = s, this.syncOnlyPrivateRoute = r, this.sequences = this.storage.getKeyValue("sequences")
                }
            }
            var t6 = i(34981);
            class t9 {
                loadOwnStickers(e) {
                    return (0, G.UY)(() => this.api.LoadOwnStickers({
                        offset: e ? {
                            text: e
                        } : void 0
                    }))
                }
                loadStickerPack(e, t) {
                    return (0, G.UY)(() => this.api.LoadStickerCollection({
                        accessHash: t,
                        id: e
                    }))
                }
                addStickerCollection(e, t) {
                    return (0, G.UY)(() => this.api.AddStickerCollection({
                        accessHash: t,
                        id: e
                    }))
                }
                addSticker(e) {
                    return (0, G.UY)(() => this.api.AddStickerPack({
                        id: e
                    }))
                }
                removeSticker(e) {
                    return (0, G.UY)(() => this.api.RemoveStickerPack({
                        id: e
                    }))
                }
                removeStickerPack(e, t) {
                    return (0, G.UY)(() => this.api.RemoveStickerCollection({
                        accessHash: t,
                        id: e
                    }))
                }
                addGif(e, t, i) {
                    return (0, G.UY)(() => this.api.AddGif({
                        gif: e,
                        thumb: t,
                        mimeType: i ? {
                            text: i
                        } : void 0
                    }))
                }
                removeGif(e) {
                    return (0, G.UY)(() => this.api.RemoveGif({
                        gif: e
                    }))
                }
                loadSavedGifs(e) {
                    return (0, G.UY)(() => this.api.GetSavedGifs({
                        offset: e ? {
                            text: e
                        } : void 0
                    }))
                }
                useGif(e, t) {
                    return (0, G.UY)(() => this.api.UseGif({
                        gif: e,
                        usedAt: t
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            var ie = i(68506),
                it = i(83965),
                ii = i(78756),
                is = i.n(ii);
            let ir = "StickersLoaded",
                ia = "SavedGifsLoaded",
                io = "syncedRecentStickers";
            class id {
                bindToUpdates() {
                    return this.updateHandler.bindToUpdates()
                }
                invalidate() {
                    return (0, em.p)([this.stickerCollections.clear(), this.savedGifsStorage.clear(), this.ctx.configs.setParameters({
                        [ir]: !1,
                        [ia]: !1
                    })]).pipe((0, ee.M)(() => {
                        this.updateHandler.nextUpdate({
                            type: ie.D.StickersInvalidated
                        }), this.updateHandler.nextUpdate({
                            type: ie.D.SavedGifsInvalidated
                        })
                    }))
                }
                _loadOwnStickers(e) {
                    return this.api.loadOwnStickers(e).pipe((0, z.n)(t => {
                        var i;
                        return (this.logger.debug("load own", e, t), null == (i = t.offset) ? void 0 : i.text) ? this._loadOwnStickers(t.offset.text).pipe((0, X.T)(e => t.ownStickers.concat(e))) : (0, j.of)(t.ownStickers)
                    }))
                }
                updateStickers() {
                    return this.ctx.configs.setParameter(ir, !1).pipe((0, z.n)(() => this.loadStickersFromRemote()))
                }
                updateSavedGifs() {
                    return this.ctx.configs.setParameter(ia, !1).pipe((0, z.n)(() => this.loadSavedGifsFromRemoteAndSave()))
                }
                loadSavedGifsFromRemoteAndSave() {
                    return this._loadSavedGifs().pipe((0, z.n)(e => this.savedGifsStorage.clear().pipe((0, X.T)(() => e))), (0, X.T)(e => e.filter(e => !!e.gifLocation)), (0, z.n)(e => this.savedGifsStorage.putItems(e.map(e => [e.gifLocation.fileId, {
                        value: {
                            gif: e
                        },
                        key: e.gifLocation.fileId
                    }])).pipe((0, X.T)(() => e))), (0, z.n)(e => this.ctx.configs.setParameter(ia, !0).pipe((0, X.T)(() => e))))
                }
                _loadSavedGifs(e) {
                    return this.api.loadSavedGifs(e).pipe((0, z.n)(e => {
                        var t;
                        return (null == (t = e.offset) ? void 0 : t.text) ? this._loadSavedGifs(e.offset.text).pipe((0, X.T)(t => e.gifs.concat(t))) : (0, j.of)(e.gifs)
                    }))
                }
                useGif(e, t) {
                    return this.api.useGif(e, t).pipe((0, J.Z)(i => this.savedGifsStorage.get(e.fileId).pipe((0, z.n)(e => e ? this.savedGifsStorage.put({
                        value: {
                            gif: {
                                ...e.value.gif,
                                usedAt: t
                            }
                        },
                        key: e.key
                    }, e.key).pipe((0, z.n)(() => (0, j.of)(i))) : (0, j.of)(i)))))
                }
                constructor(e, t, i, s) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "storage", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "updateHandler", void 0), (0, D._)(this, "logger", _.U.getLogger("ImagesModule")), (0, D._)(this, "stickerCollections", void 0), (0, D._)(this, "savedGifsStorage", void 0), (0, D._)(this, "loadStickersFromRemote", () => this._loadOwnStickers().pipe((0, X.T)(e => is()(e, "id")), (0, z.n)(e => this.stickerCollections.clear().pipe((0, ey.u)(e))), (0, X.T)(e => e.map((e, t) => ({
                        ...e,
                        order: t
                    }))), (0, z.n)(e => this.stickerCollections.putItems((0, it.EB)(e, e => e.id)).pipe((0, ey.u)(e))), (0, z.n)(e => this.ctx.configs.setParameter(ir, !0).pipe((0, ey.u)(e))))), (0, D._)(this, "loadOwnStickers", () => this.ctx.configs.getParameter(ir).pipe((0, z.n)(e => (this.logger.warn("load own", e), e) ? this.stickerCollections.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    }))) : this.loadStickersFromRemote()))), (0, D._)(this, "addSticker", e => this.api.addSticker(e).pipe((0, ee.M)(e => this.ctx.events.addEvent({
                        ...(0, e0.GK)(),
                        routeId: 0,
                        sequence: e.seq,
                        timestamp: Date.now(),
                        update: {
                            stickerPacksChanged: {}
                        }
                    })))), (0, D._)(this, "removeSticker", e => this.api.removeSticker(e).pipe((0, ee.M)(e => this.ctx.events.addEvent({
                        ...(0, e0.GK)(),
                        routeId: 0,
                        sequence: e.seq,
                        timestamp: Date.now(),
                        update: {
                            stickerPacksChanged: {}
                        }
                    })))), (0, D._)(this, "loadStickerPack", (e, t) => this.api.loadStickerPack(e, t)), (0, D._)(this, "getRecentStickersList", () => this.ctx.configs.getParameter(io).pipe((0, X.T)(e => {
                        if (!e) return [];
                        try {
                            return JSON.parse(e)
                        } catch {
                            return []
                        }
                    }))), (0, D._)(this, "loadRecentStickers", () => this.getRecentStickersList()), (0, D._)(this, "addRecentSticker", e => this.getRecentStickersList().pipe((0, z.n)(t => {
                        let i = t.findIndex(t => t.descriptor.id === e.descriptor.id); - 1 !== i && t.splice(i, 1);
                        let s = [e, ...t].slice(0, 12);
                        return this.updateRecentStickers(s)
                    }))), (0, D._)(this, "removeRecentStickers", e => {
                        let t = e.map(e => e.id);
                        return this.getRecentStickersList().pipe((0, z.n)(e => {
                            let i = e.filter(e => !t.includes(e.descriptor.id));
                            return this.updateRecentStickers(i)
                        }))
                    }), (0, D._)(this, "updateRecentStickers", e => this.ctx.configs.editParameter(io, JSON.stringify(e)).pipe((0, ee.M)(() => this.updateHandler.nextUpdate({
                        type: ie.D.RecentStickersUpdated,
                        recentStickers: e
                    })))), (0, D._)(this, "addGif", (e, t, i) => {
                        let s = t ?? new Uint8Array(0);
                        return this.api.addGif(e, s, i).pipe((0, ee.M)(e => this.ctx.events.addEvent({
                            ...(0, e0.GK)(),
                            routeId: 0,
                            sequence: e.seq,
                            timestamp: Date.now(),
                            update: {
                                savedGifsChanged: {}
                            }
                        })))
                    }), (0, D._)(this, "removeGif", e => this.api.removeGif(e).pipe((0, ee.M)(e => this.ctx.events.addEvent({
                        ...(0, e0.GK)(),
                        routeId: 0,
                        sequence: e.seq,
                        timestamp: Date.now(),
                        update: {
                            savedGifsChanged: {}
                        }
                    })))), (0, D._)(this, "loadSavedGifs", () => this.ctx.configs.getParameter(ia).pipe((0, z.n)(e => e ? this.savedGifsStorage.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [t, i] = e;
                        return i.value.gif
                    }))) : this.loadSavedGifsFromRemoteAndSave()))), this.api = e, this.storage = t, this.ctx = i, this.updateHandler = s, this.stickerCollections = this.storage.getKeyValue(e6.F8.StickerCollections), this.savedGifsStorage = this.storage.getKeyValue(e6.F8.SavedGifs)
                }
            }
            class il {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "startTyping", (e, t) => (0, G.UY)(() => this.api.Typing({
                        peer: e,
                        typingType: t
                    }))), (0, D._)(this, "stopTyping", (e, t) => (0, G.UY)(() => this.api.StopTyping({
                        peer: e,
                        typingType: t
                    }))), this.api = e
                }
            }
            class iu {
                bindToTypingEvents() {
                    return this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.typing || !!e.typingStop), (0, W.p)(e => {
                        var t, i;
                        return ((null == (t = e.typing) ? void 0 : t.typingType) ?? (null == (i = e.typingStop) ? void 0 : i.typingType)) !== x.a7.TYPINGTYPE_UNKNOWN
                    }))
                }
                scheduleStop(e, t) {
                    let {
                        uid: i,
                        peer: s,
                        typingType: r
                    } = t;
                    return (0, F.O)(e).pipe((0, X.T)(() => (this.logger.warn("stop typing manual", t), {
                        typingStop: t
                    })), (0, K.Q)(this.bindToTypingEvents().pipe((0, W.p)(e => {
                        var t;
                        let {
                            typing: n,
                            typingStop: a
                        } = e, o = n || a;
                        return (null == s ? void 0 : s.id) === (null == o || null == (t = o.peer) ? void 0 : t.id) && (null == o ? void 0 : o.uid) === i && (null == o ? void 0 : o.typingType) === r
                    }), (0, Z.s)(1))), (0, Q.Z)({
                        typing: t
                    }))
                }
                getTypingTypeFromApiMessage(e) {
                    switch ((0, e$.Pw)(e)) {
                        case en.cM.TEXT:
                            return x.a7.TYPINGTYPE_TEXT;
                        case en.cM.PHOTO:
                            return x.a7.TYPINGTYPE_SENDINGPHOTO;
                        case en.cM.VOICE:
                            return x.a7.TYPINGTYPE_SENDINGVOICE;
                        case en.cM.VIDEO:
                            return x.a7.TYPINGTYPE_SENDINGVIDEO;
                        case en.cM.GIF:
                            return x.a7.TYPINGTYPE_CHOSINGGIF;
                        case en.cM.AUDIO:
                            return x.a7.TYPINGTYPE_SENDINGMUSIC;
                        case en.cM.DOCUMENT:
                            return x.a7.TYPINGTYPE_SENDINGFILE;
                        case en.cM.STICKER:
                            return x.a7.TYPINGTYPE_CHOOSINGSTICKER;
                        case en.cM.CONTACT:
                        case en.cM.GIFT_PACKET:
                            return x.a7.TYPINGTYPE_CREATINGGIFTPACKET;
                        case en.cM.ALBUM:
                            return x.a7.TYPINGTYPE_SENDINGALBUM;
                        default:
                            return x.a7.TYPINGTYPE_UNKNOWN
                    }
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("TypingModule")), (0, D._)(this, "bindToTypingUpdates$", void 0), (0, D._)(this, "bindToTypingUpdates", () => (void 0 !== this.bindToTypingUpdates$ || (this.bindToTypingUpdates$ = this.ctx.auth.authState.pipe((0, W.p)(e => e === ea.k.Success), (0, z.n)(() => this.bindToTypingEvents()), (0, J.Z)(e => e.typing ? this.scheduleStop(7e3, e.typing) : (0, j.of)(e)), (0, et.u)())), this.bindToTypingUpdates$)), (0, D._)(this, "startTyping", (e, t) => this.api.startTyping((0, eK.F8)(e), t)), (0, D._)(this, "stopTyping", (e, t) => this.api.stopTyping((0, eK.F8)(e), t)), this.api = e, this.ctx = t
                }
            }
            var ip = i(26016),
                ih = i(12314);
            (n = k || (k = {}))[n.MARKETACTIONTYPE_UNKNOWN = 0] = "MARKETACTIONTYPE_UNKNOWN", n[n.MARKETACTIONTYPE_OPEN_URL = 1] = "MARKETACTIONTYPE_OPEN_URL", n[n.MARKETACTIONTYPE_OPEN_CHAT = 2] = "MARKETACTIONTYPE_OPEN_CHAT", n[n.MARKETACTIONTYPE_OPEN_MESSAGE = 3] = "MARKETACTIONTYPE_OPEN_MESSAGE", (a = y || (y = {}))[a.MARKETJOINREQUEST_PENDING = 0] = "MARKETJOINREQUEST_PENDING", a[a.MARKETJOINREQUEST_REJECTED = 1] = "MARKETJOINREQUEST_REJECTED", a[a.MARKETJOINREQUEST_ACCEPTED = 2] = "MARKETJOINREQUEST_ACCEPTED", (o = b || (b = {}))[o.USERGENDER_MALE = 0] = "USERGENDER_MALE", o[o.USERGENDER_FEMALE = 1] = "USERGENDER_FEMALE", o[o.USERGENDER_UNKNOWN = 3] = "USERGENDER_UNKNOWN", (d = T || (T = {}))[d.ONBOARDINGSTATUS_INCOMPLETE = 0] = "ONBOARDINGSTATUS_INCOMPLETE", d[d.ONBOARDINGSTATUS_COMPLETE = 1] = "ONBOARDINGSTATUS_COMPLETE", d[d.ONBOARDINGSTATUS_SKIPPED = 2] = "ONBOARDINGSTATUS_SKIPPED", (l = M || (M = {}))[l.CATEGORYITEMSTYPE_PRODUCT_ONLY = 0] = "CATEGORYITEMSTYPE_PRODUCT_ONLY", l[l.CATEGORYITEMSTYPE_MARKET_ONLY = 1] = "CATEGORYITEMSTYPE_MARKET_ONLY", l[l.CATEGORYITEMSTYPE_FOR_YOU_PRODUCT_ONLY = 2] = "CATEGORYITEMSTYPE_FOR_YOU_PRODUCT_ONLY", (u = S || (S = {}))[u.MARKETRATINGTYPE_MEMBER = 0] = "MARKETRATINGTYPE_MEMBER", (p = w || (w = {}))[p.SATISFACTIONRATE_UNKOWN = 0] = "SATISFACTIONRATE_UNKOWN", p[p.SATISFACTIONRATE_VERY_BAD = 1] = "SATISFACTIONRATE_VERY_BAD", p[p.SATISFACTIONRATE_BAD = 2] = "SATISFACTIONRATE_BAD", p[p.SATISFACTIONRATE_NORMAL = 3] = "SATISFACTIONRATE_NORMAL", p[p.SATISFACTIONRATE_GOOD = 4] = "SATISFACTIONRATE_GOOD", p[p.SATISFACTIONRATE_GREAT = 5] = "SATISFACTIONRATE_GREAT", (h = P || (P = {}))[h.CONTENTSEARCHDEFAULTTAB_ANY = 0] = "CONTENTSEARCHDEFAULTTAB_ANY", h[h.CONTENTSEARCHDEFAULTTAB_PHOTO = 1] = "CONTENTSEARCHDEFAULTTAB_PHOTO", h[h.CONTENTSEARCHDEFAULTTAB_CHANNEL = 2] = "CONTENTSEARCHDEFAULTTAB_CHANNEL";
            let ig = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.type && t.uint32(8).int32(e.type), 0 !== e.id && t.uint32(16).int32(e.id), "" !== e.url && t.uint32(26).string(e.url), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                type: 0,
                                id: 0,
                                url: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.type = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.id = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.url = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ic = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.action && ig.encode(e.action, t.uint32(10).fork()).join(), "" !== e.imageUrl && t.uint32(18).string(e.imageUrl), "0" !== e.fileId && t.uint32(24).int64(e.fileId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                action: void 0,
                                imageUrl: "",
                                fileId: "0"
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.action = ig.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.imageUrl = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.fileId = i.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iv = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                title: "",
                                description: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.description = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                im = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "0" !== e.fileId && t.uint32(8).int64(e.fileId), "0" !== e.accessHash && t.uint32(16).int64(e.accessHash), "" !== e.fileName && t.uint32(26).string(e.fileName), 0 !== e.fileSize && t.uint32(32).int32(e.fileSize), void 0 !== e.fileStorageVersion && tL.as.encode({
                            value: e.fileStorageVersion
                        }, t.uint32(42).fork()).join(), "0" !== e.randomId && t.uint32(48).int64(e.randomId), "0" !== e.date && t.uint32(56).int64(e.date), 0 !== e.MarketId && t.uint32(64).int32(e.MarketId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                fileId: "0",
                                accessHash: "0",
                                fileName: "",
                                fileSize: 0,
                                fileStorageVersion: void 0,
                                randomId: "0",
                                date: "0",
                                MarketId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.fileId = i.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.accessHash = i.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.fileName = i.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.fileSize = i.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.fileStorageVersion = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    r.randomId = i.int64().toString();
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    r.date = i.int64().toString();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    r.MarketId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ik = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.productImageLocation && ih.rF.encode(e.productImageLocation, t.uint32(10).fork()).join(), "" !== e.productImageName && t.uint32(18).string(e.productImageName), void 0 !== e.productMessage && eO.J2R.encode(e.productMessage, t.uint32(26).fork()).join(), void 0 !== e.marketId && tL.hU.encode({
                            value: e.marketId
                        }, t.uint32(34).fork()).join(), void 0 !== e.title && tL.hU.encode({
                            value: e.title
                        }, t.uint32(42).fork()).join(), void 0 !== e.price && tL.as.encode({
                            value: e.price
                        }, t.uint32(50).fork()).join(), void 0 !== e.finalPrice && tL.as.encode({
                            value: e.finalPrice
                        }, t.uint32(58).fork()).join(), void 0 !== e.discountPercent && tL.as.encode({
                            value: e.discountPercent
                        }, t.uint32(66).fork()).join(), void 0 !== e.score && tL.hU.encode({
                            value: e.score
                        }, t.uint32(74).fork()).join(), void 0 !== e.numberOfParticipants && tL.as.encode({
                            value: e.numberOfParticipants
                        }, t.uint32(82).fork()).join(), void 0 !== e.imageUrl && tL.hU.encode({
                            value: e.imageUrl
                        }, t.uint32(90).fork()).join(), void 0 !== e.url && tL.hU.encode({
                            value: e.url
                        }, t.uint32(98).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                productImageLocation: void 0,
                                productImageName: "",
                                productMessage: void 0,
                                marketId: void 0,
                                title: void 0,
                                price: void 0,
                                finalPrice: void 0,
                                discountPercent: void 0,
                                score: void 0,
                                numberOfParticipants: void 0,
                                imageUrl: void 0,
                                url: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.productImageLocation = ih.rF.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.productImageName = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.productMessage = eO.J2R.decode(i, i.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.marketId = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.title = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.price = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.finalPrice = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    r.discountPercent = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    r.score = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    r.numberOfParticipants = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 11:
                                    if (90 !== e) break;
                                    r.imageUrl = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 12:
                                    if (98 !== e) break;
                                    r.url = tL.hU.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iy = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of ("0" !== e.id && t.uint32(8).int64(e.id), "" !== e.title && t.uint32(18).string(e.title), "" !== e.url && t.uint32(26).string(e.url), e.posts)) im.encode(i, t.uint32(34).fork()).join();
                        for (let i of (0 !== e.discount && t.uint32(40).int32(e.discount), e.products)) ik.encode(i, t.uint32(50).fork()).join();
                        return void 0 !== e.isActive && tL._t.encode({
                            value: e.isActive
                        }, t.uint32(58).fork()).join(), void 0 !== e.categoryId && tL.as.encode({
                            value: e.categoryId
                        }, t.uint32(66).fork()).join(), void 0 !== e.isBanned && tL._t.encode({
                            value: e.isBanned
                        }, t.uint32(74).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                id: "0",
                                title: "",
                                url: "",
                                posts: [],
                                discount: 0,
                                products: [],
                                isActive: void 0,
                                categoryId: void 0,
                                isBanned: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = i.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.url = i.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.posts.push(im.decode(i, i.uint32()));
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.discount = i.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.products.push(ik.decode(i, i.uint32()));
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.isActive = tL._t.decode(i, i.uint32()).value;
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    r.categoryId = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    r.isBanned = tL._t.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ib = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.peerId && t.uint32(8).int32(e.peerId), "" !== e.displayName && t.uint32(18).string(e.displayName), 0 !== e.categoryId && t.uint32(24).int32(e.categoryId), 0 !== e.primaryCategoryId && t.uint32(32).int32(e.primaryCategoryId), "0" !== e.createdAt && t.uint32(40).int64(e.createdAt), "" !== e.nickName && t.uint32(50).string(e.nickName), !1 !== e.isActive && t.uint32(56).bool(e.isActive), !1 !== e.isBasalam && t.uint32(64).bool(e.isBasalam), !1 !== e.isTazenafas && t.uint32(72).bool(e.isTazenafas), !1 !== e.isBanned && t.uint32(80).bool(e.isBanned), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peerId: 0,
                                displayName: "",
                                categoryId: 0,
                                primaryCategoryId: 0,
                                createdAt: "0",
                                nickName: "",
                                isActive: !1,
                                isBasalam: !1,
                                isTazenafas: !1,
                                isBanned: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.peerId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.displayName = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.primaryCategoryId = i.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.createdAt = i.int64().toString();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.nickName = i.string();
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    r.isActive = i.bool();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    r.isBasalam = i.bool();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    r.isTazenafas = i.bool();
                                    continue;
                                case 10:
                                    if (80 !== e) break;
                                    r.isBanned = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iT = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (0 !== e.id && t.uint32(8).int32(e.id), "" !== e.title && t.uint32(18).string(e.title), "" !== e.drawableId && t.uint32(26).string(e.drawableId), e.markets)) iy.encode(i, t.uint32(34).fork()).join();
                        return void 0 !== e.dialog && iv.encode(e.dialog, t.uint32(42).fork()).join(), 0 !== e.parentId && t.uint32(48).int32(e.parentId), void 0 !== e.pinned && tL._t.encode({
                            value: e.pinned
                        }, t.uint32(58).fork()).join(), 0 !== e.categoryItemsType && t.uint32(64).int32(e.categoryItemsType), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                id: 0,
                                title: "",
                                drawableId: "",
                                markets: [],
                                dialog: void 0,
                                parentId: 0,
                                pinned: void 0,
                                categoryItemsType: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.drawableId = i.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.markets.push(iy.decode(i, i.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.dialog = iv.decode(i, i.uint32());
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    r.parentId = i.int32();
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.pinned = tL._t.decode(i, i.uint32()).value;
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    r.categoryItemsType = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iM = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "0" !== e.id && t.uint32(8).int64(e.id), "" !== e.title && t.uint32(18).string(e.title), 0 !== e.categoryId && t.uint32(24).int32(e.categoryId), !1 !== e.isDefault && t.uint32(32).bool(e.isDefault), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                id: "0",
                                title: "",
                                categoryId: 0,
                                isDefault: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = i.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.isDefault = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iS = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.status && t.uint32(8).int32(e.status), "" !== e.description && t.uint32(18).string(e.description), 0 !== e.marketPeerId && t.uint32(24).int32(e.marketPeerId), "0" !== e.createdAt && t.uint32(32).int64(e.createdAt), "0" !== e.updatedAt && t.uint32(40).int64(e.updatedAt), "" !== e.displayName && t.uint32(50).string(e.displayName), "" !== e.nickName && t.uint32(58).string(e.nickName), 0 !== e.requestId && t.uint32(64).int32(e.requestId), 0 !== e.categoryId && t.uint32(72).int32(e.categoryId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                status: 0,
                                description: "",
                                marketPeerId: 0,
                                createdAt: "0",
                                updatedAt: "0",
                                displayName: "",
                                nickName: "",
                                requestId: 0,
                                categoryId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.status = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.description = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.marketPeerId = i.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.createdAt = i.int64().toString();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.updatedAt = i.int64().toString();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.displayName = i.string();
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.nickName = i.string();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    r.requestId = i.int32();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    r.categoryId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iw = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.page && t.uint32(8).int32(e.page), 0 !== e.limit && t.uint32(16).int32(e.limit), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                page: 0,
                                limit: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.page = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.limit = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iP = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.term && t.uint32(10).string(e.term), 0 !== e.defaultTab && t.uint32(16).int32(e.defaultTab), "" !== e.displayName && t.uint32(26).string(e.displayName), void 0 !== e.peerId && ip.as.encode(e.peerId, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                term: "",
                                defaultTab: 0,
                                displayName: "",
                                peerId: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.term = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.defaultTab = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.displayName = i.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.peerId = ip.as.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iE = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.link && t.uint32(10).string(e.link), void 0 !== e.android && tL.hU.encode({
                            value: e.android
                        }, t.uint32(18).fork()).join(), void 0 !== e.web && tL.hU.encode({
                            value: e.web
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                link: "",
                                android: void 0,
                                web: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.link = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.android = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.web = tL.hU.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            var iI = i(55935),
                iR = i(89107),
                iD = i(71879);
            let i_ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.query) iR.wu.encode(i, t.uint32(10).fork()).join();
                        for (let i of (t.uint32(18).fork(), e.optimizations)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: [],
                                optimizations: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query.push(iR.wu.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iU = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.searchResults) iR.I$.encode(i, t.uint32(10).fork()).join();
                        for (let i of e.users) iD.KJ.encode(i, t.uint32(18).fork()).join();
                        for (let i of e.groups) es.YJ.encode(i, t.uint32(26).fork()).join();
                        for (let i of e.userPeers) er.Uw.encode(i, t.uint32(34).fork()).join();
                        for (let i of e.groupPeers) er.wX.encode(i, t.uint32(42).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                searchResults: [],
                                users: [],
                                groups: [],
                                userPeers: [],
                                groupPeers: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.searchResults.push(iR.I$.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(iD.KJ.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.groups.push(es.YJ.decode(i, i.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.userPeers.push(er.Uw.decode(i, i.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.groupPeers.push(er.wX.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iA = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (void 0 !== e.query && iR.wu.encode(e.query, t.uint32(10).fork()).join(), t.uint32(18).fork(), e.optimizations)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                optimizations: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.wu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iC = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (void 0 !== e.loadMoreState && tL.vt.encode({
                                value: e.loadMoreState
                            }, t.uint32(10).fork()).join(), void 0 !== e.query && iR.wu.encode(e.query, t.uint32(18).fork()).join(), t.uint32(26).fork(), e.optimizations)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                loadMoreState: void 0,
                                query: void 0,
                                optimizations: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.query = iR.wu.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iO = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (void 0 !== e.query && iR.wu.encode(e.query, t.uint32(10).fork()).join(), void 0 !== e.date && ip.j1.encode(e.date, t.uint32(18).fork()).join(), t.uint32(26).fork(), e.optimizations)) t.int32(i);
                        return t.join(), 0 !== e.loadMode && t.uint32(32).int32(e.loadMode), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                date: void 0,
                                optimizations: [],
                                loadMode: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.wu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.date = ip.j1.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        r.optimizations.push(i.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.optimizations.push(i.int32());
                                        continue
                                    }
                                    break;
                                case 4:
                                    if (32 !== e) break;
                                    r.loadMode = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iG = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.searchResults) iR.zk.encode(i, t.uint32(10).fork()).join();
                        for (let i of e.users) iD.KJ.encode(i, t.uint32(18).fork()).join();
                        for (let i of e.groups) es.YJ.encode(i, t.uint32(26).fork()).join();
                        for (let i of (void 0 !== e.loadMoreState && tL.vt.encode({
                                value: e.loadMoreState
                            }, t.uint32(34).fork()).join(), e.userOutPeers)) er.Uw.encode(i, t.uint32(42).fork()).join();
                        for (let i of e.groupOutPeers) er.wX.encode(i, t.uint32(50).fork()).join();
                        return 0 !== e.resultCount && t.uint32(56).int32(e.resultCount), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                searchResults: [],
                                users: [],
                                groups: [],
                                loadMoreState: void 0,
                                userOutPeers: [],
                                groupOutPeers: [],
                                resultCount: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.searchResults.push(iR.zk.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(iD.KJ.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.groups.push(es.YJ.decode(i, i.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.userOutPeers.push(er.Uw.decode(i, i.uint32()));
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.groupOutPeers.push(er.wX.decode(i, i.uint32()));
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    r.resultCount = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ix = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.searchResults) iR.zk.encode(i, t.uint32(10).fork()).join();
                        for (let i of e.users) iD.KJ.encode(i, t.uint32(18).fork()).join();
                        for (let i of e.groups) es.YJ.encode(i, t.uint32(26).fork()).join();
                        for (let i of (void 0 !== e.loadMoreState && tL.vt.encode({
                                value: e.loadMoreState
                            }, t.uint32(34).fork()).join(), e.userOutPeers)) er.Uw.encode(i, t.uint32(42).fork()).join();
                        for (let i of e.groupOutPeers) er.wX.encode(i, t.uint32(50).fork()).join();
                        return 0 !== e.resultCount && t.uint32(56).int32(e.resultCount), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                searchResults: [],
                                users: [],
                                groups: [],
                                loadMoreState: void 0,
                                userOutPeers: [],
                                groupOutPeers: [],
                                resultCount: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.searchResults.push(iR.zk.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(iD.KJ.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.groups.push(es.YJ.decode(i, i.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.userOutPeers.push(er.Uw.decode(i, i.uint32()));
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.groupOutPeers.push(er.wX.decode(i, i.uint32()));
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    r.resultCount = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iL = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.query && iR.et.encode(e.query, t.uint32(10).fork()).join(), void 0 !== e.withCategory && tL._t.encode({
                            value: e.withCategory
                        }, t.uint32(18).fork()).join(), void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                withCategory: void 0,
                                loadMoreState: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.et.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.withCategory = tL._t.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iN = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.marketResults) iR.YB.encode(i, t.uint32(10).fork()).join();
                        return void 0 !== e.category && iT.encode(e.category, t.uint32(18).fork()).join(), void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(26).fork()).join(), 0 !== e.resultCount && t.uint32(32).int32(e.resultCount), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketResults: [],
                                category: void 0,
                                loadMoreState: void 0,
                                resultCount: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.marketResults.push(iR.YB.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.category = iT.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.resultCount = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iq = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.query && iR.et.encode(e.query, t.uint32(10).fork()).join(), void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                loadMoreState: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.et.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iF = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.productResults) iR.nL.encode(i, t.uint32(10).fork()).join();
                        return void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(18).fork()).join(), 0 !== e.resultCount && t.uint32(24).int32(e.resultCount), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                productResults: [],
                                loadMoreState: void 0,
                                resultCount: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.productResults.push(iR.nL.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.resultCount = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iH = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.query && iR.et.encode(e.query, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.et.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iV = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.dialogResults) iR.G6.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                dialogResults: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogResults.push(iR.G6.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iB = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (void 0 !== e.query && iR.et.encode(e.query, t.uint32(10).fork()).join(), void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(18).fork()).join(), void 0 !== e.loadMoreState && tL.vt.encode({
                                value: e.loadMoreState
                            }, t.uint32(26).fork()).join(), e.users)) er.Uw.encode(i, t.uint32(34).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                exPeer: void 0,
                                loadMoreState: void 0,
                                users: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.et.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.users.push(er.Uw.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ij = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.users) er.Uw.encode(i, t.uint32(10).fork()).join();
                        return void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                users: [],
                                loadMoreState: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.users.push(er.Uw.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iY = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                iW = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.popularResults) iR.Lq.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                popularResults: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.popularResults.push(iR.Lq.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iz = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.query && iR.et.encode(e.query, t.uint32(10).fork()).join(), 0 !== e.contentType && t.uint32(16).int32(e.contentType), void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                query: void 0,
                                contentType: 0,
                                loadMoreState: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = iR.et.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.contentType = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                i$ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.contentResults) iR.bK.encode(i, t.uint32(10).fork()).join();
                        return void 0 !== e.loadMoreState && tL.vt.encode({
                            value: e.loadMoreState
                        }, t.uint32(18).fork()).join(), 0 !== e.resultCount && t.uint32(24).int32(e.resultCount), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                contentResults: [],
                                loadMoreState: void 0,
                                resultCount: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.contentResults.push(iR.bK.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.loadMoreState = tL.vt.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.resultCount = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                iK = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.messageId && eO.J2R.encode(e.messageId, t.uint32(10).fork()).join(), 0 !== e.searchTab && t.uint32(16).int32(e.searchTab), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                messageId: void 0,
                                searchTab: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.messageId = eO.J2R.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.searchTab = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class iJ {
                SearchMessages(e, t) {
                    return this.rpc.unary(iX, e, t)
                }
                SearchMessageMore(e, t) {
                    return this.rpc.unary(iQ, e, t)
                }
                SearchPeer(e, t) {
                    return this.rpc.unary(i0, e, t)
                }
                SearchMedia(e, t) {
                    return this.rpc.unary(i1, e, t)
                }
                SearchMembers(e, t) {
                    return this.rpc.unary(i2, e, t)
                }
                SearchMarket(e, t) {
                    return this.rpc.unary(i3, e, t)
                }
                SearchProduct(e, t) {
                    return this.rpc.unary(i4, e, t)
                }
                SearchMarketPopular(e, t) {
                    return this.rpc.unary(i5, e, t)
                }
                SearchDialog(e, t) {
                    return this.rpc.unary(i7, e, t)
                }
                SearchContent(e, t) {
                    return this.rpc.unary(i8, e, t)
                }
                UpdateSearchContentClick(e, t) {
                    return this.rpc.unary(i6, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.SearchMessages = this.SearchMessages.bind(this), this.SearchMessageMore = this.SearchMessageMore.bind(this), this.SearchPeer = this.SearchPeer.bind(this), this.SearchMedia = this.SearchMedia.bind(this), this.SearchMembers = this.SearchMembers.bind(this), this.SearchMarket = this.SearchMarket.bind(this), this.SearchProduct = this.SearchProduct.bind(this), this.SearchMarketPopular = this.SearchMarketPopular.bind(this), this.SearchDialog = this.SearchDialog.bind(this), this.SearchContent = this.SearchContent.bind(this), this.UpdateSearchContentClick = this.UpdateSearchContentClick.bind(this)
                }
            }
            let iZ = {
                    serviceName: "bale.search.v1.Search"
                },
                iX = {
                    methodName: "SearchMessages",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iA.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iG.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                iQ = {
                    methodName: "SearchMessageMore",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iC.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iG.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i0 = {
                    methodName: "SearchPeer",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return i_.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iU.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i1 = {
                    methodName: "SearchMedia",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iO.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = ix.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i2 = {
                    methodName: "SearchMembers",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iB.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = ij.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i3 = {
                    methodName: "SearchMarket",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iL.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iN.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i4 = {
                    methodName: "SearchProduct",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iq.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iF.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i5 = {
                    methodName: "SearchMarketPopular",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iY.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iW.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i7 = {
                    methodName: "SearchDialog",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iH.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iV.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i8 = {
                    methodName: "SearchContent",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iz.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = i$.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                i6 = {
                    methodName: "UpdateSearchContentClick",
                    service: iZ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return iK.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            var i9 = i(85977);
            class se {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "searchPeerMessages", (e, t, i, s, r) => (0, G.UY)(() => this.api.SearchMessages({
                        query: {
                            searchAndCondition: {
                                andQuery: [{
                                    searchPeerCondition: {
                                        peer: s
                                    }
                                }, {
                                    searchDocumentName: (null == r ? void 0 : r.justDocumentSearch) ? {
                                        documentName: e
                                    } : void 0
                                }, {
                                    searchPieceText: {
                                        query: e
                                    }
                                }, {
                                    searchDate: {
                                        date: t
                                    }
                                }, {
                                    searchSender: {
                                        userId: i
                                    }
                                }, ...(null == r ? void 0 : r.condition) ? r.condition : []]
                            }
                        },
                        optimizations: []
                    }), {
                        timeOut: 6e4
                    })), (0, D._)(this, "searchLinks", e => (0, G.UY)(() => this.api.SearchMessages({
                        query: {
                            searchAndCondition: {
                                andQuery: [{
                                    searchPeerCondition: {
                                        peer: e
                                    }
                                }, {
                                    searchHasLink: {
                                        hasLink: !0
                                    }
                                }]
                            }
                        },
                        optimizations: []
                    }), {
                        timeOut: 6e4
                    })), (0, D._)(this, "loadMoreSearchMessages", (e, t) => (0, G.UY)(() => this.api.SearchMessageMore({
                        loadMoreState: e,
                        optimizations: [],
                        query: t
                    }))), (0, D._)(this, "globalChannelSearch", e => (0, G.UY)(() => this.api.SearchPeer({
                        query: [{
                            searchPeerTypeCondition: {
                                peerType: iR.PP.SEARCHPEERTYPE_PUBLIC
                            }
                        }, {
                            searchPieceText: {
                                query: e
                            }
                        }],
                        optimizations: []
                    }))), (0, D._)(this, "allMessagesSearch", (e, t) => {
                        let i = {
                                searchPieceText: {
                                    query: e
                                }
                            },
                            s = t !== iR.I3.SEARCHMESSAGESCOPE_SCOPE_ALL ? {
                                searchAndCondition: {
                                    andQuery: [i, {
                                        searchScopeCondition: {
                                            scope: t
                                        }
                                    }]
                                }
                            } : i;
                        return (0, G.UY)(() => this.api.SearchMessages({
                            query: s,
                            optimizations: []
                        }), {
                            timeOut: 6e4
                        })
                    }), (0, D._)(this, "searchPeerMedia", (e, t, i, s) => (0, G.UY)(() => this.api.SearchMedia({
                        date: {
                            value: t.toString()
                        },
                        loadMode: i,
                        query: {
                            searchAndCondition: {
                                andQuery: [{
                                    searchPeerCondition: {
                                        peer: e
                                    }
                                }, {
                                    searchPeerContentType: {
                                        contentType: s
                                    }
                                }]
                            }
                        },
                        optimizations: []
                    }))), (0, D._)(this, "searchMembers", (e, t, i, s) => (0, G.UY)(() => this.api.SearchMembers({
                        query: {
                            query: e
                        },
                        exPeer: t,
                        loadMoreState: s,
                        users: i
                    }))), (0, D._)(this, "searchMarket", (e, t, i) => (0, G.UY)(() => this.api.SearchMarket({
                        loadMoreState: t,
                        query: {
                            query: e
                        },
                        withCategory: i
                    }))), (0, D._)(this, "searchProduct", (e, t) => (0, G.UY)(() => this.api.SearchProduct({
                        query: {
                            query: e
                        },
                        loadMoreState: t
                    }))), (0, D._)(this, "searchContent", (e, t, i) => (0, G.UY)(() => this.api.SearchContent({
                        query: {
                            query: e
                        },
                        contentType: t,
                        loadMoreState: i
                    }))), (0, D._)(this, "searchMarketPopular", () => (0, G.UY)(() => this.api.SearchMarketPopular({}))), this.api = e
                }
            }
            let st = "MarketRecentSearches",
                si = "QueryRecentSearches";
            (g = E || (E = {})).MARKET = "MARKET", g.QUERY = "QUERY", g.LINK = "LINK";
            class ss {
                constructor(e, t, i, s) {
                    var r = this;
                    (0, D._)(this, "api", void 0), (0, D._)(this, "garsonApi", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "logger", _.U.getLogger("SearchModule")), (0, D._)(this, "peerRecentSearchStorage$", void 0), (0, D._)(this, "flowRecentSearchStorage$", void 0), (0, D._)(this, "OFFICIAL_ORGS_CATEGORY_ID", 10), (0, D._)(this, "searchPeerMessages", (e, t, i, s, r) => this.api.searchPeerMessages(t, i, s, (0, eK.F8)(e), {
                        justDocumentSearch: r
                    }).pipe(this.getUsers())), (0, D._)(this, "searchLinks", e => this.api.searchLinks((0, eK.F8)(e))), (0, D._)(this, "loadMoreSearchMessages", (e, t) => this.api.loadMoreSearchMessages(e, t).pipe(this.getUsers())), (0, D._)(this, "getPeerRecentSearch", () => this.peerRecentSearchStorage$.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })), (0, X.T)(e => e.sort((e, t) => e.modified_at > t.modified_at ? -1 : 1)))), (0, D._)(this, "saveToPeerRecentSearch", e => this.peerRecentSearchStorage$.put(e)), (0, D._)(this, "saveToQueryRecentSearch", e => this.ctx.configs.getParameter(si).pipe((0, z.n)(t => {
                        let i = [e, ...(t ? JSON.parse(t) : []).filter(t => e.id !== t.id)];
                        return this.ctx.configs.setLocalConfig(si, JSON.stringify(i))
                    }))), (0, D._)(this, "removeFromQueryRecentSearch", e => this.ctx.configs.getParameter(si).pipe((0, z.n)(t => {
                        let i = [...(t ? JSON.parse(t) : []).filter(t => e.id !== t.id)];
                        return this.ctx.configs.setLocalConfig(si, JSON.stringify(i))
                    }))), (0, D._)(this, "getQueryRecentSearch", () => this.ctx.configs.getParameter(si).pipe((0, z.n)(e => {
                        let t;
                        return e && (t = JSON.parse(e)), (0, j.of)(t)
                    }))), (0, D._)(this, "clearPeerRecentSearch", () => this.peerRecentSearchStorage$.clear()), (0, D._)(this, "deletePeerRecentSearch", e => this.peerRecentSearchStorage$.delete(e)), (0, D._)(this, "globalChannelSearch", e => this.api.globalChannelSearch(e).pipe((0, z.n)(e => this.ctx.entities.loadUsersGroups(e.userPeers, e.groupPeers).pipe((0, ey.u)(e))))), (0, D._)(this, "allMessagesSearch", function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR.I3.SEARCHMESSAGESCOPE_SCOPE_ALL;
                        return r.api.allMessagesSearch(e, t).pipe((0, z.n)(e => r.ctx.entities.loadUsersGroups(e.userOutPeers, e.groupOutPeers).pipe((0, ey.u)(e))))
                    }), (0, D._)(this, "searchPeerMedia", (e, t, i, s) => this.api.searchPeerMedia((0, eK.F8)(e), t, i, s)), (0, D._)(this, "searchMembers", (e, t, i, s) => this.api.searchMembers(e, (0, eQ.YQ)(t), (0, eu.g)(i), s)), (0, D._)(this, "searchMarket", (e, t, i) => this.api.searchMarket(e, t, i)), (0, D._)(this, "searchProduct", (e, t) => this.api.searchProduct(e, t)), (0, D._)(this, "searchMarketPopular", () => this.api.searchMarketPopular()), (0, D._)(this, "loadRecentSearches", () => this.ctx.configs.getParameter(st).pipe((0, z.n)(e => {
                        if (e) {
                            let t = JSON.parse(e);
                            return (0, j.of)(t)
                        }
                        return (0, j.of)([])
                    }))), (0, D._)(this, "addRecentSearches", e => this.ctx.configs.getParameter(st).pipe((0, z.n)(t => {
                        if (t) {
                            let i, s = JSON.parse(t);
                            return i = -1 === s.findIndex(t => t.type === e.type && t.title === e.title) ? JSON.stringify([e, ...s]) : JSON.stringify(s.sort(t => t.id === e.id && t.title === e.title ? -1 : 1)), this.ctx.configs.setLocalConfig(st, i)
                        } {
                            let t = JSON.stringify([e]);
                            return this.ctx.configs.setLocalConfig(st, t)
                        }
                    }))), (0, D._)(this, "clearRecentSearches", () => this.ctx.configs.deleteParameter(st)), (0, D._)(this, "clearQueryRecentSearch", () => this.ctx.configs.deleteParameter(si)), (0, D._)(this, "searchContent", (e, t, i) => this.api.searchContent(e, t, i).pipe((0, z.n)(e => {
                        let t = e.contentResults.map(e => (0, ed.t)(e.messageId.peer.id));
                        return this.ctx.groups.loadGroups(t, !0).pipe((0, ey.u)(e))
                    }))), (0, D._)(this, "saveToFlowRecentSearch", e => this.flowRecentSearchStorage$.put(e)), (0, D._)(this, "removeFromFlowRecentSearch", e => this.flowRecentSearchStorage$.delete(e)), (0, D._)(this, "clearFlowRecentSearch", () => this.flowRecentSearchStorage$.clear()), (0, D._)(this, "getFlowRecentSearch", () => this.flowRecentSearchStorage$.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [t, i] = e;
                        return i
                    })), (0, X.T)(e => e.sort((e, t) => e.lastModified > t.lastModified ? -1 : 1)))), (0, D._)(this, "getSuggestedBots", () => (0, G.UY)(() => this.garsonApi.GetBotsByCategory({
                        categoryId: this.OFFICIAL_ORGS_CATEGORY_ID,
                        pagination: void 0
                    })).pipe((0, z.n)(e => {
                        var t;
                        let i = (null == (t = e.bots) ? void 0 : t.bots) ?? [];
                        if (0 === i.length) return (0, j.of)([]);
                        let s = (0, eu.g)(i.map(e => e.botUserId));
                        return this.ctx.users.loadUsers(s).pipe((0, X.T)(e => {
                            let t = new Map(e.map(e => [e.id, e]));
                            return i.map(e => {
                                let i = t.get(e.botUserId);
                                return {
                                    ...(0, iR.Lf)(),
                                    peer: {
                                        id: e.botUserId,
                                        type: er.RK.PEERTYPE_PRIVATE
                                    },
                                    title: (0, el.RN)(i),
                                    description: e.description
                                }
                            })
                        }))
                    }))), (0, D._)(this, "getUsers", () => (0, z.n)(e => {
                        let t = e.searchResults.map(e => {
                            var t;
                            return e.result ? {
                                uid: null == (t = e.result) ? void 0 : t.senderId,
                                accessHash: "0"
                            } : void 0
                        }).filter(Boolean);
                        return this.ctx.users.loadUsers(t).pipe((0, $.W)(t => (this.logger.info("getUsers search module error = ", t), (0, j.of)(e))), (0, ey.u)(e))
                    })), this.api = e, this.garsonApi = t, this.ctx = i, this.db = s, this.peerRecentSearchStorage$ = this.db.getKeyValue(e6.F8.PeerRecentSearch), this.flowRecentSearchStorage$ = this.db.getKeyValue(e6.F8.FlowRecentSearch)
                }
            }
            var sr = i(20125);
            class sn {
                sendGiftPacketWithWallet(e, t, i, s) {
                    return (0, eN.v)(() => this.api.SendGiftPacketWithWallet({
                        peer: e,
                        randomId: t,
                        message: i,
                        sourceWalletId: s
                    }))
                }
                getGiftPacketPaymentToken(e, t, i, s) {
                    return (0, G.UY)(() => this.api.GetGiftPacketPaymentToken({
                        token: e,
                        amount: t,
                        peer: i,
                        message: s
                    }))
                }
                openGiftPacket(e, t, i, s, r) {
                    return (0, G.UY)(() => this.api.OpenGiftPacket({
                        msgIdentifier: {
                            peer: e,
                            date: i,
                            randomId: t
                        },
                        receiverWalletId: s,
                        pageNo: r,
                        orderType: sr.BY.GIFTRECEIVERSORDERTYPE_PRIZE_DESC
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class sa {
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("GifPocketModule")), (0, D._)(this, "sendGiftPacketWithWallet", (e, t, i, s) => this.api.sendGiftPacketWithWallet(e, t, i, s)), (0, D._)(this, "getGiftPacketPaymentToken", (e, t, i, s) => this.api.getGiftPacketPaymentToken(e, t, i, s)), (0, D._)(this, "openGiftPacket", (e, t, i, s, r) => this.api.openGiftPacket(e, t, i, s, r)), this.api = e, this.ctx = t
                }
            }
            let so = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.peer && er.L0.encode(e.peer, t.uint32(10).fork()).join(), "0" !== e.randomId && t.uint32(16).int64(e.randomId), void 0 !== e.message && eO.kkU.encode(e.message, t.uint32(26).fork()).join(), "" !== e.sourceWalletId && t.uint32(34).string(e.sourceWalletId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peer: void 0,
                                randomId: "0",
                                message: void 0,
                                sourceWalletId: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = er.L0.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.randomId = i.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.message = eO.kkU.decode(i, i.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.sourceWalletId = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sd = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.msgIdentifier && eO.J2R.encode(e.msgIdentifier, t.uint32(10).fork()).join(), "" !== e.receiverWalletId && t.uint32(18).string(e.receiverWalletId), void 0 !== e.pageNo && tL.as.encode({
                            value: e.pageNo
                        }, t.uint32(26).fork()).join(), 0 !== e.orderType && t.uint32(32).int32(e.orderType), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                msgIdentifier: void 0,
                                receiverWalletId: "",
                                pageNo: void 0,
                                orderType: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.msgIdentifier = eO.J2R.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.receiverWalletId = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.pageNo = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.orderType = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sl = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.giftReceivers) sr.E0.encode(i, t.uint32(10).fork()).join();
                        for (let i of (0 !== e.status && t.uint32(16).int32(e.status), 0 !== e.openedCount && t.uint32(24).int32(e.openedCount), void 0 !== e.selfWinAmount && ip.j1.encode(e.selfWinAmount, t.uint32(34).fork()).join(), void 0 !== e.rank && tL.as.encode({
                                value: e.rank
                            }, t.uint32(42).fork()).join(), e.userOutPeers)) er.Uw.encode(i, t.uint32(50).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                giftReceivers: [],
                                status: 0,
                                openedCount: 0,
                                selfWinAmount: void 0,
                                rank: void 0,
                                userOutPeers: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.giftReceivers.push(sr.E0.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.status = i.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.openedCount = i.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.selfWinAmount = ip.j1.decode(i, i.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.rank = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.userOutPeers.push(er.Uw.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                su = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.token && t.uint32(10).string(e.token), 0 !== e.amount && t.uint32(16).int64(e.amount), void 0 !== e.peer && er.L0.encode(e.peer, t.uint32(26).fork()).join(), void 0 !== e.message && eO.kkU.encode(e.message, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                token: "",
                                amount: 0,
                                peer: void 0,
                                message: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.token = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.amount = globalThis.Number(i.int64().toString());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.peer = er.L0.decode(i, i.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.message = eO.kkU.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sp = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.paymentToken && t.uint32(10).string(e.paymentToken), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                paymentToken: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.paymentToken = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class sh {
                SendGiftPacketWithWallet(e, t) {
                    return this.rpc.unary(sc, e, t)
                }
                OpenGiftPacket(e, t) {
                    return this.rpc.unary(sf, e, t)
                }
                GetGiftPacketPaymentToken(e, t) {
                    return this.rpc.unary(sv, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.SendGiftPacketWithWallet = this.SendGiftPacketWithWallet.bind(this), this.OpenGiftPacket = this.OpenGiftPacket.bind(this), this.GetGiftPacketPaymentToken = this.GetGiftPacketPaymentToken.bind(this)
                }
            }
            let sg = {
                    serviceName: "bale.giftpacket.v1.GiftPacket"
                },
                sc = {
                    methodName: "SendGiftPacketWithWallet",
                    service: sg,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return so.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.pQ.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                sf = {
                    methodName: "OpenGiftPacket",
                    service: sg,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sd.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sl.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                sv = {
                    methodName: "GetGiftPacketPaymentToken",
                    service: sg,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return su.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sp.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                sm = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(10).fork()).join(), "0" !== e.rid && t.uint32(16).int64(e.rid), 0 !== e.date && t.uint32(24).int64(e.date), 0 !== e.senderId && t.uint32(32).int32(e.senderId), void 0 !== e.content && eO.QBZ.encode(e.content, t.uint32(42).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: void 0,
                                rid: "0",
                                date: 0,
                                senderId: 0,
                                content: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = i.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.date = globalThis.Number(i.int64().toString());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.senderId = i.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.content = eO.QBZ.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sk = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(10).fork()).join(), void 0 !== e.date && ip.j1.encode(e.date, t.uint32(18).fork()).join(), 0 !== e.contentType && t.uint32(24).int32(e.contentType), 0 !== e.loadMode && t.uint32(32).int32(e.loadMode), 0 !== e.minimumResults && t.uint32(40).int32(e.minimumResults), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: void 0,
                                date: void 0,
                                contentType: 0,
                                loadMode: 0,
                                minimumResults: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.date = ip.j1.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.contentType = i.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.loadMode = i.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.minimumResults = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sy = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.mediaResults) sm.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                mediaResults: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.mediaResults.push(sm.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sb = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sT = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (t.uint32(10).fork(), e.activeTab)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                activeTab: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.activeTab.push(i.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = i.uint32() + i.pos;
                                    for (; i.pos < e;) r.activeTab.push(i.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class sM {
                LoadMedia(e, t) {
                    return this.rpc.unary(sw, e, t)
                }
                GetActiveSharedMedia(e, t) {
                    return this.rpc.unary(sP, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.LoadMedia = this.LoadMedia.bind(this), this.GetActiveSharedMedia = this.GetActiveSharedMedia.bind(this)
                }
            }
            let sS = {
                    serviceName: "bale.shared_media.v1.SharedMediaService"
                },
                sw = {
                    methodName: "LoadMedia",
                    service: sS,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sk.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sy.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                sP = {
                    methodName: "GetActiveSharedMedia",
                    service: sS,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sb.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sT.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            class sE {
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "logger", _.U.getLogger("SharedMediaModule")), (0, D._)(this, "loadMedia", (e, t, i, s) => (0, G.UY)(() => this.api.LoadMedia({
                        exPeer: e,
                        contentType: s,
                        date: {
                            value: t.toString()
                        },
                        loadMode: i,
                        minimumResults: 20
                    }))), (0, D._)(this, "getActiveSharedMedia", e => (0, G.UY)(() => this.api.GetActiveSharedMedia({
                        exPeer: e
                    }))), this.api = e, this.ctx = t, this.db = i
                }
            }
            let sI = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.version && t.uint32(8).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                version: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sR = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.stores && t.uint32(10).string(e.stores), 0 !== e.version && t.uint32(16).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                stores: "",
                                version: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.stores = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sD = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.categoryId && t.uint32(8).int32(e.categoryId), void 0 !== e.level && ip.as.encode(e.level, t.uint32(18).fork()).join(), void 0 !== e.includeSampleMarkets && ip.Ci.encode(e.includeSampleMarkets, t.uint32(26).fork()).join(), void 0 !== e.version && ip.as.encode(e.version, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                categoryId: 0,
                                level: void 0,
                                includeSampleMarkets: void 0,
                                version: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.level = ip.as.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.includeSampleMarkets = ip.Ci.decode(i, i.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.version = ip.as.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s_ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.categories) iT.encode(i, t.uint32(10).fork()).join();
                        return void 0 !== e.version && ip.as.encode(e.version, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                categories: [],
                                version: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.categories.push(iT.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.version = ip.as.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sU = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.title && t.uint32(10).string(e.title), 0 !== e.categoryId && t.uint32(16).int32(e.categoryId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                title: "",
                                categoryId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.categoryId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sA = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.tag && iM.encode(e.tag, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                tag: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.tag = iM.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sC = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.categoryId && t.uint32(8).int32(e.categoryId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                categoryId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.categoryId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sO = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.tags) iM.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                tags: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.tags.push(iM.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sG = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (0 !== e.marketPeerId && t.uint32(8).int32(e.marketPeerId), "" !== e.displayName && t.uint32(18).string(e.displayName), 0 !== e.categoryId && t.uint32(24).int32(e.categoryId), t.uint32(34).fork(), e.tagIds)) t.int64(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketPeerId: 0,
                                displayName: "",
                                categoryId: 0,
                                tagIds: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.marketPeerId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.displayName = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 4:
                                    if (32 === e) {
                                        r.tagIds.push(rO(i.int64()));
                                        continue
                                    }
                                    if (34 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.tagIds.push(rO(i.int64()));
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sx = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                sL = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                sN = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.marketJoinRequests) iS.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketJoinRequests: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.marketJoinRequests.push(iS.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sq = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.marketPeerId && t.uint32(8).int32(e.marketPeerId), 0 !== e.requestId && t.uint32(16).int32(e.requestId), "" !== e.displayName && t.uint32(26).string(e.displayName), 0 !== e.categoryId && t.uint32(32).int32(e.categoryId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketPeerId: 0,
                                requestId: 0,
                                displayName: "",
                                categoryId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.marketPeerId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.requestId = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.displayName = i.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.categoryId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sF = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.marketPeerId && t.uint32(8).int32(e.marketPeerId), 0 !== e.rejectCause && t.uint32(16).int32(e.rejectCause), 0 !== e.requestId && t.uint32(24).int32(e.requestId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketPeerId: 0,
                                rejectCause: 0,
                                requestId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.marketPeerId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rejectCause = i.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.requestId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sH = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.categoryId && t.uint32(8).int32(e.categoryId), void 0 !== e.pagination && iw.encode(e.pagination, t.uint32(18).fork()).join(), 0 !== e.version && t.uint32(24).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                categoryId: 0,
                                pagination: void 0,
                                version: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.pagination = iw.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sV = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.markets) iy.encode(i, t.uint32(10).fork()).join();
                        return 0 !== e.version && t.uint32(16).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                markets: [],
                                version: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.markets.push(iy.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sB = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (t.uint32(10).fork(), e.categoryIds)) t.int32(i);
                        return t.join(), 0 !== e.gender && t.uint32(16).int32(e.gender), void 0 !== e.isSkipped && tL._t.encode({
                            value: e.isSkipped
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                categoryIds: [],
                                gender: 0,
                                isSkipped: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 === e) {
                                        r.categoryIds.push(i.int32());
                                        continue
                                    }
                                    if (10 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.categoryIds.push(i.int32());
                                        continue
                                    }
                                    break;
                                case 2:
                                    if (16 !== e) break;
                                    r.gender = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.isSkipped = tL._t.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sj = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                sY = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                sW = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (0 !== e.status && t.uint32(8).int32(e.status), t.uint32(18).fork(), e.categoryIds)) t.int32(i);
                        return t.join(), 0 !== e.gender && t.uint32(24).int32(e.gender), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                status: 0,
                                categoryIds: [],
                                gender: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.status = i.int32();
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.categoryIds.push(i.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.categoryIds.push(i.int32());
                                        continue
                                    }
                                    break;
                                case 3:
                                    if (24 !== e) break;
                                    r.gender = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };

            function sz() {
                return {
                    categoryId: 0,
                    pagination: void 0,
                    version: 0
                }
            }
            let s$ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.categoryId && t.uint32(8).int32(e.categoryId), void 0 !== e.pagination && iw.encode(e.pagination, t.uint32(18).fork()).join(), 0 !== e.version && t.uint32(24).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = sz();
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.categoryId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.pagination = iw.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sK = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.products) ik.encode(i, t.uint32(10).fork()).join();
                        return 0 !== e.version && t.uint32(16).int32(e.version), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                products: [],
                                version: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.products.push(ik.decode(i, i.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.version = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sJ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.startDate && t.uint32(8).int64(e.startDate), 0 !== e.endDate && t.uint32(16).int64(e.endDate), 0 !== e.categoryId && t.uint32(24).int32(e.categoryId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                startDate: 0,
                                endDate: 0,
                                categoryId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.startDate = rO(i.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.endDate = rO(i.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.categoryId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sZ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.products) ik.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                products: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.products.push(ik.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sX = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.peer && er.L0.encode(e.peer, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peer: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = er.L0.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                sQ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.numberOfSales && t.uint32(8).int64(e.numberOfSales), !1 !== e.isMarket && t.uint32(16).bool(e.isMarket), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                numberOfSales: 0,
                                isMarket: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.numberOfSales = rO(i.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isMarket = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s0 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.ratingType && t.uint32(8).int32(e.ratingType), void 0 !== e.pagination && iw.encode(e.pagination, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                ratingType: 0,
                                pagination: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.ratingType = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.pagination = iw.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s1 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.markets) iy.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                markets: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.markets.push(iy.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s2 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.rate && t.uint32(8).int32(e.rate), void 0 !== e.userOpinion && ip.hU.encode(e.userOpinion, t.uint32(18).fork()).join(), void 0 !== e.clientVersion && ip.hU.encode(e.clientVersion, t.uint32(26).fork()).join(), Object.entries(e.extraFields).forEach(e => {
                            let [i, s] = e;
                            s3.encode({
                                key: i,
                                value: s
                            }, t.uint32(34).fork()).join()
                        }), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                rate: 0,
                                userOpinion: void 0,
                                clientVersion: void 0,
                                extraFields: {}
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.rate = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.userOpinion = ip.hU.decode(i, i.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.clientVersion = ip.hU.decode(i, i.uint32());
                                    continue;
                                case 4: {
                                    if (34 !== e) break;
                                    let t = s3.decode(i, i.uint32());
                                    void 0 !== t.value && (r.extraFields[t.key] = t.value);
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s3 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.key && t.uint32(10).string(e.key), "" !== e.value && t.uint32(18).string(e.value), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                key: "",
                                value: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.key = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.value = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s4 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                s5 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.requests) iS.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                requests: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.requests.push(iS.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s7 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.peerId && t.uint32(8).int32(e.peerId), void 0 !== e.nickName && t.uint32(18).string(e.nickName), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peerId: void 0,
                                nickName: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.peerId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.nickName = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s8 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.market && ib.encode(e.market, t.uint32(10).fork()).join(), void 0 !== e.lastRequest && iS.encode(e.lastRequest, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                market: void 0,
                                lastRequest: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.market = ib.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.lastRequest = iS.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s6 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.peerId && t.uint32(8).int32(e.peerId), void 0 !== e.displayName && tL.hU.encode({
                            value: e.displayName
                        }, t.uint32(18).fork()).join(), void 0 !== e.primaryCategoryId && tL.as.encode({
                            value: e.primaryCategoryId
                        }, t.uint32(26).fork()).join(), void 0 !== e.isBanned && tL._t.encode({
                            value: e.isBanned
                        }, t.uint32(34).fork()).join(), void 0 !== e.isActive && tL._t.encode({
                            value: e.isActive
                        }, t.uint32(42).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peerId: 0,
                                displayName: void 0,
                                primaryCategoryId: void 0,
                                isBanned: void 0,
                                isActive: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.peerId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.displayName = tL.hU.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.primaryCategoryId = tL.as.decode(i, i.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.isBanned = tL._t.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.isActive = tL._t.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                s9 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.banners) ic.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                banners: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.banners.push(ic.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                re = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                rt = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.markets) ib.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                markets: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.markets.push(ib.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ri = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.marketId && t.uint32(8).int32(e.marketId), !1 !== e.isPermanent && t.uint32(16).bool(e.isPermanent), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketId: 0,
                                isPermanent: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.marketId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isPermanent = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rs = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.marketId && t.uint32(8).int32(e.marketId), !1 !== e.isPermanent && t.uint32(16).bool(e.isPermanent), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                marketId: 0,
                                isPermanent: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.marketId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isPermanent = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rr = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.items) iP.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                items: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.items.push(iP.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rn = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.links) iE.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                links: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.links.push(iE.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class ra {
                GetStores(e, t) {
                    return this.rpc.unary(rd, e, t)
                }
                GetCategoriesList(e, t) {
                    return this.rpc.unary(rl, e, t)
                }
                GetYaldaStores(e, t) {
                    return this.rpc.unary(ru, e, t)
                }
                CreateTag(e, t) {
                    return this.rpc.unary(rp, e, t)
                }
                GetTags(e, t) {
                    return this.rpc.unary(rh, e, t)
                }
                CreateMarketJoinRequest(e, t) {
                    return this.rpc.unary(rg, e, t)
                }
                GetMarketJoinRequests(e, t) {
                    return this.rpc.unary(rc, e, t)
                }
                GetCategoryMarkets(e, t) {
                    return this.rpc.unary(rf, e, t)
                }
                GetCategoryProducts(e, t) {
                    return this.rpc.unary(rv, e, t)
                }
                SetOnboardingData(e, t) {
                    return this.rpc.unary(rm, e, t)
                }
                GetOnboardingStatus(e, t) {
                    return this.rpc.unary(rk, e, t)
                }
                GetIndexedProducts(e, t) {
                    return this.rpc.unary(ry, e, t)
                }
                GetNumberOfSales(e, t) {
                    return this.rpc.unary(rb, e, t)
                }
                GetTopMarkets(e, t) {
                    return this.rpc.unary(rT, e, t)
                }
                SubmitMarketFeedback(e, t) {
                    return this.rpc.unary(rM, e, t)
                }
                AcceptMarketJoinRequest(e, t) {
                    return this.rpc.unary(rS, e, t)
                }
                RejectMarketJoinRequest(e, t) {
                    return this.rpc.unary(rw, e, t)
                }
                GetMarketsPendingJoinRequest(e, t) {
                    return this.rpc.unary(rP, e, t)
                }
                GetMarket(e, t) {
                    return this.rpc.unary(rE, e, t)
                }
                UpdateMarketInfo(e, t) {
                    return this.rpc.unary(rI, e, t)
                }
                SetMarketBanners(e, t) {
                    return this.rpc.unary(rR, e, t)
                }
                GetPendingCampaignMarkets(e, t) {
                    return this.rpc.unary(rD, e, t)
                }
                AcceptCampaignMarket(e, t) {
                    return this.rpc.unary(r_, e, t)
                }
                RejectCampaignMarket(e, t) {
                    return this.rpc.unary(rU, e, t)
                }
                SetPopularSearches(e, t) {
                    return this.rpc.unary(rA, e, t)
                }
                SetGenericDeepLinks(e, t) {
                    return this.rpc.unary(rC, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetStores = this.GetStores.bind(this), this.GetCategoriesList = this.GetCategoriesList.bind(this), this.GetYaldaStores = this.GetYaldaStores.bind(this), this.CreateTag = this.CreateTag.bind(this), this.GetTags = this.GetTags.bind(this), this.CreateMarketJoinRequest = this.CreateMarketJoinRequest.bind(this), this.GetMarketJoinRequests = this.GetMarketJoinRequests.bind(this), this.GetCategoryMarkets = this.GetCategoryMarkets.bind(this), this.GetCategoryProducts = this.GetCategoryProducts.bind(this), this.SetOnboardingData = this.SetOnboardingData.bind(this), this.GetOnboardingStatus = this.GetOnboardingStatus.bind(this), this.GetIndexedProducts = this.GetIndexedProducts.bind(this), this.GetNumberOfSales = this.GetNumberOfSales.bind(this), this.GetTopMarkets = this.GetTopMarkets.bind(this), this.SubmitMarketFeedback = this.SubmitMarketFeedback.bind(this), this.AcceptMarketJoinRequest = this.AcceptMarketJoinRequest.bind(this), this.RejectMarketJoinRequest = this.RejectMarketJoinRequest.bind(this), this.GetMarketsPendingJoinRequest = this.GetMarketsPendingJoinRequest.bind(this), this.GetMarket = this.GetMarket.bind(this), this.UpdateMarketInfo = this.UpdateMarketInfo.bind(this), this.SetMarketBanners = this.SetMarketBanners.bind(this), this.GetPendingCampaignMarkets = this.GetPendingCampaignMarkets.bind(this), this.AcceptCampaignMarket = this.AcceptCampaignMarket.bind(this), this.RejectCampaignMarket = this.RejectCampaignMarket.bind(this), this.SetPopularSearches = this.SetPopularSearches.bind(this), this.SetGenericDeepLinks = this.SetGenericDeepLinks.bind(this)
                }
            }
            let ro = {
                    serviceName: "bale.market.v1.Market"
                },
                rd = {
                    methodName: "GetStores",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sI.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sR.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rl = {
                    methodName: "GetCategoriesList",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sD.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = s_.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                ru = {
                    methodName: "GetYaldaStores",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sI.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sR.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rp = {
                    methodName: "CreateTag",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sU.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sA.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rh = {
                    methodName: "GetTags",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sC.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sO.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rg = {
                    methodName: "CreateMarketJoinRequest",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sG.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sx.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rc = {
                    methodName: "GetMarketJoinRequests",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sL.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sN.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rf = {
                    methodName: "GetCategoryMarkets",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sH.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sV.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rv = {
                    methodName: "GetCategoryProducts",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s$.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sK.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rm = {
                    methodName: "SetOnboardingData",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sB.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sj.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rk = {
                    methodName: "GetOnboardingStatus",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sY.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sW.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                ry = {
                    methodName: "GetIndexedProducts",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sJ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sZ.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rb = {
                    methodName: "GetNumberOfSales",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sX.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = sQ.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rT = {
                    methodName: "GetTopMarkets",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s0.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = s1.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rM = {
                    methodName: "SubmitMarketFeedback",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s2.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rS = {
                    methodName: "AcceptMarketJoinRequest",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sq.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rw = {
                    methodName: "RejectMarketJoinRequest",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return sF.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rP = {
                    methodName: "GetMarketsPendingJoinRequest",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s4.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = s5.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rE = {
                    methodName: "GetMarket",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s7.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = s8.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rI = {
                    methodName: "UpdateMarketInfo",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s6.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rR = {
                    methodName: "SetMarketBanners",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s9.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rD = {
                    methodName: "GetPendingCampaignMarkets",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return re.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = rt.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                r_ = {
                    methodName: "AcceptCampaignMarket",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ri.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rU = {
                    methodName: "RejectCampaignMarket",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rs.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rA = {
                    methodName: "SetPopularSearches",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rr.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rC = {
                    methodName: "SetGenericDeepLinks",
                    service: ro,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rn.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };

            function rO(e) {
                return globalThis.Number(e.toString())
            }
            class rG {
                getCategoriesList(e, t, i, s) {
                    return (0, G.UY)(() => this.api.GetCategoriesList({
                        categoryId: t,
                        level: {
                            value: e
                        },
                        version: {
                            value: s
                        },
                        includeSampleMarkets: {
                            value: i
                        }
                    }))
                }
                getCategoryMarkets(e, t, i) {
                    return (0, G.UY)(() => this.api.GetCategoryMarkets({
                        categoryId: e,
                        pagination: {
                            limit: i,
                            page: t
                        },
                        version: 0
                    }))
                }
                getCategoryProducts(e, t, i) {
                    return (0, G.UY)(() => this.api.GetCategoryProducts({
                        categoryId: e,
                        pagination: {
                            page: t,
                            limit: i
                        },
                        version: 0
                    }))
                }
                searchMarket() {
                    return (0, G.UY)(() => this.api.GetCategoryProducts({
                        ...sz()
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            let rx = {
                    items: [{
                        action: {
                            id: 0x540235e9,
                            type: 2,
                            url: "balecommerce"
                        },
                        drawableId: "hint",
                        id: 0,
                        isDisable: !1,
                        maxAppVersion: 0,
                        minAppVersion: 0,
                        title: "راهنمای فروشندگان"
                    }, {
                        action: {
                            id: 3,
                            type: 1,
                            url: "https://tooshle.bale.ai/shopman"
                        },
                        drawableId: "vitrin_join_form",
                        id: 0,
                        isDisable: !1,
                        maxAppVersion: 0,
                        minAppVersion: 0,
                        title: "حضور در ویترین"
                    }, {
                        action: {
                            id: 3,
                            type: 1,
                            url: "https://tabligh.bale.ai"
                        },
                        drawableId: "ads",
                        id: 0,
                        isDisable: !1,
                        maxAppVersion: 0,
                        minAppVersion: 0,
                        title: "سفارش تبلیغات"
                    }, {
                        action: {
                            id: 1,
                            type: 3,
                            url: "https://ble.ir/balecommerce/-6366286404700987682/1678900035430"
                        },
                        drawableId: "wholesaler",
                        id: 0,
                        badge: "جدید",
                        isDisable: !1,
                        maxAppVersion: 0,
                        minAppVersion: 0,
                        title: "تبلیغات گسترده"
                    }, {
                        action: {
                            id: 1,
                            type: 1,
                            url: "Url"
                        },
                        dialog: {
                            description: "با استفاده از این ویژگی، می‌توانید برای هر یک از محصولات خود فاکتور ایجاد کنید و با مشتریان خود به اشتراک بگذارید. همچنین می‌توانید لوگو و نام فروشگاه‌تان را در این فاکتور درج کنید.",
                            title: "ساخت فاکتور"
                        },
                        drawableId: "create_invoice",
                        id: 0,
                        isDisable: !0,
                        maxAppVersion: 0,
                        minAppVersion: 0,
                        title: "ساخت فاکتور"
                    }],
                    title: "خدمات فروشندگان"
                },
                rL = "MarketCategoriesKey",
                rN = _.U.getLogger("Market");
            class rq {
                loadBanners() {
                    return this.ctx.configs.getParameter("market_banners").pipe((0, z.n)(e => {
                        if (e) try {
                            let t = JSON.parse(e);
                            return (0, j.of)(t.map(e => ({
                                action: null == e ? void 0 : e.action,
                                imageUrl: null == e ? void 0 : e.imageUrl,
                                minAppVersion: null == e ? void 0 : e.minAppVersion,
                                maxAppVersion: null == e ? void 0 : e.maxAppVersion
                            })))
                        } catch (e) {}
                        return (0, j.of)([])
                    }))
                }
                loadMarketMenus() {
                    return this.ctx.configs.getParameter("market_seller_services_web").pipe((0, X.T)(e => e ?? rx), (0, z.n)(e => {
                        var t, i;
                        let s = {
                            items: null == (t = e ?? rx) ? void 0 : t.items,
                            title: (null == t || null == (i = t.menu) ? void 0 : i.title) || "خدمات فروشندگان"
                        };
                        return (0, j.of)(s.items)
                    }), (0, $.W)(e => (rN.error("loadMarketMenus", e), q.w)))
                }
                loadCategories(e, t, i, s) {
                    return this.marketApi.getCategoriesList(i, t, e, s).pipe((0, X.T)(e => ({
                        categories: e.categories.sort((e, t) => e.id < t.id ? -1 : 1).sort((e, t) => e.pinned && t.pinned ? e.dialog ? -1 : 1 : e.pinned ? -1 : 1),
                        version: e.version
                    })), (0, ee.M)(e => {
                        (0, U.s)(this.ctx.configs.setParameter(rL, e)).then(() => {
                            rN.debug("Market configs got saved")
                        }).catch(e => {
                            rN.error("loadCategories", e)
                        })
                    }))
                }
                getCategories(e, t, i, s) {
                    return (0, B.h)(this.ctx.configs.getParameter(rL).pipe((0, z.n)(r => r ? (0, j.of)(r) : (rN.debug("market", "no cache"), this.loadCategories(e, t, i, s)))), this.loadCategories(e, t, i, s)).pipe((0, W.p)(e => !!e.categories))
                }
                getCategoryMarkets(e, t, i) {
                    return this.marketApi.getCategoryMarkets(e, t, i)
                }
                getCategoryProducts(e, t, i) {
                    return this.marketApi.getCategoryProducts(e, t, i)
                }
                constructor(e, t) {
                    (0, D._)(this, "marketApi", void 0), (0, D._)(this, "ctx", void 0), this.marketApi = e, this.ctx = t
                }
            }
            class rF {
                getMessagesSeenList(e, t, i, s) {
                    return (0, G.UY)(() => this.api.GetMessageSeenList({
                        peer: e,
                        messageId: t,
                        page: i,
                        limit: s
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class rH {
                getMessagesSeenList(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20;
                    return this.api.getMessagesSeenList(e, t, i, s).pipe((0, z.n)(e => {
                        let {
                            count: t,
                            usersSeen: i
                        } = e;
                        return this.ctx.users.loadUsers(i.map(e => (0, eu.j)(e.userId))).pipe((0, X.T)(() => ({
                            usersSeen: i,
                            count: t
                        })))
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("NegahModule")), this.api = e, this.ctx = t
                }
            }
            var rV = i(1963);
            let rB = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), 0 !== e.screenMode && t.uint32(16).int32(e.screenMode), void 0 !== e.themeParams && rV.AB.encode(e.themeParams, t.uint32(26).fork()).join(), void 0 !== e.main && rV.QH.encode(e.main, t.uint32(34).fork()).join(), void 0 !== e.menuButton && rV.GX.encode(e.menuButton, t.uint32(42).fork()).join(), void 0 !== e.keyboardButton && rV.Eh.encode(e.keyboardButton, t.uint32(50).fork()).join(), void 0 !== e.directLink && rV.Sq.encode(e.directLink, t.uint32(58).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                botUserId: 0,
                                screenMode: 0,
                                themeParams: void 0,
                                main: void 0,
                                menuButton: void 0,
                                keyboardButton: void 0,
                                directLink: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.screenMode = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.themeParams = rV.AB.decode(i, i.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.main = rV.QH.decode(i, i.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.menuButton = rV.GX.decode(i, i.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.keyboardButton = rV.Eh.decode(i, i.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.directLink = rV.Sq.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rj = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.url && t.uint32(10).string(e.url), 0 !== e.screenMode && t.uint32(16).int32(e.screenMode), void 0 !== e.queryId && tL.hU.encode({
                            value: e.queryId
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                url: "",
                                screenMode: 0,
                                queryId: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.screenMode = i.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.queryId = tL.hU.decode(i, i.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rY = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                botUserId: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rW = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.menuButton && rV.LF.encode(e.menuButton, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                menuButton: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.menuButton = rV.LF.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                rz = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), "" !== e.method && t.uint32(18).string(e.method), "" !== e.params && t.uint32(26).string(e.params), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                botUserId: 0,
                                method: "",
                                params: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.method = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.params = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                r$ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.data && t.uint32(34).string(e.data), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                data: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 4:
                                    if (34 !== e) break;
                                    r.data = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class rK {
                GetMiniAppUrl(e, t) {
                    return this.rpc.unary(rZ, e, t)
                }
                GetMenuButton(e, t) {
                    return this.rpc.unary(rX, e, t)
                }
                InvokeCustomMethod(e, t) {
                    return this.rpc.unary(rQ, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetMiniAppUrl = this.GetMiniAppUrl.bind(this), this.GetMenuButton = this.GetMenuButton.bind(this), this.InvokeCustomMethod = this.InvokeCustomMethod.bind(this)
                }
            }
            let rJ = {
                    serviceName: "bale.appzar.v1.Appzar"
                },
                rZ = {
                    methodName: "GetMiniAppUrl",
                    service: rJ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rB.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = rj.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rX = {
                    methodName: "GetMenuButton",
                    service: rJ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rY.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = rW.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                rQ = {
                    methodName: "InvokeCustomMethod",
                    service: rJ,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return rz.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = r$.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            class r0 {
                getBotMenuButtons(e) {
                    return (0, G.UY)(() => this.api.GetMenuButton({
                        botUserId: e
                    }))
                }
                getMiniAppUrl(e, t, i, s, r, n, a) {
                    return (0, G.UY)(() => this.api.GetMiniAppUrl({
                        botUserId: e,
                        screenMode: t,
                        themeParams: i,
                        main: s,
                        menuButton: r,
                        keyboardButton: n,
                        directLink: a
                    }))
                }
                invokeCustomMethod(e, t, i) {
                    return (0, G.UY)(() => this.api.InvokeCustomMethod({
                        method: t,
                        params: i,
                        botUserId: e
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            let r1 = _.U.getLogger("ketf");
            class r2 {
                getBotMenuButtons(e) {
                    return this.api.getBotMenuButtons(e).pipe((0, $.W)(e => (r1.error("error in getBotMenuButtons", e), q.w)))
                }
                getMiniAppUrl(e, t, i, s, r, n, a) {
                    return this.api.getMiniAppUrl(e, t, i, s, r, n, a).pipe((0, $.W)(e => (r1.error("error in getMiniAppUrl", e), q.w)))
                }
                invokeCustomMethod(e, t, i) {
                    return (0, j.of)(i).pipe((0, X.T)(e => JSON.stringify(e)), (0, z.n)(i => this.api.invokeCustomMethod(e, t, i)), (0, $.W)(e => (r1.error("error in invokeCustomeMethod", e), q.w)))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), this.api = e, this.ctx = t
                }
            }(c = I || (I = {}))[c.LINKSTATUS_APPROVED = 0] = "LINKSTATUS_APPROVED", c[c.LINKSTATUS_BLOCKED = 1] = "LINKSTATUS_BLOCKED", c[c.LINKSTATUS_UNKNOWN = 2] = "LINKSTATUS_UNKNOWN";
            let r3 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.link && t.uint32(10).string(e.link), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                link: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.link = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                r4 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.linkStatus && t.uint32(8).int32(e.linkStatus), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                linkStatus: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.linkStatus = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class r5 {
                GetLinkStatus(e, t) {
                    return this.rpc.unary(r7, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetLinkStatus = this.GetLinkStatus.bind(this)
                }
            }
            let r7 = {
                methodName: "GetLinkStatus",
                service: {
                    serviceName: "bale.falake.v1.Falake"
                },
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return r3.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary(e) {
                        let t = r4.decode(e);
                        return {
                            ...t,
                            toObject: () => t
                        }
                    }
                }
            };
            class r8 {
                getLinkStatus(e) {
                    return (0, G.UY)(() => this.api.GetLinkStatus({
                        link: e
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class r6 {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "logger", _.U.getLogger("FalakeModule")), (0, D._)(this, "getLinkStatus", e => this.api.getLinkStatus(e)), this.api = e
                }
            }
            let r9 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.peer && er.L0.encode(e.peer, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                peer: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = er.L0.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ne = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return !1 !== e.isRemoved && t.uint32(8).bool(e.isRemoved), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                isRemoved: !1
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.isRemoved = i.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nt = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                ni = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.topPeers) ns.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                topPeers: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.topPeers.push(ns.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ns = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.score && t.uint32(8).int64(e.score), void 0 !== e.peer && er.L0.encode(e.peer, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                score: 0,
                                peer: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.score = globalThis.Number(i.int64().toString());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peer = er.L0.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class nr {
                GetTopPeer(e, t) {
                    return this.rpc.unary(na, e, t)
                }
                RemovePeer(e, t) {
                    return this.rpc.unary(no, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetTopPeer = this.GetTopPeer.bind(this), this.RemovePeer = this.RemovePeer.bind(this)
                }
            }
            let nn = {
                    serviceName: "bale.top_peer.v1.TopPeer"
                },
                na = {
                    methodName: "GetTopPeer",
                    service: nn,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nt.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = ni.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                no = {
                    methodName: "RemovePeer",
                    service: nn,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return r9.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = ne.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            class nd {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "getTopPeer", () => (0, G.UY)(() => this.api.GetTopPeer({}))), (0, D._)(this, "removePeer", e => (0, G.UY)(() => this.api.RemovePeer({
                        peer: e
                    }))), this.api = e
                }
            }
            class nl {
                loadTopPeersUsersAndGroups(e) {
                    return this.ctx.entities.loadUsersGroups(e.filter(e => {
                        let {
                            peer: t
                        } = e;
                        return (null == t ? void 0 : t.type) === er.RK.PEERTYPE_PRIVATE
                    }).map(e => {
                        let {
                            peer: t
                        } = e;
                        return {
                            uid: null == t ? void 0 : t.id,
                            accessHash: null == t ? void 0 : t.accessHash
                        }
                    }), e.filter(e => {
                        let {
                            peer: t
                        } = e;
                        return (null == t ? void 0 : t.type) === er.RK.PEERTYPE_GROUP
                    }).map(e => {
                        let {
                            peer: t
                        } = e;
                        return {
                            groupId: null == t ? void 0 : t.id,
                            accessHash: null == t ? void 0 : t.accessHash
                        }
                    }))
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("TopPeerModule")), (0, D._)(this, "updateTopPeersCache", e => {
                        let t = e.map(e => ({
                            id: (0, eK.LP)(e.peer),
                            item: e
                        }));
                        return this.db.clear().pipe((0, z.n)(() => this.db.putItems(t.map(e => [e.id, e]))))
                    }), (0, D._)(this, "removeFromTopPeersCache", e => this.db.delete(e)), (0, D._)(this, "loadTopPeer", () => this.api.getTopPeer().pipe((0, z.n)(e => {
                        this.logger.debug("API top peers", e.topPeers);
                        let t = e.topPeers.sort((e, t) => t.score - e.score);
                        return (0, B.h)(this.loadTopPeersUsersAndGroups(t).pipe((0, ey.u)(t)), this.updateTopPeersCache(t).pipe((0, $.W)(e => (this.logger.error("Cache update failed", e), q.w)), (0, ej.w)()))
                    }))), (0, D._)(this, "getTopPeerFromDb", () => this.db.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [t, i] = e;
                        return i.item
                    })), (0, X.T)(e => e.sort((e, t) => t.score - e.score)))), (0, D._)(this, "getTopPeer", () => this.getTopPeerFromDb().pipe((0, z.n)(e => (0, V.T)(() => e.length > 0, (0, B.h)((0, j.of)(e), this.loadTopPeer().pipe((0, ej.w)())), this.loadTopPeer())))), (0, D._)(this, "removePeer", e => this.api.removePeer(e).pipe((0, ee.M)(() => {
                        (0, Y.H)(this.removeFromTopPeersCache((0, eK.LP)({
                            id: e.id,
                            type: e.type
                        }))).subscribe()
                    }))), this.api = e, this.db = t, this.ctx = i
                }
            }
            let nu = _.U.getLogger("comment");
            class np extends tm {
                getDiscussionMessage(e, t) {
                    return this.findMessage(e, {
                        rid: t.rid,
                        date: t.date
                    })
                }
                setThreadReadInfoLoadedFromDB(e, t, i) {
                    let s = (0, tI.w9)(t),
                        r = this.threadReadInfoLoadedFromDB.get(e.id);
                    if (r) r.set(s, i);
                    else {
                        let t = new Map;
                        t.set(s, i), this.threadReadInfoLoadedFromDB.set(e.id, t)
                    }
                }
                isThreadReadInfoLoadedFromDB(e, t) {
                    var i;
                    let s = (0, tI.w9)(t);
                    return (null == (i = this.threadReadInfoLoadedFromDB.get(e.id)) ? void 0 : i.get(s)) ?? !1
                }
                isLessThanLimit(e, t, i) {
                    let s = e.filter(e => e.date > i);
                    return t == ew.iP.LISTLOADMODE_BOTH ? s.length < tl.k / 2 : t == ew.iP.LISTLOADMODE_FORWARD && s.length < tl.k
                }
                updateHistory(e, t, i, s, r, n, a) {
                    let o = this.getPeerHistory(e);
                    if (r) {
                        let a = o && (0, to.HV)(o.ranges),
                            d = (0, tu.eL)(i, t, r, s, a),
                            l = this.isLessThanLimit(r, i, t);
                        if (o) return nu.warn(">>> thread has history", "updateHistory", t, i, d, n, l), d && (o.ranges = (0, tu.$Z)(o.ranges, d)), o.messages = (0, to.wo)(tv()(o.messages, r, e => e.rid), (e, t) => e.date > t.date ? 1 : -1), s === td.C.Open && l ? (nu.warn(">>> thread hasLessThanHalfLimitUnread", "updateHistory"), o.loaded = {
                            ...o.loaded,
                            end: !0
                        }) : s === td.C.GoToFirstMessage && (o.loaded = {
                            ...o.loaded,
                            start: !0
                        }), r.length < tl.k && (i === ew.iP.LISTLOADMODE_BACKWARD ? o.loaded = {
                            ...o.loaded,
                            start: !0
                        } : i === ew.iP.LISTLOADMODE_FORWARD && (o.loaded = {
                            ...o.loaded,
                            end: !0
                        })), (0, j.of)({
                            ranges: o.ranges,
                            loaded: o.loaded
                        });
                        if (d) {
                            nu.warn(">>> thread init history", "updateHistory", r.map(eS.dF), s, l, d);
                            let t = r.length < tl.k,
                                i = s === td.C.Open && l,
                                n = {
                                    start: t,
                                    end: t || i
                                };
                            return this.setPeerHistory(e, {
                                messages: r,
                                ranges: [d],
                                loaded: n
                            }), (0, j.of)({
                                ranges: [d],
                                loaded: n
                            })
                        }
                    }
                    return (0, j.of)(void 0)
                }
                modifyDiscussionMessageCommentCount(e, t, i, s) {
                    return this.getDiscussionMessage(e, t).pipe((0, X.T)(e => {
                        var t;
                        if (e) return (null == (t = e.replies) ? void 0 : t.recentRepliers) ? e.replies.repliesCount += i : s && (e.replies = {
                            ...(0, eO.S2M)(),
                            repliesCount: s + i
                        }), {
                            rid: e.rid,
                            date: e.date,
                            replies: e.replies
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), (0, D._)(this, "threadReadInfoLoadedFromDB", new Map), (0, D._)(this, "initHistoryWithMessages", (e, t, i) => {
                        let s = (0, to.$1)(t),
                            r = (0, to.HV)(t);
                        if (s && r) {
                            let n = {
                                loaded: {
                                    start: !0,
                                    end: t.length < i
                                },
                                ranges: [{
                                    start: s.date,
                                    end: r.date
                                }],
                                messages: [...t]
                            };
                            this.setPeerHistory(e, n)
                        }
                        return (0, j.of)(void 0)
                    })
                }
            }
            class nh {
                getThreads() {
                    return this.threads
                }
                loadThreadReadInfoFromDB(e, t, i) {
                    let s = i.filter(t => !this.ctx.comment.getThreads().isThreadReadInfoLoadedFromDB(e, t)),
                        r = s.map(e => (0, tI.aX)(t.id, e));
                    return this.db.getItems(r).pipe((0, z.n)(t => {
                        let i = [];
                        if (!t) return (0, j.of)(void 0);
                        let r = [];
                        for (let [i, s] of t) {
                            if (!i || "string" != typeof i) continue;
                            let t = (0, tI.mD)(i);
                            if ((null == t ? void 0 : t.messageId) != void 0 && (null == s ? void 0 : s.lastOpenedLastMessageDate) != void 0) {
                                let i = this.ctx.messaging.updateMessageThreadReadInfo(e, t.messageId, {
                                    lastOpenedLastMessageDate: s.lastOpenedLastMessageDate
                                });
                                r.push(i)
                            }
                        }
                        return r.length > 0 ? (0, em.p)(r).pipe((0, X.T)(e => e.flat()), (0, X.T)(t => {
                            i.push(...t), s.forEach(t => {
                                this.threads.setThreadReadInfoLoadedFromDB(e, t, !0)
                            }), i.length && this.ctx.messaging.nextUpdateMessagesEvent(e, i)
                        })) : (s.forEach(t => {
                            this.threads.setThreadReadInfoLoadedFromDB(e, t, !0)
                        }), (0, j.of)(void 0))
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "ctx", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "logger", _.U.getLogger("comment")), (0, D._)(this, "threads", new np), (0, D._)(this, "getThreadLastVisitedDate", (e, t) => this.getThreadReadInfo(e, t).pipe((0, X.T)(e => null == e ? void 0 : e.lastReadDate))), (0, D._)(this, "updateThreadReadInfo", (e, t, i) => {
                        let s = (0, tI.aX)(e.id, t);
                        return this.db.put({
                            ...i,
                            key: s
                        }).pipe((0, J.Z)(() => q.w))
                    }), (0, D._)(this, "getThreadReadInfo", (e, t) => {
                        let i = (0, tI.aX)(e.id, t);
                        return this.db.get(i).pipe((0, z.n)(e => e ? (0, j.of)(e) : (0, j.of)(void 0)))
                    }), (0, D._)(this, "handleUpdateThreadOnNewMessages", (e, t, i) => this.getThreads().addNewMessagesToHistory(e, i).pipe((0, z.n)(s => {
                        let {
                            newMsgs: r,
                            updatedMessages: n
                        } = s;
                        if (t) return this.getThreads().modifyDiscussionMessageCommentCount(e, t, i.length).pipe((0, X.T)(i => {
                            i && n.push(i);
                            let s = [];
                            if (r.length > 0) {
                                var a;
                                s.push({
                                    type: ep.i.NewMessages,
                                    messages: r,
                                    myUid: null == (a = this.ctx.auth.user) ? void 0 : a.id,
                                    peer: e,
                                    isRemote: !0
                                })
                            }
                            if (n.length > 0 && s.push({
                                    type: ep.i.UpdateMessages,
                                    peer: e,
                                    messages: n,
                                    threadId: t
                                }), 0 !== s.length) return s
                        }));
                        {
                            let i = [];
                            if (r.length > 0) {
                                var a;
                                i.push({
                                    type: ep.i.NewMessages,
                                    messages: r,
                                    myUid: null == (a = this.ctx.auth.user) ? void 0 : a.id,
                                    peer: e,
                                    isRemote: !0
                                })
                            }
                            return (n.length > 0 && i.push({
                                type: ep.i.UpdateMessages,
                                peer: e,
                                messages: n,
                                threadId: t
                            }), 0 === i.length) ? (0, j.of)(void 0) : (0, j.of)(i)
                        }
                    }), (0, z.n)(e => e ? (0, j.of)(...e) : (0, j.of)(void 0)))), (0, D._)(this, "handleUpdateThreadOnDeleteMessage", e => {
                        let {
                            peer: t,
                            threadId: i,
                            rids: s,
                            dates: r
                        } = e;
                        return t && 0 != s.length ? this.ctx.comment.getThreads().deleteHistoryMessages(t, s).pipe((0, z.n)(n => i ? this.ctx.comment.getThreads().modifyDiscussionMessageCommentCount(t, i, -new Set(s).size).pipe((0, z.n)(a => (a && n.push(a), (0, j.of)({
                            ...e,
                            threadIds: Array(s.length).fill(i),
                            type: ep.i.DeleteMessage,
                            dates: null == r ? void 0 : r.dates,
                            peer: t
                        }, n.length > 0 ? {
                            type: ep.i.UpdateMessages,
                            peer: t,
                            messages: n,
                            threadId: i
                        } : void 0)))) : (0, j.of)({
                            ...e,
                            threadIds: Array(s.length).fill(i),
                            type: ep.i.DeleteMessage,
                            dates: null == r ? void 0 : r.dates,
                            peer: t
                        }, n.length > 0 ? {
                            type: ep.i.UpdateMessages,
                            peer: t,
                            messages: n,
                            threadId: i
                        } : void 0))) : (0, j.of)(void 0)
                    }), (0, D._)(this, "sendCommentEvent", (e, t, i, s, r, n) => {
                        var a;
                        let o = !!r && (((null == (a = r.date) ? void 0 : a.value) ? Number(r.date.value) : 0) != t.date || r.rid != t.rid);
                        return this.ctx.groups.loadGroups([(0, eo.l5)(i)]).pipe((0, z.n)(i => {
                            let [r] = i;
                            if (!(null == r ? void 0 : r.linkedGroupPeerId)) return q.w;
                            let a = r.linkedGroupPeerId;
                            return this.ctx.seraj.sendSerajEvent("comment", {
                                comment_rid: e,
                                rid: t.rid,
                                peer_id: a,
                                peer_type: "channel",
                                message_type: (() => {
                                    switch (s) {
                                        case en.cM.GIF:
                                            return "gif";
                                        case en.cM.STICKER:
                                            return "sticker";
                                        case en.cM.VOICE:
                                            return "voice";
                                        case en.cM.VIDEO:
                                            return "video";
                                        case en.cM.PHOTO:
                                            return "photo";
                                        case en.cM.TEXT:
                                            return "text";
                                        case en.cM.AUDIO:
                                            return "audio"
                                    }
                                    return "other"
                                })(),
                                action_type: 2,
                                is_reply: o,
                                ...n ? {
                                    spot: n
                                } : {}
                            }, Date.now())
                        }))
                    }), this.ctx = e, this.db = t
                }
            }
            var ng = i(88332);
            class nc {
                getFileUrl(e) {
                    return (0, G.UY)(() => this.api.GetNasimFileUrl({
                        file: e
                    }))
                }
                getFileUrls(e) {
                    return (0, G.UY)(() => this.api.GetNasimFileUrls({
                        files: e
                    }))
                }
                getUploadUrl(e, t, i, s, r, n) {
                    return (0, G.UY)(() => this.api.GetNasimFileUploadUrl({
                        uid: e,
                        expectedSize: t,
                        crc: "",
                        name: i,
                        mimeType: s,
                        exPeer: r,
                        sendType: n ? {
                            type: n
                        } : void 0,
                        chunkSize: 0
                    }))
                }
                getResumeUrl(e) {
                    return (0, G.UY)(() => this.api.GetNasimFileUploadResume({
                        file: e
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            let nf = _.U.getLogger("filesModule");
            class nv {
                getFileUrl(e) {
                    this.urlRequests$.next(e)
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "urlRequests$", new ek.B), (0, D._)(this, "logger", _.U.getLogger("FilesModule")), (0, D._)(this, "loadFileUrl", e => (this.getFileUrl(e), this.bindToUrls.pipe((0, X.T)(t => t.find(t => t.fileId === e.fileId)), (0, $.W)(e => (nf.info("loadFileUrl", e), q.w)), (0, W.p)(e => !!e), (0, Z.s)(1)))), (0, D._)(this, "bindToUrls", this.urlRequests$.pipe((0, ei.w)(250), (0, W.p)(e => e.length > 0), (0, ee.M)(e => this.logger.debug("Request Urls", e)), (0, J.Z)(e => {
                        let t = new Set,
                            i = e.filter(e => {
                                let i = t.has(e.fileId);
                                return i || t.add(e.fileId), !i
                            });
                        return this.api.getFileUrls(i).pipe((0, $.W)(e => (this.logger.error("GetFileUrl", e), q.w)), (0, ee.M)(t => {
                            this.logger.debug("Response Urls", {
                                fileLocations: e,
                                response: t.fileUrls.map(e => ({
                                    fileId: e.fileId,
                                    chunkSize: e.chunkSize,
                                    url: e.url.substring(0, 50)
                                }))
                            })
                        }))
                    }), (0, X.T)(e => e.fileUrls), (0, et.u)())), (0, D._)(this, "getUploadUrl", (e, t, i, s, r) => {
                        let n;
                        return s || nf.warn("get upload url", "exPeer is undefined", {
                            size: e,
                            mimeType: i
                        }), n = (null == s ? void 0 : s.type) === er.m4.EXPEERTYPE_CHANNEL ? s.id.toString() : this.ctx.auth.user.id.toString(), this.logger.debug("get upload url", {
                            uid: n,
                            exPeer: s
                        }), this.api.getUploadUrl(n, e, t, i, s, r)
                    }), (0, D._)(this, "getFileDownloadUrl", e => this.api.getFileUrl(e)), (0, D._)(this, "getResumeUrl", (e, t) => {
                        let i;
                        return t || nf.warn("get resume url", "exPeer is undefined", {
                            fileId: e
                        }), i = (null == t ? void 0 : t.type) === er.m4.EXPEERTYPE_CHANNEL ? t.id.toString() : this.ctx.auth.user.id.toString(), this.api.getResumeUrl({
                            fileId: e,
                            accessHash: i,
                            fileStorageVersion: void 0
                        })
                    }), this.api = e, this.ctx = t
                }
            }
            let nm = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.fa && t.uint32(10).string(e.fa), "" !== e.en && t.uint32(18).string(e.en), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                fa: "",
                                en: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.fa = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.en = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nk = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.key && nm.encode(e.key, t.uint32(10).fork()).join(), void 0 !== e.value && nm.encode(e.value, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                key: void 0,
                                value: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.key = nm.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.value = nm.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ny = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of ("" !== e.countryNumber && t.uint32(10).string(e.countryNumber), void 0 !== e.registerAccountTime && tL.j1.encode({
                                value: e.registerAccountTime
                            }, t.uint32(18).fork()).join(), void 0 !== e.lastTimeNameChanged && tL.j1.encode({
                                value: e.lastTimeNameChanged
                            }, t.uint32(26).fork()).join(), void 0 !== e.lastTimeAvatarChanged && tL.j1.encode({
                                value: e.lastTimeAvatarChanged
                            }, t.uint32(34).fork()).join(), e.commonGroups)) er.wX.encode(i, t.uint32(42).fork()).join();
                        for (let i of e.extraInfo) nk.encode(i, t.uint32(50).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                countryNumber: "",
                                registerAccountTime: void 0,
                                lastTimeNameChanged: void 0,
                                lastTimeAvatarChanged: void 0,
                                commonGroups: [],
                                extraInfo: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.countryNumber = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.registerAccountTime = tL.j1.decode(i, i.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.lastTimeNameChanged = tL.j1.decode(i, i.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.lastTimeAvatarChanged = tL.j1.decode(i, i.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.commonGroups.push(er.wX.decode(i, i.uint32()));
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.extraInfo.push(nk.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nb = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return 0 !== e.userId && t.uint32(8).int32(e.userId), "0" !== e.serviceMessageRid && t.uint32(16).int64(e.serviceMessageRid), 0 !== e.serviceMessageDate && t.uint32(24).int64(e.serviceMessageDate), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                userId: 0,
                                serviceMessageRid: "0",
                                serviceMessageDate: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.userId = i.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.serviceMessageRid = i.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.serviceMessageDate = globalThis.Number(i.int64().toString());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class nT {
                GetUserAnonymousContactPage(e, t) {
                    return this.rpc.unary(nM, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetUserAnonymousContactPage = this.GetUserAnonymousContactPage.bind(this)
                }
            }
            let nM = {
                methodName: "GetUserAnonymousContactPage",
                service: {
                    serviceName: "bale.anonymous_contact.v1.AnonymousContact"
                },
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return nb.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary(e) {
                        let t = ny.decode(e);
                        return {
                            ...t,
                            toObject: () => t
                        }
                    }
                }
            };
            class nS {
                constructor(e) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "getUserAnonymousContactPage", (e, t, i) => (0, G.UY)(() => this.api.GetUserAnonymousContactPage({
                        userId: e,
                        serviceMessageDate: t,
                        serviceMessageRid: i
                    }))), this.api = e
                }
            }
            class nw {
                loadCommonGroups(e) {
                    return this.ctx.groups.loadGroups(e)
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("AnonymousContactModule")), (0, D._)(this, "getUserAnonymousContactPage", (e, t, i) => this.api.getUserAnonymousContactPage(e, t, i).pipe((0, z.n)(e => {
                        let t = {
                            ...e,
                            commonGroups: e.commonGroups.filter(e => 0 !== e.groupId)
                        };
                        return (0, B.h)(this.loadCommonGroups(t.commonGroups).pipe((0, ej.w)()), (0, j.of)(t))
                    }), (0, $.W)(e => (this.logger.error("getUserAnonymousContactPage", e), q.w)))), this.api = e, this.ctx = t
                }
            }(f = R || (R = {}))[f.PACKAGEITEM_UNKNOWN = 0] = "PACKAGEITEM_UNKNOWN", f[f.PACKAGEITEM_GROUP_JOIN = 1] = "PACKAGEITEM_GROUP_JOIN", f[f.PACKAGEITEM_ORGANIZATIONAL_CONTACT = 2] = "PACKAGEITEM_ORGANIZATIONAL_CONTACT", f[f.PACKAGEITEM_FILE_SEARCH = 3] = "PACKAGEITEM_FILE_SEARCH";
            let nP = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (0 !== e.id && t.uint32(8).int32(e.id), "" !== e.name && t.uint32(18).string(e.name), t.uint32(26).fork(), e.orgPackage)) t.int32(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                id: 0,
                                name: "",
                                orgPackage: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = i.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.name = i.string();
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        r.orgPackage.push(i.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = i.uint32() + i.pos;
                                        for (; i.pos < e;) r.orgPackage.push(i.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nE = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.organization && nP.encode(e.organization, t.uint32(10).fork()).join(), !1 !== e.isAdmin && t.uint32(16).bool(e.isAdmin), "" !== e.organizationalName && t.uint32(34).string(e.organizationalName), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                organization: void 0,
                                isAdmin: !1,
                                organizationalName: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.organization = nP.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isAdmin = i.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.organizationalName = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nI = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                nR = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.userPeers) er.Uw.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                userPeers: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.userPeers.push(er.Uw.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nD = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                n_ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.userOrganization && nE.encode(e.userOrganization, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                userOrganization: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.userOrganization = nE.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class nU {
                GetUserOrganizationalContacts(e, t) {
                    return this.rpc.unary(nC, e, t)
                }
                GetUserOrganizationInfo(e, t) {
                    return this.rpc.unary(nO, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetUserOrganizationalContacts = this.GetUserOrganizationalContacts.bind(this), this.GetUserOrganizationInfo = this.GetUserOrganizationInfo.bind(this)
                }
            }
            let nA = {
                    serviceName: "bale.organizations.v1.Organizations"
                },
                nC = {
                    methodName: "GetUserOrganizationalContacts",
                    service: nA,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nI.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = nR.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                nO = {
                    methodName: "GetUserOrganizationInfo",
                    service: nA,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nD.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = n_.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };
            class nG {
                getUserOrganizationalContacts() {
                    return (0, G.UY)(() => this.api.GetUserOrganizationalContacts({}))
                }
                getUserOrganizationInfo() {
                    return (0, G.UY)(() => this.api.GetUserOrganizationInfo({}))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class nx {
                getUserOrganizationalContacts() {
                    return this.api.getUserOrganizationalContacts().pipe((0, X.T)(e => e.userPeers))
                }
                getUserOrganizationInfo() {
                    return this.api.getUserOrganizationInfo().pipe((0, X.T)(e => e.userOrganization))
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("OrganizationsModule")), this.api = e, this.ctx = t
                }
            }
            class nL {
                sendGoldGiftPacket(e) {
                    let {
                        amount: t,
                        count: i,
                        description: s,
                        givingType: r,
                        randomId: n,
                        peer: a
                    } = e;
                    return (0, G.UY)(() => this.api.SendGoldGiftPacket({
                        amount: t,
                        count: i,
                        description: s,
                        givingType: r,
                        randomId: n,
                        peer: a
                    }))
                }
                openGoldGiftPacket(e) {
                    return (0, G.UY)(() => this.api.OpenGoldGiftPacket({
                        giftPacketId: e
                    }))
                }
                getWinnerIDs(e) {
                    return (0, G.UY)(() => this.api.GetWinnerIDs({
                        giftPacketId: e
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class nN {
                openGoldGiftPacket(e) {
                    return this.api.openGoldGiftPacket(e).pipe((0, z.n)(e => {
                        let t = e.giftReceivers.map(e => (0, eu.j)(e.userId));
                        return this.ctx.users.loadUsers(t).pipe((0, ey.u)(e))
                    }))
                }
                getWinnerIDs(e) {
                    return this.api.getWinnerIDs(e).pipe((0, z.n)(e => {
                        let t = e.winners.map(e => (0, eu.j)(e.userIds));
                        return this.ctx.users.loadUsers(t).pipe((0, ey.u)(e))
                    }))
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "logger", _.U.getLogger("GoldGiftPacketModule")), (0, D._)(this, "sendGiftPacketWithWallet", e => {
                        let {
                            amount: t,
                            count: i,
                            description: s,
                            givingType: r,
                            randomId: n,
                            peer: a
                        } = e;
                        return this.api.sendGoldGiftPacket({
                            amount: t,
                            count: i,
                            description: s,
                            givingType: r,
                            randomId: n,
                            peer: a
                        })
                    }), this.api = e, this.ctx = t
                }
            }
            var nq = i(51659),
                nF = i(7305),
                nH = i(59797);
            class nV {
                setPassword(e) {
                    return (0, G.UY)(() => this.api.SetPassword({
                        password: e
                    }))
                }
                checkPasswordSet() {
                    return (0, G.UY)(() => this.api.CheckPasswordSet({}))
                }
                forgetPassword() {
                    return (0, G.UY)(() => this.api.ForgetPassword({}))
                }
                deletePassword(e) {
                    return (0, G.UY)(() => this.api.DeletePassword({
                        otp: e
                    }))
                }
                checkPassword(e, t) {
                    return (0, G.UY)(() => this.api.CheckPassword({
                        password: e,
                        servicesType: t
                    }), {
                        excludeRetryErrorCodes: [nH.grpc.Code.Aborted]
                    })
                }
                sendOTP() {
                    return (0, G.UY)(() => this.api.SendOTP({}))
                }
                validateOTP(e, t) {
                    return (0, G.UY)(() => this.api.ValidateOTP({
                        otp: e,
                        servicesType: t
                    }))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class nB {
                setPassword(e) {
                    return this.api.setPassword(e)
                }
                checkPasswordSet() {
                    return this.api.checkPasswordSet()
                }
                forgetPassword() {
                    return this.api.forgetPassword()
                }
                deletePassword(e) {
                    return this.api.deletePassword(e)
                }
                checkPassword(e, t) {
                    return this.api.checkPassword(e, t)
                }
                sendOTP() {
                    return this.api.sendOTP()
                }
                validateOTP(e, t) {
                    return this.api.validateOTP(e, t)
                }
                getPasswordFromDb() {
                    return (0, em.p)([this.ctx.configs.getParameter(eX.$Z.ramzPassword), this.ctx.configs.getParameter(eX.$Z.ramzEncryptKey)]).pipe((0, z.n)(e => {
                        let [t, i] = e;
                        return t && i ? (0, Y.H)(this.crypto.decrypt(i, t)) : (0, j.of)(void 0)
                    }))
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "crypto", void 0), (0, D._)(this, "ctx", void 0), this.api = e, this.crypto = t, this.ctx = i
                }
            }
            var nj = i(59903),
                nY = i(73088);
            let nW = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                nz = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.exPeer) er.Cu.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer.push(er.Cu.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                n$ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(10).fork()).join(), void 0 !== e.scheduledAt && nj.Dc.encode(ae(e.scheduledAt), t.uint32(18).fork()).join(), void 0 !== e.payload && nY.Q_.encode(e.payload, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: void 0,
                                scheduledAt: void 0,
                                payload: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.scheduledAt = at(nj.Dc.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.payload = nY.Q_.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nK = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "0" !== e.taskID && t.uint32(8).int64(e.taskID), void 0 !== e.scheduledAt && nj.Dc.encode(ae(e.scheduledAt), t.uint32(18).fork()).join(), void 0 !== e.payload && nY.Q_.encode(e.payload, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                taskID: "0",
                                scheduledAt: void 0,
                                payload: void 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.taskID = i.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.scheduledAt = at(nj.Dc.decode(i, i.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.payload = nY.Q_.decode(i, i.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nJ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (t.uint32(10).fork(), e.taskIDs)) t.int64(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                taskIDs: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.taskIDs.push(i.int64().toString());
                                    continue
                                }
                                if (10 === e) {
                                    let e = i.uint32() + i.pos;
                                    for (; i.pos < e;) r.taskIDs.push(i.int64().toString());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nZ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of (t.uint32(10).fork(), e.failedTaskIDs)) t.int64(i);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                failedTaskIDs: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.failedTaskIDs.push(i.int64().toString());
                                    continue
                                }
                                if (10 === e) {
                                    let e = i.uint32() + i.pos;
                                    for (; i.pos < e;) r.failedTaskIDs.push(i.int64().toString());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nX = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "0" !== e.taskId && t.uint32(8).int64(e.taskId), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                taskId: "0"
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.taskId = i.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                nQ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "0" !== e.taskID && t.uint32(8).int64(e.taskID), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                taskID: "0"
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.taskID = i.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                n0 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return void 0 !== e.exPeer && er.Cu.encode(e.exPeer, t.uint32(10).fork()).join(), 0 !== e.type && t.uint32(16).int32(e.type), 0 !== e.status && t.uint32(24).int32(e.status), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                exPeer: void 0,
                                type: 0,
                                status: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = er.Cu.decode(i, i.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.type = i.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.status = i.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                n1 = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of e.tasks) nY.t2.encode(i, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                tasks: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.tasks.push(nY.t2.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class n2 {
                ScheduleTask(e, t) {
                    return this.rpc.unary(n4, e, t)
                }
                UnScheduleTask(e, t) {
                    return this.rpc.unary(n5, e, t)
                }
                ListTasks(e, t) {
                    return this.rpc.unary(n7, e, t)
                }
                ExecuteTaskNow(e, t) {
                    return this.rpc.unary(n8, e, t)
                }
                ReScheduleTask(e, t) {
                    return this.rpc.unary(n6, e, t)
                }
                PeersWithScheduleTask(e, t) {
                    return this.rpc.unary(n9, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.ScheduleTask = this.ScheduleTask.bind(this), this.UnScheduleTask = this.UnScheduleTask.bind(this), this.ListTasks = this.ListTasks.bind(this), this.ExecuteTaskNow = this.ExecuteTaskNow.bind(this), this.ReScheduleTask = this.ReScheduleTask.bind(this), this.PeersWithScheduleTask = this.PeersWithScheduleTask.bind(this)
                }
            }
            let n3 = {
                    serviceName: "bale.schedule.v1.Scheduler"
                },
                n4 = {
                    methodName: "ScheduleTask",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return n$.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = nX.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                n5 = {
                    methodName: "UnScheduleTask",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nJ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = nZ.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                n7 = {
                    methodName: "ListTasks",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return n0.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = n1.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                n8 = {
                    methodName: "ExecuteTaskNow",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nQ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                n6 = {
                    methodName: "ReScheduleTask",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nK.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = iI.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                n9 = {
                    methodName: "PeersWithScheduleTask",
                    service: n3,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return nW.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = nz.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };

            function ae(e) {
                return {
                    seconds: Math.trunc(e.getTime() / 1e3),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function at(e) {
                let t = 1e3 * (e.seconds || 0);
                return new globalThis.Date(t += (e.nanos || 0) / 1e6)
            }
            class ai {
                scheduleTask(e, t, i) {
                    return (0, G.UY)(() => this.api.ScheduleTask({
                        exPeer: e,
                        scheduledAt: t,
                        payload: i
                    }))
                }
                unScheduleTask(e) {
                    return (0, G.UY)(() => this.api.UnScheduleTask({
                        taskIDs: e
                    }))
                }
                listTasks(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return (0, G.UY)(() => this.api.ListTasks({
                        exPeer: e,
                        type: t,
                        status: i
                    }))
                }
                executeTaskNow(e) {
                    return (0, G.UY)(() => this.api.ExecuteTaskNow({
                        taskID: e
                    }))
                }
                reScheduleTask(e, t, i) {
                    return (0, G.UY)(() => this.api.ReScheduleTask({
                        taskID: e,
                        scheduledAt: t,
                        payload: i
                    }))
                }
                peersWithScheduleTask() {
                    return (0, G.UY)(() => this.api.PeersWithScheduleTask({}))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            var as = i(90158);
            let ar = "scheduled_peers_fetched";
            class an {
                process(e) {
                    let t = e.filter(e => void 0 !== e.peerHaveScheduleTask);
                    if (0 !== t.length) {
                        for (let e of (this.logger.info("scheduler events:", t), t)) {
                            var i;
                            if (null == (i = e.peerHaveScheduleTask) ? void 0 : i.exPeer) {
                                let t = e.peerHaveScheduleTask.exPeer;
                                this.addPeerToCache(t);
                                let i = (0, as.q)(t);
                                this.logger.info("emitting scheduler event", i), this.schedulerUpdates$.next(i)
                            }
                        }
                        return (0, j.of)(void 0)
                    }
                }
                peersWithScheduleTask() {
                    return (0, Y.H)(this.localStorage.getItem(ar)).pipe((0, z.n)(e => "true" === e ? (this.logger.info("peersWithScheduleTask: loading from cache"), this.loadFromCache()) : (this.logger.info("peersWithScheduleTask: fetching from server"), this.loadFromRemote())))
                }
                scheduleTask(e, t, i) {
                    return this.api.scheduleTask(e, t, i).pipe((0, ee.M)(() => this.addPeerToCache(e)))
                }
                unScheduleTask(e) {
                    return this.api.unScheduleTask(e)
                }
                listTasks(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this.api.listTasks(e, t, i).pipe((0, ee.M)(t => {
                        e && 0 === t.tasks.length && this.removePeerFromCache(e.id)
                    }))
                }
                executeTaskNow(e) {
                    return this.api.executeTaskNow(e)
                }
                reScheduleTask(e, t, i) {
                    return this.api.reScheduleTask(e, t, i)
                }
                loadFromRemote() {
                    return this.api.peersWithScheduleTask().pipe((0, z.n)(e => (this.logger.info("loadFromRemote: received", e.exPeer.length, "peers"), this.db.clear().pipe((0, z.n)(() => 0 === e.exPeer.length ? (0, j.of)(void 0) : this.db.putItems(e.exPeer.map(e => [e.id, e]))), (0, z.n)(() => (0, Y.H)(this.localStorage.setItem(ar, "true"))), (0, X.T)(() => e)))))
                }
                loadFromCache() {
                    return this.db.getAll().pipe((0, X.T)(e => (this.logger.info("loadFromCache: loaded", e.length, "peers"), {
                        exPeer: e.map(e => {
                            let [, t] = e;
                            return t
                        })
                    })))
                }
                removePeerFromCache(e) {
                    this.logger.info("removePeerFromCache: removing peer", e), this.db.delete(e).pipe((0, $.W)(t => (this.logger.error("removePeerFromCache: failed for peer", e, t), q.w))).subscribe()
                }
                addPeerToCache(e) {
                    this.db.get(e.id).pipe((0, z.n)(t => t ? q.w : (this.logger.info("addPeerToCache: adding peer", e.id), this.db.put(e))), (0, $.W)(t => (this.logger.error("addPeerToCache: failed for peer", e.id, t), q.w))).subscribe()
                }
                invalidate() {
                    return this.logger.info("invalidate: clearing cache and re-fetching"), this.db.clear().pipe((0, z.n)(() => (0, Y.H)(this.localStorage.setItem(ar, "false"))), (0, z.n)(() => this.loadFromRemote()))
                }
                clear() {
                    this.schedulerUpdates$.complete(), this.localStorage.removeItem(ar)
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "db", void 0), (0, D._)(this, "localStorage", void 0), (0, D._)(this, "name", "SchedulerModule"), (0, D._)(this, "logger", _.U.getLogger("SchedulerModule")), (0, D._)(this, "schedulerUpdates$", new ek.B), (0, D._)(this, "bindToSchedulerUpdates", () => this.schedulerUpdates$.asObservable()), this.api = e, this.db = t, this.localStorage = i
                }
            }
            var aa = i(36644);
            let ao = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.url && t.uint32(10).string(e.url), 0 !== e.width && t.uint32(16).int32(e.width), 0 !== e.height && t.uint32(24).int32(e.height), "" !== e.alt && t.uint32(34).string(e.alt), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                url: "",
                                width: 0,
                                height: 0,
                                alt: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = i.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.width = i.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.height = i.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.alt = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ad = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.url && t.uint32(10).string(e.url), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                url: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                al = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.summary && t.uint32(10).string(e.summary), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                summary: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.summary = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                au = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.url && t.uint32(10).string(e.url), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                url: ""
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = i.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                },
                ap = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        for (let i of ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), e.images)) ao.encode(i, t.uint32(26).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                title: "",
                                description: "",
                                images: []
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.title = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.description = i.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.images.push(ao.decode(i, i.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class ah {
                GetLinkSummary(e, t) {
                    return this.rpc.unary(ac, e, t)
                }
                GetLinkPreview(e, t) {
                    return this.rpc.unary(af, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetLinkSummary = this.GetLinkSummary.bind(this), this.GetLinkPreview = this.GetLinkPreview.bind(this)
                }
            }
            let ag = {
                    serviceName: "bale.tldr.v1.TLDR"
                },
                ac = {
                    methodName: "GetLinkSummary",
                    service: ag,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ad.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = al.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                af = {
                    methodName: "GetLinkPreview",
                    service: ag,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return au.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = ap.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                av = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t;
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return {}
                    }
                },
                am = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new te.fI;
                        return "" !== e.token && t.uint32(10).string(e.token), "" !== e.url && t.uint32(18).string(e.url), 0 !== e.expiresIn && t.uint32(24).int64(e.expiresIn), t
                    },
                    decode(e, t) {
                        let i = e instanceof te.V5 ? e : new te.V5(e),
                            s = void 0 === t ? i.len : i.pos + t,
                            r = {
                                token: "",
                                url: "",
                                expiresIn: 0
                            };
                        for (; i.pos < s;) {
                            let e = i.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.token = i.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.url = i.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.expiresIn = globalThis.Number(i.int64().toString());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            i.skip(7 & e)
                        }
                        return r
                    }
                };
            class ak {
                GetAuthToken(e, t) {
                    return this.rpc.unary(ay, e, t)
                }
                constructor(e) {
                    (0, D._)(this, "rpc", void 0), this.rpc = e, this.GetAuthToken = this.GetAuthToken.bind(this)
                }
            }
            let ay = {
                methodName: "GetAuthToken",
                service: {
                    serviceName: "bale.llm_auth.v1.LLMAuthService"
                },
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return av.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary(e) {
                        let t = am.decode(e);
                        return {
                            ...t,
                            toObject: () => t
                        }
                    }
                }
            };
            class ab {
                getTranscript(e, t, i) {
                    return (0, G.UY)(() => this.api.GetTranscript({
                        voice: e,
                        outPeer: t,
                        messageId: i
                    }))
                }
                getLinkSummary(e) {
                    return (0, G.UY)(() => this.tldr.GetLinkSummary({
                        url: e
                    }), {
                        timeOut: 3e4,
                        retry: !1
                    })
                }
                getAuthToken() {
                    return (0, G.UY)(() => this.llmAuth.GetAuthToken({}), {
                        timeOut: 15e3
                    })
                }
                constructor(e, t, i) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "tldr", void 0), (0, D._)(this, "llmAuth", void 0), this.api = e, this.tldr = t, this.llmAuth = i
                }
            }
            let aT = (e, t) => !!e && !!t && e.rid === t.rid && e.date === t.date;
            class aM {
                getLinkSummary(e) {
                    return this.api.getLinkSummary(e)
                }
                getTranscript(e, t, i) {
                    return this.logger.debug("Getting transcript for message:", {
                        messageId: i,
                        outExPeer: t
                    }), this.api.getTranscript(e, t, i).pipe((0, z.n)(e => {
                        var s;
                        return !e.mustWait && (null == (s = e.downloadSource) ? void 0 : s.documentMessage) ? (0, j.of)(this.createSuccessResponse({
                            downloadSource: e.downloadSource,
                            outPeer: t,
                            messageId: i
                        })) : this.updates$.pipe((0, W.p)(e => this.hasTranscriptUpdate(e, i)), (0, X.T)(e => {
                            let t = this.extractTranscriptUpdate(e, i);
                            if (t) return this.createSuccessResponse(t);
                            throw Error("Transcript update not found")
                        }), (0, Z.s)(1), (0, t0.w)(3e4))
                    }), (0, $.W)(e => (this.logger.error("Error getting transcript:", e), "TimeoutError" === e.name) ? (0, j.of)({
                        success: !1,
                        error: "Transcript request timed out after 30 seconds"
                    }) : (0, j.of)({
                        success: !1,
                        error: e.message || "Failed to get transcript"
                    })))
                }
                hasTranscriptUpdate(e, t) {
                    return e.some(e => (null == e ? void 0 : e.transcriptReady) && (!t || aT(e.transcriptReady.messageId, t)))
                }
                extractTranscriptUpdate(e, t) {
                    var i, s, r, n, a;
                    let o = e.find(e => (null == e ? void 0 : e.transcriptReady) && (!t || aT(e.transcriptReady.messageId, t)));
                    return this.logger.info("extractTranscriptUpdate", {
                        fileId: null == o || null == (r = o.transcriptReady) || null == (s = r.downloadSource) || null == (i = s.documentMessage) ? void 0 : i.fileId,
                        error: null == o || null == (n = o.transcriptReady) ? void 0 : n.error,
                        outPeer: null == o || null == (a = o.transcriptReady) ? void 0 : a.outPeer,
                        messageId: t
                    }), (null == o ? void 0 : o.transcriptReady) || null
                }
                createSuccessResponse(e) {
                    return {
                        success: !0,
                        data: e
                    }
                }
                getAuthToken() {
                    return this.api.getAuthToken()
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "updates$", void 0), (0, D._)(this, "logger", _.U.getLogger("AIModule")), this.api = e, this.updates$ = t
                }
            }
            var aS = i(2106);
            class aw {
                submitBotReview(e) {
                    return (0, G.UY)(() => this.api.SubmitReview(e))
                }
                constructor(e) {
                    (0, D._)(this, "api", void 0), this.api = e
                }
            }
            class aP {
                bindToBotRatingEvents() {
                    return this.ctx.events.bindToWeakEvents().pipe((0, W.p)(e => !!e.askBotReview), (0, X.T)(e => e.askBotReview))
                }
                submitBotReview(e) {
                    return this.api.submitBotReview(e)
                }
                constructor(e, t) {
                    (0, D._)(this, "api", void 0), (0, D._)(this, "ctx", void 0), (0, D._)(this, "bindToBotRatingUpdates", () => this.ctx.auth.authState.pipe((0, W.p)(e => e == ea.k.Success), (0, z.n)(() => this.bindToBotRatingEvents()), (0, et.u)())), this.api = e, this.ctx = t
                }
            }
            var aE = i(62424);
            class aI {
                addPendingRead(e, t) {
                    let i = {
                        id: `read_${e.id}`,
                        type: aE.F.Read,
                        peer: e,
                        date: t
                    };
                    return this.logger.info("addPendingRead", {
                        peerId: e.id,
                        date: t
                    }), this.store.put(i).pipe((0, X.T)(() => void 0))
                }
                addPendingReaction(e, t, i, s) {
                    let r = t[t.length - 1],
                        n = {
                            id: `reaction_${e.id}_${r}`,
                            type: aE.F.Reaction,
                            peer: e,
                            rids: t,
                            date: i,
                            newCode: s
                        };
                    return this.logger.info("addPendingReaction", {
                        peerId: e.id,
                        rids: t,
                        newCode: s
                    }), this.store.put(n).pipe((0, X.T)(() => void 0))
                }
                getAllPending() {
                    return this.store.getAll().pipe((0, X.T)(e => e.map(e => {
                        let [, t] = e;
                        return t
                    })))
                }
                removePending(e) {
                    return this.logger.debug("removePending", e), this.store.delete(e)
                }
                clear() {
                    return this.logger.info("clearing all pending operations"), this.store.clear()
                }
                constructor(e) {
                    (0, D._)(this, "store", void 0), (0, D._)(this, "logger", _.U.getLogger("PendingSync")), this.store = e
                }
            }
            let aR = async (e, t) => {
                _.U.changeLogLevel(e.logLevel);
                let i = _.U.getLogger("CoreModuleBuilder");
                e.perf = new C(e.appVersion, e.externalPerformance, e.seraj);
                let s = new O.Js(e.api);
                e.presence = new eh(new L(s), e);
                let r = new ef(new eg.onA(e.api)),
                    n = new eE(e);
                e.pushToEventProccesors([n]), e.groups = new eD(r, e.storage, e, n);
                let a = new e_(t);
                e.entities = new eU.q(a, e);
                let o = new eA.ihu(e.api),
                    d = new eG(o, new eC.xz(e.api));
                e.dialogs = new e5(d, e.storage.getKeyValue(e6.F8.Dialogs), e.storage.getKeyValue(e6.F8.ShortDialogs), e.storage.getKeyValue(e6.F8.PinnedDialogs), e.storage.getKeyValue(e6.F8.DialogClick), e), e.folders = new e8(d, e.storage.getKeyValue(e6.F8.Folders), e), e.pushToEventProccesors([e.folders]);
                try {
                    let t = new e9.uf(e.api),
                        s = new eC.xz(e.api),
                        r = new tr(e.api),
                        n = new ta.h4(e.api),
                        a = e.isReactNative && e.storage ? new tc(e.storage) : new tm;
                    if (e.queryDatabase) try {
                        await (0, eL._)(e.settings.isFeatureActive(eX.TO.IndexedDBHistory)).catch(() => !1) && (a = new tb(e.queryDatabase), i.info("Using IndexedDB-backed message history (worker)"))
                    } catch (e) {
                        i.error("Failed to initialise IndexedDB history", e)
                    }
                    try {
                        await (0, U.s)(a.init())
                    } catch (e) {
                        i.error("historiesModule.init error", e), a = new tm
                    }
                    let d = new tM(t, o, s, r, n),
                        l = new tD(e, a);
                    e.pushToEventProccesors([l]), e.messaging = new tl.b(d, e, l, e.storage, a, e.isReactNative)
                } catch (e) {
                    i.error("buildMessagesModule error", e)
                }
                let l = new tO(new t_.PA(e.api));
                e.meet = new tx(l, e), e.pushToEventProccesors([e.meet]);
                let u = new tQ(new e0.n5(e.api), new tz(e.api));
                e.events = new t8(u, e, e.storage, e.getEventProccesors(), e.isLightweight);
                let p = new t9(new t6.MK(e.api)),
                    h = new ie.h(e);
                e.pushToEventProccesors([h]), e.images = new id(p, e.storage, e, h), e.typing = new iu(new il(s), e);
                let g = new iJ(e.api),
                    c = new i9.oO(e.api);
                e.search = new ss(new se(g), c, e, e.storage);
                let f = new sn(new sh(e.api));
                e.gifPocket = new sa(f, e);
                let v = new sM(e.api);
                e.sharedMedia = new sE(v, e, e.storage);
                let m = new rG(new ra(e.api));
                e.market = new rq(m, e);
                let k = new rF(new tr(e.api));
                e.negah = new rH(k, e);
                let y = new r0(new rK(e.api));
                e.appzar = new r2(y, e);
                let b = new r8(new r5(e.api));
                e.falake = new r6(b);
                let T = new nd(new nr(e.api));
                e.topPeer = new nl(T, e.storage.getKeyValue(e6.F8.TopPeers), e), e.comment = new nh(e, e.storage.getKeyValue(e6.F8.Comments));
                let M = new nc(new ng.Fw(e.api));
                e.filesModule = new nv(M, e);
                let S = new nS(new nT(e.api));
                e.anonymousContact = new nw(S, e);
                let w = new nG(new nU(e.api));
                e.organizations = new nx(w, e, e.storage);
                let P = new nL(new nq.es(e.api));
                e.goldGiftPacket = new nN(P, e);
                let E = new nV(new nF.WT(e.api));
                e.ramz = new nB(E, e.crypto, e);
                let I = new ai(new n2(e.api));
                e.scheduler = new an(I, e.storage.getKeyValue(e6.F8.ScheduledPeers), e.localStorage), e.pushToEventProccesors([e.scheduler]);
                let R = new ab(new aa.m1(e.api), new ah(e.api), new ak(e.api));
                e.ai = new aM(R, e.events.bindToUpdates());
                let D = new aw(new aS.CK(e.api));
                e.timche = new aP(D, e), e.pendingOperations = new aI(e.storage.getKeyValue(e6.F8.PendingOperations))
            }
        }
    }
]);
//# sourceMappingURL=modulesBuilder.d4e7a785.js.map