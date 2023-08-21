function endUp(str){ 
  let last3 = str.substring(str.length-3)
  let rest = str.slice(0,-3)
  if(str.length<3){
  return str.toUpperCase();
  }else{
  return rest+last3.toUpperCase();
  }
}