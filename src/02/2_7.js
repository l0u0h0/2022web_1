const slime = {
  name: '슬라임'
};
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const cute = {
  attribute: 'cute'
};
const cuteSlime1 = {
  ...slime,
  ...cute
};
console.log(cuteSlime1);
const {
  color,
  ...cuteSlime2
} = purpleCuteSlime;
console.log(cuteSlime2);

const obj = {
  "Name": "홍길동",
  "Git": "wow1234"
}
const test_obj = {
  "test1": 1,
  "test2": 2
}
const merge = {
  ...obj,
  ...test_obj
};
console.log(merge);