'use strict';

// TunnelManager — server- and client-mode tunnel state machine. Handles:
//   • SOCKS5 listener on the client side, dispatching frames to the server peer
//   • Auto-answer (with admission control) on the server side
//   • LiveKit data-channel orchestration
//   • Linux TUN device for the server's full-VPN mode
//   • Reconnect machinery with generation-counter cancellation and peer-join
//     gate (matches Android's TunnelManager semantics)
//
// The class doesn't own the WebSocket — it asks for one via the `getBale`
// callback every time it needs to signal. BaleConnection.resolveWs() brings
// the WS up briefly during signaling, then `onTunnelReady` fires and the
// caller's reconcile() drops the WS again once the LK channel is up.

const fs    = require('fs');
const net   = require('net');
const dgram = require('dgram');
const crypto = require('crypto');
const { execSync } = require('child_process');

const {
    PEERTYPE_PRIVATE,
    TUNNEL_PREFIX, CHUNK_SIZE, LK_CHUNK,
    TUNNEL_MAX_RECONNECT_ATTEMPTS,
    PENDING_TIMEOUT_MS, PENDING_SWEEP_MS, ESTABLISH_GRACE_MS,
    DEFAULT_LIMIT_KBPS, MAX_LIMIT_KBPS, THROTTLE_FLAG_MS,
} = require('./constants');
const { LiveKitTransport, lkEncode, lkDecode } = require('./livekit');
const { AdmissionStore } = require('./admission');

// Tunnel envelope helpers (legacy "T:" message-mode wire format — kept around
// per the "leave unused code in place" preference; only the WebRTC path is
// actually wired to a UI option these days).
function tunnelEncode(obj) { return TUNNEL_PREFIX + JSON.stringify(obj); }
function tunnelDecode(text) {
    if (!text.startsWith(TUNNEL_PREFIX)) return null;
    try { return JSON.parse(text.slice(TUNNEL_PREFIX.length)); } catch { return null; }
}
function makeSid() { return crypto.randomBytes(6).toString('hex'); }

// Simple bytes/sec token bucket with 1-second burst, mirroring the Android
// PacketProcessor's per-direction limiter. Drop semantics — when the bucket
// is empty, take() returns false and the caller is expected to drop the
// packet (TCP-in-tunnel will retransmit; UDP loss is acceptable).
class TokenBucket {
    constructor(rateBps) {
        this._rate    = rateBps;
        this._cap     = rateBps;
        this._tokens  = rateBps;
        this._last    = Date.now();
        this.lastDrop = 0;
    }
    setRate(rateBps) {
        this._rate = rateBps;
        this._cap  = rateBps;
        if (this._tokens > this._cap) this._tokens = this._cap;
    }
    take(bytes) {
        const now = Date.now();
        this._tokens = Math.min(this._cap, this._tokens + (now - this._last) / 1000 * this._rate);
        this._last   = now;
        if (this._tokens < bytes) { this.lastDrop = now; return false; }
        this._tokens -= bytes;
        return true;
    }
}

// ── IPv4 SNAT helpers (server-side multi-client TUN) ─────────────────────────
//
// Every Android client locally configures its TUN interface as 10.8.0.2/24
// (BaleVpnService.kt). On a single-client server that's fine — the kernel's
// MASQUERADE conntrack maps <10.8.0.2:sport, dst:dport> to the public NIC's
// addr/port and demuxes return flows by that 4-tuple. With multiple clients
// all claiming 10.8.0.2 the conntrack tuples collide and return packets get
// misrouted, so the server applies a userspace SNAT: rewrite each client's
// source IP to a distinct address in 10.8.0.0/24 *before* handing the packet
// to bale0, and reverse the rewrite on return packets so the client still
// sees its own configured 10.8.0.2.

// Adjust a 16-bit Internet checksum at pkt[off] for a single IP-address change.
// RFC 1624: HC' = ~(~HC + ~m + m')   in 16-bit one's complement arithmetic.
// Used for the IPv4 header checksum and the L4 (TCP/UDP) checksum, both of
// which depend on the IP addresses via the pseudo-header.
function adjustCsum(pkt, off, oldHi, oldLo, newHi, newLo) {
    let s = (~pkt.readUInt16BE(off) & 0xFFFF)
          + (~oldHi & 0xFFFF) + (~oldLo & 0xFFFF)
          + newHi + newLo;
    while (s > 0xFFFF) s = (s & 0xFFFF) + (s >>> 16);
    pkt.writeUInt16BE(~s & 0xFFFF, off);
}

// In-place rewrite of an IPv4 src (fieldOffset=12) or dst (fieldOffset=16)
// address. Updates the IP header checksum and the L4 (TCP/UDP) checksum where
// applicable. ICMP doesn't include addresses in its checksum, so no fixup
// there. Non-first fragments (frag-offset != 0) don't carry the L4 header,
// so the L4 checksum lives only in the first fragment.
function rewriteIp(pkt, fieldOffset, newIp) {
    if (pkt.length < 20 || (pkt[0] >> 4) !== 4) return;
    const parts = newIp.split('.').map(Number);
    // No-op short-circuit: when the address is already what we'd write (e.g.
    // the first client is leased 10.8.0.2, which matches the address it
    // already configured locally), skip the writes and the checksum update.
    if (pkt[fieldOffset]     === parts[0] && pkt[fieldOffset + 1] === parts[1] &&
        pkt[fieldOffset + 2] === parts[2] && pkt[fieldOffset + 3] === parts[3]) return;
    const oldHi = pkt.readUInt16BE(fieldOffset);
    const oldLo = pkt.readUInt16BE(fieldOffset + 2);
    pkt[fieldOffset]     = parts[0]; pkt[fieldOffset + 1] = parts[1];
    pkt[fieldOffset + 2] = parts[2]; pkt[fieldOffset + 3] = parts[3];
    const newHi = (parts[0] << 8) | parts[1];
    const newLo = (parts[2] << 8) | parts[3];

    adjustCsum(pkt, 10, oldHi, oldLo, newHi, newLo);   // IP header checksum

    const proto    = pkt[9];
    const ihl      = (pkt[0] & 0x0F) * 4;
    const fragInfo = pkt.readUInt16BE(6);
    if ((fragInfo & 0x1FFF) !== 0) return;             // non-first fragment

    if (proto === 6 && pkt.length >= ihl + 18) {       // TCP
        adjustCsum(pkt, ihl + 16, oldHi, oldLo, newHi, newLo);
    } else if (proto === 17 && pkt.length >= ihl + 8) {// UDP
        if (pkt.readUInt16BE(ihl + 6) !== 0) {         // 0 = no checksum
            adjustCsum(pkt, ihl + 6, oldHi, oldLo, newHi, newLo);
        }
    }
}

