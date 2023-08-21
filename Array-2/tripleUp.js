function tripleUp(nums){
  for (let i=0; i<nums.length; i++){
    if(nums[i]+1===nums[i+1]){
      if(nums[i-1]+1===nums[i]){
        return true;
      }
    }
  }
  return false;
}

// using count;

function tripleUp(nums){
  
  let count = 1;
  for(let i=0; i<nums.length; i++){
    if(nums[i]+1 === nums[i+1]){
      count ++;
      if(count === 3){
        return true;
      }
    }else{
      count = 1;
    }
  }
  return false;
}