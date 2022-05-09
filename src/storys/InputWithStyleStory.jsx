import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../12/12_2";

storiesOf("InputWithStyle", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="Lee" />)
  .addWithJSX("value 예제", () => (
    <Input name="name" label="Lee" value="DoIt" />
  ))
  .addWithJSX("autoFocus 예제", () => (
    <Input name="name" label="Lee" value="DoIt" autoFocus />
  ))
  .addWithJSX("errorMessage 에제", () => (
    <Input name="name" label="Lee" errorMessage="이름을 입력해주시오" />
  ))
  .addWithJSX("score 에제", () => (
    <Input
      name="score"
      label="성적"
      type="number"
      errorMessage="점수를 입력해주세요"
    />
  ));
