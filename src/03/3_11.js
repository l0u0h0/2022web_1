// ES6 reduce
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const result = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);