class TunnelManager {
    /**
     * @param {{
     *   getBale:               () => Promise<BaleWsClient|null>,
     *   onTunnelReady?:        () => void,
     *   onPermanentDisconnect?:() => void,
     * }} opts
     */
    constructor({ getBale, onTunnelReady, onPermanentDisconnect } = {}) {
        this.getBale               = getBale || (async () => null);
        this.onTunnelReady         = onTunnelReady         || (() => {});
        this.onPermanentDisconnect = onPermanentDisconnect || (() => {});
        this.mode             = null;       // 'client' | 'server' | null
        this.transport        = 'message';  // 'message' | 'webrtc'  (client mode only)
        this.serverPeer       = null;       // { id, type } — set in client mode
        this.socks5Port       = 1080;
        this.socks5Srv        = null;
        this.sessions         = new Map();
        this.lkTransport      = null;       // client-mode LiveKit connection
        this.lkRooms          = new Map();  // server-mode: callId string → LiveKitTransport
        // Server-mode admission state — mirrors BaleServerService on Android.
        this.pendingMap       = new Map();  // callKey string → PendingCall
        this._pendingSweep    = null;       // setInterval handle
        // TUN packet forwarding (server mode)
        this._tunFd           = null;
        this._tunReadRunning  = false;
        this._tunStatsTimer   = null;
        this._tunRxPkts       = 0;  this._tunRxBytes = 0;
        this._tunTxPkts       = 0;  this._tunTxBytes = 0;
        // SNAT pool — lazily initialized on first allocation.
        this._snatPool        = null;       // queue of free IPs (strings)
        this._snatByLk        = new Map();  // lk → assigned IP
        this._lkBySnat        = new Map();  // assigned IP → lk
        // Per-caller bandwidth overrides (in-memory, like Android). Re-applied
        // when the same caller reconnects within the same process lifetime.
        this._callerLimits    = new Map();  // callerId → { upBps, downBps }
        // Client reconnect state
        this._reconnectTimer   = null;
        this._reconnectAttempt = 0;
        // When true, the client tunnel will NOT auto-reconnect after an LK
        // drop. Reserved for legacy code paths — current /disconnect calls
        // _stopAll directly.
        this._noReconnect      = false;
        this._callId           = null;     // most recent callId of our outgoing client-mode call
        this._callIds          = new Set();// all callIds we've initiated this Activate session
        this._callEndedRemover = null;     // deregister our addOnCallEnded subscription
        this._rejected         = false;    // peer (server) ended one of our calls — surfaced to UI
        // Generation counter — bumped on every new startWebRtcTunnel run and on
        // _stopAll. Used as a cancellation token so concurrent runs (racing
        // reconnect timer + fresh user Activate) abort cleanly.
        this._gen              = 0;
    }

    configure(mode, { serverPeerId, serverPeerType, socks5Port, transport } = {}) {
        this._stopAll();
        this._rejected = false;       // fresh Activate clears any prior rejection notice
        this.mode      = mode || null;
        this.transport = transport || 'webrtc';
        if (mode === 'client') {
            this.serverPeer = serverPeerId
                ? { id: Number(serverPeerId), type: Number(serverPeerType) || PEERTYPE_PRIVATE }
                : null;
            this.socks5Port = Number(socks5Port) || 1080;
            if (this.serverPeer) {
                this._startSocks5();
                if (this.transport === 'webrtc')
                    this.startWebRtcTunnel().catch(e => console.error('[Tunnel/C] WebRTC start:', e.message));
            }
        } else if (mode === 'server') {
            this._setupTun();
        }
        console.log(`[Tunnel] mode=${mode || 'none'} transport=${this.transport}`);
    }

    onWsReady() {
        if (this.mode === 'server') this._setupTun();
    }

    status() {
        const lk = this.lkTransport;
        return {
            mode:        this.mode || 'none',
            transport:   this.transport,
            socks5Port:  this.socks5Port,
            serverPeer:  this.serverPeer,
            running:     !!this.socks5Srv,
            sessions:    this.sessions.size,
            lkActive:    !!(this.lkTransport || this.lkRooms.size > 0),
            lkRooms:     this.lkRooms.size,
            cliRxBytes:  lk ? (lk._rxBytes || 0) : 0,
            cliTxBytes:  lk ? (lk._txBytes || 0) : 0,
            clientRoomReady: !!(lk && lk.hasPeer),
        };
    }

