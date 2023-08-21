function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      let count = 0;
      for (let j = i; j < nums.length; j++) {
        if (nums[j] === 2) {
          count++;
        } else {
          break;
        }
      }
      i += count;
      if (count < 2) {
        return false;
      }
    }
  }
  return true;
}

/*
function twoTwo(nums){
  for (let i=0; i<nums.length; i++){
    if(nums[i]===2){
      if(nums[i-1]===2 || nums[i+1]===2){
        continue;
      }else{
        return false;
      }
    }
  }
  return true;
}
*/