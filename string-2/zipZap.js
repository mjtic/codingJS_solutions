

function zipZap(str) {
 let result = '';
  for(let i=0; i<str.length; i++){
    if(str[i]==='z'&&str[i+2]==='p'){
      result+= 'zp';
      i+=2;
    } else{
      result+= str[i];
    }
  }
  return result;
}