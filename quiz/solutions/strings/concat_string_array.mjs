export function concatStringArray(stringArray) {
  let result = '';
  for (const str of stringArray) {
    result += str;
  }
  return result;
}