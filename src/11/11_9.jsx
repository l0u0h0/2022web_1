import React from "react";

export default class ReactMouseover extends React.Component {
  MouseOver(tag) {
    console.log("tag : " + tag);
  }
  render() {
    return (
      <div>
        <div onMouseOver={(e) => this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={(e) => this.MouseOver("input")} />
        <select onMouseOver={(e) => this.MouseOver("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}
