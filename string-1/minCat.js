function minCat(a, b) {
  const len = Math.min(a.length,b.length);
  const lenA = a.substring(a.length-len);
  const lenB = b.substring(b.length-len);
  return lenA+lenB;
}
