try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "543bf94a-cd07-47cf-9499-bbf2c3a30e62", e._sentryDebugIdIdentifier = "sentry-dbid-543bf94a-cd07-47cf-9499-bbf2c3a30e62")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4265"], {
        1963: function(e, n, o) {
            o.d(n, {
                AB: () => f,
                Eh: () => u,
                GX: () => a,
                LF: () => k,
                QH: () => c,
                Sq: () => l,
                yz: () => t
            });
            var i, t, d = o(86654),
                r = o(68647),
                s = o(87728);
            (i = t || (t = {}))[i.FULLSCREEN = 0] = "FULLSCREEN", i[i.FULL_SIZE = 1] = "FULL_SIZE", i[i.COMPACT = 2] = "COMPACT";
            let c = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.startParam && r.hU.encode({
                            value: e.startParam
                        }, n.uint32(10).fork()).join(), void 0 !== e.peer && s.Cu.encode(e.peer, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                startParam: void 0,
                                peer: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.startParam = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.peer = s.Cu.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                a = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.url && r.hU.encode({
                            value: e.url
                        }, n.uint32(10).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                url: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.url = r.hU.decode(o, o.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                u = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return "" !== e.url && n.uint32(10).string(e.url), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                url: ""
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.url = o.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                l = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return "" !== e.shortName && n.uint32(10).string(e.shortName), void 0 !== e.startParam && r.hU.encode({
                            value: e.startParam
                        }, n.uint32(18).fork()).join(), void 0 !== e.peer && s.Cu.encode(e.peer, n.uint32(26).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                shortName: "",
                                startParam: void 0,
                                peer: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.shortName = o.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.startParam = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.peer = s.Cu.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                f = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.bgColor && r.hU.encode({
                            value: e.bgColor
                        }, n.uint32(10).fork()).join(), void 0 !== e.secondaryBgColor && r.hU.encode({
                            value: e.secondaryBgColor
                        }, n.uint32(18).fork()).join(), void 0 !== e.textColor && r.hU.encode({
                            value: e.textColor
                        }, n.uint32(26).fork()).join(), void 0 !== e.hintColor && r.hU.encode({
                            value: e.hintColor
                        }, n.uint32(34).fork()).join(), void 0 !== e.linkColor && r.hU.encode({
                            value: e.linkColor
                        }, n.uint32(42).fork()).join(), void 0 !== e.buttonColor && r.hU.encode({
                            value: e.buttonColor
                        }, n.uint32(50).fork()).join(), void 0 !== e.buttonTextColor && r.hU.encode({
                            value: e.buttonTextColor
                        }, n.uint32(58).fork()).join(), void 0 !== e.headerBgColor && r.hU.encode({
                            value: e.headerBgColor
                        }, n.uint32(66).fork()).join(), void 0 !== e.accentTextColor && r.hU.encode({
                            value: e.accentTextColor
                        }, n.uint32(74).fork()).join(), void 0 !== e.sectionBgColor && r.hU.encode({
                            value: e.sectionBgColor
                        }, n.uint32(82).fork()).join(), void 0 !== e.sectionHeaderTextColor && r.hU.encode({
                            value: e.sectionHeaderTextColor
                        }, n.uint32(90).fork()).join(), void 0 !== e.sectionSeparatorColor && r.hU.encode({
                            value: e.sectionSeparatorColor
                        }, n.uint32(98).fork()).join(), void 0 !== e.subtitleTextColor && r.hU.encode({
                            value: e.subtitleTextColor
                        }, n.uint32(106).fork()).join(), void 0 !== e.destructiveTextColor && r.hU.encode({
                            value: e.destructiveTextColor
                        }, n.uint32(114).fork()).join(), void 0 !== e.bottomBarBgColor && r.hU.encode({
                            value: e.bottomBarBgColor
                        }, n.uint32(122).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                bgColor: void 0,
                                secondaryBgColor: void 0,
                                textColor: void 0,
                                hintColor: void 0,
                                linkColor: void 0,
                                buttonColor: void 0,
                                buttonTextColor: void 0,
                                headerBgColor: void 0,
                                accentTextColor: void 0,
                                sectionBgColor: void 0,
                                sectionHeaderTextColor: void 0,
                                sectionSeparatorColor: void 0,
                                subtitleTextColor: void 0,
                                destructiveTextColor: void 0,
                                bottomBarBgColor: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.bgColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.secondaryBgColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.textColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.hintColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.linkColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    t.buttonColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    t.buttonTextColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    t.headerBgColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    t.accentTextColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    t.sectionBgColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 11:
                                    if (90 !== e) break;
                                    t.sectionHeaderTextColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 12:
                                    if (98 !== e) break;
                                    t.sectionSeparatorColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 13:
                                    if (106 !== e) break;
                                    t.subtitleTextColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 14:
                                    if (114 !== e) break;
                                    t.destructiveTextColor = r.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 15:
                                    if (122 !== e) break;
                                    t.bottomBarBgColor = r.hU.decode(o, o.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                k = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return void 0 !== e.commands && v.encode(e.commands, n.uint32(10).fork()).join(), void 0 !== e.miniApp && E.encode(e.miniApp, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                commands: void 0,
                                miniApp: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.commands = v.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.miniApp = E.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                v = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n;
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return {}
                    }
                },
                E = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.fI;
                        return "" !== e.text && n.uint32(10).string(e.text), "" !== e.url && n.uint32(18).string(e.url), n
                    },
                    decode(e, n) {
                        let o = e instanceof d.V5 ? e : new d.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                text: "",
                                url: ""
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.text = o.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.url = o.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                }
        },
        59903: function(e, n, o) {
            o.d(n, {
                Dc: () => t
            });
            var i = o(86654);
            let t = {
                encode(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.fI;
                    return 0 !== e.seconds && n.uint32(8).int64(e.seconds), 0 !== e.nanos && n.uint32(16).int32(e.nanos), n
                },
                decode(e, n) {
                    let o = e instanceof i.V5 ? e : new i.V5(e),
                        t = void 0 === n ? o.len : o.pos + n,
                        d = {
                            seconds: 0,
                            nanos: 0
                        };
                    for (; o.pos < t;) {
                        let e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (8 !== e) break;
                                d.seconds = globalThis.Number(o.int64().toString());
                                continue;
                            case 2:
                                if (16 !== e) break;
                                d.nanos = o.int32();
                                continue
                        }
                        if ((7 & e) == 4 || 0 === e) break;
                        o.skip(7 & e)
                    }
                    return d
                }
            }
        },
        73088: function(e, n, o) {
            o.d(n, {
                Q_: () => v,
                dy: () => r,
                e1: () => s,
                t2: () => T
            });
            var i, t, d, r, s, c, a = o(86654),
                u = o(59903),
                l = o(55231),
                f = o(76421),
                k = o(87728);
            (i = r || (r = {}))[i.TASK_TYPE_UNKNOWN = 0] = "TASK_TYPE_UNKNOWN", i[i.TASK_TYPE_MESSAGE_SEND = 1] = "TASK_TYPE_MESSAGE_SEND", i[i.TASK_TYPE_MESSAGE_DELETE = 2] = "TASK_TYPE_MESSAGE_DELETE", i[i.TASK_TYPE_MULTI_MEDIA_MESSAGE_SEND = 3] = "TASK_TYPE_MULTI_MEDIA_MESSAGE_SEND", (t = s || (s = {}))[t.TASK_STATUS_UNKNOWN = 0] = "TASK_STATUS_UNKNOWN", t[t.TASK_STATUS_PENDING = 1] = "TASK_STATUS_PENDING", t[t.TASK_STATUS_PROCESSING = 2] = "TASK_STATUS_PROCESSING", t[t.TASK_STATUS_DONE = 3] = "TASK_STATUS_DONE", t[t.TASK_STATUS_FAILED = 4] = "TASK_STATUS_FAILED", t[t.TASK_STATUS_CANCELLED = 5] = "TASK_STATUS_CANCELLED", (d = c || (c = {}))[d.SCHEDULE_TYPE_UNKNOWN = 0] = "SCHEDULE_TYPE_UNKNOWN", d[d.SCHEDULE_TYPE_ONE_TIME = 1] = "SCHEDULE_TYPE_ONE_TIME", d[d.SCHEDULE_TYPE_RECURRING = 2] = "SCHEDULE_TYPE_RECURRING";
            let v = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.taskSendMessage && E.encode(e.taskSendMessage, n.uint32(10).fork()).join(), void 0 !== e.taskDeleteMessage && p.encode(e.taskDeleteMessage, n.uint32(18).fork()).join(), void 0 !== e.taskSendMultiMediaMessage && h.encode(e.taskSendMultiMediaMessage, n.uint32(26).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof a.V5 ? e : new a.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                taskSendMessage: void 0,
                                taskDeleteMessage: void 0,
                                taskSendMultiMediaMessage: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.taskSendMessage = E.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.taskDeleteMessage = p.decode(o, o.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.taskSendMultiMediaMessage = h.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                E = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        for (let o of (void 0 !== e.sendMessage && l.Z7L.encode(e.sendMessage, n.uint32(10).fork()).join(), e.quotedMessage)) f.EBV.encode(o, n.uint32(18).fork()).join();
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof a.V5 ? e : new a.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                sendMessage: void 0,
                                quotedMessage: []
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.sendMessage = l.Z7L.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.quotedMessage.push(f.EBV.decode(o, o.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                p = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.deleteMessage && l.yA3.encode(e.deleteMessage, n.uint32(10).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof a.V5 ? e : new a.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                deleteMessage: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.deleteMessage = l.yA3.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                h = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return void 0 !== e.sendMultiMediaMessage && l.mB9.encode(e.sendMultiMediaMessage, n.uint32(10).fork()).join(), void 0 !== e.quotedMessage && f.EBV.encode(e.quotedMessage, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof a.V5 ? e : new a.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                sendMultiMediaMessage: void 0,
                                quotedMessage: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.sendMultiMediaMessage = l.mB9.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.quotedMessage = f.EBV.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                T = {
                    encode(e) {
                        var n;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new a.fI;
                        return "0" !== e.taskId && o.uint32(8).int64(e.taskId), 0 !== e.taskType && o.uint32(16).int32(e.taskType), 0 !== e.status && o.uint32(24).int32(e.status), void 0 !== e.exPeer && k.Cu.encode(e.exPeer, o.uint32(34).fork()).join(), void 0 !== e.scheduledAt && u.Dc.encode({
                            seconds: Math.trunc((n = e.scheduledAt).getTime() / 1e3),
                            nanos: n.getTime() % 1e3 * 1e6
                        }, o.uint32(42).fork()).join(), void 0 !== e.payload && v.encode(e.payload, o.uint32(50).fork()).join(), o
                    },
                    decode(e, n) {
                        let o = e instanceof a.V5 ? e : new a.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                taskId: "0",
                                taskType: 0,
                                status: 0,
                                exPeer: void 0,
                                scheduledAt: void 0,
                                payload: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.taskId = o.int64().toString();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    t.taskType = o.int32();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    t.status = o.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.exPeer = k.Cu.decode(o, o.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.scheduledAt = function(e) {
                                        let n = 1e3 * (e.seconds || 0);
                                        return new globalThis.Date(n += (e.nanos || 0) / 1e6)
                                    }(u.Dc.decode(o, o.uint32()));
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    t.payload = v.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                }
        },
        89107: function(e, n, o) {
            o.d(n, {
                G6: () => D,
                I$: () => I,
                I3: () => u,
                Lf: () => M,
                Lq: () => y,
                ME: () => c,
                PP: () => s,
                YB: () => O,
                bK: () => H,
                et: () => A,
                nL: () => m,
                wu: () => p,
                zk: () => V
            });
            var i, t, d, r, s, c, a, u, l = o(86654),
                f = o(26016),
                k = o(68647),
                v = o(76421),
                E = o(87728);
            (i = s || (s = {}))[i.SEARCHPEERTYPE_GROUPS = 0] = "SEARCHPEERTYPE_GROUPS", i[i.SEARCHPEERTYPE_CONTACTS = 1] = "SEARCHPEERTYPE_CONTACTS", i[i.SEARCHPEERTYPE_PUBLIC = 2] = "SEARCHPEERTYPE_PUBLIC", (t = c || (c = {}))[t.SEARCHCONTENTTYPE_ANY = 0] = "SEARCHCONTENTTYPE_ANY", t[t.SEARCHCONTENTTYPE_TEXT = 1] = "SEARCHCONTENTTYPE_TEXT", t[t.SEARCHCONTENTTYPE_LINKS = 2] = "SEARCHCONTENTTYPE_LINKS", t[t.SEARCHCONTENTTYPE_DOCUMENTS = 3] = "SEARCHCONTENTTYPE_DOCUMENTS", t[t.SEARCHCONTENTTYPE_PHOTOS = 4] = "SEARCHCONTENTTYPE_PHOTOS", t[t.SEARCHCONTENTTYPE_VIDEOS = 5] = "SEARCHCONTENTTYPE_VIDEOS", t[t.SEARCHCONTENTTYPE_AUDIOS = 6] = "SEARCHCONTENTTYPE_AUDIOS", t[t.SEARCHCONTENTTYPE_VOICES = 7] = "SEARCHCONTENTTYPE_VOICES", t[t.SEARCHCONTENTTYPE_MEDIA = 8] = "SEARCHCONTENTTYPE_MEDIA", (d = a || (a = {}))[d.SEARCHCONTENTTAB_CONTENT = 0] = "SEARCHCONTENTTAB_CONTENT", d[d.SEARCHCONTENTTAB_PHOTO = 1] = "SEARCHCONTENTTAB_PHOTO", (r = u || (u = {}))[r.SEARCHMESSAGESCOPE_SCOPE_ALL = 0] = "SEARCHMESSAGESCOPE_SCOPE_ALL", r[r.SEARCHMESSAGESCOPE_SCOPE_PRIVATE = 1] = "SEARCHMESSAGESCOPE_SCOPE_PRIVATE", r[r.SEARCHMESSAGESCOPE_SCOPE_GROUP = 2] = "SEARCHMESSAGESCOPE_SCOPE_GROUP", r[r.SEARCHMESSAGESCOPE_SCOPE_CHANNEL = 3] = "SEARCHMESSAGESCOPE_SCOPE_CHANNEL";
            let p = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.searchAndCondition && P.encode(e.searchAndCondition, n.uint32(10).fork()).join(), void 0 !== e.searchOrCondition && w.encode(e.searchOrCondition, n.uint32(18).fork()).join(), void 0 !== e.searchPeerCondition && N.encode(e.searchPeerCondition, n.uint32(26).fork()).join(), void 0 !== e.searchPeerContentType && _.encode(e.searchPeerContentType, n.uint32(34).fork()).join(), void 0 !== e.searchPeerTypeCondition && g.encode(e.searchPeerTypeCondition, n.uint32(42).fork()).join(), void 0 !== e.searchPieceText && A.encode(e.searchPieceText, n.uint32(50).fork()).join(), void 0 !== e.searchDate && C.encode(e.searchDate, n.uint32(58).fork()).join(), void 0 !== e.searchSender && T.encode(e.searchSender, n.uint32(66).fork()).join(), void 0 !== e.searchHasLink && S.encode(e.searchHasLink, n.uint32(74).fork()).join(), void 0 !== e.searchDocumentName && b.encode(e.searchDocumentName, n.uint32(82).fork()).join(), void 0 !== e.searchScopeCondition && h.encode(e.searchScopeCondition, n.uint32(90).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                searchAndCondition: void 0,
                                searchOrCondition: void 0,
                                searchPeerCondition: void 0,
                                searchPeerContentType: void 0,
                                searchPeerTypeCondition: void 0,
                                searchPieceText: void 0,
                                searchDate: void 0,
                                searchSender: void 0,
                                searchHasLink: void 0,
                                searchDocumentName: void 0,
                                searchScopeCondition: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.searchAndCondition = P.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.searchOrCondition = w.decode(o, o.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.searchPeerCondition = N.decode(o, o.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.searchPeerContentType = _.decode(o, o.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.searchPeerTypeCondition = g.decode(o, o.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    t.searchPieceText = A.decode(o, o.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    t.searchDate = C.decode(o, o.uint32());
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    t.searchSender = T.decode(o, o.uint32());
                                    continue;
                                case 9:
                                    if (74 !== e) break;
                                    t.searchHasLink = S.decode(o, o.uint32());
                                    continue;
                                case 10:
                                    if (82 !== e) break;
                                    t.searchDocumentName = b.decode(o, o.uint32());
                                    continue;
                                case 11:
                                    if (90 !== e) break;
                                    t.searchScopeCondition = h.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                h = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.scope && n.uint32(8).int32(e.scope), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                scope: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.scope = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                T = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.userId && n.uint32(8).int32(e.userId), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                userId: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.userId = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                C = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.date && n.uint32(8).int64(e.date), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                date: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.date = L(o.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                S = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return !1 !== e.hasLink && n.uint32(8).bool(e.hasLink), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                hasLink: !1
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.hasLink = o.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                b = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return "" !== e.documentName && n.uint32(10).string(e.documentName), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                documentName: ""
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.documentName = o.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                g = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.peerType && n.uint32(8).int32(e.peerType), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                peerType: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.peerType = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                A = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return "" !== e.query && n.uint32(10).string(e.query), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                query: ""
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.query = o.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                P = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        for (let o of e.andQuery) p.encode(o, n.uint32(10).fork()).join();
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                andQuery: []
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.andQuery.push(p.decode(o, o.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                w = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        for (let o of e.orQuery) p.encode(o, n.uint32(18).fork()).join();
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                orQuery: []
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 2:
                                    if (18 !== e) break;
                                    t.orQuery.push(p.decode(o, o.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                N = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.peer && E.L0.encode(e.peer, n.uint32(10).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                peer: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.peer = E.L0.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                _ = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.contentType && n.uint32(8).int32(e.contentType), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                contentType: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.contentType = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                };

            function M() {
                return {
                    peer: void 0,
                    title: "",
                    description: void 0,
                    membersCount: void 0,
                    dateCreated: void 0,
                    creator: void 0,
                    isPublic: void 0,
                    isJoined: void 0
                }
            }
            let I = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.peer && E.xM.encode(e.peer, n.uint32(10).fork()).join(), "" !== e.title && n.uint32(18).string(e.title), void 0 !== e.description && k.hU.encode({
                            value: e.description
                        }, n.uint32(26).fork()).join(), void 0 !== e.membersCount && k.as.encode({
                            value: e.membersCount
                        }, n.uint32(34).fork()).join(), void 0 !== e.dateCreated && f.j1.encode(e.dateCreated, n.uint32(42).fork()).join(), void 0 !== e.creator && k.as.encode({
                            value: e.creator
                        }, n.uint32(50).fork()).join(), void 0 !== e.isPublic && k._t.encode({
                            value: e.isPublic
                        }, n.uint32(58).fork()).join(), void 0 !== e.isJoined && k._t.encode({
                            value: e.isJoined
                        }, n.uint32(66).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = M();
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.peer = E.xM.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.title = o.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.description = k.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.membersCount = k.as.decode(o, o.uint32()).value;
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.dateCreated = f.j1.decode(o, o.uint32());
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    t.creator = k.as.decode(o, o.uint32()).value;
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    t.isPublic = k._t.decode(o, o.uint32()).value;
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    t.isJoined = k._t.decode(o, o.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                U = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.peer && E.xM.encode(e.peer, n.uint32(10).fork()).join(), "0" !== e.rid && n.uint32(16).int64(e.rid), 0 !== e.date && n.uint32(24).int64(e.date), void 0 !== e.content && v.QBZ.encode(e.content, n.uint32(42).fork()).join(), 0 !== e.senderId && n.uint32(32).int32(e.senderId), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                peer: void 0,
                                rid: "0",
                                date: 0,
                                content: void 0,
                                senderId: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.peer = E.xM.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    t.rid = o.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    t.date = L(o.int64());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.content = v.QBZ.decode(o, o.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    t.senderId = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                V = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.result && U.encode(e.result, n.uint32(10).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                result: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.result = U.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                m = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.messageId && v.J2R.encode(e.messageId, n.uint32(10).fork()).join(), void 0 !== e.content && v.dHq.encode(e.content, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                messageId: void 0,
                                content: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.messageId = v.J2R.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.content = v.dHq.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                O = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return 0 !== e.channelId && n.uint32(8).int32(e.channelId), "" !== e.channelTitle && n.uint32(18).string(e.channelTitle), void 0 !== e.channelNick && k.hU.encode({
                            value: e.channelNick
                        }, n.uint32(26).fork()).join(), void 0 !== e.channelAbout && k.hU.encode({
                            value: e.channelAbout
                        }, n.uint32(34).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                channelId: 0,
                                channelTitle: "",
                                channelNick: void 0,
                                channelAbout: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    t.channelId = o.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.channelTitle = o.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.channelNick = k.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.channelAbout = k.hU.decode(o, o.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                j = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n;
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return {}
                    }
                },
                R = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n;
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return {}
                    }
                },
                H = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.messageId && v.J2R.encode(e.messageId, n.uint32(10).fork()).join(), void 0 !== e.content && v.QBZ.encode(e.content, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                messageId: void 0,
                                content: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.messageId = v.J2R.decode(o, o.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.content = v.QBZ.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                y = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return "" !== e.demonstrativeName && n.uint32(10).string(e.demonstrativeName), void 0 !== e.link && k.hU.encode({
                            value: e.link
                        }, n.uint32(18).fork()).join(), void 0 !== e.popularSearchResult && R.encode(e.popularSearchResult, n.uint32(26).fork()).join(), void 0 !== e.groupOutPeer && E.wX.encode(e.groupOutPeer, n.uint32(34).fork()).join(), void 0 !== e.searchAds && j.encode(e.searchAds, n.uint32(42).fork()).join(), 0 !== e.minAppVersion && n.uint32(48).int32(e.minAppVersion), 0 !== e.maxAppVersion && n.uint32(56).int32(e.maxAppVersion), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                demonstrativeName: "",
                                link: void 0,
                                popularSearchResult: void 0,
                                groupOutPeer: void 0,
                                searchAds: void 0,
                                minAppVersion: 0,
                                maxAppVersion: 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.demonstrativeName = o.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    t.link = k.hU.decode(o, o.uint32()).value;
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    t.popularSearchResult = R.decode(o, o.uint32());
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    t.groupOutPeer = E.wX.decode(o, o.uint32());
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    t.searchAds = j.decode(o, o.uint32());
                                    continue;
                                case 6:
                                    if (48 !== e) break;
                                    t.minAppVersion = o.int32();
                                    continue;
                                case 7:
                                    if (56 !== e) break;
                                    t.maxAppVersion = o.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                },
                D = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l.fI;
                        return void 0 !== e.exPeer && E.Cu.encode(e.exPeer, n.uint32(10).fork()).join(), n
                    },
                    decode(e, n) {
                        let o = e instanceof l.V5 ? e : new l.V5(e),
                            i = void 0 === n ? o.len : o.pos + n,
                            t = {
                                exPeer: void 0
                            };
                        for (; o.pos < i;) {
                            let e = o.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    t.exPeer = E.Cu.decode(o, o.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            o.skip(7 & e)
                        }
                        return t
                    }
                };

            function L(e) {
                return globalThis.Number(e.toString())
            }
        },
        10391: function(e, n, o) {
            var i, t;
            o.d(n, {
                C: () => i
            }), (t = i || (i = {}))[t.Open = 0] = "Open", t[t.LoadMore = 1] = "LoadMore", t[t.GoToMessage = 2] = "GoToMessage", t[t.GoToFirstMessage = 3] = "GoToFirstMessage"
        },
        33148: function(e, n, o) {
            var i, t;
            o.d(n, {
                i: () => i
            }), (t = i || (i = {})).NewMessages = "MessagesEvent/NewMessages", t.DeleteMessage = "MessagesEvent/DeleteMessage", t.ClearChat = "MessagesEvent/ClearChat", t.UpdateMessages = "MessagesEvent/UpdateMessages", t.PinMessage = "MessagesEvent/PinMessage", t.UnPinMessage = "MessagesEvent/UnPinMessage", t.StreamChunkReceived = "MessagesEvent/StreamChunkReceived", t.TopicCreated = "MessagesEvent/TopicCreated", t.TopicEdited = "MessagesEvent/TopicEdited", t.TopicDeleted = "MessagesEvent/TopicDeleted", t.StreamEnded = "MessagesEvent/StreamEnded"
        },
        90158: function(e, n, o) {
            var i;
            o.d(n, {
                K: () => i,
                q: () => t
            }), (i || (i = {})).AddPeerWithScheduledTask = "SchedulerEvent/AddPeerWithScheduledTask";
            let t = e => ({
                type: i.AddPeerWithScheduledTask,
                exPeer: e
            })
        }
    }
]);
//# sourceMappingURL=4265.d2b6af37.js.map