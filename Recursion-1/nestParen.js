function nestParen(str){
 if(str==='' || str==='()'){
   return true;
 }
  if(str[0]==='(' && str[str.length-1]===')'){
    return nestParen(str.slice(1,str.length-1));
  }
  return false;
}

