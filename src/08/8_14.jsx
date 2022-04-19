// 부모 컴포넌트는 프로퍼티로 숫자 10을 자녀 컴포넌트에 전달
// 자녀 컴포넌트는 getDerivedStateFromProps 를 ㅅ통해 프로퍼티 값을 state에 저장
// 자녀 컴포넌트의 state에는 스테이트 값으로 0을 저장
// mount 이후부터 1초마다 프로퍼티 값과 스테이트 값이 번갈아 출력

import React from "react";

export default class Quiz2 extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const { value } = props;
    return {
      value,
      originvalue: state.originvalue,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      originvalue: 0,
      type: 0,
    };
    // this.showchange = this.showchange.bind(this);
    setInterval(() => {
      this.setState(({ type }) => ({ type: type + 1 }));
    }, 1000);
  }
  showstate() {
    return this.state.originvalue;
  }
  showprops() {
    return this.state.value;
  }
  showchange() {
    if (this.state.type % 2 === 1) {
      console.log(1);
      return this.state.originvalue;
    } else {
      console.log(2);
      return this.state.value;
    }
  }

  render() {
    return (
      <div>
        <h3>
          [프로퍼티 값, 스테이트 값 1초마다 번갈아 출력 : {this.showchange()}]
        </h3>
      </div>
    );
  }
}
