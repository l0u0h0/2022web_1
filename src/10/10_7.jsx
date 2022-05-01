import React from "react";

export default class TodoList1 extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    const todos = todoList.map((todo) => <div>{todo.taskName}</div>);
    return <div>{todos}</div>;
  }
  // render() {
  //   const todoList = [
  //     { taskName: "빨래하기", finished: false },
  //     { taskName: "공부하기", finished: true },
  //   ];
  //   return <div>{todoList.map((todo) => <div>{todo.taskName}</div>)}</div>;
  // }
}
// Warning: Each child in a list should have a unique "key" props
