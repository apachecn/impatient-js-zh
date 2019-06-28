/* npm t exercises/values/is_object_test.mjs
Instructions:
- Run the test (fails).
- Change is_object.mjs so that the test passes.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {isObject} from './is_object.mjs';

test('isObject', t => {
  assert.equal(isObject(undefined), false);
  assert.equal(isObject(null), false);
  assert.equal(isObject(true), false);
  assert.equal(isObject(123), false);
  assert.equal(isObject('abc'), false);

  assert.equal(isObject(function () {}), true);
  assert.equal(isObject({}), true);
  assert.equal(isObject([]), true);
});
