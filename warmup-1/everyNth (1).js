function everyNth(str, n){
 let nthStr = '';
  for(let i=0;i<str.length; i+=n){
   nthStr+=str.charAt(i)
  }
  return nthStr;
}