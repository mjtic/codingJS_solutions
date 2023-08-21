function array6(nums, i){
  if(nums.length===0){
    return false;
  }
  if(i===nums.length-1){
    return nums[i] === 6
  }
  return nums[i]===6 || array6(nums,i+1);
}