// aync, await
// promise로 한 작업은 모두 await 붙일 수 있다.
// 작업을 기다리겠다는 의미
// await가 붙어있으므로 실행 후 기다린다
// await를 쓰려면 async로 선언해주어야한다.
// await를 쓰려면 Promise 객체를 리턴해주어야한다.
// 함수 호출 순서를 바꾸면 완료되는 순서도 바뀜.

const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("1 succe"), 2000);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2 succe"), 3000);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("3 succe"), 1000);
  });
function nextWork() {
  console.log("next WOrk");
}
async function Ordering() {
  await work1().then((msg) => console.log(msg));
  await work2().then((msg) => console.log(msg));
  await work3().then((msg) => console.log(msg));
  nextWork();
  return;
}
Ordering();
