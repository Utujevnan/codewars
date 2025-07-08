export function isIsogram(str: string): boolean {
  let a: string[] = [];

  for (let letter of str.toLowerCase()) {
    if (a.includes(letter)) {
      return false;
    }
    a.push(letter);
  }

  return true;
}
