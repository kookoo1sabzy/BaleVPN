'use strict';

// Prefix every log line with a compact local datetime (HH:MM:SS.mmm).
(function patchConsole() {
    const ts = () => new Date().toISOString().replace('T', ' ').slice(0, 23);
    for (const level of ['log', 'warn', 'error']) {
        const orig = console[level].bind(console);
        console[level] = (...args) => orig(`[${ts()}]`, ...args);
    }
})();

process.on('uncaughtException',    e => console.error('[Process] uncaughtException:',    e.message, e.stack));
process.on('unhandledRejection',   e => console.error('[Process] unhandledRejection:',   e?.message ?? e));
/**
 * Bale WebSocket client + HTTP send UI.
 *
 * Frame format (custom binary protobuf, not gRPC-web):
 *   Client → Server: field 1=request, field 2=ping, field 3=handshakeRequest
 *   Server → Client: field 1=response, field 2=update, field 3=terminateSession,
 *                    field 4=pong, field 5=handshakeResponse
 *
 * To refresh token: Chrome DevTools → Application → Cookies → web.bale.ai → access_token
 * WS close code 4401 = expired token.
 *
 * Run:  node src/ws-client.js
 * UI:   http://localhost:3001
 */

const http      = require('http');
const https     = require('https');
const fs        = require('fs');
const path      = require('path');
const net       = require('net');
const dgram     = require('dgram');
const crypto    = require('crypto');
const { execSync } = require('child_process');
const WebSocket = require('ws');
const { Writer, Reader } = require('protobufjs');
const livekit = require('@livekit/rtc-node');

const ACCESS_TOKEN = '';

const WS_URL        = 'wss://next-ws.bale.ai/ws/';
const GRPC_HOST     = 'next-ws.bale.ai';
const API_VERSION   = 151668;
const PROTO_VERSION = 1;
const _args         = process.argv.slice(2);
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

// Tunnel protocol constants
const TUNNEL_PREFIX = 'T:';
const CHUNK_SIZE    = 3000;   // bytes of raw data per Bale text message
const LK_CHUNK      = 65536;  // bytes per WebRTC DataChannel message

// ── Helpers ────────────────────────────────────────────────────────────────────

function toLong(v) { return Number(v.toString()); }

// ── gRPC-web transport ─────────────────────────────────────────────────────────
//
// Frame format: [0x00][4-byte BE length][proto payload]
// Trailer frame: [0x80][4-byte BE length][ascii "grpc-status: N\r\n..."]

function grpcEncode(buf) {
    const out = Buffer.allocUnsafe(5 + buf.length);
    out[0] = 0;
    out.writeUInt32BE(buf.length, 1);
    Buffer.from(buf).copy(out, 5);
    return out;
}

function grpcDecode(buf) {
    let pos = 0, data = null, status = 0, grpcMsg = '';
    while (pos + 5 <= buf.length) {
        const flag = buf[pos];
        const len  = buf.readUInt32BE(pos + 1);
        pos += 5;
        const frame = buf.slice(pos, pos + len);
        pos += len;
        if (flag & 0x80) {
            const trailer = frame.toString('utf8');
            const sm = trailer.match(/grpc-status:\s*(\d+)/);
            if (sm) status = parseInt(sm[1]);
            const mm = trailer.match(/grpc-message:\s*([^\r\n]+)/);
            if (mm) try { grpcMsg = decodeURIComponent(mm[1].trim()); } catch { grpcMsg = mm[1].trim(); }
        } else {
            data = frame;
        }
    }
    if (status !== 0) {
        const err = new Error(grpcMsg || `gRPC error ${status}`);
        err.grpcStatus  = status;
        err.grpcMessage = grpcMsg;
        throw err;
    }
    return data || Buffer.alloc(0);
}

function grpcCall(service, method, payloadBuf, token) {
    return new Promise((resolve, reject) => {
        const body    = grpcEncode(Buffer.from(payloadBuf));
        const headers = {
            'Content-Type':   'application/grpc-web+proto',
            'Content-Length': body.length,
            'X-Grpc-Web':     '1',
            'Origin':         'https://web.bale.ai',
        };
        if (token) headers['Cookie'] = `access_token=${token}`;
        const req = https.request({
            hostname: GRPC_HOST,
            path: `/${service}/${method}`,
            method: 'POST',
            headers,
        }, res => {
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end',  () => {
                try { resolve(grpcDecode(Buffer.concat(chunks))); }
                catch (e) { reject(e); }
            });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

// Exchange auth JWT for the access_token cookie value
// ── Admission control (server mode) ──────────────────────────────────────────
//
// Persisted allow-list of caller user IDs. Mirrors `ai.bale.proxy.AdmissionStore`
// in the Android app — same semantics, just file-backed instead of SharedPrefs.
// A caller in this list is auto-answered on incoming call; anyone else lands in
// the pending map and waits for an Accept/Reject decision via /server/pending/*.
const ADMISSION_FILE = path.join(__dirname, '..', '.allowed-callers.json');

const AdmissionStore = {
    _ids: null,  // Set<number> — lazy-loaded
    _load() {
        if (this._ids) return this._ids;
        try {
            const raw = fs.readFileSync(ADMISSION_FILE, 'utf8');
            const arr = JSON.parse(raw);
            this._ids = new Set(arr.filter(n => Number.isInteger(n) && n > 0));
        } catch { this._ids = new Set(); }
        return this._ids;
    },
    _save() {
        try { fs.writeFileSync(ADMISSION_FILE, JSON.stringify([...this._ids])); }
        catch (e) { console.error('[Admission] save failed:', e.message); }
    },
    isAllowed(uid) { return Number(uid) > 0 && this._load().has(Number(uid)); },
    getAll()       { return [...this._load()]; },
    add(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        this._load(); this._ids.add(n); this._save();
        return true;
    },
    remove(uid) {
        const n = Number(uid);
        const had = this._load().delete(n);
        if (had) this._save();
        return had;
    },
};

// Pending-call sweep / throttle parameters — match BaleServerService on Android.
const PENDING_TIMEOUT_MS = 60 * 1000;
const PENDING_SWEEP_MS   = 15 * 1000;
const ESTABLISH_GRACE_MS = 8  * 1000;

// Decode a JWT payload (base64url JSON between the two '.' separators). Used by
// loadSelf() to extract the account owner's user ID without an extra RPC.
function decodeJwtPayload(jwt) {
    if (!jwt) return null;
    const parts = jwt.split('.');
    if (parts.length < 2) return null;
    const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
    try { return JSON.parse(Buffer.from(padded, 'base64').toString('utf8')); }
    catch { return null; }
}

function fetchAccessToken(jwt) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: GRPC_HOST,
            path:     '/set-cookie/',
            method:   'GET',
            headers:  { Authorization: `Bearer ${jwt}` },
        }, res => {
            const cookies = [].concat(res.headers['set-cookie'] || []);
            for (const c of cookies) {
                const m = c.match(/access_token=([^;]+)/);
                if (m) { resolve(m[1]); return; }
            }
            res.resume();
            res.on('end', () => resolve(null));
        });
        req.on('error', reject);
        req.end();
    });
}

// ── Auth message codecs ────────────────────────────────────────────────────────
//
// Service: bale.auth.v1.Auth
//
// StartPhoneAuth request (codec f from bundle):
//   field 1 (tag  8): phoneNumber      int64
//   field 2 (tag 16): appId            int32
//   field 3 (tag 26): apiKey           string
//   field 4 (tag 34): deviceHash       bytes
//   field 5 (tag 42): deviceTitle      string
//   field 7 (tag 58): preferredLangs   repeated string
//   field 9 (tag 72): sendCodeType     int32  (3 = SMS)
//
// StartPhoneAuth response (codec h):
//   field 1 (tag 10): transactionHash  string
//   field 2 (tag 16): isRegistered     bool
//
// ValidateCode request (codec v):
//   field 1 (tag 10): transactionHash  string
//   field 2 (tag 18): code             string
//   field 3 (tag 26): isJwt            google.protobuf.BoolValue
//
// ValidateCode / SignUp response (codec y):
//   field 2 (tag 18): user             message
//   field 4 (tag 34): jwt              google.protobuf.StringValue
//
// SignUp request (codec k):
//   field 1 (tag 10): transactionHash  string
//   field 2 (tag 18): name             string

function buildStartPhoneAuthRequest(phone) {
    const deviceHash = crypto.randomBytes(16);
    const w = new Writer();
    w.uint32(8).int64(phone);
    w.uint32(16).int32(AUTH_APP_ID);
    w.uint32(26).string(AUTH_API_KEY);
    w.uint32(34).bytes(deviceHash);
    w.uint32(42).string('Bale Web');
    w.uint32(58).string('fa');
    w.uint32(72).int32(SENDCODE_SMS);
    return w.finish();
}

