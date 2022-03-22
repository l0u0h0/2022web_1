// ES6 map
const qs = 'banana=10&apple=20&orange=30';
function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  const result = chunks.map((chunk) => {
    const [ key, value ] = chunk.split('=');
    return { key: key, value: value };
  });
  return result;
}
// map 함수의 반환값은 array
const params = parse(qs);
console.log(params);