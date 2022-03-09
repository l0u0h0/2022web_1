const fruits = ["Apple", "Banana", "Orange", "Strawberry"];

const furits1 = fruits.concat('Grape');
console.log(furits1);
const fruits2 = fruits.slice(0, (fruits.length - 1))
console.log(fruits2);
const fruits3 = fruits.slice(1);
console.log(fruits3);
const fruits4 = fruits.slice(0,1);
console.log(fruits4.concat(fruits.slice(3)));