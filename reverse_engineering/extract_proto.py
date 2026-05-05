"""
Extracts protobuf message definitions from bale web app webpack bundles
and generates .proto files + a Node.js package.
"""
import re, os, json, textwrap

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT  = os.path.dirname(SCRIPT_DIR)  # reverse_engineering/ → repo root
SRC_FILE   = os.path.join(SCRIPT_DIR, 'static', 'js', 'async', '5100.bbddcd29.js')
OUT_DIR    = os.path.join(REPO_ROOT, 'bale-vpn-node')

with open(SRC_FILE) as f:
    src = f.read()

# ─── helpers ──────────────────────────────────────────────────────────────────

def camel(s):
    return s[0].upper() + s[1:] if s else s

def wire_to_proto(wire_type_name):
    return {
        'int32': 'int32', 'int64': 'int64', 'uint32': 'uint32', 'uint64': 'uint64',
        'sint32': 'sint32', 'sint64': 'sint64', 'bool': 'bool',
        'string': 'string', 'bytes': 'bytes', 'float': 'float', 'double': 'double',
    }.get(wire_type_name, wire_type_name)

# ─── split file into webpack modules ──────────────────────────────────────────

mod_starts = list(re.finditer(r'(\d{4,6}): function\(e, i, n\)', src))

def module_src(idx):
    s = mod_starts[idx].start()
    e = mod_starts[idx+1].start() if idx+1 < len(mod_starts) else len(src)
    return src[s:e]

# ─── extract field defs from an encode() function body ───────────────────────

def extract_fields(encode_body):
    fields = []

    # Pattern 1: scalar field
    # e.g.  0 !== e.rid && i.uint32(16).int64(e.rid)
    # or    "" !== e.name && i.uint32(26).string(e.name)
    for m in re.finditer(
        r'(?:void 0 !==|0 !==|"" !==|"0" !==|!1 !==|false !==)\s*e\.(\w+)\s*&&\s*'
        r'(?:\w+)\.uint32\((\d+)\)\.(\w+)\(e\.\w+\)',
        encode_body
    ):
        fname, tag, ftype = m.group(1), int(m.group(2)), m.group(3)
        fno = tag >> 3
        if ftype not in ('fork', 'bytes'):  # fork = submessage, handle separately
            fields.append({'no': fno, 'name': fname, 'type': wire_to_proto(ftype), 'repeated': False})

    # Pattern 2: scalar field (alternative form without guard)
    # e.g.  i.uint32(8).int32(e.id)  (for required-ish fields)
    for m in re.finditer(
        r'(?<![.\w])(?:\w+)\.uint32\((\d+)\)\.(\w+)\(e\.(\w+)\)',
        encode_body
    ):
        tag, ftype, fname = int(m.group(1)), m.group(2), m.group(3)
        fno = tag >> 3
        if ftype in ('int32','int64','uint32','uint64','sint32','sint64',
                     'bool','string','bytes','float','double'):
            if not any(f['no'] == fno for f in fields):
                fields.append({'no': fno, 'name': fname, 'type': wire_to_proto(ftype), 'repeated': False})

    # Pattern 3: nested message field
    # e.g.  void 0 !== e.peer && SomeClass.encode(e.peer, i.uint32(10).fork()).join()
    for m in re.finditer(
        r'void 0 !== e\.(\w+) &&\s*[\w.]+\.encode\(e\.\w+,\s*(?:\w+)\.uint32\((\d+)\)\.fork\(\)',
        encode_body
    ):
        fname, tag = m.group(1), int(m.group(2))
        fno = tag >> 3
        if not any(f['no'] == fno for f in fields):
            fields.append({'no': fno, 'name': fname, 'type': 'bytes', 'repeated': False, 'message': True})

    # Pattern 4: repeated scalar
    # e.g.  for (let n of e.items) i.uint32(58).string(n)
    for m in re.finditer(
        r'for\s*\(let \w+ of e\.(\w+)\)\s*(?:\w+)\.uint32\((\d+)\)\.(\w+)\(\w+\)',
        encode_body
    ):
        fname, tag, ftype = m.group(1), int(m.group(2)), m.group(3)
        fno = tag >> 3
        if ftype in ('int32','int64','uint32','uint64','sint32','sint64',
                     'bool','string','bytes','float','double'):
            if not any(f['no'] == fno for f in fields):
                fields.append({'no': fno, 'name': fname, 'type': wire_to_proto(ftype), 'repeated': True})

    # Pattern 5: repeated message
    # e.g.  for (let n of e.items) SomeClass.encode(n, i.uint32(10).fork()).join()
    for m in re.finditer(
        r'for\s*\(let \w+ of (?:[^)]+,\s*)?e\.(\w+)\)\s*[\w.]+\.encode\(\w+,\s*(?:\w+)\.uint32\((\d+)\)\.fork\(\)',
        encode_body
    ):
        fname, tag = m.group(1), int(m.group(2))
        fno = tag >> 3
        if not any(f['no'] == fno for f in fields):
            fields.append({'no': fno, 'name': fname, 'type': 'bytes', 'repeated': True, 'message': True})

    return sorted(fields, key=lambda x: x['no'])

