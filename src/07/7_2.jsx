import React from "react";

export default class Child extends React.Component {
  render() {
    const { name, age } = this.props.member;
    return (
      <div>
        <ul>
          <li>이름: {name}</li>
          <li>나이: {age}</li>
        </ul>
      </div>
    );
  }
}
