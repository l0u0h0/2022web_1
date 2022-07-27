### `2022_1학기 Web응용실무`

- learning react

---

- 미디어쿼리 활용 css
- 타이틀의 텍스트 크기를 40px로 하되, 600px보다 작은 화면에서는 20px로 줄이고 싶을 때

```css
@media (max-width: 600px) {
  .title {
    font-size: 20px;
  }
}
```

```jsx
export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle,,,
    ,,, 생략 ,,,
    "@media (max-width: 600px)": { fontSize: '20', },
  },
  ,,, 생략 ,,,
}))
```

- 1. jest add
  - `yarn add --dev jest`
- 2. toBe: 정확한 값 일치 여부 확인
  -

```jsx
describe("<test>", () => {
  it("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });
});
```

- 3. toEqual: 객체의 값 일치 여부 확인
  -

```jsx
describe("<test>", () => {
  it("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
```

- 4. not: 불일치 여부 확인
  -

```jsx
describe("<test>", () => {
  it("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});
```

- 5. toBeNull: null 여부 만 확인
- 6. toBeUndefined: undefined 여부 만 확인
- 7. toBeDefined: 위와 반대 경우만 확인
- 8. toBeTruthy: true로 취급되는 구문을 확인
- 9. toBeFalsy: false로 취급되는 구문을 확인

  - ```jsx
    describe("<test>", () => {
      it("null", () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
      });
    });
    ```

  - ```jsx
    describe("<test>", () => {
      it("zero", () => {
        const z = 0;
        expect(n).not.toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
      });
    });
    ```

- 10. toThrow: 함수 호출 시 에러 발생 여부 확인, 단순 에러 및 특정 에러 지정 가능
  - ```jsx
    function testError() {
      throw new Error("Error occurs");
    }
    describe("<test>", () => {
      it("Function test", () => {
        expect(testError).toThrow();
        expect(testError).toThrow(Error);
      });
    });
    ```

### enzyme

- 테스트 과정에서 작성된 컴포넌트의 기능만을 손쉽게 검사해주는 도구
- 앞서 소개한 테스트 방식은 리액트 톰 함수를 사용하기 때문에  
  테스트 중인 컴포넌트 이외에도 연결된 자식컴포넌트까지 모두 출력하기에,
- 또한 리액트는 제이쿼리와 같이 엘리먼트 추출 함수를 제공하지 않기때문에  
  화면 출력을 검사하기 위해서는 번거롭다.
- `yarn add --dev enzyme enzyme-adapter-react-16.3 react-test-renderer`
- 테스트 환경에 `enzyme` 추가하기

```js
// src/setupTests.js
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

configure({ adapter: new Adapter() });
```
