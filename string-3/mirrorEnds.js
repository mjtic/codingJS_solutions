function mirrorEnds(string) {
  let result = "";
  let len = string.length;
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    if (string.charAt(i) === string.charAt(j)) {
      result += string.charAt(i);
    } else {
      break;
    }
  }
  return result;
}