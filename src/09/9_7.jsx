import React from "react";
class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log("MyComponent 새로고침");
  }
  render() {
    return <div></div>;
  }
}
class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log("MyPureComponent 새로고침");
  }
  render() {
    return <div></div>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: "park" }, { name: "Lee" }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.listValue[0].name = "Justin";
    this.setState({ version: 1 }); // 이때 재렌더링
    setTimeout(() => {
      this.listValue[0].name = "None";
    }, 1000);
    setTimeout(() => {
      this.listValue.pop();
      this.setState({ version: 2 }); // 이때 재렌더링
    }, 2000);
  }
  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>값 변경</button>
      </div>
    );
  }
}
export default App;

// 이대로 버튼을 눌렀을 때 PureComponent에는 새로고침 콘솔이 실행되지 않음.
// -> componentDidUpdate()가 PureComponent에서는 호출되지 않았음.
// 컴포넌트에 프로퍼티로 this.state.version을 준다면 PureComponent에서도 새로고침 콘솔이 실행됨.
