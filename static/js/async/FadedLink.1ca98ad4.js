try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6cfc059a-d225-448c-a5a9-27c6e7fde4a5", e._sentryDebugIdIdentifier = "sentry-dbid-6cfc059a-d225-448c-a5a9-27c6e7fde4a5")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["984"], {
        29614: function(e, t, a) {
            a.r(t), a.d(t, {
                FadedLink: () => n,
                default: () => i
            });
            var d = a(45831);
            a(58191);
            let n = e => {
                    let {
                        color: t = "#8B00A1",
                        width: a = 64,
                        height: n = 60,
                        className: i
                    } = e;
                    return (0, d.FD)("svg", {
                        width: a,
                        height: n,
                        color: t,
                        className: i,
                        viewBox: "0 0 48 48",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-sentry-element": "svg",
                        "data-sentry-component": "FadedLink",
                        "data-sentry-source-file": "FadedLink.tsx",
                        children: [(0, d.FD)("g", {
                            clipPath: "url(#clip0_34144_196359)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "FadedLink.tsx",
                            children: [(0, d.Y)("g", {
                                opacity: "0.5",
                                filter: "url(#filter0_f_34144_196359)",
                                "data-sentry-element": "g",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("path", {
                                    d: "M32.6906 24.7063L29.8141 13.0805C28.7707 8.86348 26.1592 6.97264 22.7256 7.93978L11.0961 11.2154C7.60613 12.1984 6.25475 15.2054 7.29815 19.4224L10.1747 31.0482C11.2349 35.3332 13.7842 37.1673 17.2741 36.1843L28.9036 32.9087C32.3373 31.9416 33.7508 28.9912 32.6906 24.7063Z",
                                    fill: "#EBECF0",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                })
                            }), (0, d.Y)("foreignObject", {
                                x: "-7.13812",
                                y: "-8.94812",
                                width: "64.4545",
                                height: "65.4589",
                                "data-sentry-element": "foreignObject",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("div", {
                                    style: {
                                        backdropFilter: "blur(6.5px)",
                                        clipPath: "url(#bgblur_1_34144_196359_clip_path)",
                                        height: "100%",
                                        width: "100%"
                                    }
                                })
                            }), (0, d.Y)("path", {
                                "data-figma-bg-blur-radius": "13",
                                d: "M28.6929 4.56122L12.9738 9.05511C7.24553 10.6928 4.8222 14.8945 6.27335 20.6728L10.2517 36.5143C11.7029 42.2926 15.7706 44.6386 21.4989 43.001L37.218 38.5071C42.9463 36.8695 45.3547 32.672 43.9035 26.8936L39.9252 11.0522C38.474 5.27389 34.4212 2.92357 28.6929 4.56122Z",
                                fill: "#DFE1E6",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedLink.tsx"
                            }), (0, d.Y)("foreignObject", {
                                x: "-3",
                                y: "-5",
                                width: "65",
                                height: "65",
                                "data-sentry-element": "foreignObject",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("div", {
                                    style: {
                                        backdropFilter: "blur(7.5px)",
                                        clipPath: "url(#bgblur_2_34144_196359_clip_path)",
                                        height: "100%",
                                        width: "100%"
                                    }
                                })
                            }), (0, d.Y)("path", {
                                "data-figma-bg-blur-radius": "15",
                                d: "M37.6822 10H21.3333C15.3756 10 12 13.3756 12 19.3333V35.6667C12 41.6244 15.3756 45 21.3333 45H37.6822C43.64 45 47 41.6244 47 35.6667V19.3333C47 13.3756 43.64 10 37.6822 10Z",
                                fill: "#C1C7D0",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedLink.tsx"
                            }), (0, d.Y)("path", {
                                d: "M25.3604 25.4672C27.0273 23.6771 29.7326 23.6771 31.3995 25.4672C31.7604 25.8551 31.7606 26.4817 31.3995 26.8695C31.0346 27.2614 30.4393 27.2611 30.0743 26.8695C29.1375 25.8634 27.6224 25.8634 26.6856 26.8695L21.9708 31.932C21.0302 32.9421 21.03 34.5828 21.9708 35.5931C22.9075 36.5997 24.4228 36.6 25.3604 35.5931L27.7169 33.0619C28.0819 32.6699 28.677 32.6699 29.0421 33.0619C29.4031 33.4498 29.4031 34.0754 29.0421 34.4633L26.6856 36.9945C25.0179 38.7855 22.3122 38.7856 20.6456 36.9945C18.9826 35.2085 18.9827 32.3167 20.6456 30.5306L25.3604 25.4672ZM32.3116 17.9994C33.9783 16.2098 36.6839 16.2098 38.3506 17.9994C40.0137 19.7854 40.0137 22.6782 38.3506 24.4642L33.1651 30.0336C31.4983 31.8234 28.7938 31.8234 27.127 30.0336C26.7658 29.6456 26.7658 29.0192 27.127 28.6312C27.492 28.2396 28.0863 28.2396 28.4512 28.6312C29.388 29.6373 30.9041 29.6373 31.8409 28.6312L37.0264 23.0619C37.9666 22.0518 37.9668 20.4117 37.0264 19.4017C36.0897 18.3957 34.5736 18.396 33.6368 19.4017L30.8087 22.4388C30.4436 22.8309 29.8485 22.8309 29.4835 22.4388C29.1223 22.0509 29.1222 21.4244 29.4835 21.0365L32.3116 17.9994Z",
                                fill: "#FCFDFD",
                                stroke: "#FAFBFC",
                                strokeWidth: "0.2",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedLink.tsx"
                            })]
                        }), (0, d.FD)("defs", {
                            "data-sentry-element": "defs",
                            "data-sentry-source-file": "FadedLink.tsx",
                            children: [(0, d.FD)("filter", {
                                id: "filter0_f_34144_196359",
                                x: "-6.04547",
                                y: "-5.30835",
                                width: "52.0815",
                                height: "54.752",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                "data-sentry-element": "filter",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: [(0, d.Y)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                    "data-sentry-element": "feFlood",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                }), (0, d.Y)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape",
                                    "data-sentry-element": "feBlend",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                }), (0, d.Y)("feGaussianBlur", {
                                    stdDeviation: "6.5",
                                    result: "effect1_foregroundBlur_34144_196359",
                                    "data-sentry-element": "feGaussianBlur",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                })]
                            }), (0, d.Y)("clipPath", {
                                id: "bgblur_1_34144_196359_clip_path",
                                transform: "translate(7.13812 8.94812)",
                                "data-sentry-element": "clipPath",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("path", {
                                    d: "M28.6929 4.56122L12.9738 9.05511C7.24553 10.6928 4.8222 14.8945 6.27335 20.6728L10.2517 36.5143C11.7029 42.2926 15.7706 44.6386 21.4989 43.001L37.218 38.5071C42.9463 36.8695 45.3547 32.672 43.9035 26.8936L39.9252 11.0522C38.474 5.27389 34.4212 2.92357 28.6929 4.56122Z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                })
                            }), (0, d.Y)("clipPath", {
                                id: "bgblur_2_34144_196359_clip_path",
                                transform: "translate(3 5)",
                                "data-sentry-element": "clipPath",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("path", {
                                    d: "M37.6822 10H21.3333C15.3756 10 12 13.3756 12 19.3333V35.6667C12 41.6244 15.3756 45 21.3333 45H37.6822C43.64 45 47 41.6244 47 35.6667V19.3333C47 13.3756 43.64 10 37.6822 10Z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                })
                            }), (0, d.Y)("clipPath", {
                                id: "clip0_34144_196359",
                                "data-sentry-element": "clipPath",
                                "data-sentry-source-file": "FadedLink.tsx",
                                children: (0, d.Y)("rect", {
                                    width: "48",
                                    height: "48",
                                    fill: "white",
                                    "data-sentry-element": "rect",
                                    "data-sentry-source-file": "FadedLink.tsx"
                                })
                            })]
                        })]
                    })
                },
                i = n
        }
    }
]);
//# sourceMappingURL=FadedLink.1ca98ad4.js.map