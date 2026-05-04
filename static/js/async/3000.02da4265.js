try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "321bb2dc-3039-4cd3-882b-5140dbaa985d", e._sentryDebugIdIdentifier = "sentry-dbid-321bb2dc-3039-4cd3-882b-5140dbaa985d")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3000"], {
        51659: function(e, t, n) {
            n.d(t, {
                es: () => A,
                z6: () => N
            });
            var i, o, r, s, c = n(51116),
                d = n(86654),
                a = n(20125),
                u = n(68647),
                f = n(87728);
            (i = r || (r = {}))[i.MARRIAGESTATUS_UNKNOWN = 0] = "MARRIAGESTATUS_UNKNOWN", i[i.MARRIAGESTATUS_SINGLE = 1] = "MARRIAGESTATUS_SINGLE", i[i.MARRIAGESTATUS_MARRIED = 2] = "MARRIAGESTATUS_MARRIED", (o = s || (s = {}))[o.EDUCATION_UNKNOWN = 0] = "EDUCATION_UNKNOWN", o[o.EDUCATION_UNDERDIPLOMA = 1] = "EDUCATION_UNDERDIPLOMA", o[o.EDUCATION_DIPLOMA = 2] = "EDUCATION_DIPLOMA", o[o.EDUCATION_ASSOCIATE = 3] = "EDUCATION_ASSOCIATE", o[o.EDUCATION_BACHELOR = 4] = "EDUCATION_BACHELOR", o[o.EDUCATION_MASTER = 5] = "EDUCATION_MASTER", o[o.EDUCATION_DOCTORATE = 6] = "EDUCATION_DOCTORATE";
            let l = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                p = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.balance && t.uint32(8).int64(e.balance), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                balance: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.balance = w(n.int64());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.amount && t.uint32(16).int64(e.amount), 0 !== e.count && t.uint32(24).int64(e.count), "" !== e.description && t.uint32(34).string(e.description), 0 !== e.givingType && t.uint32(40).int32(e.givingType), 0 !== e.randomId && t.uint32(48).int64(e.randomId), void 0 !== e.peer && f.L0.encode(e.peer, t.uint32(58).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                amount: 0,
                                count: 0,
                                description: "",
                                givingType: 0,
                                randomId: 0,
                                peer: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = w(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.count = w(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.description = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.givingType = n.int32();
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.randomId = w(n.int64());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.peer = f.L0.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.giftPacketId && t.uint32(8).int64(e.giftPacketId), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                giftPacketId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.giftPacketId = w(n.int64());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.giftPacketId && t.uint32(8).int64(e.giftPacketId), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                giftPacketId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.giftPacketId = w(n.int64());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        for (let n of (0 !== e.openedCount && t.uint32(8).int64(e.openedCount), 0 !== e.selfWinAmount && t.uint32(16).int64(e.selfWinAmount), 0 !== e.rank && t.uint32(24).int64(e.rank), e.giftReceivers)) a.E0.encode(n, t.uint32(34).fork()).join();
                        return 0 !== e.status && t.uint32(40).int32(e.status), void 0 !== e.verificationDeadline && u.j1.encode({
                            value: e.verificationDeadline
                        }, t.uint32(50).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                openedCount: 0,
                                selfWinAmount: 0,
                                rank: 0,
                                giftReceivers: [],
                                status: 0,
                                verificationDeadline: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.openedCount = w(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.selfWinAmount = w(n.int64());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.rank = w(n.int64());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.giftReceivers.push(a.E0.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.status = n.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.verificationDeadline = u.j1.decode(n, n.uint32()).value;
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.giftPacketId && t.uint32(8).int64(e.giftPacketId), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                giftPacketId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.giftPacketId = w(n.int64());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return 0 !== e.userIds && t.uint32(8).int64(e.userIds), 0 !== e.amount && t.uint32(16).int64(e.amount), t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                userIds: 0,
                                amount: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.userIds = w(n.int64());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.amount = w(n.int64());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        for (let n of e.winners) v.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                winners: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.winners.push(v.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                };
            class N {
                GetBalance(e, t) {
                    return this.rpc.unary(S, e, t)
                }
                constructor(e) {
                    (0, c._)(this, "rpc", void 0), this.rpc = e, this.GetBalance = this.GetBalance.bind(this)
                }
            }
            let S = {
                methodName: "GetBalance",
                service: {
                    serviceName: "bale.balebank.v1.GoldWallet"
                },
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return l.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary(e) {
                        let t = p.decode(e);
                        return {
                            ...t,
                            toObject: () => t
                        }
                    }
                }
            };
            class A {
                SendGoldGiftPacket(e, t) {
                    return this.rpc.unary(O, e, t)
                }
                OpenGoldGiftPacket(e, t) {
                    return this.rpc.unary(R, e, t)
                }
                GetWinnerIDs(e, t) {
                    return this.rpc.unary(G, e, t)
                }
                constructor(e) {
                    (0, c._)(this, "rpc", void 0), this.rpc = e, this.SendGoldGiftPacket = this.SendGoldGiftPacket.bind(this), this.OpenGoldGiftPacket = this.OpenGoldGiftPacket.bind(this), this.GetWinnerIDs = this.GetWinnerIDs.bind(this)
                }
            }
            let g = {
                    serviceName: "bale.balebank.v1.GoldGiftPacket"
                },
                O = {
                    methodName: "SendGoldGiftPacket",
                    service: g,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return I.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = k.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                R = {
                    methodName: "OpenGoldGiftPacket",
                    service: g,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return b.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = T.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                G = {
                    methodName: "GetWinnerIDs",
                    service: g,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return E.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = h.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                };

            function w(e) {
                return globalThis.Number(e.toString())
            }
        },
        85977: function(e, t, n) {
            n.d(t, {
                oO: () => G
            });
            var i = n(51116),
                o = n(86654),
                r = n(15382),
                s = n(68647);
            let c = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.version && t.uint32(8).int32(e.version), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                version: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.version = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.version && t.uint32(8).int32(e.version), !1 !== e.isChanged && t.uint32(16).bool(e.isChanged), "" !== e.data && t.uint32(26).string(e.data), e.banners)) r.fJ.encode(n, t.uint32(34).fork()).join();
                        for (let n of (void 0 !== e.services && r.Nv.encode(e.services, t.uint32(42).fork()).join(), e.sections)) r.MM.encode(n, t.uint32(50).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                version: 0,
                                isChanged: !1,
                                data: "",
                                banners: [],
                                services: void 0,
                                sections: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.version = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.isChanged = n.bool();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.data = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.banners.push(r.fJ.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.services = r.Nv.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    s.sections.push(r.MM.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                a = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                u = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.customItems && r.Ur.encode(e.customItems, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                customItems: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.customItems = r.Ur.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                f = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (t.uint32(10).fork(), e.items)) t.int32(n);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                items: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    r.items.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) r.items.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                l = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.customItems && r.Ur.encode(e.customItems, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                customItems: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.customItems = r.Ur.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                I = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.bots) r.Sk.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.bots.push(r.Sk.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                b = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.categorizedBots) r.aH.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                categorizedBots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.categorizedBots.push(r.aH.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                T = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.categoryId && t.uint32(8).int32(e.categoryId), void 0 !== e.pagination && r.Zx.encode(e.pagination, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                categoryId: 0,
                                pagination: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.categoryId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.pagination = r.Zx.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                E = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.bots && r.aH.encode(e.bots, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                bots: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.bots = r.aH.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                h = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.banners) r.fJ.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                banners: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.banners.push(r.fJ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                N = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                S = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.bots) r.Sk.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.bots.push(r.Sk.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                g = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.bots) r.Sk.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.bots.push(r.Sk.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                O = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botId && t.uint32(8).int32(e.botId), void 0 !== e.pagination && r.Zx.encode(e.pagination, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                botId: 0,
                                pagination: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.botId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.pagination = r.Zx.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.bots) r.Sk.encode(n, t.uint32(10).fork()).join();
                        return void 0 !== e.moreBotsUrl && s.hU.encode({
                            value: e.moreBotsUrl
                        }, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            c = {
                                bots: [],
                                moreBotsUrl: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    c.bots.push(r.Sk.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    c.moreBotsUrl = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return c
                    }
                };
            class G {
                GetServices(e, t) {
                    return this.rpc.unary(m, e, t)
                }
                GetCustomServices(e, t) {
                    return this.rpc.unary(C, e, t)
                }
                EditCustomServices(e, t) {
                    return this.rpc.unary(y, e, t)
                }
                GetAdvertisementBot(e, t) {
                    return this.rpc.unary(V, e, t)
                }
                GetTrendBots(e, t) {
                    return this.rpc.unary(_, e, t)
                }
                GetUserRepeatedBots(e, t) {
                    return this.rpc.unary(B, e, t)
                }
                GetBotsByCategory(e, t) {
                    return this.rpc.unary(D, e, t)
                }
                GetCategorizedBots(e, t) {
                    return this.rpc.unary(P, e, t)
                }
                GetBotBanners(e, t) {
                    return this.rpc.unary(U, e, t)
                }
                GetRecommendedBots(e, t) {
                    return this.rpc.unary(j, e, t)
                }
                constructor(e) {
                    (0, i._)(this, "rpc", void 0), this.rpc = e, this.GetServices = this.GetServices.bind(this), this.GetCustomServices = this.GetCustomServices.bind(this), this.EditCustomServices = this.EditCustomServices.bind(this), this.GetAdvertisementBot = this.GetAdvertisementBot.bind(this), this.GetTrendBots = this.GetTrendBots.bind(this), this.GetUserRepeatedBots = this.GetUserRepeatedBots.bind(this), this.GetBotsByCategory = this.GetBotsByCategory.bind(this), this.GetCategorizedBots = this.GetCategorizedBots.bind(this), this.GetBotBanners = this.GetBotBanners.bind(this), this.GetRecommendedBots = this.GetRecommendedBots.bind(this)
                }
            }
            let w = {
                    serviceName: "bale.garson.v1.Garson"
                },
                m = {
                    methodName: "GetServices",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return c.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = d.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                C = {
                    methodName: "GetCustomServices",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return a.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = u.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                y = {
                    methodName: "EditCustomServices",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return f.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = l.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                V = {
                    methodName: "GetAdvertisementBot",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return p.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = I.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                _ = {
                    methodName: "GetTrendBots",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return N.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = S.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                B = {
                    methodName: "GetUserRepeatedBots",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return A.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = g.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                D = {
                    methodName: "GetBotsByCategory",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return T.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = E.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                P = {
                    methodName: "GetCategorizedBots",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
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
                    methodName: "GetBotBanners",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = h.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                j = {
                    methodName: "GetRecommendedBots",
                    service: w,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return O.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = R.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                }
        },
        15382: function(e, t, n) {
            n.d(t, {
                MM: () => O,
                Sk: () => N,
                Nv: () => D,
                Jk: () => u,
                jN: () => d,
                Ur: () => h,
                _X: () => a,
                Zx: () => g,
                fJ: () => v,
                aH: () => A,
                oG: () => f
            });
            var i, o, r, s, c, d, a, u, f, l, p = n(86654);
            let I = {
                encode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                    return t
                },
                decode(e, t) {
                    let n = e instanceof p.V5 ? e : new p.V5(e),
                        i = void 0 === t ? n.len : n.pos + t;
                    for (; n.pos < i;) {
                        let e = n.uint32();
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return {}
                }
            };
            var k = n(68647),
                b = n(87728);
            (i = d || (d = {}))[i.GARSONITEMACTION_UNKNOWN = 0] = "GARSONITEMACTION_UNKNOWN", i[i.GARSONITEMACTION_URL = 1] = "GARSONITEMACTION_URL", i[i.GARSONITEMACTION_PEER = 2] = "GARSONITEMACTION_PEER", i[i.GARSONITEMACTION_CARD2CARD = 3] = "GARSONITEMACTION_CARD2CARD", i[i.GARSONITEMACTION_CARD_BALANCE = 4] = "GARSONITEMACTION_CARD_BALANCE", i[i.GARSONITEMACTION_BILL = 5] = "GARSONITEMACTION_BILL", i[i.GARSONITEMACTION_CHARGE = 6] = "GARSONITEMACTION_CHARGE", i[i.GARSONITEMACTION_PFM = 7] = "GARSONITEMACTION_PFM", i[i.GARSONITEMACTION_USSD = 8] = "GARSONITEMACTION_USSD", i[i.GARSONITEMACTION_INVOICE = 9] = "GARSONITEMACTION_INVOICE", i[i.GARSONITEMACTION_INTENT_URL = 10] = "GARSONITEMACTION_INTENT_URL", i[i.GARSONITEMACTION_MENU = 11] = "GARSONITEMACTION_MENU", i[i.GARSONITEMACTION_MONEY_REQUEST = 12] = "GARSONITEMACTION_MONEY_REQUEST", i[i.GARSONITEMACTION_CROWDFUNDING = 13] = "GARSONITEMACTION_CROWDFUNDING", i[i.GARSONITEMACTION_GIFT_PACKET = 14] = "GARSONITEMACTION_GIFT_PACKET", (o = a || (a = {}))[o.GARSONSECTIONTYPE_UNKNOWN = 0] = "GARSONSECTIONTYPE_UNKNOWN", o[o.GARSONSECTIONTYPE_SHORTCUTS = 1] = "GARSONSECTIONTYPE_SHORTCUTS", o[o.GARSONSECTIONTYPE_CUSTOM_SERVICES = 2] = "GARSONSECTIONTYPE_CUSTOM_SERVICES", o[o.GARSONSECTIONTYPE_BANNERS = 3] = "GARSONSECTIONTYPE_BANNERS", o[o.GARSONSECTIONTYPE_BOTS_VITRINE = 4] = "GARSONSECTIONTYPE_BOTS_VITRINE", o[o.GARSONSECTIONTYPE_EXTRA = 5] = "GARSONSECTIONTYPE_EXTRA", (r = u || (u = {}))[r.GARSONNAVIGATIONTYPE_NOWHERE = 0] = "GARSONNAVIGATIONTYPE_NOWHERE", r[r.GARSONNAVIGATIONTYPE_ALL_SERVICES = 1] = "GARSONNAVIGATIONTYPE_ALL_SERVICES", r[r.GARSONNAVIGATIONTYPE_ALL_BOTS = 2] = "GARSONNAVIGATIONTYPE_ALL_BOTS", (s = f || (f = {}))[s.GARSONBADGETYPE_UNKNOWN = 0] = "GARSONBADGETYPE_UNKNOWN", s[s.GARSONBADGETYPE_NEW = 1] = "GARSONBADGETYPE_NEW", s[s.GARSONBADGETYPE_RECOMMENDED = 2] = "GARSONBADGETYPE_RECOMMENDED", s[s.GARSONBADGETYPE_AD = 3] = "GARSONBADGETYPE_AD", (c = l || (l = {}))[c.SERVICEITEMDISPLAYTYPE_ICON = 0] = "SERVICEITEMDISPLAYTYPE_ICON", c[c.SERVICEITEMDISPLAYTYPE_CARD = 1] = "SERVICEITEMDISPLAYTYPE_CARD";
            let T = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.type && t.uint32(8).int32(e.type), void 0 !== e.payload && E.encode(e.payload, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                type: 0,
                                payload: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.type = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.payload = E.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.empty && I.encode(e.empty, t.uint32(10).fork()).join(), void 0 !== e.url && t.uint32(18).string(e.url), void 0 !== e.peer && b.L0.encode(e.peer, t.uint32(26).fork()).join(), void 0 !== e.menu && j.encode(e.menu, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                empty: void 0,
                                url: void 0,
                                peer: void 0,
                                menu: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.empty = I.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.url = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.peer = b.L0.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.menu = j.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.action && T.encode(e.action, t.uint32(10).fork()).join(), void 0 !== e.url && t.uint32(18).string(e.url), 0 !== e.fileIdBanner && t.uint32(24).int32(e.fileIdBanner), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                action: void 0,
                                url: void 0,
                                fileIdBanner: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.action = T.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.url = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.fileIdBanner = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of (t.uint32(10).fork(), e.items)) t.int32(n);
                        return t.join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                items: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if (e >>> 3 == 1) {
                                if (8 === e) {
                                    o.items.push(n.int32());
                                    continue
                                }
                                if (10 === e) {
                                    let e = n.uint32() + n.pos;
                                    for (; n.pos < e;) o.items.push(n.int32());
                                    continue
                                }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                N = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), "" !== e.description && t.uint32(18).string(e.description), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                botUserId: 0,
                                description: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.botUserId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.description = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.id && t.uint32(8).int32(e.id), "" !== e.text && t.uint32(18).string(e.text), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                id: 0,
                                text: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.text = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of (void 0 !== e.category && S.encode(e.category, t.uint32(10).fork()).join(), e.bots)) N.encode(n, t.uint32(18).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                category: void 0,
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.category = S.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.bots.push(N.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.page && t.uint32(8).int32(e.page), 0 !== e.limit && t.uint32(16).int32(e.limit), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                page: 0,
                                limit: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.page = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.limit = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.type && t.uint32(8).int32(e.type), void 0 !== e.known && R.encode(e.known, t.uint32(18).fork()).join(), void 0 !== e.shortcuts && G.encode(e.shortcuts, t.uint32(26).fork()).join(), void 0 !== e.customServices && h.encode(e.customServices, t.uint32(34).fork()).join(), void 0 !== e.banners && w.encode(e.banners, t.uint32(42).fork()).join(), void 0 !== e.botsVitrine && m.encode(e.botsVitrine, t.uint32(50).fork()).join(), void 0 !== e.extra && C.encode(e.extra, t.uint32(58).fork()).join(), void 0 !== e.cardExtra && y.encode(e.cardExtra, t.uint32(74).fork()).join(), 0 !== e.sectionId && t.uint32(64).int32(e.sectionId), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                type: 0,
                                known: void 0,
                                shortcuts: void 0,
                                customServices: void 0,
                                banners: void 0,
                                botsVitrine: void 0,
                                extra: void 0,
                                cardExtra: void 0,
                                sectionId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.type = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.known = R.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.shortcuts = G.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.customServices = h.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.banners = w.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.botsVitrine = m.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.extra = C.decode(n, n.uint32());
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    o.cardExtra = y.decode(n, n.uint32());
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.sectionId = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t;
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return {}
                    }
                },
                G = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of e.shortcuts) _.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                shortcuts: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.shortcuts.push(_.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of e.banners) v.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                banners: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.banners.push(v.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of e.bots) N.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.bots.push(N.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of ("" !== e.title && t.uint32(10).string(e.title), void 0 !== e.buttonNavigation && V.encode(e.buttonNavigation, t.uint32(18).fork()).join(), "" !== e.buttonText && t.uint32(26).string(e.buttonText), 0 !== e.badgeType && t.uint32(32).int32(e.badgeType), e.items)) B.encode(n, t.uint32(42).fork()).join();
                        return 0 !== e.displayType && t.uint32(48).int32(e.displayType), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                title: "",
                                buttonNavigation: void 0,
                                buttonText: "",
                                badgeType: 0,
                                items: [],
                                displayType: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.buttonNavigation = V.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.buttonText = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.badgeType = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.items.push(B.decode(n, n.uint32()));
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.displayType = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.servicesSection && C.encode(e.servicesSection, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                servicesSection: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.servicesSection = C.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.type && t.uint32(8).int32(e.type), 0 !== e.serviceCategoryId && t.uint32(16).int32(e.serviceCategoryId), void 0 !== e.destinationUrl && k.hU.encode({
                            value: e.destinationUrl
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                type: 0,
                                serviceCategoryId: 0,
                                destinationUrl: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.type = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.serviceCategoryId = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.destinationUrl = k.hU.decode(n, n.uint32()).value;
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.navigation && V.encode(e.navigation, t.uint32(10).fork()).join(), "" !== e.title && t.uint32(18).string(e.title), "" !== e.icon && t.uint32(26).string(e.icon), "" !== e.bgColor && t.uint32(34).string(e.bgColor), 0 !== e.shortcutId && t.uint32(40).int32(e.shortcutId), "" !== e.darkBgColor && t.uint32(50).string(e.darkBgColor), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                navigation: void 0,
                                title: "",
                                icon: "",
                                bgColor: "",
                                shortcutId: 0,
                                darkBgColor: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.navigation = V.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.icon = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.bgColor = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.shortcutId = n.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.darkBgColor = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.service && U.encode(e.service, t.uint32(10).fork()).join(), void 0 !== e.bot && N.encode(e.bot, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                service: void 0,
                                bot: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.service = U.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.bot = N.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of e.categories) P.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                categories: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.categories.push(P.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of (0 !== e.id && t.uint32(8).int32(e.id), "" !== e.title && t.uint32(18).string(e.title), 0 !== e.badgeType && t.uint32(24).int32(e.badgeType), "" !== e.badge && t.uint32(34).string(e.badge), e.items)) U.encode(n, t.uint32(42).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                id: 0,
                                title: "",
                                badgeType: 0,
                                badge: "",
                                items: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.badgeType = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.badge = n.string();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.items.push(U.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.id && t.uint32(8).int32(e.id), "" !== e.title && t.uint32(18).string(e.title), "" !== e.badge && t.uint32(26).string(e.badge), "" !== e.icon && t.uint32(34).string(e.icon), 0 !== e.action && t.uint32(40).int32(e.action), void 0 !== e.payload && E.encode(e.payload, t.uint32(50).fork()).join(), 0 !== e.minAppVersion && t.uint32(56).int32(e.minAppVersion), 0 !== e.maxAppVersion && t.uint32(64).int32(e.maxAppVersion), "" !== e.customIcon && t.uint32(74).string(e.customIcon), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                id: 0,
                                title: "",
                                badge: "",
                                icon: "",
                                action: 0,
                                payload: void 0,
                                minAppVersion: 0,
                                maxAppVersion: 0,
                                customIcon: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.badge = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.icon = n.string();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.action = n.int32();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.payload = E.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    o.minAppVersion = n.int32();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.maxAppVersion = n.int32();
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    o.customIcon = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let n of e.items) M.encode(n, t.uint32(10).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                items: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.items.push(M.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.id && t.uint32(8).int32(e.id), "" !== e.title && t.uint32(18).string(e.title), "" !== e.icon && t.uint32(26).string(e.icon), 0 !== e.action && t.uint32(32).int32(e.action), void 0 !== e.payload && E.encode(e.payload, t.uint32(42).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            o = {
                                id: 0,
                                title: "",
                                icon: "",
                                action: 0,
                                payload: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.id = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.icon = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.action = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.payload = E.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                }
        },
        20125: function(e, t, n) {
            n.d(t, {
                BY: () => s,
                E0: () => d,
                ve: () => r
            });
            var i, o, r, s, c = n(86654);
            (i = r || (r = {}))[i.GIFTOPENINGSTATUS_ALREADY_RECEIVED = 0] = "GIFTOPENINGSTATUS_ALREADY_RECEIVED", i[i.GIFTOPENINGSTATUS_SOLD_OUT = 1] = "GIFTOPENINGSTATUS_SOLD_OUT", i[i.GIFTOPENINGSTATUS_GIFT_CREATOR = 2] = "GIFTOPENINGSTATUS_GIFT_CREATOR", i[i.GIFTOPENINGSTATUS_SUCCESSFUL = 3] = "GIFTOPENINGSTATUS_SUCCESSFUL", i[i.GIFTOPENINGSTATUS_PENDING = 4] = "GIFTOPENINGSTATUS_PENDING", (o = s || (s = {}))[o.GIFTRECEIVERSORDERTYPE_UNKNOWN = 0] = "GIFTRECEIVERSORDERTYPE_UNKNOWN", o[o.GIFTRECEIVERSORDERTYPE_PRIZE_ASC = 1] = "GIFTRECEIVERSORDERTYPE_PRIZE_ASC", o[o.GIFTRECEIVERSORDERTYPE_DATE_ASC = 2] = "GIFTRECEIVERSORDERTYPE_DATE_ASC", o[o.GIFTRECEIVERSORDERTYPE_PRIZE_DESC = 3] = "GIFTRECEIVERSORDERTYPE_PRIZE_DESC", o[o.GIFTRECEIVERSORDERTYPE_DATE_DESC = 4] = "GIFTRECEIVERSORDERTYPE_DATE_DESC";
            let d = {
                encode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new c.fI;
                    return 0 !== e.userId && t.uint32(8).int32(e.userId), "0" !== e.amount && t.uint32(16).int64(e.amount), 0 !== e.date && t.uint32(24).int64(e.date), t
                },
                decode(e, t) {
                    let n = e instanceof c.V5 ? e : new c.V5(e),
                        i = void 0 === t ? n.len : n.pos + t,
                        o = {
                            userId: 0,
                            amount: "0",
                            date: 0
                        };
                    for (; n.pos < i;) {
                        let e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (8 !== e) break;
                                o.userId = n.int32();
                                continue;
                            case 2:
                                if (16 !== e) break;
                                o.amount = n.int64().toString();
                                continue;
                            case 3:
                                if (24 !== e) break;
                                o.date = globalThis.Number(n.int64().toString());
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        n.skip(7 & e)
                    }
                    return o
                }
            }
        }
    }
]);
//# sourceMappingURL=3000.02da4265.js.map