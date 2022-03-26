const peoples = [
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
function parsing() {
  return peoples
    .map((people) => {
      const { name, age } = people;
      return { name, age };
    })
    .reduce((result, item) => {
      let age = item.age;
      if (!result[age]) {
        result[age] = [];
      }
      result[age].push(item.name);
      console.log(result);
      return result;
    }, {});
}
const group = parsing();
console.log(group);
