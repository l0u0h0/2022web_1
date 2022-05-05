import React from "react";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }
  onChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChange2(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div>
          <input onChange={this.onChange} value={this.state.name}></input>
          <select onChange={this.onChange2}>
            <option>Computer</option>
            <option>Education</option>
          </select>
        </div>
        <div>
          <ul>
            <li>이름: {this.state.name}</li>
            <li>전공: {this.state.value}</li>
          </ul>
        </div>
      </div>
    );
  }
}
