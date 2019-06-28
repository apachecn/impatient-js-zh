/* npm t exercises/modules/export_default_test.mjs
Instructions:
– Create export_default.mjs so that this test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

import func from './export_default.mjs';

test('export_default', t => {
    assert.equal(func(), 'hello');
});
