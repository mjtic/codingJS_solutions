/*
function lucky13(nums){
  for(let num of nums){
    if(num===1 || num ===3){
      return false;
    }
  }
  return true;
}
*/
function lucky13(nums){
  return !nums.some((num,i)=>nums[i]===1||nums[i]===3);
} 