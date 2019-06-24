import test from 'ava';
import {strict as assert} from 'assert';

test('instanceof', t => {
  assert.equal('abc' instanceof String, false);
  assert.equal(null instanceof Object, false);
  assert.equal(undefined instanceof Object, false);
  
  assert.equal([true, false] instanceof Array, true);
  assert.equal([true, false] instanceof Object, true);
  assert.equal({} instanceof Object, true);
});
