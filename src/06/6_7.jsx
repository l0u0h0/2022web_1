import React from "react";
import PropTypes from "prop-types";

class ChildComponent2 extends React.Component {
  render() {
    const objValue = this.props.obj;
    console.log(objValue);
    return (
      <div>
        <div>객체 값: {JSON.stringify(objValue)}</div>
      </div>
    );
  }
}
ChildComponent2.propTypes = {
  obj: PropTypes.object,
};
export default ChildComponent2;
