// filter() 함수가 중간에 개입되면 킷값이 변경되어 의미가 없어지게 된다. 킷값이 변경되지 않도록
// 하기 위해서는 고유한 값을 킷값으로 보통 이용한다.
// todoList.filter(todo => todo.finished).map((todo, i) => <div key={`t1_${i}`}>
// {todo.taskName}</div>)
import React from "react";

export default class TodoList3 extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}
