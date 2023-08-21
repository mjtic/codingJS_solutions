function startOz(str){
 const oz = "oz";
 const o = "o";
 const z = "z";
  if(str.substring(0,2)===oz){
  return str.substring(0,2)
  } if(str.substring(0,1)===o){
  return str.substring(0,1)
  }if(str.substring(1,2)===z){
  return str.substring(1,2)
  }else{
  }return str.replace(str,"")
}
