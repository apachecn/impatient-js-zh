export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  dist() {
    return Math.sqrt(this.x**2 + this.y**2);
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
