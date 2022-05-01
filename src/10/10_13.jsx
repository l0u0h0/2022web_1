// 상위 컴포넌트가 제공한 프로퍼티 수정
// 방법: 프로퍼티를 수정할 수 있는 함수를 프로퍼티로 하위 컴포넌트에 제공
// 이렇게 프로퍼티로 제공되는 함수를 콜백함수라고 부름
import React from "react";
import PropsTypes from "prop-types";

export default class Counter2 extends React.Component {
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}
Counter2.propsTypes = {
  count: PropsTypes.number,
  onAdd: PropsTypes.func,
};
