import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "../14/CheckBox";
storiesOf("CheckBox", module).addWithJSX("children 예제", () => (
  <CheckBox name="agree">
    <span>동의합니다</span>
  </CheckBox>
));
