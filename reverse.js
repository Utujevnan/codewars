function reverse(str) {
  let trimmed = str.trim();

  let words = trimmed.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 1) {
      words[i] = words[i].split("").reverse().join("");
    }
  }

  return words.join(" ");
}
