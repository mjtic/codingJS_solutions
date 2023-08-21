function lastTwo(str){
  const front = str.slice(0,-2);
  const last = str.slice(-1);
  const secondLast = str.slice(-2,-1);
  
  return front+last+secondLast;
}