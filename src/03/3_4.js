// 기존 함수 정의 방법
// function add(first, second) {
//   return first + second;
// }
// var add = function(first, second) {
//   return first + second;
// };
// var add = function add(first, second) {
//   return first + second;
// };
// ES6 arrow func
var add1 = (first, second) => {
  return first + second;
}
var add2 = (first, second) => first + second; // 결과값을 바로 반환할때 중괄호 생략 가능
// 객체를 반환할때는 괄호 사용
var addAndMultiple = (first, second) => ({add:first + second, multiple:first * second});


function addNumber(num) {
  return function(value) { // 반환값이 함수
    return num + value;
  };
}
// 화살표 함수로 변환했을 때
var addNumver = num => value => num + value;
var addTwo = addNumver(2);
var result = addTwo(4); // 6
console.log(result);
console.log(addNumver(2)(4));


// bind 함수를 통해 this의 scope를 전달한 예
class Myclass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this); // this 의 위치를 알려줄 때 사용
    var addThis3 = (first, second) => this.value + first + second;
    // 화살표 함수일 경우 bind 생략 가능
  }
}