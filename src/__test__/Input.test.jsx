import React from "react";
import ReactDOM from "react-dom";
import Input from "../12/12_2";

describe("<Input>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="name" />)).toBeTruthy();
  });
});
