/* npm t exercises/values/typeof_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

test('typeof', t => {
  assert.equal(typeof null, '???');
  assert.equal(typeof undefined, '???');
  
  assert.equal(typeof 123, '???');
  assert.equal(typeof 'a', '???');
  assert.equal(typeof "abc", '???');
  
  assert.equal(typeof {}, '???');
  assert.equal(typeof function () {}, '???');
  assert.equal(typeof [], '???');
});
