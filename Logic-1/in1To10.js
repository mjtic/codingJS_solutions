function in1To10(n, outsideMode) {
  if (outsideMode) {
    return n <= 1 || n >= 10;
  } else {
    return n >= 1 && n <= 10;
  }
}

/*
function in1To10(n, outsideMode){
  if(outsideMode){
    if(n <= 1 || n>=10){
      return true;
    }else {
      return false;
    }
  } 
  if(!outsideMode){
    if(n>=1 && n<=10){
      return true;
    }else{
      return false;
    }
  } 
}
*/