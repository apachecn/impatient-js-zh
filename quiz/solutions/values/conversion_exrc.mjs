import test from 'ava';
import {strict as assert} from 'assert';

test('conversion', t => {
  assert.equal(Boolean(5), true);
  assert.equal(Number('7'), 7);
  assert.equal(String(21), '21');
});
