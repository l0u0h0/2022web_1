import React from "react";

export default class ChangeComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.value = "react";
    this.changereact = this.changereact.bind(this);
  }
  changereact() {
    this.value = "리액트";
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <h1>parent component</h1>
        <button onClick={this.changereact}>리액트로 변경</button>
        [값]: {this.value}
      </div>
    );
  }
}
