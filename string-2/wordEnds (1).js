function wordEnds(str, word) {
  let result = '';

  for(let i=0; i<str.length; i++){
   if(str.slice(i, i+word.length)===word){
     if(i>0){
       result+= str[i-1]
     }
   if(i+word.length < str.length){
     result+= str[i+word.length]
   }
   } 
  }
    return result;
}