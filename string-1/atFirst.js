function atFirst(str){
  if(str.length<2&&str.length>0){
    return str+'@'
  }else if(str.length>=2){
    return str.slice(0,2)
  }
  return '@@'
}