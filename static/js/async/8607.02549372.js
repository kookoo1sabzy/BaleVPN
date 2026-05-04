try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4f26b25f-a569-4963-bce6-a9f30b94bbc7", e._sentryDebugIdIdentifier = "sentry-dbid-4f26b25f-a569-4963-bce6-a9f30b94bbc7")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8607"], {
        51743: function(e, t, s) {
            s.d(t, {
                GK: () => T,
                n5: () => w
            });
            var i = s(51116),
                n = s(86654),
                a = s(78220),
                r = s(67607),
                o = s(68647),
                d = s(33636),
                l = s(89304),
                u = s(55231),
                g = s(76421),
                h = s(55935),
                p = s(87728),
                c = s(43806),
                f = s(49621),
                v = s(2106),
                m = s(36644);
            let M = {
                encode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                    for (let s of (0 !== e.header && t.uint32(8).int32(e.header), 0 !== e.body.length && t.uint32(18).bytes(e.body), t.uint32(26).fork(), e.userIds)) t.int32(s);
                    for (let s of (t.join(), t.uint32(34).fork(), e.groupIds)) t.int32(s);
                    return t.join(), t
                },
                decode(e, t) {
                    let s = e instanceof n.V5 ? e : new n.V5(e),
                        i = void 0 === t ? s.len : s.pos + t,
                        a = {
                            header: 0,
                            body: new Uint8Array(0),
                            userIds: [],
                            groupIds: []
                        };
                    for (; s.pos < i;) {
                        let e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (8 !== e) break;
                                a.header = s.int32();
                                continue;
                            case 2:
                                if (18 !== e) break;
                                a.body = s.bytes();
                                continue;
                            case 3:
                                if (24 === e) {
                                    a.userIds.push(s.int32());
                                    continue
                                }
                                if (26 === e) {
                                    let e = s.uint32() + s.pos;
                                    for (; s.pos < e;) a.userIds.push(s.int32());
                                    continue
                                }
                                break;
                            case 4:
                                if (32 === e) {
                                    a.groupIds.push(s.int32());
                                    continue
                                }
                                if (34 === e) {
                                    let e = s.uint32() + s.pos;
                                    for (; s.pos < e;) a.groupIds.push(s.int32());
                                    continue
                                }
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        s.skip(7 & e)
                    }
                    return a
                }
            };

            function T() {
                return {
                    update: void 0,
                    routeId: 0,
                    sequence: 0,
                    timestamp: 0,
                    weakEvent: void 0,
                    mtupdate: void 0,
                    updates: void 0
                }
            }
            let b = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return void 0 !== e.update && f.xC.encode(e.update, t.uint32(10).fork()).join(), 0 !== e.routeId && t.uint32(16).int32(e.routeId), 0 !== e.sequence && t.uint32(24).int32(e.sequence), 0 !== e.timestamp && t.uint32(32).int64(e.timestamp), void 0 !== e.weakEvent && k.encode(e.weakEvent, t.uint32(42).fork()).join(), void 0 !== e.mtupdate && M.encode(e.mtupdate, t.uint32(50).fork()).join(), void 0 !== e.updates && O.encode(e.updates, t.uint32(58).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = T();
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    a.update = f.xC.decode(s, s.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    a.routeId = s.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    a.sequence = s.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    a.timestamp = globalThis.Number(s.int64().toString());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    a.weakEvent = k.decode(s, s.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    a.mtupdate = M.decode(s, s.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    a.updates = O.decode(s, s.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                k = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return void 0 !== e.typing && c.ld.encode(e.typing, t.uint32(10).fork()).join(), void 0 !== e.typingStop && c.XU.encode(e.typingStop, t.uint32(18).fork()).join(), void 0 !== e.userOnline && c.sn.encode(e.userOnline, t.uint32(26).fork()).join(), void 0 !== e.userOffline && c._9.encode(e.userOffline, t.uint32(34).fork()).join(), void 0 !== e.userLastSeenUnknown && c.QW.encode(e.userLastSeenUnknown, t.uint32(42).fork()).join(), void 0 !== e.userLastSeen && c.It.encode(e.userLastSeen, t.uint32(50).fork()).join(), void 0 !== e.groupOnline && c.UR.encode(e.groupOnline, t.uint32(58).fork()).join(), void 0 !== e.callReactionSent && d.Df.encode(e.callReactionSent, t.uint32(66).fork()).join(), void 0 !== e.messageReaction && a.zl.encode(e.messageReaction, t.uint32(74).fork()).join(), void 0 !== e.threadMessage && u.TIF.encode(e.threadMessage, t.uint32(82).fork()).join(), void 0 !== e.threadEditMessage && u.wN5.encode(e.threadEditMessage, t.uint32(90).fork()).join(), void 0 !== e.threadDeleteMessage && u.S_s.encode(e.threadDeleteMessage, t.uint32(98).fork()).join(), void 0 !== e.callAction && d.c4.encode(e.callAction, t.uint32(106).fork()).join(), void 0 !== e.askBotReview && v.a3.encode(e.askBotReview, t.uint32(114).fork()).join(), void 0 !== e.endpointChanged && r.zu.encode(e.endpointChanged, t.uint32(122).fork()).join(), void 0 !== e.hashEndpointChanged && r.XG.encode(e.hashEndpointChanged, t.uint32(130).fork()).join(), void 0 !== e.transcriptionStreamChunk && m.bP.encode(e.transcriptionStreamChunk, t.uint32(138).fork()).join(), void 0 !== e.messageStreamChunks && l.nb.encode(e.messageStreamChunks, t.uint32(146).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            o = {
                                typing: void 0,
                                typingStop: void 0,
                                userOnline: void 0,
                                userOffline: void 0,
                                userLastSeenUnknown: void 0,
                                userLastSeen: void 0,
                                groupOnline: void 0,
                                callReactionSent: void 0,
                                messageReaction: void 0,
                                threadMessage: void 0,
                                threadEditMessage: void 0,
                                threadDeleteMessage: void 0,
                                callAction: void 0,
                                askBotReview: void 0,
                                endpointChanged: void 0,
                                hashEndpointChanged: void 0,
                                transcriptionStreamChunk: void 0,
                                messageStreamChunks: void 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.typing = c.ld.decode(s, s.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.typingStop = c.XU.decode(s, s.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.userOnline = c.sn.decode(s, s.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.userOffline = c._9.decode(s, s.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.userLastSeenUnknown = c.QW.decode(s, s.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.userLastSeen = c.It.decode(s, s.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.groupOnline = c.UR.decode(s, s.uint32());
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    o.callReactionSent = d.Df.decode(s, s.uint32());
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    o.messageReaction = a.zl.decode(s, s.uint32());
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    o.threadMessage = u.TIF.decode(s, s.uint32());
                                    continue;
                                case 11:
                                    if (90 !== e) break;
                                    o.threadEditMessage = u.wN5.decode(s, s.uint32());
                                    continue;
                                case 12:
                                    if (98 !== e) break;
                                    o.threadDeleteMessage = u.S_s.decode(s, s.uint32());
                                    continue;
                                case 13:
                                    if (106 !== e) break;
                                    o.callAction = d.c4.decode(s, s.uint32());
                                    continue;
                                case 14:
                                    if (114 !== e) break;
                                    o.askBotReview = v.a3.decode(s, s.uint32());
                                    continue;
                                case 15:
                                    if (122 !== e) break;
                                    o.endpointChanged = r.zu.decode(s, s.uint32());
                                    continue;
                                case 16:
                                    if (130 !== e) break;
                                    o.hashEndpointChanged = r.XG.decode(s, s.uint32());
                                    continue;
                                case 17:
                                    if (138 !== e) break;
                                    o.transcriptionStreamChunk = m.bP.decode(s, s.uint32());
                                    continue;
                                case 18:
                                    if (146 !== e) break;
                                    o.messageStreamChunks = l.nb.decode(s, s.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return o
                    }
                },
                S = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        for (let s of (0 !== e.lastSequence && t.uint32(16).int32(e.lastSequence), !1 !== e.needMore && t.uint32(24).bool(e.needMore), e.updates)) f.xC.encode(s, t.uint32(34).fork()).join();
                        return void 0 !== e.tooLong && o._t.encode({
                            value: e.tooLong
                        }, t.uint32(42).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                lastSequence: 0,
                                needMore: !1,
                                updates: [],
                                tooLong: void 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 2:
                                    if (16 !== e) break;
                                    a.lastSequence = s.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    a.needMore = s.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    a.updates.push(f.xC.decode(s, s.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    a.tooLong = o._t.decode(s, s.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                y = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return 0 !== e.routeId && t.uint32(8).int32(e.routeId), 0 !== e.lastSequence && t.uint32(16).int32(e.lastSequence), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                routeId: 0,
                                lastSequence: 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    a.routeId = s.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    a.lastSequence = s.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                D = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return !1 !== e.isMtProto && t.uint32(8).bool(e.isMtProto), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                isMtProto: !1
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    a.isMtProto = s.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                R = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        for (let s of e.routeSequences) y.encode(s, t.uint32(10).fork()).join();
                        for (let s of (t.uint32(18).fork(), e.optimizations)) t.int32(s);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                routeSequences: [],
                                optimizations: []
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    a.routeSequences.push(y.decode(s, s.uint32()));
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        a.optimizations.push(s.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = s.uint32() + s.pos;
                                        for (; s.pos < e;) a.optimizations.push(s.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                _ = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        for (let s of (Object.entries(e.groupEvents).forEach(e => {
                                let [s, i] = e;
                                I.encode({
                                    key: s,
                                    value: i
                                }, t.uint32(10).fork()).join()
                            }), e.usersRefs)) p.Uw.encode(s, t.uint32(18).fork()).join();
                        for (let s of e.groupsRefs) p.wX.encode(s, t.uint32(26).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                groupEvents: {},
                                usersRefs: [],
                                groupsRefs: []
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1: {
                                    if (10 !== e) break;
                                    let t = I.decode(s, s.uint32());
                                    void 0 !== t.value && (a.groupEvents[t.key] = t.value);
                                    continue
                                }
                                case 2:
                                    if (18 !== e) break;
                                    a.usersRefs.push(p.Uw.decode(s, s.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    a.groupsRefs.push(p.wX.decode(s, s.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                I = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return 0 !== e.key && t.uint32(8).int32(e.key), void 0 !== e.value && S.encode(e.value, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                key: 0,
                                value: void 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    a.key = s.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    a.value = S.decode(s, s.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                O = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        for (let s of e.updates) f.xC.encode(s, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                updates: []
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    a.updates.push(f.xC.decode(s, s.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                x = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return void 0 !== e.peer && p.Cu.encode(e.peer, t.uint32(10).fork()).join(), void 0 !== e.threadId && g.vzI.encode(e.threadId, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                peer: void 0,
                                threadId: void 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    a.peer = p.Cu.decode(s, s.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    a.threadId = g.vzI.decode(s, s.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                },
                E = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.fI;
                        return void 0 !== e.peer && p.Cu.encode(e.peer, t.uint32(10).fork()).join(), void 0 !== e.threadId && g.vzI.encode(e.threadId, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let s = e instanceof n.V5 ? e : new n.V5(e),
                            i = void 0 === t ? s.len : s.pos + t,
                            a = {
                                peer: void 0,
                                threadId: void 0
                            };
                        for (; s.pos < i;) {
                            let e = s.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    a.peer = p.Cu.decode(s, s.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    a.threadId = g.vzI.decode(s, s.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            s.skip(7 & e)
                        }
                        return a
                    }
                };
            class w {
                SubscribeToUpdates(e, t) {
                    return this.rpc.invoke(P, e, t)
                }
                GetDifference(e, t) {
                    return this.rpc.unary(U, e, t)
                }
                SubscribeToThreadUpdates(e, t) {
                    return this.rpc.unary(C, e, t)
                }
                UnsubscribeFromThreadUpdates(e, t) {
                    return this.rpc.unary(L, e, t)
                }
                constructor(e) {
                    (0, i._)(this, "rpc", void 0), this.rpc = e, this.SubscribeToUpdates = this.SubscribeToUpdates.bind(this), this.GetDifference = this.GetDifference.bind(this), this.SubscribeToThreadUpdates = this.SubscribeToThreadUpdates.bind(this), this.UnsubscribeFromThreadUpdates = this.UnsubscribeFromThreadUpdates.bind(this)
                }
            }
            let H = {
                    serviceName: "bale.maviz.v1.MavizStream"
                },
                P = {
                    methodName: "SubscribeToUpdates",
                    service: H,
                    requestStream: !1,
                    responseStream: !0,
                    requestType: {
                        serializeBinary() {
                            return D.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = b.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                U = {
                    methodName: "GetDifference",
                    service: H,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return R.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = _.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                C = {
                    methodName: "SubscribeToThreadUpdates",
                    service: H,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return x.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = h.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                L = {
                    methodName: "UnsubscribeFromThreadUpdates",
                    service: H,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return E.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = h.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                }
        },
        80557: function(e, t, s) {
            s.d(t, {
                o: () => h,
                q: () => p
            });
            var i = s(51116),
                n = s(78893),
                a = s(87303),
                r = s(34993),
                o = s(35133),
                d = s(87728),
                l = s(6756),
                u = s(31622),
                g = s(19376);
            let h = "Not found any user or group";
            class p {
                queryNickname(e) {
                    return this.api.searchContact(e.toLowerCase()).pipe((0, r.n)(e => {
                        let {
                            userPeers: t,
                            groupPeers: s
                        } = e;
                        return t.length > 0 ? this.ctx.users.loadUser(t[0]).pipe((0, o.T)(() => (0, g.WS)(t[0]))) : s.length > 0 ? this.ctx.groups.loadGroup(s[0]).pipe((0, o.T)(() => (0, u.Qq)(s[0]))) : (0, n.$)(() => ({
                            code: 5,
                            message: h
                        }))
                    }))
                }
                constructor(e, t) {
                    (0, i._)(this, "api", void 0), (0, i._)(this, "ctx", void 0), (0, i._)(this, "logger", l.U.getLogger("EntitiesModule")), (0, i._)(this, "loadPeers", e => this.loadUsersGroups(e.filter(e => e.type === d.RK.PEERTYPE_PRIVATE).map(g.u5), e.filter(e => e.type === d.RK.PEERTYPE_GROUP).map(u.uY))), (0, i._)(this, "loadUsersGroups", (e, t, s) => (0, a.p)([this.ctx.users.loadUsers(e, s), this.ctx.groups.loadGroups(t, s)]).pipe((0, o.T)(e => {
                        let [t, s] = e;
                        return {
                            users: t,
                            groups: s
                        }
                    }))), this.api = e, this.ctx = t
                }
            }
        },
        68506: function(e, t, s) {
            s.d(t, {
                D: () => n,
                h: () => v
            });
            var i, n, a = s(51116),
                r = s(18520),
                o = s(69758),
                d = s(84748),
                l = s(45663),
                u = s(35133),
                g = s(34993),
                h = s(94757),
                p = s(78130),
                c = s(97244),
                f = s(6756);
            (i = n || (n = {})).OwnStickersUpdated = "OwnStickersUpdated", i.StickersInvalidated = "StickersInvalidated", i.RecentStickersUpdated = "RecentStickers", i.SavedGifsUpdated = "SavedGifsUpdated", i.SavedGifsInvalidated = "SavedGifsInvalidated";
            class v {
                bindToUpdates() {
                    return this.updates$.asObservable()
                }
                handleStickerChanged() {
                    return this.ctx.images.updateStickers().pipe((0, u.T)(e => ((0, r.s)(this.validateRecentStickers(e)).catch(e => {
                        f.U.error("handleStickerChanged", e)
                    }), {
                        collections: e,
                        type: n.OwnStickersUpdated
                    })))
                }
                handleSavedGifsChanged() {
                    return this.ctx.images.updateSavedGifs().pipe((0, u.T)(e => ({
                        savedGifs: e,
                        type: n.SavedGifsUpdated
                    })))
                }
                validateRecentStickers(e) {
                    return this.ctx.images.loadRecentStickers().pipe((0, g.n)(t => {
                        let s = e.map(e => e.id);
                        return this.ctx.images.updateRecentStickers(t.filter(e => e.collectionId && s.includes(e.collectionId)))
                    }))
                }
                nextUpdate(e) {
                    this.updates$.next(e)
                }
                process(e) {
                    let t = [],
                        s = !1,
                        i = !1;
                    return (e.forEach(e => {
                        var a;
                        if (e.stickerPacksChanged && !s) s = !0, t.push(e);
                        else if (e.savedGifsChanged && !i) i = !0, t.push(e);
                        else if ((null == (a = e.parameterChanged) ? void 0 : a.key) === "syncedRecentStickers") {
                            let t = e.parameterChanged.value;
                            if (t) try {
                                this.updates$.next({
                                    type: n.RecentStickersUpdated,
                                    recentStickers: JSON.parse(t)
                                })
                            } catch {}
                        }
                    }), 0 === t.length) ? (0, o.of)(void 0) : (0, d.H)(t).pipe((0, h.H)(e => e.stickerPacksChanged ? this.handleStickerChanged() : e.savedGifsChanged ? this.handleSavedGifsChanged() : (0, o.of)(void 0)), (0, p.M)(e => {
                        e && this.updates$.next(e)
                    }), (0, c.u)(void 0))
                }
                constructor(e) {
                    (0, a._)(this, "ctx", void 0), (0, a._)(this, "name", "ImagesUpdatesHandler"), (0, a._)(this, "updates$", new l.B), this.ctx = e
                }
            }
        },
        85141: function(e, t, s) {
            s.d(t, {
                $Z: () => l,
                VL: () => g,
                eL: () => u,
                pj: () => d,
                r4: () => o
            });
            var i = s(8831),
                n = s(6756),
                a = s(10391),
                r = s(10394);

            function o(e, t) {
                return e >= t.start && e <= t.end
            }

            function d(e, t) {
                for (let s of t)
                    if (o(e, s)) return s
            }

            function l(e, t) {
                let s, i, n = [];
                for (let a = 0; a < e.length; a++) {
                    let r = e[a];
                    if (null == s && (t.start < r.start ? s = t.start : t.start >= r.start && t.start <= r.end && (s = r.start)), null != s && null == i) {
                        if (t.end < r.start) {
                            i = t.end, n.push({
                                start: s,
                                end: i
                            }), n.push(...e.slice(a));
                            break
                        } else if (t.end >= r.start && t.end <= r.end) {
                            i = r.end, n.push({
                                start: s,
                                end: i
                            }), n.push(...e.slice(a + 1));
                            break
                        }
                    }
                    null == s && null == i && n.push(r)
                }
                return (null == s || null == i) && (null != s && (t.start = s), null != i && (t.end = i), n.push(t)), n
            }

            function u(e, t, s, n, r) {
                let o = s[0],
                    d = s[s.length - 1];
                if (0 !== s.length)
                    if (e === i.iP.LISTLOADMODE_BOTH) return {
                        start: o.date,
                        end: d.date
                    };
                    else if (e === i.iP.LISTLOADMODE_BACKWARD) return {
                    start: o.date,
                    end: a.C.Open === n ? (null == r ? void 0 : r.end) ?? d.date : t
                };
                else return {
                    start: t,
                    end: d.date
                }
            }
            let g = (e, t, s, a, d, l, u) => {
                let g, h;
                if (n.U.info("Messages", ">> DebugRefactorHist getMessages", s, e, t, u, !!a), !a) return null;
                let p = function(e, t, s, n, a) {
                    if (!o(e, t)) return -1;
                    if (s === i.iP.LISTLOADMODE_BACKWARD || s === i.iP.LISTLOADMODE_BOTH)
                        for (let s = n.length - 1; s >= 0; s--) {
                            let i = n[s];
                            if (i.date < e && !o(i.date, t)) return -1;
                            if (i.date === e && !a || i.date < e) return s
                        }
                    if (s === i.iP.LISTLOADMODE_FORWARD)
                        for (let s = 0; s < n.length; s++) {
                            let i = n[s];
                            if (i.date > e && !o(i.date, t)) break;
                            if (i.date === e && !a || i.date > e) return s
                        }
                    return -1
                }(e, t, s, a, l);
                if (p < 0) return null;
                let c = [];
                if (s === i.iP.LISTLOADMODE_BACKWARD) {
                    for (let e = p; e >= 0; e--) {
                        let s = a[e];
                        if (o(s.date, t) && d > 0) {
                            let e = (0, r._R)(s);
                            (e && h && e !== h || !e) && d--, 0 === d && h || c.push(s), h = e
                        } else break
                    }
                    c.reverse()
                }
                if (s === i.iP.LISTLOADMODE_FORWARD)
                    for (let e = p; e < a.length; e++) {
                        let s = a[e];
                        if (o(s.date, t) && d > 0) {
                            let e = (0, r._R)(s);
                            (e && g && e !== g || !e) && d--, 0 === d && g || c.push(s), g = e
                        } else break
                    }
                if (s === i.iP.LISTLOADMODE_BOTH) {
                    let e = a[p];
                    e && o(e.date, t) && c.push(e);
                    let s = 0,
                        i = 0;
                    for (let e = 1; i + s < d; e++) {
                        let n = !1,
                            l = a[p + e];
                        if (l && o(l.date, t)) {
                            let e = (0, r._R)(l);
                            (e && g && e !== g || !e) && s++, i + s === d && g || c.push(l), g = e, n = !0
                        }
                        let u = a[p - e];
                        if (u && o(u.date, t)) {
                            let e = (0, r._R)(u);
                            (e && h && e !== h || !e) && i++, i + s === d && h || c.unshift(u), h = e, n = !0
                        }
                        if (!n) break
                    }
                }
                return c
            }
        },
        31754: function(e, t, s) {
            s.d(t, {
                b: () => X,
                k: () => Z
            });
            var i = s(51116),
                n = s(69758),
                a = s(44334),
                r = s(87303),
                o = s(45663),
                d = s(23031),
                l = s(36595),
                u = s(78893),
                g = s(84748),
                h = s(78130),
                p = s(46896),
                c = s(35133),
                f = s(34993),
                v = s(97244),
                m = s(52545),
                M = s(3537),
                T = s(10492),
                b = s(94757),
                k = s(33222),
                S = s(8831),
                y = s(36343),
                D = s(87728),
                R = s(76421),
                _ = s(10394),
                I = s(7836),
                O = s(6756),
                x = s(13274),
                E = s(94823),
                w = s(33148),
                H = s(85243),
                P = s(31622),
                U = s(17782),
                C = s(36742),
                L = s(51743),
                A = s(10391),
                F = s(85141),
                j = s(78625),
                G = s(59001),
                B = s(19376),
                N = s(78819),
                q = s(49553),
                W = s(55231),
                V = s(41296),
                $ = s(88228),
                Y = s(84135),
                K = s(2689);
            class z {
                constructor(e, t, s) {
                    (0, i._)(this, "api", void 0), (0, i._)(this, "ctx", void 0), (0, i._)(this, "histories", void 0), (0, i._)(this, "logger", O.U.getLogger("MessageStream")), (0, i._)(this, "expectedChunkIds", new Map), (0, i._)(this, "streamStarts$", new o.B), (0, i._)(this, "requestStreamChunks", (e, t, s) => {
                        this.logger.info("Requesting stream chunks for message", e);
                        let i = this.expectedChunkIds.get(e) ?? 1;
                        return this.expectedChunkIds.has(e) || this.expectedChunkIds.set(e, i), this.api.receiveMessageStream({
                            exPeer: s,
                            messageId: {
                                rid: e,
                                date: t,
                                seq: ""
                            },
                            fromChunkId: i
                        }).pipe((0, h.M)(t => {
                            this.logger.info("Stream request sent successfully", e, "response timeout:", t.chunkTimeoutMillis)
                        }), (0, p.W)(t => (this.logger.error("Error requesting stream chunks", t), this.expectedChunkIds.delete(e), a.w)))
                    }), (0, i._)(this, "startStream", (e, t, s) => {
                        this.logger.info("Starting stream for message", e), this.expectedChunkIds.has(e) || this.expectedChunkIds.set(e, 1), this.streamStarts$.next({
                            messageRid: e,
                            messageDate: t,
                            exPeer: s
                        })
                    }), (0, i._)(this, "bindToStreamChunkUpdates", () => {
                        let e = this.ctx.events.bindToWeakEvents().pipe((0, M.p)(e => !!e.messageStreamChunks), (0, c.T)(e => e.messageStreamChunks), (0, T.u)()),
                            t = (t, s, i) => this.requestStreamChunks(t, s, i).pipe((0, f.n)(i => e.pipe((0, M.p)(e => {
                                var i;
                                return (null == (i = e.messageId) ? void 0 : i.rid) === t && e.messageId.date === s
                            }), (0, $.w)(i.chunkTimeoutMillis), (0, b.H)(e => {
                                let i = (0, E.K2)(e.exPeer),
                                    a = [],
                                    o = [],
                                    l = !1,
                                    h = !1;
                                for (let r of e.chunks) {
                                    var v, m, M, T, b;
                                    if (null == (v = r.data) ? void 0 : v.terminationSignal) {
                                        this.logger.info("Stream terminated", t), this.expectedChunkIds.delete(t), a.push({
                                            type: w.i.StreamEnded,
                                            messageId: {
                                                rid: t,
                                                date: s,
                                                seq: ""
                                            },
                                            peer: i
                                        }), l = !0;
                                        break
                                    }
                                    let e = this.expectedChunkIds.get(t);
                                    if (r.id === e) {
                                        this.logger.info("Chunk is eligible, dispatching action", r.id, e), this.expectedChunkIds.set(t, e + 1), a.push({
                                            type: w.i.StreamChunkReceived,
                                            text: (null == (M = r.data) || null == (m = M.textChunk) ? void 0 : m.text) ?? "",
                                            messageId: {
                                                rid: t,
                                                date: s,
                                                seq: ""
                                            },
                                            peer: i
                                        });
                                        let d = (null == (b = r.data) || null == (T = b.textChunk) ? void 0 : T.text) ?? "",
                                            l = this.histories.getHistoryMessage(i, t).pipe((0, f.n)(e => {
                                                if (e) {
                                                    var t, s, a, r, o, l, u, g;
                                                    let n = (null == (a = e.message) || null == (s = a.streamedMessage) || null == (t = s.message) ? void 0 : t.longTextMessage) ?? (null == (g = e.message) || null == (u = g.templateMessage) || null == (l = u.generalMessage) || null == (o = l.streamedMessage) || null == (r = o.message) ? void 0 : r.longTextMessage);
                                                    if (n) return n.text = (n.text || "") + d, this.histories.updateHistoryMessage(i, e)
                                                }
                                                return (0, n.of)(void 0)
                                            }), (0, p.W)(e => (this.logger.error("Error updating history", e), (0, n.of)(void 0))));
                                        o.push(l)
                                    } else {
                                        this.logger.warn("Chunk not eligible - ID mismatch", "received:", r.id, "expected:", e), h = !0;
                                        break
                                    }
                                }
                                let k = o.length > 0 ? (0, r.p)(o).pipe((0, c.T)(() => void 0)) : (0, n.of)(void 0);
                                return l ? (0, V.x)((0, g.H)(a), k.pipe((0, c.T)(() => void 0))) : h ? (0, u.$)(() => Error("CHUNK_MISMATCH")) : (0, d.h)((0, g.H)(a), k)
                            }), (0, Y.v)(e => (null == e ? void 0 : e.type) !== w.i.StreamEnded, !0))), (0, p.W)(e => ("CHUNK_MISMATCH" === e.message ? this.logger.warn("Chunk mismatch, retrying from expected chunk", t) : "TimeoutError" === e.name && this.logger.warn("Timeout, retrying from expected chunk", t), (0, u.$)(() => e))), (0, K.L)({
                                count: Number.MAX_SAFE_INTEGER,
                                delay: 2e3
                            }));
                        return this.streamStarts$.pipe((0, m.Z)(e => {
                            let {
                                messageRid: s,
                                messageDate: i,
                                exPeer: n
                            } = e;
                            return t(s, i, n).pipe((0, p.W)(e => (this.logger.error("Unhandled stream error", s, e), a.w)))
                        }))
                    }), this.api = e, this.ctx = t, this.histories = s
                }
            }
            let Z = 20;
            class X {
                bindToAnalyticsEvents() {
                    return this.messagesAnalyticsEvents$.asObservable()
                }
                invalidate(e) {
                    this.logger.info("DebugRefactorHist", "invalidating Messages: start");
                    let t = this.ctx.dialogs.getCurrentPeer();
                    return this.histories.invalidateHistories(t, e).pipe((0, h.M)(() => this.logger.info("DebugRefactorHist", "invalidating Messages: end")), (0, p.W)(e => (this.logger.error("invalidate histories error", e), (0, n.of)(void 0))))
                }
                prepareMessages(e, t) {
                    let s = e.map(e => e.reactions.map(e => e.users)).flat(2).map(e => (0, N.j)(e));
                    return this.ctx.users.loadUsers([...t ?? [], ...s, this.ctx.auth.getUserOutPeer()]).pipe((0, c.T)(() => {
                        var t;
                        return this.mapApiMessageContainersToMessageContainers(e, null == (t = this.ctx.auth.user) ? void 0 : t.id)
                    }))
                }
                handleLoadMessagesResponse(e, t, s) {
                    return (0, f.n)(i => this.prepareMessages(i.history, i.userPeers).pipe(this.concatUnSentMessages(e, t, s)))
                }
                mapApiMessageContainersToMessageContainers(e, t) {
                    let s = (0, _.Pm)(e, t),
                        i = Date.now();
                    return s.map(e => {
                        let t = {
                            ...e,
                            reactionsList: []
                        };
                        return e.type === k.cM.CROWDFUNDING && this.validateCrowdFundingMessageStatus(t, i), t
                    })
                }
                validateCrowdFundingMessageStatus(e, t) {
                    var s, i;
                    let n = null == e ? void 0 : e.message;
                    (null == n || (null == n ? void 0 : n.emptyMessage) != null) && (n = null == e || null == (i = e.quotedMessage) ? void 0 : i.quotedMessageContent), (null == n ? void 0 : n.crowdFundingMessage) != null && (null == n || null == (s = n.crowdFundingMessage) ? void 0 : s.status) === R.rn4.CROWDFUNDINGSTATUS_INPROGRESS && t > Number(null == n ? void 0 : n.crowdFundingMessage.endDate) && (n.crowdFundingMessage.status = R.rn4.CROWDFUNDINGSTATUS_EXPIRED)
                }
                concatUnSentMessages(e, t, s) {
                    return (0, f.n)(i => {
                        let n = [];
                        return this.getAllPendingMessages().pipe((0, c.T)(a => {
                            let r = (0, _.Sj)(a).get((0, I.LP)(e));
                            return r && r.length > 0 && (this.logger.debug("concatUnSentMessages, Pendings", r.map(G.dF)), n = r.filter(e => {
                                let {
                                    date: i
                                } = e;
                                return this.checkUnSentMessages(Number(i), t, s, r)
                            }), this.logger.debug("Filtered Pending", n.map(G.dF))), i.concat(n).sort((e, t) => Number(t.date) - Number(e.date))
                        }))
                    })
                }
                getShowReactionFlag() {
                    return this.api.getShowReactionFlag().pipe((0, p.W)(() => (O.U.error("get reaction flag failed"), a.w)))
                }
                enableShowReactionFlag() {
                    return this.api.enableShowReactionFlag()
                }
                getReactions(e, t, s, i) {
                    return this.api.getMessagesReactions(e && (0, I.F8)(e), t, s && (0, I.F8)(s), i).pipe((0, f.n)(e => {
                        let t = new Set;
                        return e.containers.forEach(e => {
                            e.reactions.forEach(e => {
                                e.users.forEach(e => {
                                    let s = (0, N.j)(e);
                                    t.add(s)
                                })
                            })
                        }), this.ctx.users.loadUsers(Array.from(t)).pipe((0, v.u)(e))
                    }), (0, m.Z)(t => {
                        let s = this.ctx.dialogs.getCurrentPeer() ?? e,
                            i = [];
                        return [this.histories, this.ctx.comment.getThreads()].forEach(e => {
                            let n = e.updateReactions(s, t.containers);
                            i.push(n)
                        }), (0, r.p)(i).pipe((0, h.M)(e => {
                            let t = e.flat();
                            t.length > 0 && this.nextUpdateMessagesEvent(s, t)
                        }), (0, c.T)(() => t.containers))
                    }))
                }
                getMessagesViews(e, t, s) {
                    return this.api.getMessagesViews((0, I.F8)(e), t, s).pipe((0, c.T)(e => e.containers))
                }
                getViews(e, t, s) {
                    return this.getMessagesViews((0, I.F8)(e), t, s).pipe((0, f.n)(t => this.histories.updateViews(this.ctx.dialogs.getCurrentPeer() ?? e, t).pipe((0, h.M)(t => {
                        t.length > 0 && this.nextUpdateMessagesEvent(this.ctx.dialogs.getCurrentPeer() ?? e, t)
                    }), (0, c.T)(() => t))))
                }
                getReactionsList(e, t, s) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
                    return this.api.getReactionsList({
                        peer: (0, I.F8)(e),
                        rid: s.rid,
                        date: s.date,
                        code: t,
                        limit: n,
                        page: i
                    }).pipe((0, c.T)(e => e.userReactions), (0, f.n)(e => this.ctx.users.loadUsers(e.map(e => (0, N.j)(e.userId))).pipe((0, v.u)(e))))
                }
                mapApiDiscussionMessageToDiscussionMessage(e, t) {
                    var s;
                    let [i] = this.mapApiMessageContainersToMessageContainers([t], null == (s = this.ctx.auth.user) ? void 0 : s.id);
                    return this.histories.getHistoryMessage(e, t.rid).pipe((0, c.T)(e => ({
                        ...i,
                        ...e,
                        senderUid: i.senderUid,
                        isOut: i.isOut
                    })))
                }
                loadMessagesRepliesInfo(e, t, s, i) {
                    let a = (0, E.YQ)(e, i);
                    return this.api.getMessagesRepliesInfo(a, s).pipe((0, f.n)(e => {
                        let t = e.containers.map(e => {
                            var t;
                            return null == (t = e.repliesInfo) ? void 0 : t.recentRepliers
                        }).flat().filter(Boolean);
                        return this.ctx.users.loadUsers(t, !1, !1).pipe((0, c.T)(() => e))
                    }), (0, f.n)(i => {
                        let {
                            containers: a
                        } = i, o = this.histories.updateMessagesRepliesInfo(e, s, a), d = t ? this.ctx.comment.getThreads().updateMessagesRepliesInfo(t, s, a) : (0, n.of)([]);
                        return (0, r.p)([o, d]).pipe((0, h.M)(s => {
                            let [i, n] = s;
                            i.length > 0 && this.nextUpdateMessagesEvent(e, i), n.length > 0 && this.nextUpdateMessagesEvent(t, n)
                        }), (0, c.T)(() => i))
                    }))
                }
                updatePeerLoadedState(e, t) {
                    this.histories.getHistoryMetadata(e).pipe((0, f.n)(s => {
                        if (s) {
                            let i = {
                                ...s.loaded
                            };
                            return void 0 !== t.start && (i.start = t.start), void 0 !== t.end && (i.end = t.end), this.histories.updateHistoryMetadata(e, {
                                loaded: i
                            })
                        }
                        return (0, n.of)(void 0)
                    }), (0, p.W)(e => (this.logger.error("updatePeerLoadedState", e), (0, n.of)(void 0)))).subscribe()
                }
                pinMessage(e, t, s) {
                    let i = {
                        rid: t.rid,
                        date: t.date,
                        seq: "0"
                    };
                    return this.api.pinMessage(e, i, s).pipe((0, h.M)(() => {
                        let s = (0, E.K2)(e),
                            i = this.updatePinnedMessage(s, t);
                        this.messageUpdates$.next(i)
                    }))
                }
                updatePinnedMessage(e, t) {
                    let s = (0, I.LP)(e),
                        i = this.peerPinMessages.get(s),
                        n = {
                            rid: t.rid,
                            date: t.date,
                            seq: "0"
                        };
                    return i && i.push(n), {
                        type: w.i.PinMessage,
                        peer: e,
                        message: t
                    }
                }
                unPinMessage(e, t) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this.api.unPinMessage(e, t, s).pipe((0, h.M)(() => {
                        let i = (0, E.K2)(e),
                            n = this.updateUnPinnedMessages(i, t, s);
                        this.messageUpdates$.next(n)
                    }))
                }
                updateUnPinnedMessages(e, t, s) {
                    let i = (0, I.LP)(e),
                        n = this.peerPinMessages.get(i);
                    return n && (s ? this.peerPinMessages.set(i, []) : (n = n.filter(e => e.rid !== (null == t ? void 0 : t.rid) || e.date !== t.date), this.peerPinMessages.set(i, n))), {
                        type: w.i.UnPinMessage,
                        peer: e,
                        messageId: t,
                        all: s
                    }
                }
                loadPinMessagesFromCache(e) {
                    let t = (0, E.K2)(e),
                        s = (0, I.LP)(t),
                        i = this.peerPinMessages.get(s);
                    return i && i.length > 0 ? this.histories.findMessages(t, i) : (0, n.of)(void 0)
                }
                loadPinMessagesFromRemote(e) {
                    let t = (0, E.K2)(e),
                        s = (0, I.LP)(t);
                    return this.api.loadPinMessages(e).pipe((0, f.n)(e => this.prepareMessages(e.pinnedMessages)), (0, c.T)(e => (this.histories.addMessagesToHistory(t, e), this.peerPinMessages.set(s, e.map(e => ({
                        date: e.date,
                        rid: e.rid,
                        seq: "0"
                    }))), e)))
                }
                loadPinMessages(e) {
                    return this.loadPinMessagesFromCache(e).pipe((0, f.n)(t => t ? (0, n.of)(t) : this.loadPinMessagesFromRemote(e)))
                }
                sendDataMiniappCallback(e, t, s) {
                    return this.api.sendDataMiniappCallback(e, t, s)
                }
                constructor(e, t, s, k, R, V) {
                    var $ = this;
                    (0, i._)(this, "api", void 0), (0, i._)(this, "ctx", void 0), (0, i._)(this, "messagingUpdatesHandler", void 0), (0, i._)(this, "histories", void 0), (0, i._)(this, "isReactNative", void 0), (0, i._)(this, "logger", O.U.getLogger("MessagesModule")), (0, i._)(this, "pendingMessagesStore", void 0), (0, i._)(this, "messageUpdates$", new o.B), (0, i._)(this, "messagesAnalyticsEvents$", new o.B), (0, i._)(this, "LOAD_HISTORY_SIZE", Z), (0, i._)(this, "peerPinMessages", new Map), (0, i._)(this, "streamedMessage", void 0), (0, i._)(this, "bindToEvents$", void 0), (0, i._)(this, "bindToEvents", () => (this.bindToEvents$ || (this.bindToEvents$ = (0, d.h)(this.messagingUpdatesHandler.bindToEvents(), this.messageUpdates$.asObservable(), this.ctx.dialogs.bindToEvents(), this.ctx.folders.bindToFoldersUpdates(), this.ctx.scheduler.bindToSchedulerUpdates(), this.streamedMessage.bindToStreamChunkUpdates()).pipe((0, M.p)(Boolean), (0, T.u)())), this.bindToEvents$)), (0, i._)(this, "nextUpdateMessagesEvent", (e, t, s) => {
                        this.messageUpdates$.next({
                            type: w.i.UpdateMessages,
                            peer: e,
                            messages: t,
                            threadId: s
                        })
                    }), (0, i._)(this, "updateHistoryMessage", (e, t) => this.histories.updateHistoryMessage(e, t).pipe((0, h.M)(() => {
                        this.nextUpdateMessagesEvent(e, [t])
                    }))), (0, i._)(this, "handleNewMessages", (e, t, s) => (0, l.T)(() => !!s, (0, n.of)(s), this.ctx.dialogs.getPeerDialog(e, {
                        save: !1
                    })).pipe((0, f.n)(s => this.histories.addNewMessagesToHistory(e, t, s).pipe((0, f.n)(t => {
                        let {
                            newMsgs: i,
                            updatedMessages: a
                        } = t, r = [];
                        if (i.length > 0) {
                            var o;
                            r.push({
                                type: w.i.NewMessages,
                                messages: i,
                                myUid: null == (o = this.ctx.auth.user) ? void 0 : o.id,
                                peer: e,
                                isRemote: !0,
                                dialog: s,
                                currentPeer: this.ctx.dialogs.getCurrentPeer()
                            })
                        }
                        return (a.length > 0 && r.push({
                            type: w.i.UpdateMessages,
                            peer: e,
                            messages: a
                        }), 0 === r.length) ? (0, n.of)(void 0) : (this.logger.debug("DebugRefactorHist", "addNewMessagesToHistorys actions", e.id, r.length), (0, n.of)(...this.removeUpdatesWhenThreadOpen(e, r, w.i.NewMessages)))
                    }))))), (0, i._)(this, "removeUpdatesWhenThreadOpen", (e, t, s) => {
                        let i = this.ctx.dialogs.getCurrentPeer(),
                            n = this.ctx.dialogs.getCurrentThread();
                        return i && (0, I.LP)(i) == (0, I.LP)(e) && void 0 != n && n.threadType === U.bF.COMMENT ? t.filter(e => e.type != s) : t
                    }), (0, i._)(this, "getThreadOpenHistoryDate", (e, t) => t ? this.ctx.comment.getThreads().getDiscussionMessage(e, t.messageId).pipe((0, c.T)(e => (null == e ? void 0 : e.date) ?? Date.now())) : (0, n.of)(Date.now())), (0, i._)(this, "updateThreadReadInfo", (e, t, s, i) => this.ctx.comment.getThreads().getDiscussionMessage(e, s).pipe((0, f.n)(a => {
                        if (!a) return (0, n.of)(void 0);
                        let o = (0, H.AM)(a, i);
                        return (0, r.p)([t ? this.histories.updateMessageThreadReadInfo(t, s, o) : (0, n.of)([]), this.ctx.comment.getThreads().updateMessageThreadReadInfo(e, s, o)]).pipe((0, f.n)(i => {
                            let [a, r] = i;
                            return (t && a.length > 0 && this.nextUpdateMessagesEvent(t, a), r.length > 0 && this.nextUpdateMessagesEvent(e, r), Object.keys(o).length > 0) ? this.ctx.comment.updateThreadReadInfo(e, s, o) : (0, n.of)(void 0)
                        }))
                    }))), (0, i._)(this, "getThreadReadInfo", (e, t) => this.ctx.comment.getThreadReadInfo(e, t.messageId)), (0, i._)(this, "openHistory", (e, t, s, i) => {
                        let a = void 0 !== t,
                            o = (0, H.yj)(t) ? this.ctx.comment.getThreads() : this.histories;
                        return (0, r.p)([this.ctx.dialogs.getPeerDialog(e, {
                            save: !1
                        }), o.getHistoryMetadata(e), o.getLastMessage(e)]).pipe((0, f.n)(d => {
                            let [l, u, g] = d, h = null == l ? void 0 : l.firstUnreadDate, p = l && l.unreadCount > 0, v = () => i ? (0, n.of)(i) : this.getThreadOpenHistoryDate(e, t), m = (0, H.yj)(t) ? void 0 != i ? S.iP.LISTLOADMODE_BOTH : S.iP.LISTLOADMODE_FORWARD : p || i ? S.iP.LISTLOADMODE_BOTH : S.iP.LISTLOADMODE_BACKWARD, M = () => (null == t ? void 0 : t.threadType) === U.bF.BOT ? (0, n.of)(Number.MAX_SAFE_INTEGER) : i ? (0, n.of)(i) : this.getThreadOpenHistoryDate(e, t), T = a ? M() : (0, n.of)((i ? i : p ? h : (null == u ? void 0 : u.loaded.end) ? g && l && g.date > l.date ? g.date : null == l ? void 0 : l.date : -1) || Number.MAX_SAFE_INTEGER), b = (0, H.yj)(t) ? v() : (0, n.of)(p ? h : void 0);
                            return (0, r.p)([b, T]).pipe((0, f.n)(n => {
                                let [a, r] = n;
                                if (this.logger.warn("DebugRefactorHist openHistoryDetails", i, e.id, p, a, m, null == l ? void 0 : l.unreadCount, t), u && !s) {
                                    let s = null == u ? void 0 : u.ranges;
                                    if (s && s.length > 0) {
                                        let i = (0, F.pj)(r, s);
                                        if (this.logger.warn("DebugRefactorHist openHistory has history", e.id, t, null == i ? void 0 : i.start, null == i ? void 0 : i.end), i) return this.loadHistoryFromLocal(e, r, m, i, void 0, a, t).pipe((0, c.T)(e => ({
                                            messages: e,
                                            lastReadDate: a,
                                            mode: m
                                        })))
                                    }
                                    this.logger.warn("DebugRefactorHist Open history from remote", r, a, p)
                                }
                                return this.logger.warn("DebugRefactorHist Open history from remote", r, a, p), this.loadHistoryFromRemote(e, t, r, m, this.LOAD_HISTORY_SIZE).pipe((0, f.n)(t => o.updateHistory(e, r, m, A.C.Open, t, a, {
                                    considerLastVisitedMessage: i === r
                                }).pipe((0, f.n)(() => this.downloadExtendedTextForMessages(t, e).pipe((0, c.T)(() => ({
                                    messages: t,
                                    lastReadDate: a,
                                    mode: m
                                })))))))
                            }))
                        }))
                    }), (0, i._)(this, "updateDocumentMessage", function(e, t, s) {
                        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                        return $.histories.updateDocumentMessage(e, t, s).pipe((0, f.n)(s => s && ($.nextUpdateMessagesEvent(e, [{
                            rid: s.rid,
                            message: s.message
                        }]), i) ? $.updateDBPendingMessage(e, s) : (0, n.of)(t)))
                    }), (0, i._)(this, "loadHistoryFromRemote", (e, t, s, i, n) => t ? this.loadReplies(e, t, s, i, n).pipe((0, c.T)(e => e.reverse())) : this.loadHistory(e, s, i, n).pipe((0, c.T)(e => e.reverse()))), (0, i._)(this, "loadMessagesRequiredEntities", e => {
                        let t = (0, _.AD)(e);
                        return (0, r.p)([this.ctx.users.loadUsers((0, N.g)(t.users)), this.ctx.groups.loadGroups((0, q.O)(t.groups))])
                    }), (0, i._)(this, "loadHistoryFromLocal", (e, t, s, i, a, r, o) => {
                        let d = void 0 != o ? this.ctx.comment.getThreads() : this.histories;
                        return d.getInRangeMessages(e, t, i, s, a, r).pipe((0, f.n)(l => d.getHistoryMetadata(e).pipe((0, f.n)(u => {
                            if (!u) return this.logger.warn("DebugGoToMsg loadHistoryFromLocal no historyMeta, returning empty"), (0, n.of)([]);
                            let g = l && l.length >= this.LOAD_HISTORY_SIZE,
                                h = u.loaded.end && u.loaded.start && 1 === u.ranges.length,
                                p = (0, j.HV)(u.ranges),
                                v = (0, j.$1)(u.ranges),
                                m = p && (0, F.r4)(t, p),
                                M = v && (0, F.r4)(t, v),
                                T = (!m || !u.loaded.end) && s === S.iP.LISTLOADMODE_FORWARD,
                                b = (!M || !u.loaded.start) && s === S.iP.LISTLOADMODE_BACKWARD,
                                k = (!u.loaded.start || !u.loaded.end) && s === S.iP.LISTLOADMODE_BOTH;
                            if (this.logger.warn(">>>>> DebugRefactorHist loadHistoryFromLocal 1", JSON.stringify({
                                    peer: e,
                                    hasEnoughMessages: g,
                                    isInLastRange: m,
                                    shouldLoadMoreBackward: b,
                                    shouldLoadMoreForward: T,
                                    shouldLoadMoreBoth: k,
                                    direction: s,
                                    date: t,
                                    range: i,
                                    inrangeLen: null == l ? void 0 : l.length,
                                    ranges: u.ranges
                                })), l && (g || h || !(!g && (b || T || k)))) return (this.logger.warn(">> DebugRefactorHist loadHistoryFromLocal enough", t, i.end, i.start, null == l ? void 0 : l.length), d.isPersistent) ? this.loadMessagesRequiredEntities(l).pipe((0, f.n)(() => (0, n.of)(l))) : (0, n.of)(l);
                            {
                                var y, D;
                                let i = l ? l.length : 0,
                                    u = s === S.iP.LISTLOADMODE_BOTH ? this.LOAD_HISTORY_SIZE : 2 * this.LOAD_HISTORY_SIZE - i + 1,
                                    g = s === S.iP.LISTLOADMODE_BOTH && r ? A.C.Open : A.C.LoadMore,
                                    h = r ?? t;
                                return s === S.iP.LISTLOADMODE_BACKWARD ? h = (null == l || null == (y = l[0]) ? void 0 : y.date) ?? t : s === S.iP.LISTLOADMODE_FORWARD && (h = (null == l || null == (D = l[i - 1]) ? void 0 : D.date) ?? t), this.logger.debug(">> DebugRefactorHist should load again From Remote", e.id, null == l ? void 0 : l.map(G.dF), h, u), this.loadHistoryFromRemote(e, o, h, s, u).pipe((0, f.n)(i => d.updateHistory(e, h, s, g, i, r).pipe((0, f.n)(i => {
                                    if (!i || 0 === i.ranges.length) return this.logger.warn("DebugGoToMsg loadHistoryFromLocal remote fallback: no metadata after update, returning empty"), (0, n.of)([]);
                                    let r = (0, F.pj)(t, i.ranges);
                                    return r ? d.getInRangeMessages(e, t, r, s, a).pipe((0, c.T)(e => e || [])) : (this.logger.warn("DebugGoToMsg loadHistoryFromLocal remote fallback: date not in any range after update", JSON.stringify({
                                        date: t,
                                        ranges: i.ranges
                                    })), (0, n.of)([]))
                                }))))
                            }
                        }))), (0, p.W)(e => (this.logger.error("Error in loadHistoryFromLocal", e), (0, n.of)([]))))
                    }), (0, i._)(this, "loadMoreHistory", (e, t, s, i, n) => {
                        this.logger.debug(">> DebugRefactorHist loadMoreHistory details", e, s, i, n);
                        let a = (0, H.yj)(t) ? this.ctx.comment.getThreads() : this.histories;
                        return a.getHistoryRanges(e).pipe((0, f.n)(n => {
                            if (n && n.length > 0) {
                                let a = (0, F.pj)(s, n);
                                if (a) return this.loadHistoryFromLocal(e, s, i, a, !1, void 0, t)
                            }
                            return this.loadHistoryFromRemote(e, t, s, i, this.LOAD_HISTORY_SIZE).pipe((0, f.n)(t => (this.logger.info("DebugRefactorHist loadHistory from remote", i, s, t.map(G.dF)), a.updateHistory(e, s, i, A.C.LoadMore, t).pipe((0, c.T)(() => t)))))
                        }), (0, f.n)(t => this.downloadExtendedTextForMessages(t, e).pipe((0, c.T)(() => t))))
                    }), (0, i._)(this, "getTargetRangeMessages", (e, t, s) => {
                        let i = (0, H.yj)(t) ? this.ctx.comment.getThreads() : this.histories,
                            n = S.iP.LISTLOADMODE_BOTH;
                        return this.logger.info("DebugGoToMsg getTargetRangeMessages called", JSON.stringify({
                            peerId: e.id,
                            date: s,
                            thread: !!t
                        })), i.getHistoryRanges(e).pipe((0, f.n)(a => {
                            if (this.logger.info("DebugGoToMsg ranges", JSON.stringify({
                                    hasRanges: a && a.length > 0,
                                    rangesCount: null == a ? void 0 : a.length,
                                    ranges: a,
                                    date: s
                                })), a && a.length > 0) {
                                let i = (0, F.pj)(s, a);
                                if (this.logger.info("DebugGoToMsg findRange result", JSON.stringify({
                                        foundRange: !!i,
                                        range: i,
                                        date: s
                                    })), i) return this.loadHistoryFromLocal(e, s, n, i, void 0, void 0, t).pipe((0, h.M)(e => {
                                    var t, s, i, n;
                                    this.logger.info("DebugGoToMsg loadHistoryFromLocal result", JSON.stringify({
                                        messagesCount: e.length,
                                        firstDate: null == (t = e[0]) ? void 0 : t.date,
                                        lastDate: null == (s = e[e.length - 1]) ? void 0 : s.date,
                                        firstRid: null == (i = e[0]) ? void 0 : i.rid,
                                        lastRid: null == (n = e[e.length - 1]) ? void 0 : n.rid
                                    }))
                                }))
                            }
                            return this.logger.info("DebugGoToMsg falling back to remote"), this.loadHistoryFromRemote(e, t, s, n, this.LOAD_HISTORY_SIZE).pipe((0, h.M)(e => {
                                var t, s;
                                this.logger.info("DebugGoToMsg loadHistoryFromRemote result", JSON.stringify({
                                    messagesCount: e.length,
                                    firstDate: null == (t = e[0]) ? void 0 : t.date,
                                    lastDate: null == (s = e[e.length - 1]) ? void 0 : s.date
                                }))
                            }), (0, f.n)(t => i.updateHistory(e, s, n, A.C.GoToMessage, t).pipe((0, c.T)(() => t))))
                        }))
                    }), (0, i._)(this, "getFirstMessages", e => this.histories.getHistoryMetadata(e).pipe((0, f.n)(t => {
                        let s = (null == t ? void 0 : t.loaded.start) ? this.histories.findFirstMessage(e).pipe((0, c.T)(e => (null == e ? void 0 : e.date) ?? 0)) : (0, n.of)(0),
                            i = S.iP.LISTLOADMODE_FORWARD;
                        return s.pipe((0, f.n)(s => s ? this.loadHistoryFromLocal(e, s, i, null == t ? void 0 : t.ranges[0]).pipe((0, c.T)(t => (this.logger.debug("DebugRefactorHist Response Go To first", t.length, s, e), t))) : this.loadHistoryFromRemote(e, void 0, s, i, this.LOAD_HISTORY_SIZE).pipe((0, c.T)(t => {
                            this.logger.debug("DebugRefactorHist Response Go To first", t.length, s, e);
                            let n = t[0];
                            return n && this.histories.updateHistory(e, n.date, i, A.C.GoToFirstMessage, t), t
                        }))))
                    }))), (0, i._)(this, "getLastMessages", (e, t) => {
                        let s = (0, H.yj)(t) ? this.ctx.comment.getThreads() : this.histories;
                        return s.getLastMessage(e).pipe((0, f.n)(i => this.ctx.dialogs.getPeerDialog(e, {
                            save: !1
                        }).pipe((0, f.n)(t => i && t && t.date < i.date ? (this.logger.warn("DebugRefactorHist Last Message Date > Dialog Date"), this.ctx.dialogs.loadPeerDialog(e).pipe((0, c.T)(t => ({
                            rid: (null == t ? void 0 : t.rid) ?? i.rid,
                            date: (null == t ? void 0 : t.date) ?? i.date,
                            senderUid: (null == t ? void 0 : t.senderUid) ?? i.senderUid,
                            peer: e
                        })))) : t && i && t.date > i.date ? (this.logger.warn("DebugRefactorHist Last Message Date < Dialog Date"), (0, n.of)({
                            rid: t.rid,
                            date: t.date,
                            senderUid: t.senderUid,
                            peer: e
                        })) : i ? (this.logger.warn("DebugRefactorHist Last Message Date = Dialog Date", i.date, null == t ? void 0 : t.date), (0, n.of)({
                            rid: i.rid,
                            date: i.date,
                            senderUid: i.senderUid,
                            peer: e
                        })) : t ? (this.logger.warn("DebugRefactorHist has dialog and no lastMessage"), (0, n.of)({
                            rid: t.rid,
                            date: t.date,
                            senderUid: t.senderUid,
                            peer: e
                        })) : (this.logger.warn("DebugRefactorHist no Last Message no dialog"), (0, n.of)(void 0))), (0, f.n)(e => {
                            if (!e) return (0, n.of)([]);
                            let {
                                date: a,
                                peer: r
                            } = e, o = (0, H.yj)(t) ? Date.now() : a;
                            return s.getHistoryRanges(r).pipe((0, f.n)(e => {
                                let n = e && e.length > 0 ? (0, F.pj)(o, e) : null,
                                    a = S.iP.LISTLOADMODE_BACKWARD;
                                return (this.logger.debug("DebugRefactorHist goToBottom range, mode, type", {
                                    range: n,
                                    mode: a,
                                    date: o,
                                    lastMsg: i && (0, G.dF)(i)
                                }), n) ? this.loadHistoryFromLocal(r, o, a, n, void 0, void 0, t) : this.loadHistoryFromRemote(r, t, o, a, this.LOAD_HISTORY_SIZE).pipe((0, f.n)(e => (this.logger.debug("DebugRefactorHist Response Go To last", e.length), s.updateHistory(r, o, a, A.C.GoToMessage, e).pipe((0, c.T)(() => e)))))
                            }))
                        }))))
                    }), (0, i._)(this, "loadHistory", (e, t, s, i) => this.api.loadHistory(e, "0", t, s, i).pipe(this.handleLoadMessagesResponse(e, t, s))), (0, i._)(this, "loadReplies", (e, t, s, i, n) => {
                        let a = t.threadType === U.bF.BOT ? {
                            id: e.id,
                            type: D.m4.EXPEERTYPE_BOT,
                            accessHash: ""
                        } : (0, P.j3)({
                            id: e.id,
                            groupType: y.MH.GROUPTYPE_GROUP
                        });
                        return this.api.loadReplies(a, t.messageId, s, i, n).pipe(this.handleLoadMessagesResponse(e, s, i))
                    }), (0, i._)(this, "getAllPendingMessages", () => this.pendingMessagesStore.getAll()), (0, i._)(this, "checkUnSentMessages", (e, t, s, i) => {
                        let n = i[0],
                            a = i[i.length - 1];
                        return s === S.iP.LISTLOADMODE_BACKWARD ? e <= t && e > a.date : s === S.iP.LISTLOADMODE_FORWARD ? e >= t && e < n.date : e > a.date && e < n.date
                    }), (0, i._)(this, "updateDBPendingMessage", (e, t) => this.ctx.dialogs.updateLastMessage(e, t).pipe((0, f.n)(() => this.putPendingMessage(e, t)))), (0, i._)(this, "updateMessagesOnDeletePendingMessage", (e, t, s) => this.histories.deleteHistoryMessages(e, t).pipe((0, f.n)(() => (this.messageUpdates$.next({
                        peer: e,
                        rids: t,
                        dates: s,
                        type: w.i.DeleteMessage
                    }), this.deletePendingMessagesFromDB(e, t))))), (0, i._)(this, "addPendingMessages", function(e, t, s) {
                        let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                        return (0, r.p)([$.histories.addPendingMessagesToHistory(e, s), void 0 != t ? $.ctx.comment.getThreads().addPendingMessagesToHistory(e, [...s]) : (0, n.of)(void 0)]).pipe((0, m.Z)(() => {
                            let a = (0, j.HV)(s),
                                r = a && (0, _.H7)(a);
                            return $.ctx.dialogs.updateLastMessage(e, (0, j.HV)(s), {
                                forceUpdate: r,
                                createDialog: !t
                            }).pipe((0, f.n)(() => i ? $.addPendingMessagesToDB(e, s) : (0, n.of)(void 0)), (0, h.M)(() => {
                                var t;
                                $.messageUpdates$.next({
                                    type: w.i.NewMessages,
                                    messages: s,
                                    myUid: null == (t = $.ctx.auth.user) ? void 0 : t.id,
                                    peer: e,
                                    isRemote: !1,
                                    currentPeer: e
                                })
                            }), (0, p.W)(t => {
                                $.logger.error("pending messages", "update dialog failed", t);
                                let i = s.map(e => e.rid);
                                return $.deletePendingMessagesFromDB(e, i).pipe((0, f.n)(() => (0, u.$)(() => t)))
                            }))
                        }))
                    }), (0, i._)(this, "deletePendingMessages", (e, t, s) => this.updateMessagesOnDeletePendingMessage(e, t).pipe((0, m.Z)(() => this.ctx.dialogs.updateDialogsOnDeleteMessage(e, t, s)))), (0, i._)(this, "deletePendingMessagesFromDB", (e, t) => (0, r.p)(t.map(t => {
                        let s = (0, _.MT)(e, t);
                        return this.pendingMessagesStore.delete(s)
                    })).pipe((0, c.T)(() => void 0))), (0, i._)(this, "putPendingMessage", (e, t) => {
                        let s = (0, _.MT)(e, t.rid);
                        return this.pendingMessagesStore.put({
                            id: s,
                            message: t
                        })
                    }), (0, i._)(this, "addPendingMessagesToDB", (e, t) => (0, r.p)(t.map(t => this.putPendingMessage(e, t))).pipe((0, p.W)(e => (this.logger.error("Add pending messages to db", e), (0, n.of)(void 0))))), (0, i._)(this, "sendMessage", (e, t, s, i, n, a) => this.api.sendMessage((0, I.F8)(e), (0, E.YQ)(e, t), s.rid, i, n, null == a ? void 0 : a.messageId).pipe((0, p.W)(t => this.deletePendingMessagesFromDB(e, [s.rid]).pipe((0, f.n)(() => (0, u.$)(() => t)))), (0, f.n)(t => (void 0 != a && this.messagesAnalyticsEvents$.next({
                        commentSentEvent: {
                            messageRid: s.rid,
                            thread: a.messageId,
                            discussionGroupPeerId: e.id,
                            contentType: s.type,
                            quotedRef: n
                        }
                    }), this.deletePendingMessagesFromDB(e, [s.rid]).pipe((0, c.T)(() => t)))), this.addMessageSentEvent([s.rid], e), (0, c.T)(e => ({
                        date: e.date
                    })))), (0, i._)(this, "addMessageSentEvent", (e, t) => (0, h.M)(s => {
                        this.logger.info("subid addMessageSentEvent", e, s), e.forEach((i, n) => {
                            let a = {
                                update: {
                                    messageSent: {
                                        date: s.date,
                                        rid: i,
                                        peer: t,
                                        previousMessageId: void 0
                                    }
                                },
                                sequence: s.seq - (e.length - 1 - n),
                                routeId: 0,
                                timestamp: s.date,
                                mtupdate: void 0,
                                updates: void 0,
                                weakEvent: void 0
                            };
                            this.logger.info("subid addMessageSentEvent event", a), this.ctx.events.addEvent(a)
                        })
                    })), (0, i._)(this, "sendAndAddPendingMessage", function(e, t, s, i) {
                        let n = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            a = (0, _.er)(e);
                        return $.addPendingMessages(t, i, [e], n).pipe((0, f.n)(() => $.sendMessage(t, s, e, e.message, a, i)))
                    }), (0, i._)(this, "sendTextMessage", (e, t, s, i) => {
                        let n = (0, _.er)(e);
                        return this.sendMessage(t, s, e, e.message, n, i)
                    }), (0, i._)(this, "sendInlineCallbackData", (e, t, s, i) => this.api.sendInlineCallbackData(e, t, s, i)), (0, i._)(this, "sendDocumentMessage", (e, t, s, i) => {
                        let n = (0, _.er)(t);
                        return this.sendMessage(e, s, t, t.message, n, i)
                    }), (0, i._)(this, "deleteMessages", (e, t, s, i) => this.api.deleteMessages((0, I.F8)(e), t, s, i).pipe(this.addMessageDeleteEvent(e, t, s))), (0, i._)(this, "addMessageDeleteEvent", (e, t, s) => (0, h.M)(i => {
                        let n = {
                            ...(0, L.GK)(),
                            update: {
                                messageDelete: {
                                    ...(0, W.XC2)(),
                                    rids: t,
                                    dates: {
                                        dates: s
                                    },
                                    peer: e
                                }
                            },
                            sequence: i.seq,
                            routeId: 0,
                            timestamp: Date.now()
                        };
                        this.ctx.events.addEvent(n)
                    })), (0, i._)(this, "updateMessage", (e, t) => this.api.updateMessage((0, I.F8)(e), t.rid, t.message)), (0, i._)(this, "setReaction", function(e, t, s, i, a) {
                        let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            d = t[t.length - 1],
                            l = `reaction_${e.id}_${d}`;
                        return (0, r.p)([$.histories.getHistoryMessage(e, d), $.ctx.comment.getThreads().getHistoryMessage(e, d)]).pipe((0, f.n)(u => {
                            var g;
                            let [v, m] = u, M = v || m;
                            if (!M) return (0, n.of)(void 0);
                            let T = $.ctx.auth.user.id,
                                b = null == (g = (0, _.GV)(M.reactions, T)) ? void 0 : g.code,
                                k = [e, a].filter(Boolean),
                                S = [$.histories, $.ctx.comment.getThreads()],
                                y = k.flatMap(e => S.map(s => s.setLocalReactions(e, t, $.ctx.auth.user.id, i, b).pipe((0, h.M)(t => {
                                    t.length > 0 && $.nextUpdateMessagesEvent(e, t)
                                })))),
                                D = o ? {
                                    save: () => $.ctx.pendingOperations.addPendingReaction(e, t, s, i),
                                    remove: () => $.ctx.pendingOperations.removePending(l)
                                } : void 0;
                            return (0, r.p)(y).pipe((0, f.n)(() => $.changeReaction(e, t, s, i, b, D)), (0, h.M)(e => {
                                let t = e[e.length - 1];
                                k.forEach(e => {
                                    S.forEach(s => {
                                        s.getHistoryMessage(e, d).pipe((0, f.n)(i => {
                                            if (!i) return (0, n.of)(void 0);
                                            let a = i.reactions.find(e => e.code === U.Cr.View);
                                            i.reactions = a ? [...t.reactions, a] : t.reactions;
                                            let r = {
                                                rid: i.rid,
                                                reactions: i.reactions
                                            };
                                            return s.updateHistoryMessage(e, i).pipe((0, h.M)(() => {
                                                $.nextUpdateMessagesEvent(e, [r])
                                            }))
                                        }), (0, p.W)(e => ($.logger.error("setReaction: update history", e), (0, n.of)(void 0)))).subscribe()
                                    })
                                })
                            }), (0, c.T)(e => e[e.length - 1]))
                        }))
                    }), (0, i._)(this, "changeReaction", (e, t, s, i, n, a) => {
                        let o = (0, l.T)(() => !!n && n === i, (0, r.p)(t.map(t => this.removeReaction(e, n, t, s))), (0, r.p)(t.map(t => this.addReaction(e, i, t, s)))).pipe((0, f.n)(e => this.ctx.users.loadUsers(e.map(e => e.reactions.map(e => e.users)).flat(2).map(e => (0, N.j)(e))).pipe((0, v.u)(e))));
                        return a ? a.save().pipe((0, f.n)(() => o), (0, f.n)(e => a.remove().pipe((0, c.T)(() => e)))) : o
                    }), (0, i._)(this, "addReaction", (e, t, s, i) => this.api.addReaction((0, I.F8)(e), t, s, i)), (0, i._)(this, "removeReaction", (e, t, s, i) => this.api.removeReaction((0, I.F8)(e), t, s, i)), (0, i._)(this, "sendMessages", (e, t, s) => {
                        let i = {
                            id: e,
                            type: D.RK.PEERTYPE_GROUP
                        };
                        return (0, g.H)(Array.from({
                            length: s
                        }).map((e, s) => s + t)).pipe((0, b.H)(e => this.api.sendMessage((0, I.F8)(i), (0, E.YQ)(i, D.m4.EXPEERTYPE_GROUP), (0, x.$C)(), {
                            textMessage: {
                                text: e.toString(),
                                ext: void 0,
                                mentions: []
                            }
                        })))
                    }), (0, i._)(this, "sendMultiMediaMessage", (e, t, s, i) => {
                        let n = (0, _.er)(t[t.length - 1]),
                            a = t.map(e => {
                                var t;
                                return (0, _.VX)(e.rid, null == (t = e.message) ? void 0 : t.documentMessage)
                            }),
                            r = t.map(e => e.rid);
                        return this.api.sendMultiMediaMessaege(e, a, i, n).pipe((0, f.n)(e => this.deletePendingMessagesFromDB(s, r).pipe((0, c.T)(() => e))), this.addMessageSentEvent([...r, i], s), (0, p.W)(e => (this.logger.error("sendMultiMediaMessage failed", e), this.updateMessagesOnDeletePendingMessage(s, r))))
                    }), (0, i._)(this, "forwardMessages", (e, t, s, i) => {
                        let n = s.map(e => (0, _.er)(e)),
                            a = s.map(e => e.rid),
                            r = (0, E.YQ)(e, t);
                        return this.api.forwardMessages(r, a, n, i).pipe((0, f.n)(t => this.deletePendingMessagesFromDB(e, a).pipe((0, c.T)(() => t))), (0, p.W)(t => (this.logger.error("ForwardMessages failed", t), this.deletePendingMessagesFromDB(e, a).pipe((0, c.T)(() => {
                            throw t
                        })))))
                    }), (0, i._)(this, "getDiscussionMessage", (e, t) => {
                        let s = (0, E.K2)(e);
                        return this.api.getDiscussionMessage(e, t).pipe((0, f.n)(i => {
                            let {
                                discussionMessage: r
                            } = i;
                            return this.updateHasComment(s, t.rid, r), (0, d.h)((0, l.T)(() => (null == r ? void 0 : r.senderUid) != void 0, this.ctx.users.loadUser(r.senderUid).pipe((0, p.W)(() => (this.logger.info("failed to load discussion message sender info"), a.w))), a.w).pipe((0, m.Z)(() => a.w)), this.ctx.groups.loadGroup(e.id).pipe((0, f.n)(e => {
                                let i = e.linkedGroupPeerId,
                                    a = i ? (0, B.Yt)(i, D.RK.PEERTYPE_GROUP) : void 0;
                                return r && a ? this.mapApiDiscussionMessageToDiscussionMessage(s, r).pipe((0, f.n)(e => this.initThreadHistory(a, {
                                    messageId: t,
                                    threadType: U.bF.COMMENT
                                }, e).pipe((0, c.T)(() => ({
                                    discussionMessage: e
                                }))))) : a ? this.ctx.comment.getThreads().hasPeerHistory(a).pipe((0, f.n)(e => e ? this.ctx.comment.getThreads().deletePeerHistory(s).pipe((0, c.T)(() => ({
                                    discussionMessage: void 0
                                }))) : (0, n.of)({
                                    discussionMessage: void 0
                                }))) : (0, n.of)({
                                    discussionMessage: void 0
                                })
                            })))
                        }), (0, p.W)(e => {
                            throw this.updateHasComment(s, t.rid, void 0), e
                        }))
                    }), (0, i._)(this, "updateHasComment", (e, t, s) => {
                        this.histories.getHistoryMessage(e, t).pipe((0, f.n)(t => t ? (t.hasComment = void 0 != s, this.histories.updateHistoryMessage(e, t).pipe((0, h.M)(() => {
                            this.nextUpdateMessagesEvent(e, [{
                                rid: t.rid,
                                hasComment: t.hasComment
                            }])
                        }))) : (0, n.of)(void 0))).subscribe()
                    }), (0, i._)(this, "initThreadHistory", (e, t, s) => this.loadReplies(e, t, s.date, S.iP.LISTLOADMODE_FORWARD, this.LOAD_HISTORY_SIZE).pipe((0, c.T)(e => e.reverse()), (0, f.n)(t => (0, r.p)([this.ctx.comment.getThreads().deletePeerHistory(e), this.ctx.comment.getThreads().initHistoryWithMessages(e, [s, ...t], this.LOAD_HISTORY_SIZE)]).pipe((0, c.T)(() => t))))), (0, i._)(this, "getHistoryMessage", (e, t) => this.histories.getHistoryMessage(e, t)), (0, i._)(this, "getLastMessage", e => this.histories.getLastMessage(e)), (0, i._)(this, "updateMessageThreadReadInfo", (e, t, s) => this.histories.updateMessageThreadReadInfo(e, t, s)), (0, i._)(this, "clear", () => {
                        this.peerPinMessages.clear(), this.histories.clear().subscribe({
                            error: e => this.logger.error("histories.clear", e)
                        })
                    }), (0, i._)(this, "invokeCustomAction", e => this.api.invokeCustomAction(e)), (0, i._)(this, "fetchProtectedContent", (e, t, s) => this.api.fetchProtectedContent(e, t, s)), (0, i._)(this, "startStream", (e, t, s) => {
                        this.streamedMessage.startStream(e, t, s)
                    }), (0, i._)(this, "downloadExtendedTextForMessages", (e, t) => {
                        let s = [];
                        return e.forEach(e => {
                            var i, n, r, o, d, l, u, c, v, m, M, T;
                            let b = (null == (i = e.message) ? void 0 : i.longTextMessage) ?? (null == (o = e.message) || null == (r = o.streamedMessage) || null == (n = r.message) ? void 0 : n.longTextMessage) ?? (null == (u = e.message) || null == (l = u.templateMessage) || null == (d = l.generalMessage) ? void 0 : d.longTextMessage) ?? (null == (T = e.message) || null == (M = T.templateMessage) || null == (m = M.generalMessage) || null == (v = m.streamedMessage) || null == (c = v.message) ? void 0 : c.longTextMessage);
                            if (!(null == b ? void 0 : b.extendedText)) return;
                            this.logger.info("Detected long text message with extendedText, downloading file", e.rid, b.extendedText);
                            let k = this.ctx.filesModule.getFileDownloadUrl(b.extendedText).pipe((0, f.n)(t => (this.logger.info("Got download URL for extended text", e.rid, t.fileUrl), t.fileUrl) ? (0, g.H)(fetch(t.fileUrl.url).then(e => e.text())) : a.w), (0, f.n)(s => (this.logger.info("Successfully downloaded extended text", e.rid, "length:", s.length), b.text = s, this.histories.updateHistoryMessage(t, e))), (0, h.M)(() => {
                                this.nextUpdateMessagesEvent(t, [{
                                    rid: e.rid,
                                    message: e.message
                                }])
                            }), (0, p.W)(t => (this.logger.error("Failed to download extended text", e.rid, t), a.w)));
                            s.push(k)
                        }), s.length > 0 ? (0, r.p)(s).pipe((0, c.T)(() => void 0)) : (0, n.of)(void 0)
                    }), (0, i._)(this, "createTopic", (e, t) => this.api.createTopic(e, t)), (0, i._)(this, "getTopics", (e, t, s) => this.api.getTopics(e, t, s)), (0, i._)(this, "editTopic", (e, t, s) => this.api.editTopic(e, t, s)), (0, i._)(this, "deleteTopic", (e, t) => this.api.deleteTopic(e, t)), this.api = e, this.ctx = t, this.messagingUpdatesHandler = s, this.histories = R, this.isReactNative = V, this.pendingMessagesStore = k.getKeyValue(C.F8.PendingMessages), this.LOAD_HISTORY_SIZE = V ? 20 : Z, this.streamedMessage = new z(e, t, R)
                }
            }
        },
        62424: function(e, t, s) {
            var i, n;
            s.d(t, {
                F: () => i
            }), (n = i || (i = {})).Read = "read", n.Reaction = "reaction"
        }
    }
]);
//# sourceMappingURL=8607.02549372.js.map