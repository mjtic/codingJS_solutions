function max1020(a, b){
  // Check if a is in the range and b is not
  if (a >= 10 && a <= 20 && (b < 10 || b > 20)) {
    return a;
  }
  // Check if b is in the range and a is not
  if (b >= 10 && b <= 20 && (a < 10 || a > 20)) {
    return b;
  }
//   // Check if both are in the range
  if (a>=10 && a<=20 && b>=10 && b<=20){
  return Math.max(a,b)
  }
//   // Neither is in the range
  return 0;
}