//! lktunnel CLI — connects to a LiveKit room with the URL + JWT you
//! pass on the command line and runs the server-side NAT dispatcher
//! until Ctrl-C. One CLI process, one tunnel — no sid, no global
//! session table; the [`LkTunnel`] handle IS the tunnel.
//!
//! Usage:
//!     lktunnel --url wss://... --token <JWT>

use clap::{Parser, ValueEnum};
use lktunnel::LkTunnel;

#[derive(Copy, Clone, Eq, PartialEq, Debug, ValueEnum)]
enum Mode {
    /// Join the room and run the userspace TCP/UDP NAT — bridges
    /// client traffic to the local host's network stack.
    NatServer,
}

#[derive(Parser)]
#[command(name = "lktunnel", about = "LiveKit-backed tunnel.")]
struct Cli {
    /// LiveKit server URL (e.g. wss://livekit.example.com).
    #[arg(long)]
    url: String,

    /// LiveKit JWT for this room.
    #[arg(long)]
    token: String,

    /// What to do once the room is joined.
    #[arg(long, value_enum)]
    mode: Mode,

    /// Verbose NAT logging — per-flow retransmits, window updates, etc.
    #[arg(long)]
    debug: bool,
}

fn main() {
    let cli = Cli::parse();
    env_logger::Builder::from_env(
        env_logger::Env::default().default_filter_or("info,lktunnel=info"),
    )
    .format_timestamp_millis()
    .init();

    if cli.debug {
        lktunnel::nat::set_debug(true);
    }

    raise_nofile_limit();

    lktunnel::dispatcher::init();

    // Use lktunnel's shared runtime so we don't double-stack tokios.
    lktunnel::runtime().block_on(run(cli.url, cli.token, cli.mode));
}

async fn run(url: String, token: String, mode: Mode) {
    let available: Vec<String> = <Mode as ValueEnum>::value_variants()
        .iter()
        .filter_map(|m| m.to_possible_value().map(|p| p.get_name().to_string()))
        .collect();
    log::info!("mode={mode:?} (available: {})", available.join(", "));
    match mode {
        Mode::NatServer => run_nat_server(url, token).await,
    }
}

async fn run_nat_server(url: String, token: String) {
    let on_event = |ev: lktunnel::Event| {
        log::info!("event {:?} {}", ev.kind, ev.info);
    };

    // Non-blocking: returns the handle immediately, dial runs in
    // background. `await_connected` suspends until the room is joined
    // (or fails / times out).
    let tunnel = LkTunnel::connect(url.clone(), token, on_event);
    if let Err(e) = tunnel.await_connected().await {
        log::error!("LkTunnel::connect failed: {e}");
        std::process::exit(1);
    }
    log::info!("joined LiveKit room at {url}");

    if let Err(e) = tunnel.start_server() {
        log::error!("start_server failed: {e}");
        std::process::exit(1);
    }

    // Park on SIGINT / SIGTERM.
    let ctrl_c = tokio::signal::ctrl_c();
    #[cfg(unix)]
    let term = async {
        use tokio::signal::unix::{signal, SignalKind};
        let mut s = signal(SignalKind::terminate()).expect("install SIGTERM handler");
        s.recv().await;
    };

    #[cfg(unix)]
    tokio::select! {
        _ = ctrl_c => log::info!("SIGINT received, shutting down"),
        _ = term   => log::info!("SIGTERM received, shutting down"),
    }
    #[cfg(not(unix))]
    {
        ctrl_c.await.expect("ctrl-c");
        log::info!("Ctrl-C received, shutting down");
    }

    tunnel.disconnect();
}

/// Bump `RLIMIT_NOFILE` (soft) to the hard limit. macOS ships a soft
/// limit of 256 fds per process; libwebrtc alone burns 10-30 for ICE
/// candidates and each NAT TCP/UDP session opens one more, so a
/// browser hitting a moderately-loaded site hits `EMFILE` in seconds.
///
/// We don't try to raise the *hard* limit (that needs root on macOS
/// — `launchctl limit maxfiles`). Just raising the soft limit to the
/// existing hard limit usually buys 5-10× more headroom.
fn raise_nofile_limit() {
    unsafe {
        let mut rl: libc::rlimit = std::mem::zeroed();
        if libc::getrlimit(libc::RLIMIT_NOFILE, &mut rl) != 0 {
            log::warn!("getrlimit(RLIMIT_NOFILE) failed; running with whatever the shell set");
            return;
        }
        let was = rl.rlim_cur;
        // Don't blindly use `rlim_max` — macOS reports `RLIM_INFINITY`
        // on `rlim_max` but the kernel internally caps at
        // `kern.maxfilesperproc` (default 10240). `setrlimit` will EINVAL
        // if you ask for more than the kernel allows, so clamp to a
        // sane ceiling that's well below typical maxfilesperproc.
        const TARGET: libc::rlim_t = 65536;
        let want = if rl.rlim_max == libc::RLIM_INFINITY {
            TARGET
        } else {
            std::cmp::min(rl.rlim_max, TARGET)
        };
        if want <= was { return; }
        rl.rlim_cur = want;
        if libc::setrlimit(libc::RLIMIT_NOFILE, &rl) != 0 {
            // Retry with progressively smaller values — macOS sometimes
            // EINVALs at the headline limit even though getrlimit
            // claimed it was OK.
            for cap in [16384, 8192, 4096, 2048, 1024] {
                rl.rlim_cur = cap;
                if libc::setrlimit(libc::RLIMIT_NOFILE, &rl) == 0 {
                    log::info!("raised RLIMIT_NOFILE: {was} → {cap}");
                    return;
                }
            }
            log::warn!("setrlimit(RLIMIT_NOFILE) failed at every step; stuck at {was}");
        } else {
            log::info!("raised RLIMIT_NOFILE: {was} → {want}");
        }
    }
}
