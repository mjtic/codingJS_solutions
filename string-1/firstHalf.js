function firstHalf(str) {
  const halfLength = str.length / 2;
  return str.substring(0, halfLength) + str.substring(halfLength);
}