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
  it("contains <input>", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
  });
  it("assigns the prop value and type", () => {
    const expectedValue = "123";
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find("input").prop("value")).toBe(expectedValue);
    const { type, value } = wrapper.find("input").props();
    expect(value).toBe(expectedValue);
    expect(type).toBe("text");
  });
  it("renders errorMessage", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find(".error")).toHaveLength(0);
    const expectedErrorMessage = "옳지 못한 값이 입력되었습니다";
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find("span").prop("className")).toBe("error");
    expect(wrapper.find("error")).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });
  it("calls back onChange on input change", () => {
    const changeStub = jest.fn();
    // jest는 감시함수(fn())를 제공하여 이렇게 생성된 함수가 호출되는지 체크하는 방법 제공
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    // 생성된 함수를 onChange 프로퍼티에 할당
    expect(changeStub).not.toHaveBeenCalled(); // 이벤트 발생 이전에는 호출되지 않음을 확인
    const expectedTargetValue = "updated input";
    wrapper
      .find("input")
      .simulate("change", { target: { value: expectedTargetValue } });
    // input 엘리먼트를 찾아서 change 이벤트를 발생시킴. 이때 변경되는 값은 'updated input'임.
    expect(changeStub).toHaveBeenCalledTimes(1); // 이벤트 발생 이후 함수 호출 체크
    expect(changeStub).toHaveBeenCalledWith("test_name", expectedTargetValue);
    // 콜백함수에게 전달되는 값이 name의 값과 'updated input'인지 체크
  });
});
