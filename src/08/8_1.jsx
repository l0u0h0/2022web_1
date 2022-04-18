import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 상태 정ㅢ
      loading: true, // 초값
      formData: "no data",
    };
    // 이후 콜백 함수를 다룰때 bind를 선언하는 부분에 대해 다룹니다.
    this.handleData = this.handleData.bind(this);
    // 생성 후 4초 후에 handleData를 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    const { formData } = this.state; // 상태 정보 중 formdata를 얻어옴
    // 상태변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log("loading value: ", this.state.loading);
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

export default StateExample;

// state 사용시 주의할 점
// 1. 생성자에서 반드시 초기화해야한다.
// 2. state 값을 변경할 때는 setState()함수를 반드시 사용해야한ㄷ.
// 3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된
// 함수들이 실행이 완료된 시점에 화면 동기화 과정을 거친다.
