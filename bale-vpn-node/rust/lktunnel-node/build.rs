// napi-build emits the platform-appropriate linker flags and the
// glue symbol (`napi_register_module_v1`) so Node's `require()` can
// dlopen the produced cdylib as a `.node` module.
fn main() {
    napi_build::setup();

    // Force-load Objective-C metadata from every static archive
    // linked into the cdylib. Without `-ObjC` the linker skips .o
    // files whose only contribution is Objective-C class / category
    // metadata — including the `NSString (AbslStringView)` polyfill
    // we ship inside `webrtc-sys`. Skipping it means
    // `+stringForAbslStringView:` is never registered, libwebrtc's
    // log path calls it on first message, and the runtime aborts
    // with `unrecognized selector`.
    //
    // The same flag is set inside `webrtc-sys`'s build script via
    // `cargo:rustc-link-arg`, but cargo only honors that for the
    // package that produces the build script — it doesn't propagate
    // to the cdylib here, in a separate workspace. So we restate it.
    #[cfg(target_os = "macos")]
    {
        println!("cargo:rustc-link-arg=-ObjC");
    }
}
