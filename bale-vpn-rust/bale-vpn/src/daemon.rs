//! Daemon orchestration. Owns the [`BaleSignaling`] instance,
//! the per-mode active handle (client / server), and the shared
//! `AppState` the HTTP UI reads/writes.

use crate::client::ClientState;
use crate::config::{ConfigFile, FileTokenStore, Resolved};
use crate::server::ServerState;
use bale_signaling::auth::BaleAuth;
use bale_signaling::BaleSignaling;
use lk_signaling::{
    CallDecision, IncomingHandler, PeerId, PlaceCallError, Signaling, TokenStore,
};
use std::error::Error;
use std::net::SocketAddr;
use std::sync::Arc;
use std::time::Duration;
use tokio::sync::{oneshot, watch, RwLock};

/// State shared with the HTTP UI handlers. Wrapped in an Arc so
/// axum's State extractor can clone it onto every request task.
pub struct AppState {
    /// Bale signaling client. Lifecycle is process-scoped: one
    /// instance from daemon start to daemon exit; the WS run
    /// loop inside handles reconnects.
    pub signaling: Arc<BaleSignaling>,
    /// Auth helper (SMS OTP + signup + paste-cookie refresh).
    /// Stateless — one shared instance is fine.
    pub auth: BaleAuth,
    /// Token storage. `BaleAuth` writes through this on
    /// `Authenticated`; the signaling layer reads it on connect.
    pub token_store: Arc<dyn TokenStore>,
    /// Shared on-disk config handle. Both the [`FileTokenStore`]
    /// and the HTTP `/config` handler call `update()` so writes
    /// can't lose updates to each other.
    pub config_file: Arc<ConfigFile>,
    /// Resolved config — guarded by an `RwLock` so the UI can
    /// expose `/config` reads + writes without races.
    pub cfg: RwLock<Resolved>,
    /// Mode-change channel — `/config` publishes here when the
    /// caller flips `mode`, [`run_mode`] subscribes so it can
    /// tear down the current per-mode task and restart in the
    /// new mode without a process restart.
    pub mode_tx: watch::Sender<Option<String>>,
    /// Client-mode session state. Empty when in server mode.
    pub client: Arc<ClientState>,
    /// Server-mode admission + per-call tracking. Empty when in
    /// client mode (the structures are cheap to keep around).
    pub server: Arc<ServerState>,
}

pub async fn run(cfg: Resolved) -> Result<(), Box<dyn Error>> {
    let (_tx, rx) = oneshot::channel::<()>();
    // No external shutdown source — the headless path relies on
    // [`wait_for_signal`] for ctrl-C / SIGTERM, so the receiver
    // never fires (the `_tx` half stays in scope and only drops
    // when this function returns).
    run_with_shutdown(cfg, rx).await
}

