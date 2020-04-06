const fibonacci = require("./fibonacci");

test("fibonacci(7) should be equal 13", () => {
  expect(fibonacci(7)).toBe(13);
});
