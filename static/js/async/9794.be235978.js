/*! For license information please see 9794.be235978.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ec1f2a8-6709-4ca4-ad99-79b6824be298", e._sentryDebugIdIdentifier = "sentry-dbid-7ec1f2a8-6709-4ca4-ad99-79b6824be298")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9794"], {
        25913: function(e, t, n) {
            n.d(t, {
                DotLottieAudio: () => s
            });
            var o = n(51116),
                r = n(25260),
                i = (0, r.a)(e => {
                    var t, o, r, i, a, s, u, _, d, l, c, p, f, h;
                    (t = function() {
                        this.init()
                    }).prototype = {
                        init: function() {
                            var e = this || o;
                            return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "u" > typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
                        },
                        volume: function(e) {
                            var t = this || o;
                            if (e = parseFloat(e), t.ctx || l(), "u" > typeof e && e >= 0 && e <= 1) {
                                if (t._volume = e, t._muted) return t;
                                t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime);
                                for (var n = 0; n < t._howls.length; n++)
                                    if (!t._howls[n]._webAudio)
                                        for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                                            var a = t._howls[n]._soundById(r[i]);
                                            a && a._node && (a._node.volume = a._volume * e)
                                        }
                                return t
                            }
                            return t._volume
                        },
                        mute: function(e) {
                            var t = this || o;
                            t.ctx || l(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime);
                            for (var n = 0; n < t._howls.length; n++)
                                if (!t._howls[n]._webAudio)
                                    for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                                        var a = t._howls[n]._soundById(r[i]);
                                        a && a._node && (a._node.muted = !!e || a._muted)
                                    }
                            return t
                        },
                        stop: function() {
                            for (var e = this || o, t = 0; t < e._howls.length; t++) e._howls[t].stop();
                            return e
                        },
                        unload: function() {
                            for (var e = this || o, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                            return e.usingWebAudio && e.ctx && "u" > typeof e.ctx.close && (e.ctx.close(), e.ctx = null, l()), e
                        },
                        codecs: function(e) {
                            return (this || o)._codecs[e.replace(/^x-/, "")]
                        },
                        _setup: function() {
                            var e = this || o;
                            if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
                                if ("u" > typeof Audio) try {
                                    var t = new Audio;
                                    typeof t.oncanplaythrough > "u" && (e._canPlayEvent = "canplay")
                                } catch {
                                    e.noAudio = !0
                                } else e.noAudio = !0;
                            try {
                                var t = new Audio;
                                t.muted && (e.noAudio = !0)
                            } catch {}
                            return e.noAudio || e._setupCodecs(), e
                        },
                        _setupCodecs: function() {
                            var e = this || o,
                                t = null;
                            try {
                                t = "u" > typeof Audio ? new Audio : null
                            } catch {
                                return e
                            }
                            if (!t || "function" != typeof t.canPlayType) return e;
                            var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                                r = e._navigator ? e._navigator.userAgent : "",
                                i = r.match(/OPR\/([0-6].)/g),
                                a = i && 33 > parseInt(i[0].split("/")[1], 10),
                                s = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome"),
                                u = r.match(/Version\/(.*?) /),
                                _ = s && u && 15 > parseInt(u[1], 10);
                            return e._codecs = {
                                mp3: !!(!a && (n || t.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                                mpeg: !!n,
                                opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                                ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                                oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                                wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                                aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                                caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                                m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                                weba: !!(!_ && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                                webm: !!(!_ && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                                dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                                flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                            }, e
                        },
                        _unlockAudio: function() {
                            var e = this || o;
                            if (!(e._audioUnlocked || !e.ctx)) {
                                e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                                var t = function(n) {
                                    for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                                        var o = new Audio;
                                        o._unlocked = !0, e._releaseHtml5Audio(o)
                                    } catch {
                                        e.noAudio = !0;
                                        break
                                    }
                                    for (var r = 0; r < e._howls.length; r++)
                                        if (!e._howls[r]._webAudio)
                                            for (var i = e._howls[r]._getSoundIds(), a = 0; a < i.length; a++) {
                                                var s = e._howls[r]._soundById(i[a]);
                                                s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                            }
                                    e._autoResume();
                                    var u = e.ctx.createBufferSource();
                                    u.buffer = e._scratchBuffer, u.connect(e.ctx.destination), typeof u.start > "u" ? u.noteOn(0) : u.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), u.onended = function() {
                                        u.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0), document.removeEventListener("keydown", t, !0);
                                        for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock")
                                    }
                                };
                                return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), document.addEventListener("keydown", t, !0), e
                            }
                        },
                        _obtainHtml5Audio: function() {
                            var e = this || o;
                            if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                            var t = new Audio().play();
                            return t && "u" > typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch(function() {
                                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                            }), new Audio
                        },
                        _releaseHtml5Audio: function(e) {
                            var t = this || o;
                            return e._unlocked && t._html5AudioPool.push(e), t
                        },
                        _autoSuspend: function() {
                            var e = this;
                            if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !o.usingWebAudio)) {
                                for (var t = 0; t < e._howls.length; t++)
                                    if (e._howls[t]._webAudio) {
                                        for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                            if (!e._howls[t]._sounds[n]._paused) return e
                                    } return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                                    if (e.autoSuspend) {
                                        e._suspendTimer = null, e.state = "suspending";
                                        var t = function() {
                                            e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                        };
                                        e.ctx.suspend().then(t, t)
                                    }
                                }, 3e4), e
                            }
                        },
                        _autoResume: function() {
                            var e = this;
                            if (!(!e.ctx || typeof e.ctx.resume > "u" || !o.usingWebAudio)) return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then(function() {
                                e.state = "running";
                                for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                            }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                        }
                    }, o = new t, (r = function(e) {
                        e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
                    }).prototype = {
                        init: function(e) {
                            var t = this;
                            return o.ctx || l(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload && "metadata" !== e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhr = {
                                method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                                headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                                withCredentials: !!e.xhr && !!e.xhr.withCredentials && e.xhr.withCredentials
                            }, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                                fn: e.onend
                            }] : [], t._onfade = e.onfade ? [{
                                fn: e.onfade
                            }] : [], t._onload = e.onload ? [{
                                fn: e.onload
                            }] : [], t._onloaderror = e.onloaderror ? [{
                                fn: e.onloaderror
                            }] : [], t._onplayerror = e.onplayerror ? [{
                                fn: e.onplayerror
                            }] : [], t._onpause = e.onpause ? [{
                                fn: e.onpause
                            }] : [], t._onplay = e.onplay ? [{
                                fn: e.onplay
                            }] : [], t._onstop = e.onstop ? [{
                                fn: e.onstop
                            }] : [], t._onmute = e.onmute ? [{
                                fn: e.onmute
                            }] : [], t._onvolume = e.onvolume ? [{
                                fn: e.onvolume
                            }] : [], t._onrate = e.onrate ? [{
                                fn: e.onrate
                            }] : [], t._onseek = e.onseek ? [{
                                fn: e.onseek
                            }] : [], t._onunlock = e.onunlock ? [{
                                fn: e.onunlock
                            }] : [], t._onresume = [], t._webAudio = o.usingWebAudio && !t._html5, "u" > typeof o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(t), t._autoplay && t._queue.push({
                                event: "play",
                                action: function() {
                                    t.play()
                                }
                            }), t._preload && "none" !== t._preload && t.load(), t
                        },
                        load: function() {
                            var e, t, n = null;
                            if (o.noAudio) return void this._emit("loaderror", null, "No audio support.");
                            "string" == typeof this._src && (this._src = [this._src]);
                            for (var r = 0; r < this._src.length; r++) {
                                if (this._format && this._format[r]) e = this._format[r];
                                else {
                                    if ("string" != typeof(t = this._src[r])) {
                                        this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }(e = /^data:audio\/([^;,]+);/i.exec(t)) || (e = /\.([^.]+)$/.exec(t.split("?", 1)[0])), e && (e = e[1].toLowerCase())
                                }
                                if (e || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), e && o.codecs(e)) {
                                    n = this._src[r];
                                    break
                                }
                            }
                            return n ? (this._src = n, this._state = "loading", "https:" === window.location.protocol && "http:" === n.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new i(this), this._webAudio && s(this), this) : void this._emit("loaderror", null, "No codec support for selected audio sources.")
                        },
                        play: function(e, t) {
                            var n = this,
                                r = null;
                            if ("number" == typeof e) r = e, e = null;
                            else {
                                if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null;
                                if (typeof e > "u" && (e = "__default", !n._playLock)) {
                                    for (var i = 0, a = 0; a < n._sounds.length; a++) n._sounds[a]._paused && !n._sounds[a]._ended && (i++, r = n._sounds[a]._id);
                                    1 === i ? e = null : r = null
                                }
                            }
                            var s = r ? n._soundById(r) : n._inactiveSound();
                            if (!s) return null;
                            if (r && !e && (e = s._sprite || "__default"), "loaded" !== n._state) {
                                s._sprite = e, s._ended = !1;
                                var u = s._id;
                                return n._queue.push({
                                    event: "play",
                                    action: function() {
                                        n.play(u)
                                    }
                                }), u
                            }
                            if (r && !s._paused) return t || n._loadQueue("play"), s._id;
                            n._webAudio && o._autoResume();
                            var _ = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                                d = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - _),
                                l = 1e3 * d / Math.abs(s._rate),
                                c = n._sprite[e][0] / 1e3,
                                p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                            s._sprite = e, s._ended = !1;
                            var f = function() {
                                s._paused = !1, s._seek = _, s._start = c, s._stop = p, s._loop = !!(s._loop || n._sprite[e][2])
                            };
                            if (_ >= p) return void n._ended(s);
                            var h = s._node;
                            if (n._webAudio) {
                                var m = function() {
                                    n._playLock = !1, f(), n._refreshBuffer(s);
                                    var e = s._muted || n._muted ? 0 : s._volume;
                                    h.gain.setValueAtTime(e, o.ctx.currentTime), s._playStart = o.ctx.currentTime, typeof h.bufferSource.start > "u" ? s._loop ? h.bufferSource.noteGrainOn(0, _, 86400) : h.bufferSource.noteGrainOn(0, _, d) : s._loop ? h.bufferSource.start(0, _, 86400) : h.bufferSource.start(0, _, d), l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)), t || setTimeout(function() {
                                        n._emit("play", s._id), n._loadQueue()
                                    }, 0)
                                };
                                "running" === o.state && "interrupted" !== o.ctx.state ? m() : (n._playLock = !0, n.once("resume", m), n._clearTimer(s._id))
                            } else {
                                var y = function() {
                                    h.currentTime = _, h.muted = s._muted || n._muted || o._muted || h.muted, h.volume = s._volume * o.volume(), h.playbackRate = s._rate;
                                    try {
                                        var r = h.play();
                                        if (r && "u" > typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (n._playLock = !0, f(), r.then(function() {
                                                n._playLock = !1, h._unlocked = !0, t ? n._loadQueue() : n._emit("play", s._id)
                                            }).catch(function() {
                                                n._playLock = !1, n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                                            })) : t || (n._playLock = !1, f(), n._emit("play", s._id)), h.playbackRate = s._rate, h.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l) : (n._endTimers[s._id] = function() {
                                            n._ended(s), h.removeEventListener("ended", n._endTimers[s._id], !1)
                                        }, h.addEventListener("ended", n._endTimers[s._id], !1))
                                    } catch (e) {
                                        n._emit("playerror", s._id, e)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === h.src && (h.src = n._src, h.load());
                                var v = window && window.ejecta || !h.readyState && o._navigator.isCocoonJS;
                                if (h.readyState >= 3 || v) y();
                                else {
                                    n._playLock = !0, n._state = "loading";
                                    var A = function() {
                                        n._state = "loaded", y(), h.removeEventListener(o._canPlayEvent, A, !1)
                                    };
                                    h.addEventListener(o._canPlayEvent, A, !1), n._clearTimer(s._id)
                                }
                            }
                            return s._id
                        },
                        pause: function(e) {
                            var t = this;
                            if ("loaded" !== t._state || t._playLock) return t._queue.push({
                                event: "pause",
                                action: function() {
                                    t.pause(e)
                                }
                            }), t;
                            for (var n = t._getSoundIds(e), o = 0; o < n.length; o++) {
                                t._clearTimer(n[o]);
                                var r = t._soundById(n[o]);
                                if (r && !r._paused && (r._seek = t.seek(n[o]), r._rateSeek = 0, r._paused = !0, t._stopFade(n[o]), r._node))
                                    if (t._webAudio) {
                                        if (!r._node.bufferSource) continue;
                                        typeof r._node.bufferSource.stop > "u" ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), t._cleanBuffer(r._node)
                                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                                arguments[1] || t._emit("pause", r ? r._id : null)
                            }
                            return t
                        },
                        stop: function(e, t) {
                            var n = this;
                            if ("loaded" !== n._state || n._playLock) return n._queue.push({
                                event: "stop",
                                action: function() {
                                    n.stop(e)
                                }
                            }), n;
                            for (var o = n._getSoundIds(e), r = 0; r < o.length; r++) {
                                n._clearTimer(o[r]);
                                var i = n._soundById(o[r]);
                                i && (i._seek = i._start || 0, i._rateSeek = 0, i._paused = !0, i._ended = !0, n._stopFade(o[r]), i._node && (n._webAudio ? i._node.bufferSource && (typeof i._node.bufferSource.stop > "u" ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), n._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0, i._node.pause(), i._node.duration === 1 / 0 && n._clearSound(i._node))), t || n._emit("stop", i._id))
                            }
                            return n
                        },
                        mute: function(e, t) {
                            var n = this;
                            if ("loaded" !== n._state || n._playLock) return n._queue.push({
                                event: "mute",
                                action: function() {
                                    n.mute(e, t)
                                }
                            }), n;
                            if (typeof t > "u")
                                if ("boolean" != typeof e) return n._muted;
                                else n._muted = e;
                            for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
                                var a = n._soundById(r[i]);
                                a && (a._muted = e, a._interval && n._stopFade(a._id), n._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, o.ctx.currentTime) : a._node && (a._node.muted = !!o._muted || e), n._emit("mute", a._id))
                            }
                            return n
                        },
                        volume: function() {
                            var e, t, n, r = this,
                                i = arguments;
                            if (0 === i.length) return r._volume;
                            if (1 === i.length || 2 === i.length && typeof i[1] > "u" ? r._getSoundIds().indexOf(i[0]) >= 0 ? n = parseInt(i[0], 10) : t = parseFloat(i[0]) : i.length >= 2 && (t = parseFloat(i[0]), n = parseInt(i[1], 10)), !("u" > typeof t) || !(t >= 0) || !(t <= 1)) return (e = n ? r._soundById(n) : r._sounds[0]) ? e._volume : 0;
                            if ("loaded" !== r._state || r._playLock) return r._queue.push({
                                event: "volume",
                                action: function() {
                                    r.volume.apply(r, i)
                                }
                            }), r;
                            typeof n > "u" && (r._volume = t), n = r._getSoundIds(n);
                            for (var a = 0; a < n.length; a++)(e = r._soundById(n[a])) && (e._volume = t, i[2] || r._stopFade(n[a]), r._webAudio && e._node && !e._muted ? e._node.gain.setValueAtTime(t, o.ctx.currentTime) : e._node && !e._muted && (e._node.volume = t * o.volume()), r._emit("volume", e._id));
                            return r
                        },
                        fade: function(e, t, n, r) {
                            var i = this;
                            if ("loaded" !== i._state || i._playLock) return i._queue.push({
                                event: "fade",
                                action: function() {
                                    i.fade(e, t, n, r)
                                }
                            }), i;
                            e = Math.min(Math.max(0, parseFloat(e)), 1), t = Math.min(Math.max(0, parseFloat(t)), 1), n = parseFloat(n), i.volume(e, r);
                            for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
                                var u = i._soundById(a[s]);
                                if (u) {
                                    if (r || i._stopFade(a[s]), i._webAudio && !u._muted) {
                                        var _ = o.ctx.currentTime,
                                            d = _ + n / 1e3;
                                        u._volume = e, u._node.gain.setValueAtTime(e, _), u._node.gain.linearRampToValueAtTime(t, d)
                                    }
                                    i._startFadeInterval(u, e, t, n, a[s], typeof r > "u")
                                }
                            }
                            return i
                        },
                        _startFadeInterval: function(e, t, n, o, r, i) {
                            var a = this,
                                s = t,
                                u = n - t,
                                _ = Math.abs(u / .01),
                                d = Math.max(4, _ > 0 ? o / _ : o),
                                l = Date.now();
                            e._fadeTo = n, e._interval = setInterval(function() {
                                var r = (Date.now() - l) / o;
                                l = Date.now(), s += u * r, s = Math.round(100 * s) / 100, s = u < 0 ? Math.max(n, s) : Math.min(n, s), a._webAudio ? e._volume = s : a.volume(s, e._id, !0), i && (a._volume = s), (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, a.volume(n, e._id), a._emit("fade", e._id))
                            }, d)
                        },
                        _stopFade: function(e) {
                            var t = this._soundById(e);
                            return t && t._interval && (this._webAudio && t._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(t._interval), t._interval = null, this.volume(t._fadeTo, e), t._fadeTo = null, this._emit("fade", e)), this
                        },
                        loop: function() {
                            var e, t, n, o = arguments;
                            if (0 === o.length) return this._loop;
                            if (1 === o.length)
                                if ("boolean" != typeof o[0]) return !!(n = this._soundById(parseInt(o[0], 10))) && n._loop;
                                else e = o[0], this._loop = e;
                            else 2 === o.length && (e = o[0], t = parseInt(o[1], 10));
                            for (var r = this._getSoundIds(t), i = 0; i < r.length; i++)(n = this._soundById(r[i])) && (n._loop = e, this._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop, this.playing(r[i]) && (this.pause(r[i], !0), this.play(r[i], !0)))));
                            return this
                        },
                        rate: function() {
                            var e, t, n, r = this,
                                i = arguments;
                            if (0 === i.length ? n = r._sounds[0]._id : 1 === i.length ? r._getSoundIds().indexOf(i[0]) >= 0 ? n = parseInt(i[0], 10) : t = parseFloat(i[0]) : 2 === i.length && (t = parseFloat(i[0]), n = parseInt(i[1], 10)), "number" != typeof t) return (e = r._soundById(n)) ? e._rate : r._rate;
                            if ("loaded" !== r._state || r._playLock) return r._queue.push({
                                event: "rate",
                                action: function() {
                                    r.rate.apply(r, i)
                                }
                            }), r;
                            typeof n > "u" && (r._rate = t), n = r._getSoundIds(n);
                            for (var a = 0; a < n.length; a++)
                                if (e = r._soundById(n[a])) {
                                    r.playing(n[a]) && (e._rateSeek = r.seek(n[a]), e._playStart = r._webAudio ? o.ctx.currentTime : e._playStart), e._rate = t, r._webAudio && e._node && e._node.bufferSource ? e._node.bufferSource.playbackRate.setValueAtTime(t, o.ctx.currentTime) : e._node && (e._node.playbackRate = t);
                                    var s = r.seek(n[a]),
                                        u = 1e3 * ((r._sprite[e._sprite][0] + r._sprite[e._sprite][1]) / 1e3 - s) / Math.abs(e._rate);
                                    (r._endTimers[n[a]] || !e._paused) && (r._clearTimer(n[a]), r._endTimers[n[a]] = setTimeout(r._ended.bind(r, e), u)), r._emit("rate", e._id)
                                } return r
                        },
                        seek: function() {
                            var e, t, n = this,
                                r = arguments;
                            if (0 === r.length ? n._sounds.length && (t = n._sounds[0]._id) : 1 === r.length ? n._getSoundIds().indexOf(r[0]) >= 0 ? t = parseInt(r[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(r[0])) : 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10)), typeof t > "u") return 0;
                            if ("number" == typeof e && ("loaded" !== n._state || n._playLock)) return n._queue.push({
                                event: "seek",
                                action: function() {
                                    n.seek.apply(n, r)
                                }
                            }), n;
                            var i = n._soundById(t);
                            if (i)
                                if ("number" == typeof e && e >= 0) {
                                    var a = n.playing(t);
                                    a && n.pause(t, !0), i._seek = e, i._ended = !1, n._clearTimer(t), n._webAudio || !i._node || isNaN(i._node.duration) || (i._node.currentTime = e);
                                    var s = function() {
                                        a && n.play(t, !0), n._emit("seek", t)
                                    };
                                    if (a && !n._webAudio) {
                                        var u = function() {
                                            n._playLock ? setTimeout(u, 0) : s()
                                        };
                                        setTimeout(u, 0)
                                    } else s()
                                } else {
                                    if (!n._webAudio) return i._node.currentTime;
                                    var _ = n.playing(t) ? o.ctx.currentTime - i._playStart : 0,
                                        d = i._rateSeek ? i._rateSeek - i._seek : 0;
                                    return i._seek + (d + _ * Math.abs(i._rate))
                                } return n
                        },
                        playing: function(e) {
                            if ("number" == typeof e) {
                                var t = this._soundById(e);
                                return !!t && !t._paused
                            }
                            for (var n = 0; n < this._sounds.length; n++)
                                if (!this._sounds[n]._paused) return !0;
                            return !1
                        },
                        duration: function(e) {
                            var t = this._duration,
                                n = this._soundById(e);
                            return n && (t = this._sprite[n._sprite][1] / 1e3), t
                        },
                        state: function() {
                            return this._state
                        },
                        unload: function() {
                            for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(o._canPlayEvent, t[n]._loadFn, !1), t[n]._node.removeEventListener("ended", t[n]._endFn, !1), o._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                            var r = o._howls.indexOf(e);
                            r >= 0 && o._howls.splice(r, 1);
                            var i = !0;
                            for (n = 0; n < o._howls.length; n++)
                                if (o._howls[n]._src === e._src || e._src.indexOf(o._howls[n]._src) >= 0) {
                                    i = !1;
                                    break
                                } return a && i && delete a[e._src], o.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                        },
                        on: function(e, t, n, o) {
                            var r = this["_on" + e];
                            return "function" == typeof t && r.push(o ? {
                                id: n,
                                fn: t,
                                once: o
                            } : {
                                id: n,
                                fn: t
                            }), this
                        },
                        off: function(e, t, n) {
                            var o = this["_on" + e],
                                r = 0;
                            if ("number" == typeof t && (n = t, t = null), t || n)
                                for (r = 0; r < o.length; r++) {
                                    var i = n === o[r].id;
                                    if (t === o[r].fn && i || !t && i) {
                                        o.splice(r, 1);
                                        break
                                    }
                                } else if (e) this["_on" + e] = [];
                                else {
                                    var a = Object.keys(this);
                                    for (r = 0; r < a.length; r++) 0 === a[r].indexOf("_on") && Array.isArray(this[a[r]]) && (this[a[r]] = [])
                                } return this
                        },
                        once: function(e, t, n) {
                            return this.on(e, t, n, 1), this
                        },
                        _emit: function(e, t, n) {
                            for (var o = this["_on" + e], r = o.length - 1; r >= 0; r--)(!o[r].id || o[r].id === t || "load" === e) && (setTimeout((function(e) {
                                e.call(this, t, n)
                            }).bind(this, o[r].fn), 0), o[r].once && this.off(e, o[r].fn, o[r].id));
                            return this._loadQueue(e), this
                        },
                        _loadQueue: function(e) {
                            if (this._queue.length > 0) {
                                var t = this._queue[0];
                                t.event === e && (this._queue.shift(), this._loadQueue()), e || t.action()
                            }
                            return this
                        },
                        _ended: function(e) {
                            var t = e._sprite;
                            if (!this._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(this._ended.bind(this, e), 100), this;
                            var n = !!(e._loop || this._sprite[t][2]);
                            if (this._emit("end", e._id), !this._webAudio && n && this.stop(e._id, !0).play(e._id), this._webAudio && n) {
                                this._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = o.ctx.currentTime;
                                var r = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                                this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r)
                            }
                            return this._webAudio && !n && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, this._clearTimer(e._id), this._cleanBuffer(e._node), o._autoSuspend()), this._webAudio || n || this.stop(e._id, !0), this
                        },
                        _clearTimer: function(e) {
                            if (this._endTimers[e]) {
                                if ("function" != typeof this._endTimers[e]) clearTimeout(this._endTimers[e]);
                                else {
                                    var t = this._soundById(e);
                                    t && t._node && t._node.removeEventListener("ended", this._endTimers[e], !1)
                                }
                                delete this._endTimers[e]
                            }
                            return this
                        },
                        _soundById: function(e) {
                            for (var t = 0; t < this._sounds.length; t++)
                                if (e === this._sounds[t]._id) return this._sounds[t];
                            return null
                        },
                        _inactiveSound: function() {
                            this._drain();
                            for (var e = 0; e < this._sounds.length; e++)
                                if (this._sounds[e]._ended) return this._sounds[e].reset();
                            return new i(this)
                        },
                        _drain: function() {
                            var e = this._pool,
                                t = 0,
                                n = 0;
                            if (!(this._sounds.length < e)) {
                                for (n = 0; n < this._sounds.length; n++) this._sounds[n]._ended && t++;
                                for (n = this._sounds.length - 1; n >= 0; n--) {
                                    if (t <= e) return;
                                    this._sounds[n]._ended && (this._webAudio && this._sounds[n]._node && this._sounds[n]._node.disconnect(0), this._sounds.splice(n, 1), t--)
                                }
                            }
                        },
                        _getSoundIds: function(e) {
                            if (!(typeof e > "u")) return [e];
                            for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id);
                            return t
                        },
                        _refreshBuffer: function(e) {
                            return e._node.bufferSource = o.ctx.createBufferSource(), e._node.bufferSource.buffer = a[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime), this
                        },
                        _cleanBuffer: function(e) {
                            var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                            if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                                e.bufferSource.buffer = o._scratchBuffer
                            } catch {}
                            return e.bufferSource = null, this
                        },
                        _clearSound: function(e) {
                            /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                        }
                    }, (i = function(e) {
                        this._parent = e, this.init()
                    }).prototype = {
                        init: function() {
                            var e = this._parent;
                            return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, e._sounds.push(this), this.create(), this
                        },
                        create: function() {
                            var e = this._parent,
                                t = o._muted || this._muted || this._parent._muted ? 0 : this._volume;
                            return e._webAudio ? (this._node = typeof o.ctx.createGain > "u" ? o.ctx.createGainNode() : o.ctx.createGain(), this._node.gain.setValueAtTime(t, o.ctx.currentTime), this._node.paused = !0, this._node.connect(o.masterGain)) : o.noAudio || (this._node = o._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(o._canPlayEvent, this._loadFn, !1), this._endFn = this._endListener.bind(this), this._node.addEventListener("ended", this._endFn, !1), this._node.src = e._src, this._node.preload = !0 === e._preload ? "auto" : e._preload, this._node.volume = t * o.volume(), this._node.load()), this
                        },
                        reset: function() {
                            var e = this._parent;
                            return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, this
                        },
                        _errorListener: function() {
                            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorFn, !1)
                        },
                        _loadListener: function() {
                            var e = this._parent;
                            e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                                __default: [0, 1e3 * e._duration]
                            }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(o._canPlayEvent, this._loadFn, !1)
                        },
                        _endListener: function() {
                            var e = this._parent;
                            e._duration === 1 / 0 && (e._duration = Math.ceil(10 * this._node.duration) / 10, e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration), e._ended(this)), this._node.removeEventListener("ended", this._endFn, !1)
                        }
                    }, a = {}, s = function(e) {
                        var t = e._src;
                        if (a[t]) {
                            e._duration = a[t].duration, d(e);
                            return
                        }
                        if (/^data:[^;]+;base64,/.test(t)) {
                            for (var n = atob(t.split(",")[1]), o = new Uint8Array(n.length), r = 0; r < n.length; ++r) o[r] = n.charCodeAt(r);
                            _(o.buffer, e)
                        } else {
                            var i = new XMLHttpRequest;
                            i.open(e._xhr.method, t, !0), i.withCredentials = e._xhr.withCredentials, i.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(t) {
                                i.setRequestHeader(t, e._xhr.headers[t])
                            }), i.onload = function() {
                                var t = (i.status + "")[0];
                                "0" !== t && "2" !== t && "3" !== t ? e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".") : _(i.response, e)
                            }, i.onerror = function() {
                                e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete a[t], e.load())
                            }, u(i)
                        }
                    }, u = function(e) {
                        try {
                            e.send()
                        } catch {
                            e.onerror()
                        }
                    }, _ = function(e, t) {
                        var n = function() {
                                t._emit("loaderror", null, "Decoding audio data failed.")
                            },
                            r = function(e) {
                                e && t._sounds.length > 0 ? (a[t._src] = e, d(t, e)) : n()
                            };
                        "u" > typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(e).then(r).catch(n) : o.ctx.decodeAudioData(e, r, n)
                    }, d = function(e, t) {
                        t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                    }, l = function() {
                        if (o.usingWebAudio) {
                            try {
                                "u" > typeof AudioContext ? o.ctx = new AudioContext : "u" > typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
                            } catch {
                                o.usingWebAudio = !1
                            }
                            o.ctx || (o.usingWebAudio = !1);
                            var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
                                t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                n = t ? parseInt(t[1], 10) : null;
                            if (e && n && n < 9) {
                                var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                                o._navigator && !r && (o.usingWebAudio = !1)
                            }
                            o.usingWebAudio && (o.masterGain = typeof o.ctx.createGain > "u" ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup()
                        }
                    }, "function" == typeof define && define.amd && define([], function() {
                        return {
                            Howler: o,
                            Howl: r
                        }
                    }), "u" > typeof e && (e.Howler = o, e.Howl = r), "u" > typeof n.g ? (n.g.HowlerGlobal = t, n.g.Howler = o, n.g.Howl = r, n.g.Sound = i) : "u" > typeof window && (window.HowlerGlobal = t, window.Howler = o, window.Howl = r, window.Sound = i), HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
                        if (!this.ctx || !this.ctx.listener) return this;
                        for (var t = this._howls.length - 1; t >= 0; t--) this._howls[t].stereo(e);
                        return this
                    }, HowlerGlobal.prototype.pos = function(e, t, n) {
                        return this.ctx && this.ctx.listener ? (t = "number" != typeof t ? this._pos[1] : t, n = "number" != typeof n ? this._pos[2] : n, "number" != typeof e) ? this._pos : (this._pos = [e, t, n], "u" > typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, .1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, .1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this) : this
                    }, HowlerGlobal.prototype.orientation = function(e, t, n, o, r, i) {
                        if (!this.ctx || !this.ctx.listener) return this;
                        var a = this._orientation;
                        return (t = "number" != typeof t ? a[1] : t, n = "number" != typeof n ? a[2] : n, o = "number" != typeof o ? a[3] : o, r = "number" != typeof r ? a[4] : r, i = "number" != typeof i ? a[5] : i, "number" != typeof e) ? a : (this._orientation = [e, t, n, o, r, i], "u" > typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(e, t, n, o, r, i), this)
                    }, Howl.prototype.init = (c = Howl.prototype.init, function(e) {
                        return this._orientation = e.orientation || [1, 0, 0], this._stereo = e.stereo || null, this._pos = e.pos || null, this._pannerAttr = {
                            coneInnerAngle: "u" > typeof e.coneInnerAngle ? e.coneInnerAngle : 360,
                            coneOuterAngle: "u" > typeof e.coneOuterAngle ? e.coneOuterAngle : 360,
                            coneOuterGain: "u" > typeof e.coneOuterGain ? e.coneOuterGain : 0,
                            distanceModel: "u" > typeof e.distanceModel ? e.distanceModel : "inverse",
                            maxDistance: "u" > typeof e.maxDistance ? e.maxDistance : 1e4,
                            panningModel: "u" > typeof e.panningModel ? e.panningModel : "HRTF",
                            refDistance: "u" > typeof e.refDistance ? e.refDistance : 1,
                            rolloffFactor: "u" > typeof e.rolloffFactor ? e.rolloffFactor : 1
                        }, this._onstereo = e.onstereo ? [{
                            fn: e.onstereo
                        }] : [], this._onpos = e.onpos ? [{
                            fn: e.onpos
                        }] : [], this._onorientation = e.onorientation ? [{
                            fn: e.onorientation
                        }] : [], c.call(this, e)
                    }), Howl.prototype.stereo = function(e, t) {
                        var n = this;
                        if (!n._webAudio) return n;
                        if ("loaded" !== n._state) return n._queue.push({
                            event: "stereo",
                            action: function() {
                                n.stereo(e, t)
                            }
                        }), n;
                        var o = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
                        if (typeof t > "u")
                            if ("number" != typeof e) return n._stereo;
                            else n._stereo = e, n._pos = [e, 0, 0];
                        for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
                            var a = n._soundById(r[i]);
                            if (a)
                                if ("number" != typeof e) return a._stereo;
                                else a._stereo = e, a._pos = [e, 0, 0], a._node && (a._pannerAttr.panningModel = "equalpower", a._panner && a._panner.pan || h(a, o), "spatial" === o ? "u" > typeof a._panner.positionX ? (a._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), a._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), a._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : a._panner.setPosition(e, 0, 0) : a._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), n._emit("stereo", a._id)
                        }
                        return n
                    }, Howl.prototype.pos = function(e, t, n, o) {
                        var r = this;
                        if (!r._webAudio) return r;
                        if ("loaded" !== r._state) return r._queue.push({
                            event: "pos",
                            action: function() {
                                r.pos(e, t, n, o)
                            }
                        }), r;
                        if (t = "number" != typeof t ? 0 : t, n = "number" != typeof n ? -.5 : n, typeof o > "u")
                            if ("number" != typeof e) return r._pos;
                            else r._pos = [e, t, n];
                        for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
                            var s = r._soundById(i[a]);
                            if (s)
                                if ("number" != typeof e) return s._pos;
                                else s._pos = [e, t, n], s._node && ((!s._panner || s._panner.pan) && h(s, "spatial"), "u" > typeof s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(n, Howler.ctx.currentTime)) : s._panner.setPosition(e, t, n)), r._emit("pos", s._id)
                        }
                        return r
                    }, Howl.prototype.orientation = function(e, t, n, o) {
                        var r = this;
                        if (!r._webAudio) return r;
                        if ("loaded" !== r._state) return r._queue.push({
                            event: "orientation",
                            action: function() {
                                r.orientation(e, t, n, o)
                            }
                        }), r;
                        if (t = "number" != typeof t ? r._orientation[1] : t, n = "number" != typeof n ? r._orientation[2] : n, typeof o > "u")
                            if ("number" != typeof e) return r._orientation;
                            else r._orientation = [e, t, n];
                        for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
                            var s = r._soundById(i[a]);
                            if (s)
                                if ("number" != typeof e) return s._orientation;
                                else s._orientation = [e, t, n], s._node && (s._panner || (s._pos || (s._pos = r._pos || [0, 0, -.5]), h(s, "spatial")), "u" > typeof s._panner.orientationX ? (s._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), s._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.orientationZ.setValueAtTime(n, Howler.ctx.currentTime)) : s._panner.setOrientation(e, t, n)), r._emit("orientation", s._id)
                        }
                        return r
                    }, Howl.prototype.pannerAttr = function() {
                        var e, t, n, o = arguments;
                        if (!this._webAudio) return this;
                        if (0 === o.length) return this._pannerAttr;
                        if (1 === o.length)
                            if ("object" != typeof o[0]) return (n = this._soundById(parseInt(o[0], 10))) ? n._pannerAttr : this._pannerAttr;
                            else e = o[0], typeof t > "u" && (e.pannerAttr || (e.pannerAttr = {
                                coneInnerAngle: e.coneInnerAngle,
                                coneOuterAngle: e.coneOuterAngle,
                                coneOuterGain: e.coneOuterGain,
                                distanceModel: e.distanceModel,
                                maxDistance: e.maxDistance,
                                refDistance: e.refDistance,
                                rolloffFactor: e.rolloffFactor,
                                panningModel: e.panningModel
                            }), this._pannerAttr = {
                                coneInnerAngle: "u" > typeof e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : this._coneInnerAngle,
                                coneOuterAngle: "u" > typeof e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : this._coneOuterAngle,
                                coneOuterGain: "u" > typeof e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : this._coneOuterGain,
                                distanceModel: "u" > typeof e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : this._distanceModel,
                                maxDistance: "u" > typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : this._maxDistance,
                                refDistance: "u" > typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : this._refDistance,
                                rolloffFactor: "u" > typeof e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : this._rolloffFactor,
                                panningModel: "u" > typeof e.pannerAttr.panningModel ? e.pannerAttr.panningModel : this._panningModel
                            });
                        else 2 === o.length && (e = o[0], t = parseInt(o[1], 10));
                        for (var r = this._getSoundIds(t), i = 0; i < r.length; i++)
                            if (n = this._soundById(r[i])) {
                                var a = n._pannerAttr;
                                a = {
                                    coneInnerAngle: "u" > typeof e.coneInnerAngle ? e.coneInnerAngle : a.coneInnerAngle,
                                    coneOuterAngle: "u" > typeof e.coneOuterAngle ? e.coneOuterAngle : a.coneOuterAngle,
                                    coneOuterGain: "u" > typeof e.coneOuterGain ? e.coneOuterGain : a.coneOuterGain,
                                    distanceModel: "u" > typeof e.distanceModel ? e.distanceModel : a.distanceModel,
                                    maxDistance: "u" > typeof e.maxDistance ? e.maxDistance : a.maxDistance,
                                    refDistance: "u" > typeof e.refDistance ? e.refDistance : a.refDistance,
                                    rolloffFactor: "u" > typeof e.rolloffFactor ? e.rolloffFactor : a.rolloffFactor,
                                    panningModel: "u" > typeof e.panningModel ? e.panningModel : a.panningModel
                                };
                                var s = n._panner;
                                s ? (s.coneInnerAngle = a.coneInnerAngle, s.coneOuterAngle = a.coneOuterAngle, s.coneOuterGain = a.coneOuterGain, s.distanceModel = a.distanceModel, s.maxDistance = a.maxDistance, s.refDistance = a.refDistance, s.rolloffFactor = a.rolloffFactor, s.panningModel = a.panningModel) : (n._pos || (n._pos = this._pos || [0, 0, -.5]), h(n, "spatial"))
                            } return this
                    }, Sound.prototype.init = (p = Sound.prototype.init, function() {
                        var e = this._parent;
                        this._orientation = e._orientation, this._stereo = e._stereo, this._pos = e._pos, this._pannerAttr = e._pannerAttr, p.call(this), this._stereo ? e.stereo(this._stereo) : this._pos && e.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
                    }), Sound.prototype.reset = (f = Sound.prototype.reset, function() {
                        var e = this._parent;
                        return this._orientation = e._orientation, this._stereo = e._stereo, this._pos = e._pos, this._pannerAttr = e._pannerAttr, this._stereo ? e.stereo(this._stereo) : this._pos ? e.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, e._refreshBuffer(this)), f.call(this)
                    }), h = function(e, t) {
                        "spatial" === (t = t || "spatial") ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, "u" > typeof e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), "u" > typeof e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
                    }
                }),
                a = (0, r.b)(i(), 1),
                s = class {
                    play() {
                        return this._howl.play()
                    }
                    pause() {
                        return this._howl.pause()
                    }
                    playing() {
                        return this._howl.playing()
                    }
                    rate() {
                        return this._howl.rate()
                    }
                    seek() {
                        return this._howl.seek()
                    }
                    setVolume() {
                        return this._howl.volume()
                    }
                    unload() {
                        this._howl.unload()
                    }
                    constructor({
                        src: e
                    }) {
                        (0, o._)(this, "_howl", void 0), this._howl = new a.Howl({
                            src: e
                        })
                    }
                }
        }
    }
]);