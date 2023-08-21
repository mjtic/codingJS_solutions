function lastChars(a, b) {
  const firstChar = a.length >0? a[0]:'@';
  const lastChar = b.length>0? b.slice(-1):'@';
  
  return firstChar+lastChar;
}