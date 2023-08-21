function factorial(n){
  return n===0?1: n*factorial(n-1);
}


console.log(factorial(5)); // Output: 5! = 5 * 4 * 3 * 2 * 1 = 120