var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
// combined = ['one','two','three','four']
console.log(combined);
const [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []
console.log(first, second, three, others);
function func(first, ...others) {
  var firstInES6 = first;
  var otherseInES6 = others;
  console.log(firstInES6, otherseInES6);
}
func(1,2,3,4,5,6,7,8);
// wrong essential
// var wrongArr = ...array1;