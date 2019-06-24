export class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string';
  }
}