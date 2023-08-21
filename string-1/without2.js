function without2(str){
  if(str.length > 2 && str.slice(0,2)===str.slice(-2)){
    return str.slice(2);
  }
  else if(str.length ===2){
    return '';
  }
  return str; 
}