function decodeStartPhoneAuthResponse(buf) {
    const r = new Reader(buf), o = { transactionHash: '', isRegistered: false };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.transactionHash = r.string(); break;
            case 2: o.isRegistered    = r.bool();   break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function buildValidateCodeRequest(transactionHash, code) {
    const isJwtBytes = new Writer().uint32(8).bool(true).finish(); // BoolValue{value:true}
    const w = new Writer();
    w.uint32(10).string(transactionHash);
    w.uint32(18).string(code);
    w.uint32(26).bytes(isJwtBytes);
    return w.finish();
}

function decodeAuthResponse(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 2: o.user = r.bytes(); break;
            case 4: o.jwt  = decodeWrappedString(r.bytes()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function buildSignUpRequest(transactionHash, name) {
    const w = new Writer();
    w.uint32(10).string(transactionHash);
    w.uint32(18).string(name);
    return w.finish();
}

// ── Contact search codecs ──────────────────────────────────────────────────────
//
// SearchContacts (bale.users.v1.Users) — searches within existing contacts by name/phone.
//   request  field 1 (tag 10): query string
//   response field 1 (tag 10): users repeated bytes, field 2 (tag 18): userPeers repeated bytes
//
// ImportContacts (bale.users.v1.Users) — global phone lookup; imports phone and returns user.
//   request  field 1 (tag 10): phones repeated PhoneEntry
//     PhoneEntry: field 1 (tag 8) phoneNumber int64, field 2 (tag 18) name wrapped-string (optional)
//   response field 1 (tag 10): users repeated bytes, field 4 (tag 34): userPeers repeated bytes

function buildSearchContactsRequest(query) {
    return new Writer().uint32(10).string(query).finish();
}

function decodeGroupPeer(buf) {
    const r = new Reader(buf), o = { id: 0, accessHash: '0' };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.id = r.int32(); break;
            case 2: o.accessHash = r.int64().toString(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeSearchContactsResponse(buf) {
    const r = new Reader(buf), o = { users: [], userPeers: [], groupPeers: [] };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.users.push(r.bytes()); break;
            case 2: o.userPeers.push(decodeUserPeer(r.bytes())); break;
            case 5: o.groupPeers.push(decodeGroupPeer(r.bytes())); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function buildImportContactsRequest(phone) {
    // phone e.g. "+989121234567"
    const digits = phone.replace(/^\+/, '').replace(/\D/g, '');
    const phoneEntry = new Writer().uint32(8).int64(digits).finish();
    return new Writer().uint32(10).bytes(phoneEntry).finish();
}

function decodeImportContactsResponse(buf) {
    const r = new Reader(buf), o = { users: [], userPeers: [] };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.users.push(r.bytes()); break;
            case 4: o.userPeers.push(decodeUserPeer(r.bytes())); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// ── Frame encoders ─────────────────────────────────────────────────────────────

function encodeHandshake() {
    const inner = new Writer()
        .uint32(8).int32(PROTO_VERSION)
        .uint32(16).int64(API_VERSION)
        .finish();
    return Buffer.from(new Writer().uint32(26).bytes(inner).finish());
}

function encodePing(id) {
    const inner = new Writer().uint32(8).int64(id).finish();
    return Buffer.from(new Writer().uint32(18).bytes(inner).finish());
}

function encodeRpcRequest(serviceName, method, payload, index) {
    const inner = new Writer();
    inner.uint32(10).string(serviceName);
    inner.uint32(18).string(method);
    if (payload && payload.length > 0) inner.uint32(26).bytes(payload);
    inner.uint32(40).int64(index);
    return Buffer.from(new Writer().uint32(10).bytes(inner.finish()).finish());
}

// ── Message builders ───────────────────────────────────────────────────────────
//
// Peer wire format (L0 / AQ): field 1=type int32, field 2=id int32
// accessHash is always "0" (web client uses F8 which sets it to "0"), skipped as default.
//
// SendMessageRequest:
//   field 1 (tag 10) : peer    — L0 submessage
//   field 2 (tag 16) : rid     — int64
//   field 3 (tag 26) : message — QBZ union submessage
//   field 6 (tag 50) : exPeer  — AQ submessage
//
// QBZ union: field 15 (tag 122) = textMessage
// textMessage: field 1 (tag 10) = text string
//
// GetContactsRequest (bale.users.v1.Users):
//   field 1 (tag 10) : contactsHash string  — "" for full load
//
// LoadUsersRequest (bale.users.v1.Users):
//   field 1 (tag 10) : peers repeated — each a d.Uw userPeer (uid int32, accessHash int64)
//
// UserPeer (d.Uw): field 1 (tag 8) = uid int32, field 2 (tag 16) = accessHash int64

// AcceptCall request: field 1 (tag 8) = callId int64
function buildAcceptCallRequest(callId) {
    return new Writer().uint32(8).int64(callId).finish();
}

// DiscardCall request: same shape as AcceptCall — field 1 (tag 8) = callId int64
function buildDiscardCallRequest(callId) {
    return new Writer().uint32(8).int64(callId).finish();
}

// StartCall request with liveKitCall field to trigger LiveKit mode:
//   field 1  (tag 10): peer         bytes
//   field 2  (tag 16): rid          int64
//   field 6  (tag 50): liveKitCall  bytes { peer, rid }
function buildStartCallRequest(peerId, peerType, rid) {
    const peerBytes   = buildPeerBytes(peerType, peerId);
    const lkCallBytes = new Writer()
        .uint32(10).bytes(peerBytes)
        .uint32(16).int64(rid)
        .finish();
    return new Writer()
        .uint32(10).bytes(peerBytes)
        .uint32(16).int64(rid)
        .uint32(50).bytes(lkCallBytes)
        .finish();
}

function buildGetContactsRequest() {
    return new Writer().uint32(10).string('').finish();
}

function buildLoadUsersRequest(userPeers) {
    const w = new Writer();
    for (const p of userPeers) {
        const peer = new Writer()
            .uint32(8).int32(p.uid)
            .uint32(16).int64(p.accessHash || '0')
            .finish();
        w.uint32(10).bytes(peer);
    }
    return w.finish();
}

function buildPeerBytes(type, id) {
    const w = new Writer();
    if (type !== 0) w.uint32(8).int32(type);
    if (id   !== 0) w.uint32(16).int32(id);
    return w.finish();
}

function buildSendMessageRequest(peerId, peerType, exPeerType, rid, text) {
    const textMsgBytes = new Writer().uint32(10).string(text).finish();
    const qbzBytes     = new Writer().uint32(122).bytes(textMsgBytes).finish();
    const w = new Writer();
    w.uint32(10).bytes(buildPeerBytes(peerType, peerId));
    w.uint32(16).int64(rid);
    w.uint32(26).bytes(qbzBytes);
    w.uint32(50).bytes(buildPeerBytes(exPeerType, peerId));
    return w.finish();
}

// ── Frame decoders ─────────────────────────────────────────────────────────────

function decodeServerFrame(buf) {
    const r = new Reader(buf), frame = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: frame.response          = decodeRpcResponse(r.bytes()); break;
            case 2: frame.update            = decodeUpdateContainer(r.bytes()); break;
            case 3: frame.terminateSession  = true; r.skipType(tag & 7); break;
            case 4: frame.pong              = decodePong(r.bytes()); break;
            case 5: frame.handshakeResponse = decodeHandshakeResponse(r.bytes()); break;
            default: r.skipType(tag & 7);
        }
    }
    return frame;
}

function decodeHandshakeResponse(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.mkprotoVersion = r.int32(); break;
            case 2: o.apiVersion     = toLong(r.int64()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeUpdateContainer(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.update = r.bytes(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeRpcResponse(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.error    = r.bytes(); break;
            case 2: o.response = r.bytes(); break;
            case 3: o.index    = toLong(r.int64()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodePong(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.id = toLong(r.int64()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// SubscribeToUpdates response:
//   field 1 (tag 10) : update    — xC union submessage
//   field 2 (tag 16) : routeId   int32
//   field 3 (tag 24) : sequence  int32
//   field 4 (tag 32) : timestamp int64
function decodeSubscribeResponse(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: { const len = r.uint32(); o.update = decodeXC(r, r.pos + len); break; }
            case 2: o.routeId   = r.int32(); break;
            case 3: o.sequence  = r.int32(); break;
            case 4: o.timestamp = toLong(r.int64()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// xC update union:
//   field 55    (tag 422)    = message (TIF)
//   field 52807 (tag 422458) = callStarted  { call: CallEntity, participants }  ← callee sees this
//   field 52808 (tag 422466) = callAccepted { call: CallEntity, participants }
//   field 52810 (tag 422482) = callReceived { callId, participants }             ← may arrive too
function decodeXC(r, end) {
    const o = {};
    while (r.pos < end) {
        const tag = r.uint32();
        const fn = tag >>> 3;
        switch (fn) {
            case 55:    o.message      = decodeTIF(r.bytes()); break;
            case 52807: o.callStarted  = decodeCallResponse(r.bytes()); break;
            case 52808: o.callAccepted = decodeCallResponse(r.bytes()); break;
            case 52809: o.callEnded    = decodeCallEnded(r.bytes());    break;
            case 52810: o.callReceived = decodeCallReceived(r.bytes()); break;
            default:
                if (!o._unknownFields) o._unknownFields = [];
                o._unknownFields.push(fn);
                r.skipType(tag & 7);
        }
    }
    return o;
}

// callReceived update (h.Vr / S codec, module 33636)
//   field 1 (tag  8): callId       int64 string
//   field 2 (tag 18): participants  repeated bytes (peer refs, unused here)
function decodeCallReceived(buf) {
    const r = new Reader(buf), o = { callId: '0' };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.callId = r.int64().toString(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// callEnded update (field 52809) — structure assumed same as callReceived
function decodeCallEnded(buf) {
    const r = new Reader(buf), o = { callId: '0' };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.callId = r.int64().toString(); break;
            default: r.skipType(tag & 7);
        }
    }
    console.log('[CallEnded] raw fields:', JSON.stringify(o), 'hex:', Buffer.from(buf).toString('hex'));
    return o;
}

// Call entity (A / Je codec, module 23186):
//   field 1  (tag  8): id          int64 string
//   field 2  (tag 18): token        string  (LiveKit JWT)
//   field 3  (tag 26): room         string  (LiveKit room name)
//   field 4  (tag 34): url          wrapped-string  (LiveKit server URL)
//   field 12 (tag 96): isLivekit    bool
function decodeCallEntity(buf) {
    const r = new Reader(buf), o = { id: '0', token: '', room: '', url: '', isLivekit: false, callerId: 0 };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1:  o.id        = r.int64().toString(); break;
            case 2:  o.token     = r.string(); break;
            case 3:  o.room      = r.string(); break;
            case 4:  o.url       = decodeWrappedString(r.bytes()); break;
            // field 8 = adminUid (call initiator). On the callee side this is the
            // *other party*; we read it as `callerId` to drive admission checks.
            // (Field 9 is `peer`, which from the callee's perspective decodes to
            // self — using it would attribute every incoming call to ourselves.)
            case 8:  o.callerId  = r.int32(); break;
            case 12: o.isLivekit = r.bool(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// AcceptCall / StartCall response (h codec, module 33636):
//   field 1 (tag 10): call  bytes → CallEntity
//   field 3 (tag 24): seq   int32
function decodeCallResponse(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.call = decodeCallEntity(r.bytes()); break;
            case 3: o.seq  = r.int32(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// TIF message update (module 55231):
//   field 2 (tag 16) : senderUid int32
//   field 3 (tag 24) : date      int64
//   field 4 (tag 32) : rid       int64
//   field 5 (tag 42) : message   QBZ union
function decodeTIF(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 2: o.senderUid = r.int32(); break;
            case 3: o.date      = toLong(r.int64()); break;
            case 4: o.rid       = r.int64().toString(); break;
            case 5: o.message   = decodeQBZ(r.bytes()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// QBZ message content union
// Known field numbers (from minified source):
//   field 2  = imageMessage
//   field 4  = videoMessage
//   field 5  = voiceMessage
//   field 7  = documentMessage
//   field 8  = stickerMessage
//   field 11 = locationMessage
//   field 15 = textMessage
//   field 16 = contactMessage
function decodeQBZ(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 2:  o.type = 'image';    r.skipType(tag & 7); break;
            case 4:  o.type = 'video';    r.skipType(tag & 7); break;
            case 5:  o.type = 'voice';    r.skipType(tag & 7); break;
            case 7:  o.type = 'document'; r.skipType(tag & 7); break;
            case 8:  o.type = 'sticker';  r.skipType(tag & 7); break;
            case 11: o.type = 'location'; r.skipType(tag & 7); break;
            case 15: o.textMessage = decodeTextMessage(r.bytes()); break;
            case 16: o.type = 'contact';  r.skipType(tag & 7); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// textMessage: field 1 (tag 10) = text string
function decodeTextMessage(buf) {
    const r = new Reader(buf), o = { text: '' };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.text = r.string(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

// ── Contact / peer entity decoders ────────────────────────────────────────────
//
// GetContactsResponse (bale.users.v1.Users):
//   field 1 (tag 10) : users        repeated bytes  — u.KJ user entities (may be empty)
//   field 2 (tag 16) : isNotChanged bool
//   field 3 (tag 26) : userPeers    repeated bytes  — d.Uw peers to pass to LoadUsers
//
// User entity (u.KJ codec, module 71879):
//   field 1 (tag  8) : id          int32
//   field 3 (tag 26) : name        string  (display name)
//   field 9 (tag 74) : nick        wrapped-string  (username)
//
// LoadUsersResponse (bale.users.v1.Users):
//   field 1 (tag 10) : users repeated bytes  — u.KJ user entities

function decodeGetContactsResponse(buf) {
    const r = new Reader(buf);
    const o = { users: [], userPeers: [], isNotChanged: false };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.users.push(r.bytes()); break;
            case 2: o.isNotChanged = r.bool(); break;
            case 3: o.userPeers.push(decodeUserPeer(r.bytes())); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeUserPeer(buf) {
    const r = new Reader(buf), o = { uid: 0, accessHash: '0' };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.uid = r.int32(); break;
            case 2: o.accessHash = r.int64().toString(); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeLoadUsersResponse(buf) {
    const r = new Reader(buf);
    const o = { users: [] };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.users.push(r.bytes()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}

function decodeWrappedString(buf) {
    const r = new Reader(buf);
    while (r.pos < r.len) {
        const tag = r.uint32();
        if ((tag >>> 3) === 1) return r.string();
        r.skipType(tag & 7);
    }
    return '';
}

function decodeUserEntity(buf) {
    const r = new Reader(buf), o = {};
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: o.id   = r.int32(); break;
            case 3: o.name = r.string(); break;
            case 9: o.nick = decodeWrappedString(r.bytes()); break;
            default: r.skipType(tag & 7);
        }
    }
    return o;
}


// ── LiveKit transport (WebRTC data channel) ───────────────────────────────────

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
        this._normalQueue.push(data instanceof Uint8Array ? data : new Uint8Array(data));
        this._drain();
    }

    sendUrgent(data) {
        if (!this.room) return;
        this._urgentQueue.push(data instanceof Uint8Array ? data : new Uint8Array(data));
        this._drain();
    }

    // Fire-and-forget LOSSY send for raw IP packets — no queuing, no back pressure.
    sendLossy(data) {
        if (!this.room) return;
        const d = data instanceof Uint8Array ? data : new Uint8Array(data);
        Promise.resolve(this.room.localParticipant.publishData(d, { reliable: false }))
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

// ── Tunnel (SOCKS5 over Bale messages) ────────────────────────────────────────
//
// Wire format: text message starting with "T:" followed by JSON.
// Message types (field t):
//   C – CONNECT  { s, h, p }          client→server
//   A – ACK      { s, ok, [err] }     server→client
//   D – DATA     { s, q, d }          bidirectional  (q=seq, d=base64)
//   X – CLOSE    { s }                bidirectional

function tunnelEncode(obj) { return TUNNEL_PREFIX + JSON.stringify(obj); }
function tunnelDecode(text) {
    if (!text.startsWith(TUNNEL_PREFIX)) return null;
    try { return JSON.parse(text.slice(TUNNEL_PREFIX.length)); } catch { return null; }
}
function makeSid() { return crypto.randomBytes(6).toString('hex'); }

// Binary framing for WebRTC DataChannel — no base64, no JSON, no seq numbers.
// Layout: [1B type] [6B sid-as-raw-bytes] [payload]
//   C: payload = uint16BE port, uint8 hostLen, host utf8
//   A: payload = uint8 ok (0/1)
//   D: payload = raw data bytes
//   X: payload = (empty)
function lkEncode(obj) {
    if (obj.t === 'I') return Buffer.concat([Buffer.from([0x49]), obj.data]);
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

// Tunnel-manager reconnect parameters — match Android (5 attempts, 3s × n back-off, max 30s).
const TUNNEL_MAX_RECONNECT_ATTEMPTS = 5;

class TunnelManager {
    /**
     * @param {{
     *   getBale:               () => Promise<BaleWsClient|null>,
     *   onTunnelReady?:        () => void,
     *   onPermanentDisconnect?:() => void,
     * }} opts
     */
    constructor({ getBale, onTunnelReady, onPermanentDisconnect } = {}) {
        // Resolved fresh on every (re)connect — lets BaleConnection bring a torn-down
        // WS lazily back up for signaling. After the LK channel is established,
        // onTunnelReady → reconcile drops the WS again. Mirrors Android's pattern.
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
        this._tunFd           = null;       // fd for bale0 TUN device, null until first raw IP
        this._tunLk           = null;       // which lkRoom is the active TUN client
        this._tunClientKey    = null;       // callKey of the active TUN client
        this._tunReadRunning  = false;
        this._tunStatsTimer   = null;
        this._tunRxPkts       = 0;  this._tunRxBytes = 0;
        this._tunTxPkts       = 0;  this._tunTxBytes = 0;
        // Client reconnect state
        this._reconnectTimer   = null;
        this._reconnectAttempt = 0;
        this._callId           = null;     // callId of our outgoing client-mode call
        this._callEndedRemover = null;     // deregister our addOnCallEnded subscription
    }

    configure(mode, { serverPeerId, serverPeerType, socks5Port, transport } = {}) {
        this._stopAll();
        this.mode      = mode || null;
        this.transport = transport || 'webrtc';
        if (mode === 'client') {
            this.serverPeer = serverPeerId
                ? { id: Number(serverPeerId), type: Number(serverPeerType) || PEERTYPE_PRIVATE }
                : null;
            this.socks5Port = Number(socks5Port) || 1080;
            if (this.serverPeer) {
                // Start SOCKS5 listener now; WebRTC signaling will lazily resolve the
                // WS via getBale() — this starts the LK channel and fires
                // onTunnelReady so BaleConnection can drop the WS once it's up.
                this._startSocks5();
                if (this.transport === 'webrtc')
                    this.startWebRtcTunnel().catch(e => console.error('[Tunnel/C] WebRTC start:', e.message));
            }
        } else if (mode === 'server') {
            this._setupTun();   // create bale0 immediately, don't wait for first client packet
        }
        console.log(`[Tunnel] mode=${mode || 'none'} transport=${this.transport}`);
    }

    onWsReady() {
        // Server mode pre-creates the TUN as soon as the WS is reachable (the bale0
        // device must be ready before incoming-call auto-answer can route packets).
        // Client mode does NOT eagerly start the tunnel here — startWebRtcTunnel is
        // driven explicitly by configure() / TunnelManager reconnect, both of which
        // bring the WS up themselves via getBale().
        if (this.mode === 'server') this._setupTun();
    }

    status() {
        return {
            mode:       this.mode || 'none',
            transport:  this.transport,
            socks5Port: this.socks5Port,
            serverPeer: this.serverPeer,
            running:    !!this.socks5Srv,
            sessions:   this.sessions.size,
            lkActive:   !!(this.lkTransport || this.lkRooms.size > 0),
            lkRooms:    this.lkRooms.size,
        };
    }

    clients() {
        const list = [];
        for (const [callKey, lk] of this.lkRooms) {
            list.push({
                callKey,
                callerId:     lk._callerId   || 0,
                callerName:   lk._callerName || null,
                isTunClient:  lk === this._tunLk,
                connectedAt:  lk._connectedAt,
                rxPkts:  lk._rxPkts,  rxBytes: lk._rxBytes,
                txPkts:  lk._txPkts,  txBytes: lk._txBytes,
            });
        }
        return list;
    }

    disconnectClient(callKey) {
        const lk = this.lkRooms.get(callKey);
        if (!lk) return false;
        lk.disconnect();
        this.lkRooms.delete(callKey);
        if (this._tunLk === lk) { this._tunLk = null; this._tunClientKey = null; }
        return true;
    }

    // Called when a text tunnel message arrives (message transport)
    handleIncoming(text, fromUid) {
        const msg = tunnelDecode(text);
        if (!msg) return false;
        if (this.mode === 'server') this._srvMsg(msg, fromUid, null);
        else if (this.mode === 'client') this._cliMsg(msg);
        return true;
    }

    // Server entrypoint for incoming call updates. Mirrors Android
    // BaleServerService.checkAndHandleCall — gates on AdmissionStore, deduplicates
    // by callerId, throttles reconnect storms, queues unknown callers as pending.
    async onCallReceived(callId, callEntity) {
        if (this.mode !== 'server') return;
        const callKey  = String(callId);
        const callerId = Number(callEntity?.callerId || 0);

        if (this.lkRooms.has(callKey)) {
            console.log(`[Tunnel/S] Ignoring duplicate call notification for ${callId}`);
            return;
        }

        // Bale fans out two updates per incoming call: callReceived (sometimes
        // with empty participants → callerId=0) and callStarted (with adminUid).
        // Order isn't guaranteed; if we get the callerId=0 variant first, defer —
        // creating a pending entry now would surface as "unknown caller" in the
        // UI. The follow-up will carry the real id.
        if (!callerId) {
            console.log(`[Tunnel/S] call ${callId} arrived without callerId — deferring`);
            return;
        }

        if (AdmissionStore.isAllowed(callerId)) {
            // Reconnect-storm guard: same caller already has a client whose LK
            // hasn't completed peer-join AND it's <8s old → drop the new call.
            // Replacing it before the previous LK can establish creates an endless
            // cycle where the peer never finishes joining.
            for (const [, lk] of this.lkRooms) {
                if (lk._callerId === callerId && !lk.hasPeer) {
                    const ageMs = Date.now() - lk._connectedAt;
                    if (ageMs < ESTABLISH_GRACE_MS) {
                        console.log(`[Tunnel/S] dropping call ${callId} — caller ${callerId} still establishing (age=${ageMs}ms)`);
                        return;
                    }
                }
            }
            // If a stale pending entry exists for this callId (admission state
            // changed mid-flight), clear it before accepting.
            this.pendingMap.delete(callKey);
            await this._handleCall(callId, callerId, callEntity);
        } else {
            // Dedup pending by callerId — a new call from the same caller replaces
            // any older pending entry (so the UI doesn't grow stale stacks).
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
            // Resolve caller name async — mirror Android's fetchAndApplyName path.
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

    /** Accept a pending call. If `addToList`, also persist the caller to AdmissionStore. */
    async acceptPending(callId, addToList = false) {
        const callKey = String(callId);
        const pending = this.pendingMap.get(callKey);
        if (!pending) return false;
        this.pendingMap.delete(callKey);
        if (addToList && pending.callerId) AdmissionStore.add(pending.callerId);
        await this._handleCall(callId, pending.callerId, pending._entity);
        return true;
    }

    /** Reject a pending call — sends DiscardCall so the peer's tunnel tears down cleanly. */
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

    /** Snapshot of pending calls for UI — id/caller/name/age. */
    pendingCalls() {
        return [...this.pendingMap.values()].map(p => ({
            callId:     p.callId,
            callerId:   p.callerId,
            callerName: p.callerName,
            receivedAt: p.receivedAt,
        }));
    }

    /** Snapshot of admission allow-list — IDs only; name resolution is the caller's job. */
    admissionList() {
        return AdmissionStore.getAll().map(callerId => ({ callerId }));
    }

    /**
     * Internal: actually answer the call, join LK, set up the per-client transport.
     * Extracted from the old onCallReceived body so it can be reused by acceptPending.
     */
    async _handleCall(callId, callerId, callEntity) {
        const callKey = String(callId);
        console.log(`[Tunnel/S] Auto-answering call ${callId} caller=${callerId}`);

        const ws = await this.getBale();
        if (!ws) { console.error('[Tunnel/S] AcceptCall: no WS available'); return; }
        let resp;
        try { resp = await ws.acceptCall(callId); }
        catch (e) { console.error('[Tunnel/S] AcceptCall failed:', e.message); return; }

        // callStarted push carries isLivekit=true but empty token.
        // AcceptCall response carries the real token/room/url but isLivekit=false.
        // Combine: use push's isLivekit flag + AcceptCall's credentials.
        const isLivekit = callEntity?.isLivekit || resp.call?.isLivekit;
        const call = resp.call;

        if (!isLivekit || !call?.token) {
            console.log('[Tunnel/S] Call answered — no LiveKit credentials');
            return;
        }

        // Dedup by callerId: tear down any prior client from the same caller
        // (local-only — discardCall would also kill the new call we're handling).
        if (callerId) {
            for (const [k, lk] of this.lkRooms) {
                if (lk._callerId === callerId) {
                    console.log(`[Tunnel/S] replacing existing client ${k} from caller ${callerId} with ${callKey}`);
                    lk.disconnect();
                    this.lkRooms.delete(k);
                    if (this._tunLk === lk) { this._tunLk = null; this._tunClientKey = null; }
                }
            }
        }

        // Resolve caller name for the connected-client UI (best-effort).
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
        lk.onData = (data) => {
            const msg = lkDecode(data);
            if (msg?.t === 'I')  this._handleTunPacket(msg.data, lk);
            else if (msg)        this._srvMsg(msg, callKey, lk);
        };
        lk.onDisconnected = () => {
            this.lkRooms.delete(callKey);
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
        }
    }

    // Client starts a call to initiate a WebRTC tunnel (with auto-reconnect on failure/disconnect)
    async startWebRtcTunnel() {
        if (this.mode !== 'client' || !this.serverPeer) return;
        if (this.lkTransport) { this.lkTransport.disconnect(); this.lkTransport = null; }

        // Resolve the WS afresh on every (re)connect attempt — the previous one may
        // have been torn down by reconcile() while we were idle. resolveWs brings it
        // back up if needed and waits for handshake.
        const ws = await this.getBale();
        if (!ws) { console.error('[Tunnel/C] WS unavailable'); this._scheduleReconnect(); return; }

        console.log('[Tunnel/C] Starting call for WebRTC tunnel…');
        let resp;
        try { resp = await ws.startCall(this.serverPeer.id, this.serverPeer.type); }
        catch (e) {
            console.error('[Tunnel/C] StartCall failed:', e.message);
            this._scheduleReconnect();
            return;
        }

        const call = resp.call;
        if (!call?.isLivekit || !call?.token) {
            console.warn('[Tunnel/C] StartCall: no LiveKit info in response');
            this._scheduleReconnect();
            return;
        }

        // Subscribe to peer-side hangup. Re-register against the live WS instance on
        // each (re)connect so a WS disconnect→reconnect cycle keeps us hooked in.
        this._callId = call.id;
        this._callEndedRemover?.(); this._callEndedRemover = null;
        this._callEndedRemover = ws.addOnCallEnded((endedId) => {
            if (String(endedId) === String(this._callId)) {
                console.log(`[Tunnel/C] Peer ended call ${endedId} — permanent disconnect`);
                this._stopAll();
                try { this.onPermanentDisconnect(); } catch (_) {}
            }
        });

        console.log(`[Tunnel/C] Joining LiveKit room ${call.room}`);
        const lk = new LiveKitTransport();
        lk.onData = (data) => {
            const msg = lkDecode(data);
            if (msg && msg.t !== 'I') this._cliMsg(msg);
        };
        lk.onDisconnected = () => {
            if (this.lkTransport === lk) {
                this.lkTransport = null;
                console.log('[Tunnel/C] LiveKit disconnected — reconnecting…');
                this._closeCliSessions();
                this._scheduleReconnect();
            }
        };
        try {
            await lk.connect(call.url, call.token);
        } catch (e) {
            console.error('[Tunnel/C] LiveKit connect failed:', e.message);
            this._scheduleReconnect();
            return;
        }
        this._reconnectAttempt = 0;
        this.lkTransport = lk;
        console.log('[Tunnel/C] WebRTC tunnel ready');
        // Hand WS state back to BaleConnection — its rule wants WS down once
        // the tunnel is live, since steady-state traffic flows over LiveKit.
        try { this.onTunnelReady(); } catch (e) { console.error('[Tunnel/C] onTunnelReady threw:', e.message); }
    }

    _scheduleReconnect() {
        if (this.mode !== 'client' || !this.serverPeer) return;
        if (this._reconnectTimer) return;
        this._reconnectAttempt++;
        if (this._reconnectAttempt > TUNNEL_MAX_RECONNECT_ATTEMPTS) {
            console.log(`[Tunnel/C] Reconnect: giving up after ${TUNNEL_MAX_RECONNECT_ATTEMPTS} attempts`);
            this._stopAll();   // full tunnel reset, like Android's stopVpn on giveup
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

    // Called when the server receives a TFrame.Ip packet from a client.
    _handleTunPacket(data, lk) {
        if (this._tunLk !== lk) {
            this._tunLk = lk;
            this._tunClientKey = lk._callKey || '?';
            if (!this._tunFd) this._setupTun();
            // Reset counters and (re)start per-client stats timer.
            this._tunRxPkts = 0; this._tunRxBytes = 0;
            this._tunTxPkts = 0; this._tunTxBytes = 0;
            if (this._tunStatsTimer) clearInterval(this._tunStatsTimer);
            this._tunStatsTimer = setInterval(() => {
                const rxKB = (this._tunRxBytes / 1024).toFixed(1);
                const txKB = (this._tunTxBytes / 1024).toFixed(1);
                console.log(`[TUN] client=${this._tunClientKey}  rx=${this._tunRxPkts}pkt/${rxKB}KB  tx=${this._tunTxPkts}pkt/${txKB}KB`);
            }, 5000);
        }
        // Drop packets destined for the TUN subnet (10.8.0.0/24) — clients must not
        // reach each other or the server via the tunnel. Never write these to bale0
        // so the kernel never has a chance to route them to another peer.
        if (data.length >= 20 && (data[0] >> 4) === 4 &&
            data[16] === 10 && data[17] === 8 && data[18] === 0) return;
        if (this._tunFd !== null) {
            this._tunRxPkts++; this._tunRxBytes += data.length;
            lk._rxPkts++;     lk._rxBytes += data.length;
            fs.write(this._tunFd, data, (err) => {
                if (err) console.error('[TUN] Write error:', err.message);
            });
        }
    }

    // Opens bale0, assigns 10.8.0.1/24, brings it up, enables NAT.
    // Safe to call multiple times (no-op if already open).
    _setupTun() {
        if (this._tunFd !== null) return;
        try {
            const tun = require('./tun');

            // Remove any leftover interface from a previous run, then open fresh.
            try { execSync('ip tuntap del dev bale0 mode tun', { stdio: 'pipe' }); } catch (_) {}
            this._tunFd = tun.open('bale0');
            console.log('[TUN] Opened bale0');

            tun.configure('bale0', '10.8.0.1', 24);
            console.log('[TUN] bale0 up  10.8.0.1/24');

            // IP forwarding: write to /proc directly (uses current process CAP_NET_ADMIN).
            try {
                fs.writeFileSync('/proc/sys/net/ipv4/ip_forward', '1');
                console.log('[TUN] ip_forward enabled');
            } catch (e) {
                console.warn('[TUN] Could not enable ip_forward:', e.message);
            }

            // NAT masquerade: iptables still needs a child process.
            // Add rule only if it doesn't already exist (-C check avoids duplicates).
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

    // Blocking read loop: each call blocks a libuv thread-pool worker until a packet arrives.
    // Sends every outbound IP packet to the active TUN client over LiveKit LOSSY.
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
                if (n > 0 && this._tunLk) {
                    this._tunTxPkts++; this._tunTxBytes += n;
                    this._tunLk._txPkts++; this._tunLk._txBytes += n;
                    this._tunLk.sendLossy(lkEncode({ t: 'I', data: Buffer.from(buf.slice(0, n)) }));
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
            // fromUid is null for WebRTC sessions (use lk to reply)
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
                            sess.lk.send(frame);
                        }
                        // Back pressure: pause this socket when the LK send queue is full
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
                    // Message transport path: send directly with seq numbers (no coalescing)
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
                // WebRTC: DataChannel is ordered+reliable, write directly
                sess.txBytes += msg.data.length;
                if (!sess.socket.destroyed) sess.socket.write(msg.data);
            } else {
                // Message transport: reorder buffer for out-of-order Bale messages
                sess.rxBuf.set(msg.q, Buffer.from(msg.d, 'base64'));
                while (sess.rxBuf.has(sess.rxNext)) {
                    const buf = sess.rxBuf.get(sess.rxNext);
                    sess.txBytes += buf.length;
                    sess.rxBuf.delete(sess.rxNext++);
                    if (!sess.socket.destroyed) sess.socket.write(buf);
                }
            }

        } else if (t === 'U') {
            // Stateless UDP relay — send datagram, return first response
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
        // Flush any coalesced data first, then mark dead so the flush can still send
        sess.flush?.();
        sess.dead = true;
        if (sess.lk) {
            sess.lk.send(lkEncode({ t: 'X', s: sid }));
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
            // Ack (client blocked waiting) and UDP (DNS response) are urgent
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
            // Greeting: \x05 <n> <methods…>
            if (buf[0] !== 0x05) { sock.destroy(); return; }
            sock.write(Buffer.from([0x05, 0x00]));  // accept no-auth

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
                // WebRTC: DataChannel is ordered+reliable, write directly
                if (!sess.sock.destroyed) sess.sock.write(msg.data);
            } else {
                // Message transport: reorder buffer for out-of-order Bale messages
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
            // No fallback to message transport — drop if LiveKit isn't up.
            if (this.lkTransport) this.lkTransport.send(lkEncode(obj));
        } else if (this.serverPeer) {
            this.getBale()
                .then(ws => ws?.sendText(this.serverPeer.id, this.serverPeer.type, tunnelEncode(obj)))
                .catch(err => console.error('[Tunnel] send:', err.message));
        }
    }

    // Disconnect all server-side LiveKit rooms (called on WS close or manual stop)
    hangUpAll() {
        this._tunLk = null;
        this._tunClientKey = null;
        if (this._tunStatsTimer) { clearInterval(this._tunStatsTimer); this._tunStatsTimer = null; }
        if (this.lkRooms.size) {
            console.log(`[Tunnel/S] Hanging up ${this.lkRooms.size} LiveKit room(s)`);
            for (const lk of this.lkRooms.values()) lk.disconnect();
            this.lkRooms.clear();
        }
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
        if (this._reconnectTimer) { clearTimeout(this._reconnectTimer); this._reconnectTimer = null; }
        this._reconnectAttempt = 0;
        this._callEndedRemover?.(); this._callEndedRemover = null;
        this._callId = null;
        this._tunLk = null;
        if (this.socks5Srv) { this.socks5Srv.close(); this.socks5Srv = null; }
        if (this.lkTransport) { this.lkTransport.disconnect(); this.lkTransport = null; }
        this.hangUpAll();
        // Full reset — mirrors Android's stopVpn() returning to a no-VPN state.
        // BaleConnection._desiredUp keys on `serverPeer`, so clearing it lets
        // reconcile bring the WS back up after a permanent disconnect.
        this.mode       = null;
        this.serverPeer = null;
    }
}

// ── Client ─────────────────────────────────────────────────────────────────────

class BaleWsClient {
    constructor() {
        this.ws            = null;
        this.rpcIndex      = 0;
        this.pingTimer     = null;
        this.pingCounter   = 0;
        this.ready         = false;
        this.subscribeIdx  = null;
        this.pending       = new Map();
        this.messages      = [];
        this.peers         = [];
        this.tunnel        = new TunnelManager({
            getBale:               async () => BaleConnection.resolveWs(),
            onTunnelReady:         () => BaleConnection.reconcile(),
            onPermanentDisconnect: () => BaleConnection.onTunnelPermanentDisconnect(),
        });
        this.accessToken   = ACCESS_TOKEN;
        this.autoReconnect = false;
        this.connecting    = false;
        this.self          = null;       // { id, name, nick } — account owner
        // Multi-subscriber call event listeners — survive WS disconnect/reconnect
        // cycles because they live on this singleton, not on each WebSocket session.
        this._onCallReceivedListeners = [];
        this._onCallEndedListeners    = [];
    }

    addOnCallReceived(cb) {
        this._onCallReceivedListeners.push(cb);
        return () => {
            const i = this._onCallReceivedListeners.indexOf(cb);
            if (i >= 0) this._onCallReceivedListeners.splice(i, 1);
        };
    }

    addOnCallEnded(cb) {
        this._onCallEndedListeners.push(cb);
        return () => {
            const i = this._onCallEndedListeners.indexOf(cb);
            if (i >= 0) this._onCallEndedListeners.splice(i, 1);
        };
    }

    connect(token) {
        if (token) this.accessToken = token;
        if (!this.accessToken) throw new Error('No access token set');
        this.autoReconnect = true;
        this.connecting    = true;
        console.log(`[WS] Connecting to ${WS_URL}`);
        const ws = new WebSocket(WS_URL, {
            headers: {
                Cookie:       `access_token=${this.accessToken}`,
                Origin:       'https://web.bale.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            },
        });
        this.ws = ws;

        ws.on('open', () => {
            this.connecting = false;
            console.log('[WS] Open — sending handshake');
            ws.send(encodeHandshake());
        });

        ws.on('message', (data) => {
            try { this._onFrame(decodeServerFrame(new Uint8Array(data))); }
            catch (err) { console.error('[WS] Decode error:', err.message); }
        });

        ws.on('close', (code) => {
            clearInterval(this.pingTimer);
            this.ready      = false;
            this.connecting = false;
            // Don't tear down LK state on WS drop — server-mode rooms and the
            // client-mode tunnel are independent of the Bale WS once established.
            // Hanging them up here would also break the Android-mirror "drop WS
            // after tunnel-up" rule, which deliberately closes the WS while the
            // LK channel is in use. hangUpAll() is reserved for explicit stops.
            if (code === 4401) {
                console.error('[WS] 4401 Unauthenticated — token expired');
                this.autoReconnect = false;
            } else if (this.autoReconnect) {
                console.log(`[WS] Closed ${code} — reconnecting in 3 s`);
                this._reconnectTimer = setTimeout(() => {
                    this._reconnectTimer = null;
                    this.connect();
                }, 3000);
            } else {
                console.log(`[WS] Closed ${code}`);
            }
        });

        ws.on('error', (err) => console.error('[WS] Error:', err.message));
    }

    disconnect() {
        this.autoReconnect = false;
        this.ready         = false;
        this.connecting    = false;
        this.self          = null;
        // Cancel any pending inner auto-reconnect — BaleConnection.reconcile() is
        // the sole authority on lifecycle; a stray timer would race and reopen
        // the WS after we deliberately closed it.
        if (this._reconnectTimer) { clearTimeout(this._reconnectTimer); this._reconnectTimer = null; }
        if (this.ws) { this.ws.close(); this.ws = null; }
        clearInterval(this.pingTimer);
        console.log('[WS] Disconnected by user');
    }

    _onFrame(frame) {
        if (frame.handshakeResponse) {
            const hs = frame.handshakeResponse;
            console.log(`[WS] Handshake: proto=${hs.mkprotoVersion} api=${hs.apiVersion}`);
            if (hs.mkprotoVersion === PROTO_VERSION && hs.apiVersion === API_VERSION) {
                this.ready = true;
                console.log('[WS] Ready — subscribing to updates');
                this._subscribe();
                this._startPing();
                this.tunnel.onWsReady();
                this.loadSelf().catch(e => console.error('[Self] loadSelf failed:', e.message));
                this.loadContacts().catch(e => console.error('[Contacts] loadContacts failed:', e.message));
            } else {
                console.error('[WS] Version mismatch');
            }
        }

        if (frame.response) {
            const rpc = frame.response;
            // Route to pending send RPC if it matches, otherwise try as update stream
            const cb = this.pending.get(rpc.index);
            if (cb) {
                this.pending.delete(rpc.index);
                clearTimeout(cb.timer);
                if (rpc.error) cb.reject(new Error('RPC error: ' + Buffer.from(rpc.error).toString('hex')));
                else           cb.resolve(rpc.response || new Uint8Array(0));
            } else if (rpc.response) {
                this._processUpdate(rpc.response);
            }
        }

        if (frame.update?.update) {
            this._processUpdate(frame.update.update);
        }

        if (frame.terminateSession) {
            console.warn('[WS] Session terminated by server');
        }
    }

    _subscribe() {
        this.subscribeIdx = ++this.rpcIndex;
        this.ws.send(encodeRpcRequest(
            'bale.maviz.v1.MavizStream',
            'SubscribeToUpdates',
            new Uint8Array(0),
            this.subscribeIdx,
        ));
        console.log(`[WS] SubscribeToUpdates sent (idx=${this.subscribeIdx})`);
    }

    _startPing() {
        this.pingTimer = setInterval(() => {
            if (this.ws.readyState === WebSocket.OPEN)
                this.ws.send(encodePing(++this.pingCounter));
        }, 10_000);
    }

    _processUpdate(buf) {
        let sub;
        try { sub = decodeSubscribeResponse(buf); } catch (e) { console.log('[Update] decode error:', e.message); return; }
        const update = sub.update;
        if (!update) { console.log('[Update] no xC payload, buf len=', buf.length); return; }

        const type = update.message      ? 'message'
                   : update.callStarted  ? 'callStarted'
                   : update.callReceived ? 'callReceived'
                   : update.callAccepted ? 'callAccepted'
                   : update.callEnded    ? 'callEnded'
                   : update._unknownFields ? `unknown(fields=${update._unknownFields.join(',')})`
                   : 'unknown';

        if (update.callStarted || update.callReceived) {
            const callId = update.callReceived?.callId || update.callStarted?.call?.id;
            console.log(`[Update] ${type}  callId=${callId}`);
            const callEntity = update.callStarted?.call || null;
            if (callId && callId !== '0') {
                for (const cb of this._onCallReceivedListeners.slice()) {
                    try { cb(callId, callEntity); }
                    catch (e) { console.error('[Update] onCallReceived subscriber threw:', e.message); }
                }
            }
        } else if (update.callAccepted) {
            const callId = update.callAccepted?.call?.id;
            console.log(`[Update] callAccepted  callId=${callId}`);
        } else if (update.callEnded) {
            const callId = update.callEnded.callId;
            console.log(`[Update] callEnded  callId=${callId}`);
            for (const cb of this._onCallEndedListeners.slice()) {
                try { cb(callId); }
                catch (e) { console.error('[Update] onCallEnded subscriber threw:', e.message); }
            }
        } else if (update.message) {
            const tif  = update.message;
            const text = tif.message?.textMessage?.text;
            if (text) {
                if (this.tunnel.handleIncoming(text, tif.senderUid)) return;
                const entry = { dir: 'in', from: tif.senderUid, rid: tif.rid, text, ts: Date.now() };
                console.log(`[Update] message  from=${entry.from}  "${entry.text}"`);
                this.messages.push(entry);
            } else {
                const msgType = tif.message?.type || 'unknown';
                console.log(`[Update] message  from=${tif.senderUid}  (${msgType})`);
            }
        } else {
            console.log(`[Update] ${type}`);
        }
    }

    async discardCall(callId) {
        try {
            await this._rpcCall('bale.meet.v1.Meet', 'DiscardCall', buildDiscardCallRequest(callId));
        } catch (e) { console.error(`[DiscardCall] ${callId} failed:`, e.message); }
    }

    async acceptCall(callId) {
        const buf = await this._rpcCall('bale.meet.v1.Meet', 'AcceptCall', buildAcceptCallRequest(callId));
        const resp = decodeCallResponse(buf);
        console.log('[AcceptCall] call:', JSON.stringify(resp.call));
        if (!resp.call?.token) console.log('[AcceptCall] raw (no token):', Buffer.from(buf).toString('hex'));
        return resp;
    }

    async startCall(peerId, peerType) {
        const rid = String(Date.now());
        const buf = await this._rpcCall('bale.meet.v1.Meet', 'StartCall', buildStartCallRequest(peerId, peerType, rid));
        return decodeCallResponse(buf);
    }

    _rpcCall(serviceName, method, payload) {
        return new Promise((resolve, reject) => {
            if (!this.ready) return reject(new Error('Not connected'));
            const idx   = ++this.rpcIndex;
            const timer = setTimeout(() => { this.pending.delete(idx); reject(new Error('Timeout')); }, 15_000);
            this.pending.set(idx, {
                resolve: (buf) => { clearTimeout(timer); resolve(buf); },
                reject:  (e)   => { clearTimeout(timer); reject(e); },
                timer,
            });
            this.ws.send(encodeRpcRequest(serviceName, method, payload, idx));
        });
    }

    // Look up a contact's display name by user ID. Backed by the contacts list
    // populated on first WS handshake (and refreshed on demand). Bale's privacy
    // gating means anyone who can call us is necessarily a contact, so this is
    // sufficient for server-mode caller-name resolution. Mirrors the Android
    // `BaleWsClient.loadUserName` path. Returns null if the contact list isn't
    // loaded yet or the uid isn't in it.
    async lookupContactName(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return null;
        if (!this.peers.length) {
            try { await this.loadContacts(); } catch (_) {}
        }
        const hit = this.peers.find(p => Number(p.id) === n);
        return hit ? hit.name : null;
    }

    // Resolve the account owner (self) to a UserEntity. Pulls the user ID from
    // the JWT payload (`sub` / `uid` / etc.) and runs LoadUsers([uid]) — the
    // user's own ID isn't normally in their contact list so we ask for it
    // explicitly. Result cached on `this.self` and surfaced via /config.
    async loadSelf() {
        const payload = decodeJwtPayload(this.accessToken);
        if (!payload) { console.warn('[Self] could not decode JWT payload'); return null; }
        // First-time visibility into the JWT shape so we can spot any field-name surprises.
        if (!this._jwtPayloadLogged) {
            this._jwtPayloadLogged = true;
            console.log('[Self] JWT payload:', JSON.stringify(payload));
        }
        // Bale nests the actual user id under a `payload` claim:
        //   { iss, exp, payload: { user_id, app_id, auth_id, auth_sid, service } }
        const inner = payload.payload || {};
        const uid = Number(
            inner.user_id || inner.userId || inner.uid ||
            payload.user_id || payload.userId || payload.uid || payload.sub || payload.id ||
            0
        );
        if (!uid) {
            console.warn('[Self] no numeric user id in JWT — outer:', Object.keys(payload).join(','),
                         '— inner:', Object.keys(inner).join(','));
            return null;
        }
        try {
            const buf = await this._rpcCall(
                'bale.users.v1.Users', 'LoadUsers',
                buildLoadUsersRequest([{ uid, accessHash: '0' }]),
            );
            const loaded = decodeLoadUsersResponse(buf);
            if (!loaded.users.length) { console.warn(`[Self] LoadUsers returned no entries for uid=${uid}`); return null; }
            const u = decodeUserEntity(loaded.users[0]);
            this.self = { id: u.id || uid, name: u.name || '', nick: u.nick || '' };
            console.log(`[Self] ${this.self.name || '(no name)'}${this.self.nick ? ` @${this.self.nick}` : ''} (${this.self.id})`);
            return this.self;
        } catch (e) { console.error('[Self] LoadUsers failed:', e.message); return null; }
    }

    async loadContacts() {
        // Step 1: GetContacts → obtain userPeers list
        const contactsBuf = await this._rpcCall(
            'bale.users.v1.Users', 'GetContacts', buildGetContactsRequest()
        );
        const contacts = decodeGetContactsResponse(contactsBuf);
        console.log(`[Contacts] GetContacts: ${contacts.users.length} users, ${contacts.userPeers.length} peers, notChanged=${contacts.isNotChanged}`);

        // Collect all peers: from userPeers field (primary) or user entities
        let peers = [];

        if (contacts.userPeers.length > 0) {
            // Step 2: LoadUsers with the peer references
            const loadBuf = await this._rpcCall(
                'bale.users.v1.Users', 'LoadUsers', buildLoadUsersRequest(contacts.userPeers)
            );
            const loaded = decodeLoadUsersResponse(loadBuf);
            for (const b of loaded.users) {
                const u = decodeUserEntity(b);
                if (u.id) {
                    const label = u.name + (u.nick ? ` (@${u.nick})` : '');
                    peers.push({ id: u.id, name: label, type: PEERTYPE_PRIVATE });
                }
            }
            console.log(`[Contacts] LoadUsers returned ${peers.length} users`);
        } else if (contacts.users.length > 0) {
            // GetContacts already returned full user entities
            for (const b of contacts.users) {
                const u = decodeUserEntity(b);
                if (u.id) {
                    const label = u.name + (u.nick ? ` (@${u.nick})` : '');
                    peers.push({ id: u.id, name: label, type: PEERTYPE_PRIVATE });
                }
            }
            console.log(`[Contacts] Used inline users: ${peers.length}`);
        }

        peers.sort((a, b) => a.name.localeCompare(b.name));
        this.peers = peers;
        return peers;
    }

    sendText(peerId, peerType, text) {
        return new Promise((resolve, reject) => {
            if (!this.ready) return reject(new Error('Not connected to Bale'));
            const idx        = ++this.rpcIndex;
            const exPeerType = peerType === PEERTYPE_GROUP ? EXPEERTYPE_GROUP : EXPEERTYPE_PRIVATE;
            const rid        = String(Date.now());
            const payload    = buildSendMessageRequest(peerId, peerType, exPeerType, rid, text);
            const timer      = setTimeout(() => {
                this.pending.delete(idx);
                reject(new Error('Request timed out'));
            }, 10_000);
            this.pending.set(idx, { resolve, reject, timer });
            this.ws.send(encodeRpcRequest('bale.messaging.v2.Messaging', 'SendMessage', payload, idx));
        });
    }
}

// ── HTTP UI ────────────────────────────────────────────────────────────────────

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bale Proxy</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: system-ui, sans-serif;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
    min-height: 100vh;
  }
  .card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,.1);
    width: 100%;
    max-width: 500px;
    overflow: hidden;
    align-self: flex-start;
  }
  .header {
    background: #1877f2;
    color: #fff;
    padding: 1.1rem 1.4rem;
    display: flex;
    align-items: center;
    gap: .7rem;
  }
  .header h1 { font-size: 1.05rem; font-weight: 600; }
  .dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: #f55; flex-shrink: 0; transition: background .4s;
  }
  .dot.on { background: #5c5; }
  .body { padding: 1.4rem; display: flex; flex-direction: column; gap: 1rem; }
  label { font-size: .78rem; font-weight: 600; color: #555; display: block; margin-bottom: .3rem; }
  .row { display: flex; gap: .7rem; align-items: flex-end; }
  .row > * { flex: 1; }
  input, select, textarea {
    width: 100%; padding: .5rem .7rem;
    border: 1.5px solid #ddd; border-radius: 8px;
    font-size: .93rem; outline: none; transition: border-color .2s;
  }
  input:focus, select:focus, textarea:focus { border-color: #1877f2; }
  textarea { resize: vertical; min-height: 75px; }
  button {
    background: #1877f2; color: #fff; border: none;
    border-radius: 8px; padding: .6rem 1.1rem;
    font-size: .93rem; font-weight: 600; cursor: pointer;
    width: 100%; transition: background .2s;
  }
  button:hover { background: #1565d8; }
  button:disabled { background: #a0b4d6; cursor: default; }
  .refresh-btn {
    background: none; color: #1877f2; border: 1.5px solid #1877f2;
    width: auto; padding: .3rem .6rem; font-size: .8rem;
  }
  .refresh-btn:hover { background: #e8f0fe; }
  .conn-btn {
    width: auto; padding: .5rem 1.1rem; font-size: .88rem;
  }
  .conn-btn.disconnect { background: #e53935; }
  .conn-btn.disconnect:hover { background: #c62828; }
  .token-area {
    font-family: monospace; font-size: .72rem;
    min-height: 54px; max-height: 120px;
    word-break: break-all; resize: vertical;
  }
  .entry {
    font-size: .8rem; padding: .4rem .65rem;
    border-radius: 6px; line-height: 1.45;
    word-break: break-word;
  }
  .entry.ok   { background: #e8f5e9; color: #2e7d32; }
  .entry.err  { background: #ffebee; color: #c62828; }
  .entry.info { color: #aaa; font-style: italic; }
  .tunnel-toggle {
    padding: .75rem 1.4rem; font-size: .82rem; font-weight: 600;
    color: #1877f2; border-top: 1px solid #eee;
    display: flex; align-items: center; gap: .5rem;
  }
  .tunnel-body { padding: 1rem 1.4rem; border-top: 1px solid #eee; display: flex; flex-direction: column; gap: .85rem; }
  .tunnel-row { display: flex; gap: .6rem; align-items: flex-end; }
  .tunnel-row > * { flex: 1; }
  .tunnel-row input[type=number] { max-width: 90px; flex: none; }
  #tunnelStatus { margin-top: .1rem; }
  .client-row {
    display: flex; align-items: center; gap: .6rem;
    padding: .45rem .6rem; border-radius: 7px;
    background: #f7f9fc; margin-bottom: .35rem;
    font-size: .78rem; font-family: monospace;
  }
  .client-row .client-dot {
    width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
    background: #aaa;
  }
  .client-row .client-dot.active { background: #43a047; }
  .client-row .client-info { flex: 1; display: flex; flex-direction: column; gap: .15rem; }
  .client-row .client-id { font-weight: 600; font-size: .8rem; }
  .client-row .client-stats { opacity: .65; }
  .client-row .disc-btn {
    border: 1px solid #e53935; background: none; color: #e53935;
    border-radius: 5px; padding: .2rem .55rem; cursor: pointer;
    font-size: .72rem; white-space: nowrap;
  }
  .client-row .disc-btn:hover { background: #e53935; color: #fff; }
  #clientsList .empty, #pendingList .empty, #admissionList .empty {
    font-size: .78rem; opacity: .45; padding: .3rem .1rem;
  }
  .pending-row {
    display: flex; align-items: center; gap: .55rem;
    padding: .5rem .65rem; border-radius: 8px; background: #fff8e1;
    border: 1px solid #ffe082; margin-bottom: .35rem;
    font-size: .78rem; font-family: monospace;
  }
  .pending-row .pending-info { flex: 1; display: flex; flex-direction: column; gap: .15rem; }
  .pending-row .pending-name { font-weight: 600; font-size: .8rem; }
  .pending-row .pending-age { opacity: .6; }
  .pending-row button {
    border: 1px solid; background: none; border-radius: 5px;
    padding: .2rem .55rem; cursor: pointer; font-size: .72rem; white-space: nowrap;
  }
  .pending-row .accept-btn       { color: #2e7d32; border-color: #2e7d32; }
  .pending-row .accept-btn:hover { background: #2e7d32; color: #fff; }
  .pending-row .always-btn       { color: #1565c0; border-color: #1565c0; }
  .pending-row .always-btn:hover { background: #1565c0; color: #fff; }
  .pending-row .reject-btn       { color: #c62828; border-color: #c62828; }
  .pending-row .reject-btn:hover { background: #c62828; color: #fff; }
  .admission-row {
    display: flex; align-items: center; gap: .55rem;
    padding: .45rem .65rem; border-radius: 8px;
    background: #f0f7ff; margin-bottom: .25rem;
    font-size: .78rem; font-family: monospace;
  }
  .admission-row .admission-info { flex: 1; }
  .admission-row .remove-btn {
    border: 1px solid #c62828; background: none; color: #c62828;
    border-radius: 5px; padding: .2rem .55rem; cursor: pointer;
    font-size: .72rem; white-space: nowrap;
  }
  .admission-row .remove-btn:hover { background: #c62828; color: #fff; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <div class="dot" id="dot"></div>
    <h1>Bale Proxy</h1>
    <span id="selfName" style="margin-left:auto; font-size:.85rem; color:rgba(255,255,255,.85); font-weight:500"></span>
  </div>
  <div class="body">
    <!-- Phone / OTP registration flow -->
    <div>
      <label>Phone number</label>
      <div class="row">
        <input id="phoneInput" type="tel" placeholder="+98912…">
        <button id="sendOtpBtn" class="conn-btn" style="white-space:nowrap">Send OTP</button>
      </div>
      <div id="otpRow" style="display:none; margin-top:.6rem">
        <label>SMS code</label>
        <div class="row">
          <input id="otpInput" type="text" inputmode="numeric" placeholder="Code" maxlength="8">
          <button id="verifyBtn" class="conn-btn" style="white-space:nowrap">Verify</button>
        </div>
      </div>
      <div id="signupRow" style="display:none; margin-top:.6rem">
        <label>Display name</label>
        <div class="row">
          <input id="nameInput" type="text" placeholder="Your name">
          <button id="signupBtn" class="conn-btn" style="white-space:nowrap">Register</button>
        </div>
      </div>
      <div id="authStatus" class="entry info" style="display:none; margin-top:.4rem"></div>
    </div>

    <div style="border-top:1px solid #eee; padding-top:.8rem">
      <label>Or paste token manually</label>
      <textarea id="tokenInput" class="token-area" placeholder="access_token cookie value…"></textarea>
      <button class="conn-btn" id="connBtn" style="margin-top:.5rem">Connect</button>
    </div>
  </div>

  <!-- Tunnel config -->
  <div id="tunnelSection" style="display:none">
  <div class="tunnel-toggle" id="tunnelToggle">⚡ Tunnel proxy <span id="tunnelBadge"></span></div>
  <div class="tunnel-body" id="tunnelBody">
    <div id="clientFields" style="display:flex; flex-direction:column; gap:.85rem">
      <div class="tunnel-row">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem">
            <label style="margin-bottom:0">Server peer</label>
            <button class="refresh-btn" id="refreshPeers">↺ Refresh</button>
          </div>
          <select id="tunnelPeer"><option value="">— select peer —</option></select>
        </div>
        <div>
          <label>SOCKS5 port</label>
          <input id="socks5Port" type="number" value="1080" min="1" max="65535">
        </div>
      </div>
      <div>
        <label>Find peer by phone / name</label>
        <div class="tunnel-row">
          <input id="peerSearch" type="text" placeholder="+98912… or name">
          <button class="refresh-btn" id="peerSearchBtn">Search</button>
        </div>
        <div id="peerResults" style="display:none; margin-top:.35rem; border:1.5px solid #ddd; border-radius:8px; overflow:hidden; font-size:.82rem"></div>
      </div>
      <div>
        <label>Transport</label>
        <select id="tunnelTransport">
          <option value="webrtc" selected>WebRTC — LiveKit data channel</option>
        </select>
      </div>
    </div>
    <div id="serverFields" style="display:none">
      <div class="entry info" style="margin:0">
        Server mode: relay internet connections and auto-answer incoming calls (LiveKit WebRTC tunnel).
      </div>
    </div>
    <button id="tunnelApply">Activate</button>
    <div id="tunnelStatus" class="entry info" style="display:none"></div>
  </div>
  </div>

  <!-- Pending admission requests (server mode) -->
  <div id="pendingSection" style="display:none; margin-top:1.2rem">
    <div style="font-weight:600; font-size:.9rem; margin-bottom:.5rem; opacity:.7">Pending requests</div>
    <div id="pendingList"></div>
  </div>

  <!-- Connected clients (server mode) -->
  <div id="clientsSection" style="display:none; margin-top:1.2rem">
    <div style="font-weight:600; font-size:.9rem; margin-bottom:.5rem; opacity:.7">Connected clients</div>
    <div id="clientsList"></div>
  </div>

  <!-- Admission allow-list (server mode) -->
  <div id="admissionSection" style="display:none; margin-top:1.2rem">
    <div style="font-weight:600; font-size:.9rem; margin-bottom:.5rem; opacity:.7">Allowed callers</div>
    <div id="admissionList"></div>
  </div>
</div>
<script>
const dot        = document.getElementById('dot');
const connBtn    = document.getElementById('connBtn');
const tokenInput = document.getElementById('tokenInput');
let _connected = false;
let _connecting = false;

function populatePeerSelect(sel, peers, prevVal) {
  sel.innerHTML = '<option value="">— select peer —</option>';
  for (const p of peers) {
    const opt = document.createElement('option');
    opt.value = p.id + ':' + p.type;
    opt.textContent = p.name + '  [' + p.id + ']';
    sel.appendChild(opt);
  }
  if (prevVal) sel.value = prevVal;
}

// ── Phone / OTP auth flow ──────────────────────────────────────────────────────

let _txHash = '';

function showAuthStatus(msg, cls) {
  const el = document.getElementById('authStatus');
  el.style.display = msg ? '' : 'none';
  el.className = 'entry ' + (cls || 'info');
  el.textContent = msg;
}

document.getElementById('sendOtpBtn').addEventListener('click', async (e) => {
  const phone = document.getElementById('phoneInput').value.trim();
  if (!phone) return;
  e.target.disabled = true;
  showAuthStatus('Sending…', 'info');
  try {
    const r = await fetch('/auth/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const d = await r.json();
    if (d.ok) {
      _txHash = d.transactionHash;
      document.getElementById('otpRow').style.display = '';
      document.getElementById('otpInput').focus();
      showAuthStatus(d.isRegistered ? 'Code sent.' : 'Code sent — new account will be created.', 'ok');
    } else {
      showAuthStatus(d.error || 'Failed', 'err');
      e.target.disabled = false;
    }
  } catch (ex) { showAuthStatus(ex.message, 'err'); e.target.disabled = false; }
});

document.getElementById('verifyBtn').addEventListener('click', async (e) => {
  const code = document.getElementById('otpInput').value.trim();
  if (!code || !_txHash) return;
  e.target.disabled = true;
  showAuthStatus('Verifying…', 'info');
  try {
    const r = await fetch('/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, transactionHash: _txHash }),
    });
    const d = await r.json();
    if (d.ok && d.token) {
      tokenInput.value = d.token;
      saveConfig();
      showAuthStatus('Token saved — click Connect.', 'ok');
    } else if (d.ok && d.needsSignup) {
      document.getElementById('signupRow').style.display = '';
      document.getElementById('nameInput').focus();
      showAuthStatus('New user — enter your name to register.', 'info');
      e.target.disabled = false;
    } else {
      showAuthStatus(d.error || 'Invalid code', 'err');
      e.target.disabled = false;
    }
  } catch (ex) { showAuthStatus(ex.message, 'err'); e.target.disabled = false; }
});

document.getElementById('signupBtn').addEventListener('click', async (e) => {
  const name = document.getElementById('nameInput').value.trim();
  if (!name || !_txHash) return;
  e.target.disabled = true;
  showAuthStatus('Creating account…', 'info');
  try {
    const r = await fetch('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, transactionHash: _txHash }),
    });
    const d = await r.json();
    if (d.ok && d.token) {
      tokenInput.value = d.token;
      saveConfig();
      showAuthStatus('Account created — click Connect.', 'ok');
    } else {
      showAuthStatus(d.error || 'Registration failed', 'err');
      e.target.disabled = false;
    }
  } catch (ex) { showAuthStatus(ex.message, 'err'); e.target.disabled = false; }
});

// ── LocalStorage persistence ──────────────────────────────────────────────────

function saveConfig() {
  localStorage.setItem('bale_cfg', JSON.stringify({
    token:     tokenInput.value,
    peer:      document.getElementById('tunnelPeer').value,
    port:      document.getElementById('socks5Port').value,
    transport: document.getElementById('tunnelTransport').value,
  }));
}

function loadConfig() {
  let cfg;
  try { cfg = JSON.parse(localStorage.getItem('bale_cfg') || '{}'); } catch { cfg = {}; }
  if (cfg.token)     tokenInput.value = cfg.token;
  if (cfg.port)      document.getElementById('socks5Port').value = cfg.port;
  if (cfg.transport) document.getElementById('tunnelTransport').value = cfg.transport;
  return cfg;
}

async function loadPeers() {
  try {
    const r = await fetch('/peers');
    const { peers } = await r.json();
    const sel = document.getElementById('tunnelPeer');
    let cfg;
    try { cfg = JSON.parse(localStorage.getItem('bale_cfg') || '{}'); } catch { cfg = {}; }
    populatePeerSelect(sel, peers, cfg.peer || sel.value);
  } catch {}
}

function renderSelf(self) {
  const el = document.getElementById('selfName');
  if (!el) return;
  if (!self) { el.textContent = ''; return; }
  const nick = self.nick ? ' @' + self.nick : '';
  el.textContent = (self.name || '(no name)') + nick;
  el.title = 'User ID: ' + self.id;
}

async function poll() {
  try {
    const r = await fetch('/messages?since=0');
    const { ready, self } = await r.json();
    dot.className = 'dot' + (ready ? ' on' : '');
    renderSelf(self);
    if (ready !== _connected || _connecting) {
      _connected  = ready;
      _connecting = false;
      updateConnBtn();
      if (ready) loadPeers();
    }
  } catch {}
}

function updateConnBtn() {
  if (_connecting) {
    connBtn.textContent = 'Connecting…';
    connBtn.disabled = true;
    connBtn.className = 'conn-btn';
  } else if (_connected) {
    connBtn.textContent = 'Disconnect';
    connBtn.disabled = false;
    connBtn.className = 'conn-btn disconnect';
  } else {
    connBtn.textContent = 'Connect';
    connBtn.disabled = false;
    connBtn.className = 'conn-btn';
  }
  document.getElementById('tunnelSection').style.display = _connected ? '' : 'none';
}

connBtn.addEventListener('click', async () => {
  if (_connected) {
    await fetch('/disconnect', { method: 'POST' });
    _connected = false; _connecting = false;
    updateConnBtn();
  } else {
    const token = tokenInput.value.trim();
    _connecting = true;
    updateConnBtn();
    try {
      const r = await fetch('/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const d = await r.json();
      if (!d.ok) { _connecting = false; updateConnBtn(); }
    } catch { _connecting = false; updateConnBtn(); }
  }
});

// ── Tunnel UI ──────────────────────────────────────────────────────────────────

document.getElementById('refreshPeers').addEventListener('click', async (e) => {
  e.target.disabled = true;
  try {
    await fetch('/refresh-peers', { method: 'POST' });
    await loadPeers();
  } finally {
    e.target.disabled = false;
  }
});

function showSearchResult(msg, isError) {
  const box = document.getElementById('peerResults');
  box.innerHTML = '';
  box.style.display = '';
  const empty = document.createElement('div');
  empty.style.cssText = 'padding:.45rem .7rem; color:' + (isError ? '#c62828' : '#aaa');
  empty.textContent = msg;
  box.appendChild(empty);
}

async function searchPeer() {
  const query = document.getElementById('peerSearch').value.trim();
  const btn = document.getElementById('peerSearchBtn');
  const box = document.getElementById('peerResults');
  if (!query) { showSearchResult('Enter a phone number or name to search.', false); return; }
  btn.disabled = true;
  try {
    const r = await fetch('/contacts/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const d = await r.json();
    box.innerHTML = '';
    if (d.ok && d.users && d.users.length) {
      box.style.display = '';
      for (const u of d.users) {
        const row = document.createElement('div');
        row.style.cssText = 'padding:.45rem .7rem; cursor:pointer; border-bottom:1px solid #eee';
        row.textContent = (u.name || '(no name)') + (u.nick ? \` @\${u.nick}\` : '') + \`  [\${u.id}]\`;
        row.onmouseover = () => row.style.background = '#f0f4ff';
        row.onmouseout  = () => row.style.background = '';
        row.onclick = () => {
          const sel = document.getElementById('tunnelPeer');
          const val = u.id + ':' + (u.type || 1);
          if (!sel.querySelector(\`option[value="\${val}"]\`)) {
            const opt = document.createElement('option');
            opt.value = val;
            opt.textContent = (u.name || u.nick || String(u.id)) + \`  [\${u.id}]\`;
            sel.appendChild(opt);
          }
          sel.value = val;
          saveConfig();
          box.style.display = 'none';
          document.getElementById('peerSearch').value = '';
        };
        box.appendChild(row);
      }
    } else {
      showSearchResult(d.error || 'No results', !!d.error);
    }
  } catch (ex) {
    showSearchResult('Error: ' + ex.message, true);
  } finally {
    btn.disabled = false;
  }
}

document.getElementById('peerSearchBtn').addEventListener('click', searchPeer);
document.getElementById('peerSearch').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchPeer();
  if (e.key === 'Escape') document.getElementById('peerResults').style.display = 'none';
});


function setTunnelMode(mode) {
  document.getElementById('clientFields').style.display = mode === 'client' ? 'flex' : 'none';
  document.getElementById('serverFields').style.display = mode === 'server' ? ''    : 'none';
  document.getElementById('tunnelApply').style.display  = mode === 'server' ? 'none' : '';
  if (mode === 'server') {
    const st = document.getElementById('tunnelStatus');
    st.style.display = '';
    st.className = 'entry info';
    st.textContent = 'Waiting for WebSocket…';
  }
}

document.getElementById('tunnelApply').onclick = async () => {
  const port      = parseInt(document.getElementById('socks5Port').value) || 1080;
  const peerVal   = document.getElementById('tunnelPeer').value;
  const transport = document.getElementById('tunnelTransport').value;
  const [peerId, peerType] = peerVal ? peerVal.split(':') : [];
  const st = document.getElementById('tunnelStatus');
  st.style.display = '';
  st.className = 'entry info';
  st.textContent = 'Activating…';
  try {
    const r = await fetch('/tunnel/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ socks5Port: port, serverPeerId: peerId, serverPeerType: peerType, transport }),
    });
    const d = await r.json();
    st.className = 'entry ' + (d.ok ? 'ok' : 'err');
    st.textContent = d.status || d.error;
    saveConfig();
  } catch (e) {
    st.className = 'entry err';
    st.textContent = 'Error: ' + e.message;
  }
};

function updateTunnelBadge(mode) {
  const badge = document.getElementById('tunnelBadge');
  badge.textContent = mode ? '(' + mode + ')' : '';
}

async function pollTunnel() {
  try {
    const r = await fetch('/tunnel/status');
    const d = await r.json();
    const st       = document.getElementById('tunnelStatus');
    const sec      = document.getElementById('clientsSection');
    const pendSec  = document.getElementById('pendingSection');
    const admSec   = document.getElementById('admissionSection');
    if (d.mode === 'server') {
      const wsReady = document.getElementById('dot').classList.contains('on');
      st.style.display = '';
      st.textContent = wsReady
        ? \`Server — listening for calls | LK rooms: \${d.lkRooms}\`
        : 'Server — waiting for WebSocket connection…';
      st.className = 'entry ' + (wsReady ? 'ok' : 'info');
      sec.style.display     = 'block';
      pendSec.style.display = 'block';
      admSec.style.display  = 'block';
      pollClients();
      pollPending();
      pollAdmission();
    } else if (d.mode === 'client' && st.style.display !== 'none') {
      const tr = d.transport === 'webrtc'
        ? (d.lkActive ? '🔗 WebRTC' : '⏳ WebRTC connecting…')
        : 'messages';
      st.textContent = d.running
        ? \`SOCKS5 on 127.0.0.1:\${d.socks5Port} → peer \${d.serverPeer?.id} [\${tr}] | sessions: \${d.sessions}\`
        : 'Client mode — SOCKS5 not started (connect first)';
      st.className = 'entry ok';
      sec.style.display     = 'none';
      pendSec.style.display = 'none';
      admSec.style.display  = 'none';
    } else {
      sec.style.display     = 'none';
      pendSec.style.display = 'none';
      admSec.style.display  = 'none';
    }
  } catch {}
}

function fmtKB(bytes) { return (bytes / 1024).toFixed(1) + ' KB'; }
function fmtAge(ms) {
  const s = Math.floor((Date.now() - ms) / 1000);
  if (s < 60) return s + 's';
  if (s < 3600) return Math.floor(s/60) + 'm ' + (s%60) + 's';
  return Math.floor(s/3600) + 'h ' + Math.floor((s%3600)/60) + 'm';
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function pollClients() {
  try {
    const r = await fetch('/tunnel/clients');
    const list = await r.json();
    const el = document.getElementById('clientsList');
    if (!list.length) { el.innerHTML = '<div class="empty">No clients connected</div>'; return; }
    el.innerHTML = list.map(c => {
      const who = c.callerName
        ? escapeHtml(c.callerName) + ' <span style="opacity:.5; font-weight:400">(' + c.callerId + ')</span>'
        : (c.callerId ? 'Caller ' + c.callerId : 'Call ' + c.callKey);
      return \`
      <div class="client-row">
        <div class="client-dot\${c.isTunClient ? ' active' : ''}"></div>
        <div class="client-info">
          <span class="client-id">\${who}\${c.isTunClient ? ' · TUN' : ''}</span>
          <span class="client-stats">
            up \${fmtAge(c.connectedAt)} &nbsp;·&nbsp;
            ↑ \${c.rxPkts}pkt / \${fmtKB(c.rxBytes)} &nbsp;·&nbsp;
            ↓ \${c.txPkts}pkt / \${fmtKB(c.txBytes)}
          </span>
        </div>
        <button class="disc-btn" onclick="disconnectClient('\${encodeURIComponent(c.callKey)}')">Disconnect</button>
      </div>\`;
    }).join('');
  } catch {}
}

async function disconnectClient(callKey) {
  await fetch('/tunnel/clients/' + callKey + '/disconnect', { method: 'POST' });
  pollClients();
}

async function pollPending() {
  try {
    const r = await fetch('/server/pending');
    const list = await r.json();
    const el = document.getElementById('pendingList');
    if (!list.length) { el.innerHTML = '<div class="empty">No pending requests</div>'; return; }
    el.innerHTML = list.map(p => {
      const who = p.callerName
        ? escapeHtml(p.callerName) + ' <span style="opacity:.5; font-weight:400">(' + p.callerId + ')</span>'
        : 'Caller ' + p.callerId;
      return \`
      <div class="pending-row">
        <div class="pending-info">
          <span class="pending-name">\${who}</span>
          <span class="pending-age">waiting \${fmtAge(p.receivedAt)}</span>
        </div>
        <button class="accept-btn" onclick="acceptPending('\${p.callId}', false)">Accept once</button>
        <button class="always-btn" onclick="acceptPending('\${p.callId}', true)">Allow always</button>
        <button class="reject-btn" onclick="rejectPending('\${p.callId}')">Reject</button>
      </div>\`;
    }).join('');
  } catch {}
}

async function acceptPending(callId, addToList) {
  await fetch('/server/pending/' + encodeURIComponent(callId) + '/accept', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ addToList: !!addToList }),
  });
  pollPending(); pollClients(); pollAdmission();
}

async function rejectPending(callId) {
  await fetch('/server/pending/' + encodeURIComponent(callId) + '/reject', { method: 'POST' });
  pollPending();
}

async function pollAdmission() {
  try {
    const r = await fetch('/server/admission');
    const list = await r.json();
    const el = document.getElementById('admissionList');
    if (!list.length) { el.innerHTML = '<div class="empty">No callers on the allow-list</div>'; return; }
    el.innerHTML = list.map(a => {
      const who = a.callerName
        ? escapeHtml(a.callerName) + ' <span style="opacity:.5; font-weight:400">(' + a.callerId + ')</span>'
        : 'Caller ' + a.callerId;
      return \`
      <div class="admission-row">
        <div class="admission-info">\${who}</div>
        <button class="remove-btn" onclick="removeAdmission(\${a.callerId})">Remove</button>
      </div>\`;
    }).join('');
  } catch {}
}

async function removeAdmission(callerId) {
  await fetch('/server/admission/' + callerId, { method: 'DELETE' });
  pollAdmission();
}

setInterval(pollTunnel, 3000);

// Restore persisted config, then sync live connection state
const _savedCfg = loadConfig();
(async () => {
  try {
    const r = await fetch('/config');
    const d = await r.json();
    if (!_savedCfg.token && d.token) tokenInput.value = d.token;
    setTunnelMode(d.tunnelMode || 'client');
    updateTunnelBadge(d.tunnelMode || 'client');
    _connected  = d.ready;
    _connecting = d.connecting;
    renderSelf(d.self);
    updateConnBtn();
    if (d.ready) loadPeers();
  } catch {}
})();

// Save on any field change
tokenInput.addEventListener('input', saveConfig);
document.getElementById('socks5Port').addEventListener('input', saveConfig);
document.getElementById('tunnelTransport').addEventListener('change', saveConfig);
document.getElementById('tunnelPeer').addEventListener('change', saveConfig);

setInterval(poll, 2000);
</script>
</body>
</html>`;

// ── Startup ────────────────────────────────────────────────────────────────────

const client = new BaleWsClient();

/**
 * Owns the single Bale WebSocket and decides when it should be up.
 *
 * Mirrors `ai.bale.proxy.BaleConnection` in the Android app — same desired-state
 * rule, same `reconcile()` reconciliation pattern, same multi-subscriber model
 * for call-event callbacks. A Node CLI process has no foreground/background, so
 * the Android `isForeground` input collapses to a constant `true`.
 *
 * Inputs:
 *   - mode (TUNNEL_MODE)            — 'client' | 'server'
 *   - userInitiatedDisconnect       — sticky flag set by /disconnect, cleared by /connect
 *   - tunnel.serverPeer (client)    — analog of Android's BaleVpnService.isRunning
 *
 * Rules (WS up iff …):
 *   - server → !userInitiatedDisconnect
 *   - client → !userInitiatedDisconnect AND tunnel is not active (no serverPeer)
 *
 * Bypasses:
 *   - `resolveWs()` brings the WS up explicitly during signaling, ignoring the
 *     "client + tunnel up → WS down" rule. After signaling completes,
 *     `onTunnelReady` (passed to TunnelManager) calls `reconcile()` which drops
 *     the WS again.
 */
const BaleConnection = {
    client,
    userInitiatedDisconnect: false,

    get isReady()    { return client.ready === true; },
    get isUp()       { return client.connecting || client.ready; },
    get accessToken(){ return client.accessToken; },

    /** Bring the WS up or down to match the desired state. Idempotent. */
    reconcile() {
        if (!client.accessToken) return;
        const want = this._desiredUp();
        if (want && !this.isUp)        client.connect();
        else if (!want && this.isUp)   client.disconnect();
    },

    _desiredUp() {
        if (this.userInitiatedDisconnect) return false;
        if (TUNNEL_MODE === 'server') return true;
        // Client mode: WS not needed while the tunnel is active. The LK channel
        // carries steady-state traffic; signaling brings the WS up briefly via
        // resolveWs() and onTunnelReady drops it again. We key on `serverPeer`
        // (= "user has activated a tunnel") rather than `lkTransport` to mirror
        // Android's `BaleVpnService.isRunning` — the rule stays stable across
        // LK disconnect/reconnect cycles instead of bouncing the WS each time.
        const t = client.tunnel;
        return !(t.mode === 'client' && t.serverPeer);
    },

    /**
     * Lazy WS resolver for `TunnelManager`. Brings the WS up if reconcile() has
     * torn it down, then waits up to 10 s for handshake completion. Returns null
     * if no token is set or the handshake never lands. Bypasses reconcile() on
     * purpose — the rule wants WS down while a tunnel is up, but signaling
     * needs it briefly.
     */
    async resolveWs() {
        if (!client.accessToken) { console.error('[BaleConnection] No access token'); return null; }
        // Clear sticky disconnect — the user (re)starting a tunnel is itself an
        // implicit "I want WS now" override, matching Android's resolveWs.
        this.userInitiatedDisconnect = false;
        if (!this.isUp) client.connect();
        if (!client.ready) {
            for (let i = 0; i < 20 && !client.ready; i++) await new Promise(r => setTimeout(r, 500));
        }
        return client.ready ? client : null;
    },

    onTunnelPermanentDisconnect() {
        console.log('[BaleConnection] tunnel permanent disconnect — reconciling WS');
        this.reconcile();
    },
};

// Server-mode auto-answer: subscribe once on the singleton WS client. The listener
// list survives WS disconnect/reconnect cycles, so this never needs to be re-wired.
// (Mirrors the Android pattern where BaleServerService installs onCallReceived on
// BaleConnection and it's invoked across WS lifetimes.)
client.addOnCallReceived((callId, callEntity) => {
    client.tunnel.onCallReceived(callId, callEntity)
        .catch(e => console.error('[BaleConnection] onCallReceived dispatch failed:', e.message));
});

// Clean up pending entries / running clients when Bale tells us the call ended
// (peer hung up, network drop, etc.). Mirrors Android's onCallEndedRemote.
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

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(HTML);
    }

    if (req.method === 'GET' && url.pathname === '/config') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            token:       client.accessToken || '',
            ready:       client.ready,
            connecting:  client.connecting,
            tunnelMode:  TUNNEL_MODE,
            self:        client.self,
        }));
    }

    if (req.method === 'POST' && url.pathname === '/connect') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', () => {
            try {
                const { token } = JSON.parse(body || '{}');
                if (token) client.accessToken = token;
                if (client.connecting || client.ready) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ ok: true, status: 'already connected' }));
                }
                // Mirror Android btnWs Connect: clear sticky flag, let reconcile decide.
                BaleConnection.userInitiatedDisconnect = false;
                BaleConnection.reconcile();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, status: 'connecting' }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    if (req.method === 'POST' && url.pathname === '/disconnect') {
        // Mirror Android btnWs Disconnect: set sticky flag and reconcile.
        BaleConnection.userInitiatedDisconnect = true;
        BaleConnection.reconcile();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: true }));
    }

    if (req.method === 'GET' && url.pathname === '/messages') {
        const since = parseInt(url.searchParams.get('since') || '0');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            ready:    client.ready,
            self:     client.self,
            messages: client.messages.filter(m => m.ts >= since),
        }));
    }

    if (req.method === 'GET' && url.pathname === '/peers') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ peers: client.peers }));
    }

    if (req.method === 'POST' && url.pathname === '/refresh-peers') {
        client.loadContacts()
            .then(peers => { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ ok: true, count: peers.length })); })
            .catch(e   => { res.writeHead(400, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ ok: false, error: e.message })); });
        return;
    }

    if (req.method === 'POST' && url.pathname === '/send') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const { peerId, peerType, text } = JSON.parse(body);
                if (!peerId || !text) throw new Error('peerId and text are required');
                const id   = parseInt(peerId);
                const type = parseInt(peerType) === 2 ? PEERTYPE_GROUP : PEERTYPE_PRIVATE;
                await client.sendText(id, type, text);
                client.messages.push({ dir: 'out', to: id, peerType: type, text, ts: Date.now() });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    // ── Contact search route ───────────────────────────────────────────────────
    if (req.method === 'POST' && url.pathname === '/contacts/search') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const { query } = JSON.parse(body);
                console.log(`[Search] query="${query}"`);
                if (!query) throw new Error('query required');

                // Phone-like query → ImportContacts (global lookup)
                // Name query → SearchContacts (within contacts)
                const isPhone = /^[+\d][\d\s\-]{5,}$/.test(query.trim());
                let users = [];

                if (isPhone) {
                    console.log('[Search] using ImportContacts via gRPC-web (phone lookup)');
                    const buf  = await grpcCall('bale.users.v1.Users', 'ImportContacts', buildImportContactsRequest(query), client.accessToken);
                    console.log(`[Search] ImportContacts raw ${buf.length} bytes`);
                    const resp = decodeImportContactsResponse(buf);
                    // Server returns peer references — do a follow-up LoadUsers to get display names
                    if (resp.users.length > 0) {
                        users = resp.users.map(b => decodeUserEntity(b)).filter(u => u.id)
                            .map(u => ({ id: u.id, name: u.name || '', nick: u.nick || '', type: PEERTYPE_PRIVATE }));
                    } else if (resp.userPeers.length > 0) {
                        console.log(`[Search] ImportContacts got ${resp.userPeers.length} peers, loading users…`);
                        const loadBuf = await client._rpcCall('bale.users.v1.Users', 'LoadUsers', buildLoadUsersRequest(resp.userPeers));
                        const loaded  = decodeLoadUsersResponse(loadBuf);
                        users = loaded.users.map(b => decodeUserEntity(b)).filter(u => u.id)
                            .map(u => ({ id: u.id, name: u.name || '', nick: u.nick || '', type: PEERTYPE_PRIVATE }));
                    }
                } else {
                    console.log('[Search] using SearchContacts via gRPC-web (name lookup)');
                    const buf  = await grpcCall('bale.users.v1.Users', 'SearchContacts', buildSearchContactsRequest(query), client.accessToken);
                    console.log(`[Search] SearchContacts raw ${buf.length} bytes`);
                    const resp = decodeSearchContactsResponse(buf);
                    // User entities (already full)
                    users = resp.users.map(b => decodeUserEntity(b)).filter(u => u.id)
                        .map(u => ({ id: u.id, name: u.name || '', nick: u.nick || '', type: PEERTYPE_PRIVATE }));
                    // User peers without full entity — load them
                    if (users.length === 0 && resp.userPeers.length > 0) {
                        const loadBuf = await client._rpcCall('bale.users.v1.Users', 'LoadUsers', buildLoadUsersRequest(resp.userPeers));
                        const loaded  = decodeLoadUsersResponse(loadBuf);
                        users = loaded.users.map(b => decodeUserEntity(b)).filter(u => u.id)
                            .map(u => ({ id: u.id, name: u.name || '', nick: u.nick || '', type: PEERTYPE_PRIVATE }));
                    }
                    // Group peers — include as GROUP type
                    for (const gp of resp.groupPeers) {
                        users.push({ id: gp.id, name: `Group ${gp.id}`, nick: '', type: PEERTYPE_GROUP });
                    }
                }

                console.log(`[Search] returning ${users.length} users`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, users }));
            } catch (e) {
                console.error(`[Search] error: ${e.message}`);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    // ── Auth routes ────────────────────────────────────────────────────────────
    // Step 1: send phone number → OTP via SMS
    if (req.method === 'POST' && url.pathname === '/auth/start') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const { phone } = JSON.parse(body);
                if (!phone) throw new Error('phone required');
                const buf  = await grpcCall('bale.auth.v1.Auth', 'StartPhoneAuth', buildStartPhoneAuthRequest(phone));
                const resp = decodeStartPhoneAuthResponse(buf);
                console.log(`[Auth] StartPhoneAuth phone=${phone} hash=${resp.transactionHash} registered=${resp.isRegistered}`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, transactionHash: resp.transactionHash, isRegistered: resp.isRegistered }));
            } catch (e) {
                console.error('[Auth] StartPhoneAuth:', e.message);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    // Step 2: verify OTP code → JWT access token
    if (req.method === 'POST' && url.pathname === '/auth/verify') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const { transactionHash, code } = JSON.parse(body);
                if (!transactionHash || !code) throw new Error('transactionHash and code required');
                let resp;
                try {
                    const buf = await grpcCall('bale.auth.v1.Auth', 'ValidateCode', buildValidateCodeRequest(transactionHash, code));
                    resp = decodeAuthResponse(buf);
                } catch (e) {
                    if (e.grpcMessage && e.grpcMessage.includes('PHONE_NUMBER_UNOCCUPIED')) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ ok: true, needsSignup: true }));
                        return;
                    }
                    throw e;
                }
                if (!resp.jwt) throw new Error('No JWT in ValidateCode response');
                const token = await fetchAccessToken(resp.jwt) || resp.jwt;
                console.log('[Auth] ValidateCode success, token obtained');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, token }));
            } catch (e) {
                console.error('[Auth] ValidateCode:', e.message);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    // Step 3 (new users only): register with name → JWT access token
    if (req.method === 'POST' && url.pathname === '/auth/signup') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            try {
                const { transactionHash, name } = JSON.parse(body);
                if (!transactionHash || !name) throw new Error('transactionHash and name required');
                const buf  = await grpcCall('bale.auth.v1.Auth', 'SignUp', buildSignUpRequest(transactionHash, name));
                const resp = decodeAuthResponse(buf);
                if (!resp.jwt) throw new Error('No JWT in SignUp response');
                const token = await fetchAccessToken(resp.jwt) || resp.jwt;
                console.log('[Auth] SignUp success, token obtained');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, token }));
            } catch (e) {
                console.error('[Auth] SignUp:', e.message);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    if (req.method === 'GET' && url.pathname === '/tunnel/status') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(client.tunnel.status()));
    }

    if (req.method === 'POST' && url.pathname === '/tunnel/config') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', () => {
            try {
                const { socks5Port, serverPeerId, serverPeerType, transport } = JSON.parse(body);
                client.tunnel.configure(TUNNEL_MODE, { serverPeerId, serverPeerType, socks5Port, transport });
                const status = TUNNEL_MODE === 'client'
                    ? `SOCKS5 on 127.0.0.1:${socks5Port || 1080} → peer ${serverPeerId} [${transport || 'webrtc'}]`
                    : 'Server mode active — relay + auto-answer calls';
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, status }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    if (req.method === 'GET' && url.pathname === '/tunnel/clients') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(client.tunnel.clients()));
    }

    if (req.method === 'POST' && url.pathname.startsWith('/tunnel/clients/') && url.pathname.endsWith('/disconnect')) {
        const callKey = decodeURIComponent(url.pathname.slice('/tunnel/clients/'.length, -'/disconnect'.length));
        const ok = client.tunnel.disconnectClient(callKey);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok }));
    }

    // ── Server-mode admission control ────────────────────────────────────────
    // Resolve a callerId to a contact name from the loaded contacts list (best-effort).
    const resolveCallerName = (uid) => {
        const peer = client.peers.find(p => Number(p.id) === Number(uid));
        return peer ? peer.name : null;
    };

    if (req.method === 'GET' && url.pathname === '/server/pending') {
        const list = client.tunnel.pendingCalls().map(p => ({
            ...p,
            callerName: p.callerName || resolveCallerName(p.callerId),
        }));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(list));
    }

    if (req.method === 'POST' && url.pathname.startsWith('/server/pending/') && url.pathname.endsWith('/accept')) {
        const callId = decodeURIComponent(url.pathname.slice('/server/pending/'.length, -'/accept'.length));
        let body = '';
        req.on('data', c => body += c);
        req.on('end', async () => {
            let addToList = false;
            try { addToList = !!JSON.parse(body || '{}').addToList; } catch {}
            const ok = await client.tunnel.acceptPending(callId, addToList);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok }));
        });
        return;
    }

    if (req.method === 'POST' && url.pathname.startsWith('/server/pending/') && url.pathname.endsWith('/reject')) {
        const callId = decodeURIComponent(url.pathname.slice('/server/pending/'.length, -'/reject'.length));
        const ok = await client.tunnel.rejectPending(callId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok }));
    }

    if (req.method === 'GET' && url.pathname === '/server/admission') {
        const list = client.tunnel.admissionList().map(e => ({
            ...e,
            callerName: resolveCallerName(e.callerId),
        }));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(list));
    }

    if (req.method === 'POST' && url.pathname === '/server/admission') {
        let body = '';
        req.on('data', c => body += c);
        req.on('end', () => {
            try {
                const { callerId } = JSON.parse(body || '{}');
                const ok = AdmissionStore.add(Number(callerId));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: e.message }));
            }
        });
        return;
    }

    if (req.method === 'DELETE' && url.pathname.startsWith('/server/admission/')) {
        const callerId = Number(decodeURIComponent(url.pathname.slice('/server/admission/'.length)));
        const ok = AdmissionStore.remove(callerId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok }));
    }

    res.writeHead(404);
    res.end();
});

