function count11(str){
  if(str.length<=1){
    return 0;
  }
  if(str.slice(0,2)==='11'){
    return 1+count11(str.slice(2));
  }
  return count11(str.slice(1));
}