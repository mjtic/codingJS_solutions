function sum67(nums){
  let sum = 0;
  let skip = false;
  
  for(let num of nums){
    if(num===6){
      skip = true;
    }else if(num===7 && skip){
      skip = false;
    }else if(!skip){
      sum+= num;
    }
  }
  return sum;
}

