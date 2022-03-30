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
      let age = item["age"] + "세";
      if (!result[age]) {
        result[age] = [];
      }
      result[age].push(item.name);
      return result;
    }, {});
}
const group = parsing();
console.log(group);

function makegroup() {
  return peoples.map((people) => {
    const age = people["age"] + "세";
    return { [age]: [people.name] };
  });
}
const groups = makegroup();
console.log(groups);
