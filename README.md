### `2022_1. Web응용실무`

- learning react

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
