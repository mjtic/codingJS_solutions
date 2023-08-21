function strCount(str, sub){
  if(str.length<sub.length){
    return 0;
  }
  if(str.slice(0,sub.length)===sub){
    return 1+strCount(str.slice(sub.length),sub);
  }
  return strCount(str.slice(1),sub);
}