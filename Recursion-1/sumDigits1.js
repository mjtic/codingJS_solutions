function sumDigits1(n){
  if(n===0){
    return 0; // Base case: if n is 0, return 0 as the sum of digits is 0.
    
  }
  return n%10+sumDigits1(Math.floor(n/10));// Recursive case: add the rightmost digit to the sum of the rest of the digits.
}