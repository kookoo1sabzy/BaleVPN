//! Hand-rolled protobuf wire-format reader/writer. Ports
//! `bale-vpn-android/shared/.../ai/bale/proxy/proto/Proto.kt`
//! 1:1.
//!
//! Why hand-rolled and not `prost`: most Bale messages we touch on
//! the WS path use field tags that fall outside any documented
//! `.proto` (e.g. the 52807–52810 call-event tags inside the xC
//! union, or the wrapped-string pattern for nullable fields). The
//! reverse-engineered .proto files in `proto/` are a useful
//! reference but they're not comprehensive enough to drive
//! codegen — we need direct wire-level control to parse the
//! payloads as they actually arrive.

/// Encodes raw protobuf bytes — varints, length-delimited fields,
/// nested messages. Buffer grows on demand.
pub struct ProtoWriter {
    buf: Vec<u8>,
}

impl ProtoWriter {
    pub fn new() -> Self {
        Self { buf: Vec::with_capacity(64) }
    }

    /// Append a raw varint. Public because some fields are written
    /// without a tag (e.g. nested length prefixes).
    pub fn varint(mut self, v: u64) -> Self {
        let mut value = v;
        while value & !0x7Fu64 != 0 {
            self.buf.push(((value & 0x7F) | 0x80) as u8);
            value >>= 7;
        }
        self.buf.push((value & 0x7F) as u8);
        self
    }

    fn tag(self, field: u32, wire: u32) -> Self {
        self.varint(((field as u64) << 3) | wire as u64)
    }

    pub fn int32 (self, field: u32, v: i32)    -> Self { self.tag(field, 0).varint(v as u32 as u64) }
    pub fn int64 (self, field: u32, v: i64)    -> Self { self.tag(field, 0).varint(v as u64) }
    pub fn bool_ (self, field: u32, v: bool)   -> Self { self.tag(field, 0).varint(if v { 1 } else { 0 }) }
    pub fn string(self, field: u32, v: &str)   -> Self { self.bytes(field, v.as_bytes()) }
    pub fn bytes (mut self, field: u32, v: &[u8]) -> Self {
        self = self.tag(field, 2).varint(v.len() as u64);
        self.buf.extend_from_slice(v);
        self
    }

    pub fn build(self) -> Vec<u8> { self.buf }
}

impl Default for ProtoWriter {
    fn default() -> Self { Self::new() }
}

/// Decodes protobuf bytes. Walks the buffer one field at a time;
/// callers branch on the returned tag and dispatch to the right
/// reader method.
pub struct ProtoReader<'a> {
    buf: &'a [u8],
    pos: usize,
}

#[derive(Debug)]
pub enum ProtoError {
    Eof,
    UnsupportedWireType(u32),
    InvalidUtf8,
    TruncatedLength { need: usize, have: usize },
}

impl std::fmt::Display for ProtoError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Eof                            => f.write_str("proto: unexpected EOF"),
            Self::UnsupportedWireType(w)         => write!(f, "proto: unsupported wire type {w}"),
            Self::InvalidUtf8                    => f.write_str("proto: invalid utf-8 in string field"),
            Self::TruncatedLength { need, have } => write!(f, "proto: need {need} bytes, only {have} left"),
        }
    }
}
impl std::error::Error for ProtoError {}

impl<'a> ProtoReader<'a> {
    pub fn new(buf: &'a [u8]) -> Self { Self { buf, pos: 0 } }

    pub fn has_more(&self) -> bool { self.pos < self.buf.len() }

    /// Bytes remaining unread. Used by debug-logging code that
    /// wants to peek at the trailing payload without consuming
    /// it.
    pub fn remaining(&self) -> &'a [u8] {
        if self.pos < self.buf.len() { &self.buf[self.pos..] } else { &[] }
    }

    pub fn varint(&mut self) -> Result<u64, ProtoError> {
        let mut result = 0u64;
        let mut shift  = 0u32;
        while self.pos < self.buf.len() {
            let b = self.buf[self.pos];
            self.pos += 1;
            result |= ((b & 0x7F) as u64) << shift;
            if b & 0x80 == 0 {
                return Ok(result);
            }
            shift += 7;
            if shift >= 64 { return Err(ProtoError::Eof); }
        }
        Err(ProtoError::Eof)
    }

    /// Returns `(field, wire_type)`.
    pub fn tag(&mut self) -> Result<(u32, u32), ProtoError> {
        let v = self.varint()?;
        Ok(((v >> 3) as u32, (v & 7) as u32))
    }

