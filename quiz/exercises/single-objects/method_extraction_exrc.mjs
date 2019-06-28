/* npm t exercises/single-objects/method_extraction_exrc.mjs
Instructions:
- Run this test (fails)
- Change the code so that the test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

const jane = {
  first: 'Jane',
  describe() {
    return `Person named ${this.first}`;
  },
};

test('method_extraction_exrc', t => {
  const func = jane.describe;
  assert.equal(func(), 'Person named Jane');
  jane.first = 'John';
  assert.equal(func(), 'Person named John');
});
