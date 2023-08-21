function mixString(a, b){
  let result = '';
  let max = Math.max(a.length, b.length);
  for(let i=0; i<max; i++){
    if(i<a.length){
    result+= a[i];
    }
    if(i<b.length){
    result+= b[i];
    }
  }
    return result;
}