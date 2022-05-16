import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../12/12_4";
import Page1 from "../12/Page";

storiesOf("Text", module)
  .addWithJSX("기본 설정", () => <Text>안녕하세요</Text>)
  .addWithJSX("PageStory", () => <Page1 />);
