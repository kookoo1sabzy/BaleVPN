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
    // fromObject converts strings/numbers for int64 fields automatically
    const msg = Type.fromObject(payload);
    const err = Type.verify(msg);
    if (err) throw new Error(`encode ${typeName}: ${err}`);
    return Buffer.from(Type.encode(msg).finish());
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
