# Android app — user guide

The Android app is a Kotlin Multiplatform VPN app that runs in either **client mode** (routes the device's traffic through a peer) or **server mode** (auto-answers calls from peers and bridges their traffic to the open internet via an in-process userspace TCP/IP stack). No root, no kernel TUN, no `iptables`.

> Persian / فارسی: [راهنمای کاربری اپلیکیشن اندروید](android-fa.md)

### Why no root?

In **server** mode the app implements its **own TCP/IP stack inside the process** and does NAT entirely in userspace — incoming IP packets from a peer are terminated, routed, and forwarded to the open internet without touching the kernel's networking stack. That's why server mode runs from a plain APK on any phone, with no root and no special privileges.

This was a deliberate design choice for **user convenience** — anyone can install and run the server. The trade-off is performance: a rooted device using the kernel's TCP/IP stack and a real TUN device would be measurably faster. If you have access to a Linux box, the [Linux Node TUN VPN server](node-en.md#linux-vpn-server-tun--full-ip-routing) is the high-throughput option (kernel-level NAT instead of userspace).

---

## What you need

- **Two Android devices**, both signed in to Bale.
- Each device must have the other in its Bale **contact list** — Bale only allows calls between mutual contacts.
- One device with a working internet connection (the **server**); one that wants to use it (the **client**).


## 1 · Install and sign in

Download the latest APK from the repository's [Releases](../../../releases) page and install it. Open the app, enter your phone number, confirm the SMS code, and sign in. **Do this on both devices.**

<p align="center"><img src="screens/01-login.jpg" alt="Login screen" width="320"></p>

## 2 · Client device (consumes internet)

1. Toggle the mode switch to **Client**.
2. Tap **Select Peer** and pick the contact that will act as the server.
3. Tap **Start VPN**. Android shows a system VPN-permission dialog — **Allow**.
4. Done. All traffic from this device now flows through the server. Live throughput appears below the button.

<p align="center"><img src="screens/02-client-mode.jpg" alt="Client mode" width="320"></p>

<p align="center"><img src="screens/03-client-mode-connect-vpn.jpg" alt="VPN connect prompt" width="320"></p>

To disconnect, press **Disconnect**.

## 3 · Server device (provides internet)

1. Toggle the mode switch to **Server**. The foreground service starts automatically and waits for incoming calls.
2. (Optional) **Contacts** — add anyone else by phone number who should be able to connect to you.

<p align="center"><img src="screens/04-server-mode.jpg" alt="Server mode" width="320"></p>

### Approving callers (allow / block lists)

When someone calls in for the first time you'll get a notification. Open the app and you'll see a pending row with two buttons:

- **Allow** — accepts the caller and adds them to the **allow-list**. Future calls from this ID connect without prompting.
- **Reject** — disconnects them and adds the caller ID to the **block-list**. Future calls from that ID are auto-rejected silently (no notification, no prompt). To undo this, open **Manage Clients** (described below) and press **Unblock** on their row.

The two lists are mutually exclusive — explicit Allow/Reject moves a caller between them. Pending requests auto-reject after 60 seconds (without blacklisting; the caller can retry later).

<p align="center"><img src="screens/05-pending-request.jpg" alt="Pending request notification" width="320"></p>

### Manage Clients

Rows are grouped (with divider lines) into **connected**, **allowed offline**, and **blocked**. Each row shows the caller's name, ID, an inline `· Allowed` / `· Blocked` membership tag, and — for connected clients — live throughput and totals.

Per-row actions:
- **Disconnect** — kicks the current session only. There's no auto-retry from the client app — the caller has to manually re-initiate from their side. If they're still on the allow-list, that new call is auto-accepted.
- **Remove** — drops them from the allow-list and kicks the active session. Future calls go to the pending notification (no auto-accept), but the caller isn't blocked.
- **Limit** — set per-direction kbps cap, 1–1000. Default is 500 kbps. Persists for admitted callers; session-only otherwise.
- **Stats** — opens a per-client detail screen with live RTT, retransmits / TLP fires / SACK losses, congestion-window averages, TCP flow-state breakdown, and incoming-queue depth.
- **Unblock** — only on blocked rows; removes the caller from the block-list.

Action-bar overflow:
- **Max clients…** — cap on simultaneously-connected callers (1–253, default 5). New calls above the cap are dropped without blacklisting.
- **Debug logs ON/OFF** — verbose TCP/IP diagnostics in logcat.

<p align="center"><img src="screens/06-manage-clients.jpg" alt="Manage clients" width="320"></p>

All settings (allow-list, block-list, per-caller caps, max-clients) persist in `SharedPreferences("config")` across app restarts and device reboots. Clear them via Settings → Apps → Storage → Clear data.

To stop the server, press the **Disconnect** button on the server screen. This kicks every active client and stops accepting new incoming calls. Press **Connect** to resume.

## 4 · Sharing the tunnel with other devices (optional)

The Android client only routes its own traffic. To share the same internet with a laptop or another phone, install a HTTP/SOCKS proxy app on the client device (e.g., **EveryProxy**), turn the client device into a Wi-Fi hotspot (or join the same Wi-Fi), then point the other devices at the proxy address shown by EveryProxy.

## Notes

- Bale only allows calls between mutual contacts — both phones must save the other's number.
- The app needs no root and no special privileges.
- In server mode, the device must stay on with the app in the foreground or background — the foreground service keeps it alive.
- Bale's servers see the connection as a long voice call. **They can see your destinations and any unencrypted payload** — see the [privacy note](../README.md#-privacy--encryption) in the main README.

