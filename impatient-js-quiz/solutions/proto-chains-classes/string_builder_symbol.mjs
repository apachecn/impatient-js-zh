const data = Symbol('data');

export class StringBuilder {
  constructor() {
    this[data] = '';
  }
  add(str) {
    this[data] += str;
    return this;
  }
  toString() {
    return this[data];
  }
}
