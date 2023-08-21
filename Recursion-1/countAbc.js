function countAbc(str){
  if(str.length <= 2){
    return 0;
  }
  if(str.slice(0,3)==='abc' || str.slice(0,3)==='aba'){
    return 1+ countAbc(str.slice(1));
  }
  return countAbc(str.slice(1));
}