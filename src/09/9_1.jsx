// 문제 정답적는 칸, 정답률
import React from "react";

export default class GuguComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const num1 = Math.floor(Math.random() * 8) + 1;
    const num2 = Math.floor(Math.random() * 8) + 1;
    return {
      num1: num1,
      num2: num2,
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.state.num1} X {this.state.num2} = ?<br />
        <form action="">
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
