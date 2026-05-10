'use strict';

// HTTP API surface for the local web UI. Exports a `create(client, connection)`
// factory that returns a configured http.Server but doesn't call .listen() —
// the entrypoint owns lifecycle. All routes mutate state on the BaleWsClient
// singleton or its tunnel; BaleConnection's reconcile() is the single
// authority on WS lifecycle (no route should call client.connect/disconnect
// directly).

const http = require('http');
const {
    TUNNEL_MODE, PEERTYPE_PRIVATE, PEERTYPE_GROUP,
    MAX_LIMIT_KBPS, HTTP_PORT,
    MAX_CLIENTS_DEFAULT, MAX_CLIENTS_LIMIT,
} = require('./constants');
const { ConfigStore } = require('./config-store');
const {
    buildStartPhoneAuthRequest, decodeStartPhoneAuthResponse,
    buildValidateCodeRequest, decodeAuthResponse, buildSignUpRequest,
    buildImportContactsRequest, decodeImportContactsResponse,
    buildLoadUsersRequest, decodeLoadUsersResponse, decodeUserEntity,
} = require('./wire-codecs');
const { grpcCall, fetchAccessToken } = require('./grpc-web');
const { AdmissionStore } = require('./admission');
const { BlacklistStore } = require('./blacklist');
const { HTML, csrfToken } = require('./ui-html');

