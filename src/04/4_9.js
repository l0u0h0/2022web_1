// 순서 상관 있을 때
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("1 success"), 2000);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2 success"), 3000);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("3 success"), 1000);
  });
function nextWork() {
  console.log("next Work...");
}
work1()
  .then((msg1) => {
    console.log(msg1);
    return work2();
  })
  .then((msg2) => {
    console.log(msg2);
    return work3();
  })
  .then((msg3) => {
    console.log(msg3);
    return nextWork();
  });
