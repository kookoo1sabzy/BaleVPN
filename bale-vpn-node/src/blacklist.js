'use strict';

// Persisted block-list of caller user IDs (server mode). Mirrors
// `ai.bale.proxy.BlacklistStore` in the Android app — file-backed JSON,
// lazy-loaded, atomic-ish writes via fs.writeFileSync. A blocked caller's
// incoming call is auto-rejected (`discardCall`) before ever reaching the
// pending flow — no notification, no admission prompt.
//
// Mutually exclusive with AdmissionStore: blocking a caller removes them
// from the allow-list, and adding to the allow-list removes them from the
// block-list. Both stores live in `${RUNTIME_DIR}` as separate JSON files.

const { ConfigStore }    = require('./config-store');
const { AdmissionStore } = require('./admission');

const BlacklistStore = {
    _set: null,  // Set<number> — lazy-loaded
    _load() {
        if (this._set) return this._set;
        const arr = ConfigStore.get('blacklist', []);
        this._set = new Set(arr.filter(n => Number.isInteger(n) && n > 0));
        return this._set;
    },
    _save() {
        ConfigStore.set('blacklist', [...this._set]);
    },
    isBlocked(uid) { return Number(uid) > 0 && this._load().has(Number(uid)); },
    getAll()       { return [...this._load()]; },
    add(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        const s = this._load();
        const newlyAdded = !s.has(n);
        if (newlyAdded) { s.add(n); this._save(); }
        // Mutual exclusion: a caller can't be both allowed and blocked.
        AdmissionStore.remove(n);
        return newlyAdded;
    },
    remove(uid) {
        const n = Number(uid);
        const had = this._load().delete(n);
        if (had) this._save();
        return had;
    },
};

module.exports = { BlacklistStore };
