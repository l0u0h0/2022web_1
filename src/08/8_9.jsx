import React from "react";

export default class LifecycleExample extends React.Component {
  static getDerivedStateFromProps() {
    // 2, 5
    console.log("getDerivedStateFromProps 호출");
    return {}; // state값을 써줄 수 있음.
  }
  constructor(props) {
    // 1
    super(props);
    // getDerivedStateFromProps를 사용하기 때문에
    // 경고 메세지를 건너뛰기 위해 초기 상태를 설정합니다.
    this.state = {};
    console.log("constructor 호출");
  }
  componentDidMount() {
    // 4
    console.log("componentDidMount 호출");
    this.setState({ updated: true });
    // this.forceUpdate();
  }
  componentDidUpdate() {
    // 8
    console.log("componentDidUpdate 호출");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount 호출");
  }
  getSnapshotBeforeUpdate() {
    // 7
    console.log("getSnapchotBeforeUpdate 호출");
    return {};
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 호출");
    return true;
  }
  render() {
    // 3, 6
    console.log("render 호출");
    return null;
  }
}

// constructor 처음 실행된 후
// getDerivedStateFromProps가 호출,
// 그 후 render 함수가 호출 되며
// 랜더링 된 후에 componentDidMount가 호출된다.
// state가 바뀌는 등 재 랜더링이 된다면
// 우선 getDerivedStateFromProps가 호출되고
// shouldComponentUpdate가 호출된다.
// render 함수 호출로 재랜더링을 위한 호출을 한다.
// 그 후 getSnapshotBeforeUpdate가 호출되고
// 랜더링 되고 돔에 적용이 된 후에 componentDidUpdate가 호출된다.
// 돔에서 해당 컴포넌트가 사라지게 되면 componentWillUnmount가 호출된다.
