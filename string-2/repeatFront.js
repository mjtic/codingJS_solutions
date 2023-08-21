function repeatFront(str, n){
  let result ='';
  for(let i=n; i>0; i--){
    result += str.slice(0, i);
  }
  return result; 
}