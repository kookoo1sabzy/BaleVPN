'use strict';

// Constants and CLI-arg-derived config used across the modules. Imported by
// almost every other file — keep this file tiny and side-effect free.

const _args = process.argv.slice(2);

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

// Tunnel-manager reconnect parameters — match Android (5 attempts, 3s × n
// back-off, max 30s).
const TUNNEL_MAX_RECONNECT_ATTEMPTS = 5;

// Server-mode admission control timeouts.
const PENDING_TIMEOUT_MS = 60 * 1000;
const PENDING_SWEEP_MS   = 15 * 1000;
const ESTABLISH_GRACE_MS = 8  * 1000;

module.exports = {
    ACCESS_TOKEN,
    WS_URL, GRPC_HOST, API_VERSION, PROTO_VERSION,
    HTTP_PORT, TUNNEL_MODE,
    AUTH_APP_ID, AUTH_API_KEY, SENDCODE_SMS,
    PEERTYPE_PRIVATE, PEERTYPE_GROUP, EXPEERTYPE_PRIVATE, EXPEERTYPE_GROUP,
    TUNNEL_PREFIX, CHUNK_SIZE, LK_CHUNK,
    TUNNEL_MAX_RECONNECT_ATTEMPTS,
    PENDING_TIMEOUT_MS, PENDING_SWEEP_MS, ESTABLISH_GRACE_MS,
    // Helpers
    toLong: v => Number(v.toString()),
};
