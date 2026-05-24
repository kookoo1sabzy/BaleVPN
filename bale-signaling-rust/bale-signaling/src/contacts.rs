//! Bale contact RPCs — `GetContacts`, `LoadUsers`,
//! `LoadFullUsers`, `ImportContacts`, `SearchContacts`,
//! `RemoveContact`. Ports `ContactRepository.kt`.
//!
//! These go over gRPC-web HTTPS (not the WS), same as
//! [`crate::auth::BaleAuth`]. Bale returns the contact list in
//! one shot; pagination is in-memory (the cursor encodes the
//! next offset into the cached list).

use crate::grpc_web::{self, GrpcError};
use crate::proto::{ProtoReader, ProtoWriter};

const CONTACT_HOST: &str = "next-ws.bale.ai";

/// Lightweight peer reference returned by `GetContacts` and the
/// search RPCs. Used as the input to `LoadUsers` when full
/// entities aren't bundled in the response.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct UserPeerRef {
    pub uid:         i32,
    pub access_hash: i64,
}

/// Decoded user identity. Mirrors `UserEntity` from the Kotlin
/// port. `phone` is populated by `LoadFullUsers`; the others
/// come from `LoadUsers` / inline entities.
#[derive(Debug, Default, Clone, PartialEq, Eq)]
pub struct UserEntity {
    pub id:          i32,
    pub name:        String,
    pub nick:        String,
    pub phone:       String,
    pub access_hash: i64,
}

impl UserEntity {
    pub fn display_name(&self) -> String {
        if !self.name.is_empty() { self.name.clone() }
        else if !self.nick.is_empty() { self.nick.clone() }
        else { self.id.to_string() }
    }
}

/// Result of `GetContacts` — Bale returns either inline full
/// entities OR lightweight peer refs (mutually exclusive in
/// practice). Callers handle either case.
pub struct ContactPeers {
    pub peers:         Vec<UserPeerRef>,
    pub inline_users:  Vec<UserEntity>,
}

/// One-shot fetch of the full contact list. Use [`load_users_batch`]
/// to fill in full entities for the ref-only case.
pub async fn get_contact_peers(
    http:         &reqwest::Client,
    access_token: &str,
) -> Result<ContactPeers, GrpcError> {
    let payload = ProtoWriter::new().string(1, "").build();
    let buf = grpc_web::call(
        http, CONTACT_HOST,
        "bale.users.v1.Users", "GetContacts",
        &payload, Some(access_token),
    ).await?;
    Ok(decode_get_contacts_response(&buf))
}

/// Fetch full entities for a batch of peer refs. Fans out
/// `LoadUsers` (identity) + `LoadFullUsers` (phone) in parallel
/// and merges the results. Keep batches modest (≈30) to keep
/// round-trips snappy.
pub async fn load_users_batch(
    http:         &reqwest::Client,
    access_token: &str,
    peers:        &[UserPeerRef],
) -> Result<Vec<UserEntity>, GrpcError> {
    if peers.is_empty() { return Ok(Vec::new()); }

    // Identity-only path: `LoadUsers` for name + nick +
    // access_hash. Phone numbers (`LoadFullUsers`) were dropped
    // because the trait surface doesn't expose them — the second
    // RPC was wasting a round trip per batch on data nothing
    // displays. Add it back behind a feature if the UI grows a
    // phone field again.
    let req = build_load_users_request(peers);
    let buf = grpc_web::call(http, CONTACT_HOST,
        "bale.users.v1.Users", "LoadUsers", &req, Some(access_token)).await?;
    let users = decode_users_response(&buf);

    let merged = users.into_iter().map(|u| {
        let access_hash = peers.iter().find(|p| p.uid == u.id)
            .map(|p| p.access_hash)
            .unwrap_or(u.access_hash);
        UserEntity { access_hash, ..u }
    }).collect();
    Ok(merged)
}

