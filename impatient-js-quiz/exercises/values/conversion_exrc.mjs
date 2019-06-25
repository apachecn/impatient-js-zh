/* npm t exercises/values/conversion_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test succeeds
*/

import test from 'ava';
import {strict as assert} from 'assert';

test('conversion', t => {
  assert.equal(Boolean(5), '???');
  assert.equal(Number('7'), '???');
  assert.equal(String(21), '???');
});
