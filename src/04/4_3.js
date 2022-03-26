// 내장비동기함수
// 사용자 데이터를 얻어오는데 걸리는 시간을 시뮬레이션 하기 위해 사용

function findUser(id) {
  let user;
  setTimeout(function () {
    console.log("Waited 0.1 sec");
    user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
  }, 100);
  return user;
}

const user = findUser(1);
console.log("user: ", user);
