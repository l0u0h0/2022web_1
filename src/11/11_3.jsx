import React from "react";

export default class Mousemove extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };
    this.setRef = this.setRef.bind(this);
    window.addEventListener("mousemove", this.Change);
  }
  Change = (e) => {
    this.setState({
      location: e.target.tagName,
    });
  };
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    return (
      <div>
        <h3 ref={this.setRef}>DIV / OnMouseMove </h3>
        <input ref={this.setRef} />
        <select ref={this.setRef}>
          <option>Computer</option>
          <option>Education</option>
        </select>
        <p ref={this.setRef}>마우스가 있는 태그 {this.state.location}</p>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove");
  }
}
