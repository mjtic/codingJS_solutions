function middleThree(str){
  const middle = Math.floor(str.length/2)-1;
  return str.length<=3? str: str.slice(middle,middle+3);