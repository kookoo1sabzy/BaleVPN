//! `BaleSignaling` — the [`lk_signaling::Signaling`] impl for
//! Bale. Wraps [`crate::ws::WsClient`] (signal channel) and uses
//! [`crate::auth::BaleAuth`] for sign-in via the `BaleAuth`
//! surface exposed alongside (not through) the trait.

use crate::contacts::{self, UserEntity};
use crate::grpc_web;
use crate::peer::BalePeer;
use crate::ws::{CallEntity, WsClient};

use async_trait::async_trait;
use lk_signaling::{
    Callback, CallDecision, ContactPage, EndReason, IncomingHandler, Notify,
    PeerId, PlaceCallError, Signaling, SignalingError, TokenStore, TransportSession,
};
use parking_lot::Mutex;
use std::collections::{HashMap, HashSet};
use std::sync::Arc;

// Internal `Arc<dyn …>` aliases. The trait surface accepts
// `Box<…>` (matching the lk_signaling type aliases); we convert
// to `Arc` on receipt so the WS listener callbacks can cheaply
// clone the handler / callback into a spawned task.
type ArcIncoming = Arc<dyn IncomingHandler>;
type ArcCb<T>    = Arc<dyn Fn(T) + Send + Sync + 'static>;
type ArcNotify   = Arc<dyn Fn() + Send + Sync + 'static>;

pub struct BaleSignaling {
    ws:           Arc<WsClient>,
    token_store:  Arc<dyn TokenStore>,

    /// Shared HTTP client for gRPC-web calls (contacts only — WS
    /// has its own connection). Cheap to clone; reqwest pools
    /// connections internally.
    http:         reqwest::Client,

    /// Cached unfiltered contact list. Populated on the first
    /// `list_contacts(query=None)` call and invalidated when
    /// `on_contacts_changed` fires (TODO once WS surfaces
    /// contact-update pushes). Hand-rolled pagination cursors
    /// index into this Vec.
    contact_cache: Mutex<Option<Vec<UserEntity>>>,

    /// Peer cache enforcing the [`PeerId`] ptr-eq identity
    /// invariant.
    peer_cache:   Mutex<HashMap<i32, PeerId>>,

    // ── Trait callback slots (stored as Arcs internally) ──────
    on_auth_expired:      Mutex<Option<ArcNotify>>,
    on_protocol_obsolete: Mutex<Option<ArcNotify>>,
    on_call_ended:        Mutex<Option<ArcCb<(PeerId, EndReason)>>>,
    on_session_ready:     Mutex<Option<ArcCb<(PeerId, TransportSession)>>>,
    on_contacts_changed:  Mutex<Option<ArcNotify>>,
    incoming_handler:     Mutex<Option<ArcIncoming>>,

    /// `call_id → PeerId` for every call this instance is
    /// tracking, regardless of direction. Populated by
    /// `place_call` (outgoing) and the IncomingHandler::Accept
    /// path (incoming); drained when the WS-level callEnded
    /// event arrives and fires [`on_call_ended`].
    active_peers:         Mutex<HashMap<i64, PeerId>>,

    /// `call_id`s currently being processed in
    /// [`Self::on_incoming_call`]. Bale's WS push pipeline can
    /// re-deliver the same `callReceived` (subscribe-stream
    /// rotation, server retransmits) — without dedup we'd run
    /// `decide()` + `accept_call()` twice for one call and end
    /// up with two LkTunnels dialing different LK SFUs. Entries
    /// are removed when the per-call task returns (any path —
    /// accept / reject / silent ignore / failure).
    in_flight_calls:      Mutex<HashSet<i64>>,
}

/// RAII guard that removes a call_id from `in_flight_calls` on
/// drop. Used inside [`BaleSignaling::on_incoming_call`] so any
/// return path (success, reject, silent-ignore, error early-return)
/// releases the dedup entry without scattered manual removals.
struct InFlightGuard {
    me:      Arc<BaleSignaling>,
    call_id: i64,
}
impl Drop for InFlightGuard {
    fn drop(&mut self) {
        self.me.in_flight_calls.lock().remove(&self.call_id);
    }
}

