import React from "react";

export default class ChangeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "react",
    };
    this.changereact = this.changereact.bind(this);
  }
  changereact() {
    this.setState(() => ({ value: "리액트" }));
  }
  render() {
    return (
      <div>
        <h1>parent component</h1>
        <button onClick={this.changereact}>리액트로 변경</button>
        [값]: {this.state.value}
      </div>
    );
  }
}
