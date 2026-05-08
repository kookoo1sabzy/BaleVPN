'use strict';

// Entrypoint. Wires the singletons together (BaleWsClient + BaleConnection +
// HTTP server) and starts the lifecycle. Most logic lives in the per-domain
// modules; this file is just composition + startup.
//
//   constants.js   — config / enums shared across the rest
//   grpc-web.js    — HTTPS gRPC-web envelopes (auth + contact lookup) + JWT helpers
//   admission.js   — server-mode allow-list (file-backed)
//   wire-codecs.js — protobuf encoders/decoders for the WS frame protocol
//   livekit.js     — LiveKitTransport + binary lkEncode/lkDecode
//   tunnel.js      — TunnelManager (client SOCKS5 + server auto-answer + TUN)
//   bale-ws.js     — BaleWsClient (the singleton WS owner)
//   ui-html.js     — embedded web UI (HTML + UI JS)
//   http-server.js — HTTP routes (factory: create(client, connection))

// Prefix every log line with a compact local datetime (HH:MM:SS.mmm).
(function patchConsole() {
    const ts = () => new Date().toISOString().replace('T', ' ').slice(0, 23);
    for (const level of ['log', 'warn', 'error']) {
        const orig = console[level].bind(console);
        console[level] = (...args) => orig(`[${ts()}]`, ...args);
    }
})();

process.on('uncaughtException',  e => console.error('[Process] uncaughtException:',  e.message, e.stack));
process.on('unhandledRejection', e => console.error('[Process] unhandledRejection:', e?.message ?? e));

const { TUNNEL_MODE, HTTP_PORT, RUNTIME_DIR } = require('./constants');
const { BaleWsClient }           = require('./bale-ws');
const httpServer                 = require('./http-server');

// ── Single-instance guard ─────────────────────────────────────────────────────
//
// Two instances would compete for the same TUN device and trash each other's
// routing. We claim a PID lock file at startup; if another live instance
// already holds it, refuse to start. Stale locks (process died without
// cleaning up) are taken over after a `process.kill(pid, 0)` liveness probe.
(function acquireSingleInstanceLock() {
    const fs   = require('fs');
    const path = require('path');
    const lockPath = path.join(RUNTIME_DIR, '.bale-vpn.lock');

    if (fs.existsSync(lockPath)) {
        const txt = (() => { try { return fs.readFileSync(lockPath, 'utf8').trim(); } catch (_) { return ''; } })();
        const pid = parseInt(txt, 10);
        if (pid > 0 && pid !== process.pid) {
            // process.kill(pid, 0) throws ESRCH if the pid is gone; on Windows
            // it throws EPERM if owned by another user (still alive).
            let alive = false;
            try { process.kill(pid, 0); alive = true; }
            catch (e) { alive = (e.code === 'EPERM'); }
            if (alive) {
                console.error(`[Lock] Another instance is already running (pid=${pid}). Refusing to start.`);
                console.error(`[Lock] If you're sure no other instance is alive, delete ${lockPath} and retry.`);
                process.exit(1);
            }
            console.warn(`[Lock] Stale lock from dead pid=${pid} — taking over.`);
        }
    }
    try { fs.writeFileSync(lockPath, String(process.pid)); }
    catch (e) { console.error(`[Lock] Could not write ${lockPath}: ${e.message}`); process.exit(1); }

    // Best-effort cleanup. Removed by the SIGINT/SIGTERM handler below; this
    // catches `process.exit()` calls and normal termination paths.
    process.on('exit', () => {
        try {
            // Only remove if it's still ours — a successor instance that took
            // over our stale lock would have written its own PID.
            const txt = fs.readFileSync(lockPath, 'utf8').trim();
            if (parseInt(txt, 10) === process.pid) fs.unlinkSync(lockPath);
        } catch (_) {}
    });
})();

// ── BaleConnection ────────────────────────────────────────────────────────────
//
// Owns the single Bale WebSocket and decides when it should be up. Mirrors
// `ai.bale.proxy.BaleConnection` in the Android app — same desired-state rule,
// same `reconcile()` reconciliation pattern, same multi-subscriber model for
// call-event callbacks. A Node CLI process has no foreground/background, so
// the Android `isForeground` input collapses to a constant `true`.
//
// Inputs:
//   - mode (TUNNEL_MODE)        — 'client' | 'server'
//   - userInitiatedDisconnect   — sticky flag set by /disconnect, cleared by /connect
//   - tunnel.lkTransport        — analog of Android's BaleVpnService.isRunning
//
// Rules (WS up iff …):
//   - server → !userInitiatedDisconnect
//   - client → !userInitiatedDisconnect AND no live LK channel
//
// Bypass: TunnelManager calls `resolveWs()` to bring the WS up explicitly
// during signaling. After signaling completes, `onTunnelReady` (passed to
// TunnelManager) calls `reconcile()` which drops the WS again.

