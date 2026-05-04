try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d809def6-8831-4cff-a6b9-79c534782b6a", e._sentryDebugIdIdentifier = "sentry-dbid-d809def6-8831-4cff-a6b9-79c534782b6a")
    }()
} catch (e) {}! function() {
    try {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
            id: "web@4.17.0+151668"
        }
    } catch (e) {}
}(), (() => {
    "use strict";
    var __webpack_modules__ = {
            60146: function(e, t, r) {
                var n, o = r(51116),
                    i = r(94871),
                    a = r.n(i),
                    s = r(51162),
                    l = r(82080),
                    c = r(69758),
                    u = r(78893),
                    h = r(63438),
                    d = r(92023),
                    f = r(84748),
                    p = r(52545),
                    m = r(35133),
                    g = r(10492),
                    y = r(34993),
                    _ = r(76432),
                    b = r(2689),
                    v = r(46896),
                    E = r(97244);
                class S {
                    static fromTransaction(e, t, r) {
                        return new I(e, t, r)
                    }
                    static fromExecutor(e, t, r) {
                        return new w(e, t, r)
                    }
                    static noop(e, t) {
                        return S.fromExecutor(e => {
                            switch (e.terminal) {
                                case "count":
                                case "delete":
                                    return (0, c.of)(0);
                                case "keys":
                                case "toArray":
                                    return (0, c.of)([]);
                                default:
                                    return (0, c.of)(void 0)
                            }
                        }, e, t)
                    }
                    between(e, t, r) {
                        let n = (null == r ? void 0 : r.includeLower) === !1,
                            o = (null == r ? void 0 : r.includeUpper) === !1;
                        return e === t && (n || o) ? this._empty = !0 : this._range = {
                            type: "bound",
                            args: [e, t, n, o]
                        }, this
                    }
                    above(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return this._range = {
                            type: "lower",
                            args: [e, t]
                        }, this
                    }
                    below(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return this._range = {
                            type: "upper",
                            args: [e, t]
                        }, this
                    }
                    equals(e) {
                        return this._range = {
                            type: "only",
                            args: [e]
                        }, this
                    }
                    reverse() {
                        return this._direction = "next" === this._direction ? "prev" : "next", this
                    }
                    limit(e) {
                        return this._limit = e, this
                    }
                    offset(e) {
                        return this._offset = e, this
                    }
                    configure(e) {
                        return this._range = e.range, this._direction = e.direction, this._limit = e.limit, this._offset = e.offset, this
                    }
                    constructor(e, t) {
                        (0, o._)(this, "indexName", void 0), (0, o._)(this, "storeName", void 0), (0, o._)(this, "_range", void 0), (0, o._)(this, "_direction", "next"), (0, o._)(this, "_limit", null), (0, o._)(this, "_offset", 0), (0, o._)(this, "_empty", !1), this.indexName = e, this.storeName = t
                    }
                }
                class I extends S {
                    buildKeyRange() {
                        let e = this._range;
                        if (!e) return null;
                        switch (e.type) {
                            case "bound":
                                return IDBKeyRange.bound(e.args[0], e.args[1], e.args[2], e.args[3]);
                            case "lower":
                                return IDBKeyRange.lowerBound(e.args[0], e.args[1]);
                            case "upper":
                                return IDBKeyRange.upperBound(e.args[0], e.args[1]);
                            case "only":
                                return IDBKeyRange.only(e.args[0])
                        }
                    }
                    withTx(e) {
                        let t = this.buildKeyRange();
                        return this.getTransaction().pipe((0, p.Z)(r => {
                            let [n, o] = r;
                            return e(n, o, t)
                        }))
                    }
                    toArray() {
                        if (this._empty) return (0, c.of)([]);
                        let {
                            indexName: e,
                            _direction: t,
                            _limit: r,
                            _offset: n
                        } = this;
                        return this.withTx((o, i, a) => new l.c(s => {
                            let l = i.index(e).openCursor(a, t),
                                c = [],
                                u = 0;
                            l.onsuccess = () => {
                                let e = l.result;
                                if (!e) {
                                    s.next(c), s.complete();
                                    return
                                }
                                if (u < n) {
                                    u++, e.continue();
                                    return
                                }
                                if (null !== r && c.length >= r) {
                                    s.next(c), s.complete();
                                    return
                                }
                                c.push(e.value), e.continue()
                            }, o.onerror = e => s.error(e), o.onabort = e => s.error(e)
                        }))
                    }
                    first() {
                        if (this._empty) return (0, c.of)(void 0);
                        this._limit = 1;
                        let {
                            indexName: e,
                            _direction: t
                        } = this;
                        return this.withTx((r, n, o) => new l.c(i => {
                            let a = n.index(e).openCursor(o, t);
                            a.onsuccess = () => {
                                var e;
                                i.next(null == (e = a.result) ? void 0 : e.value), i.complete()
                            }, r.onerror = e => i.error(e), r.onabort = e => i.error(e)
                        }))
                    }
                    last() {
                        if (this._empty) return (0, c.of)(void 0);
                        this._direction = "next" === this._direction ? "prev" : "next", this._limit = 1;
                        let {
                            indexName: e,
                            _direction: t
                        } = this;
                        return this.withTx((r, n, o) => new l.c(i => {
                            let a = n.index(e).openCursor(o, t);
                            a.onsuccess = () => {
                                var e;
                                i.next(null == (e = a.result) ? void 0 : e.value), i.complete()
                            }, r.onerror = e => i.error(e), r.onabort = e => i.error(e)
                        }))
                    }
                    count() {
                        if (this._empty) return (0, c.of)(0);
                        let {
                            indexName: e
                        } = this;
                        return this.withTx((t, r, n) => new l.c(o => {
                            let i = r.index(e).count(n ?? void 0);
                            i.onsuccess = () => {
                                o.next(i.result), o.complete()
                            }, t.onerror = e => o.error(e), t.onabort = e => o.error(e)
                        }))
                    }
                    keys() {
                        if (this._empty) return (0, c.of)([]);
                        let {
                            indexName: e,
                            _direction: t,
                            _limit: r,
                            _offset: n
                        } = this;
                        return this.withTx((o, i, a) => new l.c(s => {
                            let l = i.index(e).openKeyCursor(a, t),
                                c = [],
                                u = 0;
                            l.onsuccess = () => {
                                let e = l.result;
                                if (!e) {
                                    s.next(c), s.complete();
                                    return
                                }
                                if (u < n) {
                                    u++, e.continue();
                                    return
                                }
                                if (null !== r && c.length >= r) {
                                    s.next(c), s.complete();
                                    return
                                }
                                c.push(e.primaryKey), e.continue()
                            }, o.onerror = e => s.error(e), o.onabort = e => s.error(e)
                        }))
                    }
                    delete() {
                        if (this._empty) return (0, c.of)(0);
                        let {
                            indexName: e,
                            _direction: t,
                            _limit: r
                        } = this;
                        return this.withTx((n, o, i) => new l.c(a => {
                            let s = o.index(e).openCursor(i, t),
                                l = 0;
                            s.onsuccess = () => {
                                let e = s.result;
                                e && (null === r || l < r) && (e.delete(), l++, e.continue())
                            }, n.oncomplete = () => {
                                a.next(l), a.complete()
                            }, n.onerror = e => a.error(e), n.onabort = e => a.error(e)
                        }))
                    }
                    constructor(e, t, r) {
                        super(t, r), (0, o._)(this, "getTransaction", void 0), this.getTransaction = e
                    }
                }
                class w extends S {
                    buildSpec(e) {
                        return {
                            indexName: this.indexName,
                            storeName: this.storeName,
                            range: this._range,
                            direction: this._direction,
                            limit: this._limit,
                            offset: this._offset,
                            terminal: e
                        }
                    }
                    toArray() {
                        return this._empty ? (0, c.of)([]) : this.executor(this.buildSpec("toArray"))
                    }
                    first() {
                        return this._empty ? (0, c.of)(void 0) : (this._limit = 1, this.executor(this.buildSpec("first")))
                    }
                    last() {
                        return this._empty ? (0, c.of)(void 0) : (this._direction = "next" === this._direction ? "prev" : "next", this._limit = 1, this.executor(this.buildSpec("last")))
                    }
                    count() {
                        return this._empty ? (0, c.of)(0) : this.executor(this.buildSpec("count"))
                    }
                    keys() {
                        return this._empty ? (0, c.of)([]) : this.executor(this.buildSpec("keys"))
                    }
                    delete() {
                        return this._empty ? (0, c.of)(0) : this.executor(this.buildSpec("delete"))
                    }
                    constructor(e, t, r) {
                        super(t, r), (0, o._)(this, "executor", void 0), this.executor = e
                    }
                }
                let N = "_schema",
                    R = "originVersion";
                ! function(e) {
                    e[e.None = 0] = "None", e[e.Request = 1] = "Request", e[e.Transaction = 2] = "Transaction"
                }(n || (n = {}));
                class T {
                    get keyPath() {
                        if (void 0 !== this._keyPath) return this._keyPath;
                        let [, e] = this.db.rawTransaction(this.name, "readonly"), t = e.keyPath, r = Array.isArray(t) ? t[0] : t;
                        return this._keyPath = r ?? "", this._keyPath
                    }
                    preLoad() {
                        var e;
                        null == (e = this.logger) || e.debug("preload", this.name), (0, s._)(this.getAll$()).then(() => {
                            var e;
                            null == (e = this.logger) || e.debug("preload")
                        }).catch(() => {})
                    }
                    transaction(e) {
                        return this.db.transaction(this.name, e)
                    }
                    isFastMode() {
                        return this.db.isFastModeEnabled()
                    }
                    waitForPendingTransactions() {
                        return Promise.all(Array.from(this.pendingTransactions.values()).map(e => new Promise((t, r) => {
                            e.oncomplete = () => {
                                this.pendingTransactions.delete(e), t()
                            }, e.onerror = t => {
                                var n;
                                this.pendingTransactions.delete(e), null == (n = this.logger) || n.error("Transaction error in waitForPendingTransactions:", t), r(t)
                            }, e.onabort = t => {
                                var n;
                                this.pendingTransactions.delete(e), null == (n = this.logger) || n.error("Transaction aborted in waitForPendingTransactions:", t), r(t)
                            }
                        })))
                    }
                    handleEvents(e, t, r, o) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.Transaction;
                        if (this.db.inVersionChange) t.onsuccess = () => {
                            r.next(o()), r.complete()
                        }, t.onerror = e => {
                            r.error(e)
                        };
                        else {
                            let a = () => {
                                r.next(o()), r.complete()
                            };
                            if (i === n.None || this.isFastMode()) {
                                if (this.isFastMode() && "readwrite" === e.mode) {
                                    this.pendingTransactions.add(e);
                                    let r = () => {
                                        this.pendingTransactions.delete(e)
                                    };
                                    e.oncomplete = () => {
                                        r()
                                    }, e.onerror = () => {
                                        var e;
                                        r(), null == (e = this.logger) || e.error("Transaction error in fast mode")
                                    }, e.onabort = () => {
                                        var e;
                                        r(), null == (e = this.logger) || e.error("Transaction aborted in fast mode")
                                    }, t.onerror = () => {}
                                }
                                setTimeout(a, 0);
                                return
                            }
                            if (i === n.Request) {
                                t.onsuccess = () => {
                                    a()
                                }, t.onerror = e => {
                                    r.error(e)
                                }, e.onerror = e => {
                                    r.error(e)
                                }, e.onabort = e => {
                                    r.error(e)
                                };
                                return
                            }
                            e.oncomplete = () => {
                                a()
                            }, e.onerror = e => {
                                r.error(e)
                            }, e.onabort = e => {
                                r.error(e)
                            }
                        }
                    }
                    _getKey(e, t) {
                        return null != t ? t : a()(e, this.keyPath)
                    }
                    add(e, t) {
                        return this.transaction().pipe((0, p.Z)(r => {
                            let [n, o] = r;
                            return new l.c(r => {
                                let i = o.add(e, t);
                                this.handleEvents(n, i, r, () => (this.isCacheEnabled && this._cache.set(this._getKey(e, t), e), t))
                            })
                        }))
                    }
                    addItems(e) {
                        return this.transaction().pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                e.forEach(e => {
                                    let [t, r] = e;
                                    this.isCacheEnabled && this._cache.set(this._getKey(r, t), r), n.add(r, t).onerror = () => {}
                                }), r.oncomplete = () => {
                                    t.next(), t.complete()
                                };
                                let o = r => {
                                    this.isCacheEnabled && e.forEach(e => {
                                        let [t, r] = e;
                                        this._cache.delete(this._getKey(r, t))
                                    }), t.error(r)
                                };
                                r.onerror = e => {
                                    var t;
                                    null == (t = this.logger) || t.error("Transaction error in addItems:", e), o(e)
                                }, r.onabort = e => {
                                    var t;
                                    null == (t = this.logger) || t.error("Transaction aborted in addItems:", e), o(e)
                                }
                            })
                        }))
                    }
                    clear() {
                        return this.transaction().pipe((0, p.Z)(e => {
                            let [t, r] = e;
                            return new l.c(e => {
                                let n = r.clear();
                                this.handleEvents(t, n, e, () => {
                                    this.isCacheEnabled && (this._allLoaded = !1, this._cache.clear(), this._getAll$ = void 0)
                                })
                            })
                        }))
                    }
                    clearOutdatedFiles(e) {
                        return this.transaction().pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                let o = n.openCursor();
                                o.onsuccess = () => {
                                    let t = o.result;
                                    t && (e > t.value.lastModified && t.delete(), t.continue())
                                }, o.onerror = e => {
                                    t.error(e)
                                }, r.oncomplete = () => {
                                    t.next(), t.complete()
                                }, r.onerror = e => {
                                    var r;
                                    null == (r = this.logger) || r.error("Transaction error in clearOutdatedFiles:", e), t.error(e)
                                }, r.onabort = e => {
                                    var r;
                                    null == (r = this.logger) || r.error("Transaction aborted in clearOutdatedFiles:", e), t.error(e)
                                }
                            })
                        }))
                    }
                    count(e) {
                        return this.transaction("readonly").pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                let o = n.count(e);
                                this.handleEvents(r, o, t, () => o.result)
                            })
                        }))
                    }
                    createIndex(e, t, r) {
                        let [, n] = this.db.rawTransaction(this.name);
                        return n.createIndex(e, t, r), e
                    }
                    delete(e) {
                        return this.transaction().pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                let o = n.delete(e);
                                this.handleEvents(r, o, t, () => {
                                    !this.isCacheEnabled || e instanceof IDBKeyRange || this._cache.delete(e)
                                })
                            })
                        }))
                    }
                    deleteItems(e) {
                        return this.transaction().pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                e.forEach(e => {
                                    n.delete(e).onerror = () => {}
                                }), r.oncomplete = () => {
                                    this.isCacheEnabled && e.forEach(e => {
                                        e instanceof IDBKeyRange || this._cache.delete(e)
                                    }), t.next(), t.complete()
                                }, r.onerror = e => {
                                    var r;
                                    null == (r = this.logger) || r.error("Transaction error in deleteItems:", e), t.error(e)
                                }, r.onabort = e => {
                                    var r;
                                    null == (r = this.logger) || r.error("Transaction aborted in deleteItems:", e), t.error(e)
                                }
                            })
                        }))
                    }
                    deleteIndex(e) {
                        let [, t] = this.db.rawTransaction(this.name);
                        t.deleteIndex(e)
                    }
                    get(e) {
                        return this.keyPath && this.isCacheEnabled ? this._getWithPrecache(e) : this._getWithoutPrecache(e)
                    }
                    _getWithPrecache(e) {
                        return this._allLoaded ? (0, c.of)(this._cache.get(e)) : this.getAll().pipe((0, m.T)(() => this._cache.get(e)))
                    }
                    _getWithoutPrecache(e) {
                        if (this.isCacheEnabled) {
                            let t = this._cache.get(e);
                            if (t) return (0, c.of)(t)
                        }
                        return this.transaction("readonly").pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                let o = !1,
                                    i = n.get(e);
                                return i.onsuccess = () => {
                                    o = !0, this.isCacheEnabled && this._cache.set(e, i.result), t.next(i.result), t.complete()
                                }, i.onerror = e => {
                                    o = !0, t.error(e)
                                }, r.onerror = e => {
                                    o || t.error(e)
                                }, r.onabort = e => {
                                    o || t.error(e)
                                }, () => {
                                    if (!o) {
                                        var e, t;
                                        try {
                                            null == (e = r.abort) || e.call(r)
                                        } catch (e) {
                                            null == (t = this.logger) || t.error("Failed to abort transaction", "_getWithoutPrecache", e)
                                        }
                                    }
                                }
                            })
                        }), (0, g.u)())
                    }
                    getSize() {
                        return 0
                    }
                    getItems(e) {
                        return this.keyPath && this.isCacheEnabled ? this._getItemsWithPrecache(e) : this._getItemsWithoutPrecache(e)
                    }
                    _getItemsWithPrecache(e) {
                        return new l.c(t => {
                            let r = [];
                            if (!e || 0 == e.length) {
                                t.next(r), t.complete();
                                return
                            }
                            let n = () => {
                                let t = [];
                                return e.forEach(e => {
                                    this._cache.has(e) && t.push([e, this._cache.get(e)])
                                }), t
                            };
                            if (this._allLoaded) {
                                t.next(n()), t.complete();
                                return
                            }
                            let o = this.getAll().subscribe(() => {
                                t.next(n()), t.complete()
                            });
                            return {
                                unsubscribe() {
                                    o.unsubscribe()
                                }
                            }
                        })
                    }
                    _getItemsWithoutPrecache(e) {
                        return this.transaction("readonly").pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                var o, i;
                                let a = !1,
                                    s = [];
                                e.forEach(r => {
                                    if (this.isCacheEnabled) {
                                        let e = this._cache.get(r);
                                        if (e) return void s.push([r, e])
                                    }
                                    let o = n.get(r);
                                    o.onsuccess = () => {
                                        o.result && (s.push([r, o.result]), this.isCacheEnabled && this._cache.set(r, o.result)), s.length === e.length && (a = !0, t.next(s), t.complete())
                                    }, o.onerror = () => {}
                                });
                                try {
                                    null == (o = r.commit) || o.call(r)
                                } catch (e) {
                                    null == (i = this.logger) || i.error("Failed to commit transaction", "_getItemsWithoutPrecache", e)
                                }
                                return r.oncomplete = () => {
                                    a || (a = !0, t.next(s), t.complete())
                                }, r.onerror = e => {
                                    a || t.error(e)
                                }, r.onabort = e => {
                                    a || t.error(e)
                                }, () => {
                                    if (!a) try {
                                        r.abort()
                                    } catch (t) {
                                        var e;
                                        null == (e = this.logger) || e.error("Failed to abort transaction", "_getItemsWithoutPrecache", t)
                                    }
                                }
                            })
                        }))
                    }
                    getAll$() {
                        return this._getAll$ || (this._getAll$ = this.transaction("readonly").pipe((0, y.n)(e => {
                            let [t, r] = e;
                            return new l.c(e => {
                                let n = r.getAll();
                                n.onsuccess = () => {
                                    let t = n.result.map(e => [this._getKey(e), e]);
                                    this.isCacheEnabled && (this._allLoaded = !0, this._cache = new Map(t)), e.next(t), e.complete()
                                }, n.onerror = t => {
                                    e.error(t)
                                }, t.onerror = t => {
                                    e.error(t)
                                }, t.onabort = t => {
                                    e.error(t)
                                }
                            })
                        }), (0, g.u)())), this._getAll$
                    }
                    getAll() {
                        return this._allLoaded && this.isCacheEnabled ? (0, c.of)(Array.from(this._cache.entries())) : this.getAll$()
                    }
                    getAllKeys(e, t) {
                        return this._allLoaded && this.isCacheEnabled ? (0, c.of)(Array.from(this._cache.keys())) : this.transaction("readonly").pipe((0, p.Z)(r => {
                            let [n, o] = r;
                            return new l.c(r => {
                                let i = o.getAllKeys(e, t);
                                this.handleEvents(n, i, r, () => i.result)
                            })
                        }))
                    }
                    getKey(e) {
                        return this.transaction("readonly").pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                let o = n.getKey(e);
                                this.handleEvents(r, o, t, () => o.result)
                            })
                        }))
                    }
                    index(e) {
                        let [, t] = this.db.rawTransaction(this.name);
                        return t.index(e), e
                    }
                    put(e, t) {
                        let r = this._getKey(e, t);
                        return this.transaction().pipe((0, p.Z)(o => {
                            let [i, a] = o;
                            return new l.c(o => {
                                try {
                                    let s = a.put(e, this.keyPath ? void 0 : t);
                                    this.handleEvents(i, s, o, () => (this.isCacheEnabled && this._cache.set(r, e), r), n.Request)
                                } catch (e) {
                                    var s;
                                    null == (s = this.logger) || s.error("put error", {
                                        name: this.name,
                                        keyPath: this.keyPath,
                                        key: t,
                                        notNullKey: r
                                    }), o.error(e)
                                }
                            })
                        }))
                    }
                    putItems(e) {
                        return this.transaction().pipe((0, p.Z)(t => {
                            let [r, n] = t;
                            return new l.c(t => {
                                var o;
                                let i = [];
                                e.forEach(e => {
                                    let [t, r] = e, o = n.put(r, this.keyPath ? void 0 : t);
                                    o.onerror = () => {}, i.push(o)
                                });
                                let a = () => {
                                        this.isCacheEnabled && e.forEach(e => {
                                            let [t, r] = e;
                                            return this._cache.set(this._getKey(r, t), r)
                                        }), t.next(), t.complete()
                                    },
                                    s = e => {
                                        t.error(e)
                                    },
                                    l = e => {
                                        t.error(e)
                                    };
                                null == (o = r.commit) || o.call(r), r.oncomplete = a, r.onerror = s, r.onabort = l
                            })
                        }))
                    }
                    query(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readonly";
                        return S.fromTransaction(() => this.transaction(t), e, this.name)
                    }
                    constructor(e, t, r) {
                        (0, o._)(this, "db", void 0), (0, o._)(this, "name", void 0), (0, o._)(this, "options", void 0), (0, o._)(this, "_keyPath", void 0), (0, o._)(this, "_cache", new Map), (0, o._)(this, "_allLoaded", !1), (0, o._)(this, "_getAll$", void 0), (0, o._)(this, "pendingTransactions", new Set), (0, o._)(this, "isCacheEnabled", void 0), (0, o._)(this, "logger", void 0), this.db = e, this.name = t, this.options = r, this.isCacheEnabled = (null == r ? void 0 : r.cache) ?? !0, this.logger = r.logger
                    }
                }
                class $ {
                    get inVersionChange() {
                        return !!this.versionChangeTransaction
                    }
                    get originVersion() {
                        return this._originVersion
                    }
                    _readStoredVersions(e) {
                        return new Promise(t => {
                            try {
                                var r;
                                let n = self.indexedDB.open(e);
                                null == (r = this.logger) || r.debug("Reading stored versions", e), n.onsuccess = () => {
                                    var r;
                                    null == (r = this.logger) || r.debug("Stored versions read successfully", e);
                                    let o = n.result,
                                        i = o.version;
                                    if (!o.objectStoreNames.contains(N)) {
                                        o.close();
                                        let e = o.objectStoreNames.length > 0;
                                        t({
                                            localVersion: i,
                                            originVersion: e ? i : 0
                                        });
                                        return
                                    }
                                    let a = o.transaction(N, "readonly"),
                                        s = a.objectStore(N).get(R),
                                        l = 0;
                                    s.onsuccess = () => {
                                        var e;
                                        l = (null == (e = s.result) ? void 0 : e.value) ?? 0
                                    }, a.oncomplete = () => {
                                        o.close(), t({
                                            localVersion: i,
                                            originVersion: l
                                        })
                                    }, a.onerror = () => {
                                        o.close(), t({
                                            localVersion: i,
                                            originVersion: 0
                                        })
                                    }, a.onabort = () => {
                                        o.close(), t({
                                            localVersion: i,
                                            originVersion: 0
                                        })
                                    }
                                }, n.onerror = () => {
                                    t({
                                        localVersion: 0,
                                        originVersion: 0
                                    })
                                }
                            } catch {
                                t({
                                    localVersion: 0,
                                    originVersion: 0
                                })
                            }
                        })
                    }
                    retryOpenDb() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                        return t => this.isOpen ? t.pipe((0, v.W)(r => 0 === e ? (0, u.$)(r) : (0, h.O)(200).pipe((0, _.C)(this.retryOpenDb$.pipe((0, _.C)(t), this.retryOpenDb(e - 1)))))) : this.retryOpenDb$.pipe((0, _.C)(t), (0, b.L)(e - 1))
                    }
                    rawTransaction(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite",
                            r = this.versionChangeTransaction ?? this.idb.transaction(e, t),
                            n = r.objectStore(e);
                        return [r, n]
                    }
                    transaction(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite";
                        return new l.c(r => {
                            try {
                                let n = this.rawTransaction(e, t);
                                r.next(n), r.complete()
                            } catch (e) {
                                r.error(e)
                            }
                        }).pipe(this.retryOpenDb())
                    }
                    createKeyValue(e, t, r) {
                        return void 0 !== r ? this.ensureStore(e, t, r) : this.createObjectStore(e, t)
                    }
                    startFastMode() {
                        this.fastMode = !0
                    }
                    isFastModeEnabled() {
                        return this.fastMode
                    }
                    stopFastMode() {
                        return this.fastMode = !1, (0, d.v)(() => Promise.all(Array.from(this.tables.values()).map(e => e.waitForPendingTransactions()))).pipe((0, E.u)(void 0))
                    }
                    checkIncomplete() {
                        var e, t, r;
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (() => {
                            var e;
                            return null == (e = this.inCompleteChecks) ? void 0 : e.objectStores
                        })();
                        return (null == n ? void 0 : n.length) ? n.every(e => this.idb.objectStoreNames.contains(e)) ? (null == (r = this.logger) || r.info(`Check: Database "${this.idb.name}" has all object stores, all good`), !1) : (null == (e = this.logger) || e.warn(`Check: Database "${this.idb.name}" exists but some object stores are missing.`, n, this.idb.objectStoreNames), !0) : (null == (t = this.logger) || t.warn(`Check: Database "${this.idb.name}" no object store Checks !!!`), !1)
                    }
                    flushTransactions() {
                        return this.idb && 0 !== this.idb.objectStoreNames.length ? new Promise(e => {
                            try {
                                let t = Array.from(this.idb.objectStoreNames),
                                    r = this.idb.transaction(t, "readwrite");
                                r.objectStore(t[0]).count(), r.oncomplete = () => e(), r.onerror = () => e(), r.onabort = () => e()
                            } catch {
                                e()
                            }
                        }) : Promise.resolve()
                    }
                    async ensureStore(e, t, r) {
                        if (this.idb.objectStoreNames.contains(e)) return this.getKeyValue(e, {
                            cache: !1
                        });
                        if (this.isUpgrading) return new Promise((n, o) => {
                            this.pendingEnsureStore.push({
                                name: e,
                                options: t,
                                indexes: r,
                                resolve: e => n(this.getKeyValue(e, {
                                    cache: !1
                                })),
                                reject: o
                            })
                        });
                        this.isUpgrading = !0;
                        let n = [{
                                name: e,
                                options: t,
                                indexes: r
                            }],
                            o = [];
                        for (; this.pendingEnsureStore.length > 0;) {
                            let e = this.pendingEnsureStore.shift();
                            this.idb.objectStoreNames.contains(e.name) ? e.resolve(e.name) : (n.push(e), o.push(e.resolve))
                        }
                        let i = this.currentVersion + 1;
                        for (let e of (await this.flushTransactions(), await this._openIDB(this.dbName, i, () => {
                                for (let e of n)
                                    if (!this.idb.objectStoreNames.contains(e.name)) {
                                        let t = this.createObjectStore(e.name, e.options);
                                        if (e.indexes)
                                            for (let r of e.indexes) t.createIndex(r.name, r.keyPath, r.options)
                                    }
                            }), this.isUpgrading = !1, n)) this.tables.delete(e.name);
                        for (let e of n.slice(1)) o.shift()(e.name);
                        let a = this.getKeyValue(e, {
                            cache: !1
                        });
                        if (this.pendingEnsureStore.length > 0) {
                            let e = this.pendingEnsureStore.shift();
                            this.ensureStore(e.name, e.options, e.indexes).then(() => e.resolve(e.name)).catch(e.reject)
                        }
                        return a
                    }
                    async closeAndDelete() {
                        return this.close(), new Promise(e => {
                            let t = self.indexedDB.deleteDatabase(this.idb.name);
                            t.onsuccess = () => {
                                var t;
                                null == (t = this.logger) || t.info("Database deleted successfully"), e()
                            }, t.onerror = t => {
                                var r;
                                null == (r = this.logger) || r.error("Failed to delete database", t), e()
                            }, t.onblocked = () => {
                                var t;
                                null == (t = this.logger) || t.warn("Delete blocked for database"), e()
                            }
                        })
                    }
                    setupVersionChangeHandler(e) {
                        e.onversionchange = () => {
                            this.idb === e ? this.close() : e.close()
                        }
                    }
                    close() {
                        this.retryCount = 0, this.versionChangeTransaction = void 0, this.isOpen = !1, this.tables.clear(), this.idb.close()
                    }
                    getObjectStoreNames() {
                        return this.idb.objectStoreNames
                    }
                    query(e, t) {
                        return (0, u.$)(() => Error("Not implemented"))
                    }
                    execute(e, t) {
                        return (0, u.$)(() => Error("Not implemented"))
                    }
                    constructor(e = () => Promise.resolve(), t = () => Promise.resolve(), r, n) {
                        var i = this;
                        (0, o._)(this, "onBlocked", void 0), (0, o._)(this, "onDBOpened", void 0), (0, o._)(this, "logger", void 0), (0, o._)(this, "inCompleteChecks", void 0), (0, o._)(this, "idb", void 0), (0, o._)(this, "isOpen", !1), (0, o._)(this, "versionChangeTransaction", void 0), (0, o._)(this, "tables", new Map), (0, o._)(this, "fastMode", !1), (0, o._)(this, "retryCount", 0), (0, o._)(this, "dbName", ""), (0, o._)(this, "currentVersion", 0), (0, o._)(this, "_originVersion", 0), (0, o._)(this, "isUpgrading", !1), (0, o._)(this, "pendingEnsureStore", []), (0, o._)(this, "openDB", async function(e, t, r) {
                            var n;
                            let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                            i._originVersion = t, null == (n = i.logger) || n.debug("Opening DB", e, t);
                            let a = i.currentVersion > 0 ? {
                                    localVersion: i.currentVersion,
                                    originVersion: i._originVersion
                                } : await i._readStoredVersions(e),
                                s = t > a.originVersion,
                                l = s ? a.localVersion + 1 : Math.max(a.localVersion, 1),
                                c = s ? () => {
                                    var e;
                                    i.idb.objectStoreNames.contains(N) || i.idb.createObjectStore(N, {
                                        keyPath: "key"
                                    }), i.versionChangeTransaction.objectStore(N).put({
                                        key: R,
                                        value: t
                                    }), null == (e = i.logger) || e.info("onUpgradeNeeded", {
                                        originOld: a.originVersion,
                                        originNew: t,
                                        localOld: a.localVersion,
                                        localNew: l
                                    }), null == r || r({
                                        db: i,
                                        oldVersion: a.originVersion,
                                        newVersion: t
                                    })
                                } : void 0,
                                u = await i._openIDB(e, l, c);
                            return o && i.checkIncomplete() ? (await i.closeAndDelete(), i.currentVersion = 0, i.openDB(e, t, r, !1)) : u
                        }), (0, o._)(this, "_openIDB", async (e, t, r) => new Promise((n, o) => {
                            var i;
                            let a = self.indexedDB.open(e, t);
                            null == (i = this.logger) || i.debug("Opening DB request", e, t), a.onsuccess = () => {
                                var o;
                                this.idb = a.result, this.setupVersionChangeHandler(this.idb), null == (o = this.logger) || o.debug("DB Opened Successfully!", this.retryCount, !!r), this.idb.version < t || (this.isOpen = !0, this.dbName = e, this.currentVersion = this.idb.version, this.onDBOpened(this.idb.version), n(this))
                            }, a.onerror = e => {
                                var t;
                                null == (t = this.logger) || t.error("openDBRequest error", e), o(e)
                            }, a.onblocked = () => {
                                this.onBlocked().then(() => this._openIDB(e, t, r)).catch(e => o(e))
                            }, r && (a.onupgradeneeded = () => {
                                this.idb = a.result, this.setupVersionChangeHandler(this.idb);
                                let t = a.transaction;
                                if (!t) throw Error("Missing upgrade transaction");
                                this.versionChangeTransaction = t;
                                try {
                                    r()
                                } catch (e) {
                                    var i, s;
                                    try {
                                        null == (i = a.transaction) || i.abort()
                                    } catch (e) {
                                        null == (s = this.logger) || s.error("Failed to abort transaction", "onupgradeneeded", e)
                                    }
                                    o(e)
                                }
                                t.oncomplete = () => {
                                    this.versionChangeTransaction = void 0, this.isOpen = !0, this.dbName = e, this.currentVersion = this.idb.version, n(this)
                                }, t.onabort = e => {
                                    var t;
                                    null == (t = this.logger) || t.error("Upgrade transaction aborted", e), this.versionChangeTransaction = void 0, o(e)
                                }, t.onerror = e => {
                                    var t;
                                    null == (t = this.logger) || t.error("Upgrade transaction error", e), this.versionChangeTransaction = void 0, o(e)
                                }
                            })
                        })), (0, o._)(this, "retryOpenDb$", new l.c(e => (0, f.H)(this._openIDB(this.idb.name, this.idb.version)).subscribe(e)).pipe((0, g.u)({
                            resetOnError: !0,
                            resetOnComplete: !0,
                            resetOnRefCountZero: !0
                        }))), (0, o._)(this, "createObjectStore", (e, t) => {
                            this.idb.objectStoreNames.contains(e) || this.idb.createObjectStore(e, t);
                            let r = new T(this, e, {
                                cache: (null == t ? void 0 : t.cache) ?? !0,
                                logger: this.logger
                            });
                            return this.tables.set(e, r), r
                        }), (0, o._)(this, "getKeyValue", (e, t) => {
                            let r = this.tables.get(e);
                            return r || (r = new T(this, e, {
                                cache: (null == t ? void 0 : t.cache) ?? !0,
                                logger: this.logger
                            }), this.tables.set(e, r)), r
                        }), (0, o._)(this, "deleteKeyValue", e => {
                            this.tables.delete(e), this.idb.deleteObjectStore(e)
                        }), this.onBlocked = e, this.onDBOpened = t, this.logger = r, this.inCompleteChecks = n
                    }
                }
                let O = null;

                function M(e) {
                    if (!O) throw Error("DB not initialized");
                    return O.getKeyValue(e, {
                        cache: !1
                    })
                }

                function A(e) {
                    if (!O) throw Error("DB not initialized");
                    let t = O.getKeyValue(e, {
                        cache: !1
                    });
                    if (!(t instanceof T)) throw Error("Expected IndexDBKeyValue instance");
                    return t
                }

                function D(e, t) {
                    let r = {
                        id: e,
                        result: t
                    };
                    self.postMessage(r)
                }

                function k(e, t) {
                    let r = {
                        id: e,
                        error: t instanceof Error ? t.message : String(t)
                    };
                    self.postMessage(r)
                }
                async function P(e) {
                    if ("openDB" === e.method) {
                        O || (O = new $(() => new Promise(() => {})));
                        let [t, r, n] = e.args;
                        return await O.openDB(t, r, n ? e => {
                            var t, r;
                            let {
                                db: n
                            } = e;
                            (null == (r = n.getObjectStoreNames) || null == (t = r.call(n)) ? void 0 : t.contains("_meta")) || n.createKeyValue("_meta", {
                                keyPath: "unique_id"
                            })
                        } : void 0), Array.from(O.getObjectStoreNames())
                    }
                    if (!O) throw Error("DB not initialized");
                    switch (e.method) {
                        case "createKeyValue": {
                            let [t, r, n] = e.args;
                            return await O.createKeyValue(t, r, n ?? []), !0
                        }
                        case "getObjectStoreNames":
                            return Array.from(O.getObjectStoreNames());
                        case "close":
                            var t;
                            return null == (t = O.close) || t.call(O), !0
                    }
                }
                async function x(e) {
                    let t = M(e.storeName);
                    switch (e.method) {
                        case "get":
                            return (0, s._)(t.get(e.args[0]));
                        case "put":
                            return (0, s._)(t.put(e.args[0], e.args[1]));
                        case "add":
                            return (0, s._)(t.add(e.args[0], e.args[1]));
                        case "delete":
                            return (0, s._)(t.delete(e.args[0]));
                        case "clear":
                            return (0, s._)(t.clear());
                        case "count":
                            return (0, s._)(t.count(e.args[0]));
                        case "getAll":
                            return (0, s._)(t.getAll());
                        case "getAllKeys":
                            return (0, s._)(t.getAllKeys(e.args[0], e.args[1]));
                        case "getKey":
                            return (0, s._)(t.getKey(e.args[0]));
                        case "getItems":
                            return (0, s._)(t.getItems(e.args[0]));
                        case "putItems":
                            return (0, s._)(t.putItems(e.args[0]));
                        case "addItems":
                            return (0, s._)(t.addItems(e.args[0]));
                        case "deleteItems":
                            return (0, s._)(t.deleteItems(e.args[0]))
                    }
                }
                async function C(e) {
                    let [t] = e.args, r = A(e.storeName), n = t.mode ?? ("delete" === t.terminal ? "readwrite" : "readonly"), o = S.fromTransaction(() => r.transaction(n), t.indexName, t.storeName).configure({
                        range: t.range,
                        direction: t.direction,
                        limit: t.limit,
                        offset: t.offset
                    });
                    switch (t.terminal) {
                        case "toArray":
                            return (0, s._)(o.toArray());
                        case "first":
                            return (0, s._)(o.first());
                        case "last":
                            return (0, s._)(o.last());
                        case "count":
                            return (0, s._)(o.count());
                        case "keys":
                            return (0, s._)(o.keys());
                        case "delete":
                            return (0, s._)(o.delete())
                    }
                }
                async function L(e) {
                    switch (e.target) {
                        case "db":
                            return P(e);
                        case "kv":
                            return x(e);
                        case "query":
                            return C(e)
                    }
                }
                self.onmessage = e => {
                    let t = e.data,
                        {
                            id: r
                        } = t;
                    L(t).then(e => D(r, e)).catch(e => k(r, e))
                }
            },
            69075: function(e, t, r) {
                r.d(t, {
                    W: () => n
                });
                let n = Symbol.for("Console")
            },
            1957: function(e, t, r) {
                r.d(t, {
                    k: () => n
                });
                let n = new(r(78949)).mc
            },
            54366: function(e, t, r) {
                r.r(t), r.d(t, {
                    BaseLogger: () => n.qM,
                    LogLevel: () => o.$b,
                    Logger: () => n.Vy,
                    LoggerFactory: () => n.PL,
                    bindFactory: () => n.M3,
                    container: () => i.k,
                    getLoggerFactory: () => n.ln
                });
                var n = r(61571),
                    o = r(33615),
                    i = r(1957)
            },
            95844: function(e, t, r) {
                r.d(t, {
                    Y: () => o,
                    p: () => n
                });
                let n = {
                    value: !1
                };

                function o() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    n.value && console.log(">>> gol:", ...t)
                }
            },
            61571: function(e, t, r) {
                r.d(t, {
                    M3: () => v,
                    qM: () => y,
                    Vy: () => _,
                    ln: () => E,
                    PL: () => b
                });
                var n, o, i = r(51116);
                let a = {
                    showTime: !0,
                    showLevelLabel: !0,
                    withStyles: !0,
                    store: "none",
                    debug: !1,
                    styles: {
                        Critical: {
                            color: "white",
                            backgroundColor: "#7f0000"
                        },
                        Error: {
                            backgroundColor: "#b71c1c",
                            color: "white"
                        },
                        Warn: {
                            backgroundColor: "#fdd835",
                            color: "black"
                        },
                        Info: {
                            backgroundColor: "#2e7d32",
                            color: "white"
                        },
                        Debug: {
                            backgroundColor: "#3d5afe",
                            color: "white"
                        }
                    }
                };
                var s = r(95844),
                    l = r(33615),
                    c = r(69075),
                    u = r(78949),
                    h = r(1957),
                    d = function(e, t, r, n) {
                        var o, i = arguments.length,
                            a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                        else
                            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                        return i > 3 && a && Object.defineProperty(t, r, a), a
                    },
                    f = function(e, t) {
                        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    },
                    p = function(e, t) {
                        return function(r, n) {
                            t(r, n, e)
                        }
                    };
                let m = [l.$b.Debug, l.$b.Info, l.$b.Warn, l.$b.Error, l.$b.Critical],
                    g = (e, t) => m.indexOf(e) >= m.indexOf(t),
                    y = (o = n = class {
                        formatTime(e) {
                            return this.configs.showTime ? (0, l.fU)(e) : ""
                        }
                        getLogger(e) {
                            return new _(e, o.instance ?? this)
                        }
                        changeLevel(e) {
                            this.loglevel = e
                        }
                        constructor(e, t = l.$b.Debug, r, n, o) {
                            var c, u = this;
                            (0, i._)(this, "console", void 0), (0, i._)(this, "loglevel", void 0), (0, i._)(this, "store", void 0), (0, i._)(this, "callback", void 0), (0, i._)(this, "configs", void 0), (0, i._)(this, "disable", !1), (0, i._)(this, "log", (e, t, r, n) => {
                                var o, i, a;
                                let s = new Date,
                                    l = this.formatTime(s);
                                !this.disable && g(e, this.loglevel) && this.console.log(l, this.configs.showLevelLabel ? e : " ", t, r, ...n), null == (o = (i = this).callback) || o.call(i, l, e, t, ...n), null == (a = this.store) || a.save(s.getTime(), t, e, n).catch(e => {})
                            }), (0, i._)(this, "critical", function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                u.log(l.$b.Critical, e, u.configs.styles.Critical, r)
                            }), (0, i._)(this, "error", function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                u.log(l.$b.Error, e, u.configs.styles.Error, r)
                            }), (0, i._)(this, "warn", function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                u.log(l.$b.Warn, e, u.configs.styles.Warn, r)
                            }), (0, i._)(this, "info", function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                u.log(l.$b.Info, e, u.configs.styles.Info, r)
                            }), (0, i._)(this, "debug", function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                u.log(l.$b.Debug, e, u.configs.styles.Debug, r)
                            }), (0, i._)(this, "report", () => {
                                var e;
                                return null == (e = this.store) ? void 0 : e.report()
                            }), (0, i._)(this, "clean", () => {
                                var e;
                                return null == (e = this.store) ? void 0 : e.clean()
                            }), this.console = e, this.loglevel = t, this.store = r, this.callback = o, this.loglevel = t, this.configs = (0, l.CK)(a, n), this.console.withStyles = this.configs.withStyles, s.p.value = this.configs.debug, (0, s.Y)("gol new", t, n), "none" !== this.configs.store && (null == (c = this.store) || c.init().catch(e => {
                                (0, s.Y)("store init failed", e)
                            }))
                        }
                    }, (0, i._)(n, "instance", void 0), n);
                y = o = d([(0, u._G)(), p(0, (0, u.WQ)(c.W)), p(2, (0, u.WQ)("LogStore")), f("design:paramtypes", [Object, String, Object, Object, Function])], y);
                class _ {
                    constructor(e, t) {
                        var r = this;
                        (0, i._)(this, "tag", void 0), (0, i._)(this, "gol", void 0), (0, i._)(this, "critical", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.gol.critical(r.tag, ...t)
                        }), (0, i._)(this, "error", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.gol.error(r.tag, ...t)
                        }), (0, i._)(this, "warn", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.gol.warn(r.tag, ...t)
                        }), (0, i._)(this, "info", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.gol.info(r.tag, ...t)
                        }), (0, i._)(this, "debug", function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.gol.debug(r.tag, ...t)
                        }), this.tag = e, this.gol = t
                    }
                }
                let b = e => {
                    let t;
                    return function() {
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.$b.Debug,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            o = arguments.length > 2 ? arguments[2] : void 0;
                        if (!t) {
                            let i = e.get(c.W),
                                a = e.get("LogStore");
                            t = new y(i, r, a, n, o)
                        }
                        return t
                    }
                };

                function v() {
                    h.k.bind("LoggerFactory").toFactory(b)
                }
                let E = () => h.k.get("LoggerFactory")
            },
            33615: function(e, t, r) {
                var n;

                function o(e) {
                    let t = e.getHours(),
                        r = e.getMinutes().toString().padStart(2, "0"),
                        n = e.getSeconds().toString().padStart(2, "0"),
                        o = e.getMilliseconds().toString().padEnd(3, "0");
                    return `[${t}:${r}:${n}.${o}]`
                }

                function i(e, t) {
                    if (!t) return e;
                    for (let r in t) null != t[r] && (e[r] = t[r]);
                    return e
                }
                r.d(t, {
                        $b: () => n,
                        CK: () => i,
                        fU: () => o
                    }),
                    function(e) {
                        e.Critical = "Critical", e.Error = "Error", e.Warn = "Warn", e.Info = "Info", e.Debug = "Debug"
                    }(n || (n = {}));

                function a(e) {
                    let t = typeof e;
                    switch (t) {
                        case "bigint":
                        case "boolean":
                        case "number":
                            return e.toString();
                        case "string":
                            return e;
                        case "function":
                            return e.name;
                        case "object":
                            try {
                                return JSON.stringify(e)
                            } catch {
                                return e.toString()
                            }
                        default:
                            return t
                    }
                }
            },
            86779: function(e, t) {
                let r = "RUNTIME-001",
                    n = "RUNTIME-002",
                    o = "RUNTIME-003",
                    i = "RUNTIME-004",
                    a = "RUNTIME-005",
                    s = "RUNTIME-006",
                    l = "RUNTIME-007",
                    c = "RUNTIME-008",
                    u = "RUNTIME-009",
                    h = "TYPE-001",
                    d = "BUILD-001",
                    f = "BUILD-002",
                    p = e => {
                        let t = e.split("-")[0].toLowerCase();
                        return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${t}/${e}`
                    },
                    m = (e, t, r, n) => {
                        let o = [`${[t[e]]} #${e}`];
                        return r && o.push(`args: ${JSON.stringify(r)}`), o.push(p(e)), n && o.push(`Original Error Message:
 ${n}`), o.join("\n")
                    },
                    g = {
                        [r]: "Failed to get remoteEntry exports.",
                        [n]: 'The remote entry interface does not contain "init"',
                        [o]: "Failed to get manifest.",
                        [i]: "Failed to locate remote.",
                        [a]: "Invalid loadShareSync function call from bundler runtime",
                        [s]: "Invalid loadShareSync function call from runtime",
                        [l]: "Failed to get remote snapshot.",
                        [c]: "Failed to load script resources.",
                        [u]: "Please call createInstance first."
                    },
                    y = {
                        [h]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
                    },
                    _ = {
                        [d]: "Failed to find expose module.",
                        [f]: "PublicPath is required in prod mode."
                    },
                    b = {
                        ...g,
                        ...y,
                        ..._
                    };
                t.BUILD_001 = d, t.BUILD_002 = f, t.RUNTIME_001 = r, t.RUNTIME_002 = n, t.RUNTIME_003 = o, t.RUNTIME_004 = i, t.RUNTIME_005 = a, t.RUNTIME_006 = s, t.RUNTIME_007 = l, t.RUNTIME_008 = c, t.RUNTIME_009 = u, t.TYPE_001 = h, t.buildDescMap = _, t.errorDescMap = b, t.getShortErrorMsg = m, t.runtimeDescMap = g, t.typeDescMap = y
            },
            47926: function(e, t, r) {
                var n = r(84582),
                    o = r(86779);
                let i = "[ Federation Runtime ]",
                    a = n.createLogger(i);

                function s(e, t) {
                    e || l(t)
                }

                function l(e) {
                    if (e instanceof Error) throw e.message.startsWith(i) || (e.message = `${i}: ${e.message}`), e;
                    throw Error(`${i}: ${e}`)
                }

                function c(e) {
                    e instanceof Error && (e.message.startsWith(i) || (e.message = `${i}: ${e.message}`)), a.warn(e)
                }

                function u(e, t) {
                    return -1 === e.findIndex(e => e === t) && e.push(t), e
                }

                function h(e) {
                    return "version" in e && e.version ? `${e.name}:${e.version}` : "entry" in e && e.entry ? `${e.name}:${e.entry}` : `${e.name}`
                }

                function d(e) {
                    return void 0 !== e.entry
                }

                function f(e) {
                    return !e.entry.includes(".json")
                }
                async function p(e, t) {
                    try {
                        return await e()
                    } catch (e) {
                        t || c(e);
                        return
                    }
                }

                function m(e) {
                    return e && "object" == typeof e
                }
                let g = Object.prototype.toString;

                function y(e) {
                    return "[object Object]" === g.call(e)
                }

                function _(e, t) {
                    let r = /^(https?:)?\/\//i;
                    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "")
                }

                function b(e) {
                    return Array.isArray(e) ? e : [e]
                }

                function v(e) {
                    let t = {
                        url: "",
                        type: "global",
                        globalName: ""
                    };
                    return n.isBrowserEnv() || n.isReactNativeEnv() ? "remoteEntry" in e ? {
                        url: e.remoteEntry,
                        type: e.remoteEntryType,
                        globalName: e.globalName
                    } : t : "ssrRemoteEntry" in e ? {
                        url: e.ssrRemoteEntry || t.url,
                        type: e.ssrRemoteEntryType || t.type,
                        globalName: e.globalName
                    } : t
                }
                let E = (e, t) => {
                        let r;
                        return r = e.endsWith("/") ? e.slice(0, -1) : e, t.startsWith(".") && (t = t.slice(1)), r += t
                    },
                    S = "object" == typeof globalThis ? globalThis : window,
                    I = (() => {
                        try {
                            return document.defaultView
                        } catch {
                            return S
                        }
                    })(),
                    w = I;

                function N(e, t, r) {
                    Object.defineProperty(e, t, {
                        value: r,
                        configurable: !1,
                        writable: !0
                    })
                }

                function R(e, t) {
                    return Object.hasOwnProperty.call(e, t)
                }
                R(S, "__GLOBAL_LOADING_REMOTE_ENTRY__") || N(S, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
                let T = S.__GLOBAL_LOADING_REMOTE_ENTRY__;

                function $(e) {
                    R(e, "__VMOK__") && !R(e, "__FEDERATION__") && N(e, "__FEDERATION__", e.__VMOK__), R(e, "__FEDERATION__") || (N(e, "__FEDERATION__", {
                        __GLOBAL_PLUGIN__: [],
                        __INSTANCES__: [],
                        moduleInfo: {},
                        __SHARE__: {},
                        __MANIFEST_LOADING__: {},
                        __PRELOADED_MAP__: new Map
                    }), N(e, "__VMOK__", e.__FEDERATION__)), e.__FEDERATION__.__GLOBAL_PLUGIN__ ??= [], e.__FEDERATION__.__INSTANCES__ ??= [], e.__FEDERATION__.moduleInfo ??= {}, e.__FEDERATION__.__SHARE__ ??= {}, e.__FEDERATION__.__MANIFEST_LOADING__ ??= {}, e.__FEDERATION__.__PRELOADED_MAP__ ??= new Map
                }

                function O() {
                    S.__FEDERATION__.__GLOBAL_PLUGIN__ = [], S.__FEDERATION__.__INSTANCES__ = [], S.__FEDERATION__.moduleInfo = {}, S.__FEDERATION__.__SHARE__ = {}, S.__FEDERATION__.__MANIFEST_LOADING__ = {}, Object.keys(T).forEach(e => {
                        delete T[e]
                    })
                }

                function M(e) {
                    S.__FEDERATION__.__INSTANCES__.push(e)
                }

                function A() {
                    return S.__FEDERATION__.__DEBUG_CONSTRUCTOR__
                }

                function D(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.isDebugMode();
                    t && (S.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e, S.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.21.4")
                }

                function k(e, t) {
                    if ("string" == typeof t) {
                        if (e[t]) return {
                            value: e[t],
                            key: t
                        };
                        for (let r of Object.keys(e)) {
                            let [n, o] = r.split(":"), i = `${n}:${t}`, a = e[i];
                            if (a) return {
                                value: a,
                                key: i
                            }
                        }
                        return {
                            value: void 0,
                            key: t
                        }
                    }
                    throw Error("key must be string")
                }
                $(S), $(I);
                let P = () => I.__FEDERATION__.moduleInfo,
                    x = (e, t) => {
                        let r = k(t, h(e)).value;
                        if (r && !r.version && "version" in e && e.version && (r.version = e.version), r) return r;
                        if ("version" in e && e.version) {
                            let {
                                version: t,
                                ...r
                            } = e, n = h(r), o = k(I.__FEDERATION__.moduleInfo, n).value;
                            if ((null == o ? void 0 : o.version) === t) return o
                        }
                    },
                    C = e => x(e, I.__FEDERATION__.moduleInfo),
                    L = (e, t) => {
                        let r = h(e);
                        return I.__FEDERATION__.moduleInfo[r] = t, I.__FEDERATION__.moduleInfo
                    },
                    F = e => (I.__FEDERATION__.moduleInfo = {
                        ...I.__FEDERATION__.moduleInfo,
                        ...e
                    }, () => {
                        for (let t of Object.keys(e)) delete I.__FEDERATION__.moduleInfo[t]
                    }),
                    j = (e, t) => {
                        let r = t || `__FEDERATION_${e}:custom__`,
                            n = S[r];
                        return {
                            remoteEntryKey: r,
                            entryExports: n
                        }
                    },
                    H = e => {
                        let {
                            __GLOBAL_PLUGIN__: t
                        } = I.__FEDERATION__;
                        e.forEach(e => {
                            -1 === t.findIndex(t => t.name === e.name) ? t.push(e) : c(`The plugin ${e.name} has been registered.`)
                        })
                    },
                    V = () => I.__FEDERATION__.__GLOBAL_PLUGIN__,
                    U = e => S.__FEDERATION__.__PRELOADED_MAP__.get(e),
                    B = e => S.__FEDERATION__.__PRELOADED_MAP__.set(e, !0),
                    G = "default",
                    W = "global",
                    K = "[0-9A-Za-z-]+",
                    q = `(?:\\+(${K}(?:\\.${K})*))`,
                    z = "0|[1-9]\\d*",
                    Y = "[0-9]+",
                    Z = "\\d*[a-zA-Z-][a-zA-Z0-9-]*",
                    J = `(?:${Y}|${Z})`,
                    X = `(?:-?(${J}(?:\\.${J})*))`,
                    Q = `(?:${z}|${Z})`,
                    ee = `(?:-(${Q}(?:\\.${Q})*))`,
                    et = `${z}|x|X|\\*`,
                    er = `[v=\\s]*(${et})(?:\\.(${et})(?:\\.(${et})(?:${ee})?${q}?)?)?`,
                    en = `^\\s*(${er})\\s+-\\s+(${er})\\s*$`,
                    eo = `(${Y})\\.(${Y})\\.(${Y})`,
                    ei = `[v=\\s]*${eo}${X}?${q}?`,
                    ea = "((?:<|>)?=?)",
                    es = `(\\s*)${ea}\\s*(${ei}|${er})`,
                    el = "(?:~>?)",
                    ec = `(\\s*)${el}\\s+`,
                    eu = "(?:\\^)",
                    eh = `(\\s*)${eu}\\s+`,
                    ed = "(<|>)?=?\\s*\\*",
                    ef = `^${eu}${er}$`,
                    ep = `(${z})\\.(${z})\\.(${z})`,
                    em = `v?${ep}${ee}?${q}?`,
                    eg = `^${el}${er}$`,
                    ey = `^${ea}\\s*${er}$`,
                    e_ = `^${ea}\\s*(${em})$|^$`,
                    eb = "^\\s*>=\\s*0.0.0\\s*$";

                function ev(e) {
                    return new RegExp(e)
                }

                function eE(e) {
                    return !e || "x" === e.toLowerCase() || "*" === e
                }

                function eS() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return e => t.reduce((e, t) => t(e), e)
                }

                function eI(e) {
                    return e.match(ev(e_))
                }

                function ew(e, t, r, n) {
                    let o = `${e}.${t}.${r}`;
                    return n ? `${o}-${n}` : o
                }

                function eN(e) {
                    return e.replace(ev(en), (e, t, r, n, o, i, a, s, l, c, u, h) => (t = eE(r) ? "" : eE(n) ? `>=${r}.0.0` : eE(o) ? `>=${r}.${n}.0` : `>=${t}`, s = eE(l) ? "" : eE(c) ? `<${Number(l)+1}.0.0-0` : eE(u) ? `<${l}.${Number(c)+1}.0-0` : h ? `<=${l}.${c}.${u}-${h}` : `<=${s}`, `${t} ${s}`.trim()))
                }

                function eR(e) {
                    return e.replace(ev(es), "$1$2$3")
                }

                function eT(e) {
                    return e.replace(ev(ec), "$1~")
                }

                function e$(e) {
                    return e.replace(ev(eh), "$1^")
                }

                function eO(e) {
                    return e.trim().split(/\s+/).map(e => e.replace(ev(ef), (e, t, r, n, o) => {
                        if (eE(t)) return "";
                        if (eE(r)) return `>=${t}.0.0 <${Number(t)+1}.0.0-0`;
                        if (eE(n))
                            if ("0" === t) return `>=${t}.${r}.0 <${t}.${Number(r)+1}.0-0`;
                            else return `>=${t}.${r}.0 <${Number(t)+1}.0.0-0`;
                        if (o)
                            if ("0" !== t) return `>=${t}.${r}.${n}-${o} <${Number(t)+1}.0.0-0`;
                            else if ("0" === r) return `>=${t}.${r}.${n}-${o} <${t}.${r}.${Number(n)+1}-0`;
                        else return `>=${t}.${r}.${n}-${o} <${t}.${Number(r)+1}.0-0`;
                        if ("0" === t)
                            if ("0" === r) return `>=${t}.${r}.${n} <${t}.${r}.${Number(n)+1}-0`;
                            else return `>=${t}.${r}.${n} <${t}.${Number(r)+1}.0-0`;
                        return `>=${t}.${r}.${n} <${Number(t)+1}.0.0-0`
                    })).join(" ")
                }

                function eM(e) {
                    return e.trim().split(/\s+/).map(e => e.replace(ev(eg), (e, t, r, n, o) => eE(t) ? "" : eE(r) ? `>=${t}.0.0 <${Number(t)+1}.0.0-0` : eE(n) ? `>=${t}.${r}.0 <${t}.${Number(r)+1}.0-0` : o ? `>=${t}.${r}.${n}-${o} <${t}.${Number(r)+1}.0-0` : `>=${t}.${r}.${n} <${t}.${Number(r)+1}.0-0`)).join(" ")
                }

                function eA(e) {
                    return e.split(/\s+/).map(e => e.trim().replace(ev(ey), (e, t, r, n, o, i) => {
                        let a = eE(r),
                            s = a || eE(n),
                            l = s || eE(o);
                        if ("=" === t && l && (t = ""), i = "", a)
                            if (">" === t || "<" === t) return "<0.0.0-0";
                            else return "*";
                        return t && l ? (s && (n = 0), o = 0, ">" === t ? (t = ">=", s ? (r = Number(r) + 1, n = 0) : n = Number(n) + 1, o = 0) : "<=" === t && (t = "<", s ? r = Number(r) + 1 : n = Number(n) + 1), "<" === t && (i = "-0"), `${t+r}.${n}.${o}${i}`) : s ? `>=${r}.0.0${i} <${Number(r)+1}.0.0-0` : l ? `>=${r}.${n}.0${i} <${r}.${Number(n)+1}.0-0` : e
                    })).join(" ")
                }

                function eD(e) {
                    return e.trim().replace(ev(ed), "")
                }

                function ek(e) {
                    return e.trim().replace(ev(eb), "")
                }

                function eP(e, t) {
                    return (e = Number(e) || e) > (t = Number(t) || t) ? 1 : e === t ? 0 : -1
                }

                function ex(e, t) {
                    let {
                        preRelease: r
                    } = e, {
                        preRelease: n
                    } = t;
                    if (void 0 === r && n) return 1;
                    if (r && void 0 === n) return -1;
                    if (void 0 === r && void 0 === n) return 0;
                    for (let e = 0, t = r.length; e <= t; e++) {
                        let t = r[e],
                            o = n[e];
                        if (t !== o) {
                            if (void 0 === t && void 0 === o) return 0;
                            if (!t) return 1;
                            if (!o) return -1;
                            return eP(t, o)
                        }
                    }
                    return 0
                }

                function eC(e, t) {
                    return eP(e.major, t.major) || eP(e.minor, t.minor) || eP(e.patch, t.patch) || ex(e, t)
                }

                function eL(e, t) {
                    return e.version === t.version
                }

                function eF(e, t) {
                    switch (e.operator) {
                        case "":
                        case "=":
                            return eL(e, t);
                        case ">":
                            return 0 > eC(e, t);
                        case ">=":
                            return eL(e, t) || 0 > eC(e, t);
                        case "<":
                            return eC(e, t) > 0;
                        case "<=":
                            return eL(e, t) || eC(e, t) > 0;
                        case void 0:
                            return !0;
                        default:
                            return !1
                    }
                }

                function ej(e) {
                    return eS(eO, eM, eA, eD)(e)
                }

                function eH(e) {
                    return eS(eN, eR, eT, e$)(e.trim()).split(/\s+/).join(" ")
                }

                function eV(e, t) {
                    if (!e) return !1;
                    let r = eI(e);
                    if (!r) return !1;
                    let [, n, , o, i, a, s] = r, l = {
                        operator: n,
                        version: ew(o, i, a, s),
                        major: o,
                        minor: i,
                        patch: a,
                        preRelease: null == s ? void 0 : s.split(".")
                    };
                    for (let e of t.split("||")) {
                        let t = e.trim();
                        if (!t || "*" === t || "x" === t) return !0;
                        try {
                            let e = eH(t);
                            if (!e.trim()) return !0;
                            let r = e.split(" ").map(e => ej(e)).join(" ");
                            if (!r.trim()) return !0;
                            let n = r.split(/\s+/).map(e => ek(e)).filter(Boolean);
                            if (0 === n.length) continue;
                            let o = !0;
                            for (let e of n) {
                                let t = eI(e);
                                if (!t) {
                                    o = !1;
                                    break
                                }
                                let [, r, , n, i, a, s] = t, c = {
                                    operator: r,
                                    version: ew(n, i, a, s),
                                    major: n,
                                    minor: i,
                                    patch: a,
                                    preRelease: null == s ? void 0 : s.split(".")
                                };
                                if (!eF(c, l)) {
                                    o = !1;
                                    break
                                }
                            }
                            if (o) return !0
                        } catch (e) {
                            console.error(`[semver] Error processing range part "${t}":`, e);
                            continue
                        }
                    }
                    return !1
                }

                function eU(e, t, r, n) {
                    let o;
                    return o = "get" in e ? e.get : "lib" in e ? () => Promise.resolve(e.lib) : () => Promise.resolve(() => {
                        throw Error(`Can not get shared '${r}'!`)
                    }), {
                        deps: [],
                        useIn: [],
                        from: t,
                        loading: null,
                        ...e,
                        shareConfig: {
                            requiredVersion: `^${e.version}`,
                            singleton: !1,
                            eager: !1,
                            strictVersion: !1,
                            ...e.shareConfig
                        },
                        get: o,
                        loaded: null != e && !!e.loaded || "lib" in e || void 0,
                        version: e.version ?? "0",
                        scope: Array.isArray(e.scope) ? e.scope : [e.scope ?? "default"],
                        strategy: (e.strategy ?? n) || "version-first"
                    }
                }

                function eB(e, t) {
                    let r = t.shared || {},
                        n = t.name,
                        o = Object.keys(r).reduce((e, o) => {
                            let i = b(r[o]);
                            return e[o] = e[o] || [], i.forEach(r => {
                                e[o].push(eU(r, n, o, t.shareStrategy))
                            }), e
                        }, {}),
                        i = {
                            ...e.shared
                        };
                    return Object.keys(o).forEach(e => {
                        i[e] ? o[e].forEach(t => {
                            i[e].find(e => e.version === t.version) || i[e].push(t)
                        }) : i[e] = o[e]
                    }), {
                        shared: i,
                        shareInfos: o
                    }
                }

                function eG(e, t) {
                    let r = e => {
                        if (!Number.isNaN(Number(e))) {
                            let t = e.split("."),
                                r = e;
                            for (let e = 0; e < 3 - t.length; e++) r += ".0";
                            return r
                        }
                        return e
                    };
                    return !!eV(r(e), `<=${r(t)}`)
                }
                let eW = (e, t) => {
                        let r = t || function(e, t) {
                            return eG(e, t)
                        };
                        return Object.keys(e).reduce((e, t) => !e || r(e, t) || "0" === e ? t : e, 0)
                    },
                    eK = e => !!e.loaded || "function" == typeof e.lib,
                    eq = e => !!e.loading;

                function ez(e, t, r) {
                    let n = e[t][r],
                        o = function(e, t) {
                            return !eK(n[e]) && eG(e, t)
                        };
                    return eW(e[t][r], o)
                }

                function eY(e, t, r) {
                    let n = e[t][r],
                        o = function(e, t) {
                            let r = e => eK(e) || eq(e);
                            if (r(n[t]))
                                if (r(n[e])) return !!eG(e, t);
                                else return !0;
                            return !r(n[e]) && eG(e, t)
                        };
                    return eW(e[t][r], o)
                }

                function eZ(e) {
                    return "loaded-first" === e ? eY : ez
                }

                function eJ(e, t, r, n) {
                    if (!e) return;
                    let {
                        shareConfig: o,
                        scope: i = G,
                        strategy: a
                    } = r;
                    for (let s of Array.isArray(i) ? i : [i])
                        if (o && e[s] && e[s][t]) {
                            let {
                                requiredVersion: i
                            } = o, u = eZ(a)(e, s, t), h = () => {
                                if (o.singleton) {
                                    if ("string" == typeof i && !eV(u, i)) {
                                        let n = `Version ${u} from ${u&&e[s][t][u].from} of shared singleton module ${t} does not satisfy the requirement of ${r.from} which needs ${i})`;
                                        o.strictVersion ? l(n) : c(n)
                                    }
                                    return e[s][t][u]
                                }
                                if (!1 === i || "*" === i || eV(u, i)) return e[s][t][u];
                                for (let [r, n] of Object.entries(e[s][t]))
                                    if (eV(r, i)) return n
                            }, d = {
                                shareScopeMap: e,
                                scope: s,
                                pkgName: t,
                                version: u,
                                GlobalFederation: w.__FEDERATION__,
                                resolver: h
                            };
                            return (n.emit(d) || d).resolver()
                        }
                }

                function eX() {
                    return w.__FEDERATION__.__SHARE__
                }

                function eQ(e) {
                    let {
                        pkgName: t,
                        extraOptions: r,
                        shareInfos: n
                    } = e, o = e => {
                        if (!e) return;
                        let t = {};
                        e.forEach(e => {
                            t[e.version] = e
                        });
                        let r = function(e, r) {
                                return !eK(t[e]) && eG(e, r)
                            },
                            n = eW(t, r);
                        return t[n]
                    };
                    return Object.assign({}, ((null == r ? void 0 : r.resolver) ?? o)(n[t]), null == r ? void 0 : r.customShareInfo)
                }

                function e0() {
                    return "undefined" != typeof FEDERATION_BUILD_IDENTIFIER ? FEDERATION_BUILD_IDENTIFIER : ""
                }

                function e1(e, t) {
                    for (let r of e) {
                        let e = t.startsWith(r.name),
                            n = t.replace(r.name, "");
                        if (e) {
                            if (n.startsWith("/")) return {
                                pkgNameOrAlias: r.name,
                                expose: n = `.${n}`,
                                remote: r
                            };
                            else if ("" === n) return {
                                pkgNameOrAlias: r.name,
                                expose: ".",
                                remote: r
                            }
                        }
                        let o = r.alias && t.startsWith(r.alias),
                            i = r.alias && t.replace(r.alias, "");
                        if (r.alias && o) {
                            if (i && i.startsWith("/")) return {
                                pkgNameOrAlias: r.alias,
                                expose: i = `.${i}`,
                                remote: r
                            };
                            else if ("" === i) return {
                                pkgNameOrAlias: r.alias,
                                expose: ".",
                                remote: r
                            }
                        }
                    }
                }

                function e9(e, t) {
                    for (let r of e)
                        if (t === r.name || r.alias && t === r.alias) return r
                }

                function e2(e, t) {
                    let r = V(),
                        n = [t.hooks, t.remoteHandler.hooks, t.sharedHandler.hooks, t.snapshotHandler.hooks, t.loaderHook, t.bridgeHook];
                    return r.length > 0 && r.forEach(t => {
                        (null == e ? void 0 : e.find(e => e.name !== t.name)) && e.push(t)
                    }), e && e.length > 0 && e.forEach(e => {
                        n.forEach(r => {
                            r.applyPlugin(e, t)
                        })
                    }), e
                }
                let e3 = ".then(callbacks[0]).catch(callbacks[1])";
                async function e8(e) {
                    let {
                        entry: t,
                        remoteEntryExports: r
                    } = e;
                    return new Promise((e, n) => {
                        try {
                            r ? e(r) : "undefined" != typeof FEDERATION_ALLOW_NEW_FUNCTION ? Function("callbacks", `import("${t}")${e3}`)([e, n]) : import(t).then(e).catch(n)
                        } catch (e) {
                            n(e)
                        }
                    })
                }
                async function e5(e) {
                    let {
                        entry: t,
                        remoteEntryExports: r
                    } = e;
                    return new Promise((e, n) => {
                        try {
                            r ? e(r) : Function("callbacks", `System.import("${t}")${e3}`)([e, n])
                        } catch (e) {
                            n(e)
                        }
                    })
                }

                function e4(e, t, r) {
                    let {
                        remoteEntryKey: n,
                        entryExports: i
                    } = j(e, t);
                    return s(i, o.getShortErrorMsg(o.RUNTIME_001, o.runtimeDescMap, {
                        remoteName: e,
                        remoteEntryUrl: r,
                        remoteEntryKey: n
                    })), i
                }
                async function e6(e) {
                    let {
                        name: t,
                        globalName: r,
                        entry: i,
                        loaderHook: a,
                        getEntryUrl: l
                    } = e, {
                        entryExports: c
                    } = j(t, r);
                    if (c) return c;
                    let u = l ? l(i) : i;
                    return n.loadScript(u, {
                        attrs: {},
                        createScriptHook: (e, t) => {
                            let r = a.lifecycle.createScript.emit({
                                url: e,
                                attrs: t
                            });
                            if (r && (r instanceof HTMLScriptElement || "script" in r || "timeout" in r)) return r
                        }
                    }).then(() => e4(t, r, i)).catch(e => {
                        throw s(void 0, o.getShortErrorMsg(o.RUNTIME_008, o.runtimeDescMap, {
                            remoteName: t,
                            resourceUrl: i
                        })), e
                    })
                }
                async function e7(e) {
                    let {
                        remoteInfo: t,
                        remoteEntryExports: r,
                        loaderHook: n,
                        getEntryUrl: o
                    } = e, {
                        entry: i,
                        entryGlobalName: a,
                        name: s,
                        type: l
                    } = t;
                    switch (l) {
                        case "esm":
                        case "module":
                            return e8({
                                entry: i,
                                remoteEntryExports: r
                            });
                        case "system":
                            return e5({
                                entry: i,
                                remoteEntryExports: r
                            });
                        default:
                            return e6({
                                entry: i,
                                globalName: a,
                                name: s,
                                loaderHook: n,
                                getEntryUrl: o
                            })
                    }
                }
                async function te(e) {
                    let {
                        remoteInfo: t,
                        loaderHook: r
                    } = e, {
                        entry: o,
                        entryGlobalName: i,
                        name: a,
                        type: s
                    } = t, {
                        entryExports: l
                    } = j(a, i);
                    return l || n.loadScriptNode(o, {
                        attrs: {
                            name: a,
                            globalName: i,
                            type: s
                        },
                        loaderHook: {
                            createScriptHook: function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = r.lifecycle.createScript.emit({
                                        url: e,
                                        attrs: t
                                    });
                                if (n && "url" in n) return n
                            }
                        }
                    }).then(() => e4(a, i, o)).catch(e => {
                        throw e
                    })
                }

                function tt(e) {
                    let {
                        entry: t,
                        name: r
                    } = e;
                    return n.composeKeyWithSeparator(r, t)
                }
                async function tr(e) {
                    let {
                        origin: t,
                        remoteEntryExports: r,
                        remoteInfo: i,
                        getEntryUrl: a,
                        _inErrorHandling: s = !1
                    } = e, l = tt(i);
                    if (r) return r;
                    if (!T[l]) {
                        let e = t.remoteHandler.hooks.lifecycle.loadEntry,
                            c = t.loaderHook;
                        T[l] = e.emit({
                            loaderHook: c,
                            remoteInfo: i,
                            remoteEntryExports: r
                        }).then(e => e || (("undefined" != typeof ENV_TARGET ? "web" === ENV_TARGET : n.isBrowserEnv()) ? e7({
                            remoteInfo: i,
                            remoteEntryExports: r,
                            loaderHook: c,
                            getEntryUrl: a
                        }) : te({
                            remoteInfo: i,
                            loaderHook: c
                        }))).catch(async e => {
                            let n = tt(i);
                            if (e instanceof Error && e.message.includes(o.RUNTIME_008) && !s) {
                                let e = e => tr({
                                        ...e,
                                        _inErrorHandling: !0
                                    }),
                                    o = await t.loaderHook.lifecycle.loadEntryError.emit({
                                        getRemoteEntry: e,
                                        origin: t,
                                        remoteInfo: i,
                                        remoteEntryExports: r,
                                        globalLoading: T,
                                        uniqueKey: n
                                    });
                                if (o) return o
                            }
                            throw e
                        })
                    }
                    return T[l]
                }

                function tn(e) {
                    return {
                        ...e,
                        entry: "entry" in e ? e.entry : "",
                        type: e.type || W,
                        entryGlobalName: e.entryGlobalName || e.name,
                        shareScope: e.shareScope || G
                    }
                }

                function to(e) {
                    return {
                        resourceCategory: "sync",
                        share: !0,
                        depsRemote: !0,
                        prefetchInterface: !1,
                        ...e
                    }
                }

                function ti(e, t) {
                    return t.map(t => {
                        let r = e9(e, t.nameOrAlias);
                        return s(r, `Unable to preload ${t.nameOrAlias} as it is not included in ${!r&&n.safeToString({remoteInfo:r,remotes:e})}`), {
                            remote: r,
                            preloadConfig: to(t)
                        }
                    })
                }

                function ta(e) {
                    return e ? e.map(e => "." === e ? e : e.startsWith("./") ? e.replace("./", "") : e) : []
                }

                function ts(e, t, r) {
                    let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        {
                            cssAssets: i,
                            jsAssetsWithoutEntry: a,
                            entryAssets: s
                        } = r;
                    if (t.options.inBrowser) {
                        if (s.forEach(r => {
                                let {
                                    moduleInfo: n
                                } = r, o = t.moduleCache.get(e.name);
                                o ? tr({
                                    origin: t,
                                    remoteInfo: n,
                                    remoteEntryExports: o.remoteEntryExports
                                }) : tr({
                                    origin: t,
                                    remoteInfo: n,
                                    remoteEntryExports: void 0
                                })
                            }), o) {
                            let e = {
                                rel: "preload",
                                as: "style"
                            };
                            i.forEach(r => {
                                let {
                                    link: o,
                                    needAttach: i
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        let n = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (n instanceof HTMLLinkElement) return n
                                    }
                                });
                                i && document.head.appendChild(o)
                            })
                        } else {
                            let e = {
                                rel: "stylesheet",
                                type: "text/css"
                            };
                            i.forEach(r => {
                                let {
                                    link: o,
                                    needAttach: i
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        let n = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (n instanceof HTMLLinkElement) return n
                                    },
                                    needDeleteLink: !1
                                });
                                i && document.head.appendChild(o)
                            })
                        }
                        if (o) {
                            let e = {
                                rel: "preload",
                                as: "script"
                            };
                            a.forEach(r => {
                                let {
                                    link: o,
                                    needAttach: i
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        let n = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (n instanceof HTMLLinkElement) return n
                                    }
                                });
                                i && document.head.appendChild(o)
                            })
                        } else {
                            let r = {
                                fetchpriority: "high",
                                type: (null == e ? void 0 : e.type) === "module" ? "module" : "text/javascript"
                            };
                            a.forEach(e => {
                                let {
                                    script: o,
                                    needAttach: i
                                } = n.createScript({
                                    url: e,
                                    cb: () => {},
                                    attrs: r,
                                    createScriptHook: (e, r) => {
                                        let n = t.loaderHook.lifecycle.createScript.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (n instanceof HTMLScriptElement) return n
                                    },
                                    needDeleteScript: !0
                                });
                                i && document.head.appendChild(o)
                            })
                        }
                    }
                }
                var tl = {
                    global: {
                        Global: w,
                        nativeGlobal: I,
                        resetFederationGlobalInfo: O,
                        setGlobalFederationInstance: M,
                        getGlobalFederationConstructor: A,
                        setGlobalFederationConstructor: D,
                        getInfoWithoutType: k,
                        getGlobalSnapshot: P,
                        getTargetSnapshotInfoByModuleInfo: x,
                        getGlobalSnapshotInfoByModuleInfo: C,
                        setGlobalSnapshotInfoByModuleInfo: L,
                        addGlobalSnapshot: F,
                        getRemoteEntryExports: j,
                        registerGlobalPlugins: H,
                        getGlobalHostPlugins: V,
                        getPreloaded: U,
                        setPreloaded: B
                    },
                    share: {
                        getRegisteredShare: eJ,
                        getGlobalShareScope: eX
                    },
                    utils: {
                        matchRemoteWithNameAndExpose: e1,
                        preloadAssets: ts,
                        getRemoteInfo: tn
                    }
                };
                class tc {
                    async getEntry() {
                        let e;
                        return this.remoteEntryExports || (s(e = await tr({
                            origin: this.host,
                            remoteInfo: this.remoteInfo,
                            remoteEntryExports: this.remoteEntryExports
                        }), `remoteEntryExports is undefined 
 ${n.safeToString(this.remoteInfo)}`), this.remoteEntryExports = e), this.remoteEntryExports
                    }
                    async get(e, t, r, n) {
                        let i, {
                                loadFactory: a = !0
                            } = r || {
                                loadFactory: !0
                            },
                            c = await this.getEntry();
                        if (!this.inited) {
                            let t = this.host.shareScopeMap,
                                r = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [this.remoteInfo.shareScope];
                            r.length || r.push("default"), r.forEach(e => {
                                t[e] || (t[e] = {})
                            });
                            let i = t[r[0]],
                                a = [],
                                s = {
                                    version: this.remoteInfo.version || "",
                                    shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? r : this.remoteInfo.shareScope || "default"
                                };
                            Object.defineProperty(s, "shareScopeMap", {
                                value: t,
                                enumerable: !1
                            });
                            let u = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                                shareScope: i,
                                remoteEntryInitOptions: s,
                                initScope: a,
                                remoteInfo: this.remoteInfo,
                                origin: this.host
                            });
                            void 0 === (null == c ? void 0 : c.init) && l(o.getShortErrorMsg(o.RUNTIME_002, o.runtimeDescMap, {
                                hostName: this.host.name,
                                remoteName: this.remoteInfo.name,
                                remoteEntryUrl: this.remoteInfo.entry,
                                remoteEntryKey: this.remoteInfo.entryGlobalName
                            })), await c.init(u.shareScope, u.initScope, u.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit({
                                ...u,
                                id: e,
                                remoteSnapshot: n,
                                remoteEntryExports: c
                            })
                        }
                        this.lib = c, this.inited = !0, (i = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
                            remoteEntryExports: c,
                            expose: t,
                            moduleInfo: this.remoteInfo
                        })) || (i = await c.get(t)), s(i, `${h(this.remoteInfo)} remote don't export ${t}.`);
                        let u = E(this.remoteInfo.name, t),
                            d = this.wraperFactory(i, u);
                        return a ? await d() : d
                    }
                    wraperFactory(e, t) {
                        function r(e, t) {
                            e && "object" == typeof e && Object.isExtensible(e) && !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id")) && Object.defineProperty(e, Symbol.for("mf_module_id"), {
                                value: t,
                                enumerable: !1
                            })
                        }
                        return e instanceof Promise ? async () => {
                            let n = await e();
                            return r(n, t), n
                        }: () => {
                            let n = e();
                            return r(n, t), n
                        }
                    }
                    constructor({
                        remoteInfo: e,
                        host: t
                    }) {
                        this.inited = !1, this.lib = void 0, this.remoteInfo = e, this.host = t
                    }
                }
                class tu {
                    on(e) {
                        "function" == typeof e && this.listeners.add(e)
                    }
                    once(e) {
                        let t = this;
                        this.on(function r() {
                            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                            return t.remove(r), e.apply(null, o)
                        })
                    }
                    emit() {
                        let e;
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return this.listeners.size > 0 && this.listeners.forEach(t => {
                            e = t(...r)
                        }), e
                    }
                    remove(e) {
                        this.listeners.delete(e)
                    }
                    removeAll() {
                        this.listeners.clear()
                    }
                    constructor(e) {
                        this.type = "", this.listeners = new Set, e && (this.type = e)
                    }
                }
                class th extends tu {
                    emit() {
                        let e;
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        let o = Array.from(this.listeners);
                        if (o.length > 0) {
                            let t = 0,
                                n = e => !1 !== e && (t < o.length ? Promise.resolve(o[t++].apply(null, r)).then(n) : e);
                            e = n()
                        }
                        return Promise.resolve(e)
                    }
                }

                function td(e, t) {
                    if (!m(t)) return !1;
                    if (e !== t) {
                        for (let r in e)
                            if (!(r in t)) return !1
                    }
                    return !0
                }
                class tf extends tu {
                    emit(e) {
                        for (let t of (m(e) || l(`The data for the "${this.type}" hook should be an object.`), this.listeners)) try {
                            let r = t(e);
                            if (td(e, r)) e = r;
                            else {
                                this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                                break
                            }
                        } catch (e) {
                            c(e), this.onerror(e)
                        }
                        return e
                    }
                    constructor(e) {
                        super(), this.onerror = l, this.type = e
                    }
                }
                class tp extends tu {
                    emit(e) {
                        m(e) || l(`The response data for the "${this.type}" hook must be an object.`);
                        let t = Array.from(this.listeners);
                        if (t.length > 0) {
                            let r = 0,
                                n = t => (c(t), this.onerror(t), e),
                                o = i => {
                                    if (td(e, i)) {
                                        if (e = i, r < t.length) try {
                                            return Promise.resolve(t[r++](e)).then(o, n)
                                        } catch (e) {
                                            return n(e)
                                        }
                                    } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                                    return e
                                };
                            return Promise.resolve(o(e))
                        }
                        return Promise.resolve(e)
                    }
                    constructor(e) {
                        super(), this.onerror = l, this.type = e
                    }
                }
                class tm {
                    applyPlugin(e, t) {
                        s(y(e), "Plugin configuration is invalid.");
                        let r = e.name;
                        if (s(r, "A name must be provided by the plugin."), !this.registerPlugins[r]) {
                            var n;
                            this.registerPlugins[r] = e, null == (n = e.apply) || n.call(e, t), Object.keys(this.lifecycle).forEach(t => {
                                let r = e[t];
                                r && this.lifecycle[t].on(r)
                            })
                        }
                    }
                    removePlugin(e) {
                        s(e, "A name is required.");
                        let t = this.registerPlugins[e];
                        s(t, `The plugin "${e}" is not registered.`), Object.keys(t).forEach(e => {
                            "name" !== e && this.lifecycle[e].remove(t[e])
                        })
                    }
                    constructor(e) {
                        this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e)
                    }
                }

                function tg(e, t) {
                    let r = v(t);
                    r.url || l(`The attribute remoteEntry of ${e.name} must not be undefined.`);
                    let o = n.getResourceUrl(t, r.url);
                    n.isBrowserEnv() || o.startsWith("http") || (o = `https:${o}`), e.type = r.type, e.entryGlobalName = r.globalName, e.entry = o, e.version = t.version, e.buildVersion = t.buildVersion
                }

                function ty() {
                    return {
                        name: "snapshot-plugin",
                        async afterResolve(e) {
                            let {
                                remote: t,
                                pkgNameOrAlias: r,
                                expose: n,
                                origin: o,
                                remoteInfo: i,
                                id: a
                            } = e;
                            if (!d(t) || !f(t)) {
                                let {
                                    remoteSnapshot: s,
                                    globalSnapshot: l
                                } = await o.snapshotHandler.loadRemoteSnapshotInfo({
                                    moduleInfo: t,
                                    id: a
                                });
                                tg(i, s);
                                let c = {
                                        remote: t,
                                        preloadConfig: {
                                            nameOrAlias: r,
                                            exposes: [n],
                                            resourceCategory: "sync",
                                            share: !1,
                                            depsRemote: !1
                                        }
                                    },
                                    u = await o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                                        origin: o,
                                        preloadOptions: c,
                                        remoteInfo: i,
                                        remote: t,
                                        remoteSnapshot: s,
                                        globalSnapshot: l
                                    });
                                return u && ts(i, o, u, !1), {
                                    ...e,
                                    remoteSnapshot: s
                                }
                            }
                            return e
                        }
                    }
                }

                function t_(e) {
                    let t = e.split(":");
                    return 1 === t.length ? {
                        name: t[0],
                        version: void 0
                    } : 2 === t.length ? {
                        name: t[0],
                        version: t[1]
                    } : {
                        name: t[1],
                        version: t[2]
                    }
                }

                function tb(e, t, r, o) {
                    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        a = arguments.length > 5 ? arguments[5] : void 0,
                        {
                            value: s
                        } = k(e, h(t)),
                        l = a || s;
                    if (l && !n.isManifestProvider(l) && (r(l, t, o), l.remotesInfo))
                        for (let t of Object.keys(l.remotesInfo)) {
                            if (i[t]) continue;
                            i[t] = !0;
                            let n = t_(t),
                                o = l.remotesInfo[t];
                            tb(e, {
                                name: n.name,
                                version: o.matchedVersion
                            }, r, !1, i, void 0)
                        }
                }
                let tv = (e, t) => document.querySelector(`${e}[${"link"===e?"href":"src"}="${t}"]`);

                function tE(e, t, r, o, i) {
                    let a = [],
                        s = [],
                        l = [],
                        c = new Set,
                        u = new Set,
                        {
                            options: h
                        } = e,
                        {
                            preloadConfig: d
                        } = t,
                        {
                            depsRemote: f
                        } = d;
                    if (tb(o, r, (t, r, o) => {
                            let i;
                            if (o) i = d;
                            else if (Array.isArray(f)) {
                                let e = f.find(e => e.nameOrAlias === r.name || e.nameOrAlias === r.alias);
                                if (!e) return;
                                i = to(e)
                            } else {
                                if (!0 !== f) return;
                                i = d
                            }
                            let c = n.getResourceUrl(t, v(t).url);
                            c && l.push({
                                name: r.name,
                                moduleInfo: {
                                    name: r.name,
                                    entry: c,
                                    type: "remoteEntryType" in t ? t.remoteEntryType : "global",
                                    entryGlobalName: "globalName" in t ? t.globalName : r.name,
                                    shareScope: "",
                                    version: "version" in t ? t.version : void 0
                                },
                                url: c
                            });
                            let u = "modules" in t ? t.modules : [],
                                h = ta(i.exposes);
                            if (h.length && "modules" in t) {
                                var p;
                                u = null == t || null == (p = t.modules) ? void 0 : p.reduce((e, t) => ((null == h ? void 0 : h.indexOf(t.moduleName)) !== -1 && e.push(t), e), [])
                            }

                            function m(e) {
                                let r = e.map(e => n.getResourceUrl(t, e));
                                return i.filter ? r.filter(i.filter) : r
                            }
                            if (u) {
                                let n = u.length;
                                for (let o = 0; o < n; o++) {
                                    let n = u[o],
                                        l = `${r.name}/${n.moduleName}`;
                                    e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                                        id: "." === n.moduleName ? r.name : l,
                                        name: r.name,
                                        remoteSnapshot: t,
                                        preloadConfig: i,
                                        remote: r,
                                        origin: e
                                    }), U(l) || ("all" === i.resourceCategory ? (a.push(...m(n.assets.css.async)), a.push(...m(n.assets.css.sync)), s.push(...m(n.assets.js.async))) : (i.resourceCategory = "sync", a.push(...m(n.assets.css.sync))), s.push(...m(n.assets.js.sync)), B(l))
                                }
                            }
                        }, !0, {}, i), i.shared && i.shared.length > 0) {
                        let t = (t, r) => {
                            let n = eJ(e.shareScopeMap, r.sharedName, t, e.sharedHandler.hooks.lifecycle.resolveShare);
                            n && "function" == typeof n.lib && (r.assets.js.sync.forEach(e => {
                                c.add(e)
                            }), r.assets.css.sync.forEach(e => {
                                u.add(e)
                            }))
                        };
                        i.shared.forEach(e => {
                            var r;
                            let n = null == (r = h.shared) ? void 0 : r[e.sharedName];
                            if (!n) return;
                            let o = e.version ? n.find(t => t.version === e.version) : n;
                            o && b(o).forEach(r => {
                                t(r, e)
                            })
                        })
                    }
                    let p = s.filter(e => !c.has(e) && !tv("script", e));
                    return {
                        cssAssets: a.filter(e => !u.has(e) && !tv("link", e)),
                        jsAssetsWithoutEntry: p,
                        entryAssets: l.filter(e => !tv("script", e.url))
                    }
                }
                let tS = function() {
                    return {
                        name: "generate-preload-assets-plugin",
                        async generatePreloadAssets(e) {
                            let {
                                origin: t,
                                preloadOptions: r,
                                remoteInfo: o,
                                remote: i,
                                globalSnapshot: a,
                                remoteSnapshot: s
                            } = e;
                            return n.isBrowserEnv() ? d(i) && f(i) ? {
                                cssAssets: [],
                                jsAssetsWithoutEntry: [],
                                entryAssets: [{
                                    name: i.name,
                                    url: i.entry,
                                    moduleInfo: {
                                        name: o.name,
                                        entry: i.entry,
                                        type: o.type || "global",
                                        entryGlobalName: "",
                                        shareScope: ""
                                    }
                                }]
                            } : (tg(o, s), tE(t, r, o, a, s)) : {
                                cssAssets: [],
                                jsAssetsWithoutEntry: [],
                                entryAssets: []
                            }
                        }
                    }
                };

                function tI(e, t) {
                    let r = C({
                            name: t.name,
                            version: t.options.version
                        }),
                        n = r && "remotesInfo" in r && r.remotesInfo && k(r.remotesInfo, e.name).value;
                    return n && n.matchedVersion ? {
                        hostGlobalSnapshot: r,
                        globalSnapshot: P(),
                        remoteSnapshot: C({
                            name: e.name,
                            version: n.matchedVersion
                        })
                    } : {
                        hostGlobalSnapshot: void 0,
                        globalSnapshot: P(),
                        remoteSnapshot: C({
                            name: e.name,
                            version: "version" in e ? e.version : void 0
                        })
                    }
                }
                class tw {
                    async loadRemoteSnapshotInfo(e) {
                        let t, r, {
                                moduleInfo: i,
                                id: a,
                                expose: s
                            } = e,
                            {
                                options: c
                            } = this.HostInstance;
                        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
                            options: c,
                            moduleInfo: i
                        });
                        let u = C({
                            name: this.HostInstance.options.name,
                            version: this.HostInstance.options.version
                        });
                        u || (u = {
                            version: this.HostInstance.options.version || "",
                            remoteEntry: "",
                            remotesInfo: {}
                        }, F({
                            [this.HostInstance.options.name]: u
                        })), u && "remotesInfo" in u && !k(u.remotesInfo, i.name).value && ("version" in i || "entry" in i) && (u.remotesInfo = {
                            ...null == u ? void 0 : u.remotesInfo,
                            [i.name]: {
                                matchedVersion: "version" in i ? i.version : i.entry
                            }
                        });
                        let {
                            hostGlobalSnapshot: h,
                            remoteSnapshot: f,
                            globalSnapshot: p
                        } = this.getGlobalRemoteInfo(i), {
                            remoteSnapshot: m,
                            globalSnapshot: g
                        } = await this.hooks.lifecycle.loadSnapshot.emit({
                            options: c,
                            moduleInfo: i,
                            hostGlobalSnapshot: h,
                            remoteSnapshot: f,
                            globalSnapshot: p
                        });
                        if (m)
                            if (n.isManifestProvider(m)) {
                                let e = n.isBrowserEnv() ? m.remoteEntry : m.ssrRemoteEntry || m.remoteEntry || "",
                                    o = await this.getManifestJson(e, i, {}),
                                    a = L({
                                        ...i,
                                        entry: e
                                    }, o);
                                t = o, r = a
                            } else {
                                let {
                                    remoteSnapshot: e
                                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                    options: this.HostInstance.options,
                                    moduleInfo: i,
                                    remoteSnapshot: m,
                                    from: "global"
                                });
                                t = e, r = g
                            }
                        else if (d(i)) {
                            let e = await this.getManifestJson(i.entry, i, {}),
                                n = L(i, e),
                                {
                                    remoteSnapshot: o
                                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                    options: this.HostInstance.options,
                                    moduleInfo: i,
                                    remoteSnapshot: e,
                                    from: "global"
                                });
                            t = o, r = n
                        } else l(o.getShortErrorMsg(o.RUNTIME_007, o.runtimeDescMap, {
                            hostName: i.name,
                            hostVersion: i.version,
                            globalSnapshot: JSON.stringify(g)
                        }));
                        return await this.hooks.lifecycle.afterLoadSnapshot.emit({
                            id: a,
                            host: this.HostInstance,
                            options: c,
                            moduleInfo: i,
                            remoteSnapshot: t
                        }), {
                            remoteSnapshot: t,
                            globalSnapshot: r
                        }
                    }
                    getGlobalRemoteInfo(e) {
                        return tI(e, this.HostInstance)
                    }
                    async getManifestJson(e, t, r) {
                        let i = async () => {
                            let r = this.manifestCache.get(e);
                            if (r) return r;
                            try {
                                let t = await this.loaderHook.lifecycle.fetch.emit(e, {});
                                t && t instanceof Response || (t = await fetch(e, {})), r = await t.json()
                            } catch (n) {
                                (r = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                                    id: e,
                                    error: n,
                                    from: "runtime",
                                    lifecycle: "afterResolve",
                                    origin: this.HostInstance
                                })) || (delete this.manifestLoading[e], l(o.getShortErrorMsg(o.RUNTIME_003, o.runtimeDescMap, {
                                    manifestUrl: e,
                                    moduleName: t.name,
                                    hostName: this.HostInstance.options.name
                                }, `${n}`)))
                            }
                            return s(r.metaData && r.exposes && r.shared, `${e} is not a federation manifest`), this.manifestCache.set(e, r), r
                        }, a = async () => {
                            let r = await i(),
                                o = n.generateSnapshotFromManifest(r, {
                                    version: e
                                }),
                                {
                                    remoteSnapshot: a
                                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                    options: this.HostInstance.options,
                                    moduleInfo: t,
                                    manifestJson: r,
                                    remoteSnapshot: o,
                                    manifestUrl: e,
                                    from: "manifest"
                                });
                            return a
                        };
                        return this.manifestLoading[e] || (this.manifestLoading[e] = a().then(e => e)), this.manifestLoading[e]
                    }
                    constructor(e) {
                        this.loadingHostSnapshot = null, this.manifestCache = new Map, this.hooks = new tm({
                            beforeLoadRemoteSnapshot: new th("beforeLoadRemoteSnapshot"),
                            loadSnapshot: new tp("loadGlobalSnapshot"),
                            loadRemoteSnapshot: new tp("loadRemoteSnapshot"),
                            afterLoadSnapshot: new tp("afterLoadSnapshot")
                        }), this.manifestLoading = w.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook
                    }
                }
                class tN {
                    registerShared(e, t) {
                        let {
                            shareInfos: r,
                            shared: n
                        } = eB(e, t);
                        return Object.keys(r).forEach(e => {
                            r[e].forEach(r => {
                                r.scope.forEach(n => {
                                    var o;
                                    (null == (o = this.shareScopeMap[n]) ? void 0 : o[e]) || this.setShared({
                                        pkgName: e,
                                        lib: r.lib,
                                        get: r.get,
                                        loaded: r.loaded || !!r.lib,
                                        shared: r,
                                        from: t.name
                                    })
                                })
                            })
                        }), {
                            shareInfos: r,
                            shared: n
                        }
                    }
                    async loadShare(e, t) {
                        let {
                            host: r
                        } = this, n = eQ({
                            pkgName: e,
                            extraOptions: t,
                            shareInfos: r.options.shared
                        });
                        (null == n ? void 0 : n.scope) && await Promise.all(n.scope.map(async e => {
                            await Promise.all(this.initializeSharing(e, {
                                strategy: n.strategy
                            }))
                        }));
                        let {
                            shareInfo: o
                        } = await this.hooks.lifecycle.beforeLoadShare.emit({
                            pkgName: e,
                            shareInfo: n,
                            shared: r.options.shared,
                            origin: r
                        });
                        s(o, `Cannot find ${e} Share in the ${r.options.name}. Please ensure that the ${e} Share parameters have been injected`);
                        let i = eJ(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare),
                            a = e => {
                                e.useIn || (e.useIn = []), u(e.useIn, r.options.name)
                            };
                        if (i && i.lib) return a(i), i.lib;
                        if (i && i.loading && !i.loaded) {
                            let e = await i.loading;
                            return i.loaded = !0, i.lib || (i.lib = e), a(i), e
                        }
                        if (i) {
                            let t = (async () => {
                                let e = await i.get();
                                return a(i), i.loaded = !0, i.lib = e, e
                            })();
                            return this.setShared({
                                pkgName: e,
                                loaded: !1,
                                shared: i,
                                from: r.options.name,
                                lib: null,
                                loading: t
                            }), t
                        } {
                            if (null == t ? void 0 : t.customShareInfo) return !1;
                            let n = (async () => {
                                let t = await o.get();
                                o.lib = t, o.loaded = !0, a(o);
                                let r = eJ(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare);
                                return r && (r.lib = t, r.loaded = !0, r.from = o.from), t
                            })();
                            return this.setShared({
                                pkgName: e,
                                loaded: !1,
                                shared: o,
                                from: r.options.name,
                                lib: null,
                                loading: n
                            }), n
                        }
                    }
                    initializeSharing() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            {
                                host: r
                            } = this,
                            n = null == t ? void 0 : t.from,
                            o = null == t ? void 0 : t.strategy,
                            i = null == t ? void 0 : t.initScope,
                            a = [];
                        if ("build" !== n) {
                            let {
                                initTokens: t
                            } = this;
                            i || (i = []);
                            let r = t[e];
                            if (r || (r = t[e] = {
                                    from: this.host.name
                                }), i.indexOf(r) >= 0) return a;
                            i.push(r)
                        }
                        let s = this.shareScopeMap,
                            l = r.options.name;
                        s[e] || (s[e] = {});
                        let c = s[e],
                            u = (e, t) => {
                                var r;
                                let {
                                    version: n,
                                    eager: o
                                } = t;
                                c[e] = c[e] || {};
                                let i = c[e],
                                    a = i[n],
                                    s = !!(a && (a.eager || (null == (r = a.shareConfig) ? void 0 : r.eager)));
                                (!a || "loaded-first" !== a.strategy && !a.loaded && (!o != !s ? o : l > a.from)) && (i[n] = t)
                            },
                            h = t => t && t.init && t.init(s[e], i),
                            d = async e => {
                                let {
                                    module: t
                                } = await r.remoteHandler.getRemoteModuleAndOptions({
                                    id: e
                                });
                                if (t.getEntry) {
                                    let n;
                                    try {
                                        n = await t.getEntry()
                                    } catch (t) {
                                        n = await r.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                                            id: e,
                                            error: t,
                                            from: "runtime",
                                            lifecycle: "beforeLoadShare",
                                            origin: r
                                        })
                                    }
                                    t.inited || (await h(n), t.inited = !0)
                                }
                            };
                        return Object.keys(r.options.shared).forEach(t => {
                            r.options.shared[t].forEach(r => {
                                r.scope.includes(e) && u(t, r)
                            })
                        }), ("version-first" === r.options.shareStrategy || "version-first" === o) && r.options.remotes.forEach(t => {
                            t.shareScope === e && a.push(d(t.name))
                        }), a
                    }
                    loadShareSync(e, t) {
                        let {
                            host: r
                        } = this, n = eQ({
                            pkgName: e,
                            extraOptions: t,
                            shareInfos: r.options.shared
                        });
                        (null == n ? void 0 : n.scope) && n.scope.forEach(e => {
                            this.initializeSharing(e, {
                                strategy: n.strategy
                            })
                        });
                        let i = eJ(this.shareScopeMap, e, n, this.hooks.lifecycle.resolveShare),
                            a = e => {
                                e.useIn || (e.useIn = []), u(e.useIn, r.options.name)
                            };
                        if (i) {
                            if ("function" == typeof i.lib) return a(i), i.loaded || (i.loaded = !0, i.from === r.options.name && (n.loaded = !0)), i.lib;
                            if ("function" == typeof i.get) {
                                let t = i.get();
                                if (!(t instanceof Promise)) return a(i), this.setShared({
                                    pkgName: e,
                                    loaded: !0,
                                    from: r.options.name,
                                    lib: t,
                                    shared: i
                                }), t
                            }
                        }
                        if (n.lib) return n.loaded || (n.loaded = !0), n.lib;
                        if (n.get) {
                            let i = n.get();
                            if (i instanceof Promise) {
                                let n = (null == t ? void 0 : t.from) === "build" ? o.RUNTIME_005 : o.RUNTIME_006;
                                throw Error(o.getShortErrorMsg(n, o.runtimeDescMap, {
                                    hostName: r.options.name,
                                    sharedPkgName: e
                                }))
                            }
                            return n.lib = i, this.setShared({
                                pkgName: e,
                                loaded: !0,
                                from: r.options.name,
                                lib: n.lib,
                                shared: n
                            }), n.lib
                        }
                        throw Error(o.getShortErrorMsg(o.RUNTIME_006, o.runtimeDescMap, {
                            hostName: r.options.name,
                            sharedPkgName: e
                        }))
                    }
                    initShareScopeMap(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                host: n
                            } = this;
                        this.shareScopeMap[e] = t, this.hooks.lifecycle.initContainerShareScopeMap.emit({
                            shareScope: t,
                            options: n.options,
                            origin: n,
                            scopeName: e,
                            hostShareScopeMap: r.hostShareScopeMap
                        })
                    }
                    setShared(e) {
                        let {
                            pkgName: t,
                            shared: r,
                            from: n,
                            lib: o,
                            loading: i,
                            loaded: a,
                            get: s
                        } = e, {
                            version: l,
                            scope: c = "default",
                            ...u
                        } = r;
                        (Array.isArray(c) ? c : [c]).forEach(e => {
                            if (this.shareScopeMap[e] || (this.shareScopeMap[e] = {}), this.shareScopeMap[e][t] || (this.shareScopeMap[e][t] = {}), !this.shareScopeMap[e][t][l]) {
                                this.shareScopeMap[e][t][l] = {
                                    version: l,
                                    scope: [e],
                                    ...u,
                                    lib: o,
                                    loaded: a,
                                    loading: i
                                }, s && (this.shareScopeMap[e][t][l].get = s);
                                return
                            }
                            let r = this.shareScopeMap[e][t][l];
                            i && !r.loading && (r.loading = i), a && !r.loaded && (r.loaded = a), n && r.from !== n && (r.from = n)
                        })
                    }
                    _setGlobalShareScopeMap(e) {
                        let t = eX(),
                            r = e.id || e.name;
                        r && !t[r] && (t[r] = this.shareScopeMap)
                    }
                    constructor(e) {
                        this.hooks = new tm({
                            afterResolve: new tp("afterResolve"),
                            beforeLoadShare: new tp("beforeLoadShare"),
                            loadShare: new th,
                            resolveShare: new tf("resolveShare"),
                            initContainerShareScopeMap: new tf("initContainerShareScopeMap")
                        }), this.host = e, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e.options)
                    }
                }
                class tR {
                    formatAndRegisterRemote(e, t) {
                        return (t.remotes || []).reduce((e, t) => (this.registerRemote(t, e, {
                            force: !1
                        }), e), e.remotes)
                    }
                    setIdToRemoteMap(e, t) {
                        let {
                            remote: r,
                            expose: n
                        } = t, {
                            name: o,
                            alias: i
                        } = r;
                        if (this.idToRemoteMap[e] = {
                                name: r.name,
                                expose: n
                            }, i && e.startsWith(o)) {
                            let t = e.replace(o, i);
                            this.idToRemoteMap[t] = {
                                name: r.name,
                                expose: n
                            };
                            return
                        }
                        if (i && e.startsWith(i)) {
                            let t = e.replace(i, o);
                            this.idToRemoteMap[t] = {
                                name: r.name,
                                expose: n
                            }
                        }
                    }
                    async loadRemote(e, t) {
                        let {
                            host: r
                        } = this;
                        try {
                            let {
                                loadFactory: n = !0
                            } = t || {
                                loadFactory: !0
                            }, {
                                module: o,
                                moduleOptions: i,
                                remoteMatchInfo: a
                            } = await this.getRemoteModuleAndOptions({
                                id: e
                            }), {
                                pkgNameOrAlias: s,
                                remote: l,
                                expose: c,
                                id: u,
                                remoteSnapshot: h
                            } = a, d = await o.get(u, c, t, h), f = await this.hooks.lifecycle.onLoad.emit({
                                id: u,
                                pkgNameOrAlias: s,
                                expose: c,
                                exposeModule: n ? d : void 0,
                                exposeModuleFactory: n ? void 0 : d,
                                remote: l,
                                options: i,
                                moduleInstance: o,
                                origin: r
                            });
                            if (this.setIdToRemoteMap(e, a), "function" == typeof f) return f;
                            return d
                        } catch (i) {
                            let {
                                from: n = "runtime"
                            } = t || {
                                from: "runtime"
                            }, o = await this.hooks.lifecycle.errorLoadRemote.emit({
                                id: e,
                                error: i,
                                from: n,
                                lifecycle: "onLoad",
                                origin: r
                            });
                            if (!o) throw i;
                            return o
                        }
                    }
                    async preloadRemote(e) {
                        let {
                            host: t
                        } = this;
                        await this.hooks.lifecycle.beforePreloadRemote.emit({
                            preloadOps: e,
                            options: t.options,
                            origin: t
                        });
                        let r = ti(t.options.remotes, e);
                        await Promise.all(r.map(async e => {
                            let {
                                remote: r
                            } = e, n = tn(r), {
                                globalSnapshot: o,
                                remoteSnapshot: i
                            } = await t.snapshotHandler.loadRemoteSnapshotInfo({
                                moduleInfo: r
                            }), a = await this.hooks.lifecycle.generatePreloadAssets.emit({
                                origin: t,
                                preloadOptions: e,
                                remote: r,
                                remoteInfo: n,
                                globalSnapshot: o,
                                remoteSnapshot: i
                            });
                            a && ts(n, t, a)
                        }))
                    }
                    registerRemotes(e, t) {
                        let {
                            host: r
                        } = this;
                        e.forEach(e => {
                            this.registerRemote(e, r.options.remotes, {
                                force: null == t ? void 0 : t.force
                            })
                        })
                    }
                    async getRemoteModuleAndOptions(e) {
                        let t, {
                                host: r
                            } = this,
                            {
                                id: n
                            } = e;
                        try {
                            t = await this.hooks.lifecycle.beforeRequest.emit({
                                id: n,
                                options: r.options,
                                origin: r
                            })
                        } catch (e) {
                            if (!(t = await this.hooks.lifecycle.errorLoadRemote.emit({
                                    id: n,
                                    options: r.options,
                                    origin: r,
                                    from: "runtime",
                                    error: e,
                                    lifecycle: "beforeRequest"
                                }))) throw e
                        }
                        let {
                            id: i
                        } = t, a = e1(r.options.remotes, i);
                        s(a, o.getShortErrorMsg(o.RUNTIME_004, o.runtimeDescMap, {
                            hostName: r.options.name,
                            requestId: i
                        }));
                        let {
                            remote: l
                        } = a, c = tn(l), u = await r.sharedHandler.hooks.lifecycle.afterResolve.emit({
                            id: i,
                            ...a,
                            options: r.options,
                            origin: r,
                            remoteInfo: c
                        }), {
                            remote: h,
                            expose: d
                        } = u;
                        s(h && d, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${i}.`);
                        let f = r.moduleCache.get(h.name),
                            p = {
                                host: r,
                                remoteInfo: c
                            };
                        return f || (f = new tc(p), r.moduleCache.set(h.name, f)), {
                            module: f,
                            moduleOptions: p,
                            remoteMatchInfo: u
                        }
                    }
                    registerRemote(e, t, r) {
                        let {
                            host: o
                        } = this, i = () => {
                            if (e.alias) {
                                let r = t.find(t => {
                                    var r;
                                    return e.alias && (t.name.startsWith(e.alias) || (null == (r = t.alias) ? void 0 : r.startsWith(e.alias)))
                                });
                                s(!r, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${r&&r.name} name or alias`)
                            }
                            "entry" in e && n.isBrowserEnv() && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = G), e.type || (e.type = W)
                        };
                        this.hooks.lifecycle.beforeRegisterRemote.emit({
                            remote: e,
                            origin: o
                        });
                        let a = t.find(t => t.name === e.name);
                        if (a) {
                            let s = [`The remote "${e.name}" is already registered.`, "Please note that overriding it may cause unexpected errors."];
                            (null == r ? void 0 : r.force) && (this.removeRemote(a), i(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
                                remote: e,
                                origin: o
                            }), n.warn(s.join(" ")))
                        } else i(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
                            remote: e,
                            origin: o
                        })
                    }
                    removeRemote(e) {
                        try {
                            let {
                                host: r
                            } = this, {
                                name: o
                            } = e, i = r.options.remotes.findIndex(e => e.name === o); - 1 !== i && r.options.remotes.splice(i, 1);
                            let a = r.moduleCache.get(e.name);
                            if (a) {
                                let o = a.remoteInfo,
                                    i = o.entryGlobalName;
                                if (S[i]) {
                                    var t;
                                    (null == (t = Object.getOwnPropertyDescriptor(S, i)) ? void 0 : t.configurable) ? delete S[i]: S[i] = void 0
                                }
                                let s = tt(a.remoteInfo);
                                T[s] && delete T[s], r.snapshotHandler.manifestCache.delete(o.entry);
                                let l = o.buildVersion ? n.composeKeyWithSeparator(o.name, o.buildVersion) : o.name,
                                    c = S.__FEDERATION__.__INSTANCES__.findIndex(e => o.buildVersion ? e.options.id === l : e.name === l);
                                if (-1 !== c) {
                                    let e = S.__FEDERATION__.__INSTANCES__[c];
                                    l = e.options.id || l;
                                    let t = eX(),
                                        r = !0,
                                        n = [];
                                    Object.keys(t).forEach(e => {
                                        let i = t[e];
                                        i && Object.keys(i).forEach(t => {
                                            let a = i[t];
                                            a && Object.keys(a).forEach(i => {
                                                let s = a[i];
                                                s && Object.keys(s).forEach(a => {
                                                    let l = s[a];
                                                    l && "object" == typeof l && l.from === o.name && (l.loaded || l.loading ? (l.useIn = l.useIn.filter(e => e !== o.name), l.useIn.length ? r = !1 : n.push([e, t, i, a])) : n.push([e, t, i, a]))
                                                })
                                            })
                                        })
                                    }), r && (e.shareScopeMap = {}, delete t[l]), n.forEach(e => {
                                        var r, n, o;
                                        let [i, a, s, l] = e;
                                        null == (o = t[i]) || null == (n = o[a]) || null == (r = n[s]) || delete r[l]
                                    }), S.__FEDERATION__.__INSTANCES__.splice(c, 1)
                                }
                                let {
                                    hostGlobalSnapshot: u
                                } = tI(e, r);
                                if (u) {
                                    let t = u && "remotesInfo" in u && u.remotesInfo && k(u.remotesInfo, e.name).key;
                                    t && (delete u.remotesInfo[t], w.__FEDERATION__.__MANIFEST_LOADING__[t] && delete w.__FEDERATION__.__MANIFEST_LOADING__[t])
                                }
                                r.moduleCache.delete(e.name)
                            }
                        } catch (e) {
                            a.log("removeRemote fail: ", e)
                        }
                    }
                    constructor(e) {
                        this.hooks = new tm({
                            beforeRegisterRemote: new tf("beforeRegisterRemote"),
                            registerRemote: new tf("registerRemote"),
                            beforeRequest: new tp("beforeRequest"),
                            onLoad: new th("onLoad"),
                            handlePreloadModule: new tu("handlePreloadModule"),
                            errorLoadRemote: new th("errorLoadRemote"),
                            beforePreloadRemote: new th("beforePreloadRemote"),
                            generatePreloadAssets: new th("generatePreloadAssets"),
                            afterPreloadRemote: new th,
                            loadEntry: new th
                        }), this.host = e, this.idToRemoteMap = {}
                    }
                }
                let tT = "boolean" != typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN || !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN;
                class t$ {
                    initOptions(e) {
                        this.registerPlugins(e.plugins);
                        let t = this.formatOptions(this.options, e);
                        return this.options = t, t
                    }
                    async loadShare(e, t) {
                        return this.sharedHandler.loadShare(e, t)
                    }
                    loadShareSync(e, t) {
                        return this.sharedHandler.loadShareSync(e, t)
                    }
                    initializeSharing() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return this.sharedHandler.initializeSharing(e, t)
                    }
                    initRawContainer(e, t, r) {
                        let n = new tc({
                            host: this,
                            remoteInfo: tn({
                                name: e,
                                entry: t
                            })
                        });
                        return n.remoteEntryExports = r, this.moduleCache.set(e, n), n
                    }
                    async loadRemote(e, t) {
                        return this.remoteHandler.loadRemote(e, t)
                    }
                    async preloadRemote(e) {
                        return this.remoteHandler.preloadRemote(e)
                    }
                    initShareScopeMap(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.sharedHandler.initShareScopeMap(e, t, r)
                    }
                    formatOptions(e, t) {
                        let {
                            shared: r
                        } = eB(e, t), {
                            userOptions: n,
                            options: o
                        } = this.hooks.lifecycle.beforeInit.emit({
                            origin: this,
                            userOptions: t,
                            options: e,
                            shareInfo: r
                        }), i = this.remoteHandler.formatAndRegisterRemote(o, n), {
                            shared: a
                        } = this.sharedHandler.registerShared(o, n), s = [...o.plugins];
                        n.plugins && n.plugins.forEach(e => {
                            s.includes(e) || s.push(e)
                        });
                        let l = {
                            ...e,
                            ...t,
                            plugins: s,
                            remotes: i,
                            shared: a
                        };
                        return this.hooks.lifecycle.init.emit({
                            origin: this,
                            options: l
                        }), l
                    }
                    registerPlugins(e) {
                        let t = e2(e, this);
                        this.options.plugins = this.options.plugins.reduce((e, t) => (t && e && !e.find(e => e.name === t.name) && e.push(t), e), t || [])
                    }
                    registerRemotes(e, t) {
                        return this.remoteHandler.registerRemotes(e, t)
                    }
                    registerShared(e) {
                        this.sharedHandler.registerShared(this.options, {
                            ...this.options,
                            shared: e
                        })
                    }
                    constructor(e) {
                        this.hooks = new tm({
                            beforeInit: new tf("beforeInit"),
                            init: new tu,
                            beforeInitContainer: new tp("beforeInitContainer"),
                            initContainer: new tp("initContainer")
                        }), this.version = "0.21.4", this.moduleCache = new Map, this.loaderHook = new tm({
                            getModuleInfo: new tu,
                            createScript: new tu,
                            createLink: new tu,
                            fetch: new th,
                            loadEntryError: new th,
                            getModuleFactory: new th
                        }), this.bridgeHook = new tm({
                            beforeBridgeRender: new tu,
                            afterBridgeRender: new tu,
                            beforeBridgeDestroy: new tu,
                            afterBridgeDestroy: new tu
                        });
                        const t = tT ? [ty(), tS()] : [],
                            r = {
                                id: e0(),
                                name: e.name,
                                plugins: t,
                                remotes: [],
                                shared: {},
                                inBrowser: n.isBrowserEnv()
                            };
                        this.name = e.name, this.options = r, this.snapshotHandler = new tw(this), this.sharedHandler = new tN(this), this.remoteHandler = new tR(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([...r.plugins, ...e.plugins || []]), this.options = this.formatOptions(r, e)
                    }
                }
                var tO = Object.freeze({
                    __proto__: null
                });
                t.loadScript = n.loadScript, t.loadScriptNode = n.loadScriptNode, t.CurrentGlobal = S, t.Global = w, t.Module = tc, t.ModuleFederation = t$, t.addGlobalSnapshot = F, t.assert = s, t.getGlobalFederationConstructor = A, t.getGlobalSnapshot = P, t.getInfoWithoutType = k, t.getRegisteredShare = eJ, t.getRemoteEntry = tr, t.getRemoteInfo = tn, t.helpers = tl, t.isStaticResourcesEqual = _, t.matchRemoteWithNameAndExpose = e1, t.registerGlobalPlugins = H, t.resetFederationGlobalInfo = O, t.safeWrapper = p, t.satisfy = eV, t.setGlobalFederationConstructor = D, t.setGlobalFederationInstance = M, t.types = tO
            },
            55014: function(e, t, r) {
                var n = r(47926),
                    o = r(86779),
                    i = r(82993);

                function a(e) {
                    let t = new(n.getGlobalFederationConstructor() || n.ModuleFederation)(e);
                    return n.setGlobalFederationInstance(t), t
                }
                let s = null;

                function l(e) {
                    let t = i.getGlobalFederationInstance(e.name, e.version);
                    return t ? (t.initOptions(e), s || (s = t), t) : s = a(e)
                }

                function c() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.loadRemote.apply(s, t)
                }

                function u() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.loadShare.apply(s, t)
                }

                function h() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.loadShareSync.apply(s, t)
                }

                function d() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.preloadRemote.apply(s, t)
                }

                function f() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.registerRemotes.apply(s, t)
                }

                function p() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.registerPlugins.apply(s, t)
                }

                function m() {
                    return s
                }

                function g() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return n.assert(s, o.getShortErrorMsg(o.RUNTIME_009, o.runtimeDescMap)), s.registerShared.apply(s, t)
                }
                n.setGlobalFederationConstructor(n.ModuleFederation), t.Module = n.Module, t.ModuleFederation = n.ModuleFederation, t.getRemoteEntry = n.getRemoteEntry, t.getRemoteInfo = n.getRemoteInfo, t.loadScript = n.loadScript, t.loadScriptNode = n.loadScriptNode, t.registerGlobalPlugins = n.registerGlobalPlugins, t.createInstance = a, t.getInstance = m, t.init = l, t.loadRemote = c, t.loadShare = u, t.loadShareSync = h, t.preloadRemote = d, t.registerPlugins = p, t.registerRemotes = f, t.registerShared = g
            },
            82993: function(e, t, r) {
                var n = r(47926);

                function o() {
                    return "undefined" != typeof FEDERATION_BUILD_IDENTIFIER ? FEDERATION_BUILD_IDENTIFIER : ""
                }
                t.getGlobalFederationInstance = function(e, t) {
                    let r = o();
                    return n.CurrentGlobal.__FEDERATION__.__INSTANCES__.find(n => !!r && n.options.id === r || n.options.name === e && !n.options.version && !t || n.options.name === e && !!t && n.options.version === t)
                }
            },
            84582: function(__unused_webpack_module, exports) {
                let FederationModuleManifest = "federation-manifest.json",
                    MANIFEST_EXT = ".json",
                    BROWSER_LOG_KEY = "FEDERATION_DEBUG",
                    NameTransformSymbol = {
                        AT: "@",
                        HYPHEN: "-",
                        SLASH: "/"
                    },
                    NameTransformMap = {
                        [NameTransformSymbol.AT]: "scope_",
                        [NameTransformSymbol.HYPHEN]: "_",
                        [NameTransformSymbol.SLASH]: "__"
                    },
                    EncodedNameTransformMap = {
                        [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
                        [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
                        [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
                    },
                    SEPARATOR = ":",
                    ManifestFileName = "mf-manifest.json",
                    StatsFileName = "mf-stats.json",
                    MFModuleType = {
                        NPM: "npm",
                        APP: "app"
                    },
                    MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__",
                    ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX",
                    TEMP_DIR = ".federation",
                    MFPrefetchCommon = {
                        identifier: "MFDataPrefetch",
                        globalKey: "__PREFETCH__",
                        library: "mf-data-prefetch",
                        exportsKey: "__PREFETCH_EXPORTS__",
                        fileName: "bootstrap.js"
                    };
                var ContainerPlugin = Object.freeze({
                        __proto__: null
                    }),
                    ContainerReferencePlugin = Object.freeze({
                        __proto__: null
                    }),
                    ModuleFederationPlugin = Object.freeze({
                        __proto__: null
                    }),
                    SharePlugin = Object.freeze({
                        __proto__: null
                    });

                function isBrowserEnv() {
                    return "undefined" != typeof window && void 0 !== window.document
                }

                function isReactNativeEnv() {
                    var e;
                    return "undefined" != typeof navigator && (null == (e = navigator) ? void 0 : e.product) === "ReactNative"
                }

                function isBrowserDebug() {
                    try {
                        if (isBrowserEnv() && window.localStorage) return !!localStorage.getItem(BROWSER_LOG_KEY)
                    } catch (e) {}
                    return !1
                }

                function isDebugMode() {
                    return "undefined" != typeof process && process.env && process.env.FEDERATION_DEBUG ? !!process.env.FEDERATION_DEBUG : !!("undefined" != typeof FEDERATION_DEBUG && FEDERATION_DEBUG) || isBrowserDebug()
                }
                let getProcessEnv = function() {
                        return "undefined" != typeof process && process.env ? process.env : {}
                    },
                    LOG_CATEGORY = "[ Federation Runtime ]",
                    parseEntry = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SEPARATOR,
                            n = e.split(r),
                            o = "development" === getProcessEnv().NODE_ENV && t,
                            i = "*",
                            a = e => e.startsWith("http") || e.includes(MANIFEST_EXT);
                        if (n.length >= 2) {
                            let [t, ...s] = n;
                            e.startsWith(r) && (t = n.slice(0, 2).join(r), s = [o || n.slice(2).join(r)]);
                            let l = o || s.join(r);
                            return a(l) ? {
                                name: t,
                                entry: l
                            } : {
                                name: t,
                                version: l || i
                            }
                        }
                        if (1 === n.length) {
                            let [e] = n;
                            return o && a(o) ? {
                                name: e,
                                entry: o
                            } : {
                                name: e,
                                version: o || i
                            }
                        }
                        throw `Invalid entry value: ${e}`
                    },
                    composeKeyWithSeparator = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.length ? t.reduce((e, t) => t ? e ? `${e}${SEPARATOR}${t}` : t : e, "") : ""
                    },
                    encodeName = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        try {
                            let n = r ? ".js" : "";
                            return `${t}${e.replace(RegExp(`${NameTransformSymbol.AT}`,"g"),NameTransformMap[NameTransformSymbol.AT]).replace(RegExp(`${NameTransformSymbol.HYPHEN}`,"g"),NameTransformMap[NameTransformSymbol.HYPHEN]).replace(RegExp(`${NameTransformSymbol.SLASH}`,"g"),NameTransformMap[NameTransformSymbol.SLASH])}${n}`
                        } catch (e) {
                            throw e
                        }
                    },
                    decodeName = function(e, t, r) {
                        try {
                            let n = e;
                            if (t) {
                                if (!n.startsWith(t)) return n;
                                n = n.replace(RegExp(t, "g"), "")
                            }
                            return n = n.replace(RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]), r && (n = n.replace(".js", "")), n
                        } catch (e) {
                            throw e
                        }
                    },
                    generateExposeFilename = (e, t) => {
                        if (!e) return "";
                        let r = e;
                        return "." === r && (r = "default_export"), r.startsWith("./") && (r = r.replace("./", "")), encodeName(r, "__federation_expose_", t)
                    },
                    generateShareFilename = (e, t) => e ? encodeName(e, "__federation_shared_", t) : "",
                    getResourceUrl = (e, t) => {
                        if ("getPublicPath" in e) {
                            let r;
                            return r = e.getPublicPath.startsWith("function") ? Function("return " + e.getPublicPath)()() : Function(e.getPublicPath)(), `${r}${t}`
                        }
                        return "publicPath" in e ? !isBrowserEnv() && !isReactNativeEnv() && "ssrPublicPath" in e ? `${e.ssrPublicPath}${t}` : `${e.publicPath}${t}` : (console.warn("Cannot get resource URL. If in debug mode, please ignore.", e, t), "")
                    },
                    assert = (e, t) => {
                        e || error(t)
                    },
                    error = e => {
                        throw Error(`${LOG_CATEGORY}: ${e}`)
                    },
                    warn = e => {
                        console.warn(`${LOG_CATEGORY}: ${e}`)
                    };

                function safeToString(e) {
                    try {
                        return JSON.stringify(e, null, 2)
                    } catch (e) {
                        return ""
                    }
                }
                let VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;

                function isRequiredVersion(e) {
                    return VERSION_PATTERN_REGEXP.test(e)
                }
                let simpleJoinRemoteEntry = (e, t) => {
                    if (!e) return t;
                    let r = (e => {
                        if ("." === e) return "";
                        if (e.startsWith("./")) return e.replace("./", "");
                        if (e.startsWith("/")) {
                            let t = e.slice(1);
                            return t.endsWith("/") ? t.slice(0, -1) : t
                        }
                        return e
                    })(e);
                    return r ? r.endsWith("/") ? `${r}${t}` : `${r}/${t}` : t
                };

                function inferAutoPublicPath(e) {
                    return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/")
                }

                function generateSnapshotFromManifest(e) {
                    var t, r, n;
                    let o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            remotes: a = {},
                            overrides: s = {},
                            version: l
                        } = i,
                        c = () => "publicPath" in e.metaData ? "auto" === e.metaData.publicPath && l ? inferAutoPublicPath(l) : e.metaData.publicPath : e.metaData.getPublicPath,
                        u = Object.keys(s),
                        h = {};
                    Object.keys(a).length || (h = (null == (n = e.remotes) ? void 0 : n.reduce((e, t) => {
                        let r, n = t.federationContainerName;
                        return r = u.includes(n) ? s[n] : "version" in t ? t.version : t.entry, e[n] = {
                            matchedVersion: r
                        }, e
                    }, {})) || {}), Object.keys(a).forEach(e => h[e] = {
                        matchedVersion: u.includes(e) ? s[e] : a[e]
                    });
                    let {
                        remoteEntry: {
                            path: d,
                            name: f,
                            type: p
                        },
                        types: m = {
                            path: "",
                            name: "",
                            zip: "",
                            api: ""
                        },
                        buildInfo: {
                            buildVersion: g
                        },
                        globalName: y,
                        ssrRemoteEntry: _
                    } = e.metaData, {
                        exposes: b
                    } = e, v = {
                        version: l || "",
                        buildVersion: g,
                        globalName: y,
                        remoteEntry: simpleJoinRemoteEntry(d, f),
                        remoteEntryType: p,
                        remoteTypes: simpleJoinRemoteEntry(m.path, m.name),
                        remoteTypesZip: m.zip || "",
                        remoteTypesAPI: m.api || "",
                        remotesInfo: h,
                        shared: null == e ? void 0 : e.shared.map(e => ({
                            assets: e.assets,
                            sharedName: e.name,
                            version: e.version
                        })),
                        modules: null == b ? void 0 : b.map(e => ({
                            moduleName: e.name,
                            modulePath: e.path,
                            assets: e.assets
                        }))
                    };
                    if (null == (t = e.metaData) ? void 0 : t.prefetchInterface) {
                        let t = e.metaData.prefetchInterface;
                        v = {
                            ...v,
                            prefetchInterface: t
                        }
                    }
                    if (null == (r = e.metaData) ? void 0 : r.prefetchEntry) {
                        let {
                            path: t,
                            name: r,
                            type: n
                        } = e.metaData.prefetchEntry;
                        v = {
                            ...v,
                            prefetchEntry: simpleJoinRemoteEntry(t, r),
                            prefetchEntryType: n
                        }
                    }
                    return o = "publicPath" in e.metaData ? {
                        ...v,
                        publicPath: c(),
                        ssrPublicPath: e.metaData.ssrPublicPath
                    } : {
                        ...v,
                        getPublicPath: c()
                    }, _ && (o.ssrRemoteEntry = simpleJoinRemoteEntry(_.path, _.name), o.ssrRemoteEntryType = _.type || "commonjs-module"), o
                }

                function isManifestProvider(e) {
                    return !!("remoteEntry" in e && e.remoteEntry.includes(MANIFEST_EXT))
                }

                function getManifestFileName(e) {
                    if (!e) return {
                        statsFileName: StatsFileName,
                        manifestFileName: ManifestFileName
                    };
                    let t = "boolean" == typeof e ? "" : e.filePath || "",
                        r = "boolean" == typeof e ? "" : e.fileName || "",
                        n = ".json",
                        o = e => e.endsWith(n) ? e : `${e}${n}`,
                        i = (e, t) => e.replace(n, `${t}${n}`),
                        a = r ? o(r) : ManifestFileName;
                    return {
                        statsFileName: simpleJoinRemoteEntry(t, r ? i(a, "-stats") : StatsFileName),
                        manifestFileName: simpleJoinRemoteEntry(t, a)
                    }
                }
                let PREFIX = "[ Module Federation ]",
                    DEFAULT_DELEGATE = console,
                    LOGGER_STACK_SKIP_TOKENS = ["logger.ts", "logger.js", "captureStackTrace", "Logger.emit", "Logger.log", "Logger.info", "Logger.warn", "Logger.error", "Logger.debug"];

                function captureStackTrace() {
                    try {
                        let e = Error().stack;
                        if (!e) return;
                        let [, ...t] = e.split("\n"), r = t.filter(e => !LOGGER_STACK_SKIP_TOKENS.some(t => e.includes(t)));
                        if (!r.length) return;
                        let n = r.slice(0, 5).join("\n");
                        return `Stack trace:
${n}`
                    } catch {
                        return
                    }
                }
                class Logger {
                    setPrefix(e) {
                        this.prefix = e
                    }
                    setDelegate(e) {
                        this.delegate = e ?? DEFAULT_DELEGATE
                    }
                    emit(e, t) {
                        let r = this.delegate,
                            n = isDebugMode() ? captureStackTrace() : void 0,
                            o = n ? [...t, n] : t,
                            i = (() => {
                                switch (e) {
                                    case "log":
                                        return ["log", "info"];
                                    case "info":
                                        return ["info", "log"];
                                    case "warn":
                                        return ["warn", "info", "log"];
                                    case "error":
                                        return ["error", "warn", "log"];
                                    default:
                                        return ["debug", "log"]
                                }
                            })();
                        for (let e of i) {
                            let t = r[e];
                            if ("function" == typeof t) return void t.call(r, this.prefix, ...o)
                        }
                        for (let e of i) {
                            let t = DEFAULT_DELEGATE[e];
                            if ("function" == typeof t) return void t.call(DEFAULT_DELEGATE, this.prefix, ...o)
                        }
                    }
                    log() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("log", t)
                    }
                    warn() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("warn", t)
                    }
                    error() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("error", t)
                    }
                    success() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("info", t)
                    }
                    info() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("info", t)
                    }
                    ready() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.emit("info", t)
                    }
                    debug() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        isDebugMode() && this.emit("debug", t)
                    }
                    constructor(e, t = DEFAULT_DELEGATE) {
                        this.prefix = e, this.delegate = t ?? DEFAULT_DELEGATE
                    }
                }

                function createLogger(e) {
                    return new Logger(e)
                }

                function createInfrastructureLogger(e) {
                    let t = new Logger(e);
                    return Object.defineProperty(t, "__mf_infrastructure_logger__", {
                        value: !0,
                        enumerable: !1,
                        configurable: !1
                    }), t
                }

                function bindLoggerToCompiler(e, t, r) {
                    if (e.__mf_infrastructure_logger__ && (null == t ? void 0 : t.getInfrastructureLogger)) try {
                        let n = t.getInfrastructureLogger(r);
                        n && "object" == typeof n && ("function" == typeof n.log || "function" == typeof n.info || "function" == typeof n.warn || "function" == typeof n.error) && e.setDelegate(n)
                    } catch {
                        e.setDelegate(void 0)
                    }
                }
                let logger = createLogger(PREFIX),
                    infrastructureLogger = createInfrastructureLogger(PREFIX);
                async function safeWrapper(e, t) {
                    try {
                        return await e()
                    } catch (e) {
                        t || warn(e);
                        return
                    }
                }

                function isStaticResourcesEqual(e, t) {
                    let r = /^(https?:)?\/\//i;
                    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "")
                }

                function createScript(e) {
                    let t, r = null,
                        n = !0,
                        o = 2e4,
                        i = document.getElementsByTagName("script");
                    for (let t = 0; t < i.length; t++) {
                        let o = i[t],
                            a = o.getAttribute("src");
                        if (a && isStaticResourcesEqual(a, e.url)) {
                            r = o, n = !1;
                            break
                        }
                    }
                    if (!r) {
                        let t, n = e.attrs;
                        (r = document.createElement("script")).type = (null == n ? void 0 : n.type) === "module" ? "module" : "text/javascript", e.createScriptHook && ((t = e.createScriptHook(e.url, e.attrs)) instanceof HTMLScriptElement ? r = t : "object" == typeof t && ("script" in t && t.script && (r = t.script), "timeout" in t && t.timeout && (o = t.timeout))), r.src || (r.src = e.url), n && !t && Object.keys(n).forEach(e => {
                            r && ("async" === e || "defer" === e ? r[e] = n[e] : r.getAttribute(e) || r.setAttribute(e, n[e]))
                        })
                    }
                    let a = async (n, o) => {
                        clearTimeout(t);
                        let i = () => {
                            (null == o ? void 0 : o.type) === "error" ? (null == e ? void 0 : e.onErrorCallback) && (null == e || e.onErrorCallback(o)) : (null == e ? void 0 : e.cb) && (null == e || e.cb())
                        };
                        if (r && (r.onerror = null, r.onload = null, safeWrapper(() => {
                                let {
                                    needDeleteScript: t = !0
                                } = e;
                                t && (null == r ? void 0 : r.parentNode) && r.parentNode.removeChild(r)
                            }), n && "function" == typeof n)) {
                            let e = n(o);
                            if (e instanceof Promise) {
                                let t = await e;
                                return i(), t
                            }
                            return i(), e
                        }
                        i()
                    };
                    return r.onerror = a.bind(null, r.onerror), r.onload = a.bind(null, r.onload), t = setTimeout(() => {
                        a(null, Error(`Remote script "${e.url}" time-outed.`))
                    }, o), {
                        script: r,
                        needAttach: n
                    }
                }

                function createLink(e) {
                    let t = null,
                        r = !0,
                        n = document.getElementsByTagName("link");
                    for (let o = 0; o < n.length; o++) {
                        let i = n[o],
                            a = i.getAttribute("href"),
                            s = i.getAttribute("rel");
                        if (a && isStaticResourcesEqual(a, e.url) && s === e.attrs.rel) {
                            t = i, r = !1;
                            break
                        }
                    }
                    if (!t) {
                        let r;
                        (t = document.createElement("link")).setAttribute("href", e.url);
                        let n = e.attrs;
                        e.createLinkHook && (r = e.createLinkHook(e.url, n)) instanceof HTMLLinkElement && (t = r), n && !r && Object.keys(n).forEach(e => {
                            t && !t.getAttribute(e) && t.setAttribute(e, n[e])
                        })
                    }
                    let o = (r, n) => {
                        let o = () => {
                            (null == n ? void 0 : n.type) === "error" ? (null == e ? void 0 : e.onErrorCallback) && (null == e || e.onErrorCallback(n)) : (null == e ? void 0 : e.cb) && (null == e || e.cb())
                        };
                        if (t && (t.onerror = null, t.onload = null, safeWrapper(() => {
                                let {
                                    needDeleteLink: r = !0
                                } = e;
                                r && (null == t ? void 0 : t.parentNode) && t.parentNode.removeChild(t)
                            }), r)) {
                            let e = r(n);
                            return o(), e
                        }
                        o()
                    };
                    return t.onerror = o.bind(null, t.onerror), t.onload = o.bind(null, t.onload), {
                        link: t,
                        needAttach: r
                    }
                }

                function loadScript(e, t) {
                    let {
                        attrs: r = {},
                        createScriptHook: n
                    } = t;
                    return new Promise((t, o) => {
                        let {
                            script: i,
                            needAttach: a
                        } = createScript({
                            url: e,
                            cb: t,
                            onErrorCallback: o,
                            attrs: {
                                fetchpriority: "high",
                                ...r
                            },
                            createScriptHook: n,
                            needDeleteScript: !0
                        });
                        a && document.head.appendChild(i)
                    })
                }
                let sdkImportCache = new Map;

                function importNodeModule(e) {
                    if (!e) throw Error("import specifier is required");
                    if (sdkImportCache.has(e)) return sdkImportCache.get(e);
                    let t = Function("name", "return import(name)")(e).then(e => e).catch(t => {
                        throw console.error(`Error importing module ${e}:`, t), sdkImportCache.delete(e), t
                    });
                    return sdkImportCache.set(e, t), t
                }
                let loadNodeFetch = async () => {
                    let e = await importNodeModule("node-fetch");
                    return e.default || e
                }, lazyLoaderHookFetch = async (e, t, r) => {
                    let n = (e, t) => r.lifecycle.fetch.emit(e, t),
                        o = await n(e, t || {});
                    return o && o instanceof Response ? o : ("undefined" == typeof fetch ? await loadNodeFetch() : fetch)(e, t || {})
                }, createScriptNode = "undefined" == typeof ENV_TARGET || "web" !== ENV_TARGET ? (url, cb, attrs, loaderHook) => {
                    let urlObj;
                    if (null == loaderHook ? void 0 : loaderHook.createScriptHook) {
                        let hookResult = loaderHook.createScriptHook(url);
                        hookResult && "object" == typeof hookResult && "url" in hookResult && (url = hookResult.url)
                    }
                    try {
                        urlObj = new URL(url)
                    } catch (e) {
                        console.error("Error constructing URL:", e), cb(Error(`Invalid URL: ${e}`));
                        return
                    }
                    let getFetch = async () => (null == loaderHook ? void 0 : loaderHook.fetch) ? (e, t) => lazyLoaderHookFetch(e, t, loaderHook) : "undefined" == typeof fetch ? loadNodeFetch() : fetch, handleScriptFetch = async (f, urlObj) => {
                        try {
                            var _vm_constants;
                            let res = await f(urlObj.href),
                                data = await res.text(),
                                [path, vm] = await Promise.all([importNodeModule("path"), importNodeModule("vm")]),
                                scriptContext = {
                                    exports: {},
                                    module: {
                                        exports: {}
                                    }
                                },
                                urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"),
                                filename = path.basename(urlObj.pathname),
                                script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}
})`, {
                                    filename,
                                    importModuleDynamically: (null == (_vm_constants = vm.constants) ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) ?? importNodeModule
                                });
                            script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
                            let exportedInterface = scriptContext.module.exports || scriptContext.exports;
                            if (attrs && exportedInterface && attrs.globalName) {
                                let container = exportedInterface[attrs.globalName] || exportedInterface;
                                cb(void 0, container);
                                return
                            }
                            cb(void 0, exportedInterface)
                        } catch (e) {
                            cb(e instanceof Error ? e : Error(`Script execution error: ${e}`))
                        }
                    };
                    getFetch().then(async e => {
                        if ((null == attrs ? void 0 : attrs.type) === "esm" || (null == attrs ? void 0 : attrs.type) === "module") return loadModule(urlObj.href, {
                            fetch: e,
                            vm: await importNodeModule("vm")
                        }).then(async e => {
                            await e.evaluate(), cb(void 0, e.namespace)
                        }).catch(e => {
                            cb(e instanceof Error ? e : Error(`Script execution error: ${e}`))
                        });
                        handleScriptFetch(e, urlObj)
                    }).catch(e => {
                        cb(e)
                    })
                } : (e, t, r, n) => {
                    t(Error("createScriptNode is disabled in non-Node.js environment"))
                }, loadScriptNode = "undefined" == typeof ENV_TARGET || "web" !== ENV_TARGET ? (e, t) => new Promise((r, n) => {
                    createScriptNode(e, (e, o) => {
                        if (e) n(e);
                        else {
                            var i, a;
                            let e = (null == t || null == (i = t.attrs) ? void 0 : i.globalName) || `__FEDERATION_${null==t||null==(a=t.attrs)?void 0:a.name}:custom__`;
                            r(globalThis[e] = o)
                        }
                    }, t.attrs, t.loaderHook)
                }) : (e, t) => {
                    throw Error("loadScriptNode is disabled in non-Node.js environment")
                }, esmModuleCache = new Map;
                async function loadModule(e, t) {
                    if (esmModuleCache.has(e)) return esmModuleCache.get(e);
                    let {
                        fetch: r,
                        vm: n
                    } = t, o = await r(e), i = await o.text(), a = new n.SourceTextModule(i, {
                        importModuleDynamically: async (r, n) => loadModule(new URL(r, e).href, t)
                    });
                    return esmModuleCache.set(e, a), await a.link(async r => {
                        let n = new URL(r, e).href;
                        return await loadModule(n, t)
                    }), a
                }

                function normalizeOptions(e, t, r) {
                    return function(n) {
                        if (!1 === n) return !1;
                        if (void 0 === n)
                            if (e) return t;
                            else return !1;
                        if (!0 === n) return t;
                        if (n && "object" == typeof n) return {
                            ...t,
                            ...n
                        };
                        throw Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof n}`)
                    }
                }
                let createModuleFederationConfig = e => e;
                exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY, exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX, exports.EncodedNameTransformMap = EncodedNameTransformMap, exports.FederationModuleManifest = FederationModuleManifest, exports.MANIFEST_EXT = MANIFEST_EXT, exports.MFModuleType = MFModuleType, exports.MFPrefetchCommon = MFPrefetchCommon, exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER, exports.ManifestFileName = ManifestFileName, exports.NameTransformMap = NameTransformMap, exports.NameTransformSymbol = NameTransformSymbol, exports.SEPARATOR = SEPARATOR, exports.StatsFileName = StatsFileName, exports.TEMP_DIR = TEMP_DIR, exports.assert = assert, exports.bindLoggerToCompiler = bindLoggerToCompiler, exports.composeKeyWithSeparator = composeKeyWithSeparator, exports.containerPlugin = ContainerPlugin, exports.containerReferencePlugin = ContainerReferencePlugin, exports.createInfrastructureLogger = createInfrastructureLogger, exports.createLink = createLink, exports.createLogger = createLogger, exports.createModuleFederationConfig = createModuleFederationConfig, exports.createScript = createScript, exports.createScriptNode = createScriptNode, exports.decodeName = decodeName, exports.encodeName = encodeName, exports.error = error, exports.generateExposeFilename = generateExposeFilename, exports.generateShareFilename = generateShareFilename, exports.generateSnapshotFromManifest = generateSnapshotFromManifest, exports.getManifestFileName = getManifestFileName, exports.getProcessEnv = getProcessEnv, exports.getResourceUrl = getResourceUrl, exports.inferAutoPublicPath = inferAutoPublicPath, exports.infrastructureLogger = infrastructureLogger, exports.isBrowserEnv = isBrowserEnv, exports.isDebugMode = isDebugMode, exports.isManifestProvider = isManifestProvider, exports.isReactNativeEnv = isReactNativeEnv, exports.isRequiredVersion = isRequiredVersion, exports.isStaticResourcesEqual = isStaticResourcesEqual, exports.loadScript = loadScript, exports.loadScriptNode = loadScriptNode, exports.logger = logger, exports.moduleFederationPlugin = ModuleFederationPlugin, exports.normalizeOptions = normalizeOptions, exports.parseEntry = parseEntry, exports.safeToString = safeToString, exports.safeWrapper = safeWrapper, exports.sharePlugin = SharePlugin, exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry, exports.warn = warn
            },
            95488: function(e, t) {
                t.FEDERATION_SUPPORTED_TYPES = ["script"]
            },
            88976: function(e, t, r) {
                var n = r(55014),
                    o = r(95488),
                    i = r(84582);

                function a(e) {
                    e.S && !e.federation.hasAttachShareScopeMap && e.federation.instance && e.federation.instance.shareScopeMap && (e.S = e.federation.instance.shareScopeMap, e.federation.hasAttachShareScopeMap = !0)
                }

                function s(e) {
                    let {
                        webpackRequire: t,
                        moduleToHandlerMapping: r
                    } = e, {
                        consumesLoadingData: n,
                        initializeSharingData: o
                    } = t;
                    if (n && !n._updated) {
                        let {
                            moduleIdToConsumeDataMapping: t = {},
                            initialConsumes: o = [],
                            chunkMapping: i = {}
                        } = n;
                        if (Object.entries(t).forEach(e => {
                                let [t, n] = e;
                                r[t] || (r[t] = {
                                    getter: n.fallback,
                                    shareInfo: {
                                        shareConfig: {
                                            requiredVersion: n.requiredVersion,
                                            strictVersion: n.strictVersion,
                                            singleton: n.singleton,
                                            eager: n.eager,
                                            layer: n.layer
                                        },
                                        scope: Array.isArray(n.shareScope) ? n.shareScope : [n.shareScope || "default"]
                                    },
                                    shareKey: n.shareKey
                                })
                            }), "initialConsumes" in e) {
                            let {
                                initialConsumes: t = []
                            } = e;
                            o.forEach(e => {
                                t.includes(e) || t.push(e)
                            })
                        }
                        if ("chunkMapping" in e) {
                            let {
                                chunkMapping: t = {}
                            } = e;
                            Object.entries(i).forEach(e => {
                                let [r, n] = e;
                                t[r] || (t[r] = []), n.forEach(e => {
                                    t[r].includes(e) || t[r].push(e)
                                })
                            })
                        }
                        n._updated = 1
                    }
                    if (o && !o._updated) {
                        let {
                            federation: e
                        } = t;
                        if (!e.instance || !o.scopeToSharingDataMapping) return;
                        let r = {};
                        for (let [e, t] of Object.entries(o.scopeToSharingDataMapping))
                            for (let n of t)
                                if ("object" == typeof n && null !== n) {
                                    let {
                                        name: t,
                                        version: o,
                                        factory: i,
                                        eager: a,
                                        singleton: s,
                                        requiredVersion: l,
                                        strictVersion: c
                                    } = n, u = {
                                        requiredVersion: `^${o}`
                                    }, h = function(e) {
                                        return void 0 !== e
                                    };
                                    h(s) && (u.singleton = s), h(l) && (u.requiredVersion = l), h(a) && (u.eager = a), h(c) && (u.strictVersion = c);
                                    let d = {
                                        version: o,
                                        scope: [e],
                                        shareConfig: u,
                                        get: i
                                    };
                                    r[t] ? r[t].push(d) : r[t] = [d]
                                } e.instance.registerShared(r), o._updated = 1
                    }
                }

                function l(e) {
                    var t, r, n;
                    let {
                        webpackRequire: o,
                        idToExternalAndNameMapping: i = {},
                        idToRemoteMap: a = {},
                        chunkMapping: s = {}
                    } = e, {
                        remotesLoadingData: l
                    } = o, c = null == (n = o.federation) || null == (r = n.bundlerRuntimeOptions) || null == (t = r.remotes) ? void 0 : t.remoteInfos;
                    if (!l || l._updated || !c) return;
                    let {
                        chunkMapping: u,
                        moduleIdToRemoteDataMapping: h
                    } = l;
                    if (u && h) {
                        for (let [e, t] of Object.entries(h))
                            if (i[e] || (i[e] = [t.shareScope, t.name, t.externalModuleId]), !a[e] && c[t.remoteName]) {
                                let r = c[t.remoteName];
                                a[e] ||= [], r.forEach(t => {
                                    a[e].includes(t) || a[e].push(t)
                                })
                            } s && Object.entries(u).forEach(e => {
                            let [t, r] = e;
                            s[t] || (s[t] = []), r.forEach(e => {
                                s[t].includes(e) || s[t].push(e)
                            })
                        }), l._updated = 1
                    }
                }

                function c(e) {
                    l(e);
                    let {
                        chunkId: t,
                        promises: r,
                        webpackRequire: n,
                        chunkMapping: s,
                        idToExternalAndNameMapping: c,
                        idToRemoteMap: u
                    } = e;
                    a(n), n.o(s, t) && s[t].forEach(e => {
                        let t = n.R;
                        t || (t = []);
                        let a = c[e],
                            s = u[e] || [];
                        if (t.indexOf(a) >= 0) return;
                        if (t.push(a), a.p) return r.push(a.p);
                        let l = t => {
                                t || (t = Error("Container missing")), "string" == typeof t.message && (t.message += `
while loading "${a[1]}" from ${a[2]}`), n.m[e] = () => {
                                    throw t
                                }, a.p = 0
                            },
                            h = (e, t, n, o, i, s) => {
                                try {
                                    let c = e(t, n);
                                    if (!c || !c.then) return i(c, o, s);
                                    {
                                        let e = c.then(e => i(e, o), l);
                                        if (!s) return e;
                                        r.push(a.p = e)
                                    }
                                } catch (e) {
                                    l(e)
                                }
                            },
                            d = (e, t, r) => e ? h(n.I, a[0], 0, e, f, r) : l();
                        var f = (e, r, n) => h(r.get, a[1], t, 0, p, n),
                            p = t => {
                                a.p = 1, n.m[e] = e => {
                                    e.exports = t()
                                }
                            };
                        let m = () => {
                            try {
                                let e = i.decodeName(s[0].name, i.ENCODE_NAME_PREFIX) + a[1].slice(1),
                                    t = n.federation.instance,
                                    r = () => n.federation.instance.loadRemote(e, {
                                        loadFactory: !1,
                                        from: "build"
                                    });
                                if ("version-first" === t.options.shareStrategy) return Promise.all(t.sharedHandler.initializeSharing(a[0])).then(() => r());
                                return r()
                            } catch (e) {
                                l(e)
                            }
                        };
                        1 === s.length && o.FEDERATION_SUPPORTED_TYPES.includes(s[0].externalType) && s[0].name ? h(m, a[2], 0, 0, p, 1) : h(n, a[2], 0, 0, d, 1)
                    })
                }

                function u(e) {
                    s(e);
                    let {
                        chunkId: t,
                        promises: r,
                        installedModules: n,
                        webpackRequire: o,
                        chunkMapping: i,
                        moduleToHandlerMapping: l
                    } = e;
                    a(o), o.o(i, t) && i[t].forEach(e => {
                        if (o.o(n, e)) return r.push(n[e]);
                        let t = t => {
                                n[e] = 0, o.m[e] = r => {
                                    var n;
                                    delete o.c[e];
                                    let i = t(),
                                        {
                                            shareInfo: a
                                        } = l[e];
                                    if ((null == a || null == (n = a.shareConfig) ? void 0 : n.layer) && i && "object" == typeof i) try {
                                        i.hasOwnProperty("layer") && void 0 !== i.layer || (i.layer = a.shareConfig.layer)
                                    } catch (e) {}
                                    r.exports = i
                                }
                            },
                            i = t => {
                                delete n[e], o.m[e] = r => {
                                    throw delete o.c[e], t
                                }
                            };
                        try {
                            let a = o.federation.instance;
                            if (!a) throw Error("Federation instance not found!");
                            let {
                                shareKey: s,
                                getter: c,
                                shareInfo: u
                            } = l[e], h = a.loadShare(s, {
                                customShareInfo: u
                            }).then(e => !1 === e ? c() : e);
                            h.then ? r.push(n[e] = h.then(t).catch(i)) : t(h)
                        } catch (e) {
                            i(e)
                        }
                    })
                }

                function h(e) {
                    let {
                        shareScopeName: t,
                        webpackRequire: r,
                        initPromises: n,
                        initTokens: i,
                        initScope: s
                    } = e, l = Array.isArray(t) ? t : [t];
                    var c = [],
                        u = function(e) {
                            s || (s = []);
                            let l = r.federation.instance;
                            var c = i[e];
                            if (c || (c = i[e] = {
                                    from: l.name
                                }), s.indexOf(c) >= 0) return;
                            s.push(c);
                            let u = n[e];
                            if (u) return u;
                            var h = e => "undefined" != typeof console && console.warn && console.warn(e),
                                d = n => {
                                    var o = e => h("Initialization of sharing external failed: " + e);
                                    try {
                                        var i = r(n);
                                        if (!i) return;
                                        var a = n => n && n.init && n.init(r.S[e], s, {
                                            shareScopeMap: r.S || {},
                                            shareScopeKeys: t
                                        });
                                        if (i.then) return f.push(i.then(a, o));
                                        var l = a(i);
                                        if (l && "boolean" != typeof l && l.then) return f.push(l.catch(o))
                                    } catch (e) {
                                        o(e)
                                    }
                                };
                            let f = l.initializeSharing(e, {
                                strategy: l.options.shareStrategy,
                                initScope: s,
                                from: "build"
                            });
                            a(r);
                            let p = r.federation.bundlerRuntimeOptions.remotes;
                            return (p && Object.keys(p.idToRemoteMap).forEach(e => {
                                let t = p.idToRemoteMap[e],
                                    r = p.idToExternalAndNameMapping[e][2];
                                if (t.length > 1) d(r);
                                else if (1 === t.length) {
                                    let e = t[0];
                                    o.FEDERATION_SUPPORTED_TYPES.includes(e.externalType) || d(r)
                                }
                            }), f.length) ? n[e] = Promise.all(f).then(() => n[e] = !0) : n[e] = !0
                        };
                    return l.forEach(e => {
                        c.push(u(e))
                    }), Promise.all(c).then(() => !0)
                }

                function d(e) {
                    let {
                        moduleId: t,
                        moduleToHandlerMapping: r,
                        webpackRequire: n
                    } = e, o = n.federation.instance;
                    if (!o) throw Error("Federation instance not found!");
                    let {
                        shareKey: i,
                        shareInfo: a
                    } = r[t];
                    try {
                        return o.loadShareSync(i, {
                            customShareInfo: a
                        })
                    } catch (e) {
                        throw console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.'), console.error("The original error message is as follows: "), e
                    }
                }

                function f(e) {
                    let {
                        webpackRequire: t
                    } = e;
                    s(e);
                    let {
                        initialConsumes: r,
                        moduleToHandlerMapping: n,
                        installedModules: o
                    } = e;
                    r.forEach(e => {
                        t.m[e] = r => {
                            var i;
                            o[e] = 0, delete t.c[e];
                            let a = d({
                                moduleId: e,
                                moduleToHandlerMapping: n,
                                webpackRequire: t
                            });
                            if ("function" != typeof a) throw Error(`Shared module is not available for eager consumption: ${e}`);
                            let s = a(),
                                {
                                    shareInfo: l
                                } = n[e];
                            if ((null == l || null == (i = l.shareConfig) ? void 0 : i.layer) && s && "object" == typeof s) try {
                                s.hasOwnProperty("layer") && void 0 !== s.layer || (s.layer = l.shareConfig.layer)
                            } catch (e) {}
                            r.exports = s
                        }
                    })
                }

                function p(e) {
                    let {
                        webpackRequire: t,
                        shareScope: r,
                        initScope: n,
                        shareScopeKey: o,
                        remoteEntryInitOptions: i
                    } = e;
                    if (!t.S || !t.federation || !t.federation.instance || !t.federation.initOptions) return;
                    let a = t.federation.instance;
                    a.initOptions({
                        name: t.federation.initOptions.name,
                        remotes: [],
                        ...i
                    });
                    let s = null == i ? void 0 : i.shareScopeKeys,
                        l = null == i ? void 0 : i.shareScopeMap;
                    if (o && "string" != typeof o) o.forEach(e => {
                        if (!s || !l) return void a.initShareScopeMap(e, r, {
                            hostShareScopeMap: (null == i ? void 0 : i.shareScopeMap) || {}
                        });
                        l[e] || (l[e] = {});
                        let t = l[e];
                        a.initShareScopeMap(e, t, {
                            hostShareScopeMap: (null == i ? void 0 : i.shareScopeMap) || {}
                        })
                    });
                    else {
                        let e = o || "default";
                        Array.isArray(s) ? s.forEach(e => {
                            l[e] || (l[e] = {});
                            let t = l[e];
                            a.initShareScopeMap(e, t, {
                                hostShareScopeMap: (null == i ? void 0 : i.shareScopeMap) || {}
                            })
                        }) : a.initShareScopeMap(e, r, {
                            hostShareScopeMap: (null == i ? void 0 : i.shareScopeMap) || {}
                        })
                    }
                    return (t.federation.attachShareScopeMap && t.federation.attachShareScopeMap(t), "function" == typeof t.federation.prefetch && t.federation.prefetch(), Array.isArray(o)) ? t.federation.initOptions.shared ? t.I(o, n) : Promise.all(o.map(e => t.I(e, n))).then(() => !0) : t.I(o || "default", n)
                }
                e.exports = {
                    runtime: function(e) {
                        var t = Object.create(null);
                        if (e)
                            for (var r in e) t[r] = e[r];
                        return t.default = e, Object.freeze(t)
                    }(n),
                    instance: void 0,
                    initOptions: void 0,
                    bundlerRuntime: {
                        remotes: c,
                        consumes: u,
                        I: h,
                        S: {},
                        installInitialConsumes: f,
                        initContainerEntry: p
                    },
                    attachShareScopeMap: a,
                    bundlerRuntimeOptions: {}
                }
            },
            16983: function(e, t, r) {
                var n, o, i, a, s, l, c, u, h, d, f, p, m = r(88976),
                    g = r.n(m);
                let y = [],
                    _ = {},
                    b = "web",
                    v = "version-first";
                if ((r.initializeSharingData || r.initializeExposesData) && r.federation) {
                    let e = (e, t, r) => {
                            e && e[t] && (e[t] = r)
                        },
                        t = (e, t, r) => {
                            var n, o, i, a, s, l;
                            let c = r();
                            Array.isArray(c) ? (null != (i = (n = e)[o = t]) || (n[o] = []), e[t].push(...c)) : "object" == typeof c && null !== c && (null != (l = (a = e)[s = t]) || (a[s] = {}), Object.assign(e[t], c))
                        },
                        m = (e, t, r) => {
                            var n, o, i;
                            null != (i = (n = e)[o = t]) || (n[o] = r())
                        },
                        E = null != (u = null == (n = r.remotesLoadingData) ? void 0 : n.chunkMapping) ? u : {},
                        S = null != (h = null == (o = r.remotesLoadingData) ? void 0 : o.moduleIdToRemoteDataMapping) ? h : {},
                        I = null != (d = null == (i = r.initializeSharingData) ? void 0 : i.scopeToSharingDataMapping) ? d : {},
                        w = null != (f = null == (a = r.consumesLoadingData) ? void 0 : a.chunkMapping) ? f : {},
                        N = null != (p = null == (s = r.consumesLoadingData) ? void 0 : s.moduleIdToConsumeDataMapping) ? p : {},
                        R = {},
                        T = [],
                        $ = {},
                        O = null == (l = r.initializeExposesData) ? void 0 : l.shareScope;
                    for (let e in g()) r.federation[e] = g()[e];
                    m(r.federation, "consumesLoadingModuleToHandlerMapping", () => {
                        let e = {};
                        for (let [t, r] of Object.entries(N)) e[t] = {
                            getter: r.fallback,
                            shareInfo: {
                                shareConfig: {
                                    fixedDependencies: !1,
                                    requiredVersion: r.requiredVersion,
                                    strictVersion: r.strictVersion,
                                    singleton: r.singleton,
                                    eager: r.eager
                                },
                                scope: [r.shareScope]
                            },
                            shareKey: r.shareKey
                        };
                        return e
                    }), m(r.federation, "initOptions", () => ({})), m(r.federation.initOptions, "name", () => b), m(r.federation.initOptions, "shareStrategy", () => v), m(r.federation.initOptions, "shared", () => {
                        let e = {};
                        for (let [t, r] of Object.entries(I))
                            for (let n of r)
                                if ("object" == typeof n && null !== n) {
                                    let {
                                        name: r,
                                        version: o,
                                        factory: i,
                                        eager: a,
                                        singleton: s,
                                        requiredVersion: l,
                                        strictVersion: c
                                    } = n, u = {}, h = function(e) {
                                        return void 0 !== e
                                    };
                                    h(s) && (u.singleton = s), h(l) && (u.requiredVersion = l), h(a) && (u.eager = a), h(c) && (u.strictVersion = c);
                                    let d = {
                                        version: o,
                                        scope: [t],
                                        shareConfig: u,
                                        get: i
                                    };
                                    e[r] ? e[r].push(d) : e[r] = [d]
                                } return e
                    }), t(r.federation.initOptions, "remotes", () => Object.values(_).flat().filter(e => "script" === e.externalType)), t(r.federation.initOptions, "plugins", () => y), m(r.federation, "bundlerRuntimeOptions", () => ({})), m(r.federation.bundlerRuntimeOptions, "remotes", () => ({})), m(r.federation.bundlerRuntimeOptions.remotes, "chunkMapping", () => E), m(r.federation.bundlerRuntimeOptions.remotes, "remoteInfos", () => _), m(r.federation.bundlerRuntimeOptions.remotes, "idToExternalAndNameMapping", () => {
                        let e = {};
                        for (let [t, r] of Object.entries(S)) e[t] = [r.shareScope, r.name, r.externalModuleId, r.remoteName];
                        return e
                    }), m(r.federation.bundlerRuntimeOptions.remotes, "webpackRequire", () => r), t(r.federation.bundlerRuntimeOptions.remotes, "idToRemoteMap", () => {
                        let e = {};
                        for (let [t, r] of Object.entries(S)) {
                            let n = _[r.remoteName];
                            n && (e[t] = n)
                        }
                        return e
                    }), e(r, "S", r.federation.bundlerRuntime.S), r.federation.attachShareScopeMap && r.federation.attachShareScopeMap(r), e(r.f, "remotes", (e, t) => r.federation.bundlerRuntime.remotes({
                        chunkId: e,
                        promises: t,
                        chunkMapping: E,
                        idToExternalAndNameMapping: r.federation.bundlerRuntimeOptions.remotes.idToExternalAndNameMapping,
                        idToRemoteMap: r.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,
                        webpackRequire: r
                    })), e(r.f, "consumes", (e, t) => r.federation.bundlerRuntime.consumes({
                        chunkId: e,
                        promises: t,
                        chunkMapping: w,
                        moduleToHandlerMapping: r.federation.consumesLoadingModuleToHandlerMapping,
                        installedModules: R,
                        webpackRequire: r
                    })), e(r, "I", (e, t) => r.federation.bundlerRuntime.I({
                        shareScopeName: e,
                        initScope: t,
                        initPromises: T,
                        initTokens: $,
                        webpackRequire: r
                    })), e(r, "initContainer", (e, t, n) => r.federation.bundlerRuntime.initContainerEntry({
                        shareScope: e,
                        initScope: t,
                        remoteEntryInitOptions: n,
                        shareScopeKey: O,
                        webpackRequire: r
                    })), e(r, "getContainer", (e, t) => {
                        var n = r.initializeExposesData.moduleMap;
                        return r.R = t, t = Object.prototype.hasOwnProperty.call(n, e) ? n[e]() : Promise.resolve().then(() => {
                            throw Error('Module "' + e + '" does not exist in container.')
                        }), r.R = void 0, t
                    }), r.federation.instance = r.federation.runtime.init(r.federation.initOptions), (null == (c = r.consumesLoadingData) ? void 0 : c.initialConsumes) && r.federation.bundlerRuntime.installInitialConsumes({
                        webpackRequire: r,
                        installedModules: R,
                        initialConsumes: r.consumesLoadingData.initialConsumes,
                        moduleToHandlerMapping: r.federation.consumesLoadingModuleToHandlerMapping
                    })
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports
    }
    __webpack_require__.m = __webpack_modules__, __webpack_require__.c = __webpack_module_cache__, __webpack_require__.x = () => {
        var e = __webpack_require__.O(void 0, ["6591", "7932", "437", "2989", "9015"], () => __webpack_require__(60146));
        return __webpack_require__.O(e)
    }, (() => {
        __webpack_require__.federation || (__webpack_require__.federation = {
            chunkMatcher: function(e) {
                return !/^(2989|9015)$/.test(e)
            },
            rootOutputDir: "../../../"
        })
    })(), (() => {
        __webpack_require__.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, {
                a: t
            }), t
        }
    })(), (() => {
        __webpack_require__.d = (e, t) => {
            for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
    })(), (() => {
        __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce((t, r) => (__webpack_require__.f[r](e, t), t), []))
    })(), (() => {
        __webpack_require__.u = e => "437" === e ? "static/js/async/437.f6d64d53.js" : "static/js/" + e + "." + ({
            6591: "a44597be",
            7932: "2d979425"
        })[e] + ".js"
    })(), (() => {
        __webpack_require__.g = (() => {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        })()
    })(), (() => {
        __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    })(), (() => {
        __webpack_require__.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    })(), (() => {
        var e = [];
        __webpack_require__.O = (t, r, n, o) => {
            if (r) {
                o = o || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > o; i--) e[i] = e[i - 1];
                e[i] = [r, n, o];
                return
            }
            for (var a = 1 / 0, i = 0; i < e.length; i++) {
                for (var r = e[i][0], n = e[i][1], o = e[i][2], s = !0, l = 0; l < r.length; l++)(!1 & o || a >= o) && Object.keys(__webpack_require__.O).every(e => __webpack_require__.O[e](r[l])) ? r.splice(l--, 1) : (s = !1, o < a && (a = o));
                if (s) {
                    e.splice(i--, 1);
                    var c = n();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
    })(), (() => {
        __webpack_require__.p = "/"
    })(), (() => {
        __webpack_require__.S = {}, __webpack_require__.initializeSharingData = {
            scopeToSharingDataMapping: {
                default: [{
                    name: "@bale/gol-logger",
                    version: "0.5.15",
                    factory: () => () => __webpack_require__(54366),
                    eager: 1
                }, {
                    name: "@emotion/react",
                    version: "11.14.0",
                    factory: () => () => __webpack_require__(91419),
                    eager: 1,
                    singleton: 1,
                    requiredVersion: "^11.11.1"
                }, {
                    name: "@emotion/styled",
                    version: "11.14.0",
                    factory: () => () => __webpack_require__(15737),
                    eager: 1,
                    singleton: 1,
                    requiredVersion: "^11.11.1"
                }, {
                    name: "react-dom",
                    version: "18.3.1",
                    factory: () => () => __webpack_require__(50503),
                    eager: 1,
                    singleton: 1,
                    requiredVersion: "^18"
                }, {
                    name: "react-router-dom",
                    version: "6.11.1",
                    factory: () => () => __webpack_require__(63949),
                    eager: 1,
                    singleton: 1,
                    requiredVersion: "^6.11.1"
                }, {
                    name: "react",
                    version: "18.3.1",
                    factory: () => () => __webpack_require__(17806),
                    eager: 1,
                    singleton: 1,
                    requiredVersion: "^18"
                }]
            },
            uniqueName: "web"
        }, __webpack_require__.I = __webpack_require__.I || function() {
            throw Error("should have __webpack_require__.I")
        }
    })(), (() => {
        var e = __webpack_require__.x;
        __webpack_require__.x = () => Promise.all(["6591", "7932", "437", "2989", "9015"].map(__webpack_require__.e, __webpack_require__)).then(e)
    })(), (() => {
        __webpack_require__.consumesLoadingData = {
            chunkMapping: {
                2989: ["99290", "58191"]
            },
            moduleIdToConsumeDataMapping: {
                99290: {
                    shareScope: "default",
                    shareKey: "@emotion/react",
                    import: "@emotion/react",
                    requiredVersion: "^11.11.1",
                    strictVersion: !1,
                    singleton: !0,
                    eager: !0,
                    fallback: () => () => __webpack_require__(91419)
                },
                58191: {
                    shareScope: "default",
                    shareKey: "react",
                    import: "react",
                    requiredVersion: "^18",
                    strictVersion: !1,
                    singleton: !0,
                    eager: !0,
                    fallback: () => () => __webpack_require__(17806)
                }
            },
            initialConsumes: []
        }, __webpack_require__.f.consumes = __webpack_require__.f.consumes || function() {
            throw Error("should have __webpack_require__.f.consumes")
        }
    })(), (() => {
        var e = {
                64: 1
            },
            t = t => {
                var r = t[0],
                    o = t[1],
                    i = t[2];
                for (var a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                for (i && i(__webpack_require__); r.length;) e[r.pop()] = 1;
                n(t)
            };
        __webpack_require__.f.i = (t, r) => {
            e[t] || /^(2989|9015)$/.test(t) || importScripts(__webpack_require__.p + __webpack_require__.u(t))
        };
        var r = self.webpackChunkweb = self.webpackChunkweb || [],
            n = r.push.bind(r);
        r.push = t
    })(), (() => {
        var e = __webpack_require__.x,
            t = !1;
        __webpack_require__.x = function() {
            if (t || (t = !0, __webpack_require__(16983)), "function" == typeof e) return e();
            console.warn("[MF] Invalid prevStartup")
        }
    })();
    var __webpack_exports__ = __webpack_require__.x()
})();
//# sourceMappingURL=64.fe83ab08.js.map