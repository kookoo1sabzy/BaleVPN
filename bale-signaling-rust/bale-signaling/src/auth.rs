//! BaleAuth — the Bale-shaped sign-in flow. Doesn't fit a generic
//! trait (phone + SMS OTP + conditional signup), so it lives
//! outside `lk_signaling::Signaling` and is consumed directly by
//! the app's auth UI.
//!
//! Ports `BaleAuthClient.kt` and the Node `http-server.js`
//! `/auth/*` endpoints into a single async API.
//!
//! Flow:
//! 1. `start_phone_auth(phone)` → server sends an SMS code, returns
//!    a `transaction_hash` and an `is_registered` flag.
//! 2. `submit_otp(tx, code)` → either
//!      - [`AuthOutcome::Authenticated { access_token }`] for known
//!        users, OR
//!      - [`AuthOutcome::NeedsSignupName`] for unknown users
//!        (covers both the legacy `PHONE_NUMBER_UNOCCUPIED` gRPC
//!        error and the new empty-JWT response shape Bale's API
//!        switched to in early 2026).
//! 3. `submit_signup_name(tx, name)` → completes signup, returns
//!    `Authenticated { access_token }`.
//!
//! After `Authenticated`, the caller persists the access token
//! through a `TokenStore` (managed by `BaleSignaling`).

use crate::grpc_web::{self, GrpcError};
use crate::proto::{ProtoError, ProtoReader, ProtoWriter};
use rand::RngCore;
use std::sync::Arc;
use reqwest::cookie::{CookieStore, Jar};

pub const AUTH_HOST:     &str = "next-ws.bale.ai";
const AUTH_APP_ID:       i32  = 4;
const AUTH_API_KEY:      &str = "C28D46DC4C3A7A26564BFCC48B929086A95C93C98E789A19847BEE8627DE4E7D";
const SENDCODE_SMS:      i32  = 3;
const DEFAULT_LANGUAGE:  &str = "fa";
const CLIENT_LABEL:      &str = "Bale Android";

/// Outcome of `start_phone_auth`.
#[derive(Debug, Clone)]
pub struct StartResult {
    pub transaction_hash: String,
    pub is_registered:    bool,
}

/// Outcome of `submit_otp` / `submit_signup_name`.
#[derive(Debug, Clone)]
pub enum AuthOutcome {
    /// Caller is signed in. The `access_token` is the cookie value
    /// to persist + send on the WS upgrade.
    Authenticated { access_token: String },

    /// Unknown phone. The caller should collect a display name and
    /// hand it back via `submit_signup_name(transaction_hash, name)`.
    /// Carries the same `transaction_hash` that started this flow.
    NeedsSignupName { transaction_hash: String },
}

#[derive(Debug)]
pub enum AuthError {
    Grpc(GrpcError),
    Proto(ProtoError),
    /// Server returned 2xx but the response shape didn't include
    /// a JWT and we couldn't classify it as `NeedsSignupName`.
    Malformed(&'static str),
    /// `/set-cookie/` didn't return an `access_token=…` header.
    NoAccessTokenCookie,
    Http(reqwest::Error),
}

impl std::fmt::Display for AuthError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Grpc(e)              => write!(f, "auth gRPC: {e}"),
            Self::Proto(e)             => write!(f, "auth proto: {e}"),
            Self::Malformed(s)         => write!(f, "auth malformed: {s}"),
            Self::NoAccessTokenCookie  => f.write_str("auth: /set-cookie/ returned no access_token"),
            Self::Http(e)              => write!(f, "auth HTTP: {e}"),
        }
    }
}
impl std::error::Error for AuthError {}

impl From<GrpcError>     for AuthError { fn from(e: GrpcError)     -> Self { Self::Grpc(e) } }
impl From<ProtoError>    for AuthError { fn from(e: ProtoError)    -> Self { Self::Proto(e) } }
impl From<reqwest::Error> for AuthError { fn from(e: reqwest::Error) -> Self { Self::Http(e) } }