impl BaleSignaling {
    pub fn new(token_store: Arc<dyn TokenStore>) -> Arc<Self> {
        let me = Arc::new(Self {
            ws:                   WsClient::new(),
            token_store,
            http:                 grpc_web::build_client(),
            contact_cache:        Mutex::new(None),
            peer_cache:           Mutex::new(HashMap::new()),
            on_auth_expired:      Mutex::new(None),
            on_protocol_obsolete: Mutex::new(None),
            on_call_ended:        Mutex::new(None),
            on_session_ready:     Mutex::new(None),
            on_contacts_changed:  Mutex::new(None),
            incoming_handler:     Mutex::new(None),
            active_peers:         Mutex::new(HashMap::new()),
            in_flight_calls:      Mutex::new(HashSet::new()),
        });
        me.setup_ws_listeners();
        me.setup_auth_callbacks();
        #[cfg(feature = "lktunnel")]
        me.setup_lktunnel_observer();
        me
    }

    /// Load any persisted token from the [`TokenStore`] and push
    /// it into the WS rule engine. Idempotent. Caller-driven so
    /// platforms whose `TokenStore` impl isn't safe to invoke
    /// during construction (Android JNI: `nativeCreate` runs on
    /// a thread state where calling back into Java crashes) can
    /// defer it. The Rust binary calls it from `daemon::run`;
    /// Android relies on its existing explicit `connect()` path
    /// to load the token on demand.
    pub fn auto_load_token(self: &Arc<Self>) {
        if let Some(bytes) = self.token_store.load() {
            if let Ok(s) = String::from_utf8(bytes) {
                self.ws.set_token(Some(s));
            }
        }
    }

    /// Install a process-wide observer on the LK transport so any
    /// [`lktunnel::LkTunnel`] anywhere in the process flips the WS
    /// rule engine's `call_active` flag on Connected /
    /// Disconnected. Net effect: WS auto-pauses for the duration
    /// of any call.
    ///
    /// Disabled on Android (the `lktunnel` feature is off there)
    /// because libwebrtc can't safely be linked into more than one
    /// .so in the same process — Android's Kotlin shim calls
    /// `set_call_active` explicitly instead.
    #[cfg(feature = "lktunnel")]
    fn setup_lktunnel_observer(self: &Arc<Self>) {
        let weak = Arc::downgrade(self);
        lktunnel::set_global_observer(Some(std::sync::Arc::new(
            move |ev: lktunnel::Event| {
                let Some(me) = weak.upgrade() else { return };
                match ev.kind {
                    lktunnel::EventKind::Connected    => me.ws.set_call_active(true),
                    lktunnel::EventKind::Disconnected => me.ws.set_call_active(false),
                    _ => {}
                }
            },
        )));
    }

    /// API-level connect intent. True iff there's a token AND
    /// the user hasn't explicitly disconnected. Different from
    /// [`Signaling::is_connected`] (wire-level handshake-done):
    /// stays true through the run loop's reconnect-backoff
    /// window, so UIs can render "Connecting…" between
    /// Disconnected and Connected.
    ///
    /// Derived — no separate flag. The truth table:
    ///   - init:         token=None      → false
    ///   - connect():    token=Some, ud=false → true
    ///   - disconnect(): ud=true         → false
    ///   - sign_out():   token=None      → false
    pub fn is_connect_requested(&self) -> bool {
        self.ws.has_token() && !self.ws.is_user_disconnected()
    }

    // ── Rule-engine input pushers (not in the lk_signaling
    //    trait — Bale-specific surface for apps that want to feed
    //    foreground / call_active / mode into the WS lifecycle
    //    policy. The lib owns the rule; the app just pushes
    //    state.). ────────────────────────────────────────────────

    /// App in foreground? Client-mode only — Server-mode ignores.
    pub fn set_foreground(&self, fg: bool) { self.ws.set_foreground(fg); }

    /// LK call active? Library uses this to pause the WS during a
    /// call in client mode. Wired automatically by
    /// [`Self::place_call_with_tunnel`] / accepted incoming
    /// sessions — apps don't normally call this directly.
    pub fn set_call_active(&self, active: bool) { self.ws.set_call_active(active); }

    /// Server foreground service running. Push `true` from the
    /// server-mode foreground service's `onStartCommand`, `false`
    /// from `stopServer`. The rule engine uses this to apply
    /// server semantics (WS always on) vs client semantics (WS
    /// gates on foreground + !call_active).
    pub fn set_server_active(&self, active: bool) { self.ws.set_server_active(active); }

