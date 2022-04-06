// 프로퍼티 자료형
// 자바스크립트 자료형 모두 가능
// 숫자, 문자열, 불리언, 객체, 배열, 함수 등등
// 필수 사항은 아니지만 프로퍼티의 자료형을 정의하는 것이 좋음
// 나중에 코드를 읽을 때 도움이 많이 됨.

import React from "react";
import PropType from "prop-types"; // prop-types 라이브러리 임폴트

class PropsComponent extends React.Component {
  render() {
    // name 프로퍼티 내용 출력
    return (
      <div className="message=container">{this.props.name}from parent</div>
    );
  }
}
// 자료형 선언 예제
PropsComponent.PropType = {
  // 자료형 선언 시 변수 propType 사용
  name: PropType.string, // 문자열 자료형으로 name을 선언
};

export default PropsComponent;
