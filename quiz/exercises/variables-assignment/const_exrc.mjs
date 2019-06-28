/* npm t exercises/variables-assignment/const_exrc.mjs
Instructions:
- Run this test (it fails).
- Insert a single(!) const statement so that the test passes.
*/

import test from 'ava';
import {strict as assert} from 'assert';

test('const', t => {
    const x = 3;
    assert.equal(x, 3);
    {
        assert.equal(x, 12);
    }
    assert.equal(x, 3);
});
