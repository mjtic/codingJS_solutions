function shiftLeft(nums){
  let [first,...rest] = nums;
  
  if(nums.length===0){
    return [];
  }
  return [...rest, first];
}

//using shift();

function shiftLeft(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const eL = nums.shift()
  nums.push(eL);
  
  return nums;
}

//using slice and concat

function shiftLeft(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  return nums.slice(1).concat(nums[0]);
}

// using iteration

function shiftLeft(nums){
  let [start, ...rest] = nums;
  
  return nums.length>=1?[...rest, start]:[];;
}