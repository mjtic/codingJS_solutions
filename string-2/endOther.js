function endOther(a, b){
const lowerA= a.toLowerCase();
const lowerB = b.toLowerCase();
  return lowerA.endsWith(lowerB) || lowerB.endsWith(lowerA);
}