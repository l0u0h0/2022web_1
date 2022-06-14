import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "../14/CheckBox";
storiesOf("CheckBox", module)
  .addWithJSX("children 예제", () => (
    <CheckBox name="agree">
      <span>동의합니다</span>
    </CheckBox>
  ))
  .addWithJSX("label 예제", () => (
    <CheckBox name="agree" label="이름">
      <span>동의합니다</span>
    </CheckBox>
  ))
  .addWithJSX("onChange 예제", () => (
    <CheckBox name="agree" onChange={action("onChange 이벤트 발생")}>
      <span>동의합니다.</span>
    </CheckBox>
  ))
  .addWithJSX("checked 예제", () => (
    <CheckBox name="agree" label="이름" checked>
      <span>동의합니다.</span>
    </CheckBox>
  ))
  .addWithJSX("errorMessage 예제", () => (
    <CheckBox name="agree" label="이름" errorMessage="동의가 필요합니다.">
      <span>동의합니다.</span>
    </CheckBox>
  ))
  .addWithJSX("autoFocus 예제", () => (
    <CheckBox name="agree" label="이름" autoFocus>
      <span>동의합니다.</span>
    </CheckBox>
  ));
