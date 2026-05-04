# bale

Reverse-engineered tooling for the **Bale** messenger (`web.bale.ai`) — extracts the protobuf services from Bale's minified webpack bundles and uses them to build a peer-to-peer VPN that tunnels traffic over Bale's WebRTC voice-call infrastructure.

A connected client picks any of their Bale contacts to act as a tunnel server. The TCP/IP traffic rides on the LiveKit data channel that Bale uses for voice-call media — to Bale's servers it looks like a long voice call.

---

## What's in here

| Component | Path | Role |
|---|---|---|
| Asset downloader | `download.py` | grabs the Bale web app bundles into `static/` |
| Proto extractor | `extract_proto.py` | parses webpack chunks → `.proto` files into `bale-node/proto/` |
| Node.js package | `bale-node/` | WebSocket client + SOCKS5 / WebRTC tunnel + web UI; can run as VPN server (Linux, with TUN) |
| Android app (Kotlin Multiplatform) | `bale-android/` | dual-mode VPN: **client** (route this device's traffic) or **server** (host other peers' traffic via an in-process userspace TCP/IP stack — no root, no kernel TUN) |
| Static assets snapshot | `static/`, `*.html` | downloaded copy of `web.bale.ai` |

---

## Architecture

```
       ┌────────────────────────────────────────────────────────────┐
       │                  Bale signaling (WebSocket)                │
       │              wss://next-ws.bale.ai/ws/                     │
       └──┬───────────────────────────────────────────────────┬─────┘
          │                                                   │
          ▼                                                   ▼
  ┌───────────────┐    LiveKit "voice call"         ┌───────────────┐
  │  VPN client   │   raw IP packets in the         │  VPN server   │
  │ (Android app  │   data channel                  │ (Android app  │
  │  client mode  │ ◄─────────────────────────────► │  server mode  │
  │   or browser) │                                 │  or Linux Node)│
  └───────────────┘                                 └───────┬───────┘
                                                            │
                                                            ▼
                                                       open internet
```

Both ends speak the **Bale signaling WS** to set up calls, then exchange traffic on the **LiveKit data channel** that Bale provisions for the call. No traffic transits Bale's servers other than what the data channel routes through TURN when peers can't connect directly.

---

## Easiest setup: just use the Android app

Install the APK on **two Android devices** (yours + whoever you want to share with) — both signed in to Bale and **already in each other's contacts** (Bale only allows calls between contacts). One device acts as the *server / internet-giver* — it stays on a working internet connection and bridges traffic onto the open net. The other acts as the *client* — it registers as the system VPN and routes its own traffic through the server over the Bale call channel.

```
   Client device                                        Server device
   (consumes internet)                                  (provides internet)
   ┌─────────────────┐                                  ┌─────────────────┐
   │ Bale app, mode  │                                  │ Bale app, mode  │
   │     CLIENT      │  ◄─── data via LiveKit ───────►  │     SERVER      │
   │ Start VPN ──┐   │      (looks like a voice call)   │ (auto-answers)  │
   └─────────────┼───┘                                  └────────┬────────┘
                 │                                               │
                 │  all traffic from this device                 ▼
                 └────────────────────────────────────────►  open internet
```

1. **Server device** — open the app, log in, toggle to **Server**. The foreground service starts and waits for incoming calls. Optionally tweak per-client bandwidth caps in *Manage Clients* (default 300 kbps, max 500 kbps).
2. **Client device** — open the app, log in, toggle to **Client**, tap *Select Peer* and pick the server's contact, then *Start VPN* and grant the system-VPN permission. Done — all traffic on the client device now exits via the server's internet.

Either side can disconnect by toggling modes or pressing the obvious buttons. Pending connection requests (when the caller isn't in the server's allow-list yet) raise a notification on the server device — the user accepts or rejects per call.

**Get the APK**: download the latest release from this repository's [Releases](../../releases) page. No Play Store, no signed root, no special privileges — just install and run.

The rest of this README is for users who want to extract the protos themselves, run the Node.js side, or hack on the codebase.

---

## Quick start

### 1 · Get the protos

```bash
python3 download.py
python3 extract_proto.py
```

This populates `static/` and writes `.proto` files into `bale-node/proto/`. Both scripts need an `access_token` cookie from `web.bale.ai` hardcoded inside (see [CLAUDE.md](CLAUDE.md) → *Authentication*).

### 2 · Node.js side

```bash
cd bale-node
npm install
npm run build         # compile .proto → src/messages.js
npm run ui            # web UI at http://localhost:3001
```

Then open the UI, select a Bale contact, and click **Activate** under "⚡ Tunnel proxy" to start a SOCKS5 proxy on `localhost:1080` that tunnels through them.

To run the Node side as a **VPN server** (Linux only, requires a TUN device):

```bash
sudo setcap cap_net_admin+eip $(which node)
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE
node src/ws-client.js server
```

