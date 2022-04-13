import React from "react";

export default class LunchComponent extends React.Component {
  render() {
    let menu = [
      { name: "김치찌개", price: 6000 },
      { name: "돈까스", price: 7000 },
      { name: "스파게티", price: 5000 },
      { name: "피자", price: 9000 },
    ];
    let num = Math.floor(Math.random() * menu.length);
    return (
      <div>
        {num}
        {menu[num].name}
      </div>
    );
  }
}
// 이미지 입혀서 메뉴 늘려서 로우 하이 사이의 음식 랜덤 추출
