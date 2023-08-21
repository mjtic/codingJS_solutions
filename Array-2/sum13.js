function sum13 (nums){
  let sum = 0;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]===13){
      i++;
    }else{
      sum+= nums[i];
    }
  }
  return sum;
}

/*
function sum13(nums){
  let sum = 0;
  let skip = false;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]===13){
      skip = true;
    }else if(!skip){
      sum+=nums[i];
    }else{
      skip = false;
    }
  }
    return sum;
}
*/