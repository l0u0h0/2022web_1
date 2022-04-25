// 1. Component class
//  - 프로퍼티, state, 생명주기 함수가 들어있는 구조의 컴포넌트
//  - 앞에서 만든 컴포넌트가 Component class 이다.
//  - 무조건 render() 호출
// 2. PureComponent class
//  - Component class를 상속받아 만들어진 클래스
//  - shouldComponentUpdate() 함수를 얕은 비교를 하도록 재정의 함.
//    즉, 얕은 비교를 했음에도 프로퍼티나 state가 변경 되었다면 render()를 호출하는 방식

import React from "react";
const shallowEqual = require("shallowequal");
export class PureComponent extends React.Componet {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }
}