// Cross-platform open-in-browser. macOS: `open`; Windows: `start ""` (the empty
// title arg keeps `start` from interpreting a quoted URL as the window title);
// Linux/BSD: `xdg-open`. Failures (no DISPLAY on headless Linux, missing tool)
// are swallowed — auto-open is a convenience, not a hard requirement.
function openInBrowser(url) {
    const { exec } = require('child_process');
    const cmd = process.platform === 'darwin' ? `open "${url}"`
              : process.platform === 'win32'  ? `start "" "${url}"`
              :                                 `xdg-open "${url}"`;
    exec(cmd, () => {});
}

server.listen(HTTP_PORT, () => {
    const url = `http://localhost:${HTTP_PORT}`;
    console.log(`[HTTP] ${url}`);
    // Auto-open the UI when running in client mode (the typical interactive
    // use). Suppressed on a server install where the UI is rarely needed and
    // a desktop session may not even be present, and via BALE_NO_BROWSER=1
    // for headless dev iteration.
    if (TUNNEL_MODE === 'client' && !process.env.BALE_NO_BROWSER) openInBrowser(url);
});

// Auto-configure tunnel mode from command-line arg.
// For server mode this also creates the bale0 TUN interface immediately.
if (TUNNEL_MODE === 'server') client.tunnel.configure('server');
// Bring the WS up via reconcile() (the Android pattern). For client mode at
// startup, no tunnel is up yet → rule says WS up. For server mode with no
// sticky disconnect → rule says WS up. Both end up calling client.connect()
// internally; reconcile is the single source of truth for lifecycle.
BaleConnection.reconcile();

process.on('SIGINT', () => {
    console.log('\n[WS] Exiting');
    const fd = client.tunnel._tunFd;
    if (fd !== null) { client.tunnel._tunFd = null; require('./tun').close(fd); }
    process.exit(0);
});
