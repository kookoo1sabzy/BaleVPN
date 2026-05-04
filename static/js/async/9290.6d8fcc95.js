/*! For license information please see 9290.6d8fcc95.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "60a62725-6be8-42ab-b399-4eb17d6f9793", e._sentryDebugIdIdentifier = "sentry-dbid-60a62725-6be8-42ab-b399-4eb17d6f9793")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9290"], {
        75097: function(e, n, t) {
            t.d(n, {
                $$: () => u,
                KP: () => E,
                L: () => N,
                Mz: () => c,
                ZQ: () => Y,
                Zf: () => O,
                cC: () => h,
                dH: () => _,
                dm: () => l,
                ez: () => x,
                g7: () => j,
                gp: () => D,
                hr: () => V,
                jq: () => T,
                pI: () => F,
                ty: () => f,
                v9: () => U,
                yS: () => L,
                zy: () => R
            });
            var i, o, r, a, d, s, l, u, c, f, p = t(86654),
                g = t(26016),
                b = t(12314),
                k = t(68647),
                v = t(76421),
                I = t(87728);
            (i = s || (s = {}))[i.BOTRESULTTYPE_PHOTO = 0] = "BOTRESULTTYPE_PHOTO", i[i.BOTRESULTTYPE_GIF = 1] = "BOTRESULTTYPE_GIF", i[i.BOTRESULTTYPE_ARTICLE = 2] = "BOTRESULTTYPE_ARTICLE", i[i.BOTRESULTTYPE_VOICE = 4] = "BOTRESULTTYPE_VOICE", (o = l || (l = {}))[o.PAYMENTTYPE_WALLET = 0] = "PAYMENTTYPE_WALLET", o[o.PAYMENTTYPE_GATEWAY = 1] = "PAYMENTTYPE_GATEWAY", o[o.PAYMENTTYPE_BALE_POCKET_WALLET = 2] = "PAYMENTTYPE_BALE_POCKET_WALLET", (r = u || (u = {}))[r.PAYMENTFINALSTATUS_UNKNOWN = 0] = "PAYMENTFINALSTATUS_UNKNOWN", r[r.PAYMENTFINALSTATUS_SUCCESS = 1] = "PAYMENTFINALSTATUS_SUCCESS", r[r.PAYMENTFINALSTATUS_FAIL = 2] = "PAYMENTFINALSTATUS_FAIL", r[r.PAYMENTFINALSTATUS_BOTREJECTED = 3] = "PAYMENTFINALSTATUS_BOTREJECTED", r[r.PAYMENTFINALSTATUS_BOTVERIFICATIONTIMEOUT = 4] = "PAYMENTFINALSTATUS_BOTVERIFICATIONTIMEOUT", (a = c || (c = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.ALREADYPAID = 1] = "ALREADYPAID", a[a.PAYMENTINPROGRESS = 2] = "PAYMENTINPROGRESS", (d = f || (f = {}))[d.PIN = 0] = "PIN", d[d.ALERT = 1] = "ALERT";
            let T = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.page && n.uint32(8).int32(e.page), 0 !== e.limit && n.uint32(16).int32(e.limit), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                page: 0,
                                limit: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.page = t.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.limit = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                h = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.userId && n.uint32(8).int32(e.userId), "" !== e.username && n.uint32(18).string(e.username), 0 !== e.score && n.uint32(24).int32(e.score), "" !== e.title && n.uint32(34).string(e.title), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                userId: 0,
                                username: "",
                                score: 0,
                                title: ""
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.userId = t.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.username = t.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.score = t.int32();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.title = t.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                m = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.url && n.uint32(10).string(e.url), "" !== e.shortName && n.uint32(18).string(e.shortName), "" !== e.title && n.uint32(26).string(e.title), "" !== e.description && n.uint32(34).string(e.description), void 0 !== e.image && b.rF.encode(e.image, n.uint32(42).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                url: "",
                                shortName: "",
                                title: "",
                                description: "",
                                image: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.url = t.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.shortName = t.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.title = t.string();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    o.description = t.string();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.image = b.rF.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                w = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return !1 !== e.enabled && n.uint32(8).bool(e.enabled), void 0 !== e.placeholder && g.hU.encode(e.placeholder, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                enabled: !1,
                                placeholder: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.enabled = t.bool();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.placeholder = g.hU.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                E = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let t of e.webApp) m.encode(t, n.uint32(18).fork()).join();
                        return void 0 !== e.inlineMode && w.encode(e.inlineMode, n.uint32(26).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                webApp: [],
                                inlineMode: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 2:
                                    if (18 !== e) break;
                                    o.webApp.push(m.decode(t, t.uint32()));
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.inlineMode = w.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                A = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.file && b.KC.encode(e.file, n.uint32(10).fork()).join(), "" !== e.mimeType && n.uint32(18).string(e.mimeType), void 0 !== e.extra && v.LnR.encode(e.extra, n.uint32(26).fork()).join(), 0 !== e.fileSize && n.uint32(32).int32(e.fileSize), "" !== e.fileName && n.uint32(42).string(e.fileName), void 0 !== e.thumb && b.Jk.encode(e.thumb, n.uint32(50).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                file: void 0,
                                mimeType: "",
                                extra: void 0,
                                fileSize: 0,
                                fileName: "",
                                thumb: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.file = b.KC.decode(t, t.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.mimeType = t.string();
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.extra = v.LnR.decode(t, t.uint32());
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.fileSize = t.int32();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    o.fileName = t.string();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    o.thumb = b.Jk.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                S = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.url && n.uint32(10).string(e.url), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                url: ""
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.url = t.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                C = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.text && n.uint32(10).string(e.text), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                text: ""
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.text = t.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                y = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.caption && n.uint32(10).string(e.caption), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                caption: ""
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.caption = t.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                M = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.botInlineMessageText && C.encode(e.botInlineMessageText, n.uint32(10).fork()).join(), void 0 !== e.botInlineMessageMediaAuto && y.encode(e.botInlineMessageMediaAuto, n.uint32(18).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                botInlineMessageText: void 0,
                                botInlineMessageMediaAuto: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.botInlineMessageText = C.decode(t, t.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.botInlineMessageMediaAuto = y.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                N = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.type && n.uint32(8).int32(e.type), void 0 !== e.title && g.hU.encode(e.title, n.uint32(18).fork()).join(), void 0 !== e.description && g.hU.encode(e.description, n.uint32(26).fork()).join(), void 0 !== e.botInlineMessage && M.encode(e.botInlineMessage, n.uint32(66).fork()).join(), void 0 !== e.botInlineResult && S.encode(e.botInlineResult, n.uint32(810).fork()).join(), void 0 !== e.botInlineMediaResult && A.encode(e.botInlineMediaResult, n.uint32(818).fork()).join(), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                type: 0,
                                title: void 0,
                                description: void 0,
                                botInlineMessage: void 0,
                                botInlineResult: void 0,
                                botInlineMediaResult: void 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.type = t.int32();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.title = g.hU.decode(t, t.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.description = g.hU.decode(t, t.uint32());
                                    continue;
                                case 8:
                                    if (66 !== e) break;
                                    o.botInlineMessage = M.decode(t, t.uint32());
                                    continue;
                                case 101:
                                    if (810 !== e) break;
                                    o.botInlineResult = S.decode(t, t.uint32());
                                    continue;
                                case 102:
                                    if (818 !== e) break;
                                    o.botInlineMediaResult = A.decode(t, t.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                P = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.paymentOptionId && n.uint32(10).string(e.paymentOptionId), 0 !== e.paymentType && n.uint32(16).int32(e.paymentType), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                paymentOptionId: "",
                                paymentType: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.paymentOptionId = t.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.paymentType = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                V = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.trackCode && n.uint32(10).string(e.trackCode), 0 !== e.unixDate && n.uint32(16).int64(e.unixDate), void 0 !== e.botMessage && k.hU.encode({
                            value: e.botMessage
                        }, n.uint32(26).fork()).join(), 0 !== e.status && n.uint32(32).int32(e.status), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                trackCode: "",
                                unixDate: 0,
                                botMessage: void 0,
                                status: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.trackCode = t.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.unixDate = q(t.int64());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    o.botMessage = k.hU.decode(t, t.uint32()).value;
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.status = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                R = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return void 0 !== e.peer && I.L0.encode(e.peer, n.uint32(10).fork()).join(), "" !== e.invoiceId && n.uint32(18).string(e.invoiceId), 0 !== e.botId && n.uint32(24).int32(e.botId), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                peer: void 0,
                                invoiceId: "",
                                botId: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.peer = I.L0.decode(t, t.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.invoiceId = t.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.botId = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                U = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.label && n.uint32(10).string(e.label), 0 !== e.price && n.uint32(16).int64(e.price), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                label: "",
                                price: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.label = t.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.price = q(t.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                L = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "0" !== e.chargeAmount && n.uint32(8).int64(e.chargeAmount), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                chargeAmount: "0"
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.chargeAmount = t.int64().toString();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                O = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n;
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return {}
                    }
                },
                Y = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.paymentToken && n.uint32(10).string(e.paymentToken), "" !== e.paymentUrl && n.uint32(18).string(e.paymentUrl), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                paymentToken: "",
                                paymentUrl: ""
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.paymentToken = t.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.paymentUrl = t.string();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                _ = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        for (let t of ("" !== e.paymentSessionId && n.uint32(10).string(e.paymentSessionId), e.paymentOptions)) P.encode(t, n.uint32(18).fork()).join();
                        return n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                paymentSessionId: "",
                                paymentOptions: []
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.paymentSessionId = t.string();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.paymentOptions.push(P.decode(t, t.uint32()));
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                j = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return 0 !== e.reason && n.uint32(8).int32(e.reason), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                reason: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.reason = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                F = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return "" !== e.text && n.uint32(10).string(e.text), 0 !== e.type && n.uint32(16).int32(e.type), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                text: "",
                                type: 0
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    o.text = t.string();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    o.type = t.int32();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                x = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return !1 !== e.result && n.uint32(8).bool(e.result), n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n,
                            o = {
                                result: !1
                            };
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.result = t.bool();
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return o
                    }
                },
                D = {
                    encode(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new p.fI;
                        return n
                    },
                    decode(e, n) {
                        let t = e instanceof p.V5 ? e : new p.V5(e),
                            i = void 0 === n ? t.len : t.pos + n;
                        for (; t.pos < i;) {
                            let e = t.uint32();
                            if ((7 & e) == 4 || 0 === e) break;
                            t.skip(7 & e)
                        }
                        return {}
                    }
                };

            function q(e) {
                return globalThis.Number(e.toString())
            }
        },
        78032: function(e, n, t) {
            t.d(n, {
                F: () => a,
                o: () => i
            });
            let i = e => !!e.callStarted || !!e.callAccepted || !!e.callDiscarded || !!e.callReceived || !!e.groupCallStarted || !!e.groupCallEnded || !!e.callUpgraded || !!e.multiPeerCallStarted || !!e.peersInvited || !!e.peersStateChanged || !!e.callReactionSent || !!e.callLinkGenerated || !!e.callJoinRequestReceived || !!e.callJoinRequestAnswered || !!e.callEvent || !!e.callAction,
                o = function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return {
                        ...e,
                        id: n ? "" : e.id,
                        token: "",
                        url: n ? void 0 : e.url
                    }
                },
                r = function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return {
                        ...e,
                        id: n ? "" : e.id,
                        token: "",
                        url: n ? void 0 : e.url
                    }
                },
                a = function(e) {
                    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (e.callAccepted) {
                        let t = e.callAccepted;
                        return {
                            callAccepted: {
                                ...t,
                                call: t.call && o(t.call, n)
                            }
                        }
                    }
                    if (e.callDiscarded) {
                        let t = e.callDiscarded;
                        return {
                            callDiscarded: {
                                ...t,
                                call: t.call && o(t.call, n)
                            }
                        }
                    }
                    if (e.callStarted) {
                        let t = e.callStarted;
                        return {
                            callStarted: {
                                ...t,
                                call: t.call && o(t.call, n)
                            }
                        }
                    }
                    if (e.groupCallStarted) {
                        let t = e.groupCallStarted;
                        return {
                            groupCallStarted: {
                                groupCall: t.groupCall && r(t.groupCall, n),
                                seq: t.seq
                            }
                        }
                    }
                    if (e.groupCallEnded) {
                        let t = e.groupCallEnded;
                        return {
                            groupCallEnded: {
                                groupCall: t.groupCall && r(t.groupCall, n)
                            }
                        }
                    }
                    if (e.multiPeerCallStarted) {
                        let t = e.multiPeerCallStarted;
                        return {
                            multiPeerCallStarted: {
                                ...t,
                                id: n ? "" : t.id,
                                url: n ? "" : t.url
                            }
                        }
                    }
                    if (e.peersInvited) {
                        let t = e.peersInvited;
                        return {
                            peersInvited: {
                                ...t,
                                callId: n ? "" : t.callId
                            }
                        }
                    }
                    if (e.peersStateChanged) {
                        let t = e.peersStateChanged;
                        return {
                            peersStateChanged: {
                                ...t,
                                callId: n ? "" : t.callId
                            }
                        }
                    }
                    return e.callUpgraded || e.callReceived || e.callReactionSent, e
                }
        },
        59001: function(e, n, t) {
            t.d(n, {
                CF: () => p,
                KG: () => I,
                Ru: () => k,
                Xc: () => l,
                dF: () => g,
                ds: () => b,
                fB: () => c,
                jR: () => f,
                nM: () => v,
                xs: () => u
            });
            var i = t(76526),
                o = t(94823),
                r = t(33148),
                a = t(78032),
                d = t(1652),
                s = t.n(d);
            let l = e => {
                    var n, t;
                    return null == (t = Object.entries(e).filter(e => {
                        let [n, t] = e;
                        return void 0 !== t
                    })) || null == (n = t[0]) ? void 0 : n[0]
                },
                u = e => {
                    var n, t, i, o;
                    return (null == e ? void 0 : e.message) ? {
                        message: k(e.message)
                    } : (null == e ? void 0 : e.messages) ? {
                        messages: {
                            ...e.messages,
                            messageContainers: e.messages.messageContainers.map(e => b(e))
                        }
                    } : (null == e ? void 0 : e.groupNicknameChanged) ? {
                        groupNicknameChanged: {
                            ...e.groupNicknameChanged,
                            nick: void 0
                        }
                    } : (null == e ? void 0 : e.messageContentChanged) ? {
                        messageContentChanged: {
                            ...e.messageContentChanged,
                            updatedContentTypeMessage: void 0,
                            message: void 0
                        }
                    } : (null == e || null == (t = e.messageQuotedChanged) || null == (n = t.quotedMessage) ? void 0 : n.quotedMessageContent) ? {
                        messageQuotedChanged: {
                            ...e.messageQuotedChanged,
                            quotedMessage: {
                                ...e.messageQuotedChanged.quotedMessage,
                                quotedMessageContent: void 0
                            }
                        }
                    } : (null == e ? void 0 : e.userNickChanged) ? {
                        userNickChanged: {
                            ...e.userNickChanged,
                            nick: void 0
                        }
                    } : (null == e ? void 0 : e.groupMessagePinned) ? {
                        groupMessagePinned: {
                            ...e.groupMessagePinned,
                            message: void 0
                        }
                    } : (0, a.o)(e) ? (0, a.F)(e) : null == (i = null == (o = Object.entries(e).filter(e => {
                        let [, n] = e;
                        return void 0 !== n
                    })) ? void 0 : o[0]) ? void 0 : i[0]
                },
                c = e => e.type === i.u3.Update || e.type == i.u3.Replace || e.type === i.u3.ReplacePinned ? {
                    ...e,
                    dialogs: e.dialogs.map(e => {
                        var n;
                        return {
                            ...e,
                            message: null == (n = (0, o.jZ)(e.message)) ? void 0 : n[0]
                        }
                    })
                } : e,
                f = e => e.type === r.i.UpdateMessages ? {
                    ...e,
                    messages: e.messages.map(e => ({
                        rid: e.rid,
                        date: e.date
                    }))
                } : e.type === r.i.NewMessages ? {
                    ...e,
                    messages: e.messages.map(e => ({
                        rid: e.rid,
                        date: e.date
                    })),
                    dialog: e.dialog && v(e.dialog)
                } : e;

            function p(e) {
                return e.map(e => v(e))
            }
            let g = e => {
                    var n, t, i, o, r;
                    return {
                        rid: e.rid,
                        date: e.date,
                        type: e.type,
                        sid: e.senderUid,
                        groupedId: null == (n = e.groupedId) ? void 0 : n.value,
                        quotedId: null == (i = e.quotedMessage) || null == (t = i.messageId) ? void 0 : t.value,
                        quotedPeer: null == (o = e.quotedMessage) ? void 0 : o.quotedPeer,
                        quotedDate: null == (r = e.quotedMessage) ? void 0 : r.messageDate
                    }
                },
                b = e => {
                    var n, t, i;
                    return {
                        rid: e.rid,
                        date: e.date,
                        sid: e.senderUid,
                        groupedId: null == (n = e.groupedId) ? void 0 : n.value,
                        quotedId: null == (i = e.quotedMessage) || null == (t = i.messageId) ? void 0 : t.value
                    }
                },
                k = e => ({
                    rid: e.rid,
                    date: e.date,
                    sid: e.senderUid
                }),
                v = e => e && s()(e, ["message"]),
                I = e => ({
                    ...e,
                    nick: void 0,
                    title: ""
                })
        }
    }
]);
//# sourceMappingURL=9290.6d8fcc95.js.map