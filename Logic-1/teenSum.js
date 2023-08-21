function teenSum(a, b){
  let teen = (a>=13 && a<=19) || (b>=13 && b<=19) 
  if(teen){
    return 19;
  }
  return a+b;
}