# Top-level convenience targets.
#
# Mostly the `sync` target — rsync the repo to a remote build host
# while leaving generated / fetched artefacts behind. Vendored crates
# (`lktunnel-rust/vendor/`), node_modules, cargo target/ trees, gradle
# build dirs, native .so/.dylib output and the patches/.cache/ tarball
# stash are ALL regenerated on the remote by `patches/apply.sh` +
# `cargo build` + `npm install` + `gradle build`, so shipping them
# over the wire is bandwidth wasted on stuff the remote will
# overwrite anyway.

REMOTE  ?=
SSH_KEY ?=
# rsync's ssh command — overridable so callers can pass `SSH_KEY=…`
# without remembering rsync's `-e` syntax. `StrictHostKeyChecking=accept-new`
# trusts a never-seen-before host but rejects key changes (TOFU); drop the
# flag if your fleet rotates keys often. -o IdentitiesOnly=yes prevents the
# ssh agent from trying other keys first when SSH_KEY is set.
SSH_CMD = ssh $(if $(SSH_KEY),-i $(SSH_KEY) -o IdentitiesOnly=yes) \
          -o StrictHostKeyChecking=accept-new

# `-r` recursive, `-l` preserve symlinks, `-t` mtimes (lets cargo's
# fingerprinting skip rebuilds when source didn't actually change),
# `-z` compress in transit. `--delete` removes files on the remote
# that aren't local — keeps the remote tree from accumulating cruft.
# `-v` for one line per file — `--info=progress2` would be nicer but
# macOS ships rsync 2.6.9 which doesn't know that flag. `-e "$(SSH_CMD)"`
# threads the optional SSH key through.
RSYNC_FLAGS = -rltzv --delete -e "$(SSH_CMD)" \
    --exclude='.git/' \
    --exclude='target/' \
    --exclude='**/target/' \
    --exclude='node_modules/' \
    --exclude='**/node_modules/' \
    --exclude='lktunnel-rust/vendor/' \
    --exclude='lktunnel-rust/patches/.cache/' \
    --exclude='bale-vpn-node/build/' \
    --exclude='bale-vpn-node/dist/' \
    --exclude='bale-vpn-node/rust/lktunnel-node/*.node' \
    --exclude='bale-vpn-node/rust/lktunnel-node/index.js' \
    --exclude='bale-vpn-node/rust/lktunnel-node/index.d.ts' \
    --exclude='bale-vpn-node/rust/lktunnel-node/npm/' \
    --exclude='bale-vpn-android/**/build/' \
    --exclude='bale-vpn-android/rust/jniLibs/' \
    --exclude='bale-vpn-android/.gradle/' \
    --exclude='bale-vpn-android/.idea/' \
    --exclude='bale-vpn-android/local.properties' \
    --exclude='**/.cxx/' \
    --exclude='*.iml' \
    --exclude='*.jks' \
    --exclude='*.keystore' \
    --exclude='.DS_Store' \
    --exclude='*.swp' \
    --exclude='*.swo'

.PHONY: sync sync-dry help

help:
	@echo "Targets:"
	@echo "  sync REMOTE=user@host:/path [SSH_KEY=~/.ssh/id_ed25519]"
	@echo "      rsync to remote (deletes extras on the far side)"
	@echo "  sync-dry REMOTE=user@host:/path [SSH_KEY=…]"
	@echo "      dry-run, show what would change"
	@echo ""
	@echo "Generated artefacts (vendor/, target/, node_modules/, build/) are"
	@echo "excluded — the remote regenerates them via patches/apply.sh +"
	@echo "cargo build + npm install."

sync:
ifeq ($(REMOTE),)
	@echo "ERROR: REMOTE not set. Example: make sync REMOTE=user@host:/path/to/BaleVPN"
	@exit 1
endif
	rsync $(RSYNC_FLAGS) ./ $(REMOTE)/

sync-dry:
ifeq ($(REMOTE),)
	@echo "ERROR: REMOTE not set. Example: make sync-dry REMOTE=user@host:/path/to/BaleVPN"
	@exit 1
endif
	rsync $(RSYNC_FLAGS) --dry-run --itemize-changes ./ $(REMOTE)/
