import React, { Component } from "react";
import PropTypes from "prop-types";
import "../sass/materialize.scss";
import Input from "./12_2";

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.ReturnValue = this.ReturnValue.bind(this);
    this.localSubmit = this.localSubmit.bind(this);
  }
  ReturnValue(name, Inputvalue) {
    // console.log(name, Inputvalue);
    this.setState({
      [name]: Inputvalue,
    });
  }
  localSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state.name);
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              React
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <form className="input-field col-s6">
              <Input name="name" type="text" onChange={this.ReturnValue} />
              <label className="active" htmlFor="name">
                이름
              </label>
              <button
                className="waves-effect waves-light btn"
                type="submit"
                name="action"
                onClick={this.localSubmit}
              >
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Submit.propTypes = {
  onSubmit: PropTypes.func,
};
Submit.defaultProps = {
  onSubmit: () => {},
};
