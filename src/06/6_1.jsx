// 다양한 자료형 프로퍼티(오류를 줄이기 위한 방법)

import React from "react";
import ChildComponent from "../05/5_9";
class App extends React.Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: "제목", age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log("메시지");
    };
    return (
      <ChildComponent
        boolValue={true} // 생략해도 true 전달, boolValue라인은 생략하면 undefined 전달
        numValue={1}
        arrayValue={array}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
    );
  }
}
export default App;
