function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(value) {
  let reversed = value.toString().split("").reverse().join("");

  return reversed == value.toString();
}

function getCircumfrence(radius) {
  return `The circumference is ${(Math.PI * 2 * radius).toFixed(2)}`;
}

function getArea(radius) {
  return `The area is ${(Math.PI * radius * radius).toFixed(2)}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
