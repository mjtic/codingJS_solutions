function swapEnds(nums){
  let first=nums[0];
  let last =nums[nums.length-1];
  
  nums[0] = last;
  nums[nums.length-1] = first;
  
  return nums; 
}