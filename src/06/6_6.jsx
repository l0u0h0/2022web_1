import React from "react";

class BooleanComponent1 extends React.Component {
  render() {
    const message = this.props.bool ? "2. true " : "1. false";
    return <div>{message}</div>;
  }
}
export default BooleanComponent1;
