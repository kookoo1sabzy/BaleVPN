'use strict';

// LiveKit data-channel transport — lightweight replacement for @livekit/rtc-node.
//
// Uses `node-datachannel` (libdatachannel C++, ~3 MB native binary, one platform)
// instead of @livekit/rtc-node (Rust FFI, ~60 MB across all platforms).
//
// Only the DataChannel path is implemented — we never subscribe to audio/video.
// LiveKit signaling is done over WebSocket with hand-rolled protobuf encoding
// (only the 4 message types we actually need: JoinResponse, SessionDescription,
// TrickleRequest/Response). No protobufjs dependency for this file.
//
// Public API is identical to the old livekit.js — tunnel.js is untouched:
//   new LiveKitTransport()
//   lk.connect(url, token)    → Promise<void>
//   lk.disconnect()
//   lk.send(data)             reliable, queued, with back-pressure
//   lk.sendUrgent(data)       reliable, priority queue
//   lk.sendLossy(data)        fire-and-forget unreliable
//   lk.onData(buf)            callback — raw Buffer
//   lk.onDisconnected()       callback
//   lk.hasPeer                bool — true once remote participant is in room
//   lk.pressured              bool — true when normal queue is above HIGH watermark
//
// Also exports the binary framing helpers (unchanged):
//   lkEncode(obj) → Buffer
//   lkDecode(buf) → obj | null

const { WebSocket }  = require('ws');
const nodedc         = require('node-datachannel');

const NORMAL_QUEUE_HIGH = 64;
const NORMAL_QUEUE_LOW  = 16;

// ─── LiveKit signaling protobuf (hand-rolled) ────────────────────────────────
//
// LiveKit's SignalRequest/SignalResponse are protobuf messages. We only need
// to read: JoinResponse (field 2) and SessionDescription (field 4),
// and write: SessionDescription (field 4) and TrickleRequest (field 5).
//
// Protobuf wire types: 0=varint, 1=64bit, 2=len-delimited, 5=32bit
// We use a minimal encoder/decoder — no need for the full protobufjs runtime.

function pbReadVarint(buf, pos) {
    let result = 0n, shift = 0n;
    while (pos < buf.length) {
        const b = buf[pos++];
        result |= BigInt(b & 0x7f) << shift;
        shift += 7n;
        if (!(b & 0x80)) break;
    }
    return { value: result, pos };
}

function pbReadString(buf, pos) {
    const { value: len, pos: p } = pbReadVarint(buf, pos);
    const end = p + Number(len);
    return { value: buf.slice(p, end).toString('utf8'), pos: end };
}

function pbWriteVarint(value) {
    const out = [];
    let v = BigInt(value);
    do {
        let b = Number(v & 0x7fn);
        v >>= 7n;
        if (v > 0n) b |= 0x80;
        out.push(b);
    } while (v > 0n);
    return Buffer.from(out);
}

function pbWriteString(fieldNum, str) {
    const strBuf = Buffer.from(str, 'utf8');
    const tag    = pbWriteVarint(BigInt((fieldNum << 3) | 2));
    const len    = pbWriteVarint(BigInt(strBuf.length));
    return Buffer.concat([tag, len, strBuf]);
}

function pbWriteMessage(fieldNum, msgBuf) {
    const tag = pbWriteVarint(BigInt((fieldNum << 3) | 2));
    const len = pbWriteVarint(BigInt(msgBuf.length));
    return Buffer.concat([tag, len, msgBuf]);
}

// Parse a top-level SignalResponse to extract the field we care about.
// Returns { field, value } where value is a Buffer (len-delimited fields).
function pbParseSignalResponse(buf) {
    let pos = 0;
    const results = [];
    while (pos < buf.length) {
        const { value: tagVal, pos: p1 } = pbReadVarint(buf, pos);
        pos = p1;
        const fieldNum  = Number(tagVal >> 3n);
        const wireType  = Number(tagVal & 7n);
        if (wireType === 2) {
            const { value: len, pos: p2 } = pbReadVarint(buf, pos);
            pos = p2;
            const end = pos + Number(len);
            results.push({ field: fieldNum, buf: buf.slice(pos, end) });
            pos = end;
        } else if (wireType === 0) {
            const { pos: p2 } = pbReadVarint(buf, pos);
            pos = p2;
        } else if (wireType === 5) {
            pos += 4;
        } else if (wireType === 1) {
            pos += 8;
        } else {
            break; // unknown wire type — stop parsing
        }
    }
    return results;
}

