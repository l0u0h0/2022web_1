import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "./withStyles";

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;
    return (
      <div>
        <button
          {...css(
            styles.default,
            xsmall && styles.xsmall,
            small && styles.small,
            large && styles.large,
            xlarge && styles.xlarge,
            secondary && styles.secondary,
            primary && styles.primary
          )}
          disabled={disabled}
          onClick={onPress}
        >
          {children}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};
export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 4,
    borderStyle: "dashed",
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: "pointer",
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.secondary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
    backgroundColor: color.my,
  },
}))(Button);
