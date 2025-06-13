function count(str) {
  let result = {};

  for (let char of str) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(count("aba"));
console.log(count(""));