/// `Users/ImportContacts(phone)` — global lookup by phone, with
/// the side effect of adding the user to the contact list.
/// Bale-specific behaviour: even a successful lookup mutates
/// the caller's contact list.
pub async fn import_contact_by_phone(
    http:         &reqwest::Client,
    access_token: &str,
    phone:        &str,
) -> Result<Vec<UserEntity>, GrpcError> {
    let digits: String = phone.chars().filter(char::is_ascii_digit).collect();
    let digits_int = digits.parse::<i64>().unwrap_or(0);

    let phone_entry = ProtoWriter::new().int64(1, digits_int).build();
    let payload     = ProtoWriter::new().bytes(1, &phone_entry).build();
    let buf = grpc_web::call(
        http, CONTACT_HOST,
        "bale.users.v1.Users", "ImportContacts",
        &payload, Some(access_token),
    ).await?;
    // Bale returns either inline users (f1) or peer refs (f4)
    // depending on whether the imported users had full
    // entities in the cache. resolve_with_load fills the gap.
    let (users, peer_refs) = decode_raw_search(&buf, /*user_field=*/1, /*peer_field=*/4);
    resolve_with_load(http, access_token, users, peer_refs).await
}

/// `Users/SearchContacts(query)` — search within contacts by
/// display name. No side effects.
pub async fn search_contacts_by_name(
    http:         &reqwest::Client,
    access_token: &str,
    query:        &str,
) -> Result<Vec<UserEntity>, GrpcError> {
    let payload = ProtoWriter::new().string(1, query).build();
    let buf = grpc_web::call(
        http, CONTACT_HOST,
        "bale.users.v1.Users", "SearchContacts",
        &payload, Some(access_token),
    ).await?;
    let (users, peer_refs) = decode_raw_search(&buf, 1, 2);
    resolve_with_load(http, access_token, users, peer_refs).await
}

/// `Users/RemoveContact(uid, access_hash)`. Both fields are
/// required — `access_hash` rotates per relationship and Bale
/// rejects the call if it's stale.
pub async fn remove_contact(
    http:         &reqwest::Client,
    access_token: &str,
    uid:          i32,
    access_hash:  i64,
) -> Result<(), GrpcError> {
    let payload = ProtoWriter::new()
        .int32(1, uid)
        .int64(2, access_hash)
        .build();
    grpc_web::call(
        http, CONTACT_HOST,
        "bale.users.v1.Users", "RemoveContact",
        &payload, Some(access_token),
    ).await?;
    Ok(())
}

async fn resolve_with_load(
    http:         &reqwest::Client,
    access_token: &str,
    users:        Vec<UserEntity>,
    peer_refs:    Vec<UserPeerRef>,
) -> Result<Vec<UserEntity>, GrpcError> {
    if !users.is_empty() { return Ok(users); }
    if peer_refs.is_empty() { return Ok(Vec::new()); }
    load_users_batch(http, access_token, &peer_refs).await
}

// ─── Request builders / response decoders ──────────────────────────────

fn build_load_users_request(peers: &[UserPeerRef]) -> Vec<u8> {
    // Repeated f1 = { f1 = uid, f2 = access_hash }.
    let mut out = Vec::new();
    for p in peers {
        let peer_msg = ProtoWriter::new()
            .int32(1, p.uid)
            .int64(2, p.access_hash)
            .build();
        let frame = ProtoWriter::new().bytes(1, &peer_msg).build();
        out.extend_from_slice(&frame);
    }
    out
}

fn decode_get_contacts_response(buf: &[u8]) -> ContactPeers {
    let mut users = Vec::new();
    let mut peers = Vec::new();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        match f {
            1 => if let Ok(b) = r.bytes() { users.push(decode_user_entity(b)); },
            3 => if let Ok(b) = r.bytes() { peers.push(decode_user_peer_ref(b)); },
            _ => { let _ = r.skip(w); }
        }
    }
    ContactPeers { peers, inline_users: users }
}

fn decode_users_response(buf: &[u8]) -> Vec<UserEntity> {
    let mut out = Vec::new();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        if f == 1 {
            if let Ok(b) = r.bytes() { out.push(decode_user_entity(b)); }
        } else if r.skip(w).is_err() {
            break;
        }
    }
    out
}

fn decode_raw_search(buf: &[u8], user_field: u32, peer_field: u32) -> (Vec<UserEntity>, Vec<UserPeerRef>) {
    let mut users = Vec::new();
    let mut peers = Vec::new();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        if f == user_field {
            if let Ok(b) = r.bytes() { users.push(decode_user_entity(b)); }
        } else if f == peer_field {
            if let Ok(b) = r.bytes() { peers.push(decode_user_peer_ref(b)); }
        } else if r.skip(w).is_err() {
            break;
        }
    }
    (users, peers)
}

