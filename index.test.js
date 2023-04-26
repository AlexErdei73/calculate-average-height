const { calcAverageHeight } = require("./index");

test("The calcAverageHeight should be a function exported from index module", () => {
  expect(typeof calcAverageHeight).toBe("function");
});
