# Rust application — Linux / macOS / Windows

> Persian / فارسی: [راهنمای نسخهٔ Rust](rust-fa.md)

The Rust application (`bale-vpn-rust/`) is a single-binary **VPN client or server** with an embedded HTTP UI (and an optional native desktop window). It replaces the Node application — same on-disk config layout, richer feature set, no Node runtime required.

- Binary builds for Linux, macOS, and Windows.
- Two roles, chosen at first run via the UI picker or pinned via CLI subcommand:
  - **server** — accepts incoming Bale calls from allow-listed contacts and bridges each caller's IP traffic to the open internet.
  - **client** — places a call to a configured peer, runs a local SOCKS5 listener (and optionally a system TUN) over the resulting tunnel.
- Two server-side forwarding strategies:
  - **kernel TUN** — the kernel handles IP forwarding and NAT (`iptables` MASQUERADE on Linux, `pf` anchor on macOS). Highest throughput. Requires a one-time root step.
  - **userspace NAT** — runs unprivileged. Per-flow Rust TCP / UDP state machine inside the process.
- A local **web UI** at `http://localhost:3001` is the configuration surface — sign-in, mode picker, allow-list management, pending requests, connected-client view, client peer picker.
- On desktop builds, the same web UI also opens in a **native window** automatically (skip with `--headless`).

## Modes at a glance

| Mode | Role | Privileges | Throughput |
|---|---|---|---|
| `server --nat-mode userspace` (default) | Server | None | Lower than kernel mode but fully featured (SACK, RACK, TLP, PRR, Window Scaling, Timestamps) |
| `server --nat-mode kernel` | Server | One-time root (`setcap` + `iptables` on Linux, runs as root on macOS) | Highest — kernel-managed TUN device + native NAT |
| `client` | Client | None | SOCKS5 proxy on `127.0.0.1:1080` over the call's data channel |
| `client --client-tun` | Client | `CAP_NET_ADMIN` (Linux) or root (macOS) | Above + system TUN at `10.8.0.2/24` so the whole host can route through the tunnel |

The default NAT mode is `userspace` (was `kernel` in the Node app). Pick `kernel` explicitly when you want max throughput and you've done the one-time setup.

---

## Quick start

### Build from source

```bash
git clone <repo>
cd BaleVPN
make build                                         # patches + cargo build --release
./bale-vpn-rust/target/release/bale-vpn            # opens a window
```

`make build` first regenerates `lktunnel-rust/vendor/` from patched crates (only if missing or out-of-date), then runs `cargo build --release`. If you'd rather call cargo directly, run `./patches/apply.sh` once per checkout first — cargo can't auto-trigger it because the patched paths are resolved before any build script runs.

For headless / server deployments (smaller binary, no tao/wry deps):

```bash
make build-headless
./bale-vpn-rust/target/release/bale-vpn server --nat-mode userspace
```

### Run from a release binary

Download a prebuilt binary from the repository's [Releases](../../../releases) page. Each release ships two variants per OS:

- `bale-vpn-gui-<os>-<arch>` — windowed desktop binary (use `--headless` to skip the window if you want HTTP-only).
- `bale-vpn-headless-<os>-<arch>` — HTTP-only, smaller, no system-webview dependencies. Right pick for server-only deployments.

```bash
chmod +x bale-vpn-*-*
./bale-vpn-gui-macos-aarch64                       # opens a window, default port 3001
./bale-vpn-headless-linux-x86_64 server            # server mode, userspace NAT
./bale-vpn-headless-linux-x86_64 client            # client mode, SOCKS5 only
```

### Command-line arguments

The CLI uses subcommands so per-mode flags only appear under the right branch:

```
bale-vpn                                         # no mode → UI picker prompts
bale-vpn server                                  # server, default userspace NAT
bale-vpn server --nat-mode kernel                # server, kernel TUN
bale-vpn client                                  # client, SOCKS5 only
bale-vpn client --client-tun                     # client, SOCKS5 + system TUN
bale-vpn --port 8080 server --nat-mode kernel    # top-level + per-mode args mix
bale-vpn --headless                              # GUI build, skip the window
```