    clients() {
        const list = [];
        const now = Date.now();
        for (const [callKey, lk] of this.lkRooms) {
            const upBps   = lk._upBucket   ? lk._upBucket._rate   : 0;
            const downBps = lk._downBucket ? lk._downBucket._rate : 0;
            const throttled = !!(lk._upBucket   && (now - lk._upBucket.lastDrop)   < THROTTLE_FLAG_MS) ||
                              !!(lk._downBucket && (now - lk._downBucket.lastDrop) < THROTTLE_FLAG_MS);
            list.push({
                callKey,
                callerId:     lk._callerId   || 0,
                callerName:   lk._callerName || null,
                snatIp:       this._snatByLk.get(lk) || null,
                isTunClient:  this._snatByLk.has(lk),
                connectedAt:  lk._connectedAt,
                rxPkts:  lk._rxPkts,  rxBytes: lk._rxBytes,
                txPkts:  lk._txPkts,  txBytes: lk._txBytes,
                upBps, downBps, throttled,
            });
        }
        return list;
    }

    setClientLimit(callKey, upBps, downBps) {
        const lk = this.lkRooms.get(callKey);
        if (!lk) return false;
        if (lk._upBucket)   lk._upBucket.setRate(upBps);
        if (lk._downBucket) lk._downBucket.setRate(downBps);
        // Persist per-caller so a reconnect picks up the same cap.
        if (lk._callerId) this._callerLimits.set(lk._callerId, { upBps, downBps });
        return true;
    }

    disconnectClient(callKey) {
        const lk = this.lkRooms.get(callKey);
        if (!lk) return false;
        // lk.disconnect() fires onDisconnected synchronously, which removes
        // the room from lkRooms and frees the SNAT lease.
        lk.disconnect();
        return true;
    }

    /** Server-mode mass-disconnect. Takes the WS handle directly because
     *  resolveWs() would clear userInitiatedDisconnect as a side effect. */
    async disconnectAllClients(ws) {
        if (this.mode !== 'server') return;
        const sendDiscard = (id) => (ws && ws.ready)
            ? ws.discardCall(id).catch(() => {})
            : Promise.resolve();
        const promises = [];
        for (const [, p] of this.pendingMap) promises.push(sendDiscard(p.callId));
        this.pendingMap.clear();
        if (this._pendingSweep) { clearInterval(this._pendingSweep); this._pendingSweep = null; }
        for (const [callKey, lk] of this.lkRooms) {
            promises.push(sendDiscard(callKey));
            lk.disconnect();   // synchronous onDisconnected → frees SNAT lease
        }
        this.lkRooms.clear();
        if (this._tunStatsTimer) { clearInterval(this._tunStatsTimer); this._tunStatsTimer = null; }
        await Promise.all(promises);
    }

    /** Client-mode soft-disconnect — kept around for the "leave unused code" preference. */
    stopReconnect() {
        if (this._reconnectTimer) { clearTimeout(this._reconnectTimer); this._reconnectTimer = null; }
        this._noReconnect = true;
    }

    handleIncoming(text, fromUid) {
        const msg = tunnelDecode(text);
        if (!msg) return false;
        if (this.mode === 'server') this._srvMsg(msg, fromUid, null);
        else if (this.mode === 'client') this._cliMsg(msg);
        return true;
    }

    // Server entrypoint for incoming-call updates. Mirrors Android
    // BaleServerService.checkAndHandleCall: gates on AdmissionStore,
    // deduplicates by callerId, throttles reconnect storms, queues unknown
    // callers as pending.
    async onCallReceived(callId, callEntity) {
        if (this.mode !== 'server') return;
        const callKey  = String(callId);
        const callerId = Number(callEntity?.callerId || 0);

        if (this.lkRooms.has(callKey)) {
            console.log(`[Tunnel/S] Ignoring duplicate call notification for ${callId}`);
            return;
        }
        if (!callerId) {
            console.log(`[Tunnel/S] call ${callId} arrived without callerId — deferring`);
            return;
        }

        if (AdmissionStore.isAllowed(callerId)) {
            for (const [, lk] of this.lkRooms) {
                if (lk._callerId === callerId && !lk.hasPeer) {
                    const ageMs = Date.now() - lk._connectedAt;
                    if (ageMs < ESTABLISH_GRACE_MS) {
                        console.log(`[Tunnel/S] dropping call ${callId} — caller ${callerId} still establishing (age=${ageMs}ms)`);
                        return;
                    }
                }
            }
            this.pendingMap.delete(callKey);
            await this._handleCall(callId, callerId, callEntity);
        } else {
            for (const [k, p] of this.pendingMap) {
                if (p.callerId === callerId) {
                    console.log(`[Tunnel/S] replacing duplicate pending call ${p.callId} from caller ${callerId}`);
                    this.pendingMap.delete(k);
                    this.getBale().then(ws => ws?.discardCall(p.callId)).catch(() => {});
                    break;
                }
            }
            this.pendingMap.set(callKey, {
                callId:     callKey,
                callerId,
                callerName: null,
                receivedAt: Date.now(),
                _entity:    callEntity || null,
            });
            this._startPendingSweep();
            console.log(`[Tunnel/S] call ${callId} from caller ${callerId} → PENDING (awaiting admission)`);
            this.getBale().then(ws => ws?.lookupContactName(callerId)).then(name => {
                const cur = this.pendingMap.get(callKey);
                if (cur && name) { cur.callerName = name; }
            }).catch(() => {});
        }
    }

    _startPendingSweep() {
        if (this._pendingSweep) return;
        this._pendingSweep = setInterval(() => {
            const now = Date.now();
            for (const [k, p] of this.pendingMap) {
                if (now - p.receivedAt > PENDING_TIMEOUT_MS) {
                    console.log(`[Tunnel/S] pending call ${p.callId} timed out — auto-rejecting`);
                    this.rejectPending(p.callId).catch(() => {});
                }
            }
            if (!this.pendingMap.size) {
                clearInterval(this._pendingSweep);
                this._pendingSweep = null;
            }
        }, PENDING_SWEEP_MS);
    }

