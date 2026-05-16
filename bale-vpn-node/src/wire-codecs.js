'use strict';

// All Bale protobuf codecs in one place. The wire format is hand-rolled
// (Bale uses unframed protobuf over a WebSocket — not gRPC-web), so we use
// protobufjs's Reader/Writer at the byte level rather than generated stubs.
//
// Sections (search for "──"):
//   • Auth message codecs (bale.auth.v1.Auth)
//   • Contact search codecs (bale.users.v1.Users — Search/Import)
//   • Frame encoders (handshake / ping / RPC request)
//   • Message builders (AcceptCall, DiscardCall, StartCall, GetContacts,
//                       LoadUsers, SendMessage)
//   • Frame decoders (server → client)
//   • Update/sub-message decoders (CallEntity, TIF, QBZ, etc.)
//   • Contact / peer entity decoders

const crypto = require('crypto');
const { Reader, Writer } = require('protobufjs');
const {
    API_VERSION, PROTO_VERSION,
    AUTH_APP_ID, AUTH_API_KEY, SENDCODE_SMS,
    toLong,
} = require('./constants');

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
    // phone e.g. "+98912121221"
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

// callEnded update (field 52809) — payload is a wrapped CallEntity. The flat
// decoder accidentally Just Works here: it reads the outer wrapper's tag, then
// the inner CallEntity's tag at field 1 (callId varint) on the next iteration.
function decodeCallEnded(buf) {
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

// Call entity (A / Je codec, module 23186 — verified against the encoder
// in `index.52867891.js`). Full field map:
//   field  1 (tag   8): id                       int64    callId
//   field  2 (tag  18): token                    string   LiveKit JWT (only on AcceptCall reply)
//   field  3 (tag  26): room                     string   LiveKit room name
//   field  4 (tag  34): url                      wrapped-string  LiveKit server URL
//   field  5 (tag  40): video                    bool     video call flag
//   field  6 (tag  48): createDate               int64    ms-epoch when call was created
//   field  7 (tag  56): startDate                int64    ms-epoch when call actually started
//   field  8 (tag  64): adminUid                 int32    caller (= callerId on the callee side)
//   field  9 (tag  74): peer                     sub-msg  {type, id} other-party ref — decodes to self on the callee, intentionally ignored
//   field 10 (tag  80): duration                 int32    seconds (set when call ends)
//   field 11 (tag  88): discardReason            int32    enum (set when call ends)
//   field 12 (tag  96): isLivekit                bool
//   field 13 (tag 106): discardServiceMessageRid sub-msg
//   field 14 (tag 114): discardServiceMessageDate sub-msg
function decodeCallEntity(buf) {
    const r = new Reader(buf), o = {
        id: '0', token: '', room: '', url: '', isLivekit: false, callerId: 0,
        video: false, createDate: '0', startDate: '0', duration: 0, discardReason: 0,
    };
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1:  o.id            = r.int64().toString(); break;
            case 2:  o.token         = r.string(); break;
            case 3:  o.room          = r.string(); break;
            case 4:  o.url           = decodeWrappedString(r.bytes()); break;
            case 5:  o.video         = r.bool(); break;
            case 6:  o.createDate    = r.int64().toString(); break;
            case 7:  o.startDate     = r.int64().toString(); break;
            // field 8 = adminUid; on the callee side this is the other party.
            // Field 9 (peer) decodes to self for the callee, so we never read
            // it for callerId (would attribute every incoming call to ourselves).
            case 8:  o.callerId      = r.int32(); break;
            case 10: o.duration      = r.int32(); break;
            case 11: o.discardReason = r.int32(); break;
            case 12: o.isLivekit     = r.bool(); break;
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

// Decode the inner protobuf payload of an RPC error response into a
// readable { code, message }. Bale uses { code: int32 = 1, message: string = 2 }.
// Falls back to hex if either field is missing so we never throw away info.
function decodeRpcError(buf) {
    const r = new Reader(buf);
    let code = 0, message = '';
    while (r.pos < r.len) {
        const tag = r.uint32();
        switch (tag >>> 3) {
            case 1: code    = r.int32();  break;
            case 2: message = r.string(); break;
            default: r.skipType(tag & 7);
        }
    }
    return { code, message: message || ('0x' + Buffer.from(buf).toString('hex')) };
}

module.exports = {
    // Auth
    buildStartPhoneAuthRequest, decodeStartPhoneAuthResponse,
    buildValidateCodeRequest, decodeAuthResponse, buildSignUpRequest,
    // Contact search
    buildSearchContactsRequest, decodeSearchContactsResponse,
    buildImportContactsRequest, decodeImportContactsResponse,
    // Frame encoders
    encodeHandshake, encodePing, encodeRpcRequest,
    // Message builders
    buildAcceptCallRequest, buildDiscardCallRequest, buildStartCallRequest,
    buildGetContactsRequest, buildLoadUsersRequest,
    buildPeerBytes, buildSendMessageRequest,
    // Frame decoders
    decodeServerFrame, decodeHandshakeResponse, decodeUpdateContainer,
    decodeRpcResponse, decodePong, decodeSubscribeResponse, decodeRpcError,
    // Sub-message decoders
    decodeXC, decodeCallReceived, decodeCallEnded, decodeCallEntity,
    decodeCallResponse, decodeTIF, decodeQBZ, decodeTextMessage,
    // Contact / peer entity decoders
    decodeGetContactsResponse, decodeUserPeer, decodeLoadUsersResponse,
    decodeWrappedString, decodeUserEntity, decodeGroupPeer,
};
