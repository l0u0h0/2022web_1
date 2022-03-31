import React, { Component } from "react";

class Foreach extends Component {
  componentDidMount() {
    var For_arr = [3, 2, 0, 0];
    var For_newarr = [];

    for (var i = 0; i < For_arr.length; i++) {
      For_newarr.push(For_arr[i]);
    }
    console.log("1. for_newarr: [" + For_newarr + "]");

    var Foreach_arr = [3, 3, 9, 8];
    var Foreach_newarr = [];
    Foreach_arr.forEach((result) => {
      Foreach_newarr.push(result);
    });
    console.log("2. foreach_newarr: [" + Foreach_newarr + "]");
  }
  render() {
    return <h2>[THIS IS FOREACH]</h2>;
  }
}
export default Foreach;
