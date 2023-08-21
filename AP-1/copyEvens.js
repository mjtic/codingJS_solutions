function copyEvens(nums, count){
  const result= Array(count);
  let position = 0;
  
  for(num of nums){
    if(num%2===0){
      result[position]=num;
      position++;
    }
    if(position===count){
      break;
    }
  }
  return result;
}