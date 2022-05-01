// 컴포넌트에서 addEvenListener() 함수와 같은 DOM 객체 함수를 사용할 때 특정 DOM 객채를 사용해야
// 하는 상황이 발생한다. 예를 들어 특정 엘리먼트 크기나 위치를 가져올 때, 스크롤바 위치를 가져오거나 설정
// 해야할 때 포커스를 설정해야할 때 등등
// 이를 위해 컴포넌트 내에 정의된 변수에 DOM 객체를 저장함
// 특수 프로퍼티 변수 ref 사용

import React from "react";

export default class ScrollSpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener("scroll", this.checkPosition);
  }
  setRef(ref) {
    this.ref = ref; // params ref로 전달받은 엘리먼트를 this.ref에 저장
  }
  checkPosition() {
    // this.ref에 저장된 돔객체의 위치가 스크롤 화면 안/밖 여부 체크
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log("enter");
    } else {
      console.log("exit");
      // this.setState(({ todoList }) => ({
      //   todoList: [...todoList, this.wishList[Math.floor(Math.random() * 20)]],
      // }));
    }
  }
  componentDidMount() {
    this.checkPosition();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkPosition);
  }
  render() {
    return <div ref={this.setRef} />; // 특수 프로퍼티 ref에 setRef()함수를 콜백함수로 전달
    // div 엘리먼트를 getElementById() 함수로 얻어와서 전달받은 콜백함수에 파라메터로 전달함..
  }
}
