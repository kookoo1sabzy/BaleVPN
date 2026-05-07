'use strict';

// HTML + embedded UI script served at GET /. The single-file <script> block
// renders the login screen, VPN menu, server-mode admission panels, and
// drives the 2-second pollState() loop that keeps the UI in sync with the
// backend. Kept verbatim from the original monolithic source for parity.
//
// Constants from ./constants are baked into the template literal at module
// load (unescaped ${…}); browser-side runtime substitutions use the escaped
// \${…} form to survive the template eval.

const { MAX_LIMIT_KBPS } = require('./constants');

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
  .dot.on        { background: #5c5; }
  .dot.connecting{ background: #ffb74d; animation: pulse 1.4s infinite; }
  @keyframes pulse { 50% { opacity: .35; } }
  /* WS status bar — sits right under the blue header so the user can always
     read the WebSocket state at a glance, distinct from the tunnel/dot. */
  #wsBar {
    display: flex; align-items: center; gap: .55rem;
    padding: .5rem 1.4rem; font-size: .82rem; font-weight: 500;
    border-bottom: 1px solid #eee;
  }
  #wsBar.connected    { background: #e8f5e9; color: #2e7d32; }
  #wsBar.connecting   { background: #fff8e1; color: #ef6c00; }
  #wsBar.disconnected { background: #ffebee; color: #c62828; }
  #wsBar .label { font-weight: 600; opacity: .7; }
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
    display: flex; align-items: center; gap: .7rem;
    padding: .65rem .8rem; border-radius: 8px;
    background: #f7f9fc; margin-bottom: .45rem;
    font-family: monospace;
  }
  .client-row .client-dot {
    width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
    background: #aaa;
  }
  .client-row .client-dot.active { background: #43a047; }
  .client-row .client-info { flex: 1; display: flex; flex-direction: column; gap: .25rem; min-width: 0; }
  .client-row .client-id   { font-weight: 600; font-size: .85rem; }
  .client-row .client-rate { font-size: .85rem; display: flex; gap: 1.2rem; }
  .client-row .client-rate .up   { color: #1976d2; }
  .client-row .client-rate .down { color: #2e7d32; }
  .client-row .client-meta { font-size: .72rem; opacity: .55; display: flex; gap: 1rem; flex-wrap: wrap; }
  .client-row.throttled { background: #fdecea; }
  .client-row.throttled .client-rate .up,
  .client-row.throttled .client-rate .down { color: #c62828; }
  .client-row .client-actions { display: flex; flex-direction: column; gap: .3rem; }
  .client-row .disc-btn, .client-row .lim-btn {
    border: 1px solid #888; background: none; color: #444;
    border-radius: 5px; padding: .2rem .55rem; cursor: pointer;
    font-size: .72rem; white-space: nowrap;
  }
  .client-row .disc-btn { border-color: #e53935; color: #e53935; }
  .client-row .disc-btn:hover { background: #e53935; color: #fff; }
  .client-row .lim-btn { border-color: #1976d2; color: #1976d2; }
  .client-row .lim-btn:hover { background: #1976d2; color: #fff; }
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

  <!-- Post-login WebSocket state. Distinct from the dot (which combines
       WS + tunnel) so users can tell exactly what's up at any moment. Hidden
       on the login screen — there's no WS to talk about until you sign in. -->
  <div id="wsBar" class="disconnected" style="display:none">
    <span class="label">WebSocket</span>
    <span id="wsStateText">disconnected</span>
  </div>
  <!-- Login section: phone OTP or paste-token. Visible only when no token. -->
  <div class="body" id="loginSection">
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
      <button class="conn-btn" id="loginBtn" style="margin-top:.5rem">Login</button>
    </div>
  </div>

  <!-- VPN section: shown after the user has a saved token. -->
  <div id="tunnelSection" style="display:none">
  <div class="tunnel-toggle" id="tunnelToggle" style="justify-content:space-between">
    <span>⚡ Tunnel proxy <span id="tunnelBadge"></span></span>
    <button class="refresh-btn" id="logoutBtn" style="border-color:#c62828; color:#c62828">Logout</button>
  </div>
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
        <label>Find peer by phone number</label>
        <div class="tunnel-row">
          <input id="peerSearch" type="tel" placeholder="+98912…" inputmode="tel">
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
const tokenInput = document.getElementById('tokenInput');

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
      showAuthStatus('Logging in…', 'info');
      await performLogin(d.token);
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
      showAuthStatus('Account created — logging in…', 'info');
      await performLogin(d.token);
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

// State-driven UI. _state is the single source of truth for what the UI
// should render — populated once per tick by pollState() from the backend's
// /state endpoint. Every render function reads from _state directly; there
// are no other mode/flag globals to keep in sync.
let _state = null;

const hasToken  = () => !!_state?.token;
const isAlive   = () => _tunnelMode === 'client' ? !!_state?.clientActivated : !!_state?.wsReady;
const roomReady = () => !!_state?.clientRoomReady;

async function pollState() {
  try {
    const r = await fetch('/state');
    _state = await r.json();
  } catch { return; }
  applyState();
}

function applyState() {
  if (!_state) return;
  const s = _state;

  // Mode (set once at boot; setTunnelMode is idempotent so re-calls are fine).
  if (s.mode && s.mode !== _tunnelMode) setTunnelMode(s.mode);

  // Section visibility — login vs VPN menu, driven by token presence alone.
  const tok = hasToken();
  document.getElementById('loginSection').style.display  = tok ? 'none' : '';
  document.getElementById('tunnelSection').style.display = tok ? ''     : 'none';
  document.getElementById('wsBar').style.display         = tok ? ''     : 'none';

  renderSelf(s.self);

  // WebSocket state bar — connected / connecting / idle (room) / disconnected.
  const bar = document.getElementById('wsBar');
  const txt = document.getElementById('wsStateText');
  const clientRoomUp = _tunnelMode === 'client' && roomReady();
  if (s.wsReady) {
    bar.className = 'connected';     txt.textContent = 'connected';
  } else if (s.wsConnecting) {
    bar.className = 'connecting';    txt.textContent = 'connecting…';
  } else if (clientRoomUp) {
    // Client-mode WS is intentionally down while the room is up — calm green
    // "idle" rather than alarming red "disconnected".
    bar.className = 'connected';     txt.textContent = 'idle (room active)';
  } else {
    bar.className = 'disconnected';  txt.textContent = 'disconnected';
  }

  // Header dot — green = "the thing the user cares about is up".
  //   client: room actually established (LK channel + peer joined)
  //   server: WS up (= accepting calls)
  const dotGreen = _tunnelMode === 'client' ? roomReady() : !!s.wsReady;
  dot.className = 'dot' + (dotGreen ? ' on' : s.wsConnecting ? ' connecting' : '');

  refreshActivateBtn();
  applyTunnelUI(s);

  // Server-mode list polls — only when accepting calls.
  if (_tunnelMode === 'server' && s.wsReady) { pollClients(); pollPending(); pollAdmission(); }

  if (s.wsReady) loadPeers();   // refresh lazily; loadPeers no-ops if already populated
}

function applyTunnelUI(s) {
  const st   = document.getElementById('tunnelStatus');
  const sec  = document.getElementById('clientsSection');
  const pend = document.getElementById('pendingSection');
  const adm  = document.getElementById('admissionSection');

  if (_tunnelMode === 'server') {
    // Server: status row + admission/pending/clients panels visible while WS is up.
    if (s.wsReady) {
      st.style.display = '';
      const n = s.lkRooms || 0;
      st.textContent = n === 0
        ? 'Server — waiting for clients…'
        : \`Server — \${n} client\${n === 1 ? '' : 's'} connected\`;
      st.className = 'entry ' + (n > 0 ? 'ok' : 'info');
    } else {
      st.style.display = 'none';
    }
    sec.style.display = pend.style.display = adm.style.display = s.wsReady ? 'block' : 'none';
  } else {
    // Client: four sub-states:
    //   0. server rejected our last attempt → "Connection rejected by server"
    //   1. tunnel configured but LK channel not up yet → "Connecting to server…"
    //   2. LK channel up but server peer hasn't joined → "Waiting for server…"
    //   3. peer joined → SOCKS5 stats line
    if (s.clientRejected) {
      st.style.display = '';
      st.textContent = 'Server rejected the connection. Press Activate to try again.';
      st.className = 'entry err';
    } else if (s.clientActivated && !s.clientRoomReady) {
      st.style.display = '';
      st.textContent = s.lkActive ? 'Waiting for server to pick up…' : 'Connecting to server…';
      st.className = 'entry info';
    } else if (s.clientActivated && s.clientRoomReady) {
      st.style.display = '';
      const traffic = \`  ↑ \${fmtKB(s.cliTxBytes || 0)}  ↓ \${fmtKB(s.cliRxBytes || 0)}\`;
      st.textContent = \`SOCKS5 on 127.0.0.1:\${s.socks5Port} → peer \${s.serverPeer?.id} [🔗 WebRTC] | sessions: \${s.sessions}\${traffic}\`;
      st.className = 'entry ok';
    } else {
      st.style.display = 'none';
    }
    sec.style.display = pend.style.display = adm.style.display = 'none';
  }
}

function refreshActivateBtn() {
  const btn = document.getElementById('tunnelApply');
  if (!btn) return;
  btn.style.width = '100%';
  // Don't override the busy-state label set by lockBtn while a request is in flight.
  if (_busy) return;
  const alive = isAlive();
  btn.textContent = alive ? 'Deactivate' : 'Activate';
  btn.className   = alive ? 'conn-btn disconnect' : '';
}

// ── Login flow ────────────────────────────────────────────────────────────────
//
// Pressing Login (or finishing the OTP / Sign-up flow) sends the token to the
// backend and brings up the WS via /connect. The follow-up pollState() then
// flips the UI from the login section to the VPN menu.

async function performLogin(token) {
  if (!token) return;
  tokenInput.value = token;
  saveConfig();
  try {
    const r = await fetch('/connect', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ token }),
    });
    const d = await r.json();
    if (!d.ok) { showAuthStatus(d.error || 'Login failed', 'err'); return; }
    await pollState();   // refresh + render — flips us into the VPN menu.
  } catch (e) {
    showAuthStatus('Login failed: ' + e.message, 'err');
  }
}

document.getElementById('loginBtn').addEventListener('click', () => {
  performLogin(tokenInput.value.trim());
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
  if (!confirm('Logout will clear your saved token and stop the tunnel.')) return;
  try { await fetch('/logout', { method: 'POST' }); } catch {}
  tokenInput.value = '';
  saveConfig();
  await pollState();   // re-render: token gone → flip back to login screen.
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


// Tracks the resolved mode from /tunnel/status — needed by the Activate handler
// to decide between the client (peer-based) and server (sticky-flag) flow.
let _tunnelMode = 'client';

function setTunnelMode(mode) {
  _tunnelMode = mode || 'client';
  document.getElementById('clientFields').style.display = mode === 'client' ? 'flex' : 'none';
  document.getElementById('serverFields').style.display = mode === 'server' ? ''    : 'none';
  document.getElementById('tunnelStatus').style.display = 'none';   // applyTunnelUI shows it as needed
  document.getElementById('tunnelBadge').textContent     = mode ? '(' + mode + ')' : '';
}

// Activate / Deactivate is the user's only handle on the VPN. The WS lifecycle
// follows automatically: Activate brings WS up via reconcile / signaling;
// Deactivate sets the sticky flag and lets reconcile drop it.
// While a /connect, /tunnel/config, or /disconnect request is in flight, _busy
// pins the Activate/Deactivate button text to "Activating…" / "Deactivating…"
// regardless of what the next /messages poll reports — otherwise the label
// would flicker between states on the 2-s poll cadence.
let _busy = null;   // null | 'activating' | 'deactivating'

function lockBtn(label) {
  _busy = label;
  const btn = document.getElementById('tunnelApply');
  if (!btn) return;
  btn.textContent = label === 'activating' ? 'Activating…' : 'Deactivating…';
  btn.disabled = true;
  btn.className = label === 'activating' ? '' : 'conn-btn disconnect';
}

function unlockBtn() {
  _busy = null;
  const btn = document.getElementById('tunnelApply');
  if (!btn) return;
  btn.disabled = false;
  refreshActivateBtn();
}

async function activateTunnel() {
  if (_busy) return;
  const st = document.getElementById('tunnelStatus');
  st.style.display = '';
  st.className = 'entry info';
  st.textContent = 'Activating…';
  if (_tunnelMode === 'client') {
    // Client validation must run *before* we lock the button so the user can
    // immediately try again with a peer selected.
    const peerVal = document.getElementById('tunnelPeer').value;
    if (!peerVal) {
      st.className = 'entry err';
      st.textContent = 'Pick a server peer first.';
      return;
    }
  }
  lockBtn('activating');
  try {
    let d;
    if (_tunnelMode === 'server') {
      // Server: activation just clears userInitiatedDisconnect via /connect so
      // reconcile brings the WS up and auto-answer resumes. Always include the
      // saved token — after a backend restart the in-memory accessToken is
      // empty even though the UI's localStorage still has it, and reconcile
      // bails out without it.
      const r = await fetch('/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenInput.value.trim() }),
      });
      d = await r.json();
    } else {
      // Client: needs a peer + port; tunnel.configure starts SOCKS5 + tunnel.
      const port      = parseInt(document.getElementById('socks5Port').value) || 1080;
      const peerVal   = document.getElementById('tunnelPeer').value;
      const transport = document.getElementById('tunnelTransport').value;
      const [peerId, peerType] = peerVal.split(':');
      const r = await fetch('/tunnel/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ socks5Port: port, serverPeerId: peerId, serverPeerType: peerType, transport }),
      });
      d = await r.json();
      saveConfig();
    }
    if (!d.ok) { st.className = 'entry err'; st.textContent = d.error || 'Error'; }
    // Refresh state synchronously so unlockBtn renders the right label and
    // the rest of the UI catches up without waiting for the next poll tick.
    await pollState();
  } catch (e) {
    st.className = 'entry err';
    st.textContent = 'Error: ' + e.message;
  } finally {
    unlockBtn();
  }
}

async function deactivateTunnel() {
  if (_busy) return;
  lockBtn('deactivating');
  try {
    await fetch('/disconnect', { method: 'POST' });
    await pollState();
  } catch (e) {
    const st = document.getElementById('tunnelStatus');
    st.style.display = ''; st.className = 'entry err'; st.textContent = 'Error: ' + e.message;
  } finally {
    unlockBtn();
  }
}

document.getElementById('tunnelApply').onclick = () => {
  if (isAlive()) deactivateTunnel(); else activateTunnel();
};

function fmtKB(bytes) {
  if (bytes < 1024)               return bytes + ' B';
  if (bytes < 1024 * 1024)        return (bytes / 1024).toFixed(1) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';
}
// Bytes/sec → "X kbps" / "X.X Mbps". Used for live throughput display.
function fmtRate(bps) {
  const bits = bps * 8;
  if (bits < 1000)        return '0 kbps';
  if (bits < 1_000_000)   return Math.round(bits / 1000) + ' kbps';
  return (bits / 1_000_000).toFixed(2) + ' Mbps';
}
const _sampleCache = new Map();   // callKey → { ts, rxBytes, txBytes, rxRate, txRate }
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
    if (!list.length) { _sampleCache.clear(); el.innerHTML = '<div class="empty">No clients connected</div>'; return; }
    const now = Date.now();
    const seen = new Set();
    el.innerHTML = list.map(c => {
      seen.add(c.callKey);
      // Throughput rate from successive samples (rxBytes/txBytes are cumulative).
      let rxRate = 0, txRate = 0;
      const prev = _sampleCache.get(c.callKey);
      if (prev) {
        const dt = (now - prev.ts) / 1000;
        if (dt > 0) {
          rxRate = Math.max(0, (c.rxBytes - prev.rxBytes) / dt);
          txRate = Math.max(0, (c.txBytes - prev.txBytes) / dt);
        }
      }
      _sampleCache.set(c.callKey, { ts: now, rxBytes: c.rxBytes, txBytes: c.txBytes });
      const who = c.callerName
        ? escapeHtml(c.callerName) + ' <span style="opacity:.5; font-weight:400">(' + c.callerId + ')</span>'
        : (c.callerId ? 'Caller ' + c.callerId : 'Call ' + c.callKey);
      const upLim   = c.upBps   ? Math.round(c.upBps   * 8 / 1000) : 0;
      const downLim = c.downBps ? Math.round(c.downBps * 8 / 1000) : 0;
      return \`
      <div class="client-row\${c.throttled ? ' throttled' : ''}">
        <div class="client-dot\${c.isTunClient ? ' active' : ''}"></div>
        <div class="client-info">
          <span class="client-id">\${who}\${c.isTunClient ? ' · TUN' : ''}</span>
          <span class="client-rate">
            <span class="up">↑ \${fmtRate(rxRate)}</span>
            <span class="down">↓ \${fmtRate(txRate)}</span>
          </span>
          <span class="client-meta">
            <span>up \${fmtAge(c.connectedAt)}</span>
            <span>total ↑\${fmtKB(c.rxBytes)} ↓\${fmtKB(c.txBytes)}</span>
            <span>cap ↑\${upLim} / ↓\${downLim} kbps</span>
          </span>
        </div>
        <div class="client-actions">
          <button class="lim-btn"  onclick="limitClient('\${encodeURIComponent(c.callKey)}', \${upLim}, \${downLim})">Limit</button>
          <button class="disc-btn" onclick="disconnectClient('\${encodeURIComponent(c.callKey)}')">Disconnect</button>
        </div>
      </div>\`;
    }).join('');
    // Drop cache entries for clients that disappeared (disconnects).
    for (const k of [..._sampleCache.keys()]) if (!seen.has(k)) _sampleCache.delete(k);
  } catch {}
}

async function disconnectClient(callKey) {
  await fetch('/tunnel/clients/' + callKey + '/disconnect', { method: 'POST' });
  pollClients();
}

async function limitClient(callKey, curUp, curDown) {
  const upStr = prompt('Upload limit (kbps, 1–${MAX_LIMIT_KBPS}):', String(curUp || 300));
  if (upStr === null) return;
  const downStr = prompt('Download limit (kbps, 1–${MAX_LIMIT_KBPS}):', String(curDown || 300));
  if (downStr === null) return;
  const upKbps   = Math.max(1, Math.min(${MAX_LIMIT_KBPS}, parseInt(upStr,   10) || 0));
  const downKbps = Math.max(1, Math.min(${MAX_LIMIT_KBPS}, parseInt(downStr, 10) || 0));
  await fetch('/tunnel/clients/' + callKey + '/limit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ upKbps, downKbps }),
  });
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

// Restore persisted config (localStorage → form fields), then do an initial
// state fetch and start the single 2-s render loop.
loadConfig();
(async () => {
  await pollState();
  // After backend restart the in-memory accessToken is empty even though the
  // UI's localStorage still has it — push it across so reconcile() can bring
  // the WS up automatically (otherwise the user sees "logged in" UI but no
  // working WebSocket).
  if (!_state?.token && tokenInput.value.trim()) {
    performLogin(tokenInput.value.trim());
  }
})();

// Save on any field change
tokenInput.addEventListener('input', saveConfig);
document.getElementById('socks5Port').addEventListener('input', saveConfig);
document.getElementById('tunnelTransport').addEventListener('change', saveConfig);
document.getElementById('tunnelPeer').addEventListener('change', saveConfig);

setInterval(pollState, 2000);
</script>
</body>
</html>`;

module.exports = { HTML };
