/* npm t exercises/proto-chains-classes/color_point_class_test.mjs
Instructions:
- Create the file color_point_class.mjs
- Ensure the test passes
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {Point} from './point_class.mjs';
import {ColorPoint} from './color_point_class.mjs';

test('Class ColorPoint', t => {
  const cpt = new ColorPoint(4, 7, 'red');
  assert.ok(cpt instanceof Point);
  assert.ok(cpt instanceof ColorPoint);
  assert.equal(cpt.toString(), `(4, 7) in red`);
});
