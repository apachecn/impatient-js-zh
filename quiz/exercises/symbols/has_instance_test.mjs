/* npm t exercises/symbols/has_instance_test.mjs
Instructions:
- Implement has_instance.mjs so that the test passes.
– Use the property key Symbol.hasInstance
– Syntax for creating the class PrimitiveString: check the material on symbols
*/

import test from 'ava';
import {strict as assert} from 'assert';

import { PrimitiveString } from './has_instance.mjs';

test('Symbol.hasInstance', t => {
  assert.equal('abc' instanceof String, false);
  assert.equal(new String('abc') instanceof String, true);

  assert.equal('abc' instanceof PrimitiveString, true);
  assert.equal(new String('abc') instanceof PrimitiveString, false);

  assert.equal(123 instanceof PrimitiveString, false);
});
