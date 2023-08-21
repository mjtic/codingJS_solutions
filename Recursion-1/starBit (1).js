function starBit(str){
  if(str[0]!=='-'){
    return starBit(str.slice(1));
  }
  return str.slice(0,str.indexOf('*')+1);
}
