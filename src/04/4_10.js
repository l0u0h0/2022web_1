// 순서 상관 없을 때
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
// 상관 없는 함수만 따로 실행
// work1, nextWork 순서 상관 없을 때
work2()
  .then((msg2) => {
    console.log(msg2);
    return work3();
  })
  .then((msg3) => {
    console.log(msg3);
  });
work1().then((msg1) => {
  console.log(msg1);
});
nextWork();
