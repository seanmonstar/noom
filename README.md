# noom

Super simple Enums.

```js
var noom = require('noom');

var Color = noom('RED', 'GREEN', 'BLUE');

var red = Color.RED;
assert.equal(red, Color.RED);
assert.notStrictEqual(red, 'RED'); //careful about type conversion ==
assert.equal(red + '', 'RED');
assert(red instanceof Color);
```
