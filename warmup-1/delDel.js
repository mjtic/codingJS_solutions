function delDel(str){
  if(str.startsWith("del",1)){
  return str.charAt(0)+str.substring(4, str.length)
}else{
return str;
 }
}

function delDel(str){
  if(str.startsWith('del',1)){
  return str.replace(/del/i, '')
  }else{
  return str;
  }
}
  