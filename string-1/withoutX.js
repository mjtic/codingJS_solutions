function withoutX(str){
if(str[0]==='x' && str.slice(-1)==='x'){
  return str.slice(1,-1);
}
  else if(str[0]==='x'){
  return str.slice(1);
}
  else if(str.slice(-1)==='x'){
    return str.slice(0,-1);
  }
  return str; 
}