export const LARGE_AND_ABOVE = "largeAndAbove"; // 컴퓨터 모니터용
const BREAKPOINT_NAMES = {
  LARGE: "large", // 컴퓨터 모니터용
  MEDIUM: "medium", // 태블릿용
  SMALL: "small", // 스마트폰용
};
const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128, // 컴퓨터 모니터용
  [BREAKPOINT_NAMES.MEDIUM]: 744, // 태블릿용
  [BREAKPOINT_NAMES.SMALL]: 327, // 스마트폰 용
};
const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${
    breakpoints[BREAKPOINT_NAMES.LARGE]
  }px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (min-width: ${
    breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1
  }px)`,
  print: "@media print",
};

export default {
  //색상
  color: {
    primary: "#03e9f4", // 주 색상
    secondary: "#795548", // 부 색상
    white: "#FFFFFF",
    blue: "#0000ff",
    gray: "#CCCCCC",
    red: "#ff0000",
    my: "#003333",
    default: "#000000", // 기본 문자 색상
  },
  // 폰트 사이즈
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: "60px",
    lg: "54px",
    md: "36px",
    sm: "24px",
    xs: "18px",
  },
  // 길이 단위
  unit: 4,
  responsive,
};
