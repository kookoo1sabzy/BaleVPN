//! Thin gRPC-web client over `reqwest`. Ports the encode/decode
//! pair shared between `BaleAuthClient.kt`, `ContactRepository.kt`,
//! and the Node `http-server.js` / `bale-ws.js` helpers.
//!
//! Why hand-rolled and not `tonic`: `tonic-web` is server-side; the
//! Rust ecosystem doesn't ship a polished gRPC-web *client*. The
//! protocol is small — five-byte length-prefixed frames over
//! HTTP/1.1 POST, trailers as a length-prefixed text blob — so a
//! thin layer over `reqwest` is the simplest path.

use crate::proto::ProtoError;
use std::time::Duration;

const ORIGIN: &str = "https://web.bale.ai";

/// Errors surfaced to callers (BaleAuth, contact RPCs, …).
#[derive(Debug)]
pub enum GrpcError {
    /// Non-2xx HTTP response. `snippet` is the first 200 chars of
    /// the body for diagnostics; the gRPC status code (which would
    /// normally live in trailers) isn't available.
    Http     { status: u16, snippet: String },
    /// gRPC trailer reported a non-zero status. `code` follows the
    /// canonical gRPC code numbering (4 = DEADLINE_EXCEEDED, 14 =
    /// UNAVAILABLE, etc.).
    Status   { code: i32, message: Option<String> },
    /// Response body wasn't a valid gRPC-web frame.
    Malformed(String),
    /// Underlying transport (TLS handshake, connect timeout, …)
    /// fell over.
    Transport(String),
    /// Hit our own bound when decoding the response.
    Proto(ProtoError),
}

impl std::fmt::Display for GrpcError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Http { status, snippet } => write!(f, "HTTP {status}: {snippet}"),
            Self::Status { code, message } => match message {
                Some(m) => write!(f, "gRPC code={code} message={m}"),
                None    => write!(f, "gRPC code={code}"),
            },
            Self::Malformed(s) => write!(f, "malformed gRPC-web frame: {s}"),
            Self::Transport(s) => write!(f, "transport: {s}"),
            Self::Proto(e)     => write!(f, "proto: {e}"),
        }
    }
}
impl std::error::Error for GrpcError {}

impl From<ProtoError> for GrpcError { fn from(e: ProtoError) -> Self { Self::Proto(e) } }
impl From<reqwest::Error> for GrpcError {
    fn from(e: reqwest::Error) -> Self { Self::Transport(e.to_string()) }
}

/// Wrap `payload` in a gRPC-web data frame: `[flag][len:u32 BE][body]`.
/// The leading `flag` byte is 0 for data, 0x80 for trailers — we
/// only ever encode data here.
pub fn encode_frame(payload: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(5 + payload.len());
    let len = payload.len() as u32;
    out.push(0);                                  // flag = data
    out.extend_from_slice(&len.to_be_bytes());    // length, big-endian
    out.extend_from_slice(payload);
    out
}

/// Parse a gRPC-web response body: zero or more frames. Returns the
/// last data frame (Bale RPCs are unary, so there's at most one).
/// Trailer frames are inspected for a non-zero `grpc-status`; any
/// such status becomes a [`GrpcError::Status`].
pub fn decode_response(body: &[u8]) -> Result<Vec<u8>, GrpcError> {
    let mut pos  = 0;
    let mut data: Option<Vec<u8>> = None;

    while pos + 5 <= body.len() {
        let flag = body[pos];
        let len  = u32::from_be_bytes([
            body[pos + 1], body[pos + 2], body[pos + 3], body[pos + 4],
        ]) as usize;
        pos += 5;

        let end = pos.checked_add(len).ok_or_else(|| {
            GrpcError::Malformed(format!("frame length {len} overflows position {pos}"))
        })?;
        if end > body.len() {
            return Err(GrpcError::Malformed(format!(
                "frame length {len} > remaining {}", body.len() - pos
            )));
        }
        let frame = &body[pos..end];
        pos = end;

        if flag & 0x80 == 0 {
            // Data frame. Multiple data frames would mean a streaming RPC;
            // Bale's calls are unary, so the last one wins is the practical
            // outcome — matching the Kotlin / Node behaviour.
            data = Some(frame.to_vec());
        } else {
            // Trailer frame: text key:value pairs separated by \r\n.
            // Look for grpc-status; bail if non-zero.
            let trailer = String::from_utf8_lossy(frame);
            let mut status = 0i32;
            let mut message: Option<String> = None;
            for line in trailer.lines() {
                if let Some(rest) = line.strip_prefix("grpc-status:") {
                    status = rest.trim().parse().unwrap_or(0);
                } else if let Some(rest) = line.strip_prefix("grpc-message:") {
                    message = Some(rest.trim().to_string());
                }
            }
            if status != 0 {
                return Err(GrpcError::Status { code: status, message });
            }
        }
    }

    Ok(data.unwrap_or_default())
}

