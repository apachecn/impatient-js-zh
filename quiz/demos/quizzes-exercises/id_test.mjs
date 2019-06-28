// npm t demos/quizzes-exercises/id_test.mjs

import test from 'ava';
import {strict as assert} from 'assert';
import {id} from './id.mjs';

test('My test', t => {
  assert.equal(id('abc'), 'abc');
});
