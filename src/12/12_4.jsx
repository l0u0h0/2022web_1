import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "./withStyles";

class Text extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <span {...css(styles.my)}>{children}</span>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.primary,
    fontSize: size.lg,
  },
  my: {
    color: color.secondary,
    fontSize: size.xg,
  },
}))(Text);
