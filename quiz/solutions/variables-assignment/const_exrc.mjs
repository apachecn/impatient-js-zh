import test from 'ava';
import {strict as assert} from 'assert';

test('const', t => {
    const x = 3;
    assert.equal(x, 3);
    {
        const x = 12;
        assert.equal(x, 12);
    }
    assert.equal(x, 3);
});