    async acceptPending(callId, addToList = false) {
        const callKey = String(callId);
        const pending = this.pendingMap.get(callKey);
        if (!pending) return false;
        this.pendingMap.delete(callKey);
        if (addToList && pending.callerId) AdmissionStore.add(pending.callerId);
        await this._handleCall(callId, pending.callerId, pending._entity);
        return true;
    }

    async rejectPending(callId) {
        const callKey = String(callId);
        const pending = this.pendingMap.get(callKey);
        if (!pending) return false;
        this.pendingMap.delete(callKey);
        console.log(`[Tunnel/S] rejecting call ${callId} from caller ${pending.callerId}`);
        const ws = await this.getBale();
        try { await ws?.discardCall(callId); } catch (_) {}
        return true;
    }

    pendingCalls() {
        return [...this.pendingMap.values()].map(p => ({
            callId:     p.callId,
            callerId:   p.callerId,
            callerName: p.callerName,
            receivedAt: p.receivedAt,
        }));
    }

    admissionList() {
        return AdmissionStore.getAll().map(callerId => ({ callerId }));
    }

    async _handleCall(callId, callerId, callEntity) {
        const callKey = String(callId);
        console.log(`[Tunnel/S] Auto-answering call ${callId} caller=${callerId}`);

        const ws = await this.getBale();
        if (!ws) { console.error('[Tunnel/S] AcceptCall: no WS available'); return; }
        let resp;
        try { resp = await ws.acceptCall(callId); }
        catch (e) { console.error('[Tunnel/S] AcceptCall failed:', e.message); return; }

        const isLivekit = callEntity?.isLivekit || resp.call?.isLivekit;
        const call = resp.call;
        if (!isLivekit || !call?.token) {
            console.log('[Tunnel/S] Call answered — no LiveKit credentials');
            return;
        }

        if (callerId) {
            for (const [k, lk] of this.lkRooms) {
                if (lk._callerId === callerId) {
                    console.log(`[Tunnel/S] replacing existing client ${k} from caller ${callerId} with ${callKey}`);
                    lk.disconnect();   // onDisconnected → frees SNAT lease + removes from lkRooms
                }
            }
        }

        let callerName = null;
        try { callerName = await ws.lookupContactName(callerId); } catch (_) {}

        console.log(`[Tunnel/S] LiveKit url=${call.url} room=${call.room} token=${call.token.slice(0, 40)}…`);
        const lk = new LiveKitTransport();
        lk._callKey     = callKey;
        lk._callerId    = callerId;
        lk._callerName  = callerName;
        lk._connectedAt = Date.now();
        lk._rxPkts = 0; lk._rxBytes = 0;
        lk._txPkts = 0; lk._txBytes = 0;
        this.lkRooms.set(callKey, lk);
        const snat = this._allocSnat(lk);
        if (!snat) {
            console.error(`[Tunnel/S] SNAT pool exhausted — rejecting call ${callId}`);
            this.lkRooms.delete(callKey);
            ws.discardCall(callId).catch(() => {});
            return;
        }
        console.log(`[Tunnel/S] SNAT lease ${snat} for callKey=${callKey} caller=${callerId}`);

        // Per-direction token buckets. Default to DEFAULT_LIMIT_KBPS, override
        // from any per-caller cap remembered from a previous session.
        const defaultBps = DEFAULT_LIMIT_KBPS * 1000 / 8;
        const override   = callerId ? this._callerLimits.get(callerId) : null;
        lk._upBucket   = new TokenBucket(override?.upBps   ?? defaultBps);
        lk._downBucket = new TokenBucket(override?.downBps ?? defaultBps);
        lk.onData = (data) => {
            lk._rxPkts++;
            lk._rxBytes += data.length;
            const msg = lkDecode(data);
            if (msg?.t === 'I')  this._handleTunPacket(msg.data, lk);
            else if (msg)        this._srvMsg(msg, callKey, lk);
        };
        lk.onDisconnected = () => {
            this.lkRooms.delete(callKey);
            this._freeSnat(lk);
            let closed = 0;
            for (const [key, sess] of this.sessions) {
                if (sess.lk === lk) {
                    sess.dead = true;
                    sess.socket?.destroy();
                    this.sessions.delete(key);
                    closed++;
                }
            }
            console.log(`[Tunnel/S] LiveKit room disconnected callKey=${callKey} closed=${closed} session(s)`);
        };
        try {
            await lk.connect(call.url, call.token);
        } catch (e) {
            console.error('[Tunnel/S] LiveKit connect failed:', e.message);
            this.lkRooms.delete(callKey);
            this._freeSnat(lk);
        }
    }

