let num = 1;
num = num * 3;
let str = '문자';
str = '새 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = {
  name: 'my name'
};

// const는 불변변수, 재할당이 불가능

const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); //arr2 = [0]

const obj2 = {};
obj2['name'] = 'myname'; //obj2 = { name: 'myname' }
Object.assign(obj2, { name: 'newname' });
// obj2 = { name: 'newname' }
delete obj2.name; // obj2 = {}

const num1 = 1;
const num2 = num1 * 3;
// num2 = 3
console.log(num2);
const str1 = '문자';
const str2 = str1 + '추가';
// str2 = '문자추가'
console.log(str2);
const arr3 = [];
const arr4 = arr3.concat(1);
// arr4 = [1]
console.log(arr4);
const arr5 = [...arr4, 2, 3];
// arr5 = [1, 2, 3]
console.log(arr5);
const arr6 = arr5.slice(0, 1);
// arr6 = [1], arr5 = [1, 2, 3]
console.log(arr6, arr5);
const [first, ...arr7] = arr5;
// arr7 = [2, 3], first = 1
console.log(arr7, first);
const obj3 = {
  name: 'myname',
  age: 20
};
console.log(obj3);
const obj4 = {
  ...obj3,
  name: 'newname'
};
// obj4 = { name: 'newname', age: 20 }
console.log(obj4);
const {
  name,
  ...obj5
} = obj4;
// obj5 = { age: 20 }
console.log(obj5);

// shift() => slice(1)