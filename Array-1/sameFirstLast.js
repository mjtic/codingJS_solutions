function sameFirstLast(nums){
  
  let first = nums[0];
  let last = nums[nums.length-1];
  
  return last === first && nums.length >=1;
}