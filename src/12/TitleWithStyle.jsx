import React from "react";
import withStyles, { css } from "./withStyles";

const Title1 = (props) => {
  const { styles, page } = props;
  return (
    // 기본으로 default 적용, props로 들어온 page가 true면 page 스타일 overwrite
    <div {...css(styles.default, page && styles.page)}>리액트</div>
  );
};
export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.lg,
  },
  page: {
    color: color.blue,
    fontSize: size.xg,
  },
}))(Title1);
