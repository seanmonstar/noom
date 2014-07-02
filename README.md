# noom

Super simple Enums.

```js
var noom = require('noom');

var Color = noom('RED', 'GREEN', 'BLUE');

var red = Color.RED;
assert.equal(red, Color.RED);
assert.notEqual(red, 'RED'); //strings are inevitable typos
assert(red instanceof Color);
```
