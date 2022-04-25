// componentDidMount() 사용하기
// 작성한 함수들 중 가장 마지막으로 실행,
// render() 가 화면에 다 그려준 후 실행된다.
import React, { Component } from "react";

export default class LifecycleEx1 extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps call :" + props.prop_value);
    return { tmp_state: props.prop_value };
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  componentDidMount() {
    console.log("4. componentDidMount call");
    console.log("5. tmp_state: " + this.state.tmp_state);
  }
  render() {
    console.log("3. render call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}
