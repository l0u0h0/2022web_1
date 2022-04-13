import React from "react";

export default class LunchComponent extends React.Component {
  state = {
    num: 0,
  };
  menu = [
    { name: "김치찌개", price: 6000 },
    { name: "돈까스", price: 7000 },
    { name: "스파게티", price: 5000 },
    { name: "피자", price: 9000 },
    { name: "제육볶음", price: 6500 },
    { name: "순댓국", price: 6000 },
    { name: "칼국수", price: 5000 },
  ];

  render() {
    const menu = this.menu;
    return (
      <div>
        <br />
        <button style={{ margin: "20px" }} onClick={this.rand}>
          새로 고침
        </button>
        <br />
        <p className="title">{menu[this.state.num].name}</p>
      </div>
    );
  }
  rand = () => {
    this.setState({ num: Math.floor(Math.random() * this.menu.length) });
  };
}
// 이미지 입혀서 메뉴 늘려서 로우 하이 사이의 음식 랜덤 추출
