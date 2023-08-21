function commonEnd(a, b){
  let firstE = a[0] === b[0];
  let lastE = a[a.length-1] === b[b.length-1];
  
  return firstE || lastE;
}