/// As [`run`] but accepts an external shutdown channel — used by
/// the GUI shell so closing the window can trigger a clean WS
/// close + LK room drain before the process exits.
pub async fn run_with_shutdown(
    cfg:      Resolved,
    shutdown: oneshot::Receiver<()>,
) -> Result<(), Box<dyn Error>> {
    // Boot the lktunnel mio reactor. The CLI / Android JNI shim
    // both do this — the binary `bale-vpn` was missing it, so
    // `attach_tun` / NAT host-socket registration silently failed
    // with "dispatcher not running". Idempotent.
    lktunnel::dispatcher::init();

    let config_file = Arc::new(ConfigFile::new(cfg.config_dir.clone()));
    // Snapshot the persisted lists / cap so ServerState starts
    // pre-seeded — the UI handlers write through to disk on
    // mutations, so the on-disk file is the source of truth.
    let persisted = config_file.load();
    let token_store: Arc<dyn TokenStore> = FileTokenStore::new(config_file.clone()).into_arc();
    let signaling   = BaleSignaling::new(token_store.clone());
    // Load any persisted token from disk into the WS rule engine
    // so a cold start with saved credentials brings the WS up
    // automatically (no waiting for an explicit /connect call).
    signaling.auto_load_token();
    let auth        = BaleAuth::new();
    let http_port   = cfg.port;
    let (mode_tx, _) = watch::channel(cfg.mode.clone());

    // Client-mode: start idle. The persisted `peer_id` is the
    // user's last-dialed peer (kept for UI dropdown convenience
    // via the persisted file), but we don't auto-dial on startup —
    // the user explicitly presses Connect in the UI, which POSTs
    // /tunnel/config and sets peer_id back. Without this, a
    // server-side InvalidPeer error would tight-loop run_mode
    // because run_client immediately re-dials on next iteration.
    let mut cfg = cfg;
    cfg.peer_id = None;
    let state = Arc::new(AppState {
        signaling:   signaling.clone(),
        auth,
        token_store,
        config_file,
        cfg:         RwLock::new(cfg),
        mode_tx,
        client:      ClientState::new(),
        server:      ServerState::with_config(
                         persisted.admission,
                         persisted.blacklist,
                         persisted.max_clients,
                     ),
    });

    // HTTP UI runs for the whole daemon lifetime. Bound to
    // 127.0.0.1 so off-host access requires an explicit
    // ssh-tunnel — matches the Node app's policy.
    let http_addr: SocketAddr = format!("127.0.0.1:{http_port}").parse()?;
    let http_state = state.clone();
    let http_task  = tokio::spawn(async move {
        if let Err(e) = crate::ui::serve(http_state, http_addr).await {
            log::error!("HTTP UI exited: {e}");
        }
    });

    // The per-mode work runs in parallel with the HTTP UI. The
    // mode task exiting is NOT a daemon-shutdown signal — it
    // exits cleanly any time the user hasn't signed in yet (or
    // briefly between mode switches), and the HTTP UI needs to
    // stay up so they can sign in. Daemon-shutdown is triggered
    // by `http_task` exit (port-bind failure, etc.), an OS
    // signal, or the GUI shell's explicit close.
    let mode_state = state.clone();
    let mode_task  = tokio::spawn(async move {
        match run_mode(mode_state).await {
            Ok(())  => log::info!("mode task exited cleanly"),
            Err(e)  => log::error!("mode task exited with error: {e}"),
        }
    });

    tokio::select! {
        _ = http_task                       => log::info!("HTTP UI task exited"),
        _ = wait_for_signal()               => log::info!("signal received, shutting down"),
        // GUI shell signals here on window close. `oneshot::Receiver`
        // resolves to either `Ok(())` (explicit send) or `Err(_)`
        // (sender dropped) — both mean "shut down", so we don't
        // care which.
        _ = shutdown                        => log::info!("shutdown channel signaled"),
    }
    // Cancel the mode task in case it's still running; ignore
    // any panic/cancel error.
    mode_task.abort();

    // Drain order: drop active per-mode sessions first so their
    // LK rooms send participant-leave / close, then disconnect
    // the signaling WS so Bale gets a clean session close. A
    // brief sleep gives outgoing frames time to flush before the
    // tokio runtime drops on return.
    state.client.clear();
    state.server.clear_all().await;
    signaling.disconnect().await;
    tokio::time::sleep(Duration::from_millis(500)).await;
    Ok(())
}

