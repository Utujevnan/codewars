export function toCamelCase(str: string): string {
  const words: string[] = str.split(/[-_]/);
  let result: string = words[0];

  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1);
  }

  return result;
}
