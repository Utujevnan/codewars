export function oddOrEven(array: number[]) {
  let sum: number = array.reduce((num1, num2) => num1 + num2, 0);
  if (sum % 2 == 0) {
    return "even";
  }
  return "odd";
}
