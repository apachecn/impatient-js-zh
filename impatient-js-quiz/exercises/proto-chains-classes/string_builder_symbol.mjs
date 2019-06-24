export class StringBuilder {
  constructor() {
    this._data = '';
  }
  add(str) {
    this._data += str;
    return this;
  }
  toString() {
    return this._data;
  }
}
