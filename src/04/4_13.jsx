import React, { Component } from "react";

class Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var jsString1 = "자바스크립트";
    var jsString2 = "입니다\n다음줄입니다.";
    console.log(jsString1 + " 문자열" + jsString2 + "~");

    var Es6String1 = "ES6";
    var Es6String2 = "입니다";
    console.log(`${Es6String1}문자열${Es6String2}!!
____다음 줄 입니다.`);

    var LongString = "ES6에 추가된 String 함수들입니다.";
    // startsWith - 변수 앞에서부터 일치하는 문자열이 있는 지 search
    console.log("startsWith: " + LongString.startsWith("ES6에 추가"));
    // endsWith - 변수 뒤에서부터 일치하는 문자열이 있는지 search
    console.log("endsWith: " + LongString.endsWith("함수들입니다."));
    // includes - 위치에 상관없이 변수에 특정 문자열이 포함돼 있는지 판단
    console.log("includes: " + LongString.includes("추가된 String"));
    // 셋 다 true or false로 return
  }
  render() {
    return <h2>[THIS IS ES6 STRING]</h2>;
  }
}
export default Es6;
