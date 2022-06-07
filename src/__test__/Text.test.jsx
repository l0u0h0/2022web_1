import React from "react";
import { shallow, mount } from "enzyme";
import Text from "../12/12_4";

describe("<Text>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });
  it("contains <span>", () => {
    expect(mount(<Text>테스트</Text>).find("span")).toHaveLength(1);
  });
});
