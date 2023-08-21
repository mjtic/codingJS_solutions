function close10(a, b){
 let intA = Math.abs(10-a);
 let intB = Math.abs(10-b);
  if (intA==intB){
   return 0;
  } else if(intA > intB) {
  return b;
  }else {
  return a;
  }
}