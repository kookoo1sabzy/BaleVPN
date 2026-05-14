'use strict';

// TunnelManager — Bale call admission + lktunnel handle lifecycle.
//
// Server-only since the napi-binding port: client SOCKS5 mode + all
// proxy-frame multiplexing (`C/A/D/X/U`) are gone — they only made
// sense on the old SCTP data-channel transport, which doesn't exist
// any more on the RTP carrier. The TUN-side packet processing and
// SNAT pool moved into Rust (`lktunnel::server::tun_gateway`); JS
// no longer touches IP packets in either NAT mode.
//
// Two NAT shapes, selected via `--nat-mode` and the `NAT_MODE` const:
//
//   kernel    — one shared `bale0` TUN device, opened + configured
//               here at server boot, handed to a `TunGateway`. Per
//               call we `gw.register(t)` to allocate a `10.8.0.X`
//               SNAT lease. Linux only — the napi binding's openTun
//               is gated to Linux because Darwin's `utun` needs a
//               different ioctl path we haven't ported yet.
//   userspace — no TUN at all. Per call we `t.startServer()` and
//               lktunnel's in-Rust userspace NAT bridges peer IP
//               packets directly to host TCP/UDP sockets. Works on
//               every platform; required on Windows.
//
// What this file still owns:
//   - the pending / admission / blacklist gating flow on incoming
//     calls (Bale-protocol level, identical to BaleServerService on
//     Android)
//   - the Bale-WS `acceptCall` → `discardCall` plumbing on success
//     / capacity reject / timeout
//   - the `lkRooms` map external consumers iterate (http-server.js
//     scans it for the active-clients UI panel)
//
// What's gone:
//   - `LiveKitTransport`, `lkEncode` / `lkDecode`
//   - `_handleTunPacket`, `_tunReadLoop`, `_setupTun*`, `_teardownTun`
//   - `_allocSnat`, `_freeSnat`, `_snatByLk`, `_lkBySnat`
//   - `_srvMsg`, `_srvClose`, `_srvSend`, `_srvBackpressure`, `_cliMsg`
//   - client mode (`startWebRtcTunnel`, SOCKS5 listener, `_callId`,
//     `_callIds`, `_rejected`, `_gen`)
//   - the legacy "tunnel over Bale text messages" framing
//     (`tunnelEncode` / `tunnelDecode`)

const { execSync } = require('child_process');

const {
    NAT_MODE,
    PEER_TIMEOUT_MS, PENDING_TIMEOUT_MS, PENDING_SWEEP_MS,
    MAX_CLIENTS_DEFAULT, MAX_CLIENTS_LIMIT,
    TUN_MTU,
} = require('./constants');
const { AdmissionStore } = require('./admission');
const { BlacklistStore } = require('./blacklist');
const { ConfigStore }    = require('./config-store');

// napi binding to lktunnel-rust. Built by `npm run build:native`;
// the loader script (`rust/lktunnel-node/index.js`) picks the
// right platform `.node` file. We require lazily so a missing
// build produces a clear error at server-start time rather than
// at module-import time on `bale-proxy.js`'s side.
let _lk = null;
function lk() {
    if (_lk) return _lk;
    try {
        _lk = require('../rust/lktunnel-node');
    } catch (e) {
        const msg = (e && e.message) || String(e);
        throw new Error(
            `lktunnel-node native binding not loadable — run \`npm run build:native\` first. ${msg}`);
    }
    return _lk;
}

