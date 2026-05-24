//! lk-signaling — generic signaling abstraction.
//!
//! Defines the [`Signaling`] trait that any provider (Bale today,
//! others later) implements. Producing a [`TransportSession`] — a
//! LiveKit url + token + opaque peer id — is the entire job;
//! consumers feed the session into `lktunnel`'s `LkTunnel::connect`.
//!
//! Apps never see WS frames, RPC messages, or provider-specific
//! field names. Peer identity is opaque: a [`PeerId`] is an
//! `Arc<dyn PeerRef>` whose only inspectable surface is
//! [`PeerRef::id_str`], the stable string form used for config
//! round-trips via [`Signaling::resolve_peer`].

use std::fmt;
use std::hash::{Hash, Hasher};
use std::sync::Arc;

// ─── Peer identity ──────────────────────────────────────────────────────

/// Opaque per-impl marker. Impls put whatever they need behind this
/// trait — for Bale, a numeric uid plus an accessHash; for another
/// provider, a UUID or public key. The trait surface gives apps no
/// way to read the contents, so peer identity is fully opaque to
/// consumers.
pub trait PeerRef: Send + Sync + 'static {
    /// Stable string form. Must round-trip through
    /// [`Signaling::resolve_peer`]. Apps use it to persist a peer
    /// in config files, CLI args, allow-lists, log lines.
    fn id_str(&self) -> &str;
}

/// Cheap-to-clone peer handle. Equality is by `Arc::ptr_eq` — the
/// impl must hand out the *same* `PeerId` for the same underlying
/// peer across its lifetime (i.e. cache by whatever internal id the
/// impl uses). If that invariant slips, per-peer app state (admission
/// counters, UI rows) silently splits across two handles for the
/// same peer.
#[derive(Clone)]
pub struct PeerId(Arc<dyn PeerRef>);

impl PeerId {
    pub fn new<R: PeerRef>(r: R) -> Self {
        Self(Arc::new(r))
    }

    /// Stable string form. Same as `Display`; provided as an
    /// inherent method for ergonomics in code that doesn't want to
    /// pull `fmt::Write` into scope.
    pub fn id_str(&self) -> &str {
        self.0.id_str()
    }
}

impl fmt::Display for PeerId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(self.0.id_str())
    }
}

impl fmt::Debug for PeerId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "PeerId({})", self.0.id_str())
    }
}

impl PartialEq for PeerId {
    fn eq(&self, other: &Self) -> bool {
        Arc::ptr_eq(&self.0, &other.0)
    }
}
impl Eq for PeerId {}

impl Hash for PeerId {
    fn hash<H: Hasher>(&self, state: &mut H) {
        (Arc::as_ptr(&self.0) as *const () as usize).hash(state)
    }
}

// ─── Sessions, decisions, events ────────────────────────────────────────

/// What apps feed into `LkTunnel::connect(url, token)`. The only
/// data that ever crosses the signaling/transport boundary into
/// apps.
#[derive(Clone)]
pub struct TransportSession {
    pub url:     String,
    pub token:   String,
    pub peer_id: PeerId,
}

/// What the app's [`IncomingHandler`] returns for each incoming
/// call.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CallDecision {
    /// Send the impl's accept message; signaling then fires
    /// [`Signaling::on_session_ready`] with the resulting
    /// [`TransportSession`].
    Accept,
    /// Send the impl's reject message; caller sees an explicit
    /// rejection.
    Reject,
    /// No response at all; caller times out. Used for blacklisted
    /// peers and for pending-call decision timeouts.
    SilentlyIgnore,
}

/// Why [`Signaling::place_call`] failed.
#[derive(Debug, Clone)]
pub enum PlaceCallError {
    /// Peer explicitly rejected the call.
    Rejected,
    /// Peer never joined the LK room within the impl's wait window.
    NoPeer,
    NotAuthenticated,
    Transport(String),
}

impl fmt::Display for PlaceCallError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Rejected         => f.write_str("rejected by peer"),
            Self::NoPeer           => f.write_str("peer did not join"),
            Self::NotAuthenticated => f.write_str("not authenticated"),
            Self::Transport(s)     => write!(f, "transport: {s}"),
        }
    }
}
impl std::error::Error for PlaceCallError {}

