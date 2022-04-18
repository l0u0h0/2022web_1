// 새로운 카운터 컴포넌트: getDerivedStateFromProps 활용
import React from "react";
export default class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      // property에서 전달된 Count값을 보관
      count,
      newCount: count === state.count ? state.newCount : count,
      // count property가 변경되지 않으면 기존 state값으로 설정
      // 초기 카운트값을 변경된 프로퍼티에서 값으로 설정한다.
    };
  }
  increaseCount() {
    this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}
