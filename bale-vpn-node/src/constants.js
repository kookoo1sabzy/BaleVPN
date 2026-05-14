'use strict';

// Constants and CLI-arg-derived config used across the modules. Imported by
// almost every other file — keep this file tiny and side-effect free.

const path  = require('path');
const _args = process.argv.slice(2);

// Where to store runtime state files (.bale-token, .allowed-callers.json).
// When packaged via `pkg`, __dirname is a virtual read-only snapshot path,
// so we put files next to the binary on disk. In dev, use the package root
// to match the historical convention.
const RUNTIME_DIR = process.pkg
    ? path.dirname(process.execPath)
    : path.join(__dirname, '..');

const ACCESS_TOKEN = '';

const WS_URL        = 'wss://next-ws.bale.ai/ws/';
const GRPC_HOST     = 'next-ws.bale.ai';
const API_VERSION   = 151668;
const PROTO_VERSION = 1;
const HTTP_PORT     = parseInt(_args.find(a => /^\d+$/.test(a))) || 3001;
const TUNNEL_MODE   = _args.find(a => a === 'server' || a === 'client') || 'client';

// Server-mode NAT plumbing. Two strategies, runtime-selectable so
// operators can trade Windows compatibility against Linux throughput:
//
//   kernel    — shared kernel TUN (`bale0`) + iptables MASQUERADE +
//               an in-Rust SNAT pool that maps each peer to a
//               unique 10.8.0.X. The forwarding hot path lives in
//               the kernel; the per-packet JS round-trip is zero.
//               Linux & macOS only.
//   userspace — no TUN, no SNAT. Each peer gets its own in-process
//               userspace TCP/UDP NAT (the Android server's shape).
//               Slower than kernel TUN on Linux but identical
//               correctness, and the only option on Windows where
//               there is no `/dev/net/tun`.
//
// Accepts both `--nat-mode kernel` and `--nat-mode=kernel`. Default
// per-platform: kernel on Linux/macOS (preserves the historic "best
// throughput" recommendation), userspace on Windows (forced).
const NAT_MODE = (() => {
    let mode = null;
    const sep = _args.findIndex(a => a === '--nat-mode');
    if (sep >= 0 && sep + 1 < _args.length) mode = _args[sep + 1];
    else {
        const eq = _args.find(a => a.startsWith('--nat-mode='));
        if (eq) mode = eq.slice('--nat-mode='.length);
    }
    if (mode != null && mode !== 'kernel' && mode !== 'userspace') {
        console.error(`[constants] invalid --nat-mode=${mode}, expected 'kernel' or 'userspace'`);
        process.exit(1);
    }
    if (mode == null) mode = process.platform === 'win32' ? 'userspace' : 'kernel';
    if (mode === 'kernel' && process.platform === 'win32') {
        console.error('[constants] --nat-mode=kernel is unsupported on Windows; using userspace');
        mode = 'userspace';
    }
    return mode;
})();

// Verbose per-flow NAT diagnostics — TCP retransmits / RTO / TLP /
// cwnd / SACK events, UDP send/recv counters, fragment-buffer expiry.
// Off by default; wire format unaffected, only log output volume.
const NAT_DEBUG = _args.includes('--debug') || _args.includes('--debug-nat');

// Bale web app credentials (from bundle analysis)
const AUTH_APP_ID  = 4;
const AUTH_API_KEY = 'C28D46DC4C3A7A26564BFCC48B929086A95C93C98E789A19847BEE8627DE4E7D';
const SENDCODE_SMS = 3;  // AUTHSENDCODETYPE_SMS

// Peer type enums (module 87728)
const PEERTYPE_PRIVATE   = 1;
const PEERTYPE_GROUP     = 2;
const EXPEERTYPE_PRIVATE = 1;
const EXPEERTYPE_GROUP   = 2;

// Tunnel-manager state machine timeouts — match Android.
// Pre-pickup we wait indefinitely for `callAccepted` (server user may take any
// amount of time to tap "allow"); user cancellation is the right out, not an
// arbitrary timer. After our own LK connect completes, PEER_TIMEOUT_MS bounds
// how long we wait for the other peer to appear in the room — same on both
// sides of the call (client waiting for server, server waiting for caller).
const PEER_TIMEOUT_MS          = 10 * 1000;

// Server-mode admission control timeouts.
const PENDING_TIMEOUT_MS = 60 * 1000;
const PENDING_SWEEP_MS   = 15 * 1000;

// Cap on simultaneously-connected clients. Hard limit matches the SNAT pool
// (10.8.0.2–10.8.0.254 = 253 slots); the user-facing default is 5. Mirrors
// Android's BaleServerService.MAX_CLIENTS_DEFAULT / MAX_CLIENTS_LIMIT.
const MAX_CLIENTS_DEFAULT = 5;
const MAX_CLIENTS_LIMIT   = 253;

// TUN MTU. Sized so a full IP packet (+ our 1-byte 'I' tag) plus RTP
// + SRTP + UDP/IP headers fits under Opus's per-packet ceiling
// (~1275 B per RFC 6716). Mirrors Android's VpnService.setMtu so
// both ends agree on the largest packet they'll try to ship.
const TUN_MTU = 1000;

module.exports = {
    ACCESS_TOKEN,
    WS_URL, GRPC_HOST, API_VERSION, PROTO_VERSION,
    HTTP_PORT, TUNNEL_MODE, NAT_MODE, NAT_DEBUG,
    AUTH_APP_ID, AUTH_API_KEY, SENDCODE_SMS,
    PEERTYPE_PRIVATE, PEERTYPE_GROUP, EXPEERTYPE_PRIVATE, EXPEERTYPE_GROUP,
    PEER_TIMEOUT_MS,
    PENDING_TIMEOUT_MS, PENDING_SWEEP_MS,
    MAX_CLIENTS_DEFAULT, MAX_CLIENTS_LIMIT,
    TUN_MTU,
    RUNTIME_DIR,
    // Helpers
    toLong: v => Number(v.toString()),
};
