import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  render() {
    const { label, name, value, type } = this.props;
    return (
      <div>
        <label>
          {label}
          <input id={`input_${name}`} value={value} type={type} />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
};
Input.defaultProps = {
  type: "text",
};
export default Input;
