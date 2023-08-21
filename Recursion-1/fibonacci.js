function fibonacci(n){
  if(n===0){
    return 0;
  }
  return n<=2?1: (fibonacci(n-1)+fibonacci(n-2));
}