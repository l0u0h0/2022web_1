// 생명주기 함수 constructor(props) 사용하기

import React, { Component } from "react";

export default class LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    console.log("3. render Call");
    return (
      <div>
        <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
      </div>
    );
  }
}

// constructor 함수는 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출된다.
// component 내부에서 사용되는 변수 (state) 를 선언하고 부모 객체에서 전달받으 변수(props)
// 를 초기화 할 때 사용한다. super() 함수는 가장 위에 호출되어야 한다.
