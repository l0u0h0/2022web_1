import React from "react";
import food_1 from "../image/food_1.jpg";
import food_2 from "../image/food_2.jpg";
import food_3 from "../image/food_3.jpg";
import food_4 from "../image/food_4.jpg";
import food_5 from "../image/food_5.jpg";
import food_6 from "../image/food_6.jpg";
import food_7 from "../image/food_7.jpg";

export default class LunchComponent extends React.Component {
  state = {
    num: 0,
    priceLow: this.props.low,
    priceHigh: this.props.high,
  };
  menu = [
    { name: "김치찌개", price: 6000, src: food_1 },
    { name: "돈까스", price: 7000, src: food_2 },
    { name: "스파게티", price: 10000, src: food_3 },
    { name: "피자", price: 11000, src: food_4 },
    { name: "제육볶음", price: 6500, src: food_5 },
    { name: "순댓국", price: 6000, src: food_6 },
    { name: "칼국수", price: 5000, src: food_7 },
  ];
  result = this.menu
    .filter((food) => {
      if (
        this.state.priceLow <= food.price &&
        this.state.priceHigh >= food.price
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((food) => {
      const { name, price, src } = food;
      return { name, price, src };
    });
  render() {
    return (
      <div>
        LOW {this.state.priceLow} ~ HIGH {this.state.priceHigh}
        <br />
        <button style={{ margin: "20px" }} onClick={this.rand}>
          새로 고침
        </button>
        <br />
        <p className="title">{this.result[this.state.num].name}</p>
        <p className="price">{this.result[this.state.num].price} 원</p>
        <p>
          <img
            style={{ width: "200px", height: "200px" }}
            src={this.result[this.state.num].src}
            alt=""
          />
        </p>
      </div>
    );
  }
  rand = () => {
    this.setState({
      num: Math.floor(Math.random() * this.result.length),
    });
  };
}
// 이미지 입혀서 메뉴 늘려서 로우 하이 사이의 음식 랜덤 추출
