import React, { Component } from "react";

class Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200";
    console.log("varName2 : " + varName);
    // 'varName' is already defined no-redeclare
    // 이미 선언된 변수라는 경고 메세지가 뜨지만 var은 재선언, 재할당을 가능케 하기에
    // 페이지는 정상적으로 출력된다.

    let letName = "react";
    console.log("letName1 : " + letName);
    // let letName = '200';
    // Parsing Error: Identifier 'letName' has already been declared
    // let은 재선언이 불가하기에 에러가 발생,
    letName = "react200";
    console.log("letName2 : " + letName);

    const constName = "react";
    console.log("constName : " + constName);
    // const constName = '200';
    // Parsing error: Identifier 'constName' has already been declared
    // constName = 'react200';
    // Uncaught TypeError: Assignment to constant variable
    // const는 재선언과 재할당이 불가능하기에 위 두 가지의 에러가 발생한다.
  }
  render() {
    return <h2>[THIS IS Variable]</h2>;
  }
}
export default Variable;
