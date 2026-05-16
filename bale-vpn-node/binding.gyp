{
  "targets": [{
    "target_name": "tun",
    "include_dirs": ["<!@(node -p \"require('node-addon-api').include_dir\")"],
    "cflags!": ["-fno-exceptions"],
    "cflags_cc!": ["-fno-exceptions"],
    "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
    "conditions": [
      ["OS=='linux'", { "sources": ["tun_addon/tun.cc"] }],
      ["OS=='mac'",   { "sources": ["tun_addon/tun_darwin.cc"] }]
    ]
  }]
}
