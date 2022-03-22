// ES6 forEach
const qs = 'banana=10&apple=20&orange=30';
function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
    result[key] = value; // result = { banana: 10 }
  });
  return result;
}
const params = parse(qs);
console.log(params);