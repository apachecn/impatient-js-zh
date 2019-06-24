export function findKey(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value, key, object)) {
      return key;
    }
  }
  return undefined;
}
