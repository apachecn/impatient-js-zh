export const arrayWithObjectsToTable = (persons) =>
`<table>
${persons.map(
  ({last,first}) =>
    `  <tr><td>${last}</td><td>${first}</td></tr>`)
  .join('\n')}
</table>`;

//---------- Bonus

export const arrayToUnorderedListWithEscaping = (items) =>
`<ul>
${items.map(item => `  <li>${escapeHtml(item)}</li>`).join('\n')}
</ul>`;

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;') // first!
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/`/g, '&#96;');
}