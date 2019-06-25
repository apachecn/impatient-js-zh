/* npm t exercises/callables/named_parameters_test.mjs
Instructions:
- Change the ES5 code in named_parameters.mjs so that it uses ES6 and destructuring
- Make sure the tests still pass
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {handleNamedParameters} from './named_parameters.mjs';

test('All named parameters', t => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2, color: 'red' }),
        [1, 2, 'red']);
});

test('Omitting named parameters', t => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2 }),
        [1, 2, 'black']);
    assert.deepEqual(
        handleNamedParameters({ color: 'red' }),
        [0, 0, 'red']);
    
    assert.deepEqual(
        handleNamedParameters({}),
        [0, 0, 'black']);
});

test('Omitting named parameter object', t => {
    assert.deepEqual(
        handleNamedParameters(),
        [0, 0, 'black']);    
});
