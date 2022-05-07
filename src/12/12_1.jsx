// 에어비앤비 따라하기
// 에어비엔비에서 사용하는 비주얼 테스트 도구
// 컴포넌트들을 독립적으로 관리하고 변화를 볼 수 있음
// yarn add --dev @storybook/react@5.2.6
// yarn add -D babel-loader @babel/core @babel/preset-env webpack
// package.json에서
// scripts에
// "storybook": "start=storybook -p 9001 -c .storybook"
// 확장도구 addon-actions
// yarn add --dev @storybook/addon@5.2.6 @storybook/addon-actions@5.2.6
// addon-actions설정 추가하기: 스토리북이 확장 도구를 인식할 수 있게 함
// .storybook/addons.js
// import '@storybook/addon-actions/register'
// 확장 도구는 이곳에 추가
// addon-jsx
// yarn add --dev storybook-addon-jsx@7.1.13
// 스토리북에서 jsx 코드를 확인할 수 있게 해줌
// .storybook/addons.js
// ->
// import 'storybook-addon-jsx/register'