| Argument | Scope | Default | Meaning |
|---|---|---|---|
| `--port <int>` | top-level | `3001` | HTTP UI port. Bound to `127.0.0.1`. |
| `--headless` | top-level | off | GUI builds only: skip the native window. |
| `--config-dir <path>` | top-level | dir of the binary | Where `.bale-vpn_config.json` lives. |
| `server --nat-mode kernel\|userspace` | server | `userspace` | Picks the server-side forwarding strategy. Kernel needs the one-time setup below. |
| `client --client-tun` | client | off | Open a local TUN at `10.8.0.2/24` alongside SOCKS5 for whole-host routing. |

If a mode subcommand isn't passed, the daemon parks at startup and the UI shows a **mode picker** (Client / Server). Once chosen, the selection is persisted in the config file; the picker doesn't show again on subsequent runs. Pinning a mode via the subcommand suppresses the picker.

The web UI binds to **`127.0.0.1` only** — it's never reachable from another machine. For a headless server, use SSH local port forwarding:

```bash
ssh -L 3001:127.0.0.1:3001 user@your-server
```

then open `http://localhost:3001` in your local browser.

---

## Kernel-TUN one-time setup (server mode)

### Linux

```bash
# 1. Allow the binary to manage TUN interfaces without running as root.
sudo setcap cap_net_admin+eip ./target/release/bale-vpn

# 2. Enable IPv4 forwarding (and make it survive reboots).
sudo sysctl -w net.ipv4.ip_forward=1
echo 'net.ipv4.ip_forward = 1' | sudo tee /etc/sysctl.d/99-bale-vpn.conf

# 3. NAT the tunnel pool out the host's real interface. The Rust
#    server uses a per-client /24 inside 10.8.0.0/16, so the
#    MASQUERADE rule covers the whole /16.
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/16 -j MASQUERADE
```

Then run:

```bash
./target/release/bale-vpn server --nat-mode kernel
```

### macOS

macOS uses `pf` (Packet Filter) instead of iptables. Kernel-TUN mode runs as root:

```bash
# Enable IP forwarding (persistent):
sudo sysctl -w net.inet.ip.forwarding=1
echo 'net.inet.ip.forwarding=1' | sudo tee -a /etc/sysctl.conf

# Identify your WAN interface (usually en0 on WiFi):
route get default | grep interface

# Create a pf anchor. Replace <wan> with your interface (e.g. en0):
cat <<'EOF' | sudo tee /etc/pf.anchors/balevpn
nat on <wan> from 10.8.0.0/16 to any -> (<wan>)
pass on utun0
pass on utun1
EOF

# Wire it into the main pf config:
echo 'nat-anchor "balevpn"'                                | sudo tee -a /etc/pf.conf
echo 'rdr-anchor "balevpn"'                                | sudo tee -a /etc/pf.conf
echo 'anchor "balevpn"'                                    | sudo tee -a /etc/pf.conf
echo 'load anchor "balevpn" from "/etc/pf.anchors/balevpn"' | sudo tee -a /etc/pf.conf

# Reload + enable pf:
sudo pfctl -f /etc/pf.conf
sudo pfctl -e

# Run as root (utun needs the PF_SYSTEM control socket):
sudo ./target/release/bale-vpn server --nat-mode kernel
```

macOS forces `utun*` naming — the daemon's `bale<K>` hint is ignored; check the `utun: opened utunN ...` log line for the actual name.

### Windows

Kernel TUN isn't supported on Windows yet. Use userspace NAT.

```cmd
bale-vpn.exe server --nat-mode userspace
```

### Userspace NAT (any OS, no setup)

```bash
./target/release/bale-vpn server --nat-mode userspace
```

### What the server does on startup

1. Loads the saved Bale `access_token` (and persisted allow-list / block-list / max-clients) from `<binary-dir>/.bale-vpn_config.json`.
2. If kernel-TUN mode: pre-flight opens a probe TUN so privilege failures surface at startup. On each accepted call, allocates a slot K (0..253) and opens `bale<K>` at `10.8.K.1/24` (Linux) or a fresh `utunN` (macOS). The MASQUERADE / pf rule above covers the `/16`.
3. Starts the local web UI on the chosen port.
4. Connects to the Bale signaling WebSocket and waits for incoming calls.