/// Why a session ended. Reported by [`Signaling::on_call_ended`]
/// after `place_call` already returned, and applied to server-side
/// sessions tracked via [`Signaling::on_session_ended`] when the
/// reason is known.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EndReason {
    Rejected,
    CallerHangup,
    Timeout,
    NetworkDrop,
    Other(i32),
}

/// One page of contacts plus a continuation cursor.
#[derive(Default, Clone)]
pub struct ContactPage {
    pub peers:       Vec<PeerId>,
    /// `None` indicates no more pages. Opaque to the app — the impl
    /// can encode whatever it likes (server-side token, last-id,
    /// `(query_hash, offset)`, …).
    pub next_cursor: Option<String>,
}

// ─── Pluggable storage ──────────────────────────────────────────────────

/// Token persistence. Apps supply a platform-specific impl
/// (SharedPreferences / file with 0600 perms / OS keychain / …);
/// signaling reads on startup and writes on auth success or
/// refresh.
pub trait TokenStore: Send + Sync + 'static {
    fn load (&self) -> Option<Vec<u8>>;
    fn save (&self, bytes: &[u8]);
    fn clear(&self);
}

// ─── Handlers + the trait ───────────────────────────────────────────────

/// Decide what to do with each incoming call. Async — the app can
/// race against its own UI / admission policy / pending-call timer.
/// Returning [`CallDecision::SilentlyIgnore`] is how blacklists and
/// pending-call timeouts are expressed.
///
/// `display_name` is the impl's best-effort resolution at call
/// time. If the impl hasn't seen this peer yet, it's `None` —
/// the handler can call [`Signaling::fetch_display_name`] for
/// a guaranteed lookup.
#[async_trait::async_trait]
pub trait IncomingHandler: Send + Sync + 'static {
    async fn decide(&self, peer: PeerId, display_name: Option<String>) -> CallDecision;
}

/// Generic signaling errors. Most errors that matter to apps get
/// their own typed return ([`PlaceCallError`], [`EndReason`]); this
/// is the catch-all for the rest.
#[derive(Debug, Clone)]
pub enum SignalingError {
    NotAuthenticated,
    NotConnected,
    NotSupported,
    Transport(String),
}

impl fmt::Display for SignalingError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::NotAuthenticated => f.write_str("not authenticated"),
            Self::NotConnected     => f.write_str("not connected"),
            Self::NotSupported     => f.write_str("not supported by this signaling impl"),
            Self::Transport(s)     => write!(f, "transport: {s}"),
        }
    }
}
impl std::error::Error for SignalingError {}

/// Boxed callback type. All `on_*` events on [`Signaling`] take
/// owned `Box<dyn Fn>` so impls can stash them in fields without
/// extra wrapping.
pub type Callback<T> = Box<dyn Fn(T) + Send + Sync + 'static>;

/// Argument-less variant of [`Callback`].
pub type Notify = Box<dyn Fn() + Send + Sync + 'static>;

#[async_trait::async_trait]
pub trait Signaling: Send + Sync {
    // ── Connection lifecycle ───────────────────────────────────────

    /// Whether the impl's control channel is currently up.
    fn is_connected(&self) -> bool;

    /// Bring the control channel up. Idempotent.
    async fn connect(&self) -> Result<(), SignalingError>;

    /// Tear the control channel down. Auth state is preserved; a
    /// subsequent [`Self::connect`] reuses the stored token.
    async fn disconnect(&self);

    /// Clear stored credentials and tear down. Next [`Self::connect`]
    /// will require fresh auth via the impl-specific auth helper.
    async fn sign_out(&self);

    // ── Auth state ─────────────────────────────────────────────────

    fn is_authenticated(&self) -> bool;

    /// Token was rejected by the server (or never valid). App
    /// should clear its [`TokenStore`] and prompt re-auth.
    fn on_auth_expired(&self, cb: Notify);

    /// Server protocol/version is incompatible with this build.
    /// Retry won't help — the app needs to be updated. Distinct
    /// from [`Self::on_auth_expired`] because the resolution is
    /// different (update vs re-login).
    fn on_protocol_obsolete(&self, cb: Notify);

    /// Who we're signed in as. `None` if not authenticated.
    async fn whoami(&self) -> Option<PeerId>;