/// Bale auth client. Holds a `reqwest::Client` and runs the three
/// auth RPCs against `next-ws.bale.ai`. The shared `jar` captures
/// the `access_token` cookie from the `/set-cookie/` exchange —
/// mirrors the web app's `credentials: "include"` fetch (the
/// cookie is `HttpOnly`, so it only lives in the jar, never in a
/// header we could scrape post-redirect).
pub struct BaleAuth {
    http: reqwest::Client,
    jar:  Arc<Jar>,
}

impl BaleAuth {
    pub fn new() -> Self {
        let jar = Arc::new(Jar::default());
        Self { http: grpc_web::build_client_with_jar(jar.clone()), jar }
    }

    /// Construct with a caller-supplied client. The caller is
    /// responsible for attaching the same `jar` as its
    /// `cookie_provider`, or the `/set-cookie/` exchange won't
    /// capture the `access_token`.
    pub fn with_client(http: reqwest::Client, jar: Arc<Jar>) -> Self {
        Self { http, jar }
    }

    /// Step 1: send an SMS code to `phone` (any format — non-digits
    /// stripped). Returns the transaction hash to be threaded
    /// through `submit_otp` / `submit_signup_name`, and a hint
    /// whether the phone is already registered.
    pub async fn start_phone_auth(&self, phone: &str) -> Result<StartResult, AuthError> {
        let digits: String = phone.chars().filter(char::is_ascii_digit).collect();
        let digits_int = digits.parse::<i64>().unwrap_or(0);

        let mut device_hash = vec![0u8; 16];
        rand::thread_rng().fill_bytes(&mut device_hash);

        let payload = ProtoWriter::new()
            .int64 (1, digits_int)
            .int32 (2, AUTH_APP_ID)
            .string(3, AUTH_API_KEY)
            .bytes (4, &device_hash)
            .string(5, CLIENT_LABEL)
            .string(7, DEFAULT_LANGUAGE)
            .int32 (9, SENDCODE_SMS)
            .build();

        let resp = grpc_web::call(
            &self.http, AUTH_HOST,
            "bale.auth.v1.Auth", "StartPhoneAuth",
            &payload, None,
        ).await?;

        decode_start_phone_auth(&resp).map_err(AuthError::Proto)
    }

    /// Step 2: submit the SMS code. For unknown phones Bale used to
    /// return a `PHONE_NUMBER_UNOCCUPIED` gRPC error; current API
    /// behaviour is to succeed with an empty `jwt` field. Both
    /// shapes resolve to `AuthOutcome::NeedsSignupName`.
    pub async fn submit_otp(
        &self,
        transaction_hash: &str,
        code:             &str,
    ) -> Result<AuthOutcome, AuthError> {
        let is_jwt = ProtoWriter::new().bool_(1, true).build();
        let payload = ProtoWriter::new()
            .string(1, transaction_hash)
            .string(2, code)
            .bytes (3, &is_jwt)
            .build();

        let buf = match grpc_web::call(
            &self.http, AUTH_HOST,
            "bale.auth.v1.Auth", "ValidateCode",
            &payload, None,
        ).await {
            Ok(b)  => b,
            Err(GrpcError::Status { code: _, message: Some(m) })
                    if m.contains("PHONE_NUMBER_UNOCCUPIED") => {
                return Ok(AuthOutcome::NeedsSignupName {
                    transaction_hash: transaction_hash.to_string(),
                });
            }
            Err(e) => return Err(e.into()),
        };

        let jwt = decode_auth_response_jwt(&buf)?;
        match jwt {
            Some(j) => {
                log::info!("auth: ValidateCode returned a JWT — finalizing");
                self.finalize_authenticated(j).await
            }
            None => {
                // No JWT in a 2xx/grpc-status-0 response. Two
                // meanings collide here: a genuinely-unknown phone
                // (→ signup), or a wrong/expired code for a known
                // phone (→ should be an error). We can't tell them
                // apart from the response alone — log it so the
                // ambiguity is visible, and let the caller decide
                // using the `is_registered` hint from StartPhoneAuth.
                log::info!("auth: ValidateCode returned no JWT — \
                            treating as NeedsSignupName (could also be a wrong/expired code)");
                Ok(AuthOutcome::NeedsSignupName {
                    transaction_hash: transaction_hash.to_string(),
                })
            }
        }
    }

