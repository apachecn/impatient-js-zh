export function isObject(value) {
  switch (typeof value) {
    case 'object':
    case 'function':
      return value !== null;
    default:
      return false;
  }
}
