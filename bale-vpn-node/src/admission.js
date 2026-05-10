'use strict';

// Persisted allow-list of caller user IDs (server mode), each with their
// per-caller bandwidth caps. Mirrors `ai.bale.proxy.AdmissionStore` in the
// Android app — file-backed JSON, lazy-loaded, atomic-ish writes via
// fs.writeFileSync. A caller in this map is auto-answered on incoming call;
// anyone else lands in the pending map and waits for an Accept/Reject.
//
// Stored as JSON of either form (mixed allowed):
//   12345                                          // bare ID, no per-caller limit
//   { callerId: 12345, upBps: 62500, downBps: 62500 }
// Bare numbers are accepted for back-compat with older files where this
// store held only IDs.
//
// Stored values are clamped to [0, MAX_LIMIT_KBPS converted to bytes/sec]
// on load so a hand-edited `.allowed-callers.json` can't smuggle in an
// absurd override (e.g. someone bumping their own cap to 1 Gbps via vim).

const { MAX_LIMIT_KBPS } = require('./constants');
const { ConfigStore }    = require('./config-store');

const MAX_LIMIT_BPS = MAX_LIMIT_KBPS * 1000 / 8;   // kbps → bytes/sec

const clamp = v => Math.max(0, Math.min(MAX_LIMIT_BPS, Number(v) || 0));

const AdmissionStore = {
    _map: null,  // Map<number, { upBps, downBps }> — lazy-loaded
    _load() {
        if (this._map) return this._map;
        const arr = ConfigStore.get('admission', []);
        this._map = new Map();
        for (const e of arr) {
            if (typeof e === 'number' && Number.isInteger(e) && e > 0) {
                this._map.set(e, { upBps: 0, downBps: 0 });
            } else if (e && Number.isInteger(e.callerId) && e.callerId > 0) {
                const upRaw   = Number(e.upBps)   || 0;
                const downRaw = Number(e.downBps) || 0;
                const up   = clamp(upRaw);
                const down = clamp(downRaw);
                if (up !== upRaw || down !== downRaw) {
                    console.warn(`[Admission] clamped caller ${e.callerId} limits ` +
                                 `(up=${upRaw}→${up}, down=${downRaw}→${down})`);
                }
                this._map.set(e.callerId, { upBps: up, downBps: down });
            }
        }
        return this._map;
    },
    _save() {
        const arr = [...this._map.entries()].map(([callerId, { upBps, downBps }]) => {
            if (!upBps && !downBps) return callerId;          // bare-ID for compactness
            return { callerId, upBps, downBps };
        });
        ConfigStore.set('admission', arr);
    },
    isAllowed(uid) { return Number(uid) > 0 && this._load().has(Number(uid)); },
    getAll()       { return [...this._load().keys()]; },
    getLimit(uid) {
        const v = this._load().get(Number(uid));
        return v ? { ...v } : null;
    },
    /** Map<callerId, { upBps, downBps }> — defensive copy of every entry. */
    getAllLimits() {
        const out = new Map();
        for (const [k, v] of this._load()) out.set(k, { ...v });
        return out;
    },
    add(uid) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        const m = this._load();
        const newlyAdded = !m.has(n);
        if (newlyAdded) { m.set(n, { upBps: 0, downBps: 0 }); this._save(); }
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
    /** Updates the per-caller limit. Returns false if the caller isn't admitted —
     *  limits only persist for callers in the allow-list. Values are clamped to
     *  [0, MAX_LIMIT_BPS]. */
    setLimit(uid, upBps, downBps) {
        const n = Number(uid);
        if (!n || n <= 0) return false;
        const m = this._load();
        if (!m.has(n)) return false;
        m.set(n, { upBps: clamp(upBps), downBps: clamp(downBps) });
        this._save();
        return true;
    },
};

module.exports = { AdmissionStore };
