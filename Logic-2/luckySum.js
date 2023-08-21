function luckySum(a, b, c){
  let sum = a+b+c;
  
  if(a===13){
    return 0;
  }else if(b===13){
    return a;
  }else if(c===13){
    return a+b
  }
  return sum;
}