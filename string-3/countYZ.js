function countYZ(str) {
 let count = 0; 
  str = str.toLowerCase() + ' ';
  
  for(let i=0; i<str.length; i++){
    if((str[i]==='z' || str[i]==='y') && !isLetter(str[i+1])){
      count ++;
    }
  }
  return count;
  
 function isLetter(char){
    return char.toLowerCase() !== char.toUpperCase();
  }  
}
