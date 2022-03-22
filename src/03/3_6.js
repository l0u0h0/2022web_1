// ES5 객체확장 표현식
var x = 0;
var y = 0;
var obj = { x: x, y: y}; // 키 값이 변수명과 동일함
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; // 연산 결과를 키 값으로 활용

var obj2 = {
  x: x,
  methodA: function() { console.log('A'); }, // 함수를 할당하려면 function 사용
  methodB: function() { return 0; },
};

// ES6로 표현한다면