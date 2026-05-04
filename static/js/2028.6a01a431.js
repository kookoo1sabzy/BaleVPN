try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7be44697-9a3d-4f38-9e00-cbb774b28a90", e._sentryDebugIdIdentifier = "sentry-dbid-7be44697-9a3d-4f38-9e00-cbb774b28a90")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2028"], {
        53703: function(e, n, t) {
            function o(e) {
                return e || (e = 0), new Promise(function(n) {
                    return setTimeout(n, e)
                })
            }

            function r() {
                return Math.random().toString(36).substring(2)
            }
            t.d(n, {
                X2: () => C
            });
            var i, s = 0,
                a = 0;

            function u() {
                var e = new Date().getTime();
                return e === s ? 1e3 * e + ++a : (s = e, a = 0, 1e3 * e)
            }
            var c = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);

            function d() {
                return new Date().getTime()
            }
            let l = function(e) {
                var n = new Set,
                    t = new Map;
                this.has = n.has.bind(n), this.add = function(o) {
                    t.set(o, d()), n.add(o),
                        function() {
                            for (var o = d() - e, r = n[Symbol.iterator]();;) {
                                var i = r.next().value;
                                if (!i || !(t.get(i) < o)) return;
                                t.delete(i), n.delete(i)
                            }
                        }()
                }, this.clear = function() {
                    n.clear(), t.clear()
                }
            };

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = JSON.parse(JSON.stringify(e));
                return void 0 === n.webWorkerSupport && (n.webWorkerSupport = !0), n.idb || (n.idb = {}), n.idb.ttl || (n.idb.ttl = 45e3), n.idb.fallbackInterval || (n.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (n.idb.onclose = e.idb.onclose), n.localstorage || (n.localstorage = {}), n.localstorage.removeTimeout || (n.localstorage.removeTimeout = 6e4), e.methods && (n.methods = e.methods), n.node || (n.node = {}), n.node.ttl || (n.node.ttl = 12e4), void 0 === n.node.useFastPath && (n.node.useFastPath = !0), n
            }
            var m = "messages";

            function h() {
                if ("undefined" != typeof indexedDB) return indexedDB;
                if ("undefined" != typeof window) {
                    if (void 0 !== window.mozIndexedDB) return window.mozIndexedDB;
                    if (void 0 !== window.webkitIndexedDB) return window.webkitIndexedDB;
                    if (void 0 !== window.msIndexedDB) return window.msIndexedDB
                }
                return !1
            }

            function p(e) {
                var n, t, o, r;
                return e.closed || !e.messagesCallback ? Promise.resolve() : (n = e.db, t = e.lastCursorId, o = n.transaction(m).objectStore(m), r = [], new Promise(function(e) {
                    (function() {
                        try {
                            var e = IDBKeyRange.bound(t + 1, 1 / 0);
                            return o.openCursor(e)
                        } catch (e) {
                            return o.openCursor()
                        }
                    })().onsuccess = function(n) {
                        var o = n.target.result;
                        o ? o.value.id < t + 1 ? o.continue(t + 1) : (r.push(o.value), o.continue()) : e(r)
                    }
                })).then(function(n) {
                    return n.filter(function(e) {
                        return !!e
                    }).map(function(n) {
                        return n.id > e.lastCursorId && (e.lastCursorId = n.id), n
                    }).filter(function(n) {
                        return !(n.uuid === e.uuid || e.eMIs.has(n.id)) && !(n.data.time < e.messagesCallbackTime)
                    }).sort(function(e, n) {
                        return e.time - n.time
                    }).forEach(function(n) {
                        e.messagesCallback && (e.eMIs.add(n.id), e.messagesCallback(n.data))
                    }), Promise.resolve()
                })
            }

            function b() {
                var e;
                if ("undefined" == typeof window) return null;
                try {
                    e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
                } catch (e) {}
                return e
            }

            function g(e) {
                return "pubkey.broadcastChannel-" + e
            }

            function v() {
                if (c) return !1;
                var e = b();
                if (!e) return !1;
                try {
                    var n = "__broadcastchannel_check";
                    e.setItem(n, "works"), e.removeItem(n)
                } catch (e) {
                    return !1
                }
                return !0
            }
            var w = new Set;
            let y = {
                create: function(e) {
                    var n = {
                        name: e,
                        messagesCallback: null
                    };
                    return w.add(n), n
                },
                close: function(e) {
                    w.delete(e)
                },
                onMessage: function(e, n) {
                    e.messagesCallback = n
                },
                postMessage: function(e, n) {
                    return new Promise(function(t) {
                        return setTimeout(function() {
                            Array.from(w).filter(function(n) {
                                return n.name === e.name
                            }).filter(function(n) {
                                return n !== e
                            }).filter(function(e) {
                                return !!e.messagesCallback
                            }).forEach(function(e) {
                                return e.messagesCallback(n)
                            }), t()
                        }, 5)
                    })
                },
                canBeUsed: function() {
                    return !0
                },
                type: "simulate",
                averageResponseTime: function() {
                    return 5
                },
                microSeconds: u
            };
            var k = [{
                create: function(e) {
                    var n = {
                        messagesCallback: null,
                        bc: new BroadcastChannel(e),
                        subFns: []
                    };
                    return n.bc.onmessage = function(e) {
                        n.messagesCallback && n.messagesCallback(e.data)
                    }, n
                },
                close: function(e) {
                    e.bc.close(), e.subFns = []
                },
                onMessage: function(e, n) {
                    e.messagesCallback = n
                },
                postMessage: function(e, n) {
                    try {
                        return e.bc.postMessage(n, !1), Promise.resolve()
                    } catch (e) {
                        return Promise.reject(e)
                    }
                },
                canBeUsed: function() {
                    if (c && "undefined" == typeof window || "function" != typeof BroadcastChannel) return !1;
                    if (BroadcastChannel._pubkey) throw Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
                    return !0
                },
                type: "native",
                averageResponseTime: function() {
                    return 150
                },
                microSeconds: u
            }, {
                create: function(e, n) {
                    var t;
                    return n = f(n), ((t = h().open("pubkey.broadcast-channel-0-" + e, 1)).onupgradeneeded = function(e) {
                        e.target.result.createObjectStore(m, {
                            keyPath: "id",
                            autoIncrement: !0
                        })
                    }, new Promise(function(e, n) {
                        t.onerror = function(e) {
                            return n(e)
                        }, t.onsuccess = function() {
                            e(t.result)
                        }
                    })).then(function(t) {
                        var i = {
                            closed: !1,
                            lastCursorId: 0,
                            channelName: e,
                            options: n,
                            uuid: r(),
                            eMIs: new l(2 * n.idb.ttl),
                            writeBlockPromise: Promise.resolve(),
                            messagesCallback: null,
                            readQueuePromises: [],
                            db: t
                        };
                        return t.onclose = function() {
                                i.closed = !0, n.idb.onclose && n.idb.onclose()
                            },
                            function e(n) {
                                n.closed || p(n).then(function() {
                                    return o(n.options.idb.fallbackInterval)
                                }).then(function() {
                                    return e(n)
                                })
                            }(i), i
                    })
                },
                close: function(e) {
                    e.closed = !0, e.db.close()
                },
                onMessage: function(e, n, t) {
                    e.messagesCallbackTime = t, e.messagesCallback = n, p(e)
                },
                postMessage: function(e, n) {
                    return e.writeBlockPromise = e.writeBlockPromise.then(function() {
                        var t, o, r, i;
                        return t = e.db, o = e.uuid, r = {
                            uuid: o,
                            time: new Date().getTime(),
                            data: n
                        }, i = t.transaction([m], "readwrite"), new Promise(function(e, n) {
                            i.oncomplete = function() {
                                return e()
                            }, i.onerror = function(e) {
                                return n(e)
                            }, i.objectStore(m).add(r)
                        })
                    }).then(function() {
                        var n, t, o, r, i;
                        0 === Math.floor(11 * Math.random() + 0) && (n = e.db, (t = e.options.idb.ttl, o = new Date().getTime() - t, r = n.transaction(m).objectStore(m), i = [], new Promise(function(e) {
                            r.openCursor().onsuccess = function(n) {
                                var t = n.target.result;
                                if (t) {
                                    var r = t.value;
                                    if (!(r.time < o)) return void e(i);
                                    i.push(r), t.continue()
                                } else e(i)
                            }
                        })).then(function(e) {
                            return Promise.all(e.map(function(e) {
                                var t, o;
                                return t = e.id, o = n.transaction([m], "readwrite").objectStore(m).delete(t), new Promise(function(e) {
                                    o.onsuccess = function() {
                                        return e()
                                    }
                                })
                            }))
                        }))
                    }), e.writeBlockPromise
                },
                canBeUsed: function() {
                    return !c && !!h()
                },
                type: "idb",
                averageResponseTime: function(e) {
                    return 2 * e.idb.fallbackInterval
                },
                microSeconds: u
            }, {
                create: function(e, n) {
                    if (n = f(n), !v()) throw Error("BroadcastChannel: localstorage cannot be used");
                    var t, o, i, s = r(),
                        a = new l(n.localstorage.removeTimeout),
                        u = {
                            channelName: e,
                            uuid: s,
                            eMIs: a
                        };
                    return t = function(e) {
                        !u.messagesCallback || e.uuid === s || !e.token || a.has(e.token) || e.data.time && e.data.time < u.messagesCallbackTime || (a.add(e.token), u.messagesCallback(e.data))
                    }, o = g(e), i = function(e) {
                        e.key === o && t(JSON.parse(e.newValue))
                    }, window.addEventListener("storage", i), u.listener = i, u
                },
                close: function(e) {
                    var n;
                    n = e.listener, window.removeEventListener("storage", n)
                },
                onMessage: function(e, n, t) {
                    e.messagesCallbackTime = t, e.messagesCallback = n
                },
                postMessage: function(e, n) {
                    return new Promise(function(t) {
                        o().then(function() {
                            var o = g(e.channelName),
                                i = JSON.stringify({
                                    token: r(),
                                    time: new Date().getTime(),
                                    data: n,
                                    uuid: e.uuid
                                });
                            b().setItem(o, i);
                            var s = document.createEvent("Event");
                            s.initEvent("storage", !0, !0), s.key = o, s.newValue = i, window.dispatchEvent(s), t()
                        })
                    })
                },
                canBeUsed: v,
                type: "localstorage",
                averageResponseTime: function() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.includes("safari") && !e.includes("chrome") ? 240 : 120
                },
                microSeconds: u
            }];
            if (c) {
                var _ = t(40643);
                "function" == typeof _.canBeUsed && k.push(_)
            }
            var C = function(e, n) {
                this.name = e, i && (n = i), this.options = f(n), this.method = function(e) {
                        var n = [].concat(e.methods, k).filter(Boolean);
                        if (e.type) {
                            if ("simulate" === e.type) return y;
                            var t = n.find(function(n) {
                                return n.type === e.type
                            });
                            if (t) return t;
                            throw Error("method-type " + e.type + " not found")
                        }
                        e.webWorkerSupport || c || (n = n.filter(function(e) {
                            return "idb" !== e.type
                        }));
                        var o = n.find(function(e) {
                            return e.canBeUsed()
                        });
                        if (o) return o;
                        throw Error("No useable methode found:" + JSON.stringify(k.map(function(e) {
                            return e.type
                        })))
                    }(this.options), this._iL = !1, this._onML = null, this._addEL = {
                        message: [],
                        internal: []
                    }, this._uMP = new Set, this._befC = [], this._prepP = null,
                    function(e) {
                        var n = e.method.create(e.name, e.options);
                        (n && "function" == typeof n.then ? 0 : 1) ? e._state = n: (e._prepP = n, n.then(function(n) {
                            e._state = n
                        }))
                    }(this)
            };

            function P(e, n, t) {
                var o = {
                    time: e.method.microSeconds(),
                    type: n,
                    data: t
                };
                return (e._prepP ? e._prepP : Promise.resolve()).then(function() {
                    var n = e.method.postMessage(e._state, o);
                    return e._uMP.add(n), n.catch().then(function() {
                        return e._uMP.delete(n)
                    }), n
                })
            }

            function M(e) {
                return !!(e._addEL.message.length > 0) || !!(e._addEL.internal.length > 0)
            }

            function S(e, n, t) {
                e._addEL[n].push(t),
                    function(e) {
                        if (!e._iL && M(e)) {
                            var n = function(n) {
                                    e._addEL[n.type].forEach(function(e) {
                                        n.time >= e.time && e.fn(n.data)
                                    })
                                },
                                t = e.method.microSeconds();
                            e._prepP ? e._prepP.then(function() {
                                e._iL = !0, e.method.onMessage(e._state, n, t)
                            }) : (e._iL = !0, e.method.onMessage(e._state, n, t))
                        }
                    }(e)
            }

            function E(e, n, t) {
                e._addEL[n] = e._addEL[n].filter(function(e) {
                        return e !== t
                    }),
                    function(e) {
                        if (e._iL && !M(e)) {
                            e._iL = !1;
                            var n = e.method.microSeconds();
                            e.method.onMessage(e._state, null, n)
                        }
                    }(e)
            }
            C._pubkey = !0, C.prototype = {
                postMessage: function(e) {
                    if (this.closed) throw Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
                    return P(this, "message", e)
                },
                postInternal: function(e) {
                    return P(this, "internal", e)
                },
                set onmessage(fn) {
                    var I = {
                        time: this.method.microSeconds(),
                        fn: fn
                    };
                    E(this, "message", this._onML), fn && "function" == typeof fn ? (this._onML = I, S(this, "message", I)) : this._onML = null
                },
                addEventListener: function(e, n) {
                    S(this, e, {
                        time: this.method.microSeconds(),
                        fn: n
                    })
                },
                removeEventListener: function(e, n) {
                    var t = this._addEL[e].find(function(e) {
                        return e.fn === n
                    });
                    E(this, e, t)
                },
                close: function() {
                    var e = this;
                    if (!this.closed) {
                        this.closed = !0;
                        var n = this._prepP ? this._prepP : Promise.resolve();
                        return this._onML = null, this._addEL.message = [], n.then(function() {
                            return Promise.all(Array.from(e._uMP))
                        }).then(function() {
                            return Promise.all(e._befC.map(function(e) {
                                return e()
                            }))
                        }).then(function() {
                            return e.method.close(e._state)
                        })
                    }
                },
                get type() {
                    return this.method.type
                }
            }
        }
    }
]);
//# sourceMappingURL=2028.6a01a431.js.map