    /// True while the WS run loop is actively trying to
    /// connect / reconnect. UI's "Connecting…" indicator —
    /// distinct from [`Self::is_connect_requested`] (user
    /// intent) which can stay true while the rule engine
    /// intentionally hasn't spawned the loop.
    pub fn ws_is_attempting_connect(&self) -> bool { self.ws.is_attempting_connect() }

    /// Outgoing-call entry point. Combines the trait's
    /// [`Signaling::place_call`] with internal LkTunnel
    /// construction. Disabled when the `lktunnel` feature is off
    /// (Android JNI build) — apps build LkTunnel themselves and
    /// call `set_call_active` directly.
    #[cfg(feature = "lktunnel")]
    pub async fn place_call_with_tunnel<F>(
        self: &Arc<Self>,
        peer: PeerId,
        extra_on_event: F,
    ) -> Result<Arc<lktunnel::LkTunnel>, PlaceCallError>
    where
        F: Fn(lktunnel::Event) + Send + Sync + 'static,
    {
        let session = <Self as Signaling>::place_call(self.as_ref(), peer).await?;
        Ok(self.wrap_lk_session(session, false, extra_on_event))
    }

    /// Server-side analogue — wraps an accepted incoming session.
    #[cfg(feature = "lktunnel")]
    pub fn wrap_incoming_session<F>(
        self: &Arc<Self>,
        session: TransportSession,
        extra_on_event: F,
    ) -> Arc<lktunnel::LkTunnel>
    where
        F: Fn(lktunnel::Event) + Send + Sync + 'static,
    {
        self.wrap_lk_session(session, true, extra_on_event)
    }

    #[cfg(feature = "lktunnel")]
    fn wrap_lk_session<F>(
        self: &Arc<Self>,
        session: TransportSession,
        server_role: bool,
        extra_on_event: F,
    ) -> Arc<lktunnel::LkTunnel>
    where
        F: Fn(lktunnel::Event) + Send + Sync + 'static,
    {
        let _ = &session.peer_id;    // PeerId tracked via active_peers
        let weak = Arc::downgrade(self);
        let on_event = move |ev: lktunnel::Event| {
            if let Some(me) = weak.upgrade() {
                match ev.kind {
                    lktunnel::EventKind::Connected    => me.ws.set_call_active(true),
                    lktunnel::EventKind::Disconnected => me.ws.set_call_active(false),
                    _ => {}
                }
            }
            extra_on_event(ev);
        };
        let tunnel = if server_role {
            lktunnel::LkTunnel::connect_server(session.url, session.token, on_event)
        } else {
            lktunnel::LkTunnel::connect(session.url, session.token, on_event)
        };
        Arc::new(tunnel)
    }

    /// Cache-hit-or-mint. The only sanctioned way to obtain a
    /// `PeerId` inside this impl — direct `PeerId::new(BalePeer
    /// { … })` elsewhere would violate the ptr-eq identity
    /// invariant.
    pub fn intern_peer(&self, uid: i32, access_hash: i64, display_name: Option<String>) -> PeerId {
        // Mirror the name into the WS name cache so a subsequent
        // `peer_display_name(uid)` returns it. Without this, self
        // (interned via `whoami` → `intern_peer(uid, 0, name)`)
        // would render as `(no name)` in the UI because
        // `peer_display_name` only checks `ws.cached_name`, not
        // the PeerId's internal display_name field.
        if let Some(name) = display_name.as_ref().filter(|n| !n.is_empty()) {
            self.ws.populate_names(std::iter::once((uid, Some(name.clone()))));
        }
        let mut cache = self.peer_cache.lock();
        if let Some(existing) = cache.get(&uid) {
            return existing.clone();
        }
        let id = PeerId::new(BalePeer::new(uid, access_hash, display_name));
        cache.insert(uid, id.clone());
        id
    }

