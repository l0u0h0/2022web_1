import React from "react";

export default class ReactChange extends React.Component {
  change = (e) => {
    let val = e.target.value;
    console.log("params : " + val);
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.change} />
        <select onChange={this.change}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}
