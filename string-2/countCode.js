function countCode(str){
  const code = (str.match(/co[a-z]e/g)||[]).length;
  return code;
}