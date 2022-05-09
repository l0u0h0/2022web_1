import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value); // e.target.value == 현재 텍스트창의 내용
    }
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
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div>
        <input
          ref={this.setRef}
          id={`input_${name}`}
          classname={`validate ${errorMessage && "invalid"}`}
          value={value}
          onChange={this.handleChange} // input 내용 변경되면 호출
          onFocus={onFocus}
          type={type}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        <div>
          {errorMessage && (
            <span className="helper-text" data-error={errorMessage}>
              {errorMessage}
            </span>
          )}
        </div>
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};
Input.defaultProps = {
  onFocus: () => {},
  onChange: () => {},
  type: "text",
  autoFocus: false,
};
export default Input;
