'use strict';

// BaleWsClient — owns the singleton WebSocket to next-ws.bale.ai. Wires up:
//   • Custom binary protobuf framing (handshake / ping / RPC / push updates)
//   • Multi-subscriber call-event listeners (addOnCallReceived, addOnCallEnded)
//     that survive WS disconnect/reconnect cycles
//   • The TunnelManager singleton (created in the constructor with hooks back
//     to BaleConnection — which is supplied lazily via the `connection` param
//     to avoid a circular import)
//   • RPC plumbing (acceptCall, discardCall, startCall, sendText, lookupContactName, loadSelf)
//   • Inner 3-second auto-reconnect on transient WS drops; cancelled by
//     explicit `disconnect()`. BaleConnection.reconcile() is the lifecycle
//     authority — this class doesn't try to override that.

const WebSocket = require('ws');
const fs   = require('fs');
const path = require('path');
const {
    ACCESS_TOKEN, WS_URL, API_VERSION, PROTO_VERSION,
    PEERTYPE_PRIVATE, PEERTYPE_GROUP, EXPEERTYPE_PRIVATE, EXPEERTYPE_GROUP,
    RUNTIME_DIR,
} = require('./constants');

// Persistent token storage. Sits alongside .allowed-callers.json in the
// runtime dir (next to the binary when packaged via pkg, or the package
// root in dev). Mode 0600 — readable only by the user running the process.
// Keeping the token here (and out of the browser) means an XSS in the UI
// can no longer exfiltrate it: /config and /state report only a boolean.
const TOKEN_FILE = path.join(RUNTIME_DIR, '.bale-token');
function loadPersistedToken() {
    try { return fs.readFileSync(TOKEN_FILE, 'utf8').trim(); } catch { return ''; }
}
function persistToken(t) {
    if (t) fs.writeFileSync(TOKEN_FILE, t, { mode: 0o600 });
    else   try { fs.unlinkSync(TOKEN_FILE); } catch {}
}
const {
    encodeHandshake, encodePing, encodeRpcRequest,
    decodeServerFrame, decodeSubscribeResponse, decodeCallResponse, decodeRpcError,
    decodeGetContactsResponse, decodeLoadUsersResponse, decodeUserEntity,
    buildAcceptCallRequest, buildDiscardCallRequest, buildStartCallRequest,
    buildGetContactsRequest, buildLoadUsersRequest, buildSendMessageRequest,
} = require('./wire-codecs');
const { decodeJwtPayload } = require('./grpc-web');
const { TunnelManager } = require('./tunnel');

// Friendly names for xC update field tags we don't decode into a typed
// property. Anything in _unknownFields is one of these (or genuinely new).
function _xcUpdateName(f) {
    switch (f) {
        case 19: return 'messageRead';      // someone read a message in our chat
        case 50: return 'messageReadByMe';  // we read a message (sync to other clients)
        case 85: return 'emptyUpdate';      // Bale stream heartbeat / sync marker
        default: return `field=${f}`;
    }
}

