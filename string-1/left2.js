function left2(str){
  if(str.length>2){
  return str.substring(2)+str.slice(0,2)
  }
  return str;
}