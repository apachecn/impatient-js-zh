/* npm t exercises/numbers-math/is_odd_test.mjs
Instructions:
- Create the file is_odd.mjs
- Ensure the test passes
- Possibly useful: Math.abs()
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {isOdd} from './is_odd.mjs';

test('isOdd', t => {
	assert.equal(isOdd(3), true);
	assert.equal(isOdd(-3), true);
	assert.equal(isOdd(10001), true);

	assert.equal(isOdd(0), false);
	assert.equal(isOdd(2), false);
	assert.equal(isOdd(-2), false);
	assert.equal(isOdd(10000), false);
});
