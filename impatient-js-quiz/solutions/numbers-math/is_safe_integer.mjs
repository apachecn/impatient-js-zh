export function isSafeInteger(n) {
  return (typeof n === 'number' // Is n a number?
    && Math.trunc(n) === n // Is n an integer?
    && Number.MIN_SAFE_INTEGER <= n
    && n <= Number.MAX_SAFE_INTEGER);
}
