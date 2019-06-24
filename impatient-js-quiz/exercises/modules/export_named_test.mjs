/* npm t exercises/modules/export_named_test.mjs
Instructions:
– Create export_named.mjs so that this test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {func} from './export_named.mjs';

test('export_named', t => {
    assert.equal(func(), 'hello');
});
