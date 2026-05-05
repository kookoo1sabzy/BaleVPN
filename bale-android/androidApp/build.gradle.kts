import com.android.build.api.variant.impl.VariantOutputImpl

plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    namespace  = "ai.bale.proxy"
    compileSdk = 34
    defaultConfig {
        applicationId = "ai.bale.proxy"
        minSdk        = 21
        targetSdk     = 34
        versionCode   = 1
        versionName   = "1.0"
    }

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
    implementation(project(":shared"))
    implementation("androidx.core:core-ktx:1.13.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
    implementation("androidx.recyclerview:recyclerview:1.3.2")
    implementation("androidx.lifecycle:lifecycle-process:2.7.0")
    implementation("io.ktor:ktor-client-okhttp:2.3.9")
    implementation("io.ktor:ktor-client-websockets:2.3.9")
    implementation("org.slf4j:slf4j-android:1.7.36")
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