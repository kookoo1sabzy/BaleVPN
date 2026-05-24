//! `bale-vpn` — single Rust binary replacing the Node app.
//!
//! Modes:
//!   - **client** (default): place a call to a configured peer,
//!     run a local SOCKS5 listener over the resulting QUIC channel.
//!   - **server**: accept incoming calls via Bale's admission flow,
//!     run a per-call NAT (kernel TUN on Linux/macOS, userspace on
//!     any OS) bridging IP packets to host sockets.
//!
//! HTTP UI on `127.0.0.1:<port>` for sign-in / status / settings.
//! See `ui.rs`. `--headless` skips opening the (future) native
//! webview but the HTTP server runs either way.

use clap::{Parser, Subcommand};
use std::path::PathBuf;

mod client;
mod config;
mod daemon;
mod server;
mod tun;
mod ui;

#[cfg(feature = "gui")]
mod ui_native;

/// Top-level CLI. Mode (server / client) is a subcommand so
/// per-mode args (`--nat-mode` for server, `--client-tun` for
/// client) only show up under the right branch — clap rejects
/// `bale-vpn server --client-tun` with a clear error.
///
/// Omit the subcommand to launch the daemon with mode unset; the
/// UI picker prompts on first run.
#[derive(Parser, Debug)]
#[command(name = "bale-vpn", about = "Bale VPN — Rust client/server.")]
struct Cli {
    /// HTTP UI port. Bound to 127.0.0.1.
    #[arg(long, default_value_t = 3001)]
    port: u16,

    /// Run without opening a native webview (GUI builds only).
    /// On builds without the `gui` feature this flag is a no-op.
    #[arg(long, default_value_t = false)]
    headless: bool,

    /// Config directory. Defaults to the directory of the binary.
    #[arg(long)]
    config_dir: Option<PathBuf>,

    /// Mode + its mode-specific args. Optional — without it the
    /// daemon starts with mode unset and waits for the UI picker.
    #[command(subcommand)]
    mode: Option<ModeCmd>,
}

#[derive(Subcommand, Debug)]
enum ModeCmd {
    /// Accept incoming calls and bridge them to host sockets.
    Server {
        /// NAT mode. `kernel` = TUN + iptables/pf (needs setup);
        /// `userspace` = in-process NAT (no privilege). Default:
        /// `userspace` on every OS.
        #[arg(long, value_enum)]
        nat_mode: Option<NatMode>,
    },
    /// Place a call to a configured peer and run a local SOCKS5
    /// listener over the resulting QUIC channel.
    Client {
        /// Also open a local TUN at `10.8.0.2/24` and route the
        /// peer's traffic through it. Needs `CAP_NET_ADMIN`
        /// (Linux) or root (macOS). Caller installs routes —
        /// e.g. `sudo ip route add default dev bale-c0` after
        /// the daemon is up. Without this flag, client mode
        /// runs SOCKS5 only (no system VPN).
        #[arg(long, default_value_t = false)]
        client_tun: bool,
    },
}

#[derive(clap::ValueEnum, Debug, Clone, Copy, PartialEq, Eq)]
enum NatMode { Kernel, Userspace }

fn main() {
    env_logger::Builder::from_env(
        env_logger::Env::default().default_filter_or(
            // `quinn::endpoint=off` suppresses an ERROR-level
            // "I/O error: quic tunnel rx channel closed" that
            // fires on every normal client-disconnect — quinn
            // sees our intentional channel-close as a socket
            // error. The condition itself is fine; quinn just
            // logs noisily about it. Bump back to `warn` if you
            // need to debug a real quinn endpoint issue.
            "info,lktunnel=info,bale_signaling=info,bale_vpn=info,\
             livekit=warn,webrtc_sys=warn,libwebrtc=warn,\
             quinn::endpoint=off",
        ),
    )
    .format_timestamp_millis()
    .init();

    let cli = Cli::parse();

    // Flatten subcommand back into the merge-cli args. The
    // subcommand shape just gates which per-mode args are
    // accepted at the CLI; the daemon still consumes a flat
    // Resolved config.
    let (cli_mode, cli_nat, client_tun) = match &cli.mode {
        Some(ModeCmd::Server { nat_mode }) => (
            Some("server".to_string()),
            nat_mode.map(|m| match m { NatMode::Kernel => "kernel", NatMode::Userspace => "userspace" }.to_string()),
            false,
        ),
        Some(ModeCmd::Client { client_tun }) => (
            Some("client".to_string()),
            None,
            *client_tun,
        ),
        None => (None, None, false),
    };

    log::info!("bale-vpn starting (port={} mode={} nat={} headless={})",
        cli.port,
        cli_mode.clone().unwrap_or_else(|| "unset".into()),
        cli_nat .clone().unwrap_or_else(|| "default".into()),
        cli.headless);

    let cfg = config::Config::load(cli.config_dir.as_deref())
        .expect("failed to load config");
    let resolved = config::Resolved::merge_cli(
        &cfg,
        cli_mode,
        cli_nat,
        cli.port,
        client_tun,
    );

    // GUI vs headless dispatch:
    //   - `gui` feature off:                  always headless
    //   - `gui` feature on  +  --headless:    headless (server deployments
    //                                         using the same binary)
    //   - `gui` feature on  + !--headless:    open a webview shell
    #[cfg(feature = "gui")]
    if !cli.headless {
        if let Err(e) = ui_native::run_gui(resolved) {
            log::error!("gui shell exited with error: {e}");
            std::process::exit(1);
        }
        return;
    }

    // Headless path — daemon owns the runtime directly.
    let rt = tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .thread_name("bale-vpn-rt")
        .build()
        .expect("tokio runtime");
    rt.block_on(async move {
        if let Err(e) = daemon::run(resolved).await {
            log::error!("daemon exited with error: {e}");
            std::process::exit(1);
        }
    });
}
