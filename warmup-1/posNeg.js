function posNeg(a, b, negative){
  // if one pos || one neg return true
  // if neg, neg, true return true
  if(negative){
  return a < 0 && b <0 
  } else {
  return a < 0 && b >0 || a > 0 && b < 0
  }
}