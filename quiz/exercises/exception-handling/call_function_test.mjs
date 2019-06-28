/* npm t exercises/exception-handling/call_function_test.mjs
Instructions:
– Change call_function.mjs so that it passes the test.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {callFunction} from './call_function.mjs';

test('monthToNumber', t => {
  assert.deepEqual(
    callFunction(() => { return 'abc' }),
    { success: 'abc' });
  
  const err = new Error('Failed!');
  assert.deepEqual(
    callFunction(() => { throw err }),
    { failure: err });
});
