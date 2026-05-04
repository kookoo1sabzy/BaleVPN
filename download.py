import urllib.request
import os
import time

BASE = "https://web.bale.ai"
DEST = "/Users/kookoo/Documents/bale/test"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36",
    "Cookie": ""
}

# All files discovered from service-worker.js
FILES = [
    # HTML entry points
    "/index.html",
    "/enroll.html",
    "/hub.html",
    "/redirecting.html",
    # Main JS bundles
    "/static/js/index.52867891.js",
    "/static/js/2028.6a01a431.js",
    "/static/js/6448.d550bfc3.js",
    "/static/js/6591.a44597be.js",
    "/static/js/7932.2d979425.js",
    "/static/js/enroll.08575865.js",
    "/static/js/hub.49e3d77d.js",
    "/static/js/redirecting.b52c30be.js",
    "/static/js/rlottie-wasm.js",
    # Service worker
    "/service-worker.js",
    "/site.webmanifest",
    "/robots.txt",
]

# Fetch the service worker to get the full async chunk list
def get_sw_chunks():
    url = BASE + "/service-worker.js"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            content = r.read().decode("utf-8", errors="replace")
        import re
        chunks = re.findall(r'(/static/js/async/[^\'"]+\.js)', content)
        main = re.findall(r'(/static/js/[^\'"]+\.js)', content)
        css = re.findall(r'(/static/css/[^\'"]+\.css)', content)
        return list(set(chunks + main + css))
    except Exception as e:
        print(f"Could not fetch SW for chunk list: {e}")
        return []

def download(path):
    url = BASE + path
    local = DEST + path
    os.makedirs(os.path.dirname(local), exist_ok=True)
    if os.path.exists(local):
        print(f"  skip (exists): {path}")
        return True
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
        with open(local, "wb") as f:
            f.write(data)
        print(f"  OK ({len(data):,} bytes): {path}")
        return True
    except Exception as e:
        print(f"  FAIL: {path} — {e}")
        return False

print("Fetching async chunk list from service worker...")
extra = get_sw_chunks()
all_files = list(set(FILES + extra))
print(f"Total files to download: {len(all_files)}")

ok = fail = 0
for path in sorted(all_files):
    if download(path):
        ok += 1
    else:
        fail += 1
    time.sleep(0.05)

print(f"\nDone: {ok} downloaded, {fail} failed")
