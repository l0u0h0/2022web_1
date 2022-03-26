// 비동기함수
// 비동기 처리 : 시간이 오래 걸리는 작업 때문에 다른 작업들이 대기중이면 오래 걸리는 작업과 상관 없는 작업은
// 먼저 처리하도록 하고 오래 걸리는 작업이 종료된 후 연관된 작업을 처리하는 방식
// 예 : 서버에 데이터 요쳥 > 다른 작업 처리 > 데이터 도착하면 데이터 처리

// 콜백함수
// 다른 함수에 매개변수에 저장되어 전달되는 함수로 당장 호출되지 않고 특정할 수 없는 시기에 뒤에서 호출됨
// 자바스크립트에서 많이 사용됨

function findUserAndCallBack(id, cb) {
  const user = {
    id: id,
    name: "User" + id,
    email: id + "@test.com",
  };
  cb(user);
}
findUserAndCallBack(1, function (user) {
  console.log("user: ", user);
});