/// Per-mode orchestration. Runs the client/server lifecycle in
/// a loop: starts the current mode, tears down + restarts when
/// `/config` flips `mode`.
///
/// For client mode without a configured peer or token we just
/// wait — the HTTP UI lets the user complete sign-in and pick a
/// peer.
async fn run_mode(state: Arc<AppState>) -> Result<(), Box<dyn Error + Send + Sync>> {
    // Loop: each iteration covers one full "auth → WS → mode"
    // lifecycle. Logout drops us back to the auth-wait at the
    // top by clearing the token and pushing `None` on mode_tx
    // (the outer select wakes, the mode is unset, we fall through
    // to auth-recheck).
    let mut mode_rx = state.mode_tx.subscribe();
    'outer: loop {
        // 1. Wait for auth. The auth handler writes through
        //    `TokenStore::save`; we poll once a second so the
        //    pickup is prompt without any explicit signal.
        if !state.signaling.is_authenticated() {
            log::info!("no token yet — waiting for sign-in via HTTP UI");
            while !state.signaling.is_authenticated() {
                tokio::time::sleep(Duration::from_secs(1)).await;
            }
            log::info!("token acquired — bringing WS up");
        }

        // 2. Bring up the WS. Errors are non-fatal: log and
        //    iterate (the next loop reaches the auth check and
        //    if the token is still there, retries the connect).
        log::info!("connecting WS…");
        if let Err(e) = state.signaling.connect().await {
            log::warn!("ws connect: {e} — retrying in 2s");
            tokio::time::sleep(Duration::from_secs(2)).await;
            continue 'outer;
        }
        // Poll for handshake completion. Bounded so a wedged WS
        // doesn't hold up the loop forever; we proceed anyway.
        let mut tries = 0u32;
        while !state.signaling.is_connected() && tries < 40 {
            tokio::time::sleep(Duration::from_millis(250)).await;
            tries += 1;
        }
        if state.signaling.is_connected() { log::info!("WS connected"); }
        else { log::warn!("WS handshake didn't complete after 10s — continuing anyway"); }

        // 3. Pick a mode (waiting on `mode_tx` if unset). When
        //    we have one, run it until either it ends or the
        //    mode flips or auth drops.
        let mode = match state.cfg.read().await.mode.clone() {
            Some(m) if m == "client" || m == "server" => m,
            other => {
                if let Some(m) = other.filter(|m| !m.is_empty()) {
                    log::warn!("mode {m:?} not recognised — treating as unset");
                }
                log::info!("mode not selected yet — waiting for UI choice");
                if mode_rx.changed().await.is_err() {
                    log::info!("mode channel closed — exiting run_mode");
                    teardown_mode(&state).await;
                    return Ok(());
                }
                continue 'outer;
            }
        };
        log::info!("entering mode={mode}");

        let outcome: Result<(), Box<dyn Error + Send + Sync>> = tokio::select! {
            r = run_one_mode(&state, &mode) => r,
            r = mode_rx.changed()           => {
                if r.is_err() {
                    log::info!("mode channel closed — exiting run_mode");
                    teardown_mode(&state).await;
                    return Ok(());
                }
                log::info!("mode change → tearing down {mode}");
                Ok(())
            }
        };
        if let Err(e) = outcome {
            log::warn!("mode {mode} ended with error: {e}");
            // On client error, clear the configured peer so the
            // next iteration parks instead of immediately
            // re-dialing the same bad peer (and tight-looping on
            // a deterministic Bale error like InvalidPeer). The
            // user has to press Connect again from the UI, which
            // re-POSTs /tunnel/config and gives them a chance to
            // pick a different peer.
            if mode == "client" {
                state.cfg.write().await.peer_id = None;
            }
        }
        teardown_mode(&state).await;
    }
}

async fn run_one_mode(state: &Arc<AppState>, mode: &str)
    -> Result<(), Box<dyn Error + Send + Sync>>
{
    match mode {
        "client" => run_client(state).await,
        "server" => run_server(state).await,
        other    => Err(format!("unknown mode: {other}").into()),
    }
}

/// Drop per-mode state in preparation for either exit or the
/// next mode iteration. Closes any active LkTunnels (which
/// signals participant-disconnect to peers), clears the pending
/// admission queue, and installs a SilentlyIgnore handler so a
/// stray incoming call between modes isn't accepted against
/// stale state.
async fn teardown_mode(state: &Arc<AppState>) {
    state.client.clear();
    state.server.clear_all().await;
    state.signaling.set_incoming_handler(Box::new(NoopHandler));
    // Revert the WS rule engine to client semantics on any mode
    // exit. If a prior `run_server` flipped `server_active=true`
    // and we're switching to client (or unsetting mode), the WS
    // would otherwise stay always-on under server semantics.
    //
    // No call_active push needed — `TunnelInner::teardown` (which
    // runs on LkTunnel Drop) synthesizes a `Disconnected` event
    // to the global observer, which is what the signaling lib
    // listens to. Source of truth for "call_active" is owned by
    // the signaling + lktunnel pair; apps no longer push it.
    state.signaling.set_server_active(false);
}

