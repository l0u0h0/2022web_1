import React from "react";
import "./css/Title.css";
import "./css/Page.css";

const Title = () => <div className="title">리액트</div>;
const Page = () => {
  return (
    <div>
      <h1>
        <Title />
      </h1>
      책목록
      <ul>
        <Title />
      </ul>
    </div>
  );
};
export default Page;
