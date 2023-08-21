function squareUp(n){
  let result = [];
  let sum = 0;
  
  for(let i=1; i<=n; i++){
    for(let k=1; k<=n-i; k++){
      result[sum++] = 0;
    }
    for(let j=i; j>0; j--){
      result[sum++] = j;
    }
  }
  return result;
}