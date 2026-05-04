{
  "targets": [{
    "target_name": "tun",
    "sources": ["tun_addon/tun.cc"],
    "include_dirs": ["<!@(node -p \"require('node-addon-api').include_dir\")"],
    "cflags!": ["-fno-exceptions"],
    "cflags_cc!": ["-fno-exceptions"],
    "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"]
  }]
}
