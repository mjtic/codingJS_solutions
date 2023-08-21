function inOrder(a, b, c, bOk){
  if(b>=a && c>b && !bOk || b>a && c>b && bOk){
    return true;
  }
  if(b<=a && c>b && bOk){
    return true;
  }
  return false;
}