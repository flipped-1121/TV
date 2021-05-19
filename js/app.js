(function (t) {
    function e(e) {
        for (var n, o, r = e[0], c = e[1], l = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), i[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        d && d(e);
        while (p.length) p.shift()();
        return s.push.apply(s, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
                var c = a[r];
                0 !== i[c] && (n = !1)
            }
            n && (s.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }

    var n = {}, i = {app: 0}, s = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }

    o.m = t, o.c = n, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) o.d(a, n, function (e) {
            return t[e]
        }.bind(null, n));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var d = c;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    }, "0d96": function (t, e, a) {
    }, 2395: function (t, e, a) {
    }, "289b": function (t, e) {
        window.storage = function (t, e) {
            if (void 0 !== e) {
                var a;
                try {
                    a = JSON.stringify(e)
                } catch (i) {
                    a = e
                }
                return window.localStorage.setItem(t, a), !0
            }
            var n;
            try {
                n = JSON.parse(window.localStorage.getItem(t))
            } catch (s) {
                n = window.localStorage.getItem(t)
            }
            return n
        }
    }, "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e623"), a("e379"), a("5dc8"), a("37e1");
        var n = a("2b0e"), i = function () {
                var t = this, e = this, a = e.$createElement, n = e._self._c || a;
                return n("div", {staticClass: "container"}, [n("Television", {
                    on: {
                        pay: function () {
                            t.$refs.paycode.open()
                        }
                    }
                }), n("Footer"), n("Modal", {
                    ref: "paycode",
                    staticClass: "paycode",
                    attrs: {"btn-text": "喝不了的😶😶😶"}
                },)], 1)
            }, s = [], o = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "all"}, [a("div", {
                    staticClass: "old-tv",
                    class: {off: !t.power, load: t.loaded, "off-animation": t.offAnimation}
                }, [a("div", {
                    staticClass: "paycode-btn",
                    on: {click: t.showPaycode}
                }, [a("img", {attrs: {src: "https://cdn.jsdelivr.net/gh/XmJwit/tv_static@main/images/milktea.svg"}})]), a("div", {staticClass: "antenna"}), a("main", [a("div", {staticClass: "error-noise"}, [a("div", {staticClass: "error-effect"}, [a("video", {
                    ref: "video",
                    attrs: {playsinline: ""}
                }), a("div", {staticClass: "old-tv-content"}, [t.power ? a("div", {staticClass: "text-layout"}, [t.rate > 1 ? a("span", {staticClass: "corner-text rate"}, [t._v(t._s(t.rate) + "x")]) : t._e(), t.loaded ? t._e() : a("p", [t._v(" " + t._s(t.waitingText) + " ")])]) : t._e()])])])]), a("div", {staticClass: "speaker"}), a("div", {staticClass: "volume"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.volume,
                        expression: "volume",
                        modifiers: {number: !0}
                    }], attrs: {type: "range", min: "0", max: "100"}, domProps: {value: t.volume}, on: {
                        __r: function (e) {
                            t.volume = t._n(e.target.value)
                        }, blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), a("nav", {staticClass: "channel"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.rate,
                        expression: "rate",
                        modifiers: {number: !0}
                    }],
                    attrs: {type: "range", min: "1", max: "2", step: "0.5"},
                    domProps: {value: t.rate},
                    on: {
                        __r: function (e) {
                            t.rate = t._n(e.target.value)
                        }, blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), a("nav", {
                    staticClass: "power",
                    on: {click: t.handlePowerClick, touchend: t.handlePowerOn}
                }, [a("button")]), a("nav"), a("footer")]), t.playInOrder ? a("div", {staticClass: "controller"}, [a("div", {
                    staticClass: "prev",
                    on: {
                        click: function (e) {
                            return t.handlePlaylist(0)
                        }
                    }
                }, [a("i", {staticClass: "iconfont icon-Previoustrack"})]), a("span", {staticClass: "play-index"}, [t._v(t._s(t.nowPlaying) + "/" + t._s(t.videoSeries.count))]), a("div", {
                    staticClass: "next",
                    on: {
                        click: function (e) {
                            return t.handlePlaylist(1)
                        }
                    }
                }, [a("i", {staticClass: "iconfont icon-Previoustrack"})])]) : t._e(), t._m(0)])
            }, r = [function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "table-tv"}}, [a("div", {staticClass: "scene"}, [a("div", {staticClass: "shape cuboid-1 cub-1"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 1px rgba(255,255,255,0.2)"}
                }), a("div", {staticClass: "face bk"}), a("div", {staticClass: "face rt"}), a("div", {staticClass: "face lt"}), a("div", {staticClass: "face bm"}), a("div", {
                    staticClass: "face tp",
                    staticStyle: {"box-shadow": "inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)"}
                })]), a("div", {staticClass: "shape cuboid-3 cub-3"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)"}
                }), a("div", {staticClass: "face bk"}), a("div", {staticClass: "face rt"}), a("div", {
                    staticClass: "face lt",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.8)"}
                }), a("div", {staticClass: "face bm"}), a("div", {staticClass: "face tp"})]), a("div", {staticClass: "shape cuboid-4 cub-4"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)"}
                }), a("div", {staticClass: "face bk"}), a("div", {staticClass: "face rt"}), a("div", {
                    staticClass: "face lt",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.3)"}
                }), a("div", {staticClass: "face bm"}), a("div", {staticClass: "face tp"})]), a("div", {staticClass: "shape cuboid-5 cub-5"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)"}
                }), a("div", {staticClass: "face bk"}), a("div", {
                    staticClass: "face rt",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.8)"}
                }), a("div", {staticClass: "face lt"}), a("div", {staticClass: "face bm"}), a("div", {staticClass: "face tp"})]), a("div", {staticClass: "shape cuboid-6 cub-6"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)"}
                }), a("div", {staticClass: "face bk"}), a("div", {
                    staticClass: "face rt",
                    staticStyle: {"box-shadow": "inset 0 300px rgba(0,0,0,0.3)"}
                }), a("div", {staticClass: "face lt"}), a("div", {staticClass: "face bm"}), a("div", {staticClass: "face tp"})]), a("div", {staticClass: "shape cuboid-2 cub-2"}, [a("div", {
                    staticClass: "face ft",
                    staticStyle: {"box-shadow": "inset 0 1px rgba(255,255,255,0.2)"}
                }), a("div", {staticClass: "face bk"}), a("div", {staticClass: "face rt"}), a("div", {staticClass: "face lt"}), a("div", {staticClass: "face bm"}), a("div", {
                    staticClass: "face tp",
                    staticStyle: {"box-shadow": "inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)"}
                })])])])
            }], c = a("1da1"),
            l = (a("96cf"), a("b0c0"), a("99af"), "https://cdn.jsdelivr.net/gh/XmJwit/tv_static@main/audios/switch.mp3"),
            d = "https://cdn.jsdelivr.net/gh/XmJwit/tv_static@main/audios/noise.mp3",

            u = [{name: "longzhu1", count: 10, repo: "superdangdang/tv", playInOrder: !0}, {
                name: "shierdameinv",
                count: 12,
                repo: "superdangdang/tv",
                playInOrder: !0,
                random: !0
            }, {name: "duolaameng", count: 1, repo: "superdangdang/tv2"}, {
                name: "heimaojingzhang",
                count: 1,
                repo: "superdangdang/tv2"
            }, {name: "labixiaoxin", count: 2, repo: "superdangdang/tv2", playInOrder: !0}, {
                name: "outman",
                count: 1,
                repo: "superdangdang/tv2"
            }, {name: "tiebiatongmu", count: 1, repo: "superdangdang/tv2"}],
            p = ["信号接收中...", "⚠️电压不稳定⚠️", "正在拍打电视机", "电视机正在冒烟", "再等等", "FBI WARNING", "CDN信号接入中..."],

            v = {switch: new Audio(l), noise: new Audio(d)};

        function f(t) {
            return Math.floor(Math.random() * t)
        }

        function h() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return t[f(t.length)]
        }

        v.noise.loop = !0;
        var m = {
                data: function () {
                    return {
                        videoControl: null,
                        volume: 100,
                        rate: 1,
                        power: !1,
                        loaded: !1,
                        paycode: !1,
                        waitingText: p[0],
                        waitingTextTimer: null,
                        cdn: "",
                        videoSeries: {},
                        offAnimation: !1
                    }
                }, computed: {
                    playInOrder: function () {
                        return !!this.videoSeries.playInOrder
                    }
                }, watch: {
                    volume: function (t, e) {
                        var a = t / 100;
                        this.videoControl.volume(a), v.noise.volume = a
                    }, rate: function (t, e) {
                        this.videoControl.playbackRate(t)
                    }
                }, created: function () {
                    this.setWaitingText()
                }, mounted: function () {
                    var t = this;
                    this.videoControl = videojs(this.$refs.video, {
                        autoplay: !0,
                        controls: !1,
                        loop: !0,
                        width: 0,
                        height: 0,
                        children: []
                    }), this.videoControl.on("canplay", (function () {
                        t.handleCanplay()
                    })), this.videoControl.on("error", (function () {
                        4 === t.videoControl.error().code && t.handleMediaError()
                    }))
                }, destroyed: function () {
                    clearTimeout(this.waitingTextTimer)
                }, methods: {
                    handlePowerClick: function () {
                        "ontouchstart" in document || this.handlePowerOn()
                    }, handlePowerOn: function () {
                        var t = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function e() {
                            var a, n, i, s, o, r, c, l;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        v.switch.pause(), v.switch.currentTime = 0, v.switch.play(), t.power = !t.power, t.power ? (t.offAnimation = !1, t.toWaitState(), t.videoSeries = h(u), a = t.videoSeries, n = a.name, i = a.repo, s = a.count, o = a.playInOrder, r = a.random, t.nowPlaying = o && !r ? 1 : f(s) + 1, c = "".concat(n, "/").concat(t.nowPlaying),

                                            l = "https://cdn.jsdelivr.net/gh/".concat(i, "@master/videos/").concat(c, "/playlist.m3u8"), t.videoControl.src() === l ? (t.handleCanplay(), t.videoControl.play().catch((function (e) {
                                            console.warn(e), 9 === e.code && t.toErrorState("信号丢失 请插拔电源重试")
                                        }))) : t.videoControl.src({
                                            type: "application/x-mpegURL",
                                            src: l
                                        })) : t.toStopState();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }, handleCanplay: function () {
                        this.toPlayState()
                    }, handleMediaError: function () {
                        this.toErrorState("信号丢失 请插拔电源重试")
                    }, toPlayState: function () {
                        v.noise.pause(), this.loaded = !0, clearTimeout(this.waitingTextTimer)
                    }, toWaitState: function () {
                        this.waitingText = p[0], this.setWaitingText(), v.noise.play(), this.loaded = !1
                    }, toStopState: function () {
                        this.offAnimation = !0, this.videoSeries = {}, clearTimeout(this.waitingTextTimer), this.rate = 1, v.noise.pause(), this.videoControl.pause(), this.loaded = !1
                    }, toErrorState: function (t) {
                        clearTimeout(this.waitingTextTimer), v.noise.play(), this.loaded = !1, this.waitingText = t
                    }, showPaycode: function () {
                        this.$emit("pay")
                    }, setWaitingText: function () {
                        var t = this;
                        this.waitingTextTimer = setTimeout((function () {
                            t.waitingText = h(p), t.setWaitingText()
                        }), 1e3 * (f(5) + 5))
                    }, handlePlaylist: function (t) {
                        if (this.loaded) if (t) {
                            if (this.nowPlaying >= this.videoSeries.count) return;
                            this.playSeries(this.nowPlaying + 1)
                        } else {
                            if (this.nowPlaying <= 1) return;
                            this.playSeries(this.nowPlaying - 1)
                        }
                    }, playSeries: function (t) {
                        var e = this;
                        this.toWaitState();
                        var a = this.videoSeries, n = a.name, i = a.repo;
                        a.count, a.playInOrder;
                        this.nowPlaying = t;
                        var s = "".concat(n, "/").concat(this.nowPlaying),
                            o = "https://cdn.jsdelivr.net/gh/".concat(i, "@master/videos/").concat(s, "/playlist.m3u8");
                        this.videoControl.src() === o ? (this.handleCanplay(), this.videoControl.play().catch((function (t) {
                            console.warn(t), 9 === t.code && e.toErrorState("信号丢失 请插拔电源重试")
                        }))) : this.videoControl.src({type: "application/x-mpegURL", src: o})
                    }
                }
            }, b = m, g = (a("bac1"), a("2877")), y = Object(g["a"])(b, o, r, !1, null, "0240da96", null), x = y.exports,
            C = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "container-footer"}, [a("p", {staticClass: "copyright"}, [a("span", {staticClass: "no-select"}, [t._v(t._s(t.year) + ",")]), t._v(" "), t._m(0)]), a("Modal", {
                    ref: "contact",
                    staticClass: "contact",
                    attrs: {"btn-text": "再见！"}
                }, [a("img", {
                    staticClass: "contact-code",
                    attrs: {src: "https://cdn.jsdelivr.net/gh/XmJwit/tv_static@main/images/pay.png"}
                }), a("p", [t._v("test备注来意test")]), t._v(" （比如有没有可能来个带宽资源赞助？电视信号快断粮了，宝～） ")])], 1)
            }, w = [function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("span", {staticClass: "links"}, [a("a", {attrs: {href: "http://tv.hzfe.org"}}, [t._v("小电视")])])
            }], P = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("transition", {attrs: {name: "fadein"}}, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.visible,
                        expression: "visible"
                    }], staticClass: "modal"
                }, [t._t("default"), a("div", {
                    staticClass: "close-btn",
                    on: {click: t.close}
                }, [t._v(" " + t._s(t.btnText) + " ")])], 2)])
            }, T = [], X = {
                name: "Modal", props: {btnText: {type: String, default: ""}}, data: function () {
                    return {visible: !1}
                }, methods: {
                    open: function () {
                        this.visible = !0
                    }, close: function () {
                        this.visible = !1
                    }
                }
            }, S = X, R = (a("b1e6"), Object(g["a"])(S, P, T, !1, null, "62c97b66", null)), j = R.exports, O = {
                name: "Footer", components: {Modal: j}, computed: {
                    year: function () {
                        return (new Date).getFullYear()
                    }
                }
            }, k = O, D = (a("7aca"), Object(g["a"])(k, C, w, !1, null, "b272ea0c", null)), N = D.exports, L = {
                name: "App", components: {Television: x, Footer: N, Modal: j}, data: function () {
                    return {paycode: !1}
                }
            }, I = L, z = (a("7c55"), Object(g["a"])(I, i, s, !1, null, null, null)), G = z.exports;
        a("289b"), a("cd22");
        n["a"].config.productionTip = !1, new n["a"]({
            render: function (t) {
                return t(G)
            }
        }).$mount("#app")
    }, "7aca": function (t, e, a) {
        "use strict";
        a("c694")
    }, "7c55": function (t, e, a) {
        "use strict";
        a("2395")
    }, b1e6: function (t, e, a) {
        "use strict";
        a("0d96")
    }, b7c5: function (t, e, a) {
    }, bac1: function (t, e, a) {
        "use strict";
        a("b7c5")
    }, c694: function (t, e, a) {
    }, cd22: function (t, e, a) {
    }
});
