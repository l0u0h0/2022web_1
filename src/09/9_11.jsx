// 함수형 컴포넌트
// state가 없음
// 그래서 stateless Functional Component라고 부름
// 생명주기 함수도 없음.
import React from "react";
import PropTypes from "prop-types";

function SFC(props, context) {
  // 클래스 컴포넌트의 this.props값과 ㄱ동일
  const { somePropValue } = props;
  // 클래스 컴포넌트의 this.context와 동일
  // 차후에 context에 대해 다룸
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
}
SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: "default values" };

export default SFC;
