'use strict';

// Single-file config store. All persistent server-side state lives in
// `${RUNTIME_DIR}/.bale-vpn_config.json` under one JSON object, keyed by
// concern. Current keys:
//   • admission   — array of allow-list entries with optional bandwidth caps
//   • blacklist   — array of blocked callerIds
//   • token       — Bale access_token (auth credential)
//   • maxClients  — int, cap on simultaneously-connected clients
// Mirrors the Android approach where everything lives in one SharedPreferences
// file under different keys — easier to back up, easier to inspect, one
// mode-0600 surface to protect.
//
// This module is the single owner of the file. AdmissionStore /
// BlacklistStore / token / max-clients persistence all go through the
// get/set/delete API here rather than touching `fs` themselves.
//
// Migration: on first load, only the legacy `.bale-token` file is auto-migrated
// (you can lose your admission list and re-allow callers, but losing the auth
// token forces a phone-OTP re-login — worth a one-time read). Pre-split
// `.allowed-callers.json` / `.blacklisted-callers.json` are NOT migrated; if
// you want the entries, copy them by hand into the new config or just re-add
// them via the UI. Legacy `.bale-token` is left in place after migration —
// user data, user deletes when ready.
//
// File mode: 0600 — readable only by the user running the process. The
// token in particular is an authentication credential; combining it with
// the allow-list in one file means everything moves with the same
// permission posture.

const fs   = require('fs');
const path = require('path');
const { RUNTIME_DIR } = require('./constants');

const CONFIG_FILE = path.join(RUNTIME_DIR, '.bale-vpn_config.json');

// Legacy token file. Read once on first load and transparently merged into
// the consolidated config so users don't have to re-OTP after upgrade.
const LEGACY_TOKEN_FILE = path.join(RUNTIME_DIR, '.bale-token');

let _data = null;

function loadFile() {
    if (_data) return _data;
    try {
        const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
        _data = JSON.parse(raw) || {};
    } catch {
        _data = {};
    }
    // One-time token migration: if the consolidated file has no token but the
    // legacy `.bale-token` file exists, pull it in so the user doesn't have to
    // re-OTP after upgrade. Admission and blacklist are NOT migrated — losing
    // them is just a re-add via the UI; not worth the migration code.
    if (_data.token == null) {
        try {
            const t = fs.readFileSync(LEGACY_TOKEN_FILE, 'utf8').trim();
            if (t) {
                _data.token = t;
                console.log('[Config] migrated token from .bale-token');
                saveFile();
            }
        } catch {}
    }
    return _data;
}

function saveFile() {
    try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(_data, null, 2), { mode: 0o600 });
    } catch (e) {
        console.error('[Config] save failed:', e.message);
    }
}

const ConfigStore = {
    /** Returns the value at `key`, or `fallback` (default `null`) if absent.
     *  The returned reference is into the cached object — callers that mutate
     *  it must call set() to persist. */
    get(key, fallback = null) {
        const v = loadFile()[key];
        return v == null ? fallback : v;
    },
    /** Replaces the value at `key` and persists. */
    set(key, value) {
        loadFile()[key] = value;
        saveFile();
    },
    /** Removes `key` (and persists if it was present). */
    delete(key) {
        const d = loadFile();
        if (key in d) {
            delete d[key];
            saveFile();
        }
    },
};

module.exports = { ConfigStore };
