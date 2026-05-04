try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "31018294-2045-451d-b5a1-5ac526bc139a", e._sentryDebugIdIdentifier = "sentry-dbid-31018294-2045-451d-b5a1-5ac526bc139a")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5110"], {
        78533: function(e, t, n) {
            n.d(t, {
                uf: () => N
            });
            var i = n(51116),
                o = n(86654),
                r = n(26016),
                s = n(68647),
                d = n(75097),
                a = n(76421),
                c = n(55935),
                u = n(87728);
            let l = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.historyMessageIdentifier && a.J2R.encode(e.historyMessageIdentifier, t.uint32(10).fork()).join(), void 0 !== e.data && s.hU.encode({
                            value: e.data
                        }, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                historyMessageIdentifier: void 0,
                                data: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.historyMessageIdentifier = a.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.data = s.hU.decode(n, n.uint32()).value;
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.peer && u.Cu.encode(e.peer, t.uint32(10).fork()).join(), void 0 !== e.messageId && a.vzI.encode(e.messageId, t.uint32(18).fork()).join(), void 0 !== e.data && s.hU.encode({
                            value: e.data
                        }, t.uint32(26).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                peer: void 0,
                                messageId: void 0,
                                data: void 0
                            };
                        for (; n.pos < i;) {
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
                                    if (26 !== e) break;
                                    r.data = s.hU.decode(n, n.uint32()).value;
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.answer && d.pI.encode(e.answer, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                answer: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.answer = d.pI.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.templateMessageId && a.J2R.encode(e.templateMessageId, t.uint32(10).fork()).join(), void 0 !== e.data && s.hU.encode({
                            value: e.data
                        }, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                templateMessageId: void 0,
                                data: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.templateMessageId = a.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.data = s.hU.decode(n, n.uint32()).value;
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
                k = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), void 0 !== e.queryId && s.hU.encode({
                            value: e.queryId
                        }, t.uint32(18).fork()).join(), void 0 !== e.data && s.hU.encode({
                            value: e.data
                        }, t.uint32(26).fork()).join(), void 0 !== e.buttonText && s.hU.encode({
                            value: e.buttonText
                        }, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0,
                                queryId: void 0,
                                data: void 0,
                                buttonText: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.queryId = s.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.data = s.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.buttonText = s.hU.decode(n, n.uint32()).value;
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
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.list && r.v.encode(e.list, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                list: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.list = r.v.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), 0 !== e.userId && t.uint32(16).int32(e.userId), "" !== e.nonce && t.uint32(26).string(e.nonce), "" !== e.sign && t.uint32(34).string(e.sign), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0,
                                userId: 0,
                                nonce: "",
                                sign: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.userId = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.nonce = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.sign = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), "" !== e.data && t.uint32(18).string(e.data), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0,
                                data: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.data = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.hash && t.uint32(10).string(e.hash), "" !== e.queryId && t.uint32(18).string(e.queryId), 0 !== e.authDate && t.uint32(24).int64(e.authDate), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                hash: "",
                                queryId: "",
                                authDate: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.hash = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.queryId = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.authDate = globalThis.Number(n.int64().toString());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.pagination && d.jq.encode(e.pagination, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                pagination: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.pagination = d.jq.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of (0 !== e.pageCount && t.uint32(8).int32(e.pageCount), e.bots)) d.cC.encode(n, t.uint32(18).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                pageCount: 0,
                                bots: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.pageCount = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.bots.push(d.cC.decode(n, n.uint32()));
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                U = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.botInfo && d.KP.encode(e.botInfo, t.uint32(10).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botInfo: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.botInfo = d.KP.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.query && t.uint32(10).string(e.query), void 0 !== e.peer && u.L0.encode(e.peer, t.uint32(18).fork()).join(), 0 !== e.botUserId && t.uint32(24).int32(e.botUserId), "" !== e.offset && t.uint32(34).string(e.offset), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                query: "",
                                peer: void 0,
                                botUserId: 0,
                                offset: ""
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.query = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.peer = u.L0.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    r.botUserId = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.offset = n.string();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of e.results) d.L.encode(n, t.uint32(10).fork()).join();
                        return void 0 !== e.nextOffset && r.hU.encode(e.nextOffset, t.uint32(18).fork()).join(), void 0 !== e.queryId && r.j1.encode(e.queryId, t.uint32(26).fork()).join(), !1 !== e.isGallery && t.uint32(32).bool(e.isGallery), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            s = {
                                results: [],
                                nextOffset: void 0,
                                queryId: void 0,
                                isGallery: !1
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.results.push(d.L.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.nextOffset = r.hU.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    s.queryId = r.j1.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.isGallery = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                G = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return 0 !== e.botUserId && t.uint32(8).int32(e.botUserId), 0 !== e.groupId && t.uint32(16).int32(e.groupId), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                botUserId: 0,
                                groupId: 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.botUserId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.groupId = n.int32();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return !1 !== e.hasAccessToMessages && t.uint32(8).bool(e.hasAccessToMessages), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                hasAccessToMessages: !1
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    r.hasAccessToMessages = n.bool();
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.purchaseMessageId && a.J2R.encode(e.purchaseMessageId, t.uint32(10).fork()).join(), void 0 !== e.invoiceIdentifier && d.zy.encode(e.invoiceIdentifier, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                purchaseMessageId: void 0,
                                invoiceIdentifier: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.purchaseMessageId = a.J2R.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.invoiceIdentifier = d.zy.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        for (let n of ("" !== e.title && t.uint32(10).string(e.title), "0" !== e.totalAmount && t.uint32(16).int64(e.totalAmount), e.paymentsHistory)) d.hr.encode(n, t.uint32(26).fork()).join();
                        for (let n of (void 0 !== e.session && d.dH.encode(e.session, t.uint32(34).fork()).join(), void 0 !== e.disapproved && d.g7.encode(e.disapproved, t.uint32(42).fork()).join(), "" !== e.description && t.uint32(50).string(e.description), e.labeledPrices)) d.v9.encode(n, t.uint32(58).fork()).join();
                        return t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                title: "",
                                totalAmount: "0",
                                paymentsHistory: [],
                                session: void 0,
                                disapproved: void 0,
                                description: "",
                                labeledPrices: []
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.title = n.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    r.totalAmount = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.paymentsHistory.push(d.hr.decode(n, n.uint32()));
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.session = d.dH.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.disapproved = d.g7.decode(n, n.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    r.description = n.string();
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    r.labeledPrices.push(d.v9.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return r
                    }
                },
                A = {
                    encode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.paymentSessionId && t.uint32(10).string(e.paymentSessionId), "" !== e.paymentOptionId && t.uint32(18).string(e.paymentOptionId), void 0 !== e.wallet && d.yS.encode(e.wallet, t.uint32(26).fork()).join(), void 0 !== e.gateway && d.Zf.encode(e.gateway, t.uint32(34).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                paymentSessionId: "",
                                paymentOptionId: "",
                                wallet: void 0,
                                gateway: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.paymentSessionId = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.paymentOptionId = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.wallet = d.yS.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.gateway = d.Zf.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return void 0 !== e.gatewayRedirect && d.ZQ.encode(e.gatewayRedirect, t.uint32(10).fork()).join(), void 0 !== e.paymentReceipt && d.hr.encode(e.paymentReceipt, t.uint32(18).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                gatewayRedirect: void 0,
                                paymentReceipt: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.gatewayRedirect = d.ZQ.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.paymentReceipt = d.hr.decode(n, n.uint32());
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
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new o.fI;
                        return "" !== e.id && t.uint32(10).string(e.id), void 0 !== e.messageId && a.vzI.encode(e.messageId, t.uint32(18).fork()).join(), void 0 !== e.peer && u.AQ.encode(e.peer, t.uint32(26).fork()).join(), void 0 !== e.openDialogAction && d.ez.encode(e.openDialogAction, t.uint32(34).fork()).join(), void 0 !== e.done && d.gp.encode(e.done, t.uint32(42).fork()).join(), t
                    },
                    decode(e, t) {
                        let n = e instanceof o.V5 ? e : new o.V5(e),
                            i = void 0 === t ? n.len : n.pos + t,
                            r = {
                                id: "",
                                messageId: void 0,
                                peer: void 0,
                                openDialogAction: void 0,
                                done: void 0
                            };
                        for (; n.pos < i;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    r.id = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    r.messageId = a.vzI.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    r.peer = u.AQ.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    r.openDialogAction = d.ez.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    r.done = d.gp.decode(n, n.uint32());
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
                };
            class N {
                SendInlineCallBackData(e, t) {
                    return this.rpc.unary(x, e, t)
                }
                SendInlineCallback(e, t) {
                    return this.rpc.unary(H, e, t)
                }
                SendAuthenticatedInlineCallBackData(e, t) {
                    return this.rpc.unary(L, e, t)
                }
                SendMiniAppData(e, t) {
                    return this.rpc.unary(W, e, t)
                }
                GetBotWhiteList(e, t) {
                    return this.rpc.unary(J, e, t)
                }
                GetUserContext(e, t) {
                    return this.rpc.unary(_, e, t)
                }
                GetWebappHash(e, t) {
                    return this.rpc.unary(E, e, t)
                }
                GetBots(e, t) {
                    return this.rpc.unary(Q, e, t)
                }
                GetBotInfo(e, t) {
                    return this.rpc.unary(Z, e, t)
                }
                GetInlineBotResults(e, t) {
                    return this.rpc.unary(K, e, t)
                }
                GetBotGroupPermissions(e, t) {
                    return this.rpc.unary(Y, e, t)
                }
                GetPaymentDetails(e, t) {
                    return this.rpc.unary(F, e, t)
                }
                MakePayment(e, t) {
                    return this.rpc.unary(X, e, t)
                }
                InvokeCustomAction(e, t) {
                    return this.rpc.unary($, e, t)
                }
                constructor(e) {
                    (0, i._)(this, "rpc", void 0), this.rpc = e, this.SendInlineCallBackData = this.SendInlineCallBackData.bind(this), this.SendInlineCallback = this.SendInlineCallback.bind(this), this.SendAuthenticatedInlineCallBackData = this.SendAuthenticatedInlineCallBackData.bind(this), this.SendMiniAppData = this.SendMiniAppData.bind(this), this.GetBotWhiteList = this.GetBotWhiteList.bind(this), this.GetUserContext = this.GetUserContext.bind(this), this.GetWebappHash = this.GetWebappHash.bind(this), this.GetBots = this.GetBots.bind(this), this.GetBotInfo = this.GetBotInfo.bind(this), this.GetInlineBotResults = this.GetInlineBotResults.bind(this), this.GetBotGroupPermissions = this.GetBotGroupPermissions.bind(this), this.GetPaymentDetails = this.GetPaymentDetails.bind(this), this.MakePayment = this.MakePayment.bind(this), this.InvokeCustomAction = this.InvokeCustomAction.bind(this)
                }
            }
            let P = {
                    serviceName: "bale.ketf.v1.Ketf"
                },
                x = {
                    methodName: "SendInlineCallBackData",
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
                            let t = c.Ou.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                H = {
                    methodName: "SendInlineCallback",
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
                            let t = p.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                L = {
                    methodName: "SendAuthenticatedInlineCallBackData",
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
                            let t = b.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                W = {
                    methodName: "SendMiniAppData",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = v.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                J = {
                    methodName: "GetBotWhiteList",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return I.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = y.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                _ = {
                    methodName: "GetUserContext",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return g.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = w.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                E = {
                    methodName: "GetWebappHash",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return m.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = B.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                Q = {
                    methodName: "GetBots",
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
                            let t = V.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                Z = {
                    methodName: "GetBotInfo",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return j.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = U.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                K = {
                    methodName: "GetInlineBotResults",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return q.encode(this).finish()
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
                Y = {
                    methodName: "GetBotGroupPermissions",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return G.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = z.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                F = {
                    methodName: "GetPaymentDetails",
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
                            let t = D.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                X = {
                    methodName: "MakePayment",
                    service: P,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return A.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let t = M.decode(e);
                            return {
                                ...t,
                                toObject: () => t
                            }
                        }
                    }
                },
                $ = {
                    methodName: "InvokeCustomAction",
                    service: P,
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
        }
    }
]);
//# sourceMappingURL=5110.31f6b97a.js.map