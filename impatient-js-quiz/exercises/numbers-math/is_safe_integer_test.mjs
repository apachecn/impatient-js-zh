/* npm t exercises/numbers-math/is_safe_integer_test.mjs
Instructions:
- Create the file is_safe_integer.mjs
- Ensure the test passes
– Don’t use Number.isInteger()
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {isSafeInteger} from './is_safe_integer.mjs';

test('Is it an integer?', t => {
  assert.equal(isSafeInteger(123), true);
  assert.equal(isSafeInteger(123.1), false);

  // We don’t want isSafeInteger() to coerce its arguments
  assert.equal(isSafeInteger('123'), false);
  assert.equal(isSafeInteger(true), false);
});

test('Is it safe?', t => {
  assert.equal(isSafeInteger(2 ** 53), false);
  assert.equal(isSafeInteger(-(2 ** 53)), false);

  assert.equal(isSafeInteger((2 ** 53)-1), true);
  assert.equal(isSafeInteger(-(2 ** 53)+1), true);

  assert.equal(isSafeInteger(0), true);
  assert.equal(isSafeInteger(5), true);
  assert.equal(isSafeInteger(-5), true);
});
