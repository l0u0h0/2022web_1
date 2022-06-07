// import React from "react";
// import ReactDOM from "react-dom";
// import Input from "../12/12_2";

// describe("<Input>", () => {
//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Input name="name" />, div);
//     ReactDOM.unmountComponentAtNode(div);
//     expect(React.isValidElement(<Input name="name" />)).toBeTruthy();
//   });
// });

// enzyme
import React from "react";
import { shallow } from "enzyme";
import Input from "../12/12_2";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="name" />);
    }).not.toThrow();
  });
  it("has one element", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});
