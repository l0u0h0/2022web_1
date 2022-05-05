import React from "react";

export default class ReactSubmit extends React.Component {
  Submit(e) {
    var inputval = document.getElementById("inputId").value;
    console.log("inputvalue : " + inputval);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input type="text" name="inputName" id="inputId" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
