try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            i = (new e.Error).stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "b292ffd6-3824-48e0-b3f2-27957faef374", e._sentryDebugIdIdentifier = "sentry-dbid-b292ffd6-3824-48e0-b3f2-27957faef374")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7472"], {
        45943: function(e, i, n) {
            n.d(i, {
                A0: () => S,
                A5G: () => ez,
                AEM: () => eT,
                ATI: () => z,
                EJR: () => y,
                Ej8: () => em,
                F$g: () => X,
                F5j: () => U,
                G4$: () => D,
                Iu3: () => eV,
                LDZ: () => eG,
                Mul: () => R,
                NDw: () => L,
                NT$: () => x,
                NZ4: () => A,
                O6W: () => ey,
                Ptc: () => eI,
                REg: () => V,
                VUs: () => eU,
                VtI: () => M,
                WKL: () => B,
                XQw: () => N,
                XVk: () => eg,
                Ycm: () => j,
                YmU: () => T,
                Zop: () => C,
                gvF: () => ew,
                jHw: () => ej,
                kmN: () => q,
                nDK: () => eq,
                niz: () => eP,
                onA: () => is,
                q31: () => P,
                qem: () => eB,
                sDY: () => G,
                tIS: () => eS,
                tgn: () => I,
                xTW: () => O
            });
            var t = n(51116),
                r = n(86654),
                o = n(26016),
                s = n(12314),
                u = n(68647),
                d = n(36343),
                a = n(76421),
                c = n(55935),
                p = n(87728),
                f = n(71879);
            let l = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) p.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(p.wX.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) d.hI.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(d.hI.decode(n, n.uint32()));
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
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), 0 !== e.limit && i.uint32(16).int32(e.limit), void 0 !== e.next && u.vt.encode({
                            value: e.next
                        }, i.uint32(26).fork()).join(), void 0 !== e.condition && d.bx.encode(e.condition, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                limit: 0,
                                next: void 0,
                                condition: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.limit = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.next = u.vt.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.condition = d.bx.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.members) d.dP.encode(n, i.uint32(10).fork()).join();
                        return void 0 !== e.next && u.vt.encode({
                            value: e.next
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                members: [],
                                next: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.members.push(d.dP.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.next = u.vt.decode(n, n.uint32()).value;
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (0 !== e.mode && i.uint32(8).int32(e.mode), !1 !== e.isOwner && i.uint32(16).bool(e.isOwner), e.filters)) d.hz.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                mode: 0,
                                isOwner: !1,
                                filters: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.mode = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.isOwner = n.bool();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.filters.push(d.hz.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) p.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(p.wX.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.peer && p.wX.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = p.wX.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.avatars && s.LN.encode(e.avatars, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                avatars: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.avatars = s.LN.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "" !== e.title && i.uint32(18).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.advertisementType && i.uint32(16).int32(e.advertisementType), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                advertisementType: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.advertisementType = n.int32();
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
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "" !== e.channelNativeAdTagId && i.uint32(26).string(e.channelNativeAdTagId), "" !== e.channelBannerAdTagId && i.uint32(34).string(e.channelBannerAdTagId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                channelNativeAdTagId: "",
                                channelBannerAdTagId: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.channelNativeAdTagId = n.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.channelBannerAdTagId = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.exInfo && p.A7.encode(e.exInfo, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                exInfo: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.exInfo = p.A7.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.avatar && s.eu.encode(e.avatar, i.uint32(18).fork()).join(), void 0 !== e.avatars && s.LN.encode(e.avatars, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                avatar: void 0,
                                avatars: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.avatar = s.eu.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.avatars = s.LN.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.topic && u.hU.encode({
                            value: e.topic
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                topic: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.topic = u.hU.decode(n, n.uint32()).value;
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.about && u.hU.encode({
                            value: e.about
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                about: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.about = u.hU.decode(n, n.uint32()).value;
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "" !== e.nick && i.uint32(18).string(e.nick), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                nick: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.nick = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.ext && o.I8.encode(e.ext, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                groupId: 0,
                                ext: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.ext = o.I8.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                U = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.ext && o.I8.encode(e.ext, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                groupId: 0,
                                ext: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.ext = o.I8.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                q = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.userId && i.uint32(16).int32(e.userId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                userId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.userId = n.int32();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                X = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), !1 !== e.canSendMessages && i.uint32(16).bool(e.canSendMessages), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                canSendMessages: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.canSendMessages = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), !1 !== e.canViewMembers && i.uint32(16).bool(e.canViewMembers), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                canViewMembers: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.canViewMembers = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), !1 !== e.canInviteMembers && i.uint32(16).bool(e.canInviteMembers), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                canInviteMembers: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.canInviteMembers = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), !1 !== e.isMember && i.uint32(16).bool(e.isMember), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                isMember: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.isMember = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (0 !== e.groupId && i.uint32(8).int32(e.groupId), e.members)) d.dP.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                members: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.members.push(d.dP.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (i.uint32(10).fork(), e.removedUsers)) i.int32(n);
                        for (let n of (i.join(), e.addedMembers)) d.dP.encode(n, i.uint32(18).fork()).join();
                        return 0 !== e.membersCount && i.uint32(24).int32(e.membersCount), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                removedUsers: [],
                                addedMembers: [],
                                membersCount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 === e) {
                                        o.removedUsers.push(n.int32());
                                        continue
                                    }
                                    if (10 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.removedUsers.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 2:
                                    if (18 !== e) break;
                                    o.addedMembers.push(d.dP.decode(n, n.uint32()));
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.membersCount = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                L = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.membersCount && i.uint32(16).int32(e.membersCount), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                membersCount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.membersCount = n.int32();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.userId && i.uint32(16).int32(e.userId), !1 !== e.isAdmin && i.uint32(24).bool(e.isAdmin), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                userId: 0,
                                isAdmin: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.userId = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.isAdmin = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                J = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of ("0" !== e.rid && i.uint32(8).int64(e.rid), "" !== e.title && i.uint32(18).string(e.title), e.users)) p.Uw.encode(n, i.uint32(26).fork()).join();
                        for (let n of (0 !== e.groupType && i.uint32(48).int32(e.groupType), i.uint32(58).fork(), e.optimizations)) i.int32(n);
                        return i.join(), void 0 !== e.nick && u.hU.encode({
                            value: e.nick
                        }, i.uint32(66).fork()).join(), 0 !== e.restriction && i.uint32(72).int32(e.restriction), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                rid: "0",
                                title: "",
                                users: [],
                                groupType: 0,
                                optimizations: [],
                                nick: void 0,
                                restriction: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.users.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.groupType = n.int32();
                                    continue;
                                case 7:
                                    if (56 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (58 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 8:
                                    if (66 !== e) break;
                                    o.nick = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    o.restriction = n.int32();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (0 !== e.seq && i.uint32(8).int32(e.seq), 0 !== e.state.length && i.uint32(18).bytes(e.state), void 0 !== e.group && d.YJ.encode(e.group, i.uint32(26).fork()).join(), e.users)) f.KJ.encode(n, i.uint32(34).fork()).join();
                        for (let n of e.userPeers) p.Uw.encode(n, i.uint32(42).fork()).join();
                        for (let n of e.notAddedUserPeers) p.Uw.encode(n, i.uint32(50).fork()).join();
                        return "" !== e.inviteLink && i.uint32(58).string(e.inviteLink), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                seq: 0,
                                state: new Uint8Array(0),
                                group: void 0,
                                users: [],
                                userPeers: [],
                                notAddedUserPeers: [],
                                inviteLink: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.seq = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.state = n.bytes();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.group = d.YJ.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.users.push(f.KJ.decode(n, n.uint32()));
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.userPeers.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.notAddedUserPeers.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.inviteLink = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(32).int64(e.rid), "" !== e.title && i.uint32(26).string(e.title), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                title: "",
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                F = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "" !== e.cardNumber && i.uint32(18).string(e.cardNumber), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                cardNumber: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.cardNumber = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeerr && p.wX.encode(e.groupPeerr, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeerr: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeerr = p.wX.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "" !== e.defaultCardNumber && i.uint32(10).string(e.defaultCardNumber), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                defaultCardNumber: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.defaultCardNumber = n.string();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(32).int64(e.rid), void 0 !== e.fileLocation && s.KC.encode(e.fileLocation, i.uint32(26).fork()).join(), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                fileLocation: void 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.fileLocation = s.KC.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                _ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.avatar && s.eu.encode(e.avatar, i.uint32(10).fork()).join(), 0 !== e.seq && i.uint32(16).int32(e.seq), 0 !== e.state.length && i.uint32(26).bytes(e.state), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                avatar: void 0,
                                seq: 0,
                                state: new Uint8Array(0),
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.avatar = s.eu.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.seq = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.state = n.bytes();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = i1(n.int64());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(32).int64(e.rid), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), void 0 !== e.avaterId && o.j1.encode(e.avaterId, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                groupPeer: void 0,
                                rid: "0",
                                optimizations: [],
                                avaterId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    s.rid = n.int64().toString();
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        s.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) s.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 6:
                                    if (50 !== e) break;
                                    s.avaterId = o.j1.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                $ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), void 0 !== e.about && u.hU.encode({
                                value: e.about
                            }, i.uint32(26).fork()).join(), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                about: void 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.about = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                Z = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "" !== e.nick && i.uint32(18).string(e.nick), "0" !== e.randomId && i.uint32(24).int64(e.randomId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                nick: "",
                                randomId: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.nick = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.randomId = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ee = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), e.users)) p.Uw.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                users: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.users.push(p.Uw.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ei = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.notAddedUserPeers) p.Uw.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                notAddedUserPeers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.notAddedUserPeers.push(p.Uw.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                en = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(32).int64(e.rid), void 0 !== e.user && p.Uw.encode(e.user, i.uint32(26).fork()).join(), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), void 0 !== e.messageCount && u.as.encode({
                            value: e.messageCount
                        }, i.uint32(50).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                user: void 0,
                                optimizations: [],
                                messageCount: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.user = p.Uw.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 6:
                                    if (50 !== e) break;
                                    o.messageCount = u.as.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                et = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(16).int64(e.rid), i.uint32(26).fork(), e.optimizations)) i.int32(n);
                        return i.join(), void 0 !== e.makeOrphan && u._t.encode({
                            value: e.makeOrphan
                        }, i.uint32(34).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                optimizations: [],
                                makeOrphan: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                                    break;
                                case 4:
                                    if (34 !== e) break;
                                    o.makeOrphan = u._t.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                er = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.rid && i.uint32(32).int64(e.rid), void 0 !== e.user && p.Uw.encode(e.user, i.uint32(26).fork()).join(), i.uint32(42).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                rid: "0",
                                user: void 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.user = p.Uw.decode(n, n.uint32());
                                    continue;
                                case 5:
                                    if (40 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (42 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eo = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), void 0 !== e.userPeer && p.Uw.encode(e.userPeer, i.uint32(18).fork()).join(), void 0 !== e.adminTitle && u.hU.encode({
                            value: e.adminTitle
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                userPeer: void 0,
                                adminTitle: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.userPeer = p.Uw.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.adminTitle = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                es = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), void 0 !== e.userPeer && p.Uw.encode(e.userPeer, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                userPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.userPeer = p.Uw.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eu = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), 0 !== e.newOwner && i.uint32(16).int32(e.newOwner), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                newOwner: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.newOwner = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ed = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "" !== e.url && i.uint32(10).string(e.url), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                url: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.url = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ea = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ec = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ep = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of ("" !== e.token && i.uint32(10).string(e.token), i.uint32(18).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                token: "",
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.token = n.string();
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ef = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.group && d.YJ.encode(e.group, i.uint32(10).fork()).join(), 0 !== e.inviterUserId && i.uint32(64).int32(e.inviterUserId), e.users)) f.KJ.encode(n, i.uint32(42).fork()).join();
                        for (let n of e.userPeers) p.Uw.encode(n, i.uint32(58).fork()).join();
                        return "0" !== e.rid && i.uint32(48).int64(e.rid), 0 !== e.seq && i.uint32(16).int32(e.seq), 0 !== e.groupSeq && i.uint32(72).int32(e.groupSeq), 0 !== e.state.length && i.uint32(26).bytes(e.state), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                inviterUserId: 0,
                                users: [],
                                userPeers: [],
                                rid: "0",
                                seq: 0,
                                groupSeq: 0,
                                state: new Uint8Array(0),
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = d.YJ.decode(n, n.uint32());
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.inviterUserId = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.users.push(f.KJ.decode(n, n.uint32()));
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.userPeers.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.seq = n.int32();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    o.groupSeq = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.state = n.bytes();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                el = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.peer && p.xM.encode(e.peer, i.uint32(10).fork()).join(), i.uint32(18).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = p.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (18 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eh = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.group && d.YJ.encode(e.group, i.uint32(10).fork()).join(), 0 !== e.inviterUserId && i.uint32(64).int32(e.inviterUserId), e.users)) f.KJ.encode(n, i.uint32(42).fork()).join();
                        for (let n of e.userPeers) p.Uw.encode(n, i.uint32(58).fork()).join();
                        return "0" !== e.rid && i.uint32(48).int64(e.rid), 0 !== e.seq && i.uint32(16).int32(e.seq), 0 !== e.groupSeq && i.uint32(72).int32(e.groupSeq), 0 !== e.state.length && i.uint32(26).bytes(e.state), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                inviterUserId: 0,
                                users: [],
                                userPeers: [],
                                rid: "0",
                                seq: 0,
                                groupSeq: 0,
                                state: new Uint8Array(0),
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = d.YJ.decode(n, n.uint32());
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.inviterUserId = n.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.users.push(f.KJ.decode(n, n.uint32()));
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    o.userPeers.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.seq = n.int32();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    o.groupSeq = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.state = n.bytes();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ek = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.senderUserId && i.uint32(8).int32(e.senderUserId), void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(18).fork()).join(), 0 !== e.date && i.uint32(24).int64(e.date), "0" !== e.msgRid && i.uint32(32).int64(e.msgRid), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                senderUserId: 0,
                                groupPeer: void 0,
                                date: 0,
                                msgRid: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.senderUserId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.date = i1(n.int64());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.msgRid = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eb = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ev = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), "0" !== e.msgRid && i.uint32(16).int64(e.msgRid), 0 !== e.msgDate && i.uint32(24).int64(e.msgDate), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                msgRid: "0",
                                msgDate: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.msgRid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.msgDate = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eg = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(72).int64(e.rid), 0 !== e.inviteUid && i.uint32(40).int32(e.inviteUid), 0 !== e.date && i.uint32(64).int64(e.date), void 0 !== e.seq && u.as.encode({
                            value: e.seq
                        }, i.uint32(82).fork()).join(), !1 !== e.isJoined && i.uint32(88).bool(e.isJoined), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                inviteUid: 0,
                                date: 0,
                                seq: void 0,
                                isJoined: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 9:
                                    if (72 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.inviteUid = n.int32();
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    o.date = i1(n.int64());
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    o.seq = u.as.decode(n, n.uint32()).value;
                                    continue;
                                case 11:
                                    if (88 !== e) break;
                                    o.isJoined = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ew = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(40).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), 0 !== e.inviterUid && i.uint32(24).int32(e.inviterUid), 0 !== e.date && i.uint32(32).int64(e.date), !1 !== e.isJoined && i.uint32(48).bool(e.isJoined), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                inviterUid: 0,
                                date: 0,
                                isJoined: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.inviterUid = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = i1(n.int64());
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    o.isJoined = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                em = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(32).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), 0 !== e.date && i.uint32(24).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.date = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eI = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(40).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), 0 !== e.kickerUid && i.uint32(24).int32(e.kickerUid), "0" !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                kickerUid: 0,
                                date: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.kickerUid = n.int32();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ey = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (0 !== e.groupId && i.uint32(8).int32(e.groupId), e.members)) d.dP.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                members: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.members.push(d.dP.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eV = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(40).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), "" !== e.title && i.uint32(26).string(e.title), "0" !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                title: "",
                                date: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.title = n.string();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eS = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(40).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), void 0 !== e.nick && u.hU.encode({
                            value: e.nick
                        }, i.uint32(26).fork()).join(), "0" !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                nick: void 0,
                                date: "0"
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.nick = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = n.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ej = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(16).int64(e.rid), 0 !== e.uid && i.uint32(24).int32(e.uid), void 0 !== e.topic && u.hU.encode({
                            value: e.topic
                        }, i.uint32(34).fork()).join(), 0 !== e.date && i.uint32(40).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                topic: void 0,
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.topic = u.hU.decode(n, n.uint32()).value;
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.date = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eP = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.about && u.hU.encode({
                            value: e.about
                        }, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                about: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.about = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eG = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), "0" !== e.rid && i.uint32(40).int64(e.rid), 0 !== e.uid && i.uint32(16).int32(e.uid), void 0 !== e.avatar && s.eu.encode(e.avatar, i.uint32(26).fork()).join(), 0 !== e.date && i.uint32(32).int64(e.date), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                rid: "0",
                                uid: 0,
                                avatar: void 0,
                                date: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.avatar = s.eu.decode(n, n.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.date = i1(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ez = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.message && a.NNI.encode(e.message, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                message: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.message = a.NNI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eT = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), void 0 !== e.messageId && a.vzI.encode(e.messageId, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                messageId: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.messageId = a.vzI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eU = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.restriction && i.uint32(16).int32(e.restriction), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                restriction: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.restriction = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eq = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.uid && i.uint32(16).int32(e.uid), void 0 !== e.permissions && d.xB.encode(e.permissions, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                uid: 0,
                                permissions: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.uid = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.permissions = d.xB.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eB = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), void 0 !== e.permissions && d.xB.encode(e.permissions, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                permissions: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.permissions = d.xB.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eX = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), 0 !== e.userId && i.uint32(16).int32(e.userId), !1 !== e.canSeeMessages && i.uint32(24).bool(e.canSeeMessages), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                userId: 0,
                                canSeeMessages: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.userId = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.canSeeMessages = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eN = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return !1 !== e.canSeeMessages && i.uint32(8).bool(e.canSeeMessages), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                canSeeMessages: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.canSeeMessages = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eO = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), void 0 !== e.user && p.Uw.encode(e.user, i.uint32(18).fork()).join(), i.uint32(26).fork(), e.optimizations)) i.int32(n);
                        return i.join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                user: void 0,
                                optimizations: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.user = p.Uw.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (24 === e) {
                                        o.optimizations.push(n.int32());
                                        continue
                                    }
                                    if (26 === e) {
                                        let e = n.uint32() + n.pos;
                                        for (; n.pos < e;) o.optimizations.push(n.int32());
                                        continue
                                    }
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eM = {
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
                eA = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), 0 !== e.userId && i.uint32(16).int32(e.userId), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                userId: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.userId = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eC = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupOutPeer && p.wX.encode(e.groupOutPeer, i.uint32(10).fork()).join(), 0 !== e.restriction && i.uint32(16).int32(e.restriction), void 0 !== e.nick && u.hU.encode({
                            value: e.nick
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupOutPeer: void 0,
                                restriction: 0,
                                nick: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupOutPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.restriction = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.nick = u.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eR = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupOutPeer && p.wX.encode(e.groupOutPeer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupOutPeer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupOutPeer = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eL = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.users) p.Uw.encode(n, i.uint32(10).fork()).join();
                        for (let n of e.admins) d.dP.encode(n, i.uint32(18).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                users: [],
                                admins: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.users.push(p.Uw.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.admins.push(d.dP.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eD = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.peers) p.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peers.push(p.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ex = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) d.YJ.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(d.YJ.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eJ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), 0 !== e.page && i.uint32(16).int32(e.page), 0 !== e.limit && i.uint32(24).int32(e.limit), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                page: 0,
                                limit: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.page = n.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.limit = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eE = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.pins) a.NNI.encode(n, i.uint32(10).fork()).join();
                        return 0 !== e.count && i.uint32(16).int32(e.count), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                pins: [],
                                count: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.pins.push(a.NNI.decode(n, n.uint32()));
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.count = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eQ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), void 0 !== e.user && p.Uw.encode(e.user, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                user: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.user = p.Uw.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eF = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.permissions && d.xB.encode(e.permissions, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                permissions: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.permissions = d.xB.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eK = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), void 0 !== e.user && p.Uw.encode(e.user, i.uint32(18).fork()).join(), void 0 !== e.permissions && d.xB.encode(e.permissions, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                user: void 0,
                                permissions: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.user = p.Uw.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.permissions = d.xB.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eY = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), void 0 !== e.permissions && d.xB.encode(e.permissions, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                permissions: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.permissions = d.xB.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eH = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e_ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.membersCount && i.uint32(8).int32(e.membersCount), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                membersCount: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.membersCount = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eW = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.peer && p.wX.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e$ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.fullGroup && d.Vn.encode(e.fullGroup, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                fullGroup: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.fullGroup = d.Vn.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                eZ = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of (void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), e.codes)) i.uint32(18).string(n);
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                codes: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.codes.push(n.string());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e2 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.peer && p.Uw.encode(e.peer, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                peer: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = p.Uw.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e0 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) p.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(p.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e3 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "0" !== e.rid && i.uint32(8).int64(e.rid), void 0 !== e.channel && p.wX.encode(e.channel, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                rid: "0",
                                channel: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.channel = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e1 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.discussionGroup && p.wX.encode(e.discussionGroup, i.uint32(10).fork()).join(), void 0 !== e.group && d.YJ.encode(e.group, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                discussionGroup: void 0,
                                group: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.discussionGroup = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.group = d.YJ.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e4 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "0" !== e.rid && i.uint32(8).int64(e.rid), void 0 !== e.channel && p.wX.encode(e.channel, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                rid: "0",
                                channel: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.rid = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.channel = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e5 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.channel && p.wX.encode(e.channel, i.uint32(10).fork()).join(), void 0 !== e.discussionGroup && p.wX.encode(e.discussionGroup, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                channel: void 0,
                                discussionGroup: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.channel = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.discussionGroup = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e7 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && p.wX.encode(e.group, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = p.wX.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e6 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.bannedUsers) d.cW.encode(n, i.uint32(26).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                bannedUsers: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 3:
                                    if (26 !== e) break;
                                    o.bannedUsers.push(d.cW.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e8 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.groupPeer && p.wX.encode(e.groupPeer, i.uint32(10).fork()).join(), !1 !== e.canSeeHistory && i.uint32(16).bool(e.canSeeHistory), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupPeer: void 0,
                                canSeeHistory: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groupPeer = p.wX.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.canSeeHistory = n.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                e9 = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "" !== e.token && i.uint32(10).string(e.token), void 0 !== e.isOpenedOutsideBale && o.Ci.encode(e.isOpenedOutsideBale, i.uint32(18).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                token: "",
                                isOpenedOutsideBale: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.token = n.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    s.isOpenedOutsideBale = o.Ci.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                ie = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.group && d.Vn.encode(e.group, i.uint32(10).fork()).join(), 0 !== e.action && i.uint32(16).int32(e.action), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                group: void 0,
                                action: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.group = d.Vn.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.action = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ii = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.groups) p.wX.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groups: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.groups.push(p.wX.decode(n, n.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                it = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.source && i.uint32(8).int32(e.source), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                source: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.source = n.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                ir = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.groupId && i.uint32(8).int32(e.groupId), 0 !== e.memberId && i.uint32(16).int32(e.memberId), "" !== e.title && i.uint32(26).string(e.title), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                groupId: 0,
                                memberId: 0,
                                title: ""
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.groupId = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.memberId = n.int32();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.title = n.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return o
                    }
                },
                io = {
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
                };
            class is {
                LoadFullGroups(e, i) {
                    return this.rpc.unary(id, e, i)
                }
                GetFullGroup(e, i) {
                    return this.rpc.unary(ia, e, i)
                }
                LoadMembers(e, i) {
                    return this.rpc.unary(ic, e, i)
                }
                GetMyGroups(e, i) {
                    return this.rpc.unary(ip, e, i)
                }
                LoadGroupAvatars(e, i) {
                    return this.rpc.unary(il, e, i)
                }
                CreateGroup(e, i) {
                    return this.rpc.unary(ih, e, i)
                }
                InviteUsers(e, i) {
                    return this.rpc.unary(ik, e, i)
                }
                EditGroupTitle(e, i) {
                    return this.rpc.unary(ib, e, i)
                }
                EditGroupDefaultCardNumber(e, i) {
                    return this.rpc.unary(iv, e, i)
                }
                GetGroupDefaultCardNumber(e, i) {
                    return this.rpc.unary(ig, e, i)
                }
                EditGroupAvatar(e, i) {
                    return this.rpc.unary(iw, e, i)
                }
                RemoveGroupAvatar(e, i) {
                    return this.rpc.unary(im, e, i)
                }
                EditGroupAbout(e, i) {
                    return this.rpc.unary(iI, e, i)
                }
                EditChannelNick(e, i) {
                    return this.rpc.unary(iy, e, i)
                }
                InviteUser(e, i) {
                    return this.rpc.unary(iV, e, i)
                }
                LeaveGroup(e, i) {
                    return this.rpc.unary(iS, e, i)
                }
                KickUser(e, i) {
                    return this.rpc.unary(ij, e, i)
                }
                MakeUserAdmin(e, i) {
                    return this.rpc.unary(iP, e, i)
                }
                RemoveUserAdmin(e, i) {
                    return this.rpc.unary(iG, e, i)
                }
                TransferOwnership(e, i) {
                    return this.rpc.unary(iz, e, i)
                }
                GetGroupInviteURL(e, i) {
                    return this.rpc.unary(iT, e, i)
                }
                RevokeInviteURL(e, i) {
                    return this.rpc.unary(iU, e, i)
                }
                JoinGroup(e, i) {
                    return this.rpc.unary(iq, e, i)
                }
                JoinPublicGroup(e, i) {
                    return this.rpc.unary(iB, e, i)
                }
                PinMessage(e, i) {
                    return this.rpc.unary(iX, e, i)
                }
                RemovePin(e, i) {
                    return this.rpc.unary(iN, e, i)
                }
                RemoveSinglePin(e, i) {
                    return this.rpc.unary(iO, e, i)
                }
                GetPins(e, i) {
                    return this.rpc.unary(iM, e, i)
                }
                SetCanSeeMessages(e, i) {
                    return this.rpc.unary(iA, e, i)
                }
                GetCanSeeMessages(e, i) {
                    return this.rpc.unary(iC, e, i)
                }
                GetMemberPermissions(e, i) {
                    return this.rpc.unary(iR, e, i)
                }
                SetMemberPermissions(e, i) {
                    return this.rpc.unary(iL, e, i)
                }
                SetGroupDefaultPermissions(e, i) {
                    return this.rpc.unary(iD, e, i)
                }
                SetRestriction(e, i) {
                    return this.rpc.unary(ix, e, i)
                }
                FetchGroupAdmins(e, i) {
                    return this.rpc.unary(iJ, e, i)
                }
                LoadGroups(e, i) {
                    return this.rpc.unary(iE, e, i)
                }
                GetGroupMembersCount(e, i) {
                    return this.rpc.unary(iQ, e, i)
                }
                SetAvailableReactions(e, i) {
                    return this.rpc.unary(iF, e, i)
                }
                GetMutualGroups(e, i) {
                    return this.rpc.unary(iK, e, i)
                }
                SetDiscussionGroup(e, i) {
                    return this.rpc.unary(iY, e, i)
                }
                RemoveDiscussionGroup(e, i) {
                    return this.rpc.unary(iH, e, i)
                }
                AddDiscussionGroupAdmin(e, i) {
                    return this.rpc.unary(i_, e, i)
                }
                UnBanUser(e, i) {
                    return this.rpc.unary(iW, e, i)
                }
                GetBannedUsers(e, i) {
                    return this.rpc.unary(i$, e, i)
                }
                SetCanSeeHistory(e, i) {
                    return this.rpc.unary(iZ, e, i)
                }
                GetGroupPreview(e, i) {
                    return this.rpc.unary(i2, e, i)
                }
                GetGroupRecommendations(e, i) {
                    return this.rpc.unary(i0, e, i)
                }
                SetMemberCustomTitle(e, i) {
                    return this.rpc.unary(i3, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.LoadFullGroups = this.LoadFullGroups.bind(this), this.GetFullGroup = this.GetFullGroup.bind(this), this.LoadMembers = this.LoadMembers.bind(this), this.GetMyGroups = this.GetMyGroups.bind(this), this.LoadGroupAvatars = this.LoadGroupAvatars.bind(this), this.CreateGroup = this.CreateGroup.bind(this), this.InviteUsers = this.InviteUsers.bind(this), this.EditGroupTitle = this.EditGroupTitle.bind(this), this.EditGroupDefaultCardNumber = this.EditGroupDefaultCardNumber.bind(this), this.GetGroupDefaultCardNumber = this.GetGroupDefaultCardNumber.bind(this), this.EditGroupAvatar = this.EditGroupAvatar.bind(this), this.RemoveGroupAvatar = this.RemoveGroupAvatar.bind(this), this.EditGroupAbout = this.EditGroupAbout.bind(this), this.EditChannelNick = this.EditChannelNick.bind(this), this.InviteUser = this.InviteUser.bind(this), this.LeaveGroup = this.LeaveGroup.bind(this), this.KickUser = this.KickUser.bind(this), this.MakeUserAdmin = this.MakeUserAdmin.bind(this), this.RemoveUserAdmin = this.RemoveUserAdmin.bind(this), this.TransferOwnership = this.TransferOwnership.bind(this), this.GetGroupInviteURL = this.GetGroupInviteURL.bind(this), this.RevokeInviteURL = this.RevokeInviteURL.bind(this), this.JoinGroup = this.JoinGroup.bind(this), this.JoinPublicGroup = this.JoinPublicGroup.bind(this), this.PinMessage = this.PinMessage.bind(this), this.RemovePin = this.RemovePin.bind(this), this.RemoveSinglePin = this.RemoveSinglePin.bind(this), this.GetPins = this.GetPins.bind(this), this.SetCanSeeMessages = this.SetCanSeeMessages.bind(this), this.GetCanSeeMessages = this.GetCanSeeMessages.bind(this), this.GetMemberPermissions = this.GetMemberPermissions.bind(this), this.SetMemberPermissions = this.SetMemberPermissions.bind(this), this.SetGroupDefaultPermissions = this.SetGroupDefaultPermissions.bind(this), this.SetRestriction = this.SetRestriction.bind(this), this.FetchGroupAdmins = this.FetchGroupAdmins.bind(this), this.LoadGroups = this.LoadGroups.bind(this), this.GetGroupMembersCount = this.GetGroupMembersCount.bind(this), this.SetAvailableReactions = this.SetAvailableReactions.bind(this), this.GetMutualGroups = this.GetMutualGroups.bind(this), this.SetDiscussionGroup = this.SetDiscussionGroup.bind(this), this.RemoveDiscussionGroup = this.RemoveDiscussionGroup.bind(this), this.AddDiscussionGroupAdmin = this.AddDiscussionGroupAdmin.bind(this), this.UnBanUser = this.UnBanUser.bind(this), this.GetBannedUsers = this.GetBannedUsers.bind(this), this.SetCanSeeHistory = this.SetCanSeeHistory.bind(this), this.GetGroupPreview = this.GetGroupPreview.bind(this), this.GetGroupRecommendations = this.GetGroupRecommendations.bind(this), this.SetMemberCustomTitle = this.SetMemberCustomTitle.bind(this)
                }
            }
            let iu = {
                    serviceName: "bale.groups.v1.Groups"
                },
                id = {
                    methodName: "LoadFullGroups",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return l.encode(this).finish()
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
                ia = {
                    methodName: "GetFullGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eW.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = e$.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                ic = {
                    methodName: "LoadMembers",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return k.encode(this).finish()
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
                ip = {
                    methodName: "GetMyGroups",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
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
                il = {
                    methodName: "LoadGroupAvatars",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return w.encode(this).finish()
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
                ih = {
                    methodName: "CreateGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return J.encode(this).finish()
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
                ik = {
                    methodName: "InviteUsers",
                    service: iu,
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
                ib = {
                    methodName: "EditGroupTitle",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return Q.encode(this).finish()
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
                iv = {
                    methodName: "EditGroupDefaultCardNumber",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return F.encode(this).finish()
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
                    methodName: "GetGroupDefaultCardNumber",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return K.encode(this).finish()
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
                iw = {
                    methodName: "EditGroupAvatar",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return H.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = _.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                im = {
                    methodName: "RemoveGroupAvatar",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return W.encode(this).finish()
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
                iI = {
                    methodName: "EditGroupAbout",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return $.encode(this).finish()
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
                iy = {
                    methodName: "EditChannelNick",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return Z.encode(this).finish()
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
                iV = {
                    methodName: "InviteUser",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return en.encode(this).finish()
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
                iS = {
                    methodName: "LeaveGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return et.encode(this).finish()
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
                ij = {
                    methodName: "KickUser",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return er.encode(this).finish()
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
                iP = {
                    methodName: "MakeUserAdmin",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eo.encode(this).finish()
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
                iG = {
                    methodName: "RemoveUserAdmin",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return es.encode(this).finish()
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
                iz = {
                    methodName: "TransferOwnership",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eu.encode(this).finish()
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
                iT = {
                    methodName: "GetGroupInviteURL",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ea.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ed.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iU = {
                    methodName: "RevokeInviteURL",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ec.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ed.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iq = {
                    methodName: "JoinGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ep.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ef.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iB = {
                    methodName: "JoinPublicGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return el.encode(this).finish()
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
                iX = {
                    methodName: "PinMessage",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ek.encode(this).finish()
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
                iN = {
                    methodName: "RemovePin",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eb.encode(this).finish()
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
                iO = {
                    methodName: "RemoveSinglePin",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ev.encode(this).finish()
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
                iM = {
                    methodName: "GetPins",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eJ.encode(this).finish()
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
                iA = {
                    methodName: "SetCanSeeMessages",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eX.encode(this).finish()
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
                iC = {
                    methodName: "GetCanSeeMessages",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eA.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eN.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iR = {
                    methodName: "GetMemberPermissions",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eQ.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eF.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iL = {
                    methodName: "SetMemberPermissions",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eK.encode(this).finish()
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
                iD = {
                    methodName: "SetGroupDefaultPermissions",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eY.encode(this).finish()
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
                ix = {
                    methodName: "SetRestriction",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eC.encode(this).finish()
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
                iJ = {
                    methodName: "FetchGroupAdmins",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eR.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eL.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iE = {
                    methodName: "LoadGroups",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eD.encode(this).finish()
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
                iQ = {
                    methodName: "GetGroupMembersCount",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eH.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = e_.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iF = {
                    methodName: "SetAvailableReactions",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eZ.encode(this).finish()
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
                iK = {
                    methodName: "GetMutualGroups",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e2.encode(this).finish()
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
                iY = {
                    methodName: "SetDiscussionGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e3.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = e1.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iH = {
                    methodName: "RemoveDiscussionGroup",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e4.encode(this).finish()
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
                i_ = {
                    methodName: "AddDiscussionGroupAdmin",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e5.encode(this).finish()
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
                iW = {
                    methodName: "UnBanUser",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return eO.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = eM.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                i$ = {
                    methodName: "GetBannedUsers",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e7.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = e6.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                iZ = {
                    methodName: "SetCanSeeHistory",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e8.encode(this).finish()
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
                i2 = {
                    methodName: "GetGroupPreview",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return e9.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ie.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                i0 = {
                    methodName: "GetGroupRecommendations",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return it.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = ii.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                i3 = {
                    methodName: "SetMemberCustomTitle",
                    service: iu,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return ir.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = io.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function i1(e) {
                return globalThis.Number(e.toString())
            }
        },
        78625: function(e, i, n) {
            function t(e) {
                return e[0]
            }

            function r(e) {
                return e[e.length - 1]
            }

            function o(e, i) {
                for (let n = e.length - 1; n >= 0; n--)
                    if (i(e[n])) return e[n]
            }

            function s(e, i) {
                for (let n = 1; n < e.length; n++) {
                    let t, r = e[n];
                    for (t = n - 1; t >= 0 && i(e[t], r) > 0; t--) e[t + 1] = e[t];
                    e[t + 1] = r
                }
                return e
            }
            n.d(i, {
                $1: () => t,
                HV: () => r,
                Uk: () => o,
                wo: () => s
            })
        }
    }
]);
//# sourceMappingURL=7472.a53dab57.js.map