/// Incoming-call handler installed between modes (and any time
/// the daemon doesn't want to accept calls). Always silently
/// ignores — no Bale-side notification to the caller, just a
/// dropped INVITE.
struct NoopHandler;
#[async_trait::async_trait]
impl IncomingHandler for NoopHandler {
    async fn decide(&self, _: PeerId, _: Option<String>) -> CallDecision {
        CallDecision::SilentlyIgnore
    }
}

/// Server-mode bring-up. Installs the admission handler and a
/// background events collector. Once running, accepts incoming
/// calls per the allow/block lists; the HTTP UI exposes the
/// pending queue.
///
/// `--nat-mode kernel`: each accepted session gets its own
/// `bale<K>` TUN at `10.8.<K>.1/24` (server side, peer is
/// `10.8.<K>.2`). The kernel forwards via MASQUERADE / pf —
/// best throughput; needs `CAP_NET_ADMIN` (Linux) or root
/// (macOS) plus the broader iptables rule (see CLAUDE.md).
/// `K` runs 0..[`KERNEL_TUN_SLOT_LIMIT`); when exhausted the
/// session falls back to userspace NAT.
///
/// `--nat-mode userspace`: each accepted session runs an
/// in-process userspace NAT (`LkTunnel::start_server`). No
/// privilege needed; portable.
async fn run_server(state: &Arc<AppState>) -> Result<(), Box<dyn Error + Send + Sync>> {
    log::info!("server: installing admission handler");
    // Tell the WS rule engine we're in server semantics — WS
    // stays up unconditionally (modulo token + user_disconnect)
    // so we can receive incoming `callReceived` pushes. Without
    // this, the first accepted call's LK Connected event fires
    // the global observer → `set_call_active(true)` → client
    // semantics would tear the WS down → no more incoming
    // pushes → server effectively dies.
    state.signaling.set_server_active(true);

    let nat_mode = state.cfg.read().await.nat_mode.clone();
    if nat_mode == "kernel" {
        // Kernel TUN is Unix-only; Windows has no device we ship.
        #[cfg(not(unix))]
        return Err("server: kernel NAT mode is Unix-only — re-run with --nat-mode userspace".into());
        #[cfg(unix)]
        {
            // Pre-flight: open + drop a TUN once so privilege failures
            // surface at daemon-start, not at first-call time.
            // `bale_pf<K>` uses an out-of-pool slot index so the
            // probe can't race a real session's slot allocation.
            let probe_name = format!("bale_pf{KERNEL_TUN_SLOT_LIMIT}");
            let probe_addr = format!("10.8.{}.1", KERNEL_TUN_SLOT_LIMIT);
            match crate::tun::open_server_tun(&probe_name, &probe_addr, 24, 1400) {
                Ok(_) => log::info!("server: kernel TUN privilege check OK"),
                Err(e) => return Err(format!(
                    "server: kernel TUN open failed ({e}) — re-run with --nat-mode userspace, \
                     or `setcap cap_net_admin+eip $(which bale-vpn)` (Linux) / run as root (macOS) first"
                ).into()),
            }
        }
    } else if nat_mode != "userspace" {
        return Err(format!("unknown --nat-mode: {nat_mode}").into());
    }

    let server_for_handler = state.server.clone();
    state.signaling.set_incoming_handler(Box::new(AdmissionHandler {
        server: server_for_handler,
    }));

    // SessionReady → build LkTunnel against the LK creds and
    // hook it into the NAT path. Kernel mode allocates a slot
    // K from the SNAT pool and opens a per-session `bale<K>`
    // TUN at `10.8.<K>.1/24`; userspace mode runs an in-process
    // NAT. Slots are returned on session end.
    let state_for_events = state.clone();
    let slots_for_ready  = state.server.clone();
    let nat_mode_ready   = nat_mode.clone();
    state.signaling.on_session_ready(Box::new(move |(peer, session)| {
        let peer_id   = peer.id_str().to_string();
        let st        = state_for_events.clone();
        let slots     = slots_for_ready.clone();
        let nat_mode  = nat_mode_ready.clone();
        tokio::spawn(async move {
            log::info!("server: session ready for {peer_id}");
            let display = st.signaling.fetch_display_name(&peer).await;
            // Server-role tunnel — auto-warm of the client QUIC
            // is suppressed at the lktunnel side, so `start_server`
            // claims the QUIC role uncontested.
            //
            // The on_event callback drops the client from
            // ServerState the moment the LK room reports
            // Disconnected — without this we'd wait 30s+ for
            // Bale's CallEnded to arrive over the WS push.
            let st_for_event   = st.clone();
            let peer_for_event = peer_id.clone();
            let tunnel = st.signaling.wrap_incoming_session(
                session,
                move |ev: lktunnel::Event| {
                    log::debug!("lk event: {:?} {}", ev.kind, ev.info);
                    if matches!(ev.kind, lktunnel::EventKind::Disconnected) {
                        let st = st_for_event.clone();
                        let pid = peer_for_event.clone();
                        tokio::spawn(async move {
                            log::info!("server: LK room disconnected for {pid} — dropping client");
                            st.server.remove_client(&pid).await;
                        });
                    }
                },
            );
            if let Err(e) = tunnel.await_connected().await {
                log::warn!("server: LK await_connected failed for {peer_id}: {e}");
                return;
            }

            // Allocate a kernel-TUN slot if in kernel mode; on
            // exhaustion fall back to userspace NAT for this
            // session (other sessions can still use kernel TUN
            // once a slot frees).
            let mut slot_used: Option<u8> = None;
            let nat_ok = if nat_mode == "kernel" {
                // Kernel TUN is Unix-only. On non-Unix this arm is
                // unreachable (config preflight rejects kernel mode), but
                // it must still compile — fall back to userspace NAT.
                #[cfg(not(unix))]
                { let _ = &slots; tunnel.start_server().is_ok() }
                #[cfg(unix)]
                {
                match slots.alloc_kernel_slot() {
                    Some(k) => {
                        let name = format!("bale{k}");
                        let addr = format!("10.8.{k}.1");
                        match crate::tun::open_server_tun(&name, &addr, 24, 1400) {
                            Ok(dev) => {
                                let fd  = dev.into_raw_fd();
                                let fmt = crate::tun::host_tun_format();
                                match tunnel.attach_tun_with_format(fd, fmt) {
                                    Ok(()) => {
                                        log::info!("server: kernel TUN bale{k} ({addr}/24) attached for {peer_id} (fmt={fmt:?})");
                                        slot_used = Some(k);
                                        true
                                    }
                                    Err(e) => {
                                        log::warn!("server: attach_tun bale{k} failed for {peer_id}: {e} — \
                                                    fallback userspace NAT");
                                        slots.release_kernel_slot(k);
                                        unsafe { libc::close(fd); }
                                        tunnel.start_server().is_ok()
                                    }
                                }
                            }
                            Err(e) => {
                                log::warn!("server: open bale{k} failed for {peer_id}: {e} — \
                                            fallback userspace NAT");
                                slots.release_kernel_slot(k);
                                tunnel.start_server().is_ok()
                            }
                        }
                    }
                    None => {
                        log::warn!("server: kernel TUN pool exhausted — \
                                    fallback userspace NAT for {peer_id}");
                        tunnel.start_server().is_ok()
                    }
                }
                }
            } else {
                match tunnel.start_server() {
                    Ok(()) => { log::info!("server: userspace NAT up for {peer_id}"); true }
                    Err(e) => { log::warn!("server: start_server failed for {peer_id}: {e}"); false }
                }
            };
            if !nat_ok {
                if let Some(k) = slot_used { slots.release_kernel_slot(k); }
                return;
            }
            st.server.install_client(peer_id, tunnel, display, slot_used).await;
        });
    }));

    // No WS CallEnded teardown path. LK is the sole authority
    // for "this session is over" — the per-session LkTunnel's
    // Disconnected event (wired inside the on_session_ready
    // closure above) fires remove_client. WS-side CallEnded
    // pushes are intentionally ignored so a transient WS
    // hiccup (cardinality re-subscribes, brief WS reconnect)
    // can't drop a live LK session.

    log::info!("server: ready — parking until shutdown");
    std::future::pending::<()>().await;
    Ok(())
}

