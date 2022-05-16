import { css } from "aphrodite";
import React from "react";
import { PureComponent } from "react";
import withStyles from "react-with-styles";

class Text extends PureComponent {
  render() {
    const { childern, styles } = this.props;
    return <span {...css(styles.default)}>{childern}</span>;
  }
}

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fonsSize: size.md,
  },
}))(Text);