When a client connects, it gets `10.8.K.2/24` and routes all its traffic into the tunnel. Up to 254 clients can connect simultaneously in kernel mode (one `/24` slot each); userspace mode is bounded by the configurable Max-clients setting (default 5, max 253).

### Limitations

- IPv4 only. IPv6 packets from the client are explicitly dropped (the client falls back to IPv4 quickly via ICMPv6 Destination Unreachable).
- Mode (`server` vs `client`) and NAT mode (`kernel` vs `userspace`) are fixed at startup. Restart to change them.

---

## Web UI

The UI lives at `http://localhost:<port>`. On GUI builds it also opens automatically in a native window.

1. **Mode picker** — shown on first run when no mode is pinned via CLI. Pick **Client** or **Server**. The choice persists.

2. **Sign in** — phone number → SMS code, or paste an `access_token` JWT cookie from `web.bale.ai`. The token is persisted server-side in `<binary-dir>/.bale-vpn_config.json` (mode 0600); the browser only ever sees a `tokenSet` boolean, never the JWT itself.

   <p align="center"><img src="screens/07-node-login.png" alt="Sign-in screen" width="640"></p>

3. **Server mode** — once signed in, the UI shows:
   - **Connected clients** with live throughput, byte counters, per-client uptime, and a Disconnect button.
   - **Pending requests** — yellow rows for incoming calls from contacts who aren't on the allow-list. Each row has **Accept once / Allow always / Reject** buttons. Reject is sticky — it blacklists the caller (undo via the **Blocked callers** list).

     <p align="center"><img src="screens/08-server-client-pending.png" alt="Server: pending request" width="640"></p>

   - **Allowed callers** and **Blocked callers** lists, with per-row Remove / Unblock buttons.

     <p align="center"><img src="screens/09-server-client-connected.png" alt="Server: connected client" width="640"></p>

   - **Max clients** setting (1–253) capping simultaneous connections.

4. **Client mode** — once signed in, the UI shows:
   - **Server peer** picker (dropdown of your Bale contacts plus a "find peer by phone" lookup).
   - **SOCKS5 port** (default 1080) — the local listener.
   - **Connect / Disconnect** button. The daemon starts **idle** on launch — no auto-dial even if a peer is saved. Press **Connect** to place the call. Press **Disconnect** to end it.
   - Live status: "Connecting…" → throughput counters once the room is established.

   The WebSocket indicator follows the rule engine, not the UI:
   - **connected** — WS handshake done, ready for RPCs (no active call).
   - **paused (in call)** — the rule engine has intentionally pulled the WS down because a client call is up. Push channel isn't needed mid-call; it'll auto-resume when the call ends. Shown in calm green, not red.
   - **connecting…** — only when the run loop is actively trying to handshake / reconnect, NOT when intent is set but the engine is deliberately keeping it down.
   - **disconnected** — no token, or user logged out.

   <p align="center"><img src="screens/10-client-peer-selection.png" alt="Client: peer selection" width="640"></p>
   <p align="center"><img src="screens/11-client-connected.png" alt="Client: connected" width="640"></p>

5. **Logout** clears the saved token and stops the active tunnel; the mode is also cleared unless it was pinned via CLI.

---

## Server admission control

Every incoming call from a contact who isn't on the allow-list lands in a **pending** queue.

- **Accept once** handles this single call but doesn't persist the caller. Future calls land in pending again.
- **Allow always** adds the caller to the allow-list (persisted under the `admission` key of the config file). Future calls from the same caller auto-accept.
- **Reject** is sticky — sends `DiscardCall` so the caller's tunnel tears down immediately *and* adds the caller's id to the **block-list**. Future calls from this id are silently rejected (no notification, no pending entry). Undo via the **Blocked callers** list (per-row Unblock button).
- Pending entries auto-reject after 60 s. The timeout does **not** blacklist — only an explicit Reject does.

