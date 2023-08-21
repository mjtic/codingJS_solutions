function isEverywhere(nums, val){
  for(let i=0; i<nums.length-1; i++){
    if(nums[i]!==val &&nums[i+1]!==val){
      return false;
    }
  }
  return true;
}