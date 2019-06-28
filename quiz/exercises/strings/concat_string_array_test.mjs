/* npm t exercises/strings/concat_string_array_test.mjs
Instructions:
- Create the file concat_string_array.mjs
- Ensure this test passes
– Use function logStringArray() from this file as a template.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {concatStringArray} from './concat_string_array.mjs';

test('concatStringArray', t => {
  assert.equal(concatStringArray([]), '');
  assert.equal(concatStringArray(['abc']), 'abc');
  assert.equal(concatStringArray(['x', 'y', 'z']), 'xyz');
});

//----------

function logStringArray(stringArray) {
  for (const str of stringArray) {
    console.log(str);
  }
}
