function makeEnds(nums){
  return nums.length>=2?[nums.shift(),nums.pop()]:[nums[0],nums[0]];
}

/*
function makeEnds(nums){
  return [nums[0],nums[nums.length-1]];
}
*/