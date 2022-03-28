const work = () =>
  new Promise((resolve, reject) => {
    // 비동기 작업을 위해서 Promise 객체를 반환
    // Promise 객체를 만들 때 함수를 인자로 제공
    // 함수의 인자는 성공과 실패시 호출할 함수 이름
    let result = prompt("yes or no>", "yse"); // 비동기 작업
    if (result === "yes") resolve("자겁 완료  ");
    else reject("자겁 실패");
  });
work()
  .then((msg) => {
    // 성공시 호출
    console.log(msg);
  })
  .catch((msg) => {
    // 실패시 호출
    console.log(msg);
  });
