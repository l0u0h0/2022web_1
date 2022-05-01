import React from "react";

export default class TodoList extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    return (
      <div>
        <div>{todoList[0].taskName}</div>
        <div>{todoList[1].taskName}</div>
      </div>
    );
  }
}
