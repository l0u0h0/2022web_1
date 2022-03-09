function Shape(x, y) { // 생성자 형태로 선언 후
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

var s = new Shape(0, 0);
var s2 = Shape.create(0, 0);
s.area(); // 0