    pub fn bytes(&mut self) -> Result<&'a [u8], ProtoError> {
        let len = self.varint()? as usize;
        let end = self.pos.checked_add(len).ok_or(ProtoError::Eof)?;
        if end > self.buf.len() {
            return Err(ProtoError::TruncatedLength { need: len, have: self.buf.len() - self.pos });
        }
        let out = &self.buf[self.pos..end];
        self.pos = end;
        Ok(out)
    }

    pub fn string(&mut self) -> Result<&'a str, ProtoError> {
        std::str::from_utf8(self.bytes()?).map_err(|_| ProtoError::InvalidUtf8)
    }

    /// Skip a field whose contents we don't care about. Wire types
    /// 3/4 (start/end-group) are deprecated since proto2 and not
    /// emitted by Bale — we error rather than silent-loop on them
    /// because a future field with one would otherwise hang the
    /// reader.
    pub fn skip(&mut self, wire: u32) -> Result<(), ProtoError> {
        match wire {
            0 => { self.varint()?; Ok(()) }
            1 => { self.advance(8) }
            2 => { let n = self.varint()? as usize; self.advance(n) }
            5 => { self.advance(4) }
            _ => Err(ProtoError::UnsupportedWireType(wire)),
        }
    }

    fn advance(&mut self, n: usize) -> Result<(), ProtoError> {
        let end = self.pos.checked_add(n).ok_or(ProtoError::Eof)?;
        if end > self.buf.len() {
            return Err(ProtoError::TruncatedLength { need: n, have: self.buf.len() - self.pos });
        }
        self.pos = end;
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn round_trip_int32() {
        let buf = ProtoWriter::new().int32(1, 42).int32(2, -1).build();
        let mut r = ProtoReader::new(&buf);
        let (f, w) = r.tag().unwrap();
        assert_eq!((f, w), (1, 0));
        assert_eq!(r.varint().unwrap(), 42);

        let (f, w) = r.tag().unwrap();
        assert_eq!((f, w), (2, 0));
        // -1 encoded as u32 then varint = 0xFFFFFFFF = 4294967295
        assert_eq!(r.varint().unwrap(), 0xFFFF_FFFF);
        assert!(!r.has_more());
    }

    #[test]
    fn round_trip_string() {
        let buf = ProtoWriter::new().string(3, "hello").build();
        let mut r = ProtoReader::new(&buf);
        let (f, w) = r.tag().unwrap();
        assert_eq!((f, w), (3, 2));
        assert_eq!(r.string().unwrap(), "hello");
    }

    #[test]
    fn round_trip_nested() {
        let inner = ProtoWriter::new().int32(1, 7).build();
        let outer = ProtoWriter::new().bytes(2, &inner).build();
        let mut r = ProtoReader::new(&outer);
        let (f, w) = r.tag().unwrap();
        assert_eq!((f, w), (2, 2));
        let nested = r.bytes().unwrap();
        let mut nr = ProtoReader::new(nested);
        let (f, _) = nr.tag().unwrap();
        assert_eq!(f, 1);
        assert_eq!(nr.varint().unwrap(), 7);
    }

    #[test]
    fn round_trip_bool() {
        let buf = ProtoWriter::new().bool_(1, true).bool_(2, false).build();
        let mut r = ProtoReader::new(&buf);
        let _ = r.tag().unwrap(); assert_eq!(r.varint().unwrap(), 1);
        let _ = r.tag().unwrap(); assert_eq!(r.varint().unwrap(), 0);
    }

    #[test]
    fn varint_multibyte() {
        // 300 = 0xAC 0x02 in varint
        let buf = ProtoWriter::new().int32(1, 300).build();
        // tag (1<<3 | 0) = 0x08, then 0xAC 0x02
        assert_eq!(buf, vec![0x08, 0xAC, 0x02]);
        let mut r = ProtoReader::new(&buf);
        let _ = r.tag().unwrap();
        assert_eq!(r.varint().unwrap(), 300);
    }

    #[test]
    fn skip_works_for_each_wire_type() {
        // tag(varint), tag(string), tag(varint=keep)
        let buf = ProtoWriter::new()
            .int32(1, 99)
            .string(2, "discard me")
            .int32(3, 77)
            .build();
        let mut r = ProtoReader::new(&buf);
        let (_, w) = r.tag().unwrap(); r.skip(w).unwrap();
        let (_, w) = r.tag().unwrap(); r.skip(w).unwrap();
        let (f, _) = r.tag().unwrap();
        assert_eq!(f, 3);
        assert_eq!(r.varint().unwrap(), 77);
    }

    #[test]
    fn skip_unsupported_wire_errors() {
        let mut r = ProtoReader::new(&[]);
        assert!(matches!(r.skip(3), Err(ProtoError::UnsupportedWireType(3))));
        assert!(matches!(r.skip(4), Err(ProtoError::UnsupportedWireType(4))));
    }

    #[test]
    fn truncated_length_errors() {
        // Tag (1, length-delimited) + length=10 but only 2 data bytes
        let buf = vec![0x0A, 0x0A, 0x01, 0x02];
        let mut r = ProtoReader::new(&buf);
        let _ = r.tag().unwrap();
        assert!(matches!(r.bytes(), Err(ProtoError::TruncatedLength { .. })));
    }
}
