import React from "react";
import PropTypes from "prop-types";

class ChildComponent2 extends React.Component {
  render() {
    const objValue = this.props.obj;
    // let result = objValue.map((obj, index) => {
    //   console.log(index + 3 + ". obj :" + JSON.stringify(obj));
    //   var Obj = {};
    //   Obj[obj.key] = obj.value;
    //   return Obj;
    // });
    // console.log(result);
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
