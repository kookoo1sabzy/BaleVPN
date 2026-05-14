plugins {
    kotlin("multiplatform")
    id("com.android.library")
}

kotlin {
    androidTarget {
        compilations.all { kotlinOptions { jvmTarget = "11" } }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
                implementation("io.ktor:ktor-client-core:2.3.9")
                implementation("io.ktor:ktor-client-websockets:2.3.9")
            }
        }
        val androidMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-okhttp:2.3.9")
                // io.livekit:livekit-android removed — the LK transport
                // now runs entirely in Rust (`lktunnel` crate, see rust/
                // workspace). Kotlin no longer touches the LK SDK.
                //
                // The LK Rust SDK on Android is a thin wrapper that
                // delegates to the prefixed webrtc Java factories
                // (livekit.org.webrtc.*). It needs both the Java
                // sidecars (notably `livekit.org.jni_zero.JniInit`,
                // which `webrtc::android::initialize_android` looks
                // up via `FindClass` during `JNI_OnLoad`) AND the
                // native .so the factories' JNI methods live in
                // (`liblkjingle_peerconnection_so.so`, dlopen'd from
                // LkNative.init). Version must match what webrtc-sys
                // 0.3.31 was built against — m144.
                implementation("io.github.webrtc-sdk:android-prefixed:144.7559.05")
            }
        }
    }
}

android {
    namespace  = "ai.bale.proxy.shared"
    compileSdk = 34
    // Pin the NDK version webrtc-sys was built against (m144). We
    // don't have any C++ of our own anymore, but cargo-ndk still
    // needs an NDK to cross-compile the Rust crates that depend on
    // webrtc-sys.
    ndkVersion = "28.0.13004108"
    defaultConfig {
        minSdk = 21
        // ABIs the Rust workspace cross-compiles for; cargo-ndk emits
        // one `.so` per ABI into ../rust/jniLibs/<abi>/.
        ndk { abiFilters += listOf("arm64-v8a", "armeabi-v7a", "x86_64") }
    }
    // The Rust workspace stages its output into ../rust/jniLibs in
    // the standard cargo-ndk <abi>/<lib>.so layout. No more C++
    // sources of our own — Rust is the entire native side.
    sourceSets["main"].jniLibs.srcDir(file("../rust/jniLibs"))
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

// ── Rust → JNI shim build ───────────────────────────────────────────────
// Invokes cargo-ndk to cross-compile bale_vpn_rs for the same ABIs we
// list under android.defaultConfig.ndk.abiFilters and stages the output
// .so files into the jniLibs source set above. preBuild depends on this
// so a clean `./gradlew :shared:assembleDebug` builds the Rust crate
// first and then merges its artefacts into the APK.
val rustDir       = file("$projectDir/../rust")
val rustJniLibs   = file("$rustDir/jniLibs")
// The portable `lktunnel` core lives at the repo top-level — moved
// out of the android-only workspace so the CLI / host-side consumers
// can share it. The android shim still lives at $rustDir.
val lktunnelCore  = file("$projectDir/../../lktunnel-rust/lktunnel")
val rustAbiArgs   = listOf("arm64-v8a", "armeabi-v7a", "x86_64").flatMap { listOf("-t", it) }
val cargoProfileFlag = if (project.hasProperty("rustDebug")) emptyList() else listOf("--release")

val cargoBuild by tasks.registering(Exec::class) {
    group       = "build"
    description = "Cross-compile the lktunnel workspace for Android ABIs via cargo-ndk."
    workingDir  = rustDir
    // cargo-ndk discovers the NDK via ANDROID_NDK_HOME or ANDROID_NDK_ROOT.
    // The Android Gradle Plugin exposes the SDK location but not the NDK
    // sub-path directly here, so we resolve it from sdk.dir + the AGP-
    // selected ndkVersion (defaults to the one that ships with AGP).
    val sdkDir   = android.sdkDirectory.absolutePath
    val ndkVer   = android.ndkVersion
    val ndkHome  = "$sdkDir/ndk/$ndkVer"
    environment("ANDROID_NDK_HOME", ndkHome)
    // Resolve cargo via the rustup-managed shim. Gradle's `Exec`
    // resolves the first commandLine element against the *parent
    // Gradle process's* PATH, which doesn't include ~/.cargo/bin
    // unless the user has it in their shell rc — and Android Studio's
    // build process is launched from a launchd-spawned shell that
    // typically doesn't. Resolve to the rustup shim absolutely and
    // make sure it can find cargo-ndk via PATH on the spawned process.
    val homeCargoBin = "${System.getProperty("user.home")}/.cargo/bin"
    environment("PATH", "$homeCargoBin:${System.getenv("PATH") ?: ""}")
    val cargo = "$homeCargoBin/cargo"
    commandLine(
        listOf(cargo, "ndk") + rustAbiArgs +
            listOf("-o", rustJniLibs.absolutePath, "build") + cargoProfileFlag
    )
    // Per-crate sources + manifests are the inputs. cargo handles
    // Cargo.lock and target/ internally; we only declare the things
    // a human edit would touch. The portable `lktunnel` core lives
    // outside this workspace under `../../lktunnel-rust/lktunnel/`.
    inputs.file("$rustDir/Cargo.toml")
    inputs.dir("$lktunnelCore/src")
    inputs.file("$lktunnelCore/Cargo.toml")
    inputs.dir("$rustDir/lktunnel-android/src")
    inputs.file("$rustDir/lktunnel-android/Cargo.toml")
    outputs.dir(rustJniLibs)
}

afterEvaluate {
    // The merge-jni-libs / strip tasks run *after* preBuild, but we
    // want the .so files in place before the JNI source set is read.
    // Hooking onto preBuild is the AGP-recommended seam.
    tasks.matching { it.name == "preBuild" }.configureEach {
        dependsOn(cargoBuild)
    }
}
