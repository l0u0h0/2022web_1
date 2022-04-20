import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import "./Component.css";
import R001Component from "./R001_Component";
import R002Component from "./R002_Component";
import Es6 from "../src/04/4_13";
import Variable from "../src/04/4_14";
import SpreadOperator from "../src/04/4_15";
import ClassPrototype from "./04/4_16";
import Map from "./05/5_6";
// import Jqeury from "./05/5_7";
import ClickComponent from "./08/8_4";
import ChildComponent from "./05/5_9";
import PropsComponent from "./05/5_2";
import BooleanComponent from "./06/6_2";
import DefaultPropsComponent from "./06/6_4";
import ChildProperty from "./06/6_5";
import BooleanComponent1 from "./06/6_6";
import ChildComponent2 from "./06/6_7";
import StateExample from "./06/6_8";
import PropertyComponent from "./07/7_1";
import Child from "./07/7_2";
import ChildComponent3 from "./07/7_3";
import LunchComponent from "./07/7_5";
import ChangeComponent from "./08/8_5";
import ChangeComponent1 from "./08/8_6";
import ForceUpdate from "./08/8_7";
import LifecycleExample from "./08/8_9";
import Counter from "./08/8_11";
import NewCounter from "./08/8_12";
import Quiz1 from "./08/8_13";
import Quiz2 from "./08/8_14";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    const func = () => {
      console.log("FunctionProps: function!");
    };
    return (
      <div className="App">
        <h1 className="title">리액트 프로그래밍 시작</h1>
        <R001Component></R001Component>
        <R002Component></R002Component>
        <h1>Start React 200!</h1>
        <o>Css</o>
        <Es6 />
        <Variable />
        <SpreadOperator />
        <ClassPrototype />
        <Map />
        {/* <Jqeury /> */}
        <h1>부모 컴포넌트</h1>
        <ChildComponent />
        <PropsComponent name="안녕?" />
        <div>
          <b>지루할 때:</b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 떄:</b>
          <BooleanComponent />
        </div>
        <div>
          <DefaultPropsComponent />
        </div>
        <div>
          <ChildProperty>
            <span>자식 노드</span>
          </ChildProperty>
        </div>
        <div>
          <h3>퀴즈 3_2</h3>
          <h2>부모 컴포넌트</h2>
          <PropsComponent name="안녕?" />
        </div>
        <div>
          <h3>quiz 3-3</h3>
          <BooleanComponent1 />
          <BooleanComponent1 bool />
        </div>
        <div>
          <h3>quiz 3-4</h3>
          <h1>부모 컴포넌트</h1>
          <ChildComponent2 obj={{ react: "리액트", number: "10" }} />
        </div>
        <StateExample />
        <div>
          <h3>quiz 3-5</h3>
          <h1>부모 컴포넌트</h1>
          <PropertyComponent
            string={"react"}
            number={10}
            Bool={true}
            Array={[0, 1, 0]}
            obj={{ react: "리액트", number: "100" }}
            func={func}
          />
        </div>
        <div>
          <h1>parent component</h1>
          <Child member={{ name: "홍길동", age: "10" }} />
        </div>
        <div>
          <h1>parent component</h1>
          <ChildComponent3 member={{ name: "홍길동", job: "백엔드" }} />
          <ChildComponent3 member={{ name: "성춘향", job: "프론트엔드" }} />
        </div>
        <div
          style={{
            border: "1px dashed black",
            width: "500px",
            height: "700px",
          }}
          className="Lunch"
        >
          <h1>parent component</h1>
          <LunchComponent low={6000} high={9000} />
        </div>
        <ChangeComponent />
        <ChangeComponent1 />
        <ForceUpdate />
        <LifecycleExample />
        <div>
          <div>
            <Counter count={this.state.count} />
          </div>
          <div>
            <NewCounter count={this.state.count} />
            <button onClick={this.resetCount}>
              {this.state.count + 10}으로 초기화
            </button>
          </div>
        </div>
        <Quiz1 value={20} />
        <Quiz2 value={10} />
        <div>
          <ClickComponent count={10} />
        </div>
      </div>
    );
  }
}

export default App;
