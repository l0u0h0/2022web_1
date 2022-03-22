// ES6 class 표현방법
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  // name = "Shape"; // 생성자 안에 this.name = 'Shape'; 라고 써도 같음
  constructor(x, y) {
    this.name = "Shape";
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}
var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
console.log(s.name, s.area());
s.area(); // 0

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y); // 부모클래스의 함수 참조 가능하게 함
    this.radius = radius;
    this.name = "Circle";
  }
  area() {
    if (this.radius == 0) return super.area();
    return this.radius * this.radius;
  }
}
var c = new Circle(0, 0, 10);
console.log(c.name, c.area()); // 100
