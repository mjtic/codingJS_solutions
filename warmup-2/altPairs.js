/*
function altPairs(str){
 let result = '';
  for(let i=0; i<str.length; i+=4){
    result+= str.charAt(i);
    if(i+1<str.length){
      result+= str.charAt(i+1);
    }
  }
  return result;
}
*/
function altPairs(str) {
  return Array.from(str).filter((_, i) => i % 4 === 0 || i % 4 === 1).join('');
}