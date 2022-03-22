class Box {
  static create(length, width) {
    return new Box(length, width);
  }
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
}
var box = new Box(2, 2);
console.log(box.calculateArea());