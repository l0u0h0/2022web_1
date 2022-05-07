import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from "babel-runtime/helpers/interopRequireDefault";
import JSXAddon from "storybook-addon-jsx";
import "../src/sass/materialize.scss";

function loadStories() {
  const context = require.context("../src/storys", true, /Story\.jsx$/);
  // context() 함수로 Story로 끝나는 파일이름 목록 가져오기
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
    // context() 함수는 앞장의 require()와 같은 기능
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
