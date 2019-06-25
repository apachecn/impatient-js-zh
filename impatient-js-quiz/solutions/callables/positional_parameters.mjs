export function twoParametersWithDefaultValues(x=0, y=0) {
  return [x, y];
}
export function restParameters(x, ...rest) {
  return rest;
}