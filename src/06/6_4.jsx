import React from "react";
import PropTypes from "prop-types";
class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = "";
    if (this.props.boolValue === false) {
      message1 = "boolValue default value is false";
    }
    let message2 = "";
    if (this.props.boolValueWithoutDefault === false) {
      message2 = "boolValueWithoutDefault default value is false";
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}
DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};
// 기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
