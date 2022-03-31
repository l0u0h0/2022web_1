import React, { Component } from "react";
import { render } from "react-dom";

class Arrowfunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowfunc: "react200",
      num: 3,
    };
  }
  componentDidMount() {
    function1(1);
    this.function2(1, 1);
    this.function3(1, 3);
    this.function4();
    this.function5(0, 2, 3);

    function function1(num1) {
      return console.log(num1 + ", ES5 func");
    }
  }
  function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ", Arrow Func : " + this.state.arrowfunc);
  };
  function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ", ES5 callback func noBind : ");
      console.log(this.state.arrowfunc);
    }, 100);
  }
  function4() {
    setTimeout(
      function () {
        console.log("4. ES5 callback func Bind : " + this.state.arrowfunc);
      }.bind(this),
      100
    );
  }
  function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ", Arrow callback func : " + this.state.arrowfunc);
    }, 100);
  };
  render() {
    return <h2>[THIS IS ARROWFUNCTION]</h2>;
  }
}

export default Arrowfunc;
