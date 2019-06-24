/* npm t exercises/proto-chains-classes/point_class_test.mjs
Instructions:
- Create the file point_class.mjs
- Ensure the test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {Point} from './point_class.mjs';

test('Class Point', t => {
  const pt = new Point(4, 7);
  assert.equal(pt.x, 4);
  assert.equal(pt.y, 7);
  assert.equal(pt.dist(), Math.sqrt(4**2 + 7**2));
  assert.equal(pt.toString(), `(4, 7)`);
});
