function sameStarChar(str){
 let star = '*';
  for(let i=1; i<str.length-1; i++){
   if(str[i]===star&&str[i-1]!==str[i+1]){
     return false;
   }
 }
  return true;
}