    /// Bridge: WS auth-expired / version-mismatch → trait
    /// callbacks. Held via Weak so the closure doesn't keep the
    /// signaling alive past consumer drop.
    fn setup_auth_callbacks(self: &Arc<Self>) {
        let weak = Arc::downgrade(self);
        self.ws.set_on_token_expired(Arc::new(move || {
            let Some(me) = weak.upgrade() else { return; };
            // Clear both the persisted store and the in-memory
            // WS token. Without the latter, the WS rule engine
            // still sees `has_token()=true` and a subsequent
            // re-auth's `set_token(Some(new))` wouldn't trigger
            // an evaluate (no change in the desired_up output if
            // user_disconnect is unchanged).
            me.token_store.clear();
            me.ws.set_token(None);
            let cb = me.on_auth_expired.lock().clone();
            if let Some(cb) = cb { cb(); }
        }));
        let weak = Arc::downgrade(self);
        self.ws.set_on_version_mismatch(Arc::new(move || {
            let Some(me) = weak.upgrade() else { return; };
            let cb = me.on_protocol_obsolete.lock().clone();
            if let Some(cb) = cb { cb(); }
        }));
    }

    fn setup_ws_listeners(self: &Arc<Self>) {
        let weak = Arc::downgrade(self);
        // callReceived / callStarted → incoming handler →
        // accept / reject / silently ignore.
        self.ws.add_on_call_received(Arc::new(move |call_id, call| {
            let Some(me) = weak.upgrade() else { return; };
            tokio::spawn(async move { me.on_incoming_call(call_id, call).await });
        }));

        let weak = Arc::downgrade(self);
        // callEnded → route to the right side based on which
        // active-call map the call_id sits in.
        self.ws.add_on_call_ended(Arc::new(move |call_id, discard_reason| {
            let Some(me) = weak.upgrade() else { return; };
            me.on_call_ended_internal(call_id, discard_reason);
        }));
    }

    /// Async incoming-call handler. Implements the Bale paired-
    /// update workaround (when `caller_id == 0`, the field
    /// arrives on a later update — silently defer) and the
    /// Accept/Reject/SilentlyIgnore dispatch.
    // RAII guard for the in_flight_calls dedup set — removes the
    // call_id on drop so all return paths in on_incoming_call
    // (success, reject, silent-ignore, every error early-return)
    // cleanly release the entry. Cheaper than scattering manual
    // removes across the many return points.
    async fn on_incoming_call(self: Arc<Self>, call_id: i64, call: Option<CallEntity>) {
        let caller_id = call.as_ref().map(|c| c.caller_id).unwrap_or(0);
        // Paired-update workaround.
        if caller_id == 0 { return; }
        if caller_id > i32::MAX as i64 || caller_id < 0 {
            log::warn!("incoming call_id={call_id} has out-of-range caller_id={caller_id}");
            return;
        }

        // Dedup: Bale's WS push pipeline can re-deliver the same
        // callReceived (we saw this when the server's WS went
        // zombie + reconnected — flushed-queue + subscribe-
        // rotation both re-delivered). Two concurrent
        // on_incoming_call calls would each accept_call + fire
        // on_session_ready → two LkTunnels for one call dialing
        // different SFUs, peer joins only one, other times out.
        if !self.in_flight_calls.lock().insert(call_id) {
            log::info!("duplicate callReceived for call_id={call_id} — ignoring");
            return;
        }
        let _guard = InFlightGuard { me: self.clone(), call_id };

        let peer = self.intern_peer(caller_id as i32, 0, None);

        let handler = self.incoming_handler.lock().clone();
        let Some(handler) = handler else {
            // No handler installed yet — silently ignore. Caller
            // times out. Matches the "no server admission UI
            // configured" case.
            return;
        };

        let decision = handler.decide(peer.clone(), self.peer_display_name(&peer)).await;

        match decision {
            CallDecision::Accept => {
                let Some(accepted) = self.ws.accept_call(call_id).await else {
                    log::warn!("acceptCall returned no entity for {call_id}");
                    return;
                };
                // Bale's AcceptCall reply doesn't always re-state
                // `is_livekit`; fall back to the incoming-event
                // entity (callStarted always carries it). Matches
                // the Kotlin BaleServerService.handleCall check.
                let is_livekit = call.as_ref().map(|c| c.is_livekit).unwrap_or(false)
                                 || accepted.is_livekit;
                if !is_livekit || accepted.token.is_empty() {
                    log::warn!(
                        "acceptCall for {call_id} missing LK creds: \
                         is_livekit={} (incoming={}, accept={}) token_len={} url_len={}",
                        is_livekit,
                        call.as_ref().map(|c| c.is_livekit).unwrap_or(false),
                        accepted.is_livekit, accepted.token.len(), accepted.url.len(),
                    );
                    return;
                }
                // Track so a later callEnded fires on_call_ended.
                self.active_peers.lock().insert(call_id, peer.clone());

                let cb = self.on_session_ready.lock().clone();
                if let Some(cb) = cb {
                    cb((peer.clone(), TransportSession {
                        url:     accepted.url,
                        token:   accepted.token,
                        peer_id: peer,
                    }));
                }
            }
            CallDecision::Reject => {
                self.ws.discard_call(call_id).await;
            }
            CallDecision::SilentlyIgnore => {
                // No-op. Caller's UI eventually times out without
                // an explicit reject — matches the blacklist /
                // pending-call-timeout flow.
            }
        }
    }

