#!/usr/bin/env bash
#
# Recreate `vendor/` from a pristine cargo-registry copy + apply patches.
#
# The vendor crates are needed because we extend their FFI/API surface
# beyond what's published on crates.io:
#
#   webrtc-sys-0.3.31   ← new C++ FrameTransformer subclass + cxx bridge
#                         (lets us substitute encoded Opus payload with
#                         our tunnel bytes — see raw_bytes_transformer.h
#                         in the patch).
#   libwebrtc-0.3.33    ← safe Rust wrapper around the new transformer.
#   livekit-0.7.40      ← `pub` accessors for local/remote track
#                         transceivers so callers can install the
#                         transformer on the resulting RtpSender /
#                         RtpReceiver.
#   livekit-api-0.4.22  ← signal-connect URL impersonates the LiveKit JS
#                         web SDK (no os / device_model leak; sdk=js,
#                         version=2.13.6) so the wire shape matches
#                         Bale's real web client.
#
# Usage: run from anywhere; the script resolves all paths relative to
# its own location. Idempotent: blows away an existing vendor/ tree
# before applying so re-runs always start clean.
#
#   ./patches/apply.sh
#   cargo build
#
# Required: `cargo` (for the registry source path) and `patch`.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VENDOR_DIR="$WORKSPACE_ROOT/vendor"

# All crates we patch, with their pinned versions. Adding a crate?
# Drop a .patch in patches/ named `<crate>-<version>.patch` and
# extend this list.
CRATES=(
    "webrtc-sys:0.3.31"
    "libwebrtc:0.3.33"
    "livekit:0.7.40"
    "livekit-api:0.4.22"
)

# Local download cache so re-running the script doesn't keep hitting
# crates.io. Lives inside the script's own dir so `.gitignore`'s
# `vendor/` entry doesn't accidentally swallow it.
CACHE_DIR="$SCRIPT_DIR/.cache"

# Prefer the cargo registry source on dev machines — it's already on
# disk from any prior `cargo build` and saves a network round-trip.
# Falls back to a direct crates.io download in fresh / CI environments
# where the registry hasn't been primed (and where `cargo fetch` would
# fail anyway, because [patch.crates-io] points at vendor/ paths that
# don't exist yet — chicken-and-egg).
find_registry_source() {
    local crate="$1" version="$2"
    # Bail out cleanly if the cargo registry has never been populated
    # (e.g. fresh CI runner). Without the explicit guard, `find` on a
    # nonexistent path errors out and `set -euo pipefail` kills the
    # script instead of letting us fall through to the crates.io path.
    [ -d "$HOME/.cargo/registry/src" ] || return 0
    find "$HOME/.cargo/registry/src" -maxdepth 2 \
        -type d -name "${crate}-${version}" 2>/dev/null | head -n1
}

download_from_crates_io() {
    local crate="$1" version="$2" dest="$3"
    # static.crates.io is the canonical CDN URL — no User-Agent policy
    # (the /api/v1/.../download endpoint enforces a meaningful UA since
    # crates.io's Feb-2024 policy change and 403s default curl).
    local url="https://static.crates.io/crates/${crate}/${crate}-${version}.crate"
    local tmp; tmp=$(mktemp -d)
    trap 'rm -rf "$tmp"' RETURN
    if ! curl -sSL --fail "$url" -o "$tmp/crate.tgz"; then
        return 1
    fi
    mkdir -p "$dest"
    tar xzf "$tmp/crate.tgz" -C "$dest" --strip-components=1
}

mkdir -p "$VENDOR_DIR" "$CACHE_DIR"

for entry in "${CRATES[@]}"; do
    crate="${entry%:*}"
    version="${entry#*:}"

    # 1. registry → 2. local cache → 3. crates.io
    src=$(find_registry_source "$crate" "$version")
    if [ -z "$src" ] && [ -d "$CACHE_DIR/${crate}-${version}" ]; then
        src="$CACHE_DIR/${crate}-${version}"
    fi
    if [ -z "$src" ]; then
        echo "downloading $crate-$version from crates.io..."
        if ! download_from_crates_io "$crate" "$version" "$CACHE_DIR/${crate}-${version}"; then
            echo "error: failed to download $crate-$version from crates.io" >&2
            rm -rf "$CACHE_DIR/${crate}-${version}"
            exit 1
        fi
        src="$CACHE_DIR/${crate}-${version}"
    fi

    dest="$VENDOR_DIR/$crate"
    patch_file="$SCRIPT_DIR/${crate}-${version}.patch"
    stamp_file="$dest/.lk-patch-stamp"

    if [ ! -f "$patch_file" ]; then
        echo "error: missing patch file $patch_file" >&2
        exit 1
    fi

    # Stamp-based skip. The stamp file lives inside `vendor/<crate>/`
    # and is `touch`-ed after a successful apply. If neither the
    # patch nor this script has been modified since, the existing
    # tree is good — leaving it untouched preserves cargo's file-
    # mtime fingerprints and makes the inner `cargo build` short-
    # circuit instead of recompiling webrtc-sys + libwebrtc + livekit
    # from scratch on every `npm run build:native`. ~5 min → ~2 s.
    if [ -f "$stamp_file" ] \
       && [ ! "$patch_file"           -nt "$stamp_file" ] \
       && [ ! "${BASH_SOURCE[0]}"     -nt "$stamp_file" ]; then
        echo "▸ $crate-$version (up to date)"
        continue
    fi

    echo "▸ $crate-$version"
    echo "  source:  $src"
    echo "  vendor:  $dest"

    # Wipe any stale vendor copy. Re-running with stale state would
    # cause the patch to either fail (already-applied hunks) or
    # silently leak old modifications.
    rm -rf "$dest"
    cp -R "$src" "$dest"

    # `--no-backup-if-mismatch` so we don't leave .orig files. `-p1`
    # because our patches use `a/` / `b/` prefixes (git-style).
    (cd "$dest" && patch -p1 --no-backup-if-mismatch < "$patch_file")

    # Write the stamp last — only after a clean apply. A failed
    # patch run leaves the dir without a stamp, so the next invocation
    # retries cleanly.
    touch "$stamp_file"
done

echo
echo "done — vendor/ is ready. Run \`cargo build\` next."
