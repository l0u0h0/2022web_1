import React, { Component } from "react";

class ClassionalComponent extends Component {
  render() {
    let { contents } = this.props;
    return <h2>{contents}</h2>;
  }
}

export default ClassionalComponent;