    /// Sync callEnded dispatcher. Looks up the peer for this
    /// call_id in [`Self::active_peers`] and fires the
    /// (single) `on_call_ended` callback. Apps discriminate
    /// outgoing-vs-incoming on their own side from the per-peer
    /// state they built at `place_call` / `on_session_ready` time.
    fn on_call_ended_internal(&self, call_id: i64, discard_reason: i32) {
        let Some(peer) = self.active_peers.lock().remove(&call_id) else {
            log::debug!("callEnded for unknown call_id={call_id} (discard_reason={discard_reason})");
            return;
        };
        let reason = map_discard_reason(discard_reason);
        let cb = self.on_call_ended.lock().clone();
        if let Some(cb) = cb { cb((peer, reason)); }
    }
}

impl BaleSignaling {
    /// Read the persisted access token as a UTF-8 string. Used
    /// by the contact RPCs which go over gRPC-web (the WS
    /// already has its own copy).
    fn access_token_str(&self) -> Result<String, SignalingError> {
        self.token_store.load()
            .and_then(|b| String::from_utf8(b).ok())
            .ok_or(SignalingError::NotAuthenticated)
    }

    /// Fetch + cache the full unfiltered contact list. Subsequent
    /// `list_contacts(query=None)` calls slice into the cache
    /// without hitting the wire until [`Self::add_contact_by_phone`]
    /// / [`Self::remove_contact`] (or a future contacts-changed
    /// push) clears it.
    async fn load_full_contact_list(&self, token: &str) -> Result<Vec<UserEntity>, SignalingError> {
        if let Some(cached) = self.contact_cache.lock().clone() {
            return Ok(cached);
        }
        let peers_or_inline = contacts::get_contact_peers(&self.http, token).await
            .map_err(grpc_to_signaling)?;
        let users = if !peers_or_inline.peers.is_empty() {
            contacts::load_users_batch(&self.http, token, &peers_or_inline.peers).await
                .map_err(grpc_to_signaling)?
        } else {
            peers_or_inline.inline_users
        };
        // Pre-populate the WS name cache so per-row UI lookups
        // (`peer_display_name`) hit sync instead of firing an
        // RPC per row.
        self.ws.populate_names(users.iter().map(|u| {
            let dn = u.display_name();
            (u.id, if dn.is_empty() { None } else { Some(dn) })
        }));
        *self.contact_cache.lock() = Some(users.clone());
        Ok(users)
    }
}

fn grpc_to_signaling(e: crate::grpc_web::GrpcError) -> SignalingError {
    SignalingError::Transport(e.to_string())
}

/// Map Bale's `discardReason` enum to the trait's [`EndReason`].
/// We don't yet have a confirmed mapping from numeric codes to
/// the named variants, so this stays conservative: known well-
/// behaved exits map to specific variants; everything else
/// passes through as `Other(code)` so callers can interpret.
fn map_discard_reason(code: i32) -> EndReason {
    EndReason::Other(code)
}

#[async_trait]
impl Signaling for BaleSignaling {
    /// Reflects the WS handshake-completed state, not just
    /// "connect was called". Matches the trait's documented
    /// "is the control channel currently up" semantics.
    fn is_connected(&self) -> bool { self.ws.is_ready() }

