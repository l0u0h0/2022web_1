import React from "react";

export default class KeyEvent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      downkey: "",
      presskey: "",
      upkey: "",
    };
    // window.addEventListener("keydown", this.KeyDown);
    // window.addEventListener("keypress", this.KeyPress);
    // window.addEventListener("keyup", this.KeyUp);
    this.KeyEvent = this.KeyEvent.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }
  KeyEvent(e) {
    if (e.target.id === "downkey") {
      window.addEventListener("keydown", (e) => {
        if (e.target.id === "downkey") {
          this.setState({
            downkey: e.target.value,
          });
        }
      });
      console.log("downkey");
    } else if (e.target.id === "presskey") {
      window.addEventListener("keypress", (e) => {
        if (e.target.id === "presskey") {
          this.setState({
            presskey: e.target.value,
          });
        }
      });
      console.log("presskey");
    } else if (e.target.id === "updkey") {
      window.addEventListener("keyup", (e) => {
        if (e.target.id === "updkey") {
          this.setState({
            upkey: e.target.value,
          });
        }
      });
      console.log("upkeyt");
    }
  }
  render() {
    return (
      <div>
        <div>
          <label>onKeyDown:</label>
          <input id="downkey" type="text" onKeyDown={this.KeyEvent} />
          <br />
          <label>onKeyPress:</label>
          <input id="presskey" type="text" onKeyPress={this.KeyEvent} />
          <br />
          <label>onKeyUp:</label>
          <input id="updkey" type="text" onKeyUp={this.KeyEvent} />
          <br />
        </div>
        <div>
          <p>Down Key: {this.state.downkey}</p>
          <p>Pressed Key: {this.state.presskey}</p>
          <p>Up Key: {this.state.upkey}</p>
        </div>
      </div>
    );
  }
}
