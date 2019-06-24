/* npm t exercises/quizzes-exercises/first_module_test.mjs
Instructions:
- Run the test (fails)
- Change first_module.mjs so that the test passes.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {hello} from './first_module.mjs';

test('First exercise', t => {
  assert.equal(hello('world'), 'Hello world!');
  assert.equal(hello('Jane'), 'Hello Jane!');
  assert.equal(hello('John'), 'Hello John!');
  assert.equal(hello(''), 'Hello !');
});
