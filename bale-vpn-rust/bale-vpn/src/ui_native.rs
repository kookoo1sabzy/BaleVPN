//! Native webview shell over the embedded HTTP UI. Only
//! compiled in when the `gui` Cargo feature is on.
//!
//! Architecture (single-process, single-runtime):
//!   - Main thread owns a multi-thread tokio runtime. The
//!     daemon (HTTP UI + signaling + per-mode tasks) is spawned
//!     onto the runtime's worker pool via `rt.spawn`.
//!   - Main thread then runs the OS event loop and hosts a
//!     `wry::WebView` pointed at `127.0.0.1:<port>`. tao /
//!     wry require the event loop on the main thread on
//!     macOS, which is why the daemon spawns onto workers
//!     instead of taking the main thread.
//!   - Window close → signal the daemon over a oneshot, then
//!     `rt.block_on` (briefly, bounded) for the daemon's
//!     drain to complete before exiting.
//!
//! The embedded HTML/JS UI talks to the daemon over HTTP just
//! like the headless deployment does — same surface, no GUI-
//! specific wiring on either side.

use crate::config::Resolved;
use std::cell::Cell;
use std::net::TcpStream;
use std::thread;
use std::time::{Duration, Instant};
use tao::event::{Event, WindowEvent};
use tao::event_loop::{ControlFlow, EventLoop};
use tao::window::WindowBuilder;
use tokio::sync::oneshot;
use wry::WebViewBuilder;

pub fn run_gui(cfg: Resolved) -> Result<(), Box<dyn std::error::Error>> {
    let port = cfg.port;

    // Shutdown channel: GUI → daemon. Closing the window sends
    // on this; the daemon's outer select! catches it, drains
    // the active mode + signaling, then returns. We block_on
    // the daemon's JoinHandle (with a budget) before exiting
    // so Bale + LK see a clean tear-down instead of a TCP RST.
    let (shutdown_tx, shutdown_rx) = oneshot::channel::<()>();

    // One tokio runtime for the whole process. The daemon runs
    // as a spawned task on its worker pool; no separate "daemon
    // thread" exists — the GUI binary is genuinely single-
    // process, single-runtime.
    let rt = tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .thread_name("bale-vpn-rt")
        .build()
        .expect("tokio runtime");
    let daemon_handle = rt.spawn(async move {
        if let Err(e) = crate::daemon::run_with_shutdown(cfg, shutdown_rx).await {
            log::error!("daemon task exited with error: {e}");
        }
    });

    // Wait for the HTTP UI to start accepting connections —
    // axum's bind+serve is fast but not instant. Poll for a
    // few seconds with a tight cadence; bail with a clear
    // message if it never comes up.
    if !wait_for_port(port, Duration::from_secs(5)) {
        return Err(format!(
            "HTTP UI on 127.0.0.1:{port} didn't come up within 5s — \
             check the daemon-thread logs for the bind failure"
        ).into());
    }

    // Native window + webview. The webview just navigates to
    // the local HTTP UI; everything the frontend needs (auth,
    // settings, status, contacts) is served by the embedded
    // axum routes.
    let event_loop: EventLoop<()> = EventLoop::<()>::new();
    // Native menubar so the OS routes standard shortcuts
    // (Cmd+C / Cmd+V / Cmd+A on macOS, Ctrl+ equivalents on
    // Windows / Linux) into the focused webview input. Without
    // this, macOS in particular swallows the keystrokes
    // entirely — copy/paste doesn't work at all in the webview.
    install_app_menu();
    // Size the window against the primary monitor so the embedded
    // HTML/JS fits without horizontal scrolling and the user
    // isn't staring at a tiny pane in the middle of a 4K screen.
    // Falls back to a 1280x900 default if no monitor info is
    // reachable (headless / sandboxed runner).
    let (win_w, win_h) = match event_loop.primary_monitor() {
        Some(mon) => {
            let size = mon.size().to_logical::<f64>(mon.scale_factor());
            // Cap to a sensible upper bound; the UI doesn't get more
            // useful past ~1400 wide. Floor of 900 wide so cramped
            // ~5-inch laptops still get a usable layout.
            let w = (size.width  * 0.7).clamp(900.0, 1400.0);
            let h = (size.height * 0.85).clamp(700.0, 1000.0);
            (w, h)
        }
        None => (1280.0, 900.0),
    };
    let window = WindowBuilder::new()
        .with_title("Bale VPN")
        .with_inner_size(tao::dpi::LogicalSize::new(win_w, win_h))
        .with_resizable(true)
        .build(&event_loop)?;
    let _webview = WebViewBuilder::new(&window)
        .with_url(&format!("http://127.0.0.1:{port}"))
        // Right-click → Inspect Element so UI bugs are debuggable
        // without rebuilding. Cheap in release mode (the WKWebView
        // / WebView2 / WebKitGTK devtools are bundled).
        .with_devtools(true)
        .build()?;

    // Ctrl+C bridge: a tokio task on the shared runtime waits
    // for SIGINT and posts a user-event to wake the event loop.
    // Without this, ^C in the terminal only signals the daemon
    // (which tears down its select!) but the main-thread event
    // loop keeps running with a torn-down daemon underneath.
    let proxy = event_loop.create_proxy();
    rt.spawn(async move {
        if tokio::signal::ctrl_c().await.is_ok() {
            log::info!("gui: SIGINT — closing window");
            let _ = proxy.send_event(());
        }
    });

    // CloseRequested (or the user-event from Ctrl+C above):
    // send the shutdown signal, block briefly for the daemon's
    // drain. We use Cell instead of Mutex because the
    // event_loop closure runs on a single thread (main) — no
    // synchronization needed; we just need interior mutability
    // to take the values out on the first close event.
    let shutdown_tx   = Cell::new(Some(shutdown_tx));
    let daemon_handle = Cell::new(Some(daemon_handle));
    event_loop.run(move |event, _, control_flow| {
        *control_flow = ControlFlow::Wait;
        let should_close = matches!(event,
            Event::WindowEvent { event: WindowEvent::CloseRequested, .. } |
            Event::UserEvent(()));
        if should_close {
            if let Some(tx) = shutdown_tx.take() {
                log::info!("gui: shutdown — signaling daemon");
                let _ = tx.send(());
                if let Some(handle) = daemon_handle.take() {
                    // Bounded wait so a stuck signaling layer
                    // can't wedge the UI close. block_on parks
                    // the main thread (we're shutting down
                    // anyway); the runtime's workers keep
                    // running the drain.
                    let _ = rt.block_on(async {
                        tokio::time::timeout(Duration::from_secs(3), handle).await
                    });
                    log::info!("gui: daemon shutdown complete");
                }
            }
            *control_flow = ControlFlow::Exit;
        }
    });
    // tao 0.30 `EventLoop::run` returns `()` after ControlFlow::Exit
    // — older versions returned `!`. The explicit Ok keeps the
    // signature stable across both.
    #[allow(unreachable_code)]
    Ok(())
}

