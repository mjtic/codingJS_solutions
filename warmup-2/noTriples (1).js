function noTriples(nums){
return !nums.some((num,i)=>num===nums[i+1]&&num===nums[i+2])
}

/*
function noTriples(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i]===nums[i+1]&&nums[i]===nums[i+2]){
      return false;
    }
  }
  return true;
}
*/