const values = [5, 3, 8, 6, 5, 8, 6, 10, 45, 34, 21, 56, 0];

// const result = values.map((value) => {
//   let key = null;
//   if ((value % 2) === 0) {
//     key = '짝';
//   }
//   else {
//     key = '홀';
//   };
//   return { key, value };
// });
// console.log(result);

function addEven(array) {
  return array.map((value) => {
    let key = null;
    if (value % 2 === 0) {
      key = "짝";
    } else {
      key = "홀";
    }
    return { key, value };
  });
}
const result = addEven(values);
console.log(result);
