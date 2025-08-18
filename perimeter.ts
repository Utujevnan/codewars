export const perimeter = (n: number): number => {
  let a = 0,
    b = 1;

  for (let i = 0; i <= n + 2; i++) {
    [a, b] = [b, a + b];
  }

  return 4 * (a - 1);
};
