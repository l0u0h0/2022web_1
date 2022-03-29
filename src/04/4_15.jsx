import React, { Component } from "react";

class SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //js array
    var vararray1 = ["num1", "num2"];
    var vararray2 = ["num1", "num4"];
    var sumVarArr = [vararray1[0], vararray1[1], vararray2[0], vararray2[1]];
    // var sumVarArr = [].concat(vararray1, vararray2);
    console.log("1. sumVarArr : " + sumVarArr);
    //ES6 array
    let sumLetArr = [...vararray1, ...vararray2];
    console.log("2. sumLetArr : " + sumLetArr);
    const [sum1, sum2, ...remain] = sumLetArr;
    console.log(
      "3. sum1 : " + sum1 + ", sum2 : " + sum2 + ", remain : " + remain
    );

    var varObj1 = { key1: "val1", key2: "val2" };
    var varObj2 = { key2: "new2", key3: "val3" };
    // js object
    var sumVarObj = Object.assign({}, varObj1, varObj2);
    console.log("4. sumVarObj : " + JSON.stringify(sumVarObj));
    //ES6 Object
    let sumLetObj = { ...varObj1, ...varObj2 };
    console.log("5. sumLetObj : " + JSON.stringify(sumLetObj));
    const { key1, key3, ...others } = sumLetObj;
    console.log(
      "6. key1 : " +
        key1 +
        ", key3 : " +
        key3 +
        ", others : " +
        JSON.stringify(others)
    );
  }
  render() {
    return <h2>[THIS IS SpreadOperator]</h2>;
  }
}

export default SpreadOperator;
