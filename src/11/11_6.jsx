import React from "react";

export default class ReactOnclick extends React.Component {
  buttonClick = (parse) => {
    if (typeof parse != "string") parse = "Click a";
    console.log("parse : " + parse);
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.buttonClick("CLick button")}>
          CLick button
        </button>
        <div onClick={(e) => this.buttonClick("Click div")}>CLick div</div>
        <a href="javascript:" onClick={this.buttonClick}>
          Click a
        </a>
      </div>
    );
  }
}