    async fn connect(&self) -> Result<(), SignalingError> {
        // Push inputs into the WS rule engine; it decides whether
        // to spawn the run loop. Connect intent = clear user
        // disconnect + install token; the engine evaluates and
        // brings the WS up if all other gates allow.
        let token = self.token_store.load()
            .and_then(|b| String::from_utf8(b).ok())
            .ok_or(SignalingError::NotAuthenticated)?;
        self.ws.set_user_disconnect(false);
        self.ws.set_token(Some(token));
        Ok(())
    }

    async fn disconnect(&self) {
        // Sticky "user disconnected" — rule engine flips WS down
        // regardless of foreground / mode. Token is preserved so
        // a subsequent `connect()` doesn't need re-auth.
        self.ws.set_user_disconnect(true);
    }

    async fn sign_out(&self) {
        // Token cleared → rule engine sees no auth → WS goes down.
        self.ws.set_token(None);
        self.token_store.clear();
    }

    fn is_authenticated(&self) -> bool { self.token_store.load().is_some() }

    fn on_auth_expired      (&self, cb: Notify) { *self.on_auth_expired.lock()      = Some(cb.into()); }
    fn on_protocol_obsolete (&self, cb: Notify) { *self.on_protocol_obsolete.lock() = Some(cb.into()); }

    async fn whoami(&self) -> Option<PeerId> {
        let info = self.ws.cached_self()?;
        Some(self.intern_peer(info.uid, 0, info.name))
    }

    async fn place_call(&self, peer: PeerId) -> Result<TransportSession, PlaceCallError> {
        let uid = peer.id_str().parse::<i32>().map_err(|_| PlaceCallError::NoPeer)?;
        let peer_type = 1i32;   // PEERTYPE_PRIVATE

        let call = self.ws.start_call(uid, peer_type).await
            .ok_or_else(|| PlaceCallError::Transport("startCall returned no entity".into()))?;
        if !call.is_livekit || call.token.is_empty() {
            return Err(PlaceCallError::Transport(
                "startCall reply had no LiveKit credentials".into()));
        }

        // Track for on_call_ended bookkeeping. The PeerId we
        // hand out via TransportSession is the SAME Arc the
        // caller passed in, satisfying the ptr-eq invariant.
        self.active_peers.lock().insert(call.call_id, peer.clone());

        Ok(TransportSession {
            url:     call.url,
            token:   call.token,
            peer_id: peer,
        })
    }
    fn on_call_ended(&self, cb: Callback<(PeerId, EndReason)>) {
        *self.on_call_ended.lock() = Some(cb.into());
    }

    fn set_incoming_handler(&self, h: Box<dyn IncomingHandler>) {
        *self.incoming_handler.lock() = Some(Arc::from(h));
        // No mode flip here — server semantics are now driven by
        // an explicit `set_server_active(true)` from the server
        // service. Decoupling handler installation from server
        // mode means a stale handler doesn't keep the rule engine
        // in server mode after the service goes away.
    }
    fn on_session_ready(&self, cb: Callback<(PeerId, TransportSession)>) {
        *self.on_session_ready.lock() = Some(cb.into());
    }

    async fn list_contacts(
        &self,
        query:  Option<&str>,
        cursor: Option<&str>,
        limit:  usize,
    ) -> Result<ContactPage, SignalingError> {
        let token = self.access_token_str()?;

        // Searches always hit the wire. The unfiltered list goes
        // through the cache so subsequent page-flips don't re-
        // fetch.
        let users = if let Some(q) = query.filter(|q| !q.is_empty()) {
            contacts::search_contacts_by_name(&self.http, &token, q).await
                .map_err(grpc_to_signaling)?
        } else {
            self.load_full_contact_list(&token).await?
        };

        // Cursor is an opaque string — we encode the next offset
        // as a decimal number. `None` cursor starts at 0.
        let start = cursor.and_then(|s| s.parse::<usize>().ok()).unwrap_or(0);
        let end   = start.saturating_add(limit).min(users.len());
        let slice = &users[start.min(users.len())..end];

        let peers: Vec<PeerId> = slice.iter()
            .map(|u| self.intern_peer(u.id, u.access_hash, Some(u.display_name())))
            .collect();
        let next = if end < users.len() { Some(end.to_string()) } else { None };
        Ok(ContactPage { peers, next_cursor: next })
    }
    fn on_contacts_changed(&self, cb: Notify) {
        *self.on_contacts_changed.lock() = Some(cb.into());
    }
    async fn search_contact_by_phone(&self, phone: &str) -> Result<Vec<PeerId>, SignalingError> {
        let token = self.access_token_str()?;
        let users = contacts::import_contact_by_phone(&self.http, &token, phone).await
            .map_err(grpc_to_signaling)?;
        // Bale's `ImportContacts` adds matches as a side effect
        // of looking them up — there's no non-mutating phone
        // lookup RPC. Invalidate the cached list so the next
        // list_contacts picks up the new entry.
        *self.contact_cache.lock() = None;
        Ok(users.into_iter()
            .map(|u| self.intern_peer(u.id, u.access_hash, Some(u.display_name())))
            .collect())
    }

