// 버튼을 누를 때 숫자가 증가하는 컴포넌트
import React from "react";

export default class ClickComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.rkathCOunt = this.rkathCOunt.bind(this);
    this.chogihwa = this.chogihwa.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  rkathCOunt() {
    this.setState(({ count }) => ({ count: count - 1 }));
  }
  chogihwa() {
    this.setState(({ count }) => ({ count: this.props.count }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
        <button onClick={this.rkathCOunt}>카운트 감소</button>
        <button onClick={this.chogihwa}>초기화</button>
      </div>
    );
  }
}