    /// Step 3 (signup branch only): submit a display name. Returns
    /// `Authenticated`.
    pub async fn submit_signup_name(
        &self,
        transaction_hash: &str,
        name:             &str,
    ) -> Result<AuthOutcome, AuthError> {
        let payload = ProtoWriter::new()
            .string(1, transaction_hash)
            .string(2, name)
            .build();

        let buf = grpc_web::call(
            &self.http, AUTH_HOST,
            "bale.auth.v1.Auth", "SignUp",
            &payload, None,
        ).await?;

        match decode_auth_response_jwt(&buf)? {
            Some(j) => self.finalize_authenticated(j).await,
            None    => Err(AuthError::Malformed("SignUp returned no JWT")),
        }
    }

    /// Manual token refresh (paste-cookie path): accept an
    /// `access_token` cookie value that the user pulled from
    /// `web.bale.ai` in their browser. Stored as if it had come
    /// from a fresh sign-in.
    pub fn refresh_with_cookie(&self, _access_token: &str) {
        // Plain setter at the BaleSignaling level — BaleAuth itself
        // is stateless. The caller is expected to persist via the
        // `TokenStore` injected into `BaleSignaling`. Kept as a
        // method on `BaleAuth` so the API surface is symmetric
        // with the SMS flow.
    }

    /// Exchange the per-flow JWT for a long-lived `access_token`
    /// cookie. Bale serves this from `/set-cookie/` with the JWT
    /// in `Authorization: Bearer <jwt>`. The `Set-Cookie` response
    /// header contains the actual token we want to persist.
    async fn finalize_authenticated(&self, jwt: String) -> Result<AuthOutcome, AuthError> {
        let url = format!("https://{AUTH_HOST}/set-cookie/");
        let resp = self.http.get(&url)
            .header("Authorization", format!("Bearer {jwt}"))
            .send()
            .await?;
        let status = resp.status();
        // Drain the body so the connection (and any redirect chain)
        // fully completes before we read the jar.
        let _ = resp.bytes().await;

        // The `access_token` is HttpOnly — reqwest stored it in the
        // jar (across any redirect), never in a header on the final
        // response. Read it back the same way the browser would.
        let parsed = url.parse::<reqwest::Url>().ok();
        let token = parsed
            .as_ref()
            .and_then(|u| self.jar.cookies(u))
            .and_then(|hv| hv.to_str().ok().and_then(extract_access_token_from_cookie_header));

        match token {
            Some(t) => Ok(AuthOutcome::Authenticated { access_token: t }),
            None    => {
                log::warn!("auth: /set-cookie/ status={status} but no access_token in jar");
                Err(AuthError::NoAccessTokenCookie)
            }
        }
    }
}

impl Default for BaleAuth {
    fn default() -> Self { Self::new() }
}

// ─── Response decoders ──────────────────────────────────────────────────

fn decode_start_phone_auth(buf: &[u8]) -> Result<StartResult, ProtoError> {
    let mut r = ProtoReader::new(buf);
    let mut hash       = String::new();
    let mut registered = false;
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            1 => hash       = r.string()?.to_string(),
            2 => registered = r.varint()? != 0,
            _ => r.skip(w)?,
        }
    }
    Ok(StartResult { transaction_hash: hash, is_registered: registered })
}

