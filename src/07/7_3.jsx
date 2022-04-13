import React from "react";

export default class ChildComponent3 extends React.Component {
  render() {
    return (
      <div>
        <div>
          안녕하세요! 저는 {this.props.member.name} 입니다. 직업은&nbsp;
          {this.props.member.job} 입니다. 연락주세요
        </div>
        <button>클릭</button>
      </div>
    );
  }
}
