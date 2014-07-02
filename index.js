/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function variant(klass, name) {
  var kind = function(){};
  kind.prototype = Object.create(klass.prototype);
  kind.prototype.toString = function() { return name; };
  kind.prototype.toJSON = function() { return name; };
  Object.freeze(kind.prototype);
  return Object.freeze(new kind());
}

function noom() {
  var enoom = function noom() { throw new Error('Enums are frozen'); };
  for (var i = 0, len = arguments.length; i < len; i++) {
    var name = arguments[i];
    if (typeof name !== 'string') {
      throw new TypeError('Enum variants must have a string name');
    }
    enoom[name] = variant(enoom, name);
  }
  return enoom;
}

module.exports = noom;
