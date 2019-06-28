/* npm t exercises/single-objects/update_name_test.mjs
Instructions:
- Create the file update_name.mjs so that the tests pass.
- Use spreading.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {updateName} from './update_name.mjs';

test('updateName: update existing property', t => {
  const input = { name: 'John', age: 54 };
  const output = updateName(input, 'Jane');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Jane', age: 54 });
});

test('updateName: add new property', t => {
  const input = {};
  const output = updateName(input, 'Rumpelstiltskin');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Rumpelstiltskin' });
});
