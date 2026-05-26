import com.android.build.api.variant.impl.VariantOutputImpl

plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    namespace  = "ai.bale.proxy"
    compileSdk = 34
    // Pinned NDK (cargo-ndk uses it to cross-compile the Rust crates).
    // r28 supports the API 24 floor webrtc-rs needs (getifaddrs).
    ndkVersion = "28.0.13004108"
    val tagVersion = System.getenv("BALE_VERSION_NAME")?.takeIf { it.isNotBlank() }
    val parsedVersionCode = tagVersion
        ?.split('.')
        ?.mapNotNull { it.takeWhile(Char::isDigit).toIntOrNull() }
        ?.let { p ->
            val major = p.getOrElse(0) { 0 }
            val minor = p.getOrElse(1) { 0 }
            val patch = p.getOrElse(2) { 0 }
            major * 10_000 + minor * 100 + patch
        }
        ?.takeIf { it > 0 }

    defaultConfig {
        applicationId = "ai.bale.proxy"
        // 24 (Android 7.0) is required by the webrtc-rs transport: it
        // links getifaddrs/freeifaddrs for network-interface enumeration,
        // which Android's libc only exposes at API >= 24. ~98% of devices.
        minSdk        = 24
        targetSdk     = 34
        versionCode   = parsedVersionCode ?: 1
        versionName   = tagVersion ?: "1.0"
        // ABIs the Rust workspace cross-compiles for; cargo-ndk
        // emits one .so per ABI into ../rust/jniLibs/<abi>/.
        ndk { abiFilters += listOf("arm64-v8a", "armeabi-v7a", "x86_64") }
    }
    // The Rust workspace stages its output into ../rust/jniLibs
    // in the standard cargo-ndk <abi>/<lib>.so layout. Picked up
    // here as the JNI source set.
    sourceSets["main"].jniLibs.srcDir(file("../rust/jniLibs"))

    val ksPath = System.getenv("ANDROID_KEYSTORE_PATH")
    val ksPass = System.getenv("ANDROID_KEYSTORE_PASSWORD")
    val ksAlias = System.getenv("ANDROID_KEY_ALIAS")
    val ksKeyPass = System.getenv("ANDROID_KEY_PASSWORD")
    val hasReleaseSigning = !ksPath.isNullOrBlank() && file(ksPath).exists()
            && !ksPass.isNullOrBlank() && !ksAlias.isNullOrBlank() && !ksKeyPass.isNullOrBlank()

    signingConfigs {
        if (hasReleaseSigning) {
            create("release") {
                storeFile = file(ksPath!!)
                storePassword = ksPass
                keyAlias = ksAlias
                keyPassword = ksKeyPass
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled   = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
            signingConfig = signingConfigs.getByName("debug")
            ndk { abiFilters += listOf("arm64-v8a") }
            if (hasReleaseSigning) {
                signingConfig = signingConfigs.getByName("release")
            }
        }
        debug {
            ndk { abiFilters += listOf("arm64-v8a", "x86_64") }
        }
    }
    buildFeatures { viewBinding = true }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    kotlinOptions { jvmTarget = "11" }
    packaging {
        resources {
            excludes += setOf(
                "META-INF/INDEX.LIST",
                "META-INF/DEPENDENCIES",
                "META-INF/LICENSE*",
                "META-INF/NOTICE*",
                "META-INF/*.kotlin_module",
            )
        }
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
    implementation("androidx.recyclerview:recyclerview:1.3.2")
    implementation("androidx.lifecycle:lifecycle-process:2.7.0")
    // No webrtc-sdk AAR — the transport is webrtc-rs (pure Rust), so there
    // are no libwebrtc Java sidecars to load.
}

// ── Rust → JNI shim build ───────────────────────────────────────────────
// Invokes cargo-ndk to cross-compile the Rust workspace for the
// ABIs declared above and stages the .so output into ../rust/
// jniLibs/<abi>/. `preBuild` depends on this so a clean Gradle
// build runs the Rust compile first and then merges the
// artefacts into the APK.
val rustDir         = file("$projectDir/../rust")
val rustJniLibs     = file("$rustDir/jniLibs")
// The portable `lktunnel` core lives at the repo top-level — moved
// out of the android-only workspace so CLI / host-side consumers
// can share it. The android shims still live at $rustDir.
val lktunnelCore    = file("$projectDir/../../lktunnel-rust/lktunnel")
// The Bale-signaling core. Same arrangement — host-shared crate
// at the repo top-level, JNI shim under $rustDir.
val baleSignaling   = file("$projectDir/../../bale-signaling-rust/bale-signaling")
val rustAbiArgs     = listOf("arm64-v8a", "armeabi-v7a", "x86_64").flatMap { listOf("-t", it) }
val cargoProfileFlag = if (project.hasProperty("rustDebug")) emptyList() else listOf("--release")

val cargoBuild by tasks.registering(Exec::class) {
    group       = "build"
    description = "Cross-compile the Rust workspace for Android ABIs via cargo-ndk."
    workingDir  = rustDir
    val sdkDir      = android.sdkDirectory.absolutePath
    val ndkVer      = android.ndkVersion
    val ndkHome     = "$sdkDir/ndk/$ndkVer"
    environment("ANDROID_NDK_HOME", ndkHome)
    val homeCargoBin = "${System.getProperty("user.home")}/.cargo/bin"
    environment("PATH", "$homeCargoBin:${System.getenv("PATH") ?: ""}")
    val cargo = "$homeCargoBin/cargo"
    // Link the native libs against the same API level as `minSdk`.
    // cargo-ndk otherwise defaults to API 21, but the webrtc-rs transport
    // links getifaddrs/freeifaddrs which Android's libc only provides at
    // API >= 24 — so without this the .so fails to link once webrtc-rs is
    // in the shim. Kept in sync with `minSdk` (24) above.
    val apiLevel = (android.defaultConfig.minSdk ?: 24).toString()
    commandLine(
        listOf(cargo, "ndk") + rustAbiArgs +
            listOf("--platform", apiLevel, "-o", rustJniLibs.absolutePath, "build") + cargoProfileFlag
    )
    // Source-set inputs — anything a human edit would touch.
    inputs.file("$rustDir/Cargo.toml")
    inputs.dir("$lktunnelCore/src")
    inputs.file("$lktunnelCore/Cargo.toml")
    inputs.dir("$baleSignaling/src")
    inputs.file("$baleSignaling/Cargo.toml")
    inputs.dir("$rustDir/lktunnel-android/src")
    inputs.file("$rustDir/lktunnel-android/Cargo.toml")
    inputs.dir("$rustDir/bale-signaling-android/src")
    inputs.file("$rustDir/bale-signaling-android/Cargo.toml")
    // Shared JNI helper crate (HandleRegistry + runtime + JVM
    // cache + continuation bridge). Both shims depend on it,
    // so edits here must invalidate the cached .so.
    inputs.dir("$rustDir/jni-shared/src")
    inputs.file("$rustDir/jni-shared/Cargo.toml")
    outputs.dir(rustJniLibs)
}

afterEvaluate {
    tasks.matching { it.name == "preBuild" }.configureEach {
        dependsOn(cargoBuild)
    }
}

androidComponents {
    onVariants { variant ->

        val appName = "BaleVpn"
        val buildType = variant.buildType

        // Get versionName safely from outputs
        variant.outputs.forEach { output ->

            val versionName = output.versionName.orElse("1.0").get()

            (output as VariantOutputImpl).outputFileName.set(
                "${appName}-${versionName}-${buildType}.apk"
            )
        }
    }
}