// 문제 정답적는 칸, 정답률
import React from "react";

export default class Submitcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.changevalue = this.changevalue.bind(this);
  }
  changevalue() {
    window.addEventListener("submit", (e) => {
      e.preventDefault();
      this.setState({
        value: e.target.text.value,
      });
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.changevalue}>
          <input name="text" type="text" />
          <input type="submit" />
        </form>
        <p>입력 값: {this.state.value}</p>
      </div>
    );
  }
}
