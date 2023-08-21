function firstLast6(nums){
  if(nums[0]==6){
    return true;
  }
  else if(nums.slice(-1)==6){
    return true;
  }
  return false;
}

//better

function firstLast6(nums){
  let first = nums[0];
  let last = nums[nums.length - 1];

  return first === 6 || last === 6;

}