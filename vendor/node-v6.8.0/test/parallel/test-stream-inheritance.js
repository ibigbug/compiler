'use strict';
require('../common');
const assert = require('assert');
const { Readable, Writable, Duplex, Transform } = require('stream');

const readable = new Readable({ read() {} });
const writable = new Writable({ write() {} });
const duplex = new Duplex({ read() {}, write() {} });
const transform = new Transform({ transform() {} });

assert.ok(readable instanceof Readable);
assert.ok(!(writable instanceof Readable));
assert.ok(duplex instanceof Readable);
assert.ok(transform instanceof Readable);

assert.ok(!(readable instanceof Writable));
assert.ok(writable instanceof Writable);
assert.ok(duplex instanceof Writable);
assert.ok(transform instanceof Writable);

assert.ok(!(readable instanceof Duplex));
assert.ok(!(writable instanceof Duplex));
assert.ok(duplex instanceof Duplex);
assert.ok(transform instanceof Duplex);

assert.ok(!(readable instanceof Transform));
assert.ok(!(writable instanceof Transform));
assert.ok(!(duplex instanceof Transform));
assert.ok(transform instanceof Transform);
