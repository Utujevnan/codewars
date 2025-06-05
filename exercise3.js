function findAverage(array) {
  return array.length == 0
    ? 0
    : array.reduce((num1, num2) => num1 + num2) / array.length;
}