fn decode_user_entity(buf: &[u8]) -> UserEntity {
    let mut e = UserEntity::default();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        match f {
            1 => e.id          = r.varint().unwrap_or(0) as i32,
            2 => e.access_hash = r.varint().unwrap_or(0) as i64,
            3 => e.name        = r.string().unwrap_or("").to_string(),
            9 => {
                let inner = r.bytes().unwrap_or(&[]);
                e.nick = decode_wrapped(inner);
            }
            _ => { let _ = r.skip(w); }
        }
    }
    e
}

fn decode_user_peer_ref(buf: &[u8]) -> UserPeerRef {
    let mut e = UserPeerRef { uid: 0, access_hash: 0 };
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        match f {
            1 => e.uid         = r.varint().unwrap_or(0) as i32,
            2 => e.access_hash = r.varint().unwrap_or(0) as i64,
            _ => { let _ = r.skip(w); }
        }
    }
    e
}

fn decode_wrapped(buf: &[u8]) -> String {
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        if f == 1 { return r.string().unwrap_or("").to_string(); }
        if r.skip(w).is_err() { break; }
    }
    String::new()
}

/// `LoadFullUsers` response → uid → phone. FullUser.contactInfo
/// holds repeated ContactInfo entries; we look for the
/// `PHONE`-typed one. Bale pre-formats `stringValue` as
/// `+989121234567`; falls back to the int64 `longValue`.
///
/// Currently unused — [`load_users_batch`] dropped the
/// `LoadFullUsers` call because the trait surface doesn't
/// expose phone numbers. Kept compiled so it can be wired back
/// in if the UI grows a phone field again.
#[allow(dead_code)]
fn decode_full_users_phones(buf: &[u8]) -> std::collections::HashMap<i32, String> {
    let mut out = std::collections::HashMap::new();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        if f != 1 { let _ = r.skip(w); continue; }
        let Ok(full_user_bytes) = r.bytes() else { break; };
        let (uid, phone) = decode_full_user_phone(full_user_bytes);
        if uid > 0 && !phone.is_empty() {
            out.insert(uid, phone);
        }
    }
    out
}

#[allow(dead_code)]
fn decode_full_user_phone(buf: &[u8]) -> (i32, String) {
    let mut uid   = 0i32;
    let mut phone = String::new();
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        match f {
            1 => uid = r.varint().unwrap_or(0) as i32,
            2 => if phone.is_empty() {
                if let Ok(b) = r.bytes() { phone = extract_phone_from_contact_info(b); }
            } else {
                let _ = r.bytes();
            },
            _ => { let _ = r.skip(w); }
        }
    }
    (uid, phone)
}