# ─── find codec blocks in a module ────────────────────────────────────────────

def find_codecs(mod):
    """Return dict of varName -> fields list"""
    codecs = {}
    # Each codec is an object literal with encode(...) and decode(...) methods
    for m in re.finditer(
        r'(?:let |var |,\s*)(\w+)\s*=\s*\{[^{}]*encode\(e\)\s*\{(.*?)(?=,\s*decode\()',
        mod, re.DOTALL
    ):
        var_name = m.group(1)
        encode_body = m.group(2)
        fields = extract_fields(encode_body)
        if var_name not in ('exports', 'module') and len(var_name) <= 4:
            codecs[var_name] = fields
    return codecs

# ─── extract method->codec mappings ───────────────────────────────────────────

def extract_methods(mod):
    methods = []
    for m in re.finditer(
        r'methodName:\s*"([^"]+)".*?'
        r'serializeBinary\(\)\s*\{[^}]+?return\s+([\w.]+)\.encode.*?'
        r'deserializeBinary\(e\)\s*\{[^}]+?(?:let\s+\w+\s*=\s*)?([\w.]+)\.decode',
        mod, re.DOTALL
    ):
        methods.append({
            'name': m.group(1),
            'req_codec': m.group(2),
            'resp_codec': m.group(3),
        })
    return methods

# ─── build message registry per service ───────────────────────────────────────

services = {}

for idx in range(len(mod_starts)):
    mod = module_src(idx)
    svc_m = re.search(r'serviceName:\s*"([^"]+)"', mod)
    if not svc_m:
        continue
    svc_name = svc_m.group(1)
    methods   = extract_methods(mod)
    codecs    = find_codecs(mod)
    messages  = {}

    for method in methods:
        req_var  = method['req_codec']
        resp_var = method['resp_codec']
        req_name  = f"{method['name']}Request"
        resp_name = f"{method['name']}Response"

        if req_var in codecs:
            messages[req_name]  = codecs[req_var]
        if resp_var in codecs:
            messages[resp_name] = codecs[resp_var]

    services[svc_name] = {
        'methods':  methods,
        'messages': messages,
    }

# ─── generate .proto files ────────────────────────────────────────────────────

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(f"{OUT_DIR}/proto", exist_ok=True)
os.makedirs(f"{OUT_DIR}/src",   exist_ok=True)

