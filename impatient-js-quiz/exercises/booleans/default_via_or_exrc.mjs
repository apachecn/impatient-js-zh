/* npm t exercises/booleans/default_via_or_exrc.mjs
Instructions:
- Run test (it succeeds).
- Change getFilename() so that it only contains a return of an expression with the || operator.
- Run the test again, it should still succeed.
*/

import test from 'ava';
import {strict as assert} from 'assert';

function getFilename(options) {
    if (options.filename) {
        return options.filename;
    } else {
        return 'Untitled';
    }
}

test('Default via ||', t => {
    assert.equal(getFilename({}), 'Untitled'); // empty object
    assert.equal(getFilename({filename: 'foo.txt'}), 'foo.txt');
});