// Parse a SessionDescription sub-message { type: string, sdp: string }
// field 1 = type (string), field 2 = sdp (string)
function pbParseSessionDescription(buf) {
    let pos = 0, type = '', sdp = '';
    while (pos < buf.length) {
        const { value: tagVal, pos: p1 } = pbReadVarint(buf, pos);
        pos = p1;
        const fieldNum = Number(tagVal >> 3n);
        const wireType = Number(tagVal & 7n);
        if (wireType === 2) {
            const { value: str, pos: p2 } = pbReadString(buf, pos);
            pos = p2;
            if (fieldNum === 1) type = str;
            else if (fieldNum === 2) sdp = str;
        } else if (wireType === 0) {
            const { pos: p2 } = pbReadVarint(buf, pos);
            pos = p2;
        } else {
            break;
        }
    }
    return { type, sdp };
}

// Parse a JoinResponse to extract ICE servers.
// field 5 = ice_servers (repeated), each containing:
//   field 1 = urls (repeated string)
//   field 2 = username (string)
//   field 3 = credential (string)
function pbParseJoinResponse(buf) {
    let pos = 0;
    const iceServers = [];
    while (pos < buf.length) {
        const { value: tagVal, pos: p1 } = pbReadVarint(buf, pos);
        pos = p1;
        const fieldNum = Number(tagVal >> 3n);
        const wireType = Number(tagVal & 7n);
        if (wireType === 2) {
            const { value: len, pos: p2 } = pbReadVarint(buf, pos);
            pos = p2;
            const end = pos + Number(len);
            const sub = buf.slice(pos, end);
            pos = end;
            if (fieldNum === 5) {
                // ICE server entry
                let p = 0, urls = [], username = '', credential = '';
                while (p < sub.length) {
                    const { value: tv, pos: pp1 } = pbReadVarint(sub, p);
                    p = pp1;
                    const fn2 = Number(tv >> 3n), wt2 = Number(tv & 7n);
                    if (wt2 === 2) {
                        const { value: s, pos: pp2 } = pbReadString(sub, p);
                        p = pp2;
                        if (fn2 === 1) urls.push(s);
                        else if (fn2 === 2) username = s;
                        else if (fn2 === 3) credential = s;
                    } else if (wt2 === 0) {
                        const { pos: pp2 } = pbReadVarint(sub, p); p = pp2;
                    } else break;
                }
                if (urls.length) iceServers.push({ urls, username, credential });
            }
        } else if (wireType === 0) {
            const { pos: p2 } = pbReadVarint(buf, pos); pos = p2;
        } else if (wireType === 1) { pos += 8; }
        else if (wireType === 5) { pos += 4; }
        else break;
    }
    return { iceServers };
}

// Encode SignalRequest.offer (field 4 = SessionDescription, fields: 1=type, 2=sdp)
function pbEncodeOffer(type, sdp) {
    const sdpMsg = Buffer.concat([pbWriteString(1, type), pbWriteString(2, sdp)]);
    return pbWriteMessage(4, sdpMsg);
}

// Encode SignalRequest.trickle (field 5 = TrickleRequest, fields: 1=candidateInit, 2=target)
function pbEncodeTrickle(candidateInitJSON, target) {
    const body = Buffer.concat([
        pbWriteString(1, candidateInitJSON),
        pbWriteVarint(BigInt((2 << 3) | 0)), pbWriteVarint(BigInt(target)),
    ]);
    return pbWriteMessage(5, body);
}

