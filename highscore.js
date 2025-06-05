function high(x) {
  let words = x.split(" ");
  let highestScore = 0;
  let highestWord = "";

  for (let word of words) {
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i) - 96;
    }

    if (sum > highestScore) {
      highestScore = sum;
      highestWord = word;
    }
  }

  return highestWord;
}

console.log(high("vanessa akunda kurya"));