    async startWebRtcTunnel() {
        if (this.mode !== 'client' || !this.serverPeer) return;

        const gen = ++this._gen;
        const cancelled = () => gen !== this._gen;
        const fail = () => { if (!cancelled()) this._scheduleReconnect(); };

        if (this.lkTransport) { const prev = this.lkTransport; this.lkTransport = null; prev.disconnect(); }

        const ws = await this.getBale();
        if (cancelled()) return;
        if (!ws) { console.error('[Tunnel/C] WS unavailable'); fail(); return; }

        console.log('[Tunnel/C] Starting call for WebRTC tunnel…');
        let resp;
        try { resp = await ws.startCall(this.serverPeer.id, this.serverPeer.type); }
        catch (e) {
            console.error('[Tunnel/C] StartCall failed:', e.message);
            fail(); return;
        }
        if (cancelled()) return;

        const call = resp.call;
        if (!call?.isLivekit || !call?.token) {
            console.warn('[Tunnel/C] StartCall: no LiveKit info in response');
            fail(); return;
        }

        // Track every callId we've initiated so a late server-rejection
        // (callEnded for an earlier attempt's id) still trips permanent
        // disconnect — peer-join timeout + reconnect back-off can move us to
        // the next attempt before the rejection signal arrives.
        this._callId = call.id;
        this._callIds.add(String(call.id));
        this._callEndedRemover?.(); this._callEndedRemover = null;
        this._callEndedRemover = ws.addOnCallEnded((endedId) => {
            if (this._callIds.has(String(endedId))) {
                console.log(`[Tunnel/C] Peer ended call ${endedId} — server rejected; permanent disconnect`);
                this._rejected = true;
                this._stopAll();
                try { this.onPermanentDisconnect(); } catch (_) {}
            }
        });

        console.log(`[Tunnel/C] Joining LiveKit room ${call.room}`);
        const lk = new LiveKitTransport();
        lk._rxPkts = 0; lk._rxBytes = 0;
        lk._txPkts = 0; lk._txBytes = 0;
        lk.onData = (data) => {
            lk._rxPkts++;
            lk._rxBytes += data.length;
            const msg = lkDecode(data);
            if (msg && msg.t !== 'I') this._cliMsg(msg);
        };
        lk.onDisconnected = () => {
            if (this.lkTransport === lk) {
                this.lkTransport = null;
                console.log('[Tunnel/C] LiveKit disconnected — reconnecting…');
                this._closeCliSessions();
                try { this.onTunnelReady(); } catch (_) {}
                this._scheduleReconnect();
            }
        };
        try { await lk.connect(call.url, call.token); }
        catch (e) {
            console.error('[Tunnel/C] LiveKit connect failed:', e.message);
            fail(); return;
        }
        if (cancelled()) { lk.disconnect(); return; }

        // Wait up to 15s for the server peer to actually join. Without this
        // gate, lk.connect succeeds the moment WE join; if the server is
        // offline / rejected, we'd sit forever with a dead room.
        const peerDeadline = Date.now() + 15000;
        while (!lk.hasPeer && lk.room && Date.now() < peerDeadline) {
            await new Promise(r => setTimeout(r, 200));
            if (cancelled()) { lk.disconnect(); return; }
        }
        if (!lk.hasPeer) {
            console.warn('[Tunnel/C] Server peer did not join in 15 s — retrying');
            if (lk.room) lk.disconnect();
            fail(); return;
        }

        this._reconnectAttempt = 0;
        this.lkTransport = lk;
        console.log('[Tunnel/C] WebRTC tunnel ready');
        try { this.onTunnelReady(); } catch (e) { console.error('[Tunnel/C] onTunnelReady threw:', e.message); }
    }

    _scheduleReconnect() {
        if (this.mode !== 'client' || !this.serverPeer) return;
        if (this._noReconnect) return;
        if (this._reconnectTimer) return;
        this._reconnectAttempt++;
        if (this._reconnectAttempt > TUNNEL_MAX_RECONNECT_ATTEMPTS) {
            console.log(`[Tunnel/C] Reconnect: giving up after ${TUNNEL_MAX_RECONNECT_ATTEMPTS} attempts`);
            this._stopAll();
            try { this.onPermanentDisconnect(); } catch (_) {}
            return;
        }
        const delaySec = Math.min(this._reconnectAttempt * 3, 30);
        console.log(`[Tunnel/C] Reconnect attempt ${this._reconnectAttempt} in ${delaySec}s…`);
        this._reconnectTimer = setTimeout(async () => {
            this._reconnectTimer = null;
            await this.startWebRtcTunnel();
        }, delaySec * 1000);
    }

    _closeCliSessions() {
        let closed = 0;
        for (const [key, sess] of this.sessions) {
            sess.dead = true;
            sess.sock?.destroy();
            this.sessions.delete(key);
            closed++;
        }
        if (closed) console.log(`[Tunnel/C] Closed ${closed} SOCKS5 session(s)`);
    }

    // ── TUN packet forwarding (server mode) ────────────────────────────────────

    _initSnatPool() {
        if (this._snatPool) return;
        this._snatPool = [];
        // Server's bale0 holds 10.8.0.1 — skip it. Reserve 10.8.0.255 for
        // broadcast. Each client gets a unique address from .2..254 so the
        // kernel's MASQUERADE conntrack can disambiguate concurrent flows.
        for (let i = 2; i < 255; i++) this._snatPool.push(`10.8.0.${i}`);
    }

    _allocSnat(lk) {
        this._initSnatPool();
        const ip = this._snatPool.shift();
        if (!ip) return null;
        this._snatByLk.set(lk, ip);
        this._lkBySnat.set(ip, lk);
        return ip;
    }

    _freeSnat(lk) {
        const ip = this._snatByLk.get(lk);
        if (!ip) return;
        this._snatByLk.delete(lk);
        this._lkBySnat.delete(ip);
        // Push back to the END of the queue so a recently freed IP doesn't
        // get re-leased immediately — gives kernel conntrack time to age out
        // stale entries before the same IP is handed to a new client.
        this._snatPool.push(ip);
    }

