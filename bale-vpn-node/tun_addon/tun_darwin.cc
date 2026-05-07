// macOS utun TUN device — opens an unused utunN device via the kernel
// control protocol. Counterpart to tun.cc on Linux. Address assignment and
// NAT setup are done from JS via shell-out (ifconfig / sysctl / pfctl)
// because the BSD ioctl struct layouts differ from Linux's and there's no
// equivalent of `setcap cap_net_admin` on macOS — server mode runs as root
// either way.
//
// Note: utun packets carry a 4-byte address-family prefix (AF_INET = 2 in
// network byte order) on every read and write. tun.js handles that.

#include <napi.h>
#include <sys/socket.h>
#include <sys/sys_domain.h>
#include <sys/kern_control.h>
#include <sys/ioctl.h>
#include <net/if.h>
#include <net/if_utun.h>
#include <unistd.h>
#include <cerrno>
#include <cstring>

Napi::Value OpenTun(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();
    // Argument is ignored — kernel picks the unit number.
    int fd = socket(PF_SYSTEM, SOCK_DGRAM, SYSPROTO_CONTROL);
    if (fd < 0) {
        Napi::Error::New(env, std::string("socket(PF_SYSTEM): ") + strerror(errno))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    struct ctl_info ci;
    memset(&ci, 0, sizeof(ci));
    strncpy(ci.ctl_name, UTUN_CONTROL_NAME, sizeof(ci.ctl_name));
    if (ioctl(fd, CTLIOCGINFO, &ci) < 0) {
        int e = errno; close(fd);
        Napi::Error::New(env, std::string("CTLIOCGINFO: ") + strerror(e))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    struct sockaddr_ctl sc;
    memset(&sc, 0, sizeof(sc));
    sc.sc_id      = ci.ctl_id;
    sc.sc_len     = sizeof(sc);
    sc.sc_family  = AF_SYSTEM;
    sc.ss_sysaddr = AF_SYS_CONTROL;
    sc.sc_unit    = 0;   // 0 → kernel picks the next free utun unit

    if (connect(fd, (struct sockaddr *)&sc, sizeof(sc)) < 0) {
        int e = errno; close(fd);
        Napi::Error::New(env, std::string("connect(utun): ") + strerror(e))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    char ifname[IF_NAMESIZE] = {0};
    socklen_t ifnameLen = sizeof(ifname);
    if (getsockopt(fd, SYSPROTO_CONTROL, UTUN_OPT_IFNAME, ifname, &ifnameLen) < 0) {
        int e = errno; close(fd);
        Napi::Error::New(env, std::string("UTUN_OPT_IFNAME: ") + strerror(e))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    Napi::Object out = Napi::Object::New(env);
    out.Set("fd",   Napi::Number::New(env, fd));
    out.Set("name", Napi::String::New(env, ifname));
    return out;
}

Napi::Value CloseTun(const Napi::CallbackInfo &info) {
    if (info.Length() >= 1 && info[0].IsNumber())
        close(info[0].As<Napi::Number>().Int32Value());
    return info.Env().Undefined();
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("openTun",  Napi::Function::New(env, OpenTun));
    exports.Set("closeTun", Napi::Function::New(env, CloseTun));
    return exports;
}

NODE_API_MODULE(tun, Init)
