// key: 배열 컴포넌트를 마들 때 포함해야 하는 특수한 문자열 어트리뷰트
import React from "react";

export default class TodoList2 extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];
    return (
      <div>
        {todoList.map((todo, i) => (
          <div key={`t1_${i}`}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}
