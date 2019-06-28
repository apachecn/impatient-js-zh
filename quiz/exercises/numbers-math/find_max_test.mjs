/* npm t exercises/numbers-math/find_max_test.mjs
Instructions:
- Create the file find_max.mjs
- Ensure this test passes
– Use function addAll() from this file as a template.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {findMax} from './find_max.mjs';

test('findMax', t => {
	assert.equal(findMax([]), -Infinity);
	assert.equal(findMax([8]), 8);
	assert.equal(findMax([-20, -3, -15]), -3);
	assert.equal(findMax([100, 200, 5]), 200);
});

//----------

function addAll(nums) {
	let result = 0;
	for (const num of nums) {
		result += num;
	}
	return result;
}

test('addAll', t => {
	assert.equal(addAll([]), 0);
	assert.equal(addAll([4]), 4);
	assert.equal(addAll([1, 2]), 3);
	assert.equal(addAll([100, 200, 500]), 800);
});
