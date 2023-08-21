function array220(nums, i){
  if(nums.length<=1 || i===nums.length-1){
    return false;
  }
  return nums[i+1] === nums[i]*10 || array220(nums,i+1);
}