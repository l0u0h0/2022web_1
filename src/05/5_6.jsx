import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    var Map_arr = [1, 2, 0, 0];
    var Map_newarr = [];
    console.log("1. maparr : [" + Map_arr + "]");

    let Map_multiarr = Map_arr.map((x) => x + 2);
    console.log("2. mapmultiarr : [" + Map_multiarr + "]");

    var objarr = [
      { key: "react", value: "200" },
      { key: "리액트", value: "twohunderd" },
    ];
    let Map_objarr = objarr.map((obj, index) => {
      console.log(index + 3 + ". obj :" + JSON.stringify(obj));
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objarr : [" + JSON.stringify(Map_objarr) + "]");
  }
  render() {
    return <h2>[THIS IS Map]</h2>;
  }
}
export default Map;
