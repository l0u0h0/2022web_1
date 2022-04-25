const shallowequ1 = require("shallowequal");

const obj = { name: "park" };
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: "park" }];

console.log(mylist === list1);
console.log(shallowequ1(mylist, list1));
console.log(shallowequ1(list1, list2));
