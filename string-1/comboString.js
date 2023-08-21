function comboString(a, b){
  // short + long + short
  if(a.length>b.length){
    return b+a+b;
  }
  return a+b+a;
}