// ─── LiveKit WebSocket framing ────────────────────────────────────────────────
//
// LiveKit WS sends/receives raw binary protobuf messages (no length prefix).
// The WS URL is: wss://<host>/rtc?sdk=js&version=1.15.0&access_token=<JWT>
// (version string is what the server validates against — use a real one)

const LK_SDK_VERSION = '1.15.3';

// ─── Main transport class ─────────────────────────────────────────────────────

class LiveKitTransport {
    constructor() {
        this.room            = null;   // PeerConnection (kept for compatibility check in tunnel.js: `lk.room`)
        this.onData          = null;
        this.onDisconnected  = null;
        this.onDrain         = null;
        this.hasPeer         = false;
        this._urgentQueue    = [];
        this._normalQueue    = [];
        this._drainPending   = false;
        this._dc             = null;   // RTCDataChannel
        this._pc             = null;   // PeerConnection (node-datachannel)
        this._ws             = null;   // signaling WebSocket
    }

    get pressured() { return this._normalQueue.length >= NORMAL_QUEUE_HIGH; }

    // connect(url, token) — mirrors the old lk.connect(url, token) API.
    // url  = LiveKit server URL, e.g. "wss://livekit.bale.ai"
    // token = LiveKit JWT
    async connect(url, token) {
        return new Promise((resolve, reject) => {
            let settled = false;
            const done  = (err) => { if (!settled) { settled = true; err ? reject(err) : resolve(); } };

            // Build signal WS URL
            const wsUrl = (() => {
                const base = url.replace(/\/$/, '');
                const u = new URL(`${base}/rtc`);
                u.searchParams.set('sdk', 'js');
                u.searchParams.set('version', LK_SDK_VERSION);
                u.searchParams.set('access_token', token);
                return u.toString();
            })();

            const ws = new WebSocket(wsUrl, { perMessageDeflate: false });
            this._ws = ws;
            ws.binaryType = 'nodebuffer';

            let pc = null;
            let dc = null;
            let joinReceived = false;
            let iceServers = [{ urls: 'stun:stun.l.google.com:19302' }];

            ws.on('error', (e) => {
                console.error('[LiveKit] signaling WS error:', e.message);
                done(e);
                this._teardown();
            });

            ws.on('close', () => {
                if (!settled) done(new Error('Signaling WS closed before ready'));
                // If already connected, treat as disconnect
                else if (this._pc) this._teardown();
            });

            ws.on('message', (data) => {
                const buf = Buffer.isBuffer(data) ? data : Buffer.from(data);
                const fields = pbParseSignalResponse(buf);

                for (const { field, buf: sub } of fields) {
                    // field 2 = JoinResponse
                    if (field === 2 && !joinReceived) {
                        joinReceived = true;
                        const join = pbParseJoinResponse(sub);
                        if (join.iceServers.length) iceServers = join.iceServers;
                        console.log(`[LiveKit] JoinResponse — ICE servers: ${iceServers.map(s => s.urls).join(', ')}`);

                        // Create PeerConnection now that we have ICE servers
                        pc = new nodedc.PeerConnection('bale-vpn', {
                            iceServers,
                            // Publisher-subscriber model: we are subscriber only.
                            // Create an unreliable + reliable data channel to signal
                            // our intent to the SFU; actual data arrives on the
                            // server-created "_lossy" / "_reliable" channels.
                        });
                        this._pc = pc;
                        // Keep lk.room truthy (tunnel.js checks `lk.room` for liveness)
                        this.room = pc;

                        pc.onStateChange((state) => {
                            console.log('[LiveKit] PC state:', state);
                            if (state === 'disconnected' || state === 'failed' || state === 'closed') {
                                this._teardown();
                            }
                        });

                        pc.onLocalDescription((sdp, type) => {
                            console.log('[LiveKit] Sending local description type:', type);
                            const msg = pbEncodeOffer(type, sdp);
                            if (ws.readyState === WebSocket.OPEN) ws.send(msg);
                        });

                        pc.onLocalCandidate((candidate, mid) => {
                            const candidateInit = JSON.stringify({ candidate, sdpMid: mid });
                            // target 0 = PUBLISHER, 1 = SUBSCRIBER
                            const msg = pbEncodeTrickle(candidateInit, 1);
                            if (ws.readyState === WebSocket.OPEN) ws.send(msg);
                        });

                        // LiveKit SFU opens the data channels from its side
                        pc.onDataChannel((incomingDc) => {
                            const label = incomingDc.getLabel();
                            console.log('[LiveKit] DataChannel from SFU:', label);

                            if (label === '_reliable' || label === '_lossy') {
                                if (!dc) {
                                    // Use whichever arrives first as primary (we use reliable for all managed sends)
                                    dc = incomingDc;
                                    this._dc = dc;
                                }

                                incomingDc.onMessage((msg) => {
                                    if (this.onData) {
                                        const buf2 = typeof msg === 'string'
                                            ? Buffer.from(msg, 'utf8')
                                            : Buffer.from(msg);
                                        this.onData(buf2);
                                    }
                                });

                                incomingDc.onOpen(() => {
                                    console.log(`[LiveKit] DataChannel '${label}' open`);
                                    if (!this.hasPeer) {
                                        this.hasPeer = true;
                                        done(); // resolve connect()
                                    }
                                });

                                incomingDc.onClosed(() => {
                                    console.log(`[LiveKit] DataChannel '${label}' closed`);
                                    if (this._dc === incomingDc) this._teardown();
                                });

                                incomingDc.onError((e) => {
                                    console.error(`[LiveKit] DataChannel '${label}' error:`, e);
                                });
                            }

                            // Participant data channel: label = participant SID
                            // hasPeer fires when SFU signals a remote participant
                            if (label !== '_reliable' && label !== '_lossy' && !this.hasPeer) {
                                this.hasPeer = true;
                            }
                        });

                        // Create subscriber offer (we are receive-only)
                        // The SFU will offer us tracks; we need to answer.
                        // We do NOT create tracks — autoSubscribe=false equivalent is
                        // achieved by not calling addTrack().
                    }

                    // field 4 = SessionDescription (offer from SFU)
                    if (field === 4 && pc) {
                        const { type, sdp } = pbParseSessionDescription(sub);
                        console.log('[LiveKit] Remote description:', type);
                        try {
                            pc.setRemoteDescription(sdp, type);
                        } catch (e) {
                            console.error('[LiveKit] setRemoteDescription failed:', e.message);
                            done(e);
                        }
                    }

                    // field 5 = TrickleRequest (ICE candidate from SFU)
                    if (field === 5 && pc) {
                        try {
                            const { value: candidateJSON } = pbReadString(sub, 0);
                            const { candidate, sdpMid } = JSON.parse(candidateJSON);
                            pc.addRemoteCandidate(candidate, sdpMid || '0');
                        } catch (e) {
                            // Non-fatal — ICE trickle sometimes sends end-of-candidates
                        }
                    }

                    // field 8 = ParticipantUpdate (remote participant joined)
                    if (field === 8) {
                        if (!this.hasPeer) {
                            this.hasPeer = true;
                            console.log('[LiveKit] Participant joined');
                        }
                    }
                }
            });

            // Timeout guard — if not connected in 30s, fail
            const timeout = setTimeout(() => {
                done(new Error('LiveKit connect timeout'));
                this._teardown();
            }, 30_000);

            // Clear timeout once resolved
            const origDone = done;
            // (done is already guarded by settled flag, timeout cleaned up below)
            ws.once('open', () => {
                console.log('[LiveKit] Signaling WS open');
                // The connect URL already carries the token — no explicit join needed.
                // Clear timeout once we start receiving messages.
            });

            // Attach timeout cleanup to the promise
            const cleanup = () => clearTimeout(timeout);
            // done() is called with or without error; clean up after either
            const p = new Promise((res) => {
                const orig = done;
                // patch done to also clear timeout
            });
            // Simpler: just clear on settle
            const checkSettle = setInterval(() => { if (settled) { clearInterval(checkSettle); clearTimeout(timeout); } }, 100);
        });
    }

