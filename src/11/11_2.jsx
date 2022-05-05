import React from "react";

export default class Quiz11_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
    };
  }
  render() {
    return (
      <div>
        <input></input>
        <select>
          <li>computer</li>
        </select>
      </div>
    );
  }
}
