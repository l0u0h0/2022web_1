import React from "react";

export default class ReactOnKey extends React.Component {
  OnKey(event, e) {
    var val = e.target.value;
    console.log("event : " + event + ", value : " + val);
  }
  render() {
    return (
      <div>
        onKeyDown :{" "}
        <input type="text" onKeyDown={(e) => this.OnKey("onKeyDown", e)} />
        <br />
        onKeyPress :{" "}
        <input type="text" onKeyPress={(e) => this.OnKey("onKeyPress", e)} />
        <br />
        onKeyUp :{" "}
        <input type="text" onKeyUp={(e) => this.OnKey("onKeyUp", e)} />
        <br />
      </div>
    );
  }
}
