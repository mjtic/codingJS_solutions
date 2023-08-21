function frontBack(str){
const code = str.length;
  if (code === 1){
  return str
  }
  return str.charAt(code-1)
    +str.substring(1, code-1)
    +str.charAt(0)
} 