/// Returns the JWT string from `AuthResponse { 2: user, 4: jwt-wrapped }`.
/// `None` if field 4 is absent or holds an empty string — the
/// "needs signup" signal Bale's API uses now.
fn decode_auth_response_jwt(buf: &[u8]) -> Result<Option<String>, ProtoError> {
    let mut r = ProtoReader::new(buf);
    let mut jwt: Option<String> = None;
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            2 => { let _ = r.bytes()?; }                      // user — opaque to us
            4 => jwt = Some(decode_wrapped_string(r.bytes()?)?),
            _ => r.skip(w)?,
        }
    }
    Ok(jwt.filter(|s| !s.is_empty()))
}

/// Bale wraps nullable strings as `Wrapped { 1: string }`. Empty
/// inner string → empty outer string; we collapse that to "".
fn decode_wrapped_string(buf: &[u8]) -> Result<String, ProtoError> {
    let mut r = ProtoReader::new(buf);
    let mut s = String::new();
    while r.has_more() {
        let (f, w) = r.tag()?;
        if f == 1 { s = r.string()?.to_string(); } else { r.skip(w)?; }
    }
    Ok(s)
}

/// Pull `access_token=…` out of a `Cookie`-style header value as
/// produced by [`reqwest::cookie::Jar::cookies`] — a `; `-joined
/// list of `name=value` pairs (no attributes; the jar already
/// stripped `Path`/`HttpOnly`/etc.).
fn extract_access_token_from_cookie_header(header: &str) -> Option<String> {
    for part in header.split(';') {
        if let Some(value) = part.trim().strip_prefix("access_token=") {
            return Some(value.to_string());
        }
    }
    None
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn decode_start_phone_auth_full() {
        let buf = ProtoWriter::new()
            .string(1, "abc-tx-hash")
            .int32 (2, 1)
            .build();
        let r = decode_start_phone_auth(&buf).unwrap();
        assert_eq!(r.transaction_hash, "abc-tx-hash");
        assert!(r.is_registered);
    }

    #[test]
    fn decode_auth_response_jwt_present() {
        let wrapped = ProtoWriter::new().string(1, "header.payload.sig").build();
        let buf     = ProtoWriter::new().bytes(4, &wrapped).build();
        let jwt = decode_auth_response_jwt(&buf).unwrap();
        assert_eq!(jwt.as_deref(), Some("header.payload.sig"));
    }

    #[test]
    fn decode_auth_response_jwt_missing_means_needs_signup() {
        // No field 4 — empty buffer
        let jwt = decode_auth_response_jwt(&[]).unwrap();
        assert!(jwt.is_none(), "missing field 4 = needs signup");
    }

    #[test]
    fn decode_auth_response_jwt_empty_means_needs_signup() {
        // Field 4 wrapped empty string — the new Bale behaviour
        let wrapped = ProtoWriter::new().string(1, "").build();
        let buf     = ProtoWriter::new().bytes(4, &wrapped).build();
        let jwt = decode_auth_response_jwt(&buf).unwrap();
        assert!(jwt.is_none(), "empty JWT = needs signup");
    }

    #[test]
    fn decode_auth_response_jwt_ignores_user_field() {
        let user_payload = b"opaque user blob".as_slice();
        let wrapped      = ProtoWriter::new().string(1, "valid.jwt.here").build();
        let buf          = ProtoWriter::new()
            .bytes(2, user_payload)   // field 2 user — should be skipped
            .bytes(4, &wrapped)
            .build();
        let jwt = decode_auth_response_jwt(&buf).unwrap();
        assert_eq!(jwt.as_deref(), Some("valid.jwt.here"));
    }

    #[test]
    fn decode_wrapped_string_handles_unknown_inner_fields() {
        // Inner f1=string, plus garbage at f2 — skip should keep us going
        let inner = ProtoWriter::new()
            .string(1, "outer")
            .int32 (2, 99)
            .build();
        assert_eq!(decode_wrapped_string(&inner).unwrap(), "outer");
    }
}