/// Cap on simultaneous kernel-TUN sessions. Each slot consumes a
/// `10.8.<K>.0/24` subnet and a `bale<K>` interface; the iptables
/// MASQUERADE rule needs to be widened to `-s 10.8.0.0/16` to
/// cover the whole pool. 254 leaves room for a single probe slot
/// at `KERNEL_TUN_SLOT_LIMIT` so daemon-start privilege checks
/// can't collide with a real session.
pub(crate) const KERNEL_TUN_SLOT_LIMIT: u8 = 254;

/// IncomingHandler impl. Defers to [`ServerState`] for the
/// allow/block lookup and parks pending decisions on a
/// oneshot the UI completes.
struct AdmissionHandler {
    server: Arc<ServerState>,
}

#[async_trait::async_trait]
impl IncomingHandler for AdmissionHandler {
    async fn decide(&self, peer: PeerId, display_name: Option<String>) -> CallDecision {
        let peer_str = peer.id_str().to_string();

        if self.server.blacklist_list().await.iter().any(|p| p == &peer_str) {
            return CallDecision::SilentlyIgnore;
        }
        if self.server.client_count().await >= self.server.max_clients() as usize {
            log::info!("server: at capacity — rejecting {peer_str}");
            return CallDecision::SilentlyIgnore;
        }
        if self.server.admission_list().await.iter().any(|p| p == &peer_str) {
            return CallDecision::Accept;
        }

        // Park for user decision. The UI calls
        // `/server/pending/<peer>/accept|reject` to resolve.
        // 60 s default timeout matches the Android UX.
        let (tx, rx) = oneshot::channel();
        self.server.pending_park(peer_str.clone(), display_name, tx).await;
        let decision = tokio::time::timeout(Duration::from_secs(60), rx).await;
        match decision {
            Ok(Ok(d))  => d,
            Ok(Err(_)) => CallDecision::SilentlyIgnore,    // sender dropped
            Err(_)     => {
                log::info!("server: pending decision timeout for {peer_str}");
                // Best-effort: clear the pending entry so the
                // UI doesn't show a stale row.
                self.server.pending_resolve(&peer_str, CallDecision::SilentlyIgnore).await;
                CallDecision::SilentlyIgnore
            }
        }
    }
}

