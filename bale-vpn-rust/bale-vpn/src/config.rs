//! Config + token persistence.
//!
//! **One file**: `~/.bale-vpn_config.json` — same path + JSON
//! shape the Node app used, so an existing installation
//! transitions to the Rust binary without re-auth. Token,
//! allow-list, block-list, max-clients, and the new Rust-only
//! settings (mode, nat-mode, peer-id, socks5-port) all live in
//! the same object.
//!
//! Atomic-rename write semantics: writes go to a `.tmp`
//! sibling first, then rename into place. Mode 0600 — the
//! `token` field is the auth bearer; nothing else needs read
//! access.

use lk_signaling::TokenStore;
use parking_lot::Mutex;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::Arc;

/// Matches the Node app's filename + path convention exactly.
/// The fields the Node app wrote are preserved as-is so an
/// upgrade doesn't lose admission state; the Rust-added fields
/// piggy-back on the same object.
const CONFIG_FILENAME: &str = ".bale-vpn_config.json";

/// On-disk config. Field names match the Node app's JSON keys
/// where present. `serde(default)` everywhere so a partial
/// file from an old version round-trips cleanly.
#[derive(Debug, Clone, Deserialize, Serialize, Default)]
pub struct Config {
    // ── Node-app keys (preserved verbatim) ───────────────────
    /// Bale `access_token` cookie value. Empty / missing means
    /// unauthenticated. Read by the [`FileTokenStore`] adapter.
    #[serde(default)]
    pub token: String,

    /// Allow-list (server mode). Peer ids whose calls
    /// auto-accept. Stored as strings (Bale uids fit in i32
    /// but we keep the string shape for symmetry with the
    /// trait surface).
    #[serde(default)]
    pub admission: Vec<String>,

    /// Block-list (server mode). Peer ids whose calls silently
    /// drop.
    #[serde(default)]
    pub blacklist: Vec<String>,

    /// Server-mode capacity cap. Defaults to 5; capped at 253.
    #[serde(default = "default_max_clients", rename = "maxClients")]
    pub max_clients: u32,

    // ── Rust-added keys ──────────────────────────────────────
    /// `"client"` / `"server"`, or `None` until the user picks
    /// one in the UI. The daemon parks waiting for a mode if
    /// unset; the UI surfaces a picker.
    #[serde(default)]
    pub mode: Option<String>,

    /// `"kernel"` or `"userspace"`. Defaults to userspace on
    /// every OS — no privileged setup needed to get started.
    /// Kernel mode requires `CAP_NET_ADMIN` (Linux) or root
    /// (macOS) plus a one-time iptables / pf rule.
    #[serde(default)]
    pub nat_mode: Option<String>,

    /// HTTP UI port. CLI takes precedence.
    #[serde(default = "default_port")]
    pub port: u16,

    /// Client-mode peer to dial.
    #[serde(default, rename = "peerId")]
    pub peer_id: Option<String>,

    /// Client-mode SOCKS5 listen port.
    #[serde(default = "default_socks5_port", rename = "socks5Port")]
    pub socks5_port: u16,
}

fn default_port()        -> u16    { 3001 }
fn default_socks5_port() -> u16    { 1080 }
fn default_max_clients() -> u32    { 5 }

impl Config {
    pub fn load(override_dir: Option<&Path>) -> std::io::Result<Self> {
        let path = config_path(override_dir)?;
        if !path.exists() {
            log::info!("config: {path:?} not found, using defaults");
            return Ok(Self::default());
        }
        let text = fs::read_to_string(&path)?;
        if text.trim().is_empty() {
            return Ok(Self::default());
        }
        serde_json::from_str(&text)
            .map_err(|e| std::io::Error::new(std::io::ErrorKind::InvalidData, e.to_string()))
    }

    /// Atomic write — `.tmp` sibling then rename. Sets mode
    /// 0600 on Unix.
    pub fn save(&self, override_dir: Option<&Path>) -> std::io::Result<()> {
        let path = config_path(override_dir)?;
        let tmp  = path.with_extension("json.tmp");
        let text = serde_json::to_string_pretty(self)
            .map_err(|e| std::io::Error::new(std::io::ErrorKind::InvalidData, e.to_string()))?;
        fs::write(&tmp, text)?;
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            fs::set_permissions(&tmp, fs::Permissions::from_mode(0o600))?;
        }
        fs::rename(&tmp, &path)?;
        Ok(())
    }
}

/// Resolved config after merging the on-disk values with CLI
/// overrides. This is what the daemon actually operates on.
#[derive(Debug, Clone)]
pub struct Resolved {
    /// `Some("client" | "server")`, or `None` until the user
    /// picks one in the UI. The daemon parks in `run_mode` when
    /// `None`; the UI surfaces a picker.
    pub mode:        Option<String>,
    /// `"kernel"` / `"userspace"`. Defaults to `"userspace"` —
    /// works on every OS without privileged setup.
    pub nat_mode:    String,
    pub port:        u16,
    pub peer_id:     Option<String>,
    pub socks5_port: u16,
    /// Client-mode only: open a local TUN device alongside
    /// SOCKS5. Driven by the `--client-tun` CLI flag.
    pub client_tun:  bool,
    /// True when the mode was set via the `--mode` CLI flag.
    /// `/logout` keeps the mode in this case (the operator
    /// pinned it via CLI) and clears it otherwise so the next
    /// sign-in shows the picker again.
    pub mode_pinned_by_cli: bool,
    /// Directory containing the JSON config file. Used by the
    /// [`FileTokenStore`] adapter and HTTP UI for atomic saves.
    pub config_dir:  PathBuf,
}

