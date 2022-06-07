// src/setupTests.js
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import { jsxDecorator } from "storybook-addon-jsx";

configure({ adapter: new Adapter() });

afterEach(() => {
  // console.error() 함수 객체에 spyOn() 함수로 추가된 가상 코드 제거
  console.error.mockClear();
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation((e) => {
    // spyOn을 사용하여 console 객체의
    // error() 함수를 실제 기능 대신 mockImplementation에 전달되는 함수가 실행되도록 설정
    throw new Error(e); // console.error() 실행될 때 절달된 인자로 오류를 발생하도록 함.
  });
});
