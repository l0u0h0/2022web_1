// shouldComponentUpdate()
// state 값을 바꿔줬을 때 실행된다.
import React, { Component } from "react";

export default class LifecycleEx2 extends Component {
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
    this.setState({ tmp_state2: true });
  }
  shouldComponentUpdate(props, state) {
    console.log(
      "6. shouldComponentUpdate Call / tmp_state = " + state.tmp_state2
    );
    return state.tmp_state2;
  }
  render() {
    console.log("3. render call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}
