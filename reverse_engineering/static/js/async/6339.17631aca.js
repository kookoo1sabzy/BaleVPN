try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1698f6eb-783d-4026-acb9-32dfdd35611d", e._sentryDebugIdIdentifier = "sentry-dbid-1698f6eb-783d-4026-acb9-32dfdd35611d")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6339"], {
        24994: function(e, a, t) {
            t.d(a, {
                g: () => n
            });
            var i = t(58191),
                d = t.n(i);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, d().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Speed0_5X-icon"
                }, e), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M12 20.25H5.325a4.085 4.085 0 0 1-4.075-4.075V11a.75.75 0 0 1 1.5 0v5.175a2.585 2.585 0 0 0 2.575 2.575H12a.75.75 0 0 1 0 1.5",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M18.684 20.25H11.5a.75.75 0 0 1 0-1.5h7.183a2.57 2.57 0 0 0 2.567-2.57V11a.75.75 0 0 1 1.5 0v5.18a4.07 4.07 0 0 1-4.066 4.07M12 3.75H5.325A4.085 4.085 0 0 0 1.25 7.825V13a.75.75 0 0 0 1.5 0V7.825A2.585 2.585 0 0 1 5.325 5.25H12a.75.75 0 0 0 0-1.5",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M18.683 3.75H11.5a.75.75 0 0 0 0 1.5h7.183a2.57 2.57 0 0 1 2.567 2.57V13a.75.75 0 0 0 1.5 0V7.82a4.07 4.07 0 0 0-4.067-4.07",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    d: "M9.173 14.776a.691.691 0 0 1-.496-.2.69.69 0 0 1-.2-.496c0-.192.066-.355.2-.488a.691.691 0 0 1 .496-.2c.192 0 .354.067.488.2.133.133.2.296.2.488a.69.69 0 0 1-.2.496.664.664 0 0 1-.488.2M12.505 14.856c-.208 0-.416-.03-.624-.088a1.922 1.922 0 0 1-.568-.272 1.98 1.98 0 0 1-.464-.456c-.053-.077-.1-.16-.142-.25-.108-.227.03-.482.264-.573.285-.11.59.075.776.317a.91.91 0 0 0 .75.354.939.939 0 0 0 .352-.064.908.908 0 0 0 .288-.192.774.774 0 0 0 .192-.28.925.925 0 0 0 .072-.368.848.848 0 0 0-.072-.352.809.809 0 0 0-.184-.288.76.76 0 0 0-.288-.192.868.868 0 0 0-.36-.072.857.857 0 0 0-.48.134c-.192.114-.428.178-.632.085l-.34-.156a.5.5 0 0 1-.29-.513l.226-1.932a.5.5 0 0 1 .497-.442h2.175a.46.46 0 1 1 0 .92h-1.578a.2.2 0 0 0-.197.168l-.174 1.07a.046.046 0 0 0 .075.043c.103-.084.228-.157.374-.217.155-.064.341-.096.56-.096.23 0 .448.045.656.136.208.085.392.208.552.368a1.89 1.89 0 0 1 .528 1.336c0 .272-.048.523-.144.752-.096.23-.232.427-.408.592-.17.165-.376.296-.616.392-.235.09-.493.136-.776.136M16.776 11.843a.2.2 0 0 0 0-.214l-1.182-1.861A.5.5 0 0 1 16.016 9h.142a.5.5 0 0 1 .43.245l.95 1.6a.056.056 0 0 0 .097 0l.95-1.6a.5.5 0 0 1 .43-.245h.142a.5.5 0 0 1 .422.768l-1.18 1.861a.2.2 0 0 0-.001.214l1.331 2.119a.5.5 0 0 1-.423.766h-.157a.5.5 0 0 1-.428-.241l-1.086-1.796a.057.057 0 0 0-.097 0l-1.085 1.796a.5.5 0 0 1-.428.241h-.158a.5.5 0 0 1-.423-.766l1.332-2.12M6 15c-.638 0-1.13-.256-1.478-.768C4.174 13.714 4 12.968 4 11.996c0-.973.174-1.715.522-2.228C4.87 9.256 5.362 9 6 9s1.13.259 1.478.777c.348.512.522 1.255.522 2.227 0 .973-.174 1.715-.522 2.228C7.13 14.744 6.638 15 6 15m0-1.088c.274 0 .487-.164.64-.492.153-.334.23-.803.23-1.407s-.077-1.076-.23-1.416c-.153-.345-.366-.518-.64-.518s-.487.167-.64.5c-.153.329-.23.795-.23 1.4 0 .604.077 1.079.23 1.424.153.34.366.51.64.51"
                }))
            }
        },
        67797: function(e, a, t) {
            t.d(a, {
                T: () => n
            });
            var i = t(58191),
                d = t.n(i);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, d().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Speed1_5X-icon"
                }, e), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M11.5 3.75H5.325A4.085 4.085 0 0 0 1.25 7.825v8.35a4.085 4.085 0 0 0 4.075 4.075h13.359a4.07 4.07 0 0 0 4.066-4.07V7.82a4.07 4.07 0 0 0-4.067-4.07H11.5m0 1.5H5.325A2.585 2.585 0 0 0 2.75 7.825v8.35a2.585 2.585 0 0 0 2.575 2.575h13.358a2.57 2.57 0 0 0 2.567-2.57V7.82a2.57 2.57 0 0 0-2.567-2.57H11.5m-3.518 9.226.003.003a.79.79 0 0 0 .565.228.764.764 0 0 0 .56-.23v-.001a.79.79 0 0 0 .228-.566.764.764 0 0 0-.229-.558.764.764 0 0 0-.559-.23.79.79 0 0 0-.565.228l-.001.002a.764.764 0 0 0-.23.559.79.79 0 0 0 .228.565m3.249.218a2.388 2.388 0 0 0 1.464-.05h.001c.25-.101.467-.238.648-.413.186-.175.33-.384.431-.626.102-.243.152-.507.152-.79a1.99 1.99 0 0 0-.557-1.407c-.17-.17-.364-.3-.584-.39a1.723 1.723 0 0 0-.695-.144c-.228 0-.428.034-.598.104a1.702 1.702 0 0 0-.292.153l.153-.94a.1.1 0 0 1 .099-.085h1.578a.56.56 0 0 0 0-1.12h-2.175a.6.6 0 0 0-.596.53l-.226 1.933a.6.6 0 0 0 .346.616l.341.155c.248.113.521.031.725-.089a.981.981 0 0 1 .037-.02l.002-.002a.758.758 0 0 1 .39-.098c.121 0 .227.021.319.063l.005.002a.66.66 0 0 1 .25.167l.003.002c.07.07.123.153.161.253l.003.006a.75.75 0 0 1 .063.31c0 .121-.022.23-.064.33l-.001.001a.674.674 0 0 1-.168.245l-.002.002a.808.808 0 0 1-.255.17.841.841 0 0 1-.314.056.81.81 0 0 1-.67-.315 1.084 1.084 0 0 0-.389-.32.633.633 0 0 0-.503-.029c-.275.107-.457.418-.319.71.044.093.094.181.15.263l.002.003c.14.19.302.35.488.479.184.128.384.224.597.285m2.452-1.128c-.096.23-.232.427-.408.592-.17.166-.376.297-.616.393a2.292 2.292 0 0 1-1.4.048 1.926 1.926 0 0 1-.002-.003 2.288 2.288 0 0 0 1.4-.048c.24-.096.445-.226.616-.392.175-.165.312-.363.408-.592.096-.23.144-.48.144-.752a1.89 1.89 0 0 0-.528-1.336l.002.002a1.89 1.89 0 0 1 .528 1.336c0 .272-.048.523-.144.752m-2.655-.311c.034.034.066.07.095.107a1.067 1.067 0 0 0 .002.003 1.09 1.09 0 0 0-.097-.11m.054-2.01a.046.046 0 0 0 .011.039.046.046 0 0 1-.014-.042l.174-1.07a.2.2 0 0 1 .198-.168h1.577a.46.46 0 0 0 .325-.786.458.458 0 0 1-.322.789h-1.578a.2.2 0 0 0-.197.167l-.174 1.07m-.66.729a.5.5 0 0 1-.002-.003l.34.156c.204.093.44.03.633-.085l.04-.022a.857.857 0 0 1 .44-.112c.133 0 .253.024.36.072a.761.761 0 0 1 .002.002.867.867 0 0 0-.36-.071.857.857 0 0 0-.48.134c-.192.114-.429.177-.632.084l-.341-.155m-4.77-1.505v3.59a.6.6 0 0 0 .6.6H6.3a.6.6 0 0 0 .6-.6V9.586a.6.6 0 0 0-.6-.6h-.181a.6.6 0 0 0-.254.057l-1.074.502a.593.593 0 0 0 .482 1.084l.379-.16m9.235-.817 1.181 1.861a.1.1 0 0 1 0 .107l-1.33 2.12a.6.6 0 0 0 .507.918h.158a.6.6 0 0 0 .513-.29l1.049-1.733 1.048 1.734a.6.6 0 0 0 .514.29h.157a.6.6 0 0 0 .508-.92L17.86 11.62a.1.1 0 0 1 0-.107l1.182-1.861a.6.6 0 0 0-.507-.922h-.142a.6.6 0 0 0-.516.294l-.912 1.537-.913-1.537a.6.6 0 0 0-.516-.294h-.142a.6.6 0 0 0-.507.922m.007 4.762c.088.088.21.145.351.145h.158a.5.5 0 0 0 .428-.242l1.085-1.795a.057.057 0 0 1 .087-.012.057.057 0 0 0-.09.01l-1.085 1.795a.5.5 0 0 1-.428.241h-.157a.492.492 0 0 1-.35-.142m3.28-.001a.5.5 0 0 0 .353.146h.157a.5.5 0 0 0 .423-.766l-1.331-2.12a.2.2 0 0 1 0-.213l1.181-1.862a.499.499 0 0 0-.072-.626c.156.156.205.411.07.624l-1.181 1.861a.2.2 0 0 0 0 .214l1.33 2.12a.5.5 0 0 1-.422.765h-.158a.5.5 0 0 1-.35-.143m-1.25-3.728a.053.053 0 0 1-.008-.01l-.95-1.6a.5.5 0 0 0-.002-.002l.95 1.6a.052.052 0 0 0 .01.012M5.899 14.413c.09.09.215.146.353.146H6.3a.5.5 0 0 0 .5-.5V9.586a.498.498 0 0 0-.003-.002v4.472a.5.5 0 0 1-.5.5H6.25a.499.499 0 0 1-.35-.143m-1.205-3.982c.138.138.35.186.54.106l.379-.16a.1.1 0 0 1 .108.02.1.1 0 0 0-.11-.022l-.38.16a.493.493 0 0 1-.537-.104m3.856 4.176a.691.691 0 0 1-.496-.2v-.002a.69.69 0 0 0 .494.2.664.664 0 0 0 .488-.2.69.69 0 0 0 .2-.497.664.664 0 0 0-.2-.488l.002.002c.134.134.2.297.2.489a.69.69 0 0 1-.2.495.664.664 0 0 1-.488.2",
                    clipRule: "evenodd"
                }))
            }
        },
        93462: function(e, a, t) {
            t.d(a, {
                x: () => n
            });
            var i = t(58191),
                d = t.n(i);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, d().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Speed1X-icon"
                }, e), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M12 20.25H5.325a4.085 4.085 0 0 1-4.075-4.075V11a.75.75 0 0 1 1.5 0v5.175a2.585 2.585 0 0 0 2.575 2.575H12a.75.75 0 0 1 0 1.5",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M18.684 20.25H11.5a.75.75 0 0 1 0-1.5h7.183a2.57 2.57 0 0 0 2.567-2.57V11a.75.75 0 0 1 1.5 0v5.18a4.07 4.07 0 0 1-4.066 4.07M12 3.75H5.325A4.085 4.085 0 0 0 1.25 7.825V13a.75.75 0 0 0 1.5 0V7.825A2.585 2.585 0 0 1 5.325 5.25H12a.75.75 0 0 0 0-1.5",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M18.683 3.75H11.5a.75.75 0 0 0 0 1.5h7.183a2.57 2.57 0 0 1 2.567 2.57V13a.75.75 0 0 0 1.5 0V7.82a4.07 4.07 0 0 0-4.067-4.07",
                    clipRule: "evenodd"
                }), d().createElement("path", {
                    fill: t,
                    d: "M9.703 14.73a.512.512 0 0 1-.5-.524v-3.758c0-.075-.073-.126-.14-.097l-.378.168a.485.485 0 0 1-.644-.271.527.527 0 0 1 .243-.673l1.074-.526A.481.481 0 0 1 9.57 9h.18c.277 0 .5.234.5.524v4.682c0 .29-.223.524-.5.524h-.047M13.409 11.843a.2.2 0 0 0 0-.214l-1.182-1.861A.5.5 0 0 1 12.65 9h.143a.5.5 0 0 1 .43.245l.95 1.6a.056.056 0 0 0 .096 0l.95-1.6a.5.5 0 0 1 .43-.245h.143a.5.5 0 0 1 .422.768l-1.181 1.861a.2.2 0 0 0 0 .214l1.33 2.119a.5.5 0 0 1-.423.766h-.157a.5.5 0 0 1-.428-.241L14.27 12.69a.057.057 0 0 0-.097 0l-1.086 1.796a.5.5 0 0 1-.428.241h-.157a.5.5 0 0 1-.424-.766l1.332-2.12"
                }))
            }
        },
        86569: function(e, a, t) {
            t.d(a, {
                A: () => n
            });
            var i = t(58191),
                d = t.n(i);
            let n = e => {
                var a;
                let t = null != (a = e.color) ? a : "#5E6C84";
                return e.bgColor, e.secondColor, d().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "Speed2X-icon"
                }, e), d().createElement("path", {
                    fill: t,
                    stroke: t,
                    strokeWidth: .1,
                    d: "m9.484 11.463-.001.002c-.064.08-.138.17-.223.27-.042.048-.103.114-.182.198l-.271.272-.328.328-.344.344c-.224.223-.465.462-.723.716a.55.55 0 0 0-.164.393v.242c0 .304.246.55.55.55h2.68a.51.51 0 1 0 0-1.02H8.764l.577-.57.688-.689c.243-.248.449-.515.616-.802.175-.295.263-.619.263-.969 0-.23-.044-.445-.132-.644a1.561 1.561 0 0 0-.372-.529 1.671 1.671 0 0 0-.585-.346 2.149 2.149 0 0 0-.769-.131c-.261 0-.5.04-.714.123a1.859 1.859 0 0 0-.541.304 1.62 1.62 0 0 0-.4.452c-.155.252-.004.547.253.653l.038.016c.148.06.303.046.445-.009.142-.054.274-.149.378-.254h.001c.122-.127.294-.193.524-.193.23 0 .406.064.533.186h.001a.55.55 0 0 1 .192.42.94.94 0 0 1-.03.243c-.02.07-.05.144-.092.222-.036.07-.086.145-.154.222Zm4.552 1.254-.043-.026.043.026a.007.007 0 0 1 .005-.003c.003 0 .005.001.006.003l1.086 1.796a.55.55 0 0 0 .47.265h.158a.55.55 0 0 0 .465-.843l-1.331-2.119a.15.15 0 0 1 0-.16l1.181-1.861a.55.55 0 0 0-.464-.845h-.142a.55.55 0 0 0-.473.27l-.95 1.599a.006.006 0 0 1-.011 0l-.95-1.6a.55.55 0 0 0-.473-.269h-.142a.55.55 0 0 0-.465.845l1.181 1.861a.15.15 0 0 1 0 .16l-1.33 2.12a.55.55 0 0 0 .465.842h.157a.55.55 0 0 0 .471-.265l1.086-1.796Z"
                }), d().createElement("path", {
                    fill: t,
                    fillRule: "evenodd",
                    d: "M11.5 3.75H5.325A4.085 4.085 0 0 0 1.25 7.825v8.35a4.085 4.085 0 0 0 4.075 4.075h13.359a4.07 4.07 0 0 0 4.066-4.07V7.82a4.07 4.07 0 0 0-4.067-4.07H11.5m0 1.5H5.325A2.585 2.585 0 0 0 2.75 7.825v8.35a2.585 2.585 0 0 0 2.575 2.575h13.358a2.57 2.57 0 0 0 2.567-2.57V7.82a2.57 2.57 0 0 0-2.567-2.57H11.5",
                    clipRule: "evenodd"
                }))
            }
        },
        95853: function(e, a, t) {
            t.d(a, {
                v: () => x
            });
            var i, d = t(51116),
                n = t(45831),
                o = t(33222),
                s = t(58191),
                r = t.n(s),
                l = t(87629),
                c = t(2077);
            t(34644);
            var u = t(22169),
                h = t(80073),
                p = t(27767),
                E = t(94823);
            class y {
                static createAudioInstance() {
                    return new Audio
                }
                getAudio() {
                    return this._audio
                }
                setAudio(e) {
                    this._audio = e
                }
                async setUrl(e, a, t, i, d) {
                    let n, o = (0, E.to)(),
                        s = i;
                    if (!i) {
                        try {
                            n = await o.fetchReadBackOff(e, {
                                mode: "cors",
                                headers: {
                                    "Content-Type": "application/octet-stream"
                                }
                            })
                        } catch (e) {
                            h.j.error("Player Failed to setUrl", e);
                            return
                        }
                        s = await n.blob(), d && d(s)
                    }
                    if (s)
                        if (this.decoder && a.includes("audio/ogg")) {
                            let e = await this.decoder.decode(s);
                            this._audio.src = e, this._audio.preload = "none"
                        } else {
                            let e = URL.createObjectURL(s);
                            this._audio.src = e
                        }
                }
                async play() {
                    return this._audio.play().catch(e => h.j.error("Player play", e))
                }
                load() {
                    return this._audio.load()
                }
                pause() {
                    this._audio.pause()
                }
                seek(e) {
                    this._audio.currentTime = e
                }
                reset() {
                    this._audio.currentTime = 0, this._audio.pause(), this._audio.src = ""
                }
                changePlaybackRate(e) {
                    this._audio.playbackRate = e
                }
                get currentTime() {
                    return this._audio.currentTime
                }
                set currentTime(e) {
                    this._audio.currentTime = e
                }
                get playbackRate() {
                    return this._audio.playbackRate
                }
                set playbackRate(e) {
                    this._audio.playbackRate = e
                }
                get paused() {
                    return this._audio.paused
                }
                get duration() {
                    return this._audio.duration
                }
                constructor(e) {
                    (0, d._)(this, "decoder", void 0), (0, d._)(this, "_audio", void 0), (0, d._)(this, "addEventListener", void 0), this.decoder = e, this.addEventListener = (e, a, t) => {
                        this._audio.addEventListener(e, a)
                    }, this._audio = y.createAudioInstance()
                }
            }
            var g = t(40831),
                m = t(12917),
                _ = t(80412),
                f = t(27192),
                P = t(88228),
                v = t(52535),
                T = t(38221),
                b = t(45488),
                S = t(89855),
                A = t(18520),
                R = t(44334);
            let k = new Map,
                w = new Map,
                C = r().createContext({
                    ...g.E1,
                    play: function(e) {
                        throw Error("Function not implemented.")
                    },
                    resume: function() {
                        throw Error("Function not implemented.")
                    },
                    pause: function(e) {
                        throw Error("Function not implemented.")
                    },
                    seek: function(e, a) {
                        throw Error("Function not implemented.")
                    },
                    updateTime: function(e, a) {
                        throw Error("Function not implemented.")
                    },
                    changePlaybackRate(e) {
                        throw Error("Function not implemented.")
                    },
                    reset: function() {
                        throw Error("Function not implemented.")
                    },
                    cancel: function(e) {
                        throw Error("Function not implemented.")
                    },
                    preLoad: function(e, a) {
                        throw Error("Function not implemented.")
                    },
                    load: function(e) {
                        throw Error("Function not implemented.")
                    }
                });
            class I extends(i = r().Component) {
                dispatch(e) {
                    this.setState(a => (0, g.XA)(a, e))
                }
                async getUrl(e) {
                    return new Promise((a, t) => {
                        var i;
                        (0, A.s)((null == (i = this.context) ? void 0 : i.webSdk.core.filesModule.loadFileUrl(e.fileLocation).pipe((0, P.w)(5e3))) ?? R.w).then(e => {
                            a(e)
                        }).catch(e => t(e))
                    })
                }
                async loadAudio(e) {
                    this.dispatch(g.Gk.changeStatus({
                        id: e.id,
                        status: "Loading"
                    }));
                    let a = this.state.audioes[e.id],
                        t = null == a ? void 0 : a.url;
                    if (!t) try {
                        let a = await this.getUrl(e);
                        t = (0, m.c$)(a.url, e.name)
                    } catch {
                        this.logger.debug("Load Url failed", e.id), this.dispatch(g.Gk.changeStatus({
                            id: e.id,
                            status: "Unknown"
                        }));
                        return
                    }
                    await this.loaderPromise.catch(() => {
                        f.oR.info((0, n.Y)(v.sA, {
                            id: "messagesError.cannot_process_audio"
                        }))
                    }), t && this.setLoadedUrl(t, e)
                }
                componentDidUpdate(e) {
                    if (e.currentPeer !== this.props.currentPeer) {
                        let e = (0, g.$9)(this.state);
                        e ? k.forEach((a, t) => {
                            if (t === e.id) return;
                            let i = this.state.audioes[t];
                            (null == i ? void 0 : i.status) === "Playing" && ((0, T.wd)("Audio: something other than current audio is playing"), a.pause(), a.seek(0)), (0, b.jA)(a.getAudio()) && (null == i ? void 0 : i.status) !== "Playing" && ((0, T.wd)("Audio: audio is playing but its status is not playing"), a.pause(), a.seek(0)), k.delete(t)
                        }) : k.clear(), this.dispatch(g.Gk.resetAudios())
                    }
                }
                render() {
                    return (0, n.Y)(C.Provider, {
                        value: {
                            ...this.state,
                            play: this.play,
                            resume: this.resume,
                            pause: this.pause,
                            load: this.load,
                            seek: this.seek,
                            updateTime: this.updateTime,
                            changePlaybackRate: this.setPlaybackSpeed,
                            reset: this.reset,
                            cancel: this.cancel,
                            preLoad: this.preLoad
                        },
                        "data-sentry-element": "LegacyPlayerContext.Provider",
                        "data-sentry-component": "PlayerContainerFC",
                        "data-sentry-source-file": "AudioPlayer.new.tsx",
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), (0, d._)(this, "context", void 0), (0, d._)(this, "player", void 0), (0, d._)(this, "loaderPromise", void 0), (0, d._)(this, "isSupportOpus", void 0), (0, d._)(this, "isSafari", void 0), (0, d._)(this, "logger", h.j.getLogger("Player")), (0, d._)(this, "decoder", void 0), (0, d._)(this, "addListenersToPlayer", (e, a) => {
                        e.addEventListener("timeupdate", () => {
                            this.state.isSeeking || this.dispatch(g.Gk.changeCurrentTime({
                                id: a,
                                time: 1e3 * e.currentTime
                            }))
                        }), e.addEventListener("ended", () => {
                            this.dispatch(g.Gk.changeStatus({
                                id: a,
                                status: "Paused"
                            })), this.seek(a, 0)
                        }), e.addEventListener("canplay", () => {
                            this.dispatch(g.Gk.changeStatus({
                                id: a,
                                status: "Ready"
                            }))
                        }), e.addEventListener("playing", () => {
                            this.dispatch(g.Gk.changeStatus({
                                id: a,
                                status: "Playing"
                            }))
                        }), e.addEventListener("waiting", () => {
                            this.dispatch(g.Gk.changeAudioState({
                                id: a,
                                state: {
                                    status: "Loading"
                                }
                            }))
                        }), e.addEventListener("loadedmetadata", () => {
                            let t = this.state.audioes[a];
                            this.dispatch(g.Gk.changeAudioState({
                                id: a,
                                state: {
                                    duration: e.duration === 1 / 0 ? (null == t ? void 0 : t.duration) ?? 0 : 1e3 * e.duration
                                }
                            }))
                        }), e.addEventListener("ratechange", () => {
                            this.dispatch(g.Gk.changePlaybackRate(e.playbackRate))
                        }), e.addEventListener("error", e => {
                            this.logger.warn("Playing Audio Error", e), this.dispatch(g.Gk.changeStatus({
                                id: a,
                                status: "Unknown"
                            })), k.delete(a)
                        })
                    }), (0, d._)(this, "createEnhancedAudio", () => new y(this.decoder)), (0, d._)(this, "setLoadedUrl", (e, a, t) => {
                        let i = this.createEnhancedAudio();
                        this.addListenersToPlayer(i, a.id);
                        let d = e => {
                            a.fileId && this.props.putFileInDB({
                                value: new File([e], a.mimeType),
                                key: a.fileId,
                                type: "AUDIO" === a.playerMode ? o.cM.AUDIO : o.cM.VOICE
                            })
                        };
                        k.set(a.id, i), i.setUrl(e, a.mimeType, 0, t, d).then(() => {
                            var e;
                            let t = null == (e = this.state.audioes[a.id]) ? void 0 : e.currentTime;
                            t && this.seek(a.id, t), this.dispatch(g.Gk.changeStatus({
                                id: a.id,
                                status: "Ready"
                            }))
                        }).catch(() => {
                            k.delete(a.id), this.logger.debug("Load SetUrl failed", a.id), this.dispatch(g.Gk.changeStatus({
                                id: a.id,
                                status: "Unknown"
                            }))
                        })
                    }), (0, d._)(this, "preLoad", (e, a, t, i) => {
                        a && this.dispatch(g.Gk.addAudio({
                            id: e,
                            status: "Ready",
                            file: a,
                            playerMode: t,
                            messageInfo: i
                        }))
                    }), (0, d._)(this, "load", (e, a) => {
                        let t = this.state.audioes[e.id];
                        if (!t) {
                            var i;
                            this.dispatch(g.Gk.addAudio({
                                id: e.id,
                                metadata: {
                                    name: e.name
                                },
                                playerMode: e.playerMode,
                                duration: null == (i = e.ext) ? void 0 : i.duration,
                                messageInfo: a
                            }))
                        }
                        if (k.get(e.id)) {
                            (null == t ? void 0 : t.id) && ((null == t ? void 0 : t.status) == void 0 || "Unknown" == t.status) && this.dispatch(g.Gk.changeStatus({
                                id: t.id,
                                status: "Ready"
                            }));
                            return
                        }
                        t && "Unknown" !== t.status || this.loadAudio(e)
                    }), (0, d._)(this, "play", e => {
                        var a, t;
                        let i = this.state.audioes[e.id];
                        if (i) {
                            if (this.state.currentAudioId !== e.id) {
                                let e = (0, g.$9)(this.state);
                                (null == e ? void 0 : e.status) === "Playing" && (this.logger.debug("Pause current audio"), null == (a = this.player) || a.pause(), this.dispatch(g.Gk.changeStatus({
                                    id: this.state.currentAudioId,
                                    status: "Paused"
                                })))
                            }
                            if (["Paused", "Ready"].includes(i.status)) try {
                                if (this.player = k.get(e.id), !this.player) {
                                    let a = this.state.audioes[e.id];
                                    this.setLoadedUrl(null == a ? void 0 : a.url, e, null == a ? void 0 : a.file), this.player = k.get(e.id)
                                }
                                this.player.changePlaybackRate(this.state.playbackRate), null == (t = this.player) || t.play().catch(e => h.j.error("AudioPlayer.new Play", e)), this.dispatch(g.Gk.changeCurrentAudio({
                                    id: e.id
                                }))
                            } catch (e) {
                                this.logger.error("Play Error", e)
                            }
                        }
                    }), (0, d._)(this, "resume", () => {
                        if (this.state.currentAudioId) {
                            var e;
                            this.logger.debug("Resume", this.state.currentAudioId), this.dispatch(g.Gk.changeStatus({
                                id: this.state.currentAudioId,
                                status: "Playing"
                            })), null == (e = this.player) || e.play().catch(e => h.j.error("AudioPlayer.new Resume", e))
                        }
                    }), (0, d._)(this, "pause", () => {
                        if (this.state.currentAudioId) {
                            var e;
                            this.logger.debug("Pause", this.state.currentAudioId), null == (e = this.player) || e.pause(), this.dispatch(g.Gk.changeStatus({
                                id: this.state.currentAudioId,
                                status: "Paused"
                            }))
                        }
                    }), (0, d._)(this, "updateTime", (e, a) => {
                        this.state.isSeeking || this.dispatch(g.Gk.changeSeekStatus(!0)), e !== this.state.currentAudioId && this.dispatch(g.Gk.changeStatus({
                            id: e,
                            status: "Paused"
                        })), this.dispatch(g.Gk.changeCurrentTime({
                            id: e,
                            time: a
                        }))
                    }), (0, d._)(this, "seek", (e, a) => {
                        if (this.state.isSeeking && this.dispatch(g.Gk.changeSeekStatus(!1)), this.state.currentAudioId === e) {
                            var t;
                            null == (t = this.player) || t.seek(a / 1e3)
                        } else {
                            let t = k.get(e);
                            t && t.seek(a / 1e3), this.dispatch(g.Gk.changeAudioState({
                                id: e,
                                state: {
                                    seeked: a,
                                    status: "Paused"
                                }
                            }))
                        }
                    }), (0, d._)(this, "setPlaybackSpeed", e => {
                        var a;
                        null == (a = this.player) || a.changePlaybackRate(e)
                    }), (0, d._)(this, "reset", () => {
                        var e, a, t;
                        this.logger.debug("Reset", this.state.currentAudioId);
                        let i = (0, g.$9)(this.state);
                        if (!i) {
                            this.dispatch(g.Gk.clearPlayer()), k.clear(), null == (a = this.player) || a.reset();
                            return
                        }
                        this.dispatch(g.Gk.changeAudioState({
                            id: this.state.currentAudioId,
                            state: {
                                currentTime: 0,
                                status: "Paused"
                            }
                        })), "Playing" === i.status && (null == (t = this.player) || t.pause()), null == (e = this.player) || e.seek(0), this.dispatch(g.Gk.clearCurrentAudio())
                    }), (0, d._)(this, "cancel", e => {
                        this.logger.debug("Cancel", e);
                        let a = this.state.audioes[e];
                        if ((null == a ? void 0 : a.status) === "Loading" && (this.dispatch(g.Gk.changeStatus({
                                id: e,
                                status: "Unknown"
                            })), w.has(e))) {
                            var t;
                            null == (t = w.get(e)) || t.then(() => {
                                if (this.logger.debug("Play Promis"), this.state.currentAudioId === e) this.pause();
                                else {
                                    var a;
                                    this.dispatch(g.Gk.changeStatus({
                                        id: e,
                                        status: "Paused"
                                    })), null == (a = k.get(e)) || a.pause()
                                }
                            })
                        }
                    }), this.state = g.E1, this.isSupportOpus = (0, p.cL)(), this.isSafari = p.pz, this.loaderPromise = new Promise((e, a) => {
                        !this.isSupportOpus || this.isSafari ? (0, _.qM)(() => t.e("8326").then(t.bind(t, 11796))).then(a => {
                            if (a) this.decoder = new a.Decoder, e();
                            else throw Error("failed to import promise decoder on IOS")
                        }).catch(e => {
                            h.j.error("Import Promise decoder on ios"), a(e)
                        }) : e()
                    })
                }
            }(0, d._)(I, "contextType", l.k);
            let O = {
                    putFileInDB: S.$6.putFileInDB
                },
                x = (0, c.Ng)(e => ({
                    playList: e.player.playList,
                    currentPeer: (0, u.z)(e),
                    currentPlayListPeer: e.player.peer
                }), O)(I)
        },
        53488: function(e, a, t) {
            t.d(a, {
                G: () => o,
                x: () => s
            });
            var i, d = t(87728),
                n = ((i = n || {}).CALL_LOGS = "callLogs", i);
            let o = {
                    ...d.m4,
                    ...n
                },
                s = e => {
                    if ("callLog" === e.type) return 1;
                    switch (e.id) {
                        case o.EXPEERTYPE_UNKNOWN:
                            return 2;
                        case o.EXPEERTYPE_PRIVATE:
                            return 3;
                        case o.EXPEERTYPE_CHANNEL:
                            return 4;
                        case o.EXPEERTYPE_GROUP:
                            return 5;
                        case o.EXPEERTYPE_BOT:
                            return 6;
                        default:
                            return 0
                    }
                }
        },
        37263: function(e, a, t) {
            t.d(a, {
                Fn: () => p,
                V_: () => y,
                Zp: () => g,
                _6: () => c,
                sn: () => E
            });
            var i = t(87728),
                d = t(53405),
                n = t(87197),
                o = t(53488),
                s = t(7836),
                r = t(2503),
                l = t(26590);
            let c = (0, d.Mz)([n.BW, (e, a) => {
                    var t;
                    return null == a || null == (t = a.createdAt) ? void 0 : t.value
                }], (e, a) => {
                    if (void 0 === e) return (0, n.My)(Number(a ?? "0"));
                    let t = e.split(",").map(e => {
                        switch (e) {
                            case "unknown":
                            default:
                                return {
                                    type: "folder", id: i.m4.EXPEERTYPE_UNKNOWN
                                };
                            case "private":
                                return {
                                    type: "folder", id: i.m4.EXPEERTYPE_PRIVATE
                                };
                            case "channel":
                                return {
                                    type: "folder", id: i.m4.EXPEERTYPE_CHANNEL
                                };
                            case "group":
                                return {
                                    type: "folder", id: i.m4.EXPEERTYPE_GROUP
                                };
                            case "bot":
                                return {
                                    type: "folder", id: i.m4.EXPEERTYPE_BOT
                                }
                        }
                    });
                    return u([{
                        type: "callLog"
                    }, ...t.find(e => e.id === i.m4.EXPEERTYPE_UNKNOWN) ? [] : [{
                        type: "folder",
                        id: i.m4.EXPEERTYPE_UNKNOWN
                    }], ...t])
                }),
                u = e => [{
                    type: "callLog"
                }, {
                    type: "folder",
                    id: i.m4.EXPEERTYPE_UNKNOWN
                }, {
                    type: "folder",
                    id: i.m4.EXPEERTYPE_PRIVATE
                }, {
                    type: "folder",
                    id: i.m4.EXPEERTYPE_CHANNEL
                }, {
                    type: "folder",
                    id: i.m4.EXPEERTYPE_GROUP
                }, {
                    type: "folder",
                    id: i.m4.EXPEERTYPE_BOT
                }].filter(a => "callLog" === a.type || e.find(e => "folder" === e.type && e.id === a.id)),
                h = [10, 0x10f3cb6e0],
                p = e => 0 === e.filter(e => !h.includes(e)).length,
                E = [{
                    type: i.RK.PEERTYPE_GROUP,
                    id: 0x70687116
                }],
                y = e => {
                    let a = E.map(e => (0, s.LP)(e));
                    return e.filter(e => !a.includes(e))
                },
                g = (0, d.Mz)([e => {
                    var a;
                    return null == (a = (0, l.U$)(e).get(o.G.EXPEERTYPE_UNKNOWN)) ? void 0 : a.isFetching
                }, r.lj], (e, a) => p([...a].map(e => {
                    let [a, t] = e;
                    return t.id
                })) && !e)
        },
        41846: function(e, a, t) {
            t.d(a, {
                qI: () => n,
                rk: () => o
            });
            var i = t(33148);
            let d = (0, t(56053).Z0)({
                    name: "AudioListSlice",
                    initialState: {
                        audioInfos: {},
                        playBackSpeed: 1
                    },
                    reducers: {
                        setNextAudio: (e, a) => {
                            e.nextId = a.payload
                        },
                        clearAudioState: e => {},
                        updateAudioInfo: (e, a) => {
                            let t = structuredClone(e.audioInfos[a.payload.id]);
                            e.audioInfos[a.payload.id] = {
                                ...t,
                                ...a.payload.audioInfo
                            }
                        },
                        updateCurrentTime: (e, a) => {
                            a.payload.id in e.audioInfos && (e.audioInfos[a.payload.id].audio.currentTime = a.payload.time)
                        },
                        setAudio: (e, a) => {
                            a.payload.audio.id in e.audioInfos || (e.audioInfos[a.payload.audio.id] = a.payload)
                        },
                        restartCurrentTimes: e => {
                            for (let a in e.audioInfos) e.audioInfos[a].audio.currentTime = 0
                        },
                        setCurrentAudio: (e, a) => {
                            e.currentId = a.payload, e.nextId = void 0
                        },
                        setPlayBackSpeed: (e, a) => {
                            e.playBackSpeed = a.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(i.i.DeleteMessage, (e, a) => {
                            let t = new Set(null == a ? void 0 : a.rids);
                            t.has(e.currentId) ? (e.currentId = void 0, e.nextId = void 0) : t.has(e.nextId) && (e.nextId = void 0)
                        })
                    }
                }),
                n = d.actions,
                o = d.reducer
        },
        40831: function(e, a, t) {
            t.d(a, {
                $9: () => r,
                E1: () => d,
                Gk: () => c,
                XA: () => l
            });
            var i = t(56053);
            let d = {
                    currentAudioId: void 0,
                    prevAudioId: void 0,
                    isSeeking: !1,
                    audioes: {},
                    playbackRate: 1
                },
                n = {
                    currentTime: 0,
                    id: "0",
                    status: "Unknown"
                },
                o = e => ({
                    ...n,
                    ...e
                }),
                s = (0, i.Z0)({
                    initialState: d,
                    name: "Audioes",
                    reducers: {
                        changeCurrentTime(e, a) {
                            e.audioes[a.payload.id] ? e.audioes[a.payload.id].currentTime = a.payload.time : e.audioes[a.payload.id] = o(a.payload)
                        },
                        changeStatus(e, a) {
                            let t = e.audioes[a.payload.id];
                            t ? t.status = a.payload.status : e.audioes[a.payload.id] = o(a.payload)
                        },
                        changeAudioState(e, a) {
                            let t = e.audioes[a.payload.id];
                            e.audioes[a.payload.id] = t ? {
                                ...t,
                                ...a.payload.state
                            } : o({
                                id: a.payload.id,
                                ...a.payload.state
                            })
                        },
                        changeCurrentAudio(e, a) {
                            e.prevAudioId = e.currentAudioId, e.currentAudioId = a.payload.id
                        },
                        addAudio(e, a) {
                            let t = Object.assign({
                                currentTime: 0,
                                status: "Unknown",
                                id: a.payload.id
                            }, a.payload);
                            e.audioes[a.payload.id] = t
                        },
                        changePlaybackRate(e, a) {
                            e.playbackRate = a.payload
                        },
                        clearPlayer: () => d,
                        resetAudios(e) {
                            Object.entries(e.audioes).forEach(a => {
                                let [t, i] = a;
                                t !== e.currentAudioId && (i.currentTime = 0, i.status = "Unknown")
                            })
                        },
                        clearCurrentAudio(e) {
                            e.currentAudioId = void 0, e.prevAudioId = void 0
                        },
                        changeSeekStatus(e, a) {
                            e.isSeeking = a.payload
                        }
                    }
                }),
                r = e => e.currentAudioId ? e.audioes[e.currentAudioId] : void 0,
                l = s.reducer,
                c = s.actions
        },
        34644: function(e, a, t) {
            t.d(a, {
                cV: () => r,
                hR: () => o
            });
            var i, d = t(8831),
                n = t(56053),
                o = ((i = {}).Audio = "AUDIO", i.Voice = "VOICE", i);
            let s = (0, n.Z0)({
                    name: "PlayerSlice",
                    initialState: {
                        peer: void 0,
                        playList: [],
                        mode: "VOICE",
                        isLoading: !1
                    },
                    reducers: {
                        makePlayList(e, a) {
                            a.payload.loadMode === d.iP.LISTLOADMODE_FORWARD ? e.playList.push(...a.payload.audioes) : a.payload.loadMode === d.iP.LISTLOADMODE_BACKWARD ? e.playList.unshift(...a.payload.audioes) : e.playList = a.payload.audioes, e.isLoading = !1, e.mode = a.payload.playerMode
                        },
                        playListLoading(e) {
                            e.isLoading = !0
                        },
                        reset(e) {}
                    },
                    extraReducers: e => {}
                }),
                r = s.reducer;
            s.actions
        },
        82134: function(e, a, t) {
            t.d(a, {
                S$: () => i,
                VF: () => d,
                qV: () => n
            });
            let i = e => ({
                    fileLocation: {
                        fileId: (null == e ? void 0 : e.fileId) ?? "",
                        accessHash: (null == e ? void 0 : e.accessHash) ?? "",
                        fileStorageVersion: 0
                    },
                    fileInfo: {
                        fileName: (null == e ? void 0 : e.name) ?? "",
                        mimeType: (null == e ? void 0 : e.mimeType) ?? "",
                        size: (null == e ? void 0 : e.fileSize) ?? 0
                    }
                }),
                d = (e, a, t, i) => {
                    let d = e / a;
                    return a > e ? {
                        h: i,
                        w: i * d
                    } : {
                        w: t,
                        h: t / d
                    }
                },
                n = e => {
                    if (e.ext) {
                        if (e.ext.documentExPhoto) return {
                            w: e.ext.documentExPhoto.w,
                            h: e.ext.documentExPhoto.h
                        };
                        else if (e.ext.documentExVideo) return {
                            w: e.ext.documentExVideo.w,
                            h: e.ext.documentExVideo.h
                        };
                        else if (e.ext.documentExGif) return {
                            w: e.ext.documentExGif.w,
                            h: e.ext.documentExGif.h
                        }
                    } else if (e.thumb) return {
                        w: e.thumb.w,
                        h: e.thumb.h
                    };
                    return {
                        w: 0,
                        h: 0
                    }
                }
        },
        81811: function(e, a, t) {
            t.d(a, {
                k: () => d,
                x: () => n
            });
            var i = t(87728);
            let d = {
                    [i.m4.EXPEERTYPE_GROUP]: "group",
                    [i.m4.EXPEERTYPE_CHANNEL]: "channel",
                    [i.m4.EXPEERTYPE_PRIVATE]: "private",
                    [i.m4.EXPEERTYPE_BOT]: "bot",
                    [i.m4.EXPEERTYPE_SUPERGROUP]: "supergroup",
                    [i.m4.EXPEERTYPE_THREAD]: "thread",
                    [i.m4.EXPEERTYPE_UNKNOWN]: "unknown"
                },
                n = {
                    [i.RK.PEERTYPE_GROUP]: "group",
                    [i.RK.PEERTYPE_UNKNOWN]: "unknown",
                    [i.RK.PEERTYPE_PRIVATE]: "private",
                    [i.RK.PEERTYPE_ENCRYPTEDPRIVATE]: "encryptedprivate"
                }
        },
        15899: function(e, a, t) {
            t.d(a, {
                Gc: () => g,
                Nz: () => E
            });
            var i, d = t(58191);
            t(94969);
            var n = t(98391),
                o = t(77693),
                s = t(80073),
                r = t(87629),
                l = t(92810),
                c = t(27767),
                u = t(2077),
                h = t(39457),
                p = t(3425);
            t(32436);
            var E = ((i = {})[i.Unknown = 0] = "Unknown", i[i.Onboarding_text = 1] = "Onboarding_text", i[i.Onboarding_image = 2] = "Onboarding_image", i[i.Ads_text = 3] = "Ads_text", i[i.Ads_image = 4] = "Ads_image", i[i.Nothing = 5] = "Nothing", i[i.Contacts = 6] = "Contacts", i[i.Show_posts = 7] = "Show_posts", i[i.Suggested_channels = 8] = "Suggested_channels", i[i.Suggested_channels_category = 9] = "Suggested_channels_category", i[i.Android_onboarding = 10] = "Android_onboarding", i[i.Suggested_bots = 11] = "Suggested_bots", i[i.Suggested_bots_channels = 12] = "Suggested_bots_channels", i);
            let y = "onboarding_scenario",
                g = () => {
                    let {
                        logEvent: e
                    } = (0, n.yw)(), a = (0, r.i)(), t = (0, u.d4)(e => e.onboarding.step), i = (0, u.d4)(l.t2)[y], E = (0, u.d4)(e => e.onboarding.scenario), g = (0, u.d4)(e => (0, o.H4)(e)), m = e => {
                        let a = e % 4;
                        return (0, p.t)(h._, {
                            "SignupOnboardingScenarios/default": () => {
                                switch (a) {
                                    case 0:
                                        return 8;
                                    case 1:
                                        return 11;
                                    case 2:
                                        return 12;
                                    case 3:
                                        return 5;
                                    default:
                                        return 0
                                }
                            },
                            "SignupOnboardingScenarios/dynamic": () => 12
                        })()
                    }, [_, f] = (0, d.useState)(() => m(g));
                    (0, d.useEffect)(() => {
                        f(m(g))
                    }, [g]);
                    let P = (0, d.useMemo)(() => Number(i) || Number(E), [E, i]),
                        v = c.pz ? "ios" : "desktop";

                    function T(e) {
                        return {
                            scenario_id: e.scenario_id,
                            page_type: e.page_type,
                            action_type: e.action_type,
                            peer_id: e.peer_id,
                            category_id: e.category_id ?? 0,
                            peer_type: e.peer_type,
                            client_name: e.client_name,
                            duration_seconds: e.duration_seconds ?? 0
                        }
                    }
                    return {
                        sendPageEnterEvent: function() {
                            e("onboarding_v2", T({
                                scenario_id: P,
                                page_type: "select_channel" === t ? 3 : 4 === P || 2 === P ? 2 : 1
                            }))
                        },
                        sendJoinEvent: function(a, t) {
                            e("onboarding_v2", T({
                                scenario_id: _,
                                page_type: 3,
                                action_type: 4,
                                peer_id: a,
                                peer_type: t,
                                client_name: v
                            }))
                        },
                        sendSkipEvent: function(a) {
                            e("onboarding_v2", T({
                                scenario_id: _,
                                page_type: 3,
                                action_type: 1,
                                client_name: v,
                                duration_seconds: a / 1e3
                            }))
                        },
                        sendLeaveEvent: function(a) {
                            e("onboarding_v2", T({
                                scenario_id: _,
                                page_type: 3,
                                action_type: 5,
                                client_name: v,
                                duration_seconds: a / 1e3
                            }))
                        },
                        sendPreviewEvent: function(a) {
                            e("onboarding_v2", T({
                                scenario_id: P,
                                page_type: 3,
                                action_type: 3,
                                peer_id: a,
                                peer_type: "channel"
                            }))
                        },
                        sendMoreInfoEvent: function(a, t) {
                            e("onboarding_v2", T({
                                scenario_id: P,
                                page_type: 3,
                                category_id: a,
                                action_type: 6,
                                category_title: t
                            }))
                        },
                        setScenario: function(e) {
                            if (i) return Number(i);
                            let t = 0;
                            switch (parseInt(e.slice(-1))) {
                                case 0:
                                case 1:
                                    t = 1;
                                    break;
                                case 2:
                                case 3:
                                    t = 2;
                                    break;
                                case 4:
                                case 5:
                                    t = 3;
                                    break;
                                case 6:
                                case 7:
                                    t = 4;
                                    break;
                                case 8:
                                case 9:
                                    t = 5
                            }
                            return null == a || a.webSdk.core.configs.setParameter(y, t).toPromise().catch(e => {
                                s.j.error(e)
                            }), t
                        },
                        sendSelectCateogryEvent: function(a, t) {
                            e("onboarding_v2", T({
                                scenario_id: P,
                                page_type: 3,
                                action_type: 2,
                                category_id: a,
                                category_title: t
                            }))
                        },
                        getOnboardingScenario: async function e() {
                            return await (null == a ? void 0 : a.webSdk.core.configs.getParameter(y).toPromise().catch(e => {
                                s.j.error("getOnboardingScenario", e)
                            }))
                        },
                        sendViewEvent: function(a, t) {
                            e("onboarding_v2", T({
                                scenario_id: _,
                                page_type: 3,
                                action_type: 0,
                                peer_id: a,
                                peer_type: t,
                                client_name: v
                            }))
                        },
                        sendConfirmEvent: function(a) {
                            e("onboarding_v2", T({
                                scenario_id: _,
                                page_type: 3,
                                action_type: 7,
                                client_name: v,
                                duration_seconds: a / 1e3
                            }))
                        }
                    }
                }
        },
        39457: function(e, a, t) {
            t.d(a, {
                _: () => i
            });
            let i = "SignupOnboardingScenarios/dynamic"
        },
        32436: function(e, a, t) {
            t.d(a, {
                E: () => l,
                LM: () => p,
                Ok: () => h
            });
            var i, d = t(56053),
                n = t(87728);
            let o = [{
                    exPeerType: n.m4.EXPEERTYPE_CHANNEL,
                    channel_ids: [0x4604eb4f, 0x7b65dda5, 0x51f5cdc9, 0x72748245, 0x7f2b79b5, 0x4b4960a4, 0x79eec252, 0x3fa40baa, 0x3aa9d303]
                }],
                s = [{
                    channel_ids: [0x6d5b0a2c, 0x3cbaab86, 0x6c5ebf2d, 0x2c3aae7c, 0x525416f9, 0x47ce3e8c, 0x252e692f, 0x77975f51, 0x6bd9d63a],
                    exPeerType: n.m4.EXPEERTYPE_BOT
                }],
                r = [{
                    exPeerType: n.m4.EXPEERTYPE_BOT,
                    channel_ids: [0x6d5b0a2c, 0x3cbaab86, 0x6c5ebf2d, 0x47ce3e8c, 0x6bd9d63a, 0x525416f9]
                }, {
                    exPeerType: n.m4.EXPEERTYPE_CHANNEL,
                    channel_ids: [0x51f5cdc9, 0x72748245, 0x7f2b79b5, 0x4b4960a4, 0x79eec252, 0x3aa9d303]
                }];
            var l = ((i = {}).select_topic = "select_topic", i.select_channel = "select_channel", i);
            let c = {
                    step: "select_topic",
                    topics: [{
                        id: 1,
                        name: "cooking",
                        emoji: "\uD83C\uDF57"
                    }, {
                        id: 2,
                        name: "sport",
                        emoji: "⚽"
                    }, {
                        id: 3,
                        name: "parenting",
                        emoji: "\uD83D\uDC7C"
                    }, {
                        id: 4,
                        name: "art",
                        emoji: "\uD83C\uDFA8"
                    }, {
                        id: 5,
                        name: "news",
                        emoji: "\uD83D\uDDDE️"
                    }, {
                        id: 6,
                        name: "education",
                        emoji: "\uD83D\uDCD6"
                    }, {
                        id: 7,
                        name: "culture",
                        emoji: "\uD83D\uDD4C"
                    }, {
                        id: 8,
                        name: "movie",
                        emoji: "\uD83C\uDF9E️"
                    }, {
                        id: 9,
                        name: "music",
                        emoji: "\uD83C\uDFBC"
                    }, {
                        id: 10,
                        name: "science",
                        emoji: "\uD83D\uDD2C"
                    }, {
                        id: 11,
                        name: "photo",
                        emoji: "\uD83D\uDCF7"
                    }, {
                        id: 12,
                        name: "fun",
                        emoji: "\uD83E\uDDE9"
                    }, {
                        id: 13,
                        name: "charity",
                        emoji: "\uD83C\uDF31"
                    }, {
                        id: 14,
                        name: "tourism",
                        emoji: "\uD83D\uDDFA️"
                    }, {
                        id: 15,
                        name: "religion",
                        emoji: "\uD83D\uDD4B"
                    }, {
                        id: 16,
                        name: "psychology",
                        emoji: "\uD83E\uDDE0"
                    }, {
                        id: 17,
                        name: "literature",
                        emoji: "\uD83D\uDCDA"
                    }, {
                        id: 18,
                        name: "health",
                        emoji: "\uD83E\uDEC0"
                    }, {
                        id: 19,
                        name: "info",
                        emoji: "❓"
                    }, {
                        id: 20,
                        name: "daily",
                        emoji: "\uD83D\uDDBC️"
                    }, {
                        id: 21,
                        name: "econ",
                        emoji: "\uD83D\uDCB0"
                    }],
                    channels: o,
                    bestChannels: o,
                    bestBots: s,
                    bestContent: r,
                    suggestedPeers: [],
                    channelPerTopic: 3,
                    channelsData: new Map,
                    botsData: new Map
                },
                u = (0, d.Z0)({
                    name: "Onboarding",
                    initialState: c,
                    reducers: {
                        setIsFirstTimer(e, a) {
                            e.isFirstTimer = a.payload
                        },
                        setScenario(e, a) {
                            e.scenario = a.payload
                        },
                        setTopics(e, a) {
                            e.topics = a.payload
                        },
                        setList(e, a) {
                            e.channels = a.payload
                        },
                        setStep(e, a) {
                            e.step = a.payload
                        },
                        setSelectedTopic(e, a) {
                            e.focused_topic = a.payload
                        },
                        toggleTopic(e, a) {
                            let t = e.topics.find(e => e.name === a.payload.name);
                            t && (t.selected = !t.selected)
                        },
                        addChannelData(e, a) {
                            a.payload.channels.forEach(a => {
                                e.channelsData.set(a.id, a)
                            })
                        },
                        addBotData(e, a) {
                            a.payload.bots.forEach(a => {
                                e.botsData.set(a.id, a)
                            })
                        },
                        setBestBots(e, a) {
                            e.bestBots = a.payload.bots
                        },
                        setSuggestedPeers(e, a) {
                            e.suggestedPeers = a.payload.peers
                        }
                    }
                }),
                h = u.reducer,
                p = {
                    ...u.actions,
                    getChannelData: (0, d.VP)("Onboarding/GetChannelData"),
                    getBotData: (0, d.VP)("Onboarding/GetBotData"),
                    getPeerDataDynamically: (0, d.VP)("Onboarding/GetPeerDataDynamically")
                }
        },
        3425: function(e, a, t) {
            t.d(a, {
                t: () => i
            });

            function i(e, a) {
                return a[e]
            }
        },
        71270: function(e, a, t) {
            t.d(a, {
                F9: () => p,
                Ip: () => h
            });
            var i = t(8831),
                d = t(89107),
                n = t(56053),
                o = t(34490),
                s = t.n(o),
                r = t(383);
            let l = {
                    isLoading: !0,
                    isFirst: !0,
                    result: [],
                    error: void 0,
                    hasMore: {
                        backward: !0,
                        forward: !0
                    },
                    loadMoreState: void 0
                },
                c = {
                    peerId: void 0,
                    data: {
                        [d.ME.SEARCHCONTENTTYPE_PHOTOS]: l,
                        [d.ME.SEARCHCONTENTTYPE_VIDEOS]: l,
                        [d.ME.SEARCHCONTENTTYPE_DOCUMENTS]: l,
                        [d.ME.SEARCHCONTENTTYPE_VOICES]: l,
                        [d.ME.SEARCHCONTENTTYPE_AUDIOS]: l,
                        [d.ME.SEARCHCONTENTTYPE_MEDIA]: l,
                        [d.ME.SEARCHCONTENTTYPE_LINKS]: l
                    }
                },
                u = (0, n.Z0)({
                    name: "PeerSearch",
                    initialState: c,
                    reducers: {
                        setFirst(e, a) {
                            let t = a.payload.isFirst;
                            a.payload.searchContentType ? e.data[a.payload.searchContentType].isFirst = t : (e.data[d.ME.SEARCHCONTENTTYPE_PHOTOS].isFirst = t, e.data[d.ME.SEARCHCONTENTTYPE_VIDEOS].isFirst = t, e.data[d.ME.SEARCHCONTENTTYPE_DOCUMENTS].isFirst = t, e.data[d.ME.SEARCHCONTENTTYPE_VOICES].isFirst = t, e.data[d.ME.SEARCHCONTENTTYPE_AUDIOS].isFirst = t, e.data[d.ME.SEARCHCONTENTTYPE_LINKS].isFirst = t)
                        },
                        loading(e, a) {
                            e.data[a.payload.searchContentType].isLoading = !0
                        },
                        received(e, a) {
                            let t = e.data[a.payload.searchContentType];
                            if (a.payload.loadMore || (t.result = []), e.peerId = a.payload.peerId, a.payload.loadMode === i.iP.LISTLOADMODE_BACKWARD) a.payload.result.length < 20 && (t.hasMore.backward = !1), t.result.unshift(...a.payload.result);
                            else if (a.payload.loadMode === i.iP.LISTLOADMODE_FORWARD) a.payload.result.length < 20 && (t.hasMore.forward = !1), t.result.push(...a.payload.result);
                            else {
                                let e = a.payload.result,
                                    i = s()(e, t.result, e => e.rid).sort((e, a) => e.date - a.date);
                                t.result = i, a.payload.result.length < 20 ? (t.hasMore.backward = !1, t.hasMore.forward = !1) : (t.hasMore.backward = !0, t.hasMore.forward = !0)
                            }
                            a.payload.loadMoreState && (t.loadMoreState = a.payload.loadMoreState), t.isLoading = !1
                        },
                        failed(e, a) {
                            e.data[a.payload.searchContentType].error = a.payload.code
                        },
                        clear(e, a) {
                            a.payload.contentType && (e.data[a.payload.contentType] = l)
                        }
                    },
                    extraReducers: e => {
                        e.addCase(r.EW.type, (e, a) => c)
                    }
                }),
                h = u.actions,
                p = u.reducer
        }
    }
]);
//# sourceMappingURL=6339.17631aca.js.map