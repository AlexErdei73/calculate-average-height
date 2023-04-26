const { calcAverageHeight } = require("./index");

test("The calcAverageHeight should be a function exported from index module", () => {
  expect(typeof calcAverageHeight).toBe("function");
});

test("When calcAverageHeight called with an empty object we get null", () => {
  const people = {};
  expect(calcAverageHeight(people)).toBe(null);
});

test("When calcAverageHeight called without any input we get null", () => {
  expect(calcAverageHeight()).toBe(null);
});

test("When calcAverageHeight called with an object containing one person we get the person's height", () => {
  const people = {
    Alex: {
      height: 173,
      weigth: 92,
    },
  };
  expect(calcAverageHeight(people)).toBe(173);
});

test("When calcAverageHeight called with an object containing two people we get the averidge height", () => {
  const people = {
    Alex: {
      height: 173,
      weigth: 92,
    },
    Larry: {
      height: 153,
      weight: 87,
    },
  };
  expect(calcAverageHeight(people)).toBe(163);
});
