import React, { Component } from "react";
import "./sass/materialize.scss";
// import ReactMouseout from "./11/11_10";
// import ReactOnKey from "./11/11_11";
// import ReactSubmit from "./11/11_12";
// import ReactRef from "./11/11_13";
//import logo from './logo.svg';
import "./App.css";
// import "./Component.css";
// import R001Component from "./R001_Component";
// import R002Component from "./R002_Component";
// import Es6 from "../src/04/4_13";
// import Variable from "../src/04/4_14";
// import SpreadOperator from "../src/04/4_15";
// import ClassPrototype from "./04/4_16";
// import Map from "./05/5_6";
// // import Jqeury from "./05/5_7";
// import ClickComponent from "./08/8_4";
// import ChildComponent from "./05/5_9";
// import PropsComponent from "./05/5_2";
// import BooleanComponent from "./06/6_2";
// import DefaultPropsComponent from "./06/6_4";
// import ChildProperty from "./06/6_5";
// import BooleanComponent1 from "./06/6_6";
// import ChildComponent2 from "./06/6_7";
// import StateExample from "./06/6_8";
// import PropertyComponent from "./07/7_1";
// import Child from "./07/7_2";
// import ChildComponent3 from "./07/7_3";
// import LunchComponent from "./07/7_5";
// import ChangeComponent from "./08/8_5";
// import ChangeComponent1 from "./08/8_6";
// import ForceUpdate from "./08/8_7";
// import LifecycleExample from "./08/8_9";
// import Counter from "./08/8_11";
// import NewCounter from "./08/8_12";
// import Quiz1 from "./08/8_13";
// import Quiz2 from "./08/8_14";
// import GuguComponent from "./09/9_1";
// import ShallowEqual from "./09/9_10";
// import SFC from "./09/9_11";
// import LifecycleEx from "./09/9_2";
// import LifecycleEx1 from "./09/9_3";
// import LifecycleEx2 from "./09/9_4";
// import ComponentClass from "./09/9_8";
// import PureComponent from "./09/9_9";
// import FunctionComponent from "./10/10_1";
// import ReturnMap from "./10/10_12";
// import Counter from "./10/10_13";
// import ScrollSpy from "./10/10_15";
// import Counter3 from "./10/10_16";
// import Input from "./11/11_1";
// import ReactHook from "./10/10_2";
// import Fragments from "./10/10_3";
// import ListExample from "./10/10_5";
// import TodoList from "./10/10_6";
// import TodoList1 from "./10/10_7";
// import TodoList2 from "./10/10_11";
// import Selector from "./11/11_2";
// import Mousemove from "./11/11_3";
// import KeyEvent from "./11/11_4";
// import Submitcomp from "./11/11_5";
// import ReactOnclick from "./11/11_6";
// import ReactChange from "./11/11_7";
// import ReactMousemove from "./11/11_8";
// import ReactMouseover from "./11/11_9";
// import Page from "./12/12_3";
// import Text from "./12/12_4";
// import Page1 from "./12/Page";
// import Input from "./12/12_2";
// import Quiz12weeks from "./12/12_5";
import CheckBox from "./14/CheckBox";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 10 };
  //   this.resetCount = this.resetCount.bind(this);
  // }
  // resetCount() {
  //   this.setState(({ count }) => ({ count: count + 10 }));
  // }
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "LeeYuHan",
      score: 75,
    };
    this.increateCount = this.increateCount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  onChange(key, value) {
    this.setState({
      [key]: value,
    });
  }
  onFocus() {
    console.log("11_1.jsx, On Focus!");
  }
  changeScore(name, value) {
    this.setState({
      [name]: value,
    });
  }
  render() {
    // const func = () => {
    //   console.log("FunctionProps: function!");
    // };
    return (
      <div className="App">
        {/* <h1 className="title">????????? ??????????????? ??????</h1>
        <R001Component></R001Component>
        <R002Component></R002Component>
        <h1>Start React 200!</h1>
        <o>Css</o>
        <Es6 />
        <Variable />
        <SpreadOperator />
        <ClassPrototype />
    <Map />*/}
        {/* <Jqeury /> */}
        {/* <h1>?????? ????????????</h1>
        <ChildComponent />
        <PropsComponent name="???????" />
        <div>
          <b>????????? ???:</b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>????????? ???:</b>
          <BooleanComponent />
        </div>
        <div>
          <DefaultPropsComponent />
        </div>
        <div>
          <ChildProperty>
            <span>?????? ??????</span>
          </ChildProperty>
        </div>
        <div>
          <h3>?????? 3_2</h3>
          <h2>?????? ????????????</h2>
          <PropsComponent name="???????" />
        </div>
        <div>
          <h3>quiz 3-3</h3>
          <BooleanComponent1 />
          <BooleanComponent1 bool />
        </div>
        <div>
          <h3>quiz 3-4</h3>
          <h1>?????? ????????????</h1>
          <ChildComponent2 obj={{ react: "?????????", number: "10" }} />
        </div>
        <StateExample />
        <div>
          <h3>quiz 3-5</h3>
          <h1>?????? ????????????</h1>
          <PropertyComponent
            string={"react"}
            number={10}
            Bool={true}
            Array={[0, 1, 0]}
            obj={{ react: "?????????", number: "100" }}
            func={func}
          />
        </div>
        <div>
          <h1>parent component</h1>
          <Child member={{ name: "?????????", age: "10" }} />
        </div>
        <div>
          <h1>parent component</h1>
          <ChildComponent3 member={{ name: "?????????", job: "?????????" }} />
          <ChildComponent3 member={{ name: "?????????", job: "???????????????" }} />
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
              {this.state.count + 10}?????? ?????????
            </button>
          </div>
        </div>
        <Quiz1 value={20} />
        <Quiz2 value={10} />
        <div>
          <ClickComponent count={10} />
        </div>{" "} */}
        {/* 
        <GuguComponent />
        <div>
          <h1>Start React 200!</h1>
          <p>CSS ????????????</p>
          <LifecycleEx prop_value="FromApp.js" />
        </div>
        <div>
          <h1>Start React 200!</h1>
          <p>CSS ????????????</p>
          <LifecycleEx1 prop_value="FromApp.js" />
        </div>
        <div>
          <h1>Start React 200!</h1>
          <p>CSS ????????????</p>
          <LifecycleEx2 prop_value="FromApp.js" />
        </div>
        <ComponentClass />
        <PureComponent />
        <ShallowEqual />
        <SFC somePropValue={"I'm so HUNGRY"} />
        <FunctionComponent contents="[THIS IS FUNCTIONCOMPONENT]" />
        <ReactHook />
        <Fragments />
        {/* <ListExample />
        <TodoList />
        <TodoList1 /> */}
        {/* <TodoList2 />
        <ReturnMap />
        <Counter count={this.state.count} onAdd={this.increateCount} />
        <ScrollSpy />
      <Counter3 />*/}
        {/* <Input
          label="??????"
          name="name"
          value={this.state.name}
          type="text"
          errorMessage="????????? ???????????? ?????????"
          autoFocus={true}
          onChange={this.onChange}
          onFocus={this.onFocus}
        /> */}
        {/*
        <div>
          <button onClick={this.onChange}>{this.state.name}</button>
        </div>
        <div>
          <h2>QUiz</h2>
          <Input
            type="number"
            name="score"
            value={this.state.score}
            errorMessage="50~100?????? ?????? ??????"
            label="??????"
            onChange={this.changeScore}
          />
        </div>{" "}*/}
        {/*
        
        */}
        {/*
        <div>
          <h3>????????? ??????</h3>
          <Mousemove />
        </div>
        <div>
          <h3>??? ??????</h3>
          <KeyEvent />
        </div>
        <div>
          <h3>Submit</h3>
          <Submitcomp />
        </div>
        <ReactOnclick />
        <ReactChange />
        <ReactMousemove />
        <ReactMouseover />
        <ReactMouseout />
        <ReactOnKey />
        <ReactSubmit />
        <ReactRef /> */}
        {/* <div>
          <h3>????????? ??????</h3>
          <Selector />
        </div>
        <Input name={"hello"} />
        <div>
          <nav>
            <div className="nav-wrapper">
              <div>????????? ??????</div>
            </div>
          </nav>
        </div>
        <Page />
        <Text>
          <h1>???????????????</h1>Hello evrisaoe
        </Text>
        <div>
          <Page1 />
        </div>
        <Quiz12weeks /> */}
        <CheckBox checked label="?????? ??????">
          ????????? ?????? ????????? ?????? ????????????
        </CheckBox>
      </div>
    );
  }
}

export default App;