const connection = {
    client: null,                         // assigned right after BaleWsClient is constructed
    userInitiatedDisconnect: false,

    get isReady()    { return this.client.ready === true; },
    get isUp()       { return this.client.connecting || this.client.ready; },
    get accessToken(){ return this.client.accessToken; },

    /** Bring the WS up or down to match the desired state. Idempotent. */
    reconcile() {
        // No token ⇒ WS must be down (logout, never-logged-in, expired). The
        // earlier `return` here meant a logout that ran *while connected* left
        // the live socket up indefinitely.
        const want = !!this.client.accessToken && this._desiredUp();
        if (want && !this.isUp)        this.client.connect();
        else if (!want && this.isUp)   this.client.disconnect();
    },

    _desiredUp() {
        if (this.userInitiatedDisconnect) return false;
        if (TUNNEL_MODE === 'server') return true;
        // Client mode: WS up by default; down only while the LK room is up.
        // Keyed on `lkTransport` (live channel) rather than `serverPeer`
        // (configured) so that when LK drops, the WS comes back up *before*
        // the reconnect attempt fires.
        const t = this.client.tunnel;
        return !(t.mode === 'client' && t.lkTransport);
    },

    /** Lazy WS resolver for `TunnelManager`. Brings the WS up if reconcile()
     *  has torn it down, then waits up to 10 s for handshake completion.
     *  Returns null if no token is set or the handshake never lands. */
    async resolveWs() {
        if (!this.client.accessToken) { console.error('[BaleConnection] No access token'); return null; }
        // Clear sticky disconnect — the user (re)starting a tunnel is itself
        // an implicit "I want WS now" override (mirrors Android's resolveWs).
        this.userInitiatedDisconnect = false;
        if (!this.isUp) this.client.connect();
        if (!this.client.ready) {
            for (let i = 0; i < 20 && !this.client.ready; i++) await new Promise(r => setTimeout(r, 500));
        }
        return this.client.ready ? this.client : null;
    },

    onTunnelPermanentDisconnect() {
        console.log('[BaleConnection] tunnel permanent disconnect — reconciling WS');
        this.reconcile();
    },
};

const client = new BaleWsClient(connection);
connection.client = client;

// Server-mode auto-answer + onCallEnded fan-out — wired once on the singleton
// listener lists; they survive WS disconnect/reconnect cycles. Mirrors the
// Android pattern where BaleServerService installs onCallReceived /
// onCallEnded handlers on BaleConnection.
client.addOnCallReceived((callId, callEntity) => {
    client.tunnel.onCallReceived(callId, callEntity)
        .catch(e => console.error('[BaleConnection] onCallReceived dispatch failed:', e.message));
});
client.addOnCallEnded((callId) => {
    const callKey = String(callId);
    const t = client.tunnel;
    if (t.pendingMap.has(callKey)) {
        console.log(`[Tunnel/S] callEnded ${callId} — dropping pending entry (caller hung up)`);
        t.pendingMap.delete(callKey);
    }
    if (t.lkRooms.has(callKey)) {
        console.log(`[Tunnel/S] callEnded ${callId} — tearing down active client`);
        t.disconnectClient(callKey);
    }
});

// ── HTTP server / startup ─────────────────────────────────────────────────────

// Cross-platform open-in-browser. macOS: `open`; Windows: `start ""` (the
// empty title arg keeps `start` from interpreting a quoted URL as the window
// title); Linux/BSD: `xdg-open`. Failures swallowed — auto-open is a
// convenience, not a hard requirement.
function openInBrowser(url) {
    const { exec } = require('child_process');
    const cmd = process.platform === 'darwin' ? `open "${url}"`
              : process.platform === 'win32'  ? `start "" "${url}"`
              :                                 `xdg-open "${url}"`;
    exec(cmd, () => {});
}

const server = httpServer.create(client, connection);
// Bind to loopback only — the UI has no auth or CSRF protection, and
// listening on 0.0.0.0 (Node's default) would expose tunnel control to
// anyone on the LAN.
server.listen(HTTP_PORT, '127.0.0.1', () => {
    const url = `http://localhost:${HTTP_PORT}`;
    console.log(`[HTTP] ${url}`);
    // Auto-open the UI in client mode (typical interactive use). Suppressed
    // on server installs (rare desktop session) and via BALE_NO_BROWSER=1.
    if (TUNNEL_MODE === 'client' && !process.env.BALE_NO_BROWSER) openInBrowser(url);
});

// Auto-configure tunnel mode from command-line arg. For server mode this
// also creates the bale0 TUN interface immediately.
if (TUNNEL_MODE === 'server') client.tunnel.configure('server');

// Bring the WS up via reconcile() (the Android pattern). For client mode at
// startup, no tunnel is up yet → rule says WS up. For server mode with no
// sticky disconnect → rule says WS up. Both end up calling client.connect()
// internally; reconcile is the single source of truth for lifecycle.
connection.reconcile();

// Idempotent shutdown — runs the platform-specific TUN teardown (close fd,
// flush pf anchor on macOS / delete bale0 on Linux, drop route) before exit.
// SIGTERM gets the same path as SIGINT so systemd / launchd / Docker stop
// signals don't leave state behind.
let _shuttingDown = false;
const shutdown = (signal) => {
    if (_shuttingDown) return;
    _shuttingDown = true;
    console.log(`\n[WS] Exiting (${signal})`);
    try { client.tunnel._teardownTun(); } catch (e) { console.error('[TUN] Teardown error:', e.message); }
    process.exit(0);
};
process.on('SIGINT',  () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
