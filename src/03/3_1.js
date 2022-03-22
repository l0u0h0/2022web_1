// 2_10.js에서 circle -> rectangle
function Shape(x, y) { 
  // 생성자 형태로 선언 후
  this.name = 'Shape';
  this.move(x, y);
}

// static 함수 선언
Shape.create = function(x, y) {
  return new Shape(x, y);
}
// instance 함수 선언
Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function() {
  return 0;
};

Shape.prototype = {
  move: function(x, y) {
    this.x = x;
    this.y = y;
  },
  area: function() {
    return 0;
  }
};

// 변수와 함수를 prototype 객체에 할당
var s = new Shape(0, 0);
var s2 = Shape.create(0, 0);
console.log(s.name, s.area()); // 0

// 자식 클래스 생성
function Circle(x, y, radius) {
  // 부모클래스 생성자 호출 시 내장함수 call 이용, 이때 초기값 상송
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}
// Object.assign(Circle.prototype, Shape.prototype, {
//   // 부모클래스의 함수 상송
//   area: function() {
//     // area 함수는 오버라이드
//     return this.radius * this.radius;
//   }
// });

// var c = new Circle(0, 0, 10);

// Rectangle
function Rectangle(x, y, length) {
  Shape.call(this, x, y);
  this.name = 'Rectangle';
  this.length = length;
}
Object.assign(Rectangle.prototype, Shape.prototype, {
  area: function() {
    return this.length * this.length;
  }
});
const r = new Rectangle(10, 10, 20);
console.log(r.name, r.area());