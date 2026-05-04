try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "199438ad-9fd4-4051-bb81-7452d9646818", e._sentryDebugIdIdentifier = "sentry-dbid-199438ad-9fd4-4051-bb81-7452d9646818")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6582"], {
        67685: function(e, t, i) {
            let o, s, n, a, r, l, d, u, p, h, c;
            i.d(t, {
                aR: () => ei,
                uF: () => eo
            }), i(50259), i(90298), i(31046), i(913);
            var g, f, w = i(62097),
                v = i(51116),
                b = i(41296),
                m = i(44334),
                y = i(72547),
                S = i(3537),
                T = i(44821),
                A = i(78130),
                C = i(76432),
                M = i(22121);
            class R {
                lock(e) {
                    return (0, b.x)(this.lockValue.pipe((0, S.p)(e => !e), (0, T.$)(), (0, A.M)(() => this.toggleLock()), (0, C.C)(m.w)), e.pipe((0, M.j)(() => {
                        this.toggleLock()
                    })))
                }
                toggleLock() {
                    this.lockValue.next(!this.lockValue.value)
                }
                constructor() {
                    (0, v._)(this, "lockValue", new y.t(!1))
                }
            }
            var k = i(7618),
                U = i(69758),
                L = i(82080),
                I = i(23031),
                D = i(52545),
                _ = i(88228),
                E = i(46896),
                N = i(90503),
                P = i(45943),
                z = i(88332),
                F = i(59797),
                q = i(9888),
                G = i(92023),
                H = i(10492),
                $ = i(35133),
                x = i(88159),
                B = i(19625),
                W = i(73890);
            let Y = /(localhost|127\.0\.0\.1|10\..*|172\..*|192\.168\..*)/g.test(self.location.hostname);
            /maviz\.bale\.ai/g.test(self.location.hostname);
            let j = Y ? "/api" : "https://next-ws.bale.ai";
            class O {
                unary(e, t, i) {
                    var o, s, n;
                    let a = {
                            ...t,
                            ...e.requestType
                        },
                        r = {
                            id: this.reqId++,
                            methodName: e.methodName
                        };
                    null == (s = this.options.handlers) || null == (o = s.onRequest) || o.call(s, r);
                    let l = i && this.options.metadata ? new q.BrowserHeaders({
                        ...null == (n = this.options) ? void 0 : n.metadata.headersMap,
                        ...null == i ? void 0 : i.headersMap
                    }) : i || this.options.metadata;
                    return (0, G.v)(() => new Promise((t, i) => {
                        F.grpc.unary(e, {
                            request: a,
                            host: this.host,
                            metadata: l,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: e => {
                                var o, s, n, a;
                                if (e.status === F.grpc.Code.OK) null == (s = this.options.handlers) || null == (o = s.onSuccess) || o.call(s, r, e), t(e.message.toObject());
                                else {
                                    let t = new V(e.statusMessage, e.status);
                                    null == (a = this.options.handlers) || null == (n = a.onError) || n.call(a, t, r), i(t)
                                }
                            }
                        })
                    }))
                }
                invoke(e, t, i) {
                    var o;
                    let s = this.options.upStreamRetryCodes || [],
                        n = {
                            ...t,
                            ...e.requestType
                        },
                        a = i && this.options.metadata ? new q.BrowserHeaders({
                            ...null == (o = this.options) ? void 0 : o.metadata.headersMap,
                            ...null == i ? void 0 : i.headersMap
                        }) : i || this.options.metadata;
                    return new L.c(t => {
                        let i = () => {
                            let o = F.grpc.invoke(e, {
                                host: this.host,
                                request: n,
                                transport: this.options.streamingTransport || this.options.transport,
                                metadata: a,
                                debug: this.options.debug,
                                onMessage: e => t.next(e),
                                onEnd: (e, o, n) => {
                                    if (0 === e) t.complete();
                                    else if (s.includes(e)) setTimeout(i, 3e3);
                                    else {
                                        let i = new V(o, e);
                                        t.error(i)
                                    }
                                }
                            });
                            t.add(() => {
                                if (!t.closed) return o.close()
                            })
                        };
                        i()
                    }).pipe((0, H.u)())
                }
                constructor(e, t) {
                    (0, v._)(this, "reqId", 0), (0, v._)(this, "host", void 0), (0, v._)(this, "options", void 0), this.host = e, this.options = t, this.unary = this.unary.bind(this), this.invoke = this.invoke.bind(this)
                }
            }
            class V extends Error {
                constructor(e, t) {
                    super(e), (0, v._)(this, "code", void 0), this.code = t
                }
            }
            let K = (n = null, () => n || (o = F.grpc.CrossBrowserHttpTransport({
                withCredentials: !0
            }), F.grpc.setDefaultTransport(o), s = new O(j, {
                transport: o,
                streamingTransport: o,
                handlers: {
                    onError: (e, t) => {
                        e.code === F.grpc.Code.Unauthenticated && (0, w.R)("UnAuthenticated"), w.z.log(`-> Req ${t.methodName} #${t.id}`, e.name, e.message), (0, w.R)(`-> Req ${t.methodName} #${t.id}`, e)
                    },
                    onRequest: e => {
                        (0, w.R)(`-> Req ${e.methodName} #${e.id}`)
                    },
                    onSuccess: (e, t) => {
                        (0, w.R)(`<- Res ${e.methodName} #${e.id}`)
                    }
                }
            }), n = {
                user: new N.iL_(s),
                group: new P.onA(s),
                files: new z.Fw(s),
                seraj: new x.SA(s)
            }));
            (g = f || (f = {})).loadUser = function(e) {
                var t;
                return (t = e, K().user.LoadUsers({
                    peers: [{
                        accessHash: "",
                        uid: t
                    }]
                }).pipe((0, $.T)(e => e.users[0]))).pipe((0, B.h)(W.tY))
            }, g.loadGroup = function(e) {
                var t;
                return (t = e, K().group.LoadGroups({
                    peers: [{
                        accessHash: "",
                        groupId: t
                    }]
                }).pipe((0, $.T)(e => e.groups[0]))).pipe((0, B.h)(W.tY))
            }, g.getFileUrl = function(e) {
                var t;
                return (t = e, K().files.GetNasimFileUrl({
                    file: t
                }).pipe((0, $.T)(e => {
                    var t;
                    return null == (t = e.fileUrl) ? void 0 : t.url
                }))).pipe((0, B.h)(W.tY))
            }, g.sendSerajEvent = function(e) {
                var t;
                return (t = e, K().seraj.Send(t)).pipe((0, B.h)(W.tY))
            };
            var Z = i(77886);
            a = {}, e => a[e.fileId] ? (0, U.of)(a[e.fileId]) : J(e).pipe((0, A.M)(t => {
                t && (a[e.fileId] = t)
            }));
            let J = e => Q(e).pipe((0, D.Z)(e => e ? "FileReader" in self ? new L.c(t => {
                    let i = new FileReader;
                    return (0, U.of)(i.readAsDataURL(e)), i.onload = () => {
                        t.next(i.result), t.complete()
                    }, i.onerror = () => {
                        t.error()
                    }, () => {
                        i.abort()
                    }
                }) : e.arrayBuffer().then(e => "data://" + btoa(String.fromCharCode(...new Uint8Array(e)))) : (0, U.of)(void 0))),
                Q = e => Z.l.getAvatar(e.fileId).pipe((0, D.Z)(t => t ? (0, U.of)(t) : X(e).pipe((0, _.w)(3e4), (0, D.Z)(t => t ? (0, I.h)((0, U.of)(t), et(e.fileId, t)) : (0, U.of)(void 0)), (0, E.W)(() => (0, U.of)(void 0)))), (0, E.W)(() => X(e).pipe((0, E.W)(() => (0, U.of)(void 0))))),
                X = e => f.getFileUrl(e).pipe((0, D.Z)(e => e ? ee(e) : (0, U.of)(void 0))),
                ee = e => new L.c(t => {
                    let i = new AbortController;
                    return fetch(e, {
                        signal: i.signal
                    }).then(e => e.blob()).then(e => {
                        t.next(e), t.complete()
                    }).catch(e => t.error(e)), {
                        unsubscribe() {
                            i.abort()
                        }
                    }
                }),
                et = (e, t) => Z.l.addAvatar(e, t).pipe((0, C.C)(m.w));
            r = null, l = null, () => {
                var e;
                return null !== l ? l : l = (null == (e = self.navigator.userAgentData) ? void 0 : e.brands.some(e => "Chromium" === e.brand)) || navigator.userAgent.includes("Chrome")
            };
            let ei = (d = null, () => {
                    var e;
                    return null !== d ? d : d = ["iPhone", "iPad", "iPod"].includes((null == (e = self.navigator.userAgentData) ? void 0 : e.platform) || self.navigator.platform || "")
                }),
                eo = (u = null, () => {
                    var e;
                    return null !== u ? u : u = ((null == (e = self.navigator.userAgentData) ? void 0 : e.platform) || self.navigator.platform || "").toLowerCase().includes("win")
                });
            async function es() {
                w.z.log("getting clients ...");
                let e = new URL(self.registration.scope).origin;
                return (await self.clients.matchAll({
                    includeUncontrolled: !0,
                    type: "window"
                })).filter(t => new URL(t.url).origin === e)
            }
            ei();
            p = null, h = 0, c = () => {
                p = !1, h = Date.now(), w.z.log("Cache cleared due to app visibility change")
            }, new R, new R
        },
        73890: function(e, t, i) {
            i.d(t, {
                H_: () => u,
                iT: () => h,
                kF: () => d,
                kL: () => l,
                li: () => r,
                tY: () => p
            });
            var o, s, n, a, r = ((o = {}).Avatars = "Avatars", o.Configs = "configs", o.Dialogs = "dialogs", o.FullGroups = "full_groups", o.FullUsers = "full_users", o.Groups = "groups", o.Metadata = "metadata", o.Users = "users", o.Global = "global", o),
                l = ((s = {}).DB = "db", s.Files = "files-db", s.PushNotification = "push-notificaiton-db", s),
                d = ((n = {}).Log = "Log", n.MyUser = "MyUser", n.ReadMessages = "ReadMsg", n.ShownMessages = "ShownMsg", n.SuspendedMessages = "SuspendedMsg", n.encryptionKey = "encryptionKey", n),
                u = ((a = {}).AddToShownNotifications = "AddToShown", a.ClearLocalNotificationState = "ClearLocalNotificationState", a.GetIsHidden = "isHidden", a.GoToMessage = "goToMessage", a.Ping = "Ping", a.Read = "Read", a.CloseDatabase = "CLOSE_DATABASE", a.SetMyUser = "SetMyUser", a.SkipWaiting = "SKIP_WAITING", a.SubscribedToMessageEvents = "subscribedToMessageEvents", a);
            let p = {
                    maxRetries: 2,
                    initialInterval: 500
                },
                h = "logo82.png"
        }
    }
]);
//# sourceMappingURL=6582.66c5211c.js.map