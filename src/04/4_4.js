// 내장비동기함수
// 사용자 데이터를 얻어오는데 걸리는 시간을 시뮬레이션 하기 위해 사용
// 콜백함수에 후처리 작업을 함께 전달해야함

function findUserCallBack(id, cb) {
  setTimeout(function () {
    console.log("Waited 0.1 sec");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}

findUserCallBack(1, function (user) {
  console.log("user: ", user);
});