/// `ContactInfo` shape: `{ 1 = type, 2 = stringValue (wrapped),
/// 3 = longValue (Int64Value) }`. `type` defaults to 0 = PHONE;
/// non-zero means email / web / social — skip those.
#[allow(dead_code)]
fn extract_phone_from_contact_info(buf: &[u8]) -> String {
    let mut ty           = 0i32;
    let mut string_value = String::new();
    let mut long_value   = 0i64;
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let Ok((f, w)) = r.tag() else { break; };
        match f {
            1 => ty = r.varint().unwrap_or(0) as i32,
            2 => { let b = r.bytes().unwrap_or(&[]); string_value = decode_wrapped(b); },
            3 => {
                let sub = r.bytes().unwrap_or(&[]);
                let mut sr = ProtoReader::new(sub);
                while sr.has_more() {
                    let Ok((sf, sw)) = sr.tag() else { break; };
                    if sf == 1 { long_value = sr.varint().unwrap_or(0) as i64; }
                    else if sr.skip(sw).is_err() { break; }
                }
            }
            _ => { let _ = r.skip(w); }
        }
    }
    if ty != 0 { return String::new(); }   // CONTACTTYPE_PHONE = 0
    if !string_value.is_empty() { string_value }
    else if long_value != 0    { long_value.to_string() }
    else                        { String::new() }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn decode_user_entity_full() {
        let nick   = ProtoWriter::new().string(1, "@joe").build();
        let entity = ProtoWriter::new()
            .int32 (1, 42)
            .int64 (2, 0xdeadbeef)
            .string(3, "Joe Smith")
            .bytes (9, &nick)
            .build();
        let e = decode_user_entity(&entity);
        assert_eq!(e.id,          42);
        assert_eq!(e.access_hash, 0xdeadbeef);
        assert_eq!(e.name,        "Joe Smith");
        assert_eq!(e.nick,        "@joe");
    }

    #[test]
    fn display_name_prefers_name_then_nick_then_id() {
        let e = UserEntity { id: 1, name: "Joe".into(), nick: "@j".into(), ..Default::default() };
        assert_eq!(e.display_name(), "Joe");

        let e = UserEntity { id: 1, name: "".into(), nick: "@j".into(), ..Default::default() };
        assert_eq!(e.display_name(), "@j");

        let e = UserEntity { id: 7, ..Default::default() };
        assert_eq!(e.display_name(), "7");
    }

    #[test]
    fn decode_get_contacts_response_inline_and_refs() {
        let entity = ProtoWriter::new().int32(1, 1).string(3, "Alice").build();
        let peer   = ProtoWriter::new().int32(1, 2).int64(2, 100).build();
        let buf = ProtoWriter::new()
            .bytes(1, &entity)
            .bytes(3, &peer)
            .build();
        let parsed = decode_get_contacts_response(&buf);
        assert_eq!(parsed.inline_users.len(), 1);
        assert_eq!(parsed.inline_users[0].id, 1);
        assert_eq!(parsed.peers.len(), 1);
        assert_eq!(parsed.peers[0],   UserPeerRef { uid: 2, access_hash: 100 });
    }

    #[test]
    fn decode_full_users_phones_extracts_phone() {
        // ContactInfo { type=0(PHONE), stringValue="+989..." }
        let phone_wrapped = ProtoWriter::new().string(1, "+989121234567").build();
        let contact_info  = ProtoWriter::new()
            .int32(1, 0)
            .bytes(2, &phone_wrapped)
            .build();
        let full_user = ProtoWriter::new()
            .int32(1, 42)
            .bytes(2, &contact_info)
            .build();
        let buf = ProtoWriter::new().bytes(1, &full_user).build();
        let map = decode_full_users_phones(&buf);
        assert_eq!(map.get(&42).map(String::as_str), Some("+989121234567"));
    }

    #[test]
    fn decode_full_users_phones_skips_email_type() {
        // type=1 (not PHONE) → skipped
        let value_wrapped = ProtoWriter::new().string(1, "joe@example.com").build();
        let contact_info  = ProtoWriter::new()
            .int32(1, 1)
            .bytes(2, &value_wrapped)
            .build();
        let full_user = ProtoWriter::new()
            .int32(1, 42)
            .bytes(2, &contact_info)
            .build();
        let buf = ProtoWriter::new().bytes(1, &full_user).build();
        let map = decode_full_users_phones(&buf);
        assert!(map.is_empty());
    }

    #[test]
    fn build_load_users_request_round_trips() {
        let peers = vec![
            UserPeerRef { uid: 1, access_hash: 100 },
            UserPeerRef { uid: 2, access_hash: 200 },
        ];
        let req = build_load_users_request(&peers);

        // Parse it back: top-level repeated f1 = { f1 = uid, f2 = access_hash }
        let mut r = ProtoReader::new(&req);
        let mut got = Vec::new();
        while r.has_more() {
            let (f, _) = r.tag().unwrap();
            assert_eq!(f, 1);
            let inner = r.bytes().unwrap();
            let mut ir = ProtoReader::new(inner);
            let mut uid = 0; let mut hash = 0i64;
            while ir.has_more() {
                let (f, _) = ir.tag().unwrap();
                match f {
                    1 => uid  = ir.varint().unwrap() as i32,
                    2 => hash = ir.varint().unwrap() as i64,
                    _ => panic!(),
                }
            }
            got.push(UserPeerRef { uid, access_hash: hash });
        }
        assert_eq!(got, peers);
    }

    #[test]
    fn decode_raw_search_routes_user_and_peer_fields() {
        let entity = ProtoWriter::new().int32(1, 5).string(3, "user").build();
        let peer   = ProtoWriter::new().int32(1, 6).int64(2, 99).build();
        let buf = ProtoWriter::new()
            .bytes(1, &entity)
            .bytes(4, &peer)
            .build();
        let (users, peers) = decode_raw_search(&buf, 1, 4);
        assert_eq!(users.len(), 1);
        assert_eq!(users[0].id, 5);
        assert_eq!(peers.len(), 1);
        assert_eq!(peers[0],    UserPeerRef { uid: 6, access_hash: 99 });
    }
}
