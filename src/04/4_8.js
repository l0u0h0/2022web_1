// 결과를 기다려야 하는 작업에서 Promise 객체를 만들어 리턴
// return new Promise(function(resolve, reject) {...})
// 성공 결과 - resolve(), 실패 결과 - reject()로 반환
// 반환 값은 .then(), .catch()로 성공과 실패로 나누어 가질 수 있음

function devide(numA, numB) {
  return new Promise((resolve, reject) => {
    if (numB === 0) reject(new Error("Unable to devide by 0."));
    else resolve(numA / numB);
  });
}
devide(8, 2)
  .then((result) => console.log("성공:", result))
  .catch((error) => console.log("실패:", error));
