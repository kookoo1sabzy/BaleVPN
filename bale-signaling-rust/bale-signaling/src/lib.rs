//! bale-signaling — Bale impl of the `lk-signaling` Signaling
//! trait. See workspace `Cargo.toml` for the high-level shape.

pub mod proto;
pub mod grpc_web;
pub mod auth;
pub mod contacts;
pub mod peer;
pub mod ws;
pub mod signaling;

pub use auth::{AuthError, AuthOutcome, BaleAuth, StartResult};
pub use peer::BalePeer;
pub use signaling::BaleSignaling;
