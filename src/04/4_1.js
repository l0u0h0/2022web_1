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
console.log(peoples[1].age);
function parsing() {
  return peoples
    .map((people) => {
      let { name, age } = people;
      return { name, age };
    })
    .reduce((result, item) => {
      console.log(item.age);
      console.log(result.age);
      console.log(result.key);

      if (item.age === result) {
        console.log("hi");
        return result.push(item.name);
      } else {
        return { ...result, [item.age]: [item.name] };
      }
    }, {});
}
const group = parsing();
console.log(group);

// 배열을 객체로 변환
const qs = "banana=10&apple=20&orange=30";
function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split("&");
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split("=");
      return { key, value };
    })
    .reduce(
      (result, item) => ({
        ...result,
        [item.key]: item.value,
      }),
      {}
    );
}
const params = parse(qs);
console.log(params);
