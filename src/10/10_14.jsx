// Uncaught TypeError: this.setState is not a function
// onAdd() 함수 내에서 사용한 this의 범위를 몰라서 발생
// 해결
// onAdd={this.increateCount.bind(this)}
// or
// constructor(props) {
//  ...
//  this.increateCount = this.increateCount.bind(this);
//}
// this의 범위가 App이라는 것을 알려주는 것.