    _teardown() {
        if (!this.room && !this._pc) return; // already torn down

        const dc = this._dc;
        const pc = this._pc;
        const ws = this._ws;

        this.room  = null;
        this._dc   = null;
        this._pc   = null;
        this._ws   = null;
        this._urgentQueue = [];
        this._normalQueue = [];

        try { dc?.close(); } catch (_) {}
        try { pc?.close(); } catch (_) {}
        try { if (ws?.readyState === WebSocket.OPEN || ws?.readyState === WebSocket.CONNECTING) ws.close(); } catch (_) {}

        if (this.onDisconnected) {
            try { this.onDisconnected(); } catch (_) {}
        }
    }

    send(data) {
        if (!this.room) return;
        this._normalQueue.push(data);
        this._drain();
    }

    sendUrgent(data) {
        if (!this.room) return;
        this._urgentQueue.push(data);
        this._drain();
    }

    // Fire-and-forget LOSSY send for raw IP packets
    sendLossy(data) {
        if (!this._dc) return;
        try { this._dc.sendMessageBinary(data); }
        catch (e) { console.error('[LK] LOSSY send failed:', e.message); }
    }

    _drain() {
        if (!this._dc) return;
        while (this._urgentQueue.length || this._normalQueue.length) {
            const data = this._urgentQueue.shift() || this._normalQueue.shift();
            try { this._dc.sendMessageBinary(Buffer.isBuffer(data) ? data : Buffer.from(data)); }
            catch (e) { console.error('[LK] send failed:', e.message); break; }
        }
        if (this._drainPending) {
            this._drainPending = false;
            if (typeof this.onDrain === 'function') { this.onDrain(); this.onDrain = null; }
        }
    }