/// Install an app-level menubar with the standard Edit items.
/// macOS only for now — on Windows / Linux the per-window
/// shortcuts already work inside wry, and `init_for_hwnd` /
/// `init_for_gtk_window` would need raw window handles we
/// don't pipe in. (Trivial to add when we need it.)
fn install_app_menu() {
    #[cfg(target_os = "macos")]
    {
        use muda::{Menu, Submenu, PredefinedMenuItem, AboutMetadata};

        // About menu item dropped: muda 0.13.5's About handler
        // on macOS crashes both paths (the metadata path with
        // explicit `icon: None` hits a corrupt-Icon panic in
        // `to_png`; the no-metadata path's
        // `orderFrontStandardAboutPanel:` also crashes,
        // probably because we're an unbundled binary with no
        // Info.plist). Until muda fixes the icon path or we
        // ship as a proper `.app` bundle, omit it. The Hide /
        // Quit items still work; Cmd+C/V are wired through the
        // Edit menu below.

        let menu = Menu::new();

        // macOS "App" submenu — must be first. Hide / Quit
        // live here.
        let app_menu = Submenu::new("Bale VPN", true);
        let _ = app_menu.append_items(&[
            &PredefinedMenuItem::hide(None),
            &PredefinedMenuItem::hide_others(None),
            &PredefinedMenuItem::show_all(None),
            &PredefinedMenuItem::separator(),
            &PredefinedMenuItem::quit(None),
        ]);
        let _ = menu.append(&app_menu);

        let edit_menu = Submenu::new("Edit", true);
        let _ = edit_menu.append_items(&[
            &PredefinedMenuItem::undo(None),
            &PredefinedMenuItem::redo(None),
            &PredefinedMenuItem::separator(),
            &PredefinedMenuItem::cut(None),
            &PredefinedMenuItem::copy(None),
            &PredefinedMenuItem::paste(None),
            &PredefinedMenuItem::select_all(None),
        ]);
        let _ = menu.append(&edit_menu);

        menu.init_for_nsapp();
    }
}

/// Probe the loopback port until something accepts a TCP
/// connection or the deadline expires.
fn wait_for_port(port: u16, budget: Duration) -> bool {
    let deadline = Instant::now() + budget;
    let addr = format!("127.0.0.1:{port}");
    while Instant::now() < deadline {
        if TcpStream::connect_timeout(
            &addr.parse().expect("loopback addr"),
            Duration::from_millis(200),
        ).is_ok() {
            return true;
        }
        thread::sleep(Duration::from_millis(50));
    }
    false
}
