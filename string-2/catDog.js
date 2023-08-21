function catDog(str){
  const meow = (str.match(/cat/g)||[]).length;
  const woof = (str.match(/dog/g)||[]).length;
  
  if(meow===woof){
  return true;
  }
  return false;
}
  