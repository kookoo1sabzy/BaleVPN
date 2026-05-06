# Bale VPN

A peer-to-peer VPN that tunnels IP traffic over the **Bale** messenger's voice-call infrastructure (`web.bale.ai`). One device runs as the *server* (provides internet); another as the *client* (consumes it). To Bale's servers the link looks like a long voice call between two contacts.

The point: when one person has a working / uncensored connection and the other doesn't, the second person can route their traffic through the first — without any extra server, account, payment, or signup. Just install the app on two phones (or a laptop on the server side), make sure the two accounts have each other in their contact list, and connect.

There is no commercial relationship with Bale.

<div dir="rtl">

## دربارهٔ پروژه

این پروژه یک VPN نقطه‌به‌نقطه است که ترافیک IP را روی زیرساخت تماس صوتی پیام‌رسان **بله** عبور می‌دهد. یک دستگاه نقش *سرور* را دارد (اینترنت می‌دهد) و دستگاه دیگر نقش *کلاینت* را (اینترنت می‌گیرد). برای سرورهای بله این ارتباط شبیه یک تماس صوتی طولانی بین دو مخاطب به نظر می‌رسد.

هدف: وقتی یک نفر اینترنت سالم دارد و نفر دیگر نه، نفر دوم بدون هیچ سرور یا اشتراک اضافه‌ای می‌تواند ترافیکش را از طریق نفر اول رد کند. فقط کافی است هر دو طرف، هم در بله ثبت‌نام کرده باشند و هم یکدیگر را در فهرست مخاطبین داشته باشند.

این پروژه هیچ ارتباط تجاری‌ای با بله ندارد.

</div>

---

## ⚠️ Privacy & encryption

The LiveKit data channel is encrypted with **DTLS**, so traffic is opaque to passive observers on the network and to ISP middleboxes. **However, Bale's LiveKit server is the SFU/TURN node and has access to the plaintext of the data flowing through the call.** That means:

- Bale can see **which destinations you connect to** (IP and port, or hostname if your client sends one — see the [Node SOCKS5 doc](docs/node-en.md#configuring-a-browser-as-a-client) for DNS-leak avoidance).
- Bale can read the **contents of any traffic that isn't itself end-to-end encrypted**. If you only browse `https://` sites, the payload is opaque to them; if you access plaintext HTTP / DNS / FTP / etc. through the tunnel, they can read it.

Treat this tunnel like a corporate VPN whose operator you don't fully trust — fine for IP-level reachability (uncensoring), **not adequate as an anonymity or end-to-end privacy layer**. Use TLS at the application level (HTTPS, encrypted DNS, etc.).

<div dir="rtl">

### ⚠️ امنیت و رمزنگاری

کانال دادهٔ LiveKit با **DTLS** رمزنگاری می‌شود؛ بنابراین ترافیک از دید ناظرهای مسیر و میدلباکس‌های ISP پنهان است. **اما سرور LiveKit بله نقش SFU/TURN را بازی می‌کند و به دادهٔ رمزگشایی‌شدهٔ تماس دسترسی دارد.** یعنی:

- بله می‌تواند ببیند **شما به چه مقصدی وصل می‌شوید** (IP و پورت، یا نام میزبان اگر کلاینت شما نام بفرستد — برای جلوگیری از نشت DNS به [راهنمای SOCKS5 در نسخهٔ Node](docs/node-fa.md#تنظیم-مرورگر-بهعنوان-کلاینت) مراجعه کنید).
- بله می‌تواند **محتوای هر ترافیکی را که خودش رمزنگاری انتها به انتها نشده** بخواند. اگر فقط روی `https://` بگردید، محتوا برایشان مبهم است؛ اما اگر از پروتکل‌های متنی (HTTP/DNS/FTP/…) استفاده کنید، قابل خواندن خواهد بود.

این تونل را مثل VPN شرکتی‌ای ببینید که گرداننده‌اش را کاملاً نمی‌شناسید — برای دسترسی IP (دور زدن مسدودی) خوب است، **اما برای ناشناسی یا حریم خصوصی انتها به انتها کافی نیست**. در سطح برنامه از TLS (HTTPS، DNS رمزنگاری‌شده و…) استفاده کنید.

</div>

---

## Supported features

| Role | Platform | SOCKS5 proxy | VPN (full IP routing) |
|---|---|:---:|:---:|
| Client | Node.js — Linux / macOS / Windows | ✓ | — |
| Client | Android | — | ✓ &nbsp;*(kernel TUN via `VpnService`)* |
| Server | Node.js — Linux / macOS / Windows | ✓ | — |
| Server | Node.js — **Linux** | ✓ | ✓ &nbsp;*(kernel TUN; needs `setcap cap_net_admin` + `iptables` MASQUERADE)* |
| Server | Android | — | ✓ &nbsp;*(in-process userspace TCP/IP NAT; no root, no kernel TUN, no iptables)* |

> **Easiest start: Android server + Android client.** Two phones, install the APK on both, sign in to Bale, flip the toggle. No root, no command line, no firewall rules.
>
> **Most efficient: Linux Node TUN VPN server + Android client.** On Linux the kernel does the IP forwarding (TUN device) and the NAT (`iptables` MASQUERADE rule) — both substantially faster than the userspace alternatives. The Android client connects via the standard `VpnService` for a fully-integrated system VPN.

The Node.js side is platform-agnostic for **SOCKS5** in both directions — pick any OS for either end. Full **VPN** routing on the Node side is Linux-only because it relies on the kernel TUN device and `iptables`-managed NAT. The Android app does not expose a SOCKS5 mode; it always uses the system VPN.

<div dir="rtl">

> **شروع آسان: سرور اندرویدی + کلاینت اندرویدی.** فقط دو گوشی؛ APK را روی هر دو نصب کنید، در بله وارد شوید، و کلید حالت را جابه‌جا کنید. نه روت، نه خط فرمان، نه قواعد دیوارهٔ آتش.
>
> **پربازده‌ترین: سرور TUN روی Node لینوکسی + کلاینت اندرویدی.** روی لینوکس، خودِ هستهٔ سیستم‌عامل فوروارد IP را انجام می‌دهد (دستگاه TUN) و NAT را هم با قاعدهٔ `iptables` MASQUERADE اعمال می‌کند — هر دو مسیر به‌مراتب سریع‌تر از جایگزین‌های فضای کاربری هستند. کلاینت اندرویدی هم از طریق `VpnService` استاندارد به یک VPN کاملاً یکپارچهٔ سیستمی وصل می‌شود.

نسخهٔ Node برای **SOCKS5** در هر دو جهت مستقل از سیستم‌عامل است — می‌توانید برای هر طرف هر OS را انتخاب کنید. ولی **مسیریابی کامل VPN** در سمت Node فقط روی لینوکس کار می‌کند، چون به دستگاه TUN هسته و NAT مدیریت‌شده با iptables متکی است. اپلیکیشن اندروید حالت SOCKS5 ندارد و همیشه از VPN سیستمی استفاده می‌کند.

</div>

---

## Detailed guides

Per-platform setup, manuals, and screenshots:

| Platform | English | فارسی |
|---|---|---|
| **Android** (client and userspace-TCP/IP server) | [Android user guide](docs/android-en.md) | [راهنمای کاربری اپلیکیشن اندروید](docs/android-fa.md) |
| **Node.js** — Linux / macOS / Windows (SOCKS5 client + server, Linux TUN VPN server) | [Node.js application guide](docs/node-en.md) | [راهنمای نسخهٔ Node](docs/node-fa.md) |

For protocol internals, wire formats, and architecture details: [CLAUDE.md](CLAUDE.md).

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
  │  (Android,    │   data channel (DTLS)           │  (Android, or │
  │   or Node     │ ◄─────────────────────────────► │   Node Linux  │
  │   SOCKS5)     │                                 │   TUN, or     │
  │               │                                 │   Node SOCKS5)│
  └───────────────┘                                 └───────┬───────┘
                                                            │
                                                            ▼
                                                       open internet
```

Both ends speak the **Bale signaling WS** to set up the call, then exchange traffic on the **LiveKit data channel** that Bale provisions for that call. The Bale WS is dropped after signaling (and brought back automatically when needed); the LiveKit data channel carries all the steady-state IP / TCP traffic.

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

Released under the [MIT License](LICENSE). The software is provided "as is", without warranty of any kind. The disclaimer above applies in addition to (not in place of) the license terms.