### 3 · Android app

Open `bale-android/` in Android Studio.

The app supports SMS authentication, a contacts picker, and **two operating modes** selected via a single toggle:

- **Client mode** — registers as the system VPN, routes the device's traffic through the selected Bale contact. Explicit Start/Disconnect button.
- **Server mode** — implicit: as soon as the toggle is on server, a foreground service starts and auto-answers calls from peers, bridging their traffic to the open internet via a fully-userspace TCP/IP stack. No root, no kernel TUN, no iptables. Toggling back to client stops the server.

The TUN read loop uses `Os.poll(2) + Os.read(2)` directly (the VpnService TUN fd is opened in `O_NONBLOCK` mode on modern Android, which `FileInputStream.read` mishandles).

In server mode there's a **Manage Clients** screen that shows every connected peer with live throughput, per-client bandwidth caps (default 300 kbps, max 500 kbps), and an admission allow-list so you decide who's allowed to connect. Pending requests are auto-rejected after 60 s if the user doesn't respond. The WebSocket Disconnect button explicitly disconnects every active client (sending `discardCall` over the still-alive WS so peers tear down immediately); transient WS drops are handled silently by an internal 5 s reconnect loop and don't affect connected clients.

The server tab also has a **Contacts** screen (Bale only allows calls between contacts, so anyone who wants to connect must already be in your contact list). You can add new contacts by phone number and remove existing ones from there.

---

## Mode comparison

|  | Node.js server | Android server |
|---|---|---|
| OS | Linux only | Android only |
| Privileges | needs `setcap cap_net_admin` + iptables MASQUERADE | none — runs as ordinary user |
| TCP/IP | kernel TUN device (`bale0`) | in-process userspace stack ([`PacketProcessor.kt`](bale-android/shared/src/androidMain/kotlin/ai/bale/proxy/PacketProcessor.kt)) |
| Per-client controls | basic stats | per-client live stats (kbps), bandwidth caps, throttle indicator, admission allow-list, debug log toggle |
| Pending-call handling | auto-accept | allow / reject notification, deduplicated per caller, 60 s auto-reject |
| Setup | one-shot iptables rule, then run | install APK, flip toggle to server |

The Android userspace stack implements a fairly complete modern TCP — full state machine, MSS option, window scaling (RFC 7323), SACK + RFC 6675 IsLost loss detection, RFC 8985 Tail Loss Probe, NewReno step 5, Karn's algorithm, SWS-avoidance, deadline-based timers, fragment reassembly with DoS bounds, and per-direction token-bucket rate limiting with proper backpressure (download → TCP read pause; upload → IP packet hold). See the file header in `PacketProcessor.kt` for the full feature list.

---

## Authentication

The Bale WS uses the `access_token` JWT cookie scoped to `.bale.ai`. To refresh:

1. Open `web.bale.ai` in Chrome.
2. DevTools → Application → Cookies → `https://web.bale.ai` → copy `access_token`.
3. Paste it into the `ACCESS_TOKEN` constant in `download.py` and `bale-node/src/ws-client.js`.

WebSocket close code `4401` means the token has expired. Android app users authenticate via SMS OTP and the access token is fetched server-side — no manual update needed there.

---

## Documentation

[**CLAUDE.md**](CLAUDE.md) is the deep-dive: wire formats, the extracted protobuf services, the SOCKS5-over-Bale-message protocol, the LiveKit binary framing, and the full Android server-mode architecture (PacketProcessor, admission control, bandwidth limits, Manage Clients UI).

---

## Status

Active research / experimentation. APIs and on-disk formats may change without notice.

---

## Disclaimer

This is an independent reverse-engineering **research project**. There is no commercial relationship with, and no endorsement by, Bale or any of its operators. The code is published for educational purposes — to document how a closed-source messenger's WebRTC voice-call infrastructure can be repurposed as a generic data tunnel, and to make the wire formats and protocols involved legible to other researchers.

**You are responsible for how you use this software.** The author(s):

- make no warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, security, or compliance with any local law or regulation;
- accept no liability for any damages, claims, costs, or losses arising from use, misuse, or inability to use this software;
- accept no responsibility for any violation of Bale's terms of service, of any applicable telecommunications, privacy, or computer-access laws, or of any third-party rights, that may arise from running this software.

Only use it on accounts and infrastructure you own or have explicit permission to test against. Do not use it to circumvent access controls you have not been authorised to bypass, to evade lawful network policy, or to harm any third party.

If you are unsure whether your intended use is lawful in your jurisdiction, consult a qualified lawyer before proceeding.

---

## License

Released under the [MIT License](LICENSE). See the `LICENSE` file at the root of this repository for the full text.

In short: you're free to use, modify, and redistribute the code for any purpose, including commercial, *provided* the copyright notice and license text are preserved. The software is provided "as is", without warranty of any kind. The disclaimer above applies in addition to (not in place of) the license terms.
