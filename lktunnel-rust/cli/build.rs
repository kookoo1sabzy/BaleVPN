//! macOS-only link tweak: force-load the entire `libwebrtc.a` so the
//! ObjC categories inside it survive dead-strip.
//!
//! webrtc-sys-build emits `cargo:rustc-link-arg=-ObjC`, which is the
//! standard incantation to load all ObjC source files from an archive.
//! In practice the macOS prebuilt's `AbslStringViewUtils.o` (which
//! defines `+[NSString stringForAbslStringView:]`) ends up dead-
//! stripped anyway, and `Room::connect` hits an unrecognized-selector
//! crash the first time `RTCDefaultVideoEncoderFactory.supportedCodecs`
//! tries to format a codec name.
//!
//! Workaround: emit an explicit `-Wl,-force_load,<path>` that names
//! the prebuilt archive. `-force_load` is unambiguous — every member
//! gets pulled into the link, category .o's included.
//!
//! `-force_load` has one nasty side effect: libwebrtc.a ships three
//! protobuf code-generator object files (`cppgen_plugin.o`,
//! `protozero_plugin.o`, `main.o`) that each define `int main(...)`
//! for use as standalone build tools at WebRTC's own build time. With
//! `-force_load` they collide with the bin's own `fn main` and ld
//! errors with `duplicate symbol _main`. Strip those three out of a
//! working copy in OUT_DIR before force-loading.
//!
//! No-op on non-macOS targets (Linux / Android use their own
//! prebuilts where the issue doesn't reproduce).

fn main() {
    #[cfg(target_os = "macos")]
    {
        use std::path::PathBuf;
        use std::process::Command;

        let lib_dir = webrtc_sys_build::webrtc_dir().join("lib");
        let src = lib_dir.join("libwebrtc.a");
        if !src.exists() {
            println!("cargo:warning=cli/build.rs: libwebrtc.a not found at {} — \
                      relying on webrtc-sys's `-ObjC` flag; expect runtime \
                      crashes on PeerConnectionFactory construction",
                     src.display());
        } else {
            let out_dir = PathBuf::from(std::env::var("OUT_DIR").unwrap());
            let dst = out_dir.join("libwebrtc-stripped.a");
            std::fs::copy(&src, &dst).expect("copy libwebrtc.a");
            let status = Command::new("ar")
                .arg("-d").arg(&dst)
                .args(["cppgen_plugin.o", "protozero_plugin.o", "main.o"])
                .status().expect("run ar");
            if !status.success() {
                println!("cargo:warning=cli/build.rs: ar -d on libwebrtc.a \
                          failed — duplicate _main may still trip the link");
            }
            println!("cargo:rustc-link-arg=-Wl,-force_load,{}", dst.display());
            println!("cargo:rerun-if-changed={}", src.display());
        }
    }
    println!("cargo:rerun-if-changed=build.rs");
}
