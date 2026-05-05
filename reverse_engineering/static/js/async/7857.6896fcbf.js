/*! For license information please see 7857.6896fcbf.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3372f41-cbdb-47fd-8fbe-a5dca226a07f", e._sentryDebugIdIdentifier = "sentry-dbid-b3372f41-cbdb-47fd-8fbe-a5dca226a07f")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7857"], {
        25966: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => f
            });
            var r = n(46756),
                o = n.n(r),
                i = n(5421),
                a = n.n(i),
                s = n(90136),
                c = n.n(s),
                u = new URL(n(96849), n.b),
                l = a()(o()),
                d = c()(u);
            l.push([e.id, `@font-face{font-family:Karla;font-weight:400;src:url(${d})format("woff")}*{box-sizing:border-box}.dotlottie-container{--lottie-player-theme-color:#00ddb3;--lottie-player-seeker-thumb-color:#00c1a2;--lottie-player-seeker-thumb-hover-color:#019d91;--lottie-player-button-hover-color:#f3f6f8;--lottie-player-toolbar-track-color:#d9e0e6;--lottie-player-button-text-color:#20272c;--lottie-player-toolbar-background-color:white;--lottie-player-button-border-radius:4px;--lottie-player-toolbar-height:35px;--lottie-player-popover-border-radius:8px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100%;height:100%;font-family:Karla,sans-serif;font-style:normal;display:block}.main{flex-direction:column;width:100%;height:100%;display:flex}.animation{width:100%;height:100%;display:flex}.animation.controls{height:calc(100% - var(--lottie-player-toolbar-height))}.toolbar{background-color:var(--lottie-player-toolbar-background-color);height:var(--lottie-player-toolbar-height);place-items:center;gap:4px;padding:0 8px;display:flex}.toolbar button{cursor:pointer;color:var(--lottie-player-button-text-color);border-radius:var(--lottie-player-button-border-radius);height:100%;max-height:24px;font-family:inherit;font-style:inherit;font-size:inherit;font-weight:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:0 0;border:0;outline:none;align-items:center;padding:4px;display:flex}.toolbar .popover button{max-height:none}.toolbar button:hover{background-color:var(--lottie-player-button-hover-color)}.toolbar button.active{color:var(--lottie-player-theme-color)}.toolbar button.popover-active{background-color:var(--lottie-player-button-hover-color)}.toolbar button>svg{color:inherit}.toolbar button:focus-visible{outline:none;outline:2px solid var(--lottie-player-theme-color)}.seeker{--seeker:0;-webkit-appearance:none;-moz-apperance:none;cursor:pointer;background-image:linear-gradient(to right,var(--lottie-player-theme-color)calc(var(--seeker)*1%),var(--lottie-player-toolbar-track-color)calc(var(--seeker)*1%));border-radius:9999px;outline:none;width:95%;height:4px;margin:0 4px}.seeker.to-left{background-image:linear-gradient(to right,var(--lottie-player-toolbar-track-color)calc(var(--seeker)*1%),var(--lottie-player-theme-color)calc(var(--seeker)*1%))}.seeker::-moz-range-thumb{-webkit-appearance:none;appearance:none;background:var(--lottie-player-theme-color);cursor:pointer;border-color:transparent;border-radius:50%;width:16px;height:16px;margin-top:-5px}.seeker::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:var(--lottie-player-seeker-thumb-color);cursor:pointer;border-color:transparent;border-radius:50%;width:16px;height:16px}.seeker:focus-visible::-webkit-slider-thumb{outline:2px solid var(--lottie-player-theme-color);border:1.5px solid #fff}.seeker::-webkit-slider-thumb:hover{background:var(--lottie-player-seeker-thumb-hover-color)}.seeker:focus-visible::-moz-range-thumb{outline:2px solid var(--lottie-player-theme-color);border:1.5px solid #fff}.error{justify-content:center;align-items:center;height:100%;margin:auto;display:flex}.popover{letter-spacing:-.28px;border-radius:var(--lottie-player-popover-border-radius);background-color:#fff;border:none;min-width:224px;padding:0;font-size:14px;line-height:150%;position:absolute;bottom:40px;left:auto;right:8px;box-shadow:0 8px 48px rgba(243,246,248,.15),0 8px 16px rgba(61,72,83,.16),0 0 1px rgba(61,72,83,.36)}.popover ul{padding:unset;margin:unset;list-style:none}.popover .popover-content{flex-direction:column;align-items:center;gap:4px;display:flex}.popover .popover-header{color:#20272c;letter-spacing:-.32px;border-bottom:1px solid #d9e0e6;align-items:center;gap:8px;padding:8px;font-family:inherit;font-size:16px;font-weight:700;line-height:150%;display:flex}.popover .popover-header button{padding:4px}.popover .popover-header .popover-header-title{align-items:center;gap:8px;display:flex}.popover .popover-header .reset-theme{color:#63727e;padding:0;font-size:12px;font-weight:400}.popover .popover-header .reset-theme:hover{color:#20272c;background-color:transparent}.popover .popover-items{-ms-overflow-style:none;scrollbar-width:none;flex-direction:column;gap:8px;max-height:300px;padding:8px;display:flex;overflow-y:auto}.popover .popover-subnav{z-index:1;background-color:#fff;inset:0}.popover .popover-items::-webkit-scrollbar{display:none}.popover .popover-item{text-align:left;border-radius:var(--lottie-player-button-border-radius);gap:8px;width:100%;padding:4px 8px;display:flex}`, ""]);
            let f = l
        },
        69708: function(e, t, n) {
            "use strict";
            var r = n(53321),
                o = n.n(r),
                i = n(23518),
                a = n.n(i),
                s = n(14182),
                c = n.n(s),
                u = n(5033),
                l = n.n(u),
                d = n(77141),
                f = n.n(d),
                p = n(66338),
                h = n.n(p),
                g = n(25966),
                v = {};
            v.styleTagTransform = h(), v.setAttributes = l(), v.insert = c().bind(null, "head"), v.domAPI = a(), v.insertStyleElement = f(), o()(g.A, v), g.A && g.A.locals && g.A.locals
        },
        96849: function(e, t, n) {
            "use strict";
            e.exports = n.p + "static/font/Karla-Regular-S52ZIU5L.97759453.woff"
        },
        49431: function(e, t, n) {
            "use strict";
            n.d(t, {
                He: () => f,
                XK: () => h
            });
            var r, o = n(14443),
                i = n(72604),
                a = n.n(i),
                s = n(82080),
                c = n(74679),
                u = n(35133);
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, o.RoomEvent.ConnectionStateChanged, o.RoomEvent.RoomMetadataChanged, o.RoomEvent.ActiveSpeakersChanged, o.RoomEvent.ConnectionQualityChanged, o.RoomEvent.ParticipantConnected, o.RoomEvent.ParticipantDisconnected, o.RoomEvent.ParticipantPermissionsChanged, o.RoomEvent.ParticipantMetadataChanged, o.RoomEvent.ParticipantNameChanged, o.RoomEvent.ParticipantAttributesChanged, o.RoomEvent.TrackMuted, o.RoomEvent.TrackUnmuted, o.RoomEvent.TrackPublished, o.RoomEvent.TrackUnpublished, o.RoomEvent.TrackStreamStateChanged, o.RoomEvent.TrackSubscriptionFailed, o.RoomEvent.TrackSubscriptionPermissionChanged, o.RoomEvent.TrackSubscriptionStatusChanged, o.RoomEvent.LocalTrackPublished, o.RoomEvent.LocalTrackUnpublished;
            var l = [o.ParticipantEvent.TrackPublished, o.ParticipantEvent.TrackUnpublished, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.TrackStreamStateChanged, o.ParticipantEvent.TrackSubscribed, o.ParticipantEvent.TrackUnsubscribed, o.ParticipantEvent.TrackSubscriptionPermissionChanged, o.ParticipantEvent.TrackSubscriptionFailed, o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished];
            o.ParticipantEvent.ConnectionQualityChanged, o.ParticipantEvent.IsSpeakingChanged, o.ParticipantEvent.ParticipantMetadataChanged, o.ParticipantEvent.ParticipantPermissionsChanged, o.ParticipantEvent.TrackMuted, o.ParticipantEvent.TrackUnmuted, o.ParticipantEvent.TrackPublished, o.ParticipantEvent.TrackUnpublished, o.ParticipantEvent.TrackStreamStateChanged, o.ParticipantEvent.TrackSubscriptionFailed, o.ParticipantEvent.TrackSubscriptionPermissionChanged, o.ParticipantEvent.TrackSubscriptionStatusChanged, o.ParticipantEvent.LocalTrackPublished, o.ParticipantEvent.LocalTrackUnpublished;
            var d = a().getLogger("lk-components-js");

            function f(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                d.setLevel(e), (0, o.setLogLevel)(null != (t = n.liveKitClientLogLevel) ? t : e)
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    {
                        sources: r,
                        kind: o,
                        name: i
                    } = t;
                return Array.from(e.trackPublications.values()).filter(e => (!r || r.includes(e.source)) && (!o || e.kind === o) && (!i || e.trackName === i) && (!n || e.track)).map(t => ({
                    participant: e,
                    publication: t,
                    source: t.source
                }))
            }

            function h(e, t) {
                return (function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return new s.c(t => {
                        let r = () => {
                            t.next(e)
                        };
                        return n.forEach(t => {
                            e.on(t, r)
                        }), () => {
                            n.forEach(t => {
                                e.off(t, r)
                            })
                        }
                    }).pipe((0, c.Z)(e))
                })(e, ...l).pipe((0, u.T)(e => {
                    let n = p(e, t);
                    return d.debug(`TrackReference[] was updated. (length ${n.length})`, n), n
                }), (0, c.Z)(p(e, t)))
            }
            d.setDefaultLevel("WARN");
            var {
                load: g,
                save: v
            } = (r = "lk-user-choices", {
                load: () => (function(e) {
                    if ("undefined" == typeof localStorage) return void d.error("Local storage is not available.");
                    try {
                        let t = localStorage.getItem(e);
                        if (!t) return void d.warn(`Item with key ${e} does not exist in local storage.`);
                        return JSON.parse(t)
                    } catch (e) {
                        d.error(`Error getting item from local storage: ${e}`);
                        return
                    }
                })(r),
                save: e => (function(e, t) {
                    if ("undefined" == typeof localStorage) return void d.error("Local storage is not available.");
                    try {
                        if (t) {
                            let n = Object.fromEntries(Object.entries(t).filter(e => {
                                let [, t] = e;
                                return "" !== t
                            }));
                            localStorage.setItem(e, JSON.stringify(n))
                        }
                    } catch (e) {
                        d.error(`Error setting item to local storage: ${e}`)
                    }
                })(r, e)
            })
        },
        50404: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: () => l
            });
            var r, o = n(58191),
                i = n(77530),
                a = n(83952),
                s = n(14443),
                c = n(15424);
            ! function() {
                if (!r) {
                    r = 1;
                    var e = parseInt,
                        t = "object" == typeof c.ae && c.ae && c.ae.Object === Object && c.ae,
                        n = "object" == typeof self && self && self.Object === Object && self,
                        o = t || n || Function("return this")(),
                        i = Object.prototype.toString
                }
            }();
            let u = o.forwardRef(function(e, t) {
                let {
                    trackRef: n,
                    onSubscriptionStatusChanged: r,
                    volume: i,
                    ...u
                } = e, l = (0, c.i)(n), d = o.useRef(null);
                o.useImperativeHandle(t, () => d.current);
                let {
                    elementProps: f,
                    isSubscribed: p,
                    track: h,
                    publication: g
                } = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        [n, r] = o.useState((0, c.X)(e)),
                        [i, s] = o.useState(null == n ? void 0 : n.isMuted),
                        [u, l] = o.useState(null == n ? void 0 : n.isSubscribed),
                        [d, f] = o.useState(null == n ? void 0 : n.track),
                        [p, h] = o.useState("landscape"),
                        g = o.useRef(),
                        {
                            className: v,
                            trackObserver: m
                        } = o.useMemo(() => (0, c.Y)(e), [e.participant.sid ?? e.participant.identity, e.source, (0, c.a1)(e) && e.publication.trackSid]);
                    return o.useEffect(() => {
                        let e = m.subscribe(e => {
                            c.l.debug("update track", e), r(e), s(null == e ? void 0 : e.isMuted), l(null == e ? void 0 : e.isSubscribed), f(null == e ? void 0 : e.track)
                        });
                        return () => null == e ? void 0 : e.unsubscribe()
                    }, [m]), o.useEffect(() => {
                        var n, r;
                        return d && (g.current && d.detach(g.current), null != (n = t.element) && n.current && !(e.participant.isLocal && (null == d ? void 0 : d.kind) === "audio") && d.attach(t.element.current)), g.current = null == (r = t.element) ? void 0 : r.current, () => {
                            g.current && (null == d || d.detach(g.current))
                        }
                    }, [d, t.element]), o.useEffect(() => {
                        var e, t;
                        "number" == typeof(null == (e = null == n ? void 0 : n.dimensions) ? void 0 : e.width) && "number" == typeof(null == (t = null == n ? void 0 : n.dimensions) ? void 0 : t.height) && h(n.dimensions.width > n.dimensions.height ? "landscape" : "portrait")
                    }, [n]), {
                        publication: n,
                        isMuted: i,
                        isSubscribed: u,
                        track: d,
                        elementProps: (0, a.a)(t.props, {
                            className: v,
                            "data-lk-local-participant": e.participant.isLocal,
                            "data-lk-source": null == n ? void 0 : n.source,
                            ...(null == n ? void 0 : n.kind) === "video" && {
                                "data-lk-orientation": p
                            }
                        })
                    }
                }(l, {
                    element: d,
                    props: u
                });
                return o.useEffect(() => {
                    null == r || r(!!p)
                }, [p, r]), o.useEffect(() => {
                    void 0 === h || void 0 === i || (h instanceof s.RemoteAudioTrack ? h.setVolume(i) : c.l.warn("Volume can only be set on remote audio tracks."))
                }, [i, h]), o.useEffect(() => {
                    void 0 === g || void 0 === u.muted || (g instanceof s.RemoteTrackPublication ? g.setEnabled(!u.muted) : c.l.warn("Can only call setEnabled on remote track publications."))
                }, [u.muted, g, h]), o.createElement("audio", {
                    ref: d,
                    ...f
                })
            });

            function l(e) {
                let {
                    volume: t,
                    muted: n
                } = e, r = (0, i.t)([s.Track.Source.Microphone, s.Track.Source.ScreenShareAudio, s.Track.Source.Unknown], {
                    updateOnlyOn: [],
                    onlySubscribed: !0
                }).filter(e => !e.participant.isLocal && e.publication.kind === s.Track.Kind.Audio);
                return o.createElement("div", {
                    style: {
                        display: "none"
                    }
                }, r.map(e => o.createElement(u, {
                    key: (0, c.p)(e),
                    trackRef: e,
                    volume: t,
                    muted: n
                })))
            }
        },
        83952: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: () => c,
                u: () => d
            });
            var r = n(58191),
                o = n(15424),
                i = n(14443);

            function a() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = {
                    ...t[0]
                };
                for (let e = 1; e < t.length; e++) {
                    let n = t[e];
                    for (let e in n) {
                        let t = r[e],
                            o = n[e];
                        "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function() {
                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                for (let e of t)
                                    if ("function" == typeof e) try {
                                        e(...n)
                                    } catch (e) {
                                        console.error(e)
                                    }
                            }
                        }(t, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof o ? r[e] = function() {
                            for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
                                var n, r, o = "";
                                if ("string" == typeof t || "number" == typeof t) o += t;
                                else if ("object" == typeof t)
                                    if (Array.isArray(t)) {
                                        var i = t.length;
                                        for (n = 0; n < i; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r)
                                    } else
                                        for (r in t) t[r] && (o && (o += " "), o += r);
                                return o
                            }(e)) && (r && (r += " "), r += t);
                            return r
                        }(t, o) : r[e] = void 0 !== o ? o : t
                    }
                }
                return r
            }

            function s(e) {
                return void 0 !== e
            }

            function c() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return a(...t.filter(s))
            }

            function u(e, t) {
                return "processor" === e && t && "object" == typeof t && "name" in t ? t.name : "e2ee" === e && t ? "e2ee-enabled" : t
            }
            let l = {
                connect: !0,
                audio: !1,
                video: !1
            };

            function d(e) {
                let {
                    token: t,
                    serverUrl: n,
                    options: s,
                    room: c,
                    connectOptions: d,
                    connect: f,
                    audio: p,
                    video: h,
                    screen: g,
                    onConnected: v,
                    onDisconnected: m,
                    onError: b,
                    onMediaDeviceFailure: y,
                    onEncryptionError: w,
                    simulateParticipants: k,
                    ...x
                } = {
                    ...l,
                    ...e
                };
                s && c && o.l.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");
                let [E, S] = r.useState(), C = r.useRef(f);
                r.useEffect(() => {
                    S(c ?? new i.Room(s))
                }, [c, JSON.stringify(s, u)]);
                let T = r.useMemo(() => {
                    let {
                        className: e
                    } = (0, o.s)();
                    return a(x, {
                        className: e
                    })
                }, [x]);
                return r.useEffect(() => {
                    if (!E) return;
                    let e = () => {
                            let e = E.localParticipant;
                            o.l.debug("trying to publish local tracks"), Promise.all([e.setMicrophoneEnabled(!!p, "boolean" != typeof p ? p : void 0), e.setCameraEnabled(!!h, "boolean" != typeof h ? h : void 0), e.setScreenShareEnabled(!!g, "boolean" != typeof g ? g : void 0)]).catch(e => {
                                o.l.warn(e), null == b || b(e)
                            })
                        },
                        t = (e, t) => {
                            let n = i.MediaDeviceFailure.getFailure(e);
                            null == y || y(n, t)
                        },
                        n = e => {
                            null == w || w(e)
                        },
                        r = e => {
                            null == m || m(e)
                        },
                        a = () => {
                            null == v || v()
                        };
                    return E.on(i.RoomEvent.SignalConnected, e).on(i.RoomEvent.MediaDevicesError, t).on(i.RoomEvent.EncryptionError, n).on(i.RoomEvent.Disconnected, r).on(i.RoomEvent.Connected, a), () => {
                        E.off(i.RoomEvent.SignalConnected, e).off(i.RoomEvent.MediaDevicesError, t).off(i.RoomEvent.EncryptionError, n).off(i.RoomEvent.Disconnected, r).off(i.RoomEvent.Connected, a)
                    }
                }, [E, p, h, g, b, w, y, v, m]), r.useEffect(() => {
                    if (E) {
                        if (k) return void E.simulateParticipants({
                            participants: {
                                count: k
                            },
                            publish: {
                                audio: !0,
                                useRealTracks: !0
                            }
                        });
                        if (f) {
                            if (C.current = !0, o.l.debug("connecting"), !t) return void o.l.debug("no token yet");
                            if (!n) {
                                o.l.warn("no livekit url provided"), null == b || b(Error("no livekit url provided"));
                                return
                            }
                            E.connect(n, t, d).catch(e => {
                                o.l.warn(e), !0 === C.current && (null == b || b(e))
                            })
                        } else o.l.debug("disconnecting because connect is false"), C.current = !1, E.disconnect()
                    }
                }, [f, t, JSON.stringify(d), E, b, n, k]), r.useEffect(() => {
                    if (E) return () => {
                        o.l.info("disconnecting on onmount"), E.disconnect()
                    }
                }, [E]), {
                    room: E,
                    htmlProps: T
                }
            }
        },
        81746: function(e) {
            "use strict";
            let t = (e, t) => {
                let n;
                if (!("string" == typeof e || Array.isArray(e))) throw TypeError("Expected the input to be `string | string[]`");
                return (t = Object.assign({
                    pascalCase: !1
                }, t), 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length) ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = (e => {
                    let t = !1,
                        n = !1,
                        r = !1;
                    for (let o = 0; o < e.length; o++) {
                        let i = e[o];
                        t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o), t = !1, r = n, n = !0, o++) : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1), r = n, n = !1, t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i, r = n, n = i.toUpperCase() === i && i.toLowerCase() !== i)
                    }
                    return e
                })(e)), n = e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase()).replace(/\d+(\w|$)/g, e => e.toUpperCase()), t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
            };
            e.exports = t, e.exports.default = t
        },
        1925: function(e, t, n) {
            "use strict";
            n.d(t, {
                gf: () => X,
                dG: () => Z,
                TT: () => q
            }), n(67372);
            var r, o, i, a, s = n(32908),
                c = n(5191),
                u = n(88575),
                l = n(23986);
            let d = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
                f = "google.c.a.c_id";

            function p(e) {
                return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }(r = i || (i = {}))[r.DATA_MESSAGE = 1] = "DATA_MESSAGE", r[r.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION", (o = a || (a = {})).PUSH_RECEIVED = "push-received", o.NOTIFICATION_CLICKED = "notification-clicked";
            let h = "fcm_token_details_db",
                g = "fcm_token_object_Store";
            async function v(e) {
                if ("databases" in indexedDB && !(await indexedDB.databases()).map(e => e.name).includes(h)) return null;
                let t = null;
                return (await (0, c.P2)(h, 5, {
                    upgrade: async (n, r, o, i) => {
                        if (r < 2 || !n.objectStoreNames.contains(g)) return;
                        let a = i.objectStore(g),
                            s = await a.index("fcmSenderId").get(e);
                        if (await a.clear(), s)
                            if (2 === r) {
                                if (!s.auth || !s.p256dh || !s.endpoint) return;
                                t = {
                                    token: s.fcmToken,
                                    createTime: s.createTime ?? Date.now(),
                                    subscriptionOptions: {
                                        auth: s.auth,
                                        p256dh: s.p256dh,
                                        endpoint: s.endpoint,
                                        swScope: s.swScope,
                                        vapidKey: "string" == typeof s.vapidKey ? s.vapidKey : p(s.vapidKey)
                                    }
                                }
                            } else 3 === r ? t = {
                                token: s.fcmToken,
                                createTime: s.createTime,
                                subscriptionOptions: {
                                    auth: p(s.auth),
                                    p256dh: p(s.p256dh),
                                    endpoint: s.endpoint,
                                    swScope: s.swScope,
                                    vapidKey: p(s.vapidKey)
                                }
                            } : 4 === r && (t = {
                                token: s.fcmToken,
                                createTime: s.createTime,
                                subscriptionOptions: {
                                    auth: p(s.auth),
                                    p256dh: p(s.p256dh),
                                    endpoint: s.endpoint,
                                    swScope: s.swScope,
                                    vapidKey: p(s.vapidKey)
                                }
                            })
                    }
                })).close(), await (0, c.MR)(h), await (0, c.MR)("fcm_vapid_details_db"), await (0, c.MR)("undefined"), ! function(e) {
                    if (!e || !e.subscriptionOptions) return !1;
                    let {
                        subscriptionOptions: t
                    } = e;
                    return "number" == typeof e.createTime && e.createTime > 0 && "string" == typeof e.token && e.token.length > 0 && "string" == typeof t.auth && t.auth.length > 0 && "string" == typeof t.p256dh && t.p256dh.length > 0 && "string" == typeof t.endpoint && t.endpoint.length > 0 && "string" == typeof t.swScope && t.swScope.length > 0 && "string" == typeof t.vapidKey && t.vapidKey.length > 0
                }(t) ? null : t
            }
            let m = "firebase-messaging-store",
                b = null;

            function y() {
                return b || (b = (0, c.P2)("firebase-messaging-database", 1, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(m)
                    }
                })), b
            }
            async function w(e) {
                let t = x(e),
                    n = await y(),
                    r = await n.transaction(m).objectStore(m).get(t);
                if (r) return r;
                {
                    let t = await v(e.appConfig.senderId);
                    if (t) return await k(e, t), t
                }
            }
            async function k(e, t) {
                let n = x(e),
                    r = (await y()).transaction(m, "readwrite");
                return await r.objectStore(m).put(t, n), await r.done, t
            }

            function x(e) {
                let {
                    appConfig: t
                } = e;
                return t.appId
            }
            let E = new u.FA("messaging", "Messaging", {
                "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                "only-available-in-window": "This method is available in a Window context.",
                "only-available-in-sw": "This method is available in a service worker context.",
                "permission-default": "The notification permission was not granted and dismissed instead.",
                "permission-blocked": "The notification permission was not granted and blocked instead.",
                "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
                "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
                "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
                "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
                "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
                "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
                "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
                "token-update-no-token": "FCM returned no token when updating the user to push.",
                "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
                "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
                "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
                "invalid-vapid-key": "The public VAPID key must be a string.",
                "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
            });
            async function S(e, t) {
                let n, r = {
                    method: "POST",
                    headers: await A(e),
                    body: JSON.stringify(N(t))
                };
                try {
                    let t = await fetch(P(e.appConfig), r);
                    n = await t.json()
                } catch (e) {
                    throw E.create("token-subscribe-failed", {
                        errorInfo: null == e ? void 0 : e.toString()
                    })
                }
                if (n.error) {
                    let e = n.error.message;
                    throw E.create("token-subscribe-failed", {
                        errorInfo: e
                    })
                }
                if (!n.token) throw E.create("token-subscribe-no-token");
                return n.token
            }
            async function C(e, t) {
                let n, r = {
                    method: "PATCH",
                    headers: await A(e),
                    body: JSON.stringify(N(t.subscriptionOptions))
                };
                try {
                    let o = await fetch(`${P(e.appConfig)}/${t.token}`, r);
                    n = await o.json()
                } catch (e) {
                    throw E.create("token-update-failed", {
                        errorInfo: null == e ? void 0 : e.toString()
                    })
                }
                if (n.error) {
                    let e = n.error.message;
                    throw E.create("token-update-failed", {
                        errorInfo: e
                    })
                }
                if (!n.token) throw E.create("token-update-no-token");
                return n.token
            }
            async function T(e, t) {
                let n = await A(e);
                try {
                    let r = await fetch(`${P(e.appConfig)}/${t}`, {
                            method: "DELETE",
                            headers: n
                        }),
                        o = await r.json();
                    if (o.error) {
                        let e = o.error.message;
                        throw E.create("token-unsubscribe-failed", {
                            errorInfo: e
                        })
                    }
                } catch (e) {
                    throw E.create("token-unsubscribe-failed", {
                        errorInfo: null == e ? void 0 : e.toString()
                    })
                }
            }

            function P(e) {
                let {
                    projectId: t
                } = e;
                return `https://fcmregistrations.googleapis.com/v1/projects/${t}/registrations`
            }
            async function A(e) {
                let {
                    appConfig: t,
                    installations: n
                } = e, r = await n.getToken();
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": t.apiKey,
                    "x-goog-firebase-installations-auth": `FIS ${r}`
                })
            }

            function N(e) {
                let {
                    p256dh: t,
                    auth: n,
                    endpoint: r,
                    vapidKey: o
                } = e, i = {
                    web: {
                        endpoint: r,
                        auth: n,
                        p256dh: t
                    }
                };
                return o !== d && (i.web.applicationPubKey = o), i
            }
            async function I(e) {
                var t, n;
                let r, o, i, a, s = await L(e.swRegistration, e.vapidKey),
                    c = {
                        vapidKey: e.vapidKey,
                        swScope: e.swRegistration.scope,
                        endpoint: s.endpoint,
                        auth: p(s.getKey("auth")),
                        p256dh: p(s.getKey("p256dh"))
                    },
                    u = await w(e.firebaseDependencies);
                if (!u) return R(e.firebaseDependencies, c);
                if (t = u.subscriptionOptions, r = (n = c).vapidKey === t.vapidKey, o = n.endpoint === t.endpoint, i = n.auth === t.auth, a = n.p256dh === t.p256dh, r && o && i && a)
                    if (Date.now() >= u.createTime + 6048e5) return O(e, {
                        token: u.token,
                        createTime: Date.now(),
                        subscriptionOptions: c
                    });
                    else return u.token;
                try {
                    await T(e.firebaseDependencies, u.token)
                } catch (e) {
                    console.warn(e)
                }
                return R(e.firebaseDependencies, c)
            }
            async function O(e, t) {
                try {
                    let n = await C(e.firebaseDependencies, t),
                        r = {
                            ...t,
                            token: n,
                            createTime: Date.now()
                        };
                    return await k(e.firebaseDependencies, r), n
                } catch (e) {
                    throw e
                }
            }
            async function R(e, t) {
                let n = {
                    token: await S(e, t),
                    createTime: Date.now(),
                    subscriptionOptions: t
                };
                return await k(e, n), n.token
            }
            async function L(e, t) {
                let n = await e.pushManager.getSubscription();
                return n || e.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: function(e) {
                        let t = "=".repeat((4 - e.length % 4) % 4),
                            n = atob((e + t).replace(/\-/g, "+").replace(/_/g, "/")),
                            r = new Uint8Array(n.length);
                        for (let e = 0; e < n.length; ++e) r[e] = n.charCodeAt(e);
                        return r
                    }(t)
                })
            }

            function _(e) {
                var t, n;
                let r = {
                    from: e.from,
                    collapseKey: e.collapse_key,
                    messageId: e.fcmMessageId
                };
                return function(e, t) {
                        if (!t.notification) return;
                        e.notification = {};
                        let n = t.notification.title;
                        n && (e.notification.title = n);
                        let r = t.notification.body;
                        r && (e.notification.body = r);
                        let o = t.notification.image;
                        o && (e.notification.image = o);
                        let i = t.notification.icon;
                        i && (e.notification.icon = i)
                    }(r, e), t = r, (n = e).data && (t.data = n.data),
                    function(e, t) {
                        var n, r, o, i;
                        if (!t.fcmOptions && !(null == (n = t.notification) ? void 0 : n.click_action)) return;
                        e.fcmOptions = {};
                        let a = (null == (r = t.fcmOptions) ? void 0 : r.link) ?? (null == (o = t.notification) ? void 0 : o.click_action);
                        a && (e.fcmOptions.link = a);
                        let s = null == (i = t.fcmOptions) ? void 0 : i.analytics_label;
                        s && (e.fcmOptions.analyticsLabel = s)
                    }(r, e), r
            }
            var j = "AzSCbw63g1R0nCw85jG8",
                D = "Iaya3yLKwmgvh7cF0q4";
            let M = [];
            for (let e = 0; e < j.length; e++) M.push(j.charAt(e)), e < D.length && M.push(D.charAt(e));

            function F(e) {
                return E.create("missing-app-config-values", {
                    valueName: e
                })
            }
            M.join("");
            class U {
                _delete() {
                    return Promise.resolve()
                }
                constructor(e, t, n) {
                    this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
                    const r = function(e) {
                        if (!e || !e.options) throw F("App Configuration Object");
                        if (!e.name) throw F("App Name");
                        let {
                            options: t
                        } = e;
                        for (let e of ["projectId", "apiKey", "appId", "messagingSenderId"])
                            if (!t[e]) throw F(e);
                        return {
                            appName: e.name,
                            projectId: t.projectId,
                            apiKey: t.apiKey,
                            appId: t.appId,
                            senderId: t.messagingSenderId
                        }
                    }(e);
                    this.firebaseDependencies = {
                        app: e,
                        appConfig: r,
                        installations: t,
                        analyticsProvider: n
                    }
                }
            }
            async function K(e) {
                try {
                    e.swRegistration = await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                        scope: "/firebase-cloud-messaging-push-scope"
                    }), e.swRegistration.update().catch(() => {}), await G(e.swRegistration)
                } catch (e) {
                    throw E.create("failed-service-worker-registration", {
                        browserErrorMessage: null == e ? void 0 : e.message
                    })
                }
            }
            async function G(e) {
                return new Promise((t, n) => {
                    let r = setTimeout(() => n(Error("Service worker not registered after 10000 ms")), 1e4),
                        o = e.installing || e.waiting;
                    e.active ? (clearTimeout(r), t()) : o ? o.onstatechange = e => {
                        var n;
                        (null == (n = e.target) ? void 0 : n.state) === "activated" && (o.onstatechange = null, clearTimeout(r), t())
                    } : (clearTimeout(r), n(Error("No incoming service worker found.")))
                })
            }
            async function $(e, t) {
                if (t || e.swRegistration || await K(e), t || !e.swRegistration) {
                    if (!(t instanceof ServiceWorkerRegistration)) throw E.create("invalid-sw-registration");
                    e.swRegistration = t
                }
            }
            async function W(e, t) {
                t ? e.vapidKey = t : e.vapidKey || (e.vapidKey = d)
            }
            async function z(e, t) {
                if (!navigator) throw E.create("only-available-in-window");
                if ("default" === Notification.permission && await Notification.requestPermission(), "granted" !== Notification.permission) throw E.create("permission-blocked");
                return await W(e, null == t ? void 0 : t.vapidKey), await $(e, null == t ? void 0 : t.serviceWorkerRegistration), I(e)
            }
            async function B(e, t, n) {
                let r = function(e) {
                    switch (e) {
                        case a.NOTIFICATION_CLICKED:
                            return "notification_open";
                        case a.PUSH_RECEIVED:
                            return "notification_foreground";
                        default:
                            throw Error()
                    }
                }(t);
                (await e.firebaseDependencies.analyticsProvider.get()).logEvent(r, {
                    message_id: n[f],
                    message_name: n["google.c.a.c_l"],
                    message_time: n["google.c.a.ts"],
                    message_device_time: Math.floor(Date.now() / 1e3)
                })
            }
            async function V(e, t) {
                let n = t.data;
                if (!n.isFirebaseMessaging) return;
                e.onMessageHandler && n.messageType === a.PUSH_RECEIVED && ("function" == typeof e.onMessageHandler ? e.onMessageHandler(_(n)) : e.onMessageHandler.next(_(n)));
                let r = n.data;
                "object" == typeof r && r && f in r && "1" === r["google.c.a.e"] && await B(e, n.messageType, r)
            }
            let H = "@firebase/messaging",
                J = "0.12.23";
            async function q() {
                try {
                    await (0, u.eX)()
                } catch (e) {
                    return !1
                }
                return "undefined" != typeof window && (0, u.zW)() && (0, u.dM)() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }

            function Z() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.Sx)();
                return q().then(e => {
                    if (!e) throw E.create("unsupported-browser")
                }, e => {
                    throw E.create("indexed-db-unsupported")
                }), (0, l.j6)((0, u.Ku)(e), "messaging").getImmediate()
            }
            async function X(e, t) {
                return z(e = (0, u.Ku)(e), t)
            }(0, l.om)(new s.uA("messaging", e => {
                let t = new U(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), e.getProvider("analytics-internal"));
                return navigator.serviceWorker.addEventListener("message", e => V(t, e)), t
            }, "PUBLIC")), (0, l.om)(new s.uA("messaging-internal", e => {
                let t = e.getProvider("messaging").getImmediate();
                return {
                    getToken: e => z(t, e)
                }
            }, "PRIVATE")), (0, l.KO)(H, J), (0, l.KO)(H, J, "esm2020")
        },
        56348: function(e) {
            function t(e, t, n) {
                if (null != t && t < 2) throw Error("Maximum length must not be less than 2");
                if (null != t && t > 998) throw Error("Maximum length must not exceed 998");
                if (t = t || 78, (e = e.replace(/[\r\n]+/g, "")).length <= t) return e;
                for (var r = "", o = 0, i = 0, a = e.length, s = 0, c = 0; o < a;) {
                    if (!n && ~(i = e.lastIndexOf(" ", o + t)) ? i > o ? (r += e.slice(o, i) + "\r\n ", o = i) : (r += e.slice(o, o + t - c) + "\r\n ", o = o + t - c, n = !0) : (r += e.slice(o, o + t - c) + "\r\n ", o = o + t - c), a - o < t) {
                        r += e.slice(o);
                        break
                    }
                    0 === s && (c = 1), s++
                }
                return r
            }
            t.unfold = function(e) {
                return e.replace(/\r\n\s/gm, "")
            }, e.exports = t
        },
        51069: function(e, t, n) {
            var r = n(26189),
                o = n(38716),
                i = n(35358),
                a = Math.max,
                s = Math.min;
            e.exports = function(e, t, n) {
                var c, u, l, d, f, p, h = 0,
                    g = !1,
                    v = !1,
                    m = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function b(t) {
                    var n = c,
                        r = u;
                    return c = u = void 0, h = t, d = e.apply(r, n)
                }

                function y(e) {
                    var n = e - p,
                        r = e - h;
                    return void 0 === p || n >= t || n < 0 || v && r >= l
                }

                function w() {
                    var e, n, r, i = o();
                    if (y(i)) return k(i);
                    f = setTimeout(w, (e = i - p, n = i - h, r = t - e, v ? s(r, l - n) : r))
                }

                function k(e) {
                    return (f = void 0, m && c) ? b(e) : (c = u = void 0, d)
                }

                function x() {
                    var e, n = o(),
                        r = y(n);
                    if (c = arguments, u = this, p = n, r) {
                        if (void 0 === f) return h = e = p, f = setTimeout(w, t), g ? b(e) : d;
                        if (v) return clearTimeout(f), f = setTimeout(w, t), b(p)
                    }
                    return void 0 === f && (f = setTimeout(w, t)), d
                }
                return t = i(t) || 0, r(n) && (g = !!n.leading, l = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : l, m = "trailing" in n ? !!n.trailing : m), x.cancel = function() {
                    void 0 !== f && clearTimeout(f), h = 0, c = p = u = f = void 0
                }, x.flush = function() {
                    return void 0 === f ? d : k(o())
                }, x
            }
        },
        38716: function(e, t, n) {
            var r = n(62205);
            e.exports = function() {
                return r.Date.now()
            }
        },
        72604: function(e) {
            ! function(t, n) {
                "use strict";
                "function" == typeof define && define.amd ? define(n) : e.exports ? e.exports = n() : t.log = n()
            }(this, function() {
                "use strict";
                var e = function() {},
                    t = "undefined",
                    n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                    r = ["trace", "debug", "info", "warn", "error"],
                    o = {},
                    i = null;

                function a(e, t) {
                    var n = e[t];
                    if ("function" == typeof n.bind) return n.bind(e);
                    try {
                        return Function.prototype.bind.call(n, e)
                    } catch (t) {
                        return function() {
                            return Function.prototype.apply.apply(n, [e, arguments])
                        }
                    }
                }

                function s() {
                    console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                }

                function c() {
                    for (var n = this.getLevel(), o = 0; o < r.length; o++) {
                        var i = r[o];
                        this[i] = o < n ? e : this.methodFactory(i, n, this.name)
                    }
                    if (this.log = this.debug, typeof console === t && n < this.levels.SILENT) return "No console available for logging"
                }

                function u(e) {
                    return function() {
                        typeof console !== t && (c.call(this), this[e].apply(this, arguments))
                    }
                }

                function l(r, o, i) {
                    var c;
                    return "debug" === (c = r) && (c = "log"), typeof console !== t && ("trace" === c && n ? s : void 0 !== console[c] ? a(console, c) : void 0 !== console.log ? a(console, "log") : e) || u.apply(this, arguments)
                }

                function d(e, n) {
                    var a, s, u, d = this,
                        f = "loglevel";

                    function p() {
                        var e;
                        if (typeof window !== t && f) {
                            try {
                                e = window.localStorage[f]
                            } catch (e) {}
                            if (typeof e === t) try {
                                var n = window.document.cookie,
                                    r = encodeURIComponent(f),
                                    o = n.indexOf(r + "="); - 1 !== o && (e = /^([^;]+)/.exec(n.slice(o + r.length + 1))[1])
                            } catch (e) {}
                            return void 0 === d.levels[e] && (e = void 0), e
                        }
                    }

                    function h(e) {
                        var t = e;
                        if ("string" == typeof t && void 0 !== d.levels[t.toUpperCase()] && (t = d.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= d.levels.SILENT) return t;
                        throw TypeError("log.setLevel() called with invalid level: " + e)
                    }
                    "string" == typeof e ? f += ":" + e : "symbol" == typeof e && (f = void 0), d.name = e, d.levels = {
                        TRACE: 0,
                        DEBUG: 1,
                        INFO: 2,
                        WARN: 3,
                        ERROR: 4,
                        SILENT: 5
                    }, d.methodFactory = n || l, d.getLevel = function() {
                        return null != u ? u : null != s ? s : a
                    }, d.setLevel = function(e, n) {
                        return u = h(e), !1 !== n && function(e) {
                            var n = (r[e] || "silent").toUpperCase();
                            if (typeof window !== t && f) {
                                try {
                                    window.localStorage[f] = n;
                                    return
                                } catch (e) {}
                                try {
                                    window.document.cookie = encodeURIComponent(f) + "=" + n + ";"
                                } catch (e) {}
                            }
                        }(u), c.call(d)
                    }, d.setDefaultLevel = function(e) {
                        s = h(e), p() || d.setLevel(e, !1)
                    }, d.resetLevel = function() {
                        if (u = null, typeof window !== t && f) {
                            try {
                                window.localStorage.removeItem(f)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(f) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch (e) {}
                        }
                        c.call(d)
                    }, d.enableAll = function(e) {
                        d.setLevel(d.levels.TRACE, e)
                    }, d.disableAll = function(e) {
                        d.setLevel(d.levels.SILENT, e)
                    }, d.rebuild = function() {
                        if (i !== d && (a = h(i.getLevel())), c.call(d), i === d)
                            for (var e in o) o[e].rebuild()
                    }, a = h(i ? i.getLevel() : "WARN");
                    var g = p();
                    null != g && (u = h(g)), c.call(d)
                }(i = new d).getLogger = function(e) {
                    if ("symbol" != typeof e && "string" != typeof e || "" === e) throw TypeError("You must supply a name when creating a logger.");
                    var t = o[e];
                    return t || (t = o[e] = new d(e, i.methodFactory)), t
                };
                var f = typeof window !== t ? window.log : void 0;
                return i.noConflict = function() {
                    return typeof window !== t && window.log === i && (window.log = f), i
                }, i.getLoggers = function() {
                    return o
                }, i.default = i, i
            })
        },
        52749: function(e) {
            "undefined" != typeof self && self, e.exports = function() {
                var e = [function(e, t, n) {
                        "use strict";
                        (function(t) {
                            var n = t.AudioContext || t.webkitAudioContext,
                                r = function e() {
                                    var t = this,
                                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (!e.isRecordingSupported()) throw Error("Recording is not supported in this browser");
                                    this.state = "inactive", this.config = Object.assign({
                                        bufferLength: 4096,
                                        encoderApplication: 2049,
                                        encoderFrameSize: 20,
                                        encoderPath: "encoderWorker.min.js",
                                        encoderSampleRate: 48e3,
                                        maxFramesPerPage: 40,
                                        mediaTrackConstraints: !0,
                                        monitorGain: 0,
                                        numberOfChannels: 1,
                                        recordingGain: 1,
                                        resampleQuality: 3,
                                        streamPages: !1,
                                        wavBitDepth: 16,
                                        sourceNode: {
                                            context: null
                                        }
                                    }, n), this.encodedSamplePosition = 0, this.initAudioContext(), this.initialize = this.initWorklet().then(function() {
                                        return t.initEncoder()
                                    })
                                };
                            r.isRecordingSupported = function() {
                                var e = t.navigator && t.navigator.mediaDevices && t.navigator.mediaDevices.getUserMedia;
                                return n && e && t.WebAssembly
                            }, r.version = "8.0.5", r.prototype.clearStream = function() {
                                this.stream && (this.stream.getTracks ? this.stream.getTracks().forEach(function(e) {
                                    return e.stop()
                                }) : this.stream.stop())
                            }, r.prototype.close = function() {
                                return this.monitorGainNode.disconnect(), this.recordingGainNode.disconnect(), this.sourceNode && this.sourceNode.disconnect(), this.clearStream(), this.encoder && (this.encoderNode.disconnect(), this.encoder.postMessage({
                                    command: "close"
                                })), this.config.sourceNode.context ? Promise.resolve() : this.audioContext.close()
                            }, r.prototype.encodeBuffers = function(e) {
                                if ("recording" === this.state) {
                                    for (var t = [], n = 0; n < e.numberOfChannels; n++) t[n] = e.getChannelData(n);
                                    this.encoder.postMessage({
                                        command: "encode",
                                        buffers: t
                                    })
                                }
                            }, r.prototype.initAudioContext = function() {
                                this.audioContext = this.config.sourceNode.context ? this.config.sourceNode.context : new n, this.monitorGainNode = this.audioContext.createGain(), this.setMonitorGain(this.config.monitorGain), this.recordingGainNode = this.audioContext.createGain(), this.setRecordingGain(this.config.recordingGain)
                            }, r.prototype.initEncoder = function() {
                                var e = this;
                                this.audioContext.audioWorklet ? (this.encoderNode = new AudioWorkletNode(this.audioContext, "encoder-worklet", {
                                    numberOfOutputs: 0
                                }), this.encoder = this.encoderNode.port) : (console.log("audioWorklet support not detected. Falling back to scriptProcessor"), this.encodeBuffers = function() {
                                    return delete e.encodeBuffers
                                }, this.encoderNode = this.audioContext.createScriptProcessor(this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels), this.encoderNode.onaudioprocess = function(t) {
                                    var n = t.inputBuffer;
                                    return e.encodeBuffers(n)
                                }, this.encoderNode.connect(this.audioContext.destination), this.encoder = new t.Worker(this.config.encoderPath))
                            }, r.prototype.initSourceNode = function() {
                                var e = this;
                                return this.config.sourceNode.context ? (this.sourceNode = this.config.sourceNode, Promise.resolve()) : t.navigator.mediaDevices.getUserMedia({
                                    audio: this.config.mediaTrackConstraints
                                }).then(function(t) {
                                    e.stream = t, e.sourceNode = e.audioContext.createMediaStreamSource(t)
                                })
                            }, r.prototype.initWorker = function() {
                                var e = this,
                                    t = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);
                                return this.recordedPages = [], this.totalLength = 0, new Promise(function(n) {
                                    e.encoder.addEventListener("message", function r(o) {
                                        var i = o.data;
                                        switch (i.message) {
                                            case "ready":
                                                n();
                                                break;
                                            case "page":
                                                e.encodedSamplePosition = i.samplePosition, t(i.page);
                                                break;
                                            case "done":
                                                e.encoder.removeEventListener("message", r), e.finish()
                                        }
                                    }), e.encoder.start && e.encoder.start();
                                    var r = e.config,
                                        o = (r.sourceNode, function(e, t) {
                                            if (null == e) return {};
                                            var n, r, o = function(e, t) {
                                                if (null == e) return {};
                                                var n, r, o = {},
                                                    i = Object.keys(e);
                                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                                return o
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                            }
                                            return o
                                        }(r, ["sourceNode"]));
                                    e.encoder.postMessage(Object.assign({
                                        command: "init",
                                        originalSampleRate: e.audioContext.sampleRate,
                                        wavSampleRate: e.audioContext.sampleRate
                                    }, o))
                                })
                            }, r.prototype.initWorklet = function() {
                                return this.audioContext.audioWorklet ? this.audioContext.audioWorklet.addModule(this.config.encoderPath) : Promise.resolve()
                            }, r.prototype.pause = function(e) {
                                var t = this;
                                if ("recording" === this.state) return this.state = "paused", this.recordingGainNode.disconnect(), e && this.config.streamPages ? new Promise(function(e) {
                                    t.encoder.addEventListener("message", function n(r) {
                                        "flushed" === r.data.message && (t.encoder.removeEventListener("message", n), t.onpause(), e())
                                    }), t.encoder.start && t.encoder.start(), t.encoder.postMessage({
                                        command: "flush"
                                    })
                                }) : (this.onpause(), Promise.resolve())
                            }, r.prototype.resume = function() {
                                "paused" === this.state && (this.state = "recording", this.recordingGainNode.connect(this.encoderNode), this.onresume())
                            }, r.prototype.setRecordingGain = function(e) {
                                this.config.recordingGain = e, this.recordingGainNode && this.audioContext && this.recordingGainNode.gain.setTargetAtTime(e, this.audioContext.currentTime, .01)
                            }, r.prototype.setMonitorGain = function(e) {
                                this.config.monitorGain = e, this.monitorGainNode && this.audioContext && this.monitorGainNode.gain.setTargetAtTime(e, this.audioContext.currentTime, .01)
                            }, r.prototype.start = function() {
                                var e = this;
                                return "inactive" === this.state ? (this.state = "loading", this.encodedSamplePosition = 0, this.audioContext.resume().then(function() {
                                    return e.initialize
                                }).then(function() {
                                    return Promise.all([e.initSourceNode(), e.initWorker()])
                                }).then(function() {
                                    e.state = "recording", e.encoder.postMessage({
                                        command: "getHeaderPages"
                                    }), e.sourceNode.connect(e.monitorGainNode), e.sourceNode.connect(e.recordingGainNode), e.monitorGainNode.connect(e.audioContext.destination), e.recordingGainNode.connect(e.encoderNode), e.onstart()
                                }).catch(function(t) {
                                    throw e.state = "inactive", t
                                })) : Promise.resolve()
                            }, r.prototype.stop = function() {
                                var e = this;
                                return "paused" === this.state || "recording" === this.state ? (this.state = "inactive", this.recordingGainNode.connect(this.encoderNode), this.monitorGainNode.disconnect(), this.clearStream(), new Promise(function(t) {
                                    e.encoder.addEventListener("message", function n(r) {
                                        "done" === r.data.message && (e.encoder.removeEventListener("message", n), t())
                                    }), e.encoder.start && e.encoder.start(), e.encoder.postMessage({
                                        command: "done"
                                    })
                                })) : Promise.resolve()
                            }, r.prototype.storePage = function(e) {
                                this.recordedPages.push(e), this.totalLength += e.length
                            }, r.prototype.streamPage = function(e) {
                                this.ondataavailable(e)
                            }, r.prototype.finish = function() {
                                if (!this.config.streamPages) {
                                    var e = new Uint8Array(this.totalLength);
                                    this.recordedPages.reduce(function(t, n) {
                                        return e.set(n, t), t + n.length
                                    }, 0), this.ondataavailable(e)
                                }
                                this.onstop()
                            }, r.prototype.ondataavailable = function() {}, r.prototype.onpause = function() {}, r.prototype.onresume = function() {}, r.prototype.onstart = function() {}, r.prototype.onstop = function() {}, e.exports = r
                        }).call(this, n(1))
                    }, function(e, t) {
                        var n;
                        n = function() {
                            return this
                        }();
                        try {
                            n = n || Function("return this")()
                        } catch (e) {
                            "object" == typeof window && (n = window)
                        }
                        e.exports = n
                    }],
                    t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, (function(t) {
                            return e[t]
                        }).bind(null, o));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 0)
            }()
        },
        93167: function(e, t, n) {
            e = n.nmd(e),
                function(r) {
                    var o = e && e.exports == t && e,
                        i = "object" == typeof n.g && n.g;
                    (i.global === i || i.window === i) && (r = i);
                    var a = String.fromCharCode,
                        s = function(e) {
                            return e.replace(/\x20$/, "=20").replace(/\t$/, "=09")
                        },
                        c = /[\0-\x08\n-\x1F=\x7F-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                        u = {
                            encode: function(e) {
                                for (var t = e.replace(c, function(e) {
                                        if (e > "\xff") throw RangeError("`quotedPrintable.encode()` expects extended ASCII input only. Don’t forget to encode the input first using a character encoding like UTF-8.");
                                        return "=" + ("0" + e.charCodeAt(0).toString(16).toUpperCase()).slice(-2)
                                    }), n = t.split(/\r\n?|\n/g), r = -1, o = n.length, i = []; ++r < o;)
                                    for (var a = n[r], u = 75, l = 0, d = a.length; l < d;) {
                                        var f = t.slice(l, l + u);
                                        /=$/.test(f) ? (f = f.slice(0, u - 1), l += u - 1) : /=[A-F0-9]$/.test(f) ? (f = f.slice(0, u - 2), l += u - 2) : l += u, i.push(f)
                                    }
                                var p = f.length;
                                return /[\t\x20]$/.test(f) && (i.pop(), p + 2 <= u + 1 ? i.push(s(f)) : i.push(f.slice(0, p - 1), s(f.slice(p - 1, p)))), i.join("=\r\n")
                            },
                            decode: function(e) {
                                return e.replace(/[\t\x20]$/gm, "").replace(/=(?:\r\n?|\n|$)/g, "").replace(/=([a-fA-F0-9]{2})/g, function(e, t) {
                                    return a(parseInt(t, 16))
                                })
                            },
                            version: "1.0.1"
                        };
                    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function() {
                        return u
                    });
                    else if (t && !t.nodeType)
                        if (o) o.exports = u;
                        else
                            for (var l in u) u.hasOwnProperty(l) && (t[l] = u[l]);
                    else r.quotedPrintable = u
                }(this)
        },
        78209: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: () => f
            });
            var r = n(82080),
                o = n(67806),
                i = n(84748),
                a = n(30014),
                s = n(81461),
                c = n(68625),
                u = n(16127),
                l = n(56645),
                d = n(92360);

            function f() {
                for (var e, t, n, d = [], f = 0; f < arguments.length; f++) d[f] = arguments[f];
                var h = (0, c.lI)(d),
                    g = (0, c.ms)(d),
                    v = (0, o.D)(d),
                    m = v.args,
                    b = v.keys;
                if (0 === m.length) return (0, i.H)([], h);
                var y = new r.c((e = m, t = h, void 0 === (n = b ? function(e) {
                    return (0, u.e)(b, e)
                } : a.D) && (n = a.D), function(r) {
                    p(t, function() {
                        for (var o = e.length, a = Array(o), s = o, c = o, u = function(o) {
                                p(t, function() {
                                    var u = (0, i.H)(e[o], t),
                                        d = !1;
                                    u.subscribe((0, l._)(r, function(e) {
                                        a[o] = e, !d && (d = !0, c--), c || r.next(n(a.slice()))
                                    }, function() {
                                        --s || r.complete()
                                    }))
                                }, r)
                            }, d = 0; d < o; d++) u(d)
                    }, r)
                }));
                return g ? y.pipe((0, s.I)(g)) : y
            }

            function p(e, t, n) {
                e ? (0, d.N)(n, e, t) : t()
            }
        },
        28972: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: () => d
            });
            var r = n(99313),
                o = n(15438),
                i = n(92969),
                a = n(56645),
                s = n(21889),
                c = n(3331),
                u = n(68625),
                l = n(92360);

            function d(e) {
                for (var t, n, d = [], f = 1; f < arguments.length; f++) d[f - 1] = arguments[f];
                var p = null != (t = (0, u.lI)(d)) ? t : c.E,
                    h = null != (n = d[0]) ? n : null,
                    g = d[1] || 1 / 0;
                return (0, i.N)(function(t, n) {
                    var i = [],
                        c = !1,
                        u = function(e) {
                            var t = e.buffer;
                            e.subs.unsubscribe(), (0, s.o)(i, e), n.next(t), c && d()
                        },
                        d = function() {
                            if (i) {
                                var t = new o.yU;
                                n.add(t);
                                var r = {
                                    buffer: [],
                                    subs: t
                                };
                                i.push(r), (0, l.N)(t, p, function() {
                                    return u(r)
                                }, e)
                            }
                        };
                    null !== h && h >= 0 ? (0, l.N)(n, p, d, h, !0) : c = !0, d();
                    var f = (0, a._)(n, function(e) {
                        var t, n, o = i.slice();
                        try {
                            for (var a = (0, r.Ju)(o), s = a.next(); !s.done; s = a.next()) {
                                var c = s.value,
                                    l = c.buffer;
                                l.push(e), g <= l.length && u(c)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, function() {
                        for (; null == i ? void 0 : i.length;) n.next(i.shift().buffer);
                        null == f || f.unsubscribe(), n.complete(), n.unsubscribe()
                    }, void 0, function() {
                        return i = null
                    });
                    t.subscribe(f)
                })
            }
        },
        10506: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: () => c
            });
            var r = n(45663),
                o = n(53011),
                i = n(92969),
                a = n(82080),
                s = {
                    connector: function() {
                        return new r.B
                    }
                };

            function c(e, t) {
                void 0 === t && (t = s);
                var n = t.connector;
                return (0, i.N)(function(t, r) {
                    var i = n();
                    (0, o.Tg)(e(new a.c(function(e) {
                        return i.subscribe(e)
                    }))).subscribe(r), r.add(t.subscribe(i))
                })
            }
        },
        12143: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: () => a
            });
            var r = n(30014),
                o = n(92969),
                i = n(56645);

            function a(e, t) {
                return void 0 === t && (t = r.D), e = null != e ? e : s, (0, o.N)(function(n, r) {
                    var o, a = !0;
                    n.subscribe((0, i._)(r, function(n) {
                        var i = t(n);
                        (a || !e(o, i)) && (a = !1, o = i, r.next(n))
                    }))
                })
            }

            function s(e, t) {
                return e === t
            }
        },
        15776: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: () => i
            });
            var r = n(34993),
                o = n(14812);

            function i(e, t) {
                return (0, o.T)(t) ? (0, r.n)(function() {
                    return e
                }, t) : (0, r.n)(function() {
                    return e
                })
            }
        },
        84135: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: () => i
            });
            var r = n(92969),
                o = n(56645);

            function i(e, t) {
                return void 0 === t && (t = !1), (0, r.N)(function(n, r) {
                    var i = 0;
                    n.subscribe((0, o._)(r, function(n) {
                        var o = e(n, i++);
                        (o || t) && r.next(n), o || r.complete()
                    }))
                })
            }
        },
        80424: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: () => l
            });
            var r = n(99313),
                o = n(92969),
                i = n(56645),
                a = n(53011),
                s = n(30014),
                c = n(87436),
                u = n(68625);

            function l() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = (0, u.ms)(e);
                return (0, o.N)(function(t, o) {
                    for (var u = e.length, l = Array(u), d = e.map(function() {
                            return !1
                        }), f = !1, p = function(t) {
                            (0, a.Tg)(e[t]).subscribe((0, i._)(o, function(e) {
                                l[t] = e, !f && !d[t] && (d[t] = !0, (f = d.every(s.D)) && (d = null))
                            }, c.l))
                        }, h = 0; h < u; h++) p(h);
                    t.subscribe((0, i._)(o, function(e) {
                        if (f) {
                            var t = (0, r.fX)([e], (0, r.zs)(l));
                            o.next(n ? n.apply(void 0, (0, r.fX)([], (0, r.zs)(t))) : t)
                        }
                    }))
                })
            }
        },
        64241: function(e, t) {
            ! function(e) {
                var t, n, r, o = String.fromCharCode;

                function i(e) {
                    for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? (64512 & (n = e.charCodeAt(o++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                    return r
                }

                function a(e) {
                    if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
                }

                function s(e, t) {
                    return o(e >> t & 63 | 128)
                }

                function c() {
                    if (r >= n) throw Error("Invalid byte index");
                    var e = 255 & t[r];
                    if (r++, (192 & e) == 128) return 63 & e;
                    throw Error("Invalid continuation byte")
                }
                e.version = "3.0.0", e.encode = function(e) {
                    for (var t = i(e), n = t.length, r = -1, c = ""; ++r < n;) c += function(e) {
                        if ((0xffffff80 & e) == 0) return o(e);
                        var t = "";
                        return (0xfffff800 & e) == 0 ? t = o(e >> 6 & 31 | 192) : (0xffff0000 & e) == 0 ? (a(e), t = o(e >> 12 & 15 | 224) + s(e, 6)) : (0xffe00000 & e) == 0 && (t = o(e >> 18 & 7 | 240) + s(e, 12) + s(e, 6)), t += o(63 & e | 128)
                    }(t[r]);
                    return c
                }, e.decode = function(e) {
                    n = (t = i(e)).length, r = 0;
                    for (var s, u = []; !1 !== (s = function() {
                            var e, o, i, s;
                            if (r > n) throw Error("Invalid byte index");
                            if (r == n) return !1;
                            if (e = 255 & t[r], r++, (128 & e) == 0) return e;
                            if ((224 & e) == 192) {
                                if ((s = (31 & e) << 6 | (o = c())) >= 128) return s;
                                throw Error("Invalid continuation byte")
                            }
                            if ((240 & e) == 224) {
                                if ((s = (15 & e) << 12 | (o = c()) << 6 | (i = c())) >= 2048) return a(s), s;
                                throw Error("Invalid continuation byte")
                            }
                            if ((248 & e) == 240 && (o = c(), (s = (7 & e) << 18 | o << 12 | (i = c()) << 6 | c()) >= 65536 && s <= 1114111)) return s;
                            throw Error("Invalid UTF-8 detected")
                        }());) u.push(s);
                    for (var l, d = u.length, f = -1, p = ""; ++f < d;)(l = u[f]) > 65535 && (l -= 65536, p += o(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), p += o(l);
                    return p
                }
            }(t)
        },
        26579: function(e, t, n) {
            var r = n(81746),
                o = n(15833);

            function i(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? e[t] = [e[t], n] : e[t] = n
            }

            function a(e, t) {
                var n = t.split("="),
                    o = r(n[0]),
                    a = n[1];
                return ((null == a || "" === a) && (a = n[0], o = "type"), "type" === o) ? ('"' === a[0] && '"' === a[a.length - 1] && -1 !== a.indexOf(",") && (a = a.slice(1, -1)), a.toLowerCase().split(",").forEach(function(t) {
                    i(e, o, t)
                })) : i(e, o, a), e
            }
            e.exports = function(e) {
                for (var t = {}, n = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:([\s\S]+))?$/i, c = e.length - 1, u = 1; u < c; u++) {
                    n = e[u];
                    var l = s.exec(n);
                    if (l) {
                        var d = l[1].split("."),
                            f = d.pop(),
                            p = d.pop(),
                            h = l[3],
                            g = (l[2] ? l[2].replace(/^;|;$/g, "").split(";") : []).reduce(a, p ? {
                                group: p
                            } : {}),
                            v = r(f),
                            m = new o(v, h, g);
                        i(t, v, m)
                    }
                }
                return t
            }
        },
        15833: function(e) {
            function t(e, n, r) {
                if (!(this instanceof t)) return new t(n);
                null != r && Object.assign(this, r), this._field = e, this._data = n, Object.defineProperty(this, "_field", {
                    enumerable: !1
                }), Object.defineProperty(this, "_data", {
                    enumerable: !1
                })
            }

            function n(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase()
            }
            t.fromJSON = function(e) {
                var n = e[0],
                    r = e[1];
                return /text/i.test(e[2]) || (r.value = e[2]), new t(n, Array.isArray(e[3]) ? e[3].join(";") : e[3], r)
            }, t.prototype = {
                constructor: t,
                is: function(e) {
                    return e = (e + "").toLowerCase(), Array.isArray(this.type) ? this.type.indexOf(e) >= 0 : this.type === e
                },
                isEmpty: function() {
                    return null == this._data && 0 === Object.keys(this).length
                },
                clone: function() {
                    return new t(this._field, this._data, this)
                },
                toString: function(e) {
                    for (var t = (this.group ? this.group + "." : "") + n(this._field), r = Object.keys(this), o = [], i = 0; i < r.length; i++)
                        if ("group" !== r[i]) switch (t) {
                            case "TEL":
                            case "ADR":
                            case "EMAIL":
                                "2.1" === e ? Array.isArray(this[r[i]]) ? o.push(this[r[i]].join(";")) : o.push(this[r[i]]) : o.push(n(r[i]) + "=" + this[r[i]]);
                                break;
                            default:
                                o.push(n(r[i]) + "=" + this[r[i]])
                        }
                    return "2.1" === e || "3.0" === e ? t + (o.length ? ";" + o.join(";").toUpperCase() : o.toString().toUpperCase()) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data) : t + (o.length ? ";" + o.join(";") : o) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data)
                },
                valueOf: function() {
                    return this._data
                },
                toJSON: function() {
                    var e = Object.assign({}, this);
                    "text" === e.value && (e.value = void 0, delete e.value);
                    var t = [this._field, e, this.value || "text"];
                    switch (this._field) {
                        default:
                            t.push(this._data);
                            break;
                        case "adr":
                        case "n":
                            t.push(this._data.split(";"))
                    }
                    return t
                }
            }, e.exports = t
        },
        40430: function(e, t, n) {
            function r() {
                if (!(this instanceof r)) return new r;
                this.version = r.versions[r.versions.length - 1], this.data = {}
            }
            r.mimeType = "text/vcard", r.extension = ".vcf", r.versions = ["2.1", "3.0", "4.0"], r.EOL = "\r\n", r.foldLine = n(56348), r.normalize = function(e) {
                return (e + "").replace(/^[\s\r\n]+|[\s\r\n]+$/g, "").replace(/(\r\n)[\x09\x20]?(\r\n)|$/g, "$1").replace(/\r\n[\x20\x09]/g, "")
            }, r.isSupported = function(e) {
                return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e)
            }, r.parse = function(e) {
                for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], o = 0; o < t.length; o++) n.push(new r().parse(t[o]));
                return n
            }, r.parseLines = n(26579), r.fromJSON = function(e) {
                if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new r;
                if (!/vcard/i.test(e[0])) throw Error("Object not in jCard format");
                var t = new r;
                return e[1].forEach(function(e) {
                    t.addProperty(r.Property.fromJSON(e))
                }), t
            }, r.format = function(e, t) {
                if (t = t || e.version || r.versions[r.versions.length - 1], !r.isSupported(t)) throw Error('Unsupported vCard version "' + t + '"');
                var n = [];
                n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
                for (var o = Object.keys(e.data), i = "", a = 0; a < o.length; a++)
                    if ("version" !== o[a])
                        if (Array.isArray(i = e.data[o[a]]))
                            for (var s = 0; s < i.length; s++) i[s].isEmpty() || n.push(r.foldLine(i[s].toString(t), 75));
                        else i.isEmpty() || n.push(r.foldLine(i.toString(t), 75));
                return n.push("END:VCARD"), n.join(r.EOL)
            }, r.Property = n(15833), r.prototype = {
                constructor: r,
                get: function(e) {
                    return null == this.data[e] ? this.data[e] : Array.isArray(this.data[e]) ? this.data[e].map(function(e) {
                        return e.clone()
                    }) : this.data[e].clone()
                },
                set: function(e, t, n) {
                    return this.setProperty(new r.Property(e, t, n))
                },
                add: function(e, t, n) {
                    var o = new r.Property(e, t, n);
                    return this.addProperty(o), this
                },
                setProperty: function(e) {
                    return this.data[e._field] = e, this
                },
                addProperty: function(e) {
                    var t = e._field;
                    return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? this.data[t] = [this.data[t], e] : this.data[t] = e, this
                },
                parse: function(e) {
                    var t = r.normalize(e).split(/\r\n/g),
                        n = t[0],
                        o = t[1],
                        i = t[t.length - 1];
                    let a = /VERSION:\d\.\d/i;
                    if (!/BEGIN:VCARD/i.test(n)) throw SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                    if (!/END:VCARD/i.test(i)) throw SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + i + '"');
                    if (!a.test(o) && !(o = t.find(e => a.test(e)))) throw SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but none found');
                    if (this.version = o.substring(8, 11), !r.isSupported(this.version)) throw Error('Unsupported version "' + this.version + '"');
                    return this.data = r.parseLines(t), this
                },
                toString: function(e, t) {
                    return e = e || this.version, r.format(this, e)
                },
                toJCard: function(e) {
                    e = e || "4.0";
                    for (var t = Object.keys(this.data), n = [
                            ["version", {}, "text", e]
                        ], r = null, o = 0; o < t.length; o++)
                        if ("version" !== t[o])
                            if (Array.isArray(r = this.data[t[o]]))
                                for (var i = 0; i < r.length; i++) n.push(r[i].toJSON());
                            else n.push(r.toJSON());
                    return ["vcard", n]
                },
                toJSON: function() {
                    return this.toJCard(this.version)
                }
            }, e.exports = r
        }
    }
]);
//# sourceMappingURL=7857.6896fcbf.js.map