for svc_fqn, info in services.items():
    # e.g. "bale.messaging.v2.Messaging" -> package="bale.messaging.v2", service="Messaging"
    parts   = svc_fqn.rsplit('.', 1)
    package = parts[0]
    svc     = parts[1]
    # filename: messaging_v2.proto
    pkg_slug = package.replace('.', '_')
    proto_file = f"{OUT_DIR}/proto/{pkg_slug}.proto"

    lines = [
        'syntax = "proto3";',
        f'package {package};',
        '',
        f'// Service: {svc_fqn}',
        f'service {svc} {{',
    ]
    for m in info['methods']:
        req  = m['name'] + 'Request'
        resp = m['name'] + 'Response'
        lines.append(f'  rpc {m["name"]} ({req}) returns ({resp});')
    lines += ['}', '']

    # messages
    for msg_name, fields in info['messages'].items():
        lines.append(f'message {msg_name} {{')
        if not fields:
            lines.append('  // (no fields extracted — empty or complex message)')
        for fld in fields:
            rep = 'repeated ' if fld.get('repeated') else ''
            typ = 'bytes' if fld.get('message') else fld['type']
            lines.append(f'  {rep}{typ} {fld["name"]} = {fld["no"]};')
        lines.append('}')
        lines.append('')

    # collect all message names referenced in the service but not yet defined
    defined   = set(info['messages'].keys())
    referenced = set()
    for m in info['methods']:
        referenced.add(m['name'] + 'Request')
        referenced.add(m['name'] + 'Response')
    for missing in sorted(referenced - defined):
        lines.append(f'message {missing} {{')
        lines.append(f'  // fields not extracted (shared/external type)')
        lines.append('}')
        lines.append('')

    with open(proto_file, 'w') as f:
        f.write('\n'.join(lines))
    print(f"Written: {proto_file}")

# ─── generate Node.js index.js using protobufjs ───────────────────────────────

# package.json
pkg = {
    "name": "bale-proto",
    "version": "1.0.0",
    "description": "Bale messenger protobuf message codecs",
    "main": "src/index.js",
    "scripts": {
        "build": "npx pbjs -t static-module -w commonjs -o src/messages.js proto/*.proto && npx pbts -o src/messages.d.ts src/messages.js"
    },
    "dependencies": {
        "protobufjs": "^7.4.0"
    }
}
with open(f"{OUT_DIR}/package.json", 'w') as f:
    json.dump(pkg, f, indent=2)

# src/index.js  — thin re-export wrapper
svc_exports = []
for svc_fqn in services:
    parts   = svc_fqn.rsplit('.', 1)
    package = parts[0]
    pkg_slug = package.replace('.', '_')
    svc_exports.append(f"// {svc_fqn}")

index_js = textwrap.dedent("""\
    'use strict';
    /**
     * Bale messenger protobuf codecs.
     * Run `npm run build` first to compile .proto files into src/messages.js.
     * Then import: const { root } = require('./src');
     */
    const protobuf = require('protobufjs');
    const path = require('path');

    const root = new protobuf.Root();
    const protoDir = path.join(__dirname, '..', 'proto');
    const fs = require('fs');

    const protoFiles = fs.readdirSync(protoDir).filter(f => f.endsWith('.proto'));
    protoFiles.forEach(f => root.loadSync(path.join(protoDir, f)));

    /**
     * Encode a message.
     * @param {string} typeName  fully-qualified proto type e.g. "bale.messaging.v2.SendMessageRequest"
     * @param {object} payload   plain JS object matching the message fields
     * @returns {Buffer}
     */
    function encode(typeName, payload) {
        const Type = root.lookupType(typeName);
        const err = Type.verify(payload);
        if (err) throw new Error(`encode ${typeName}: ${err}`);
        return Buffer.from(Type.encode(Type.create(payload)).finish());
    }

    /**
     * Decode a message from a Buffer / Uint8Array.
     * @param {string}            typeName  e.g. "bale.messaging.v2.SendMessageResponse"
     * @param {Buffer|Uint8Array} bytes
     * @returns {object}
     */
    function decode(typeName, bytes) {
        const Type = root.lookupType(typeName);
        return Type.toObject(Type.decode(bytes), { longs: String, enums: String, bytes: String });
    }

    module.exports = { root, encode, decode };
""")
with open(f"{OUT_DIR}/src/index.js", 'w') as f:
    f.write(index_js)

print(f"\nNode.js package written to: {OUT_DIR}")
print(f"Proto files: {len(services)}")
print(f"Messages extracted: {sum(len(v['messages']) for v in services.values())}")
