'use strict';

// Persisted allow-list of caller user IDs (server mode). Mirrors
// `ai.bale.proxy.AdmissionStore` in the Android app — same semantics, just
// file-backed instead of SharedPrefs. A caller in this list is auto-answered
// on incoming call; anyone else lands in the pending map and waits for an
// Accept/Reject decision via /server/pending/*.

const fs   = require('fs');
const path = require('path');
const { RUNTIME_DIR } = require('./constants');

const ADMISSION_FILE = path.join(RUNTIME_DIR, '.allowed-callers.json');

const AdmissionStore = {
    _ids: null,  // Set<number> — lazy-loaded
    _load() {
        if (this._ids) return this._ids;
        try {
            const raw = fs.readFileSync(ADMISSION_FILE, 'utf8');
            const arr = JSON.parse(raw);
            this._ids = new Set(arr.filter(n => Number.isInteger(n) && n > 0));
        } catch { this._ids = new Set(); }
        return this._ids;
    },
    _save() {
        try { fs.writeFileSync(ADMISSION_FILE, JSON.stringify([...this._ids])); }
        catch (e) { console.error('[Admission] save failed:', e.message); }
    },
    isAllowed(uid) { return Number(uid) > 0 && this._load().has(Number(uid)); },
    getAll()       { return [...this._load()]; },
    add(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        this._load(); this._ids.add(n); this._save();
        return true;
    },
    remove(uid) {
        const n = Number(uid);
        const had = this._load().delete(n);
        if (had) this._save();
        return had;
    },
};

module.exports = { AdmissionStore };
