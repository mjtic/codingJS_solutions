function twoAsOne(a, b, c){
  if(a+b == c || b+c == a || c+a == b){
    return true;
  }
  return false;
}