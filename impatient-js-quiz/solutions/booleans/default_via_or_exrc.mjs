import test from 'ava';
import {strict as assert} from 'assert';

function getFilename(options) {
    return options.filename || 'Untitled';
}

test('Default via ||', t => {
    assert.equal(getFilename({}), 'Untitled'); // empty object
    assert.equal(getFilename({filename: 'foo.txt'}), 'foo.txt');
});
