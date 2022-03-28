import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import "./Component.css";
import R001Component from "./R001_Component";
import R002Component from "./R002_Component";
import Es6 from "../src/04/4_13";
import Variable from "../src/04/4_14";

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
      </div>
    );
  }
}

export default App;
