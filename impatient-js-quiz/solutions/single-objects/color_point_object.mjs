export const colorPoint = {
  x: 3,
  y: 5,
  dist() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  },
  toString() {
    return `(${this.x}, ${this.y})`;
  },
};