    async fn add_to_contacts(&self, _peer: &PeerId) -> Result<(), SignalingError> {
        // Bale's `ImportContacts` already added the peer during
        // [`Self::search_contact_by_phone`] — no further server
        // call is needed. Documented as part of the trait
        // contract; impls without the conflated lookup+add
        // would do the actual work here.
        Ok(())
    }
    async fn remove_contact(&self, p: &PeerId) -> Result<(), SignalingError> {
        let token = self.access_token_str()?;
        let uid   = p.id_str().parse::<i32>()
            .map_err(|_| SignalingError::Transport("peer id is not a Bale uid".into()))?;
        // Look up access_hash from our cache — RemoveContact
        // rejects stale hashes, so a fresh value is essential.
        let access_hash = self.contact_cache.lock().as_ref()
            .and_then(|users| users.iter().find(|u| u.id == uid).map(|u| u.access_hash))
            .unwrap_or(0);
        contacts::remove_contact(&self.http, &token, uid, access_hash).await
            .map_err(grpc_to_signaling)?;
        *self.contact_cache.lock() = None;
        Ok(())
    }

    fn peer_display_name(&self, p: &PeerId) -> Option<String> {
        let uid = p.id_str().parse::<i32>().ok()?;
        self.ws.cached_name(uid)
    }

    async fn fetch_display_name(&self, p: &PeerId) -> Option<String> {
        if let Some(n) = self.peer_display_name(p) { return Some(n); }
        let uid = p.id_str().parse::<i32>().ok()?;
        self.ws.load_user_name(uid).await
    }

