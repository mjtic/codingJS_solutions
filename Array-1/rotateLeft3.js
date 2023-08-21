function rotateLeft3(nums){
  const  [first, ...rest] = nums;
  return [...rest,first];
}

/*
function rotateLeft3(nums){
  return [nums[1],nums[2],nums[0]];
}
*/