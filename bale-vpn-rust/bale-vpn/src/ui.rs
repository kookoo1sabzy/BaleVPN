//! HTTP UI server. Bound to 127.0.0.1 so the management surface
//! isn't reachable from off-host without an explicit ssh-tunnel
//! (the headless deployment recipe).
//!
//! The route shape mirrors the Node app's `http-server.js` so
//! the existing HTML/JS frontend can drop in unchanged. Routes
//! land in chunks:
//!
//!   - **(this chunk)** auth + connection + state. Enough to
//!     sign in and bring the WS up.
//!   - Next: contacts (`/peers`, `/contacts/search`,
//!     `/refresh-peers`).
//!   - Next: server admin (`/server/admission`,
//!     `/server/blacklist`, `/server/max-clients`,
//!     `/server/pending`).
//!   - Next: tunnel status (`/tunnel/status`, `/tunnel/clients`).
//!   - Eventually: embed the HTML/JS at `GET /`.

use crate::daemon::AppState;
use axum::extract::{Path, Query, State};
use axum::http::StatusCode;
use axum::response::{IntoResponse, Json};
use axum::routing::{delete, get, post};
use axum::Router;
use bale_signaling::auth::{AuthOutcome, StartResult};
use lk_signaling::Signaling;
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;
use std::sync::Arc;
use tower_http::trace::TraceLayer;

/// Build the router. Caller spawns this against a TcpListener.
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/",              get(index))
        .route("/config",        get(get_config).post(set_config))
        .route("/state",         get(get_state))
        .route("/connect",       post(connect))
        .route("/disconnect",    post(disconnect))
        .route("/logout",        post(logout))
        .route("/auth/start",    post(auth_start))
        .route("/auth/verify",   post(auth_verify))
        .route("/auth/signup",   post(auth_signup))
        // Contacts.
        .route("/peers",            get(list_peers))
        .route("/peers/refresh",    post(refresh_peers))
        .route("/contacts/search",  post(contacts_search))
        // Server-mode admission. Matches the Node app's URL
        // shape so the existing HTML/JS frontend ports
        // verbatim.
        .route("/server/admission",          get(get_admission).post(add_admission))
        .route("/server/admission/:peer_id", delete(remove_admission))
        .route("/server/blacklist",          get(get_blacklist).post(add_blacklist))
        .route("/server/blacklist/:peer_id", delete(remove_blacklist))
        .route("/server/max-clients",        get(get_max_clients).post(set_max_clients))
        .route("/server/pending",            get(get_pending))
        .route("/server/pending/:peer_id/accept", post(accept_pending))
        .route("/server/pending/:peer_id/reject", post(reject_pending))
        // Tunnel status + admin. `/tunnel/config` shares its
        // body shape with `POST /config` (the Node frontend
        // uses /tunnel/config; we accept either).
        .route("/tunnel/status",            get(tunnel_status))
        .route("/tunnel/config",            post(set_config))
        .route("/tunnel/disconnect",        post(tunnel_disconnect))
        .route("/tunnel/clients",           get(tunnel_clients))
        .route("/tunnel/clients/:peer_id/disconnect", post(tunnel_client_disconnect))
        .with_state(state)
        .layer(TraceLayer::new_for_http())
}

/// Bind + serve forever. Returns on listener accept-loop exit.
pub async fn serve(state: Arc<AppState>, addr: SocketAddr) -> std::io::Result<()> {
    let listener = tokio::net::TcpListener::bind(addr).await?;
    log::info!("HTTP UI listening on http://{addr}");
    axum::serve(listener, router(state)).await
}

// ─── Embedded HTML UI ─────────────────────────────────────────────────────
//
// Ported verbatim from `bale-vpn-node/src/ui-html.js`. JS
// template-literal escapes (`\${...}` and `\``) have been
// unescaped so the embedded asset is plain HTML. Drives every
// /auth/*, /state, /peers, /connect, /tunnel/*, /server/* call;
// the URL surface in `router()` matches what the JS expects.
const INDEX_HTML: &str = include_str!("../assets/index.html");

async fn index() -> impl IntoResponse {
    (
        StatusCode::OK,
        [("content-type", "text/html; charset=utf-8")],
        INDEX_HTML,
    )
}

// ─── /config + /state ─────────────────────────────────────────────────────