class BaleWsClient {
    /**
     * @param {{
     *   resolveWs:                () => Promise<BaleWsClient|null>,
     *   reconcile:                () => void,
     *   onTunnelPermanentDisconnect: () => void,
     * }} connection — BaleConnection hooks. Passed in (rather than imported)
     *   so this file doesn't depend on ../bale-connection (which itself
     *   depends on this class). Wired by the entrypoint after construction.
     */
    constructor(connection) {
        this.ws            = null;
        this.rpcIndex      = 0;
        this.pingTimer     = null;
        this.pingCounter   = 0;
        this.ready         = false;
        // Wall-clock timestamp of the last inbound WS frame. Used by _startPing
        // to detect zombie connections (TCP "open" but no application traffic).
        // 0 = no inbound seen yet.
        this._lastInboundTs = 0;
        // Consecutive-failed-reconnect counter; drives the exponential
        // back-off in the close handler. Reset to 0 on every successful
        // handshake (see _onFrame). With base=3s and cap=30s the effective
        // wait progression is 3s → 6s → 12s → 24s → 30s.
        this._reconnectAttempt = 0;
        // Set when Bale closes the WS with code 4401 (their custom "Unauthenticated"
        // close code) — the token is dead. Cleared by connect() on next login.
        this.sessionExpired = false;
        // Set when the server's handshake reports a different proto/api version
        // than we know how to speak. Means the app needs to be updated; further
        // reconnects to the same server will hit the same wall.
        this.versionMismatch = false;
        // RPC idx of the SubscribeToUpdates request, recorded so we can
        // recognise its server-side responses and quietly ignore the routine
        // 30 s `code=4 DEADLINE_EXCEEDED` end-of-stream marker. We don't
        // re-subscribe: realtime events flow on WS frame field 2 (the
        // standalone Push update channel) independent of this RPC, so a
        // fresh subscribe wouldn't add anything. See _onFrame for details.
        this.subscribeIdx  = null;
        this.pending       = new Map();
        this.messages      = [];
        this.peers         = [];
        this.tunnel        = new TunnelManager({
            getBale:               async () => connection.resolveWs(),
            onTunnelReady:         () => connection.reconcile(),
            onPermanentDisconnect: () => connection.onTunnelPermanentDisconnect(),
        });
        // accessToken is a getter/setter — every assignment auto-persists to
        // disk (or unlinks the file when cleared). Initial value: file > env
        // constant > empty.
        let _token = loadPersistedToken() || ACCESS_TOKEN;
        Object.defineProperty(this, 'accessToken', {
            get: () => _token,
            set: (v) => { _token = v || ''; persistToken(_token); },
            enumerable: true,
        });
        this.autoReconnect = false;
        this.connecting    = false;
        this.self          = null;       // { id, name, nick } — account owner
        // Cache for callers we resolve via LoadUsers — covers strangers who
        // aren't in `peers`. Survives WS reconnect (uid → name is stable).
        this._userNameCache = new Map();
        // Multi-subscriber call event listeners — survive WS disconnect/reconnect
        // cycles because they live on this singleton, not on each WebSocket session.
        this._onCallReceivedListeners = [];
        this._onCallEndedListeners    = [];
        this._onCallAcceptedListeners = [];
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

    addOnCallAccepted(cb) {
        this._onCallAcceptedListeners.push(cb);
        return () => {
            const i = this._onCallAcceptedListeners.indexOf(cb);
            if (i >= 0) this._onCallAcceptedListeners.splice(i, 1);
        };
    }

    connect(token) {
        if (token) this.accessToken = token;
        if (!this.accessToken) throw new Error('No access token set');
        // Clear transient flags — a fresh connect starts from a clean slate.
        this.sessionExpired  = false;
        this.versionMismatch = false;
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
            // Any inbound frame proves the socket is live; refresh the
            // liveness timestamp before decoding so even a malformed-but-
            // received frame counts.
            this._lastInboundTs = Date.now();
            try { this._onFrame(decodeServerFrame(new Uint8Array(data))); }
            catch (err) { console.error('[WS] Decode error:', err.message); }
        });

