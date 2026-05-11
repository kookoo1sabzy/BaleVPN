'use strict';

// LiveKit data-channel transport. Wraps `@livekit/rtc-node`'s Room with a
// queue/back-pressure scheme appropriate for tunnelling TCP/IP packets:
//   • `send` / `sendUrgent` — reliable, queued, with HIGH/LOW watermarks for
//     back pressure (caller can attach `onDrain` to be notified when the
//     normal queue dips below LOW).
//   • `sendLossy` — fire-and-forget, no queue, used for raw IP packets where
//     the upper layer handles retransmission.
//
// Also exports the binary framing used over the data channel (lkEncode /
// lkDecode) — compact replacement for the JSON "T:" tunnel envelopes:
//
//   [1B type][6B raw sid][payload]
//     C: 2B host-len + host + 2B port
//     A: 1B ok
//     D: raw bytes (a SOCKS5 chunk)
//     X: —
//     U: 2B host-len + host + 2B port + raw datagram
//     I: raw IP packet (no sid; type byte then bytes)

const livekit = require('@livekit/rtc-node');

const NORMAL_QUEUE_HIGH = 64;   // pause TCP sockets above this
const NORMAL_QUEUE_LOW  = 16;   // resume TCP sockets below this (hysteresis)

class LiveKitTransport {
    constructor() {
        this.room           = null;
        this.onData         = null;
        this.onDisconnected = null;
        this.onDrain        = null;
        this.hasPeer        = false;  // true once a remote participant joins (or is already present)
        this._urgentQueue   = [];
        this._normalQueue   = [];
        this._sending       = false;
        this._drainPending  = false;
    }

    get pressured() { return this._normalQueue.length >= NORMAL_QUEUE_HIGH; }

    async connect(url, token) {
        const { Room, RoomEvent } = livekit;
        const room = new Room();
        room.on(RoomEvent.DataReceived, (payload) => {
            if (this.onData) this.onData(Buffer.from(payload));
        });
        room.on(RoomEvent.Disconnected, () => {
            this._teardown();
        });
        room.on(RoomEvent.ParticipantConnected, () => {
            this.hasPeer = true;
        });
        room.on(RoomEvent.ParticipantDisconnected, () => {
            if (room.remoteParticipants.size === 0) this._teardown();
        });
        await room.connect(url, token, { autoSubscribe: true });
        this.room = room;
        // Some peers may already be in the room when we join (server case).
        if (room.remoteParticipants.size > 0) this.hasPeer = true;
        console.log('[LiveKit] Connected');
    }

    _teardown() {
        const room = this.room;
        this.room = null;
        this._urgentQueue = [];
        this._normalQueue = [];
        if (room) { room.removeAllListeners(); room.disconnect().catch(() => {}); }
        if (this.onDisconnected) this.onDisconnected();
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

    // Fire-and-forget LOSSY send for raw IP packets — no queuing, no back pressure.
    sendLossy(data) {
        if (!this.room) return;
        Promise.resolve(this.room.localParticipant.publishData(data, { reliable: false }))
            .catch(e => console.error('[LK] LOSSY send failed:', e.message));
    }

    _drain() {
        if (this._sending || !this.room) return;
        const data = this._urgentQueue.shift() || this._normalQueue.shift();
        if (!data) return;
        this._sending = true;
        Promise.resolve(this.room.localParticipant.publishData(data, { reliable: true }))
            .catch(e => {
                this._teardown();
            })
            .finally(() => {
                this._sending = false;
                if (this._normalQueue.length <= NORMAL_QUEUE_LOW && this._drainPending) {
                    this._drainPending = false;
                    if (typeof this.onDrain === 'function') { this.onDrain(); this.onDrain = null; }
                }
                this._drain();
            });
    }

    disconnect() {
        this._teardown();
    }
}

// Binary framing for WebRTC DataChannel — no base64, no JSON, no seq numbers.
function lkEncode(obj) {
    // Hot path: called once per outbound IP packet on the server TUN loop.
    // The naive Buffer.concat([Buffer.from([0x49]), data]) allocates three
    // Buffers (singleton header, the literal [0x49], and the concat result)
    // and copies twice. Single-alloc single-copy version below.
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
