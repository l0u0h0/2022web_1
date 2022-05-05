import React from "react";

export default class ReactRef extends React.Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }
  Reffocus = (e) => {
    this.InputRef.current.focus();
  };
  JavascriptFocus() {
    document.getElementById("id").focus();
  }
  render() {
    return (
      <div>
        <input id="id" type="text" ref={this.InputRef} />
        <input type="button" value="Ref Focus" onClick={this.Reffocus} />
        <input
          type="button"
          value="javascript focus"
          onClick={this.JavascriptFocus}
        />
      </div>
    );
  }
}
