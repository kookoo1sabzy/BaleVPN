try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            o = (new e.Error).stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "aaa50c7c-622b-4609-8790-8834e55badbf", e._sentryDebugIdIdentifier = "sentry-dbid-aaa50c7c-622b-4609-8790-8834e55badbf")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7339"], {
        94463: function(e, o, t) {
            t.d(o, {
                A: () => u
            });
            var n = t(46756),
                s = t.n(n),
                i = t(5421),
                r = t.n(i),
                l = t(90136),
                a = t.n(l),
                v = new URL(t(56184), t.b),
                d = r()(s()),
                c = a()(v);
            d.push([e.id, `.vjs-modal-dialog .vjs-modal-dialog-content,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.video-js .vjs-big-play-button .vjs-icon-placeholder:before{width:100%;height:100%;position:absolute;top:0;left:0}.vjs-button>.vjs-icon-placeholder:before,.video-js .vjs-big-play-button .vjs-icon-placeholder:before{text-align:center}@font-face{font-family:VideoJS;src:url(${c})format("woff");font-weight:400;font-style:normal}.vjs-icon-play,.video-js .vjs-play-control .vjs-icon-placeholder,.video-js .vjs-big-play-button .vjs-icon-placeholder:before{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-play:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.video-js .vjs-big-play-button .vjs-icon-placeholder:before{content:""}.vjs-icon-play-circle{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-play-circle:before{content:""}.vjs-icon-pause,.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-pause:before,.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before{content:""}.vjs-icon-volume-mute,.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-volume-mute:before,.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before{content:""}.vjs-icon-volume-low,.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-volume-low:before,.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before{content:""}.vjs-icon-volume-mid,.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-volume-mid:before,.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before{content:""}.vjs-icon-volume-high,.video-js .vjs-mute-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-volume-high:before,.video-js .vjs-mute-control .vjs-icon-placeholder:before{content:""}.vjs-icon-fullscreen-enter,.video-js .vjs-fullscreen-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-fullscreen-enter:before,.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before{content:""}.vjs-icon-fullscreen-exit,.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-fullscreen-exit:before,.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before{content:""}.vjs-icon-square{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-square:before{content:""}.vjs-icon-spinner{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-spinner:before{content:""}.vjs-icon-subtitles,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-subtitles:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before{content:""}.vjs-icon-captions,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-captions-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-captions:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-captions-button .vjs-icon-placeholder:before{content:""}.vjs-icon-chapters,.video-js .vjs-chapters-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-chapters:before,.video-js .vjs-chapters-button .vjs-icon-placeholder:before{content:""}.vjs-icon-share{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-share:before{content:""}.vjs-icon-cog{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-cog:before{content:""}.vjs-icon-circle,.vjs-seek-to-live-control .vjs-icon-placeholder,.video-js .vjs-volume-level,.video-js .vjs-play-progress{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-circle:before,.vjs-seek-to-live-control .vjs-icon-placeholder:before,.video-js .vjs-volume-level:before,.video-js .vjs-play-progress:before{content:""}.vjs-icon-circle-outline{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-circle-outline:before{content:""}.vjs-icon-circle-inner-circle{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-circle-inner-circle:before{content:""}.vjs-icon-hd{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-hd:before{content:""}.vjs-icon-cancel,.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-cancel:before,.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before{content:""}.vjs-icon-replay,.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-replay:before,.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before{content:""}.vjs-icon-facebook{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-facebook:before{content:""}.vjs-icon-gplus{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-gplus:before{content:""}.vjs-icon-linkedin{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-linkedin:before{content:""}.vjs-icon-twitter{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-twitter:before{content:""}.vjs-icon-tumblr{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-tumblr:before{content:""}.vjs-icon-pinterest{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-pinterest:before{content:""}.vjs-icon-audio-description,.video-js .vjs-descriptions-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-audio-description:before,.video-js .vjs-descriptions-button .vjs-icon-placeholder:before{content:""}.vjs-icon-audio,.video-js .vjs-audio-button .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-audio:before,.video-js .vjs-audio-button .vjs-icon-placeholder:before{content:""}.vjs-icon-next-item{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-next-item:before{content:""}.vjs-icon-previous-item{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-previous-item:before{content:""}.vjs-icon-picture-in-picture-enter,.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-picture-in-picture-enter:before,.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before{content:""}.vjs-icon-picture-in-picture-exit,.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-picture-in-picture-exit:before,.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before{content:""}.video-js{vertical-align:top;box-sizing:border-box;color:#fff;word-break:initial;background-color:#000;padding:0;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-style:normal;font-weight:400;line-height:1;display:block;position:relative}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js[tabindex="-1"]{outline:none}.video-js *,.video-js :before,.video-js :after{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;margin:0;list-style-position:outside}.video-js.vjs-fluid,.video-js.vjs-16-9,.video-js.vjs-4-3,.video-js.vjs-9-16,.video-js.vjs-1-1{width:100%;max-width:100%}.video-js.vjs-fluid:not(.vjs-audio-only-mode),.video-js.vjs-16-9:not(.vjs-audio-only-mode),.video-js.vjs-4-3:not(.vjs-audio-only-mode),.video-js.vjs-9-16:not(.vjs-audio-only-mode),.video-js.vjs-1-1:not(.vjs-audio-only-mode){height:0}.video-js.vjs-16-9:not(.vjs-audio-only-mode){padding-top:56.25%}.video-js.vjs-4-3:not(.vjs-audio-only-mode){padding-top:75%}.video-js.vjs-9-16:not(.vjs-audio-only-mode){padding-top:177.778%}.video-js.vjs-1-1:not(.vjs-audio-only-mode){padding-top:100%}.video-js.vjs-fill:not(.vjs-audio-only-mode){width:100%;height:100%}.video-js .vjs-tech{width:100%;height:100%;position:absolute;top:0;left:0}.video-js.vjs-audio-only-mode .vjs-tech{display:none}body.vjs-full-window{height:100%;margin:0;padding:0}.vjs-full-window .video-js.vjs-fullscreen{z-index:1000;position:fixed;inset:0;overflow:hidden}.video-js.vjs-fullscreen:not(.vjs-ios-native-fs){width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.vjs-disabled{opacity:.5;cursor:default}.video-js .vjs-offscreen{width:1px;height:1px;position:absolute;top:0;left:-9999px}.vjs-lock-showing{opacity:1!important;visibility:visible!important;display:block!important}.vjs-no-js{color:#fff;text-align:center;background-color:#000;width:300px;height:150px;margin:0 auto;padding:20px;font-family:Arial,Helvetica,sans-serif;font-size:18px}.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}.video-js .vjs-big-play-button{cursor:pointer;opacity:1;background-color:rgba(43,51,63,.7);border:.06666em solid #fff;border-radius:.3em;width:3em;height:1.63332em;padding:0;font-size:3em;line-height:1.5em;transition:all .4s;display:block;position:absolute;top:10px;left:10px}.vjs-big-play-centered .vjs-big-play-button{margin-top:-.81666em;margin-left:-1.5em;top:50%;left:50%}.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus{background-color:rgba(115,133,159,.5);border-color:#fff;transition:all}.vjs-controls-disabled .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button,.vjs-error .vjs-big-play-button{display:none}.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}.video-js button{color:inherit;font-size:inherit;line-height:inherit;text-transform:none;-webkit-appearance:none;appearance:none;background:0 0;border:none;text-decoration:none;transition:none;display:inline-block}.vjs-control .vjs-button{width:100%;height:100%}.video-js .vjs-control.vjs-close-button{cursor:pointer;z-index:2;height:3em;position:absolute;top:.5em;right:0}.video-js .vjs-modal-dialog{background:linear-gradient(rgba(0,0,0,.8),rgba(255,255,255,0));overflow:auto}.video-js .vjs-modal-dialog>*{box-sizing:border-box}.vjs-modal-dialog .vjs-modal-dialog-content{z-index:1;padding:20px 24px;font-size:1.2em;line-height:1.5}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;display:block;overflow:auto}.vjs-menu .vjs-menu-content>*{box-sizing:border-box}.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{text-align:center;text-transform:lowercase;margin:0;padding:.2em 0;font-size:1.2em;line-height:1.4em;list-style:none}.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover,.js-focus-visible .vjs-menu li.vjs-menu-item:hover{background-color:rgba(115,133,159,.5)}.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover,.js-focus-visible .vjs-menu li.vjs-selected:hover{color:#2b333f;background-color:#fff}.js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible){background:0 0}.video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible){background:0 0}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;cursor:default;margin:0 0 .3em;padding:0;font-size:1em;font-weight:700;line-height:2em}.vjs-menu-button-popup .vjs-menu{border-top-color:rgba(43,51,63,.7);width:10em;height:0;margin-bottom:1.5em;display:none;position:absolute;bottom:0;left:-3em}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:rgba(43,51,63,.7);width:100%;max-height:15em;position:absolute;bottom:1.5em}.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:5em}.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:10em}.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:14em}.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:25em}.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu,.vjs-menu-button-popup .vjs-menu.vjs-lock-showing{display:block}.video-js .vjs-menu-button-inline{transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.22222em}.video-js .vjs-menu-button-inline:hover,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.vjs-menu-button-inline .vjs-menu{opacity:0;width:auto;height:100%;margin:0;padding:0;transition:all .4s;position:absolute;top:0;left:4em}.vjs-menu-button-inline:hover .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline.vjs-slider-active .vjs-menu{opacity:1;display:block}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{opacity:1;width:auto;display:block;position:relative}.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{background-color:rgba(43,51,63,.7);width:100%;height:3em;display:none;position:absolute;bottom:0;left:0;right:0}.vjs-has-started .vjs-control-bar,.vjs-audio-only-mode .vjs-control-bar{visibility:visible;opacity:1;transition:visibility .1s,opacity .1s;display:flex}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;pointer-events:none;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar,.vjs-error .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar,.vjs-audio-only-mode.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible;pointer-events:auto}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{text-align:center;flex:none;width:4em;height:100%;margin:0;padding:0;position:relative}.video-js .vjs-control.vjs-visible-text{width:auto;padding-left:1em;padding-right:1em}.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}.vjs-button>.vjs-icon-placeholder{display:block}.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before,.video-js .vjs-control:focus{text-shadow:0 0 1em #fff}.video-js :not(.vjs-visible-text)>.vjs-control-text{clip:rect(0 0 0 0);border:0;width:1px;height:1px;padding:0;position:absolute;overflow:hidden}.vjs-no-flex .vjs-control{vertical-align:middle;display:table-cell}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{cursor:pointer;touch-action:none;flex:auto;align-items:center;min-width:4em;display:flex}.video-js .vjs-progress-control.disabled{cursor:default}.vjs-live .vjs-progress-control{display:none}.vjs-liveui .vjs-progress-control{align-items:center;display:flex}.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-progress-holder{flex:auto;height:.3em;transition:all .2s}.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.66667em}.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled{font-size:1em}.video-js .vjs-progress-holder .vjs-play-progress,.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div{width:0;height:100%;margin:0;padding:0;display:block;position:absolute}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{z-index:1;font-size:.9em;position:absolute;top:-.333333em;right:-.5em}.video-js .vjs-load-progress{background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:rgba(115,133,159,.75)}.video-js .vjs-time-tooltip{color:#000;float:right;pointer-events:none;visibility:hidden;z-index:1;background-color:rgba(255,255,255,.8);border-radius:.3em;padding:6px 8px 8px;font-family:Arial,Helvetica,sans-serif;font-size:1em;position:absolute;top:-3.4em}.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}.video-js .vjs-progress-control:hover .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip{visibility:visible;font-size:.6em;display:block}.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip{font-size:1em}.video-js .vjs-progress-control .vjs-mouse-display{z-index:1;background-color:#000;width:1px;height:100%;display:none;position:absolute}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;background-color:rgba(115,133,159,.5);margin:0 .45em;padding:0;position:relative}.video-js .vjs-slider.disabled{cursor:default}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control{cursor:pointer;flex:none}.video-js .vjs-volume-control{cursor:pointer;margin-right:1em;display:flex}.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}.video-js .vjs-volume-panel .vjs-volume-control{visibility:visible;opacity:0;width:1px;height:1px;margin-left:-1px}.video-js .vjs-volume-panel{transition:width 1s}.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active{visibility:visible;opacity:1;transition:visibility .1s,opacity .1s,height .1s,width .1s,left,top;position:relative}.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal{width:5em;height:3em;margin-right:0}.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical{transition:left;left:-3.5em}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active{width:10em;transition:width .1s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only{width:4em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{width:3em;height:8em;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;left:-3000em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{visibility:visible;opacity:1;width:5em;height:3em;transition:none;position:relative}.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{position:absolute;bottom:3em;left:.5em}.video-js .vjs-volume-panel{display:flex}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{background-color:#fff;position:absolute;bottom:0;left:0}.video-js .vjs-volume-level:before{z-index:1;font-size:.9em;position:absolute}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{z-index:1;top:-.5em;left:-.3em}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.video-js .vjs-volume-vertical{background-color:rgba(43,51,63,.7);width:3em;height:8em;bottom:8em}.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}.video-js .vjs-volume-tooltip{color:#000;float:right;pointer-events:none;visibility:hidden;z-index:1;background-color:rgba(255,255,255,.8);border-radius:.3em;padding:6px 8px 8px;font-family:Arial,Helvetica,sans-serif;font-size:1em;position:absolute;top:-3.4em}.video-js .vjs-volume-control:hover .vjs-volume-tooltip,.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip{visibility:visible;font-size:1em;display:block}.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip,.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip{top:-12px;left:1em}.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip{font-size:1em}.video-js .vjs-volume-control .vjs-mouse-display{z-index:1;background-color:#000;width:100%;height:1px;display:none;position:absolute}.video-js .vjs-volume-horizontal .vjs-mouse-display{width:1px;height:100%}.vjs-no-flex .vjs-volume-control .vjs-mouse-display{z-index:0}.video-js .vjs-volume-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-volume-tooltip{color:#fff;background-color:rgba(0,0,0,.8)}.vjs-poster{vertical-align:middle;cursor:pointer;background-color:#000;background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;margin:0;padding:0;display:inline-block;position:absolute;inset:0}.vjs-has-started .vjs-poster,.vjs-using-native-controls .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster,.vjs-has-started.vjs-audio-poster-mode .vjs-poster{display:block}.video-js .vjs-live-control{flex:auto;align-items:flex-start;font-size:1em;line-height:3em;display:flex}.vjs-no-flex .vjs-live-control{text-align:left;width:auto;display:table-cell}.video-js:not(.vjs-live) .vjs-live-control,.video-js.vjs-liveui .vjs-live-control{display:none}.video-js .vjs-seek-to-live-control{cursor:pointer;flex:none;align-items:center;width:auto;min-width:4em;height:100%;padding-left:.5em;padding-right:.5em;font-size:1em;line-height:3em;display:inline-flex}.vjs-no-flex .vjs-seek-to-live-control{text-align:left;width:auto;display:table-cell}.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,.video-js:not(.vjs-live) .vjs-seek-to-live-control{display:none}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge{cursor:auto}.vjs-seek-to-live-control .vjs-icon-placeholder{color:#888;margin-right:.5em}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder{color:red}.video-js .vjs-time-control{flex:none;width:auto;min-width:2em;padding-left:1em;padding-right:1em;font-size:1em;line-height:3em}.vjs-live .vjs-time-control,.video-js .vjs-current-time,.vjs-no-flex .vjs-current-time,.video-js .vjs-duration,.vjs-no-flex .vjs-duration{display:none}.vjs-time-divider{line-height:3em;display:none}.vjs-live .vjs-time-divider{display:none}.video-js .vjs-play-control{cursor:pointer}.video-js .vjs-play-control .vjs-icon-placeholder{flex:none}.vjs-text-track-display{pointer-events:none;position:absolute;inset:0 0 3em}.video-js.vjs-controls-disabled .vjs-text-track-display,.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{text-align:center;margin-bottom:.1em;font-size:1.4em}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{transform:translateY(-3em)}.video-js.vjs-controls-disabled video::-webkit-media-text-track-display{transform:translateY(-1.5em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{transform:translateY(-1.5em)}.video-js .vjs-picture-in-picture-control{cursor:pointer;flex:none}.video-js.vjs-audio-only-mode .vjs-picture-in-picture-control{display:none}.video-js .vjs-fullscreen-control{cursor:pointer;flex:none}.video-js.vjs-audio-only-mode .vjs-fullscreen-control{display:none}.vjs-playback-rate>.vjs-menu-button,.vjs-playback-rate .vjs-playback-rate-value{width:100%;height:100%;position:absolute;top:0;left:0}.vjs-playback-rate .vjs-playback-rate-value{pointer-events:none;text-align:center;font-size:1.5em;line-height:2}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{text-align:center;font-size:1.4em}.vjs-error .vjs-error-display:before{color:#fff;content:"X";text-shadow:.05em .05em .1em #000;text-align:center;vertical-align:middle;width:100%;margin-top:-.5em;font-family:Arial,Helvetica,sans-serif;font-size:4em;line-height:1;position:absolute;top:50%;left:0}.vjs-loading-spinner{opacity:.85;text-align:left;box-sizing:border-box;visibility:hidden;background-clip:padding-box;border:6px solid rgba(43,51,63,.7);border-radius:25px;width:50px;height:50px;margin:-25px 0 0 -25px;display:none;position:absolute;top:50%;left:50%}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{animation:0s linear .3s forwards vjs-spinner-show;display:block}.vjs-loading-spinner:before,.vjs-loading-spinner:after{content:"";box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:#fff transparent transparent;margin:-6px;position:absolute}.vjs-seeking .vjs-loading-spinner:before,.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after{animation:1.1s cubic-bezier(.6,.2,0,.8) infinite vjs-spinner-spin,1.1s linear infinite vjs-spinner-fade}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;animation-delay:.44s}@keyframes vjs-spinner-show{to{visibility:visible}}@keyframes vjs-spinner-spin{to{transform:rotate(360deg)}}@-webkit-keyframes vjs-spinner-spin{to{-webkit-transform:rotate(360deg)}}@keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}.video-js.vjs-audio-only-mode .vjs-captions-button{display:none}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js.vjs-audio-only-mode .vjs-descriptions-button{display:none}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;margin-bottom:-.1em;display:inline-block}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{content:"";font-family:VideoJS;font-size:1.5em;line-height:inherit}.video-js.vjs-audio-only-mode .vjs-subs-caps-button{display:none}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;margin-bottom:-.1em;display:inline-block}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{content:" ";font-family:VideoJS;font-size:1.5em;line-height:inherit}.video-js.vjs-layout-small .vjs-current-time,.video-js.vjs-layout-small .vjs-time-divider,.video-js.vjs-layout-small .vjs-duration,.video-js.vjs-layout-small .vjs-remaining-time,.video-js.vjs-layout-small .vjs-playback-rate,.video-js.vjs-layout-small .vjs-volume-control,.video-js.vjs-layout-x-small .vjs-current-time,.video-js.vjs-layout-x-small .vjs-time-divider,.video-js.vjs-layout-x-small .vjs-duration,.video-js.vjs-layout-x-small .vjs-remaining-time,.video-js.vjs-layout-x-small .vjs-playback-rate,.video-js.vjs-layout-x-small .vjs-volume-control,.video-js.vjs-layout-tiny .vjs-current-time,.video-js.vjs-layout-tiny .vjs-time-divider,.video-js.vjs-layout-tiny .vjs-duration,.video-js.vjs-layout-tiny .vjs-remaining-time,.video-js.vjs-layout-tiny .vjs-playback-rate,.video-js.vjs-layout-tiny .vjs-volume-control{display:none}.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover{width:auto;width:initial}.video-js.vjs-layout-x-small .vjs-progress-control,.video-js.vjs-layout-tiny .vjs-progress-control{display:none}.video-js.vjs-layout-x-small .vjs-custom-control-spacer{flex:auto;display:block}.video-js.vjs-layout-x-small.vjs-no-flex .vjs-custom-control-spacer{width:auto}.vjs-modal-dialog.vjs-text-track-settings{color:#fff;background-color:rgba(43,51,63,.75);height:70%}.vjs-text-track-settings .vjs-modal-dialog-content{display:table}.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-font,.vjs-text-track-settings .vjs-track-settings-controls{display:table-cell}.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}@supports (display:grid){.vjs-text-track-settings .vjs-modal-dialog-content{grid-template-rows:1fr;grid-template-columns:1fr 1fr;padding:20px 24px 0;display:grid}.vjs-track-settings-controls .vjs-default-button{margin-bottom:20px}.vjs-text-track-settings .vjs-track-settings-controls{grid-column:1/-1}.vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content{grid-template-columns:1fr}}.vjs-track-setting>select{margin-bottom:.5em;margin-right:1em}.vjs-text-track-settings fieldset{border:none;margin:5px;padding:3px}.vjs-text-track-settings fieldset span{display:inline-block}.vjs-text-track-settings fieldset span>select{max-width:7.3em}.vjs-text-track-settings legend{color:#fff;margin:0 0 5px}.vjs-text-track-settings .vjs-label{clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);border:0;width:1px;height:1px;margin:0 0 5px;padding:0;display:block;position:absolute;overflow:hidden}.vjs-track-settings-controls button:focus,.vjs-track-settings-controls button:active{background-image:linear-gradient(#73859f 0%,#fff 12%);outline-width:medium;outline-style:solid}.vjs-track-settings-controls button:hover{color:rgba(43,51,63,.75)}.vjs-track-settings-controls button{color:#2b333f;cursor:pointer;background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f 100%);border-radius:2px}.vjs-track-settings-controls .vjs-default-button{margin-right:1em}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}.vjs-resize-manager{z-index:-1000;border:none;width:100%;height:100%;position:absolute;top:0;left:0}.js-focus-visible .video-js :focus:not(.focus-visible){outline:none}.video-js :focus:not(:focus-visible){outline:none}`, ""]);
            let u = d
        },
        31125: function(e, o, t) {
            var n = t(53321),
                s = t.n(n),
                i = t(23518),
                r = t.n(i),
                l = t(14182),
                a = t.n(l),
                v = t(5033),
                d = t.n(v),
                c = t(77141),
                u = t.n(c),
                j = t(66338),
                p = t.n(j),
                m = t(94463),
                f = {};
            f.styleTagTransform = p(), f.setAttributes = d(), f.insert = a().bind(null, "head"), f.domAPI = r(), f.insertStyleElement = u(), s()(m.A, f), m.A && m.A.locals && m.A.locals
        },
        52999: function(e, o, t) {
            var n, s = this && this.__extends || (n = function(e, o) {
                    return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, o) {
                        e.__proto__ = o
                    } || function(e, o) {
                        for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
                    })(e, o)
                }, function(e, o) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
                }),
                i = this && this.__createBinding || (Object.create ? function(e, o, t, n) {
                    void 0 === n && (n = t), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return o[t]
                        }
                    })
                } : function(e, o, t, n) {
                    void 0 === n && (n = t), e[n] = o[t]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(e, o) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: o
                    })
                } : function(e, o) {
                    e.default = o
                }),
                l = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var o = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && i(o, e, t);
                    return r(o, e), o
                },
                a = this && this.__spreadArrays || function() {
                    for (var e = 0, o = 0, t = arguments.length; o < t; o++) e += arguments[o].length;
                    for (var n = Array(e), s = 0, o = 0; o < t; o++)
                        for (var i = arguments[o], r = 0, l = i.length; r < l; r++, s++) n[s] = i[r];
                    return n
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var v = l(t(58191)),
                d = t(93971),
                c = t(38927),
                u = ["ArrowRight", "ArrowUp", "k", "PageUp"],
                j = ["ArrowLeft", "ArrowDown", "j", "PageDown"];
            o.default = function(e) {
                function o(o) {
                    var t = e.call(this, o) || this;
                    if (t.trackRef = v.createRef(), t.thumbRefs = [], t.markRefs = [], t.state = {
                            draggedTrackPos: [-1, -1],
                            draggedThumbIndex: -1,
                            thumbZIndexes: Array(t.props.values.length).fill(0).map(function(e, o) {
                                return o
                            }),
                            isChanged: !1,
                            markOffsets: []
                        }, t.getOffsets = function() {
                            var e = t.props,
                                o = e.direction,
                                n = e.values,
                                s = e.min,
                                i = e.max,
                                r = t.trackRef.current,
                                l = r.getBoundingClientRect(),
                                a = d.getPaddingAndBorder(r);
                            return t.getThumbs().map(function(e, t) {
                                var r = {
                                        x: 0,
                                        y: 0
                                    },
                                    v = e.getBoundingClientRect(),
                                    u = d.getMargin(e);
                                switch (o) {
                                    case c.Direction.Right:
                                        return r.x = -((u.left + a.left) * 1), r.y = -(((v.height - l.height) / 2 + a.top) * 1), r.x += l.width * d.relativeValue(n[t], s, i) - v.width / 2, r;
                                    case c.Direction.Left:
                                        return r.x = -((u.right + a.right) * 1), r.y = -(((v.height - l.height) / 2 + a.top) * 1), r.x += l.width - l.width * d.relativeValue(n[t], s, i) - v.width / 2, r;
                                    case c.Direction.Up:
                                        return r.x = -(((v.width - l.width) / 2 + u.left + a.left) * 1), r.y = -a.left, r.y += l.height - l.height * d.relativeValue(n[t], s, i) - v.height / 2, r;
                                    case c.Direction.Down:
                                        return r.x = -(((v.width - l.width) / 2 + u.left + a.left) * 1), r.y = -a.left, r.y += l.height * d.relativeValue(n[t], s, i) - v.height / 2, r;
                                    default:
                                        return d.assertUnreachable(o)
                                }
                            })
                        }, t.getThumbs = function() {
                            return t.trackRef && t.trackRef.current ? Array.from(t.trackRef.current.children).filter(function(e) {
                                return e.hasAttribute("aria-valuenow")
                            }) : (console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"), [])
                        }, t.getTargetIndex = function(e) {
                            return t.getThumbs().findIndex(function(o) {
                                return o === e.target || o.contains(e.target)
                            })
                        }, t.addTouchEvents = function(e) {
                            document.addEventListener("touchmove", t.schdOnTouchMove, {
                                passive: !1
                            }), document.addEventListener("touchend", t.schdOnEnd, {
                                passive: !1
                            }), document.addEventListener("touchcancel", t.schdOnEnd, {
                                passive: !1
                            })
                        }, t.addMouseEvents = function(e) {
                            document.addEventListener("mousemove", t.schdOnMouseMove), document.addEventListener("mouseup", t.schdOnEnd)
                        }, t.onMouseDownTrack = function(e) {
                            var o;
                            if (0 === e.button)
                                if (e.persist(), e.preventDefault(), t.addMouseEvents(e.nativeEvent), t.props.values.length > 1 && t.props.draggableTrack) {
                                    if (t.thumbRefs.some(function(o) {
                                            var t;
                                            return null == (t = o.current) ? void 0 : t.contains(e.target)
                                        })) return;
                                    t.setState({
                                        draggedTrackPos: [e.clientX, e.clientY]
                                    }, function() {
                                        return t.onMove(e.clientX, e.clientY)
                                    })
                                } else {
                                    var n = d.getClosestThumbIndex(t.thumbRefs.map(function(e) {
                                        return e.current
                                    }), e.clientX, e.clientY, t.props.direction);
                                    null == (o = t.thumbRefs[n].current) || o.focus(), t.setState({
                                        draggedThumbIndex: n
                                    }, function() {
                                        return t.onMove(e.clientX, e.clientY)
                                    })
                                }
                        }, t.onResize = function() {
                            d.translateThumbs(t.getThumbs(), t.getOffsets(), t.props.rtl), t.calculateMarkOffsets()
                        }, t.onTouchStartTrack = function(e) {
                            var o;
                            if (e.persist(), t.addTouchEvents(e.nativeEvent), t.props.values.length > 1 && t.props.draggableTrack) {
                                if (t.thumbRefs.some(function(o) {
                                        var t;
                                        return null == (t = o.current) ? void 0 : t.contains(e.target)
                                    })) return;
                                t.setState({
                                    draggedTrackPos: [e.touches[0].clientX, e.touches[0].clientY]
                                }, function() {
                                    return t.onMove(e.touches[0].clientX, e.touches[0].clientY)
                                })
                            } else {
                                var n = d.getClosestThumbIndex(t.thumbRefs.map(function(e) {
                                    return e.current
                                }), e.touches[0].clientX, e.touches[0].clientY, t.props.direction);
                                null == (o = t.thumbRefs[n].current) || o.focus(), t.setState({
                                    draggedThumbIndex: n
                                }, function() {
                                    return t.onMove(e.touches[0].clientX, e.touches[0].clientY)
                                })
                            }
                        }, t.onMouseOrTouchStart = function(e) {
                            if (!t.props.disabled) {
                                var o = d.isTouchEvent(e);
                                if (o || 0 === e.button) {
                                    var n = t.getTargetIndex(e); - 1 !== n && (o ? t.addTouchEvents(e) : t.addMouseEvents(e), t.setState({
                                        draggedThumbIndex: n,
                                        thumbZIndexes: t.state.thumbZIndexes.map(function(e, o) {
                                            return o === n ? Math.max.apply(Math, t.state.thumbZIndexes) : e <= t.state.thumbZIndexes[n] ? e : e - 1
                                        })
                                    }))
                                }
                            }
                        }, t.onMouseMove = function(e) {
                            e.preventDefault(), t.onMove(e.clientX, e.clientY)
                        }, t.onTouchMove = function(e) {
                            e.preventDefault(), t.onMove(e.touches[0].clientX, e.touches[0].clientY)
                        }, t.onKeyDown = function(e) {
                            var o = t.props,
                                n = o.values,
                                s = o.onChange,
                                i = o.step,
                                r = o.rtl,
                                l = t.state.isChanged,
                                a = t.getTargetIndex(e.nativeEvent),
                                v = r ? -1 : 1; - 1 !== a && (u.includes(e.key) ? (e.preventDefault(), t.setState({
                                draggedThumbIndex: a,
                                isChanged: !0
                            }), s(d.replaceAt(n, a, t.normalizeValue(n[a] + v * ("PageUp" === e.key ? 10 * i : i), a)))) : j.includes(e.key) ? (e.preventDefault(), t.setState({
                                draggedThumbIndex: a,
                                isChanged: !0
                            }), s(d.replaceAt(n, a, t.normalizeValue(n[a] - v * ("PageDown" === e.key ? 10 * i : i), a)))) : "Tab" === e.key ? t.setState({
                                draggedThumbIndex: -1
                            }, function() {
                                l && t.fireOnFinalChange()
                            }) : l && t.fireOnFinalChange())
                        }, t.onKeyUp = function(e) {
                            var o = t.state.isChanged;
                            t.setState({
                                draggedThumbIndex: -1
                            }, function() {
                                o && t.fireOnFinalChange()
                            })
                        }, t.onMove = function(e, o) {
                            var n = t.state,
                                s = n.draggedThumbIndex,
                                i = n.draggedTrackPos,
                                r = t.props,
                                l = r.direction,
                                a = r.min,
                                v = r.max,
                                u = r.onChange,
                                j = r.values,
                                p = r.step,
                                m = r.rtl;
                            if (-1 === s && -1 === i[0] && -1 === i[1]) return null;
                            var f = t.trackRef.current;
                            if (!f) return null;
                            var h = f.getBoundingClientRect(),
                                g = d.isVertical(l) ? h.height : h.width;
                            if (-1 !== i[0] && -1 !== i[1]) {
                                var b = e - i[0],
                                    y = o - i[1],
                                    x = 0;
                                switch (l) {
                                    case c.Direction.Right:
                                    case c.Direction.Left:
                                        x = b / g * (v - a);
                                        break;
                                    case c.Direction.Down:
                                    case c.Direction.Up:
                                        x = y / g * (v - a);
                                        break;
                                    default:
                                        d.assertUnreachable(l)
                                }
                                if (m && (x *= -1), Math.abs(x) >= p / 2) {
                                    for (var w = 0; w < t.thumbRefs.length; w++) {
                                        if (j[w] === v && 1 === Math.sign(x) || j[w] === a && -1 === Math.sign(x)) return;
                                        var k = j[w] + x;
                                        k > v ? x = v - j[w] : k < a && (x = a - j[w])
                                    }
                                    for (var z = j.slice(0), w = 0; w < t.thumbRefs.length; w++) z = d.replaceAt(z, w, t.normalizeValue(j[w] + x, w));
                                    t.setState({
                                        draggedTrackPos: [e, o]
                                    }), u(z)
                                }
                            } else {
                                var T = 0;
                                switch (l) {
                                    case c.Direction.Right:
                                        T = (e - h.left) / g * (v - a) + a;
                                        break;
                                    case c.Direction.Left:
                                        T = (g - (e - h.left)) / g * (v - a) + a;
                                        break;
                                    case c.Direction.Down:
                                        T = (o - h.top) / g * (v - a) + a;
                                        break;
                                    case c.Direction.Up:
                                        T = (g - (o - h.top)) / g * (v - a) + a;
                                        break;
                                    default:
                                        d.assertUnreachable(l)
                                }
                                m && (T = v + a - T), Math.abs(j[s] - T) >= p / 2 && u(d.replaceAt(j, s, t.normalizeValue(T, s)))
                            }
                        }, t.normalizeValue = function(e, o) {
                            var n = t.props,
                                s = n.min,
                                i = n.max,
                                r = n.step,
                                l = n.allowOverlap,
                                a = n.values;
                            return d.normalizeValue(e, o, s, i, r, l, a)
                        }, t.onEnd = function(e) {
                            if (e.preventDefault(), document.removeEventListener("mousemove", t.schdOnMouseMove), document.removeEventListener("touchmove", t.schdOnTouchMove), document.removeEventListener("mouseup", t.schdOnEnd), document.removeEventListener("touchend", t.schdOnEnd), document.removeEventListener("touchcancel", t.schdOnEnd), -1 === t.state.draggedThumbIndex && -1 === t.state.draggedTrackPos[0] && -1 === t.state.draggedTrackPos[1]) return null;
                            t.setState({
                                draggedThumbIndex: -1,
                                draggedTrackPos: [-1, -1]
                            }, function() {
                                t.fireOnFinalChange()
                            })
                        }, t.fireOnFinalChange = function() {
                            t.setState({
                                isChanged: !1
                            });
                            var e = t.props,
                                o = e.onFinalChange,
                                n = e.values;
                            o && o(n)
                        }, t.calculateMarkOffsets = function() {
                            if (t.props.renderMark && t.trackRef && null !== t.trackRef.current) {
                                for (var e = window.getComputedStyle(t.trackRef.current), o = parseInt(e.width, 10), n = parseInt(e.height, 10), s = parseInt(e.paddingLeft, 10), i = parseInt(e.paddingTop, 10), r = [], l = 0; l < t.numOfMarks + 1; l++) {
                                    var a = 9999,
                                        v = 9999;
                                    if (t.markRefs[l].current) {
                                        var d = t.markRefs[l].current.getBoundingClientRect();
                                        a = d.height, v = d.width
                                    }
                                    t.props.direction === c.Direction.Left || t.props.direction === c.Direction.Right ? r.push([Math.round(o / t.numOfMarks * l + s - v / 2), -Math.round((a - n) / 2)]) : r.push([Math.round(n / t.numOfMarks * l + i - a / 2), -Math.round((v - o) / 2)])
                                }
                                t.setState({
                                    markOffsets: r
                                })
                            }
                        }, 0 === o.step) throw Error('"step" property should be a positive number');
                    t.numOfMarks = (o.max - o.min) / t.props.step, t.schdOnMouseMove = d.schd(t.onMouseMove), t.schdOnTouchMove = d.schd(t.onTouchMove), t.schdOnEnd = d.schd(t.onEnd), t.thumbRefs = o.values.map(function() {
                        return v.createRef()
                    });
                    for (var n = 0; n < t.numOfMarks + 1; n++) t.markRefs[n] = v.createRef();
                    return t
                }
                return s(o, e), o.prototype.componentDidMount = function() {
                    var e = this,
                        o = this.props,
                        t = o.values,
                        n = o.min,
                        s = o.step;
                    this.resizeObserver = window.ResizeObserver ? new window.ResizeObserver(this.onResize) : {
                        observe: function() {
                            return window.addEventListener("resize", e.onResize)
                        },
                        unobserve: function() {
                            return window.removeEventListener("resize", e.onResize)
                        }
                    }, document.addEventListener("touchstart", this.onMouseOrTouchStart, {
                        passive: !1
                    }), document.addEventListener("mousedown", this.onMouseOrTouchStart, {
                        passive: !1
                    }), this.props.allowOverlap || d.checkInitialOverlap(this.props.values), this.props.values.forEach(function(o) {
                        return d.checkBoundaries(o, e.props.min, e.props.max)
                    }), this.resizeObserver.observe(this.trackRef.current), d.translateThumbs(this.getThumbs(), this.getOffsets(), this.props.rtl), this.calculateMarkOffsets(), t.forEach(function(e) {
                        d.isStepDivisible(n, e, s) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
                    })
                }, o.prototype.componentDidUpdate = function(e, o) {
                    var t = this.props,
                        n = t.max,
                        s = t.min,
                        i = t.step,
                        r = t.values,
                        l = t.rtl;
                    if (e.max !== n || e.min !== s || e.step !== i) {
                        this.markRefs = [], this.numOfMarks = (n - s) / i;
                        for (var a = 0; a < this.numOfMarks + 1; a++) this.markRefs[a] = v.createRef()
                    }
                    d.translateThumbs(this.getThumbs(), this.getOffsets(), l), (e.max !== n || e.min !== s || e.step !== i || o.markOffsets.length !== this.state.markOffsets.length) && (this.calculateMarkOffsets(), r.forEach(function(e) {
                        d.isStepDivisible(s, e, i) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
                    }))
                }, o.prototype.componentWillUnmount = function() {
                    document.removeEventListener("mousedown", this.onMouseOrTouchStart, {
                        passive: !1
                    }), document.removeEventListener("mousemove", this.schdOnMouseMove), document.removeEventListener("touchmove", this.schdOnTouchMove), document.removeEventListener("touchstart", this.onMouseOrTouchStart), document.removeEventListener("mouseup", this.schdOnEnd), document.removeEventListener("touchend", this.schdOnEnd), this.resizeObserver.unobserve(this.trackRef.current)
                }, o.prototype.render = function() {
                    var e = this,
                        o = this.props,
                        t = o.renderTrack,
                        n = o.renderThumb,
                        s = o.renderMark,
                        i = void 0 === s ? function() {
                            return null
                        } : s,
                        r = o.values,
                        l = o.min,
                        v = o.max,
                        u = o.allowOverlap,
                        j = o.disabled,
                        p = this.state,
                        m = p.draggedThumbIndex,
                        f = p.thumbZIndexes,
                        h = p.markOffsets;
                    return t({
                        props: {
                            style: {
                                transform: "scale(1)",
                                cursor: m > -1 ? "grabbing" : this.props.draggableTrack ? d.isVertical(this.props.direction) ? "ns-resize" : "ew-resize" : 1 !== r.length || j ? "inherit" : "pointer"
                            },
                            onMouseDown: j ? d.voidFn : this.onMouseDownTrack,
                            onTouchStart: j ? d.voidFn : this.onTouchStartTrack,
                            ref: this.trackRef
                        },
                        isDragged: this.state.draggedThumbIndex > -1,
                        disabled: j,
                        children: a(h.map(function(o, t, n) {
                            return i({
                                props: {
                                    style: e.props.direction === c.Direction.Left || e.props.direction === c.Direction.Right ? {
                                        position: "absolute",
                                        left: o[0] + "px",
                                        marginTop: o[1] + "px"
                                    } : {
                                        position: "absolute",
                                        top: o[0] + "px",
                                        marginLeft: o[1] + "px"
                                    },
                                    key: "mark" + t,
                                    ref: e.markRefs[t]
                                },
                                index: t
                            })
                        }), r.map(function(o, t) {
                            var s = e.state.draggedThumbIndex === t;
                            return n({
                                index: t,
                                value: o,
                                isDragged: s,
                                props: {
                                    style: {
                                        position: "absolute",
                                        zIndex: f[t],
                                        cursor: j ? "inherit" : s ? "grabbing" : "grab",
                                        userSelect: "none",
                                        touchAction: "none",
                                        WebkitUserSelect: "none",
                                        MozUserSelect: "none",
                                        msUserSelect: "none"
                                    },
                                    key: t,
                                    tabIndex: j ? void 0 : 0,
                                    "aria-valuemax": u ? v : r[t + 1] || v,
                                    "aria-valuemin": u ? l : r[t - 1] || l,
                                    "aria-valuenow": o,
                                    draggable: !1,
                                    ref: e.thumbRefs[t],
                                    role: "slider",
                                    onKeyDown: j ? d.voidFn : e.onKeyDown,
                                    onKeyUp: j ? d.voidFn : e.onKeyUp
                                }
                            })
                        }))
                    })
                }, o.defaultProps = {
                    step: 1,
                    direction: c.Direction.Right,
                    rtl: !1,
                    disabled: !1,
                    allowOverlap: !1,
                    draggableTrack: !1,
                    min: 0,
                    max: 100
                }, o
            }(v.Component)
        },
        44306: function(e, o, t) {
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.checkValuesAgainstBoundaries = o.relativeValue = o.useThumbOverlap = o.Direction = o.getTrackBackground = o.Range = void 0, o.Range = n(t(52999)).default;
            var s = t(93971);
            Object.defineProperty(o, "getTrackBackground", {
                enumerable: !0,
                get: function() {
                    return s.getTrackBackground
                }
            }), Object.defineProperty(o, "useThumbOverlap", {
                enumerable: !0,
                get: function() {
                    return s.useThumbOverlap
                }
            }), Object.defineProperty(o, "relativeValue", {
                enumerable: !0,
                get: function() {
                    return s.relativeValue
                }
            }), Object.defineProperty(o, "checkValuesAgainstBoundaries", {
                enumerable: !0,
                get: function() {
                    return s.checkValuesAgainstBoundaries
                }
            });
            var i = t(38927);
            Object.defineProperty(o, "Direction", {
                enumerable: !0,
                get: function() {
                    return i.Direction
                }
            })
        },
        38927: function(e, o) {
            var t;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.Direction = void 0, (t = o.Direction || (o.Direction = {})).Right = "to right", t.Left = "to left", t.Down = "to bottom", t.Up = "to top"
        },
        93971: function(e, o, t) {
            var n = this && this.__spreadArrays || function() {
                for (var e = 0, o = 0, t = arguments.length; o < t; o++) e += arguments[o].length;
                for (var n = Array(e), s = 0, o = 0; o < t; o++)
                    for (var i = arguments[o], r = 0, l = i.length; r < l; r++, s++) n[s] = i[r];
                return n
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.useThumbOverlap = o.assertUnreachable = o.voidFn = o.getTrackBackground = o.replaceAt = o.schd = o.translate = o.getClosestThumbIndex = o.translateThumbs = o.getPaddingAndBorder = o.getMargin = o.checkInitialOverlap = o.checkValuesAgainstBoundaries = o.checkBoundaries = o.isVertical = o.relativeValue = o.normalizeValue = o.isStepDivisible = o.isTouchEvent = o.getStepDecimals = void 0;
            var s = t(58191),
                i = t(38927);

            function r(e) {
                return e === i.Direction.Up || e === i.Direction.Down
            }

            function l(e, o, t) {
                e.style.transform = "translate(" + o + "px, " + t + "px)"
            }
            o.getStepDecimals = function(e) {
                var o = e.toString().split(".")[1];
                return o ? o.length : 0
            }, o.isTouchEvent = function(e) {
                return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
            }, o.isStepDivisible = function(e, o, t) {
                var n = Number(((o - e) / t).toFixed(8));
                return parseInt(n.toString(), 10) === n
            }, o.normalizeValue = function(e, t, n, s, i, r, l) {
                if (e = Math.round(1e11 * e) / 1e11, !r) {
                    var a = l[t - 1],
                        v = l[t + 1];
                    if (a && a > e) return a;
                    if (v && v < e) return v
                }
                if (e > s) return s;
                if (e < n) return n;
                var d = Math.floor(1e11 * e - 1e11 * n) % Math.floor(1e11 * i),
                    c = Math.floor(1e11 * e - Math.abs(d)),
                    u = 0 === d ? e : c / 1e11,
                    j = Math.abs(d / 1e11) < i / 2 ? u : u + i,
                    p = o.getStepDecimals(i);
                return parseFloat(j.toFixed(p))
            }, o.relativeValue = function(e, o, t) {
                return (e - o) / (t - o)
            }, o.isVertical = r, o.checkBoundaries = function(e, o, t) {
                if (o >= t) throw RangeError("min (" + o + ") is equal/bigger than max (" + t + ")");
                if (e < o) throw RangeError("value (" + e + ") is smaller than min (" + o + ")");
                if (e > t) throw RangeError("value (" + e + ") is bigger than max (" + t + ")")
            }, o.checkValuesAgainstBoundaries = function(e, o, t) {
                return e < o ? o : e > t ? t : e
            }, o.checkInitialOverlap = function(e) {
                if (!(e.length < 2) && !e.slice(1).every(function(o, t) {
                        return e[t] <= o
                    })) throw RangeError("values={[" + e + "]} needs to be sorted when allowOverlap={false}")
            }, o.getMargin = function(e) {
                var o = window.getComputedStyle(e);
                return {
                    top: parseInt(o["margin-top"], 10),
                    bottom: parseInt(o["margin-bottom"], 10),
                    left: parseInt(o["margin-left"], 10),
                    right: parseInt(o["margin-right"], 10)
                }
            }, o.getPaddingAndBorder = function(e) {
                var o = window.getComputedStyle(e);
                return {
                    top: parseInt(o["padding-top"], 10) + parseInt(o["border-top-width"], 10),
                    bottom: parseInt(o["padding-bottom"], 10) + parseInt(o["border-bottom-width"], 10),
                    left: parseInt(o["padding-left"], 10) + parseInt(o["border-left-width"], 10),
                    right: parseInt(o["padding-right"], 10) + parseInt(o["border-right-width"], 10)
                }
            }, o.translateThumbs = function(e, o, t) {
                var n = t ? -1 : 1;
                e.forEach(function(e, t) {
                    return l(e, n * o[t].x, o[t].y)
                })
            }, o.getClosestThumbIndex = function(e, o, t, n) {
                for (var s = 0, i = d(e[0], o, t, n), r = 1; r < e.length; r++) {
                    var l = d(e[r], o, t, n);
                    l < i && (i = l, s = r)
                }
                return s
            }, o.translate = l, o.schd = function(e) {
                var o = [],
                    t = null;
                return function() {
                    for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                    o = n, t || (t = requestAnimationFrame(function() {
                        t = null, e.apply(void 0, o)
                    }))
                }
            }, o.replaceAt = function(e, o, t) {
                var n = e.slice(0);
                return n[o] = t, n
            }, o.getTrackBackground = function(e) {
                var o = e.values,
                    t = e.colors,
                    n = e.min,
                    s = e.max,
                    r = e.direction,
                    l = void 0 === r ? i.Direction.Right : r,
                    a = e.rtl,
                    v = void 0 !== a && a;
                v && l === i.Direction.Right ? l = i.Direction.Left : v && i.Direction.Left && (l = i.Direction.Right);
                var d = o.slice(0).sort(function(e, o) {
                    return e - o
                }).map(function(e) {
                    return (e - n) / (s - n) * 100
                }).reduce(function(e, o, n) {
                    return e + ", " + t[n] + " " + o + "%, " + t[n + 1] + " " + o + "%"
                }, "");
                return "linear-gradient(" + l + ", " + t[0] + " 0%" + d + ", " + t[t.length - 1] + " 100%)"
            }, o.voidFn = function() {}, o.assertUnreachable = function(e) {
                throw Error("Didn't expect to get here")
            };
            var a = function(e, o, t, s, i) {
                    return void 0 === i && (i = function(e) {
                        return e
                    }), Math.ceil(n([e], Array.from(e.children)).reduce(function(e, n) {
                        var r = Math.ceil(n.getBoundingClientRect().width);
                        if (n.innerText && n.innerText.includes(t) && 0 === n.childElementCount) {
                            var l = n.cloneNode(!0);
                            l.innerHTML = i(o.toFixed(s)), l.style.visibility = "hidden", document.body.appendChild(l), r = Math.ceil(l.getBoundingClientRect().width), document.body.removeChild(l)
                        }
                        return r > e ? r : e
                    }, e.getBoundingClientRect().width))
                },
                v = function(e, o, t, s, i, r, l) {
                    void 0 === l && (l = function(e) {
                        return e
                    });
                    var v = [],
                        d = function(e) {
                            var c = a(t[e], s[e], i, r, l),
                                u = o[e].x;
                            o.forEach(function(o, j) {
                                var p = o.x,
                                    m = a(t[j], s[j], i, r, l);
                                e !== j && (u >= p && u <= p + m || u + c >= p && u + c <= p + m) && !v.includes(j) && (v.push(e), v.push(j), v = n(v, [e, j]), d(j))
                            })
                        };
                    return d(e), Array.from(new Set(v.sort()))
                };

            function d(e, o, t, n) {
                var s = e.getBoundingClientRect(),
                    i = s.left,
                    l = s.top,
                    a = s.width,
                    v = s.height;
                return r(n) ? Math.abs(t - (l + v / 2)) : Math.abs(o - (i + a / 2))
            }
            o.useThumbOverlap = function(e, t, i, r, l, a) {
                void 0 === r && (r = .1), void 0 === l && (l = " - "), void 0 === a && (a = function(e) {
                    return e
                });
                var d = o.getStepDecimals(r),
                    c = s.useState({}),
                    u = c[0],
                    j = c[1],
                    p = s.useState(a(t[i].toFixed(d))),
                    m = p[0],
                    f = p[1];
                return s.useEffect(function() {
                    if (e) {
                        var o = e.getThumbs();
                        if (!(o.length < 1)) {
                            var s = {},
                                r = e.getOffsets(),
                                c = v(i, r, o, t, l, d, a),
                                u = a(t[i].toFixed(d));
                            if (c.length) {
                                var p = c.reduce(function(e, o, t, s) {
                                    return e.length ? n(e, [r[s[t]].x]) : [r[s[t]].x]
                                }, []);
                                if (Math.min.apply(Math, p) === r[i].x) {
                                    var m = [];
                                    c.forEach(function(e) {
                                        m.push(t[e].toFixed(d))
                                    }), u = Array.from(new Set(m.sort(function(e, o) {
                                        return parseFloat(e) - parseFloat(o)
                                    }))).map(a).join(l);
                                    var h = Math.min.apply(Math, p),
                                        g = Math.max.apply(Math, p),
                                        b = o[c[p.indexOf(g)]].getBoundingClientRect().width;
                                    s.left = Math.abs(h - (g + b)) / 2 + "px", s.transform = "translate(-50%, 0)"
                                } else s.visibility = "hidden"
                            }
                            f(u), j(s)
                        }
                    }
                }, [e, t]), [m, u]
            }
        }
    }
]);
//# sourceMappingURL=7339.23fa0fc1.js.map