export function arrayToString(arr) {
  let result = '';
  for (const [index, elem] of arr.entries()) {
    if (index > 0) {
      result += '\n';
    }
    result += (index+1) + '. ' + elem;
  }
  return result;
}