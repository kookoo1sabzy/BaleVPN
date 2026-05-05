try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f7134c66-7773-4b5a-a89d-30171013875c", e._sentryDebugIdIdentifier = "sentry-dbid-f7134c66-7773-4b5a-a89d-30171013875c")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8326"], {
        11796: function(e, t, s) {
            s.r(t), s.d(t, {
                Decoder: () => n
            });
            var o = s(51116),
                i = s(80073),
                r = s(69069),
                d = s(27767);
            class n {
                decode(e) {
                    return new Promise((t, s) => {
                        this.queue.length, this.queue.push({
                            blob: e,
                            res: t
                        }), this.checkQueue()
                    })
                }
                constructor() {
                    (0, o._)(this, "opusWorker", void 0), (0, o._)(this, "wavWorker", void 0), (0, o._)(this, "isSafari", d.pz), (0, o._)(this, "intervalId", void 0), (0, o._)(this, "queue", void 0), (0, o._)(this, "working", !1), (0, o._)(this, "checkQueue", () => {
                        !this.working && this.queue.length > 0 && (this.working = !0, this._decode(this.queue[0].blob).then(e => {
                            let t = this.queue.shift();
                            null == t || t.res(e), this.working = !1, this.checkQueue()
                        }))
                    }), (0, o._)(this, "_decode", e => (this.opusWorker = new Worker(r.en + "opus-recorder/dist/decoderWorker.min.js"), this.wavWorker = new Worker(r.en + "opus-recorder/dist/waveWorker.min.js"), new Response(e).arrayBuffer().then(t => (i.j.debug("Voice Decoder", e), this.decodeOpus(t).then(e => {
                        let t = new Blob([e], {
                            type: "audio/wav"
                        });
                        return URL.createObjectURL(t)
                    }))))), (0, o._)(this, "decodeOpus", e => new Promise(t => {
                        let s = new Uint8Array(e);
                        this.opusWorker.addEventListener("message", e => {
                            null === e.data ? (i.j.debug("Decode Opus Done", e), this.wavWorker.postMessage({
                                command: "done"
                            }), this.intervalId && (clearTimeout(this.intervalId), this.intervalId = void 0)) : (this.intervalId && clearTimeout(this.intervalId), this.intervalId = setTimeout(() => {
                                i.j.debug("Decode Opus Done with timeout", e), this.wavWorker.postMessage({
                                    command: "done"
                                })
                            }, 1e3), this.wavWorker.postMessage({
                                command: "encode",
                                buffers: e.data
                            }))
                        }), this.wavWorker.addEventListener("message", e => {
                            "page" === e.data.message && (i.j.debug("Encode Wave Done", e), t(e.data.page), this.opusWorker.terminate(), this.opusWorker = void 0, this.wavWorker.terminate(), this.wavWorker = void 0)
                        }), this.wavWorker.postMessage({
                            command: "init",
                            wavBitDepth: 16,
                            wavSampleRate: 48e3
                        }), this.opusWorker.postMessage({
                            command: "init",
                            decoderSampleRate: 48e3,
                            outputBufferSampleRate: 48e3
                        }), this.opusWorker.postMessage({
                            command: "decode",
                            pages: s
                        }, [s.buffer])
                    })), this.queue = []
                }
            }
        }
    }
]);
//# sourceMappingURL=decoder.aa499fc3.js.map