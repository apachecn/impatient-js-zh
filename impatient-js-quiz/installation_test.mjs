// npm t installation_test.mjs

import test from 'ava';
import {strict as assert} from 'assert';

const MIN_VERSION = [12, 2, 0];

function greaterOrEqual(numArr1, numArr2) {
  const maxLen = Math.max(numArr1.length, numArr2.length);
  for (let i=0; i<maxLen; i++) {
    // Missing parts are considered to be zero.
    let num1 = numArr1[i] || 0;
    let num2 = numArr2[i] || 0;
    if (num1 < num2) {
      return false;
    }
    if (num1 > num2) {
      return true;
    }
  }
  // The arrays are “equal”
  return true
}

test('Do assertions work?', t => {
  // Assert something simple
  assert.equal(1+1, 2);
});

test('Does greaterOrEqual() work?', () => {
  assert.equal(greaterOrEqual([1,2,3], [1,2]), true);
  assert.equal(greaterOrEqual([1,2], [1,2,3]), false);

  assert.equal(greaterOrEqual([4,0,5], [4,0,4]), true);
  assert.equal(greaterOrEqual([4,0,5], [4,0,5]), true);
  assert.equal(greaterOrEqual([4,0,5], [4,0,6]), false);
  
  assert.equal(greaterOrEqual([4,0,5], [3,0,0]), true);
  assert.equal(greaterOrEqual([4,0,5], [5,0,0]), false);
});

test(`Is Node.js version at least ${MIN_VERSION.join('.')}?`, () => {
  const installedVersionStr = process.versions.node;
  const installedVersion = installedVersionStr.split('.').map(str => Number(str));
  assert.ok(greaterOrEqual(installedVersion, MIN_VERSION),
    `Please use Node.js ${MIN_VERSION.join('.')} or later. Installed version: ${installedVersionStr}`);
});
