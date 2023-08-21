function countXX(str){
 let count = 0;
  for (let i=0; i<str.length-1; i++){
    if(str.substring(i,i+2)==="xx")
  count++;
  }
  return count;
}