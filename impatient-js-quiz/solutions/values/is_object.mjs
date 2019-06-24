export function isObject(x) {
  return x !== null && (typeof x === 'object' || typeof x === 'function');
}
