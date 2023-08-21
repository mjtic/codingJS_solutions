function stringClean(str){
  if(str.length<=1){
    return str;
  }
  if(str[0]===str[1]){
    return stringClean(str.slice(1));
  }
  return str[0]+stringClean(str.slice(1));
}