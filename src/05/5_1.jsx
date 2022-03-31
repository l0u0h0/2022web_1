import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    // App.js 에서 컴포넌트에서 속성 형태로 전달받은 값을 props를 사용해 받는다.
    // * 단 프로퍼티 내용을 바로 변경할 수 없다.
    const name = this.props.name;
    return <span>{name}</span>;
  }
}
export default MyComponent;
