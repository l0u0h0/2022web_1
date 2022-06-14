import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "../12/withStyles";

export default class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.checked,
      label: "",
    };
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  handleClick(e) {
    const { name, onChange } = this.props;
    onChange(name, e.target.checked);
    this.setState(({ check }) => ({
      check: !check,
    }));
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, styles, label, children } = this.props;
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            checked={this.state.check && "checked"}
            onChange={this.handleClick}
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};
