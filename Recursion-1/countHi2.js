function countHi2(str){
  if(str.length<=1){
    return 0;
  }
  if(str.slice(0,2)==='hi'){
    return 1+countHi2(str.slice(2));
  }
  
  if(str[0]==='x'&& str.length>=3){
    if(str.slice(1,3)==='hi'){
      return countHi2(str.slice(3));
    }
    return countHi2(str.slice(1));
  }
  return countHi2(str.slice(1));  
}