    _handleTunPacket(data, lk) {
        if (!this._tunFd) this._setupTun();
        // Drop packets destined for the TUN subnet (10.8.0.0/24) — clients
        // must not reach each other or the gateway via the tunnel.
        if (data.length >= 20 && (data[0] >> 4) === 4 &&
            data[16] === 10 && data[17] === 8 && data[18] === 0) return;
        // Upload rate limit (client → internet). Drop on empty bucket; TCP-in-
        // tunnel will retransmit.
        if (lk._upBucket && !lk._upBucket.take(data.length)) return;
        // SNAT inbound: every client locally configures src=10.8.0.2, so
        // rewrite to its allocated unique IP before handing off to the kernel.
        const snat = this._snatByLk.get(lk);
        if (!snat) return;   // no lease — should not normally happen
        rewriteIp(data, 12, snat);
        if (this._tunFd !== null) {
            this._tunRxPkts++; this._tunRxBytes += data.length;
            fs.write(this._tunFd, data, (err) => {
                if (err) console.error('[TUN] Write error:', err.message);
            });
        }
    }

    _setupTun() {
        if (this._tunFd !== null) return;
        try {
            const tun = require('./tun');
            try { execSync('ip tuntap del dev bale0 mode tun', { stdio: 'pipe' }); } catch (_) {}
            this._tunFd = tun.open('bale0');
            console.log('[TUN] Opened bale0');
            tun.configure('bale0', '10.8.0.1', 24);
            console.log('[TUN] bale0 up  10.8.0.1/24');
            try {
                fs.writeFileSync('/proc/sys/net/ipv4/ip_forward', '1');
                console.log('[TUN] ip_forward enabled');
            } catch (e) {
                console.warn('[TUN] Could not enable ip_forward:', e.message);
            }
            try {
                execSync(
                    'iptables -t nat -C POSTROUTING -s 10.8.0.0/24 -j MASQUERADE 2>/dev/null' +
                    ' || iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE',
                    { stdio: 'pipe' }
                );
                console.log('[TUN] NAT rule ready');
            } catch (_) {
                console.warn('[TUN] Could not add iptables NAT rule — run manually:');
                console.warn('      sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE');
            }
            if (!this._tunReadRunning) {
                this._tunReadRunning = true;
                this._tunReadLoop();
            }
        } catch (e) {
            console.error('[TUN] Setup failed:', e.message);
            this._tunFd = null;
        }
    }

    _tunReadLoop() {
        const buf = Buffer.alloc(65536);
        const read = () => {
            if (this._tunFd === null) { this._tunReadRunning = false; return; }
            fs.read(this._tunFd, buf, 0, buf.length, null, (err, n) => {
                if (err) {
                    console.error('[TUN] Read error:', err.message);
                    this._tunReadRunning = false;
                    return;
                }
                if (n > 0 && (buf[0] >> 4) === 4) {
                    // Route by destination IP — return packets for SNAT'd flows
                    // arrive with dst = the client's leased IP. Rewrite back to
                    // the address the client expects (10.8.0.2) before shipping.
                    const dst = `${buf[16]}.${buf[17]}.${buf[18]}.${buf[19]}`;
                    const lk  = this._lkBySnat.get(dst);
                    // Download rate limit (internet → client). Drop on empty bucket.
                    if (lk && (!lk._downBucket || lk._downBucket.take(n))) {
                        rewriteIp(buf, 16, '10.8.0.2');
                        this._tunTxPkts++; this._tunTxBytes += n;
                        lk._txPkts++; lk._txBytes += n;
                        lk.sendLossy(lkEncode({ t: 'I', data: Buffer.from(buf.slice(0, n)) }));
                    }
                    // Packets to addresses with no lease (or non-IPv4) are dropped silently.
                }
                read();
            });
        };
        read();
    }

    // ── Server side ────────────────────────────────────────────────────────────

