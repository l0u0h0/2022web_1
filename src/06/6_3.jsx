// 객체형 프로퍼티

import React from "react";
import PropTypes from "prop-types";

class ChildComponent1 extends React.Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        {/* 객체 내용을문자열로 변환 */}
        <div>객체 값: {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}
ChildComponent1.propTypes = {
  // 객체형 프로퍼티
  objValue: PropTypes.shape({
    // 객체 프로퍼티의 세부 자료형 정의하고 싶으면 shape 이용
    name: PropTypes.string, // 단지 객체라고만 정의할 때는 object라고 써주기만 하면 됨
    age: PropTypes.number,
  }),
};
export default ChildComponent1;
