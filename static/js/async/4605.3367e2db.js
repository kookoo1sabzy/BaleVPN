try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            i = (new e.Error).stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "483eea96-acda-4e60-a9f7-480019e9f58c", e._sentryDebugIdIdentifier = "sentry-dbid-483eea96-acda-4e60-a9f7-480019e9f58c")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4605"], {
        88332: function(e, i, n) {
            n.d(i, {
                Fw: () => w
            });
            var t = n(51116),
                r = n(86654),
                o = n(12314),
                s = n(68647),
                l = n(87728);
            let c = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return 0 !== e.expectedSize && i.uint32(8).int32(e.expectedSize), "0" !== e.crc && i.uint32(16).int64(e.crc), "0" !== e.uid && i.uint32(24).int64(e.uid), "" !== e.name && i.uint32(34).string(e.name), "" !== e.mimeType && i.uint32(42).string(e.mimeType), void 0 !== e.exPeer && l.Cu.encode(e.exPeer, i.uint32(50).fork()).join(), void 0 !== e.sendType && o.Eb.encode(e.sendType, i.uint32(58).fork()).join(), 0 !== e.chunkSize && i.uint32(64).int64(e.chunkSize), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                expectedSize: 0,
                                crc: "0",
                                uid: "0",
                                name: "",
                                mimeType: "",
                                exPeer: void 0,
                                sendType: void 0,
                                chunkSize: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    s.expectedSize = n.int32();
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.crc = n.int64().toString();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    s.uid = n.int64().toString();
                                    continue;
                                case 4:
                                    if (34 !== e) break;
                                    s.name = n.string();
                                    continue;
                                case 5:
                                    if (42 !== e) break;
                                    s.mimeType = n.string();
                                    continue;
                                case 6:
                                    if (50 !== e) break;
                                    s.exPeer = l.Cu.decode(n, n.uint32());
                                    continue;
                                case 7:
                                    if (58 !== e) break;
                                    s.sendType = o.Eb.decode(n, n.uint32());
                                    continue;
                                case 8:
                                    if (64 !== e) break;
                                    s.chunkSize = T(n.int64());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                },
                d = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return "0" !== e.fileId && i.uint32(8).int64(e.fileId), "" !== e.url && i.uint32(18).string(e.url), !1 !== e.duplicate && i.uint32(24).bool(e.duplicate), 0 !== e.chunkSize && i.uint32(32).int32(e.chunkSize), 0 !== e.blockSize && i.uint32(40).int64(e.blockSize), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                fileId: "0",
                                url: "",
                                duplicate: !1,
                                chunkSize: 0,
                                blockSize: 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.fileId = n.int64().toString();
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    o.url = n.string();
                                    continue;
                                case 3:
                                    if (24 !== e) break;
                                    o.duplicate = n.bool();
                                    continue;
                                case 4:
                                    if (32 !== e) break;
                                    o.chunkSize = n.int32();
                                    continue;
                                case 5:
                                    if (40 !== e) break;
                                    o.blockSize = T(n.int64());
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
                        for (let n of e.files) o.KC.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                files: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.files.push(o.KC.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        for (let n of e.fileUrls) o.EI.encode(n, i.uint32(10).fork()).join();
                        return i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                fileUrls: []
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.fileUrls.push(o.EI.decode(n, n.uint32()));
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.file && o.KC.encode(e.file, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                file: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.file = o.KC.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.fileUrl && o.EI.encode(e.fileUrl, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                fileUrl: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.fileUrl = o.EI.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.file && o.KC.encode(e.file, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                file: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.file = o.KC.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.file && o.KC.encode(e.file, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                file: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.file = o.KC.decode(n, n.uint32());
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.fileUrl && o.EI.encode(e.fileUrl, i.uint32(10).fork()).join(), !1 !== e.canResume && i.uint32(16).bool(e.canResume), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                fileUrl: void 0,
                                canResume: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.fileUrl = o.EI.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (16 !== e) break;
                                    s.canResume = n.bool();
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
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return !1 !== e.canceled && i.uint32(8).bool(e.canceled), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            o = {
                                canceled: !1
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (8 !== e) break;
                                    o.canceled = n.bool();
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
                        return void 0 !== e.peer && l.xM.encode(e.peer, i.uint32(10).fork()).join(), void 0 !== e.file && o.KC.encode(e.file, i.uint32(18).fork()).join(), void 0 !== e.filename && s.hU.encode({
                            value: e.filename
                        }, i.uint32(26).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            c = {
                                peer: void 0,
                                file: void 0,
                                filename: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    c.peer = l.xM.decode(n, n.uint32());
                                    continue;
                                case 2:
                                    if (18 !== e) break;
                                    c.file = o.KC.decode(n, n.uint32());
                                    continue;
                                case 3:
                                    if (26 !== e) break;
                                    c.filename = s.hU.decode(n, n.uint32()).value;
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return c
                    }
                },
                y = {
                    encode(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r.fI;
                        return void 0 !== e.fileUrl && o.EI.encode(e.fileUrl, i.uint32(10).fork()).join(), i
                    },
                    decode(e, i) {
                        let n = e instanceof r.V5 ? e : new r.V5(e),
                            t = void 0 === i ? n.len : n.pos + i,
                            s = {
                                fileUrl: void 0
                            };
                        for (; n.pos < t;) {
                            let e = n.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    if (10 !== e) break;
                                    s.fileUrl = o.EI.decode(n, n.uint32());
                                    continue
                            }
                            if ((7 & e) == 4 || 0 === e) break;
                            n.skip(7 & e)
                        }
                        return s
                    }
                };
            class w {
                GetNasimFileUploadUrl(e, i) {
                    return this.rpc.unary(g, e, i)
                }
                GetNasimFileUrls(e, i) {
                    return this.rpc.unary(S, e, i)
                }
                GetNasimFileUrl(e, i) {
                    return this.rpc.unary(I, e, i)
                }
                GetNasimFileUploadResume(e, i) {
                    return this.rpc.unary(N, e, i)
                }
                FileUploadCancel(e, i) {
                    return this.rpc.unary(z, e, i)
                }
                GetNasimFilePublicUrl(e, i) {
                    return this.rpc.unary(F, e, i)
                }
                constructor(e) {
                    (0, t._)(this, "rpc", void 0), this.rpc = e, this.GetNasimFileUploadUrl = this.GetNasimFileUploadUrl.bind(this), this.GetNasimFileUrls = this.GetNasimFileUrls.bind(this), this.GetNasimFileUrl = this.GetNasimFileUrl.bind(this), this.GetNasimFileUploadResume = this.GetNasimFileUploadResume.bind(this), this.FileUploadCancel = this.FileUploadCancel.bind(this), this.GetNasimFilePublicUrl = this.GetNasimFilePublicUrl.bind(this)
                }
            }
            let U = {
                    serviceName: "ai.bale.server.Files"
                },
                g = {
                    methodName: "GetNasimFileUploadUrl",
                    service: U,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return c.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = d.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                },
                S = {
                    methodName: "GetNasimFileUrls",
                    service: U,
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
                I = {
                    methodName: "GetNasimFileUrl",
                    service: U,
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
                    methodName: "GetNasimFileUploadResume",
                    service: U,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return h.encode(this).finish()
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
                z = {
                    methodName: "FileUploadCancel",
                    service: U,
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
                F = {
                    methodName: "GetNasimFilePublicUrl",
                    service: U,
                    requestStream: !1,
                    responseStream: !1,
                    requestType: {
                        serializeBinary() {
                            return v.encode(this).finish()
                        }
                    },
                    responseType: {
                        deserializeBinary(e) {
                            let i = y.decode(e);
                            return {
                                ...i,
                                toObject: () => i
                            }
                        }
                    }
                };

            function T(e) {
                return globalThis.Number(e.toString())
            }
        }
    }
]);
//# sourceMappingURL=4605.3367e2db.js.map