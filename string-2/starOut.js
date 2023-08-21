function starOut(str){
  let result = '';
  let star = '*';
  for(i=0; i<str.length; i++){
    if(str[i]!==star && str[i-1]!==star && str[i+1]!==star){
      result+= str[i];
    }
  }
  return result;
}