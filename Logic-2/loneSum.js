function loneSum(a, b, c){
  let sum = a+b+c;
  let zero = a===b && b===c && c===a;
  
  if(zero){
    return 0;
  }
  if(a===b){
    return c;
  } else if(b===c){
    return a;
  } else if(c===a){
    return b;
  }
  return sum;
}