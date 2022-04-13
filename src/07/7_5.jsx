import React from "react";

export default class LunchComponent extends React.Component {
  state = {
    num: 0,
    priceLow: this.props.low,
    priceHigh: this.props.high,
  };
  menu = [
    { name: "김치찌개", price: 6000 },
    { name: "돈까스", price: 7000 },
    { name: "스파게티", price: 10000 },
    { name: "피자", price: 11000 },
    { name: "제육볶음", price: 6500 },
    { name: "순댓국", price: 6000 },
    { name: "칼국수", price: 5000 },
  ];
  result = this.menu.map((food) => {
    if (
      this.state.priceLow <= food.price &&
      this.state.priceHigh >= food.price
    ) {
      const { name, price } = food;
      return { name, price };
    } else {
      const { name, price } = { name: "no", price: -100 };
      return { name, price };
    }
  });
  render() {
    const menu = this.menu;
    console.log(this.result);
    return (
      <div>
        {this.state.priceLow} ~ {this.state.priceHigh}
        <br />
        <button style={{ margin: "20px" }} onClick={this.rand}>
          새로 고침
        </button>
        <br />
        <p className="title">{this.result[this.state.num].name}</p>
        <p className="price">{this.result[this.state.num].price} 원</p>
      </div>
    );
  }
  rand = () => {
    this.setState({ num: Math.floor(Math.random() * this.result.length) });
  };
}
// 이미지 입혀서 메뉴 늘려서 로우 하이 사이의 음식 랜덤 추출