async fn run_client(state: &Arc<AppState>) -> Result<(), Box<dyn Error + Send + Sync>> {
    // Defensive: ensure the WS rule engine is in client semantics.
    // `teardown_mode` already does this between mode switches, but
    // pushing again here is cheap and makes the entry point
    // self-consistent — anyone calling run_client gets client
    // semantics regardless of what came before.
    state.signaling.set_server_active(false);

    let (peer_id_str, socks5_port, client_tun) = {
        let cfg = state.cfg.read().await;
        (cfg.peer_id.clone(), cfg.socks5_port, cfg.client_tun)
    };
    let Some(peer_id_str) = peer_id_str else {
        log::info!("client: no peer_id configured — waiting for selection via HTTP UI");
        std::future::pending::<()>().await;
        return Ok(());
    };
    log::info!("client: placing call to peer {peer_id_str}");

    let peer = state.signaling.resolve_peer(&peer_id_str).await
        .ok_or("client: unknown peer (resolve_peer returned None)")?;

    // LK Disconnected → notify the parked run_client via a
    // oneshot so it tears down the session immediately. The
    // tunnel construction goes through the signaling library
    // so the LK lifecycle is auto-wired to set_call_active —
    // WS pauses while the call is up, no app-side WS control
    // needed.
    let (lk_done_tx, lk_done_rx) = tokio::sync::oneshot::channel::<()>();
    let lk_done_tx = Arc::new(std::sync::Mutex::new(Some(lk_done_tx)));

    // WS-driven early-teardown for any CallEnded targeting our
    // peer. We don't have a confirmed mapping from Bale's
    // discardReason codes to EndReason::Rejected (the mapper
    // returns Other(code) for everything), so we can't filter
    // by reason — the peer match alone is enough: a CallEnded
    // for the specific peer we dialled is the server's
    // authoritative "this call is over" signal. Reason is
    // logged for visibility.
    let peer_id_str_for_cb = peer.id_str().to_string();
    let lk_done_for_reject = Arc::clone(&lk_done_tx);
    state.signaling.on_call_ended(Box::new(move |(p, reason)| {
        if p.id_str() == peer_id_str_for_cb {
            if let Some(tx) = lk_done_for_reject.lock().expect("lk_done lock").take() {
                log::info!("client: WS callEnded for our peer (reason={reason:?}) — tearing down");
                let _ = tx.send(());
            }
        }
    }));

    let lk_done_for_lk = Arc::clone(&lk_done_tx);
    let tunnel = match state.signaling
        .place_call_with_tunnel(peer, move |ev: lktunnel::Event| {
            log::debug!("lk event: {:?} {}", ev.kind, ev.info);
            if matches!(ev.kind, lktunnel::EventKind::Disconnected) {
                if let Some(tx) = lk_done_for_lk.lock().expect("lk_done lock").take() {
                    log::info!("client: LK tunnel disconnected — tearing down session");
                    let _ = tx.send(());
                }
            }
        })
        .await
    {
        Ok(t)                                  => t,
        Err(PlaceCallError::Rejected)          => return Err("call rejected by peer".into()),
        Err(PlaceCallError::NoPeer)            => return Err("peer never joined (timeout)".into()),
        Err(PlaceCallError::NotAuthenticated)  => return Err("not authenticated".into()),
        Err(PlaceCallError::Transport(s))      => return Err(format!("transport: {s}").into()),
    };
    log::info!("client: call placed, joining LK room");
    tunnel.await_connected().await
        .map_err(|e| -> Box<dyn Error + Send + Sync> { e.to_string().into() })?;
    log::info!("client: LK tunnel up");

    let bound = tunnel.enable_socks5_server(socks5_port).await
        .map_err(|e| -> Box<dyn Error + Send + Sync> { e.to_string().into() })?;
    log::info!("client: SOCKS5 listening on {bound}");

    // Optional TUN attach. Lets the host route traffic through
    // the tunnel directly (full system VPN). The caller is
    // expected to set up routing (`ip route add default dev
    // bale-c0`) — we don't touch the routing table from here.
    // Kernel-TUN client attach is Unix-only; on Windows the host VPN
    // path isn't available (userspace NAT / SOCKS5 only).
    #[cfg(unix)]
    if client_tun {
        match crate::tun::open_client_tun("bale-c0", "10.8.0.2", 24, 1400) {
            Ok(dev) => {
                let iface = dev.name.clone();
                let fd    = dev.into_raw_fd();
                let fmt   = crate::tun::host_tun_format();
                log::info!("client: opened TUN {iface} (10.8.0.2/24, fd={fd}, fmt={fmt:?}) — \
                            install your default route via that interface");
                if let Err(e) = tunnel.attach_tun_with_format(fd, fmt) {
                    log::warn!("client: attach_tun failed: {e}");
                }
            }
            Err(e) => log::warn!(
                "client: --client-tun set but TUN open failed ({e}); SOCKS5 still up"
            ),
        }
    }
    #[cfg(not(unix))]
    if client_tun {
        log::warn!("client: --client-tun is Unix-only; ignoring on this OS (SOCKS5 still up)");
    }

    // Publish to ClientState so the HTTP UI can show status +
    // future runtime toggles (SOCKS5 on/off, port change) can
    // reach the tunnel.
    state.client.set_tunnel(tunnel.clone(), bound.port());

    // Park until either the LK side disconnects (server left
    // the room) or the outer select! catches a shutdown
    // signal. Either way, clear ClientState on exit so the UI
    // flips back to the activate prompt.
    let _ = lk_done_rx.await;
    state.client.clear();
    Ok(())
}

/// Block until SIGTERM / SIGINT (or Ctrl-C on Windows).
async fn wait_for_signal() {
    #[cfg(unix)]
    {
        use tokio::signal::unix::{signal, SignalKind};
        let mut sigint  = signal(SignalKind::interrupt()).expect("sigint");
        let mut sigterm = signal(SignalKind::terminate()).expect("sigterm");
        tokio::select! {
            _ = sigint.recv()  => log::info!("SIGINT received"),
            _ = sigterm.recv() => log::info!("SIGTERM received"),
        }
    }
    #[cfg(not(unix))]
    {
        let _ = tokio::signal::ctrl_c().await;
        log::info!("Ctrl-C received");
    }
}
