
function sumNumbers(str) {
  let sum = 0;
  
  for(let i=0; i<str.length; i++){
    if(/\d/.test(str[i])){
      let count = 0;
      
      for(let j=i; j<str.length; j++){
        if(/\d/.test(str[j])){
          count++;
        } else {
          break;
        }
      }
      sum += parseInt(str.slice(i, i+count);
      i+= count; 
    }
  }
  return sum ;
}