    // ── Client side ────────────────────────────────────────────────

    /// Place a call to `peer`. Returns once the LK room is up and
    /// ready to join; the peer's accept/reject decision may still
    /// race and arrive *after* this returns — that case is
    /// surfaced via [`Self::on_call_ended`] with
    /// [`EndReason::Rejected`].
    async fn place_call(&self, peer: PeerId) -> Result<TransportSession, PlaceCallError>;

    /// Fires when any call this signaling instance was tracking
    /// ends — regardless of direction. The app discriminates
    /// outgoing-vs-incoming by checking its own per-peer state
    /// (the same state it built when it called `place_call`
    /// and / or `on_session_ready` fired).
    fn on_call_ended(&self, cb: Callback<(PeerId, EndReason)>);

    // ── Server side ────────────────────────────────────────────────

    /// Install the handler that decides what to do with each
    /// incoming call. Replaces any previous handler.
    fn set_incoming_handler(&self, h: Box<dyn IncomingHandler>);

    /// Fires after an accepted incoming call has produced a usable
    /// [`TransportSession`]. App constructs the `LkTunnel` from it
    /// and starts server-side NAT. Session teardown comes through
    /// [`Self::on_call_ended`].
    fn on_session_ready(&self, cb: Callback<(PeerId, TransportSession)>);

    // ── Contacts ───────────────────────────────────────────────────
    //
    // Impls without a contact concept return empty pages and a
    // `NotSupported` error from the mutators.

    /// Fetch one page of contacts. `query` filters server-side if
    /// the impl supports it; `cursor` continues from a previous
    /// page (pass `None` to start). `limit` is a hint, not a
    /// guarantee — the impl may return fewer.
    async fn list_contacts(
        &self,
        query:  Option<&str>,
        cursor: Option<&str>,
        limit:  usize,
    ) -> Result<ContactPage, SignalingError>;

    /// Fires when the impl's backing contact list changes (server
    /// push, blocked-user removal, etc.). UI should re-fetch the
    /// visible pages.
    fn on_contacts_changed(&self, cb: Notify);

    /// Look up peer(s) globally by phone number. Returns 0 or 1
    /// matches (occasionally more for number-collisions across
    /// providers). The split into a separate
    /// [`Self::add_to_contacts`] step lets apps preview matches
    /// before committing — but note that some impls (Bale's
    /// `ImportContacts` is one) **add as a side effect of search**
    /// because the underlying RPC conflates the two. Consumers
    /// targeting any-impl should treat search as potentially
    /// mutating and explicitly call `add_to_contacts` to make
    /// intent clear at the call site.
    ///
    /// Impls without global phone lookup return
    /// [`SignalingError::NotSupported`].
    async fn search_contact_by_phone(&self, phone: &str)
        -> Result<Vec<PeerId>, SignalingError>;

    /// Commit a peer found via [`Self::search_contact_by_phone`]
    /// to the local contact list. On Bale this is a no-op
    /// because the search RPC already adds; on impls where add
    /// is a distinct step, this is where it happens.
    async fn add_to_contacts(&self, peer: &PeerId)
        -> Result<(), SignalingError>;

    /// Remove a peer from the contact list. Impls without
    /// contacts return [`SignalingError::NotSupported`].
    async fn remove_contact(&self, p: &PeerId) -> Result<(), SignalingError>;

    // ── Lookup / diagnostics ───────────────────────────────────────

    /// Cached, synchronous display-name lookup. Returns `None` if
    /// the impl hasn't seen this peer yet — call
    /// [`Self::fetch_display_name`] to populate the cache.
    fn peer_display_name(&self, p: &PeerId) -> Option<String>;

    /// First-time fetch over RPC. Populates the cache that
    /// [`Self::peer_display_name`] reads from.
    async fn fetch_display_name(&self, p: &PeerId) -> Option<String>;

    /// Reverse of [`PeerId::id_str`] → handle. Used to hydrate a
    /// `PeerId` from a stored string (config file, CLI arg,
    /// persisted allow-list). Returns `None` if the impl can't
    /// resolve the string to a known peer.
    async fn resolve_peer(&self, s: &str) -> Option<PeerId>;
}

#[cfg(test)]
mod tests;
