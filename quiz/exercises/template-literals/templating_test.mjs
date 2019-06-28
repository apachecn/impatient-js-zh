/* npm t exercises/template-literals/templating_test.mjs
Instructions: Implement templating.mjs
– Use the HTML templating technique as described in the slides.
– You don’t need to escape the template data.
*/

import test from 'ava';
import {strict as assert} from 'assert';

import {arrayWithObjectsToTable, arrayToUnorderedListWithEscaping} from './templating.mjs'

test('arrayWithObjectsToTable', t => {
  const data = [
    { first: 'Lars', last: 'Croft' },
    { first: 'Jane', last: 'Bond' },
  ];
  // Lenient testing via .trim()
  assert.equal(arrayWithObjectsToTable(data).trim(),
`<table>
  <tr><td>Croft</td><td>Lars</td></tr>
  <tr><td>Bond</td><td>Jane</td></tr>
</table>`);
});

//---------- Bonus (remove "#bonus" to activate)

test('arrayToUnorderedListWithEscaping #bonus', t => {
  const data = [
    '<first item>',
    'second item',
  ];
  assert.equal(arrayToUnorderedListWithEscaping(data).trim(), `
<ul>
  <li>&lt;first item&gt;</li>
  <li>second item</li>
</ul>
  `.trim());
});
