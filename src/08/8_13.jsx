// 부모 컴포넌트는 프로퍼티로 숫자 10을 자녀 컴포넌트에 전달
// 자녀 컴포넌트는 getDerivedStateFromProps를 통해 프로퍼티 값을 state에 저장
// render()에서 오른쪽 화면처럼 state값을 출력

import React from "react";

export default class Quiz1 extends React.Component {
  static getDerivedStateFromProps(props) {
    const { value } = props;
    return {
      value,
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>[State에 저장된 프로퍼티 값 : {this.state.value}]</h3>
      </div>
    );
  }
}
