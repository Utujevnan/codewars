export function getMiddle(s: string) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }
  return s[(s.length - 1) / 2];
}

console.log(getMiddle("test"));
