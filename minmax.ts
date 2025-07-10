export class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(" ").map(Number);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return `${max} ${min}`;
  }
}
