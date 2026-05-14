package ai.bale.proxy

import java.net.Inet4Address
import java.net.NetworkInterface

/** Best-effort local IPv4 address that another device on the LAN could use to
 *  reach this device. Prefers RFC1918 (private) ranges since SOCKS5 clients
 *  are typically on the same Wi-Fi/hotspot. Falls back to the first non-
 *  loopback IPv4 if no private range is present (e.g., the device only has
 *  cellular and no LAN). Returns null if no usable address is found. */
fun getLocalLanIpv4(): String? {
    return try {
        val ifaces = NetworkInterface.getNetworkInterfaces() ?: return null
        var fallback: String? = null
        for (iface in ifaces) {
            if (iface.isLoopback || !iface.isUp || iface.isVirtual) continue
            // Skip the TUN interface (tun0 / our VPN) so we don't return its
            // 10.8.0.2 — that's not reachable from off-device.
            val name = iface.name ?: ""
            if (name.startsWith("tun") || name.startsWith("ppp")) continue
            for (addr in iface.inetAddresses) {
                if (addr !is Inet4Address || addr.isLoopbackAddress || addr.isLinkLocalAddress) continue
                val ip = addr.hostAddress ?: continue
                if (isPrivateIpv4(ip)) return ip
                if (fallback == null) fallback = ip
            }
        }
        fallback
    } catch (_: Exception) { null }
}

private fun isPrivateIpv4(ip: String): Boolean {
    val parts = ip.split(".").mapNotNull { it.toIntOrNull() }
    if (parts.size != 4) return false
    val a = parts[0]; val b = parts[1]
    return when {
        a == 10                          -> true   // 10.0.0.0/8
        a == 172 && b in 16..31          -> true   // 172.16.0.0/12
        a == 192 && b == 168             -> true   // 192.168.0.0/16
        else                             -> false
    }
}
