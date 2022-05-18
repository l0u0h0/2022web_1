import React from "react";

export default function Quiz12weeks() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          React
        </a>
      </div>
      <div className="container">
        <div class="row">
          <form class="input-field col s6">
            <input value="HongGilDong" id="name" type="text" class="validate" />
            <label class="active" for="name">
              Name
            </label>
            <a class="waves-effect waves-light btn">제출</a>
          </form>
        </div>
      </div>
    </nav>
  );
}