function getMaxClients() {
    const v = ConfigStore.get('maxClients');
    if (typeof v === 'number') return Math.max(1, Math.min(MAX_CLIENTS_LIMIT, v));
    return MAX_CLIENTS_DEFAULT;
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
        this.mode = null;                     // 'server' | null  (client mode gone)
        // Field-name preserved for http-server.js compatibility — the
        // entries are now `ClientInfo` records, not `LiveKitTransport`
        // instances, but the read-side code only touches `_callerId`,
        // `_callerName`, `_connectedAt`, and the rxP/B/txP/B counters,
        // all of which we preserve verbatim.
        this.lkRooms        = new Map();
        this.pendingMap     = new Map();
        this._pendingSweep  = null;
        // Kernel-NAT-mode shared TUN state.
        this._gateway       = null;           // TunGateway handle (kernel mode only)
        this._tunFd         = null;           // raw fd of bale0 (kernel mode only)
        this._tunName       = null;           // 'bale0' (kernel mode only)
    }

    configure(mode) {
        this._stopAll();
        this.mode = mode || null;
        if (mode === 'server' && NAT_MODE === 'kernel') {
            this._setupKernelTun();
            // Don't silently fall back to userspace if kernel was
            // requested — the operator explicitly asked for it
            // (default on Linux/macOS, opt-in elsewhere), so the
            // right move is to refuse to come up rather than
            // accept calls that look like they're working but
            // route via a different NAT shape. macOS hits this
            // because the Darwin kernel-TUN path isn't wired yet;
            // pass `--nat-mode=userspace` to override.
            if (!this._gateway) {
                console.error(
                    `[Tunnel/S] kernel NAT requested (--nat-mode=kernel) but \
unavailable on this platform/host. Refusing to start. Use \
'--nat-mode=userspace' to switch.`);
                process.exit(1);
            }
        }
        console.log(`[Tunnel] configure mode=${mode || 'none'} nat-mode=${NAT_MODE}`);
    }

    /** Bale WS landed handshake — for kernel mode we set the TUN up
     *  eagerly at `configure` so there's nothing to do here, but the
     *  hook stays in the API contract for symmetry with the old
     *  flow / Android. */
    onWsReady() {}

    status() {
        return {
            mode:        this.mode || 'none',
            natMode:     NAT_MODE,
            transport:   'rtp',
            lkActive:    this.lkRooms.size > 0,
            lkRooms:     this.lkRooms.size,
        };
    }

    clients() {
        const list = [];
        for (const [callKey, c] of this.lkRooms) {
            const stats = (() => {
                try { return c._tunnel.stats(); } catch (_) { return [0, 0, 0, 0]; }
            })();
            list.push({
                callKey,
                callerId:     c._callerId   || 0,
                callerName:   c._callerName || null,
                snatIp:       c._lease ? `10.8.0.${c._lease}` : null,
                isTunClient:  c._lease != null,
                connectedAt:  c._connectedAt,
                rxPkts:  stats[0],  rxBytes: stats[1],
                txPkts:  stats[2],  txBytes: stats[3],
            });
        }
        return list;
    }

    disconnectClient(callKey) {
        const c = this.lkRooms.get(callKey);
        if (!c) return false;
        // Disconnect fires a 'Disconnected' event back through onEvent
        // which removes the entry + releases the SNAT lease. We DON'T
        // delete from lkRooms here to keep all teardown in one path.
        try { c._tunnel.disconnect(); } catch (_) {}
        return true;
    }

    /** Bulk teardown of all active + pending calls. Caller passes the
     *  WS directly to avoid `resolveWs()`'s side effect of clearing
     *  the user-initiated-disconnect flag. */
    async disconnectAllClients(ws) {
        if (this.mode !== 'server') return;
        const sendDiscard = (id) =>
            (ws && ws.ready) ? ws.discardCall(id).catch(() => {}) : Promise.resolve();
        const promises = [];
        for (const [, p] of this.pendingMap) promises.push(sendDiscard(p.callId));
        this.pendingMap.clear();
        if (this._pendingSweep) { clearInterval(this._pendingSweep); this._pendingSweep = null; }
        for (const [callKey, c] of this.lkRooms) {
            promises.push(sendDiscard(callKey));
            try { c._tunnel.disconnect(); } catch (_) {}
        }
        this.lkRooms.clear();
        await Promise.all(promises);
    }

    /** Legacy Bale-text-message tunnel hook — kept as a no-op so
     *  bale-ws.js's per-message gate still has something to call.
     *  Old code multiplexed SOCKS5 here; new code never does. */
    handleIncoming(_text, _fromUid) {
        return false;
    }

    // ── Admission / pending flow ────────────────────────────────────────

    async onCallReceived(callId, callEntity) {
        if (this.mode !== 'server') return;
        const callKey  = String(callId);
        const callerId = Number(callEntity?.callerId || 0);

        if (this.lkRooms.has(callKey)) {
            console.log(`[Tunnel/S] duplicate call notification for ${callId} — ignoring`);
            return;
        }
        if (!callerId) {
            console.log(`[Tunnel/S] call ${callId} arrived without callerId — deferring (server pushes both 52810 + 52807; we wait for the one carrying adminUid)`);
            return;
        }

        if (BlacklistStore.isBlocked(callerId)) {
            console.log(`[Tunnel/S] rejecting blacklisted caller ${callerId} (call ${callId})`);
            this.getBale().then(ws => ws?.discardCall(callId)).catch(() => {});
            return;
        }

        const maxClients = getMaxClients();
        if (this.lkRooms.size >= maxClients) {
            console.log(`[Tunnel/S] rejecting caller ${callerId} — at capacity ${this.lkRooms.size}/${maxClients}`);
            this.getBale().then(ws => ws?.discardCall(callId)).catch(() => {});
            return;
        }

        if (AdmissionStore.isAllowed(callerId)) {
            this.pendingMap.delete(callKey);
            await this._handleCall(callId, callerId, callEntity);
            return;
        }

        // Not allowed → queue as pending and wait for the user (or
        // sweep timer). Dedupe duplicate pending entries from the same
        // caller to keep the UI panel one-row-per-caller.
        for (const [k, p] of this.pendingMap) {
            if (p.callerId === callerId) {
                console.log(`[Tunnel/S] replacing duplicate pending call ${p.callId} from caller ${callerId}`);
                this.pendingMap.delete(k);
                this.getBale().then(ws => ws?.discardCall(p.callId)).catch(() => {});
                break;
            }
        }
        let callerName = null;
        try {
            const ws = await this.getBale();
            callerName = await ws?.lookupContactName(callerId);
        } catch (_) {}
        this.pendingMap.set(callKey, {
            callId:     callKey,
            callerId,
            callerName,
            receivedAt: Date.now(),
            _entity:    callEntity || null,
        });
        this._startPendingSweep();
        const label = callerName ? `${callerName} (${callerId})` : `caller ${callerId}`;
        console.log(`[Tunnel/S] call ${callId} from ${label} → PENDING (awaiting admission)`);
    }

    _startPendingSweep() {
        if (this._pendingSweep) return;
        this._pendingSweep = setInterval(() => {
            const now = Date.now();
            for (const [, p] of this.pendingMap) {
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
        const maxClients = getMaxClients();
        if (this.lkRooms.size >= maxClients) {
            console.log(`[Tunnel/S] cannot accept pending ${callId} — at capacity ${this.lkRooms.size}/${maxClients}`);
            const ws = await this.getBale();
            try { await ws?.discardCall(callId); } catch (_) {}
            return false;
        }
        if (addToList && pending.callerId) AdmissionStore.add(pending.callerId);
        await this._handleCall(callId, pending.callerId, pending._entity);
        return true;
    }

    async rejectPending(callId, addToBlacklist = false) {
        const callKey = String(callId);
        const pending = this.pendingMap.get(callKey);
        if (!pending) return false;
        this.pendingMap.delete(callKey);
        console.log(`[Tunnel/S] rejecting call ${callId} from caller ${pending.callerId} block=${addToBlacklist}`);
        const ws = await this.getBale();
        try { await ws?.discardCall(callId); } catch (_) {}
        if (addToBlacklist && pending.callerId) BlacklistStore.add(pending.callerId);
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

    // ── Call handling ──────────────────────────────────────────────────

    /** Accept the call via WS, create the Rust Tunnel, install the
     *  NAT path (kernel-gateway register OR userspace startServer),
     *  store in `lkRooms`. The Disconnected event handler removes
     *  the entry and (kernel mode only) releases the SNAT lease. */
    async _handleCall(callId, callerId, callEntity) {
        const callKey = String(callId);
        const ws = await this.getBale();
        if (!ws) { console.error('[Tunnel/S] AcceptCall: no WS available'); return; }

        let accepted;
        try { accepted = await ws.acceptCall(callId); }
        catch (e) { console.error('[Tunnel/S] AcceptCall failed:', e.message); return; }

        // AcceptCall returns the wrapped `{ call: CallEntity, seq }`
        // envelope — unwrap to the inner entity. We treat the call as
        // LiveKit whenever it carries both an LK-style url + a JWT,
        // not based on the `isLivekit` bool: Bale sometimes returns
        // the bool as false on the wire even when everything else
        // about the response is unmistakably LK-shaped.
        const call = accepted?.call || {};
        const tokenLooksValid = !!call.token && call.token.split('.').length === 3;
        const urlLooksLikeLk  = !!call.url && /^wss?:\/\//.test(call.url);
        if (!(tokenLooksValid && urlLooksLikeLk)) {
            console.warn(`[Tunnel/S] no LK creds for ${callId} (token=${!!call.token} url=${call.url || ''})`);
            return;
        }

        // Dedup: new call from same caller wins. Tear down any existing
        // room from this callerId locally (no `discardCall` — Bale's
        // discardCall scopes at the caller↔callee session level and
        // would also kill the new call).
        if (callerId) {
            for (const [k, info] of this.lkRooms) {
                if (info._callerId === callerId) {
                    console.log(`[Tunnel/S] replacing existing client ${k} from caller ${callerId} with ${callKey}`);
                    try { info._tunnel.disconnect(); } catch (_) {}
                    this.lkRooms.delete(k);
                }
            }
        }

        // Resolve caller name once. Cached by BaleWsClient so subsequent
        // calls from the same uid are free.
        let callerName = null;
        try { callerName = await ws.lookupContactName(callerId); } catch (_) {}

        console.log(`[Tunnel/S] LiveKit call ${callId} caller=${callerId} (${callerName || 'unknown'}) room=${call.room || ''} url=${call.url}`);

        // The Rust `start_server` / `gateway.register` checks the
        // `connected` flag and errors with `not connected` if called
        // before the LK room handshake completes. `Tunnel.connect` is
        // non-blocking, so we *can't* call activate inline — defer it
        // to the first `Connected`/`PeerJoined` event.
        let hasPeer  = false;
        let activated = false;
        const activate = () => {
            if (activated) return;
            activated = true;
            const entry = this.lkRooms.get(callKey);
            // Guard against the entry being torn down by a racing
            // disconnect before activation fired.
            if (!entry || entry._tunnel !== t) return;
            try {
                if (NAT_MODE === 'kernel' && this._gateway) {
                    entry._lease = this._gateway.register(t);
                    console.log(`[Tunnel/S] kernel-mode lease 10.8.0.${entry._lease} for ${callKey} caller=${callerId}`);
                } else {
                    t.startServer();
                    console.log(`[Tunnel/S] userspace NAT for ${callKey} caller=${callerId}`);
                }
            } catch (e) {
                console.error(`[Tunnel/S] NAT activation failed: ${e.message}`);
                try { t.disconnect(); } catch (_) {}
                this.getBale().then(w => w?.discardCall(callId)).catch(() => {});
            }
        };

        const onEvent = (kind, info) => {
            switch (kind) {
                case 'Connected':
                case 'PeerJoined':
                    hasPeer = true;
                    activate();
                    break;
                case 'PeerLeft':
                    // Single-peer tunnel — any peer leaving means the
                    // counterparty is gone. Rust core will follow up
                    // with Disconnected when its empty-room probe fires.
                    break;
                case 'Disconnected':
                case 'Error':
                    this._cleanupCall(callKey, t, info);
                    break;
            }
        };

        const t = lk().Tunnel.connect(call.url, call.token, onEvent);

        // Stash the entry immediately so the UI sees an in-flight
        // client and the dedup loop on subsequent calls can find it.
        // `_lease` is populated when `activate()` runs.
        this.lkRooms.set(callKey, {
            _tunnel:      t,
            _callKey:     callKey,
            _callerId:    callerId,
            _callerName:  callerName,
            _connectedAt: Date.now(),
            _lease:       null,
        });

        // Peer-join watchdog. The Rust core also has a 30 s peer-wait
        // internally; ours fires earlier (PEER_TIMEOUT_MS = 10 s by
        // default) so the call doesn't sit half-connected for the full
        // SFU timeout when the peer just disappears.
        setTimeout(() => {
            const cur = this.lkRooms.get(callKey);
            if (cur && cur._tunnel === t && !hasPeer) {
                console.log(`[Tunnel/S] peer never joined ${callId} within ${PEER_TIMEOUT_MS / 1000}s — disconnecting`);
                try { t.disconnect(); } catch (_) {}
                this.getBale().then(w => w?.discardCall(callId)).catch(() => {});
            }
        }, PEER_TIMEOUT_MS);
    }

    /** Common cleanup path: drop from lkRooms, release SNAT lease.
     *  Safe to call multiple times — the `cur._tunnel === t` identity
     *  check avoids removing an entry that's been replaced by a fresh
     *  call from the same caller. */
    _cleanupCall(callKey, tunnel, reason) {
        const cur = this.lkRooms.get(callKey);
        if (!cur || cur._tunnel !== tunnel) return;   // stale event
        this.lkRooms.delete(callKey);
        if (cur._lease != null && this._gateway) {
            try { this._gateway.unregister(tunnel); } catch (_) {}
        }
        const who = cur._callerName ? `${cur._callerName} (${cur._callerId})` : `caller ${cur._callerId}`;
        console.log(`[Tunnel/S] ${who} disconnected callKey=${callKey}${reason ? ` reason=${reason}` : ''}`);
    }

    // ── Kernel-mode TUN bring-up / tear-down ───────────────────────────

    _setupKernelTun() {
        if (this._gateway) return;
        if (process.platform !== 'linux') {
            console.warn(`[Tunnel/S] kernel TUN unsupported on ${process.platform}; per-call traffic will fall through to userspace NAT`);
            return;
        }
        try {
            const binding = lk();
            this._tunName = 'bale0';
            this._tunFd   = binding.openTun(this._tunName);
            binding.configureIf(this._tunName, '10.8.0.1', 24, TUN_MTU);
            this._gateway = binding.TunGateway.attach(this._tunFd);
            this._installLinuxRouting();
            console.log(`[Tunnel/S] kernel TUN gateway up: ${this._tunName} 10.8.0.1/24 MTU=${TUN_MTU}`);
        } catch (e) {
            console.error(`[Tunnel/S] kernel TUN setup failed: ${e.message}`);
            // Leave _gateway null — per-call code path falls through to
            // userspace NAT, which still works.
            this._gateway = null;
            this._tunFd   = null;
            this._tunName = null;
        }
    }

    _installLinuxRouting() {
        // Both ip_forward and iptables -t nat require root, but the
        // Node process runs as the unprivileged user with just
        // `cap_net_admin` on the binary (enough for the TUN ioctls
        // we do in-process; not inherited by `execSync` subprocesses).
        // So we treat these as best-effort: try, and if they fail,
        // verify whether the host has them set already from a prior
        // one-time operator setup. Refuse to keep going if forwarding
        // isn't on — packets would otherwise vanish silently.
        const sh = (cmd) => execSync(cmd, { stdio: 'pipe', shell: '/bin/sh' });

        try { sh('sysctl -w net.ipv4.ip_forward=1'); } catch (_) {}
        let forwardOn = false;
        try {
            forwardOn = require('fs')
                .readFileSync('/proc/sys/net/ipv4/ip_forward', 'utf8').trim() === '1';
        } catch (_) {}
        if (!forwardOn) {
            console.error(
                "[Tunnel/S] net.ipv4.ip_forward is OFF and we can't enable it " +
                "(non-root). Run once as root:\n" +
                "    sudo sysctl -w net.ipv4.ip_forward=1\n" +
                "    echo 'net.ipv4.ip_forward = 1' | sudo tee /etc/sysctl.d/99-bale-vpn.conf");
            process.exit(1);
        }

        try {
            sh('iptables -t nat -C POSTROUTING -s 10.8.0.0/24 -j MASQUERADE');
            return;  // rule already present
        } catch (_) {}
        try {
            sh('iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE');
            return;  // we managed to install it
        } catch (_) {}
        console.error(
            "[Tunnel/S] iptables MASQUERADE rule missing and we can't " +
            "install it (non-root). Run once as root:\n" +
            "    sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE\n" +
            "Then restart this process.");
        process.exit(1);
    }

    _teardownTun() {
        if (this._gateway) {
            try { this._gateway.close(); } catch (_) {}
            this._gateway = null;
        }
        // close() inside the gateway already closed the fd.
        this._tunFd   = null;
        this._tunName = null;
    }

    _stopAll() {
        for (const [, c] of this.lkRooms) {
            try { c._tunnel.disconnect(); } catch (_) {}
        }
        this.lkRooms.clear();
        this.pendingMap.clear();
        if (this._pendingSweep) { clearInterval(this._pendingSweep); this._pendingSweep = null; }
        this._teardownTun();
    }
}

module.exports = { TunnelManager };
