function number(lines) {
  return lines.map(function (line, index) {
    return index + 1 + ": " + line;
  });
}
