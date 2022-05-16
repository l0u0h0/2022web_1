import React from "react";
// import Title1 from "./TItle";
import TitleWithStyle from "./TitleWithStyle";

const Page1 = () => {
  return (
    <div>
      <h1>
        <TitleWithStyle page />
      </h1>
      책목록
      <ul>
        <TitleWithStyle />
      </ul>
    </div>
  );
};
export default Page1;
