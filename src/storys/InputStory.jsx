import React from "react";
import { storiesOf } from "@storybook/react";
import Lifecycle from "../08/8_14";
import Input from "../11/11_1";
import Selector from "../11/11_2";
import { action } from "@storybook/addon-actions";

storiesOf("Selector", module)
  .addWithJSX("기본 설정", () => <Selector />)
  .addWithJSX("selector 2", () => <Selector />)
  .addWithJSX("Input", () => (
    <Input name="name" onChange={action("onChange event")} />
  ))
  .addWithJSX("LifeCycleEx", () => <Lifecycle value={10} />);
