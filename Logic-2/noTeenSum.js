function noTeenSum(a, b, c){

  
  let aTeen = ((a>=13 && a<15 || a>16 && a<=19)? 0: a);
  let bTeen = ((b>=13 && b<15 || b>16 && b<=19)? 0: b);
  let cTeen = ((c>=13 && c<15 || c>16 && c<=19)? 0: c);
 
  return aTeen + bTeen+ cTeen;
}