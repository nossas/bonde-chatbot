import test from 'ava';
import app from './index';

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});