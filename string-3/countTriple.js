function countTriple(str){
  return Array.from(str).filter((_,i)=> str[i]===str[i+1]&& str[i]===str[i+2]).length;
}