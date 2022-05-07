import React from "react";
import { storiesOf } from "@storybook/react";
import Selector from "../11/11_2";

storiesOf("Selector", module)
  .add("기본 설정", () => <Selector />)
  .add("selector 2", () => <Selector />);
