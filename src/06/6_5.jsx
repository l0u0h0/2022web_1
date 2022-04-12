// children property 컴포넌트의 하위 노드를 가짐

import React from "react";
import PropTypes from "prop-types";

class ChildProperty extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
