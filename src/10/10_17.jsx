import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { onChange, errorMessage, label, name, value, type } = this.props;
    return (
      <div>
        <label>
          {label}
          <input
            ref={this.setRef}
            id={`input_${name}`}
            value={value}
            onChange={onChange}
            type={type}
          />
          <div>
            {errorMessage && <span className="error">{errorMessage}</span>}
          </div>
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
  errorMessage: PropTypes.string,
  autoFocus: PropTypes.bool,
  onchange: PropTypes.func,
};
Input.defaultProps = {
  onchange: () => {},
  type: "text",
  autoFocus: false,
};
export default Input;
