/* npm t exercises/control-flow/array_to_string_test.mjs
Instructions:
– Implement array_to_string.mjs so that it passes the test.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {arrayToString} from './array_to_string.mjs';

test('arrayToString', t => {
  const CMYK = [
    'cyan',
    'magenta',
    'yellow',
    'key',
  ];
  assert.equal(arrayToString(CMYK), `
1. cyan
2. magenta
3. yellow
4. key
  `.trim());
});