function create(client, connection) {
    return http.createServer(async (req, res) => {
        const url = new URL(req.url, 'http://localhost');

        // CSRF gate — any state-changing request must carry the per-process
        // token that's embedded in our HTML. A cross-origin attacker can fire
        // a fetch at us but can't read our HTML to learn the token, so the
        // header check shuts the door on browser-driven CSRF.
        if (req.method !== 'GET' && req.method !== 'HEAD' &&
            req.headers['x-csrf-token'] !== csrfToken) {
            res.writeHead(403, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: false, error: 'CSRF token missing or invalid' }));
        }

        if (req.method === 'GET' && url.pathname === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(HTML);
        }

        if (req.method === 'GET' && url.pathname === '/config') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                // tokenSet (boolean) instead of the actual token — the UI only
                // needs "are we logged in?", and exposing the JWT here would
                // let any XSS exfiltrate it via fetch('/config').
                tokenSet:    !!client.accessToken,
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
                    connection.userInitiatedDisconnect = false;
                    connection.reconcile();
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
            // Activate/Deactivate semantics:
            //  - server: kick every active + pending peer (DiscardCall over the
            //    still-alive WS), set sticky, drop WS.
            //  - client: fully close the LK room and clear tunnel state. Don't
            //    set sticky — the user expects to be back in "logged in, no
            //    room" with the WS up so a fresh Activate can signal.
            try {
                if (TUNNEL_MODE === 'server') {
                    connection.userInitiatedDisconnect = true;
                    await client.tunnel.disconnectAllClients(client);
                } else {
                    client.tunnel._stopAll();
                }
            } catch (e) {
                console.error('[Disconnect] cleanup failed:', e.message);
            }
            connection.reconcile();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true }));
        }

        if (req.method === 'POST' && url.pathname === '/logout') {
            // Full sign-out:
            //  1. Server: kick every connected + pending peer with DiscardCall
            //     while the WS is still up. Don't _stopAll — that would clear
            //     `mode`, and the post-login WS handshake wouldn't re-arm
            //     auto-answer (incoming calls would silently no-op).
            //  2. Client: _stopAll closes the active room and clears state.
            //  3. Disconnect the WS explicitly (reconcile() bails on empty
            //     accessToken before it can drop the live socket).
            //  4. Clear the token so the UI flips back to the login screen.
            connection.userInitiatedDisconnect = true;
            try {
                if (TUNNEL_MODE === 'server') await client.tunnel.disconnectAllClients(client);
                else                          client.tunnel._stopAll();
            } catch (e) {
                console.error('[Logout] cleanup failed:', e.message);
            }
            client.disconnect();
            client.accessToken = '';
            client.self        = null;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok: true }));
        }

        if (req.method === 'GET' && url.pathname === '/state') {
            // Single endpoint that returns everything the UI needs. /messages
            // and /tunnel/status are kept for back-compat / debug only.
            const t  = client.tunnel;
            const lk = t.lkTransport;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                mode:            TUNNEL_MODE,
                tokenSet:        !!client.accessToken,   // never leak the JWT itself
                sessionExpired:  !!client.sessionExpired,
                versionMismatch: !!client.versionMismatch,
                self:            client.self,
                wsReady:         client.ready,
                wsConnecting:    client.connecting,
                clientActivated: !!(t.mode === 'client' && t.serverPeer),
                clientRoomReady: !!(lk && lk.hasPeer),
                clientRejected:  !!t._rejected,
                cliRxBytes:      lk ? (lk._rxBytes || 0) : 0,
                cliTxBytes:      lk ? (lk._txBytes || 0) : 0,
                socks5Port:      t.socks5Port,
                serverPeer:      t.serverPeer,
                sessions:        t.sessions.size,
                lkActive:        !!t.lkTransport,
                lkRooms:         t.lkRooms.size,
            }));
        }

        if (req.method === 'GET' && url.pathname === '/messages') {
            const since = parseInt(url.searchParams.get('since') || '0');
            const tunnelActive    = !!(client.tunnel.lkTransport || client.tunnel.lkRooms.size > 0);
            const clientActivated = !!(client.tunnel.mode === 'client' && client.tunnel.serverPeer);
            const clientRoomReady = !!(client.tunnel.lkTransport && client.tunnel.lkTransport.hasPeer);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                ready:           client.ready,
                connecting:      client.connecting,
                self:            client.self,
                tunnelActive,
                clientActivated,
                clientRoomReady,
                messages:        client.messages.filter(m => m.ts >= since),
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

        // ── Contact search route ───────────────────────────────────────────
        if (req.method === 'POST' && url.pathname === '/contacts/search') {
            let body = '';
            req.on('data', c => body += c);
            req.on('end', async () => {
                try {
                    const { query } = JSON.parse(body);
                    console.log(`[Search] query="${query}"`);
                    if (!query) throw new Error('query required');

                    // Phone-only search — name-based lookup is intentionally disabled.
                    // The SearchContacts RPC + decoder are kept in the codebase in case
                    // we re-enable name search later; this route just refuses to call it.
                    const isPhone = /^[+\d][\d\s\-]{5,}$/.test(query.trim());
                    if (!isPhone) throw new Error('Search by phone number only (e.g., +98912…)');

                    let users = [];
                    console.log('[Search] using ImportContacts via gRPC-web (phone lookup)');
                    const buf  = await grpcCall('bale.users.v1.Users', 'ImportContacts', buildImportContactsRequest(query), client.accessToken);
                    console.log(`[Search] ImportContacts raw ${buf.length} bytes`);
                    const resp = decodeImportContactsResponse(buf);
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

        // ── Auth routes ────────────────────────────────────────────────────
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
                    // Set the token server-side and let reconcile bring up the WS.
                    // We don't return it to the UI — the JWT never enters the browser.
                    client.accessToken = token;
                    connection.userInitiatedDisconnect = false;
                    connection.reconcile();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: true }));
                } catch (e) {
                    console.error('[Auth] ValidateCode:', e.message);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: e.message }));
                }
            });
            return;
        }

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
                    client.accessToken = token;
                    connection.userInitiatedDisconnect = false;
                    connection.reconcile();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: true }));
                } catch (e) {
                    console.error('[Auth] SignUp:', e.message);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: e.message }));
                }
            });
            return;
        }

        if (req.method === 'GET' && url.pathname === '/tunnel/status') {
            // Kept for back-compat / debug. The UI uses /state instead.
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ...client.tunnel.status(), ready: client.ready }));
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
            // Disconnect kicks the active session only. The caller stays in the
            // allow-list (if they were there) and is free to call back. To
            // permanently bar them, /server/pending/.../reject blacklists.
            const ok = client.tunnel.disconnectClient(callKey);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok }));
        }

        if (req.method === 'POST' && url.pathname.startsWith('/tunnel/clients/') && url.pathname.endsWith('/limit')) {
            const callKey = decodeURIComponent(url.pathname.slice('/tunnel/clients/'.length, -'/limit'.length));
            let body = '';
            req.on('data', c => body += c);
            req.on('end', () => {
                try {
                    const { upKbps, downKbps } = JSON.parse(body || '{}');
                    const clamp   = k => Math.max(1, Math.min(MAX_LIMIT_KBPS, Number(k) || 0));
                    const upBps   = clamp(upKbps)   * 1000 / 8;
                    const downBps = clamp(downKbps) * 1000 / 8;
                    const ok = client.tunnel.setClientLimit(callKey, upBps, downBps);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: e.message }));
                }
            });
            return;
        }

        // ── Server-mode admission control ─────────────────────────────────
        // Resolve a caller's display name. Checks the contact list first,
        // then falls back to a memoized LoadUsers RPC for strangers (same
        // path TunnelManager uses for connected-clients rows). Async so we
        // can await the RPC when the entry isn't cached yet.
        const resolveCallerName = (uid) => client.lookupContactName(uid);

        if (req.method === 'GET' && url.pathname === '/server/pending') {
            const list = await Promise.all(client.tunnel.pendingCalls().map(async p => ({
                ...p,
                callerName: p.callerName || await resolveCallerName(p.callerId),
            })));
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
            // UI-driven reject blacklists; sweep-timeout (in tunnel.js) calls
            // rejectPending without the flag.
            const ok = await client.tunnel.rejectPending(callId, /* addToBlacklist */ true);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok }));
        }

        if (req.method === 'GET' && url.pathname === '/server/admission') {
            const list = await Promise.all(client.tunnel.admissionList().map(async e => ({
                ...e,
                callerName: await resolveCallerName(e.callerId),
            })));
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
            // Mirror the Android Manage Clients "Remove" button: drop from allow-list
            // AND kick any active session for this caller. Future calls go to pending.
            for (const [callKey, lk] of client.tunnel.lkRooms) {
                if (lk._callerId === callerId) { client.tunnel.disconnectClient(callKey); break; }
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok }));
        }

        // ── Blacklist management ──────────────────────────────────────────
        if (req.method === 'GET' && url.pathname === '/server/blacklist') {
            const list = await Promise.all(BlacklistStore.getAll().map(async callerId => ({
                callerId,
                callerName: await resolveCallerName(callerId),
            })));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(list));
        }

        if (req.method === 'POST' && url.pathname === '/server/blacklist') {
            let body = '';
            req.on('data', c => body += c);
            req.on('end', () => {
                try {
                    const { callerId } = JSON.parse(body || '{}');
                    const ok = BlacklistStore.add(Number(callerId));
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: e.message }));
                }
            });
            return;
        }

        if (req.method === 'DELETE' && url.pathname.startsWith('/server/blacklist/')) {
            const callerId = Number(decodeURIComponent(url.pathname.slice('/server/blacklist/'.length)));
            const ok = BlacklistStore.remove(callerId);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ ok }));
        }

        // ── Max simultaneous clients ───────────────────────────────────────
        if (req.method === 'GET' && url.pathname === '/server/max-clients') {
            const value = Number(ConfigStore.get('maxClients', MAX_CLIENTS_DEFAULT)) || MAX_CLIENTS_DEFAULT;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                value: Math.max(1, Math.min(MAX_CLIENTS_LIMIT, value)),
                max:   MAX_CLIENTS_LIMIT,
                default: MAX_CLIENTS_DEFAULT,
            }));
        }

        if (req.method === 'POST' && url.pathname === '/server/max-clients') {
            let body = '';
            req.on('data', c => body += c);
            req.on('end', () => {
                try {
                    const { value } = JSON.parse(body || '{}');
                    const n = Math.max(1, Math.min(MAX_CLIENTS_LIMIT, Number(value) || MAX_CLIENTS_DEFAULT));
                    ConfigStore.set('maxClients', n);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: true, value: n }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: e.message }));
                }
            });
            return;
        }

        res.writeHead(404);
        res.end();
    });
}

module.exports = { create };
