import test from 'ava';
import {strict as assert} from 'assert';

const jane = {
  first: 'Jane',
  describe() {
    return `Person named ${this.first}`;
  },
};

test('method_extraction_exrc', t => {
  const func = jane.describe.bind(jane);
  assert.equal(func(), 'Person named Jane');
  jane.first = 'John';
  assert.equal(func(), 'Person named John');
});
