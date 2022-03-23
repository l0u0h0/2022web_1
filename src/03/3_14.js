const values = [5,3,8,6,5,8,6,10,45,34,21,56];

const result = values.map((value) => {
  let key = null;
  if ((value % 2) === 0) {
    key = '짝';
  }
  else {
    key = '홀';
  };
  return { key, value };
});
console.log(result);