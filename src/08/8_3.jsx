import React from "react";

export default class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.formData = "no data";
    this.handleData = this.handleData.bind(true);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
    // 강제로 업데이트 .. 비추
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