        ws.on('close', (code) => {
            clearInterval(this.pingTimer);
            this.ready      = false;
            this.connecting = false;
            // Fail any in-flight RPCs immediately — they can never succeed once
            // the socket is closed, no point making callers wait the 15 s timeout.
            this._drainPending(`WS closed (code ${code})`);
            // Don't tear down LK state on WS drop — server-mode rooms and the
            // client-mode tunnel are independent of the Bale WS once established.
            if (code === 4401) {
                console.error('[WS] 4401 Unauthenticated — token expired');
                this.autoReconnect  = false;
                // Clearing accessToken makes connection.reconcile()'s empty-token
                // guard short-circuit, preventing immediate redial. The setter
                // also unlinks .bale-token so a process restart doesn't reuse
                // the dead credential.
                this.accessToken    = '';
                this.sessionExpired = true;
            } else if (this.autoReconnect) {
                // Exponential back-off: 3s, 6s, 12s, 24s, then capped at 30s.
                // Counter resets to 0 on a successful handshake (see _onFrame),
                // so a healthy long-running session that drops once won't
                // start at a long delay. Bounded delay avoids hammering Bale's
                // gateway when it's genuinely down (e.g., the ECONNREFUSED
                // clusters during operator outages).
                const attempt  = this._reconnectAttempt++;
                const delaySec = Math.min(3 * (1 << Math.min(attempt, 4)), 30);
                console.log(`[WS] Closed ${code} — reconnecting in ${delaySec}s (attempt ${attempt + 1})`);
                this._reconnectTimer = setTimeout(() => {
                    this._reconnectTimer = null;
                    this.connect();
                }, delaySec * 1000);
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
        // `self` is intentionally NOT cleared here — the user's identity is tied
        // to the access token, not the socket. Client-mode tunnel activation
        // drops the WS by design once signaling is done; nulling `self` here
        // would blank the UI's "signed in as" label every time. `self` is
        // cleared by the logout path (where the token actually changes).
        // Cancel any pending inner auto-reconnect — BaleConnection.reconcile()
        // is the sole authority on lifecycle; a stray timer would race and
        // reopen the WS after we deliberately closed it.
        if (this._reconnectTimer) { clearTimeout(this._reconnectTimer); this._reconnectTimer = null; }
        if (this.ws) { this.ws.close(); this.ws = null; }
        clearInterval(this.pingTimer);
        this._drainPending('WS disconnected by user');
        console.log('[WS] Disconnected by user');
    }

    // Reject every in-flight RPC promise so awaiting callers fail fast instead
    // of stalling for the full 15 s _rpcCall timeout. Idempotent — the empty-
    // map short-circuit + clearTimeout/reject being no-ops on already-completed
    // entries make repeat calls safe.
    _drainPending(reason) {
        if (this.pending.size === 0) return;
        const drained = [...this.pending.values()];
        this.pending.clear();
        drained.forEach(cb => {
            clearTimeout(cb.timer);
            cb.reject(new Error(reason));
        });
    }

    // Friendly name for inbound WS frame kinds we want to surface. Routine
    // RPC responses, push updates and pongs are intentionally omitted —
    // they're noisy and have their own per-content logs (or get filtered
    // out as routine traffic). We keep handshake + terminate-session so
    // unexpected protocol events still log loudly.
    _frameKindName(frame) {
        if (frame.handshakeResponse) return 'Handshake response';
        if (frame.terminateSession)  return 'Terminate session';
        return null;
    }

    _onFrame(frame) {
        const kind = this._frameKindName(frame);
        if (kind) console.log(`[WS] frame: ${kind}`);

        if (frame.handshakeResponse) {
            const hs = frame.handshakeResponse;
            console.log(`[WS] Handshake: proto=${hs.mkprotoVersion} api=${hs.apiVersion}`);
            if (hs.mkprotoVersion === PROTO_VERSION && hs.apiVersion === API_VERSION) {
                this.ready = true;
                this._reconnectAttempt = 0;   // healthy session, reset back-off
                console.log('[WS] Ready — subscribing to updates');
                this._subscribe();
                this._startPing();
                this.tunnel.onWsReady();
                this.loadSelf().catch(e => console.error('[Self] loadSelf failed:', e.message));
                this.loadContacts().catch(e => console.error('[Contacts] loadContacts failed:', e.message));
            } else {
                console.error(`[WS] Version mismatch: server proto=${hs.mkprotoVersion} api=${hs.apiVersion}, expected proto=${PROTO_VERSION} api=${API_VERSION}`);
                this.versionMismatch = true;
                this.autoReconnect   = false;     // stop the inner timer
                if (this.ws) this.ws.close();     // shut down the dead session
            }
        }

        if (frame.response) {
            const rpc = frame.response;
            const cb = this.pending.get(rpc.index);
            if (cb) {
                this.pending.delete(rpc.index);
                clearTimeout(cb.timer);
                if (rpc.error) {
                    const { code, message } = decodeRpcError(Buffer.from(rpc.error));
                    console.log(`[WS] RPC ← ${cb.service}/${cb.method} idx=${rpc.index} ERR (code=${code} message="${message}") (pending=${this.pending.size})`);
                    const err = new Error(`${message} (RPC code ${code})`);
                    err.rpcCode    = code;
                    err.rpcMessage = message;
                    cb.reject(err);
                } else {
                    cb.resolve(rpc.response || new Uint8Array(0));
                }
            } else if (rpc.index === this.subscribeIdx && (rpc.error || !rpc.response)) {
                // SubscribeToUpdates RPC ended. Routine — Bale's server hits
                // its 30 s deadline waiting for our request-side EOF (which
                // our WS-multiplexed transport can't send, unlike gRPC-web)
                // and closes with `code=4 DEADLINE_EXCEEDED`. We do NOT
                // re-subscribe: realtime events flow on WS field 2 (the
                // standalone Push update channel) independently of this RPC,
                // so a fresh subscribe wouldn't add anything. Loud only if
                // the close reason is something other than `code=4`, so a
                // genuine failure (auth, malformed, protocol change) still
                // surfaces.
                const errInfo = rpc.error ? decodeRpcError(Buffer.from(rpc.error)) : { code: 0, message: 'complete' };
                const isRotation = errInfo.code === 4 && !rpc.response;
                if (!isRotation) {
                    console.log(`[WS] subscribe stream ended unexpectedly (idx=${rpc.index} code=${errInfo.code} message="${errInfo.message}")`);
                }
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
    }

    _startPing() {
        this._lastInboundTs = Date.now();
        this.pingTimer = setInterval(() => {
            if (this.ws.readyState !== WebSocket.OPEN) return;
            // Zombie-connection check — if no inbound frame for 30 s (3× ping
            // interval), assume the socket is blackholed and force-close it.
            // ws.terminate() destroys the underlying TCP socket immediately
            // and fires 'close' (code 1006), which kicks off the existing
            // reconnect path.
            const idle = Date.now() - this._lastInboundTs;
            if (idle > 30_000) {
                console.warn(`[WS] No inbound for ${idle}ms — closing zombie connection`);
                try { this.ws.terminate(); } catch (_) {}
                return;
            }
            // Halfway to zombie threshold and Bale still hasn't sent a frame
            // — surface it so a slow-fail is visible before the close fires.
            // Bale normally sends a weakEvent every ~4 s; idle > 15 s means
            // either the connection is stalling or upstream is degraded.
            if (idle > 15_000) {
                console.warn(`[WS] idle ${idle}ms — no inbound, sending ping (zombie close at 30s)`);
            }
            this.ws.send(encodePing(++this.pingCounter));
        }, 10_000);
    }

    _processUpdate(buf) {
        let sub;
        try { sub = decodeSubscribeResponse(buf); } catch (e) { console.log('[Update] decode error:', e.message); return; }
        const update = sub.update;
        // seq / timestamp / weakEvent are silent — they fire on every Bale
        // heartbeat (~every 4 s) and add nothing diagnostic. Liveness is
        // already covered by the WS idle-warning path. parseXC still logs
        // every meaningful event (calls, messages we route, etc.).
        if (!update) return;

        if (update.callStarted || update.callReceived) {
            const callId = update.callReceived?.callId || update.callStarted?.call?.id;
            console.log(`[Update] ${update.callReceived ? 'callReceived' : 'callStarted'}  callId=${callId}`);
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
            for (const cb of this._onCallAcceptedListeners.slice()) {
                try { cb(callId); }
                catch (e) { console.error('[Update] onCallAccepted subscriber threw:', e.message); }
            }
        } else if (update.callEnded) {
            const callId = update.callEnded.callId;
            console.log(`[Update] callEnded  callId=${callId}`);
            for (const cb of this._onCallEndedListeners.slice()) {
                try { cb(callId); }
                catch (e) { console.error('[Update] onCallEnded subscriber threw:', e.message); }
            }
        } else if (update.message) {
            // Tunnel SOCKS5 frames piggyback on text messages — those are
            // silent (handleIncoming returns true to consume). Log only
            // genuine human-visible chat messages.
            const tif  = update.message;
            const text = tif.message?.textMessage?.text;
            if (text) {
                if (this.tunnel.handleIncoming(text, tif.senderUid)) return;
                const entry = { dir: 'in', from: tif.senderUid, rid: tif.rid, text, ts: Date.now() };
                this.messages.push(entry);
            }
            // messageRead / messageReadByMe / non-text message types — silent
        } else if (update._unknownFields) {
            // Surface only truly novel xC tags so a future Bale protocol
            // change doesn't go invisible. The recognised-but-routine ones
            // (messageRead, messageReadByMe, emptyUpdate) stay silent.
            const novel = update._unknownFields.filter(f => f !== 19 && f !== 50 && f !== 85);
            if (novel.length > 0) {
                console.log(`[Update] unknown(${novel.map(_xcUpdateName).join(',')})`);
            }
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
            // service/method recorded so the response handler can name what
            // just landed in the log instead of just the opaque idx.
            this.pending.set(idx, {
                service: serviceName,
                method,
                resolve: (buf) => { clearTimeout(timer); resolve(buf); },
                reject:  (e)   => { clearTimeout(timer); reject(e); },
                timer,
            });
            this.ws.send(encodeRpcRequest(serviceName, method, payload, idx));
        });
    }

    // Returns the display name for a Bale user ID, or null if unknown. Uses
    // Users/LoadUsers with accessHash=0 — same RPC and parsing as loadSelf().
    // The caller might not be in our contacts list (server-mode use case), so
    // we don't depend on GetContacts. UserEntity name is preferred; falls back
    // to nick. Cache holds both hits and misses so a stranger we already
    // queried doesn't re-trigger the RPC.
    async lookupContactName(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return null;
        if (this._userNameCache.has(n)) return this._userNameCache.get(n);
        let name = null;
        try {
            const buf = await this._rpcCall(
                'bale.users.v1.Users', 'LoadUsers',
                buildLoadUsersRequest([{ uid: n, accessHash: '0' }]),
            );
            const loaded = decodeLoadUsersResponse(buf);
            if (loaded.users.length) {
                const u = decodeUserEntity(loaded.users[0]);
                name = u.name || u.nick || null;
            }
        } catch (e) {
            console.warn(`[lookupContactName] uid=${n} RPC failed: ${e.message}`);
        }
        this._userNameCache.set(n, name);
        return name;
    }

    async loadSelf() {
        const payload = decodeJwtPayload(this.accessToken);
        if (!payload) { console.warn('[Self] could not decode JWT payload'); return null; }
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
        const contactsBuf = await this._rpcCall(
            'bale.users.v1.Users', 'GetContacts', buildGetContactsRequest()
        );
        const contacts = decodeGetContactsResponse(contactsBuf);

        let peers = [];
        if (contacts.userPeers.length > 0) {
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

module.exports = { BaleWsClient };