#[derive(Serialize)]
struct ConfigBody {
    /// `Some("client" | "server")` once the user has picked,
    /// `null` on first run — the UI shows a mode picker for
    /// the null case.
    mode:        Option<String>,
    nat_mode:    String,
    peer_id:     Option<String>,
    socks5_port: u16,
}

async fn get_config(State(s): State<Arc<AppState>>) -> Json<ConfigBody> {
    let cfg = s.cfg.read().await;
    Json(ConfigBody {
        mode:        cfg.mode.clone(),
        nat_mode:    cfg.nat_mode.clone(),
        peer_id:     cfg.peer_id.clone(),
        socks5_port: cfg.socks5_port,
    })
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct SetConfigBody {
    #[serde(default)]
    mode:           Option<String>,
    #[serde(default)]
    nat_mode:       Option<String>,
    /// UI's peer dropdown sends `serverPeerId`. `peerId` is
    /// kept as a deserialize alias for direct API users.
    #[serde(default, alias = "peerId")]
    server_peer_id: Option<String>,
    #[serde(default)]
    socks5_port:    Option<u16>,
    // Any other JSON keys the UI sends (`serverPeerType`,
    // `transport`, etc.) are silently dropped by serde —
    // they exist in the Node app's payload shape but the
    // Rust binary only supports one transport / peer type,
    // so there's nothing to map.
}

/// Update the live config. Persists to `~/.bale-vpn_config.json`
/// (so a daemon restart preserves UI changes) and updates the
/// in-memory `Resolved` so query handlers see fresh values
/// without a re-read. `mode` changes also publish on
/// `state.mode_tx` so [`crate::daemon::run_mode`] can tear down
/// the old per-mode task and restart in the new mode without a
/// process restart.
async fn set_config(
    State(s):   State<Arc<AppState>>,
    Json(body): Json<SetConfigBody>,
) -> Result<Json<OkBody>, ApiError> {
    // Persist to disk under the shared write lock. Cheap sync
    // RMW — fine to call from the async handler.
    let mode_disk    = body.mode.clone();
    let nat_disk     = body.nat_mode.clone();
    let peer_disk    = body.server_peer_id.clone();
    let socks5_disk  = body.socks5_port;
    s.config_file.update(|c| {
        if let Some(m) = mode_disk   { c.mode = Some(m); }
        if let Some(n) = nat_disk    { c.nat_mode = Some(n); }
        if let Some(p) = peer_disk   { c.peer_id = Some(p); }
        if let Some(p) = socks5_disk { c.socks5_port = p; }
    }).map_err(|e| ApiError::Internal(format!("persist: {e}")))?;

    // Mirror into the live Resolved so /config GET and other
    // handlers see the new values right away.
    let mut should_restart = false;
    let mut restart_mode: Option<String> = None;
    {
        let mut cfg = s.cfg.write().await;
        if let Some(m) = body.mode {
            if cfg.mode.as_deref() != Some(m.as_str()) {
                should_restart = true;
            }
            cfg.mode = Some(m);
        }
        if let Some(n) = body.nat_mode { cfg.nat_mode = n; }
        if let Some(p) = body.server_peer_id {
            // Client mode reads peer_id once at the top of
            // `run_client` and then parks — without kicking
            // run_mode, the new selection is ignored until the
            // next process restart. Republish current mode on
            // every peer_id change so the mode loop tears down
            // and re-enters with the fresh cfg.
            if cfg.peer_id.as_deref() != Some(p.as_str()) {
                should_restart = true;
            }
            cfg.peer_id = Some(p);
        }
        if let Some(p) = body.socks5_port { cfg.socks5_port = p; }
        restart_mode = cfg.mode.clone();
    }
    if should_restart {
        // Best-effort: if there are no subscribers (run_mode
        // exited), the send fails silently — fine, the new
        // values will be picked up on the next connect.
        let _ = s.mode_tx.send(restart_mode);
    }
    Ok(Json(OkBody { ok: true }))
}

/// The shape the embedded HTML/JS UI expects from `/state`.
/// Names and fields mirror the Node app's response verbatim
/// (camelCase, nested `self`, separate `wsReady`/`wsConnecting`
/// flags) so the existing frontend renders without changes.
///
/// Some fields don't have a direct Rust equivalent yet (e.g.
/// `sessionExpired`, `versionMismatch`); they default to `false`
/// and will get wired through as the corresponding signaling
/// events are surfaced upward.
#[derive(Serialize, Default)]
#[serde(rename_all = "camelCase")]
struct StateBody {
    /// Token persisted? Drives login-vs-VPN view in the UI.
    token_set:          bool,
    /// `"client"` / `"server"` once chosen, `null` on first
    /// run. The UI shows a mode picker for the null case.
    mode:               Option<String>,
    /// Bale closed us with 4401 → token cleared. Sticky one-shot
    /// banner; the UI clears the flag after showing it.
    session_expired:    bool,
    /// Protocol mismatch (e.g. obsolete build); sticky banner.
    version_mismatch:   bool,
    /// Signed-in user info. `None` until `load_self` completes.
    #[serde(rename = "self")]
    self_info:          Option<SelfInfo>,
    /// WS handshake complete + ready for RPCs.
    ws_ready:           bool,
    /// Run loop active but handshake not yet done (initial dial
    /// or reconnect-backoff window). Distinct from intent —
    /// the rule engine may have intentionally NOT spawned the
    /// loop (e.g., during a call), in which case this is false.
    ws_connecting:      bool,
    /// WS is intentionally paused (rule engine sees an active
    /// client call → push channel not needed). UI renders this
    /// as "Paused (in call)" rather than "Disconnected" or
    /// "Connecting…".
    ws_paused:          bool,
    /// Client mode: user pressed Activate / config has peer set.
    /// Not currently surfaced — Rust always auto-activates on
    /// `--mode client` with a configured peer, so this just
    /// mirrors "the LK tunnel is up".
    client_activated:   bool,
    /// Client mode: LK room established AND peer joined.
    client_room_ready:  bool,
    /// Client mode: last place_call attempt got
    /// PlaceCallError::Rejected. Sticky until next Activate.
    client_rejected:    bool,
    /// Server mode: how many connected LK rooms (= clients).
    lk_rooms:           usize,
    /// Client mode: LK channel up (peer hasn't necessarily
    /// joined yet). Used by the UI to distinguish "Connecting…"
    /// vs "Waiting for server to pick up…".
    lk_active:          bool,
    /// Client mode: bound SOCKS5 listener port (0 if not up).
    socks5_port:        u16,
    /// Currently active per-flow session count. Cosmetic.
    sessions:           u32,
    /// Client mode: the dialed peer's display info, for the
    /// "→ peer X" line in the status row.
    server_peer:        Option<PeerInfo>,
    /// Client-mode bytes counters for the status row.
    cli_tx_bytes:       u64,
    cli_rx_bytes:       u64,
}

#[derive(Serialize, Default)]
struct SelfInfo {
    id:   String,
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    nick: Option<String>,
}

#[derive(Serialize)]
struct PeerInfo {
    id:   String,
    name: String,
}

async fn get_state(State(s): State<Arc<AppState>>) -> Json<StateBody> {
    let cfg = s.cfg.read().await;
    let token_set = s.signaling.is_authenticated();
    let ws_ready  = s.signaling.is_connected();
    // "connecting" = run loop actively trying to handshake /
    // reconnect (`running && !ready`). NOT just "user wants
    // connection" (`is_connect_requested`) — the rule engine
    // intentionally tears the WS down during a client call
    // (call_active gate); intent stays true but the loop isn't
    // running, so showing "Connecting…" would be misleading.
    let ws_connecting = s.signaling.ws_is_attempting_connect();

    let self_info = if token_set {
        s.signaling.whoami().await.map(|p| SelfInfo {
            id:   p.id_str().to_string(),
            name: s.signaling.peer_display_name(&p).unwrap_or_default(),
            nick: None,
        })
    } else {
        None
    };

    let (socks5_port, client_room_ready, cli_tx, cli_rx) = match s.client.snapshot().await {
        Some(snap) => (snap.socks5_port, snap.connected, snap.rx_bytes, snap.tx_bytes),
        None       => (0, false, 0, 0),
    };
    let lk_rooms = s.server.client_count().await;

    // Look up the configured peer's display name (best-effort —
    // empty if the cache hasn't seen them yet). Async because
    // resolve_peer is async on the trait surface.
    let is_client = cfg.mode.as_deref() == Some("client");
    let server_peer = if is_client {
        match &cfg.peer_id {
            Some(pid) => {
                let name = match s.signaling.resolve_peer(pid).await {
                    Some(p) => s.signaling.peer_display_name(&p).unwrap_or_default(),
                    None    => String::new(),
                };
                Some(PeerInfo { id: pid.clone(), name })
            }
            None => None,
        }
    } else {
        None
    };

    // ws_paused: client mode + LK room up. The rule engine has
    // pulled the WS down on call_active=true; this gives the UI a
    // way to render "Paused (in call)" instead of "Disconnected".
    let ws_paused = is_client && client_room_ready && !ws_ready;
    Json(StateBody {
        token_set,
        mode:              cfg.mode.clone(),
        self_info,
        ws_ready,
        ws_connecting,
        ws_paused,
        client_activated:  is_client && cfg.peer_id.is_some() && token_set,
        client_room_ready,
        lk_rooms,
        lk_active:         client_room_ready,
        socks5_port,
        server_peer,
        cli_tx_bytes:      cli_tx,
        cli_rx_bytes:      cli_rx,
        ..StateBody::default()
    })
}

// ─── /connect + /disconnect + /logout ─────────────────────────────────────

#[derive(Deserialize, Default)]
struct ConnectBody {
    /// Optional access_token to persist before connecting. The
    /// HTML UI uses this when the user pastes a Bale cookie —
    /// the backend writes it to the same `TokenStore` the
    /// signaling layer reads from, then proceeds to connect.
    #[serde(default)]
    token: Option<String>,
}

async fn connect(
    State(s): State<Arc<AppState>>,
    body: Option<Json<ConnectBody>>,
) -> Result<Json<OkBody>, ApiError> {
    // Optional body — UI's "Paste token" form sends `{token}`;
    // a programmatic re-connect after the token's already
    // saved doesn't.
    if let Some(Json(ConnectBody { token: Some(t) })) = body {
        let t = t.trim();
        if !t.is_empty() {
            s.token_store.save(t.as_bytes());
        }
    }
    s.signaling.connect().await
        .map_err(|e| ApiError::Internal(e.to_string()))?;
    Ok(Json(OkBody { ok: true }))
}

async fn disconnect(State(s): State<Arc<AppState>>) -> Json<OkBody> {
    // Server mode: drop every connected client first. Each
    // `tunnel.disconnect()` sends a participant-leave so the peer
    // gets a `callEnded` over the WS while it's still up — then we
    // tear the WS down. Matches the daemon's shutdown drain order.
    // No-op in client mode (no installed clients, no pending).
    s.server.clear_all().await;
    s.signaling.disconnect().await;
    Json(OkBody { ok: true })
}

async fn logout(State(s): State<Arc<AppState>>) -> Json<OkBody> {
    s.signaling.sign_out().await;

    // Mode reset: if the operator pinned the mode via `--mode`
    // on the CLI, leave it alone — they explicitly wanted this
    // mode and don't expect the picker on re-login. If it was
    // a user choice from the picker, clear both the live
    // Resolved.mode and the on-disk Config.mode so the next
    // sign-in shows the picker again.
    let pinned = s.cfg.read().await.mode_pinned_by_cli;
    if !pinned {
        s.cfg.write().await.mode = None;
        if let Err(e) = s.config_file.update(|c| { c.mode = None; }) {
            log::warn!("logout: clear mode: {e}");
        }
    }

    // Force the daemon's run_mode loop out of its current per-mode
    // parking and back to the auth-wait state. Without this push,
    // the mode loop keeps running against a disconnected WS until
    // some other state change wakes it.
    let _ = s.mode_tx.send(None);
    Json(OkBody { ok: true })
}

// ─── Auth ─────────────────────────────────────────────────────────────────

#[derive(Deserialize)]
struct AuthStartBody { phone: String }

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct AuthStartReply {
    ok:                bool,
    transaction_hash:  String,
    is_registered:     bool,
}

async fn auth_start(
    State(s):   State<Arc<AppState>>,
    Json(body): Json<AuthStartBody>,
) -> Result<Json<AuthStartReply>, ApiError> {
    let r: StartResult = s.auth.start_phone_auth(&body.phone).await
        .map_err(|e| ApiError::Internal(e.to_string()))?;
    Ok(Json(AuthStartReply {
        ok:                true,
        transaction_hash:  r.transaction_hash,
        is_registered:     r.is_registered,
    }))
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct AuthVerifyBody {
    transaction_hash: String,
    code:             String,
    /// From `/auth/start`. A registered phone that comes back with
    /// no JWT means a wrong/expired code — not a signup. Without
    /// this hint the empty-JWT response is ambiguous and gets
    /// misread as `NeedsSignupName`. Defaults to false so an older
    /// client that omits it keeps the prior (signup) behaviour.
    #[serde(default)]
    is_registered:    bool,
}

/// Response shape the embedded HTML/JS UI parses for both
/// `/auth/verify` and `/auth/signup`:
///   `{ok: true,  needsSignup: false}` → token saved server-side; caller polls /state.
///   `{ok: true,  needsSignup: true, transactionHash}` → collect a name + POST /auth/signup.
///   `{ok: false, error}` → re-try the flow.
#[derive(Serialize, Default)]
#[serde(rename_all = "camelCase")]
struct AuthReply {
    ok:                 bool,
    needs_signup:       bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    transaction_hash:   Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    error:              Option<String>,
}

async fn auth_verify(
    State(s):   State<Arc<AppState>>,
    Json(body): Json<AuthVerifyBody>,
) -> Json<AuthReply> {
    match s.auth.submit_otp(&body.transaction_hash, &body.code).await {
        // A registered phone with no JWT isn't a signup — it's a
        // wrong/expired code. Surface it as an error instead of
        // sliding into the signup row.
        Ok(AuthOutcome::NeedsSignupName { .. }) if body.is_registered => Json(AuthReply {
            ok:    false,
            error: Some("Incorrect or expired code".into()),
            ..Default::default()
        }),
        Ok(outcome) => Json(persist_outcome(&s, outcome).await),
        Err(e)      => Json(AuthReply { ok: false, error: Some(e.to_string()), ..Default::default() }),
    }
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct AuthSignupBody {
    transaction_hash: String,
    name:             String,
}

async fn auth_signup(
    State(s):   State<Arc<AppState>>,
    Json(body): Json<AuthSignupBody>,
) -> Json<AuthReply> {
    match s.auth.submit_signup_name(&body.transaction_hash, &body.name).await {
        Ok(outcome) => Json(persist_outcome(&s, outcome).await),
        Err(e)      => Json(AuthReply { ok: false, error: Some(e.to_string()), ..Default::default() }),
    }
}

/// Common tail for both verify + signup. On Authenticated,
/// persist the access_token through the same TokenStore the
/// signaling layer reads. Caller then `/connect`s explicitly.
async fn persist_outcome(s: &AppState, outcome: AuthOutcome) -> AuthReply {
    match outcome {
        AuthOutcome::Authenticated { access_token } => {
            s.token_store.save(access_token.as_bytes());
            // Kick the signaling layer to bring the WS up so /state
            // flips to authenticated quickly — otherwise the UI sits
            // on "Logging in…" until run_mode's 1-second auth-poll
            // tick catches up.
            let _ = s.signaling.connect().await;
            AuthReply { ok: true, needs_signup: false, ..Default::default() }
        }
        AuthOutcome::NeedsSignupName { transaction_hash } => AuthReply {
            ok:                true,
            needs_signup:      true,
            transaction_hash:  Some(transaction_hash),
            ..Default::default()
        },
    }
}

// ─── Contacts ─────────────────────────────────────────────────────────────
//
// Both `/peers` and `/contacts/search` return UI-shaped peer rows:
// `{id, name?, nick?}`. The embedded HTML uses `id` as a string
// (it's the Bale uid as decimal) and renders `name` / `nick` for
// the picker label. We strip the cursor (no infinite-scroll UI)
// and return all matches in one shot.

#[derive(Serialize)]
struct UiPeer {
    /// Bale uid as a decimal string. Matches what `nativePlaceCall`
    /// expects on the way back through `/connect` → place_call.
    id:   String,
    /// Display name (cached or empty). UI falls back to "(no name)".
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    nick: Option<String>,
}

#[derive(Serialize)]
struct PeersReply { peers: Vec<UiPeer> }

#[derive(Serialize)]
struct UsersReply { ok: bool, users: Vec<UiPeer> }

async fn list_peers(
    State(s):  State<Arc<AppState>>,
    Query(_):  Query<std::collections::HashMap<String, String>>,
) -> Json<PeersReply> {
    let page = match s.signaling.list_contacts(None, None, 200).await {
        Ok(p)  => p,
        Err(_) => return Json(PeersReply { peers: vec![] }),
    };
    let peers = page.peers.iter().map(|p| UiPeer {
        id:   p.id_str().to_string(),
        name: s.signaling.peer_display_name(p).unwrap_or_default(),
        nick: None,
    }).collect();
    Json(PeersReply { peers })
}

async fn refresh_peers(State(s): State<Arc<AppState>>) -> Json<OkBody> {
    // Force a fresh list_contacts pull; the cache lives in the
    // Bale impl and gets invalidated only on add/remove. This is
    // a no-op for cache freshness, but the UI hits it to mean
    // "go look again" — re-rendering the dropdown after the
    // result is enough.
    let _ = s.signaling.list_contacts(None, None, 200).await;
    Json(OkBody { ok: true })
}

#[derive(Deserialize)]
struct ContactSearchBody {
    // UI sends `{query: "..."}`; older Node app used `{phone}`.
    // Accept either to be permissive.
    #[serde(default)]
    query: Option<String>,
    #[serde(default)]
    phone: Option<String>,
}

async fn contacts_search(
    State(s):   State<Arc<AppState>>,
    Json(body): Json<ContactSearchBody>,
) -> Json<UsersReply> {
    let q = body.query.or(body.phone).unwrap_or_default();
    let peers = match s.signaling.search_contact_by_phone(&q).await {
        Ok(p)  => p,
        Err(_) => return Json(UsersReply { ok: true, users: vec![] }),
    };
    let users = peers.iter().map(|p| UiPeer {
        id:   p.id_str().to_string(),
        name: s.signaling.peer_display_name(p).unwrap_or_default(),
        nick: None,
    }).collect();
    Json(UsersReply { ok: true, users })
}

// ─── Server-mode admission ────────────────────────────────────────────────
//
// The UI uses `callerId` / `callerName` keys to match the Node
// app's response shape. Each id is a Bale uid (decimal string);
// `callerName` is the cached display name when known.

#[derive(Serialize)]
struct CallerRow {
    #[serde(rename = "callerId")]
    caller_id:   String,
    #[serde(rename = "callerName", skip_serializing_if = "Option::is_none")]
    caller_name: Option<String>,
}

/// Build a row with the cached display name (sync — never RPCs).
async fn caller_row(s: &AppState, id: &str) -> CallerRow {
    let name = match s.signaling.resolve_peer(id).await {
        Some(p) => s.signaling.peer_display_name(&p).filter(|n| !n.is_empty()),
        None    => None,
    };
    CallerRow { caller_id: id.to_string(), caller_name: name }
}

#[derive(Deserialize)]
struct CallerIdBody {
    #[serde(rename = "callerId")]
    caller_id:   String,
    // callerName isn't persisted server-side (we resolve via
    // peer_display_name). Accept-and-ignore for forwards compat.
    #[serde(default, rename = "callerName")]
    _caller_name: Option<String>,
}

async fn get_admission(State(s): State<Arc<AppState>>) -> Json<Vec<CallerRow>> {
    let ids = s.server.admission_list().await;
    let mut rows = Vec::with_capacity(ids.len());
    for id in ids { rows.push(caller_row(&s, &id).await); }
    Json(rows)
}
async fn add_admission(
    State(s): State<Arc<AppState>>,
    Json(b):  Json<CallerIdBody>,
) -> Json<OkBody> {
    s.server.admission_add(&b.caller_id).await;
    // Persist the new list to disk so the change survives a
    // daemon restart. ServerState is in-memory; the config file
    // is the source of truth at startup. Same pattern for the
    // sibling mutators below.
    let snapshot = s.server.admission_list().await;
    if let Err(e) = s.config_file.update(|c| c.admission = snapshot) {
        log::warn!("persist admission: {e}");
    }
    Json(OkBody { ok: true })
}
async fn remove_admission(
    State(s):       State<Arc<AppState>>,
    Path(caller_id): Path<String>,
) -> Json<OkBody> {
    s.server.admission_remove(&caller_id).await;
    let snapshot = s.server.admission_list().await;
    if let Err(e) = s.config_file.update(|c| c.admission = snapshot) {
        log::warn!("persist admission: {e}");
    }
    Json(OkBody { ok: true })
}

async fn get_blacklist(State(s): State<Arc<AppState>>) -> Json<Vec<CallerRow>> {
    let ids = s.server.blacklist_list().await;
    let mut rows = Vec::with_capacity(ids.len());
    for id in ids { rows.push(caller_row(&s, &id).await); }
    Json(rows)
}
async fn add_blacklist(
    State(s): State<Arc<AppState>>,
    Json(b):  Json<CallerIdBody>,
) -> Json<OkBody> {
    s.server.blacklist_add(&b.caller_id).await;
    let snapshot = s.server.blacklist_list().await;
    if let Err(e) = s.config_file.update(|c| c.blacklist = snapshot) {
        log::warn!("persist blacklist: {e}");
    }
    Json(OkBody { ok: true })
}
async fn remove_blacklist(
    State(s):       State<Arc<AppState>>,
    Path(caller_id): Path<String>,
) -> Json<OkBody> {
    s.server.blacklist_remove(&caller_id).await;
    let snapshot = s.server.blacklist_list().await;
    if let Err(e) = s.config_file.update(|c| c.blacklist = snapshot) {
        log::warn!("persist blacklist: {e}");
    }
    Json(OkBody { ok: true })
}

/// UI parses `{value, max}` — `value` = current cap, `max` =
/// hard upper bound for the input's `max` attribute.
#[derive(Serialize)]
struct MaxClientsReply { value: u32, max: u32 }
#[derive(Deserialize)]
struct MaxClientsBody  { value: u32 }

async fn get_max_clients(State(s): State<Arc<AppState>>) -> Json<MaxClientsReply> {
    Json(MaxClientsReply {
        value: s.server.max_clients(),
        max:   crate::daemon::KERNEL_TUN_SLOT_LIMIT as u32,
    })
}
async fn set_max_clients(
    State(s): State<Arc<AppState>>,
    Json(b):  Json<MaxClientsBody>,
) -> Json<OkBody> {
    s.server.set_max_clients(b.value).await;
    // Persist the new cap so it survives daemon restart —
    // ServerState.max_clients is in-memory only.
    let snapshot = s.server.max_clients();
    if let Err(e) = s.config_file.update(|c| c.max_clients = snapshot) {
        log::warn!("persist max_clients: {e}");
    }
    Json(OkBody { ok: true })
}

#[derive(Serialize)]
struct PendingRow {
    #[serde(rename = "callerId")]
    caller_id:   String,
    #[serde(rename = "callerName", skip_serializing_if = "Option::is_none")]
    caller_name: Option<String>,
    #[serde(rename = "receivedAt")]
    received_at: u64,
}

async fn get_pending(State(s): State<Arc<AppState>>) -> Json<Vec<PendingRow>> {
    let raw = s.server.pending_list().await;
    Json(raw.into_iter().map(|p| PendingRow {
        caller_id:   p.peer_id,
        caller_name: p.display_name.filter(|n| !n.is_empty()),
        received_at: p.received_at,
    }).collect())
}
#[derive(Deserialize, Default)]
struct AcceptPendingBody {
    /// "Allow always" sticky-add — bumps the caller into the
    /// allow-list so future calls auto-accept. "Accept once"
    /// leaves the list untouched.
    #[serde(default, rename = "addToList")]
    add_to_list: bool,
}

async fn accept_pending(
    State(s):       State<Arc<AppState>>,
    Path(peer_id):  Path<String>,
    body:           Option<Json<AcceptPendingBody>>,
) -> Json<OkBody> {
    s.server.pending_resolve(&peer_id, lk_signaling::CallDecision::Accept).await;
    if let Some(Json(AcceptPendingBody { add_to_list: true })) = body {
        s.server.admission_add(&peer_id).await;
        let snapshot = s.server.admission_list().await;
        if let Err(e) = s.config_file.update(|c| c.admission = snapshot) {
            log::warn!("persist admission: {e}");
        }
    }
    Json(OkBody { ok: true })
}
async fn reject_pending(
    State(s):       State<Arc<AppState>>,
    Path(peer_id):  Path<String>,
) -> Json<OkBody> {
    s.server.pending_resolve(&peer_id, lk_signaling::CallDecision::Reject).await;
    // Reject is always sticky — blacklists the caller. There's
    // no "decline once" option in the UI by design (matches the
    // Allow always / Allow once asymmetry: positive intent is
    // explicit, negative intent is sticky).
    s.server.blacklist_add(&peer_id).await;
    let snapshot = s.server.blacklist_list().await;
    if let Err(e) = s.config_file.update(|c| c.blacklist = snapshot) {
        log::warn!("persist blacklist: {e}");
    }
    Json(OkBody { ok: true })
}

/// Client-mode: end the current call. Clears the configured
/// peer in cfg + persists to disk + republishes `mode_tx` so
/// `run_mode` tears the in-flight `run_client` task down. With
/// `peer_id = None`, the next iteration of `run_mode` parks
/// `run_client` until a peer is configured again — equivalent
/// to the user pressing "Disconnect" in the UI. Idempotent.
///
/// Does NOT touch the WS — the WS lifecycle is owned entirely
/// by the rule engine; the call going away will flip
/// `call_active=false` via the global LK observer and the WS
/// will resume on its own.
async fn tunnel_disconnect(State(s): State<Arc<AppState>>) -> Result<Json<OkBody>, ApiError> {
    s.config_file.update(|c| { c.peer_id = None; })
        .map_err(|e| ApiError::Internal(format!("persist: {e}")))?;
    let restart_mode = {
        let mut cfg = s.cfg.write().await;
        cfg.peer_id = None;
        cfg.mode.clone()
    };
    let _ = s.mode_tx.send(restart_mode);
    Ok(Json(OkBody { ok: true }))
}

// ─── Tunnel status ────────────────────────────────────────────────────────

#[derive(Serialize)]
struct TunnelStatus {
    /// `null` until the user has picked a mode.
    mode:           Option<String>,
    connected:      bool,
    socks5_bound:   Option<u16>,
    client_count:   usize,
}

async fn tunnel_status(State(s): State<Arc<AppState>>) -> Json<TunnelStatus> {
    let cfg = s.cfg.read().await;
    Json(TunnelStatus {
        mode:         cfg.mode.clone(),
        connected:    s.signaling.is_connected(),
        socks5_bound: s.client.socks5_bound_port().await,
        client_count: s.server.client_count().await,
    })
}

/// UI iterates the response as a plain Array<row>. Each row has
/// camelCase `callKey` (string id, = peer id), optional
/// `callerId` / `callerName`, plus per-flow counters.
#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct TunnelClientRow {
    call_key:    String,
    caller_id:   String,
    #[serde(skip_serializing_if = "Option::is_none")]
    caller_name: Option<String>,
    rx_bytes:    u64,
    tx_bytes:    u64,
    /// Absolute epoch-ms when this client connected. UI's
    /// `fmtAge` expects an epoch timestamp (not a duration)
    /// and renders `Date.now() - connectedAt` — a duration
    /// here yields `NaN` after the subtraction.
    connected_at: u64,
}

async fn tunnel_clients(State(s): State<Arc<AppState>>) -> Json<Vec<TunnelClientRow>> {
    let infos = s.server.client_infos().await;
    Json(infos.into_iter().map(|c| TunnelClientRow {
        call_key:    c.peer_id.clone(),
        caller_id:   c.peer_id,
        caller_name: c.display_name.filter(|n| !n.is_empty()),
        rx_bytes:    c.rx_bytes,
        tx_bytes:    c.tx_bytes,
        connected_at: c.connected_at_ms,
    }).collect())
}

/// Kick a connected server-side client. Closes the LkTunnel
/// for the peer; LK signals participant-disconnect, Bale fires
/// callEnded, the server's events collector tears the entry
/// from `ServerState`. No-op in client mode (no per-peer entry
/// to kick).
async fn tunnel_client_disconnect(
    State(s):       State<Arc<AppState>>,
    Path(peer_id):  Path<String>,
) -> Json<OkBody> {
    s.server.remove_client(&peer_id).await;
    Json(OkBody { ok: true })
}

// ─── Boilerplate ──────────────────────────────────────────────────────────

#[derive(Serialize)]
struct OkBody { ok: bool }

/// Tiny error wrapper. Returns **200 + `{ok:false, error:..}`**
/// so the embedded HTML/JS UI (which checks `data.ok`, not the
/// HTTP status) can surface the message. Matches the Node app's
/// response shape — calling code stays branch-free.
#[derive(Debug)]
enum ApiError {
    Internal(String),
}
impl IntoResponse for ApiError {
    fn into_response(self) -> axum::response::Response {
        let Self::Internal(m) = self;
        // 200 OK; failure flag lives in the body. The 500 path
        // was a footgun — tower-http logs every failed call as
        // an alarming server error, and the UI never gets to
        // read the message because `fetch` rejects on non-2xx.
        (StatusCode::OK,
         Json(serde_json::json!({ "ok": false, "error": m })))
            .into_response()
    }
}
