function countPairs(str){
  if(str.length<=1){
    return 0;
  }
  if(str[0]===str[2]){
    return 1+countPairs(str.slice(1));
  }
  return countPairs(str.slice(1));
}