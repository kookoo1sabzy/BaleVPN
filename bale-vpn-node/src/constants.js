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

// Bale web app credentials (from bundle analysis)
const AUTH_APP_ID  = 4;
const AUTH_API_KEY = 'C28D46DC4C3A7A26564BFCC48B929086A95C93C98E789A19847BEE8627DE4E7D';
const SENDCODE_SMS = 3;  // AUTHSENDCODETYPE_SMS

// Peer type enums (module 87728)
const PEERTYPE_PRIVATE   = 1;
const PEERTYPE_GROUP     = 2;
const EXPEERTYPE_PRIVATE = 1;
const EXPEERTYPE_GROUP   = 2;

// Tunnel protocol constants — kept around for the "leave the code in place"
// preference even though the message-mode tunnel transport is no longer wired
// to a UI option (WebRTC is the only active path).
const TUNNEL_PREFIX = 'T:';
const CHUNK_SIZE    = 3000;   // bytes of raw data per Bale text message
const LK_CHUNK      = 65536;  // bytes per WebRTC DataChannel message

// Tunnel-manager state machine timeouts — match Android.
// Initial attempt: wait long enough for manual admission (server user has to tap "allow" in a notification).
const CALL_ACCEPTED_TIMEOUT_MS = 90 * 1000;
// Max wait for the peer to show up in the LK room after callAccepted.
const PEER_TIMEOUT_MS          =  5 * 1000;
// Server: max wait for the caller to actually join our LK room after we acceptCall.
const PEER_JOIN_TIMEOUT_MS     =  5 * 1000;

// Server-mode admission control timeouts.
const PENDING_TIMEOUT_MS = 60 * 1000;
const PENDING_SWEEP_MS   = 15 * 1000;

// Per-client TUN bandwidth caps (server mode) — match Android.
// 500 kbps default, 1-second burst.
const DEFAULT_LIMIT_KBPS = 500;
const MAX_LIMIT_KBPS     = 1000;
const THROTTLE_FLAG_MS   = 2000;   // row stays "throttled" 2s after last drop

// Cap on simultaneously-connected clients. Hard limit matches the SNAT pool
// (10.8.0.2–10.8.0.254 = 253 slots); the user-facing default is 5. Mirrors
// Android's BaleServerService.MAX_CLIENTS_DEFAULT / MAX_CLIENTS_LIMIT.
const MAX_CLIENTS_DEFAULT = 5;
const MAX_CLIENTS_LIMIT   = 253;

module.exports = {
    ACCESS_TOKEN,
    WS_URL, GRPC_HOST, API_VERSION, PROTO_VERSION,
    HTTP_PORT, TUNNEL_MODE,
    AUTH_APP_ID, AUTH_API_KEY, SENDCODE_SMS,
    PEERTYPE_PRIVATE, PEERTYPE_GROUP, EXPEERTYPE_PRIVATE, EXPEERTYPE_GROUP,
    TUNNEL_PREFIX, CHUNK_SIZE, LK_CHUNK,
    CALL_ACCEPTED_TIMEOUT_MS, PEER_TIMEOUT_MS, PEER_JOIN_TIMEOUT_MS,
    PENDING_TIMEOUT_MS, PENDING_SWEEP_MS,
    DEFAULT_LIMIT_KBPS, MAX_LIMIT_KBPS, THROTTLE_FLAG_MS,
    MAX_CLIENTS_DEFAULT, MAX_CLIENTS_LIMIT,
    RUNTIME_DIR,
    // Helpers
    toLong: v => Number(v.toString()),
};
