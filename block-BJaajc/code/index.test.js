const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require("./index");

test("get full name of 'ritika' + 'agrawal'", () => {
  expect(getFullName("ritika", "agrawal")).toBe("ritika agrawal");
});