/// One round-trip. `service` is e.g. `"bale.auth.v1.Auth"`,
/// `method` is `"ValidateCode"`, `payload` is the protobuf-encoded
/// request body (no gRPC framing — we add it). `host` is the
/// HTTPS hostname (`next-ws.bale.ai`). `access_token`, if `Some`,
/// is sent as the `Cookie: access_token=…` header.
pub async fn call(
    client:       &reqwest::Client,
    host:         &str,
    service:      &str,
    method:       &str,
    payload:      &[u8],
    access_token: Option<&str>,
) -> Result<Vec<u8>, GrpcError> {
    let url = format!("https://{host}/{service}/{method}");
    let mut req = client
        .post(&url)
        .header("Content-Type", "application/grpc-web+proto")
        .header("X-Grpc-Web",   "1")
        .header("Origin",       ORIGIN)
        .body(encode_frame(payload));
    if let Some(tok) = access_token {
        req = req.header("Cookie", format!("access_token={tok}"));
    }

    let resp = req.send().await?;
    let status = resp.status();
    if !status.is_success() {
        let snippet = resp.text().await.unwrap_or_default();
        return Err(GrpcError::Http {
            status:  status.as_u16(),
            snippet: snippet.chars().take(200).collect(),
        });
    }
    let body = resp.bytes().await?;
    decode_response(&body)
}

/// `reqwest::Client` tuned for Bale: rustls + webpki-roots is the
/// default via the crate feature, plus a generous timeout that
/// matches the 30 s RPC timeout the Kotlin side uses.
pub fn build_client() -> reqwest::Client {
    reqwest::Client::builder()
        .timeout(Duration::from_secs(30))
        .https_only(true)
        .build()
        .expect("rustls Client build")
}

/// Same as [`build_client`] but with a `cookie_provider` jar so
/// `Set-Cookie` responses (notably the `/set-cookie/` auth
/// exchange) are captured into `jar` across the redirect chain —
/// mirroring the web app's `credentials: "include"` fetch.
pub fn build_client_with_jar(jar: std::sync::Arc<reqwest::cookie::Jar>) -> reqwest::Client {
    reqwest::Client::builder()
        .timeout(Duration::from_secs(30))
        .https_only(true)
        .cookie_provider(jar)
        .build()
        .expect("rustls Client build")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn encode_frame_shape() {
        let frame = encode_frame(&[0x01, 0x02, 0x03]);
        assert_eq!(frame, vec![0x00, 0x00, 0x00, 0x00, 0x03, 0x01, 0x02, 0x03]);
    }

    #[test]
    fn decode_response_with_data_and_trailer() {
        let payload = &[0xAA, 0xBB, 0xCC];
        let trailer = b"grpc-status:0\r\ngrpc-message:OK\r\n";

        let mut body = Vec::new();
        body.extend_from_slice(&encode_frame(payload));
        // Trailer frame: flag=0x80, length-prefixed text
        body.push(0x80);
        body.extend_from_slice(&(trailer.len() as u32).to_be_bytes());
        body.extend_from_slice(trailer);

        let data = decode_response(&body).unwrap();
        assert_eq!(data, payload);
    }

    #[test]
    fn decode_response_nonzero_status_errors() {
        let trailer = b"grpc-status:5\r\ngrpc-message:NOT_FOUND\r\n";
        let mut body = vec![0x80];
        body.extend_from_slice(&(trailer.len() as u32).to_be_bytes());
        body.extend_from_slice(trailer);

        match decode_response(&body) {
            Err(GrpcError::Status { code, message }) => {
                assert_eq!(code, 5);
                assert_eq!(message.as_deref(), Some("NOT_FOUND"));
            }
            other => panic!("expected Status, got {other:?}"),
        }
    }

    #[test]
    fn decode_response_truncated_frame_errors() {
        // length=10 but only 2 bytes remain
        let body = vec![0x00, 0x00, 0x00, 0x00, 0x0A, 0x01, 0x02];
        assert!(matches!(decode_response(&body), Err(GrpcError::Malformed(_))));
    }

    #[test]
    fn decode_response_empty_body_returns_empty() {
        let data = decode_response(&[]).unwrap();
        assert!(data.is_empty());
    }
}
