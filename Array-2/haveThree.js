function haveThree(nums){
  let count = 0;
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]===3){
      count++;
      if(nums[i-1]===3){
        return false;
      }
    }  
  }
  return count===3;
}