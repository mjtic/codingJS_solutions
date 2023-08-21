function doubleChar(str){
 const result = '';
  for(let i=0; i<str.length; i++){
   result+= str.charAt(i)+str.charAt(i)
  }
  return result;
}

//

function doubleChar(str){
  return Array.from(str).map(str=>str.repeat(2)).join('')
}