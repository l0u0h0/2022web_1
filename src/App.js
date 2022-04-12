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
import ChildComponent from "./05/5_9";
import PropsComponent from "./05/5_2";
import BooleanComponent from "./06/6_2";
import DefaultPropsComponent from "./06/6_4";
import ChildProperty from "./06/6_5";
import BooleanComponent1 from "./06/6_6";
import ChildComponent2 from "./06/6_7";
import StateExample from "./06/6_8";

class App extends Component {
  render() {
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
          <ChildComponent2 obj={{ react: "리액트", number: "10" }} />
        </div>
        <StateExample />
      </div>
    );
  }
}

export default App;
