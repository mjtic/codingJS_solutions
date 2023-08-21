function oneTwo(str){
  let result ='';
  
  for(let i=0; i<str.length-2; i++){
    result+= str[i+1]+str[i+2]+str[i];
    i+=2
  }
  return result;
}
