/* npm t exercises/strings/remove_extension_test.mjs
Instructions:
- Create the file remove_extension.mjs
- Ensure this test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {removeExtension} from './remove_extension.mjs';

test('removeExtension', t => {
	assert.equal(removeExtension(''), '');
    assert.equal(removeExtension('foo.txt'), 'foo');
    assert.equal(removeExtension('foo.mjs'), 'foo');
    assert.equal(removeExtension('foo.tar.gz'), 'foo.tar');
    assert.equal(removeExtension('foo'), 'foo');
    assert.equal(removeExtension('.foo'), '');
});
