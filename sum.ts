export function positiveSum(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  return arr.filter((num) => num >= 0).reduce((num1, num2) => num1 + num2, 0);
}
