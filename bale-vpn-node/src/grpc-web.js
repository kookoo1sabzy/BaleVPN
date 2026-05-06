'use strict';

// gRPC-web framing + helpers for HTTPS POSTs to api.bale.ai. Used by the
// auth flow, contact search, and self-info lookup. The WebSocket-based RPC
// path lives in bale-ws.js — this file is purely for the unary HTTPS routes.

const https = require('https');
const { GRPC_HOST } = require('./constants');

// Frame format: [0x00][4-byte BE length][proto payload]
// Trailer frame: [0x80][4-byte BE length][ascii "grpc-status: N\r\n..."]

function grpcEncode(buf) {
    const out = Buffer.allocUnsafe(5 + buf.length);
    out[0] = 0;
    out.writeUInt32BE(buf.length, 1);
    Buffer.from(buf).copy(out, 5);
    return out;
}

function grpcDecode(buf) {
    let pos = 0, data = null, status = 0, grpcMsg = '';
    while (pos + 5 <= buf.length) {
        const flag = buf[pos];
        const len  = buf.readUInt32BE(pos + 1);
        pos += 5;
        const frame = buf.slice(pos, pos + len);
        pos += len;
        if (flag & 0x80) {
            const trailer = frame.toString('utf8');
            const sm = trailer.match(/grpc-status:\s*(\d+)/);
            if (sm) status = parseInt(sm[1]);
            const mm = trailer.match(/grpc-message:\s*([^\r\n]+)/);
            if (mm) try { grpcMsg = decodeURIComponent(mm[1].trim()); } catch { grpcMsg = mm[1].trim(); }
        } else {
            data = frame;
        }
    }
    if (status !== 0) {
        const err = new Error(grpcMsg || `gRPC error ${status}`);
        err.grpcStatus  = status;
        err.grpcMessage = grpcMsg;
        throw err;
    }
    return data || Buffer.alloc(0);
}

function grpcCall(service, method, payloadBuf, token) {
    return new Promise((resolve, reject) => {
        const body    = grpcEncode(Buffer.from(payloadBuf));
        const headers = {
            'Content-Type':   'application/grpc-web+proto',
            'Content-Length': body.length,
            'X-Grpc-Web':     '1',
            'Origin':         'https://web.bale.ai',
        };
        if (token) headers['Cookie'] = `access_token=${token}`;
        const req = https.request({
            hostname: GRPC_HOST,
            path: `/${service}/${method}`,
            method: 'POST',
            headers,
        }, res => {
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end',  () => {
                try { resolve(grpcDecode(Buffer.concat(chunks))); }
                catch (e) { reject(e); }
            });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

// Decode a JWT payload (base64url JSON between the two '.' separators). Used
// by loadSelf() to extract the account owner's user ID without an extra RPC.
function decodeJwtPayload(jwt) {
    if (!jwt) return null;
    const parts = jwt.split('.');
    if (parts.length < 2) return null;
    const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
    try { return JSON.parse(Buffer.from(padded, 'base64').toString('utf8')); }
    catch { return null; }
}

// Exchange auth JWT for the access_token cookie value
function fetchAccessToken(jwt) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: GRPC_HOST,
            path:     '/set-cookie/',
            method:   'GET',
            headers:  { Authorization: `Bearer ${jwt}` },
        }, res => {
            const cookies = [].concat(res.headers['set-cookie'] || []);
            for (const c of cookies) {
                const m = c.match(/access_token=([^;]+)/);
                if (m) { resolve(m[1]); return; }
            }
            res.resume();
            res.on('end', () => resolve(null));
        });
        req.on('error', reject);
        req.end();
    });
}

module.exports = { grpcEncode, grpcDecode, grpcCall, decodeJwtPayload, fetchAccessToken };
