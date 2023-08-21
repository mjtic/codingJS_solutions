function stringX(str){
  const frontX = str.at(0);
  const endX = str.at(-1);
  const rest = str.substring(1,str.length-1);
  if(rest.includes('x')){
    return frontX+rest.replaceAll('x','')+endX;
  }
  return str;
}