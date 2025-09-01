export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i);

    const right = arr.slice(i + 1);

    const leftSum = left.reduce((a, b) => a + b, 0);
    const rightSum = right.reduce((a, b) => a + b, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