The allow-list and block-list are mutually exclusive — an explicit Allow / Reject moves a caller between them.

A **Max clients** setting (1–253, default 5) caps the number of simultaneously-connected callers. New calls beyond the cap are silently dropped without blacklisting; the caller can try again later when a slot frees.

All three (admission, blacklist, max-clients) are persisted to disk on every change and loaded at daemon startup.

---

## Client mode details

In client mode, the daemon places one call to the configured server peer. The resulting LiveKit data channel carries QUIC, and the local SOCKS5 listener forwards every accepted connection over QUIC to the server, which dials it on the real internet.

- **SOCKS5 only** (`bale-vpn client`): the SOCKS5 listener binds `127.0.0.1:1080` by default. Configure individual apps (browser, curl, etc.) to use this proxy.
- **SOCKS5 + system TUN** (`bale-vpn client --client-tun`): in addition to SOCKS5, opens a TUN device at `10.8.0.2/24`. You're responsible for the routing — typically:

  ```bash
  # Linux:
  sudo ip route add default dev bale-c0
  # macOS (use the utunN name the daemon logged):
  sudo route add default -interface utun5
  ```

  Undo by replacing `add` with `delete`. Without these routes, the TUN device exists but the system doesn't send traffic through it.

The client reconnects when the LK side drops, but a permanent disconnect (the server peer leaves the room) tears the session down immediately so the UI flips back to the Connect prompt without the 30 s+ wait you'd see if we relied only on Bale's WS event.

After a failed dial (e.g., Bale's `InvalidPeer` response, server offline, etc.), the daemon does **not** retry — the configured peer is cleared and the UI shows the Connect button again. Pick a different peer or fix the underlying issue, then press Connect once more.

---

## Authentication

Two ways to get an `access_token` JWT into the app:

1. **Phone OTP via the UI** — enter your phone, type the SMS code; the binary fetches the cookie via the standard `web.bale.ai/set-cookie/?jwt=…` flow and persists it in `<binary-dir>/.bale-vpn_config.json` (mode 0600). Recommended.
2. **Paste a token** — copy the `access_token` cookie from a logged-in `web.bale.ai` Chrome session (DevTools → Application → Cookies) and paste it into the textarea on the UI.

WebSocket close code `4401` means the token expired; sign in again.

---

## Config file

Single JSON file at `<binary-dir>/.bale-vpn_config.json`, mode 0600, atomic-rename writes. Field shape matches the Node app so an existing install can be replaced with the Rust binary without re-auth or losing server-side state.

```json
{
  "token":       "<bale access_token JWT>",
  "mode":        "server",
  "natMode":     "userspace",
  "port":        3001,
  "peerId":      "1234567890",
  "socks5Port":  1080,
  "admission":   ["1234567890"],
  "blacklist":   [],
  "maxClients":  5
}
```

`mode` is `null` until the user picks via the UI (or `--mode` is passed via CLI).

---

## GUI build

`cargo build --release` produces a windowed binary on every OS. On macOS the desktop window opens automatically with:

- Edit menu wired to standard shortcuts (Cmd+C / Cmd+V / Cmd+X / Cmd+A / Cmd+Z / Cmd+⇧Z).
- Hide / Quit items in the application menu.
- Right-click → **Inspect Element** for the webview (devtools enabled).
- Ctrl+C in the launching terminal closes the window cleanly (signal handler is wired to the wry event loop, drains the daemon for up to 3 s before exiting).

To skip the window on a GUI build, add `--headless`. For server deployments build with `--no-default-features` to drop the `tao` / `wry` deps entirely.

---

## Privacy & encryption

The data link between client and server is encrypted with DTLS, so traffic is opaque to passive observers on the network. **However**, Bale's LiveKit servers act as the SFU and have access to the plaintext data flowing through the call — they can see your destinations and any unencrypted application payload. Use TLS at the application layer (HTTPS, encrypted DNS, etc.) and treat this tunnel like a VPN whose operator you don't fully trust.

See the [main README](../README.md#-privacy--encryption) for a fuller note.