    async fn resolve_peer(&self, s: &str) -> Option<PeerId> {
        let uid = s.parse::<i32>().ok()?;
        Some(self.intern_peer(uid, 0, None))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use lk_signaling::IncomingHandler;

    struct MemStore { inner: Mutex<Option<Vec<u8>>> }
    impl TokenStore for MemStore {
        fn load (&self) -> Option<Vec<u8>> { self.inner.lock().clone() }
        fn save (&self, b: &[u8])           { *self.inner.lock() = Some(b.to_vec()); }
        fn clear(&self)                     { *self.inner.lock() = None; }
    }
    fn store_empty() -> Arc<dyn TokenStore> { Arc::new(MemStore { inner: Mutex::new(None) }) }
    fn store_with(token: &str) -> Arc<dyn TokenStore> {
        Arc::new(MemStore { inner: Mutex::new(Some(token.as_bytes().to_vec())) })
    }

    #[tokio::test]
    async fn resolve_peer_round_trips_and_is_idempotent() {
        let s = BaleSignaling::new(store_empty());
        let a = s.resolve_peer("42").await.unwrap();
        let b = s.resolve_peer("42").await.unwrap();
        assert_eq!(a, b);
        assert_eq!(a.id_str(), "42");
    }

    #[tokio::test]
    async fn resolve_peer_distinct_uids_distinct_handles() {
        let s = BaleSignaling::new(store_empty());
        let a = s.resolve_peer("1").await.unwrap();
        let b = s.resolve_peer("2").await.unwrap();
        assert_ne!(a, b);
    }

    #[tokio::test]
    async fn resolve_peer_garbage_returns_none() {
        let s = BaleSignaling::new(store_empty());
        assert!(s.resolve_peer("not-a-number").await.is_none());
    }

    #[tokio::test]
    async fn is_authenticated_reflects_token_store() {
        assert!(!BaleSignaling::new(store_empty()).is_authenticated());
        assert!( BaleSignaling::new(store_with("tok")).is_authenticated());
    }

    #[tokio::test]
    async fn sign_out_clears_token() {
        let store = store_with("tok");
        let s = BaleSignaling::new(store.clone());
        assert!(s.is_authenticated());
        s.sign_out().await;
        assert!(!s.is_authenticated());
        assert!(store.load().is_none());
    }

    #[tokio::test]
    async fn connect_without_token_errors() {
        let s = BaleSignaling::new(store_empty());
        assert!(matches!(s.connect().await, Err(SignalingError::NotAuthenticated)));
    }

    // ── on_call_ended routing ─────────────────────────────────

    #[tokio::test]
    async fn on_call_ended_fires_for_any_tracked_peer_with_discard_reason() {
        let s = BaleSignaling::new(store_empty());

        let captured = Arc::new(Mutex::new(None::<(PeerId, EndReason)>));
        let cap = captured.clone();
        s.on_call_ended(Box::new(move |(peer, reason)| {
            *cap.lock() = Some((peer, reason));
        }));

        // Pre-record an active call (we'd normally do this via
        // place_call or the IncomingHandler::Accept path, but the
        // RPC layer needs a real WS — we're testing the
        // dispatcher in isolation).
        let peer = s.resolve_peer("777").await.unwrap();
        s.active_peers.lock().insert(123, peer.clone());

        s.on_call_ended_internal(123, 5);

        let got = captured.lock().take().expect("on_call_ended should have fired");
        assert_eq!(got.0, peer);
        assert!(matches!(got.1, EndReason::Other(5)));
        assert!(s.active_peers.lock().is_empty());
    }

    #[tokio::test]
    async fn call_ended_unknown_id_drops_silently() {
        let s = BaleSignaling::new(store_empty());
        // No callbacks installed. Should not panic.
        s.on_call_ended_internal(424242, 0);
    }

    // ── Incoming-call dispatch ────────────────────────────────

    struct AlwaysAccept;
    #[async_trait]
    impl IncomingHandler for AlwaysAccept {
        async fn decide(&self, _peer: PeerId, _name: Option<String>) -> CallDecision { CallDecision::Accept }
    }

    struct AlwaysReject;
    #[async_trait]
    impl IncomingHandler for AlwaysReject {
        async fn decide(&self, _peer: PeerId, _name: Option<String>) -> CallDecision { CallDecision::Reject }
    }

    struct AlwaysIgnore;
    #[async_trait]
    impl IncomingHandler for AlwaysIgnore {
        async fn decide(&self, _peer: PeerId, _name: Option<String>) -> CallDecision { CallDecision::SilentlyIgnore }
    }

    #[tokio::test]
    async fn incoming_call_with_caller_id_zero_is_deferred() {
        // Paired-update workaround: an incoming with caller_id=0
        // shouldn't trigger the handler at all. We verify by
        // installing a handler that panics if called.
        struct PanicHandler;
        #[async_trait]
        impl IncomingHandler for PanicHandler {
            async fn decide(&self, _peer: PeerId, _name: Option<String>) -> CallDecision {
                panic!("decide should not be called for caller_id=0");
            }
        }
        let s = BaleSignaling::new(store_empty());
        s.set_incoming_handler(Box::new(PanicHandler));

        // call.caller_id = 0 (or call=None) → defer.
        s.clone().on_incoming_call(123, None).await;
        s.clone().on_incoming_call(123, Some(CallEntity {
            call_id:   123,
            caller_id: 0,
            ..Default::default()
        })).await;
    }

    #[tokio::test]
    async fn incoming_call_silently_ignored_when_no_handler() {
        // No handler installed → silently ignore. No panic.
        let s = BaleSignaling::new(store_empty());
        s.clone().on_incoming_call(7, Some(CallEntity {
            call_id:   7,
            caller_id: 42,
            ..Default::default()
        })).await;
        // Also: caller wasn't added to accepted, no session fired.
        assert!(s.active_peers.lock().is_empty());
    }

    #[tokio::test]
    async fn incoming_call_silently_ignored_when_handler_says_silent() {
        let s = BaleSignaling::new(store_empty());
        s.set_incoming_handler(Box::new(AlwaysIgnore));

        s.clone().on_incoming_call(7, Some(CallEntity {
            call_id:   7,
            caller_id: 42,
            ..Default::default()
        })).await;
        assert!(s.active_peers.lock().is_empty());
    }
}