    disconnect() {
        this._teardown();
    }
}

// ─── Binary framing (unchanged from original) ────────────────────────────────

function lkEncode(obj) {
    if (obj.t === 'I') {
        const out = Buffer.allocUnsafe(obj.data.length + 1);
        out[0] = 0x49;
        obj.data.copy(out, 1);
        return out;
    }
    const sidBuf = Buffer.from(obj.s, 'hex');
    const hdr    = Buffer.from([obj.t.charCodeAt(0)]);
    if (obj.t === 'C') {
        const host = Buffer.from(obj.h, 'utf8');
        const meta = Buffer.alloc(3);
        meta.writeUInt16BE(obj.p, 0); meta[2] = host.length;
        return Buffer.concat([hdr, sidBuf, meta, host]);
    }
    if (obj.t === 'A') return Buffer.concat([hdr, sidBuf, Buffer.from([obj.ok ? 1 : 0])]);
    if (obj.t === 'D') return Buffer.concat([hdr, sidBuf, obj.data]);
    if (obj.t === 'U') {
        const host = Buffer.from(obj.h, 'utf8');
        const meta = Buffer.alloc(3);
        meta.writeUInt16BE(obj.p, 0); meta[2] = host.length;
        return Buffer.concat([hdr, sidBuf, meta, host, obj.data]);
    }
    return Buffer.concat([hdr, sidBuf]);  // X
}

function lkDecode(buf) {
    if (buf.length < 1) return null;
    const t = String.fromCharCode(buf[0]);
    if (t === 'I') return { t, data: buf.slice(1) };
    if (buf.length < 7) return null;
    const s = buf.slice(1, 7).toString('hex');
    const r = buf.slice(7);
    if (t === 'C') {
        if (r.length < 3) return null;
        return { t, s, h: r.slice(3, 3 + r[2]).toString('utf8'), p: r.readUInt16BE(0) };
    }
    if (t === 'A') return { t, s, ok: r.length > 0 && r[0] !== 0 };
    if (t === 'D') return { t, s, data: r };
    if (t === 'X') return { t, s };
    if (t === 'U') {
        if (r.length < 3) return null;
        const hl   = r[2];
        const h    = r.slice(3, 3 + hl).toString('utf8');
        const p    = r.readUInt16BE(0);
        const data = r.slice(3 + hl);
        return { t, s, h, p, data };
    }
    return null;
}

module.exports = { LiveKitTransport, lkEncode, lkDecode };
