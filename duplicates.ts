export function arrayDiff(a: number[], b: number[]): number[] {
  let array: number[] = [];
  for (let num of a) {
    if (!b.includes(num)) {
      array.push(num);
    }
  }
  return array;
}
