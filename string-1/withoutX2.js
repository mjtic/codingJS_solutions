function withoutX2(str){
  if(str.slice(0,2)==='xx'){
    return str.slice(2);
  }
  else if (str[0]==='x'){
    return str.slice(1);
  }
  else if(str[1]==='x'){
    return str[0]+str.slice(2);
  }
  return str; 
}