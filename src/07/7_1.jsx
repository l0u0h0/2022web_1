import React from "react";

export default class PropertyComponent extends React.Component {
  render() {
    return (
      <div>
        <span>StringProps: {this.props.string}</span>
        <br />
        <span>NumberProps: {this.props.number}</span>
        <br />
        <span>BooleanProps: {String(this.props.Bool)}</span>
        <br />
        <span>ArrayProps: {String(this.props.Array)}</span>
        <br />
        <span>ObjectProps: {JSON.stringify(this.props.obj)}</span>
        <br />
        <span>FunctionProps: {String(this.props.func)}</span>
      </div>
    );
  }
}
