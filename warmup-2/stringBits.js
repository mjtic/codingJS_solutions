function stringBits(str){
  //return a new string made of every other char
  //starting with the first
  let result = '';
  for(let i=0; i<str.length; i+=2){
    result+=str.charAt(i);
  }
  return result;
}