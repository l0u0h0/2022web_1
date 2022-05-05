import React from "react";

export default class ReactMousemove extends React.Component {
  MouseMove(tag) {
    console.log("tag : " + tag);
  }
  render() {
    return (
      <div>
        <div onMouseMove={(e) => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={(e) => this.MouseMove("input")} />
        <select onMouseMove={(e) => this.MouseMove("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}
