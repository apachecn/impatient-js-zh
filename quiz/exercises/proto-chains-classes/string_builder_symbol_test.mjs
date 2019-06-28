/* npm t exercises/proto-chains-classes/string_builder_symbol_test.mjs
Instructions:
- Change string_builder_symbol.mjs: use symbols for private data, not property names with underscores
- Make sure the tests still pass

Similar exercise: exercises/weakmaps/weakmaps_private_data_test.mjs
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {StringBuilder} from './string_builder_symbol.mjs';

test('Empty StringBuilder', t => {
  assert.equal(new StringBuilder().toString(), '');
});
test('Adding strings to a StringBuilder', t => {
  assert.equal(new StringBuilder().add('foo').add('bar').toString(), 'foobar');
});
test('Rule out singleton implementations', t => {
  const sb1 = new StringBuilder().add('sb1');
  const sb2 = new StringBuilder().add('sb2');
  
  assert.equal(sb1.toString(), 'sb1');
  assert.equal(sb2.toString(), 'sb2');
});
test('Is private data hidden?', t => {
  const sb = new StringBuilder();
  assert.deepEqual(Object.getOwnPropertyNames(sb), []);
});
