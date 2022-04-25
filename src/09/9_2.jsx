// 생명 주기 함수 static getDerivedStateFormProps(props, state) 사용하기
import React from "react";

export default class LifecycleEx extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps call :" + props.prop_value);
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}
