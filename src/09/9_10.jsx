// shallowequal 사용하기
import React from "react";
import { shallowEqualArrays } from "shallow-equal";

class ShallowEqual extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { StateString: "react" };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState);
  }
  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    const Array3 = ["리액트", { react: "200" }];
    console.log(
      "shallowEqualArrays(Array1, Array2) : " +
        shallowEqualArrays(Array1, Array2)
    );
    console.log(
      "shallowEqualArrays(Array2, Array3) : " +
        shallowEqualArrays(Array2, Array3)
    );
    this.setState({ StateString: "react" });
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
export default ShallowEqual;
