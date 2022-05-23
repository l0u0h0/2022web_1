import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../12/Button";

storiesOf("Button", module)
  .addWithJSX("기본 설정", () => <Button>전송하기</Button>)
  .addWithJSX("disabled", () => <Button disabled>전송하기</Button>)
  .addWithJSX("large", () => <Button large>전송하기</Button>)
  .addWithJSX("primary, large", () => (
    <Button primary large>
      전송하기
    </Button>
  ));
