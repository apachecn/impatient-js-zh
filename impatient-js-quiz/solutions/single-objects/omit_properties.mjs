export function omitProperties(object, ...keys) {
  const filteredEntries = Object.entries(object)
    .filter(entry => !keys.includes(entry[0]));
  return Object.fromEntries(filteredEntries);
}
