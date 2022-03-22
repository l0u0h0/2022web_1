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
var x = 0;
var y = 0;
var obj = { x, y }; // 키 값과 변수명이 동일하면 생략 가능

var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
  // 대괄호를 이용하면 계산된 값을 바로 키로 이용 가능
};
var obj = {
  x,
  methodA() { console.log('A'); }, // 함수를 할당할 때 function 생략 가능
  methodB() { return 0; }, // 단, 키값과 함수명이 동일해야함 달라진다면 ES5와 같이 해야함
};