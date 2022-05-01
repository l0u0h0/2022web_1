import React, { useEffect, useState } from "react";

export default function ReactHook(props) {
  const [contents, setContents] = useState("[THIS IS REACT]");

  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div style={{ padding: "0px" }}>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[THIS IS HOOKS]")}>버튼</button>
    </div>
  );
}
