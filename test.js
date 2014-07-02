/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const assert = require('assert');
const noom = require('./');

var Color = noom('RED', 'GREEN', 'BLUE');
var c = Color.RED;

assert.equal(c, Color.RED);
assert.notEqual(c, Color.GREEN);
assert.notStrictEqual(c, 'RED');
assert.equal(c + '', 'RED');
assert(c instanceof Color);
assert.throws(Color, /^Error: Enums are frozen$/);