    _srvMsg(msg, fromKey, lk) {
        const { t, s: sid } = msg;
        const key = `${fromKey}:${sid}`;

        if (t === 'C') {
            const { h: host, p: port } = msg;
            console.log(`[Tunnel/S] ${key} TCP → ${host}:${port}`);
            const socket = net.connect({ host, port });
            const fromUid = lk ? null : Number(fromKey);
            const sess = { key, host, port, socket, fromUid, lk: lk || null, txSeq: 0, rxBuf: new Map(), rxNext: 0, dead: false, txBytes: 0, rxBytes: 0 };
            this.sessions.set(key, sess);

            socket.setNoDelay(true);
            socket.once('connect', () => {
                console.log(`[Tunnel/S] ${key} TCP ✓ ${host}:${port}`);
                this._srvSend(sess, { t: 'A', s: sid, ok: true });

                if (sess.lk) {
                    socket.on('data', chunk => {
                        sess.rxBytes += chunk.length;
                        for (let i = 0; i < chunk.length; i += LK_CHUNK) {
                            const frame = lkEncode({ t: 'D', s: sid, data: chunk.slice(i, i + LK_CHUNK) });
                            sess.lk._txPkts++; sess.lk._txBytes += frame.length;
                            sess.lk.send(frame);
                        }
                        if (sess.lk.pressured && !socket.isPaused()) {
                            socket.pause();
                            if (!sess.lk._drainPending) {
                                sess.lk._drainPending = true;
                                sess.lk.onDrain = () => {
                                    for (const s of this.sessions.values()) {
                                        if (s.lk === sess.lk && !s.dead && s.socket?.isPaused())
                                            s.socket.resume();
                                    }
                                };
                            }
                        }
                    });
                } else {
                    socket.on('data', chunk => {
                        sess.rxBytes += chunk.length;
                        for (let i = 0; i < chunk.length; i += CHUNK_SIZE) {
                            const slice = chunk.slice(i, i + CHUNK_SIZE);
                            this._srvSend(sess, { t: 'D', s: sid, q: sess.txSeq++, d: slice.toString('base64') });
                        }
                    });
                }

                socket.on('end',   () => this._srvClose(key, sid, 'remote end'));
                socket.on('error', e  => this._srvClose(key, sid, e.message));
                socket.on('close', () => this._srvClose(key, sid, 'closed'));
            });
            socket.once('error', err => {
                if (!this.sessions.has(key)) return;
                console.error(`[Tunnel/S] ${key} TCP ✗ ${host}:${port} — ${err.message}`);
                this._srvSend(sess, { t: 'A', s: sid, ok: false });
                this.sessions.delete(key);
            });

        } else if (t === 'D') {
            const sess = this.sessions.get(key);
            if (!sess || sess.dead) return;
            if (msg.data) {
                sess.txBytes += msg.data.length;
                if (!sess.socket.destroyed) sess.socket.write(msg.data);
            } else {
                sess.rxBuf.set(msg.q, Buffer.from(msg.d, 'base64'));
                while (sess.rxBuf.has(sess.rxNext)) {
                    const buf = sess.rxBuf.get(sess.rxNext);
                    sess.txBytes += buf.length;
                    sess.rxBuf.delete(sess.rxNext++);
                    if (!sess.socket.destroyed) sess.socket.write(buf);
                }
            }

        } else if (t === 'U') {
            console.log(`[Tunnel/S] ${key} UDP → ${msg.h}:${msg.p} ${msg.data?.length ?? 0}B`);
            const sock = dgram.createSocket('udp4');
            sock.send(msg.data, msg.p, msg.h, () => {});
            sock.once('message', resp => {
                this._srvSend({ lk: lk || null, fromUid: lk ? null : Number(fromKey) },
                    { t: 'U', s: sid, h: msg.h, p: msg.p, data: resp });
                sock.close();
            });
            setTimeout(() => { try { sock.close(); } catch {} }, 5000);

        } else if (t === 'X') {
            const sess = this.sessions.get(key);
            if (sess) {
                sess.dead = true;
                sess.socket.destroy();
                this.sessions.delete(key);
                console.log(`[Tunnel/S] ${key} TCP ✕ ${sess.host}:${sess.port} (client)  ↑${sess.txBytes}B ↓${sess.rxBytes}B`);
            } else {
                console.log(`[Tunnel/S] ${key} TCP ✕ (already closed)`);
            }
        }
    }

    _srvClose(key, sid, reason = 'unknown') {
        const sess = this.sessions.get(key);
        if (!sess || sess.dead) return;
        sess.flush?.();
        sess.dead = true;
        if (sess.lk) {
            const xframe = lkEncode({ t: 'X', s: sid });
            sess.lk._txPkts++; sess.lk._txBytes += xframe.length;
            sess.lk.send(xframe);
        } else {
            this.getBale()
                .then(ws => ws?.sendText(sess.fromUid, PEERTYPE_PRIVATE, tunnelEncode({ t: 'X', s: sid })))
                .catch(err => console.error('[Tunnel] send:', err.message));
        }
        this.sessions.delete(key);
        console.log(`[Tunnel/S] ${key} TCP ✕ ${sess.host}:${sess.port} (${reason})  ↑${sess.txBytes}B ↓${sess.rxBytes}B`);
    }

    _srvSend(sess, obj) {
        if (sess.lk) {
            const encoded = lkEncode(obj);
            sess.lk._txPkts++; sess.lk._txBytes += encoded.length;
            if (obj.t === 'A' || obj.t === 'U') sess.lk.sendUrgent(encoded);
            else sess.lk.send(encoded);
        } else {
            this.getBale()
                .then(ws => ws?.sendText(sess.fromUid, PEERTYPE_PRIVATE, tunnelEncode(obj)))
                .catch(err => console.error('[Tunnel] send:', err.message));
        }
    }

    // ── Client side ────────────────────────────────────────────────────────────

    _startSocks5() {
        this.socks5Srv = net.createServer(sock => this._handleSocks5(sock));
        this.socks5Srv.listen(this.socks5Port, '127.0.0.1', () =>
            console.log(`[SOCKS5] 127.0.0.1:${this.socks5Port}`)
        );
        this.socks5Srv.on('error', err => console.error('[SOCKS5]', err.message));
    }

    _handleSocks5(sock) {
        sock.once('data', buf => {
            if (buf[0] !== 0x05) { sock.destroy(); return; }
            sock.write(Buffer.from([0x05, 0x00]));

            sock.once('data', req => {
                if (req[0] !== 0x05 || req[1] !== 0x01) {
                    sock.write(Buffer.from([0x05, 0x07, 0x00, 0x01, 0,0,0,0, 0,0]));
                    sock.destroy(); return;
                }
                let host, port;
                try {
                    const atyp = req[3];
                    if (atyp === 0x01) {
                        host = `${req[4]}.${req[5]}.${req[6]}.${req[7]}`;
                        port = req.readUInt16BE(8);
                    } else if (atyp === 0x03) {
                        const len = req[4];
                        host = req.slice(5, 5 + len).toString();
                        port = req.readUInt16BE(5 + len);
                    } else if (atyp === 0x04) {
                        const parts = [];
                        for (let i = 4; i < 20; i += 2) parts.push(req.readUInt16BE(i).toString(16));
                        host = parts.join(':');
                        port = req.readUInt16BE(20);
                    } else {
                        sock.write(Buffer.from([0x05, 0x08, 0x00, 0x01, 0,0,0,0, 0,0]));
                        sock.destroy(); return;
                    }
                } catch { sock.destroy(); return; }

                if (!this.serverPeer) {
                    sock.write(Buffer.from([0x05, 0x01, 0x00, 0x01, 0,0,0,0, 0,0]));
                    sock.destroy(); return;
                }

                const sid  = makeSid();
                const sess = { sid, sock, txSeq: 0, rxBuf: new Map(), rxNext: 0, ready: false, queue: [], dead: false };
                this.sessions.set(sid, sess);
                console.log(`[Tunnel/C] ${sid} CONNECT ${host}:${port}`);

                sock.pause();
                this._cliSend({ t: 'C', s: sid, h: host, p: port });

                sock.on('data', chunk => {
                    if (!sess.ready) { sess.queue.push(chunk); return; }
                    const chunkSize = this.transport === 'webrtc' ? LK_CHUNK : CHUNK_SIZE;
                    for (let i = 0; i < chunk.length; i += chunkSize) {
                        const slice = chunk.slice(i, i + chunkSize);
                        this._cliSend(this.transport === 'webrtc'
                            ? { t: 'D', s: sid, data: slice }
                            : { t: 'D', s: sid, q: sess.txSeq++, d: slice.toString('base64') });
                    }
                });
                sock.on('end',   () => this._cliClose(sid));
                sock.on('error', () => this._cliClose(sid));
            });
        });
    }

