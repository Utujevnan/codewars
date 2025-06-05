function grow(x) {
  return x.length == 0 ? 0 : x.reduce((first, second) => first * second);
}

console.log(grow([1, 2, 2]));
