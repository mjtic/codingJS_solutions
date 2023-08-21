function maxTriple(nums){
  let first = nums[0];
  let mid = nums[Math.floor(nums.length/2)];
  let last = nums[nums.length-1];
  
  return Math.max(first,mid,last);

}