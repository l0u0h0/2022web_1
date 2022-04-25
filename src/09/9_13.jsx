import React from "react";

const FlanApp = (props) => {
  let { BooleanTrueFalse } = props;
  return (
    <div style={{ padding: "0px" }}>
      {BooleanTrueFalse ? "2. " : "1. "}
      {BooleanTrueFalse.toString()}
    </div>
  );
};

export default FlanApp;
