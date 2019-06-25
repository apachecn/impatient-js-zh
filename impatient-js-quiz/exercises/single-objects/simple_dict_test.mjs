/* npm t exercises/single-objects/simple_dict_test.mjs
Instructions:
- Implement simple_dict.mjs so that the test passes.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import { createDict, setValue, getValue, hasKey, getKeys } from './simple_dict.mjs';

test('updateProperty: update existing property', t => {
  const dict = createDict();
  
  setValue(dict, '__proto__', 'abc');
  assert.equal(getValue(dict, '__proto__'), 'abc');
  assert.ok(hasKey(dict, '__proto__'));

  setValue(dict, 'foo', 123);
  assert.equal(getValue(dict, 'foo'), 123);
  assert.ok(hasKey(dict, 'foo'));
  
  assert.deepEqual(hasKey(dict, 'toString'), false);
  
  // Keys are listed in creation order!
  assert.deepEqual(getKeys(dict), ['__proto__', 'foo']);
});
