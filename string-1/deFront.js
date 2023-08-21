function deFront(str){
  if(str[0]==='a'&&str[1]==='b'){
    return str; 
  }
  else if(str[0]==='a'){
    return str[0]+str.slice(2);
  }
  else if(str[1]==='b'){
    return str.slice(1)
  }

  return str.slice(2);
}