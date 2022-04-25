// PureComponent 사용하기(class형 컴포넌트)
import React from "react";

class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }
  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };
  render() {
    console.log("render start");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체배열 변경
        </button>
      </div>
    );
  }
}
export default PureComponent;
// 그냥 문자열에 오버라이딩과 같이 같은 내용으로 바뀌면 재랜더링이 안되지만
// 객체일 경우에는 같은 내용의 오버라이딩이더라도 재랜더링이 된다.
