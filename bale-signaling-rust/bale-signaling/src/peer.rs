//! `BalePeer`: Bale-specific impl of [`lk_signaling::PeerRef`].
//!
//! Internally a Bale peer is identified by `(uid: i32, access_hash:
//! i64)`. `uid` is the numeric user id; `access_hash` is the
//! per-relationship token Bale's API requires for many user-touching
//! RPCs (LoadUsers, RemoveContact, AddContact, …). Only `uid` is
//! used for identity — `access_hash` rotates over time and isn't a
//! good identity key.
//!
//! The [`lk_signaling::PeerId`] ptr-eq identity invariant means
//! `BaleSignaling` must hand out the *same* `PeerId` for the same
//! `uid` across its lifetime. That cache lives in `signaling.rs`;
//! this module just defines the underlying type and its `id_str`
//! contract.

use lk_signaling::{PeerId, PeerRef};
use parking_lot::Mutex;

/// What `lk_signaling::PeerId` wraps for Bale peers.
pub struct BalePeer {
    pub uid: i32,
    /// `access_hash` may be refreshed by the impl (e.g. when
    /// `GetContacts` returns a new value for the same uid). The
    /// PeerId Arc identity stays stable.
    pub access_hash: Mutex<i64>,
    /// Cached display name. `None` until `fetch_display_name` (or
    /// a contact-list load) populates it. Mutable for the same
    /// reason `access_hash` is.
    pub display_name: Mutex<Option<String>>,
    /// String form of `uid`. Cached so `id_str` doesn't allocate
    /// on every call (it returns `&str`).
    id_str_cache: String,
}

impl BalePeer {
    pub fn new(uid: i32, access_hash: i64, display_name: Option<String>) -> Self {
        Self {
            uid,
            access_hash:  Mutex::new(access_hash),
            display_name: Mutex::new(display_name),
            id_str_cache: uid.to_string(),
        }
    }
}

impl PeerRef for BalePeer {
    fn id_str(&self) -> &str { &self.id_str_cache }
}

/// Construct a `PeerId` wrapping a `BalePeer`. The signaling
/// impl's peer cache is what enforces the ptr-eq invariant —
/// callers outside the cache should always go through
/// `BaleSignaling::intern_peer` rather than building one here
/// directly.
pub fn make_peer_id(uid: i32, access_hash: i64, display_name: Option<String>) -> PeerId {
    PeerId::new(BalePeer::new(uid, access_hash, display_name))
}

/// Downcast helper. Goes through `Arc<dyn PeerRef>` → `BalePeer`
/// for internal use inside `BaleSignaling`. Returns `None` if the
/// `PeerId` was minted by some other impl (shouldn't happen in
/// practice — included for defensive paths). Caller pattern:
///
/// ```ignore
/// if let Some(p) = downcast(&peer_id) {
///     let uid = p.uid;
///     let hash = *p.access_hash.lock();
///     …
/// }
/// ```
///
/// (Not exposed yet — wire this up alongside `BaleSignaling` so
/// downcast use stays scoped to the impl crate.)
pub(crate) fn _downcast_unused() {
    // Placeholder. The actual downcast needs access to the inner
    // Arc, which lk_signaling::PeerId deliberately doesn't expose.
    // The signaling impl threads `Arc<BalePeer>` through its own
    // cache and looks up by uid; PeerId is treated as the
    // identity token, not a downcast handle.
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn id_str_matches_uid() {
        let p = BalePeer::new(1234567890, 0, None);
        assert_eq!(p.id_str(), "1234567890");
    }

    #[test]
    fn access_hash_is_mutable_under_lock() {
        let p = BalePeer::new(1, 100, None);
        assert_eq!(*p.access_hash.lock(), 100);
        *p.access_hash.lock() = 200;
        assert_eq!(*p.access_hash.lock(), 200);
    }

    #[test]
    fn make_peer_id_round_trips_through_id_str() {
        let id = make_peer_id(42, 0, Some("Joe".into()));
        assert_eq!(id.id_str(), "42");
        assert_eq!(format!("{id}"), "42");
    }
}
