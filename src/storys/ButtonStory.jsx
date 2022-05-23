import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../12/Button";

storiesOf("Button", module)
  .addWithJSX("기본 설정", () => <Button>전송하기</Button>)
  .addWithJSX("disabled", () => <Button disabled>전송하기</Button>)
  .addWithJSX("large", () => <Button large>전송하기</Button>)
  .addWithJSX("xlarge", () => <Button xlarge>전송하기</Button>)
  .addWithJSX("small", () => <Button small>전송하기</Button>)
  .addWithJSX("xsmall", () => <Button xsmall>전송하기</Button>)
  .addWithJSX("primary", () => <Button primary>전송하기</Button>)
  .addWithJSX("secondary", () => <Button secondary>전송하기</Button>)
  .addWithJSX("primary, large", () => (
    <Button primary large>
      전송하기
    </Button>
  ))
  .addWithJSX("secondary, small", () => (
    <Button secondary small>
      전송하기
    </Button>
  ));
