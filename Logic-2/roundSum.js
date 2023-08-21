  
function roundSum(a, b, c) {
  return round10(a) + round10(b) + round10(c);
}

function round10(num) {
  let remainder = num % 10;
  
  if (remainder >= 5) {
    return num + (10 - remainder);
  } else {
    return num - remainder;
  }
}
