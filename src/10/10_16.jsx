//컴포넌트에서 돔 이벤트 사용하기
// 출력된 돔 객체에 이벤트 처리를 넣기 위해서는 돔 객체를 출력한 컴포넌트에 이벤트 프로퍼티 사용하면 됨
// 이벤트 프로퍼티: 특수프로퍼티로 콜백함수로 호출됨
// * HTML 문서와 달라지는 점은 카멜케이스 형태로 쓰고 큰 따옴표 대신 중괄호 쓴다는 것
// click, 엘리먼트의 마우스나 키보드가 클릭될 때, onClick
// submit, 폼의 데이터가 전송될 때, onSubmit
// mousemove, 엘리먼트 위에서 마우스 커서가 움직일 때, onMouseMove
// mouseover, 엘리먼트 영역 위로 마우스 커서가 돌아다닐 때, onMouseOver
// mouseout, 엘리먼트 위에 있던 마우스 커서가 영역을 떠나갈 때, onMouseOut
// keydown, 키보드 버튼이 눌렸을 때, onKeyDown
// keypress, 키보드 버튼 입력이 완료되었을 때, onKeyPress
import React from "react";

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increateCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 초기화
      </div>
    );
  }
}
export default Counter3;
