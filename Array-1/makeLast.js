function makeLast(nums){
  let last = nums[nums.length-1];
  let result = new Array(nums.length*2).fill(0);
  
  result[result.length-1] = last
  
  return result;
}