// state로 상태관리

import React from "react";

class StateExample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 상태 정의
      loading: true, // 초깃값
      formData: "no Data",
    };
    // 이후 콜백함수를 다룰때 bind를 선언하는 부분에 대해 다룹니다.
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    // 상태 변경
    // 상태의 내용 변경
    this.setState((prevState) => ({
      loading: false,
      formData: data + prevState.formData,
    }));
    this.setState((formData) => ({
      loading: false,
      formData: data + formData,
    }));
    // this.state.loading => true
    console.log("loading value", this.state.loading);
    // 이후 호출될 출력함수에서의 this.state.loading => false
  }
  render() {
    return (
      <div>
        {/* 상태 데이터는 this.state로 접근 가능 */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}
export default StateExample1;
