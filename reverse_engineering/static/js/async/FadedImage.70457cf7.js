try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a68ff965-b3a3-4fb8-90a4-9ea771d41f5f", e._sentryDebugIdIdentifier = "sentry-dbid-a68ff965-b3a3-4fb8-90a4-9ea771d41f5f")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6291"], {
        52689: function(e, t, a) {
            a.r(t), a.d(t, {
                FadedImage: () => d,
                default: () => r
            });
            var s = a(45831);
            a(58191);
            let d = e => {
                    let {
                        color: t = "#8B00A1",
                        width: a = 69,
                        height: d = 66,
                        className: r
                    } = e;
                    return (0, s.FD)("svg", {
                        className: r,
                        width: a,
                        height: d,
                        viewBox: "0 0 69 67",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-sentry-element": "svg",
                        "data-sentry-component": "FadedImage",
                        "data-sentry-source-file": "FadedImage.tsx",
                        children: [(0, s.Y)("path", {
                            d: "M19.4131 17.1541L34.177 13.2365C39.5572 11.8089 43.4545 14.1378 44.953 19.6761L49.0611 34.8592C50.5596 40.3974 48.3603 44.3441 42.9801 45.7717L28.2163 49.6894C22.8361 51.117 18.9528 48.7843 17.4544 43.2461L13.3462 28.063C11.8477 22.5247 14.033 18.5818 19.4131 17.1541Z",
                            fill: "url(#paint0_linear)",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "FadedImage.tsx"
                        }), (0, s.Y)("g", {
                            filter: "url(#filter0_f)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "FadedImage.tsx",
                            children: (0, s.Y)("path", {
                                d: "M23.5649 22.7617L33.592 20.101C37.2461 19.1314 39.8475 20.5448 40.7848 24.0091L43.3545 33.5065C44.2919 36.9707 42.7526 39.4829 39.0986 40.4525L29.0714 43.1132C25.4174 44.0828 22.8255 42.6669 21.8882 39.2026L19.3185 29.7052C18.3811 26.241 19.9108 23.7313 23.5649 22.7617Z",
                                fill: "#AEB5C2",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedImage.tsx"
                            })
                        }), (0, s.FD)("g", {
                            filter: "url(#filter1_b)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "FadedImage.tsx",
                            children: [(0, s.FD)("mask", {
                                id: "path-3-outside-1",
                                maskUnits: "userSpaceOnUse",
                                x: "21.1992",
                                y: "19.5352",
                                width: "37",
                                height: "37",
                                fill: "black",
                                "data-sentry-element": "mask",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("rect", {
                                    fill: "white",
                                    x: "21.1992",
                                    y: "19.5352",
                                    width: "37",
                                    height: "37",
                                    "data-sentry-element": "rect",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("path", {
                                    d: "M47.1516 20.5352H32.0653C26.1665 20.5352 22.1992 24.6363 22.1992 30.7364V44.8149C22.1992 50.8977 26.1665 54.9989 32.0653 54.9989H47.1516C53.0504 54.9989 57.0003 50.8977 57.0003 44.8149V30.7364C57.0003 24.6363 53.0504 20.5352 47.1516 20.5352Z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.Y)("path", {
                                d: "M47.1516 20.5352H32.0653C26.1665 20.5352 22.1992 24.6363 22.1992 30.7364V44.8149C22.1992 50.8977 26.1665 54.9989 32.0653 54.9989H47.1516C53.0504 54.9989 57.0003 50.8977 57.0003 44.8149V30.7364C57.0003 24.6363 53.0504 20.5352 47.1516 20.5352Z",
                                fill: "#B8BEC9",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedImage.tsx"
                            }), (0, s.Y)("path", {
                                d: "M47.1516 21.5352C47.7039 21.5352 48.1516 21.0874 48.1516 20.5352C48.1516 19.9829 47.7039 19.5352 47.1516 19.5352V21.5352ZM47.1516 19.5352C46.5993 19.5352 46.1516 19.9829 46.1516 20.5352C46.1516 21.0874 46.5993 21.5352 47.1516 21.5352V19.5352ZM47.1516 19.5352H32.0653V21.5352H47.1516V19.5352ZM32.0653 19.5352C28.8762 19.5352 26.1397 20.649 24.2014 22.653C22.2659 24.6542 21.1992 27.4668 21.1992 30.7364H23.1992C23.1992 27.906 24.1162 25.618 25.639 24.0435C27.1591 22.4719 29.3556 21.5352 32.0653 21.5352V19.5352ZM21.1992 30.7364V44.8149H23.1992V30.7364H21.1992ZM21.1992 44.8149C21.1992 48.0766 22.2664 50.8849 24.2019 52.8836C26.14 54.8851 28.8763 55.9989 32.0653 55.9989V53.9989C29.3556 53.9989 27.1588 53.0621 25.6386 51.4923C24.1157 49.9197 23.1992 47.636 23.1992 44.8149H21.1992ZM32.0653 55.9989H47.1516V53.9989H32.0653V55.9989ZM47.1516 55.9989C50.3408 55.9989 53.0732 54.8849 55.0073 52.8827C56.9383 50.8836 58.0003 48.0754 58.0003 44.8149H56.0003C56.0003 47.6372 55.0874 49.921 53.5688 51.4932C52.0531 53.0623 49.8612 53.9989 47.1516 53.9989V55.9989ZM58.0003 44.8149V30.7364H56.0003V44.8149H58.0003ZM58.0003 30.7364C58.0003 27.468 56.9387 24.6555 55.0077 22.6539C53.0735 20.6492 50.3409 19.5352 47.1516 19.5352V21.5352C49.8611 21.5352 52.0528 22.4717 53.5683 24.0426C55.0869 25.6166 56.0003 27.9047 56.0003 30.7364H58.0003Z",
                                fill: "url(#paint1_linear)",
                                mask: "url(#path-3-outside-1)",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedImage.tsx"
                            })]
                        }), (0, s.FD)("g", {
                            filter: "url(#filter2_bd)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "FadedImage.tsx",
                            children: [(0, s.Y)("mask", {
                                id: "path-5-inside-2",
                                fill: "white",
                                "data-sentry-element": "mask",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: (0, s.Y)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M29.1889 31.7826C29.1889 34.1673 31.1461 36.1081 33.5548 36.1081C35.9618 36.1081 37.9207 34.1673 37.9207 31.7826C37.9207 29.3979 35.9618 27.457 33.5548 27.457C31.1461 27.457 29.1889 29.3979 29.1889 31.7826ZM52.9913 47.6572C53.6168 46.1859 53.9207 44.4003 53.3357 42.9147C53.1407 42.4219 52.849 41.963 52.4397 41.5594C51.3662 40.5042 50.363 39.5185 49.1701 38.79C47.2972 37.633 45.8513 39.2578 45.4613 39.7774C45.1501 40.1927 44.8751 40.6433 44.5963 41.1001C44.5382 41.1953 44.48 41.2908 44.4212 41.3862L44.4073 41.409C43.5778 42.7697 42.6252 44.3322 40.9829 45.2431C38.583 46.559 36.7611 45.3466 35.4504 44.4646C34.9585 44.136 34.4806 43.8253 34.0045 43.6182C32.8309 43.1165 31.775 43.6878 30.2079 45.6591C29.3856 46.6894 28.5704 47.7107 27.7447 48.7285C27.251 49.3374 27.3687 50.2766 28.0346 50.6837C29.0975 51.3319 30.3941 51.6801 31.8593 51.6801H46.5839C47.4149 51.6801 48.2477 51.5676 49.0418 51.3105C50.8304 50.7319 52.2499 49.407 52.9913 47.6572Z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })
                            }), (0, s.Y)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M29.1889 31.7826C29.1889 34.1673 31.1461 36.1081 33.5548 36.1081C35.9618 36.1081 37.9207 34.1673 37.9207 31.7826C37.9207 29.3979 35.9618 27.457 33.5548 27.457C31.1461 27.457 29.1889 29.3979 29.1889 31.7826ZM52.9913 47.6572C53.6168 46.1859 53.9207 44.4003 53.3357 42.9147C53.1407 42.4219 52.849 41.963 52.4397 41.5594C51.3662 40.5042 50.363 39.5185 49.1701 38.79C47.2972 37.633 45.8513 39.2578 45.4613 39.7774C45.1501 40.1927 44.8751 40.6433 44.5963 41.1001C44.5382 41.1953 44.48 41.2908 44.4212 41.3862L44.4073 41.409C43.5778 42.7697 42.6252 44.3322 40.9829 45.2431C38.583 46.559 36.7611 45.3466 35.4504 44.4646C34.9585 44.136 34.4806 43.8253 34.0045 43.6182C32.8309 43.1165 31.775 43.6878 30.2079 45.6591C29.3856 46.6894 28.5704 47.7107 27.7447 48.7285C27.251 49.3374 27.3687 50.2766 28.0346 50.6837C29.0975 51.3319 30.3941 51.6801 31.8593 51.6801H46.5839C47.4149 51.6801 48.2477 51.5676 49.0418 51.3105C50.8304 50.7319 52.2499 49.407 52.9913 47.6572Z",
                                fill: "url(#paint2_linear)",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedImage.tsx"
                            }), (0, s.Y)("path", {
                                d: "M53.3357 42.9147L53.5218 42.8414L53.5217 42.8411L53.3357 42.9147ZM52.9913 47.6572L52.8073 47.5789L52.8072 47.5792L52.9913 47.6572ZM52.4397 41.5594L52.5801 41.417L52.5799 41.4168L52.4397 41.5594ZM49.1701 38.79L49.065 38.9602L49.0658 38.9607L49.1701 38.79ZM45.4613 39.7774L45.3013 39.6574L45.3012 39.6575L45.4613 39.7774ZM44.5963 41.1001L44.767 41.2043V41.2043L44.5963 41.1001ZM44.4212 41.3862L44.2509 41.2814L44.2504 41.2821L44.4212 41.3862ZM44.4073 41.409L44.2365 41.3049L44.2365 41.3049L44.4073 41.409ZM40.9829 45.2431L41.0791 45.4184L41.0799 45.418L40.9829 45.2431ZM35.4504 44.4646L35.5621 44.2986L35.5615 44.2983L35.4504 44.4646ZM34.0045 43.6182L34.0843 43.4348L34.0831 43.4343L34.0045 43.6182ZM30.2079 45.6591L30.3642 45.7839L30.3644 45.7836L30.2079 45.6591ZM27.7447 48.7285L27.5894 48.6025L27.5893 48.6026L27.7447 48.7285ZM28.0346 50.6837L27.9302 50.8544L27.9304 50.8545L28.0346 50.6837ZM49.0418 51.3105L48.9803 51.1202L48.9802 51.1202L49.0418 51.3105ZM33.5548 35.9081C31.2549 35.9081 29.3889 34.0551 29.3889 31.7826H28.9889C28.9889 34.2794 31.0374 36.3081 33.5548 36.3081V35.9081ZM37.7207 31.7826C37.7207 34.0551 35.8531 35.9081 33.5548 35.9081V36.3081C36.0705 36.3081 38.1207 34.2795 38.1207 31.7826H37.7207ZM33.5548 27.657C35.8531 27.657 37.7207 29.5101 37.7207 31.7826H38.1207C38.1207 29.2857 36.0705 27.257 33.5548 27.257V27.657ZM29.3889 31.7826C29.3889 29.51 31.2549 27.657 33.5548 27.657V27.257C31.0374 27.257 28.9889 29.2857 28.9889 31.7826H29.3889ZM53.1496 42.988C53.7073 44.4042 53.4229 46.1309 52.8073 47.5789L53.1754 47.7354C53.8107 46.2409 54.1341 44.3963 53.5218 42.8414L53.1496 42.988ZM52.2993 41.7019C52.6878 42.0849 52.9644 42.52 53.1497 42.9883L53.5217 42.8411C53.3169 42.3237 53.0102 41.841 52.5801 41.417L52.2993 41.7019ZM49.0658 38.9607C50.2358 39.6752 51.2229 40.6437 52.2995 41.7021L52.5799 41.4168C51.5096 40.3646 50.4903 39.3619 49.2743 38.6193L49.0658 38.9607ZM45.6212 39.8975C45.8087 39.6478 46.2455 39.1397 46.85 38.8334C47.4425 38.5331 48.197 38.424 49.065 38.9602L49.2752 38.6199C48.2703 37.999 47.3654 38.1238 46.6692 38.4766C45.985 38.8233 45.5039 39.3875 45.3013 39.6574L45.6212 39.8975ZM44.767 41.2043C45.0467 40.746 45.3169 40.3037 45.6213 39.8974L45.3012 39.6575C44.9834 40.0816 44.7035 40.5406 44.4256 40.9959L44.767 41.2043ZM44.5915 41.4911C44.6505 41.3952 44.709 41.2994 44.767 41.2043L44.4256 40.9959C44.3675 41.0912 44.3094 41.1863 44.2509 41.2814L44.5915 41.4911ZM44.5781 41.5131L44.5919 41.4904L44.2504 41.2821L44.2365 41.3049L44.5781 41.5131ZM41.0799 45.418C42.7754 44.4776 43.7526 42.8672 44.5781 41.5131L44.2365 41.3049C43.403 42.6721 42.475 44.1868 40.8859 45.0682L41.0799 45.418ZM35.3388 44.6305C35.9911 45.0695 36.8001 45.6124 37.7559 45.8711C38.7223 46.1327 39.8313 46.1027 41.0791 45.4184L40.8868 45.0677C39.7346 45.6995 38.7327 45.7212 37.8605 45.485C36.9777 45.2461 36.2205 44.7417 35.5621 44.2986L35.3388 44.6305ZM33.9247 43.8016C34.3821 44.0006 34.8458 44.3013 35.3394 44.6309L35.5615 44.2983C35.0712 43.9708 34.5792 43.6501 34.0843 43.4348L33.9247 43.8016ZM30.3644 45.7836C31.1442 44.8027 31.7792 44.1939 32.3486 43.8874C32.9023 43.5893 33.3959 43.5755 33.9259 43.8021L34.0831 43.4343C33.4396 43.1592 32.8184 43.1802 32.159 43.5352C31.5152 43.8818 30.8387 44.5443 30.0513 45.5347L30.3644 45.7836ZM27.9 48.8545C28.7263 47.836 29.542 46.8141 30.3642 45.7839L30.0515 45.5344C29.2292 46.5647 28.4145 47.5855 27.5894 48.6025L27.9 48.8545ZM28.1389 50.5131C27.5866 50.1754 27.4747 49.3791 27.9 48.8545L27.5893 48.6026C27.0273 49.2957 27.1508 50.3778 27.9302 50.8544L28.1389 50.5131ZM31.8593 51.4801C30.426 51.4801 29.1663 51.1396 28.1387 50.513L27.9304 50.8545C29.0286 51.5242 30.3622 51.8801 31.8593 51.8801V51.4801ZM46.5839 51.4801H31.8593V51.8801H46.5839V51.4801ZM48.9802 51.1202C48.2088 51.37 47.3971 51.4801 46.5839 51.4801V51.8801C47.4328 51.8801 48.2867 51.7652 49.1034 51.5007L48.9802 51.1202ZM52.8072 47.5792C52.0877 49.2773 50.7119 50.5601 48.9803 51.1202L49.1034 51.5008C50.9488 50.9038 52.4122 49.5368 53.1755 47.7352L52.8072 47.5792Z",
                                fill: "url(#paint3_linear)",
                                fillOpacity: "0.5",
                                mask: "url(#path-5-inside-2)",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "FadedImage.tsx"
                            })]
                        }), (0, s.FD)("defs", {
                            "data-sentry-element": "defs",
                            "data-sentry-source-file": "FadedImage.tsx",
                            children: [(0, s.FD)("filter", {
                                id: "filter0_f",
                                x: "0.0507812",
                                y: "0.800781",
                                width: "62.5741",
                                height: "61.6094",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                "data-sentry-element": "filter",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                    "data-sentry-element": "feFlood",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape",
                                    "data-sentry-element": "feBlend",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feGaussianBlur", {
                                    stdDeviation: "9.5",
                                    result: "effect1_foregroundBlur",
                                    "data-sentry-element": "feGaussianBlur",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("filter", {
                                id: "filter1_b",
                                x: "-2.80078",
                                y: "-4.46484",
                                width: "84.8011",
                                height: "84.4637",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                "data-sentry-element": "filter",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                    "data-sentry-element": "feFlood",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feGaussianBlur", {
                                    in: "BackgroundImage",
                                    stdDeviation: "12",
                                    "data-sentry-element": "feGaussianBlur",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur",
                                    "data-sentry-element": "feComposite",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_backgroundBlur",
                                    result: "shape",
                                    "data-sentry-element": "feBlend",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("filter", {
                                id: "filter2_bd",
                                x: "12.4414",
                                y: "12.457",
                                width: "56.2074",
                                height: "54.223",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                "data-sentry-element": "filter",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                    "data-sentry-element": "feFlood",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feGaussianBlur", {
                                    in: "BackgroundImage",
                                    stdDeviation: "7.5",
                                    "data-sentry-element": "feGaussianBlur",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur",
                                    "data-sentry-element": "feComposite",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                    "data-sentry-element": "feColorMatrix",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feOffset", {
                                    dx: "5",
                                    dy: "5",
                                    "data-sentry-element": "feOffset",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feGaussianBlur", {
                                    stdDeviation: "5",
                                    "data-sentry-element": "feGaussianBlur",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.921569 0 0 0 0 0.92549 0 0 0 0 0.941176 0 0 0 1 0",
                                    "data-sentry-element": "feColorMatrix",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feBlend", {
                                    mode: "normal",
                                    in2: "effect1_backgroundBlur",
                                    result: "effect2_dropShadow",
                                    "data-sentry-element": "feBlend",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect2_dropShadow",
                                    result: "shape",
                                    "data-sentry-element": "feBlend",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("linearGradient", {
                                id: "paint0_linear",
                                x1: "13.2594",
                                y1: "18.787",
                                x2: "53.1864",
                                y2: "32.3483",
                                gradientUnits: "userSpaceOnUse",
                                "data-sentry-element": "linearGradient",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("stop", {
                                    stopColor: "#EAEBF0",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("stop", {
                                    offset: "1",
                                    stopColor: "#B6BCC7",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("linearGradient", {
                                id: "paint1_linear",
                                x1: "27.739",
                                y1: "24.5502",
                                x2: "49.6771",
                                y2: "51.9871",
                                gradientUnits: "userSpaceOnUse",
                                "data-sentry-element": "linearGradient",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("stop", {
                                    stopColor: "white",
                                    stopOpacity: "0.25",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0.06",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("linearGradient", {
                                id: "paint2_linear",
                                x1: "51.7907",
                                y1: "31.8312",
                                x2: "22.6035",
                                y2: "32.8608",
                                gradientUnits: "userSpaceOnUse",
                                "data-sentry-element": "linearGradient",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("stop", {
                                    stopColor: "white",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0.2",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            }), (0, s.FD)("linearGradient", {
                                id: "paint3_linear",
                                x1: "30.2645",
                                y1: "35.5827",
                                x2: "52.5181",
                                y2: "35.7156",
                                gradientUnits: "userSpaceOnUse",
                                "data-sentry-element": "linearGradient",
                                "data-sentry-source-file": "FadedImage.tsx",
                                children: [(0, s.Y)("stop", {
                                    stopColor: "white",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                }), (0, s.Y)("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0",
                                    "data-sentry-element": "stop",
                                    "data-sentry-source-file": "FadedImage.tsx"
                                })]
                            })]
                        })]
                    })
                },
                r = d
        }
    }
]);
//# sourceMappingURL=FadedImage.70457cf7.js.map