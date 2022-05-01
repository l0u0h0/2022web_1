import React from "react";

export default class TodoList2 extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    let result = [];
    todoList.forEach((todo) =>
      result.push(<div key={todo.taskName}>{todo.taskName}</div>)
    );
    return <div>{result}</div>;
  }
}
