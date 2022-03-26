var peoples = [
  {
    name: "Alice",
    age: 21,
  },
  {
    name: "Max",
    age: 20,
  },
  {
    name: "Jane",
    age: 20,
  },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObj) {
    var key = currentObj[property];
    console.log(`key : ${key}`);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObj);
    return accumulator;
  }, {});
}

var groupedPeople = groupBy(peoples, "age");
console.log(`groupedPeople : ${groupedPeople}`);
//"age" 속성으로 객체 분류 (나이 별)
