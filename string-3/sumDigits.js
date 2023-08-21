function sumDigits(str) {
  let sum = 0;
  
  for(let i=0; i<str.length; i++){
    if(/\d/.test(str[i])){
      sum+= parseInt(str.slice(i,i+1))
    }
  }
  return sum;
}