    _cliMsg(msg) {
        const { t, s: sid } = msg;
        const sess = this.sessions.get(sid);
        if (!sess) return;

        if (t === 'A') {
            if (msg.ok) {
                sess.sock.write(Buffer.from([0x05, 0x00, 0x00, 0x01, 0,0,0,0, 0,0]));
                sess.ready = true;
                const chunkSize = this.transport === 'webrtc' ? LK_CHUNK : CHUNK_SIZE;
                for (const chunk of sess.queue)
                    for (let i = 0; i < chunk.length; i += chunkSize) {
                        const slice = chunk.slice(i, i + chunkSize);
                        this._cliSend(this.transport === 'webrtc'
                            ? { t: 'D', s: sid, data: slice }
                            : { t: 'D', s: sid, q: sess.txSeq++, d: slice.toString('base64') });
                    }
                sess.queue = [];
                sess.sock.resume();
            } else {
                sess.sock.write(Buffer.from([0x05, 0x05, 0x00, 0x01, 0,0,0,0, 0,0]));
                sess.dead = true; sess.sock.destroy(); this.sessions.delete(sid);
            }

        } else if (t === 'D') {
            if (msg.data) {
                if (!sess.sock.destroyed) sess.sock.write(msg.data);
            } else {
                sess.rxBuf.set(msg.q, Buffer.from(msg.d, 'base64'));
                while (sess.rxBuf.has(sess.rxNext)) {
                    const buf = sess.rxBuf.get(sess.rxNext);
                    sess.rxBuf.delete(sess.rxNext++);
                    if (!sess.sock.destroyed) sess.sock.write(buf);
                }
            }

        } else if (t === 'X') {
            sess.dead = true; sess.sock.end(); this.sessions.delete(sid);
        }
    }

    _cliClose(sid) {
        const sess = this.sessions.get(sid);
        if (!sess || sess.dead) return;
        sess.dead = true;
        this._cliSend({ t: 'X', s: sid });
        this.sessions.delete(sid);
    }

    _cliSend(obj) {
        if (this.transport === 'webrtc') {
            if (this.lkTransport) {
                const encoded = lkEncode(obj);
                this.lkTransport._txPkts++;
                this.lkTransport._txBytes += encoded.length;
                this.lkTransport.send(encoded);
            }
        } else if (this.serverPeer) {
            this.getBale()
                .then(ws => ws?.sendText(this.serverPeer.id, this.serverPeer.type, tunnelEncode(obj)))
                .catch(err => console.error('[Tunnel] send:', err.message));
        }
    }

    hangUpAll() {
        if (this._tunStatsTimer) { clearInterval(this._tunStatsTimer); this._tunStatsTimer = null; }
        if (this.lkRooms.size) {
            console.log(`[Tunnel/S] Hanging up ${this.lkRooms.size} LiveKit room(s)`);
            for (const lk of this.lkRooms.values()) lk.disconnect();   // → frees SNAT
            this.lkRooms.clear();
        }
        // Defensive: any leases that somehow survived (e.g. from a crashed
        // teardown) are reclaimed here. _freeSnat is idempotent.
        for (const lk of [...this._snatByLk.keys()]) this._freeSnat(lk);
        if (this.sessions.size) {
            console.log(`[Tunnel/S] Closing ${this.sessions.size} session(s)`);
            for (const sess of this.sessions.values()) {
                sess.dead = true;
                sess.socket?.destroy();
                sess.sock?.destroy();
            }
            this.sessions.clear();
        }
    }

    _stopAll() {
        // Bump _gen so any in-flight startWebRtcTunnel sees cancelled() === true
        // on its next await and bails before mutating state.
        this._gen++;
        if (this._reconnectTimer) { clearTimeout(this._reconnectTimer); this._reconnectTimer = null; }
        this._reconnectAttempt = 0;
        this._noReconnect      = false;
        this._callIds.clear();
        this._callEndedRemover?.(); this._callEndedRemover = null;
        this._callId = null;
        // Clear mode/serverPeer/lkTransport BEFORE the LK teardown — its
        // synchronous onDisconnected fires _scheduleReconnect, which gates on
        // these. Leaving them set would arm a phantom reconnect.
        this.mode       = null;
        this.serverPeer = null;
        if (this.socks5Srv) { this.socks5Srv.close(); this.socks5Srv = null; }
        if (this.lkTransport) {
            const lk = this.lkTransport;
            this.lkTransport = null;
            lk.disconnect();
        }
        this.hangUpAll();
    }
}

module.exports = { TunnelManager };