impl Resolved {
    pub fn merge_cli(
        cfg:        &Config,
        cli_mode:   Option<String>,
        cli_nat:    Option<String>,
        cli_port:   u16,
        client_tun: bool,
    ) -> Self {
        // CLI > config file > unset (UI picker).
        let mode_pinned_by_cli = cli_mode.is_some();
        let mode = cli_mode.or_else(|| cfg.mode.clone());
        // Userspace NAT on every OS — kernel needs privileged
        // setup. UI / CLI can override per-run.
        let nat_mode = cli_nat
            .or_else(|| cfg.nat_mode.clone())
            .unwrap_or_else(|| "userspace".to_string());
        let config_dir = config_dir(None).unwrap_or_else(|_| PathBuf::from("."));
        Self {
            mode,
            nat_mode,
            port: cli_port,
            peer_id: cfg.peer_id.clone(),
            socks5_port: cfg.socks5_port,
            client_tun,
            mode_pinned_by_cli,
            config_dir,
        }
    }
}

/// `~/.bale-vpn_config.json` — same path the Node app used.
fn config_path(override_dir: Option<&Path>) -> std::io::Result<PathBuf> {
    let dir = config_dir(override_dir)?;
    Ok(dir.join(CONFIG_FILENAME))
}

fn config_dir(override_dir: Option<&Path>) -> std::io::Result<PathBuf> {
    if let Some(d) = override_dir { return Ok(d.to_path_buf()); }
    // Same layout as the Node app: `<dir-of-binary>/.bale-vpn_config.json`.
    // Keeps the config + executable as a single drop-in unit
    // (matches `tar xf bale-vpn.tar.gz && ./bale-vpn` deployments
    // without forcing a separate config-dir setup step).
    if let Ok(exe) = std::env::current_exe() {
        if let Some(dir) = exe.parent() {
            return Ok(dir.to_path_buf());
        }
    }
    // Fallback: cwd. Only hit if `current_exe()` fails (rare —
    // sandboxed environments where /proc/self/exe is inaccessible).
    std::env::current_dir()
}

// ─── Shared config file handle ──────────────────────────────

/// Process-wide handle around the on-disk JSON config.
/// Holds the directory + a write lock so every read-modify-
/// write goes through `update()` and concurrent writers can't
/// lose each other's changes.
///
/// Construct once at daemon startup, share via Arc — both the
/// [`FileTokenStore`] (auth token saves) and the HTTP UI
/// `/config` handler (admission / mode / peer changes) call
/// `update()` to mutate the file safely.
pub struct ConfigFile {
    dir:        PathBuf,
    write_lock: Mutex<()>,
}

impl ConfigFile {
    pub fn new(dir: PathBuf) -> Self {
        Self { dir, write_lock: Mutex::new(()) }
    }
    pub fn dir(&self) -> &Path { &self.dir }

    /// Snapshot the on-disk config. No lock — readers don't
    /// race with the atomic-rename writer in [`Config::save`].
    pub fn load(&self) -> Config {
        Config::load(Some(&self.dir)).unwrap_or_default()
    }

    /// Atomic read-modify-write. The mutate closure runs under
    /// the write lock; concurrent `update()` calls serialize.
    /// Returns the post-mutation `Config` so the caller can
    /// mirror fields into the in-memory `Resolved`.
    ///
    /// The closure is expected to be short + non-blocking. Hold
    /// the lock just long enough to read, mutate, and write.
    pub fn update<F: FnOnce(&mut Config)>(&self, mutate: F) -> std::io::Result<Config> {
        let _g = self.write_lock.lock();
        let mut cfg = Config::load(Some(&self.dir)).unwrap_or_default();
        mutate(&mut cfg);
        cfg.save(Some(&self.dir))?;
        Ok(cfg)
    }
}

// ─── TokenStore adapter ─────────────────────────────────────

/// `TokenStore` impl backed by the shared [`ConfigFile`].
/// Reads on `load()` come from the in-memory cache so the
/// signaling layer's `load()`-on-every-reconnect path doesn't
/// re-read the file. Writes go through `ConfigFile::update`
/// so the auth token doesn't clobber concurrent admission /
/// mode changes from the HTTP UI.
pub struct FileTokenStore {
    file:  Arc<ConfigFile>,
    cache: Mutex<Option<Vec<u8>>>,
}

impl FileTokenStore {
    pub fn new(file: Arc<ConfigFile>) -> Self {
        let cfg     = file.load();
        let initial = if cfg.token.is_empty() { None } else { Some(cfg.token.into_bytes()) };
        Self { file, cache: Mutex::new(initial) }
    }

    pub fn into_arc(self) -> Arc<dyn TokenStore> { Arc::new(self) }
}

impl TokenStore for FileTokenStore {
    fn load(&self) -> Option<Vec<u8>> { self.cache.lock().clone() }

    fn save(&self, bytes: &[u8]) {
        *self.cache.lock() = Some(bytes.to_vec());
        let token = String::from_utf8_lossy(bytes).to_string();
        if let Err(e) = self.file.update(|c| c.token = token) {
            log::warn!("token save: {e}");
        }
    }

    fn clear(&self) {
        *self.cache.lock() = None;
        if let Err(e) = self.file.update(|c| c.token.clear()) {
            log::warn!("token clear: {e}");
        }
    }
}
