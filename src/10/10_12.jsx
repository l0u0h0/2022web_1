// map 이용해서 elements 반환하기
import React from "react";

export default class ReturnMap extends React.Component {
  render() {
    const elements_array = [<li>react</li>, <li>200</li>, <li>Array Map</li>];
    return (
      <div>
        <ul>{elements_array.map((array_val) => array_val)}</ul>
      </div>
    );
  }
}
