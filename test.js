import test from 'ava';
require('./index.js');

test('arrays are equal',t => {
    t.deepEqual([1, 2], [1, 2]);
});
