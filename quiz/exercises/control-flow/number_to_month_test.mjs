/* npm t exercises/control-flow/number_to_month_test.mjs
Instructions:
– Implement number_to_month.mjs so that it passes the test.
– Errors are thrown via: throw new Error(str)
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {numberToMonth} from './number_to_month.mjs';

test('numberToMonth', t => {
  assert.equal(numberToMonth(1), 'January');
  assert.throws(() => numberToMonth(0), /^Error: Unknown number: 0$/);
});
