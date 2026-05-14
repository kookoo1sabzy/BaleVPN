'use strict';

// Persisted allow-list of caller user IDs (server mode). Mirrors
// `ai.bale.proxy.AdmissionStore` in the Android app — JSON-backed via
// ConfigStore, lazy-loaded. A caller in this map is auto-answered on
// incoming call; anyone else lands in the pending map and waits for an
// Accept/Reject.
//
// Stored as a JSON array of integers:
//   [12345, 67890]
//
// Older builds stored homogeneous `{ callerId, upBps, downBps }` objects
// for the (now-removed) per-caller bandwidth caps; we accept both shapes
// on load so existing config files migrate silently on first read.

const { ConfigStore } = require('./config-store');

const AdmissionStore = {
    _set: null,  // Set<number> — lazy-loaded
    _load() {
        if (this._set) return this._set;
        const arr = ConfigStore.get('admission', []);
        this._set = new Set();
        for (const e of arr) {
            // Tolerate the legacy object form (per-caller limits) by reading
            // just `callerId`; the limit fields are discarded.
            const id = (typeof e === 'object' && e !== null) ? e.callerId : e;
            const n = Number.isInteger(id) ? id : Number(id);
            if (Number.isInteger(n) && n > 0) this._set.add(n);
        }
        return this._set;
    },
    _save() {
        ConfigStore.set('admission', [...this._set]);
    },
    isAllowed(uid) { return Number(uid) > 0 && this._load().has(Number(uid)); },
    getAll()       { return [...this._load()]; },
    add(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        const s = this._load();
        const newlyAdded = !s.has(n);
        if (newlyAdded) { s.add(n); this._save(); }
        // Mutual exclusion with BlacklistStore: a caller can't be both allowed
        // and blocked. Lazy-require to avoid a circular module-load cycle.
        try { require('./blacklist').BlacklistStore.remove(n); } catch {}
        return newlyAdded;
    },
    remove(uid) {
        const n = Number(uid);
        const had = this._load().delete(n);
        if (had) this._save();
        return had;
    },
};

module.exports = { AdmissionStore };
