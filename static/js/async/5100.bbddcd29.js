try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            i = (new e.Error).stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "57483cba-7364-4349-a09d-7c197949b536", e._sentryDebugIdIdentifier = "sentry-dbid-57483cba-7364-4349-a09d-7c197949b536")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5100"], {
        78220: function(e, i, n) {
            n.d(i, {
                T7: () => v,
                Ut: () => S,
                qF: () => V,
                xz: () => P,
                zl: () => T
            });
            var t = n(51116),
                o = n(86654),
                r = n(76421),
                s = n(55935),
                d = n(87728);
            let a = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), "" !== e.code && i.uint32(26).string(e.code), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                code: "",
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.code = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.date = z(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), 0 !== e.date && i.uint32(24).int64(e.date), "" !== e.code && i.uint32(34).string(e.code), 0 !== e.page && i.uint32(40).int32(e.page), 0 !== e.limit && i.uint32(48).int32(e.limit), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                date: 0,
                                code: "",
                                page: 0,
                                limit: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.date = z(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.code = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.page = n.int32();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    r.limit = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.userId && i.uint32(8).int32(e.userId), "" !== e.code && i.uint32(18).string(e.code), 0 !== e.reactionTime && i.uint32(24).int64(e.reactionTime), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userId: 0,
                                code: "",
                                reactionTime: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.userId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.code = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.reactionTime = z(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.userReactions) u.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userReactions: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.userReactions.push(u.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), "" !== e.code && i.uint32(26).string(e.code), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                code: "",
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.code = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.date = z(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.seq && i.uint32(8).int32(e.seq), e.reactions)) r.rYP.encode(n, i.uint32(18).fork()).join();
                        return 0 !== e.state.length && i.uint32(26).bytes(e.state), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                seq: 0,
                                reactions: [],
                                state: new Uint8Array(0)
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.seq = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.reactions.push(r.rYP.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.state = n.bytes();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && d.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), e.reactions)) r.rYP.encode(n, i.uint32(26).fork()).join();
                        return !1 !== e.reactionByMe && i.uint32(32).bool(e.reactionByMe), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                rid: "0",
                                reactions: [],
                                reactionByMe: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.reactions.push(r.rYP.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.reactionByMe = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), e.mids)) r.vzI.encode(n, i.uint32(18).fork()).join();
                        return !1 !== e.ignoreCountViews && i.uint32(24).bool(e.ignoreCountViews), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                mids: [],
                                ignoreCountViews: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.mids.push(r.vzI.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.ignoreCountViews = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.containers) r.r3o.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                containers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.containers.push(r.r3o.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), e.mids)) r.vzI.encode(n, i.uint32(18).fork()).join();
                        for (let n of (void 0 !== e.originPeer && d.L0.encode(e.originPeer, i.uint32(26).fork()).join(), e.originMids)) r.vzI.encode(n, i.uint32(34).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                mids: [],
                                originPeer: void 0,
                                originMids: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.mids.push(r.vzI.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.originPeer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.originMids.push(r.vzI.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.containers) r.r3o.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                containers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.containers.push(r.r3o.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && d.L0.encode(e.peer, i.uint32(10).fork()).join(), e.mids)) r.vzI.encode(n, i.uint32(18).fork()).join();
                        for (let n of (!1 !== e.increment && i.uint32(24).bool(e.increment), e.correctMids)) r.vzI.encode(n, i.uint32(34).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                mids: [],
                                increment: !1,
                                correctMids: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.mids.push(r.vzI.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.increment = n.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.correctMids.push(r.vzI.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.containers) r.THn.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                containers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.containers.push(r.THn.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.userId && i.uint32(8).int32(e.userId), !1 !== e.isEnable && i.uint32(16).bool(e.isEnable), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userId: 0,
                                isEnable: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.userId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isEnable = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && d.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), 0 !== e.date && i.uint32(32).int64(e.date), e.reactions)) r.rYP.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                rid: "0",
                                date: 0,
                                reactions: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.rid = n.int64().toString();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.date = z(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.reactions.push(r.rYP.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && d.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                exPeer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.exPeer = d.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && d.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                exPeer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.exPeer = d.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && d.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = d.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                };
            class P {
                LoadReactions(e, i) {
                    return this.rpc.unary(E, e, i)
                }
                MessageSetReaction(e, i) {
                    return this.rpc.unary(R, e, i)
                }
                MessageRemoveReaction(e, i) {
                    return this.rpc.unary(O, e, i)
                }
                GetMessagesReactions(e, i) {
                    return this.rpc.unary(N, e, i)
                }
                GetMessageReactionsList(e, i) {
                    return this.rpc.unary(U, e, i)
                }
                GetMessagesViews(e, i) {
                    return this.rpc.unary(q, e, i)
                }
                EnableShowReactionFlag(e, i) {
                    return this.rpc.unary(B, e, i)
                }
                GetShowReactionFlag(e, i) {
                    return this.rpc.unary(A, e, i)
                }
                MessageReactionsRead(e, i) {
                    return this.rpc.unary(D, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.LoadReactions = this.LoadReactions.bind(this), this.MessageSetReaction = this.MessageSetReaction.bind(this), this.MessageRemoveReaction = this.MessageRemoveReaction.bind(this), this.GetMessagesReactions = this.GetMessagesReactions.bind(this), this.GetMessageReactionsList = this.GetMessageReactionsList.bind(this), this.GetMessagesViews = this.GetMessagesViews.bind(this), this.EnableShowReactionFlag = this.EnableShowReactionFlag.bind(this), this.GetShowReactionFlag = this.GetShowReactionFlag.bind(this), this.MessageReactionsRead = this.MessageReactionsRead.bind(this)
                }
            }
            let M = {
                    serviceName: "bale.abacus.v1.Abacus"
                },
                E = {
                    methodName: "LoadReactions",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                R = {
                    methodName: "MessageSetReaction",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return a.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                O = {
                    methodName: "MessageRemoveReaction",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                N = {
                    methodName: "GetMessagesReactions",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = b.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                U = {
                    methodName: "GetMessageReactionsList",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return c.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = l.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                q = {
                    methodName: "GetMessagesViews",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return m.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = I.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                B = {
                    methodName: "EnableShowReactionFlag",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return w.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = s.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                A = {
                    methodName: "GetShowReactionFlag",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = C.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                D = {
                    methodName: "MessageReactionsRead",
                    service: M,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return j.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = s.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function z(e) {
                return globalThis.Number(e.toString())
            }
        },
        81665: function(e, i, n) {
            n.d(i, {
                Ck: () => g,
                Jv: () => z,
                WB: () => J,
                d4: () => O,
                ux: () => G
            });
            var t, o, r = n(51116),
                s = n(86654),
                d = n(48685),
                a = n(26016),
                c = n(68647),
                u = n(76421),
                l = n(55935),
                f = n(87728);
            (t = o || (o = {}))[t.CARDSTATEMENT = 0] = "CARDSTATEMENT", t[t.LOANPAYMENT = 1] = "LOANPAYMENT";
            let p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.peerUserId && c.as.encode({
                            value: e.peerUserId
                        }, i.uint32(10).fork()).join(), void 0 !== e.msgRid && a.j1.encode(e.msgRid, i.uint32(18).fork()).join(), void 0 !== e.description && c.hU.encode({
                            value: e.description
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peerUserId: void 0,
                                msgRid: void 0,
                                description: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peerUserId = c.as.decode(n, n.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.msgRid = a.j1.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.description = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.requestEndPoint && i.uint32(10).string(e.requestEndPoint), "" !== e.token && i.uint32(18).string(e.token), void 0 !== e.destCardNo && c.hU.encode({
                            value: e.destCardNo
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                requestEndPoint: "",
                                token: "",
                                destCardNo: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.requestEndPoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.destCardNo = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.messagePeer && f.xM.encode(e.messagePeer, i.uint32(10).fork()).join(), "0" !== e.msgRid && i.uint32(16).int64(e.msgRid), 0 !== e.msgDate && i.uint32(24).int64(e.msgDate), 0 !== e.recipient && i.uint32(32).int32(e.recipient), void 0 !== e.description && c.hU.encode({
                            value: e.description
                        }, i.uint32(42).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                messagePeer: void 0,
                                msgRid: "0",
                                msgDate: 0,
                                recipient: 0,
                                description: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.messagePeer = f.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.msgRid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.msgDate = ek(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.recipient = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.description = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.requestEndPoint && i.uint32(10).string(e.requestEndPoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                requestEndPoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.requestEndPoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };

            function g() {
                return {
                    cardNumberStartingSix: ""
                }
            }
            let b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.cardNumberStartingSix && i.uint32(10).string(e.cardNumberStartingSix), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = g();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.cardNumberStartingSix = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.requestEndPoint && i.uint32(10).string(e.requestEndPoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                requestEndPoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.requestEndPoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of e.payvandCards) d.or.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                payvandCards: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.payvandCards.push(d.or.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.index && i.uint32(10).string(e.index), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                index: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.index = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.card && i.uint32(10).string(e.card), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                card: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.card = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.endpoint && i.uint32(10).string(e.endpoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                endpoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "0" !== e.paymentAmount && i.uint32(8).int64(e.paymentAmount), void 0 !== e.msg && u.J2R.encode(e.msg, i.uint32(18).fork()).join(), void 0 !== e.description && c.hU.encode({
                            value: e.description
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                paymentAmount: "0",
                                msg: void 0,
                                description: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.paymentAmount = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.msg = u.J2R.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.description = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.endpoint && i.uint32(10).string(e.endpoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                endpoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                P = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.msg && u.J2R.encode(e.msg, i.uint32(10).fork()).join(), "0" !== e.paymentAmount && i.uint32(16).int64(e.paymentAmount), void 0 !== e.description && c.hU.encode({
                            value: e.description
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                msg: void 0,
                                paymentAmount: "0",
                                description: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.msg = u.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.paymentAmount = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.description = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                M = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.endpoint && i.uint32(10).string(e.endpoint), "" !== e.token && i.uint32(18).string(e.token), "" !== e.terminalId && i.uint32(26).string(e.terminalId), "" !== e.merchantCode && i.uint32(34).string(e.merchantCode), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                endpoint: "",
                                token: "",
                                terminalId: "",
                                merchantCode: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.terminalId = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.merchantCode = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                E = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.cardNumberStartingSix && i.uint32(10).string(e.cardNumberStartingSix), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                cardNumberStartingSix: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.cardNumberStartingSix = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                R = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.requestEndPoint && i.uint32(10).string(e.requestEndPoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                requestEndPoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.requestEndPoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };

            function O() {
                return {
                    messagePeer: void 0,
                    msgRid: "0",
                    msgDate: 0,
                    peerUserId: void 0,
                    cardNumberStartingSix: ""
                }
            }
            let N = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.messagePeer && f.xM.encode(e.messagePeer, i.uint32(10).fork()).join(), "0" !== e.msgRid && i.uint32(16).int64(e.msgRid), 0 !== e.msgDate && i.uint32(24).int64(e.msgDate), void 0 !== e.peerUserId && c.as.encode({
                            value: e.peerUserId
                        }, i.uint32(34).fork()).join(), "" !== e.cardNumberStartingSix && i.uint32(42).string(e.cardNumberStartingSix), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = O();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.messagePeer = f.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.msgRid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.msgDate = ek(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.peerUserId = c.as.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.cardNumberStartingSix = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                U = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.requestEndPoint && i.uint32(10).string(e.requestEndPoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                requestEndPoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.requestEndPoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.organizationId && i.uint32(10).string(e.organizationId), "" !== e.invoiceId && i.uint32(18).string(e.invoiceId), 0 !== e.amount && i.uint32(24).int64(e.amount), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                organizationId: "",
                                invoiceId: "",
                                amount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.organizationId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.invoiceId = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.amount = ek(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                B = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.billHolderName && i.uint32(18).string(e.billHolderName), 0 !== e.amount && i.uint32(25).double(e.amount), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                billHolderName: "",
                                amount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.billHolderName = n.string();
                                    continue;
                                case 3:
                                    if (25 !== e) break;
                                    o.amount = n.double();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                A = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.msg && u.J2R.encode(e.msg, i.uint32(10).fork()).join(), void 0 !== e.description && c.hU.encode({
                            value: e.description
                        }, i.uint32(18).fork()).join(), void 0 !== e.amount && c.as.encode({
                            value: e.amount
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                msg: void 0,
                                description: void 0,
                                amount: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.msg = u.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.description = c.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.amount = c.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                D = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.endpoint && i.uint32(18).string(e.endpoint), void 0 !== e.terminalId && c.hU.encode({
                            value: e.terminalId
                        }, i.uint32(26).fork()).join(), void 0 !== e.cardAcqId && c.hU.encode({
                            value: e.cardAcqId
                        }, i.uint32(34).fork()).join(), void 0 !== e.orderId && a.j1.encode(e.orderId, i.uint32(42).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                endpoint: "",
                                terminalId: void 0,
                                cardAcqId: void 0,
                                orderId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.terminalId = c.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.cardAcqId = c.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.orderId = a.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.bot && f.xM.encode(e.bot, i.uint32(10).fork()).join(), void 0 !== e.service && d.qC.encode(e.service, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                bot: void 0,
                                service: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.bot = f.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.service = d.qC.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                G = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.bot && f.xM.encode(e.bot, i.uint32(10).fork()).join(), void 0 !== e.service && d.qC.encode(e.service, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                bot: void 0,
                                service: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.bot = f.xM.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.service = d.qC.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                x = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                L = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of e.recentCharges) d.UQ.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                recentCharges: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.recentCharges.push(d.UQ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                _ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.amount && i.uint32(8).int64(e.amount), void 0 !== e.phoneNumber && c.hU.encode({
                            value: e.phoneNumber
                        }, i.uint32(18).fork()).join(), 0 !== e.operator && i.uint32(24).int32(e.operator), 0 !== e.chargeType && i.uint32(32).int32(e.chargeType), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                amount: 0,
                                phoneNumber: void 0,
                                operator: 0,
                                chargeType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.amount = ek(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.phoneNumber = c.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.operator = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.chargeType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                F = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.transactionDate && i.uint32(8).int64(e.transactionDate), "" !== e.refrenceNumber && i.uint32(18).string(e.refrenceNumber), void 0 !== e.pin && c.hU.encode({
                            value: e.pin
                        }, i.uint32(26).fork()).join(), void 0 !== e.serial && c.hU.encode({
                            value: e.serial
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                transactionDate: 0,
                                refrenceNumber: "",
                                pin: void 0,
                                serial: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.transactionDate = ek(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.refrenceNumber = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.pin = c.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.serial = c.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                Y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return void 0 !== e.bot && f.Uw.encode(e.bot, i.uint32(10).fork()).join(), "" !== e.serviceKey && i.uint32(18).string(e.serviceKey), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                bot: void 0,
                                serviceKey: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.bot = f.Uw.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.serviceKey = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                K = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.cardNumber && i.uint32(10).string(e.cardNumber), "" !== e.cvv2 && i.uint32(18).string(e.cvv2), "" !== e.expireDate && i.uint32(26).string(e.expireDate), "" !== e.pin2 && i.uint32(34).string(e.pin2), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                cardNumber: "",
                                cvv2: "",
                                expireDate: "",
                                pin2: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.cardNumber = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.cvv2 = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.expireDate = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.pin2 = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                H = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.currentBalanceAmount && i.uint32(10).string(e.currentBalanceAmount), "" !== e.availableBalanceAmount && i.uint32(18).string(e.availableBalanceAmount), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                currentBalanceAmount: "",
                                availableBalanceAmount: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.currentBalanceAmount = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.availableBalanceAmount = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                W = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.service && i.uint32(8).int32(e.service), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                service: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.service = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                Q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return "" !== e.endpoint && i.uint32(10).string(e.endpoint), "" !== e.token && i.uint32(18).string(e.token), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                endpoint: "",
                                token: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.token = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            class J {
                GetCardTransferToken(e, i) {
                    return this.rpc.unary(X, e, i)
                }
                GetPayMoneyRequestToken(e, i) {
                    return this.rpc.unary($, e, i)
                }
                GetRemainToken(e, i) {
                    return this.rpc.unary(ee, e, i)
                }
                GetPayvandCardList(e, i) {
                    return this.rpc.unary(ei, e, i)
                }
                GetPayvandCard(e, i) {
                    return this.rpc.unary(en, e, i)
                }
                GetPSProxyToken(e, i) {
                    return this.rpc.unary(et, e, i)
                }
                GetPSProxyPaymentToken(e, i) {
                    return this.rpc.unary(eo, e, i)
                }
                GetSadadPSPPaymentToken(e, i) {
                    return this.rpc.unary(er, e, i)
                }
                GetOTPToken(e, i) {
                    return this.rpc.unary(es, e, i)
                }
                GetOTPTokenV2(e, i) {
                    return this.rpc.unary(ed, e, i)
                }
                GetOrganizationPaymentToken(e, i) {
                    return this.rpc.unary(ea, e, i)
                }
                GetPaymentToken(e, i) {
                    return this.rpc.unary(ec, e, i)
                }
                GetRecentCharges(e, i) {
                    return this.rpc.unary(eu, e, i)
                }
                BuyFastCharge(e, i) {
                    return this.rpc.unary(el, e, i)
                }
                GrantBankiAccess(e, i) {
                    return this.rpc.unary(ef, e, i)
                }
                GetCardRemain(e, i) {
                    return this.rpc.unary(ep, e, i)
                }
                GetTokenInvoice(e, i) {
                    return this.rpc.unary(ev, e, i)
                }
                constructor(e) {
                    (0, r._)(this, "rpc", void 0), this.rpc = e, this.GetCardTransferToken = this.GetCardTransferToken.bind(this), this.GetPayMoneyRequestToken = this.GetPayMoneyRequestToken.bind(this), this.GetRemainToken = this.GetRemainToken.bind(this), this.GetPayvandCardList = this.GetPayvandCardList.bind(this), this.GetPayvandCard = this.GetPayvandCard.bind(this), this.GetPSProxyToken = this.GetPSProxyToken.bind(this), this.GetPSProxyPaymentToken = this.GetPSProxyPaymentToken.bind(this), this.GetSadadPSPPaymentToken = this.GetSadadPSPPaymentToken.bind(this), this.GetOTPToken = this.GetOTPToken.bind(this), this.GetOTPTokenV2 = this.GetOTPTokenV2.bind(this), this.GetOrganizationPaymentToken = this.GetOrganizationPaymentToken.bind(this), this.GetPaymentToken = this.GetPaymentToken.bind(this), this.GetRecentCharges = this.GetRecentCharges.bind(this), this.BuyFastCharge = this.BuyFastCharge.bind(this), this.GrantBankiAccess = this.GrantBankiAccess.bind(this), this.GetCardRemain = this.GetCardRemain.bind(this), this.GetTokenInvoice = this.GetTokenInvoice.bind(this)
                }
            }
            let Z = {
                    serviceName: "bale.bank.v1.Bank"
                },
                X = {
                    methodName: "GetCardTransferToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return p.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = v.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                $ = {
                    methodName: "GetPayMoneyRequestToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ee = {
                    methodName: "GetRemainToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return b.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = m.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ei = {
                    methodName: "GetPayvandCardList",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return I.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = w.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                en = {
                    methodName: "GetPayvandCard",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = C.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                et = {
                    methodName: "GetPSProxyToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = S.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eo = {
                    methodName: "GetPSProxyPaymentToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return V.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = j.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                er = {
                    methodName: "GetSadadPSPPaymentToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return P.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = M.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                es = {
                    methodName: "GetOTPToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return E.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = R.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ed = {
                    methodName: "GetOTPTokenV2",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return N.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = U.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ea = {
                    methodName: "GetOrganizationPaymentToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return q.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = B.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ec = {
                    methodName: "GetPaymentToken",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return A.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = D.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eu = {
                    methodName: "GetRecentCharges",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return x.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = L.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                el = {
                    methodName: "BuyFastCharge",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return _.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = F.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ef = {
                    methodName: "GrantBankiAccess",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return Y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = l.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ep = {
                    methodName: "GetCardRemain",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return K.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = H.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ev = {
                    methodName: "GetTokenInvoice",
                    service: Z,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return W.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = Q.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function ek(e) {
                return globalThis.Number(e.toString())
            }
        },
        48685: function(e, i, n) {
            n.d(i, {
                UQ: () => b,
                W3: () => g,
                or: () => m,
                qC: () => h
            });
            var t, o, r, s, d, a, c, u, l, f, p = n(86654),
                v = n(68647),
                k = n(87728);
            (t = a || (a = {}))[t.SERVICEOPERATOR_UNKNOWN = 0] = "SERVICEOPERATOR_UNKNOWN", t[t.SERVICEOPERATOR_MCI = 1] = "SERVICEOPERATOR_MCI", t[t.SERVICEOPERATOR_IRANCELL = 2] = "SERVICEOPERATOR_IRANCELL", t[t.SERVICEOPERATOR_RIGHTEL = 3] = "SERVICEOPERATOR_RIGHTEL", (o = c || (c = {}))[o.CHARGETYPE_UNKNOWN = 0] = "CHARGETYPE_UNKNOWN", o[o.CHARGETYPE_TOPUP = 1] = "CHARGETYPE_TOPUP", o[o.CHARGETYPE_VOUCHER = 2] = "CHARGETYPE_VOUCHER", o[o.CHARGETYPE_WOW = 3] = "CHARGETYPE_WOW", (r = u || (u = {}))[r.MONEYREQUESTDETAILRESPONSETYPE_MINE = 0] = "MONEYREQUESTDETAILRESPONSETYPE_MINE", r[r.MONEYREQUESTDETAILRESPONSETYPE_OTHERS = 1] = "MONEYREQUESTDETAILRESPONSETYPE_OTHERS", (s = l || (l = {}))[s.REACTIONTYPE_PAYMENT_UNKNOWN = 0] = "REACTIONTYPE_PAYMENT_UNKNOWN", s[s.REACTIONTYPE_PAYMENT_COUNT = 1] = "REACTIONTYPE_PAYMENT_COUNT", s[s.REACTIONTYPE_PAYMENT_AMOUNT = 2] = "REACTIONTYPE_PAYMENT_AMOUNT", (d = f || (f = {}))[d.BAMSERVICETYPE_CARD_STATEMENT = 0] = "BAMSERVICETYPE_CARD_STATEMENT", d[d.BAMSERVICETYPE_LOAN_PAYMENT = 1] = "BAMSERVICETYPE_LOAN_PAYMENT";
            let h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.serviceKey && i.uint32(10).string(e.serviceKey), "" !== e.serviceFaName && i.uint32(18).string(e.serviceFaName), "" !== e.serviceEnName && i.uint32(26).string(e.serviceEnName), i
                    },
                    decode(e, i) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                serviceKey: "",
                                serviceFaName: "",
                                serviceEnName: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.serviceKey = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.serviceFaName = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.serviceEnName = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "0" !== e.id && i.uint32(8).int64(e.id), void 0 !== e.receiptPeer && k.xM.encode(e.receiptPeer, i.uint32(18).fork()).join(), "0" !== e.receiptRandomId && i.uint32(24).int64(e.receiptRandomId), 0 !== e.receiptDate && i.uint32(32).int64(e.receiptDate), "0" !== e.traceNumber && i.uint32(40).int64(e.traceNumber), "0" !== e.amount && i.uint32(48).int64(e.amount), 0 !== e.date && i.uint32(56).int64(e.date), 0 !== e.payerUserId && i.uint32(64).int32(e.payerUserId), i
                    },
                    decode(e, i) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                id: "0",
                                receiptPeer: void 0,
                                receiptRandomId: "0",
                                receiptDate: 0,
                                traceNumber: "0",
                                amount: "0",
                                date: 0,
                                payerUserId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.receiptPeer = k.xM.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.receiptRandomId = n.int64().toString();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.receiptDate = I(n.int64());
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.traceNumber = n.int64().toString();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.amount = n.int64().toString();
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    o.date = I(n.int64());
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.payerUserId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "0" !== e.amount && i.uint32(8).int64(e.amount), void 0 !== e.phoneNo && v.hU.encode({
                            value: e.phoneNo
                        }, i.uint32(18).fork()).join(), 0 !== e.operator && i.uint32(24).int32(e.operator), 0 !== e.chargeType && i.uint32(32).int32(e.chargeType), i
                    },
                    decode(e, i) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                amount: "0",
                                phoneNo: void 0,
                                operator: 0,
                                chargeType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.amount = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.phoneNo = v.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.operator = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.chargeType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.index && i.uint32(10).string(e.index), "" !== e.bankCode && i.uint32(18).string(e.bankCode), "" !== e.last4Digit && i.uint32(26).string(e.last4Digit), i
                    },
                    decode(e, i) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                index: "",
                                bankCode: "",
                                last4Digit: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.index = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.bankCode = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.last4Digit = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };

            function I(e) {
                return globalThis.Number(e.toString())
            }
        },
        34981: function(e, i, n) {
            n.d(i, {
                BU: () => I,
                MK: () => j,
                Sy: () => b,
                mC: () => m,
                sf: () => v
            });
            var t = n(51116),
                o = n(86654),
                r = n(26016),
                s = n(12314),
                d = n(87321),
                a = n(55935);
            let c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.gif && s.KC.encode(e.gif, i.uint32(10).fork()).join(), 0 !== e.thumb.length && i.uint32(18).bytes(e.thumb), void 0 !== e.mimeType && r.hU.encode(e.mimeType, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            d = {
                                gif: void 0,
                                thumb: new Uint8Array(0),
                                mimeType: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    d.gif = s.KC.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    d.thumb = n.bytes();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.mimeType = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.gif && s.KC.encode(e.gif, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                gif: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.gif = s.KC.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.gif && s.KC.encode(e.gif, i.uint32(10).fork()).join(), 0 !== e.usedAt && i.uint32(16).int64(e.usedAt), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                gif: void 0,
                                usedAt: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.gif = s.KC.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.usedAt = globalThis.Number(n.int64().toString());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.offset && r.hU.encode(e.offset, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                offset: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.offset = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.gifs) d.IR.encode(n, i.uint32(10).fork()).join();
                        return void 0 !== e.offset && r.hU.encode(e.offset, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                gifs: [],
                                offset: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.gifs.push(d.IR.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.offset = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.collections) d.Om.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.seq && i.uint32(16).int32(e.seq), 0 !== e.state.length && i.uint32(26).bytes(e.state), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                collections: [],
                                seq: 0,
                                state: new Uint8Array(0)
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.collections.push(d.Om.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.seq = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.state = n.bytes();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.offset && r.hU.encode(e.offset, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                offset: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.offset = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.ownStickers) d.Om.encode(n, i.uint32(10).fork()).join();
                        return void 0 !== e.offset && r.hU.encode(e.offset, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                ownStickers: [],
                                offset: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.ownStickers.push(d.Om.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.offset = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.collections) d.Om.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                collections: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.collections.push(d.Om.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.collections) d.Om.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                collections: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.collections.push(d.Om.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), "0" !== e.accessHash && i.uint32(16).int64(e.accessHash), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0,
                                accessHash: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.accessHash = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), "0" !== e.accessHash && i.uint32(16).int64(e.accessHash), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0,
                                accessHash: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.accessHash = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), "0" !== e.accessHash && i.uint32(16).int64(e.accessHash), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0,
                                accessHash: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.accessHash = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.collection && d.Om.encode(e.collection, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                collection: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.collection = d.Om.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            class j {
                AddGif(e, i) {
                    return this.rpc.unary(M, e, i)
                }
                RemoveGif(e, i) {
                    return this.rpc.unary(E, e, i)
                }
                GetSavedGifs(e, i) {
                    return this.rpc.unary(R, e, i)
                }
                UseGif(e, i) {
                    return this.rpc.unary(O, e, i)
                }
                LoadOwnStickers(e, i) {
                    return this.rpc.unary(N, e, i)
                }
                AddStickerCollection(e, i) {
                    return this.rpc.unary(U, e, i)
                }
                RemoveStickerCollection(e, i) {
                    return this.rpc.unary(q, e, i)
                }
                LoadStickerCollection(e, i) {
                    return this.rpc.unary(B, e, i)
                }
                AddStickerPack(e, i) {
                    return this.rpc.unary(A, e, i)
                }
                RemoveStickerPack(e, i) {
                    return this.rpc.unary(D, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.AddGif = this.AddGif.bind(this), this.RemoveGif = this.RemoveGif.bind(this), this.GetSavedGifs = this.GetSavedGifs.bind(this), this.UseGif = this.UseGif.bind(this), this.LoadOwnStickers = this.LoadOwnStickers.bind(this), this.AddStickerCollection = this.AddStickerCollection.bind(this), this.RemoveStickerCollection = this.RemoveStickerCollection.bind(this), this.LoadStickerCollection = this.LoadStickerCollection.bind(this), this.AddStickerPack = this.AddStickerPack.bind(this), this.RemoveStickerPack = this.RemoveStickerPack.bind(this)
                }
            }
            let P = {
                    serviceName: "bale.v1.Images"
                },
                M = {
                    methodName: "AddGif",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return c.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = a.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                E = {
                    methodName: "RemoveGif",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return u.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = a.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                R = {
                    methodName: "GetSavedGifs",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                O = {
                    methodName: "UseGif",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return l.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = a.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                N = {
                    methodName: "LoadOwnStickers",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return h.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = g.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                U = {
                    methodName: "AddStickerCollection",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return w.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = k.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                q = {
                    methodName: "RemoveStickerCollection",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = k.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                B = {
                    methodName: "LoadStickerCollection",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return C.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = T.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                A = {
                    methodName: "AddStickerPack",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return S.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = a.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                D = {
                    methodName: "RemoveStickerPack",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return V.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = a.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                }
        },
        87321: function(e, i, n) {
            n.d(i, {
                IR: () => s,
                Om: () => u,
                Zt: () => c
            });
            var t = n(86654),
                o = n(12314),
                r = n(68647);
            let s = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new t.fI;
                        return void 0 !== e.gifLocation && o.KC.encode(e.gifLocation, i.uint32(10).fork()).join(), 0 !== e.width && i.uint32(16).int32(e.width), 0 !== e.height && i.uint32(24).int32(e.height), "0" !== e.fileSize && i.uint32(32).int64(e.fileSize), 0 !== e.duration && i.uint32(40).int32(e.duration), 0 !== e.usedAt && i.uint32(48).int64(e.usedAt), 0 !== e.thumb.length && i.uint32(58).bytes(e.thumb), void 0 !== e.mimeType && r.hU.encode({
                            value: e.mimeType
                        }, i.uint32(66).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof t.V5 ? e : new t.V5(e),
                            s = void 0 === i ? n.len : n.pos + i,
                            d = {
                                gifLocation: void 0,
                                width: 0,
                                height: 0,
                                fileSize: "0",
                                duration: 0,
                                usedAt: 0,
                                thumb: new Uint8Array(0),
                                mimeType: void 0
                            };
                        for (; n.pos < s;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    d.gifLocation = o.KC.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    d.width = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    d.height = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    d.fileSize = n.int64().toString();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    d.duration = n.int32();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    d.usedAt = globalThis.Number(n.int64().toString());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    d.thumb = n.bytes();
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    d.mimeType = r.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                d = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new t.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), void 0 !== e.emoji && r.hU.encode({
                            value: e.emoji
                        }, i.uint32(18).fork()).join(), void 0 !== e.image128 && o.rF.encode(e.image128, i.uint32(26).fork()).join(), void 0 !== e.image512 && o.rF.encode(e.image512, i.uint32(34).fork()).join(), void 0 !== e.image256 && o.rF.encode(e.image256, i.uint32(42).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof t.V5 ? e : new t.V5(e),
                            s = void 0 === i ? n.len : n.pos + i,
                            d = {
                                id: 0,
                                emoji: void 0,
                                image128: void 0,
                                image512: void 0,
                                image256: void 0
                            };
                        for (; n.pos < s;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    d.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    d.emoji = r.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.image128 = o.rF.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    d.image512 = o.rF.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    d.image256 = o.rF.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                a = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new t.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), void 0 !== e.emoji && r.hU.encode({
                            value: e.emoji
                        }, i.uint32(18).fork()).join(), void 0 !== e.fileLocation && o.rF.encode(e.fileLocation, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof t.V5 ? e : new t.V5(e),
                            s = void 0 === i ? n.len : n.pos + i,
                            d = {
                                id: 0,
                                emoji: void 0,
                                fileLocation: void 0
                            };
                        for (; n.pos < s;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    d.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    d.emoji = r.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.fileLocation = o.rF.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                };

            function c() {
                return {
                    id: 0,
                    accessHash: "0",
                    stickers: [],
                    animated: void 0,
                    animatedStickers: [],
                    name: void 0
                }
            }
            let u = {
                encode(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new t.fI;
                    for (let n of (0 !== e.id && i.uint32(8).int32(e.id), "0" !== e.accessHash && i.uint32(16).int64(e.accessHash), e.stickers)) d.encode(n, i.uint32(26).fork()).join();
                    for (let n of (void 0 !== e.animated && r._t.encode({
                            value: e.animated
                        }, i.uint32(34).fork()).join(), e.animatedStickers)) a.encode(n, i.uint32(42).fork()).join();
                    return void 0 !== e.name && r.hU.encode({
                        value: e.name
                    }, i.uint32(50).fork()).join(), i
                },
                decode(e, i) {
                    let n = e instanceof t.V5 ? e : new t.V5(e),
                        o = void 0 === i ? n.len : n.pos + i,
                        s = c();
                    for (; n.pos < o;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (8 !== e) break;
                                s.id = n.int32();
                                continue;
                            case 2:
                                if (16 !== e) break;
                                s.accessHash = n.int64().toString();
                                continue;
                            case 3:
                                if (26 !== e) break;
                                s.stickers.push(d.decode(n, n.uint32()));
                                continue;
                            case 4:
                                if (34 !== e) break;
                                s.animated = r._t.decode(n, n.uint32()).value;
                                continue;
                            case 5:
                                if (42 !== e) break;
                                s.animatedStickers.push(a.decode(n, n.uint32()));
                                continue;
                            case 6:
                                if (50 !== e) break;
                                s.name = r.hU.decode(n, n.uint32()).value;
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return s
                }
            }
        },
        33636: function(e, i, n) {
            n.d(i, {
                Df: () => Y,
                Dh: () => y,
                FI: () => w,
                J6: () => F,
                L$: () => ed,
                Mk: () => X,
                O5: () => el,
                Ot: () => N,
                PA: () => ej,
                PQ: () => C,
                Q8: () => ep,
                VI: () => M,
                VQ: () => G,
                Vr: () => S,
                Yn: () => V,
                aL: () => m,
                c4: () => ey,
                cN: () => _,
                hR: () => l,
                kZ: () => Z,
                m8: () => em,
                sz: () => $
            });
            var t = n(51116),
                o = n(86654),
                r = n(26016),
                s = n(88159),
                d = n(68647),
                a = n(23186),
                c = n(55935),
                u = n(87728);

            function l() {
                return {
                    peer: void 0,
                    rid: "0",
                    video: !1,
                    internalCall: void 0,
                    sipCall: void 0,
                    liveKitCall: void 0
                }
            }
            let f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), !1 !== e.video && i.uint32(24).bool(e.video), void 0 !== e.internalCall && p.encode(e.internalCall, i.uint32(34).fork()).join(), void 0 !== e.sipCall && k.encode(e.sipCall, i.uint32(42).fork()).join(), void 0 !== e.liveKitCall && v.encode(e.liveKitCall, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = l();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.video = n.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.internalCall = p.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.sipCall = k.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.liveKitCall = v.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), !1 !== e.video && i.uint32(24).bool(e.video), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                video: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.video = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), !1 !== e.video && i.uint32(24).bool(e.video), void 0 !== e.inviteEnable && r.Ci.encode(e.inviteEnable, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                rid: "0",
                                video: !1,
                                inviteEnable: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.video = n.bool();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.inviteEnable = r.Ci.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.rid && i.uint32(8).int64(e.rid), "" !== e.callerPhone && i.uint32(18).string(e.callerPhone), "" !== e.calleePhone && i.uint32(26).string(e.calleePhone), void 0 !== e.imei && d.hU.encode({
                            value: e.imei
                        }, i.uint32(34).fork()).join(), 0 !== e.lat && i.uint32(41).double(e.lat), 0 !== e.lon && i.uint32(49).double(e.lon), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                rid: "0",
                                callerPhone: "",
                                calleePhone: "",
                                imei: void 0,
                                lat: 0,
                                lon: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.callerPhone = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.calleePhone = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.imei = d.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (41 !== e) break;
                                    r.lat = n.double();
                                    continue;
                                case 6:
                                    if (49 !== e) break;
                                    r.lon = n.double();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.call && a.Je.encode(e.call, i.uint32(10).fork()).join(), e.participants)) u.L0.encode(n, i.uint32(18).fork()).join();
                        return 0 !== e.seq && i.uint32(24).int32(e.seq), void 0 !== e.sipCall && a.HS.encode(e.sipCall, i.uint32(34).fork()).join(), void 0 !== e.isStream && r.Ci.encode(e.isStream, i.uint32(42).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                call: void 0,
                                participants: [],
                                seq: 0,
                                sipCall: void 0,
                                isStream: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.call = a.Je.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.participants.push(u.L0.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.seq = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.sipCall = a.HS.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.isStream = r.Ci.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), void 0 !== e.inviteEnable && r.Ci.encode(e.inviteEnable, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                callId: "0",
                                inviteEnable: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.inviteEnable = r.Ci.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), 0 !== e.duration && i.uint32(16).int32(e.duration), 0 !== e.reason && i.uint32(24).int32(e.reason), 0 !== e.type && i.uint32(32).int32(e.type), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                duration: 0,
                                reason: 0,
                                type: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.duration = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.reason = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.type = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("0" !== e.id && i.uint32(8).int64(e.id), "" !== e.room && i.uint32(18).string(e.room), "" !== e.url && i.uint32(26).string(e.url), 0 !== e.initiator && i.uint32(32).int32(e.initiator), void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(42).fork()).join(), 0 !== e.mode && i.uint32(48).int32(e.mode), Object.entries(e.extra).forEach(e => {
                                let [n, t] = e;
                                I.encode({
                                    key: n,
                                    value: t
                                }, i.uint32(58).fork()).join()
                            }), "0" !== e.callCreateDate && i.uint32(64).int64(e.callCreateDate), "0" !== e.updateCreateDate && i.uint32(72).int64(e.updateCreateDate), e.participants)) u.AQ.encode(n, i.uint32(82).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: "0",
                                room: "",
                                url: "",
                                initiator: 0,
                                peer: void 0,
                                mode: 0,
                                extra: {},
                                callCreateDate: "0",
                                updateCreateDate: "0",
                                participants: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.room = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.url = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.initiator = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    r.mode = n.int32();
                                    continue;
                                case 7: {
                                    if (58 !== e) break;
                                    let i = I.decode(n, n.uint32());
                                    void 0 !== i.value && (r.extra[i.key] = i.value);
                                    continue
                                }
                                case 8:
                                    if (64 !== e) break;
                                    r.callCreateDate = n.int64().toString();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    r.updateCreateDate = n.int64().toString();
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    r.participants.push(u.AQ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.key && i.uint32(10).string(e.key), void 0 !== e.value && r.Ye.encode(e.value, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                key: "",
                                value: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.key = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.value = r.Ye.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.call && a.Je.encode(e.call, i.uint32(10).fork()).join(), e.participants)) u.L0.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                call: void 0,
                                participants: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.call = a.Je.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.participants.push(u.L0.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.call && a.Je.encode(e.call, i.uint32(10).fork()).join(), e.participants)) u.L0.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                call: void 0,
                                participants: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.call = a.Je.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.participants.push(u.L0.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.call && a.Je.encode(e.call, i.uint32(10).fork()).join(), e.participants)) u.L0.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                call: void 0,
                                participants: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.call = a.Je.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.participants.push(u.L0.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("0" !== e.callId && i.uint32(8).int64(e.callId), e.participants)) u.L0.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                participants: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.participants.push(u.L0.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };

            function V() {
                return {
                    pageNumber: void 0,
                    pageSize: void 0,
                    afterDate: void 0,
                    beforeDate: void 0
                }
            }
            let j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.pageNumber && r.j1.encode(e.pageNumber, i.uint32(10).fork()).join(), void 0 !== e.pageSize && r.j1.encode(e.pageSize, i.uint32(18).fork()).join(), void 0 !== e.afterDate && r.j1.encode(e.afterDate, i.uint32(26).fork()).join(), void 0 !== e.beforeDate && r.j1.encode(e.beforeDate, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = V();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.pageNumber = r.j1.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.pageSize = r.j1.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.afterDate = r.j1.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.beforeDate = r.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                P = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.pageNumber && r.j1.encode(e.pageNumber, i.uint32(10).fork()).join(), void 0 !== e.pageSize && r.j1.encode(e.pageSize, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                pageNumber: void 0,
                                pageSize: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.pageNumber = r.j1.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.pageSize = r.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                };

            function M() {
                return {
                    callIds: [],
                    all: !1,
                    invert: !1
                }
            }
            let E = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.callIds) r.j1.encode(n, i.uint32(10).fork()).join();
                        return !1 !== e.all && i.uint32(16).bool(e.all), !1 !== e.invert && i.uint32(24).bool(e.invert), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = M();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.callIds.push(r.j1.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.all = n.bool();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.invert = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                R = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.callLogs) a.zj.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.total && i.uint32(16).int32(e.total), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callLogs: [],
                                total: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.callLogs.push(a.zj.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.total = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                O = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.callLogs) a.zj.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callLogs: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.callLogs.push(a.zj.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };

            function N() {
                return {
                    peer: void 0,
                    randomId: "0",
                    video: !1,
                    mode: 0,
                    invitees: []
                }
            }
            let U = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.randomId && i.uint32(16).int64(e.randomId), !1 !== e.video && i.uint32(24).bool(e.video), 0 !== e.mode && i.uint32(32).int32(e.mode), e.invitees)) u.AQ.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = N();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.randomId = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.video = n.bool();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.mode = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.invitees.push(u.AQ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), 0 !== e.seq && i.uint32(16).int32(e.seq), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0,
                                seq: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.seq = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                B = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), void 0 !== e.name && r.hU.encode(e.name, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                callId: "0",
                                name: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.name = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                A = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), e.states)) a.KV.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0,
                                states: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.states.push(a.KV.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                D = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), !1 !== e.end && i.uint32(16).bool(e.end), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                end: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.end = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), 0 !== e.seq && i.uint32(16).int32(e.seq), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0,
                                seq: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.seq = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };

            function G() {
                return {
                    callId: "0",
                    invitees: []
                }
            }
            let x = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("0" !== e.callId && i.uint32(8).int64(e.callId), e.invitees)) u.AQ.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = G();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.invitees.push(u.AQ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                L = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peerStates) a.KV.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peerStates: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peerStates.push(a.KV.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                _ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), 0 !== e.seq && i.uint32(16).int32(e.seq), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0,
                                seq: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.seq = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                F = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.sender && u.AQ.encode(e.sender, i.uint32(10).fork()).join(), void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(18).fork()).join(), "" !== e.reaction && i.uint32(26).string(e.reaction), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                sender: void 0,
                                peer: void 0,
                                reaction: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.sender = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.reaction = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                K = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), 0 !== e.rate && i.uint32(16).int32(e.rate), void 0 !== e.userOpinion && r.hU.encode(e.userOpinion, i.uint32(26).fork()).join(), 0 !== e.client && i.uint32(32).int32(e.client), void 0 !== e.clientVersion && r.hU.encode(e.clientVersion, i.uint32(42).fork()).join(), Object.entries(e.extraFields).forEach(e => {
                            let [n, t] = e;
                            H.encode({
                                key: n,
                                value: t
                            }, i.uint32(50).fork()).join()
                        }), void 0 !== e.isStream && r.Ci.encode(e.isStream, i.uint32(58).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                callId: "0",
                                rate: 0,
                                userOpinion: void 0,
                                client: 0,
                                clientVersion: void 0,
                                extraFields: {},
                                isStream: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.rate = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.userOpinion = r.hU.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.client = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.clientVersion = r.hU.decode(n, n.uint32());
                                    continue;
                                case 6: {
                                    if (50 !== e) break;
                                    let i = H.decode(n, n.uint32());
                                    void 0 !== i.value && (s.extraFields[i.key] = i.value);
                                    continue
                                }
                                case 7:
                                    if (58 !== e) break;
                                    s.isStream = r.Ci.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                H = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.key && i.uint32(10).string(e.key), "" !== e.value && i.uint32(18).string(e.value), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                key: "",
                                value: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.key = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.value = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                W = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                J = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.reaction && i.uint32(18).string(e.reaction), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                reaction: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.reaction = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.previousMode && i.uint32(8).int32(e.previousMode), 0 !== e.currentMode && i.uint32(16).int32(e.currentMode), "0" !== e.callId && i.uint32(24).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                previousMode: 0,
                                currentMode: 0,
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.previousMode = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.currentMode = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                X = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("0" !== e.callId && i.uint32(8).int64(e.callId), e.peerStates)) a.KV.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                peerStates: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peerStates.push(a.KV.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                $ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("0" !== e.callId && i.uint32(8).int64(e.callId), "0" !== e.updateCreateDate && i.uint32(72).int64(e.updateCreateDate), e.invitees)) u.AQ.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                updateCreateDate: "0",
                                invitees: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    r.updateCreateDate = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.invitees.push(u.AQ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ee = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.identity && i.uint32(18).string(e.identity), "" !== e.trackId && i.uint32(26).string(e.trackId), !1 !== e.revokePublishPermission && i.uint32(32).bool(e.revokePublishPermission), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                identity: "",
                                trackId: "",
                                revokePublishPermission: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.identity = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.trackId = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.revokePublishPermission = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ei = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.identity && i.uint32(18).string(e.identity), !1 !== e.blockFromCall && i.uint32(24).bool(e.blockFromCall), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                identity: "",
                                blockFromCall: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.identity = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.blockFromCall = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                en = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.layout && i.uint32(18).string(e.layout), 0 !== e.quality && i.uint32(24).int32(e.quality), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                layout: "",
                                quality: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.layout = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.quality = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                et = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eo = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.requestedLayout && i.uint32(18).string(e.requestedLayout), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                requestedLayout: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.requestedLayout = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                er = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return !1 !== e.isPublic && i.uint32(8).bool(e.isPublic), void 0 !== e.callId && r.j1.encode(e.callId, i.uint32(18).fork()).join(), void 0 !== e.title && r.hU.encode(e.title, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                isPublic: !1,
                                callId: void 0,
                                title: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.isPublic = n.bool();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.callId = r.j1.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.title = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                es = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), 0 !== e.linkExpirationPeriod && i.uint32(16).int64(e.linkExpirationPeriod), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0,
                                linkExpirationPeriod: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.linkExpirationPeriod = globalThis.Number(n.int64().toString());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ed = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ea = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.session && i.uint32(10).string(e.session), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                session: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.session = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ec = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eu = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.name && i.uint32(18).string(e.name), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                name: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.name = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                el = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.requesterIdentifier && i.uint32(18).string(e.requesterIdentifier), "" !== e.name && i.uint32(26).string(e.name), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                requesterIdentifier: "",
                                name: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.requesterIdentifier = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.name = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ef = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.requesterIdentifier && i.uint32(18).string(e.requesterIdentifier), !1 !== e.isAllowed && i.uint32(24).bool(e.isAllowed), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                requesterIdentifier: "",
                                isAllowed: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.requesterIdentifier = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.isAllowed = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ep = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return !1 !== e.isAllowed && i.uint32(8).bool(e.isAllowed), "0" !== e.callId && i.uint32(16).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                isAllowed: !1,
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.isAllowed = n.bool();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ev = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.title && i.uint32(10).string(e.title), void 0 !== e.callId && r.j1.encode(e.callId, i.uint32(18).fork()).join(), void 0 !== e.linkUrl && r.hU.encode(e.linkUrl, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                title: "",
                                callId: void 0,
                                linkUrl: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.title = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.callId = r.j1.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.linkUrl = r.hU.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                ek = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eh = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.url && i.uint32(10).string(e.url), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                url: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eg = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.streamUser && u.Cu.encode(e.streamUser, i.uint32(10).fork()).join(), "" !== e.url && i.uint32(18).string(e.url), "" !== e.rtmpServer && i.uint32(26).string(e.rtmpServer), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                streamUser: void 0,
                                url: "",
                                rtmpServer: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.streamUser = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.url = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.rtmpServer = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eb = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.streamKey && i.uint32(10).string(e.streamKey), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                streamKey: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.streamKey = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                em = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), "" !== e.triggererIdentity && i.uint32(18).string(e.triggererIdentity), 0 !== e.type && i.uint32(24).int32(e.type), Object.entries(e.extraData).forEach(e => {
                            let [n, t] = e;
                            eI.encode({
                                key: n,
                                value: t
                            }, i.uint32(34).fork()).join()
                        }), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                triggererIdentity: "",
                                type: 0,
                                extraData: {}
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.triggererIdentity = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.type = n.int32();
                                    continue;
                                case 4: {
                                    if (34 !== e) break;
                                    let i = eI.decode(n, n.uint32());
                                    void 0 !== i.value && (r.extraData[i.key] = i.value);
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eI = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.key && i.uint32(10).string(e.key), "" !== e.value && i.uint32(18).string(e.value), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                key: "",
                                value: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.key = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.value = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ew = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.streamUser && u.Cu.encode(e.streamUser, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                streamUser: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.streamUser = u.Cu.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ey = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), void 0 !== e.actionTaker && u.Cu.encode(e.actionTaker, i.uint32(18).fork()).join(), void 0 !== e.action && a.Gt.encode(e.action, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                actionTaker: void 0,
                                action: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.actionTaker = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.action = a.Gt.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eC = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), void 0 !== e.lowerHand && a.rc.encode(e.lowerHand, i.uint32(18).fork()).join(), void 0 !== e.raiseHand && a.y5.encode(e.raiseHand, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0",
                                lowerHand: void 0,
                                raiseHand: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.lowerHand = a.rc.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.raiseHand = a.y5.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eT = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                eS = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.callId && i.uint32(8).int64(e.callId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                callId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.callId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eV = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.groupCall && a.eO.encode(e.groupCall, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupCall: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groupCall = a.eO.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            class ej {
                StartCall(e, i) {
                    return this.rpc.unary(eM, e, i)
                }
                AcceptCall(e, i) {
                    return this.rpc.unary(eE, e, i)
                }
                DiscardCall(e, i) {
                    return this.rpc.unary(eR, e, i)
                }
                ReceiveCall(e, i) {
                    return this.rpc.unary(eO, e, i)
                }
                GetWssURL(e, i) {
                    return this.rpc.unary(eN, e, i)
                }
                StartGroupCall(e, i) {
                    return this.rpc.unary(eU, e, i)
                }
                JoinGroupCall(e, i) {
                    return this.rpc.unary(eq, e, i)
                }
                LeaveGroupCall(e, i) {
                    return this.rpc.unary(eB, e, i)
                }
                InviteToCall(e, i) {
                    return this.rpc.unary(eA, e, i)
                }
                GetGroupCall(e, i) {
                    return this.rpc.unary(eD, e, i)
                }
                SubmitCallFeedback(e, i) {
                    return this.rpc.unary(ez, e, i)
                }
                SendCallReaction(e, i) {
                    return this.rpc.unary(eG, e, i)
                }
                GetCallLogs(e, i) {
                    return this.rpc.unary(ex, e, i)
                }
                DeleteCallLogs(e, i) {
                    return this.rpc.unary(eL, e, i)
                }
                GetOngoingCalls(e, i) {
                    return this.rpc.unary(e_, e, i)
                }
                MuteParticipant(e, i) {
                    return this.rpc.unary(eF, e, i)
                }
                RemoveParticipant(e, i) {
                    return this.rpc.unary(eY, e, i)
                }
                StartRecording(e, i) {
                    return this.rpc.unary(eK, e, i)
                }
                StopRecording(e, i) {
                    return this.rpc.unary(eH, e, i)
                }
                UpdateLayout(e, i) {
                    return this.rpc.unary(eW, e, i)
                }
                GenerateCallLink(e, i) {
                    return this.rpc.unary(eQ, e, i)
                }
                GetCallLinkDetails(e, i) {
                    return this.rpc.unary(eJ, e, i)
                }
                AskToJoinCall(e, i) {
                    return this.rpc.unary(eZ, e, i)
                }
                AnswerCallJoinRequest(e, i) {
                    return this.rpc.unary(eX, e, i)
                }
                SetLinkTitle(e, i) {
                    return this.rpc.unary(e$, e, i)
                }
                StartStream(e, i) {
                    return this.rpc.unary(e0, e, i)
                }
                DeleteStream(e, i) {
                    return this.rpc.unary(e2, e, i)
                }
                TakeCallAction(e, i) {
                    return this.rpc.unary(e3, e, i)
                }
                GetCallState(e, i) {
                    return this.rpc.unary(e1, e, i)
                }
                SendFanoosEvent(e, i) {
                    return this.rpc.unary(e4, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.StartCall = this.StartCall.bind(this), this.AcceptCall = this.AcceptCall.bind(this), this.DiscardCall = this.DiscardCall.bind(this), this.ReceiveCall = this.ReceiveCall.bind(this), this.GetWssURL = this.GetWssURL.bind(this), this.StartGroupCall = this.StartGroupCall.bind(this), this.JoinGroupCall = this.JoinGroupCall.bind(this), this.LeaveGroupCall = this.LeaveGroupCall.bind(this), this.InviteToCall = this.InviteToCall.bind(this), this.GetGroupCall = this.GetGroupCall.bind(this), this.SubmitCallFeedback = this.SubmitCallFeedback.bind(this), this.SendCallReaction = this.SendCallReaction.bind(this), this.GetCallLogs = this.GetCallLogs.bind(this), this.DeleteCallLogs = this.DeleteCallLogs.bind(this), this.GetOngoingCalls = this.GetOngoingCalls.bind(this), this.MuteParticipant = this.MuteParticipant.bind(this), this.RemoveParticipant = this.RemoveParticipant.bind(this), this.StartRecording = this.StartRecording.bind(this), this.StopRecording = this.StopRecording.bind(this), this.UpdateLayout = this.UpdateLayout.bind(this), this.GenerateCallLink = this.GenerateCallLink.bind(this), this.GetCallLinkDetails = this.GetCallLinkDetails.bind(this), this.AskToJoinCall = this.AskToJoinCall.bind(this), this.AnswerCallJoinRequest = this.AnswerCallJoinRequest.bind(this), this.SetLinkTitle = this.SetLinkTitle.bind(this), this.StartStream = this.StartStream.bind(this), this.DeleteStream = this.DeleteStream.bind(this), this.TakeCallAction = this.TakeCallAction.bind(this), this.GetCallState = this.GetCallState.bind(this), this.SendFanoosEvent = this.SendFanoosEvent.bind(this)
                }
            }
            let eP = {
                    serviceName: "bale.meet.v1.Meet"
                },
                eM = {
                    methodName: "StartCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eE = {
                    methodName: "AcceptCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eR = {
                    methodName: "DiscardCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return b.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eO = {
                    methodName: "ReceiveCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eN = {
                    methodName: "GetWssURL",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ek.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eh.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eU = {
                    methodName: "StartGroupCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return U.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = q.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eq = {
                    methodName: "JoinGroupCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return B.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = A.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eB = {
                    methodName: "LeaveGroupCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return D.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = z.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eA = {
                    methodName: "InviteToCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return x.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = L.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eD = {
                    methodName: "GetGroupCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return W.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = Q.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ez = {
                    methodName: "SubmitCallFeedback",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return K.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eG = {
                    methodName: "SendCallReaction",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return J.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ex = {
                    methodName: "GetCallLogs",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return j.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = R.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eL = {
                    methodName: "DeleteCallLogs",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return E.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e_ = {
                    methodName: "GetOngoingCalls",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return P.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = O.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eF = {
                    methodName: "MuteParticipant",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ee.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eY = {
                    methodName: "RemoveParticipant",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ei.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eK = {
                    methodName: "StartRecording",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return en.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eH = {
                    methodName: "StopRecording",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return et.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eW = {
                    methodName: "UpdateLayout",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eo.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eQ = {
                    methodName: "GenerateCallLink",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return er.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = es.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eJ = {
                    methodName: "GetCallLinkDetails",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ea.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ec.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eZ = {
                    methodName: "AskToJoinCall",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eu.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                eX = {
                    methodName: "AnswerCallJoinRequest",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ef.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e$ = {
                    methodName: "SetLinkTitle",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ev.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e0 = {
                    methodName: "StartStream",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eg.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eb.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e2 = {
                    methodName: "DeleteStream",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ew.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e3 = {
                    methodName: "TakeCallAction",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eC.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eT.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e1 = {
                    methodName: "GetCallState",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eS.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eV.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e4 = {
                    methodName: "SendFanoosEvent",
                    service: eP,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return s.U7.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                }
        },
        89304: function(e, i, n) {
            n.d(i, {
                h4: () => g,
                nb: () => h
            });
            var t = n(51116),
                o = n(86654),
                r = n(68647);
            let s = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), void 0 !== e.data && d.encode(e.data, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                id: 0,
                                data: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.data = d.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                d = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.terminationSignal && a.encode(e.terminationSignal, i.uint32(10).fork()).join(), void 0 !== e.textChunk && c.encode(e.textChunk, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                terminationSignal: void 0,
                                textChunk: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.terminationSignal = a.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.textChunk = c.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                a = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.text && i.uint32(10).string(e.text), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                text: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.text = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            var u = n(76421),
                l = n(87728);
            let f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && l.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.messageId && u.vzI.encode(e.messageId, i.uint32(18).fork()).join(), void 0 !== e.fromChunkId && r.as.encode({
                            value: e.fromChunkId
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                exPeer: void 0,
                                messageId: void 0,
                                fromChunkId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.exPeer = l.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.messageId = u.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.fromChunkId = r.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.chunkTimeoutMillis && r.as.encode({
                            value: e.chunkTimeoutMillis
                        }, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                chunkTimeoutMillis: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.chunkTimeoutMillis = r.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && l.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.messageId && u.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = l.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = u.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.exPeer && l.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.messageId && u.vzI.encode(e.messageId, i.uint32(18).fork()).join(), e.chunks)) s.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                messageId: void 0,
                                chunks: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = l.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = u.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.chunks.push(s.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            class g {
                ReceiveMessageStream(e, i) {
                    return this.rpc.unary(m, e, i)
                }
                CancelMessageStream(e, i) {
                    return this.rpc.unary(I, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.ReceiveMessageStream = this.ReceiveMessageStream.bind(this), this.CancelMessageStream = this.CancelMessageStream.bind(this)
                }
            }
            let b = {
                    serviceName: "bale.message_stream.v1.MessageStream"
                },
                m = {
                    methodName: "ReceiveMessageStream",
                    service: b,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                I = {
                    methodName: "CancelMessageStream",
                    service: b,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = k.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                }
        },
        55231: function(e, i, n) {
            n.d(i, {
                $3D: () => M,
                $Vf: () => eI,
                ASw: () => eJ,
                FSr: () => ef,
                HzF: () => eu,
                MBu: () => N,
                OSl: () => V,
                PTm: () => ey,
                QVQ: () => R,
                S_s: () => B,
                T8s: () => O,
                TIF: () => S,
                V53: () => x,
                XC2: () => q,
                XfM: () => em,
                Z7L: () => v,
                ZOh: () => G,
                _01: () => el,
                _Uu: () => z,
                _mQ: () => ev,
                aly: () => eT,
                d6X: () => E,
                dui: () => U,
                ihu: () => e1,
                imf: () => ew,
                kSH: () => L,
                mB9: () => k,
                oL9: () => e3,
                oh$: () => _,
                rN1: () => eC,
                tD3: () => A,
                tEF: () => D,
                tww: () => eW,
                wN5: () => j,
                xUK: () => P,
                xyJ: () => ep,
                yA3: () => I
            });
            var t = n(51116),
                o = n(86654),
                r = n(26016),
                s = n(68647),
                d = n(36343),
                a = n(76421),
                c = n(55935),
                u = n(87728),
                l = n(71879);
            let f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.date && i.uint32(16).int64(e.date), 0 !== e.randomId && i.uint32(24).int64(e.randomId), "" !== e.title && i.uint32(34).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                date: 0,
                                randomId: 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = iG(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.randomId = iG(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.threadId && i.uint32(8).int32(e.threadId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                threadId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.threadId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), void 0 !== e.message && a.QBZ.encode(e.message, i.uint32(26).fork()).join(), void 0 !== e.isOnlyForUser && s.as.encode({
                            value: e.isOnlyForUser
                        }, i.uint32(34).fork()).join(), void 0 !== e.quotedMessageReference && a.PP8.encode(e.quotedMessageReference, i.uint32(42).fork()).join(), void 0 !== e.exPeer && u.AQ.encode(e.exPeer, i.uint32(50).fork()).join(), !1 !== e.isSilent && i.uint32(56).bool(e.isSilent), void 0 !== e.threadId && a.vzI.encode(e.threadId, i.uint32(66).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                message: void 0,
                                isOnlyForUser: void 0,
                                quotedMessageReference: void 0,
                                exPeer: void 0,
                                isSilent: !1,
                                threadId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.message = a.QBZ.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.isOnlyForUser = s.as.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.quotedMessageReference = a.PP8.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.exPeer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    r.isSilent = n.bool();
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    r.threadId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), e.multiMedia)) a.lp4.encode(n, i.uint32(18).fork()).join();
                        return void 0 !== e.repliedMessage && a.PP8.encode(e.repliedMessage, i.uint32(26).fork()).join(), "0" !== e.groupedId && i.uint32(32).int64(e.groupedId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                multiMedia: [],
                                repliedMessage: void 0,
                                groupedId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.multiMedia.push(a.lp4.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.repliedMessage = a.PP8.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.groupedId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), i.uint32(18).fork(), e.rid)) i.int64(n);
                        for (let n of (i.join(), e.forwardedMessages)) a.PP8.encode(n, i.uint32(26).fork()).join();
                        return void 0 !== e.groupedId && r.j1.encode(e.groupedId, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                rid: [],
                                forwardedMessages: [],
                                groupedId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        s.rid.push(n.int64().toString());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) s.rid.push(n.int64().toString());
                                        continue
                                    }
                                    break;
                                case 3:
                                    if (26 !== e) break;
                                    s.forwardedMessages.push(a.PP8.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.groupedId = r.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), void 0 !== e.updatedMessage && a.QBZ.encode(e.updatedMessage, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                updatedMessage: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.updatedMessage = a.QBZ.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.date && i.uint32(16).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = iG(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.date && i.uint32(16).int64(e.date), void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                date: 0,
                                exPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = iG(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), i.uint32(18).fork(), e.rids)) i.int64(n);
                        return i.join(), void 0 !== e.dates && a.LWL.encode(e.dates, i.uint32(26).fork()).join(), void 0 !== e.justMine && s._t.encode({
                            value: e.justMine
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rids: [],
                                dates: void 0,
                                justMine: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        r.rids.push(n.int64().toString());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) r.rids.push(n.int64().toString());
                                        continue
                                    }
                                    break;
                                case 3:
                                    if (26 !== e) break;
                                    r.dates = a.LWL.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.justMine = s._t.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.exPeers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.exPeers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.senderUid && i.uint32(16).int32(e.senderUid), 0 !== e.date && i.uint32(24).int64(e.date), "0" !== e.rid && i.uint32(32).int64(e.rid), void 0 !== e.message && a.QBZ.encode(e.message, i.uint32(42).fork()).join(), void 0 !== e.attributes && a.BMH.encode(e.attributes, i.uint32(50).fork()).join(), void 0 !== e.quotedMessage && a.EBV.encode(e.quotedMessage, i.uint32(58).fork()).join(), void 0 !== e.previousMessageId && a.vzI.encode(e.previousMessageId, i.uint32(74).fork()).join(), void 0 !== e.groupedId && r.j1.encode(e.groupedId, i.uint32(82).fork()).join(), !1 !== e.isSilent && i.uint32(88).bool(e.isSilent), !1 !== e.hasComment && i.uint32(96).bool(e.hasComment), void 0 !== e.threadId && a.vzI.encode(e.threadId, i.uint32(106).fork()).join(), void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(114).fork()).join(), void 0 !== e.threadPreviousMessageId && a.vzI.encode(e.threadPreviousMessageId, i.uint32(122).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                peer: void 0,
                                senderUid: 0,
                                date: 0,
                                rid: "0",
                                message: void 0,
                                attributes: void 0,
                                quotedMessage: void 0,
                                previousMessageId: void 0,
                                groupedId: void 0,
                                isSilent: !1,
                                hasComment: !1,
                                threadId: void 0,
                                exPeer: void 0,
                                threadPreviousMessageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.senderUid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.date = iG(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.rid = n.int64().toString();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.message = a.QBZ.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    s.attributes = a.BMH.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    s.quotedMessage = a.EBV.decode(n, n.uint32());
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    s.previousMessageId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    s.groupedId = r.j1.decode(n, n.uint32());
                                    continue;
                                case 11:
                                    if (88 !== e) break;
                                    s.isSilent = n.bool();
                                    continue;
                                case 12:
                                    if (96 !== e) break;
                                    s.hasComment = n.bool();
                                    continue;
                                case 13:
                                    if (106 !== e) break;
                                    s.threadId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 14:
                                    if (114 !== e) break;
                                    s.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 15:
                                    if (122 !== e) break;
                                    s.threadPreviousMessageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), e.messageContainers)) a.NNI.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageContainers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageContainers.push(a.NNI.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), void 0 !== e.message && a.QBZ.encode(e.message, i.uint32(26).fork()).join(), void 0 !== e.date && r.j1.encode(e.date, i.uint32(34).fork()).join(), void 0 !== e.updaterUserId && s.as.encode({
                            value: e.updaterUserId
                        }, i.uint32(42).fork()).join(), void 0 !== e.threadId && a.vzI.encode(e.threadId, i.uint32(50).fork()).join(), void 0 !== e.quotedCommentReplySenderId && r.as.encode(e.quotedCommentReplySenderId, i.uint32(58).fork()).join(), void 0 !== e.updatedContentTypeMessage && a.QBZ.encode(e.updatedContentTypeMessage, i.uint32(66).fork()).join(), void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(74).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            d = {
                                peer: void 0,
                                rid: "0",
                                message: void 0,
                                date: void 0,
                                updaterUserId: void 0,
                                threadId: void 0,
                                quotedCommentReplySenderId: void 0,
                                updatedContentTypeMessage: void 0,
                                exPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    d.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    d.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.message = a.QBZ.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    d.date = r.j1.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    d.updaterUserId = s.as.decode(n, n.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    d.threadId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    d.quotedCommentReplySenderId = r.as.decode(n, n.uint32());
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    d.updatedContentTypeMessage = a.QBZ.decode(n, n.uint32());
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    d.exPeer = u.Cu.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                P = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), void 0 !== e.quotedMessage && a.EBV.encode(e.quotedMessage, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                quotedMessage: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.quotedMessage = a.EBV.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                M = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), 0 !== e.date && i.uint32(24).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.date = iG(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                E = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), 0 !== e.date && i.uint32(24).int64(e.date), void 0 !== e.previousMessageId && a.vzI.encode(e.previousMessageId, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                date: 0,
                                previousMessageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.date = iG(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.previousMessageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                R = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.startDate && i.uint32(16).int64(e.startDate), 0 !== e.receivedDate && i.uint32(24).int64(e.receivedDate), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                startDate: 0,
                                receivedDate: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.startDate = iG(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.receivedDate = iG(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                O = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.startDate && i.uint32(16).int64(e.startDate), 0 !== e.readDate && i.uint32(24).int64(e.readDate), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                startDate: 0,
                                readDate: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.startDate = iG(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.readDate = iG(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                N = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.startDate && i.uint32(16).int64(e.startDate), void 0 !== e.unreadCounter && s.as.encode({
                            value: e.unreadCounter
                        }, i.uint32(26).fork()).join(), void 0 !== e.endDate && r.j1.encode(e.endDate, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            d = {
                                peer: void 0,
                                startDate: 0,
                                unreadCounter: void 0,
                                endDate: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    d.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    d.startDate = iG(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.unreadCounter = s.as.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    d.endDate = r.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                U = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };

            function q() {
                return {
                    peer: void 0,
                    rids: [],
                    dates: void 0,
                    threadIds: [],
                    quotedCommentReplySenderIds: []
                }
            }
            let B = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), i.uint32(18).fork(), e.rids)) i.int64(n);
                        for (let n of (i.join(), void 0 !== e.dates && a.AOA.encode(e.dates, i.uint32(26).fork()).join(), e.threadIds)) a.vzI.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.quotedCommentReplySenderIds) r.as.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = q();
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        s.rids.push(n.int64().toString());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) s.rids.push(n.int64().toString());
                                        continue
                                    }
                                    break;
                                case 3:
                                    if (26 !== e) break;
                                    s.dates = a.AOA.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.threadIds.push(a.vzI.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.quotedCommentReplySenderIds.push(r.as.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                A = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                D = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), !1 !== e.is && i.uint32(16).bool(e.is), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                is: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.is = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                G = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), !1 !== e.is && i.uint32(16).bool(e.is), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                is: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.is = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                x = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), !1 !== e.is && i.uint32(16).bool(e.is), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                is: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.is = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                L = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.wpU.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.wpU.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                _ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.xM.encode(e.peer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), "0" !== e.cardinality && i.uint32(24).int64(e.cardinality), 0 !== e.type && i.uint32(32).int32(e.type), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                rid: "0",
                                cardinality: "0",
                                type: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.cardinality = n.int64().toString();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.type = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                F = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.L0.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.date && i.uint32(16).int64(e.date), 0 !== e.loadMode && i.uint32(32).int32(e.loadMode), 0 !== e.limit && i.uint32(40).int32(e.limit), i.uint32(50).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                date: 0,
                                loadMode: 0,
                                limit: 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = iG(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.loadMode = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.limit = n.int32();
                                    continue;
                                case 6:
                                    if (48 === e) {
                                        r.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (50 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) r.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.history) a.NNI.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.users) l.KJ.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.userPeers) u.Uw.encode(n, i.uint32(26).fork()).join();
                        for (let n of e.groups) d.YJ.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.groupPeers) u.wX.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                history: [],
                                users: [],
                                userPeers: [],
                                groups: [],
                                groupPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.history.push(a.NNI.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(l.KJ.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.userPeers.push(u.Uw.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.groups.push(d.YJ.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.groupPeers.push(u.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                K = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.minDate && i.uint32(8).int64(e.minDate), 0 !== e.limit && i.uint32(16).int32(e.limit), i.uint32(26).fork(), e.optimizations)) i.int32(n);
                        return i.join(), 0 !== e.dialogType && i.uint32(32).int32(e.dialogType), !1 !== e.excludePinnedDialogs && i.uint32(40).bool(e.excludePinnedDialogs), 0 !== e.archiveFilter && i.uint32(48).int32(e.archiveFilter), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                minDate: 0,
                                limit: 0,
                                optimizations: [],
                                dialogType: 0,
                                excludePinnedDialogs: !1,
                                archiveFilter: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.minDate = iG(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.limit = n.int32();
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        r.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) r.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 4:
                                    if (32 !== e) break;
                                    r.dialogType = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.excludePinnedDialogs = n.bool();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    r.archiveFilter = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                H = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.groups) d.YJ.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.users) l.KJ.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(26).fork()).join();
                        for (let n of e.userPeers) u.Uw.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.groupPeers) u.wX.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groups: [],
                                users: [],
                                dialogs: [],
                                userPeers: [],
                                groupPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groups.push(d.YJ.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(l.KJ.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.userPeers.push(u.Uw.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.groupPeers.push(u.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                W = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.optimizations)) i.int32(n);
                        return i.join(), 0 !== e.archiveFilter && i.uint32(16).int32(e.archiveFilter), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                optimizations: [],
                                archiveFilter: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 === e) {
                                        r.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (10 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) r.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 2:
                                    if (16 !== e) break;
                                    r.archiveFilter = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.wpU.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.users) l.KJ.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.groups) d.YJ.encode(n, i.uint32(26).fork()).join();
                        for (let n of (void 0 !== e.showArchived && s._t.encode({
                                value: e.showArchived
                            }, i.uint32(34).fork()).join(), void 0 !== e.showInvite && s._t.encode({
                                value: e.showInvite
                            }, i.uint32(42).fork()).join(), e.userPeers)) u.Uw.encode(n, i.uint32(50).fork()).join();
                        for (let n of e.groupPeers) u.wX.encode(n, i.uint32(58).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: [],
                                users: [],
                                groups: [],
                                showArchived: void 0,
                                showInvite: void 0,
                                userPeers: [],
                                groupPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.wpU.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(l.KJ.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.groups.push(d.YJ.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.showArchived = s._t.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.showInvite = s._t.decode(n, n.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.userPeers.push(u.Uw.decode(n, n.uint32()));
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.groupPeers.push(u.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                J = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.L0.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.L0.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                Z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.groups) d.YJ.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.users) l.KJ.encode(n, i.uint32(26).fork()).join();
                        for (let n of e.userPeers) u.Uw.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.groupPeers) u.wX.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: [],
                                groups: [],
                                users: [],
                                userPeers: [],
                                groupPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.groups.push(d.YJ.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.users.push(l.KJ.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.userPeers.push(u.Uw.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.groupPeers.push(u.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                X = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                $ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.discussionMessage && a.NNI.encode(e.discussionMessage, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                discussionMessage: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.discussionMessage = a.NNI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ee = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.threadId && a.vzI.encode(e.threadId, i.uint32(18).fork()).join(), 0 !== e.date && i.uint32(24).int64(e.date), 0 !== e.loadMode && i.uint32(32).int32(e.loadMode), 0 !== e.limit && i.uint32(40).int32(e.limit), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                threadId: void 0,
                                date: 0,
                                loadMode: 0,
                                limit: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.threadId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.date = iG(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.loadMode = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    r.limit = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ei = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.history) a.NNI.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.users) l.KJ.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.userPeers) u.Uw.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                history: [],
                                users: [],
                                userPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.history.push(a.NNI.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.users.push(l.KJ.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.userPeers.push(u.Uw.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                en = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), e.mids)) a.vzI.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                mids: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.mids.push(a.vzI.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                et = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.containers) a.yze.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                containers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.containers.push(a.yze.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eo = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.folderId && i.uint32(16).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: [],
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                er = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: [],
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                es = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ed = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.folderId && i.uint32(8).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ea = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ec = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.folderId && i.uint32(16).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: [],
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eu = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.folderId && i.uint32(8).int32(e.folderId), e.pinnedDialogs)) a.lGe.encode(n, i.uint32(18).fork()).join();
                        for (let n of e.pinnedPeers) u.Cu.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0,
                                pinnedDialogs: [],
                                pinnedPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.pinnedDialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.pinnedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                el = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.folderId && i.uint32(8).int32(e.folderId), e.unpinnedPeers)) u.Cu.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0,
                                unpinnedPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.unpinnedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ef = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.pinnedMessage && a.NNI.encode(e.pinnedMessage, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                pinnedMessage: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.pinnedMessage = a.NNI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ep = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.messageIds) a.vzI.encode(n, i.uint32(10).fork()).join();
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(18).fork()).join(), !1 !== e.all && i.uint32(24).bool(e.all), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                messageIds: [],
                                peer: void 0,
                                all: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.messageIds.push(a.vzI.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.all = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ev = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.exPeers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return !1 !== e.isArchived && i.uint32(16).bool(e.isArchived), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeers: [],
                                isArchived: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.isArchived = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ek = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), !1 !== e.justMine && i.uint32(24).bool(e.justMine), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageId: void 0,
                                justMine: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.justMine = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eh = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), e.messageIds)) a.vzI.encode(n, i.uint32(18).fork()).join();
                        return !1 !== e.all && i.uint32(24).bool(e.all), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageIds: [],
                                all: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageIds.push(a.vzI.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.all = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eg = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.Cu.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eb = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.pinnedMessages) a.NNI.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                pinnedMessages: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.pinnedMessages.push(a.NNI.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                em = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.folderId && i.uint32(8).int32(e.folderId), void 0 !== e.newName && s.hU.encode({
                                value: e.newName
                            }, i.uint32(18).fork()).join(), e.addedPeers)) u.Cu.encode(n, i.uint32(26).fork()).join();
                        for (let n of e.deletedPeers) u.Cu.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.unreadPeers) u.Cu.encode(n, i.uint32(42).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0,
                                newName: void 0,
                                addedPeers: [],
                                deletedPeers: [],
                                unreadPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.newName = s.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.addedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.deletedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.unreadPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eI = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.folderIds)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderIds: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.folderIds.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) r.folderIds.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ew = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.folder && a.vdG.encode(e.folder, i.uint32(10).fork()).join(), 0 !== e.index && i.uint32(16).int32(e.index), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folder: void 0,
                                index: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.folder = a.vdG.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.index = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ey = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.folderId && i.uint32(8).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eC = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eT = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eS = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.folderId && i.uint32(16).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: [],
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eV = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: [],
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ej = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("" !== e.name && i.uint32(10).string(e.name), e.peers)) u.Cu.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                name: "",
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.name = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eP = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.folderId && i.uint32(8).int32(e.folderId), 0 !== e.index && i.uint32(16).int32(e.index), e.unreadPeers)) u.Cu.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0,
                                index: 0,
                                unreadPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.index = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.unreadPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eM = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.folderId && i.uint32(8).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eE = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.index && i.uint32(8).int32(e.index), e.unreadPeers)) u.Cu.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                index: 0,
                                unreadPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.index = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.unreadPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eR = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return !1 !== e.includeMutedUnreadPeers && i.uint32(8).bool(e.includeMutedUnreadPeers), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                includeMutedUnreadPeers: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.includeMutedUnreadPeers = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eO = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.folders) a.vdG.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.unreadPeers) a.Cx5.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folders: [],
                                unreadPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.folders.push(a.vdG.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.unreadPeers.push(a.Cx5.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eN = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.folderIds)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderIds: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.folderIds.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) r.folderIds.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eU = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.folderIds)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderIds: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.folderIds.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) r.folderIds.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eq = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.folderId && i.uint32(8).int32(e.folderId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eB = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.folderId && i.uint32(8).int32(e.folderId), "" !== e.name && i.uint32(18).string(e.name), e.addedPeers)) u.Cu.encode(n, i.uint32(26).fork()).join();
                        for (let n of e.deletedPeers) u.Cu.encode(n, i.uint32(34).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                folderId: 0,
                                name: "",
                                addedPeers: [],
                                deletedPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.name = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.addedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.deletedPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eA = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.unreadPeers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                unreadPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.unreadPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eD = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.minDate && i.uint32(8).int64(e.minDate), 0 !== e.limit && i.uint32(16).int32(e.limit), 0 !== e.folderId && i.uint32(24).int32(e.folderId), 0 !== e.archiveFilter && i.uint32(32).int32(e.archiveFilter), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                minDate: 0,
                                limit: 0,
                                folderId: 0,
                                archiveFilter: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.minDate = iG(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.limit = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.folderId = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    r.archiveFilter = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ez = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.dialogs) a.lGe.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                dialogs: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.dialogs.push(a.lGe.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eG = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.AQ.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                ex = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.history && a.NNI.encode(e.history, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                history: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.history = a.NNI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eL = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                e_ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.peers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eF = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                eY = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.exPeers) u.Cu.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeers.push(u.Cu.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eK = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), "" !== e.title && i.uint32(18).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eH = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                topicId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eW = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), "" !== e.title && i.uint32(26).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eQ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), "" !== e.title && i.uint32(26).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eJ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), "" !== e.title && i.uint32(26).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eZ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), 0 !== e.minDate && i.uint32(16).int64(e.minDate), 0 !== e.limit && i.uint32(24).int32(e.limit), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                minDate: 0,
                                limit: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.minDate = iG(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.limit = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                eX = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.topics) a.KKH.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                topics: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.topics.push(a.KKH.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                e$ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                e0 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.topic && a.KKH.encode(e.topic, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                topic: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.topic = a.KKH.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                e2 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                e3 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.exPeer && u.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), void 0 !== e.topicId && a.vzI.encode(e.topicId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                exPeer: void 0,
                                topicId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.exPeer = u.Cu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.topicId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            class e1 {
                SendMessage(e, i) {
                    return this.rpc.unary(e5, e, i)
                }
                ForwardMessages(e, i) {
                    return this.rpc.unary(e6, e, i)
                }
                SendMultiMediaMessage(e, i) {
                    return this.rpc.unary(e7, e, i)
                }
                UpdateMessage(e, i) {
                    return this.rpc.unary(e8, e, i)
                }
                MessageReceived(e, i) {
                    return this.rpc.unary(e9, e, i)
                }
                MessageRead(e, i) {
                    return this.rpc.unary(ie, e, i)
                }
                DeleteMessage(e, i) {
                    return this.rpc.unary(ii, e, i)
                }
                ClearChat(e, i) {
                    return this.rpc.unary(it, e, i)
                }
                DeleteChat(e, i) {
                    return this.rpc.unary(io, e, i)
                }
                LoadHistory(e, i) {
                    return this.rpc.unary(ir, e, i)
                }
                LoadDialogs(e, i) {
                    return this.rpc.unary(is, e, i)
                }
                LoadGroupedDialogs(e, i) {
                    return this.rpc.unary(id, e, i)
                }
                LoadPeerDialogs(e, i) {
                    return this.rpc.unary(ia, e, i)
                }
                CreateThread(e, i) {
                    return this.rpc.unary(ic, e, i)
                }
                GetDiscussionMessage(e, i) {
                    return this.rpc.unary(iu, e, i)
                }
                LoadReplies(e, i) {
                    return this.rpc.unary(il, e, i)
                }
                GetMessagesRepliesInfo(e, i) {
                    return this.rpc.unary(ip, e, i)
                }
                PinDialogs(e, i) {
                    return this.rpc.unary(iv, e, i)
                }
                LoadPinnedDialogs(e, i) {
                    return this.rpc.unary(ik, e, i)
                }
                UnpinDialogs(e, i) {
                    return this.rpc.unary(ih, e, i)
                }
                ReorderPinnedDialogs(e, i) {
                    return this.rpc.unary(ig, e, i)
                }
                MentionRead(e, i) {
                    return this.rpc.unary(ib, e, i)
                }
                CreateFolder(e, i) {
                    return this.rpc.unary(im, e, i)
                }
                CreateReservedFolder(e, i) {
                    return this.rpc.unary(iI, e, i)
                }
                LoadFolders(e, i) {
                    return this.rpc.unary(iw, e, i)
                }
                ReorderFolders(e, i) {
                    return this.rpc.unary(iy, e, i)
                }
                DeleteFolder(e, i) {
                    return this.rpc.unary(iC, e, i)
                }
                EditFolder(e, i) {
                    return this.rpc.unary(iT, e, i)
                }
                LoadFolderDialogs(e, i) {
                    return this.rpc.unary(iS, e, i)
                }
                FetchProtectedMessage(e, i) {
                    return this.rpc.unary(iV, e, i)
                }
                MarkDialogsAsUnread(e, i) {
                    return this.rpc.unary(ij, e, i)
                }
                MarkDialogsAsRead(e, i) {
                    return this.rpc.unary(iP, e, i)
                }
                PinMessage(e, i) {
                    return this.rpc.unary(iM, e, i)
                }
                UnPinMessages(e, i) {
                    return this.rpc.unary(iE, e, i)
                }
                LoadPinnedMessages(e, i) {
                    return this.rpc.unary(iR, e, i)
                }
                LoadPeers(e, i) {
                    return this.rpc.unary(iO, e, i)
                }
                ArchiveDialogs(e, i) {
                    return this.rpc.unary(iN, e, i)
                }
                UnArchiveDialogs(e, i) {
                    return this.rpc.unary(iU, e, i)
                }
                CreateTopic(e, i) {
                    return this.rpc.unary(iq, e, i)
                }
                EditTopic(e, i) {
                    return this.rpc.unary(iB, e, i)
                }
                GetTopics(e, i) {
                    return this.rpc.unary(iA, e, i)
                }
                GetTopicByID(e, i) {
                    return this.rpc.unary(iD, e, i)
                }
                DeleteTopic(e, i) {
                    return this.rpc.unary(iz, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.SendMessage = this.SendMessage.bind(this), this.ForwardMessages = this.ForwardMessages.bind(this), this.SendMultiMediaMessage = this.SendMultiMediaMessage.bind(this), this.UpdateMessage = this.UpdateMessage.bind(this), this.MessageReceived = this.MessageReceived.bind(this), this.MessageRead = this.MessageRead.bind(this), this.DeleteMessage = this.DeleteMessage.bind(this), this.ClearChat = this.ClearChat.bind(this), this.DeleteChat = this.DeleteChat.bind(this), this.LoadHistory = this.LoadHistory.bind(this), this.LoadDialogs = this.LoadDialogs.bind(this), this.LoadGroupedDialogs = this.LoadGroupedDialogs.bind(this), this.LoadPeerDialogs = this.LoadPeerDialogs.bind(this), this.CreateThread = this.CreateThread.bind(this), this.GetDiscussionMessage = this.GetDiscussionMessage.bind(this), this.LoadReplies = this.LoadReplies.bind(this), this.GetMessagesRepliesInfo = this.GetMessagesRepliesInfo.bind(this), this.PinDialogs = this.PinDialogs.bind(this), this.LoadPinnedDialogs = this.LoadPinnedDialogs.bind(this), this.UnpinDialogs = this.UnpinDialogs.bind(this), this.ReorderPinnedDialogs = this.ReorderPinnedDialogs.bind(this), this.MentionRead = this.MentionRead.bind(this), this.CreateFolder = this.CreateFolder.bind(this), this.CreateReservedFolder = this.CreateReservedFolder.bind(this), this.LoadFolders = this.LoadFolders.bind(this), this.ReorderFolders = this.ReorderFolders.bind(this), this.DeleteFolder = this.DeleteFolder.bind(this), this.EditFolder = this.EditFolder.bind(this), this.LoadFolderDialogs = this.LoadFolderDialogs.bind(this), this.FetchProtectedMessage = this.FetchProtectedMessage.bind(this), this.MarkDialogsAsUnread = this.MarkDialogsAsUnread.bind(this), this.MarkDialogsAsRead = this.MarkDialogsAsRead.bind(this), this.PinMessage = this.PinMessage.bind(this), this.UnPinMessages = this.UnPinMessages.bind(this), this.LoadPinnedMessages = this.LoadPinnedMessages.bind(this), this.LoadPeers = this.LoadPeers.bind(this), this.ArchiveDialogs = this.ArchiveDialogs.bind(this), this.UnArchiveDialogs = this.UnArchiveDialogs.bind(this), this.CreateTopic = this.CreateTopic.bind(this), this.EditTopic = this.EditTopic.bind(this), this.GetTopics = this.GetTopics.bind(this), this.GetTopicByID = this.GetTopicByID.bind(this), this.DeleteTopic = this.DeleteTopic.bind(this)
                }
            }
            let e4 = {
                    serviceName: "bale.messaging.v2.Messaging"
                },
                e5 = {
                    methodName: "SendMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.pQ.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e6 = {
                    methodName: "ForwardMessages",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return h.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.pQ.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e7 = {
                    methodName: "SendMultiMediaMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.pQ.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e8 = {
                    methodName: "UpdateMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.pQ.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                e9 = {
                    methodName: "MessageReceived",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return b.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ie = {
                    methodName: "MessageRead",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return m.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ii = {
                    methodName: "DeleteMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return I.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                it = {
                    methodName: "ClearChat",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return w.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                io = {
                    methodName: "DeleteChat",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ir = {
                    methodName: "LoadHistory",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return F.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = Y.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                is = {
                    methodName: "LoadDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return K.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = H.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                id = {
                    methodName: "LoadGroupedDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return W.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = Q.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ia = {
                    methodName: "LoadPeerDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return J.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = Z.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ic = {
                    methodName: "CreateThread",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iu = {
                    methodName: "GetDiscussionMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return X.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = $.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                il = {
                    methodName: "LoadReplies",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ee.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ei.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ip = {
                    methodName: "GetMessagesRepliesInfo",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return en.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = et.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iv = {
                    methodName: "PinDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eo.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = er.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ik = {
                    methodName: "LoadPinnedDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ed.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ea.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ih = {
                    methodName: "UnpinDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ec.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ig = {
                    methodName: "ReorderPinnedDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eS.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eV.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ib = {
                    methodName: "MentionRead",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return es.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                im = {
                    methodName: "CreateFolder",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ej.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eP.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iI = {
                    methodName: "CreateReservedFolder",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eM.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eE.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iw = {
                    methodName: "LoadFolders",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eR.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eO.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iy = {
                    methodName: "ReorderFolders",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eN.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eU.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iC = {
                    methodName: "DeleteFolder",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eq.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iT = {
                    methodName: "EditFolder",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eB.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eA.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iS = {
                    methodName: "LoadFolderDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eD.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ez.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iV = {
                    methodName: "FetchProtectedMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eG.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ex.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ij = {
                    methodName: "MarkDialogsAsUnread",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eL.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iP = {
                    methodName: "MarkDialogsAsRead",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e_.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.B_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iM = {
                    methodName: "PinMessage",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ek.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iE = {
                    methodName: "UnPinMessages",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eh.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iR = {
                    methodName: "LoadPinnedMessages",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eg.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eb.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iO = {
                    methodName: "LoadPeers",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eF.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eY.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iN = {
                    methodName: "ArchiveDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return C.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iU = {
                    methodName: "UnArchiveDialogs",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iq = {
                    methodName: "CreateTopic",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eK.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eH.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iB = {
                    methodName: "EditTopic",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eQ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iA = {
                    methodName: "GetTopics",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eZ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eX.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iD = {
                    methodName: "GetTopicByID",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e$.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = e0.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iz = {
                    methodName: "DeleteTopic",
                    service: e4,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e2.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = c.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function iG(e) {
                return globalThis.Number(e.toString())
            }
        },
        29658: function(e, i, n) {
            n.d(i, {
                HQ: () => C,
                OA: () => y
            });
            var t = n(51116),
                o = n(86654),
                r = n(68647),
                s = n(55935),
                d = n(60036);
            let a = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.userId && i.uint32(8).int32(e.userId), void 0 !== e.withDetailOption && d.J4.encode(e.withDetailOption, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userId: 0,
                                withDetailOption: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.userId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.withDetailOption = d.J4.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.userIds)) i.int32(n);
                        return i.join(), void 0 !== e.withDetailOption && d.J4.encode(e.withDetailOption, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userIds: [],
                                withDetailOption: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 === e) {
                                        r.userIds.push(n.int32());
                                        continue
                                    }
                                    if (10 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) r.userIds.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 2:
                                    if (18 !== e) break;
                                    r.withDetailOption = d.J4.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.userStatus && d.H1.encode(e.userStatus, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userStatus: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.userStatus = d.H1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.usersStatus) d.H1.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                usersStatus: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.usersStatus.push(d.H1.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.packageId && i.uint32(8).int64(e.packageId), void 0 !== e.couponCode && r.hU.encode({
                            value: e.couponCode
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                packageId: 0,
                                couponCode: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.packageId = O(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.couponCode = r.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.sadadPaymentToken && i.uint32(10).string(e.sadadPaymentToken), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                sadadPaymentToken: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.sadadPaymentToken = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.packageId && i.uint32(8).int64(e.packageId), "" !== e.couponCode && i.uint32(18).string(e.couponCode), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                packageId: 0,
                                couponCode: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.packageId = O(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.couponCode = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.discountedPrice && i.uint32(8).int64(e.discountedPrice), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                discountedPrice: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.discountedPrice = O(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.packages) d.rs.encode(n, i.uint32(10).fork()).join();
                        return Object.entries(e.bundles).forEach(e => {
                            let [n, t] = e;
                            b.encode({
                                key: n,
                                value: t
                            }, i.uint32(18).fork()).join()
                        }), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                packages: [],
                                bundles: {}
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.packages.push(d.rs.decode(n, n.uint32()));
                                    continue;
                                case 2: {
                                    if (18 !== e) break;
                                    let i = b.decode(n, n.uint32());
                                    void 0 !== i.value && (r.bundles[i.key] = i.value);
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.key && i.uint32(8).int64(e.key), void 0 !== e.value && d.NC.encode(e.value, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                key: 0,
                                value: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.key = O(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.value = d.NC.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.categories) d._c.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                categories: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.categories.push(d._c.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.badgeId && i.uint32(8).int64(e.badgeId), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                badgeId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.badgeId = O(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.successful && r._t.encode({
                            value: e.successful
                        }, i.uint32(10).fork()).join(), void 0 !== e.failed && r._t.encode({
                            value: e.failed
                        }, i.uint32(18).fork()).join(), void 0 !== e.unknown && r._t.encode({
                            value: e.unknown
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                successful: void 0,
                                failed: void 0,
                                unknown: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.successful = r._t.decode(n, n.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.failed = r._t.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.unknown = r._t.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                };
            class C {
                IsPremium(e, i) {
                    return this.rpc.unary(S, e, i)
                }
                IsPremiumBatch(e, i) {
                    return this.rpc.unary(V, e, i)
                }
                PurchasePackage(e, i) {
                    return this.rpc.unary(j, e, i)
                }
                CalculateDiscountedPrice(e, i) {
                    return this.rpc.unary(P, e, i)
                }
                GetPackages(e, i) {
                    return this.rpc.unary(M, e, i)
                }
                GetBadges(e, i) {
                    return this.rpc.unary(E, e, i)
                }
                SetUserBadge(e, i) {
                    return this.rpc.unary(R, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.IsPremium = this.IsPremium.bind(this), this.IsPremiumBatch = this.IsPremiumBatch.bind(this), this.PurchasePackage = this.PurchasePackage.bind(this), this.CalculateDiscountedPrice = this.CalculateDiscountedPrice.bind(this), this.GetPackages = this.GetPackages.bind(this), this.GetBadges = this.GetBadges.bind(this), this.SetUserBadge = this.SetUserBadge.bind(this)
                }
            }
            let T = {
                    serviceName: "bale.premium.v1.Premium"
                },
                S = {
                    methodName: "IsPremium",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return a.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = u.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                V = {
                    methodName: "IsPremiumBatch",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return c.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = l.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                j = {
                    methodName: "PurchasePackage",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = p.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                P = {
                    methodName: "CalculateDiscountedPrice",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = k.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                M = {
                    methodName: "GetPackages",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return h.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = g.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                E = {
                    methodName: "GetBadges",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return m.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = I.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                R = {
                    methodName: "SetUserBadge",
                    service: T,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return w.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = s.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function O(e) {
                return globalThis.Number(e.toString())
            }
        },
        60036: function(e, i, n) {
            n.d(i, {
                H1: () => u,
                J4: () => c,
                NC: () => d,
                _c: () => p,
                oz: () => o,
                rs: () => s
            });
            var t, o, r = n(86654);
            (t = o || (o = {}))[t.MEDIAFORMAT_UNKNOWN = 0] = "MEDIAFORMAT_UNKNOWN", t[t.MEDIAFORMAT_GIF = 1] = "MEDIAFORMAT_GIF", t[t.MEDIAFORMAT_JSON_LOTTIE = 2] = "MEDIAFORMAT_JSON_LOTTIE", t[t.MEDIAFORMAT_PNG = 3] = "MEDIAFORMAT_PNG";
            let s = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.id && i.uint32(8).int64(e.id), 0 !== e.bundleId && i.uint32(16).int64(e.bundleId), "" !== e.faTitle && i.uint32(26).string(e.faTitle), "" !== e.enTitle && i.uint32(34).string(e.enTitle), "" !== e.faDescription && i.uint32(42).string(e.faDescription), "" !== e.enDescription && i.uint32(50).string(e.enDescription), 0 !== e.price && i.uint32(64).int64(e.price), 0 !== e.finalPrice && i.uint32(72).int64(e.finalPrice), 0 !== e.duration && i.uint32(80).int64(e.duration), !1 !== e.isSpecial && i.uint32(88).bool(e.isSpecial), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                id: 0,
                                bundleId: 0,
                                faTitle: "",
                                enTitle: "",
                                faDescription: "",
                                enDescription: "",
                                price: 0,
                                finalPrice: 0,
                                duration: 0,
                                isSpecial: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = v(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.bundleId = v(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.faTitle = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.enTitle = n.string();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.faDescription = n.string();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.enDescription = n.string();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.price = v(n.int64());
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    o.finalPrice = v(n.int64());
                                    continue;
                                case 10:
                                    if (80 !== e) break;
                                    o.duration = v(n.int64());
                                    continue;
                                case 11:
                                    if (88 !== e) break;
                                    o.isSpecial = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                d = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.features) a.encode(n, i.uint32(50).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                features: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 6:
                                    if (50 !== e) break;
                                    o.features.push(a.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                a = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.featureId && i.uint32(8).int64(e.featureId), "" !== e.faTitle && i.uint32(18).string(e.faTitle), "" !== e.enTitle && i.uint32(26).string(e.enTitle), "" !== e.faShortDescription && i.uint32(34).string(e.faShortDescription), "" !== e.enShortDescription && i.uint32(42).string(e.enShortDescription), "" !== e.faLongDescription && i.uint32(50).string(e.faLongDescription), "" !== e.enLongDescription && i.uint32(58).string(e.enLongDescription), "" !== e.faUnit && i.uint32(66).string(e.faUnit), "" !== e.enUnit && i.uint32(74).string(e.enUnit), 0 !== e.minAppVersion && i.uint32(80).int32(e.minAppVersion), "" !== e.iconSvg && i.uint32(90).string(e.iconSvg), "" !== e.mediaUrl && i.uint32(98).string(e.mediaUrl), 0 !== e.mediaFormat && i.uint32(104).int32(e.mediaFormat), 0 !== e.quota && i.uint32(112).int64(e.quota), 0 !== e.resetPeriod && i.uint32(120).int64(e.resetPeriod), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                featureId: 0,
                                faTitle: "",
                                enTitle: "",
                                faShortDescription: "",
                                enShortDescription: "",
                                faLongDescription: "",
                                enLongDescription: "",
                                faUnit: "",
                                enUnit: "",
                                minAppVersion: 0,
                                iconSvg: "",
                                mediaUrl: "",
                                mediaFormat: 0,
                                quota: 0,
                                resetPeriod: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.featureId = v(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.faTitle = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.enTitle = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.faShortDescription = n.string();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.enShortDescription = n.string();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.faLongDescription = n.string();
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.enLongDescription = n.string();
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    o.faUnit = n.string();
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    o.enUnit = n.string();
                                    continue;
                                case 10:
                                    if (80 !== e) break;
                                    o.minAppVersion = n.int32();
                                    continue;
                                case 11:
                                    if (90 !== e) break;
                                    o.iconSvg = n.string();
                                    continue;
                                case 12:
                                    if (98 !== e) break;
                                    o.mediaUrl = n.string();
                                    continue;
                                case 13:
                                    if (104 !== e) break;
                                    o.mediaFormat = n.int32();
                                    continue;
                                case 14:
                                    if (112 !== e) break;
                                    o.quota = v(n.int64());
                                    continue;
                                case 15:
                                    if (120 !== e) break;
                                    o.resetPeriod = v(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return !1 !== e.withBadge && i.uint32(8).bool(e.withBadge), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                withBadge: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.withBadge = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.userId && i.uint32(8).int32(e.userId), !1 !== e.isPremium && i.uint32(16).bool(e.isPremium), 0 !== e.expirationTime && i.uint32(24).int64(e.expirationTime), void 0 !== e.detail && l.encode(e.detail, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                userId: 0,
                                isPremium: !1,
                                expirationTime: 0,
                                detail: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.userId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.isPremium = n.bool();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.expirationTime = v(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.detail = l.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.badge && f.encode(e.badge, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                badge: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.badge = f.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.badgeId && i.uint32(8).int64(e.badgeId), "" !== e.faName && i.uint32(18).string(e.faName), "" !== e.enName && i.uint32(26).string(e.enName), "" !== e.mediaUrl && i.uint32(34).string(e.mediaUrl), 0 !== e.mediaFormat && i.uint32(40).int32(e.mediaFormat), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                badgeId: 0,
                                faName: "",
                                enName: "",
                                mediaUrl: "",
                                mediaFormat: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.badgeId = v(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.faName = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.enName = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.mediaUrl = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.mediaFormat = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (0 !== e.id && i.uint32(8).int64(e.id), "" !== e.faName && i.uint32(18).string(e.faName), "" !== e.enName && i.uint32(26).string(e.enName), "" !== e.mediaUrl && i.uint32(34).string(e.mediaUrl), 0 !== e.mediaFormat && i.uint32(40).int32(e.mediaFormat), e.badges)) f.encode(n, i.uint32(50).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                id: 0,
                                faName: "",
                                enName: "",
                                mediaUrl: "",
                                mediaFormat: 0,
                                badges: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = v(n.int64());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.faName = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.enName = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.mediaUrl = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.mediaFormat = n.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.badges.push(f.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };

            function v(e) {
                return globalThis.Number(e.toString())
            }
        },
        43806: function(e, i, n) {
            n.d(i, {
                It: () => y,
                Js: () => O,
                QW: () => w,
                UR: () => C,
                XU: () => b,
                _9: () => I,
                ld: () => g,
                sn: () => m
            });
            var t = n(51116),
                o = n(86654),
                r = n(26016),
                s = n(68647),
                d = n(55935),
                a = n(87728),
                c = n(65952);
            let u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.L0.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.typingType && i.uint32(24).int32(e.typingType), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                typingType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.L0.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.typingType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.L0.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.typingType && i.uint32(16).int32(e.typingType), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                typingType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.L0.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.typingType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return !1 !== e.isOnline && i.uint32(8).bool(e.isOnline), 0 !== e.timeout && i.uint32(16).int64(e.timeout), 0 !== e.deviceType && i.uint32(24).int32(e.deviceType), void 0 !== e.deviceCategory && s.hU.encode({
                            value: e.deviceCategory
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                isOnline: !1,
                                timeout: 0,
                                deviceType: 0,
                                deviceCategory: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.isOnline = n.bool();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.timeout = Y(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.deviceType = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.deviceCategory = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.users) a.Uw.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                users: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.users.push(a.Uw.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.users) a.Uw.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                users: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.users.push(a.Uw.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.groups) a.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groups.push(a.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.groups) a.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.groups.push(a.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.uid && i.uint32(16).int32(e.uid), 0 !== e.typingType && i.uint32(24).int32(e.typingType), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                uid: 0,
                                typingType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.uid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.typingType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.xM.encode(e.peer, i.uint32(10).fork()).join(), 0 !== e.uid && i.uint32(16).int32(e.uid), 0 !== e.typingType && i.uint32(24).int32(e.typingType), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0,
                                uid: 0,
                                typingType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.uid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.typingType = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.uid && i.uint32(8).int32(e.uid), 0 !== e.deviceType && i.uint32(16).int32(e.deviceType), void 0 !== e.deviceCategory && s.hU.encode({
                            value: e.deviceCategory
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                uid: 0,
                                deviceType: 0,
                                deviceCategory: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.uid = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.deviceType = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.deviceCategory = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.uid && i.uint32(8).int32(e.uid), 0 !== e.deviceType && i.uint32(16).int32(e.deviceType), void 0 !== e.deviceCategory && s.hU.encode({
                            value: e.deviceCategory
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                uid: 0,
                                deviceType: 0,
                                deviceCategory: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.uid = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.deviceType = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.deviceCategory = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.uid && i.uint32(8).int32(e.uid), 0 !== e.deviceType && i.uint32(16).int32(e.deviceType), void 0 !== e.deviceCategory && s.hU.encode({
                            value: e.deviceCategory
                        }, i.uint32(26).fork()).join(), void 0 !== e.date && r.j1.encode(e.date, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            d = {
                                uid: 0,
                                deviceType: 0,
                                deviceCategory: void 0,
                                date: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    d.uid = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    d.deviceType = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    d.deviceCategory = s.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    d.date = r.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return d
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.uid && i.uint32(8).int32(e.uid), 0 !== e.date && i.uint32(16).int64(e.date), 0 !== e.deviceType && i.uint32(24).int32(e.deviceType), void 0 !== e.deviceCategory && s.hU.encode({
                            value: e.deviceCategory
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                uid: 0,
                                date: 0,
                                deviceType: 0,
                                deviceCategory: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.uid = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.date = Y(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.deviceType = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.deviceCategory = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.count && i.uint32(16).int32(e.count), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                groupId: 0,
                                count: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.count = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.wX.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && a.wX.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.peer = a.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.count && i.uint32(8).int32(e.count), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                count: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.count = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.limit && s.as.encode({
                            value: e.limit
                        }, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                limit: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.limit = s.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                P = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.presences) c.HU.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                presences: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.presences.push(c.HU.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                M = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.presences) c.HU.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                presences: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.presences.push(c.HU.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                E = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (i.uint32(10).fork(), e.userIds)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                userIds: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.userIds.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) r.userIds.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                R = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.presences) c.HU.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                presences: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.presences.push(c.HU.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                };
            class O {
                Typing(e, i) {
                    return this.rpc.unary(U, e, i)
                }
                StopTyping(e, i) {
                    return this.rpc.unary(q, e, i)
                }
                SetOnline(e, i) {
                    return this.rpc.unary(B, e, i)
                }
                SubscribeToOnline(e, i) {
                    return this.rpc.unary(A, e, i)
                }
                SubscribeFromOnline(e, i) {
                    return this.rpc.unary(D, e, i)
                }
                SubscribeToGroupOnline(e, i) {
                    return this.rpc.unary(z, e, i)
                }
                SubscribeFromGroupOnline(e, i) {
                    return this.rpc.unary(G, e, i)
                }
                GetGroupOnlineCount(e, i) {
                    return this.rpc.unary(x, e, i)
                }
                GetContactsPresences(e, i) {
                    return this.rpc.unary(L, e, i)
                }
                GetGroupMembersPresences(e, i) {
                    return this.rpc.unary(_, e, i)
                }
                GetUsersPresence(e, i) {
                    return this.rpc.unary(F, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.Typing = this.Typing.bind(this), this.StopTyping = this.StopTyping.bind(this), this.SetOnline = this.SetOnline.bind(this), this.SubscribeToOnline = this.SubscribeToOnline.bind(this), this.SubscribeFromOnline = this.SubscribeFromOnline.bind(this), this.SubscribeToGroupOnline = this.SubscribeToGroupOnline.bind(this), this.SubscribeFromGroupOnline = this.SubscribeFromGroupOnline.bind(this), this.GetGroupOnlineCount = this.GetGroupOnlineCount.bind(this), this.GetContactsPresences = this.GetContactsPresences.bind(this), this.GetGroupMembersPresences = this.GetGroupMembersPresences.bind(this), this.GetUsersPresence = this.GetUsersPresence.bind(this)
                }
            }
            let N = {
                    serviceName: "bale.presence.v1.Presence"
                },
                U = {
                    methodName: "Typing",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return u.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                q = {
                    methodName: "StopTyping",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return l.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                B = {
                    methodName: "SetOnline",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                A = {
                    methodName: "SubscribeToOnline",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return p.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                D = {
                    methodName: "SubscribeFromOnline",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                z = {
                    methodName: "SubscribeToGroupOnline",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                G = {
                    methodName: "SubscribeFromGroupOnline",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return h.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                x = {
                    methodName: "GetGroupOnlineCount",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = V.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                L = {
                    methodName: "GetContactsPresences",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return j.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = P.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                _ = {
                    methodName: "GetGroupMembersPresences",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return S.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = M.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                F = {
                    methodName: "GetUsersPresence",
                    service: N,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return E.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = R.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function Y(e) {
                return globalThis.Number(e.toString())
            }
        },
        65952: function(e, i, n) {
            n.d(i, {
                HU: () => p,
                a7: () => r,
                bq: () => s
            });
            var t, o, r, s, d = n(86654),
                a = n(26016),
                c = n(68647),
                u = n(87728);
            (t = r || (r = {}))[t.TYPINGTYPE_UNKNOWN = 0] = "TYPINGTYPE_UNKNOWN", t[t.TYPINGTYPE_TEXT = 1] = "TYPINGTYPE_TEXT", t[t.TYPINGTYPE_VOICERECODRING = 2] = "TYPINGTYPE_VOICERECODRING", t[t.TYPINGTYPE_SENDINGVOICE = 3] = "TYPINGTYPE_SENDINGVOICE", t[t.TYPINGTYPE_SENDINGFILE = 4] = "TYPINGTYPE_SENDINGFILE", t[t.TYPINGTYPE_SENDINGPHOTO = 5] = "TYPINGTYPE_SENDINGPHOTO", t[t.TYPINGTYPE_SENDINGVIDEO = 6] = "TYPINGTYPE_SENDINGVIDEO", t[t.TYPINGTYPE_SENDINGMUSIC = 7] = "TYPINGTYPE_SENDINGMUSIC", t[t.TYPINGTYPE_CHOOSINGSTICKER = 8] = "TYPINGTYPE_CHOOSINGSTICKER", t[t.TYPINGTYPE_CHOSINGGIF = 9] = "TYPINGTYPE_CHOSINGGIF", t[t.TYPINGTYPE_CREATINGGIFTPACKET = 10] = "TYPINGTYPE_CREATINGGIFTPACKET", t[t.TYPINGTYPE_SENDINGALBUM = 11] = "TYPINGTYPE_SENDINGALBUM", t[t.TYPINGTYPE_CHOSINGEMOJI = 12] = "TYPINGTYPE_CHOSINGEMOJI", (o = s || (s = {}))[o.DEVICETYPE_UNKNOWN = 0] = "DEVICETYPE_UNKNOWN", o[o.DEVICETYPE_GENERIC = 1] = "DEVICETYPE_GENERIC", o[o.DEVICETYPE_PC = 2] = "DEVICETYPE_PC", o[o.DEVICETYPE_MOBILE = 3] = "DEVICETYPE_MOBILE", o[o.DEVICETYPE_TABLET = 4] = "DEVICETYPE_TABLET", o[o.DEVICETYPE_WATCH = 5] = "DEVICETYPE_WATCH", o[o.DEVICETYPE_MIRROR = 6] = "DEVICETYPE_MIRROR", o[o.DEVICETYPE_CAR = 7] = "DEVICETYPE_CAR", o[o.DEVICETYPE_TABLE = 8] = "DEVICETYPE_TABLE";
            let l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.peer && u.Uw.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = u.Uw.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.peer && u.Uw.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.userLastSeenUnknown && c._t.encode({
                            value: e.userLastSeenUnknown
                        }, i.uint32(18).fork()).join(), void 0 !== e.date && a.j1.encode(e.date, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0,
                                userLastSeenUnknown: void 0,
                                date: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = u.Uw.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.userLastSeenUnknown = c._t.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.date = a.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.userOnline && l.encode(e.userOnline, i.uint32(10).fork()).join(), void 0 !== e.userOffline && f.encode(e.userOffline, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                userOnline: void 0,
                                userOffline: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.userOnline = l.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.userOffline = f.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                }
        },
        49621: function(e, i, n) {
            n.d(i, {
                Kb: () => N,
                xC: () => U
            });
            var t, o, r = n(86654),
                s = n(78220),
                d = n(23369),
                a = n(81665),
                c = n(67607),
                u = n(45943),
                l = n(34981);
            let f = {
                encode(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                    return 0 !== e.key && i.uint32(8).int64(e.key), 0 !== e.groupId && i.uint32(16).int32(e.groupId), 0 !== e.userCount && i.uint32(24).int32(e.userCount), !1 !== e.isLive && i.uint32(32).bool(e.isLive), "" !== e.link && i.uint32(42).string(e.link), "" !== e.hlsLink && i.uint32(50).string(e.hlsLink), "" !== e.rtmpLink && i.uint32(58).string(e.rtmpLink), 0 !== e.mainMessageId && i.uint32(64).int64(e.mainMessageId), 0 !== e.mainMessageDate && i.uint32(72).int64(e.mainMessageDate), i
                },
                decode(e, i) {
                    let n = e instanceof r.V5 ? e : new r.V5(e),
                        t = void 0 === i ? n.len : n.pos + i,
                        o = {
                            key: 0,
                            groupId: 0,
                            userCount: 0,
                            isLive: !1,
                            link: "",
                            hlsLink: "",
                            rtmpLink: "",
                            mainMessageId: 0,
                            mainMessageDate: 0
                        };
                    for (; n.pos < t;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (8 !== e) break;
                                o.key = p(n.int64());
                                continue;
                            case 2:
                                if (16 !== e) break;
                                o.groupId = n.int32();
                                continue;
                            case 3:
                                if (24 !== e) break;
                                o.userCount = n.int32();
                                continue;
                            case 4:
                                if (32 !== e) break;
                                o.isLive = n.bool();
                                continue;
                            case 5:
                                if (42 !== e) break;
                                o.link = n.string();
                                continue;
                            case 6:
                                if (50 !== e) break;
                                o.hlsLink = n.string();
                                continue;
                            case 7:
                                if (58 !== e) break;
                                o.rtmpLink = n.string();
                                continue;
                            case 8:
                                if (64 !== e) break;
                                o.mainMessageId = p(n.int64());
                                continue;
                            case 9:
                                if (72 !== e) break;
                                o.mainMessageDate = p(n.int64());
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return o
                }
            };

            function p(e) {
                return globalThis.Number(e.toString())
            }
            let v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.info && f.encode(e.info, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                info: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.info = f.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.info && f.encode(e.info, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                info: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.info = f.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            var h = n(33636),
                g = n(89304),
                b = n(55231),
                m = n(29658),
                I = n(43806),
                w = n(65397),
                y = n(87728);
            let C = {
                encode(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                    return void 0 !== e.exPeer && y.Cu.encode(e.exPeer, i.uint32(10).fork()).join(), i
                },
                decode(e, i) {
                    let n = e instanceof r.V5 ? e : new r.V5(e),
                        t = void 0 === i ? n.len : n.pos + i,
                        o = {
                            exPeer: void 0
                        };
                    for (; n.pos < t;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (10 !== e) break;
                                o.exPeer = y.Cu.decode(n, n.uint32());
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return o
                }
            };
            var T = n(68647);
            let S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.type && T.hU.encode({
                            value: e.type
                        }, i.uint32(10).fork()).join(), 0 !== e.bytes.length && i.uint32(18).bytes(e.bytes), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                type: void 0,
                                bytes: new Uint8Array(0)
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.type = T.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.bytes = n.bytes();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.backupOptions) i.uint32(10).string(n);
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                backupOptions: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.backupOptions.push(n.string());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            var P = n(2106),
                M = n(36644),
                E = n(90503);
            (t = o || (o = {}))[t.ACTIONTYPE_UNKNOWN = 0] = "ACTIONTYPE_UNKNOWN", t[t.ACTIONTYPE_URL = 1] = "ACTIONTYPE_URL", t[t.ACTIONTYPE_PEER = 2] = "ACTIONTYPE_PEER";
            let R = {
                encode(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                    return "" !== e.version && i.uint32(10).string(e.version), i
                },
                decode(e, i) {
                    let n = e instanceof r.V5 ? e : new r.V5(e),
                        t = void 0 === i ? n.len : n.pos + i,
                        o = {
                            version: ""
                        };
                    for (; n.pos < t;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (10 !== e) break;
                                o.version = n.string();
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return o
                }
            };
            var O = n(59743);

            function N() {
                return {
                    chatGroupsChanged: void 0,
                    messageSent: void 0,
                    contactRegistered: void 0,
                    typing: void 0,
                    userOnline: void 0,
                    userOffline: void 0,
                    userLastSeen: void 0,
                    userAvatarChanged: void 0,
                    messageRead: void 0,
                    groupUserInvitedObsolete: void 0,
                    groupUserLeaveObsolete: void 0,
                    groupUserKickObsolete: void 0,
                    userNameChanged: void 0,
                    groupOnline: void 0,
                    userLastSeenUnknown: void 0,
                    groupInviteObsolete: void 0,
                    groupTitleChangedObsolete: void 0,
                    groupAvatarChangedObsolete: void 0,
                    contactsAdded: void 0,
                    contactsRemoved: void 0,
                    groupMembersUpdateObsolete: void 0,
                    messageDelete: void 0,
                    chatClear: void 0,
                    chatDelete: void 0,
                    messageReadByMe: void 0,
                    userLocalNameChanged: void 0,
                    messageReceived: void 0,
                    message: void 0,
                    groupNicknameChanged: void 0,
                    rawUpdate: void 0,
                    typingStop: void 0,
                    emptyUpdate: void 0,
                    forceClearCache: void 0,
                    chatShow: void 0,
                    chatArchive: void 0,
                    chatFavourite: void 0,
                    parameterChanged: void 0,
                    userContactsChanged: void 0,
                    ownStickersChanged: void 0,
                    messageContentChanged: void 0,
                    messageDateChanged: void 0,
                    stickerCollectionsChanged: void 0,
                    messageQuotedChanged: void 0,
                    userNickChanged: void 0,
                    userAboutChanged: void 0,
                    userPreferredLanguagesChanged: void 0,
                    groupTopicChangedObsolete: void 0,
                    groupAboutChangedObsolete: void 0,
                    userTimeZoneChanged: void 0,
                    userBotCommandsChanged: void 0,
                    userExtChanged: void 0,
                    userFullExtChanged: void 0,
                    reactionsUpdate: void 0,
                    userExInfoChanged: void 0,
                    userDefaultBankAccountChanged: void 0,
                    userDefaultCardNumberChanged: void 0,
                    userDefaultCardNumberRemoved: void 0,
                    cardinalityChanged: void 0,
                    groupMessagePinned: void 0,
                    groupPinRemoved: void 0,
                    groupRestrictionChanged: void 0,
                    groupTitleChanged: void 0,
                    groupAvatarChanged: void 0,
                    groupMemberChanged: void 0,
                    groupExtChanged: void 0,
                    groupMembersUpdated: void 0,
                    groupMembersBecameAsync: void 0,
                    groupTopicChanged: void 0,
                    groupAboutChanged: void 0,
                    groupFullExtChanged: void 0,
                    groupOwnerChanged: void 0,
                    groupHistoryShared: void 0,
                    groupMembersCountChanged: void 0,
                    groupMemberDiff: void 0,
                    groupCanSendMessagesChanged: void 0,
                    groupCanViewMembersChanged: void 0,
                    groupCanInviteMembersChanged: void 0,
                    groupMemberAdminChanged: void 0,
                    groupBecameOrphaned: void 0,
                    userBlocked: void 0,
                    userUnblocked: void 0,
                    groupExInfoChanged: void 0,
                    channelNickChanged: void 0,
                    requestLogin: void 0,
                    accountDeleted: void 0,
                    requestBankiAccessFor: void 0,
                    walletUpdated: void 0,
                    walletBalanceUpdated: void 0,
                    channelAdvertisementTypeChanged: void 0,
                    channelAdTagIdChanged: void 0,
                    phoneNumberChanged: void 0,
                    groupMemberPermissionsChanged: void 0,
                    groupDefaultPermissionsChanged: void 0,
                    vitrineChanged: void 0,
                    callStarted: void 0,
                    callAccepted: void 0,
                    callDiscarded: void 0,
                    callReceived: void 0,
                    groupCallStarted: void 0,
                    groupCallEnded: void 0,
                    callReactionSent: void 0,
                    callLinkGenerated: void 0,
                    stickerPacksChanged: void 0,
                    messages: void 0,
                    callUpgraded: void 0,
                    peersInvited: void 0,
                    multiPeerCallStarted: void 0,
                    peersStateChanged: void 0,
                    savedGifsChanged: void 0,
                    hidePrivacyBar: void 0,
                    messageReactions: void 0,
                    callJoinRequestReceived: void 0,
                    callJoinRequestAnswered: void 0,
                    mentionReadByMe: void 0,
                    pinnedDialogsChanged: void 0,
                    messageReactionsReadByMe: void 0,
                    messageNewReaction: void 0,
                    callEvent: void 0,
                    startLive: void 0,
                    endLive: void 0,
                    folderCreated: void 0,
                    folderDeleted: void 0,
                    foldersReordered: void 0,
                    dialogsMarkedAsRead: void 0,
                    dialogsMarkedAsUnread: void 0,
                    folderEdited: void 0,
                    callAction: void 0,
                    dialogsUnpinned: void 0,
                    messagePinned: void 0,
                    messagesUnPinned: void 0,
                    transcriptReady: void 0,
                    generalNotificationMessage: void 0,
                    askBotReview: void 0,
                    dialogArchiveStatus: void 0,
                    premiumPurchaseStatus: void 0,
                    endpointChanged: void 0,
                    topicCreated: void 0,
                    topicEdited: void 0,
                    topicDeleted: void 0,
                    messageStreamChunks: void 0,
                    peerHaveScheduleTask: void 0,
                    allContactsRemoved: void 0
                }
            }
            let U = {
                encode(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                    return void 0 !== e.chatGroupsChanged && b.kSH.encode(e.chatGroupsChanged, i.uint32(10).fork()).join(), void 0 !== e.messageSent && b.d6X.encode(e.messageSent, i.uint32(34).fork()).join(), void 0 !== e.contactRegistered && E.kL.encode(e.contactRegistered, i.uint32(42).fork()).join(), void 0 !== e.typing && I.ld.encode(e.typing, i.uint32(50).fork()).join(), void 0 !== e.userOnline && I.sn.encode(e.userOnline, i.uint32(58).fork()).join(), void 0 !== e.userOffline && I._9.encode(e.userOffline, i.uint32(66).fork()).join(), void 0 !== e.userLastSeen && I.It.encode(e.userLastSeen, i.uint32(74).fork()).join(), void 0 !== e.userAvatarChanged && E.GfF.encode(e.userAvatarChanged, i.uint32(130).fork()).join(), void 0 !== e.messageRead && b.T8s.encode(e.messageRead, i.uint32(154).fork()).join(), void 0 !== e.groupUserInvitedObsolete && u.gvF.encode(e.groupUserInvitedObsolete, i.uint32(170).fork()).join(), void 0 !== e.groupUserLeaveObsolete && u.Ej8.encode(e.groupUserLeaveObsolete, i.uint32(186).fork()).join(), void 0 !== e.groupUserKickObsolete && u.Ptc.encode(e.groupUserKickObsolete, i.uint32(194).fork()).join(), void 0 !== e.userNameChanged && E.YDv.encode(e.userNameChanged, i.uint32(258).fork()).join(), void 0 !== e.groupOnline && I.UR.encode(e.groupOnline, i.uint32(266).fork()).join(), void 0 !== e.userLastSeenUnknown && I.QW.encode(e.userLastSeenUnknown, i.uint32(274).fork()).join(), void 0 !== e.groupInviteObsolete && u.XVk.encode(e.groupInviteObsolete, i.uint32(290).fork()).join(), void 0 !== e.groupTitleChangedObsolete && u.Iu3.encode(e.groupTitleChangedObsolete, i.uint32(306).fork()).join(), void 0 !== e.groupAvatarChangedObsolete && u.LDZ.encode(e.groupAvatarChangedObsolete, i.uint32(314).fork()).join(), void 0 !== e.contactsAdded && E.tK$.encode(e.contactsAdded, i.uint32(322).fork()).join(), void 0 !== e.contactsRemoved && E.pn6.encode(e.contactsRemoved, i.uint32(330).fork()).join(), void 0 !== e.groupMembersUpdateObsolete && u.O6W.encode(e.groupMembersUpdateObsolete, i.uint32(354).fork()).join(), void 0 !== e.messageDelete && b.S_s.encode(e.messageDelete, i.uint32(370).fork()).join(), void 0 !== e.chatClear && b.tD3.encode(e.chatClear, i.uint32(378).fork()).join(), void 0 !== e.chatDelete && b.tEF.encode(e.chatDelete, i.uint32(386).fork()).join(), void 0 !== e.messageReadByMe && b.MBu.encode(e.messageReadByMe, i.uint32(402).fork()).join(), void 0 !== e.userLocalNameChanged && E.lHX.encode(e.userLocalNameChanged, i.uint32(410).fork()).join(), void 0 !== e.messageReceived && b.QVQ.encode(e.messageReceived, i.uint32(434).fork()).join(), void 0 !== e.message && b.TIF.encode(e.message, i.uint32(442).fork()).join(), void 0 !== e.groupNicknameChanged && u.tIS.encode(e.groupNicknameChanged, i.uint32(458).fork()).join(), void 0 !== e.rawUpdate && S.encode(e.rawUpdate, i.uint32(642).fork()).join(), void 0 !== e.typingStop && I.XU.encode(e.typingStop, i.uint32(650).fork()).join(), void 0 !== e.emptyUpdate && V.encode(e.emptyUpdate, i.uint32(682).fork()).join(), void 0 !== e.forceClearCache && j.encode(e.forceClearCache, i.uint32(690).fork()).join(), void 0 !== e.chatShow && b.V53.encode(e.chatShow, i.uint32(746).fork()).join(), void 0 !== e.chatArchive && b._Uu.encode(e.chatArchive, i.uint32(754).fork()).join(), void 0 !== e.chatFavourite && b.ZOh.encode(e.chatFavourite, i.uint32(762).fork()).join(), void 0 !== e.parameterChanged && c.X7.encode(e.parameterChanged, i.uint32(1050).fork()).join(), void 0 !== e.userContactsChanged && E.GbF.encode(e.userContactsChanged, i.uint32(1074).fork()).join(), void 0 !== e.ownStickersChanged && l.Sy.encode(e.ownStickersChanged, i.uint32(1290).fork()).join(), void 0 !== e.messageContentChanged && b.wN5.encode(e.messageContentChanged, i.uint32(1298).fork()).join(), void 0 !== e.messageDateChanged && b.$3D.encode(e.messageDateChanged, i.uint32(1306).fork()).join(), void 0 !== e.stickerCollectionsChanged && l.mC.encode(e.stickerCollectionsChanged, i.uint32(1314).fork()).join(), void 0 !== e.messageQuotedChanged && b.xUK.encode(e.messageQuotedChanged, i.uint32(1354).fork()).join(), void 0 !== e.userNickChanged && E.Mto.encode(e.userNickChanged, i.uint32(1674).fork()).join(), void 0 !== e.userAboutChanged && E.yCQ.encode(e.userAboutChanged, i.uint32(1682).fork()).join(), void 0 !== e.userPreferredLanguagesChanged && E.Vue.encode(e.userPreferredLanguagesChanged, i.uint32(1698).fork()).join(), void 0 !== e.groupTopicChangedObsolete && u.jHw.encode(e.groupTopicChangedObsolete, i.uint32(1706).fork()).join(), void 0 !== e.groupAboutChangedObsolete && u.niz.encode(e.groupAboutChangedObsolete, i.uint32(1714).fork()).join(), void 0 !== e.userTimeZoneChanged && E.MvC.encode(e.userTimeZoneChanged, i.uint32(1730).fork()).join(), void 0 !== e.userBotCommandsChanged && E.uvC.encode(e.userBotCommandsChanged, i.uint32(1738).fork()).join(), void 0 !== e.userExtChanged && E.MwP.encode(e.userExtChanged, i.uint32(1746).fork()).join(), void 0 !== e.userFullExtChanged && E.zAs.encode(e.userFullExtChanged, i.uint32(1754).fork()).join(), void 0 !== e.reactionsUpdate && s.T7.encode(e.reactionsUpdate, i.uint32(1778).fork()).join(), void 0 !== e.userExInfoChanged && E.e9n.encode(e.userExInfoChanged, i.uint32(1802).fork()).join(), void 0 !== e.userDefaultBankAccountChanged && E.lJ7.encode(e.userDefaultBankAccountChanged, i.uint32(1810).fork()).join(), void 0 !== e.userDefaultCardNumberChanged && E.JOt.encode(e.userDefaultCardNumberChanged, i.uint32(1818).fork()).join(), void 0 !== e.userDefaultCardNumberRemoved && E.rFN.encode(e.userDefaultCardNumberRemoved, i.uint32(1826).fork()).join(), void 0 !== e.cardinalityChanged && b.oh$.encode(e.cardinalityChanged, i.uint32(2034).fork()).join(), void 0 !== e.groupMessagePinned && u.A5G.encode(e.groupMessagePinned, i.uint32(5770).fork()).join(), void 0 !== e.groupPinRemoved && u.AEM.encode(e.groupPinRemoved, i.uint32(5778).fork()).join(), void 0 !== e.groupRestrictionChanged && u.VUs.encode(e.groupRestrictionChanged, i.uint32(5786).fork()).join(), void 0 !== e.groupTitleChanged && u.tgn.encode(e.groupTitleChanged, i.uint32(20874).fork()).join(), void 0 !== e.groupAvatarChanged && u.Ycm.encode(e.groupAvatarChanged, i.uint32(20882).fork()).join(), void 0 !== e.groupMemberChanged && u.VtI.encode(e.groupMemberChanged, i.uint32(20898).fork()).join(), void 0 !== e.groupExtChanged && u.YmU.encode(e.groupExtChanged, i.uint32(20906).fork()).join(), void 0 !== e.groupMembersUpdated && u.Zop.encode(e.groupMembersUpdated, i.uint32(20914).fork()).join(), void 0 !== e.groupMembersBecameAsync && u.NZ4.encode(e.groupMembersBecameAsync, i.uint32(20922).fork()).join(), void 0 !== e.groupTopicChanged && u.q31.encode(e.groupTopicChanged, i.uint32(20930).fork()).join(), void 0 !== e.groupAboutChanged && u.sDY.encode(e.groupAboutChanged, i.uint32(20938).fork()).join(), void 0 !== e.groupFullExtChanged && u.F5j.encode(e.groupFullExtChanged, i.uint32(20946).fork()).join(), void 0 !== e.groupOwnerChanged && u.kmN.encode(e.groupOwnerChanged, i.uint32(20954).fork()).join(), void 0 !== e.groupHistoryShared && u.WKL.encode(e.groupHistoryShared, i.uint32(20962).fork()).join(), void 0 !== e.groupMembersCountChanged && u.NDw.encode(e.groupMembersCountChanged, i.uint32(20978).fork()).join(), void 0 !== e.groupMemberDiff && u.Mul.encode(e.groupMemberDiff, i.uint32(20986).fork()).join(), void 0 !== e.groupCanSendMessagesChanged && u.F$g.encode(e.groupCanSendMessagesChanged, i.uint32(20994).fork()).join(), void 0 !== e.groupCanViewMembersChanged && u.XQw.encode(e.groupCanViewMembersChanged, i.uint32(21002).fork()).join(), void 0 !== e.groupCanInviteMembersChanged && u.xTW.encode(e.groupCanInviteMembersChanged, i.uint32(21010).fork()).join(), void 0 !== e.groupMemberAdminChanged && u.G4$.encode(e.groupMemberAdminChanged, i.uint32(21018).fork()).join(), void 0 !== e.groupBecameOrphaned && u.NT$.encode(e.groupBecameOrphaned, i.uint32(21026).fork()).join(), void 0 !== e.userBlocked && E.H35.encode(e.userBlocked, i.uint32(21034).fork()).join(), void 0 !== e.userUnblocked && E.WqZ.encode(e.userUnblocked, i.uint32(21042).fork()).join(), void 0 !== e.groupExInfoChanged && u.A0.encode(e.groupExInfoChanged, i.uint32(22922).fork()).join(), void 0 !== e.channelNickChanged && u.ATI.encode(e.channelNickChanged, i.uint32(23042).fork()).join(), void 0 !== e.requestLogin && a.ux.encode(e.requestLogin, i.uint32(31178).fork()).join(), void 0 !== e.accountDeleted && d.eK.encode(e.accountDeleted, i.uint32(348858).fork()).join(), void 0 !== e.requestBankiAccessFor && a.Jv.encode(e.requestBankiAccessFor, i.uint32(499186).fork()).join(), void 0 !== e.walletUpdated && O.e.encode(e.walletUpdated, i.uint32(501858).fork()).join(), void 0 !== e.walletBalanceUpdated && O.iV.encode(e.walletBalanceUpdated, i.uint32(502026).fork()).join(), void 0 !== e.channelAdvertisementTypeChanged && u.EJR.encode(e.channelAdvertisementTypeChanged, i.uint32(422410).fork()).join(), void 0 !== e.channelAdTagIdChanged && u.REg.encode(e.channelAdTagIdChanged, i.uint32(422418).fork()).join(), void 0 !== e.phoneNumberChanged && E.H6N.encode(e.phoneNumberChanged, i.uint32(422426).fork()).join(), void 0 !== e.groupMemberPermissionsChanged && u.nDK.encode(e.groupMemberPermissionsChanged, i.uint32(422434).fork()).join(), void 0 !== e.groupDefaultPermissionsChanged && u.qem.encode(e.groupDefaultPermissionsChanged, i.uint32(422442).fork()).join(), void 0 !== e.vitrineChanged && R.encode(e.vitrineChanged, i.uint32(422450).fork()).join(), void 0 !== e.callStarted && h.FI.encode(e.callStarted, i.uint32(422458).fork()).join(), void 0 !== e.callAccepted && h.Dh.encode(e.callAccepted, i.uint32(422466).fork()).join(), void 0 !== e.callDiscarded && h.PQ.encode(e.callDiscarded, i.uint32(422474).fork()).join(), void 0 !== e.callReceived && h.Vr.encode(e.callReceived, i.uint32(422482).fork()).join(), void 0 !== e.groupCallStarted && h.cN.encode(e.groupCallStarted, i.uint32(422490).fork()).join(), void 0 !== e.groupCallEnded && h.J6.encode(e.groupCallEnded, i.uint32(422498).fork()).join(), void 0 !== e.callReactionSent && h.Df.encode(e.callReactionSent, i.uint32(422506).fork()).join(), void 0 !== e.callLinkGenerated && h.L$.encode(e.callLinkGenerated, i.uint32(422610).fork()).join(), void 0 !== e.stickerPacksChanged && l.BU.encode(e.stickerPacksChanged, i.uint32(422514).fork()).join(), void 0 !== e.messages && b.OSl.encode(e.messages, i.uint32(422522).fork()).join(), void 0 !== e.callUpgraded && h.kZ.encode(e.callUpgraded, i.uint32(422530).fork()).join(), void 0 !== e.peersInvited && h.sz.encode(e.peersInvited, i.uint32(422538).fork()).join(), void 0 !== e.multiPeerCallStarted && h.aL.encode(e.multiPeerCallStarted, i.uint32(422546).fork()).join(), void 0 !== e.peersStateChanged && h.Mk.encode(e.peersStateChanged, i.uint32(422554).fork()).join(), void 0 !== e.savedGifsChanged && l.sf.encode(e.savedGifsChanged, i.uint32(422562).fork()).join(), void 0 !== e.hidePrivacyBar && w.xQ.encode(e.hidePrivacyBar, i.uint32(422594).fork()).join(), void 0 !== e.messageReactions && s.zl.encode(e.messageReactions, i.uint32(422602).fork()).join(), void 0 !== e.callJoinRequestReceived && h.O5.encode(e.callJoinRequestReceived, i.uint32(422618).fork()).join(), void 0 !== e.callJoinRequestAnswered && h.Q8.encode(e.callJoinRequestAnswered, i.uint32(422626).fork()).join(), void 0 !== e.mentionReadByMe && b.dui.encode(e.mentionReadByMe, i.uint32(422634).fork()).join(), void 0 !== e.pinnedDialogsChanged && b.HzF.encode(e.pinnedDialogsChanged, i.uint32(422642).fork()).join(), void 0 !== e.messageReactionsReadByMe && s.qF.encode(e.messageReactionsReadByMe, i.uint32(422658).fork()).join(), void 0 !== e.messageNewReaction && s.Ut.encode(e.messageNewReaction, i.uint32(434586).fork()).join(), void 0 !== e.callEvent && h.m8.encode(e.callEvent, i.uint32(434594).fork()).join(), void 0 !== e.startLive && v.encode(e.startLive, i.uint32(434626).fork()).join(), void 0 !== e.endLive && k.encode(e.endLive, i.uint32(434634).fork()).join(), void 0 !== e.folderCreated && b.imf.encode(e.folderCreated, i.uint32(434658).fork()).join(), void 0 !== e.folderDeleted && b.PTm.encode(e.folderDeleted, i.uint32(434666).fork()).join(), void 0 !== e.foldersReordered && b.$Vf.encode(e.foldersReordered, i.uint32(434674).fork()).join(), void 0 !== e.dialogsMarkedAsRead && b.rN1.encode(e.dialogsMarkedAsRead, i.uint32(434682).fork()).join(), void 0 !== e.dialogsMarkedAsUnread && b.aly.encode(e.dialogsMarkedAsUnread, i.uint32(434690).fork()).join(), void 0 !== e.folderEdited && b.XfM.encode(e.folderEdited, i.uint32(434698).fork()).join(), void 0 !== e.callAction && h.c4.encode(e.callAction, i.uint32(434706).fork()).join(), void 0 !== e.dialogsUnpinned && b._01.encode(e.dialogsUnpinned, i.uint32(434714).fork()).join(), void 0 !== e.messagePinned && b.FSr.encode(e.messagePinned, i.uint32(434722).fork()).join(), void 0 !== e.messagesUnPinned && b.xyJ.encode(e.messagesUnPinned, i.uint32(434730).fork()).join(), void 0 !== e.transcriptReady && M.fd.encode(e.transcriptReady, i.uint32(434738).fork()).join(), void 0 !== e.generalNotificationMessage && M._N.encode(e.generalNotificationMessage, i.uint32(434746).fork()).join(), void 0 !== e.askBotReview && P.a3.encode(e.askBotReview, i.uint32(434754).fork()).join(), void 0 !== e.dialogArchiveStatus && b._mQ.encode(e.dialogArchiveStatus, i.uint32(434762).fork()).join(), void 0 !== e.premiumPurchaseStatus && m.OA.encode(e.premiumPurchaseStatus, i.uint32(434770).fork()).join(), void 0 !== e.endpointChanged && c.zu.encode(e.endpointChanged, i.uint32(434778).fork()).join(), void 0 !== e.topicCreated && b.tww.encode(e.topicCreated, i.uint32(434786).fork()).join(), void 0 !== e.topicEdited && b.ASw.encode(e.topicEdited, i.uint32(434794).fork()).join(), void 0 !== e.topicDeleted && b.oL9.encode(e.topicDeleted, i.uint32(434802).fork()).join(), void 0 !== e.messageStreamChunks && g.nb.encode(e.messageStreamChunks, i.uint32(434810).fork()).join(), void 0 !== e.peerHaveScheduleTask && C.encode(e.peerHaveScheduleTask, i.uint32(434818).fork()).join(), void 0 !== e.allContactsRemoved && E.aTL.encode(e.allContactsRemoved, i.uint32(434826).fork()).join(), i
                },
                decode(e, i) {
                    let n = e instanceof r.V5 ? e : new r.V5(e),
                        t = void 0 === i ? n.len : n.pos + i,
                        o = N();
                    for (; n.pos < t;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (10 !== e) break;
                                o.chatGroupsChanged = b.kSH.decode(n, n.uint32());
                                continue;
                            case 4:
                                if (34 !== e) break;
                                o.messageSent = b.d6X.decode(n, n.uint32());
                                continue;
                            case 5:
                                if (42 !== e) break;
                                o.contactRegistered = E.kL.decode(n, n.uint32());
                                continue;
                            case 6:
                                if (50 !== e) break;
                                o.typing = I.ld.decode(n, n.uint32());
                                continue;
                            case 7:
                                if (58 !== e) break;
                                o.userOnline = I.sn.decode(n, n.uint32());
                                continue;
                            case 8:
                                if (66 !== e) break;
                                o.userOffline = I._9.decode(n, n.uint32());
                                continue;
                            case 9:
                                if (74 !== e) break;
                                o.userLastSeen = I.It.decode(n, n.uint32());
                                continue;
                            case 16:
                                if (130 !== e) break;
                                o.userAvatarChanged = E.GfF.decode(n, n.uint32());
                                continue;
                            case 19:
                                if (154 !== e) break;
                                o.messageRead = b.T8s.decode(n, n.uint32());
                                continue;
                            case 21:
                                if (170 !== e) break;
                                o.groupUserInvitedObsolete = u.gvF.decode(n, n.uint32());
                                continue;
                            case 23:
                                if (186 !== e) break;
                                o.groupUserLeaveObsolete = u.Ej8.decode(n, n.uint32());
                                continue;
                            case 24:
                                if (194 !== e) break;
                                o.groupUserKickObsolete = u.Ptc.decode(n, n.uint32());
                                continue;
                            case 32:
                                if (258 !== e) break;
                                o.userNameChanged = E.YDv.decode(n, n.uint32());
                                continue;
                            case 33:
                                if (266 !== e) break;
                                o.groupOnline = I.UR.decode(n, n.uint32());
                                continue;
                            case 34:
                                if (274 !== e) break;
                                o.userLastSeenUnknown = I.QW.decode(n, n.uint32());
                                continue;
                            case 36:
                                if (290 !== e) break;
                                o.groupInviteObsolete = u.XVk.decode(n, n.uint32());
                                continue;
                            case 38:
                                if (306 !== e) break;
                                o.groupTitleChangedObsolete = u.Iu3.decode(n, n.uint32());
                                continue;
                            case 39:
                                if (314 !== e) break;
                                o.groupAvatarChangedObsolete = u.LDZ.decode(n, n.uint32());
                                continue;
                            case 40:
                                if (322 !== e) break;
                                o.contactsAdded = E.tK$.decode(n, n.uint32());
                                continue;
                            case 41:
                                if (330 !== e) break;
                                o.contactsRemoved = E.pn6.decode(n, n.uint32());
                                continue;
                            case 44:
                                if (354 !== e) break;
                                o.groupMembersUpdateObsolete = u.O6W.decode(n, n.uint32());
                                continue;
                            case 46:
                                if (370 !== e) break;
                                o.messageDelete = b.S_s.decode(n, n.uint32());
                                continue;
                            case 47:
                                if (378 !== e) break;
                                o.chatClear = b.tD3.decode(n, n.uint32());
                                continue;
                            case 48:
                                if (386 !== e) break;
                                o.chatDelete = b.tEF.decode(n, n.uint32());
                                continue;
                            case 50:
                                if (402 !== e) break;
                                o.messageReadByMe = b.MBu.decode(n, n.uint32());
                                continue;
                            case 51:
                                if (410 !== e) break;
                                o.userLocalNameChanged = E.lHX.decode(n, n.uint32());
                                continue;
                            case 54:
                                if (434 !== e) break;
                                o.messageReceived = b.QVQ.decode(n, n.uint32());
                                continue;
                            case 55:
                                if (442 !== e) break;
                                o.message = b.TIF.decode(n, n.uint32());
                                continue;
                            case 57:
                                if (458 !== e) break;
                                o.groupNicknameChanged = u.tIS.decode(n, n.uint32());
                                continue;
                            case 80:
                                if (642 !== e) break;
                                o.rawUpdate = S.decode(n, n.uint32());
                                continue;
                            case 81:
                                if (650 !== e) break;
                                o.typingStop = I.XU.decode(n, n.uint32());
                                continue;
                            case 85:
                                if (682 !== e) break;
                                o.emptyUpdate = V.decode(n, n.uint32());
                                continue;
                            case 86:
                                if (690 !== e) break;
                                o.forceClearCache = j.decode(n, n.uint32());
                                continue;
                            case 93:
                                if (746 !== e) break;
                                o.chatShow = b.V53.decode(n, n.uint32());
                                continue;
                            case 94:
                                if (754 !== e) break;
                                o.chatArchive = b._Uu.decode(n, n.uint32());
                                continue;
                            case 95:
                                if (762 !== e) break;
                                o.chatFavourite = b.ZOh.decode(n, n.uint32());
                                continue;
                            case 131:
                                if (1050 !== e) break;
                                o.parameterChanged = c.X7.decode(n, n.uint32());
                                continue;
                            case 134:
                                if (1074 !== e) break;
                                o.userContactsChanged = E.GbF.decode(n, n.uint32());
                                continue;
                            case 161:
                                if (1290 !== e) break;
                                o.ownStickersChanged = l.Sy.decode(n, n.uint32());
                                continue;
                            case 162:
                                if (1298 !== e) break;
                                o.messageContentChanged = b.wN5.decode(n, n.uint32());
                                continue;
                            case 163:
                                if (1306 !== e) break;
                                o.messageDateChanged = b.$3D.decode(n, n.uint32());
                                continue;
                            case 164:
                                if (1314 !== e) break;
                                o.stickerCollectionsChanged = l.mC.decode(n, n.uint32());
                                continue;
                            case 169:
                                if (1354 !== e) break;
                                o.messageQuotedChanged = b.xUK.decode(n, n.uint32());
                                continue;
                            case 209:
                                if (1674 !== e) break;
                                o.userNickChanged = E.Mto.decode(n, n.uint32());
                                continue;
                            case 210:
                                if (1682 !== e) break;
                                o.userAboutChanged = E.yCQ.decode(n, n.uint32());
                                continue;
                            case 212:
                                if (1698 !== e) break;
                                o.userPreferredLanguagesChanged = E.Vue.decode(n, n.uint32());
                                continue;
                            case 213:
                                if (1706 !== e) break;
                                o.groupTopicChangedObsolete = u.jHw.decode(n, n.uint32());
                                continue;
                            case 214:
                                if (1714 !== e) break;
                                o.groupAboutChangedObsolete = u.niz.decode(n, n.uint32());
                                continue;
                            case 216:
                                if (1730 !== e) break;
                                o.userTimeZoneChanged = E.MvC.decode(n, n.uint32());
                                continue;
                            case 217:
                                if (1738 !== e) break;
                                o.userBotCommandsChanged = E.uvC.decode(n, n.uint32());
                                continue;
                            case 218:
                                if (1746 !== e) break;
                                o.userExtChanged = E.MwP.decode(n, n.uint32());
                                continue;
                            case 219:
                                if (1754 !== e) break;
                                o.userFullExtChanged = E.zAs.decode(n, n.uint32());
                                continue;
                            case 222:
                                if (1778 !== e) break;
                                o.reactionsUpdate = s.T7.decode(n, n.uint32());
                                continue;
                            case 225:
                                if (1802 !== e) break;
                                o.userExInfoChanged = E.e9n.decode(n, n.uint32());
                                continue;
                            case 226:
                                if (1810 !== e) break;
                                o.userDefaultBankAccountChanged = E.lJ7.decode(n, n.uint32());
                                continue;
                            case 227:
                                if (1818 !== e) break;
                                o.userDefaultCardNumberChanged = E.JOt.decode(n, n.uint32());
                                continue;
                            case 228:
                                if (1826 !== e) break;
                                o.userDefaultCardNumberRemoved = E.rFN.decode(n, n.uint32());
                                continue;
                            case 254:
                                if (2034 !== e) break;
                                o.cardinalityChanged = b.oh$.decode(n, n.uint32());
                                continue;
                            case 721:
                                if (5770 !== e) break;
                                o.groupMessagePinned = u.A5G.decode(n, n.uint32());
                                continue;
                            case 722:
                                if (5778 !== e) break;
                                o.groupPinRemoved = u.AEM.decode(n, n.uint32());
                                continue;
                            case 723:
                                if (5786 !== e) break;
                                o.groupRestrictionChanged = u.VUs.decode(n, n.uint32());
                                continue;
                            case 2609:
                                if (20874 !== e) break;
                                o.groupTitleChanged = u.tgn.decode(n, n.uint32());
                                continue;
                            case 2610:
                                if (20882 !== e) break;
                                o.groupAvatarChanged = u.Ycm.decode(n, n.uint32());
                                continue;
                            case 2612:
                                if (20898 !== e) break;
                                o.groupMemberChanged = u.VtI.decode(n, n.uint32());
                                continue;
                            case 2613:
                                if (20906 !== e) break;
                                o.groupExtChanged = u.YmU.decode(n, n.uint32());
                                continue;
                            case 2614:
                                if (20914 !== e) break;
                                o.groupMembersUpdated = u.Zop.decode(n, n.uint32());
                                continue;
                            case 2615:
                                if (20922 !== e) break;
                                o.groupMembersBecameAsync = u.NZ4.decode(n, n.uint32());
                                continue;
                            case 2616:
                                if (20930 !== e) break;
                                o.groupTopicChanged = u.q31.decode(n, n.uint32());
                                continue;
                            case 2617:
                                if (20938 !== e) break;
                                o.groupAboutChanged = u.sDY.decode(n, n.uint32());
                                continue;
                            case 2618:
                                if (20946 !== e) break;
                                o.groupFullExtChanged = u.F5j.decode(n, n.uint32());
                                continue;
                            case 2619:
                                if (20954 !== e) break;
                                o.groupOwnerChanged = u.kmN.decode(n, n.uint32());
                                continue;
                            case 2620:
                                if (20962 !== e) break;
                                o.groupHistoryShared = u.WKL.decode(n, n.uint32());
                                continue;
                            case 2622:
                                if (20978 !== e) break;
                                o.groupMembersCountChanged = u.NDw.decode(n, n.uint32());
                                continue;
                            case 2623:
                                if (20986 !== e) break;
                                o.groupMemberDiff = u.Mul.decode(n, n.uint32());
                                continue;
                            case 2624:
                                if (20994 !== e) break;
                                o.groupCanSendMessagesChanged = u.F$g.decode(n, n.uint32());
                                continue;
                            case 2625:
                                if (21002 !== e) break;
                                o.groupCanViewMembersChanged = u.XQw.decode(n, n.uint32());
                                continue;
                            case 2626:
                                if (21010 !== e) break;
                                o.groupCanInviteMembersChanged = u.xTW.decode(n, n.uint32());
                                continue;
                            case 2627:
                                if (21018 !== e) break;
                                o.groupMemberAdminChanged = u.G4$.decode(n, n.uint32());
                                continue;
                            case 2628:
                                if (21026 !== e) break;
                                o.groupBecameOrphaned = u.NT$.decode(n, n.uint32());
                                continue;
                            case 2629:
                                if (21034 !== e) break;
                                o.userBlocked = E.H35.decode(n, n.uint32());
                                continue;
                            case 2630:
                                if (21042 !== e) break;
                                o.userUnblocked = E.WqZ.decode(n, n.uint32());
                                continue;
                            case 2865:
                                if (22922 !== e) break;
                                o.groupExInfoChanged = u.A0.decode(n, n.uint32());
                                continue;
                            case 2880:
                                if (23042 !== e) break;
                                o.channelNickChanged = u.ATI.decode(n, n.uint32());
                                continue;
                            case 3897:
                                if (31178 !== e) break;
                                o.requestLogin = a.ux.decode(n, n.uint32());
                                continue;
                            case 43607:
                                if (348858 !== e) break;
                                o.accountDeleted = d.eK.decode(n, n.uint32());
                                continue;
                            case 62398:
                                if (499186 !== e) break;
                                o.requestBankiAccessFor = a.Jv.decode(n, n.uint32());
                                continue;
                            case 62732:
                                if (501858 !== e) break;
                                o.walletUpdated = O.e.decode(n, n.uint32());
                                continue;
                            case 62753:
                                if (502026 !== e) break;
                                o.walletBalanceUpdated = O.iV.decode(n, n.uint32());
                                continue;
                            case 52801:
                                if (422410 !== e) break;
                                o.channelAdvertisementTypeChanged = u.EJR.decode(n, n.uint32());
                                continue;
                            case 52802:
                                if (422418 !== e) break;
                                o.channelAdTagIdChanged = u.REg.decode(n, n.uint32());
                                continue;
                            case 52803:
                                if (422426 !== e) break;
                                o.phoneNumberChanged = E.H6N.decode(n, n.uint32());
                                continue;
                            case 52804:
                                if (422434 !== e) break;
                                o.groupMemberPermissionsChanged = u.nDK.decode(n, n.uint32());
                                continue;
                            case 52805:
                                if (422442 !== e) break;
                                o.groupDefaultPermissionsChanged = u.qem.decode(n, n.uint32());
                                continue;
                            case 52806:
                                if (422450 !== e) break;
                                o.vitrineChanged = R.decode(n, n.uint32());
                                continue;
                            case 52807:
                                if (422458 !== e) break;
                                o.callStarted = h.FI.decode(n, n.uint32());
                                continue;
                            case 52808:
                                if (422466 !== e) break;
                                o.callAccepted = h.Dh.decode(n, n.uint32());
                                continue;
                            case 52809:
                                if (422474 !== e) break;
                                o.callDiscarded = h.PQ.decode(n, n.uint32());
                                continue;
                            case 52810:
                                if (422482 !== e) break;
                                o.callReceived = h.Vr.decode(n, n.uint32());
                                continue;
                            case 52811:
                                if (422490 !== e) break;
                                o.groupCallStarted = h.cN.decode(n, n.uint32());
                                continue;
                            case 52812:
                                if (422498 !== e) break;
                                o.groupCallEnded = h.J6.decode(n, n.uint32());
                                continue;
                            case 52813:
                                if (422506 !== e) break;
                                o.callReactionSent = h.Df.decode(n, n.uint32());
                                continue;
                            case 52826:
                                if (422610 !== e) break;
                                o.callLinkGenerated = h.L$.decode(n, n.uint32());
                                continue;
                            case 52814:
                                if (422514 !== e) break;
                                o.stickerPacksChanged = l.BU.decode(n, n.uint32());
                                continue;
                            case 52815:
                                if (422522 !== e) break;
                                o.messages = b.OSl.decode(n, n.uint32());
                                continue;
                            case 52816:
                                if (422530 !== e) break;
                                o.callUpgraded = h.kZ.decode(n, n.uint32());
                                continue;
                            case 52817:
                                if (422538 !== e) break;
                                o.peersInvited = h.sz.decode(n, n.uint32());
                                continue;
                            case 52818:
                                if (422546 !== e) break;
                                o.multiPeerCallStarted = h.aL.decode(n, n.uint32());
                                continue;
                            case 52819:
                                if (422554 !== e) break;
                                o.peersStateChanged = h.Mk.decode(n, n.uint32());
                                continue;
                            case 52820:
                                if (422562 !== e) break;
                                o.savedGifsChanged = l.sf.decode(n, n.uint32());
                                continue;
                            case 52824:
                                if (422594 !== e) break;
                                o.hidePrivacyBar = w.xQ.decode(n, n.uint32());
                                continue;
                            case 52825:
                                if (422602 !== e) break;
                                o.messageReactions = s.zl.decode(n, n.uint32());
                                continue;
                            case 52827:
                                if (422618 !== e) break;
                                o.callJoinRequestReceived = h.O5.decode(n, n.uint32());
                                continue;
                            case 52828:
                                if (422626 !== e) break;
                                o.callJoinRequestAnswered = h.Q8.decode(n, n.uint32());
                                continue;
                            case 52829:
                                if (422634 !== e) break;
                                o.mentionReadByMe = b.dui.decode(n, n.uint32());
                                continue;
                            case 52830:
                                if (422642 !== e) break;
                                o.pinnedDialogsChanged = b.HzF.decode(n, n.uint32());
                                continue;
                            case 52832:
                                if (422658 !== e) break;
                                o.messageReactionsReadByMe = s.qF.decode(n, n.uint32());
                                continue;
                            case 54323:
                                if (434586 !== e) break;
                                o.messageNewReaction = s.Ut.decode(n, n.uint32());
                                continue;
                            case 54324:
                                if (434594 !== e) break;
                                o.callEvent = h.m8.decode(n, n.uint32());
                                continue;
                            case 54328:
                                if (434626 !== e) break;
                                o.startLive = v.decode(n, n.uint32());
                                continue;
                            case 54329:
                                if (434634 !== e) break;
                                o.endLive = k.decode(n, n.uint32());
                                continue;
                            case 54332:
                                if (434658 !== e) break;
                                o.folderCreated = b.imf.decode(n, n.uint32());
                                continue;
                            case 54333:
                                if (434666 !== e) break;
                                o.folderDeleted = b.PTm.decode(n, n.uint32());
                                continue;
                            case 54334:
                                if (434674 !== e) break;
                                o.foldersReordered = b.$Vf.decode(n, n.uint32());
                                continue;
                            case 54335:
                                if (434682 !== e) break;
                                o.dialogsMarkedAsRead = b.rN1.decode(n, n.uint32());
                                continue;
                            case 54336:
                                if (434690 !== e) break;
                                o.dialogsMarkedAsUnread = b.aly.decode(n, n.uint32());
                                continue;
                            case 54337:
                                if (434698 !== e) break;
                                o.folderEdited = b.XfM.decode(n, n.uint32());
                                continue;
                            case 54338:
                                if (434706 !== e) break;
                                o.callAction = h.c4.decode(n, n.uint32());
                                continue;
                            case 54339:
                                if (434714 !== e) break;
                                o.dialogsUnpinned = b._01.decode(n, n.uint32());
                                continue;
                            case 54340:
                                if (434722 !== e) break;
                                o.messagePinned = b.FSr.decode(n, n.uint32());
                                continue;
                            case 54341:
                                if (434730 !== e) break;
                                o.messagesUnPinned = b.xyJ.decode(n, n.uint32());
                                continue;
                            case 54342:
                                if (434738 !== e) break;
                                o.transcriptReady = M.fd.decode(n, n.uint32());
                                continue;
                            case 54343:
                                if (434746 !== e) break;
                                o.generalNotificationMessage = M._N.decode(n, n.uint32());
                                continue;
                            case 54344:
                                if (434754 !== e) break;
                                o.askBotReview = P.a3.decode(n, n.uint32());
                                continue;
                            case 54345:
                                if (434762 !== e) break;
                                o.dialogArchiveStatus = b._mQ.decode(n, n.uint32());
                                continue;
                            case 54346:
                                if (434770 !== e) break;
                                o.premiumPurchaseStatus = m.OA.decode(n, n.uint32());
                                continue;
                            case 54347:
                                if (434778 !== e) break;
                                o.endpointChanged = c.zu.decode(n, n.uint32());
                                continue;
                            case 54348:
                                if (434786 !== e) break;
                                o.topicCreated = b.tww.decode(n, n.uint32());
                                continue;
                            case 54349:
                                if (434794 !== e) break;
                                o.topicEdited = b.ASw.decode(n, n.uint32());
                                continue;
                            case 54350:
                                if (434802 !== e) break;
                                o.topicDeleted = b.oL9.decode(n, n.uint32());
                                continue;
                            case 54351:
                                if (434810 !== e) break;
                                o.messageStreamChunks = g.nb.decode(n, n.uint32());
                                continue;
                            case 54352:
                                if (434818 !== e) break;
                                o.peerHaveScheduleTask = C.decode(n, n.uint32());
                                continue;
                            case 54353:
                                if (434826 !== e) break;
                                o.allContactsRemoved = E.aTL.decode(n, n.uint32());
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return o
                }
            }
        },
        2106: function(e, i, n) {
            n.d(i, {
                CK: () => y,
                pF: () => o,
                a3: () => w
            });
            var t, o, r = n(51116),
                s = n(86654),
                d = n(12314),
                a = n(68647);
            let c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.id && i.uint32(8).int32(e.id), "" !== e.name && i.uint32(18).string(e.name), void 0 !== e.avatar && d.eu.encode(e.avatar, i.uint32(26).fork()).join(), void 0 !== e.averageRating && a.uN.encode({
                            value: e.averageRating
                        }, i.uint32(34).fork()).join(), "" !== e.description && i.uint32(42).string(e.description), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                id: 0,
                                name: "",
                                avatar: void 0,
                                averageRating: void 0,
                                description: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.name = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.avatar = d.eu.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.averageRating = a.uN.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.description = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of (0 !== e.sectionId && i.uint32(8).int32(e.sectionId), "" !== e.sectionName && i.uint32(18).string(e.sectionName), e.bots)) c.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sectionId: 0,
                                sectionName: "",
                                bots: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.sectionId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.sectionName = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.bots.push(c.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            (t = o || (o = {}))[t.UNKNOWN = 0] = "UNKNOWN", t[t.CHAT = 1] = "CHAT", t[t.MINIAPP = 2] = "MINIAPP";
            let l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.botId && i.uint32(8).int32(e.botId), void 0 !== e.rating && a.as.encode({
                            value: e.rating
                        }, i.uint32(18).fork()).join(), void 0 !== e.comment && a.hU.encode({
                            value: e.comment
                        }, i.uint32(26).fork()).join(), void 0 !== e.payload && a.hU.encode({
                            value: e.payload
                        }, i.uint32(34).fork()).join(), 0 !== e.origin && i.uint32(40).int32(e.origin), void 0 !== e.language && a.hU.encode({
                            value: e.language
                        }, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                botId: 0,
                                rating: void 0,
                                comment: void 0,
                                payload: void 0,
                                origin: 0,
                                language: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.botId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.rating = a.as.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.comment = a.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.payload = a.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.origin = n.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.language = a.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return !1 !== e.shouldAskBaleReview && i.uint32(8).bool(e.shouldAskBaleReview), "" !== e.baleReviewText && i.uint32(18).string(e.baleReviewText), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                shouldAskBaleReview: !1,
                                baleReviewText: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.shouldAskBaleReview = n.bool();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.baleReviewText = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.botId && i.uint32(8).int32(e.botId), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                botId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.botId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of ("" !== e.name && i.uint32(10).string(e.name), "" !== e.nickname && i.uint32(18).string(e.nickname), void 0 !== e.avatar && d.eu.encode(e.avatar, i.uint32(58).fork()).join(), 0 !== e.activeUsers && i.uint32(24).int32(e.activeUsers), void 0 !== e.averageRating && a.uN.encode({
                                value: e.averageRating
                            }, i.uint32(34).fork()).join(), "" !== e.description && i.uint32(42).string(e.description), "" !== e.intro && i.uint32(50).string(e.intro), e.imageLinks)) i.uint32(66).string(n);
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                name: "",
                                nickname: "",
                                avatar: void 0,
                                activeUsers: 0,
                                averageRating: void 0,
                                description: "",
                                intro: "",
                                imageLinks: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.name = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.nickname = n.string();
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.avatar = d.eu.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.activeUsers = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.averageRating = a.uN.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.description = n.string();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.intro = n.string();
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    o.imageLinks.push(n.string());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of e.sections) u.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sections: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.sections.push(u.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.sectionId && i.uint32(8).int32(e.sectionId), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sectionId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.sectionId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        for (let n of (0 !== e.sectionId && i.uint32(8).int32(e.sectionId), "" !== e.sectionName && i.uint32(18).string(e.sectionName), e.bots)) c.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sectionId: 0,
                                sectionName: "",
                                bots: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.sectionId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.sectionName = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.bots.push(c.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.botId && i.uint32(8).int32(e.botId), "" !== e.payload && i.uint32(18).string(e.payload), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                botId: 0,
                                payload: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.botId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.payload = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new s.fI;
                        return 0 !== e.botId && i.uint32(8).int32(e.botId), void 0 !== e.previousRating && a.as.encode({
                            value: e.previousRating
                        }, i.uint32(18).fork()).join(), void 0 !== e.previousComment && a.hU.encode({
                            value: e.previousComment
                        }, i.uint32(26).fork()).join(), void 0 !== e.payload && a.hU.encode({
                            value: e.payload
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof s.V5 ? e : new s.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                botId: 0,
                                previousRating: void 0,
                                previousComment: void 0,
                                payload: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.botId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.previousRating = a.as.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.previousComment = a.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.payload = a.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            class y {
                SubmitReview(e, i) {
                    return this.rpc.unary(T, e, i)
                }
                GetBotPage(e, i) {
                    return this.rpc.unary(S, e, i)
                }
                GetHomePage(e, i) {
                    return this.rpc.unary(V, e, i)
                }
                GetSectionPage(e, i) {
                    return this.rpc.unary(j, e, i)
                }
                AskBotReviewCallback(e, i) {
                    return this.rpc.unary(P, e, i)
                }
                constructor(e) {
                    (0, r._)(this, "rpc", void 0), this.rpc = e, this.SubmitReview = this.SubmitReview.bind(this), this.GetBotPage = this.GetBotPage.bind(this), this.GetHomePage = this.GetHomePage.bind(this), this.GetSectionPage = this.GetSectionPage.bind(this), this.AskBotReviewCallback = this.AskBotReviewCallback.bind(this)
                }
            }
            let C = {
                    serviceName: "bale.timche.v1.Timche"
                },
                T = {
                    methodName: "SubmitReview",
                    service: C,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return l.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = f.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                S = {
                    methodName: "GetBotPage",
                    service: C,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return p.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = v.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                V = {
                    methodName: "GetHomePage",
                    service: C,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                j = {
                    methodName: "GetSectionPage",
                    service: C,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = b.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                P = {
                    methodName: "AskBotReviewCallback",
                    service: C,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return m.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = I.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                }
        },
        36644: function(e, i, n) {
            n.d(i, {
                m1: () => w,
                fd: () => b,
                _N: () => m,
                bP: () => I
            });
            var t = n(51116),
                o = n(86654),
                r = n(76421),
                s = n(55935),
                d = n(87728),
                a = n(26016);
            let c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.documentMessage && r.dHq.encode(e.documentMessage, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                documentMessage: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.documentMessage = r.dHq.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                u = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "0" !== e.voiceFileId && i.uint32(8).int64(e.voiceFileId), "0" !== e.voiceAccessHash && i.uint32(16).int64(e.voiceAccessHash), 0 !== e.reactionType && i.uint32(24).int32(e.reactionType), void 0 !== e.outPeer && d.AQ.encode(e.outPeer, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                voiceFileId: "0",
                                voiceAccessHash: "0",
                                reactionType: 0,
                                outPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.voiceFileId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.voiceAccessHash = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.reactionType = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.outPeer = d.AQ.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.code && i.uint32(8).int32(e.code), "" !== e.message && i.uint32(18).string(e.message), void 0 !== e.details && a.I8.encode(e.details, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                code: 0,
                                message: "",
                                details: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.code = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.message = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.details = a.I8.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                f = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.customOpenUrlAction && p.encode(e.customOpenUrlAction, i.uint32(10).fork()).join(), void 0 !== e.customDoNothingAction && v.encode(e.customDoNothingAction, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                customOpenUrlAction: void 0,
                                customDoNothingAction: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.customOpenUrlAction = p.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.customDoNothingAction = v.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                p = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.url && i.uint32(10).string(e.url), "" !== e.buttonTitle && i.uint32(18).string(e.buttonTitle), !1 !== e.shouldSearchInternal && i.uint32(24).bool(e.shouldSearchInternal), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                url: "",
                                buttonTitle: "",
                                shouldSearchInternal: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.url = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.buttonTitle = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.shouldSearchInternal = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.voice && r.dHq.encode(e.voice, i.uint32(10).fork()).join(), void 0 !== e.outPeer && d.AQ.encode(e.outPeer, i.uint32(18).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                voice: void 0,
                                outPeer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.voice = r.dHq.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.outPeer = d.AQ.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.mustWait && i.uint32(8).bool(e.mustWait), void 0 !== e.downloadSource && c.encode(e.downloadSource, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                mustWait: void 0,
                                downloadSource: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.mustWait = n.bool();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.downloadSource = c.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.transcriptReactionEvent && u.encode(e.transcriptReactionEvent, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                transcriptReactionEvent: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.transcriptReactionEvent = u.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.downloadSource && c.encode(e.downloadSource, i.uint32(10).fork()).join(), void 0 !== e.outPeer && d.AQ.encode(e.outPeer, i.uint32(18).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(26).fork()).join(), void 0 !== e.error && l.encode(e.error, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                downloadSource: void 0,
                                outPeer: void 0,
                                messageId: void 0,
                                error: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.downloadSource = c.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.outPeer = d.AQ.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.error = l.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.title && i.uint32(10).string(e.title), "" !== e.description && i.uint32(18).string(e.description), void 0 !== e.action && f.encode(e.action, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            r = {
                                title: "",
                                description: "",
                                action: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.title = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.description = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.action = f.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.chunkId && i.uint32(8).int32(e.chunkId), "" !== e.content && i.uint32(18).string(e.content), void 0 !== e.outPeer && d.AQ.encode(e.outPeer, i.uint32(26).fork()).join(), void 0 !== e.messageId && r.vzI.encode(e.messageId, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                chunkId: 0,
                                content: "",
                                outPeer: void 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.chunkId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.content = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.outPeer = d.AQ.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.messageId = r.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                };
            class w {
                GetTranscript(e, i) {
                    return this.rpc.unary(C, e, i)
                }
                SendEvent(e, i) {
                    return this.rpc.unary(T, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.GetTranscript = this.GetTranscript.bind(this), this.SendEvent = this.SendEvent.bind(this)
                }
            }
            let y = {
                    serviceName: "bale.turing.v1.AI"
                },
                C = {
                    methodName: "GetTranscript",
                    service: y,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = h.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                T = {
                    methodName: "SendEvent",
                    service: y,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = s.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                }
        },
        59743: function(e, i, n) {
            n.d(i, {
                iV: () => x,
                DF: () => L,
                e: () => G
            });
            var t, o, r, s, d = n(51116),
                a = n(86654),
                c = n(26016),
                u = n(68647),
                l = n(76421),
                f = n(55935),
                p = n(87728);
            (t = r || (r = {}))[t.CURRENCY_RIAL = 0] = "CURRENCY_RIAL", t[t.CURRENCY_SCORE = 1] = "CURRENCY_SCORE", (o = s || (s = {}))[o.AGREEMENTSTATUS_ACTIVE = 0] = "AGREEMENTSTATUS_ACTIVE", o[o.AGREEMENTSTATUS_INACTIVE = 1] = "AGREEMENTSTATUS_INACTIVE";
            let v = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return 0 !== e.currency && i.uint32(8).int32(e.currency), "0" !== e.amount && i.uint32(16).int64(e.amount), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                currency: 0,
                                amount: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.currency = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                k = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        for (let n of ("" !== e.id && i.uint32(10).string(e.id), e.balances)) v.encode(n, i.uint32(18).fork()).join();
                        return void 0 !== e.walletLink && u.hU.encode({
                            value: e.walletLink
                        }, i.uint32(26).fork()).join(), void 0 !== e.isActive && u._t.encode({
                            value: e.isActive
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                id: "",
                                balances: [],
                                walletLink: void 0,
                                isActive: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.id = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.balances.push(v.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.walletLink = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.isActive = u._t.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                h = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "0" !== e.amount && i.uint32(8).int64(e.amount), 0 !== e.currency && i.uint32(16).int32(e.currency), void 0 !== e.description && u.hU.encode({
                            value: e.description
                        }, i.uint32(26).fork()).join(), 0 !== e.dateTime && i.uint32(32).int64(e.dateTime), void 0 !== e.sourceWalletId && u.hU.encode({
                            value: e.sourceWalletId
                        }, i.uint32(42).fork()).join(), void 0 !== e.targetWalletId && u.hU.encode({
                            value: e.targetWalletId
                        }, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                amount: "0",
                                currency: 0,
                                description: void 0,
                                dateTime: 0,
                                sourceWalletId: void 0,
                                targetWalletId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.amount = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.currency = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.description = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.dateTime = globalThis.Number(n.int64().toString());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.sourceWalletId = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.targetWalletId = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                g = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.highCeilingPrice && c.j1.encode(e.highCeilingPrice, i.uint32(10).fork()).join(), void 0 !== e.limitationType && u.hU.encode({
                            value: e.limitationType
                        }, i.uint32(18).fork()).join(), void 0 !== e.limitationPeriod && u.hU.encode({
                            value: e.limitationPeriod
                        }, i.uint32(26).fork()).join(), void 0 !== e.limitationPriority && u.hU.encode({
                            value: e.limitationPriority
                        }, i.uint32(34).fork()).join(), void 0 !== e.status && u.hU.encode({
                            value: e.status
                        }, i.uint32(42).fork()).join(), void 0 !== e.value && c.j1.encode(e.value, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                highCeilingPrice: void 0,
                                limitationType: void 0,
                                limitationPeriod: void 0,
                                limitationPriority: void 0,
                                status: void 0,
                                value: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.highCeilingPrice = c.j1.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.limitationType = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.limitationPeriod = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.limitationPriority = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.status = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.value = c.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                b = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                m = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        for (let n of e.wallets) k.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                wallets: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.wallets.push(k.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                I = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.walletId && i.uint32(10).string(e.walletId), 0 !== e.amount && i.uint32(16).int64(e.amount), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                walletId: "",
                                amount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.walletId = n.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = et(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                w = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.endpoint && i.uint32(18).string(e.endpoint), "" !== e.terminalId && i.uint32(26).string(e.terminalId), "" !== e.merchantId && i.uint32(34).string(e.merchantId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                endpoint: "",
                                terminalId: "",
                                merchantId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.terminalId = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.merchantId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.targetWalletId && i.uint32(10).string(e.targetWalletId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                targetWalletId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.targetWalletId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                C = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.targetWalletName && i.uint32(10).string(e.targetWalletName), void 0 !== e.targetUserId && u.as.encode({
                            value: e.targetUserId
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                targetWalletName: "",
                                targetUserId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.targetWalletName = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.targetUserId = u.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                T = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.targetPeer && p.xM.encode(e.targetPeer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                targetPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.targetPeer = p.xM.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                S = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.targetWalletName && i.uint32(10).string(e.targetWalletName), void 0 !== e.targetUserId && u.as.encode({
                            value: e.targetUserId
                        }, i.uint32(18).fork()).join(), "" !== e.walletId && i.uint32(26).string(e.walletId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                targetWalletName: "",
                                targetUserId: void 0,
                                walletId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.targetWalletName = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.targetUserId = u.as.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.walletId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                V = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.sourceWalletId && i.uint32(10).string(e.sourceWalletId), void 0 !== e.msg && l.J2R.encode(e.msg, i.uint32(18).fork()).join(), void 0 !== e.amount && c.j1.encode(e.amount, i.uint32(26).fork()).join(), void 0 !== e.regarding && u.hU.encode({
                            value: e.regarding
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sourceWalletId: "",
                                msg: void 0,
                                amount: void 0,
                                regarding: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.sourceWalletId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.msg = l.J2R.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.amount = c.j1.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.regarding = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                j = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.walletId && i.uint32(10).string(e.walletId), void 0 !== e.pageNumber && u.as.encode({
                            value: e.pageNumber
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                walletId: "",
                                pageNumber: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.walletId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.pageNumber = u.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                P = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        for (let n of e.invoices) h.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                invoices: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.invoices.push(h.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                M = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.walletId && i.uint32(10).string(e.walletId), "" !== e.accountNo && i.uint32(18).string(e.accountNo), "" !== e.nationalId && i.uint32(26).string(e.nationalId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                walletId: "",
                                accountNo: "",
                                nationalId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.walletId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.accountNo = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.nationalId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                E = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.name && i.uint32(18).string(e.name), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                name: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.name = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                R = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), 0 !== e.amount && i.uint32(16).int64(e.amount), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                amount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = et(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                O = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.nationalId && i.uint32(10).string(e.nationalId), void 0 !== e.isAutoActivated && u._t.encode({
                            value: e.isAutoActivated
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                nationalId: "",
                                isAutoActivated: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.nationalId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.isAutoActivated = u._t.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                N = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.msg && l.J2R.encode(e.msg, i.uint32(10).fork()).join(), void 0 !== e.amount && c.j1.encode(e.amount, i.uint32(18).fork()).join(), void 0 !== e.regarding && u.hU.encode({
                            value: e.regarding
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                msg: void 0,
                                amount: void 0,
                                regarding: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.msg = l.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.amount = c.j1.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.regarding = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                U = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.endpoint && i.uint32(18).string(e.endpoint), "" !== e.terminalId && i.uint32(26).string(e.terminalId), "" !== e.merchantId && i.uint32(34).string(e.merchantId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                endpoint: "",
                                terminalId: "",
                                merchantId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.terminalId = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.merchantId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.targetWallet && i.uint32(10).string(e.targetWallet), 0 !== e.amount && i.uint32(16).int64(e.amount), void 0 !== e.regarding && u.hU.encode({
                            value: e.regarding
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                targetWallet: "",
                                amount: 0,
                                regarding: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.targetWallet = n.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = et(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.regarding = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                B = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), "" !== e.endpoint && i.uint32(18).string(e.endpoint), "" !== e.terminalId && i.uint32(26).string(e.terminalId), "" !== e.merchantId && i.uint32(34).string(e.merchantId), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                endpoint: "",
                                terminalId: "",
                                merchantId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.endpoint = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.terminalId = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.merchantId = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                A = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i;
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                D = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        for (let n of (0 !== e.startDate && i.uint32(8).int64(e.startDate), 0 !== e.endDate && i.uint32(16).int64(e.endDate), "" !== e.merchantCustomerUniqueValue && i.uint32(26).string(e.merchantCustomerUniqueValue), e.limitations)) g.encode(n, i.uint32(34).fork()).join();
                        return "" !== e.agreementId && i.uint32(42).string(e.agreementId), 0 !== e.status && i.uint32(48).int32(e.status), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                startDate: 0,
                                endDate: 0,
                                merchantCustomerUniqueValue: "",
                                limitations: [],
                                agreementId: "",
                                status: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.startDate = et(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.endDate = et(n.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.merchantCustomerUniqueValue = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.limitations.push(g.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.agreementId = n.string();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.status = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.sourceWallet && i.uint32(10).string(e.sourceWallet), "" !== e.targetWallet && i.uint32(18).string(e.targetWallet), 0 !== e.amount && i.uint32(24).int64(e.amount), 0 !== e.currency && i.uint32(32).int32(e.currency), void 0 !== e.regarding && u.hU.encode({
                            value: e.regarding
                        }, i.uint32(42).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                sourceWallet: "",
                                targetWallet: "",
                                amount: 0,
                                currency: 0,
                                regarding: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.sourceWallet = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.targetWallet = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.amount = et(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.currency = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.regarding = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                G = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.newWallet && k.encode(e.newWallet, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                newWallet: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.newWallet = k.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                x = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "" !== e.walletId && i.uint32(10).string(e.walletId), void 0 !== e.newBalance && v.encode(e.newBalance, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof a.V5 ? e : new a.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                walletId: "",
                                newBalance: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.walletId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.newBalance = v.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            class L {
                GetMyWallets(e, i) {
                    return this.rpc.unary(F, e, i)
                }
                GetWalletChargeToken(e, i) {
                    return this.rpc.unary(Y, e, i)
                }
                PayByWallet(e, i) {
                    return this.rpc.unary(K, e, i)
                }
                GetPaymentTokenByCard(e, i) {
                    return this.rpc.unary(H, e, i)
                }
                VerifyQRCode(e, i) {
                    return this.rpc.unary(W, e, i)
                }
                PayMoneyRequestByWallet(e, i) {
                    return this.rpc.unary(Q, e, i)
                }
                GetWalletInvoice(e, i) {
                    return this.rpc.unary(J, e, i)
                }
                VerifyCashOut(e, i) {
                    return this.rpc.unary(Z, e, i)
                }
                CashOutFromWallet(e, i) {
                    return this.rpc.unary(X, e, i)
                }
                VerifyPeer(e, i) {
                    return this.rpc.unary($, e, i)
                }
                GetWalletContracts(e, i) {
                    return this.rpc.unary(ee, e, i)
                }
                ActivateWallet(e, i) {
                    return this.rpc.unary(ei, e, i)
                }
                GetMoneyRequestPaymentTokenByCard(e, i) {
                    return this.rpc.unary(en, e, i)
                }
                constructor(e) {
                    (0, d._)(this, "rpc", void 0), this.rpc = e, this.GetMyWallets = this.GetMyWallets.bind(this), this.GetWalletChargeToken = this.GetWalletChargeToken.bind(this), this.PayByWallet = this.PayByWallet.bind(this), this.GetPaymentTokenByCard = this.GetPaymentTokenByCard.bind(this), this.VerifyQRCode = this.VerifyQRCode.bind(this), this.PayMoneyRequestByWallet = this.PayMoneyRequestByWallet.bind(this), this.GetWalletInvoice = this.GetWalletInvoice.bind(this), this.VerifyCashOut = this.VerifyCashOut.bind(this), this.CashOutFromWallet = this.CashOutFromWallet.bind(this), this.VerifyPeer = this.VerifyPeer.bind(this), this.GetWalletContracts = this.GetWalletContracts.bind(this), this.ActivateWallet = this.ActivateWallet.bind(this), this.GetMoneyRequestPaymentTokenByCard = this.GetMoneyRequestPaymentTokenByCard.bind(this)
                }
            }
            let _ = {
                    serviceName: "bale.wallet.v1.Wallet"
                },
                F = {
                    methodName: "GetMyWallets",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return b.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = m.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                Y = {
                    methodName: "GetWalletChargeToken",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return I.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = w.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                K = {
                    methodName: "PayByWallet",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return z.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = f.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                H = {
                    methodName: "GetPaymentTokenByCard",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return q.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = B.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                W = {
                    methodName: "VerifyQRCode",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return y.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = C.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                Q = {
                    methodName: "PayMoneyRequestByWallet",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return V.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = f.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                J = {
                    methodName: "GetWalletInvoice",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return j.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = P.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                Z = {
                    methodName: "VerifyCashOut",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return M.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = E.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                X = {
                    methodName: "CashOutFromWallet",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return R.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = f.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                $ = {
                    methodName: "VerifyPeer",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = S.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ee = {
                    methodName: "GetWalletContracts",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return A.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = D.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ei = {
                    methodName: "ActivateWallet",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return O.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = f.Ou.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                en = {
                    methodName: "GetMoneyRequestPaymentTokenByCard",
                    service: _,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return N.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = U.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function et(e) {
                return globalThis.Number(e.toString())
            }
        },
        76526: function(e, i, n) {
            var t, o;
            n.d(i, {
                I4: () => d,
                X1: () => u,
                c8: () => l,
                cv: () => a,
                ig: () => r,
                qs: () => s,
                u3: () => t,
                uF: () => f,
                yw: () => c
            }), (o = t || (t = {})).Update = "DialogEvent/Update", o.UpdateShort = "DialogEvent/UpdateShort", o.Delete = "DialogEvent/Delete", o.Replace = "DialogEvent/Replace", o.ReplaceShort = "DialogEvent/ReplaceShort", o.ReplacePinned = "DialofEvent/ReplacePinned", o.RemovePinned = "DialogEvent/RemovePinned";
            let r = e => ({
                    type: t.Replace,
                    dialogs: e
                }),
                s = e => ({
                    type: t.ReplaceShort,
                    dialogs: e
                }),
                d = (e, i, n) => ({
                    type: t.ReplacePinned,
                    dialogs: e,
                    folderId: i,
                    clearAll: n
                }),
                a = (e, i) => ({
                    type: t.RemovePinned,
                    peers: e,
                    folderId: i
                }),
                c = e => ({
                    type: t.Update,
                    dialogs: [e]
                }),
                u = (e, i) => ({
                    type: t.Update,
                    dialogs: e,
                    clearDialogHistory: i
                }),
                l = e => ({
                    type: t.UpdateShort,
                    shorts: [e]
                }),
                f = e => ({
                    type: t.Delete,
                    peers: [e]
                })
        },
        90120: function(e, i, n) {
            n.d(i, {
                Dq: () => y,
                Dw: () => k,
                I4: () => p,
                JT: () => T,
                M7: () => m,
                Wd: () => h,
                XK: () => g,
                Y6: () => v,
                _r: () => I,
                b0: () => C,
                ih: () => O,
                kT: () => M,
                lP: () => S,
                lq: () => b,
                nS: () => R,
                oH: () => j,
                oP: () => V,
                pz: () => E,
                v$: () => w,
                z4: () => N,
                z9: () => P
            });
            var t = n(94823),
                o = n(7836),
                r = n(76421),
                s = n(87728),
                d = n(33222),
                a = n(10394),
                c = n(85243),
                u = n(1652),
                l = n.n(u),
                f = n(35133);
            let p = e => {
                    var i;
                    return (0, a.H7)(e) ? null == (i = e.quotedMessage) ? void 0 : i.quotedMessageContent : e.message
                },
                v = e => {
                    var i;
                    return !!((null == (i = e.message) ? void 0 : i.emptyMessage) && e.quotedMessage)
                },
                k = e => {
                    var i;
                    return v(e) ? null == (i = e.quotedMessage) ? void 0 : i.quotedMessageContent : e.message
                };

            function h(e, i) {
                return e > i ? e : i
            }

            function g(e, i, n) {
                if (!n) return i;
                let t = n.outMessageReadDate ?? 0,
                    o = n.outMessageRecievedDate ?? 0;
                return e <= t ? d.Zu.Read : e <= o ? d.Zu.Received : d.Zu.Sent
            }

            function b(e, i) {
                if (e.state == d.Zu.Error) return d.Zu.Error;
                let n = e.date,
                    t = e.outMessageReadDate ?? 0,
                    o = e.outMessageRecievedDate ?? 0;
                return n <= t ? d.Zu.Read : n <= o ? d.Zu.Received : i ?? e.state
            }
            let m = e => {
                    var i;
                    return {
                        ...e,
                        id: (0, o.LP)(e.peer),
                        state: (0, a.Qz)(e.state),
                        firstUnreadDate: Number(null == (i = e.firstUnreadDate) ? void 0 : i.value)
                    }
                },
                I = e => e.map(e => {
                    var i;
                    return (i = "number" == typeof(null == e ? void 0 : e.firstUnreadDate) ? e : m(e)).message = i.message && T(i.message), i
                }),
                w = e => e.reduce((e, i) => e.concat(i.dialogs), []),
                y = e => {
                    var i;
                    return {
                        ...(0, r.Gze)(),
                        id: (0, o.LP)(e.peer),
                        counter: e.unreadCount,
                        date: e.date,
                        exInfo: e.exInfo,
                        firstUnreadDate: e.firstUnreadDate ? {
                            value: null == (i = e.firstUnreadDate) ? void 0 : i.toString()
                        } : void 0,
                        peer: e.peer,
                        markedAsUnread: e.markedAsUnread
                    }
                },
                C = e => {
                    var i;
                    return (null == e ? void 0 : e.serviceExUserLeft) ? e.serviceExUserLeft.leftUid : (null == e ? void 0 : e.serviceExUserInvited) ? e.serviceExUserInvited.invitedUid : (null == e ? void 0 : e.serviceExUserKicked) ? e.serviceExUserKicked.kickedUid : (null == e || null == (i = e.serviceExContactRegistered) ? void 0 : i.uid) ? e.serviceExContactRegistered.uid : void 0
                };

            function T(e) {
                return e.documentMessage ? l()(e, "documentMessage.thumb") : e.purchaseMessage ? {
                    purchaseMessage: {
                        ...e.purchaseMessage,
                        msg: e.purchaseMessage.msg && T(e.purchaseMessage.msg)
                    }
                } : e.crowdFundingMessage ? l()(e, "message.crowdFundingMessage.photo.thumb") : e.templateMessage ? {
                    templateMessage: {
                        ...e.templateMessage,
                        generalMessage: e.templateMessage.generalMessage && T(e.templateMessage.generalMessage)
                    }
                } : e
            }

            function S(e, i) {
                return i ? Math.max(e, i) : e
            }

            function V(e, i) {
                let n = e.unreadCounter ?? i.unreadCount;
                return e.startDate >= i.date ? 0 : Math.min(i.unreadCount, n)
            }

            function j(e) {
                return !e.firstUnreadDate || e.firstUnreadDate <= e.date
            }

            function P(e) {
                let {
                    peer: i,
                    messageContainers: n
                } = e, o = [...n].sort((e, i) => e.date - i.date), r = (0, t.K2)(i), s = o[0].groupedId, d = o[0], c = (0, a.H7)(d), u = o[o.length - 1].quotedMessage;
                return o.map(e => ({
                    peer: r,
                    senderUid: e.senderUid,
                    date: e.date,
                    rid: e.rid,
                    message: e.message,
                    attributes: void 0,
                    quotedMessage: c ? e.quotedMessage : u,
                    previousMessageId: e.previousMessageId,
                    groupedId: s
                }))
            }
            let M = (e, i) => e.reduce((e, n) => n.date > e.date && (i.rid !== n.rid || i.state === d.Zu.Pending) ? n : e, e[0]),
                E = (e, i, n, t, o) => {
                    if (t.firstUnreadDate == t.date) return 0;
                    let r = t.unreadCount,
                        s = t.firstUnreadDate ?? 0;
                    return i.forEach(e => {
                        let i = o && e.threadId && (0, c.oK)(o, e.threadId);
                        e.senderUid !== n && e.date > s && !i && (r += 1)
                    }), r
                },
                R = (e, i) => {
                    if (!e) return i.unreadCount;
                    {
                        let n = e.filter(e => e > (i.firstUnreadDate ?? 0));
                        return Math.max(i.unreadCount - n.length, 0)
                    }
                },
                O = (e, i, n) => ({
                    ...(0, r.cfp)(),
                    peer: e,
                    unreadCount: 0,
                    sortDate: i.date,
                    senderUid: i.senderUid,
                    rid: i.rid,
                    date: i.date,
                    message: i.message,
                    state: r.ZuK.MESSAGESTATE_SENT,
                    firstUnreadDate: {
                        value: i.date.toString()
                    },
                    attributes: void 0,
                    exInfo: n ?? {
                        peerIdentity: 0,
                        peerCategory: void 0,
                        exPeerType: s.m4.EXPEERTYPE_GROUP
                    }
                }),
                N = (e, i, n) => e.putItems(i.map(e => [n(e), e])).pipe((0, f.T)(() => i))
        },
        15342: function(e, i, n) {
            var t, o;
            n.d(i, {
                Kq: () => c,
                LC: () => t,
                TL: () => d,
                ZS: () => r,
                g$: () => s,
                sE: () => a
            }), (o = t || (t = {})).Update = "FolderEvent/Update", o.Add = "FolderEvent/Add", o.Delete = "FolderEvent/Delete", o.Replace = "FolderEvent/Replace";
            let r = e => ({
                    type: t.Add,
                    folders: e
                }),
                s = e => ({
                    type: t.Update,
                    folders: [e]
                }),
                d = e => ({
                    type: t.Update,
                    folders: e
                }),
                a = e => ({
                    type: t.Delete,
                    folderIds: [e]
                }),
                c = e => ({
                    type: t.Replace,
                    folders: e
                })
        },
        7384: function(e, i, n) {
            var t, o;
            n.d(i, {
                t: () => t
            }), (o = t || (t = {})).GroupInviteObsolete = "GroupEvent/GroupInviteObsolete", o.UserKickedOrLeft = "GroupEvent/UserKickedOrLeft", o.UpdateMember = "GroupEvent/UpdateMember", o.AddMember = "GroupEvent/AddMember"
        },
        17782: function(e, i, n) {
            var t, o, r, s, d, a;
            n.d(i, {
                Cr: () => r,
                bF: () => t,
                yS: () => o
            }), (s = t || (t = {})).BOT = "BOT", s.COMMENT = "COMMENT", (d = o || (o = {}))[d.AllPeers = 0] = "AllPeers", (a = r || (r = {})).Like = "❤", a.View = "\uD83D\uDC41️"
        },
        10394: function(e, i, n) {
            n.d(i, {
                AD: () => en,
                Bh: () => L,
                GV: () => A,
                H7: () => P,
                Lh: () => p,
                MT: () => X,
                Mk: () => N,
                OM: () => ei,
                Pm: () => m,
                Pw: () => g,
                Pz: () => B,
                QS: () => M,
                Qz: () => v,
                RM: () => W,
                SZ: () => Z,
                Sj: () => $,
                TA: () => C,
                TC: () => k,
                Tl: () => D,
                VV: () => U,
                VX: () => O,
                Y7: () => K,
                _R: () => q,
                ce: () => eo,
                er: () => et,
                f2: () => G,
                iI: () => R,
                jL: () => h,
                jN: () => E,
                jn: () => b,
                nA: () => Q,
                nc: () => _,
                o6: () => I,
                u6: () => ee,
                v4: () => J,
                xg: () => H
            });
            var t = n(76421),
                o = n(17782),
                r = n(90120),
                s = n(94823),
                d = n(7836),
                a = n(33222),
                c = n(87728),
                u = n(19376),
                l = n(49621),
                f = n(6756);
            let p = e => e.includes("opus") || e.includes("ogg") || e.includes("wav"),
                v = e => {
                    switch (e) {
                        case t.ZuK.MESSAGESTATE_SENT:
                            return a.Zu.Sent;
                        case t.ZuK.MESSAGESTATE_READ:
                            return a.Zu.Read;
                        case t.ZuK.MESSAGESTATE_RECEIVED:
                            return a.Zu.Received;
                        default:
                            return a.Zu.Error
                    }
                },
                k = e => e.includes("image") ? e.includes("gif") ? a.cM.GIF : a.cM.PHOTO : e.includes("video") ? a.cM.VIDEO : p(e) ? a.cM.VOICE : e.includes("audio") ? a.cM.AUDIO : a.cM.DOCUMENT,
                h = e => e === a.cM.GIF ? a.cM.PHOTO : e,
                g = (e, i) => {
                    var n, t, o;
                    if (null == e ? void 0 : e.documentMessage) {
                        let i = e.documentMessage,
                            n = null == i ? void 0 : i.ext;
                        if (null == n ? void 0 : n.documentExVoice) return a.cM.VOICE;
                        if (null == n ? void 0 : n.documentExPhoto) return a.cM.PHOTO;
                        if (null == n ? void 0 : n.documentExVideo) return a.cM.VIDEO;
                        else if (null == n ? void 0 : n.documentExGif) return a.cM.GIF;
                        else if (null == n ? void 0 : n.documentExAudio) return a.cM.AUDIO;
                        else if (i.mimeType.includes("audio")) return a.cM.AUDIO;
                        else return a.cM.DOCUMENT
                    }
                    if (null == e ? void 0 : e.purchaseMessage) return a.cM.PURCHASE_MESSAGE;
                    if (null == e ? void 0 : e.textMessage) return a.cM.TEXT;
                    if (null == e ? void 0 : e.templateMessage) return a.cM.TEMPLATE_MESSAGE;
                    if (null == e ? void 0 : e.templateMessageResponse) return a.cM.TEMPLATE_MESSAGE_RESPONSE;
                    else if (null == e ? void 0 : e.jsonMessage) {
                        let i = null == (n = b(e.jsonMessage)) ? void 0 : n.dataType;
                        return "location" === i ? a.cM.LOCATION : "contact" === i ? a.cM.CONTACT : a.cM.UNSUPPORTED
                    } else if (null == e ? void 0 : e.bankMessage) {
                        let i = e.bankMessage.bankEx;
                        return (null == i ? void 0 : i.receiptMessage) ? a.cM.RECEIPT : a.cM.UNSUPPORTED
                    } else if (null == e ? void 0 : e.stickerMessage) return a.cM.STICKER;
                    else if (null == e ? void 0 : e.animatedStickerMessage) return a.cM.ANIMATED_STICKER;
                    else if (null == e ? void 0 : e.goldGiftPacketMessage) return a.cM.GOLD_GIFT_PACKET;
                    else if (null == e ? void 0 : e.giftPacketMessage) return a.cM.GIFT_PACKET;
                    else if (null == e ? void 0 : e.serviceMessage) return (null == (t = e.serviceMessage.ext) ? void 0 : t.serviceExPhoneCall) ? a.cM.CALL : a.cM.SERVICE;
                    else if ((null == e ? void 0 : e.premiumMessage) || (null == e ? void 0 : e.newPremiumMessage) || (null == e ? void 0 : e.boughtPremiumMessage)) return a.cM.PREMIUM;
                    else if (null == e ? void 0 : e.deletedMessage) return a.cM.DELETED;
                    else if (null == e ? void 0 : e.orderMessage) return (null == (o = e.orderMessage.orderExt) ? void 0 : o.psProxyOrderMessage) ? a.cM.ORDER : a.cM.UNSUPPORTED;
                    else if (null == e ? void 0 : e.crowdFundingMessage) return a.cM.CROWDFUNDING;
                    else if (null == e ? void 0 : e.albumMessage) return a.cM.ALBUM;
                    else if (null == e ? void 0 : e.sponsoredMessage) return a.cM.SPONSORED;
                    else if (null == e ? void 0 : e.bannedMessage) return a.cM.BANNED;
                    else if (null == e ? void 0 : e.pollMessage) return a.cM.POLL;
                    else if (null == e ? void 0 : e.streamedMessage) return a.cM.STREAMED_MESSAGE;
                    else if (null == e ? void 0 : e.protectedMessage) return a.cM.PROTECTED_MESSAGE;
                    else if (i) return g(null == i ? void 0 : i.quotedMessageContent);
                    else return a.cM.UNSUPPORTED
                };

            function b(e) {
                let i = e.rawJson;
                try {
                    return JSON.parse(i)
                } catch (i) {
                    f.U.error("Failed to parse JsonMessage", e, i)
                }
            }
            let m = (e, i) => e.map(e => ({
                    ...e,
                    state: v(e.state),
                    isOut: e.senderUid === i,
                    type: g(e.message, e.quotedMessage),
                    reactionsList: []
                })),
                I = (e, i) => ({
                    date: e.date,
                    message: e.message,
                    previousMessageId: e.previousMessageId,
                    quotedMessage: e.quotedMessage,
                    rid: e.rid,
                    senderUid: e.senderUid,
                    state: a.Zu.Sent,
                    isOut: e.senderUid === i,
                    type: g(e.message, e.quotedMessage),
                    reactions: [],
                    attribute: void 0,
                    seq: void 0,
                    nextMessageId: void 0,
                    editedAt: void 0,
                    editorUserId: void 0,
                    groupedId: e.groupedId,
                    hasComment: e.hasComment,
                    replies: void 0,
                    replyToTopId: e.threadId
                }),
                w = (e, i, n, o, r, s, d) => ({
                    ...(0, t.cw0)(),
                    rid: i,
                    date: n,
                    senderUid: o,
                    isOut: o === e,
                    state: a.Zu.Sent,
                    type: a.cM.SERVICE,
                    reactions: [],
                    message: {
                        serviceMessage: s ? {
                            text: "Joined",
                            ext: {
                                serviceExUserInvited: {
                                    invitedUid: r
                                }
                            }
                        } : {
                            text: "User Invited",
                            ext: {
                                serviceExUserInvited: {
                                    invitedUid: r
                                }
                            },
                            user: (0, u.Hr)(d, r)
                        }
                    }
                }),
                y = (e, i) => {
                    let n = e.inviteUid === i.id;
                    return {
                        ...(0, t.cw0)(),
                        rid: e.rid,
                        date: e.date,
                        isOut: e.inviteUid === i.id,
                        senderUid: e.inviteUid,
                        state: a.Zu.Sent,
                        reactions: [],
                        type: a.cM.SERVICE,
                        message: {
                            serviceMessage: e.isJoined ? {
                                text: "Joined",
                                ext: {
                                    serviceExUserInvited: {
                                        invitedUid: i.id
                                    }
                                }
                            } : n ? {
                                text: "Group Created",
                                ext: {
                                    serviceExGroupCreated: {}
                                }
                            } : {
                                text: "User Invited",
                                ext: {
                                    serviceExUserInvited: {
                                        invitedUid: i.id
                                    }
                                },
                                user: i
                            }
                        }
                    }
                },
                C = e => {
                    var i, n;
                    return !!(null == (n = e.serviceMessage) || null == (i = n.ext) ? void 0 : i.serviceExGroupCreated)
                },
                T = (e, i, n, o, r) => {
                    let s = (0, u.Hr)(r, o);
                    return {
                        ...(0, t.cw0)(),
                        rid: i,
                        date: n,
                        senderUid: o,
                        isOut: o === e,
                        state: a.Zu.Sent,
                        type: a.cM.SERVICE,
                        reactions: [],
                        message: {
                            serviceMessage: {
                                text: "Group Left",
                                ext: {
                                    serviceExUserLeft: {
                                        leftUid: o
                                    }
                                },
                                user: s
                            }
                        }
                    }
                },
                S = (e, i, n, o, r) => ({
                    ...(0, t.cw0)(),
                    rid: i,
                    date: n,
                    senderUid: o,
                    isOut: o === e,
                    state: a.Zu.Sent,
                    type: a.cM.SERVICE,
                    reactions: [],
                    message: {
                        serviceMessage: {
                            text: "Group Kicked",
                            ext: {
                                serviceExUserKicked: {
                                    kickedUid: r
                                }
                            }
                        }
                    }
                }),
                V = (e, i, n, o, r, s) => ({
                    ...(0, t.cw0)(),
                    rid: i,
                    date: n,
                    senderUid: o,
                    isOut: o === e,
                    state: a.Zu.Sent,
                    type: a.cM.SERVICE,
                    reactions: [],
                    message: {
                        serviceMessage: {
                            text: "Group Avatar Changed",
                            ext: {
                                serviceExChangedAvatar: {
                                    avatar: s
                                }
                            }
                        }
                    }
                }),
                j = (e, i, n, o, r, s) => ({
                    ...(0, t.cw0)(),
                    rid: i,
                    date: n,
                    senderUid: o,
                    isOut: o === e,
                    state: a.Zu.Sent,
                    type: a.cM.SERVICE,
                    reactions: [],
                    message: {
                        serviceMessage: {
                            text: "Group Title Changed",
                            ext: {
                                serviceExChangedTitle: {
                                    title: s
                                }
                            }
                        }
                    }
                }),
                P = e => {
                    var i;
                    return !!((null == (i = e.message) ? void 0 : i.emptyMessage) && e.quotedMessage)
                },
                M = e => !!(!P(e) && e.quotedMessage),
                E = e => {
                    var i, n, t, o;
                    return !!e && e.serviceMessage && ((null == (i = e.serviceMessage.ext) ? void 0 : i.serviceExUserInvited) || (null == (n = e.serviceMessage.ext) ? void 0 : n.serviceExUserJoined) || (null == (t = e.serviceMessage.ext) ? void 0 : t.serviceExUserKicked) || (null == (o = e.serviceMessage.ext) ? void 0 : o.serviceExUserLeft))
                },
                R = (e, i) => e && g(null == i ? void 0 : i.quotedMessageContent),
                O = (e, i) => ({
                    randomId: e,
                    media: i
                }),
                N = e => {
                    var i;
                    return !!(null == e || null == (i = e.groupedId) ? void 0 : i.value)
                },
                U = (e, i, n, o, r, s, d, c) => {
                    var u;
                    return {
                        ...(0, t.cw0)(),
                        senderUid: o,
                        date: i,
                        isOut: n,
                        reactionsList: [],
                        previousMessageId: c,
                        quotedMessage: s,
                        rid: e,
                        type: k((null == r || null == (u = r.documentMessage) ? void 0 : u.mimeType) ?? ""),
                        state: a.Zu.Sent,
                        message: d ? void 0 : r
                    }
                },
                q = e => {
                    var i;
                    return null == (i = e.groupedId) ? void 0 : i.value
                },
                B = (e, i) => e.date >= i.date,
                A = (e, i) => e.find(e => e.code !== o.Cr.View && e.users.find(e => e === i)),
                D = (e, i, n) => {
                    let t = e.findIndex(e => e.code === i);
                    if (t >= 0) {
                        var o;
                        let i = {
                            ...e[t],
                            users: [n, ...e[t].users],
                            cardinality: {
                                value: String(Number((null == (o = e[t].cardinality) ? void 0 : o.value) ?? 0) + 1)
                            }
                        };
                        e[t] = i
                    } else e.push({
                        code: i,
                        ext: {},
                        users: [n],
                        cardinality: {
                            value: "1"
                        }
                    });
                    return e
                },
                z = [a.Zu.Pending, a.Zu.Error],
                G = e => !z.includes(e.state),
                x = (e, i) => ({
                    ...(0, l.Kb)(),
                    message: {
                        peer: e,
                        senderUid: i.senderUid,
                        date: i.date,
                        rid: i.rid,
                        message: i.message,
                        attributes: void 0,
                        quotedMessage: i.quotedMessage,
                        previousMessageId: i.previousMessageId,
                        groupedId: i.groupedId
                    }
                }),
                L = e => {
                    let i = [],
                        n = [];
                    return e.forEach(e => {
                        (null == e ? void 0 : e.type) === c.RK.PEERTYPE_GROUP ? n.push({
                            groupId: e.id,
                            accessHash: "0"
                        }) : (null == e ? void 0 : e.id) && i.push({
                            uid: e.id,
                            accessHash: "0"
                        })
                    }), {
                        userOutPeers: i,
                        groupOutPeers: n
                    }
                };

            function _(e) {
                let i = new Map;
                for (let u of e) {
                    var n, t, a;
                    if (u.message) {
                        if (N(u.message) || (null == (n = u.message.peer) ? void 0 : n.type) === c.RK.PEERTYPE_UNKNOWN) continue;
                        let e = u.message.peer,
                            t = F((0, d.LP)(e), i);
                        t.messages.push(u.message), t.clearChat = !1
                    } else if (u.messages) {
                        let e = (0, r.z9)(u.messages),
                            n = (0, s.K2)(u.messages.peer),
                            o = F((0, d.LP)(n), i);
                        o.clearChat = !1, null == (t = o.messages) || t.push(...e)
                    } else if (u.messageRead) {
                        let e = u.messageRead.peer,
                            n = (0, d.LP)(e),
                            t = u.messageRead.startDate,
                            o = i.get(n);
                        o || (o = {
                            read: 0,
                            received: 0
                        }), o.received || (o.received = 0), o.read || (o.read = 0), o.received <= t && (o.received = void 0), o.read = t, i.set(n, o)
                    } else if (u.messageReceived) {
                        let e = u.messageReceived.peer,
                            n = (0, d.LP)(e),
                            t = u.messageReceived.startDate,
                            o = i.get(n);
                        if (o || (o = {
                                read: 0,
                                received: 0
                            }), o.received || (o.received = 0), o.read || (o.read = 0), o.read >= t) continue;
                        o.received = t, i.set(n, o)
                    } else if (u.messageReadByMe) {
                        let e = u.messageReadByMe.peer,
                            n = (0, d.LP)(e),
                            t = i.get(n);
                        t || (t = {
                            readByMe: {
                                peer: e,
                                startDate: 0,
                                endDate: {
                                    value: "0"
                                },
                                unreadCounter: 0
                            }
                        }), t.readByMe ? (t.readByMe.startDate <= u.messageReadByMe.startDate || (null == (a = t.readByMe) ? void 0 : a.endDate) < u.messageReadByMe.endDate) && (t.readByMe = u.messageReadByMe) : t.readByMe = u.messageReadByMe, i.set(n, t)
                    } else if (u.messageDelete) {
                        let e = u,
                            n = u.messageDelete,
                            t = n.peer,
                            o = (0, d.LP)(t),
                            r = i.get(o);
                        if (r || (r = {}), r.messages) {
                            let i = [...n.rids],
                                t = n.dates ? [...n.dates.dates] : [];
                            r.messages = r.messages.filter(e => {
                                let n = i.indexOf(e.rid),
                                    o = n >= 0;
                                return o && (i.splice(n, 1), t.splice(n, 1)), !o
                            }), e = i.length > 0 ? {
                                messageDelete: {
                                    ...u.messageDelete,
                                    rids: i,
                                    dates: {
                                        dates: t
                                    }
                                }
                            } : void 0
                        }
                        e && (r.others ? r.others.push(e) : r.others = [e]), i.set(o, r)
                    } else if (u.chatClear) {
                        let e = Y(u);
                        if (!e) continue;
                        let n = (0, d.LP)(e);
                        i.delete(n), i.set(n, {
                            clearChat: !0
                        })
                    } else if (u.pinnedDialogsChanged || u.dialogsUnpinned) {
                        let e = o.yS.AllPeers,
                            n = i.get(e);
                        n || (n = {
                            others: []
                        }), n.others || (n.others = []), n.others.push(u), i.set(e, n)
                    } else if (u.dialogsMarkedAsRead)
                        if (u.dialogsMarkedAsRead.peers.length > 0) {
                            let e = (0, s.K2)(u.dialogsMarkedAsRead.peers[0]),
                                n = (0, d.LP)(e);
                            i.set(n, {
                                markedAsRead: u.dialogsMarkedAsRead
                            })
                        } else f.U.warn("dialogsMarkedAsRead update has an empty peers array");
                    else if (u.dialogsMarkedAsUnread)
                        if (u.dialogsMarkedAsUnread.peers.length > 0) {
                            let e = (0, s.K2)(u.dialogsMarkedAsUnread.peers[0]),
                                n = (0, d.LP)(e);
                            i.set(n, {
                                makredAsUnread: u.dialogsMarkedAsUnread
                            })
                        } else f.U.warn("dialogsMarkedAsUnread update has an empty peers array");
                    else {
                        let e = Y(u);
                        if (!e) continue;
                        let n = (0, d.LP)(e),
                            t = i.get(n);
                        t || (t = {
                            others: []
                        }), t.others || (t.others = []), t.others.push(u), i.set(n, t)
                    }
                }
                return i
            }

            function F(e, i) {
                let n = i.get(e);
                return n ? (void 0 == n.messages && (n.messages = []), void 0 === n.sents && (n.sents = [])) : (n = {
                    messages: [],
                    sents: []
                }, i.set(e, n)), n
            }

            function Y(e) {
                var i, n, t, o, r, d, a, c, u;
                let l = e.messageDelete || e.messageContentChanged || e.messageSent || e.chatClear || e.chatDelete;
                if (l) return l.peer;
                if (null == (i = e.messages) ? void 0 : i.peer) return (0, s.K2)(e.messages.peer);
                if (null == (n = e.mentionReadByMe) ? void 0 : n.peer) return (0, s.K2)(e.mentionReadByMe.peer);
                if (null == (t = e.messageNewReaction) ? void 0 : t.exPeer) return (0, s.K2)(e.messageNewReaction.exPeer);
                if (null == (o = e.messageReactionsReadByMe) ? void 0 : o.exPeer) return (0, s.K2)(e.messageReactionsReadByMe.exPeer);
                if (null == (r = e.messagePinned) ? void 0 : r.peer) return (0, s.K2)(e.messagePinned.peer);
                else if (null == (d = e.messagesUnPinned) ? void 0 : d.peer) return (0, s.K2)(e.messagesUnPinned.peer);
                else if (null == (a = e.topicCreated) ? void 0 : a.exPeer) return (0, s.K2)(e.topicCreated.exPeer);
                else if (null == (c = e.topicEdited) ? void 0 : c.exPeer) return (0, s.K2)(e.topicEdited.exPeer);
                else if (null == (u = e.topicDeleted) ? void 0 : u.exPeer) return (0, s.K2)(e.topicDeleted.exPeer)
            }

            function K(e) {
                let i = [];
                for (let n of e)
                    if (n.groupUserInvitedObsolete) {
                        let e = n.groupUserInvitedObsolete;
                        i.push((0, u.Yt)(e.uid, c.RK.PEERTYPE_PRIVATE), (0, u.Yt)(e.inviterUid, c.RK.PEERTYPE_PRIVATE))
                    } else if (n.groupUserKickObsolete) {
                    let e = n.groupUserKickObsolete;
                    i.push((0, u.Yt)(e.uid, c.RK.PEERTYPE_PRIVATE), (0, u.Yt)(e.kickerUid, c.RK.PEERTYPE_PRIVATE))
                } else if (n.groupInviteObsolete) {
                    let e = n.groupInviteObsolete;
                    i.push((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), (0, u.Yt)(e.inviteUid))
                } else if (n.groupUserLeaveObsolete) {
                    let e = n.groupUserLeaveObsolete;
                    i.push((0, u.Yt)(e.uid, c.RK.PEERTYPE_PRIVATE))
                } else if (n.groupAvatarChangedObsolete) {
                    let e = n.groupAvatarChangedObsolete;
                    i.push((0, u.Yt)(e.uid, c.RK.PEERTYPE_PRIVATE), (0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP))
                } else if (n.groupTitleChangedObsolete) {
                    let e = n.groupTitleChangedObsolete;
                    i.push((0, u.Yt)(e.uid, c.RK.PEERTYPE_PRIVATE), (0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP))
                }
                return i
            }

            function H(e) {
                return e.filter(e => !!e.message || !!e.messageDelete || !!e.messageContentChanged || !!e.messageRead || !!e.messageReceived || !!e.reactionsUpdate || !!e.messageSent || !!e.chatClear || !!e.messages || !!e.chatDelete || !!e.messageReadByMe || !!e.mentionReadByMe || !!e.messageNewReaction || !!e.messageReactionsReadByMe || !!e.pinnedDialogsChanged || !!e.dialogsUnpinned || !!e.dialogsMarkedAsRead || !!e.dialogsMarkedAsUnread || !!e.messagePinned || !!e.messagesUnPinned || !!e.topicCreated || !!e.topicEdited || !!e.topicDeleted)
            }

            function W(e, i) {
                let n = [];
                return i && n.push(i), e.forEach(e => {
                    let i = (0, u.Yt)(e.senderUid, c.RK.PEERTYPE_PRIVATE);
                    if (n.push(i), e.quotedMessage) {
                        let i = function(e) {
                            let i = [(0, u.Yt)(e.senderUserId, c.RK.PEERTYPE_PRIVATE)];
                            if (e.quotedPeer) {
                                var n, t;
                                let o = (0, u.Yt)(null == (n = e.quotedPeer) ? void 0 : n.id, null == (t = e.quotedPeer) ? void 0 : t.type);
                                i.push(o)
                            }
                            return i
                        }(e.quotedMessage);
                        n.push(...i)
                    }
                }), n
            }

            function Q(e, i, n) {
                let t = [];
                for (let o of e)
                    if (o.groupUserInvitedObsolete) {
                        let e = o.groupUserInvitedObsolete;
                        if (e.uid === i.id) continue;
                        let r = w(i.id, e.rid, e.date, e.inviterUid, e.uid, e.isJoined, n),
                            s = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), r);
                        t.push(s)
                    } else if (o.groupUserKickObsolete) {
                    let e = o.groupUserKickObsolete;
                    if (e.uid === i.id) continue;
                    let n = S(i.id, e.rid, Number(e.date), e.kickerUid, e.uid),
                        r = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), n);
                    t.push(r)
                } else if (o.groupInviteObsolete) {
                    let e = o.groupInviteObsolete,
                        n = y(e, i),
                        r = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), n);
                    t.push(r)
                } else if (o.groupUserLeaveObsolete) {
                    let e = o.groupUserLeaveObsolete;
                    if (e.uid === i.id) continue;
                    let r = T(i.id, e.rid, e.date, e.uid, n),
                        s = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), r);
                    t.push(s)
                } else if (o.groupAvatarChangedObsolete) {
                    let e = o.groupAvatarChangedObsolete,
                        r = V(i.id, e.rid, e.date, e.uid, n, e.avatar),
                        s = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), r);
                    t.push(s)
                } else if (o.groupTitleChangedObsolete) {
                    let e = o.groupTitleChangedObsolete,
                        r = j(i.id, e.rid, Number(e.date), e.uid, n, e.title),
                        s = x((0, u.Yt)(e.groupId, c.RK.PEERTYPE_GROUP), r);
                    t.push(s)
                } else if (o.message) {
                    if (t.find(e => {
                            var i;
                            return e.message && e.message.rid === (null == (i = o.message) ? void 0 : i.rid)
                        })) continue;
                    t.push(o)
                } else t.push(o);
                return t
            }

            function J(e, i) {
                let n;
                return i && (n = {
                    messagesEvents: Array.isArray(i) ? i : [i]
                }), e && (n = {
                    ...n,
                    dialogsEvents: Array.isArray(e) ? e : [e]
                }), n
            }
            let Z = e => {
                    let i = new Map,
                        n = [];
                    for (let t = e.length - 1; t >= 0; t--) {
                        let o = e[t];
                        o && (i.has(o.type) || (i.set(o.type, o), n.unshift(o)))
                    }
                    return n
                },
                X = (e, i) => {
                    let n = (0, d.LP)(e);
                    return `${n}-${i}`
                },
                $ = e => {
                    let i = new Map;
                    return e.forEach(e => {
                        let n, [t, {
                                id: o,
                                message: r
                            }] = e,
                            {
                                peer: s
                            } = {
                                peer: (n = o.split("-"))[0].length > 0 ? (0, d.TU)(Number(n[0])) : void 0,
                                rid: n[1]
                            },
                            a = s && (0, d.LP)(s);
                        if (a)
                            if (i.has(a)) {
                                let e = i.get(a);
                                e && e.push(r)
                            } else i.set(a, [r])
                    }), i
                },
                ee = e => ({
                    ...(0, t.sAT)(),
                    date: e.date,
                    rid: e.rid,
                    seq: ""
                }),
                ei = (e, i) => i.filter(i => {
                    var n, t, o, r, s, d;
                    let a = (null == (t = i.message) || null == (n = t.textMessage) ? void 0 : n.mentions) ?? (null == (s = i.message) || null == (r = s.documentMessage) || null == (o = r.caption) ? void 0 : o.mentions) ?? [];
                    return (!!(!P(i) && (null == (d = i.quotedMessage) ? void 0 : d.senderUserId) === e) || -1 !== a.findIndex(i => i === e)) && i.senderUid !== e
                }).map(e => ({
                    rid: e.rid,
                    date: e.date,
                    seq: ""
                })),
                en = e => {
                    let i = [],
                        n = [];
                    return e.forEach(e => {
                        var t, o, s, d;
                        if (i.push(e.senderUid), e.quotedMessage && (i.push(e.quotedMessage.senderUserId), (null == (d = e.quotedMessage.quotedPeer) ? void 0 : d.type) === c.RK.PEERTYPE_PRIVATE && i.push(e.quotedMessage.quotedPeer.id)), null == (t = e.message) ? void 0 : t.serviceMessage) {
                            let n = e.message.serviceMessage.user;
                            n && i.push(n.id);
                            let t = (0, r.b0)(e.message.serviceMessage.ext);
                            t && i.push(t)
                        }
                        e.reactions.length > 0 && e.reactions.forEach(e => i.push(...e.users)), (null == (s = e.quotedMessage) || null == (o = s.quotedPeer) ? void 0 : o.type) === c.RK.PEERTYPE_GROUP && n.push(e.quotedMessage.quotedPeer.id)
                    }), {
                        groups: n,
                        users: i
                    }
                },
                et = e => {
                    var i;
                    if (!e.quotedMessage) return;
                    let n = {
                        peer: e.quotedMessage.quotedPeer,
                        rid: null == (i = e.quotedMessage.messageId) ? void 0 : i.value,
                        date: {
                            value: e.quotedMessage.messageDate.toString()
                        },
                        seq: void 0,
                        story: void 0
                    };
                    return e.quotedMessage.story && (n.story = e.quotedMessage.story), n
                },
                eo = e => e === c.m4.EXPEERTYPE_BOT ? o.bF.BOT : o.bF.COMMENT
        },
        85243: function(e, i, n) {
            n.d(i, {
                AM: () => d,
                Iu: () => c,
                Wn: () => u,
                aX: () => l,
                mD: () => f,
                oK: () => p,
                w9: () => a,
                yj: () => v
            });
            var t = n(76421),
                o = n(10394),
                r = n(52484),
                s = n(17782);
            let d = (e, i) => {
                    let n = () => (void 0 == i.lastOpenedLastMessageDate ? void 0 != i.lastReadDate && (i.lastOpenedLastMessageDate = i.lastReadDate) : void 0 != i.lastReadDate && (i.lastOpenedLastMessageDate = Math.max(i.lastOpenedLastMessageDate, i.lastReadDate)), i),
                        {
                            replies: t
                        } = e;
                    if ((null == t ? void 0 : t.lastReadDate) == void 0 && (null == t ? void 0 : t.lastOpenedLastMessageDate) == void 0) return n();
                    {
                        let e = {},
                            i = n();
                        return (void 0 != t.lastReadDate || void 0 != i.lastReadDate) && (e.lastReadDate = Math.max(t.lastReadDate ?? 0, i.lastReadDate ?? 0)), (void 0 != t.lastOpenedLastMessageDate || void 0 != i.lastOpenedLastMessageDate) && (e.lastOpenedLastMessageDate = Math.max(t.lastOpenedLastMessageDate ?? 0, i.lastOpenedLastMessageDate ?? 0)), e
                    }
                },
                a = e => `${e.rid}_${e.date}`;

            function c(e, i) {
                let n = a(i);
                return `${e.id}_${n}`
            }
            let u = e => {
                if (void 0 == e) return;
                let [i, n] = e.split("_");
                if (void 0 != i && void 0 != n) return (0, o.u6)({
                    rid: i,
                    date: Number(n)
                })
            };

            function l(e, i) {
                return `${r.$Z.thread_read_prefix}${e}_${a(i)}`
            }

            function f(e) {
                if (void 0 == e) return;
                let [i, n, o, r] = e.split("_");
                return {
                    groupId: Number(n),
                    messageId: {
                        ...(0, t.sAT)(),
                        rid: o,
                        date: Number(r)
                    }
                }
            }

            function p(e, i) {
                return (void 0 != e || void 0 == i) && (void 0 == e || void 0 != i) && (void 0 == e && void 0 == i || !!(e && i && a(e) == a(i)))
            }

            function v(e) {
                return void 0 != e && e.threadType === s.bF.COMMENT
            }
        }
    }
]);
//# sourceMappingURL=5100.bbddcd29.js.map